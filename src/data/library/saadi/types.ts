import type { SaadiBook } from './paths'

/** A meaning from Ganjoor's open data. `ai`: Ganjoor marks it as machine-written («هوش مصنوعی»);
 * otherwise a Ganjoor reader wrote it. `fixed`: we rewrote it after reading (see text/fixes.json). */
export interface Meaning {
  text: string
  ai: boolean
  fixed?: boolean
}

/** A bayt (two hemistichs) or, in the Golestan, a paragraph of prose. */
export type Block = { l: readonly [string, string]; m?: Meaning } | { p: string; m?: Meaning }

export interface Section {
  book: SaadiBook
  chapter: string
  n: number
  title: string
  /** path of the poem on ganjoor.net */
  ganjoor: string
  summary: Meaning | null
  blocks: readonly Block[]
}

export interface SectionEntry {
  n: number
  title: string
  first: string
  count: number
}

export interface Chapter {
  slug: string
  title: string
  sections: readonly SectionEntry[]
}

export interface BookIndex {
  book: SaadiBook
  chapters: readonly Chapter[]
}

export interface SaadiRepository {
  index(book: SaadiBook): Promise<BookIndex>
  section(book: SaadiBook, chapter: string, n: number): Promise<Section | undefined>
}
