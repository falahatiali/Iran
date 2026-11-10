import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { test } from 'node:test'
import {
  SHAHNAMEH_OPENING,
  catalog,
  comingSoon,
  getCommentary,
  getEntry,
  getStory,
  neighbors,
  noteKey,
  photos,
  POEM_SLUGS,
  readyStories,
  shahnamehSitemapPaths,
  shahnamehSources,
  storyPhoto,
} from './index'
import type { StoryPoemText } from './poems/types'

const filled = (s: string | undefined) => typeof s === 'string' && s.trim().length > 0

test('nineteen stories are ready, in order from Keyumars to Anushirvan', () => {
  assert.equal(readyStories.length, 19)
  assert.deepEqual(readyStories.map((s) => s.slug), [
    'keyumars', 'hushang', 'tahmuras', 'jamshid', 'zahhak', 'fereydun', 'iraj',
    'manuchehr', 'zal', 'rostam-birth', 'haft-khan', 'sohrab', 'siyavash',
    'kay-khosrow', 'bizhan-manizheh', 'rostam-esfandiar', 'rostam-shaghad', 'bahram-gur', 'anushirvan',
  ])
  const orders = catalog.map((e) => e.order)
  assert.deepEqual(orders, [...orders].sort((a, b) => a - b))
  assert.equal(new Set(catalog.map((e) => e.slug)).size, catalog.length)
})

test('every ready story has a child-friendly retelling, labelled commentary, characters and a prompt', () => {
  for (const s of readyStories) {
    assert.ok(s.sections.length >= 2, s.slug)
    assert.ok(s.sections.every((sec) => filled(sec.title) && sec.paragraphs.every(filled)), s.slug)
    assert.ok(s.ourView.length >= 2 && s.ourView.every(filled), s.slug)
    assert.match(s.ourView.join('\n'), /نگاه ما|این برداشت ماست|برداشت ماست/)
    assert.ok(s.characters.length >= 2, s.slug)
    assert.ok(s.interactive.options.length >= 2, s.slug)
    assert.ok(s.verses.length >= 2, s.slug)
    assert.ok(filled(s.lede) && filled(s.summary) && filled(s.summaryEn), s.slug)
  }
})

test('verses are exact couplets cited to Ganjoor', () => {
  for (const s of readyStories) {
    for (const v of s.verses) {
      assert.equal(v.lines.length, 2, `${s.slug}:${v.n}`)
      assert.ok(filled(v.lines[0]) && filled(v.lines[1]), `${s.slug}:${v.n}`)
      assert.match(v.poemUrl, /^https:\/\/ganjoor\.net\/ferdousi\/shahname\//)
      assert.ok(v.n > 0)
      assert.ok(filled(v.meaning) && filled(v.poemTitle))
    }
  }
  const jamshid = getStory('jamshid')!
  assert.ok(jamshid.verses.some((v) => v.lines[0] === 'به جمشید بر گوهر افشاندند' && v.lines[1] === 'مر آن روز را روز نو خواندند'))
  const kaveh = getStory('fereydun')!
  assert.ok(kaveh.verses.some((v) => v.lines[1] === 'که شاها منم کاوهٔ دادخواه'))
  const sohrab = getStory('sohrab')!
  assert.ok(sohrab.verses.some((v) => v.lines[0] === 'اگر تندبادی براید ز کنج'))
  const kay = getStory('kay-khosrow')!
  assert.ok(kay.verses.some((v) => v.lines[1] === 'ز چشم مهان شاه شد ناپدید'))
  const bizhan = getStory('bizhan-manizheh')!
  assert.ok(bizhan.verses.some((v) => v.lines[0] === 'شبی چون شبه روی شسته به قیر'))
  const esf = getStory('rostam-esfandiar')!
  assert.ok(esf.verses.some((v) => v.lines[0] === 'بزد تیر بر چشم اسفندیار'))
  const shaghad = getStory('rostam-shaghad')!
  assert.ok(shaghad.verses.some((v) => v.lines[0] === 'درخت و برادر بهم بر بدوخت'))
  const bahram = getStory('bahram-gur')!
  assert.ok(bahram.verses.some((v) => v.lines[0] === 'نخواهم خراج از جهان هفت سال'))
  const kasra = getStory('anushirvan')!
  assert.ok(kasra.verses.some((v) => v.lines[0] === 'اگر پادشا را بود پیشه داد'))
})

test('the landing opening couplet matches Ganjoor’s first line', () => {
  assert.deepEqual(SHAHNAMEH_OPENING, ['به نام خداوندِ جان و خرد', 'کز این برتر، اندیشه، بر نگذرد'])
})

test('every photo file exists, is WebP, and is listed in ATTRIBUTION.txt', () => {
  const attribution = readFileSync('public/media/ATTRIBUTION.txt', 'utf8')
  for (const p of photos) {
    assert.ok(existsSync(`public${p.src}`), p.src)
    assert.ok(existsSync(`public${p.src800}`), p.src800)
    assert.match(p.src, /^\/media\/shahnameh\/[\w-]+\.webp$/)
    assert.ok(p.page.startsWith('https://commons.wikimedia.org/wiki/File:'), p.id)
    assert.ok(attribution.includes(p.src.split('/').pop()!), p.id)
    assert.ok(filled(p.alt) && filled(p.license) && filled(p.manuscript), p.id)
  }
})

test('each ready story has a local hero painting', () => {
  for (const s of readyStories) {
    const photo = storyPhoto(s)
    assert.ok(photo, s.slug)
    assert.equal(photo!.id, s.heroId)
  }
})

test('previous and next walk the catalog, and unknown slugs are missing', () => {
  assert.equal(getEntry('no-such-story'), undefined)
  const first = neighbors('keyumars')
  assert.equal(first.prev, undefined)
  assert.equal(first.next?.slug, 'hushang')
  const lastReady = neighbors('siyavash')
  assert.equal(lastReady.prev?.slug, 'sohrab')
  assert.equal(lastReady.next?.slug, 'kay-khosrow')
  assert.equal(neighbors('anushirvan').next, undefined)
  assert.ok(comingSoon.every((s) => s.status === 'soon'))
})

test('sitemap lists the landing pages and every ready story', () => {
  const paths = shahnamehSitemapPaths()
  assert.ok(paths.includes('/shahnameh'))
  assert.ok(paths.includes('/en/shahnameh'))
  for (const s of readyStories) assert.ok(paths.includes(`/shahnameh/${s.slug}`), s.slug)
  assert.ok(paths.includes('/shahnameh/kay-khosrow'))
  assert.ok(paths.includes('/shahnameh/anushirvan'))
})

test('stories only cite sources that exist in the bibliography', () => {
  const ids = new Set(shahnamehSources.map((s) => s.id))
  for (const s of readyStories) {
    assert.ok(s.sources.length > 0, s.slug)
    assert.deepEqual(s.sources.filter((id) => !ids.has(id)), [])
  }
})

test('never names the excluded commentator', () => {
  assert.doesNotMatch(JSON.stringify({ catalog, readyStories, shahnamehSources, poems: POEM_SLUGS.map(readPoem) }), /جنت|Jannat/i)
})


const strip = (s: string) => s.replace(/[\u200c\u200d]/g, '').replace(/\s+/g, ' ').trim()

function readPoem(slug: string): StoryPoemText {
  return JSON.parse(readFileSync(new URL(`./poems/${slug}.json`, import.meta.url), 'utf8')) as StoryPoemText
}

test('every ready story has a fetched Ganjoor poem with complete couplets', () => {
  assert.deepEqual([...POEM_SLUGS], readyStories.map((s) => s.slug))
  for (const slug of POEM_SLUGS) {
    const poem = readPoem(slug)
    assert.equal(poem.slug, slug)
    assert.equal(poem.source, 'https://api.ganjoor.net')
    assert.match(poem.edition, /مسکو/)
    assert.ok(poem.poems.length >= 1, slug)
    assert.equal(poem.coupletCount, poem.poems.reduce((n, p) => n + p.couplets.length, 0), slug)
    for (const section of poem.poems) {
      assert.match(section.url, /^https:\/\/ganjoor\.net\/ferdousi\/shahname\//)
      assert.match(section.apiUrl, /^https:\/\/api\.ganjoor\.net\/api\/ganjoor\/poem\/\d+$/)
      assert.ok(section.ganjoorId > 0, section.url)
      assert.equal(section.couplets.length, section.coupletCount, section.url)
      section.couplets.forEach((c, i) => {
        assert.equal(c.n, i + 1, `${section.url}:${c.n}`)
        assert.ok(strip(c.a).length > 0 && strip(c.b).length > 0, `${section.url}:${c.n}`)
      })
    }
  }
})

test('quoted highlight verses appear in the fetched full poem', () => {
  for (const story of readyStories) {
    const poem = readPoem(story.slug)
    const hay = poem.poems.flatMap((p) => p.couplets.map((c) => `${strip(c.a)}|${strip(c.b)}`))
    for (const v of story.verses) {
      const needle = `${strip(v.lines[0])}|${strip(v.lines[1])}`
      assert.ok(hay.includes(needle), `${story.slug} missing «${v.lines[0]}»`)
    }
  }
})

test('complete commentaries explain every couplet and in-progress ones stay labelled', () => {
  for (const slug of POEM_SLUGS) {
    const poem = readPoem(slug)
    const commentary = getCommentary(slug)
    if (commentary.status === 'complete') {
      for (const section of poem.poems) {
        for (const c of section.couplets) {
          const note = commentary.notes[noteKey(section.ganjoorId, c.n)]
          assert.ok(note && strip(note.meaning).length > 12, `${slug} ${section.ganjoorId}:${c.n}`)
        }
      }
    } else {
      assert.equal(commentary.status, 'in-progress', slug)
    }
  }
})
