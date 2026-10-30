import type { EraId, EventType } from '../data/types'
import { eraNames, eventTypeNames } from './format'
import { normalize } from './search'

export const ERAS = Object.keys(eraNames) as EraId[]
export const EVENT_TYPES = Object.keys(eventTypeNames) as EventType[]
export const TIMELINE_SORTS = ['year-asc', 'year-desc'] as const
export type TimelineSort = (typeof TIMELINE_SORTS)[number]

/** Full extent of the chart in years (negative = BCE). The visible window is [from, to]. */
export const TIMELINE_MIN = -3300
export const TIMELINE_MAX = 2030
/** Narrowest zoom, in years. */
export const TIMELINE_MIN_SPAN = 20

/** Optional in the URL; `parseTimelineSearch` fills defaults so the view always has a complete object. */
export interface TimelineSearch {
  q?: string
  era?: '' | EraId
  dynasty?: string
  type?: '' | EventType
  major?: boolean
  sort?: TimelineSort
  /** visible window, years */
  from?: number
  to?: number
  /** selected event id */
  ev?: string
}

export type TimelineSearchFilled = Required<TimelineSearch>

export const TIMELINE_DEFAULTS: TimelineSearchFilled = {
  q: '',
  era: '',
  dynasty: '',
  type: '',
  major: false,
  sort: 'year-asc',
  from: TIMELINE_MIN,
  to: TIMELINE_MAX,
  ev: '',
}

export interface HomeSearch {
  q?: string
}

export const HOME_DEFAULTS: HomeSearch = { q: '' }

function asString(v: unknown, max = 200): string {
  if (v == null || v === false) return ''
  const s = typeof v === 'string' ? v : String(v)
  return s.slice(0, max).trim()
}

function asEnum<T extends string>(v: unknown, allowed: readonly T[], fallback: T | ''): T | '' {
  const s = asString(v, 64)
  return (allowed as readonly string[]).includes(s) ? (s as T) : fallback
}

function asBool(v: unknown): boolean {
  return v === true || v === 'true' || v === '1' || v === 1
}

function asYear(v: unknown, fallback: number): number {
  const n = typeof v === 'number' ? v : Number.parseInt(asString(v, 8), 10)
  if (!Number.isFinite(n)) return fallback
  return Math.min(TIMELINE_MAX, Math.max(TIMELINE_MIN, Math.round(n)))
}

/** Clamp a window into range, keeping at least the minimum span. */
export function clampWindow(from: number, to: number): { from: number; to: number } {
  let a = Math.min(from, to)
  let b = Math.max(from, to)
  if (b - a < TIMELINE_MIN_SPAN) { const mid = (a + b) / 2; a = mid - TIMELINE_MIN_SPAN / 2; b = mid + TIMELINE_MIN_SPAN / 2 }
  const span = Math.min(b - a, TIMELINE_MAX - TIMELINE_MIN)
  if (a < TIMELINE_MIN) { a = TIMELINE_MIN; b = a + span }
  if (b > TIMELINE_MAX) { b = TIMELINE_MAX; a = b - span }
  return { from: Math.round(a), to: Math.round(b) }
}

function record(input: unknown): Record<string, unknown> {
  return input && typeof input === 'object' && !Array.isArray(input) ? (input as Record<string, unknown>) : {}
}

/** Invalid or unknown values fall back to defaults — never throw. */
export function parseTimelineSearch(input: unknown): TimelineSearchFilled {
  const s = record(input)
  return {
    q: asString(s.q),
    era: asEnum(s.era, ERAS, ''),
    dynasty: asString(s.dynasty, 80).toLowerCase().replace(/[^a-z0-9-]/g, ''),
    type: asEnum(s.type, EVENT_TYPES, ''),
    major: asBool(s.major),
    sort: (asEnum(s.sort, TIMELINE_SORTS, TIMELINE_DEFAULTS.sort) || TIMELINE_DEFAULTS.sort) as TimelineSort,
    ...clampWindow(asYear(s.from, TIMELINE_MIN), asYear(s.to, TIMELINE_MAX)),
    ev: asString(s.ev, 80).replace(/[^a-z0-9-]/gi, ''),
  }
}

export function parseHomeSearch(input: unknown): Required<HomeSearch> {
  return { q: asString(record(input).q) }
}

export function compactSearch<T extends object>(value: T, defaults: T): Partial<T> {
  const out: Partial<T> = {}
  for (const key of Object.keys(value) as (keyof T)[]) {
    if (value[key] !== defaults[key]) out[key] = value[key]
  }
  return out
}

export function hasNonDefaultSearch<T extends object>(value: T, defaults: T): boolean {
  return Object.keys(compactSearch(value, defaults)).length > 0
}

/** Standard Schema + `.parse` so validateSearch infers TimelineSearch. */
export const timelineSearchSchema = {
  '~standard': {
    version: 1 as const,
    vendor: 'iran-history',
    validate: (input: unknown) => ({ value: parseTimelineSearch(input) }),
  },
  parse: parseTimelineSearch,
}

export const homeSearchSchema = {
  '~standard': {
    version: 1 as const,
    vendor: 'iran-history',
    validate: (input: unknown) => ({ value: parseHomeSearch(input) }),
  },
  parse: parseHomeSearch,
}

export function filterByQuery<T>(items: T[], q: string, hay: (item: T) => string): T[] {
  const n = normalize(q)
  if (!n) return items
  return items.filter((item) => normalize(hay(item)).includes(n))
}

export function applyTimelineSearch<T extends {
  era: string
  dynastySlug: string
  type: string
  importance: string
  title: string
  description?: string | null
  dynastyName: string
  year: number
}>(events: T[], search: TimelineSearchFilled): T[] {
  const n = normalize(search.q)
  const filtered = events.filter((e) =>
    (!search.era || e.era === search.era)
    && (!search.dynasty || e.dynastySlug === search.dynasty)
    && (!search.type || e.type === search.type)
    && (!search.major || e.importance === 'major')
    && e.year >= search.from && e.year <= search.to
    && (!n || normalize(`${e.title} ${e.description ?? ''} ${e.dynastyName}`).includes(n)),
  )
  if (search.sort === 'year-desc') return [...filtered].sort((a, b) => b.year - a.year || a.title.localeCompare(b.title, 'fa'))
  return filtered
}
