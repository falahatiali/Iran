/**
 * Epithets and royal titles, keyed by ruler id. Filled only where a source names the epithet.
 * kind: 'title' = an official style the king used himself (in his own inscriptions);
 *       'nickname' = a later or foreign byname others gave him;
 *       'patronymic' = "son of …", used as a byname.
 */
export type EpithetKind = 'title' | 'nickname' | 'patronymic'
export interface Epithet {
  /** Persian form as shown on the site */
  fa: string
  en: string
  /** form in the original language, transliterated */
  original?: string
  /** language of `original` */
  lang?: string
  /** what it means; omitted when our source does not say */
  meaning?: { fa: string; en: string }
  kind: EpithetKind
  source: { label: string; url?: string }
}

const IR = (slug: string) => `https://www.iranicaonline.org/articles/${slug}/`
const GREAT_KING = (who: string, whoEn: string, label: string, url?: string): Epithet => ({
  fa: 'شاه بزرگ، شاه شاهان', en: 'Great King, King of Kings', original: 'xšāyaθiya vazraka, xšāyaθiya xšāyaθiyānām', lang: 'Old Persian',
  meaning: { fa: `عنوان رسمی ${who} در کتیبه‌های خودش`, en: `the official style ${whoEn} used in his own inscriptions` }, kind: 'title', source: { label, url },
})

export const epithets: Record<string, Epithet[]> = {
  'shutruk-nakhunte': [
    { fa: 'شاه انشان و شوش', en: 'King of Anshan and Susa', lang: 'Elamite', meaning: { fa: 'عنوان رسمی او در کتیبه‌هایش', en: 'his official style in his inscriptions' }, kind: 'title', source: { label: 'Elamite inscription on the Naram-Sin stele (Louvre Sb 4), tr. M. Van De Mieroop, A History of the Ancient Near East (2015), p. 199' } },
    { fa: 'بندهٔ محبوب اینشوشیناک', en: 'Beloved servant of Inshushinak', lang: 'Elamite', kind: 'title', source: { label: 'Elamite inscription on the Naram-Sin stele (Louvre Sb 4), tr. M. Van De Mieroop, A History of the Ancient Near East (2015), p. 199' } },
    { fa: 'گسترش‌دهندهٔ پادشاهی', en: 'Who has enlarged the kingdom', lang: 'Elamite', kind: 'title', source: { label: 'Elamite inscription on the Naram-Sin stele (Louvre Sb 4), tr. M. Van De Mieroop, A History of the Ancient Near East (2015), p. 199' } },
    { fa: 'سرور سرزمین ایلام', en: 'Lord of the land of Elam', lang: 'Elamite', kind: 'title', source: { label: 'Elamite inscription on the Naram-Sin stele (Louvre Sb 4), tr. M. Van De Mieroop, A History of the Ancient Near East (2015), p. 199' } },
  ],
  'cyrus-ii': [
    { fa: 'شاه بزرگ', en: 'Great King', original: 'šarru rabû', lang: 'Akkadian', meaning: { fa: 'از عنوان‌های او در استوانهٔ کوروش («شاه جهان، شاه بزرگ، شاه توانا…»)', en: 'one of his titles on the Cyrus Cylinder (“king of the universe, the great king, the powerful king…”)' }, kind: 'title', source: { label: 'Cyrus Cylinder, BM 90920, tr. I. Finkel (British Museum)', url: 'https://www.britishmuseum.org/collection/object/W_1880-0617-1941' } },
  ],
  'darius-i': [GREAT_KING('داریوش', 'Darius', 'Bisotun inscription DB §1, tr. R. G. Kent (Livius.org)', 'https://www.livius.org/sources/content/behistun-persian-text/')],
  'xerxes-i': [GREAT_KING('خشایارشا', 'Xerxes', 'Daiva inscription XPh, tr. R. G. Kent (Livius.org)', 'https://www.livius.org/sources/content/achaemenid-royal-inscriptions/xph/')],
  'artaxerxes-i': [
    { fa: 'درازدست', en: 'Longhand (Longimanus)', original: 'Makrócheir / Longimanus', lang: 'Greek / Latin', meaning: { fa: 'به گفتهٔ پلوتارک «زیرا دست راستش از چپش درازتر بود»؛ پلوکس آن را نماد «قدرت دوررس» می‌داند', en: 'per Plutarch “because his right hand was longer than his left”; Pollux reads it as a symbol of “far-reaching power”' }, kind: 'nickname', source: { label: 'Plutarch, Artaxerxes 1.1, tr. B. Perrin; R. Schmitt, “Artaxerxes I”, Encyclopaedia Iranica', url: IR('artaxerxes-i') } },
    GREAT_KING('اردشیر', 'Artaxerxes', 'Artaxerxes I, inscription A1Pa (Livius.org, after Lecoq)', 'https://www.livius.org/sources/content/achaemenid-royal-inscriptions/a1pa/'),
  ],
  'darius-ii': [
    { fa: 'نوتوس (حرام‌زاده)', en: 'Nothos (the Bastard)', original: 'Nóthos', lang: 'Greek', meaning: { fa: 'زیرا پسر اردشیر یکم از زنی بابلی، نه از ملکه، بود', en: 'because he was Artaxerxes I’s son by a Babylonian concubine, not by the queen' }, kind: 'nickname', source: { label: 'Manetho fr. 70, tr. W. G. Waddell (note on P. Baden 4 no. 59); R. Schmitt, “Artaxerxes I”, Encyclopaedia Iranica', url: IR('artaxerxes-i') } },
  ],
  'artaxerxes-ii': [
    { fa: 'یادآور (مِنِمون)', en: 'Mnemon (the Mindful)', original: 'Mnḗmōn / Memor', lang: 'Greek / Latin', meaning: { fa: '«یادآور» یا «خوش‌حافظه»؛ نخستین بار نزد پلوتارک', en: '“Mindful”; first attested in Plutarch' }, kind: 'nickname', source: { label: 'Plutarch, Artaxerxes 1.1, tr. B. Perrin; Encyclopaedia Iranica, “Artaxerxes II”', url: IR('artaxerxes-ii') } },
  ],
  'ardashir-i': [
    { fa: 'بابکان', en: 'Pāpakān', original: 'Pāpakān', lang: 'Middle Persian', meaning: { fa: 'پسر پاپک (بابک)', en: 'son of Pāpak' }, kind: 'patronymic', source: { label: 'J. Wiesehöfer, “Ardašīr I”, Encyclopaedia Iranica', url: IR('ardasir-i') } },
  ],
  'shapur-ii': [
    { fa: 'ذوالاکتاف', en: 'Dhu’l-Aktaf', original: 'Ḏu’l-Aktāf (Ar.); Huya sonbā (Pers.); *Šānag āhanj (MP)', lang: 'Arabic', meaning: { fa: '«آن که شانه‌ها را سوراخ می‌کند»، از سرکوب سخت اعراب', en: '“he who pierces shoulders”, from his harsh campaigns against the Arabs' }, kind: 'nickname', source: { label: 'T. Daryaee, “Šāpur II”, Encyclopaedia Iranica', url: IR('shapur-ii') } },
  ],
  'bahram-v': [
    { fa: 'گور', en: 'Gōr', original: 'gōr', lang: 'Middle/New Persian', meaning: { fa: '«گورخر [شکار]»؛ از شکار نامدار گورخری', en: '“Onager [hunter]”, from a famous onager hunt' }, kind: 'nickname', source: { label: 'O. Klíma, “Bahrām V Gōr”, Encyclopaedia Iranica', url: IR('bahram-05') } },
  ],
  'khosrow-i': [
    { fa: 'انوشیروان', en: 'Anushirvan', original: 'anōšag-ruwān', lang: 'Middle Persian', meaning: { fa: '«دارای روان جاودان»؛ لقبی پس از مرگ، برای جدا کردن او از خسرو دوم', en: '“of immortal soul”, a posthumous epithet that distinguished him from Khosrow II' }, kind: 'nickname', source: { label: 'Encyclopaedia Iranica, “Ḵosrow I”; C. J. Brunner, “Anōšag-ruwān”', url: IR('kosrow') } },
  ],
  'khosrow-ii': [
    { fa: 'پرویز', en: 'Parvēz', original: 'Parvēz', lang: 'Middle/New Persian', kind: 'nickname', source: { label: 'J. Howard-Johnston, “Ḵosrow II”, Encyclopaedia Iranica', url: IR('khosrow-ii') } },
  ],
}

export const epithetsFor = (id: string): Epithet[] => (Object.prototype.hasOwnProperty.call(epithets, id) ? epithets[id] : [])
/** later bynames only (the official titles are shared by many kings) */
export const nicknamesFor = (id: string) => epithetsFor(id).filter((e) => e.kind !== 'title')
/** extra text for the search index: Persian, English and original forms of every epithet */
export const epithetSearchText = (id: string) => epithetsFor(id).map((e) => `${e.fa} ${e.en} ${e.original ?? ''}`).join(' ')
export const EPITHET_KIND_LABEL: Record<EpithetKind, { fa: string; en: string }> = {
  title: { fa: 'عنوان رسمی', en: 'official title' },
  nickname: { fa: 'لقب (بعدی یا بیگانه)', en: 'byname (later or foreign)' },
  patronymic: { fa: 'نام پدری', en: 'patronymic' },
}
