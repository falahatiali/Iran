/**
 * Featured-level page for Boran (630–631), the first woman to rule Sasanian Iran in her own right.
 * Narrative: Encyclopaedia Iranica (Chaumont “Bōrān”); H. Emrani, e-Sasanika 5 (2009); Ṭabarī tr. Bosworth with his notes.
 * Verbatim quotes: Ṭabarī tr. C. E. Bosworth (1999); Emrani in her own English.
 */
import type { Bi, FeaturedKing } from '../featured/types'
import { CTESIPHON, GANZAK, HIRA, SAS, ev, note, photos, pick, related, sec } from './common'

const B = (fa: string, en: string): Bi => ({ fa, en })

const CROSS = note(
  'طبری می‌گوید بوران چوبهٔ صلیب را به دست جاثلیق ایشوعیاب به روم بازگرداند. اما شومون (ایرانیکا) و یادداشت بازورث می‌گویند صلیب را پیش‌تر قباد دوم بازگردانده بود و در ۶۲۹ یا ۶۳۰ در اورشلیم بود. سفارت ایشوعیاب نزد هراکلیوس در شمال سوریه برای گفت‌وگوهای صلح بود.',
  'Ṭabari says Boran returned the wood of the Cross to Byzantium through the catholicos Išoʿyahb. But Chaumont (Iranica) and Bosworth’s note say the Cross had already been restored by Kavad II and was back in Jerusalem in 629 or 630. Išoʿyahb’s embassy to Heraclius in northern Syria was part of the peace talks.')

const WIFE = note(
  'بوران دختر خسرو دوم بود؛ در این همهٔ منابع هم‌سخن‌اند. تاریخ‌نامهٔ بی‌نام سریانی او را خواهر و همسر شیرویه (قباد دوم) می‌خواند. شومون می‌گوید او همسر شهربراز نبود، بلکه باید بیوهٔ قباد دوم بوده باشد. حمزهٔ اصفهانی مادرش را ماریا، همسر رومی خسرو، می‌داند.',
  'Boran was Khosrow II’s daughter; on this all sources agree. The anonymous Syriac chronicle calls her Sheroe’s (Kavad II’s) sister and wife. Chaumont says she was not Shahrbaraz’s wife but must have been Kavad II’s widow. Ḥamza al-Iṣfahāni makes her mother Maria, Khosrow’s Byzantine wife.')

const DEATH = note(
  'تاریخ‌نامهٔ بی‌نام سریانی و تاریخ‌نامهٔ سعرت می‌گویند بوران خفه شد؛ سعرت کشنده را پیروز، سردار سپاه، می‌نامد. طبری از کشته شدن او سخنی نمی‌گوید. طول پادشاهی‌اش را برخی یک سال و چهار ماه، برخی یک سال و شش ماه و سبئوس دو سال می‌نویسند.',
  'The anonymous Syriac chronicle and the Chronicle of Seert say Boran was strangled; Seert names the killer as Pērōz, general of the army. Ṭabari does not say she was killed. Some give her reign as one year and four months, others one year and six months, and Sebeos two years.')

export const boran: FeaturedKing = {
  slug: 'boran', name: B('بوران (پوراندخت)', 'Boran (Borandokht)'), dynastyName: SAS,
  reign: B('۶۳۰–۶۳۱ م.', '630–631 CE'),
  title: B('بوران؛ نخستین زنی که به نام خود بر ایران فرمان راند', 'Boran: the first woman to rule Iran in her own name'),
  lede: B(
    'بوران دختر خسرو دوم بود. پس از کشته شدن شهربراز در ژوئن ۶۳۰، بزرگان او را بر تخت نشاندند. پیش از او هیچ زنی به نام خود شاهنشاه ساسانی نشده بود. به گفتهٔ طبری، او وعدهٔ داد داد، مالیات‌های پس‌افتاده را بخشید، پل‌ها را بازسازی کرد و سکه زد. سکه‌هایش او را با تاج بالدار پدرش نشان می‌دهند. حدود یک سال و نیم بعد، در پاییز ۶۳۱، درگذشت؛ دو تاریخ‌نامه می‌گویند خفه شد.',
    'Boran was the daughter of Khosrow II. After Shahrbaraz was killed in June 630 the nobles raised her to the throne. No woman before her had become Sasanian king of kings in her own right. According to Ṭabari she promised justice, remitted arrears of land tax, repaired bridges and struck coins. Her coins show her in her father’s winged crown. About a year and a half later, in autumn 631, she died; two chronicles say she was strangled.'),
  stats: [{ n: B('۳', '3'), l: B('سال پادشاهی روی سکه‌ها', 'regnal years on her coins') }, { n: B('~۱٫۵', '~1.5'), l: B('سال پادشاهی', 'years of reign') }],
  mapTitle: B('نقشه: پادشاهی بوران', 'Map: the reign of Boran'),
  span: [630, 631],
  events: [
    ev('accession', 630, B('ژوئن ۶۳۰ م.', 'June 630 CE'), 'admin', CTESIPHON, B('بر تخت نشستن', 'Raised to the throne'), B('فسفرخ و برادرانش، با یاری بزرگان، شهربراز را در ۹ ژوئن ۶۳۰ کشتند و بوران، دختر خسرو، را بر تخت نشاندند. پس از آن، به گمان نولدکه، چند روزی آشوب و دسیسه در پایتخت بود.', 'Fus Farrukh and his brothers, helped by the great men of state, killed Shahrbaraz on 9 June 630 and raised Boran, Khosrow’s daughter, to the throne. Nöldeke surmised a short interregnum of intrigue in the capital after that.'), 'disputed', ['tabari5', 'ir-boran'], WIFE),
    ev('vizier', 630, B('۶۳۰ م.', '630 CE'), 'admin', CTESIPHON, B('وزیر بزرگ', 'A chief minister'), B('به گفتهٔ طبری، بوران فسفرخ، رهبر توطئه بر شهربراز، را وزیر بزرگ (وزرگ‌فرمذار) کرد.', 'According to Ṭabari, Boran made Fus Farrukh, leader of the plot against Shahrbaraz, her chief minister (wuzurg-framadār).'), 'secure', ['tabari5', 'ir-boran']),
    ev('farrukh', 630, B('۶۳۰ م. (روایت دیگر)', '630 CE (another tradition)'), 'admin', GANZAK, B('فرخ‌هرمز آذربایجانی', 'Farrukh Hormizd of Ādurbādagān'), B('به روایت سبئوس، بوران کار دولت را به فرخ‌هرمز، شاهزادهٔ آذربایجان، سپرد.', 'According to Sebeos, Boran put Farrukh Hormizd, prince of Ādurbādagān, in charge of the government.'), 'disputed', ['ir-boran'], note('طبری وزیر را فسفرخ می‌نامد و سبئوس فرخ‌هرمز. شاید هر دو در زمان‌های مختلف قدرت داشتند؛ منابع روشن نمی‌گویند.', 'Ṭabari names the minister as Fus Farrukh, Sebeos as Farrukh Hormizd. Both may have held power at different times; the sources do not say.')),
    ev('reforms', 630, B('۶۳۰–۶۳۱ م.', '630–631 CE'), 'admin', CTESIPHON, B('بخشش مالیات و ساختن پل‌ها', 'Tax remission and bridges'), B('به گفتهٔ طبری، بوران مالیات‌های پس‌افتادهٔ زمین را بخشید، پل‌های سنگی و پل‌های قایقی را بازسازی کرد، فرمان زدن سکهٔ سیم داد و نامه‌هایی همگانی دربارهٔ سیاست نیکی به مردم نوشت.', 'According to Ṭabari, Boran remitted arrears of land tax, repaired masonry bridges and bridges of boats, ordered silver coins struck and wrote open letters on her policy of kindness to her subjects.'), 'probable', ['tabari5']),
    ev('embassy', 630, B('۶۳۰ م.', '630 CE'), 'religion', CTESIPHON, B('سفارت جاثلیق نزد هراکلیوس', 'The catholicos’ embassy to Heraclius'), B('بوران جاثلیق ایشوعیاب و چند اسقف دیگر را نزد هراکلیوس فرستاد تا مسائل میان دو کشور حل شود. بنا بر سنت، این سفارت صلیب راستین را بازگرداند.', 'Boran sent the catholicos Išoʿyahb and other bishops to Heraclius to settle the issues between the two powers. Tradition says this embassy restored the True Cross.'), 'disputed', ['ir-boran', 'tabari5'], CROSS),
    ev('temple', 631, B('۶۳۰–۶۳۱ م.', '630–631 CE'), 'religion', HIRA, B('آتشکده در استینیا', 'A fire temple at Istiniya'), B('به گفتهٔ مسعودی، که نولدکه یاد می‌کند، بوران آتشکده‌ای در استینیا، دهی نزدیک کوفهٔ بعدی، ساخت.', 'According to al-Masʿudi, cited by Nöldeke, Boran built a fire temple at Istiniya, a village near later Kufa.'), 'probable', ['tabari5']),
    ev('death', 631, B('پاییز ۶۳۱ م.', 'autumn 631 CE'), 'admin', CTESIPHON, B('مرگ', 'Death'), B('بوران حدود یک سال و چهار تا شش ماه پس از تاج‌گذاری درگذشت. سکه‌هایش تا سال سوم پادشاهی می‌رسند.', 'Boran died about a year and four to six months after her accession. Her coins run to her third regnal year.'), 'disputed', ['ir-boran', 'tabari5'], DEATH),
  ],
  dossier: [
    sec('rise', 'چرا یک زن؟', 'Why a woman?',
      [['قباد دوم برادرانش را کشته بود، اردشیر سوم کودک بود و کشته شد و شهربراز، که از خاندان ساسانی نبود، چهل روز پادشاهی کرد. پس از کشته شدن شهربراز، بزرگان بوران، دختر خسرو دوم، را برگزیدند. پیش از او و پس از او و خواهرش آزرمیدخت، هیچ زنی به نام خود شاه ساسانی نشد.'],
        ['Kavad II had killed his brothers, Ardashir III was a child and was killed, and Shahrbaraz, who was not of the Sasanian house, ruled for forty days. After Shahrbaraz was killed the nobles chose Boran, Khosrow II’s daughter. No woman before her, nor after her and her sister Azarmidokht, became Sasanian king in her own right.']],
      [['امرانی می‌گوید مهم‌ترین پایهٔ ادعای بوران تبار او بود: او دختر نیرومندترین شاه ساسانی بود. او یادآور می‌شود که طبری، حمزهٔ اصفهانی و سبئوس به زن بودن بوران ایرادی نمی‌گیرند، اما داستان شهربراز را چنان می‌گویند که گناه نشستن بیگانه‌ای بر تخت را برجسته کند. به نظر او، برآمدن بوران «انقلاب» نبود، بلکه «تنظیمی» برای نگه داشتن پادشاهی ساسانی بود. پانائینو، به گفتهٔ امرانی، آن را برعکس شکستی آشکار در ایدئولوژی ساسانی می‌بیند.'],
        ['Emrani argues that the most important basis of Boran’s claim was her lineage as daughter of the most powerful Sasanian king. She notes that Ṭabari, Iṣfahāni and Sebeos raise no objection to Boran’s gender, while telling Shahrbaraz’s story so as to stress the sacrilege of a non-Sasanian on the throne. In her view Boran’s rise was not a revolution but an adjustment to preserve the Sasanian monarchy. Panaino, as Emrani reports, sees it instead as a clear break with Sasanian ideology.']],
      [['وقتی خاندان مردانش را با دست خود کشته بود، قاعدهٔ «تنها مردان» کنار رفت تا قاعدهٔ «تنها خاندان ساسان» بماند. قانون‌ها در بحران نشان می‌دهند کدام‌شان بنیادی‌اند. این برداشت ماست.'],
        ['When the dynasty had killed its own men, the rule “men only” gave way so that the rule “house of Sasan only” could survive. In a crisis, laws show which of them are fundamental. This is our reading.']],
      ['emrani', 'tabari5', 'ir-boran'], {
        quotes: [
          { text: 'It is important to note that no such objection was voiced against Bōrān because of her gender by Tabarī, Isfahanī or Sebēos.', fa: 'مهم است یادآوری کنیم که طبری، اصفهانی یا سبئوس چنین ایرادی را به سبب جنسیت بوران بر او نگرفته‌اند.', ref: 'H. Emrani, “Like Father, Like Daughter”, e-Sasanika 5 (2009)', source: 'emrani' },
          { text: 'This was a shift and an adjustment, not a revolution.', fa: 'این یک جابه‌جایی و تنظیم بود، نه یک انقلاب.', ref: 'H. Emrani, “Like Father, Like Daughter”, e-Sasanika 5 (2009)', source: 'emrani' },
        ],
      }),
    sec('justice', 'وعدهٔ داد و بخشش مالیات', 'A promise of justice and remitted taxes',
      [['طبری می‌گوید بوران در روز تاج‌گذاری گفت «راستی را دنبال خواهم کرد و داد را فرمان خواهم داد». مالیات‌های پس‌افتادهٔ زمین را بخشید، پل‌ها را بازسازی کرد و به همهٔ مردم نامه‌های همگانی نوشت. در این نامه‌ها گفت که سرزمین‌ها نه با زور مردان گشوده می‌شوند و نه پیروزی با نیرنگ آنان به دست می‌آید، بلکه همه از خداست.'],
        ['Ṭabari says that on the day she was hailed as queen Boran proclaimed, “I will pursue righteousness and ordain justice.” She remitted arrears of land tax, repaired bridges and wrote open letters to all her subjects. In them she said that lands are not subdued by the strength of men nor victory gained by their stratagems, but all comes from God.']],
      [['این گزارش از سنت دوران اسلامی است و شاید از «خدای‌نامه» یا منابع درباری آمده باشد. نامه‌ها پس از یک نسل جنگ بزرگ پدرش با روم، صلح را برتر از پیروزی نظامی می‌نشانند. ما متن خود این نامه‌ها را نداریم؛ تنها خلاصهٔ طبری را داریم.'],
        ['This account comes from the Islamic-era tradition and may draw on court sources. After a generation of her father’s great war with Byzantium, the letters place peace above military victory. We do not have the letters themselves, only Ṭabari’s summary.']],
      [['بخشیدن مالیات پس‌افتاده یعنی پذیرفتن این‌که دولت بیش از توان مردم گرفته بود. پس از جنگی بیست‌وشش‌ساله، طاعون و جنگ داخلی، سبک کردن بار مردم شاید خردمندانه‌ترین سیاست ممکن بود. این برداشت ماست.'],
        ['Remitting tax arrears means admitting that the state had demanded more than people could pay. After a twenty-six-year war, plague and civil war, lightening the people’s burden was perhaps the wisest policy available. This is our reading.']],
      ['tabari5'], {
        quotes: [{ text: 'It has been mentioned that she proclaimed on the day when she was hailed as queen, “I will pursue righteousness and ordain justice,” … She behaved kindly toward her subjects and spread justice among them. She gave orders for silver coins to be minted, and she repaired masonry bridges (al-qanatir) and bridges of boats (al-jusur). She remitted for the people the arrears of land tax (baqaya) due', fa: 'گفته‌اند که او در روزی که او را ملکه خواندند اعلام کرد: «راستی را دنبال خواهم کرد و داد را فرمان خواهم داد». … با مردم مهربان بود و داد را در میانشان گستراند. فرمان داد سکهٔ سیم بزنند، و پل‌های سنگی و پل‌های قایقی را بازسازی کرد. مالیات‌های پس‌افتادهٔ زمین را بر مردم بخشید.', ref: 'al-Ṭabarī, History V, tr. C. E. Bosworth (1999), p. 404 [I, 1064]', source: 'tabari5' }],
      }),
    sec('coins', 'سکه‌ها: دختر با تاج پدر', 'The coins: a daughter in her father’s crown',
      [['از بوران سکه‌هایی با تاریخ سال اول، دوم و سوم پادشاهی مانده است. نامش روی سکه BWLʾN (بوران) نوشته شده است. او تنها زن ساسانی است که روی سکه با تاج دیده می‌شود. تاجش، مانند تاج خسرو دوم، بال‌های بهرام، ایزد پیروزی، را دارد. حمزهٔ اصفهانی می‌گوید در کتاب نگاره‌های شاهان ساسانی، او مانند شاهان با جامه و شلوار، تاج آسمانی‌رنگ و تبرزین بر تخت نشان داده شده بود.'],
        ['Boran’s coins survive from her first, second and third regnal years. Her name is written BWLʾN. She is the only Sasanian woman shown crowned on the coinage. Her crown, like Khosrow II’s, carries the wings of Bahrām, the god of victory. Ḥamza al-Iṣfahāni says the picture book of Sasanian kings showed her dressed like the kings, in tunic and trousers, with a sky-blue crown, enthroned and holding a battle-axe.']],
      [['امرانی می‌گوید تقلید از تاج و سکهٔ خسرو دوم راهی بود تا بوران دارندهٔ برحق «فرّه» شناخته شود. به نظر او زن بودن بوران با نمادها «بی‌اهمیت» شد: او «ملکه» دیده نمی‌شد، بلکه «شاه» بود. این تفسیر امرانی است، نه گزارش منابع.'],
        ['Emrani argues that imitating Khosrow II’s crown and coins was a way for Boran to be recognized as rightful holder of the royal glory (xwarrah). In her view symbols made Boran’s gender irrelevant: she was seen not as queen but as king. This is Emrani’s interpretation, not a report of the sources.']],
      [['سکه رسانهٔ همگانی آن روزگار بود. بوران با سکه به همهٔ بازارهای کشور پیام داد که پادشاهی پدرش ادامه دارد.'],
        ['Coins were the mass medium of the age. With her coins Boran told every market in the realm that her father’s kingship continued.']],
      ['ir-boran', 'emrani', 'tabari5'], {
        quotes: [{ text: 'Bōrān is the only Sasanian woman depicted wearing a crown on Sasanian coinage', fa: 'بوران تنها زن ساسانی است که با تاج بر سکه‌های ساسانی نشان داده شده است.', ref: 'H. Emrani, “Like Father, Like Daughter”, e-Sasanika 5 (2009)', source: 'emrani' }],
        photos: ['coin-boran', 'coin-boran-berlin'],
      }),
    sec('end', 'صلیب، سفارت و پایان', 'The Cross, the embassy and the end',
      [['رویداد بزرگ پادشاهی بوران، به گفتهٔ شومون، سفارتی به رهبری جاثلیق ایشوعیاب نزد هراکلیوس بود. سنت می‌گوید این سفارت صلیب راستین را بازگرداند. بوران در پاییز ۶۳۱ درگذشت. دو تاریخ‌نامهٔ مسیحی می‌گویند خفه شد.'],
        ['The major event of Boran’s reign, Chaumont says, was an embassy led by the catholicos Išoʿyahb to Heraclius. Tradition says this embassy restored the True Cross. Boran died in autumn 631. Two Christian chronicles say she was strangled.']],
      [['شومون و بازورث می‌گویند صلیب را پیش‌تر قباد دوم بازگردانده بود. پس سفارت بوران بیشتر برای پایان دادن به مسائل باقی‌ماندهٔ صلح بود. اینکه چه کسی و چرا او را کشت، روشن نیست.'],
        ['Chaumont and Bosworth say the Cross had already been restored by Kavad II. So Boran’s embassy was mainly about settling the remaining issues of the peace. Who killed her, and why, is unclear.']],
      [['بوران کوشید با صلح، بخشش مالیات و فرستادن یک روحانی مسیحی به عنوان سفیر، کشور را آرام کند. اما بزرگانی که شاه را می‌ساختند، می‌توانستند او را از میان هم ببرند.'],
        ['Boran tried to calm the realm with peace, tax relief and a Christian churchman as her envoy. But the nobles who made rulers could also remove them.']],
      ['ir-boran', 'tabari5']),
  ],
  synthesis: { title: B('جمع‌بندی', 'Synthesis'), paras: {
    fa: ['بوران نخستین زنی بود که به نام خود بر ایران ساسانی فرمان راند. سکه‌هایش با تاج بالدار پدر و گزارش طبری از بخشش مالیات و ساختن پل‌ها از او فرمانروایی صلح‌جو نشان می‌دهند. این‌که صلیب را او بازگرداند و این‌که چگونه مرد، محل بحث است.'],
    en: ['Boran was the first woman to rule Sasanian Iran in her own name. Her coins in her father’s winged crown and Ṭabari’s report of tax remission and bridge-building show a peace-seeking ruler. Whether she returned the Cross, and how she died, are disputed.'],
  }, sources: ['ir-boran', 'tabari5', 'emrani'] },
  sources: pick('ir-boran', 'tabari5', 'emrani'),
  photos: photos('coin-boran', 'coin-boran-berlin'),
  related: related(['khosrow-ii', 'خسرو دوم، پدرش', 'Khosrow II, her father'], ['shahrbaraz', 'شهربراز، پیش از او', 'Shahrbaraz, before her'], ['azarmidokht', 'آزرمیدخت، خواهرش', 'Azarmidokht, her sister']),
  wikipedia: 'https://en.wikipedia.org/wiki/Boran',
}
