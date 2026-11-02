import assert from 'node:assert/strict'
import { test } from 'node:test'
import { burning, hotspots, sitePhotos, siteSourceIds, videos } from './site'

test('persepolis cards cite known sources, photos are licensed, videos are unique', () => {
  for (const h of hotspots) for (const s of h.sources) assert.ok(siteSourceIds.has(s), `${h.id} → ${s}`)
  for (const v of burning.versions) for (const s of v.sources) assert.ok(siteSourceIds.has(s), s)
  for (const q of [burning.arrian, burning.plutarch, burning.mules]) assert.ok(siteSourceIds.has(q.source))
  for (const p of sitePhotos) assert.ok(p.file.startsWith('https://commons.wikimedia.org/wiki/File:') && (p.license === 'Public domain' || p.licenseUrl), p.key)
  assert.equal(new Set(videos.map((v) => v.id)).size, videos.length)
  assert.ok(videos.length >= 8 && videos.length <= 15)
  for (const v of videos) assert.match(v.id, /^[\w-]{11}$/)
})
