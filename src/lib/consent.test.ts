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
