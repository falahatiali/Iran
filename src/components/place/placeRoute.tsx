import { notFound } from '@tanstack/react-router'
import { dynasties } from '../../data/dynasties'
import { getPlace } from '../../data/places'
import type { Locale } from '../../lib/i18n'
import { placeAlternates, placeJsonLd, seo } from '../../lib/seo'
import { PlacePage } from './PlacePage'

const rulers = new Map(dynasties.flatMap((d) => d.rulers.map((r) => [r.id, r])))

export function loadPlace(slug: string) {
  const place = getPlace(slug)
  if (!place) throw notFound()
  return place
}

export function placeHead(slug: string, locale: Locale) {
  const place = getPlace(slug)
  if (!place) return {}
  const path = locale === 'fa' ? `/place/${slug}` : `/en/place/${slug}`
  return {
    ...seo({ title: place.name[locale], description: place.lede[locale], path, locale: locale === 'fa' ? 'fa_IR' : 'en_GB', alternates: placeAlternates(slug) }),
    scripts: [placeJsonLd({ locale, slug, name: place.name[locale], description: place.lede[locale], lat: place.coord.lat, lon: place.coord.lon, sameAs: place.wikipedia })],
  }
}

export function PlaceView({ slug, locale }: { slug: string; locale: Locale }) {
  const place = loadPlace(slug)
  const kings = place.kings.flatMap((k) => { const r = rulers.get(k); return r ? [{ slug: k, name: locale === 'fa' ? r.name : r.latin }] : [] })
  return <PlacePage place={place} locale={locale} kings={kings} />
}
