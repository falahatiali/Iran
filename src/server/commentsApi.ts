/* HTTP edge of the comments system: cookies, CSRF, client IP, and error shaping.
 * All rules live in ./comments/service.ts. */
import { createServerFn } from '@tanstack/react-start'
import { deleteCookie, getCookie, getRequestHeader, getRequestIP, setCookie } from '@tanstack/react-start/server'
import { readConfig } from './comments/config'
import { createMailer } from './comments/mailer'
import { createStorage } from './comments/storage'
import { createService, type CommentsService, type RequestFacts } from './comments/service'
import { AppError } from './comments/errors'
import { randomToken, safeEqual } from './comments/crypto'
import type { AdminComment, Me, PublicComment } from '../lib/commentTypes'

type Fail = { ok: false; error: string; extra?: Record<string, number | string> }

const config = readConfig()
const SESSION = config.production ? '__Host-ih_sid' : 'ih_sid'
const CSRF = 'ih_csrf'
const DEVICE = config.production ? '__Host-ih_dev' : 'ih_dev'

let servicePromise: Promise<CommentsService> | null = null
function service(): Promise<CommentsService> {
  servicePromise ??= (async () => {
    // Which database: decided once, in ./comments/storage/index.ts (COMMENTS_DB_DRIVER).
    const s = await createService({ storage: await createStorage(), mailer: createMailer(config.mail), config })
    s.housekeeping().catch(() => undefined)
    setInterval(() => s.housekeeping().catch(() => undefined), 6 * 3600_000).unref?.()
    return s
  })()
  servicePromise.catch(() => { servicePromise = null })
  return servicePromise
}

const cookieBase = { path: '/', secure: config.production, sameSite: 'lax' as const }

function clientIp(): string {
  const xff = (getRequestHeader('x-forwarded-for') ?? '').split(',').map((s) => s.trim()).filter(Boolean)
  // Each trusted proxy appends the address it saw; anything to the left of those may be forged.
  if (config.proxyHops > 0 && xff.length >= config.proxyHops) return xff[xff.length - config.proxyHops]
  return getRequestIP() ?? 'unknown'
}

function facts(): RequestFacts {
  let deviceId = getCookie(DEVICE)
  if (!deviceId || !/^[A-Za-z0-9_-]{20,64}$/.test(deviceId)) {
    // A random per-browser id kept with each session: the hook for "trusted device" sign-in later.
    deviceId = randomToken(18)
    setCookie(DEVICE, deviceId, { ...cookieBase, httpOnly: true, maxAge: 400 * 24 * 3600 })
  }
  return { ip: clientIp(), userAgent: getRequestHeader('user-agent') ?? undefined, deviceId }
}

function ensureCsrf(): string {
  const have = getCookie(CSRF)
  if (have && /^[A-Za-z0-9_-]{20,64}$/.test(have)) return have
  const t = randomToken(24)
  // Readable by our own script (double-submit token); SameSite=Strict so other sites never carry it.
  setCookie(CSRF, t, { path: '/', secure: config.production, sameSite: 'strict', httpOnly: false, maxAge: 400 * 24 * 3600 })
  return t
}

/** Every state-changing call: same-origin fetch metadata and a matching double-submit token. */
function checkCsrf() {
  const site = getRequestHeader('sec-fetch-site')
  if (site && site !== 'same-origin' && site !== 'none') throw new AppError('csrf')
  const origin = getRequestHeader('origin')
  const host = getRequestHeader('x-forwarded-host') ?? getRequestHeader('host')
  if (origin && host && origin !== 'null') {
    try { if (new URL(origin).host !== host) throw new AppError('csrf') } catch (e) { if (e instanceof AppError) throw e; throw new AppError('csrf') }
  }
  const header = getRequestHeader('x-ih-csrf') ?? ''
  const cookie = getCookie(CSRF) ?? ''
  if (!cookie || !header || !safeEqual(header, cookie)) throw new AppError('csrf')
}

async function current(s: CommentsService) {
  return s.sessionUser(getCookie(SESSION))
}

function setSession(token: string, expiresAt: number) {
  setCookie(SESSION, token, { ...cookieBase, httpOnly: true, expires: new Date(expiresAt) })
}

async function guard<T extends object>(fn: (s: CommentsService) => Promise<T>): Promise<({ ok: true } & T) | Fail> {
  try {
    const s = await service()
    return { ok: true, ...(await fn(s)) }
  } catch (e) {
    if (e instanceof AppError) return { ok: false, error: e.code, extra: e.extra }
    console.error('[comments]', e)
    return { ok: false, error: 'server' }
  }
}

const obj = <T>(d: unknown) => (d && typeof d === 'object' ? d : {}) as T

export const getMe = createServerFn({ method: 'GET' }).handler(async () =>
  guard(async (s): Promise<{ me: Me | null; csrf: string; canSignIn: boolean }> => {
    const csrf = ensureCsrf()
    return { me: s.toMe(await current(s)), csrf, canSignIn: config.mail.transport !== 'disabled' }
  }))

export const requestLoginCode = createServerFn({ method: 'POST' })
  .validator((d: { email: string; website?: string }) => obj<{ email: string; website?: string }>(d))
  .handler(async ({ data }) => guard(async (s) => {
    checkCsrf()
    if (data.website) throw new AppError('spam') // honeypot field, invisible to people
    return s.requestCode(data.email, facts())
  }))

export const getPendingStatus = createServerFn({ method: 'GET' })
  .validator((d: { requestId: string }) => obj<{ requestId: string }>(d))
  .handler(async ({ data }) => guard((s) => s.pendingStatus(data.requestId)))

export const verifyLoginCode = createServerFn({ method: 'POST' })
  .validator((d: { email: string; code: string }) => obj<{ email: string; code: string }>(d))
  .handler(async ({ data }) => guard(async (s) => {
    checkCsrf()
    const r = await s.verifyCode(data.email, data.code, facts())
    setSession(r.token, r.expiresAt)
    return { me: s.toMe(await s.sessionUser(r.token)), isNewUser: r.isNewUser }
  }))

export const loginWithPassword = createServerFn({ method: 'POST' })
  .validator((d: { email: string; password: string }) => obj<{ email: string; password: string }>(d))
  .handler(async ({ data }) => guard(async (s) => {
    checkCsrf()
    const r = await s.loginPassword(data.email, data.password, facts())
    setSession(r.token, r.expiresAt)
    return { me: s.toMe(await s.sessionUser(r.token)) }
  }))

export const logout = createServerFn({ method: 'POST' }).handler(async () => guard(async (s) => {
  checkCsrf()
  await s.logout(getCookie(SESSION))
  deleteCookie(SESSION, { ...cookieBase, httpOnly: true })
  return {}
}))

export const setAccountPassword = createServerFn({ method: 'POST' })
  .validator((d: { password: string; current?: string }) => obj<{ password: string; current?: string }>(d))
  .handler(async ({ data }) => guard(async (s) => {
    checkCsrf()
    const u = await current(s)
    if (!u) throw new AppError('unauthorized')
    await s.setPassword(u, data.password, data.current)
    return {}
  }))

export const setAccountName = createServerFn({ method: 'POST' })
  .validator((d: { name: string }) => obj<{ name: string }>(d))
  .handler(async ({ data }) => guard(async (s) => {
    checkCsrf()
    const u = await current(s)
    if (!u) throw new AppError('unauthorized')
    return { displayName: await s.setDisplayName(u, data.name) }
  }))

export const listPageComments = createServerFn({ method: 'GET' })
  .validator((d: { path: string }) => obj<{ path: string }>(d))
  .handler(async ({ data }) => guard(async (s): Promise<{ comments: PublicComment[] }> => ({ comments: await s.listForPage(data.path, await current(s)) })))

export interface NewCommentInput { path: string; anchor?: string; quote?: string; blockText?: string; parentId?: number | null; body: string; locale?: string; displayName?: string; website?: string }

export const postComment = createServerFn({ method: 'POST' })
  .validator((d: NewCommentInput) => obj<NewCommentInput>(d))
  .handler(async ({ data }) => guard(async (s) => {
    checkCsrf()
    if (data.website) throw new AppError('spam')
    const u = await current(s)
    if (!u) throw new AppError('unauthorized')
    return s.createComment(u, data, facts())
  }))

export const adminListComments = createServerFn({ method: 'GET' })
  .validator((d: { status?: string; path?: string; offset?: number }) => obj<{ status?: string; path?: string; offset?: number }>(d))
  .handler(async ({ data }) => guard(async (s): Promise<{ items: AdminComment[]; counts: Record<'pending' | 'approved' | 'rejected', number>; pages: { path: string; total: number; pending: number }[] }> =>
    s.adminList(await current(s), data)))

export const adminModerate = createServerFn({ method: 'POST' })
  .validator((d: { id: number; action: string }) => obj<{ id: number; action: string }>(d))
  .handler(async ({ data }) => guard(async (s) => {
    checkCsrf()
    return s.moderate(await current(s), data.id, data.action)
  }))

export const adminReply = createServerFn({ method: 'POST' })
  .validator((d: { id: number; body: string }) => obj<{ id: number; body: string }>(d))
  .handler(async ({ data }) => guard(async (s) => {
    checkCsrf()
    return s.adminReply(await current(s), data.id, data.body, facts())
  }))

export const adminBlockUser = createServerFn({ method: 'POST' })
  .validator((d: { userId: number; blocked: boolean }) => obj<{ userId: number; blocked: boolean }>(d))
  .handler(async ({ data }) => guard(async (s) => {
    checkCsrf()
    await s.setBlocked(await current(s), data.userId, !!data.blocked)
    return {}
  }))
