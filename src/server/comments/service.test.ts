import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { test } from 'node:test'
import { openStore } from './store'
import { createService, LIMITS } from './service'
import { memoryMailer } from './mailer'
import { readConfig } from './config'
import { AppError } from './errors'
import { cleanAnchor, cleanPath, cleanText, normalizeCode, normalizeEmail } from './sanitize'
import { hashPassword, verifyPassword } from './crypto'
import { codeEmail } from './emailTemplate'
import { publicPaths } from '../../lib/publicPaths'

async function setup(env: Record<string, string> = {}) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'ih-comments-'))
  const store = await openStore(`file:${path.join(dir, 'c.db')}`)
  const mailer = memoryMailer()
  let clock = Date.UTC(2026, 10, 12, 12)
  const config = readConfig({ NODE_ENV: 'test', ADMIN_EMAILS: 'Admin@Example.com', ...env })
  const s = await createService({ store, mailer, config, now: () => clock })
  const lastCode = () => /(\d{6})/.exec(mailer.sent.at(-1)!.text)![1]
  return { s, store, mailer, lastCode, tick: (ms: number) => { clock += ms }, req: { ip: '203.0.113.7', userAgent: 'test' } }
}

async function rejects(p: Promise<unknown>, code: string) {
  await assert.rejects(p, (e: unknown) => e instanceof AppError && e.code === code, `expected ${code}`)
}

async function signIn(t: Awaited<ReturnType<typeof setup>>, email = 'reader@example.com') {
  await t.s.requestCode(email, t.req)
  const r = await t.s.verifyCode(email, t.lastCode(), t.req)
  return (await t.s.sessionUser(r.token))!
}

test('email + code signs a new reader up and in at once; the code is stored only as a hash', async () => {
  const t = await setup()
  const r = await t.s.requestCode('  Reader@Example.COM ', t.req)
  assert.equal(r.email, 'reader@example.com')
  assert.equal(t.mailer.sent.length, 1)
  const code = t.lastCode()
  const row = (await t.store.all<{ code_hash: string }>('SELECT code_hash FROM login_codes'))[0]
  assert.ok(!row.code_hash.includes(code))
  const persianDigits = code.replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[Number(d)])
  const v = await t.s.verifyCode('reader@example.com', ` ${persianDigits.slice(0, 3)} ${persianDigits.slice(3)} `, t.req)
  assert.equal(v.isNewUser, true)
  const me = await t.s.sessionUser(v.token)
  assert.equal(me?.email, 'reader@example.com')
  assert.equal(me?.isAdmin, false)
  const sess = (await t.store.all<{ id_hash: string }>('SELECT id_hash FROM sessions'))[0]
  assert.notEqual(sess.id_hash, v.token)
})

test('a code works once', async () => {
  const t = await setup()
  await t.s.requestCode('a@example.com', t.req)
  const code = t.lastCode()
  await t.s.verifyCode('a@example.com', code, t.req)
  await rejects(t.s.verifyCode('a@example.com', code, t.req), 'expired')
})

test('asking again inside the resend window reuses the pending request (reload-safe), and no second mail goes out', async () => {
  const t = await setup()
  const a = await t.s.requestCode('a@example.com', t.req)
  t.tick(20_000)
  const b = await t.s.requestCode('a@example.com', t.req)
  assert.equal(b.requestId, a.requestId)
  assert.equal(b.reused, true)
  assert.equal(t.mailer.sent.length, 1)
  assert.equal((await t.s.pendingStatus(a.requestId)).valid, true)
  t.tick(LIMITS.resendAfter)
  const c = await t.s.requestCode('a@example.com', t.req)
  assert.notEqual(c.requestId, a.requestId)
  assert.equal(t.mailer.sent.length, 2)
})

test('the code from an earlier mail still works after a resend', async () => {
  const t = await setup()
  await t.s.requestCode('a@example.com', t.req)
  const first = t.lastCode()
  t.tick(LIMITS.resendAfter + 1)
  await t.s.requestCode('a@example.com', t.req)
  const v = await t.s.verifyCode('a@example.com', first, t.req)
  assert.ok(v.token)
})

test('codes expire after ten minutes', async () => {
  const t = await setup()
  const r = await t.s.requestCode('a@example.com', t.req)
  t.tick(LIMITS.codeTtl + 1)
  assert.equal((await t.s.pendingStatus(r.requestId)).valid, false)
  await rejects(t.s.verifyCode('a@example.com', t.lastCode(), t.req), 'expired')
})

test('five wrong guesses burn the code', async () => {
  const t = await setup()
  await t.s.requestCode('a@example.com', t.req)
  const right = t.lastCode()
  const wrong = right === '000000' ? '111111' : '000000'
  for (let i = 0; i < LIMITS.attemptsPerCode - 1; i++) await rejects(t.s.verifyCode('a@example.com', wrong, t.req), 'invalid_code')
  await rejects(t.s.verifyCode('a@example.com', wrong, t.req), 'expired')
  await rejects(t.s.verifyCode('a@example.com', right, t.req), 'expired')
})

test('rate limits: codes per email per hour, and per IP', async () => {
  const t = await setup()
  for (let i = 0; i < LIMITS.codesPerEmailHour; i++) { await t.s.requestCode('a@example.com', t.req); t.tick(LIMITS.resendAfter + 1) }
  await rejects(t.s.requestCode('a@example.com', t.req), 'too_many_requests')
  t.tick(3600_000)
  await t.s.requestCode('a@example.com', t.req)

  const u = await setup()
  for (let i = 0; i < LIMITS.codesPerIpHour; i++) await u.s.requestCode(`p${i}@example.com`, u.req)
  await rejects(u.s.requestCode('another@example.com', u.req), 'too_many_requests')
  await u.s.requestCode('another@example.com', { ip: '198.51.100.1' })
})

test('rate limits: failed code guesses per email lock further tries', async () => {
  const t = await setup()
  let fails = 0
  while (fails < LIMITS.failsPerEmail15m) {
    await t.s.requestCode('a@example.com', t.req)
    const wrong = t.lastCode() === '000000' ? '111111' : '000000'
    for (let i = 0; i < LIMITS.attemptsPerCode && fails < LIMITS.failsPerEmail15m; i++, fails++) await t.s.verifyCode('a@example.com', wrong, t.req).catch(() => undefined)
    t.tick(LIMITS.resendAfter + 1)
  }
  await t.s.requestCode('a@example.com', t.req).catch(() => undefined)
  await rejects(t.s.verifyCode('a@example.com', t.lastCode(), t.req), 'too_many_attempts')
})

test('mail failure leaves no usable code behind', async () => {
  const t = await setup()
  t.mailer.send = async () => { throw new Error('smtp down') }
  await rejects(t.s.requestCode('a@example.com', t.req), 'mail_failed')
  assert.equal((await t.store.all('SELECT * FROM login_codes')).length, 0)
})

test('production without a mail transport refuses to sign in instead of logging codes', () => {
  assert.equal(readConfig({ NODE_ENV: 'production' }).mail.transport, 'disabled')
  assert.equal(readConfig({ NODE_ENV: 'production', SMTP_HOST: 'smtp.example.com' }).mail.transport, 'smtp')
  assert.equal(readConfig({ NODE_ENV: 'production', RESEND_API_KEY: 're_x' }).mail.transport, 'resend')
  assert.equal(readConfig({ NODE_ENV: 'development' }).mail.transport, 'console')
})

test('password: optional, scrypt-hashed, and either it or a code signs in', async () => {
  const t = await setup()
  const me = await signIn(t)
  await rejects(t.s.setPassword(me, 'short', undefined), 'weak_password')
  await t.s.setPassword(me, 'a long passphrase', undefined)
  const stored = (await t.store.get<{ password_hash: string }>('SELECT password_hash FROM users'))!.password_hash
  assert.match(stored, /^scrypt\$/)
  assert.ok(!stored.includes('passphrase'))
  const r = await t.s.loginPassword('READER@example.com', 'a long passphrase', t.req)
  assert.ok(r.token)
  await rejects(t.s.loginPassword('reader@example.com', 'wrong one', t.req), 'invalid_credentials')
  await rejects(t.s.loginPassword('nobody@example.com', 'whatever1', t.req), 'invalid_credentials')
  // after the fresh-login window a password change needs the current one
  t.tick(LIMITS.freshLogin + 1)
  const later = (await t.s.sessionUser(r.token))!
  await rejects(t.s.setPassword(later, 'another passphrase', 'nope'), 'current_password_required')
  await t.s.setPassword(later, 'another passphrase', 'a long passphrase')
})

test('password guessing is rate limited per email', async () => {
  const t = await setup()
  const me = await signIn(t)
  await t.s.setPassword(me, 'a long passphrase', undefined)
  for (let i = 0; i < LIMITS.passwordFailsPerEmail15m; i++) await rejects(t.s.loginPassword('reader@example.com', `bad${i}xxxx`, t.req), 'invalid_credentials')
  await rejects(t.s.loginPassword('reader@example.com', 'a long passphrase', t.req), 'too_many_attempts')
})

test('scrypt hashes verify and differ per salt', async () => {
  const a = await hashPassword('correct horse')
  const b = await hashPassword('correct horse')
  assert.notEqual(a, b)
  assert.equal(await verifyPassword('correct horse', a), true)
  assert.equal(await verifyPassword('wrong horse', a), false)
  assert.equal(await verifyPassword('x', null), false)
})

test('logout ends the server-side session', async () => {
  const t = await setup()
  await t.s.requestCode('a@example.com', t.req)
  const v = await t.s.verifyCode('a@example.com', t.lastCode(), t.req)
  await t.s.logout(v.token)
  assert.equal(await t.s.sessionUser(v.token), null)
})

test('comments start pending, show only to their author, and appear for all once approved', async () => {
  const t = await setup()
  const reader = await signIn(t)
  const other = await signIn(t, 'other@example.com')
  const c = await t.s.createComment(reader, { path: '/king/darius-i', anchor: 'intro~abc12', quote: 'شاه شاهان', body: 'این تاریخ اشتباه است.' }, t.req)
  assert.equal(c.status, 'pending')
  assert.equal((await t.s.listForPage('/king/darius-i', reader)).length, 1)
  assert.equal((await t.s.listForPage('/king/darius-i', other)).length, 0)
  assert.equal((await t.s.listForPage('/king/darius-i', null)).length, 0)
  const admin = await signIn(t, 'admin@example.com')
  assert.equal(admin.isAdmin, true)
  await rejects(t.s.moderate(reader, c.id, 'approve'), 'forbidden')
  await rejects(t.s.adminList(null, {}), 'unauthorized')
  const list = await t.s.adminList(admin, {})
  assert.equal(list.counts.pending, 1)
  assert.equal(list.items[0].quote, 'شاه شاهان')
  assert.equal(list.items[0].authorEmail, 'reader@example.com')
  await t.s.moderate(admin, c.id, 'approve')
  const pub = await t.s.listForPage('/king/darius-i', null)
  assert.equal(pub.length, 1)
  assert.equal(pub[0].anchor, 'intro~abc12')
  assert.equal(pub[0].mine, false)
  await t.s.moderate(admin, c.id, 'reject')
  assert.equal((await t.s.listForPage('/king/darius-i', null)).length, 0)
  assert.equal((await t.s.listForPage('/king/darius-i', reader)).length, 0)
})

test('admin replies are approved at once, approve the parent, and thread one level deep', async () => {
  const t = await setup()
  const reader = await signIn(t)
  const admin = await signIn(t, 'admin@example.com')
  const c = await t.s.createComment(reader, { path: '/shahnameh/siyavash', anchor: 'v-12', body: 'معنی این بیت درست نیست' }, t.req)
  const r = await t.s.adminReply(admin, c.id, 'ممنون، درست شد.', t.req)
  assert.equal(r.status, 'approved')
  const pub = await t.s.listForPage('/shahnameh/siyavash', null)
  assert.equal(pub.length, 2)
  const reply = pub.find((x) => x.parentId === c.id)!
  assert.equal(reply.isAdmin, true)
  assert.equal(reply.anchor, 'v-12')
  const nested = await t.s.createComment(reader, { path: '/shahnameh/siyavash', parentId: reply.id, body: 'سپاس از پاسخ' }, t.req)
  const all = await t.s.listForPage('/shahnameh/siyavash', reader)
  assert.equal(all.find((x) => x.id === nested.id)!.parentId, c.id)
  await t.s.moderate(admin, c.id, 'delete')
  assert.equal((await t.s.listForPage('/shahnameh/siyavash', reader)).length, 0, 'deleting a thread removes its replies')
})

test('comment input is validated, trimmed, and limited', async () => {
  const t = await setup()
  const me = await signIn(t)
  await rejects(t.s.createComment(me, { path: 'https://evil.example/x', body: 'hello' }, t.req), 'invalid_input')
  await rejects(t.s.createComment(me, { path: '/king/x?y=1', body: 'hello' }, t.req), 'invalid_input')
  await rejects(t.s.createComment(me, { path: '/king/x', anchor: '"><script>', body: 'hello' }, t.req), 'invalid_input')
  await rejects(t.s.createComment(me, { path: '/', body: ' a ' }, t.req), 'too_short')
  await rejects(t.s.createComment(me, { path: '/', body: 'x'.repeat(LIMITS.bodyMax + 1) }, t.req), 'too_long')
  await rejects(t.s.createComment(me, { path: '/', body: 'http://a http://b http://c http://d' }, t.req), 'spam')
  const ok = await t.s.createComment(me, { path: '/', body: '<img src=x onerror=alert(1)>\u202Eخوب', quote: 'q'.repeat(900) }, t.req)
  const row = (await t.s.listForPage('/', me)).find((c) => c.id === ok.id)!
  assert.equal(row.body, '<img src=x onerror=alert(1)>خوب', 'kept as inert text (React escapes it); bidi override removed')
  assert.equal(row.quote!.length, LIMITS.quoteMax)
  await rejects(t.s.createComment(me, { path: '/', body: '<img src=x onerror=alert(1)>\u202Eخوب' }, t.req), 'duplicate')
  await rejects(t.s.createComment(me, { path: '/', parentId: 99999, body: 'reply to nothing' }, t.req), 'not_found')
})

test('comment rate limit per reader', async () => {
  const t = await setup()
  const me = await signIn(t)
  for (let i = 0; i < LIMITS.commentsPerUser10m; i++) await t.s.createComment(me, { path: '/', body: `نظر شمارهٔ ${i}` }, t.req)
  await rejects(t.s.createComment(me, { path: '/', body: 'یکی دیگر' }, t.req), 'too_many_requests')
  t.tick(10 * 60_000 + 1)
  await t.s.createComment(me, { path: '/', body: 'یکی دیگر' }, t.req)
})

test('a blocked reader loses sessions and cannot sign back in', async () => {
  const t = await setup()
  const me = await signIn(t)
  const admin = await signIn(t, 'admin@example.com')
  await t.s.setBlocked(admin, me.id, true)
  assert.equal((await t.store.all('SELECT * FROM sessions WHERE user_id = ?', [me.id])).length, 0)
  t.tick(LIMITS.resendAfter + 1)
  await t.s.requestCode('reader@example.com', t.req)
  await rejects(t.s.verifyCode('reader@example.com', t.lastCode(), t.req), 'blocked')
})

test('sanitizers', () => {
  assert.equal(normalizeEmail('A.B+c@Example.ORG'), 'a.b+c@example.org')
  for (const bad of ['', 'a', 'a@b', 'a@b.c', '<a@b.com>', 'a b@c.com', 'a@-b.com', 'x'.repeat(250) + '@a.com']) assert.equal(normalizeEmail(bad), null, bad)
  assert.equal(normalizeCode('۱۲۳ ۴۵۶'), '123456')
  assert.equal(normalizeCode('١٢٣-٤٥٦'), '123456')
  assert.equal(cleanText('a\u0000b\r\n\n\n\nc  \u2067', 100), 'ab\n\nc')
  assert.equal(cleanText('نیم\u200Cفاصله', 100), 'نیم\u200Cفاصله', 'ZWNJ survives')
  assert.equal(cleanPath('/king/darius-i/'), '/king/darius-i')
  assert.equal(cleanPath('//evil.com'), null)
  assert.equal(cleanPath('/../etc'), null)
  assert.equal(cleanAnchor(''), '')
  assert.equal(cleanAnchor('sec~a1b2'), 'sec~a1b2')
  assert.equal(cleanAnchor('a b'), null)
})

test('every public page path is accepted as a comment target', () => {
  for (const p of publicPaths()) assert.notEqual(cleanPath(p), null, p)
})

test('the code email carries the code in both languages and escapes nothing unsafe', () => {
  const m = codeEmail({ code: '123456', minutes: 10, siteUrl: 'https://iiraan.com' })
  assert.match(m.text, /123456/)
  assert.match(m.text, /Iran History/)
  assert.match(m.html, /dir="rtl"/)
  assert.match(m.html, /lang="en"/)
})
