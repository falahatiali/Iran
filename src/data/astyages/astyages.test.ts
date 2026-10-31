import assert from 'node:assert/strict'
import { test } from 'node:test'
import { astyagesDossier as dossier, astyagesEvents, astyages as king, astyagesPhotos, astyagesSourceIds } from './index'

const filled = (s: string | undefined) => typeof s === 'string' && s.trim().length > 0

test('astyages events are ordered, sourced, bilingual and inside the reign', () => {
  for (const list of [astyagesEvents, king.campaign?.events ?? []]) {
    for (let i = 1; i < list.length; i++) assert.ok(list[i].year >= list[i - 1].year, list[i].id)
    assert.equal(new Set(list.map((e) => e.id)).size, list.length)
  }
  for (const e of astyagesEvents) assert.ok(e.year >= king.span[0] && e.year <= king.span[1], e.id)
  if (king.campaign) for (const e of king.campaign.events) assert.ok(e.year >= king.campaign.span[0] && e.year <= king.campaign.span[1], e.id)
  for (const e of [...astyagesEvents, ...(king.campaign?.events ?? [])]) {
    for (const s of e.sources) assert.ok(astyagesSourceIds.has(s), `${e.id} → ${s}`)
    for (const f of [e.title, e.body, e.when]) assert.ok(filled(f.fa) && filled(f.en), e.id)
    if (e.certainty !== 'secure') assert.ok(filled(e.certaintyNote?.fa) && filled(e.certaintyNote?.en), e.id)
  }
})

test('Herodotus-only claims are labelled as his and never marked secure', () => {
  for (const e of [...astyagesEvents, ...(king.campaign?.events ?? [])]) {
    if (e.sources.every((s) => s === 'hdt' || s === 'schmitt-ir') && e.sources.includes('hdt')) {
      assert.notEqual(e.certainty, 'secure', e.id)
      assert.match(e.title.en + e.body.en, /Herodotus/, e.id)
    }
  }
})

test('photos carry licences, quotes cite published translations, and section refs resolve', () => {
  const ids = new Set(astyagesPhotos.map((p) => p.id))
  for (const p of astyagesPhotos) {
    assert.ok(p.page.startsWith('https://commons.wikimedia.org/wiki/File:') && p.src.startsWith('https://upload.wikimedia.org/'), p.id)
    if (p.license !== 'CC0' && p.license !== 'Public domain') assert.ok(p.licenseUrl, p.id)
  }
  for (const s of dossier) {
    for (const id of s.photos ?? []) assert.ok(ids.has(id), `${s.id} → ${id}`)
    for (const src of s.sources) assert.ok(astyagesSourceIds.has(src), `${s.id} → ${src}`)
    for (const q of s.quotes ?? []) assert.ok(astyagesSourceIds.has(q.source) && filled(q.ref) && filled(q.fa), s.id)
    for (const layer of [s.historical, s.interpretation, s.modern]) assert.ok(layer.fa.length === layer.en.length && layer.fa.every(filled), s.id)
  }
  assert.match(dossier.find((s) => s.id === 'property')?.interpretation.en.join(' ') ?? '', /our reading/)
})

test('the fall follows the Nabonidus Chronicle and Harpagus stays Herodotus’', () => {
  for (const id of ['march', 'ecbatana']) assert.ok(astyagesEvents.find((e) => e.id === id)!.sources.includes('abc7'), id)
  const h = astyagesEvents.find((e) => e.id === 'harpagus')!
  assert.deepEqual([h.certainty, h.sources.includes('abc7')], ['disputed', false])
})
