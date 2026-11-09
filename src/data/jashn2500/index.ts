/**
 * The 2,500-year celebrations of the Persian monarchy (October 1971 / Mehr 1350).
 * Spine: Iranica chronology part 3, the New York Times reports of 5, 12 and 13 October 1971,
 * Steele’s 2014 Manchester MPhil (open access) and his 2021 book (via Sabahi’s review for the
 * publication and school figures). Speech wording is taken only from the NYT of 13 October 1971.
 */
import type { Bi, BiParas } from '../featured/types'

export * from './sources'

const B = (fa: string, en: string): Bi => ({ fa, en })
const P = (fa: string[], en: string[]): BiParas => ({ fa, en })

export const page = {
  title: B('جشن‌های ۲۵۰۰ ساله شاهنشاهی ایران', 'The 2,500-year celebrations of the Persian monarchy'),
  kicker: B('رویداد · مهر ۱۳۵۰ / اکتبر ۱۹۷۱', 'Event · Mehr 1350 / October 1971'),
  description: B(
    'جشن‌های ۲۵۰۰ ساله شاهنشاهی ایران در مهر ۱۳۵۰: سخن شاه بر سر آرامگاه کوروش، شهر چادری تخت جمشید، رژه، ضیافت، کنگرهٔ ایران‌شناسی و گشایش شهیاد، با منبع برای هر ادعا.',
    'Iran’s 2,500-year celebrations of the Persian monarchy in October 1971: the speech at Cyrus’s tomb, the tent city at Persepolis, the parade, the banquet, the congress of Iranology and the opening of Shahyad, with a source for every claim.',
  ),
  lede: P([
    'در مهر ۱۳۵۰ ایران بنیان‌گذاری شاهنشاهی پارس را گرامی داشت. جشن با آیینی بر سر آرامگاه کوروش در پاسارگاد آغاز شد، در تخت جمشید ادامه یافت و در تهران با گشایش برج شهیاد به امروز پیوست.',
    'این صفحه برنامه، مهمانان، آیین‌ها و میراث آن روزها را از گزارش‌های هم‌زمان و پژوهش‌های بعدی روایت می‌کند. هر ادعا منبع دارد. نگاه خودمان جدا و با برچسب آمده است.',
  ], [
    'In Mehr 1350 Iran marked the founding of the Persian monarchy. The celebrations opened with a ceremony at Cyrus’s tomb in Pasargadae, continued at Persepolis and closed in Tehran with the inauguration of the Shahyad tower.',
    'This page tells the programme, the guests, the ceremonies and what remained, from contemporaneous reports and later research. Every claim has a source. Our own reading is kept apart and labelled.',
  ]),
}

export const facts: [Bi, Bi][] = [
  [B('تاریخ', 'Date'), B('۱۲ تا ۱۶ اکتبر ۱۹۷۱ (۲۰ تا ۲۴ مهر ۱۳۵۰)', '12–16 October 1971 (20–24 Mehr 1350)')],
  [B('جا', 'Place'), B('پاسارگاد، تخت جمشید و تهران', 'Pasargadae, Persepolis and Tehran')],
  [B('مهمانان', 'Guests'), B('۶۹ سران کشورها یا نمایندگانشان', '69 heads of state or their representatives')],
  [B('نماد', 'Symbol'), B('نمایش استوانهٔ کوروش در شهیاد', 'The Cyrus Cylinder shown at Shahyad')],
]

export interface JashnPhoto {
  id: string
  src: string
  caption: Bi
  page: string
  author: string
  license: string
}

export const photos: JashnPhoto[] = [
  { id: 'speech', src: '/media/jashn2500/speech.webp', caption: B('آیین ۱۲ اکتبر ۱۹۷۱ بر سر آرامگاه کوروش در پاسارگاد.', 'The ceremony of 12 October 1971 at Cyrus’s tomb in Pasargadae.'), page: 'https://commons.wikimedia.org/wiki/File:KyrosCeremonies.jpg', author: 'Unknown photographer', license: 'PD-Iran' },
  { id: 'ceremony', src: '/media/jashn2500/ceremony.webp', caption: B('شاه در آیین پاسارگاد، ۱۲ اکتبر ۱۹۷۱.', 'The shah at the Pasargadae ceremony, 12 October 1971.'), page: 'https://commons.wikimedia.org/wiki/File:ShahanshahAriamehrFest2500ShahanshahiIran.jpg', author: 'Unknown photographer', license: 'PD-Iran' },
  { id: 'pasargadae-1', src: '/media/jashn2500/pasargadae-1.webp', caption: B('حاضران آیین پاسارگاد در ۱۲ اکتبر ۱۹۷۱.', 'Those present at Pasargadae on 12 October 1971.'), page: 'https://commons.wikimedia.org/wiki/File:ShahanshahiIran2500YearsPasargad1.jpg', author: 'Unknown photographer', license: 'PD-Iran' },
  { id: 'pasargadae-7', src: '/media/jashn2500/pasargadae-7.webp', caption: B('آرامگاه کوروش و آیین ۱۲ اکتبر ۱۹۷۱.', 'Cyrus’s tomb and the ceremony of 12 October 1971.'), page: 'https://commons.wikimedia.org/wiki/File:ShahanshahiIran2500YearsPasargad7.jpg', author: 'Unknown photographer', license: 'PD-Iran' },
  { id: 'tent-city', src: '/media/jashn2500/tent-city.webp', caption: B('یکی از چادرهای شهر چادری تخت جمشید، ۱۹۷۱.', 'A tent in the Persepolis tent city, 1971.'), page: 'https://commons.wikimedia.org/wiki/File:ZeltPersepolis.jpg', author: 'Unknown photographer', license: 'PD-Iran' },
  { id: 'reception', src: '/media/jashn2500/reception.webp', caption: B('آیین پیشواز مهمانان در تخت جمشید، ۱۹۷۱.', 'A welcome for guests at Persepolis, 1971.'), page: 'https://commons.wikimedia.org/wiki/File:EmpfangPersepolis.jpg', author: 'Unknown photographer', license: 'PD-Iran' },
  { id: 'guests', src: '/media/jashn2500/guests.webp', caption: B('مهمانان جشن‌های ۲۵۰۰ ساله، اکتبر ۱۹۷۱.', 'Guests at the 2,500-year celebrations, October 1971.'), page: 'https://commons.wikimedia.org/wiki/File:ShahanshahiIran2500YearsGuest16m.jpg', author: 'Unknown photographer', license: 'PD-Iran' },
  { id: 'parade', src: '/media/jashn2500/parade.webp', caption: B('رژهٔ تاریخ نظامی ایران در تخت جمشید، ۱۹۷۱.', 'The historical military parade at Persepolis, 1971.'), page: 'https://commons.wikimedia.org/wiki/File:2500_year_celebration_(3).jpg', author: 'Government of Iran', license: 'PD-Iran' },
  { id: 'shahyad-opening', src: '/media/jashn2500/shahyad-opening.webp', caption: B('گشایش برج شهیاد آریامهر، ۲۴ مهر ۱۳۵۰؛ شاه در میان حاضران.', 'The inauguration of Shahyad Aryamehr, 24 Mehr 1350; the shah among those present.'), page: 'https://commons.wikimedia.org/wiki/File:ShahyadAryamehrOpening24Mehr1350.jpg', author: 'Bellavista', license: 'PD-Iran' },
  { id: 'shahyad-aerial', src: '/media/jashn2500/shahyad-aerial.webp', caption: B('نمای هوایی میدان و برج شهیاد، ۱۹۷۱.', 'Aerial view of Shahyad square and tower, 1971.'), page: 'https://commons.wikimedia.org/wiki/File:Azadi_Square_%26_Azadi_Tower,_aerial_view_1971.jpg', author: 'Unknown photographer', license: 'PD-Iran' },
  { id: 'shahyad-build', src: '/media/jashn2500/shahyad-build.webp', caption: B('ساخت برج شهیاد پیش از گشایش.', 'The Shahyad tower under construction before its opening.'), page: 'https://commons.wikimedia.org/wiki/File:Construction_of_the_Azadi_Tower.jpg', author: 'Unknown photographer', license: 'PD-Iran' },
]

export const photo = (id?: string) => photos.find((p) => p.id === id)

export interface JashnSection {
  id: string
  title: Bi
  body: BiParas
  sources: string[]
  photo?: string
  view?: BiParas
  quotations?: { lines: string[]; cite: Bi }
}

export const sections: JashnSection[] = [
  {
    id: 'idea',
    title: B('ایده و نام', 'The idea and the name'),
    body: P([
      'نام رسمی این رویداد جشن‌های ۲۵۰۰ ساله شاهنشاهی ایران بود: بزرگداشت بنیان‌گذاری شاهنشاهی پارس به دست کوروش. گاه‌شمار ایرانیکا آن را جشن ۲۵۰۰ سالهٔ پادشاهی ایران می‌خواند که در تخت جمشید برگزار شد.',
      'به نوشتهٔ رابرت استیل، تا سال ۱۹۶۹ برنامه بیشتر ملی و علمی دیده می‌شد؛ از آن سال دعوت از سران کشورها نیز به آن افزوده شد. شجاع‌الدین شفا در سامان‌دادن کارهای فرهنگی و دانشگاهی این جشن نقش داشت.',
    ], [
      'The official name was the 2,500-year celebrations of the Iranian monarchy: a commemoration of the founding of the Persian empire by Cyrus. The Iranica chronology calls it the 2,500th anniversary of the Persian monarchy, marked at Persepolis.',
      'Robert Steele writes that until 1969 the programme was planned mainly as a national and scholarly occasion; from that year heads of state were invited as well. Shojaeddin Shafa had a large part in organising the cultural and academic work.',
    ]),
    sources: ['iranica-chronology-3', 'steele-2014'],
  },
  {
    id: 'preparations',
    title: B('تدارک و شهر چادری', 'Preparations and the tent city'),
    body: P([
      'برای اقامت مهمانان، کنار تخت جمشید شهری چادری ساخته شد. آرتور اپهام پوپ، ایران‌شناس آمریکایی، سال‌ها پیش پیشنهاد کرده بود چنین شهری «اندکی به سوی شکوه» طراحی شود تا برای میهمانان خارجی مناسب باشد، و رژه و نمایش شبانه نیز در برنامه باشد.',
      'استیل می‌نویسد طراحی این شهر چادری را شرکت یانسن انجام داد: پنج بال، به نشان پنج قاره. هر سر دولت آپارتمانی با اتاق نشیمن، دو اتاق خواب و دو حمام داشت. نیویورک‌تایمز در ۱۲ اکتبر ۱۹۷۱ از آماده شدن همین شهر چادری خبر داد.',
    ], [
      'A purpose-built tent city beside Persepolis housed the guests. Years earlier the American Iranologist Arthur Upham Pope had encouraged a tent city that should “err a bit on the luxurious side for the sake of foreign visitors”, together with a military parade and a night display on a large scale.',
      'Steele writes that the tent city was designed by the firm of Jansen, in five wings meant to stand for the five continents. Each head of state had an apartment with a sitting room, two bedrooms and two bathrooms. The New York Times reported on 12 October 1971 that this tent city was ready.',
    ]),
    sources: ['steele-2014', 'nyt-1971-10-12'],
    photo: 'tent-city',
  },
  {
    id: 'pasargadae',
    title: B('۱۲ اکتبر: سخن بر سر آرامگاه کوروش', '12 October: the speech at Cyrus’s tomb'),
    body: P([
      'آیین رسمی در سه‌شنبه ۱۲ اکتبر ۱۹۷۱ (۲۰ مهر ۱۳۵۰) بر سر آرامگاه کوروش در پاسارگاد آغاز شد. استیل به برنامهٔ رسمی استناد می‌کند: این آیین «ستایش کوروش» کمتر از یک ساعت طول کشید و شامل گذاشتن تاج گل و سخن شاه بود. حاضران مقام‌های ایرانی، نمایندگان نهادهای دینی و بین‌المللی، ایران‌شناسان، نویسندگان و نمایندگان سپاه انقلاب و ارتش بودند.',
      'نیویورک‌تایمز فردای آن روز خطاب شاه را گزارش کرد. برگردان ما از متن انگلیسی همان گزارش است: «ای کوروش، شاه بزرگ، شاه شاهان، شاه هخامنشی، شاه سرزمین ایران»؛ «من، شاهنشاه ایران، سلام خود و ملتم را به تو پیشکش می‌کنم»؛ «بیارام… که ما بیداریم، و بیدار خواهیم ماند.» همان گزارش می‌نویسد شاه وعده داد سنت انسان‌دوستی و نیکوکاری را نگاه دارد و یادآور شد که پرچم ایران همچنان با همان سربلندی روزگار کوروش در اهتزاز است.',
    ], [
      'The official ceremonies began on Tuesday 12 October 1971 (20 Mehr 1350) at Cyrus’s tomb in Pasargadae. Steele, citing the official programme, writes that this “Glorification of Cyrus” lasted less than an hour and consisted of a wreath-laying and a speech by the shah. Those present included senior Iranian officials, representatives of religious and international bodies, Iranologists, writers, and members of the Revolutionary Corps and the army.',
      'The New York Times the next day reported the shah’s address in the words quoted below. He promised to safeguard traditions of humanism and benevolence, and noted that the Iranian flag was flying as triumphantly as in Cyrus’s time.',
    ]),
    sources: ['nyt-1971-10-13', 'steele-2014'],
    photo: 'speech',
    quotations: {
      lines: [
        'O Cyrus, great King, King of Kings, Achaemenian King, King of the land of Iran',
        'I, the Shahanshah of Iran, offer thee salutations from myself and from my nation.',
        'Rest in peace… for we are awake, and we will always stay awake.',
      ],
      cite: B('نیویورک‌تایمز، ۱۳ اکتبر ۱۹۷۱', 'The New York Times, 13 October 1971'),
    },
    view: P([
      'سخن شاه کوتاه بود و مخاطبش کوروش. ما همان واژه‌هایی را می‌آوریم که نیویورک‌تایمز همان فردا گزارش کرد.',
    ], [
      'The shah’s speech was short and addressed to Cyrus. We give the wording the New York Times reported the next day.',
    ]),
  },
  {
    id: 'guests',
    title: B('مهمانان', 'The guests'),
    body: P([
      'گاه‌شمار ایرانیکا شمار کسانی را که در آیین‌های تخت جمشید شرکت کردند ۶۹ تن از سران کشورها یا نمایندگانشان می‌داند. استیل، با تکیه بر روایت اقامت در شهر چادری، می‌نویسد ۶۲ سر دولت یا نماینده به تخت جمشید آمدند و در آن شهر چادری جای گرفتند.',
      'از بریتانیا پرنس فیلیپ و شاهدخت آن آمدند. ریچارد نیکسون و ملکه الیزابت در جشن حاضر نشدند. استیل می‌نویسد شاه با خودروی روباز در شهر چادری می‌گشت، به پیشواز مهمانان می‌رفت و بر کارها نظارت می‌کرد.',
    ], [
      'The Iranica chronology records that 69 heads of state or their representatives took part in the ceremonies at Persepolis. Steele, writing of those housed in the tent city, says 62 heads of state or their representatives came to Persepolis and stayed there.',
      'Britain was represented by Prince Philip and Princess Anne. Richard Nixon and Queen Elizabeth did not attend. Steele writes that the shah drove around the tent city in an open car, greeting his visitors and overseeing the arrangements.',
    ]),
    sources: ['iranica-chronology-3', 'steele-2014'],
    photo: 'guests',
  },
  {
    id: 'congress',
    title: B('کنگرهٔ ایران‌شناسی', 'The congress of Iranology'),
    body: P([
      '۱۳ اکتبر کنگرهٔ جهانی ایران‌شناسی گشوده شد و تا ۱۵ اکتبر ادامه داشت. استیل می‌نویسد در همان روزها بیش از ۳۰۰ ایران‌شناس در شیراز گرد آمده بودند. موضوع کنگره «پیوستگی فرهنگ ایران» بود؛ نمایندگان حدود ۴۰ کشور پیام دادند و در سه روز ۶۰ سخنرانی ارائه شد.',
      'پیام شاه را اسدالله علم خواند. در آن پیام، به نقل استیل از متن منتشرشده، آمده بود که ارزنده‌ترین سپاهیان ایران در طول هزاره‌ها کسانی بوده‌اند که مشعل دانش و فرهنگ را در برابر توفان زمان نگاه داشته و به آیندگان سپرده‌اند، و پیروزی راستین در شناخت همین حقیقت است.',
    ], [
      'The World Congress of Iranology opened on 13 October and ran until 15 October. Steele writes that more than 300 Iranologists were already gathered in Shiraz in those days. The theme was “Continuity of Iranian Culture”; delegates from about 40 countries offered greetings, and 60 papers were given over three days.',
      'The shah’s message was read by the minister of court, Asadollah Alam. In the published excerpt, as quoted by Steele, he said the worthiest of Iran’s armies over the millennia had been the men and women who kept the torch of knowledge and culture alight through the storms of time and passed it on, and that true victory lay in recognising this.',
    ]),
    sources: ['steele-2014'],
  },
  {
    id: 'banquet',
    title: B('۱۴ اکتبر: ضیافت و نمایش شبانه', '14 October: the banquet and the night display'),
    body: P([
      'شامگاه پنجشنبه ۱۴ اکتبر ضیافت رسمی در تخت جمشید برگزار شد. به روایت گاردین، شاه در گشایش گفت در این گردهمایی تاریخ گذشته با واقعیت امروز پیوند خورده است و چنین پیوندی که با دوستی حاصل شود فال نیک است.',
      'غذا را رستوران ماکسیم پاریس آماده کرد. استیل به گزارش ۵ اکتبر نیویورک‌تایمز استناد می‌کند که ۳۰ آشپز، ۲۲ تن تدارکات و ۲۰۰ پیشخدمت در کار بودند.',
      'پس از ضیافت، مهمانان در میان ویرانه‌های تخت جمشید نمایش نور و صدا دیدند. یانیس گزنakis قطعه‌ای تازه برای آن شب ساخت. به نوشتهٔ استیل، نقش‌های نور در ویرانه‌ها نماد زردشتی نور چون زندگی جاوید را به یاد می‌آورد و کسانی با جامهٔ هخامنشی با شمع در محوطه راه می‌رفتند.',
    ], [
      'On the evening of Thursday 14 October the royal banquet was held at Persepolis. According to The Guardian, the shah opened it by saying that in that gathering past history was linked with the reality of today, and that such a bond of past and present, achieved by an understanding of friendship, was surely an omen of good.',
      'The food was prepared by Maxim’s of Paris. Steele, citing the New York Times of 5 October, writes that Maxim’s provided 30 cooks, 22 tons of provisions and 200 waiters.',
      'After the banquet the guests were given a son et lumière in the ruins of Persepolis. Iannis Xenakis was commissioned to write a new work for that night. Steele writes that luminous patterns in the ruins evoked the Zoroastrian symbolism of light as eternal life, while people in Achaemenid dress walked among the ruins by candlelight.',
    ]),
    sources: ['guardian-1971-10-15', 'nyt-1971-10-05', 'steele-2014'],
    photo: 'reception',
  },
  {
    id: 'parade',
    title: B('۱۵ اکتبر: رژهٔ تاریخ نظامی', '15 October: the historical parade'),
    body: P([
      '۱۵ اکتبر رژهٔ بزرگ نظامی تاریخ ۲۵۰۰ سالهٔ ایران را نشان داد. رژه بیش از یک ساعت و نیم طول کشید و سربازانی از دوره‌های هخامنشی، اشکانی، ساسانی، صفاری، دیلمی، صفوی، افشار، زند و قاجار تا دورهٔ پهلوی در آن بودند. استیل به نقل از راسل چمبرلین می‌نویسد حدود ۳٬۵۰۰ سرباز ارتش ایران در این رژه شرکت داشتند و کمیتهٔ نظامی جشن دوازده سال روی آن کار کرده بود. رژه با یگان‌های سپاه انقلاب و لژیون خدمات اجتماعی و آتش‌بازی پایان یافت.',
      'شام همان روز مهمانان ویژه به «شب ایرانی» دعوت شدند: موسیقی سنتی، رقص و خوراک ایرانی.',
    ], [
      'On 15 October a grand military parade presented 2,500 years of Iranian history. It lasted more than an hour and a half and included soldiers dressed for the Achaemenid, Parthian, Sasanian, Saffarid, Deylami, Safavid, Afshar, Zand and Qajar periods, ending with the Pahlavi period. Steele, citing Russell Chamberlin, writes that about 3,500 soldiers of the Iranian army took part, after twelve years of work by the Military Committee for the Celebration. The day ended with units of the Revolutionary Corps and the Universal Welfare Legion, and with fireworks.',
      'That evening special guests were given a “Persian Evening” of traditional Iranian music, dance and Persian food.',
    ]),
    sources: ['steele-2014'],
    photo: 'parade',
  },
  {
    id: 'tehran',
    title: B('۱۶ اکتبر: تهران، شهیاد و ورزشگاه', '16 October: Tehran, Shahyad and the stadium'),
    body: P([
      '۱۶ اکتبر آیین‌ها به تهران آمد. سران کشورها نخست بر آرامگاه رضاشاه تاج گل نهادند و سپس به میدان شهیاد آریامهر رفتند.',
      'برج شهیاد را حسین امانت پس از یک مسابقهٔ سراسری طراحی کرد که کمیتهٔ جشن برگزار کرده بود. در گشایش، مهمانان به موزهٔ درون برج دعوت شدند و استوانهٔ کوروش، که موزهٔ بریتانیا به امانت داده بود، به نمایش درآمد. عکسی از همان روز گشایش، ۲۴ مهر ۱۳۵۰، شاه را در میان حاضران نشان می‌دهد.',
      'در همین برنامه ورزشگاه آریامهر نیز گشوده شد: استادیومی حدود صد هزار نفری به طراحی عبدالعزیز فرمانفرمائیان، برای بازی‌های آسیایی ۱۹۷۴.',
    ], [
      'On 16 October the ceremonies moved to Tehran. The visiting monarchs and heads of state first laid a wreath at Reza Shah’s tomb, and were then taken to Shahyad Aryamehr square for the opening of the monument.',
      'The Shahyad tower was designed by Hossein Amanat after a nationwide competition organised by the Celebration Committee. Guests were invited into the museum inside the monument, where the Cyrus Cylinder, on loan from the British Museum, was on display. A photograph of the inauguration on 24 Mehr 1350 shows the shah among those present.',
      'The Aryamehr Stadium was also inaugurated in this programme: a stadium of about 100,000 seats, designed by the Iranian architect Abdolaziz Farmanfarmaian, for the 1974 Asian Games.',
    ]),
    sources: ['steele-2014'],
    photo: 'shahyad-opening',
  },
  {
    id: 'legacy',
    title: B('کتاب، مدرسه و آنچه ماند', 'Books, schools and what remained'),
    body: P([
      'استیل در کتاب ۲۰۲۱ خود می‌نویسد بیش از پانصد کتاب در پیوند با این جشن فراهم شد و نزدیک چهارصد تای آن در ایران به چاپ رسید. همچنین ساخت ۲٬۵۰۰ مدرسهٔ یادبود که سپاه دانش آن‌ها را اداره کند در برنامه بود.',
      'برج شهیاد بعدها روی اسکناس‌ها آمد و هنوز در غرب تهران ایستاده است؛ پس از انقلاب نامش آزادی شد. ورزشگاه نیز برجاست. استوانهٔ کوروش پس از نمایش به لندن بازگشت، اما همان نمایش نماد رسمی پیوند این جشن با منشور کوروش شد.',
    ], [
      'In his 2021 book Steele writes that more than five hundred books were produced in connection with the celebrations, nearly four hundred of them printed in Iran. It was also planned to construct 2,500 commemorative schools to be run by the Literacy Corps.',
      'The Shahyad monument later appeared on banknotes and still stands in west Tehran; after the revolution it was renamed Azadi. The stadium also remains. The Cyrus Cylinder went back to London after the display, but that loan made it the official emblem linking the celebrations to Cyrus’s cylinder.',
    ]),
    sources: ['steele-2021', 'sabahi-2022', 'steele-2014'],
    photo: 'shahyad-aerial',
  },
]

export const reading = P([
  'از نگاه ما، این جشن کوششی بود تا تاریخ کهن ایران در برابر جهان زنده شود و پیوند میان کوروش و ایران امروز بیان گردد. سخن کوتاه شاه بر سر آرامگاه، رژهٔ تاریخ نظامی، کنگرهٔ ایران‌شناسی و گشایش شهیاد هر یک بخشی از همان روایت‌اند. شهیاد هنوز در تهران ایستاده است.',
], [
  'In our reading, these celebrations were an effort to set Iran’s ancient past before the world and to state the link between Cyrus and Iran today. The shah’s short speech at the tomb, the historical parade, the congress of Iranology and the opening of Shahyad each belong to that account. Shahyad still stands in Tehran.',
])

export interface TimelineBeat { id: string; when: Bi; title: Bi; body: Bi; photo?: string; sources: string[] }

export const timeline: TimelineBeat[] = [
  { id: 't12', when: B('۱۲ اکتبر / ۲۰ مهر', '12 October'), title: B('پاسارگاد', 'Pasargadae'), body: B('آیین ستایش کوروش و سخن شاه بر سر آرامگاه.', 'The Glorification of Cyrus and the shah’s speech at the tomb.'), photo: 'speech', sources: ['nyt-1971-10-13', 'steele-2014'] },
  { id: 't13', when: B('۱۳ اکتبر / ۲۱ مهر', '13 October'), title: B('کنگره و ورود مهمانان', 'The congress and the guests’ arrival'), body: B('گشایش کنگرهٔ ایران‌شناسی و رسیدن سران کشورها به شهر چادری تخت جمشید.', 'The congress of Iranology opens and heads of state arrive at the Persepolis tent city.'), photo: 'tent-city', sources: ['steele-2014', 'nyt-1971-10-12'] },
  { id: 't14', when: B('۱۴ اکتبر / ۲۲ مهر', '14 October'), title: B('ضیافت رسمی', 'The royal banquet'), body: B('ضیافت رسمی و نمایش نور و صدا در ویرانه‌های تخت جمشید.', 'The royal banquet and a son et lumière among the ruins of Persepolis.'), photo: 'reception', sources: ['guardian-1971-10-15', 'steele-2014'] },
  { id: 't15', when: B('۱۵ اکتبر / ۲۳ مهر', '15 October'), title: B('رژه', 'The parade'), body: B('رژهٔ تاریخ نظامی ایران و شب ایرانی برای مهمانان ویژه.', 'The historical military parade and a Persian evening for special guests.'), photo: 'parade', sources: ['steele-2014'] },
  { id: 't16', when: B('۱۶ اکتبر / ۲۴ مهر', '16 October'), title: B('تهران', 'Tehran'), body: B('تاج گل بر آرامگاه رضاشاه، گشایش شهیاد و ورزشگاه آریامهر.', 'A wreath at Reza Shah’s tomb, and the opening of Shahyad and Aryamehr Stadium.'), photo: 'shahyad-opening', sources: ['steele-2014'] },
]
