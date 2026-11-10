export type EraId = 'pishdadian' | 'kayanian' | 'sasanian'

export type Couplet = {
  lines: [string, string]
  n: number
  poemUrl: string
  poemTitle: string
  meaning: string
}

export type Character = {
  id: string
  name: string
  role: string
  blurb: string
}

export type ChoiceOption = {
  id: string
  text: string
  feedback: string
  correct?: boolean
}

export type Interactive = {
  type: 'choice' | 'quiz'
  question: string
  options: ChoiceOption[]
}

export type StorySection = {
  id: string
  title: string
  paragraphs: string[]
}

export type Photo = {
  id: string
  src: string
  src800: string
  width: number
  height: number
  page: string
  title: string
  titleFa: string
  artist: string
  manuscript: string
  license: string
  alt: string
}

export type Story = {
  slug: string
  era: EraId
  order: number
  status: 'ready'
  title: string
  titleEn: string
  epithet: string
  epithetEn: string
  summary: string
  summaryEn: string
  lede: string
  readingMinutes: number
  heroId: string
  sections: StorySection[]
  verses: Couplet[]
  characters: Character[]
  ourView: string[]
  interactive: Interactive
  sources: string[]
}

export type SoonStory = {
  slug: string
  era: EraId
  order: number
  status: 'soon'
  title: string
  titleEn: string
  epithet: string
  summary: string
  summaryEn: string
  heroId?: string
}

export type CatalogEntry = Story | SoonStory

export type EraInfo = {
  id: EraId
  title: string
  titleEn: string
  kicker: string
  blurb: string
  blurbEn: string
}
