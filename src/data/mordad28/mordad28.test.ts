import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { test } from 'node:test'
import { cast, days, documents, mordadSources, myths, photos, views } from '.'

const ids = new Set(mordadSources.map((s) => s.id))
const items = [...days.flatMap((d) => d.moments), ...cast, ...myths, ...views, ...documents]

test('every claim cites at least one source, and only sources in the bibliography', () => {
  for (const m of items) assert.ok(m.sources.length > 0)
  assert.deepEqual(items.flatMap((m) => m.sources).filter((s) => !ids.has(s)), [])
})

test('every photo ships as a local file', () => {
  for (const p of photos) assert.ok(existsSync(`public${p.src}`), p.src)
})

test('cast and timeline photos exist in the photo list', () => {
  const pids = new Set(photos.map((p) => p.id))
  for (const id of [...cast.map((c) => c.photo), ...days.flatMap((d) => d.moments.map((m) => m.photo)), ...documents.map((d) => d.photo)]) if (id) assert.ok(pids.has(id), id)
})

test('never names the excluded commentator', () => {
  assert.doesNotMatch(JSON.stringify({ days, cast, myths, views, documents, mordadSources }), /جنت|Jannat/i)
})

test('ported dossier keeps five chapters, both languages, and leaves the withheld name out', async () => {
  const { dossierChapters, dossierIndex, essay, withheld } = await import('./dossier')
  assert.deepEqual(dossierChapters.map((c) => c.n), [1, 2, 3, 4, 5])
  assert.doesNotMatch(JSON.stringify({ dossierChapters, dossierIndex, essay }), /جنت|Jannat/i)
  for (const c of dossierChapters) for (const b of c.blocks) {
    const parts = b.t === 'ul' ? b.items : b.t === 'quote' ? [b.text, b.cite] : [b.text]
    for (const x of parts) assert.ok(x.fa.trim() && x.en.trim(), `${c.n}`)
  }
  assert.equal(dossierIndex.rows.length, 6)
  assert.equal(dossierIndex.timeline.length, 5)
  assert.ok(withheld.some((w) => w.includes('chapter 6')))
})
