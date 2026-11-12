/* Accounts, one-time codes, sessions, and comments. Pure of HTTP: the server functions in
 * src/server/commentsApi.ts hand it the request facts (ip hash, user agent) and the cookies. */
import type { Comment, Storage, User } from './storage/types'
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


/** Constructor injection: the service sees only the Storage interface, a Mailer, config, and a clock. */
export async function createService(deps: { storage: Storage; mailer: Mailer; config: CommentsConfig; now?: () => number }) {
  const { storage: db, mailer, config } = deps
  const now = deps.now ?? Date.now
  const rl = rateLimiter(db.rateLimits, now)
  const secret = config.authSecret ?? (await db.secrets.getOrCreate('auth', randomToken(48)))
  const ipKey = (ip: string) => hmac(secret, `ip:${ip}`).slice(0, 22)
  const codeHash = (id: string, email: string, code: string) => hmac(secret, `code:${id}:${email}:${code}`)
  const isAdminEmail = (email: string) => config.adminEmails.has(email)

  async function startSession(user: User, method: 'code' | 'password', req: RequestFacts) {
    const token = randomToken(32)
    const t = now()
    await db.sessions.create({
      idHash: sha256(token), userId: user.id, authMethod: method, createdAt: t, expiresAt: t + LIMITS.sessionTtl, lastSeenAt: t,
      deviceId: req.deviceId ?? null, userAgent: (req.userAgent ?? '').slice(0, 200) || null, ipHash: ipKey(req.ip),
    })
    await db.users.recordLogin(user.id, t)
    return { token, expiresAt: t + LIMITS.sessionTtl }
  }

  async function usersById(rows: Comment[]): Promise<Map<number, User>> {
    return new Map((await db.users.findByIds([...new Set(rows.map((c) => c.userId))])).map((u) => [u.id, u]))
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
      const last = await db.codes.latestUnconsumed(email)
      if (last && t - last.createdAt < LIMITS.resendAfter) {
        // A reload or a double click: the code already sent is still the right one.
        return { requestId: last.id, email, expiresAt: last.expiresAt, resendAt: last.createdAt + LIMITS.resendAfter, reused: true }
      }
      const ip = ipKey(req.ip)
      if (await rl.exceeded(`code:email:${email}`, LIMITS.codesPerEmailHour, HOUR)) throw new AppError('too_many_requests', { retryAfter: 15 * 60 })
      if (await rl.exceeded(`code:ip:${ip}`, LIMITS.codesPerIpHour, HOUR)) throw new AppError('too_many_requests', { retryAfter: 30 * 60 })
      if (await rl.exceeded('code:global', LIMITS.codesGlobalHour, HOUR)) throw new AppError('too_many_requests', { retryAfter: 10 * 60 })
      const id = randomToken(16)
      const code = newCode()
      await db.codes.create({ id, email, codeHash: codeHash(id, email, code), createdAt: t, expiresAt: t + LIMITS.codeTtl, attempts: 0, consumedAt: null, ipHash: ip })
      await rl.hit(`code:email:${email}`, `code:ip:${ip}`, 'code:global')
      try {
        await mailer.send({ to: email, ...codeEmail({ code, minutes: LIMITS.codeTtl / MIN, siteUrl: config.siteUrl }) })
      } catch (e) {
        await db.codes.delete(id)
        console.error('[comments] mail send failed:', e instanceof Error ? e.message : e)
        throw new AppError(e instanceof MailUnavailableError ? 'mail_unavailable' : 'mail_failed')
      }
      return { requestId: id, email, expiresAt: t + LIMITS.codeTtl, resendAt: t + LIMITS.resendAfter, reused: false }
    },

    /** Is a pending code request still usable? Lets the code form survive reloads without guessing. */
    async pendingStatus(requestId: unknown) {
      if (typeof requestId !== 'string' || requestId.length > 64) return { valid: false as const }
      const r = await db.codes.findById(requestId)
      if (!r || r.consumedAt != null || r.expiresAt <= now() || r.attempts >= LIMITS.attemptsPerCode) return { valid: false as const }
      return { valid: true as const, expiresAt: r.expiresAt, resendAt: r.createdAt + LIMITS.resendAfter }
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
      const rows = await db.codes.findUsable(email, t, LIMITS.attemptsPerCode, 5)
      if (!rows.length) {
        const any = await db.codes.anyCreatedSince(email, t - DAY)
        throw new AppError(any ? 'expired' : 'invalid_code', { remaining: 0 })
      }
      let match: string | null = null
      for (const r of rows) if (safeEqual(codeHash(r.id, email, code), r.codeHash)) match = r.id
      if (!match) {
        await db.codes.incrementAttempts(rows.map((r) => r.id))
        await rl.hit(`vfail:email:${email}`, `vfail:ip:${ip}`)
        const remaining = Math.max(0, LIMITS.attemptsPerCode - 1 - Math.min(...rows.map((r) => Number(r.attempts))))
        throw new AppError(remaining ? 'invalid_code' : 'expired', { remaining })
      }
      // Single use, even under a race: only the request that flips consumed_at wins.
      if (!(await db.codes.consume(match, t))) throw new AppError('expired', { remaining: 0 })
      await db.codes.consumeAllFor(email, t)
      await rl.clear(`vfail:email:${email}`)
      const user = await db.users.ensure(email, t)
      if (user.blocked) throw new AppError('blocked')
      const session = await startSession(user, 'code', req)
      return { ...session, isNewUser: !user.displayName && !user.passwordHash }
    },

    async loginPassword(rawEmail: unknown, password: unknown, req: RequestFacts) {
      const email = normalizeEmail(rawEmail)
      if (!email || typeof password !== 'string' || password.length > LIMITS.passwordMax) throw new AppError('invalid_credentials')
      const ip = ipKey(req.ip)
      if (await rl.exceeded(`pfail:email:${email}`, LIMITS.passwordFailsPerEmail15m, 15 * MIN)) throw new AppError('too_many_attempts')
      if (await rl.exceeded(`pfail:ip:${ip}`, LIMITS.passwordFailsPerIpHour, HOUR)) throw new AppError('too_many_attempts')
      const user = await db.users.findByEmail(email)
      const ok = await verifyPassword(password, user?.passwordHash ?? null)
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
      const sess = await db.sessions.findByIdHash(sha256(token))
      if (!sess || sess.expiresAt <= t) return null
      const u = await db.users.findById(sess.userId)
      if (!u) return null
      if (t - sess.lastSeenAt > HOUR) {
        // Sliding expiry, written at most hourly.
        await db.sessions.touch(sess.idHash, t, t + LIMITS.sessionTtl)
      }
      return {
        id: u.id, email: u.email, displayName: u.displayName, hasPassword: !!u.passwordHash,
        isAdmin: isAdminEmail(u.email), blocked: u.blocked, authMethod: sess.authMethod, sessionCreatedAt: sess.createdAt,
      }
    },

    async logout(token: string | undefined) {
      if (token) await db.sessions.delete(sha256(token))
    },

    async setPassword(user: SessionUser, newPassword: unknown, currentPassword: unknown) {
      if (typeof newPassword !== 'string' || newPassword.length < LIMITS.passwordMin || newPassword.length > LIMITS.passwordMax || !/\S/.test(newPassword))
        throw new AppError('weak_password', { min: LIMITS.passwordMin })
      const fresh = user.authMethod === 'code' && now() - user.sessionCreatedAt < LIMITS.freshLogin
      if (user.hasPassword && !fresh) {
        const row = await db.users.findById(user.id)
        if (typeof currentPassword !== 'string' || !(await verifyPassword(currentPassword, row?.passwordHash ?? null)))
          throw new AppError('current_password_required')
      }
      await db.users.setPasswordHash(user.id, await hashPassword(newPassword))
    },

    async setDisplayName(user: SessionUser, name: unknown) {
      const n = cleanLine(name, LIMITS.nameMax)
      await db.users.setDisplayName(user.id, n || null)
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
        const parent = await db.comments.findById(pid)
        if (!parent || parent.pagePath !== path || (parent.status !== 'approved' && parent.userId !== user.id && !user.isAdmin)) throw new AppError('not_found')
        // One level of threading, like a review thread: replies to replies join the root.
        parentId = parent.parentId ?? parent.id
        finalAnchor = parent.anchor
        quote = null
        blockText = null
      }
      const ip = ipKey(req.ip)
      if (!user.isAdmin) {
        if (await rl.exceeded(`cmt:user:${user.id}`, LIMITS.commentsPerUser10m, 10 * MIN)) throw new AppError('too_many_requests', { retryAfter: 600 })
        if (await rl.exceeded(`cmtday:user:${user.id}`, LIMITS.commentsPerUserDay, DAY)) throw new AppError('too_many_requests', { retryAfter: 3600 })
        if (await rl.exceeded(`cmt:ip:${ip}`, LIMITS.commentsPerIpHour, HOUR)) throw new AppError('too_many_requests', { retryAfter: 1800 })
        if (await db.comments.existsSince(user.id, body, now() - HOUR)) throw new AppError('duplicate')
      }
      if (input.displayName !== undefined) await service.setDisplayName(user, input.displayName)
      const status: CommentStatus = user.isAdmin ? 'approved' : 'pending'
      const t = now()
      const id = await db.comments.create({
        pagePath: path, anchor: finalAnchor, quote, blockText, parentId, userId: user.id, body, status, isAdmin: user.isAdmin, locale,
        createdAt: t, moderatedAt: user.isAdmin ? t : null, moderatedBy: user.isAdmin ? user.id : null, ipHash: ip,
      })
      if (!user.isAdmin) await rl.hit(`cmt:user:${user.id}`, `cmtday:user:${user.id}`, `cmt:ip:${ip}`)
      return { id, status }
    },

    /** Approved comments for a page, plus the viewer's own still-pending ones. */
    async listForPage(rawPath: unknown, viewer: SessionUser | null): Promise<PublicComment[]> {
      const path = cleanPath(rawPath)
      if (path === null) throw new AppError('invalid_input')
      const rows = await db.comments.listVisible(path, viewer?.id ?? null, 2000)
      const authors = await usersById(rows)
      return rows.map((c) => ({
        id: c.id, anchor: c.anchor, quote: c.quote, blockText: c.blockText, parentId: c.parentId, body: c.body, status: c.status,
        isAdmin: c.isAdmin, authorName: authors.get(c.userId)?.displayName ?? null, createdAt: c.createdAt, mine: viewer?.id === c.userId,
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
      const rows = await db.comments.query({ status: status === 'all' ? undefined : status, pagePath: path ?? undefined, order: status === 'pending' ? 'asc' : 'desc', limit, offset })
      const authors = await usersById(rows)
      const parents = new Map((await db.comments.findByIds([...new Set(rows.flatMap((c) => (c.parentId != null ? [c.parentId] : [])))])).map((p) => [p.id, p]))
      const items: AdminComment[] = rows.map((c) => {
        const a = authors.get(c.userId)
        return {
          id: c.id, path: c.pagePath, anchor: c.anchor, quote: c.quote, blockText: c.blockText,
          parentId: c.parentId, parentBody: c.parentId != null ? parents.get(c.parentId)?.body ?? null : null, body: c.body, status: c.status,
          isAdmin: c.isAdmin, locale: c.locale, createdAt: c.createdAt, moderatedAt: c.moderatedAt,
          authorEmail: a?.email ?? '', authorName: a?.displayName ?? null, authorBlocked: !!a?.blocked, userId: c.userId,
        }
      })
      return { items, counts: await db.comments.countByStatus(), pages: await db.comments.pages(300) }
    },

    async moderate(user: SessionUser | null, rawId: unknown, action: unknown) {
      const admin = service.requireAdmin(user)
      const id = Number(rawId)
      if (!Number.isInteger(id) || id <= 0) throw new AppError('invalid_input')
      if (action === 'delete') {
        if (!(await db.comments.delete(id))) throw new AppError('not_found')
        return { id, status: 'deleted' as const }
      }
      const status = action === 'approve' ? 'approved' : action === 'reject' ? 'rejected' : action === 'pending' ? 'pending' : null
      if (!status) throw new AppError('invalid_input')
      if (!(await db.comments.setStatus(id, status, now(), admin.id))) throw new AppError('not_found')
      return { id, status }
    },

    async adminReply(user: SessionUser | null, rawId: unknown, body: unknown, req: RequestFacts) {
      const admin = service.requireAdmin(user)
      const pid = Number(rawId)
      const parent = Number.isInteger(pid) && pid > 0 ? await db.comments.findById(pid) : null
      if (!parent) throw new AppError('not_found')
      // Answering a reader is also approving what they said.
      if (parent.status === 'pending') await service.moderate(admin, pid, 'approve')
      return service.createComment(admin, { path: parent.pagePath, parentId: pid, body }, req)
    },

    async setBlocked(user: SessionUser | null, rawUserId: unknown, blocked: boolean) {
      service.requireAdmin(user)
      const id = Number(rawUserId)
      if (!Number.isInteger(id) || id <= 0) throw new AppError('invalid_input')
      await db.users.setBlocked(id, blocked)
      if (blocked) await db.sessions.deleteForUser(id)
    },

    async housekeeping() {
      const t = now()
      await rl.prune()
      await db.codes.deleteExpiredBefore(t - DAY)
      await db.sessions.deleteExpired(t)
    },
  }
  return service
}
export type CommentsService = Awaited<ReturnType<typeof createService>>
