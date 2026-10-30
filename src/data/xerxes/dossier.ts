/**
 * Dossier on Xerxes I. Three layers per section: historical evidence, our property-and-liberty
 * interpretation, and modern cultural meaning. Greek narratives are flagged as Greek; Persian
 * inscriptions as royal rhetoric. Verbatim quotes come from Godley (Herodotus) and Kent via Livius (XPh).
 */
import type { DossierSection, Synthesis } from '../featured/types'

export const xerxesDossier: DossierSection[] = [
  {
    id: 'life', title: { fa: 'زندگی به ترتیب: از ولیعهدی تا قتل', en: 'A life in order: from heir to murder' }, photos: ['audience', 'tomb'],
    historical: {
      fa: [
        'حدود ۵۱۸ پ.م. پسر داریوش و آتوسا زاده شد. بر برادر بزرگ‌ترش آرتوبرزن برگزیده شد (هرودوت ۷.۲–۳) و خود در کتیبهٔ XPf می‌گوید پدرش او را «بزرگ‌ترین پس از خود» کرد. پیش از شاهی، شواهد بابلی او را ولیعهدی با اقامتگاه در بابل نشان می‌دهد.',
        'نوامبر ۴۸۶ به تخت نشست. در ۴۸۶–۴۸۴ شورش مصر را سرکوب کرد و حدود ۴۸۴ دو شورش بابل را. سپس آمادگی جنگ یونان (۴۸۳–۴۸۱)، لشکرکشی ۴۸۰ و شکست ۴۷۹ آمد. پس از آن منابع یونانی کم‌حرف می‌شوند و منابع ایرانی بیشتر از ساختمان‌ها می‌گویند: دروازهٔ همهٔ ملل، هدیش، آپادانا، آغاز تالار صدستون، و کار در شوش و وان.',
        'حدود ۴۶۶ ایران در اوریمدون از آتنیان شکست خورد. در اوت ۴۶۵ خشایارشا به دست اردوان، فرماندهٔ نگهبانان، کشته شد و اردشیر یکم به تخت رسید. آرامگاهی در نقش رستم به او نسبت داده می‌شود.',
      ],
      en: [
        'Born c. 518 BCE to Darius and Atossa, he was chosen over his elder half-brother Artobazanes (Herodotus 7.2–3); in inscription XPf he says his father made him “the greatest after himself”. Babylonian evidence shows him, as crown prince, with a residence at Babylon.',
        'He acceded in November 486, crushed the Egyptian revolt in 486–484 and two Babylonian revolts around 484. Then came the preparations for Greece (483–481), the invasion of 480 and the defeat of 479. After that the Greek sources thin out and the Persian ones speak mostly of building: the Gate of All Nations, the Hadish, the Apadana, the start of the Hall of a Hundred Columns, and work at Susa and Van.',
        'Around 466 Persia lost to Athens at the Eurymedon. In August 465 Xerxes was murdered by Artabanus, commander of the guard, and Artaxerxes I took the throne. A tomb at Naqsh-e Rostam is attributed to him.',
      ],
    },
    interpretation: {
      fa: ['از بیست‌ویک سال پادشاهی، دو سال جنگ یونان تقریباً همهٔ تصویر او را ساخته است، چون یونانیان نوشتند و ایرانیان ننوشتند. سانسیسی-وردنبورخ نشان داد «شخصیت» خشایارشا (خشمگین، هوس‌باز، شکست‌خورده) بیشتر ساختهٔ ادبیات یونانی است تا شواهد.'],
      en: ['Of a 21-year reign, two years of war in Greece have made almost his entire image, because the Greeks wrote and the Persians did not. Sancisi-Weerdenburg showed that Xerxes’ “personality” (wrathful, capricious, defeated) is largely a construct of Greek literature rather than of the evidence.'],
    },
    modern: {
      fa: ['قتل او در کاخ یادآور قاعدهٔ همهٔ نظام‌هایی است که قدرت را دارایی شخصی می‌کنند: جانشینی، جنگ پنهان درون کاخ می‌شود. بی‌قانونی در بالا به همه پایین‌تر سرایت می‌کند.'],
      en: ['His murder in the palace illustrates the rule of every system that makes power a personal possession: succession becomes a hidden war inside the palace, and lawlessness at the top flows downward.'],
    },
    sources: ['hdt', 'royal-inscr', 'iranica', 'briant', 'sancisi', 'kuhrt'],
  },
  {
    id: 'revolts', title: { fa: 'مصر و بابل: سرکوب و افسانهٔ ویرانی', en: 'Egypt and Babylon: repression and the destruction myth' },
    historical: {
      fa: [
        'هرودوت (۷.۷) می‌گوید خشایارشا مصر را «بسیار سخت‌تر» از داریوش به بردگی گرفت و برادرش هخامنش را ساتراپ کرد. در بابل، بل‌شیمانی و شمش‌اریبا خود را شاه خواندند؛ اسناد تاریخ‌دار به نام آنان مانده است.',
        'روایت یونانی می‌گوید خشایارشا تندیس زرین بل را برد. کورت و شروین-وایت (۱۹۸۷) نشان دادند شاهدی بر ویرانی اسگیل یا قطع آیین مردوک نیست و این تصویر از خوانش نادرست منابع یونانی آمده است. وارزگرز (۲۰۰۳/۴) دید که بایگانی خاندان‌های پیوسته به نهادهای شمالی بابل، که با شورش همراه بودند، ناگهان پایان می‌یابد، و خاندان‌های دیگر ادامه می‌دهند.',
      ],
      en: [
        'Herodotus (7.7) says Xerxes laid Egypt under a “much harder slavery” than Darius had and made his brother Achaemenes satrap. At Babylon, Bel-shimanni and Shamash-eriba proclaimed themselves king; documents dated by their reigns survive.',
        'Greek tradition says Xerxes carried off the golden statue of Bel. Kuhrt and Sherwin-White (1987) showed there is no evidence that Esagila was destroyed or the cult of Marduk stopped, and that the picture came from misreading Greek sources. Waerzeggers (2003/4) found that the archives of families tied to northern Babylonian institutions, aligned with the revolt, end abruptly while others continue.',
      ],
    },
    interpretation: {
      fa: ['شاهد نشان می‌دهد سرکوب گزینشی بود: کسانی که با شورش همراه بودند املاک و جایگاه را از دست دادند، نه همهٔ بابل. این همان شیوهٔ امپراتوری است: مالکیت تا وقتی امن است که با وفاداری سیاسی همراه باشد.'],
      en: ['The evidence points to targeted repression: those tied to the revolt lost estates and offices, not Babylon as a whole. That is the imperial method: property is secure only as long as political loyalty holds.'],
    },
    modern: {
      fa: ['افسانهٔ «خشایارشای معبدسوز» نمونه‌ای است از اینکه یک روایت چطور دو هزار سال تکرار می‌شود. پرسش درست همیشه این است: سند کجاست؟'],
      en: ['The “temple-burning Xerxes” legend shows how a story can be repeated for two thousand years. The right question is always: where is the document?'],
    },
    sources: ['hdt', 'kuhrt-sw', 'waerzeggers', 'kuhrt', 'briant'],
  },
  {
    id: 'greek-war', title: { fa: 'جنگ بزرگ با یونان', en: 'The great war with Greece' }, photos: ['hellespont', 'epitaph'],
    historical: {
      fa: [
        'ریشه در شورش ایونیه (۴۹۹–۴۹۴) و کمک آتن به شورشیان بود، و شکست ماراتن (۴۹۰) آن را کینه‌ای ناتمام کرد. خشایارشا سه سال آماده شد: کانال آتوس، انبارهای آذوقه در تراکیه، و دو پل کشتی بر هلسپونت.',
        'بهار ۴۸۰ از سارد راه افتاد، از هلسپونت گذشت، در دوریسکوس سان دید و از تراکیه، مقدونیه و تسالی گذشت. در اوت/سپتامبر ترموپیل را با دور زدن از راه کوهستان گشود؛ هم‌زمان ناوگان در آرتمیسیون جنگید. آتن تهی را گرفت و آکروپلیس را سوزاند. در سپتامبر ناوگانش در سالامیس شکست خورد.',
        'شاه به آسیا بازگشت و ماردونیه را گذاشت. ماردونیه در اوت ۴۷۹ در پلاته کشته شد و همان روزها ناوگان ایرانی در میکاله سوخت. یونانیان سستوس را گرفتند و جنگ به آسیا رفت.',
        'از سوی ایران هیچ روایتی از جنگ نمانده است؛ کتیبهٔ دیوان «یئونا (یونانیان)، آنان که این سوی دریا و آنان که آن سوی دریا می‌نشینند» را در شمار سرزمین‌ها می‌آورد، اما از نبرد سخنی نمی‌گویند. هر جزئیات این روایت یونانی است و با این عینک باید خواند.',
      ],
      en: [
        'Its roots lay in the Ionian revolt (499–494) and Athens’ help to the rebels, and the defeat at Marathon (490) left the score unsettled. Xerxes prepared for three years: the Athos canal, supply depots in Thrace, and two bridges of boats over the Hellespont.',
        'In spring 480 he marched from Sardis, crossed the Hellespont, reviewed the army at Doriscus and passed through Thrace, Macedon and Thessaly. In August/September he forced Thermopylae by turning it over the mountain while the fleet fought at Artemisium. He took an empty Athens and burned the Acropolis. In September his fleet was beaten at Salamis.',
        'The king returned to Asia and left Mardonius behind. Mardonius fell at Plataea in August 479, and in the same days the Persian fleet burned at Mycale. The Greeks took Sestos and the war moved to Asia.',
        'No Persian account of the war survives. The Daiva inscription lists “Yaunâ, those who dwell on this side of the sea and those who dwell across the sea” among his lands but say nothing of battle. Every detail of the narrative is Greek and has to be read through that lens.',
      ],
    },
    quotes: [
      { text: 'I was moved to compassion when I considered the shortness of all human life, since of all this multitude of men not one will be alive a hundred years from now.', fa: 'دلم به رحم آمد وقتی به کوتاهی زندگی آدمی اندیشیدم، چون از این همه انسان، صد سال دیگر یکی هم زنده نخواهد بود.', ref: 'Herodotus 7.46 (Xerxes to Artabanus at Abydos)', source: 'hdt' },
      { text: 'Foreigner, go tell the Spartans that we lie here obedient to their commands.', fa: 'ای رهگذر، به اسپارتیان بگو که ما اینجا، فرمانبردار فرمانشان، خفته‌ایم.', ref: 'Herodotus 7.228 (the Thermopylae epitaph)', source: 'hdt' },
      { text: 'Whenever Xerxes, as he sat beneath the mountain opposite Salamis which is called Aegaleos, saw one of his own men achieve some feat in the battle, he inquired who did it, and his scribes wrote down the captain’s name with his father and city of residence.', fa: 'هرگاه خشایارشا، که زیر کوه روبه‌روی سالامیس به نام آیگالئوس نشسته بود، می‌دید یکی از مردانش در نبرد دلاوری می‌کند، می‌پرسید کیست، و دبیرانش نام ناخدا را با نام پدر و شهرش می‌نوشتند.', ref: 'Herodotus 8.90.4', source: 'hdt' },
    ],
    interpretation: {
      fa: ['از دید ایرانی، لشکرکشی پاسخ به دست‌درازی آتن بود و گسترش مرز تا جایی که شاه خود را پاسدار نظم می‌دانست. از دید یونانی، دفاع شهرهای خودگردان در برابر شاهی بود که خاک و آب می‌خواست. هر دو دید از منابع خودشان درست‌اند؛ نتیجه اما روشن است: شهرهایی که شهروندانش برای مال و خانهٔ خود می‌جنگیدند، سپاهی بزرگ‌تر از رعایا را شکست دادند.'],
      en: ['From the Persian side the campaign answered Athens’ meddling and pushed the frontier to where the king saw himself as guardian of order. From the Greek side it was the defence of self-governing cities against a king who demanded earth and water. Both views are right by their own sources; the outcome is clear: cities whose citizens fought for their own homes and property beat a larger army of subjects.'],
    },
    modern: {
      fa: ['جنگ یونان برای اروپا به افسانهٔ بنیاد «آزادی در برابر استبداد» بدل شد. برای ایرانی امروز ارزشمندتر این است که داستان را بی‌افسانه بشناسد: شاهی کارآمد، سپاهی منظم، و شکستی که نه از ضعف ایرانیان بلکه از تنگه‌ها، طوفان‌ها و انگیزهٔ مدافعان آمد.'],
      en: ['For Europe the Greek war became a founding myth of “freedom against despotism”. For Iranians today it is more useful to know the story without the myth: a capable king, an organised army, and a defeat that came not from Persian weakness but from narrows, storms and the motivation of defenders.'],
    },
    sources: ['hdt', 'aeschylus', 'cawkwell', 'lazenby', 'briant', 'tuplin', 'royal-inscr'],
  },
  {
    id: 'army', title: { fa: 'سپاه: ارقام هرودوت و برآوردهای امروز', en: 'The army: Herodotus’ figures and modern estimates' },
    historical: {
      fa: [
        'ادعای هرودوت: سپاه زمینی ۱٬۷۰۰٬۰۰۰ (۷.۶۰) و ناوگان ۱٬۲۰۷ کشتی جنگی (۷.۸۹)؛ و با خدمه و همراهان، شمار کسانی که تا ترموپیل آمدند ۵٬۲۸۳٬۲۲۰ (۷.۱۸۶). آیسخولوس نیز برای سالامیس هزار و دویست‌وچند کشتی ایرانی را در برابر حدود سیصد کشتی یونانی می‌گذارد.',
        'برآورد امروز: هیچ پژوهشگر جدی رقم هرودوت را نمی‌پذیرد. استدلال اصلی تدارکات است: آب، علوفه و نان برای میلیون‌ها نفر در یونان کوهستانی ممکن نبود. پژوهشگرانی چون لیزنبی، کاوکول، بریان و کورت هر یک با روش خود برآوردهایی بسیار کمتر می‌دهند که با هم یکی نیستند؛ ما یک رقم «درست» نمی‌گذاریم. شمار ناوگان را برخی نزدیک‌تر به رقم هرودوت می‌دانند، چون کشتی‌ها از فهرست‌های شهرها شمرده شده بود.',
      ],
      en: [
        'Herodotus’ claim: a land army of 1,700,000 (7.60) and a fleet of 1,207 warships (7.89); with crews and followers, those brought as far as Thermopylae numbered 5,283,220 (7.186). Aeschylus likewise sets twelve hundred-odd Persian ships against roughly three hundred Greek at Salamis.',
        'Modern view: no serious scholar accepts Herodotus’ figure. The main argument is logistics: water, fodder and bread for millions were impossible in mountainous Greece. Scholars such as Lazenby, Cawkwell, Briant and Kuhrt each give much lower estimates by different methods, and they do not agree; we do not print a single “right” number. Some treat the fleet figure as closer to reality, since ships could be counted from city contingents.',
      ],
    },
    quotes: [
      { text: '…the total of the whole land army was shown to be one million and seven hundred thousand.', fa: '…شمار همهٔ سپاه زمینی یک میلیون و هفتصد هزار نشان داده شد.', ref: 'Herodotus 7.60', source: 'hdt' },
      { text: 'Here four thousand from the Peloponnese once fought three million.', fa: 'اینجا روزگاری چهار هزار تن از پلوپونز با سه میلیون جنگیدند.', ref: 'Herodotus 7.228 (inscription at Thermopylae)', source: 'hdt' },
    ],
    interpretation: {
      fa: ['رقم‌های بزرگ کارکردی ادبی داشتند: هر چه دشمن بزرگ‌تر، پیروزی شهروندان آزاد شکوهمندتر. سپاه واقعی هخامنشی، با هستهٔ پارسی و مادی و یگان‌های قوم‌های تابع، ابزار یک دولت مالیات‌گیر بود؛ بزرگی‌اش از توان گردآوری خراج می‌آمد.'],
      en: ['The huge figures had a literary function: the bigger the enemy, the more glorious the victory of free citizens. The real Achaemenid army, with a Persian and Median core and contingents of subject peoples, was the tool of a taxing state; its size came from its capacity to collect tribute.'],
    },
    modern: {
      fa: ['یاد گرفتن تفاوت «ادعای منبع» و «برآورد پژوهشگر» شاید مهم‌ترین درس تاریخی این جنگ باشد.'],
      en: ['Learning the difference between a source’s claim and a scholar’s estimate may be the most important historical lesson of this war.'],
    },
    sources: ['hdt', 'aeschylus', 'lazenby', 'cawkwell', 'briant', 'kuhrt', 'tuplin'],
  },
  {
    id: 'economy', title: { fa: 'اقتصاد، خراج و مالیات', en: 'Economy, tribute and taxation' }, photos: ['daric'],
    historical: {
      fa: ['خشایارشا نظام خراج داریوش را نگه داشت. لوح‌های باروی تخت‌جمشید و خزانه تا دوران او کار بی‌وقفهٔ دستگاه جیره و پرداخت را نشان می‌دهند. کتیبهٔ دیوان می‌گوید سرزمین‌ها «خراج برایم آوردند». لشکرکشی یونان هزینهٔ بزرگی بود که با همین خراج، کار اجباری (کانال آتوس) و کشتی‌های شهرهای تابع تأمین شد.'],
      en: ['Xerxes kept Darius’ tribute system. The Persepolis Fortification and Treasury tablets show the ration and payment machine working into his reign. The Daiva inscription says the lands “bore me tribute”. The Greek campaign was a huge expense met from that tribute, from compulsory labour (the Athos canal) and from ships levied on subject cities.'],
    },
    quotes: [
      { text: 'They bore me tribute. What was said to them by me, that they did. My law, that held them…', fa: 'برایم خراج آوردند. آنچه از سوی من به آنان گفته شد، همان کردند. قانون من آنان را نگه داشت…', ref: 'XPh §3, tr. after Kent', source: 'xph' },
    ],
    interpretation: {
      fa: ['خراج معین بهتر از غارت بی‌قاعده است، اما همچنان انتقال اجباری دارایی است. وقتی جنگی دور با کار اجباری و کشتی‌های مصادره‌شده تأمین شود، هزینهٔ تصمیم یک تن را میلیون‌ها نفر می‌پردازند.'],
      en: ['Fixed tribute beats arbitrary plunder, but it is still a forced transfer of property. When a distant war is funded by forced labour and requisitioned ships, millions pay for one man’s decision.'],
    },
    modern: {
      fa: ['دولتی که می‌تواند بی‌رضایت مالیات بگیرد، می‌تواند بی‌رضایت جنگ هم کند. این پیوند امروز هم برقرار است.'],
      en: ['A state that can tax without consent can also go to war without consent. The link still holds.'],
    },
    sources: ['xph', 'kuhrt', 'briant', 'hdt'],
  },
  {
    id: 'markets', title: { fa: 'بازارها، راه‌ها و پیک شاهی', en: 'Markets, roads and the royal post' },
    historical: {
      fa: ['جادهٔ شاهی و ایستگاه‌هایش در دوران او کار می‌کرد. هرودوت پیک شاهی را که خبر سالامیس را به شوش برد چنین وصف می‌کند (۸.۹۸). سکهٔ دریک و سیگلوس، که داریوش آغاز کرده بود، در غرب امپراتوری می‌چرخید.'],
      en: ['The Royal Road and its stations worked throughout his reign. Herodotus describes the royal post that carried the news of Salamis to Susa (8.98). The daric and siglos coins introduced by Darius circulated in the west of the empire.'],
    },
    quotes: [
      { text: 'These are stopped neither by snow nor rain nor heat nor darkness from accomplishing their appointed course with all speed.', fa: 'نه برف، نه باران، نه گرما و نه تاریکی آنان را از پیمودن راه مقرر با همهٔ شتاب بازنمی‌دارد.', ref: 'Herodotus 8.98', source: 'hdt' },
    ],
    interpretation: {
      fa: ['راه و سکه برای شاه ساخته شد، اما بازرگانان هم از آن سود بردند. امنیت راه کالایی عمومی است که حتی دولتی خراج‌گیر می‌تواند فراهم کند.'],
      en: ['Roads and coins were built for the king, but merchants benefited too. A safe road is a public good that even a tribute state can supply.'],
    },
    modern: {
      fa: ['جملهٔ هرودوت دربارهٔ پیک‌های ایرانی امروز بر سردر ادارهٔ پست نیویورک است؛ یادگاری ایرانی که کمتر ایرانی آن را می‌شناسد.'],
      en: ['Herodotus’ sentence on the Persian couriers is carved over the New York post office: an Iranian legacy few Iranians know.'],
    },
    sources: ['hdt', 'briant', 'kuhrt'],
  },
  {
    id: 'religion', title: { fa: 'دین و کتیبهٔ دیوان', en: 'Religion and the Daiva inscription' }, photos: ['daiva'],
    historical: {
      fa: ['کتیبهٔ XPh، که از لوح‌های سنگی تخت‌جمشید و پاسارگاد شناخته می‌شود، مهم‌ترین متن دینی اوست. نام سرزمین شورشی و جای پرستشگاه را نمی‌برد. در همان دوران، لوح‌های تخت‌جمشید نشان می‌دهند دستگاه شاهی برای خدایان ایلامی و دیگر خدایان هم جیره می‌داد.'],
      en: ['Inscription XPh, known from stone slabs from Persepolis and Pasargadae, is his main religious text. It names neither the rebel land nor the sanctuary. In the same period the Persepolis tablets show the royal administration issuing rations for Elamite and other gods as well.'],
    },
    quotes: [
      { text: 'And among these countries there was a place where previously demons (daiva) were worshipped. Afterwards, by the grace of Ahuramazda I destroyed that sanctuary of demons, and I proclaimed: ‘The demons shall not be worshipped!’ Where previously the demons were worshipped, there I worshipped Ahuramazda at the proper time and in the proper manner.', fa: 'و در میان این سرزمین‌ها جایی بود که پیش‌تر دیوان را می‌پرستیدند. سپس به خواست اهورامزدا آن پرستشگاه دیوان را ویران کردم و فرمان دادم: «دیوان را نباید پرستید!» آنجا که پیش‌تر دیوان پرستیده می‌شدند، من اهورامزدا را در زمان درست و به شیوهٔ درست پرستیدم.', ref: 'XPh §4, tr. after Kent', source: 'xph' },
    ],
    interpretation: {
      fa: ['دو خوانش هست. یکی متن را گزارش رویدادی واقعی می‌داند و خشایارشا را از کوروش و داریوش ناشکیباتر. دیگری (سانسیسی-وردنبورخ) آن را سخن آیینی شاهی می‌داند که شورش را با «دروغ» و دیوپرستی یکی می‌کند، همان‌گونه که داریوش در بیستون. شواهد لوح‌ها، که پرستش چندگانه را نشان می‌دهند، خوانش دوم را پشتیبانی می‌کند.'],
      en: ['There are two readings. One takes the text as a report of a real event and Xerxes as less tolerant than Cyrus or Darius. The other (Sancisi-Weerdenburg) reads it as formal royal rhetoric that equates rebellion with “the Lie” and daiva worship, as Darius did at Bisotun. The tablets, which show plural cults, support the second reading.'],
    },
    modern: {
      fa: ['حتی اگر خوانش دوم درست باشد، متن نشان می‌دهد قدرت سیاسی می‌تواند تعیین کند کدام پرستش رواست. آزادی وجدان یعنی هیچ شاهی این حق را نداشته باشد.'],
      en: ['Even on the second reading, the text shows political power claiming to decide which worship is legitimate. Freedom of conscience means no king has that right.'],
    },
    sources: ['xph', 'sancisi', 'kuhrt', 'briant'],
  },
  {
    id: 'law', title: { fa: 'قانون و فرمان', en: 'Law and command' }, photos: ['van'],
    historical: {
      fa: ['XPh واژهٔ «داتا» (قانون) را به کار می‌برد: «قانون من آنان را نگه داشت». کتیبهٔ XPl، که تقریباً رونوشت متن داریوش در نقش رستم (DNb) است، شاه را دوستدار راستی، دشمن دروغ و کسی معرفی می‌کند که نمی‌خواهد زورمند به ناتوان ستم کند یا ناتوان به زورمند. کتیبهٔ وان نیز همین زبان پیوستگی با پدر را دارد.'],
      en: ['XPh uses the word data (law): “my law, that held them”. Inscription XPl, almost a copy of Darius’ Naqsh-e Rostam text (DNb), presents the king as lover of what is right, enemy of the Lie, and one who does not wish the strong to wrong the weak nor the weak the strong. The Van inscription uses the same language of continuity with his father.'],
    },
    interpretation: {
      fa: ['آرمان «نه ستم زورمند بر ناتوان، نه ناتوان بر زورمند» به حاکمیت قانون نزدیک است. اما قانونی که «قانون من» است و از ارادهٔ شاه می‌آید، می‌تواند با همان اراده تغییر کند. این مرز میان «حکومت با قانون» و «حکومت قانون» است.'],
      en: ['The ideal that neither the strong wrong the weak nor the weak the strong approaches the rule of law. But a law that is “my law”, flowing from the king’s will, can change with that will. That is the line between rule by law and the rule of law.'],
    },
    modern: {
      fa: ['قانون اساسی‌ای که حاکم را هم محدود کند، همان چیزی است که این کتیبه‌ها کم دارند.'],
      en: ['A constitution that binds the ruler too is exactly what these inscriptions lack.'],
    },
    sources: ['xph', 'royal-inscr', 'kuhrt', 'briant'],
  },
  {
    id: 'freedoms', title: { fa: 'آزادی‌های فردی', en: 'Individual freedoms' },
    historical: {
      fa: ['در امپراتوری، مالکیت خصوصی، قرارداد و بازار (مثلاً در اسناد بابلی) ادامه داشت، و شهرها و جماعت‌ها قانون‌ها و آیین‌های محلی خود را داشتند. در برابر، کار اجباری، سربازگیری و خراج وجود داشت و هر که با شورش همراه می‌شد مال و جانش در خطر بود. منابع از آزادی فرد در برابر شاه سخنی نمی‌گویند.'],
      en: ['Within the empire, private property, contracts and markets continued (for instance in Babylonian archives), and cities and communities kept their own laws and cults. Against this stood forced labour, levies and tribute, and anyone associated with revolt risked property and life. The sources say nothing of individual liberty against the king.'],
    },
    interpretation: {
      fa: ['آزادی در امپراتوری هخامنشی آزادی «تا وقتی وفاداری» بود: گسترده در زندگی روزمره، اما بی‌تضمین در برابر دولت. یونانیان در همان زمان آزمایشی دیگر می‌کردند: شهروندانی که در مجلس رأی می‌دادند و برای خانهٔ خود می‌جنگیدند. آن آزمایش هم بردگان و زنان را بیرون می‌گذاشت.'],
      en: ['Freedom in the Achaemenid empire was freedom “while loyal”: broad in daily life but unguaranteed against the state. The Greeks were running another experiment at the time: citizens who voted in assembly and fought for their own homes. That experiment too excluded slaves and women.'],
    },
    modern: {
      fa: ['مقایسهٔ منصفانه، نه «آزادی یونانی در برابر بردگی ایرانی»، بلکه پرسش از تضمین است: چه چیزی دارایی و وجدان یک فرد را از ارادهٔ قدرت جدا می‌کند؟'],
      en: ['A fair comparison is not “Greek freedom versus Persian slavery” but a question of guarantees: what separates a person’s property and conscience from the will of power?'],
    },
    sources: ['kuhrt', 'briant', 'waerzeggers', 'hdt'],
  },
  {
    id: 'reception', title: { fa: 'خشایارشا در روایت دیگران', en: 'Xerxes in others’ stories' }, photos: ['gate', 'doorway', 'hadish'],
    historical: {
      fa: [
        'آیسخولوس در «ایرانیان» (۴۷۲ پ.م.) شکست را از دید دربار ایران به صحنه برد؛ هرودوت (حدود ۴۳۰) خشایارشا را شاهی بزرگ اما گرفتار غرور و مشاوران بد ساخت. کتسیاس داستان‌های درباری می‌آورد که اعتبارشان کم است.',
        'سنت یهودی و مسیحی «اخشورش» کتاب استر را با خشایارشا یکی می‌داند؛ این هم‌سانی نام پذیرفته است، اما تاریخی‌بودن داستان استر را بیشتر پژوهشگران نمی‌پذیرند. فیلم «۳۰۰» (۲۰۰۶) خشایارشا را چهره‌ای غول‌آسا و ایرانیان را هیولا نشان داد؛ تحریفی که نه با هرودوت می‌خواند و نه با شواهد ایرانی.',
      ],
      en: [
        'Aeschylus’ Persians (472 BCE) staged the defeat from the Persian court; Herodotus (c. 430) made Xerxes a great king undone by hubris and bad advisers. Ctesias offers court stories of little reliability.',
        'Jewish and Christian tradition identifies the Ahasuerus of the Book of Esther with Xerxes; the name match is accepted, but most scholars do not take the Esther story as history. The film 300 (2006) made Xerxes a giant and the Persians monsters, a distortion that matches neither Herodotus nor the Persian evidence.',
      ],
    },
    quotes: [
      { text: 'My men have become women, and my women men.', fa: 'مردانم زن شده‌اند و زنانم مرد.', ref: 'Herodotus 8.88 (on Artemisia at Salamis)', source: 'hdt' },
    ],
    interpretation: {
      fa: ['هر روایت خشایارشا را برای کاری می‌خواست: آیسخولوس برای هشدار به آتن، هرودوت برای درس دربارهٔ غرور، سنت استر برای داستان رهایی، و هالیوود برای «دیگری» شرقی. خودِ کتیبه‌هایش او را فقط ادامه‌دهندهٔ پدر می‌خوانند.'],
      en: ['Every story needed Xerxes for something: Aeschylus to warn Athens, Herodotus to teach about hubris, the Esther tradition for a tale of deliverance, Hollywood for an Eastern “other”. His own inscriptions present him only as his father’s continuator.'],
    },
    modern: {
      fa: ['ایرانی امروز می‌تواند خشایارشا را نه قهرمان و نه هیولا، بلکه شاهی واقعی ببیند که ساخت، جنگید، شکست خورد و در کاخ کشته شد؛ و این دیدن، خود تمرین آزادی اندیشه است.'],
      en: ['An Iranian today can see Xerxes as neither hero nor monster, but a real king who built, fought, lost and was murdered in his palace; and seeing him that way is itself an exercise in free thought.'],
    },
    sources: ['aeschylus', 'hdt', 'rollinger', 'ctesias', 'sancisi', 'iranica'],
  },
]

export const xerxesSynthesis: Synthesis = {
  title: { fa: 'شاهی که روایتش را دیگران نوشتند', en: 'A king whose story others wrote' },
  paras: {
    fa: [
      'خشایارشا امپراتوری پدر را بی‌کم‌وکاست نگه داشت، شورش‌ها را با سرکوب گزینشی خاموش کرد، و در تخت‌جمشید باشکوه‌ترین دروازه‌ها و کاخ‌ها را ساخت. شکست یونان امپراتوری را نلرزاند، اما تصویر او را برای همیشه ساخت.',
      'با عینک مالکیت و آزادی، درس اصلی اوست که دولتی خراج‌گیر می‌تواند نظم و راه و سکه بدهد، اما وقتی همهٔ تصمیم‌ها در یک تن جمع شود، همان یک تن می‌تواند ثروت میلیون‌ها نفر را به لشکرکشی‌ای دور ببرد، و جانشینی‌اش در خون پایان یابد. و در سوی دیگر، شهرهایی کوچک نشان دادند انسان‌هایی که از خانه و مال خود دفاع می‌کنند، از سپاهی بزرگ‌تر قوی‌ترند.',
    ],
    en: [
      'Xerxes kept his father’s empire intact, quelled revolts by targeted repression and built the grandest gates and palaces at Persepolis. The defeat in Greece did not shake the empire, but it fixed his image forever.',
      'Through a property-and-liberty lens, the main lesson is that a tribute state can provide order, roads and coin, but when every decision rests with one man, that man can carry the wealth of millions into a distant war, and his succession can end in blood. On the other side, small cities showed that people defending their own homes and property can be stronger than a larger army.',
    ],
  },
  sources: ['briant', 'kuhrt', 'cawkwell', 'hdt', 'sancisi'],
}
