/**
 * Yazdegerd II (439–457 CE), featured, with a step-by-step diagram of Avarayr (451).
 * Narrative: Encyclopaedia Iranica (Daryaee “Yazdegerd II”; Hewsen “Avarayr”; Thomson “Ełišē”; Garsoïan “Mamikonean”) paraphrased.
 * Verbatim quotes: Elishe and Łazar Pʿarpecʿi, both tr. R. W. Thomson (1982).
 * Battle numbers are given as the Armenian sources give them and labelled as such.
 */
import type { BattleDiagram, BattleUnit, Bi, FeaturedKing } from '../featured/types'
import { ARMENIA, AVARAYR, CTESIPHON, DAMGHAN, NISHAPUR, PERSIS, SAS, battleClipFor, clipFor, ev, note, photos, pick, related, sec } from './common'

const B = (fa: string, en: string): Bi => ({ fa, en })
const P = (id: string, fa: string, en: string, at: [number, number]): BattleUnit => ({ id, side: 'persian', kind: 'army', label: B(fa, en), at })
const A = (id: string, fa: string, en: string, at: [number, number]): BattleUnit => ({ id, side: 'greek', kind: 'army', label: B(fa, en), at })

const NUMBERS = note(
  'شمار سپاهیان (۶۰ هزار ارمنی در برابر ۲۰۰ هزار ایرانی) از الیشه است و بی‌گمان بزرگ‌نمایی است. شمار کشتگان (۱٬۰۳۶ ارمنی، ۳٬۵۴۴ از سوی ایران) در الیشه و غزار یکی است. پیروز کیست محل بحث است: ایرانیان میدان را گرفتند، اما هوسن (ایرانیکا) پیروزی را «پرهزینه» و «نه قطعی» می‌داند.',
  'The army sizes (60,000 Armenians against 200,000 Persians) are Elishe’s and surely exaggerated. The death tolls (1,036 Armenians, 3,544 on the Persian side) are the same in Elishe and Łazar. Who won is disputed: the Persians held the field, but Hewsen (Iranica) calls the victory pyrrhic and “not decisive”.')
const SKETCH = note(
  'این نمودار طرح‌وار است و از روایت الیشه ساخته شده، که تامسون آن را ادبی و پر از تصویرهای کتاب مکابیان می‌داند. جای دقیق میدان معلوم نیست. غزار، کهن‌تر، نبرد را کوتاه می‌گوید و شکست را بیشتر از جدا شدن یاران وارطان می‌داند.',
  'This diagram is schematic and built from Elishe’s account, which Thomson calls literary and full of imagery from the books of the Maccabees. The exact field is not known. Łazar, the older source, tells the battle briefly and puts the defeat mainly down to defection.')
const EPITHET = note(
  'لقب «نرم» یا «نرم‌خو» در منابع عربی و فارسی آمده (حمزهٔ اصفهانی: یزدجرد اللیّن؛ ابن بلخی: یزدگرد نرم). منابع ارمنی و سریانی او را آزارگر می‌دانند. دریایی (ایرانیکا) این دوگانگی را از دید دو گروه می‌داند: زرتشتیان و مسیحیان.',
  'The epithet “gentle” comes in Arabic and Persian sources (Ḥamza of Isfahan: Yazdajerd al-Layyen; Ebn al-Balḵi: Yazdegerd-e Narm). Armenian and Syriac sources call him a persecutor. Daryaee (Iranica) explains the split by the two points of view: Zoroastrian and Christian.')

const EVENTS = [
  ev('accession', 439, B('۴۳۹ م.', '439 CE'), 'admin', CTESIPHON, B('پسر بهرام گور بر تخت', 'Bahram Gur’s son on the throne'),
    B('یزدگرد دوم جانشین پدرش بهرام پنجم شد. مهرنرسی، وزیر بزرگ پدرش، در کار ماند. منابع عربی و فارسی او را «نرم» می‌نامند.', 'Yazdegerd II succeeded his father Bahram V. Mehr-Narseh, his father’s chief minister, stayed in office. Arabic and Persian sources call him “the gentle”.'),
    'probable', ['ir-yazdegerd2'], EPITHET),
  ev('rome', 440, B('۴۴۰ م.', '440 CE'), 'campaign', ARMENIA, B('جنگ کوتاه با روم', 'A short war with Rome'),
    B('یزدگرد به روم تاخت اما کامیاب نشد. صلح بسته شد: هیچ‌یک از دو سو در مرز میان‌رودان دژ تازه نسازد. به گفتهٔ ایرانیکا، روم هم برای پاسداری از گذرگاه‌های قفقاز در برابر مردم شمال پول می‌پرداخت.', 'Yazdegerd attacked Rome without success. Peace was made: neither side would build new forts on the Mesopotamian frontier. According to Iranica, Rome also paid money towards guarding the Caucasus passes against the northern peoples.'),
    'probable', ['ir-yazdegerd2'], note('ایرانیکا این‌جا «تئودوسیوس یکم» نوشته، که لغزش است؛ امپراتور در ۴۴۰ م. تئودوسیوس دوم بود.', 'Iranica writes “Theodosius I” here, which is a slip; the emperor in 440 was Theodosius II.')),
  ev('army', 445, B('۴۴۵–۴۴۶ م.', '445–446 CE'), 'religion', CTESIPHON, B('بیرون راندن مسیحیان از سپاه', 'Christians expelled from the army'),
    B('در این سال‌ها با مسیحیان سخت‌گیری شد، از جمله بیرون راندنشان از سپاه.', 'In these years Christians were treated harshly, including expulsion from the army.'),
    'probable', ['ir-yazdegerd2']),
  ev('edict', 449, B('۴۴۹ م.', '449 CE'), 'religion', ARMENIA, B('فرمان به ارمنیان', 'The decree to the Armenians'),
    B('فرمانی، به نام مهرنرسی، از ارمنیان خواست به دین زرتشتی بازگردند. دریایی (ایرانیکا) می‌گوید آموزه‌ای که در این نامه آمده زروانی است.', 'A decree, in Mehr-Narseh’s name, required the Armenians to return to the Zoroastrian faith. Daryaee (Iranica) says the doctrine set out in the letter is Zurvanite.'),
    'secure', ['ir-yazdegerd2', 'ir-avarayr', 'elishe']),
  ev('revolt', 450, B('۴۵۰ م.', '450 CE'), 'campaign', ARMENIA, B('شورش ارمنستان', 'The Armenian rising'),
    B('بزرگان ارمنی با رهبری وارطان مامیکونیان شوریدند. وسک سیونی، مرزبان ارمنستان، نخست با آنان بود و سپس به سوی ایران رفت.', 'The Armenian nobles rose under Vardan Mamikonian. Vasak of Siwnikʿ, the marzban of Armenia, was with them at first and then went over to the Persians.'),
    'secure', ['ir-avarayr', 'ir-mamikonean', 'elishe', 'lazar']),
  ev('avarayr', 451, B('۲ ژوئن ۴۵۱ م.', '2 June 451 CE'), 'battle', AVARAYR, B('نبرد آوارایر', 'The battle of Avarayr'),
    B('در دشت آوارایر، کنار رود تغموت، سپاه ایران به فرماندهی مُشکان نیوسالاوورت با ارمنیان جنگید. فیل‌ها کار را یکسره کردند و وارطان و هشت سردار دیگر کشته شدند. اما شمار کشتگان ایرانی بیشتر بود.', 'On the plain of Avarayr, by the river Tłmut, the Persian army under Muškan Niusałavurt fought the Armenians. The elephants decided it, and Vardan and eight other generals were killed. But the Persian dead were more numerous.'),
    'disputed', ['ir-avarayr', 'elishe', 'lazar'], NUMBERS),
  ev('east', 453, B('تا ۴۵۳ م.', 'to 453 CE'), 'campaign', NISHAPUR, B('نیشابور و جنگ با هپتالیان', 'Nishapur and the war with the Hephthalites'),
    B('یزدگرد سال‌ها در شرق ماند، نیشابور را پایگاه کرد و با هپتالیان (یا کیداریان) جنگید. به گفتهٔ شهرستان‌های ایران، کومش (دامغان) را در برابر «چول» دژ کرد.', 'Yazdegerd stayed for years in the east, made Nishapur his base and fought the Hephthalites (or Kidarites). According to the Šahrestānīhā ī Ērān he fortified Qumes (Damghan) against the Čōl.'),
    'probable', ['ir-yazdegerd2']),
  ev('exile', 454, B('۴۵۴ م.', '454 CE'), 'admin', DAMGHAN, B('ارمنیان در خراسان', 'Armenians in Khorasan'),
    B('به گفتهٔ سبئوس، گروهی از بزرگان ارمنی به خراسان برده شدند و در جنگ شرق خدمت کردند.', 'According to Sebeos, a group of Armenian nobles was taken to Khorasan and served in the eastern war.'),
    'probable', ['ir-yazdegerd2', 'elishe']),
  ev('jews', 455, B('۴۵۵ م.', '455 CE'), 'religion', CTESIPHON, B('سخت‌گیری بر یهودیان', 'Pressure on the Jews'),
    B('ایرانیکا می‌گوید از ۴۵۵ م. با یهودیان هم سخت‌گیری شد؛ منابع یهودی از منع نگه داشتن شَبات سخن می‌گویند.', 'Iranica says that from 455 the Jews too were treated harshly; Jewish sources speak of a ban on keeping the Sabbath.'),
    'probable', ['ir-yazdegerd2']),
  ev('death', 457, B('۴۵۷ م.', '457 CE'), 'admin', PERSIS, B('مرگ و جنگ جانشینی', 'Death and a war of succession'),
    B('یزدگرد در ۴۵۷ م. درگذشت. دو پسرش، هرمز و پیروز، بر سر تاج جنگیدند.', 'Yazdegerd died in 457. His two sons, Hormizd and Peroz, fought over the crown.'),
    'secure', ['ir-yazdegerd2', 'ir-hormozd3']),
]

const avarayr: BattleDiagram = {
  id: 'avarayr',
  title: B('نبرد آوارایر، ۴۵۱ م. (طرح‌وار)', 'The battle of Avarayr, 451 CE (schematic)'),
  when: B('۲ ژوئن ۴۵۱ م. (پنطیکاست)', '2 June 451 CE (Pentecost)'),
  sides: { persian: B('ایرانیان (ساسانی)', 'Iranians (Sasanian)'), greek: B('ارمنیان شورشی', 'Armenian rebels') },
  land: ['M0 0 L100 0 L100 60 L0 60 Z'],
  labels: [
    { at: [50, 30], text: B('رود تغموت', 'River Tłmut'), tone: 'sea' },
    { at: [14, 8], text: B('دشت آوارایر', 'Avarayr plain') },
    { at: [86, 54], text: B('درّه‌های کوه', 'Mountain valleys') },
  ],
  phases: [
    {
      id: 'lines', title: B('دو سپاه دو سوی رود', 'Two armies across the river'),
      body: B('به گفتهٔ الیشه، مشکان نخبگان سپاه را، از جمله هون‌ها و گیل‌ها، در برابر وارطان گذاشت. وارطان سپاه را چهار بخش کرد و خودش بخش چهارم را فرماندهی کرد. فیل‌ها پشت سپاه ایران بودند. وسک و یارانش در سوی ایران بودند.', 'According to Elishe, Muškan set the army’s elite, including Huns and Gelkʿ, opposite Vardan. Vardan split his army into four divisions and led the fourth himself. The elephants stood behind the Persian army. Vasak and his followers were on the Persian side.'),
      units: [A('vardan', 'وارطان', 'Vardan', [30, 18]), A('wing', 'جناح‌های ارمنی', 'Armenian wings', [30, 42]), P('muskan', 'مشکان و نخبگان', 'Muškan and the elite', [70, 18]), P('centre', 'قلب سپاه ایران', 'Persian centre', [70, 40]), P('elephants', 'فیل‌ها', 'Elephants', [88, 30]), P('vasak', 'وسک', 'Vasak', [78, 52])],
      certainty: 'probable', certaintyNote: SKETCH.certaintyNote, sources: ['elishe', 'ir-avarayr'],
    },
    {
      id: 'charge', title: B('یورش وارطان از رود', 'Vardan charges across the river'),
      body: B('ارمنیان سواره از رود گذشتند. نخبگان ایرانی جناح چپ ارمنی را پس راندند. وارطان به آن‌جا تاخت، جناح راست ایرانی را تا فیل‌ها پس راند و قلب سپاه ایران از هم پاشید.', 'The Armenians crossed the river on horseback. The Persian elite drove back the Armenian left wing. Vardan attacked there, threw the Persian right wing back onto the elephants, and the Persian centre broke.'),
      units: [A('vardan', 'وارطان', 'Vardan', [64, 22]), A('wing', 'جناح‌های ارمنی', 'Armenian wings', [44, 42]), P('muskan', 'مشکان و نخبگان', 'Muškan and the elite', [82, 20]), P('centre', 'قلب سپاه ایران', 'Persian centre', [84, 44]), P('elephants', 'فیل‌ها', 'Elephants', [90, 30]), P('vasak', 'وسک', 'Vasak', [80, 54])],
      arrows: [{ side: 'greek', path: [[30, 18], [50, 20], [64, 22]] }],
      certainty: 'probable', certaintyNote: SKETCH.certaintyNote, sources: ['elishe'],
    },
    {
      id: 'elephants', title: B('فیل‌ها و مرگ وارطان', 'The elephants and Vardan’s death'),
      body: B('مشکان دید که گروهی از ارمنیان جدا شده و در درّه‌ها مانده‌اند. با فیل‌های اردشیر، که بر برجی روی فیل نشسته بود، وارطان را دوره کرد. وارطان و یارانش همان‌جا کشته شدند. غزار شکست را بیشتر از جدا شدن یاران می‌داند.', 'Muškan saw that some Armenians had broken away and stayed in the valleys. With the elephants of Artashir, who sat in a tower on one of them, he surrounded Vardan. Vardan and his companions fell on that spot. Łazar puts the defeat mainly down to defection.'),
      units: [A('vardan', 'وارطان', 'Vardan', [66, 24]), A('wing', 'جدا شدگان', 'Those who broke away', [86, 52]), P('muskan', 'مشکان و نخبگان', 'Muškan and the elite', [60, 14]), P('centre', 'قلب سپاه ایران', 'Persian centre', [62, 36]), P('elephants', 'فیل‌ها', 'Elephants', [74, 24]), P('vasak', 'وسک', 'Vasak', [80, 34])],
      arrows: [{ side: 'persian', path: [[90, 30], [80, 26], [70, 24]] }, { side: 'persian', path: [[82, 20], [66, 16]] }],
      certainty: 'probable', certaintyNote: SKETCH.certaintyNote, sources: ['elishe', 'lazar', 'ir-avarayr'],
    },
    {
      id: 'after', title: B('میدانی بی‌پیروز', 'A field without a victor'),
      body: B('نبرد تا غروب ادامه یافت. بازماندگان ارمنی به دژها و درّه‌های امن رفتند. کشتگان ایرانی، به گفتهٔ هر دو منبع ارمنی، سه برابر ارمنیان بودند. یک نسل بعد، در ۴۸۱–۴۸۴ م.، وهان مامیکونیان، برادرزادهٔ وارطان، دوباره شورید.', 'The battle went on until sunset. The Armenian survivors went to the fortresses and safe valleys. The Persian dead, according to both Armenian sources, were three times the Armenian dead. A generation later, in 481–484, Vardan’s nephew Vahan Mamikonian rose again.'),
      units: [A('wing', 'بازماندگان در دژها', 'Survivors in the fortresses', [18, 50]), P('muskan', 'مشکان و نخبگان', 'Muškan and the elite', [60, 20]), P('centre', 'قلب سپاه ایران', 'Persian centre', [62, 36]), P('elephants', 'فیل‌ها', 'Elephants', [74, 26]), P('vasak', 'وسک', 'Vasak', [70, 46])],
      arrows: [{ side: 'greek', path: [[40, 40], [28, 46], [18, 50]] }],
      certainty: 'disputed', certaintyNote: B('شمار کشتگان از منابع ارمنی است. پیروز کیست محل بحث است: هوسن پیروزی ایران را «پرهزینه» و «نه قطعی» می‌داند.', 'The death tolls come from the Armenian sources. Who won is disputed: Hewsen calls the Persian victory pyrrhic and “not decisive”.'), sources: ['elishe', 'lazar', 'ir-avarayr'],
    },
  ],
}

export const yazdegerdII: FeaturedKing = {
  slug: 'yazdegerd-ii', name: B('یزدگرد دوم', 'Yazdegerd II'), dynastyName: SAS,
  reign: B('۴۳۹–۴۵۷ م.', '439–457 CE'),
  title: B('یزدگرد دوم؛ «شاه نرم‌خو»، آوارایر و جنگ شرق', 'Yazdegerd II: “the gentle king”, Avarayr and the war in the east'),
  lede: B(
    'یزدگرد دوم، پسر بهرام گور، هجده سال پادشاهی کرد. منابع فارسی و عربی او را «نرم» می‌نامند و منابع ارمنی و سریانی آزارگر. او کوشید دین زرتشتی را در ارمنستان دوباره روا کند؛ نتیجه شورش وارطان مامیکونیان و نبرد آوارایر در ۴۵۱ م. بود. بیشتر سال‌هایش را در نیشابور، در جنگ با هپتالیان، گذراند.',
    'Yazdegerd II, son of Bahram Gur, reigned eighteen years. Persian and Arabic sources call him “the gentle”, Armenian and Syriac ones a persecutor. He tried to reimpose the Zoroastrian faith in Armenia; the result was Vardan Mamikonian’s rising and the battle of Avarayr in 451. He spent most of his years at Nishapur, at war with the Hephthalites.'),
  stats: [{ n: B('۱۸', '18'), l: B('سال پادشاهی', 'years of reign') }, { n: B('۴۵۱', '451'), l: B('نبرد آوارایر', 'battle of Avarayr') }],
  mapTitle: B('نقشهٔ متحرک: از تیسفون تا آوارایر و نیشابور', 'Animated map: from Ctesiphon to Avarayr and Nishapur'),
  events: EVENTS, span: [439, 457],
  campaign: {
    id: 'reign',
    title: B('پادشاهی یزدگرد دوم، گام‌به‌گام (۴۳۹–۴۵۷ م.)', 'The reign of Yazdegerd II, step by step (439–457 CE)'),
    intro: {
      fa: ['پادشاهی یزدگرد دوم به روایت ایرانیکا و دو تاریخ‌نگار ارمنی، الیشه و غزار پاربی. نمودار گام‌به‌گام نبرد آوارایر زیر نقشه آمده است.'],
      en: ['The reign of Yazdegerd II as told by Iranica and the two Armenian historians Elishe and Łazar Pʿarpecʿi. The step-by-step diagram of the battle of Avarayr is below the map.'],
    },
    events: EVENTS, span: [439, 457], view: [38, 29.5, 62, 42],
    places: [
      { name: B('تیسفون', 'Ctesiphon'), c: CTESIPHON, left: true }, { name: B('آوارایر', 'Avarayr'), c: AVARAYR, dy: -1.2 }, { name: B('ارمنستان', 'Armenia'), c: ARMENIA, left: true },
      { name: B('کومش (دامغان)', 'Qumes (Damghan)'), c: DAMGHAN, dy: 1.3 }, { name: B('نیشابور', 'Nishapur'), c: NISHAPUR }, { name: B('پارس', 'Pars'), c: PERSIS },
    ],
    clip: clipFor('yazdegerd-ii'),
    battles: [avarayr],
  },
  shareImage: '/media/yazdegerd-ii/reign-en.png',
  dossier: [
    sec('gentle', '«نرم» یا آزارگر؟', '“Gentle” or persecutor?',
      [['حمزهٔ اصفهانی او را «یزدجرد اللیّن» و ابن بلخی «یزدگرد نرم» می‌نامند. بر سکه‌هایش نوشتهٔ تازه‌ای آمد: «مزداپرست، بغ، کی» (mzdysn bgy kdy). به گفتهٔ دریایی، این نخستین بار است که لقب «کی»، نام شاهان افسانه‌ای کیانی، بر سکه می‌آید.'],
        ['Ḥamza of Isfahan calls him “Yazdajerd al-Layyen” and Ebn al-Balḵi “Yazdegerd-e Narm”, both meaning “the gentle”. A new legend appeared on his coins: “Mazda-worshipping majesty, the Kayanid” (mzdysn bgy kdy). According to Daryaee, this is the first time the title kay, the name of the legendary Kayanid kings, appears on coins.']],
      [['دو تصویر از یک شاه از دو دید می‌آیند: سنت زرتشتی شاهی را که دین را پاس داشت ستود، و نویسندگان مسیحی همان شاه را آزارگر دیدند. دریایی لقب «کی» را نشانهٔ پیوند دادن شاهی ساسانی با تاریخ کیانی می‌داند، تاریخی که بعدها در خدای‌نامه و شاهنامه آمد.'],
        ['Two portraits of one king come from two points of view: the Zoroastrian tradition praised a king who guarded the faith, and Christian writers saw the same king as a persecutor. Daryaee reads the title kay as a sign that Sasanian kingship was being tied to Kayanid history, the history that later appears in the Book of Kings and the Shahnameh.']],
      [['«نرم» برای یک گروه می‌تواند برای گروهی دیگر سخت باشد. هر لقبی باید با این پرسش خوانده شود: چه کسی آن را داده و برای چه کسی؟'],
        ['“Gentle” to one group can be harsh to another. Every epithet should be read with the question: who gave it, and for whom?']],
      ['ir-yazdegerd2'], { photos: ['coin-yazdegerd2'] }),
    sec('faith', 'یک دین برای همه؟', 'One faith for all?',
      [['در ۴۴۵–۴۴۶ م. مسیحیان از سپاه بیرون رانده شدند. در ۴۴۹ م. فرمانی به نام مهرنرسی از ارمنیان خواست به دین زرتشتی بازگردند. از ۴۵۵ م. با یهودیان هم سخت‌گیری شد.'],
        ['In 445–446 Christians were expelled from the army. In 449 a decree in Mehr-Narseh’s name required the Armenians to return to the Zoroastrian faith. From 455 the Jews too were treated harshly.']],
      [['دریایی این سیاست را کوششی برای یکپارچه کردن دولت و ساختن هویتی یگانه می‌داند، نه تنها تعصب دینی. ارمنستان مرز روم و ایران بود و مسیحیتش آن را به روم نزدیک می‌کرد. پس سیاست دین و سیاست مرز در هم تنیده بودند.'],
        ['Daryaee reads this policy as an attempt to unify the state and build a single identity, not only religious zeal. Armenia was the Roman–Persian border, and its Christianity drew it towards Rome. So faith policy and border policy were woven together.']],
      [['پدرش بهرام پنجم در پیمانی با روم آزادی دین را پذیرفته بود. یزدگرد دوم وارونه رفت: دولت خواست دین مردم را تعیین کند. نتیجه شورش، جنگ و تبعید بود. آزادی وجدان، که مردم را از ترس دولت آزاد می‌کند، برای دولت هم ارزان‌تر بود. این برداشت ماست.'],
        ['His father Bahram V had accepted religious freedom in a treaty with Rome. Yazdegerd II went the other way: the state tried to decide people’s faith. The result was revolt, war and exile. Freedom of conscience, which frees people from fear of the state, would also have been cheaper for the state. This is our reading.']],
      ['ir-yazdegerd2', 'ir-avarayr']),
    sec('avarayr', 'آوارایر: میدانی بی‌پیروز', 'Avarayr: a field without a victor',
      [['در ۲ ژوئن ۴۵۱ م.، روز پنطیکاست، در دشت آوارایر، جنوب خاوری ماکوی امروز، کنار رود تغموت (زنگمار)، سپاه ایران به فرماندهی مشکان نیوسالاوورت با ارمنیان وارطان مامیکونیان جنگید. به گفتهٔ الیشه ۶۰ هزار ارمنی در برابر ۲۰۰ هزار ایرانی، با «جاویدانان» و فیل‌ها، بودند. وسک سیونی و یارانش به سوی ایران رفتند. فیل‌ها کار را یکسره کردند و وارطان و هشت سردار دیگر کشته شدند.'],
        ['On 2 June 451, Pentecost Sunday, on the plain of Avarayr southeast of modern Maku, by the river Tłmut (Zangmar), the Persian army under Muškan Niusałavurt fought Vardan Mamikonian’s Armenians. According to Elishe, 60,000 Armenians faced 200,000 Persians with the Immortals and elephants. Vasak of Siwnikʿ and his followers went over to the Persians. The elephants decided the battle, and Vardan and eight other generals were killed.']],
      [['دو منبع ما هر دو ارمنی‌اند. غزار حدود ۵۰۰ م. نوشت و شکست را بیشتر از جدا شدن یاران می‌داند. الیشه، که تامسون آن را احتمالاً بازنویسی سدهٔ ششم غزار می‌داند، روایتی بلند و ادبی دارد که تصویرهایش از کتاب مکابیان آمده است. شمار سپاهیان بزرگ‌نمایی است. هوسن پیروزی ایران را «پرهزینه» و «نه قطعی» می‌داند: یک نسل بعد، وهان مامیکونیان دوباره شورید و بلاش با او آشتی کرد و او را مرزبان ارمنستان ساخت.'],
        ['Both our sources are Armenian. Łazar wrote around 500 and puts the defeat mainly down to defection. Elishe, whom Thomson takes to be probably a 6th-century rewriting of Łazar, gives a long literary account whose imagery comes from the books of the Maccabees. The army sizes are exaggerated. Hewsen calls the Persian victory pyrrhic and “not decisive”: a generation later Vahan Mamikonian rose again, and Balash made peace with him and made him marzban of Armenia.']],
      [['آوارایر نشان می‌دهد که زور می‌تواند میدان را بگیرد اما وجدان را نه. ایران میدان را گرفت، اما یک نسل بعد ناچار شد با سردار همان خاندان آشتی کند و ارمنستان را به او بسپارد. این برداشت ماست.'],
        ['Avarayr shows that force can take a field but not a conscience. Persia took the field, but a generation later had to make peace with a leader of the same house and hand Armenia to him. This is our reading.']],
      ['ir-avarayr', 'ir-elise', 'elishe', 'lazar'], {
        photos: ['avarayr-1569'],
        quotes: [
          { text: 'For neither side was victorious and neither side was defeated; but heroes attacked heroes and both sides went down to defeat.', fa: 'زیرا هیچ سویی پیروز نشد و هیچ سویی شکست نخورد؛ دلیران بر دلیران تاختند و هر دو سو شکست خوردند.', ref: 'Elishe, History of Vardan, tr. R. W. Thomson (1982), p. 172 [Arm. ed. p. 119]', source: 'elishe' },
          { text: 'But from the Persian army those who fell in the battle on that day, as has been accurately reckoned and told to us, confirmed by the Persian generals, were 3,544.', fa: 'اما از سپاه ایران کسانی که آن روز در نبرد افتادند، چنان‌که به دقت شمرده و به ما گفته شد و سرداران ایرانی هم تأیید کردند، ۳٬۵۴۴ تن بودند.', ref: 'Łazar Pʿarpecʿi §39 [ed. p. 73], tr. R. W. Thomson, in Elishe (1982), Appendix, p. 287', source: 'lazar' },
        ],
        clip: { media: battleClipFor('yazdegerd-ii', 'avarayr', 992, 638), caption: B('نبرد آوارایر، گام‌به‌گام (طرح‌وار، از روی الیشه)', 'The battle of Avarayr, step by step (schematic, after Elishe)') },
      }),
    sec('vardan', 'وارطان مامیکونیان', 'Vardan Mamikonian',
      [['وارطان، «وارطان سرخ»، سرِ خاندان مامیکونیان بود، خاندانی که سپهسالاری (سپاراپت) ارمنستان را موروثی داشت. او با بیشتر بزرگان ارمنی در آوارایر کشته شد. کلیسای ارمنی او را قدیس می‌داند.'],
        ['Vardan, “Vardan the Red”, was head of the Mamikonian family, which held the command of the Armenian army (sparapet) by inheritance. He fell at Avarayr with most of the Armenian nobility. The Armenian Church venerates him as a saint.']],
      [['گارسویان (ایرانیکا) می‌گوید وارطان در ادب ارمنی «شهید ایمان» و الگوی «مکابیان مسیحی» شد و مرکز تاریخ میانه‌ای ارمنستان. پس تصویری که از او داریم ساختهٔ ادب پس از اوست. مامیکونیان معمولاً هوادار روم دانسته می‌شدند؛ پس انگیزهٔ سیاسی هم در کار بود.'],
        ['Garsoïan (Iranica) says Vardan became in Armenian literature the martyr for the faith and the model of the “Christian Maccabees”, and the central figure of medieval Armenian history. So the picture we have of him was shaped by the literature after him. The Mamikonians were usually seen as partisans of Rome, so politics was in play too.']],
      [['سپهسالاری موروثی، امتیاز یک خاندان بود. اما آنچه وارطان برایش جنگید، آزادی گروهی برای نگه داشتن دینشان، حقی است که به همه می‌رسد. این دو را باید از هم جدا دید.'],
        ['A hereditary command was one family’s privilege. But what Vardan fought for, a community’s freedom to keep its faith, is a right that belongs to everyone. The two should be seen apart.']],
      ['ir-mamikonean', 'ir-avarayr']),
    sec('east', 'نیشابور و جنگ شرق', 'Nishapur and the war in the east',
      [['دریایی می‌گوید یزدگرد نیشابور را پایگاه کرد و تا ۴۵۳ م. با هپتالیان جنگید. به گفتهٔ شهرستان‌های ایران، کومش (دامغان) را در برابر «چول» دژ کرد. سبئوس می‌گوید در ۴۵۴ م. بزرگان ارمنی به خراسان برده شدند.'],
        ['Daryaee says Yazdegerd made Nishapur his base and fought the Hephthalites until 453. According to the Šahrestānīhā ī Ērān he fortified Qumes (Damghan) against the Čōl. Sebeos says that in 454 Armenian nobles were taken to Khorasan.']],
      [['دشمن را گاهی هپتالیان و گاهی کیداریان می‌نامند؛ نام‌ها در منابع این دوره روشن نیست. جنگ شرق، که با بهرام گور آغاز شده بود، با یزدگرد دوم پایان نیافت و به جنگ‌های پیروز رسید.'],
        ['The enemy is sometimes called the Hephthalites and sometimes the Kidarites; the names are not clear in the sources for this period. The eastern war, begun under Bahram Gur, did not end with Yazdegerd II and led on to Peroz’s wars.']],
      [['دولتی که در دو مرز می‌جنگید، هزینه را از مالیات مردم می‌پرداخت. فشار بر اقلیت‌های دینی در همان سال‌ها هم آمد. هر چه دولت بیشتر می‌جنگید، کمتر مدارا می‌کرد؛ این برداشت ماست.'],
        ['A state fighting on two frontiers paid for it from people’s taxes. The pressure on religious minorities came in the same years. The more the state fought, the less it tolerated; this is our reading.']],
      ['ir-yazdegerd2']),
  ],
  synthesis: { title: B('جمع‌بندی', 'Synthesis'), paras: {
    fa: ['یزدگرد دوم دو چهره دارد: «شاه نرم» سنت زرتشتی و آزارگر منابع مسیحی. هر دو از دید یک گروه‌اند. آنچه روشن است این است که او خواست دولت را با یک دین یکپارچه کند، و ارمنستان در آوارایر بهای آن را پرداخت.', 'آوارایر را ایران برد، اما نه قطعی. یک نسل بعد، ارمنیان دوباره شوریدند و آزادی دین را به دست آوردند.'],
    en: ['Yazdegerd II has two faces: the “gentle king” of the Zoroastrian tradition and the persecutor of the Christian sources. Both come from one group’s point of view. What is clear is that he tried to unify the state through one faith, and Armenia paid the price at Avarayr.', 'Persia won Avarayr, but not decisively. A generation later the Armenians rose again and won freedom of religion.'],
  }, sources: ['ir-yazdegerd2', 'ir-avarayr'] },
  sources: pick('ir-yazdegerd2', 'ir-avarayr', 'ir-elise', 'ir-mamikonean', 'elishe', 'lazar', 'ir-hormozd3'),
  photos: photos('coin-yazdegerd2', 'avarayr-1569'),
  related: related(['bahram-v', 'بهرام گور، پدرش', 'Bahram Gur, his father'], ['hormizd-iii', 'هرمز سوم، پسرش', 'Hormizd III, his son'], ['peroz-i', 'پیروز یکم، پسرش', 'Peroz I, his son']),
  wikipedia: 'https://en.wikipedia.org/wiki/Yazdegerd_II',
}
