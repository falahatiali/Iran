export const SITE_URL = (import.meta.env.VITE_SITE_URL as string | undefined) ?? 'https://iran-history.example'
export const SITE_NAME = 'تاریخ ایران'

export function seo({
  title,
  description,
  path = '/',
  locale = 'fa_IR',
  alternates,
}: {
  title: string
  description: string
  path?: string
  locale?: string
  alternates?: { hrefLang: string; path: string }[]
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
