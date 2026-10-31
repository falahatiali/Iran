/** Shared sources, places and photos for the Ilkhanid pages (Hulagu and Ghazan with Rashid al-Din). */
import type { Coord, FeaturedSource } from '../featured/types'
import type { CommonsPhoto } from '../places/types'

export const B = (fa: string, en: string) => ({ fa, en })
export const P = {
  SHIBARGHAN: [65.75, 36.67] as Coord, MAYMUNDIZ: [50.53, 36.45] as Coord, ALAMUT: [50.59, 36.44] as Coord, HAMADAN: [48.51, 34.8] as Coord,
  BAGHDAD: [44.36, 33.31] as Coord, MARAGHEH: [46.24, 37.39] as Coord, TABRIZ: [46.29, 38.08] as Coord, ALEPPO: [37.16, 36.2] as Coord,
  DAMASCUS: [36.29, 33.51] as Coord, AIN_JALUT: [35.36, 32.55] as Coord, AKHLAT: [42.49, 38.75] as Coord, TEREK: [46.7, 43.6] as Coord,
  ZARRINEH: [46.2, 37.0] as Coord, LAR: [51.98, 35.95] as Coord, HOMS: [36.72, 34.73] as Coord, MARJ_SUFFAR: [36.25, 33.25] as Coord,
  QAZVIN: [50.0, 36.27] as Coord, SAVEH: [50.36, 35.02] as Coord, NISHAPUR: [58.8, 36.21] as Coord, MOSUL: [43.13, 36.34] as Coord, QARABAGH: [47.0, 39.9] as Coord, SHAHI: [45.6, 37.6] as Coord, EUPHRATES: [41.9, 34.47] as Coord,
}

export const ilkSources: FeaturedSource[] = [
  { id: 'iranica-hulagu', author: 'R. Amitai, Encyclopaedia Iranica', title: 'Hulāgu Khan', year: '2004, updated 2013', url: 'https://www.iranicaonline.org/articles/hulagu-khan/', note: { fa: 'زندگی و مأموریت هولاکو، و تردید دربارهٔ دستور مونگکه.', en: 'Hulagu’s life and mission, and the doubts about Möngke’s orders.' } },
  { id: 'iranica-ilkhanids', author: 'R. Amitai, Encyclopaedia Iranica', title: 'Il-Khanids i. Dynastic History', year: '2004, updated 2012', url: 'https://www.iranicaonline.org/articles/il-khanids-i-dynastic-history/', note: { fa: 'تاریخچهٔ کل دودمان، اصلاحات غازان و هشدار دربارهٔ رشیدالدین.', en: 'The whole dynasty, Ghazan’s reforms and the caution about Rashid al-Din.' } },
  { id: 'iranica-ghazan', author: 'R. Amitai, Encyclopaedia Iranica', title: 'Ḡāzān Khan, Maḥmūd', year: '2000, updated 2013', url: 'https://www.iranicaonline.org/articles/gazan-khan-mahmud/', note: { fa: 'ستون اصلی صفحهٔ غازان.', en: 'The spine of the Ghazan page.' } },
  { id: 'iranica-jame', author: 'C. Melville, Encyclopaedia Iranica', title: 'Jāmeʿ al-tawāriḵ', year: '2008, updated 2013', url: 'https://www.iranicaonline.org/articles/jame-al-tawarik/', note: { fa: 'دربارهٔ جامع‌التواریخ و زندگی رشیدالدین.', en: 'On the Jāmeʿ al-tawāriḵ and Rashid al-Din’s career.' } },
  { id: 'boyle-chi', author: 'J. A. Boyle, Cambridge History of Iran, vol. 5', title: 'Dynastic and Political History of the Il-Khāns', year: '1968', url: 'https://archive.org/details/Boyle1968IlKhansCHIran05', note: { fa: 'شرح روزبه‌روز لشکرکشی‌ها، با تاریخ‌ها از جوینی و رشیدالدین.', en: 'A day-by-day account of the campaigns, with dates from Juvayni and Rashid al-Din.' } },
]
export const ilkSourceIds = new Set(ilkSources.map((s) => s.id))

const f = (name: string) => `https://commons.wikimedia.org/wiki/File:${name}`
const PD = 'https://commons.wikimedia.org/wiki/Commons:Public_domain'
/** Licence and author read from the Commons API on 2026-10-31. */
export const ilkPhotos: CommonsPhoto[] = [
  { id: 'baghdad-fall', src: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Fall_Of_Baghdad_%28Diez_Albums%29.jpg', page: f('Fall_Of_Baghdad_(Diez_Albums).jpg'), author: '14th-century painter (Diez Albums)', license: 'Public domain', licenseUrl: PD, caption: B('محاصرهٔ بغداد در نگاره‌ای از سدهٔ چهاردهم (آلبوم‌های دیتس)؛ تصویری پسین، نه گزارش عینی.', 'The siege of Baghdad in a 14th-century painting (Diez Albums): later imagery, not an eyewitness record.') },
  { id: 'hulagu-doquz', src: 'https://upload.wikimedia.org/wikipedia/commons/6/62/HulaguAndDokuzKathun.JPG', page: f('HulaguAndDokuzKathun.JPG'), author: 'Manuscript of Rashid al-Din’s Jāmeʿ al-tawāriḵ, 14th century', license: 'Public domain', licenseUrl: PD, caption: B('هولاکو و دوقوز خاتون در نسخه‌ای از جامع‌التواریخ (سدهٔ چهاردهم)؛ چهره‌ها قراردادی‌اند، نه پرتره.', 'Hulagu and Doquz Khatun in a manuscript of the Jāmeʿ al-tawāriḵ (14th century): conventional figures, not portraits.') },
  { id: 'ghazan-conversion', src: 'https://upload.wikimedia.org/wikipedia/commons/6/64/GhazanConversionToIslam.JPG', page: f('GhazanConversionToIslam.JPG'), author: 'Manuscript of Rashid al-Din’s Jāmeʿ al-tawāriḵ (BnF Suppl. persan 1113, f. 239r)', license: 'Public domain', licenseUrl: PD, caption: B('مسلمان شدن غازان در نسخه‌ای از جامع‌التواریخ (کتابخانهٔ ملی فرانسه)؛ این نسخه پس از رویداد نقاشی شده است.', 'Ghazan’s conversion in a manuscript of the Jāmeʿ al-tawāriḵ (Bibliothèque nationale de France), painted after the event.') },
  { id: 'ghazan-seal', src: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/GhazanSeal1302LetterToBonifaceVIII.JPG', page: f('GhazanSeal1302LetterToBonifaceVIII.JPG'), author: 'Chancery of Ghazan, 1302', license: 'Public domain', licenseUrl: PD, caption: B('مُهر غازان به خط مهری چینی، بر نامهٔ ۱۳۰۲ او به پاپ بونیفاس هشتم؛ سندی از خود دوران.', 'Ghazan’s seal in Chinese seal script on his 1302 letter to Pope Boniface VIII: a document from the time itself.') },
]
