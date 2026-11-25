import type { ThemeMap, DivanRepository, Ghazal, GhazalEntry, GhazalIndex, LetterEntry, MontasabEntry, Poem, Sharh, SharhEntry } from './types'

/** One lazy chunk per ghazal: a ghazal's page loads only its own file. */
const files = import.meta.glob<{ default: Ghazal }>('./text/ghazals/*.json')
const letterFiles = import.meta.glob<{ default: GhazalEntry[] }>('./text/letters/*.json')
const sharhFiles = import.meta.glob<{ default: Sharh }>(['./sharh/*.json', '!./sharh/index.json'])
const attributed = import.meta.glob<{ default: Poem }>(['./text/montasab/*.json', '!./text/montasab/index.json'])

export const jsonDivan: DivanRepository = {
  index: () => import('./text/index.json').then((m) => m.default as unknown as GhazalIndex),
  robaiyat: () => import('./text/robaiyat.json').then((m) => m.default as unknown as readonly Ghazal[]),
  qetaat: () => import('./text/qetaat.json').then((m) => m.default as unknown as readonly Ghazal[]),
  masnavi: () => import('./text/masnavi.json').then((m) => m.default as unknown as readonly Poem[]),
  qasaid: () => import('./text/qasaid.json').then((m) => m.default as unknown as readonly Poem[]),
  moqaddame: () => import('./text/moqaddame.json').then((m) => m.default as unknown as readonly Poem[]),
  montasabIndex: () => import('./text/montasab/index.json').then((m) => m.default as unknown as readonly MontasabEntry[]),
  montasab: async (n) => (await attributed[`./text/montasab/${n}.json`]?.())?.default as Poem | undefined,
  letters: () => import('./text/letters.json').then((m) => m.default as unknown as readonly LetterEntry[]),
  letter: async (slug) => (await letterFiles[`./text/letters/${slug}.json`]?.())?.default,
  themes: () => import('./text/themes.json').then((m) => m.default as unknown as ThemeMap),
  sharhIndex: () => import('./sharh/index.json').then((m) => m.default as unknown as readonly SharhEntry[]),
  sharh: async (n) => (await sharhFiles[`./sharh/${n}.json`]?.())?.default,
  ghazal: async (n) => (await files[`./text/ghazals/${n}.json`]?.())?.default,
}

/** The one place to swap the store. */
export const divan: DivanRepository = jsonDivan
