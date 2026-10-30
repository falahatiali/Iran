/* Generates public/sitemap.xml and public/robots.txt from the data modules. */
import fs from 'node:fs'
import path from 'node:path'
import { dynasties } from '../src/data/dynasties'
import { FEATURED_KING_SLUGS } from '../src/data/featured/slugs'
import { places } from '../src/data/places'
import { resolvePublicSiteUrl } from '../src/lib/siteUrl'

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
const paths = ['/', '/cylinder', '/en/cylinder', '/archives', '/en/archives', '/timeline', '/about', '/en/about', ...dynasties.map((d) => `/dynasty/${d.slug}`), ...dynasties.flatMap((d) => d.rulers.map((r) => `/king/${r.id}`)), ...FEATURED_KING_SLUGS.map((s) => `/en/king/${s}`), ...Object.keys(places).flatMap((s) => [`/place/${s}`, `/en/place/${s}`])]
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((p) => `  <url><loc>${host}${p}</loc></url>`).join('\n')}\n</urlset>\n`
const pub = path.resolve(import.meta.dirname, '../public')
fs.writeFileSync(path.join(pub, 'sitemap.xml'), xml)
fs.writeFileSync(path.join(pub, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${host}/sitemap.xml\n`)
console.log(`sitemap: ${paths.length} urls`)
