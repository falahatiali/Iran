/** Sources for /king/artaxerxes-i. Verbatim quotes come only from the published translations named here. */
import type { FeaturedSource } from '../featured/types'

export const artaxerxesSources: FeaturedSource[] = [
  { id: 'thuc', author: 'Thucydides, tr. Thomas Hobbes', title: 'The History of the Grecian War, book 1 (Bohn edition)', year: '1843', note: { fa: 'هم‌روزگار و دقیق‌ترین منبع یونانی برای جنگ مصر؛ اما از سوی آتن.', en: 'Contemporary and the most careful Greek source for the Egyptian war, but from the Athenian side.' } },
  { id: 'hdt', author: 'Herodotus, tr. A. D. Godley', title: 'The Histories 3.12 (Loeb)', year: '1920' },
  { id: 'ctesias', author: 'Ctesias of Cnidus (via Photius’ epitome), tr. J. H. Freese', title: 'Persica, §§ 33–50', year: '1920', note: { fa: 'پزشک یونانی در دربار اردشیر دوم؛ پر از داستان درباری و نامعتبر، اما تنها روایت پیوستهٔ دربار.', en: 'A Greek physician at the court of Artaxerxes II; full of court romance and unreliable, but the only continuous account of the court.' } },
  { id: 'diodorus', author: 'Diodorus Siculus, tr. C. H. Oldfather', title: 'Library of History, books 11–12 (Loeb)', year: '1946–1950', note: { fa: 'تاریخ‌نگار سدهٔ یکم پ.م.؛ تاریخ‌هایش برای این دوره گاهی جابه‌جاست.', en: 'A 1st-century BCE historian; his dates for this period are sometimes displaced.' } },
  { id: 'justin', author: 'Justin, tr. J. S. Watson', title: 'Epitome of Pompeius Trogus, book 3.1', year: '1853', url: 'https://www.attalus.org/translate/justin9.html' },
  { id: 'manetho', author: 'Manetho, fr. 70 (Africanus), tr. W. G. Waddell', title: 'Manetho (Loeb Classical Library)', year: '1940' },
  { id: 'plutarch', author: 'Plutarch, tr. B. Perrin', title: 'Life of Artaxerxes 1.1 (Loeb)', year: '1926' },
  { id: 'a1pa', author: 'Artaxerxes I, inscription A1Pa (after P. Lecoq 1997)', title: 'Livius.org: A1Pa', year: 'online', url: 'https://www.livius.org/sources/content/achaemenid-royal-inscriptions/a1pa/' },
  { id: 'bible', author: 'The Bible, King James Version', title: 'Ezra 7; Nehemiah 1–2', year: '1611', note: { fa: 'متن دینی و روایت جامعهٔ یهودی؛ تاریخ‌گذاری‌اش محل بحث است.', en: 'A religious text and the Judean community’s own account; its dating is debated.' } },
  { id: 'iranica', author: 'R. Schmitt, Encyclopaedia Iranica', title: 'Artaxerxes I', year: '1986', url: 'https://www.iranicaonline.org/articles/artaxerxes-i/' },
  { id: 'stolper1985', author: 'M. W. Stolper', title: 'Entrepreneurs and Empire: The Murašû Archive, the Murašû Firm, and Persian Rule in Babylonia', year: '1985' },
  { id: 'stolper2001', author: 'M. W. Stolper', title: 'Fifth century Nippur: texts of the Murašûs and from their surroundings, Journal of Cuneiform Studies 53', year: '2001' },
  { id: 'stolper1983', author: 'M. W. Stolper', title: 'The death of Artaxerxes I, Archäologische Mitteilungen aus Iran 16', year: '1983' },
  { id: 'cardascia', author: 'G. Cardascia', title: 'Les archives des Murašû', year: '1951' },
  { id: 'vandriel', author: 'G. van Driel', title: 'The Murašûs in context, JESHO 32', year: '1989' },
  { id: 'briant', author: 'P. Briant', title: 'From Cyrus to Alexander: A History of the Persian Empire', year: '2002' },
  { id: 'kuhrt', author: 'A. Kuhrt', title: 'The Persian Empire: A Corpus of Sources from the Achaemenid Period', year: '2007' },
  { id: 'bm32234', author: 'BM 32234 (LBAT *1419), tr. C. B. F. Walker', title: 'A Babylonian lunar-eclipse tablet recording Xerxes’ murder', year: 'Walker 1997' },
]

export const artaxerxesSourceIds = new Set(artaxerxesSources.map((s) => s.id))
