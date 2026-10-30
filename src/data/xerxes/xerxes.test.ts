import assert from 'node:assert/strict'
import { test } from 'node:test'
import type { MapEvent } from '../featured/types'
import { xerxesBattles, xerxesCampaign, xerxesDossier as dossier, xerxesEvents, xerxesPhotos, xerxesPlaces, xerxesSourceIds, xerxesSources, xerxesSynthesis as synthesis } from './index'

const filled = (s: string | undefined) => typeof s === 'string' && s.trim().length > 0

function checkEvents(events: MapEvent[], lo: number, hi: number) {
  for (let i = 1; i < events.length; i++) assert.ok(events[i].year >= events[i - 1].year, events[i].id)
  assert.equal(new Set(events.map((e) => e.id)).size, events.length)
  for (const e of events) {
    assert.ok(e.year >= lo && e.year <= hi, e.id)
    assert.ok(e.sources.length > 0, e.id)
    for (const s of e.sources) assert.ok(xerxesSourceIds.has(s), `${e.id} → ${s}`)
    for (const f of [e.title, e.body, e.when]) { assert.ok(filled(f.fa), e.id); assert.ok(filled(f.en), e.id) }
    if (e.certainty === 'disputed') assert.ok(filled(e.certaintyNote?.fa) && filled(e.certaintyNote?.en), e.id)
    for (const [lon, lat] of [e.coord, ...(e.route ?? []), ...(e.fleet ?? [])]) assert.ok(lon >= 18 && lon <= 80 && lat >= 12 && lat <= 50, `${e.id} ${lon},${lat}`)
  }
}

test('life events are chronological, sourced and inside the reign window', () => {
  assert.ok(xerxesEvents.length >= 10)
  checkEvents(xerxesEvents, -518, -465)
  assert.equal(xerxesEvents[0].id, 'birth')
  assert.equal(xerxesEvents.at(-1)?.id, 'murder')
})

test('the Greek-war campaign runs from the Ionian revolt to the aftermath with fleet tracks', () => {
  checkEvents(xerxesCampaign, -499, -479)
  const ids = xerxesCampaign.map((e) => e.id)
  for (const id of ['hellespont', 'thermopylae', 'artemisium', 'acropolis', 'salamis', 'plataea', 'mycale']) assert.ok(ids.includes(id), id)
  assert.ok(xerxesCampaign.filter((e) => e.fleet).length >= 4)
  for (const p of xerxesPlaces) assert.ok(filled(p.name.fa) && filled(p.name.en))
})

test('Herodotus’ army figures and the Esagila story are flagged, not asserted', () => {
  assert.equal(xerxesCampaign.find((e) => e.id === 'doriscus')?.certainty, 'disputed')
  assert.equal(xerxesEvents.find((e) => e.id === 'babylon-revolts')?.certainty, 'disputed')
  assert.equal(xerxesEvents.find((e) => e.id === 'daiva')?.certainty, 'disputed')
  const army = dossier.find((d) => d.id === 'army')
  assert.ok(army && army.sources.includes('lazenby') && army.sources.includes('cawkwell'))
})

test('battle diagrams keep units on the canvas and ids stable across phases', () => {
  assert.deepEqual(xerxesBattles.map((b) => b.id), ['thermopylae', 'salamis'])
  for (const b of xerxesBattles) {
    assert.ok(b.phases.length >= 3, b.id)
    for (const p of b.phases) {
      assert.ok(filled(p.title.fa) && filled(p.body.en), p.id)
      for (const s of p.sources) assert.ok(xerxesSourceIds.has(s), `${b.id}/${p.id} → ${s}`)
      assert.equal(new Set(p.units.map((u) => `${u.side}-${u.id}`)).size, p.units.length, p.id)
      for (const u of p.units) assert.ok(u.at[0] >= 0 && u.at[0] <= 100 && u.at[1] >= 0 && u.at[1] <= 60, `${p.id}/${u.id}`)
    }
  }
})

test('photos have Commons pages and licences; quotes cite a source and reference', () => {
  const ids = new Set(xerxesPhotos.map((p) => p.id))
  assert.equal(ids.size, xerxesPhotos.length)
  for (const p of xerxesPhotos) {
    assert.ok(p.page.startsWith('https://commons.wikimedia.org/wiki/File:') && p.src.startsWith('https://upload.wikimedia.org/'), p.id)
    if (p.license !== 'CC0' && p.license !== 'Public domain') assert.ok(p.licenseUrl, p.id)
  }
  for (const s of dossier) {
    for (const id of s.photos ?? []) assert.ok(ids.has(id), `${s.id} → ${id}`)
    for (const q of s.quotes ?? []) assert.ok(xerxesSourceIds.has(q.source) && filled(q.ref) && filled(q.fa), s.id)
  }
})

test('dossier keeps three bilingual layers and covers the property-lens topics', () => {
  for (const id of ['economy', 'markets', 'religion', 'army', 'law', 'freedoms']) assert.ok(dossier.some((d) => d.id === id), id)
  for (const s of dossier) {
    for (const layer of [s.historical, s.interpretation, s.modern]) {
      assert.ok(layer.fa.length > 0 && layer.en.length > 0, s.id)
      for (const p of [...layer.fa, ...layer.en]) assert.ok(filled(p), s.id)
    }
    for (const src of s.sources) assert.ok(xerxesSourceIds.has(src), `${s.id} → ${src}`)
  }
  assert.equal(synthesis.paras.fa.length, synthesis.paras.en.length)
})

test('sources are unique, Ctesias is flagged and no excluded commentator is named', () => {
  assert.equal(xerxesSourceIds.size, xerxesSources.length)
  assert.match(xerxesSources.find((s) => s.id === 'ctesias')?.note?.en ?? '', /unreliable/)
  const all = JSON.stringify({ xerxesEvents, xerxesCampaign, xerxesBattles, dossier, synthesis, xerxesSources, xerxesPhotos })
  assert.equal(/jannatkhah|جنت.?خواه/i.test(all), false)
})
