/**
 * Hormizd II and Adur-Narseh (302/303–309 CE).
 * Narrative: Encyclopaedia Iranica (Shahbazi “Hormozd II”, “Ardašīr II”; Tafażżolī “Ādur Narseh”) paraphrased.
 */
import type { Bi, FeaturedKing } from '../featured/types'
import { CTESIPHON, IDAJ, NAQSH_E_ROSTAM, NISIBIS, SAS, SYRIA_DESERT, ev, note, photos, pick, related, sec } from './common'

const B = (fa: string, en: string): Bi => ({ fa, en })

const START = note(
  'آغاز پادشاهی هرمز دوم قطعی نیست. ایرانیکا (شهبازی) ۳۰۳ م. می‌گوید، اما مقالهٔ «آذرنرسی» در همان دانشنامه ۳۰۲ م. می‌نویسد. صفحهٔ نرسی هم مرگ نرسی را ۳۰۲ م. می‌گذارد.',
  'The start of Hormizd II’s reign is not certain. Iranica (Shahbazi) gives 303 CE, but the “Ādur Narseh” article in the same encyclopaedia gives 302 CE. Narseh’s page also puts Narseh’s death in 302 CE.')

const SUCCESSION = note(
  'گزارش‌ها دربارهٔ جانشینی هرمز دوم یکسان نیستند. تفضلی (ایرانیکا) می‌گوید آذرنرسی چند ماه شاه بود و به سبب ستمگری برکنار و کشته شد. شهبازی (ایرانیکا، «اردشیر دوم») می‌گوید بزرگان قدرت را از او «ربودند»، پسر دوم را کور کردند و پسر سوم، هرمز، به روم گریخت. طبری اصلاً از پسری یاد نمی‌کند و می‌گوید هرمز بی‌فرزند مرد.',
  'The accounts of Hormizd II’s succession differ. Tafażżolī (Iranica) says Adur-Narseh was king for some months and was deposed and killed for his cruelty. Shahbazi (Iranica, “Ardašīr II”) says the nobles “wrested” power from him, blinded a second son, and a third, Hormizd, fled to the Romans. Tabari mentions no son at all and says Hormizd died childless.')

export const hormizdII: FeaturedKing = {
  slug: 'hormizd-ii', name: B('هرمز دوم', 'Hormizd II'), dynastyName: SAS,
  reign: B('۳۰۳–۳۰۹ م. (یا ۳۰۲)', '303–309 CE (or 302)'),
  title: B('هرمز دوم؛ شاهی که از او کم می‌دانیم و مرگی که روشن نیست', 'Hormizd II: a king we know little about, and a death that is not clear'),
  lede: B(
    'هرمز دوم پسر نرسی بود. شاپور دوم در کتیبه‌اش در طاق بستان خود را پسر «هرمزد، شاهنشاه ایران و انیران» و نوهٔ نرسی می‌نامد. ایرانیکا می‌گوید از پادشاهی او «بسیار کم» می‌دانیم. نقش سوارکاری‌اش در نقش رستم شاید از یک جنگ داخلی خبر می‌دهد. مرگش هم روشن نیست: یک روایت او را کشتهٔ عرب‌ها می‌داند و ایرانیکا احتمال می‌دهد بزرگان او را کشته باشند.',
    'Hormizd II was a son of Narseh. In his inscription at Taq-e Bostan, Shapur II calls himself the son of “Ohrmazd, king of kings of Ērān and Anērān” and the grandson of Narseh. Iranica says “very little” is known of his reign. His equestrian relief at Naqsh-e Rostam may point to a civil war. His death is also unclear: one story blames Arabs, and Iranica thinks the nobles more probably killed him.'),
  stats: [{ n: B('~۶ سال', '~6 years'), l: B('پادشاهی', 'reign') }, { n: B('۸', '8'), l: B('پسر', 'sons') }],
  mapTitle: B('نقشه: پادشاهی هرمز دوم', 'Map: the reign of Hormizd II'),
  span: [302, 309],
  events: [
    ev('accession', 303, B('۳۰۳ م. (یا ۳۰۲)', '303 CE (or 302)'), 'admin', CTESIPHON, B('بر تخت', 'Accession'), B('هرمز پس از پدرش نرسی شاه شد. ایرانیکا (شهبازی) می‌گوید پیکری که در نقش دیهیم‌ستانی نرسی پشت سر شاه ایستاده احتمالاً هرمزِ ولیعهد است، و بعید است که او در جنگ پدرش با روم، که به شکست سخت نرسی انجامید، شرکت کرده باشد.', 'Hormizd succeeded his father Narseh. Iranica (Shahbazi) says the figure standing behind the king in Narseh’s investiture relief is probably Hormizd as crown prince, and that he is unlikely to have taken part in his father’s war with Rome, which ended in Narseh’s heavy defeat.'), 'disputed', ['ir-hormozd2', 'ir-adurnarseh'], START),
    ev('crown', 303, B('آغاز پادشاهی', 'start of the reign'), 'admin', CTESIPHON, B('تاج شاهین', 'The falcon crown'), B('بر سکه‌های هرمز تاجی است شبیه تاج بهرام دوم: شاهین شاهی، پرندهٔ ایزد بهرام، که گوی مروارید‌نشانی را نگه داشته و مرواریدی به منقار دارد.', 'Hormizd’s coins show a crown much like Bahram II’s: the royal falcon, the bird of the god Bahram, holding up a pearl-studded globe with a pearl in its beak.'), 'secure', ['ir-hormozd2']),
    ev('manichaeans', 305, B('در پادشاهی او', 'during his reign'), 'religion', CTESIPHON, B('آزار دوبارهٔ مانویان', 'Manichaeans persecuted again'), B('به گفتهٔ ابوریحان بیرونی، هرمز آزار مانویان را از سر گرفت. ایرانیکا این را تنها از بیرونی نقل می‌کند.', 'According to Abu Rayhan Biruni, Hormizd resumed the persecution of the Manichaeans. Iranica cites only Biruni for this.'), 'disputed', ['ir-hormozd2'], note('تنها منبع بیرونی است، که هفتصد سال بعد نوشت.', 'The only source is Biruni, writing seven centuries later.')),
    ev('kurang', 306, B('در پادشاهی او', 'during his reign'), 'building', IDAJ, B('روستای وهشت‌هرمز', 'The district of Wahišt-Hormoz'), B('حمزهٔ اصفهانی ساختن روستاقی به نام کورنگ یا وهشت‌هرمز، نزدیک ایذه در ناحیهٔ رامهرمز خوزستان، را به هرمز نسبت می‌دهد.', 'Hamza Isfahani credits Hormizd with founding a rural district called Kurang or Wahišt-Hormoz near Īḏaj (Izeh), in the Ram-Hormoz district of Khuzestan.'), 'probable', ['ir-hormozd2']),
    ev('relief', 306, B('در پادشاهی او', 'during his reign'), 'battle', NAQSH_E_ROSTAM, B('نقش سوارکاری در نقش رستم', 'The equestrian relief at Naqsh-e Rostam'), B('هرمز در نقش رستم سوار بر اسب است و با نیزه‌ای بلند سواری زره‌پوش را از اسب می‌اندازد. بر کلاه‌خود آن سوار نشان خاندان پاپک، فرمانروای آلبانیا در زمان بهرام دوم و نرسی، دیده می‌شود. ایرانیکا این نقش را گواه یک جنگ داخلی می‌داند.', 'At Naqsh-e Rostam Hormizd rides with a long lance and unhorses an armoured rider. The rider’s helmet bears the family badge of Pāpak, viceroy of Albania under Bahram II and Narseh. Iranica takes the relief as evidence of a civil war.'), 'probable', ['ir-hormozd2']),
    ev('rome', 307, B('ادعای منابع دیرتر', 'claimed by later sources'), 'battle', NISIBIS, B('جنگ با روم؟', 'A war with Rome?'), B('تاریخ سعرد (سدهٔ یازدهم م.) می‌گوید هرمز برای انتقام شکست پدرش با روم جنگید، و تاریخ اربیل می‌گوید او برای دفاع از مسیحیانی که قیصر آزارشان می‌داد به خاک روم تاخت. ایرانیکا هیچ‌کدام را استوار نمی‌داند.', 'The Chronicle of Seʿert (11th century) says Hormizd fought Rome to avenge his father’s defeat, and the Chronicle of Arbela says he invaded Roman land because the Caesar was persecuting Christians. Iranica trusts neither.'), 'disputed', ['ir-hormozd2'], note('درستی تاریخ اربیل محل تردید است و گزارش سعرد در جای دیگری تأیید نمی‌شود. شاید هر دو بازتاب همان یورش به سوریه باشند.', 'The authenticity of the Chronicle of Arbela is questioned and the Seʿert report is not confirmed elsewhere. Both may echo the raid into Syria.')),
    ev('syria', 309, B('۳۰۹ م.', '309 CE'), 'battle', SYRIA_DESERT, B('روایت بلعمی: یورش به سوریه', 'Balʿami’s story: a raid into Syria'), B('به روایت بلعمی، هرمز سپاهی به سوریه فرستاد و از غسانیان باج خواست. پادشاه غسانی پیش از رسیدن یاری روم کشته شد، اما یارانش هرمز را هنگام شکار در بیابان غافلگیر کردند، زخمی کشنده به او زدند و حومهٔ تیسفون را غارت کردند.', 'In Balʿami’s story, Hormizd sent troops into Syria and demanded tribute from the Ghassanids. The Ghassanid king was killed before Roman help arrived, but his men surprised Hormizd while he was hunting in the desert, wounded him fatally and plundered the outskirts of Ctesiphon.'), 'disputed', ['ir-hormozd2'], note('ایرانیکا این روایت را کمتر محتمل می‌داند و می‌گوید احتمالاً بزرگان او را در جایی دورافتاده کشتند تا پسرانش را از تخت دور کنند.', 'Iranica finds this story less likely, and says the magnates probably killed him in a remote place so as to keep his sons from the throne.')),
    ev('death', 309, B('۳۰۹ م.', '309 CE'), 'admin', CTESIPHON, B('مرگ و هشت پسر', 'Death, and eight sons'), B('هرمز هشت پسر داشت. یکی از آنان، شاپور دوم، از ۳۰۹ تا ۳۷۹ م. شاه بود. به گفتهٔ فاوستوس بیزانسی، دخترش هرمزدخت همسر شاهزادهٔ ارمنی، وهان مامیکونیان، شد.', 'Hormizd left eight sons. One of them, Shapur II, reigned from 309 to 379. According to Faustus of Byzantium, his daughter Hormizd-dukht married the Armenian prince Vahan Mamikonian.'), 'probable', ['ir-hormozd2']),
  ],
  dossier: [
    sec('relief', 'نقشی که از جنگ داخلی خبر می‌دهد', 'A relief that hints at civil war',
      [['تنها یادگار سنگی هرمز دوم نقشی سوارکاری در نقش رستم است. شاه با نیزه‌ای بلند سواری زره‌پوش را از اسب می‌اندازد. نشانی که بر کلاه‌خود دشمن است، نشان خانوادگی پاپک، فرمانروای آلبانیا (اران) در زمان بهرام دوم و نرسی، است.'],
        ['Hormizd II’s only surviving monument in stone is an equestrian relief at Naqsh-e Rostam. The king, with a long lance, unhorses an armoured rider. The device on the enemy’s helmet is the family badge of Pāpak, viceroy of Albania (Arran) under Bahram II and Narseh.']],
      [['ایرانیکا (به پیروی از هینتس) از این نشان نتیجه می‌گیرد که هرمز با یک خاندان بزرگ درون شاهنشاهی جنگیده است. این برداشت از نشان یک کلاه‌خود است، نه از متن؛ هیچ کتیبه‌ای کنار نقش نیست که نام دشمن را بگوید.'],
        ['Iranica (following Hinz) concludes from this device that Hormizd fought a great family inside the empire. The reading rests on the badge on a helmet, not on a text; no inscription beside the relief names the enemy.']],
      [['شش سال پادشاهی، یک جنگ داخلی احتمالی و مرگی مشکوک. بزرگان ساسانی می‌توانستند شاه را کنار بزنند، و در این دوره بارها چنین کردند. قدرت شاه بی‌مرز نبود، اما مرزش را قانون نمی‌کشید؛ زور خاندان‌های بزرگ می‌کشید.'],
        ['Six years of rule, a possible civil war and a suspicious death. The Sasanian nobility could set kings aside, and in this period did so again and again. The king’s power was not unlimited, but its limit was drawn by the force of the great families, not by law.']],
      ['ir-hormozd2'], { photos: ['relief-hormizd2'] }),
    sec('justice', 'سخت‌گیر یا دادگر؟', 'Harsh or just?',
      [['طبری می‌گوید هرمز پادشاهی را با سخت‌گیری آغاز کرد، اما بعد نرم، خردمند و نیک‌خواه ناتوانان شد. ایرانیکا این را «ادعا» می‌نامد.'],
        ['Tabari says Hormizd began his reign harshly but then became mild, wise and kind to the weak. Iranica calls this an “allegation”.']],
      [['این الگوی «آغاز سخت، پایان نیک» در داستان‌های شاهان ساسانی تکرار می‌شود. پس بیشتر قالبی ادبی است تا گزارشی از رفتار این شاه.'],
        ['This pattern of “harsh beginning, good end” recurs in the stories of Sasanian kings. So it is more a literary mould than a report of this king’s conduct.']],
      [['دادگری را در این منابع شاه می‌بخشد؛ حق مردم نیست. اگر شاه نرم شد، از نیکی او بود، نه از قانونی که دست او را ببندد.'],
        ['In these sources justice is something the king grants; it is not the people’s right. If the king grew mild, that was his goodness, not a law that bound his hands.']],
      ['ir-hormozd2'], { photos: ['coin-hormizd2'] }),
  ],
  synthesis: { title: B('جمع‌بندی', 'Synthesis'), paras: { fa: ['هرمز دوم شاهی است میان نرسیِ شکست‌خورده و شاپور دومِ نامدار. از او یک نقش، چند سکه و چند روایت ناهمسو مانده است. مرگش در ۳۰۹ م. آغاز بحرانی شد: بزرگان پسرانش را کنار زدند و کودکی را شاه کردند که هنوز زاده نشده بود.'], en: ['Hormizd II stands between the defeated Narseh and the famous Shapur II. What survives of him is one relief, some coins and a few conflicting stories. His death in 309 began a crisis: the nobles pushed his sons aside and made king a child not yet born.'] }, sources: ['ir-hormozd2', 'ir-ardashir2'] },
  sources: pick('ir-hormozd2', 'ir-adurnarseh', 'ir-ardashir2'),
  photos: photos('relief-hormizd2', 'coin-hormizd2'),
  related: related(['narseh', 'نرسی، پدرش', 'Narseh, his father'], ['adur-narseh', 'آذرنرسی، پسرش', 'Adur-Narseh, his son'], ['shapur-ii', 'شاپور دوم، پسرش', 'Shapur II, his son']),
  wikipedia: 'https://en.wikipedia.org/wiki/Hormizd_II',
}

export const adurNarseh: FeaturedKing = {
  slug: 'adur-narseh', name: B('آذرنرسی', 'Adur-Narseh'), dynastyName: SAS,
  reign: B('۳۰۹ م. (چند ماه)', '309 CE (some months)'),
  title: B('آذرنرسی؛ شاهی چندماهه که بزرگان کنارش زدند', 'Adur-Narseh: a king of a few months, set aside by the nobles'),
  lede: B(
    'آذرنرسی پسر هرمز دوم بود. به گفتهٔ ایرانیکا، در ۳۰۹ م. شاه شد و پس از چند ماه برکنار و کشته شد. سبب را ستمگری او گفته‌اند. اما منابع یکسان نیستند و طبری اصلاً از او نامی نمی‌برد.',
    'Adur-Narseh was a son of Hormizd II. According to Iranica, he was made king in 309 CE and after some months was deposed and killed. The reason given is his cruelty. But the sources disagree, and Tabari does not name him at all.'),
  stats: [{ n: B('چند ماه', 'a few months'), l: B('پادشاهی', 'reign') }],
  mapTitle: B('نقشه: تیسفون، ۳۰۹ م.', 'Map: Ctesiphon, 309 CE'),
  span: [309, 309],
  events: [
    ev('king', 309, B('۳۰۹ م.', '309 CE'), 'admin', CTESIPHON, B('شاهی کوتاه', 'A brief reign'), B('به گفتهٔ ایرانیکا (تفضلی)، از نوشته‌های بیزانسی برمی‌آید که هرمز دوم از همسر نخستش دو پسر به نام‌های هرمز و آذرنرسی داشت. آذرنرسی در ۳۰۹ م. شاه شد.', 'According to Iranica (Tafażżolī), Byzantine writers suggest that Hormizd II had two sons by his first wife, Hormizd and Adur-Narseh. Adur-Narseh was made king in 309 CE.'), 'disputed', ['ir-adurnarseh'], SUCCESSION),
    ev('deposed', 309, B('۳۰۹ م.', '309 CE'), 'admin', CTESIPHON, B('برکناری', 'Deposition'), B('پس از چند ماه او را برکنار کردند و کشتند. برادرش هرمز به روم گریخت. بزرگان شاپورِ هنوز نازاده را شاه کردند.', 'After some months he was deposed and killed. His brother Hormizd fled to Rome. The nobles made the still unborn Shapur king.'), 'disputed', ['ir-adurnarseh', 'ir-ardashir2'], SUCCESSION),
  ],
  dossier: [
    sec('nobles', 'چه کسی شاه را برمی‌گزید؟', 'Who chose the king?',
      [['تفضلی می‌گوید آذرنرسی به سبب ستمگری کشته شد. شهبازی همین رویداد را چنین می‌گوید: بزرگان و موبدان قدرت را از او ربودند، برادر دیگرش را کور کردند و برادر سومش هرمز به روم گریخت. برادر چهارم، شاپور سگانشاه، در شرق فرمان می‌راند.'],
        ['Tafażżolī says Adur-Narseh was killed for his cruelty. Shahbazi tells the same event this way: the leading nobles and priests wrested power from him, blinded another brother, and a third brother, Hormizd, fled to Rome. A fourth brother, Shapur the Sakanshah, was ruling in the east.']],
      [['«ستمگری» را همان کسانی گزارش کرده‌اند که او را کنار زدند. شهبازی انگیزه را روشن می‌گوید: بزرگان برای «نگه داشتن برتری خود» کودکی نازاده را شاه کردند. پس داوری دربارهٔ آذرنرسی را باید با احتیاط خواند.'],
        ['The “cruelty” was reported by the same circle that set him aside. Shahbazi states the motive plainly: the nobles made an unborn child king “to maintain their supremacy”. So the verdict on Adur-Narseh should be read with caution.']],
      [['شاهِ نازاده شاهی است که نمی‌تواند فرمان دهد. با این کار، قدرت واقعی تا سال‌ها در دست بزرگان و موبدان ماند. نه مردم در این گزینش سهمی داشتند، نه قانونی روشن برای جانشینی.'],
        ['An unborn king is a king who cannot command. With this move, real power stayed for years with the nobles and priests. Neither the people had a share in the choice, nor was there a clear law of succession.']],
      ['ir-adurnarseh', 'ir-ardashir2']),
  ],
  synthesis: { title: B('جمع‌بندی', 'Synthesis'), paras: { fa: ['آذرنرسی بیشتر نامی است در فهرست شاهان تا چهره‌ای تاریخی. سکه یا نقشی از او شناخته نیست. سرنوشتش نشان می‌دهد که در آغاز سدهٔ چهارم بزرگان ساسانی تا کجا می‌توانستند شاه را برگزینند و برکنار کنند.'], en: ['Adur-Narseh is more a name in the king list than a historical figure. No coin or relief of his is known. His fate shows how far the Sasanian nobles could make and unmake kings at the start of the fourth century.'] }, sources: ['ir-adurnarseh', 'ir-ardashir2'] },
  sources: pick('ir-adurnarseh', 'ir-ardashir2', 'ir-hormozd2'),
  photos: [],
  related: related(['hormizd-ii', 'هرمز دوم، پدرش', 'Hormizd II, his father'], ['shapur-ii', 'شاپور دوم، برادرش', 'Shapur II, his brother']),
  wikipedia: 'https://en.wikipedia.org/wiki/Adur_Narseh',
}
