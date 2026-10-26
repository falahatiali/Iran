import type { Dynasty, EraId, EventType, HistoricalEvent, Importance, Ruler } from './types'

type F = { f?: string; m?: string; s?: string[] }
export type RulerRow = [id: string, name: string, latin: string, start: number, end: number | null, desc: string, fam?: F]
export type EventRow = [year: number, title: string, type: EventType, desc?: string, imp?: Importance]

export function dynasty(d: {
  slug: string; name: string; latin: string; era: EraId; start: number; end: number | null
  capital: string; summary: string; accent: string; rulers: RulerRow[]; events: EventRow[]
}): Dynasty {
  const rulers: Ruler[] = d.rulers.map(([id, name, latin, start, end, description, fam]) => ({
    id, name, latin, start, end, description, dynasty: d.slug,
    family: { father: fam?.f, mother: fam?.m, spouses: fam?.s },
  }))
  const events: HistoricalEvent[] = d.events.map(([year, title, type, description, imp], i) => ({
    id: `${d.slug}-e${i + 1}`, year, title, type, description, importance: imp ?? 'major', dynasty: d.slug,
  }))
  return { ...d, rulers, events }
}
