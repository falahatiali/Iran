/**
 * Astyages (Babylonian Ištumegu, Iranian *Ṛšti-vaiga-), the last king of the Medes, c. 585–550 BCE.
 * Spine: R. Schmitt, "Astyages" (Encyclopaedia Iranica, 1987/2017) and the Nabonidus Chronicle (ABC 7,
 * tr. A. K. Grayson, as adapted on Livius). Herodotus (tr. A. D. Godley, 1920) is quoted and always labelled,
 * above all the Harpagus story, which Schmitt traces to the Harpagid family in Lycia.
 */
import type { Coord, DossierQuote, DossierSection, FeaturedKing, FeaturedSource } from '../featured/types'
import type { CommonsPhoto } from '../places/types'
import { ev, note, sec } from '../late-achaemenid/common'

const B = (fa: string, en: string) => ({ fa, en })
const ECBATANA: Coord = [48.52, 34.8]
const ANSHAN: Coord = [52.41, 29.99]
const PASARGADAE: Coord = [53.17, 30.2]
const BABYLON: Coord = [44.42, 32.54]
const SARDIS: Coord = [28.04, 38.49]

const HDT = (ch: number) => `https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.01.0126:book=1:chapter=${ch}`
export const astyagesSources: FeaturedSource[] = [
  { id: 'schmitt-ir', author: 'R. Schmitt, Encyclopaedia Iranica', title: 'Astyages', year: '1987, updated 2017', url: 'https://www.iranicaonline.org/articles/astyages/', note: { fa: 'ستون اصلی این صفحه: گزارش هم‌زمان بابلی را از داستان‌های هرودوت و کتسیاس جدا می‌کند و هر دو داوری دربارهٔ منش او را «جانبدارانه» می‌داند.', en: 'The spine of this page: separates the contemporary Babylonian record from the stories of Herodotus and Ctesias, and calls both judgments of his character “biased”.' } },
  { id: 'abc7', author: 'Babylonian chronicle, tr. A. K. Grayson (1975), adapted by J. Lendering', title: 'ABC 7, the Nabonidus Chronicle, Livius.org', year: 'online', url: 'https://www.livius.org/sources/content/mesopotamian-chronicles-content/abc-7-nabonidus-chronicle/', note: { fa: 'گزارش هم‌زمان و کوتاه بابلی از پایان آستیاگ در سال ششم نبونئید (۵۵۰ پ.م.)؛ لوح آسیب دیده است.', en: 'The short contemporary Babylonian record of Astyages’ fall in Nabonidus’ sixth year (550 BCE); the tablet is damaged.' } },
  { id: 'grayson1975', author: 'A. K. Grayson', title: 'Assyrian and Babylonian Chronicles (Texts from Cuneiform Sources V)', year: '1975' },
  { id: 'smith1924', author: 'S. Smith', title: 'Babylonian Historical Texts (Nabonidus cylinder from Abu Habba, col. I 28 f.; Nabonidus Chronicle, col. II 1 f.)', year: '1924', note: { fa: 'به گفتهٔ اشمیت، استوانهٔ نبونئید شورش کوروش را در سال سوم نبونئید (۵۵۳/۵۵۲ پ.م.) می‌گذارد.', en: 'According to Schmitt, the Nabonidus cylinder places Cyrus’ revolt in Nabonidus’ third year (553/552 BCE).' } },
  { id: 'hdt', author: 'Herodotus, tr. A. D. Godley (Loeb, 1920)', title: 'The Histories, book 1, chapters 73–75 and 107–130 (Perseus)', year: '1920', url: HDT(123), note: { fa: 'روایت یونانی که به گفتهٔ اشمیت از گزارش‌های خاندان هارپاگ در لوکیه پیروی می‌کند؛ همه جا با برچسب «به روایت هرودوت».', en: 'A Greek account that, Schmitt says, follows the stories of the Harpagid family in Lycia; always labelled “according to Herodotus”.' } },
]
export const astyagesSourceIds = new Set(astyagesSources.map((s) => s.id))

const t = (path: string) => `https://upload.wikimedia.org/wikipedia/commons/thumb/${path}`
const f = (name: string) => `https://commons.wikimedia.org/wiki/File:${name}`
/** Licence and author read from the Commons API on 2026-10-31. */
export const astyagesPhotos: CommonsPhoto[] = [
  { id: 'chronicle', src: t('0/0e/Nabonidus_chronicle.jpg/960px-Nabonidus_chronicle.jpg'), page: f('Nabonidus_chronicle.jpg'), author: 'ChrisO', license: 'CC BY-SA 3.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0', caption: B('تاریخ‌نامهٔ نبونئید در موزهٔ بریتانیا؛ گزارش هم‌زمان پایان آستیاگ', 'The Nabonidus Chronicle in the British Museum, the contemporary record of Astyages’ fall') },
  { id: 'hegmataneh', src: t('a/a5/Iran_-_Hamadan_-_Hegmataneh_-_%28Ecbatana%29_-_panoramio.jpg/960px-Iran_-_Hamadan_-_Hegmataneh_-_%28Ecbatana%29_-_panoramio.jpg'), page: f('Iran_-_Hamadan_-_Hegmataneh_-_(Ecbatana)_-_panoramio.jpg'), author: 'Alireza Javaheri', license: 'CC BY 3.0', licenseUrl: 'https://creativecommons.org/licenses/by/3.0', caption: B('تپهٔ هگمتانه در همدان، «شهر شاهی» که به گفتهٔ تاریخ‌نامه کوروش گنجش را برد', 'The Hegmataneh mound in Hamadan, the “royal city” whose treasure, the chronicle says, Cyrus carried off') },
  { id: 'pasargadae', src: t('3/3a/Pasargadae%2C_Ir%C3%A1n%2C_2016-09-24%2C_DD_11.jpg/960px-Pasargadae%2C_Ir%C3%A1n%2C_2016-09-24%2C_DD_11.jpg'), page: f('Pasargadae,_Irán,_2016-09-24,_DD_11.jpg'), author: 'Diego Delso', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0', caption: B('پاسارگاد در فارس. به روایت نیکلائوس دمشقی و یوستینوس، نبرد پایانی نزدیک این جا بود.', 'Pasargadae in Fars. According to Nicolaus of Damascus and Justin, the final battle was fought near here.') },
]

const hdtOnly = note('تنها روایت هرودوت است. اشمیت می‌گوید او از گزارش‌های خاندان هارپاگ پیروی می‌کند و کودکی کوروش را «بسیار خیالی» وصف می‌کند.', 'Only Herodotus tells this. Schmitt says he follows the stories of the Harpagid family and describes Cyrus’ childhood “in a very fantastic way”.')
const place = note('تاریخ‌نامه جای شورش سپاه را نمی‌گوید. نیکلائوس دمشقی و یوستینوس از سه نبرد می‌گویند و نبرد سوم را در کوه‌های نزدیک پاسارگاد می‌گذارند؛ نقطه بر پایهٔ این روایت پسین است.', 'The chronicle does not say where the army mutinied. Nicolaus of Damascus and Justin speak of three battles and place the third in the mountains near Pasargadae; the point follows that later tradition.')

export const astyagesEvents = [
  ev('accession', -585, B('۵۸۵/۵۸۴ پ.م.', '585/584 BCE'), 'admin', ECBATANA, B('شاه ماد', 'King of the Medes'), B('پسر هووخشتره پس از مرگ پدر شاه شد. هرودوت ۳۵ سال پادشاهی برایش می‌شمارد؛ اشمیت آن را «احتمالاً ۵۸۴–۵۵۰» می‌داند.', 'The son of Cyaxares became king on his father’s death. Herodotus gives him 35 years; Schmitt puts the reign at “probably 584–550”.'), 'probable', ['schmitt-ir', 'hdt'], note('سال آغاز از ۳۵ سال هرودوت شمرده شده است.', 'The first year is counted from Herodotus’ 35 years.')),
  ev('aryenis', -585, B('۵۸۵ پ.م.', '585 BCE'), 'admin', SARDIS, B('ازدواج با آرینیس، به روایت هرودوت', 'Marriage to Aryenis, according to Herodotus'), B('به روایت هرودوت، با صلح ماد و لیدی، آرینیس، دختر آلیاتس شاه لیدی، به همسری آستیاگ درآمد و او برادرزن کرزوس شد.', 'According to Herodotus, with the peace between Media and Lydia, Aryenis, daughter of Alyattes of Lydia, was married to Astyages, who thus became brother-in-law of Croesus.'), 'probable', ['hdt', 'schmitt-ir'], note('تنها روایت هرودوت است؛ اشمیت آن را بی‌نقد بازمی‌گوید.', 'Only Herodotus tells this; Schmitt reports it without objection.')),
  ev('revolt', -553, B('۵۵۳/۵۵۲ پ.م.', '553/552 BCE'), 'campaign', ANSHAN, B('شورش کوروش', 'Cyrus rises'), B('به گواهی استوانهٔ نبونئید، در سال سوم نبونئید، کوروش «شاه انشان»، دست‌نشاندهٔ آستیاگ، بر سرور خود شورید.', 'According to the Nabonidus cylinder, in Nabonidus’ third year Cyrus, “king of Anshan” and vassal of Astyages, rose against his lord.'), 'secure', ['smith1924', 'schmitt-ir']),
  ev('harpagus', -550, B('پیش از ۵۵۰ پ.م.', 'before 550 BCE'), 'admin', ECBATANA, B('هارپاگ، به روایت هرودوت', 'Harpagus, according to Herodotus'), B('به روایت هرودوت، هارپاگ، سردار ماد، کینهٔ آستیاگ را به دل داشت. بزرگان ماد را با خود همراه کرد و در شکم یک خرگوش نامه‌ای برای کوروش فرستاد. سپس آستیاگ او را فرمانده سپاه کرد و او به کوروش پیوست.', 'According to Herodotus, Harpagus, a Median general, bore a grudge against Astyages. He won over the Median nobles and sent Cyrus a letter hidden in a hare. Astyages then made him commander of the army, and he went over to Cyrus.'), 'disputed', ['hdt', 'schmitt-ir'], hdtOnly),
  ev('march', -550, B('۵۵۰ پ.م.', '550 BCE'), 'campaign', PASARGADAE, B('لشکرکشی و شورش سپاه', 'The march and the mutiny'), B('تاریخ‌نامهٔ نبونئید: آستیاگ سپاه گرد آورد و به جنگ کوروش، شاه انشان، رفت. سپاه بر او شورید، او را گرفتند و به کوروش سپردند.', 'The Nabonidus Chronicle: Astyages mustered his army and marched against Cyrus, king of Anshan. The army rebelled against him; he was taken prisoner and handed over to Cyrus.'), 'secure', ['abc7', 'schmitt-ir'], { route: [ECBATANA, [50.5, 32.5], PASARGADAE], ...note('رویداد در تاریخ‌نامه است؛ جای آن و راه طرح‌وار است.', 'The event is in the chronicle; its place and the route are sketches.') }),
  ev('ecbatana', -550, B('۵۵۰ پ.م.', '550 BCE'), 'battle', ECBATANA, B('کوروش در هگمتانه', 'Cyrus in Ecbatana'), B('کوروش به هگمتانه، «شهر شاهی»، رفت و سیم، زر، کالا و دارایی آن را به غنیمت به انشان برد.', 'Cyrus went to Ecbatana, “the royal city”, and carried off its silver, gold, goods and property as booty to Anshan.'), 'secure', ['abc7', 'schmitt-ir'], { route: [PASARGADAE, ECBATANA] }),
]

const camp = note('تاریخ‌نامه راه‌ها را نمی‌گوید؛ خط‌ها طرح‌وارند.', 'The chronicle gives no routes; the lines are sketches.')
const campaignEvents = [
  ev('c-anshan', -553, B('۵۵۳/۵۵۲ پ.م.', '553/552 BCE'), 'campaign', ANSHAN, B('انشان: کوروش می‌شورد', 'Anshan: Cyrus rises'), B('کوروش، شاه انشان و دست‌نشاندهٔ ماد، بر آستیاگ می‌شورد (استوانهٔ نبونئید).', 'Cyrus, king of Anshan and a Median vassal, rises against Astyages (Nabonidus cylinder).'), 'secure', ['smith1924', 'schmitt-ir']),
  ev('c-march', -550, B('۵۵۰ پ.م.', '550 BCE'), 'campaign', [50.5, 32.5], B('آستیاگ به جنوب می‌تازد', 'Astyages marches south'), B('آستیاگ سپاه گرد می‌آورد و از هگمتانه به جنگ کوروش می‌رود.', 'Astyages musters his army and marches from Ecbatana against Cyrus.'), 'secure', ['abc7'], { route: [ECBATANA, [50.5, 32.5]], ...camp }),
  ev('c-mutiny', -550, B('۵۵۰ پ.م.', '550 BCE'), 'battle', PASARGADAE, B('سپاه می‌شورد', 'The army mutinies'), B('سپاه بر آستیاگ می‌شورد، او را می‌گیرد و به کوروش می‌سپارد.', 'The army rebels against Astyages, takes him prisoner and hands him over to Cyrus.'), 'probable', ['abc7', 'schmitt-ir'], { route: [[50.5, 32.5], PASARGADAE], ...place }),
  ev('c-ecbatana', -550, B('۵۵۰ پ.م.', '550 BCE'), 'battle', ECBATANA, B('هگمتانه گشوده می‌شود', 'Ecbatana taken'), B('کوروش به «شهر شاهی» هگمتانه می‌رود.', 'Cyrus goes to Ecbatana, “the royal city”.'), 'secure', ['abc7'], { route: [PASARGADAE, ECBATANA] }),
  ev('c-booty', -550, B('۵۵۰ پ.م.', '550 BCE'), 'campaign', ANSHAN, B('گنج به انشان', 'The treasure to Anshan'), B('سیم، زر، کالا و دارایی هگمتانه به انشان برده می‌شود.', 'The silver, gold, goods and property of Ecbatana are carried to Anshan.'), 'secure', ['abc7'], { route: [ECBATANA, [50.0, 32.0], ANSHAN] }),
]

const chronQuote: DossierQuote = { text: 'Astyages mustered (his army) and marched against Cyrus, king of Anšan, for conquest [...] The army rebelled against Astyages and he was taken prisoner. Th[ey handed him over] to Cyrus.', fa: 'آستیاگ (سپاهش را) گرد آورد و برای کشورگشایی به جنگ کوروش، شاه انشان، رفت […] سپاه بر آستیاگ شورید و او اسیر شد. [او را] به کوروش [سپردند].', ref: 'Nabonidus Chronicle (ABC 7) ii.1–2, tr. A. K. Grayson, adapted on Livius', source: 'abc7' }
const bootyQuote: DossierQuote = { text: 'Cyrus to Ecbatana, the royal city. The silver, gold, goods, property, [...] which he carried off as booty (from) Ecbatana, he took to Anšan.', fa: 'کوروش به هگمتانه، شهر شاهی [رفت]. سیم، زر، کالا، دارایی […] را که از هگمتانه به غنیمت گرفت، به انشان برد.', ref: 'Nabonidus Chronicle (ABC 7) ii.3–4, tr. A. K. Grayson, adapted on Livius', source: 'abc7' }
const harpagusQuote: DossierQuote = { text: 'since Astyages was harsh toward the Medes, he associated with each of the chief Medes and persuaded them to make Cyrus their leader and depose Astyages.', fa: 'چون آستیاگ با مادها سخت‌گیر بود، (هارپاگ) با یکایک بزرگان ماد همنشین شد و آنان را قانع کرد که کوروش را پیشوای خود کنند و آستیاگ را برکنار کنند.', ref: 'Herodotus 1.123.2, tr. A. D. Godley (1920)', source: 'hdt' }
const freedomQuote: DossierQuote = { text: 'The Persians had long been discontent that the Medes ruled them, and now having got a champion they were glad to win their freedom.', fa: 'پارسیان دیرزمانی از فرمانروایی مادها ناخشنود بودند و اکنون که پیشوایی یافته بودند، شادمانه آزادی خود را به دست آوردند.', ref: 'Herodotus 1.127.1, tr. A. D. Godley (1920)', source: 'hdt' }
const endQuote: DossierQuote = { text: 'As for Astyages, Cyrus did him no further harm, and kept him in his own house until Astyages died.', fa: 'اما آستیاگ را کوروش دیگر آزاری نرساند و تا هنگام مرگش او را در خانهٔ خود نگه داشت.', ref: 'Herodotus 1.130.3, tr. A. D. Godley (1920)', source: 'hdt' }

export const astyagesDossier: DossierSection[] = [
  sec('sources', 'منابع: یک لوح بابلی و دو داستان یونانی', 'Sources: a Babylonian tablet and two Greek stories',
    [['گزارش هم‌زمان پایان آستیاگ در دو متن نبونئید، شاه بابل، آمده است: تاریخ‌نامهٔ نبونئید و استوانه‌ای از ابوحبه (سیپار). هر دو بسیار کوتاه‌اند. داستان‌های بلند را هرودوت و کتسیاس آورده‌اند.'], ['The contemporary record of Astyages’ fall is in two texts of Nabonidus, king of Babylon: the Nabonidus Chronicle and a cylinder from Abu Habba (Sippar). Both are very short. The long stories come from Herodotus and Ctesias.']],
    [['اشمیت می‌گوید منابع کهن «تقریباً هیچ» دربارهٔ پادشاهی آستیاگ نمی‌گویند. هرودوت او را ستمگر نشان می‌دهد و کتسیاس با او همدل است؛ اشمیت هر دو را «جانبدارانه» می‌داند و می‌گوید داوری نهایی دربارهٔ منش او ممکن نیست.'], ['Schmitt says the ancient sources report “almost nothing” about Astyages’ reign. Herodotus shows him as a tyrant and Ctesias is sympathetic; Schmitt calls both “biased” and says a final judgment on his character is not possible.']],
    [['از ۳۵ سال پادشاهی، تنها پایانش را از یک سند هم‌زمان می‌دانیم. آستیاگ را بیشتر با شکستش می‌شناسیم.'], ['Of a 35-year reign, we know only its end from a contemporary document. Astyages is known mostly by his defeat.']],
    ['abc7', 'smith1924', 'schmitt-ir', 'hdt'], { photos: ['chronicle'] }),
  sec('life', 'زندگی و پادشاهی به ترتیب', 'Life and reign in order',
    [[
      '۱. پسر هووخشتره؛ پس از مرگ پدر در ۵۸۵/۵۸۴ پ.م. شاه شد.',
      '۲. به روایت هرودوت با آرینیس، دختر شاه لیدی، ازدواج کرد.',
      '۳. به روایت هرودوت، دخترش ماندانا همسر کمبوجیهٔ پارسی و مادر کوروش شد.',
      '۴. در ۵۵۳/۵۵۲ پ.م. کوروش، شاه انشان، بر او شورید (استوانهٔ نبونئید).',
      '۵. در ۵۵۰ پ.م. به جنگ کوروش رفت؛ سپاهش شورید و او را به کوروش سپرد (تاریخ‌نامهٔ نبونئید).',
      '۶. کوروش هگمتانه را گرفت و گنجش را به انشان برد.',
      '۷. به روایت هرودوت، کوروش تا پایان عمر او را در خانهٔ خود نگه داشت.',
    ], [
      '1. Son of Cyaxares; became king on his father’s death in 585/584 BCE.',
      '2. According to Herodotus he married Aryenis, daughter of the king of Lydia.',
      '3. According to Herodotus his daughter Mandane married the Persian Cambyses and was the mother of Cyrus.',
      '4. In 553/552 BCE Cyrus, king of Anshan, rose against him (Nabonidus cylinder).',
      '5. In 550 BCE he marched against Cyrus; his army mutinied and handed him over to Cyrus (Nabonidus Chronicle).',
      '6. Cyrus took Ecbatana and carried its treasure to Anshan.',
      '7. According to Herodotus, Cyrus kept him in his own house for the rest of his life.',
    ]],
    [['نام او در بابلی ایشتومگو است. اشمیت آن را از ایرانی *رِشتی‌وَیگه، «نیزه‌افکن»، می‌داند؛ شکل یونانی «آستواگس» با ریشه‌شناسی عامیانه دگرگون شده است.'], ['His Babylonian name is Ištumegu. Schmitt derives it from Iranian *Ṛšti-vaiga-, “lance-hurler”; the Greek form Astyages was reshaped by popular etymology.']],
    [['پیوندهای خانوادگی ماد، لیدی و پارس را به هم بسته بود؛ پایان آستیاگ نشان داد که خویشاوندی جای وفاداری سپاه را نمی‌گیرد.'], ['Family ties bound Media, Lydia and Persia together; Astyages’ end showed that kinship does not replace an army’s loyalty.']],
    ['schmitt-ir', 'abc7', 'smith1924', 'hdt']),
  sec('fall', 'پایان ماد: آنچه لوح بابلی می‌گوید', 'The end of Media: what the Babylonian tablet says',
    [['تاریخ‌نامهٔ نبونئید در سال ششم نبونئید (۵۵۰ پ.م.) می‌گوید آستیاگ به جنگ کوروش رفت، سپاهش شورید، او را اسیر کردند و به کوروش سپردند. سپس کوروش به هگمتانه رفت و غنیمت را به انشان برد. استوانهٔ نبونئید آغاز شورش کوروش را سه سال پیش‌تر می‌گذارد.'], ['The Nabonidus Chronicle, under Nabonidus’ sixth year (550 BCE), says Astyages marched against Cyrus, his army rebelled, he was taken prisoner and handed over to Cyrus. Then Cyrus went to Ecbatana and took the booty to Anshan. The Nabonidus cylinder places the start of Cyrus’ revolt three years earlier.']],
    [['نیکلائوس دمشقی (به پیروی از کتسیاس) و یوستینوس از سه نبرد می‌گویند: کوروش دو بار شکست خورد و در نبرد سوم، در کوه‌های نزدیک پاسارگاد، پیروز شد. تاریخ‌نامه از این نبردها چیزی نمی‌گوید، تنها از شورش سپاه. اشمیت می‌گوید با گشوده شدن هگمتانه، ماد دیگر کشوری مستقل و پیشرو نبود.'], ['Nicolaus of Damascus (following Ctesias) and Justin speak of three battles: Cyrus was defeated twice and won the third, in the mountains near Pasargadae. The chronicle says nothing of these battles, only of the army’s mutiny. Schmitt says that with the fall of Ecbatana, Media ceased to be an independent and leading nation.']],
    [['امپراتوری ماد نه با یک شکست بزرگ، بلکه با برگشتن سپاه خودش پایان یافت.'], ['The Median empire ended not with a great defeat but with its own army turning.']],
    ['abc7', 'smith1924', 'schmitt-ir', 'grayson1975'], { photos: ['pasargadae'], quotes: [chronQuote] }),
  sec('harpagus', 'هارپاگ و کودکی کوروش: روایت هرودوت', 'Harpagus and Cyrus’ childhood: Herodotus’ story',
    [['به روایت هرودوت، آستیاگ خوابی دید و فرمان داد نوزاد دخترش، کوروش، را بکشند. هارپاگ این کار را به چوپانی سپرد که کودک را زنده نگه داشت. آستیاگ پس از آگاهی، هارپاگ را سخت کیفر داد. هارپاگ سال‌ها بعد بزرگان ماد را با کوروش همراه کرد و در نبرد به او پیوست.'], ['According to Herodotus, Astyages had a dream and ordered his daughter’s infant, Cyrus, to be killed. Harpagus handed the task to a herdsman, who kept the child alive. When Astyages learned of it, he punished Harpagus terribly. Years later Harpagus won the Median nobles over to Cyrus and joined him in battle.']],
    [['اشمیت می‌گوید هرودوت در این بخش از گزارش‌های هارپاگیان، نوادگان هارپاگ در لوکیه، پیروی کرده و کودکی کوروش را «بسیار خیالی» وصف می‌کند. نیکلائوس دمشقی همین نقش را به یک پارسی به نام اویبارس می‌دهد. پس داستان هارپاگ داستان یک خاندان دربارهٔ نیای خودش است، نه گزارش بی‌طرف.'], ['Schmitt says Herodotus here followed the stories of the Harpagids, Harpagus’ descendants in Lycia, and describes Cyrus’ childhood “in a very fantastic way”. Nicolaus of Damascus gives the same role to a Persian named Oebaras. So the Harpagus story is a family’s tale about its own ancestor, not a neutral report.']],
    [['با این همه، داستان هرودوت با لوح بابلی در یک نکته هم‌صداست: سپاه ماد خود آستیاگ را رها کرد.'], ['Even so, Herodotus’ story agrees with the Babylonian tablet on one point: the Median army itself abandoned Astyages.']],
    ['hdt', 'schmitt-ir'], { quotes: [harpagusQuote] }),
  sec('property', 'دارایی و آزادی: گنج هگمتانه و «آزادی» پارسیان', 'Property and liberty: the treasure of Ecbatana and Persian “freedom”',
    [['تاریخ‌نامهٔ بابلی فهرست می‌دهد: سیم، زر، کالا و دارایی هگمتانه به انشان رفت. هرودوت همان رویداد را از دید پارسیان می‌گوید: آنان از فرمانروایی ماد ناخشنود بودند و «آزادی خود را به دست آوردند».'], ['The Babylonian chronicle gives a list: the silver, gold, goods and property of Ecbatana went to Anshan. Herodotus tells the same event from the Persian side: they were discontent with Median rule and “won their freedom”.']],
    [['این خوانش ماست: یک رویداد دو چهره دارد. برای پارسیان رهایی از فرمانروایی دیگران بود؛ برای مردم هگمتانه، دارایی‌شان غنیمت دیگری شد. همان گنجی که به گفتهٔ دیاکونوف از غارت نینوا به ماد آمده بود، اکنون به پارس رفت.'], ['This is our reading: one event has two faces. For the Persians it was freedom from rule by others; for the people of Ecbatana, their property became someone else’s booty. The treasure that, in Diakonoff’s account on our Cyaxares page, came to Media from the sack of Nineveh now went to Persia.']],
    [['«آزادی» یک ملت از ملت دیگر با آزادی و امنیت دارایی تک‌تک مردم یکی نیست. این تمایز از همان آغاز تاریخ ایران پیداست.'], ['One nation’s “freedom” from another is not the same as the liberty and secure property of each person. The distinction is visible from the very start of Iranian history.']],
    ['abc7', 'hdt', 'schmitt-ir'], { photos: ['hegmataneh'], quotes: [bootyQuote, freedomQuote] }),
  sec('family', 'خانواده و سرانجام', 'Family and fate',
    [[
      'پدر: هووخشتره، شاه ماد.',
      'همسر: آرینیس، دختر آلیاتس لیدی (روایت هرودوت).',
      'دختر: ماندانا، همسر کمبوجیه و مادر کوروش (روایت هرودوت).',
      'سرانجام: به روایت هرودوت، کوروش او را آزار نداد و تا مرگ در خانهٔ خود نگه داشت. به روایت کتسیاس، او را از برکانیه، که شاید در آن ساتراپ بود، به دربار می‌آوردند که اویبارس، خدمتکار کوروش، بی‌آگاهی شاه او را کشت.',
    ], [
      'Father: Cyaxares, king of the Medes.',
      'Wife: Aryenis, daughter of Alyattes of Lydia (Herodotus’ account).',
      'Daughter: Mandane, wife of Cambyses and mother of Cyrus (Herodotus’ account).',
      'Fate: according to Herodotus, Cyrus did him no harm and kept him in his own house until his death. According to Ctesias, he was being brought to court from Barcania, where he had perhaps been satrap, when Cyrus’ servant Oebaras killed him without the king’s knowledge.',
    ]],
    [['اینکه کوروش نوهٔ دختری آستیاگ بود، تنها از هرودوت است و سند هم‌زمانی آن را تأیید نمی‌کند. اشمیت گزارش کتسیاس دربارهٔ آستیاگ را «در کل بسیار نامعتبر» می‌داند.'], ['That Cyrus was Astyages’ grandson comes only from Herodotus, and no contemporary document confirms it. Schmitt calls Ctesias’ account of Astyages “on the whole very unreliable”.']],
    [['در هر دو روایت، شاه شکست‌خورده کشته نمی‌شود، دست‌کم به فرمان پیروز.'], ['In both accounts the defeated king is not put to death, at least not on the victor’s orders.']],
    ['hdt', 'schmitt-ir'], { quotes: [endQuote] }),
]

export const astyages: FeaturedKing = {
  slug: 'astyages',
  name: B('ایشتوویگو (آستیاگ)', 'Astyages'),
  dynastyName: B('ماد', 'The Medes'),
  reign: B('حدود ۵۸۵–۵۵۰ پ.م.', 'c. 585–550 BCE'),
  title: B('آستیاگ؛ واپسین شاه ماد', 'Astyages: the last king of the Medes'),
  lede: B(
    'پسر هووخشتره و واپسین شاه ماد. از ۳۵ سال پادشاهی‌اش تنها پایانش را از سندی هم‌زمان می‌دانیم: به گواهی تاریخ‌نامهٔ نبونئید، در ۵۵۰ پ.م. به جنگ کوروش رفت، سپاهش شورید و او را به کوروش سپرد. داستان هارپاگ و کودکی کوروش از هرودوت است و با برچسب آمده است. لشکرکشی را روی نقشهٔ متحرک دنبال کنید.',
    'The son of Cyaxares and the last king of the Medes. Of his 35-year reign we know only the end from a contemporary document: according to the Nabonidus Chronicle, in 550 BCE he marched against Cyrus, his army mutinied and handed him over to Cyrus. The story of Harpagus and Cyrus’ childhood is Herodotus’ and is labelled as such. Follow the campaign on the animated map.',
  ),
  stats: [
    { n: B('۳۵ سال', '35 years'), l: B('پادشاهی، به روایت هرودوت', 'reign, per Herodotus') },
    { n: B('۵۵۰', '550'), l: B('پایان ماد (پ.م.)', 'end of Media (BCE)') },
    { n: B('۳ سال', '3 years'), l: B('از شورش کوروش تا پایان', 'from Cyrus’ revolt to the end') },
    { n: B('انشان', 'Anshan'), l: B('جایی که گنج هگمتانه رفت', 'where Ecbatana’s treasure went') },
  ],
  mapTitle: B('نقشهٔ متحرک: زندگی و پادشاهی', 'Animated map: life and reign'),
  events: astyagesEvents,
  span: [-585, -550],
  campaign: {
    id: 'revolt',
    title: B('شورش کوروش و پایان ماد (۵۵۳–۵۵۰ پ.م.)', 'Cyrus’ revolt and the end of Media (553–550 BCE)'),
    intro: { fa: ['از انشان تا هگمتانه و بازگشت گنج به انشان. گام‌ها از تاریخ‌نامه و استوانهٔ نبونئید است؛ جای شورش سپاه از روایت پسین و راه‌ها طرح‌وارند.'], en: ['From Anshan to Ecbatana and the treasure’s return to Anshan. The steps are from the Nabonidus Chronicle and cylinder; the place of the mutiny follows a later tradition and the routes are sketches.'] },
    events: campaignEvents, span: [-553, -550], view: [43.4, 28.6, 55.6, 35.4],
    places: [
      { name: B('هگمتانه', 'Ecbatana'), c: ECBATANA }, { name: B('انشان', 'Anshan'), c: ANSHAN, left: true },
      { name: B('پاسارگاد', 'Pasargadae'), c: PASARGADAE }, { name: B('بابل', 'Babylon'), c: BABYLON },
    ],
    clip: { gif: B('/media/astyages/revolt-fa.gif', '/media/astyages/revolt-en.gif'), mp4: B('/media/astyages/revolt-fa.mp4', '/media/astyages/revolt-en.mp4'), webm: B('/media/astyages/revolt-fa.webm', '/media/astyages/revolt-en.webm'), poster: B('/media/astyages/revolt-fa.png', '/media/astyages/revolt-en.png'), width: 958, height: 356 },
  },
  shareImage: '/media/astyages/revolt-en.png',
  dossier: astyagesDossier,
  synthesis: { title: B('جمع‌بندی: شاهی که سپاهش او را رها کرد', 'Synthesis: a king abandoned by his army'), paras: {
    fa: [
      'آستیاگ را بیشتر از روی داستان‌ها می‌شناسیم: خواب‌ها، نوزاد رهاشده و انتقام هارپاگ از هرودوت است و اشمیت آن را جانبدارانه می‌داند. آنچه سند هم‌زمان می‌گوید کوتاه و روشن است: سپاهش بر او شورید و کوروش هگمتانه را گرفت.',
      'از دید مالکیت، پایان ماد جابه‌جایی گنج بود: سیم و زر هگمتانه به انشان رفت. «آزادی» پارسیان از ماد، برای مردم هگمتانه از دست رفتن دارایی بود. آزادی یک ملت و امنیت دارایی مردم دو چیز جدا هستند.',
    ],
    en: [
      'We know Astyages mostly through stories: the dreams, the abandoned infant and Harpagus’ revenge come from Herodotus, and Schmitt calls them biased. What the contemporary document says is short and clear: his army rebelled against him and Cyrus took Ecbatana.',
      'Through the lens of property, the end of Media was a transfer of treasure: the silver and gold of Ecbatana went to Anshan. The Persians’ “freedom” from Media meant the loss of property for the people of Ecbatana. A nation’s freedom and the security of people’s property are two different things.',
    ],
  }, sources: ['abc7', 'schmitt-ir', 'hdt'] },
  sources: astyagesSources,
  photos: astyagesPhotos,
  related: [
    { href: { fa: '/king/cyaxares', en: '/en/king/cyaxares' }, label: B('هووخشتره، پدرش', 'Cyaxares, his father') },
    { href: { fa: '/king/cyrus-ii', en: '/king/cyrus-ii' }, label: B('کوروش بزرگ', 'Cyrus the Great') },
    { href: { fa: '/dynasty/medes', en: '/dynasty/medes' }, label: B('دودمان ماد', 'The Median dynasty') },
  ],
  wikipedia: 'https://en.wikipedia.org/wiki/Astyages',
}
