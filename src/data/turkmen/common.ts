/** Shared sources, places and photos for the Turkmen dynasties (Qara Qoyunlu, Aq Qoyunlu) and Uzun Hasan. */
import type { Coord, FeaturedSource } from '../featured/types'
import type { CommonsPhoto } from '../places/types'

export const B = (fa: string, en: string) => ({ fa, en })
export const P = {
  AMED: [40.23, 37.91] as Coord, HASANKEYF: [41.41, 37.71] as Coord, KHARPUT: [39.25, 38.7] as Coord, TREBIZOND: [39.72, 41.0] as Coord,
  TIFLIS: [44.8, 41.7] as Coord, VAN: [43.38, 38.5] as Coord, TABRIZ: [46.29, 38.08] as Coord, QARABAGH: [47.0, 39.9] as Coord,
  TOKAT: [36.55, 40.31] as Coord, OTLUKBELI: [39.9, 39.85] as Coord, SHIRAZ: [52.53, 29.6] as Coord, ISFAHAN: [51.67, 32.65] as Coord,
  BAGHDAD: [44.36, 33.31] as Coord, HERAT: [62.2, 34.35] as Coord,
}

export const tkSources: FeaturedSource[] = [
  { id: 'iranica-aq', author: 'R. Quiring-Zoche, Encyclopaedia Iranica', title: 'Āq Qoyunlū', year: '1986, updated 2013', url: 'https://www.iranicaonline.org/articles/aq-qoyunlu-confederation/', note: { fa: 'ستون اصلی این صفحه: برآمدن آق‌قویونلو، اوزون حسن، قانون‌نامه و فروپاشی.', en: 'The spine of this page: the Aq Qoyunlu rise, Uzun Hasan, his law code and the collapse.' } },
  { id: 'iranica-esmail', author: 'R. M. Savory, Encyclopaedia Iranica', title: 'Esmāʿīl I Ṣafawī i. Biography', year: '1998, updated 2017', url: 'https://www.iranicaonline.org/articles/esmail-i-safawi/esmail-i-safawi-i-biography/', note: { fa: 'پیوند خانوادگی صفویان با اوزون حسن.', en: 'The Safavid family ties to Uzun Hasan.' } },
  { id: 'iranica-blue-mosque', author: 'S. Aube, Encyclopaedia Iranica', title: 'Tabriz x. Monuments (1): The Blue Mosque', year: '2011, updated 2018', url: 'https://www.iranicaonline.org/articles/tabriz-x-monuments/', note: { fa: 'مسجد کبود تبریز و بنیان‌گذارانش.', en: 'The Blue Mosque of Tabriz and its founders.' } },
]
export const tkSourceIds = new Set(tkSources.map((s) => s.id))

const f = (name: string) => `https://commons.wikimedia.org/wiki/File:${name}`
const t = (path: string, name: string) => `https://upload.wikimedia.org/wikipedia/commons/thumb/${path}/${name}/1280px-${name}`
const PD = 'https://commons.wikimedia.org/wiki/Commons:Public_domain'
const BYSA4 = 'https://creativecommons.org/licenses/by-sa/4.0/'
/** Licence and author read from the Commons API on 2026-10-31. */
export const tkPhotos: CommonsPhoto[] = [
  { id: 'uzun-hasan-hunting', src: t('e/e6', 'Hunting_Sultan_Uzun_Hasa_diptych%2C_1467-1473%2C_Uzun_Hasa_hunting.jpg'), page: f('Hunting_Sultan_Uzun_Hasa_diptych,_1467-1473,_Uzun_Hasa_hunting.jpg'), author: 'Unknown Turkman court painter, 1460s–1470s', license: 'Public domain', licenseUrl: PD, caption: B('نگارهٔ شکار از دربار ترکمانان (دههٔ ۱۴۶۰–۱۴۷۰)؛ شناسایی سوار با اوزون حسن نظر برخی پژوهشگران است، نه قطعی.', 'A Turkman court hunting scene (1460s–1470s); identifying the rider as Uzun Hasan is some scholars’ view, not certain.') },
  { id: 'otlukbeli-1616', src: t('e/e9', 'Battle_of_Otlukbeli_%28Erzincan%29_on_August_11%2C_1473_%28victory_of_the_Ottomans_under_Sultan_Mehmed_II%2C_the_Conqueror%2C_over_the_Turkmen_tribal_federation_Aq_Qonyulu%29._Miniature%2C_Turkish%2C_1616._Tadj_al-Tawarikh_%28The_Crown_of_Chronicles%29.jpg'), page: f('Battle_of_Otlukbeli_(Erzincan)_on_August_11,_1473_(victory_of_the_Ottomans_under_Sultan_Mehmed_II,_the_Conqueror,_over_the_Turkmen_tribal_federation_Aq_Qonyulu)._Miniature,_Turkish,_1616._Tadj_al-Tawarikh_(The_Crown_of_Chronicles).jpg'), author: 'Ottoman painter, Taj al-Tawarikh, 1616', license: 'Public domain', licenseUrl: PD, caption: B('نبرد اوتلوق‌بلی در نگاره‌ای عثمانی از ۱۶۱۶، بیش از ۱۴۰ سال پس از نبرد؛ نگاه پیروزمندان.', 'Otlukbeli in an Ottoman painting of 1616, over 140 years later: the victors’ view.') },
  { id: 'blue-mosque', src: t('9/90', 'Kabood_%28Blue%29_mosque%2C_Tabriz%2C_Iran.jpg'), page: f('Kabood_(Blue)_mosque,_Tabriz,_Iran.jpg'), author: 'Hameddaeipic', license: 'CC BY-SA 4.0', licenseUrl: BYSA4, caption: B('مسجد کبود تبریز، پایان ساخت ۱۴۶۵؛ گنبدها در سدهٔ بیستم بازسازی شد (عکس ۲۰۲۰).', 'The Blue Mosque of Tabriz, completed 1465; the domes were rebuilt in the 20th century (photo 2020).') },
  { id: 'isfahan-inscription', src: t('c/c4', 'Uzun_Hasan_inscription_%28South_iwan_of_the_courtyard_of_the_Jameh_Mosque_of_Isfahan%29.jpg'), page: f('Uzun_Hasan_inscription_(South_iwan_of_the_courtyard_of_the_Jameh_Mosque_of_Isfahan).jpg'), author: 'Diego Delso, Ghazalyegane', license: 'CC BY-SA 4.0', licenseUrl: BYSA4, caption: B('کتیبهٔ اوزون حسن در ایوان جنوبی مسجد جامع اصفهان، ۱۴۷۵–۱۴۷۶ (عکس ۲۰۱۶).', 'Uzun Hasan’s inscription on the south iwan of the Friday Mosque of Isfahan, 1475–76 (photo 2016).') },
]
