/**
 * Uzun Hasan (Ḥasan the Tall), Aq Qoyunlu sultan, 1452/1457–1478 CE.
 * Spine: R. Quiring-Zoche, "Āq Qoyunlū" (Encyclopaedia Iranica), which follows J. E. Woods, The Aqquyunlu (1976).
 */
import type { DossierSection, FeaturedKing } from '../featured/types'
import { ev, note, sec } from '../late-achaemenid/common'
import { B, P, tkPhotos, tkSources } from './common'

const sketch = note('منابع راه دقیق را نمی‌گویند؛ خط‌ها طرح‌وارند.', 'The sources give no exact routes; the lines are sketches.')
const S = ['iranica-aq']

export const uzunHasanEvents = [
  ev('amed', 1452, B('پاییز ۱۴۵۲ م', 'Autumn 1452 CE'), 'admin', P.AMED, B('کودتای آمد', 'The coup at Amed'), B('برادرش جهانگیر برتری قراقویونلو را پذیرفته بود. حسن، که «اوزون» (بلند) لقب داشت، این را خیانت دانست و وقتی جهانگیر در لشکرکشی بود، آمد (دیاربکر) را بی‌خونریزی گرفت. کلیدهای دژ را برای سلطان ممالیک به قاهره فرستاد و فرمان حکومت گرفت.', 'His brother Jahangir had accepted Qara Qoyunlu overlordship. Hasan, called “Uzun” (the Tall), saw this as betrayal and, while Jahangir was away on campaign, seized Amed (Diyarbakır) in a bloodless coup. He sent the keys of the fortress to the Mamluk sultan in Cairo and received a diploma as governor.'), 'secure', S),
  ev('jahangir', 1457, B('۱۴۵۷ م', '1457 CE'), 'battle', P.AMED, B('پایان کشمکش با برادر', 'The end of the fight with his brother'), B('جهانگیر چند بار با کمک سپاه جهانشاه کوشید آمد را پس بگیرد و سرانجام شکست خورد. آق‌قویونلو زیر رهبری اوزون حسن دوباره یکپارچه شد.', 'Jahangir tried several times, with help from Jahan Shah’s army, to retake Amed and was finally defeated. The Aq Qoyunlu were reunited under Uzun Hasan.'), 'secure', S),
  ev('trebizond', 1461, B('۱۴۶۱ م', '1461 CE'), 'admin', P.TREBIZOND, B('سقوط طرابزون', 'The fall of Trebizond'), B('اوزون حسن با تئودورا، شاهزادهٔ کومننوس طرابزون، ازدواج کرده و با آنان پیمانی ضدعثمانی بسته بود. اما وقتی سلطان محمد دوم با توپخانه به طرابزون رفت، به سبب برتری سلاح عثمانی وارد جنگ نشد.', 'Uzun Hasan had married Theodora, a Komnenian princess of Trebizond, and joined them in an anti-Ottoman alliance. But when Sultan Mehmed II marched on Trebizond with artillery, he stayed out of the war because of Ottoman superiority in weapons.'), 'secure', S),
  ev('hasankeyf', 1462, B('۱۴۶۲ م', '1462 CE'), 'campaign', P.HASANKEYF, B('حصن کیفا', 'Hasankeyf'), B('آخرین امیرنشین ایوبی را گرفت؛ در ۱۴۶۵ هم دژ خرپوت را.', 'He took the last Ayyubid principality; in 1465, the fortress of Kharput as well.'), 'secure', S, { route: [P.AMED, P.HASANKEYF], ...sketch }),
  ev('jahan-shah', 1467, B('۱۴۶۷ م', '1467 CE'), 'battle', P.VAN, B('پیروزی بر جهانشاه', 'Victory over Jahan Shah'), B('جهانشاه قراقویونلو، که اکنون تا فارس و کرمان فرمان می‌راند، به جنگ آمد. زمستان زودرس او را واداشت بیشتر سپاه را بفرستد؛ اوزون حسن به اردوگاهش زد. جهانشاه هنگام عقب‌نشینی کشته شد و اتحادیهٔ قراقویونلو از هم پاشید.', 'Jahan Shah of the Qara Qoyunlu, who now ruled as far as Fars and Kerman, came to fight. An early winter forced him to send most of his army away, and Uzun Hasan attacked his camp. Jahan Shah was killed during the retreat and the Qara Qoyunlu confederation fell apart.'), 'probable', S, { route: [P.AMED, P.VAN], ...note('ایرانیکا جای نبرد را نمی‌گوید؛ نشانه روی نقشه تقریبی است.', 'Iranica does not name the battlefield; the marker is approximate.') }),
  ev('abu-said', 1469, B('ژانویهٔ ۱۴۶۹ م', 'January 1469 CE'), 'battle', P.QARABAGH, B('قراباغ: پایان ابوسعید تیموری', 'Qarabagh: the end of Abu Sa‘id the Timurid'), B('ابوسعید تیموری از خراسان تاخت تا ولایت‌های ایران را پس بگیرد، اما در قراباغ زمستان‌گیر و محاصره شد. هنگام شکستن محاصره اسیر و به‌زودی کشته شد. اوزون حسن پایتخت را از آمد به تبریز برد.', 'The Timurid Abu Sa‘id marched from Khorasan to win back the Iranian provinces, but was caught by winter in Qarabagh and besieged. He was captured trying to break out and put to death soon after. Uzun Hasan moved his capital from Amed to Tabriz.'), 'secure', S, { route: [P.TABRIZ, P.QARABAGH], ...sketch }),
  ev('tokat', 1472, B('اواخر تابستان ۱۴۷۲ م', 'Late summer 1472 CE'), 'campaign', P.TOKAT, B('یورش به خاک عثمانی', 'Into Ottoman lands'), B('به امید کمک ونیز، که قول جنگ‌افزار داده بود، به قلمرو عثمانی تاخت، توقات را ویران کرد و تا قرامان پیش رفت، اما عقب رانده شد.', 'Counting on Venice, which had promised firearms, he invaded Ottoman territory, ravaged Tokat and pushed into Karaman, but was driven back.'), 'secure', S, { route: [P.AMED, P.KHARPUT, P.TOKAT], ...sketch }),
  ev('otlukbeli', 1473, B('اوت ۱۴۷۳ م', 'August 1473 CE'), 'battle', P.OTLUKBELI, B('اوتلوق‌بلی', 'Otlukbeli'), B('در نبردی رودررو نزدیک روستای باشکنت در اوتلوق‌بلی، سلطان محمد فاتح با توپ و تفنگ پیروز شد. جنگ‌افزار ونیزی دیر رسید. آق‌قویونلو زمین چندانی از دست نداد، اما اوزون حسن دیگر به غرب فرات نتاخت.', 'In a pitched battle near the village of Başkent at Otlukbeli, Sultan Mehmed the Conqueror won with artillery and muskets. The Venetian firearms came too late. The Aq Qoyunlu lost little land, but Uzun Hasan never again pushed west of the Euphrates.'), 'secure', S, { route: [P.TABRIZ, P.OTLUKBELI] }),
  ev('death', 1478, B('۵–۶ ژانویهٔ ۱۴۷۸ م', '5–6 January 1478 CE'), 'admin', P.TABRIZ, B('مرگ', 'Death'), B('پس از لشکرکشی پیروز به گرجستان، بیمار درگذشت. پسرش خلیل جانشین شد اما چند ماه بعد در جنگ با هواداران برادر نوجوانش یعقوب کشته شد.', 'Already ill, he died after a successful campaign against the Georgians. His son Khalil succeeded him but was killed a few months later fighting partisans of his teenage brother Ya‘qub.'), 'secure', S),
]

const campaignEvents = [
  ev('c-amed', 1452, B('۱۴۵۲', '1452'), 'admin', P.AMED, B('آمد', 'Amed'), B('کودتای بی‌خونریزی.', 'A bloodless coup.'), 'secure', S),
  ev('c-hasankeyf', 1462, B('۱۴۶۲', '1462'), 'campaign', P.HASANKEYF, B('حصن کیفا', 'Hasankeyf'), B('پایان ایوبیان.', 'The last Ayyubids fall.'), 'secure', S, { route: [P.AMED, P.HASANKEYF] }),
  ev('c-kharput', 1465, B('۱۴۶۵', '1465'), 'campaign', P.KHARPUT, B('خرپوت', 'Kharput'), B('دژ خرپوت گرفته شد.', 'Kharput fortress taken.'), 'secure', S, { route: [P.AMED, P.KHARPUT] }),
  ev('c-jahan-shah', 1467, B('۱۴۶۷', '1467'), 'battle', P.VAN, B('شکست جهانشاه', 'Jahan Shah defeated'), B('پایان قراقویونلو.', 'The end of the Qara Qoyunlu.'), 'probable', S, { route: [P.AMED, P.VAN], ...note('جای نبرد تقریبی است.', 'The battlefield is approximate.') }),
  ev('c-tabriz', 1468, B('۱۴۶۸', '1468'), 'campaign', P.TABRIZ, B('آذربایجان', 'Azerbaijan'), B('تبریز به دست آمد.', 'Tabriz is taken.'), 'secure', S, { route: [P.VAN, P.TABRIZ] }),
  ev('c-qarabagh', 1469, B('ژانویهٔ ۱۴۶۹', 'Jan 1469'), 'battle', P.QARABAGH, B('قراباغ', 'Qarabagh'), B('ابوسعید اسیر شد.', 'Abu Sa‘id captured.'), 'secure', S, { route: [P.TABRIZ, P.QARABAGH] }),
  ev('c-tokat', 1472, B('۱۴۷۲', '1472'), 'campaign', P.TOKAT, B('توقات', 'Tokat'), B('یورش و عقب‌نشینی.', 'Raid and retreat.'), 'secure', S, { route: [P.TABRIZ, P.AMED, P.KHARPUT, P.TOKAT] }),
  ev('c-otlukbeli', 1473, B('اوت ۱۴۷۳', 'Aug 1473'), 'battle', P.OTLUKBELI, B('اوتلوق‌بلی', 'Otlukbeli'), B('توپ عثمانی پیروز شد.', 'Ottoman guns win.'), 'secure', S, { route: [P.TABRIZ, P.OTLUKBELI] }),
]

export const uzunHasanDossier: DossierSection[] = [
  sec('guns', 'اوتلوق‌بلی: سوار در برابر توپ', 'Otlukbeli: horsemen against guns',
    [['به نوشتهٔ ایرانیکا، سپاه اوزون حسن با همهٔ لشکرهای ولایتی شاید از صد هزار تن بیشتر بود و نیرویش در سواره‌نظام بود، اما «ضعف بزرگش» نداشتن جنگ‌افزار آتشین بود. او از ونیز تفنگ و توپ خواست؛ محموله در بهار ۱۴۷۳ فرستاده شد اما دیر رسید. در اوت ۱۴۷۳ در اوتلوق‌بلی، محمد فاتح توپ و تفنگ را با اثری قاطع به کار برد.'], ['According to Iranica, Uzun Hasan’s army, with all its provincial contingents, may well have exceeded 100,000 men; its strength was the cavalry, and its great weakness was the lack of firearms. He asked Venice for guns; they were shipped in spring 1473 but arrived too late. In August 1473 at Otlukbeli, Mehmed the Conqueror brought artillery and muskets into action with decisive effect.']],
    [['رقم صد هزار برآورد است، نه شمارش. درسی که بعدها روشن شد این بود که برتری اسب‌سواران ترکمان در برابر توپ پایان یافته بود؛ چهل سال بعد صفویان همین را در چالدران تجربه کردند.'], ['The 100,000 is an estimate, not a count. The lesson that became clear later was that Turkman cavalry no longer prevailed against guns; forty years on, the Safavids learned the same at Chaldiran.']],
    [['آنکه فن تازه را دیر بپذیرد، دلاوری‌اش جای آن را نمی‌گیرد.'], ['Courage does not make up for adopting new technology too late.']],
    S, { photos: ['otlukbeli-1616'] }),
  sec('property', 'قانون‌نامهٔ حسن پادشاه', 'The law code of Hasan Padishah',
    [['ایرانیکا می‌نویسد اوزون حسن ارزش روستاییان را می‌شناخت، یا دست‌کم می‌دانست توان کشاورزان حدی دارد. برای جلوگیری از بهره‌کشی خودسرانه، دستورها، که بیشترشان احتمالاً از پیش وجود داشت، را در «قانون‌نامهٔ حسن پادشاه» گرد آورد که تا مدت‌ها پس از او اعتبار داشت؛ بخش بزرگی از قانون‌های مالیات و بازرگانی‌اش در منابع عثمانی مانده است. در ولایت‌های ایران دستگاه اداری پیشین و کارگزاران ایرانی‌اش را نگه داشت.'], ['Iranica writes that Uzun Hasan appreciated the worth of the rural population, or at least knew there were limits to what peasants could produce. To prevent arbitrary exploitation he had the statutes, probably mostly existing rules, codified in the Qanun-nama of Hasan Padishah, which stayed in force long after his time; much of his tax and trade law survives in Ottoman sources. In the Iranian provinces he kept the existing administration and its Iranian officials.']],
    [['این خوانش ماست: قانون نوشته، حتی اگر از سوی فرمانروا باشد، مرزی برای گرفتن می‌کشد؛ کشاورز می‌داند چه بدهکار است و مأمور نمی‌تواند هر چه خواست بگیرد. این گام کوچکی به سوی امنیت دارایی بود. اما در کنارش سیورغال‌های موروثی امیران، با معافیت مالیاتی و گاه داوری خودشان، سرزمین را میان قدرتمندان بخش می‌کرد؛ اصلاح سیورغال در زمان پسرش یعقوب شکست خورد و پس از او دوام نیاورد.'], ['This is our reading: written law, even from a ruler, draws a limit to taking; the farmer knows what he owes and the collector cannot take whatever he wants. That was a small step towards secure property. Alongside it, though, the amirs’ heritable suyurghal grants, with tax exemption and sometimes their own courts, divided the land among the powerful; the attempt to reform them under his son Ya‘qub failed and did not outlast him.']],
    [['قانونِ روشن، حتی ناقص، از فرمانِ دلبخواهی بهتر از دارایی مردم پاسداری می‌کند.'], ['Clear law, even imperfect, protects people’s property better than arbitrary command.']],
    S, { photos: ['isfahan-inscription'] }),
  sec('safavid-link', 'داماد صفوی', 'The Safavid son-in-law',
    [['اوزون حسن به نهادهای دینی شهری کمک می‌کرد و فرقه‌های تندرو را سرکوب می‌کرد، اما با درویشان مردمی، که بیشتر به تشیع گرایش داشتند، رابطه داشت. پیش‌تر به شیخ جنید صفوی پناه داده و خواهرش را به او داده بود؛ سپس دخترش حلیمه بیگم را به پسر او، شیخ حیدر، داد. مادر حلیمه دسپینا خاتون، شاهزادهٔ طرابزون، بود. اسماعیل، پسر حیدر، در ۱۵۰۱ آق‌قویونلو را برانداخت.'], ['Uzun Hasan supported the urban religious establishment and persecuted extreme sects, but kept contact with popular dervish orders that leaned towards Shi‘ism. He had sheltered the Safavid shaykh Junayd and given him his sister in marriage; he then married his daughter Halima Begum to Junayd’s son, Shaykh Haydar. Halima’s mother was Despina Khatun, a princess of Trebizond. Haydar’s son Ismail overthrew the Aq Qoyunlu in 1501.']],
    [['ایرانیکا هشدار می‌دهد که تقابل روشنِ «آق‌قویونلوی سنی» با «قراقویونلو و صفویان شیعه» بیشتر بر منابع پسین صفوی تکیه دارد و «باید مشکوک شمرده شود».'], ['Iranica warns that the clear-cut contrast between “Sunni Aq Qoyunlu” and “Shi‘i Qara Qoyunlu and Safavids” rests mainly on later Safavid sources and “must be considered doubtful”.']],
    [['پیوندهای خانوادگی گاه وارث را از درون خانهٔ رقیب می‌سازد.'], ['Family ties can raise an heir from inside a rival’s house.']],
    ['iranica-aq', 'iranica-esmail'], { photos: ['blue-mosque'] }),
]

export const uzunHasan: FeaturedKing = {
  slug: 'uzun-hasan',
  name: B('اوزون حسن', 'Uzun Hasan'),
  dynastyName: B('آق‌قویونلو', 'The Aq Qoyunlu'),
  reign: B('۱۴۵۲–۱۴۷۸ م', '1452–1478 CE'),
  title: B('اوزون حسن؛ از آمد تا تبریز', 'Uzun Hasan: from Amed to Tabriz'),
  lede: B(
    'حسنِ بلندقامت، رهبر ترکمانان «گوسفند سفید»، از دژ آمد برخاست، قراقویونلو و آخرین جهان‌گشای تیموری را شکست داد و تبریز را پایتخت کرد. با ونیز بر ضد عثمانی پیمان بست، اما در اوتلوق‌بلی توپ عثمانی بر سواران او پیروز شد. قانون‌نامه‌اش تا مدت‌ها پس از او اعتبار داشت.',
    'Hasan the Tall, leader of the “White Sheep” Turkmans, rose from the fortress of Amed, defeated the Qara Qoyunlu and the last conquering Timurid, and made Tabriz his capital. He allied with Venice against the Ottomans, but at Otlukbeli Ottoman guns beat his horsemen. His law code stayed in force long after him.',
  ),
  stats: [
    { n: B('۲۶ سال', '26 years'), l: B('از آمد (۱۴۵۲) تا مرگ (۱۴۷۸)', 'from Amed (1452) to death (1478)') },
    { n: B('۱۴۶۷', '1467'), l: B('پایان قراقویونلو (م)', 'end of the Qara Qoyunlu (CE)') },
    { n: B('۱۴۷۳', '1473'), l: B('اوتلوق‌بلی (م)', 'Otlukbeli (CE)') },
    { n: B('۱', '1'), l: B('قانون‌نامه، پایدارتر از دولتش', 'law code that outlived his state') },
  ],
  mapTitle: B('نقشهٔ متحرک: زندگی و لشکرکشی‌ها', 'Animated map: life and campaigns'),
  events: uzunHasanEvents,
  span: [1452, 1478],
  lifeMap: { view: [34, 30, 50, 43], places: [
    { name: B('آمد', 'Amed'), c: P.AMED, left: true }, { name: B('طرابزون', 'Trebizond'), c: P.TREBIZOND }, { name: B('توقات', 'Tokat'), c: P.TOKAT, left: true },
    { name: B('اوتلوق‌بلی', 'Otlukbeli'), c: P.OTLUKBELI }, { name: B('وان', 'Van'), c: P.VAN }, { name: B('تبریز', 'Tabriz'), c: P.TABRIZ },
    { name: B('قراباغ', 'Qarabagh'), c: P.QARABAGH }, { name: B('بغداد', 'Baghdad'), c: P.BAGHDAD },
  ] },
  campaign: {
    id: 'campaigns',
    title: B('لشکرکشی‌های اوزون حسن (۱۴۵۲–۱۴۷۳ م)', 'Uzun Hasan’s campaigns (1452–1473 CE)'),
    intro: { fa: ['از کودتای آمد تا پیروزی بر جهانشاه و ابوسعید، و شکست اوتلوق‌بلی. تاریخ‌ها از ایرانیکا (کوئیرینگ-تسوشه، بر پایهٔ وودز) است؛ راه‌ها طرح‌وارند.'], en: ['From the coup at Amed to victory over Jahan Shah and Abu Sa‘id, and defeat at Otlukbeli. Dates follow Iranica (Quiring-Zoche, after Woods); the routes are sketches.'] },
    events: campaignEvents, span: [1452, 1473], view: [34, 35, 50, 43],
    places: [
      { name: B('آمد', 'Amed'), c: P.AMED, left: true }, { name: B('حصن کیفا', 'Hasankeyf'), c: P.HASANKEYF, dy: 0.7 }, { name: B('خرپوت', 'Kharput'), c: P.KHARPUT, left: true },
      { name: B('توقات', 'Tokat'), c: P.TOKAT, left: true }, { name: B('اوتلوق‌بلی', 'Otlukbeli'), c: P.OTLUKBELI }, { name: B('طرابزون', 'Trebizond'), c: P.TREBIZOND },
      { name: B('وان', 'Van'), c: P.VAN }, { name: B('تبریز', 'Tabriz'), c: P.TABRIZ }, { name: B('قراباغ', 'Qarabagh'), c: P.QARABAGH },
    ],
    clip: { gif: B('/media/uzun-hasan/campaigns-fa.gif', '/media/uzun-hasan/campaigns-en.gif'), mp4: B('/media/uzun-hasan/campaigns-fa.mp4', '/media/uzun-hasan/campaigns-en.mp4'), webm: B('/media/uzun-hasan/campaigns-fa.webm', '/media/uzun-hasan/campaigns-en.webm'), poster: B('/media/uzun-hasan/campaigns-fa.png', '/media/uzun-hasan/campaigns-en.png'), width: 958, height: 356 },
  },
  dossier: uzunHasanDossier,
  synthesis: { title: B('جمع‌بندی: دولت ایلی در آستانهٔ دولت ایرانی', 'Synthesis: a tribal state on the threshold of an Iranian one'), paras: {
    fa: [
      'اوزون حسن نخستین فرمانروای آق‌قویونلو بود که خود را سلطان مستقل خواند. او کارگزاران ایرانی را نگه داشت و قانون را نوشت، اما شکاف میان جنگاوران ترکمان و مردم یکجانشین، به گفتهٔ ایرانیکا، پرنشدنی ماند.',
      'پس از او امیران قبیله‌ها شاهزادگان خردسال را ابزار قدرت کردند و دولت از هم پاشید. اسماعیل صفوی، پسر دامادش حیدر، میراث او را گرفت.',
    ],
    en: [
      'Uzun Hasan was the first Aq Qoyunlu ruler to call himself an independent sultan. He kept the Iranian officials and wrote down the law, but the gap between Turkman warriors and settled people, in Iranica’s words, remained unbridgeable.',
      'After him, tribal chiefs used child princes as tools of their power and the state fell apart. Ismail Safavi, son of his son-in-law Haydar, took over his inheritance.',
    ],
  }, sources: S },
  sources: tkSources,
  photos: tkPhotos,
  related: [
    { href: { fa: '/dynasty/turkmens', en: '/dynasty/turkmens' }, label: B('قراقویونلو و آق‌قویونلو', 'Qara Qoyunlu and Aq Qoyunlu') },
    { href: { fa: '/king/timur', en: '/en/king/timur' }, label: B('تیمور و تیموریان', 'Timur and the Timurids') },
  ],
  wikipedia: 'https://en.wikipedia.org/wiki/Uzun_Hasan',
}
