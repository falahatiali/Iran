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

export interface GhazalIndex {
  source: string
  commit: string
  stats: Record<string, number>
  ghazals: readonly GhazalEntry[]
}

export interface DivanRepository {
  index(): Promise<GhazalIndex>
  ghazal(n: number): Promise<Ghazal | undefined>
  /** Hafez's rubaiyat and qet'as: each set is one small file */
  robaiyat(): Promise<readonly Ghazal[]>
  qetaat(): Promise<readonly Ghazal[]>
}
