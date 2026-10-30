/**
 * Dossier on Artaxerxes I. Three layers per section: historical evidence, our property-and-liberty
 * interpretation, and modern meaning. Verbatim quotes: A1Pa (Lecoq via Livius), Thucydides (Hobbes),
 * Diodorus (Oldfather), Plutarch (Perrin), Nehemiah (KJV). Persian renderings are ours.
 */
import type { DossierSection, Synthesis } from '../featured/types'

export const artaxerxesDossier: DossierSection[] = [
  {
    id: 'life', title: { fa: 'زندگی به ترتیب: از قتل پدر تا آشوب پس از مرگ', en: 'A life in order: from his father’s murder to the chaos after his death' }, photos: ['tomb'],
    historical: {
      fa: [
        'اردشیر (پارسی باستان Artaxšaçā، «کسی که فرمانروایی‌اش بر راستی/اَرتَه است») پسر خشایارشا و آمستریس بود و جوان‌ترین برادر. سال زادنش ثبت نشده است. در اوت ۴۶۵ پدرش کشته شد و او، پس از کشتن برادرش داریوش و سپس اردوان، به تخت رسید؛ نخستین سال پادشاهی‌اش در بابل از دسامبر ۴۶۵ شمرده می‌شود.',
        'سال‌های نخست: شورش باختر (۴۶۵–۴۶۴)، آمدن تمیستوکلس آتنی به دربار، و از حدود ۴۶۰ شورش ایناروس در مصر با یاری آتن، که مگابیز در ۴۵۴ در پروسوپیتیس پایانش داد. از ۴۵۴ بایگانی موراشو در نیپور آغاز می‌شود.',
        'میانه: کیمون در قبرس (حدود ۴۵۰) و به روایت دیودور صلح کالیاس (۴۴۹/۴۴۸)؛ شورش مگابیز در سوریه (به روایت کتسیاس)؛ مأموریت نحمیا (۴۴۵)؛ ساموس (۴۴۰–۴۳۹). در تخت‌جمشید تالار صدستون را تمام کرد.',
        'پایان: آخرین تاریخ بابلی او در ماه یازدهم سال ۴۱ (اوایل ۴۲۳) است (استولپر ۱۹۸۳). پس از او، در کمتر از یک سال، خشایارشای دوم، سغدیانوس و سرانجام داریوش دوم بر تخت نشستند.',
      ],
      en: [
        'Artaxerxes (Old Persian Artaxšaçā, “whose rule is through truth/arta”) was the son of Xerxes and Amestris and the youngest brother. No birth year is recorded. In August 465 his father was murdered and he came to the throne after killing his brother Darius and then Artabanus; his first regnal year at Babylon is counted from December 465.',
        'The early years: the Bactrian revolt (465–464), the arrival of the Athenian Themistocles at court, and from about 460 the revolt of Inaros in Egypt with Athenian help, ended by Megabyzus at Prosopitis in 454. From 454 the Murašû archive at Nippur begins.',
        'The middle years: Cimon at Cyprus (c. 450) and, according to Diodorus, the Peace of Callias (449/448); the revolt of Megabyzus in Syria (per Ctesias); Nehemiah’s mission (445); Samos (440–439). At Persepolis he completed the Hall of a Hundred Columns.',
        'The end: his last Babylonian date is month 11 of year 41 (early 423) (Stolper 1983). Within less than a year after him, Xerxes II, Sogdianus and finally Darius II took the throne.',
      ],
    },
    interpretation: {
      fa: ['اردشیر نه جنگ بزرگی آغاز کرد و نه سرزمینی بزرگ گرفت؛ چهل سال امپراتوری را با پول، دیپلماسی و سرکوب گزینشی نگه داشت. این شاید کم‌رنگ‌ترین و در عین حال پایدارترین دوران هخامنشی پس از داریوش باشد.'],
      en: ['Artaxerxes started no great war and won no great territory; for forty years he held the empire with money, diplomacy and selective repression. It may be the least colourful and yet one of the steadiest Achaemenid reigns after Darius.'],
    },
    modern: {
      fa: ['پادشاهی‌ای که با کشتن برادر آغاز شد و با کشتن پسر پایان یافت، نشان می‌دهد ثبات بیرونی بدون قاعدهٔ جانشینی شکننده است.'],
      en: ['A reign that began with a brother’s killing and ended with a son’s shows that outward stability without a rule of succession is fragile.'],
    },
    sources: ['iranica', 'bm32234', 'stolper1983', 'diodorus', 'ctesias', 'thuc', 'briant'],
  },
  {
    id: 'name', title: { fa: 'نام و لقب: «دراز‌دست» و «شاه بزرگ»', en: 'Name and epithet: “Longhand” and “Great King”' }, photos: ['phiale'],
    historical: {
      fa: [
        'بله، اردشیر یکم را «درازدست» می‌خوانند: یونانی Makrocheir و لاتین Longimanus، فارسی نو اردشیر درازدست. به گفتهٔ ایرانیکا این لقب نخستین بار نزد پلوتارک می‌آید، که می‌گوید «زیرا دست راستش از چپش درازتر بود». پلوکس (۲.۱۵۱) آن را نمادین، به معنای «قدرت دوررس»، می‌فهمد. پاپیروسی یونانی از مصر هم (به نقل وادل در ویرایش مانتون) او را «درازدست» می‌نامد.',
        'این لقب را خود او به کار نبرد. عنوان رسمی‌اش در کتیبهٔ A1Pa این است: xšâyathiya vazraka «شاه بزرگ»، xšâyathiya xšâyathiyânâm «شاه شاهان»، xšâyathiya dahyûnâm paruzanânâm «شاه سرزمین‌های دارای همه‌گونه مردم»، و «شاه در این زمین بزرگ دور و دراز».',
      ],
      en: [
        'Yes: Artaxerxes I is called “Longhand”: Greek Makrocheir, Latin Longimanus, New Persian Ardašīr-e derāzdast. According to Iranica the epithet first appears in Plutarch, who says it was “because his right hand was longer than his left”. Pollux (2.151) takes it symbolically, as “far-reaching power”. A Greek papyrus from Egypt (cited by Waddell in his Manetho) also calls him “the Long-handed”.',
        'He did not use the nickname himself. His official style in inscription A1Pa is xšâyathiya vazraka “great king”, xšâyathiya xšâyathiyânâm “king of kings”, xšâyathiya dahyûnâm paruzanânâm “king of countries with all kinds of men”, and “king in this earth far and wide”.',
      ],
    },
    quotes: [
      { text: 'The first Artaxerxes, preeminent among the kings of Persia for gentleness and magnanimity, was surnamed Longimanus, because his right hand was longer than his left, and was the son of Xerxes; the second Artaxerxes, the subject of this Life, was surnamed Memor, or Mindful, and was the grandson of the first by his daughter Parysatis.', fa: 'اردشیر نخست، که در نرمی و بزرگواری سرآمد شاهان پارس بود، «درازدست» لقب گرفت، زیرا دست راستش از چپش درازتر بود، و پسر خشایارشا بود؛ اردشیر دوم، موضوع این زندگی‌نامه، «یادآور» لقب گرفت و نوهٔ دختری اولی از پروشات بود.', ref: 'Plutarch, Artaxerxes 1.1, tr. B. Perrin', source: 'plutarch' },
    ],
    interpretation: {
      fa: ['لقب‌ها دو گونه‌اند: عنوان رسمی که شاه خود برمی‌گزید («شاه بزرگ، شاه شاهان») و لقبی که دیگران، اغلب سده‌ها بعد، می‌دادند («درازدست»). اولی ادعای قدرت است و دومی خاطرهٔ مردم یا افسانه. این دو را نباید یکی گرفت.'],
      en: ['Epithets come in two kinds: the official style the king chose (“great king, king of kings”) and the nickname others gave, often centuries later (“Longhand”). The first is a claim of power, the second popular memory or legend. They should not be confused.'],
    },
    modern: {
      fa: ['«درازدست» در فارسی امروز هنوز معنای قدرتی دارد که دستش به همه‌جا می‌رسد؛ همان چیزی که آزادی فردی باید از آن در امان بماند.'],
      en: ['In Persian, “long-handed” still suggests a power whose reach is everywhere: exactly what individual liberty needs protection from.'],
    },
    sources: ['plutarch', 'iranica', 'manetho', 'a1pa'],
  },
  {
    id: 'accession', title: { fa: 'بحران جانشینی و شورش باختر', en: 'The accession crisis and the Bactrian revolt' },
    historical: {
      fa: [
        'منابع یونانی (کتسیاس، دیودور ۱۱.۶۹، یوستین ۳.۱) همه اردوان، فرماندهٔ نگهبانان، را قاتل خشایارشا می‌دانند و اردشیرِ جوان را آلت دست او برای کشتن برادرش داریوش. سپس اردشیر خود اردوان را کشت. لوح بابلی BM 32234 اما قاتل را «پسرش» می‌نامد. مانتون برای اردوان هفت ماه پادشاهی می‌شمارد.',
        'برادر دیگر، ویشتاسپ، ساتراپ باختر بود (دیودور). باختر شورید و در دو نبرد رام شد (کتسیاس).',
      ],
      en: [
        'The Greek sources (Ctesias, Diodorus 11.69, Justin 3.1) all make Artabanus, commander of the guard, Xerxes’ murderer and the young Artaxerxes his tool for killing his brother Darius; Artaxerxes then killed Artabanus. The Babylonian tablet BM 32234, however, names the killer as “his son”. Manetho counts a seven-month reign for Artabanus.',
        'Another brother, Hystaspes, was satrap of Bactria (Diodorus). Bactria revolted and was subdued in two battles (Ctesias).',
      ],
    },
    interpretation: {
      fa: ['چه اردشیر فریب‌خورده بود و چه، چنان که لوح بابلی می‌گذارد گمان کنیم، خود دست داشت، نتیجه یکی است: تاج در کاخ و با شمشیر دست به دست شد. وقتی کشور ملک شخصی شاه است، جانشینی نزاع بر سر ارث است.'],
      en: ['Whether Artaxerxes was deceived or, as the Babylonian tablet allows us to suspect, involved himself, the outcome is the same: the crown changed hands in the palace, by the sword. When the country is the king’s personal estate, succession is a fight over an inheritance.'],
    },
    modern: {
      fa: ['قاعدهٔ روشن و پیشاپیش پذیرفته برای انتقال قدرت، از بزرگ‌ترین نوآوری‌های نهادی است، چون جنگ جانشینی را به رویه بدل می‌کند.'],
      en: ['A clear, pre-agreed rule for transferring power is one of the great institutional inventions, because it turns a succession war into a procedure.'],
    },
    sources: ['ctesias', 'diodorus', 'justin', 'bm32234', 'manetho', 'iranica'],
  },
  {
    id: 'egypt', title: { fa: 'شورش ایناروس و جنگ شش‌ساله در مصر', en: 'The revolt of Inaros and the six-year war in Egypt' },
    historical: {
      fa: [
        'حدود ۴۶۰ ایناروس، پسر پسامتیک، بیشتر مصر را شوراند و آتنیان را با ناوگانی که در قبرس بود به یاری خواند. هخامنش، ساتراپ و عموی شاه، کشته شد. آتنیان دو بخش ممفیس را گرفتند و دیوار سپید را محاصره کردند (توکودیدس ۱.۱۰۴).',
        'شاه نخست کوشید با پول اسپارت را به حمله به آتن وادارد؛ نشد. سپس مگابیز با سپاه و ناوگان فنیقی آمد، یونانیان را در پروسوپیتیس یک سال و نیم محاصره کرد و آبراه را خشکاند. پنجاه کشتی کمکی آتنی هم در دهانهٔ مندسی نابود شد (توکودیدس ۱.۱۰۹–۱۱۰). ایناروس به روایت توکودیدس به چارمیخ کشیده شد؛ به روایت کتسیاس با قول امان تسلیم شد و پنج سال بعد به فرمان آمستریس کشته شد.',
      ],
      en: [
        'Around 460 Inaros son of Psammetichus raised most of Egypt and called in the Athenians with the fleet they had at Cyprus. Achaemenes, the satrap and the king’s uncle, was killed. The Athenians took two parts of Memphis and besieged the White Wall (Thucydides 1.104).',
        'The king first tried to buy a Spartan invasion of Attica; it failed. Then Megabyzus came with an army and a Phoenician fleet, besieged the Greeks on Prosopitis for a year and a half and drained the channel. Fifty Athenian relief ships were also destroyed at the Mendesian mouth (Thucydides 1.109–110). Inaros, in Thucydides, was crucified; in Ctesias he surrendered under a promise of safety and was killed five years later on Amestris’ orders.',
      ],
    },
    quotes: [
      { text: 'Thus was the army of the Grecians lost after six years’ war…', fa: 'بدین‌سان سپاه یونانیان پس از شش سال جنگ از دست رفت…', ref: 'Thucydides 1.110, tr. T. Hobbes', source: 'thuc' },
    ],
    interpretation: {
      fa: ['جنگ مصر نشان می‌دهد شاه نخست ابزار ارزان‌تر را آزمود: پول برای خریدن دشمنِ دشمن. وقتی نشد، سپاه آمد. شورش مصر در اصل دربارهٔ مالیات و خودگردانی بود؛ امپراتوری آن را پس گرفت، اما ساتراپی مصر تا پایان هخامنشیان بی‌آرام ماند.'],
      en: ['The Egyptian war shows the king trying the cheaper tool first: money to buy the enemy’s enemy. When that failed, the army came. The revolt was at heart about taxation and self-rule; the empire took Egypt back, but the satrapy stayed restless to the end of the dynasty.'],
    },
    modern: {
      fa: ['قول امانی که به ایناروس داده و شکسته شد (به روایت کتسیاس)، یادآور است که وعدهٔ حاکم وقتی دادگاهی مستقل پشتش نباشد، فقط تا وقتی ارزش دارد که حاکم بخواهد.'],
      en: ['The promise of safety given to Inaros and broken (per Ctesias) is a reminder that a ruler’s word, without an independent court behind it, is worth only as long as the ruler wishes.'],
    },
    sources: ['thuc', 'ctesias', 'diodorus', 'iranica', 'briant'],
  },
  {
    id: 'peace', title: { fa: 'قبرس، صلح کالیاس و مرز روی دریا', en: 'Cyprus, the Peace of Callias and a frontier on the sea' },
    historical: {
      fa: [
        'حدود ۴۵۰ کیمون آتنی در محاصرهٔ کیتیون در قبرس درگذشت (توکودیدس ۱.۱۱۲). دیودور (۱۲.۴) می‌گوید پس از آن اردشیر صلح خواست و کالیاس، پسر هیپونیکوس، از سوی آتن پیمان بست.',
        'توکودیدس هیچ از این پیمان نمی‌گوید و تئوپمپوس در سدهٔ چهارم آن را جعلی خواند؛ برخی پژوهشگران پیمانی رسمی می‌پذیرند و برخی تنها توافقی عملی. پس از آن، ساتراپ‌ها همچنان در کار یونانیان آسیا دست داشتند، چنان‌که پیسوتنس در شورش ساموس (۴۴۰).',
      ],
      en: [
        'Around 450 the Athenian Cimon died besieging Citium on Cyprus (Thucydides 1.112). Diodorus (12.4) says that Artaxerxes then sought peace and Callias son of Hipponicus made a treaty for Athens.',
        'Thucydides says nothing of such a treaty and Theopompus in the 4th century called it a forgery; some scholars accept a formal treaty, others only a de facto understanding. Afterwards the satraps still meddled in the affairs of the Asian Greeks, as Pissuthnes did in the Samian revolt (440).',
      ],
    },
    quotes: [
      { text: 'All the Greeks cities of Asia are to live under laws of their own making; the satraps of the Persians are not to come nearer to the sea than a three days’ journey and no Persian warship is to sail inside of Phaselis or the Cyanean Rocks; and if these terms are observed by the king and his generals, the Athenians are not to send troops into the territory over which the king is ruler.', fa: 'همهٔ شهرهای یونانی آسیا زیر قانون‌هایی که خود می‌سازند زندگی کنند؛ ساتراپ‌های پارسی از سه روز راه به دریا نزدیک‌تر نیایند و هیچ کشتی جنگی پارسی از فاسلیس یا صخره‌های کیانه به این سو نیاید؛ و اگر شاه و سردارانش این شرایط را نگه دارند، آتنیان به سرزمینی که شاه بر آن فرمان می‌راند سپاه نفرستند.', ref: 'Diodorus 12.4.5, tr. C. H. Oldfather', source: 'diodorus' },
    ],
    interpretation: {
      fa: ['اگر شرط‌های دیودور درست باشد، نخستین بار شهرهای یونانی آسیا «زیر قانون‌هایی که خود می‌سازند» به رسمیت شناخته شدند. این خودگردانی را شاه نبخشید؛ ناوگان آتن آن را به دست آورد. حق بدون قدرتی که از آن دفاع کند، در جهان باستان دوام نداشت.'],
      en: ['If Diodorus’ terms are right, the Greek cities of Asia were for the first time recognised as living “under laws of their own making”. The king did not grant this autonomy; the Athenian fleet won it. In the ancient world a right without force to defend it did not last.'],
    },
    modern: {
      fa: ['بحث صلح کالیاس نمونهٔ خوبی از روش است: یک متن دیرهنگام، سکوت منبع نزدیک‌تر، و پژوهشگرانی که هنوز هم‌رأی نیستند. ما شرایط را نقل می‌کنیم، نه قطعیت را.'],
      en: ['The Callias debate is a good lesson in method: a late text, the silence of a closer source, and scholars who still disagree. We quote the terms, not a certainty.'],
    },
    sources: ['diodorus', 'thuc', 'iranica', 'briant'],
  },
  {
    id: 'court', title: { fa: 'دربار: آمستریس، مگابیز و خاندان شاه', en: 'The court: Amestris, Megabyzus and the royal family' },
    historical: {
      fa: [
        'تنها ملکهٔ شناخته‌شده دمسپیا (Damaspia) بود و تنها پسر مشروعش خشایارشای دوم. ایرانیکا به پیروی از کتسیاس از هفده پسر از همسران غیرعقدی یاد می‌کند، از جمله سغدیانوس (از آلوگونه)، ارسیتس (از کوسمارتیدنه)، و اخس، داریوش دوم بعدی، از زنی بابلی؛ پروشات، همسر اخس، دختر شاه از آندریا بود.',
        'به روایت کتسیاس، مادر شاه آمستریس نفوذی بزرگ داشت و قول مگابیز به ایناروس را زیر پا گذاشت. مگابیز شورید، دو سپاه شاهی را شکست داد و آشتی کرد؛ سپس در شکار شیر پیش از شاه تیر انداخت، به کورتای تبعید شد و با تظاهر به جذام بازگشت.',
      ],
      en: [
        'The only known queen was Damaspia, and the only legitimate son Xerxes II. Iranica, following Ctesias, lists seventeen sons by concubines, among them Sogdianus (by Alogune), Arsites (by Cosmartidene) and Ochus, the later Darius II, by a Babylonian woman; Parysatis, Ochus’ wife, was the king’s daughter by Andria.',
        'According to Ctesias, the queen mother Amestris wielded great influence and broke Megabyzus’ promise to Inaros. Megabyzus revolted, beat two royal armies and reconciled; later he shot before the king at a lion hunt, was exiled to Curtae and returned by feigning leprosy.',
      ],
    },
    interpretation: {
      fa: ['در روایت کتسیاس، سرنوشت سرداران و شورشیان به رابطه‌شان با زنان و خواجگان دربار بسته است، نه به قانون. حتی اگر جزئیات داستانی باشد، تصویر کلی با نظامی سازگار است که در آن امنیت جان و مال به نزدیکی به شاه بستگی دارد.'],
      en: ['In Ctesias, the fate of generals and rebels hangs on their standing with the women and eunuchs of the court, not on law. Even if the details are fiction, the overall picture fits a system in which security of life and property depends on proximity to the king.'],
    },
    modern: {
      fa: ['بسیاری از تصویرهای امروزی «حرمسرای شرقی» از همین منابع یونانی آمده؛ آنها را باید با همان احتیاطی خواند که هرودوت را.'],
      en: ['Much of the modern image of the “oriental harem” comes from these Greek sources; they need the same caution as Herodotus.'],
    },
    sources: ['ctesias', 'iranica', 'briant'],
  },
  {
    id: 'themistocles', title: { fa: 'تمیستوکلس و درآمد سه شهر', en: 'Themistocles and the revenues of three cities' },
    historical: {
      fa: [
        'تمیستوکلس، فرماندهٔ پیروز سالامیس، که آتن تبعیدش کرده بود، به اردشیر پناه برد (توکودیدس ۱.۱۳۷). یک سال پارسی آموخت و سپس شاه درآمد سه شهر را به او داد: مگنزیا، که سالانه پنجاه تالان می‌داد، برای نان، لامپساکوس برای شراب، و میوس برای گوشت (۱.۱۳۸). ایرانیکا می‌گوید او بر این شهرها فرمان می‌راند. در مگنزیا درگذشت.',
      ],
      en: [
        'Themistocles, victor of Salamis, exiled by Athens, took refuge with Artaxerxes (Thucydides 1.137). He learned Persian for a year, and the king then gave him the revenues of three cities: Magnesia, worth fifty talents a year, for bread, Lampsacus for wine and Myus for meat (1.138). Iranica says he governed these cities. He died at Magnesia.',
      ],
    },
    quotes: [
      { text: 'the king having bestowed upon him Magnesia which yielded him fifty talents by the year for his bread, and Lampsacus for his wine (for this city was in those days thought to have store of wine), and the city of Myus for his meat.', fa: 'شاه مگنزیا را، که سالانه پنجاه تالان درآمد داشت، برای نانش به او بخشید، و لامپساکوس را برای شرابش (زیرا آن شهر در آن روزگار پرشراب شمرده می‌شد)، و شهر میوس را برای گوشتش.', ref: 'Thucydides 1.138.5, tr. T. Hobbes', source: 'thuc' },
    ],
    interpretation: {
      fa: ['این بخشش، عینک مالکیت را روشن می‌کند: شاه شهرها را چون ملک خود می‌دید که درآمدشان را می‌توان به هر که خواست داد. مردم مگنزیا مالیاتشان را نه به نهادی عمومی، بلکه به میهمان شاه می‌دادند. مالکیت در این نظام از پایین ساخته نمی‌شد؛ از بالا داده و پس گرفته می‌شد.'],
      en: ['This gift sharpens the property lens: the king saw cities as his estate, whose revenues he could hand to anyone he liked. The people of Magnesia paid their dues not to a public body but to the king’s guest. Property in this system was not built from below; it was granted, and revocable, from above.'],
    },
    modern: {
      fa: ['همین منطق در هر جا که منابع عمومی «بخشش» حاکم به نزدیکانش است، زنده است. پرسش آزادی‌خواهانه همیشه این است: این درآمد از آن کیست؟'],
      en: ['The same logic lives wherever public resources are a ruler’s “gift” to his circle. The liberal question is always: whose revenue is it?'],
    },
    sources: ['thuc', 'iranica', 'briant'],
  },
  {
    id: 'judah', title: { fa: 'عزرا و نحمیا: روایت کتاب مقدس', en: 'Ezra and Nehemiah: the biblical tradition' },
    historical: {
      fa: [
        'کتاب عزرا (۷:۷) می‌گوید عزرای کاتب در سال هفتم «اردشیر» با فرمانی شاهی به اورشلیم رفت. کتاب نحمیا می‌گوید نحمیا، ساقی شاه، در سال بیستم اردشیر (۴۴۵ اگر اردشیر یکم باشد) اجازهٔ بازسازی دیوار اورشلیم را گرفت و دوازده سال فرماندار بود.',
        'این روایت دینی است. متن نمی‌گوید کدام اردشیر. برای نحمیا بیشتر پژوهشگران اردشیر یکم را می‌پذیرند؛ برای عزرا، بسیاری سال ۳۹۸ و اردشیر دوم را ترجیح می‌دهند. اصالت متن فرمان‌های نقل‌شده هم بحث‌برانگیز است.',
      ],
      en: [
        'The Book of Ezra (7:7) says Ezra the scribe went to Jerusalem in the seventh year of “Artaxerxes” with a royal letter. The Book of Nehemiah says Nehemiah, the king’s cupbearer, received leave in Artaxerxes’ twentieth year (445 if Artaxerxes I) to rebuild Jerusalem’s walls, and governed for twelve years.',
        'This is a religious tradition. The text does not say which Artaxerxes. For Nehemiah most scholars accept Artaxerxes I; for Ezra many prefer 398 and Artaxerxes II. The authenticity of the quoted decrees is also debated.',
      ],
    },
    quotes: [
      { text: 'And it came to pass in the month Nisan, in the twentieth year of Artaxerxes the king, that wine was before him: and I took up the wine, and gave it unto the king.', fa: 'و در ماه نیسان، در سال بیستم اردشیر شاه، شراب پیش او بود؛ و من شراب را برداشتم و به شاه دادم.', ref: 'Nehemiah 2:1 (KJV)', source: 'bible' },
    ],
    interpretation: {
      fa: ['اگر روایت را بپذیریم، امپراتوری به جامعه‌ای محلی اجازه داد زیر قانون دینی خود سامان یابد و شهرش را دیوار کشد؛ همان شیوهٔ هخامنشی که قانون محلی را به رسمیت می‌شناخت تا خراج و وفاداری بماند. این خودگردانی مشروط بود، نه حق.'],
      en: ['If we accept the story, the empire let a local community order itself under its own religious law and wall its city: the Achaemenid habit of recognising local law to keep tribute and loyalty flowing. It was conditional autonomy, not a right.'],
    },
    modern: {
      fa: ['نام اردشیر از همین راه در سنت یهودی و مسیحی ماند؛ بیشتر مردم جهان او را از کتاب مقدس می‌شناسند، نه از تخت‌جمشید.'],
      en: ['This is how Artaxerxes’ name survived in Jewish and Christian tradition; most people know him from the Bible, not from Persepolis.'],
    },
    sources: ['bible', 'iranica', 'briant'],
  },
  {
    id: 'murasu', title: { fa: 'بایگانی موراشو: زمین، خدمت، اجاره و وام', en: 'The Murašû archive: land, service, leases and credit' }, photos: ['nippur'],
    historical: {
      fa: [
        'در ۱۸۹۳ در نیپور بایگانی بنگاهی خانوادگی پیدا شد: حدود ۷۳۰ لوح (استولپر ۱۹۸۵ با پاره‌ها ۸۷۹ لوح و پاره می‌شمارد)، از ۴۵۴ تا ۴۰۴ پ.م. و بیشتر از ۴۴۰ تا ۴۱۶. نخستین سند مارس ۴۵۴ است. گردانندگان اصلی انلیل-شوم-ایدین و سپس رموت-نینورتا بودند.',
        'نظام زمین: شاه زمین‌ها را به گروه‌هایی به نام «حَطرو» (ḫaṭru) می‌داد؛ هر واحد مثلاً «زمین کمان» (bīt qašti) بود و دارنده‌اش باید سرباز می‌فرستاد یا بهای آن را می‌پرداخت. زمین‌های بزرگ‌تر از آنِ شاهزادگان و بزرگان پارسی بود.',
        'کار موراشوها واسطه‌گری بود: زمین را از دارندگان اجاره می‌کردند و به کشاورزان اجارهٔ دست‌دوم می‌دادند، آب و ابزار و دام فراهم می‌کردند، اجاره و مالیات را وصول می‌کردند و به دارندگانی که زیر بار خدمت و مالیات بودند وام می‌دادند. وثیقهٔ وام زمین بود و بدین‌سان کنترل زمین‌های گروی، حتی املاک بزرگان پارسی، به دستشان افتاد. هیچ سند مالکیت (فروش زمین) در بایگانی نیست و تجارت کالا هم ثبت نشده است.',
      ],
      en: [
        'In 1893 the archive of a family firm was found at Nippur: about 730 tablets (Stolper 1985 counts 879 tablets and fragments), from 454 to 404 BCE and mostly 440–416. The first text is from March 454. The principals were Enlil-šumu-iddin and later Rēmūt-Ninurta.',
        'The land system: the king assigned land to groups called ḫaṭru; a typical unit was “bow land” (bīt qašti), whose holder had to send a soldier or pay for one. Larger estates belonged to princes and Persian nobles.',
        'The Murašûs were middlemen: they leased land from holders and sub-leased it to cultivators, supplied water, tools and animals, collected rents and taxes, and lent to holders burdened with service and taxes. The loans were secured on the land, and so they came to control mortgaged fields, even estates of Persian nobles. No title deeds (land sales) appear in the archive, and trade in goods is not recorded.',
      ],
    },
    interpretation: {
      fa: ['این مهم‌ترین شاهد مالکیت در دوران اردشیر است، و دوگانه است. از یک سو بازاری زنده از اجاره، وام و قرارداد مکتوب با شاهد و مهر وجود داشت؛ از سوی دیگر زمین «ملک» دارنده نبود، بلکه امتیازی در برابر خدمت بود که نمی‌شد فروخت. بار خدمت و مالیات کوچک‌زمین‌داران را به وام کشاند و زمینشان عملاً به بنگاه رسید. قرارداد بود، اما مالکیت آزاد نبود.'],
      en: ['This is the key property evidence of Artaxerxes’ reign, and it cuts both ways. On one side there was a lively market in leases, loans and written contracts with witnesses and seals; on the other, land was not the holder’s property but a grant held for service that could not be sold. The burden of service and tax drove small holders into debt and their land in effect passed to the firm. Contract existed; free ownership did not.'],
    },
    modern: {
      fa: ['وقتی دولت مالک نهایی زمین است و بارش را بر کشاورز می‌گذارد، سرمایه به سوی کسانی می‌رود که به دستگاه نزدیک‌اند. الگوی موراشو، واسطه‌ای میان دولت و تولیدکننده، در بسیاری از اقتصادهای امروز آشناست.'],
      en: ['When the state is the ultimate landowner and loads its burdens onto the farmer, capital flows to those close to the apparatus. The Murašû pattern, a middleman between the state and the producer, is familiar in many economies today.'],
    },
    sources: ['stolper1985', 'stolper2001', 'cardascia', 'vandriel', 'briant'],
  },
  {
    id: 'buildings', title: { fa: 'تالار صدستون، کتیبه‌ها و آرامگاه', en: 'The Hundred-Column Hall, inscriptions and the tomb' }, photos: ['hall', 'hall-2', 'relief', 'tomb-wide'],
    historical: {
      fa: [
        'اردشیر تالار صدستون (تالار تخت) را که خشایارشا آغاز کرده بود تمام کرد؛ کتیبهٔ A1Pa گواه آن است. احتمالاً شاهِ نقش‌های بار عام همین تالار اوست. نام او بر جام‌های سیمین (A1I) هم آمده است. در شوش، پس از آتش‌سوزی آپادانا، کاخی کوچک ساخت.',
        'آرامگاه او را یکی از چهار آرامگاه صخره‌ای نقش رستم می‌دانند، کنار آرامگاه داریوش؛ آرامگاه‌ها جز آرامگاه داریوش کتیبه ندارند و انتساب استنباطی است.',
      ],
      en: [
        'Artaxerxes completed the Hall of a Hundred Columns (Throne Hall) begun by Xerxes; inscription A1Pa attests it. He is probably the king in the hall’s audience reliefs. His name is also on silver dishes (A1I). At Susa, after the Apadana burned, he built a small palace.',
        'His tomb is taken to be one of the four rock tombs at Naqsh-e Rostam, beside Darius’; apart from Darius’ tomb they are uninscribed, so the attribution is inferred.',
      ],
    },
    quotes: [
      { text: 'A great god is Ahuramazda, who created this earth, who created that heaven, who created man, who created happines for man, who made Artaxerxes king, one king for many, one leader for all. I am Artaxerxes, the great king, the king of kings, the king of countries with all kinds of men, the king in this earth far and wide, the son of king Xerxes, the grandson of Darius, the Achaemenid. Artaxerxes the great king says: by the grace of Ahuramazda, my father, king Xerxes, built this palace. After that, I built [it]. May Ahuramazda and the gods preserve me, my kingdom, and what I have built.', fa: 'خدای بزرگ است اهورامزدا، که این زمین را آفرید، که آن آسمان را آفرید، که انسان را آفرید، که شادی را برای انسان آفرید، که اردشیر را شاه کرد، یک شاه از بسیاری، یک فرمانروا از بسیاری. منم اردشیر، شاه بزرگ، شاه شاهان، شاه سرزمین‌های دارای همه‌گونه مردم، شاه در این زمین بزرگ دور و دراز، پسر خشایارشای شاه، نوهٔ داریوش، هخامنشی. اردشیر شاه بزرگ می‌گوید: به خواست اهورامزدا، پدرم خشایارشای شاه این کاخ را ساخت. پس از آن، من [آن را] ساختم. اهورامزدا و خدایان مرا و پادشاهی‌ام را و آنچه ساخته‌ام بپایند.', ref: 'A1Pa, tr. after P. Lecoq (Livius.org); “happines” as in the source', source: 'a1pa' },
    ],
    interpretation: {
      fa: ['کتیبهٔ A1Pa تقریباً واژه‌به‌واژه فرمول پدر و پدربزرگ است. این تکرار عمدی است: مشروعیت از پیوستگی می‌آید. «شادی برای انسان» آفریدهٔ خداست، اما شاه است که «یک فرمانروا برای همه» است؛ نظم آزادی را تعریف می‌کند، نه برعکس.'],
      en: ['A1Pa repeats his father’s and grandfather’s formula almost word for word. The repetition is deliberate: legitimacy comes from continuity. “Happiness for man” is the god’s creation, but it is the king who is “one leader for all”; order defines liberty, not the other way round.'],
    },
    modern: {
      fa: ['ستون‌های افتادهٔ تالار صدستون امروز بخشی از میراث جهانی است؛ کتیبه‌اش یادآور است که حتی سازنده‌ای کم‌آوازه سهم بزرگی از آنچه امروز تخت‌جمشید می‌نامیم دارد.'],
      en: ['The fallen columns of the Hundred-Column Hall are now World Heritage; its inscription reminds us that even a less famous builder has a large share in what we call Persepolis.'],
    },
    sources: ['a1pa', 'iranica', 'kuhrt'],
  },
  {
    id: 'succession', title: { fa: 'مرگ و سال آشوب: خشایارشای دوم، سغدیانوس، داریوش دوم', en: 'Death and the year of chaos: Xerxes II, Sogdianus, Darius II' },
    historical: {
      fa: [
        'آخرین سند بابلی به نام اردشیر (BM 33342) از روز ۲۹ ماه یازدهم سال ۴۱ است (استولپر ۱۹۸۳). درازای پادشاهی را دیودور ۴۰، مانتون ۴۱ و کتسیاس ۴۲ سال آورده‌اند.',
        'به روایت کتسیاس، خشایارشای دوم، تنها پسر مشروع، ۴۵ روز پس از مرگ پدر به دست سغدیانوس کشته شد. اخس، ساتراپ هیرکانی و همسر پروشات، سغدیانوس را برانداخت و داریوش دوم شد؛ یونانیان او را «نوتوس»، یعنی «حرام‌زاده»، خواندند. مانتون به خشایارشای دوم دو ماه و به سغدیانوس هفت ماه می‌دهد.',
      ],
      en: [
        'Artaxerxes’ last Babylonian date (BM 33342) is day 29 of month 11 of year 41 (Stolper 1983). Diodorus gives the reign 40 years, Manetho 41 and Ctesias 42.',
        'According to Ctesias, Xerxes II, the only legitimate son, was killed 45 days after his father’s death by Sogdianus. Ochus, satrap of Hyrcania and husband of Parysatis, overthrew Sogdianus and became Darius II; the Greeks called him Nothos, “the Bastard”. Manetho gives Xerxes II two months and Sogdianus seven.',
      ],
    },
    interpretation: {
      fa: ['چهل سال آرامش بیرونی در یک سال سه شاه به پایان رسید. ثبات دوران اردشیر به خود او بسته بود، نه به نهادی که پس از او بماند.'],
      en: ['Forty years of outward calm ended with three kings in one year. The stability of Artaxerxes’ reign rested on the man, not on an institution that outlived him.'],
    },
    modern: {
      fa: ['جامعه‌ای که حقوق مالکیت و جانشینی را به قاعده‌ای عمومی می‌سپارد، با مرگ یک تن فرو نمی‌ریزد.'],
      en: ['A society that entrusts property and succession to public rules does not collapse with the death of one man.'],
    },
    sources: ['stolper1983', 'ctesias', 'manetho', 'diodorus', 'iranica'],
  },
]

export const artaxerxesSynthesis: Synthesis = {
  title: { fa: 'شاه درازدست: دستی که به همه‌جا می‌رسید', en: 'The long-handed king: a reach that touched everything' },
  paras: {
    fa: [
      'اردشیر یکم با خون به تخت رسید و چهل سال، بیشتر با پول و دیپلماسی تا با جنگ، امپراتوری را نگه داشت: مصر را پس گرفت، با آتن به مرزی روی دریا رسید، به تبعیدیان یونانی و به جامعه‌های محلی امتیاز داد، و تخت‌جمشید را تمام کرد.',
      'با عینک مالکیت و آزادی، دوران او دو چهره دارد. بایگانی موراشو بازاری زنده از قرارداد و اجاره و وام را نشان می‌دهد؛ اما زمین امتیازی در برابر خدمت بود، شهرها درآمدی که شاه می‌بخشید، و خودگردانی محلی لطفی مشروط. «دست دراز» شاه هم نظم می‌آورد و هم مرز مالکیت را خود او تعیین می‌کرد.',
    ],
    en: [
      'Artaxerxes I came to the throne through blood and for forty years held the empire more by money and diplomacy than by war: he recovered Egypt, reached a frontier on the sea with Athens, granted favours to Greek exiles and local communities, and completed Persepolis.',
      'Through a property-and-liberty lens his reign has two faces. The Murašû archive shows a lively market in contracts, leases and loans; but land was a grant held for service, cities were revenues the king gave away, and local autonomy a conditional favour. The king’s “long hand” brought order, and it was the king who drew the boundaries of property.',
    ],
  },
  sources: ['stolper1985', 'thuc', 'diodorus', 'iranica', 'briant'],
}
