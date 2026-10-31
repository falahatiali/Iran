/** Shared sources, places and photos for the Safavid pages (Ismail I, Tahmasp I, Abbas I). */
import type { Coord, FeaturedSource } from '../featured/types'
import type { CommonsPhoto } from '../places/types'

export const B = (fa: string, en: string) => ({ fa, en })
export const P = {
  ARDABIL: [48.29, 38.25] as Coord, LAHIJAN: [50.0, 37.2] as Coord, ERZINCAN: [39.49, 39.75] as Coord, SHAMAKHI: [48.64, 40.63] as Coord,
  SHARUR: [45.05, 39.55] as Coord, TABRIZ: [46.29, 38.08] as Coord, CHALDIRAN: [43.95, 39.1] as Coord, KHOY: [44.95, 38.55] as Coord,
  SHIRAZ: [52.53, 29.6] as Coord, ISFAHAN: [51.67, 32.65] as Coord, BAGHDAD: [44.36, 33.31] as Coord, MERV: [61.83, 37.6] as Coord,
  HERAT: [62.2, 34.35] as Coord, GHIJDUVAN: [64.68, 40.1] as Coord, QAZVIN: [50.0, 36.27] as Coord, MASHHAD: [59.6, 36.3] as Coord,
  JAM: [60.6, 35.2] as Coord, AMASYA: [35.83, 40.65] as Coord, TIFLIS: [44.8, 41.7] as Coord, SUFIYAN: [46.05, 38.28] as Coord,
  HORMUZ: [56.46, 27.06] as Coord, BANDAR_ABBAS: [56.27, 27.18] as Coord, JULFA: [45.63, 38.95] as Coord, MAZANDARAN: [52.65, 36.55] as Coord,
}

const IR = 'Encyclopaedia Iranica'
export const sfSources: FeaturedSource[] = [
  { id: 'iranica-esmail-safavi', author: `R. M. Savory, ${IR}`, title: 'Esmāʿīl I Ṣafawī i. Biography', year: '1998, updated 2017', url: 'https://www.iranicaonline.org/articles/esmail-i-safawi/esmail-i-safawi-i-biography/', note: { fa: 'ستون اصلی صفحهٔ اسماعیل: تاریخ‌ها، چالدران و رقم سپاه‌ها.', en: 'The spine of the Ismail page: dates, Chaldiran and the army figures.' } },
  { id: 'iranica-tahmasp-i', author: `C. P. Mitchell, ${IR}`, title: 'Ṭahmāsp I', year: '2009, updated 2012', url: 'https://www.iranicaonline.org/articles/tahmasp-i/', note: { fa: 'پادشاهی تهماسب، پیمان آماسیه و انتقال پایتخت به قزوین.', en: 'Tahmasp’s reign, the Peace of Amasya and the move to Qazvin.' } },
  { id: 'iranica-abbas-i', author: `R. M. Savory, ${IR}`, title: 'ʿAbbās I', year: '1982, updated 2018', url: 'https://www.iranicaonline.org/articles/abbas-i/', note: { fa: 'ستون اصلی صفحهٔ شاه عباس: غلامان، زمین‌های خاصه و اصفهان.', en: 'The spine of the Abbas page: ghulams, crown lands and Isfahan.' } },
  { id: 'iranica-safavids', author: `R. Matthee, ${IR}`, title: 'Safavid Dynasty', year: '2008, updated 2017', url: 'https://www.iranicaonline.org/articles/safavids/', note: { fa: 'نمای کلی دودمان؛ جاهایی که با مقاله‌های دیگر فرق دارد نشان داده شده است.', en: 'The dynasty overview; where it differs from the other articles, the page says so.' } },
]
export const sfSourceIds = new Set(sfSources.map((s) => s.id))

const f = (name: string) => `https://commons.wikimedia.org/wiki/File:${name}`
const t = (path: string, name: string) => `https://upload.wikimedia.org/wikipedia/commons/thumb/${path}/${name}/1280px-${name}`
const PD = 'https://commons.wikimedia.org/wiki/Commons:Public_domain'
const BYSA4 = 'https://creativecommons.org/licenses/by-sa/4.0/'
/** Licence and author read from the Commons API on 2026-10-31. */
export const sfPhotos: CommonsPhoto[] = [
  { id: 'chaldiran-mural', src: t('d/d6', 'Shah_Ismail_at_the_Battle_of_Chaldiran._Chehel_Sotoun%2C_19th_century.jpg'), page: f('Shah_Ismail_at_the_Battle_of_Chaldiran._Chehel_Sotoun,_19th_century.jpg'), author: 'Unknown Iranian painter, Chehel Sotun, Isfahan', license: 'Public domain', licenseUrl: PD, caption: B('شاه اسماعیل در چالدران، نقاشی دیواری کاخ چهلستون اصفهان؛ سده‌ها پس از نبرد کشیده شده و تصویری از یاد است، نه گزارش.', 'Shah Ismail at Chaldiran, a wall painting in the Chehel Sotun palace, Isfahan; painted long after the battle, it is memory, not a record.') },
  { id: 'ismail-altissimo', src: t('f/f8', 'Portrait_of_Shah_Ismail_I._Inscribed_%22Ismael_Sophy_Rex_Pers%22._Painted_by_Cristofano_dell%27Altissimo%2C_dated_1552-1568.jpg'), page: f('Portrait_of_Shah_Ismail_I._Inscribed_"Ismael_Sophy_Rex_Pers"._Painted_by_Cristofano_dell\'Altissimo,_dated_1552-1568.jpg'), author: 'Cristofano dell’Altissimo, 1552–1568', license: 'Public domain', licenseUrl: PD, caption: B('«اسماعیل صوفی، شاه پارس»؛ چهره‌ای خیالی که نقاشی ایتالیایی دهه‌ها پس از مرگ او کشید.', '“Ismael Sophy Rex Pers”: an imagined likeness painted in Italy decades after his death.') },
  { id: 'gayumars', src: t('e/ec', 'The_Court_of_Gayumars.jpg'), page: f('The_Court_of_Gayumars.jpg'), author: 'Attributed to Sultan Muhammad, Shahnama of Shah Tahmasp', license: 'Public domain', licenseUrl: PD, caption: B('«بارگاه کیومرث»، منسوب به سلطان محمد، از شاهنامهٔ شاه تهماسب.', '“The Court of Gayumars”, attributed to Sultan Muhammad, from the Shahnama of Shah Tahmasp.') },
  { id: 'tahmasp-mural', src: t('a/ae', 'Shah_Tahmasp_%28circa_1647_painting%2C_Chehel_Sotun%29.jpg'), page: f('Shah_Tahmasp_(circa_1647_painting,_Chehel_Sotun).jpg'), author: 'Unknown Iranian painter, Chehel Sotun, c. 1647', license: 'Public domain', licenseUrl: PD, caption: B('شاه تهماسب در نقاشی دیواری چهلستون (حدود ۱۶۴۷)، هفتاد سال پس از مرگش.', 'Shah Tahmasp in a Chehel Sotun wall painting (c. 1647), seventy years after his death.') },
  { id: 'abbas-bishandas', src: t('6/62', 'Portrait_of_Shah_%E2%80%98Abbas_I._Attributed_to_Bishandas%2C_circa_1617.jpg'), page: f('Portrait_of_Shah_‘Abbas_I._Attributed_to_Bishandas,_circa_1617.jpg'), author: 'Attributed to Bishandas, c. 1617', license: 'Public domain', licenseUrl: PD, caption: B('شاه عباس، منسوب به بیشن‌داس، نقاش دربار گورکانی هند (حدود ۱۶۱۷).', 'Shah Abbas, attributed to Bishandas, a Mughal court painter (c. 1617).') },
  { id: 'naqsh-e-jahan', src: t('0/0c', 'Naghshe_jahan_01.jpg'), page: f('Naghshe_jahan_01.jpg'), author: 'Pedram forouzanfar', license: 'CC BY-SA 4.0', licenseUrl: BYSA4, caption: B('میدان نقش جهان (میدان شاه) اصفهان، ۲۰۲۰.', 'Naqsh-e Jahan (the Maydan-e Shah), Isfahan, 2020.') },
]
