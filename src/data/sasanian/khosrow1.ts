/**
 * Khosrow I Anushirvan (531–579 CE), featured, with a step-by-step diagram of the sack of Antioch (540).
 * Narrative: Encyclopaedia Iranica (Rubin “Ḵosrow I ii. Reforms”; Shahbazi “Sasanian dynasty” and “Byzantine-Iranian relations”;
 * Bivar “Hephthalites”; Bosworth “Abnāʾ”; Richter-Bernburg “Gondēšāpur”; Khaleghi-Motlagh “Borzūya”; Utas “Chess”) paraphrased.
 * Verbatim quotes: Procopius, History of the Wars 1.22–2.17, tr. H. B. Dewing (1914); Agathias 2.28–2.31, tr. J. D. Frendo (1975);
 * Rubin and Shahbazi (Iranica). The chess story, the Borzuya tale and the chain of justice are labelled as tradition or legend.
 */
import type { BattleDiagram, BattleUnit, Bi, FeaturedKing } from '../featured/types'
import { ANTIOCH, BUKHARA, CTESIPHON, DARA, EDESSA, GUNDESHAPUR, HADRAMAUT, MARV, PETRA, PHASIS, SANAA, SAS, UBULLA, WEH_ANTIOCH, battleClipFor, clipFor, ev, note, photos, pick, related, sec } from './common'

const B = (fa: string, en: string): Bi => ({ fa, en })
const P = (id: string, fa: string, en: string, at: [number, number]): BattleUnit => ({ id: `p-${id}`, side: 'persian', kind: 'army', label: B(fa, en), at })
const R = (id: string, fa: string, en: string, at: [number, number]): BattleUnit => ({ id: `r-${id}`, side: 'greek', kind: 'army', label: B(fa, en), at })

const PROCOPIUS_ONLY = note(
  'جزئیات این گام تنها از پروکوپیوس است. او در انطاکیه نبود و گزارش را از دیگران شنیده بود، و با خسرو دشمنی داشت. شهبازی (ایرانیکا) تنها گشودن و غارت شهر و کوچاندن مردم را تأیید می‌کند.',
  'The details of this step come from Procopius alone. He was not at Antioch, had his account from others, and was hostile to Khosrow. Shahbazi (Iranica) confirms only the capture, the plunder and the deportation.')

const EVENTS = [
  ev('accession', 531, B('۵۳۱ م.', '531 CE'), 'admin', CTESIPHON, B('رسیدن به تخت', 'Accession'),
    B('پس از مرگ قباد، پسر بزرگ‌ترش کاووس تخت را خواست، اما بزرگان به وصیت قباد پایبند ماندند و خسرو را شاه کردند.', 'After Kavad died his eldest son Kāus claimed the throne, but the nobles kept to Kavad’s testament and made Khosrow king.'),
    'secure', ['ir-sasdyn', 'procopius2']),
  ev('peace', 532, B('۵۳۲ م.', '532 CE'), 'admin', DARA, B('«صلح بی‌پایان»', 'The “Endless Peace”'),
    B('خسرو با یوستینیانوس صلح بست. ایران دستاوردهایش در لازیکا را پس داد، روم دستاوردهایش در ارمنستان ایران را، و روم پذیرفت ۱۱ هزار پوند زر برای پاسداری از گذرگاه‌های قفقاز بپردازد. دارا در دست روم ماند.', 'Khosrow made peace with Justinian. Persia gave back its gains in Lazica, Rome gave back its gains in Persarmenia, and Rome agreed to pay 11,000 pounds of gold for the defence of the Caucasus passes. Dara stayed in Roman hands.'),
    'secure', ['ir-sasdyn', 'ir-byzir', 'procopius2']),
  ev('plot', 532, B('حدود ۵۳۲ م.', 'c. 532 CE'), 'admin', CTESIPHON, B('توطئهٔ بزرگان', 'The nobles’ plot'),
    B('گروهی از بزرگان خواستند پسر زامس، برادر خسرو، را به جای او بنشانند. خسرو توطئه را کشف کرد و توطئه‌گران را کشت.', 'A group of nobles planned to put the son of Zames, Khosrow’s brother, on the throne. Khosrow uncovered the plot and had the plotters killed.'),
    'probable', ['procopius2', 'ir-sasdyn'], note('شهبازی می‌گوید شاید این رویداد با سرکوب دوبارهٔ مزدکیان پیوند داشت؛ این حدس است.', 'Shahbazi suggests it may be linked to a renewed purge of the Mazdakites; that is a guess.')),
  ev('reform', 535, B('دههٔ ۵۳۰ و پس از آن', 'the 530s and after'), 'admin', CTESIPHON, B('پیمایش زمین و مالیات تازه', 'The land survey and the new tax'),
    B('بر پایهٔ پیمایش زمین، که قباد آغاز کرده بود، مالیات زمین به نرخ ثابت پولی برای هر جریب و هر نوع کشت تعیین شد. سرانه بر پایهٔ توان مالی بود و جوان‌تران از بیست و پیرتران از پنجاه از آن معاف بودند.', 'On the basis of a land survey begun under Kavad, the land tax was set at fixed money rates for each jarib and each kind of crop. The poll tax followed the payer’s means, and those under twenty and over fifty were exempt.'),
    'probable', ['ir-reforms', 'ir-sasdyn'], note('سال دقیق اجرای اصلاحات روشن نیست؛ این نقطه تنها برای جای دادن روی نقشه است.', 'The exact years of the reform are unknown; this point only places it on the map.')),
  ev('antioch', 540, B('ژوئن ۵۴۰ م.', 'June 540 CE'), 'battle', ANTIOCH, B('گشودن و غارت انطاکیه', 'The capture and sack of Antioch'),
    B('خسرو صلح را شکست، به سوریه تاخت و انطاکیه، بزرگ‌ترین شهر روم در شرق، را گرفت و غارت کرد.', 'Khosrow broke the peace, invaded Syria, and took and plundered Antioch, the greatest Roman city of the East.'),
    'secure', ['ir-sasdyn', 'ir-byzir', 'procopius2']),
  ev('weh-antioch', 540, B('۵۴۰ م.', '540 CE'), 'admin', WEH_ANTIOCH, B('«انطاکیهٔ بهتر خسرو»', '“Khosrow’s Better Antioch”'),
    B('اسیران انطاکیه را در شهری تازه نزدیک تیسفون نشاند: وه‌انتیوخ‌خسرو، که «رومگان» هم خوانده می‌شد. پروکوپیوس می‌گوید برایشان گرمابه و میدان اسب‌دوانی ساخت.', 'He settled the captives of Antioch in a new town near Ctesiphon: Weh-Antioch-Khosrow, also called Rumagān. Procopius says he built them a bath and a hippodrome.'),
    'secure', ['ir-sasdyn', 'procopius2']),
  ev('petra', 541, B('۵۴۱ م.', '541 CE'), 'battle', PETRA, B('گشودن پترا در لازیکا', 'Petra in Lazica taken'),
    B('لازها از روم بریدند و خسرو را فراخواندند. خسرو دژ پترا را در کرانهٔ دریای سیاه گرفت.', 'The Lazi broke with Rome and called Khosrow in. Khosrow took the fortress of Petra on the Black Sea coast.'),
    'secure', ['procopius2', 'ir-sasdyn']),
  ev('edessa', 544, B('۵۴۴ م.', '544 CE'), 'battle', EDESSA, B('محاصرهٔ ناکام اورفا', 'The failed siege of Edessa'),
    B('خسرو اورفا (ادسا) را در میان گرفت، اما نتوانست آن را بگیرد.', 'Khosrow besieged Edessa but could not take it.'),
    'secure', ['procopius2']),
  ev('truce', 545, B('۵۴۵ م.', '545 CE'), 'admin', DARA, B('آتش‌بس پنج‌ساله', 'The five-year truce'),
    B('آتش‌بسی پنج‌ساله بسته شد. یوستینیانوس ۲ هزار پوند زر داد و خسرو بسیاری از اسیران رومی را آزاد کرد، اما لازیکا را نگه داشت.', 'A five-year truce was made. Justinian paid 2,000 pounds of gold and Khosrow freed many Roman captives, but kept Lazica.'),
    'secure', ['ir-sasdyn']),
  ev('lazic', 549, B('۵۴۹–۵۵۷ م.', '549–557 CE'), 'campaign', PHASIS, B('جنگ لازیکا', 'The Lazic War'),
    B('در سال چهارم آتش‌بس، روم سپاه به لازیکا فرستاد و جنگی تازه درگرفت. به گفتهٔ شهبازی ایرانیان روی هم رفته پیروز بودند و در همان حال گفت‌وگو ادامه داشت؛ یوستینیانوس سالی ۴۰۰ پوند زر می‌پرداخت.', 'In the fourth year of the truce Rome sent an army into Lazica and a new war began. According to Shahbazi the Persians were on the whole victorious, and talks went on all the while; Justinian paid 400 pounds of gold a year.'),
    'probable', ['ir-sasdyn', 'ir-byzir', 'procopius2'], note('پروکوپیوس و آگاثیاس جزئیات بسیار دارند، اما داوری دربارهٔ برنده در این جنگ دراز آسان نیست.', 'Procopius and Agathias give much detail, but it is not easy to judge who won this long war.')),
  ev('anoshazad', 550, B('حدود ۵۵۰ م.', 'c. 550 CE'), 'admin', GUNDESHAPUR, B('شورش انوشزاد در جندی‌شاپور', 'Anōšazād’s revolt at Gondēšāpur'),
    B('انوشزاد، پسر خسرو، در جندی‌شاپور شورید و شورش سرکوب شد.', 'Anōšazād, a son of Khosrow, revolted at Gondēšāpur and the revolt was put down.'),
    'probable', ['ir-gondesapur']),
  ev('hephthalites', 560, B('میان ۵۵۸ و ۵۶۱ م.', 'between 558 and 561 CE'), 'battle', BUKHARA, B('نابودی هپتالیان با یاری ترکان', 'The Hephthalites destroyed with the Turks'),
    B('خسرو با سنجبو (ایستمی)، خاقان ترکان، هم‌پیمان شد. دو قدرت در نبردی بزرگ نزدیک بخارا هپتالیان را درهم شکستند و سرزمینشان را در امتداد جیحون میان خود بخش کردند.', 'Khosrow allied with Sinjibu (Ištämi), the khagan of the Turks. In a great battle near Bukhara the two powers crushed the Hephthalites and divided their lands along the Oxus.'),
    'disputed', ['ir-hephthalites', 'ir-sasdyn'], note('بیوار این را میان ۵۵۸ و ۵۶۱ م. می‌گذارد. شهبازی در یک جا آن را پس از پیمان ۵۶۲ م. می‌آورد. جای نبرد هم تنها «نزدیک بخارا» گفته شده است.', 'Bivar dates it between 558 and 561. Shahbazi in one passage puts it after the treaty of 562. The battle site is only said to be “near Bukhara”.')),
  ev('treaty562', 562, B('۵۶۲ م.', '562 CE'), 'admin', DARA, B('پیمان پنجاه‌ساله', 'The fifty-year treaty'),
    B('پیمانی بسته شد که منادر جزئیات آن را آورده است: ایران گذرگاه‌های قفقاز را می‌بندد، روم با سپاه از مرز نمی‌گذرد، بازرگانی نظم می‌گیرد، مسیحیان ایران آزادی دینی دارند و دعواهای مرزی به داوری سپرده می‌شود. روم سالانه زر می‌پرداخت.', 'A treaty was made whose details Menander records: Persia guards the Caucasus passes, Rome sends no army across the border, trade is regulated, Persia’s Christians have freedom of worship, and border disputes go to arbitration. Rome paid gold every year.'),
    'secure', ['ir-sasdyn', 'ir-byzir']),
  ev('turks', 569, B('۵۶۹ یا ۵۷۰ م.', '569 or 570 CE'), 'campaign', MARV, B('یورش ترکان', 'The Turkish raid'),
    B('ترکان، اکنون همسایهٔ تازهٔ ایران، با تشویق روم به مرزهای خاوری تاختند. خسرو یورش را مهار کرد، با آنان پیمان بست و مرزهای شمال خاوری را استوار کرد.', 'The Turks, now Persia’s new neighbours, raided the eastern borders with Roman encouragement. Khosrow contained the raid, made a treaty with them and fortified the north-east.'),
    'probable', ['ir-sasdyn']),
  ev('yemen', 570, B('حدود ۵۷۰ م.', 'c. 570 CE'), 'campaign', SANAA, B('لشکرکشی به یمن', 'The expedition to Yemen'),
    B('سیف پسر ذی‌یزن برای راندن حبشیان از یمن یاری خواست. خسرو با دودلی ۸۰۰ سوار به فرماندهی وهرز با هشت کشتی فرستاد. دو کشتی غرق شد. سپاه در حضرموت پیاده شد، مسروق شاه حبشی را کشت و صنعا را گرفت.', 'Sayf b. Ḏī Yazan asked for help to drive the Ethiopians out of Yemen. Khosrow, reluctantly, sent 800 horsemen under Vahrez in eight ships. Two ships were lost. The force landed in Hadramaut, killed the Ethiopian king Masruq and took Sanaa.'),
    'probable', ['ir-abna', 'ir-reforms'], { ...note('تاریخ تقریبی است. در یک روایت این سپاه از زندانیان بود؛ روبین می‌گوید از دیلم گرد آمده بود.', 'The date is approximate. In one version the force was made of prisoners; Rubin says it was recruited in Daylam.'), fleet: [UBULLA, [51.6, 25.6], [56.6, 26.4], [59.6, 22.4], [55.0, 16.6], HADRAMAUT], route: [HADRAMAUT, SANAA] }),
  ev('dara', 573, B('۵۷۳ م.', '573 CE'), 'battle', DARA, B('گشودن دارا', 'Dara captured'),
    B('در ۵۷۲ م. روم پرداخت زر برای قفقاز را بس کرد و جنگ تازه آغاز شد. خسرو، با آنکه پیر و ناتوان بود، خود به میدان رفت و دارا را گرفت. روم آتش‌بس یک‌ساله را به ۴۵ هزار سکهٔ زر خرید.', 'In 572 Rome stopped paying for the Caucasus and a new war began. Khosrow, old and frail, took the field himself and captured Dara. Rome bought a one-year truce for 45,000 gold coins.'),
    'secure', ['ir-sasdyn']),
  ev('death', 579, B('۵۷۹ م.', '579 CE'), 'admin', CTESIPHON, B('مرگ خسرو', 'Khosrow’s death'),
    B('خسرو در ۵۷۹ م. از بیماری درگذشت، هنگامی که جنگ در ارمنستان هنوز ادامه داشت. پسرش هرمز چهارم جانشین شد.', 'Khosrow died of illness in 579, while war in Armenia was still going on. His son Hormizd IV succeeded him.'),
    'secure', ['ir-sasdyn', 'ir-hormozd4']),
]

const antioch: BattleDiagram = {
  id: 'antioch',
  title: B('گشودن انطاکیه، ۵۴۰ م. (طرح‌وار، به روایت پروکوپیوس)', 'The capture of Antioch, 540 CE (schematic, after Procopius)'),
  when: B('ژوئن ۵۴۰ م.', 'June 540 CE'),
  sides: { persian: B('ایرانیان (ساسانی)', 'Iranians (Sasanian)'), greek: B('رومیان و مردم انطاکیه', 'Romans and the people of Antioch') },
  land: ['M0 0 L100 0 L100 46 L0 46 Z', 'M0 52 L100 52 L100 60 L0 60 Z'],
  labels: [
    { at: [50, 49], text: B('رود اورونتس (عاصی)', 'River Orontes'), tone: 'sea' },
    { at: [86, 4], text: B('بلندی (ارگ)', 'The height (citadel)') },
    { at: [40, 38], text: B('شهر', 'The city') },
    { at: [8, 30], text: B('دروازهٔ دافنه', 'Daphne gate') },
  ],
  phases: [
    {
      id: 'ransom', title: B('درخواست باج', 'The ransom demand'),
      body: B('خسرو کنار رود اورونتس اردو زد و برای بازگشت ده قنطار زر خواست. شش هزار سرباز از لبنان به شهر رسیده بودند. فردای آن روز، مردم از روی باروها به خسرو دشنام دادند و نزدیک بود فرستادهٔ او را با تیر بکشند.', 'Khosrow camped by the Orontes and asked ten centenaria of gold to withdraw. Six thousand soldiers from Lebanon had reached the city. Next day the people insulted Khosrow from the battlements and nearly shot his envoy.'),
      units: [P('main', 'خسرو و سپاه', 'Khosrow and the army', [40, 56]), R('garrison', 'سربازان و مردم', 'Soldiers and townspeople', [50, 30])],
      certainty: 'probable', certaintyNote: PROCOPIUS_ONLY.certaintyNote, sources: ['procopius2'],
    },
    {
      id: 'assault', title: B('یورش به بلندی', 'The assault on the height'),
      body: B('خسرو بخشی از سپاه را به چند جای دیوار کنار رود فرستاد و خود با بهترین سپاهیان به بلندی تاخت، که دیوار آنجا سست‌تر بود. رومیان میان برج‌ها تیرهای چوبی بستند تا جای بیشتری برای مدافعان باشد. سربازان و جوانان شهر سخت جنگیدند.', 'Khosrow sent part of the army against several points of the wall by the river and himself led the best troops against the height, where the wall was weakest. The Romans lashed timbers between the towers to make room for more defenders. Soldiers and young townsmen fought hard.'),
      units: [P('height', 'خسرو و بهترین سپاهیان', 'Khosrow and the best troops', [88, 18]), P('river', 'یورش کنار رود', 'Attacks by the river', [40, 56]), R('wall', 'مدافعان دیوار', 'Defenders on the wall', [72, 12]), R('garrison', 'مردم شهر', 'Townspeople', [44, 26])],
      arrows: [{ side: 'persian', path: [[96, 26], [92, 22], [88, 18]] }, { side: 'persian', path: [[40, 56], [40, 50], [40, 46]] }],
      certainty: 'probable', certaintyNote: PROCOPIUS_ONLY.certaintyNote, sources: ['procopius2'],
    },
    {
      id: 'collapse', title: B('فرو ریختن داربست و گریز سربازان', 'The platform collapses; the soldiers flee'),
      body: B('طناب‌ها پاره شد و داربست با مردانش فرو ریخت. دیگران پنداشتند دیوار شکسته و پس نشستند. سربازان سوار شدند و به سوی دروازه‌ها تاختند و در تنگنا بسیاری از مردم را زیر پا کشتند. به گفتهٔ پروکوپیوس، ایرانیان راه دروازهٔ دافنه را باز گذاشتند تا سربازان بروند.', 'The ropes broke and the platform fell with its men. Others thought the wall had been breached and fell back. The soldiers mounted and rode for the gates, trampling many townspeople in the crush. According to Procopius the Persians left the road to the Daphne gate open so the soldiers could leave.'),
      units: [P('height', 'ایرانیان روی دیوار', 'Persians on the wall', [74, 14]), R('flee', 'گریز سربازان', 'Soldiers in flight', [14, 30]), R('garrison', 'مردم شهر', 'Townspeople', [44, 26])],
      arrows: [{ side: 'persian', path: [[88, 18], [80, 16], [74, 14]] }, { side: 'greek', path: [[50, 30], [30, 32], [14, 30]] }],
      certainty: 'disputed', certaintyNote: B('این‌که خسرو عمداً راه گریز را باز گذاشت تنها «به گفتهٔ برخی» است؛ خود پروکوپیوس دلیل دیگری هم می‌آورد. باقی جزئیات هم تنها از پروکوپیوس است.', 'That Khosrow left the escape road open on purpose is only what “some say”; Procopius himself offers another reason too. The other details also rest on Procopius alone.'), sources: ['procopius2'],
    },
    {
      id: 'city', title: B('نبرد در شهر و کشتار', 'Street fighting and massacre'),
      body: B('ایرانیان از بلندی پایین آمدند. جوانان شهر، بیشتر بی‌سلاح و با سنگ، نخست آنان را پس راندند. خسرو سپاهیان بهتری فرستاد. ایرانیان مدافعان را پراکندند، کشتار بزرگی شد و شهر غارت شد. سپس مردم را به ایران کوچاندند.', 'The Persians came down from the height. The young men of the city, mostly unarmed and throwing stones, at first pushed them back. Khosrow sent better troops. The Persians scattered the defenders, there was a great slaughter, and the city was plundered. Then the people were deported to Persia.'),
      units: [P('descend', 'ایرانیان در شهر', 'Persians in the city', [56, 24]), R('youths', 'جوانان شهر', 'Young men of the city', [40, 30])],
      arrows: [{ side: 'persian', path: [[74, 14], [64, 18], [56, 24]] }],
      certainty: 'probable', certaintyNote: B('غارت و کوچاندن را شهبازی (ایرانیکا) هم تأیید می‌کند؛ جزئیات نبرد خیابانی تنها از پروکوپیوس است.', 'The plunder and deportation are confirmed by Shahbazi (Iranica) too; the details of the street fighting are Procopius’s alone.'), sources: ['procopius2', 'ir-sasdyn'],
    },
  ],
}

export const khosrowI: FeaturedKing = {
  slug: 'khosrow-i', name: B('خسرو یکم انوشیروان', 'Khosrow I Anushirvan'), dynastyName: SAS,
  reign: B('۵۳۱–۵۷۹ م.', '531–579 CE'),
  title: B('خسرو یکم انوشیروان؛ مالیات، جنگ و نام «دادگر»', 'Khosrow I Anushirvan: taxes, war and the name “the Just”'),
  lede: B(
    'خسرو یکم، پسر قباد، چهل‌وهشت سال شاه بود. مالیات را بر پایهٔ پیمایش زمین از نو ساخت، با روم صلح «بی‌پایان» بست و آن را شکست، انطاکیه را گرفت، با ترکان هپتالیان را نابود کرد و سپاهی به یمن فرستاد. سنت پسین او را «انوشیروان دادگر» نامید؛ این صفحه روایت تاریخی را از افسانه جدا می‌کند.',
    'Khosrow I, son of Kavad, reigned for forty-eight years. He rebuilt the tax system on a land survey, signed an “Endless Peace” with Rome and broke it, took Antioch, destroyed the Hephthalites with the Turks and sent a force to Yemen. Later tradition called him “Anushirvan the Just”; this page keeps the history apart from the legend.'),
  stats: [{ n: B('۴۸', '48'), l: B('سال پادشاهی', 'years of reign') }, { n: B('۵۴۰', '540'), l: B('گشودن انطاکیه', 'Antioch taken') }, { n: B('۸۰۰', '800'), l: B('سوار به یمن', 'horsemen sent to Yemen') }],
  mapTitle: B('نقشهٔ متحرک: از انطاکیه و لازیکا تا بخارا و یمن', 'Animated map: from Antioch and Lazica to Bukhara and Yemen'),
  events: EVENTS, span: [531, 579],
  campaign: {
    id: 'reign',
    title: B('پادشاهی خسرو یکم، گام‌به‌گام (۵۳۱–۵۷۹ م.)', 'The reign of Khosrow I, step by step (531–579 CE)'),
    intro: {
      fa: ['پادشاهی خسرو به روایت ایرانیکا (روبین، شهبازی، بیوار، باسورث) و پروکوپیوس. راه دریایی به یمن طرح‌وار است. نمودار گام‌به‌گام گشودن انطاکیه زیر نقشه آمده است.'],
      en: ['The reign of Khosrow as told by Iranica (Rubin, Shahbazi, Bivar, Bosworth) and Procopius. The sea route to Yemen is schematic. A step-by-step diagram of the capture of Antioch is below the map.'],
    },
    events: EVENTS, span: [531, 579], view: [33, 12, 68, 44],
    places: [
      { name: B('تیسفون', 'Ctesiphon'), c: CTESIPHON }, { name: B('انطاکیه', 'Antioch'), c: ANTIOCH, left: true }, { name: B('دارا', 'Dara'), c: DARA, dy: -1.3 },
      { name: B('اورفا', 'Edessa'), c: EDESSA, left: true, dy: 1.3 }, { name: B('پترا', 'Petra'), c: PETRA, left: true }, { name: B('جندی‌شاپور', 'Gondēšāpur'), c: GUNDESHAPUR, dy: 1.3 },
      { name: B('بخارا', 'Bukhara'), c: BUKHARA }, { name: B('مرو', 'Marw'), c: MARV, dy: 1.3 }, { name: B('صنعا', 'Sanaa'), c: SANAA, left: true },
    ],
    clip: clipFor('khosrow-i'),
    battles: [antioch],
  },
  shareImage: '/media/khosrow-i/reign-en.png',
  dossier: [
    sec('reform', 'پیمایش زمین و مالیات تازه', 'The land survey and the new tax',
      [['اصلاح مالیات در پایان پادشاهی قباد آغاز شد و خسرو آن را به انجام رساند. بر پایهٔ پیمایش همهٔ زمین‌ها، مالیات زمین به نرخ ثابت پولی شد. به گفتهٔ طبری، هر جریب گندم و جو یک درهم، هر جریب تاک هشت درهم، هر جریب یونجه هفت درهم، و هر چهار نخل پارسی یا شش نخل معمولی یک درهم می‌داد. مالیات در سه یا چهار قسط در سال گرفته می‌شد. موبدان در نقش داور بخش‌ها می‌توانستند در سال‌های بد مالیات را بکاهند یا ببخشند، و هر شکایتی را می‌شد به دیوان شاه برد.', 'سرانه بر پایهٔ توان مالی پرداخت‌کننده بود و همهٔ کسانی که زیر بیست یا بالای پنجاه سال بودند، از هر طبقه، از آن معاف بودند؛ اما معافیت طبقه‌های بالا ماند. کشاورزانی که در آشوب مزدکی زمینشان را از دست داده بودند، به زمین بازگردانده شدند و هدف، به گفتهٔ روبین، کشتزارهای کوچک بود، نه املاک بزرگ. سواران سپاه هم از این درآمد مزد پولی گرفتند.'],
        ['The tax reform began late in Kavad’s reign and Khosrow completed it. On the basis of a survey of all land, the land tax became a fixed money rate. According to Ṭabari, each jarib of wheat or barley paid one drahm, each jarib of vines eight drahms, each jarib of clover seven, and every four Persian date palms or six plain ones one drahm. The tax was paid in three or four instalments a year. Mobads acting as district judges could reduce or remit the tax in bad years, and any complaint could be taken to the royal chancery.', 'The poll tax followed the payer’s means, and everyone under twenty or over fifty, of every class, was exempt; but the upper classes kept their exemptions. Farmers who had lost their land in the Mazdakite turmoil were given it back, and the aim, Rubin says, was small farms rather than large estates. The cavalry were now paid in money from this revenue.']],
      [['پژوهشگران دربارهٔ این اصلاحات هم‌رأی نیستند. گرینیاسکی و کسانی که از او پیروی کردند، نرخ ثابت را برای کشاورز ستمگرانه دانسته‌اند، چون به خشکسالی و جنگ و کم‌وزیاد شدن محصول نگاه نمی‌کرد. روبین پاسخ می‌دهد که این دیدگاه داوری کمابیش یکسره مثبت منابع را نادیده می‌گیرد و سازوکار بخشودگی را از یاد می‌برد. او میان اصلاحات در زمان خسرو و آنچه بعدها شد، که فساد و فرسودگی بود، فرق می‌گذارد.', 'شهبازی می‌گوید این اصلاحات پایهٔ قدرت بزرگان بالا را شکست و دهقانان را به دربار نزدیک کرد. همهٔ منابع ما متن‌های پسین عربی و فارسی‌اند که از سنت دربار ساسانی برآمده‌اند.'],
        ['Scholars disagree about the reform. Grignaschi and those who followed him called the fixed rates oppressive for the farmer, since they ignored drought, war and changing harvests. Rubin answers that this ignores the almost unanimous positive verdict of the sources and forgets the remission mechanism. He distinguishes the reform as it worked under Khosrow from what it later became: corruption and decay.', 'Shahbazi says the reform broke the power base of the high nobility and brought the lesser gentry (dehqāns) closer to the crown. All our sources are later Arabic and Persian texts that go back to the Sasanian court tradition.']],
      [['از دید حق مالکیت، این اصلاحات دو رو دارد. یک رو: مالیاتی که از پیش دانسته است، به اندازهٔ زمین است و نه به اندازهٔ محصول، کشاورز را تشویق می‌کند که بیشتر بکارد، چون آنچه افزون بر نرخ ثابت به دست آورد از آن خود اوست. پیمایش زمین و دفتر ثبت هم، اگر درست نگه داشته شود، مرز دارایی هر کس را روشن می‌کند و دست مأمور دلبخواه را می‌بندد. بازگرداندن زمین به کشاورزان رانده‌شده بازگرداندن حق آنان بود.', 'روی دیگر: همان دفتر ثبت ابزاری برای گرفتن بیشتر هم بود. روبین می‌نویسد این نظام به شاه امکان داد درآمد را پیش‌بینی کند و هزینه را بودجه‌بندی کند؛ یعنی بیشتر از همه به سود دولت بود. زمین هنوز در سایهٔ شاه بود و معافیت بزرگان ماند. قاعدهٔ روشن بهتر از زور بی‌قاعده است، اما قاعده‌ای که تنها شاه می‌نویسد و تنها شاه می‌تواند بشکند، حق به معنای امروزی نیست. این برداشت ماست.'],
        ['Seen through property rights, the reform has two faces. On one side, a tax known in advance, set by the size of the land rather than by the harvest, encourages the farmer to grow more, since whatever he makes above the fixed rate is his own. A survey and a register, if honestly kept, also mark the bounds of each person’s holding and tie the hands of the arbitrary official. Giving land back to dispossessed farmers was giving back what was theirs.', 'On the other side, the same register was a tool for taking more. Rubin writes that the system let the monarch anticipate income and budget expenses; it served the state first of all. Land still lay in the king’s shadow, and the nobles kept their exemptions. A clear rule is better than lawless force, but a rule that only the king writes and only the king can break is not a right in the modern sense. This is our reading.']],
      ['ir-reforms', 'ir-sasdyn'], {
        photos: ['coin-khosrow1'],
        quotes: [
          { text: 'This new system, if efficiently applied, would enable a monarch to anticipate incomes and budget expenses.', fa: 'این نظام تازه، اگر کارآمد اجرا می‌شد، به شاه امکان می‌داد درآمدها را پیش‌بینی کند و هزینه‌ها را بودجه‌بندی کند.', ref: 'Z. Rubin, “Ḵosrow I ii. Reforms”, Encyclopaedia Iranica (2009)', source: 'ir-reforms' },
          { text: 'It is Ḵosrow’s revised poll-tax which bears out, by the very nature of its progressive rates, according to the taxpayer’s means, his basic intention to devise a fundamentally fair system.', fa: 'سرانهٔ بازنگری‌شدهٔ خسرو، با همان نرخ‌های پلکانی‌اش به اندازهٔ توان پرداخت‌کننده، نشان می‌دهد که خواست اصلی او ساختن نظامی در بنیاد دادگرانه بود.', ref: 'Z. Rubin, “Ḵosrow I ii. Reforms”, Encyclopaedia Iranica (2009)', source: 'ir-reforms' },
        ],
      }),
    sec('peace', 'صلح بی‌پایان، ۵۳۲ م.', 'The Endless Peace, 532',
      [['خسرو در آغاز پادشاهی با مخالفت در درون روبه‌رو بود و با یوستینیانوس صلح بست. ایران دستاوردهایش در لازیکا را پس داد و روم دستاوردهایش در ارمنستان ایران را. روم پذیرفت ۱۱ هزار پوند زر برای پاسداری از گذرگاه‌های قفقاز بپردازد. دارا در دست روم ماند، اما دیگر ستاد سپاه نبود. پس از هشت سال، این صلح «بی‌پایان» شکست.'],
        ['Early in his reign Khosrow faced dissent at home and made peace with Justinian. Persia gave back its gains in Lazica and Rome its gains in Persarmenia. Rome agreed to pay 11,000 pounds of gold for the defence of the Caucasus passes. Dara stayed Roman, but no longer as army headquarters. After eight years this “endless” peace broke.']],
      [['شهبازی می‌گوید یوستینیانوس سال‌های صلح را برای جنگ در ایتالیا و آفریقا و استوار کردن مرزهای شرقی به کار برد و همین خسرو را نگران کرد. فرستادگان گوت‌ها و ارمنیان هم او را به جنگ برانگیختند. از نگاه روم، پول قفقاز «باج» بود؛ از نگاه ایران، سهم روم در دفاع از مرزی مشترک.'],
        ['Shahbazi says Justinian used the years of peace to fight in Italy and Africa and to strengthen his eastern defences, and this alarmed Khosrow. Gothic and Armenian envoys also urged him to war. To Rome the Caucasus money was “tribute”; to Persia it was Rome’s share in defending a common frontier.']],
      [['صلحی که «بی‌پایان» نام گرفت هشت سال ماند. پیمان میان دو شاه به اندازهٔ حساب سود و زیان آن دو پایدار است، نه به اندازهٔ نامش.'],
        ['A peace called “endless” lasted eight years. A treaty between two rulers lasts as long as their reckoning of gain and loss, not as long as its name.']],
      ['ir-sasdyn', 'ir-byzir', 'procopius2'], {
        quotes: [{ text: 'Thus, then, they concluded the so-called “endless peace,” when the Emperor Justinian was already in the sixth year of his reign.', fa: 'بدین‌سان آنان «صلح بی‌پایان» را بستند، هنگامی که یوستینیانوس امپراتور در ششمین سال پادشاهی‌اش بود.', ref: 'Procopius, History of the Wars 1.22, tr. H. B. Dewing (1914)', source: 'procopius2' }],
      }),
    sec('antioch', 'انطاکیه، ۵۴۰ م.', 'Antioch, 540',
      [['در ۵۴۰ م. خسرو صلح را شکست و به سوریه تاخت. از شهرها باج گرفت و چون مردم انطاکیه باج را نپذیرفتند، شهر را با یورش گرفت. شهر غارت شد و مردمش به ایران برده شدند. خسرو برایشان نزدیک تیسفون شهری تازه ساخت به نام «وه‌انتیوخ‌خسرو»، یعنی «انطاکیهٔ بهتر خسرو»، که مردم آن را «رومگان» می‌خواندند.', 'پروکوپیوس می‌گوید خسرو برای اینان گرمابه و میدان اسب‌دوانی ساخت، از خزانه به آنان خوراک داد و آنان را «بندگان شاه» خواند تا زیر دست هیچ فرمانداری نباشند. اگر بردهٔ رومی دیگری به آن شهر می‌گریخت و کسی از مردم آنجا او را خویشاوند خود می‌خواند، صاحبش دیگر نمی‌توانست او را پس بگیرد.'],
        ['In 540 Khosrow broke the peace and invaded Syria. He took ransoms from cities, and when the people of Antioch refused to pay, he stormed the city. It was plundered and its people were taken to Persia. Khosrow built them a new town near Ctesiphon called Weh-Antioch-Khosrow, “Khosrow’s Better Antioch”, which people called Rumagān.', 'Procopius says Khosrow built them a bath and a hippodrome, fed them at public expense and called them “the king’s subjects”, so they answered to no governor. If another Roman slave fled to the town and someone there called him a kinsman, his owner could no longer take him back.']],
      [['همهٔ جزئیات نبرد از پروکوپیوس است، که در آنجا نبود و با خسرو دشمنی داشت. او سخن خسرو را دربارهٔ رحم به اسیران می‌آورد و بی‌درنگ آن را دروغ می‌خواند. نمودار زیر از روی گزارش او کشیده شده و طرح‌وار است.'],
        ['All the details of the battle come from Procopius, who was not there and was hostile to Khosrow. He quotes Khosrow’s words about mercy to captives and at once calls them lies. The diagram below follows his account and is schematic.']],
      [['شهروندانی که باج نپرداختند، جان و دارایی و شهرشان را از دست دادند. اما در شهر تازه، قانونی بود که بردهٔ گریخته را از صاحبش آزاد می‌کرد. یک شاه هم دارایی مردم را غارت کرد و هم، برای کشیدن مردم به شهر خود، به گروهی از آنان امتیازی داد که در کشور خودشان نداشتند. این برداشت ماست.'],
        ['Citizens who did not pay the ransom lost their lives, their goods and their city. Yet in the new town a rule freed a runaway slave from his owner. The same king plundered people’s property and, to draw people to his town, gave some of them a privilege they did not have at home. This is our reading.']],
      ['ir-sasdyn', 'ir-byzir', 'procopius2'], {
        quotes: [
          { text: 'For to trample upon captives is not holy.', fa: 'زیرا لگدمال کردن اسیران روا نیست.', ref: 'Procopius, History of the Wars 2.9, tr. H. B. Dewing (1914): words Procopius gives to Khosrow', source: 'procopius2' },
          { text: 'For he was the cleverest of all men at saying that which was not, and in concealing the truth.', fa: 'زیرا او زیرک‌ترین مردمان بود در گفتن آنچه نبود و پنهان کردن راستی.', ref: 'Procopius, History of the Wars 2.9, tr. H. B. Dewing (1914): Procopius on Khosrow', source: 'procopius2' },
        ],
        clip: { media: battleClipFor('khosrow-i', 'antioch', 992, 578), caption: B('گشودن انطاکیه، گام‌به‌گام (طرح‌وار، به روایت پروکوپیوس)', 'The capture of Antioch, step by step (schematic, after Procopius)') },
      }),
    sec('lazica', 'جنگ لازیکا', 'The Lazic War',
      [['لازیکا، سرزمینی در کرانهٔ خاوری دریای سیاه (غرب گرجستان امروز)، راه ایران به دریای سیاه بود. در ۵۴۱ م. لازها از روم بریدند و خسرو را فراخواندند. خسرو دژ پترا را گرفت. در آتش‌بس ۵۴۵ م. لازیکا در دست ایران ماند. در سال چهارم آتش‌بس روم دوباره سپاه فرستاد و جنگی دراز درگرفت که تا پیمان ۵۶۲ م. ادامه یافت. در آن پیمان دو سو دستاوردهایشان را رها کردند.'],
        ['Lazica, on the eastern shore of the Black Sea (western Georgia today), was Persia’s road to that sea. In 541 the Lazi broke with Rome and called Khosrow in. He took the fortress of Petra. In the truce of 545 Lazica stayed Persian. In the fourth year of the truce Rome sent an army again, and a long war followed that lasted until the treaty of 562. In that treaty both sides gave up their gains.']],
      [['شهبازی می‌گوید ایرانیان روی هم رفته پیروز بودند و روم در طول جنگ سالانه ۴۰۰ پوند زر می‌پرداخت. منابع اصلی، پروکوپیوس و آگاثیاس، هر دو رومی‌اند.'],
        ['Shahbazi says the Persians were on the whole victorious and Rome paid 400 pounds of gold a year during the war. The main sources, Procopius and Agathias, are both Roman.']],
      [['به گفتهٔ پروکوپیوس، در پترا خسرو به سربازان رومی امان داد که جان و دارایی‌شان در امان بماند، و جز گنج‌های یوحنا، فرماندهٔ رومی دژ، چیزی نگرفت. امانی که دارایی را هم دربر بگیرد، در جنگ‌های آن روزگار کم بود و فرق آشکاری با سرنوشت انطاکیه دارد.'],
        ['According to Procopius, at Petra Khosrow gave the Roman soldiers pledges for their lives and their property, and took nothing but the treasures of John, the Roman commander of the fort. A pledge that covered property too was rare in the wars of that age, and it is a striking contrast with the fate of Antioch.']],
      ['ir-sasdyn', 'ir-byzir', 'procopius2'], {
        quotes: [{ text: 'The Romans, therefore, in terror, opened negotiations with the barbarians, and receiving from Chosroes pledges concerning their lives and their property, they surrendered to him both themselves and the city.', fa: 'پس رومیان، ترسان، با بربرها به گفت‌وگو نشستند و چون از خسرو دربارهٔ جان و دارایی‌شان پیمان گرفتند، خود و شهر را به او سپردند.', ref: 'Procopius, History of the Wars 2.17, tr. H. B. Dewing (1914)', source: 'procopius2' }],
      }),
    sec('east', 'هپتالیان، ترکان و یمن', 'The Hephthalites, the Turks and Yemen',
      [['هپتالیان دو نسل بر خاور ایران چیره بودند؛ پیروز در جنگ با آنان کشته شده بود و قباد با یاری آنان به تخت بازگشته بود. میان ۵۵۸ و ۵۶۱ م. خسرو با سنجبو، خاقان ترکان که تازه به آسیای میانه رسیده بودند، هم‌پیمان شد. دو قدرت در نبردی بزرگ نزدیک بخارا هپتالیان را درهم شکستند و سرزمینشان را در امتداد جیحون بخش کردند. شاهنامه شاه هپتالی را غاتفر و طبری وراز می‌نامد. اندکی بعد ترکان خود دشمن تازهٔ ایران در خاور شدند.', 'حدود ۵۷۰ م. سیف پسر ذی‌یزن برای راندن حبشیان از یمن یاری خواست. خسرو دودل بود، اما ۸۰۰ سوار به فرماندهی وهرز در هشت کشتی فرستاد. دو کشتی غرق شد. سپاه در حضرموت پیاده شد، شاه حبشی مسروق را کشت و صنعا را گرفت. سیف شاه دست‌نشاندهٔ ایران شد. پس از کشته شدن او، وهرز با چهار هزار مرد بازگشت. سپاهیان ایرانی در یمن ماندند و فرزندانشان از مادران عرب «ابناء» خوانده شدند.'],
        ['The Hephthalites had dominated eastern Iran for two generations; Peroz had died fighting them and Kavad had regained his throne with their help. Between 558 and 561 Khosrow allied with Sinjibu, khagan of the Turks, who had newly reached Central Asia. In a great battle near Bukhara the two powers crushed the Hephthalites and divided their lands along the Oxus. The Shahnameh calls the Hephthalite king Ghatfar and Ṭabari calls him Waraz. Soon afterwards the Turks themselves became Iran’s new eastern enemy.', 'Around 570 Sayf b. Ḏī Yazan asked for help to drive the Ethiopians out of Yemen. Khosrow hesitated, but sent 800 horsemen under Vahrez in eight ships. Two ships were lost. The force landed in Hadramaut, killed the Ethiopian king Masruq and took Sanaa. Sayf became a vassal king of Persia. After he was killed Vahrez returned with 4,000 men. Persian soldiers stayed in Yemen, and their sons by Arab mothers were called the Abnāʾ.']],
      [['تاریخ نابودی هپتالیان محل بحث است: بیوار ۵۵۸ تا ۵۶۱ م. را می‌آورد و شهبازی در یک جا آن را پس از پیمان ۵۶۲ م. می‌گذارد. دربارهٔ سپاه یمن هم روایت‌ها جدا می‌شوند: در یکی سپاه از زندانیان بود؛ روبین می‌گوید از دیلم، در کوهستان گیلان، گرد آمده بود. ماجرای سیف بعدها هستهٔ یک داستان عامیانهٔ عربی شد.'],
        ['The date of the Hephthalites’ destruction is disputed: Bivar gives 558 to 561, while Shahbazi in one passage puts it after the treaty of 562. Accounts of the Yemen force differ too: in one it was made of prisoners; Rubin says it was recruited in Daylam, in the mountains of Gilan. Sayf’s story later became the core of a popular Arabic romance.']],
      [['هم‌پیمانی با ترکان دشمنی کهنه را از میان برد و دشمنی تازه ساخت. لشکرکشی به یمن هم، به گفتهٔ شهبازی، راه دریایی بازرگانی روم را به خطر انداخت. جنگ‌ها اغلب بر سر راه بازرگانی است، اما بهای آن را بازرگانان و سربازان می‌پردازند.'],
        ['The alliance with the Turks removed an old enemy and made a new one. The Yemen expedition, Shahbazi says, threatened Rome’s sea trade. Wars are often fought over trade routes, but merchants and soldiers pay the price.']],
      ['ir-hephthalites', 'ir-sasdyn', 'ir-abna', 'ir-reforms']),
    sec('philosophers', 'فیلسوفان آتن و جندی‌شاپور', 'The Athenian philosophers and Gondēšāpur',
      [['پس از آن‌که قانون یوستینیانوس در ۵۲۹ م. آموزگاران نامسیحی را از کار بازداشت، هفت فیلسوف نوافلاطونی، از جمله دمسکیوس و سیمپلیکیوس، به دربار خسرو آمدند. آگاثیاس می‌گوید آنان شنیده بودند ایران سرزمین «شاه فیلسوف» افلاطون است، اما ناامید شدند و خواستند بازگردند. خسرو در پیمان صلح بندی گذاشت که آنان بتوانند در کشور خود با باور خود آرام زندگی کنند.', 'پل پارسی منطق ارسطو را برای خسرو ترجمه کرد و در دیباچه نوشت که فلسفه برتر از ایمان است. یوحنای افسوسی، که از ستایش یک «مغ» پوزش می‌خواهد، می‌گوید خسرو کتاب‌های دینی همهٔ کیش‌ها را گرد آورد تا بداند کدام درست است. جندی‌شاپور در این دوره صحنهٔ شورش انوشزاد، پسر خسرو، بود.'],
        ['After Justinian’s law of 529 barred non-Christian teachers, seven Neoplatonist philosophers, among them Damascius and Simplicius, came to Khosrow’s court. Agathias says they had heard Persia was the land of Plato’s “philosopher king”, but were disappointed and wanted to go home. Khosrow put a clause in the peace treaty that let them live out their lives at home in peace with their own beliefs.', 'Paul the Persian translated Aristotle’s logic for Khosrow and wrote in his preface that philosophy is superior to faith. John of Ephesus, who apologizes for praising a “Magian”, says Khosrow collected the religious books of all creeds to learn which were true. In this period Gondēšāpur was the scene of the revolt of Anōšazād, a son of Khosrow.']],
      [['آگاثیاس آشکارا با ستایش خسرو مخالف است: می‌گوید او «فراتر از شایستگی‌اش» ستوده شده و دانش فلسفی‌اش سطحی بود. او رومی و مسیحی است و داوری‌اش را باید با این آگاهی خواند.', 'داستان «دانشگاه جندی‌شاپور» در زمان خسرو یکم از منابع پسین است. ریشتر-برنبورگ (ایرانیکا) آوازهٔ جندی‌شاپور را در انتقال پزشکی یونانی «ادعایی» می‌خواند. نخستین گواهی دربارهٔ پزشکی آنجا از حدود ۶۱۰ م.، در زمان خسرو دوم، است و بیمارستان آن نخستین بار در ۷۶۵ م. یاد شده است. پس آکادمی بزرگ خسرو یکم در جندی‌شاپور ادعایی ثابت‌نشده است.'],
        ['Agathias openly opposes the praise of Khosrow: he says the king was admired “quite beyond his deserts” and his philosophy was superficial. He is a Christian Roman, and his verdict must be read with that in mind.', 'The story of a “university of Gondēšāpur” under Khosrow I comes from later sources. Richter-Bernburg (Iranica) calls Gondēšāpur’s fame in passing on Greek medicine “alleged”. The earliest testimony to medicine there dates from about 610, under Khosrow II, and its hospital is first mentioned in 765. So a great academy of Khosrow I at Gondēšāpur is an unproven claim.']],
      [['فیلسوفانی که برای آزادی اندیشه از کشور خود گریختند، در کشور دیگر هم آزادی نیافتند. اما همان شاه بیگانه در پیمانی رسمی آزادی وجدان آنان را در کشور خودشان خواست. آزادی باور، حتی اگر از سوی شاهی خودکامه درخواست شود، آزادی است.'],
        ['Philosophers who fled their country for freedom of thought did not find it abroad either. Yet that same foreign king demanded, in a formal treaty, their freedom of conscience in their own land. Freedom of belief is freedom, even when an autocrat asks for it.']],
      ['agathias2', 'ir-sasdyn', 'ir-gondesapur'], {
        photos: ['taq-kasra'],
        quotes: [
          { text: 'Chosroes has been praised and admired quite beyond his deserts not just by the Persians but even by some Romans.', fa: 'خسرو نه تنها از سوی ایرانیان، بلکه حتی از سوی برخی رومیان، بسیار فراتر از شایستگی‌اش ستوده و ستایش شده است.', ref: 'Agathias, The Histories 2.28, tr. J. D. Frendo (1975)', source: 'agathias2' },
          { text: 'Chosroes insisted on the inclusion of this point and made the ratification and continued observance of the truce conditional on its implementation.', fa: 'خسرو بر گنجاندن این بند پافشاری کرد و پذیرش و پایبندی به آتش‌بس را به اجرای آن وابسته ساخت.', ref: 'Agathias, The Histories 2.31, tr. J. D. Frendo (1975)', source: 'agathias2' },
        ],
      }),
    sec('kalila', 'برزویه و کلیله و دمنه', 'Borzuya and Kalila wa Dimna',
      [['برزویه پزشکی در زمان خسرو یکم بود. در دیباچهٔ کلیله و دمنه، که از خود اوست، می‌گوید پدرش سپاهی بود و مادرش از خاندانی دینی؛ پزشکی آموخت و بیماران را رایگان درمان کرد، تا آن‌که در دین و رفتار پیشوایان دینی دچار شک شد. به هند رفت و پنچه‌تنتره و چند اثر دیگر را به ایران آورد تا به پهلوی برگردانده شود؛ این‌که ترجمه کار خود او بود یا دیگری، روشن نیست. ابن مقفع بعدها آن را به عربی ترجمه کرد و کلیله و دمنه از آنجا به زبان‌های بسیار رسید.'],
        ['Borzuya was a physician of the time of Khosrow I. In his preface to Kalila wa Dimna, which is his own, he says his father was a soldier and his mother came from a priestly family; he studied medicine and treated patients free, until doubts grew in him about religion and the conduct of religious leaders. He went to India and brought back the Pañcatantra and some other works to be put into Pahlavi; whether he made the translation himself or had another make it is unclear. Ibn al-Muqaffaʿ later translated it into Arabic, and from there Kalila wa Dimna reached many languages.']],
      [['خالقی مطلق نسبت دادن کلیله به بزرگمهر را «ساختهٔ پایان دورهٔ ساسانی» می‌داند و دیدگاه کریستنسن را که برزویه و بزرگمهر یک تن بودند، بی‌پایه می‌خواند. شهبازی می‌گوید دیباچهٔ برزویه، مانند دیباچهٔ پل پارسی، برتری خرد را بر باور نشان می‌دهد.'],
        ['Khaleghi-Motlagh calls the attribution of Kalila to Bozorgmehr a “late Sasanian fabrication” and Christensen’s view that Borzuya and Bozorgmehr were one man baseless. Shahbazi says Borzuya’s preface, like Paul the Persian’s, shows reason placed above belief.']],
      [['کتابی از هند، از راه زبان پهلوی و عربی، به جهان رسید. اندیشه مرز نمی‌شناسد، مگر آن‌که کسی آن را ببندد.'],
        ['A book from India reached the world through Pahlavi and Arabic. Ideas know no borders unless someone closes them.']],
      ['ir-borzuya', 'ir-sasdyn'], {
        photos: ['kalila-met'],
        folk: {
          title: B('روایت: گیاهی که مرده را زنده می‌کند', 'Tradition: the herb that revives the dead'),
          story: {
            fa: ['برزویه در کتاب‌های هندی خواند که بر کوهی در هند گیاهی می‌روید که اگر بر مرده بپاشند، زنده می‌شود. از انوشیروان اجازه گرفت و به هند رفت، اما گیاه را نیافت. زاهدی راز را به او گفت: گیاه سخن است، کوه دانش، و مرده نادان. درمان نادانی کتابی است به نام کلیله در گنج شاه هند. شاه هند اجازه داد کتاب را بخواند، اما نه رونویسی کند. برزویه هر روز فصلی را از بر کرد و شب آن را نوشت و کتاب را به ایران فرستاد.'],
            en: ['In Indian books Borzuya read that on a mountain in India grows a herb that brings the dead back to life when sprinkled on them. He asked Anushirvan’s leave, went to India, and did not find it. An ascetic told him the secret: the herb is the word, the mountain is learning, and the dead are the ignorant. The cure for ignorance is a book called Kalila in the Indian king’s treasury. The king let him read it but not copy it. Each day Borzuya learned a chapter by heart and wrote it down at night, and so sent the book to Iran.'],
          },
          origin: {
            fa: ['این روایت از شاهنامه و غرر السیر ثعالبی است و خالقی مطلق (ایرانیکا) آن را «ساختگی» می‌خواند. داستانی جدا در ادبیات پهلوی بود که به خداینامه و از آنجا به شاهنامه رسید. آن را باید روایت شمرد، نه تاریخ.'],
            en: ['This tradition comes from the Shahnameh and Thaʿālibi’s Ghurar al-siyar, and Khaleghi-Motlagh (Iranica) calls it apocryphal. It was a separate Pahlavi tale that entered the Xwadāy-nāmag and from there the Shahnameh. It should be read as tradition, not history.'],
          },
          sources: ['ir-borzuya'],
        },
      }),
    sec('chess', 'شطرنج', 'Chess',
      [['شطرنج از بازی‌های کهن هندی برآمد. نخستین یاد مطمئن از آن در هند از سدهٔ ششم م. است، همان روزگاری که گویا به ایران رسید. سه متن پهلوی از «چترنگ» یاد می‌کنند. با این همه، به گفتهٔ اوتاس، هرچند احتمال دارد شطرنج در پایان دورهٔ ساسانی در ایران بازی می‌شد، نخستین گواه مطمئن از پس از ورود اسلام است. از ایران شطرنج به عرب‌ها و سپس به اروپا رفت.'],
        ['Chess grew out of old Indian board games. Its first certain mention in India dates from the 6th century, the time when it seems to have reached Iran. Three Pahlavi texts mention “chatrang”. Even so, Utas says, though it is probable chess was played in Iran at the end of the Sasanian period, the earliest certain evidence is from after the Islamic conquest. From Iran chess passed to the Arabs and then to Europe.']],
      [['متن پهلوی «گزارش شطرنج» از روزگار خسرو یاد می‌کند، اما اوتاس (ایرانیکا) آن را «آشکارا افسانه‌ای» می‌داند. یادکرد شطرنج در کارنامهٔ اردشیر هم شاید از ویرایش‌های پسین باشد.'],
        ['The Pahlavi text “Explanation of Chess” is set in Khosrow’s time, but Utas (Iranica) calls it “clearly legendary”. The mention of chess in the Kār-nāmag of Ardashir may also come from later editing.']],
      [['بازی‌ای که از هند آمد، با نام‌های پارسی به عرب‌ها رسید و از آنجا به جهان رفت. رقابت در خرد، به جای رقابت در میدان جنگ، شاید بهترین میراث این داستان باشد.'],
        ['A game that came from India passed with Persian names to the Arabs and from there to the world. A contest of wits instead of a contest on the battlefield may be this story’s best legacy.']],
      ['ir-chess'], {
        photos: ['chess-met'],
        folk: {
          title: B('روایت: شطرنج و نرد', 'Tradition: chess and backgammon'),
          story: {
            fa: ['شاه هند شطرنج را با فرستاده‌ای چون معما نزد انوشیروان فرستاد: اگر ایرانیان راز آن را بگشایند، هند باج می‌دهد؛ وگرنه ایران باید باج بدهد. وزیر بزرگمهر راز بازی را گشود و در پاسخ بازی نرد را ساخت و چون معما به هند فرستاد. دانایان هند نتوانستند آن را بگشایند.'],
            en: ['The king of India sent chess to Anushirvan as a riddle with an envoy: if the Iranians solved it India would pay tribute; if not, Iran would pay. The vizier Bozorgmehr solved the game and in reply invented backgammon (nard) and sent it to India as a riddle. The sages of India could not solve it.'],
          },
          origin: {
            fa: ['این روایت از متن پهلوی «گزارش شطرنج و نهش نیواردشیر» است و فردوسی و ثعالبی آن را بازگفتند. اوتاس (ایرانیکا) آن را «آشکارا افسانه‌ای» می‌داند؛ خالقی مطلق هم ساختن نرد به دست بزرگمهر را «خیال محض» می‌خواند. آن را باید روایت شمرد، نه تاریخ.'],
            en: ['This tradition comes from the Pahlavi text “Explanation of Chess and the Invention of Backgammon”, retold by Ferdowsi and Thaʿālibi. Utas (Iranica) calls it “clearly legendary”, and Khaleghi-Motlagh calls Bozorgmehr’s invention of backgammon “a complete fantasy”. It should be read as tradition, not history.'],
          },
          sources: ['ir-chess', 'ir-borzuya'],
        },
      }),
    sec('justice', 'دادگری: تاریخ و افسانه', 'Justice: history and legend',
      [['منابع عربی و فارسی خسرو را نمونهٔ دادگری می‌دانند و «دادگر» (عادل) می‌خوانند. در کارنامهٔ انوشیروان، که خود را زندگی‌نامهٔ او می‌خواند، دادگری کاری است که بیش از همه ایزد را خشنود می‌کند و باید بر ناتوان و نیرومند، و بر درویش و توانگر، یکسان باشد. همان متن می‌گوید خسرو آیین‌های رومیان و هندیان را هم سنجید و آنچه را نیکو بود پذیرفت.'],
        ['The Arabic and Persian sources make Khosrow the model of justice and call him “the Just” (dādgar, ʿādel). In the Kār-nāmag of Anushirvan, which presents itself as his own account, justice is the act most pleasing to God and must apply alike to the weak and the mighty, the poor and the rich. The same text says Khosrow also weighed the customs of the Romans and Indians and adopted what was good.']],
      [['کارنامه از دربار خسرو برآمده و ستایش‌نامه‌ای رسمی است. نولدکه خسرو را «بی‌گمان یکی از کارآمدترین و بهترین شاهانی» می‌داند که ایرانیان داشته‌اند. اما همین شاه، به گفتهٔ پروکوپیوس، انطاکیه را غارت کرد و توطئه‌گران را کشت. دادگری در منابع پسین بیشتر آرمان شاهی است تا گزارش زندگی یک مرد.'],
        ['The Kār-nāmag comes from Khosrow’s court and is official praise. Nöldeke judged Khosrow “certainly one of the most efficient and best kings” the Iranians ever had. Yet the same king, according to Procopius, sacked Antioch and killed the plotters. Justice in the later sources is more an ideal of kingship than a record of one man’s life.']],
      [['دادگری‌ای که به خواست یک شاه بسته است، با رفتن او می‌رود. زنجیر عدل افسانه است، اما پرسش آن واقعی است: آیا ناتوان‌ترین کس راهی دارد که شکایتش به گوش قدرت برسد؟ پاسخ پایدار به این پرسش، قانونی است که شاه هم زیر آن باشد، نه زنگی که شاه بشنود. این برداشت ماست.'],
        ['Justice that hangs on one king’s will leaves with him. The chain of justice is a legend, but its question is real: does the weakest person have a way to make power hear his complaint? The lasting answer to that question is a law the king himself stands under, not a bell the king may hear. This is our reading.']],
      ['ir-sasdyn', 'siyasat', 'nf-chain'], {
        quotes: [{ text: 'We have not rejected anyone because they belonged to a different religion or people.', fa: 'ما هیچ کس را از آن رو که از دین یا مردمی دیگر بود، رد نکرده‌ایم.', ref: 'Kār-nāmag ī Anōšīravān, as quoted by A. Sh. Shahbazi, “Sasanian dynasty”, Encyclopaedia Iranica (2005)', source: 'ir-sasdyn' }],
        folk: {
          title: B('افسانه: زنجیر عدل', 'Legend: the chain of justice'),
          story: {
            fa: ['انوشیروان فرمود زنجیری با زنگ‌ها بیاویزند، چنان پایین که دست کودکی هفت‌ساله به آن برسد، تا هر دادخواهی بی‌نیاز به پرده‌دار زنجیر را بجنباند و شاه بشنود و داد او را بدهد. سال‌ها بعد، نیمروزی، زنگ‌ها به صدا درآمد. خادمان رفتند و تنها خری پیر و لاغر و گر دیدند که پشتش را به زنجیر می‌مالید. شاه گفت این خر هم دادخواه است؛ صاحبش را یافتند و او را واداشتند که خر را خوراک دهد و نگه دارد.'],
            en: ['Anushirvan ordered a chain hung with bells, so low that a seven-year-old child could reach it, so that any petitioner could shake it without a chamberlain and the king would hear and give him justice. Years later, one noon, the bells rang. The servants found only an old, thin, mangy donkey rubbing its back on the chain. The king said this donkey too was seeking justice; its owner was found and made to feed it and look after it.'],
          },
          origin: {
            fa: ['این افسانه در سیاست‌نامهٔ نظام‌الملک (سدهٔ پنجم ه‍. / یازدهم م.) آمده است، پانصد سال پس از خسرو، و بعدها در شعر فارسی، از جمله خاقانی، بسیار یاد شده است. مانند آن در داستان‌های هندی و چینی هم هست. پژوهشگران حکایت‌های سیاست‌نامه را اغلب برای اندرز سیاسی ساخته یا دگرگون‌شده می‌دانند. آن را باید افسانه شمرد، نه تاریخ.'],
            en: ['This legend appears in Nizam al-Mulk’s Siyasat-nama (11th century), five hundred years after Khosrow, and was later much cited in Persian poetry, by Khaqani among others. Similar stories exist in Indian and Chinese tradition. Scholars often see the Siyasat-nama’s anecdotes as made up or reshaped for political advice. It should be read as legend, not history.'],
          },
          sources: ['siyasat', 'nf-chain'],
        },
      }),
  ],
  synthesis: { title: B('جمع‌بندی', 'Synthesis'), paras: {
    fa: ['خسرو یکم مالیات را بر پایهٔ پیمایش زمین و نرخ ثابت از نو ساخت، سپاه را با مزد پولی دوباره سازمان داد، با روم صلح کرد و آن را شکست، انطاکیه را غارت کرد، با ترکان هپتالیان را نابود کرد و یمن را زیر فرمان ایران آورد.', 'سنت پسین از او «انوشیروان دادگر» ساخت: پادشاه زنجیر عدل، شطرنج و کلیله. این صفحه این روایت‌ها را برچسب افسانه یا روایت می‌زند و آنچه منابع هم‌روزگار، دوست یا دشمن، می‌گویند جدا نگه می‌دارد.'],
    en: ['Khosrow I rebuilt taxation on a land survey and fixed rates, reorganized the army with money pay, made peace with Rome and broke it, sacked Antioch, destroyed the Hephthalites with the Turks and brought Yemen under Persian rule.', 'Later tradition made him “Anushirvan the Just”: the king of the chain of justice, of chess and of Kalila. This page labels those stories as legend or tradition and keeps apart what contemporary sources, friendly or hostile, say.'],
  }, sources: ['ir-reforms', 'ir-sasdyn', 'procopius2', 'agathias2'] },
  sources: pick('ir-reforms', 'ir-sasdyn', 'ir-byzir', 'ir-hephthalites', 'ir-abna', 'ir-gondesapur', 'ir-borzuya', 'ir-chess', 'ir-hormozd4', 'procopius2', 'agathias2', 'siyasat', 'nf-chain'),
  photos: photos('coin-khosrow1', 'taq-kasra', 'kalila-met', 'chess-met'),
  related: related(['kavad-i', 'قباد یکم، پدرش', 'Kavad I, his father'], ['hormizd-iv', 'هرمز چهارم، پسرش', 'Hormizd IV, his son'], ['bahram-chobin', 'بهرام چوبین', 'Bahram VI Chobin']),
  wikipedia: 'https://en.wikipedia.org/wiki/Khosrow_I',
}
