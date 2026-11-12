/** Every public, indexable URL path on the site, built from the data modules.
 * The sitemap is written from this list, and the link test checks every internal link against it. */
import { NAMED_PROVINCES } from '../data/dey1404'
import { provinceHref } from '../data/dey1404/people'
import { dynasties } from '../data/dynasties'
import { FEATURED_KING_SLUGS } from '../data/featured/slugs'
import { places } from '../data/places'
import { shahnamehSitemapPaths } from '../data/shahnameh'
import { STATIC_PATHS } from './sitePages'

export function publicPaths(): string[] {
  const all = [
    ...STATIC_PATHS,
    ...shahnamehSitemapPaths(),
    ...dynasties.map((d) => `/dynasty/${d.slug}`),
    ...dynasties.flatMap((d) => d.rulers.map((r) => `/king/${r.id}`)),
    ...FEATURED_KING_SLUGS.map((s) => `/en/king/${s}`),
    ...Object.keys(places).flatMap((s) => [`/place/${s}`, `/en/place/${s}`]),
    ...NAMED_PROVINCES.map(provinceHref),
  ]
  return [...new Set(all)]
}

/** Legacy paths that answer with a redirect: valid link targets, but not listed in the sitemap. */
export const REDIRECT_PATHS: readonly string[] = ['/darius', '/en/darius']

/** Routes that exist but are not for search engines (noindex, kept out of the sitemap). */
export const PRIVATE_PATHS: readonly string[] = ['/admin/comments']
