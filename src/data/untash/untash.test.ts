import assert from 'node:assert/strict'
import { test } from 'node:test'
import { BASEMAP } from '../basemap'
import { untashDossier as dossier, untashEvents, untashPhotos, untashSourceIds, untashSources, untashSynthesis as synthesis } from './index'

const filled = (s: string | undefined) => typeof s === 'string' && s.trim().length > 0

test('untash events are in chronological order with unique ids', () => {
  for (let i = 1; i < untashEvents.length; i++) assert.ok(untashEvents[i].year >= untashEvents[i - 1].year, untashEvents[i].id)
  assert.equal(new Set(untashEvents.map((e) => e.id)).size, untashEvents.length)
  assert.ok(untashEvents.length >= 8)
  for (const e of untashEvents) assert.ok(e.year >= -1340 && e.year <= -1300, e.id)
})

test('every event has resolvable sources and bilingual fields', () => {
  for (const e of untashEvents) {
    assert.ok(e.sources.length > 0, e.id)
    for (const s of e.sources) assert.ok(untashSourceIds.has(s), `${e.id} → ${s}`)
    for (const f of [e.title, e.body, e.when]) { assert.ok(filled(f.fa), e.id); assert.ok(filled(f.en), e.id) }
    if (e.certainty !== 'secure') assert.ok(filled(e.certaintyNote?.fa) || e.certainty === 'probable', e.id)
    if (e.certainty === 'disputed') { assert.ok(filled(e.certaintyNote?.fa) && filled(e.certaintyNote?.en), e.id) }
  }
})

test('coordinates fall inside the basemap extent', () => {
  for (const e of untashEvents) {
    for (const [lon, lat] of [e.coord, ...(e.route ?? [])]) {
      assert.ok(lon >= 18 && lon <= 80 && lat >= 12 && lat <= 50, `${e.id} ${lon},${lat}`)
    }
  }
  assert.ok(BASEMAP.width > 0)
})

test('the Immeriya campaign reading and the highland-gods policy are flagged disputed', () => {
  for (const id of ['immeriya', 'highland-gods']) assert.equal(untashEvents.find((e) => e.id === id)?.certainty, 'disputed')
})

test('photos have Commons pages, licences and resolvable section refs', () => {
  const ids = new Set(untashPhotos.map((p) => p.id))
  assert.equal(ids.size, untashPhotos.length)
  for (const p of untashPhotos) {
    assert.ok(p.page.startsWith('https://commons.wikimedia.org/wiki/File:') && p.src.startsWith('https://upload.wikimedia.org/'), p.id)
    assert.ok(filled(p.author) && filled(p.caption.fa) && filled(p.caption.en), p.id)
    if (p.license !== 'CC0' && p.license !== 'Public domain') assert.ok(p.licenseUrl, p.id)
  }
  for (const s of dossier) for (const id of s.photos ?? []) assert.ok(ids.has(id), `${s.id} → ${id}`)
})

test('dossier sections keep all three layers in both languages', () => {
  assert.ok(dossier.length >= 7)
  for (const s of dossier) {
    for (const layer of [s.historical, s.interpretation, s.modern]) {
      assert.ok(layer.fa.length > 0 && layer.en.length > 0, s.id)
      for (const p of [...layer.fa, ...layer.en]) assert.ok(filled(p), s.id)
    }
    for (const src of s.sources) assert.ok(untashSourceIds.has(src), `${s.id} → ${src}`)
    for (const q of s.quotes ?? []) assert.ok(untashSourceIds.has(q.source) && filled(q.ref), s.id)
  }
  assert.equal(synthesis.paras.fa.length, synthesis.paras.en.length)
  for (const src of synthesis.sources) assert.ok(untashSourceIds.has(src), src)
})

test('sources are unique and no excluded commentator is named', () => {
  assert.equal(untashSourceIds.size, untashSources.length)
  const all = JSON.stringify({ untashEvents, dossier, synthesis, untashSources, untashPhotos })
  assert.equal(/jannatkhah|جنت.?خواه/i.test(all), false)
})
