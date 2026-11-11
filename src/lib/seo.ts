import { resolvePublicSiteUrl } from './siteUrl'
import { pageAlternates } from './sitePages'

const viteEnv = (import.meta.env ?? {}) as { VITE_SITE_URL?: string; MODE?: string }

export const SITE_URL = resolvePublicSiteUrl({
  viteUrl: viteEnv.VITE_SITE_URL,
  envUrl: typeof process !== 'undefined' ? process.env.VITE_SITE_URL : undefined,
  appDomain: typeof process !== 'undefined' ? process.env.APP_DOMAIN : undefined,
  mode: viteEnv.MODE ?? (typeof process !== 'undefined' ? process.env.NODE_ENV : undefined),
})
export const SITE_NAME = 'تاریخ ایران'

/** Share image for pages that have none of their own: the Cyrus Cylinder (Daderot, CC0; see public/media/ATTRIBUTION.txt). */
export const DEFAULT_OG_IMAGE = '/media/cyrus-cylinder-daderot-cc0.jpg'

/** Search engines show about 160 characters of a description; longer ones are cut mid-word.
 * Shorten at a sentence end when one falls late enough, otherwise at a word boundary with an ellipsis. */
export function clampDescription(text: string, max = 160): string {
  const t = text.replace(/\s+/g, ' ').trim()
  if (t.length <= max) return t
  const head = t.slice(0, max)
  let sentence = -1
  for (const m of head.matchAll(/[.!?؟](?= )/g)) {
    // a dot that closes a date abbreviation (پ.م. / ه.ق. / م.) is not a sentence end
    if (m[0] === '.' && /(^|[\s(])(پ\.م|ق\.م|ه\.ق|ه\.ش|[مقش]|BCE?|CE|AD|c|ca)$/.test(head.slice(0, m.index))) continue
    sentence = m.index
  }
  if (sentence >= max * 0.5) return head.slice(0, sentence + 1)
  const space = head.lastIndexOf(' ')
  const cut = head.slice(0, space > max * 0.5 ? space : max - 1).replace(/[\s،؛,;:(–—-]+$/, '')
  return cut + '…'
}

export function seo({
  title,
  description,
  path = '/',
  locale = 'fa_IR',
  alternates,
  noindex = false,
  image,
}: {
  title: string
  description: string
  path?: string
  locale?: string
  alternates?: { hrefLang: string; path: string }[]
  noindex?: boolean
  /** site-relative or absolute og:image; pages without one share DEFAULT_OG_IMAGE */
  image?: string
}) {
  const src = image ?? DEFAULT_OG_IMAGE
  const img = src.startsWith('http') ? src : SITE_URL + src
  const full = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`
  description = clampDescription(description)
  return {
    meta: [
      { title: full },
      { name: 'description', content: description },
      { property: 'og:title', content: full },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: locale },
      { property: 'og:url', content: SITE_URL + path },
      { property: 'og:site_name', content: SITE_NAME },
      { name: 'twitter:card', content: 'summary_large_image' },
      { property: 'og:image', content: img },
      { name: 'twitter:image', content: img },
      ...(noindex ? [{ name: 'robots', content: 'noindex, follow' }] : []),
    ],
    links: [
      { rel: 'canonical', href: SITE_URL + path },
      ...(alternates ?? []).map((a) => ({ rel: 'alternate', hrefLang: a.hrefLang, href: SITE_URL + a.path })),
    ],
  }
}

export const CYLINDER_ALTERNATES = pageAlternates('cylinder')

export const ARCHIVES_ALTERNATES = pageAlternates('archives')

/** fa/en/x-default alternates for a king that has an English mirror (featured kings). */
export function kingAlternates(slug: string) {
  return [
    { hrefLang: 'fa', path: `/king/${slug}` },
    { hrefLang: 'en', path: `/en/king/${slug}` },
    { hrefLang: 'x-default', path: `/king/${slug}` },
  ]
}

/** schema.org JSON-LD (Article about Person) for a king page. */
export function kingJsonLd(opts: { locale: 'fa' | 'en'; slug: string; headline: string; name: string; sameAs?: string }) {
  const path = opts.locale === 'fa' ? `/king/${opts.slug}` : `/en/king/${opts.slug}`
  return {
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      inLanguage: opts.locale,
      headline: opts.headline,
      url: SITE_URL + path,
      publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
      about: { '@type': 'Person', name: opts.name, ...(opts.sameAs ? { sameAs: opts.sameAs } : {}) },
    }),
  }
}

export const ABOUT_ALTERNATES = pageAlternates('about')

export const PROPERTY_ALTERNATES = pageAlternates('property')

export const placeAlternates = (slug: string) => [
  { hrefLang: 'fa', path: `/place/${slug}` },
  { hrefLang: 'en', path: `/en/place/${slug}` },
  { hrefLang: 'x-default', path: `/place/${slug}` },
]

export function placeJsonLd(opts: { locale: 'fa' | 'en'; slug: string; name: string; description: string; lat: number; lon: number; sameAs?: string }) {
  const path = opts.locale === 'fa' ? `/place/${opts.slug}` : `/en/place/${opts.slug}`
  return {
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LandmarksOrHistoricalBuildings',
      inLanguage: opts.locale,
      name: opts.name,
      description: opts.description,
      url: SITE_URL + path,
      geo: { '@type': 'GeoCoordinates', latitude: opts.lat, longitude: opts.lon },
      ...(opts.sameAs ? { sameAs: opts.sameAs } : {}),
    }),
  }
}

export const CARRHAE_ALTERNATES = pageAlternates('carrhae')

export const MORDAD_ALTERNATES = pageAlternates('mordad28')

export const JASHN2500_ALTERNATES = pageAlternates('jashn2500')

export const SHAHNAMEH_ALTERNATES = pageAlternates('shahnameh')

/** schema.org WebSite for the home page, with the timeline search as its SearchAction. */
export function websiteJsonLd() {
  return {
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      alternateName: 'Iran History',
      url: SITE_URL,
      inLanguage: 'fa',
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/timeline?q={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    }),
  }
}
