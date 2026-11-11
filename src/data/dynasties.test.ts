import { test } from 'node:test'
import assert from 'node:assert/strict'
import { dynasties } from './dynasties'
import { dynastySources, sources } from './sources'

test('ruler ids are unique across all dynasties', () => {
  const seen = new Map<string, string>()
  for (const d of dynasties) for (const r of d.rulers) {
    assert.ok(!seen.has(r.id), `${r.id} in ${d.slug} and ${seen.get(r.id)}`)
    seen.set(r.id, d.slug)
  }
})

test('dynasty events are listed in chronological order', () => {
  for (const d of dynasties) d.events.forEach((e, i) => {
    if (i) assert.ok(e.year >= d.events[i - 1].year, `${d.slug}: ${e.title} (${e.year}) after ${d.events[i - 1].year}`)
  })
})

test('every ruler reign ends after it starts', () => {
  for (const d of dynasties) for (const r of d.rulers) if (r.end !== null) assert.ok(r.end >= r.start, r.id)
})

test('every dynasty cites sources that exist', () => {
  const ids = new Set(sources.map((s) => s.id))
  assert.equal(ids.size, sources.length, 'duplicate source id')
  for (const d of dynasties) {
    const cited = dynastySources[d.slug]
    assert.ok(cited?.length, `${d.slug} has no sources`)
    for (const id of cited) assert.ok(ids.has(id), `${d.slug} cites unknown source ${id}`)
  }
})
