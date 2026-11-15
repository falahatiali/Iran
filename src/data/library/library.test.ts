import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { test } from 'node:test'
import { SHAHNAMEH_OPENING, photoById } from '../shahnameh'
import { publicPaths } from '../../lib/publicPaths'
import { SITE_PAGES } from '../../lib/sitePages'
import { BOOKS, LIBRARY_PATH, catalogue, isReady, librarySitemapPaths, readyBook, shelfBooks } from '.'
import { MANTIQ_PATH, mantiq } from './mantiq'

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

test('the library hall and the Mantiq page are in the sitemap; the Shahnameh keeps its own URL', () => {
  const paths = new Set(publicPaths())
  assert.ok(paths.has(LIBRARY_PATH))
  assert.ok(paths.has(MANTIQ_PATH))
  assert.ok(paths.has('/shahnameh'))
  assert.deepEqual(librarySitemapPaths(), [LIBRARY_PATH, MANTIQ_PATH])
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

test('the Mantiq book and its page agree, and every verse cites its Ganjoor page', () => {
  const b = readyBook('mantiq-al-tayr')
  assert.equal(b.href, MANTIQ_PATH)
  assert.deepEqual([...b.incipit], [...mantiq.opening.lines])
  const verses = [mantiq.opening, mantiq.sevenValleys.intro, ...mantiq.story.map((s) => s.verse)]
  for (const v of verses) {
    assert.match(v.url, /^https:\/\/ganjoor\.net\/attar\/manteghotteyr\/[a-z0-9-]+\/sh\d+$/)
    assert.equal(v.lines.length, 2)
    assert.ok(v.where.length > 0)
  }
})

test('the hoopoe names seven valleys, in order, each linked to its Ganjoor section', () => {
  const vs = mantiq.sevenValleys.valleys
  assert.deepEqual(vs.map((v) => v.n), [1, 2, 3, 4, 5, 6, 7])
  for (const v of vs) {
    assert.match(v.url, /^https:\/\/ganjoor\.net\/attar\/manteghotteyr\/va/)
    assert.ok(v.line.includes(v.name.split(' ')[0].replace(/ا$/, '')), `${v.name} is named in its line`)
  }
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
