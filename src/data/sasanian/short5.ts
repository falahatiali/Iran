/**
 * Short pages for 628–630: Kavad II Sheroe, Ardashir III and Shahrbaraz.
 * Narrative: Encyclopaedia Iranica (Schindel “Kawād II”; Shahbazi “Ardašīr III”; Chaumont “Bōrān”), paraphrased.
 * Verbatim quotes: Schindel and Shahbazi in their own English.
 */
import type { Bi, FeaturedKing } from '../featured/types'
import { ADUR_GUSNASP, BABYLON, CAUCASUS, CTESIPHON, MESENE, RAY, SAS, ev, note, photos, pick, related, sec } from './common'

const B = (fa: string, en: string): Bi => ({ fa, en })

const DEATH_DATE = note(
  'تاریخ مرگ قباد روشن نیست. یادداشت نولدکه بر طبری ۱۵ سپتامبر ۶۲۸ را پیشنهاد می‌کند. تاریخ‌نامهٔ بی‌نام سریانی و تاریخ‌نامهٔ سعرت می‌گویند او آغاز تابستان، در راه اقامتگاه تابستانی، مرد.',
  'The date of Kavad’s death is unclear. Nöldeke’s note on Ṭabari suggests 15 September 628. The anonymous Syriac chronicle and the Chronicle of Seert say he died in early summer, on the way to his summer residence.')

export const kavadII: FeaturedKing = {
  slug: 'kavad-ii', name: B('قباد دوم (شیرویه)', 'Kavad II (Sheroe)'), dynastyName: SAS,
  reign: B('۶۲۸ م.', '628 CE'),
  title: B('قباد دوم شیرویه؛ کودتا، برادرکشی و صلح', 'Kavad II Sheroe: coup, fratricide and peace'),
  lede: B(
    'شیرویه پسر خسرو دوم و زنی رومی به نام ماریا بود. در فوریهٔ ۶۲۸، وقتی سپاه هراکلیوس به تیسفون نزدیک می‌شد، بزرگان با کودتایی پدرش را برکنار کردند و او را با نام قباد شاه کردند. خسرو کشته شد و قباد برادرانش را هم کشت. با روم صلح کرد و کمتر از هشت ماه بعد، به احتمال زیاد از طاعون، درگذشت.',
    'Sheroe was the son of Khosrow II and a Byzantine woman named Maria. In February 628, as Heraclius’ army neared Ctesiphon, the nobles deposed his father in a coup and crowned him under the name Kavad. Khosrow was killed, and Kavad also killed his brothers. He made peace with Byzantium and died less than eight months later, probably of plague.'),
  stats: [{ n: B('< ۸', '< 8'), l: B('ماه پادشاهی', 'months of reign') }, { n: B('۱۷–۱۸', '17–18'), l: B('برادر کشته', 'brothers killed') }],
  mapTitle: B('نقشه: پادشاهی کوتاه قباد دوم', 'Map: the short reign of Kavad II'),
  span: [627, 628],
  events: [
    ev('heraclius', 627, B('۶۲۷–۶۲۸ م.', '627–628 CE'), 'battle', ADUR_GUSNASP, B('پیشروی هراکلیوس', 'Heraclius’ advance'), B('هراکلیوس بخشی از آذربایجان را گرفته، آتشکدهٔ آذرگشنسپ را ویران کرده و سپاهی از خسرو را شکست داده بود. سپاه روم به تیسفون نزدیک می‌شد.', 'Heraclius had taken part of Ādurbādagān, destroyed the fire temple of Ādur Gušnasp and defeated an army sent by Khosrow. The Byzantine army was approaching Ctesiphon.'), 'secure', ['ir-kawad2']),
    ev('prison', 628, B('پیش از ۶۲۸ م.', 'before 628 CE'), 'admin', BABYLON, B('زندان نزدیک بابل', 'Confined near Babylon'), B('به گفتهٔ طبری، شیرویه و چند برادرش در دژی نزدیک بابل زیر نظر بودند. خسرو گویا جانشینی مردانشاه، پسر شیرین، را می‌خواست.', 'According to Ṭabari, Sheroe and some of his brothers were confined to a castle near Babylon. Khosrow seems to have favoured the succession of Mardānšāh, Shirin’s son.'), 'probable', ['ir-kawad2']),
    ev('coup', 628, B('۲۵ فوریهٔ ۶۲۸ م.', '25 February 628 CE'), 'admin', CTESIPHON, B('کودتا و تاج‌گذاری', 'Coup and coronation'), B('سرداران، که از انتقام خسرو می‌ترسیدند، شیرویه را تاج نهادند و خسرو را زندانی کردند (تاریخ‌نامهٔ پاسکال). شیرویه نام شاهی قباد را برگزید.', 'Commanders who feared Khosrow’s revenge crowned Sheroe and imprisoned Khosrow (Chronicon Paschale). Sheroe took the royal name Kavad.'), 'secure', ['ir-kawad2']),
    ev('khosrow', 628, B('۲۸ فوریهٔ ۶۲۸ م.', '28 February 628 CE'), 'admin', CTESIPHON, B('کشتن خسرو و برادران', 'Khosrow and the brothers killed'), B('قباد، به گفتهٔ برخی منابع زیر فشار درباریان، فرمان کشتن پدرش را داد. در همان زمان یا بعدتر ۱۷ یا ۱۸ برادرش را هم کشت. جزئیات روشن نیست.', 'Kavad, under pressure from courtiers according to some sources, had his father executed. At the same time or later he also killed his 17 or 18 brothers. The details are unclear.'), 'probable', ['ir-kawad2']),
    ev('peace', 628, B('۶۲۸ م.', '628 CE'), 'admin', CTESIPHON, B('گفت‌وگوی صلح با هراکلیوس', 'Peace talks with Heraclius'), B('منابع رومی از نامه‌نگاری قباد با هراکلیوس برای صلح سخن می‌گویند. متن نامهٔ قباد در تاریخ‌نامهٔ پاسکال ناقص مانده است.', 'The Byzantine sources describe Kavad’s correspondence with Heraclius about peace. The text of Kavad’s letter in the Chronicon Paschale survives incomplete.'), 'secure', ['ir-kawad2']),
    ev('coins', 628, B('۶۲۸ م.', '628 CE'), 'admin', RAY, B('سکه‌های سال دوم', 'Coins of year 2'), B('همهٔ درهم‌های قباد تاریخ سال دوم پادشاهی دارند. بیشتر ضرابخانه‌های پدرش، از آسورستان تا پارس و طبرستان، هنوز برای او سکه می‌زدند.', 'All of Kavad’s drachms are dated regnal year 2. Most of his father’s mints, from Asōristān to Fārs and Ṭabarestān, still struck for him.'), 'secure', ['ir-kawad2']),
    ev('death', 628, B('۶۲۸ م.', '628 CE'), 'admin', CTESIPHON, B('مرگ، شاید از طاعون', 'Death, probably of plague'), B('قباد پس از کمتر از هشت ماه درگذشت، به احتمال زیاد از طاعونی که در آن هنگام شاهنشاهی را فرا گرفته بود.', 'Kavad died after less than eight months, probably of the plague then ravaging the empire.'), 'disputed', ['ir-kawad2'], DEATH_DATE),
  ],
  dossier: [
    sec('coup', 'چرا شیرویه؟', 'Why Sheroe?',
      [['شیرویه شاید پسر بزرگ خسرو بود، اما این روشن نیست. خسرو گویا مردانشاه، پسر شیرین، را برای جانشینی می‌خواست. سرداران، که می‌ترسیدند خسرو از آنان انتقام بگیرد، شیرویه را از زندان بیرون آوردند و تاج نهادند.'],
        ['Sheroe may have been Khosrow’s eldest son, but this is unclear. Khosrow seems to have wanted Mardānšāh, Shirin’s son, as heir. Commanders who feared Khosrow’s revenge brought Sheroe out of confinement and crowned him.']],
      [['شیندل می‌گوید شاید علت اصلی گزینش شیرویه ناتوانی بزرگان تیسفون در برابر سپاه هراکلیوس بود: باید خسرو را هرچه زودتر با کسی، هر کسی، جانشین می‌کردند. او برادرکشی را از نظر اخلاقی دفاع‌پذیر نمی‌داند، اما می‌گوید شاید در نگاه قباد بهتر از خطر جنگ داخلی بود. هرمز چهارم هم گفته می‌شود برادرانش را کشته بود.'],
        ['Schindel suggests the main reason for choosing Sheroe may have been the Ctesiphon elite’s inability to stop Heraclius: Khosrow had to be replaced as quickly as possible with someone, anyone, else. He does not defend the fratricide ethically, but says Kavad may have seen it as preferable to risking civil war. Hormizd IV too is said to have killed his brothers.']],
      [['وقتی جانشینی را قانون تعیین نمی‌کند، هر برادری تهدیدی است و کشتن مایهٔ امنیت می‌شود. اما چنین «امنیتی» خاندان را تهی کرد: چند سال بعد شاهزادهٔ مردی برای تاج نمانده بود. این برداشت ماست.'],
        ['When no law settles succession, every brother is a threat and killing becomes a form of security. But this “security” emptied the dynasty: a few years later there was hardly a male prince left for the crown. This is our reading.']],
      ['ir-kawad2'], {
        quotes: [{ text: 'Therefore, perhaps it was less due to the specific abilities of the presumptive new ruler, but rather to the urgent need to replace Ḵosrow II as quickly as possible with someone—anyone —else.', fa: 'پس شاید این [گزینش] کمتر به سبب توانایی‌های فرمانروای تازه بود، و بیشتر به سبب نیاز فوری به این‌که خسرو دوم هرچه زودتر با کسی، هر کس دیگری، جانشین شود.', ref: 'N. Schindel, “Kawād II”, Encyclopaedia Iranica (2022)', source: 'ir-kawad2' }],
        photos: ['coin-kavad2'],
      }),
    sec('coins', 'سکه‌ها چه می‌گویند', 'What the coins say',
      [['همهٔ درهم‌های قباد تاریخ سال دوم دارند. بیشتر ضرابخانه‌های سال‌های آخر خسرو، در آسورستان، ماد، خوزستان، پارس، میشان و طبرستان، برای او هم سکه زدند. از خراسان سکهٔ کمی هست و از آذربایجان، جای سپاه هراکلیوس، هنوز سکه‌ای شناخته نیست. قباد بیشتر نوآوری‌های سکهٔ پدرش، مانند بال‌های بهرام بر تاج و واژهٔ «خوره»، را کنار گذاشت.'],
        ['All of Kavad’s drachms are dated year 2. Most mints of Khosrow’s last years, in Asōristān, Media, Ḵuzestān, Fārs, Mēšān and Ṭabarestān, struck for him too. Khorasan issued little, and no coin from Ādurbādagān, where Heraclius’ army stood, is yet known. Kavad dropped most of his father’s coin innovations, such as Bahrām’s wings on the crown and the word xwarrah.']],
      [['شیندل از این سکه‌ها نتیجه می‌گیرد که قباد هنوز تقریباً بر سراسر شاهنشاهی فرمان می‌راند. گزینش نام «قباد» شگفت است، چون تاریخ‌نگاری درباری با قباد یکم میانهٔ خوبی نداشت.'],
        ['From these coins Schindel concludes that Kavad still commanded basically the entire empire. The choice of the name Kavad is surprising, since court historiography was not well disposed towards Kavad I.']],
      [['سکه سند خشک اما راستگویی است: نشان می‌دهد دستگاه اداری هنوز کار می‌کرد، حتی وقتی در دربار شاه‌کشی و برادرکشی بود.'],
        ['Coins are dry but honest evidence: they show the administration still worked, even while the court was killing kings and brothers.']],
      ['ir-kawad2']),
  ],
  synthesis: { title: B('جمع‌بندی', 'Synthesis'), paras: {
    fa: ['قباد دوم با کودتا آمد، پدر و برادرانش را کشت، با روم صلح کرد و پس از چند ماه، احتمالاً از طاعون، مرد. شیندل می‌گوید در آن وضع نظامی و سیاسی، راه بسیار بهتری را دشوار می‌توان تصور کرد. تاریخ مرگش محل بحث است.'],
    en: ['Kavad II came to power by a coup, killed his father and brothers, made peace with Byzantium and died after a few months, probably of plague. Schindel says it is hard to imagine a fundamentally better course in that military and political situation. The date of his death is disputed.'],
  }, sources: ['ir-kawad2'] },
  sources: pick('ir-kawad2', 'ir-ardashir3'),
  photos: photos('coin-kavad2'),
  related: related(['khosrow-ii', 'خسرو دوم، پدرش', 'Khosrow II, his father'], ['ardashir-iii', 'اردشیر سوم، پسرش', 'Ardashir III, his son']),
  wikipedia: 'https://en.wikipedia.org/wiki/Kavad_II',
}

const ARD_DATE = note(
  'شهبازی (ایرانیکا) مرگ اردشیر و برآمدن شهربراز را ۲۷ آوریل ۶۲۹ می‌گذارد. نولدکه و بسیاری دیگر همان روز را در سال ۶۳۰ می‌دانند. ما هر دو را نشان می‌دهیم.',
  'Shahbazi (Iranica) dates Ardashir’s death and Shahrbaraz’s seizure to 27 April 629. Nöldeke and many others put the same day in 630. We show both.')

export const ardashirIII: FeaturedKing = {
  slug: 'ardashir-iii', name: B('اردشیر سوم', 'Ardashir III'), dynastyName: SAS,
  reign: B('۶۲۸–۶۲۹/۶۳۰ م.', '628–629/30 CE'),
  title: B('اردشیر سوم؛ شاه کودک', 'Ardashir III: the child king'),
  lede: B(
    'اردشیر پسر هفت‌سالهٔ قباد دوم بود. پس از مرگ پدرش، بزرگان او را شاه کردند و مه‌آذر گشنسپ، خوانسالار دربار، نایب‌السلطنه شد. قدرت در دست بزرگان بود. شهربراز، سردار بزرگ خسرو دوم، با سپاه به تیسفون آمد، شهر را با خیانت گرفت و اردشیر و نایبش را کشت.',
    'Ardashir was the seven-year-old son of Kavad II. After his father’s death the nobles made him king, and Meh-Ādur Gušnasp, the royal table-master, became regent. Real power lay with the nobles. Shahrbaraz, Khosrow II’s great general, marched on Ctesiphon, took it through treachery and killed Ardashir and his regent.'),
  stats: [{ n: B('۷', '7'), l: B('سالگی در تاج‌گذاری', 'age at accession') }, { n: B('~۱٫۵', '~1.5'), l: B('سال پادشاهی', 'years of reign') }],
  mapTitle: B('نقشه: پادشاهی اردشیر سوم', 'Map: the reign of Ardashir III'),
  span: [628, 630],
  events: [
    ev('accession', 628, B('سپتامبر ۶۲۸ م.', 'September 628 CE'), 'admin', CTESIPHON, B('شاه هفت‌ساله', 'A seven-year-old king'), B('بزرگان اردشیر را شاه کردند و مه‌آذر گشنسپ نایب‌السلطنه شد. مادرش رومی بود و این شاید او را کم‌محبوب‌تر کرد. او را «کوچک» می‌خواندند.', 'The nobles made Ardashir king, and Meh-Ādur Gušnasp became regent. His mother was Byzantine, which probably made him less popular. He was surnamed “the Little One”.'), 'secure', ['ir-ardashir3']),
    ev('plague', 628, B('۶۲۸ م.', '628 CE'), 'admin', BABYLON, B('طاعون', 'Plague'), B('به گفتهٔ یادداشت نولدکه، طاعون ۶۲۸ نزدیک به نیمی از مردم عراق را کشت.', 'According to Nöldeke’s note, the plague of 628 killed almost half of Iraq’s population.'), 'probable', ['ir-ardashir3']),
    ev('khazars', 629, B('۶۲۹ م.', '629 CE'), 'battle', CAUCASUS, B('یورش خزران', 'Khazar invasion'), B('سپاهی از خزران بر مرز شمالی تاخت. تنها شهربراز توانست جلوی آنان را بگیرد.', 'A Khazar army descended on the northern frontier and was held in check only by Shahrbaraz.'), 'probable', ['ir-ardashir3']),
    ev('fall', 629, B('۲۷ آوریل ۶۲۹ (یا ۶۳۰) م.', '27 April 629 (or 630) CE'), 'battle', CTESIPHON, B('گرفتن تیسفون و کشتن شاه', 'Ctesiphon taken, the king killed'), B('شهربراز با هراکلیوس پیمان بست، با ۶۰۰۰ مرد به تیسفون آمد، آن را محاصره کرد و با خیانت گرفت. اردشیر، مه‌آذر گشنسپ و بسیاری از بزرگان را کشت.', 'Shahrbaraz made a pact with Heraclius, marched on Ctesiphon with 6,000 men, besieged it and took it through treachery. He killed Ardashir, Meh-Ādur Gušnasp and many other notables.'), 'disputed', ['ir-ardashir3'], ARD_DATE),
    ev('tomb', 630, B('روایت دیرین', 'late tradition'), 'admin', MESENE, B('آرامگاه در میشان (روایت)', 'Tomb in Mesene (tradition)'), B('به گفتهٔ روایتی دیرین (مجمل التواریخ)، شاه کودک در میشان به خاک سپرده شد.', 'According to a late tradition (Mojmal), the child king was buried in Mēšān (Mesene).'), 'disputed', ['ir-ardashir3'], note('این تنها روایتی دیرین است و گواه دیگری ندارد.', 'This is only a late tradition with no other evidence.')),
  ],
  dossier: [
    sec('regency', 'نایب‌السلطنهٔ دادگر و کشوری از هم پاشیده', 'A fair regent and a crumbling realm',
      [['مه‌آذر گشنسپ، به گفتهٔ شهبازی، نیک‌خواه و وفادار بود و پس از سال‌های فاجعه‌بار و طاعون، فرمانروایی دادگرانه‌اش امید نظم را زنده کرد. اما ثعالبی می‌گوید وضع بسیار سخت بود: فرمانروایان محلی و سرداران آن‌قدر نیرومند شده بودند که از دولت مرکزی فرمان نمی‌بردند، دستگاه اداری از هم می‌پاشید و عرب‌ها و ترکان به مرزها می‌تاختند.'],
        ['Meh-Ādur Gušnasp, Shahbazi says, was well-meaning and loyal, and after the catastrophic years and the plague his fair rule promised a return to order. But as Ṯaʿālebi says, the situation was extremely grave: local chiefs and army leaders had grown too strong to obey the centre, the administration was disintegrating, and Arabs and Turks were attacking the borders.']],
      [['سکه‌های نخستین اردشیر او را جوان با تاج کنگره‌دار نشان می‌دهند. در سری دوم تاج بال عقاب دارد. شهبازی این را شاید نشانهٔ استوار شدن قدرت او می‌داند. بیشتر منابع پادشاهی او را یک سال و شش ماه می‌نویسند؛ هشام کلبی یک سال و هفت ماه.'],
        ['Ardashir’s first coins show him as a youth in a crenellated crown. On a second series the crown bears an eagle’s wings. Shahbazi reads this as perhaps a sign that his authority had been established. Most sources give him one year and six months; Hešām Kalbi gives one year and seven months.']],
      [['وقتی شاه کودک است، قدرت به دست کسی می‌افتد که سپاه دارد. دادگری نایب‌السلطنه نتوانست جای ارتش وفادار را بگیرد.'],
        ['When the king is a child, power falls to whoever has an army. The regent’s fairness could not replace a loyal army.']],
      ['ir-ardashir3'], {
        quotes: [{ text: 'Local chiefs and army leaders had gained too much power to obey the central government; imperial administration was disintegrating, and the Arabs and the Turks were attacking Iranian border regions', fa: 'فرمانروایان محلی و سرداران آن‌قدر نیرومند شده بودند که از دولت مرکزی فرمان نبرند؛ دستگاه اداری شاهنشاهی از هم می‌پاشید، و عرب‌ها و ترکان به مرزهای ایران می‌تاختند.', ref: 'A. Sh. Shahbazi, “Ardašīr III”, Encyclopaedia Iranica (1986), paraphrasing Ṯaʿālebī', source: 'ir-ardashir3' }],
        photos: ['coin-ardashir3'],
      }),
  ],
  synthesis: { title: B('جمع‌بندی', 'Synthesis'), paras: {
    fa: ['اردشیر سوم کودکی بود که بزرگان بر تخت نشاندند. نایبش دادگر بود، اما کشور از هم می‌پاشید. شهربراز تیسفون را گرفت و او را کشت. سال مرگش (۶۲۹ یا ۶۳۰) محل بحث است.'],
    en: ['Ardashir III was a child the nobles put on the throne. His regent was fair, but the realm was falling apart. Shahrbaraz took Ctesiphon and killed him. The year of his death (629 or 630) is disputed.'],
  }, sources: ['ir-ardashir3'] },
  sources: pick('ir-ardashir3', 'ir-kawad2'),
  photos: photos('coin-ardashir3'),
  related: related(['kavad-ii', 'قباد دوم، پدرش', 'Kavad II, his father'], ['shahrbaraz', 'شهربراز، کشندهٔ او', 'Shahrbaraz, his killer']),
  wikipedia: 'https://en.wikipedia.org/wiki/Ardashir_III',
}

export const shahrbaraz: FeaturedKing = {
  slug: 'shahrbaraz', name: B('شهربراز', 'Shahrbaraz'), dynastyName: SAS,
  reign: B('۶۲۹/۶۳۰ م.', '629/630 CE'),
  title: B('شهربراز؛ سرداری که شاه شد', 'Shahrbaraz: the general who made himself king'),
  lede: B(
    'شهربراز (شهروراز) نامدارترین سردار خسرو دوم بود و سپاهش در خاک روم هنوز شکست نخورده بود. در آشوب پس از خسرو، با هراکلیوس پیمان بست، تیسفون را گرفت و شاه کودک را کشت. او از خاندان ساسانی نبود. چند هفته بعد بزرگان به رهبری فسفرخ او را کشتند.',
    'Shahrbaraz (Šahrwarāz) was Khosrow II’s most distinguished general, and his army on Byzantine soil was still undefeated. In the chaos after Khosrow he made a pact with Heraclius, took Ctesiphon and killed the child king. He was not of the Sasanian house. A few weeks later nobles led by Fosfarrūḵ killed him.'),
  stats: [{ n: B('۶۰۰۰', '6,000'), l: B('مرد در لشکرکشی به تیسفون', 'men in the march on Ctesiphon') }],
  mapTitle: B('نقشه: شهربراز', 'Map: Shahrbaraz'),
  span: [628, 630],
  events: [
    ev('khazars', 629, B('۶۲۹ م.', '629 CE'), 'battle', CAUCASUS, B('نگه داشتن خزران', 'Holding the Khazars'), B('به گفتهٔ منابع ارمنی، تنها شهربراز توانست جلوی یورش خزران را بگیرد.', 'According to the Armenian sources, only Shahrbaraz could hold back the Khazar invasion.'), 'probable', ['ir-ardashir3']),
    ev('seize', 629, B('۲۷ آوریل ۶۲۹ (یا ۶۳۰) م.', '27 April 629 (or 630) CE'), 'battle', CTESIPHON, B('گرفتن تیسفون', 'Ctesiphon seized'), B('با هراکلیوس پیمان بست، با ۶۰۰۰ مرد به تیسفون آمد و آن را با خیانت گرفت. اردشیر سوم و بزرگان بسیاری را کشت و تاج را برای خود برداشت.', 'He made a pact with Heraclius, marched on Ctesiphon with 6,000 men and took it through treachery. He killed Ardashir III and many notables and took the crown for himself.'), 'disputed', ['ir-ardashir3'], ARD_DATE),
    ev('killed', 630, B('۶۳۰ م.', '630 CE'), 'admin', CTESIPHON, B('کشته شدن', 'Murdered'), B('بزرگانی به رهبری فسفرخ بر او توطئه کردند و او را کشتند. سپس بوران، دختر خسرو دوم، شاه شد.', 'Nobles led by Fosfarrūḵ plotted against him and killed him. Then Boran, daughter of Khosrow II, came to the throne.'), 'secure', ['ir-boran']),
  ],
  dossier: [
    sec('general', 'سردار و تاج', 'The general and the crown',
      [['شهربراز سپاه اصلی ایران را در جنگ با روم فرمان می‌داد. پس از کودتای ۶۲۸ و مرگ قباد، دربار تیسفون در دست بزرگان و یک شاه کودک بود. شهربراز با هراکلیوس پیمان بست، تیسفون را گرفت و شاه شد. سکه‌ای که بی‌گمان از او باشد در منابعی که بررسی کردیم یاد نشده است.'],
        ['Shahrbaraz commanded Iran’s main army in the war with Byzantium. After the coup of 628 and Kavad’s death, the court at Ctesiphon was in the hands of nobles and a child king. Shahrbaraz made a pact with Heraclius, took Ctesiphon and became king. The sources we checked mention no coin certainly his.']],
      [['شیندل می‌گوید از هرمز چهارم به بعد شاه دیگر خود سپاه را در میدان رهبری نمی‌کرد. این شکافی میان سپاه و شاه پدید آورد که به سردارانی مانند بهرام چوبین و شهربراز امکان داد تاج را بخواهند؛ چیزی که پیش‌تر در تاریخ ساسانیان شنیده نشده بود.'],
        ['Schindel notes that from Hormizd IV on, the king no longer led his army in the field. This may have opened a gap between army and king that let field commanders such as Bahrām Čōbin or Shahrbaraz bid for the throne, something unheard of earlier in Sasanian history.']],
      [['شهربراز نشان داد که در پایان، مشروعیت خاندانی در برابر شمشیر بی‌دفاع بود. اما شمشیر هم مشروعیت نمی‌ساخت: چند هفته بعد کشته شد. قدرتی که فقط بر زور بنا شود، با زور هم از دست می‌رود.'],
        ['Shahrbaraz showed that in the end dynastic legitimacy was defenceless against the sword. But the sword could not create legitimacy either: within weeks he was dead. Power built only on force is lost by force.']],
      ['ir-kawad2', 'ir-ardashir3', 'ir-boran']),
  ],
  synthesis: { title: B('جمع‌بندی', 'Synthesis'), paras: {
    fa: ['شهربراز، سردار بزرگ خسرو دوم، تیسفون را گرفت، شاه کودک را کشت و خود را شاه کرد، اما چند هفته بعد کشته شد. سال این رویدادها (۶۲۹ یا ۶۳۰) محل بحث است.'],
    en: ['Shahrbaraz, Khosrow II’s great general, took Ctesiphon, killed the child king and made himself king, but was killed a few weeks later. The year of these events (629 or 630) is disputed.'],
  }, sources: ['ir-ardashir3', 'ir-boran'] },
  sources: pick('ir-ardashir3', 'ir-kawad2', 'ir-boran'),
  related: related(['ardashir-iii', 'اردشیر سوم، شاهی که کشت', 'Ardashir III, the king he killed'], ['boran', 'بوران، جانشینش', 'Boran, his successor']),
  wikipedia: 'https://en.wikipedia.org/wiki/Shahrbaraz',
}
