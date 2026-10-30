/**
 * Shared sources, places and photos for the Arsacid (Parthian) kings.
 * Verbatim quotes come only from the published translations named here; Persian renderings are ours.
 * Dates: the site lists the traditional reign years; where G. F. Assar's chronology (followed by Olbrycht) differs, the page says so.
 */
import type { Coord, FeaturedSource } from '../featured/types'
import type { CommonsPhoto } from '../places/types'
import { IR } from '../late-achaemenid/common'

export { ev, note, sec, clipFor, battleClipFor, IR } from '../late-achaemenid/common'

export const NISA: Coord = [58.2, 37.98]
export const ASTAUENE: Coord = [58.5, 37.1]
export const HECATOMPYLUS: Coord = [54.2, 36.08]
export const HYRCANIA: Coord = [54.4, 36.8]
export const LABUS: Coord = [54.9, 36.5]
export const RHAGAE: Coord = [51.43, 35.59]
export const CASPIAN_GATES: Coord = [52.3, 35.4]
export const MARDI: Coord = [52.2, 36.4]
export const ECBATANA: Coord = [48.52, 34.8]
export const BISOTUN: Coord = [47.44, 34.39]
export const SELEUCIA: Coord = [44.52, 33.1]
export const BABYLON: Coord = [44.42, 32.54]
export const URUK: Coord = [45.64, 31.32]
export const SUSA: Coord = [48.257, 32.19]
export const ELYMAIS: Coord = [49.86, 31.83]
export const PERSIS: Coord = [52.89, 29.935]
export const CHARAX: Coord = [47.8, 30.9]
export const MERV: Coord = [61.83, 37.66]
export const ARIA: Coord = [62.2, 34.35]
export const BACTRA: Coord = [66.9, 36.76]
export const YUEZHI: Coord = [67.5, 38.6]
export const SAKASTAN: Coord = [61.5, 31.0]
export const DURA: Coord = [40.73, 34.75]
export const ARTAXATA: Coord = [44.55, 39.88]
export const EUPHRATES: Coord = [38.0, 37.06]
export const ARBELA: Coord = [44.01, 36.19]
export const CTESIPHON: Coord = [44.58, 33.09]
export const CARRHAE: Coord = [39.03, 36.86]
export const ZEUGMA: Coord = [37.87, 37.06]
export const ICHNAE: Coord = [39.05, 36.45]
/** Sinnaca: a hill fort near Carrhae; its exact site is unknown. */
export const SINNACA: Coord = [39.5, 37.05]
export const BALIKH: Coord = [39.1, 36.2]
export const ANTIOCH: Coord = [36.16, 36.2]
export const APAMEA: Coord = [36.4, 35.42]
export const GINDARUS: Coord = [36.73, 36.38]
export const AMANUS: Coord = [36.5, 36.95]
export const SAMOSATA: Coord = [38.52, 37.53]
export const JERUSALEM: Coord = [35.23, 31.78]
export const TIGRANOCERTA: Coord = [41.0, 38.1]
export const CARANA: Coord = [41.27, 39.9]
/** Phraaspa/Phraata: capital of Atropatene; the site is unknown (Maragheh? Takht-e Soleyman?). Placed near Maragheh. */
export const PHRAASPA: Coord = [46.24, 37.39]
export const ARAXES: Coord = [45.6, 38.94]
export const ATROPATENE: Coord = [46.3, 38.07]

export const PAR = { fa: 'اشکانیان', en: 'Arsacids (Parthians)' }

/** One bibliography for the Arsacid kings; each king lists the ids it uses. */
export const parSources: Record<string, FeaturedSource> = Object.fromEntries(([
  { id: 'justin', author: 'Justin, tr. J. S. Watson', title: 'Epitome of Pompeius Trogus, books 38–42 (books 40–44 online)', year: '1853', url: 'https://www.attalus.org/translate/justin7.html', note: { fa: 'خلاصه‌ای رومی از تاریخ گمشدهٔ پومپئیوس تروگوس (سدهٔ یکم پ.م.)؛ پیوسته‌ترین روایت از پارتیان نخستین، اما از دید رومی و پر از کلیشه دربارهٔ «سکاها».', en: 'A Roman digest of the lost history of Pompeius Trogus (1st century BCE); the most continuous account of the early Parthians, but Roman in outlook and full of “Scythian” clichés.' } },
  { id: 'strabo', author: 'Strabo, tr. H. C. Hamilton & W. Falconer', title: 'Geography, book 11 (9.2–3, 14.15)', year: '1854–1857', url: 'https://www.gutenberg.org/ebooks/44885' },
  { id: 'plut-sulla', author: 'Plutarch, tr. J. Dryden, rev. A. H. Clough', title: 'Life of Sulla, ch. 5', year: '1864', url: 'https://www.gutenberg.org/ebooks/674' },
  { id: 'shiji', author: 'Sima Qian, tr. B. Watson', title: 'Records of the Grand Historian (Shiji), ch. 123: The Account of Dayuan', year: '1961, rev. 1993', note: { fa: 'تاریخ‌نگار دربار هان؛ هم‌روزگار سفارت‌ها. پارت را «آنشی» (Anxi) می‌نامد.', en: 'The Han court historian, contemporary with the embassies. He calls Parthia “Anxi”.' } },
  { id: 'isidore', author: 'Isidore of Charax, tr. W. H. Schoff', title: 'Parthian Stations, § 7', year: '1914' },
  { id: 'nisa-ostraca', author: 'I. M. Diakonoff, V. A. Livshits', title: 'Parthian Economic Documents from Nisa (Corpus Inscriptionum Iranicarum II/II)', year: '1976–2001', note: { fa: 'هزاران سفال‌نوشتهٔ اداری از انبارهای شراب نسا؛ تنها اسناد بومی پارتی این دوره.', en: 'Thousands of administrative ostraca from the wine stores of Nisa; the only native Parthian documents of the period.' } },
  { id: 'kawami', author: 'T. S. Kawami', title: 'Monumental Art of the Parthian Period in Iran (Acta Iranica 26)', year: '1987' },
  { id: 'polybius', author: 'Polybius, tr. W. R. Paton', title: 'Histories 10.27–31 (Antiochus III in the east)', year: '1923' },
  { id: 'diaries', author: 'A. J. Sachs, H. Hunger', title: 'Astronomical Diaries and Related Texts from Babylonia, vol. III (164–61 BC)', year: '1996', note: { fa: 'یادداشت‌های هم‌روزگار ستاره‌شناسان بابل که رخدادهای سیاسی را هم ثبت می‌کردند؛ استوارترین تقویم این دوره.', en: 'Contemporary notebooks of Babylonian astronomers that also logged political events; the firmest calendar for the period.' } },
  { id: 'ir-arsacids', author: 'K. Schippmann, Encyclopaedia Iranica', title: 'Arsacids ii. The Arsacid dynasty', year: '1986, updated 2016', url: IR('arsacids-ii') },
  { id: 'bivar', author: 'A. D. H. Bivar', title: 'The Political History of Iran under the Arsacids, Cambridge History of Iran 3/1, pp. 21–99', year: '1983' },
  { id: 'wolski', author: 'J. Wolski', title: 'L’Empire des Arsacides (Acta Iranica 32)', year: '1993' },
  { id: 'wolski1981', author: 'J. Wolski', title: 'Le problème de la féodalité dans l’Iran arsacide, Klio 63', year: '1981' },
  { id: 'assar', author: 'G. F. Assar', title: 'A Revised Parthian Chronology of the Period 165–91 BC, Electrum 11, pp. 87–158', year: '2006', note: { fa: 'تاریخ‌گذاری تازه بر پایهٔ سکه‌ها و لوح‌های بابلی؛ مثلاً مهرداد یکم را ۱۶۵–۱۳۲ پ.م. می‌گذارد.', en: 'A new dating from coins and Babylonian tablets; e.g. it puts Mithridates I at 165–132 BCE.' } },
  { id: 'olbrycht2010', author: 'M. J. Olbrycht', title: 'Mithradates I of Parthia and his conquests up to 141 B.C., in Hortus Historiae, pp. 229–245', year: '2010' },
  { id: 'olbrycht-m2', author: 'M. J. Olbrycht', title: 'The early reign of Mithradates II the Great in Parthia, Anabasis 1, pp. 144–158', year: '2010' },
  { id: 'dabrowa', author: 'E. Dąbrowa', title: 'Studia Graeco-Parthica: Political and Cultural Relations between Greeks and Parthians', year: '2011' },
  { id: 'curtis2019', author: 'V. Sarkhosh Curtis', title: 'From Mithradat I (c. 171–138 BCE) to Mithradat II (c. 122/1–91 BCE): the Formation of Arsacid Parthian Iconography, in Y. Moradi (ed.), Afarin Nameh, pp. 25–31', year: '2019', note: { fa: 'برای سکه‌ها، عنوان‌ها و نسب مهرداد دوم.', en: 'Used for the coinage, the titles and Mithridates II’s parentage.' } },
  { id: 'sellwood', author: 'D. Sellwood', title: 'An Introduction to the Coinage of Parthia, 2nd ed.', year: '1980', note: { fa: 'شماره‌گذاری استاندارد سکه‌های پارتی («S»)؛ برخی انتساب‌هایش امروز بازنگری شده است.', en: 'The standard numbering of Parthian coins (“S”); some of its attributions have since been revised.' } },
  { id: 'badian', author: 'E. Badian', title: 'Sulla’s Cilician command, in Studies in Greek and Roman History', year: '1964' },
  { id: 'dignas', author: 'B. Dignas, E. Winter', title: 'Rome and Persia in Late Antiquity, p. 12', year: '2007' },
  { id: 'shayegan', author: 'M. R. Shayegan', title: 'Arsacids and Sasanians: Political Ideology in Post-Hellenistic and Late Antique Persia', year: '2011' },
  { id: 'plut-crassus', author: 'Plutarch, tr. J. Dryden, rev. A. H. Clough', title: 'Life of Crassus, chs. 16–33', year: '1864', url: 'https://www.gutenberg.org/ebooks/674', note: { fa: 'پیوسته‌ترین روایت حران؛ به گفتهٔ ایرانیکا (شهبازی) بر پایهٔ گزارش شاهدی ناشناس، شاید یونانی‌مآبی میان‌رودانی.', en: 'The fullest account of Carrhae; per Iranica (Shahbazi) it rests on an unknown eyewitness, probably a Hellenised Mesopotamian.' } },
  { id: 'plut-antony', author: 'Plutarch, tr. J. Dryden, rev. A. H. Clough', title: 'Life of Antony, chs. 33–52', year: '1864', url: 'https://www.gutenberg.org/ebooks/674', note: { fa: 'بر پایهٔ گزارش دلیوس، همراه آنتونیوس؛ به گفتهٔ ایرانیکا جانب آنتونیوس را می‌گیرد و گناه را به گردن شاه ارمنستان می‌اندازد.', en: 'Based on the report of Dellius, Antony’s companion; Iranica notes a pro-Antony bias that blames the Armenian king.' } },
  { id: 'plut-pompey', author: 'Plutarch, tr. J. Dryden, rev. A. H. Clough', title: 'Life of Pompey, chs. 33, 36, 38–39', year: '1864', url: 'https://www.gutenberg.org/ebooks/674' },
  { id: 'plut-lucullus', author: 'Plutarch, tr. J. Dryden, rev. A. H. Clough', title: 'Life of Lucullus, chs. 30–31', year: '1864', url: 'https://www.gutenberg.org/ebooks/674' },
  { id: 'josephus', author: 'Flavius Josephus, tr. W. Whiston', title: 'Antiquities of the Jews 13.14.3 (13.384–386); 18.2.4 (18.39–52)', year: '1737', url: 'https://www.gutenberg.org/ebooks/2848' },
  { id: 'res-gestae', author: 'Augustus, tr. T. Bushnell', title: 'Res Gestae Divi Augusti (The Deeds of the Divine Augustus) §§ 27, 29, 32–33', year: '1998', url: 'https://en.wikisource.org/wiki/The_Deeds_of_the_Divine_Augustus', note: { fa: 'گزارش خود آگوستوس از کارهایش؛ تبلیغ رسمی، نه روایت بی‌طرف.', en: 'Augustus’ own account of his deeds: official propaganda, not a neutral record.' } },
  { id: 'tacitus', author: 'Tacitus, tr. A. J. Church & W. J. Brodribb', title: 'Annals 2.1–4, 2.58, 2.68', year: '1876' },
  { id: 'dio', author: 'Cassius Dio, tr. E. Cary', title: 'Roman History 36.1–3, 37.5–7, 39.56, 40.12–30, 48.24–41, 49.19–33, 54.8, 55.10', year: '1914–1927' },
  { id: 'lucian', author: 'Lucian, tr. A. M. Harmon', title: 'Octogenarians (Macrobii) 15', year: '1913' },
  { id: 'velleius', author: 'Velleius Paterculus, tr. F. W. Shipley', title: 'Roman History 2.101–102', year: '1924' },
  { id: 'phlegon', author: 'Phlegon of Tralles (FGrH 257 F 12)', title: 'Olympiads, fragment on the 177th Olympiad', year: '2nd c. CE' },
  { id: 'ir-orodes2', author: 'M. J. Olbrycht, Encyclopaedia Iranica', title: 'Orodes II', year: '2021', url: IR('orodes-ii') },
  { id: 'ir-phraates4', author: 'M. J. Olbrycht, Encyclopaedia Iranica', title: 'Phraates IV', year: '2021', url: IR('phraates-iv') },
  { id: 'ir-phraates5', author: 'M. J. Olbrycht, Encyclopaedia Iranica', title: 'Phraates V (Phraataces)', year: '2021', url: IR('phraates-v') },
  { id: 'ir-carrhae', author: 'A. Sh. Shahbazi, Encyclopaedia Iranica', title: 'Carrhae', year: '1990, updated 2013', url: 'https://www.iranicaonline.org/articles/carrhae-harran-town-in-mesopotamia-where-in-may-53-b/' },
  { id: 'ir-antony', author: 'M. L. Chaumont, Encyclopaedia Iranica', title: 'Antony, Mark', year: '1986, updated 2016', url: 'https://www.iranicaonline.org/articles/antony-mark-roman-gencral-ca/' },
  { id: 'ir-gindaros', author: 'Encyclopaedia Iranica', title: 'Gindaros', year: '2001', url: IR('gindaros') },
  { id: 'debevoise', author: 'N. C. Debevoise', title: 'A Political History of Parthia', year: '1938' },
  { id: 'olbrycht1998', author: 'M. J. Olbrycht', title: 'Parthia et ulteriores gentes: Die politischen Beziehungen zwischen dem arsakidischen Iran und den Nomaden der eurasischen Steppen', year: '1998' },
  { id: 'sherwin-white', author: 'A. N. Sherwin-White', title: 'Roman Foreign Policy in the East, 168 B.C. to A.D. 1', year: '1984' },
  { id: 'ziegler', author: 'K.-H. Ziegler', title: 'Die Beziehungen zwischen Rom und dem Partherreich', year: '1964' },
  { id: 'pliny', author: 'Pliny the Elder, tr. J. Bostock & H. T. Riley', title: 'Natural History 6.18 (6.47): Margiana', year: '1855' },
  { id: 'florus', author: 'Florus, tr. E. S. Forster', title: 'Epitome of Roman History 1.46, 2.19–20', year: '1929' },
  { id: 'dubs', author: 'H. H. Dubs', title: 'A Roman City in Ancient China', year: '1957', note: { fa: 'خاستگاه نظریهٔ «رومیان لیچیان»؛ نظریه‌ای مدرن که در منابع باستانی نیست.', en: 'The origin of the “Romans of Liqian” theory: a modern idea not found in the ancient sources.' } },
  { id: 'overtoom', author: 'N. L. Overtoom', title: 'Reign of Arrows: The Rise of the Parthian Empire in the Hellenistic Middle East', year: '2020' },
] as FeaturedSource[]).map((s) => [s.id, s]))

export const pick = (...ids: string[]): FeaturedSource[] => ids.map((id) => {
  const s = parSources[id]
  if (!s) throw new Error(`unknown source ${id}`)
  return s
})

const u = (path: string) => `https://upload.wikimedia.org/wikipedia/commons/${path}`
const f = (name: string) => `https://commons.wikimedia.org/wiki/File:${name}`
const BYSA3 = 'https://creativecommons.org/licenses/by-sa/3.0'
const BYSA4 = 'https://creativecommons.org/licenses/by-sa/4.0'
const cng = (id: string, path: string, name: string, fa: string, en: string): CommonsPhoto =>
  ({ id, src: u(path), page: f(name), author: 'Classical Numismatic Group', license: 'CC BY-SA 3.0', licenseUrl: BYSA3, caption: { fa, en } })
/** Wikimedia Commons photos; licence and author read from the Commons API on 2026-10-30 (batch 1) and 2026-10-31 (batch 2). */
export const parPhotos: Record<string, CommonsPhoto> = {
  'coin-arsaces1': cng('coin-arsaces1', 'd/d0/Coin_of_Arsaces_I_%281%29%2C_Nisa_mint.jpg', 'Coin_of_Arsaces_I_(1),_Nisa_mint.jpg', 'درهم ضرب نسا که به ارشک یکم نسبت می‌دهند: سر بی‌ریش با کلاه نرم (کوربسیا) و کماندار نشسته در پشت. انتساب سکه‌های نخستین میان ارشک یکم و دوم محل بحث است', 'A Nisa drachm attributed to Arsaces I: a beardless head in a soft cap (kyrbasia), a seated archer on the reverse. Which early coins belong to Arsaces I or II is debated'),
  'coin-arsaces2': cng('coin-arsaces2', 'f/f6/Coin_of_Arsaces_II%2C_Ray_mint.jpg', 'Coin_of_Arsaces_II,_Ray_mint.jpg', 'سکهٔ منسوب به ارشک دوم، ضرب ری', 'A coin attributed to Arsaces II, Rhagae (Ray) mint'),
  'coin-phriapatius': cng('coin-phriapatius', 'a/ae/Coin_of_Priapatius%2C_Hekatompylos_mint.jpg', 'Coin_of_Priapatius,_Hekatompylos_mint.jpg', 'درهم منسوب به فریاپت، ضرب هکاتوم‌پیلوس؛ عنوان «شاه» (BASILEŌS) از این زمان پیوسته بر سکه‌ها می‌آید', 'A drachm attributed to Phriapatius, Hecatompylus mint; from now on the title “king” (BASILEŌS) appears regularly'),
  'coin-phraates1': { id: 'coin-phraates1', src: u('7/74/Phraates_I_coin.png'), page: f('Phraates_I_coin.png'), author: 'Classical Numismatic Group', license: 'CC BY-SA 3.0', licenseUrl: BYSA3, caption: { fa: 'سکه‌ای که در ویکی‌مدیا به فرهاد یکم نسبت داده شده؛ توضیح فایل فقط می‌گوید «فرمانروای پارتی». انتساب نامطمئن است', en: 'A coin labelled Phraates I on Wikimedia; the file description only says “Parthian ruler”. The attribution is uncertain' } },
  'coin-mithridates1': cng('coin-mithridates1', '8/8f/Coin_of_Mithradates_I_of_Parthia%2C_Seleucia_mint.jpg', 'Coin_of_Mithradates_I_of_Parthia,_Seleucia_mint.jpg', 'چهاردرهمی مهرداد یکم، ضرب سلوکیه بر دجله: شاه ریش‌دار با دیهیم یونانی، و در پشت هراکلس. سکه‌ای به سبک یونانی برای شهرهای یونانی میان‌رودان', 'A tetradrachm of Mithridates I, Seleucia-on-the-Tigris mint: the bearded king in a Greek diadem, Heracles on the reverse. A Greek-style coin for the Greek cities of Mesopotamia'),
  'coin-phraates2': cng('coin-phraates2', '3/36/Tetradrachm_of_Phraates_II%2C_minted_at_Seleucia_%282%29.jpg', 'Tetradrachm_of_Phraates_II,_minted_at_Seleucia_(2).jpg', 'چهاردرهمی فرهاد دوم، ضرب سلوکیه', 'A tetradrachm of Phraates II, Seleucia mint'),
  'coin-artabanus1': cng('coin-artabanus1', '9/93/Coin_of_Artabanus_I%2C_minted_in_126_BC_at_Seleucia.jpg', 'Coin_of_Artabanus_I,_minted_in_126_BC_at_Seleucia.jpg', 'سکهٔ اردوان یکم، ضرب سلوکیه (حدود ۱۲۶ پ.م.)', 'A coin of Artabanus I, Seleucia mint (c. 126 BCE)'),
  'coin-mithridates2': cng('coin-mithridates2', '0/0d/Coin_of_Mithridates_II_of_Parthia%2C_Ray_mint.jpg', 'Coin_of_Mithridates_II_of_Parthia,_Ray_mint.jpg', 'سکهٔ مهرداد دوم، ضرب ری', 'A coin of Mithridates II, Rhagae (Ray) mint'),
  'coin-tigranes': cng('coin-tigranes', '8/8a/Coin_of_Tigranes_II_the_Great%2C_Antioch_mint.jpg', 'Coin_of_Tigranes_II_the_Great,_Antioch_mint.jpg', 'سکهٔ تیگران دوم ارمنی با تاج بلند ارمنی، ضرب انطاکیه؛ همان شاهزاده‌ای که سال‌ها گروگان پارتیان بود', 'A coin of Tigranes II of Armenia in the tall Armenian tiara, Antioch mint: the prince who spent years as a Parthian hostage'),
  'nisa': { id: 'nisa', src: u('thumb/0/0c/Nisa-Entrance-2015.JPG/960px-Nisa-Entrance-2015.JPG'), page: f('Nisa-Entrance-2015.JPG'), author: 'Bjørn Christian Tørrissen', license: 'CC BY-SA 4.0', licenseUrl: BYSA4, caption: { fa: 'ورودی نسای کهن نزدیک عشق‌آباد (ترکمنستان)، دژ شاهی پارتیان که «مهردادکرت» نام داشت', en: 'The entrance of Old Nisa near Ashgabat (Turkmenistan), the Parthian royal fortress called Mithradatkert' } },
  'zhang-qian': { id: 'zhang-qian', src: u('3/38/ZhangQianTravels.jpg'), page: f('ZhangQianTravels.jpg'), author: 'Mogao Caves mural (anonymous)', license: 'Public domain', caption: { fa: 'نقاشی دیواری غارهای موگائو (دون‌هوانگ): ژانگ چیان با امپراتور وو بدرود می‌گوید. این نقاشی بودایی سده‌ها پس از رخداد کشیده شده و افسانه را نشان می‌دهد، نه صحنهٔ واقعی', en: 'A Mogao Caves (Dunhuang) mural: Zhang Qian takes leave of Emperor Wu. This Buddhist painting was made centuries after the event and shows the legend, not the real scene' } },
  'coin-gotarzes1': { id: 'coin-gotarzes1', src: u('0/03/Coin_of_Gotarzes_I_of_Parthia.jpg'), page: f('Coin_of_Gotarzes_I_of_Parthia.jpg'), author: 'Gdr at en.wikipedia', license: 'Public domain', caption: { fa: 'درهمی که به گودرز یکم نسبت داده می‌شود. انتساب سکه‌های این دهه‌ها (سلوود S33) میان چند شاه محل بحث است', en: 'A drachm attributed to Gotarzes I. The attribution of the coins of these decades (Sellwood S33) among several kings is disputed' } },
  'coin-orodes1': cng('coin-orodes1', '4/45/Coin_of_Orodes_I%2C_Ray_mint.jpg', 'Coin_of_Orodes_I,_Ray_mint.jpg', 'درهم منسوب به ارد یکم، ضرب ری؛ انتساب محل بحث است', 'A drachm attributed to Orodes I, Rhagae (Ray) mint; the attribution is disputed'),
  'coin-sinatruces': cng('coin-sinatruces', '6/6b/Coin_of_Sinatruces%2C_Ray_mint.jpg', 'Coin_of_Sinatruces,_Ray_mint.jpg', 'درهم منسوب به سیناتروک، ضرب ری: شاهی سالخورده با کلاه بلند ستاره‌نشان', 'A drachm attributed to Sinatruces, Rhagae mint: an old king in a tall, star-studded tiara'),
  'coin-phraates3': cng('coin-phraates3', 'b/b3/Coin_of_Phraates_III%2C_Ecbatana_mint.jpg', 'Coin_of_Phraates_III,_Ecbatana_mint.jpg', 'درهم فرهاد سوم، ضرب هگمتانه', 'A drachm of Phraates III, Ecbatana mint'),
  'coin-mithridates3': cng('coin-mithridates3', '4/43/Coin_of_Mithridates_III_of_Parthia%2C_Ray_mint.jpg', 'Coin_of_Mithridates_III_of_Parthia,_Ray_mint.jpg', 'درهم منسوب به مهرداد سوم، ضرب ری. ایرانیکا می‌گوید انتساب برخی سکه‌ها (S40) میان او و ارد دوم محل بحث است', 'A drachm attributed to Mithridates III, Rhagae mint. Iranica notes that some coins (S40) are disputed between him and Orodes II'),
  'coin-orodes2': { id: 'coin-orodes2', src: u('2/21/Coin_of_Orodes_II_of_Parthia.jpg'), page: f('Coin_of_Orodes_II_of_Parthia.jpg'), author: 'Gdr at en.wikipedia', license: 'Public domain', caption: { fa: 'چهاردرهمی ارد دوم، ضرب سلوکیه؛ در پشت، شاه نشسته و الههٔ شهر (توخه) به او دیهیم می‌دهد. زگیل پیشانی شاه بر سکه‌هایش پیداست', en: 'A tetradrachm of Orodes II, Seleucia mint; on the reverse the seated king receives a diadem from the city goddess (Tyche). The wart on the king’s brow shows on his coins' } },
  'surena-statue': { id: 'surena-statue', src: u('thumb/a/a2/Parthian_Man_%28Surena%29_Statue_in_Iran-e_Bastan_Museum.jpg/960px-Parthian_Man_%28Surena%29_Statue_in_Iran-e_Bastan_Museum.jpg'), page: f('Parthian_Man_(Surena)_Statue_in_Iran-e_Bastan_Museum.jpg'), author: 'Wooerfara3661', license: 'CC BY-SA 3.0', licenseUrl: BYSA3, caption: { fa: 'تندیس مفرغی شامی (ایذه، خوزستان) در موزهٔ ایران باستان. آن را در زبان عامه «سورنا» می‌نامند، اما هیچ سند یا کتیبه‌ای این را ثابت نمی‌کند؛ تندیس شاهزاده‌ای محلی است', en: 'The Shami bronze (Izeh, Khuzestan) in the National Museum of Iran. It is popularly called “Surena”, but no inscription or document proves it; it shows a local prince or noble' } },
  'coin-phraates4': cng('coin-phraates4', '8/8e/Coin_of_Phraates_IV%2C_Mithradatkirt_mint.jpg', 'Coin_of_Phraates_IV,_Mithradatkirt_mint.jpg', 'درهم فرهاد چهارم، ضرب مهردادکرت (نسا)', 'A drachm of Phraates IV, Mithradatkert (Nisa) mint'),
  'augustus': { id: 'augustus', src: u('thumb/e/eb/Statue-Augustus.jpg/960px-Statue-Augustus.jpg'), page: f('Statue-Augustus.jpg'), author: 'Till Niermann', license: 'Public domain', caption: { fa: 'آگوستوس پریما پورتا (موزه‌های واتیکان). در میانهٔ زره‌اش مردی پارتی درفش رومی را پس می‌دهد: تبلیغ رومی بازگرداندن درفش‌ها در ۲۰ پ.م.', en: 'The Augustus of Prima Porta (Vatican Museums). In the middle of the breastplate a Parthian hands back a Roman standard: Roman propaganda for the return of 20 BCE' } },
  'coin-musa': cng('coin-musa', 'thumb/0/09/Coin_of_the_Parthian_king_Phraataces_and_of_Musa.jpg/960px-Coin_of_the_Parthian_king_Phraataces_and_of_Musa.jpg', 'Coin_of_the_Parthian_king_Phraataces_and_of_Musa.jpg', 'چهاردرهمی فرهادک (فرهاد پنجم) و موسا: رو، شاه؛ پشت، ملکه با تاج کنگره‌دار و عنوان «ایزدبانوی آسمانی، موسا، ملکه»', 'A tetradrachm of Phraataces (Phraates V) and Musa: the king on the obverse; on the reverse the queen in a turreted crown, titled “Goddess, Heavenly, Musa, Queen”'),
  'coin-orodes3': { id: 'coin-orodes3', src: u('a/a4/Orodes_III_coin.png'), page: f('Orodes_III_coin.png'), author: 'Classical Numismatic Group', license: 'CC BY-SA 3.0', licenseUrl: BYSA3, caption: { fa: 'درهم منسوب به ارد سوم', en: 'A drachm attributed to Orodes III' } },
  'coin-vonones1': cng('coin-vonones1', '8/81/Tetradrachm_of_Vonones_I%2C_Seleucia_mint.jpg', 'Tetradrachm_of_Vonones_I,_Seleucia_mint.jpg', 'چهاردرهمی ونن یکم، ضرب سلوکیه', 'A tetradrachm of Vonones I, Seleucia mint'),
  'coin-vonones1-nike': { id: 'coin-vonones1-nike', src: u('e/e1/Coin_of_Vonones_I_of_Parthia.jpg'), page: f('Coin_of_Vonones_I_of_Parthia.jpg'), author: 'Gdr at en.wikipedia', license: 'Public domain', caption: { fa: 'درهم ونن یکم، ضرب هگمتانه، با نوشتهٔ «شاه ونن، پیروز بر اردوان» در پشت؛ سکه‌ای که پیروزی نخستش را جار می‌زند', en: 'An Ecbatana drachm of Vonones I whose reverse reads “King Vonones, victor over Artabanus”: a coin that trumpets his first victory' } },
}
export const photos = (...ids: string[]): CommonsPhoto[] => ids.map((id) => parPhotos[id])

export const related = (...links: [string, string, string][]) => [
  ...links.map(([slug, fa, en]) => ({ href: { fa: `/king/${slug}`, en: `/en/king/${slug}` }, label: { fa, en } })),
  { href: { fa: '/dynasty/parthians', en: '/dynasty/parthians' }, label: { fa: 'دودمان اشکانی', en: 'The Arsacid dynasty' } },
]

/** Assar vs traditional reign dates. */
export const ASSAR = (fa: string, en: string) => ({ certaintyNote: { fa: `تاریخ‌ها محل بحث است: ${fa}`, en: `The dates are disputed: ${en}` } })
