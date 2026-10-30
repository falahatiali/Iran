import assert from 'node:assert/strict'
import { test } from 'node:test'
import { dynasties } from '../dynasties'
import { featuredKings } from './index'
import { FEATURED_KING_SLUGS } from './slugs'

test('featured slug list matches the registry and every slug is a real ruler', () => {
  assert.deepEqual([...FEATURED_KING_SLUGS].sort(), Object.keys(featuredKings).sort())
  const rulers = new Map(dynasties.flatMap((d) => d.rulers.map((r) => [r.id, r])))
  for (const [slug, k] of Object.entries(featuredKings)) {
    assert.equal(k.slug, slug)
    const r = rulers.get(slug)
    assert.ok(r, slug)
    for (const e of k.events) assert.ok(e.year >= k.span[0] && e.year <= k.span[1], `${slug}/${e.id}`)
    const ids = new Set(k.sources.map((s) => s.id))
    for (const e of k.events) for (const s of e.sources) assert.ok(ids.has(s), `${slug}/${e.id}/${s}`)
    for (const d of k.dossier) for (const s of d.sources) assert.ok(ids.has(s), `${slug}/${d.id}/${s}`)
  }
})
