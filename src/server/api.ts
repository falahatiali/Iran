import { createServerFn } from '@tanstack/react-start'
import { notFound } from '@tanstack/react-router'
import { getRepositories } from './db/factory'
import type { DynastyRow, EventRow, RulerRow, Source } from './db/repositories'
import type { ArchivesProject, CylinderProject } from './db/research'

export interface DynastySummary extends DynastyRow { rulers: Pick<RulerRow, 'id' | 'name' | 'latin' | 'start' | 'end'>[]; eventCount: number }
export interface Overview { dynasties: DynastySummary[]; events: Pick<EventRow, 'id' | 'title' | 'year' | 'dynastySlug'>[]; totals: { dynasties: number; rulers: number; events: number } }

export const getOverview = createServerFn({ method: 'GET' }).handler(async (): Promise<Overview> => {
  const repo = getRepositories()
  const [ds, rs, es] = await Promise.all([repo.dynasties.list(), repo.rulers.list(), repo.events.list()])
  const dynasties = ds.map((d) => ({
    ...d,
    rulers: rs.filter((r) => r.dynastySlug === d.slug).map(({ id, name, latin, start, end }) => ({ id, name, latin, start, end })),
    eventCount: es.filter((e) => e.dynastySlug === d.slug).length,
  }))
  const events = es.map(({ id, title, year, dynastySlug }) => ({ id, title, year, dynastySlug }))
  return { dynasties, events, totals: { dynasties: ds.length, rulers: rs.length, events: es.length } }
})

export interface DynastyDetail {
  dynasty: DynastyRow; rulers: RulerRow[]; events: EventRow[]; sources: Source[]
  extent: [number, number][] | null; prev: DynastyRow | null; next: DynastyRow | null
}

export const getDynasty = createServerFn({ method: 'GET' })
  .validator((slug: string) => slug)
  .handler(async ({ data: slug }): Promise<DynastyDetail> => {
    const repo = getRepositories()
    const all = await repo.dynasties.list()
    const i = all.findIndex((d) => d.slug === slug)
    if (i < 0) throw notFound()
    const [rulers, events, sources, extent] = await Promise.all([
      repo.rulers.byDynasty(slug), repo.events.byDynasty(slug), repo.dynasties.sources(slug), repo.dynasties.extent(slug),
    ])
    return { dynasty: all[i], rulers, events, sources, extent, prev: all[i - 1] ?? null, next: all[i + 1] ?? null }
  })

export interface TreeNode { id: string | null; name: string; latin?: string; reign?: [number, number | null]; isRuler: boolean }
export interface RulerDetail {
  ruler: RulerRow; dynasty: DynastyRow
  predecessor: RulerRow | null; successor: RulerRow | null
  father: TreeNode | null; grandfather: TreeNode | null; mother: string | null; spouses: string[]
  siblings: TreeNode[]; children: TreeNode[]; grandchildren: TreeNode[]
  events: EventRow[]; sources: Source[]
}

export const getRuler = createServerFn({ method: 'GET' })
  .validator((id: string) => id)
  .handler(async ({ data: id }): Promise<RulerDetail> => {
    const repo = getRepositories()
    const ruler = await repo.rulers.get(id)
    if (!ruler) throw notFound()
    const [dynasty, siblingsInDyn, rels, events, sources] = await Promise.all([
      repo.dynasties.get(ruler.dynastySlug), repo.rulers.byDynasty(ruler.dynastySlug), repo.relations.forRuler(id),
      repo.events.byDynasty(ruler.dynastySlug), repo.dynasties.sources(ruler.dynastySlug),
    ])
    const idx = siblingsInDyn.findIndex((r) => r.id === id)
    const node = async (rid: string | null, name: string | null): Promise<TreeNode | null> => {
      if (rid) { const r = await repo.rulers.get(rid); if (r) return { id: r.id, name: r.name, latin: r.latin, reign: [r.start, r.end], isRuler: true } }
      return name ? { id: null, name, isRuler: false } : null
    }
    const fRel = rels.find((r) => r.kind === 'father')
    const father = fRel ? await node(fRel.relatedRulerId, fRel.relatedName) : null
    let grandfather: TreeNode | null = null
    let siblings: TreeNode[] = []
    if (father?.id) {
      const gf = (await repo.relations.forRuler(father.id)).find((r) => r.kind === 'father')
      if (gf) grandfather = await node(gf.relatedRulerId, gf.relatedName)
      siblings = (await Promise.all((await repo.relations.childrenOf(father.id)).filter((c) => c !== id).map((c) => node(c, null)))).filter((n): n is TreeNode => !!n)
    }
    const childIds = await repo.relations.childrenOf(id)
    const children = (await Promise.all(childIds.map((c) => node(c, null)))).filter((n): n is TreeNode => !!n)
    const gcIds = (await Promise.all(childIds.map((c) => repo.relations.childrenOf(c)))).flat()
    const grandchildren = (await Promise.all(gcIds.map((c) => node(c, null)))).filter((n): n is TreeNode => !!n)
    const end = ruler.end ?? 9999
    return {
      ruler, dynasty: dynasty!,
      predecessor: siblingsInDyn[idx - 1] ?? null, successor: siblingsInDyn[idx + 1] ?? null,
      father, grandfather,
      mother: rels.find((r) => r.kind === 'mother')?.relatedName ?? null,
      spouses: rels.filter((r) => r.kind === 'spouse').map((r) => r.relatedName ?? r.relatedRulerId ?? ''),
      siblings, children, grandchildren,
      events: events.filter((e) => e.year >= ruler.start && e.year <= end),
      sources,
    }
  })

export interface TimelineEvent extends EventRow { dynastyName: string; era: string; accent: string }
export const getTimeline = createServerFn({ method: 'GET' }).handler(async () => {
  const repo = getRepositories()
  const [ds, es] = await Promise.all([repo.dynasties.list(), repo.events.list()])
  const by = new Map(ds.map((d) => [d.slug, d]))
  return {
    dynasties: ds.map((d) => ({ slug: d.slug, name: d.name, era: d.era })),
    events: es.map((e): TimelineEvent => ({ ...e, dynastyName: by.get(e.dynastySlug)!.name, era: by.get(e.dynastySlug)!.era, accent: by.get(e.dynastySlug)!.accent })),
  }
})

export const healthCheck = createServerFn({ method: 'GET' }).handler(async () => {
  const repo = getRepositories()
  const [dynasties, rulers] = await Promise.all([repo.dynasties.list(), repo.rulers.list()])
  const ok = dynasties.length > 0 && rulers.length > 0
  return { ok, dynasties: dynasties.length, rulers: rulers.length }
})

export type { ArchivesProject, CylinderProject }

export const getCylinder = createServerFn({ method: 'GET' }).handler(async (): Promise<CylinderProject> => {
  const project = await getRepositories().research.cylinder()
  if (!project) throw notFound()
  return project
})

export const getArchives = createServerFn({ method: 'GET' }).handler(async (): Promise<ArchivesProject> => {
  const project = await getRepositories().research.archives()
  if (!project) throw notFound()
  return project
})
