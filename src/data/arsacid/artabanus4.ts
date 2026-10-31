/**
 * Artabanus IV (c. 213–224), the last Great King of the Arsacids (Iranica numbers him “Artabanus V”).
 * Narrative: Herodian 4.10–11, 4.14–15, 6.2 (Echols) quoted; Iranica (Schippmann “Arsacids ii”, Wiesehöfer “Ardašīr I”) paraphrased.
 * Cassius Dio (books 79–80) could not be fetched this round; where his version matters we say what Iranica reports, not what Dio says.
 */
import type { BattleDiagram, BattleUnit, Bi, FeaturedKing } from '../featured/types'
import { ARBELA, CTESIPHON, ECBATANA, EDESSA, FIRUZABAD, HORMOZGAN, NISIBIS, PAR, PERSIS, SELEUCIA, battleClipFor, clipFor, ev, note, photos, pick, related, sec } from './common'

const B = (fa: string, en: string): Bi => ({ fa, en })

const PROPOSAL = note('هرودیان می‌گوید اردوان پس از درنگ پذیرفت و کاراکالا در جشن عروسی به میهمانان بی‌سلاح تاخت. ایرانیکا (شیپمان) می‌گوید اردوان درخواست را رد کرد و همین بهانهٔ جنگ شد؛ این روایت دیگر با گزارش دیو کاسیوس پیوند دارد، که این صفحه هنوز مستقیم بررسی نکرده است. داستان کشتار در جشن تنها از هرودیان است.', 'Herodian says Artabanus agreed after some hesitation and Caracalla fell on the unarmed guests at the wedding feast. Iranica (Schippmann) says Artabanus turned the request down, which gave Caracalla his pretext for war; that version is linked to Cassius Dio’s account, which this page has not yet checked directly. The massacre at the feast is Herodian’s alone.')
const NISIBIS_NOTE = note('هرودیان نبرد را سه‌روزه و بی‌برنده می‌گوید و صلح را کار ماکرینوس. ایرانیکا از شرایط صلح نتیجه می‌گیرد که رومیان در نصیبین شکست خوردند: روم در آغاز ۲۱۸ م. پنجاه میلیون دینار نقد و هدیه به شاه و بزرگان پارت داد.', 'Herodian makes it a three-day battle with no winner and credits the peace to Macrinus. Iranica infers from the peace terms that the Romans were defeated at Nisibis: early in 218 CE Rome paid the Parthian king and nobles fifty million denarii in cash and gifts.')

const split = ev('split', 213, B('حدود ۲۱۳ م.', 'c. 213 CE'), 'admin', ECBATANA, B('برادر بر برادر', 'Brother against brother'), B('ایرانیکا: اردوان، پسر کوچک‌تر بلاش پنجم، در حدود ۲۱۳ م. بر برادرش بلاش ششم شورید. درهم‌های او در هگمتانه (همدان) ضرب شده‌اند؛ نشانه بر همین است.', 'Iranica: Artabanus, the younger son of Vologases V, rose against his brother Vologases VI about 213 CE. His drachms were struck at Ecbatana (Hamadan), which the marker follows.'), 'probable', ['ir-arsacids', 'sellwood'], note('پایگاه دقیق او در منابع نیامده؛ هگمتانه تنها جای ضرب سکه‌های اوست که در اینجا نشان می‌دهیم.', 'His exact base is not stated in the sources; Ecbatana is only where the coins shown here were struck.'))
const proposal = ev('proposal', 216, B('۲۱۶ م.', '216 CE'), 'admin', CTESIPHON, B('خواستگاری کاراکالا', 'Caracalla’s marriage proposal'), B('هرودیان: کاراکالا، که لقب «پارتیکوس» را می‌خواست، با هدایای گران به اردوان نوشت که دخترش را به همسری می‌خواهد تا دو امپراتوری بزرگ جهان یکی شوند. اردوان نخست نپذیرفت: زبان و خوراک و پوشاک دو قوم یکی نیست.', 'Herodian: Caracalla, who wanted the title “Parthicus”, wrote to Artabanus with costly gifts asking for his daughter’s hand, so that the two greatest empires in the world would become one. At first Artabanus refused: the two peoples did not share a language, a diet or a dress.'), 'disputed', ['herodian', 'ir-arsacids'], PROPOSAL)
const march = ev('march', 216, B('۲۱۶ م.', '216 CE'), 'campaign', ARBELA, B('کاراکالا از دجله می‌گذرد', 'Caracalla crosses the Tigris'), B('هرودیان: کاراکالا بی‌مانع از رودها گذشت و مردم با قربانی و بخور به پیشوازش آمدند. ایرانیکا: سپاه کاراکالا تا اربیل، پایتخت حدیاب، پیش رفت. یادداشت لیویوس بر هرودیان می‌افزاید که او در اربیل گورهای شاهان حدیاب را ویران کرد.', 'Herodian: Caracalla crossed the rivers unopposed and people met him with sacrifices and incense. Iranica: Caracalla’s army advanced as far as Arbela, the capital of Adiabene. The Livius note on Herodian adds that at Arbela he destroyed the tombs of the kings of Adiabene.'), 'probable', ['herodian', 'ir-arsacids'], { ...note('ویرانی گورهای اربیل را از دیو کاسیوس می‌دانند؛ این صفحه آن را تنها از یادداشت لیویوس آورده است.', 'The destruction of the Arbela tombs is usually credited to Cassius Dio; this page reports it only from the Livius note.'), route: [EDESSA, NISIBIS, ARBELA] })
const massacre = ev('massacre', 216, B('۲۱۶ م.', '216 CE'), 'battle', ARBELA, B('کشتار در جشن عروسی', 'The massacre at the wedding feast'), B('هرودیان: پارتیان با تاج گل و جامه‌های زربفت، بی‌اسب و بی‌کمان، به پیشواز «داماد» آمدند. با نشانه‌ای، رومیان بر آنان تاختند. اردوان را نگهبانانش بر اسبی نشاندند و او با چند تن به‌سختی گریخت. کاراکالا شهرها و روستاها را سوزاند و به سنا نوشت که سراسر شرق را رام کرده است.', 'Herodian: the Parthians came out to meet the “bridegroom” in garlands and gold-embroidered robes, without horses or bows. At a signal the Romans fell on them. Artabanus’ guards put him on a horse and he barely escaped with a few companions. Caracalla burned towns and villages and wrote to the Senate that the whole East was subdued.'), 'disputed', ['herodian'], note('تنها هرودیان این کشتار را گزارش می‌کند و جای آن را نمی‌گوید («شهری» نزدیک کاخ اردوان). نشانه روی اربیل است، دورترین جایی که ایرانیکا برای کاراکالا می‌آورد. ایرانیکا می‌گوید کاراکالا «پیروزی قاطعی» به دست نیاورد.', 'Only Herodian reports the massacre, and he does not name the place (a “city” near Artabanus’ palace). The marker sits at Arbela, the furthest point Iranica gives for Caracalla. Iranica says Caracalla achieved no decisive victory.'))
const nisibis = ev('nisibis', 217, B('تابستان ۲۱۷ م.', 'summer 217 CE'), 'battle', NISIBIS, B('پیروزی بر ماکرینوس در نصیبین', 'Victory over Macrinus at Nisibis'), B('کاراکالا در آوریل ۲۱۷ م. کشته شد و سپاه ماکرینوس را امپراتور کرد. اردوان با سپاهی بزرگ، سوار و کماندار و شترسواران زره‌پوش، به خونخواهی آمد. هرودیان: دو سپاه سه روز جنگیدند تا دشت از کشته‌ها پوشیده شد. ایرانیکا: رومیان شکست خوردند و برای صلح پنجاه میلیون دینار پرداختند.', 'Caracalla was killed in April 217 CE and the army made Macrinus emperor. Artabanus came for revenge with a great army of horsemen, archers and mail-clad camel riders. Herodian: the two armies fought for three days until the plain was covered with the dead. Iranica: the Romans were defeated and paid fifty million denarii for peace.'), 'disputed', ['herodian', 'ir-arsacids'], NISIBIS_NOTE)
const peace = ev('peace', 218, B('آغاز ۲۱۸ م.', 'early 218 CE'), 'admin', SELEUCIA, B('صلح و غرامت', 'Peace and reparations'), B('ایرانیکا: روم در آغاز ۲۱۸ م. پنجاه میلیون دینار به شاه و بزرگان پارت پرداخت. هرودیان: اردوان، که سپاهش زخم‌خورده بود، به بازگرداندن اسیران و دارایی‌ها خرسند شد و صلح کرد.', 'Iranica: early in 218 CE Rome paid the Parthian king and nobles fifty million denarii. Herodian: Artabanus, whose army was badly wounded, was content to recover the captives and property and made peace.'), 'probable', ['ir-arsacids', 'herodian'])
const ardashir = ev('ardashir', 220, B('از حدود ۲۲۰ م.', 'from c. 220 CE'), 'campaign', PERSIS, B('برخاستن اردشیر در پارس', 'Ardashir rises in Persis'), B('ایرانیکا: اردشیر، فرمانروای کوچکی در پارس، از حدود ۲۲۰ م. سرزمین‌های نزدیک و دورتر، چون کرمان و الیمایی (خوزستان)، را گرفت. اردوان دیر دست به کار شد.', 'Iranica: Ardashir, a minor vassal in Persis, from about 220 CE subdued nearby lands and others further off, such as Kerman and Elymais (Khuzestan). Artabanus acted too late.'), 'probable', ['ir-arsacids', 'ir-ardashir'])
const hormozgan = ev('hormozgan', 224, B('۲۸ آوریل ۲۲۴ م. (احتمالاً)', '28 April 224 CE (probably)'), 'battle', HORMOZGAN, B('هرمزدگان: پایان اشکانیان', 'Hormozgan: the end of the Arsacids'), B('ایرانیکا: نبرد سرنوشت‌ساز در دشت هرمزدگان در ماد رخ داد و جان اردوان را گرفت. اردشیر همان‌جا لقب «شاهنشاه» گرفت. هرودیان: «اردشیر اردوان را کشت و پادشاهی او را برای پارسیان گرفت.»', 'Iranica: the decisive battle was fought on the plain of Hormozgan in Media and cost Artabanus his life. Ardashir took the title “King of Kings” on the field. Herodian: “Artaxerxes killed Artabanus and took possession of his kingdom for the Persians.”'), 'disputed', ['ir-ardashir', 'ir-arsacids', 'herodian'], { ...note('تاریخ ۲۸ آوریل ۲۲۴ از نولدکه است و ایرانیکا (شیپمان) آن را «احتمالاً» می‌آورد. جای نبرد هم دقیق نیست: ایرانیکا آن را نزدیک گلپایگان امروزی، میان اصفهان و نهاوند، می‌گذارد (به پیروی از ویدنگرن). تاج‌گذاری رسمی اردشیر در تیسفون را برخی منابع ۲۲۶ م. می‌دانند.', 'The date 28 April 224 is Nöldeke’s, and Iranica (Schippmann) gives it as “probably”. The site is not exact either: Iranica places it near modern Golpayegan, between Isfahan and Nahavand (following Widengren). Some sources date Ardashir’s formal coronation at Ctesiphon to 226 CE.'), route: [PERSIS, HORMOZGAN] })

const P = (id: string, fa: string, en: string, at: [number, number]): BattleUnit => ({ id, side: 'persian', kind: 'army', label: { fa, en }, at })
const R = (id: string, fa: string, en: string, at: [number, number]): BattleUnit => ({ id, side: 'greek', kind: 'army', label: { fa, en }, at })
const SKETCH = B('تنها هرودیان نبرد را وصف می‌کند؛ جای‌ها ویرایشی و طرح‌وارند.', 'Only Herodian describes the battle; positions are editorial and schematic.')

const nisibisBattle: BattleDiagram = {
  id: 'nisibis',
  title: B('نصیبین، گام‌به‌گام (طرح‌وار)', 'Nisibis, step by step (schematic)'),
  when: B('تابستان ۲۱۷ م.، سه روز', 'summer 217 CE, three days'),
  sides: { persian: B('پارتیان', 'Parthians'), greek: B('رومیان', 'Romans') },
  land: ['M0 0 L100 0 L100 60 L0 60 Z'],
  labels: [
    { at: [50, 4], text: B('اردوگاه رومی (به سوی نصیبین)', 'Roman camp (towards Nisibis)') },
    { at: [50, 58], text: B('اردوگاه پارتی', 'Parthian camp') },
  ],
  phases: [
    {
      id: 'dawn', title: B('یورش در سپیده‌دم', 'The charge at sunrise'),
      body: B('اردوان با برآمدن خورشید پدیدار شد. پارتیان به رسم خود به خورشید درود گفتند، با فریاد یورش آوردند و تیر باریدند. ماکرینوس سواران و نیزه‌اندازان موری را در دو جناح گذاشت و سربازان سبک را در فاصله‌های صف.', 'Artabanus appeared at sunrise. The Parthians saluted the sun, as was their custom, charged with a great shout and shot their arrows. Macrinus put his cavalry and Moorish javelin men on the wings and light troops in the gaps of the line.'),
      units: [R('left', 'سواران و موری‌ها', 'Cavalry & Moors', [22, 16]), R('centre', 'لژیون‌ها', 'Legions', [50, 16]), R('right', 'سواران و موری‌ها', 'Cavalry & Moors', [78, 16]), P('horse', 'سواران کماندار', 'Horse archers', [35, 42]), P('camels', 'شترسواران زره‌پوش', 'Mail-clad camel riders', [62, 44]), P('king', 'اردوان', 'Artabanus', [50, 52])],
      arrows: [{ side: 'persian', path: [[35, 40], [38, 22]] }, { side: 'persian', path: [[62, 42], [58, 22]] }],
      certainty: 'probable', certaintyNote: SKETCH, sources: ['herodian'],
    },
    {
      id: 'caltrops', title: B('گریز ساختگی و خارهای آهنین', 'Feigned retreat and caltrops'),
      body: B('تیرها و نیزه‌های بلند شترسواران زخم بسیار زدند. رومیان وانمود کردند واپس می‌روند و خارهای آهنین بر زمین ریختند. ریگ آن‌ها را پوشاند؛ اسب‌ها و شترها پا بر آن‌ها گذاشتند و افتادند، و سوارانِ بر زمین افتاده در جنگ تن‌به‌تن ناتوان بودند.', 'The arrows and the camel riders’ long spears did great damage. The Romans pretended to retreat and scattered caltrops. Sand covered them; horses and camels stepped on them and fell, and riders thrown to the ground were helpless at close quarters.'),
      units: [R('left', 'سواران و موری‌ها', 'Cavalry & Moors', [22, 12]), R('centre', 'لژیون‌ها', 'Legions', [50, 10]), R('right', 'سواران و موری‌ها', 'Cavalry & Moors', [78, 12]), P('horse', 'سواران کماندار', 'Horse archers', [36, 28]), P('camels', 'شترسواران (می‌افتند)', 'Camel riders (falling)', [60, 28]), P('king', 'اردوان', 'Artabanus', [50, 50])],
      arrows: [{ side: 'greek', path: [[50, 18], [50, 11]] }, { side: 'persian', path: [[60, 40], [60, 30]] }],
      certainty: 'probable', certaintyNote: SKETCH, sources: ['herodian'],
    },
    {
      id: 'day3', title: B('روز سوم: کوشش برای محاصره', 'Day three: the attempt to encircle'),
      body: B('دو روز از بام تا شام جنگیدند و هر دو سو شب‌هنگام خود را پیروز خواندند. روز سوم پارتیان، که شمارشان بسیار بیشتر بود، کوشیدند رومیان را دور بزنند. رومیان ژرفای صف را کم کردند و جبهه را گشادتر کردند تا راه محاصره را ببندند. کشته‌ها چنان انباشته شد که دو سپاه یکدیگر را نمی‌دیدند.', 'For two days they fought from morning to evening, and each side claimed victory at nightfall. On the third day the Parthians, far more numerous, tried to surround the Romans. The Romans thinned their depth and widened their front to block the encirclement. The dead piled up so high that the armies could not see each other.'),
      units: [R('left', 'جناح چپ', 'Left wing', [8, 18]), R('centre', 'لژیون‌ها (صف گشاده)', 'Legions (widened line)', [50, 18]), R('right', 'جناح راست', 'Right wing', [92, 18]), P('wl', 'سواران', 'Horsemen', [12, 34]), P('wr', 'سواران', 'Horsemen', [88, 34]), P('camels', 'شترسواران', 'Camel riders', [50, 40]), P('king', 'اردوان', 'Artabanus', [50, 52])],
      arrows: [{ side: 'persian', path: [[30, 40], [12, 34], [6, 24]] }, { side: 'persian', path: [[70, 40], [88, 34], [94, 24]] }, { side: 'greek', path: [[30, 18], [10, 18]] }, { side: 'greek', path: [[70, 18], [90, 18]] }],
      certainty: 'probable', certaintyNote: SKETCH, sources: ['herodian'],
    },
    {
      id: 'peace', title: B('پایان: صلح با بها', 'The end: a peace that cost Rome'),
      body: B('ماکرینوس پیام فرستاد که کار کاراکالا را نمی‌پسندد و اسیران و دارایی‌ها را باز می‌دهد. اردوان، که دانست کاراکالا مرده و سپاهش هم زخم‌خورده بود، صلح کرد و بازگشت. ایرانیکا: شرایط صلح نشان می‌دهد رومیان شکست خوردند؛ روم پنجاه میلیون دینار پرداخت.', 'Macrinus sent word that he disapproved of Caracalla’s acts and would return the captives and property. Artabanus, learning that Caracalla was dead and with his own army wounded, made peace and went home. Iranica: the terms show the Romans were defeated; Rome paid fifty million denarii.'),
      units: [R('centre', 'ماکرینوس', 'Macrinus', [50, 10]), P('king', 'اردوان', 'Artabanus', [50, 50])],
      arrows: [{ side: 'greek', path: [[50, 14], [50, 44]] }],
      certainty: 'disputed', certaintyNote: NISIBIS_NOTE.certaintyNote, sources: ['herodian', 'ir-arsacids'],
    },
  ],
}

export const artabanusIV: FeaturedKing = {
  slug: 'artabanus-iv', name: B('اردوان چهارم', 'Artabanus IV'), dynastyName: PAR,
  reign: B('حدود ۲۱۳–۲۲۴ م.', 'c. 213–224 CE'),
  title: B('اردوان چهارم؛ فریب کاراکالا، پیروزی نصیبین و پایان در هرمزدگان', 'Artabanus IV: Caracalla’s deceit, victory at Nisibis, and the end at Hormozgan'),
  lede: B(
    'واپسین شاه بزرگ اشکانی. اردوان بر برادرش بلاش ششم شورید و در چشم روم شاه پارت شد. به روایت هرودیان، امپراتور کاراکالا در ۲۱۶ م. به خواستگاری دخترش آمد و در جشن عروسی به میهمانان بی‌سلاح تاخت. یک سال بعد اردوان به خونخواهی آمد و در نبردی سه‌روزه در نصیبین ماکرینوس را به پرداخت غرامتی بزرگ واداشت. اما خطر اصلی در پارس بود: در ۲۲۴ م. اردشیر بابکان او را در هرمزدگان شکست داد و کشت. چهار و نیم سده فرمانروایی اشکانیان پایان یافت.',
    'The last Great King of the Arsacids. Artabanus rose against his brother Vologases VI and became, in Rome’s eyes, the king of Parthia. According to Herodian, the emperor Caracalla came in 216 CE to marry his daughter and at the wedding feast fell on the unarmed guests. A year later Artabanus came for revenge and, after a three-day battle at Nisibis, forced Macrinus to pay a great indemnity. But the real danger was in Persis: in 224 CE Ardashir defeated and killed him at Hormozgan. Four and a half centuries of Arsacid rule came to an end.'),
  stats: [
    { n: B('~۱۱', '~11'), l: B('سال پادشاهی', 'years of reign') },
    { n: B('۳', '3'), l: B('روز نبرد نصیبین (هرودیان)', 'days of battle at Nisibis (Herodian)') },
    { n: B('۵۰ میلیون', '50 million'), l: B('دینار غرامت روم (ایرانیکا)', 'denarii paid by Rome (Iranica)') },
    { n: B('~۴۷۵', '~475'), l: B('سال فرمانروایی اشکانیان', 'years of Arsacid rule') },
  ],
  mapTitle: B('نقشهٔ متحرک: زندگی اردوان چهارم', 'Animated map: the life of Artabanus IV'),
  events: [split, proposal, march, massacre, nisibis, peace, ardashir, hormozgan], span: [213, 224],
  campaign: {
    id: 'reign',
    title: B('از اربیل تا نصیبین و هرمزدگان، گام‌به‌گام (۲۱۳–۲۲۴ م.)', 'From Arbela to Nisibis and Hormozgan, step by step (213–224 CE)'),
    intro: {
      fa: ['جنگ برادران، فریب کاراکالا، نبرد نصیبین و برخاستن اردشیر تا نبرد هرمزدگان. هر گام می‌گوید قطعی، محتمل یا محل بحث است. منابع روایی رومی‌اند (هرودیان) یا سده‌ها بعد نوشته شده‌اند (طبری، به نقل ایرانیکا)؛ مسیرها طرح‌وارند. نمودار گام‌به‌گام نبرد نصیبین زیر نقشه است.'],
      en: ['The brothers’ war, Caracalla’s deceit, the battle of Nisibis and Ardashir’s rise to the battle of Hormozgan. Each step says whether it is secure, probable or disputed. The narrative sources are Roman (Herodian) or written centuries later (Tabari, via Iranica); the routes are sketches. The step-by-step diagram of Nisibis is below the map.'],
    },
    events: [split, march, massacre, nisibis, peace, ardashir, hormozgan], span: [213, 224], view: [37, 27.5, 54.5, 39.5],
    places: [
      { name: B('تیسفون', 'Ctesiphon'), c: CTESIPHON, left: true }, { name: B('هگمتانه', 'Ecbatana'), c: ECBATANA },
      { name: B('اربیل', 'Arbela'), c: ARBELA }, { name: B('نصیبین', 'Nisibis'), c: NISIBIS }, { name: B('رها (ادسا)', 'Edessa'), c: EDESSA, left: true },
      { name: B('هرمزدگان (گلپایگان؟)', 'Hormozgan (Golpayegan?)'), c: HORMOZGAN }, { name: B('پارس', 'Persis'), c: PERSIS }, { name: B('فیروزآباد (گور)', 'Firuzabad (Gur)'), c: FIRUZABAD },
    ],
    clip: clipFor('artabanus-iv'),
    battles: [nisibisBattle],
  },
  shareImage: '/media/artabanus-iv/reign-en.png',
  dossier: [
    sec('proposal', 'خواستگاری کاراکالا (۲۱۶ م.)', 'Caracalla’s proposal (216 CE)',
      [['هرودیان، هم‌روزگار رخدادها: کاراکالا می‌خواست لقب «پارتیکوس» بگیرد و به روم بنویسد که همهٔ شرق را گشوده است، «هرچند همه جا صلح بود». پس با هدایای گران به اردوان نوشت که دخترش را می‌خواهد: روم و پارت بزرگ‌ترین امپراتوری‌های جهان‌اند، پیاده‌نظام روم و کمانداران سوار پارت مکمل یکدیگرند، و ادویه و پارچهٔ پارت و فلز روم دیگر قاچاق نمی‌شوند. اردوان نخست نپذیرفت، سپس پذیرفت. پارتیان بی‌اسب و بی‌کمان به جشن آمدند و رومیان با نشانه‌ای بر آنان تاختند. اردوان به‌سختی گریخت.', 'ایرانیکا روایت دیگری می‌آورد: اردوان درخواست را رد کرد و همین بهانهٔ جنگ شد. خود درخواست، به گفتهٔ ایرانیکا، گواه روشنی است که اردوان در آن زمان شاه بود. کاراکالا تا اربیل پیش رفت، اما «پیروزی قاطعی» به دست نیاورد.'],
        ['Herodian, a contemporary: Caracalla wanted the title “Parthicus” and to report to Rome that he had conquered the whole East, “even though there was peace everywhere”. So he wrote to Artabanus with costly gifts asking for his daughter: Rome and Parthia were the greatest empires in the world, Roman infantry and Parthian horse archers complemented each other, and Parthian spices and cloth and Roman metals would no longer be smuggled. Artabanus at first refused, then agreed. The Parthians came to the feast without horses or bows, and at a signal the Romans fell on them. Artabanus barely escaped.', 'Iranica gives another version: Artabanus turned the request down, and that gave Caracalla his pretext for war. The request itself, Iranica says, is clear evidence that Artabanus was then the king. Caracalla got as far as Arbela but achieved no decisive victory.']],
      [['دو روایت با هم نمی‌خوانند: در یکی، شاه می‌پذیرد و فریب می‌خورد؛ در دیگری، رد می‌کند و جنگ می‌آید. هرودیان دوست دارد داستان را نمایشی کند و کشتار در جشن تنها در گزارش اوست. با این همه هر دو روایت در یک چیز همداستان‌اند: کاراکالا جنگی بی‌دلیل را آغاز کرد. خود هرودیان از زبان ماکرینوس می‌گوید: «ما پیمان را شکستیم و در زمان صلح کامل جنگ را آغاز کردیم.»'],
        ['The two versions do not agree: in one the king accepts and is tricked; in the other he refuses and war follows. Herodian likes to dramatize, and the massacre at the feast is in his account alone. Still, both versions agree on one thing: Caracalla started a war without cause. Herodian himself has Macrinus say: “We provoked him by breaking the treaty, and in a time of complete peace we started a war.”']],
      [['نامهٔ کاراکالا تصویر زیبایی از بازرگانی آزاد میان دو امپراتوری می‌کشد: کالاها دیگر «کمیاب و قاچاق» نباشند. اما همین نامه پوششی برای فریب بود. وعدهٔ بازار آزاد از دهان کسی که به پیمان پایبند نیست، ارزشی ندارد؛ بازرگانی بر اعتماد استوار است و اعتماد بر پایبندی به پیمان.'],
        ['Caracalla’s letter paints a fine picture of free trade between two empires: goods would no longer be “scarce and smuggled”. Yet the same letter was cover for a trick. A promise of free markets from a man who does not keep treaties is worthless; trade rests on trust, and trust rests on keeping one’s word.']],
      ['herodian', 'ir-arsacids'], {
        quotes: [
          { text: 'Since the Parthians produced spices and excellent textiles and the Romans metals and manufactured articles, these products would no longer be scarce and smuggled by merchants; rather, when there was one world under one supreme authority, both peoples would enjoy these goods and share them in common.', fa: 'چون پارتیان ادویه و پارچه‌های عالی می‌سازند و رومیان فلز و کالاهای ساخته‌شده، این فرآورده‌ها دیگر کمیاب نخواهند بود و بازرگانان آن‌ها را قاچاقی جابه‌جا نخواهند کرد؛ بلکه چون جهان یکی و زیر یک فرمان باشد، هر دو قوم از این کالاها بهره خواهند برد و در آن‌ها شریک خواهند بود.', ref: 'Herodian 4.10.4', source: 'herodian' },
          { text: 'Then the signal was given, and Caracalla ordered his army to attack and massacre the spectators.', fa: 'آن‌گاه نشانه داده شد و کاراکالا به سپاهش فرمان داد بر تماشاگران بتازند و آنان را بکشند.', ref: 'Herodian 4.11.5', source: 'herodian' },
        ],
        photos: ['coin-artabanus4'],
      }),
    sec('nisibis', 'نصیبین (۲۱۷ م.)', 'Nisibis (217 CE)',
      [['کاراکالا در آوریل ۲۱۷ م. کشته شد و سپاه، پس از دو روز بی‌امپراتوری، ماکرینوس را برگزید. هرودیان: اردوان با سپاهی بزرگ، با سواران نیرومند، کمانداران و شترسوارانی زره‌پوش که از بالای شتر نیزه می‌انداختند، به خونخواهی آمد. نبرد سه روز طول کشید. پارتیان با تیر و نیزه زخم بسیار زدند؛ رومیان با گریز ساختگی و خارهای آهنین اسب‌ها و شترها را انداختند. روز سوم پارتیان کوشیدند رومیان را دور بزنند و رومیان جبهه را گشادتر کردند. سرانجام ماکرینوس پیام صلح فرستاد و وعدهٔ بازگرداندن اسیران و دارایی‌ها داد.', 'ایرانیکا: پارتیان بیرون رفتن روم از میان‌رودان و جبران زیان‌ها را خواستند. ماکرینوس نپذیرفت، جنگ ادامه یافت و رومیان در نصیبین شکست خوردند؛ این را شرایط صلح نشان می‌دهد: روم در آغاز ۲۱۸ م. پنجاه میلیون دینار نقد و هدیه به شاه و بزرگان پارت داد.'],
        ['Caracalla was killed in April 217 CE and the army, after two days without an emperor, chose Macrinus. Herodian: Artabanus came for revenge with a great army, strong cavalry, archers and mail-clad soldiers who threw spears from camels. The battle lasted three days. The Parthians did heavy damage with arrows and spears; the Romans brought down horses and camels with a feigned retreat and caltrops. On the third day the Parthians tried to outflank the Romans, who widened their front. In the end Macrinus sent peace terms and promised to return the captives and property.', 'Iranica: the Parthians demanded Rome’s withdrawal from Mesopotamia and restitution for the damage. Macrinus refused, the war went on, and the Romans were defeated at Nisibis, as the peace terms show: early in 218 CE Rome paid the Parthian king and nobles fifty million denarii in cash and gifts.']],
      [['هرودیان، که رومی بود، نبرد را بی‌برنده می‌خواند. اما سپاهی که برنده باشد غرامت نمی‌دهد؛ ایرانیکا از همین نتیجه می‌گیرد که پیروزی از آنِ اردوان بود. این آخرین پیروزی بزرگ اشکانیان بر روم بود. نمودار زیر نبرد را گام‌به‌گام، طرح‌وار و تنها بر پایهٔ هرودیان، نشان می‌دهد.'],
        ['Herodian, a Roman, calls the battle a draw. But a winning army does not pay reparations; Iranica infers from this that the victory was Artabanus’. It was the last great Arsacid victory over Rome. The diagram below shows the battle step by step, schematically and on Herodian’s account alone.']],
      [['اردوان برای خونخواهی آمد، اما با پس گرفتن اسیران و دارایی‌ها صلح کرد. جنگی که با فریب آغاز شده بود، با جبران زیان پایان یافت: این نزدیک‌ترین چیز به عدالت بود که آن روزگار می‌شناخت.'],
        ['Artabanus came for revenge but made peace once the captives and property were returned. A war begun by deceit ended with restitution: as close to justice as that age came.']],
      ['herodian', 'ir-arsacids'], {
        quotes: [
          { text: 'On the first and second days the two armies fought from morning until evening, and when night put an end to the fighting, each side withdrew to its own camp, claiming the victory.', fa: 'در روز نخست و دوم دو سپاه از بام تا شام جنگیدند و چون شب به نبرد پایان داد، هر سو به اردوگاه خود بازگشت و خود را پیروز خواند.', ref: 'Herodian 4.15.4', source: 'herodian' },
          { text: 'We provoked him by breaking the treaty, and in a time of complete peace we started a war.', fa: 'ما با شکستن پیمان او را برانگیختیم و در زمان صلح کامل جنگ را آغاز کردیم.', ref: 'Herodian 4.14.6 (speech given to Macrinus)', source: 'herodian' },
        ],
        clip: { media: battleClipFor('artabanus-iv', 'nisibis', 992, 462), caption: B('نبرد نصیبین، گام‌به‌گام (طرح‌وار؛ جای‌ها ویرایشی‌اند).', 'The battle of Nisibis, step by step (schematic; positions are editorial).') },
      }),
    sec('hormozgan', 'هرمزدگان (۲۲۴ م.)', 'Hormozgan (224 CE)',
      [['ایرانیکا (شیپمان): اردشیر، فرمانروای کوچکی در پارس، از حدود ۲۲۰ م. سرزمین‌های همسایه و دورتر چون کرمان را گرفت. وقتی اردوان دست به کار شد، دیر شده بود. نبرد سرنوشت‌ساز «احتمالاً» در ۲۸ آوریل ۲۲۴ م. در نزدیکی گلپایگان امروزی، میان اصفهان و نهاوند، رخ داد و جان شاه بزرگ پارت را گرفت.', 'ایرانیکا (ویزهوفر): نبرد در دشت هرمزدگان در ماد بود. گزارش مفصل آن احتمالاً در تاریخ رسمی ساسانیان آمده و سرچشمهٔ گزارش طبری است. اردشیر صحنهٔ آن را در نقش برجستهٔ فیروزآباد کنده است و همان‌جا در میدان نبرد لقب «شاهنشاه» گرفت. داستان نامه‌نگاری اردشیر و اردوان در طبری را ایرانیکا نمایشی ادبی از ادعای اردشیر بر تخت می‌داند. هرودیان تنها می‌گوید که اردشیر اردوان را کشت.'],
        ['Iranica (Schippmann): Ardashir, a minor vassal in Persis, from about 220 CE took neighbouring and more distant lands such as Kerman. When Artabanus moved against him it was too late. The decisive battle, “probably” on 28 April 224 CE near modern Golpayegan, between Isfahan and Nahavand, cost the Parthian Great King his life.', 'Iranica (Wiesehöfer): the battle was on the plain of Hormozgan in Media. A detailed account was probably written for the official Sasanian history and is likely Tabari’s ultimate source. Ardashir had the scene carved in a relief at Firuzabad and took the title “King of Kings” on the battlefield. Iranica treats Tabari’s story of letters between Ardashir and Artabanus as a literary dramatization of Ardashir’s claim to the throne. Herodian says only that Ardashir killed Artabanus.']],
      [['ایرانیکا می‌گوید پیروزی اردشیر بدون «نارضایتی گسترده از حکومت پارت» شدنی نبود: بسیاری از بزرگان و فرمانروایان محلی به او پیوستند. دو شاه اشکانی، اردوان و بلاش ششم، با هم می‌جنگیدند. تاج‌گذاری رسمی اردشیر در تیسفون را برخی منابع ۲۲۶ م. می‌گذارند، و هترا و ارمنستان اشکانی سال‌ها در برابر او ایستادند.'],
        ['Iranica says Ardashir could not have won without “a widespread mood of discontent with the Parthian régime”: many nobles and local rulers joined him. Two Arsacid kings, Artabanus and Vologases VI, were fighting each other. Some sources date Ardashir’s formal coronation at Ctesiphon to 226 CE, and Hatra and Arsacid Armenia resisted him for years.']],
      [['پادشاهی اشکانی اتحادیه‌ای از خاندان‌ها و ولایت‌ها بود که هر کدام سهم و حقی داشتند. وقتی شاهان بر سر تخت با هم جنگیدند و بزرگان سود خود را در جای دیگر دیدند، اتحادیه فروریخت. ساسانیان دولتی متمرکزتر ساختند؛ بهای آن کم شدن آزادی ولایت‌ها بود.'],
        ['The Arsacid kingdom was a league of houses and provinces, each with its share and its rights. When the kings fought over the throne and the nobles saw their interest elsewhere, the league fell apart. The Sasanians built a more centralized state; the price was less freedom for the provinces.']],
      ['ir-arsacids', 'ir-ardashir', 'herodian'], {
        quotes: [{ text: 'For a long time the empire remained in his own family, down to Artabanus in our time; then Artaxerxes killed Artabanus and took possession of his kingdom for the Persians.', fa: 'دیرزمانی پادشاهی در خاندان او [ارشک] ماند، تا اردوانِ روزگار ما؛ آن‌گاه اردشیر اردوان را کشت و پادشاهی او را برای پارسیان گرفت.', ref: 'Herodian 6.2.7', source: 'herodian' }],
        photos: ['coin-artabanus4-b'],
      }),
  ],
  synthesis: {
    title: B('جمع‌بندی', 'Synthesis'),
    paras: {
      fa: ['اردوان چهارم پادشاهی را از برادرش گرفت، فریب کاراکالا را تاب آورد و در نصیبین روم را به پرداخت غرامت واداشت: آخرین پیروزی بزرگ اشکانیان. اما در همان سال‌ها اردشیر در پارس نیرو گرفت، و در ۲۲۴ م. اردوان در هرمزدگان کشته شد. با او چهار و نیم سده فرمانروایی اشکانیان پایان یافت.'],
      en: ['Artabanus IV took the kingdom from his brother, survived Caracalla’s deceit and made Rome pay reparations after Nisibis: the last great Arsacid victory. But in those same years Ardashir was gathering strength in Persis, and in 224 CE Artabanus was killed at Hormozgan. With him four and a half centuries of Arsacid rule came to an end.'],
    },
    sources: ['herodian', 'ir-arsacids', 'ir-ardashir'],
  },
  sources: pick('herodian', 'ir-arsacids', 'ir-ardashir', 'sellwood'),
  photos: photos('coin-artabanus4', 'coin-artabanus4-b'),
  related: [...related(['vologases-vi', 'بلاش ششم، برادرش', 'Vologases VI, his brother'], ['vologases-v', 'بلاش پنجم، پدرش', 'Vologases V, his father']), { href: { fa: '/king/ardashir-i', en: '/en/king/ardashir-i' }, label: B('اردشیر یکم (ساسانی)', 'Ardashir I (Sasanian)') }],
  wikipedia: 'https://en.wikipedia.org/wiki/Artabanus_IV_of_Parthia',
}
