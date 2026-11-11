/**
 * The Constitutional Revolution (Mashruteh), 1905–1911, centred on Mozaffar al-Din Shah’s reign.
 * Spine: Martin and Arjomand in Encyclopaedia Iranica (Constitutional Revolution ii and iii), the texts of the
 * rescript, the Fundamental Law and its Supplement as printed by the Majles (Wikisource), Kasravi’s history,
 * and the Iranica articles on the people involved. Amir Khadem’s podcast «ماجرای مشروطه» is the listening guide.
 * Dates: Gregorian and Hijri from the sources; solar-hijri equivalents are computed and given for orientation.
 */
import type { Bi, BiParas } from '../featured/types'

export * from './sources'
export * from './episodes'

const B = (fa: string, en: string): Bi => ({ fa, en })
const P = (fa: string[], en: string[]): BiParas => ({ fa, en })

export const page = {
  title: B('انقلاب مشروطه', 'The Constitutional Revolution'),
  kicker: B('رویداد · ۱۲۸۴ تا ۱۲۹۰ خورشیدی / ۱۹۰۵ تا ۱۹۱۱', 'Event · 1905–1911'),
  description: B(
    'انقلاب مشروطهٔ ایران از زمینه‌های دورهٔ ناصری تا مظفرالدین‌شاه، بست‌ها، فرمان ۱۴ جمادی‌الثانی ۱۳۲۴، مجلس اول، قانون اساسی و متمم آن، به توپ بستن مجلس، ایستادگی تبریز، فتح تهران، قرارداد ۱۹۰۷، شوستر و اولتیماتوم ۱۹۱۱؛ با منبع برای هر ادعا.',
    'Iran’s Constitutional Revolution from its roots under Naser al-Din Shah to Mozaffar al-Din Shah, the sanctuaries, the rescript of August 1906, the First Majles, the Fundamental Law and its Supplement, the bombardment of the Majles, the resistance of Tabriz, the taking of Tehran, the 1907 partition, Shuster and the 1911 ultimatum, with a source for every claim.',
  ),
  lede: P([
    'در پادشاهی مظفرالدین‌شاه قاجار، بازرگانان، علما و درس‌خواندگان شهرها با بست و اعتصاب از شاه خواستند قدرتش را با قانون محدود کند. شاه در مرداد ۱۲۸۵ فرمان مجلس شورای ملی را داد و چند روز پیش از مرگش قانون اساسی را امضا کرد. ایران نخستین مجلس و نخستین قانون اساسی خود را یافت.',
    'این صفحه ماجرا را از امتیازها و جنبش تنباکو تا اولتیماتوم ۱۹۱۱ روایت می‌کند: آدم‌ها، سندها و روزها. هر ادعا منبع دارد و نگاه خودمان جدا و با برچسب آمده است. پادکست «ماجرای مشروطه»ی امیر خادم را هم قسمت‌به‌قسمت راهنما کرده‌ایم.',
  ], [
    'Under Mozaffar al-Din Shah Qajar, merchants, clerics and the educated of the towns used sanctuary and strikes to ask the shah to limit his power by law. In August 1906 the shah granted a national consultative assembly, and days before his death he signed the Fundamental Law. Iran had its first parliament and its first constitution.',
    'This page tells the story from the concessions and the Tobacco protest to the ultimatum of 1911: the people, the documents and the days. Every claim has a source, and our own reading is kept apart and labelled. Amir Khadem’s podcast «ماجرای مشروطه» is mapped episode by episode.',
  ]),
}

export const facts: [Bi, Bi][] = [
  [B('فرمان مجلس', 'The rescript'), B('۱۴ جمادی‌الثانی ۱۳۲۴ / ۵ اوت ۱۹۰۶', '14 Jomada II 1324 / 5 August 1906')],
  [B('گشایش مجلس اول', 'First Majles opens'), B('۷ اکتبر ۱۹۰۶ (۱۴ مهر ۱۲۸۵)', '7 October 1906')],
  [B('بست سفارت', 'Legation sanctuary'), B('۱۴٬۰۰۰ تن تا ۲ اوت ۱۹۰۶', '14,000 people by 2 August 1906')],
  [B('قانون اساسی', 'Constitution'), B('۵۱ اصل (۱۹۰۶) + ۱۰۷ اصل متمم (۱۹۰۷)', '51 articles (1906) + 107-article Supplement (1907)')],
]

export interface MashPhoto { id: string; src: string; caption: Bi; page: string; author: string; license: string }
const f = (name: string) => `https://commons.wikimedia.org/wiki/File:${name}`

export const photos: MashPhoto[] = [
  { id: 'first-majles', src: '/media/mashruteh/first-majles.webp', caption: B('نمایندگان مجلس اول (۱۹۰۶–۱۹۰۸)؛ در میانه صنیع‌الدوله، نخستین رئیس مجلس.', 'Members of the First Majles (1906–1908); at the centre Sani al-Dowleh, its first president.'), page: f('First_Majlis_MPs.jpg'), author: 'Unknown photographer', license: 'PD-Iran' },
  { id: 'mozaffar', src: '/media/mashruteh/mozaffar.webp', caption: B('مظفرالدین‌شاه قاجار، حدود ۱۹۰۵.', 'Mozaffar al-Din Shah Qajar, about 1905.'), page: f('Mozaffar_ad-Din_Shah_Qajar.jpg'), author: 'Unknown photographer', license: 'PD-Iran' },
  { id: 'mozaffar-1902', src: '/media/mashruteh/mozaffar-1902.webp', caption: B('مظفرالدین‌شاه (میانه، با جلیقهٔ سفید) و همراهان در چشمه‌های آب معدنی فرانسه، ۱۹۰۲؛ کارت‌پستال هم‌زمان.', 'Mozaffar al-Din Shah (centre, white waistcoat) and his retinue at a French spa, 1902; a contemporary postcard.'), page: f('Mozaffar_ad-Din_Shah_1902.jpg'), author: 'Éd. Rocher-Dubois', license: 'PD-old-70' },
  { id: 'nuri-behbahani', src: '/media/mashruteh/nuri-behbahani.webp', caption: B('شیخ فضل‌الله نوری و سید عبدالله بهبهانی؛ پروندهٔ ویکی‌انبار تاریخ ۱۹۰۶ را دارد.', 'Shaikh Fazlollah Nuri and Sayyed Abdollah Behbahani; the Commons file dates it 1906.'), page: f('AyatFazlollahNouriAndAyatBehbahani.jpg'), author: 'Unknown photographer', license: 'PD-Iran' },
  { id: 'mohammad-ali', src: '/media/mashruteh/mohammad-ali.webp', caption: B('محمدعلی‌شاه، دسامبر ۱۹۰۷ (عکس خبرگزاری بین).', 'Mohammad Ali Shah, December 1907 (Bain News Service).'), page: f('Mohammad_Ali_Shah_Qajar.png'), author: 'Bain News Service', license: 'PD-Bain' },
  { id: 'majles-bombarded', src: '/media/mashruteh/majles-bombarded.webp', caption: B('ساختمان مجلس پس از گلوله‌باران بریگاد قزاق به فرماندهی کلنل لیاخوف، ژوئن ۱۹۰۸.', 'The Majles building after the bombardment by the Cossack Brigade under Colonel Liakhov, June 1908.'), page: f('Majlisbomb.jpg'), author: 'Unknown photographer', license: 'PD-Iran' },
  { id: 'bagh-e-shah', src: '/media/mashruteh/bagh-e-shah.webp', caption: B('زندانیان در زنجیر در باغ شاه پس از کودتای ژوئن ۱۹۰۸.', 'Prisoners in chains at Bagh-e Shah after the coup of June 1908.'), page: f('Prisoners_in_Bagh-e_Shah_1908.jpg'), author: 'Unknown photographer', license: 'PD-Iran' },
  { id: 'sattar-baqer', src: '/media/mashruteh/sattar-baqer.webp', caption: B('ستارخان و باقرخان، سردار ملی و سالار ملی.', 'Sattar Khan and Baqer Khan, the Sardar-e melli and the Salar-e melli.'), page: f('Sattar_khan_and_Bagir_khan.jpg'), author: 'Unknown photographer', license: 'PD-old' },
  { id: 'tabriz-guns', src: '/media/mashruteh/tabriz-guns.webp', caption: B('سنگر توپ مشروطه‌خواهان در حیاط ارگ تبریز در جنگ‌های یازده‌ماهه، ۱۹۰۹.', 'A constitutionalist gun position in the courtyard of the Arg of Tabriz during the eleven months of fighting, 1909.'), page: f('Tabriz_Constitutional_Revolution.jpg'), author: 'Unknown photographer', license: 'PD-Iran' },
  { id: 'tabriz-forces', src: '/media/mashruteh/tabriz-forces.webp', caption: B('نیروهای مشروطه‌خواه در تبریز، ۱۹۰۹.', 'Constitutionalist forces in Tabriz, 1909.'), page: f('Constitutional_forces_in_Tabriz.jpg'), author: 'Unknown photographer', license: 'PD-Iran' },
  { id: 'davachi', src: '/media/mashruteh/davachi.webp', caption: B('مشروطه‌خواهان در دفاع از پل دوه‌چی تبریز؛ طرحی در یک نشریهٔ لندنی، ۱ مه ۱۹۰۹.', 'Revolutionists defending the Davachi bridge in Tabriz; a drawing in a London paper, 1 May 1909.'), page: f('Revolutionists_defending_Davachi_bridge,_Tabriz_(May_1,_1909).jpg'), author: 'Hermanus Willem Koekkoek', license: 'PD-US' },
  { id: 'yeprem', src: '/media/mashruteh/yeprem.webp', caption: B('یپرم‌خان، از فرماندهان گیلان در فتح تهران و بعدها رئیس نظمیهٔ تهران، ۱۹۱۱.', 'Yeprem Khan, a commander of the Gilan force in the taking of Tehran and later Tehran’s chief of police, 1911.'), page: f('Yeprem_khan.jpg'), author: 'Unknown photographer', license: 'PD-Iran' },
  { id: 'shuster', src: '/media/mashruteh/shuster.webp', caption: B('مورگان شوستر، خزانه‌دار کل ایران، ۱۹۱۱.', 'Morgan Shuster, Treasurer-General of Persia, 1911.'), page: f('MorganShuster.jpg'), author: 'Unknown photographer', license: 'PD-US' },
]

export const photo = (id?: string) => photos.find((p) => p.id === id)

/** A pointer into the podcast: episode number and a timestamp in the YouTube video. */
export interface Listen { ep: number | 'special'; t?: string; note: Bi }

export interface MashSection {
  id: string
  era: Bi
  title: Bi
  body: BiParas
  sources: string[]
  photo?: string
  view?: BiParas
  quotations?: { lines: string[]; cite: Bi; dir: 'rtl' | 'ltr' }
  listen?: Listen[]
}

const CR = 'iranica-cr-events'
const CON = 'iranica-cr-constitution'
const ERA = {
  naser: B('زمینه · ناصرالدین‌شاه', 'Roots · Naser al-Din Shah'),
  mozaffar: B('مظفرالدین‌شاه · ۱۸۹۶–۱۹۰۷', 'Mozaffar al-Din Shah · 1896–1907'),
  mohammadAli: B('محمدعلی‌شاه · ۱۹۰۷–۱۹۰۹', 'Mohammad Ali Shah · 1907–1909'),
  after: B('پس از فتح تهران · ۱۹۰۹–۱۹۱۱', 'After the taking of Tehran · 1909–1911'),
}

export const sections: MashSection[] = [
  {
    id: 'roots', era: ERA.naser,
    title: B('زمینه: امتیازها، تنباکو و ترور ناصرالدین‌شاه', 'Roots: concessions, tobacco and the killing of Naser al-Din Shah'),
    body: P([
      'در دورهٔ ناصرالدین‌شاه دولت برای درآمد به امتیاز دادن به بیگانگان رو آورد. انحصار خرید و فروش و صادرات تنباکو به شرکتی بریتانیایی داده شد. از بهار ۱۸۹۱ مخالفت به رهبری علما و بازار بالا گرفت و در دسامبر فتوای تحریمی منسوب به میرزای شیرازی در تهران پخش شد. شاه امتیاز را لغو کرد و ماجرا در ۲۶ ژانویهٔ ۱۸۹۲ بسته شد.',
      'یارشاطر جنبش تنباکو را پیش‌درآمد انقلاب مشروطه می‌داند: نخستین بار در دوران نو که علما مردم شهرها را با موفقیت در برابر دولت بسیج کردند. در ۱ مه ۱۸۹۶ (۱۲ اردیبهشت ۱۲۷۵) میرزا رضا کرمانی، که از اندیشه‌های سید جمال‌الدین اسدآبادی اثر گرفته بود، شاه را کشت و پسرش مظفرالدین میرزا، ولیعهد و حاکم آذربایجان، به تخت رسید.',
    ], [
      'Under Naser al-Din Shah the government turned to concessions to foreigners for revenue. A British company was given the monopoly of buying, selling and exporting tobacco. From spring 1891 opposition led by the ulama and the bazaar grew, and in December a boycott fatwa attributed to Mirza Hasan Shirazi circulated in Tehran. The shah cancelled the concession, and the episode closed on 26 January 1892.',
      'Yarshater sees the Tobacco protest as a prelude to the Constitutional Revolution: the first time in the modern period that the ulama successfully rallied the urban population against the government. On 1 May 1896 Mirza Reza Kermani, influenced by the ideas of Jamal al-Din Asadabadi, killed the shah, and his son Mozaffar al-Din Mirza, crown prince and governor of Azerbaijan, came to the throne.',
    ]),
    sources: ['iranica-shirazi', 'iranica-qajar'],
    listen: [
      { ep: 9, note: B('امتیازنامه و لغو آن', 'The concession and its cancellation') },
      { ep: 7, t: '01:44:04', note: B('ترور ناصرالدین‌شاه به دست میرزا رضا', 'Mirza Reza and the assassination') },
      { ep: 5, note: B('تنظیمات و اندیشهٔ قانون', 'Tanzimat and the idea of law') },
    ],
  },
  {
    id: 'mozaffar', era: ERA.mozaffar,
    title: B('مظفرالدین‌شاه: خزانهٔ تهی، وام‌های روس و سفرهای اروپا', 'Mozaffar al-Din Shah: an empty treasury, Russian loans and European journeys'),
    body: P([
      'مظفرالدین‌شاه در ۸ ژوئن ۱۸۹۶ تاج گذاشت. بریتانیکای ۱۹۱۱ می‌نویسد او در آغاز خرید و فروش منصب‌ها را ممنوع کرد و مالیات نان و گوشت را برای همیشه بخشید. اما خزانه تهی ماند. پس از ۱۸۹۰ با تورم ارزش مالیات زمین کاهش یافت و قران نقره‌ای در برابر لیره افت کرد. دولت از روسیه وام گرفت: دو میلیون لیره در ۱۹۰۰ و یک میلیون در ۱۹۰۲.',
      'شاه سه بار به اروپا رفت: ۱۹۰۰، ۱۹۰۲ و ۱۹۰۵. به نوشتهٔ بریتانیکا، در پاریسِ ۱۹۰۰ سوءقصدی به جان او ناکام ماند. امیر خادم در قسمت سیزدهم می‌گوید هزینهٔ سفرها بیشتر از همین وام‌ها تأمین شد. امین‌الدوله اصلاح مالیه را آغاز کرد و تنها کامیابی‌اش سامان دادن گمرک به دست ژوزف نوز بلژیکی بود: درآمد گمرک از ۲۰۰ هزار لیره در سال ۱۸۹۸ به ۶۰۰ هزار لیره در آغاز ۱۹۰۴ رسید. سخت‌گیری گمرک، بازرگانان تبریز، تهران، اصفهان و شیراز را به اعتراض کشاند.',
    ], [
      'Mozaffar al-Din Shah was enthroned on 8 June 1896. The 1911 Britannica writes that he began by suppressing the purchase of offices and remitting the taxes on bread and meat for ever. But the treasury stayed empty. After 1890 inflation eroded the land tax and the silver qeran fell against sterling. The government borrowed from Russia: £2 million in 1900 and £1 million in 1902.',
      'The shah travelled to Europe three times, in 1900, 1902 and 1905. Britannica records a failed attempt on his life in Paris in 1900. Amir Khadem says in episode 13 that the journeys were largely paid for from these loans. Amin al-Dowleh began a reform of the finances; his one success was the reorganisation of the customs under the Belgian Joseph Naus, which raised customs revenue from £200,000 a year in 1898 to £600,000 by early 1904. The stricter customs drove the merchants of Tabriz, Tehran, Isfahan and Shiraz to protest.',
    ]),
    sources: ['eb1911-muzaffar', CR, 'majera-podcast'],
    photo: 'mozaffar-1902',
    view: P([
      'مظفرالدین‌شاه بیمار بود و سرانجام فرمان مجلس و قانون اساسی را امضا کرد. لحن تند بریتانیکای ۱۹۱۱ دربارهٔ دربار او نگاه بریتانیایی آن روز است؛ ما رقم‌ها و تاریخ‌هایش را آورده‌ایم، نه داوری‌اش را.',
    ], [
      'Mozaffar al-Din Shah was a sick man, and in the end he signed the rescript for the Majles and the Fundamental Law. The 1911 Britannica’s harsh tone about his court is the British view of its day; we take its figures and dates, not its judgement.',
    ]),
    listen: [
      { ep: 13, t: '01:15:42', note: B('وام‌ها و هزینهٔ سفرهای اروپا', 'The loans and the cost of the journeys') },
      { ep: 14, note: B('سقوط امین‌السلطان', 'The fall of Amin al-Soltan') },
      { ep: 15, note: B('صدارت عین‌الدوله', 'Ain al-Dowleh in office') },
    ],
  },
  {
    id: 'abdolazim', era: ERA.mozaffar,
    title: B('قند، فلک و بست شاه عبدالعظیم', 'Sugar, the bastinado and the sanctuary at Shah Abd al-Azim'),
    body: P([
      'در ۱۹۰۵ بازرگانان با پول خود جنبش مخالفی در تهران سامان دادند و سخنگوی آن سید عبدالله بهبهانی بود. به نوشتهٔ ایرانیکا، بهبهانی و سید محمد طباطبایی شب ۲۵ رمضان ۱۳۲۳ (۲۳ نوامبر ۱۹۰۵) پیمان همکاری بستند. کسروی می‌نویسد قند، که از روسیه می‌آمد، به سبب جنگ روس و ژاپن گران شده بود و بهایش از پنج قران به هفت قران رسیده بود.',
      'در ۱۲ دسامبر ۱۹۰۵ (۲۱ آذر ۱۲۸۴) علاءالدوله، حاکم تهران، دو بازرگان را برای گران کردن قند فلک کرد. فردای آن بازار بسته شد. دو روز بعد بهبهانی و طباطبایی با حدود ۲٬۰۰۰ تن، بیشتر طلاب و روحانیان پایین‌رتبه، در حرم شاه عبدالعظیم بست نشستند. خواستهٔ نخست برکناری عین‌الدوله و نوز بود. دولت نپذیرفت، اما خواستهٔ «عدالتخانه» را پذیرفت. دستخط ۱۰ ژانویهٔ ۱۹۰۶ (۲۰ دی ۱۲۸۴) عدالتخانه‌ای وعده داد تا «قوانین شرع را اجرا کند و امنیت رعیت را تأمین کند»، و دو روز بعد بست‌نشینان بیرون آمدند.',
    ], [
      'In 1905 the merchants organised and funded an opposition movement in Tehran, with Sayyed Abdollah Behbahani as its spokesman. Iranica writes that Behbahani and Sayyed Mohammad Tabatabai agreed to work together on the eve of 25 Ramazan 1323 (23 November 1905). Kasravi writes that sugar, which came from Russia, had grown dear because of the Russo-Japanese war, rising from five qerans to seven.',
      'On 12 December 1905 Ala al-Dowleh, the governor of Tehran, had two merchants bastinadoed for raising the price of sugar. The next day the bazaar closed. Two days later Behbahani and Tabatabai led about 2,000 people, mostly lesser clerics and students, into sanctuary at the shrine of Shah Abd al-Azim. Their first demand was the dismissal of Ain al-Dowleh and Naus. The government refused, but accepted a demand for an ʿadālat-khāneh, a “house of justice”. A rescript of 10 January 1906 promised one, to “execute the laws of the Sharia and ensure the security of the subjects”, and the protesters left two days later.',
    ]),
    sources: [CR, 'kasravi-2'],
    view: P([
      'ایرانیکا می‌نویسد واژهٔ «عدالتخانه» معنای روشنی نداشت و همین ابهام سازش را ممکن کرد. کسروی سخت با کسانی مخالف است که می‌گویند دو سید از معنای مشروطه آگاه نبودند. هر دو داوری را کنار هم می‌گذاریم.',
    ], [
      'Iranica writes that the term ʿadālat-khāneh had no precise meaning, and that this vagueness made the compromise possible. Kasravi argues hard against those who say the two Sayyeds did not know what a constitution meant. We set both judgements side by side.',
    ]),
    listen: [
      { ep: 18, t: '01:07:48', note: B('قند روسی و جنگ ژاپن', 'Russian sugar and the Japanese war') },
      { ep: 19, t: '01:04:40', note: B('دستخط عدالتخانه', 'The rescript on the house of justice') },
    ],
  },
  {
    id: 'legation', era: ERA.mozaffar,
    title: B('کوچ به قم و بست سفارت بریتانیا', 'The exodus to Qom and the sanctuary at the British legation'),
    body: P([
      'دولت به وعده عمل نکرد. در ژوئن ۱۹۰۶ طباطبایی بر منبر پایان حکومت خودسرانه و «مجلس عدالتخانه»ای را خواست که همهٔ طبقه‌ها در آن نماینده داشته باشند. در ۱۱ ژوئیه، پس از دستگیری شیخ محمد واعظ، طلبه‌ای کشته شد. شیخ فضل‌الله نوری، که تا آن روز همراه شاه بود، به فشار جمعیت به مسجد آمد. در ۱۵ ژوئیه علمای اصلاح‌خواه به نشانهٔ اعتراض به قم کوچیدند.',
      'هم‌زمان، به ابتکار بهبهانی، در ۱۹ ژوئیه حدود پنجاه بازرگان و طلبه در سفارت بریتانیا بست نشستند. شمارشان تا ۲ اوت به ۱۴٬۰۰۰ تن رسید. هر صنف چادری داشت و خوراک در دیگ‌های بزرگ در آشپزخانه‌ای همگانی پخته می‌شد. خواستهٔ «مجلس شورای ملی» در همین بست شکل گرفت: سه روز پس از ۲۳ ژوئیه، در دیدار هشت بازرگان بزرگ با عین‌الدوله، نخستین بار مجلسی از نمایندگان برگزیدهٔ ملت خواسته شد. عین‌الدوله در ۲۹ ژوئیه استعفا داد.',
    ], [
      'The government did not keep its promise. In June 1906 Tabatabai called from the pulpit for an end to arbitrary rule and for a council of justice in which all classes would be represented. On 11 July, after the arrest of Shaikh Mohammad Vaez, a theology student was killed. Shaikh Fazlollah Nuri, until then a supporter of the shah, was pressed by the crowd into joining the protest. On 15 July the reformist ulama left for Qom in protest.',
      'At the same time, on Behbahani’s initiative, about fifty merchants and clerics took sanctuary at the British legation on 19 July. By 2 August they numbered 14,000. Each guild had its own tent and meals were cooked in huge cauldrons in a common kitchen. The demand for a national assembly took shape during this sanctuary: three days after 23 July, at a meeting of eight leading merchants with Ain al-Dowleh, an elected national assembly was asked for for the first time. Ain al-Dowleh resigned on 29 July.',
    ]),
    sources: [CR, 'iranica-nuri'],
    view: P([
      'سفارت بریتانیا جای امنی بود، اما ایرانیکا می‌نویسد سیاست رسمی بریتانیا پشتیبانی نکردن از مخالفان دولت ایران بود. بست کار بازرگانان و صنف‌ها بود و هزینه‌اش را بیشتر بازرگانانی چون امین‌الضرب و معین‌التجار پرداختند.',
    ], [
      'The British legation was a safe place, but Iranica writes that official British policy was not to support opposition to the Persian government. The sanctuary was the work of merchants and guilds, and its costs were met mostly by merchants such as Amin al-Zarb and Moin al-Tojjar.',
    ]),
    listen: [
      { ep: 20, t: '00:01:49', note: B('بست باغ سفارت و فرمان', 'The legation garden and the rescript') },
    ],
  },
  {
    id: 'farman', era: ERA.mozaffar,
    title: B('فرمان مشروطیت: ۱۴ جمادی‌الثانی ۱۳۲۴', 'The constitutional rescript: 14 Jomada II 1324'),
    body: P([
      'مظفرالدین‌شاه در «قصر صاحبقرانیه» فرمانی به صدراعظم داد به تاریخ ۱۴ جمادی‌الثانی ۱۳۲۴، برابر ۵ اوت ۱۹۰۶، که در ایران با نام ۱۴ مرداد یاد می‌شود. در متنی که مجلس در مجموعهٔ رسمی مصوبات چاپ کرد، شاه تصمیم می‌گیرد «مجلس شورای ملی از منتخبین شاهزادگان و علماء و قاجاریه و اعیان و اشراف و ملاکین و تجار و اصناف» در تهران تشکیل شود.',
      'ایرانیکا (مارتین) می‌نویسد معترضان دستخط ۵ اوت را مبهم دانستند و نپذیرفتند، و پس از گفت‌وگوهای بیشتر دستخط ۱۹ جمادی‌الثانی (۱۰ اوت) حق «مجلس شورای ملی» را داد. امیر خادم هم در قسمت بیستم از دو متن متفاوت فرمان سخن می‌گوید. پس از آن بیشتر بست‌نشینان سفارت را ترک کردند و علما در ۱۴ اوت از قم بازگشتند.',
    ], [
      'At the Saheb-qaraniyeh palace Mozaffar al-Din Shah issued a rescript to his chief minister dated 14 Jomada II 1324, which is 5 August 1906 and is remembered in Iran as 14 Mordad. In the text the Majles printed in its official collection of enactments, the shah resolves that a national consultative assembly be formed in Tehran of those elected by the princes, the ulama, the Qajars, the notables, the landowners, the merchants and the guilds.',
      'Iranica (Martin) writes that the protesters found the rescript of 5 August too vague and rejected it, and that after further talks a rescript of 19 Jomada II (10 August) granted the right to a majles-e shura-ye melli. Amir Khadem also speaks in episode 20 of two different texts of the rescript. Most of those in sanctuary then left the legation, and the ulama returned from Qom on 14 August.',
    ]),
    sources: ['majles-farman', CR, 'majera-podcast'],
    quotations: {
      dir: 'rtl',
      lines: [
        'چنان مصمم شدیم که مجلس شورای ملی از منتخبینِ شاهزادگان و علماء و قاجاریه و اعیان و اشراف و ملاکین و تجار و اصناف به انتخاب طبقات مرقومه در دارالخلافهٔ طهران تشکیل و تنظیم شود',
        'مجلس شورای مرقوم که نگهبان عدل ماست افتتاح و به اصلاحات لازمه امور مملکت و اجراء قوانین شرع مقدس شروع نماید',
      ],
      cite: B('فرمان مشروطیت، ۱۴ جمادی‌الثانی ۱۳۲۴؛ مصوبات دورهٔ اول مجلس شورای ملی، چاپ ۱۳۱۸', 'The constitutional rescript, 14 Jomada II 1324; Enactments of the First Majles, 1939 printing'),
    },
    view: P([
      'تاریخ‌گذاری این روز یکی نیست: یک متن رسمی تاریخ ۱۴ جمادی‌الثانی را دارد و ایرانیکا متن پذیرفته‌شده را دستخط ۱۰ اوت می‌داند. یاد ۱۴ مرداد همان روز نخست را نگاه داشته است. واژهٔ «مشروطه» در متن فرمان نیامده است.',
    ], [
      'The dating of this day is not single: one official text bears 14 Jomada II, and Iranica treats the rescript of 10 August as the one accepted. The memory of 14 Mordad keeps the first day. The word mashruteh does not appear in the rescript.',
    ]),
    listen: [
      { ep: 20, t: '01:44:45', note: B('دو متن فرمان', 'The two texts of the rescript') },
    ],
  },
  {
    id: 'majles', era: ERA.mozaffar,
    title: B('مجلس اول و قانون اساسی ۱۲۸۵', 'The First Majles and the Fundamental Law of 1906'),
    body: P([
      'قانون انتخابات در ۹ سپتامبر ۱۹۰۶ اعلام شد. رأی‌دهندگان شش طبقه بودند: شاهزادگان و قاجاریه، علما و طلاب، اعیان و اشراف، بازرگانان، مالکان و دهقانان، و اصناف. سن رأی‌دادن ۲۵ سال بود و زنان و نظامیان رأی نداشتند. از ۱۵۶ کرسی، ۶۰ کرسی از آن تهران بود: ۳۲ اصناف، ۱۰ بازرگانان، ۱۰ مالکان، ۴ علما و ۴ قاجاریه. مخبرالسلطنه، که بر انتخابات تهران نظارت داشت، برای زرتشتیان، ارمنیان و یهودیان هر کدام یک نماینده در نظر گرفت.',
      'مجلس در ۷ اکتبر ۱۹۰۶ (۱۴ مهر ۱۲۸۵) گشوده شد و صنیع‌الدوله نخستین رئیس آن شد. چون شاه بیمار بود، نگارش قانون اساسی شتاب گرفت. شاه پیش‌نویس را با تغییر بازگرداند و متن نهایی را در ۳۰ دسامبر ۱۹۰۶ (۱۴ ذی‌القعدهٔ ۱۳۲۴) امضا کرد، ده روز پیش از مرگش. این قانون ۵۱ اصل داشت: مجلس حق قانون‌گذاری داشت و بودجه، مالیات، وام، امتیاز و عهدنامه بی‌تصویب آن روا نبود. یکی از نخستین کارهای مجلس رد وام پیشنهادی بریتانیا و روسیه بود.',
    ], [
      'The electoral law was announced on 9 September 1906. Voters were divided into six estates: princes and the Qajar family, ulama and students, notables, merchants, landowners and peasants, and the guilds. The voting age was 25, and women and serving soldiers had no vote. Of 156 seats, 60 belonged to Tehran: 32 for the guilds, 10 for the merchants, 10 for the landowners, 4 for the ulama and 4 for the Qajars. Mokhber al-Saltaneh, who supervised the Tehran elections, allotted one representative each to the Zoroastrians, Armenians and Jews.',
      'The Majles opened on 7 October 1906 with Sani al-Dowleh as its first president. Because the shah was ill, the drafting of a constitution was rushed. He returned the draft with changes and signed the final text on 30 December 1906 (14 Dhu al-Qaʿda 1324), ten days before his death. The law had 51 articles: the Majles could legislate, and budgets, taxes, loans, concessions and treaties all needed its approval. One of its first acts was to veto a proposed British and Russian loan.',
    ]),
    sources: [CON, CR, 'majles-qanun'],
    photo: 'first-majles',
    quotations: {
      dir: 'rtl',
      lines: [
        'مجلس شورای ملی نماینده قاطبهٔ اهالی مملکت ایران است که در امور معاشی و سیاسی وطن خود مشارکت دارند.',
      ],
      cite: B('قانون اساسی، اصل دوم؛ مصوبات دورهٔ اول مجلس شورای ملی', 'Fundamental Law, Article 2; Enactments of the First Majles'),
    },
    listen: [
      { ep: 21, t: '00:01:18', note: B('قانون انتخابات و انتخابات تهران', 'The electoral law and the Tehran elections') },
      { ep: 22, t: '00:01:52', note: B('امضای قانون اساسی', 'The signing of the Fundamental Law') },
      { ep: 23, note: B('مرور اصل‌به‌اصل قانون اساسی', 'The constitution article by article') },
    ],
  },
  {
    id: 'supplement', era: ERA.mohammadAli,
    title: B('متمم قانون اساسی (۱۲۸۶)', 'The Supplementary Fundamental Law (1907)'),
    body: P([
      'قانون نخست بیشتر دربارهٔ خود مجلس و سنا بود. از فوریهٔ ۱۹۰۷ کمیسیونی با الگوی قانون اساسی ۱۸۳۱ بلژیک متمم را نوشت. متمم ۱۰۷ اصل داشت: برابری در برابر قانون، امنیت جان و مال و خانه، آزادی مطبوعات و انجمن، جدایی سه قوه، مسئولیت وزیران در برابر مجلس و دیوان محاسبات. مجلس آن را در ۷ اکتبر ۱۹۰۷ تصویب کرد و محمدعلی‌شاه در ۸ اکتبر امضا کرد.',
      'بحث‌برانگیزترین اصل‌ها برابری همهٔ اتباع (اصل ۸) و نظارت علما بر قانون‌ها (اصل ۲) بود. شیخ فضل‌الله نوری اصلی پیشنهاد کرد که هیچ قانونی بی‌تأیید هیئتی از مجتهدان اجرا نشود. این اصل پذیرفته شد، اما با این قید که اعضای هیئت را مجلس برگزیند. به نوشتهٔ ارجمند، این هیئت در دورهٔ پهلوی هرگز به کار نیفتاد.',
    ], [
      'The first law dealt mostly with the Majles and the Senate. From February 1907 a committee took the Belgian constitution of 1831 as its model and drafted a Supplement. It had 107 articles: equality before the law, security of life, property and home, freedom of the press and of association, the separation of powers, ministerial responsibility to the Majles, and an audit court. The Majles ratified it on 7 October 1907 and Mohammad Ali Shah signed it on 8 October.',
      'The most contested articles were the equality of all subjects (Art. 8) and clerical oversight of legislation (Art. 2). Shaikh Fazlollah Nuri proposed that no law take effect without the approval of a committee of mojtaheds. The article was adopted, but with the proviso that the Majles choose the committee’s members. Arjomand writes that the committee became a dead letter in the Pahlavi period.',
    ]),
    sources: [CON, CR, 'majles-motammam'],
    quotations: {
      dir: 'rtl',
      lines: [
        'اصل هفتم: اساس مشروطیت جزئاً و کلاً تعطیل بردار نیست.',
        'اصل هشتم: اهالی مملکت ایران در مقابل قانون دولتی متساوی الحقوق خواهند بود.',
        'اصل بیست و ششم: قوای مملکت ناشی از ملت است.',
        'اصل سی و پنجم: سلطنت ودیعه‌ایست که بموهبت الهی از طرف ملت بشخص پادشاه مفوض شده.',
      ],
      cite: B('متمم قانون اساسی؛ مصوبات دورهٔ اول مجلس شورای ملی، چاپ ۱۳۱۸', 'Supplementary Fundamental Law; Enactments of the First Majles, 1939 printing'),
    },
    view: P([
      'ارجمند می‌نویسد واژه‌های «به موهبت الهی» در اصل ۳۵ را محمدعلی‌میرزا به دست خود افزود. ما این را نشانهٔ کشمکشی می‌بینیم که در یک جمله جا گرفت: سلطنت امانت ملت است، اما خدادادی هم هست.',
    ], [
      'Arjomand writes that the words “through divine gift” in Article 35 were added by Mohammad Ali Mirza in his own hand. We read this as a struggle compressed into one sentence: the monarchy is a trust from the nation, and also a gift of God.',
    ]),
    listen: [
      { ep: 27, t: '00:00:36', note: B('کشمکش بر سر برابری و نظارت علما', 'The quarrel over equality and clerical oversight') },
      { ep: 32, t: '00:00:42', note: B('تصویب متمم', 'The Supplement ratified') },
    ],
  },
  {
    id: 'clergy', era: ERA.mohammadAli,
    title: B('علما: بهبهانی، طباطبایی و شیخ فضل‌الله نوری', 'The ulama: Behbahani, Tabatabai and Shaikh Fazlollah Nuri'),
    body: P([
      'بهبهانی و طباطبایی، دو سید، رهبران دینی بست‌ها بودند و پس از گشایش مجلس، بی‌آنکه نماینده باشند، در نشست‌ها حاضر می‌شدند تا به آن مشروعیت دهند. علمای عتبات به رهبری آخوند ملا محمدکاظم خراسانی هم از آغاز پشتیبان مشروطه بودند.',
      'شیخ فضل‌الله نوری نخست همراه شد و تا ژانویهٔ ۱۹۰۷ «مجلس شورای ملی» را برای مردم سودمند می‌دانست، به این شرط که نهادی اسلامی باشد. او با آزادی کامل و برابری مسلمان و نامسلمان مخالف بود و «مشروطهٔ مشروعه» را پیش کشید. در ۲۱ ژوئن ۱۹۰۷ با یارانش در شاه عبدالعظیم بست نشست و از آنجا با اعلامیه‌ها بر ضد مشروطه سخن گفت؛ ایرانیکا می‌نویسد هزینهٔ این بست را دربار و به‌ویژه شاه می‌داد. پس از فتح تهران، او در ۳۱ ژوئیهٔ ۱۹۰۹ محاکمه و در میدان توپخانه به دار آویخته شد.',
    ], [
      'Behbahani and Tabatabai, the two Sayyeds, were the religious leaders of the sanctuaries; after the Majles opened they attended its sessions without being deputies, to lend it legitimacy. The ulama of the shrine cities in Iraq, led by Akhund Mulla Mohammad Kazem Khorasani, also supported the constitution from its early days.',
      'Shaikh Fazlollah Nuri joined at first, and as late as January 1907 thought a national consultative assembly beneficial, provided it was an Islamic institution. He opposed full freedom and the equality of Muslims and non-Muslims, and proposed a constitution “according to the sharia”. On 21 June 1907 he and his followers took sanctuary at Shah Abd al-Azim and campaigned against the constitution in leaflets; Iranica writes that the sanctuary was funded by the court and above all by the shah. After the taking of Tehran he was tried on 31 July 1909 and hanged in Tupkhaneh Square.',
    ]),
    sources: [CR, 'iranica-nuri', 'iranica-behbahani'],
    photo: 'nuri-behbahani',
    view: P([
      'مارتین در ایرانیکا نوری را نخستین فقیهی می‌داند که ناسازگاری قانون برخاسته از ارادهٔ مردم با قانون برخاسته از ارادهٔ الهی را روشن صورت‌بندی کرد. سرنوشت دو تن از آنان تلخ بود: نوری اعدام شد و بهبهانی در ۱۹۱۰ ترور شد. این‌ها را بی‌داوری کنار هم می‌گذاریم.',
    ], [
      'Martin in Iranica calls Nuri the first jurist to identify and clearly argue the incompatibility between law based on the will of the people and law based on divine will. Two of them ended badly: Nuri was executed and Behbahani was assassinated in 1910. We set these side by side without a verdict.',
    ]),
    listen: [
      { ep: 30, t: '00:03:37', note: B('شیخ فضل‌الله و مجلس', 'Shaikh Fazlollah and the Majles') },
    ],
  },
  {
    id: 'society', era: ERA.mohammadAli,
    title: B('انجمن‌ها، روزنامه‌ها، بازرگانان و ترور اتابک', 'Societies, newspapers, merchants and the killing of the Atabak'),
    body: P([
      'پس از فرمان، روزنامه‌های مشروطه‌خواه پدید آمدند: «مجلس» از اکتبر ۱۹۰۶ مذاکرات را چاپ می‌کرد؛ «حبل‌المتین» تهران، و «تمدن»، «صوراسرافیل» و «مساوات» تندتر بودند. انجمن‌ها، که پیش از مجلس پنهانی کار می‌کردند، در همه‌جا پدید آمدند. در شهرهای ولایات چون شورا کار می‌کردند و گاه جای حکومت را می‌گرفتند. نیرومندترینشان انجمن آذربایجان در تهران بود با حدود ۳٬۰۰۰ عضو.',
      'مجلس بانک ملی را بنیاد گذاشت تا بی‌وام خارجی کار کند، اما سرمایهٔ کافی گرد نیامد. در مارس ۱۹۰۷ تیول لغو شد. محمدعلی‌شاه امین‌السلطان را از اروپا بازگرداند و صدراعظم کرد. او در ۳۱ اوت ۱۹۰۷ (۸ شهریور ۱۲۸۶) به دست عباس‌آقا، صرافی تبریزی که خود را «فدایی شمارهٔ ۴۱» می‌خواند، کشته شد. ایرانیکا می‌گوید دربارهٔ اینکه چه کسی پشت این ترور بود نظریه‌های گوناگون هست.',
    ], [
      'After the rescript, constitutionalist newspapers appeared: Majles printed the debates from October 1906; Habl al-Matin of Tehran; and the more radical Tamaddon, Sur-e Esrafil and Mosavat. Societies (anjomans), which had worked in secret before the Majles, sprang up everywhere. In provincial towns they acted as councils and sometimes took over from the authorities. The most powerful in Tehran was the Anjoman-e Azarbayjan, with about 3,000 members.',
      'The Majles founded a national bank to manage without foreign loans, but it could not raise enough capital. In March 1907 the toyul land benefices were abolished. Mohammad Ali Shah brought Amin al-Soltan back from Europe as chief minister. He was killed on 31 August 1907 by Abbas Aqa, a Tabrizi money-changer who called himself “fedai no. 41”. Iranica says there are various theories about who was behind the killing.',
    ]),
    sources: [CR],
    listen: [
      { ep: 22, note: B('بانک ملی', 'The national bank') },
      { ep: 26, note: B('لغو تیول و قانون انجمن‌ها', 'Toyul abolished and the law on councils') },
      { ep: 31, t: '01:05:23', note: B('ترور اتابک و عباس‌آقا', 'The Atabak and Abbas Aqa') },
      { ep: 28, note: B('«حقوق و وظایف ملت»', '“The rights and duties of the nation”') },
    ],
  },
  {
    id: 'partition', era: ERA.mohammadAli,
    title: B('قرارداد ۱۹۰۷: تقسیم ایران', 'The 1907 convention: Persia divided'),
    body: P([
      'در همان روز ترور اتابک، ۳۱ اوت ۱۹۰۷، بریتانیا و روسیه در سن‌پترزبورگ قراردادی دربارهٔ ایران، افغانستان و تبت بستند. در مقدمه از «احترام به تمامیت و استقلال ایران» سخن رفت، اما بریتانیا تعهد کرد در شمالِ خط قصرشیرین–اصفهان–یزد–کاخک امتیاز نخواهد، و روسیه در جنوب‌شرقیِ خط گزیک–بیرجند–کرمان–بندرعباس. میان این دو، منطقه‌ای بی‌طرف ماند. تهران در منطقهٔ روسیه بود.',
      'قرارداد بی‌مشورت با ایران بسته شد و دولت ایران تا ۱۱ سپتامبر رسماً از متن آگاه نشد. ایرانیکا می‌نویسد همکاری دو قدرت پس از آن نگذاشت هیچ‌یک از دو سوی کشمکش مجلس و شاه پیروزی روشنی بیابد.',
    ], [
      'On the day of the Atabak’s murder, 31 August 1907, Britain and Russia signed a convention on Persia, Afghanistan and Tibet in St Petersburg. The preamble spoke of respecting “the integrity and independence of Persia”, but Britain undertook not to seek concessions beyond a line from Kasr-i-Shirin through Isfahan, Yezd and Kakhk, and Russia not beyond a line through Gazik, Birjand, Kerman and Bandar Abbas. Between them lay a neutral zone. Tehran was in the Russian sphere.',
      'The convention was made without consulting Persia, and the Persian government was not officially told its terms until 11 September. Iranica writes that the two powers’ cooperation afterwards kept either side in the struggle between Majles and shah from a clear victory.',
    ]),
    sources: ['iranica-arc-1907', 'treaty-1907', 'iranica-gb-iii', CR],
    quotations: {
      dir: 'ltr',
      lines: ['beyond a line starting from Kasr-i-Shirin, passing through Isfahan, Yezd, Kakhk, and ending at a point on the Persian frontier at the intersection of the Russian and Afghan frontiers'],
      cite: B('قرارداد ۱۹۰۷، مادهٔ یکم (تعهد بریتانیا)', 'Convention of 1907, Article I (Britain’s undertaking)'),
    },
    listen: [
      { ep: 32, t: '00:47:05', note: B('معاهدهٔ انگلیس و روس', 'The Anglo-Russian treaty') },
    ],
  },
  {
    id: 'coup', era: ERA.mohammadAli,
    title: B('محمدعلی‌شاه و به توپ بستن مجلس', 'Mohammad Ali Shah and the bombardment of the Majles'),
    body: P([
      'محمدعلی‌شاه در ژانویهٔ ۱۹۰۷ به تخت نشست. نخستین رویارویی در دسامبر ۱۹۰۷ بود: کابینهٔ ناصرالملک در ۱۳ دسامبر استعفا داد، فردای آن گروهی از هواداران شاه به مجلس حمله کردند و در میدان توپخانه گرد آمدند، و ناصرالملک بازداشت و به زنجیر کشیده شد. اما انجمن‌ها با حدود ۳٬۰۰۰ تن مجلس را نگاه داشتند و در ۲۳ دسامبر شاه شرط‌های مجلس را پذیرفت و سوگند خورد به قانون اساسی وفادار بماند. در فوریهٔ ۱۹۰۸ سوءقصدی به جان شاه ناکام ماند.',
      'در ۴ ژوئن ۱۹۰۸ شاه به باغ شاه رفت، زیر حمایت بریگاد قزاق. خواست هشت مشروطه‌خواه، از جمله ملک‌المتکلمین، سید جمال‌الدین واعظ و میرزا جهانگیرخان، تبعید شوند و مجلس در ۲۲ ژوئن نپذیرفت. بامداد ۲۳ ژوئن ۱۹۰۸ (۲ تیر ۱۲۸۷) قزاق‌ها به فرماندهی افسران روس به مسجد سپهسالار و مجلس یورش بردند و ساختمان مجلس به توپ بسته شد. میرزا جهانگیرخان و ملک‌المتکلمین اعدام شدند و سید جمال‌الدین در بروجرد کشته شد.',
    ], [
      'Mohammad Ali Shah came to the throne in January 1907. The first confrontation came in December 1907: Naser al-Molk’s cabinet resigned on 13 December, the next day a crowd of the shah’s supporters attacked the Majles and gathered in Tupkhaneh Square, and Naser al-Molk was seized and put in chains. But the anjomans held the Majles with about 3,000 men, and on 23 December the shah accepted the Majles’s conditions and swore to abide by the constitution. In February 1908 an attempt on the shah’s life failed.',
      'On 4 June 1908 the shah moved to Bagh-e Shah under the protection of the Cossack Brigade. He demanded the exile of eight constitutionalists, among them Malek al-Motakallemin, Sayyed Jamal al-Din Vaez and Mirza Jahangir Khan, and on 22 June the Majles refused. On the morning of 23 June 1908 Cossacks under Russian officers attacked the Sepahsalar mosque and the Majles, and the Majles building was shelled. Mirza Jahangir Khan and Malek al-Motakallemin were executed, and Sayyed Jamal al-Din was killed at Borujerd.',
    ]),
    sources: [CR, 'kasravi-11'],
    photo: 'majles-bombarded',
    view: P([
      'دولت‌آبادی، به نقل ایرانیکا، یکی از علت‌های ناتوانی مجلس در دفاع از خود را کم شدن پشتیبانی مردم می‌داند: مجلس را به بدی اوضاع مالی و ناامنی متهم می‌کردند. کسروی می‌نویسد گفت‌وگوی شاه با سفارت روس و کلنل لیاخوف، فرمانده بریگاد، از میانهٔ خرداد ۱۲۸۷ آغاز شده بود.',
    ], [
      'Dowlatabadi, as cited by Iranica, names a loss of public support as one reason the Majles could not defend itself: it was blamed for the financial situation and the disorder. Kasravi writes that the shah’s talks with the Russian legation and Colonel Liakhov, the commander of the Brigade, had begun in the middle of Khordad 1287.',
    ]),
    listen: [
      { ep: 25, t: '00:34:12', note: B('تاج‌گذاری محمدعلی‌شاه', 'Mohammad Ali Shah’s coronation') },
      { ep: 33, t: '00:00:43', note: B('کودتای ناکام آذر ۱۲۸۶', 'The failed coup of December 1907') },
      { ep: 34, t: '00:40:48', note: B('سوءقصد ناکام به شاه', 'The failed attempt on the shah') },
    ],
  },
  {
    id: 'tabriz', era: ERA.mohammadAli,
    title: B('استبداد صغیر و ایستادگی تبریز', 'The Lesser Despotism and the resistance of Tabriz'),
    body: P([
      'با بسته شدن مجلس، کانون مشروطه به تبریز رفت. انجمن ایالتی خود را حکومت آذربایجان خواند. جنگ یازده‌ماههٔ تبریز سه مرحله داشت: جنگ کوچه‌ها در ژوئن و ژوئیهٔ ۱۹۰۸، حمله‌های نیروهای دولتی از بیرون شهر، و از ۴ فوریهٔ ۱۹۰۹ محاصرهٔ کامل که گرسنگی و بیماری آورد.',
      'در ۴ ژوئیهٔ ۱۹۰۸ باقرخان پس از دو هفته جنگ بیرق سفید زد، اما ستارخان ایستاد. به نوشتهٔ ایرانیکا در ۱۷ ژوئیه او با یارانش در شهر گشت و بیرق‌های سفید را پایین آورد؛ کسروی می‌افزاید بیرق روسی را هم که بر خانه‌ای افراشته بودند با گلوله انداخت. باقرخان دوباره به جنگ برگشت. انجمن ایالتی به ستارخان لقب «سردار ملی» و به باقرخان «سالار ملی» داد. در ۲۲ مارس ۱۹۰۹ باقرخان در نبرد ساری‌داغ کوشید راه آذوقه را باز کند. در پایان آوریل نیروی روس با رضایت شاه وارد شهر شد و دو سردار در ۲۹ آوریل به کنسولگری عثمانی پناه بردند.',
    ], [
      'With the Majles closed, the centre of the constitutional cause moved to Tabriz. The provincial anjoman declared itself the government of Azerbaijan. The eleven-month war in Tabriz had three stages: street fighting in June and July 1908, repeated attacks from royalist forces outside the town, and from 4 February 1909 a full blockade that brought hunger and disease.',
      'On 4 July 1908 Baqer Khan hoisted a white flag after two weeks’ fighting, but Sattar Khan held out. Iranica writes that on 17 July he went through the town with his men and took down the white flags; Kasravi adds that he shot down a Russian flag raised over a house. Baqer Khan returned to the fight. The provincial assembly gave Sattar Khan the title “Sardar-e melli” and Baqer Khan “Salar-e melli”. On 22 March 1909 Baqer Khan tried in the battle of Saridagh to open the supply routes. At the end of April a Russian force entered the city with the shah’s consent, and the two leaders took refuge in the Ottoman consulate on 29 April.',
    ]),
    sources: [CR, 'iranica-sattar', 'iranica-baqer', 'kasravi-12'],
    photo: 'sattar-baqer',
    view: P([
      'ایرانیکا می‌نویسد اگر ستارخان تسلیم شده بود، مشروطه شاید آسیبی جبران‌ناپذیر می‌دید. همان مقاله گزارش‌های منفیِ برخی ناظران اروپایی دربارهٔ رفتار او پس از پیروزی را هم می‌آورد. ما هر دو را می‌گوییم.',
    ], [
      'Iranica writes that had Sattar Khan given in, the constitutional cause might have suffered irreparable damage. The same article also reports some European observers’ unflattering accounts of his conduct after his success. We give both.',
    ]),
  },
  {
    id: 'conquest', era: ERA.mohammadAli,
    title: B('فتح تهران و پایان پادشاهی محمدعلی‌شاه (۱۹۰۹)', 'The taking of Tehran and the end of Mohammad Ali Shah’s reign (1909)'),
    body: P([
      'در زمستان ۱۹۰۹ ورق برگشت. در ۲۰ دسامبر ۱۹۰۸ مشروطه‌خواهان تهران در سفارت عثمانی بست نشستند. در رشت، از ۷ فوریهٔ ۱۹۰۹، مجاهدان به رهبری معزالسلطان (سردار محیی) و علی‌محمد تربیت، با داوطلبان قفقازی و ارمنی به فرماندهی یپرم‌خان، با سپهدار اعظم تنکابنی همراه شدند. در اصفهان بختیاری‌ها به رهبری صمصام‌السلطنه و سردار اسعد شهر را گرفتند. شاه در ۵ مه ۱۹۰۹ بازگشت مشروطه را اعلام کرد، اما دیر بود.',
      'نیروهای گیلان و بختیاری در ۱۳ ژوئیهٔ ۱۹۰۹ (۲۲ تیر ۱۲۸۸) وارد تهران شدند و سه روز بعد شاه به سفارت روس پناه برد. «مجلس عالی» با بیش از ۳۰۰ عضو او را برکنار کرد، پسر خردسالش احمدمیرزا را شاه کرد و عضدالملک، رئیس ایل قاجار، را نایب‌السلطنه. سپهدار نخست‌وزیر و سردار اسعد وزیر کشور شد. دادگاهی ویژه چند تن از هواداران شاه، از جمله شیخ فضل‌الله نوری، را اعدام کرد.',
    ], [
      'In the winter of 1909 the tide turned. On 20 December 1908 Tehran constitutionalists took sanctuary in the Ottoman legation. In Rasht, from 7 February 1909, mojahedin led by Moez al-Soltan (Sardar Mohyi) and Ali-Mohammad Tarbiat, with Caucasian and Armenian volunteers under Yeprem Khan, joined forces with Sepahdar-e Aʿzam Tonekaboni. In Isfahan the Bakhtiari under Samsam al-Saltaneh and Sardar Asʿad took the city. On 5 May 1909 the shah proclaimed the constitution restored, but it was too late.',
      'The Gilan and Bakhtiari forces entered Tehran on 13 July 1909, and three days later the shah took refuge in the Russian legation. A Supreme Majles of more than 300 members deposed him, placed his young son Ahmad Mirza on the throne and chose Azod al-Molk, head of the Qajar tribe, as regent. Sepahdar became prime minister and Sardar Asʿad minister of the interior. A special tribunal executed several of the shah’s supporters, among them Shaikh Fazlollah Nuri.',
    ]),
    sources: [CR, 'iranica-nuri', 'iranica-chronology-2'],
    photo: 'yeprem',
  },
  {
    id: 'ultimatum', era: ERA.after,
    title: B('مجلس دوم، شوستر و اولتیماتوم ۱۹۱۱', 'The Second Majles, Shuster and the ultimatum of 1911'),
    body: P([
      'قانون انتخابات تازه رأی طبقاتی را برداشت، شرط دارایی را کاست و برای یهودیان، زرتشتیان، ارمنیان و آشوریان هر کدام یک کرسی گذاشت. مجلس دوم در ۱۵ نوامبر ۱۹۰۹ گشوده شد و افسران سوئدی برای ژاندارمری و مستشاران مالی آمریکایی را فراخواند. مجلس میان «دموکرات‌ها» به رهبری تقی‌زاده و «اعتدالیون» دوپاره شد. در ۱۶ ژوئیهٔ ۱۹۱۰ بهبهانی در خانه‌اش ترور شد.',
      'مورگان شوستر آمریکایی در ۱۲ مه ۱۹۱۱ به تهران رسید و کوشید مالیه را سامان دهد. کوشش او برای ضبط دارایی شعاع‌السلطنه به سبب بدهی مالیاتی، و گماشتن افسری بریتانیایی بر ژاندارمری تازه، روسیه را برآشفت. روسیه انزلی و رشت را گرفت و در ۲۹ نوامبر ۱۹۱۱ اولتیماتومی سه‌بندی داد: برکناری شوستر، نیاوردن مستشار خارجی بی‌رضایت بریتانیا و روسیه، و پرداخت غرامت. گاه‌شمار ایرانیکا می‌نویسد مجلس نخست آن را رد کرد و در ۱۹ دسامبر پذیرفت. مجلس دوم در ۲۴ دسامبر ۱۹۱۱ بسته شد و با آن دورهٔ انقلاب مشروطه به پایان رسید. در ۳۱ دسامبر، روز عاشورا، نیروهای روس ثقة‌الاسلام تبریزی را در تبریز به دار آویختند.',
    ], [
      'A new electoral law abolished voting by estates, lowered the property qualification and gave one seat each to Jews, Zoroastrians, Armenians and Assyrians. The Second Majles opened on 15 November 1909 and called in Swedish officers for the gendarmerie and American financial advisers. It split between the Democrats led by Taqizadeh and the Moderates. On 16 July 1910 Behbahani was assassinated in his home.',
      'The American Morgan Shuster reached Tehran on 12 May 1911 and set about putting the finances in order. His attempt to seize the property of Shoʿaʿ al-Saltaneh for tax arrears, and to appoint a British officer to run the new gendarmerie, angered Russia. Russia occupied Anzali and Rasht and on 29 November 1911 issued a three-part ultimatum: Shuster’s dismissal, no foreign advisers without British and Russian consent, and an indemnity. The Iranica chronology records that the Majles first rejected it and then accepted it on 19 December. The Second Majles was closed on 24 December 1911, and with it the period of the Constitutional Revolution ended. On 31 December, the day of Ashura, Russian forces hanged Seqat al-Eslam Tabrizi in Tabriz.',
    ]),
    sources: [CR, 'iranica-behbahani', 'iranica-chronology-2', 'iranica-teqat'],
    photo: 'shuster',
  },
  {
    id: 'legacy', era: ERA.after,
    title: B('آنچه ماند', 'What remained'),
    body: P([
      'قانون اساسی ۱۲۸۵ و متمم ۱۲۸۶ تا ۱۳۵۷ قانون اساسی ایران ماند. قانون انتخابات ۲۱ نوامبر ۱۹۱۱ رأی همگانی مردان را آورد و با تغییرهای اندک تا پایان دورهٔ پهلوی برجا بود. در ۱۳۰۴ مجلس مؤسسان پادشاهی را به رضاشاه پهلوی سپرد و در ۱۳۲۸ و ۱۳۳۶ اصل‌هایی دیگر تغییر کرد. سنا، که قانون ۱۲۸۵ پیش‌بینی کرده بود، تازه در ۱۳۲۸ گشوده شد. حق رأی زنان در ۱۳۴۱ با تصویب‌نامه آمد.',
      'اصل‌هایی چون «قوای مملکت ناشی از ملت است» و برابری در برابر قانون از همین متن‌ها به زبان سیاست ایران راه یافت.',
    ], [
      'The Fundamental Law of 1906 and its Supplement of 1907 remained Iran’s constitution until 1979. The electoral law of 21 November 1911 introduced universal male suffrage and stayed in force, with minor changes, to the end of the Pahlavi period. In 1925 a constituent assembly entrusted the monarchy to Reza Shah Pahlavi, and other articles were amended in 1949 and 1957. The Senate, provided for in 1906, first met in 1950. Women received the vote by decree in 1963.',
      'Principles such as “the powers of the realm emanate from the people” and equality before the law entered the language of Iranian politics through these texts.',
    ]),
    sources: [CON, 'majles-motammam'],
    listen: [
      { ep: 24, note: B('«مشروطه و ما»: نظر خود امیر خادم', '“The constitution and us”: Amir Khadem’s own view') },
    ],
  },
]

export const reading = P([
  'از نگاه ما، مشروطه نخستین بار بود که ایرانیان کوشیدند قدرت را با قانون نوشته ببندند: بازرگان و صنعتگر و طلبه و روحانی و درس‌خوانده، هر کدام با انگیزهٔ خود، در یک خواسته به هم رسیدند. شاهی بیمار فرمان مجلس و قانون اساسی را امضا کرد؛ پسرش با آن جنگید و تاج را باخت؛ و دو قدرت بیگانه، که کشور را میان خود بخش کرده بودند، سرانجام مجلس دوم را بستند.',
  'آنچه ماند متن بود. «قوای مملکت ناشی از ملت است» هفتاد سال در قانون اساسی ایران ماند. داوری دربارهٔ آدم‌ها را به خواننده می‌سپاریم: هم بهبهانی و طباطبایی، هم شیخ فضل‌الله، هم ستارخان و باقرخان، هر یک از جای خود به ایران می‌اندیشیدند.',
], [
  'In our reading, the Constitutional Revolution was the first time Iranians tried to bind power with written law: merchants and craftsmen, students and clerics and the educated, each for their own reasons, met in one demand. A sick shah signed the rescript and the Fundamental Law; his son fought them and lost his crown; and two foreign powers that had divided the country between them finally closed the Second Majles.',
  'What remained was the text. “The powers of the realm emanate from the people” stood in Iran’s constitution for seventy years. We leave judgement of the people to the reader: Behbahani and Tabatabai, Shaikh Fazlollah, Sattar Khan and Baqer Khan each thought of Iran from where they stood.',
])

export interface TimelineBeat { id: string; when: Bi; title: Bi; body: Bi; photo?: string; sources: string[] }
const tb = (id: string, when: Bi, title: Bi, body: Bi, sources: string[], photo?: string): TimelineBeat => ({ id, when, title, body, sources, photo })

export const timeline: TimelineBeat[] = [
  tb('t1892', B('۲۶ ژانویهٔ ۱۸۹۲', '26 January 1892'), B('پایان ماجرای تنباکو', 'The tobacco episode ends'), B('شاه امتیاز تنباکو را لغو کرد.', 'The shah cancels the tobacco concession.'), ['iranica-shirazi']),
  tb('t1896', B('۱ مه ۱۸۹۶ / ۱۲ اردیبهشت ۱۲۷۵', '1 May 1896'), B('ترور ناصرالدین‌شاه', 'Naser al-Din Shah assassinated'), B('میرزا رضا کرمانی شاه را کشت؛ مظفرالدین‌شاه در ۸ ژوئن تاج گذاشت.', 'Mirza Reza Kermani kills the shah; Mozaffar al-Din Shah is enthroned on 8 June.'), ['iranica-qajar', 'eb1911-muzaffar'], 'mozaffar'),
  tb('t1900', B('۱۹۰۰ و ۱۹۰۲', '1900 and 1902'), B('وام‌های روس', 'Russian loans'), B('دو میلیون و سپس یک میلیون لیره وام از روسیه؛ سفرهای اروپا.', '£2 million and then £1 million borrowed from Russia; the European journeys.'), [CR, 'eb1911-muzaffar']),
  tb('t1905', B('۱۲ دسامبر ۱۹۰۵ / ۲۱ آذر ۱۲۸۴', '12 December 1905'), B('فلک بازرگانان قند', 'The sugar merchants bastinadoed'), B('بازار بسته شد و دو روز بعد حدود ۲٬۰۰۰ تن در شاه عبدالعظیم بست نشستند.', 'The bazaar closes, and two days later about 2,000 take sanctuary at Shah Abd al-Azim.'), [CR]),
  tb('t1906a', B('۱۰ ژانویهٔ ۱۹۰۶ / ۲۰ دی ۱۲۸۴', '10 January 1906'), B('وعدهٔ عدالتخانه', 'A house of justice promised'), B('دستخط شاه عدالتخانه وعده داد و بست پایان یافت.', 'The shah’s rescript promises a house of justice and the sanctuary ends.'), [CR]),
  tb('t1906b', B('۱۵ تا ۱۹ ژوئیهٔ ۱۹۰۶', '15–19 July 1906'), B('کوچ به قم، بست سفارت', 'Exodus to Qom, legation sanctuary'), B('علما به قم رفتند؛ بست سفارت بریتانیا آغاز شد و تا ۲ اوت به ۱۴٬۰۰۰ تن رسید.', 'The ulama leave for Qom; the British legation sanctuary begins and reaches 14,000 by 2 August.'), [CR]),
  tb('t1906c', B('۵ اوت ۱۹۰۶ / ۱۴ جمادی‌الثانی ۱۳۲۴', '5 August 1906'), B('فرمان مشروطیت', 'The constitutional rescript'), B('فرمان مجلس شورای ملی؛ دستخط دیگری در ۱۰ اوت.', 'The rescript for a national consultative assembly; another rescript on 10 August.'), ['majles-farman', CR]),
  tb('t1906d', B('۷ اکتبر ۱۹۰۶ / ۱۴ مهر ۱۲۸۵', '7 October 1906'), B('گشایش مجلس اول', 'The First Majles opens'), B('صنیع‌الدوله نخستین رئیس مجلس شد.', 'Sani al-Dowleh becomes its first president.'), [CR, CON], 'first-majles'),
  tb('t1906e', B('۳۰ دسامبر ۱۹۰۶ / ۸ دی ۱۲۸۵', '30 December 1906'), B('امضای قانون اساسی', 'The Fundamental Law signed'), B('مظفرالدین‌شاه ده روز پیش از مرگش قانون اساسی را امضا کرد.', 'Mozaffar al-Din Shah signs the Fundamental Law ten days before his death.'), [CON, 'majles-qanun']),
  tb('t1907a', B('۳۱ اوت ۱۹۰۷ / ۸ شهریور ۱۲۸۶', '31 August 1907'), B('ترور اتابک؛ قرارداد ۱۹۰۷', 'The Atabak killed; the 1907 convention'), B('امین‌السلطان کشته شد؛ بریتانیا و روسیه ایران را به منطقه‌های نفوذ بخش کردند.', 'Amin al-Soltan is killed; Britain and Russia divide Persia into spheres.'), [CR, 'iranica-arc-1907']),
  tb('t1907b', B('۷–۸ اکتبر ۱۹۰۷', '7–8 October 1907'), B('متمم قانون اساسی', 'The Supplement'), B('مجلس متمم را تصویب و محمدعلی‌شاه امضا کرد.', 'The Majles ratifies the Supplement and Mohammad Ali Shah signs it.'), [CR, CON, 'majles-motammam']),
  tb('t1907c', B('۱۴–۲۳ دسامبر ۱۹۰۷', '14–23 December 1907'), B('بحران میدان توپخانه', 'The Tupkhaneh crisis'), B('کودتای نخست شاه ناکام ماند و او سوگند وفاداری به قانون اساسی خورد.', 'The shah’s first coup fails and he swears loyalty to the constitution.'), [CR]),
  tb('t1908', B('۲۳ ژوئن ۱۹۰۸ / ۲ تیر ۱۲۸۷', '23 June 1908'), B('به توپ بستن مجلس', 'The Majles bombarded'), B('بریگاد قزاق مجلس را گلوله‌باران کرد؛ استبداد صغیر آغاز شد.', 'The Cossack Brigade shells the Majles; the Lesser Despotism begins.'), [CR, 'kasravi-11'], 'majles-bombarded'),
  tb('t1908b', B('۱۷ ژوئیهٔ ۱۹۰۸', '17 July 1908'), B('ستارخان و بیرق‌های سفید', 'Sattar Khan and the white flags'), B('ستارخان بیرق‌های سفید تبریز را پایین آورد.', 'Sattar Khan takes down the white flags of Tabriz.'), ['iranica-sattar', 'kasravi-12'], 'tabriz-guns'),
  tb('t1909a', B('۴ فوریه تا ۲۹ آوریل ۱۹۰۹', '4 February – 29 April 1909'), B('محاصرهٔ تبریز', 'The siege of Tabriz'), B('محاصرهٔ کامل، قحطی، ورود نیروی روس.', 'Full blockade, famine, and the entry of a Russian force.'), ['iranica-sattar', 'iranica-baqer'], 'davachi'),
  tb('t1909b', B('۱۳ ژوئیهٔ ۱۹۰۹ / ۲۲ تیر ۱۲۸۸', '13 July 1909'), B('فتح تهران', 'Tehran taken'), B('نیروهای گیلان و بختیاری وارد تهران شدند؛ محمدعلی‌شاه برکنار و احمدشاه شاه شد.', 'The Gilan and Bakhtiari forces enter Tehran; Mohammad Ali Shah is deposed and Ahmad Shah enthroned.'), [CR, 'iranica-chronology-2'], 'yeprem'),
  tb('t1909c', B('۳۱ ژوئیهٔ ۱۹۰۹', '31 July 1909'), B('اعدام شیخ فضل‌الله نوری', 'Shaikh Fazlollah Nuri executed'), B('پس از محاکمه در میدان توپخانه به دار آویخته شد.', 'Hanged in Tupkhaneh Square after a trial.'), ['iranica-nuri']),
  tb('t1909d', B('۱۵ نوامبر ۱۹۰۹', '15 November 1909'), B('مجلس دوم', 'The Second Majles'), B('مجلس دوم با قانون انتخابات تازه گشوده شد.', 'The Second Majles opens under a new electoral law.'), [CR]),
  tb('t1911a', B('۲۹ نوامبر ۱۹۱۱', '29 November 1911'), B('اولتیماتوم روسیه', 'The Russian ultimatum'), B('برکناری شوستر و پرداخت غرامت خواسته شد.', 'Shuster’s dismissal and an indemnity are demanded.'), [CR, 'iranica-chronology-2'], 'shuster'),
  tb('t1911b', B('۲۴ دسامبر ۱۹۱۱', '24 December 1911'), B('بسته شدن مجلس دوم', 'The Second Majles closed'), B('با بسته شدن مجلس دورهٔ انقلاب مشروطه پایان یافت.', 'With the closing of the Majles the revolutionary period ends.'), [CR, 'iranica-chronology-2']),
]

export interface Person { id: string; name: Bi; role: Bi; body: Bi; sources: string[] }
const pp = (id: string, name: Bi, role: Bi, body: Bi, sources: string[]): Person => ({ id, name, role, body, sources })

export const people: Person[] = [
  pp('mozaffar', B('مظفرالدین‌شاه', 'Mozaffar al-Din Shah'), B('شاه، ۱۸۹۶–۱۹۰۷', 'Shah, 1896–1907'), B('فرمان مجلس و قانون اساسی را امضا کرد و ده روز بعد درگذشت.', 'Signed the rescript and the Fundamental Law, and died ten days later.'), [CON, 'eb1911-muzaffar']),
  pp('mohammad-ali', B('محمدعلی‌شاه', 'Mohammad Ali Shah'), B('شاه، ۱۹۰۷–۱۹۰۹', 'Shah, 1907–1909'), B('متمم را امضا کرد، سپس مجلس را به توپ بست؛ با فتح تهران برکنار شد.', 'Signed the Supplement, then had the Majles shelled; deposed after the taking of Tehran.'), [CR, CON]),
  pp('ain', B('عین‌الدوله', 'Ain al-Dowleh'), B('صدراعظم', 'Chief minister'), B('برکناری‌اش خواستهٔ نخست بست‌نشینان بود؛ در ۲۹ ژوئیهٔ ۱۹۰۶ استعفا داد.', 'His dismissal was the protesters’ first demand; he resigned on 29 July 1906.'), [CR]),
  pp('behbahani', B('سید عبدالله بهبهانی', 'Sayyed Abdollah Behbahani'), B('مجتهد، رهبر بست‌ها', 'Mojtahed, leader of the sanctuaries'), B('سخنگوی جنبش بازرگانان و آغازگر بست سفارت؛ پس از کودتا تبعید شد و در ۱۶ ژوئیهٔ ۱۹۱۰ ترور شد.', 'Spokesman of the merchants’ movement and initiator of the legation sanctuary; exiled after the coup and assassinated on 16 July 1910.'), [CR, 'iranica-behbahani']),
  pp('tabatabai', B('سید محمد طباطبایی', 'Sayyed Mohammad Tabatabai'), B('مجتهد اصلاح‌خواه', 'Reformist mojtahed'), B('از حکومت قانون و کارآمدی دیوان سخن می‌گفت؛ در خرداد ۱۲۸۵ «مجلس عدالتخانه» را از منبر خواست.', 'Spoke for government by law and administrative efficiency; in June 1906 called from the pulpit for a council of justice.'), [CR]),
  pp('nuri', B('شیخ فضل‌الله نوری', 'Shaikh Fazlollah Nuri'), B('مجتهد، مخالف مشروطهٔ غیرشرعی', 'Mojtahed, opponent of a non-sharia constitution'), B('نخست همراه، سپس مخالف؛ ناسازگاری قانون برخاسته از ارادهٔ مردم با قانون الهی را صورت‌بندی کرد؛ در ۳۱ ژوئیهٔ ۱۹۰۹ اعدام شد.', 'First an ally, then an opponent; he argued the incompatibility of law based on the people’s will with divine law; executed on 31 July 1909.'), ['iranica-nuri']),
  pp('sani', B('صنیع‌الدوله', 'Sani al-Dowleh'), B('نخستین رئیس مجلس', 'First president of the Majles'), B('نخستین رئیس مجلس اول، از ۷ اکتبر ۱۹۰۶.', 'First president of the First Majles, from 7 October 1906.'), [CR, CON]),
  pp('taqizadeh', B('سید حسن تقی‌زاده', 'Sayyed Hasan Taqizadeh'), B('رهبر دموکرات‌ها', 'Leader of the Democrats'), B('در مجلس دوم رهبر دموکرات‌ها در برابر اعتدالیون.', 'Leader of the Democrats against the Moderates in the Second Majles.'), [CR]),
  pp('sattar', B('ستارخان', 'Sattar Khan'), B('سردار ملی', 'Sardar-e melli'), B('محلهٔ امیرخیز را نگاه داشت و در ژوئیهٔ ۱۹۰۸ بیرق‌های سفید را پایین آورد.', 'Held the Amirkhiz quarter and took down the white flags in July 1908.'), ['iranica-sattar', 'kasravi-12']),
  pp('baqer', B('باقرخان', 'Baqer Khan'), B('سالار ملی', 'Salar-e melli'), B('پس از بیرق سفید دوباره به جنگ برگشت؛ فرماندهٔ نبرد ساری‌داغ.', 'Returned to the fight after the white flag; commander at the battle of Saridagh.'), ['iranica-baqer']),
  pp('teqat', B('ثقة‌الاسلام تبریزی', 'Seqat al-Eslam Tabrizi'), B('روحانی مشروطه‌خواه تبریز', 'Constitutionalist cleric of Tabriz'), B('در روز عاشورا، ۳۱ دسامبر ۱۹۱۱، به دست نیروهای روس در تبریز به دار آویخته شد.', 'Hanged by Russian forces in Tabriz on Ashura, 31 December 1911.'), ['iranica-teqat']),
  pp('yeprem', B('یپرم‌خان', 'Yeprem Khan'), B('فرماندهٔ داوطلبان ارمنی', 'Commander of Armenian volunteers'), B('با داوطلبان ارمنی به نیروی گیلان پیوست؛ بعدها رئیس نظمیهٔ تهران.', 'Joined the Gilan force with Armenian volunteers; later Tehran’s chief of police.'), [CR]),
  pp('sardar-asad', B('سردار اسعد بختیاری', 'Sardar Asʿad Bakhtiari'), B('خان بختیاری', 'Bakhtiari khan'), B('بختیاری‌ها را از اصفهان به تهران آورد و وزیر کشور شد.', 'Brought the Bakhtiari from Isfahan to Tehran and became minister of the interior.'), [CR]),
  pp('shuster', B('مورگان شوستر', 'Morgan Shuster'), B('خزانه‌دار کل', 'Treasurer-General'), B('در مه ۱۹۱۱ آمد؛ برکناری‌اش خواستهٔ اولتیماتوم روسیه بود.', 'Arrived in May 1911; his dismissal was the Russian ultimatum’s demand.'), [CR]),
]

export interface DocumentEntry { id: string; title: Bi; date: Bi; body: Bi; sources: string[]; href?: string }
export const documents: DocumentEntry[] = [
  { id: 'doc-farman', title: B('فرمان مشروطیت', 'The constitutional rescript'), date: B('۱۴ جمادی‌الثانی ۱۳۲۴ / ۵ اوت ۱۹۰۶', '14 Jomada II 1324 / 5 August 1906'), body: B('فرمان تشکیل مجلس شورای ملی از منتخبان شش طبقه در تهران.', 'The rescript founding a national consultative assembly elected by six estates in Tehran.'), sources: ['majles-farman'] },
  { id: 'doc-qanun', title: B('قانون اساسی', 'The Fundamental Law'), date: B('۱۴ ذی‌القعدهٔ ۱۳۲۴ / ۳۰ دسامبر ۱۹۰۶', '14 Dhu al-Qaʿda 1324 / 30 December 1906'), body: B('۵۱ اصل دربارهٔ مجلس و سنا؛ مالیه، وام و امتیاز در اختیار مجلس.', '51 articles on the Majles and the Senate; finance, loans and concessions in the Majles’s hands.'), sources: ['majles-qanun', CON] },
  { id: 'doc-motammam', title: B('متمم قانون اساسی', 'The Supplementary Fundamental Law'), date: B('۲۹ شعبان ۱۳۲۵ / ۸ اکتبر ۱۹۰۷', '29 Shaʿban 1325 / 8 October 1907'), body: B('۱۰۷ اصل: حقوق ملت، تفکیک قوا، حقوق پادشاه، مسئولیت وزیران و دادگستری.', '107 articles: the rights of the nation, the separation of powers, the rights of the king, ministerial responsibility and the judiciary.'), sources: ['majles-motammam', CON] },
  { id: 'doc-1907', title: B('قرارداد بریتانیا و روسیه', 'The Anglo-Russian convention'), date: B('۳۱ اوت ۱۹۰۷', '31 August 1907'), body: B('ایران به منطقهٔ روس در شمال، منطقهٔ بریتانیا در جنوب‌شرق و منطقه‌ای بی‌طرف بخش شد.', 'Persia divided into a Russian zone in the north, a British zone in the south-east and a neutral zone.'), sources: ['treaty-1907', 'iranica-arc-1907'] },
  { id: 'doc-ultimatum', title: B('اولتیماتوم روسیه', 'The Russian ultimatum'), date: B('۲۹ نوامبر ۱۹۱۱', '29 November 1911'), body: B('سه خواسته: برکناری شوستر، نیاوردن مستشار بی‌رضایت دو دولت، و غرامت.', 'Three demands: Shuster dismissed, no advisers without both powers’ consent, and an indemnity.'), sources: [CR] },
]
