/** Shared sources, places and photos for the Qajar pages (Agha Mohammad Khan to Mozaffar al-Din Shah). */
import type { Coord, FeaturedSource } from '../featured/types'
import type { CommonsPhoto } from '../places/types'

export const B = (fa: string, en: string) => ({ fa, en })
export const P = {
  TEHRAN: [51.39, 35.69] as Coord, TABRIZ: [46.29, 38.08] as Coord, SHIRAZ: [52.53, 29.6] as Coord, KERMAN: [57.08, 30.28] as Coord,
  SARI: [53.06, 36.56] as Coord, DAMGHAN: [54.34, 36.17] as Coord, ARDABIL: [48.3, 38.25] as Coord, MOGHAN: [48.0, 39.6] as Coord,
  TIFLIS: [44.8, 41.7] as Coord, SHUSHA: [46.75, 39.76] as Coord, ERIVAN: [44.51, 40.18] as Coord, GANJA: [46.36, 40.68] as Coord,
  ASLANDUZ: [47.42, 39.43] as Coord, LANKARAN: [48.85, 38.75] as Coord, GOLESTAN: [46.33, 40.33] as Coord, SOLTANIYEH: [48.8, 36.43] as Coord,
  ECHMIADZIN: [44.29, 40.16] as Coord, NAKHCHIVAN: [45.41, 39.21] as Coord, TURKMANCHAY: [47.4, 37.6] as Coord, ISFAHAN: [51.67, 32.65] as Coord,
  KASHAN: [51.38, 33.95] as Coord, QOM: [50.88, 34.64] as Coord, SAMARRA: [43.87, 34.2] as Coord, REY: [51.43, 35.59] as Coord,
}

const IR = 'Encyclopaedia Iranica'
const ir = (slug: string) => `https://www.iranicaonline.org/articles/${slug}/`
export const qjSources: FeaturedSource[] = [
  { id: 'iranica-aga-mohammad-khan', author: `G. R. G. Hambly, ${IR}`, title: 'Āḡā Moḥammad Khan Qājār', year: '1984', url: ir('aga-mohammad-khan'), note: B('ستون بخش آقامحمدخان: گروگانی، کرمان، تفلیس، تاج‌گذاری و قتل.', 'The spine of the Agha Mohammad Khan section: captivity, Kerman, Tiflis, coronation and murder.') },
  { id: 'iranica-fath-ali-shah', author: `A. Amanat, ${IR}`, title: 'Fatḥ-ʿAlī Shah Qājār', year: '1999, updated 2014', url: ir('fath-ali-shah'), note: B('ستون صفحهٔ فتحعلی‌شاه: جانشینی، دربار، دیپلماسی و غرامت.', 'The spine of the Fath-Ali Shah page: succession, court, diplomacy and the indemnity.') },
  { id: 'iranica-abbas-mirza', author: `H. Busse, ${IR}`, title: 'ʿAbbās Mīrzā Qajar', year: '1982', url: ir('abbas-mirza'), note: B('ولیعهد و فرمانده در هر دو جنگ با روسیه.', 'The crown prince and commander in both wars with Russia.') },
  { id: 'iranica-golestan', author: IR, title: 'Golestan Treaty', year: 'online edition', url: ir('golestan-treaty'), note: B('زمینه، تاریخ‌های ناهمخوان و پیامدهای عهدنامهٔ گلستان.', 'Background, conflicting dates and consequences of the Golestan treaty.') },
  { id: 'iranica-russia-i', author: IR, title: 'Russia i. Russo-Iranian relations up to the Bolshevik Revolution', year: 'online edition', url: ir('russia-i'), note: B('روند جنگ اول ایران و روس (۱۸۰۴–۱۸۱۳) و جنگ دوم.', 'The course of the first Russo-Persian war (1804–1813) and the second.') },
  { id: 'hurewitz-1956', author: 'J. C. Hurewitz', title: 'Diplomacy in the Near and Middle East: A Documentary Record, vol. I (1535–1914)', year: '1956', url: 'https://archive.org/details/diplomacyinnearm1956hure', note: B('ترجمهٔ انگلیسی منتشرشدهٔ متن عهدنامه‌های گلستان و ترکمانچای؛ نقل‌قول‌ها عیناً از این کتاب است.', 'The published English translation of the Golestan and Turkmanchay treaties; the treaty quotations are taken word for word from it.') },
]
export const qjSourceIds = new Set(qjSources.map((s) => s.id))

const f = (name: string) => `https://commons.wikimedia.org/wiki/File:${name}`
const PD = 'https://commons.wikimedia.org/wiki/Commons:Public_domain'
/** Licence and author read from the Commons API on 2026-10-31. */
export const qjPhotos: CommonsPhoto[] = [
  { id: 'fath-ali-mihr-ali', src: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Mihr_%27Ali_%28Iranian%2C_active_ca._1800-1830%29._Portrait_of_Fath_%27Ali_Shah_Qajar%2C_1815.jpg', page: f("Mihr_'Ali_(Iranian,_active_ca._1800-1830)._Portrait_of_Fath_'Ali_Shah_Qajar,_1815.jpg"), author: 'Mihr ʿAli (Brooklyn Museum)', license: 'Public domain', licenseUrl: PD, caption: B('چهرهٔ فتحعلی‌شاه، کار مهرعلی، ۱۸۱۵ م، موزهٔ بروکلین.', 'Portrait of Fath-Ali Shah by Mihr ʿAli, 1815, Brooklyn Museum.') },
]
