/**
 * Peroz I (459–484 CE), featured, with a step-by-step diagram of the Hephthalite trench (484).
 * Narrative: Encyclopaedia Iranica (Schippmann “Pērōz i. History”; Shahbazi “Hormozd III”) paraphrased.
 * Verbatim quotes: Procopius, History of the Wars 1.3–1.4, tr. H. B. Dewing (1914).
 * The trench and the pearl come from Procopius alone, about fifty years later; both are labelled.
 */
import type { BattleDiagram, BattleUnit, Bi, FeaturedKing } from '../featured/types'
import { ALBANIA, ARMENIA, BALKH, CAUCASUS, CTESIPHON, GUNDESHAPUR, HYRCANIA, RAY, SAS, battleClipFor, clipFor, ev, note, photos, pick, related, sec } from './common'

const B = (fa: string, en: string): Bi => ({ fa, en })
const P = (id: string, fa: string, en: string, at: [number, number]): BattleUnit => ({ id, side: 'persian', kind: 'army', label: B(fa, en), at })
const H = (id: string, fa: string, en: string, at: [number, number]): BattleUnit => ({ id, side: 'greek', kind: 'army', label: B(fa, en), at })

const TRENCH = note(
  'خندق را تنها پروکوپیوس، حدود پنجاه سال بعد، شرح می‌دهد. ایرانیکا (شیپمان) تنها شکستی سخت و مرگ پیروز و «برخی» پسرانش را تأیید می‌کند. سال (پایان ۴۸۳ یا به احتمال بیشتر ۴۸۴ م.) و جای نبرد («نزدیک بلخ؟») محل بحث است. پروکوپیوس می‌گوید «همهٔ پسرانش» کشته شدند، اما خودش کمی بعد می‌گوید قباد، کوچک‌ترین پسر، زنده ماند.',
  'Only Procopius, writing about fifty years later, describes the trench. Iranica (Schippmann) confirms only a terrible defeat and the death of Peroz and “some” of his sons. The year (end of 483 or, more probably, 484) and the place (“near Balkh?”) are disputed. Procopius says “all his sons” died, but a little later says himself that Kavad, the youngest, survived.')
const FIRST_WAR = note(
  'سال اسارت محل بحث است: ۴۶۹ م. به گفتهٔ رالینسون و فرای، ۴۶۵ م. به گفتهٔ گوبل. داستان درّهٔ بی‌راه و کرنش به خورشید از پروکوپیوس است؛ بهای آزادی (بیست بار استر) از یوشع ستون‌نشین.',
  'The year of the captivity is disputed: 469 according to Rawlinson and Frye, 465 according to Göbl. The story of the dead-end valley and the obeisance to the sun is Procopius’s; the ransom (twenty mule loads) is from Joshua the Stylite.')
const HELP = note(
  'شیپمان می‌گوید پیروز با سپاه هپتالیان و ایرانیانِ رهام مهران بازگشت. کریستن‌سن یاری هپتالیان را نمی‌پذیرد، و شهبازی (ایرانیکا، «هرمز سوم») داستان را افسانه می‌داند.',
  'Schippmann says Peroz returned with Hephthalite troops and Persians under Rahām Mehrān. Christensen rejects Hephthalite help, and Shahbazi (Iranica, “Hormozd III”) calls the story a legend.')

const EVENTS = [
  ev('ray', 459, B('۴۵۹ م.', '459 CE'), 'battle', RAY, B('پیروزی بر هرمز در ری', 'Victory over Hormizd at Ray'),
    B('پیروز پس از نزدیک دو سال بازگشت و برادرش هرمز سوم را در ری شکست داد. فرماندهٔ سپاهش رهام از خاندان مهران بود.', 'Peroz came back after nearly two years and defeated his brother Hormizd III at Ray. His army was led by Rahām of the Mehrān family.'),
    'disputed', ['ir-peroz', 'ir-hormozd3'], HELP),
  ev('albania', 460, B('پس از ۴۵۹ م.', 'after 459 CE'), 'campaign', ALBANIA, B('آلبانیای قفقاز', 'Caucasian Albania'),
    B('در جنگ برادران، فرمانروای آلبانیا خود را مستقل خواند. نخستین لشکرکشی پیروز به آن‌جا بود و آرامش را بازگرداند. به گفتهٔ فرای، او، برخلاف پدرش، آلبانیایی‌ها و ارمنیان را برای دینشان نیازرد.', 'During the brothers’ war the ruler of Albania had declared himself independent. Peroz’s first campaign went there and restored peace. According to Frye, unlike his father, he left the Albanians and Armenians in peace over their faith.'),
    'probable', ['ir-peroz', 'elishe']),
  ev('famine', 462, B('چند سال پس از آغاز پادشاهی', 'a few years into the reign'), 'admin', CTESIPHON, B('خشکسالی هفت‌ساله', 'The seven-year drought'),
    B('خشکسالی هفت‌ساله‌ای قحطی بزرگی آورد. پیروز به نیازمندان خوراک داد، مالیات‌ها را برداشت و از خزانه به تهی‌دستان کمک کرد.', 'A seven-year drought brought a great famine. Peroz gave food to the poor, abolished taxes and helped the needy from the treasury.'),
    'disputed', ['ir-peroz'], note('شیپمان می‌گوید گزارش‌ها از اندازهٔ فاجعه شاید بزرگ‌نمایی باشد، چون پیروز در همان سال‌ها لشکرکشی آماده می‌کرد. تاریخ دقیق خشکسالی روشن نیست.', 'Schippmann says the reports of the scale of the disaster may be exaggerated, since Peroz was preparing a campaign in those same years. The exact date of the drought is unclear.')),
  ev('kidarites', 464, B('۴۶۴ م. به بعد', 'from 464 CE'), 'campaign', HYRCANIA, B('جنگ با کیداریان', 'War with the Kidarites'),
    B('پیروز در ۴۶۴ م. از لئون یکم، امپراتور روم، یاری خواست و پاسخ منفی گرفت. سپس با کیداریان، به رهبری کونخاس، جنگید. در گرگان سفیران روم را پذیرفت.', 'In 464 Peroz asked the Roman emperor Leo I for help and was refused. He then fought the Kidarites under Kunkhas. At Gorgan he received a Roman embassy.'),
    'disputed', ['ir-peroz'], note('چه کسی پیروز شد و چه کسی به دیگری باج می‌داد محل بحث است. کریستن‌سن و فرای ایرانیان را پیروز می‌دانند؛ بلاکلی، از متن پریسکوس، می‌گوید ایرانیان باج‌گزار کیداریان بودند. نولدکه کونخاس را همان «اخشنوار» هپتالی می‌داند.', 'Who won, and who paid tribute to whom, is disputed. Christensen and Frye say the Persians won; Blockley, reading Priscus, says the Persians had been paying tribute to the Kidarites. Nöldeke takes Kunkhas to be the Hephthalite Aḵšonvār.')),
  ev('saragurs', 466, B('حدود ۴۶۶–۴۶۷ م.', 'c. 466–467 CE'), 'campaign', CAUCASUS, B('سراگورها در قفقاز', 'The Saragurs in the Caucasus'),
    B('قبیلهٔ سراگور به سوی گذرگاه‌های قفقاز آمد. پیروز باز از روم یاری خواست و نگرفت، اما خطر را دور کرد.', 'The Saragur tribe moved towards the Caucasus passes. Peroz again asked Rome for help and got none, but warded off the danger.'),
    'probable', ['ir-peroz']),
  ev('captive', 469, B('۴۶۹ م. (یا ۴۶۵ م.)', '469 CE (or 465 CE)'), 'battle', HYRCANIA, B('اسارت پیروز و قباد', 'Peroz and Kavad captured'),
    B('در نخستین جنگ با هپتالیان، پیروز و پسرش قباد نزدیک گرگان اسیر شدند. پیروز پیمان صلح همیشگی بست و بهای آزادی پرداخت. قباد دو سال گروگان هپتالیان ماند.', 'In the first war with the Hephthalites, Peroz and his son Kavad were captured near Gorgan. Peroz swore lasting peace and paid a ransom. Kavad stayed two years as a hostage of the Hephthalites.'),
    'disputed', ['ir-peroz', 'procopius'], FIRST_WAR),
  ev('revolts', 481, B('حدود ۴۸۱–۴۸۴ م.', 'c. 481–484 CE'), 'campaign', ARMENIA, B('شورش ارمنستان و ایبری', 'Revolts in Armenia and Iberia'),
    B('پس از شکست نخست، ارمنستان و ایبری (گرجستان) شوریدند. پیروز ایبری را آرام کرد، اما ارمنیان، به رهبری وهان مامیکونیان، از سرگرمی او به جنگ تازهٔ شرق سود بردند.', 'After the first defeat Armenia and Iberia (Georgia) rose. Peroz put down Iberia, but the Armenians, under Vahan Mamikonian, took advantage of his preparing a new war in the east.'),
    'probable', ['ir-peroz', 'ir-mamikonean']),
  ev('trench', 484, B('پایان ۴۸۳ یا ۴۸۴ م.', 'end of 483 or 484 CE'), 'battle', BALKH, B('خندق هپتالیان و مرگ پیروز', 'The Hephthalite trench and Peroz’s death'),
    B('پیروز، با آن‌که نزدیکانش او را بازمی‌داشتند، همهٔ سپاه را گرد آورد و باز به هپتالیان تاخت. شکستی سخت خورد و با برخی پسرانش کشته شد. پس از آن ایران به هپتالیان باج سالانه داد.', 'Peroz, though his closest advisers urged against it, gathered all his troops and attacked the Hephthalites again. He suffered a terrible defeat and was killed with some of his sons. After that Persia paid the Hephthalites an annual tribute.'),
    'disputed', ['ir-peroz', 'procopius'], TRENCH),
  ev('council', 484, B('۴۸۴ م.', '484 CE'), 'religion', GUNDESHAPUR, B('انجمن گندی‌شاپور', 'The council of Gondēšāpūr'),
    B('در پایان پادشاهی پیروز، انجمنی در گندی‌شاپور آموزهٔ نسطوری را آموزهٔ کلیسای مسیحی ایران خواند. پیروز این را به سود خود می‌دید.', 'At the end of Peroz’s reign a council at Gondēšāpūr declared Nestorianism the doctrine of the Christian church of Persia. Peroz favoured this.'),
    'secure', ['ir-peroz']),
]

const trench: BattleDiagram = {
  id: 'trench',
  title: B('خندق هپتالیان، ۴۸۴ م. (طرح‌وار، به روایت پروکوپیوس)', 'The Hephthalite trench, 484 CE (schematic, after Procopius)'),
  when: B('پایان ۴۸۳ یا ۴۸۴ م.', 'end of 483 or 484 CE'),
  sides: { persian: B('ایرانیان (ساسانی)', 'Iranians (Sasanian)'), greek: B('هپتالیان', 'Hephthalites') },
  land: ['M0 0 L100 0 L100 60 L0 60 Z'],
  labels: [
    { at: [56, 8], text: B('خندق پوشیده', 'Hidden trench'), tone: 'sea' },
    { at: [56, 52], text: B('خندق پوشیده', 'Hidden trench'), tone: 'sea' },
    { at: [56, 30], text: B('گذرگاه ده‌اسبه', 'Ten-horse neck'), tone: 'sea' },
    { at: [14, 54], text: B('دشت هموار', 'Level plain') },
  ],
  phases: [
    {
      id: 'dig', title: B('خندق و نمک سوگند', 'The trench and the salt of the oath'),
      body: B('پروکوپیوس می‌گوید شاه هپتالیان خندقی ژرف و پهن در دشت کند و تنها گذرگاهی به پهنای ده اسب در میانه گذاشت. روی آن نی و خاک ریخت. نمکی را که پیروز روزی بر آن سوگند خورده بود، بر سر درفش شاهی آویخت. بیشتر سپاهش پشت خندق ماند.', 'Procopius says the Hephthalite king dug a deep, wide trench across the plain and left only a neck the width of ten horses in the middle. He covered it with reeds and earth. He hung from the royal banner the salt over which Peroz had once sworn. Most of his army stayed behind the trench.'),
      units: [H('king', 'شاه هپتالیان', 'Hephthalite king', [80, 30]), H('bait', 'دستهٔ کوچک', 'Small detachment', [40, 30]), P('peroz', 'پیروز و سپاه', 'Peroz and the army', [10, 30])],
      certainty: 'disputed', certaintyNote: TRENCH.certaintyNote, sources: ['procopius'],
    },
    {
      id: 'bait', title: B('طعمه', 'The bait'),
      body: B('دستهٔ کوچک هپتالی خود را از دور نشان داد و سپس با همهٔ توان گریخت. نزدیک خندق در ستونی باریک از گذرگاه گذشت و به سپاه پیوست.', 'The small Hephthalite detachment let itself be seen from afar and then fled at full speed. Near the trench it drew into a narrow column, crossed by the neck and joined the army.'),
      units: [H('king', 'شاه هپتالیان', 'Hephthalite king', [80, 30]), H('bait', 'دستهٔ کوچک', 'Small detachment', [66, 30]), P('peroz', 'پیروز و سپاه', 'Peroz and the army', [26, 30])],
      arrows: [{ side: 'greek', path: [[40, 30], [56, 30], [66, 30]] }, { side: 'persian', path: [[10, 30], [26, 30]] }],
      certainty: 'disputed', certaintyNote: TRENCH.certaintyNote, sources: ['procopius'],
    },
    {
      id: 'fall', title: B('سقوط در خندق', 'The fall into the trench'),
      body: B('ایرانیان، بی‌خبر از نیرنگ، با خشم در دشت هموار تاختند و همه در خندق افتادند؛ پسینیان روی پیشینیان. پروکوپیوس می‌گوید پیروز و پسرانش در میان آنان بودند.', 'The Persians, unaware of the trick, charged in fury across the level plain and all fell into the trench, those behind on top of those in front. Procopius says Peroz and his sons were among them.'),
      units: [H('king', 'شاه هپتالیان', 'Hephthalite king', [80, 30]), H('bait', 'دستهٔ کوچک', 'Small detachment', [70, 34]), P('peroz', 'پیروز و سپاه در خندق', 'Peroz and the army in the trench', [54, 18])],
      arrows: [{ side: 'persian', path: [[26, 30], [42, 22], [54, 18]] }, { side: 'persian', path: [[26, 34], [42, 42], [54, 46]] }],
      certainty: 'disputed', certaintyNote: TRENCH.certaintyNote, sources: ['procopius', 'ir-peroz'],
    },
    {
      id: 'after', title: B('پس از خندق', 'After the trench'),
      body: B('اندک بازماندگان به دست دشمن افتادند. پروکوپیوس می‌گوید از آن پس قانونی آمد که سپاه ایران در خاک دشمن هرگز دشمن گریزان را دنبال نکند. ایران باج‌گزار هپتالیان شد.', 'The few survivors were at the enemy’s mercy. Procopius says a law was made afterwards that a Persian army in enemy land should never pursue a fleeing enemy. Persia became tributary to the Hephthalites.'),
      units: [H('king', 'شاه هپتالیان', 'Hephthalite king', [70, 30]), H('bait', 'سپاه هپتالی', 'Hephthalite army', [40, 40]), P('peroz', 'اندک بازماندگان', 'The few survivors', [30, 24])],
      arrows: [{ side: 'greek', path: [[66, 34], [50, 40], [40, 40]] }],
      certainty: 'disputed', certaintyNote: B('تنها پروکوپیوس از این قانون سخن می‌گوید. باج به هپتالیان را ایرانیکا هم تأیید می‌کند.', 'Only Procopius mentions this law. The tribute to the Hephthalites is confirmed by Iranica too.'), sources: ['procopius', 'ir-peroz'],
    },
  ],
}

export const perozI: FeaturedKing = {
  slug: 'peroz-i', name: B('پیروز یکم', 'Peroz I'), dynastyName: SAS,
  reign: B('۴۵۹–۴۸۴ م.', '459–484 CE'),
  title: B('پیروز یکم؛ قحطی، هپتالیان و خندق', 'Peroz I: famine, the Hephthalites and the trench'),
  lede: B(
    'پیروز یکم، پسر یزدگرد دوم، تاج را با جنگ از برادرش هرمز گرفت. در پادشاهی‌اش خشکسالی هفت‌ساله‌ای آمد و او مالیات‌ها را برداشت. دو بار به هپتالیان تاخت: بار نخست با پسرش قباد اسیر شد، و بار دوم، در ۴۸۴ م.، با سپاهش از میان رفت. پروکوپیوس مرگ او را در خندقی پوشیده شرح می‌دهد.',
    'Peroz I, son of Yazdegerd II, took the crown from his brother Hormizd by war. In his reign came a seven-year drought, and he abolished taxes. Twice he attacked the Hephthalites: the first time he was captured with his son Kavad, and the second time, in 484, he perished with his army. Procopius describes his death in a hidden trench.'),
  stats: [{ n: B('۲۵', '25'), l: B('سال پادشاهی', 'years of reign') }, { n: B('۴۸۴', '484'), l: B('مرگ در جنگ هپتالیان', 'death in the Hephthalite war') }],
  mapTitle: B('نقشهٔ متحرک: از ری تا بلخ', 'Animated map: from Ray to Balkh'),
  events: EVENTS, span: [459, 484],
  campaign: {
    id: 'reign',
    title: B('پادشاهی پیروز، گام‌به‌گام (۴۵۹–۴۸۴ م.)', 'The reign of Peroz, step by step (459–484 CE)'),
    intro: {
      fa: ['پادشاهی پیروز به روایت ایرانیکا (شیپمان) و پروکوپیوس. گام‌هایی که تنها از پروکوپیوس می‌آیند «محل بحث» نامیده شده‌اند. نمودار گام‌به‌گام خندق زیر نقشه آمده است.'],
      en: ['The reign of Peroz as told by Iranica (Schippmann) and Procopius. Steps that rest on Procopius alone are marked disputed. The step-by-step diagram of the trench is below the map.'],
    },
    events: EVENTS, span: [459, 484], view: [40, 29.5, 68, 44],
    places: [
      { name: B('تیسفون', 'Ctesiphon'), c: CTESIPHON, left: true }, { name: B('ری', 'Ray'), c: RAY, dy: 1.3 }, { name: B('گرگان', 'Gorgan'), c: HYRCANIA, dy: -1.2 },
      { name: B('آلبانیا', 'Albania'), c: ALBANIA }, { name: B('ارمنستان', 'Armenia'), c: ARMENIA, left: true }, { name: B('بلخ', 'Balkh'), c: BALKH }, { name: B('گندی‌شاپور', 'Gondēšāpūr'), c: GUNDESHAPUR, left: true },
    ],
    clip: clipFor('peroz-i'),
    battles: [trench],
  },
  shareImage: '/media/peroz-i/reign-en.png',
  dossier: [
    sec('throne', 'تاج از برادر', 'The crown from a brother',
      [['پس از مرگ یزدگرد دوم، هرمز تاج گذاشت و پیروز گریخت. نزدیک دو سال بعد با سپاهی، به فرماندهی رهام مهران، بازگشت و هرمز را در ری شکست داد. منابع ارمنی هرمز را بزرگ‌تر می‌دانند و منابع فارسی پیروز را.'],
        ['After Yazdegerd II’s death Hormizd was crowned and Peroz fled. Nearly two years later he came back with an army led by Rahām Mehrān and defeated Hormizd at Ray. Armenian sources make Hormizd the elder, Persian sources Peroz.']],
      [['این‌که هپتالیان به پیروز یاری دادند محل بحث است. شیپمان آن را می‌آورد؛ کریستن‌سن نمی‌پذیرد، چون به گمان او هپتالیان هنوز به مرز ایران نرسیده بودند؛ شهبازی داستان را افسانه می‌داند. طبری پیروز را دادگر و دین‌دار می‌نامد، که شیپمان آن را نشانهٔ خشنودی موبدان از او می‌داند.'],
        ['Whether the Hephthalites helped Peroz is disputed. Schippmann reports it; Christensen rejects it, since in his view the Hephthalites had not yet reached Persia’s border; Shahbazi calls the story a legend. Ṭabari calls Peroz just and pious, which Schippmann reads as a sign that the priests were pleased with him.']],
      [['منبعی که شاه را «دادگر» می‌نامد، اغلب از دید گروهی می‌نویسد که از او سود برده است. همین دوره آزار مسیحیان و یهودیان را هم دید.'],
        ['A source that calls a king “just” often writes from the view of a group that gained from him. The same period also saw persecution of Christians and Jews.']],
      ['ir-peroz', 'ir-hormozd3'], { photos: ['coin-peroz'] }),
    sec('famine', 'خشکسالی هفت‌ساله', 'The seven-year drought',
      [['چند سال پس از آغاز پادشاهی، خشکسالی هفت‌ساله‌ای قحطی بزرگی آورد. به گفتهٔ ایرانیکا (به پیروی از رالینسون و نولدکه)، پیروز به تهی‌دستان خوراک داد، مالیات‌ها را برداشت و از خزانه به نیازمندان کمک کرد.'],
        ['A few years into the reign a seven-year drought brought a great famine. According to Iranica (following Rawlinson and Nöldeke), Peroz gave food to the poor, abolished taxes and helped the needy from the treasury.']],
      [['شیپمان هشدار می‌دهد که گزارش‌ها شاید بزرگ‌نمایی باشد: در همان سال‌ها پیروز برای جنگ آماده می‌شد. پس داستان قحطی، دست‌کم در اندازه‌اش، محل بحث است. روایت عربی و فارسی آن هم از سنت ساسانی است که شاه را ستایش می‌کرد.'],
        ['Schippmann warns that the reports may be exaggerated: in those same years Peroz was preparing for war. So the famine story, at least its scale, is disputed. Its Arabic and Persian telling also comes from the Sasanian tradition that praised the king.']],
      [['برداشتن مالیات در قحطی یعنی گذاشتن نان در دست کسی که آن را کاشته است. این نشان می‌دهد که مالیات، در روزگار سختی، می‌توانست مرز میان زنده ماندن و مردن باشد. این برداشت ماست.'],
        ['Abolishing taxes in a famine means leaving bread in the hands of those who grew it. It shows that taxation, in hard times, could be the line between living and dying. This is our reading.']],
      ['ir-peroz'], { photos: ['plate-rams'] }),
    sec('captive', 'نخستین جنگ هپتالی: اسارت قباد', 'The first Hephthalite war: Kavad captive',
      [['در نخستین جنگ با هپتالیان، پیروز و پسرش قباد نزدیک گرگان اسیر شدند. پیروز پیمان صلح همیشگی بست و بهایی پرداخت؛ یوشع ستون‌نشین آن را بیست بار استر می‌گوید. قباد دو سال گروگان ماند. طبری شاه هپتالیان را «اخشنوار» و فردوسی «خوشنواز» می‌نامند.'],
        ['In the first war with the Hephthalites, Peroz and his son Kavad were captured near Gorgan. Peroz swore lasting peace and paid a ransom; Joshua the Stylite says twenty mule loads. Kavad stayed two years as a hostage. Ṭabari calls the Hephthalite king Aḵšonvār, and Ferdowsi Ḵošnavāz.']],
      [['پروکوپیوس داستانی می‌آورد: هپتالیان ایرانیان را به درّه‌ای بی‌راه کشاندند و شاه هپتالی آزادی را به این شرط داد که پیروز در برابرش کرنش کند. موبدان گفتند هنگام سپیده دیدارش کند و رو به خورشید برآمده کرنش کند. این داستان را تنها پروکوپیوس دارد. سال اسارت هم محل بحث است (۴۶۹ یا ۴۶۵ م.).'],
        ['Procopius tells a story: the Hephthalites lured the Persians into a dead-end valley, and the Hephthalite king offered freedom if Peroz would prostrate himself before him. The priests told him to meet him at dawn and bow towards the rising sun. Only Procopius has this story. The year of the captivity is also disputed (469 or 465).']],
      [['قباد در کودکی دو سال گروگان هپتالیان بود. بعدها، چون تاج را از دست داد، به همان هپتالیان پناه برد و با یاری آنان بازگشت. گروگان‌گیری میان دولت‌ها، بی‌آنکه بخواهند، پیوند هم می‌ساخت.'],
        ['As a boy Kavad spent two years as a hostage of the Hephthalites. Later, when he lost the crown, he took refuge with the same Hephthalites and came back with their help. Hostage-taking between states made ties too, whether they meant it or not.']],
      ['ir-peroz', 'procopius'], {
        quotes: [{ text: 'Perozes accordingly gave the pledges concerning the peace, and prostrated himself before his foe exactly as the Magi had suggested, and so, with the whole Median army intact, gladly retired homeward.', fa: 'پیروز پیمان صلح را داد و درست همان‌گونه که مغان گفته بودند در برابر دشمن کرنش کرد، و با همهٔ سپاه ماد، بی‌گزند، شادمان به خانه بازگشت.', ref: 'Procopius, History of the Wars 1.3, tr. H. B. Dewing (1914)', source: 'procopius' }],
      }),
    sec('trench', 'خندق ۴۸۴ م.', 'The trench of 484',
      [['پیروز، با آن‌که نزدیکانش او را بازمی‌داشتند، همهٔ سپاه را گرد آورد و حدود ۴۸۱ م. جنگ تازه‌ای با هپتالیان آغاز کرد. در پایان ۴۸۳ یا به احتمال بیشتر ۴۸۴ م.، در افغانستان امروز (شاید نزدیک بلخ)، شکست خورد و با برخی پسرانش کشته شد. پس از آن ایران باج سالانه به هپتالیان داد.'],
        ['Peroz, though his closest advisers urged against it, gathered all his troops and began a new war with the Hephthalites around 481. At the end of 483 or, more probably, in 484, in what is now Afghanistan (perhaps near Balkh), he was defeated and killed with some of his sons. Afterwards Persia paid the Hephthalites an annual tribute.']],
      [['پروکوپیوس، حدود پنجاه سال بعد، می‌گوید هپتالیان خندقی پوشیده کندند و سپاه ایران در تعقیب در آن افتاد. داستان مروارید گوش پیروز را هم می‌آورد، اما خودش آن را باور ندارد. این‌که پیروز پیمان شکسته بود، و شاه هپتالی نمک سوگند را بر درفش آویخت، از دید رومیِ پروکوپیوس است. خندق را منبع دیگری که بررسی کردیم تأیید نمی‌کند.'],
        ['Procopius, about fifty years later, says the Hephthalites dug a hidden trench and the Persian army fell into it in pursuit. He also tells the story of Peroz’s pearl earring, but does not believe it himself. That Peroz had broken his oath, and that the Hephthalite king hung the salt of the oath on his banner, is Procopius’s Roman point of view. No other source we checked confirms the trench.']],
      [['شاهی که دو بار، برخلاف رأی نزدیکانش، همه چیز را در جنگ گذاشت، بهایش را مردمی پرداختند که سال‌ها به هپتالیان باج دادند. وقتی تصمیم جنگ در دست یک تن است، شکست او شکست همه است. این برداشت ماست.'],
        ['A king who twice staked everything on war against his advisers’ counsel left the bill to the people who paid the Hephthalites tribute for years. When the decision for war lies with one man, his defeat is everyone’s. This is our reading.']],
      ['ir-peroz', 'procopius'], {
        quotes: [
          { text: 'But the Persians, having no means of perceiving the stratagem, gave chase at full speed across a very level plain, possessed as they were by a spirit of fury against the enemy, and fell into the trench, every man of them, not alone the first but also those who followed in the rear.', fa: 'اما ایرانیان که راهی برای دریافتن نیرنگ نداشتند، در دشتی بسیار هموار با همهٔ شتاب به تعقیب پرداختند، چنان که خشم بر دشمن سراپایشان را گرفته بود، و همه در خندق افتادند، نه تنها پیشینیان بلکه آنان که از پس می‌آمدند.', ref: 'Procopius, History of the Wars 1.4.10–16, tr. H. B. Dewing (1914)', source: 'procopius' },
          { text: 'This story, however, seems to me untrustworthy, because a man who found himself in such peril would have thought of nothing else; but I suppose that his ear was crushed in this disaster, and the pearl disappeared somewhere or other.', fa: 'اما این داستان به نظرم باورکردنی نیست، زیرا کسی که در چنین خطری باشد به چیز دیگری نمی‌اندیشد؛ گمان می‌کنم گوشش در این فاجعه له شد و مروارید جایی گم شد.', ref: 'Procopius, History of the Wars 1.4.10–16, tr. H. B. Dewing (1914)', source: 'procopius' },
        ],
        clip: { media: battleClipFor('peroz-i', 'trench', 992, 694), caption: B('خندق هپتالیان، گام‌به‌گام (طرح‌وار، به روایت پروکوپیوس)', 'The Hephthalite trench, step by step (schematic, after Procopius)') },
      }),
    sec('church', 'کلیسای ایران و انجمن گندی‌شاپور', 'The church of Persia and the council of Gondēšāpūr',
      [['در پادشاهی پیروز مسیحیان و یهودیان آزار دیدند. در همان حال، پیروز برآمدن آموزهٔ نسطوری را پشتیبانی کرد. در ۴۸۴ م. انجمنی در گندی‌شاپور آموزهٔ نسطوری را آموزهٔ کلیسای مسیحی ایران خواند.'],
        ['Under Peroz Christians and Jews were persecuted. At the same time Peroz supported the rise of Nestorianism. In 484 a council at Gondēšāpūr declared Nestorianism the doctrine of the Christian church of Persia.']],
      [['کلیسایی که با کلیسای روم هم‌آموزه نباشد، کمتر به روم وابسته به نظر می‌رسید. پس پشتیبانی شاه از نسطوریان را می‌توان سیاست مرزی هم دانست. این برداشت ما از گزارش ایرانیکاست.'],
        ['A church whose doctrine differed from the Roman church looked less tied to Rome. So the king’s support for the Nestorians can be read as frontier policy too. This is our reading of Iranica’s report.']],
      [['دولت این‌جا از آموزه‌ای دینی پشتیبانی کرد تا وفاداری سیاسی بسازد. جدایی دین و دولت از جمله برای این است که ایمان مردم ابزار سیاست خارجی نشود.'],
        ['Here the state backed a doctrine to build political loyalty. Separating faith and state exists partly so that people’s belief does not become a tool of foreign policy.']],
      ['ir-peroz']),
  ],
  synthesis: { title: B('جمع‌بندی', 'Synthesis'), paras: {
    fa: ['پیروز با جنگ به تخت رسید و با جنگ از میان رفت. در میانه، قحطی هفت‌ساله آمد و گزارش‌ها می‌گویند او مالیات‌ها را برداشت، هرچند اندازهٔ فاجعه شاید بزرگ‌نمایی شده باشد.', 'دو جنگ او با هپتالیان ایران را باج‌گزار کرد. داستان خندق و مروارید از پروکوپیوس است و این صفحه آن را جدا از گزارش ایرانیکا نشان می‌دهد.'],
    en: ['Peroz came to the throne by war and perished by war. In between came the seven-year famine, and the reports say he abolished taxes, though the scale of the disaster may be exaggerated.', 'His two wars with the Hephthalites made Persia tributary. The story of the trench and the pearl is Procopius’s, and this page shows it apart from Iranica’s report.'],
  }, sources: ['ir-peroz', 'procopius'] },
  sources: pick('ir-peroz', 'ir-hormozd3', 'ir-mamikonean', 'procopius', 'elishe'),
  photos: photos('coin-peroz', 'plate-rams'),
  related: related(['hormizd-iii', 'هرمز سوم، برادرش', 'Hormizd III, his brother'], ['balash', 'بلاش، برادر و جانشینش', 'Balash, his brother and successor'], ['kavad-i', 'قباد یکم، پسرش', 'Kavad I, his son']),
  wikipedia: 'https://en.wikipedia.org/wiki/Peroz_I',
}
