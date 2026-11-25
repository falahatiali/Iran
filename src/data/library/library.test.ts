import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { test } from 'node:test'
import { SHAHNAMEH_OPENING, photoById } from '../shahnameh'
import { publicPaths } from '../../lib/publicPaths'
import { SITE_PAGES } from '../../lib/sitePages'
import { BOOKS, LIBRARY_PATH, catalogue, isReady, librarySitemapPaths, readyBook, shelfBooks } from '.'
import { MANTIQ_PATH, mantiq } from './mantiq'
import { KHAYYAM_PAGES, KHAYYAM_PATH, SOURCES, khayyam } from './khayyam'
import { rubaiyat } from './khayyam/repository'
import { GHAZAL_COUNT, HAFEZ_PAGES, HAFEZ_PATH, MONTASAB_COUNT, SOURCES as HF_SOURCES, LETTER_SLUGS, ghazalPath, ghazalPaths, hafez, letterPaths, montasabPaths } from './hafez'
import type { Ghazal, GhazalEntry, GhazalIndex, MontasabEntry, Poem } from './hafez/types'
import { nowruzPaths } from './khayyam/paths'
import { ARABIC_PARAS, NOWRUZ_INTRO } from './khayyam/nowruz'
import { BOOKS as SD_BOOKS, SOURCES as SD_SOURCES, SAADI_BOOKS, about as saadiAbout, chapterCounts, saadiPaths } from './saadi'
import type { BookIndex, Section } from './saadi/types'
import {
  MANTIQ_GROUPS, MANTIQ_MEANINGS, MANTIQ_SECTIONS, MANTIQ_TOTAL_COUPLETS, hasNotes, legacySection, sectionOf, loadMantiqNotes, loadMantiqText, noteKey, sectionBySlug,
} from './mantiq/sections'

const root = path.resolve(import.meta.dirname, '../../..')
const routeFile = (href: string) => {
  const base = path.join(root, 'src/routes', href)
  return [`${base}.tsx`, path.join(base, 'index.tsx')].find((f) => fs.existsSync(f))
}
const publicFile = (p: string) => fs.existsSync(path.join(root, 'public', p))

test('book slugs are unique and each lives in its own file', () => {
  assert.equal(new Set(BOOKS.map((b) => b.slug)).size, BOOKS.length)
  for (const b of BOOKS) assert.ok(fs.existsSync(path.join(import.meta.dirname, 'books', `${b.slug}.ts`)), `books/${b.slug}.ts`)
})

test('every shelf position is taken once, and every book sits on a shelf', () => {
  for (const shelf of [1, 2] as const) {
    const orders = shelfBooks(shelf).map((b) => b.order)
    assert.equal(new Set(orders).size, orders.length, `duplicate order on shelf ${shelf}`)
  }
  assert.equal(shelfBooks(1).length + shelfBooks(2).length, BOOKS.length)
  assert.equal(catalogue().length, BOOKS.length)
  assert.ok(isReady(catalogue()[0]), 'ready books lead the catalogue')
})

test('every ready book opens into a real route, with its cover and headpiece on disk', () => {
  const ready = BOOKS.filter(isReady)
  assert.ok(ready.length >= 2)
  for (const b of ready) {
    assert.ok(routeFile(b.href), `${b.slug}: no route file for ${b.href}`)
    for (const ext of ['avif', 'webp']) assert.ok(publicFile(`${b.cover}.${ext}`), `${b.slug}: missing ${b.cover}.${ext}`)
    assert.ok(publicFile(b.headpiece.src), `${b.slug}: missing ${b.headpiece.src}`)
    for (const part of [...(b.headpiece.srcSet?.split(',') ?? []), ...(b.headpiece.avifSrcSet?.split(',') ?? [])]) assert.ok(publicFile(part.trim().split(' ')[0]), `${b.slug}: missing ${part}`)
    const src = fs.readFileSync(routeFile(b.href)!, 'utf8') + fs.readFileSync(path.join(root, 'src/components', ({ shahnameh: 'shahnameh/LandingPage.tsx', khayyam: 'library/khayyam/KhayyamPage.tsx', hafez: 'library/hafez/HafezPage.tsx', bustan: 'library/saadi/BookPage.tsx', golestan: 'library/saadi/BookPage.tsx' } as Record<string, string>)[b.slug] ?? 'library/MantiqPage.tsx'), 'utf8')
    assert.ok(src.includes(`data-book-arrival`), `${b.slug}: the page must mark its arrival element for the opening animation`)
  }
})

test('a soon book has no page and no link', () => {
  for (const b of BOOKS.filter((x) => !isReady(x))) assert.ok(!('href' in b))
})

test('the library hall, the Mantiq page and every Mantiq section are in the sitemap; the Shahnameh keeps its own URL', () => {
  const paths = new Set(publicPaths())
  assert.ok(paths.has(LIBRARY_PATH))
  assert.ok(paths.has(MANTIQ_PATH))
  assert.ok(paths.has('/shahnameh'))
  assert.deepEqual(librarySitemapPaths(), [LIBRARY_PATH, MANTIQ_PATH, HAFEZ_PATH, '/library/golestan', '/library/bustan', KHAYYAM_PATH, ...MANTIQ_SECTIONS.map((s) => `${MANTIQ_PATH}/${s.slug}`), ...KHAYYAM_PAGES.slice(1), ...HAFEZ_PAGES.slice(1), ...letterPaths(), ...ghazalPaths(), ...montasabPaths(), ...nowruzPaths(), ...saadiPaths()])
  for (const p of [...KHAYYAM_PAGES, ...HAFEZ_PAGES, ghazalPath(1), ghazalPath(GHAZAL_COUNT)]) assert.ok(paths.has(p), p)
  assert.equal(readyBook('shahnameh').href, '/shahnameh')
  assert.ok(SITE_PAGES.some((p) => p.fa.path === LIBRARY_PATH))
})

test('the Shahnameh book repeats the Shahnameh section exactly (verse and painting)', () => {
  const b = readyBook('shahnameh')
  assert.deepEqual([...b.incipit], [...SHAHNAMEH_OPENING])
  const hero = photoById['gayumars-court']
  assert.equal(b.headpiece.src, hero.src800)
  assert.ok(b.headpiece.srcSet?.includes(`${hero.src} ${hero.width}w`))
})

test('the Mantiq book and its page agree, and every verse on the page stands verbatim at its place in the text', async () => {
  const b = readyBook('mantiq-al-tayr')
  assert.equal(b.href, MANTIQ_PATH)
  assert.deepEqual([...b.incipit], [...mantiq.opening.lines])
  const verses = [mantiq.opening, mantiq.sevenValleys.intro, ...mantiq.story.map((s) => s.verse)]
  for (const v of verses) {
    const text = await loadMantiqText(v.section)
    const c = text?.parts.find((p) => p.id === v.part)?.couplets.find((x) => x.n === v.n)
    assert.deepEqual(c && [c.a, c.b], [...v.lines], `${v.section} ${v.part}:${v.n}`)
  }
  const list = mantiq.sevenValleys.listSource
  const listText = (await loadMantiqText(list.section))!.parts.find((p) => p.id === list.part)!.couplets
  const named = listText.filter((c) => c.n >= list.n && c.n < list.n + 4).map((c) => `${c.a} ${c.b}`).join(' ')
  for (const v of mantiq.sevenValleys.valleys) assert.ok(named.includes(v.line), `${v.line} is in the hoopoe's list`)
})

test('the hoopoe names seven valleys, in order, each linked to its own section', () => {
  const vs = mantiq.sevenValleys.valleys
  assert.deepEqual(vs.map((v) => v.n), [1, 2, 3, 4, 5, 6, 7])
  assert.deepEqual(vs.map((v) => v.slug), MANTIQ_SECTIONS.filter((s) => s.group === 'valleys').map((s) => s.slug))
  for (const v of vs) assert.ok(v.line.includes(v.name.split(' ')[0].replace(/ا$/, '')), `${v.name} is named in its line`)
  for (const bird of mantiq.birds) assert.ok(sectionBySlug(bird.slug), `${bird.name} links to a section`)
})

test('the whole of Mantiq al-Tayr is readable section by section, and every note sits on a real bayt', async () => {
  assert.equal(new Set(MANTIQ_SECTIONS.map((s) => s.slug)).size, MANTIQ_SECTIONS.length)
  let total = 0
  for (const s of MANTIQ_SECTIONS) {
    assert.ok(MANTIQ_GROUPS.some((g) => g.id === s.group), s.slug)
    const text = await loadMantiqText(s.slug)
    assert.ok(text, `${s.slug} has text`)
    assert.deepEqual(text.parts.map((p) => p.id), s.parts.map((p) => p.id))
    const n = text.parts.reduce((sum, p) => sum + p.couplets.length, 0)
    assert.equal(n, s.coupletCount, s.slug)
    for (const p of text.parts) {
      p.couplets.forEach((c, i) => {
        assert.equal(c.n, p.from + i, `${s.slug} ${p.id} numbering`)
        assert.ok(c.a.trim() && c.b.trim(), `${s.slug} ${p.id}:${c.n} has both hemistichs`)
      })
    }
    total += n
    const notes = await loadMantiqNotes(s.slug)
    const keys = new Set(text.parts.flatMap((p) => p.couplets.map((c) => noteKey(p.id, c.n))))
    for (const [k, note] of Object.entries(notes.notes)) {
      assert.ok(keys.has(k), `${s.slug} note ${k} is on a bayt`)
      assert.ok(note.meaning.trim().length > 0, `${s.slug} ${k} has a meaning`)
    }
    if (notes.status === 'complete') assert.equal(Object.keys(notes.notes).length, keys.size, `${s.slug} is fully annotated`)
    assert.equal(hasNotes(s.slug), notes.status !== 'none')
  }
  assert.equal(total, MANTIQ_TOTAL_COUPLETS)
  assert.ok(total > 4600)
  assert.equal(await loadMantiqText('no-such-section'), undefined)
})

test('Mantiq al-Tayr runs in Ganjoor order with nothing skipped or repeated, and every bayt has its meaning', async () => {
  // pieces of one Ganjoor poem follow each other, poem ids rise through the book, and each poem is read from 1 to its end
  let last = { id: 0, to: 0, of: 0 }
  let meanings = 0
  for (const s of MANTIQ_SECTIONS) {
    const text = (await loadMantiqText(s.slug))!
    for (const p of text.parts) {
      if (p.id === last.id) assert.equal(p.from, last.to + 1, `${s.slug} ${p.id} continues`)
      else {
        assert.ok(p.id > last.id, `${s.slug} ${p.id} comes after ${last.id}`)
        assert.equal(last.to, last.of, `poem ${last.id} is read to its end`)
        assert.equal(p.from, 1, `${s.slug} ${p.id} starts at its first bayt`)
      }
      for (const c of p.couplets) {
        assert.ok(c.m && c.m.text.trim() && !/^هوش\s*مصنوعی/.test(c.m.text), `${s.slug} ${p.id}:${c.n} has a clean meaning`)
        meanings++
      }
      last = { id: p.id, to: p.to, of: p.of }
    }
  }
  assert.equal(last.to, last.of)
  assert.equal(meanings, MANTIQ_TOTAL_COUPLETS)
  assert.equal(MANTIQ_MEANINGS.ai + MANTIQ_MEANINGS.human + MANTIQ_MEANINGS.fixed, MANTIQ_TOTAL_COUPLETS)
  // the birds' twenty-two questions each have a page, opening on the question itself
  const qs = MANTIQ_SECTIONS.filter((s) => s.group === 'questions')
  assert.equal(qs.length, 22)
  for (const q of qs) assert.match(q.first[0], /^(سایلی|دیگری) (گفتش|گفت|پرسید)/, q.slug)
  // the old even split of the excuses still lands somewhere sensible
  assert.equal(legacySection('ozr-1')?.slug, 'q-1')
  assert.equal(legacySection('ozr-10')?.group, 'questions')
  assert.equal(legacySection('ozr-11'), undefined)
  assert.equal(sectionOf(12002, 13)?.slug, 'q-22')
})

test('every library image is credited in ATTRIBUTION.txt as original artwork', () => {
  const attribution = fs.readFileSync(path.join(root, 'public/media/ATTRIBUTION.txt'), 'utf8')
  const section = attribution.slice(attribution.indexOf('## library'))
  assert.match(section, /original artwork generated for this site/)
  for (const f of fs.readdirSync(path.join(root, 'public/media/library'))) {
    const stem = f.replace(/(-\d+)?\.(avif|webp|jpg)$/, '')
    assert.ok(section.includes(`library/${stem}`) || section.includes(stem), `${f} is not credited`)
  }
})

test('the Khayyam book opens on Hedayat\'s quatrain, word for word, and the edition is whole', async () => {
  const b = readyBook('khayyam')
  assert.equal(b.href, KHAYYAM_PATH)
  const h = await rubaiyat.hedayat()
  const opening = h.quatrains.find((q) => q.n === khayyam.openingN)!
  assert.deepEqual([...b.incipit], opening.lines.slice(0, 2))
  assert.equal(h.quatrains.length, 143)
  assert.deepEqual(h.quatrains.map((q) => q.n), Array.from({ length: 143 }, (_, i) => i + 1))
  assert.equal(h.themes.length, 8)
  for (const t of h.themes) assert.equal(h.quatrains.filter((q) => q.theme === t.id).length, t.count, t.title)
  const fg = await rubaiyat.foroughi()
  assert.equal(fg.quatrains.length, 178)
  for (const q of [...h.quatrains, ...fg.quatrains]) {
    assert.equal(q.lines.length, 4)
    for (const l of q.lines) assert.ok(l.trim() && !l.startsWith('*'), `${q.ganjoor}: clean line`)
  }
  for (const q of h.quatrains) if (q.fg) assert.ok(fg.quatrains.some((x) => x.n === q.fg))
  assert.ok(h.quatrains.some((q) => q.doubtful) && h.quatrains.some((q) => !q.doubtful))
})

test('every Khayyam note sits on a real quatrain, and every sentence of prose cites a listed source', async () => {
  const [h, notes] = await Promise.all([rubaiyat.hedayat(), rubaiyat.notes()])
  for (const [k, n] of Object.entries(notes.notes)) {
    assert.ok(h.quatrains.some((q) => String(q.n) === k), `note ${k}`)
    assert.ok(n.meaning.trim().length > 20, `note ${k} has a meaning`)
  }
  if (notes.status === 'complete') assert.equal(Object.keys(notes.notes).length, h.quatrains.length)
  const ids = new Set(SOURCES.map((s) => s.id))
  for (const p of [...khayyam.intro, ...khayyam.about.flatMap((s) => s.paras)]) {
    assert.ok(p.cite.length > 0, p.text.slice(0, 30))
    for (const c of p.cite) assert.ok(ids.has(c), c)
  }
})

const hafezText = (f: string) => JSON.parse(fs.readFileSync(path.join(root, 'src/data/library/hafez/text', f), 'utf8'))

test('the Hafez book opens on the Divan\'s first bayt, and all 495 ghazals have text and a meaning per bayt', () => {
  const b = readyBook('hafez')
  assert.equal(b.href, HAFEZ_PATH)
  const index: GhazalIndex = hafezText('index.json')
  assert.deepEqual(index.ghazals.map((g) => g.n), Array.from({ length: GHAZAL_COUNT }, (_, i) => i + 1))
  for (const e of index.ghazals) {
    const g: Ghazal = hafezText(`ghazals/${e.n}.json`)
    assert.equal(g.n, e.n)
    assert.equal(g.bayts.length, e.count)
    assert.deepEqual([...g.bayts[0].l], [...e.first])
    for (const [i, x] of g.bayts.entries()) {
      assert.equal(x.l.length, 2, `${e.n}:${i + 1}`)
      for (const l of x.l) assert.ok(l.trim(), `${e.n}:${i + 1} empty hemistich`)
      if (x.m) assert.ok(x.m.text.length > 3 && !x.m.text.startsWith('هوش مصنوعی'), `${e.n}:${i + 1} meaning`)
    }
    if (g.summary) assert.ok(!g.summary.text.startsWith('هوش مصنوعی'))
  }
  const first: Ghazal = hafezText('ghazals/1.json')
  assert.deepEqual([...b.incipit], [...first.bayts[0].l])
  const meta = hafezText('meta.json')
  assert.match(meta.commit, /^[0-9a-f]{40}$/)
  const credit = fs.readFileSync(path.join(root, 'public/media/ATTRIBUTION.txt'), 'utf8')
  assert.ok(credit.includes(meta.commit), 'ATTRIBUTION.txt names the ganjoor-data commit the Hafez text was taken from')
})

test('every sentence of Hafez prose cites a listed source', () => {
  const ids = new Set(HF_SOURCES.map((s) => s.id))
  for (const p of [...hafez.intro, ...hafez.about.flatMap((s) => s.paras)]) {
    assert.ok(p.cite.length > 0, p.text.slice(0, 30))
    for (const c of p.cite) assert.ok(ids.has(c), c)
  }
})

const saadiText = (f: string) => JSON.parse(fs.readFileSync(path.join(root, 'src/data/library/saadi/text', f), 'utf8'))

test('Saadi: both books are whole, in Ganjoor\'s order, with text in every block and the landing incipits taken from the data', () => {
  const meta = saadiText('meta.json')
  assert.match(meta.commit, /^[0-9a-f]{40}$/)
  assert.ok(fs.readFileSync(path.join(root, 'public/media/ATTRIBUTION.txt'), 'utf8').includes(`Saadi's Bustan and Golestan`))
  const expect = { bustan: { chapters: 11, sections: 230 }, golestan: { chapters: 9, sections: 291 } }
  for (const book of SAADI_BOOKS) {
    const index: BookIndex = saadiText(`${book}/index.json`)
    assert.equal(index.chapters.length, expect[book].chapters)
    assert.deepEqual(index.chapters.map((c) => [c.slug, c.sections.length, c.title]), chapterCounts(book).map((c) => [...c]))
    let sections = 0
    for (const c of index.chapters) {
      assert.deepEqual(c.sections.map((s) => s.n), Array.from({ length: c.sections.length }, (_, i) => i + 1))
      for (const e of c.sections) {
        sections++
        const s: Section = saadiText(`${book}/${c.slug}-${e.n}.json`)
        assert.equal(s.blocks.length, e.count, `${book}/${c.slug}/${e.n}`)
        assert.ok(s.ganjoor.startsWith(`/saadi/`))
        for (const [i, b] of s.blocks.entries()) {
          if ('l' in b) for (const l of b.l) assert.ok(l.trim(), `${book}/${c.slug}/${e.n}:${i + 1} empty hemistich`)
          else assert.ok(b.p.trim(), `${book}/${c.slug}/${e.n}:${i + 1} empty paragraph`)
          if (b.m) assert.ok(b.m.text.trim().length > 1 && !b.m.text.startsWith('هوش مصنوعی'), `${book}/${c.slug}/${e.n}:${i + 1} meaning`)
        }
      }
    }
    assert.equal(sections, expect[book].sections)
    assert.equal(meta.books[book].sections, sections)
  }
  const b0 = (saadiText('bustan/niyayesh-1.json') as Section).blocks[0]
  assert.deepEqual([...readyBook('bustan').incipit], 'l' in b0 ? [...b0.l] : [])
  const dibache: Section = saadiText('golestan/dibache-1.json')
  assert.ok(dibache.blocks.some((b) => 'l' in b && b.l[0] === readyBook('golestan').incipit[0] && b.l[1] === readyBook('golestan').incipit[1]))
  assert.equal(saadiPaths().length, 1 + 20 + 230 + 291)
  assert.equal(SD_BOOKS.golestan.opening.starts, 'به چه کار آیدت')
})

test('every sentence of Saadi prose cites a listed source', () => {
  const ids = new Set(SD_SOURCES.map((s) => s.id))
  for (const p of [...SD_BOOKS.bustan.intro, ...SD_BOOKS.golestan.intro, ...saadiAbout.flatMap((s) => s.paras)]) {
    assert.ok(p.cite.length > 0, p.text.slice(0, 30))
    for (const c of p.cite) assert.ok(ids.has(c), c)
  }
})

test('Hafez\'s other forms: two masnavis, three qasidas, the preface and 118 attributed poems, each block with text', () => {
  const sets: Record<string, number> = { 'masnavi.json': 2, 'qasaid.json': 3, 'moqaddame.json': 1 }
  const check = (where: string, p: Poem) => {
    assert.ok(p.bayts.length > 0, where)
    for (const [i, b] of p.bayts.entries()) {
      if ('p' in b) assert.ok(b.p.trim(), `${where}:${i + 1}`)
      else for (const l of b.l) assert.ok(l.trim(), `${where}:${i + 1}`)
      if (b.m) assert.ok(b.m.text.trim().length > 1 && !b.m.text.startsWith('هوش مصنوعی'), `${where}:${i + 1} meaning`)
    }
  }
  for (const [f, n] of Object.entries(sets)) {
    const poems: Poem[] = hafezText(f)
    assert.equal(poems.length, n, f)
    for (const p of poems) check(f, p)
  }
  const index: MontasabEntry[] = hafezText('montasab/index.json')
  assert.deepEqual(index.map((e) => e.n), Array.from({ length: MONTASAB_COUNT }, (_, i) => i + 1))
  for (const e of index) {
    const p: Poem = hafezText(`montasab/${e.n}.json`)
    assert.equal(p.bayts.length, e.count)
    check(`montasab/${e.n}`, p)
  }
})

test('the Nowruz-nama: 42 sections in Ganjoor\'s order, each block with text and a labelled meaning', () => {
  const dir = path.join(root, 'src/data/library/khayyam/text/nowruz')
  const index = JSON.parse(fs.readFileSync(path.join(dir, 'index.json'), 'utf8'))
  assert.equal(index.sections.length, 42)
  assert.deepEqual(nowruzPaths().length, 42)
  for (const e of index.sections) {
    const s = JSON.parse(fs.readFileSync(path.join(dir, `${e.n}.json`), 'utf8'))
    assert.equal(s.n, e.n)
    assert.equal(s.blocks.length, e.count)
    for (const b of s.blocks) {
      assert.ok(('p' in b ? b.p : b.l.join('')).trim())
      if (b.m) assert.ok(b.m.text.trim().length > 1 && !b.m.text.startsWith('هوش مصنوعی'))
    }
  }
  const ids = new Set(SOURCES.map((s) => s.id))
  for (const p of [...NOWRUZ_INTRO, ...ARABIC_PARAS]) {
    assert.ok(p.cite.length > 0)
    for (const c of p.cite) assert.ok(ids.has(c), c)
  }
})

test('the ghazal index is split by letter: every ghazal on exactly one letter page, slugs as in paths.ts', () => {
  const letters: { slug: string; letter: string; count: number; first: number }[] = hafezText('letters.json')
  assert.deepEqual(letters.map((l) => l.slug), [...LETTER_SLUGS])
  const seen: number[] = []
  for (const l of letters) {
    const es: GhazalEntry[] = hafezText(`letters/${l.slug}.json`)
    assert.equal(es.length, l.count)
    assert.equal(es[0].n, l.first)
    for (const e of es) assert.equal(e.letter, l.letter)
    seen.push(...es.map((e) => e.n))
  }
  assert.deepEqual(seen.sort((a, b) => a - b), Array.from({ length: GHAZAL_COUNT }, (_, i) => i + 1))
  const g393: Ghazal = hafezText('ghazals/393.json')
  assert.ok(g393.bayts[4].m?.fixed && !g393.bayts[4].m.text.includes('شومیعنی'))
})

test('«شرح این سایت»: every point cites a source, every ghazal exists, and the Wikipedia revision is pinned', async () => {
  const { readdirSync, readFileSync } = await import('node:fs')
  const dir = new URL('./hafez/sharh/', import.meta.url)
  const index: { n: number; first: string[]; points: number }[] = JSON.parse(readFileSync(new URL('index.json', dir), 'utf8'))
  const files = readdirSync(dir).filter((f) => f !== 'index.json')
  assert.equal(files.length, index.length)
  assert.ok(index.length >= 15)
  for (const e of index) {
    const s = JSON.parse(readFileSync(new URL(`${e.n}.json`, dir), 'utf8'))
    const g: Ghazal = hafezText(`ghazals/${e.n}.json`)
    assert.equal(s.n, e.n)
    assert.equal(e.first[0], g.bayts[0].l[0])
    assert.equal(s.points.length, e.points)
    assert.ok(Number.isInteger(s.wiki.oldid) && s.wiki.oldid > 0)
    assert.ok(s.books.length > 0)
    for (const p of s.points) assert.ok(p.h && p.t && p.refs.length > 0, `ghazal ${e.n}: «${p.h}» needs a source`)
  }
})
