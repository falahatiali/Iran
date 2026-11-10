import { isFeaturedKing } from '../data/featured/slugs'

export type Locale = 'fa' | 'en'

export function localeFromPath(pathname: string): Locale {
  return pathname.startsWith('/en') ? 'en' : 'fa'
}

export function altCylinderPath(locale: Locale): string {
  return locale === 'fa' ? '/en/cylinder' : '/cylinder'
}

export function altArchivesPath(locale: Locale): string {
  return locale === 'fa' ? '/en/archives' : '/archives'
}

const PAIRED: readonly [string, string][] = [
  ['/about', '/en/about'],
  ['/property', '/en/property'],
  ['/archives', '/en/archives'],
  ['/cylinder', '/en/cylinder'],
]

/** The same page in the other language, or a sensible fallback when no mirror exists. */
export function siblingLocalePath(pathname: string): string {
  const path = pathname.split('#')[0] || '/'
  for (const [fa, en] of PAIRED) {
    if (path === fa) return en
    if (path === en) return fa
  }
  if (path.startsWith('/en/place/')) return path.slice(3)
  if (path.startsWith('/place/')) return `/en${path}`
  if (path.startsWith('/en/king/')) return path.slice(3)
  if (path.startsWith('/king/')) {
    const slug = path.slice('/king/'.length)
    return isFeaturedKing(slug) ? `/en${path}` : '/en/cylinder'
  }
  if (path.startsWith('/en/event/')) return path.slice(3)
  if (path.startsWith('/event/')) return `/en${path}`
  if (path.startsWith('/en/battle/')) return path.slice(3)
  if (path.startsWith('/battle/')) return `/en${path}`
  if (path.startsWith('/en')) return '/cylinder'
  return '/en/cylinder'
}
