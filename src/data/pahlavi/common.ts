/** Shared sources, places and photos for the Pahlavi pages (Reza Shah and Mohammad Reza Shah). */
import type { Coord, FeaturedSource } from '../featured/types'
import type { CommonsPhoto } from '../places/types'

export const B = (fa: string, en: string) => ({ fa, en })
export const P = {
  TEHRAN: [51.39, 35.69] as Coord, QAZVIN: [50.0, 36.27] as Coord, RASHT: [49.58, 37.28] as Coord, KHORRAMSHAHR: [48.18, 30.44] as Coord,
  MASHHAD: [59.6, 36.3] as Coord, BANDAR_SHAH: [54.08, 36.9] as Coord, KASHMAR: [58.46, 35.24] as Coord, TABRIZ: [46.29, 38.08] as Coord,
  ABADAN: [48.3, 30.35] as Coord, QOM: [50.88, 34.64] as Coord, PERSEPOLIS: [52.89, 29.93] as Coord, ISFAHAN: [51.67, 32.65] as Coord,
  SARI: [53.06, 36.56] as Coord, VERESK: [52.98, 35.9] as Coord,
}

const IR = 'Encyclopaedia Iranica'
const ir = (slug: string) => `https://www.iranicaonline.org/articles/${slug}/`
export const pvSources: FeaturedSource[] = [
  { id: 'yarshater-iran-p5', author: `E. Yarshater, ${IR}`, title: 'Iran ii. Iranian history (2) Islamic period, page 5: the coup of 1921 and Reza Shah', year: '2004', url: ir('iran-ii2-islamic-period-page-5'), note: B('ستون اصلی صفحهٔ رضاشاه: کودتا، اصلاحات، شخصیت و خطاها. لحن یارشاطر ستایش‌آمیز است؛ از این رو نقدهای مقاله‌های دیگر ایرانیکا را کنارش می‌گذاریم.', 'The spine of the Reza Shah page: the coup, the reforms, his character and his errors. Yarshater’s tone is admiring, so we set the criticism in other Iranica articles beside it.') },
  { id: 'yarshater-iran-p6', author: `E. Yarshater, ${IR}`, title: 'Iran ii. Iranian history (2) Islamic period, page 6: Mohammad Reza Shah', year: '2004', url: ir('iran-ii2-islamic-period-page-6'), note: B('جنگ جهانی دوم، استعفای رضاشاه و پادشاهی محمدرضاشاه.', 'The Second World War, Reza Shah’s abdication and the reign of Mohammad Reza Shah.') },
  { id: 'iranica-chronology-2', author: `E. Yarshater, ${IR}`, title: 'Chronology of Iranian History, Part 2 (1834–1932)', year: 'online edition', url: ir('chronology-of-iranian-history-part-2'), note: B('رویدادهای سال‌به‌سال از کودتای ۱۹۲۱ تا لغو امتیاز دارسی.', 'Year-by-year events from the 1921 coup to the cancellation of the D’Arcy concession.') },
  { id: 'iranica-chronology-3', author: `E. Yarshater, ${IR}`, title: 'Chronology of Iranian History, Part 3 (1933–1973)', year: 'online edition', url: ir('chronology-of-iranian-history-part-3'), note: B('قرارداد نفت ۱۹۳۳، گوهرشاد، کشف حجاب، استعفا و پادشاهی محمدرضاشاه.', 'The 1933 oil agreement, Gowharshad, unveiling, the abdication and the reign of Mohammad Reza Shah.') },
  { id: 'iranica-anglo-iranian-iii', author: `R. W. Ferrier, ${IR}`, title: 'Anglo-Iranian Relations iii. Pahlavi period', year: '1985, updated 2016', url: ir('anglo-iranian-relations-iii'), note: B('نقش بریتانیا در کودتای ۱۹۲۱، قرارداد نفت ۱۹۳۳ و استعفای ۱۹۴۱؛ هر دو را «محل بحث» می‌داند.', 'Britain’s role in the 1921 coup, the 1933 oil agreement and the 1941 abdication; it calls both the coup question and the abdication’s cause open to dispute.') },
  { id: 'iranica-army-vi', author: `M. J. Sheikh-ol-Islami, ${IR}`, title: 'Army vi. Pahlavi period', year: '1986, updated 2018', url: ir('army-vi'), note: B('ارتش نوین، بریگاد قزاق و ژاندارمری.', 'The modern army, the Cossack division and the gendarmerie.') },
  { id: 'iranica-administration-vii', author: `A. Sheikholeslami, ${IR}`, title: 'Administration in Iran vii. Pahlavi period', year: '1983, updated 2018', url: ir('administration-vii-pahlavi'), note: B('دیوان‌سالاری، راه‌آهن و رابطهٔ دولت با خاندان پهلوی؛ نگاهی انتقادی‌تر از یارشاطر.', 'The bureaucracy, the railway and the state’s relation to the Pahlavi household; a more critical view than Yarshater’s.') },
]
export const pvSourceIds = new Set(pvSources.map((s) => s.id))

const f = (name: string) => `https://commons.wikimedia.org/wiki/File:${name}`
const PD = 'https://commons.wikimedia.org/wiki/Commons:Public_domain'
/** Licence and author read from the Commons API on 2026-10-31. */
export const pvPhotos: CommonsPhoto[] = [
  { id: 'reza-portrait', src: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Reza_Shah_portrait.jpg', page: f('Reza_Shah_portrait.jpg'), author: 'Unknown photographer', license: 'Public domain', licenseUrl: PD, caption: B('چهرهٔ رضاشاه پهلوی.', 'Portrait of Reza Shah Pahlavi.') },
  { id: 'reza-coronation', src: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Reza_shah_coronation.jpg', page: f('Reza_shah_coronation.jpg'), author: 'Unknown photographer', license: 'Public domain', licenseUrl: PD, caption: B('تاج‌گذاری رضاشاه.', 'The coronation of Reza Shah.') },
  { id: 'veresk-bridge', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Veresk_bridge%2C_Tehran_-_Sari_Railway.jpg/1280px-Veresk_bridge%2C_Tehran_-_Sari_Railway.jpg', page: f('Veresk_bridge,_Tehran_-_Sari_Railway.jpg'), author: 'ninara', license: 'CC BY-SA 2.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/', caption: B('پل ورسک بر راه‌آهن تهران–ساری، بخشی از راه‌آهن سراسری. عکس امروزی.', 'The Veresk bridge on the Tehran–Sari line, part of the Trans-Iranian Railway. A modern photograph.') },
]
