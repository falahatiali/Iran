import { MANTIQ_GROUPS, MANTIQ_SECTIONS, MANTIQ_TOTAL_COUPLETS } from './sections.gen'
import type { MantiqNotes, MantiqSectionMeta, MantiqText } from './types'
import { textLoaders } from './text/load.gen'
import { notesLoaders } from './notes/load.gen'

export { MANTIQ_GROUPS, MANTIQ_SECTIONS, MANTIQ_TOTAL_COUPLETS }

export const MANTIQ_PATH = '/library/mantiq-al-tayr'
export const sectionPath = (slug: string) => `${MANTIQ_PATH}/${slug}`
/** id of a bayt on its section page; also the URL hash for a verse link */
export const baytAnchor = (partId: number, n: number) => `b-${partId}-${n}`
export const noteKey = (partId: number, n: number) => `${partId}:${n}`

export function sectionBySlug(slug: string): MantiqSectionMeta | undefined {
  return MANTIQ_SECTIONS.find((s) => s.slug === slug)
}

export function neighbours(slug: string) {
  const i = MANTIQ_SECTIONS.findIndex((s) => s.slug === slug)
  return { prev: i > 0 ? MANTIQ_SECTIONS[i - 1] : undefined, next: i >= 0 ? MANTIQ_SECTIONS[i + 1] : undefined }
}

export function sectionsByGroup() {
  return MANTIQ_GROUPS.map((g) => ({ ...g, sections: MANTIQ_SECTIONS.filter((s) => s.group === g.id) }))
}

export const groupTitle = (id: string) => MANTIQ_GROUPS.find((g) => g.id === id)?.title ?? ''

export const hasNotes = (slug: string) => slug in notesLoaders

/** The section's verbatim text (its own lazy chunk). */
export async function loadMantiqText(slug: string): Promise<MantiqText | undefined> {
  return textLoaders[slug]?.()
}

/** The section's per-bayt notes, or an empty set for a section that is text-only so far. */
export async function loadMantiqNotes(slug: string): Promise<MantiqNotes> {
  return (await notesLoaders[slug]?.()) ?? { slug, status: 'none', notes: {} }
}
