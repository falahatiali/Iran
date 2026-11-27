/**
 * Ancient civilizations of Iran: a landing page (/civilizations) and one page per civilization.
 * Every claim names its sources by id (the bibliography is in ./sources.ts). Persian only.
 * Years are numbers: negative = BCE, positive = CE.
 */

export type CivEra = 'neolithic' | 'chalcolithic' | 'bronze' | 'elamite' | 'iron'

export const ERA_LABELS: Record<CivEra, { name: string; span: string; color: string }> = {
  neolithic: { name: 'نوسنگی', span: 'هزارهٔ نهم تا ششم پ.م.', color: '#7fb069' },
  chalcolithic: { name: 'مس‌سنگی', span: 'هزارهٔ ششم تا چهارم پ.م.', color: '#e0a458' },
  bronze: { name: 'عصر مفرغ', span: 'هزارهٔ چهارم تا دوم پ.م.', color: '#d9b45a' },
  elamite: { name: 'ایلام تاریخی', span: 'هزارهٔ سوم تا ششم پ.م.', color: '#2ec4b6' },
  iron: { name: 'عصر آهن', span: 'هزارهٔ دوم تا سدهٔ ششم پ.م.', color: '#9b8cff' },
}

/** One line of the catalog: enough for the home box, the landing grid, the map and the chronology chart. */
export interface CivSummary {
  slug: string
  name: string
  latin: string
  era: CivEra
  /** [start, end] for the chronology chart; negative = BCE */
  span: [number, number]
  spanLabel: string
  /** province / region today */
  region: string
  /** [lon, lat] of the main site, for the map */
  coord: [number, number]
  accent: string
  /** one-line hook for cards */
  tagline: string
  /** emblem drawn on the card (see CivEmblem) */
  emblem: EmblemKey
}

export type EmblemKey = 'goat' | 'wheat' | 'pot' | 'ziggurat' | 'tablet' | 'eye' | 'snake' | 'flag' | 'vessel' | 'bowl' | 'horse' | 'lion' | 'fortress' | 'column' | 'chariot' | 'seal' | 'bull' | 'griffin' | 'sun'

export interface CivSource {
  id: string
  author: string
  title: string
  /** publication / year, as printed */
  year: string
  url: string
  /** what kind of source: encyclopedia, museum, excavation report, journal, UNESCO, magazine */
  kind: 'encyclopedia' | 'museum' | 'journal' | 'unesco' | 'magazine' | 'book' | 'report'
}

export interface CivPhoto {
  id: string
  /** /media/civ/<slug>/<file>.webp */
  src: string
  caption: string
  /** the Commons file page or museum object page */
  page: string
  author: string
  license: string
  /** holding museum, when the photo is of a museum object */
  museum?: string
  /** width / height */
  ratio: number
}

export interface CivVideo {
  /** YouTube video id, verified with oEmbed */
  id: string
  title: string
  channel: string
  lang: 'fa' | 'en'
}

export interface CivSection {
  id: string
  title: string
  body: string[]
  sources: string[]
  photo?: string
}

export interface CivMilestone {
  /** for ordering */
  year: number
  when: string
  text: string
  sources: string[]
}

export interface Civilization extends CivSummary {
  /** SEO description, 70–160 characters */
  description: string
  lede: string[]
  facts: [string, string][]
  sections: CivSection[]
  timeline: CivMilestone[]
  photos: CivPhoto[]
  videos: CivVideo[]
  /** «نگاه ما»: our own reading, kept apart from the sourced material and labelled */
  view?: string[]
  related: string[]
  /** Wikidata item of the site or culture, for JSON-LD sameAs */
  wikidata?: string
}
