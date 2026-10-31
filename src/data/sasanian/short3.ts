/**
 * Ardashir II, Shapur III, Bahram IV and Yazdegerd I (379–420 CE).
 * Narrative: Encyclopaedia Iranica (Shahbazi “Ardašīr II”, “Yazdegerd I”; Klíma “Bahrām IV”) and Overlaet (2011, 2012) paraphrased.
 * Verbatim quotes: Agathias tr. Frendo (1975); Procopius tr. Dewing (1914); the Taq-e Bostan inscription as translated by Sasanika.
 * Left out on purpose: the story that Shapur III died when nobles cut his tent ropes (no source checked for this page beyond Wikipedia).
 */
import type { Bi, FeaturedKing } from '../featured/types'
import { ARBELA, ARMENIA, CAUCASUS, CONSTANTINOPLE, CTESIPHON, HIRA, HYRCANIA, ISFAHAN, KERMAN, SAS, SELEUCIA, TAQ_E_BOSTAN, ev, note, photos, pick, related, sec } from './common'

const B = (fa: string, en: string): Bi => ({ fa, en })

const SMALL_GROTTO = note(
  'کتیبه‌های ایوان کوچک دو شاه را شاپور دوم و شاپور سوم می‌نامند. اورلات (۲۰۱۱) می‌گوید تاج پیکر دوم با سکه‌های اردشیر دوم می‌خواند و کتیبه‌ها احتمالاً در زمان شاپور سوم افزوده شدند.',
  'The small grotto’s inscriptions name the two kings as Shapur II and Shapur III. Overlaet (2011) argues that the second figure’s crown matches Ardashir II’s coins and that the inscriptions were probably added under Shapur III.')

const ARMENIA_DATE = note(
  'تاریخ تقسیم ارمنستان یکسان گزارش نمی‌شود. شهبازی (ایرانیکا، «اردشیر دوم») تقسیم را در زمان شاپور سوم می‌گذارد؛ کلیما (ایرانیکا، «بهرام چهارم») می‌گوید بهرام چهارم در ۳۸۹ م. با تئودوسیوس یکم دربارهٔ آن گفت‌وگو کرد.',
  'The date of the partition of Armenia is reported differently. Shahbazi (Iranica, “Ardašīr II”) puts it under Shapur III; Klíma (Iranica, “Bahrām IV”) says Bahram IV negotiated it with Theodosius I in 389.')

const GUARDIAN = note(
  'داستان سرپرستی محل بحث است. پروکوپیوس (سدهٔ ششم) آن را می‌آورد. آگاثیاس، هم‌روزگار او، می‌گوید آن را در هیچ سند یا تاریخی جز پروکوپیوس نیافته است، هرچند مردم بسیار بازگویش می‌کردند. ایرانیکا (شهبازی) آن را می‌پذیرد.',
  'The guardianship story is disputed. Procopius (6th century) tells it. Agathias, his contemporary, says he found it in no document or history except Procopius, although people told it widely. Iranica (Shahbazi) accepts it.')

const HORSE = note(
  'داستان اسب افسانه است. نولدکه و ایرانیکا می‌گویند بزرگان آن را ساختند و احتمالاً خودشان شاه را در گرگان دوردست کشتند. موسی خورنی می‌گوید از بیماری مرد، و پروکوپیوس هم مرگ او را از بیماری می‌داند.',
  'The horse story is a legend. Nöldeke and Iranica say the nobles made it up and probably murdered the king themselves in remote Hyrcania. Moses Khorenatsʿi says he died of illness, and Procopius also says disease took him.')

export const ardashirII: FeaturedKing = {
  slug: 'ardashir-ii', name: B('اردشیر دوم', 'Ardashir II'), dynastyName: SAS,
  reign: B('۳۷۹–۳۸۳ م.', '379–383 CE'),
  title: B('اردشیر دوم؛ شاهِ میانجی و نقش طاق بستان', 'Ardashir II: the caretaker king and the Taq-e Bostan relief'),
  lede: B(
    'اردشیر دوم برادر ناتنی و کمی کوچک‌تر شاپور دوم بود و سال‌ها شاه حدیاب (آدیابنه) بود. شاپور او را جانشین کرد، به این شرط که تاج را به پسر شاپور بسپارد. چهار سال پادشاهی کرد و بزرگان برکنارش کردند. یادگار نامدارش نقش دیهیم‌ستانی در طاق بستان است.',
    'Ardashir II was Shapur II’s slightly younger half-brother and for years king of Adiabene (Ḥadyab). Shapur named him successor on condition that he hand the crown on to Shapur’s son. He reigned four years and was deposed by the nobles. His famous monument is the investiture relief at Taq-e Bostan.'),
  stats: [{ n: B('۴', '4'), l: B('سال پادشاهی', 'years of reign') }],
  mapTitle: B('نقشه: پادشاهی اردشیر دوم', 'Map: the reign of Ardashir II'),
  span: [344, 383],
  events: [
    ev('adiabene', 344, B('۳۴۴ و ۳۷۶ م.', '344 and 376 CE'), 'admin', ARBELA, B('شاه حدیاب', 'King of Adiabene'), B('به گفتهٔ ایرانیکا (شهبازی)، کارنامه‌های شهیدان سریانی اردشیر را در ۳۴۴ و ۳۷۶ م. شاه حدیاب (آدیابنه، پیرامون اربیل) می‌نامند.', 'According to Iranica (Shahbazi), Syriac martyr acts name Ardashir as king of Adiabene (Ḥadyab, around Arbela) in 344 and 376.'), 'probable', ['ir-ardashir2']),
    ev('accession', 379, B('۳۷۹ م.', '379 CE'), 'admin', CTESIPHON, B('جانشینی با یک شرط', 'Succession with a condition'), B('شاپور دوم اردشیر را جانشین کرد و از او پیمان گرفت که چون پسر شاپور، که او هم شاپور نام داشت، بزرگ شد، به سودش کنار برود.', 'Shapur II made Ardashir his successor and took a pledge from him to step down in favour of Shapur’s son, also called Shapur, when he came of age.'), 'probable', ['ir-ardashir2', 'agathias']),
    ev('relief', 380, B('در پادشاهی او', 'during his reign'), 'building', TAQ_E_BOSTAN, B('نقش طاق بستان', 'The Taq-e Bostan relief'), B('اردشیر جای نقش‌های شاهی را از فارس به طاق بستان، نزدیک کرمانشاه، برد. در نقش او سه پیکر ایستاده‌اند و زیر پای دو شاه رومی کشته‌ای افتاده است.', 'Ardashir moved the site of royal monuments from Fars to Taq-e Bostan near Kermanshah. His relief shows three standing figures, with a slain Roman beneath the feet of the two kings.'), 'secure', ['ir-ardashir2', 'overlaet2']),
    ev('armenia', 382, B('حدود ۳۸۲ م.', 'c. 382 CE'), 'campaign', ARMENIA, B('مانوئل و ارمنستان', 'Manuel and Armenia'), B('سردار ارمنی، مانوئل، شاهی را که روم گماشته بود برکنار کرد و از اردشیر یاری خواست. ارمنستان زیر حمایت ایران رفت. اما مانوئل به زودی بر پادگان ایرانی شورید و جنگ درگرفت.', 'The Armenian general Manuel deposed a king set up by the Romans and asked Ardashir for help. Armenia became a Persian protectorate. But Manuel soon turned on the Persian garrison and war broke out.'), 'probable', ['ir-ardashir2'], note('منبع اصلی فاوستوس بیزانسی است، که روایتی ارمنی و گاه افسانه‌وار دارد.', 'The main source is Faustus of Byzantium, an Armenian account that is sometimes legendary.')),
    ev('deposed', 383, B('۳۸۳ م.', '383 CE'), 'admin', CTESIPHON, B('برکناری', 'Deposition'), B('بزرگان اردشیر را به سود شاپور سوم برکنار کردند. منابع می‌گویند با بزرگان سخت‌گیر بود. ایرانیکا این را کوشش او برای مهار قدرت بزرگان، به شیوهٔ شاپور دوم، می‌داند.', 'The nobles deposed Ardashir in favour of Shapur III. The sources say he was harsh with the nobles. Iranica takes this as his attempt to curb their power, as Shapur II had done.'), 'probable', ['ir-ardashir2']),
  ],
  dossier: [
    sec('relief', 'نقش طاق بستان: چه کسی تاج می‌دهد؟', 'The Taq-e Bostan relief: who gives the crown?',
      [['در نقش، اردشیر در میان ایستاده است. در سمت راست پیکری با تاج کنگره‌دار حلقهٔ شاهی را به او می‌دهد. پشت سر اردشیر پیکری با دستهٔ برسم و تاجی با دوازده پرتو خورشید بر گل نیلوفری بزرگ ایستاده است. زیر پای دو شاه پیکر رومی کشته‌ای افتاده که دیهیمش نشان می‌دهد امپراتور است.'],
        ['In the relief Ardashir stands in the middle. On the right a figure in a crenellated crown hands him the ring of kingship. Behind Ardashir stands a figure holding the barsom bundle, wearing a crown of twelve sun rays, on a large lotus flower. Beneath the feet of the two kings lies a slain Roman whose diadem marks him as an emperor.']],
      [['پیکر تاج‌دهنده را زمانی اهورامزدا می‌دانستند. شهبازی (به پیروی از کالمایر) می‌گوید تاج کنگره‌دارش تاج شاپور دوم است، که به راستی اردشیر را شاه کرد. اورلات (۲۰۱۲) دوباره این پرسش را باز کرده است، پس این محل بحث است. پیکر پرتودار را مهر می‌دانند. رومی افتاده را «به‌احتمال» ژولیان دانسته‌اند؛ چون اردشیر در ۳۶۳ م. شاه حدیاب بود، شاید در دفاع در برابر ژولیان سهم داشت.'],
        ['The crown-giver was once taken to be Ahura Mazda. Shahbazi (following Calmeyer) says his crenellated crown is Shapur II’s, who did indeed make Ardashir king. Overlaet (2012) has reopened the question, so this remains disputed. The rayed figure is taken to be Mithra. The fallen Roman has “plausibly” been identified as Julian; since Ardashir was king of Adiabene in 363, he may have shared in the defence against Julian.']],
      [['ایرانیکا مهر را در این نقش «ایزد پیمان» می‌داند که بر پیمان دو شاه داوری می‌کند: اردشیر تاج را پس خواهد داد. این‌جا قدرت با پیمانی سپرده می‌شود که خدا گواه آن است، نه با رأی کسانی که زیر آن قدرت زندگی می‌کنند.'],
        ['Iranica reads Mithra here as the god of contract judging the pact between the two kings: Ardashir will give the crown back. Here power is handed over by a pact with a god as witness, not by the vote of those who live under it.']],
      ['ir-ardashir2', 'overlaet2'], { photos: ['tb-ardashir2'] }),
    sec('coins', 'سکه‌ها و تاج گنبدی', 'Coins and the domed crown',
      [['سکه‌های اردشیر تاج گنبدی اردشیر یکم را نشان می‌دهند. پشت سکه آتشدان و دو نگهبان است، و بر برخی سکه‌ها نیم‌تنهٔ شاه از میان آتش برمی‌آید. نوشتهٔ سکه معمولاً «اردشیر، شاهنشاه ایران» است و کمتر «و انیران».'],
        ['Ardashir’s coins show the domed crown of Ardashir I. The reverse has the fire altar and two attendants, and on some coins the king’s bust rises from the fire. The legend is usually “Ardashir, king of kings of the Iranians”, and rarely “and non-Iranians”.']],
      [['ایرانیکا نیم‌تنهٔ میان آتش را شاید نشان فرّه، بخت شاهی، می‌داند. «شاید» از خود ایرانیکاست.'],
        ['Iranica suggests the bust in the fire may represent the farrah, the royal fortune. The “may” is Iranica’s own.']],
      [['شاهی که تاج بنیان‌گذار را برمی‌گزیند، مشروعیت را از تبار می‌گیرد. سکه ابزار پیام بود: هر کس در بازار سکه‌ای می‌گرفت، تاج و ادعای شاه را هم در دست داشت.'],
        ['A king who chooses the founder’s crown draws legitimacy from lineage. Coins were a tool of message: anyone handed a coin in the market held the king’s crown and claim too.']],
      ['ir-ardashir2'], { photos: ['coin-ardashir2'] }),
  ],
  synthesis: { title: B('جمع‌بندی', 'Synthesis'), paras: { fa: ['اردشیر دوم شاهی میانجی بود: تاج را با پیمانی گرفت که باید پسش می‌داد. پادشاهی‌اش کوتاه بود و بزرگان کنارش زدند. اما با بردن نقش‌های شاهی به طاق بستان یادگاری ماندگار گذاشت.'], en: ['Ardashir II was a caretaker king: he took the crown under a pact to give it back. His reign was short and the nobles set him aside. But by moving royal reliefs to Taq-e Bostan he left a lasting monument.'] }, sources: ['ir-ardashir2'] },
  sources: pick('ir-ardashir2', 'agathias', 'overlaet', 'overlaet2'),
  photos: photos('tb-ardashir2', 'coin-ardashir2'),
  related: related(['shapur-ii', 'شاپور دوم، برادرش', 'Shapur II, his brother'], ['shapur-iii', 'شاپور سوم، جانشینش', 'Shapur III, his successor']),
  wikipedia: 'https://en.wikipedia.org/wiki/Ardashir_II',
}

export const shapurIII: FeaturedKing = {
  slug: 'shapur-iii', name: B('شاپور سوم', 'Shapur III'), dynastyName: SAS,
  reign: B('۳۸۳–۳۸۸ م.', '383–388 CE'),
  title: B('شاپور سوم؛ پسری که تاجش را پس گرفت', 'Shapur III: the son who got his crown back'),
  lede: B(
    'شاپور سوم پسر شاپور دوم بود. پدرش تاج را با شرطی به اردشیر دوم سپرده بود که به او برسد، و در ۳۸۳ م. بزرگان اردشیر را برکنار کردند و شاپور شاه شد. آگاثیاس می‌گوید پنج سال پادشاهی کرد. در ایوان کوچک طاق بستان کتیبه‌ای او را کنار پدرش می‌نامد.',
    'Shapur III was a son of Shapur II. His father had left the crown to Ardashir II on condition that it pass to him, and in 383 the nobles deposed Ardashir and Shapur became king. Agathias says he reigned five years. In the small grotto at Taq-e Bostan an inscription names him beside his father.'),
  stats: [{ n: B('۵', '5'), l: B('سال پادشاهی', 'years of reign') }],
  mapTitle: B('نقشه: پادشاهی شاپور سوم', 'Map: the reign of Shapur III'),
  span: [383, 388],
  events: [
    ev('accession', 383, B('۳۸۳ م.', '383 CE'), 'admin', CTESIPHON, B('بر تخت', 'Accession'), B('بزرگان اردشیر دوم را برکنار کردند و شاپور، پسر شاپور دوم، شاه شد.', 'The nobles deposed Ardashir II and Shapur, son of Shapur II, became king.'), 'secure', ['ir-ardashir2', 'agathias']),
    ev('grotto', 384, B('در پادشاهی او', 'during his reign'), 'building', TAQ_E_BOSTAN, B('ایوان کوچک طاق بستان', 'The small grotto at Taq-e Bostan'), B('در ایوان کوچک دو شاه ایستاده‌اند و کتیبه‌ها آنان را شاپور دوم و شاپور سوم می‌نامند.', 'In the small grotto two kings stand side by side, and the inscriptions name them as Shapur II and Shapur III.'), 'disputed', ['sasanika-stbn', 'overlaet'], SMALL_GROTTO),
    ev('armenia', 387, B('دههٔ ۳۸۰ م.', '380s CE'), 'admin', ARMENIA, B('تقسیم ارمنستان', 'The partition of Armenia'), B('پس از جنگی که در زمان اردشیر دوم درگرفت، ارمنستان میان ایران و روم شرقی تقسیم شد. بخش بزرگ‌تر به ایران رسید.', 'After the war that broke out under Ardashir II, Armenia was divided between Persia and the Eastern Roman Empire. The larger part went to Persia.'), 'disputed', ['ir-ardashir2', 'ir-bahram4'], ARMENIA_DATE),
    ev('end', 388, B('۳۸۸ م.', '388 CE'), 'admin', CTESIPHON, B('پایان پادشاهی', 'End of the reign'), B('پادشاهی شاپور سوم در ۳۸۸ م. پایان یافت و پسرش بهرام چهارم جانشین او شد. ایرانیکا (کلیما) می‌گوید از مرگ شاپور دوم به بعد بزرگان و موبدان شاهان را برمی‌گزیدند، برکنار می‌کردند و می‌کشتند.', 'Shapur III’s reign ended in 388 and his son Bahram IV succeeded him. Iranica (Klíma) says that after Shapur II’s death the nobles and priests elected, deposed and killed kings at will.'), 'probable', ['agathias', 'ir-bahram4', 'ir-bahram5'], note('چگونگی مرگ او در منابعی که برای این صفحه بررسی شد روشن نیست، پس داستانی دربارهٔ آن نمی‌آوریم.', 'How he died is not clear in the sources checked for this page, so we give no story about it.')),
  ],
  dossier: [
    sec('grotto', 'کتیبه‌ای که شاید بعدها افزوده شد', 'An inscription that may have been added later',
      [['کتیبهٔ دوم ایوان کوچک، به ترجمهٔ ساسانیکا، شاه را «شاپور» پسر شاپور و نوهٔ هرمزد می‌نامد. کتیبهٔ نخست شاپور دوم را پسر هرمزد و نوهٔ نرسی می‌خواند.'],
        ['The second inscription of the small grotto, as translated by Sasanika, names the king as Shapur, son of Shapur and grandson of Hormizd. The first calls Shapur II son of Hormizd and grandson of Narseh.']],
      [['اورلات (۲۰۱۱) می‌گوید جزئیات تاج و طرح نقش با این نام‌ها نمی‌خواند و پیکر دوم احتمالاً اردشیر دوم است؛ کتیبه‌ها شاید هنگام رسیدن شاپور سوم به قدرت افزوده شدند. اگر چنین باشد، شاپور سوم نقش عمویش را به نام خود کرد.'],
        ['Overlaet (2011) argues that the crown and design of the relief do not fit these names and that the second figure is probably Ardashir II; the inscriptions may have been added when Shapur III came to power. If so, Shapur III claimed his uncle’s relief as his own.']],
      [['شاپور سوم تاجی را گرفت که پدرش با پیمان برایش نگه داشته بود. اما همان بزرگانی که اردشیر را برکنار کردند، داوران واقعی جانشینی بودند. پیمان میان دو شاه بود؛ نیروی اجرایش در دست بزرگان.'],
        ['Shapur III took a crown his father had kept for him by a pact. But the same nobles who deposed Ardashir were the real judges of succession. The pact was between two kings; the power to enforce it lay with the nobles.']],
      ['sasanika-stbn', 'overlaet'], {
        quotes: [{ text: 'This is the image of the Mazda-worshipping lord, Šāpūr, king of kings of the Iranians and non-Iranians, whose lineage is from the gods, son of the Mazda-worshipping lord, Šāpūr, king of kings of the Iranians and non-Iranians, whose lineage is from the gods, grandson of the lord, Hormizd, king of kings', fa: 'این پیکر خداوندِ مزداپرست، شاپور، شاهنشاه ایران و انیران است که تبارش از ایزدان است، پسر خداوندِ مزداپرست، شاپور، شاهنشاه ایران و انیران که تبارش از ایزدان است، نوهٔ خداوند هرمزد شاهنشاه', ref: 'ŠTBn-II, tr. Sasanika', source: 'sasanika-stbn' }],
        photos: ['tb-small'],
      }),
  ],
  synthesis: { title: B('جمع‌بندی', 'Synthesis'), paras: { fa: ['از شاپور سوم کم می‌دانیم: تاجی که با پیمان به او رسید، پنج سال پادشاهی، تقسیم ارمنستان (که تاریخش محل بحث است) و کتیبه‌ای در طاق بستان که شاید نقش دیگری را به نام او کرد.'], en: ['We know little of Shapur III: a crown that came to him by a pact, five years of rule, the partition of Armenia (whose date is disputed), and an inscription at Taq-e Bostan that may have claimed someone else’s relief for him.'] }, sources: ['ir-ardashir2', 'overlaet'] },
  sources: pick('ir-ardashir2', 'agathias', 'sasanika-stbn', 'overlaet', 'ir-bahram4', 'ir-bahram5'),
  photos: photos('tb-small', 'coin-shapur3'),
  related: related(['shapur-ii', 'شاپور دوم، پدرش', 'Shapur II, his father'], ['ardashir-ii', 'اردشیر دوم، عمویش', 'Ardashir II, his uncle'], ['bahram-iv', 'بهرام چهارم، پسرش', 'Bahram IV, his son']),
  wikipedia: 'https://en.wikipedia.org/wiki/Shapur_III',
}

export const bahramIV: FeaturedKing = {
  slug: 'bahram-iv', name: B('بهرام چهارم', 'Bahram IV'), dynastyName: SAS,
  reign: B('۳۸۸–۳۹۹ م.', '388–399 CE'),
  title: B('بهرام چهارم؛ «کرمان‌شاه»، تقسیم ارمنستان و توطئهٔ بزرگان', 'Bahram IV: the “Kerman-shah”, the partition of Armenia and a nobles’ plot'),
  lede: B(
    'بهرام چهارم یازده سال پادشاهی کرد. پیش از شاهی فرماندار کرمان بود و لقب «کرمان‌شاه» داشت. با روم بر سر ارمنستان به توافق رسید، و در ۳۹۵ م. هون‌ها از قفقاز تا میان‌رودان تاختند. ایرانیکا او را شاهی ناتوان می‌نامد که قربانی توطئهٔ بزرگان شد.',
    'Bahram IV reigned eleven years. Before becoming king he was governor of Kerman and bore the title Kerman-shah. He came to terms with Rome over Armenia, and in 395 Huns raided from the Caucasus as far as Mesopotamia. Iranica calls him a weak ruler who fell victim to a plot by the nobles.'),
  stats: [{ n: B('۱۱', '11'), l: B('سال پادشاهی', 'years of reign') }],
  mapTitle: B('نقشه: پادشاهی بهرام چهارم', 'Map: the reign of Bahram IV'),
  span: [388, 399],
  events: [
    ev('kerman', 388, B('پیش از ۳۸۸ م.', 'before 388 CE'), 'admin', KERMAN, B('کرمان‌شاه', 'Kerman-shah'), B('بهرام پیش از شاهی فرماندار کرمان بود و لقب کرمان‌شاه داشت. نگین آمتیستی در موزهٔ بریتانیا نیم‌تنهٔ او را با نوشتهٔ پهلوی «بهرام کرمان‌شاه، پسر شاپور شاهنشاه» نشان می‌دهد.', 'Before his accession Bahram was governor of Kerman with the title Kerman-shah. An amethyst intaglio in the British Museum shows his bust with a Pahlavi legend naming him “Wahrān Kermān-shāh, son of … Šāpūr, king of kings”.'), 'secure', ['ir-bahram4', 'agathias']),
    ev('accession', 388, B('۳۸۸ م.', '388 CE'), 'admin', CTESIPHON, B('بر تخت', 'Accession'), B('بهرام پس از شاپور سوم شاه شد. طبری او را پسر شاپور دوم می‌داند، اما آگاثیاس، حمزه و شاهنامه او را پسر شاپور سوم می‌خوانند، که محتمل‌تر است.', 'Bahram succeeded Shapur III. Tabari makes him a son of Shapur II, but Agathias, Hamza and the Shahnameh make him a son of Shapur III, which is more likely.'), 'probable', ['ir-bahram4', 'agathias']),
    ev('armenia', 389, B('۳۸۹ م.', '389 CE'), 'admin', ARMENIA, B('تقسیم ارمنستان', 'Armenia divided'), B('بهرام با امپراتور تئودوسیوس یکم گفت‌وگو کرد و ارمنستان میان دو امپراتوری تقسیم شد.', 'Bahram negotiated with the emperor Theodosius I and Armenia was divided between the two empires.'), 'disputed', ['ir-bahram4', 'ir-ardashir2'], ARMENIA_DATE),
    ev('vramshapuh', 394, B('۳۹۴ م.', '394 CE'), 'admin', ARMENIA, B('ورامشاپوه در ارمنستان', 'Vramshapuh in Armenia'), B('شاهی که بهرام بر بخش ایرانی ارمنستان گماشته بود به روم، هم‌کیشانش، پیوست. بهرام برادرش بهرام‌شاپور (ورامشاپوه) را به جای او نشاند.', 'The king Bahram had set over Persian Armenia went over to his fellow Christians, the Romans. Bahram replaced him with his own brother Bahram-Shapur (Vramshapuh).'), 'probable', ['ir-bahram4']),
    ev('huns', 395, B('۳۹۵ م.', '395 CE'), 'battle', CAUCASUS, B('یورش هون‌ها', 'The Hun invasion'), B('گروهی از هون‌ها از شمال قفقاز به جنوب تاختند و تنها در خاک میان‌رودان شکست خوردند و رانده شدند.', 'A horde of Huns swept south from the North Caucasus and were defeated and driven back only on Mesopotamian soil.'), 'secure', ['ir-bahram4']),
    ev('death', 399, B('۳۹۹ م.', '399 CE'), 'admin', CTESIPHON, B('کشته به دست بزرگان', 'Killed by the nobles'), B('بهرام قربانی توطئهٔ بزرگان نیرومند شد و جان باخت.', 'Bahram fell victim to a conspiracy of powerful nobles and lost his life.'), 'probable', ['ir-bahram4']),
  ],
  dossier: [
    sec('armenia', 'ارمنستانِ دوپاره', 'Armenia in two parts',
      [['ایرانیکا (کلیما): بهرام در ۳۸۹ م. با تئودوسیوس یکم ارمنستان را میان دو امپراتوری تقسیم کرد. بخش بزرگ‌تر، «پرسارمنیا»، به ایران رسید. چون شاه آن بخش در ۳۹۴ م. به روم پیوست، بهرام برادرش ورامشاپوه را جای او گذاشت.'],
        ['Iranica (Klíma): in 389 Bahram and Theodosius I divided Armenia between the two empires. The larger part, Persarmenia, went to Persia. When that part’s king went over to Rome in 394, Bahram replaced him with his brother Vramshapuh.']],
      [['شاه ارمنی به «هم‌کیشان مسیحی‌اش» پیوست؛ دین مرز سیاسی شده بود. تاریخ دقیق تقسیم در ایرانیکا یکسان نیامده است.'],
        ['The Armenian king went over to his “co-religionist” Romans; religion had become a political border. Iranica does not give the date of the partition consistently.']],
      [['تقسیم ارمنستان را دو امپراتوری بستند، نه ارمنیان. سرزمینی که دو همسایه بی‌رضایت مالکش میان خود تقسیم کنند، به مالک تعلق ندارد، به زور تعلق دارد.'],
        ['The partition of Armenia was made by two empires, not by the Armenians. A land that two neighbours divide without its owner’s consent belongs not to the owner but to force.']],
      ['ir-bahram4', 'ir-ardashir2']),
    sec('seals', 'دو نگین در موزهٔ بریتانیا', 'Two gems in the British Museum',
      [['نگین آمتیستی، شاهزاده بهرام را با کلاهی مروارید‌نشان نشان می‌دهد و نوشته‌اش او را «کرمان‌شاه، پسر شاپور شاهنشاه» می‌نامد. نگین عقیقی دیگر، شاه را با تاج شاهین‌مانند، زوبین در دست، بر پیکر دشمنی افتاده نشان می‌دهد.'],
        ['An amethyst intaglio shows Prince Bahram in a pearl-rimmed cap, and its legend calls him Kerman-shah, son of Shapur, king of kings. Another, of chalcedony, shows the king in a falcon-shaped crown, javelin in hand, trampling a fallen enemy.']],
      [['آگاثیاس لقب کرمان‌شاه را از فهرست شاهی ایران گرفته است. ایرانیکا می‌گوید نام کرمانشاه، شهری در غرب ایران، شاید یادگار همین لقب باشد؛ این «شاید» است، نه قطعی.'],
        ['Agathias took the title Kerman-shah from the Persian king list. Iranica says the name of Kermanshah, a town in western Iran, may preserve this title; that is a “may”, not a certainty.']],
      [['دو نگین، دو چهره: شاهزاده‌ای با لقب فرمانداری و شاهی پیروز بر دشمن. ایرانیکا اما او را «ناتوان» می‌نامد. تصویر رسمی شاه همیشه با جایگاه واقعی او یکی نبود.'],
        ['Two gems, two faces: a prince with a governor’s title and a king triumphant over an enemy. Yet Iranica calls him “weak”. The king’s official image was not always his real standing.']],
      ['ir-bahram4', 'agathias'], { quotes: [{ text: 'He was given the title Kermanshah.', fa: 'لقب کرمان‌شاه به او داده شد.', ref: 'Agathias 4.26.1, tr. Frendo (1975)', source: 'agathias' }], photos: ['coin-bahram4'] }),
  ],
  synthesis: { title: B('جمع‌بندی', 'Synthesis'), paras: { fa: ['بهرام چهارم در دوره‌ای پادشاهی کرد که بزرگان شاه می‌ساختند و شاه می‌کشتند. با روم بر سر ارمنستان کنار آمد، یورش هون‌ها را از سر گذراند و سرانجام قربانی توطئه شد.'], en: ['Bahram IV reigned in a period when the nobles made and killed kings. He came to terms with Rome over Armenia, survived the Hun invasion, and in the end fell to a plot.'] }, sources: ['ir-bahram4'] },
  sources: pick('ir-bahram4', 'agathias', 'ir-ardashir2'),
  photos: photos('coin-bahram4'),
  related: related(['shapur-iii', 'شاپور سوم، پدرش', 'Shapur III, his father'], ['yazdegerd-i', 'یزدگرد یکم، برادرش و جانشینش', 'Yazdegerd I, his brother and successor']),
  wikipedia: 'https://en.wikipedia.org/wiki/Bahram_IV',
}

export const yazdegerdI: FeaturedKing = {
  slug: 'yazdegerd-i', name: B('یزدگرد یکم', 'Yazdegerd I'), dynastyName: SAS,
  reign: B('۳۹۹–۴۲۰ م.', '399–420 CE'),
  title: B('یزدگرد یکم؛ «بزه‌گر» یا «نیکوکار»؟', 'Yazdegerd I: “the Sinner” or “the kind”?'),
  lede: B(
    'منابعی که از سنت ساسانی می‌آیند یزدگرد یکم را «بزه‌گر» می‌نامند. اما منابع مسیحی و رومی او را «نیک و بخشنده» می‌خوانند. او با روم در صلح ماند، به مسیحیان آزادی داد و شورای کلیسایی ۴۱۰ م. سلوکیه را ممکن کرد. ایرانیکا می‌گوید لقب «بزه‌گر» داوری موبدان و بزرگان است، که از قدرت‌طلبی او بیزار بودند.',
    'Sources drawing on Sasanian tradition call Yazdegerd I “the Sinner”. But Christian and Roman sources call him “good and clement”. He kept the peace with Rome, gave Christians freedom and made possible the church council of Seleucia in 410. Iranica says the epithet “Sinner” is the verdict of the priests and nobles, who hated his attempt to rule with full authority.'),
  stats: [{ n: B('۲۱', '21'), l: B('سال پادشاهی', 'years of reign') }, { n: B('۴۱۰', '410'), l: B('شورای سلوکیه', 'Council of Seleucia') }],
  mapTitle: B('نقشه: پادشاهی یزدگرد یکم', 'Map: the reign of Yazdegerd I'),
  span: [399, 420],
  events: [
    ev('accession', 399, B('۳۹۹ م.', '399 CE'), 'admin', CTESIPHON, B('بر تخت', 'Accession'), B('یزدگرد پس از کشته شدن بهرام چهارم شاه شد. کارنامهٔ شورای سلوکیه او را «پسر شاپور» می‌نامد؛ روشن نیست شاپور دوم یا سوم. آگاثیاس و بیشتر منابع او را پسر شاپور سوم می‌دانند.', 'Yazdegerd became king after Bahram IV was killed. The Acts of the Council of Seleucia call him “son of Shapur”; it is not clear whether Shapur II or III. Agathias and most sources make him a son of Shapur III.'), 'probable', ['ir-yazdegerd1', 'agathias']),
    ev('guardian', 408, B('۴۰۸ م.', '408 CE'), 'admin', CONSTANTINOPLE, B('سرپرست تئودوسیوس؟', 'Guardian of Theodosius?'), B('به روایت پروکوپیوس، امپراتور آرکادیوس در وصیت خود یزدگرد را سرپرست پسر خردسالش تئودوسیوس کرد. یزدگرد پذیرفت، به سنای روم نامه نوشت و هر توطئه‌گری را به جنگ تهدید کرد.', 'According to Procopius, the emperor Arcadius in his will named Yazdegerd guardian of his infant son Theodosius. Yazdegerd accepted, wrote to the Roman senate and threatened war on anyone who plotted against the child.'), 'disputed', ['procopius', 'agathias', 'ir-yazdegerd1'], GUARDIAN),
    ev('edict', 409, B('حدود ۴۰۹ م.', 'c. 409 CE'), 'religion', CTESIPHON, B('فرمان آزادی مسیحیان', 'An edict of freedom for Christians'), B('به پیشنهاد اسقف ماروتا، فرستادهٔ امپراتور روم شرقی، یزدگرد فرمانی داد که به مسیحیان اجازه می‌داد آشکارا نیایش کنند، کلیساهای ویران را بازسازی کنند و اسقفان آزادانه سفر کنند. آن را «فرمان میلان کلیسای آشوری» نامیده‌اند.', 'On the advice of Bishop Marutha, the Eastern Roman emperor’s envoy, Yazdegerd issued a decree allowing Christians to worship openly, rebuild ruined churches and let bishops travel freely. It has been called “the Edict of Milan for the Assyrian Church”.'), 'secure', ['ir-yazdegerd1']),
    ev('council', 410, B('۴۱۰ م.', '410 CE'), 'religion', SELEUCIA, B('شورای سلوکیه', 'The Council of Seleucia'), B('ماروتا شاه را قانع کرد که شورایی دینی در سلوکیه برای سامان دادن کار کلیسا برپا شود. موبدان از این پشتیبانی رنجیدند.', 'Marutha persuaded the king to convene a church council at Seleucia to organize church affairs. The Magi resented this patronage.'), 'secure', ['ir-yazdegerd1']),
    ev('jews', 410, B('در پادشاهی او', 'during his reign'), 'religion', ISFAHAN, B('یهودیان و شوشندخت', 'The Jews and Shushandukht'), B('یزدگرد با یهودیان مهربان بود و رئیس جالوت او را «کوروشی نو» خواند. برخی گفته‌اند همسرش شوشندخت دختر رئیس جالوت و مادر بهرام و نرسی بود، و یزدگرد به خواهش او یهودیان را در جی (اصفهان) نشاند.', 'Yazdegerd was kind to the Jews, and their exilarch hailed him a new Cyrus. Some said his wife Shushandukht was the exilarch’s daughter and mother of Bahram and Narseh, and that at her request he settled Jews at Gay (Isfahan).'), 'disputed', ['ir-yazdegerd1'], note('داستان شوشندخت از شهرستان‌های ایران است و ایرانیکا آن را با «برخی گفته‌اند» می‌آورد.', 'The Shushandukht story comes from the Šahrestānīhā ī Ērān, and Iranica gives it as “some even said”.')),
    ev('persecution', 420, B('واپسین سال', 'his last year'), 'religion', CTESIPHON, B('آزار مسیحیان در پایان', 'Persecution at the end'), B('در واپسین سال، یزدگرد رفتارش را دگرگون کرد و فرمان آزار مسیحیان را داد، چون به گفتهٔ منابع برخی آتشکده‌ها را ویران کرده بودند. گماشتن مهرنرسی به وزارت بزرگ احتمالاً از همین زمان است.', 'In his last year Yazdegerd changed course and ordered a persecution of the Christians, because, the sources say, some had destroyed fire temples. The appointment of Mihr-Narseh as grand minister probably dates from this time.'), 'probable', ['ir-yazdegerd1'], note('سبب دگرگونی محل بحث است: ایرانیکا گستاخی برخی مسیحیان را می‌گوید؛ فان رومپای گرویدن بزرگان ایرانی به مسیحیت را.', 'The cause of the change is disputed: Iranica points to provocations by some Christians; van Rompay to the conversion of high-ranking Persians.')),
    ev('death', 420, B('۴۲۰ م.', '420 CE'), 'admin', HYRCANIA, B('اسبی از چشمه (افسانه)', 'A horse from a spring (legend)'), B('به روایت سنت ایرانی، یزدگرد در گرگان با لگد اسبی شگفت که از چشمه‌ای برآمد و در آن ناپدید شد کشته شد، و مردم گفتند آن اسب فرشته‌ای بود که خدا فرستاد.', 'In Iranian tradition, Yazdegerd was killed in Hyrcania by a wondrous horse that rose from a spring and vanished back into it, and people said the horse was an angel sent by God.'), 'disputed', ['ir-yazdegerd1', 'procopius'], HORSE),
    ev('sons', 420, B('۴۲۰ م.', '420 CE'), 'admin', HIRA, B('پسرانش', 'His sons'), B('بزرگان خواستند پسرانش را از تخت دور کنند. شاپور، شاه ارمنستان، به تیسفون شتافت و کشته شد. بهرام، که در حیره بزرگ شده بود، با سپاهی عرب به تیسفون آمد و تاج گرفت.', 'The nobles meant to keep his sons from the throne. Shapur, king of Armenia, hurried to Ctesiphon and was killed. Bahram, raised at Hira, came to Ctesiphon with an Arab army and took the crown.'), 'secure', ['ir-yazdegerd1', 'ir-bahram5']),
  ],
  dossier: [
    sec('sinner', '«بزه‌گر» یا «نیکوکار»؟', '“The Sinner” or “the kind”?',
      [['طبری، بلعمی و یعقوبی او را ستمگری بدگمان و خودپسند می‌نامند که بزرگان را خوار کرد و خون بسیار ریخت. لقب‌هایش «الاثیم» (گناهکار، در طبری)، «بزه‌گر» (در شاهنامه) و «دبهر» (رانده، از پارسی میانه دیپهر، زندان) است. منابع مسیحی اما از «یزدگرد شاه نیک و بخشنده» سخن می‌گویند که هر روز به تهی‌دستان نیکی می‌کرد، و پروکوپیوس او را به بزرگ‌منشی نامدار می‌خواند.'],
        ['Tabari, Balʿami and Yaʿqubi call him a suspicious, selfish tyrant who belittled the nobles and shed much blood. His epithets are al-athim (“the Sinner”, in Tabari), bazahgar (in the Shahnameh) and dabhr (“outcast”, from Middle Persian dīpahr, prison). But Christian sources speak of “the good and clement King Yazdegerd” who every day did good to the poor, and Procopius calls him renowned for nobility of character.']],
      [['نولدکه و ایرانیکا (شهبازی) می‌گویند داوری منابع ساسانی احساس موبدان و بزرگان را نشان می‌دهد. آنان از سیاست صلح‌جو، مدارای دینی و کوشش او برای مهار قدرتشان بیزار بودند. حتی سنت ایرانی هم پنهان نمی‌کند که او پادشاهی را با نرمی و دادگری آغاز کرد. پس هر دو لقب از یک سو آمده‌اند: یکی از دشمنان، دیگری از کسانی که از او سود بردند.'],
        ['Nöldeke and Iranica (Shahbazi) say the Sasanian-based verdict reflects the feelings of the priests and nobles. They hated his peaceful policy, religious tolerance and attempt to curb their power. Even the native tradition cannot hide that he began his reign with mildness and justice. So both labels come from interested parties: one from his enemies, the other from those who gained from him.']],
      [['«بزه» در چشم موبدان مدارا با دین‌های دیگر بود. شاهی که به مسیحیان و یهودیان آزادی داد، در تاریخ رسمی گناهکار شد. آزادی وجدان در آن روزگار نه حق، بلکه بخشش شاه بود، و با شاه بعدی می‌توانست پس گرفته شود.'],
        ['In the priests’ eyes the “sin” was tolerance of other faiths. A king who gave freedom to Christians and Jews became a sinner in the official history. Freedom of conscience then was not a right but the king’s gift, and the next king could take it back.']],
      ['ir-yazdegerd1', 'procopius'], {
        quotes: [{ text: 'being even before a sovereign whose nobility of character had won for him the greatest renown, did then display a virtue at once amazing and remarkable', fa: 'که پیش از آن نیز شهریاری بود که بزرگ‌منشی‌اش بیشترین آوازه را برایش آورده بود، آن‌گاه فضیلتی شگفت و درخور یاد نشان داد', ref: 'Procopius, Wars 1.2.8, tr. Dewing (1914)', source: 'procopius' }],
        photos: ['coin-yazdegerd1'],
      }),
    sec('christians', 'مسیحیان: آزادی، شورا و سپس آزار', 'The Christians: freedom, a council, then persecution',
      [['ماروتا، اسقف و فرستادهٔ روم، اعتماد یزدگرد را به دست آورد. فرمان شاه به مسیحیان اجازهٔ نیایش آشکار و بازسازی کلیسا داد، و در ۴۱۰ م. شورای سلوکیه کلیسای ایران را سامان داد. یزدگرد جاثلیق را میانجی میان خود و برادرش، فرمانروای فارس، کرد و جاثلیق دیگری را به سفارت نزد تئودوسیوس فرستاد. اما در واپسین سال فرمان آزار داد.'],
        ['Marutha, bishop and Roman envoy, won Yazdegerd’s trust. The king’s decree let Christians worship openly and rebuild churches, and in 410 the Council of Seleucia organized the Church of Iran. Yazdegerd used the Catholicos as mediator with his brother, ruler of Fars, and sent another Catholicos as envoy to Theodosius. But in his last year he ordered a persecution.']],
      [['ایرانیکا سبب دگرگونی را گستاخی برخی مسیحیان می‌داند: ویران کردن آتشکده‌ها، دزدیدن سندهای مالکیت و سرپیچی از فرمان شاه. فان رومپای سبب را گرویدن بزرگان ایرانی به مسیحیت می‌داند که از بازگشت سر باز زدند. هر دو برداشت پژوهشی‌اند و منابع اصلی بیشتر کلیسایی‌اند.'],
        ['Iranica explains the change by provocations from some Christians: destroying fire temples, stealing property deeds and disobeying royal orders. Van Rompay sees the cause in high-ranking Persians who converted and would not recant. Both are scholarly readings, and the primary sources are mostly ecclesiastical.']],
      [['همین‌جا دو آزادی با هم برخورد کردند: آزادی دین مسیحیان و دارایی دیگران. ویران کردن آتشکده دست‌درازی به دارایی دیگران بود؛ آزار گروهی به سبب کار چند تن، کیفر کسانی بود که کاری نکرده بودند. آزادی دین بدون احترام به دارایی و کیفر فردی پایدار نمی‌ماند.'],
        ['Here two liberties collided: the Christians’ freedom of religion and other people’s property. Destroying a fire temple was an attack on others’ property; persecuting a whole community for the acts of a few punished people who had done nothing. Religious freedom does not last without respect for property and individual punishment.']],
      ['ir-yazdegerd1']),
    sec('guardian', 'سرپرست امپراتور روم؟ (داستانی محل بحث)', 'Guardian of the Roman emperor? (a disputed story)',
      [['پروکوپیوس می‌نویسد آرکادیوس، که از توطئهٔ درباریان و از ایرانیان بیم داشت، در وصیتش یزدگرد را سرپرست پسر خردسالش تئودوسیوس کرد. یزدگرد پذیرفت و تا پایان با روم در صلح ماند. تئوفانس می‌افزاید یزدگرد مربی‌ای به نام آنتیوخوس برای کودک فرستاد.'],
        ['Procopius writes that Arcadius, fearing plots at court and the Persians, named Yazdegerd in his will as guardian of his infant son Theodosius. Yazdegerd accepted and kept the peace with Rome to the end. Theophanes adds that Yazdegerd sent the child a tutor named Antiochus.']],
      [['آگاثیاس، تنها چند دهه پس از پروکوپیوس، می‌گوید داستان را مردم بسیار بازگو می‌کنند، اما آن را در هیچ سندی جز پروکوپیوس نیافته است. او هم بیش از همه از این شگفت است که پروکوپیوس آرکادیوس را برای این کار ستوده است. ایرانیکا داستان را می‌پذیرد. پس این‌جا آن را محل بحث می‌نامیم: شاید راست باشد، اما تنها یک منبع دارد.'],
        ['Agathias, only a few decades after Procopius, says the story is widely told but that he found it in no document except Procopius. What surprises him most is that Procopius praises Arcadius for it. Iranica accepts the story. So we mark it disputed here: it may be true, but it has a single source.']],
      [['اگر داستان راست باشد، دشمن دیرینه به پیمانی وفادار ماند که هیچ دادگاهی نمی‌توانست به اجرا بگذارد. اعتبار نام، بی‌آنکه قانونی آن را تضمین کند، کار قانون را کرد.'],
        ['If the story is true, an old enemy kept a trust that no court could enforce. Reputation did the work of law without any law to guarantee it.']],
      ['procopius', 'agathias', 'ir-yazdegerd1'], {
        quotes: [
          { text: 'appointed as guardian over him Isdigerdes, the Persian King, enjoining upon him earnestly in his will to preserve the empire for Theodosius by all his power and foresight', fa: 'یزدگرد، شاه ایران، را سرپرست او کرد و در وصیتش سخت از او خواست که با همهٔ توان و دوراندیشی‌اش امپراتوری را برای تئودوسیوس نگه دارد', ref: 'Procopius, Wars 1.2.6, tr. Dewing (1914)', source: 'procopius' },
          { text: 'But I have not come across it in any document or in the works of any historian, not even in those which give an account of the death of Arcadius, with the single exception of Procopius.', fa: 'اما آن را در هیچ سندی یا در نوشتهٔ هیچ تاریخ‌نگاری نیافته‌ام، حتی در آنان که از مرگ آرکادیوس گزارش می‌دهند، جز تنها پروکوپیوس.', ref: 'Agathias 4.26.4, tr. Frendo (1975)', source: 'agathias' },
        ],
        folk: {
          title: B('روایت: شاه ایران، پاسدار کودک قیصر', 'Tradition: the Persian king as guardian of Caesar’s child'),
          story: {
            fa: ['قیصر آرکادیوس رو به مرگ بود و پسرش هنوز از شیر گرفته نشده بود. به خویشان و درباریان اعتماد نداشت، پس در وصیتش نام دشمن دیرینه را نوشت: یزدگرد، شاه ایران. یزدگرد نامه را خواند، سرپرستی را پذیرفت و به سنای روم نوشت که هر کس بر کودک توطئه کند، با ایران روبه‌رو خواهد شد.'],
            en: ['The emperor Arcadius lay dying and his son was not yet weaned. He trusted neither kin nor courtiers, so in his will he wrote the name of the old enemy: Yazdegerd, king of Persia. Yazdegerd read the letter, accepted the charge and wrote to the Roman senate that whoever plotted against the child would face Persia.'],
          },
          origin: {
            fa: ['این روایت تنها از پروکوپیوس است. آگاثیاس آن را داستانی می‌داند که بر سر زبان‌هاست اما در سندی نیامده. آن را باید روایتی محل بحث شمرد.'],
            en: ['This tradition rests on Procopius alone. Agathias calls it a story on everyone’s lips but found in no document. It should be read as a disputed tradition.'],
          },
          sources: ['procopius', 'agathias'],
        },
      }),
    sec('horse', 'مرگ در گرگان: اسب فرشته', 'Death in Hyrcania: the angel horse',
      [['سنت ایرانی می‌گوید یزدگرد در گرگان به لگد اسبی کشته شد که از چشمه برآمد و در آن ناپدید شد. موسی خورنی می‌گوید از بیماری مرد. پروکوپیوس هم می‌گوید بیماری او را از جهان برد.'],
        ['Iranian tradition says Yazdegerd was killed in Hyrcania by a horse that rose from a spring and vanished into it. Moses Khorenatsʿi says he died of illness. Procopius, too, says disease took him from the world.']],
      [['نولدکه این داستان را افسانه‌ای می‌داند که بزرگان ساختند، و احتمالاً خودشان شاهِ منفور را در گرگان دوردست کشتند. ایرانیکا می‌گوید کشمکش بر سر تاج که بی‌درنگ پس از مرگش درگرفت، این برداشت را تأیید می‌کند.'],
        ['Nöldeke takes the story as a myth made by the nobles, who probably murdered the hated king in remote Hyrcania themselves. Iranica says the struggle for the throne that broke out right after his death confirms this reading.']],
      [['افسانهٔ «فرشتهٔ خدا» قتلی را به اراده‌ای آسمانی بدل می‌کند. وقتی کشتن فرمانروا را به خدا نسبت دهند، هیچ‌کس پاسخگو نیست.'],
        ['The legend of “God’s angel” turns a killing into heaven’s will. When a ruler’s killing is credited to God, no one has to answer for it.']],
      ['ir-yazdegerd1', 'procopius']),
  ],
  synthesis: { title: B('جمع‌بندی', 'Synthesis'), paras: { fa: ['یزدگرد یکم دو چهره دارد: در تاریخ رسمی ساسانی «بزه‌گر» و در منابع مسیحی و رومی «نیک و بخشنده». هر دو داوری از یک سو آمده‌اند. آنچه استوارتر است: بیست سال صلح با روم، آزادی برای مسیحیان و یهودیان، و کوششی برای مهار بزرگان که شاید به بهای جانش تمام شد.'], en: ['Yazdegerd I has two faces: “the Sinner” in the official Sasanian history and “good and clement” in Christian and Roman sources. Both verdicts come from interested parties. What is firmer: twenty years of peace with Rome, freedom for Christians and Jews, and an attempt to curb the nobles that may have cost him his life.'] }, sources: ['ir-yazdegerd1'] },
  sources: pick('ir-yazdegerd1', 'procopius', 'agathias', 'ir-bahram5'),
  photos: photos('coin-yazdegerd1'),
  related: related(['bahram-iv', 'بهرام چهارم، برادرش', 'Bahram IV, his brother'], ['bahram-v', 'بهرام پنجم (بهرام گور)، پسرش', 'Bahram V (Bahram Gur), his son']),
  wikipedia: 'https://en.wikipedia.org/wiki/Yazdegerd_I',
}
