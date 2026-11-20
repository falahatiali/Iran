import type { VerseNote } from '../../shahnameh/commentary/types'

export type { VerseNote }

/** One of Hedayat's eight headings in «ترانه‌های خیام» (1934). */
export interface Theme {
  id: string
  title: string
  count: number
}

/** A quatrain, verbatim from Ganjoor's text of the edition it belongs to. */
export interface Quatrain {
  /** its number in the edition (Hedayat: 1–143, Foroughi–Ghani: 1–178) */
  n: number
  /** Ganjoor poem id and address */
  id: number
  ganjoor: string
  lines: readonly [string, string, string, string]
}

export interface HedayatQuatrain extends Quatrain {
  theme: string
  /** Hedayat's own star: a quatrain he found doubtful, though "if not Khayyam's, by a very able follower" */
  doubtful: boolean
  /** its number in the Foroughi–Ghani selection when both editors chose it (variant readings allowed) */
  fg: number | null
}

export interface Edition<Q extends Quatrain> {
  /** the open-data export it was extracted from, and the commit */
  source: string
  commit: string
  quatrains: Q[]
}

export interface HedayatEdition extends Edition<HedayatQuatrain> {
  themes: Theme[]
}

/** Notes on Hedayat's quatrains keyed by number: a concise meaning, hard words and a short note. */
export interface QuatrainNotes {
  status: 'complete' | 'in-progress' | 'none'
  notes: Record<string, VerseNote>
}

/** Where the rubaiyat come from. The pages read only this, so the storage behind it can change in one place. */
export interface RubaiyatRepository {
  foroughiMeanings(): Promise<ForoughiMeanings>
  hedayat(): Promise<HedayatEdition>
  foroughi(): Promise<Edition<Quatrain>>
  notes(): Promise<QuatrainNotes>
}

/** Ganjoor's meanings for the Foroughi–Ghani quatrains not in Hedayat's selection, one per bayt
 * (scripts/extract-ganjoor-khayyam-meanings.py). `ai`: Ganjoor marks it «هوش مصنوعی». */
export interface ForoughiMeanings {
  source: string
  commit: string
  meanings: Record<string, readonly { text: string; ai: boolean }[]>
}
