/** The sitemap index and its per-section sitemaps (sitemaps.org 0.9). Each URL's <lastmod> is its section's
 * last content change, from src/data/sitemap-lastmod.json (written by `npm run sitemap:dates` from git history;
 * the Docker build has no .git, so the dates are committed). */

export const SECTIONS = ['pages', 'history', 'shahnameh', 'library-hafez', 'library-saadi', 'library-khayyam', 'library-mantiq', 'civilizations'] as const
export type Section = (typeof SECTIONS)[number]

/** The git paths whose history dates each section. */
export const SECTION_SOURCES: Record<Section, readonly string[]> = {
  pages: ['src/routes', 'src/components', ':(exclude)src/routes/library', ':(exclude)src/components/library', ':(exclude)src/routes/civilizations', ':(exclude)src/components/civilizations'],
  history: ['src/data', 'src/routes/dynasty', 'src/routes/king', ':(exclude)src/data/library', ':(exclude)src/data/shahnameh', ':(exclude)src/data/sitemap-lastmod.json', ':(exclude)src/data/civilizations'],
  shahnameh: ['src/data/shahnameh', 'src/routes/shahnameh', 'src/components/shahnameh'],
  'library-hafez': ['src/data/library/hafez', 'src/routes/library/hafez', 'src/components/library/hafez'],
  'library-saadi': ['src/data/library/saadi', 'src/routes/library/bustan', 'src/routes/library/golestan', 'src/routes/library/saadi.tsx', 'src/components/library/saadi'],
  'library-khayyam': ['src/data/library/khayyam', 'src/routes/library/khayyam', 'src/components/library/khayyam'],
  'library-mantiq': ['src/data/library/mantiq', 'src/routes/library/mantiq-al-tayr', 'src/components/library/MantiqSectionPage.tsx', 'src/components/library/mantiq'],
  civilizations: ['src/data/civilizations', 'src/routes/civilizations', 'src/components/civilizations', 'public/media/civ'],
}

export function sectionOf(path: string): Section {
  const p = path.replace(/^\/en(?=\/)/, '')
  if (p.startsWith('/library/hafez')) return 'library-hafez'
  if (/^\/library\/(bustan|golestan|saadi)(\/|$)/.test(p)) return 'library-saadi'
  if (p.startsWith('/library/khayyam')) return 'library-khayyam'
  if (p.startsWith('/library/mantiq-al-tayr')) return 'library-mantiq'
  if (p.startsWith('/shahnameh')) return 'shahnameh'
  if (p.startsWith('/civilizations')) return 'civilizations'
  if (/^\/(dynasty|king|place|event|province|dey1404)(\/|$)/.test(p)) return 'history'
  return 'pages'
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;')

export function buildSitemaps(host: string, paths: readonly string[], lastmod: Partial<Record<Section, string>>) {
  const by = new Map<Section, string[]>()
  for (const p of paths) {
    const s = sectionOf(p)
    by.set(s, [...(by.get(s) ?? []), p])
  }
  const files: Record<string, string> = {}
  const index: string[] = []
  for (const s of SECTIONS) {
    const ps = by.get(s)
    if (!ps?.length) continue
    const mod = lastmod[s] ? `<lastmod>${lastmod[s]}</lastmod>` : ''
    const name = `sitemap-${s}.xml`
    files[name] = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${ps.map((p) => `  <url><loc>${esc(host + p)}</loc>${mod}</url>`).join('\n')}\n</urlset>\n`
    index.push(`  <sitemap><loc>${host}/${name}</loc>${mod}</sitemap>`)
  }
  files['sitemap.xml'] = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${index.join('\n')}\n</sitemapindex>\n`
  return { files, counts: Object.fromEntries([...by].map(([s, ps]) => [s, ps.length])) as Record<Section, number> }
}
