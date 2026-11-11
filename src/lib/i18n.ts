import { isFeaturedKing } from '../data/featured/slugs'
import { PAGE_PAIRS } from './sitePages'

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

const PAIRED = PAGE_PAIRS

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
  // the Dey 1404 memorial is Persian only
  if (path === '/event/dey-1404' || path.startsWith('/event/dey-1404/')) return '/en/cylinder'
  if (path.startsWith('/en/event/')) return path.slice(3)
  if (path.startsWith('/event/')) return `/en${path}`
  if (path.startsWith('/en/battle/')) return path.slice(3)
  if (path.startsWith('/battle/')) return `/en${path}`
  if (path === '/en/shahnameh' || path.startsWith('/en/shahnameh/')) return path.replace(/^\/en/, '')
  if (path === '/shahnameh' || path.startsWith('/shahnameh/')) return '/en/shahnameh'
  if (path.startsWith('/en')) return '/cylinder'
  return '/en/cylinder'
}
