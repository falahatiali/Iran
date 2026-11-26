import assert from 'node:assert/strict'
import { test } from 'node:test'
import { libraryHead } from '../components/library/head'
import { publicPaths } from './publicPaths'
import { SITE_URL, seo } from './seo'
import { SECTIONS, buildSitemaps, sectionOf } from './sitemap'
import { AUTHORS } from './structuredData'
import { relatedGhazals } from '../data/library/hafez/related'
import themes from '../data/library/hafez/text/themes.json'
import type { ThemeMap } from '../data/library/hafez/types'
import { saadiSectionTitle } from '../data/library/seoText'
import lastmod from '../data/sitemap-lastmod.json'

const graph = (h: { scripts: { children: string }[] }) => JSON.parse(h.scripts[0].children)['@graph'] as Record<string, unknown>[]

test('a ghazal page carries breadcrumbs and a CreativeWork inside the Divan, by Hafez', () => {
  const s = seo({ title: 'غزل ۱ حافظ: الا یا', description: 'd', path: '/library/hafez/ghazal/1' })
  const h = libraryHead(s, { crumbs: [{ name: 'غزلیات', path: '/library/hafez/ghazals' }], leaf: 'غزل ۱', work: { name: 'غزل ۱', genre: 'غزل' } })
  const [crumbs, work] = graph(h)
  const items = crumbs.itemListElement as { name: string; item: string; position: number }[]
  assert.deepEqual(items.map((i) => i.name), ['تاریخ ایران', 'کتابخانه', 'دیوان حافظ', 'غزلیات', 'غزل ۱'])
  assert.equal(items.at(-1)!.item, `${SITE_URL}/library/hafez/ghazal/1`)
  assert.equal(work['@type'], 'CreativeWork')
  assert.equal((work.author as { name: string }).name, AUTHORS.hafez.name)
  assert.equal((work.isPartOf as { name: string }).name, 'دیوان حافظ')
  assert.ok(h.links.some((l) => l.rel === 'canonical'))
})

test('a book landing is a Book; a disputed attribution claims no author', () => {
  const b = graph(libraryHead(seo({ title: 'گلستان', description: 'd', path: '/library/golestan' })))
  assert.equal(b[1]['@type'], 'Book')
  assert.match(String(b[1].sameAs), /wikidata\.org\/wiki\/Q404191$/)
  const m = graph(libraryHead(seo({ title: 'منتسب', description: 'd', path: '/library/hafez/montasab/1' }), { work: { name: 'x', author: null } }))
  assert.equal(m[1].author, undefined)
})

test('every library sitemap path lands in one section sitemap, and the index lists them with lastmod', () => {
  const paths = publicPaths()
  const { files, counts } = buildSitemaps('https://iiraan.com', paths, lastmod)
  assert.equal(Object.values(counts).reduce((a, b) => a + b, 0), paths.length)
  for (const s of SECTIONS) assert.ok(lastmod[s as keyof typeof lastmod], `no lastmod for ${s}`)
  assert.match(files['sitemap.xml'], /<sitemapindex/)
  assert.equal(sectionOf('/library/golestan/bab1/3'), 'library-saadi')
  assert.equal(sectionOf('/en/king/cyrus'), 'history')
  const hafez = files['sitemap-library-hafez.xml']
  assert.ok(hafez.includes('<loc>https://iiraan.com/library/hafez/ghazal/495</loc>'))
})

test('related ghazals share the theme map and never include the ghazal itself', () => {
  const r = relatedGhazals(themes as unknown as ThemeMap, 1)
  assert.equal(r.items.length, 4)
  assert.ok(r.items.every((i) => i.n !== 1 && i.score > 0))
})

test('generic Saadi section titles become unique with their opening words', () => {
  assert.equal(saadiSectionTitle('بوستان سعدی', 'حکایت', 'باب دوم در احسان', { l: ['یکی در بیابان سگی تشنه یافت', 'x'] }), 'یکی در بیابان سگی تشنه یافت · حکایت، باب دوم بوستان سعدی')
})
