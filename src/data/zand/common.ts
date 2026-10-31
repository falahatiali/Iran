/** Shared sources, places and photos for the Zand pages (Karim Khan and his successors). */
import type { Coord, FeaturedSource } from '../featured/types'
import type { CommonsPhoto } from '../places/types'

export const B = (fa: string, en: string) => ({ fa, en })
export const P = {
  MALAYER: [48.82, 34.3] as Coord, MASHHAD: [59.6, 36.3] as Coord, ISFAHAN: [51.67, 32.65] as Coord, SHIRAZ: [52.53, 29.6] as Coord,
  KERMANSHAH: [47.06, 34.31] as Coord, ASTARABAD: [54.43, 36.84] as Coord, KAMAREJ: [51.47, 29.6] as Coord, URMIA: [45.07, 37.55] as Coord,
  TEHRAN: [51.39, 35.69] as Coord, TABRIZ: [46.29, 38.08] as Coord, BUSHEHR: [50.84, 28.97] as Coord, BASRA: [47.78, 30.51] as Coord,
  KERMAN: [57.08, 30.28] as Coord, BAM: [58.35, 29.1] as Coord, BAKHTIARI: [50.3, 32.3] as Coord, KUHGILUYA: [50.6, 30.9] as Coord,
}

const IR = 'Encyclopaedia Iranica'
export const zdSources: FeaturedSource[] = [
  { id: 'iranica-karim-khan', author: `J. R. Perry, ${IR}`, title: 'Karim Khan Zand', year: '2011, updated 2015', url: 'https://www.iranicaonline.org/articles/karim-khan-zand/', note: { fa: 'ستون اصلی صفحهٔ کریم‌خان: برآمدن، شیراز، لقب وکیل، اقتصاد و منش او.', en: 'The spine of the Karim Khan page: his rise, Shiraz, the wakil title, the economy and his character.' } },
  { id: 'iranica-zand-dynasty', author: `J. R. Perry, ${IR}`, title: 'Zand Dynasty', year: '2000, updated 2016', url: 'https://www.iranicaonline.org/articles/zand-dynasty/', note: { fa: 'جانشینان کریم‌خان تا لطفعلی‌خان و برآمدن قاجار.', en: 'Karim Khan’s successors to Lotf-Ali Khan and the rise of the Qajars.' } },
]
export const zdSourceIds = new Set(zdSources.map((s) => s.id))

const f = (name: string) => `https://commons.wikimedia.org/wiki/File:${name}`
/** Licence and author read from the Commons API on 2026-10-31. */
export const zdPhotos: CommonsPhoto[] = [
  { id: 'karim-louvre', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Portrait_of_Karim_Khan_Zand_-_Shiraz_%28Iran%29_-_Before_1779_-_Louvre_-_MAO_796.jpg/1280px-Portrait_of_Karim_Khan_Zand_-_Shiraz_%28Iran%29_-_Before_1779_-_Louvre_-_MAO_796.jpg', page: f('Portrait_of_Karim_Khan_Zand_-_Shiraz_(Iran)_-_Before_1779_-_Louvre_-_MAO_796.jpg'), author: 'Photo: Mohammad Sadiq (painting: Shiraz, before 1779, Louvre MAO 796)', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', caption: B('چهرهٔ کریم‌خان زند، نقاشی شیراز پیش از ۱۷۷۹ م، موزهٔ لوور.', 'Portrait of Karim Khan Zand, Shiraz, before 1779, Louvre.') },
  { id: 'arg-shiraz', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/2018-09-20_Iran%2C_Shiraz%2C_Arg_of_Karim_Khan.jpg/1280px-2018-09-20_Iran%2C_Shiraz%2C_Arg_of_Karim_Khan.jpg', page: f('2018-09-20_Iran,_Shiraz,_Arg_of_Karim_Khan.jpg'), author: 'Laurens R. Krol', license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/', caption: B('ارگ کریم‌خان در شیراز، ۲۰۱۸.', 'The Arg (citadel) of Karim Khan in Shiraz, 2018.') },
]
