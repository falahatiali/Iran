import type { EraId, EventType, Importance } from '../../data/types'
import type { Source } from '../../data/sources'

export type { Source }

export interface DynastyRow {
  slug: string; name: string; latin: string; era: EraId; start: number; end: number | null
  capital: string; summary: string; accent: string
}
export interface RulerRow {
  id: string; dynastySlug: string; name: string; latin: string; start: number; end: number | null; description: string
}
export interface EventRow {
  id: string; dynastySlug: string; year: number; title: string; type: EventType; importance: Importance; description: string | null
}
export interface RelationRow {
  rulerId: string; kind: 'father' | 'mother' | 'spouse'; relatedRulerId: string | null; relatedName: string | null
}

export interface DynastyRepository {
  list(): Promise<DynastyRow[]>
  get(slug: string): Promise<DynastyRow | null>
  sources(slug: string): Promise<Source[]>
  extent(slug: string): Promise<[number, number][] | null>
}
export interface RulerRepository {
  list(): Promise<RulerRow[]>
  byDynasty(slug: string): Promise<RulerRow[]>
  get(id: string): Promise<RulerRow | null>
}
export interface EventRepository {
  list(): Promise<EventRow[]>
  byDynasty(slug: string): Promise<EventRow[]>
}
export interface RelationRepository {
  forRuler(id: string): Promise<RelationRow[]>
  childrenOf(id: string): Promise<string[]>
  all(): Promise<RelationRow[]>
}

export interface Repositories {
  dynasties: DynastyRepository
  rulers: RulerRepository
  events: EventRepository
  relations: RelationRepository
}

/** Low-level driver contract used by the migrator and seeder. */
export interface SqlDriver {
  exec(sql: string): Promise<void>
  query<T = Record<string, unknown>>(sql: string, args?: unknown[]): Promise<T[]>
  run(sql: string, args?: unknown[]): Promise<void>
  batch(stmts: { sql: string; args?: unknown[] }[]): Promise<void>
  close(): void
}
