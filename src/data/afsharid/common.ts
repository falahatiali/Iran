/** Shared sources, places and photos for the Afsharid pages (Nader Shah and his successors). */
import type { Coord, FeaturedSource } from '../featured/types'
import type { CommonsPhoto } from '../places/types'

export const B = (fa: string, en: string) => ({ fa, en })
export const P = {
  DARRAGAZ: [59.11, 37.44] as Coord, ABIVARD: [59.55, 37.25] as Coord, MASHHAD: [59.6, 36.3] as Coord, HERAT: [62.2, 34.35] as Coord,
  MEHMANDUST: [54.55, 36.1] as Coord, ISFAHAN: [51.67, 32.65] as Coord, TABRIZ: [46.29, 38.08] as Coord, HAMADAN: [48.51, 34.8] as Coord,
  GANJA: [46.36, 40.68] as Coord, MUGHAN: [48.0, 39.6] as Coord, QANDAHAR: [65.7, 31.6] as Coord, KABUL: [69.17, 34.53] as Coord,
  LAHORE: [74.35, 31.55] as Coord, KARNAL: [76.98, 29.69] as Coord, DELHI: [77.2, 28.65] as Coord, BUKHARA: [64.42, 39.77] as Coord,
  KHIVA: [60.36, 41.38] as Coord, DARBAND: [48.29, 42.06] as Coord, BAGHDAD: [44.36, 33.31] as Coord, NAJAF: [44.33, 32.0] as Coord,
  SHIRAZ: [52.53, 29.6] as Coord, YEREVAN: [44.51, 40.18] as Coord, KHABUSHAN: [58.51, 37.11] as Coord, KALAT: [59.76, 36.99] as Coord,
  KORDAN: [50.83, 35.95] as Coord, BUSHEHR: [50.84, 28.97] as Coord,
}

const IR = 'Encyclopaedia Iranica'
export const afSources: FeaturedSource[] = [
  { id: 'iranica-nader-shah', author: `E. Tucker, ${IR}`, title: 'Nāder Shah', year: '2006, updated 2015', url: 'https://www.iranicaonline.org/articles/nader-shah/', note: { fa: 'ستون اصلی صفحهٔ نادر: برآمدن، شورای مغان، مذهب جعفری، هند، اصلاحات و کشته شدن.', en: 'The spine of the Nader page: his rise, the Mughan assembly, the Jaʿfari madhhab, India, his reforms and his murder.' } },
  { id: 'iranica-afsharids', author: `J. R. Perry, ${IR}`, title: 'Afsharids', year: '1984, updated 2018', url: 'https://www.iranicaonline.org/articles/afsharids/', note: { fa: 'تاریخ خراسان پس از نادر تا ۱۷۹۶: عادل‌شاه، ابراهیم، شاهرخ و سلیمان دوم.', en: 'Khorasan after Nader to 1796: Adel Shah, Ebrahim, Shahrokh and Solayman II.' } },
]
export const afSourceIds = new Set(afSources.map((s) => s.id))

const f = (name: string) => `https://commons.wikimedia.org/wiki/File:${name}`
const u = (path: string, name: string) => `https://upload.wikimedia.org/wikipedia/commons/${path}/${name}`
const PD = 'https://commons.wikimedia.org/wiki/Commons:Public_domain'
/** Licence and author read from the Commons API on 2026-10-31. */
export const afPhotos: CommonsPhoto[] = [
  { id: 'nader-c1740', src: u('4/4f', 'Contemporary_portrait_of_Nader_Shah._Artist_unknown%2C_created_in_ca._1740_in_Iran_%28cropped%29.jpg'), page: f('Contemporary_portrait_of_Nader_Shah._Artist_unknown,_created_in_ca._1740_in_Iran_(cropped).jpg'), author: 'Unknown Iranian painter, c. 1740', license: 'Public domain', licenseUrl: PD, caption: B('چهرهٔ نادرشاه، کار نقاشی ناشناس در ایران، حدود ۱۷۴۰ م (هم‌روزگار او).', 'Portrait of Nader Shah by an unknown painter in Iran, c. 1740 (made in his lifetime).') },
  { id: 'nader-delhi', src: u('3/32', 'Nadir_Shah_at_the_sack_of_Delhi_-_Battle_scene_with_Nader_Shah_on_horseback%2C_possibly_by_Muhammad_Ali_ibn_Abd_al-Bayg_ibn_Ali_Quli_Jabbadar%2C_mid-18th_century%2C_Museum_of_Fine_Arts%2C_Boston.jpg'), page: f('Nadir_Shah_at_the_sack_of_Delhi_-_Battle_scene_with_Nader_Shah_on_horseback,_possibly_by_Muhammad_Ali_ibn_Abd_al-Bayg_ibn_Ali_Quli_Jabbadar,_mid-18th_century,_Museum_of_Fine_Arts,_Boston.jpg'), author: 'Possibly Muhammad Ali ibn Abd al-Bayg Jabbadar, mid-18th century (Museum of Fine Arts, Boston)', license: 'Public domain', licenseUrl: PD, caption: B('نادر سوار در صحنهٔ نبرد؛ نقاشی میانهٔ سدهٔ هجدهم که موزه آن را به غارت دهلی نسبت می‌دهد. نقاش و صحنه قطعی نیست.', 'Nader on horseback in a battle scene; a mid-18th-century painting the museum links to the sack of Delhi. Painter and scene are not certain.') },
  { id: 'kalat-dome', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Kalat_Naderi_Sun_Palace_Dome.jpg/1280px-Kalat_Naderi_Sun_Palace_Dome.jpg', page: f('Kalat_Naderi_Sun_Palace_Dome.jpg'), author: 'Leopeji', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', caption: B('کاخ خورشید در کلات نادری؛ دژ کوهستانی که نادر گنجینهٔ هند را در آن نگه داشت.', 'The Sun Palace at Kalat-e Naderi, the mountain fortress where Nader kept his Indian treasure.') },
  { id: 'nader-tomb', src: u('6/6c', 'Tomb_of_Nader_Shah_-_Mashhad_1.jpg'), page: f('Tomb_of_Nader_Shah_-_Mashhad_1.jpg'), author: 'Mohammad Taaghi', license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/', caption: B('آرامگاه نادرشاه در مشهد، امروز.', 'Nader Shah’s tomb in Mashhad today.') },
]
