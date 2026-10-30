/**
 * The Greek war of Xerxes, 490–479 BCE, as a zoomed campaign map. Herodotus (Godley) is the spine;
 * every step names its certainty. Coordinates are modern locations of the ancient sites.
 */
import type { Coord, MapEvent } from '../featured/types'

const SARDIS: Coord = [28.04, 38.49]
const ABYDOS: Coord = [26.4, 40.2]
const SESTOS: Coord = [26.42, 40.24]
const DORISCUS: Coord = [26.05, 40.85]
const ACANTHUS: Coord = [23.88, 40.4]
const THERMA: Coord = [22.94, 40.64]
const TEMPE: Coord = [22.58, 39.88]
const THERMOPYLAE: Coord = [22.53, 38.8]
const ARTEMISIUM: Coord = [23.25, 39.0]
const SEPIAS: Coord = [23.25, 39.18]
const ATHENS: Coord = [23.73, 37.97]
const PHALERUM: Coord = [23.68, 37.93]
const SALAMIS: Coord = [23.56, 37.95]
const PLATAEA: Coord = [23.27, 38.21]
const MYCALE: Coord = [27.15, 37.66]
const MARATHON: Coord = [23.97, 38.12]
const MILETUS: Coord = [27.28, 37.53]
const SAMOS: Coord = [26.95, 37.7]

/** Coastal track of the fleet from the Hellespont to Phalerum (schematic, following Herodotus’ stages). */
const FLEET_OUT: Coord[] = [ABYDOS, [26.1, 40.35], [25.4, 40.6], DORISCUS, [25.0, 40.85], [24.3, 40.75], [24.05, 40.45], ACANTHUS, [23.7, 40.15], [23.2, 40.2], THERMA]
const FLEET_SOUTH: Coord[] = [THERMA, [22.95, 40.35], [23.2, 39.7], SEPIAS, [23.3, 39.1], ARTEMISIUM]
const FLEET_EURIPUS: Coord[] = [ARTEMISIUM, [23.1, 38.85], [23.2, 38.6], [23.59, 38.46], [23.85, 38.25], [24.05, 38.0], [23.85, 37.75], PHALERUM]

export const xerxesPlaces: { name: { fa: string; en: string }; c: Coord; left?: boolean }[] = [
  { name: { fa: 'سارد', en: 'Sardis' }, c: SARDIS },
  { name: { fa: 'آبیدوس', en: 'Abydos' }, c: ABYDOS },
  { name: { fa: 'دوریسکوس', en: 'Doriscus' }, c: DORISCUS },
  { name: { fa: 'آتوس', en: 'Athos' }, c: [24.33, 40.16] },
  { name: { fa: 'ترما', en: 'Therma' }, c: THERMA },
  { name: { fa: 'تمپه', en: 'Tempe' }, c: TEMPE },
  { name: { fa: 'ترموپیل', en: 'Thermopylae' }, c: THERMOPYLAE, left: true },
  { name: { fa: 'آرتمیسیون', en: 'Artemisium' }, c: ARTEMISIUM },
  { name: { fa: 'آتن', en: 'Athens' }, c: ATHENS },
  { name: { fa: 'سالامیس', en: 'Salamis' }, c: SALAMIS, left: true },
  { name: { fa: 'پلاته', en: 'Plataea' }, c: PLATAEA, left: true },
  { name: { fa: 'میکاله', en: 'Mycale' }, c: MYCALE },
]

export const xerxesCampaign: MapEvent[] = [
  {
    id: 'ionian', year: -494, when: { fa: '۴۹۹–۴۹۴ پ.م.', en: '499–494 BCE' }, kind: 'battle', coord: MILETUS,
    title: { fa: 'پیش‌زمینه: شورش ایونیه', en: 'Background: the Ionian revolt' },
    body: { fa: 'شهرهای یونانی آسیای کوچک بر داریوش شوریدند؛ آتن و ارتریا کشتی فرستادند و سارد سوخت. شورش با سقوط میلتوس (۴۹۴) پایان یافت. از نگاه شاه، آتن به قلمرو او دست‌درازی کرده بود.', en: 'The Greek cities of Asia Minor rebelled against Darius; Athens and Eretria sent ships and Sardis was burned. The revolt ended with the fall of Miletus (494). From the king’s side, Athens had meddled in his realm.' },
    certainty: 'secure', sources: ['hdt', 'briant'],
  },
  {
    id: 'marathon', year: -490, when: { fa: '۴۹۰ پ.م.', en: '490 BCE' }, kind: 'battle', coord: MARATHON, fleet: [SAMOS, [26.0, 37.3], [25.1, 37.2], [24.3, 37.9], MARATHON],
    title: { fa: 'ماراتن: لشکرکشی داریوش', en: 'Marathon: Darius’ expedition' },
    body: { fa: 'ناوگانی به فرماندهی داتیس و آرتافرن از راه دریا ارتریا را گرفت و در ماراتن پیاده شد، اما آتنیان و پلاتیان آن را شکست دادند. داریوش آمادگی لشکرکشی بزرگ‌تری را آغاز کرد که شورش مصر و مرگش آن را به خشایارشا سپرد (هرودوت ۷.۱–۴).', en: 'A seaborne force under Datis and Artaphernes took Eretria and landed at Marathon, where the Athenians and Plataeans defeated it. Darius began preparing a larger expedition, which the Egyptian revolt and his death handed to Xerxes (Herodotus 7.1–4).' },
    certainty: 'secure', sources: ['hdt', 'lazenby'],
  },
  {
    id: 'athos', year: -483, when: { fa: '۴۸۳–۴۸۰ پ.م.', en: '483–480 BCE' }, kind: 'building', coord: ACANTHUS,
    title: { fa: 'کانال آتوس و انبارها', en: 'The Athos canal and supply depots' },
    body: { fa: 'خشایارشا کانالی از گردنهٔ شبه‌جزیرهٔ آتوس کند تا ناوگانش دماغه‌ای را دور نزند که در ۴۹۲ ناوگان ماردونیه را نابود کرده بود (هرودوت ۷.۲۲–۲۴)، و در تراکیه و مقدونیه انبار آذوقه ساخت (۷.۲۵). ردّ کانال را باستان‌شناسی و زمین‌شناسی تأیید کرده است.', en: 'Xerxes cut a canal across the neck of the Athos peninsula so the fleet would not round the cape that had wrecked Mardonius’ fleet in 492 (Herodotus 7.22–24), and laid down food depots in Thrace and Macedon (7.25). Archaeological and geological survey has confirmed the canal.' },
    certainty: 'secure', sources: ['hdt', 'cawkwell', 'briant'],
  },
  {
    id: 'hellespont', year: -480, when: { fa: 'بهار ۴۸۰ پ.م.', en: 'spring 480 BCE' }, kind: 'campaign', coord: SESTOS, route: [SARDIS, [27.4, 39.3], [26.9, 39.9], ABYDOS, SESTOS],
    title: { fa: 'سارد تا هلسپونت: پل‌های کشتی', en: 'Sardis to the Hellespont: the bridges of boats' },
    body: { fa: 'سپاه زمستان را در سارد گذراند و بهار به آبیدوس رفت. دو پل از کشتی‌های به‌هم‌بسته، میان آبیدوس و سستوس، تنگه را پوشاند. پل نخست را طوفان درید؛ هرودوت می‌گوید شاه فرمان داد هلسپونت را سیصد تازیانه بزنند (۷.۳۴–۳۶) و سپاه هفت روز و هفت شب گذشت (۷.۵۶).', en: 'The army wintered at Sardis and marched to Abydos in spring. Two bridges of lashed ships spanned the strait between Abydos and Sestos. A storm broke the first; Herodotus says the king had the Hellespont given three hundred lashes (7.34–36), and the army crossed for seven days and nights (7.56).' },
    certainty: 'probable', certaintyNote: { fa: 'پل‌ها قطعی‌اند؛ داستان تازیانه‌زدن روایت هرودوت است که می‌تواند آیینی ایرانی، یا ساختهٔ یونانیان برای نمایش «غرور» باشد.', en: 'The bridges are secure; the whipping is Herodotus’ story, which may reflect a Persian ritual or a Greek image of hubris.' },
    sources: ['hdt', 'rollinger', 'briant'],
  },
  {
    id: 'doriscus', year: -480, when: { fa: 'بهار ۴۸۰ پ.م.', en: 'spring 480 BCE' }, kind: 'campaign', coord: DORISCUS, route: [SESTOS, [26.6, 40.6], DORISCUS], fleet: [ABYDOS, [26.1, 40.35], [25.4, 40.6], DORISCUS],
    title: { fa: 'سان در دوریسکوس', en: 'The review at Doriscus' },
    body: { fa: 'در دشت دوریسکوس در تراکیه سپاه شمرده شد. هرودوت (۷.۶۰) سپاه زمینی را ۱٬۷۰۰٬۰۰۰ و ناوگان را ۱٬۲۰۷ کشتی جنگی می‌گوید (۷.۸۹)، و فهرست قوم‌ها و جامه‌هایشان را می‌آورد که با فهرست سرزمین‌ها در کتیبه‌های شاهی هم‌خوان است.', en: 'On the plain of Doriscus in Thrace the army was counted. Herodotus (7.60) gives the land army as 1,700,000 and the fleet as 1,207 warships (7.89), and lists the peoples and their dress, a list that echoes the lands in the royal inscriptions.' },
    certainty: 'disputed', certaintyNote: { fa: 'ارقام هرودوت ادعای اوست و امروز پذیرفته نیست؛ برآوردهای نوین بسیار کمترند (بخش «سپاه» را ببینید).', en: 'The figures are Herodotus’ claim and are not accepted today; modern estimates are far lower (see the army section).' },
    sources: ['hdt', 'cawkwell', 'lazenby'],
  },
  {
    id: 'thrace', year: -480, when: { fa: 'تابستان ۴۸۰ پ.م.', en: 'summer 480 BCE' }, kind: 'campaign', coord: THERMA, route: [DORISCUS, [25.0, 41.0], [24.4, 40.95], [23.8, 40.75], THERMA], fleet: FLEET_OUT,
    title: { fa: 'از تراکیه و مقدونیه تا ترما', en: 'Through Thrace and Macedon to Therma' },
    body: { fa: 'سپاه در سه ستون از کرانهٔ تراکیه گذشت و ناوگان از کانال آتوس به ترما (تسالونیکی امروز) رسید. مقدونیه از دوران داریوش تابع بود؛ تسالی و بیشتر یونان شمالی «خاک و آب» دادند.', en: 'The army moved along the Thracian coast in three columns while the fleet passed through the Athos canal to Therma (modern Thessaloniki). Macedon had been subject since Darius; Thessaly and most of northern Greece gave “earth and water”.' },
    certainty: 'secure', sources: ['hdt', 'lazenby'],
  },
  {
    id: 'tempe', year: -480, when: { fa: 'تابستان ۴۸۰ پ.م.', en: 'summer 480 BCE' }, kind: 'campaign', coord: TEMPE, route: [THERMA, [22.6, 40.3], [22.3, 39.9], [22.4, 39.4], [22.45, 39.0]],
    title: { fa: 'تسالی: یونانیان تمپه را رها می‌کنند', en: 'Thessaly: the Greeks abandon Tempe' },
    body: { fa: 'ده هزار هوپلیت یونانی به دره‌تنگ تمپه رفتند، اما با دانستن راه‌های دیگر به تسالی بازگشتند. خشایارشا بی‌نبرد از تسالی گذشت و یونانیان دفاع را به ترموپیل و آرتمیسیون بردند.', en: 'Ten thousand Greek hoplites went to the Tempe pass but withdrew on learning of other routes into Thessaly. Xerxes crossed Thessaly unopposed, and the Greeks moved the defence south to Thermopylae and Artemisium.' },
    certainty: 'probable', sources: ['hdt', 'lazenby'],
  },
  {
    id: 'thermopylae', year: -480, when: { fa: 'اوت/سپتامبر ۴۸۰ پ.م.', en: 'Aug/Sept 480 BCE' }, kind: 'battle', coord: THERMOPYLAE, route: [[22.45, 39.0], [22.4, 38.85], THERMOPYLAE],
    title: { fa: 'ترموپیل', en: 'Thermopylae' },
    body: { fa: 'چند هزار یونانی به رهبری لئونیداس اسپارتی، از جمله ۳۰۰ اسپارتی، گذرگاه میان کوه و دریا را دو روز نگه داشتند. سپس افیالتس راه کوهستانی را نشان داد و یگانی ایرانی از پشت آمد. لئونیداس بیشتر یونانیان را بازفرستاد و با اسپارتیان و تسپیایی‌ها کشته شد (هرودوت ۷.۲۰۱–۲۳۳).', en: 'A few thousand Greeks under Leonidas of Sparta, including 300 Spartans, held the pass between mountain and sea for two days. Then Ephialtes showed the mountain path and a Persian force came round behind. Leonidas sent most of the Greeks away and died with the Spartans and Thespians (Herodotus 7.201–233).' },
    certainty: 'probable', certaintyNote: { fa: 'شمار یونانیان و جای دقیق «دیوار فوکیایی» و راه آنوپایا محل بحث است.', en: 'Greek numbers and the exact line of the Phocian wall and the Anopaea path are debated.' },
    sources: ['hdt', 'lazenby', 'cawkwell'],
  },
  {
    id: 'artemisium', year: -480, when: { fa: 'اوت/سپتامبر ۴۸۰ پ.م.', en: 'Aug/Sept 480 BCE' }, kind: 'battle', coord: ARTEMISIUM, fleet: FLEET_SOUTH,
    title: { fa: 'طوفان و آرتمیسیون', en: 'The storm and Artemisium' },
    body: { fa: 'پیش از نبرد، طوفانی در کرانهٔ ماگنزیا بسیاری از کشتی‌های ایرانی را شکست (۷.۱۸۸–۱۹۰) و دسته‌ای که دور اوبویا فرستاده شده بود غرق شد (۸.۷، ۸.۱۳). سه روز نبرد دریایی در آرتمیسیون بی‌نتیجه ماند؛ با خبر سقوط ترموپیل، ناوگان یونانی به سالامیس عقب رفت.', en: 'Before the battle a storm off Magnesia wrecked many Persian ships (7.188–190), and a squadron sent round Euboea was lost (8.7, 8.13). Three days of fighting at Artemisium were indecisive; on news of Thermopylae the Greek fleet withdrew to Salamis.' },
    certainty: 'probable', certaintyNote: { fa: 'اندازهٔ تلفات طوفان را هرودوت بزرگ نشان می‌دهد و شاید درست نباشد.', en: 'Herodotus’ storm losses are large and may be exaggerated.' },
    sources: ['hdt', 'lazenby'],
  },
  {
    id: 'acropolis', year: -480, when: { fa: 'سپتامبر ۴۸۰ پ.م.', en: 'September 480 BCE' }, kind: 'campaign', coord: ATHENS, route: [THERMOPYLAE, [22.8, 38.55], [23.25, 38.3], ATHENS], fleet: FLEET_EURIPUS,
    title: { fa: 'آتن تهی و آکروپلیس سوخته', en: 'Athens empty, the Acropolis burned' },
    body: { fa: 'آتنیان شهر را تخلیه کرده و خانواده‌ها را به سالامیس و ترزن برده بودند. ایرانیان آکروپلیس را پس از مقاومتی کوتاه گرفتند و پرستشگاه‌ها را سوزاندند (هرودوت ۸.۵۱–۵۵). در نگاه ایرانی این کیفر سوزاندن سارد بود.', en: 'The Athenians had evacuated the city, sending families to Salamis and Troezen. The Persians took the Acropolis after a brief resistance and burned its shrines (Herodotus 8.51–55). From the Persian side this answered the burning of Sardis.' },
    certainty: 'secure', certaintyNote: { fa: 'لایهٔ سوختهٔ آکروپلیس در کاوش‌ها پیدا شده است.', en: 'The burnt layer on the Acropolis has been found in excavation.' },
    sources: ['hdt', 'briant'],
  },
  {
    id: 'salamis', year: -480, when: { fa: 'سپتامبر ۴۸۰ پ.م.', en: 'September 480 BCE' }, kind: 'battle', coord: SALAMIS, fleet: [PHALERUM, [23.6, 37.9], SALAMIS],
    title: { fa: 'سالامیس', en: 'Salamis' },
    body: { fa: 'تمیستوکلس با پیامی دروغین شاه را به حمله کشاند (۸.۷۵). ناوگان ایرانی شبانه تنگه را بست و بامداد در آب‌های تنگ جنگید و شکست خورد. خشایارشا از کوه آیگالئوس نبرد را می‌دید (۸.۹۰). آرتمیسیا، ملکهٔ هالیکارناس، که از جنگ در دریا بر حذر داشته بود، در نبرد ماند (۸.۶۸، ۸.۸۷–۸۸).', en: 'Themistocles lured the king into attacking with a false message (8.75). The Persian fleet closed the strait overnight, fought in the narrows at dawn and was beaten. Xerxes watched from Mount Aegaleos (8.90). Artemisia, queen of Halicarnassus, who had advised against a sea battle, fought on (8.68, 8.87–88).' },
    certainty: 'probable', certaintyNote: { fa: 'آرایش شبانه و بامدادی ناوگان‌ها را منابع روشن نمی‌گویند (توپلین): دو بازسازی اصلی هست.', en: 'The sources do not make the night and dawn deployments clear (Tuplin): there are two main reconstructions.' },
    sources: ['hdt', 'aeschylus', 'tuplin'],
  },
  {
    id: 'return', year: -480, when: { fa: 'پاییز ۴۸۰ پ.م.', en: 'autumn 480 BCE' }, kind: 'campaign', coord: SARDIS, route: [ATHENS, [23.25, 38.3], [22.6, 39.4], THERMA, DORISCUS, SESTOS, ABYDOS, SARDIS],
    title: { fa: 'بازگشت شاه', en: 'The king goes home' },
    body: { fa: 'خشایارشا با بخشی از سپاه به سارد بازگشت و ماردونیه را با سپاهی برگزیده در یونان گذاشت (هرودوت سیصد هزار تن می‌گوید، ۸.۱۱۳). پل‌ها را طوفان برده بود و از تنگه با کشتی گذشتند (۸.۱۱۷).', en: 'Xerxes returned to Sardis with part of the army and left Mardonius in Greece with picked troops (Herodotus says 300,000, 8.113). Storms had wrecked the bridges, so they crossed by ship (8.117).' },
    certainty: 'probable', certaintyNote: { fa: 'شمار سپاه ماردونیه ادعای هرودوت است.', en: 'Mardonius’ numbers are Herodotus’ claim.' },
    sources: ['hdt', 'cawkwell'],
  },
  {
    id: 'plataea', year: -479, when: { fa: 'اوت ۴۷۹ پ.م.', en: 'August 479 BCE' }, kind: 'battle', coord: PLATAEA, route: [THERMA, [22.6, 39.4], [23.0, 38.6], ATHENS, PLATAEA],
    title: { fa: 'پلاته: مرگ ماردونیه', en: 'Plataea: Mardonius falls' },
    body: { fa: 'ماردونیه دوباره آتن را گرفت و سپس در بئوتیا با سپاه متحد یونانی به رهبری پاوسانیاس اسپارتی روبه‌رو شد. پس از روزها مانور، ماردونیه کشته شد و سپاه ایران از هم پاشید (هرودوت ۹.۶۳).', en: 'Mardonius retook Athens and then faced the allied Greek army under Pausanias of Sparta in Boeotia. After days of manoeuvre Mardonius was killed and the Persian army broke (Herodotus 9.63).' },
    certainty: 'secure', sources: ['hdt', 'lazenby'],
  },
  {
    id: 'mycale', year: -479, when: { fa: 'اوت ۴۷۹ پ.م.', en: 'August 479 BCE' }, kind: 'battle', coord: MYCALE, fleet: [[24.5, 37.4], [25.6, 37.4], SAMOS, MYCALE],
    title: { fa: 'میکاله', en: 'Mycale' },
    body: { fa: 'ناوگان یونانی به ساموس رفت؛ ناوگان ایرانی در میکاله به خشکی کشیده شده بود. یونانیان پیاده شدند، اردوگاه را گرفتند و کشتی‌ها را سوزاندند. هرودوت می‌گوید پلاته و میکاله در یک روز بود (۹.۱۰۰).', en: 'The Greek fleet crossed to Samos; the Persian fleet was beached at Mycale. The Greeks landed, stormed the camp and burned the ships. Herodotus says Plataea and Mycale fell on the same day (9.100).' },
    certainty: 'probable', certaintyNote: { fa: 'هم‌روزی دو نبرد شاید پرداخت ادبی هرودوت باشد.', en: 'The same-day claim may be Herodotus’ literary shaping.' },
    sources: ['hdt', 'lazenby'],
  },
  {
    id: 'aftermath', year: -479, when: { fa: '۴۷۹ پ.م. و پس از آن', en: '479 BCE and after' }, kind: 'admin', coord: SESTOS,
    title: { fa: 'پیامد', en: 'Aftermath' },
    body: { fa: 'یونانیان سستوس را گرفتند و جنگ به آسیا رفت؛ اتحادیهٔ دلوس (۴۷۸) زاده شد. برای ایران، یونان مرز دوری بود؛ امپراتوری نه فروپاشید و نه درآمدش افتاد، و دیپلماسی و طلا بعدها همان کاری را کرد که سپاه نکرد.', en: 'The Greeks took Sestos and the war moved to Asia; the Delian League (478) was born. For Persia, Greece was a distant frontier: the empire neither collapsed nor lost its revenue, and diplomacy and gold later did what the army had not.' },
    certainty: 'probable', certaintyNote: { fa: 'اهمیت شکست برای ایران تفسیر است؛ کاوکول آن را «شکست ایران» می‌خواند، بریان بر پیوستگی امپراتوری تأکید می‌کند.', en: 'How much the defeat mattered to Persia is interpretation: Cawkwell calls it “the failure of Persia”, Briant stresses imperial continuity.' },
    sources: ['cawkwell', 'briant'],
  },
]
