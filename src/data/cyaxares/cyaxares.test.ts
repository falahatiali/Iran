import assert from 'node:assert/strict'
import { test } from 'node:test'
import { cyaxaresDossier as dossier, cyaxaresEvents, cyaxares as king, cyaxaresPhotos, cyaxaresSourceIds } from './index'

const filled = (s: string | undefined) => typeof s === 'string' && s.trim().length > 0

test('cyaxares events are ordered, sourced, bilingual and inside the reign', () => {
  for (const list of [cyaxaresEvents, king.campaign?.events ?? []]) {
    for (let i = 1; i < list.length; i++) assert.ok(list[i].year >= list[i - 1].year, list[i].id)
    assert.equal(new Set(list.map((e) => e.id)).size, list.length)
  }
  for (const e of [...cyaxaresEvents, ...(king.campaign?.events ?? [])]) {
    assert.ok(e.year >= king.span[0] && e.year <= king.span[1], e.id)
    for (const s of e.sources) assert.ok(cyaxaresSourceIds.has(s), `${e.id} → ${s}`)
    for (const f of [e.title, e.body, e.when]) assert.ok(filled(f.fa) && filled(f.en), e.id)
    if (e.certainty !== 'secure') assert.ok(filled(e.certaintyNote?.fa) && filled(e.certaintyNote?.en), e.id)
  }
})

test('the Nineveh campaign follows the Babylonian chronicle and stays inside its span', () => {
  const c = king.campaign!
  for (const id of ['c-assur', 'c-pact', 'c-nineveh', 'c-harran']) {
    const e = c.events.find((x) => x.id === id)
    assert.ok(e && e.sources.includes('abc3') && e.certainty === 'secure', id)
  }
  for (const e of c.events) assert.ok(e.year >= c.span[0] && e.year <= c.span[1], e.id)
  assert.equal(c.events.find((e) => e.id === 'c-nineveh')?.year, -612)
})

test('Herodotus-only claims are labelled as his and never marked secure', () => {
  for (const e of cyaxaresEvents) if (e.sources.length === 1 && e.sources[0] === 'hdt') assert.notEqual(e.certainty, 'secure', e.id)
  for (const id of ['army', 'scythians', 'lydia']) {
    const s = dossier.find((x) => x.id === id)!
    assert.match(s.historical.en.join(' '), /Herodotus/, id)
  }
  assert.equal(cyaxaresEvents[0].certainty, 'disputed')
})

test('photos carry licences, quotes cite published translations, and section refs resolve', () => {
  const ids = new Set(cyaxaresPhotos.map((p) => p.id))
  for (const p of cyaxaresPhotos) {
    assert.ok(p.page.startsWith('https://commons.wikimedia.org/wiki/File:') && p.src.startsWith('https://upload.wikimedia.org/'), p.id)
    if (p.license !== 'CC0' && p.license !== 'Public domain') assert.ok(p.licenseUrl, p.id)
  }
  for (const s of dossier) {
    for (const id of s.photos ?? []) assert.ok(ids.has(id), `${s.id} → ${id}`)
    for (const src of s.sources) assert.ok(cyaxaresSourceIds.has(src), `${s.id} → ${src}`)
    for (const q of s.quotes ?? []) assert.ok(cyaxaresSourceIds.has(q.source) && filled(q.ref) && filled(q.fa), s.id)
    for (const layer of [s.historical, s.interpretation, s.modern]) assert.ok(layer.fa.length === layer.en.length && layer.fa.every(filled), s.id)
  }
  assert.match(dossier.find((s) => s.id === 'property')?.interpretation.en.join(' ') ?? '', /our reading/)
})
