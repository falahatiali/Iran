import assert from 'node:assert/strict'
import { test } from 'node:test'
import { pan, pos, ticks, zoom } from './scale'
import { TIMELINE_MAX, TIMELINE_MIN } from '../../lib/searchSchema'

test('zoom keeps the anchor fixed and pan stays in range', () => {
  const w = { from: -600, to: -400 }
  const z = zoom(w, 0.5, -500)
  assert.deepEqual(z, { from: -550, to: -450 })
  assert.equal(pos(-500, z), 0.5)
  const far = pan({ from: TIMELINE_MIN, to: TIMELINE_MAX }, -1)
  assert.deepEqual(far, { from: TIMELINE_MIN, to: TIMELINE_MAX })
  const right = pan({ from: 1900, to: 2000 }, 1)
  assert.equal(right.to, TIMELINE_MAX)
  assert.equal(right.to - right.from, 100)
})

test('ticks are round and inside the window', () => {
  const t = ticks({ from: -3300, to: 2030 })
  assert.ok(t.length >= 4 && t.length <= 12)
  for (const x of t) assert.ok(x % 500 === 0 || x % 1000 === 0)
  assert.deepEqual(ticks({ from: 1900, to: 1940 }, 4), [1900, 1910, 1920, 1930, 1940])
})
