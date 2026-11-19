import type { ReadyBook } from '../types'

/** Khayyam's quatrains in Sadegh Hedayat's selection; text and facts are sourced in ../khayyam. */
export const khayyam: ReadyBook = {
  slug: 'khayyam',
  status: 'ready',
  title: 'رباعیات خیام',
  author: 'خیام',
  shelf: 2,
  order: 4,
  spine: { leather: '#6a1f3e', width: 46, height: 192 },
  href: '/library/khayyam',
  genre: 'رباعی · حکمت',
  authorFull: 'حکیم عمر خیام نیشابوری',
  era: 'سدهٔ پنجم و ششم هجری',
  blurb: 'رباعی‌هایی دربارهٔ راز هستی، گذر عمر و دمی که باید دریافت؛ به گزینش صادق هدایت.',
  cover: '/media/library/cover-khayyam',
  headpiece: {
    src: '/media/library/khayyam-night-960.webp',
    srcSet: '/media/library/khayyam-night-640.webp 640w, /media/library/khayyam-night-960.webp 960w, /media/library/khayyam-night-1280.webp 1280w',
    avifSrcSet: '/media/library/khayyam-night-640.avif 640w, /media/library/khayyam-night-960.avif 960w, /media/library/khayyam-night-1280.avif 1280w',
  },
  incipit: ['این قافلهٔ عمر عجب می‌گذرد!', 'دریاب دمی که با طَرَب می‌گذرد'],
  arrivalMarker: 'khayyam',
}
