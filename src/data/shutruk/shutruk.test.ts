import assert from 'node:assert/strict'
import { test } from 'node:test'
import { shutrukDossier as dossier, shutrukEvents, shutrukNakhunte as king, shutrukPhotos, shutrukSourceIds } from './index'

const filled = (s: string | undefined) => typeof s === 'string' && s.trim().length > 0

test('shutruk events are ordered, sourced, bilingual and inside the reign', () => {
  for (let i = 1; i < shutrukEvents.length; i++) assert.ok(shutrukEvents[i].year >= shutrukEvents[i - 1].year, shutrukEvents[i].id)
  assert.equal(new Set(shutrukEvents.map((e) => e.id)).size, shutrukEvents.length)
  for (const e of [...shutrukEvents, ...(king.campaign?.events ?? [])]) {
    assert.ok(e.year >= -1184 && e.year <= -1155, e.id)
    for (const s of e.sources) assert.ok(shutrukSourceIds.has(s), `${e.id} → ${s}`)
    for (const f of [e.title, e.body, e.when]) assert.ok(filled(f.fa) && filled(f.en), e.id)
    if (e.certainty === 'disputed') assert.ok(filled(e.certaintyNote?.fa) && filled(e.certaintyNote?.en), e.id)
  }
})

test('the Babylonian campaign map visits the trophy cities and returns to Susa', () => {
  const ids = (king.campaign?.events ?? []).map((e) => e.id)
  for (const id of ['eshnunna', 'akkad', 'sippar', 'babylon', 'return']) assert.ok(ids.includes(id), id)
  assert.equal(king.campaign?.events.find((e) => e.id === 'akkad')?.certainty, 'disputed')
})

test('photos carry licences and every section ref resolves', () => {
  const ids = new Set(shutrukPhotos.map((p) => p.id))
  for (const p of shutrukPhotos) {
    assert.ok(p.page.startsWith('https://commons.wikimedia.org/wiki/File:') && p.src.startsWith('https://upload.wikimedia.org/'), p.id)
    if (p.license !== 'CC0' && p.license !== 'Public domain') assert.ok(p.licenseUrl, p.id)
  }
  for (const s of dossier) {
    for (const id of s.photos ?? []) assert.ok(ids.has(id), `${s.id} → ${id}`)
    for (const src of s.sources) assert.ok(shutrukSourceIds.has(src), `${s.id} → ${src}`)
    for (const q of s.quotes ?? []) assert.ok(shutrukSourceIds.has(q.source) && filled(q.ref), s.id)
    for (const layer of [s.historical, s.interpretation, s.modern]) assert.ok(layer.fa.length === layer.en.length && layer.fa.every(filled), s.id)
  }
})

test('König 1965 and Potts 1999 are cited, and the Code-erasure guess is flagged', () => {
  for (const id of ['konig1965', 'potts1999']) assert.ok(shutrukSourceIds.has(id))
  const tr = dossier.find((s) => s.id === 'trophies')
  assert.match(tr?.interpretation.en.join(' ') ?? '', /only a guess/)
})
