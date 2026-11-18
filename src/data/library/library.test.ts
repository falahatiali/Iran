import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { test } from 'node:test'
import { SHAHNAMEH_OPENING, photoById } from '../shahnameh'
import { publicPaths } from '../../lib/publicPaths'
import { SITE_PAGES } from '../../lib/sitePages'
import { BOOKS, LIBRARY_PATH, catalogue, isReady, librarySitemapPaths, readyBook, shelfBooks } from '.'
import { MANTIQ_PATH, mantiq } from './mantiq'
import {
  MANTIQ_GROUPS, MANTIQ_SECTIONS, MANTIQ_TOTAL_COUPLETS, hasNotes, loadMantiqNotes, loadMantiqText, noteKey, sectionBySlug,
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
    const src = fs.readFileSync(routeFile(b.href)!, 'utf8') + fs.readFileSync(path.join(root, 'src/components', b.slug === 'shahnameh' ? 'shahnameh/LandingPage.tsx' : 'library/MantiqPage.tsx'), 'utf8')
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
  assert.deepEqual(librarySitemapPaths(), [LIBRARY_PATH, MANTIQ_PATH, ...MANTIQ_SECTIONS.map((s) => `${MANTIQ_PATH}/${s.slug}`)])
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
        assert.equal(c.n, i + 1, `${s.slug} ${p.id} numbering`)
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

test('every library image is credited in ATTRIBUTION.txt as original artwork', () => {
  const attribution = fs.readFileSync(path.join(root, 'public/media/ATTRIBUTION.txt'), 'utf8')
  const section = attribution.slice(attribution.indexOf('## library'))
  assert.match(section, /original artwork generated for this site/)
  for (const f of fs.readdirSync(path.join(root, 'public/media/library'))) {
    const stem = f.replace(/(-\d+)?\.(avif|webp|jpg)$/, '')
    assert.ok(section.includes(`library/${stem}`) || section.includes(stem), `${f} is not credited`)
  }
})
