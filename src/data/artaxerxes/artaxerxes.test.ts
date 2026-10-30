import assert from 'node:assert/strict'
import { test } from 'node:test'
import type { MapEvent } from '../featured/types'
import { artaxerxesCampaign, artaxerxesDossier as dossier, artaxerxesEvents, artaxerxesPhotos, artaxerxesPlaces, artaxerxesSourceIds, artaxerxesSources, artaxerxesSynthesis as synthesis } from './index'

const filled = (s: string | undefined) => typeof s === 'string' && s.trim().length > 0

function checkEvents(events: MapEvent[], lo: number, hi: number) {
  for (let i = 1; i < events.length; i++) assert.ok(events[i].year >= events[i - 1].year, events[i].id)
  assert.equal(new Set(events.map((e) => e.id)).size, events.length)
  for (const e of events) {
    assert.ok(e.year >= lo && e.year <= hi, e.id)
    assert.ok(e.sources.length > 0, e.id)
    for (const s of e.sources) assert.ok(artaxerxesSourceIds.has(s), `${e.id} → ${s}`)
    for (const f of [e.title, e.body, e.when]) { assert.ok(filled(f.fa), e.id); assert.ok(filled(f.en), e.id) }
    if (e.certainty === 'disputed') assert.ok(filled(e.certaintyNote?.fa) && filled(e.certaintyNote?.en), e.id)
    for (const [lon, lat] of [e.coord, ...(e.route ?? []), ...(e.fleet ?? [])]) assert.ok(lon >= 18 && lon <= 80 && lat >= 12 && lat <= 50, `${e.id} ${lon},${lat}`)
  }
}

test('life events run from accession to death in order, sourced', () => {
  assert.ok(artaxerxesEvents.length >= 12)
  checkEvents(artaxerxesEvents, -465, -424)
  assert.equal(artaxerxesEvents[0].id, 'accession')
  assert.equal(artaxerxesEvents.at(-1)?.id, 'death')
})

test('the western campaign covers Egypt, Cyprus and Callias with fleet tracks', () => {
  checkEvents(artaxerxesCampaign, -460, -440)
  const ids = artaxerxesCampaign.map((e) => e.id)
  for (const id of ['revolt', 'prosopitis', 'mendes', 'cimon', 'callias']) assert.ok(ids.includes(id), id)
  assert.ok(artaxerxesCampaign.filter((e) => e.fleet).length >= 3)
  for (const p of artaxerxesPlaces) assert.ok(filled(p.name.fa) && filled(p.name.en))
})

test('contested points are flagged, not asserted', () => {
  for (const id of ['bactria', 'ezra', 'callias', 'megabyzus', 'nehemiah', 'inaros']) assert.equal(artaxerxesEvents.find((e) => e.id === id)?.certainty, 'disputed', id)
  assert.equal(artaxerxesCampaign.find((e) => e.id === 'callias')?.certainty, 'disputed')
  assert.match(artaxerxesEvents.find((e) => e.id === 'death')?.certaintyNote?.en ?? '', /40.*41.*42/)
})

test('photos have Commons pages and licences; quotes cite a source and reference', () => {
  const ids = new Set(artaxerxesPhotos.map((p) => p.id))
  assert.equal(ids.size, artaxerxesPhotos.length)
  for (const p of artaxerxesPhotos) {
    assert.ok(p.page.startsWith('https://commons.wikimedia.org/wiki/File:') && p.src.startsWith('https://upload.wikimedia.org/'), p.id)
    if (p.license !== 'CC0' && p.license !== 'Public domain') assert.ok(p.licenseUrl, p.id)
  }
  for (const s of dossier) {
    for (const id of s.photos ?? []) assert.ok(ids.has(id), `${s.id} → ${id}`)
    for (const q of s.quotes ?? []) assert.ok(artaxerxesSourceIds.has(q.source) && filled(q.ref) && filled(q.fa), s.id)
  }
  assert.ok(dossier.some((s) => s.quotes?.some((q) => q.source === 'a1pa' && q.text.includes('the great king, the king of kings'))))
})

test('dossier keeps three bilingual layers and covers the property-lens topics', () => {
  assert.ok(dossier.length >= 10)
  for (const id of ['life', 'name', 'egypt', 'peace', 'themistocles', 'judah', 'murasu', 'buildings', 'succession']) assert.ok(dossier.some((d) => d.id === id), id)
  for (const s of dossier) {
    for (const layer of [s.historical, s.interpretation, s.modern]) {
      assert.ok(layer.fa.length > 0 && layer.en.length > 0, s.id)
      for (const p of [...layer.fa, ...layer.en]) assert.ok(filled(p), s.id)
    }
    for (const src of s.sources) assert.ok(artaxerxesSourceIds.has(src), `${s.id} → ${src}`)
  }
  assert.equal(synthesis.paras.fa.length, synthesis.paras.en.length)
})

test('sources are unique, Ctesias and the Bible are flagged, no excluded commentator is named', () => {
  assert.equal(artaxerxesSourceIds.size, artaxerxesSources.length)
  assert.match(artaxerxesSources.find((s) => s.id === 'ctesias')?.note?.en ?? '', /unreliable/)
  assert.match(artaxerxesSources.find((s) => s.id === 'bible')?.note?.en ?? '', /religious/)
  const all = JSON.stringify({ artaxerxesEvents, artaxerxesCampaign, dossier, synthesis, artaxerxesSources, artaxerxesPhotos })
  assert.equal(/jannatkhah|جنت.?خواه/i.test(all), false)
})
