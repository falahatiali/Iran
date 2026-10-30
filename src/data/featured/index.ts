import type { FeaturedKing } from './types'
import { dariusEvents, dariusSources, dossier as dariusDossier, synthesis as dariusSynthesis } from '../darius'

export * from './types'

const darius: FeaturedKing = {
  slug: 'darius-i',
  name: { fa: 'داریوش بزرگ', en: 'Darius I the Great' },
  dynastyName: { fa: 'هخامنشیان', en: 'Achaemenids' },
  reign: { fa: '۵۲۲–۴۸۶ پ.م.', en: '522–486 BCE' },
  title: { fa: 'داریوش بزرگ؛ شمشیر، قرارداد و مالکیت', en: 'Darius the Great: sword, contract and property' },
  lede: {
    fa: 'داریوش یکم با کودتا و نوزده نبرد به تخت رسید و سپس بزرگ‌ترین نظم اداری جهان باستان را ساخت: خراج معین، سکهٔ شاهی، راه‌ها، بایگانی‌ها و احترام به قانون‌های محلی. جنگ‌ها و ساخته‌هایش را روی نقشهٔ متحرک دنبال کنید و سپس دوران او را با عینک حقوق مالکیت و آزادی فردی بسنجید، با شواهد تاریخی، تفسیر ما و معنای امروز در سه لایهٔ جدا.',
    en: 'Darius I came to the throne by a coup and nineteen battles, then built the largest administrative order of the ancient world: fixed tribute, royal coinage, roads, archives and respect for local law. Follow his wars and works on the animated map, then weigh his reign through the lens of property rights and individual liberty — historical evidence, our interpretation and modern meaning kept in three separate layers.',
  },
  stats: [
    { n: { fa: '۱۹', en: '19' }, l: { fa: 'نبرد در «یک سال» (به ادعای بیستون)', en: 'battles in “one year” (Behistun’s claim)' } },
    { n: { fa: '~۳۰', en: '~30' }, l: { fa: 'سرزمین در فهرست نقش‌رستم', en: 'lands in the Naqsh-e Rostam list' } },
    { n: { fa: '۱۱۱', en: '111' }, l: { fa: 'منزل در راه شاهی سارد–شوش', en: 'stations on the Sardis–Susa road' } },
    { n: { fa: '۳۶', en: '36' }, l: { fa: 'سال پادشاهی', en: 'years of reign' } },
  ],
  mapTitle: { fa: 'نقشهٔ متحرک: جنگ‌ها و ساخته‌ها', en: 'Animated map: wars and works' },
  events: dariusEvents,
  span: [-522, -486],
  dossier: dariusDossier,
  synthesis: dariusSynthesis,
  sources: dariusSources,
  related: [
    { href: { fa: '/archives', en: '/en/archives' }, label: { fa: 'بایگانی تخت‌جمشید', en: 'The Persepolis archives' } },
    { href: { fa: '/cylinder', en: '/en/cylinder' }, label: { fa: 'استوانهٔ کوروش', en: 'The Cyrus Cylinder' } },
  ],
  wikipedia: 'https://en.wikipedia.org/wiki/Darius_the_Great',
}

/** Registry keyed by ruler slug. Add an entry here to give any king the extended page. */
export const featuredKings: Record<string, FeaturedKing> = { [darius.slug]: darius }

export function getFeaturedKing(slug: string): FeaturedKing | undefined {
  return Object.prototype.hasOwnProperty.call(featuredKings, slug) ? featuredKings[slug] : undefined
}
