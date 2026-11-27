/** Storage for the civilization pages, behind an interface: pages ask the repository, never the files.
 * The static implementation keeps the light catalog in the bundle and loads each full page on demand. */
import { CATALOG } from './catalog'
import type { CivSummary, Civilization } from './types'

export interface CivilizationRepository {
  /** every civilization with a page, ordered by start date */
  list(): readonly CivSummary[]
  has(slug: string): boolean
  get(slug: string): Promise<Civilization | undefined>
}

type Loader = () => Promise<{ civ: Civilization }>

/** One loader per page; a catalog entry without a loader is not listed. */
const LOADERS: Record<string, Loader> = {
  'ganj-dareh': () => import('./content/ganj-dareh'),
  sialk: () => import('./content/sialk'),
  susa: () => import('./content/susa'),
  'shahr-e-sukhteh': () => import('./content/shahr-e-sukhteh'),
  jiroft: () => import('./content/jiroft'),
  'chogha-zanbil': () => import('./content/chogha-zanbil'),
}

export function staticRepository(catalog: readonly CivSummary[], loaders: Record<string, Loader>): CivilizationRepository {
  const listed = [...catalog].filter((c) => c.slug in loaders).sort((a, b) => a.span[0] - b.span[0])
  return {
    list: () => listed,
    has: (slug) => slug in loaders,
    get: async (slug) => (slug in loaders ? (await loaders[slug]()).civ : undefined),
  }
}

export const civilizations: CivilizationRepository = staticRepository(CATALOG, LOADERS)
