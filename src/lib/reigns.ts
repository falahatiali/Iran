/** Pure helpers for the “all kings at a glance” page: reign lengths, lanes, comparison and URL state. */
import { clampWindow, TIMELINE_MAX, TIMELINE_MIN } from './searchSchema'

export interface Reign { id: string; start: number; end: number | null }

/** Years between two year numbers. There is no year 0: 1 BCE (-1) is followed by 1 CE (1). */
export function yearsBetween(a: number, b: number): number {
  if (b < a) return -yearsBetween(b, a)
  return b - a - (a < 0 && b > 0 ? 1 : 0)
}

/** End of a reign, using `now` for a ruler still in office. */
export const reignEnd = (r: Reign, now: number) => r.end ?? now

/** Length of a reign in years (0 = less than a year, or same calendar year). */
export const reignLength = (r: Reign, now: number) => Math.max(0, yearsBetween(r.start, reignEnd(r, now)))

/**
 * Pack reigns into as few rows as possible so that overlapping reigns
 * (rival claimants, co-rulers) never sit on top of each other.
 * Returns the row index for each reign id; reigns that merely touch (one ends the year the next starts) share a row.
 */
export function packLanes(reigns: Reign[], now: number): Record<string, number> {
  const sorted = [...reigns].sort((a, b) => a.start - b.start || reignEnd(a, now) - reignEnd(b, now))
  const rowEnds: number[] = []
  const out: Record<string, number> = {}
  for (const r of sorted) {
    let row = rowEnds.findIndex((end) => end <= r.start)
    if (row === -1) { row = rowEnds.length; rowEnds.push(0) }
    rowEnds[row] = reignEnd(r, now)
    out[r.id] = row
  }
  return out
}

export type Relation =
  | { kind: 'same' }
  | { kind: 'overlap'; years: number }
  | { kind: 'gap'; years: number; first: string }

/** How two reigns relate in time: overlap (years shared) or gap (years between the first’s end and the second’s start). */
export function relate(a: Reign, b: Reign, now: number): Relation {
  if (a.id === b.id) return { kind: 'same' }
  const [x, y] = a.start <= b.start ? [a, b] : [b, a]
  const xe = reignEnd(x, now)
  if (y.start <= xe) {
    const shared = yearsBetween(y.start, Math.min(xe, reignEnd(y, now)))
    return { kind: 'overlap', years: Math.max(0, shared) }
  }
  return { kind: 'gap', years: yearsBetween(xe, y.start), first: x.id }
}

/** The `n` longest reigns (ties keep data order). */
export function longest<T extends Reign>(reigns: T[], now: number, n = 5): T[] {
  return [...reigns].sort((a, b) => reignLength(b, now) - reignLength(a, now)).slice(0, n)
}

/** Does a reign fall (at least partly) inside a year window? */
export const inWindow = (r: Reign, w: { from: number; to: number }, now: number) => reignEnd(r, now) >= w.from && r.start <= w.to

// ---- URL state -------------------------------------------------------------

export interface KingsSearch { a?: string; b?: string; from?: number; to?: number }
export const KINGS_DEFAULTS: Required<KingsSearch> = { a: '', b: '', from: -2200, to: TIMELINE_MAX }

const ID = /^[a-z0-9-]{1,48}$/
const asId = (v: unknown) => (typeof v === 'string' && ID.test(v) ? v : '')
const asYear = (v: unknown, fallback: number) => {
  const n = typeof v === 'number' ? v : Number.parseInt(typeof v === 'string' ? v.slice(0, 8) : '', 10)
  return Number.isFinite(n) ? Math.min(TIMELINE_MAX, Math.max(TIMELINE_MIN, Math.round(n))) : fallback
}

/** Invalid values fall back to defaults; never throws. Unknown ruler ids are dropped by the page. */
export function parseKingsSearch(input: unknown): Required<KingsSearch> {
  const s = input && typeof input === 'object' && !Array.isArray(input) ? (input as Record<string, unknown>) : {}
  return {
    a: asId(s.a),
    b: asId(s.b),
    ...clampWindow(asYear(s.from, KINGS_DEFAULTS.from), asYear(s.to, KINGS_DEFAULTS.to)),
  }
}
