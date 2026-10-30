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
  /** naval track, drawn in sea-blue alongside the land route */
  fleet?: Coord[]
  certainty: Certainty
  certaintyNote?: Bi
  sources: string[]
  /** optional link to a place/topic entity page (slug under /place/) */
  place?: string
}

/** Schematic battle diagram: a 100×60 local canvas, units animated between phases by id. */
export type Side = 'persian' | 'greek'
export interface BattleUnit { id: string; side: Side; kind: 'army' | 'fleet'; label: Bi; at: [number, number] }
export interface BattlePhase { id: string; title: Bi; body: Bi; units: BattleUnit[]; arrows?: { side: Side; path: [number, number][] }[]; certainty: Certainty; certaintyNote?: Bi; sources: string[] }
export interface BattleDiagram {
  id: string
  title: Bi
  when: Bi
  /** SVG path data for land masses in the 100×60 canvas */
  land: string[]
  labels: { at: [number, number]; text: Bi; tone?: 'land' | 'sea' }[]
  phases: BattlePhase[]
}
/** Rendered clip of a campaign map (scripts/render-campaign-clip.py). Paths are public URLs. */
export interface CampaignClip { gif: Bi; mp4: Bi; webm: Bi; poster: Bi; width: number; height: number }
export interface Campaign {
  id: string
  title: Bi
  intro: BiParas
  events: MapEvent[]
  span: [number, number]
  /** map window [lonMin, latMin, lonMax, latMax] */
  view: [number, number, number, number]
  /** left: draw the label on the west side of the dot */
  places?: { name: Bi; c: Coord; left?: boolean }[]
  clip?: CampaignClip
  battles?: BattleDiagram[]
}

export interface FeaturedSource { id: string; author: string; title: string; year: string; url?: string; note?: Bi }
export interface DossierQuote { text: string; fa: string; ref: string; source: string }
/** A modern popular tradition NOT found in the ancient sources: rendered in its own box, never as history. */
export interface FolkTradition { title: Bi; story: BiParas; origin: BiParas; sources: string[] }
export interface DossierSection { id: string; title: Bi; historical: BiParas; interpretation: BiParas; modern: BiParas; quotes?: DossierQuote[]; sources: string[]; /** ids into FeaturedKing.photos */ photos?: string[]; folk?: FolkTradition }
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
  /** a second, zoomed campaign map with optional clip and battle diagrams */
  campaign?: Campaign
  /** og:image path for social cards */
  shareImage?: string
}
