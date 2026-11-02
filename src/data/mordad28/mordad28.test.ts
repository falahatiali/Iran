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
