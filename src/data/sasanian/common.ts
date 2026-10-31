/**
 * Shared sources, places and photos for the Sasanian kings.
 * Verbatim quotes come only from the published translations named here (Frye for ŠKZ, Skjærvø for Paikuli,
 * Boyce for the Letter of Tansar, Echols for Herodian, Daryaee for ANRm, Skjærvø in Iranica for KKZ); Persian renderings are ours.
 * Dates: the site lists the traditional reign years; where Iranica's chronology differs, the page says so.
 */
import type { Coord, FeaturedSource } from '../featured/types'
import type { CommonsPhoto } from '../places/types'
import { IR } from '../late-achaemenid/common'

export { ev, note, sec, clipFor, battleClipFor, IR } from '../late-achaemenid/common'
export { ANTIOCH, ARTAXATA, CARRHAE, CTESIPHON, DURA, EDESSA, ELYMAIS, FIRUZABAD, HATRA, HORMOZGAN, NISIBIS, PERSIS, SAKASTAN, SAMOSATA, SUSA, ZEUGMA } from '../arsacid/common'

/** Estakhr, Papak's seat. */
export const ISTAKHR: Coord = [52.9, 29.98]
export const DARABGERD: Coord = [54.55, 28.75]
export const KERMAN: Coord = [57.08, 30.28]
export const NAQSH_E_ROSTAM: Coord = [52.874, 29.989]
export const BISHAPUR: Coord = [51.57, 29.78]
/** Misiche (Mišīk), renamed Peroz-Shapur (later Anbar), on the Euphrates near modern Fallujah. */
export const MISICHE: Coord = [43.7, 33.38]
/** Barbalissos: Qalʿat Bālis near Meskene on the Euphrates. */
export const BARBALISSOS: Coord = [38.08, 36.0]
export const GUNDESHAPUR: Coord = [48.52, 32.28]
export const CAPPADOCIA: Coord = [35.5, 38.7]
export const CILICIA: Coord = [35.3, 37.0]
export const MESENE: Coord = [47.5, 31.0]
/** Paikuli pass, between Qasr-e Shirin and Sulaymaniyah (Iraq). */
export const PAIKULI: Coord = [45.62, 35.08]
/** Narseh's camp at Osḫa in Armenia Major, east of Erzurum, where Galerius surprised him. */
export const OSXA: Coord = [41.6, 39.95]
/** Callinicum (Raqqa). */
export const CALLINICUM: Coord = [39.02, 35.95]
export const ARMENIA: Coord = [44.0, 39.6]

export const SAS = { fa: 'ساسانیان', en: 'Sasanians' }

/** One bibliography for the Sasanian kings; each king lists the ids it uses. */
export const sasSources: Record<string, FeaturedSource> = Object.fromEntries(([
  { id: 'skz', author: 'Shapur I, ŠKZ (Kaʿba-ye Zardošt), tr. R. N. Frye', title: 'The Inscription of Shapur I at Naqsh-e Rustam in Fars, in The History of Ancient Iran, Appendix 4', year: '1984', url: 'https://sites.uci.edu/sasanika/sapur-is-inscription-kaba-ye-zartost-skz/', note: { fa: 'گزارش خود شاپور از جنگ‌هایش، به سه زبان پارسی میانه، پارتی و یونانی، بر دیوار کعبهٔ زرتشت. منبعی هم‌روزگار، اما تبلیغ رسمی شاه.', en: 'Shapur’s own account of his wars, in Middle Persian, Parthian and Greek, on the walls of the Kaʿba-ye Zardošt. Contemporary, but royal propaganda.' } },
  { id: 'anrm', author: 'Ardashir I, ANRm, tr. T. Daryaee (Sasanika)', title: 'Inscription on the investiture relief at Naqsh-e Rostam', year: 'n.d.', url: 'https://sites.uci.edu/sasanika/ardaxsir-ohrmazd-naqs-e-rostam-anrm-ab/' },
  { id: 'npi', author: 'H. Humbach & P. O. Skjærvø', title: 'The Sassanian Inscription of Paikuli, Part 3.1: Restored text and translation (by P. O. Skjærvø)', year: '1983', url: 'https://sites.uci.edu/sasanika/paikuli-inscription-npi/', note: { fa: 'کتیبهٔ دوزبانهٔ نرسی؛ متن بسیار شکسته است و بخش بزرگی از آن بازسازی است. علامت پرسش و قلاب‌ها از خود مترجم است.', en: 'Narseh’s bilingual inscription; the text is badly broken and much of it is restored. The question marks and brackets are the translator’s own.' } },
  { id: 'tansar', author: 'M. Boyce (tr.)', title: 'The Letter of Tansar (Serie Orientale Roma 38)', year: '1968', url: 'https://archive.org/details/TheLetterOfTansarTranslatedByMaryBoyce', note: { fa: 'تنها از راه ترجمهٔ فارسی ابن اسفندیار (سدهٔ هفتم ه‍.) از ترجمهٔ عربی ابن مقفع مانده است.', en: 'Survives only through Ibn Isfandiyar’s Persian translation (13th century) of Ibn al-Muqaffaʿ’s Arabic version.' } },
  { id: 'herodian', author: 'Herodian, tr. E. C. Echols', title: 'History of the Roman Empire 6.2–6.6', year: '1961', url: 'https://www.livius.org/sources/content/herodian-s-roman-history/' },
  { id: 'ir-ardashir', author: 'J. Wiesehöfer, Encyclopaedia Iranica', title: 'Ardašīr I i. History', year: '1986, updated 2011', url: IR('ardasir-i') },
  { id: 'ir-karnamag', author: 'C. G. Cereti, Encyclopaedia Iranica', title: 'Kār-nāmag ī Ardašīr ī Pābagān', year: '2011', url: IR('karnamag-i-ardasir') },
  { id: 'ir-firuzabad', author: 'D. Huff, Encyclopaedia Iranica', title: 'Fīrūzābād', year: '1999', url: IR('firuzabad') },
  { id: 'ir-shapur1', author: 'A. Sh. Shahbazi, Encyclopaedia Iranica', title: 'Šāpur I: History', year: '2002, updated 2018', url: IR('shapur-i') },
  { id: 'ir-bishapur', author: 'E. J. Keall, Encyclopaedia Iranica', title: 'Bīšāpūr', year: '1989', url: IR('bisapur') },
  { id: 'ir-mani', author: 'W. Sundermann, Encyclopaedia Iranica', title: 'Mani', year: '2009', url: IR('mani-founder-manicheism') },
  { id: 'ir-hormozd1', author: 'M. R. Shayegan, Encyclopaedia Iranica', title: 'Hormozd I', year: '2004', url: IR('hormozd-i') },
  { id: 'ir-bahram1', author: 'A. Sh. Shahbazi, Encyclopaedia Iranica', title: 'Bahrām I', year: '1988', url: IR('bahram-01') },
  { id: 'ir-bahram2', author: 'A. Sh. Shahbazi, Encyclopaedia Iranica', title: 'Bahrām II', year: '1988', url: IR('bahram-ii') },
  { id: 'ir-bahram3', author: 'O. Klíma, Encyclopaedia Iranica', title: 'Bahrām III', year: '1988', url: IR('bahram-iii') },
  { id: 'ir-narseh', author: 'U. Weber, Encyclopaedia Iranica', title: 'Narseh', year: '2016', url: IR('narseh') },
  { id: 'ir-kartir', author: 'P. O. Skjærvø, Encyclopaedia Iranica', title: 'Kartir', year: '2011', url: IR('kartir'), note: { fa: 'ترجمهٔ بخش‌هایی از کتیبه‌های کرتیر در این مقاله آمده است.', en: 'The article translates passages from Kartir’s inscriptions.' } },
  { id: 'cmc', author: 'A. Henrichs & L. Koenen (via Iranica)', title: 'Cologne Mani Codex 18', year: '1970–1975', note: { fa: 'زندگی‌نامهٔ یونانی مانی؛ تاریخ تاج‌گذاری شاپور و گشودن هترا را می‌دهد. اینجا تنها از راه ایرانیکا.', en: 'A Greek life of Mani; it dates Shapur’s crowning and the fall of Hatra. Used here only through Iranica.' } },
] as FeaturedSource[]).map((s) => [s.id, s]))

export const pick = (...ids: string[]): FeaturedSource[] => ids.map((id) => {
  const s = sasSources[id]
  if (!s) throw new Error(`unknown source ${id}`)
  return s
})

const u = (path: string) => `https://upload.wikimedia.org/wikipedia/commons/${path}`
const f = (name: string) => `https://commons.wikimedia.org/wiki/File:${name}`
const BY2 = 'https://creativecommons.org/licenses/by/2.0'
const BYSA2 = 'https://creativecommons.org/licenses/by-sa/2.0'
const BYSA3 = 'https://creativecommons.org/licenses/by-sa/3.0'
const BYSA4 = 'https://creativecommons.org/licenses/by-sa/4.0'
const cng = (id: string, path: string, name: string, fa: string, en: string): CommonsPhoto =>
  ({ id, src: u(path), page: f(name), author: 'Classical Numismatic Group', license: 'CC BY-SA 3.0', licenseUrl: BYSA3, caption: { fa, en } })

/** Licences read from the Commons API (extmetadata) on 2026-10-31; recorded in public/media/ATTRIBUTION.txt. */
export const sasPhotos: Record<string, CommonsPhoto> = {
  'coin-ardashir1': { id: 'coin-ardashir1', src: u('thumb/5/5b/Coin_of_Ardashir_I.jpg/960px-Coin_of_Ardashir_I.jpg'), page: f('Coin_of_Ardashir_I.jpg'), author: 'Numisbids', license: 'Public domain', caption: { fa: 'سکهٔ اردشیر یکم؛ پشت سکه آتشدان است', en: 'A coin of Ardashir I; the reverse shows a fire altar' } },
  'coin-ardashir-papak': { id: 'coin-ardashir-papak', src: u('1/12/Coin_of_Ardashir_I_and_Papak.jpg'), page: f('Coin_of_Ardashir_I_and_Papak.jpg'), author: 'Unknown (Wikimedia Commons)', license: 'Public domain', caption: { fa: 'سکهٔ اردشیر در دورهٔ شاهی پارس، با چهرهٔ پدرش پاپک بر پشت سکه', en: 'A coin from Ardashir’s time as king of Persis, with his father Pāpak on the reverse' } },
  'nr-ardashir': { id: 'nr-ardashir', src: u('thumb/9/94/171206yd_Naqsh-e_Rostam_Investiture_d%27Ardashir_Ier.jpg/960px-171206yd_Naqsh-e_Rostam_Investiture_d%27Ardashir_Ier.jpg'), page: f('171206yd_Naqsh-e_Rostam_Investiture_d%27Ardashir_Ier.jpg'), author: 'Perri.G', license: 'CC BY-SA 4.0', licenseUrl: BYSA4, caption: { fa: 'نقش برجستهٔ دیهیم‌ستانی اردشیر در نقش رستم: اردشیر و اورمزد هر دو سوارند و اورمزد حلقهٔ شاهی را به او می‌دهد', en: 'Ardashir’s investiture relief at Naqsh-e Rostam: Ardashir and Ohrmazd, both mounted; Ohrmazd hands him the ring of kingship' } },
  'firuzabad-relief': { id: 'firuzabad-relief', src: u('thumb/c/c8/Relief_Ardachir_Ist_%28Firuzabad_II%29_V1_%28cropped%29.JPG/960px-Relief_Ardachir_Ist_%28Firuzabad_II%29_V1_%28cropped%29.JPG'), page: f('Relief_Ardachir_Ist_(Firuzabad_II)_V1_(cropped).JPG'), author: 'Pentocelo', license: 'CC BY-SA 3.0', licenseUrl: BYSA3, caption: { fa: 'نقش برجستهٔ دیهیم‌ستانی اردشیر نزدیک فیروزآباد (فیروزآباد ۲)، کهن‌ترین نقش ساسانی از این گونه', en: 'Ardashir’s investiture relief near Firuzabad (Firuzabad II), the earliest Sasanian relief of its kind' } },
  'ardashir-palace': { id: 'ardashir-palace', src: u('thumb/c/c6/3rd-Century_Palace_of_Ardashir%2C_Firuzabad%2C_Iran_%2810059050404%29.jpg/960px-3rd-Century_Palace_of_Ardashir%2C_Firuzabad%2C_Iran_%2810059050404%29.jpg'), page: f('3rd-Century_Palace_of_Ardashir,_Firuzabad,_Iran_(10059050404).jpg'), author: 'Julia Maudlin', license: 'CC BY 2.0', licenseUrl: BY2, caption: { fa: 'کاخ اردشیر نزدیک فیروزآباد (سدهٔ سوم م.)', en: 'The palace of Ardashir near Firuzabad (3rd century CE)' } },
  'coin-shapur1': cng('coin-shapur1', '8/88/Gold_coin_of_Shapur_I%2C_Ctesiphon_mint.jpg', 'Gold_coin_of_Shapur_I,_Ctesiphon_mint.jpg', 'سکهٔ زر شاپور یکم، ضرب تیسفون', 'A gold coin of Shapur I, Ctesiphon mint'),
  'nr-shapur': { id: 'nr-shapur', src: u('thumb/e/e4/The_triumph_of_Shapur_I_over_the_Roman_emperors_Valerian_and_Philip_the_Arab%2C_Naqsh-e_Rostam%2C_Iran_%2848098710736%29.jpg/960px-The_triumph_of_Shapur_I_over_the_Roman_emperors_Valerian_and_Philip_the_Arab%2C_Naqsh-e_Rostam%2C_Iran_%2848098710736%29.jpg'), page: f('The_triumph_of_Shapur_I_over_the_Roman_emperors_Valerian_and_Philip_the_Arab,_Naqsh-e_Rostam,_Iran_(48098710736).jpg'), author: 'Carole Raddato', license: 'CC BY-SA 2.0', licenseUrl: BYSA2, caption: { fa: 'پیروزی شاپور در نقش رستم: فیلیپ زانو زده است و والرین ایستاده، دستش در دست شاه', en: 'Shapur’s triumph at Naqsh-e Rostam: Philip kneels, and Valerian stands with his hand held by the king' } },
  'bishapur3': { id: 'bishapur3', src: u('thumb/a/a6/Bishapur_III_relief_Shapur.JPG/960px-Bishapur_III_relief_Shapur.JPG'), page: f('Bishapur_III_relief_Shapur.JPG'), author: 'Pentocelo', license: 'CC BY-SA 3.0', licenseUrl: BYSA3, caption: { fa: 'نقش برجستهٔ بزرگ پیروزی شاپور در تنگ چوگان بیشاپور (بیشاپور ۳)، با سواران ایرانی و باج‌آوران', en: 'Shapur’s great triumph relief in the Tang-e Chowgan at Bishapur (Bishapur III), with Iranian horsemen and tribute-bearers' } },
  'mani-scroll': { id: 'mani-scroll', src: u('1/1d/Sermon_on_Mani%27s_Teaching_of_Salvation._Cathayan_Manichaean_silk_painting%2C_13th-century.jpg'), page: f('Sermon_on_Mani%27s_Teaching_of_Salvation._Cathayan_Manichaean_silk_painting,_13th-century.jpg'), author: 'Unknown (13th century)', license: 'Public domain', caption: { fa: 'نقاشی ابریشمی مانوی از چین جنوبی (سدهٔ سیزدهم م.)؛ هزار سال پس از مانی، نشان پخش دین او تا شرق دور', en: 'A Manichaean silk painting from southern China (13th century); a thousand years after Mani, a sign of how far east his religion spread' } },
  'coin-hormizd1': cng('coin-hormizd1', 'e/ed/Coin_of_Hormizd_I.jpg', 'Coin_of_Hormizd_I.jpg', 'سکهٔ هرمز یکم', 'A coin of Hormizd I'),
  'coin-bahram1': cng('coin-bahram1', '3/32/Coin_of_Bahram_I%2C_Hamadan_mint.jpg', 'Coin_of_Bahram_I,_Hamadan_mint.jpg', 'سکهٔ بهرام یکم، ضرب همدان؛ تاج پرتودار', 'A coin of Bahram I, Hamadan mint, with the rayed crown'),
  'bishapur-bahram1': { id: 'bishapur-bahram1', src: u('thumb/6/6d/Bishapur_V_relief_Bahram_Ist.JPG/960px-Bishapur_V_relief_Bahram_Ist.JPG'), page: f('Bishapur_V_relief_Bahram_Ist.JPG'), author: 'Pentocelo', license: 'CC BY-SA 3.0', licenseUrl: BYSA3, caption: { fa: 'نقش دیهیم‌ستانی بهرام یکم در بیشاپور. نرسی بعدها نام بهرام را پاک کرد و نام خود را جای آن نوشت.', en: 'Bahram I’s investiture relief at Bishapur. Narseh later erased Bahram’s name and put his own in its place.' } },
  'coin-bahram2': cng('coin-bahram2', '4/46/Bahram_II%2C_with_Queen_and_Prince.jpg', 'Bahram_II,_with_Queen_and_Prince.jpg', 'درهم بهرام دوم با چهرهٔ ملکه و شاهزاده؛ تاج بال‌دار نشان ایزد بهرام است', 'A drachm of Bahram II with a queen and a prince; the winged crown is the emblem of the god Bahram'),
  'kartir-knrb': { id: 'kartir-knrb', src: u('thumb/7/76/Naqsh-e_Rajab_-_Kartir_inscription.jpg/960px-Naqsh-e_Rajab_-_Kartir_inscription.jpg'), page: f('Naqsh-e_Rajab_-_Kartir_inscription.jpg'), author: 'Philippe Chavin (Simorg)', license: 'CC BY-SA 3.0', licenseUrl: BYSA3, caption: { fa: 'کتیبهٔ کرتیر در نقش رجب (KNRb)', en: 'Kartir’s inscription at Naqsh-e Rajab (KNRb)' } },
  'nr-bahram2': { id: 'nr-bahram2', src: u('thumb/1/1c/The_Double_Equestrian_Relief_of_Bahram_II_%28AD_276-293%29%2C_Naqsh-e_Rostam%2C_Iran_%2848098713136%29.jpg/960px-The_Double_Equestrian_Relief_of_Bahram_II_%28AD_276-293%29%2C_Naqsh-e_Rostam%2C_Iran_%2848098713136%29.jpg'), page: f('The_Double_Equestrian_Relief_of_Bahram_II_(AD_276-293),_Naqsh-e_Rostam,_Iran_(48098713136).jpg'), author: 'Carole Raddato', license: 'CC BY-SA 2.0', licenseUrl: BYSA2, caption: { fa: 'نقش دوگانهٔ سوارکاری بهرام دوم در نقش رستم', en: 'The double equestrian relief of Bahram II at Naqsh-e Rostam' } },
  'coin-narseh': { id: 'coin-narseh', src: u('thumb/3/33/Coin_of_Narseh%2C_obverse.jpg/960px-Coin_of_Narseh%2C_obverse.jpg'), page: f('Coin_of_Narseh,_obverse.jpg'), author: 'American Numismatic Society', license: 'CC0', caption: { fa: 'سکهٔ نرسی (روی سکه)', en: 'A coin of Narseh (obverse)' } },
  'paikuli-bust': { id: 'paikuli-bust', src: u('thumb/2/2a/14._Bust_of_the_Sasanian_king_Narseh_%281_of_5%29_once_decorated_the_king%27s_monumental_tower_at_the_Paikuli_Pass_%28so-called_Paikuli_Tower%29%2C_Sulaymaniyah%2C_Iraqi_Kurdistan._Built_by_Narseh%2C_c._293_CE._Sulaymaniyah_Museum%2C_Iraqi_Kurdistan.jpg/960px-thumbnail.jpg'), page: f('14._Bust_of_the_Sasanian_king_Narseh_(1_of_5)_once_decorated_the_king%27s_monumental_tower_at_the_Paikuli_Pass_(so-called_Paikuli_Tower),_Sulaymaniyah,_Iraqi_Kurdistan._Built_by_Narseh,_c._293_CE._Sulaymaniyah_Museum,_Iraqi_Kurdistan.jpg'), author: 'Osama Shukir Muhammed Amin', license: 'CC BY-SA 4.0', licenseUrl: BYSA4, caption: { fa: 'نیم‌تنهٔ سنگی نرسی از برج پایکولی، موزهٔ سلیمانیه', en: 'A stone bust of Narseh from the Paikuli tower, Sulaymaniyah Museum' } },
  'paikuli-block': { id: 'paikuli-block', src: u('thumb/e/ee/Stone_block_with_Paikuli_inscription.JPG/960px-Stone_block_with_Paikuli_inscription.JPG'), page: f('Stone_block_with_Paikuli_inscription.JPG'), author: 'Osama Shukir Muhammed Amin', license: 'CC BY-SA 4.0', licenseUrl: BYSA4, caption: { fa: 'سنگی از کتیبهٔ پایکولی', en: 'A block of the Paikuli inscription' } },
}
export const photos = (...ids: string[]): CommonsPhoto[] => ids.map((id) => sasPhotos[id])

export const related = (...links: [string, string, string][]) => [
  ...links.map(([slug, fa, en]) => ({ href: { fa: `/king/${slug}`, en: `/en/king/${slug}` }, label: { fa, en } })),
  { href: { fa: '/dynasty/sasanians', en: '/dynasty/sasanians' }, label: { fa: 'دودمان ساسانی', en: 'The Sasanian dynasty' } },
]
