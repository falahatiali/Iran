import assert from 'node:assert/strict'
import { test } from 'node:test'
import { closing, deySources, NAME_SOURCES, PROVINCE_COUNTS, PROVINCE_TILES, stats, story, tolls, UNKNOWN_PROVINCE, type NameRow } from '.'
import names from './names.json'

const rows = names as NameRow[]
const ids = new Set(deySources.map((s) => s.id))

test('every name entry has a source, and the counts match the IHRNGO lists', () => {
  for (const [i, r] of rows.entries()) {
    assert.ok(r.length === 5 || r.length === 7, `row ${i}`)
    assert.ok(typeof r[0] === 'string' && r[0].trim().length > 1, `row ${i} has a name`)
    const src = NAME_SOURCES[r[4]]
    assert.ok(src && ids.has(src.source), `row ${i} (${r[0]}) cites a known source`)
  }
  assert.equal(rows.filter((r) => r[4] === 1).length, 3895)
  assert.equal(rows.filter((r) => r[4] === 2).length, 324)
  assert.equal(rows.filter((r) => r[4] === 3).length, 34)
})

test('no executed protester is also listed among those killed in the street', () => {
  const key = (s: string) => s.replace(/[\s\u200c]+/g, '')
  const killed = new Set(rows.filter((r) => r[4] !== 3).map((r) => key(r[0])))
  for (const r of rows.filter((x) => x[4] === 3)) assert.ok(!killed.has(key(r[0])), r[0])
})

test('names are clean Persian: no Arabic ي/ك, Latin digits, text-layer artefacts or broken ligatures', () => {
  for (const r of rows) {
    for (const f of [r[0], r[1], r[2], r[3], r[5], r[6]]) if (typeof f === 'string') assert.doesNotMatch(f, /[يك0-9]|هللا|\u200c(\s|$)|\s\S\u200c|\( | \)/, f)
    assert.doesNotMatch(r[0], /(^|\s)(غالم|میالد|جالل|اسالم|فالح|ساالر)/, r[0])
  }
})

test('the province tiles cover the 31 provinces and the counts match names.json', () => {
  assert.equal(PROVINCE_TILES.length, 31)
  assert.deepEqual(new Set(PROVINCE_TILES.map((t) => t[0])), new Set(Object.keys(PROVINCE_COUNTS)))
  const c: Record<string, number> = {}
  let unknown = 0
  for (const r of rows) if (r[4] !== 3) { if (r[2]) c[r[2]] = (c[r[2]] ?? 0) + 1; else unknown++ }
  for (const [p, n] of Object.entries(PROVINCE_COUNTS)) assert.equal(c[p] ?? 0, n, p)
  assert.equal(unknown, UNKNOWN_PROVINCE)
})

test('every factual claim cites sources from the bibliography', () => {
  for (const s of story) assert.ok(s.sources.length > 0 && s.sources.every((x) => ids.has(x)), s.id)
  for (const t of tolls) assert.ok(t.sources.length > 0 && t.sources.every((x) => ids.has(x)), t.who)
  for (const s of stats) assert.ok(ids.has(s.source), s.label)
  for (const s of deySources) assert.ok(s.url.startsWith('https://'), s.id)
  assert.ok(closing.paras.length > 0)
})
