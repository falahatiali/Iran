/**
 * Life map of Xerxes I (r. 486–465 BCE). Years are BCE (negative). Dates of accession and death are fixed
 * by Babylonian documents; the Egyptian and Babylonian revolts and most building dates are approximate.
 */
import type { MapEvent } from '../featured/types'

const SUSA: [number, number] = [48.257, 32.19]
const PERSEPOLIS: [number, number] = [52.89, 29.935]
const BABYLON: [number, number] = [44.42, 32.54]
const MEMPHIS: [number, number] = [31.25, 29.85]
const SARDIS: [number, number] = [28.04, 38.49]
const ATHENS: [number, number] = [23.73, 37.97]
const VAN: [number, number] = [43.34, 38.5]
const EURYMEDON: [number, number] = [31.18, 36.86]

export const xerxesEvents: MapEvent[] = [
  {
    id: 'birth', year: -518, when: { fa: 'حدود ۵۱۸ پ.م.', en: 'c. 518 BCE' }, kind: 'admin', coord: SUSA,
    title: { fa: 'زاده در خانهٔ شاه', en: 'Born a king’s son' },
    body: { fa: 'خشایارشا (Xšaya-ṛšā، «فرمانروا بر دلیران») پسر داریوش یکم و آتوسا دختر کوروش بزرگ بود؛ یعنی خون هر دو شاخهٔ هخامنشی در او بود. سال زادنش از روی گفتهٔ هرودوت تخمین زده می‌شود که او را پس از به‌شاهی‌رسیدن داریوش زاده می‌داند.', en: 'Xerxes (Old Persian Xšaya-ṛšā, “ruling over heroes”) was the son of Darius I and Atossa, daughter of Cyrus the Great, so both Achaemenid lines met in him. His birth year is estimated from Herodotus, who says he was born after Darius became king.' },
    certainty: 'probable', certaintyNote: { fa: 'سال دقیق زادن ثبت نشده؛ ۵۱۹ و ۵۱۸ هر دو پیشنهاد شده است.', en: 'No birth record survives; 519 and 518 are both proposed.' },
    sources: ['hdt', 'iranica', 'briant'],
  },
  {
    id: 'heir', year: -498, when: { fa: 'پیش از ۴۸۶ پ.م.', en: 'before 486 BCE' }, kind: 'admin', coord: PERSEPOLIS,
    title: { fa: 'ولیعهدی به جای آرتوبرزن', en: 'Chosen heir over Artobazanes' },
    body: { fa: 'به روایت هرودوت (۷.۲–۳)، آرتوبرزن پسر بزرگ‌تر داریوش از همسر نخستش بود، اما خشایارشا برگزیده شد، زیرا مادرش آتوسا بود و او پس از شاه‌شدن پدر زاده شده بود. خود خشایارشا در کتیبه‌ای از تخت‌جمشید (XPf) می‌گوید داریوش او را «بزرگ‌ترین پس از خود» کرد.', en: 'According to Herodotus (7.2–3), Artobazanes was Darius’ eldest son by an earlier wife, but Xerxes was chosen because his mother was Atossa and he was born after his father became king. In a Persepolis inscription (XPf) Xerxes says Darius made him “the greatest after himself”.' },
    certainty: 'disputed', certaintyNote: { fa: 'سال دقیق انتخاب معلوم نیست (اینجا طرح‌وار)، و داستان مشورت با دمارتوس اسپارتی (۷.۳) را خود هرودوت با تردید نقل می‌کند.', en: 'When the choice was made is unknown (placed schematically here), and Herodotus himself hedges the story that the Spartan Demaratus advised it (7.3).' },
    sources: ['hdt', 'royal-inscr', 'briant'],
  },
  {
    id: 'babylon-prince', year: -496, when: { fa: 'سال‌های ۴۹۰ پ.م.', en: '490s BCE' }, kind: 'admin', coord: BABYLON,
    title: { fa: 'ولیعهد در بابل', en: 'The crown prince at Babylon' },
    body: { fa: 'شواهد بابلی از ساختمانی برای ولیعهد در بابل حکایت دارد، و نقش بار عام خزانهٔ تخت‌جمشید شاید شاه و ولیعهد را نشان دهد. خشایارشا پیش از شاهی در کار ادارهٔ امپراتوری شریک بود.', en: 'Babylonian evidence points to a residence of the crown prince at Babylon, and the Treasury audience relief at Persepolis may show king and crown prince together. Before he was king, Xerxes already took part in running the empire.' },
    certainty: 'probable', certaintyNote: { fa: 'گسترهٔ نقش او در بابل از شواهد اندک بازسازی شده است.', en: 'How large his Babylonian role was is reconstructed from thin evidence.' },
    sources: ['briant', 'kuhrt'],
  },
  {
    id: 'accession', year: -486, when: { fa: 'نوامبر ۴۸۶ پ.م.', en: 'November 486 BCE' }, kind: 'admin', coord: PERSEPOLIS,
    title: { fa: 'بر تخت', en: 'Accession' },
    body: { fa: 'داریوش در پاییز ۴۸۶ درگذشت و خشایارشا، حدود سی‌وچندساله، بی‌جنگ جانشینی به تخت نشست. اسناد بابلی تاریخ را تا ماه روشن می‌کنند.', en: 'Darius died in autumn 486 and Xerxes, in his early thirties, succeeded without a war of succession. Babylonian documents fix the date to the month.' },
    certainty: 'secure', sources: ['kuhrt', 'briant', 'iranica'],
  },
  {
    id: 'egypt', year: -485, when: { fa: '۴۸۶–۴۸۴ پ.م.', en: '486–484 BCE' }, kind: 'campaign', coord: MEMPHIS, route: [PERSEPOLIS, SUSA, BABYLON, [36.2, 33.5], MEMPHIS],
    title: { fa: 'سرکوب شورش مصر', en: 'Crushing the Egyptian revolt' },
    body: { fa: 'مصر در واپسین سال داریوش شوریده بود. هرودوت (۷.۷) می‌گوید خشایارشا در سال دوم پس از مرگ پدر آن را سرکوب کرد، مصر را «بسیار سخت‌تر از دوران داریوش» به بردگی کشید و برادرش هخامنش را ساتراپ کرد.', en: 'Egypt had revolted in Darius’ last year. Herodotus (7.7) says Xerxes put it down in the second year after his father’s death, laid Egypt under a “much harder slavery” than under Darius, and made his brother Achaemenes satrap.' },
    certainty: 'probable', certaintyNote: { fa: 'شدت سخت‌گیری را فقط هرودوت گزارش می‌کند.', en: 'Only Herodotus reports how harsh the settlement was.' },
    sources: ['hdt', 'briant', 'kuhrt'],
  },
  {
    id: 'babylon-revolts', year: -484, when: { fa: 'حدود ۴۸۴ پ.م.', en: 'c. 484 BCE' }, kind: 'battle', coord: BABYLON,
    title: { fa: 'شورش‌های بابل و بحث «ویرانی اسگیل»', en: 'The Babylonian revolts and the “Esagila destruction” debate' },
    body: { fa: 'دو مدعی، بل‌شیمانی و شمش‌اریبا، در بابل خود را شاه خواندند و سرکوب شدند. بایگانی‌های چند خاندان بزرگ بابلی در همین زمان پایان می‌یابد. روایت یونانی می‌گوید خشایارشا تندیس زرین بل (مردوک) را برد و معبد را ویران کرد.', en: 'Two pretenders, Bel-shimanni and Shamash-eriba, proclaimed themselves king at Babylon and were crushed. Several great Babylonian family archives end at this time. Greek tradition says Xerxes carried off the golden statue of Bel (Marduk) and wrecked the temple.' },
    certainty: 'disputed', certaintyNote: { fa: 'کورت و شروین-وایت (۱۹۸۷) نشان دادند شاهدی بر ویرانی اسگیل یا پایان آیین مردوک نیست. وارزگرز (۲۰۰۳/۴) پایان بایگانی‌ها را تنبیه گزینشی خاندان‌های شورشی می‌داند. سال شورش‌ها (۴۸۴ یا ۴۸۲) هم بحث‌برانگیز است.', en: 'Kuhrt and Sherwin-White (1987) showed there is no evidence that Esagila was destroyed or the Marduk cult ended. Waerzeggers (2003/4) reads the end of the archives as targeted punishment of rebel-aligned families. The year (484 or 482) is also debated.' },
    sources: ['kuhrt-sw', 'waerzeggers', 'kuhrt', 'briant'],
  },
  {
    id: 'war', year: -480, when: { fa: '۴۸۰–۴۷۹ پ.م.', en: '480–479 BCE' }, kind: 'campaign', coord: ATHENS, route: [SUSA, BABYLON, [38.3, 37.1], [33.0, 38.6], SARDIS, [26.4, 40.2], ATHENS],
    title: { fa: 'لشکرکشی به یونان', en: 'The invasion of Greece' },
    body: { fa: 'از سارد تا آتن: پل هلسپونت، ترموپیل، آتش‌زدن آکروپلیس، شکست ناوگان در سالامیس و شکست ماردونیه در پلاته و میکاله. گام‌به‌گام در «نقشهٔ جنگ» پایین‌تر.', en: 'From Sardis to Athens: the Hellespont bridge, Thermopylae, the burning of the Acropolis, the naval defeat at Salamis and Mardonius’ defeat at Plataea and Mycale. Step by step in the war map below.' },
    certainty: 'secure', sources: ['hdt', 'aeschylus', 'cawkwell', 'briant'],
  },
  {
    id: 'van', year: -478, when: { fa: 'دوران پادشاهی', en: 'during the reign' }, kind: 'building', coord: VAN,
    title: { fa: 'کتیبهٔ وان', en: 'The Van inscription' },
    body: { fa: 'خشایارشا بر صخرهٔ دژ وان کتیبه‌ای سه‌زبانه (XV) نوشت و می‌گوید پدرش داریوش فرمان کندن این جایگاه را داده بود اما نوشته‌ای بر آن ننهاده بود، پس او نوشت.', en: 'On the rock of Van citadel Xerxes cut a trilingual inscription (XV), saying his father Darius had ordered the niche cut but put no writing on it, so he did.' },
    certainty: 'probable', certaintyNote: { fa: 'کتیبه تاریخ ندارد؛ جایش در اینجا طرح‌وار است.', en: 'The text is undated; its place in the sequence is schematic.' },
    sources: ['royal-inscr', 'kuhrt'],
  },
  {
    id: 'persepolis', year: -475, when: { fa: 'دوران پادشاهی', en: 'during the reign' }, kind: 'building', coord: PERSEPOLIS,
    title: { fa: 'تخت‌جمشید و شوش', en: 'Persepolis and Susa' },
    body: { fa: 'دروازهٔ همهٔ ملل (XPa)، کاخ هدیش، پایان آپادانا و آغاز تالار صدستون (که اردشیر یکم تمامش کرد) کار اوست؛ در شوش نیز ساخت را ادامه داد. کتیبه‌ها می‌گویند آنچه پدر آغاز کرد، او به پایان برد.', en: 'The Gate of All Nations (XPa), the Hadish palace, the completion of the Apadana and the start of the Hall of a Hundred Columns (finished by Artaxerxes I) are his; he also continued building at Susa. His inscriptions say he finished what his father began.' },
    certainty: 'secure', sources: ['royal-inscr', 'kuhrt', 'briant'],
  },
  {
    id: 'daiva', year: -474, when: { fa: 'دوران پادشاهی', en: 'during the reign' }, kind: 'religion', coord: PERSEPOLIS,
    title: { fa: 'کتیبهٔ دیوان (XPh)', en: 'The Daiva inscription (XPh)' },
    body: { fa: 'خشایارشا می‌گوید در سرزمینی که دیوان را می‌پرستیدند، پرستشگاه دیوان را ویران کرد و اهورامزدا را پرستید. نام آن سرزمین را نمی‌برد.', en: 'Xerxes says that in a land where daivas were worshipped he destroyed the daiva sanctuary and worshipped Ahuramazda. He does not name the land.' },
    certainty: 'disputed', certaintyNote: { fa: 'متن قطعی است؛ اینکه به رویدادی واقعی (بابل؟ مصر؟ ایران؟) اشاره دارد یا سخنی آیینی دربارهٔ شاهی است، محل بحث است (سانسیسی-وردنبورخ).', en: 'The text is secure; whether it refers to a real event (Babylon? Egypt? Iran?) or is formal royal rhetoric is debated (Sancisi-Weerdenburg).' },
    sources: ['xph', 'sancisi', 'kuhrt'],
  },
  {
    id: 'eurymedon', year: -466, when: { fa: 'حدود ۴۶۶ پ.م.', en: 'c. 466 BCE' }, kind: 'battle', coord: EURYMEDON,
    title: { fa: 'شکست اوریمدون', en: 'Defeat at the Eurymedon' },
    body: { fa: 'کیمون آتنی با ناوگان اتحادیهٔ دلوس، سپاه و ناوگان ایران را در دهانهٔ رود اوریمدون در پامفیلیه شکست داد. پس از آن ایران دیگر به یونان اروپایی لشکر نکشید.', en: 'The Athenian Cimon, with the Delian League fleet, defeated a Persian army and fleet at the mouth of the Eurymedon in Pamphylia. Persia never again invaded European Greece.' },
    certainty: 'disputed', certaintyNote: { fa: 'تاریخ نبرد بین ۴۶۹ تا ۴۶۶ پیشنهاد شده و جزئیاتش از منابع یونانی دیرتر است.', en: 'Dates from 469 to 466 are proposed, and the details come from later Greek sources.' },
    sources: ['diodorus', 'briant', 'cawkwell'],
  },
  {
    id: 'murder', year: -465, when: { fa: 'حدود ۴–۸ اوت ۴۶۵ پ.م.', en: 'c. 4–8 August 465 BCE' }, kind: 'admin', coord: PERSEPOLIS,
    title: { fa: 'کشته در کاخ', en: 'Murdered in the palace' },
    body: { fa: 'اردوان (آرتابانوس)، فرماندهٔ نگهبانان شاهی (هزاربد)، با همدستی خواجه‌ای از درون کاخ شبانه خشایارشا را کشت (دیودور ۱۱.۶۹؛ کتسیاس). لوح نجومی بابلی BM 32234 می‌گوید: «در روز چهاردهم(؟) ماه آب، خشایارشا را پسرش کشت.»', en: 'Artabanus, commander of the royal guard (the hazarapat), with a eunuch inside the palace, killed Xerxes at night (Diodorus 11.69; Ctesias). The Babylonian astronomical tablet BM 32234 says: “On the fourteenth(?) day of the month Ab, Xerxes — his son murdered him.”' },
    certainty: 'disputed', certaintyNote: { fa: 'قتل و تاریخ تقریباً قطعی است (استولپر ۱۹۸۸). اما لوح بابلی «پسرش» را قاتل می‌داند و منابع یونانی اردوان را؛ نام خواجه هم در کتسیاس آسپامیترس و در دیودور میتریداتس است. این روایت‌های یونانی رنگ داستان درباری دارند.', en: 'The murder and its date are nearly secure (Stolper 1988). But the Babylonian tablet names “his son” as the killer, the Greek sources Artabanus; the eunuch is Aspamitres in Ctesias and Mithridates in Diodorus. The Greek versions read like court romance.' },
    sources: ['bm32234', 'stolper1988', 'diodorus', 'ctesias', 'justin', 'aristotle', 'kuhrt', 'briant'],
  },
  {
    id: 'crown-prince', year: -465, when: { fa: 'همان شب یا روزهای بعد، ۴۶۵ پ.م.', en: 'the same night or days after, 465 BCE' }, kind: 'admin', coord: PERSEPOLIS,
    title: { fa: 'کشتن ولیعهد داریوش', en: 'The crown prince Darius is killed' },
    body: { fa: 'به روایت دیودور و کتسیاس، اردوان به اردشیرِ جوان گفت برادر بزرگش داریوش پدر را کشته است، و اردشیر با یاری نگهبانان داریوش را کشت. یوستین می‌گوید داریوش را خفته یافتند و «گویی خود را به خواب زده» کشتند. ارسطو روایتی دیگر دارد: اردوان داریوش را بی‌فرمان شاه به دار آویخته بود و از ترس بازخواست، خشایارشا را کشت.', en: 'According to Diodorus and Ctesias, Artabanus told the young Artaxerxes that his elder brother Darius had killed their father, and Artaxerxes killed Darius with the guard’s help. Justin says Darius was found asleep and “killed as if he merely counterfeited sleep”. Aristotle has another order: Artabanus had hanged Darius against the king’s order and killed Xerxes fearing the charge.' },
    certainty: 'disputed', certaintyNote: { fa: 'ترتیب رویدادها در منابع ناسازگار است: در ارسطو داریوش پیش از خشایارشا مرده است.', en: 'The sources disagree on the order: in Aristotle, Darius died before Xerxes.' },
    sources: ['diodorus', 'ctesias', 'justin', 'aristotle', 'briant'],
  },
  {
    id: 'artabanus-fall', year: -465, when: { fa: 'پاییز ۴۶۵ پ.م.', en: 'autumn 465 BCE' }, kind: 'battle', coord: PERSEPOLIS,
    title: { fa: 'سقوط اردوان', en: 'The fall of Artabanus' },
    body: { fa: 'توطئهٔ اردوان برای کشتن اردشیر هم فاش شد (کتسیاس: به دست مگابیز؛ یوستین: به دست بکابسوس). در یوستین، اردشیر به بهانهٔ عوض‌کردن زره، اردوان را بی‌سلاح کرد و با شمشیر کشت. در دیودور اردوان ضربه‌ای زد و اردشیر فقط زخمی شد و او را کشت. کتسیاس از نبردی پس از آن می‌گوید که سه پسر اردوان در آن کشته شدند. مانتون برای اردوان «هفت ماه» پادشاهی می‌شمارد.', en: 'Artabanus’ plot against Artaxerxes was betrayed in turn (Ctesias: by Megabyzus; Justin: by Bacabasus). In Justin, Artaxerxes disarmed him on the pretext of exchanging a cuirass and ran him through. In Diodorus, Artabanus struck first, Artaxerxes was only wounded and killed him. Ctesias tells of a battle afterwards in which three sons of Artabanus fell. Manetho counts a “seven months” reign for Artabanus.' },
    certainty: 'disputed', certaintyNote: { fa: 'اینکه اردوان رسماً شاه شد یا تنها نایب‌السلطنه بود معلوم نیست؛ اسناد بابلی از اردشیر از دسامبر ۴۶۵ تاریخ می‌گیرند.', en: 'Whether Artabanus actually reigned or only held power as regent is unknown; Babylonian documents date by Artaxerxes from December 465.' },
    sources: ['ctesias', 'justin', 'diodorus', 'manetho', 'iranica', 'briant'],
  },
  {
    id: 'bactria', year: -464, when: { fa: '۴۶۵–۴۶۴ پ.م.', en: '465–464 BCE' }, kind: 'battle', coord: [66.9, 36.76], route: [PERSEPOLIS, [57.0, 33.5], [62.2, 34.35], [66.9, 36.76]],
    title: { fa: 'شورش باختر', en: 'The Bactrian revolt' },
    body: { fa: 'ویشتاسپ (هیستاسپس)، پسر دیگر خشایارشا، ساتراپ باختر بود و از پایتخت دور (دیودور ۱۱.۶۹). باختر شورید و اردشیر در دو نبرد آن را رام کرد؛ کتسیاس می‌گوید در نبرد دوم باد به روی باختریان وزید.', en: 'Hystaspes, another son of Xerxes, was satrap of Bactria and far from the capital (Diodorus 11.69). Bactria revolted and Artaxerxes subdued it in two battles; Ctesias says that in the second the wind blew in the Bactrians’ faces.' },
    certainty: 'disputed', certaintyNote: { fa: 'کتسیاس رهبر شورش را «اردوانی دیگر» می‌نامد و دیودور ویشتاسپ را؛ ایرانیکا دومی را محتمل‌تر می‌داند.', en: 'Ctesias names the rebel “another Artabanus”, Diodorus implies Hystaspes; Iranica finds the latter more plausible.' },
    sources: ['ctesias', 'diodorus', 'iranica'],
  },
]
