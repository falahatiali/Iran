/**
 * Mahmud b. Sebüktegin of Ghazna, ruled 998–1030 CE.
 * Spine: C. E. Bosworth, "Maḥmud b. Sebüktegin" and "Ghaznavids" (Encyclopaedia Iranica).
 */
import type { Coord, DossierSection, FeaturedKing, FeaturedSource } from '../featured/types'
import type { CommonsPhoto } from '../places/types'
import { ev, note, sec } from '../late-achaemenid/common'

const B = (fa: string, en: string) => ({ fa, en })
const GHAZNA: Coord = [68.42, 33.55]
const NISHAPUR: Coord = [58.8, 36.21]
const ZARANG: Coord = [61.88, 31.0]
const WAYHIND: Coord = [72.43, 34.03]
const MULTAN: Coord = [71.47, 30.2]
const BALKH: Coord = [66.9, 36.76]
const GORGANJ: Coord = [59.15, 42.33]
const SOMNATH: Coord = [70.4, 20.89]
const RAY: Coord = [51.43, 35.59]
const LAHORE: Coord = [74.35, 31.55]

export const mahmudSources: FeaturedSource[] = [
  { id: 'iranica-mahmud', author: 'C. E. Bosworth, Encyclopaedia Iranica', title: 'Maḥmud b. Sebüktegin', year: '2012, updated 2015', url: 'https://www.iranicaonline.org/articles/mahmud-b-sebuktegin/', note: { fa: 'ستون اصلی این صفحه؛ تاریخ‌ها، جاها و رقم‌ها از این مقاله است.', en: 'The spine of this page; the dates, places and figures come from this article.' } },
  { id: 'iranica-ghaznavids', author: 'C. E. Bosworth, Encyclopaedia Iranica', title: 'Ghaznavids', year: '2001, updated 2013', url: 'https://www.iranicaonline.org/articles/ghaznavids/', note: { fa: 'دربارهٔ خاستگاه دودمان و سرنوشت آن پس از محمود.', en: 'On the dynasty’s origins and its fate after Mahmud.' } },
  { id: 'otbi', author: 'al-ʿOtbi', title: 'Taʾriḵ al-Yamini', year: 'c. 1020', note: { fa: 'تاریخ درباری هم‌روزگار محمود.', en: 'A contemporary court history of Mahmud.' } },
  { id: 'gardizi', author: 'Gardizi', title: 'Zayn al-aḵbār', year: 'c. 1050', note: { fa: 'تاریخ فارسی نزدیک به روزگار محمود.', en: 'A Persian history written soon after Mahmud.' } },
]
export const mahmudSourceIds = new Set(mahmudSources.map((s) => s.id))

const f = (name: string) => `https://commons.wikimedia.org/wiki/File:${name}`
/** Licence and author read from the Commons API on 2026-10-31. */
export const mahmudPhotos: CommonsPhoto[] = [
  { id: 'tomb', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Entrance_of_Mahmoud_%28_998-1030%29_Mausoleum%2C_Ghazni_%2C_Afghanistan._Fr%C3%A9d%C3%A9ric_Gadmer%2C_1928.jpg/960px-Entrance_of_Mahmoud_%28_998-1030%29_Mausoleum%2C_Ghazni_%2C_Afghanistan._Fr%C3%A9d%C3%A9ric_Gadmer%2C_1928.jpg', page: f('Entrance_of_Mahmoud_(_998-1030)_Mausoleum,_Ghazni_,_Afghanistan._Frédéric_Gadmer,_1928.jpg'), author: 'Frédéric Gadmer', license: 'Public domain', licenseUrl: 'https://commons.wikimedia.org/wiki/Commons:Public_domain', caption: B('درِ آرامگاه محمود در غزنه، عکس فردریک گادمر، ۱۹۲۸. به گفتهٔ باسورث، آرامگاه بعدها افزوده‌هایی یافته است.', 'The entrance of Mahmud’s tomb at Ghazna, photographed by Frédéric Gadmer, 1928. Bosworth notes the tomb seems to have later additions.') },
  { id: 'somnath', src: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Somnath_temple_ruins_%281869%29.jpg', page: f('Somnath_temple_ruins_(1869).jpg'), author: 'D. H. Sykes', license: 'Public domain', licenseUrl: 'https://commons.wikimedia.org/wiki/Commons:Public_domain', caption: B('ویرانه‌های معبد سومنات، عکس ۱۸۶۹', 'The ruins of the Somnath temple, photographed in 1869') },
]

const sketch = note('منابع راه‌ها را نمی‌گویند؛ خط‌ها طرح‌وارند.', 'The sources give no routes; the lines are sketches.')
const noPlace = (fa: string, en: string) => note(`رویداد قطعی است، اما ${fa}؛ نقطه طرح‌وار است.`, `The event is secure, but ${en}; the marker is a sketch.`)
export const mahmudEvents = [
  ev('khorasan-command', 994, B('۹۹۴–۹۹۵ م', '994–995 CE'), 'campaign', NISHAPUR, B('فرماندهٔ سپاه خراسان', 'Commander of the Khorasan army'), B('در کنار پدرش سبکتگین با سرداران شورشی جنگید و امیر سامانی نوح دوم او را فرماندهٔ سپاه خراسان کرد و لقب سیف‌الدوله داد.', 'He fought the rebel generals beside his father Sebüktegin, and the Samanid amir Nuh II made him commander of the army of Khorasan with the title Sayf al-Dawla.'), 'secure', ['iranica-mahmud'], { route: [GHAZNA, NISHAPUR], ...sketch }),
  ev('throne', 998, B('۹۹۸ م', '998 CE'), 'battle', GHAZNA, B('نبرد بیرون غزنه', 'Battle outside Ghazna'), B('سبکتگین برادر کوچک‌ترش اسماعیل را جانشین کرده بود. محمود با یاری برادرش نصر، اسماعیل را بیرون غزنه شکست داد و بر تخت نشست.', 'Sebüktegin had named a younger son, Esma‘il, as heir. With the help of his brother Nasr, Mahmud defeated Esma‘il outside Ghazna and took the throne.'), 'secure', ['iranica-mahmud', 'otbi']),
  ev('caliph', 999, B('۹۹۹ م', '999 CE'), 'admin', NISHAPUR, B('جدایی از سامانیان', 'Break with the Samanids'), B('بگتوزون را از خراسان بیرون راند، از سامانیان برید و برای خلیفه القادر فتح‌نامه فرستاد. خلیفه منشور همهٔ سرزمین‌هایش و لقب یمین‌الدوله را برایش فرستاد.', 'He drove Begtuzun out of Khorasan, broke with the Samanids and sent a victory announcement to the caliph al-Qader, who sent an investiture for all his lands and the title Yamin al-Dawla.'), 'secure', ['iranica-mahmud', 'iranica-ghaznavids']),
  ev('wayhind', 1001, B('۱۰۰۱ م', '1001 CE'), 'battle', WAYHIND, B('حمله به ویهند', 'Wayhind attacked'), B('به راجه جیپال، پادشاه هندوشاهی در ویهند بر سند میانه، حمله کرد. لشکرکشی‌های هندی او را معمولاً هفده می‌شمارند.', 'He attacked Raja Jaypal, the Hindushahi king at Wayhind on the middle Indus. His Indian campaigns are usually counted at seventeen.'), 'secure', ['iranica-mahmud'], { route: [GHAZNA, WAYHIND], ...sketch }),
  ev('sistan', 1002, B('۱۰۰۲–۱۰۰۳ م', '1002–1003 CE'), 'campaign', ZARANG, B('زرنگ و پایان صفاریان', 'Zarang and the end of the Saffarids'), B('خلف بن احمد صفاری شکست خورد و سیستان به فرمانداری برادر محمود، نصر، سپرده شد.', 'The Saffarid Khalaf b. Ahmad was defeated and Sistan was given to Mahmud’s brother Nasr to govern.'), 'secure', ['iranica-mahmud'], { route: [GHAZNA, ZARANG], ...sketch }),
  ev('multan', 1006, B('۱۰۰۶ و ۱۰۱۰ م', '1006 and 1010 CE'), 'battle', MULTAN, B('مولتان', 'Multan'), B('دو یورش به مولتان به فرمانروایی امیر اسماعیلی آن پایان داد و با کشتار مردم همراه بود.', 'Two raids on Multan ended the rule of its Isma‘ili chief and were accompanied by slaughter of the local population.'), 'secure', ['iranica-mahmud', 'gardizi'], { route: [GHAZNA, MULTAN], ...sketch }),
  ev('ilak', 1008, B('۱۰۰۸ م', '1008 CE'), 'battle', BALKH, B('پس‌راندن قراخانیان', 'The Qarakhanids driven back'), B('وقتی محمود در هند بود، ایلک بلخ و هرات را گرفته بود. در ۱۰۰۸ ارسلان ایلک را شکست داد و جیحون مرز قطعی دو دولت شد.', 'While Mahmud was in India the Ilak had taken Balkh and Herat. In 1008 he defeated Arslan Ilak, and the Oxus became the fixed frontier.'), 'probable', ['iranica-mahmud'], { route: [MULTAN, GHAZNA, BALKH], ...noPlace('جای نبرد در مقاله نیامده', 'the article gives no battlefield') }),
  ev('khwarazm', 1017, B('۱۰۱۷ م', '1017 CE'), 'campaign', GORGANJ, B('گرفتن خوارزم', 'Khwarazm annexed'), B('سپاه غزنوی خوارزم را گرفت، دودمان مأمونی را برانداخت و، به گفتهٔ باسورث، «حکومت وحشت» برقرار کرد. بیرونی از آنجا به غزنه برده شد.', 'A Ghaznavid army invaded Khwarazm, ended the Ma’munid line and, Bosworth says, began “a reign of terror”. Biruni was brought from there to Ghazna.'), 'secure', ['iranica-mahmud'], { route: [BALKH, GORGANJ], ...sketch }),
  ev('somnath', 1025, B('۱۰۲۵–۱۰۲۶ م', '1025–1026 CE'), 'battle', SOMNATH, B('سومنات', 'Somnath'), B('از بیابان تار گذشت و معبد سومنات را محاصره و غارت کرد. غنیمت را «گفته‌اند» ۲۰ میلیون دینار بود. خلیفه لقب تازه‌ای به او داد.', 'He crossed the Thar desert and besieged and plundered the temple of Somnath. The booty is “said to” have been 20 million dinars. The caliph gave him a new title.'), 'secure', ['iranica-mahmud', 'gardizi'], { route: [GHAZNA, MULTAN, SOMNATH], ...sketch }),
  ev('ray', 1029, B('۱۰۲۹ م', '1029 CE'), 'campaign', RAY, B('ری', 'Ray'), B('مجدالدولهٔ بویهی از او یاری خواست. محمود ری را گرفت، مجدالدوله را برکنار کرد، بخش بزرگی از کتابخانهٔ ری را سوزاند و «بددینان» را سنگسار کرد.', 'The Buyid Majd al-Dawla asked him for help. Mahmud took Ray, deposed Majd al-Dawla, had a large part of its library burned and had alleged heretics stoned.'), 'secure', ['iranica-mahmud', 'gardizi'], { route: [GHAZNA, NISHAPUR, RAY], ...sketch }),
  ev('death', 1030, B('۳۰ آوریل ۱۰۳۰ م', '30 April 1030 CE'), 'admin', GHAZNA, B('مرگ در غزنه', 'Death at Ghazna'), B('در پنجاه‌ونه‌سالگی در غزنه درگذشت.', 'He died at Ghazna aged fifty-nine.'), 'secure', ['iranica-mahmud'], { route: [RAY, NISHAPUR, GHAZNA], ...sketch }),
]

const campaignEvents = [
  ev('c-ghazna', 998, B('۹۹۸ م', '998 CE'), 'battle', GHAZNA, B('غزنه', 'Ghazna'), B('پیروزی بر اسماعیل و تخت.', 'Victory over Esma‘il; the throne.'), 'secure', ['iranica-mahmud']),
  ev('c-nishapur', 999, B('۹۹۹ م', '999 CE'), 'campaign', NISHAPUR, B('خراسان', 'Khorasan'), B('جدایی از سامانیان.', 'Break with the Samanids.'), 'secure', ['iranica-mahmud'], { route: [GHAZNA, NISHAPUR], ...sketch }),
  ev('c-wayhind', 1001, B('۱۰۰۱ م', '1001 CE'), 'battle', WAYHIND, B('ویهند', 'Wayhind'), B('نخستین یورش بزرگ به هند.', 'The first great raid into India.'), 'secure', ['iranica-mahmud'], { route: [NISHAPUR, GHAZNA, WAYHIND], ...sketch }),
  ev('c-multan', 1006, B('۱۰۰۶ م', '1006 CE'), 'battle', MULTAN, B('مولتان', 'Multan'), B('یورش به مولتان.', 'The raid on Multan.'), 'secure', ['iranica-mahmud'], { route: [WAYHIND, MULTAN], ...sketch }),
  ev('c-balkh', 1008, B('۱۰۰۸ م', '1008 CE'), 'battle', BALKH, B('بلخ', 'Balkh'), B('قراخانیان پس رانده می‌شوند.', 'The Qarakhanids driven back.'), 'probable', ['iranica-mahmud'], { route: [MULTAN, GHAZNA, BALKH], ...noPlace('جای نبرد نیامده', 'no battlefield is given') }),
  ev('c-khwarazm', 1017, B('۱۰۱۷ م', '1017 CE'), 'campaign', GORGANJ, B('خوارزم', 'Khwarazm'), B('گرفتن گرگانج.', 'Gorganj taken.'), 'secure', ['iranica-mahmud'], { route: [BALKH, GORGANJ], ...sketch }),
  ev('c-somnath', 1025, B('۱۰۲۵ م', '1025 CE'), 'battle', SOMNATH, B('سومنات', 'Somnath'), B('غارت معبد.', 'The temple plundered.'), 'secure', ['iranica-mahmud'], { route: [GHAZNA, MULTAN, SOMNATH], ...sketch }),
  ev('c-ray', 1029, B('۱۰۲۹ م', '1029 CE'), 'campaign', RAY, B('ری', 'Ray'), B('پایان آل‌بویه در ری.', 'The end of Buyid Ray.'), 'secure', ['iranica-mahmud'], { route: [GHAZNA, NISHAPUR, RAY], ...sketch }),
]

export const mahmudDossier: DossierSection[] = [
  sec('sources', 'منابع: غازی یا غارتگر؟', 'Sources: holy warrior or plunderer?',
    [['تاریخ‌نگاران درباری مانند عتبی و گردیزی محمود را «بت‌شکن» و یاور خلیفه نشان دادند. باسورث می‌گوید این تصویر تا سدهٔ سیزدهم در ادبیات فارسی جا افتاد. در ۱۹۲۶ محمد حبیب، استاد دانشگاه علیگر، نوشت انگیزهٔ محمود غارت بود، نه دین، و سیل دشنام بر او بارید.'], ['Court historians such as ‘Otbi and Gardizi presented Mahmud as an idol-breaker and champion of the caliph. Bosworth says this image was fixed in Persian literature by the thirteenth century. In 1926 Mohammad Habib of Aligarh argued that Mahmud’s motive was plunder, not faith, and drew a torrent of abuse.']],
    [['باسورث با حبیب هم‌نظر است: انگیزهٔ اصلی یورش‌ها «آشکارا مالی بود نه دینی». هندوها به زور مسلمان نشدند و بسیاری از سربازان هندی محمود خود نامسلمان ماندند. تصویر «غازی» را تبلیغ درباری و افسانه‌سازی پسین می‌دانیم.'], ['Bosworth agrees with Habib: the raids’ primary motive was “clearly financial rather than religious”. Hindus were not converted en masse, and many of Mahmud’s own Indian soldiers stayed non-Muslim. We treat the “holy warrior” image as court propaganda and later legend.']],
    [['محمود هنوز در جنوب آسیا قهرمان دینی است و در هند نماد ویرانگری. هر دو تصویر بیشتر دربارهٔ امروز سخن می‌گویند تا سدهٔ یازدهم.'], ['Mahmud is still a religious hero in parts of South Asia and a symbol of destruction in India. Both images say more about today than about the eleventh century.']],
    ['iranica-mahmud', 'otbi', 'gardizi'], { photos: ['tomb'] }),
  sec('court', 'دربار: فارسی، بیرونی و فردوسی', 'The court: Persian, Biruni and Ferdowsi',
    [['محمود دیوانی از دبیران کاردان ایرانی داشت، با وزیرانی چون احمد بن حسن میمندی و حسنک. شاعران فارسی‌گو مانند فرخی و عنصری او را ستودند؛ فردوسی هم «برای زمانی کوتاه» به دربارش آمد. بیرونی پس از گرفتن خوارزم به غزنه برده شد و نزدیک سی سال در خدمت غزنویان ماند.'], ['Mahmud ran an administration of capable Persian secretaries, with viziers such as Ahmad b. Hasan Maymandi and Hasanak. Persian poets such as Farrokhi and ‘Onsori praised him; Ferdowsi too came to his court “for a short time”. Biruni was brought to Ghazna after the conquest of Khwarazm and served there for some thirty years.']],
    [['داستان‌های پسین دربارهٔ خسّت محمود با فردوسی را افسانه می‌دانیم و نیاورده‌ایم؛ منابعی که خوانده‌ایم آن‌ها را تأیید نمی‌کنند. بیرونی را «برده‌اند»، نه دعوت کرده‌اند: پشتیبانی فرهنگی هم از غنیمت جنگی جدا نبود.'], ['We treat the later stories of Mahmud’s meanness to Ferdowsi as legend and leave them out; the sources we read do not confirm them. Biruni was “brought”, not invited: cultural patronage, too, was part of the spoils of war.']],
    [['زبان فارسی در دربار یک ترک‌تبار بالید؛ فرهنگ ایرانی را تبار فرمانروا نمی‌ساخت.'], ['Persian flourished at the court of a ruler of Turkish slave descent; Iranian culture was not made by the ruler’s ancestry.']],
    ['iranica-mahmud']),
  sec('property', 'دارایی: دولتی که با غنیمت می‌چرخید', 'Property: a state that ran on plunder',
    [['باسورث می‌نویسد دولت متمرکز غزنوی با سپاه بزرگ حرفه‌ای «بسیار پرهزینه» بود. دولت «سخت بر مردم غیرنظامی فشار می‌آورد» و محمود «خودکامه‌ای سرسخت» بود که رعیت را تنها «منبع درآمد» می‌دید. مالیات با گنج معابد هند و شمار بسیاری اسیر هندی تکمیل می‌شد؛ با این ثروت سکهٔ زر و سیم خوب نگه داشته شد و غزنه با مسجد و بنا آراسته شد.'], ['Bosworth writes that the centralised Ghaznavid state, with its large professional army, was “extremely expensive”. It “bore down hard on its civilian population”, and Mahmud was “an unyielding despot unconcerned about his subjects except as sources of revenue”. Taxation was supplemented by Hindu temple treasures and large numbers of Indian captives; this wealth kept a high-standard gold and silver coinage and beautified Ghazna.']],
    [['این خوانش ماست: دولت محمود دارایی نمی‌ساخت، می‌گرفت. از رعیت خود مالیات سنگین و از همسایگان گنج و انسان. چنین دولتی برای زنده ماندن باید پیوسته بجنگد؛ و همین که جنگ‌افزار آن در دندانقان شکست، امپراتوری فروریخت. سوزاندن کتابخانهٔ ری نشان می‌دهد که حتی دارایی فکری هم ایمن نبود.'], ['This is our reading: Mahmud’s state did not create property; it took it. Heavy taxes from its own subjects, treasure and people from its neighbours. Such a state must keep fighting to survive; once its war machine broke at Dandanqan, the empire collapsed. Burning the library of Ray shows that even intellectual property was not safe.']],
    [['ثروتی که با غارت به دست آید، کشوری آباد نمی‌سازد؛ تنها جنگ بعدی را می‌خرد.'], ['Wealth gained by plunder does not build a prosperous country; it only pays for the next war.']],
    ['iranica-mahmud', 'iranica-ghaznavids'], { photos: ['somnath'] }),
]

export const mahmud: FeaturedKing = {
  slug: 'mahmud',
  name: B('محمود غزنوی', 'Mahmud of Ghazna'),
  dynastyName: B('غزنویان', 'The Ghaznavids'),
  reign: B('۹۹۸–۱۰۳۰ م', '998–1030 CE'),
  title: B('محمود غزنوی؛ امپراتوری‌ای که با غنیمت ساخته شد', 'Mahmud of Ghazna: an empire built on plunder'),
  lede: B(
    'نوهٔ غلامی ترک که از ری و خوارزم تا پنجاب فرمان راند. دربارش پناه شاعران فارسی و بیرونی بود، اما به گفتهٔ باسورث رعیت را تنها «منبع درآمد» می‌دید. تصویر «غازی بت‌شکن» را با برچسب آورده‌ایم. لشکرکشی‌هایش را روی نقشهٔ متحرک دنبال کنید.',
    'The grandson of a Turkish slave who ruled from Ray and Khwarazm to the Punjab. His court sheltered Persian poets and Biruni, yet Bosworth says he saw his subjects only as “sources of revenue”. The “idol-breaking holy warrior” image is labelled. Follow his campaigns on the animated map.',
  ),
  stats: [
    { n: B('۳۲ سال', '32 years'), l: B('فرمانروایی', 'in power') },
    { n: B('حدود ۱۷', 'c. 17'), l: B('لشکرکشی به هند', 'Indian campaigns') },
    { n: B('۲۰ میلیون', '20 million'), l: B('دینار غنیمت سومنات («گفته‌اند»)', 'dinars from Somnath (“said to”)') },
    { n: B('۱۰۲۹', '1029'), l: B('سوزاندن کتابخانهٔ ری (م)', 'library of Ray burned (CE)') },
  ],
  mapTitle: B('نقشهٔ متحرک: زندگی و لشکرکشی‌ها', 'Animated map: life and campaigns'),
  events: mahmudEvents,
  span: [994, 1030],
  campaign: {
    id: 'campaigns',
    title: B('لشکرکشی‌ها: از ری تا سومنات (۹۹۸–۱۰۲۹ م)', 'The campaigns: from Ray to Somnath (998–1029 CE)'),
    intro: { fa: ['از غزنه به خراسان، سپس به هند (ویهند و مولتان)، بلخ، خوارزم، سومنات و سرانجام ری. رویدادها از مقالهٔ باسورث است؛ راه‌ها طرح‌وارند.'], en: ['From Ghazna to Khorasan, then India (Wayhind and Multan), Balkh, Khwarazm, Somnath and finally Ray. The events are from Bosworth’s article; the routes are sketches.'] },
    events: campaignEvents, span: [998, 1029], view: [49, 18, 78, 45],
    places: [
      { name: B('غزنه', 'Ghazna'), c: GHAZNA }, { name: B('نیشابور', 'Nishapur'), c: NISHAPUR },
      { name: B('لاهور', 'Lahore'), c: LAHORE }, { name: B('ری', 'Ray'), c: RAY },
      { name: B('گرگانج', 'Gorganj'), c: GORGANJ }, { name: B('سومنات', 'Somnath'), c: SOMNATH },
    ],
    clip: { gif: B('/media/mahmud/campaigns-fa.gif', '/media/mahmud/campaigns-en.gif'), mp4: B('/media/mahmud/campaigns-fa.mp4', '/media/mahmud/campaigns-en.mp4'), webm: B('/media/mahmud/campaigns-fa.webm', '/media/mahmud/campaigns-en.webm'), poster: B('/media/mahmud/campaigns-fa.png', '/media/mahmud/campaigns-en.png'), width: 958, height: 356 },
  },
  shareImage: '/media/mahmud/campaigns-en.png',
  dossier: mahmudDossier,
  synthesis: { title: B('جمع‌بندی: امپراتوری یک تن', 'Synthesis: a one-man empire'), paras: {
    fa: [
      'محمود بزرگ‌ترین امپراتوری جهان اسلام از زمان اوج عباسیان را ساخت. باسورث می‌گوید این امپراتوری «تنها با نیروی فرمانروایش» به هم پیوسته بود؛ ده سال پس از مرگش خراسان در دندانقان به سلجوقیان رسید.',
      'از دید دارایی، این دولت بر گرفتن بنا شده بود: مالیات سنگین، گنج معابد و اسیران. شکوه غزنه و دربار فارسی‌گوی آن را همین ثروت می‌پرداخت.',
    ],
    en: [
      'Mahmud built the largest empire in the Islamic world since the ‘Abbasid heyday. Bosworth says it was held together “only by the vitality of its sovereign”; ten years after his death Khorasan passed to the Seljuks at Dandanqan.',
      'Through the lens of property, this state rested on taking: heavy tax, temple treasure and captives. That wealth paid for Ghazna’s splendour and its Persian-speaking court.',
    ],
  }, sources: ['iranica-mahmud', 'iranica-ghaznavids'] },
  sources: mahmudSources,
  photos: mahmudPhotos,
  related: [
    { href: { fa: '/dynasty/ghaznavids', en: '/dynasty/ghaznavids' }, label: B('دودمان غزنوی', 'The Ghaznavid dynasty') },
    { href: { fa: '/king/adud-al-dawla', en: '/en/king/adud-al-dawla' }, label: B('عضدالدوله', '‘Adud al-Dawla') },
  ],
  wikipedia: 'https://en.wikipedia.org/wiki/Mahmud_of_Ghazni',
}
