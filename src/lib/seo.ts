import { resolvePublicSiteUrl } from './siteUrl'

const viteEnv = (import.meta.env ?? {}) as { VITE_SITE_URL?: string; MODE?: string }

export const SITE_URL = resolvePublicSiteUrl({
  viteUrl: viteEnv.VITE_SITE_URL,
  envUrl: typeof process !== 'undefined' ? process.env.VITE_SITE_URL : undefined,
  appDomain: typeof process !== 'undefined' ? process.env.APP_DOMAIN : undefined,
  mode: viteEnv.MODE ?? (typeof process !== 'undefined' ? process.env.NODE_ENV : undefined),
})
export const SITE_NAME = 'تاریخ ایران'

export function seo({
  title,
  description,
  path = '/',
  locale = 'fa_IR',
  alternates,
  noindex = false,
}: {
  title: string
  description: string
  path?: string
  locale?: string
  alternates?: { hrefLang: string; path: string }[]
  noindex?: boolean
}) {
  const full = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`
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
      { name: 'twitter:card', content: 'summary' },
      ...(noindex ? [{ name: 'robots', content: 'noindex, follow' }] : []),
    ],
    links: [
      { rel: 'canonical', href: SITE_URL + path },
      ...(alternates ?? []).map((a) => ({ rel: 'alternate', hrefLang: a.hrefLang, href: SITE_URL + a.path })),
    ],
  }
}

export const CYLINDER_ALTERNATES = [
  { hrefLang: 'fa', path: '/cylinder' },
  { hrefLang: 'en', path: '/en/cylinder' },
  { hrefLang: 'x-default', path: '/cylinder' },
] as const

export const ARCHIVES_ALTERNATES = [
  { hrefLang: 'fa', path: '/archives' },
  { hrefLang: 'en', path: '/en/archives' },
  { hrefLang: 'x-default', path: '/archives' },
] as const

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
