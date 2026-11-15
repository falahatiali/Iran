import type { ReadyBook } from '../types'

/** Opens into the existing Shahnameh section. The era, verse and painting repeat src/data/shahnameh
 * (kept as literals so the library bundle does not pull in the whole Shahnameh); a test keeps them equal. */
export const shahnameh: ReadyBook = {
  slug: 'shahnameh',
  status: 'ready',
  title: 'شاهنامه',
  author: 'فردوسی',
  shelf: 1,
  order: 3,
  spine: { leather: '#7a1626', width: 62, height: 208 },
  href: '/shahnameh',
  genre: 'حماسه · مثنوی',
  authorFull: 'فردوسی',
  era: 'پایان سرایش حدود ۴۰۰ ق',
  blurb: 'نامهٔ شاهان از کیومرث تا فرجام ساسانیان، با روایت خانوادگی و بیت‌های اصیل.',
  cover: '/media/library/cover-shahnameh',
  headpiece: {
    src: '/media/shahnameh/gayumars-court-800.webp',
    srcSet: '/media/shahnameh/gayumars-court-800.webp 800w, /media/shahnameh/gayumars-court.webp 1280w',
  },
  incipit: ['به نام خداوندِ جان و خرد', 'کز این برتر، اندیشه، بر نگذرد'],
  arrivalMarker: 'shahnameh',
}
