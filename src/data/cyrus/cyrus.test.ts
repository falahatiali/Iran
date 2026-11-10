import assert from 'node:assert/strict'
import { test } from 'node:test'
import { cyrusDossier as dossier, cyrusEvents, cyrus as king, cyrusPhotos, cyrusSourceIds } from './index'
import { dynasties } from '../dynasties'

const filled = (s: string | undefined) => typeof s === 'string' && s.trim().length > 0

test('cyrus events are ordered, sourced, bilingual and inside the reign', () => {
  for (const list of [cyrusEvents, king.campaign?.events ?? []]) {
    for (let i = 1; i < list.length; i++) assert.ok(list[i].year >= list[i - 1].year, list[i].id)
    assert.equal(new Set(list.map((e) => e.id)).size, list.length)
  }
  for (const e of cyrusEvents) assert.ok(e.year >= king.span[0] && e.year <= king.span[1], e.id)
  for (const e of [...cyrusEvents, ...(king.campaign?.events ?? [])]) {
    for (const s of e.sources) assert.ok(cyrusSourceIds.has(s), `${e.id} → ${s}`)
    for (const f of [e.title, e.body, e.when]) assert.ok(filled(f.fa) && filled(f.en), e.id)
    if (e.certainty !== 'secure') assert.ok(filled(e.certaintyNote?.fa) && filled(e.certaintyNote?.en), e.id)
  }
})

test('Herodotus-only claims are never marked secure', () => {
  for (const e of [...cyrusEvents, ...(king.campaign?.events ?? [])])
    if (e.sources.length && e.sources.every((s) => s === 'hdt' || s === 'dandamayev') && e.sources.includes('hdt')) assert.notEqual(e.certainty, 'secure', e.id)
})

test('local photos carry licences and every section ref resolves', () => {
  const ids = new Set(cyrusPhotos.map((p) => p.id))
  for (const p of cyrusPhotos) {
    assert.ok(p.src.startsWith('/media/cyrus/') && p.src.endsWith('.webp'), p.id)
    assert.ok(p.page.startsWith('https://commons.wikimedia.org/wiki/File:'), p.id)
    if (p.license.startsWith('CC BY')) assert.ok(p.licenseUrl, p.id)
  }
  for (const s of dossier) {
    for (const id of s.photos ?? []) assert.ok(ids.has(id), `${s.id} → ${id}`)
    for (const src of s.sources) assert.ok(cyrusSourceIds.has(src), `${s.id} → ${src}`)
    for (const q of s.quotes ?? []) assert.ok(cyrusSourceIds.has(q.source) && filled(q.ref) && filled(q.fa), s.id)
    for (const layer of [s.historical, s.interpretation, s.modern]) assert.ok(layer.fa.length === layer.en.length && layer.fa.every(filled), s.id)
  }
  assert.equal(new Set(dossier.map((s) => s.id)).size, dossier.length)
})

test('the biography flags its myths and labels its reading', () => {
  const sec = (id: string) => dossier.find((s) => s.id === id)!
  assert.match(sec('babylon').interpretation.en.join(' '), /not “the first charter of human rights”/)
  assert.match(sec('property').interpretation.en.join(' '), /our reading/)
  assert.match(sec('titles').interpretation.en.join(' '), /novel, not history/)
  assert.equal(sec('tomb').embed, 'cyrus-tomb')
  for (const id of ['lineage', 'babylon', 'judeans', 'death', 'tomb', 'garden', 'inside', 'alexander', 'form', 'later']) assert.ok(sec(id), id)
})

test('the English style of Cyrus II is “the Great”, not a typo', () => {
  const row = dynasties.flatMap((d) => d.rulers).find((r) => r.id === 'cyrus-ii')
  assert.equal(row?.latin, 'Cyrus II the Great')
  assert.doesNotMatch(row?.latin ?? '', /Greet/)
})
