/** The literature library: one record per book on the shelves.
 * The landing page, the opening animation, the sitemap and the tests read only these records,
 * so a new book is one file in ./books plus, once it is ready, its own page. */

/** A responsive image set: AVIF and WebP at the listed widths, `${base}-${w}.avif|webp`. */
export interface ImageSet {
  base: string
  widths: readonly number[]
  /** intrinsic width / height of the source, to reserve space and avoid layout shift */
  aspect: number
}

/** Leather colour and gilt of a spine; any CSS colour. */
export interface SpineStyle {
  leather: string
  /** spine width and height in px at desktop scale */
  width: number
  height: number
  /** title size on the spine, px; narrow spines need a smaller one */
  titleSize?: number
}

interface BookBase {
  slug: string
  title: string
  author: string
  shelf: 1 | 2
  /** left-to-right position among the named books of its shelf (RTL: 1 is rightmost) */
  order: number
  spine: SpineStyle
}

/** A book that opens: it has a page of its own and is animated off the shelf. */
export interface ReadyBook extends BookBase {
  status: 'ready'
  /** the page the book opens into */
  href: string
  /** hover-card lines; every fact here is sourced on the book's own page */
  genre: string
  authorFull: string
  era: string
  blurb: string
  /** front cover texture for the 3D book, `${cover}.avif|webp` */
  cover: string
  /** the picture on the book's first page; the same image heads the destination page so the hand-off is seamless */
  headpiece: { src: string; srcSet?: string; avifSrcSet?: string }
  /** first lines shown on the opened page, from the destination page's sourced text */
  incipit: readonly [string, string]
  /** the destination route renders an element with data-book-arrival={slug}; the animation waits for it */
  arrivalMarker: string
}

/** A greyed spine: on the shelf, not yet a page. */
export interface SoonBook extends BookBase {
  status: 'soon'
}

export type LibraryBook = ReadyBook | SoonBook

export const isReady = (b: LibraryBook): b is ReadyBook => b.status === 'ready'
