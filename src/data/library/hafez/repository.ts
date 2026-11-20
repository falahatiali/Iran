import type { DivanRepository, Ghazal, GhazalIndex } from './types'

/** One lazy chunk per ghazal: a ghazal's page loads only its own file. */
const files = import.meta.glob<{ default: Ghazal }>('./text/ghazals/*.json')

export const jsonDivan: DivanRepository = {
  index: () => import('./text/index.json').then((m) => m.default as unknown as GhazalIndex),
  ghazal: async (n) => (await files[`./text/ghazals/${n}.json`]?.())?.default,
}

/** The one place to swap the store. */
export const divan: DivanRepository = jsonDivan
