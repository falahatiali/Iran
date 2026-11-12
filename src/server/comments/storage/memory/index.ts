/* In-memory adapter: no persistence. Proves the storage contract is database-agnostic, and keeps tests fast. */
import type { CommentStatus } from '../../../../lib/commentTypes'
import type { Comment, LoginCode, Session, Storage, StorageFactory, User } from '../types'

const copy = <T extends object>(x: T): T => ({ ...x })

export function memoryStorage(): Storage {
  const users = new Map<number, User>()
  const codes = new Map<string, LoginCode>()
  const codeOrder: string[] = []
  const sessions = new Map<string, Session>()
  const events: { bucket: string; at: number }[] = []
  const comments = new Map<number, Comment>()
  const secrets = new Map<string, string>()
  let userSeq = 0
  let commentSeq = 0
  const byNewest = (a: LoginCode, b: LoginCode) => b.createdAt - a.createdAt || codeOrder.indexOf(b.id) - codeOrder.indexOf(a.id)
  const byTime = (dir: 1 | -1) => (a: Comment, b: Comment) => dir * (a.createdAt - b.createdAt || a.id - b.id)

  return {
    driver: 'memory',
    users: {
      async findById(id) { const u = users.get(id); return u ? copy(u) : null },
      async findByIds(ids) { return ids.flatMap((id) => (users.has(id) ? [copy(users.get(id)!)] : [])) },
      async findByEmail(email) { for (const u of users.values()) if (u.email === email) return copy(u); return null },
      async ensure(email, now) {
        for (const u of users.values()) if (u.email === email) return copy(u)
        const u: User = { id: ++userSeq, email, displayName: null, passwordHash: null, blocked: false, createdAt: now, lastLoginAt: null }
        users.set(u.id, u)
        return copy(u)
      },
      async recordLogin(id, at) { const u = users.get(id); if (u) u.lastLoginAt = at },
      async setPasswordHash(id, hash) { const u = users.get(id); if (u) u.passwordHash = hash },
      async setDisplayName(id, name) { const u = users.get(id); if (u) u.displayName = name },
      async setBlocked(id, blocked) { const u = users.get(id); if (u) u.blocked = blocked },
    },
    codes: {
      async create(c) { codes.set(c.id, copy(c)); codeOrder.push(c.id) },
      async findById(id) { const c = codes.get(id); return c ? copy(c) : null },
      async latestUnconsumed(email) { return [...codes.values()].filter((c) => c.email === email && c.consumedAt == null).sort(byNewest).map(copy)[0] ?? null },
      async findUsable(email, now, max, limit) {
        return [...codes.values()].filter((c) => c.email === email && c.consumedAt == null && c.expiresAt > now && c.attempts < max).sort(byNewest).slice(0, limit).map(copy)
      },
      async anyCreatedSince(email, since) { return [...codes.values()].some((c) => c.email === email && c.createdAt > since) },
      async incrementAttempts(ids) { for (const id of new Set(ids)) { const c = codes.get(id); if (c) c.attempts++ } },
      async consume(id, at) { const c = codes.get(id); if (!c || c.consumedAt != null) return false; c.consumedAt = at; return true },
      async consumeAllFor(email, at) { for (const c of codes.values()) if (c.email === email && c.consumedAt == null) c.consumedAt = at },
      async delete(id) { codes.delete(id) },
      async deleteExpiredBefore(t) { for (const [id, c] of codes) if (c.expiresAt < t) codes.delete(id) },
    },
    sessions: {
      async create(x) { sessions.set(x.idHash, copy(x)) },
      async findByIdHash(h) { const x = sessions.get(h); return x ? copy(x) : null },
      async touch(h, lastSeenAt, expiresAt) { const x = sessions.get(h); if (x) Object.assign(x, { lastSeenAt, expiresAt }) },
      async delete(h) { sessions.delete(h) },
      async deleteForUser(userId) { for (const [h, x] of sessions) if (x.userId === userId) sessions.delete(h) },
      async deleteExpired(now) { for (const [h, x] of sessions) if (x.expiresAt < now) sessions.delete(h) },
    },
    rateLimits: {
      async count(bucket, since) { return events.filter((e) => e.bucket === bucket && e.at > since).length },
      async hit(buckets, at) { for (const bucket of buckets) events.push({ bucket, at }) },
      async clear(bucket) { for (let i = events.length - 1; i >= 0; i--) if (events[i].bucket === bucket) events.splice(i, 1) },
      async pruneBefore(t) { for (let i = events.length - 1; i >= 0; i--) if (events[i].at < t) events.splice(i, 1) },
    },
    comments: {
      async create(c) { const id = ++commentSeq; comments.set(id, { ...c, id }); return id },
      async findById(id) { const c = comments.get(id); return c ? copy(c) : null },
      async findByIds(ids) { return ids.flatMap((id) => (comments.has(id) ? [copy(comments.get(id)!)] : [])) },
      async listVisible(path, viewerId, limit) {
        return [...comments.values()].filter((c) => c.pagePath === path && (c.status === 'approved' || (c.status === 'pending' && c.userId === viewerId)))
          .sort(byTime(1)).slice(0, limit).map(copy)
      },
      async query(q) {
        return [...comments.values()].filter((c) => (!q.status || c.status === q.status) && (!q.pagePath || c.pagePath === q.pagePath))
          .sort(byTime(q.order === 'asc' ? 1 : -1)).slice(q.offset, q.offset + q.limit).map(copy)
      },
      async existsSince(userId, body, since) { return [...comments.values()].some((c) => c.userId === userId && c.body === body && c.createdAt > since) },
      async countByStatus() {
        const out: Record<CommentStatus, number> = { pending: 0, approved: 0, rejected: 0 }
        for (const c of comments.values()) out[c.status]++
        return out
      },
      async pages(limit) {
        const m = new Map<string, { path: string; total: number; pending: number }>()
        for (const c of comments.values()) {
          const p = m.get(c.pagePath) ?? { path: c.pagePath, total: 0, pending: 0 }
          p.total++; if (c.status === 'pending') p.pending++
          m.set(c.pagePath, p)
        }
        return [...m.values()].sort((a, b) => b.pending - a.pending || b.total - a.total || a.path.localeCompare(b.path)).slice(0, limit)
      },
      async setStatus(id, status, at, by) { const c = comments.get(id); if (!c) return false; Object.assign(c, { status, moderatedAt: at, moderatedBy: by }); return true },
      async delete(id) {
        if (!comments.has(id)) return false
        comments.delete(id)
        for (const [k, c] of comments) if (c.parentId === id) comments.delete(k)
        return true
      },
    },
    secrets: {
      async getOrCreate(name, value) { if (!secrets.has(name)) secrets.set(name, value); return secrets.get(name)! },
    },
    close() {},
  }
}

export const createMemoryStorage: StorageFactory = async () => memoryStorage()
