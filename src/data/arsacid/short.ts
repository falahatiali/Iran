/**
 * Compact dossiers for the early and short Arsacid reigns: Arsaces I, Arsaces II, Phriapatius, Phraates I,
 * Phraates II and Artabanus I. Literary evidence is thin and late (Justin, Strabo, Polybius); the Nisa ostraca,
 * coins and Babylonian tablets are the only contemporary record, so every reconstruction is flagged.
 */
import type { FeaturedKing } from '../featured/types'
import {
  ASSAR, ASTAUENE, BABYLON, CASPIAN_GATES, CHARAX, ECBATANA, HECATOMPYLUS, HYRCANIA, LABUS, MARDI, MERV, NISA, PAR, RHAGAE, SELEUCIA, YUEZHI,
  ev, note, photos, pick, related, sec,
} from './common'

const TIRIDATES = note('برخی پژوهشگران (از جمله بیوار در تاریخ ایران کمبریج، ۱۹۸۳، ص ۳۷) می‌گویند ارشک پس از دو سه سال کشته شد و برادرش تیرداد جای او را گرفت. سفال‌نوشته‌های نسا و سکه‌ها چنین برادری را نشان نمی‌دهند و امروز بیشتر پژوهشگران تیرداد را ساختهٔ منابع دیرین می‌دانند.', 'Some scholars (including Bivar, Cambridge History of Iran, 1983, p. 37) hold that Arsaces was killed after two or three years and replaced by his brother Tiridates. The Nisa ostraca and the coins show no such brother, and most scholars now treat Tiridates as a creation of the late sources.')

export const arsacesI: FeaturedKing = {
  slug: 'arsaces-i', name: { fa: 'ارشک یکم', en: 'Arsaces I' }, dynastyName: PAR,
  reign: { fa: 'حدود ۲۴۷–۲۱۷ پ.م.', en: 'c. 247–217 BCE' },
  title: { fa: 'ارشک یکم؛ سردار پرنی که نامش لقب همهٔ شاهان شد', en: 'Arsaces I: the Parni chief whose name became every king’s title' },
  lede: {
    fa: 'سرکردهٔ پرنی‌ها، تیره‌ای از داهه‌های آسیای میانه، که حدود ۲۵۰ پ.م. دره‌ی اترک را گرفت، در حدود ۲۴۷ در جایی به نام «اساک» شاه خوانده شد و چند سال بعد ساتراپی پارت را از آندراگوراس گرفت. آغاز «تقویم اشکانی» از ۲۴۷ پ.م. است. از خود او هیچ نوشته‌ای نمانده؛ داستانش را یوستینوس و استرابون سده‌ها بعد نوشته‌اند و با هم یکی نیستند. پارتیان پس از او همهٔ شاهانشان را «ارشک» خواندند.',
    en: 'Chief of the Parni, a tribe of the Central Asian Dahae, who took the Atrek valley around 250 BCE, was proclaimed king at a place called Asaak around 247 and a few years later seized the satrapy of Parthia from Andragoras. The Arsacid era counts from 247 BCE. Nothing written by him survives; his story was told centuries later by Justin and Strabo, who do not agree. After him the Parthians called all their kings “Arsaces”.',
  },
  stats: [{ n: { fa: '۲۴۷', en: '247' }, l: { fa: 'آغاز تقویم اشکانی (پ.م.)', en: 'start of the Arsacid era (BCE)' } }, { n: { fa: '~۴۷۰', en: '~470' }, l: { fa: 'سال پادشاهی دودمانش', en: 'years his dynasty ruled' } }],
  mapTitle: { fa: 'نقشه: از دره‌ی اترک تا پارت و هیرکانی', en: 'Map: from the Atrek valley to Parthia and Hyrcania' },
  span: [-250, -217],
  events: [
    ev('astauene', -250, { fa: 'حدود ۲۵۰ پ.م.', en: 'c. 250 BCE' }, 'campaign', ASTAUENE, { fa: 'پرنی‌ها در دره‌ی اترک', en: 'The Parni in the Atrek valley' }, { fa: 'پرنی‌ها، یکی از سه تیرهٔ داهه که سوارکار و نیمه‌کوچ‌رو بودند، به آستاوئنه (دره‌ی اترک، شمال خراسان امروز) آمدند (استرابون ۱۱.۹.۲؛ ایرانیکا).', en: 'The Parni, one of the three Dahae tribes, mounted and semi-nomadic, moved into Astauene (the Atrek valley, in today’s northern Khorasan) (Strabo 11.9.2; Iranica).' }, 'probable', ['strabo', 'ir-arsacids']),
    ev('asaak', -247, { fa: 'حدود ۲۴۷ پ.م.', en: 'c. 247 BCE' }, 'admin', ASTAUENE, { fa: 'شاه خوانده شدن در اساک', en: 'Proclaimed king at Asaak' }, { fa: 'ارشک در شهر اساک شاه خوانده شد و این سال آغاز تقویم اشکانی شد، که اسناد بابلی و پارتی بعدها با آن تاریخ می‌خوردند. جای اساک دانسته نیست.', en: 'Arsaces was proclaimed king at the town of Asaak, and this year became the start of the Arsacid era, used later to date Babylonian and Parthian documents. The site of Asaak is unknown.' }, 'disputed', ['ir-arsacids', 'bivar'], note('سال ۲۴۷ از تقویم اشکانی قطعی است؛ اینکه همان سال تاج‌گذاری ارشک باشد و جای اساک، استنباطی است.', 'The 247 era is secure; that it marks Arsaces’ own coronation, and the site of Asaak, are inferences.')),
    ev('andragoras', -238, { fa: 'حدود ۲۳۸ پ.م.', en: 'c. 238 BCE' }, 'battle', HECATOMPYLUS, { fa: 'گرفتن پارت از آندراگوراس', en: 'Parthia taken from Andragoras' }, { fa: 'آندراگوراس، ساتراپ سلوکی پارت، خود را مستقل کرده بود. پرنی‌ها به پارت تاختند و او کشته شد؛ سپس هیرکانی را هم گرفتند. نام «پارتی» از همین ساتراپی (پرثوه) بر آنان ماند.', en: 'Andragoras, the Seleucid satrap of Parthia, had made himself independent. The Parni invaded Parthia and he was killed; they then took Hyrcania too. The name “Parthians” passed to them from this satrapy (Parthava).' }, 'disputed', ['justin', 'strabo', 'ir-arsacids'], note('یوستینوس (۴۱.۴) ارشک را راهزنی «با تبار نامعلوم» می‌داند؛ استرابون (۱۱.۹.۳) یک روایت را می‌آورد که او باختری بود و از دست دیودوتوس گریخت. تاریخ ۲۳۸ هم تقریبی است.', 'Justin (41.4) makes Arsaces a raider “of uncertain origin”; Strabo (11.9.3) reports a version that he was a Bactrian fleeing Diodotus. The date 238 is also approximate.')),
    ev('seleucus', -230, { fa: '۲۳۱–۲۲۷ پ.م.', en: '231–227 BCE' }, 'battle', HYRCANIA, { fa: 'سلوکوس دوم ناکام می‌ماند', en: 'Seleucus II fails' }, { fa: 'سلوکوس دوم برای پس‌گرفتن پارت آمد. یوستینوس از پیروزی ارشک می‌گوید که پارتیان روزش را «آغاز آزادی» خود جشن می‌گرفتند. ایرانیکا علت عقب‌نشینی سلوکوس را بیشتر آشوب در آسیای کوچک می‌داند.', en: 'Seleucus II came to recover Parthia. Justin speaks of a victory by Arsaces whose day the Parthians celebrated as “the commencement of their liberty”. Iranica puts Seleucus’ withdrawal down mainly to unrest in Asia Minor.' }, 'disputed', ['justin', 'ir-arsacids'], note('پیروزی در میدان (یوستینوس) یا عقب‌نشینی به خاطر گرفتاری در غرب (ایرانیکا)؛ هیچ منبع هم‌روزگاری نمانده است.', 'A battlefield victory (Justin) or a withdrawal forced by trouble in the west (Iranica); no contemporary source survives.')),
    ev('dara', -228, { fa: 'پس از ۲۲۸ پ.م.', en: 'after 228 BCE' }, 'building', [58.9, 37.4], { fa: 'دژها و شهر دارا', en: 'Forts and the city of Dara' }, { fa: 'به گفتهٔ یوستینوس، ارشک سپاه گرد آورد، دژ ساخت و شهری به نام دارا در کوه زاپائورتنون بنا کرد. جای دارا را معمولاً نزدیک ابیورد (شمال خراسان) می‌گذارند.', en: 'Justin says Arsaces raised troops, built forts and founded a city called Dara on Mount Zapaortenon. Dara is usually placed near Abiward (northern Khorasan).' }, 'disputed', ['justin', 'bivar'], note('جای دارا و کوه زاپائورتنون یقینی نیست؛ نقطه روی نقشه تقریبی است.', 'The site of Dara and Mount Zapaortenon is not certain; the map point is approximate.')),
    ev('death', -217, { fa: 'حدود ۲۱۷ پ.م.', en: 'c. 217 BCE' }, 'admin', NISA, { fa: 'مرگ در پیری؛ تیرداد؟', en: 'Death in old age; Tiridates?' }, { fa: 'یوستینوس می‌گوید ارشک «در پیری پخته» درگذشت و پسرش، که او هم ارشک نام داشت، جانشین شد.', en: 'Justin says Arsaces “died at a mature old age” and was succeeded by his son, also called Arsaces.' }, 'disputed', ['justin', 'bivar', 'ir-arsacids'], TIRIDATES),
  ],
  dossier: [
    sec('origins', 'تبار ارشک: سه روایت', 'The origins of Arsaces: three versions',
      [['یوستینوس او را «مردی با تبار نامعلوم اما دلیری بی‌چون‌وچرا» می‌نامد که از راه تاراج زندگی می‌کرد. استرابون او را «سکایی» و سرکردهٔ پرنی‌های داهه می‌داند، اما روایت دیگری هم می‌آورد که او باختری بود. اشکانیان بعدها نسب خود را به اردشیر دوم هخامنشی رساندند (ایرانیکا).', 'سفال‌نوشته‌های نسا نام پدرش را «فریاپیت» و نسب جانشینان را از «برادرزادهٔ ارشک» نشان می‌دهند.'],
       ['Justin calls him “a man of uncertain origin, but of undisputed bravery” who lived by plunder. Strabo calls him “a Scythian” and chief of the Dahae Parni, but also reports that he was a Bactrian. The Arsacids later traced their descent to the Achaemenid Artaxerxes II (Iranica).', 'The Nisa ostraca give his father’s name as Friyapit and trace later kings to “the nephew of Arsaces”.']],
      [['تبار «راهزن» دید دشمنان رومی و یونانی است؛ نسب هخامنشی تبلیغ خود دودمان. هیچ‌کدام سند بی‌طرف نیست.'], ['The “bandit” origin is the view of Roman and Greek enemies; the Achaemenid pedigree is the dynasty’s own propaganda. Neither is neutral evidence.']],
      [['هر قدرت تازه‌ای افسانهٔ بنیان‌گذار می‌سازد. شهروند امروز هم باید روایت رسمی را از سند جدا کند.'], ['Every new power builds a founder’s myth. Today’s citizen, too, has to separate the official story from the record.']],
      ['justin', 'strabo', 'ir-arsacids', 'nisa-ostraca'], {
        quotes: [
          { text: 'One Arsaces, a man of uncertain origin, but of undisputed bravery, happened to arise at this time; and he, who was accustomed to live by plunder and depredations, … invaded Parthia with a band of marauders, overthrew Andragoras the governor, and, after putting him to death, took upon himself the government of the country.', fa: 'در این زمان ارشکی برخاست، مردی با تبار نامعلوم اما دلیری بی‌چون‌وچرا، که به تاراج و دستبرد خو کرده بود؛ … با دسته‌ای از غارتگران به پارت تاخت، آندراگوراس فرماندار را برانداخت و پس از کشتنش، فرمانروایی آن سرزمین را به دست گرفت.', ref: 'Justin 41.4.6–7', source: 'justin' },
        ], photos: ['coin-arsaces1'],
      }),
    sec('legacy', '«ارشک» به‌جای نام شاه', '“Arsaces” as every king’s name',
      [['یوستینوس می‌گوید ارشک نزد پارتیان همان‌قدر یادماندنی بود که کوروش نزد پارسیان و رومولوس نزد رومیان، و از آن پس همهٔ شاهان را «ارشک» خواندند. سکه‌ها این را تأیید می‌کنند: تقریباً همهٔ سکه‌های پارتی نام «ارشک» دارند و نه نام شخصی شاه؛ همین است که انتساب سکه‌ها را چنین دشوار کرده است (سلوود).'],
       ['Justin says Arsaces was as memorable to the Parthians as Cyrus to the Persians or Romulus to the Romans, and that thereafter they called all their kings “Arsaces”. The coins bear this out: almost every Parthian coin carries the name “Arsaces”, not the king’s own name, which is why attributing them is so hard (Sellwood).']],
      [['نام بنیان‌گذار به لقب مقام بدل شد؛ مانند «قیصر» در روم. مشروعیت از تبار می‌آمد، نه از رضایت.'], ['The founder’s name became the title of the office, like “Caesar” at Rome. Legitimacy came from descent, not consent.']],
      [['وقتی قدرت به نام یک خانواده گره بخورد، جانشینی دعوای خانوادگی می‌شود؛ تاریخ پارت پر از این دعواهاست.'], ['When power is tied to a family name, succession becomes a family quarrel; Parthian history is full of them.']],
      ['justin', 'sellwood'], {
        quotes: [{ text: '…no less memorable among the Parthians than Cyrus among the Persians, Alexander among the Macedonians, or Romulus among the Romans, died at a mature old age; and the Parthians paid this honour to his memory, that they called all their kings thenceforward by the name of Arsaces.', fa: '…نزد پارتیان کمتر از کوروش نزد پارسیان، اسکندر نزد مقدونیان یا رومولوس نزد رومیان یادماندنی نبود؛ در پیری پخته درگذشت و پارتیان یادش را چنین گرامی داشتند که از آن پس همهٔ شاهان خود را «ارشک» نامیدند.', ref: 'Justin 41.5.5–6', source: 'justin' }],
      }),
  ],
  synthesis: { title: { fa: 'جمع‌بندی', en: 'Synthesis' }, paras: { fa: ['ارشک یکم را بیشتر از روی کارش می‌شناسیم تا از روی سند: دولتی کوچک در شمال خراسان که سلوکیان نتوانستند پس بگیرند، تقویمی که از ۲۴۷ پ.م. شمرده شد، و نامی که پنج سده بر سکه‌ها ماند. داستان راهزنی و تیرداد و تبار هخامنشی همه روایت‌اند، نه شاهد.'], en: ['We know Arsaces I more by his results than by documents: a small state in northern Khorasan the Seleucids could not recover, an era counted from 247 BCE, and a name that stayed on the coins for five centuries. The bandit story, Tiridates and the Achaemenid pedigree are all narratives, not evidence.'] }, sources: ['justin', 'strabo', 'ir-arsacids'] },
  sources: pick('justin', 'strabo', 'ir-arsacids', 'bivar', 'nisa-ostraca', 'sellwood', 'wolski'),
  photos: photos('coin-arsaces1'),
  related: related(['arsaces-ii', 'ارشک دوم، پسرش', 'Arsaces II, his son'], ['mithridates-i', 'مهرداد یکم', 'Mithridates I']),
  wikipedia: 'https://en.wikipedia.org/wiki/Arsaces_I_of_Parthia',
}

export const arsacesII: FeaturedKing = {
  slug: 'arsaces-ii', name: { fa: 'ارشک دوم', en: 'Arsaces II' }, dynastyName: PAR,
  reign: { fa: 'حدود ۲۱۷–۱۹۱ پ.م.', en: 'c. 217–191 BCE' },
  title: { fa: 'ارشک دوم؛ شکست از آنتیوخوس سوم و پیمانی که پارت را نگه داشت', en: 'Arsaces II: defeat by Antiochus III, and the treaty that saved Parthia' },
  lede: {
    fa: 'پسر و جانشین ارشک یکم. در حدود ۲۰۹ پ.م. آنتیوخوس سوم سلوکی با سپاهی بزرگ به شرق آمد، هکاتوم‌پیلوس را گرفت، پارتیان را در کوه لابوس شکست داد و سیرینکس را در هیرکانی محاصره کرد. ارشک تسلیم نشد اما پیمانی بست که برتری اسمی سلوکیان را می‌پذیرفت و در عمل پادشاهی‌اش را نگه می‌داشت. بیشتر آگاهی ما از پولیبیوس و یوستینوس است.',
    en: 'Son and successor of Arsaces I. Around 209 BCE the Seleucid Antiochus III came east with a large army, took Hecatompylus, beat the Parthians on Mount Labus and besieged Syrinx in Hyrcania. Arsaces did not give in but made a treaty that accepted nominal Seleucid overlordship and in practice kept his kingdom. Most of what we know comes from Polybius and Justin.',
  },
  stats: [{ n: { fa: '۲۶', en: '26' }, l: { fa: 'سال پادشاهی (سنتی)', en: 'years of reign (traditional)' } }, { n: { fa: '۱۰۰٬۰۰۰', en: '100,000' }, l: { fa: 'پیادهٔ آنتیوخوس به گفتهٔ یوستینوس', en: 'Antiochus’ infantry, per Justin' } }],
  mapTitle: { fa: 'نقشه: لشکرکشی آنتیوخوس سوم', en: 'Map: the campaign of Antiochus III' },
  span: [-217, -191],
  events: [
    ev('accession', -217, { fa: 'حدود ۲۱۷ پ.م.', en: 'c. 217 BCE' }, 'admin', NISA, { fa: 'پسر ارشک بر تخت', en: 'Arsaces’ son on the throne' }, { fa: 'پسر ارشک یکم، که او هم ارشک نام داشت، جانشین شد (یوستینوس ۴۱.۵.۷). نام شخصی دیگری برایش نمانده است.', en: 'Arsaces I’s son, also called Arsaces, succeeded (Justin 41.5.7). No other personal name survives for him.' }, 'probable', ['justin', 'ir-arsacids']),
    ev('hecatompylus', -209, { fa: 'حدود ۲۰۹ پ.م.', en: 'c. 209 BCE' }, 'campaign', HECATOMPYLUS, { fa: 'آنتیوخوس در هکاتوم‌پیلوس', en: 'Antiochus at Hecatompylus' }, { fa: 'آنتیوخوس سوم از ماد از راه بیابان گذشت و هکاتوم‌پیلوس، شهر اصلی پارت، را گرفت (پولیبیوس ۱۰.۲۸).', en: 'Antiochus III crossed the desert from Media and took Hecatompylus, the chief city of Parthia (Polybius 10.28).' }, 'probable', ['polybius', 'ir-arsacids'], { route: [ECBATANA, RHAGAE, CASPIAN_GATES, HECATOMPYLUS] }),
    ev('labus', -209, { fa: 'حدود ۲۰۹ پ.م.', en: 'c. 209 BCE' }, 'battle', LABUS, { fa: 'نبرد کوه لابوس و محاصرهٔ سیرینکس', en: 'Mount Labus and the siege of Syrinx' }, { fa: 'سپاه سلوکی از گردنه‌های البرز (کوه لابوس) با جنگ گذشت و شهر سیرینکس در هیرکانی را با محاصره گرفت (پولیبیوس ۱۰.۲۹–۳۱). یوستینوس شمار سپاه آنتیوخوس را صد هزار پیاده و بیست هزار سوار می‌گوید؛ این رقم را ادعای او می‌دانیم.', en: 'The Seleucid army fought its way over the Alborz passes (Mount Labus) and took Syrinx in Hyrcania by siege (Polybius 10.29–31). Justin puts Antiochus’ army at a hundred thousand foot and twenty thousand horse; we treat the figure as his claim.' }, 'probable', ['polybius', 'justin'], { route: [HECATOMPYLUS, LABUS, HYRCANIA] }),
    ev('treaty', -206, { fa: 'حدود ۲۰۹–۲۰۶ پ.م.', en: 'c. 209–206 BCE' }, 'admin', HYRCANIA, { fa: 'پیمان با آنتیوخوس', en: 'Treaty with Antiochus' }, { fa: 'یوستینوس می‌گوید ارشک «سرانجام با او هم‌پیمان شد». ایرانیکا این را برتری اسمی سلوکیان و استقلال عملی پارت می‌داند.', en: 'Justin says Arsaces “was at last taken into alliance with him”. Iranica reads this as nominal Seleucid overlordship with de facto Parthian independence.' }, 'disputed', ['justin', 'ir-arsacids'], note('شرط‌های پیمان نمانده است؛ برخی آن را تابعیت کامل می‌دانند، برخی صرفاً اتحاد.', 'The terms do not survive; some read it as full vassalage, others as a mere alliance.')),
    ev('end', -191, { fa: 'حدود ۱۹۱ پ.م.', en: 'c. 191 BCE' }, 'admin', NISA, { fa: 'پایان پادشاهی', en: 'End of the reign' }, { fa: 'فریاپت، که سفال‌نوشته‌های نسا او را از تبار برادرزادهٔ ارشک یکم می‌دانند، جانشین شد؛ پس ارشک دوم ظاهراً پسری نداشت.', en: 'Phriapatius, whom the Nisa ostraca trace to the nephew of Arsaces I, succeeded; so Arsaces II apparently left no son.' }, 'probable', ['nisa-ostraca', 'ir-arsacids']),
  ],
  dossier: [
    sec('antiochus', 'شکست بی‌تسلیم', 'Defeat without surrender',
      [['پولیبیوس، که نزدیک به رخداد می‌نوشت، راه آنتیوخوس را از هکاتوم‌پیلوس تا کوه لابوس و سیرینکس گام‌به‌گام می‌آورد. سپس آنتیوخوس به جنگ باختر رفت و در پایان پیروز اما بی‌الحاق به غرب بازگشت.'], ['Polybius, writing close to the events, traces Antiochus’ march from Hecatompylus to Mount Labus and Syrinx step by step. Antiochus then went on to fight Bactria and returned west victorious but without annexing either.']],
      [['پادشاهی‌ای که سرزمین را در جنگ می‌بازد اما سازمانش را نگه می‌دارد، دوباره برمی‌خیزد؛ پارت چنین بود.'], ['A kingdom that loses ground in war but keeps its organisation rises again; Parthia did.']],
      [['پیمان، حتی نابرابر، از جنگ بی‌پایان ارزان‌تر است؛ آنچه ماند، توان مردم پارت برای ادامهٔ زندگی و کار در سرزمین خود بود.'], ['A treaty, even an unequal one, is cheaper than endless war; what survived was the ability of Parthia’s people to go on living and working on their own land.']],
      ['polybius', 'justin', 'ir-arsacids'], {
        quotes: [{ text: 'His son and successor on the throne, whose name was also Arsaces, fought with the greatest bravery against Antiochus, the son of Seleucus, who was at the head of a hundred thousand foot and twenty thousand horse, and was at last taken into alliance with him.', fa: 'پسر و جانشینش، که او هم ارشک نام داشت، با آنتیوخوس پسر سلوکوس، که فرمانده صد هزار پیاده و بیست هزار سوار بود، با بیشترین دلیری جنگید و سرانجام با او هم‌پیمان شد.', ref: 'Justin 41.5.7', source: 'justin' }],
        photos: ['coin-arsaces2'],
      }),
  ],
  synthesis: { title: { fa: 'جمع‌بندی', en: 'Synthesis' }, paras: { fa: ['ارشک دوم شاهی است که شکست خورد و باز ماند. پیمان با آنتیوخوس سوم پارت را از نابودی رهاند و سلوکیان، که به زودی درگیر جنگ با روم شدند (۱۹۲–۱۸۸)، دیگر نتوانستند به شرق بپردازند.'], en: ['Arsaces II is a king who was defeated and survived. The treaty with Antiochus III saved Parthia from destruction, and the Seleucids, soon drawn into war with Rome (192–188), could no longer attend to the east.'] }, sources: ['polybius', 'justin', 'ir-arsacids'] },
  sources: pick('justin', 'polybius', 'ir-arsacids', 'nisa-ostraca', 'bivar'),
  photos: photos('coin-arsaces2'),
  related: related(['arsaces-i', 'ارشک یکم، پدرش', 'Arsaces I, his father'], ['phriapatius', 'فریاپت، جانشینش', 'Phriapatius, his successor']),
  wikipedia: 'https://en.wikipedia.org/wiki/Arsaces_II_of_Parthia',
}

export const phriapatius: FeaturedKing = {
  slug: 'phriapatius', name: { fa: 'فریاپت', en: 'Phriapatius' }, dynastyName: PAR,
  reign: { fa: 'حدود ۱۹۱–۱۷۶ پ.م.', en: 'c. 191–176 BCE' },
  title: { fa: 'فریاپت؛ پانزده سال آرام و پدر سه شاه', en: 'Phriapatius: fifteen quiet years, and the father of three kings' },
  lede: {
    fa: 'سومین شاه پارت به گفتهٔ یوستینوس، که پانزده سال پادشاهی کرد. ایرانیکا می‌گوید «دربارهٔ او بسیار کم می‌دانیم». سکه‌هایش عنوان «شاه» و «بزرگ» را به یونانی دارند، که نشان می‌دهد پارت پس از شکست روم از آنتیوخوس سوم (۱۹۰ پ.م.) دوباره آزادانه سکه می‌زد. سه پسرش، فرهاد یکم، مهرداد یکم و اردوان یکم، همه شاه شدند.',
    en: 'The third king of Parthia according to Justin, who reigned fifteen years. Iranica says “very little is known” of him. His coins carry the Greek titles “king” and “great”, a sign that Parthia minted freely again after Rome defeated Antiochus III (190 BCE). Three of his sons, Phraates I, Mithridates I and Artabanus I, all became king.',
  },
  stats: [{ n: { fa: '۱۵', en: '15' }, l: { fa: 'سال پادشاهی (یوستینوس)', en: 'years of reign (Justin)' } }, { n: { fa: '۳', en: '3' }, l: { fa: 'پسر که شاه شدند', en: 'sons who became king' } }],
  mapTitle: { fa: 'نقشه: پارت و هیرکانی', en: 'Map: Parthia and Hyrcania' },
  span: [-191, -176],
  events: [
    ev('accession', -191, { fa: 'حدود ۱۹۱ پ.م.', en: 'c. 191 BCE' }, 'admin', NISA, { fa: 'شاه سوم', en: 'The third king' }, { fa: 'یوستینوس او را «سومین شاه پارتیان» می‌نامد. سفال‌نوشته‌ای از نسا مهرداد دوم را «نوهٔ فریاپت، پسر برادرزادهٔ ارشک» می‌خواند؛ پس فریاپت پسر ارشک دوم نبود.', en: 'Justin calls him “the third king of the Parthians”. A Nisa ostracon calls Mithridates II “grandson of Friyapat, the son of the nephew of Arsaces”; so Phriapatius was not Arsaces II’s son.' }, 'disputed', ['justin', 'nisa-ostraca', 'curtis2019'], note('یوستینوس رابطهٔ او با ارشک دوم را نمی‌گوید؛ برخی او را پسر ارشک دوم دانسته‌اند و بازسازی‌های قدیمی‌تر او را نوهٔ «تیرداد» کرده‌اند. سفال‌نوشتهٔ نسا هر دو را رد می‌کند.', 'Justin does not say how he related to Arsaces II; some made him Arsaces II’s son, and older reconstructions a grandson of “Tiridates”. The Nisa ostracon rules out both.')),
    ev('coins', -185, { fa: 'دههٔ ۱۸۰ پ.م.', en: '180s BCE' }, 'admin', HECATOMPYLUS, { fa: '«شاه بزرگ» بر سکه', en: '“Great King” on the coins' }, { fa: 'بر درهم‌های منسوب به او عنوان یونانی BASILEŌS (شاه) پیوسته و MEGALOU (بزرگ) برای نخستین بار دیده می‌شود. روی سکه همان کلاه نرم و کماندار نشسته است.', en: 'Drachms attributed to him carry the Greek title BASILEŌS (king) regularly and MEGALOU (great) for the first time. The design is the same soft cap and seated archer.' }, 'disputed', ['sellwood', 'curtis2019'], note('سکه‌ها فقط «ارشک» نام دارند؛ انتساب این گونه‌ها به فریاپت بر پایهٔ ترتیب سبک است، نه نام.', 'The coins name only “Arsaces”; assigning these types to Phriapatius rests on stylistic sequence, not a name.')),
    ev('death', -176, { fa: 'حدود ۱۷۶ پ.م.', en: 'c. 176 BCE' }, 'admin', NISA, { fa: 'مرگ؛ پسرانش', en: 'Death; his sons' }, { fa: 'یوستینوس می‌گوید پس از پانزده سال درگذشت و دو پسر، فرهاد و مهرداد، از او ماند. اما اردوان یکم را هم پسر او می‌دانند.', en: 'Justin says he died after fifteen years leaving two sons, Phraates and Mithridates. But Artabanus I is also taken to be his son.' }, 'disputed', ['justin', 'ir-arsacids'], note('یوستینوس فقط دو پسر نام می‌برد؛ اینکه اردوان یکم «عموی» فرهاد دوم بود (یوستینوس ۴۲.۲) یعنی او هم پسر فریاپت بود.', 'Justin names only two sons; his statement that Artabanus I was the “uncle” of Phraates II (Justin 42.2) implies he too was a son of Phriapatius.')),
  ],
  dossier: [
    sec('quiet', 'سال‌های بازسازی', 'Years of rebuilding',
      [['ایرانیکا فریاپت و فرهاد یکم را با هم می‌آورد: «بسیار کم می‌دانیم»، جز اینکه پارتیان قدرت خود را بر کرانهٔ خزر استوار کردند. سکه‌ها و عنوان تازهٔ «بزرگ» تنها شاهد بومی است.'], ['Iranica treats Phriapatius and Phraates I together: “very little is known”, except that the Parthians consolidated their hold on the Caspian shore. The coins and the new title “great” are the only native evidence.']],
      [['سکهٔ آزاد نشانهٔ حاکمیت است: وقتی شاه دوباره به نام خود سکه می‌زند، یعنی دیگر به کسی خراج نمی‌دهد.'], ['Free coinage is a mark of sovereignty: when a king mints in his own name again, he no longer pays anyone tribute.']],
      [['پول قابل‌اعتماد زیربنای بازار است؛ سکه‌های نقرهٔ پارتی وزن یونانی را نگه داشتند و با بازارهای پیرامون سازگار ماندند.'], ['Trustworthy money underpins a market; Parthian silver kept the Greek weight standard and stayed compatible with neighbouring markets.']],
      ['ir-arsacids', 'sellwood'], { photos: ['coin-phriapatius'], quotes: [{ text: 'The third king of the Parthians was Priapatius; but he was also called Arsaces…', fa: 'سومین شاه پارتیان فریاپت بود؛ اما او را هم ارشک می‌خواندند…', ref: 'Justin 41.5.8', source: 'justin' }] }),
  ],
  synthesis: { title: { fa: 'جمع‌بندی', en: 'Synthesis' }, paras: { fa: ['فریاپت شاهی است که بیشتر از راه پسرانش شناخته می‌شود. دوران او، میان شکست ۲۰۹ و جهش بزرگ زیر مهرداد یکم، دوران آرام بازسازی و بازگشت سکهٔ آزاد بود.'], en: ['Phriapatius is known mostly through his sons. His reign, between the defeat of 209 and the great leap under Mithridates I, was a quiet time of rebuilding and the return of free coinage.'] }, sources: ['justin', 'ir-arsacids', 'sellwood'] },
  sources: pick('justin', 'ir-arsacids', 'nisa-ostraca', 'curtis2019', 'sellwood'),
  photos: photos('coin-phriapatius'),
  related: related(['arsaces-ii', 'ارشک دوم', 'Arsaces II'], ['phraates-i', 'فرهاد یکم، پسرش', 'Phraates I, his son'], ['mithridates-i', 'مهرداد یکم، پسرش', 'Mithridates I, his son'], ['artabanus-i', 'اردوان یکم، پسرش', 'Artabanus I, his son']),
  wikipedia: 'https://en.wikipedia.org/wiki/Priapatius',
}

export const phraatesI: FeaturedKing = {
  slug: 'phraates-i', name: { fa: 'فرهاد یکم', en: 'Phraates I' }, dynastyName: PAR,
  reign: { fa: 'حدود ۱۷۶–۱۷۱ پ.م. (به تاریخ آسار حدود ۱۶۸–۱۶۵)', en: 'c. 176–171 BCE (c. 168–165 on Assar’s dating)' },
  title: { fa: 'فرهاد یکم؛ گشایش راه ماد و شاهی که برادر را بر پسران برگزید', en: 'Phraates I: opening the road to Media, and the king who chose his brother over his sons' },
  lede: {
    fa: 'پسر بزرگ فریاپت. مردهای (آمردهای) نیرومند کوه‌های البرز را شکست داد و راه دروازه‌های خزر به سوی ماد را گشود. به گفتهٔ یوستینوس، پسرانش را کنار گذاشت و تخت را به برادرش مهرداد سپرد، «زیرا بیش از نام پدر، نام شاه را بر خود واجب می‌دانست». این انتخاب، پارت را به امپراتوری رساند.',
    en: 'The eldest son of Phriapatius. He defeated the strong Mardi (Amardi) of the Alborz and opened the road through the Caspian Gates towards Media. According to Justin he set aside his sons and left the throne to his brother Mithridates, “thinking that more was due to the name of king than to that of father”. That choice made Parthia an empire.',
  },
  stats: [{ n: { fa: '~۵', en: '~5' }, l: { fa: 'سال پادشاهی', en: 'years of reign' } }, { n: { fa: '۱', en: '1' }, l: { fa: 'برادر جانشین، نه پسر', en: 'brother as heir, not a son' } }],
  mapTitle: { fa: 'نقشه: مردها و دروازه‌های خزر', en: 'Map: the Mardi and the Caspian Gates' },
  span: [-176, -171],
  events: [
    ev('accession', -176, { fa: 'حدود ۱۷۶ پ.م.', en: 'c. 176 BCE' }, 'admin', NISA, { fa: 'پسر بزرگ بر تخت', en: 'The eldest son on the throne' }, { fa: 'فرهاد، پسر بزرگ‌تر، «به رسم آن قوم» وارث شد (یوستینوس ۴۱.۵.۹).', en: 'Phraates, the elder son, was heir “according to the custom of the nation” (Justin 41.5.9).' }, 'disputed', ['justin', 'assar'], ASSAR('سنت ۱۷۶–۱۷۱ پ.م. را می‌گذارد؛ آسار (۲۰۰۶) و اولبریشت حدود ۱۶۸–۱۶۵. یک سفال‌نوشتهٔ نسا را هم به وجود «ارشک چهارم» کوتاه‌مدت پیش از او تعبیر کرده‌اند؛ اولبریشت آن را «گمانی محض» می‌داند.', 'tradition gives 176–171 BCE; Assar (2006) and Olbrycht c. 168–165. A Nisa ostracon has also been read as evidence of a short-lived “Arsaces IV” before him; Olbrycht calls that “sheer speculation”.')),
    ev('mardi', -173, { fa: 'میانهٔ پادشاهی', en: 'mid-reign' }, 'campaign', MARDI, { fa: 'گشودن سرزمین مردها', en: 'The Mardi subdued' }, { fa: 'یوستینوس می‌گوید فرهاد «مردها، قومی نیرومند، را به زور سلاح رام کرد». مردها در البرز، میان هیرکانی و ماد، می‌زیستند و راه بازرگانی را تهدید می‌کردند.', en: 'Justin says Phraates “subdued the Mardi, a strong people, by force of arms”. The Mardi lived in the Alborz between Hyrcania and Media and threatened the trade route.' }, 'probable', ['justin', 'ir-arsacids'], { route: [HECATOMPYLUS, MARDI] }),
    ev('charax', -172, { fa: 'پس از جنگ با مردها', en: 'after the Mardian war' }, 'admin', CASPIAN_GATES, { fa: 'مردها در خاراکس', en: 'Mardi settled at Charax' }, { fa: 'ایزیدور خاراکسی (ایستگاه‌های پارتی، ۷) از شهری به نام خاراکس نزدیک دروازه‌های خزر یاد می‌کند که شاه فرهاد مردها را در آن جای داد؛ یعنی کوچاندن مردم برای نگهبانی از گذرگاه.', en: 'Isidore of Charax (Parthian Stations 7) mentions a town called Charax near the Caspian Gates where King Phraates settled the Mardi: people moved to guard the pass.' }, 'disputed', ['isidore'], note('ایزیدور نمی‌گوید کدام فرهاد؛ بیشتر پژوهشگران فرهاد یکم را می‌دانند.', 'Isidore does not say which Phraates; most scholars take it to be Phraates I.')),
    ev('heir', -171, { fa: 'حدود ۱۷۱ پ.م.', en: 'c. 171 BCE' }, 'admin', NISA, { fa: 'برادر به‌جای پسر', en: 'A brother instead of a son' }, { fa: 'فرهاد «پس از اندکی» درگذشت و با کنار گذاشتن چند پسرش، تخت را به برادرش مهرداد سپرد (یوستینوس ۴۱.۵.۹–۱۰).', en: 'Phraates died “not long after” and, setting aside several sons, left the throne to his brother Mithridates (Justin 41.5.9–10).' }, 'probable', ['justin', 'olbrycht2010']),
  ],
  dossier: [
    sec('choice', 'نام شاه یا نام پدر', 'The name of king or the name of father',
      [['یوستینوس انتخاب فرهاد را ستایش می‌کند. اولبریشت می‌گوید شاید خود فریاپت این ترتیب را گذاشته بود و فرهاد آن را نگه داشت؛ جانشینی برادر به‌جای پسر میان کوچ‌نشینان آسیای میانه رایج بود.'], ['Justin praises Phraates’ choice. Olbrycht suggests the arrangement may have been made by Phriapatius himself and only kept by Phraates; succession by a brother rather than a son was common among Central Asian nomads.']],
      [['یوستینوس انگیزهٔ اخلاقی می‌بیند؛ پژوهش امروز رسم قبیله‌ای را. هر دو ممکن است.'], ['Justin sees a moral motive; modern research sees tribal custom. Both are possible.']],
      [['حکمرانی که مصلحت کشور را بر خانواده برتر بداند کمیاب است؛ اما نهادی که جانشین را بر پایهٔ شایستگی برگزیند، از نیکی یک شاه پایدارتر است.'], ['A ruler who puts the country before his family is rare; but an institution that chooses a successor on merit lasts longer than one king’s virtue.']],
      ['justin', 'olbrycht2010'], {
        quotes: [{ text: '…the elder, Phraates, being, according to the custom of the nation, heir to the crown, subdued the Mardi, a strong people, by force of arms, and died not long after, leaving several sons, whom he set aside, and left the throne, in preference, to his brother Mithridates, a man of extraordinary ability, thinking that more was due to the name of king than to that of father, and that he ought to consult the interests of his country rather than those of his children.', fa: '…فرهادِ بزرگ‌تر، که به رسم آن قوم وارث تاج بود، مردها را، که قومی نیرومند بودند، به زور سلاح رام کرد و پس از اندکی درگذشت. چند پسر داشت، اما آنان را کنار گذاشت و تخت را به برادرش مهرداد، مردی با توانایی شگفت، سپرد؛ زیرا بیش از نام پدر، نام شاه را بر خود واجب می‌دانست و مصلحت کشور را بر مصلحت فرزندانش برتر می‌شمرد.', ref: 'Justin 41.5.9–10', source: 'justin' }],
        photos: ['coin-phraates1'],
      }),
  ],
  synthesis: { title: { fa: 'جمع‌بندی', en: 'Synthesis' }, paras: { fa: ['پادشاهی کوتاه فرهاد یکم دو کار ماندگار داشت: راه البرز به سوی ماد را باز کرد و جانشینی را به برادری سپرد که امپراتوری ساخت. تاریخ‌های او میان سنت و آسار چند سال جابه‌جاست.'], en: ['Phraates I’s short reign did two lasting things: it opened the Alborz road to Media and handed the succession to the brother who built an empire. His dates shift by several years between tradition and Assar.'] }, sources: ['justin', 'assar', 'ir-arsacids'] },
  sources: pick('justin', 'isidore', 'ir-arsacids', 'assar', 'olbrycht2010', 'nisa-ostraca'),
  photos: photos('coin-phraates1'),
  related: related(['phriapatius', 'فریاپت، پدرش', 'Phriapatius, his father'], ['mithridates-i', 'مهرداد یکم، برادر و جانشینش', 'Mithridates I, his brother and heir']),
  wikipedia: 'https://en.wikipedia.org/wiki/Phraates_I',
}

export const phraatesII: FeaturedKing = {
  slug: 'phraates-ii', name: { fa: 'فرهاد دوم', en: 'Phraates II' }, dynastyName: PAR,
  reign: { fa: 'حدود ۱۳۲–۱۲۷ پ.م. (ایرانیکا: ۱۳۹/۱۳۸–۱۲۸)', en: 'c. 132–127 BCE (Iranica: 139/8–128)' },
  title: { fa: 'فرهاد دوم؛ پیروزی بر آنتیوخوس هفتم و مرگ در جنگ با سکاها', en: 'Phraates II: victory over Antiochus VII, death fighting the Saka' },
  lede: {
    fa: 'پسر مهرداد یکم که کودک به تخت رسید. آنتیوخوس هفتم سلوکی در ۱۳۰ پ.م. بابل و ماد را پس گرفت، اما زمستان در خانهٔ مردم ماندن سپاهش، شهرها را بر او شوراند و در بهار ۱۲۹ شکست خورد و کشته شد. پایان فرمانروایی سلوکی در شرق فرات همین‌جا بود. فرهاد سپس به شرق شتافت و در جنگ با سکاهایی که خود اجیر کرده بود و مزدشان را نداده بود، به دست اسیران یونانیِ سپاه خودش کشته شد.',
    en: 'The son of Mithridates I, who came to the throne as a child. In 130 BCE the Seleucid Antiochus VII retook Babylonia and Media, but his army’s winter quartering on the population turned the towns against him and in spring 129 he was defeated and killed. That ended Seleucid rule east of the Euphrates. Phraates then hurried east and, fighting the Scythians he had hired and then refused to pay, was killed when the Greek prisoners in his own army deserted.',
  },
  stats: [{ n: { fa: '۱۲۹', en: '129' }, l: { fa: 'پایان سلوکیان در شرق فرات (پ.م.)', en: 'end of the Seleucids east of the Euphrates (BCE)' } }, { n: { fa: '۳', en: '3' }, l: { fa: 'نبرد آنتیوخوس در ۱۳۰', en: 'battles Antiochus won in 130' } }],
  mapTitle: { fa: 'نقشه: آنتیوخوس هفتم و سکاها', en: 'Map: Antiochus VII and the Saka' },
  span: [-132, -127],
  events: [
    ev('accession', -132, { fa: 'حدود ۱۳۲ پ.م.', en: 'c. 132 BCE' }, 'admin', SELEUCIA, { fa: 'شاه نوجوان و مادرش', en: 'The boy king and his mother' }, { fa: 'فرهاد دوم نوجوان بود و اسناد بابلی برای چند ماه نام مادرش، رینو، را کنار نام او می‌آورند.', en: 'Phraates II was a youth, and for some months Babylonian documents name his mother, Rinnu, beside him.' }, 'disputed', ['diaries', 'assar', 'ir-arsacids'], ASSAR('ایرانیکا مرگ مهرداد یکم و آغاز فرهاد را ۱۳۹/۱۳۸ می‌گذارد؛ آسار بر پایهٔ لوح‌های بابلی ۱۳۲.', 'Iranica puts Mithridates I’s death and Phraates’ accession at 139/8; Assar, from the Babylonian tablets, at 132.')),
    ev('antiochus', -130, { fa: '۱۳۰ پ.م.', en: '130 BCE' }, 'campaign', BABYLON, { fa: 'آنتیوخوس هفتم بابل و ماد را می‌گیرد', en: 'Antiochus VII takes Babylonia and Media' }, { fa: 'آنتیوخوس هفتم سیدتس، برادر دمتریوس دوم که اسیر پارتیان بود، با سه پیروزی بابل را پس گرفت و تا ماد پیش رفت (ایرانیکا). زمستان را در میان مردم ماند.', en: 'Antiochus VII Sidetes, brother of the captive Demetrius II, retook Babylonia after three victories and advanced into Media (Iranica). He wintered among the population.' }, 'secure', ['ir-arsacids', 'justin'], { route: [[38.2, 35.9], BABYLON, SELEUCIA, ECBATANA] }),
    ev('victory', -129, { fa: 'بهار ۱۲۹ پ.م.', en: 'spring 129 BCE' }, 'battle', ECBATANA, { fa: 'شکست و مرگ آنتیوخوس', en: 'Antiochus defeated and killed' }, { fa: 'شهرهای پادگان‌دار بر سپاه سلوکی که خرج خود را از مردم می‌گرفت شوریدند؛ فرهاد حمله کرد و آنتیوخوس شکست خورد و کشته شد (یوستینوس ۳۸.۱۰؛ ایرانیکا). جای دقیق نبرد، احتمالاً در ماد، دانسته نیست.', en: 'The garrison towns rose against a Seleucid army that lived off the people; Phraates attacked and Antiochus was defeated and killed (Justin 38.10; Iranica). The exact site, probably in Media, is unknown.' }, 'probable', ['justin', 'ir-arsacids']),
    ev('himerus', -128, { fa: 'حدود ۱۲۸ پ.م.', en: 'c. 128 BCE' }, 'admin', BABYLON, { fa: 'هیمروس در بابل', en: 'Himerus in Babylon' }, { fa: 'فرهاد مردی به نام هیمروس را بر بابل گماشت که به گفتهٔ یوستینوس مردم بابل را «با ستم‌های جبارانه» آزرد.', en: 'Phraates left one Himerus over Babylonia who, Justin says, “miserably harassed the people of Babylon… with tyrannical cruelties”.' }, 'probable', ['justin', 'diaries']),
    ev('death', -127, { fa: 'حدود ۱۲۷ پ.م.', en: 'c. 127 BCE' }, 'battle', MERV, { fa: 'مرگ در جنگ با سکاها', en: 'Killed fighting the Scythians' }, { fa: 'سکاهایی که برای جنگ با آنتیوخوس اجیر شده بودند دیر رسیدند و مزد نگرفتند و پارت را تاراج کردند. فرهاد به جنگشان رفت؛ اسیران یونانی که در سپاهش بودند به دشمن پیوستند و او کشته شد (یوستینوس ۴۲.۱).', en: 'The Scythians hired against Antiochus arrived late, were refused pay and ravaged Parthia. Phraates marched against them; the Greek prisoners in his army deserted and he was killed (Justin 42.1).' }, 'disputed', ['justin', 'ir-arsacids'], note('جای نبرد دانسته نیست؛ نقطه روی نقشه نمادین است. ایرانیکا همین دوره را زمان هجوم یوئه‌جی، سکا و ماساگت می‌داند.', 'The site of the battle is unknown; the map point is symbolic. Iranica dates the Yuezhi, Saka and Massagetae incursions to this period.')),
  ],
  dossier: [
    sec('quarters', 'سپاهی که از خانهٔ مردم خورد', 'An army that lived off people’s homes',
      [['آنتیوخوس با پیروزی آمد، اما سپاهش را برای زمستان در شهرها پخش کرد و خرجش را از مردم گرفت. همین شهرها شوریدند و فرهاد را یاری کردند. در ۱۲۹ پ.م. فرمانروایی سلوکی در شرق فرات برای همیشه پایان یافت.'], ['Antiochus came victorious, but spread his army through the towns for the winter and made the people pay for it. Those towns rose and helped Phraates. In 129 BCE Seleucid rule east of the Euphrates ended for good.']],
      [['ارتش آزادی‌بخش که خانهٔ مردم را اشغال کند، دیگر آزادی‌بخش نیست؛ مالکیت پایمال‌شده وفاداری را از بین می‌برد.'], ['A liberating army that occupies people’s homes is a liberator no longer; trampled property destroys loyalty.']],
      [['منع اسکان اجباری سرباز در خانهٔ شهروندان در قانون‌های اساسی امروزی (مانند متمم سوم آمریکا) از همین تجربه‌های کهن می‌آید.'], ['Modern constitutional bans on quartering soldiers in citizens’ homes (such as the US Third Amendment) draw on experiences as old as this.']],
      ['ir-arsacids', 'justin'], { photos: ['coin-phraates2'] }),
    sec('mercenaries', 'مزد نپرداخته', 'The unpaid wage',
      [['به گفتهٔ یوستینوس، سکاها را برای جنگ آنتیوخوس اجیر کرده بودند؛ دیر رسیدند و فرهاد مزدشان را نداد. آنها پارت را غارت کردند و فرهاد در جنگ با آنها کشته شد. اسیران یونانی سپاه آنتیوخوس، که فرهاد به خدمت گرفته و بد رفتار کرده بود، به دشمن پیوستند.'], ['According to Justin, the Scythians had been hired for the war with Antiochus; they arrived late and Phraates refused their pay. They plundered Parthia and Phraates died fighting them. The Greek prisoners from Antiochus’ army, whom Phraates had enlisted and ill-treated, went over to the enemy.']],
      [['یوستینوس اخلاقی می‌نویسد، اما منطق داستان روشن است: قرارداد شکسته، دشمن تازه می‌سازد.'], ['Justin writes as a moralist, but the logic of the story is plain: a broken contract creates a new enemy.']],
      [['پایبندی به قرارداد، حتی با بیگانه، از پیروزی در میدان مهم‌تر است.'], ['Keeping a contract, even with outsiders, matters more than winning in the field.']],
      ['justin']),
  ],
  synthesis: { title: { fa: 'جمع‌بندی', en: 'Synthesis' }, paras: { fa: ['فرهاد دوم آخرین تلاش سلوکیان برای پس‌گرفتن شرق را شکست داد، اما بلافاصله با موج بزرگ کوچ‌نشینان در مرز شرقی روبه‌رو شد. پیروزی غرب و شکست شرق، الگویی بود که تا مهرداد دوم ادامه یافت.'], en: ['Phraates II defeated the last Seleucid attempt to recover the east, but at once faced the great wave of nomads on the eastern frontier. Victory in the west, defeat in the east: the pattern lasted until Mithridates II.'] }, sources: ['ir-arsacids', 'justin'] },
  sources: pick('justin', 'diaries', 'ir-arsacids', 'assar', 'bivar'),
  photos: photos('coin-phraates2'),
  related: related(['mithridates-i', 'مهرداد یکم، پدرش', 'Mithridates I, his father'], ['artabanus-i', 'اردوان یکم، عمویش', 'Artabanus I, his uncle']),
  wikipedia: 'https://en.wikipedia.org/wiki/Phraates_II',
}

export const artabanusI: FeaturedKing = {
  slug: 'artabanus-i', name: { fa: 'اردوان یکم', en: 'Artabanus I' }, dynastyName: PAR,
  reign: { fa: 'حدود ۱۲۷–۱۲۴/۱۲۳ پ.م.', en: 'c. 127–124/123 BCE' },
  title: { fa: 'اردوان یکم؛ زخمی بر بازو در جنگ با تخاری‌ها', en: 'Artabanus I: a wound in the arm fighting the Tocharians' },
  lede: {
    fa: 'عموی فرهاد دوم و پسر فریاپت، که پیر به تخت رسید. دوران کوتاهش سخت‌ترین سال‌های پارت بود: در شرق کوچ‌نشینان (یوئه‌جی و سکاها) فشار می‌آوردند و در جنوب هیسپائوسینس، شاه خاراکنه، بابل را گرفت. اردوان در شرق ماند و به گفتهٔ یوستینوس در جنگ با تخاری‌ها زخمی بر بازو برداشت و «بی‌درنگ» مرد. در کتاب‌های قدیمی‌تر او را «اردوان دوم» می‌نامند.',
    en: 'Uncle of Phraates II and a son of Phriapatius, who came to the throne old. His short reign was Parthia’s hardest years: in the east the nomads (Yuezhi and Saka) pressed, and in the south Hyspaosines of Characene took Babylon. Artabanus stayed in the east and, Justin says, took a wound in the arm fighting the Tocharians and “immediately died”. Older books call him “Artabanus II”.',
  },
  stats: [{ n: { fa: '~۳', en: '~3' }, l: { fa: 'سال پادشاهی', en: 'years of reign' } }, { n: { fa: '۲', en: '2' }, l: { fa: 'شاه پیاپی کشته در جنگ شرق', en: 'kings in a row killed in the east' } }],
  mapTitle: { fa: 'نقشه: دو جبهه', en: 'Map: two fronts' },
  span: [-127, -124],
  events: [
    ev('accession', -127, { fa: 'حدود ۱۲۷ پ.م.', en: 'c. 127 BCE' }, 'admin', HECATOMPYLUS, { fa: 'عموی شاه بر تخت', en: 'The king’s uncle on the throne' }, { fa: '«به‌جای او اردوان، عمویش، شاه شد» (یوستینوس ۴۲.۲.۱). چون پدرش فریاپت در ۱۷۶ مرده بود، اردوان باید پیر بوده باشد.', en: '“In his stead Artabanus, his uncle, was made king” (Justin 42.2.1). Since his father Phriapatius died in 176, Artabanus must have been old.' }, 'disputed', ['justin', 'ir-arsacids'], note('شماره‌گذاری محل بحث است: کتاب‌های قدیمی او را «اردوان دوم» می‌نامند، چون اردوانی دیگر را با ارشک دوم یکی می‌گرفتند. امروز او را اردوان یکم می‌شمارند و اردوانِ ۱۲–۳۸ میلادی «اردوان دوم» است (در شماره‌گذاری قدیم «سوم»).', 'The numbering is disputed: older books call him “Artabanus II”, because another Artabanus was identified with Arsaces II. He is now counted Artabanus I, and the Artabanus of 12–38 CE is “Artabanus II” (“III” in the old count).')),
    ev('hyspaosines', -127, { fa: 'حدود ۱۲۷ پ.م.', en: 'c. 127 BCE' }, 'campaign', CHARAX, { fa: 'هیسپائوسینس بابل را می‌گیرد', en: 'Hyspaosines takes Babylon' }, { fa: 'هیسپائوسینس، فرمانروای خاراکنه در سر خلیج فارس، از گرفتاری پارت در شرق بهره برد و تا بابل پیش آمد (ایرانیکا؛ گزارش‌های نجومی بابل).', en: 'Hyspaosines, ruler of Characene at the head of the Persian Gulf, took advantage of Parthia’s troubles in the east and reached Babylon (Iranica; the Babylonian astronomical diaries).' }, 'probable', ['ir-arsacids', 'diaries'], { route: [CHARAX, BABYLON] }),
    ev('death', -124, { fa: '۱۲۴/۱۲۳ پ.م.', en: '124/123 BCE' }, 'battle', YUEZHI, { fa: 'زخم بازو و مرگ', en: 'The wound and death' }, { fa: '«اردوان در جنگ با تخاری‌ها زخمی بر بازو برداشت و بی‌درنگ از آن مرد» (یوستینوس ۴۲.۲.۲). تخاری‌ها را معمولاً همان یوئه‌جیِ منابع چینی می‌دانند.', en: '“Artabanus, making war upon the Tocharii, received a wound in the arm, of which he immediately died” (Justin 42.2.2). The Tocharii are usually identified with the Yuezhi of the Chinese sources.' }, 'disputed', ['justin', 'ir-arsacids'], note('جای نبرد دانسته نیست و یکی گرفتن تخاری و یوئه‌جی پیشنهاد پژوهشگران است.', 'The site is unknown, and identifying the Tocharii with the Yuezhi is a scholarly proposal.')),
  ],
  dossier: [
    sec('fronts', 'کشوری میان دو آتش', 'A kingdom between two fires',
      [['ایرانیکا می‌گوید هم فرهاد دوم و هم اردوان یکم در جنگ با کوچ‌نشینان کشته شدند. سکه‌های اردوان، برخلاف پیشینیان، او را با شلوار و جامهٔ پارتی و ریش بلند نشان می‌دهند، با عنوان «فیلهلن» (دوستدار یونانیان).'], ['Iranica notes that both Phraates II and Artabanus I died fighting the nomads. Unlike his predecessors’ coins, Artabanus’ show him in Parthian trousered dress with a long beard, with the title “Philhellene” (friend of the Greeks).']],
      [['انتخاب جبههٔ شرق نشان می‌دهد کوچ‌نشینان را خطرناک‌تر از شاهک‌های جنوب می‌دانستند؛ درست هم بود، چون موج یوئه‌جی کل باختر یونانی را برچیده بود.'], ['Choosing the eastern front shows the nomads were thought more dangerous than the southern princes; rightly, for the Yuezhi wave had swept away all of Greek Bactria.']],
      [['امنیت مرز شرط نخست امنیت مالکیت است؛ کشاورزی که هر سال تاراج شود، سرمایه‌گذاری نمی‌کند.'], ['Border security is the first condition of secure property; a farmer plundered every year does not invest.']],
      ['ir-arsacids', 'sellwood'], { photos: ['coin-artabanus1'], quotes: [{ text: 'Artabanus, making war upon the Tocharii, received a wound in the arm, of which he immediately died.', fa: 'اردوان در جنگ با تخاری‌ها زخمی بر بازو برداشت و بی‌درنگ از آن درگذشت.', ref: 'Justin 42.2.2', source: 'justin' }] }),
  ],
  synthesis: { title: { fa: 'جمع‌بندی', en: 'Synthesis' }, paras: { fa: ['اردوان یکم در ژرف‌ترین بحران پارت پادشاهی کرد و در آن مرد. اما جانشینش مهرداد دوم، که یوستینوس پسرش می‌خواند، از همین ویرانه بزرگ‌ترین پادشاهی پارتی تا آن روز را ساخت.'], en: ['Artabanus I reigned in Parthia’s deepest crisis and died in it. But his successor Mithridates II, whom Justin calls his son, built from that wreck the greatest Parthian kingdom yet.'] }, sources: ['justin', 'ir-arsacids'] },
  sources: pick('justin', 'diaries', 'ir-arsacids', 'sellwood'),
  photos: photos('coin-artabanus1'),
  related: related(['phraates-ii', 'فرهاد دوم، برادرزاده‌اش', 'Phraates II, his nephew'], ['mithridates-ii', 'مهرداد دوم، جانشینش', 'Mithridates II, his successor']),
  wikipedia: 'https://en.wikipedia.org/wiki/Artabanus_I_of_Parthia',
}
