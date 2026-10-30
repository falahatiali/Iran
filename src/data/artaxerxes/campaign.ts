/**
 * War and peace in the west under Artaxerxes I, c. 460–439 BCE, as a zoomed campaign map.
 * Thucydides (Hobbes) is the spine; Ctesias and Diodorus are flagged where they differ.
 */
import type { Coord, MapEvent } from '../featured/types'
import { CITIUM, MEMPHIS, PAPREMIS, PROSOPITIS, SAMOS, SARDIS, SUSA } from './events'

const ATHENS: Coord = [23.73, 37.97]
const SPARTA: Coord = [22.43, 37.07]
const MENDES: Coord = [31.52, 30.96]
const CILICIA: Coord = [34.9, 36.85]
const PHASELIS: Coord = [30.55, 36.52]
const DAMASCUS: Coord = [36.3, 33.5]
const PELUSIUM: Coord = [32.55, 31.04]

const AEGEAN_TO_CYPRUS: Coord[] = [ATHENS, [24.6, 37.4], [26.5, 36.5], [28.5, 36.2], PHASELIS, [32.2, 35.6], CITIUM]
const CYPRUS_TO_NILE: Coord[] = [CITIUM, [33.0, 33.5], [32.3, 31.6], [31.5, 31.5], PAPREMIS, MEMPHIS]

export const artaxerxesPlaces: { name: { fa: string; en: string }; c: Coord; left?: boolean }[] = [
  { name: { fa: 'آتن', en: 'Athens' }, c: ATHENS, left: true },
  { name: { fa: 'اسپارت', en: 'Sparta' }, c: SPARTA, left: true },
  { name: { fa: 'سارد', en: 'Sardis' }, c: SARDIS },
  { name: { fa: 'ساموس', en: 'Samos' }, c: SAMOS, left: true },
  { name: { fa: 'فاسلیس', en: 'Phaselis' }, c: PHASELIS },
  { name: { fa: 'کیتیون (قبرس)', en: 'Citium (Cyprus)' }, c: CITIUM },
  { name: { fa: 'ممفیس', en: 'Memphis' }, c: MEMPHIS },
  { name: { fa: 'پروسوپیتیس', en: 'Prosopitis' }, c: PROSOPITIS, left: true },
  { name: { fa: 'مندس', en: 'Mendes' }, c: MENDES },
  { name: { fa: 'کیلیکیه', en: 'Cilicia' }, c: CILICIA },
]

export const artaxerxesCampaign: MapEvent[] = [
  {
    id: 'revolt', year: -460, when: { fa: 'حدود ۴۶۰ پ.م.', en: 'c. 460 BCE' }, kind: 'battle', coord: MEMPHIS,
    title: { fa: 'مصر می‌شورد', en: 'Egypt revolts' },
    body: { fa: 'ایناروس، پسر پسامتیک، «لیبیایی»، از مرز غربی دلتا بیشتر مصر را از اردشیر جدا کرد (توکودیدس ۱.۱۰۴).', en: 'Inaros son of Psammetichus, “an African”, carried most of Egypt away from Artaxerxes from the western edge of the Delta (Thucydides 1.104).' },
    certainty: 'disputed', certaintyNote: { fa: 'سال آغاز ۴۶۳ تا ۴۶۰ پیشنهاد شده است.', en: 'Start dates from 463 to 460 are proposed.' },
    sources: ['thuc', 'iranica', 'briant'],
  },
  {
    id: 'athens-sails', year: -460, when: { fa: 'حدود ۴۶۰ پ.م.', en: 'c. 460 BCE' }, kind: 'campaign', coord: MEMPHIS, fleet: [...AEGEAN_TO_CYPRUS, ...CYPRUS_TO_NILE.slice(1)],
    title: { fa: 'ناوگان آتن از قبرس به نیل', en: 'The Athenian fleet turns from Cyprus to the Nile' },
    body: { fa: 'آتنیان که با ۲۰۰ کشتی در قبرس می‌جنگیدند، قبرس را رها کردند و به نیل آمدند (توکودیدس ۱.۱۰۴). کتسیاس شمار را ۴۰ کشتی می‌گوید.', en: 'The Athenians, at war in Cyprus with 200 ships, left Cyprus and sailed up the Nile (Thucydides 1.104). Ctesias gives 40 ships.' },
    certainty: 'disputed', certaintyNote: { fa: 'شمار کشتی‌ها در توکودیدس و کتسیاس بسیار متفاوت است.', en: 'Thucydides and Ctesias differ widely on the number of ships.' },
    sources: ['thuc', 'ctesias'],
  },
  {
    id: 'papremis', year: -459, when: { fa: 'حدود ۴۵۹ پ.م.', en: 'c. 459 BCE' }, kind: 'battle', coord: PAPREMIS,
    title: { fa: 'کشته‌شدن هخامنش', en: 'Achaemenes falls' },
    body: { fa: 'هخامنش، ساتراپ مصر و برادر خشایارشا، در نبرد با ایناروس کشته شد؛ کتسیاس می‌گوید به دست خود ایناروس. هرودوت (۳.۱۲) از میدان نبردی در پاپرمیس یاد می‌کند که استخوان ایرانیان در آن پراکنده بود.', en: 'Achaemenes, satrap of Egypt and Xerxes’ brother, was killed fighting Inaros; Ctesias says by Inaros himself. Herodotus (3.12) mentions a battlefield at Papremis strewn with Persian bones.' },
    certainty: 'probable', certaintyNote: { fa: 'محل دقیق پاپرمیس معلوم نیست.', en: 'The exact location of Papremis is unknown.' },
    sources: ['ctesias', 'diodorus', 'hdt', 'briant'],
  },
  {
    id: 'white-wall', year: -459, when: { fa: '۴۵۹–۴۵۶ پ.م.', en: '459–456 BCE' }, kind: 'battle', coord: MEMPHIS,
    title: { fa: 'محاصرهٔ دیوار سپید', en: 'The siege of the White Wall' },
    body: { fa: 'آتنیان دو بخش ممفیس را گرفتند؛ پادگان ایرانی و مصریان وفادار در «دیوار سپید» ایستادگی کردند (توکودیدس ۱.۱۰۴).', en: 'The Athenians took two parts of Memphis; the Persian garrison and loyal Egyptians held out in the “White Wall” (Thucydides 1.104).' },
    certainty: 'probable', sources: ['thuc', 'diodorus'],
  },
  {
    id: 'sparta-gold', year: -457, when: { fa: 'حدود ۴۵۷ پ.م.', en: 'c. 457 BCE' }, kind: 'admin', coord: SPARTA, route: [SUSA, [44.0, 34.5], [36.0, 37.0], SARDIS, ATHENS, SPARTA],
    title: { fa: 'سیم شاهی به اسپارت', en: 'Royal silver for Sparta' },
    body: { fa: 'شاه مگابازوس نامی را با پول به لاکدمون فرستاد تا اسپارتیان را به حمله به آتن وادارد و آتنیان را از مصر بیرون بکشد؛ کار نگرفت و پول را بازگرداند (توکودیدس ۱.۱۰۹).', en: 'The king sent one Megabazus with money to Lacedaemon to persuade the Spartans to invade Attica and so draw the Athenians out of Egypt; it failed and he took the money back (Thucydides 1.109).' },
    certainty: 'probable', sources: ['thuc'],
  },
  {
    id: 'megabyzus-march', year: -456, when: { fa: '۴۵۶ پ.م.', en: '456 BCE' }, kind: 'campaign', coord: MEMPHIS, route: [CILICIA, DAMASCUS, [34.5, 31.5], PELUSIUM, MEMPHIS], fleet: [CILICIA, [34.3, 35.7], [34.0, 33.5], [33.0, 31.7], PELUSIUM],
    title: { fa: 'لشکرکشی مگابیز', en: 'Megabyzus marches' },
    body: { fa: 'مگابیز، پسر زوپیر، با سپاهی بزرگ و ناوگان فنیقی از کیلیکیه به مصر رفت، مصریان و آتنیان را شکست داد و ممفیس را آزاد کرد (توکودیدس ۱.۱۰۹).', en: 'Megabyzus son of Zopyrus brought a large army and a Phoenician fleet from Cilicia to Egypt, defeated the Egyptians and Athenians and relieved Memphis (Thucydides 1.109).' },
    certainty: 'probable', certaintyNote: { fa: 'راه دقیق سپاه طرح‌وار است.', en: 'The army’s exact route is schematic.' },
    sources: ['thuc', 'diodorus', 'ctesias'],
  },
  {
    id: 'prosopitis', year: -454, when: { fa: '۴۵۶–۴۵۴ پ.م.', en: '456–454 BCE' }, kind: 'battle', coord: PROSOPITIS,
    title: { fa: 'پروسوپیتیس: یک سال و نیم محاصره', en: 'Prosopitis: eighteen months’ siege' },
    body: { fa: 'مگابیز یونانیان را در جزیرهٔ پروسوپیتیس «یک سال و نیم» محاصره کرد، آبراه را برگرداند تا کشتی‌ها به خشکی نشستند، و جزیره را پیاده گرفت. ایناروس «با خیانت گرفتار و به چارمیخ کشیده شد» (توکودیدس ۱.۱۰۹–۱۱۰).', en: 'Megabyzus besieged the Greeks on the island of Prosopitis “a year and a half”, diverted the channel until the ships sat on dry land, and took the island on foot. Inaros was “taken by treason and crucified” (Thucydides 1.109–110).' },
    certainty: 'probable', certaintyNote: { fa: 'کتسیاس می‌گوید ایناروس با قول امان تسلیم شد و پنج سال بعد کشته شد.', en: 'Ctesias says Inaros surrendered under a promise of safety and was killed five years later.' },
    sources: ['thuc', 'ctesias'],
  },
  {
    id: 'mendes', year: -454, when: { fa: '۴۵۴ پ.م.', en: '454 BCE' }, kind: 'battle', coord: MENDES, fleet: [CITIUM, [32.8, 33.0], [31.9, 31.6], MENDES],
    title: { fa: 'نابودی ناوگان کمکی در مندس', en: 'The relief fleet destroyed at Mendes' },
    body: { fa: 'پنجاه کشتی دیگر آتنی که بی‌خبر از شکست به شاخهٔ مندسی نیل آمدند، به دست سپاه و ناوگان فنیقی نابود شدند. آمیرتایوس در مرداب‌ها ایستادگی کرد (توکودیدس ۱.۱۱۰).', en: 'Fifty more Athenian ships, arriving at the Mendesian mouth of the Nile unaware of the defeat, were destroyed by the army and the Phoenician fleet. Amyrtaeus held out in the marshes (Thucydides 1.110).' },
    certainty: 'probable', sources: ['thuc'],
  },
  {
    id: 'cimon', year: -450, when: { fa: 'حدود ۴۵۰ پ.م.', en: 'c. 450 BCE' }, kind: 'campaign', coord: CITIUM, fleet: AEGEAN_TO_CYPRUS,
    title: { fa: 'کیمون در قبرس', en: 'Cimon at Cyprus' },
    body: { fa: 'کیمون با ۲۰۰ کشتی به قبرس رفت و کیتیون را محاصره کرد و همان‌جا مرد؛ ناوگان در بازگشت در برابر سالامیسِ قبرس پیروز شد (توکودیدس ۱.۱۱۲).', en: 'Cimon sailed to Cyprus with 200 ships, besieged Citium and died there; on the way home the fleet won off Cypriot Salamis (Thucydides 1.112).' },
    certainty: 'probable', sources: ['thuc', 'diodorus'],
  },
  {
    id: 'callias', year: -449, when: { fa: '۴۴۹/۴۴۸ پ.م.', en: '449/448 BCE' }, kind: 'admin', coord: PHASELIS,
    title: { fa: 'صلح کالیاس: مرز روی دریا', en: 'The Peace of Callias: a line on the sea' },
    body: { fa: 'به گفتهٔ دیودور (۱۲.۴)، کشتی جنگی ایرانی نباید از فاسلیس به این سو بیاید و ساتراپ‌ها باید سه روز راه از دریا دور بمانند؛ در برابر، آتن به سرزمین شاه لشکر نکشد.', en: 'According to Diodorus (12.4), no Persian warship was to sail inside Phaselis and the satraps were to stay three days’ journey from the sea; in return Athens would not invade the king’s land.' },
    certainty: 'disputed', certaintyNote: { fa: 'توکودیدس خاموش است و تئوپمپوس آن را جعلی خواند؛ وجود پیمان رسمی محل بحث است.', en: 'Thucydides is silent and Theopompus called it a forgery; whether a formal treaty existed is disputed.' },
    sources: ['diodorus', 'iranica', 'briant'],
  },
  {
    id: 'samos', year: -440, when: { fa: '۴۴۰–۴۳۹ پ.م.', en: '440–439 BCE' }, kind: 'campaign', coord: SAMOS, route: [SARDIS, SAMOS],
    title: { fa: 'ساموس: ساتراپ در بازی یونانی', en: 'Samos: a satrap in the Greek game' },
    body: { fa: 'پیسوتنس، ساتراپ سارد، به شورشیان ساموسی بر ضد آتن یاری رساند و گروگان‌های آتنی را به آنان سپرد (توکودیدس ۱.۱۱۵). صلح، هر چه بود، دیپلماسی پنهان را پایان نداد.', en: 'Pissuthnes, satrap at Sardis, aided the Samian rebels against Athens and handed Athenian hostages over to them (Thucydides 1.115). The peace, whatever it was, did not end covert diplomacy.' },
    certainty: 'probable', sources: ['thuc', 'iranica'],
  },
]
