/** One person on the Dey 1404 list, as every view (wall, province page, a future /javidnam/<slug> page) sees them.
 * names.json stays a compact table; this module turns a row into a Person and holds what is known beyond the row.
 * The future life page reads `lives[id]`: add an entry there (with sources) and that person's page has a story;
 * without one, the page shows only the row and its source. Never write a life entry without a source. */
import { NAME_SOURCES, PROVINCE_SLUGS, type NameGroup, type NameRow } from '.'

export interface Person {
  id: string
  /** URL slug for the future /javidnam/<slug> page; the stable id, so it never changes when a spelling is fixed. */
  slug: string
  name: string
  age: string | null
  province: string | null
  /** First place name of the city field («مشهد، بلوار وکیل‌آباد» → «مشهد»), for grouping. */
  city: string | null
  /** The full place the source gives, street included. */
  place: string | null
  date: string | null
  group: NameGroup
  note: string | null
  source: string
  confidence: string
}

/** A fact about someone's life, with the bibliography ids (deySources) that support it. */
export interface LifeFact { text: string; sources: string[] }
export interface Life { summary?: LifeFact; facts: LifeFact[] }

/** What is known about each person beyond the list row, keyed by Person.id. Empty for now, on purpose. */
export const lives: Record<string, Life> = {}

export function toPerson(r: NameRow): Person {
  const [id, name, age, province, date, group, place, note] = r
  return {
    id, slug: id, name, age, province, date, group,
    place: place ?? null, city: place ? place.split('،')[0].trim() : null, note: note ?? null,
    source: NAME_SOURCES[group].source, confidence: NAME_SOURCES[group].confidence,
  }
}

/** The anchor of a person on the memorial page, and of a province section and page. */
export const personAnchor = (id: string) => `p-${id}`
export const personHref = (id: string) => `/event/dey-1404#${personAnchor(id)}`
export const provinceHref = (province: string) => `/event/dey-1404/${PROVINCE_SLUGS[province]}`

/** Section of a province's names: people with a known city first, by city, then the rest. */
export function byCity(people: Person[]): { city: string | null; people: Person[] }[] {
  const m = new Map<string | null, Person[]>()
  for (const p of people) { const list = m.get(p.city); if (list) list.push(p); else m.set(p.city, [p]) }
  const known = [...m.entries()].filter(([c]) => c !== null).sort((a, b) => b[1].length - a[1].length)
  const rest = m.get(null)
  return [...known.map(([city, people]) => ({ city, people })), ...(rest ? [{ city: null, people: rest }] : [])]
}
