/**
 * Featured-king dossiers: optional rich content (animated map, three-layer dossier,
 * synthesis essay, bibliography) attached to a king page by ruler slug.
 * Any ruler can gain one by adding an entry to `featuredKings` in ./index.ts.
 */
import type { CommonsPhoto } from '../places/types'
export interface Bi { fa: string; en: string }
export interface BiParas { fa: string[]; en: string[] }
export type Lon = number
export type Lat = number
export type Coord = [Lon, Lat]
export type EventKind = 'battle' | 'campaign' | 'building' | 'admin' | 'religion'
/** secure: datable from contemporary primary sources; probable: consensus with gaps; disputed: scholars disagree. */
export type Certainty = 'secure' | 'probable' | 'disputed'

export interface MapEvent {
  id: string
  /** negative = BCE; used for ordering and the scrubber */
  year: number
  when: Bi
  kind: EventKind
  title: Bi
  body: Bi
  coord: Coord
  route?: Coord[]
  certainty: Certainty
  certaintyNote?: Bi
  sources: string[]
  /** optional link to a place/topic entity page (slug under /place/) */
  place?: string
}

export interface FeaturedSource { id: string; author: string; title: string; year: string; url?: string; note?: Bi }
export interface DossierQuote { text: string; fa: string; ref: string; source: string }
export interface DossierSection { id: string; title: Bi; historical: BiParas; interpretation: BiParas; modern: BiParas; quotes?: DossierQuote[]; sources: string[]; /** ids into FeaturedKing.photos */ photos?: string[] }
export interface Synthesis { title: Bi; paras: BiParas; sources: string[] }

export interface FeaturedKing {
  /** ruler id, i.e. the /king/$slug param */
  slug: string
  name: Bi
  dynastyName: Bi
  reign: Bi
  title: Bi
  lede: Bi
  stats: { n: Bi; l: Bi }[]
  mapTitle: Bi
  events: MapEvent[]
  /** year window the map events must fall inside */
  span: [number, number]
  dossier: DossierSection[]
  synthesis: Synthesis
  sources: FeaturedSource[]
  /** related links shown after the bibliography */
  related: { href: { fa: string; en: string }; label: Bi }[]
  wikipedia?: string
  /** Commons photos with verified licence, referenced by DossierSection.photos */
  photos?: CommonsPhoto[]
}
