import assert from 'node:assert/strict'
import { test } from 'node:test'
import { deySources, NAME_SOURCES, story, tolls, stats, type NameRow } from '.'
import names from './names.json'

const rows = names as NameRow[]
const ids = new Set(deySources.map((s) => s.id))

test('every name entry has a source, and the count matches the IHRNGO annexes', () => {
  for (const [i, r] of rows.entries()) {
    assert.equal(r.length, 5, `row ${i}`)
    assert.ok(typeof r[0] === 'string' && r[0].trim().length > 1, `row ${i} has a name`)
    const src = NAME_SOURCES[r[4]]
    assert.ok(src && ids.has(src.source), `row ${i} (${r[0]}) cites a known source`)
  }
  assert.equal(rows.filter((r) => r[4] === 1).length, 3895)
  assert.equal(rows.filter((r) => r[4] === 2).length, 324)
})

test('names use Persian letters and digits, not Arabic ي/ك or Latin digits', () => {
  for (const r of rows) for (const f of r.slice(0, 4)) if (typeof f === 'string') assert.doesNotMatch(f, /[يك0-9]/, f)
})

test('every factual claim cites sources from the bibliography', () => {
  for (const s of story) assert.ok(s.sources.length > 0 && s.sources.every((x) => ids.has(x)), s.id)
  for (const t of tolls) assert.ok(t.sources.length > 0 && t.sources.every((x) => ids.has(x)), t.who)
  for (const s of stats) assert.ok(ids.has(s.source), s.label)
  for (const s of deySources) assert.ok(s.url.startsWith('https://'), s.id)
})
