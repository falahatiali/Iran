/* SQLite adapter (libSQL client: a local file, or Turso via a libsql:// URL). The only place with SQL. */
import type { CommentStatus } from '../../../../lib/commentTypes'
import type { Comment, LoginCode, Session, Storage, StorageFactory, User } from '../types'
import { commentsDbUrl, openStore, type Store } from './client'

type Row = Record<string, unknown>
const n = (v: unknown) => (v == null ? null : Number(v))
const s = (v: unknown) => (v == null ? null : String(v))
const marks = (k: number) => Array.from({ length: k }, () => '?').join(',')

const toUser = (r: Row): User => ({
  id: Number(r.id), email: String(r.email), displayName: s(r.display_name), passwordHash: s(r.password_hash),
  blocked: !!Number(r.blocked), createdAt: Number(r.created_at), lastLoginAt: n(r.last_login_at),
})
const toCode = (r: Row): LoginCode => ({
  id: String(r.id), email: String(r.email), codeHash: String(r.code_hash), createdAt: Number(r.created_at),
  expiresAt: Number(r.expires_at), attempts: Number(r.attempts), consumedAt: n(r.consumed_at), ipHash: s(r.ip_hash),
})
const toSession = (r: Row): Session => ({
  idHash: String(r.id_hash), userId: Number(r.user_id), authMethod: String(r.auth_method), createdAt: Number(r.created_at),
  expiresAt: Number(r.expires_at), lastSeenAt: Number(r.last_seen_at), deviceId: s(r.device_id), userAgent: s(r.user_agent), ipHash: s(r.ip_hash),
})
const toComment = (r: Row): Comment => ({
  id: Number(r.id), pagePath: String(r.page_path), anchor: String(r.anchor), quote: s(r.quote), blockText: s(r.block_text),
  parentId: n(r.parent_id), userId: Number(r.user_id), body: String(r.body), status: r.status as CommentStatus,
  isAdmin: !!Number(r.is_admin), locale: String(r.locale), createdAt: Number(r.created_at),
  moderatedAt: n(r.moderated_at), moderatedBy: n(r.moderated_by), ipHash: s(r.ip_hash),
})

export function sqliteStorage(db: Store): Storage {
  return {
    driver: 'sqlite',
    users: {
      async findById(id) { const r = await db.get<Row>('SELECT * FROM users WHERE id = ?', [id]); return r && toUser(r) },
      async findByIds(ids) { return ids.length ? (await db.all<Row>(`SELECT * FROM users WHERE id IN (${marks(ids.length)})`, ids)).map(toUser) : [] },
      async findByEmail(email) { const r = await db.get<Row>('SELECT * FROM users WHERE email = ?', [email]); return r && toUser(r) },
      async ensure(email, now) {
        await db.run('INSERT INTO users (email, created_at) VALUES (?, ?) ON CONFLICT (email) DO NOTHING', [email, now])
        return toUser((await db.get<Row>('SELECT * FROM users WHERE email = ?', [email]))!)
      },
      async recordLogin(id, at) { await db.run('UPDATE users SET last_login_at = ? WHERE id = ?', [at, id]) },
      async setPasswordHash(id, hash) { await db.run('UPDATE users SET password_hash = ? WHERE id = ?', [hash, id]) },
      async setDisplayName(id, name) { await db.run('UPDATE users SET display_name = ? WHERE id = ?', [name, id]) },
      async setBlocked(id, blocked) { await db.run('UPDATE users SET blocked = ? WHERE id = ?', [blocked ? 1 : 0, id]) },
    },
    codes: {
      async create(c) {
        await db.run('INSERT INTO login_codes (id, email, code_hash, created_at, expires_at, attempts, consumed_at, ip_hash) VALUES (?,?,?,?,?,?,?,?)',
          [c.id, c.email, c.codeHash, c.createdAt, c.expiresAt, c.attempts, c.consumedAt, c.ipHash])
      },
      async findById(id) { const r = await db.get<Row>('SELECT * FROM login_codes WHERE id = ?', [id]); return r && toCode(r) },
      async latestUnconsumed(email) {
        const r = await db.get<Row>('SELECT * FROM login_codes WHERE email = ? AND consumed_at IS NULL ORDER BY created_at DESC, rowid DESC LIMIT 1', [email])
        return r && toCode(r)
      },
      async findUsable(email, now, maxAttempts, limit) {
        return (await db.all<Row>('SELECT * FROM login_codes WHERE email = ? AND consumed_at IS NULL AND expires_at > ? AND attempts < ? ORDER BY created_at DESC, rowid DESC LIMIT ?',
          [email, now, maxAttempts, limit])).map(toCode)
      },
      async anyCreatedSince(email, since) { return !!(await db.get('SELECT 1 AS x FROM login_codes WHERE email = ? AND created_at > ?', [email, since])) },
      async incrementAttempts(ids) { if (ids.length) await db.run(`UPDATE login_codes SET attempts = attempts + 1 WHERE id IN (${marks(ids.length)})`, ids) },
      async consume(id, at) { return (await db.run('UPDATE login_codes SET consumed_at = ? WHERE id = ? AND consumed_at IS NULL', [at, id])) > 0 },
      async consumeAllFor(email, at) { await db.run('UPDATE login_codes SET consumed_at = ? WHERE email = ? AND consumed_at IS NULL', [at, email]) },
      async delete(id) { await db.run('DELETE FROM login_codes WHERE id = ?', [id]) },
      async deleteExpiredBefore(t) { await db.run('DELETE FROM login_codes WHERE expires_at < ?', [t]) },
    },
    sessions: {
      async create(x) {
        await db.run('INSERT INTO sessions (id_hash, user_id, auth_method, created_at, expires_at, last_seen_at, device_id, user_agent, ip_hash) VALUES (?,?,?,?,?,?,?,?,?)',
          [x.idHash, x.userId, x.authMethod, x.createdAt, x.expiresAt, x.lastSeenAt, x.deviceId, x.userAgent, x.ipHash])
      },
      async findByIdHash(h) { const r = await db.get<Row>('SELECT * FROM sessions WHERE id_hash = ?', [h]); return r && toSession(r) },
      async touch(h, lastSeenAt, expiresAt) { await db.run('UPDATE sessions SET last_seen_at = ?, expires_at = ? WHERE id_hash = ?', [lastSeenAt, expiresAt, h]) },
      async delete(h) { await db.run('DELETE FROM sessions WHERE id_hash = ?', [h]) },
      async deleteForUser(userId) { await db.run('DELETE FROM sessions WHERE user_id = ?', [userId]) },
      async deleteExpired(now) { await db.run('DELETE FROM sessions WHERE expires_at < ?', [now]) },
    },
    rateLimits: {
      async count(bucket, since) { return Number((await db.get<{ c: number }>('SELECT COUNT(*) AS c FROM rate_events WHERE bucket = ? AND at > ?', [bucket, since]))?.c ?? 0) },
      async hit(buckets, at) { if (buckets.length) await db.tx(buckets.map((b) => ({ sql: 'INSERT INTO rate_events (bucket, at) VALUES (?, ?)', args: [b, at] }))) },
      async clear(bucket) { await db.run('DELETE FROM rate_events WHERE bucket = ?', [bucket]) },
      async pruneBefore(t) { await db.run('DELETE FROM rate_events WHERE at < ?', [t]) },
    },
    comments: {
      async create(c) {
        const r = await db.get<{ id: number }>(
          `INSERT INTO comments (page_path, anchor, quote, block_text, parent_id, user_id, body, status, is_admin, locale, created_at, moderated_at, moderated_by, ip_hash)
           VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?) RETURNING id`,
          [c.pagePath, c.anchor, c.quote, c.blockText, c.parentId, c.userId, c.body, c.status, c.isAdmin ? 1 : 0, c.locale, c.createdAt, c.moderatedAt, c.moderatedBy, c.ipHash])
        return Number(r!.id)
      },
      async findById(id) { const r = await db.get<Row>('SELECT * FROM comments WHERE id = ?', [id]); return r && toComment(r) },
      async findByIds(ids) { return ids.length ? (await db.all<Row>(`SELECT * FROM comments WHERE id IN (${marks(ids.length)})`, ids)).map(toComment) : [] },
      async listVisible(path, viewerId, limit) {
        return (await db.all<Row>(`SELECT * FROM comments WHERE page_path = ? AND (status = 'approved' OR (status = 'pending' AND user_id = ?)) ORDER BY created_at ASC, id ASC LIMIT ?`,
          [path, viewerId ?? -1, limit])).map(toComment)
      },
      async query(q) {
        const where: string[] = []
        const args: unknown[] = []
        if (q.status) { where.push('status = ?'); args.push(q.status) }
        if (q.pagePath) { where.push('page_path = ?'); args.push(q.pagePath) }
        const dir = q.order === 'asc' ? 'ASC' : 'DESC'
        return (await db.all<Row>(`SELECT * FROM comments ${where.length ? `WHERE ${where.join(' AND ')}` : ''} ORDER BY created_at ${dir}, id ${dir} LIMIT ? OFFSET ?`,
          [...args, q.limit, q.offset])).map(toComment)
      },
      async existsSince(userId, body, since) { return !!(await db.get('SELECT 1 AS x FROM comments WHERE user_id = ? AND body = ? AND created_at > ?', [userId, body, since])) },
      async countByStatus() {
        const out: Record<CommentStatus, number> = { pending: 0, approved: 0, rejected: 0 }
        for (const r of await db.all<{ status: CommentStatus; c: number }>('SELECT status, COUNT(*) AS c FROM comments GROUP BY status')) out[r.status] = Number(r.c)
        return out
      },
      async pages(limit) {
        return (await db.all<{ page_path: string; total: number; pending: number }>(
          `SELECT page_path, COUNT(*) AS total, SUM(status = 'pending') AS pending FROM comments GROUP BY page_path ORDER BY pending DESC, total DESC, page_path ASC LIMIT ?`, [limit]))
          .map((r) => ({ path: r.page_path, total: Number(r.total), pending: Number(r.pending) }))
      },
      async setStatus(id, status, at, by) { return (await db.run('UPDATE comments SET status = ?, moderated_at = ?, moderated_by = ? WHERE id = ?', [status, at, by, id])) > 0 },
      async delete(id) { return (await db.run('DELETE FROM comments WHERE id = ?', [id])) > 0 },
    },
    secrets: {
      async getOrCreate(name, value) {
        await db.run('INSERT INTO app_secrets (name, value) VALUES (?, ?) ON CONFLICT (name) DO NOTHING', [name, value])
        return String((await db.get<{ value: string }>('SELECT value FROM app_secrets WHERE name = ?', [name]))!.value)
      },
    },
    close: () => db.close(),
  }
}

/** url: `file:/path/comments.db` (default: comments.db next to DATABASE_URL), `:memory:`, or `libsql://…` (Turso). */
export const createSqliteStorage: StorageFactory = async ({ url, env }) => sqliteStorage(await openStore(url ?? commentsDbUrl(env)))
