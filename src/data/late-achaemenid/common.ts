/**
 * Shared sources, places and helpers for the late Achaemenid kings (424–329 BCE).
 * Verbatim quotes come only from the published translations named here; Persian renderings are ours.
 */
import type { Bi, Certainty, Coord, DossierSection, EventKind, FeaturedSource, MapEvent } from '../featured/types'
import type { CommonsPhoto } from '../places/types'

export const SUSA: Coord = [48.257, 32.19]
export const PERSEPOLIS: Coord = [52.89, 29.935]
export const BABYLON: Coord = [44.42, 32.54]
export const NIPPUR: Coord = [45.23, 32.13]
export const ECBATANA: Coord = [48.52, 34.8]
export const SARDIS: Coord = [28.04, 38.49]
export const MEMPHIS: Coord = [31.25, 29.85]
export const ELEPHANTINE: Coord = [32.89, 24.09]
export const HYRCANIA: Coord = [54.4, 36.8]
export const MILETUS: Coord = [27.28, 37.53]
export const IASOS: Coord = [27.58, 37.28]
export const ATHENS: Coord = [23.73, 37.97]
export const SPARTA: Coord = [22.43, 37.07]
export const SIDON: Coord = [35.37, 33.56]
export const PELUSIUM: Coord = [32.55, 31.04]
export const XANTHOS: Coord = [29.33, 36.36]
export const BACTRA: Coord = [66.9, 36.76]
export const CYPRUS: Coord = [33.4, 35.1]
export const CADUSIA: Coord = [49.3, 37.6]
export const JERUSALEM: Coord = [35.23, 31.78]

export const IR = (slug: string) => `https://www.iranicaonline.org/articles/${slug}/`
const LIV = (id: string) => `https://www.livius.org/sources/content/achaemenid-royal-inscriptions/${id}/`

/** One bibliography for all the late kings; each king lists the ids it uses. */
export const lateSources: Record<string, FeaturedSource> = Object.fromEntries(([
  { id: 'ctesias', author: 'Ctesias of Cnidus (via Photius’ epitome)', title: 'Persica, §§ 44–64', year: 'c. 390 BCE; tr. J. H. Freese 1920', note: { fa: 'پزشک یونانی در دربار اردشیر دوم؛ پر از داستان درباری و نامعتبر، اما برای جانشینی‌های ۴۲۴–۴۲۳ تقریباً تنها منبع.', en: 'A Greek physician at the court of Artaxerxes II; full of court romance and unreliable, but almost the only source for the successions of 424–423.' } },
  { id: 'diodorus', author: 'Diodorus Siculus, tr. C. H. Oldfather / C. B. Welles', title: 'Library of History, books 12–17 (Loeb)', year: '1946–1963', note: { fa: 'تاریخ‌نگار سدهٔ یکم پ.م.؛ تاریخ‌هایش گاهی جابه‌جاست.', en: 'A 1st-century BCE historian; his dates are sometimes displaced.' } },
  { id: 'thuc', author: 'Thucydides, tr. R. Crawley', title: 'History of the Peloponnesian War, book 8', year: '1874', note: { fa: 'هم‌روزگار، آتنی؛ متن سه پیمان اسپارت و شاه را آورده است.', en: 'Contemporary and Athenian; preserves the texts of the three Sparta–King treaties.' } },
  { id: 'xen-hell', author: 'Xenophon, tr. H. G. Dakyns', title: 'Hellenica', year: '1890–1897', url: 'https://www.gutenberg.org/ebooks/1174' },
  { id: 'xen-anab', author: 'Xenophon, tr. H. G. Dakyns', title: 'Anabasis', year: '1890–1897', url: 'https://www.gutenberg.org/ebooks/1170', note: { fa: 'شاهد عینی، اما مزدور یونانی و طرفدار کوروش کوچک.', en: 'An eyewitness, but a Greek mercenary and a partisan of Cyrus the Younger.' } },
  { id: 'plut-art', author: 'Plutarch, tr. B. Perrin', title: 'Life of Artaxerxes (Loeb)', year: '1926', note: { fa: 'زندگی‌نامهٔ اخلاقی سدهٔ دوم میلادی، بر پایهٔ کتسیاس، دینون و گزنفون.', en: 'A 2nd-century CE moral biography built on Ctesias, Dinon and Xenophon.' } },
  { id: 'arrian', author: 'Arrian, tr. E. J. Chinnock', title: 'The Anabasis of Alexander', year: '1884', url: 'https://www.gutenberg.org/ebooks/46976', note: { fa: 'بر پایهٔ بطلمیوس و آریستوبولوس، همراهان اسکندر؛ از دید مقدونی.', en: 'Based on Ptolemy and Aristobulus, Alexander’s companions; the Macedonian view.' } },
  { id: 'curtius', author: 'Quintus Curtius Rufus, tr. J. C. Rolfe', title: 'History of Alexander (Loeb)', year: '1946', note: { fa: 'رومی سدهٔ یکم میلادی؛ بلاغی، اما گاه از منابع همدل با داریوش.', en: 'A 1st-century CE Roman; rhetorical, but sometimes drawing on sources sympathetic to Darius.' } },
  { id: 'plut-alex', author: 'Plutarch, tr. B. Perrin', title: 'Life of Alexander (Loeb)', year: '1919' },
  { id: 'justin', author: 'Justin, tr. J. S. Watson', title: 'Epitome of Pompeius Trogus, books 5, 10–11', year: '1853', url: 'https://www.attalus.org/translate/justin10.html' },
  { id: 'a2sa', author: 'Artaxerxes II, inscription A2Sa (after P. Lecoq 1997)', title: 'Livius.org: A2Sa', year: 'online', url: LIV('a2sa') },
  { id: 'a2ha', author: 'Artaxerxes II, inscription A2Ha (after P. Lecoq 1997)', title: 'Livius.org: A2Ha', year: 'online', url: LIV('a2ha') },
  { id: 'cowley', author: 'A. E. Cowley', title: 'Aramaic Papyri of the Fifth Century B.C. (nos. 21, 30–33)', year: '1923' },
  { id: 'porten', author: 'B. Porten et al.', title: 'The Elephantine Papyri in English', year: '1996', note: { fa: 'ترجمهٔ استاندارد اسناد آرامی الفانتین.', en: 'The standard translation of the Aramaic Elephantine documents.' } },
  { id: 'stolper1985', author: 'M. W. Stolper', title: 'Entrepreneurs and Empire: The Murašû Archive, the Murašû Firm, and Persian Rule in Babylonia', year: '1985' },
  { id: 'stolper1983', author: 'M. W. Stolper', title: 'The death of Artaxerxes I, Archäologische Mitteilungen aus Iran 16', year: '1983' },
  { id: 'diaries', author: 'A. J. Sachs, H. Hunger', title: 'Astronomical Diaries and Related Texts from Babylonia, vol. I (diary −330 = BM 36761)', year: '1988', note: { fa: 'گزارش هم‌روزگار بابلی؛ نبرد گوگمل را از دید بابل ثبت کرده است.', en: 'A contemporary Babylonian record; it notes Gaugamela from Babylon’s side.' } },
  { id: 'xanthos', author: 'H. Metzger et al.', title: 'Fouilles de Xanthos VI: La stèle trilingue du Létôon', year: '1979' },
  { id: 'manetho', author: 'Manetho, tr. W. G. Waddell', title: 'Manetho (Loeb), frr. 72–75', year: '1940' },
  { id: 'briant', author: 'P. Briant', title: 'From Cyrus to Alexander: A History of the Persian Empire', year: '2002' },
  { id: 'briant-darius', author: 'P. Briant', title: 'Darius in the Shadow of Alexander', year: '2015', note: { fa: 'چگونه داریوش سوم از دید فاتحانش ساخته شد.', en: 'How Darius III was constructed by his conquerors’ historians.' } },
  { id: 'kuhrt', author: 'A. Kuhrt', title: 'The Persian Empire: A Corpus of Sources from the Achaemenid Period', year: '2007' },
  { id: 'lewis', author: 'D. M. Lewis', title: 'Sparta and Persia', year: '1977' },
  { id: 'weiskopf', author: 'M. Weiskopf', title: 'The So-Called “Great Satraps’ Revolt”, 366–360 B.C.', year: '1989', note: { fa: 'استدلال می‌کند که «شورش بزرگ» مجموعه‌ای از شورش‌های محلی بود، نه یک قیام هماهنگ.', en: 'Argues the “Great Revolt” was a set of local revolts, not one coordinated rising.' } },
  { id: 'ir-d2', author: 'H. Sancisi-Weerdenburg, Encyclopaedia Iranica', title: 'Darius iv. Darius II', year: '1994', url: IR('darius-iv') },
  { id: 'ir-a2', author: 'R. Schmitt, Encyclopaedia Iranica', title: 'Artaxerxes II', year: '1986', url: IR('artaxerxes-ii') },
  { id: 'ir-a3', author: 'R. Schmitt, Encyclopaedia Iranica', title: 'Artaxerxes III', year: '1986', url: IR('artaxerxes-iii') },
  { id: 'ir-a4', author: 'P. Lecoq, Encyclopaedia Iranica', title: 'Arses', year: '1986', url: IR('arses-greek-rendering-of-an-old-persian-name-used-as-a-hypocoristic') },
  { id: 'ir-d3', author: 'E. Badian, Encyclopaedia Iranica', title: 'Darius v. Darius III', year: '1994', url: IR('darius-v') },
  { id: 'ir-elephantine', author: 'E. Bresciani, Encyclopaedia Iranica', title: 'Elephantine', year: '1998', url: IR('elephantine') },
  { id: 'ir-ariobarzanes', author: 'A. Sh. Shahbazi, Encyclopaedia Iranica', title: 'Ariobarzanes', year: '1986', url: IR('ariobarzanes-greek-form-of-old-iranian-proper-name-arya-brzana'), note: { fa: 'بخش ۲ دربارهٔ ساتراپ پارس و نبرد دروازه‌های پارس است؛ شمار سپاه را اغراق‌آمیز می‌داند.', en: 'Section 2 covers the satrap of Persis and the Persian Gates; it argues the army figures are inflated.' } },
  { id: 'heckel1980', author: 'W. Heckel', title: 'Alexander at the Persian Gates, Athenaeum 58, pp. 168ff.', year: '1980' },
  { id: 'bosworth1980', author: 'A. B. Bosworth', title: 'A Historical Commentary on Arrian’s History of Alexander, vol. I (pp. 325–326)', year: '1980' },
  { id: 'stein1940', author: 'A. Stein', title: 'Old Routes of Western Iran', year: '1940', note: { fa: 'نخستین بررسی میدانی جای گذرگاه.', en: 'The first field survey of the site of the pass.' } },
  { id: 'speck2002', author: 'H. Speck', title: 'Alexander at the Persian Gates: A Study in Historiography and Topography, American Journal of Ancient History n.s. 1.1', year: '2002' },
  { id: 'livius-pg', author: 'J. Lendering, Livius.org', title: 'Persian Gate (330 BCE)', year: 'online', url: 'https://www.livius.org/articles/battle/persian-gate-330-bce/', note: { fa: 'بر پایهٔ پژوهش اسپک (۲۰۰۲) و بازدید میدانی؛ گذرگاه را در «تنگ میران» (Tang-e Meyran)، شمال‌شرق یاسوج، می‌گذارد.', en: 'Based on Speck (2002) and field visits; places the pass in the Tang-e Meyran, north-east of Yasuj.' } },
  { id: 'farrokh2007', author: 'K. Farrokh', title: 'Shadows in the Desert: Ancient Persia at War (Osprey), p. 106', year: '2007', note: { fa: 'کتابی عمومی؛ قدیمی‌ترین جایی که داستان «یوتاب» در آن یافتیم. منبع باستانی نمی‌آورد.', en: 'A popular book; the earliest place we found the “Youtab” story. It cites no ancient source.' } },
  { id: 'livius', author: 'J. Lendering, Livius.org', title: 'Achaemenid royal inscriptions and king articles', year: 'online', url: 'https://www.livius.org/articles/dynasty/achaemenids/' },
] as FeaturedSource[]).map((s) => [s.id, s]))

export const pick = (...ids: string[]): FeaturedSource[] => ids.map((id) => {
  const s = lateSources[id]
  if (!s) throw new Error(`unknown source ${id}`)
  return s
})

/** Compact MapEvent builder: years are BCE (negative). */
export const ev = (id: string, year: number, when: Bi, kind: EventKind, coord: Coord, title: Bi, body: Bi, certainty: Certainty, sources: string[], extra: Partial<MapEvent> = {}): MapEvent =>
  ({ id, year, when, kind, coord, title, body, certainty, sources, ...extra })
export const note = (fa: string, en: string): { certaintyNote: Bi } => ({ certaintyNote: { fa, en } })

const t = (path: string) => `https://upload.wikimedia.org/wikipedia/commons/thumb/${path}`
const f = (name: string) => `https://commons.wikimedia.org/wiki/File:${name}`
const BYSA4 = 'https://creativecommons.org/licenses/by-sa/4.0'
const BYSA2 = 'https://creativecommons.org/licenses/by-sa/2.0'
/** Wikimedia Commons photos; licence and author read from the Commons API on 2026-10-30. */
export const latePhotos: Record<string, CommonsPhoto> = {
  'tomb-d2': { id: 'tomb-d2', src: t('3/31/Tomb_of_Darius_II%2C_Naqsh-e_Rustam_01.jpg/960px-Tomb_of_Darius_II%2C_Naqsh-e_Rustam_01.jpg'), page: f('Tomb_of_Darius_II,_Naqsh-e_Rustam_01.jpg'), author: 'Bernard Gagnon', license: 'CC BY-SA 4.0', licenseUrl: BYSA4, caption: { fa: 'آرامگاهی در نقش رستم که به داریوش دوم نسبت داده می‌شود؛ بی‌کتیبه، پس انتساب استنباطی است', en: 'The Naqsh-e Rostam tomb attributed to Darius II; it is uninscribed, so the attribution is inferred' } },
  'tomb-a2': { id: 'tomb-a2', src: t('e/eb/Persepolis_-_Tomb_of_Artaxerxes_II.jpg/960px-Persepolis_-_Tomb_of_Artaxerxes_II.jpg'), page: f('Persepolis_-_Tomb_of_Artaxerxes_II.jpg'), author: 'Bernard Gagnon', license: 'CC BY-SA 4.0', licenseUrl: BYSA4, caption: { fa: 'آرامگاه کوه رحمت در تخت‌جمشید که معمولاً به اردشیر دوم نسبت می‌دهند (انتساب قراردادی)', en: 'The Kuh-e Rahmat tomb at Persepolis usually attributed to Artaxerxes II (a conventional attribution)' } },
  'relief-a2': { id: 'relief-a2', src: t('2/25/Persepolis_Tomb_of_Artaxerxes_II_Mnemon_%28r.404-358_BCE%29_Upper_Relief_soldiers_with_labels.jpg/960px-Persepolis_Tomb_of_Artaxerxes_II_Mnemon_%28r.404-358_BCE%29_Upper_Relief_soldiers_with_labels.jpg'), page: f('Persepolis_Tomb_of_Artaxerxes_II_Mnemon_(r.404-358_BCE)_Upper_Relief_soldiers_with_labels.jpg'), author: 'Bruce Allardice', license: 'CC BY-SA 2.0', licenseUrl: BYSA2, caption: { fa: 'نقش نمایندگان سرزمین‌ها، تخت‌بر شاه، بر همان آرامگاه', en: 'The throne-bearing peoples of the empire on the same tomb' } },
  'tomb-a3': { id: 'tomb-a3', src: t('1/17/Persepolis_-_Tomb_of_Artaxerxes_III_01.jpg/960px-Persepolis_-_Tomb_of_Artaxerxes_III_01.jpg'), page: f('Persepolis_-_Tomb_of_Artaxerxes_III_01.jpg'), author: 'Bernard Gagnon', license: 'CC BY-SA 4.0', licenseUrl: BYSA4, caption: { fa: 'آرامگاه دوم کوه رحمت در تخت‌جمشید که به اردشیر سوم نسبت می‌دهند (انتساب قراردادی)', en: 'The second Kuh-e Rahmat tomb at Persepolis, attributed to Artaxerxes III (a conventional attribution)' } },
  'tomb-a3-relief': { id: 'tomb-a3-relief', src: t('9/91/Persepolis_-_Tomb_of_Artaxerxes_III_03.jpg/960px-Persepolis_-_Tomb_of_Artaxerxes_III_03.jpg'), page: f('Persepolis_-_Tomb_of_Artaxerxes_III_03.jpg'), author: 'Bernard Gagnon', license: 'CC BY-SA 4.0', licenseUrl: BYSA4, caption: { fa: 'نقش بالای آرامگاه: شاه در برابر آتشدان و نماد بالدار', en: 'The relief above the tomb: the king before a fire altar and the winged symbol' } },
  'mosaic': { id: 'mosaic', src: t('3/33/The_Alexander_Mosaic_depicting_the_Battle_of_Issus_between_Alexander_the_Great_%26_Darius_III_of_Persia%2C_from_the_House_of_the_Faun_in_Pompeii%2C_Naples_Archaeological_Museum_.jpg/960px-thumbnail.jpg'), page: f('The_Alexander_Mosaic_depicting_the_Battle_of_Issus_between_Alexander_the_Great_&_Darius_III_of_Persia,_from_the_House_of_the_Faun_in_Pompeii,_Naples_Archaeological_Museum_.jpg'), author: 'Hibernian', license: 'CC0', caption: { fa: 'موزاییک اسکندر از خانهٔ فاون در پمپئی (حدود ۱۰۰ پ.م.)، موزهٔ ناپل: داریوش سوم بر گردونه. اینکه نبرد ایسوس است یا گوگمل، محل بحث است', en: 'The Alexander Mosaic from the House of the Faun, Pompeii (c. 100 BCE), Naples: Darius III in his chariot. Whether it shows Issus or Gaugamela is debated' } },
  'gate-site': { id: 'gate-site', src: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/2persian_gate_wall.JPG', page: f('2persian_gate_wall.JPG'), author: 'Jona Lendering', license: 'Public domain', caption: { fa: 'تنگه‌ای که لندرینگ و اسپک آن را جای دیوار اریوبرزن می‌دانند؛ جای دقیق محل بحث است', en: 'The narrows that Lendering and Speck identify as the site of Ariobarzanes’ wall; the exact site is debated' } },
  'yasuj-statue': { id: 'yasuj-statue', src: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Yasuj_Ariobarzan_Square_2.jpg', page: f('Yasuj_Ariobarzan_Square_2.jpg'), author: 'Jona Lendering', license: 'CC0', caption: { fa: 'تندیس امروزی اریوبرزن در یاسوج: یادبودی مدرن، نه چهرهٔ واقعی او', en: 'The modern statue of Ariobarzanes in Yasuj: a modern memorial, not his real likeness' } },
  'pg-1849': { id: 'pg-1849', src: 'https://upload.wikimedia.org/wikipedia/commons/4/42/History_of_Alexander_the_Great_%281849%29_-_Battle_of_the_Persian_Gate.jpg', page: f('History_of_Alexander_the_Great_(1849)_-_Battle_of_the_Persian_Gate.jpg'), author: 'Unknown (1849 book illustration)', license: 'Public domain', caption: { fa: 'نبرد دروازهٔ پارس در کتابی دربارهٔ اسکندر (۱۸۴۹): خیال‌پردازی سدهٔ نوزدهم، نه سند', en: 'The Persian Gate in an 1849 book on Alexander: a 19th-century imagining, not evidence' } },
  'mongez': { id: 'mongez', src: t('3/3e/Angelique_Mongez_-_Mort_de_Darius.jpg/960px-Angelique_Mongez_-_Mort_de_Darius.jpg'), page: f('Angelique_Mongez_-_Mort_de_Darius.jpg'), author: 'Angélique Mongez', license: 'Public domain', caption: { fa: '«مرگ داریوش»، نقاشی آنژلیک مونژ (سدهٔ نوزدهم): تصویری اروپایی، نه سند تاریخی', en: '“The Death of Darius” by Angélique Mongez (19th century): a European image, not a historical record' } },
  'amyrtaios': { id: 'amyrtaios', src: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Amyrtaios_aramaic_papyrus_Sachau.png', page: f('Amyrtaios_aramaic_papyrus_Sachau.png'), author: 'Eduard Sachau', license: 'Public domain', caption: { fa: 'پاپیروس آرامی الفانتین با تاریخ «سال ۵ آمیرتایوس» (چاپ زاخائو ۱۹۱۱): نشانهٔ از دست رفتن مصر', en: 'An Aramaic Elephantine papyrus dated “year 5 of Amyrtaeus” (Sachau’s 1911 edition): a sign that Egypt was lost' } },
  'mibtahiah': { id: 'mibtahiah', src: t('b/b0/Elephantine_papyrus_J_37112_%28Sayce_and_Cowley_1906%2C_F%29_from_the_Mibtahiah_archive.jpg/960px-Elephantine_papyrus_J_37112_%28Sayce_and_Cowley_1906%2C_F%29_from_the_Mibtahiah_archive.jpg'), page: f('Elephantine_papyrus_J_37112_(Sayce_and_Cowley_1906,_F)_from_the_Mibtahiah_archive.jpg'), author: 'Onceinawhile', license: 'CC BY-SA 4.0', licenseUrl: BYSA4, caption: { fa: 'سندی از بایگانی خانوادگی مبطحیه در الفانتین (سدهٔ پنجم پ.م.): خانه، جهیزیه و دعوای مالکیت، به آرامی', en: 'A deed from Mibtahiah’s family archive at Elephantine (5th century BCE): houses, dowry and property suits, in Aramaic' } },
}
export const photos = (...ids: string[]): CommonsPhoto[] => ids.map((id) => latePhotos[id])

const ach = { fa: 'هخامنشیان', en: 'Achaemenids' }
export const ACH = ach
export const related = (...links: [string, string, string][]) => [
  ...links.map(([slug, fa, en]) => ({ href: { fa: `/king/${slug}`, en: `/en/king/${slug}` }, label: { fa, en } })),
  { href: { fa: '/dynasty/achaemenids', en: '/dynasty/achaemenids' }, label: { fa: 'دودمان هخامنشی', en: 'The Achaemenid dynasty' } },
]

const bi = (fa: string, en: string): Bi => ({ fa, en })
/** Clip paths written by scripts/render-campaign-clip.py --section reign into public/media/<slug>/. */
export const clipFor = (slug: string) => {
  const p = (ext: string) => bi(`/media/${slug}/reign-fa.${ext}`, `/media/${slug}/reign-en.${ext}`)
  return { gif: p('gif'), mp4: p('mp4'), webm: p('webm'), poster: p('png'), width: 958, height: 356 }
}
/** A rendered battle clip (render-campaign-clip.py --battle id). */
export const battleClipFor = (slug: string, id: string, width: number, height: number) => {
  const p = (ext: string) => bi(`/media/${slug}/battle-${id}-fa.${ext}`, `/media/${slug}/battle-${id}-en.${ext}`)
  return { gif: p('gif'), mp4: p('mp4'), webm: p('webm'), poster: p('png'), width, height }
}
/** One dossier section: evidence, interpretation and modern meaning kept as separate layers. */
export const sec = (id: string, fa: string, en: string, h: [string[], string[]], i: [string[], string[]], m: [string[], string[]], sources: string[], extra: Partial<DossierSection> = {}): DossierSection =>
  ({ id, title: { fa, en }, historical: { fa: h[0], en: h[1] }, interpretation: { fa: i[0], en: i[1] }, modern: { fa: m[0], en: m[1] }, sources, ...extra })
