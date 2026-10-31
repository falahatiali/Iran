/**
 * Pacorus II (c. 78–110; his rival brother Artabanus III, c. 79–81, inside), Osroes I (c. 109–129)
 * and Vologases III (c. 110–147; Vologases II of the older numbering inside).
 * No continuous ancient narrative survives for these years: the record is coins, Iranica (Schippmann “Arsacids ii”,
 * “Artabanus iii”), Roman notices of Trajan’s war as summarized by Iranica, and the Hou Hanshu (paraphrased).
 * Reign dates rest on coin attributions and are disputed throughout.
 */
import type { Bi, FeaturedKing } from '../featured/types'
import { ALANS, ARTAXATA, CTESIPHON, HATRA, PAR, SELEUCIA, SPASINOU, ev, note, photos, pick, related, sec } from './common'

const B = (fa: string, en: string): Bi => ({ fa, en })

const LE_RIDER = note('لو ریدر سکه‌های سال‌های ۷۷/۷۸، ۸۹/۹۰ و ۱۰۶–۱۰۸ را به شاهی جداگانه داد و او را «بلاش دوم» نامید؛ پس «بلاش دوم» قدیم «بلاش سوم» شد. ایرانیکا این را گزارش می‌کند و همهٔ این تاریخ‌ها محل بحث‌اند.', 'Le Rider gave the coins of 77/78, 89/90 and 106–108 to a separate king he called “Vologases II”, so the old “Vologases II” became “Vologases III”. Iranica reports this, and all these dates are disputed.')

export const pacorusII: FeaturedKing = {
  slug: 'pacorus-ii', name: B('پاکر دوم', 'Pacorus II'), dynastyName: PAR,
  reign: B('حدود ۷۸–۱۱۰ م.', 'c. 78–110 CE'),
  title: B('پاکر دوم؛ سی سال پادشاهی در سایهٔ مدعیان', 'Pacorus II: thirty years on a shared throne'),
  lede: B(
    'پسر بلاش یکم. نزدیک به سی سال شاه بود، اما بیشتر این سال‌ها مدعیانی در کنارش سکه می‌زدند: نخست برادرش اردوان (سوم) و بعدها بلاش (دوم) و خسرو. از روزگار او تقریباً هیچ روایت پیوسته‌ای نمانده و تاریخ‌ها از سکه‌ها بازسازی شده‌اند. تاریخ رسمی هان پسین از سفیری چینی می‌گوید که در ۹۷ م. به مرزهای پارت رسید و از هدیه‌ای که پارت در ۱۰۱ م. به دربار هان فرستاد.',
    'A son of Vologases I. He was king for nearly thirty years, but for much of that time rivals struck coins beside him: first his brother Artabanus (III), later Vologases (II) and Osroes. Almost no continuous account of his reign survives and the dates are rebuilt from coins. The official history of the Later Han tells of a Chinese envoy who reached the edge of Parthia in 97 CE and of a gift Parthia sent to the Han court in 101 CE.'),
  stats: [{ n: B('~۳۲', '~32'), l: B('سال پادشاهی (با وقفه‌ها)', 'years of reign (with gaps)') }, { n: B('۳', '3'), l: B('مدعی هم‌زمان', 'rival claimants') }, { n: B('۹۷', '97'), l: B('سفر گان یینگ (م.)', 'Gan Ying’s journey (CE)') }],
  mapTitle: B('نقشه: بابل، میشان و راه‌های بازرگانی', 'Map: Babylonia, Characene and the trade routes'),
  span: [78, 110],
  events: [
    ev('accession', 78, B('حدود ۷۸ م.', 'c. 78 CE'), 'admin', CTESIPHON, B('بر تخت', 'Accession'), B('پاکر پس از پدرش بلاش یکم به تخت رسید. ایرانیکا: «تاریخ پارت در چند دههٔ پس از آن را دشوار می‌توان بازسازی کرد».', 'Pacorus succeeded his father Vologases I. Iranica: “Parthian history in the next few decades is difficult to reconstruct.”'), 'probable', ['ir-arsacids', 'sellwood'], LE_RIDER),
    ev('artabanus3', 80, B('۷۹–۸۱ م.', '79–81 CE'), 'admin', SELEUCIA, B('برادرش اردوان (سوم) مدعی می‌شود', 'His brother Artabanus (III) claims the throne'), B('ایرانیکا: اردوان، پسر دیگر بلاش یکم، در ۷۹–۸۱ م. با پاکر بر سر قدرت کشمکش کرد، اما جز در بابل پشتیبان چندانی نیافت. نامدارترین کارش پیشنهاد کمک به «نرون دروغین»، شهروندی رومی به نام ترنتیوس ماکسیموس، بود. سکه‌ای از او پس از ۸۱ م. نیست، پس احتمالاً پاکر در آن هنگام پیروز شد.', 'Iranica: Artabanus, another son of Vologases I, contended with Pacorus in 79–81 CE but found little support outside Babylonia. His best-known act was offering help to a “false Nero”, a Roman citizen named Terentius Maximus. There are no coins of his after 81 CE, so Pacorus presumably won then.'), 'probable', ['ir-artabanus3', 'sellwood'], note('لو ریدر ۷۹–۸۱ و سلوود ۸۰–۸۱ را می‌آورند.', 'Le Rider gives 79–81, Sellwood 80–81.')),
    ev('ganying', 97, B('۹۷ م.', '97 CE'), 'admin', SPASINOU, B('سفیر چینی بر کرانهٔ دریا', 'A Chinese envoy at the sea'), B('بنا بر هو هان‌شو، بان چائو، فرماندهٔ هان در آسیای میانه، گان یینگ را به سوی «دا چین» (روم) فرستاد. گان یینگ به «تیائوجی» بر کرانهٔ دریا رسید، اما دریانوردان پارتی گفتند سفر دریایی ماه‌ها یا سال‌ها طول می‌کشد، و او بازگشت.', 'According to the Hou Hanshu, Ban Chao, the Han commander in Central Asia, sent Gan Ying towards “Da Qin” (Rome). Gan Ying reached “Tiaozhi” on the sea coast, but Parthian sailors told him the voyage would take months or years, and he turned back.'), 'disputed', ['hou-hanshu'], note('جای «تیائوجی» محل بحث است؛ هیل آن را میشان (خاراکس) می‌داند و نشانه بر همین است. برخی گمان می‌کنند پارتیان عمداً او را بازداشتند تا انحصار بازرگانی ابریشم را نگه دارند؛ این گمان است.', '“Tiaozhi” is disputed; Hill takes it as Characene (Charax), which the marker follows. Some suppose the Parthians deliberately put him off to keep their hold on the silk trade; that is a guess.')),
    ev('gift', 101, B('۱۰۱ م.', '101 CE'), 'admin', CTESIPHON, B('شیر و پرندهٔ بزرگ برای دربار هان', 'Lions and great birds for the Han court'), B('بنا بر هو هان‌شو، شاه «آنشی» (پارت)، که نامش را «منچیو» می‌نویسد، شیر و پرندگان بزرگ (احتمالاً شترمرغ) به دربار هان فرستاد.', 'According to the Hou Hanshu, the king of “Anxi” (Parthia), whom it calls “Manqu”, sent lions and great birds (probably ostriches) to the Han court.'), 'probable', ['hou-hanshu'], note('برخی «منچیو» را صورت چینی نام پاکر می‌دانند؛ این یکی‌انگاری قطعی نیست.', 'Some take “Manqu” as a Chinese form of Pacorus’ name; the identification is not certain.')),
    ev('rivals', 105, B('حدود ۱۰۵–۱۱۰ م.', 'c. 105–110 CE'), 'admin', SELEUCIA, B('مدعیان تازه و پایان', 'New rivals, and the end'), B('ایرانیکا: پاکر، بلاش (دوم) و خسرو هر یک می‌بایست بر سرزمین‌های بزرگی از پارت فرمان رانده باشند. آخرین سکه‌های پاکر از حدود ۱۱۰ م. است.', 'Iranica: Pacorus, Vologases (II) and Osroes must each have held sway over large parts of the Parthian empire. Pacorus’ last coins date from about 110 CE.'), 'disputed', ['ir-arsacids', 'sellwood'], LE_RIDER),
  ],
  dossier: [
    sec('record', 'شاهی که از روی سکه‌ها می‌شناسیم', 'A king we know from his coins',
      [['برای سی سال پادشاهی پاکر، هیچ تاریخ‌نگاری چون تاسیتوس یا یوسفوس نداریم. سکه‌ها او را در سال‌های گوناگون نشان می‌دهند، و در برخی سال‌ها مدعیان دیگر در همان ضرابخانهٔ سلوکیه سکه زده‌اند.'],
        ['For Pacorus’ thirty years we have no historian like Tacitus or Josephus. His coins show him at different stages of his reign, and in some years other claimants struck coins at the same Seleucia mint.']],
      [['ایرانیکا می‌گوید پاکر، بلاش و خسرو «می‌بایست» هر یک بر سرزمین‌های بزرگی فرمان رانده باشند. این یعنی پادشاهی پارت در این دوره بیشتر به اتحادیه‌ای از ولایت‌ها با شاهان رقیب می‌مانست تا به دولتی یکپارچه. ترتیب دقیق آنان از روی سکه بازسازی شده و محل بحث است.'],
        ['Iranica says Pacorus, Vologases and Osroes “must have” each held large territories. That means the Parthian kingdom in this period looked more like a league of provinces under rival kings than a single state. Their exact order is rebuilt from coins and is debated.']],
      [['دو یا سه شاه در یک کشور، بی آن‌که کشور فروبپاشد: شاید پایداری پارت بیشتر در خاندان‌های بزرگ و شهرهای بازرگان بود تا در شخص شاه.'],
        ['Two or three kings in one country without the country falling apart: perhaps Parthia’s staying power lay more in its great houses and merchant cities than in the person of the king.']],
      ['ir-arsacids', 'sellwood'], { photos: ['coin-pacorus2', 'coin-pacorus2-late'] }),
    sec('artabanus3', 'اردوان سوم و «نرون دروغین»', 'Artabanus III and the “false Nero”',
      [['ایرانیکا (شیپمان): اردوان سوم، پسر بلاش یکم و برادر پاکر، در ۷۹–۸۱ م. (لو ریدر) یا ۸۰–۸۱ م. (سلوود) با برادرش بر سر قدرت کشمکش کرد و جز در بابل پشتیبانی نیافت. او به نخستین نرون دروغین، شهروندی رومی به نام ترنتیوس ماکسیموس، پیشنهاد کمک داد. پس از ۸۱ م. سکه‌ای از او نیست.'],
        ['Iranica (Schippmann): Artabanus III, a son of Vologases I and brother of Pacorus, contended with him in 79–81 CE (Le Rider) or 80–81 CE (Sellwood) and found support only in Babylonia. He offered help to the first false Nero, a Roman citizen named Terentius Maximus. There are no coins of his after 81 CE.']],
      [['پشتیبانی از یک نرون دروغین شاید کوششی بود برای آشفتن روم و یافتن متحدی بیرونی. شمارهٔ «سوم» از ایرانیکاست؛ در شمارش این سایت، اردوان دوم شاه ۱۰–۳۸ م. است و این مدعی اردوان سوم.'],
        ['Backing a false Nero may have been an attempt to unsettle Rome and find an outside ally. The number “III” follows Iranica; in this site’s numbering, Artabanus II is the king of 10–38 CE and this claimant is Artabanus III.']],
      [['شاهی که تنها در یک ولایت پشتیبان دارد و برای پیروزی به یک فریبکار رومی دل می‌بندد، نشان می‌دهد که مشروعیت بی‌پشتیبانی مردم به دست نمی‌آید.'],
        ['A claimant backed in only one province, pinning his hopes on a Roman impostor, shows that legitimacy cannot be had without people’s support.']],
      ['ir-artabanus3', 'sellwood']),
    sec('china', 'پارت و چین', 'Parthia and China',
      [['هو هان‌شو، تاریخ رسمی هان پسین، از دو رخداد روزگار پاکر می‌گوید. در ۹۷ م. گان یینگ، فرستادهٔ بان چائو، به سوی روم راه افتاد و تا کرانهٔ دریا در «تیائوجی» رسید، اما دریانوردان پارتی او را از سفر دراز و خطرناک دریایی ترساندند و او بازگشت. در ۱۰۱ م. شاه پارت شیر و پرندگان بزرگ به دربار هان فرستاد. (این‌ها بازگفته‌اند، نه نقل مستقیم.)'],
        ['The Hou Hanshu, the official history of the Later Han, records two events of Pacorus’ time. In 97 CE Gan Ying, sent by Ban Chao, set out for Rome and reached the coast at “Tiaozhi”, but Parthian sailors frightened him with tales of a long, dangerous voyage and he turned back. In 101 CE the Parthian king sent lions and great birds to the Han court. (These are paraphrases, not direct quotations.)']],
      [['بسیاری از پژوهشگران گمان می‌کنند پارتیان نمی‌خواستند چین و روم مستقیم با هم داد و ستد کنند، زیرا پارت میانجی سودآور بازرگانی ابریشم بود. منبع چینی خود چنین انگیزه‌ای را نمی‌گوید؛ این تفسیر امروزی است.'],
        ['Many scholars suppose the Parthians did not want China and Rome to trade directly, since Parthia was the profitable middleman of the silk trade. The Chinese source itself does not state such a motive; that reading is modern.']],
      [['بازرگانی میان چین و روم از راه پارت می‌گذشت و هر دو سو سود می‌بردند. میانجیگری تا زمانی که آزاد باشد خدمتی است؛ وقتی به انحصار بدل شود، هزینه‌اش را خریدار می‌دهد.'],
        ['Trade between China and Rome passed through Parthia and both ends profited. Middlemen provide a service while the trade is free; once it becomes a monopoly, the buyer pays for it.']],
      ['hou-hanshu']),
  ],
  synthesis: { title: B('جمع‌بندی', 'Synthesis'), paras: { fa: ['پاکر دوم نزدیک به سی سال شاه بود، اما در بیشتر این سال‌ها شاهنشاهی را با برادر و مدعیان دیگر بخش کرد. تنها سکه‌ها، چند گزارش رومی که ایرانیکا گرد آورده، و تاریخ هان پسین از روزگار او مانده‌اند.'], en: ['Pacorus II was king for nearly thirty years, but for most of them he shared the empire with a brother and other claimants. Only coins, a few Roman notices gathered by Iranica, and the Later Han history survive from his reign.'] }, sources: ['ir-arsacids', 'ir-artabanus3', 'hou-hanshu'] },
  sources: pick('ir-arsacids', 'ir-artabanus3', 'hou-hanshu', 'sellwood'),
  photos: photos('coin-pacorus2', 'coin-pacorus2-late'),
  related: related(['vologases-i', 'بلاش یکم، پدرش', 'Vologases I, his father'], ['osroes-i', 'خسرو یکم', 'Osroes I'], ['vologases-iii', 'بلاش سوم', 'Vologases III']),
  wikipedia: 'https://en.wikipedia.org/wiki/Pacorus_II',
}

export const osroesI: FeaturedKing = {
  slug: 'osroes-i', name: B('خسرو یکم', 'Osroes I'), dynastyName: PAR,
  reign: B('حدود ۱۰۹–۱۲۹ م.', 'c. 109–129 CE'),
  title: B('خسرو یکم؛ شاهی که تیسفون را به ترایانوس باخت و پارت را نباخت', 'Osroes I: the king who lost Ctesiphon to Trajan but not Parthia'),
  lede: B(
    'خسرو در کشمکش با بلاش (سوم) بر بخشی بزرگ از پارت فرمان می‌راند. او پارتاماسیریس را شاه ارمنستان کرد و در ۱۱۴ م. ترایانوس به ارمنستان تاخت. روم ارمنستان و شمال میان‌رودان را گرفت، در ۱۱۶ م. تیسفون را گشود و تا خلیج فارس رسید. اما شورش در سرزمین‌های گشوده و شکست در برابر هترا ترایانوس را واداشت بازگردد. هادریان فرات را دوباره مرز کرد.',
    'Osroes ruled a large part of Parthia while contending with Vologases (III). He installed Parthamasiris as king of Armenia, and in 114 CE Trajan marched into Armenia. Rome took Armenia and northern Mesopotamia, captured Ctesiphon in 116 CE and reached the Persian Gulf. But revolt in the conquered lands and failure before Hatra forced Trajan back. Hadrian made the Euphrates the frontier again.'),
  stats: [{ n: B('۱۱۶', '116'), l: B('گشوده شدن تیسفون (م.)', 'Ctesiphon taken (CE)') }, { n: B('۱۱۷', '117'), l: B('بازگشت مرز به فرات (م.)', 'frontier back on the Euphrates (CE)') }],
  mapTitle: B('نقشه: جنگ ترایانوس', 'Map: Trajan’s war'),
  span: [109, 129],
  events: [
    ev('rise', 109, B('حدود ۱۰۹ م.', 'c. 109 CE'), 'admin', SELEUCIA, B('خسرو در سلوکیه', 'Osroes at Seleucia'), B('سکه‌های خسرو از حدود ۱۰۹ م. در سلوکیه پیدا می‌شوند. ایرانیکا: پس از پایان کشمکش‌های داخلی، از ۱۱۴ م. «احتمالاً» خسرو بر تخت پارت بود.', 'Osroes’ coins appear at Seleucia from about 109 CE. Iranica: after the internal conflicts ended, from 114 CE Osroes “probably” held the Parthian throne.'), 'disputed', ['ir-arsacids', 'sellwood'], LE_RIDER),
    ev('armenia', 114, B('۱۱۴ م.', '114 CE'), 'campaign', ARTAXATA, B('پارتاماسیریس و ترایانوس', 'Parthamasiris and Trajan'), B('خسرو پارتاماسیریس را بر تخت ارمنستان نشاند. ایرانیکا: در ۱۱۴ م. رومیان به ارمنستان تاختند و پارتاماسیریس را کشتند. انگیزهٔ ترایانوس روشن نیست: شاید بازرگانی، شاید مرزی امن، شاید آن‌گونه که دیو کاسیوس می‌گوید، نام‌آوری.', 'Osroes put Parthamasiris on the throne of Armenia. Iranica: in 114 CE the Romans marched into Armenia and killed Parthamasiris. Trajan’s motive is unclear: perhaps trade, perhaps a secure frontier, perhaps, as Cassius Dio says, glory.'), 'secure', ['ir-arsacids']),
    ev('ctesiphon', 116, B('۱۱۶ م.', '116 CE'), 'campaign', CTESIPHON, B('تیسفون گشوده می‌شود', 'Ctesiphon falls'), B('ترایانوس تا پایان ۱۱۵ م. شمال میان‌رودان را گرفت و سپس تیسفون، پایتخت پارت، را گشود. رومیان تا خلیج فارس پیش رفتند.', 'Trajan took northern Mesopotamia by the end of 115 CE and then captured the Parthian capital Ctesiphon. The Romans pushed on to the Persian Gulf.'), 'secure', ['ir-arsacids']),
    ev('hatra', 117, B('۱۱۶–۱۱۷ م.', '116–117 CE'), 'battle', HATRA, B('شورش و شکست در برابر هترا', 'Revolt, and failure at Hatra'), B('ترایانوس در بابل بود که شنید در بسیاری از سرزمین‌های گشوده شورش شده است؛ یهودیان نیز از کورنه تا مصر شوریده بودند. کوشش او برای گرفتن هترا، یکی از دژهای اصلی پارت در شمال میان‌رودان، شکست خورد. او در تابستان ۱۱۷ م. درگذشت.', 'Trajan was in Babylon when he heard that revolt had broken out across the conquered lands; the Jews too had risen from Cyrenaica to Egypt. His attempt to take Hatra, one of Parthia’s main strongholds in northern Mesopotamia, failed. He died in summer 117 CE.'), 'secure', ['ir-arsacids']),
    ev('hadrian', 117, B('۱۱۷ م.', '117 CE'), 'admin', [38.0, 37.06], B('هادریان: فرات دوباره مرز', 'Hadrian: the Euphrates again'), B('ایرانیکا: هادریان دید که جنگ ترایانوس جز چند پیروزی چشمگیر و گذرا چیزی برای روم نداشته است. فرات دوباره مرز شد و روم ارمنستان، میان‌رودان و آشور را رها کرد.', 'Iranica: Hadrian saw that Trajan’s war had brought Rome little beyond a few spectacular, short-lived successes. The Euphrates became the frontier again and Rome gave up Armenia, Mesopotamia and Assyria.'), 'secure', ['ir-arsacids']),
    ev('end', 128, B('۱۲۷/۱۲۸ م.', '127/128 CE'), 'admin', SELEUCIA, B('پایان سکه‌های خسرو', 'Osroes’ coinage ends'), B('خسرو با رقیبش بلاش (سوم) درگیر بود. سکه‌هایش در ۱۲۷/۱۲۸ م. در سلوکیه پایان می‌یابد، پس بلاش احتمالاً پس از ۱۲۹ م. پیروز شد.', 'Osroes was in conflict with his rival Vologases (III). His coinage at Seleucia ends in 127/128 CE, so Vologases probably won after 129 CE.'), 'probable', ['ir-arsacids', 'sellwood']),
  ],
  dossier: [
    sec('trajan', 'جنگ ترایانوس', 'Trajan’s war',
      [['ایرانیکا جنگ را چنین خلاصه می‌کند: در ۱۱۴ م. رومیان به ارمنستان تاختند و پارتاماسیریس، شاه گماشتهٔ خسرو، را کشتند. ترایانوس تا پایان ۱۱۵ م. شمال میان‌رودان و اندکی بعد تیسفون را گرفت و تا خلیج فارس رسید. سپس شورش در سرزمین‌های گشوده و شورش یهودیان در شرق روم آغاز شد، و کوشش او برای گرفتن هترا شکست خورد. او در تابستان ۱۱۷ م. درگذشت.'],
        ['Iranica sums the war up like this: in 114 CE the Romans marched into Armenia and killed Parthamasiris, Osroes’ appointee. Trajan took northern Mesopotamia by the end of 115 CE and soon after Ctesiphon, and reached the Persian Gulf. Then revolt broke out in the conquered lands and the Jews rose in the Roman east, and his attempt on Hatra failed. He died in summer 117 CE.']],
      [['ایرانیکا سه توضیح برای انگیزهٔ ترایانوس می‌آورد: بازرگانی (گی)، مرزی امن (لپر)، و جاه‌طلبی شخصی (دیو کاسیوس). شاید هر سه درست باشند. ایرانیکا همچنین می‌گوید ترایانوس از کشمکش‌های داخلی پارت سود برد، اما «پیروزی‌اش بیش از اندازه گران تمام شد».'],
        ['Iranica gives three explanations of Trajan’s motive: trade (Guey), a secure frontier (Lepper), and personal glory (Cassius Dio). All three may be right. Iranica also says Trajan profited from Parthia’s internal struggles, but “ultimately his victory cost too much”.']],
      [['پایتخت گشوده شد، اما کشور نه. شورش مردمان سرزمین‌های گشوده و پایداری شهری چون هترا نشان داد که گرفتن زمین با نگه داشتن آن یکی نیست. هادریان این را پذیرفت و صلح برگشت؛ صلحی که برای بازرگانی هر دو سو سودمند بود.'],
        ['The capital fell, but the country did not. The revolt of the conquered peoples and the resistance of a city like Hatra showed that taking land is not the same as holding it. Hadrian accepted this and peace returned, a peace that profited the trade of both sides.']],
      ['ir-arsacids'], { photos: ['coin-osroes1'] }),
    sec('rival', 'دو شاه در یک شاهنشاهی', 'Two kings in one empire',
      [['در بیشتر پادشاهی خسرو، بلاش (سوم) نیز در بخشی از پارت شاه بود و سکه می‌زد. ایرانیکا می‌گوید کشمکش آنان پس از ۱۲۹ م. به پیروزی بلاش انجامید، چون سکه‌های خسرو در ۱۲۷/۱۲۸ م. در سلوکیه پایان می‌یابد.'],
        ['For much of Osroes’ reign, Vologases (III) was also king over part of Parthia and struck coins. Iranica says their conflict ended in Vologases’ victory after 129 CE, since Osroes’ coinage at Seleucia stops in 127/128 CE.']],
      [['شاید همین دوپارگی بود که پیشروی ترایانوس را آسان کرد، و شاید همین بود که پارت را نجات داد: با گرفتن تیسفون، تنها یک نیمهٔ پادشاهی شکست خورده بود.'],
        ['Perhaps this split made Trajan’s advance easy, and perhaps it also saved Parthia: with Ctesiphon taken, only half the kingdom had been beaten.']],
      [['قدرت پخش‌شده آسیب‌پذیرتر است، اما سخت‌تر هم به یک‌باره فرو می‌ریزد.'],
        ['Divided power is more vulnerable, but it is also harder to bring down at a single blow.']],
      ['ir-arsacids', 'sellwood']),
  ],
  synthesis: { title: B('جمع‌بندی', 'Synthesis'), paras: { fa: ['خسرو یکم بزرگ‌ترین یورش روم به پارت را تاب آورد. تیسفون را از دست داد، اما شورش‌ها و هترا روم را بازگرداندند و هادریان مرز را به فرات برگرداند. آگاهی ما از او بیشتر از سکه‌ها و گزارش‌های رومی است که ایرانیکا خلاصه کرده است.'], en: ['Osroes I survived the greatest Roman assault on Parthia. He lost Ctesiphon, but the revolts and Hatra turned Rome back and Hadrian returned the frontier to the Euphrates. What we know of him comes mostly from coins and the Roman reports Iranica summarizes.'] }, sources: ['ir-arsacids', 'sellwood'] },
  sources: pick('ir-arsacids', 'sellwood'),
  photos: photos('coin-osroes1'),
  related: related(['pacorus-ii', 'پاکر دوم', 'Pacorus II'], ['vologases-iii', 'بلاش سوم، رقیبش', 'Vologases III, his rival']),
  wikipedia: 'https://en.wikipedia.org/wiki/Osroes_I',
}

export const vologasesIII: FeaturedKing = {
  slug: 'vologases-iii', name: B('بلاش سوم', 'Vologases III'), dynastyName: PAR,
  reign: B('حدود ۱۱۰–۱۴۷ م.', 'c. 110–147 CE'),
  title: B('بلاش سوم؛ شاهی که با زر، آلان‌ها را بازگرداند', 'Vologases III: the king who paid the Alans to leave'),
  lede: B(
    'بلاش سوم (در شمارش قدیم «بلاش دوم») نزدیک به چهل سال، نخست در کنار خسرو و سپس به تنهایی، فرمان راند. پس از جنگ ترایانوس، دوره‌ای آرام آمد. بزرگ‌ترین خطر از شمال بود: آلان‌ها در ۱۳۴–۱۳۶ م. به آلبانیا، ماد و ارمنستان تاختند، و بلاش احتمالاً با پرداخت پول آنان را بازگرداند. وقتی روم شاهی تازه در ارمنستان گذاشت، او شاید برای نگه داشتن صلح و بازرگانی واکنشی نشان نداد.',
    'Vologases III (“Vologases II” in the older numbering) ruled for nearly forty years, first beside Osroes and then alone. After Trajan’s war came a quiet period. The greatest danger came from the north: the Alans raided Albania, Media and Armenia in 134–136 CE, and Vologases probably paid them to withdraw. When Rome installed a new king in Armenia he did not react, perhaps to keep the peace and the trade.'),
  stats: [{ n: B('~۳۷', '~37'), l: B('سال پادشاهی', 'years of reign') }, { n: B('۱۳۴–۱۳۶', '134–136'), l: B('یورش آلان‌ها (م.)', 'Alan raids (CE)') }],
  mapTitle: B('نقشه: از سلوکیه تا قفقاز', 'Map: from Seleucia to the Caucasus'),
  span: [110, 147],
  events: [
    ev('rise', 110, B('حدود ۱۱۰–۱۱۲ م.', 'c. 110–112 CE'), 'admin', SELEUCIA, B('آغاز پادشاهی', 'The reign begins'), B('بنا بر لو ریدر، بلاش از ۱۱۱/۱۱۲ م. فرمان راند. در شمارش قدیم، او همان «بلاش دوم» با پادشاهی‌ای بسیار دراز (۷۷/۷۸–۱۴۶/۱۴۷ م.) است.', 'According to Le Rider, Vologases ruled from 111/112 CE. In the older numbering he is “Vologases II”, with a very long reign (77/78–146/147 CE).'), 'disputed', ['ir-arsacids', 'sellwood'], LE_RIDER),
    ev('victory', 129, B('پس از ۱۲۹ م.', 'after 129 CE'), 'admin', SELEUCIA, B('پیروزی بر خسرو', 'Victory over Osroes'), B('سکه‌های خسرو در ۱۲۷/۱۲۸ م. پایان می‌یابد. ایرانیکا: کشمکش آنان «می‌بایست» پس از ۱۲۹ م. با پیروزی بلاش پایان یافته باشد. مدعی دیگری، مهرداد چهارم، کامیابی چندانی نیافت.', 'Osroes’ coins end in 127/128 CE. Iranica: their conflict “must have” ended in Vologases’ victory after 129 CE. Another rival, Mithridates IV, had little success.'), 'probable', ['ir-arsacids', 'sellwood']),
    ev('alans', 135, B('۱۳۴–۱۳۶ م.', '134–136 CE'), 'campaign', ALANS, B('یورش آلان‌ها', 'The Alan raids'), B('ایرانیکا: آلان‌ها به آلبانیا، ماد و ارمنستان تاختند و تا کاپادوکیه پیش رفتند. تنها راهی که بلاش توانست آنان را به بازگشت وادارد «احتمالاً» پرداخت پول بود.', 'Iranica: the Alans raided Albania, Media and Armenia and got as far as Cappadocia. The only way Vologases could get them to withdraw was “probably” by paying them.'), 'probable', ['ir-arsacids']),
    ev('armenia', 140, B('پس از ۱۳۸ م.', 'after 138 CE'), 'admin', ARTAXATA, B('روم در ارمنستان شاه می‌گذارد', 'Rome installs a king in Armenia'), B('ایرانیکا: زیر آنتونینوس پیوس (۱۳۸–۱۶۱ م.) رومیان شاهی تازه در ارمنستان گذاشتند. پارتیان واکنشی نشان ندادند، شاید چون نیروی کافی نداشتند، یا برای نگه داشتن صلح و بازرگانی پرسود کاروانی.', 'Iranica: under Antoninus Pius (138–161 CE) the Romans installed a new king in Armenia. The Parthians did not react, perhaps for lack of forces, or to keep the peace and the very profitable caravan trade.'), 'probable', ['ir-arsacids']),
    ev('death', 147, B('۱۴۶–۱۴۸ م.', '146–148 CE'), 'admin', CTESIPHON, B('پایان پادشاهی', 'The end of the reign'), B('پس از او بلاش چهارم (۱۴۷/۱۴۸–۱۹۰/۱۹۳ م.) به تخت نشست.', 'He was followed by Vologases IV (147/148–190/193 CE).'), 'probable', ['ir-arsacids', 'sellwood']),
  ],
  dossier: [
    sec('numbering', 'بلاش دوم یا سوم؟', 'Vologases II or III?',
      [['سکه‌های سلوکیه به نام «بلاش» از ۷۷/۷۸ تا ۱۴۶/۱۴۷ م. پیدا می‌شوند. پژوهشگران قدیم‌تر همه را از یک شاه، «بلاش دوم»، با پادشاهی‌ای نزدیک به هفتاد ساله، می‌دانستند. لو ریدر سکه‌های ۷۷/۷۸، ۸۹/۹۰ و ۱۰۶–۱۰۸ را به شاهی جداگانه داد، که او را «بلاش دوم» نامید، و شاه دیرپا را «بلاش سوم» (از ۱۱۱/۱۱۲ م.).'],
        ['Seleucia coins in the name of “Vologases” run from 77/78 to 146/147 CE. Older scholars gave them all to one king, “Vologases II”, with a reign of nearly seventy years. Le Rider gave the coins of 77/78, 89/90 and 106–108 to a separate king, whom he called “Vologases II”, and the long-lived king became “Vologases III” (from 111/112 CE).']],
      [['این سایت شمارش لو ریدر را دنبال می‌کند. «بلاش دوم» او شاهی است که تنها از چند گروه سکه شناخته می‌شود و شاید در شرق یا در کنار پاکر دوم مدعی بوده است. همهٔ این‌ها بازسازی است و ایرانیکا آن را محل بحث می‌داند.'],
        ['This site follows Le Rider’s numbering. His “Vologases II” is a king known only from a few groups of coins, perhaps a claimant in the east or beside Pacorus II. All of this is reconstruction, and Iranica treats it as disputed.']],
      [['وقتی تاریخ یک دوره را تنها از سکه‌ها بازمی‌سازیم، یک انتساب تازه می‌تواند شاهی را بیافریند یا از میان بردارد. خواننده باید بداند کجا سند داریم و کجا گمان.'],
        ['When a period’s history is rebuilt only from coins, one new attribution can create or erase a king. The reader should know where we have evidence and where we have a guess.']],
      ['ir-arsacids', 'sellwood'], { photos: ['coin-vologases3'] }),
    sec('alans', 'آلان‌ها و بهای صلح', 'The Alans and the price of peace',
      [['ایرانیکا: آلان‌ها، مردمانی کوچ‌رو از شمال قفقاز، در ۱۳۴–۱۳۶ م. به آلبانیا، ماد و ارمنستان تاختند و تا کاپادوکیه پیش رفتند. بلاش احتمالاً با پرداخت پول آنان را بازگرداند. زیر آنتونینوس پیوس، روم شاهی تازه در ارمنستان گذاشت و پارتیان واکنشی نشان ندادند.'],
        ['Iranica: the Alans, nomads from the north Caucasus, raided Albania, Media and Armenia in 134–136 CE and got as far as Cappadocia. Vologases probably paid them to withdraw. Under Antoninus Pius, Rome installed a new king in Armenia and the Parthians did not react.']],
      [['ایرانیکا دو توضیح برای آرامش بلاش می‌آورد: نیروی ناکافی، یا خواست نگه داشتن صلح و بازرگانی پرسود کاروانی. این دوره، به گفتهٔ ایرانیکا، زمان آرامش بود که تا آغاز پادشاهی بلاش چهارم ادامه یافت.'],
        ['Iranica offers two explanations for Vologases’ restraint: insufficient forces, or a wish to keep the peace and the very profitable caravan trade. This was, Iranica says, a time of peace that lasted into the early reign of Vologases IV.']],
      [['پرداخت پول برای صلح گاه از جنگ ارزان‌تر است، و بازرگانی آزاد انگیزه‌ای نیرومند برای صلح است. اما هزینهٔ این پول را مالیات‌دهندگان می‌دادند.'],
        ['Paying for peace is sometimes cheaper than war, and free trade is a strong motive for peace. But it was the taxpayers who footed the bill.']],
      ['ir-arsacids']),
  ],
  synthesis: { title: B('جمع‌بندی', 'Synthesis'), paras: { fa: ['بلاش سوم پس از طوفان جنگ ترایانوس، پارت را به آرامی نسبی رساند: رقیبش خسرو را کنار زد، آلان‌ها را با پول بازگرداند و با روم جنگ نکرد. حتی شماره‌اش محل بحث است و آگاهی ما از او بیشتر از سکه‌هاست.'], en: ['After the storm of Trajan’s war, Vologases III brought Parthia to relative calm: he pushed aside his rival Osroes, paid the Alans to leave and did not fight Rome. Even his number is disputed, and most of what we know comes from his coins.'] }, sources: ['ir-arsacids', 'sellwood'] },
  sources: pick('ir-arsacids', 'sellwood'),
  photos: photos('coin-vologases3'),
  related: related(['osroes-i', 'خسرو یکم، رقیبش', 'Osroes I, his rival'], ['pacorus-ii', 'پاکر دوم', 'Pacorus II']),
  wikipedia: 'https://en.wikipedia.org/wiki/Vologases_III',
}
