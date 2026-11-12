/* Accounts, one-time codes, sessions, and comments. Pure of HTTP: the server functions in
 * src/server/commentsApi.ts hand it the request facts (ip hash, user agent) and the cookies. */
import type { Store } from './store'
import type { Mailer } from './mailer'
import { MailUnavailableError } from './mailer'
import type { CommentsConfig } from './config'
import { AppError } from './errors'
import { codeEmail } from './emailTemplate'
import { rateLimiter } from './rateLimit'
import { hashPassword, hmac, newCode, randomToken, safeEqual, sha256, verifyPassword } from './crypto'
import { cleanAnchor, cleanLine, cleanPath, cleanText, normalizeCode, normalizeEmail } from './sanitize'
import type { AdminComment, CommentStatus, Me, PublicComment } from '../../lib/commentTypes'

const MIN = 60_000
const HOUR = 60 * MIN
const DAY = 24 * HOUR

export const LIMITS = {
  codeTtl: 10 * MIN,
  resendAfter: 60_000,
  codesPerEmailHour: 5,
  codesPerIpHour: 15,
  codesGlobalHour: 300,
  attemptsPerCode: 5,
  failsPerEmail15m: 10,
  failsPerIpHour: 40,
  passwordFailsPerEmail15m: 5,
  passwordFailsPerIpHour: 20,
  sessionTtl: 180 * DAY,
  freshLogin: 15 * MIN,
  commentsPerUser10m: 6,
  commentsPerUserDay: 40,
  commentsPerIpHour: 20,
  bodyMin: 2,
  bodyMax: 4000,
  quoteMax: 500,
  blockTextMax: 600,
  nameMax: 40,
  passwordMin: 8,
  passwordMax: 200,
} as const

export interface RequestFacts { ip: string; userAgent?: string; deviceId?: string }
export interface SessionUser { id: number; email: string; displayName: string | null; hasPassword: boolean; isAdmin: boolean; blocked: boolean; authMethod: string; sessionCreatedAt: number }

interface UserRow { id: number; email: string; display_name: string | null; password_hash: string | null; blocked: number }

export async function createService(deps: { store: Store; mailer: Mailer; config: CommentsConfig; now?: () => number }) {
  const { store, mailer, config } = deps
  const now = deps.now ?? Date.now
  const rl = rateLimiter(store, now)
  const secret = config.authSecret ?? (await storedSecret(store))
  const ipKey = (ip: string) => hmac(secret, `ip:${ip}`).slice(0, 22)
  const codeHash = (id: string, email: string, code: string) => hmac(secret, `code:${id}:${email}:${code}`)
  const isAdminEmail = (email: string) => config.adminEmails.has(email)

  async function userByEmail(email: string) {
    return store.get<UserRow>('SELECT id, email, display_name, password_hash, blocked FROM users WHERE email = ?', [email])
  }

  async function ensureUser(email: string): Promise<UserRow> {
    await store.run('INSERT INTO users (email, created_at) VALUES (?, ?) ON CONFLICT (email) DO NOTHING', [email, now()])
    return (await userByEmail(email))!
  }

  async function startSession(user: UserRow, method: 'code' | 'password', req: RequestFacts) {
    const token = randomToken(32)
    const t = now()
    await store.tx([
      { sql: 'INSERT INTO sessions (id_hash, user_id, auth_method, created_at, expires_at, last_seen_at, device_id, user_agent, ip_hash) VALUES (?,?,?,?,?,?,?,?,?)',
        args: [sha256(token), user.id, method, t, t + LIMITS.sessionTtl, t, req.deviceId ?? null, (req.userAgent ?? '').slice(0, 200) || null, ipKey(req.ip)] },
      { sql: 'UPDATE users SET last_login_at = ? WHERE id = ?', args: [t, user.id] },
    ])
    return { token, expiresAt: t + LIMITS.sessionTtl }
  }

  function toMe(u: SessionUser | null): Me | null {
    return u && { email: u.email, displayName: u.displayName, hasPassword: u.hasPassword, isAdmin: u.isAdmin }
  }

  const service = {
    limits: LIMITS,
    ipKey,
    toMe,

    /** Step 1 of the only sign-in a reader needs: an email. Idempotent within the resend window. */
    async requestCode(rawEmail: unknown, req: RequestFacts) {
      const email = normalizeEmail(rawEmail)
      if (!email) throw new AppError('invalid_email')
      if (mailer.name === 'disabled') throw new AppError('mail_unavailable')
      const t = now()
      const last = await store.get<{ id: string; created_at: number; expires_at: number }>(
        'SELECT id, created_at, expires_at FROM login_codes WHERE email = ? AND consumed_at IS NULL ORDER BY created_at DESC LIMIT 1', [email])
      if (last && t - Number(last.created_at) < LIMITS.resendAfter) {
        // A reload or a double click: the code already sent is still the right one.
        return { requestId: last.id, email, expiresAt: Number(last.expires_at), resendAt: Number(last.created_at) + LIMITS.resendAfter, reused: true }
      }
      const ip = ipKey(req.ip)
      if (await rl.exceeded(`code:email:${email}`, LIMITS.codesPerEmailHour, HOUR)) throw new AppError('too_many_requests', { retryAfter: 15 * 60 })
      if (await rl.exceeded(`code:ip:${ip}`, LIMITS.codesPerIpHour, HOUR)) throw new AppError('too_many_requests', { retryAfter: 30 * 60 })
      if (await rl.exceeded('code:global', LIMITS.codesGlobalHour, HOUR)) throw new AppError('too_many_requests', { retryAfter: 10 * 60 })
      const id = randomToken(16)
      const code = newCode()
      await store.run('INSERT INTO login_codes (id, email, code_hash, created_at, expires_at, ip_hash) VALUES (?,?,?,?,?,?)',
        [id, email, codeHash(id, email, code), t, t + LIMITS.codeTtl, ip])
      await rl.hit(`code:email:${email}`, `code:ip:${ip}`, 'code:global')
      try {
        await mailer.send({ to: email, ...codeEmail({ code, minutes: LIMITS.codeTtl / MIN, siteUrl: config.siteUrl }) })
      } catch (e) {
        await store.run('DELETE FROM login_codes WHERE id = ?', [id])
        console.error('[comments] mail send failed:', e instanceof Error ? e.message : e)
        throw new AppError(e instanceof MailUnavailableError ? 'mail_unavailable' : 'mail_failed')
      }
      return { requestId: id, email, expiresAt: t + LIMITS.codeTtl, resendAt: t + LIMITS.resendAfter, reused: false }
    },

    /** Is a pending code request still usable? Lets the code form survive reloads without guessing. */
    async pendingStatus(requestId: unknown) {
      if (typeof requestId !== 'string' || requestId.length > 64) return { valid: false as const }
      const r = await store.get<{ email: string; created_at: number; expires_at: number; attempts: number; consumed_at: number | null }>(
        'SELECT email, created_at, expires_at, attempts, consumed_at FROM login_codes WHERE id = ?', [requestId])
      if (!r || r.consumed_at || Number(r.expires_at) <= now() || Number(r.attempts) >= LIMITS.attemptsPerCode) return { valid: false as const }
      return { valid: true as const, expiresAt: Number(r.expires_at), resendAt: Number(r.created_at) + LIMITS.resendAfter }
    },

    /** Step 2: the code. A right code signs the reader up and in at once. */
    async verifyCode(rawEmail: unknown, rawCode: unknown, req: RequestFacts) {
      const email = normalizeEmail(rawEmail)
      if (!email) throw new AppError('invalid_email')
      const code = normalizeCode(rawCode)
      if (code.length !== 6) throw new AppError('invalid_code', { remaining: -1 })
      const ip = ipKey(req.ip)
      if (await rl.exceeded(`vfail:email:${email}`, LIMITS.failsPerEmail15m, 15 * MIN)) throw new AppError('too_many_attempts')
      if (await rl.exceeded(`vfail:ip:${ip}`, LIMITS.failsPerIpHour, HOUR)) throw new AppError('too_many_attempts')
      const t = now()
      const rows = await store.all<{ id: string; code_hash: string; attempts: number }>(
        'SELECT id, code_hash, attempts FROM login_codes WHERE email = ? AND consumed_at IS NULL AND expires_at > ? AND attempts < ? ORDER BY created_at DESC LIMIT 5',
        [email, t, LIMITS.attemptsPerCode])
      if (!rows.length) {
        const any = await store.get('SELECT 1 AS x FROM login_codes WHERE email = ? AND created_at > ?', [email, t - DAY])
        throw new AppError(any ? 'expired' : 'invalid_code', { remaining: 0 })
      }
      let match: string | null = null
      for (const r of rows) if (safeEqual(codeHash(r.id, email, code), r.code_hash)) match = r.id
      if (!match) {
        await store.run(`UPDATE login_codes SET attempts = attempts + 1 WHERE id IN (${rows.map(() => '?').join(',')})`, rows.map((r) => r.id))
        await rl.hit(`vfail:email:${email}`, `vfail:ip:${ip}`)
        const remaining = Math.max(0, LIMITS.attemptsPerCode - 1 - Math.min(...rows.map((r) => Number(r.attempts))))
        throw new AppError(remaining ? 'invalid_code' : 'expired', { remaining })
      }
      // Single use, even under a race: only the request that flips consumed_at wins.
      const won = await store.run('UPDATE login_codes SET consumed_at = ? WHERE id = ? AND consumed_at IS NULL', [t, match])
      if (!won) throw new AppError('expired', { remaining: 0 })
      await store.run('UPDATE login_codes SET consumed_at = ? WHERE email = ? AND consumed_at IS NULL', [t, email])
      await rl.clear(`vfail:email:${email}`)
      const user = await ensureUser(email)
      if (user.blocked) throw new AppError('blocked')
      const session = await startSession(user, 'code', req)
      return { ...session, isNewUser: !user.display_name && !user.password_hash }
    },

    async loginPassword(rawEmail: unknown, password: unknown, req: RequestFacts) {
      const email = normalizeEmail(rawEmail)
      if (!email || typeof password !== 'string' || password.length > LIMITS.passwordMax) throw new AppError('invalid_credentials')
      const ip = ipKey(req.ip)
      if (await rl.exceeded(`pfail:email:${email}`, LIMITS.passwordFailsPerEmail15m, 15 * MIN)) throw new AppError('too_many_attempts')
      if (await rl.exceeded(`pfail:ip:${ip}`, LIMITS.passwordFailsPerIpHour, HOUR)) throw new AppError('too_many_attempts')
      const user = await userByEmail(email)
      const ok = await verifyPassword(password, user?.password_hash ?? null)
      if (!ok || !user) {
        await rl.hit(`pfail:email:${email}`, `pfail:ip:${ip}`)
        throw new AppError('invalid_credentials')
      }
      if (user.blocked) throw new AppError('blocked')
      await rl.clear(`pfail:email:${email}`)
      return startSession(user, 'password', req)
    },

    async sessionUser(token: string | undefined): Promise<SessionUser | null> {
      if (!token || token.length > 100) return null
      const t = now()
      const r = await store.get<UserRow & { auth_method: string; created_at: number; last_seen_at: number; expires_at: number; id_hash: string }>(
        `SELECT u.id, u.email, u.display_name, u.password_hash, u.blocked, s.auth_method, s.created_at, s.last_seen_at, s.expires_at, s.id_hash
         FROM sessions s JOIN users u ON u.id = s.user_id WHERE s.id_hash = ?`, [sha256(token)])
      if (!r || Number(r.expires_at) <= t) return null
      if (t - Number(r.last_seen_at) > HOUR) {
        // Sliding expiry, written at most hourly.
        await store.run('UPDATE sessions SET last_seen_at = ?, expires_at = ? WHERE id_hash = ?', [t, t + LIMITS.sessionTtl, r.id_hash])
      }
      return {
        id: Number(r.id), email: r.email, displayName: r.display_name, hasPassword: !!r.password_hash,
        isAdmin: isAdminEmail(r.email), blocked: !!r.blocked, authMethod: r.auth_method, sessionCreatedAt: Number(r.created_at),
      }
    },

    async logout(token: string | undefined) {
      if (token) await store.run('DELETE FROM sessions WHERE id_hash = ?', [sha256(token)])
    },

    async setPassword(user: SessionUser, newPassword: unknown, currentPassword: unknown) {
      if (typeof newPassword !== 'string' || newPassword.length < LIMITS.passwordMin || newPassword.length > LIMITS.passwordMax || !/\S/.test(newPassword))
        throw new AppError('weak_password', { min: LIMITS.passwordMin })
      const fresh = user.authMethod === 'code' && now() - user.sessionCreatedAt < LIMITS.freshLogin
      if (user.hasPassword && !fresh) {
        const row = await userByEmail(user.email)
        if (typeof currentPassword !== 'string' || !(await verifyPassword(currentPassword, row?.password_hash ?? null)))
          throw new AppError('current_password_required')
      }
      await store.run('UPDATE users SET password_hash = ? WHERE id = ?', [await hashPassword(newPassword), user.id])
    },

    async setDisplayName(user: SessionUser, name: unknown) {
      const n = cleanLine(name, LIMITS.nameMax)
      await store.run('UPDATE users SET display_name = ? WHERE id = ?', [n || null, user.id])
      return n || null
    },

    /* ---------------- comments ---------------- */

    async createComment(user: SessionUser, input: { path: unknown; anchor?: unknown; quote?: unknown; blockText?: unknown; parentId?: unknown; body: unknown; locale?: unknown; displayName?: unknown }, req: RequestFacts) {
      if (user.blocked) throw new AppError('blocked')
      const path = cleanPath(input.path)
      const anchor = cleanAnchor(input.anchor)
      if (path === null || anchor === null) throw new AppError('invalid_input')
      const body = cleanText(input.body, LIMITS.bodyMax + 1)
      if (body.length < LIMITS.bodyMin) throw new AppError('too_short', { min: LIMITS.bodyMin })
      if (body.length > LIMITS.bodyMax) throw new AppError('too_long', { max: LIMITS.bodyMax })
      if ((body.match(/https?:\/\//gi) ?? []).length > 3) throw new AppError('spam')
      const locale = input.locale === 'en' ? 'en' : 'fa'
      let quote = cleanLine(input.quote, LIMITS.quoteMax) || null
      let blockText = cleanLine(input.blockText, LIMITS.blockTextMax) || null
      let parentId: number | null = null
      let finalAnchor = anchor
      if (input.parentId != null) {
        const pid = Number(input.parentId)
        if (!Number.isInteger(pid) || pid <= 0) throw new AppError('invalid_input')
        const parent = await store.get<{ id: number; parent_id: number | null; page_path: string; anchor: string; status: string; user_id: number }>(
          'SELECT id, parent_id, page_path, anchor, status, user_id FROM comments WHERE id = ?', [pid])
        if (!parent || parent.page_path !== path || (parent.status !== 'approved' && Number(parent.user_id) !== user.id && !user.isAdmin)) throw new AppError('not_found')
        // One level of threading, like a review thread: replies to replies join the root.
        parentId = parent.parent_id != null ? Number(parent.parent_id) : Number(parent.id)
        finalAnchor = parent.anchor
        quote = null
        blockText = null
      }
      const ip = ipKey(req.ip)
      if (!user.isAdmin) {
        if (await rl.exceeded(`cmt:user:${user.id}`, LIMITS.commentsPerUser10m, 10 * MIN)) throw new AppError('too_many_requests', { retryAfter: 600 })
        if (await rl.exceeded(`cmtday:user:${user.id}`, LIMITS.commentsPerUserDay, DAY)) throw new AppError('too_many_requests', { retryAfter: 3600 })
        if (await rl.exceeded(`cmt:ip:${ip}`, LIMITS.commentsPerIpHour, HOUR)) throw new AppError('too_many_requests', { retryAfter: 1800 })
        const dup = await store.get('SELECT 1 AS x FROM comments WHERE user_id = ? AND body = ? AND created_at > ?', [user.id, body, now() - HOUR])
        if (dup) throw new AppError('duplicate')
      }
      if (input.displayName !== undefined) await service.setDisplayName(user, input.displayName)
      const status: CommentStatus = user.isAdmin ? 'approved' : 'pending'
      const t = now()
      const row = await store.get<{ id: number }>(
        `INSERT INTO comments (page_path, anchor, quote, block_text, parent_id, user_id, body, status, is_admin, locale, created_at, moderated_at, moderated_by, ip_hash)
         VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?) RETURNING id`,
        [path, finalAnchor, quote, blockText, parentId, user.id, body, status, user.isAdmin ? 1 : 0, locale, t, user.isAdmin ? t : null, user.isAdmin ? user.id : null, ip])
      if (!user.isAdmin) await rl.hit(`cmt:user:${user.id}`, `cmtday:user:${user.id}`, `cmt:ip:${ip}`)
      return { id: Number(row!.id), status }
    },

    /** Approved comments for a page, plus the viewer's own still-pending ones. */
    async listForPage(rawPath: unknown, viewer: SessionUser | null): Promise<PublicComment[]> {
      const path = cleanPath(rawPath)
      if (path === null) throw new AppError('invalid_input')
      const rows = await store.all<{ id: number; anchor: string; quote: string | null; block_text: string | null; parent_id: number | null; body: string; status: CommentStatus; is_admin: number; created_at: number; user_id: number; display_name: string | null }>(
        `SELECT c.id, c.anchor, c.quote, c.block_text, c.parent_id, c.body, c.status, c.is_admin, c.created_at, c.user_id, u.display_name
         FROM comments c JOIN users u ON u.id = c.user_id
         WHERE c.page_path = ? AND (c.status = 'approved' OR (c.status = 'pending' AND c.user_id = ?))
         ORDER BY c.created_at ASC LIMIT 2000`, [path, viewer?.id ?? -1])
      return rows.map((r) => ({
        id: Number(r.id), anchor: r.anchor, quote: r.quote, blockText: r.block_text,
        parentId: r.parent_id == null ? null : Number(r.parent_id), body: r.body, status: r.status,
        isAdmin: !!r.is_admin, authorName: r.display_name, createdAt: Number(r.created_at), mine: viewer?.id === Number(r.user_id),
      }))
    },

    /* ---------------- moderation ---------------- */

    requireAdmin(user: SessionUser | null): SessionUser {
      if (!user) throw new AppError('unauthorized')
      if (!user.isAdmin) throw new AppError('forbidden')
      return user
    },

    async adminList(user: SessionUser | null, q: { status?: unknown; path?: unknown; limit?: unknown; offset?: unknown }) {
      service.requireAdmin(user)
      const status = q.status === 'approved' || q.status === 'rejected' || q.status === 'all' ? q.status : 'pending'
      const path = q.path ? cleanPath(q.path) : null
      const limit = Math.min(100, Math.max(1, Number(q.limit) || 50))
      const offset = Math.max(0, Number(q.offset) || 0)
      const where: string[] = []
      const args: unknown[] = []
      if (status !== 'all') { where.push('c.status = ?'); args.push(status) }
      if (path) { where.push('c.page_path = ?'); args.push(path) }
      const w = where.length ? `WHERE ${where.join(' AND ')}` : ''
      const rows = await store.all<{ id: number; page_path: string; anchor: string; quote: string | null; block_text: string | null; parent_id: number | null; body: string; status: CommentStatus; is_admin: number; locale: string; created_at: number; moderated_at: number | null; email: string; display_name: string | null; blocked: number; user_id: number; parent_body: string | null }>(
        `SELECT c.id, c.page_path, c.anchor, c.quote, c.block_text, c.parent_id, c.body, c.status, c.is_admin, c.locale, c.created_at, c.moderated_at,
                u.email, u.display_name, u.blocked, c.user_id, p.body AS parent_body
         FROM comments c JOIN users u ON u.id = c.user_id LEFT JOIN comments p ON p.id = c.parent_id
         ${w} ORDER BY c.created_at ${status === 'pending' ? 'ASC' : 'DESC'} LIMIT ? OFFSET ?`, [...args, limit, offset])
      const counts = Object.fromEntries((await store.all<{ status: string; n: number }>('SELECT status, COUNT(*) AS n FROM comments GROUP BY status')).map((r) => [r.status, Number(r.n)]))
      const pages = (await store.all<{ page_path: string; n: number; pending: number }>(
        `SELECT page_path, COUNT(*) AS n, SUM(status = 'pending') AS pending FROM comments GROUP BY page_path ORDER BY pending DESC, n DESC LIMIT 300`))
        .map((r) => ({ path: r.page_path, total: Number(r.n), pending: Number(r.pending) }))
      const items: AdminComment[] = rows.map((r) => ({
        id: Number(r.id), path: r.page_path, anchor: r.anchor, quote: r.quote, blockText: r.block_text,
        parentId: r.parent_id == null ? null : Number(r.parent_id), parentBody: r.parent_body, body: r.body, status: r.status,
        isAdmin: !!r.is_admin, locale: r.locale, createdAt: Number(r.created_at), moderatedAt: r.moderated_at == null ? null : Number(r.moderated_at),
        authorEmail: r.email, authorName: r.display_name, authorBlocked: !!r.blocked, userId: Number(r.user_id),
      }))
      return { items, counts: { pending: counts.pending ?? 0, approved: counts.approved ?? 0, rejected: counts.rejected ?? 0 }, pages }
    },

    async moderate(user: SessionUser | null, rawId: unknown, action: unknown) {
      const admin = service.requireAdmin(user)
      const id = Number(rawId)
      if (!Number.isInteger(id) || id <= 0) throw new AppError('invalid_input')
      if (action === 'delete') {
        const n = await store.run('DELETE FROM comments WHERE id = ?', [id])
        if (!n) throw new AppError('not_found')
        return { id, status: 'deleted' as const }
      }
      const status = action === 'approve' ? 'approved' : action === 'reject' ? 'rejected' : action === 'pending' ? 'pending' : null
      if (!status) throw new AppError('invalid_input')
      const n = await store.run('UPDATE comments SET status = ?, moderated_at = ?, moderated_by = ? WHERE id = ?', [status, now(), admin.id, id])
      if (!n) throw new AppError('not_found')
      return { id, status }
    },

    async adminReply(user: SessionUser | null, rawId: unknown, body: unknown, req: RequestFacts) {
      const admin = service.requireAdmin(user)
      const parent = await store.get<{ page_path: string; status: string }>('SELECT page_path, status FROM comments WHERE id = ?', [Number(rawId)])
      if (!parent) throw new AppError('not_found')
      // Answering a reader is also approving what they said.
      if (parent.status === 'pending') await service.moderate(admin, rawId, 'approve')
      return service.createComment(admin, { path: parent.page_path, parentId: rawId, body }, req)
    },

    async setBlocked(user: SessionUser | null, rawUserId: unknown, blocked: boolean) {
      service.requireAdmin(user)
      const id = Number(rawUserId)
      if (!Number.isInteger(id) || id <= 0) throw new AppError('invalid_input')
      await store.run('UPDATE users SET blocked = ? WHERE id = ?', [blocked ? 1 : 0, id])
      if (blocked) await store.run('DELETE FROM sessions WHERE user_id = ?', [id])
    },

    async housekeeping() {
      const t = now()
      await rl.prune()
      await store.run('DELETE FROM login_codes WHERE expires_at < ?', [t - DAY])
      await store.run('DELETE FROM sessions WHERE expires_at < ?', [t])
    },
  }
  return service
}
export type CommentsService = Awaited<ReturnType<typeof createService>>

async function storedSecret(store: Store): Promise<string> {
  const row = await store.get<{ value: string }>("SELECT value FROM app_secrets WHERE name = 'auth'")
  if (row) return row.value
  await store.run("INSERT INTO app_secrets (name, value) VALUES ('auth', ?) ON CONFLICT (name) DO NOTHING", [randomToken(48)])
  return (await store.get<{ value: string }>("SELECT value FROM app_secrets WHERE name = 'auth'"))!.value
}
