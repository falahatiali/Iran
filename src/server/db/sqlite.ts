import { createClient, type Client, type InValue } from '@libsql/client'
import type { Repositories, SqlDriver, DynastyRow, RulerRow, EventRow, RelationRow, Source } from './repositories'
import { createResearchRepository } from './research'

export function createSqliteDriver(url: string): SqlDriver {
  const client: Client = createClient({ url })
  return {
    async exec(sql) { await client.executeMultiple(sql) },
    async query<T>(sql: string, args: unknown[] = []) {
      const r = await client.execute({ sql, args: args as InValue[] })
      return r.rows.map((row) => ({ ...row }) as T)
    },
    async run(sql, args = []) { await client.execute({ sql, args: args as InValue[] }) },
    async batch(stmts) { await client.batch(stmts.map((s) => ({ sql: s.sql, args: (s.args ?? []) as InValue[] })), 'write') },
    close() { client.close() },
  }
}

const D = `SELECT slug, name, latin, era, start_year AS start, end_year AS "end", capital, summary, accent FROM dynasties`
const R = `SELECT id, dynasty_slug AS dynastySlug, name, latin, start_year AS start, end_year AS "end", description FROM rulers`
const E = `SELECT id, dynasty_slug AS dynastySlug, year, title, type, importance, description FROM events`
const REL = `SELECT ruler_id AS rulerId, kind, related_ruler_id AS relatedRulerId, related_name AS relatedName FROM relations`

/** Generic SQL repositories – works for any driver speaking this SQL dialect. */
export function createSqlRepositories(db: SqlDriver): Repositories {
  return {
    dynasties: {
      list: () => db.query<DynastyRow>(`${D} ORDER BY sort`),
      get: async (slug) => (await db.query<DynastyRow>(`${D} WHERE slug = ?`, [slug]))[0] ?? null,
      sources: (slug) => db.query<Source>(
        `SELECT s.id, s.title, s.author, s.kind, s.url FROM sources s JOIN dynasty_sources ds ON ds.source_id = s.id WHERE ds.dynasty_slug = ? ORDER BY s.kind, s.title`, [slug]),
      extent: async (slug) => {
        const r = await db.query<{ p: string }>(`SELECT polygon_json AS p FROM extents WHERE dynasty_slug = ?`, [slug])
        return r[0] ? (JSON.parse(r[0].p) as [number, number][]) : null
      },
    },
    rulers: {
      list: () => db.query<RulerRow>(`${R} ORDER BY start_year, sort`),
      byDynasty: (slug) => db.query<RulerRow>(`${R} WHERE dynasty_slug = ? ORDER BY sort`, [slug]),
      get: async (id) => (await db.query<RulerRow>(`${R} WHERE id = ?`, [id]))[0] ?? null,
    },
    events: {
      list: () => db.query<EventRow>(`${E} ORDER BY year, id`),
      byDynasty: (slug) => db.query<EventRow>(`${E} WHERE dynasty_slug = ? ORDER BY year`, [slug]),
    },
    relations: {
      forRuler: (id) => db.query<RelationRow>(`${REL} WHERE ruler_id = ?`, [id]),
      childrenOf: async (id) => (await db.query<{ id: string }>(
        `SELECT r.ruler_id AS id FROM relations r JOIN rulers x ON x.id = r.ruler_id WHERE r.kind = 'father' AND r.related_ruler_id = ? ORDER BY x.start_year`, [id])).map((r) => r.id),
      all: () => db.query<RelationRow>(REL),
    },
    research: createResearchRepository(db),
  }
}
