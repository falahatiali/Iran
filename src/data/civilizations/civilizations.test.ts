import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { test } from 'node:test'
import { CATALOG } from './catalog'
import { PHOTOS } from './photos'
import { civilizations, staticRepository } from './repository'
import { civSources } from './sources'
import type { Civilization } from './types'

const ids = new Set(civSources.map((s) => s.id))
const pages = async () => (await Promise.all(civilizations.list().map((c) => civilizations.get(c.slug)))) as Civilization[]

test('every listed civilization loads, and matches its catalog entry', async () => {
  const list = civilizations.list()
  assert.ok(list.length >= 6)
  for (const [i, civ] of (await pages()).entries()) {
    assert.ok(civ, list[i].slug)
    assert.equal(civ.slug, list[i].slug)
    assert.equal(civ.name, list[i].name)
  }
  assert.equal(await civilizations.get('atlantis'), undefined)
  assert.equal(civilizations.has('atlantis'), false)
})

test('the repository lists only pages it can load, oldest first', () => {
  const repo = staticRepository(CATALOG, { susa: async () => ({ civ: {} as Civilization }), sialk: async () => ({ civ: {} as Civilization }) })
  assert.deepEqual(repo.list().map((c) => c.slug), ['sialk', 'susa'])
  const starts = civilizations.list().map((c) => c.span[0])
  assert.deepEqual(starts, [...starts].sort((a, b) => a - b))
})

test('catalog entries are well formed', () => {
  assert.equal(new Set(CATALOG.map((c) => c.slug)).size, CATALOG.length)
  for (const c of CATALOG) {
    assert.match(c.slug, /^[a-z]+(-[a-z]+)*$/)
    assert.ok(c.span[0] < c.span[1], c.slug)
    const [lon, lat] = c.coord
    assert.ok(lon > 43 && lon < 64 && lat > 24.5 && lat < 40.5, `${c.slug} is off the map`)
  }
})

test('every claim cites at least one source, and only sources in the bibliography', async () => {
  for (const civ of await pages()) {
    for (const m of [...civ.sections, ...civ.timeline]) {
      assert.ok(m.sources.length > 0, `${civ.slug}: ${'id' in m ? m.id : m.when}`)
      for (const s of m.sources) assert.ok(ids.has(s), `${civ.slug}: unknown source ${s}`)
    }
  }
  assert.equal(ids.size, civSources.length, 'duplicate source id')
  for (const s of civSources) assert.match(s.url, /^https:\/\//, s.id)
})

test('SEO descriptions are 70–160 characters, and related pages exist', async () => {
  const slugs = new Set(CATALOG.map((c) => c.slug))
  for (const civ of await pages()) {
    assert.ok(civ.description.length >= 70 && civ.description.length <= 160, `${civ.slug}: ${civ.description.length}`)
    for (const r of civ.related) assert.ok(slugs.has(r) && r !== civ.slug, `${civ.slug} → ${r}`)
    assert.equal(new Set(civ.sections.map((s) => s.id)).size, civ.sections.length, civ.slug)
    if (civ.wikidata) assert.match(civ.wikidata, /^Q\d+$/)
  }
})

test('every photo ships as a local file and is listed in ATTRIBUTION.txt', async () => {
  const attribution = readFileSync('public/media/ATTRIBUTION.txt', 'utf8')
  for (const civ of await pages()) {
    assert.deepEqual(civ.photos, PHOTOS[civ.slug] ?? [], civ.slug)
    const pids = new Set(civ.photos.map((p) => p.id))
    for (const s of civ.sections) if (s.photo) assert.ok(pids.has(s.photo), `${civ.slug}: ${s.photo}`)
    for (const p of civ.photos) {
      assert.match(p.src, new RegExp(`^/media/civ/${civ.slug}/[\\w-]+\\.webp$`))
      assert.ok(existsSync(`public${p.src}`), p.src)
      assert.ok(attribution.includes(p.src.replace('/media/', '')), p.src)
      assert.ok(/^(CC|Public domain)/.test(p.license), `${p.src}: ${p.license}`)
      assert.ok(/^https:\/\/(commons\.wikimedia\.org\/wiki\/File:|www\.metmuseum\.org\/art\/collection\/search\/)/.test(p.page), p.page)
    }
  }
})

test('videos are YouTube ids, each listed once', async () => {
  const seen = new Set<string>()
  for (const civ of await pages()) {
    for (const v of civ.videos) {
      assert.match(v.id, /^[\w-]{11}$/, `${civ.slug}: ${v.id}`)
      assert.ok(!seen.has(v.id), `${v.id} twice`)
      seen.add(v.id)
      assert.ok(v.title.trim() && v.channel.trim(), v.id)
    }
  }
})
