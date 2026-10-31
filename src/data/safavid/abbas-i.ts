/**
 * Shah Abbas I "the Great", Safavid, 1588–1629 CE (Matthee: 1587).
 * Spine: R. M. Savory, "ʿAbbās I", and R. Matthee, "Safavid Dynasty" (Encyclopaedia Iranica).
 */
import type { DossierSection, FeaturedKing } from '../featured/types'
import { ev, note, sec } from '../late-achaemenid/common'
import { B, P, sfPhotos, sfSources } from './common'

const sketch = note('منابع راه دقیق را نمی‌گویند؛ خط‌ها طرح‌وارند.', 'The sources give no exact routes; the lines are sketches.')
const S = ['iranica-abbas-i']
const SM = ['iranica-abbas-i', 'iranica-safavids']
const M = ['iranica-safavids']

export const abbasEvents = [
  ev('birth', 1571, B('۲۷ ژانویهٔ ۱۵۷۱ م', '27 January 1571 CE'), 'admin', P.QAZVIN, B('زادن', 'Birth'), B('سومین پسر سلطان محمد خدابنده. سیوری جای زادن را نمی‌گوید؛ نقطه روی پایتخت آن روز، قزوین، است.', 'Third son of Soltan Mohammad Khodabanda. Savory does not give his birthplace; the dot marks the capital of the day, Qazvin.'), 'probable', S, note('تاریخ استوار است، جای زادن نه.', 'The date is secure, the place is not.')),
  ev('herat', 1577, B('نوامبر ۱۵۷۷ م', 'November 1577 CE'), 'admin', P.HERAT, B('رهایی از مرگ در هرات', 'Spared at Herat'), B('عمویش اسماعیل دوم فرمان کشتن او را داده بود، اما خود ۲۴ نوامبر ۱۵۷۷ کشته شد. سیوری بدگمانی بعدی عباس را از این سال‌ها می‌داند.', 'His uncle Ismail II had ordered his death but was himself killed on 24 November 1577. Savory traces Abbas’s later suspicion to these years.'), 'secure', S),
  ev('crowned', 1588, B('۱ اکتبر ۱۵۸۸ م', '1 October 1588 CE'), 'admin', P.QAZVIN, B('تاج‌گذاری در قزوین', 'Crowned at Qazvin'), B('در هفده‌سالگی، با پشتیبانی مرشدقلی‌خان استاجلو، شاه شد. دولت از درون آشفته بود و عثمانی و ازبک بخش‌هایی از ایران را گرفته بودند.', 'At seventeen, backed by Morshed-qoli Khan Ostajlu, he became shah. The state was in turmoil and the Ottomans and Uzbeks held parts of Iran.'), 'probable', SM, note('سیوری ۱۵۸۸ می‌گوید و متی پادشاهی را از ۱۵۸۷ می‌شمارد.', 'Savory gives 1588; Matthee counts the reign from 1587.')),
  ev('herat-1598', 1598, B('اوت ۱۵۹۸ م', 'August 1598 CE'), 'battle', P.HERAT, B('شکست ازبکان؛ هرات بازمی‌گردد', 'The Uzbeks routed; Herat regained'), B('هرات پس از ده سال به دست صفویان برگشت.', 'Herat came back to the Safavids after ten years.'), 'secure', S),
  ev('isfahan', 1598, B('پس از ۱۵۹۸ م', 'after 1598 CE'), 'building', P.ISFAHAN, B('پایتخت به اصفهان می‌رود', 'The capital moves to Isfahan'), B('پایتخت از قزوین به اصفهان رفت، دورتر از مرز غربی.', 'The capital moved from Qazvin to Isfahan, further from the western frontier.'), 'probable', SM, note('سیوری می‌گوید پس از پیروزی ۱۵۹۸؛ متی تنها «دههٔ ۱۵۹۰» را می‌گوید.', 'Savory says after the 1598 victory; Matthee only says “the 1590s”.')),
  ev('mashhad', 1601, B('۱۶۰۱ م', '1601 CE'), 'religion', P.MASHHAD, B('پیاده تا مشهد', 'On foot to Mashhad'), B('در ۲۸ روز پیاده از اصفهان به زیارت مشهد رفت؛ سیوری این را بخشی از ادعای صفویان به نمایندگی امام غایب می‌داند.', 'He walked from Isfahan to Mashhad on pilgrimage in 28 days; Savory links this to the Safavid claim to represent the Hidden Imam.'), 'secure', S),
  ev('sufiyan', 1605, B('۱۶۰۵–۱۶۰۶ م', '1605–1606 CE'), 'battle', P.SUFIYAN, B('صوفیان', 'Sufiyan'), B('با سپاهی کم‌شمارتر و کم‌توپ‌تر، ذخیره‌اش را در لحظهٔ سرنوشت‌ساز به میدان آورد و عثمانی را شکست داد.', 'With fewer men and guns, he threw in his reserves at the decisive moment and beat the Ottomans.'), 'secure', S),
  ev('shah-mosque', 1611, B('۱۶۱۱ م', '1611 CE'), 'building', P.ISFAHAN, B('آغاز مسجد شاه', 'The Shah Mosque begun'), B('در کنار میدان شاه، با کاخ عالی‌قاپو و مسجد شیخ لطف‌الله.', 'On the Maydan-e Shah, beside the Ali Qapu palace and the Sheikh Lotfallah mosque.'), 'secure', S),
  ev('sarab', 1618, B('۱۶۱۸ م', '1618 CE'), 'admin', P.TABRIZ, B('صلح سراب', 'The Peace of Sarab'), B('پس از بیرون راندن عثمانی تا مرزهای آماسیه، با آنان صلح کرد.', 'After driving the Ottomans back to the Amasya borders, he made peace with them.'), 'secure', S),
  ev('silk', 1619, B('۱۶۱۹ م', '1619 CE'), 'admin', P.ISFAHAN, B('انحصار ابریشم', 'The silk monopoly'), B('صدور ابریشم، پرسودترین کالای ایران، انحصار شاه شد.', 'The export of silk, Iran’s most profitable product, became a royal monopoly.'), 'secure', M),
  ev('hormuz', 1622, B('۱۶۲۲ م', '1622 CE'), 'battle', P.HORMUZ, B('هرمز و بندرعباس', 'Hormuz and Bandar Abbas'), B('با کمک انگلیسی‌ها پرتغالی‌ها را از هرمز بیرون راند و بندری تازه به نام خود، بندرعباس، ساخت.', 'With English help he expelled the Portuguese from Hormuz and founded a new port named after himself, Bandar Abbas.'), 'secure', SM),
  ev('baghdad', 1623, B('۱۶۲۳ م', '1623 CE'), 'battle', P.BAGHDAD, B('بغداد', 'Baghdad'), B('بغداد و شهرهای زیارتی عراق تا ۱۶۳۸ به دست صفویان افتاد.', 'Baghdad and the shrine cities of Iraq passed to the Safavids until 1638.'), 'probable', M, note('متی تنها می‌گوید عراق «جز میان ۱۶۲۳ و ۱۶۳۸» در دست عثمانی بود.', 'Matthee only says Iraq was Ottoman “except for a brief period between 1623 and 1638”.')),
  ev('death', 1629, B('۱۹ ژانویهٔ ۱۶۲۹ م', '19 January 1629 CE'), 'admin', P.MAZANDARAN, B('مرگ در مازندران', 'Death in Mazandaran'), B('پس از ۴۱ سال خورشیدی پادشاهی. نوه‌اش صفی جانشین شد.', 'After 41 solar years on the throne. His grandson Safi succeeded him.'), 'secure', S),
]

const campaignEvents = [
  ev('c-qazvin', 1588, B('۱۵۸۸', '1588'), 'admin', P.QAZVIN, B('قزوین', 'Qazvin'), B('تاج‌گذاری.', 'Crowned shah.'), 'probable', SM, note('سیوری ۱۵۸۸، متی ۱۵۸۷.', 'Savory 1588, Matthee 1587.')),
  ev('c-herat', 1598, B('اوت ۱۵۹۸', 'Aug 1598'), 'battle', P.HERAT, B('هرات', 'Herat'), B('ازبکان شکست خوردند.', 'The Uzbeks are routed.'), 'secure', S, { route: [P.QAZVIN, P.MASHHAD, P.HERAT], ...sketch }),
  ev('c-sufiyan', 1605, B('۱۶۰۵', '1605'), 'battle', P.SUFIYAN, B('صوفیان', 'Sufiyan'), B('پیروزی بر عثمانی.', 'Victory over the Ottomans.'), 'secure', S, { route: [P.ISFAHAN, P.QAZVIN, P.TABRIZ, P.SUFIYAN], ...sketch }),
  ev('c-hormuz', 1622, B('۱۶۲۲', '1622'), 'battle', P.HORMUZ, B('هرمز', 'Hormuz'), B('پرتغالی‌ها بیرون رانده شدند.', 'The Portuguese are expelled.'), 'secure', SM, { route: [P.ISFAHAN, P.SHIRAZ, P.BANDAR_ABBAS, P.HORMUZ], ...sketch }),
  ev('c-baghdad', 1623, B('۱۶۲۳', '1623'), 'battle', P.BAGHDAD, B('بغداد', 'Baghdad'), B('عراق به دست صفویان.', 'Iraq taken.'), 'probable', M, { route: [P.ISFAHAN, P.BAGHDAD], ...note('سال از جملهٔ متی برداشت شده؛ راه طرح‌وار است.', 'The year is inferred from Matthee; the route is a sketch.') }),
]

export const abbasDossier: DossierSection[] = [
  sec('army', 'سپاه غلامان', 'The ghulam army',
    [['عباس سپاهی دائمی از غلامان ساخت: گرجی‌ها، ارمنی‌ها و چرکس‌های مسیحی که در جنگ‌های قفقاز اسیر شده، مسلمان شده و برای دربار و دیوان پرورده شده بودند. تا پایان پادشاهی او غلامان حدود یک‌پنجم مقام‌های بالای دیوانی را داشتند.', 'یک غلام گرجی، الله‌وردی‌خان، در کشتن مرشدقلی‌خان استاجلو، همان امیری که عباس را به تخت رسانده بود، همدست شد.'],
     ['Abbas built a standing army of ghulams: Georgian, Armenian and Circassian Christians taken captive in the Caucasus wars, converted to Islam and trained for the household and the administration. By the end of his reign ghulams held about one fifth of the high administrative posts.', 'A Georgian ghulam, Allahverdi Khan, took part in killing Morshed-qoli Khan Ostajlu, the very amir who had put Abbas on the throne.']],
    [['سیوری می‌نویسد وفاداری غلامان به شخص شاه بود، نه به ایل؛ پس شاه در برابر قزلباشان پشتیبانی تازه یافت. این همان راهی است که تهماسب با کوچاندن اسیران قفقازی آغاز کرده بود.'], ['Savory writes that the ghulams’ loyalty was to the shah, not to a tribe, so the shah gained a new support against the Qizilbash. It continued what Tahmasp had begun by moving Caucasian captives into Iran.']],
    [['سپاهی که تنها به یک نفر وفادار است، کشور را تا زمانی نگه می‌دارد که آن یک نفر توانا باشد.'], ['An army loyal to one man holds a country only as long as that man is able.']],
    S, { photos: ['abbas-bishandas'], quotes: [{ text: 'The loyalty of the ḡolāms was to person of the shah, not to a tribe', fa: 'وفاداری غلامان به شخص شاه بود، نه به یک ایل.', ref: 'Savory, “ʿAbbās I”, Encyclopaedia Iranica', source: 'iranica-abbas-i' }] }),
  sec('property', 'زمین‌های خاصه: درآمد امروز، هزینهٔ فردا', 'Crown lands: income today, cost tomorrow',
    [['برای پرداخت مزد سپاه تازه، عباس ولایت‌های بیشتری را از زمین «ممالک» (دولتی، در دست امیران قزلباش) به زمین «خاصه» (شاهی) برگرداند. در این ولایت‌ها کارگزاران شاه مالیات را می‌گرفتند و یکسره به خزانه می‌فرستادند. متی می‌گوید غلامان حاکم این ولایت‌ها شدند. در ۱۶۱۹ صدور ابریشم هم انحصار شاه شد.', 'سیوری این راه‌حل را «در کوتاه‌مدت کارآمد» می‌داند و می‌افزاید که در درازمدت یکی از علت‌های اصلی زوال صفویان شد؛ چون جانشینان آن را گسترش دادند، توازن قزلباش و غلام به هم خورد و سپاه ناتوان شد.'],
     ['To pay the new army, Abbas turned more provinces from “state” (mamalek) land, held by Qizilbash amirs, into “crown” (khassa) land. There royal intendants collected the taxes and sent them straight to the treasury. Matthee says ghulams became governors of these provinces. In 1619 the export of silk also became a royal monopoly.', 'Savory calls this solution effective in the short term and adds that in the long run it became one of the principal causes of Safavid decline: extended by his successors, it upset the balance between Qizilbash and ghulam troops and weakened the army.']],
    [['برداشت ما این است: عباس درآمد را از دست امیران بیرون آورد و به خزانهٔ شاه برد، اما کسی را جای آنان نگذاشت که به آبادی زمین دلبسته باشد. کارگزاری که چند سال بر یک ولایت است، سود را می‌گیرد و هزینهٔ آینده را نمی‌پردازد. ما این را از سخن سیوری دربارهٔ زوال برداشت کرده‌ایم؛ خود او این سازوکار را چنین شرح نمی‌دهد.'],
     ['This is our reading: Abbas moved revenue out of the amirs’ hands and into the shah’s treasury, but put no one in their place with a stake in the land’s long-term upkeep. An intendant who holds a province for a few years takes the income and does not pay for the future. We draw this from Savory’s remark on decline; he does not spell out this mechanism himself.']],
    [['وقتی دارایی یکسره به دولت می‌رسد و کسی مالک بلندمدت آن نیست، درآمد امروز ممکن است بهای ضعف فردا باشد.'], ['When property flows straight to the state and no one owns it for the long term, today’s income can be paid for with tomorrow’s weakness.']],
    SM, { quotes: [{ text: 'in the long run it constituted one of the principal causes of Safavid decline', fa: 'در درازمدت یکی از علت‌های اصلی زوال صفویان شد.', ref: 'Savory, “ʿAbbās I”, Encyclopaedia Iranica', source: 'iranica-abbas-i' }] }),
  sec('isfahan', 'اصفهان', 'Isfahan',
    [['عباس پس از ۱۵۹۸ پایتخت را از قزوین به اصفهان برد. خیابان چهارباغ به میدان شاه (نقش جهان) می‌رسید و گرد آن کاخ عالی‌قاپو، مسجد شیخ لطف‌الله و مسجد شاه (آغاز ۱۶۱۱) و بازار قیصریه ساخته شد. هزاران پیشه‌ور ارمنی از جلفای آذربایجان به جلفای نو در کنار زاینده‌رود کوچانده شدند.', 'سیوری می‌گوید از زمان ساختن بغداد به دست منصور عباسی، در جهان اسلام چنین شهرسازی جامعی دیده نشده بود.'],
     ['After 1598 Abbas moved the capital from Qazvin to Isfahan. The Chahar Bagh avenue led to the Maydan-e Shah (Naqsh-e Jahan), around which rose the Ali Qapu palace, the Sheikh Lotfallah mosque, the Shah Mosque (begun 1611) and the Qaysariya bazaar. Thousands of Armenian craftsmen were moved from Julfa in Azerbaijan to New Julfa on the Zayanda-rud.', 'Savory says there had been no such comprehensive town planning in the Islamic world since the caliph al-Mansur built Baghdad.']],
    [['رقم‌های بزرگ را باید با احتیاط خواند: متی می‌گوید شمار ۶۰۰ هزار تن برای جمعیت اصفهان، از شاردن، «تقریباً بی‌گمان گزافه است» و رقم سنتی ۹۹۹ کاروانسرا «بسیار گزافه». تاریخ آغاز مسجد شیخ لطف‌الله در متن ایرانیکا ناهمخوان است، پس آن را نمی‌آوریم.'], ['Big numbers need care: Matthee says Chardin’s figure of 600,000 people for Isfahan is “almost certainly an exaggeration” and the traditional count of 999 caravanserais “much exaggerated”. Iranica’s date for the start of the Sheikh Lotfallah mosque is internally inconsistent, so we leave it out.']],
    [['میدان نقش جهان کاخ، مسجد و بازار را در یک فضا کنار هم نشاند؛ این چینش نشان می‌دهد قدرت، دین و بازرگانی در آن دولت چه اندازه به هم بسته بودند.'], ['Naqsh-e Jahan put palace, mosque and bazaar side by side in one space; the layout shows how closely power, faith and trade were bound together in that state.']],
    SM, { photos: ['naqsh-e-jahan'] }),
  sec('hormuz', 'هرمز و دریا', 'Hormuz and the sea',
    [['در ۱۶۲۲ عباس با کمک انگلیسی‌ها پرتغالی‌ها را از جزیرهٔ هرمز بیرون راند. متی می‌گوید شهر هرمز را ویران کرد و در جای روستای گمرو بر خشکی، بندری به نام خود ساخت: بندرعباس.'],
     ['In 1622 Abbas, with English help, expelled the Portuguese from the island of Hormuz. Matthee says he razed the town and founded a new port named after himself, Bandar Abbas, at the village of Gomru on the mainland.']],
    [['سیوری می‌گوید عباس رقابت پرتغال، انگلیس و هلند را به سود خود به کار گرفت. متی می‌نویسد صلح او با عثمانی در ۱۶۱۱ بود و سیوری صلح را در سراب ۱۶۱۸ می‌آورد؛ این دو تاریخ به دو صلح جداگانه اشاره دارند یا یکی را دو جور شمرده‌اند، روشن نیست.'], ['Savory says Abbas used the rivalry of the Portuguese, English and Dutch to his own advantage. Matthee dates his peace with the Ottomans to 1611 while Savory places it at Sarab in 1618; whether these are two separate peaces or one counted two ways is not clear.']],
    [['بندرعباس هنوز نام او را دارد؛ بندری که برای بازرگانی ساخته شد، یادگار پیوند شاه و بازار است.'], ['Bandar Abbas still bears his name: a port built for trade, a reminder of how closely shah and market were tied.']],
    SM),
  sec('sons', 'پسران در حرم', 'Sons in the harem',
    [['عباس دیگر پسرانش را با للهٔ قزلباش به ولایت‌ها نفرستاد و آنان را در حرم نگه داشت. از ترس توطئه یکی از پسرانش را کشت و دو تن را کور کرد؛ دو پسر دیگر پیش از او مرده بودند. جانشینش نوه‌اش صفی بود.'],
     ['Abbas stopped sending his sons to the provinces with Qizilbash guardians and kept them in the harem. Fearing plots, he had one son executed and two blinded; two others had died before him. His successor was his grandson Safi.']],
    [['سیوری می‌گوید شاهزادگانی که در حرم بزرگ شدند تجربهٔ کشورداری نداشتند و این شیوه «بی‌گمان یکی از علت‌های اصلی زوال صفویان» بود.'], ['Savory says princes raised in the harem had no experience of government and that this practice was “undoubtedly one of the major causes of Safavid decline”.']],
    [['دولتی که نگذارد جانشین پیش از رسیدن به قدرت کاری بیاموزد، توانایی خود را با یک نفر به گور می‌برد.'], ['A state that lets no heir learn the work before he rules buries its competence with one man.']],
    S, { quotes: [{ text: 'This practice was undoubtedly one of the major causes of Safavid decline.', fa: 'این شیوه بی‌گمان یکی از علت‌های اصلی زوال صفویان بود.', ref: 'Savory, “ʿAbbās I”, Encyclopaedia Iranica', source: 'iranica-abbas-i' }] }),
]

export const abbasI: FeaturedKing = {
  slug: 'abbas-i',
  name: B('شاه عباس بزرگ', 'Shah Abbas the Great'),
  dynastyName: B('صفویان', 'The Safavids'),
  reign: B('۱۵۸۸–۱۶۲۹ م', '1588–1629 CE'),
  title: B('شاه عباس؛ سپاه تازه، پایتخت تازه', 'Shah Abbas: a new army, a new capital'),
  lede: B(
    'در هفده‌سالگی شاه کشوری آشفته شد که عثمانی و ازبک بخش‌هایی از آن را گرفته بودند. با سپاهی از غلامان قفقازی و درآمد زمین‌های شاهی سرزمین‌ها را پس گرفت، اصفهان را پایتخت کرد و پرتغالی‌ها را از هرمز راند. همان اصلاحات، به گفتهٔ سیوری، در درازمدت از علت‌های زوال صفویان شد.',
    'At seventeen he became shah of a country in turmoil, parts of it held by the Ottomans and Uzbeks. With an army of Caucasian ghulams paid from crown lands he won the lost lands back, made Isfahan his capital and drove the Portuguese from Hormuz. The same reforms, Savory says, became in the long run causes of Safavid decline.',
  ),
  stats: [
    { n: B('۴۱ سال', '41 years'), l: B('پادشاهی (خورشیدی)', 'reign (solar years)') },
    { n: B('۱/۵', '1/5'), l: B('مقام‌های بالا در دست غلامان', 'high posts held by ghulams') },
    { n: B('۲۸ روز', '28 days'), l: B('پیاده از اصفهان تا مشهد', 'on foot, Isfahan to Mashhad') },
    { n: B('۱۶۲۲', '1622'), l: B('هرمز (م)', 'Hormuz (CE)') },
  ],
  mapTitle: B('نقشهٔ متحرک: زندگی و پادشاهی', 'Animated map: life and reign'),
  events: abbasEvents,
  span: [1571, 1629],
  lifeMap: { view: [40, 25, 66, 41], places: [
    { name: B('قزوین', 'Qazvin'), c: P.QAZVIN }, { name: B('هرات', 'Herat'), c: P.HERAT }, { name: B('اصفهان', 'Isfahan'), c: P.ISFAHAN },
    { name: B('مشهد', 'Mashhad'), c: P.MASHHAD }, { name: B('تبریز', 'Tabriz'), c: P.TABRIZ, left: true }, { name: B('صوفیان', 'Sufiyan'), c: P.SUFIYAN, dy: -0.8 },
    { name: B('هرمز', 'Hormuz'), c: P.HORMUZ }, { name: B('بغداد', 'Baghdad'), c: P.BAGHDAD }, { name: B('مازندران', 'Mazandaran'), c: P.MAZANDARAN, dy: -0.8 },
  ] },
  campaign: {
    id: 'campaigns',
    title: B('لشکرکشی‌های شاه عباس (۱۵۸۸–۱۶۲۳ م)', 'Shah Abbas’s campaigns (1588–1623 CE)'),
    intro: { fa: ['از هرات تا صوفیان، هرمز و بغداد. تاریخ‌ها از ایرانیکا (سیوری و متی) است؛ راه‌ها طرح‌وارند.'], en: ['From Herat to Sufiyan, Hormuz and Baghdad. Dates follow Iranica (Savory and Matthee); the routes are sketches.'] },
    events: campaignEvents, span: [1588, 1623], view: [40, 25, 66, 41],
    places: [
      { name: B('قزوین', 'Qazvin'), c: P.QAZVIN }, { name: B('مشهد', 'Mashhad'), c: P.MASHHAD }, { name: B('هرات', 'Herat'), c: P.HERAT },
      { name: B('اصفهان', 'Isfahan'), c: P.ISFAHAN }, { name: B('تبریز', 'Tabriz'), c: P.TABRIZ, left: true }, { name: B('شیراز', 'Shiraz'), c: P.SHIRAZ },
      { name: B('بندرعباس', 'Bandar Abbas'), c: P.BANDAR_ABBAS, left: true }, { name: B('هرمز', 'Hormuz'), c: P.HORMUZ, dy: 0.8 }, { name: B('بغداد', 'Baghdad'), c: P.BAGHDAD },
    ],
    clip: { gif: B('/media/abbas-i/campaigns-fa.gif', '/media/abbas-i/campaigns-en.gif'), mp4: B('/media/abbas-i/campaigns-fa.mp4', '/media/abbas-i/campaigns-en.mp4'), webm: B('/media/abbas-i/campaigns-fa.webm', '/media/abbas-i/campaigns-en.webm'), poster: B('/media/abbas-i/campaigns-fa.png', '/media/abbas-i/campaigns-en.png'), width: 958, height: 356 },
  },
  shareImage: '/media/abbas-i/campaigns-en.png',
  dossier: abbasDossier,
  synthesis: { title: B('جمع‌بندی: نیرومندی کوتاه، بهای بلند', 'Synthesis: strength now, a long bill later'), paras: {
    fa: [
      'شاه عباس با غلامان، زمین‌های شاهی و انحصار ابریشم دولتی ساخت که درآمد و سپاه را در دست شاه گرد می‌آورد. با همین ابزارها سرزمین‌های از دست رفته را پس گرفت و اصفهان را ساخت.',
      'سیوری دو کار او، گسترش زمین‌های خاصه و نگه‌داشتن شاهزادگان در حرم، را از علت‌های اصلی زوال صفویان می‌شمارد. نود و سه سال پس از مرگ او، اصفهان به دست افغان‌ها افتاد.',
    ],
    en: [
      'With ghulams, crown lands and the silk monopoly, Shah Abbas built a state that gathered revenue and army into the shah’s hands. With those tools he won back the lost lands and built Isfahan.',
      'Savory counts two of his measures, the spread of crown lands and the confinement of princes in the harem, among the principal causes of Safavid decline. Ninety-three years after his death, Isfahan fell to the Afghans.',
    ],
  }, sources: SM },
  sources: sfSources,
  photos: sfPhotos,
  related: [
    { href: { fa: '/dynasty/safavids', en: '/dynasty/safavids' }, label: B('دودمان صفوی', 'The Safavid dynasty') },
    { href: { fa: '/king/ismail-i', en: '/en/king/ismail-i' }, label: B('شاه اسماعیل و چالدران', 'Shah Ismail and Chaldiran') },
  ],
  wikipedia: 'https://en.wikipedia.org/wiki/Abbas_the_Great',
}
