import assert from 'node:assert/strict'
import { test } from 'node:test'
import { shilhakDossier as dossier, shilhakEvents, shilhakInshushinak as king, shilhakPhotos, shilhakSourceIds } from './index'
import { epithetsFor } from '../epithets'

const filled = (s: string | undefined) => typeof s === 'string' && s.trim().length > 0

test('shilhak events are ordered, sourced, bilingual and inside the reign', () => {
  for (let i = 1; i < shilhakEvents.length; i++) assert.ok(shilhakEvents[i].year >= shilhakEvents[i - 1].year, shilhakEvents[i].id)
  assert.equal(new Set(shilhakEvents.map((e) => e.id)).size, shilhakEvents.length)
  for (const e of [...shilhakEvents, ...(king.campaign?.events ?? [])]) {
    assert.ok(e.year >= -1150 && e.year <= -1120, e.id)
    for (const s of e.sources) assert.ok(shilhakSourceIds.has(s), `${e.id} → ${s}`)
    for (const f of [e.title, e.body, e.when]) assert.ok(filled(f.fa) && filled(f.en), e.id)
    if (e.certainty !== 'secure') assert.ok(filled(e.certaintyNote?.fa) && filled(e.certaintyNote?.en), e.id)
  }
})

test('the western campaign map reaches the regions Basello identifies and flags its order as disputed', () => {
  const c = king.campaign?.events ?? []
  for (const id of ['diyala', 'babylonia', 'arrapha', 'return']) assert.ok(c.some((e) => e.id === id), id)
  assert.equal(c[0].certainty, 'disputed')
  for (const e of c) assert.ok(e.sources.includes('basello2016'), e.id)
})

test('photos carry licences and every section ref resolves', () => {
  const ids = new Set(shilhakPhotos.map((p) => p.id))
  for (const p of shilhakPhotos) {
    assert.ok(p.page.startsWith('https://commons.wikimedia.org/wiki/File:') && p.src.startsWith('https://upload.wikimedia.org/'), p.id)
    if (p.license !== 'CC0' && p.license !== 'Public domain') assert.ok(p.licenseUrl, p.id)
  }
  for (const s of dossier) {
    for (const id of s.photos ?? []) assert.ok(ids.has(id), `${s.id} → ${id}`)
    for (const src of s.sources) assert.ok(shilhakSourceIds.has(src), `${s.id} → ${src}`)
    for (const q of s.quotes ?? []) assert.ok(shilhakSourceIds.has(q.source) && filled(q.ref) && q.lang === 'fr', s.id)
    for (const layer of [s.historical, s.interpretation, s.modern]) assert.ok(layer.fa.length === layer.en.length && layer.fa.every(filled), s.id)
  }
})

test('the dossier covers economy, religion, army, law and family, and flags its inferences', () => {
  const ids = dossier.map((s) => s.id)
  for (const id of ['campaigns', 'building', 'religion', 'law', 'economy', 'family']) assert.ok(ids.includes(id), id)
  assert.match(dossier.find((s) => s.id === 'family')?.interpretation.en.join(' ') ?? '', /disputed/)
  assert.match(dossier.find((s) => s.id === 'law')?.interpretation.en.join(' ') ?? '', /our reading/)
  assert.match(dossier.find((s) => s.id === 'campaigns')?.historical.en.join(' ') ?? '', /No account survives of how his army/)
})

test('his own titles are listed as epithets with Louvre sources', () => {
  const e = epithetsFor('shilhak-inshushinak')
  assert.ok(e.some((x) => x.fa === 'شاه انشان و شوش' && x.kind === 'title'))
  for (const x of e) assert.match(x.source.url ?? '', /collections\.louvre\.fr/)
})
