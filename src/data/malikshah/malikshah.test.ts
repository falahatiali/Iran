import assert from 'node:assert/strict'
import { test } from 'node:test'
import { malikDossier as dossier, malikEvents, malikShah as king, malikPhotos, malikSourceIds } from './index'

const filled = (s: string | undefined) => typeof s === 'string' && s.trim().length > 0

test('malik-shah-i events are ordered, sourced, bilingual and hedged', () => {
  for (let i = 1; i < malikEvents.length; i++) assert.ok(malikEvents[i].year >= malikEvents[i - 1].year, malikEvents[i].id)
  assert.equal(new Set(malikEvents.map((e) => e.id)).size, malikEvents.length)
  for (const e of malikEvents) {
    assert.ok(e.year >= king.span[0] && e.year <= king.span[1], e.id)
    for (const s of e.sources) assert.ok(malikSourceIds.has(s), `${e.id} → ${s}`)
    for (const f of [e.title, e.body, e.when]) assert.ok(filled(f.fa) && filled(f.en), e.id)
    if (e.certainty !== 'secure') assert.ok(filled(e.certaintyNote?.fa) && filled(e.certaintyNote?.en), e.id)
  }
})

test('the vizier’s murder and the sultan’s death are flagged as disputed', () => {
  assert.equal(malikEvents.find((e) => e.id === 'nizam')!.certainty, 'disputed')
  assert.equal(malikEvents.find((e) => e.id === 'death')!.certainty, 'disputed')
  assert.match(dossier.find((s) => s.id === 'siar')!.interpretation.en.join(' '), /disputed/)
})

test('photos carry licences, and section refs resolve', () => {
  const ids = new Set(malikPhotos.map((p) => p.id))
  for (const p of malikPhotos) assert.ok(p.page.startsWith('https://commons.wikimedia.org/wiki/File:') && p.src.startsWith('https://upload.wikimedia.org/') && p.licenseUrl, p.id)
  for (const s of dossier) {
    for (const id of s.photos ?? []) assert.ok(ids.has(id), `${s.id} → ${id}`)
    for (const src of s.sources) assert.ok(malikSourceIds.has(src), `${s.id} → ${src}`)
    for (const layer of [s.historical, s.interpretation, s.modern]) assert.ok(layer.fa.length === layer.en.length && layer.fa.every(filled), s.id)
  }
  assert.match(dossier.find((s) => s.id === 'property')?.interpretation.en.join(' ') ?? '', /our reading/)
})
