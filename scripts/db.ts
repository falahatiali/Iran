/* Migration / seed CLI: tsx scripts/db.ts <migrate|rollback|seed|reset|smoke> */
import fs from 'node:fs'
import path from 'node:path'
import { createDriver, dbConfig } from '../src/server/db/factory'
import type { SqlDriver } from '../src/server/db/repositories'
import { dynasties } from '../src/data/dynasties'
import { sources, dynastySources, extents } from '../src/data/sources'

const MIG_DIR = path.resolve(import.meta.dirname, '../migrations')

function migrations() {
  return fs.readdirSync(MIG_DIR).filter((f) => f.endsWith('.up.sql')).sort()
    .map((f) => ({ version: f.replace('.up.sql', ''), up: path.join(MIG_DIR, f), down: path.join(MIG_DIR, f.replace('.up.sql', '.down.sql')) }))
}

async function ensureTable(db: SqlDriver) {
  await db.exec(`CREATE TABLE IF NOT EXISTS schema_migrations (version TEXT PRIMARY KEY, applied_at TEXT NOT NULL)`)
}
async function applied(db: SqlDriver) {
  return (await db.query<{ version: string }>(`SELECT version FROM schema_migrations ORDER BY version`)).map((r) => r.version)
}

export async function migrate(db: SqlDriver) {
  await ensureTable(db)
  const done = new Set(await applied(db))
  for (const m of migrations()) {
    if (done.has(m.version)) continue
    await db.exec(`BEGIN;\n${fs.readFileSync(m.up, 'utf8')}\nINSERT INTO schema_migrations VALUES ('${m.version}', datetime('now'));\nCOMMIT;`)
    console.log(`↑ ${m.version}`)
  }
}

export async function rollback(db: SqlDriver, all = false) {
  await ensureTable(db)
  const done = (await applied(db)).reverse()
  for (const v of all ? done : done.slice(0, 1)) {
    const m = migrations().find((x) => x.version === v)
    if (!m) throw new Error(`missing migration files for ${v}`)
    await db.exec(`BEGIN;\n${fs.readFileSync(m.down, 'utf8')}\nDELETE FROM schema_migrations WHERE version = '${v}';\nCOMMIT;`)
    console.log(`↓ ${v}`)
  }
}

export async function seed(db: SqlDriver) {
  const ids = new Set(dynasties.flatMap((d) => d.rulers.map((r) => r.id)))
  const stmts: { sql: string; args?: unknown[] }[] = [
    { sql: 'DELETE FROM relations' }, { sql: 'DELETE FROM events' }, { sql: 'DELETE FROM rulers' },
    { sql: 'DELETE FROM dynasty_sources' }, { sql: 'DELETE FROM extents' }, { sql: 'DELETE FROM sources' }, { sql: 'DELETE FROM dynasties' },
  ]
  for (const s of sources) stmts.push({ sql: 'INSERT INTO sources VALUES (?,?,?,?,?)', args: [s.id, s.title, s.author ?? null, s.kind, s.url ?? null] })
  dynasties.forEach((d, i) => {
    stmts.push({ sql: 'INSERT INTO dynasties VALUES (?,?,?,?,?,?,?,?,?,?)', args: [d.slug, d.name, d.latin, d.era, d.start, d.end, d.capital, d.summary, d.accent, i] })
    for (const sid of dynastySources[d.slug] ?? []) stmts.push({ sql: 'INSERT INTO dynasty_sources VALUES (?,?)', args: [d.slug, sid] })
    if (extents[d.slug]) stmts.push({ sql: 'INSERT INTO extents VALUES (?,?)', args: [d.slug, JSON.stringify(extents[d.slug])] })
    d.rulers.forEach((r, j) => stmts.push({ sql: 'INSERT INTO rulers VALUES (?,?,?,?,?,?,?,?)', args: [r.id, d.slug, r.name, r.latin, r.start, r.end, r.description, j] }))
    d.events.forEach((e) => stmts.push({ sql: 'INSERT INTO events VALUES (?,?,?,?,?,?,?)', args: [e.id, d.slug, e.year, e.title, e.type, e.importance, e.description ?? null] }))
  })
  const rel = (rid: string, kind: string, v?: string) => {
    if (!v) return
    stmts.push({ sql: 'INSERT INTO relations (ruler_id, kind, related_ruler_id, related_name) VALUES (?,?,?,?)', args: ids.has(v) ? [rid, kind, v, null] : [rid, kind, null, v] })
  }
  for (const d of dynasties) for (const r of d.rulers) {
    rel(r.id, 'father', r.family.father); rel(r.id, 'mother', r.family.mother)
    for (const s of r.family.spouses ?? []) rel(r.id, 'spouse', s)
  }
  await db.batch(stmts)
  console.log(`seeded ${dynasties.length} dynasties, ${ids.size} rulers, ${dynasties.reduce((n, d) => n + d.events.length, 0)} events, ${sources.length} sources`)
}

async function counts(db: SqlDriver) {
  const q = async (t: string) => (await db.query<{ n: number }>(`SELECT COUNT(*) AS n FROM ${t}`))[0].n
  return { dynasties: await q('dynasties'), rulers: await q('rulers'), events: await q('events'), relations: await q('relations') }
}

async function main() {
  const cmd = process.argv[2]
  const { url } = dbConfig()
  if (url.startsWith('file:')) fs.mkdirSync(path.dirname(url.slice(5)), { recursive: true })
  const db = createDriver()
  try {
    if (cmd === 'migrate') await migrate(db)
    else if (cmd === 'rollback') await rollback(db, process.argv.includes('--all'))
    else if (cmd === 'seed') await seed(db)
    else if (cmd === 'reset') { await rollback(db, true); await migrate(db); await seed(db) }
    else if (cmd === 'smoke') {
      await rollback(db, true); await migrate(db); await seed(db)
      const a = await counts(db)
      await rollback(db, true)
      const left = await db.query(`SELECT name FROM sqlite_master WHERE type='table' AND name NOT IN ('schema_migrations','sqlite_sequence')`)
      if (left.length) throw new Error(`rollback left tables: ${JSON.stringify(left)}`)
      await migrate(db); await seed(db)
      const b = await counts(db)
      if (JSON.stringify(a) !== JSON.stringify(b) || a.rulers === 0) throw new Error(`count mismatch ${JSON.stringify(a)} vs ${JSON.stringify(b)}`)
      console.log('smoke OK', b)
    } else throw new Error('usage: db.ts migrate|rollback [--all]|seed|reset|smoke')
  } finally { db.close() }
}

main().catch((e) => { console.error(e); process.exit(1) })
