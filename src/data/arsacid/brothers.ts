/**
 * The sons and kin of Artabanus II: Vardanes I (c. 39–45/47), Gotarzes II (c. 40–51) and Vonones II (51).
 * Spine: Tacitus Annals 11.8–10 and 12.10–14 (Church & Brodribb, quoted), Josephus Ant. 20.3.4,
 * Iranica (Schippmann “Arsacids ii”; Boyce “Gōdarz”). The order of succession after 38 is disputed.
 */
import type { Bi, Coord, FeaturedKing } from '../featured/types'
import { ARBELA, BISOTUN, ECBATANA, HYRCANIA, PAR, SELEUCIA, ev, note, photos, pick, related, sec } from './common'

const B = (fa: string, en: string): Bi => ({ fa, en })
/** Tacitus’ rivers Charinda and Sindes are not securely located; these markers are symbolic. */
const CHARINDA: Coord = [55.6, 37.3]
const SINDES: Coord = [60.6, 36.6]

const SUCCESSION = note('ایرانیکا (شیپمان) به پیروی از لو ریدر وردان را جانشین مستقیم اردوان می‌داند (حدود ۳۹–۴۵ م.)؛ کارستت، هانسلیک و دیگران گودرز را جانشین نخست می‌شمارند. بویس گودرز را پسر اردوان و نابرادری وردان می‌داند؛ شیپمان «برادرزادهٔ» اردوان.', 'Iranica (Schippmann), following Le Rider, has Vardanes as Artabanus’ direct successor (c. 39–45 CE); Kahrstedt, Hanslik and others put Gotarzes first. Boyce makes Gotarzes a son of Artabanus and half-brother of Vardanes; Schippmann a “nephew” of Artabanus.')

export const vardanesI: FeaturedKing = {
  slug: 'vardanes-i', name: B('وردان یکم', 'Vardanes I'), dynastyName: PAR,
  reign: B('حدود ۳۹–۴۵ (یا ۴۷) م.', 'c. 39–45 (or 47) CE'),
  title: B('وردان یکم؛ سوار تیزتاز که سلوکیه را گرفت و در شکار کشته شد', 'Vardanes I: the swift rider who took Seleucia and was killed on a hunt'),
  lede: B(
    'پسر اردوان دوم. تاسیتوس او را مردی «همیشه آمادهٔ کارهای بی‌باکانه» می‌نامد. با برادرش گودرز بر سر تخت جنگید، سلوکیهٔ شورشی را پس از هفت سال تسلیم کرد و تا مرز آریان‌ها پیش رفت. اما به گفتهٔ همان تاسیتوس، پیروزی او را «مغرورتر و برای رعیتش تحمل‌ناپذیرتر» کرد، و بزرگان در شکارگاه کشتندش.',
    'A son of Artabanus II. Tacitus calls him “ever ready for daring achievements”. He fought his brother Gotarzes for the throne, made rebel Seleucia surrender after seven years and pushed to the border of the Arians. But, the same Tacitus says, victory made him “the more haughty and more intolerable to his subjects”, and the nobles killed him on a hunt.'),
  stats: [{ n: B('۶۰۰ کم.', '375 mi'), l: B('در دو روز (به گفتهٔ تاسیتوس)', 'in two days (so Tacitus)') }, { n: B('۷', '7'), l: B('سال شورش سلوکیه تا تسلیم', 'years of Seleucia’s revolt before it yielded') }],
  mapTitle: B('نقشه: از سلوکیه تا رود سیندس', 'Map: from Seleucia to the river Sindes'),
  span: [38, 47],
  events: [
    ev('accession', 39, B('حدود ۳۹–۴۰ م.', 'c. 39–40 CE'), 'admin', SELEUCIA, B('جانشینی و نبرد با گودرز', 'Succession and the fight with Gotarzes'), B('پس از مرگ اردوان، وردان و گودرز هر دو مدعی تخت شدند. تاسیتوس: گودرز برادرش اردوان را با زن و پسرش کشته بود؛ مردم ترسیدند و وردان را خواندند، که «۳۷۵ میل را در دو روز» پیمود و گودرز را راند.', 'After Artabanus’ death, Vardanes and Gotarzes both claimed the throne. Tacitus: Gotarzes had killed his brother Artabanus with his wife and son; the people took fright and called in Vardanes, who “traversed 375 miles in two days” and drove Gotarzes off.'), 'disputed', ['tac-ann', 'ir-arsacids', 'ir-godarz'], SUCCESSION),
    ev('seleucia', 42, B('۴۲ م.', '42 CE'), 'campaign', SELEUCIA, B('تسلیم سلوکیه', 'Seleucia surrenders'), B('وردان سلوکیه را محاصره کرد، اما بازگشت گودرز او را از محاصره بازداشت. دو برادر سرانجام آشتی کردند؛ گودرز به گرگان رفت و سلوکیه، به گفتهٔ تاسیتوس «هفت سال پس از شورش»، به وردان تسلیم شد. در ۴۲ م. در سلوکیه برای هر دو برادر سکه زده شد.', 'Vardanes besieged Seleucia, but Gotarzes’ return pulled him away. The brothers were finally reconciled; Gotarzes went to Hyrcania and Seleucia, Tacitus says “seven years after its revolt”, surrendered to Vardanes. In 42 CE coins were struck at Seleucia for both brothers.'), 'secure', ['tac-ann', 'ir-godarz']),
    ev('izates', 43, B('حدود ۴۳–۴۵ م.', 'c. 43–45 CE'), 'admin', ARBELA, B('ایزاتس جنگ با روم را نمی‌پذیرد', 'Izates refuses a war on Rome'), B('یوسفوس: وردان (بردانس) از ایزاتس، شاه آدیابنه، خواست در جنگ با روم همراهش شود. ایزاتس نپذیرفت و وردان آمادهٔ لشکرکشی بر او شد، اما پیش از آن کشته شد.', 'Josephus: Vardanes (Bardanes) asked Izates of Adiabene to join him in a war on Rome. Izates refused and Vardanes prepared to march on him, but was killed first.'), 'probable', ['josephus-ant']),
    ev('charinda', 45, B('حدود ۴۵ م.', 'c. 45 CE'), 'battle', CHARINDA, B('نبرد رود خریندا', 'Battle of the river Charinda'), B('گودرز، به خواهش بزرگان، دوباره سپاه گرد آورد. تاسیتوس: وردان در گذرگاه رود خریندا پیروزی کامل یافت و تیره‌های میان راه را تا رود سیندس، مرز داهه‌ها و آریان‌ها، گشود.', 'Gotarzes, urged by the nobles, raised an army again. Tacitus: Vardanes won a complete victory at the crossing of the river Charinda and subdued the tribes on the way as far as the river Sindes, the border of the Dahae and the Arians.'), 'secure', ['tac-ann'], note('جای این دو رود دانسته نیست؛ نشانه‌ها نمادین‌اند.', 'Neither river is securely located; the markers are symbolic.')),
    ev('sindes', 46, B('حدود ۴۶ م.', 'c. 46 CE'), 'building', SINDES, B('یادمان‌های پیروزی', 'Victory monuments'), B('سپاهیان از جنگ دور ناخشنود شدند. وردان یادمان‌هایی برپا کرد که بر آن‌ها بزرگی‌اش و باجی را که از مردمانی گرفته بود که هیچ اشکانی پیش از او نگرفته بود نوشت.', 'The troops grew tired of distant service. Vardanes set up monuments recording his greatness and the tribute he had won from peoples from whom no Arsacid had won it before.'), 'probable', ['tac-ann'], note('این یادمان‌ها پیدا نشده‌اند.', 'No such monument has been found.')),
    ev('death', 47, B('حدود ۴۵–۴۷ م.', 'c. 45–47 CE'), 'admin', HYRCANIA, B('کشته شدن در شکار', 'Killed on a hunt'), B('تاسیتوس: بزرگان توطئه کردند و او را «هنگامی که غافل و سرگرم شکار بود» کشتند؛ هنوز جوان بود. بویس تاریخ را شاید ۴۷ م. می‌داند.', 'Tacitus: the nobles plotted and killed him “when he was off his guard and intent upon the chase”; he was still young. Boyce puts it perhaps in 47 CE.'), 'probable', ['tac-ann', 'ir-godarz'], note('جای شکارگاه گفته نشده؛ نشانه نمادین است.', 'The place of the hunt is not recorded; the marker is symbolic.')),
  ],
  dossier: [
    sec('rivals', 'دو برادر، یک تخت', 'Two brothers, one throne',
      [['تاسیتوس داستان را چنین می‌گوید: گودرز برادرش اردوان را با زن و پسرش کشت؛ مردم ترسیدند و وردان را خواندند. وردان گودرز را راند، اما گودرز بازگشت. سپس آگاه شدند که بزرگان علیه هر دو توطئه می‌کنند، پس با سوگند در برابر محراب آشتی کردند. گودرز به گرگان رفت. سکه‌های ۴۲ م. از سلوکیه برای هر دو، با لقب «شاه شاهان»، زده شده‌اند.'],
        ['Tacitus tells it like this: Gotarzes killed his brother Artabanus with his wife and son; the people took fright and called in Vardanes. Vardanes drove Gotarzes off, but Gotarzes came back. Then they learned the nobles were plotting against both, so they made peace with oaths at an altar. Gotarzes went to Hyrcania. Coins of 42 CE from Seleucia were struck for both, each as “king of kings”.']],
      [['ترتیب رویدادها و حتی نسبت دو برادر محل بحث است. گزارش تاسیتوس دربارهٔ کشتن اردوانِ برادر را منبع دیگری تأیید نمی‌کند.'],
        ['The order of events, and even how the two were related, is debated. Tacitus’ report of the murder of a brother Artabanus has no other confirmation.']],
      [['هنگامی که دو مدعی هم‌زمان سکه می‌زنند، بازار و شهر باید با دو قدرت کنار بیایند. آشتی برادران نه از مهر، که از ترس توطئهٔ بزرگان بود: توازن قدرت گاه بهتر از سوگند صلح می‌آورد.'],
        ['When two claimants strike coins at the same time, the market and the city have to live with two powers. The brothers’ peace came not from affection but from fear of the nobles’ plot: a balance of power sometimes keeps the peace better than an oath.']],
      ['tac-ann', 'ir-godarz', 'ir-arsacids'], {
        quotes: [{ text: 'Ever ready for daring achievements, Vardanes traversed 375 miles in two days, and drove before him the surprised and terrified Gotarzes.', fa: 'وردان، که همیشه آمادهٔ کارهای بی‌باکانه بود، ۳۷۵ میل را در دو روز پیمود و گودرزِ غافلگیر و هراسان را پیش راند.', ref: 'Tacitus, Annals 11.8', source: 'tac-ann' }],
        photos: ['coin-vardanes1'],
      }),
    sec('seleucia', 'پایان شورش سلوکیه', 'The end of Seleucia’s revolt',
      [['سلوکیه از حدود ۳۶ م. در شورش بود. وردان، به گفتهٔ تاسیتوس، از خشم بر این شهر که با پدرش هم شوریده بود، به محاصره‌اش پرداخت؛ اما شهر بارو و رود و ذخیره داشت. سرانجام، پس از آشتی دو برادر، شهر تسلیم شد.'],
        ['Seleucia had been in revolt since about 36 CE. Vardanes, Tacitus says, angry at a city that had also rebelled against his father, laid siege to it; but the city had walls, a river and supplies. In the end, after the brothers made peace, it surrendered.']],
      [['تاسیتوس که رومی است، این را «مایهٔ شرمساری پارتیان» می‌داند. از دید سلوکیه، هفت سال پایداری بهای نگه‌داشتن نهادهای خودگردانش بود. از سرنوشت شهر پس از تسلیم چیزی نمی‌دانیم.'],
        ['Tacitus, a Roman, calls it “little to the credit of the Parthians”. From Seleucia’s side, seven years of resistance was the price of keeping its self-governing institutions. We know nothing of the city’s fate after it gave in.']],
      [['یک شهر بازرگان با سنا و مجلس مردمی هفت سال در برابر شاهنشاه ایستاد. این نشان می‌دهد که شهروندانی که دارایی و نهاد خود را دارند، چه اندازه برای آزادی‌شان می‌ارزند.'],
        ['A merchant city with a senate and a popular assembly stood up to the King of Kings for seven years. It shows what citizens with their own property and institutions will pay for their freedom.']],
      ['tac-ann'], {
        quotes: [{ text: 'When Vardanes returned, Seleucia capitulated to him, seven years after its revolt, little to the credit of the Parthians, whom a single city had so long defied.', fa: 'چون وردان بازگشت، سلوکیه هفت سال پس از شورشش به او تسلیم شد؛ و این برای پارتیان، که یک شهر این همه مدت در برابرشان ایستاده بود، مایهٔ سرافرازی نبود.', ref: 'Tacitus, Annals 11.9', source: 'tac-ann' }],
      }),
    sec('east', 'تا مرز آریان‌ها، و پایان', 'To the border of the Arians, and the end',
      [['پس از نبرد خریندا، وردان تا رود سیندس پیش رفت. سپاهیان از جنگ دور سر باز زدند. او یادمان‌هایی برپا کرد و بازگشت؛ و به گفتهٔ تاسیتوس، «مغرورتر و برای رعیتش تحمل‌ناپذیرتر از همیشه» شد. بزرگان در شکارگاه او را کشتند.'],
        ['After the battle at the Charinda, Vardanes pushed on to the river Sindes. The troops refused distant service. He set up monuments and came back; and, Tacitus says, became “the more haughty and more intolerable to his subjects than ever”. The nobles killed him on a hunt.']],
      [['تاسیتوس می‌گوید وردان اگر عمر می‌کرد، از کمتر شاهان جوان در نام‌آوری پیش می‌افتاد. این داوری رومی است و بر پایهٔ سنجه‌های رومی: شاه بزرگ همان جنگاور بزرگ است.'],
        ['Tacitus says that, had he lived, few young kings would have matched his fame. That is a Roman verdict on Roman terms: a great king is a great warrior.']],
      [['سربازانی که از جنگ دور سر باز زدند و بزرگانی که شاه مغرور را کشتند، هر دو مرزی بر قدرت شاه می‌گذاشتند. کشتن، راه بدی برای پاسخگو کردن قدرت است؛ اما نبود هر راه دیگر، همین را پیش می‌آورد.'],
        ['The soldiers who refused far-off war and the nobles who killed a haughty king both set limits on royal power. Murder is a bad way to hold power to account; but where there is no other way, this is what happens.']],
      ['tac-ann', 'ir-godarz'], {
        quotes: [{ text: 'So after erecting monuments on which he recorded his greatness, and the tribute won from peoples from whom no Arsacid had won it before, he returned covered with glory, and therefore the more haughty and more intolerable to his subjects than ever.', fa: 'پس از برپا کردن یادمان‌هایی که بر آن‌ها بزرگی‌اش و باجی را که از مردمانی گرفته بود که هیچ اشکانی پیش از او نگرفته بود نوشت، سرافراز بازگشت؛ و از همین رو مغرورتر و برای رعیتش تحمل‌ناپذیرتر از همیشه شد.', ref: 'Tacitus, Annals 11.10', source: 'tac-ann' }],
      }),
  ],
  synthesis: { title: B('جمع‌بندی', 'Synthesis'), paras: { fa: ['وردان یکم شاهی کوتاه‌عمر و پرشتاب بود: جنگ با برادر، گرفتن سلوکیه، لشکرکشی به شرق و مرگ در شکارگاه. تقریباً همهٔ آگاهی ما از تاسیتوس و سکه‌هاست، و حتی ترتیب جانشینی پس از اردوان دوم روشن نیست.'], en: ['Vardanes I was a short-lived, fast-moving king: a war with his brother, the taking of Seleucia, a campaign to the east and death on a hunt. Nearly all we know comes from Tacitus and the coins, and even the order of succession after Artabanus II is unclear.'] }, sources: ['tac-ann', 'ir-godarz', 'ir-arsacids'] },
  sources: pick('tac-ann', 'josephus-ant', 'ir-arsacids', 'ir-godarz', 'sellwood'),
  photos: photos('coin-vardanes1'),
  related: related(['artabanus-ii', 'اردوان دوم، پدرش', 'Artabanus II, his father'], ['gotarzes-ii', 'گودرز دوم، رقیبش', 'Gotarzes II, his rival']),
  wikipedia: 'https://en.wikipedia.org/wiki/Vardanes_I',
}

export const gotarzesII: FeaturedKing = {
  slug: 'gotarzes-ii', name: B('گودرز دوم', 'Gotarzes II'), dynastyName: PAR,
  reign: B('حدود ۴۰–۵۱ م.', 'c. 40–51 CE'),
  title: B('گودرز دوم؛ شاهی که رقیب رومی‌اش را گوش برید', 'Gotarzes II: the king who cut off his Roman rival’s ears'),
  lede: B(
    'رقیب و جانشین وردان. نخست بر «گرگان»، یعنی سرزمین‌های شرق دروازه‌های کاسپی، فرمان راند و پس از کشته شدن وردان بر همهٔ پارت. بزرگان از بیدادش به روم شکایت بردند و مهرداد (مهرداتس)، نوهٔ فرهاد چهارم، را آوردند. گودرز در ۴۹ م. او را شکست داد و گوش‌هایش را برید. پیکره‌ای در بیستون با نام «گودرز» شاید یادگار همین پیروزی باشد.',
    'Vardanes’ rival and successor. He first ruled “Hyrcania”, the lands east of the Caspian Gates, and after Vardanes’ murder all Parthia. The nobles complained of his tyranny to Rome and brought in Meherdates, a grandson of Phraates IV. Gotarzes beat him in 49 CE and cut off his ears. A relief at Bisotun naming a “Gotarzes” may commemorate this victory.'),
  stats: [{ n: B('۴۹', '49'), l: B('سال پیروزی بر مهرداد (م.)', 'year of victory over Meherdates (CE)') }, { n: B('۵۱', '51'), l: B('سال مرگ (م.)', 'year of death (CE)') }],
  mapTitle: B('نقشه: از گرگان تا بیستون', 'Map: from Hyrcania to Bisotun'),
  span: [40, 51],
  events: [
    ev('claim', 40, B('حدود ۴۰ م.', 'c. 40 CE'), 'admin', HYRCANIA, B('ادعای تخت', 'A claim to the throne'), B('بویس: گودرز، پسر دیگر اردوان، برای تخت کوشید و محاصرهٔ سلوکیه به دست وردان را بی‌ثمر کرد. یک سکهٔ کم‌یاب او نوشته‌ای یونانی دارد: «شاه شاهان، ارشکِ معروف به گودرز، [پسر] اردوان».', 'Boyce: Gotarzes, another son of Artabanus, bid for the throne and foiled Vardanes’ siege of Seleucia. A rare coin of his reads in Greek: “King of kings, of Arsaces called Gotarzes, (son) of Artabanus”.'), 'disputed', ['ir-godarz', 'tac-ann'], SUCCESSION),
    ev('hyrcania', 42, B('حدود ۴۲ م.', 'c. 42 CE'), 'admin', HYRCANIA, B('فرمانروای «گرگان»', 'Ruler of “Hyrcania”'), B('آشتی دو برادر: بویس می‌گوید گودرز، هنوز با لقب «شاه شاهان»، بر «گرگان»، یعنی سرزمین‌های پارتی شرق دروازه‌های کاسپی، فرمانروا شد.', 'The brothers’ peace: Boyce says Gotarzes, still as “king of kings”, was given rule over “Hyrcania”, the Parthian lands east of the Caspian Gates.'), 'probable', ['ir-godarz', 'tac-ann']),
    ev('throne', 47, B('حدود ۴۵–۴۷ م.', 'c. 45–47 CE'), 'admin', SELEUCIA, B('شاه همهٔ پارت', 'King of all Parthia'), B('پس از کشته شدن وردان، گودرز تخت را گرفت.', 'After Vardanes was killed, Gotarzes took the throne.'), 'probable', ['ir-godarz', 'tac-ann']),
    ev('embassy', 48, B('۴۷–۴۹ م.', '47–49 CE'), 'admin', SELEUCIA, B('شکایت بزرگان به روم', 'The nobles appeal to Rome'), B('تاسیتوس: فرستادگان پارتی در سنای روم از «استبداد گودرز» سخن گفتند و مهرداد، نوهٔ فرهاد چهارم که در روم گروگان بود، را خواستند. کلادیوس پذیرفت. بویس: سردستهٔ این گروه رئیس خاندان کارن بود.', 'Tacitus: Parthian envoys told the Roman senate of “the despotism of Gotarzes” and asked for Meherdates, a grandson of Phraates IV held in Rome. Claudius agreed. Boyce: the group was led by the head of the house of Karin.'), 'secure', ['tac-ann', 'ir-godarz']),
    ev('meherdates', 49, B('۴۹ م.', '49 CE'), 'battle', BISOTUN, B('پیروزی بر مهرداد', 'Victory over Meherdates'), B('مهرداد از راه ادسا و آدیابنه آمد. گودرز پیش از نبرد در کوهی به نام سنبولوس نیایش کرد، سپس پیروز شد. یاران مهرداد او را رها کردند و او در زنجیر نزد گودرز آورده شد. گودرز گوش‌هایش را برید و زنده‌اش گذاشت.', 'Meherdates came by way of Edessa and Adiabene. Gotarzes prayed on a mountain called Sambulos before battle, then won. Meherdates’ allies deserted him and he was brought to Gotarzes in chains. Gotarzes cut off his ears and let him live.'), 'secure', ['tac-ann', 'ir-godarz', 'ir-arsacids'], note('جای نبرد روشن نیست. ایرانیکا آن را در کردستان می‌گذارد. کوه سنبولوس را برخی بیستون و برخی کرفتو می‌دانند.', 'The battlefield is unknown. Iranica places it in Kurdistan. Mount Sambulos has been identified with Bisotun or with Karafto.')),
    ev('death', 51, B('۵۱ م.', '51 CE'), 'admin', ECBATANA, B('مرگ از بیماری', 'Death from illness'), B('تاسیتوس: «پس از این گودرز بیمار شد و مرد»، و ونن که بر مادها فرمان می‌راند به تخت خوانده شد.', 'Tacitus: “After this Gotarzes fell ill and died”, and Vonones, who then ruled the Medes, was summoned to the throne.'), 'secure', ['tac-ann', 'ir-godarz'], note('جای مرگ گفته نشده؛ نشانه نمادین است.', 'Where he died is not recorded; the marker is symbolic.')),
  ],
  dossier: [
    sec('despot', '«استبداد گودرز»', '“The despotism of Gotarzes”',
      [['تاسیتوس گزارش فرستادگان پارتی به سنای روم را می‌آورد: گودرز برای بزرگان و مردم تحمل‌ناپذیر بود، خویشان دور و نزدیک را کشته بود و حتی زنان باردار و کودکان را، و «در خانه تن‌آسا و در جنگ ناکام»، بیرحمی را پردهٔ ناتوانی‌اش کرده بود.'],
        ['Tacitus gives the Parthian envoys’ speech to the Roman senate: Gotarzes was unbearable to nobles and people alike, had killed near and distant kin, even pregnant wives and children, and, “slothful at home and unsuccessful in war”, used cruelty to hide his weakness.']],
      [['این سخن دشمنان گودرز است، در برابر سنای روم، تا مداخله را توجیه کنند. با این همه، گزارش کشتن خویشان با آنچه از اردوان دوم و دیگر اشکانیان می‌دانیم جور درمی‌آید.'],
        ['This is the speech of Gotarzes’ enemies, before the Roman senate, to justify intervention. Even so, the report of killing kin fits what we know of Artabanus II and other Arsacids.']],
      [['بزرگانی که از شاه خود به قدرتی بیگانه پناه می‌برند، نشان می‌دهند که در داخل راهی برای محدود کردن قدرت نبود. چنین مداخله‌ای کمتر به آزادی و بیشتر به جنگ می‌انجامید.'],
        ['Nobles who turn to a foreign power against their own king show that there was no way to limit power at home. Such intervention led less to freedom than to war.']],
      ['tac-ann', 'ir-godarz'], {
        quotes: [{ text: 'Already brothers, relatives, and distant kin had been swept off by murder after murder; wives actually pregnant, and tender children were added to Gotarzes’ victims, while, slothful at home and unsuccessful in war, he made cruelty a screen for his feebleness.', fa: 'برادران و خویشان و خویشان دور یکی پس از دیگری کشته شده بودند؛ زنان باردار و کودکان خردسال نیز بر قربانیان گودرز افزوده شدند، و او، در خانه تن‌آسا و در جنگ ناکام، بیرحمی را پردهٔ ناتوانی‌اش کرد.', ref: 'Tacitus, Annals 12.10 (the Parthian envoys)', source: 'tac-ann' }],
        photos: ['coin-gotarzes2'],
      }),
    sec('meherdates', 'مهرداد، شاه رومی‌پرورده', 'Meherdates, the Roman-bred king',
      [['کلادیوس مهرداد را با پند دربارهٔ فرمانروایی میانه‌رو فرستاد. فرماندار سوریه، کاسیوس، تا فرات همراهیش کرد. مهرداد وقت را در ادسا از دست داد، از راه ارمنستان و آدیابنه پیش رفت و گودرز را در کوه سنبولوس یافت. تاسیتوس از آیین هرکول در این کوه می‌گوید: خدا در خواب به کاهنان می‌فرماید اسبانی با ترکش پر برای شکار آماده کنند و اسبان شب با ترکش‌های خالی بازمی‌گردند.'],
        ['Claudius sent Meherdates off with advice on moderate rule. Cassius, governor of Syria, escorted him to the Euphrates. Meherdates lost time at Edessa, went on through Armenia and Adiabene and found Gotarzes at Mount Sambulos. Tacitus describes a cult of Hercules on this mountain: the god tells the priests in a dream to equip horses with full quivers for the hunt, and the horses come back at night with empty quivers.']],
      [['«هرکول» تاسیتوس احتمالاً نام یونانی ایزدی ایرانی، شاید ورثرغنه (بهرام)، است. این یکی‌انگاری از پژوهشگران امروز است، نه از تاسیتوس.'],
        ['Tacitus’ “Hercules” is probably the Greek name for an Iranian god, perhaps Verethragna (Bahram). That identification is modern, not Tacitus’.']],
      [['شاهی که روم برای پارتیان فرستاد، بی پشتیبانی واقعی در کشور، به سرعت تنها ماند. قدرتی که از بیرون تحمیل شود، دوام نمی‌آورد.'],
        ['The king Rome sent to the Parthians, with no real support at home, was soon left alone. Power imposed from outside does not last.']],
      ['tac-ann', 'ir-godarz'], {
        quotes: [
          { text: 'Gotarzes meantime was offering vows to the local divinities on a mountain called Sambulos, with special worship of Hercules, who at a stated time bids the priests in a dream equip horses for the chase and place them near his temple.', fa: 'گودرز در این میان در کوهی به نام سنبولوس برای ایزدان آن سرزمین نذر می‌کرد، به‌ویژه برای هرکول، که در زمانی معین در خواب به کاهنان می‌فرماید اسبانی برای شکار آماده کنند و کنار پرستشگاهش بگذارند.', ref: 'Tacitus, Annals 12.13', source: 'tac-ann' },
          { text: 'Gotarzes taunted him with being no kinsman of his or of the Arsacids, but a foreigner and a Roman, and having cut off his ears, bade him live, a memorial of his own clemency, and a disgrace to us.', fa: 'گودرز او را سرزنش کرد که نه خویش اوست و نه از اشکانیان، بلکه بیگانه و رومی است؛ و گوش‌هایش را برید و زنده‌اش گذاشت، تا یادگار بخشایش او و مایهٔ ننگ ما باشد.', ref: 'Tacitus, Annals 12.14', source: 'tac-ann' },
        ],
        photos: ['coin-meherdates'],
      }),
    sec('bisotun', 'پیکرهٔ «گودرز» در بیستون', 'The “Gotarzes” relief at Bisotun',
      [['در بیستون، کنار پیکرهٔ منسوب به مهرداد دوم، پیکره‌ای پارتی سواری را نشان می‌دهد که با نیزه می‌تازد و نیکه، ایزدبانوی پیروزی، بالای سرش است. نوشته‌ای یونانی او را «گوتارزس گئوپوتروس» می‌نامد. هرتسفلد آن را یادگار پیروزی گودرز دوم بر مهرداد دانست؛ شومون این یکی‌انگاری را رد کرد.'],
        ['At Bisotun, beside the relief attributed to Mithridates II, a Parthian relief shows a rider charging with a lance, with Nike, the goddess of victory, above him. A Greek inscription names him “Gotarzes Geopothros”. Herzfeld took it as Gotarzes II’s victory over Meherdates; Chaumont rejected the identification.']],
      [['بویس پیوند این نام با گودرز و گیو در شاهنامه را یادآوری می‌کند. این پیوند افسانه‌ای است، نه سند تاریخی: داستان‌های حماسی بعدها شاید نام‌های پارتی را نگه داشته باشند.'],
        ['Boyce notes the link between this name and Gōdarz and Gēv in the Shahnameh. That link is legend, not historical evidence: the later epic may have kept Parthian names.']],
      [['پیکره‌ای که روزگاری فرمان شاه بود، امروز میراث همهٔ مردم است. پاسداری از آن، و بحث آزاد دربارهٔ معنایش، کار جامعه است، نه حکومت تنها.'],
        ['A relief once made by a king’s order is now everyone’s heritage. Guarding it, and debating its meaning freely, is society’s work, not the state’s alone.']],
      ['ir-godarz', 'ir-arsacids'], { photos: ['bisotun-gotarzes'] }),
  ],
  synthesis: { title: B('جمع‌بندی', 'Synthesis'), paras: { fa: ['گودرز دوم از جنگ با برادر به تخت رسید و با شکست دادن نامزد رومی آن را نگه داشت. تصویر او را دشمنانش در سنای روم ساخته‌اند؛ سکه‌ها و شاید پیکرهٔ بیستون تنها نشانه‌های خود اویند.'], en: ['Gotarzes II reached the throne through war with his brother and kept it by beating Rome’s candidate. His picture was drawn by his enemies before the Roman senate; the coins, and perhaps the Bisotun relief, are the only traces of his own.'] }, sources: ['tac-ann', 'ir-godarz'] },
  sources: pick('tac-ann', 'ir-arsacids', 'ir-godarz', 'sellwood'),
  photos: photos('coin-gotarzes2', 'coin-meherdates', 'bisotun-gotarzes'),
  related: [...related(['vardanes-i', 'وردان یکم، رقیبش', 'Vardanes I, his rival'], ['vonones-ii', 'ونن دوم، جانشینش', 'Vonones II, his successor']), { href: { fa: '/place/bisotun', en: '/en/place/bisotun' }, label: { fa: 'بیستون: کوه، نقش و کتیبه', en: 'Bisotun: the mountain, relief and inscription' } }],
  wikipedia: 'https://en.wikipedia.org/wiki/Gotarzes_II',
}

export const vononesII: FeaturedKing = {
  slug: 'vonones-ii', name: B('ونن دوم', 'Vonones II'), dynastyName: PAR,
  reign: B('۵۱ م. (چند ماه)', '51 CE (a few months)'),
  title: B('ونن دوم؛ شاه چندماهه، پدر بلاش', 'Vonones II: the king of a few months, father of Vologases'),
  lede: B(
    'فرمانروای ماد آتروپاتن که پس از مرگ گودرز دوم به تخت خوانده شد و چند ماه بعد درگذشت. تاسیتوس می‌گوید او «نه به نیک‌بختی نام‌آور شد و نه به بدبختی». مهم‌ترین کارش این بود که پدر بلاش یکم، یکی از دیرپاترین شاهان پارت، بود.',
    'The ruler of Media Atropatene, called to the throne after Gotarzes II died, who died himself a few months later. Tacitus says he “was memorable neither for his good nor bad fortune”. His main legacy is that he was the father of Vologases I, one of the longest-reigning Parthian kings.'),
  stats: [{ n: B('<۱', '<1'), l: B('سال پادشاهی', 'year of reign') }, { n: B('۳', '3'), l: B('پسر شاه‌شده: بلاش، تیرداد، پاکر', 'sons who became kings: Vologases, Tiridates, Pacorus') }],
  mapTitle: B('نقشه: ماد و تیسفون', 'Map: Media and Ctesiphon'),
  span: [51, 51],
  events: [
    ev('media', 51, B('پیش از ۵۱ م.', 'before 51 CE'), 'admin', [46.3, 37.4], B('فرمانروای ماد', 'Ruler of Media'), B('تاسیتوس می‌گوید ونن «که آن هنگام بر مادها فرمان می‌راند» به تخت خوانده شد. ایرانیکا (شیپمان) او را برادر اردوان دوم و «شاه ارمنستان» می‌نامد.', 'Tacitus says Vonones, “who then ruled the Medes”, was summoned to the throne. Iranica (Schippmann) calls him a brother of Artabanus II and “king of Armenia”.'), 'disputed', ['tac-ann', 'ir-arsacids', 'ir-godarz'], note('بیشتر پژوهشگران او را شاه ماد آتروپاتن می‌دانند. بویس او را «احتمالاً پسر» گودرز می‌نامد. نسبتش با اردوان و گودرز روشن نیست.', 'Most scholars make him king of Media Atropatene. Boyce calls him “presumed to be” Gotarzes’ son. His relation to Artabanus and Gotarzes is unclear.')),
    ev('reign', 51, B('۵۱ م.', '51 CE'), 'admin', ECBATANA, B('پادشاهی کوتاه', 'A short reign'), B('ونن چند ماه فرمان راند. سکه‌ای از او از ضرابخانهٔ هگمتانه شناخته شده است. پس از او پسرش بلاش به تخت نشست.', 'Vonones ruled for a few months. A coin of his from the Ecbatana mint is known. After him his son Vologases took the throne.'), 'probable', ['tac-ann', 'ir-arsacids', 'sellwood'], note('ایرانیکا روشن نمی‌داند که ونن واقعاً بر تخت نشست یا بلاش مستقیماً جانشین گودرز شد.', 'Iranica says it is not clear whether Vonones actually reigned or Vologases succeeded Gotarzes directly.')),
  ],
  dossier: [
    sec('reign', 'شاهی که تاسیتوس فراموشش کرد', 'The king Tacitus shrugged off',
      [['همهٔ آنچه منابع ادبی دربارهٔ ونن دوم می‌گویند در یک جملهٔ تاسیتوس است: پس از مرگ گودرز به تخت خوانده شد، پادشاهی کوتاه و بی‌شکوهی داشت و پسرش بلاش جانشینش شد. سکه‌ای از هگمتانه به نام او نسبت داده شده است.'],
        ['All the literary sources say about Vonones II is in one sentence of Tacitus: he was summoned to the throne after Gotarzes died, had a short and inglorious reign, and his son Vologases succeeded him. A coin from Ecbatana is attributed to him.']],
      [['تاسیتوس بلاش را پسر ونن و یک «همخوابهٔ یونانی» می‌نامد و می‌گوید بلاش با کناره‌گیری برادرانش شاه شد. پس ونن دست‌کم سه پسر داشت که هر سه شاه شدند: بلاش در پارت، تیرداد در ارمنستان و پاکر در ماد آتروپاتن.'],
        ['Tacitus calls Vologases the son of Vonones and a “Greek concubine”, and says he became king when his brothers stood aside. So Vonones had at least three sons who all became kings: Vologases in Parthia, Tiridates in Armenia and Pacorus in Media Atropatene.']],
      [['پادشاهی کوتاه و آرام ونن، پس از سال‌ها جنگ خانگی، شاید خودش دستاوردی بود: جانشینی بی‌خونریزی، که در تاریخ پارت کم‌یاب است.'],
        ['Vonones’ short, quiet reign after years of civil war may itself have been an achievement: a succession without bloodshed, rare in Parthian history.']],
      ['tac-ann', 'ir-arsacids', 'ir-godarz'], {
        quotes: [{ text: 'He was memorable neither for his good nor bad fortune; he completed a short and inglorious reign, and then the empire of Parthia passed to his son Vologeses.', fa: 'او نه به نیک‌بختی نام‌آور شد و نه به بدبختی؛ پادشاهی کوتاه و بی‌شکوهی را به پایان برد، و سپس شاهنشاهی پارت به پسرش بلاش رسید.', ref: 'Tacitus, Annals 12.14', source: 'tac-ann' }],
        photos: ['coin-vonones2'],
      }),
  ],
  synthesis: { title: B('جمع‌بندی', 'Synthesis'), paras: { fa: ['ونن دوم یکی از کم‌شناخته‌ترین شاهان اشکانی است. اهمیتش در پیوندی است که میان آشفتگی پس از اردوان دوم و پادشاهی دراز بلاش یکم برقرار کرد.'], en: ['Vonones II is one of the least known Arsacid kings. His importance is the bridge he made between the turmoil after Artabanus II and the long reign of Vologases I.'] }, sources: ['tac-ann', 'ir-arsacids'] },
  sources: pick('tac-ann', 'ir-arsacids', 'ir-godarz', 'sellwood'),
  photos: photos('coin-vonones2'),
  related: related(['gotarzes-ii', 'گودرز دوم، پیشینش', 'Gotarzes II, his predecessor'], ['vologases-i', 'بلاش یکم، پسرش', 'Vologases I, his son']),
  wikipedia: 'https://en.wikipedia.org/wiki/Vonones_II',
}
