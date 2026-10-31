/**
 * Vologases I (c. 51–77/79 CE), featured; his rebel son Vardanes II (c. 55–58) inside.
 * Spine: Tacitus Annals 12.44–51, 13.6–9, 13.34–41, 14.23–26, 15.1–31 (Church & Brodribb, quoted),
 * Iranica (Schippmann “Arsacids ii”; Kellens “Avesta i”), Dąbrowa 1983. Dates after 66 rest on Iranica.
 */
import type { Bi, FeaturedKing } from '../featured/types'
import { ARSANIAS, ARTAXATA, CTESIPHON, HYRCANIA, PAR, SELEUCIA, ev, note, photos, pick, related, sec } from './common'

const B = (fa: string, en: string): Bi => ({ fa, en })

export const vologasesI: FeaturedKing = {
  slug: 'vologases-i', name: B('بلاش یکم', 'Vologases I'), dynastyName: PAR,
  reign: B('حدود ۵۱–۷۷/۷۹ م.', 'c. 51–77/79 CE'),
  title: B('بلاش یکم؛ شاهی که ارمنستان را برای خاندانش گرفت و آن را با روم بخش کرد', 'Vologases I: the king who won Armenia for his house and shared it with Rome'),
  lede: B(
    'پسر ونن دوم و، به گفتهٔ تاسیتوس، یک «همخوابهٔ یونانی». با کناره‌گیری برادرانش شاه شد و برادرش تیرداد را بر تخت ارمنستان نشاند. بیش از ده سال با روم بر سر ارمنستان جنگید و چانه زد، در ۶۲ م. یک سپاه رومی را در رندئیا به تسلیم واداشت، و سرانجام به سازشی رسید که نیم سده صلح آورد: تیرداد، شاهزادهٔ اشکانی، تاج ارمنستان را در ۶۶ م. از دست نرون در روم گرفت. سنت زرتشتی بعدها گردآوری اوستا را به شاهی به نام «بلاش» نسبت داد.',
    'Son of Vonones II and, Tacitus says, of a “Greek concubine”. He became king when his brothers stood aside and put his brother Tiridates on the throne of Armenia. For over ten years he fought and bargained with Rome over Armenia, forced a Roman army to surrender at Rhandeia in 62 CE, and finally reached a compromise that brought half a century of peace: Tiridates, an Arsacid prince, received the crown of Armenia from Nero’s hands in Rome in 66 CE. Zoroastrian tradition later credited a king “Valaxš” with collecting the Avesta.'),
  stats: [{ n: B('~۲۷', '~27'), l: B('سال پادشاهی', 'years of reign') }, { n: B('۶۲', '62'), l: B('تسلیم رومیان در رندئیا (م.)', 'Roman surrender at Rhandeia (CE)') }, { n: B('۶۶', '66'), l: B('تاج‌گذاری تیرداد در روم (م.)', 'Tiridates crowned in Rome (CE)') }],
  mapTitle: B('نقشه: از تیسفون تا ارمنستان', 'Map: from Ctesiphon to Armenia'),
  span: [51, 79],
  events: [
    ev('accession', 51, B('۵۱ م.', '51 CE'), 'admin', CTESIPHON, B('بر تخت', 'Accession'), B('تاسیتوس: بلاش «با کناره‌گیری برادرانش» شاه شد. به برادرش پاکر ماد آتروپاتن را داد و برای تیرداد ارمنستان را در نظر گرفت.', 'Tacitus: Vologases became king “by the retirement of his brothers”. He gave his brother Pacorus Media Atropatene and meant Armenia for Tiridates.'), 'secure', ['tac-ann', 'ir-arsacids'], note('ایرانیکا روشن نمی‌داند که ونن دوم پیش از او شاه بود یا بلاش مستقیماً جانشین گودرز شد.', 'Iranica says it is unclear whether Vonones II reigned before him or he succeeded Gotarzes directly.')),
    ev('armenia', 53, B('۵۲–۵۴ م.', '52–54 CE'), 'campaign', ARTAXATA, B('تیرداد در ارمنستان', 'Tiridates in Armenia'), B('رادامیستوس ایبریایی عمویش مهرداد، شاه ارمنستان، را کشته بود. بلاش به ارمنستان تاخت؛ آرتاشات و تیگرانوکرت تسلیم شدند. اما زمستانی سخت، کمبود خوراک و بیماری او را به بازگشت واداشت. ایرانیکا: در ۵۳ م. تیرداد شاه ارمنستان شد.', 'The Iberian Rhadamistus had killed his uncle Mithridates, king of Armenia. Vologases invaded; Artaxata and Tigranocerta submitted. But a hard winter, lack of supplies and disease forced him back. Iranica: in 53 CE Tiridates became king of Armenia.'), 'secure', ['tac-ann', 'ir-arsacids']),
    ev('vardanes2', 55, B('حدود ۵۵–۵۸ م.', 'c. 55–58 CE'), 'admin', SELEUCIA, B('شورش پسرش وردان (دوم)', 'His son Vardanes (II) rebels'), B('تاسیتوس: «در این هنگام رقیبی برای بلاش در پسرش وردان برخاست» و پارتیان ارمنستان را رها کردند. سکه‌هایی از سلوکیه به نام وردان دوم زده شد.', 'Tacitus: “There rose up at this crisis a rival to Vologeses in his son Vardanes”, and the Parthians left Armenia. Coins in the name of Vardanes II were struck at Seleucia.'), 'probable', ['tac-ann', 'sellwood'], note('تاریخ و پایان شورش روشن نیست؛ سکه‌ها حدود ۵۵–۵۸ م. را نشان می‌دهند.', 'The dates and end of the revolt are unclear; the coins point to c. 55–58 CE.')),
    ev('corbulo', 58, B('۵۸ م.', '58 CE'), 'campaign', ARTAXATA, B('کوربولو آرتاشات را می‌گیرد', 'Corbulo takes Artaxata'), B('روم به فرماندهی کوربولو حمله کرد. تیرداد گریخت و آرتاشات گرفته و سوزانده شد. بلاش سرگرم شورش گرگان بود.', 'Rome attacked under Corbulo. Tiridates fled and Artaxata was taken and burned. Vologases was tied down by the revolt of Hyrcania.'), 'secure', ['tac-ann', 'ir-arsacids']),
    ev('hyrcania', 59, B('حدود ۵۸–۶۰ م.', 'c. 58–60 CE'), 'campaign', HYRCANIA, B('شورش گرگان', 'The revolt of Hyrcania'), B('تاسیتوس: گرگانیان با پارت در جنگ بودند و فرستادگانی به روم فرستادند تا پیمان دوستی ببندند.', 'Tacitus: the Hyrcanians were at war with Parthia and sent envoys to Rome seeking alliance.'), 'secure', ['tac-ann']),
    ev('rhandeia', 62, B('زمستان ۶۲ م.', 'winter 62 CE'), 'battle', ARSANIAS, B('رندئیا: تسلیم سپاه پایتوس', 'Rhandeia: Paetus’ army surrenders'), B('روم تیگران ششم را شاه ارمنستان کرد و او به آدیابنه تاخت. بلاش سرانجام به جنگ آمد. پایتوس، فرمانده تازهٔ رومی، در رندئیا کنار رود ارسانیاس محاصره شد و تسلیم شد. رومیان ارمنستان را ترک کردند و دژها و انبارها را به پارتیان دادند.', 'Rome made Tigranes VI king of Armenia and he raided Adiabene. Vologases at last went to war. Paetus, the new Roman commander, was surrounded at Rhandeia on the river Arsanias and surrendered. The Romans left Armenia and handed their forts and stores to the Parthians.'), 'secure', ['tac-ann', 'ir-arsacids'], note('تاسیتوس شایعهٔ گذراندن لژیون‌ها «از زیر یوغ» را می‌آورد، اما آن را تأیید نمی‌کند.', 'Tacitus reports a rumour that the legions were sent “under the yoke”, but does not confirm it.')),
    ev('compromise', 63, B('۶۳ م.', '63 CE'), 'admin', ARTAXATA, B('سازش رندئیا', 'The Rhandeia compromise'), B('تیرداد پذیرفت که تاج را در برابر پیکرهٔ نرون بر زمین بگذارد و تنها از دست نرون بازپس گیرد.', 'Tiridates agreed to lay his crown before Nero’s statue and take it back only from Nero’s hand.'), 'secure', ['tac-ann', 'ir-arsacids']),
    ev('rome', 66, B('۶۶ م.', '66 CE'), 'admin', ARTAXATA, B('تاج‌گذاری تیرداد در روم', 'Tiridates crowned in Rome'), B('ایرانیکا: تیرداد به روم سفر کرد و تاج ارمنستان را از دست نرون گرفت. از این پس ارمنستان را شاهزادگان اشکانی با تأیید روم اداره کردند و دو شاهنشاهی چند دهه در صلح ماندند.', 'Iranica: Tiridates travelled to Rome and received the crown of Armenia from Nero. From then on Armenia was ruled by Arsacid princes with Rome’s approval, and the two empires stayed at peace for some decades.'), 'secure', ['ir-arsacids'], note('روم بیرون از نقشه است؛ نشانه بر آرتاشات، پایتخت تیرداد، است.', 'Rome lies off the map; the marker is on Artaxata, Tiridates’ capital.')),
    ev('death', 78, B('۷۷–۷۹ م. (یا ۸۰)', '77–79 CE (or 80)'), 'admin', CTESIPHON, B('مرگ', 'Death'), B('ایرانیکا تاریخ مرگ را ۸۰ م. یا، اگر برخی سکه‌ها از او باشد، کمی زودتر می‌داند.', 'Iranica dates his death to 80 CE, or a little earlier if certain coins are his.'), 'disputed', ['ir-arsacids', 'sellwood'], note('تاریخ پایان پادشاهی به انتساب سکه‌ها بسته است (مک‌داول، لو ریدر، سلوود).', 'The end date depends on how the coins are attributed (McDowell, Le Rider, Sellwood).')),
  ],
  dossier: [
    sec('rise', 'پسر همخوابهٔ یونانی', 'The son of a Greek concubine',
      [['تاسیتوس می‌گوید بلاش از سوی مادر فرزند یک همخوابهٔ یونانی بود و با کناره‌گیری برادرانش شاه شد. او پاکر را بر ماد آتروپاتن گذاشت و تیرداد را برای ارمنستان. بدین‌سان سه پسر ونن دوم سه تخت را در دست گرفتند.'],
        ['Tacitus says Vologases was, on his mother’s side, the son of a Greek concubine and became king when his brothers stood aside. He put Pacorus over Media Atropatene and meant Armenia for Tiridates. So the three sons of Vonones II held three thrones.']],
      [['تاسیتوس «کناره‌گیری» برادران را بی‌خونریزی وصف می‌کند؛ این در تاریخ پارت کم‌یاب است. دادن ولایت‌ها به برادران، ادامهٔ سیاست اردوان دوم بود: قدرت در دست خاندان، اما بخش‌شده.'],
        ['Tacitus describes the brothers’ “retirement” as bloodless, which is rare in Parthian history. Giving provinces to brothers continued Artabanus II’s policy: power kept in the family, but shared out.']],
      [['بخش کردن قدرت میان برادران، به جای کشتن آنان، جانشینی را آرام‌تر کرد. هر جا قدرت پخش شود، رقیبان کمتر به جنگ نیاز دارند.'],
        ['Sharing power among brothers, instead of killing them, made the succession calmer. Where power is spread, rivals have less need to fight.']],
      ['tac-ann', 'ir-arsacids'], {
        quotes: [{ text: 'Vologeses was king of the Parthians; on the mother’s side, he was the offspring of a Greek concubine, and he obtained the throne by the retirement of his brothers.', fa: 'بلاش شاه پارتیان بود؛ از سوی مادر فرزند یک همخوابهٔ یونانی بود و با کناره‌گیری برادرانش به تخت رسید.', ref: 'Tacitus, Annals 12.44', source: 'tac-ann' }],
        photos: ['coin-vologases1'],
      }),
    sec('armenia', 'ارمنستان: ده سال جنگ و چانه‌زنی', 'Armenia: ten years of war and bargaining',
      [['تاسیتوس می‌گوید بلاش نمی‌گذاشت برادرش تیرداد از پادشاهی‌ای که خود به او داده بود محروم شود یا آن را همچون هدیه‌ای از قدرتی بیگانه داشته باشد. نخستین لشکرکشی در زمستان و بیماری شکست خورد. سپس شورش پسرش وردان و شورش گرگان دست او را بست، و کوربولو آرتاشات را گرفت. در ۶۲ م. بلاش سپاه پایتوس را در رندئیا محاصره کرد و رومیان ارمنستان را ترک کردند.'],
        ['Tacitus says Vologases would not let his brother Tiridates lose the kingdom he had given him, or hold it as a gift from a foreign power. The first campaign failed in winter and disease. Then his son Vardanes’ revolt and the revolt of Hyrcania tied his hands, and Corbulo took Artaxata. In 62 CE Vologases surrounded Paetus’ army at Rhandeia and the Romans left Armenia.']],
      [['تاسیتوس می‌گوید بلاش از جنگ با روم دودل بود و به «پیمانی تاکنون ناشکسته» احترام می‌گذاشت. بلاش پس از پیروزی، به جای پافشاری، نرمش نشان داد: خواست فرات مرز بماند و پذیرفت که تیرداد تاج را از روم بگیرد. پژوهشگرانی مانند دومبروا این را سیاستی سنجیده می‌دانند، نه ضعف.'],
        ['Tacitus says Vologases hesitated to fight Rome and “felt reverence for a hitherto unbroken treaty”. After victory, instead of pressing on, he was flexible: he asked for the Euphrates to stay the border and accepted that Tiridates take his crown from Rome. Scholars such as Dąbrowa see this as calculated policy, not weakness.']],
      [['سازش رندئیا به هر دو سو چیزی داد: پارت پادشاه ارمنستان را می‌گزید، روم او را تاج می‌گذاشت. پنجاه سال صلح نتیجه‌اش بود، و صلح یعنی بازرگانی و دارایی ایمن.'],
        ['The Rhandeia compromise gave both sides something: Parthia chose Armenia’s king, Rome crowned him. Fifty years of peace followed, and peace means trade and secure property.']],
      ['tac-ann', 'ir-arsacids', 'dabrowa1983'], {
        quotes: [
          { text: 'For Vologeses would not allow his brother Tiridates to be deprived of a kingdom which he had himself given him, or to hold it as a gift from a foreign power.', fa: 'زیرا بلاش نمی‌گذاشت برادرش تیرداد از پادشاهی‌ای که خود به او داده بود محروم شود، یا آن را همچون هدیه‌ای از قدرتی بیگانه داشته باشد.', ref: 'Tacitus, Annals 13.34', source: 'tac-ann' },
          { text: 'Vologeses, however, sent a message to Corbulo, requiring him to remove the fortresses on the further bank of the Euphrates, and to leave the river to be, as formerly, the boundary between them.', fa: 'اما بلاش پیامی به کوربولو فرستاد و خواست دژهای آن سوی فرات را بردارد و بگذارد رود، مانند گذشته، مرز میان آنان باشد.', ref: 'Tacitus, Annals 15.17', source: 'tac-ann' },
        ],
      }),
    sec('crown', 'تاج در پای پیکرهٔ نرون', 'The crown at the foot of Nero’s statue',
      [['تاسیتوس صحنه را وصف می‌کند: سواران پارتی با درفش‌هایشان در یک سو، لژیون‌های رومی با عقاب‌ها در سوی دیگر، و در میان، پیکرهٔ نرون بر تختی. تیرداد قربانی کرد، تاج را از سر برداشت و در پای پیکره گذاشت. سه سال بعد، در ۶۶ م.، در روم تاج را از دست خود نرون گرفت.'],
        ['Tacitus describes the scene: Parthian cavalry with their banners on one side, Roman legions with their eagles on the other, and between them a statue of Nero on a chair of state. Tiridates sacrificed, took off his crown and set it at the statue’s foot. Three years later, in 66 CE, he received it in Rome from Nero himself.']],
      [['رومیان این را تحقیر پارت دیدند؛ تاسیتوس می‌گوید سربازان فکر کردند تیرداد «کمی بهتر از یک اسیر» به روم می‌رود. اما نتیجهٔ واقعی این بود که خاندان اشکانی سده‌ها در ارمنستان ماند. هر دو سو پیروزی را به شیوهٔ خود روایت کردند.'],
        ['The Romans saw this as Parthia humbled; Tacitus says the soldiers thought Tiridates was going to Rome “little better than a prisoner”. But the real result was that the Arsacid house stayed in Armenia for centuries. Each side told the victory its own way.']],
      [['نمایش قدرت با واقعیت قدرت یکی نیست. سازشی که آبروی هر دو را نگه دارد، از پیروزی‌ای که یکی را خوار کند پایدارتر است.'],
        ['A show of power is not the same as real power. A compromise that saves both sides’ face lasts longer than a victory that humiliates one.']],
      ['tac-ann', 'ir-arsacids'], {
        quotes: [{ text: 'In the midst, on a tribunal, was a chair of state, and on the chair a statue of Nero. To this Tiridates advanced, and having slain the customary victims, he removed the crown from his head, and set it at the foot of the statue.', fa: 'در میان، بر سکویی، تختی بود و بر تخت پیکرهٔ نرون. تیرداد به سوی آن پیش رفت و، پس از قربانی‌های مرسوم، تاج را از سر برداشت و در پای پیکره گذاشت.', ref: 'Tacitus, Annals 15.29', source: 'tac-ann' }],
        photos: ['coin-vologases1-tiara'],
      }),
    sec('vardanes2', 'وردان دوم: پسری که شورید', 'Vardanes II: the son who rebelled',
      [['تاسیتوس تنها یک جمله دارد: در هنگامی که روم آمادهٔ جنگ بود، پسر بلاش، وردان، بر او شورید و پارتیان ارمنستان را رها کردند. سکه‌های سلوکیه به نام وردان دوم نشان می‌دهند که او دست‌کم چند سال، حدود ۵۵–۵۸ م.، در بابل شناخته می‌شد.'],
        ['Tacitus has a single sentence: just as Rome was preparing for war, Vologases’ son Vardanes rose against him and the Parthians left Armenia. Seleucia coins in the name of Vardanes II show he was recognized in Babylonia for at least a few years, c. 55–58 CE.']],
      [['از انگیزه و سرانجام وردان دوم چیزی نمی‌دانیم. برخی گمان می‌کنند شورش گرگان، که چند سال بعد آمد، با او پیوند داشت؛ این تنها گمان است.'],
        ['We know nothing of Vardanes II’s motive or fate. Some suppose the Hyrcanian revolt a few years later was linked to him; that is only a guess.']],
      [['شورش پسر بر پدر نشان می‌دهد که حتی بخش کردن قدرت در خانواده جانشینی را آرام نمی‌کرد، وقتی قاعده‌ای روشن برای آن نبود.'],
        ['A son’s revolt against his father shows that even sharing power within the family could not calm the succession when there was no clear rule for it.']],
      ['tac-ann', 'sellwood'], {
        quotes: [{ text: 'There rose up at this crisis a rival to Vologeses in his son Vardanes, and the Parthians quitted Armenia, apparently intending to defer hostilities.', fa: 'در این هنگام رقیبی برای بلاش در پسرش وردان برخاست، و پارتیان ارمنستان را ترک کردند، گویی می‌خواستند جنگ را به تأخیر بیندازند.', ref: 'Tacitus, Annals 13.7', source: 'tac-ann' }],
      }),
    sec('avesta', 'بلاش و اوستا: یک سنت دیرین', 'Vologases and the Avesta: a later tradition',
      [['دینکرد، کتاب زرتشتی سدهٔ نهم میلادی، می‌گوید شاهی اشکانی به نام «ولخش» (بلاش) فرمان داد پاره‌های پراکندهٔ اوستا، چه نوشته و چه سینه‌به‌سینه، را گرد آورند. کلنس در ایرانیکا این را نخستین کوشش برای بازسازی اوستا می‌شمارد که ساسانیان دنبالش کردند.'],
        ['The Denkard, a ninth-century Zoroastrian book, says an Arsacid king named “Valaxš” (Vologases) had the scattered fragments of the Avesta collected, both written and oral. Kellens in Iranica counts this as the first attempt at restoring the Avesta, which the Sasanians continued.']],
      [['متن نمی‌گوید کدام بلاش. یکی‌انگاری او با بلاش یکم گمانی امروزی است و پنج شاه اشکانی این نام را داشتند. برخی پژوهشگران خود این روایت را ساختهٔ ساسانیان می‌دانند تا گردآوری خود را کهن‌تر نشان دهند. نشانه‌های دینی بر سکه‌های بلاش یکم، مانند آتشدان، این گمان را نیرومندتر می‌کند اما ثابت نمی‌کند.'],
        ['The text does not say which Vologases. Identifying him with Vologases I is a modern guess, and five Arsacid kings bore the name. Some scholars think the story itself was made up by the Sasanians to give their own collection an older pedigree. Religious motifs on Vologases I’s coins, such as a fire altar, make the guess stronger but do not prove it.']],
      [['نگه داشتن یک سنت شفاهی کار جامعه‌ای است که آن را زنده نگه می‌دارد. چه بلاش این کار را کرده باشد چه نه، اوستا به این دلیل ماند که مردمان و موبدان سده‌ها آن را از بر کردند.'],
        ['Keeping an oral tradition alive is the work of the community that carries it. Whether or not Vologases did it, the Avesta survived because people and priests memorized it for centuries.']],
      ['ir-avesta'], { quotes: [] }),
  ],
  synthesis: { title: B('جمع‌بندی', 'Synthesis'), paras: { fa: ['بلاش یکم از دیرپاترین شاهان پارت بود. او جنگ با روم را با سازش به پایان رساند: ارمنستان در خاندان اشکانی ماند و روم آبرویش را نگه داشت. شورش پسر و شورش گرگان نشان می‌دهند که داخل کشور آرام نبود. نسبت گردآوری اوستا به او یک سنت دیرین است، نه یک واقعیت ثابت‌شده.'], en: ['Vologases I was one of the longest-reigning Parthian kings. He ended the war with Rome with a compromise: Armenia stayed in the Arsacid house and Rome kept its face. His son’s revolt and the revolt of Hyrcania show that home was not quiet. Crediting him with collecting the Avesta is a later tradition, not an established fact.'] }, sources: ['tac-ann', 'ir-arsacids', 'ir-avesta'] },
  sources: pick('tac-ann', 'ir-arsacids', 'ir-avesta', 'dabrowa1983', 'sellwood'),
  photos: photos('coin-vologases1', 'coin-vologases1-tiara'),
  related: related(['vonones-ii', 'ونن دوم، پدرش', 'Vonones II, his father'], ['pacorus-ii', 'پاکر دوم، پسرش', 'Pacorus II, his son'], ['gotarzes-ii', 'گودرز دوم', 'Gotarzes II']),
  wikipedia: 'https://en.wikipedia.org/wiki/Vologases_I',
}
