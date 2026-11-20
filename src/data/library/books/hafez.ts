import type { ReadyBook } from '../types'

/** Hafez's Divan: Ganjoor's 495 ghazals with Ganjoor's meanings; text and facts are sourced in ../hafez. */
export const hafez: ReadyBook = {
  slug: 'hafez',
  status: 'ready',
  title: 'دیوان حافظ',
  author: 'حافظ',
  shelf: 2,
  order: 1,
  spine: { leather: '#1d3f6e', width: 54, height: 204 },
  href: '/library/hafez',
  genre: 'غزل · عرفان',
  authorFull: 'خواجه شمس‌الدین محمد حافظ شیرازی',
  era: 'سدهٔ هشتم هجری',
  blurb: 'غزل‌های لسان‌الغیب، هر ۴۹۵ غزل با معنی بیت به بیت؛ و فال حافظ.',
  cover: '/media/library/cover-hafez',
  headpiece: {
    src: '/media/library/hafez-garden-960.webp',
    srcSet: '/media/library/hafez-garden-640.webp 640w, /media/library/hafez-garden-960.webp 960w, /media/library/hafez-garden-1280.webp 1280w',
    avifSrcSet: '/media/library/hafez-garden-640.avif 640w, /media/library/hafez-garden-960.avif 960w, /media/library/hafez-garden-1280.avif 1280w',
  },
  incipit: ['اَلا یا اَیُّهَا السّاقی اَدِرْ کَأسَاً و ناوِلْها', 'که عشق آسان نمود اوّل ولی افتاد مشکل‌ها'],
  arrivalMarker: 'hafez',
}
