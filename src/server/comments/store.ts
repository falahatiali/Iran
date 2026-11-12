/* The comments store: its own SQLite file, apart from the content database.
 * The content database is rebuilt and reseeded on every build and boot; readers' accounts and
 * comments must never be, so they live in a separate file on the same persistent volume. */
import path from 'node:path'
import fs from 'node:fs'
import { createClient, type Client, type InValue } from '@libsql/client'
import { MIGRATIONS } from './schema'

export interface Store {
  all<T>(sql: string, args?: unknown[]): Promise<T[]>
  get<T>(sql: string, args?: unknown[]): Promise<T | null>
  /** returns the number of rows changed */
  run(sql: string, args?: unknown[]): Promise<number>
  /** runs statements atomically */
  tx(stmts: { sql: string; args?: unknown[] }[]): Promise<void>
  close(): void
}

export function commentsDbUrl(env: NodeJS.ProcessEnv = process.env): string {
  if (env.COMMENTS_DATABASE_URL) return env.COMMENTS_DATABASE_URL
  const main = env.DATABASE_URL
  if (main?.startsWith('file:')) return `file:${path.join(path.dirname(main.slice(5)), 'comments.db')}`
  return `file:${path.resolve(process.cwd(), 'data/comments.db')}`
}

export async function openStore(url: string): Promise<Store> {
  if (url.startsWith('file:') && !url.includes(':memory:')) fs.mkdirSync(path.dirname(url.slice(5)), { recursive: true })
  const client: Client = createClient({ url })
  // WAL lets the old and the new container read during a blue/green switch; busy_timeout waits out a writer.
  if (!url.includes(':memory:')) await client.execute('PRAGMA journal_mode = WAL').catch(() => undefined)
  await client.execute('PRAGMA busy_timeout = 5000')
  await client.execute('PRAGMA foreign_keys = ON')
  const store: Store = {
    async all<T>(sql: string, args: unknown[] = []) {
      const r = await client.execute({ sql, args: args as InValue[] })
      return r.rows.map((row) => ({ ...row }) as T)
    },
    async get<T>(sql: string, args: unknown[] = []) {
      return (await store.all<T>(sql, args))[0] ?? null
    },
    async run(sql, args = []) {
      return (await client.execute({ sql, args: args as InValue[] })).rowsAffected
    },
    async tx(stmts) {
      await client.batch(stmts.map((s) => ({ sql: s.sql, args: (s.args ?? []) as InValue[] })), 'write')
    },
    close() { client.close() },
  }
  await migrate(store)
  return store
}

export async function migrate(store: Store) {
  await store.run('CREATE TABLE IF NOT EXISTS schema_migrations (version TEXT PRIMARY KEY, applied_at TEXT NOT NULL)')
  const done = new Set((await store.all<{ version: string }>('SELECT version FROM schema_migrations')).map((r) => r.version))
  for (const m of MIGRATIONS) {
    if (done.has(m.version)) continue
    const stmts = m.up.split(/;\s*\n/).map((s) => s.trim()).filter(Boolean).map((sql) => ({ sql }))
    stmts.push({ sql: `INSERT INTO schema_migrations VALUES (?, datetime('now'))`, args: [m.version] } as { sql: string; args?: unknown[] })
    try {
      await store.tx(stmts)
    } catch (e) {
      // another process (the other blue/green container) may have applied it first
      const now = await store.get('SELECT version FROM schema_migrations WHERE version = ?', [m.version])
      if (!now) throw e
    }
  }
}
