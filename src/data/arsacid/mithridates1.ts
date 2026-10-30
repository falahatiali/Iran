/**
 * Mithridates I (c. 171–132 BCE; Assar c. 165–132): from a regional kingdom to an empire.
 * Spine: Justin 41.6, Strabo 11.9.2, Iranica (Schippmann), Olbrycht 2010, the Babylonian diaries.
 */
import type { Bi, FeaturedKing, MapEvent } from '../featured/types'
import {
  ARIA, ASSAR, BABYLON, BISOTUN, ECBATANA, ELYMAIS, HECATOMPYLUS, HYRCANIA, MERV, NISA, PAR, RHAGAE, SELEUCIA, SUSA, URUK,
  clipFor, ev, note, photos, pick, related, sec,
} from './common'

const B = (fa: string, en: string): Bi => ({ fa, en })
const DATES = ASSAR('سنت پادشاهی او را حدود ۱۷۱–۱۳۸ پ.م. می‌گذارد (ایرانیکا: ۱۷۱–۱۳۹/۱۳۸)؛ آسار (۲۰۰۶) بر پایهٔ لوح‌های بابلی و سکه‌ها ۱۶۵–۱۳۲.', 'tradition puts his reign at c. 171–138 BCE (Iranica: 171–139/8); Assar (2006), from Babylonian tablets and coins, at 165–132.')

const media: MapEvent = ev('media', -148, B('نیمهٔ دوم ۱۴۸ پ.م.', 'second half of 148 BCE'), 'campaign', ECBATANA, B('گشودن ماد', 'The conquest of Media'), B('پس از جنگی با فراز و نشیب، ماد به دست پارتیان افتاد و مهرداد مردی به نام بغاسیس (یوستینوس: «بوکاسیس») را بر آن گماشت. کتیبه‌ای یونانی در بیستون با تاریخ ژوئن ۱۴۸ هنوز از یک فرماندار سلوکی نام می‌برد؛ پس گشایش ماد پس از آن بود.', 'After a war of shifting fortunes, Media fell to the Parthians and Mithridates set one Bagasis (Justin: “Bocasis”) over it. A Greek inscription at Bisotun dated June 148 still names a Seleucid governor, so the conquest came after that.'), 'probable', ['justin', 'ir-arsacids', 'olbrycht2010'], { route: [HECATOMPYLUS, RHAGAE, ECBATANA] })
const bisotun: MapEvent = ev('bisotun', -148, B('ژوئن ۱۴۸ پ.م.', 'June 148 BCE'), 'admin', BISOTUN, B('آخرین نشان سلوکی در ماد', 'The last Seleucid sign in Media'), B('نقش هراکلس خفته در بیستون با کتیبه‌ای یونانی که به نام یک فرماندار سلوکی است و تاریخ ژوئن ۱۴۸ پ.م. را دارد: آخرین گواه فرمانروایی سلوکی در ماد.', 'The reclining Heracles at Bisotun carries a Greek inscription in the name of a Seleucid governor dated June 148 BCE: the last evidence of Seleucid rule in Media.'), 'secure', ['ir-arsacids'])
const seleucia: MapEvent = ev('seleucia', -141, B('تابستان ۱۴۱ پ.م.', 'summer 141 BCE'), 'campaign', SELEUCIA, B('تاج در سلوکیه', 'Crowned at Seleucia'), B('مهرداد به میان‌رودان آمد و در سلوکیهٔ دجله، بزرگ‌ترین شهر یونانی شرق، به شاهی شناخته شد. سکه‌های چهاردرهمی یونانی‌سبک به نامش از ضرابخانهٔ همین شهر بیرون آمد.', 'Mithridates entered Mesopotamia and was recognised as king at Seleucia-on-the-Tigris, the greatest Greek city of the east. Greek-style tetradrachms in his name were struck at its mint.'), 'secure', ['ir-arsacids', 'diaries', 'sellwood'], { route: [ECBATANA, BISOTUN, SELEUCIA] })
const uruk: MapEvent = ev('uruk', -141, B('۱۲ اکتبر ۱۴۱ پ.م.', '12 October 141 BCE'), 'admin', URUK, B('اوروک او را می‌شناسد', 'Uruk recognises him'), B('یک متن میخی از اوروک، به تاریخ ۱۲ اکتبر ۱۴۱، با سال پادشاهی ارشک تاریخ خورده است: نشان آنکه کاتبان و دادگاه‌های بابل شاه تازه را پذیرفتند.', 'A cuneiform text from Uruk dated 12 October 141 is dated by the regnal year of Arsaces: a sign that Babylonia’s scribes and courts accepted the new king.'), 'secure', ['ir-arsacids', 'diaries'], { route: [SELEUCIA, BABYLON, URUK] })
const demetrius: MapEvent = ev('demetrius', -138, B('۱۳۹/۱۳۸ پ.م.', '139/138 BCE'), 'battle', ECBATANA, B('اسارت دمتریوس دوم', 'Demetrius II captured'), B('دمتریوس دوم سلوکی برای پس‌گرفتن شرق آمد و شکست خورد و اسیر شد. مهرداد او را به هیرکانی فرستاد و دخترش رودوگونه را به همسری‌اش داد.', 'The Seleucid Demetrius II came to recover the east, was defeated and captured. Mithridates sent him to Hyrcania and gave him his daughter Rhodogune in marriage.'), 'probable', ['ir-arsacids', 'justin'], { route: [SELEUCIA, ECBATANA, HYRCANIA] })
const elymais: MapEvent = ev('elymais', -138, B('حدود ۱۳۸ پ.م.', 'c. 138 BCE'), 'campaign', SUSA, B('الیمائیس', 'Elymais'), B('یوستینوس: «با شاه الیمائیان جنگید و او را شکست داد و این قوم را هم به قلمرو خود افزود». شوش و معابد ثروتمند الیمائیس به دست پارتیان افتاد.', 'Justin: “he went to war with the king of the Elymaeans, and having conquered him, added this nation also to his dominions.” Susa and the rich temples of Elymais fell to the Parthians.'), 'probable', ['justin', 'ir-arsacids'], { route: [SELEUCIA, SUSA, ELYMAIS] })

const campaign: MapEvent[] = [bisotun, media, seleucia, uruk, demetrius, elymais]

const events: MapEvent[] = [
  ev('accession', -171, B('حدود ۱۷۱ پ.م. (آسار: ۱۶۵)', 'c. 171 BCE (Assar: 165)'), 'admin', NISA, B('برادر فرهاد بر تخت', 'Phraates’ brother on the throne'), B('فرهاد یکم پسران خود را کنار گذاشت و تخت را به برادرش مهرداد، «مردی با توانایی شگفت»، داد (یوستینوس ۴۱.۵.۱۰).', 'Phraates I passed over his sons and left the throne to his brother Mithridates, “a man of extraordinary ability” (Justin 41.5.10).'), 'disputed', ['justin', 'assar', 'ir-arsacids'], DATES),
  ev('east', -160, B('حدود ۱۶۳–۱۵۵ پ.م.', 'c. 163–155 BCE'), 'campaign', ARIA, B('هرات و مرو از باختر', 'Aria and Margiana from Bactria'), B('نخستین جنگ‌ها احتمالاً با پادشاهی یونانی‌باختری اوکراتیدس بود. استرابون می‌گوید پارتیان «اوکراتیداس را… به زور سلاح از بخشی از باختر محروم کردند». آریا (هرات) و مرگیانه (مرو) را پارتی می‌کنند.', 'The first wars were probably with the Greco-Bactrian kingdom of Eucratides. Strabo says the Parthians “deprived Eucratidas… by force of arms, of a part of Bactriana”. Aria (Herat) and Margiana (Merv) are made Parthian.'), 'disputed', ['strabo', 'ir-arsacids', 'olbrycht2010'], { route: [HECATOMPYLUS, MERV, ARIA], ...note('تاریخ و گستره محل بحث است: ایرانیکا ۱۶۰–۱۵۵، اولبریشت ۱۶۳–۱۵۵. ایرانیکا احتمال می‌دهد هدف نخست دفاع از نسا بود.', 'Date and extent are disputed: Iranica 160–155, Olbrycht 163–155. Iranica suggests the first aim may have been defending Nisa.') }),
  bisotun, media,
  seleucia, uruk,
  ev('nomads', -140, B('حدود ۱۴۰ پ.م.', 'c. 140 BCE'), 'battle', MERV, B('بازگشت به شرق', 'Back to the east'), B('مهرداد پس از بابل به هیرکانی و شرق رفت (یوستینوس ۴۱.۶.۸) و به گفتهٔ ایرانیکا هجوم کوچ‌نشینان، شاید سکاها، را پس راند.', 'After Babylonia Mithridates went to Hyrcania and the east (Justin 41.6.8) and, Iranica says, repulsed a nomad invasion, perhaps by the Saka.'), 'probable', ['justin', 'ir-arsacids'], { route: [SELEUCIA, ECBATANA, HYRCANIA, MERV] }),
  demetrius, elymais,
  ev('death', -132, B('۱۳۸ یا ۱۳۲ پ.م.', '138 or 132 BCE'), 'admin', NISA, B('مرگ «در پیری محترم»', 'Death “in an honourable old age”'), B('یوستینوس: پارت را «از کوه قفقاز تا رود فرات» گستراند و «در پیری محترم» درگذشت. پسرش فرهاد دوم جانشین شد.', 'Justin: he extended Parthia “from Mount Caucasus to the river Euphrates” and “died in an honourable old age”. His son Phraates II succeeded.'), 'disputed', ['justin', 'assar', 'ir-arsacids'], DATES),
]

export const mithridatesI: FeaturedKing = {
  slug: 'mithridates-i', name: B('مهرداد یکم', 'Mithridates I'), dynastyName: PAR,
  reign: B('حدود ۱۷۱–۱۳۸ پ.م. (آسار: ۱۶۵–۱۳۲)', 'c. 171–138 BCE (Assar: 165–132)'),
  title: B('مهرداد یکم؛ از پادشاهی خراسان تا امپراتوری از هرات تا فرات', 'Mithridates I: from a Khorasan kingdom to an empire from Herat to the Euphrates'),
  lede: B(
    'برادر فرهاد یکم که پارت را از پادشاهی‌ای در شمال خراسان به امپراتوری بدل کرد. هرات و مرو را از یونانیان باختری گرفت، در ۱۴۸ پ.م. ماد را گشود، در ۱۴۱ در سلوکیه بر دجله به شاهی شناخته شد و بابل او را پذیرفت، دمتریوس دوم سلوکی را اسیر کرد و الیمائیس را گرفت. نخستین شاه پارتی بود که با سکه‌های یونانی‌سبک خود را «دوستدار یونانیان» خواند. لشکرکشی ماد و میان‌رودان را روی نقشهٔ متحرک دنبال کنید، با شواهد، تفسیر و معنای امروز در سه لایهٔ جدا.',
    'Phraates I’s brother, who turned Parthia from a kingdom in northern Khorasan into an empire. He took Herat and Merv from the Bactrian Greeks, conquered Media in 148 BCE, was recognised as king at Seleucia-on-the-Tigris in 141 and accepted by Babylonia, captured the Seleucid Demetrius II and took Elymais. He was the first Parthian king to call himself “Philhellene” on Greek-style coins. Follow the conquest of Media and Mesopotamia on the animated map, with evidence, interpretation and modern meaning in three separate layers.'),
  stats: [
    { n: B('~۳۳', '~33'), l: B('سال پادشاهی', 'years of reign') },
    { n: B('۱۴۸', '148'), l: B('گشودن ماد (پ.م.)', 'conquest of Media (BCE)') },
    { n: B('۱۴۱', '141'), l: B('تاج در سلوکیه (پ.م.)', 'crowned at Seleucia (BCE)') },
    { n: B('~۲۰۰۰ کم', '~2,000 km'), l: B('از هرات تا فرات', 'from Herat to the Euphrates') },
  ],
  mapTitle: B('نقشهٔ متحرک: زندگی مهرداد یکم', 'Animated map: the life of Mithridates I'),
  events, span: [-171, -132],
  campaign: {
    id: 'reign',
    title: B('گشودن ماد و میان‌رودان، گام‌به‌گام (۱۴۸–۱۳۸ پ.م.)', 'The conquest of Media and Mesopotamia, step by step (148–138 BCE)'),
    intro: {
      fa: ['از کتیبهٔ سلوکی بیستون تا شوش. تاریخ‌های ۱۴۸ و ۱۴۱ از اسناد هم‌روزگارند؛ مسیرها طرح‌وارند. روایت از یوستینوس و ایرانیکاست.'],
      en: ['From the Seleucid inscription at Bisotun to Susa. The dates 148 and 141 come from contemporary documents; the routes are sketches. The narrative follows Justin and Iranica.'],
    },
    events: campaign, span: [-148, -138], view: [42.5, 29.0, 56.5, 38.5],
    places: [
      { name: B('هگمتانه', 'Ecbatana'), c: ECBATANA }, { name: B('بیستون', 'Bisotun'), c: BISOTUN, left: true }, { name: B('ری', 'Rhagae'), c: RHAGAE },
      { name: B('هکاتوم‌پیلوس', 'Hecatompylus'), c: HECATOMPYLUS }, { name: B('سلوکیه', 'Seleucia'), c: SELEUCIA, left: true }, { name: B('بابل', 'Babylon'), c: BABYLON, left: true },
      { name: B('اوروک', 'Uruk'), c: URUK, left: true }, { name: B('شوش', 'Susa'), c: SUSA }, { name: B('هیرکانی', 'Hyrcania'), c: HYRCANIA },
    ],
    clip: clipFor('mithridates-i'),
  },
  shareImage: '/media/mithridates-i/reign-en.png',
  dossier: [
    sec('empire', 'از پادشاهی به امپراتوری', 'From kingdom to empire',
      [['یوستینوس جنگ با ماد را با «بخت در نوسان» وصف می‌کند و می‌گوید مهرداد سرانجام پارت را «از کوه قفقاز تا رود فرات» گستراند. دو تاریخ را اسناد هم‌روزگار استوار می‌کنند: کتیبهٔ سلوکی بیستون (ژوئن ۱۴۸) و متن اوروک به نام ارشک (۱۲ اکتبر ۱۴۱). استرابون هم از گرفتن بخشی از باختر از اوکراتیدس یاد می‌کند.'],
       ['Justin describes the Median war as one of “fluctuating” fortune and says Mithridates at last extended Parthia “from Mount Caucasus to the river Euphrates”. Two dates are fixed by contemporary documents: the Seleucid inscription at Bisotun (June 148) and the Uruk text dated by Arsaces (12 October 141). Strabo also records the taking of part of Bactria from Eucratides.']],
      [['ولسکی گمان می‌کرد مهرداد می‌خواست تا مدیترانه برود؛ شیپمان (ایرانیکا) این را «بسیار محتمل» می‌داند و می‌نویسد این جنگ‌ها «دیگر نمی‌توان صرفاً یک رشته یورش برای تاراج و غنیمت دانست». به بیان دیگر، اینجا دولت‌سازی بود، نه غارت.'],
       ['Wolski thought Mithridates aimed at the Mediterranean; Schippmann (Iranica) calls this “quite probable” and writes that the wars “can no longer simply be classified as a series of raids for the purpose of pillaging and capturing booty.” In other words, this was state-building, not plunder.']],
      [['فرق دولت با غارتگر در این است که دولت قاعده می‌گذارد و می‌ماند؛ کاتبان بابل که تقویم قراردادهایشان را به نام شاه تازه زدند، این تفاوت را دیدند.'],
       ['The difference between a state and a raider is that a state sets rules and stays; the Babylonian scribes who re-dated their contracts by the new king saw the difference.']],
      ['justin', 'strabo', 'ir-arsacids', 'wolski', 'olbrycht2010'], {
        quotes: [
          { text: '…a war arose between the Parthians and Medes, and after fortune on each side had been some time fluctuating, victory at length fell to the Parthians; when Mithridates, enforced with this addition to his power, appointed Bocasis over Media, while he himself marched into Hyrcania. On his return from thence, he went to war with the king of the Elymaeans, and having conquered him, added this nation also to his dominions, and extended the Parthian empire, by reducing many other tribes under his yoke, from Mount Caucasus to the river Euphrates.', fa: '…میان پارتیان و مادها جنگی درگرفت و پس از آنکه بخت مدتی میان دو سو در نوسان بود، سرانجام پیروزی از آن پارتیان شد. مهرداد که با این افزوده نیرومندتر شده بود، بوکاسیس را بر ماد گماشت و خود به هیرکانی رفت. در بازگشت با شاه الیمائیان جنگید، او را شکست داد و این قوم را هم به قلمرو خود افزود، و با زیر یوغ آوردن بسیاری قوم‌های دیگر، امپراتوری پارت را از کوه قفقاز تا رود فرات گستراند.', ref: 'Justin 41.6.6–8', source: 'justin' },
          { text: 'They deprived Eucratidas, and then the Scythians, by force of arms, of a part of Bactriana.', fa: 'آنان به زور سلاح بخشی از باختر را از اوکراتیداس، و سپس از سکاها، گرفتند.', ref: 'Strabo 11.9.2', source: 'strabo' },
        ],
        photos: ['nisa'],
      }),
    sec('philhellene', '«دوستدار یونانیان» و «شاه شاهان»', '“Philhellene” and “King of Kings”',
      [['سکه‌های مهرداد یکم، به‌ویژه چهاردرهمی‌های سلوکیه، شاه را با ریش و دیهیم یونانی و پشت آن هراکلس یا خدایان یونانی نشان می‌دهند و عنوان «فیلهلن» (دوستدار یونانیان) را دارند. اسناد و سکه‌های بعدی عنوان «شاه بزرگ» و سرانجام «شاه شاهان» را هم به کار می‌برند.'],
       ['Mithridates I’s coins, especially the Seleucia tetradrachms, show the king bearded in a Greek diadem with Heracles or Greek gods on the reverse and bear the title “Philhellene” (friend of the Greeks). Later documents and coins also use “Great King” and finally “King of Kings”.']],
      [['ایرانیکا «فیلهلن» را احتمالاً ابزاری سیاسی برای شهرهای یونانی میان‌رودان می‌داند، نه دل‌بستگی فرهنگی. اینکه مهرداد یکم نخستین بار «شاه شاهان» را به کار برد یا مهرداد دوم، محل بحث است: سکه‌های قطعی این عنوان از مهرداد دوم‌اند (از حدود ۱۰۹/۱۰۸).'],
       ['Iranica takes “Philhellene” as probably a political device aimed at the Greek cities of Mesopotamia rather than cultural affection. Whether Mithridates I or Mithridates II first used “King of Kings” is disputed: the securely dated coins with the title belong to Mithridates II (from c. 109/8).']],
      [['حاکم خردمند به شهرهای خودگردان و بازرگانانشان امان می‌دهد، زیرا مالیات‌دهندگان راضی از شورشیان سودمندترند. به نظر می‌رسد سلوکیه زیر پارتیان نهادهای شهری خود را نگه داشت.'],
       ['A wise ruler leaves self-governing cities and their merchants in peace, because contented taxpayers are worth more than rebels. Under the Parthians Seleucia seems to have kept its own civic institutions.']],
      ['ir-arsacids', 'sellwood', 'curtis2019'], { photos: ['coin-mithridates1'] }),
    sec('disputes', 'آنچه هنوز روشن نیست', 'What is still unclear',
      [['تاریخ آغاز و پایان پادشاهی (۱۷۱–۱۳۸ یا ۱۶۵–۱۳۲)؛ گستره و زمان جنگ‌های شرق؛ و اینکه نقش صخره‌ای هنگ نوروزی (ایذه) مهرداد یکم را در حال گرفتن الیمائیس نشان می‌دهد یا، به نظر کاوامی، یکی از شاهان الیمائی (کامناسکیرس) را.', 'تیسفون، روبه‌روی سلوکیه، از همین دوران اردوگاه زمستانی شاه شد؛ استرابون آن را «اردوگاه» می‌نامد و ایرانیکا پایتخت شدنش را «احتمالی» می‌داند.'],
       ['The start and end of the reign (171–138 or 165–132); the extent and timing of the eastern wars; and whether the Hung-e Noruzi rock relief (Izeh) shows Mithridates I taking Elymais or, as Kawami argues, an Elymaean king (Kamnaskires).', 'Ctesiphon, opposite Seleucia, became the king’s winter camp from this time; Strabo calls it a “camp”, and Iranica calls its role as capital “possible”.']],
      [['تاریخ پارت را بیشتر از روی سکه و لوح بازسازی می‌کنیم؛ هر لوح تازه می‌تواند چند سال را جابه‌جا کند.'], ['Parthian history is rebuilt mostly from coins and tablets; each new tablet can shift dates by years.']],
      [['شک آگاهانه بخشی از دانش است؛ این صفحه هر جا مطمئن نیست، می‌گوید.'], ['Informed doubt is part of knowledge; this page says so wherever it is unsure.']],
      ['assar', 'ir-arsacids', 'olbrycht2010', 'strabo', 'kawami']),
  ],
  synthesis: { title: B('جمع‌بندی', 'Synthesis'), paras: {
    fa: ['مهرداد یکم پارت را از کرانهٔ خزر به دجله رساند و آن را از پادشاهی قبیله‌ای به امپراتوری چندقومی بدل کرد. مهم‌تر از گستره، شیوهٔ فرمانروایی بود: شهرهای یونانی، کاتبان بابلی و ساتراپی‌های کهن را نگه داشت و فقط بالای آن‌ها نشست. همین الگو پارت را تقریباً چهار سده نگه داشت.'],
    en: ['Mithridates I took Parthia from the Caspian shore to the Tigris and turned a tribal kingdom into a multi-ethnic empire. More important than its extent was the manner of rule: he kept the Greek cities, the Babylonian scribes and the old satrapies and simply sat on top of them. That model held Parthia together for nearly four centuries.'],
  }, sources: ['justin', 'ir-arsacids', 'wolski'] },
  sources: pick('justin', 'strabo', 'diaries', 'ir-arsacids', 'assar', 'olbrycht2010', 'wolski', 'bivar', 'sellwood', 'curtis2019', 'kawami'),
  photos: photos('coin-mithridates1', 'nisa'),
  related: related(['phraates-i', 'فرهاد یکم، برادرش', 'Phraates I, his brother'], ['phraates-ii', 'فرهاد دوم، پسرش', 'Phraates II, his son'], ['mithridates-ii', 'مهرداد دوم', 'Mithridates II']),
  wikipedia: 'https://en.wikipedia.org/wiki/Mithridates_I_of_Parthia',
}
