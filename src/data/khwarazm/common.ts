/** Shared sources, places and photos for the Khwarazmshah pages (Muhammad II and Jalal al-Din). */
import type { Coord, FeaturedSource } from '../featured/types'
import type { CommonsPhoto } from '../places/types'

export const B = (fa: string, en: string) => ({ fa, en })
export const P = {
  GURGANJ: [59.53, 42.33] as Coord, OTRAR: [68.3, 42.85] as Coord, BUKHARA: [64.42, 39.77] as Coord, SAMARKAND: [66.96, 39.65] as Coord,
  BALKH: [66.9, 36.76] as Coord, NISHAPUR: [58.8, 36.21] as Coord, ASHURADEH: [53.9, 36.88] as Coord, MERV: [61.84, 37.66] as Coord,
  GHAZNA: [68.42, 33.55] as Coord, PARVAN: [69.2, 35.1] as Coord, INDUS: [71.53, 32.96] as Coord, HAMADAN: [48.51, 34.8] as Coord,
  TALAS: [72.2, 42.5] as Coord, RAYY: [51.43, 35.59] as Coord, KERMAN: [57.08, 30.28] as Coord, TABRIZ: [46.29, 38.08] as Coord,
  TBILISI: [44.79, 41.72] as Coord, ISFAHAN: [51.67, 32.65] as Coord, AKHLAT: [42.49, 38.75] as Coord, ERZINCAN: [39.49, 39.75] as Coord,
  MAYYAFARIQIN: [41.13, 38.13] as Coord, JAND: [64.6, 44.6] as Coord,
}

export const khwSources: FeaturedSource[] = [
  { id: 'iranica-muhammad-kh', author: 'C. E. Bosworth, Encyclopaedia Iranica', title: 'ʿAlāʾ-al-Dīn Moḥammad', year: 'Vol. I, updated 2018', url: 'https://www.iranicaonline.org/articles/ala-al-din-abul-fath-mohammad-b/', note: { fa: 'ستون اصلی صفحهٔ سلطان محمد.', en: 'The spine of the Muhammad II page.' } },
  { id: 'iranica-jalal', author: 'C. E. Bosworth, Encyclopaedia Iranica', title: 'Jalāl-al-Din Ḵᵛārazmšāh(i) Mengübirni', year: '2008, updated 2013', url: 'https://www.iranicaonline.org/articles/jalal-al-din-kvarazmsahi-mengbirni/', note: { fa: 'ستون اصلی صفحهٔ جلال‌الدین.', en: 'The spine of the Jalal al-Din page.' } },
  { id: 'iranica-anushtigin', author: 'C. E. Bosworth, Encyclopaedia Iranica', title: 'Khwarazmshahs iii. The Line of Anuštigin', year: '2009, updated 2012', url: 'https://www.iranicaonline.org/articles/khwarazmshah/iii-the-line-of-anustigin/', note: { fa: 'تاریخچهٔ کل دودمان.', en: 'The history of the whole line.' } },
  { id: 'iranica-otrar', author: 'C. E. Bosworth, Encyclopaedia Iranica', title: 'Otrār', year: '2002, updated 2012', url: 'https://www.iranicaonline.org/articles/otrar/', note: { fa: 'دربارهٔ کشتار بازرگانان در اترار.', en: 'On the massacre of the merchants at Otrar.' } },
  { id: 'iranica-mongols', author: 'P. Jackson, Encyclopaedia Iranica', title: 'Mongols', year: '2002, updated 2012', url: 'https://www.iranicaonline.org/articles/mongols/', note: { fa: 'زمینهٔ برآمدن چنگیز و یورش.', en: 'Background to Chinggis Khan’s rise and the invasion.' } },
  { id: 'boyle-chi', author: 'J. A. Boyle, Cambridge History of Iran, vol. 5', title: 'Dynastic and Political History of the Il-Khāns', year: '1968', url: 'https://archive.org/details/Boyle1968IlKhansCHIran05', note: { fa: 'شرح گام‌به‌گام یورش، با تاریخ‌ها از جوینی و نسوی.', en: 'A step-by-step account of the invasion, with dates from Juvayni and Nasawi.' } },
]
export const khwSourceIds = new Set(khwSources.map((s) => s.id))

const f = (name: string) => `https://commons.wikimedia.org/wiki/File:${name}`
const PD = 'https://commons.wikimedia.org/wiki/Commons:Public_domain'
/** Licence and author read from the Commons API on 2026-10-31. */
export const khwPhotos: CommonsPhoto[] = [
  { id: 'otrar-air', src: 'https://upload.wikimedia.org/wikipedia/commons/9/90/%D0%93%D0%BE%D1%80%D0%BE%D0%B4%D0%B8%D1%89%D0%B5_%D0%9E%D1%82%D1%8B%D1%80%D0%B0%D1%80_%D1%81_%D0%B2%D0%BE%D0%B7%D0%B4%D1%83%D1%85%D0%B0.jpg', page: f('Городище_Отырар_с_воздуха.jpg'), author: 'Coopypasted', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', caption: B('ویرانه‌های اترار از هوا (قزاقستان امروز، ۲۰۲۴).', 'The ruins of Otrar from the air (modern Kazakhstan, 2024).') },
  { id: 'bukhara-sermon', src: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Genghis_Khan%27s_sermon_to_the_people_of_Bukhara.jpg', page: f("Genghis_Khan's_sermon_to_the_people_of_Bukhara.jpg"), author: 'Unknown painter, 1397–1398', license: 'Public domain', licenseUrl: PD, caption: B('چنگیز بر منبر مسجد بخارا، در نگاره‌ای از ۱۳۹۷–۱۳۹۸، نزدیک دو سده پس از رویداد. این صحنه روایت جوینی است و نگاره سند نیست.', 'Chinggis Khan in the pulpit of the Bukhara mosque, painted in 1397–1398, nearly two centuries later. The scene follows Juvayni’s story; the painting is not evidence.') },
  { id: 'indus-crossing', src: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Jalal_al-Din_Khwarazm-Shah_crossing_the_rapid_Indus_river%2C_escaping_Chinggis_Khan_and_his_army.jpg', page: f('Jalal_al-Din_Khwarazm-Shah_crossing_the_rapid_Indus_river,_escaping_Chinggis_Khan_and_his_army.jpg'), author: 'Banwari Khurd and Dharm Das, c. 1596–1600', license: 'Public domain', licenseUrl: PD, caption: B('گذشتن جلال‌الدین از سند، در نگاره‌ای مغولی هند از حدود ۱۶۰۰؛ نزدیک چهار سده پس از رویداد و ساختهٔ خیال نقاش.', 'Jalal al-Din crossing the Indus, in a Mughal painting of about 1600: nearly four centuries later and the painter’s imagination.') },
]
