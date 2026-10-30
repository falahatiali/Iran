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

export const DARIUS_ALTERNATES = [
  { hrefLang: 'fa', path: '/darius' },
  { hrefLang: 'en', path: '/en/darius' },
  { hrefLang: 'x-default', path: '/darius' },
] as const

/** schema.org JSON-LD for the Darius dossier (Article about Person). */
export function dariusJsonLd(locale: 'fa' | 'en') {
  const path = locale === 'fa' ? '/darius' : '/en/darius'
  return {
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      inLanguage: locale,
      headline: locale === 'fa' ? 'داریوش بزرگ؛ شمشیر، قرارداد و مالکیت' : 'Darius the Great: sword, contract and property',
      url: SITE_URL + path,
      publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
      about: { '@type': 'Person', name: locale === 'fa' ? 'داریوش یکم' : 'Darius I', sameAs: 'https://en.wikipedia.org/wiki/Darius_the_Great' },
    }),
  }
}
