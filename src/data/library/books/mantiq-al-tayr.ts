import type { ReadyBook } from '../types'

/** Attar's Conference of the Birds. Facts and verses are sourced in ../mantiq (Ganjoor, Encyclopaedia Iranica). */
export const mantiqAlTayr: ReadyBook = {
  slug: 'mantiq-al-tayr',
  status: 'ready',
  title: 'منطق‌الطیر',
  author: 'عطار',
  shelf: 1,
  order: 4,
  spine: { leather: '#0d4a4a', width: 41, height: 198, titleSize: 19 },
  href: '/library/mantiq-al-tayr',
  genre: 'عرفان · مثنوی',
  authorFull: 'فریدالدین عطار نیشابوری',
  era: 'سدهٔ ششم هجری',
  blurb: 'سفر مرغان به رهبری هدهد در جست‌وجوی سیمرغ، از گذرگاه هفت وادی.',
  cover: '/media/library/cover-mantiq-al-tayr',
  headpiece: {
    src: '/media/library/simorgh-960.webp',
    srcSet: '/media/library/simorgh-640.webp 640w, /media/library/simorgh-960.webp 960w, /media/library/simorgh-1280.webp 1280w',
    avifSrcSet: '/media/library/simorgh-640.avif 640w, /media/library/simorgh-960.avif 960w, /media/library/simorgh-1280.avif 1280w',
  },
  incipit: ['آفرین جان‌آفرین پاک را', 'آن که جان بخشید و ایمان خاک را'],
  arrivalMarker: 'mantiq-al-tayr',
}
