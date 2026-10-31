import assert from 'node:assert/strict'
import { test } from 'node:test'
import { ismailDossier as dossier, ismailEvents, ismail as king, ismailPhotos, ismailSourceIds } from './index'

const filled = (s: string | undefined) => typeof s === 'string' && s.trim().length > 0

test('ismail events are ordered, sourced, bilingual and inside the reign', () => {
  for (const list of [ismailEvents, king.campaign?.events ?? []]) {
    for (let i = 1; i < list.length; i++) assert.ok(list[i].year >= list[i - 1].year, list[i].id)
    assert.equal(new Set(list.map((e) => e.id)).size, list.length)
  }
  for (const e of [...ismailEvents, ...(king.campaign?.events ?? [])]) {
    for (const s of e.sources) assert.ok(ismailSourceIds.has(s), `${e.id} → ${s}`)
    for (const f of [e.title, e.body, e.when]) assert.ok(filled(f.fa) && filled(f.en), e.id)
    if (e.certainty !== 'secure') assert.ok(filled(e.certaintyNote?.fa) && filled(e.certaintyNote?.en), e.id)
  }
})

test('the Sasanian pedigree is called legendary, and the tomb attribution is flagged as disputed', () => {
  assert.match(dossier.find((s) => s.id === 'sources')!.interpretation.en.join(' '), /legendary/)
  assert.match(dossier.find((s) => s.id === 'tomb')!.interpretation.en.join(' '), /disputed/)
  assert.equal(ismailEvents.find((e) => e.id === 'balkh')!.certainty, 'probable')
})

test('photos carry licences, quotes cite published translations, and section refs resolve', () => {
  const ids = new Set(ismailPhotos.map((p) => p.id))
  for (const p of ismailPhotos) {
    assert.ok(p.page.startsWith('https://commons.wikimedia.org/wiki/File:') && p.src.startsWith('https://upload.wikimedia.org/'), p.id)
    assert.ok(p.licenseUrl, p.id)
  }
  for (const s of dossier) {
    for (const id of s.photos ?? []) assert.ok(ids.has(id), `${s.id} → ${id}`)
    for (const src of s.sources) assert.ok(ismailSourceIds.has(src), `${s.id} → ${src}`)
    for (const q of s.quotes ?? []) assert.ok(ismailSourceIds.has(q.source) && /tr\./.test(q.ref) && filled(q.fa), s.id)
    for (const layer of [s.historical, s.interpretation, s.modern]) assert.ok(layer.fa.length === layer.en.length && layer.fa.every(filled), s.id)
  }
  assert.match(dossier.find((s) => s.id === 'property')?.interpretation.en.join(' ') ?? '', /our reading/)
})
