import type { ReadyBook } from '../types'

/** Saadi’s Golestan: Ganjoor's text with Ganjoor's meanings; text and facts are sourced in ../saadi. */
export const golestan: ReadyBook = {
  slug: 'golestan',
  status: 'ready',
  title: 'گلستان سعدی',
  author: 'سعدی',
  shelf: 2,
  order: 2,
  spine: { leather: '#6b4a12', width: 50, height: 196 },
  href: '/library/golestan',
  genre: 'نثر و نظم · حکایت',
  authorFull: 'مصلح‌الدین سعدی شیرازی',
  era: 'سدهٔ هفتم هجری',
  blurb: 'هشت باب حکایت و حکمت، بند به بند با معنی.',
  cover: '/media/library/cover-golestan',
  headpiece: {
    src: '/media/library/golestan-roses-960.webp',
    srcSet: '/media/library/golestan-roses-640.webp 640w, /media/library/golestan-roses-960.webp 960w, /media/library/golestan-roses-1280.webp 1280w',
    avifSrcSet: '/media/library/golestan-roses-640.avif 640w, /media/library/golestan-roses-960.avif 960w, /media/library/golestan-roses-1280.avif 1280w',
  },
  incipit: ['به چه کار آیدت ز گل طبقی؟', 'از گلستان من بِبَر ورقی'],
  arrivalMarker: 'golestan',
}
