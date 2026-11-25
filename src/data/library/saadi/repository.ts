import type { SaadiBook } from './paths'
import type { BookIndex, SaadiRepository, Section } from './types'

/** One lazy chunk per section: a section's page loads only its own file. */
const sections = import.meta.glob<{ default: Section }>(['./text/*/*-*.json'])
const indexes: Record<SaadiBook, () => Promise<{ default: unknown }>> = {
  bustan: () => import('./text/bustan/index.json'),
  golestan: () => import('./text/golestan/index.json'),
}

export const jsonSaadi: SaadiRepository = {
  index: async (book) => (await indexes[book]()).default as BookIndex,
  section: async (book, chapter, n) => (await sections[`./text/${book}/${chapter}-${n}.json`]?.())?.default,
}

/** The one place to swap the store. */
export const saadi: SaadiRepository = jsonSaadi
