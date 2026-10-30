/**
 * The “dark age” of Parthia (c. 91–54 BCE): Gotarzes I, Orodes I, Sinatruces, Phraates III, Mithridates III.
 * Iranica: “a series of monarchs … of whom little more than names is known”. Short pages, every date flagged.
 * Spine: Babylonian texts (Sachs & Hunger), Josephus Ant. 13.14.3, Lucian Macrob. 15, Phlegon, Plutarch Lucullus/Pompey,
 * Dio 36–39, Justin 42.4, Iranica (Schippmann; Olbrycht on Orodes II), Olbrycht 1998, Assar.
 */
import type { Bi, FeaturedKing } from '../featured/types'
import { ARTAXATA, BABYLON, BISOTUN, ECBATANA, EUPHRATES, NISA, PAR, RHAGAE, SAKASTAN, SELEUCIA, TIGRANOCERTA, ev, note, photos, pick, related, sec } from './common'

const B = (fa: string, en: string): Bi => ({ fa, en })
const SYN = B('جمع‌بندی', 'Synthesis')
const DARK = note(
  'ایرانیکا این دهه‌ها را «دوران آشوب درونی» می‌نامد و می‌گوید از این شاهان «کمی بیش از نام» می‌دانیم. ترتیب و تاریخ‌ها را از لوح‌های بابلی و سکه‌ها بازسازی می‌کنند و پژوهشگران (سلوود، آسار، اولبریخت) با هم اختلاف دارند.',
  'Iranica calls these decades a “time of internal disorder” and says that of these kings “little more than names is known”. Their order and dates are rebuilt from Babylonian tablets and coins, and scholars (Sellwood, Assar, Olbrycht) disagree.')

export const gotarzesI: FeaturedKing = {
  slug: 'gotarzes-i', name: B('گودرز یکم', 'Gotarzes I'), dynastyName: PAR,
  reign: B('حدود ۹۱–۸۰ پ.م. (آسار: ۹۱–۸۷)', 'c. 91–80 BCE (Assar: 91–87)'),
  title: B('گودرز یکم؛ «ساتراپ ساتراپ‌ها» و آغاز دوران تاریک', 'Gotarzes I: “satrap of satraps” and the start of the dark age'),
  lede: B(
    'در سال‌های پایانی مهرداد دوم، مردی به نام گودرز در بابل به نام خودش شاه شناخته شد. شاید رقیب مهرداد بود، شاید جانشینش. پس از او پارت چند دهه درگیر کشمکش درونی شد و ارمنستان «هفتاد دره» را پس گرفت. این صفحه کوتاه است، چون سند کم است؛ هر تاریخ با نشان قطعیت آمده است.',
    'In the last years of Mithridates II a man named Gotarzes was recognised as king in Babylonia in his own name. He may have been Mithridates’ rival, or his successor. After him Parthia spent decades in internal struggle, and Armenia took back the “seventy valleys”. This page is short because the evidence is thin; every date carries a certainty mark.'),
  stats: [{ n: B('۷۰', '70'), l: B('درهٔ پس‌گرفتهٔ ارمنستان', 'valleys retaken by Armenia') }, { n: B('۸۸/۸۷', '88/87'), l: B('مرگ مهرداد دوم (پ.م.، ایرانیکا)', 'death of Mithridates II (BCE, Iranica)') }],
  mapTitle: B('نقشه: بابل، بیستون و ارمنستان', 'Map: Babylonia, Bisotun and Armenia'),
  span: [-91, -80],
  events: [
    ev('babylon', -91, B('حدود ۹۱ پ.م.', 'c. 91 BCE'), 'admin', BABYLON, B('شاهی به نام گودرز در بابل', 'A king named Gotarzes in Babylonia'), B('لوح‌های بابلی از حدود ۹۱ پ.م. شاهی به نام «ارشک که گودرز خوانده می‌شود» را نام می‌برند. ایرانیکا می‌گوید نمی‌توان گزارش رقابت مهرداد دوم با گودرز را نادیده گرفت.', 'Babylonian tablets from about 91 BCE name a king “Arsaces who is called Gotarzes”. Iranica says reports that Mithridates II had to contend with a rival called Gotarzes cannot be dismissed.'), 'disputed', ['diaries', 'ir-arsacids', 'assar'], note('رقیب بود یا جانشین؟ آسار پادشاهی او را ۹۱–۸۷ می‌داند؛ تاریخ‌گذاری سنتی (که این سایت فهرست می‌کند) تا ۸۰ پ.م.', 'Rival or successor? Assar dates his reign 91–87; the traditional dating (listed on this site) runs to 80 BCE.')),
    ev('bisotun', -90, B('دههٔ ۹۰ پ.م.', '90s BCE'), 'building', BISOTUN, B('نقش بیستون', 'The Bisotun relief'), B('نقش ویران‌شده‌ای در بیستون، که هرتسفلد خواند، نام «گودرز ساتراپ ساتراپ‌ها» را کنار «شاه بزرگ مهرداد» دارد. اگر این گودرز همان شاه باشد، او پیش از شاهی بزرگ‌ترین مقام کشور پس از شاه بوده است.', 'A damaged relief at Bisotun, read by Herzfeld, names “Gotarzes the satrap of satraps” beside “the great king Mithradates”. If this Gotarzes is the king, he was the highest official after the king before he took the crown.'), 'disputed', ['ir-arsacids', 'shayegan'], note('هرتسفلد او را همان شاه می‌داند؛ شومون تردید دارد (ایرانیکا).', 'Herzfeld identifies him with the king; Chaumont doubts it (Iranica).')),
    ev('demetrius', -88, B('حدود ۸۸/۸۷ پ.م.', 'c. 88/87 BCE'), 'battle', EUPHRATES, B('دمتریوس سلوکی اسیر پارتیان', 'The Seleucid Demetrius captured by the Parthians'), B('یوسفوس می‌گوید سپاه پارت به یاری شهر بریا (حلب) آمد، دمتریوس سوم سلوکی را در اردوگاهش با تیر و تشنگی به تسلیم واداشت و او را نزد «مهرداد، که آن زمان شاه پارت بود» فرستاد؛ شاه او را تا مرگش به بیماری گرامی داشت.', 'Josephus says a Parthian force came to help Beroea (Aleppo), forced the Seleucid Demetrius III to surrender in his camp with arrows and thirst, and sent him to “Mithridates, who was then king of Parthia”; the king held him in honour until he died of illness.'), 'disputed', ['josephus', 'assar'], note('این «مهرداد» کیست؟ اگر مهرداد دوم تا ۸۸/۸۷ زنده بود، اوست؛ آسار مهردادی دیگر («مهرداد سوم»، ۸۷–۸۰) را پس از گودرز می‌گذارد. در این شماره‌گذاری، مهرداد سوم سنتی (۵۷–۵۴) «مهرداد چهارم» می‌شود.', 'Which “Mithridates”? If Mithridates II lived to 88/87, it is he; Assar places another Mithridates (“Mithridates III”, 87–80) after Gotarzes. In that numbering the traditional Mithridates III (57–54) becomes “Mithridates IV”.')),
    ev('valleys', -87, B('پس از ۸۸/۸۷ پ.م.', 'after 88/87 BCE'), 'battle', ARTAXATA, B('ارمنستان «هفتاد دره» را پس می‌گیرد', 'Armenia takes back the “seventy valleys”'), B('ایرانیکا: پس از مرگ مهرداد دوم آشوب ادامه یافت و ارمنیان فرصت را برای پس گرفتن «هفتاد دره»ای که به پارتیان داده بودند به کار بردند. تیگران از این پس قدرت اول منطقه شد.', 'Iranica: after the death of Mithridates II the disorder went on, and the Armenians seized the chance to reconquer the “seventy valleys” they had ceded to Parthia. Tigranes became the leading power of the region.'), 'probable', ['ir-arsacids', 'strabo']),
    ev('end', -80, B('حدود ۸۷–۸۰ پ.م.', 'c. 87–80 BCE'), 'admin', BABYLON, B('پایان: سکوت منابع', 'The end: the sources fall silent'), B('پایان کار گودرز را نمی‌دانیم. در لوح‌های بابلی پس از او نام ارد (یکم) می‌آید.', 'We do not know how Gotarzes’ reign ended. In the Babylonian tablets the name of Orodes (I) comes next.'), 'disputed', ['diaries', 'ir-arsacids'], DARK),
  ],
  dossier: [
    sec('dark', 'چرا این دوران «تاریک» است', 'Why this age is “dark”',
      [['ایرانیکا می‌گوید از این زمان «یک سلسله شاه، مانند گودرز، ارد یکم، سیناتروک و فرهاد سوم» فرمان راندند که «از آنان کمی بیش از نام» می‌دانیم. یوستینوس، که برای پارتیان نخستین منبع پیوسته است، اینجا تقریباً خاموش است. آنچه داریم چند لوح بابلی، چند خبر پراکندهٔ یونانی و رومی و سکه‌هایی است که همه نام «ارشک» دارند.'],
       ['Iranica says that “a series of monarchs ruled in the Parthian empire, such as Gotarzes, Orodes I, Sinatruces, and Phraates III, of whom little more than names is known.” Justin, our continuous source for early Parthia, is almost silent here. What we have is a few Babylonian tablets, scattered Greek and Roman notices, and coins that all bear the name “Arsaces”.']],
      [['ایرانیکا ریشهٔ این آشوب را قدرت خاندان‌های بزرگ می‌داند که از زمان مهرداد دوم «می‌توانستند بارها در برابر شاه بایستند». یعنی شاه دیگر تنها صاحب قدرت نبود.'], ['Iranica traces the disorder to the great noble families, who from Mithridates II’s time on were “in a position to oppose the monarch frequently”. The king was no longer the only holder of power.']],
      [['وقتی قدرت میان چند خاندان پخش شود، دولت مرکزی ضعیف‌تر اما خودکامگی هم محدودتر می‌شود. پرسش این است که آیا این توازن به قانون بدل می‌شود یا فقط به جنگ جانشینی.'], ['When power is shared among several families, the centre is weaker but despotism is also more limited. The question is whether that balance becomes law, or only succession wars.']],
      ['ir-arsacids', 'justin', 'sellwood'], { photos: ['coin-gotarzes1'] }),
  ],
  synthesis: { title: SYN, paras: { fa: ['گودرز یکم دروازهٔ ورود به تاریک‌ترین بخش تاریخ پارت است. مطمئنیم که در بابل به نام خودش شاه بود؛ رابطه‌اش با مهرداد دوم، پایان کارش و حتی شمارهٔ شاهان پس از او محل بحث است.'], en: ['Gotarzes I is the gateway to the darkest stretch of Parthian history. We are sure he was king in Babylonia in his own name; his relationship to Mithridates II, his end and even the numbering of the kings after him are disputed.'] }, sources: ['ir-arsacids', 'diaries', 'assar'] },
  sources: pick('diaries', 'ir-arsacids', 'assar', 'josephus', 'shayegan', 'strabo', 'sellwood', 'justin'),
  photos: photos('coin-gotarzes1'),
  related: related(['mithridates-ii', 'مهرداد دوم', 'Mithridates II'], ['orodes-i', 'ارد یکم', 'Orodes I']),
  wikipedia: 'https://en.wikipedia.org/wiki/Gotarzes_I_of_Parthia',
}

export const orodesI: FeaturedKing = {
  slug: 'orodes-i', name: B('ارد یکم', 'Orodes I'), dynastyName: PAR,
  reign: B('حدود ۸۰–۷۵ پ.م.', 'c. 80–75 BCE'),
  title: B('ارد یکم؛ شاهی که تقریباً فقط نامش مانده است', 'Orodes I: a king of whom little but the name survives'),
  lede: B(
    'ارد یکم را تقریباً فقط از لوح‌های بابلی و سکه‌ها می‌شناسیم. در بابل او را «ارشک که ارد خوانده می‌شود» نامیده‌اند. پس از او سیناتروکِ سالخورده با یاری سکاها به تخت رسید. این صفحه فقط آنچه را سند دارد می‌آورد.',
    'Orodes I is known almost only from Babylonian tablets and coins. In Babylonia he is called “Arsaces who is called Orodes”. After him the aged Sinatruces took the throne with Saka help. This page gives only what has evidence.'),
  stats: [{ n: B('~۵', '~5'), l: B('سال پادشاهی (سنتی)', 'years of reign (traditional)') }],
  mapTitle: B('نقشه: بابل و ری', 'Map: Babylonia and Rhagae'),
  span: [-80, -75],
  events: [
    ev('babylon', -80, B('حدود ۸۰ پ.م.', 'c. 80 BCE'), 'admin', BABYLON, B('«ارشک که ارد خوانده می‌شود»', '“Arsaces who is called Orodes”'), B('لوح‌های بابلی شاهی به نام ارد را نام می‌برند و گزارش شده که همراه او از ملکه‌ای به نام اسپوبرزا یاد می‌کنند. این تقریباً همهٔ آگاهی ما از اوست.', 'Babylonian tablets name a king Orodes, and they are reported to mention with him a queen called Ispubarza. That is almost all we know of him.'), 'probable', ['diaries', 'ir-arsacids'], note('نام ملکه و پیوند خانوادگی ارد با شاهان پیش و پس از او را تنها از لوح‌ها و بازسازی پژوهشگران داریم.', 'The queen’s name and Orodes’ family ties to the kings before and after him come only from the tablets and scholarly reconstruction.')),
    ev('coins', -78, B('حدود ۸۰–۷۵ پ.م.', 'c. 80–75 BCE'), 'admin', RHAGAE, B('سکه‌های ری', 'The Rhagae coins'), B('درهم‌هایی از ضراب‌خانهٔ ری به ارد یکم نسبت داده می‌شود؛ مانند همهٔ سکه‌های پارتی تنها نام «ارشک» را دارند.', 'Drachms from the Rhagae mint are attributed to Orodes I; like all Parthian coins they carry only the name “Arsaces”.'), 'disputed', ['sellwood'], note('سکه‌های این دهه‌ها را سلوود، آسار و دیگران به شاهان متفاوتی نسبت می‌دهند.', 'Sellwood, Assar and others attribute the coins of these decades to different kings.')),
    ev('end', -75, B('حدود ۷۵ پ.م.', 'c. 75 BCE'), 'admin', ECBATANA, B('جای خود را به سیناتروک می‌دهد', 'He gives way to Sinatruces'), B('پایان کار ارد روشن نیست. پس از او سیناتروک به تخت رسید.', 'How Orodes’ reign ended is unclear. After him Sinatruces took the throne.'), 'disputed', ['ir-arsacids'], DARK),
  ],
  dossier: [
    sec('evidence', 'شاهی از روی لوح', 'A king from a tablet',
      [['منابع یونانی و رومی دربارهٔ ارد یکم چیزی نمی‌گویند. ایرانیکا او را در فهرست شاهانی می‌آورد که «کمی بیش از نام» از آنان می‌دانیم. آگاهی ما از لوح‌های تاریخ‌دار بابلی است که نام شاه وقت را می‌نوشتند.'], ['The Greek and Roman sources say nothing about Orodes I. Iranica lists him among the kings “of whom little more than names is known”. What we know comes from dated Babylonian tablets that recorded the reigning king.']],
      [['بی روایت، داوری دربارهٔ کارنامهٔ او ممکن نیست. هر داستانی دربارهٔ شخصیت او ساختگی خواهد بود.'], ['Without a narrative, his record cannot be judged. Any story about his character would be invented.']],
      [['دفترهای اداری و قراردادها، حتی وقتی تاریخ‌نگاران خاموش‌اند، حقیقت را نگه می‌دارند؛ ارزش سند مکتوب همین است.'], ['Administrative records and contracts keep the truth even when historians fall silent; that is the value of written records.']],
      ['ir-arsacids', 'diaries', 'sellwood'], { photos: ['coin-orodes1'] }),
  ],
  synthesis: { title: SYN, paras: { fa: ['ارد یکم شاهی واقعی اما بی‌چهره است: نامی در لوح‌های بابل و چند سکه. هر چیز بیشتر، حدس است.'], en: ['Orodes I is a real but faceless king: a name in Babylonian tablets and a few coins. Anything more is guesswork.'] }, sources: ['ir-arsacids', 'diaries'] },
  sources: pick('diaries', 'ir-arsacids', 'sellwood', 'assar'),
  photos: photos('coin-orodes1'),
  related: related(['gotarzes-i', 'گودرز یکم', 'Gotarzes I'], ['sinatruces', 'سیناتروک', 'Sinatruces']),
  wikipedia: 'https://en.wikipedia.org/wiki/Orodes_I_of_Parthia',
}

export const sinatruces: FeaturedKing = {
  slug: 'sinatruces', name: B('سیناتروک', 'Sinatruces'), dynastyName: PAR,
  reign: B('حدود ۷۵–۶۹ پ.م.', 'c. 75–69 BCE'),
  title: B('سیناتروک؛ شاه هشتادساله‌ای که سکاها بر تخت نشاندند', 'Sinatruces: the eighty-year-old king the Sakas put on the throne'),
  lede: B(
    'لوکیانوس می‌گوید سیناتروک در هشتادسالگی با یاری سکاهای سکاروکی به پارت بازگشت، شاه شد و هفت سال فرمان راند. او بنیان‌گذار شاخه‌ای از اشکانیان است که پژوهشگران «سیناتروکی» می‌نامند و فرهاد سوم، ارد دوم و فرهاد چهارم از آن‌اند. پیوندش با سکاهای شرق، سیاست پارت را تا دهه‌ها شکل داد.',
    'Lucian says Sinatruces came back to Parthia at eighty with the help of the Sacaraucae Scythians, took the throne and reigned seven years. He founded the branch of the Arsacids scholars call “Sinatrucid”, to which Phraates III, Orodes II and Phraates IV belong. His ties to the eastern Sakas shaped Parthian politics for decades.'),
  stats: [{ n: B('۸۰', '80'), l: B('سال سن هنگام بازگشت (لوکیانوس)', 'age at his return (Lucian)') }, { n: B('۷', '7'), l: B('سال پادشاهی (لوکیانوس)', 'years of reign (Lucian)') }],
  mapTitle: B('نقشه: بازگشت از شرق', 'Map: the return from the east'),
  span: [-77, -69],
  events: [
    ev('return', -77, B('حدود ۷۷–۷۵ پ.م.', 'c. 77–75 BCE'), 'campaign', NISA, B('بازگشت با سکاروک‌ها', 'Return with the Sacaraucae'), B('لوکیانوس (درازعمران ۱۵) می‌گوید سیناتروک در هشتادسالگی به دست سکاهای سکاروکی به میهن بازگردانده شد، پادشاهی را گرفت و هفت سال نگه داشت.', 'Lucian (Octogenarians 15) says Sinatruces was restored to his country in his eightieth year by the Sacaraucae Scythians, took the kingship and held it seven years.'), 'probable', ['lucian', 'olbrycht1998', 'ir-orodes2'], { route: [SAKASTAN, [58.5, 34.5], NISA], ...note('لوکیانوس شمار سال‌ها را در فهرستی از «درازعمران» می‌آورد؛ چنین فهرست‌هایی در سن اغراق می‌کنند. خاستگاه دقیق سکاروک‌ها (باختر غربی؟) محل بحث است.', 'Lucian gives the figures in a list of long-lived men, and such lists exaggerate ages. Where exactly the Sacaraucae came from (western Bactria?) is debated.') }),
    ev('coregent', -72, B('دههٔ ۷۰ پ.م.', '70s BCE'), 'admin', ECBATANA, B('شاه جوان در کنار شاه شاهان', 'A junior king beside the King of Kings'), B('اولبریخت (ایرانیکا) می‌گوید سیناتروکی‌ها «پادشاهی تک‌نفره» نداشتند و در کنار شاه شاهان یک «شاه جوان» (rex iunior) می‌گذاشتند؛ نخستین نمونه، فرهاد سوم در کنار پدرش سیناتروک بود.', 'Olbrycht (Iranica) says the Sinatrucids “did not practice solitary monarchy” but set a junior king (rex iunior) beside the King of Kings; the first case was Phraates III beside his father Sinatruces.'), 'probable', ['ir-phraates4', 'olbrycht1998']),
    ev('death', -69, B('حدود ۷۰/۶۹ پ.م.', 'c. 70/69 BCE'), 'admin', SELEUCIA, B('مرگ؛ فرهاد سوم جانشین', 'Death; Phraates III succeeds'), B('فلگون مرگ سیناتروک و جانشینی پسرش فرهاد را در المپیاد ۱۷۷ (۷۲–۶۸ پ.م.) می‌گذارد. ایرانیکا آغاز فرهاد سوم را ۷۰ پ.م. می‌داند.', 'Phlegon puts the death of Sinatruces and the accession of his son Phraates in the 177th Olympiad (72–68 BCE). Iranica dates Phraates III from 70 BCE.'), 'probable', ['phlegon', 'ir-orodes2']),
  ],
  dossier: [
    sec('sakas', 'سکاها، کلید تخت پارت', 'The Sakas, key to the Parthian throne',
      [['اولبریخت نشان می‌دهد سیناتروک تخت را مدیون سکاروک‌ها بود و جانشینانش هم پیوند با قبیله‌های شرقی را نگه داشتند: ایرانیکا می‌گوید سکاروک‌ها «هم‌پیمانان سیناتروک و فرهاد سوم» بودند و بعدها از مهرداد سوم پشتیبانی کردند. نشانهٔ دیگر این پیوند، خنجر با غلاف چهارپره است که به نشان شاهی بدل شد.'],
       ['Olbrycht shows that Sinatruces owed his throne to the Sacaraucae and that his heirs kept up the eastern tribal ties: Iranica calls the Sacaraucae “the allies of Sinatruces and Phraates III”, who later backed Mithridates III. Another sign of the tie is the dagger with a four-lobed scabbard that became a royal emblem.']],
      [['پادشاهی‌ای که با سپاه بیگانه بازمی‌گردد، به آن بدهکار می‌ماند. سیاست پارت از این پس میان اشراف غرب و متحدان استپی شرق کشیده می‌شد.'], ['A king brought back by a foreign army stays in its debt. From now on Parthian politics was stretched between the western nobles and the eastern steppe allies.']],
      [['وقتی حکومت به یاری نیروی بیرونی برپا شود، پاسخگویی‌اش به مردم خودش کمتر می‌شود. این الگو در تاریخ ایران بارها تکرار شده است.'], ['When a government is set up with outside force, it becomes less answerable to its own people. The pattern recurs often in Iranian history.']],
      ['olbrycht1998', 'ir-orodes2', 'ir-phraates4', 'lucian'], { photos: ['coin-sinatruces'] }),
  ],
  synthesis: { title: SYN, paras: { fa: ['سیناتروک از دید منابع یک خط است: پیرمردی که با سکاها برگشت. اما خاندانی که بنیاد گذاشت، پیروز حران و دشمن آنتونیوس را پدید آورد.'], en: ['In the sources Sinatruces is a single line: an old man who came back with the Sakas. But the line he founded produced the victor of Carrhae and the enemy of Antony.'] }, sources: ['lucian', 'olbrycht1998'] },
  sources: pick('lucian', 'phlegon', 'ir-orodes2', 'ir-phraates4', 'olbrycht1998', 'ir-arsacids', 'sellwood'),
  photos: photos('coin-sinatruces'),
  related: related(['orodes-i', 'ارد یکم', 'Orodes I'], ['phraates-iii', 'فرهاد سوم، پسرش', 'Phraates III, his son']),
  wikipedia: 'https://en.wikipedia.org/wiki/Sinatruces_of_Parthia',
}

export const phraatesIII: FeaturedKing = {
  slug: 'phraates-iii', name: B('فرهاد سوم', 'Phraates III'), dynastyName: PAR,
  reign: B('۷۰/۶۹–۵۸/۵۷ پ.م.', '70/69–58/57 BCE'),
  title: B('فرهاد سوم؛ بی‌طرفی میان لوکولوس و پمپه، و مرز فرات', 'Phraates III: neutrality between Lucullus and Pompey, and the Euphrates border'),
  lede: B(
    'فرهاد سوم در زمانی شاه بود که روم برای نخستین بار با سپاه به مرز پارت رسید. در جنگ لوکولوس با تیگران و مهرداد پونتی بی‌طرف ماند و با هر دو سو گفت‌وگو کرد. از پمپه خواست فرات مرز دو امپراتوری باشد. پمپه حتی عنوان «شاه شاهان» را از او دریغ کرد. سرانجام پسرانش، ارد و مهرداد، او را کشتند.',
    'Phraates III was king when Rome first reached the Parthian border with an army. In Lucullus’ war on Tigranes and Mithridates of Pontus he stayed neutral and talked to both sides. He asked Pompey to make the Euphrates the border of the two empires. Pompey even denied him the title “King of Kings”. In the end his sons Orodes and Mithridates killed him.'),
  stats: [{ n: B('~۱۲', '~12'), l: B('سال پادشاهی', 'years of reign') }, { n: B('۳', '3'), l: B('داور پمپه برای مرز ارمنستان', 'Pompey’s arbiters for the Armenian border') }],
  mapTitle: B('نقشه: میان روم و ارمنستان', 'Map: between Rome and Armenia'),
  span: [-69, -58],
  events: [
    ev('lucullus', -69, B('۶۹ پ.م.', '69 BCE'), 'admin', TIGRANOCERTA, B('دو پهلو با لوکولوس', 'Double dealing with Lucullus'), B('پس از نبرد تیگرانوکرت، لوکولوس و تیگران هر دو از فرهاد یاری خواستند. پلوتارک می‌گوید فرستادگان لوکولوس فهمیدند شاه پارت «دوچهره» است و پنهانی به تیگران پیشنهاد داده که در برابر گرفتن میان‌رودان به او بپیوندد. لوکولوس به فکر حمله به پارت افتاد، اما سپاهیانش سر باز زدند.', 'After the battle of Tigranocerta both Lucullus and Tigranes asked Phraates for help. Plutarch says Lucullus’ envoys found the Parthian king “double-minded”, secretly offering to join Tigranes in return for Mesopotamia. Lucullus thought of attacking Parthia, but his troops refused.'), 'probable', ['plut-lucullus', 'dio', 'ir-carrhae'], note('ایرانیکا (شهبازی) می‌گوید این بی‌طرفی سنجیده بود و این لوکولوس بود که در میانهٔ گفت‌وگو نقشهٔ حمله کشید. روایت رومی شاه پارت را دورو نشان می‌دهد.', 'Iranica (Shahbazi) argues the neutrality was calculated and that it was Lucullus who planned an attack while negotiating. The Roman account makes the Parthian king the double-dealer.')),
    ev('armenia', -66, B('۶۶ پ.م.', '66 BCE'), 'campaign', ARTAXATA, B('با تیگران جوان به ارمنستان', 'Into Armenia with the young Tigranes'), B('فرهاد دخترش را به تیگران جوان، پسر شورشی تیگران بزرگ، داد و با او به ارمنستان تاخت و آرتاشات را محاصره کرد، اما محاصره را رها کرد و بازگشت (دیو ۳۶.۵۱). تیگران جوان سپس به پمپه پناه برد.', 'Phraates gave his daughter to the young Tigranes, rebel son of Tigranes the Great, invaded Armenia with him and besieged Artaxata, but gave up the siege and went home (Dio 36.51). The young Tigranes then went over to Pompey.'), 'probable', ['dio', 'debevoise']),
    ev('pompey', -64, B('۶۶–۶۴ پ.م.', '66–64 BCE'), 'admin', EUPHRATES, B('فرات، مرز دو امپراتوری؟', 'The Euphrates as the border of two empires?'), B('پلوتارک: فرهاد از پمپه خواست داماد جوانش را به او بسپارد و «رود فرات مرز امپراتوری‌ها باشد». پمپه پاسخ داد که تیگران از آنِ پدر خودش است و مرز را «بر پایهٔ حق و داد» خواهد نهاد. دیو می‌گوید پمپه در نامه‌اش عنوان «شاه شاهان» را از فرهاد دریغ کرد و تنها «شاه» نوشت. نیروهای رومی گردیین را گرفتند و پمپه برای اختلاف مرزی ارمنستان و پارت سه داور گماشت.', 'Plutarch: Phraates asked Pompey to hand over his young son-in-law and “that the river Euphrates should be the boundary of the empires”. Pompey answered that Tigranes belonged to his own father and that he would set the border “according to right and justice”. Dio says Pompey’s letter denied Phraates the title “King of Kings” and called him only “king”. Roman troops took Gordyene, and Pompey appointed three arbiters for the Armenian–Parthian border dispute.'), 'probable', ['plut-pompey', 'dio', 'ir-carrhae']),
    ev('murder', -58, B('۵۸/۵۷ پ.م.', '58/57 BCE'), 'admin', ECBATANA, B('کشته به دست پسرانش', 'Murdered by his sons'), B('ایرانیکا (اولبریخت): در ۵۸/۵۷ پ.م. فرهاد سوم به دست پسرانش ارد و مهرداد کشته شد؛ واپسین لوح بابلی به نام او از مارس/آوریل ۵۸ است. مهرداد، که در زمان پدر شاه همراه و فرمانروای ماد بزرگ بود، جانشین شد.', 'Iranica (Olbrycht): in 58/57 BCE Phraates III was murdered by his sons Orodes and Mithridates; his last Babylonian document dates from March/April 58. Mithridates, who had been co-regent and ruler of Greater Media under his father, succeeded.'), 'secure', ['ir-orodes2', 'dio']),
  ],
  dossier: [
    sec('rome', 'نخستین بازی با روم', 'The first game with Rome',
      [['فرهاد سوم نخستین شاه پارت بود که سپاه روم را در همسایگی خود دید. در برابر لوکولوس هر دو سو را امیدوار نگه داشت؛ از پمپه مرز فرات را خواست. پمپه با او همچون فرمانروایی کوچک‌تر رفتار کرد: داماد او را نگه داشت، گردیین را گرفت و عنوان «شاه شاهان» را نپذیرفت.'], ['Phraates III was the first Parthian king to see a Roman army next door. Against Lucullus he kept both sides hoping; from Pompey he asked for the Euphrates border. Pompey treated him as a lesser ruler: he kept his son-in-law, took Gordyene and refused the title “King of Kings”.']],
      [['شهبازی (ایرانیکا) دیدگاه سنتی را که جنگ‌های بعدی را تنها نتیجهٔ جاه‌طلبی کراسوس می‌داند رد می‌کند: به نظر او برخورد روم و پارت از همین سال‌ها در راه بود. دیگران بی‌طرفی فرهاد را فرصت‌سوزی می‌دانند.'], ['Shahbazi (Iranica) rejects the traditional view that the later wars were only the result of Crassus’ ambition: in his view the clash of Rome and Parthia was coming from these years on. Others see Phraates’ neutrality as a missed chance.']],
      [['مرز روشن و پذیرفته‌شده پایهٔ صلح و تجارت است، چه میان دو امپراتوری، چه میان دو همسایه. فرهاد همین را خواست و پمپه آن را مبهم گذاشت.'], ['A clear, agreed border is the basis of peace and trade, between two empires or between two neighbours. Phraates asked for exactly that, and Pompey left it vague.']],
      ['plut-pompey', 'plut-lucullus', 'dio', 'ir-carrhae'], {
        quotes: [
          { text: 'Not long after this Phraates, king of Parthia, sent to Pompey, and demanded to have young Tigranes, as his son-in-law, given up to him, and that the river Euphrates should be the boundary of the empires. Pompey replied, that for Tigranes, he belonged more to his own natural father than his father-in-law, and for the boundaries, he would take care that they should be according to right and justice.', fa: 'چندی بعد فرهاد، شاه پارت، نزد پمپه فرستاد و خواست تیگران جوان را، که دامادش بود، به او بسپارند و رود فرات مرز امپراتوری‌ها باشد. پمپه پاسخ داد که تیگران بیشتر از آنِ پدر خودش است تا پدرزنش، و دربارهٔ مرزها نیز خواهد کوشید که بر پایهٔ حق و داد باشد.', ref: 'Plutarch, Pompey 33', source: 'plut-pompey' },
          { text: '…the members of which discovered him to be a double-minded man, and to be dealing privately at the same time with Tigranes, offering to take part with him, upon condition Mesopotamia were delivered up to him.', fa: '…فرستادگان دریافتند که او مردی دوچهره است و در همان حال پنهانی با تیگران گفت‌وگو می‌کند و پیشنهاد می‌دهد که اگر میان‌رودان به او سپرده شود، در کنارش بجنگد.', ref: 'Plutarch, Lucullus 30', source: 'plut-lucullus' },
        ], photos: ['coin-phraates3'],
      }),
  ],
  synthesis: { title: SYN, paras: { fa: ['فرهاد سوم کوشید پارت را از جنگ روم و ارمنستان بیرون نگه دارد و مرز فرات را بپذیراند. به هدف دوم نرسید و به دست پسرانش کشته شد؛ جنگ برادران پس از او راه را برای حملهٔ کراسوس باز کرد.'], en: ['Phraates III tried to keep Parthia out of the Roman–Armenian war and to get the Euphrates accepted as the border. He failed in the second aim and was killed by his sons; the brothers’ war after him opened the way for Crassus’ attack.'] }, sources: ['plut-pompey', 'ir-orodes2'] },
  sources: pick('plut-lucullus', 'plut-pompey', 'dio', 'ir-carrhae', 'ir-orodes2', 'debevoise', 'ir-arsacids'),
  photos: photos('coin-phraates3'),
  related: related(['sinatruces', 'سیناتروک، پدرش', 'Sinatruces, his father'], ['mithridates-iii', 'مهرداد سوم، پسرش', 'Mithridates III, his son'], ['orodes-ii', 'ارد دوم، پسرش', 'Orodes II, his son']),
  wikipedia: 'https://en.wikipedia.org/wiki/Phraates_III',
}

export const mithridatesIII: FeaturedKing = {
  slug: 'mithridates-iii', name: B('مهرداد سوم', 'Mithridates III'), dynastyName: PAR,
  reign: B('۵۸/۵۷–۵۵ پ.م.', '58/57–55 BCE'),
  title: B('مهرداد سوم؛ برادری که به روم پناه برد', 'Mithridates III: the brother who fled to Rome'),
  lede: B(
    'مهرداد سوم با برادرش ارد پدرشان فرهاد سوم را کشت و شاه شد. به گفتهٔ یوستینوس «مجلس» پارت او را به سبب بی‌رحمی بیرون راند. نزد گابینیوس، فرماندار رومی سوریه، رفت، سپس سلوکیه و بابل را گرفت. سورنا سلوکیه را پس گرفت و ارد بابل را با گرسنگی گشود. مهرداد خود را به برادر سپرد و پیش چشم او کشته شد.',
    'Mithridates III, with his brother Orodes, killed their father Phraates III and became king. Justin says the Parthian “senate” expelled him for cruelty. He went to Gabinius, the Roman governor of Syria, then took Seleucia and Babylon. Surena retook Seleucia and Orodes starved Babylon into surrender. Mithridates gave himself up to his brother and was killed before his eyes.'),
  stats: [{ n: B('~۲', '~2'), l: B('سال پادشاهی', 'years of reign') }],
  mapTitle: B('نقشه: جنگ دو برادر', 'Map: the brothers’ war'),
  span: [-58, -55],
  events: [
    ev('accession', -58, B('۵۸/۵۷ پ.م.', '58/57 BCE'), 'admin', ECBATANA, B('شاه پس از پدرکشی', 'King after the parricide'), B('مهرداد، که در زمان پدر شاه همراه و فرمانروای ماد بزرگ بود، پس از کشتن فرهاد سوم به تخت نشست (یوستینوس ۴۲.۴.۱؛ دیو ۳۹.۵۶). یوستینوس می‌گوید پس از «جنگش با ارمنستان» برکنار شد.', 'Mithridates, co-regent and ruler of Greater Media under his father, took the throne after the murder of Phraates III (Justin 42.4.1; Dio 39.56). Justin says he was removed “after his war with Armenia”.'), 'secure', ['ir-orodes2', 'justin', 'dio']),
    ev('expelled', -57, B('۵۷ پ.م.', '57 BCE'), 'admin', SELEUCIA, B('برکنار به دست «مجلس» و پناه به گابینیوس', 'Expelled by the “senate”; refuge with Gabinius'), B('ارد سپاهی گرد آورد و برادر را برکنار کرد. مهرداد نزد آولوس گابینیوس، فرماندار سوریه، رفت. گابینیوس از فرات گذشت، اما برای بازگرداندن بطلمیوس دوازدهم به مصر روی گرداند (دیو ۳۹.۵۶).', 'Orodes raised an army and deposed his brother. Mithridates went to Aulus Gabinius, governor of Syria. Gabinius crossed the Euphrates but turned away to restore Ptolemy XII in Egypt (Dio 39.56).'), 'probable', ['justin', 'dio', 'ir-orodes2', 'ir-carrhae'], note('یوستینوس از برکناری «به سبب بی‌رحمی به دست مجلس پارت» می‌گوید؛ اولبریخت انگیزهٔ واقعی را شاید نقشهٔ جنگ با ارمنستان، و پشتیبانی سکاروک‌ها از او را عامل اصلی می‌داند.', 'Justin speaks of expulsion “for his cruelty by the Parthian senate”; Olbrycht suggests the real motive may have been a planned war on Armenia, and sees the Sacaraucae’s backing for him as the key factor.')),
    ev('seleucia', -55, B('حدود ۵۵ پ.م.', 'c. 55 BCE'), 'battle', SELEUCIA, B('سلوکیه و بابل؛ یورش سورنا', 'Seleucia and Babylon; Surena’s assault'), B('مهرداد سلوکیه و بابل را گرفت و در آنجا سکه زد. پلوتارک می‌گوید سورنا «شهر بزرگ سلوکیه را گرفت و نخستین کسی بود که از دیوارها بالا رفت».', 'Mithridates took Seleucia and Babylon and struck coins there. Plutarch says Surena “took the great city of Seleucia, was the first man that scaled the walls”.'), 'probable', ['ir-orodes2', 'plut-crassus'], note('کدام سکه‌ها از مهرداد و کدام از ارد است (گروه S40) محل بحث است؛ گنجینهٔ کوهدشت (لرستان) را با این جنگ داخلی پیوند می‌دهند.', 'Which coins belong to Mithridates and which to Orodes (group S40) is disputed; the Kuhdasht hoard (Lorestan) is linked to this civil war.')),
    ev('death', -55, B('اواخر ۵۵ پ.م.', 'late 55 BCE'), 'battle', BABYLON, B('تسلیم در بابل و مرگ', 'Surrender at Babylon and death'), B('یوستینوس: ارد بابل را محاصره کرد و مردم را با گرسنگی به تسلیم واداشت. مهرداد به پشتوانهٔ خویشاوندی خود را به او سپرد، اما ارد «او را بیشتر دشمن دید تا برادر» و فرمان داد «پیش چشمش» کشته شود.', 'Justin: Orodes besieged Babylon and forced the people to surrender by famine. Mithridates, trusting their kinship, gave himself up, but Orodes, “contemplating him rather as an enemy than a brother”, had him “put to death before his face”.'), 'secure', ['justin', 'ir-orodes2']),
  ],
  dossier: [
    sec('brothers', 'جنگ برادران و دست روم', 'The brothers’ war and Rome’s hand',
      [['مهرداد نخستین شاهزادهٔ پارتی بود که از روم برای گرفتن تخت یاری خواست. گابینیوس آمد و رفت، اما همین مداخله، به گفتهٔ ایرانیکا، به دشمنی آشکار روم و پارت انجامید.'], ['Mithridates was the first Parthian prince to ask Rome for help in taking the throne. Gabinius came and went, but Iranica says this interference led to open hostility between Rome and Parthia.']],
      [['شماره‌گذاری او هم محل بحث است: در گاه‌شماری آسار مهردادی دیگر در ۸۷–۸۰ پ.م. فرمان رانده، پس این شاه «مهرداد چهارم» است. اولبریخت او را مهرداد سوم می‌نامد و این سایت شماره‌گذاری سنتی را نگه می‌دارد.'], ['His number is disputed too: in Assar’s chronology another Mithridates ruled in 87–80 BCE, so this king is “Mithridates IV”. Olbrycht calls him Mithridates III, and this site keeps the traditional numbering.']],
      [['شاهزاده‌ای که برای قدرت از بیگانه یاری بخواهد، کشورش را میدان رقابت دیگران می‌کند. پیروزی ارد هم بهای خود را داشت: سورنا، قهرمان این جنگ، چند سال بعد کشته شد.'], ['A prince who asks foreigners for help to gain power turns his country into someone else’s playing field. Orodes’ victory had its price too: Surena, the hero of this war, was killed a few years later.']],
      ['justin', 'ir-orodes2', 'ir-carrhae', 'assar', 'dio'], {
        quotes: [{ text: 'Mithridates king of the Parthians, after his war with Armenia, was banished from his kingdom for his cruelty by the Parthian senate. His brother Orodes, who took possession of the vacant throne, besieged Babylon, whither Mithridates had fled, for some time, and reduced the people, under the influence of famine, to surrender. Mithridates, from confidence in his relationship to Orodes, voluntarily put himself into his hands; but Orodes, contemplating him rather as an enemy than a brother, ordered him to be put to death before his face.', fa: 'مهرداد، شاه پارتیان، پس از جنگش با ارمنستان، به سبب بی‌رحمی به دست مجلس پارت از پادشاهی رانده شد. برادرش ارد، که تخت خالی را گرفت، بابل را که مهرداد به آنجا گریخته بود مدتی محاصره کرد و مردم را با گرسنگی به تسلیم واداشت. مهرداد به پشتوانهٔ خویشاوندی با ارد، به خواست خود را به دست او سپرد؛ اما ارد او را بیشتر دشمن دید تا برادر و فرمان داد پیش چشمش کشته شود.', ref: 'Justin 42.4.1–4', source: 'justin' }],
        photos: ['coin-mithridates3'],
      }),
  ],
  synthesis: { title: SYN, paras: { fa: ['مهرداد سوم در دو سال پدرش را کشت، تخت را از دست داد، از روم یاری خواست و به دست برادرش کشته شد. جنگ دو برادر سورنا را به شهرت رساند و ارد را برای رویارویی با کراسوس آماده کرد.'], en: ['In two years Mithridates III killed his father, lost the throne, asked Rome for help and was killed by his brother. The brothers’ war made Surena famous and left Orodes ready to face Crassus.'] }, sources: ['justin', 'ir-orodes2'] },
  sources: pick('justin', 'dio', 'plut-crassus', 'ir-orodes2', 'ir-carrhae', 'assar', 'sellwood'),
  photos: photos('coin-mithridates3'),
  related: related(['phraates-iii', 'فرهاد سوم، پدرش', 'Phraates III, his father'], ['orodes-ii', 'ارد دوم، برادرش', 'Orodes II, his brother']),
  wikipedia: 'https://en.wikipedia.org/wiki/Mithridates_IV_of_Parthia',
}
