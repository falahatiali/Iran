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
    if (k.campaign) {
      const c = k.campaign
      for (const e of c.events) {
        assert.ok(e.year >= c.span[0] && e.year <= c.span[1], `${slug}/campaign/${e.id}`)
        for (const s of e.sources) assert.ok(ids.has(s), `${slug}/campaign/${e.id}/${s}`)
      }
      for (const b of c.battles ?? []) for (const p of b.phases) for (const s of p.sources) assert.ok(ids.has(s), `${slug}/${b.id}/${p.id}/${s}`)
    }
  }
})

test('every campaign map window is a real box that contains its event markers', () => {
  for (const [slug, k] of Object.entries(featuredKings)) {
    if (!k.campaign) continue
    const [lon0, lat0, lon1, lat1] = k.campaign.view
    assert.ok(lon0 < lon1 && lat0 < lat1, `${slug}: view must be [lonMin, latMin, lonMax, latMax]`)
    for (const e of k.campaign.events) {
      const [lon, lat] = e.coord
      assert.ok(lon >= lon0 && lon <= lon1 && lat >= lat0 && lat <= lat1, `${slug}/${e.id} marker outside view`)
    }
  }
})
