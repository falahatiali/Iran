import type { VerseNote } from '../../shahnameh/commentary/types'
import type { Meaning } from '../hafez/types'

export type { VerseNote, Meaning }

export interface MantiqGroup {
  id: string
  title: string
  /** one line on what happens in this stretch of the book */
  sub: string
}

/** One bayt as Ganjoor has it; `n` is its number in its Ganjoor poem; `m` is Ganjoor's meaning of it. */
export interface MantiqCouplet {
  n: number
  a: string
  b: string
  m?: Meaning
}

/** A run of bayts from one Ganjoor poem. Most pages hold whole poems; the birds' questions begin
 * part-way through a poem, so a question's page can start or end inside one (`from`..`to` of `of`). */
export interface MantiqPartMeta {
  id: number
  title: string
  from: number
  to: number
  count: number
}

/** One reading section of the book (a page under /library/mantiq-al-tayr/<slug>). */
export interface MantiqSectionMeta {
  slug: string
  group: string
  title: string
  coupletCount: number
  /** the section's opening bayt */
  first: readonly [string, string]
  parts: readonly MantiqPartMeta[]
}

/** The verbatim text of one section, with Ganjoor's meanings, as extracted from ganjoor-data. */
export interface MantiqText {
  slug: string
  parts: {
    id: number
    title: string
    ganjoor: string
    from: number
    to: number
    of: number
    summary?: Meaning
    couplets: MantiqCouplet[]
  }[]
}

/** This site's own per-bayt notes for one section, keyed by `${partId}:${n}`. */
export interface MantiqNotes {
  slug: string
  status: 'complete' | 'in-progress' | 'none'
  notes: Record<string, VerseNote>
}
