import assert from 'node:assert/strict'
import { test } from 'node:test'
import { alpDossier as dossier, alpEvents, alpArslan as king, alpPhotos, alpSourceIds } from './index'

const filled = (s: string | undefined) => typeof s === 'string' && s.trim().length > 0

test('alp-arslan events are ordered, sourced, bilingual and hedged', () => {
  for (const list of [alpEvents, king.campaign?.events ?? []]) {
    for (let i = 1; i < list.length; i++) assert.ok(list[i].year >= list[i - 1].year, list[i].id)
    assert.equal(new Set(list.map((e) => e.id)).size, list.length)
  }
  for (const e of [...alpEvents, ...(king.campaign?.events ?? [])]) {
    for (const s of e.sources) assert.ok(alpSourceIds.has(s), `${e.id} → ${s}`)
    for (const f of [e.title, e.body, e.when]) assert.ok(filled(f.fa) && filled(f.en), e.id)
    if (e.certainty !== 'secure') assert.ok(filled(e.certaintyNote?.fa) && filled(e.certaintyNote?.en), e.id)
  }
})

test('the Manzikert diagram is schematic, sourced, and names both sides', () => {
  const b = king.campaign?.battles?.find((x) => x.id === 'manzikert')
  assert.ok(b && /schematic/.test(b.title.en))
  assert.equal(b.sides?.persian.en, 'Seljuks')
  assert.equal(b.sides?.greek.en, 'Byzantines')
  for (const p of b.phases) {
    assert.ok(p.sources.length > 0 && p.sources.every((s) => alpSourceIds.has(s)), p.id)
    if (p.certainty !== 'secure') assert.ok(filled(p.certaintyNote?.en), p.id)
  }
  assert.match(dossier.find((s) => s.id === 'sources')!.interpretation.en.join(' '), /legend/)
  assert.match(alpEvents.find((e) => e.id === 'edessa')!.body.en, /we are told/)
})

test('photos carry licences, and section refs resolve', () => {
  const ids = new Set(alpPhotos.map((p) => p.id))
  for (const p of alpPhotos) assert.ok(p.page.startsWith('https://commons.wikimedia.org/wiki/File:') && p.src.startsWith('https://upload.wikimedia.org/') && p.licenseUrl, p.id)
  for (const s of dossier) {
    for (const id of s.photos ?? []) assert.ok(ids.has(id), `${s.id} → ${id}`)
    for (const src of s.sources) assert.ok(alpSourceIds.has(src), `${s.id} → ${src}`)
    for (const layer of [s.historical, s.interpretation, s.modern]) assert.ok(layer.fa.length === layer.en.length && layer.fa.every(filled), s.id)
  }
  assert.match(dossier.find((s) => s.id === 'property')?.interpretation.en.join(' ') ?? '', /our reading/)
})
