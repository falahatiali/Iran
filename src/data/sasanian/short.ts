/**
 * Hormizd I, Bahram I, Bahram II and Bahram III (c. 270–293 CE).
 * Narrative: Encyclopaedia Iranica (Shayegan “Hormozd I”; Shahbazi “Bahrām I–II”; Klíma “Bahrām III”;
 * Skjærvø “Kartir”; Sundermann “Mani”; Weber “Narseh”) paraphrased; short quotes are translations printed there.
 * Reign dates: Shahbazi follows Henning’s older chronology; Skjærvø and Weber give the later one. Both are flagged.
 */
import type { Bi, FeaturedKing } from '../featured/types'
import { AHVAZ, ARMENIA, BISHAPUR, CAPPADOCIA, CTESIPHON, GUNDESHAPUR, ISTAKHR, MESENE, NAQSH_E_ROSTAM, PAIKULI, PERSIS, SAKASTAN, SAS, ev, note, photos, pick, related, sec } from './common'

const B = (fa: string, en: string): Bi => ({ fa, en })

const CHRONO = note(
  'تاریخ‌های این دوره قطعی نیست. شهبازی در ایرانیکا (به پیروی از هنینگ) بهرام یکم را ۲۷۱–۲۷۴ و بهرام دوم را ۲۷۴–۲۹۱ م. می‌گذارد؛ شروو و وبر در مقاله‌های تازه‌تر ایرانیکا هرمز یکم را ۲۷۲–۲۷۳، بهرام یکم را ۲۷۳–۲۷۶ و بهرام دوم را ۲۷۶–۲۹۳ م. می‌دانند. این صفحه گاه‌شمار دوم را دنبال می‌کند.',
  'The dates of this period are not certain. Shahbazi in Iranica (following Henning) puts Bahram I at 271–274 and Bahram II at 274–291 CE; Skjærvø and Weber, in later Iranica articles, give Hormizd I 272–273, Bahram I 273–276 and Bahram II 276–293 CE. This page follows the second chronology.')

const MANI_DATE = note(
  'سال مرگ مانی محل بحث است. هنینگ روز را ۲ مارس ۲۷۴ م. حساب کرد (ایرانیکا، «مانی»)؛ وبر (ایرانیکا، «نرسی») مرگ او را در زندان به سال ۲۷۶ م. می‌گذارد.',
  'The year of Mani’s death is disputed. Henning calculated the day as 2 March 274 CE (Iranica, “Mani”); Weber (Iranica, “Narseh”) puts his death in prison in 276 CE.')

export const hormizdI: FeaturedKing = {
  slug: 'hormizd-i', name: B('هرمز یکم', 'Hormizd I'), dynastyName: SAS,
  reign: B('۲۷۰/۲۷۲–۲۷۳ م.', '270/272–273 CE'),
  title: B('هرمز یکم، «دلیر»؛ شاه بزرگ ارمنستان که یک سال شاهنشاه بود', 'Hormizd I “the Brave”: the great king of Armenia who was king of kings for a year'),
  lede: B(
    'هرمز یکم، با نام کامل هرمزد-اردشیر، پسر شاپور یکم بود. شاپور در کتیبهٔ کعبهٔ زرتشت او را «شاه بزرگ ارمنیان» می‌نامد. پادشاهی او بسیار کوتاه بود و به گفتهٔ ایرانیکا زندگی و کارهایش خوب شناخته نیست. در متن‌های پهلوی و مانوی لقب او «نیو»، یعنی «دلیر»، است. بر سکه‌های او برای نخستین بار لقب «شاهنشاه ایران و انیران» آمد.',
    'Hormizd I, in full Hormizd-Ardashir, was a son of Shapur I. In the Kaʿba-ye Zardosht inscription Shapur calls him “great king of the Armenians”. His reign was very short and, as Iranica says, his life and deeds are not well known. Pahlavi and Manichaean texts give him the epithet nēw, “the Brave”. His coins were the first to carry the title “king of kings of Ērān and Anērān”.'),
  stats: [{ n: B('~۱ سال', '~1 year'), l: B('شاهنشاهی', 'as king of kings') }, { n: B('نیو', 'nēw'), l: B('لقب: «دلیر»', 'epithet: “the Brave”') }],
  mapTitle: B('نقشه: از ارمنستان تا تیسفون', 'Map: from Armenia to Ctesiphon'),
  span: [252, 273],
  events: [
    ev('armenia', 252, B('پس از ۲۵۲ م.', 'after 252 CE'), 'admin', ARMENIA, B('شاه بزرگ ارمنیان', 'Great king of the Armenians'), B('ایرانیکا (شایگان): شاپور او را «شاه بزرگ ارمنیان» می‌نامد؛ این جایگاه را لابد پس از گرفتن ارمنستان، که به گفتهٔ ŠKZ آغاز جنگ دوم شاپور با روم بود، به دست آورد. بیشتر پژوهشگران گرفتن ارمنستان را ۲۵۲ م. می‌دانند.', 'Iranica (Shayegan): Shapur calls him “great king of the Armenians”, a rank he must have gained after the conquest of Armenia, which by the ŠKZ opened Shapur’s second war with Rome. Most scholars date the annexation of Armenia to 252 CE.'), 'probable', ['ir-hormozd1', 'skz']),
    ev('cappadocia', 254, B('حدود ۲۵۳–۲۵۶ م.', 'c. 253–256 CE'), 'campaign', CAPPADOCIA, B('یورش به کاپادوکیه', 'The raid into Cappadocia'), B('به نظر چند پژوهشگر، گرفتن شهرهای کاپادوکیه را ولیعهد هرمزد-اردشیر از ارمنستان رهبری کرد. فهرست این شهرها در ŠKZ مانند پیوستی جدا از فهرست شهرهای سوریه آمده است.', 'Several scholars think the capture of the Cappadocian cities was led by the crown prince Hormizd-Ardashir from Armenia. In the ŠKZ the list of these cities reads like an appendix to the list of Syrian towns.'), 'disputed', ['ir-hormozd1', 'skz'], note('این نظر بر پایهٔ ساختار کتیبه است؛ خود کتیبه نام فرمانده را نمی‌آورد.', 'This view rests on the structure of the inscription; the inscription itself does not name the commander.')),
    ev('accession', 272, B('۲۷۰ یا ۲۷۲ م.', '270 or 272 CE'), 'admin', CTESIPHON, B('شاهنشاه', 'King of kings'), B('هرمز پس از پدر به تخت نشست. کرتیر می‌گوید هرمز به او «کلاه و کمر» داد و او را «موبد هرمزد» نامید.', 'Hormizd succeeded his father. Kartir says Hormizd gave him the “hat and belt” and named him “mowbed of Ohrmazd”.'), 'disputed', ['ir-hormozd1', 'ir-kartir'], CHRONO),
    ev('mani', 272, B('۲۷۲/۲۷۳ م.', '272/273 CE'), 'religion', CTESIPHON, B('هرمز و مانی', 'Hormizd and Mani'), B('به گفتهٔ متن‌های مانوی، هرمز مانی را به حضور پذیرفت و به او اجازه داد با امان‌نامه به بابل برود. ایرانیکا هشدار می‌دهد که این مهربانی، مانند آزار کرتیر، از نظر تاریخی سست است.', 'Manichaean texts say Hormizd received Mani and let him travel to Babylonia with a safe-conduct. Iranica warns that this kindness is as historically tenuous as Kartir’s persecution.'), 'disputed', ['ir-hormozd1'], note('منبع تنها متن‌های مانوی است که خود طرف ماجرا بودند.', 'The only sources are Manichaean texts, which had a stake in the story.')),
    ev('town', 273, B('۲۷۲/۲۷۳ م.', '272/273 CE'), 'building', AHVAZ, B('شهر هرمزد-اردشیر (اهواز)', 'The town of Hormizd-Ardashir (Ahvaz)'), B('ساختن شهر هرمزد-اردشیر (سوق‌الاهواز) را هم به اردشیر یکم و هم به هرمز نسبت داده‌اند؛ پژوهشگران امروز، به پیروی از «شهرستان‌های ایران»، بیشتر آن را از هرمز می‌دانند.', 'The founding of the town of Hormizd-Ardashir (Sūq al-Ahwāz) is credited both to Ardashir I and to Hormizd; modern scholars, following the Šahrestānīhā ī Ērān, mostly give it to Hormizd.'), 'disputed', ['ir-hormozd1'], note('منابع کهن این شهر را به دو شاه نسبت می‌دهند؛ تاریخ بنیاد آن معلوم نیست.', 'Older sources credit the town to two different kings; its founding date is not known.')),
    ev('death', 273, B('۲۷۳ م.', '273 CE'), 'admin', CTESIPHON, B('مرگ زودهنگام', 'An early death'), B('وبر در ایرانیکا از «مرگ زودهنگام» هرمز در ۲۷۳ م. سخن می‌گوید. برادرش بهرام یکم جانشین او شد.', 'Weber in Iranica speaks of Hormizd’s “early death” in 273 CE. His brother Bahram I succeeded him.'), 'probable', ['ir-narseh']),
  ],
  dossier: [
    sec('aneran', 'ایران و انیران', 'Ērān and Anērān',
      [['از هرمز نقش برجسته‌ای نمانده، اما سکه‌هایش دو چیز تازه دارند. پشت سکه به جای دو نگهبان آتشدان، صحنهٔ دیهیم‌ستانی از آناهید یا مهر است. و نوشتهٔ روی سکه، که پیش‌تر تنها «شاهنشاه ایران» بود، اکنون «ایران و انیران» را در بر دارد.'],
        ['No relief of Hormizd survives, but his coins have two novelties. Instead of the two attendants of the fire altar, the reverse shows an investiture by Anāhīd or Mihr. And the legend, which before read only “king of kings of Ērān”, now includes “Ērān and Anērān”.']],
      [['ایرانیکا: افزودن «انیران» بی‌گمان گسترش قلمرو را نشان می‌دهد، اما روشن نیست کدام سرزمین‌ها «انیران» شمرده می‌شدند. لقب «نیو» (دلیر) هم شاید یادگار کارهای جنگی او باشد.'],
        ['Iranica: adding “Anērān” undoubtedly reflects the expansion of the empire, but exactly which lands counted as Anērān is uncertain. The epithet nēw, “the Brave”, may reflect his military successes.']],
      [['«انیران» یعنی مردمی که ایرانی نبودند اما زیر فرمان شاهنشاه بودند. یک لقب تازه بر سکه، به زبان ساده، ادعای مالکیت بر سرزمین‌ها و مردمان دیگر بود؛ این‌که خود آن مردم چه می‌خواستند در هیچ منبعی نیامده است.'],
        ['“Anērān” meant peoples who were not Iranian but were under the king of kings. A new title on a coin was, put simply, a claim of ownership over other lands and peoples; what those peoples themselves wanted is recorded in no source.']],
      ['ir-hormozd1', 'skz'], {
        quotes: [
          { text: 'and the Caesar lied again, he did harm/sin to Armenia, and We moved into the Roman empire.', fa: 'و قیصر باز دروغ گفت و به ارمنستان بدی کرد، و ما به کشور روم تاختیم.', ref: 'ŠKZ, Parthian l. 4 (as translated in Iranica, “Hormozd I”)', source: 'ir-hormozd1' },
          { text: 'His Mazdayasnian Majesty Ōhrmazd, king of kings of Ērān and non-Ērān, whose seed is from the gods', fa: 'خداوندگار مزداپرست هرمزد، شاهنشاه ایران و انیران، که چهر از ایزدان دارد', ref: 'Coin legend of Hormizd I (after Göbl, in Iranica)', source: 'ir-hormozd1' },
        ],
        photos: ['coin-hormizd1'],
      }),
  ],
  synthesis: { title: B('جمع‌بندی', 'Synthesis'), paras: { fa: ['هرمز یکم بیشتر در جایگاه شاهزاده و شاه ارمنستان شناخته است تا در جایگاه شاهنشاه. پادشاهی او یک سال یا کمی بیشتر بود. یادگار ماندگارش لقب «ایران و انیران» بر سکه‌هاست.'], en: ['Hormizd I is known more as a prince and king of Armenia than as king of kings. His reign lasted a year or a little more. His lasting legacy is the title “Ērān and Anērān” on the coins.'] }, sources: ['ir-hormozd1'] },
  sources: pick('ir-hormozd1', 'skz', 'ir-kartir', 'ir-narseh'),
  photos: photos('coin-hormizd1'),
  related: related(['shapur-i', 'شاپور یکم، پدرش', 'Shapur I, his father'], ['bahram-i', 'بهرام یکم، برادرش', 'Bahram I, his brother'], ['narseh', 'نرسی، برادرش', 'Narseh, his brother']),
  wikipedia: 'https://en.wikipedia.org/wiki/Hormizd_I',
}

export const bahramI: FeaturedKing = {
  slug: 'bahram-i', name: B('بهرام یکم', 'Bahram I'), dynastyName: SAS,
  reign: B('۲۷۳–۲۷۶ م. (یا ۲۷۱–۲۷۴)', '273–276 CE (or 271–274)'),
  title: B('بهرام یکم؛ کرتیر و مرگ مانی', 'Bahram I: Kartir and the death of Mani'),
  lede: B(
    'بهرام یکم پسر بزرگ شاپور یکم بود، اما پدرش هرمز را جانشین کرده بود. پس از مرگ زودهنگام هرمز، بهرام، احتمالاً با یاری موبد پرنفوذ کرتیر، به تخت نشست. او سیاست مدارای دینی پدرش را کنار گذاشت: مانی را به زندان انداخت، و مانی در بند مرد. پیروانش آزار دیدند.',
    'Bahram I was the eldest son of Shapur I, but his father had named Hormizd as heir. After Hormizd’s early death Bahram took the throne, probably with the help of the powerful priest Kartir. He abandoned his father’s policy of religious tolerance: he had Mani imprisoned, and Mani died in chains. His followers were persecuted.'),
  stats: [{ n: B('۲۶ روز', '26 days'), l: B('مانی در بند', 'Mani in chains') }, { n: B('~۳ سال', '~3 years'), l: B('پادشاهی', 'reign') }],
  mapTitle: B('نقشه: پادشاهی بهرام یکم', 'Map: the reign of Bahram I'),
  span: [273, 276],
  events: [
    ev('accession', 273, B('۲۷۳ م. (یا ۲۷۱)', '273 CE (or 271)'), 'admin', CTESIPHON, B('بر تخت', 'Accession'), B('ایرانیکا (شهبازی): بهرام بزرگ‌ترین پسر شاپور بود و در کتیبهٔ شاپور «شاه گیلان» خوانده شده است. با این همه جانشینی به هرمز رسیده بود. پس از او بهرام، احتمالاً با یاری کرتیر، به تخت نشست. به گفتهٔ وبر، بهرام نرسی را در برابر گذشتن از حق تاج‌وتخت شاه ارمنستان کرد.', 'Iranica (Shahbazi): Bahram was Shapur’s eldest son and appears in Shapur’s inscription as “king of Gēlān”. Yet the succession had gone to Hormizd. After him Bahram took the throne, probably with Kartir’s help. According to Weber, Bahram made Narseh king of Armenia in return for Narseh giving up his claim to the throne.'), 'disputed', ['ir-bahram1', 'ir-narseh'], CHRONO),
    ev('kartir', 274, B('۲۷۳–۲۷۶ م.', '273–276 CE'), 'religion', ISTAKHR, B('برآمدن کرتیر', 'The rise of Kartir'), B('شهبازی: بهرام سیاست مدارای دینی شاپور را وارونه کرد و راه را برای موبدان به رهبری کرتیر باز کرد تا یک «کلیسای دولتی» زرتشتی بسازند. کرتیر در کتیبه‌هایش لقب خود زیر بهرام یکم را «موبد هرمزد» می‌آورد.', 'Shahbazi: Bahram reversed Shapur’s policy of religious tolerance and let the clergy led by Kartir build a Zoroastrian “state church”. In his inscriptions Kartir gives his title under Bahram I as “mowbed of Ohrmazd”.'), 'probable', ['ir-bahram1', 'ir-kartir']),
    ev('relief', 275, B('۲۷۳–۲۷۶ م.', '273–276 CE'), 'building', BISHAPUR, B('نقش دیهیم‌ستانی در بیشاپور', 'The investiture relief at Bishapur'), B('بهرام، مانند اردشیر و شاپور، به تخت نشستن خود را در نقشی در بیشاپور نشان داد: شاه سوار است و هرمزد، که او هم سوار است، دیهیم را به او می‌دهد. بعدها نرسی نام بهرام را پاک کرد و نام خود را جای آن نوشت.', 'Like Ardashir and Shapur, Bahram marked his accession with a relief at Bishapur: the king on horseback receives the diadem from Ohrmazd, also mounted. Later Narseh erased Bahram’s name and put his own in its place.'), 'secure', ['ir-bahram1', 'ir-bahram3']),
    ev('mani', 276, B('۲۷۴ یا ۲۷۶ م.', '274 or 276 CE'), 'religion', GUNDESHAPUR, B('زندان و مرگ مانی', 'Mani’s imprisonment and death'), B('ایرانیکا (ساندرمان): مانی به بیلاباد (گندی‌شاپور) آمد، مغان او را نزد کرتیر متهم کردند و شاه او را با خشم پذیرفت. مانی را به بند کشیدند؛ ۲۶ روز در بند ماند و همان‌جا مرد. پس از او پیروانش آزار دیدند.', 'Iranica (Sundermann): Mani came to Bēlābād (Gundeshapur), the Magi accused him before Kartir, and the king received him in anger. Mani was put in chains; he spent 26 days in chains and died there. His followers were persecuted after him.'), 'disputed', ['ir-mani', 'ir-kartir', 'ir-bahram1'], MANI_DATE),
    ev('death', 276, B('۲۷۶ م. (یا ۲۷۴)', '276 CE (or 274)'), 'admin', CTESIPHON, B('پایان پادشاهی', 'The end of the reign'), B('شهبازی: جز این، پادشاهی کوتاه بهرام «بی‌رویداد» بود. پسرش بهرام دوم جانشین او شد.', 'Shahbazi: otherwise Bahram’s short reign was “uneventful”. His son Bahram II succeeded him.'), 'disputed', ['ir-bahram1', 'ir-bahram2'], CHRONO),
  ],
  dossier: [
    sec('mani', 'دیدار واپسین مانی با شاه', 'Mani’s last audience with the king',
      [['قطعه‌ای پارسی میانه (M 3)، که ایرانیکا آن را گزارش یک شاهد آگاه می‌داند، دیدار مانی و شاه را در بیلاباد می‌آورد. شاه با سخنانی تند او را می‌پذیرد. به گفتهٔ موعظه‌های قبطی، مانی ۲۶ روز در بند بود و سپس درگذشت.'],
        ['A Middle Persian fragment (M 3), which Iranica treats as a well-informed eyewitness report, describes the meeting of Mani and the king at Bēlābād. The king greets him with harsh words. According to the Coptic Homilies, Mani spent 26 days in chains and then died.']],
      [['منابع مانوی کرتیر و مغان را گردانندهٔ کار می‌دانند. ایرانیکا (شروو) یادآوری می‌کند که پژوهشگری چون نویزنر آن را «قتل قضایی» خوانده است. گاردنر خوانش تازه‌ای از M 3 پیشنهاد کرده که شاهِ بی‌نام را نه بهرام یکم، بلکه نرسی می‌داند. پس حتی نام شاهِ این گفت‌وگو قطعی نیست.'],
        ['The Manichaean sources make Kartir and the Magi the driving force. Iranica (Skjærvø) notes that a scholar such as Neusner called it a “judicial murder”. Gardner has proposed a new reading of M 3 in which the unnamed king is not Bahram I but Narseh. So even the name of the king in this exchange is not certain.']],
      [['مانی را برای باورش به بند کشیدند، نه برای دزدی یا خشونت. وقتی دولت دینی رسمی می‌سازد، وجدان مردم هم دارایی دولت می‌شود. آزادی باور نخستین قربانی این دگرگونی بود.'],
        ['Mani was chained for his beliefs, not for theft or violence. When a state builds an official religion, people’s consciences become state property. Freedom of belief was the first casualty of this change.']],
      ['henning-m3', 'ir-mani', 'ir-kartir', 'ir-narseh'], {
        quotes: [{ text: 'You are not welcome… I have sworn not to let you come to this country', fa: 'خوش نیامدی… سوگند خورده‌ام که نگذارم به این سرزمین بیایی', ref: 'M 3, tr. Henning 1942, p. 951 (quoted in Iranica, “Mani”)', source: 'henning-m3' }],
        photos: ['coin-bahram1'],
      }),
    sec('relief', 'نقشی که نام دیگری گرفت', 'A relief that took another name',
      [['ایرانیکا نقش بهرام یکم در بیشاپور را، به نقل از اشمیت، «از نظر هنری دلنشین‌ترین نمونهٔ نقش برجستهٔ ساسانی» می‌خواند. نرسی بعدها نام بهرام را از کتیبهٔ کنار آن پاک کرد و نام خود را نوشت، و پیکر دشمنی افتاده را زیر پای اسب افزود.'],
        ['Iranica, citing Schmidt, calls Bahram I’s relief at Bishapur “artistically the most appealing example of Sasanian rock sculpture”. Narseh later erased Bahram’s name from the inscription beside it, wrote in his own, and added a fallen enemy under the horse.']],
      [['وبر این «زدودن یاد» را واکنشی دیرهنگام به کار بهرام می‌داند، که نرسی را از تخت کنار گذاشته بود.'],
        ['Weber reads this damnatio memoriae as a late reaction to Bahram’s act of setting Narseh aside from the throne.']],
      [['سنگ هم از سیاست در امان نبود: شاه بعدی می‌توانست تاریخ را با یک قلم تراش بازنویسی کند.'],
        ['Even stone was not safe from politics: the next king could rewrite history with a chisel.']],
      ['ir-bahram1', 'ir-bahram3', 'ir-narseh'], { photos: ['bishapur-bahram1'] }),
  ],
  synthesis: { title: B('جمع‌بندی', 'Synthesis'), paras: { fa: ['پادشاهی بهرام یکم کوتاه بود، اما نقطهٔ چرخشی بود: مدارای دینی شاپور جای خود را به دین رسمی با پشتیبانی دولت داد، و مانی، که شاپور او را آزاد گذاشته بود، در زندان مرد.'], en: ['Bahram I’s reign was short but a turning point: Shapur’s religious tolerance gave way to an official religion backed by the state, and Mani, whom Shapur had left free, died in prison.'] }, sources: ['ir-bahram1', 'ir-mani', 'ir-kartir'] },
  sources: pick('ir-bahram1', 'ir-mani', 'henning-m3', 'ir-kartir', 'ir-narseh', 'ir-bahram3', 'ir-bahram2'),
  photos: photos('coin-bahram1', 'bishapur-bahram1'),
  related: related(['shapur-i', 'شاپور یکم، پدرش', 'Shapur I, his father'], ['hormizd-i', 'هرمز یکم، برادرش', 'Hormizd I, his brother'], ['bahram-ii', 'بهرام دوم، پسرش', 'Bahram II, his son'], ['narseh', 'نرسی، برادرش', 'Narseh, his brother']),
  wikipedia: 'https://en.wikipedia.org/wiki/Bahram_I',
}

export const bahramII: FeaturedKing = {
  slug: 'bahram-ii', name: B('بهرام دوم', 'Bahram II'), dynastyName: SAS,
  reign: B('۲۷۶–۲۹۳ م. (یا ۲۷۴–۲۹۱)', '276–293 CE (or 274–291)'),
  title: B('بهرام دوم؛ روزگار کرتیر', 'Bahram II: the age of Kartir'),
  lede: B(
    'بهرام دوم پسر بهرام یکم بود و نزدیک هفده سال پادشاهی کرد. او موبد کرتیر را راهنمای خود می‌دانست و به او جایگاه بزرگان، نگهبانی آتشکدهٔ آناهید در استخر و داوری کل کشور را داد. در این دوره پیروان دین‌های دیگر آزار دیدند. شاه با شورش برادرش هرمز در سکستان و با یورش امپراتور روم، کاروس، روبه‌رو شد. بیشترِ نقش‌های برجستهٔ ساسانی از روزگار اوست.',
    'Bahram II, son of Bahram I, reigned for about seventeen years. He regarded the priest Kartir as his mentor and gave him noble rank, the keeping of the Anāhīd fire temple at Istakhr, and the office of supreme judge of the empire. In this period followers of other religions were persecuted. The king faced a revolt by his brother Hormizd in Sakastan and an invasion by the Roman emperor Carus. More Sasanian rock reliefs survive from his reign than from any other.'),
  stats: [{ n: B('~۱۷', '~17'), l: B('سال پادشاهی', 'years of reign') }, { n: B('۶+', '6+'), l: B('نقش برجسته (ایرانیکا)', 'rock reliefs (Iranica)') }],
  mapTitle: B('نقشه: پادشاهی بهرام دوم', 'Map: the reign of Bahram II'),
  span: [276, 293],
  events: [
    ev('accession', 276, B('۲۷۶ م. (یا ۲۷۴)', '276 CE (or 274)'), 'admin', CTESIPHON, B('بر تخت', 'Accession'), B('بهرام دوم جانشین پدرش بهرام یکم شد. نولدکه پادشاهی او را هفده سال و سه ماه می‌شمارد.', 'Bahram II succeeded his father Bahram I. Nöldeke counts his reign as seventeen and a quarter years.'), 'disputed', ['ir-bahram2', 'ir-kartir'], CHRONO),
    ev('kartir', 277, B('پس از ۲۷۶ م.', 'after 276 CE'), 'religion', ISTAKHR, B('کرتیر در اوج', 'Kartir at his height'), B('شهبازی: بهرام دوم کرتیر را به جایگاه بزرگان (وزرگ) رساند، نگهبان آتشکدهٔ خاندانی آناهید در استخر و داور کل کشور کرد، و لقب تازه‌ای به او داد. به رهبری کرتیر، غیرزرتشتیان، از جمله مانویان و مسیحیان، آزار دیدند.', 'Shahbazi: Bahram II raised Kartir to the rank of noble (wuzurg), made him keeper of the dynastic Anāhīd fire temple at Istakhr and supreme judge of the empire, and gave him a new title. Under Kartir’s leadership non-Zoroastrians, among them Manichaeans and Christians, were persecuted.'), 'secure', ['ir-bahram2', 'ir-kartir']),
    ev('revolt', 281, B('دههٔ ۲۸۰ م.', '280s CE'), 'battle', SAKASTAN, B('شورش هرمز در سکستان', 'Hormizd’s revolt in Sakastan'), B('به گفتهٔ یک سخنور رومی (کلاودیوس مامرتینوس)، برادر شاه، هرمز، با پشتیبانی سکاها و گیل‌ها شورید. شورش در سکستان بود و چند سال طول کشید. سرانجام بهرام آن را سرکوب کرد و پسرش بهرام را با لقب «سکان‌شاه» فرمانروای آن‌جا کرد.', 'According to a Roman orator (Claudius Mamertinus), the king’s brother Hormizd rebelled with the support of the Sakas and the Gēls. The revolt was centred on Sakastan and lasted several years. Bahram finally crushed it and made his son Bahram governor there with the title Sakān Šāh.'), 'probable', ['ir-bahram2'], note('ایرانیکا (شهبازی) یکی دانستن این هرمز با «هرمز کوشان‌شاهان‌شاه» سکه‌ها را رد می‌کند.', 'Iranica (Shahbazi) rejects identifying this Hormizd with the “Hormizd Kušān Šāhān Šāh” of the coins.')),
    ev('carus', 283, B('۲۸۳ م.', '283 CE'), 'campaign', CTESIPHON, B('یورش کاروس', 'Carus invades'), B('شهبازی: رومیان از گرفتاری بهرام در شرق بهره بردند و بی‌آن‌که با پایداری زیادی روبه‌رو شوند تا تیسفون پیش آمدند، اما با مرگ مرموز امپراتور کاروس ناگهان بازگشتند. سپس بهرام میان‌رودان را پس گرفت و با دیوکلتیانوس پیمان صلح بست.', 'Shahbazi: the Romans used Bahram’s distraction in the east and advanced on Ctesiphon without much resistance, but withdrew suddenly when Emperor Carus died in mysterious circumstances. Bahram then regained Mesopotamia and made a peace treaty with Diocletian.'), 'probable', ['ir-bahram2']),
    ev('reliefs', 285, B('۲۷۶–۲۹۳ م.', '276–293 CE'), 'building', NAQSH_E_ROSTAM, B('نقش‌های برجسته', 'The rock reliefs'), B('ایرانیکا دست‌کم شش نقش از بهرام دوم برمی‌شمارد: در گویم، سرمشهد (شکار شیر، با ملکه و کرتیر)، نقش بهرام، بیشاپور، و دو نقش در نقش رستم، یکی با خانواده و درباریان و دیگری نبرد سوارکاران.', 'Iranica lists at least six reliefs of Bahram II: at Guyom, Sar Mashhad (a lion hunt, with the queen and Kartir), Naqsh-e Bahram, Bishapur, and two at Naqsh-e Rostam, one with family and courtiers and one of mounted combat.'), 'secure', ['ir-bahram2']),
    ev('death', 293, B('۲۹۳ م. (یا ۲۹۱)', '293 CE (or 291)'), 'admin', CTESIPHON, B('مرگ بهرام دوم', 'Death of Bahram II'), B('وبر: پس از مرگ بهرام دوم در ۲۹۳ م.، تاج‌گذاری پسرش بهرام سوم به بحرانی بزرگ انجامید.', 'Weber: after Bahram II died in 293 CE, the coronation of his son Bahram III led to a serious crisis.'), 'disputed', ['ir-narseh', 'ir-bahram2'], CHRONO),
  ],
  dossier: [
    sec('kartir', 'کرتیر و کتیبه‌هایش', 'Kartir and his inscriptions',
      [['کرتیر تنها کسی جز شاهان است که در آغاز ساسانیان کتیبه‌های بلند به نام خود نوشت: بر کعبهٔ زرتشت (KKZ)، در نقش رستم، نقش رجب و سرمشهد. او در آن‌ها لقب‌های خود را زیر چهار شاه برمی‌شمارد: «هیربد» زیر شاپور، «موبد هرمزد» زیر هرمز و بهرام یکم، و زیر بهرام دوم لقبی تازه. او می‌گوید در کشور یهودیان، شمن‌ها (بوداییان)، برهمن‌ها، مسیحیان، نصرانی‌ها، مکتک‌ها و زندیق‌ها (مانویان) «زده شدند» و بت‌ها شکسته شد.'],
        ['Kartir is the only person besides the kings to leave long inscriptions in his own name in early Sasanian times: on the Kaʿba-ye Zardosht (KKZ), and at Naqsh-e Rostam, Naqsh-e Rajab and Sar Mashhad. In them he lists his titles under four kings: hērbed under Shapur, “mowbed of Ohrmazd” under Hormizd and Bahram I, and a new title under Bahram II. He says that in the land Jews, Shamans (Buddhists), Brahmans, Christians, Nazarenes, Makdags and Zandīgs (Manichaeans) were “struck down”, and idols were destroyed.']],
      [['معنای لقب تازه محل بحث است. خوانش کهن‌تر «نجات‌دهندهٔ روان بهرام» بود؛ شروو در ایرانیکا «کسی که روانش را بهرام نجات داد» را محتمل‌تر می‌داند. اندازهٔ واقعی آزارها هم روشن نیست: ایرانیکا (شایگان) می‌گوید ادعای کرتیر از نظر تاریخی سست است، و پژوهشگرانی چون کالمین در ویرانی کنیسه‌ها تردید دارند.'],
        ['The meaning of the new title is disputed. The older reading was “saviour of Bahram’s soul”; Skjærvø in Iranica thinks “whose soul was saved by Bahram” more likely. The real scale of the persecutions is also unclear: Iranica (Shayegan) calls Kartir’s claim historically tenuous, and scholars such as Kalmin doubt that synagogues were destroyed.']],
      [['کرتیر به آزار دیگران می‌بالید و آن را بر سنگ نوشت. این کتیبه‌ها نخستین سند ایرانی از دینی رسمی‌اند که دولت پشتیبان آن است؛ و هر جا دولت داور باور مردم شود، جان، دارایی و پرستشگاه اقلیت‌ها در خطر است.'],
        ['Kartir boasted of persecuting others and carved it in stone. These inscriptions are the first Iranian record of an official religion backed by the state; and wherever the state becomes judge of people’s beliefs, minorities’ lives, property and places of worship are at risk.']],
      ['ir-kartir', 'ir-bahram2', 'ir-hormozd1'], {
        quotes: [{ text: 'whose soul was saved by Warahrān', fa: 'کسی که روانش را بهرام نجات داد', ref: 'Kartir’s title under Bahram II (bōxt-ruwān-Warahrān), as rendered by Skjærvø in Iranica', source: 'ir-kartir' }],
        photos: ['kartir-knrb'],
      }),
    sec('art', 'شاه و خانواده بر سنگ و سکه', 'King and family on stone and coin',
      [['سکه‌های بهرام دوم چهار گونه‌اند. در یکی شاه تنهاست؛ در دیگری با ملکه شاپوردختک، دختر شاپور میشان‌شاه؛ در سومی با ولیعهد بهرام سکان‌شاه؛ و در رایج‌ترین گونه شاه و ملکه رو به ولیعهد. تاج بال‌دار او نشان ایزد بهرام است.'],
        ['Bahram II’s coins are of four types: the king alone; with Queen Šāpūrduxtak, daughter of Shapur king of Mesene; with the crown prince Bahram Sakān Šāh; and, most often, king and queen facing the crown prince. His winged crown is the emblem of the god Bahram.']],
      [['شهبازی شکار شیر در سرمشهد را بیشتر نمایش واقعی دلیری شاه می‌داند تا نماد. دو نبرد سوارکاری در نقش رستم را با جنگ کاروس پیوند داده‌اند؛ این پیوند تنها یک تفسیر است.'],
        ['Shahbazi reads the lion hunt at Sar Mashhad mainly as a real show of royal courage rather than an allegory. The two mounted combats at Naqsh-e Rostam have been linked to the war with Carus; that link is only an interpretation.']],
      [['ملکه و ولیعهد بر سکه یعنی پیام جانشینی روشن. بحران پس از مرگ او نشان داد که پیام روی سکه جای توافق بزرگان را نمی‌گیرد.'],
        ['A queen and crown prince on the coins meant a clear succession message. The crisis after his death showed that a message on a coin could not replace the consent of the nobles.']],
      ['ir-bahram2', 'ir-narseh'], { photos: ['coin-bahram2', 'nr-bahram2'] }),
  ],
  synthesis: { title: B('جمع‌بندی', 'Synthesis'), paras: { fa: ['بهرام دوم شورش شرق را خواباند، یورش روم را پشت سر گذاشت و با دیوکلتیانوس صلح کرد. اما نام او با کرتیر پیوند خورده است: روزگاری که دین رسمی دولت به آزار دیگران انجامید.'], en: ['Bahram II put down the revolt in the east, survived the Roman invasion and made peace with Diocletian. But his name is bound to Kartir’s: an age in which the official religion of the state led to the persecution of others.'] }, sources: ['ir-bahram2', 'ir-kartir'] },
  sources: pick('ir-bahram2', 'ir-kartir', 'ir-hormozd1', 'ir-narseh'),
  photos: photos('coin-bahram2', 'kartir-knrb', 'nr-bahram2'),
  related: related(['bahram-i', 'بهرام یکم، پدرش', 'Bahram I, his father'], ['bahram-iii', 'بهرام سوم، پسرش', 'Bahram III, his son'], ['narseh', 'نرسی، عموی پدرش', 'Narseh, his great-uncle']),
  wikipedia: 'https://en.wikipedia.org/wiki/Bahram_II',
}

export const bahramIII: FeaturedKing = {
  slug: 'bahram-iii', name: B('بهرام سوم', 'Bahram III'), dynastyName: SAS,
  reign: B('۲۹۳ م. (چهار ماه)', '293 CE (four months)'),
  title: B('بهرام سوم، سکان‌شاه؛ چهار ماه پادشاهی', 'Bahram III, Sakān Šāh: a reign of four months'),
  lede: B(
    'بهرام سوم پسر بهرام دوم بود و پیش از آن با لقب «سکان‌شاه» بر سکستان فرمان می‌راند. گروهی از بزرگان به رهبری وهنام پسر تتروس او را در پارس شاه خواندند. اما انجمنی از بزرگان، همراه کرتیر، تاج را به نرسی، شاه بزرگ ارمنستان، پیشنهاد کردند. وهنام گرفتار و کشته شد. به گفتهٔ کتیبهٔ پایکولی، بهرام تسلیم شد؛ اما پس از آن چه بر سرش آمد در هیچ منبعی نیامده است.',
    'Bahram III was the son of Bahram II and had earlier ruled Sakastan with the title Sakān Šāh. A group of nobles led by Wahnām son of Tatrus proclaimed him king in Persis. But an assembly of nobles, with Kartir among them, offered the crown to Narseh, the great king of Armenia. Wahnām was captured and executed. The Paikuli inscription says Bahram surrendered; what happened to him afterwards is recorded in no source.'),
  stats: [{ n: B('۴ ماه', '4 months'), l: B('پادشاهی', 'reign') }, { n: B('؟', '?'), l: B('سرنوشت پس از تسلیم', 'fate after surrender') }],
  mapTitle: B('نقشه: بحران جانشینی ۲۹۳ م.', 'Map: the succession crisis of 293 CE'),
  span: [292, 293],
  events: [
    ev('proclaimed', 293, B('۲۹۳ م.', '293 CE'), 'admin', PERSIS, B('شاه خوانده شد', 'Proclaimed king'), B('کلیما (ایرانیکا): بهرام را گروهی از بزرگان به رهبری وهنام پسر تتروس در پارس شاه خواندند (گفته‌اند خودش رغبتی نداشت)، و آدورفرنبغ، شاه میشان، پشتیبان آنان بود. وبر: این کار پنهانی و بی‌پذیرش بزرگان انجام شد. کتیبهٔ پایکولی می‌گوید وهنام با «دروغ خود» و به یاری «اهریمن و دیوان» چنین کرد.', 'Klíma (Iranica): Bahram was proclaimed king in Persis by a group of nobles led by Wahnām son of Tatrus (it is claimed against his will), supported by Ādurfarrōbay, king of Mesene. Weber: it was done secretly and without the nobles’ acclamation. The Paikuli inscription says Wahnām acted through “his own falsehood” and with the help of “Ahrimen and the devils”.'), 'probable', ['ir-bahram3', 'ir-narseh', 'npi']),
    ev('mesene', 293, B('۲۹۳ م.', '293 CE'), 'admin', MESENE, B('پشتیبانی میشان', 'Mesene’s support'), B('آدورفرنبغ، شاه میشان، از بهرام و وهنام پشتیبانی کرد.', 'Ādurfarrōbay, king of Mesene, supported Bahram and Wahnām.'), 'probable', ['ir-bahram3']),
    ev('assembly', 293, B('۲۹۳ م.', '293 CE'), 'admin', PAIKULI, B('بزرگان نرسی را فرا می‌خوانند', 'The nobles call Narseh'), B('انجمنی از بزرگان، سران خاندان‌های بزرگ و کرتیر، به نرسی وفاداری نشان دادند و او را از ارمنستان به تیسفون خواندند. در لشکرکشی تندی وهنام گرفتار و کشته شد. کتیبهٔ پایکولی، که نرسی در گذرگاه پایکولی برپا کرد، تنها منبع این ماجراست.', 'An assembly of nobles, the heads of the great houses and Kartir swore allegiance to Narseh and invited him from Armenia to Ctesiphon. In a swift campaign Wahnām was captured and executed. The Paikuli inscription, which Narseh set up at the Paikuli pass, is the only source for these events.'), 'probable', ['ir-bahram3', 'ir-narseh', 'npi'], note('همهٔ این گزارش از زبان برندهٔ ماجرا، نرسی، است.', 'The whole account comes from the winner, Narseh.')),
  ],
  dossier: [
    sec('crisis', 'شاهی که سرنوشتش ناگفته ماند', 'The king whose fate went unrecorded',
      [['کتیبهٔ پایکولی می‌گوید بهرام تسلیم نرسی شد. ایرانیکا (کلیما): «سرنوشت بهرام ثبت نشده است.» از او بنایی نمانده. سکه‌هایی با تاج شیاردار را زمانی به او نسبت می‌دادند، اما گوبل آن‌ها را از نرسی دانست. بشقاب سیمینی با نام «بهرام، شاهنشاه ایران و انیران» هم مشکوک است.'],
        ['The Paikuli inscription says Bahram surrendered to Narseh. Iranica (Klíma): “the fate of Bahrām is not recorded.” He left no monument. Coins with a fluted crown were once assigned to him, but Göbl showed they belong to Narseh. A silver plate naming “Bahrām, King of Kings of Iran and Non-Iran” is also suspect.']],
      [['نرسی بعدها پیکر دشمنی افتاده را زیر اسب خود در نقش بیشاپور افزود؛ کلیما آن را بیشتر نماد وهنام می‌داند و کمتر نماد بهرام سوم.'],
        ['Narseh later added a fallen enemy under his horse in the Bishapur relief; Klíma thinks it more likely stands for Wahnām than for Bahram III.']],
      [['این بحران نشان می‌دهد که تاج ساسانی دارایی شخصی شاه نبود که به پسر برسد؛ بزرگان می‌توانستند آن را به دیگری بدهند. پایکولی از این رو سندی کم‌یاب از رضایت و پیمان میان شاه و نخبگان است.'],
        ['This crisis shows that the Sasanian crown was not the king’s personal property to pass to his son; the nobles could give it to someone else. That makes Paikuli a rare record of consent and compact between king and elite.']],
      ['ir-bahram3', 'ir-narseh', 'npi'], { link: { href: B('/king/narseh', '/en/king/narseh'), label: B('نرسی و کتیبهٔ پایکولی', 'Narseh and the Paikuli inscription') } }),
  ],
  synthesis: { title: B('جمع‌بندی', 'Synthesis'), paras: { fa: ['بهرام سوم چهار ماه شاه بود و از او نه بنایی ماند و نه سکهٔ مطمئنی. داستانش را تنها رقیب پیروزش، نرسی، روایت کرده است.'], en: ['Bahram III was king for four months and left neither a monument nor a secure coin. His story is told only by his victorious rival, Narseh.'] }, sources: ['ir-bahram3', 'ir-narseh'] },
  sources: pick('ir-bahram3', 'ir-narseh', 'npi'),
  photos: photos('paikuli-block'),
  related: related(['bahram-ii', 'بهرام دوم، پدرش', 'Bahram II, his father'], ['narseh', 'نرسی، جانشین او', 'Narseh, his successor']),
  wikipedia: 'https://en.wikipedia.org/wiki/Bahram_III',
}

export const shortSasanians = [hormizdI, bahramI, bahramII, bahramIII]
