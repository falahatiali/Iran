/**
 * Life map of Artaxerxes I (r. 465–424/423 BCE). Years are BCE (negative). Accession and death are fixed by
 * Babylonian documents; the Egyptian war, the Peace of Callias and the biblical missions are approximate or disputed.
 */
import type { Coord, MapEvent } from '../featured/types'

export const SUSA: Coord = [48.257, 32.19]
export const PERSEPOLIS: Coord = [52.89, 29.935]
export const BABYLON: Coord = [44.42, 32.54]
export const NIPPUR: Coord = [45.23, 32.13]
export const MEMPHIS: Coord = [31.25, 29.85]
export const PROSOPITIS: Coord = [30.85, 30.55]
export const PAPREMIS: Coord = [30.9, 31.05]
export const JERUSALEM: Coord = [35.23, 31.78]
export const MAGNESIA: Coord = [27.53, 37.85]
export const CITIUM: Coord = [33.63, 34.92]
export const SAMOS: Coord = [26.95, 37.7]
export const SARDIS: Coord = [28.04, 38.49]
export const BACTRA: Coord = [66.9, 36.76]
export const SYRIA: Coord = [36.3, 33.5]

export const artaxerxesEvents: MapEvent[] = [
  {
    id: 'accession', year: -465, when: { fa: 'اوت–دسامبر ۴۶۵ پ.م.', en: 'August–December 465 BCE' }, kind: 'admin', coord: PERSEPOLIS,
    title: { fa: 'بر تخت، از میان خون', en: 'Accession through blood' },
    body: { fa: 'پس از قتل خشایارشا، اردشیر، جوان‌ترین پسر او و آمستریس، برادر بزرگش داریوش را کشت و سپس اردوان را (دیودور ۱۱.۶۹؛ کتسیاس). سال نخست پادشاهی‌اش در تقویم بابلی از دسامبر ۴۶۵ آغاز می‌شود. یوسفوس او را «کوروش» می‌نامد؛ نام پیش از شاهی‌اش معلوم نیست.', en: 'After Xerxes’ murder Artaxerxes, the youngest son of Xerxes and Amestris, killed his elder brother Darius and then Artabanus (Diodorus 11.69; Ctesias). His first regnal year in the Babylonian reckoning begins in December 465. Josephus calls him “Cyrus”; his name before he became king is unknown.' },
    certainty: 'probable', certaintyNote: { fa: 'تاریخ‌ها از اسناد بابلی است؛ جزئیات توطئه از منابع یونانی دیرهنگام و ناسازگار.', en: 'The dates come from Babylonian documents; the details of the plot from late, conflicting Greek sources.' },
    sources: ['bm32234', 'diodorus', 'ctesias', 'justin', 'iranica'],
  },
  {
    id: 'bactria', year: -464, when: { fa: '۴۶۵–۴۶۴ پ.م.', en: '465–464 BCE' }, kind: 'battle', coord: BACTRA, route: [PERSEPOLIS, [57.0, 33.5], [62.2, 34.35], BACTRA],
    title: { fa: 'شورش باختر', en: 'The Bactrian revolt' },
    body: { fa: 'ساتراپ باختر شورید؛ اردشیر در دو نبرد پیروز شد، و به گفتهٔ کتسیاس در نبرد دوم باد به روی باختریان وزید.', en: 'The satrap of Bactria revolted; Artaxerxes won in two battles, and Ctesias says the wind blew in the Bactrians’ faces in the second.' },
    certainty: 'disputed', certaintyNote: { fa: 'کتسیاس رهبر را «اردوانی دیگر» می‌نامد و دیودور برادر شاه، ویشتاسپ، را ساتراپ باختر می‌داند؛ ایرانیکا دومی را محتمل‌تر می‌شمارد.', en: 'Ctesias calls the leader “another Artabanus”, while Diodorus makes the king’s brother Hystaspes satrap of Bactria; Iranica finds the latter more plausible.' },
    sources: ['ctesias', 'diodorus', 'iranica'],
  },
  {
    id: 'themistocles', year: -464, when: { fa: 'حدود ۴۶۵–۴۶۴ پ.م.', en: 'c. 465–464 BCE' }, kind: 'admin', coord: MAGNESIA,
    title: { fa: 'تمیستوکلس به دربار می‌آید', en: 'Themistocles comes to court' },
    body: { fa: 'فرماندهٔ آتنی سالامیس، تبعیدی از وطن، نامه‌ای «به شاه اردشیر، پسر خشایارشا، که تازه به پادشاهی رسیده» نوشت (توکودیدس ۱.۱۳۷). یک سال پارسی آموخت و شاه درآمد سه شهر را به او داد: مگنزیا برای نان، لامپساکوس برای شراب، و میوس برای گوشت (۱.۱۳۸).', en: 'The Athenian victor of Salamis, exiled from home, wrote to “the king Artaxerxes, the son of Xerxes, newly come to the kingdom” (Thucydides 1.137). He learned Persian for a year and the king gave him the revenues of three cities: Magnesia for bread, Lampsacus for wine and Myus for meat (1.138).' },
    certainty: 'probable', certaintyNote: { fa: 'برخی منابع یونانی او را به نزد خشایارشا می‌برند؛ توکودیدس، نزدیک‌ترین منبع، اردشیر را می‌گوید.', en: 'Some Greek sources send him to Xerxes; Thucydides, the closest source, says Artaxerxes.' },
    sources: ['thuc', 'iranica', 'briant'],
  },
  {
    id: 'inaros', year: -460, when: { fa: 'حدود ۴۶۰ پ.م.', en: 'c. 460 BCE' }, kind: 'battle', coord: MEMPHIS,
    title: { fa: 'شورش ایناروس در مصر', en: 'The revolt of Inaros in Egypt' },
    body: { fa: 'ایناروس، شاهزاده‌ای لیبیایی، بیشتر مصر را به شورش کشید و آتنیان را با ۲۰۰ کشتی از قبرس به یاری خواند. آتنیان دو بخش ممفیس را گرفتند و «دیوار سپید»، دژ پادگان ایرانی، را محاصره کردند (توکودیدس ۱.۱۰۴).', en: 'Inaros, a Libyan prince, raised most of Egypt in revolt and called in the Athenians, who came with 200 ships from Cyprus. They took two parts of Memphis and besieged the “White Wall”, the Persian garrison’s citadel (Thucydides 1.104).' },
    certainty: 'disputed', certaintyNote: { fa: 'سال آغاز (۴۶۳ تا ۴۶۰) و درازای شش‌سالهٔ جنگ از حساب توکودیدس بازسازی می‌شود.', en: 'The start (463 to 460) and the six-year length are reconstructed from Thucydides’ reckoning.' },
    sources: ['thuc', 'ctesias', 'diodorus', 'iranica', 'briant'],
  },
  {
    id: 'ezra', year: -458, when: { fa: '«سال هفتم» شاه: ۴۵۸ پ.م.؟', en: 'the king’s “seventh year”: 458 BCE?' }, kind: 'religion', coord: JERUSALEM,
    title: { fa: 'عزرا به اورشلیم', en: 'Ezra to Jerusalem' },
    body: { fa: 'به روایت کتاب عزرا (۷:۷)، عزرا، کاتب، در سال هفتم «اردشیر» با فرمانی شاهی برای اجرای «شریعت خدای تو» به اورشلیم رفت.', en: 'According to the Book of Ezra (7:7), Ezra the scribe went to Jerusalem in the seventh year of “Artaxerxes” with a royal letter to enforce “the law of thy God”.' },
    certainty: 'disputed', certaintyNote: { fa: 'متن دینی است و نمی‌گوید کدام اردشیر؛ بسیاری عزرا را به سال ۳۹۸ و اردشیر دوم می‌برند. اصالت متن فرمان هم محل بحث است.', en: 'A religious text that does not say which Artaxerxes; many place Ezra in 398 under Artaxerxes II. The authenticity of the decree’s wording is also debated.' },
    sources: ['bible', 'iranica', 'briant'],
  },
  {
    id: 'prosopitis', year: -454, when: { fa: '۴۵۶–۴۵۴ پ.م.', en: '456–454 BCE' }, kind: 'battle', coord: PROSOPITIS,
    title: { fa: 'محاصرهٔ پروسوپیتیس و پایان شورش', en: 'The siege of Prosopitis and the end of the revolt' },
    body: { fa: 'مگابیز (بغابوخش)، پسر زوپیر، آتنیان را در جزیرهٔ پروسوپیتیس در دلتا «یک سال و نیم» محاصره کرد، آبراه را خشکاند و جزیره را گرفت. توکودیدس می‌گوید سپاه یونانی «پس از شش سال جنگ» از دست رفت (۱.۱۰۹–۱۱۰). مصر بازگشت و ارشام بعدها ساتراپ آن شد.', en: 'Megabyzus son of Zopyrus besieged the Athenians on the island of Prosopitis in the Delta “a year and a half”, drained the channel and took the island. Thucydides says the Greek army was lost “after six years’ war” (1.109–110). Egypt was recovered, and Arsames later became its satrap.' },
    certainty: 'probable', sources: ['thuc', 'ctesias', 'iranica', 'briant'],
  },
  {
    id: 'murasu', year: -454, when: { fa: '۴۵۴–۴۰۴ پ.م.', en: '454–404 BCE' }, kind: 'admin', coord: NIPPUR,
    title: { fa: 'بایگانی موراشو در نیپور آغاز می‌شود', en: 'The Murašû archive begins at Nippur' },
    body: { fa: 'کهن‌ترین لوح بنگاه خانوادگی موراشو در نیپور به مارس ۴۵۴ می‌رسد. این بنگاه میان دارندگان «زمین کمان» (زمین در برابر خدمت سپاهی) و کشاورزان واسطه بود: اجاره، اجارهٔ دست‌دوم، وصول اجاره و مالیات، و وام.', en: 'The oldest tablet of the Murašû family firm at Nippur dates to March 454. The firm stood between holders of “bow land” (land held for military service) and cultivators: leases, sub-leases, collection of rents and taxes, and credit.' },
    certainty: 'secure', sources: ['stolper1985', 'stolper2001', 'cardascia'],
  },
  {
    id: 'cyprus', year: -450, when: { fa: 'حدود ۴۵۰ پ.م.', en: 'c. 450 BCE' }, kind: 'battle', coord: CITIUM,
    title: { fa: 'کیمون در قبرس', en: 'Cimon at Cyprus' },
    body: { fa: 'کیمون آتنی با ناوگانی به قبرس رفت و کیتیون را محاصره کرد، اما در همان‌جا مرد؛ ناوگان او در بازگشت در برابر سالامیسِ قبرس پیروز شد (توکودیدس ۱.۱۱۲).', en: 'The Athenian Cimon sailed to Cyprus and besieged Citium but died there; on the way home his fleet won a battle off Cypriot Salamis (Thucydides 1.112).' },
    certainty: 'probable', sources: ['thuc', 'diodorus', 'iranica'],
  },
  {
    id: 'callias', year: -449, when: { fa: '۴۴۹/۴۴۸ پ.م.', en: '449/448 BCE' }, kind: 'admin', coord: SUSA,
    title: { fa: 'صلح کالیاس؟', en: 'The Peace of Callias?' },
    body: { fa: 'دیودور (۱۲.۴) می‌گوید اردشیر صلح خواست و کالیاس آتنی پیمانی بست: شهرهای یونانی آسیا خودگردان باشند، ساتراپ‌ها از دریا سه روز راه دورتر بمانند و کشتی جنگی ایرانی از فاسلیس و صخره‌های کیانه نگذرد، و آتن به سرزمین شاه لشکر نکشد.', en: 'Diodorus (12.4) says Artaxerxes sought peace and the Athenian Callias concluded a treaty: the Greek cities of Asia to be autonomous, the satraps to keep three days’ journey from the sea, no Persian warship to sail inside Phaselis or the Cyanean Rocks, and Athens not to invade the king’s land.' },
    certainty: 'disputed', certaintyNote: { fa: 'توکودیدس از چنین پیمانی خاموش است و تئوپمپوس در سدهٔ چهارم آن را جعلی خواند. برخی آن را توافقی عملی بی‌پیمان رسمی می‌دانند.', en: 'Thucydides is silent about any such treaty and Theopompus in the 4th century called it a forgery. Some see a de facto understanding rather than a formal treaty.' },
    sources: ['diodorus', 'iranica', 'briant'],
  },
  {
    id: 'megabyzus', year: -448, when: { fa: 'پس از ۴۵۴ (تاریخ نامعلوم)', en: 'after 454 (date unknown)' }, kind: 'battle', coord: SYRIA,
    title: { fa: 'شورش مگابیز', en: 'The revolt of Megabyzus' },
    body: { fa: 'به روایت کتسیاس، ملکهٔ مادر آمستریس پنج سال پس از تسلیم، ایناروس را برخلاف قول مگابیز به چارمیخ کشید. مگابیز در سوریه شورید، دو سپاه شاهی را شکست داد و سپس آشتی کرد. بعدها در شکار شیر پیش از شاه تیر انداخت، به کورتای تبعید شد و با تظاهر به جذام بازگشت.', en: 'According to Ctesias, the queen mother Amestris had Inaros impaled five years after his surrender, breaking Megabyzus’ promise. Megabyzus revolted in Syria, beat two royal armies and then reconciled. Later he shot before the king at a lion hunt, was exiled to Curtae and returned by feigning leprosy.' },
    certainty: 'disputed', certaintyNote: { fa: 'تنها کتسیاس این را می‌گوید و تاریخی نمی‌دهد؛ داستان رنگ ادبی دارد.', en: 'Only Ctesias tells it, without a date; the story has a literary colour.' },
    sources: ['ctesias', 'briant'],
  },
  {
    id: 'nehemiah', year: -445, when: { fa: '«سال بیستم» شاه: ۴۴۵ پ.م.', en: 'the king’s “twentieth year”: 445 BCE' }, kind: 'admin', coord: JERUSALEM,
    title: { fa: 'نحمیا، ساقی شاه، فرماندار یهود', en: 'Nehemiah, the king’s cupbearer, governor of Judah' },
    body: { fa: 'کتاب نحمیا (۲:۱) می‌گوید نحمیا، ساقی شاه در شوش، در ماه نیسان سال بیستم اردشیر اجازه گرفت دیوار اورشلیم را بازسازد و دوازده سال فرماندار بود.', en: 'The Book of Nehemiah (2:1) says Nehemiah, the king’s cupbearer at Susa, received leave in the month Nisan of Artaxerxes’ twentieth year to rebuild the walls of Jerusalem, and governed for twelve years.' },
    certainty: 'disputed', certaintyNote: { fa: 'متن دینی است؛ انتساب به اردشیر یکم را بیشتر پژوهشگران می‌پذیرند، اما جزئیات روایت را از خود متن نمی‌توان سنجید.', en: 'A religious text; most scholars accept Artaxerxes I here, but the story’s details cannot be checked outside it.' },
    sources: ['bible', 'iranica', 'briant'],
  },
  {
    id: 'samos', year: -440, when: { fa: '۴۴۰–۴۳۹ پ.م.', en: '440–439 BCE' }, kind: 'campaign', coord: SAMOS, route: [SARDIS, SAMOS],
    title: { fa: 'شورش ساموس و پیسوتنس', en: 'The Samian revolt and Pissuthnes' },
    body: { fa: 'ساموس بر آتن شورید و پیسوتنس، ساتراپ سارد، شورشیان را یاری داد (توکودیدس ۱.۱۱۵). این نشان می‌دهد ساتراپ‌ها پس از ۴۴۹ هم در کار یونانیان آسیا دست داشتند.', en: 'Samos revolted against Athens and Pissuthnes, satrap at Sardis, helped the rebels (Thucydides 1.115). It shows that satraps kept a hand in the affairs of the Asian Greeks after 449.' },
    certainty: 'probable', sources: ['thuc', 'iranica'],
  },
  {
    id: 'persepolis', year: -435, when: { fa: 'دوران پادشاهی', en: 'during the reign' }, kind: 'building', coord: PERSEPOLIS,
    title: { fa: 'تالار صدستون و کاخی در شوش', en: 'The Hundred-Column Hall and a palace at Susa' },
    body: { fa: 'اردشیر تالار صدستون را که پدرش آغاز کرده بود تمام کرد و در کتیبهٔ A1Pa می‌گوید: «پدرم خشایارشا این کاخ را ساخت. پس از آن، من ساختم.» پس از آتش‌سوزی آپادانای شوش، کاخی کوچک در آنجا ساخت.', en: 'Artaxerxes finished the Hall of a Hundred Columns his father had begun, and in inscription A1Pa says: “my father, king Xerxes, built this palace. After that, I built [it].” After the Apadana at Susa burned, he built a small palace there.' },
    certainty: 'probable', certaintyNote: { fa: 'متن کتیبه قطعی است؛ سال کارها معلوم نیست (طرح‌وار).', en: 'The inscription is secure; the years of the work are unknown (placed schematically).' },
    sources: ['a1pa', 'iranica', 'kuhrt'],
  },
  {
    id: 'death', year: -424, when: { fa: 'زمستان ۴۲۴/۴۲۳ پ.م.', en: 'winter 424/423 BCE' }, kind: 'admin', coord: SUSA, route: [SUSA, PERSEPOLIS],
    title: { fa: 'مرگ و آشوب جانشینی', en: 'Death and the succession chaos' },
    body: { fa: 'آخرین سند بابلی به نام او (BM 33342) از ماه یازدهم سال ۴۱ است. پسر مشروعش خشایارشای دوم ۴۵ روز بعد به دست برادر ناتنی‌اش سغدیانوس کشته شد؛ سپس اخس، پسری دیگر از زنی بابلی، سغدیانوس را برانداخت و داریوش دوم شد (کتسیاس). پیکرها را به پارس بردند.', en: 'His last Babylonian date (BM 33342) is month 11 of year 41. His legitimate son Xerxes II was killed 45 days later by his half-brother Sogdianus; then Ochus, another son by a Babylonian woman, overthrew Sogdianus and became Darius II (Ctesias). The bodies were taken to Persis.' },
    certainty: 'probable', certaintyNote: { fa: 'درازای پادشاهی را دیودور ۴۰، مانتون ۴۱ و کتسیاس ۴۲ سال می‌گوید؛ اسناد بابلی ۴۱ سال را تأیید می‌کنند. ۴۵ روز تنها از کتسیاس است.', en: 'Diodorus gives 40 years, Manetho 41 and Ctesias 42; Babylonian documents support 41. The 45 days are Ctesias’ alone.' },
    sources: ['stolper1983', 'ctesias', 'manetho', 'diodorus', 'iranica'],
  },
]
