/* Generates public/sitemap.xml (an index), one public/sitemap-<section>.xml per section, and public/robots.txt. */
import fs from 'node:fs'
import path from 'node:path'
import { resolvePublicSiteUrl } from '../src/lib/siteUrl'
import { publicPaths } from '../src/lib/publicPaths'
import { buildSitemaps } from '../src/lib/sitemap'

/** Local `.env` files (Vite loads these; `tsx` does not). Never invent a placeholder. */
function loadDotenv() {
  const root = path.resolve(import.meta.dirname, '..')
  for (const name of ['.env.local', '.env.production', '.env']) {
    const file = path.join(root, name)
    if (!fs.existsSync(file)) continue
    for (const raw of fs.readFileSync(file, 'utf8').split('\n')) {
      const line = raw.trim()
      if (!line || line.startsWith('#')) continue
      const m = line.match(/^(?:export\s+)?(VITE_SITE_URL|APP_DOMAIN)=(.*)$/)
      if (!m) continue
      const key = m[1]
      const val = m[2].replace(/^['"]|['"]$/g, '').trim()
      if (!process.env[key]) process.env[key] = val
    }
  }
}

loadDotenv()

const host = resolvePublicSiteUrl({
  envUrl: process.env.VITE_SITE_URL,
  appDomain: process.env.APP_DOMAIN,
  strict: true,
})
const paths = publicPaths()
const lastmod = JSON.parse(fs.readFileSync(path.resolve(import.meta.dirname, '../src/data/sitemap-lastmod.json'), 'utf8')) as Record<string, string>
const { files, counts } = buildSitemaps(host, paths, lastmod)
const pub = path.resolve(import.meta.dirname, '../public')
for (const old of fs.readdirSync(pub)) if (/^sitemap.*\.xml$/.test(old)) fs.rmSync(path.join(pub, old))
for (const [name, xml] of Object.entries(files)) fs.writeFileSync(path.join(pub, name), xml)
fs.writeFileSync(path.join(pub, 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /admin/\nSitemap: ${host}/sitemap.xml\n`)
console.log(`sitemap: ${paths.length} urls in ${Object.keys(files).length - 1} sitemaps`, counts)
