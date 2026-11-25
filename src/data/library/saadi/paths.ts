/** Saadi's two books in the library: URLs only, so the hall and the sitemap can import them cheaply. */
import meta from './text/meta.json'

export type SaadiBook = 'bustan' | 'golestan'
export const SAADI_BOOKS: readonly SaadiBook[] = ['bustan', 'golestan']
export const SAADI_PATH = '/library/saadi'
export const bookPath = (b: SaadiBook) => `/library/${b}`
export const chapterPath = (b: SaadiBook, ch: string) => `/library/${b}/${ch}`
export const sectionPath = (b: SaadiBook, ch: string, n: number) => `/library/${b}/${ch}/${n}`

/** chapter slug, number of sections and title, in the book's order (from the extracted data) */
export const chapterCounts = (b: SaadiBook) => meta.books[b].chapters as unknown as readonly (readonly [string, number, string])[]

export function saadiPaths(): string[] {
  const out: string[] = [SAADI_PATH]
  for (const b of SAADI_BOOKS) {
    for (const [ch, count] of chapterCounts(b)) {
      out.push(chapterPath(b, ch))
      for (let n = 1; n <= count; n++) out.push(sectionPath(b, ch, n))
    }
  }
  return out
}
