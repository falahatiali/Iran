import assert from 'node:assert/strict'
import { test } from 'node:test'
import { yaqubDossier as dossier, yaqubEvents, yaqub as king, yaqubPhotos, yaqubSourceIds } from './index'

const filled = (s: string | undefined) => typeof s === 'string' && s.trim().length > 0

test('yaqub events are ordered, sourced, bilingual and inside the reign', () => {
  for (const list of [yaqubEvents, king.campaign?.events ?? []]) {
    for (let i = 1; i < list.length; i++) assert.ok(list[i].year >= list[i - 1].year, list[i].id)
    assert.equal(new Set(list.map((e) => e.id)).size, list.length)
  }
  for (const e of [...yaqubEvents, ...(king.campaign?.events ?? [])]) {
    for (const s of e.sources) assert.ok(yaqubSourceIds.has(s), `${e.id} → ${s}`)
    for (const f of [e.title, e.body, e.when]) assert.ok(filled(f.fa) && filled(f.en), e.id)
    if (e.certainty !== 'secure') assert.ok(filled(e.certaintyNote?.fa) && filled(e.certaintyNote?.en), e.id)
  }
})

test('dates where the sources disagree are flagged, and the fabricated genealogy is called a legend', () => {
  for (const id of ['herat', 'kabul']) assert.equal(yaqubEvents.find((e) => e.id === id)!.certainty, 'disputed', id)
  assert.match(dossier.find((s) => s.id === 'sources')!.interpretation.en.join(' '), /legend/)
  assert.match(dossier.find((s) => s.id === 'persian')!.interpretation.en.join(' '), /less sustainable/)
})

test('photos carry licences, quotes cite published translations, and section refs resolve', () => {
  const ids = new Set(yaqubPhotos.map((p) => p.id))
  for (const p of yaqubPhotos) {
    assert.ok(p.page.startsWith('https://commons.wikimedia.org/wiki/File:') && p.src.startsWith('https://upload.wikimedia.org/'), p.id)
    assert.ok(p.licenseUrl, p.id)
  }
  for (const s of dossier) {
    for (const id of s.photos ?? []) assert.ok(ids.has(id), `${s.id} → ${id}`)
    for (const src of s.sources) assert.ok(yaqubSourceIds.has(src), `${s.id} → ${src}`)
    for (const q of s.quotes ?? []) assert.ok(yaqubSourceIds.has(q.source) && /tr\./.test(q.ref) && filled(q.fa), s.id)
    for (const layer of [s.historical, s.interpretation, s.modern]) assert.ok(layer.fa.length === layer.en.length && layer.fa.every(filled), s.id)
  }
  assert.match(dossier.find((s) => s.id === 'property')?.interpretation.en.join(' ') ?? '', /our reading/)
})
