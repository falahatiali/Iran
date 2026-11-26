/** schema.org JSON-LD for the library: breadcrumbs, books and the poems and stories inside them.
 * Every sameAs below was checked against Wikidata's sitelinks (wbgetentities) before it was written here. */
import { SITE_NAME, SITE_URL } from './seo'

export interface Crumb { name: string; path: string }

export type AuthorKey = 'hafez' | 'saadi' | 'khayyam' | 'attar'

const wiki = (fa: string, en: string, q: string) => [`https://fa.wikipedia.org/wiki/${encodeURIComponent(fa)}`, `https://en.wikipedia.org/wiki/${en}`, `https://www.wikidata.org/wiki/${q}`]

export const AUTHORS: Record<AuthorKey, { name: string; alternateName: string; sameAs: readonly string[] }> = {
  hafez: { name: 'حافظ', alternateName: 'Hafez', sameAs: wiki('حافظ', 'Hafez', 'Q6240') },
  saadi: { name: 'سعدی', alternateName: 'Saadi Shirazi', sameAs: wiki('سعدی', 'Saadi_Shirazi', 'Q170302') },
  khayyam: { name: 'عمر خیام', alternateName: 'Omar Khayyam', sameAs: wiki('خیام', 'Omar_Khayyam', 'Q35900') },
  attar: { name: 'عطار نیشابوری', alternateName: 'Attar of Nishapur', sameAs: wiki('عطار', 'Attar_of_Nishapur', 'Q194091') },
}

/** Each ready book's author and Wikidata item. The Khayyam shelf has no sameAs: the Wikidata item for
 * «رباعیات خیام» is FitzGerald's translation, not the Persian quatrains this shelf holds. */
export const BOOK_LD: Record<string, { author: AuthorKey; sameAs?: string }> = {
  hafez: { author: 'hafez', sameAs: 'https://www.wikidata.org/wiki/Q5939273' },
  golestan: { author: 'saadi', sameAs: 'https://www.wikidata.org/wiki/Q404191' },
  bustan: { author: 'saadi', sameAs: 'https://www.wikidata.org/wiki/Q446972' },
  'mantiq-al-tayr': { author: 'attar', sameAs: 'https://www.wikidata.org/wiki/Q2271966' },
  khayyam: { author: 'khayyam' },
}

const abs = (path: string) => SITE_URL + path
export const person = (k: AuthorKey) => ({ '@type': 'Person', ...AUTHORS[k], sameAs: [...AUTHORS[k].sameAs] })

export function breadcrumbList(crumbs: readonly Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: abs(c.path) })),
  }
}

export interface WorkLd {
  name: string
  path: string
  description?: string
  /** null: the attribution is disputed, so no author is claimed */
  author?: AuthorKey | null
  genre?: string
  /** the book this piece belongs to */
  partOf?: { name: string; path: string; sameAs?: string }
  position?: number
  sameAs?: string
}

export function creativeWork(w: WorkLd, type: 'CreativeWork' | 'Book' = 'CreativeWork') {
  return {
    '@type': type,
    name: w.name,
    url: abs(w.path),
    inLanguage: 'fa',
    ...(w.description ? { description: w.description } : {}),
    ...(w.genre ? { genre: w.genre } : {}),
    ...(w.author ? { author: person(w.author) } : {}),
    ...(w.position ? { position: w.position } : {}),
    ...(w.sameAs ? { sameAs: w.sameAs } : {}),
    ...(w.partOf ? { isPartOf: { '@type': 'Book', name: w.partOf.name, url: abs(w.partOf.path), ...(w.partOf.sameAs ? { sameAs: w.partOf.sameAs } : {}) } } : {}),
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  }
}

/** One <script type="application/ld+json"> with every node of the page in a @graph. */
export function ldScript(nodes: readonly object[]) {
  return { type: 'application/ld+json', children: JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes }) }
}
