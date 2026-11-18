import type { VerseNote } from '../../shahnameh/commentary/types'
import type { PoemCouplet } from '../../shahnameh/poems/types'

export type { VerseNote, PoemCouplet }

export interface MantiqGroup {
  id: string
  title: string
}

/** One reading section of the book (a page under /library/mantiq-al-tayr/<slug>). */
export interface MantiqSectionMeta {
  slug: string
  group: string
  title: string
  coupletCount: number
  /** Ganjoor poems (a heading or a tale each) that make up the section, in order */
  parts: readonly { id: number; title: string; count: number }[]
}

/** The verbatim text of one section, as fetched from Ganjoor. */
export interface MantiqText {
  slug: string
  parts: { id: number; title: string; ganjoor: string; couplets: PoemCouplet[] }[]
}

/** Per-bayt notes for one section, keyed by `${partId}:${n}`. */
export interface MantiqNotes {
  slug: string
  status: 'complete' | 'in-progress' | 'none'
  notes: Record<string, VerseNote>
}
