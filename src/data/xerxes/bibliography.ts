/** Sources for /king/xerxes-i. Herodotus is cited as book.chapter from A. D. Godley's Loeb translation (1920). */
import type { FeaturedSource } from '../featured/types'

export const xerxesSources: FeaturedSource[] = [
  { id: 'hdt', author: 'Herodotus, tr. A. D. Godley', title: 'The Histories (Loeb Classical Library), books 7–9', year: '1920–1925', url: 'http://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.01.0126', note: { fa: 'منبع اصلی جنگ؛ یونانی، نوشته‌شده حدود نیم‌قرن پس از رویدادها. ارقام و گفت‌وگوهایش را روایت او می‌دانیم، نه گزارش رسمی.', en: 'The main source for the war: Greek, written about half a century later. We treat his numbers and speeches as his account, not as records.' } },
  { id: 'aeschylus', author: 'Aeschylus', title: 'Persians (first staged at Athens, 472 BCE)', year: '472 BCE', note: { fa: 'تنها منبع هم‌روزگار که ماندگار شده؛ نمایشنامه است و آتنی، نه تاریخ.', en: 'The only surviving contemporary source; an Athenian play, not a history.' } },
  { id: 'ctesias', author: 'Ctesias of Cnidus (via Photius’ epitome)', title: 'Persica, books 12–13', year: 'c. 390 BCE', note: { fa: 'پزشک یونانی در دربار اردشیر دوم؛ بسیار نامعتبر و جاهایی با هرودوت ناسازگار.', en: 'A Greek physician at the court of Artaxerxes II; notoriously unreliable and at odds with Herodotus in places.' } },
  { id: 'diodorus', author: 'Diodorus Siculus', title: 'Library of History, book 11', year: '1st c. BCE' },
  { id: 'xph', author: 'Xerxes, Daiva inscription (XPh), tr. after R. G. Kent', title: 'Livius.org: XPh', year: 'Kent 1953', url: 'https://www.livius.org/sources/content/achaemenid-royal-inscriptions/xph/' },
  { id: 'royal-inscr', author: 'Livius.org (after R. G. Kent, Old Persian, 1953)', title: 'Achaemenid royal inscriptions: XPa, XPl, XV', year: '1953 / online', url: 'https://www.livius.org/sources/content/achaemenid-royal-inscriptions/' },
  { id: 'iranica', author: 'Encyclopaedia Iranica', title: 'Xerxes (ii. Xerxes I)', year: '2000, updated 2012', url: 'https://www.iranicaonline.org/articles/xerxes/' },
  { id: 'rollinger', author: 'R. Rollinger', title: 'Herodotus vii. Xerxes according to Herodotus, Encyclopaedia Iranica', year: '2003', url: 'https://www.iranicaonline.org/articles/herodotus-vii/' },
  { id: 'tuplin', author: 'C. J. Tuplin', title: 'Salamis, Encyclopaedia Iranica', year: '2006', url: 'https://www.iranicaonline.org/articles/salamis/' },
  { id: 'briant', author: 'P. Briant', title: 'From Cyrus to Alexander: A History of the Persian Empire', year: '2002' },
  { id: 'kuhrt', author: 'A. Kuhrt', title: 'The Persian Empire: A Corpus of Sources from the Achaemenid Period', year: '2007' },
  { id: 'kuhrt-sw', author: 'A. Kuhrt and S. Sherwin-White', title: 'Xerxes’ destruction of Babylonian temples, Achaemenid History II', year: '1987' },
  { id: 'waerzeggers', author: 'C. Waerzeggers', title: 'The Babylonian revolts against Xerxes and the “end of archives”, Archiv für Orientforschung 50', year: '2003/2004' },
  { id: 'cawkwell', author: 'G. Cawkwell', title: 'The Greek Wars: The Failure of Persia', year: '2005' },
  { id: 'lazenby', author: 'J. F. Lazenby', title: 'The Defence of Greece, 490–479 BC', year: '1993' },
  { id: 'sancisi', author: 'H. Sancisi-Weerdenburg', title: 'The personality of Xerxes, king of kings', year: '1989' },
  { id: 'justin', author: 'Justin, tr. J. S. Watson', title: 'Epitome of Pompeius Trogus, book 3.1', year: '1853', url: 'https://www.attalus.org/translate/justin9.html', note: { fa: 'خلاصه‌ای لاتینی از قرن دوم–سوم میلادی؛ دیرهنگام.', en: 'A Latin epitome of the 2nd–3rd century CE; late.' } },
  { id: 'aristotle', author: 'Aristotle, tr. H. Rackham', title: 'Politics 5.1311b (Loeb)', year: '1944' },
  { id: 'manetho', author: 'Manetho, fr. 70 (Africanus), tr. W. G. Waddell', title: 'Manetho (Loeb Classical Library)', year: '1940' },
  { id: 'bm32234', author: 'BM 32234 (LBAT *1419), tr. C. B. F. Walker', title: 'A Babylonian lunar-eclipse tablet recording Xerxes’ murder (in Kuhrt 2007; Sachs and Hunger, ADART V no. 4)', year: 'Walker 1997', note: { fa: 'تنها گواه بابلیِ هم‌روزگار دربارهٔ قتل.', en: 'The only contemporary Babylonian witness to the murder.' } },
  { id: 'stolper1988', author: 'M. W. Stolper', title: 'Some ghost facts from Achaemenid Babylonian texts, Journal of Hellenic Studies 108', year: '1988' },
  { id: 'bm', author: 'British Museum', title: 'Collection online: Achaemenid objects and the Xerxes material', year: 'online', url: 'https://www.britishmuseum.org/collection' },
]

export const xerxesSourceIds = new Set(xerxesSources.map((s) => s.id))
