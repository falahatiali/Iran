/**
 * Compact dossiers for the short reigns: Xerxes II, Sogdianus, Artaxerxes IV (Arses) and Bessus (Artaxerxes V).
 * Xerxes II and Sogdianus are known almost only from Ctesias; Babylonian documents pass straight from
 * Artaxerxes I to Darius II, so both reigns are flagged.
 */
import type { FeaturedKing } from '../featured/types'
import { ACH, BABYLON, BACTRA, ECBATANA, HYRCANIA, SUSA, XANTHOS, ev, note, pick, related } from './common'

const CTESIAS_ONLY = note('کتسیاس تقریباً تنها منبع است و اسناد بابلی هیچ‌کدام از این دو شاه را نمی‌شناسند؛ ترتیب و درازای پادشاهی‌ها از او است.', 'Ctesias is almost the only source and no Babylonian document knows either king; the order and length of the reigns come from him.')

export const xerxesII: FeaturedKing = {
  slug: 'xerxes-ii', name: { fa: 'خشایارشای دوم', en: 'Xerxes II' }, dynastyName: ACH,
  reign: { fa: '۴۲۴/۴۲۳ پ.م.، ۴۵ روز (به گفتهٔ کتسیاس)', en: '424/423 BCE, 45 days (per Ctesias)' },
  title: { fa: 'خشایارشای دوم؛ چهل‌وپنج روز', en: 'Xerxes II: forty-five days' },
  lede: {
    fa: 'تنها پسر قانونی اردشیر یکم از ملکه دمسپیا، که پس از مرگ پدر بر تخت نشست و به روایت کتسیاس پس از ۴۵ روز، مست در کاخ، به دست برادر ناتنی‌اش سغدیانوس کشته شد. هیچ سند بابلی یا ایرانی از او نمانده است؛ همهٔ داستان از کتسیاس است و ما آن را چنین علامت زده‌ایم.',
    en: 'The only legitimate son of Artaxerxes I by Queen Damaspia, who took the throne on his father’s death and, according to Ctesias, after 45 days was killed drunk in the palace by his half-brother Sogdianus. No Babylonian or Iranian document of him survives; the whole story is from Ctesias and is flagged as such.',
  },
  stats: [{ n: { fa: '۴۵', en: '45' }, l: { fa: 'روز پادشاهی (کتسیاس)', en: 'days of reign (Ctesias)' } }, { n: { fa: '۰', en: '0' }, l: { fa: 'سند بابلی به نام او', en: 'Babylonian documents in his name' } }],
  mapTitle: { fa: 'نقشه: جانشینی ۴۲۴ پ.م.', en: 'Map: the succession of 424 BCE' },
  span: [-424, -423],
  events: [
    ev('accession', -424, { fa: 'زمستان ۴۲۴/۴۲۳ پ.م.', en: 'winter 424/423 BCE' }, 'admin', SUSA, { fa: 'پسر ملکه بر تخت', en: 'The queen’s son on the throne' }, { fa: 'اردشیر یکم و ملکه دمسپیا در یک روز مردند و خشایارشا، تنها پسر قانونی، شاه شد (کتسیاس). پیکر پدر و مادر به پارس برده شد.', en: 'Artaxerxes I and Queen Damaspia died on the same day and Xerxes, the only legitimate son, became king (Ctesias). His parents’ bodies were taken to Persis.' }, 'disputed', ['ctesias', 'ir-d2'], CTESIAS_ONLY),
    ev('murder', -423, { fa: 'پس از ۴۵ روز', en: 'after 45 days' }, 'admin', SUSA, { fa: 'کشته در مستی', en: 'Killed while drunk' }, { fa: 'سغدیانوس، پسر اردشیر از زنی بابلی به نام آلوگونه، با یاری فرناکیاس و خواجه‌ای به نام منوستانس، خشایارشا را در شب جشنی، مست و خفته، کشت (کتسیاس). دیودور (۱۲.۶۴) برای او یک سال پادشاهی می‌شمارد.', en: 'Sogdianus, Artaxerxes’ son by a Babylonian woman called Alogyne, with the help of Pharnacyas and Menostanes, killed Xerxes asleep and drunk after a feast (Ctesias). Diodorus (12.64) gives him a reign of one year.' }, 'disputed', ['ctesias', 'diodorus', 'ir-d2'], CTESIAS_ONLY),
  ],
  dossier: [
    {
      id: 'evidence', title: { fa: 'شاهی که اسناد نمی‌شناسند', en: 'A king the documents do not know' },
      historical: {
        fa: ['کتسیاس می‌گوید خشایارشای دوم ۴۵ روز، و دیودور یک سال، پادشاهی کرد. اما در اسناد اقتصادی بابل، که هر قرارداد را با سال شاه تاریخ می‌زدند، داریوش دوم بی‌واسطه پس از اردشیر یکم می‌آید (استولپر ۱۹۸۳؛ ایرانیکا، «داریوش دوم»). پس یا پادشاهی او در بابل هرگز به رسمیت شناخته نشد، یا کشمکش در نخستین ماه‌های داریوش رخ داد.'],
        en: ['Ctesias says Xerxes II reigned 45 days, Diodorus one year. But in Babylon’s business documents, which dated every contract by the king’s year, Darius II follows Artaxerxes I directly (Stolper 1983; Iranica, “Darius II”). Either his reign was never recognised in Babylonia, or the struggle took place in Darius’ first months.'],
      },
      interpretation: { fa: ['وقتی تاریخ‌گذاری قراردادها فقط یک شاه را می‌شناسد، دفتر اسناد ملکی گواهی بهتری از قدرت واقعی است تا داستان دربار.'], en: ['When the contract-dating knows only one king, the registry is better evidence of real power than the court story.'] },
      modern: { fa: ['نظام حقوقی‌ای که قراردادها را با تقویم ثابت تاریخ می‌زند، در آشوب سیاسی هم ادامه می‌یابد؛ ثبات مالکیت به ثبات کاخ وابسته نیست.'], en: ['A legal system that dates contracts by a steady calendar carries on through political turmoil; the security of property need not depend on the stability of the palace.'] },
      sources: ['ctesias', 'diodorus', 'stolper1983', 'ir-d2'],
    },
    {
      id: 'succession', title: { fa: 'جانشینی بی‌قاعده', en: 'Succession without a rule' },
      historical: { fa: ['اردشیر یکم از ملکه یک پسر و از زنان دیگر دست‌کم هفده پسر داشت (کتسیاس). سه تن از آنان، خشایارشا، سغدیانوس و اخوس (داریوش دوم)، در کمتر از یک سال بر سر تخت جنگیدند.'], en: ['Artaxerxes I had one son by the queen and at least seventeen by other women (Ctesias). Three of them, Xerxes, Sogdianus and Ochus (Darius II), fought over the throne within less than a year.'] },
      interpretation: { fa: ['قدرتی که ملک شخصی است، به ارث نمی‌رسد بلکه تصرف می‌شود.'], en: ['Power held as personal property is not inherited but seized.'] },
      modern: { fa: ['قانون اساسی‌ای که جانشینی را پیشاپیش معین می‌کند، از جان و مال همه، نه فقط شاهزادگان، پاسداری می‌کند.'], en: ['A constitution that fixes the succession in advance protects everyone’s life and property, not only the princes’.'] },
      sources: ['ctesias', 'briant'],
    },
  ],
  synthesis: { title: { fa: 'جمع‌بندی', en: 'Synthesis' }, paras: { fa: ['خشایارشای دوم بیش از آنکه شاه باشد، نامی در روایت کتسیاس است. آنچه قطعی است این است که در ۴۲۴–۴۲۳ تخت دست به دست شد و اسناد بابل از آن خبر نداشتند یا نخواستند داشته باشند.'], en: ['Xerxes II is less a king than a name in Ctesias’ story. What is secure is that the throne changed hands in 424–423 and Babylon’s documents either did not know or chose not to record it.'] }, sources: ['ctesias', 'stolper1983', 'ir-d2'] },
  sources: pick('ctesias', 'diodorus', 'stolper1983', 'ir-d2', 'briant', 'kuhrt'),
  related: related(['artaxerxes-i', 'اردشیر یکم، پدرش', 'Artaxerxes I, his father'], ['sogdianus', 'سغدیانوس، قاتلش', 'Sogdianus, his killer'], ['darius-ii', 'داریوش دوم', 'Darius II']),
  wikipedia: 'https://en.wikipedia.org/wiki/Xerxes_II',
}

export const sogdianus: FeaturedKing = {
  slug: 'sogdianus', name: { fa: 'سغدیانوس', en: 'Sogdianus' }, dynastyName: ACH,
  reign: { fa: '۴۲۴–۴۲۳ پ.م.، ۶ ماه و ۱۵ روز (کتسیاس)', en: '424–423 BCE, 6 months 15 days (Ctesias)' },
  title: { fa: 'سغدیانوس (سکوندیانوس)؛ شاهی که سپاه رهایش کرد', en: 'Sogdianus (Sekyndianos): the king the army abandoned' },
  lede: {
    fa: 'پسر اردشیر یکم از آلوگونهٔ بابلی، که برادرش خشایارشای دوم را کشت و به روایت کتسیاس شش ماه و پانزده روز شاه بود. سواران و ساتراپ‌ها به برادر ناتنی دیگرش اخوس، ساتراپ هیرکانی، پیوستند؛ سغدیانوس با سوگند امان تسلیم شد و در خاکستر کشته شد. نام او در کتسیاس «سکوندیانوس» آمده است.',
    en: 'Artaxerxes I’s son by Alogyne of Babylon, who killed his brother Xerxes II and, according to Ctesias, was king for six months and fifteen days. The cavalry and the satraps went over to another half-brother, Ochus, satrap of Hyrcania; Sogdianus surrendered on a sworn promise of safety and was put to death in ashes. Ctesias calls him “Sekyndianos”.',
  },
  stats: [{ n: { fa: '۶½', en: '6½' }, l: { fa: 'ماه پادشاهی (کتسیاس)', en: 'months of reign (Ctesias)' } }, { n: { fa: '۷', en: '7' }, l: { fa: 'ماه به گفتهٔ دیودور', en: 'months per Diodorus' } }],
  mapTitle: { fa: 'نقشه: از شوش تا هیرکانی', en: 'Map: from Susa to Hyrcania' },
  span: [-424, -423],
  events: [
    ev('seizure', -424, { fa: '۴۲۴/۴۲۳ پ.م.', en: '424/423 BCE' }, 'admin', SUSA, { fa: 'تخت با کشتن برادر', en: 'The throne by fratricide' }, { fa: 'پس از کشتن خشایارشای دوم، سغدیانوس منوستانس را «هزاربد» کرد. به گفتهٔ کتسیاس، باگورازوس، خواجهٔ مورد اعتماد پدر، را سنگسار کرد و همین سپاه را از او بیزار کرد.', en: 'After killing Xerxes II, Sogdianus made Menostanes his chiliarch. Ctesias says he had Bagorazus, his father’s trusted eunuch, stoned, which turned the army against him.' }, 'disputed', ['ctesias', 'ir-d2'], CTESIAS_ONLY),
    ev('ochus', -423, { fa: 'اوایل ۴۲۳ پ.م.', en: 'early 423 BCE' }, 'campaign', BABYLON, { fa: 'اخوس از هیرکانی می‌آید', en: 'Ochus marches from Hyrcania' }, { fa: 'اخوس، ساتراپ هیرکانی، با پشتیبانی آربریوس فرماندهٔ سواران، ارشامه ساتراپ مصر و خواجه آرتوخارس، خود را شاه خواند و نام «داریوش» گرفت. نخستین سال او در اسناد بابلی از اوایل ۴۲۳ است و نام چند تن از یارانش در بایگانی موراشو دیده می‌شود (استولپر).', en: 'Ochus, satrap of Hyrcania, backed by Arbarius the cavalry commander, Arsames satrap of Egypt and the eunuch Artoxares, proclaimed himself king and took the name Darius. His first year in the Babylonian documents begins in early 423, and the names of several supporters appear in the Murašû archive (Stolper).' }, 'probable', ['ctesias', 'stolper1985', 'ir-d2'], { route: [HYRCANIA, [51.5, 35.6], ECBATANA, BABYLON], ...note('تاریخ از اسناد بابلی است؛ نام یاران را هم کتسیاس می‌دهد و هم لوح‌های موراشو.', 'The date is from Babylonian documents; the supporters’ names come from both Ctesias and the Murašû tablets.') }),
    ev('ashes', -423, { fa: '۴۲۳ پ.م.', en: '423 BCE' }, 'admin', SUSA, { fa: 'مرگ در خاکستر', en: 'Death in the ashes' }, { fa: 'سغدیانوس با سوگند امان تسلیم شد؛ داریوش او را در خاکستر انداخت و کشت (کتسیاس). این کیفر پارسی را والریوس ماکسیموس و کتاب دوم مکابیان (۱۳:۵–۸) هم وصف می‌کنند.', en: 'Sogdianus surrendered on a sworn promise of safety; Darius had him thrown into ashes and killed (Ctesias). The same Persian punishment is described in 2 Maccabees 13:5–8.' }, 'disputed', ['ctesias', 'ir-d2'], CTESIAS_ONLY),
  ],
  dossier: [
    {
      id: 'evidence', title: { fa: 'شاه کتسیاس، نه شاه بابل', en: 'Ctesias’ king, not Babylon’s' },
      historical: { fa: ['کتسیاس سغدیانوس را شش ماه و پانزده روز و دیودور (۱۲.۷۱) هفت ماه شاه می‌داند. اسناد بابلی او را نمی‌شناسند. ایرانیکا احتمال می‌دهد که نبرد بر سر تخت در نخستین ماه‌های داریوش دوم رخ داده باشد، نه پیش از آن.'], en: ['Ctesias gives Sogdianus six months and fifteen days, Diodorus (12.71) seven months. The Babylonian documents do not know him. Iranica suggests the struggle for the throne took place in Darius II’s first months rather than before them.'] },
      interpretation: { fa: ['سغدیانوس شمشیر داشت، اما نه سپاه و نه پشتیبانی ساتراپ‌ها را. قدرت بدون مشروعیتی که دیگران بپذیرند دوام نمی‌آورد.'], en: ['Sogdianus had the sword, but neither the army nor the satraps. Power without a legitimacy others accept does not last.'] },
      modern: { fa: ['سوگند امانی که شکسته شد، یادآور است که وعدهٔ حاکم بی‌دادگاه مستقل ارزشی ندارد.'], en: ['A sworn safe-conduct that was broken is a reminder that a ruler’s promise is worth little without an independent court.'] },
      sources: ['ctesias', 'diodorus', 'ir-d2'],
    },
    {
      id: 'murasu', title: { fa: 'ردپا در بایگانی موراشو', en: 'Traces in the Murašû archive' },
      historical: { fa: ['استولپر نشان داد که نام چند تن از کسانی که کتسیاس در صف سغدیانوس یا داریوش می‌گذارد، از جمله پروشات، همسر داریوش، در لوح‌های موراشو در نیپور به‌عنوان صاحبان زمین آمده است. در سال دوم داریوش شمار گروگذاری زمین بالا رفت، که شاید پیامد هزینه‌های جنگ جانشینی بود.'], en: ['Stolper showed that several people Ctesias places on Sogdianus’ or Darius’ side, Parysatis, Darius’ wife, among them, appear in the Murašû tablets at Nippur as landholders. In Darius’ second year mortgages increased, perhaps a result of the costs of the succession war.'] },
      interpretation: { fa: ['جنگ جانشینی هزینه‌اش را از دهقانان بابلی گرفت: مالیات و خدمت سپاهی، و سپس وام با گرو زمین.'], en: ['The succession war took its cost from Babylonian smallholders: taxes and military service, and then loans secured on land.'] },
      modern: { fa: ['جنگ‌های قدرت در پایتخت، با گرو گذاشتن زمین مردم در شهرستان پرداخت می‌شود.'], en: ['Power struggles in the capital are paid for by people mortgaging their land in the provinces.'] },
      sources: ['stolper1985', 'ir-d2'],
    },
  ],
  synthesis: { title: { fa: 'جمع‌بندی', en: 'Synthesis' }, paras: { fa: ['سغدیانوس نشان می‌دهد که در امپراتوری هخامنشی، کشتن شاه آسان‌تر از جانشینی او بود: سپاه، ساتراپ‌ها و ملکه‌ها تعیین می‌کردند چه کسی می‌ماند.'], en: ['Sogdianus shows that in the Achaemenid empire killing a king was easier than succeeding him: the army, the satraps and the queens decided who stayed.'] }, sources: ['ctesias', 'stolper1985'] },
  sources: pick('ctesias', 'diodorus', 'stolper1985', 'stolper1983', 'ir-d2', 'briant'),
  related: related(['xerxes-ii', 'خشایارشای دوم', 'Xerxes II'], ['darius-ii', 'داریوش دوم، جانشینش', 'Darius II, his successor']),
  wikipedia: 'https://en.wikipedia.org/wiki/Sogdianus',
}

export const artaxerxesIV: FeaturedKing = {
  slug: 'artaxerxes-iv', name: { fa: 'اردشیر چهارم (ارشک / آرسس)', en: 'Artaxerxes IV (Arses)' }, dynastyName: ACH,
  reign: { fa: '۳۳۸–۳۳۶ پ.م.', en: '338–336 BCE' },
  title: { fa: 'اردشیر چهارم؛ شاه دست‌نشاندهٔ باگواس', en: 'Artaxerxes IV: Bagoas’ puppet king' },
  lede: {
    fa: 'جوان‌ترین پسر اردشیر سوم از آتوسا، که پس از مسموم شدن پدرش به فرمان خواجه باگواس بر تخت نشست. در همان هنگام فیلیپ دوم مقدونی اتحادیهٔ کورنت را ساخت و سپاه پیشتاز به آسیا فرستاد. آرسس کوشید باگواس را مسموم کند، اما خود مسموم شد و فرزندانش کشته شدند (دیودور ۱۷.۵). کتیبهٔ سه‌زبانهٔ لتوئون در خانتوس شاید از سال نخست او باشد.',
    en: 'The youngest son of Artaxerxes III by Atossa, put on the throne after his father was poisoned on the orders of the eunuch Bagoas. At the same moment Philip II of Macedon formed the League of Corinth and sent an advance army into Asia. Arses tried to poison Bagoas, but was poisoned himself and his children were killed (Diodorus 17.5). The trilingual stele of the Letoon at Xanthos may date to his first year.',
  },
  stats: [{ n: { fa: '~۲', en: '~2' }, l: { fa: 'سال پادشاهی', en: 'years of reign' } }, { n: { fa: '۳', en: '3' }, l: { fa: 'زبان کتیبهٔ خانتوس', en: 'languages on the Xanthos stele' } }],
  mapTitle: { fa: 'نقشه: دو سال پادشاهی', en: 'Map: two years of reign' },
  span: [-338, -336],
  events: [
    ev('accession', -338, { fa: '۳۳۸ پ.م.', en: '338 BCE' }, 'admin', SUSA, { fa: 'شاه به دست باگواس', en: 'Made king by Bagoas' }, { fa: 'باگواس، خواجهٔ مصری‌تبار و هزاربد، اردشیر سوم و پسران بزرگ‌ترش را کشت و جوان‌ترین، آرسس، را بر تخت نشاند (دیودور ۱۷.۵.۳). هم‌زمان فیلیپ دوم در خایرونیا (۳۳۸) یونان را گرفت.', en: 'Bagoas, the Egyptian-born eunuch and chiliarch, killed Artaxerxes III and his elder sons and put the youngest, Arses, on the throne (Diodorus 17.5.3). At the same time Philip II won Greece at Chaeronea (338).' }, 'probable', ['diodorus', 'ir-a4', 'briant'], note('روایت از دیودور است؛ برخی پژوهشگران در نقش باگواس در مرگ اردشیر سوم تردید دارند.', 'The account is Diodorus’; some scholars doubt Bagoas’ role in Artaxerxes III’s death.')),
    ev('xanthos', -337, { fa: '«سال یکم اردشیر»: ۳۳۷ پ.م.؟', en: '“year 1 of Artaxerxes”: 337 BCE?' }, 'religion', XANTHOS, { fa: 'سنگ‌نوشتهٔ سه‌زبانهٔ لتوئون', en: 'The trilingual stele of the Letoon' }, { fa: 'در لیکیه، شهروندان خانتوس با اجازهٔ ساتراپ پیکسوداروس پرستشگاهی بنیاد نهادند، زمینی وقف آن کردند و درآمد و معافیت آن را به لیکیایی، یونانی و آرامی ثبت کردند. متن آرامی با «سال یکم اردشیر شاه» تاریخ دارد.', en: 'In Lycia the citizens of Xanthos, with the permission of the satrap Pixodarus, founded a cult, endowed it with land and recorded its revenues and exemptions in Lycian, Greek and Aramaic. The Aramaic text is dated “year 1 of king Artaxerxes”.' }, 'disputed', ['xanthos', 'briant'], note('اینکه «اردشیر» این متن آرسس است (۳۳۷) یا اردشیر سوم (۳۵۸)، محل بحث است.', 'Whether the text’s “Artaxerxes” is Arses (337) or Artaxerxes III (358) is debated.')),
    ev('philip', -336, { fa: 'بهار ۳۳۶ پ.م.', en: 'spring 336 BCE' }, 'campaign', [27.0, 39.0], { fa: 'پیشتازان مقدونی در آسیا', en: 'Macedonian vanguard in Asia' }, { fa: 'فیلیپ، به بهانهٔ کمک اردشیر سوم به پرینتوس، از ایران غرامت خواست. آرسس نپذیرفت. پارمنیون و آتالوس با ده هزار تن به آسیای کوچک گذشتند (دیودور ۱۶.۹۱؛ ایرانیکا).', en: 'Philip, citing Artaxerxes III’s help to Perinthus, demanded compensation from Persia. Arses refused. Parmenion and Attalus crossed into Asia Minor with ten thousand men (Diodorus 16.91; Iranica).' }, 'probable', ['diodorus', 'arrian', 'ir-a4']),
    ev('death', -336, { fa: 'حدود ژوئن ۳۳۶ پ.م.', en: 'c. June 336 BCE' }, 'admin', SUSA, { fa: 'مسموم به دست باگواس', en: 'Poisoned by Bagoas' }, { fa: 'آرسس خواست از قید باگواس رها شود؛ باگواس پیش‌دستی کرد، او را مسموم کرد و فرزندانش را کشت، و داریوش سوم را بر تخت نشاند (دیودور ۱۷.۵.۴–۵).', en: 'Arses tried to free himself from Bagoas; Bagoas struck first, poisoned him and killed his children, and put Darius III on the throne (Diodorus 17.5.4–5).' }, 'probable', ['diodorus', 'ir-a4']),
  ],
  dossier: [
    {
      id: 'name', title: { fa: 'نام: آرسس یا اردشیر چهارم', en: 'Name: Arses or Artaxerxes IV' },
      historical: { fa: ['یونانیان او را «آرسس» می‌نامند، که به گفتهٔ لکوک در ایرانیکا صورت کوتاه‌شدهٔ نامی ایرانی از ریشهٔ aršan- «نر، دلیر» است. نام شاهی‌اش بنا بر فهرست شاهان بابلی و احتمالاً کتیبهٔ خانتوس «اردشیر» بود؛ از این رو اردشیر چهارم خوانده می‌شود.'], en: ['The Greeks call him Arses, which Lecoq in Iranica explains as a short form of an Iranian name from aršan- “male, manly”. His throne name, from the Babylonian king lists and probably the Xanthos stele, was Artaxerxes; hence Artaxerxes IV.'] },
      interpretation: { fa: ['نام شاهی ادعای پیوستگی با اردشیرهای پیشین بود؛ قدرت واقعی اما نزد هزاربد بود.'], en: ['The throne name claimed continuity with the earlier Artaxerxes; real power, though, lay with the chiliarch.'] },
      modern: { fa: ['عنوان رسمی بدون اختیار واقعی، نهادی تهی است.'], en: ['A formal title without real authority is an empty institution.'] },
      sources: ['ir-a4', 'xanthos'],
    },
    {
      id: 'xanthos', title: { fa: 'خانتوس: وقف زمین و قرارداد شهروندان', en: 'Xanthos: a land endowment and a civic contract' },
      historical: { fa: ['سنگ‌نوشتهٔ لتوئون (موزهٔ فتحیه) بنیاد پرستش دو خدای کاریایی را ثبت می‌کند: شهروندان زمینی وقف کردند، درآمد سالانه، کاهن و معافیت از مالیات را معین کردند، و نفرینی بر هر که این را بشکند نوشتند. متن آرامی تصویب ساتراپ را می‌افزاید. این یکی از روشن‌ترین شواهد است که در قلمرو هخامنشی، شهرها می‌توانستند ملک و نهاد خود را با تأیید شاهی پدید آورند.'], en: ['The Letoon stele (Fethiye Museum) records the foundation of a cult of two Carian gods: the citizens endowed land, fixed annual revenues, a priest and tax exemptions, and wrote a curse on anyone who breaks it. The Aramaic text adds the satrap’s sanction. It is one of the clearest pieces of evidence that cities in the Achaemenid realm could create their own property and institutions with royal approval.'] },
      interpretation: { fa: ['در اینجا، برخلاف دربار، قاعده روشن است: ملک، درآمد، مسئول و ضمانت، همه مکتوب.'], en: ['Here, unlike at court, the rules are clear: property, revenue, office-holder and guarantee, all in writing.'] },
      modern: { fa: ['وقف و بنیادِ ثبت‌شده با تأیید حکومت، اما در اختیار جامعهٔ محلی، الگوی جامعهٔ مدنی است.'], en: ['A registered endowment, approved by the state but run by the local community, is a model of civil society.'] },
      sources: ['xanthos', 'briant'],
    },
  ],
  synthesis: { title: { fa: 'جمع‌بندی', en: 'Synthesis' }, paras: { fa: ['دو سال آرسس، میان خایرونیا و برآمدن اسکندر، بدترین هنگام برای آشوب دربار بود. ایرانیکا مرگ‌های پی‌درپی شاهان را از عوامل ضعف ایران پیش از اسکندر می‌شمارد.'], en: ['Arses’ two years, between Chaeronea and Alexander’s rise, were the worst moment for court chaos. Iranica counts the chain of royal murders among the causes of Persia’s weakness before Alexander.'] }, sources: ['ir-a4', 'diodorus'] },
  sources: pick('diodorus', 'arrian', 'xanthos', 'ir-a4', 'briant', 'kuhrt'),
  related: related(['artaxerxes-iii', 'اردشیر سوم، پدرش', 'Artaxerxes III, his father'], ['darius-iii', 'داریوش سوم، جانشینش', 'Darius III, his successor']),
  wikipedia: 'https://en.wikipedia.org/wiki/Artaxerxes_IV',
}

export const bessus: FeaturedKing = {
  slug: 'artaxerxes-v', name: { fa: 'بسوس (اردشیر پنجم)', en: 'Bessus (Artaxerxes V)' }, dynastyName: ACH,
  reign: { fa: '۳۳۰–۳۲۹ پ.م.، در باختر (ادعایی)', en: '330–329 BCE, in Bactria (claimed)' },
  title: { fa: 'بسوس؛ مدعی پادشاهی پس از داریوش', en: 'Bessus: the claimant after Darius' },
  lede: {
    fa: 'ساتراپ باختر و خویشاوند داریوش سوم، که با نبرزن و برسئنت شاه را دستگیر کرد و در ژوئیهٔ ۳۳۰ کشت، سپس در باختر تاج راست بر سر نهاد و نام «اردشیر» گرفت (آریان ۳.۲۵.۳). یاران خودش، از جمله سپیتامن، او را به اسکندر سپردند و در همدان اعدام شد. شاهی او را جز خودش و یارانش کسی به رسمیت نشناخت؛ از این رو علامت زده‌ایم.',
    en: 'Satrap of Bactria and a kinsman of Darius III, who with Nabarzanes and Barsaentes seized the king and killed him in July 330, then in Bactria put on the upright tiara and took the name Artaxerxes (Arrian 3.25.3). His own allies, Spitamenes among them, handed him to Alexander and he was executed at Ecbatana. No one but he and his supporters recognised his kingship; we flag it accordingly.',
  },
  stats: [{ n: { fa: '~۱', en: '~1' }, l: { fa: 'سال ادعای پادشاهی', en: 'year of claimed kingship' } }],
  mapTitle: { fa: 'نقشه: از هکاتومپیلوس تا باختر', en: 'Map: from Hecatompylos to Bactria' },
  span: [-330, -329],
  events: [
    ev('regicide', -330, { fa: 'ژوئیهٔ ۳۳۰ پ.م.', en: 'July 330 BCE' }, 'admin', [54.5, 36.2], { fa: 'کشتن داریوش', en: 'The killing of Darius' }, { fa: 'بسوس و همدستانش داریوش را در بند بردند و چون اسکندر نزدیک شد، او را زخمی کردند و رها کردند؛ شاه پیش از رسیدن اسکندر مرد (آریان ۳.۲۱).', en: 'Bessus and his accomplices carried Darius off in chains and, as Alexander closed in, wounded him and left him; the king died before Alexander arrived (Arrian 3.21).' }, 'secure', ['arrian', 'curtius']),
    ev('claim', -330, { fa: 'پاییز ۳۳۰ پ.م.', en: 'autumn 330 BCE' }, 'admin', BACTRA, { fa: 'اردشیر در باختر', en: 'Artaxerxes in Bactria' }, { fa: 'به گزارش آریان، بسوس کلاه راست بر سر نهاد، جامهٔ شاهی پوشید و خود را «اردشیر» و شاه آسیا خواند.', en: 'Arrian reports that Bessus wore the upright tiara and royal dress and called himself Artaxerxes, king of Asia.' }, 'probable', ['arrian', 'briant'], { route: [[54.5, 36.2], [59.6, 36.3], [62.2, 34.35], BACTRA] }),
    ev('end', -329, { fa: '۳۲۹ پ.م.', en: '329 BCE' }, 'admin', ECBATANA, { fa: 'تسلیم و اعدام', en: 'Surrender and execution' }, { fa: 'پس از گذشتن اسکندر از هندوکش، سپیتامن و داتافرن بسوس را دستگیر کردند و به بطلمیوس سپردند. اسکندر بینی و گوش‌هایش را برید، به شیوهٔ پارسی، و او را برای اعدام به همدان فرستاد (آریان ۴.۷.۳).', en: 'After Alexander crossed the Hindu Kush, Spitamenes and Dataphernes arrested Bessus and handed him to Ptolemy. Alexander had his nose and ears cut off, in the Persian manner, and sent him to Ecbatana for execution (Arrian 4.7.3).' }, 'probable', ['arrian', 'curtius'], note('جای و شیوهٔ اعدام در منابع فرق می‌کند (آریان: همدان؛ کورتیوس و دیگران: باختر).', 'The place and manner of execution differ between sources (Arrian: Ecbatana; Curtius and others: Bactria).')),
  ],
  dossier: [
    {
      id: 'claim', title: { fa: 'پادشاهی یا شورش؟', en: 'Kingship or rebellion?' },
      historical: { fa: ['بسوس از خاندان هخامنشی بود و در گوگمل سواران باختری را فرمان می‌داد (آریان ۳.۸). منابع یونانی و رومی او را شاه‌کش و غاصب می‌نامند. برای یاران شرقی‌اش، اما، او ادامهٔ پادشاهی هخامنشی در برابر مهاجم بود. هیچ سکه یا سندی از پادشاهی‌اش نمانده است.'], en: ['Bessus was of Achaemenid kin and commanded the Bactrian cavalry at Gaugamela (Arrian 3.8). The Greek and Roman sources call him a regicide and usurper. For his eastern supporters, though, he was the continuation of Achaemenid kingship against an invader. No coin or document of his reign survives.'] },
      interpretation: { fa: ['اسکندر بسوس را به کیفر پارسی شاه‌کشی مجازات کرد تا خود را جانشین مشروع داریوش بنماید؛ کیفر بسوس، تبلیغ اسکندر بود.'], en: ['Alexander punished Bessus with the Persian penalty for regicide to present himself as Darius’ legitimate heir; Bessus’ punishment was Alexander’s propaganda.'] },
      modern: { fa: ['مشروعیت را نه زور و نه عنوان، بلکه پذیرش دیگران می‌سازد؛ بسوس هیچ‌یک را نداشت.'], en: ['Legitimacy comes neither from force nor from title but from others’ acceptance; Bessus had none of these.'] },
      sources: ['arrian', 'curtius', 'briant'],
    },
  ],
  synthesis: { title: { fa: 'جمع‌بندی', en: 'Synthesis' }, paras: { fa: ['با بسوس، آخرین ادعای پادشاهی هخامنشی پایان یافت. اینکه او را «اردشیر پنجم» بشماریم یا نه، تصمیمی است دربارهٔ اینکه چه کسی حق دارد شاه را تعیین کند.'], en: ['With Bessus the last claim to Achaemenid kingship ended. Whether to count him as “Artaxerxes V” is a decision about who has the right to make a king.'] }, sources: ['arrian', 'briant'] },
  sources: pick('arrian', 'curtius', 'briant', 'briant-darius'),
  related: related(['darius-iii', 'داریوش سوم', 'Darius III']),
  wikipedia: 'https://en.wikipedia.org/wiki/Bessus',
}
