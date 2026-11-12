/* The storage contract, run against every registered adapter. A new adapter (MongoDB, Postgres, …)
 * is done when this file passes for it, unchanged. */
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { test } from 'node:test'
import { ADAPTERS, DEFAULT_DRIVER, createStorage, selectedDriver, type DriverName, type NewComment, type Storage } from './index'

async function fresh(driver: DriverName): Promise<Storage> {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), `ih-contract-${driver}-`))
  return createStorage({ driver, url: `file:${path.join(dir, 'c.db')}` })
}

const comment = (over: Partial<NewComment> = {}): NewComment => ({
  pagePath: '/king/darius-i', anchor: 'a~1', quote: null, blockText: null, parentId: null, userId: 1, body: 'body',
  status: 'pending', isAdmin: false, locale: 'fa', createdAt: 1000, moderatedAt: null, moderatedBy: null, ipHash: null, ...over,
})

for (const driver of Object.keys(ADAPTERS) as DriverName[]) {
  test(`[${driver}] users: ensure is idempotent; updates persist; lookups`, async () => {
    const db = await fresh(driver)
    const a = await db.users.ensure('a@example.com', 10)
    const again = await db.users.ensure('a@example.com', 99)
    assert.equal(again.id, a.id)
    assert.equal(again.createdAt, 10)
    assert.deepEqual({ ...a, id: 0 }, { id: 0, email: 'a@example.com', displayName: null, passwordHash: null, blocked: false, createdAt: 10, lastLoginAt: null })
    const b = await db.users.ensure('b@example.com', 11)
    assert.notEqual(b.id, a.id)
    await db.users.recordLogin(a.id, 50)
    await db.users.setPasswordHash(a.id, 'scrypt$x')
    await db.users.setDisplayName(a.id, 'علی')
    await db.users.setBlocked(a.id, true)
    const got = (await db.users.findById(a.id))!
    assert.equal(got.lastLoginAt, 50); assert.equal(got.passwordHash, 'scrypt$x'); assert.equal(got.displayName, 'علی'); assert.equal(got.blocked, true)
    assert.equal((await db.users.findByEmail('b@example.com'))!.id, b.id)
    assert.equal(await db.users.findByEmail('none@example.com'), null)
    assert.equal(await db.users.findById(9999), null)
    assert.deepEqual((await db.users.findByIds([b.id, a.id, 9999])).map((u) => u.id).sort(), [a.id, b.id].sort())
    assert.deepEqual(await db.users.findByIds([]), [])
    db.close()
  })

  test(`[${driver}] login codes: newest first, usable filter, attempts, single consume`, async () => {
    const db = await fresh(driver)
    const base = { email: 'a@example.com', codeHash: 'h', attempts: 0, consumedAt: null, ipHash: 'ip' }
    await db.codes.create({ ...base, id: 'c1', createdAt: 100, expiresAt: 700 })
    await db.codes.create({ ...base, id: 'c2', createdAt: 200, expiresAt: 800 })
    await db.codes.create({ ...base, id: 'other', email: 'b@example.com', createdAt: 300, expiresAt: 900 })
    assert.equal((await db.codes.latestUnconsumed('a@example.com'))!.id, 'c2')
    assert.deepEqual((await db.codes.findUsable('a@example.com', 150, 5, 5)).map((c) => c.id), ['c2', 'c1'])
    assert.deepEqual((await db.codes.findUsable('a@example.com', 750, 5, 5)).map((c) => c.id), ['c2'], 'expired excluded')
    assert.deepEqual((await db.codes.findUsable('a@example.com', 150, 5, 1)).map((c) => c.id), ['c2'], 'limit')
    await db.codes.incrementAttempts(['c1', 'c1'])
    assert.equal((await db.codes.findById('c1'))!.attempts, 1, 'each listed code counts once')
    for (let i = 0; i < 5; i++) await db.codes.incrementAttempts(['c2'])
    assert.deepEqual((await db.codes.findUsable('a@example.com', 150, 5, 5)).map((c) => c.id), ['c1'], 'attempt cap excluded')
    assert.equal(await db.codes.anyCreatedSince('a@example.com', 150), true)
    assert.equal(await db.codes.anyCreatedSince('a@example.com', 250), false)
    assert.equal(await db.codes.consume('c1', 500), true)
    assert.equal(await db.codes.consume('c1', 501), false, 'single use')
    assert.equal((await db.codes.findById('c1'))!.consumedAt, 500)
    await db.codes.consumeAllFor('a@example.com', 600)
    assert.equal(await db.codes.latestUnconsumed('a@example.com'), null)
    assert.equal((await db.codes.findById('c1'))!.consumedAt, 500, 'already consumed keeps its time')
    assert.equal((await db.codes.latestUnconsumed('b@example.com'))!.id, 'other')
    await db.codes.delete('other')
    assert.equal(await db.codes.findById('other'), null)
    await db.codes.deleteExpiredBefore(750)
    assert.equal(await db.codes.findById('c1'), null)
    assert.ok(await db.codes.findById('c2'))
    db.close()
  })

  test(`[${driver}] sessions: create, touch, delete, by user, expiry`, async () => {
    const db = await fresh(driver)
    const u = await db.users.ensure('a@example.com', 1)
    const s = { userId: u.id, authMethod: 'code', createdAt: 10, lastSeenAt: 10, deviceId: 'dev', userAgent: 'ua', ipHash: 'ip' }
    await db.sessions.create({ ...s, idHash: 'h1', expiresAt: 100 })
    await db.sessions.create({ ...s, idHash: 'h2', expiresAt: 200 })
    assert.deepEqual(await db.sessions.findByIdHash('h1'), { ...s, idHash: 'h1', expiresAt: 100 })
    await db.sessions.touch('h1', 50, 500)
    assert.equal((await db.sessions.findByIdHash('h1'))!.expiresAt, 500)
    assert.equal((await db.sessions.findByIdHash('h1'))!.lastSeenAt, 50)
    await db.sessions.deleteExpired(300)
    assert.equal(await db.sessions.findByIdHash('h2'), null)
    await db.sessions.create({ ...s, idHash: 'h3', expiresAt: 900 })
    await db.sessions.delete('h3')
    assert.equal(await db.sessions.findByIdHash('h3'), null)
    await db.sessions.deleteForUser(u.id)
    assert.equal(await db.sessions.findByIdHash('h1'), null)
    db.close()
  })

  test(`[${driver}] rate limits: windowed counts per bucket, clear, prune`, async () => {
    const db = await fresh(driver)
    await db.rateLimits.hit(['x', 'y'], 100)
    await db.rateLimits.hit(['x'], 200)
    assert.equal(await db.rateLimits.count('x', 50), 2)
    assert.equal(await db.rateLimits.count('x', 100), 1, 'window is exclusive of its start')
    assert.equal(await db.rateLimits.count('y', 50), 1)
    await db.rateLimits.clear('x')
    assert.equal(await db.rateLimits.count('x', 0), 0)
    await db.rateLimits.pruneBefore(150)
    assert.equal(await db.rateLimits.count('y', 0), 0)
    await db.rateLimits.hit([], 1)
    db.close()
  })

  test(`[${driver}] comments: create, visibility, query order and filters, counts, pages, moderation, cascade delete`, async () => {
    const db = await fresh(driver)
    const a = await db.users.ensure('a@example.com', 1)
    const b = await db.users.ensure('b@example.com', 1)
    const c1 = await db.comments.create(comment({ userId: a.id, createdAt: 100, status: 'approved', quote: 'q', blockText: 'bt' }))
    const c2 = await db.comments.create(comment({ userId: b.id, createdAt: 200 }))
    const c3 = await db.comments.create(comment({ userId: a.id, createdAt: 300, parentId: c1, status: 'approved', isAdmin: true, moderatedAt: 300, moderatedBy: a.id }))
    const c4 = await db.comments.create(comment({ userId: a.id, createdAt: 400, pagePath: '/', status: 'rejected' }))
    assert.equal(new Set([c1, c2, c3, c4]).size, 4)
    const got = (await db.comments.findById(c3))!
    assert.deepEqual(got, { ...comment({ userId: a.id, createdAt: 300, parentId: c1, status: 'approved', isAdmin: true, moderatedAt: 300, moderatedBy: a.id }), id: c3 })
    assert.equal(await db.comments.findById(9999), null)
    assert.deepEqual((await db.comments.findByIds([c3, c1])).map((c) => c.id).sort(), [c1, c3].sort())
    assert.deepEqual((await db.comments.listVisible('/king/darius-i', null, 50)).map((c) => c.id), [c1, c3])
    assert.deepEqual((await db.comments.listVisible('/king/darius-i', b.id, 50)).map((c) => c.id), [c1, c2, c3], "own pending, in time order")
    assert.deepEqual((await db.comments.listVisible('/king/darius-i', b.id, 2)).map((c) => c.id), [c1, c2])
    assert.deepEqual((await db.comments.query({ order: 'desc', limit: 10, offset: 0 })).map((c) => c.id), [c4, c3, c2, c1])
    assert.deepEqual((await db.comments.query({ order: 'asc', limit: 2, offset: 1 })).map((c) => c.id), [c2, c3])
    assert.deepEqual((await db.comments.query({ status: 'approved', pagePath: '/king/darius-i', order: 'asc', limit: 10, offset: 0 })).map((c) => c.id), [c1, c3])
    assert.equal(await db.comments.existsSince(b.id, 'body', 150), true)
    assert.equal(await db.comments.existsSince(b.id, 'body', 250), false)
    assert.equal(await db.comments.existsSince(b.id, 'other', 0), false)
    assert.deepEqual(await db.comments.countByStatus(), { pending: 1, approved: 2, rejected: 1 })
    assert.deepEqual(await db.comments.pages(10), [{ path: '/king/darius-i', total: 3, pending: 1 }, { path: '/', total: 1, pending: 0 }])
    assert.equal(await db.comments.setStatus(c2, 'approved', 500, a.id), true)
    assert.equal(await db.comments.setStatus(9999, 'approved', 500, a.id), false)
    const m = (await db.comments.findById(c2))!
    assert.equal(m.status, 'approved'); assert.equal(m.moderatedAt, 500); assert.equal(m.moderatedBy, a.id)
    assert.equal(await db.comments.delete(c1), true)
    assert.equal(await db.comments.findById(c3), null, 'replies go with their thread')
    assert.equal(await db.comments.delete(c1), false)
    assert.deepEqual(await db.comments.countByStatus(), { pending: 0, approved: 1, rejected: 1 })
    db.close()
  })

  test(`[${driver}] secrets: first writer wins`, async () => {
    const db = await fresh(driver)
    assert.equal(await db.secrets.getOrCreate('auth', 'one'), 'one')
    assert.equal(await db.secrets.getOrCreate('auth', 'two'), 'one')
    db.close()
  })
}

test('the driver is chosen in one place: DEFAULT_DRIVER, overridable by COMMENTS_DB_DRIVER', async () => {
  assert.equal(DEFAULT_DRIVER, 'sqlite')
  assert.equal(selectedDriver({}), DEFAULT_DRIVER)
  assert.equal(selectedDriver({ COMMENTS_DB_DRIVER: 'memory' }), 'memory')
  assert.throws(() => selectedDriver({ COMMENTS_DB_DRIVER: 'oracle' }), /Unknown COMMENTS_DB_DRIVER/)
  assert.equal((await createStorage({ env: { COMMENTS_DB_DRIVER: 'memory' } })).driver, 'memory')
})

test('no SQL and no database client outside the storage adapters', () => {
  const root = path.resolve(import.meta.dirname, '../..')
  const walk = (d: string): string[] => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(d, e.name)
    return e.isDirectory() ? walk(p) : /\.tsx?$/.test(e.name) ? [p] : []
  })
  const adapters = path.join(root, 'comments', 'storage', 'sqlite') + path.sep
  const sql = /\b(SELECT\s+[\w*]|INSERT\s+INTO|UPDATE\s+\w+\s+SET|DELETE\s+FROM|CREATE\s+TABLE)/
  const offenders = [...walk(path.join(root, 'comments')), path.join(root, 'commentsApi.ts')]
    .filter((f) => !f.startsWith(adapters))
    .filter((f) => { const t = fs.readFileSync(f, 'utf8'); return sql.test(t) || /@libsql\/client|['"]\.\/storage\/sqlite/.test(t) })
    .map((f) => path.relative(root, f))
  assert.deepEqual(offenders, [])
})
