import assert from 'node:assert/strict'
import { test } from 'node:test'
import { adudDossier as dossier, adudEvents, adud as king, adudPhotos, adudSourceIds } from './index'

const filled = (s: string | undefined) => typeof s === 'string' && s.trim().length > 0

test('adud events are ordered, sourced, bilingual and inside the reign', () => {
  for (const list of [adudEvents, king.campaign?.events ?? []]) {
    for (let i = 1; i < list.length; i++) assert.ok(list[i].year >= list[i - 1].year, list[i].id)
    assert.equal(new Set(list.map((e) => e.id)).size, list.length)
  }
  for (const e of [...adudEvents, ...(king.campaign?.events ?? [])]) {
    for (const s of e.sources) assert.ok(adudSourceIds.has(s), `${e.id} → ${s}`)
    for (const f of [e.title, e.body, e.when]) assert.ok(filled(f.fa) && filled(f.en), e.id)
    if (e.certainty !== 'secure') assert.ok(filled(e.certaintyNote?.fa) && filled(e.certaintyNote?.en), e.id)
  }
})

test('the Sasanian pedigree is called a legend, and the Shahanshah first is hedged', () => {
  assert.match(dossier.find((s) => s.id === 'sources')!.interpretation.en.join(' '), /legend/)
  assert.match(dossier.find((s) => s.id === 'shahanshah')!.historical.en.join(' '), /probably/)
  assert.equal(adudEvents.find((e) => e.id === 'death')!.certainty, 'probable')
})

test('photos carry licences, quotes cite published translations, and section refs resolve', () => {
  const ids = new Set(adudPhotos.map((p) => p.id))
  for (const p of adudPhotos) {
    assert.ok(p.page.startsWith('https://commons.wikimedia.org/wiki/File:') && p.src.startsWith('https://upload.wikimedia.org/'), p.id)
    assert.ok(p.licenseUrl, p.id)
  }
  for (const s of dossier) {
    for (const id of s.photos ?? []) assert.ok(ids.has(id), `${s.id} → ${id}`)
    for (const src of s.sources) assert.ok(adudSourceIds.has(src), `${s.id} → ${src}`)
    for (const q of s.quotes ?? []) assert.ok(adudSourceIds.has(q.source) && /tr\./.test(q.ref) && filled(q.fa), s.id)
    for (const layer of [s.historical, s.interpretation, s.modern]) assert.ok(layer.fa.length === layer.en.length && layer.fa.every(filled), s.id)
  }
  assert.match(dossier.find((s) => s.id === 'property')?.interpretation.en.join(' ') ?? '', /our reading/)
})
