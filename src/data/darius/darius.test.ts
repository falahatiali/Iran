import assert from 'node:assert/strict'
import { test } from 'node:test'
import { BASEMAP } from '../basemap'
import { dariusEvents, dariusSourceIds, dariusSources, dossier, synthesis } from './index'

const filled = (s: string | undefined) => typeof s === 'string' && s.trim().length > 0

test('darius events are in chronological order with unique ids', () => {
  for (let i = 1; i < dariusEvents.length; i++) assert.ok(dariusEvents[i].year >= dariusEvents[i - 1].year, dariusEvents[i].id)
  assert.equal(new Set(dariusEvents.map((e) => e.id)).size, dariusEvents.length)
  assert.ok(dariusEvents.length >= 20)
  for (const e of dariusEvents) assert.ok(e.year >= -522 && e.year <= -486, e.id)
})

test('every event has resolvable sources and bilingual fields', () => {
  for (const e of dariusEvents) {
    assert.ok(e.sources.length > 0, e.id)
    for (const s of e.sources) assert.ok(dariusSourceIds.has(s), `${e.id} → ${s}`)
    for (const f of [e.title, e.body, e.when]) { assert.ok(filled(f.fa), e.id); assert.ok(filled(f.en), e.id) }
    if (e.certainty !== 'secure') assert.ok(filled(e.certaintyNote?.fa) || e.certainty === 'probable', e.id)
    if (e.certainty === 'disputed') { assert.ok(filled(e.certaintyNote?.fa) && filled(e.certaintyNote?.en), e.id) }
  }
})

test('coordinates fall inside the basemap extent', () => {
  for (const e of dariusEvents) {
    for (const [lon, lat] of [e.coord, ...(e.route ?? [])]) {
      assert.ok(lon >= 18 && lon <= 80 && lat >= 12 && lat <= 50, `${e.id} ${lon},${lat}`)
    }
  }
  assert.ok(BASEMAP.width > 0)
})

test('Marathon and the Scythian campaign are flagged disputed', () => {
  for (const id of ['marathon', 'scythia']) assert.equal(dariusEvents.find((e) => e.id === id)?.certainty, 'disputed')
})

test('dossier sections keep all three layers in both languages', () => {
  assert.ok(dossier.length >= 9)
  for (const s of dossier) {
    for (const layer of [s.historical, s.interpretation, s.modern]) {
      assert.ok(layer.fa.length > 0 && layer.en.length > 0, s.id)
      for (const p of [...layer.fa, ...layer.en]) assert.ok(filled(p), s.id)
    }
    for (const src of s.sources) assert.ok(dariusSourceIds.has(src), `${s.id} → ${src}`)
    for (const q of s.quotes ?? []) assert.ok(dariusSourceIds.has(q.source) && filled(q.ref), s.id)
  }
  assert.equal(synthesis.paras.fa.length, synthesis.paras.en.length)
  for (const src of synthesis.sources) assert.ok(dariusSourceIds.has(src), src)
})

test('sources are unique and no excluded commentator is named', () => {
  assert.equal(dariusSourceIds.size, dariusSources.length)
  const all = JSON.stringify({ dariusEvents, dossier, synthesis, dariusSources })
  assert.equal(/jannatkhah|جنت.?خواه/i.test(all), false)
})
