import assert from 'node:assert/strict'
import { test } from 'node:test'
import { closing, deySources, NAME_SOURCES, NAMED_PROVINCES, PROVINCE_COUNTS, PROVINCE_SLUGS, provinceBySlug, stats, story, tolls, UNKNOWN_PROVINCE, type NameRow } from '.'
import names from './names.json'
import { byCity, personHref, toPerson } from './people'

const rows = names as NameRow[]
const ids = new Set(deySources.map((s) => s.id))

test('every name entry has a source, and the counts match the IHRNGO lists', () => {
  for (const [i, r] of rows.entries()) {
    assert.ok(r.length === 6 || r.length === 8, `row ${i}`)
    assert.ok(typeof r[1] === 'string' && r[1].trim().length > 1, `row ${i} has a name`)
    const src = NAME_SOURCES[r[5]]
    assert.ok(src && ids.has(src.source), `row ${i} (${r[1]}) cites a known source`)
  }
  assert.equal(rows.filter((r) => r[5] === 1).length, 3895)
  assert.equal(rows.filter((r) => r[5] === 2).length, 324)
  assert.equal(rows.filter((r) => r[5] === 3).length, 34)
})

test('every person has a unique, stable id that names their source row', () => {
  assert.equal(new Set(rows.map((r) => r[0])).size, rows.length)
  const n = { 1: 0, 2: 0, 3: 0 }
  for (const r of rows) {
    const g = r[5]
    n[g]++
    // annex rows keep the annex row number; the executed list keeps its order
    assert.equal(r[0], g === 3 ? `x${n[g]}` : `a${g}-${n[g]}`, r[1])
    assert.match(personHref(r[0]), /^\/event\/dey-1404#p-[a-z0-9-]+$/)
  }
  assert.equal(toPerson(rows[0]).slug, rows[0][0])
})

test('province slugs are unique and every named province has a page', () => {
  assert.equal(new Set(Object.values(PROVINCE_SLUGS)).size, 31)
  assert.deepEqual(new Set(Object.keys(PROVINCE_SLUGS)), new Set(Object.keys(PROVINCE_COUNTS)))
  for (const p of NAMED_PROVINCES) assert.equal(provinceBySlug(PROVINCE_SLUGS[p]), p)
  assert.equal(provinceBySlug('south-khorasan'), undefined)
  const isf = rows.filter((r) => r[3] === 'اصفهان' && r[5] !== 3).map(toPerson)
  const groups = byCity(isf)
  assert.equal(groups.reduce((a, g) => a + g.people.length, 0), isf.length)
  assert.equal(groups.at(-1)?.city, null)
})

test('no executed protester is also listed among those killed in the street', () => {
  const key = (s: string) => s.replace(/[\s\u200c]+/g, '')
  const killed = new Set(rows.filter((r) => r[5] !== 3).map((r) => key(r[1])))
  for (const r of rows.filter((x) => x[5] === 3)) assert.ok(!killed.has(key(r[1])), r[1])
})

test('names are clean Persian: no Arabic ي/ك, Latin digits, text-layer artefacts or broken ligatures', () => {
  for (const r of rows) {
    for (const f of [r[1], r[2], r[3], r[4], r[6], r[7]]) if (typeof f === 'string') assert.doesNotMatch(f, /[يك0-9]|هللا|\u200c(\s|$)|\s\S\u200c|\( | \)/, f)
    assert.doesNotMatch(r[1], /(^|\s)(غالم|میالد|جالل|اسالم|فالح|ساالر)/, r[1])
  }
})

test('the province counts match names.json', () => {
  assert.equal(Object.keys(PROVINCE_COUNTS).length, 31)
  const c: Record<string, number> = {}
  let unknown = 0
  for (const r of rows) if (r[5] !== 3) { if (r[3]) c[r[3]] = (c[r[3]] ?? 0) + 1; else unknown++ }
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
