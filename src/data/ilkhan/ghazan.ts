/**
 * Ghazan (Mahmud), Ilkhan 1295–1304 CE, and his vizier Rashid al-Din (d. 1318).
 * Spine: R. Amitai, "Ḡāzān Khan" and "Il-Khanids i" (Encyclopaedia Iranica); C. Melville, "Jāmeʿ al-tawāriḵ"; dates from J. A. Boyle, CHI 5.
 */
import type { DossierSection, FeaturedKing } from '../featured/types'
import { ev, note, sec } from '../late-achaemenid/common'
import { B, P, ilkPhotos, ilkSources } from './common'

const sketch = note('منابع راه دقیق را نمی‌گویند؛ خط‌ها طرح‌وارند.', 'The sources give no exact routes; the lines are sketches.')

export const ghazanEvents = [
  ev('conversion', 1295, B('۱۷ یا ۱۹ ژوئن ۱۲۹۵ م', '17 or 19 June 1295 CE'), 'religion', P.LAR, B('مسلمان شدن', 'Conversion to Islam'), B('در جنگ با بایدو، به تشویق امیر نوروز، در چراگاه‌های لار در البرز مسلمان شد و نام محمود را گرفت. امیرانش هم با او مسلمان شدند.', 'During his struggle with Baydu, at the urging of the amir Nawruz, he converted to Islam in the pastures of the Lar valley in the Alborz and took the name Mahmud. His amirs converted with him.'), 'probable', ['iranica-ghazan', 'boyle-chi'], note('امیتای ۱۷ ژوئن و بویل ۱۹ ژوئن را می‌گوید. انگیزه‌اش هم بحث است: شاید جلب پشتیبانی امیران مسلمان.', 'Amitai gives 17 June, Boyle 19 June. The motive is debated too: perhaps to win over the Muslim commanders.')),
  ev('baydu', 1295, B('۴ اکتبر ۱۲۹۵ م', '4 October 1295 CE'), 'battle', P.TABRIZ, B('پایان بایدو', 'The end of Baydu'), B('بایدو، که چند ماه پیش گیخاتو را برانداخته بود، گرفتار شد و به فرمان غازان در باغی بیرون تبریز کشته شد.', 'Baydu, who had overthrown Gaykhatu a few months earlier, was captured and, on Ghazan’s order, executed in a garden outside Tabriz.'), 'secure', ['boyle-chi', 'iranica-ilkhanids'], { route: [P.LAR, P.QAZVIN, P.TABRIZ], ...sketch }),
  ev('throne', 1295, B('۳ نوامبر ۱۲۹۵ م', '3 November 1295 CE'), 'admin', P.QARABAGH, B('بر تخت در قراباغ', 'Enthroned in Qarabagh'), B('در دشت قراباغ بر تخت نشست و، به‌عنوان فرمانروایی مسلمان، نام محمود و لقب سلطان را گرفت. خزانه، به نوشتهٔ بویل، «کاملاً تهی» بود.', 'He was enthroned on the Qarabagh steppe and, as a Muslim ruler, took the name Mahmud and the title of sultan. The treasury, Boyle writes, was “completely exhausted”.'), 'secure', ['boyle-chi'], { route: [P.TABRIZ, P.QARABAGH], ...sketch }),
  ev('rashid', 1298, B('حدود ۱۲۹۸ م', 'c. 1298 CE'), 'admin', P.TABRIZ, B('رشیدالدین وزیر می‌شود', 'Rashid al-Din becomes vizier'), B('رشیدالدین فضل‌الله همدانی، که نخست پزشک در خدمت مغولان بود، همراه سعدالدین ساوجی وزیر شد. غازان نوشتن تاریخ مغولان را به او سپرد.', 'Rashid al-Din Fazl-Allah Hamadani, who had entered Mongol service as a physician, became co-vizier with Sa‘d al-Din Savaji. Ghazan entrusted him with writing the history of the Mongols.'), 'secure', ['iranica-jame', 'iranica-ilkhanids']),
  ev('homs', 1299, B('دسامبر ۱۲۹۹ م', 'December 1299 CE'), 'battle', P.HOMS, B('پیروزی نزدیک حمص', 'Victory near Homs'), B('غازان در وادی الخزندار نزدیک حمص ممالیک را شکست داد. به گفتهٔ امیتای این تنها پیروزی مهم ایلخانان در نبردی رودررو با ممالیک در شصت سال جنگ بود.', 'Ghazan defeated the Mamluks at Wadi al-Khaznadar near Homs. Amitai calls it the one significant Ilkhanid victory in a field battle against the Mamluks in sixty years of war.'), 'secure', ['iranica-ghazan', 'iranica-ilkhanids', 'boyle-chi'], { route: [P.TABRIZ, P.MOSUL, P.ALEPPO, P.HOMS], ...sketch }),
  ev('damascus', 1300, B('ژانویهٔ ۱۳۰۰ م', 'January 1300 CE'), 'campaign', P.DAMASCUS, B('خطبه در دمشق', 'The sermon in Damascus'), B('در ۸ ژانویهٔ ۱۳۰۰ خطبه در دمشق به نام غازان خوانده شد. اشغال حدود صد روز طول کشید و مغولان خودشان بازگشتند.', 'On 8 January 1300 the Friday sermon in Damascus was read in Ghazan’s name. The occupation lasted about a hundred days, and the Mongols withdrew of their own accord.'), 'secure', ['boyle-chi', 'iranica-ilkhanids'], { route: [P.HOMS, P.DAMASCUS], ...note('دلیل بازگشت روشن نیست: کمبود چراگاه یا یورش در مرزهای شرقی.', 'Why they left is unclear: lack of pasture or raids on the eastern frontier.') }),
  ev('pope', 1302, B('آوریل ۱۳۰۲ م', 'April 1302 CE'), 'admin', P.TABRIZ, B('نامه به پاپ', 'A letter to the pope'), B('غازان به پاپ بونیفاس هشتم نامه نوشت تا اروپاییان را به جنگ مشترک با ممالیک بخواند. چیزی از آن به دست نیامد.', 'Ghazan wrote to Pope Boniface VIII, calling the Europeans to a joint war against the Mamluks. Nothing came of it.'), 'secure', ['iranica-ilkhanids', 'iranica-ghazan']),
  ev('marj', 1303, B('آوریل ۱۳۰۳ م', 'April 1303 CE'), 'battle', P.MARJ_SUFFAR, B('شکست مرج الصفر', 'Defeat at Marj al-Suffar'), B('سپاه غازان به فرمان قتلغ‌شاه در مرج الصفر، جنوب دمشق، از ممالیک سخت شکست خورد. خود غازان نزدیک فرات مانده بود. این آخرین یورش بزرگ ایلخانان به آن سوی فرات بود.', 'Ghazan’s army under Qutlugh-Shah was decisively defeated by the Mamluks at Marj al-Suffar, south of Damascus. Ghazan himself had stayed near the Euphrates. It was the last great Ilkhanid invasion across the Euphrates.'), 'secure', ['iranica-ghazan', 'iranica-ilkhanids', 'boyle-chi'], { route: [P.TABRIZ, P.MOSUL, P.EUPHRATES, P.MARJ_SUFFAR], ...sketch }),
  ev('death', 1304, B('مه ۱۳۰۴ م', 'May 1304 CE'), 'admin', P.QAZVIN, B('مرگ نزدیک قزوین', 'Death near Qazvin'), B('در ۳۳ سالگی نزدیک قزوین مرد و در گنبدی که خودش در تبریز ساخته بود به خاک سپرده شد. برادرش اولجایتو جانشین شد.', 'He died near Qazvin at the age of 33 and was buried in the domed tomb he had built himself at Tabriz. His brother Öljeitü succeeded him.'), 'probable', ['boyle-chi', 'iranica-ghazan'], note('بویل ۱۱ مه و امیتای ۱۷ مه را می‌گوید. مورخان ممالیک از زهر سخن گفته‌اند؛ امیتای این را باورپذیر نمی‌داند.', 'Boyle gives 11 May, Amitai 17 May. Mamluk historians speak of poison; Amitai finds this not credible.')),
  ev('jame', 1310, B('حدود ۱۳۰۰–۱۳۱۰ م', 'c. 1300–1310 CE'), 'building', P.TABRIZ, B('جامع‌التواریخ', 'The Jāmeʿ al-tawāriḵ'), B('تاریخ مغولانی که غازان سفارش داده بود، پس از مرگ او تمام شد و به فرمان اولجایتو به تاریخی از همهٔ مردمان شناخته‌شده گسترش یافت: جامع‌التواریخ.', 'The history of the Mongols that Ghazan had commissioned was finished after his death and, at Öljeitü’s command, grew into a history of all the known peoples: the Jāmeʿ al-tawāriḵ.'), 'probable', ['iranica-jame', 'iranica-ghazan'], note('ملویل نگارش را در سال‌های ۱۳۰۰ تا ۱۳۱۰ می‌گذارد؛ سال پایان دقیق نیست.', 'Melville dates the composition to 1300–10; the year it was finished is not exact.')),
  ev('rashid-death', 1318, B('۱۷ ژوئیهٔ ۱۳۱۸ م', '17 July 1318 CE'), 'admin', P.TABRIZ, B('اعدام رشیدالدین', 'Rashid al-Din executed'), B('در آغاز پادشاهی ابوسعید، رقیبانش او را به زهر دادن به اولجایتو متهم کردند. رشیدالدین را پس از دیدن اعدام پسر شانزده‌ساله‌اش کشتند. ربع رشیدی در تبریز غارت شد و دارایی‌اش مصادره شد.', 'Early in Abu Sa‘id’s reign, his rivals accused him of poisoning Öljeitü. Rashid al-Din was put to death after being made to watch the execution of his sixteen-year-old son. The Rab‘-e Rashidi quarter in Tabriz was looted and his property confiscated.'), 'secure', ['boyle-chi', 'iranica-jame']),
]

export const ghazanDossier: DossierSection[] = [
  sec('conversion', 'مسلمان شدن: باور یا سیاست؟', 'Conversion: faith or politics?',
    [['غازان در ژوئن ۱۲۹۵، در میانهٔ جنگ با بایدو، مسلمان شد. امیتای می‌نویسد این کار به مسلمان شدن گستردهٔ مغولانی انجامید که هنوز مسلمان نبودند. پس از آن پرستشگاه‌های بودایی و بسیاری از کلیساها و کنیسه‌ها ویران شد، اما غازان بعدها به مدارای نیاکانش بازگشت.'], ['Ghazan converted in June 1295, in the middle of his struggle with Baydu. Amitai writes that it led to the widespread adoption of Islam among the Mongols who had not yet converted. Buddhist temples and many churches and synagogues were then destroyed, but Ghazan later returned to the tolerance of his forebears.']],
    [['انگیزه محل بحث است. امیتای می‌گوید بخشی از انگیزه «شاید» جلب پشتیبانی افسران مسلمان بود؛ عمق ایمانش هم «شاید محل تردید» باشد. با این همه، او تا پایان آیین‌های اسلامی را سخت نگه داشت و یاسای چنگیز را هم ستایش کرد. یعنی گسستی کامل از سنت مغولی نبود.'], ['The motive is debated. Amitai says part of it “may have been” the wish to win over Muslim officers, and that the depth of his commitment “may be in doubt”. Yet he kept Muslim rites strictly to the end, and he also praised Chinggis Khan’s yasa. In other words, it was no clean break with Mongol tradition.']],
    [['تغییر دین یک فرمانروا می‌تواند هم باور باشد و هم سیاست؛ تاریخ‌نگار باید هر دو را ببیند.'], ['A ruler’s change of faith can be both belief and politics; the historian has to see both.']],
    ['iranica-ghazan', 'boyle-chi'], { photos: ['ghazan-conversion'] }),
  sec('rashid', 'رشیدالدین: وزیر و تاریخ‌نگار', 'Rashid al-Din: vizier and historian',
    [['رشیدالدین همدانی نخست به‌عنوان پزشک به خدمت مغولان درآمد. حدود ۱۲۹۸ همراه سعدالدین ساوجی وزیر غازان شد و تا برکناری‌اش در آغاز پادشاهی ابوسعید (۱۳۱۷) در کار ماند. غازان نوشتن تاریخ مغولان را به او سپرد؛ اولجایتو آن را به جامع‌التواریخ گسترش داد. ملویل می‌گوید به خاطر گستردگی‌اش آن را «نخستین تاریخ جهان» خوانده‌اند. پایانش تلخ بود: در ۱۳۱۸ به اتهام زهر دادن به اولجایتو اعدام شد.'], ['Rashid al-Din of Hamadan first entered Mongol service as a physician. Around 1298 he became Ghazan’s co-vizier with Sa‘d al-Din Savaji, and stayed in office until his dismissal early in Abu Sa‘id’s reign (1317). Ghazan entrusted him with a history of the Mongols; Öljeitü had it expanded into the Jāmeʿ al-tawāriḵ. Melville says its coverage has led it to be called the “first world history”. His end was bitter: in 1318 he was executed on a charge of poisoning Öljeitü.']],
    [['جامع‌التواریخ از مهم‌ترین منابع تاریخ مغول است، اما بی‌طرف نیست. امیتای یادآور می‌شود که رشیدالدین به خاندان تولی، نیای غازان، گرایش داشت؛ و دربارهٔ اصلاحات غازان «تقریباً تنها منبع» ماست، در حالی که خودش اجرای آن‌ها را بر عهده داشت. پس هم وصف او از ویرانی پیش از غازان و هم ادعای موفقیت اصلاحات را باید با احتیاط خواند.'], ['The Jāmeʿ al-tawāriḵ is one of the most important sources for Mongol history, but it is not neutral. Amitai notes that Rashid al-Din favoured the house of Tolui, Ghazan’s ancestors; and that he is “virtually our only source” for Ghazan’s reforms, which he himself carried out. So both his picture of the ruin before Ghazan and his claims of success should be read with caution.']],
    [['وقتی مجری یک اصلاح، تنها راوی آن هم باشد، باید به دنبال گواه دیگری گشت.'], ['When the man who carried out a reform is also its only narrator, look for other evidence.']],
    ['iranica-jame', 'iranica-ilkhanids', 'boyle-chi']),
  sec('property', 'دارایی: اصلاح مالیات و زمین', 'Property: reforming taxes and land',
    [['امیتای می‌نویسد غازان کشوری «در آستانهٔ ورشکستگی» را به ارث برد: مالیات‌های غارتگرانه، ولخرجی گیخاتو و شکست پول کاغذی (چاو). اصلاحات او شامل نظارت بیشتر بر کارگزاران، برنامهٔ مالیاتی منظم و واقع‌بینانه، پرداخت مزد سپاه با واگذاری اقطاع، ثبت زمین و رفتار کمتر غارتگرانه با دهقانان بود. درآمد دولت تا اندازه‌ای بالا رفت. اما به گفتهٔ امیتای، واگذاری اقطاع به سپاهیان مغول «به هیچ اندازهٔ واقعی» اجرا نشد. در ۱۳۱۸ هم دارایی رشیدالدین مصادره و حتی موقوفاتش غارت شد.'], ['Amitai writes that Ghazan inherited a kingdom “on the verge of bankruptcy”: rapacious taxation, Gaykhatu’s extravagance and the failed paper money (chav). His reforms included closer control of officials, a regular and realistic tax schedule, paying the army through grants of iqta‘, land registration and a less predatory attitude towards the peasantry. State revenue rose somewhat. But Amitai also says the grants of land to Mongol soldiers were “not executed to any real degree”. And in 1318 Rashid al-Din’s own property was confiscated and even his pious endowments were plundered.']],
    [['این خوانش ماست: اصلاحات غازان کوششی بود تا دولت از غارت به مالیاتی قابل پیش‌بینی برسد؛ یعنی دهقان بداند چه می‌پردازد و کارگزار نتواند هرچه خواست بگیرد. اما سرنوشت خود رشیدالدین نشان داد که مالکیت، حتی برای وزیر، تا زمانی امن بود که لطف شاه برقرار بود.'], ['This is our reading: Ghazan’s reforms were an attempt to move the state from plunder to predictable taxation, so that a peasant knew what he owed and an official could not take whatever he liked. But Rashid al-Din’s own fate showed that property, even a vizier’s, was safe only as long as the ruler’s favour lasted.']],
    [['مالیات قابل پیش‌بینی پایهٔ آبادانی است؛ و مالکیتی که به لطف فرمانروا بسته باشد، مالکیت نیست.'], ['Predictable taxes are the basis of prosperity; and property that depends on a ruler’s favour is not really property.']],
    ['iranica-ghazan', 'iranica-ilkhanids', 'boyle-chi'], { photos: ['ghazan-seal'] }),
]

export const ghazan: FeaturedKing = {
  slug: 'ghazan',
  name: B('غازان خان', 'Ghazan Khan'),
  dynastyName: B('ایلخانان', 'The Ilkhanids'),
  reign: B('۱۲۹۵–۱۳۰۴ م', '1295–1304 CE'),
  title: B('غازان و رشیدالدین؛ اسلام، اصلاحات و جامع‌التواریخ', 'Ghazan and Rashid al-Din: Islam, reform and the Jāmeʿ al-tawāriḵ'),
  lede: B(
    'نوادهٔ هولاکو که پیش از رسیدن به تخت مسلمان شد. با وزیرش رشیدالدین دستگاه مالیات را اصلاح کرد و نوشتن تاریخ مغولان را سفارش داد؛ در شام یک بار پیروز شد و یک بار سخت شکست خورد. رشیدالدین چهارده سال پس از مرگ او اعدام شد.',
    'Hulagu’s great-grandson, who became a Muslim before he took the throne. With his vizier Rashid al-Din he reformed the tax system and commissioned a history of the Mongols; in Syria he won once and lost badly once. Rashid al-Din was executed fourteen years after his death.',
  ),
  stats: [
    { n: B('۹ سال', '9 years'), l: B('پادشاهی', 'on the throne') },
    { n: B('۳۳', '33'), l: B('سن هنگام مرگ', 'age at death') },
    { n: B('۱ پیروزی', '1 victory'), l: B('رودررو بر ممالیک در ۶۰ سال', 'in the field over the Mamluks in 60 years') },
    { n: B('۱۳۱۸', '1318'), l: B('اعدام رشیدالدین (م)', 'Rashid al-Din executed (CE)') },
  ],
  mapTitle: B('نقشهٔ متحرک: زندگی و لشکرکشی‌ها', 'Animated map: life and campaigns'),
  events: ghazanEvents,
  span: [1295, 1318],
  dossier: ghazanDossier,
  synthesis: { title: B('جمع‌بندی: شاه مسلمان، دولت مغول', 'Synthesis: a Muslim king, a Mongol state'), paras: {
    fa: [
      'غازان مغولان ایران را به سوی اسلام برد، اما یاسای چنگیز و پیوند با خان بزرگ را رها نکرد. با رشیدالدین دستگاه مالیات را سامان داد و تاریخی سفارش داد که امروز از مهم‌ترین منابع ماست؛ هرچند همان منبع، روایت خود اوست.',
      'از دید دارایی، اصلاحات او کوششی برای مالیاتی قابل پیش‌بینی بود؛ اما مصادرهٔ دارایی رشیدالدین در ۱۳۱۸ نشان داد که امنیت مالکیت هنوز به لطف فرمانروا بسته بود.',
    ],
    en: [
      'Ghazan led the Mongols of Iran towards Islam, but did not give up Chinggis Khan’s yasa or the link with the Great Khan. With Rashid al-Din he put the tax system in order and commissioned a history that is now one of our most important sources, even though that source is his own side’s account.',
      'Through the lens of property, his reforms were an attempt at predictable taxation; but the confiscation of Rashid al-Din’s property in 1318 showed that secure ownership still depended on the ruler’s favour.',
    ],
  }, sources: ['iranica-ghazan', 'iranica-ilkhanids', 'iranica-jame'] },
  sources: ilkSources,
  photos: ilkPhotos,
  related: [
    { href: { fa: '/dynasty/ilkhanids', en: '/dynasty/ilkhanids' }, label: B('دودمان ایلخانی', 'The Ilkhanid dynasty') },
    { href: { fa: '/king/hulagu', en: '/en/king/hulagu' }, label: B('هولاکو', 'Hulagu') },
  ],
  wikipedia: 'https://en.wikipedia.org/wiki/Ghazan',
}
