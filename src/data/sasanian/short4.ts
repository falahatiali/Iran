/**
 * Short pages for the late 5th century: Hormizd III (457–459), Balash (484–488) and Zamasp (496–498/9).
 * Narrative: Encyclopaedia Iranica (Shahbazi “Hormozd III”; Chaumont “Balāš”; Choksy “Jāmāsp I”) paraphrased.
 * Verbatim quotes: Elishe tr. R. W. Thomson (1982); Procopius tr. H. B. Dewing (1914).
 */
import type { Bi, FeaturedKing } from '../featured/types'
import { ARMENIA, CTESIPHON, RAY, SAKASTAN, SAS, SELEUCIA, ev, note, photos, pick, related, sec } from './common'

const B = (fa: string, en: string): Bi => ({ fa, en })

const HEPHTHALITE_HELP = note(
  'سنت رسمی ایرانی (طبری، یعقوبی، دینوری) می‌گوید پیروز با سپاه هپتالیان بازگشت. شهبازی (ایرانیکا) این را افسانه‌ای می‌داند که از روی فرار بعدی پیروز به هپتالیان ساخته شده است. منابع ارمنی (غزار، الیشه) از یاری هپتالیان سخن نمی‌گویند.',
  'The official Persian tradition (Ṭabari, Yaʿqubi, Dinavari) says Peroz came back with a Hephthalite army. Shahbazi (Iranica) calls this a legend modelled on Peroz’s later flight to the Hephthalites. The Armenian sources (Łazar, Elishe) say nothing of Hephthalite help.')

export const hormizdIII: FeaturedKing = {
  slug: 'hormizd-iii', name: B('هرمز سوم', 'Hormizd III'), dynastyName: SAS,
  reign: B('۴۵۷–۴۵۹ م.', '457–459 CE'),
  title: B('هرمز سوم؛ دو برادر و یک تاج', 'Hormizd III: two brothers and one crown'),
  lede: B(
    'هرمز سوم پسر بزرگ و جانشین یزدگرد دوم بود. پس از مرگ پدر، برادر کوچک‌ترش پیروز بر او شورید. دو سال بعد هرمز شکست خورد و کشته شد. هیچ سکه یا یادگاری که بی‌گمان از او باشد شناخته نیست.',
    'Hormizd III was Yazdegerd II’s eldest son and heir. After their father’s death his younger brother Peroz rose against him. Two years later Hormizd was defeated and killed. No coin or other relic certainly his is known.'),
  stats: [{ n: B('۲', '2'), l: B('سال پادشاهی', 'years of reign') }],
  mapTitle: B('نقشه: پادشاهی هرمز سوم', 'Map: the reign of Hormizd III'),
  span: [457, 459],
  events: [
    ev('sistan', 457, B('پیش از ۴۵۷ م.', 'before 457 CE'), 'admin', SAKASTAN, B('شاه سیستان', 'King of Sistan'), B('به گفتهٔ طبری، هرمز پیش از پادشاهی «شاه سیستان» بود.', 'According to Ṭabari, before his reign Hormizd “was king of Sejestān”.'), 'probable', ['ir-hormozd3']),
    ev('accession', 457, B('۴۵۷ م.', '457 CE'), 'admin', CTESIPHON, B('مرگ پدر و نایب‌السلطنهٔ مادر', 'Father’s death and a regent mother'), B('یزدگرد دوم در پارس درگذشت. پیروز، که گویا در شرق بود، شورید و مادرشان دینک در پایتخت نایب‌السلطنه شد.', 'Yazdegerd II died in Pars. Peroz, who was evidently in the east, rose in revolt, and their mother Dēnak ruled as regent in the capital.'), 'probable', ['ir-hormozd3']),
    ev('help', 458, B('۴۵۷–۴۵۹ م. (روایت)', '457–459 CE (tradition)'), 'campaign', SAKASTAN, B('یاری هپتالیان؟ (روایت)', 'Hephthalite help? (tradition)'), B('سنت رسمی ایرانی می‌گوید پیروز نزد هپتالیان رفت و با سپاه آنان بازگشت.', 'The official Persian tradition says Peroz went to the Hephthalites and came back with their army.'), 'disputed', ['ir-hormozd3', 'ir-peroz'], HEPHTHALITE_HELP),
    ev('death', 459, B('۴۵۹ م.', '459 CE'), 'battle', RAY, B('شکست و مرگ', 'Defeat and death'), B('به گفتهٔ الیشه، رهام از خاندان مهران، لَلهٔ پیروز، با نیمی از سپاه بر هرمز تاخت، او را گرفت و فرمان کشتنش را داد. شیپمان (ایرانیکا، «پیروز») جای نبرد را ری می‌گوید.', 'According to Elishe, Rahām of the Mehrān family, Peroz’s tutor, attacked Hormizd with half the army, captured him and had him killed. Schippmann (Iranica, “Peroz”) puts the battle at Ray.'), 'probable', ['ir-hormozd3', 'elishe', 'ir-peroz'], note('شاهنامه و دینوری می‌گویند پیروز هرمز را بخشید. غزار و الیشه، که نزدیک‌تر به رویدادند، می‌گویند او کشته شد.', 'The Shahnameh and Dinavari say Peroz pardoned Hormizd. Łazar and Elishe, closer to the events, say he was killed.')),
  ],
  dossier: [
    sec('brothers', 'جنگ دو برادر', 'The war of the brothers',
      [['هرمز پسر بزرگ‌تر و جانشین بود. پیروز، پسر کوچک‌تر، پروردهٔ رهام (یا اشتاد) از خاندان مهران بود. الیشه می‌گوید سپاه ایرانیان دو بخش شد و رهام با یک نیمه هرمز را شکست داد و کشت. سپس پیروز را تاج نهاد.'],
        ['Hormizd was the elder son and heir. Peroz, the younger, was the foster son of Rahām (or Aštād) of the Mehrān family. Elishe says the army of the Iranians split in two, and Rahām with one half defeated and killed Hormizd. Then he crowned Peroz.']],
      [['منابع شرقی (طبری و دیگران) هرمز را ستمگر و پیروز را شایسته‌تر نشان می‌دهند. تنها یک متن بی‌نام (کدکس اشپرنگر ۳۰) می‌گوید هرمز «دلیرتر و بهتر» بود و پیروز «داناتر در دین». شهبازی می‌گوید روایت‌های ارمنی دقیق‌ترند. تاریخ را پیروزمندان نوشتند؛ پس داوری دربارهٔ هرمز باید با احتیاط باشد.'],
        ['The eastern sources (Ṭabari and others) show Hormizd as unjust and Peroz as worthier. Only one anonymous text (Codex Sprenger 30) says Hormizd “was the braver and better” and Peroz “more learned in religion”. Shahbazi says the Armenian accounts are more exact. The winners wrote the history, so judgments about Hormizd need caution.']],
      [['این‌جا تاج را خاندانی بزرگ (مهران) به پروردهٔ خود داد. وقتی جانشینی را قانون روشنی تعیین نمی‌کند، جنگ و خاندان‌های نیرومند آن را تعیین می‌کنند.'],
        ['Here a great house (Mehrān) gave the crown to its own foster son. When no clear law settles succession, war and powerful families settle it.']],
      ['ir-hormozd3', 'elishe'], {
        quotes: [{ text: 'Now the tutor of Yazkert’s younger son, Raham by name from the family of Mihran, although he saw that the army of the Aryans was divided into two, nonetheless with one half he ferociously attacked the king’s elder son. He defeated and massacred his army, and capturing the king’s son ordered him to be put to death on the spot.', fa: 'اما لَلهٔ پسر کوچک‌تر یزدگرد، رهام نام از خاندان مهران، با آن‌که دید سپاه آریاییان دو بخش شده است، با یک نیمه به سختی بر پسر بزرگ‌تر شاه تاخت. سپاهش را شکست داد و کشتار کرد، و پسر شاه را گرفت و فرمان داد همان‌جا کشته شود.', ref: 'Elishe, History of Vardan, tr. R. W. Thomson (1982), p. 242 [Arm. ed. p. 197]', source: 'elishe' }],
      }),
  ],
  synthesis: { title: B('جمع‌بندی', 'Synthesis'), paras: {
    fa: ['هرمز سوم دو سال شاه بود و تقریباً هیچ اثری از او نمانده است. آنچه می‌دانیم از دهان دشمن پیروزش یا از منابع ارمنی است. داستان یاری هپتالیان به پیروز محل بحث است.'],
    en: ['Hormizd III was king for two years and almost nothing of his survives. What we know comes from the side of his victorious rival or from Armenian sources. The story of Hephthalite help for Peroz is disputed.'],
  }, sources: ['ir-hormozd3'] },
  sources: pick('ir-hormozd3', 'elishe', 'ir-peroz'),
  related: related(['yazdegerd-ii', 'یزدگرد دوم، پدرش', 'Yazdegerd II, his father'], ['peroz-i', 'پیروز یکم، برادرش', 'Peroz I, his brother']),
  wikipedia: 'https://en.wikipedia.org/wiki/Hormizd_III',
}

const BROTHER = note(
  'غزار و پروکوپیوس بلاش را برادر پیروز می‌دانند؛ طبری و یعقوبی پسر او. شومون (ایرانیکا) برادر را می‌پذیرد.',
  'Łazar and Procopius make Balash Peroz’s brother; Ṭabari and Yaʿqubi make him his son. Chaumont (Iranica) accepts brother.')

export const balash: FeaturedKing = {
  slug: 'balash', name: B('بلاش', 'Balash'), dynastyName: SAS,
  reign: B('۴۸۴–۴۸۸ م.', '484–488 CE'),
  title: B('بلاش؛ «شاه نیک» که با ارمنیان صلح کرد', 'Balash: the “good king” who made peace with the Armenians'),
  lede: B(
    'بلاش، پسر یزدگرد دوم و برادر پیروز، پس از مرگ پیروز در جنگ هپتالیان به دست بزرگان شاه شد. با شورشیان ارمنی صلح کرد و با مسیحیان مهربان بود. اما موبدان، سپاه و بزرگان از او ناخشنود شدند و پس از چهار سال برکنارش کردند.',
    'Balash, son of Yazdegerd II and brother of Peroz, was made king by the nobles after Peroz died in the Hephthalite war. He made peace with the Armenian rebels and was kind to the Christians. But the priests, the army and the nobles turned against him, and after four years they deposed him.'),
  stats: [{ n: B('۴', '4'), l: B('سال پادشاهی', 'years of reign') }],
  mapTitle: B('نقشه: پادشاهی بلاش', 'Map: the reign of Balash'),
  span: [484, 488],
  events: [
    ev('chosen', 484, B('۴۸۴ م.', '484 CE'), 'admin', CTESIPHON, B('برگزیدهٔ بزرگان', 'Chosen by the nobles'), B('پس از مرگ پیروز، بزرگان، که نیرومندترینشان زرمهر سوخرا و شاپور مهران بودند، بلاش را شاه کردند.', 'After Peroz’s death the nobles, the most powerful of whom were Zarmehr Sōḵrā and Šāpūr Mehrān, made Balash king.'), 'disputed', ['ir-balas'], BROTHER),
    ev('vahan', 484, B('۴۸۴–۴۸۵ م.', '484–485 CE'), 'admin', ARMENIA, B('صلح با وهان مامیکونیان', 'Peace with Vahan Mamikonian'), B('بلاش با وهان مامیکونیان، رهبر شورش ارمنی، صلح کرد. وهان با سواران ارمنی به او یاری داد تا برادرش زریر (زره)، که مدعی تاج بود، شکست بخورد و کشته شود. سپس بلاش وهان را هزاربد و بعد مرزبان ارمنستان کرد.', 'Balash made peace with Vahan Mamikonian, leader of the Armenian rising. With the Armenian cavalry Vahan helped him defeat and kill his brother Zarer (Zareh), who had claimed the throne. Balash then made Vahan hazarapet and later marzban of Armenia.'), 'secure', ['ir-balas', 'ir-mamikonean']),
    ev('synod', 486, B('۴۸۶ م.', '486 CE'), 'religion', SELEUCIA, B('انجمن سلوکیه', 'The synod of Seleucia'), B('در آغاز انجمن کلیسایی سلوکیه، به ریاست جاثلیق آقاق، بلاش را «بلاش نیک و مهربان، شاهنشاه» خواندند.', 'At the opening of the church synod at Seleucia, presided over by the catholicos Acacius, Balash was hailed as the “good and amiable Walāš, King of Kings”.'), 'secure', ['ir-balas']),
    ev('deposed', 488, B('۴۸۸ م.', '488 CE'), 'admin', CTESIPHON, B('برکناری', 'Deposition'), B('موبدان از این‌که بلاش می‌خواست در شهرها گرمابه به شیوهٔ رومی بسازد ناخشنود بودند. سپاه هم ناخشنود بود. بزرگان، شاید به رهبری زرمهر سوخرا، او را برکنار کردند و برادرزاده‌اش قباد را شاه کردند.', 'The priests disapproved of Balash wanting to give the cities public baths in the Roman manner. The army was displeased too. The nobles, probably led by Zarmehr Sōḵrā, deposed him and made his nephew Kavad king.'), 'probable', ['ir-balas']),
  ],
  dossier: [
    sec('peace', 'صلح با ارمنیان', 'Peace with the Armenians',
      [['بلاش با وهان مامیکونیان، برادرزادهٔ وارطان، صلح کرد. وهان با سواران ارمنی به او کمک کرد تا مدعی تاج، برادرش زریر، را شکست دهد. سپس بلاش وهان را هزاربد و مرزبان ارمنستان کرد. نوشتهٔ سکه‌هایش «شاهزادهٔ نیک، بلاش» (hwkd wldʾhš) است.'],
        ['Balash made peace with Vahan Mamikonian, Vardan’s nephew. Vahan helped him with the Armenian cavalry to defeat the rival claimant, his brother Zarer. Balash then made Vahan hazarapet and marzban of Armenia. His coin legend reads “the good prince Walāxš” (hwkd wldʾhš).']],
      [['شومون بلاش را آرام و آشتی‌جو می‌داند. منبع اصلی، غزار پاربی، پروردهٔ همان وهان بود؛ پس تصویر نیک بلاش در منابع ارمنی از دید کسی است که از صلح او سود برد. نوشتهٔ سکه نشان می‌دهد که خود بلاش هم می‌خواست «نیک» دیده شود.'],
        ['Chaumont calls Balash pacific and conciliatory. The main source, Łazar Pʿarpecʿi, was Vahan’s protégé; so Balash’s good image in the Armenian sources comes from the side that gained from his peace. The coin legend shows that Balash himself wanted to be seen as “good”.']],
      [['یک نسل پس از آوارایر، دولت دریافت که آشتی ارزان‌تر از جنگ است: رهبر شورشیان فرماندار شد. دولتی که مردم را برای باورشان آزار نمی‌دهد، به جای دشمن، هم‌پیمان پیدا می‌کند. این برداشت ماست.'],
        ['A generation after Avarayr, the state found that peace was cheaper than war: the rebel leader became governor. A state that does not persecute people for their beliefs gains allies instead of enemies. This is our reading.']],
      ['ir-balas', 'ir-mamikonean'], { photos: ['coin-balash'] }),
    sec('baths', 'گرمابه‌های رومی و برکناری', 'Roman baths and deposition',
      [['بلاش با مسیحیان مهربان بود. شاید جاثلیق آقاق را به سفارت نزد زنون، امپراتور روم، فرستاد. اما موبدان از طرح او برای ساختن گرمابه‌های عمومی به شیوهٔ رومی ناخشنود بودند (یوشع ستون‌نشین). سپاه هم ناراضی بود. پس از چهار سال بزرگان او را برکنار کردند.'],
        ['Balash favoured the Christians. He seems to have sent the catholicos Acacius as ambassador to the emperor Zeno. But the priests disapproved of his plan to build public baths in the Roman manner (Joshua the Stylite). The army was unhappy too. After four years the nobles deposed him.']],
      [['ایرانیکا می‌گوید بنیاد شهر بلاش‌آباد را به اشتباه به او نسبت داده‌اند؛ بنیادگذار آن بلاش یکم اشکانی بود. چرا موبدان با گرمابه مخالف بودند، منابعی که بررسی کردیم نمی‌گویند.'],
        ['Iranica says the foundation of the city of Balāšābād was wrongly attributed to him; its founder was the Arsacid Vologases I. Why the priests opposed the baths, the sources we checked do not say.']],
      [['شاهی که بزرگان برگزیدند، بزرگان هم برکنارش کردند. قدرت نزد کسانی بود که تاج را می‌دادند، نه نزد کسی که آن را بر سر داشت.'],
        ['A king the nobles chose, the nobles also removed. Power lay with those who gave the crown, not with the man who wore it.']],
      ['ir-balas']),
  ],
  synthesis: { title: B('جمع‌بندی', 'Synthesis'), paras: {
    fa: ['بلاش چهار سال، پس از فاجعهٔ پیروز، شاه بود. با ارمنیان صلح کرد و با مسیحیان مهربان بود، اما موبدان، سپاه و بزرگان را از دست داد و برکنار شد. این‌که برادر پیروز بود یا پسرش محل بحث است.'],
    en: ['Balash was king for four years after Peroz’s disaster. He made peace with the Armenians and favoured the Christians, but lost the priests, the army and the nobles and was deposed. Whether he was Peroz’s brother or son is disputed.'],
  }, sources: ['ir-balas'] },
  sources: pick('ir-balas', 'ir-mamikonean', 'procopius'),
  photos: photos('coin-balash'),
  related: related(['peroz-i', 'پیروز یکم، برادرش', 'Peroz I, his brother'], ['kavad-i', 'قباد یکم، برادرزاده و جانشینش', 'Kavad I, his nephew and successor']),
  wikipedia: 'https://en.wikipedia.org/wiki/Balash',
}
