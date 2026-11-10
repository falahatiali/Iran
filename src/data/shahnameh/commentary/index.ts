import type { StoryPoemCommentary } from './types'
import { hushangCommentary } from './hushang'
import { keyumarsCommentary } from './keyumars'

const bySlug: Record<string, StoryPoemCommentary> = {
  keyumars: keyumarsCommentary,
  hushang: hushangCommentary,
}

export type { GlossaryEntry, StoryPoemCommentary, VerseNote } from './types'

export function getCommentary(slug: string): StoryPoemCommentary {
  return bySlug[slug] ?? { slug, status: 'in-progress', notes: {} }
}

export function commentaryIsComplete(slug: string) {
  return getCommentary(slug).status === 'complete'
}
