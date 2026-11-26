import { BOOKS, LIBRARY_PATH, isReady } from '../../data/library'
import { SITE_NAME, SITE_URL, type seo } from '../../lib/seo'
import { BOOK_LD, type Crumb, type WorkLd, breadcrumbList, creativeWork, ldScript } from '../../lib/structuredData'

/** The library's title face, preloaded on its pages only (see naskh.css). */
export const NASKH_PRELOAD = { rel: 'preload', href: '/fonts/NotoNaskhArabic-Bold-fa.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' } as const

type SeoHead = ReturnType<typeof seo>

export interface LibraryHeadOptions {
  /** crumbs between the book and this page (a chapter, «غزلیات», …) */
  crumbs?: readonly Crumb[]
  /** the last crumb's name; defaults to the page title */
  leaf?: string
  /** a poem, story or chapter page: described as a CreativeWork inside its book */
  work?: Omit<WorkLd, 'path'>
}

/** Head for every library page: the seo() tags, the Naskh preload and one JSON-LD graph
 * (BreadcrumbList, plus a Book on a book's landing page or a CreativeWork on a poem or story page). */
export function libraryHead(s: SeoHead, o: LibraryHeadOptions = {}) {
  const canonical = s.links.find((l) => l.rel === 'canonical')?.href ?? SITE_URL
  const path = canonical.slice(SITE_URL.length) || '/'
  const full = s.meta.find((m) => m.title)?.title ?? SITE_NAME
  const title = full.replace(` | ${SITE_NAME}`, '')
  const book = BOOKS.filter(isReady).find((b) => path === b.href || path.startsWith(`${b.href}/`))
  const ld = book ? BOOK_LD[book.slug] : undefined

  const crumbs: Crumb[] = [{ name: SITE_NAME, path: '/' }]
  if (path !== LIBRARY_PATH) crumbs.push({ name: 'کتابخانه', path: LIBRARY_PATH })
  if (book && path !== book.href) crumbs.push({ name: book.title, path: book.href })
  crumbs.push(...(o.crumbs ?? []), { name: o.leaf ?? (book && path === book.href ? book.title : title), path })

  const nodes: object[] = [breadcrumbList(crumbs)]
  if (book && ld && path === book.href) {
    nodes.push(creativeWork({ name: book.title, path, author: ld.author, sameAs: ld.sameAs }, 'Book'))
  } else if (book && o.work) {
    nodes.push(creativeWork({ author: ld?.author, partOf: { name: book.title, path: book.href, sameAs: ld?.sameAs }, ...o.work, path }))
  }
  return { ...s, links: [...s.links, NASKH_PRELOAD], scripts: [ldScript(nodes)] }
}
