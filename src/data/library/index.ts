/** The library registry. To add a book: write ./books/<slug>.ts and list it here.
 * A 'soon' book is a greyed spine; switching it to 'ready' (with an href and its page) makes it open. */
import { bustan } from './books/bustan'
import { golestan } from './books/golestan'
import { hafez } from './books/hafez'
import { khamseh } from './books/khamseh'
import { khayyam } from './books/khayyam'
import { mantiqAlTayr } from './books/mantiq-al-tayr'
import { masnavi } from './books/masnavi'
import { shahnameh } from './books/shahnameh'
import { isReady, type LibraryBook, type ReadyBook } from './types'

export * from './types'

export const LIBRARY_PATH = '/library'

export const BOOKS: readonly LibraryBook[] = [khamseh, masnavi, shahnameh, mantiqAlTayr, hafez, golestan, bustan, khayyam]

export function bookBySlug(slug: string): LibraryBook | undefined {
  return BOOKS.find((b) => b.slug === slug)
}

export function readyBook(slug: string): ReadyBook {
  const b = bookBySlug(slug)
  if (!b || !isReady(b)) throw new Error(`no ready library book: ${slug}`)
  return b
}

/** The named books of one shelf, in shelf order. */
export function shelfBooks(shelf: LibraryBook['shelf']): LibraryBook[] {
  return BOOKS.filter((b) => b.shelf === shelf).sort((a, b) => a.order - b.order)
}

/** Ready books first, then the coming ones, for the list under the bookcase. */
export function catalogue(): LibraryBook[] {
  return [...BOOKS].sort((a, b) => Number(isReady(b)) - Number(isReady(a)) || a.shelf - b.shelf || a.order - b.order)
}

/** Paths the library adds to the sitemap: the hall and every ready book page that lives under it
 * (the Shahnameh is listed by its own section). */
export function librarySitemapPaths(): string[] {
  return [LIBRARY_PATH, ...BOOKS.filter(isReady).map((b) => b.href).filter((h) => h.startsWith(`${LIBRARY_PATH}/`))]
}
