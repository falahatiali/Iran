import type { EvidenceLayer } from '../research/types'
import type { Bi, BiParas, FeaturedSource } from '../featured/types'

export type PlaceKind = 'monument' | 'site' | 'city' | 'topic'

/** A Wikimedia Commons photo whose licence and author were read on its file page. */
export interface CommonsPhoto {
  id: string
  src: string
  page: string
  author: string
  license: 'CC0' | 'CC BY 2.0' | 'CC BY 3.0' | 'CC BY 4.0' | 'CC BY-SA 2.0' | 'CC BY-SA 3.0' | 'CC BY-SA 3.0 FR' | 'CC BY-SA 4.0' | 'Public domain'
  licenseUrl?: string
  caption: Bi
}

export interface PlaceSection {
  id: string
  title: Bi
  /** Period label shown beside the heading, e.g. "c. 40,000 BP" or "148 BCE". */
  period?: Bi
  layers: { layer: EvidenceLayer; paras: BiParas }[]
  photos?: string[]
  sources: string[]
}

export interface Place {
  slug: string
  kind: PlaceKind
  name: Bi
  /** Every spelling search should match. */
  aliases: string[]
  lede: Bi
  coord: { lat: number; lon: number; note: Bi }
  facts: { label: Bi; value: Bi }[]
  sections: PlaceSection[]
  photos: CommonsPhoto[]
  sources: FeaturedSource[]
  /** Timeline event titles (fa) and king slugs that should link here. */
  eventTitles: string[]
  kings: string[]
  wikipedia?: string
}
