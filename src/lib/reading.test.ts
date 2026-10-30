import { test } from 'node:test'
import assert from 'node:assert/strict'
import vm from 'node:vm'
import { DEFAULT_PREFS, READING_BOOT_SCRIPT, STORAGE_KEY, clampStep, cssVars, isDefault, loadPrefs, parsePrefs, savePrefs, step, type PrefStorage } from './reading'

const mem = (): PrefStorage & { data: Map<string, string> } => {
  const data = new Map<string, string>()
  return { data, getItem: (k) => data.get(k) ?? null, setItem: (k, v) => void data.set(k, v), removeItem: (k) => void data.delete(k) }
}

test('clamps steps to range and rounds', () => {
  assert.equal(clampStep('size', 99), 4)
  assert.equal(clampStep('size', -3), 0)
  assert.equal(clampStep('leading', 2.4), 2)
  assert.equal(clampStep('measure', 'x'), DEFAULT_PREFS.measure)
  assert.equal(clampStep('weight', Number.NaN), DEFAULT_PREFS.weight)
})

test('step never escapes limits', () => {
  let p = { ...DEFAULT_PREFS }
  for (let i = 0; i < 10; i++) p = step(p, 'size', 1)
  assert.equal(p.size, 4)
  for (let i = 0; i < 10; i++) p = step(p, 'leading', -1)
  assert.equal(p.leading, 0)
})

test('parse tolerates garbage and partial objects', () => {
  assert.deepEqual(parsePrefs(null), DEFAULT_PREFS)
  assert.deepEqual(parsePrefs('{nope'), DEFAULT_PREFS)
  assert.deepEqual(parsePrefs('null'), DEFAULT_PREFS)
  assert.deepEqual(parsePrefs('{"size":3}'), { ...DEFAULT_PREFS, size: 3 })
})

test('persistence round-trips and defaults clear storage', () => {
  const s = mem()
  savePrefs(s, { size: 3, leading: 2, measure: 0, weight: 2 })
  assert.deepEqual(loadPrefs(s), { size: 3, leading: 2, measure: 0, weight: 2 })
  savePrefs(s, { ...DEFAULT_PREFS })
  assert.equal(s.data.has(STORAGE_KEY), false)
  assert.ok(isDefault(loadPrefs(s)))
  const broken: PrefStorage = { getItem: () => { throw new Error('denied') }, setItem: () => { throw new Error('quota') }, removeItem: () => {} }
  assert.deepEqual(loadPrefs(broken), DEFAULT_PREFS)
  assert.doesNotThrow(() => savePrefs(broken, { ...DEFAULT_PREFS, size: 4 }))
})

test('boot script applies the same variables as cssVars', () => {
  const prefs = { size: 4, leading: 3, measure: 2, weight: 0 }
  const props: Record<string, string> = {}
  const ctx = {
    localStorage: { getItem: (k: string) => (k === STORAGE_KEY ? JSON.stringify(prefs) : null) },
    document: { documentElement: { style: { setProperty: (k: string, v: unknown) => { props[k] = String(v) } } } },
  }
  vm.runInNewContext(READING_BOOT_SCRIPT, ctx)
  assert.deepEqual(props, cssVars(prefs))
})
