import { test } from 'node:test'
import assert from 'node:assert/strict'
import { KINGS_DEFAULTS, inWindow, longest, packLanes, parseKingsSearch, reignLength, relate, yearsBetween } from './reigns'
import { dynasties } from '../data/dynasties'

const NOW = 2026

test('yearsBetween skips the missing year 0', () => {
  assert.equal(yearsBetween(-522, -486), 36)
  assert.equal(yearsBetween(-4, 2), 5)
  assert.equal(yearsBetween(224, 242), 18)
  assert.equal(yearsBetween(10, 5), -5)
})

test('reign length uses now for a ruler still in office and never goes negative', () => {
  assert.equal(reignLength({ id: 'x', start: 2020, end: null }, NOW), 6)
  assert.equal(reignLength({ id: 'y', start: 628, end: 628 }, NOW), 0)
})

test('packLanes keeps overlapping reigns apart and lets touching reigns share a row', () => {
  const lanes = packLanes([
    { id: 'a', start: 0, end: 10 },
    { id: 'b', start: 10, end: 20 },
    { id: 'c', start: 5, end: 15 },
  ], NOW)
  assert.equal(lanes.a, 0)
  assert.equal(lanes.b, 0)
  assert.equal(lanes.c, 1)
})

test('every dynasty packs into lanes with no overlaps inside a lane', () => {
  for (const d of dynasties) {
    const lanes = packLanes(d.rulers, NOW)
    const byLane = new Map<number, typeof d.rulers>()
    for (const r of d.rulers) byLane.set(lanes[r.id], [...(byLane.get(lanes[r.id]) ?? []), r])
    for (const rs of byLane.values()) {
      const s = [...rs].sort((x, y) => x.start - y.start)
      for (let i = 1; i < s.length; i++) assert.ok((s[i - 1].end ?? NOW) <= s[i].start, `${d.slug}: ${s[i - 1].id} overlaps ${s[i].id}`)
    }
  }
})

test('relate reports overlap, gap and same', () => {
  assert.deepEqual(relate({ id: 'a', start: -522, end: -486 }, { id: 'a', start: -522, end: -486 }, NOW), { kind: 'same' })
  assert.deepEqual(relate({ id: 'a', start: 0, end: 10 }, { id: 'b', start: 5, end: 20 }, NOW), { kind: 'overlap', years: 5 })
  assert.deepEqual(relate({ id: 'b', start: 30, end: 40 }, { id: 'a', start: 0, end: 10 }, NOW), { kind: 'gap', years: 20, first: 'a' })
  assert.deepEqual(relate({ id: 'cyrus', start: -550, end: -530 }, { id: 'ardashir', start: 224, end: 242 }, NOW), { kind: 'gap', years: 753, first: 'cyrus' })
})

test('longest and inWindow', () => {
  const rs = [{ id: 'a', start: 0, end: 5 }, { id: 'b', start: 0, end: 50 }, { id: 'c', start: 0, end: 20 }]
  assert.deepEqual(longest(rs, NOW, 2).map((r) => r.id), ['b', 'c'])
  assert.ok(inWindow({ id: 'a', start: -10, end: 5 }, { from: 0, to: 100 }, NOW))
  assert.ok(!inWindow({ id: 'a', start: -10, end: -5 }, { from: 0, to: 100 }, NOW))
})

test('parseKingsSearch never throws and rejects junk', () => {
  assert.deepEqual(parseKingsSearch(undefined), KINGS_DEFAULTS)
  assert.deepEqual(parseKingsSearch({ a: 'darius-i', b: '<script>', from: 'x', to: '9999999' }), { ...KINGS_DEFAULTS, a: 'darius-i' })
  const w = parseKingsSearch({ from: 500, to: 505 })
  assert.ok(w.to - w.from >= 20)
})

test('default window covers every ruler in the data', () => {
  const all = dynasties.flatMap((d) => d.rulers)
  assert.ok(all.every((r) => r.start >= KINGS_DEFAULTS.from && (r.end ?? NOW) <= KINGS_DEFAULTS.to))
  assert.equal(new Set(all.map((r) => r.id)).size, all.length, 'ruler ids are unique')
})
