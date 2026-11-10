export type GlossaryEntry = {
  word: string
  meaning: string
}

export type VerseNote = {
  meaning: string
  glossary?: GlossaryEntry[]
  artistry?: string
}

export type StoryPoemCommentary = {
  slug: string
  status: 'complete' | 'in-progress'
  notes: Record<string, VerseNote>
}
