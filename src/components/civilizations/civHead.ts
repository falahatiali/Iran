/** Head tags for the civilization pages: SEO meta and schema.org JSON-LD.
 * Each page's wikidata item was checked against Wikidata's enwiki/fawiki sitelinks (wbgetentities) before it was written. */
import { civPath } from '../../data/civilizations/catalog'
import type { CivSummary, Civilization } from '../../data/civilizations/types'
import { SITE_URL, seo } from '../../lib/seo'
import { breadcrumbList, ldScript } from '../../lib/structuredData'

export const LANDING_TITLE = 'تمدن‌های کهن ایران: دانشنامهٔ مصور از گنج‌دره تا چغازنبیل'
export const LANDING_DESCRIPTION = 'دانشنامهٔ مصور تمدن‌های کهن ایران پیش از هخامنشیان: گنج‌دره، سیلک، شوش، شهر سوخته، جیرفت و چغازنبیل، با نقشه، گاه‌نگار، عکس، ویدیو و منبع.'
const CRUMB = { name: 'تمدن‌های کهن ایران', path: '/civilizations' }

export function landingHead(items: readonly (CivSummary & { cover?: string })[]) {
  return {
    ...seo({ title: LANDING_TITLE, description: LANDING_DESCRIPTION, path: '/civilizations', image: items.find((c) => c.cover)?.cover }),
    scripts: [ldScript([
      breadcrumbList([{ name: 'خانه', path: '/' }, CRUMB]),
      {
        '@type': 'CollectionPage', name: LANDING_TITLE, description: LANDING_DESCRIPTION, url: SITE_URL + '/civilizations', inLanguage: 'fa',
        mainEntity: { '@type': 'ItemList', itemListElement: items.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, url: SITE_URL + civPath(c.slug) })) },
      },
    ])],
  }
}

export function civHead(civ: Civilization) {
  const path = civPath(civ.slug)
  const title = `${civ.name}: ${civ.tagline.replace(/[.؛]$/, '')}`
  const image = civ.photos[0]?.src
  return {
    ...seo({ title, description: civ.description, path, image }),
    scripts: [ldScript([
      breadcrumbList([{ name: 'خانه', path: '/' }, CRUMB, { name: civ.name, path }]),
      {
        '@type': 'Article', headline: civ.name, description: civ.description, url: SITE_URL + path, inLanguage: 'fa',
        ...(image ? { image: SITE_URL + image } : {}),
        about: {
          '@type': 'LandmarksOrHistoricalBuildings', name: civ.name, alternateName: civ.latin,
          geo: { '@type': 'GeoCoordinates', latitude: civ.coord[1], longitude: civ.coord[0] },
          ...(civ.wikidata ? { sameAs: `https://www.wikidata.org/wiki/${civ.wikidata}` } : {}),
        },
      },
    ])],
  }
}
