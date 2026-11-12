/* Generates public/sitemap.xml and public/robots.txt from the data modules. */
import fs from 'node:fs'
import path from 'node:path'
import { resolvePublicSiteUrl } from '../src/lib/siteUrl'
import { publicPaths } from '../src/lib/publicPaths'

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
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((p) => `  <url><loc>${host}${p}</loc></url>`).join('\n')}\n</urlset>\n`
const pub = path.resolve(import.meta.dirname, '../public')
fs.writeFileSync(path.join(pub, 'sitemap.xml'), xml)
fs.writeFileSync(path.join(pub, 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /admin/\nSitemap: ${host}/sitemap.xml\n`)
console.log(`sitemap: ${paths.length} urls`)
