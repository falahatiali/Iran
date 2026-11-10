export type PoemCouplet = {
  n: number
  a: string
  b: string
}

export type PoemSection = {
  ganjoorId: number
  title: string
  fullTitle: string
  url: string
  apiUrl: string
  fullUrl: string
  coupletCount: number
  range: { from: number; to: number }
  couplets: PoemCouplet[]
}

export type StoryPoemText = {
  slug: string
  fetchedAt: string
  source: string
  edition: string
  poemCount: number
  coupletCount: number
  poems: PoemSection[]
}
