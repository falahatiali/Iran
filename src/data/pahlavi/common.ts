/** Shared sources, places and photos for the Pahlavi pages (Reza Shah and Mohammad Reza Shah). */
import type { Coord, FeaturedSource } from '../featured/types'
import type { CommonsPhoto } from '../places/types'

export const B = (fa: string, en: string) => ({ fa, en })
export const P = {
  TEHRAN: [51.39, 35.69] as Coord, QAZVIN: [50.0, 36.27] as Coord, RASHT: [49.58, 37.28] as Coord, KHORRAMSHAHR: [48.18, 30.44] as Coord,
  MASHHAD: [59.6, 36.3] as Coord, BANDAR_SHAH: [54.08, 36.9] as Coord, KASHMAR: [58.46, 35.24] as Coord, TABRIZ: [46.29, 38.08] as Coord,
  ABADAN: [48.3, 30.35] as Coord, QOM: [50.88, 34.64] as Coord, PERSEPOLIS: [52.89, 29.93] as Coord, ISFAHAN: [51.67, 32.65] as Coord,
  SARI: [53.06, 36.56] as Coord, VERESK: [52.98, 35.9] as Coord,
  ALASHT: [52.84, 36.07] as Coord, REY: [51.43, 35.59] as Coord, TUS: [59.52, 36.48] as Coord, SEMNAN: [53.39, 35.58] as Coord, BANDAR_SHAHPUR: [49.08, 30.43] as Coord,
}

const IR = 'Encyclopaedia Iranica'
const ir = (slug: string) => `https://www.iranicaonline.org/articles/${slug}/`
const wp = (title: string) => `https://en.wikipedia.org/wiki/${title}`
export const pvSources: FeaturedSource[] = [
  { id: 'yarshater-iran-p5', author: `E. Yarshater, ${IR}`, title: 'Iran ii. Iranian history (2) Islamic period, page 5: the coup of 1921 and Reza Shah', year: '2004', url: ir('iran-ii2-islamic-period-page-5'), note: B('ستون اصلی صفحهٔ رضاشاه: کودتا، اصلاحات، شخصیت و خطاها. لحن یارشاطر ستایش‌آمیز است؛ از این رو نقدهای مقاله‌های دیگر ایرانیکا را کنارش می‌گذاریم.', 'The spine of the Reza Shah page: the coup, the reforms, his character and his errors. Yarshater’s tone is admiring, so we set the criticism in other Iranica articles beside it.') },
  { id: 'yarshater-iran-p6', author: `E. Yarshater, ${IR}`, title: 'Iran ii. Iranian history (2) Islamic period, page 6: Mohammad Reza Shah', year: '2004', url: ir('iran-ii2-islamic-period-page-6'), note: B('جنگ جهانی دوم، استعفای رضاشاه و پادشاهی محمدرضاشاه.', 'The Second World War, Reza Shah’s abdication and the reign of Mohammad Reza Shah.') },
  { id: 'iranica-chronology-2', author: `E. Yarshater, ${IR}`, title: 'Chronology of Iranian History, Part 2 (1834–1932)', year: 'online edition', url: ir('chronology-of-iranian-history-part-2'), note: B('رویدادهای سال‌به‌سال از کودتای ۱۹۲۱ تا لغو امتیاز دارسی.', 'Year-by-year events from the 1921 coup to the cancellation of the D’Arcy concession.') },
  { id: 'iranica-chronology-3', author: `E. Yarshater, ${IR}`, title: 'Chronology of Iranian History, Part 3 (1933–1973)', year: 'online edition', url: ir('chronology-of-iranian-history-part-3'), note: B('قرارداد نفت ۱۹۳۳، گوهرشاد، کشف حجاب، استعفا و پادشاهی محمدرضاشاه.', 'The 1933 oil agreement, Gowharshad, unveiling, the abdication and the reign of Mohammad Reza Shah.') },
  { id: 'iranica-anglo-iranian-iii', author: `R. W. Ferrier, ${IR}`, title: 'Anglo-Iranian Relations iii. Pahlavi period', year: '1985, updated 2016', url: ir('anglo-iranian-relations-iii'), note: B('نقش بریتانیا در کودتای ۱۹۲۱، قرارداد نفت ۱۹۳۳ و استعفای ۱۹۴۱؛ هر دو را «محل بحث» می‌داند.', 'Britain’s role in the 1921 coup, the 1933 oil agreement and the 1941 abdication; it calls both the coup question and the abdication’s cause open to dispute.') },
  { id: 'iranica-army-vi', author: `M. J. Sheikh-ol-Islami, ${IR}`, title: 'Army vi. Pahlavi period', year: '1986, updated 2018', url: ir('army-vi'), note: B('ارتش نوین، بریگاد قزاق و ژاندارمری.', 'The modern army, the Cossack division and the gendarmerie.') },
  { id: 'iranica-administration-vii', author: `A. Sheikholeslami, ${IR}`, title: 'Administration in Iran vii. Pahlavi period', year: '1983, updated 2018', url: ir('administration-vii-pahlavi'), note: B('دیوان‌سالاری، راه‌آهن و رابطهٔ دولت با خاندان پهلوی؛ نگاهی انتقادی‌تر از یارشاطر.', 'The bureaucracy, the railway and the state’s relation to the Pahlavi household; a more critical view than Yarshater’s.') },
  { id: 'iranica-chronology-4', author: `E. Yarshater, ${IR}`, title: 'Chronology of Iranian History, Part 4 (1974–1999)', year: 'online edition', url: ir('chronology-of-iranian-history-part-4'), note: B('حزب رستاخیز، تقویم شاهنشاهی و روزشمار انقلاب ۱۹۷۸–۱۹۷۹.', 'The Rastakhiz party, the imperial calendar and a day-by-day account of the revolution of 1978–1979.') },
  { id: 'iranica-coup-1953', author: `M. J. Gasiorowski, ${IR}`, title: 'Coup d’état of 1332 Š./1953', year: '1993', url: ir('coup-detat-1953'), note: B('نخست‌وزیری مصدق، ملی شدن نفت و کودتای ۲۸ مرداد، با تکیه بر اسناد بریتانیا و آمریکا.', 'Mosaddeq’s premiership, oil nationalisation and the coup of 19 August 1953, drawing on British and American records.') },
  { id: 'wp-mrs', author: 'Wikipedia', title: 'Mohammad Reza Pahlavi', year: 'read 2026-11-04', url: wp('Mohammad_Reza_Pahlavi') },
  { id: 'wp-crisis-1946', author: 'Wikipedia', title: 'Iran crisis of 1946', year: 'read 2026-11-04', url: wp('Iran_crisis_of_1946') },
  { id: 'wp-qavam', author: 'Wikipedia', title: 'Ahmad Qavam', year: 'read 2026-11-04', url: wp('Ahmad_Qavam') },
  { id: 'wp-ala', author: 'Wikipedia', title: 'Hossein Ala’', year: 'read 2026-11-04', url: wp('Hossein_Ala%27') },
  { id: 'wp-white-revolution', author: 'Wikipedia', title: 'White Revolution', year: 'read 2026-11-04', url: wp('White_Revolution') },
  { id: 'wp-f14', author: 'Wikipedia', title: 'Grumman F-14 Tomcat (Iran section)', year: 'read 2026-11-04', url: wp('Grumman_F-14_Tomcat') },
  { id: 'wp-sabet', author: 'Wikipedia', title: 'Habib Sabet', year: 'read 2026-11-04', url: wp('Habib_Sabet') },
  { id: 'wp-khayami', author: 'Wikipedia', title: 'Mahmoud Khayami', year: 'read 2026-11-04', url: wp('Mahmoud_Khayami') },
  { id: 'wp-ebtehaj', author: 'Wikipedia', title: 'Abol Hassan Ebtehaj', year: 'read 2026-11-04', url: wp('Abol_Hassan_Ebtehaj') },
  { id: 'wp-golha', author: 'Wikipedia', title: 'Golha (radio programmes)', year: 'read 2026-11-04', url: wp('Golha') },
  { id: 'wp-banan', author: 'Wikipedia', title: 'Gholam-Hossein Banan', year: 'read 2026-11-04', url: wp('Gholam-Hossein_Banan') },
  { id: 'wp-delkash', author: 'Wikipedia', title: 'Delkash', year: 'read 2026-11-04', url: wp('Delkash') },
  { id: 'wp-shajarian', author: 'Wikipedia', title: 'Mohammad-Reza Shajarian', year: 'read 2026-11-04', url: wp('Mohammad-Reza_Shajarian') },
  { id: 'wp-googoosh', author: 'Wikipedia', title: 'Googoosh', year: 'read 2026-11-04', url: wp('Googoosh') },
  { id: 'wp-shiraz-festival', author: 'Wikipedia', title: 'Shiraz Arts Festival', year: 'read 2026-11-04', url: wp('Shiraz_Arts_Festival') },
  { id: 'wp-kanoon', author: 'Wikipedia', title: 'Institute for the Intellectual Development of Children and Young Adults', year: 'read 2026-11-04', url: wp('Institute_for_the_Intellectual_Development_of_Children_and_Young_Adults') },
  { id: 'wp-forough', author: 'Wikipedia', title: 'Forugh Farrokhzad', year: 'read 2026-11-04', url: wp('Forugh_Farrokhzad') },
  { id: 'wp-shamlou', author: 'Wikipedia', title: 'Ahmad Shamlou', year: 'read 2026-11-04', url: wp('Ahmad_Shamlou') },
  { id: 'wp-sepehri', author: 'Wikipedia', title: 'Sohrab Sepehri', year: 'read 2026-11-04', url: wp('Sohrab_Sepehri') },
  { id: 'frus-1974-61', author: 'U.S. Department of State, Office of the Historian', title: 'FRUS 1969–1976, vol. XXVII, doc. 61: Telegram from the Embassy in Iran (Helms), June 1974', year: '1974', url: 'https://history.state.gov/historicaldocuments/frus1969-76v27/d61' },
  { id: 'nyt-1975-grumman', author: 'The New York Times', title: 'Has Grumman Pulled Out of Its Tailspin?', year: '19 January 1975', url: 'https://www.nytimes.com/1975/01/19/archives/has-grumman-pulled-out-of-its-tailspin-grumman-saga.html' },
  { id: 'nyt-1975-melli', author: 'The New York Times', title: 'Iran’s Government-Held Bank Grows and Lends Worldwide', year: '23 June 1975', url: 'https://www.nytimes.com/1975/06/23/archives/irans-governmentheld-bank-grows-and-lends-worldwide-at-irans.html' },
]
/** Sources added for the expanded Reza Shah page (read 2026-11-03). Books marked “further reading” are listed, not quoted. */
export const rzSources: FeaturedSource[] = [
  { id: 'iranica-coup-1921', author: `N. Shambayati, ${IR}`, title: 'Coup d’état of 1299/1921', year: '1993', url: ir('coup-detat-of-1299-1921'), note: B('کودتا، نقش آیرونساید و نخستین روزهای قدرت.', 'The coup, Ironside’s role and the first days in power.') },
  { id: 'iranica-courts-viii', author: `A. Sheikholeslami, ${IR}`, title: 'Courts and courtiers viii. In the reign of Reżā Shah Pahlavī', year: '1993', url: ir('courts-and-courtiers-viii'), note: B('دربار رضاشاه و جایگاه تیمورتاش.', 'Reza Shah’s court and Teymourtash’s place in it.') },
  { id: 'iranica-davar', author: `B. Aqeli, ${IR}`, title: 'Dāvar, ʿAlī-Akbar', year: '1994', url: ir('davar-ali-akbar') },
  { id: 'iranica-forughi', author: `F. Azimi, ${IR}`, title: 'Forūḡī, Moḥammad-ʿAlī Ḏokāʾ-al-Molk i. Biography', year: '1999', url: 'https://www.iranicaonline.org/articles/forugi-mohammad-ali/' },
  { id: 'iranica-sardar-asad', author: IR, title: 'Baḵtīārī v.(5) Jaʿfarqolī Khan Sardār(-e) Asʿad III', year: '1988', url: 'https://www.iranicaonline.org/articles/baktiari/' },
  { id: 'iranica-excavations', author: `D. Stronach, ${IR}`, title: 'Excavations i. In Persia', year: '1998', url: ir('excavations-i'), note: B('پایان انحصار حفاری فرانسه (۱۹۲۷)، قانون حفظ آثار عتیقه (۱۹۳۰) و موزهٔ ایران باستان.', 'The end of the French excavation monopoly (1927), the 1930 antiquities law and the Iran Bastan Museum.') },
  { id: 'iranica-education-xvii', author: IR, title: 'Education xvii. Higher education', year: 'online edition', url: ir('education-xvii-higher-education'), note: B('قانون دانشگاه (۱۹۳۴) و گشایش دانشگاه تهران (۱۹۳۵).', 'The university law (1934) and the opening of the University of Tehran (1935).') },
  { id: 'iranica-firuz-maryam', author: `M. Behrooz, ${IR}`, title: 'Firuz, Maryam', year: '2017', url: ir('firuz-maryam'), note: B('برای قانون نام خانوادگی و خاندان فیروز.', 'For the surname requirement and the Firuz family.') },
  { id: 'iranica-education-xix', author: IR, title: 'Education xix. Teachers’ training colleges', year: 'online edition', url: ir('education-xix-teachers-training-colleges'), note: B('برای عیسی صدیق و دانشسرای عالی.', 'For Isa Sadiq and the Teachers’ College.') },
  { id: 'bakhash-teymourtash', author: 'S. Bakhash', title: 'Iran’s Man for all Seasons: The Rise and Fall of Taymourtash, Iranian Studies', year: '2025', url: 'https://doi.org/10.1017/irn.2024.65' },
  { id: 'wp-reza-shah', author: 'Wikipedia', title: 'Reza Shah', year: 'read 2026-11-03', url: wp('Reza_Shah'), note: B('برای تاریخ‌های زندگی، تبعید و لقب‌ها؛ منبع دست‌دوم.', 'For dates of life, exile and titles; a secondary source.') },
  { id: 'wp-railway', author: 'Wikipedia', title: 'Trans-Iranian Railway', year: 'read 2026-11-03', url: wp('Trans-Iranian_Railway') },
  { id: 'wp-veresk', author: 'Wikipedia', title: 'Veresk Bridge', year: 'read 2026-11-03', url: wp('Veresk_Bridge') },
  { id: 'wp-mausoleum', author: 'Wikipedia', title: 'Mausoleum of Reza Shah', year: 'read 2026-11-03', url: wp('Mausoleum_of_Reza_Shah') },
  { id: 'wp-museum', author: 'Wikipedia', title: 'National Museum of Iran', year: 'read 2026-11-03', url: wp('National_Museum_of_Iran') },
  { id: 'wp-bank-melli', author: 'Wikipedia', title: 'Bank Melli Iran', year: 'read 2026-11-03', url: wp('Bank_Melli_Iran') },
  { id: 'wp-kashf', author: 'Wikipedia', title: 'Kashf-e hijab', year: 'read 2026-11-03', url: wp('Kashf-e_hijab') },
  { id: 'wp-goharshad', author: 'Wikipedia', title: 'Goharshad Mosque rebellion', year: 'read 2026-11-03', url: wp('Goharshad_Mosque_rebellion') },
  { id: 'wp-invasion', author: 'Wikipedia', title: 'Anglo-Soviet invasion of Iran', year: 'read 2026-11-03', url: wp('Anglo-Soviet_invasion_of_Iran') },
  { id: 'wp-teymourtash', author: 'Wikipedia', title: 'Abdolhossein Teymourtash', year: 'read 2026-11-03', url: wp('Abdolhossein_Teymourtash') },
  { id: 'wp-firouz', author: 'Wikipedia', title: 'Firouz Nosrat-ed-Dowleh III', year: 'read 2026-11-03', url: wp('Firouz_Nosrat-ed-Dowleh_III') },
  { id: 'wp-taqizadeh', author: 'Wikipedia', title: 'Hassan Taqizadeh', year: 'read 2026-11-03', url: wp('Hassan_Taqizadeh') },
  { id: 'wp-hedayat', author: 'Wikipedia', title: 'Mehdi Qoli Hedayat', year: 'read 2026-11-03', url: wp('Mehdi_Qoli_Hedayat') },
  { id: 'wp-hekmat', author: 'Wikipedia', title: 'Ali-Asghar Hekmat', year: 'read 2026-11-03', url: wp('Ali-Asghar_Hekmat') },
  { id: 'wp-zia', author: 'Wikipedia', title: 'Zia ol Din Tabatabaee', year: 'read 2026-11-03', url: wp('Zia_ol_Din_Tabatabaee') },
  { id: 'wp-mansur', author: 'Wikipedia', title: 'Ali Mansur', year: 'read 2026-11-03', url: wp('Ali_Mansur') },
  { id: 'cronin-1997', author: 'S. Cronin', title: 'The Army and the Creation of the Pahlavi State in Iran, 1910–1926', year: '1997', note: B('برای مطالعهٔ بیشتر؛ در این صفحه نقل نشده است.', 'Further reading; not quoted on this page.') },
  { id: 'abrahamian-2008', author: 'E. Abrahamian', title: 'A History of Modern Iran', year: '2008', note: B('برای مطالعهٔ بیشتر؛ در این صفحه نقل نشده است.', 'Further reading; not quoted on this page.') },
  { id: 'ghani-1998', author: 'C. Ghani', title: 'Iran and the Rise of Reza Shah: From Qajar Collapse to Pahlavi Power', year: '1998', note: B('برای مطالعهٔ بیشتر؛ در این صفحه نقل نشده است.', 'Further reading; not quoted on this page.') },
  { id: 'katouzian-2000', author: 'H. Katouzian', title: 'State and Society in Iran: The Eclipse of the Qajars and the Emergence of the Pahlavis', year: '2000', note: B('برای مطالعهٔ بیشتر؛ در این صفحه نقل نشده است.', 'Further reading; not quoted on this page.') },
  { id: 'wilber-1975', author: 'D. N. Wilber', title: 'Riza Shah Pahlavi: The Resurrection and Reconstruction of Iran', year: '1975', note: B('برای مطالعهٔ بیشتر؛ در این صفحه نقل نشده است.', 'Further reading; not quoted on this page.') },
  { id: 'atabaki-zurcher-2004', author: 'T. Atabaki and E. J. Zürcher (eds.)', title: 'Men of Order: Authoritarian Modernization under Atatürk and Reza Shah', year: '2004', note: B('برای مطالعهٔ بیشتر؛ در این صفحه نقل نشده است.', 'Further reading; not quoted on this page.') },
]

export const pvSourceIds = new Set([...pvSources, ...rzSources].map((s) => s.id))

const f = (name: string) => `https://commons.wikimedia.org/wiki/File:${name}`
const PD = 'https://commons.wikimedia.org/wiki/Commons:Public_domain'
/** Licence and author read from the Commons API on 2026-10-31. */
export const pvPhotos: CommonsPhoto[] = [
  { id: 'reza-portrait', src: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Reza_Shah_portrait.jpg', page: f('Reza_Shah_portrait.jpg'), author: 'Unknown photographer', license: 'Public domain', licenseUrl: PD, caption: B('چهرهٔ رضاشاه پهلوی.', 'Portrait of Reza Shah Pahlavi.') },
  { id: 'reza-coronation', src: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Reza_shah_coronation.jpg', page: f('Reza_shah_coronation.jpg'), author: 'Unknown photographer', license: 'Public domain', licenseUrl: PD, caption: B('تاج‌گذاری رضاشاه.', 'The coronation of Reza Shah.') },
  { id: 'veresk-bridge', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Veresk_bridge%2C_Tehran_-_Sari_Railway.jpg/1280px-Veresk_bridge%2C_Tehran_-_Sari_Railway.jpg', page: f('Veresk_bridge,_Tehran_-_Sari_Railway.jpg'), author: 'ninara', license: 'CC BY-SA 2.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/', caption: B('پل ورسک بر راه‌آهن تهران–ساری، بخشی از راه‌آهن سراسری. عکس امروزی.', 'The Veresk bridge on the Tehran–Sari line, part of the Trans-Iranian Railway. A modern photograph.') },
  { id: 'mrs-1973', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mohammad_Reza_Pahlavi_in_1973.jpg/1280px-Mohammad_Reza_Pahlavi_in_1973.jpg', page: f('Mohammad_Reza_Pahlavi_in_1973.jpg'), author: 'Royal Court of Iran', license: 'Public domain', licenseUrl: PD, caption: B('محمدرضاشاه پهلوی در ۱۹۷۳.', 'Mohammad Reza Shah Pahlavi in 1973.') },
  { id: 'mosaddeq-1952', src: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Portrait_of_Mohammad_Mosaddegh_-_circa_1952.jpg', page: f('Portrait_of_Mohammad_Mosaddegh_-_circa_1952.jpg'), author: 'iichs.ir', license: 'Public domain', licenseUrl: PD, caption: B('محمد مصدق، نزدیک به ۱۹۵۲.', 'Mohammad Mosaddeq, around 1952.') },
]
