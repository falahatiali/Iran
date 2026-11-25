/** A meaning from Ganjoor's open data. `ai`: Ganjoor marks it as machine-written («هوش مصنوعی»);
 * otherwise a Ganjoor reader wrote it. `fixed`: we rewrote it after reading (see text/fixes.json). */
export interface Meaning {
  text: string
  ai: boolean
  fixed?: boolean
}

export interface Bayt {
  l: readonly [string, string]
  m?: Meaning
}

/** A bayt (`c`: a centred band-bayt of a tarji'-band) or a paragraph of prose. */
export type Block = (Bayt & { c?: true }) | { p: string; m?: Meaning }

/** Any other poem of the Divan: a masnavi, a qasida, the preface, an attributed poem. */
export interface Poem {
  n: number
  title?: string
  metre: string | null
  summary: Meaning | null
  bayts: readonly Block[]
}

export interface MontasabEntry {
  n: number
  first: readonly [string, string]
  count: number
}

export interface Ghazal {
  n: number
  metre: string | null
  summary: Meaning | null
  bayts: readonly Bayt[]
}

export interface GhazalEntry {
  n: number
  first: readonly [string, string]
  /** last letter of the opening hemistich: the Divan is ordered by it */
  letter: string
  radif: string
  count: number
}

export interface LetterEntry {
  slug: string
  letter: string
  count: number
  /** number and opening bayt of the letter's first ghazal */
  first: number
  mutla: readonly [string, string]
}

export interface GhazalIndex {
  source: string
  commit: string
  stats: Record<string, number>
  ghazals: readonly GhazalEntry[]
}

/** «شرح این سایت» for one famous ghazal: short sourced notes. Each point paraphrases the cited works,
 * gathered through one dated Persian Wikipedia revision (`wiki`); the page refs are the ones given there. */
export interface SharhPoint {
  h: string
  t: string
  refs: readonly string[]
}
export interface Sharh {
  n: number
  points: readonly SharhPoint[]
  books: readonly string[]
  wiki: { title: string; oldid: number; date: string }
}
export interface SharhEntry {
  n: number
  first: readonly [string, string]
  points: number
}

export interface DivanRepository {
  /** which ghazals have «شرح این سایت», and one ghazal's notes */
  sharhIndex(): Promise<readonly SharhEntry[]>
  sharh(n: number): Promise<Sharh | undefined>
  index(): Promise<GhazalIndex>
  ghazal(n: number): Promise<Ghazal | undefined>
  /** the letters, and one letter's ghazals: each its own small file */
  letters(): Promise<readonly LetterEntry[]>
  letter(slug: string): Promise<readonly GhazalEntry[] | undefined>
  /** Hafez's rubaiyat and qet'as: each set is one small file */
  robaiyat(): Promise<readonly Ghazal[]>
  qetaat(): Promise<readonly Ghazal[]>
  /** the masnavi «الا ای آهوی وحشی» and the Saqi-nama; the three qasidas; the compiler's preface */
  masnavi(): Promise<readonly Poem[]>
  qasaid(): Promise<readonly Poem[]>
  moqaddame(): Promise<readonly Poem[]>
  /** poems Ganjoor gathers as attributed to Hafez, not in the Qazvini–Ghani edition: one file each */
  montasabIndex(): Promise<readonly MontasabEntry[]>
  montasab(n: number): Promise<Poem | undefined>
}
