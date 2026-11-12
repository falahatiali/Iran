import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { test } from 'node:test'
import { PAGE_PAIRS, SITE_PAGES, STATIC_PATHS, pageAlternates } from './sitePages'
import { PRIVATE_PATHS, REDIRECT_PATHS, publicPaths } from './publicPaths'
import { siblingLocalePath } from './i18n'

const root = path.resolve(import.meta.dirname, '../..')
const routesDir = path.join(root, 'src/routes')

function walk(dir: string, ext: RegExp): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name)
    return e.isDirectory() ? walk(p, ext) : ext.test(e.name) ? [p] : []
  })
}

/** '/king/$slug' style route path for each route file */
const routeFiles = walk(routesDir, /\.tsx$/)
  .filter((f) => !f.endsWith('__root.tsx'))
  .map((f) => {
    const rel = path.relative(routesDir, f).replace(/\.tsx$/, '').replace(/(^|\/)index$/, '')
    return { file: f, route: '/' + rel }
  })

const paths = new Set(publicPaths())

test('site page keys and paths are unique', () => {
  assert.equal(new Set(SITE_PAGES.map((p) => p.key)).size, SITE_PAGES.length)
  assert.equal(new Set(STATIC_PATHS).size, STATIC_PATHS.length)
})

test('every route file is reachable from the sitemap (or is a legacy redirect)', () => {
  for (const { route } of routeFiles) {
    if (route.includes('$')) {
      const prefix = route.slice(0, route.indexOf('$'))
      assert.ok([...paths].some((p) => p.startsWith(prefix) && p.length > prefix.length), `no sitemap path for ${route}`)
    } else {
      assert.ok(paths.has(route) || REDIRECT_PATHS.includes(route) || PRIVATE_PATHS.includes(route), `route ${route} is missing from SITE_PAGES / the sitemap`)
    }
  }
})

test('every fixed sitemap path has a route file', () => {
  const statics = new Set(routeFiles.map((r) => r.route))
  for (const p of STATIC_PATHS) assert.ok(statics.has(p), `${p} has no route file`)
})

test('every non-redirect route declares head metadata', () => {
  for (const { file, route } of routeFiles) {
    const src = fs.readFileSync(file, 'utf8')
    if (/throw redirect\(/.test(src) && !/head:/.test(src)) continue
    assert.match(src, /head:/, `${route} has no head() (title and description)`)
  }
})

test('the language switch maps each mirrored page to its twin and back', () => {
  for (const [fa, en] of PAGE_PAIRS) {
    assert.equal(siblingLocalePath(fa), en)
    assert.equal(siblingLocalePath(en), fa)
    assert.deepEqual(pageAlternates(SITE_PAGES.find((p) => p.fa.path === fa)!.key).map((a) => a.path), [fa, en, fa])
  }
})

test('the Carrhae battle pages are in the sitemap', () => {
  assert.ok(paths.has('/battle/carrhae'))
  assert.ok(paths.has('/en/battle/carrhae'))
})

/** Internal links written as string literals anywhere in src (components, routes and data prose). */
const LINK = /(?<![\w.:/-])\/(?:en\/)?(?:king|dynasty|place|event|battle|shahnameh|cylinder|archives|timeline|kings|about|property|darius)(?:\/[a-z0-9-]+)?(?=[#?'"`)\s\]]|$)/g

test('no broken internal links in source or data', () => {
  const valid = new Set([...paths, ...REDIRECT_PATHS])
  const broken: string[] = []
  for (const f of walk(path.join(root, 'src'), /\.(tsx?|json|md)$/)) {
    if (f.endsWith('routeTree.gen.ts') || /\.test\.tsx?$/.test(f)) continue
    const text = fs.readFileSync(f, 'utf8')
    for (const m of text.matchAll(LINK)) if (!valid.has(m[0])) broken.push(`${path.relative(root, f)}: ${m[0]}`)
  }
  assert.deepEqual([...new Set(broken)], [])
})
