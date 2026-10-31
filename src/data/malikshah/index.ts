/**
 * Malikshah I, Seljuk sultan 1072–1092 CE, and his vizier Nizam al-Mulk.
 * Spine: D. Durand-Guédy, "Malekšāh" and N. Yavari, "Neẓām-al-Molk" (Encyclopaedia Iranica).
 */
import type { Coord, DossierSection, FeaturedKing, FeaturedSource } from '../featured/types'
import type { CommonsPhoto } from '../places/types'
import { ev, note, sec } from '../late-achaemenid/common'

const B = (fa: string, en: string) => ({ fa, en })
const ISFAHAN: Coord = [51.67, 32.65]
const KARAJ: Coord = [49.69, 34.09]
const TERMEZ: Coord = [67.28, 37.22]
const ANTIOCH: Coord = [36.16, 36.2]
const SAMARKAND: Coord = [66.96, 39.65]
const ALAMUT: Coord = [50.59, 36.44]
const NAHAVAND: Coord = [48.37, 34.19]
const BAGHDAD: Coord = [44.37, 33.31]
const MERV: Coord = [61.84, 37.66]

export const malikSources: FeaturedSource[] = [
  { id: 'iranica-malekshah', author: 'D. Durand-Guédy, Encyclopaedia Iranica', title: 'Malekšāh', year: 'online', url: 'https://www.iranicaonline.org/articles/maleksah/', note: { fa: 'ستون اصلی این صفحه؛ تاریخ‌ها، جاها و رقم‌ها از این مقاله است.', en: 'The spine of this page; the dates, places and figures come from this article.' } },
  { id: 'iranica-nizam', author: 'N. Yavari, Encyclopaedia Iranica', title: 'Neẓām-al-Molk', year: '2015', url: 'https://www.iranicaonline.org/articles/nezam-al-molk/', note: { fa: 'دربارهٔ وزیر، نظامیه‌ها و سیرالملوک.', en: 'On the vizier, the Nizamiyya colleges and the Siar al-moluk.' } },
  { id: 'iranica-alp', author: 'K. A. Luther, Encyclopaedia Iranica', title: 'Alp Arslān', year: '1985', url: 'https://www.iranicaonline.org/articles/alp-arslan-saljuq-sultan/', note: { fa: 'دربارهٔ سال‌های ولیعهدی ملکشاه.', en: 'On Malikshah’s years as heir.' } },
  { id: 'ibn-athir', author: 'Ebn al-Aṯir', title: 'al-Kāmel fi’l-taʾriḵ', year: 'c. 1231', note: { fa: 'تاریخ عربی که هر دو مقاله بر آن تکیه دارند.', en: 'The Arabic chronicle on which both articles rely.' } },
]
export const malikSourceIds = new Set(malikSources.map((s) => s.id))

const f = (name: string) => `https://commons.wikimedia.org/wiki/File:${name}`
/** Licence and author read from the Commons API on 2026-10-31. */
export const malikPhotos: CommonsPhoto[] = [
  { id: 'nizam-murder', src: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Assassination_of_Nizam_al-Mulk.jpg', page: f('Assassination_of_Nizam_al-Mulk.jpg'), author: 'Unknown painter, 14th century', license: 'Public domain', licenseUrl: 'https://commons.wikimedia.org/wiki/Commons:Public_domain', caption: B('کشته شدن نظام‌الملک در نگاره‌ای از سدهٔ چهاردهم، دو سده پس از رویداد؛ این تصویر روایت رایج (کار اسماعیلیان) را نشان می‌دهد، نه سند را.', 'The killing of Nizam al-Mulk in a fourteenth-century painting, two centuries after the event; it shows the common story (an Isma‘ili killer), not evidence.') },
]

const sketch = note('منابع راه‌ها را نمی‌گویند؛ خط‌ها طرح‌وارند.', 'The sources give no routes; the lines are sketches.')
export const malikEvents = [
  ev('birth', 1055, B('۱۶ اوت ۱۰۵۵ م', '16 August 1055 CE'), 'admin', ISFAHAN, B('تولد', 'Birth'), B('به گفتهٔ بنداری در ۱۶ اوت ۱۰۵۵ زاده شد و در پیرامون اصفهان بزرگ شد. راوندی سال دیگری می‌دهد.', 'Born on 16 August 1055 according to Bondari, and raised around Isfahan. Ravandi gives a different year.'), 'probable', ['iranica-malekshah'], note('جای تولد در منابع نیامده و راوندی سال ۴۴۵ ق را می‌دهد؛ نقطه جای بزرگ شدن اوست.', 'The birthplace is not given and Ravandi gives AH 445; the marker shows where he grew up.')),
  ev('heir', 1066, B('۱۰۶۶ م', '1066 CE'), 'admin', ISFAHAN, B('ولیعهد و اقطاع اصفهان', 'Heir, with Isfahan as iqta‘'), B('آلپ ارسلان او را رسماً جانشین کرد و اصفهان را به اقطاع به او داد. دو سال پیش‌تر با ترکان خاتون، دختر خان قراخانی، ازدواج کرده بود.', 'Alp Arslan formally named him heir and gave him Isfahan as iqta‘. Two years earlier he had married Terken Khatun, daughter of the Qarakhanid khan.'), 'secure', ['iranica-malekshah', 'ibn-athir']),
  ev('karaj', 1073, B('۱۵ یا ۱۷ آوریل ۱۰۷۳ م', '15 or 17 April 1073 CE'), 'battle', KARAJ, B('نبرد کرج با قاورد', 'Battle of Karaj against Qavurt'), B('عمویش قاورد سلطنت را از او ادعا کرد. نزدیک کرج (نزدیک اراک امروز)، با وجود جدا شدن ترکمانانش، پیروز شد. قاورد اعدام و دو پسرش کور شدند.', 'His uncle Qavurt claimed the sultanate. Near Karaj (near modern Arak), despite the desertion of his Turkmen troops, he won. Qavurt was executed and his two sons blinded.'), 'secure', ['iranica-malekshah'], { route: [ISFAHAN, KARAJ], ...sketch }),
  ev('termez', 1074, B('۱۰۷۳–۱۰۷۴ م', '1073–1074 CE'), 'campaign', TERMEZ, B('ترمذ', 'Termez'), B('قراخانیان را به کرانهٔ راست جیحون راند و شهر راهبردی ترمذ را گرفت.', 'He drove the Qarakhanids to the right bank of the Oxus and secured the strategic city of Termez.'), 'secure', ['iranica-malekshah', 'ibn-athir'], { route: [KARAJ, MERV, TERMEZ], ...sketch }),
  ev('syria', 1087, B('زمستان ۱۰۸۶–۱۰۸۷ م', 'Winter 1086–1087 CE'), 'campaign', ANTIOCH, B('رها، حلب و انطاکیه', 'Edessa, Aleppo and Antioch'), B('از اصفهان رفت و خود رها، حلب و انطاکیه را گرفت. در لاذقیه «به اسبان از آب دریا دادند».', 'He left Isfahan and in person took Edessa, Aleppo and Antioch. At Latakia, “they gave to the horses water from the sea”.'), 'secure', ['iranica-malekshah'], { route: [TERMEZ, MERV, ISFAHAN, BAGHDAD, ANTIOCH], ...sketch }),
  ev('samarkand', 1089, B('۱۰۸۹ م', '1089 CE'), 'campaign', SAMARKAND, B('سمرقند', 'Samarkand'), B('با پشتیبانی برخی عالمان محلی سمرقند را گرفت و فرمانروایش احمد خان، برادرزادهٔ ترکان خاتون، را زندانی کرد.', 'With the support of some local ulama he took Samarkand and imprisoned its ruler Ahmad Khan, nephew of his wife Terken Khatun.'), 'secure', ['iranica-malekshah', 'ibn-athir'], { route: [ANTIOCH, ISFAHAN, MERV, SAMARKAND], ...sketch }),
  ev('alamut', 1090, B('۱۰۹۰ م', '1090 CE'), 'religion', ALAMUT, B('حسن صباح در الموت', 'Hasan-e Sabbah at Alamut'), B('داعی اسماعیلی حسن صباح دژ الموت را گرفت و پایگاهی در برابر سلجوقیان ساخت. سپاهیان ملکشاه نتوانستند آن را بگیرند.', 'The Isma‘ili missionary Hasan-e Sabbah took the fortress of Alamut and made it a base against Seljuk rule. Malikshah’s emirs failed to take it.'), 'secure', ['iranica-malekshah']),
  ev('nizam', 1092, B('۱۴ اکتبر ۱۰۹۲ م', '14 October 1092 CE'), 'admin', NAHAVAND, B('کشته شدن نظام‌الملک', 'Nizam al-Mulk killed'), B('پس از کشمکش تلخ با ترکان خاتون بر سر جانشینی، نظام‌الملک کشته شد. دوران‌گدی می‌گوید دست داشتن خود ملکشاه «ممکن» است؛ منابع پسین کار را به اسماعیلیان نسبت می‌دهند.', 'After a bitter struggle with Terken Khatun over the succession, Nizam al-Mulk was killed. Durand-Guédy says Malikshah’s own responsibility is “possible”; later sources blame the Isma‘ilis.'), 'disputed', ['iranica-malekshah', 'iranica-nizam'], note('جای قتل در دو مقالهٔ ایرانیکا یکی نیست («در راه اصفهان به بغداد» و «روستایی بیرون اصفهان»)؛ نقطه طرح‌وار است و قاتل واقعی محل بحث است.', 'The two Iranica articles place the killing differently (“on the way from Isfahan to Baghdad”, “a hamlet outside Isfahan”); the marker is a sketch and who was behind it is debated.')),
  ev('death', 1092, B('۱۹ نوامبر ۱۰۹۲ م', '19 November 1092 CE'), 'admin', BAGHDAD, B('مرگ نزدیک بغداد', 'Death near Baghdad'), B('در سی‌وهفت‌سالگی در شکار نزدیک بغداد مرد. به گفتهٔ دوران‌گدی مرگش «آشکارا» طبیعی نبود: شاید خلیفه یا هواداران نظام‌الملک او را زهر دادند.', 'He died aged thirty-seven on a hunt near Baghdad. Durand-Guédy says he “obviously” did not die naturally: he was probably poisoned, by the caliph or by Nizam al-Mulk’s partisans.'), 'disputed', ['iranica-malekshah'], { route: [NAHAVAND, BAGHDAD], ...note('مرگ و تاریخ آن قطعی است؛ اینکه چه کسی او را زهر داد محل بحث است.', 'The death and its date are secure; who poisoned him is debated.') }),
]

export const malikDossier: DossierSection[] = [
  sec('vizier', 'سلطان و وزیر: دو قلمرو', 'Sultan and vizier: two domains',
    [['نظام‌الملک سی‌وشش سال از ملکشاه بزرگ‌تر بود و از کودکی کنار او. برخی منابع می‌گویند ملکشاه او را اتابک خود کرد. دوران‌گدی می‌نویسد شبکهٔ نظام‌الملک در شهرها بود، اما سلطان بیشتر در اردوگاه با امیران می‌زیست و ثبات کشور به لشکرکشی‌های او بسته بود. نظام‌الملک در سراسر کشور مدرسه‌های نظامیه را ساخت؛ معروف‌ترین آن‌ها در بغداد، ۱۰۶۶.'], ['Nizam al-Mulk was thirty-six years older than Malikshah and had been beside him since childhood. Some sources say Malikshah made him his atabeg. Durand-Guédy writes that the vizier’s network lay in the cities, while the sultan lived mostly in the camp with his emirs, and the empire’s stability depended on his conquests. Nizam founded Nizamiyya colleges across the empire, the most famous in Baghdad in 1066.']],
    [['تصویر رایج «وزیری قدرتمندتر از سلطان» را دوران‌گدی نمی‌پذیرد: هر کدام قلمرو خود را داشتند. یاوری هم هشدار می‌دهد که برخی منابع و پژوهش‌ها نظام‌الملک را به‌اشتباه بنیان‌گذار مدرسه دانسته‌اند.'], ['Durand-Guédy rejects the common image of “a vizier more powerful than the sultan”: each had his own domain. Yavari also warns that some sources and studies wrongly credit the vizier as the founder of the madrasa as such.']],
    [['قدرت در یک کشور تنها در دست یک نفر نیست؛ شبکه‌ها مهم‌اند.'], ['Power in a state is never held by one person alone; networks matter.']],
    ['iranica-malekshah', 'iranica-nizam']),
  sec('siar', 'سیرالملوک و قتل وزیر', 'The Siar al-moluk and the vizier’s murder',
    [['سیرالملوک (سیاست‌نامه) کتاب پند نظام‌الملک دربارهٔ کشورداری است. یاوری می‌گوید کار آن پس از برکناری وزیر در ۱۰۹۱ به پایان رسید و انتقاد تلخ آن از سلطان و نقش زنان در سیاست را معمولاً اشاره به ترکان خاتون می‌دانند. وزیر در ۱۴ اکتبر ۱۰۹۲ کشته شد و ملکشاه پنج هفته بعد مرد.'], ['The Siar al-moluk (Siasat-nama) is Nizam al-Mulk’s advice book on government. Yavari says it was completed only after the vizier’s removal in 1091, and its bitter criticism of the sultan and of women in politics is usually read as aimed at Terken Khatun. The vizier was killed on 14 October 1092, and Malikshah died five weeks later.']],
    [['قاتل نظام‌الملک محل بحث است. روایت رایج کار را به اسماعیلیان نسبت می‌دهد؛ اما دوران‌گدی می‌گوید دست داشتن ملکشاه «ممکن» است و منابع ترکان خاتون را برانگیزانندهٔ سقوط وزیر نشان می‌دهند. این را قطعی نمی‌دانیم.'], ['Who killed Nizam al-Mulk is disputed. The common story blames the Isma‘ilis; but Durand-Guédy says Malikshah’s responsibility is “possible”, and the sources show Terken Khatun as the instigator of the vizier’s fall. We do not treat any of these as settled.']],
    [['وقتی جانشینی قاعده ندارد، کشمکش بر سر آن به خون می‌کشد.'], ['When succession has no rule, the struggle over it turns bloody.']],
    ['iranica-nizam', 'iranica-malekshah'], { photos: ['nizam-murder'] }),
  sec('property', 'دارایی: اقطاع، غنیمت و خزانهٔ پر', 'Property: iqta‘, booty and a full treasury',
    [['دوران‌گدی می‌نویسد گسترش پیوسته، غلامان و امیران ترکمن را در مرزها سرگرم می‌کرد و به آنان پاداش (زمین، مستمری، غنیمت) می‌داد تا وفادار بمانند. شهرهای اصلی به امیران غلام و سرزمین‌های دیگر به خویشان سلطان سپرده شد. خزانه پر بود، هرچند احتمالاً کمتر از ۲۱۵ میلیون دینار که مستوفی گزارش کرده است.'], ['Durand-Guédy writes that constant expansion kept the ghulams and Turkmen emirs busy on the frontiers and gave them rewards (land, allowances, booty) that ensured their loyalty. The main cities went to ghulam emirs as commanders, other lands to the sultan’s relatives. The treasury was full, though probably holding less than the 215 million dinars reported by Mostawfi.']],
    [['این خوانش ماست: زمین در این دولت «اقطاع» بود، یعنی سهمی که سلطان در برابر خدمت می‌داد و پس می‌گرفت، نه دارایی پایدار. وفاداری را غنیمت تازه می‌خرید؛ همین که سلطان مرد و جانشینی روشن نبود، این ساختار به جنگ داخلی کشید.'], ['This is our reading: land in this state was iqta‘, a share the sultan granted for service and could take back, not secure property. Loyalty was bought with fresh booty; once the sultan died with no clear succession, the structure collapsed into civil war.']],
    [['جایی که زمین هدیهٔ قدرت است نه حق مالک، آرامش تنها تا مرگ فرمانروا می‌پاید.'], ['Where land is a gift of power rather than an owner’s right, peace lasts only until the ruler dies.']],
    ['iranica-malekshah']),
]

export const malikShah: FeaturedKing = {
  slug: 'malik-shah-i',
  name: B('ملکشاه', 'Malikshah'),
  dynastyName: B('سلجوقیان', 'The Seljuks'),
  reign: B('۱۰۷۲–۱۰۹۲ م', '1072–1092 CE'),
  title: B('ملکشاه و نظام‌الملک؛ اوج سلجوقیان و پایان خونین آن', 'Malikshah and Nizam al-Mulk: the Seljuk peak and its bloody end'),
  lede: B(
    'در روزگار ملکشاه قلمرو سلجوقی به بزرگ‌ترین اندازه‌اش رسید، «از مرزهای چین تا کرانه‌های شام». وزیرش نظام‌الملک نظامیه‌ها و سیرالملوک را به جا گذاشت. هر دو در یک پاییز مردند، و قاتل وزیر هنوز محل بحث است.',
    'Under Malikshah the Seljuk empire reached its widest extent, “from the borders of China to the limits of Syria”. His vizier Nizam al-Mulk left the Nizamiyya colleges and the Siar al-moluk. Both died in a single autumn, and who killed the vizier is still debated.',
  ),
  stats: [
    { n: B('۲۰ سال', '20 years'), l: B('سلطنت', 'as sultan') },
    { n: B('۴۶٬۰۰۰', '46,000'), l: B('سوار همیشگی (به گفتهٔ ظهیرالدین)', 'standing horsemen (per Zahir al-Din)') },
    { n: B('۳۶ روز', '36 days'), l: B('میان قتل وزیر و مرگ سلطان', 'between the vizier’s killing and the sultan’s death') },
    { n: B('جلالی', 'Jalali'), l: B('گاه‌شماری به نام او', 'calendar named after him') },
  ],
  mapTitle: B('نقشهٔ متحرک: زندگی و لشکرکشی‌ها', 'Animated map: life and campaigns'),
  events: malikEvents,
  span: [1055, 1092],
  dossier: malikDossier,
  synthesis: { title: B('جمع‌بندی: اوجی که بر یک تن تکیه داشت', 'Synthesis: a peak that rested on one man'), paras: {
    fa: [
      'ملکشاه بزرگ‌ترین قلمرو سلجوقی را ساخت و با نظام‌الملک دو دهه آرامش درونی آورد. ماندگارترین میراث او گاه‌شماری جلالی است، بر پایهٔ رصدهای اصفهان.',
      'از دید دارایی، این آرامش بر اقطاع و غنیمت استوار بود، نه بر حق پایدار. مرگ پیاپی وزیر و سلطان، بی جانشینی روشن، دولت را به بحرانی کشاند که به گفتهٔ دوران‌گدی آن را «برگشت‌ناپذیر» ناتوان کرد.',
    ],
    en: [
      'Malikshah built the largest Seljuk realm and, with Nizam al-Mulk, gave it two decades of internal peace. His most lasting legacy is the Jalali calendar, based on observations made at Isfahan.',
      'Through the lens of property, that peace rested on iqta‘ and booty, not on secure rights. The deaths of vizier and sultan within weeks, with no clear succession, plunged the state into a crisis that, Durand-Guédy says, weakened it “irreversibly”.',
    ],
  }, sources: ['iranica-malekshah', 'iranica-nizam'] },
  sources: malikSources,
  photos: malikPhotos,
  related: [
    { href: { fa: '/dynasty/seljuks', en: '/dynasty/seljuks' }, label: B('دودمان سلجوقی', 'The Seljuk dynasty') },
    { href: { fa: '/king/alp-arslan', en: '/en/king/alp-arslan' }, label: B('آلپ ارسلان و ملازگرد', 'Alp Arslan and Manzikert') },
  ],
  wikipedia: 'https://en.wikipedia.org/wiki/Malik-Shah_I',
}
