import type { ReadyBook } from '../types'

/** Saadi’s Bustan: Ganjoor's text with Ganjoor's meanings; text and facts are sourced in ../saadi. */
export const bustan: ReadyBook = {
  slug: 'bustan',
  status: 'ready',
  title: 'بوستان سعدی',
  author: 'سعدی',
  shelf: 2,
  order: 3,
  spine: { leather: '#2f5a2a', width: 48, height: 200 },
  href: '/library/bustan',
  genre: 'مثنوی · اخلاق',
  authorFull: 'مصلح‌الدین سعدی شیرازی',
  era: 'سدهٔ هفتم هجری',
  blurb: 'ده باب در عدل و احسان و عشق، حکایت به حکایت با معنی بیت به بیت.',
  cover: '/media/library/cover-bustan',
  headpiece: {
    src: '/media/library/bustan-garden-960.webp',
    srcSet: '/media/library/bustan-garden-640.webp 640w, /media/library/bustan-garden-960.webp 960w, /media/library/bustan-garden-1280.webp 1280w',
    avifSrcSet: '/media/library/bustan-garden-640.avif 640w, /media/library/bustan-garden-960.avif 960w, /media/library/bustan-garden-1280.avif 1280w',
  },
  incipit: ['به نام خداوندِ جان‌آفرین', 'حکیمِ سخن‌ در زبان‌آفرین'],
  arrivalMarker: 'bustan',
}
