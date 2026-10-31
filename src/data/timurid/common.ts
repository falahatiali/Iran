/** Shared sources, places and photos for the Timurid pages (Timur, with Shahrukh, Gowharshad and Ulugh Beg). */
import type { Coord, FeaturedSource } from '../featured/types'
import type { CommonsPhoto } from '../places/types'

export const B = (fa: string, en: string) => ({ fa, en })
export const P = {
  KESH: [66.83, 39.05] as Coord, SAMARQAND: [66.96, 39.65] as Coord, BALKH: [66.9, 36.76] as Coord, HERAT: [62.2, 34.35] as Coord,
  ISFAHAN: [51.67, 32.65] as Coord, SHIRAZ: [52.53, 29.6] as Coord, SULTANIYYA: [48.79, 36.43] as Coord, BAGHDAD: [44.36, 33.31] as Coord,
  TEREK: [45.0, 43.5] as Coord, SARAI: [47.9, 46.6] as Coord, DELHI: [77.2, 28.6] as Coord, ALEPPO: [37.16, 36.2] as Coord,
  DAMASCUS: [36.29, 33.51] as Coord, ANKARA: [32.85, 39.93] as Coord, OTRAR: [68.3, 42.85] as Coord, KAN_I_GIL: [67.05, 39.62] as Coord,
  MALATYA: [38.31, 38.35] as Coord, KABUL: [69.18, 34.53] as Coord, TABRIZ: [46.29, 38.08] as Coord,
}

export const timSources: FeaturedSource[] = [
  { id: 'roemer-chi', author: 'H. R. Roemer, Cambridge History of Iran, vol. 6', title: 'Tīmūr in Iran; The Successors of Tīmūr', year: '1986', url: 'https://archive.org/details/roemer-1986-timur-successors', note: { fa: 'ستون اصلی این صفحه: لشکرکشی‌ها، تاریخ‌ها و داوری دربارهٔ تیمور و جانشینانش.', en: 'The spine of this page: the campaigns, the dates and the assessment of Timur and his successors.' } },
  { id: 'iranica-gowharshad', author: 'B. F. Manz, Encyclopaedia Iranica', title: 'Gowhar-šād Āḡā', year: '2002, updated 2017', url: 'https://www.iranicaonline.org/articles/gowhar-sad-aga/', note: { fa: 'زندگی، ساختمان‌ها و مرگ گوهرشاد.', en: 'Gowharshad’s life, buildings and death.' } },
  { id: 'iranica-islam-timurid', author: 'H. Algar, Encyclopaedia Iranica', title: 'Iran ix. Religions in Iran (2.2): Mongol and Timurid Periods', year: '2006, updated 2016', url: 'https://www.iranicaonline.org/articles/iran-ix1-religions-in-iran/iran-ix2-islam-in-iran/iran-ix22-mongol-and-timurid-periods/', note: { fa: 'دین تیمور و پشتیبانی‌اش از دانشمندان سنی.', en: 'Timur’s religion and his patronage of Sunni scholars.' } },
]
export const timSourceIds = new Set(timSources.map((s) => s.id))

const f = (name: string) => `https://commons.wikimedia.org/wiki/File:${name}`
const PD = 'https://commons.wikimedia.org/wiki/Commons:Public_domain'
/** Licence and author read from the Commons API on 2026-10-31. */
export const timPhotos: CommonsPhoto[] = [
  { id: 'timur-1436', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Portrait_of_Timur_%28d.1405%29%2C_as_commissioned_by_his_grandson_Ibrahim_Sultan_in_the_1436_Zafarnama.jpg/1280px-Portrait_of_Timur_%28d.1405%29%2C_as_commissioned_by_his_grandson_Ibrahim_Sultan_in_the_1436_Zafarnama.jpg', page: f('Portrait_of_Timur_(d.1405),_as_commissioned_by_his_grandson_Ibrahim_Sultan_in_the_1436_Zafarnama.jpg'), author: 'Painter of the 1436 Zafarnama', license: 'Public domain', licenseUrl: PD, caption: B('تیمور در ظفرنامهٔ ۱۴۳۶، سی سال پس از مرگش؛ نگاره‌ای درباری، نه پرتره.', 'Timur in the 1436 Zafarnama, thirty years after his death: a court image, not a portrait.') },
  { id: 'toqtamish-1436', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Battle_between_Timur_and_Toqtamish_Khan_in_18_June_1391._Zafarnama_of_1436%2C_facing_folios_208v-207r.jpg/1280px-Battle_between_Timur_and_Toqtamish_Khan_in_18_June_1391._Zafarnama_of_1436%2C_facing_folios_208v-207r.jpg', page: f('Battle_between_Timur_and_Toqtamish_Khan_in_18_June_1391._Zafarnama_of_1436,_facing_folios_208v-207r.jpg'), author: 'Painter of the 1436 Zafarnama', license: 'Public domain', licenseUrl: PD, caption: B('نبرد تیمور و توقتمش (۱۳۹۱) در ظفرنامهٔ ۱۴۳۶؛ تصویری پسین و ستایش‌آمیز.', 'Timur fighting Toqtamish (1391) in the 1436 Zafarnama: later, flattering imagery.') },
  { id: 'gur-e-amir', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Gur-e_Amir_01.jpg/1280px-Gur-e_Amir_01.jpg', page: f('Gur-e_Amir_01.jpg'), author: 'Bgag', license: 'CC0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', caption: B('گور امیر در سمرقند، آرامگاه تیمور و نوه‌اش محمدسلطان (عکس ۲۰۲۳).', 'The Gur-e Amir in Samarqand, tomb of Timur and his grandson Muhammad Sultan (photo 2023).') },
  { id: 'goharshad', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Goharshad_Mosque_Maqsura_Iwan.jpg/1280px-Goharshad_Mosque_Maqsura_Iwan.jpg', page: f('Goharshad_Mosque_Maqsura_Iwan.jpg'), author: 'Goudarz.memar', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', caption: B('ایوان مقصورهٔ مسجد گوهرشاد در مشهد (عکس ۲۰۱۷).', 'The maqsura iwan of the Gowharshad mosque in Mashhad (photo 2017).') },
  { id: 'ulugh-beg-observatory', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Ulugh_Beg_observatory.JPG/1280px-Ulugh_Beg_observatory.JPG', page: f('Ulugh_Beg_observatory.JPG'), author: 'Alaexis', license: 'CC BY-SA 2.5', licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.5/', caption: B('بازماندهٔ رصدخانهٔ الغ‌بیگ در سمرقند، که در ۱۹۰۸ از زیر خاک بیرون آمد (عکس ۲۰۰۶).', 'The remains of Ulugh Beg’s observatory in Samarqand, excavated in 1908 (photo 2006).') },
]
