import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { test } from 'node:test'
import { facts, jashnSources, page, photos, reading, sections, timeline } from '.'

const ids = new Set(jashnSources.map((s) => s.id))
const filled = (s: string | undefined) => typeof s === 'string' && s.trim().length > 0

test('every claim cites at least one source, and only sources in the bibliography', () => {
  const items = [...sections, ...timeline]
  for (const m of items) assert.ok(m.sources.length > 0, 'id' in m ? m.id : '')
  assert.deepEqual(items.flatMap((m) => m.sources).filter((s) => !ids.has(s)), [])
})

test('every photo ships as a local file and is listed in ATTRIBUTION.txt', () => {
  const attribution = readFileSync('public/media/ATTRIBUTION.txt', 'utf8')
  for (const p of photos) {
    assert.ok(existsSync(`public${p.src}`), p.src)
    assert.match(p.src, /^\/media\/jashn2500\/[\w-]+\.webp$/)
    assert.ok(p.page.startsWith('https://commons.wikimedia.org/wiki/File:'), p.id)
    assert.ok(attribution.includes(p.src.split('/').pop()!), p.id)
  }
})

test('section photos exist in the photo list, and both languages are filled', () => {
  const pids = new Set(photos.map((p) => p.id))
  for (const s of sections) {
    if (s.photo) assert.ok(pids.has(s.photo), s.photo)
    assert.ok(filled(s.title.fa) && filled(s.title.en), s.id)
    assert.ok(s.body.fa.length === s.body.en.length && s.body.fa.every(filled), s.id)
    if (s.view) assert.ok(s.view.fa.length === s.view.en.length && s.view.fa.every(filled), s.id)
  }
  for (const m of timeline) {
    if (m.photo) assert.ok(pids.has(m.photo), m.photo)
    assert.ok(filled(m.title.fa) && filled(m.body.en), m.id)
  }
  assert.ok(page.lede.fa.length === page.lede.en.length)
  assert.ok(reading.fa.length === reading.en.length && reading.fa.every(filled))
  for (const [k, v] of facts) assert.ok(filled(k.fa) && filled(v.en), k.en)
})

test('never names the excluded commentator', () => {
  assert.doesNotMatch(JSON.stringify({ page, sections, timeline, reading, jashnSources }), /جنت|Jannat/i)
})

test('speech wording follows the New York Times and the schools are phrased as planned', () => {
  const pasargadae = sections.find((s) => s.id === 'pasargadae')!
  const quoted = pasargadae.quotations?.lines.join(' ') ?? ''
  assert.match(quoted, /O Cyrus, great King, King of Kings, Achaemenian King, King of the land of Iran/)
  assert.match(quoted, /I, the Shahanshah of Iran, offer thee salutations from myself and from my nation/)
  assert.match(quoted, /we are awake, and we will always stay awake/)
  assert.match(pasargadae.body.fa.join(' '), /نیویورک‌تایمز/)
  assert.match(pasargadae.body.fa.join(' '), /ای کوروش، شاه بزرگ/)
  const legacy = sections.find((s) => s.id === 'legacy')!
  assert.match(legacy.body.en.join(' '), /planned to construct 2,500 commemorative schools/)
  assert.match(legacy.body.fa.join(' '), /در برنامه بود/)
  const tehran = sections.find((s) => s.id === 'tehran')!
  assert.match(tehran.body.en.join(' '), /16 October/)
  assert.doesNotMatch(tehran.body.en.join(' '), /17 October/)
  assert.match(reading.fa.join(' '), /شهیاد هنوز در تهران ایستاده است/)
  assert.match(reading.en.join(' '), /Shahyad still stands in Tehran/)
})
