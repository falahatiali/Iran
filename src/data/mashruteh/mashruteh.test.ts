import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { test } from 'node:test'
import { documents, episodes, episodeUrl, facts, mashrutehSources, page, people, photos, PODCAST_LINKS, reading, sections, timeline } from '.'

const ids = new Set(mashrutehSources.map((s) => s.id))
const filled = (s: string | undefined) => typeof s === 'string' && s.trim().length > 0

test('every claim cites at least one source, and only sources in the bibliography', () => {
  const items = [...sections, ...timeline, ...people, ...documents]
  for (const m of items) assert.ok(m.sources.length > 0, m.id)
  assert.deepEqual(items.flatMap((m) => m.sources).filter((s) => !ids.has(s)), [])
  assert.equal(ids.size, mashrutehSources.length, 'source ids are unique')
  for (const s of mashrutehSources) assert.ok(s.url?.startsWith('https://'), s.id)
})

test('every photo ships as a local file and is listed in ATTRIBUTION.txt', () => {
  const attribution = readFileSync('public/media/ATTRIBUTION.txt', 'utf8')
  for (const p of photos) {
    assert.ok(existsSync(`public${p.src}`), p.src)
    assert.match(p.src, /^\/media\/mashruteh\/[\w-]+\.webp$/)
    assert.ok(p.page.startsWith('https://commons.wikimedia.org/wiki/File:'), p.id)
    assert.ok(attribution.includes(`- ${p.src.split('/').pop()!} ←`), p.id)
    assert.match(p.license, /^PD-/, p.id)
  }
})

test('photos referenced by sections and timeline exist, and both languages are filled', () => {
  const pids = new Set(photos.map((p) => p.id))
  for (const s of sections) {
    if (s.photo) assert.ok(pids.has(s.photo), s.photo)
    assert.ok(filled(s.title.fa) && filled(s.title.en) && filled(s.era.fa) && filled(s.era.en), s.id)
    assert.ok(s.body.fa.length === s.body.en.length && [...s.body.fa, ...s.body.en].every(filled), s.id)
    if (s.view) assert.ok(s.view.fa.length === s.view.en.length && s.view.fa.every(filled), s.id)
  }
  for (const m of timeline) {
    if (m.photo) assert.ok(pids.has(m.photo), m.photo)
    assert.ok(filled(m.title.fa) && filled(m.title.en) && filled(m.body.fa) && filled(m.body.en), m.id)
  }
  for (const p of [...people, ...documents]) assert.ok(filled(p.body.fa) && filled(p.body.en), p.id)
  assert.ok(page.lede.fa.length === page.lede.en.length)
  assert.ok(reading.fa.length === reading.en.length && reading.fa.every(filled))
  for (const [k, v] of facts) assert.ok(filled(k.fa) && filled(v.en), k.en)
  assert.equal(new Set(sections.map((s) => s.id)).size, sections.length)
})

test('podcast pointers resolve to real episodes with well-formed timestamps', () => {
  assert.equal(episodes.filter((e) => typeof e.n === 'number').length, 34)
  for (const e of episodes) assert.match(e.id, /^[\w-]{11}$/, String(e.n))
  for (const s of sections) for (const l of s.listen ?? []) {
    if (l.t) assert.match(l.t, /^\d\d:\d\d:\d\d$/, `${s.id} ep ${l.ep}`)
    assert.match(episodeUrl(l.ep, l.t), /^https:\/\/www\.youtube\.com\/watch\?v=[\w-]{11}(&t=\d+s)?$/)
  }
  assert.equal(episodeUrl(7, '01:44:04'), `https://www.youtube.com/watch?v=${episodes[6]!.id}&t=6244s`)
  const hosts = PODCAST_LINKS.map((l) => new URL(l.href).host)
  for (const h of ['shows.acast.com', 't.me', 'majera.xyz']) assert.ok(hosts.includes(h), h)
  // Khadem's own interpretation (ep 24) is flagged as his view
  assert.ok(episodes.find((e) => e.n === 24)?.view)
})

test('the rescript date and the quoted constitutional texts are as printed', () => {
  assert.match(facts[0]![1].fa, /۱۴ جمادی‌الثانی ۱۳۲۴/)
  assert.match(facts[0]![1].en, /5 August 1906/)
  const farman = sections.find((s) => s.id === 'farman')!
  assert.ok(farman.quotations?.lines.some((l) => l.includes('مجلس شورای ملی از منتخبینِ شاهزادگان')))
  const majles = sections.find((s) => s.id === 'majles')!
  assert.deepEqual(majles.quotations?.lines, ['مجلس شورای ملی نماینده قاطبهٔ اهالی مملکت ایران است که در امور معاشی و سیاسی وطن خود مشارکت دارند.'])
})

test('the page does not mention excluded authors', () => {
  const text = readFileSync('src/data/mashruteh/index.ts', 'utf8') + readFileSync('src/data/mashruteh/sources.ts', 'utf8') + readFileSync('src/data/mashruteh/episodes.ts', 'utf8')
  assert.doesNotMatch(text, /جنت|Jannat/i)
})
