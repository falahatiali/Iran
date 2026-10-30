/** Sources cited on /darius. Every event and dossier section points here by id. */
export interface DariusSource {
  id: string
  author: string
  title: string
  year: string
  url?: string
  note?: { fa: string; en: string }
}

export const dariusSources: DariusSource[] = [
  { id: 'kent1953', author: 'R. G. Kent', title: 'Old Persian: Grammar, Texts, Lexicon (2nd ed.)', year: '1953', note: { fa: 'ویراست و ترجمهٔ استاندارد کتیبه‌های پارسی باستان (DB، DNa، DNb، DSf، DZc).', en: 'Standard edition and translation of the Old Persian inscriptions (DB, DNa, DNb, DSf, DZc).' } },
  { id: 'schmitt1991', author: 'R. Schmitt', title: 'The Bisitun Inscriptions of Darius the Great: Old Persian Text (Corpus Inscriptionum Iranicarum I/I/I)', year: '1991' },
  { id: 'kuhrt2007', author: 'A. Kuhrt', title: 'The Persian Empire: A Corpus of Sources from the Achaemenid Period', year: '2007', note: { fa: 'مجموعهٔ منابع اصلی (کتیبه‌ها، گل‌نبشته‌ها، پاپیروس‌ها، متون یونانی) با ترجمه و شرح.', en: 'Sourcebook of primary texts (inscriptions, tablets, papyri, Greek authors) with translation and commentary.' } },
  { id: 'briant2002', author: 'P. Briant', title: 'From Cyrus to Alexander: A History of the Persian Empire', year: '2002' },
  { id: 'iranica-darius', author: 'A. Sh. Shahbazi', title: 'Darius iii. Darius I the Great, Encyclopaedia Iranica', year: '1994', url: 'https://www.iranicaonline.org/articles/darius-iii' },
  { id: 'iranica-daric', author: 'Encyclopaedia Iranica', title: 'Daric', year: '1994', url: 'https://www.iranicaonline.org/articles/daric' },
  { id: 'livius-dnb', author: 'Livius.org (J. Lendering, after P. Lecoq 1997)', title: 'Inscription DNb (tomb of Darius, Naqsh-e Rostam)', year: '2020', url: 'https://www.livius.org/sources/content/achaemenid-royal-inscriptions/dnb/' },
  { id: 'livius-ari', author: 'Livius.org', title: 'Achaemenid Royal Inscriptions (DB, DNa, DSf, DZc …)', year: '2020', url: 'https://www.livius.org/sources/content/achaemenid-royal-inscriptions/' },
  { id: 'herodotus', author: 'Herodotus', title: 'Histories, tr. A. D. Godley (Loeb, 1920–25; public domain)', year: 'c. 430 BCE', url: 'https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.01.0126', note: { fa: 'منبع یونانی، دیرتر و از نگاه یونانیان؛ دربارهٔ ماراتن و شورش ایونیه تقریباً تنها روایت است.', en: 'A later Greek source written from the Greek side; nearly our only narrative for the Ionian Revolt and Marathon.' } },
  { id: 'hallock1969', author: 'R. T. Hallock', title: 'Persepolis Fortification Tablets (OIP 92)', year: '1969' },
  { id: 'cameron1948', author: 'G. G. Cameron', title: 'Persepolis Treasury Tablets (OIP 65)', year: '1948' },
  { id: 'pfa', author: 'ISAC (Oriental Institute), University of Chicago', title: 'Persepolis Fortification Archive Project', year: '2006–', url: 'https://isac.uchicago.edu/research/projects/persepolis-fortification-archive' },
  { id: 'henkelman2008', author: 'W. F. M. Henkelman', title: 'The Other Gods Who Are: Studies in Elamite-Iranian Acculturation Based on the Persepolis Fortification Texts (Achaemenid History XIV)', year: '2008' },
  { id: 'brosius1996', author: 'M. Brosius', title: 'Women in Ancient Persia (559–331 BC)', year: '1996' },
  { id: 'abraham2004', author: 'K. Abraham', title: 'Business and Politics under the Persian Empire: The Financial Dealings of Marduk-nāṣir-apli of the House of Egibi (521–487 B.C.E.)', year: '2004' },
  { id: 'stolper1985', author: 'M. W. Stolper', title: 'Entrepreneurs and Empire: The Murašû Archive, the Murašû Firm, and Persian Rule in Babylonia', year: '1985' },
  { id: 'briant2003', author: 'P. Briant', title: 'Histoire et archéologie d’un texte: la Lettre de Darius à Gadatas entre Perses, Grecs et Romains', year: '2003' },
  { id: 'ezra', author: 'Hebrew Bible', title: 'Ezra 5–6', year: 'c. 4th c. BCE (composition debated)' },
  { id: 'lichtheim1980', author: 'M. Lichtheim', title: 'Ancient Egyptian Literature III (statue of Udjahorresnet, Vatican 22690)', year: '1980' },
  { id: 'olson1993', author: 'M. Olson', title: 'Dictatorship, Democracy, and Development, American Political Science Review 87(3)', year: '1993' },
  { id: 'bm-daric', author: 'British Museum', title: 'Gold daric and silver siglos of the Achaemenid empire (collection online)', year: '—' },
]

export const dariusSourceIds = new Set(dariusSources.map((s) => s.id))
