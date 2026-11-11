import assert from 'node:assert/strict'
import { test } from 'node:test'
import { DEFAULT_OG_IMAGE, SITE_URL, clampDescription, seo, websiteJsonLd } from './seo'
import { dynasties } from '../data/dynasties'
import { places } from '../data/places'
import { featuredKings } from '../data/featured'
import fs from 'node:fs'
import path from 'node:path'

const meta = (h: ReturnType<typeof seo>, key: string) =>
  h.meta.find((m) => ('name' in m && m.name === key) || ('property' in m && m.property === key))
const content = (h: ReturnType<typeof seo>, key: string) => {
  const m = meta(h, key)
  return m && 'content' in m ? m.content : undefined
}

test('clampDescription keeps short text and cuts long text at a boundary', () => {
  assert.equal(clampDescription('  کوتاه   است. '), 'کوتاه است.')
  const long = 'این جمله‌ای نسبتاً بلند است که برای آزمودن کوتاه‌سازی نوشته شده و چند واژهٔ دیگر هم دارد. '.repeat(4)
  const c = clampDescription(long)
  assert.ok(c.length <= 160, `${c.length}`)
  assert.ok(c.endsWith('.') || c.endsWith('…'))
  assert.ok(long.startsWith(c.replace(/…$/, '')))
  const dated = 'نبرد حران در سال ۵۳ پ.م. روی داد و ' + 'سپاه پارتی پیروز شد '.repeat(10)
  assert.ok(!clampDescription(dated).endsWith('پ.م.'), 'cut at a date abbreviation')
  const words = 'واژه '.repeat(60)
  const w = clampDescription(words)
  assert.ok(w.endsWith('واژه…'), w)
})

test('seo() always emits a title, a clamped description, a canonical URL and a share image', () => {
  const h = seo({ title: 'آزمون', description: 'متن '.repeat(100), path: '/kings' })
  assert.equal(content(h, 'og:title'), 'آزمون | تاریخ ایران')
  assert.ok((content(h, 'description') ?? '').length <= 160)
  assert.equal(content(h, 'og:image'), SITE_URL + DEFAULT_OG_IMAGE)
  assert.equal(h.links[0].href, SITE_URL + '/kings')
})

test('the default share image and every page share image exist in public/', () => {
  const pub = path.resolve(import.meta.dirname, '../../public')
  assert.ok(fs.existsSync(path.join(pub, DEFAULT_OG_IMAGE)))
  for (const k of Object.values(featuredKings)) if (k.shareImage) assert.ok(fs.existsSync(path.join(pub, k.shareImage)), k.shareImage)
  const routes = path.resolve(import.meta.dirname, '../routes')
  const walk = (d: string): string[] => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]))
  for (const f of walk(routes)) for (const m of fs.readFileSync(f, 'utf8').matchAll(/image: '(\/media\/[^']+)'/g)) assert.ok(fs.existsSync(path.join(pub, m[1])), `${f}: ${m[1]}`)
})

test('every dynasty, ruler and place has a non-empty description for its page', () => {
  for (const d of dynasties) {
    assert.ok(d.summary.trim().length > 20, `dynasty ${d.slug}`)
    for (const r of d.rulers) assert.ok(r.description.trim().length > 0, `ruler ${r.id}`)
  }
  for (const p of Object.values(places)) for (const l of ['fa', 'en'] as const) assert.ok(p.lede[l].trim().length > 20, `place ${p.slug} ${l}`)
})

test('the home page WebSite JSON-LD points its search at the timeline', () => {
  const ld = JSON.parse(websiteJsonLd().children)
  assert.equal(ld['@type'], 'WebSite')
  assert.equal(ld.url, SITE_URL)
  assert.equal(ld.potentialAction.target.urlTemplate, `${SITE_URL}/timeline?q={search_term_string}`)
})
