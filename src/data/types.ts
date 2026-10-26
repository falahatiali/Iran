export type EraId = 'ancient' | 'classical' | 'medieval' | 'early-modern' | 'modern'
export type EventType = 'founding' | 'battle' | 'treaty' | 'reform' | 'culture' | 'fall' | 'other'
export type Importance = 'major' | 'minor'

export interface HistoricalEvent {
  id: string
  /** Gregorian year; negative = BCE */
  year: number
  title: string
  type: EventType
  importance: Importance
  description?: string
  dynasty: string
}

export interface Family {
  /** id of father if he is a ruler in this dataset, else a name */
  father?: string
  mother?: string
  spouses?: string[]
}

export interface Ruler {
  id: string
  name: string
  latin: string
  start: number
  end: number | null
  description: string
  title?: string
  family: Family
  dynasty: string
  /** filled by lib */
  predecessor?: string
  successor?: string
  children?: string[]
}

export interface Dynasty {
  slug: string
  name: string
  latin: string
  era: EraId
  start: number
  end: number | null
  capital: string
  summary: string
  accent: string
  rulers: Ruler[]
  events: HistoricalEvent[]
}
