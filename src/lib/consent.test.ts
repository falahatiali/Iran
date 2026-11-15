import assert from 'node:assert/strict'
import { test } from 'node:test'
import { CONSENT_KEY, parseConsent, readConsent, saveConsent } from './consent'

const mem = () => { const m = new Map<string, string>(); return { getItem: (k: string) => m.get(k) ?? null, setItem: (k: string, v: string) => void m.set(k, v) } }

test('consent: nothing stored means no choice yet', () => {
  assert.equal(readConsent(mem()), null)
})
test('consent: save and read back granted/denied with a date', () => {
  const s = mem()
  saveConsent(s, 'granted', new Date('2026-11-04T10:00:00Z'))
  assert.deepEqual(readConsent(s), { choice: 'granted', date: '2026-11-04T10:00:00.000Z' })
  saveConsent(s, 'denied')
  assert.equal(readConsent(s)?.choice, 'denied')
})
test('consent: garbage or unknown values are ignored', () => {
  for (const raw of ['granted', '{', '{"choice":"yes","date":"x"}', '{"choice":"granted"}']) assert.equal(parseConsent(raw), null)
  assert.equal(CONSENT_KEY, 'iiraan-consent')
})

test('the boot script asks for consent before first paint only when no valid choice is stored', async () => {
  const { runInNewContext } = await import('node:vm')
  const { CONSENT_BOOT_SCRIPT, CONSENT_ASK_ATTR, CONSENT_KEY } = await import('./consent')
  const run = (stored: string | null, throws = false) => {
    const attrs = new Set<string>()
    runInNewContext(CONSENT_BOOT_SCRIPT, {
      localStorage: { getItem: (k: string) => { if (throws) throw new Error('blocked'); return k === CONSENT_KEY ? stored : null } },
      document: { documentElement: { setAttribute: (a: string) => attrs.add(a) } },
    })
    return attrs.has(CONSENT_ASK_ATTR)
  }
  assert.equal(run(null), true)
  assert.equal(run('not json'), true)
  assert.equal(run(JSON.stringify({ choice: 'maybe', date: 'x' })), true)
  assert.equal(run(JSON.stringify({ choice: 'granted', date: '2026-01-01T00:00:00Z' })), false)
  assert.equal(run(JSON.stringify({ choice: 'denied', date: '2026-01-01T00:00:00Z' })), false)
  assert.equal(run(null, true), true)
})
