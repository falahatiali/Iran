/** The catalog of civilizations: the light list the home box, the landing grid, the map and the chronology read.
 * Full pages live in ./content/<slug>.ts and are loaded on demand (see ./repository.ts). Ordered by start date. */
import type { CivSummary } from './types'

export const CATALOG: readonly CivSummary[] = [
  {
    slug: 'ganj-dareh', name: 'گنج‌دره', latin: 'Ganj Dareh', era: 'neolithic', span: [-8200, -7900], spanLabel: 'حدود ۱۰٬۲۰۰ سال پیش',
    region: 'هرسین، کرمانشاه', coord: [47.476, 34.272], accent: '#8fbf6a', emblem: 'goat',
    tagline: 'کهن‌ترین گواه اهلی‌شدن بز در جهان، در دل زاگرس.',
  },
  {
    slug: 'sialk', name: 'تپه سیلک', latin: 'Tepe Sialk', era: 'chalcolithic', span: [-6000, -700], spanLabel: 'حدود ۶۰۰۰ پ.م. تا هزارهٔ یکم پ.م.',
    region: 'کاشان، اصفهان', coord: [51.405, 33.969], accent: '#e0a458', emblem: 'pot',
    tagline: 'دو تپه و دو گورستان در کاشان؛ سفال‌هایی با نقش بز کوهی و سکویی پلکانی.',
  },
  {
    slug: 'susa', name: 'شوش', latin: 'Susa', era: 'elamite', span: [-4200, 1250], spanLabel: 'پایان هزارهٔ پنجم پ.م. تا سدهٔ سیزدهم م.',
    region: 'شوش، خوزستان', coord: [48.257, 32.19], accent: '#2ec4b6', emblem: 'column',
    tagline: 'بیست‌وهفت لایه شهر روی هم؛ پایتخت ایلام و هخامنشیان.',
  },
  {
    slug: 'shahr-e-sukhteh', name: 'شهر سوخته', latin: 'Shahr-e Sukhteh', era: 'bronze', span: [-3200, -1800], spanLabel: 'حدود ۳۲۰۰ تا ۱۸۰۰ پ.م.',
    region: 'زابل، سیستان و بلوچستان', coord: [61.327, 30.595], accent: '#e76f51', emblem: 'eye',
    tagline: 'شهری بر چهارراه عصر مفرغ؛ چشم مصنوعی، صفحهٔ بازی و هزاران گور.',
  },
  {
    slug: 'jiroft', name: 'جیرفت و کنار صندل', latin: 'Jiroft / Konar Sandal', era: 'bronze', span: [-2500, -2000], spanLabel: 'نیمهٔ دوم هزارهٔ سوم پ.م.',
    region: 'دره هلیل‌رود، کرمان', coord: [57.8, 28.45], accent: '#5fa8d3', emblem: 'snake',
    tagline: 'ظرف‌های کلریتی پرنقش، ارگی بزرگ کنار هلیل‌رود و بحثی که هنوز باز است.',
  },
  {
    slug: 'chogha-zanbil', name: 'چغازنبیل', latin: 'Chogha Zanbil', era: 'elamite', span: [-1250, -1000], spanLabel: 'حدود ۱۲۵۰ پ.م.',
    region: 'شوش، خوزستان', coord: [48.522, 32.009], accent: '#c9a227', emblem: 'ziggurat',
    tagline: 'شهر مقدس اونتاش‌ناپیریشا و بزرگ‌ترین زیگورات بیرون از میان‌رودان.',
  },
]

export const civSummary = (slug: string) => CATALOG.find((c) => c.slug === slug)

export function summaryOf(slug: string): CivSummary {
  const s = civSummary(slug)
  if (!s) throw new Error(`unknown civilization: ${slug}`)
  return s
}

export const civPath = (slug: string) => `/civilizations/${slug}`
