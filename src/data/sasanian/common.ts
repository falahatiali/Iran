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
export const SATALA: Coord = [39.66, 40.02]
/** Hormozd-Ardašēr (Sūq al-Ahwāz), modern Ahvaz. */
export const AHVAZ: Coord = [48.67, 31.32]
/** Narseh's camp at Osḫa in Armenia Major, east of Erzurum, where Galerius surprised him. */
export const OSXA: Coord = [41.6, 39.95]
/** Callinicum (Raqqa). */
export const CALLINICUM: Coord = [39.02, 35.95]
export const ARMENIA: Coord = [44.0, 39.6]
/** Īḏaj (modern Izeh) in Khuzestan, near Hormizd II's district of Wahišt-Hormoz. */
export const IDAJ: Coord = [49.87, 31.83]
/** The Syrian desert edge, for Balʿami's story of a raid on the Arabs of Syria. */
export const SYRIA_DESERT: Coord = [37.5, 33.0]
/** Hajar (al-Ḥasā) and al-Ḵaṭṭ, the Bahrain coast. */
export const HAJAR: Coord = [49.6, 25.4]
export const YAMAMA: Coord = [46.8, 24.2]
/** Ḥira, the Lakhmid seat, 7 km from modern Najaf. */
export const HIRA: Coord = [44.4, 31.98]
export const AMIDA: Coord = [40.23, 37.91]
export const SINGARA: Coord = [41.86, 36.33]
/** Bezabde, on the Tigris near Cizre. */
export const BEZABDE: Coord = [42.19, 37.33]
/** Sumere (Samarra), Ammianus 25.6.4. */
export const SAMARRA: Coord = [43.87, 34.2]
/** Maranga, on the Tigris north of Ctesiphon; the exact site is unknown, the marker is approximate. */
export const MARANGA: Coord = [44.2, 33.75]
/** Circesium, where Julian crossed the Khabur into Persian land. */
export const CIRCESIUM: Coord = [40.42, 35.17]
/** Pirisabora (Anbar). */
export const PIRISABORA: Coord = [43.68, 33.4]
export const TAQ_E_BOSTAN: Coord = [47.13, 34.39]
export const SUSA_KARKHA: Coord = [48.25, 32.2]
export const NISHAPUR: Coord = [58.8, 36.21]
/** Gurgan (Hyrcania). */
export const HYRCANIA: Coord = [54.43, 36.84]
export const MARV: Coord = [61.83, 37.66]
export const NISA: Coord = [58.2, 38.0]
/** Kušmēhan, near Marv; the exact site is unknown. */
export const KUSMEHAN: Coord = [62.3, 37.3]
/** Ādur Gušnasp at Takht-e Soleyman. */
export const ADUR_GUSNASP: Coord = [47.24, 36.6]
/** Seleucia, beside Ctesiphon (Council of 410). */
export const SELEUCIA: Coord = [44.52, 33.1]
export const ISFAHAN: Coord = [51.67, 32.65]
export const THEODOSIOPOLIS: Coord = [41.27, 39.9]
/** Arbela (Erbil), seat of Adiabene (Ḥadyab). */
export const ARBELA: Coord = [44.01, 36.19]
/** The central Caucasus passes (Darial), the Huns' road south in 395. */
export const CAUCASUS: Coord = [44.63, 42.75]
export const CONSTANTINOPLE: Coord = [28.98, 41.01]
/** Avarayr plain on the Tłmut (Zangmar) river, southeast of Maku; the exact field is not known, the marker is approximate. */
export const AVARAYR: Coord = [44.75, 39.15]
/** Qumes (Damghan). */
export const DAMGHAN: Coord = [54.34, 36.17]
export const RAY: Coord = [51.43, 35.59]
export const BALKH: Coord = [66.9, 36.76]
/** Dara (Anastasiopolis), near modern Oğuz, Mardin. */
export const DARA: Coord = [40.94, 37.18]
/** Martyropolis (Silvan). */
export const MARTYROPOLIS: Coord = [41.0, 38.14]
/** Caucasian Albania, around the lower Kura. */
export const ALBANIA: Coord = [47.0, 40.8]

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
  { id: 'ir-edessa', author: 'S. N. C. Lieu, Encyclopaedia Iranica', title: 'Edessa', year: '1997', url: IR('edessa') },
  { id: 'henning-m3', author: 'W. B. Henning (tr.), quoted in Iranica “Mani”', title: 'Mani’s last journey (M 3), BSOAS 10, 1942, pp. 941–53', year: '1942', note: { fa: 'گزارش نوح‌زادگ، ترجمان مانی، از دیدار واپسین او با بهرام یکم؛ ایرانیکا آن را گزارشی «آگاه و درخور اعتماد» از یک شاهد می‌خواند.', en: 'The report of Nūḥzādag, Mani’s interpreter, on his last audience with Bahram I; Iranica calls it a “well-informed and trustworthy eyewitness report”.' } },
  { id: 'ir-mani', author: 'W. Sundermann, Encyclopaedia Iranica', title: 'Mani', year: '2009', url: IR('mani-founder-manicheism') },
  { id: 'ir-hormozd1', author: 'M. R. Shayegan, Encyclopaedia Iranica', title: 'Hormozd I', year: '2004', url: IR('hormozd-i') },
  { id: 'ir-bahram1', author: 'A. Sh. Shahbazi, Encyclopaedia Iranica', title: 'Bahrām I', year: '1988', url: IR('bahram-01') },
  { id: 'ir-bahram2', author: 'A. Sh. Shahbazi, Encyclopaedia Iranica', title: 'Bahrām II', year: '1988', url: IR('bahram-ii') },
  { id: 'ir-bahram3', author: 'O. Klíma, Encyclopaedia Iranica', title: 'Bahrām III', year: '1988', url: IR('bahram-iii') },
  { id: 'ir-narseh', author: 'U. Weber, Encyclopaedia Iranica', title: 'Narseh', year: '2016', url: IR('narseh') },
  { id: 'ir-kartir', author: 'P. O. Skjærvø, Encyclopaedia Iranica', title: 'Kartir', year: '2011', url: IR('kartir'), note: { fa: 'ترجمهٔ بخش‌هایی از کتیبه‌های کرتیر در این مقاله آمده است.', en: 'The article translates passages from Kartir’s inscriptions.' } },
  { id: 'cmc', author: 'A. Henrichs & L. Koenen (via Iranica)', title: 'Cologne Mani Codex 18', year: '1970–1975', note: { fa: 'زندگی‌نامهٔ یونانی مانی؛ تاریخ تاج‌گذاری شاپور و گشودن هترا را می‌دهد. اینجا تنها از راه ایرانیکا.', en: 'A Greek life of Mani; it dates Shapur’s crowning and the fall of Hatra. Used here only through Iranica.' } },
  { id: 'ir-hormozd2', author: 'A. Sh. Shahbazi, Encyclopaedia Iranica', title: 'Hormozd II', year: '2004', url: IR('hormozd-ii') },
  { id: 'ir-adurnarseh', author: 'A. Tafażżolī, Encyclopaedia Iranica', title: 'Ādur Narseh', year: '1983', url: IR('adur-narseh') },
  { id: 'ir-shapur2', author: 'T. Daryaee, Encyclopaedia Iranica', title: 'Šāpur II', year: '2009', url: IR('shapur-ii') },
  { id: 'ammianus', author: 'Ammianus Marcellinus, tr. J. C. Rolfe (Loeb, 1935–1940)', title: 'Res Gestae, books 18–25 (LacusCurtius)', year: '1935–1940', url: 'https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Ammian/home.html', note: { fa: 'آمیانوس افسری رومی بود که خود در آمیدا (۳۵۹ م.) و در لشکرکشی ژولیان (۳۶۳ م.) حاضر بود. شاهد عینی است، اما از سوی روم.', en: 'Ammianus was a Roman officer who was himself present at Amida (359) and on Julian’s campaign (363). An eyewitness, but on the Roman side.' } },
  { id: 'agathias', author: 'Agathias, tr. J. D. Frendo', title: 'The Histories (CFHB 2A), book 4.25–27', year: '1975', url: 'https://archive.org/details/cfhb-11.1-nicetae-choniatae-historia', note: { fa: 'آگاثیاس (سدهٔ ششم م.) فهرست شاهان ساسانی را، به گفتهٔ خودش، از سالنامه‌های شاهی ایران گرفت.', en: 'Agathias (6th century) took his list of Sasanian kings, by his own account, from the Persian royal annals.' } },
  { id: 'ir-jovian', author: 'E. Kettenhofen, Encyclopaedia Iranica', title: 'Jovian', year: '2009', url: IR('jovian') },
  { id: 'ir-julian', author: 'E. Kettenhofen, Encyclopaedia Iranica', title: 'Julian', year: '2009', url: IR('julian') },
  { id: 'ir-ardashir2', author: 'A. Sh. Shahbazi, Encyclopaedia Iranica', title: 'Ardašīr II', year: '1986', url: IR('ardasir-ii-sasanian-king') },
  { id: 'overlaet', author: 'B. Overlaet', title: 'Ardashir II or Shapur III? Reflections on the identity of a king in the smaller grotto at Taq-i Bustan, Iranica Antiqua 46, pp. 235–50', year: '2011', url: 'https://doi.org/10.2143/IA.46.0.2084421' },
  { id: 'overlaet2', author: 'B. Overlaet', title: 'Ahura Mazda and Shapur II? A note on Taq-i Bustan I, the investiture of Ardashir II (379–383), Iranica Antiqua 47', year: '2012', url: 'https://doi.org/10.2143/ia.47.0.2141964' },
  { id: 'ir-bahram4', author: 'O. Klíma, Encyclopaedia Iranica', title: 'Bahrām IV', year: '1988', url: 'https://www.iranicaonline.org/articles/bahram-the-name-of-six-sasanian-kings/bahram-iv/' },
  { id: 'ir-yazdegerd1', author: 'A. Sh. Shahbazi, Encyclopaedia Iranica', title: 'Yazdegerd I', year: '2003', url: IR('yazdegerd-i') },
  { id: 'sasanika-stbn', author: 'Sasanika (UC Irvine)', title: 'Šāpūr II & Šāpūr III’s Inscription, Ṭāq-e Bustān (ŠTBn-I & II): transcription and translation', year: 'n.d.', url: 'https://sites.uci.edu/sasanika/sapur-ii-sapur-iiis-inscription-%e1%b9%adaq-e-bustan-stbn-i-ii/' },
  { id: 'procopius', author: 'Procopius, tr. H. B. Dewing (Loeb)', title: 'History of the Wars 1.2–1.18', year: '1914', url: 'https://archive.org/details/procopius00procgoog' },
  { id: 'ir-bahram5', author: 'O. Klíma, Encyclopaedia Iranica', title: 'Bahrām V Gōr', year: '1988', url: 'https://www.iranicaonline.org/articles/bahram-the-name-of-six-sasanian-kings/bahram-v/' },
  { id: 'ir-hira', author: 'C. E. Bosworth, Encyclopaedia Iranica', title: 'Ḥira', year: '2003', url: IR('hira') },
  { id: 'ir-kidarites', author: 'F. Grenet, Encyclopaedia Iranica', title: 'Kidarites', year: '2022', url: IR('kidarites') },
  { id: 'ir-haftpeykar', author: 'F. de Blois, Encyclopaedia Iranica', title: 'Haft Peykar', year: '2002', url: IR('haft-peykar') },
  { id: 'ir-yazdegerd2', author: 'T. Daryaee, Encyclopaedia Iranica', title: 'Yazdegerd II', year: '2000', url: IR('yazdgerd-ii') },
  { id: 'ir-avarayr', author: 'R. H. Hewsen, Encyclopaedia Iranica', title: 'Avarayr', year: '1987', url: IR('avarayr') },
  { id: 'ir-elise', author: 'R. W. Thomson, Encyclopaedia Iranica', title: 'Ełišē', year: '1998', url: IR('elise') },
  { id: 'ir-mamikonean', author: 'N. Garsoïan, Encyclopaedia Iranica', title: 'Mamikonean family', year: '2000', url: IR('mamikonean') },
  { id: 'elishe', author: 'Elishe, tr. R. W. Thomson', title: 'History of Vardan and the Armenian War (Harvard Armenian Texts and Studies 5)', year: '1982', url: 'https://archive.org/details/eghishe-vardan-1982', note: { fa: 'تامسون (ایرانیکا) می‌گوید کتاب الیشه احتمالاً بازنویسیِ سدهٔ ششمِ تاریخ غزار است و روایتی ادبی و آراسته دارد. شماره‌ها در قلاب، صفحه‌های متن ارمنی‌اند.', en: 'Thomson (Iranica) says Elishe’s book is probably a 6th-century rewriting of Łazar and is literary and elaborate. Numbers in brackets are pages of the Armenian edition.' } },
  { id: 'lazar', author: 'Łazar Pʿarpecʿi, tr. R. W. Thomson (Appendix to Elishe, 1982)', title: 'The Armenian War according to Łazar Pʿarpecʿi', year: '1982', url: 'https://archive.org/details/eghishe-vardan-1982', note: { fa: 'غزار حدود ۵۰۰ م. نوشت. تامسون یادآوری می‌کند متنی که مانده میان سده‌های دوازدهم و پانزدهم بازنویسی شده است.', en: 'Łazar wrote around 500. Thomson notes that the surviving text was rewritten between the 12th and 15th centuries.' } },
  { id: 'ir-hormozd3', author: 'A. Sh. Shahbazi, Encyclopaedia Iranica', title: 'Hormozd III', year: '2004', url: IR('hormozd-iii') },
  { id: 'ir-peroz', author: 'K. Schippmann, Encyclopaedia Iranica', title: 'Fīrūz (Pērōz) I', year: '1999', url: 'https://www.iranicaonline.org/articles/peroz/i-history/' },
  { id: 'ir-balas', author: 'M. L. Chaumont, Encyclopaedia Iranica', title: 'Balāš, Sasanian king of kings', year: '1988', url: 'https://www.iranicaonline.org/articles/balas/viii-balas-sasanian-king-of-kings/' },
  { id: 'ir-jamasp', author: 'J. K. Choksy, Encyclopaedia Iranica', title: 'Jāmāsp I: reign', year: '2008', url: 'https://www.iranicaonline.org/articles/jamasp-2/jamasp-i-reign/' },
  { id: 'ir-kawad1', author: 'N. Schindel, Encyclopaedia Iranica', title: 'Kawād I: reign', year: '2013', url: IR('kawad-i-reign') },
  { id: 'ir-sasdyn', author: 'A. Sh. Shahbazi, Encyclopaedia Iranica', title: 'Sasanian dynasty', year: '2005', url: IR('sasanian-dynasty') },
  { id: 'ir-religions', author: 'P. G. Kreyenbroek, Encyclopaedia Iranica', title: 'Iran ix. Religions in Iran (1) Pre-Islamic', year: '2006', url: 'https://www.iranicaonline.org/articles/iran-ix1-religions-in-iran/iran-ix-religions-in-iran-1-pre-islamic-1-1-overview/' },
] as FeaturedSource[]).map((s) => [s.id, s]))

export const pick = (...ids: string[]): FeaturedSource[] => ids.map((id) => {
  const s = sasSources[id]
  if (!s) throw new Error(`unknown source ${id}`)
  return s
})

const u = (path: string) => `https://upload.wikimedia.org/wikipedia/commons/${path}`
const f = (name: string) => `https://commons.wikimedia.org/wiki/File:${name}`
const BY2 = 'https://creativecommons.org/licenses/by/2.0'
const BY25 = 'https://creativecommons.org/licenses/by/2.5'
const BY4 = 'https://creativecommons.org/licenses/by/4.0'
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
  'relief-hormizd2': { id: 'relief-hormizd2', src: u('thumb/a/a2/Relief_of_Hormizd_II_in_Naqsh-e_Rostam.jpg/960px-Relief_of_Hormizd_II_in_Naqsh-e_Rostam.jpg'), page: f('Relief_of_Hormizd_II_in_Naqsh-e_Rostam.jpg'), author: 'Diego Delso', license: 'CC BY 4.0', licenseUrl: BY4, caption: { fa: 'نقش سوارکاری هرمز دوم در نقش رستم: شاه با نیزه سواری زره‌پوش را از اسب می‌اندازد', en: 'Hormizd II’s equestrian relief at Naqsh-e Rostam: the king unhorses an armoured rider with his lance' } },
  'coin-hormizd2': cng('coin-hormizd2', 'a/a0/Coin_of_Hormizd_II.jpg', 'Coin_of_Hormizd_II.jpg', 'سکهٔ هرمز دوم با تاج شاهین', 'A coin of Hormizd II with the falcon crown'),
  'coin-shapur2': { id: 'coin-shapur2', src: u('thumb/5/5f/Silver_coin_of_Shapur_II%2C_309-379_CE%2C_from_Iraq%2C_Sulaymaniyah_Museum.jpg/960px-Silver_coin_of_Shapur_II%2C_309-379_CE%2C_from_Iraq%2C_Sulaymaniyah_Museum.jpg'), page: f('Silver_coin_of_Shapur_II,_309-379_CE,_from_Iraq,_Sulaymaniyah_Museum.jpg'), author: 'Osama Shukir Muhammed Amin', license: 'CC BY-SA 4.0', licenseUrl: BYSA4, caption: { fa: 'درهم سیمین شاپور دوم، موزهٔ سلیمانیه', en: 'A silver drachm of Shapur II, Sulaymaniyah Museum' } },
  'amida-walls': { id: 'amida-walls', src: u('thumb/7/75/City_Wall_and_Battlements_-_Diyarbakir_-_Turkey_%285777328071%29.jpg/960px-City_Wall_and_Battlements_-_Diyarbakir_-_Turkey_%285777328071%29.jpg'), page: f('City_Wall_and_Battlements_-_Diyarbakir_-_Turkey_(5777328071).jpg'), author: 'Adam Jones', license: 'CC BY-SA 2.0', licenseUrl: BYSA2, caption: { fa: 'باروی دیاربکر (آمیدای کهن). بیشتر دیوار امروزی از بازسازی‌های پس از سدهٔ چهارم است.', en: 'The walls of Diyarbakır (ancient Amida). Most of today’s wall comes from rebuildings after the 4th century.' } },
  'tb-small': { id: 'tb-small', src: u('thumb/e/ed/Taq-e_Bostan_-_High-relief_Shapur_II_and_Shapur_III.jpg/960px-Taq-e_Bostan_-_High-relief_Shapur_II_and_Shapur_III.jpg'), page: f('Taq-e_Bostan_-_High-relief_Shapur_II_and_Shapur_III.jpg'), author: 'Philippe Chavin', license: 'CC BY 2.5', licenseUrl: BY25, caption: { fa: 'ایوان کوچک طاق بستان: دو شاه ایستاده که کتیبه‌ها آنان را شاپور دوم و شاپور سوم می‌نامند', en: 'The small grotto at Taq-e Bostan: two standing kings whom the inscriptions name as Shapur II and Shapur III' } },
  'tb-ardashir2': { id: 'tb-ardashir2', src: u('thumb/7/76/Taq-e_Bostan_%28Kermanshah%29_%E2%80%93_Relief_of_the_Coronation_of_Ardashir_II.jpg/960px-Taq-e_Bostan_%28Kermanshah%29_%E2%80%93_Relief_of_the_Coronation_of_Ardashir_II.jpg'), page: f('Taq-e_Bostan_(Kermanshah)_–_Relief_of_the_Coronation_of_Ardashir_II.jpg'), author: 'Skot', license: 'CC BY-SA 4.0', licenseUrl: BYSA4, caption: { fa: 'نقش دیهیم‌ستانی اردشیر دوم در طاق بستان: در میان اردشیر، در راست کسی با تاج شاپور دوم که حلقهٔ شاهی را می‌دهد، در چپ مهر بر گل نیلوفر؛ زیر پای دو شاه، رومی افتاده‌ای', en: 'Ardashir II’s investiture relief at Taq-e Bostan: Ardashir in the centre, on the right a figure in Shapur II’s crown handing him the ring, on the left Mithra on a lotus; beneath the two kings lies a fallen Roman' } },
  'coin-ardashir2': { id: 'coin-ardashir2', src: u('thumb/e/e3/Drachm_of_Ardashir_II_-_Bishapur.jpg/960px-Drachm_of_Ardashir_II_-_Bishapur.jpg'), page: f('Drachm_of_Ardashir_II_-_Bishapur.jpg'), author: 'Classical Numismatic Group, LLC', license: 'CC BY 4.0', licenseUrl: BY4, caption: { fa: 'درهم اردشیر دوم، ضرب بیشاپور؛ تاج گنبدی اردشیر یکم', en: 'A drachm of Ardashir II, Bishapur mint, with Ardashir I’s domed crown' } },
  'coin-shapur3': cng('coin-shapur3', 'a/ab/Coin_of_the_Sasanian_king_Shapur_III%2C_Sindh_mint.jpg', 'Coin_of_the_Sasanian_king_Shapur_III,_Sindh_mint.jpg', 'سکهٔ شاپور سوم، ضرب سند', 'A coin of Shapur III, Sind mint'),
  'coin-bahram4': { id: 'coin-bahram4', src: u('thumb/3/38/Drachm_of_Bahram_IV_ca_CE_388%E2%80%9399.jpg/960px-Drachm_of_Bahram_IV_ca_CE_388%E2%80%9399.jpg'), page: f('Drachm_of_Bahram_IV_ca_CE_388–99.jpg'), author: 'Metropolitan Museum of Art', license: 'CC0', caption: { fa: 'درهم بهرام چهارم با تاج بال‌دار، موزهٔ متروپولیتن', en: 'A drachm of Bahram IV with the winged crown, Metropolitan Museum of Art' } },
  'coin-yazdegerd1': cng('coin-yazdegerd1', '6/60/Coin_of_Yazdegerd_I%2C_Gurgan_or_Qum_mint.jpg', 'Coin_of_Yazdegerd_I,_Gurgan_or_Qum_mint.jpg', 'سکهٔ یزدگرد یکم؛ تاج گنبدی با کنگره و هلال ماه', 'A coin of Yazdegerd I: the domed crown with merlons and a crescent moon'),
  'coin-bahram5': { id: 'coin-bahram5', src: u('7/7d/Vahr%C4%81m_%28Bahram%29_V_CE_420-438_AV_Dinar_23mm_7.08_g_Sind_mint.jpg'), page: f('Vahrām_(Bahram)_V_CE_420-438_AV_Dinar_23mm_7.08_g_Sind_mint.jpg'), author: 'CNG Coins', license: 'CC BY-SA 3.0', licenseUrl: BYSA3, caption: { fa: 'دینار زر بهرام پنجم، ضرب سند', en: 'A gold dinar of Bahram V, Sind mint' } },
  'plate-azadeh': { id: 'plate-azadeh', src: u('thumb/e/e5/Plate_with_a_hunting_scene_from_the_tale_of_Bahram_Gur_and_Azadeh_MET_DT1634.jpg/960px-Plate_with_a_hunting_scene_from_the_tale_of_Bahram_Gur_and_Azadeh_MET_DT1634.jpg'), page: f('Plate_with_a_hunting_scene_from_the_tale_of_Bahram_Gur_and_Azadeh_MET_DT1634.jpg'), author: 'Metropolitan Museum of Art', license: 'CC0', caption: { fa: 'بشقاب سیمین ساسانی با صحنهٔ شکار از داستان بهرام گور و آزاده، موزهٔ متروپولیتن', en: 'A Sasanian silver plate with a hunting scene from the tale of Bahram Gur and Azadeh, Metropolitan Museum of Art' } },
  'lions-crown': { id: 'lions-crown', src: u('5/51/Bahram_Gur_Slays_Two_Lions_and_Gains_the_Crown.jpeg'), page: f('Bahram_Gur_Slays_Two_Lions_and_Gains_the_Crown.jpeg'), author: 'Anonymous (Safavid), Museum of Fine Arts, Boston', license: 'Public domain', caption: { fa: 'نگارهٔ صفوی از شاهنامه: بهرام گور دو شیر را می‌کشد و تاج را برمی‌دارد (روایت، نه تاریخ)', en: 'A Safavid Shahnameh painting: Bahram Gur kills two lions and takes the crown (tradition, not history)' } },
  'blue-pavilion': { id: 'blue-pavilion', src: u('thumb/3/32/%22Bahram_Gur_in_the_Blue_Pavilion%22%2C_Folio_from_Khamsa_%28Quintet%29_of_Nizami_MET_DP277218.jpg/960px-%22Bahram_Gur_in_the_Blue_Pavilion%22%2C_Folio_from_Khamsa_%28Quintet%29_of_Nizami_MET_DP277218.jpg'), page: f('%22Bahram_Gur_in_the_Blue_Pavilion%22,_Folio_from_Khamsa_(Quintet)_of_Nizami_MET_DP277218.jpg'), author: 'Metropolitan Museum of Art', license: 'CC0', caption: { fa: '«بهرام گور در گنبد پیروزه‌گون»، برگی از خمسهٔ نظامی (هفت‌پیکر)، موزهٔ متروپولیتن', en: '“Bahram Gur in the Blue Pavilion”, a folio from Nizami’s Khamsa (Haft Peykar), Metropolitan Museum of Art' } },
  'coin-yazdegerd2': { id: 'coin-yazdegerd2', src: u('8/8e/Coin_of_Yazdegerd_II%2C_uncertain_mint.jpg'), page: f('Coin_of_Yazdegerd_II,_uncertain_mint.jpg'), author: 'Classical Numismatic Group (uploaded by LouisAragon)', license: 'CC BY-SA 2.5', licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.5', caption: { fa: 'دینار زر یزدگرد دوم با نوشتهٔ تازهٔ «مزداپرست، بغ، کی»', en: 'A gold dinar of Yazdegerd II with the new legend “Mazda-worshipping majesty, the Kayanid”' } },
  'avarayr-1569': { id: 'avarayr-1569', src: u('7/72/Yeghishe%2C_Vasn_Vardanay_ew_Hayoc_paterazmin%2C_1569_%28Matenadaran%2C_Ms._1920%2C_no._250v.%29.jpg'), page: f('Yeghishe,_Vasn_Vardanay_ew_Hayoc_paterazmin,_1569_(Matenadaran,_Ms._1920,_no._250v.).jpg'), author: 'Baghesh (1569), Matenadaran Ms. 1920', license: 'Public domain', caption: { fa: 'نبرد آوارایر در نسخهٔ مصور کتاب الیشه، ۱۵۶۹ م.، ماتناداران ایروان؛ هزار سال پس از نبرد کشیده شده است', en: 'The battle of Avarayr in an illuminated copy of Elishe’s book, 1569, Matenadaran, Yerevan; painted over a thousand years after the battle' } },
  'coin-peroz': { id: 'coin-peroz', src: u('thumb/3/35/Coin_of_Peroz_I%2C_459-484_CE%2C_from_Iraq%2C_Sulaymaniyah_Museum.jpg/960px-Coin_of_Peroz_I%2C_459-484_CE%2C_from_Iraq%2C_Sulaymaniyah_Museum.jpg'), page: f('Coin_of_Peroz_I,_459-484_CE,_from_Iraq,_Sulaymaniyah_Museum.jpg'), author: 'Osama Shukir Muhammed Amin FRCP(Glasg)', license: 'CC BY-SA 4.0', licenseUrl: BYSA4, caption: { fa: 'سکهٔ پیروز یکم، موزهٔ سلیمانیه', en: 'A coin of Peroz I, Sulaymaniyah Museum' } },
  'plate-rams': { id: 'plate-rams', src: u('thumb/c/c4/Plate_with_king_hunting_rams_MET_DT921.jpg/960px-Plate_with_king_hunting_rams_MET_DT921.jpg'), page: f('Plate_with_king_hunting_rams_MET_DT921.jpg'), author: 'Metropolitan Museum of Art', license: 'CC0', caption: { fa: 'بشقاب سیمین ساسانی با شاهی در شکار قوچ، موزهٔ متروپولیتن؛ نام شاه بر بشقاب نیامده است', en: 'A Sasanian silver plate with a king hunting rams, Metropolitan Museum of Art; the plate does not name the king' } },
}
export const photos = (...ids: string[]): CommonsPhoto[] => ids.map((id) => sasPhotos[id])

export const related = (...links: [string, string, string][]) => [
  ...links.map(([slug, fa, en]) => ({ href: { fa: `/king/${slug}`, en: `/en/king/${slug}` }, label: { fa, en } })),
  { href: { fa: '/dynasty/sasanians', en: '/dynasty/sasanians' }, label: { fa: 'دودمان ساسانی', en: 'The Sasanian dynasty' } },
]
