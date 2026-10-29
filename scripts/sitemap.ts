/* Generates public/sitemap.xml and public/robots.txt from the data modules. */
import fs from 'node:fs'
import path from 'node:path'
import { dynasties } from '../src/data/dynasties'

const host = (process.env.VITE_SITE_URL ?? 'https://iran-history.example').replace(/\/$/, '')
const paths = ['/', '/cylinder', '/en/cylinder', '/archives', '/en/archives', '/timeline', '/about', ...dynasties.map((d) => `/dynasty/${d.slug}`), ...dynasties.flatMap((d) => d.rulers.map((r) => `/king/${r.id}`))]
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((p) => `  <url><loc>${host}${p}</loc></url>`).join('\n')}\n</urlset>\n`
const pub = path.resolve(import.meta.dirname, '../public')
fs.writeFileSync(path.join(pub, 'sitemap.xml'), xml)
fs.writeFileSync(path.join(pub, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${host}/sitemap.xml\n`)
console.log(`sitemap: ${paths.length} urls`)
