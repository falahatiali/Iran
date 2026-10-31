/**
 * Hulagu (Hülegü), founder of the Ilkhanate, in Iran 1256–1265 CE.
 * Spine: R. Amitai, "Hulāgu Khan" and "Il-Khanids i" (Encyclopaedia Iranica); dates from J. A. Boyle, CHI 5.
 */
import type { DossierSection, FeaturedKing } from '../featured/types'
import { ev, note, sec } from '../late-achaemenid/common'
import { B, P, ilkPhotos, ilkSources } from './common'

const sketch = note('منابع راه دقیق را نمی‌گویند؛ خط‌ها طرح‌وارند.', 'The sources give no exact routes; the lines are sketches.')

export const hulaguEvents = [
  ev('mission', 1253, B('۱۲۵۳ م', '1253 CE'), 'campaign', P.SHIBARGHAN, B('مأموریت برادر', 'His brother’s mission'), B('برادرش مونگکه، خان بزرگ، او را با سپاهی بزرگ، همراه خانواده‌ها و گله‌ها، به غرب فرستاد. سپاه در ۱۲۵۳ راه افتاد و در ۱۲۵۵ به ماوراءالنهر رسید؛ هولاکو زمستان را در شبرغان ماند.', 'His brother Möngke, the Great Khan, sent him west with a huge army, together with families and herds. It set out in 1253 and reached Transoxania in 1255; Hulagu wintered at Shibarghan.'), 'secure', ['iranica-hulagu', 'boyle-chi']),
  ev('maymundiz', 1256, B('۱۹ یا ۲۰ نوامبر ۱۲۵۶ م', '19 or 20 November 1256 CE'), 'battle', P.MAYMUNDIZ, B('تسلیم میمون‌دژ', 'Maymun-Diz surrenders'), B('رکن‌الدین خورشاه، خداوند اسماعیلیان، پس از کمتر از دو هفته محاصره از دژ میمون‌دژ پایین آمد. خواجه نصیرالدین طوسی در گروهی بود که پیش از او بیرون آمدند.', 'Rukn al-Din Khurshah, the Isma‘ili Grand Master, came down from the castle of Maymun-Diz after a siege of less than a fortnight. Nasir al-Din Tusi was in the group sent down before him.'), 'probable', ['boyle-chi', 'iranica-hulagu'], { route: [P.SHIBARGHAN, P.NISHAPUR, P.QAZVIN, P.MAYMUNDIZ], ...note('جوینی ۱۹ نوامبر و رشیدالدین روز بعد را می‌گوید.', 'Juvayni gives 19 November, Rashid al-Din the day after.') }),
  ev('baghdad', 1258, B('۱۰ تا ۲۰ فوریهٔ ۱۲۵۸ م', '10–20 February 1258 CE'), 'battle', P.BAGHDAD, B('سقوط بغداد', 'The fall of Baghdad'), B('خلیفه مستعصم در ۱۰ فوریه تسلیم شد. مردم شهر که به فرمان او بیرون آمدند، کشتار شدند. خود خلیفه در ۲۰ فوریه کشته شد و خلافت عباسی در بغداد پایان یافت.', 'The caliph al-Musta‘sim surrendered on 10 February. The townspeople who came out on his order were slaughtered. The caliph himself was killed on 20 February, and the Abbasid caliphate in Baghdad came to an end.'), 'secure', ['boyle-chi', 'iranica-ilkhanids'], { route: [P.MAYMUNDIZ, P.HAMADAN, P.BAGHDAD], ...sketch }),
  ev('maragheh', 1258, B('تابستان ۱۲۵۸ م', 'Summer 1258 CE'), 'building', P.MARAGHEH, B('رصدخانهٔ مراغه', 'The Maragheh observatory'), B('هولاکو مراغه را پایتخت کرد و خواجه نصیرالدین طوسی با پشتیبانی او ساختن رصدخانهٔ معروف را آغاز کرد.', 'Hulagu made Maragheh his capital, and Nasir al-Din Tusi began building his famous observatory there under his patronage.'), 'probable', ['boyle-chi', 'iranica-ilkhanids'], note('بویل آغاز کار را تابستان ۱۲۵۸ می‌گذارد؛ بسیاری از کتاب‌ها ۱۲۵۹ را می‌گویند.', 'Boyle puts the start in summer 1258; many books give 1259.')),
  ev('aleppo', 1260, B('ژانویه–فوریهٔ ۱۲۶۰ م', 'January–February 1260 CE'), 'battle', P.ALEPPO, B('حلب', 'Aleppo'), B('محاصرهٔ شهر کمتر از یک هفته (۱۸ تا ۲۴ ژانویه) طول کشید؛ ارگ تا ۲۵ فوریه ایستاد. پادشاه ارمنستان کوچک و امیر انطاکیه همراه مغولان بودند.', 'The siege of the town lasted less than a week (18–24 January); the citadel held out until 25 February. The king of Lesser Armenia and the prince of Antioch rode with the Mongols.'), 'secure', ['boyle-chi', 'iranica-ilkhanids'], { route: [P.MARAGHEH, P.AKHLAT, P.ALEPPO], ...sketch }),
  ev('withdrawal', 1260, B('۱۲۶۰ م', '1260 CE'), 'admin', P.TABRIZ, B('بازگشت به آذربایجان', 'Back to Azerbaijan'), B('خبر مرگ مونگکه رسید و هولاکو با بیشتر سپاه از شام بازگشت و تنها نیرویی کوچک زیر فرمان کیتوبوقا ماند.', 'News of Möngke’s death arrived, and Hulagu withdrew from Syria with most of the army, leaving only a small force under Ket-Buqa.'), 'disputed', ['iranica-ilkhanids', 'boyle-chi'], { route: [P.ALEPPO, P.AKHLAT, P.TABRIZ], ...note('انگیزه روشن نیست: کمبود چراگاه، ترس از اردوی زرین، یا امید به تخت خان بزرگ.', 'The motive is unclear: lack of pasture, fear of the Golden Horde, or hope of the Great Khan’s throne.') }),
  ev('ain-jalut', 1260, B('۳ سپتامبر ۱۲۶۰ م', '3 September 1260 CE'), 'battle', P.AIN_JALUT, B('عین جالوت', '‘Ain Jalut'), B('سپاه ممالیک مصر به فرمان قطز، کیتوبوقا را در عین جالوت در فلسطین شکست داد و کشت. فرمانروایی کوتاه مغول در غرب فرات پایان یافت.', 'The Mamluk army of Egypt under Qutuz defeated and killed Ket-Buqa at ‘Ain Jalut in Palestine. The short period of Mongol rule west of the Euphrates was over.'), 'secure', ['iranica-ilkhanids', 'boyle-chi']),
  ev('terek', 1263, B('۱۳ ژانویهٔ ۱۲۶۳ م', '13 January 1263 CE'), 'battle', P.TEREK, B('شکست کنار ترک', 'Defeat on the Terek'), B('جنگ با برکه، خان اردوی زرین و پسرعموی هولاکو، آغاز شده بود. سپاه ایلخانی به فرمان اباقا شکست خورد و هنگام عقب‌نشینی، یخ رود ترک زیر پایشان شکست و بسیاری غرق شدند.', 'War had broken out with Berke, khan of the Golden Horde and Hulagu’s cousin. The Ilkhanid army under Abaqa was defeated, and as it withdrew the ice of the Terek gave way and many drowned.'), 'secure', ['boyle-chi', 'iranica-ilkhanids'], { route: [P.TABRIZ, P.TEREK], ...sketch }),
  ev('death', 1265, B('۸ فوریهٔ ۱۲۶۵ م', '8 February 1265 CE'), 'admin', P.ZARRINEH, B('مرگ کنار زرینه‌رود', 'Death on the Zarrineh Rud'), B('در قشلاقش کنار زرینه‌رود مرد. او را در دژی در جزیرهٔ شاهی در دریاچهٔ ارومیه، جایی که گنج‌هایش بود، به خاک سپردند. به گفتهٔ بویل این آخرین بار است که از دفن قربانیان انسانی با شاهزاده‌ای چنگیزی خبر داریم.', 'He died in his winter quarters on the Zarrineh Rud and was buried in the castle on Shahi island in Lake Urmia, where his treasure was kept. Boyle says this is the last time human victims are recorded as buried with a Chingizid prince.'), 'secure', ['boyle-chi', 'iranica-hulagu']),
]

const campaignEvents = [
  ev('c-maymundiz', 1256, B('نوامبر ۱۲۵۶', 'Nov 1256'), 'battle', P.MAYMUNDIZ, B('میمون‌دژ', 'Maymun-Diz'), B('دژهای اسماعیلی تسلیم شدند.', 'The Isma‘ili castles surrender.'), 'secure', ['boyle-chi'], { route: [P.SHIBARGHAN, P.NISHAPUR, P.QAZVIN, P.MAYMUNDIZ] }),
  ev('c-baghdad', 1258, B('فوریهٔ ۱۲۵۸', 'Feb 1258'), 'battle', P.BAGHDAD, B('بغداد', 'Baghdad'), B('خلیفه تسلیم و کشته شد.', 'The caliph surrenders and is killed.'), 'secure', ['boyle-chi'], { route: [P.MAYMUNDIZ, P.HAMADAN, P.BAGHDAD] }),
  ev('c-maragheh', 1258, B('۱۲۵۸', '1258'), 'admin', P.MARAGHEH, B('مراغه', 'Maragheh'), B('پایتخت تازه در آذربایجان.', 'A new capital in Azerbaijan.'), 'secure', ['boyle-chi'], { route: [P.BAGHDAD, P.HAMADAN, P.MARAGHEH] }),
  ev('c-aleppo', 1260, B('ژانویهٔ ۱۲۶۰', 'Jan 1260'), 'battle', P.ALEPPO, B('حلب', 'Aleppo'), B('شهر در کمتر از یک هفته گرفته شد.', 'The town falls in under a week.'), 'secure', ['boyle-chi'], { route: [P.MARAGHEH, P.AKHLAT, P.MOSUL, P.ALEPPO] }),
  ev('c-damascus', 1260, B('مارس ۱۲۶۰', 'Mar 1260'), 'campaign', P.DAMASCUS, B('دمشق', 'Damascus'), B('شهر بی‌جنگ تسلیم شد.', 'The city surrenders without a fight.'), 'secure', ['boyle-chi'], { route: [P.ALEPPO, P.HOMS, P.DAMASCUS] }),
  ev('c-ain-jalut', 1260, B('سپتامبر ۱۲۶۰', 'Sep 1260'), 'battle', P.AIN_JALUT, B('عین جالوت', '‘Ain Jalut'), B('ممالیک کیتوبوقا را شکست دادند.', 'The Mamluks defeat Ket-Buqa.'), 'secure', ['boyle-chi'], { route: [P.DAMASCUS, P.AIN_JALUT] }),
  ev('c-terek', 1263, B('ژانویهٔ ۱۲۶۳', 'Jan 1263'), 'battle', P.TEREK, B('رود ترک', 'The Terek'), B('شکست از اردوی زرین.', 'Defeat by the Golden Horde.'), 'secure', ['boyle-chi'], { route: [P.TABRIZ, P.TEREK] }),
]

export const hulaguDossier: DossierSection[] = [
  sec('baghdad', 'بغداد: پایان یک خلافت', 'Baghdad: the end of a caliphate',
    [['سپاه هولاکو از چند سو به بغداد رسید و شهر را محاصره کرد. در ۱۰ فوریهٔ ۱۲۵۸ خلیفه مستعصم با سه پسرش بیرون آمد. به فرمان او مردم سلاح گذاشتند و بیرون آمدند و، به نوشتهٔ بویل، «هنگام بیرون آمدن کشتار شدند». در ۲۰ فوریه خود خلیفه کشته شد. یکی از خاندان عباسی بعدها به شام گریخت و ممالیک او را در ۱۲۶۱ خلیفه کردند.'], ['Hulagu’s armies converged on Baghdad and besieged it. On 10 February 1258 the caliph al-Musta‘sim came out with his three sons. On his order the people laid down their arms and came out, only, in Boyle’s words, “to be slaughtered as they issued into the open”. On 20 February the caliph himself was killed. A member of the Abbasid family later reached Syria, and the Mamluks made him caliph in 1261.']],
    [['شمار کشتگان را نمی‌آوریم؛ رقم‌های منابع بسیار متفاوت و اغراق‌آمیزند. چگونگی مرگ خلیفه هم قطعی نیست: خواجه نصیر و رشیدالدین دربارهٔ آن خاموش‌اند و داستان پیچیدن او در فرش و لگدکوب کردنش از منابع پسین است؛ بویل آن را «تقریباً به‌یقین» درست می‌داند.'], ['We give no death toll; the figures in the sources vary widely and are exaggerated. How the caliph died is not certain either: Nasir al-Din and Rashid al-Din are silent, and the story that he was rolled in a carpet and trampled comes from later writers, though Boyle thinks them “almost certainly right”.']],
    [['قدرت یک نهاد کهن، بی‌سپاه و بی‌متحد، در برابر نیرویی تازه دوام نمی‌آورد.'], ['An ancient institution without an army or allies cannot hold out against a new power.']],
    ['boyle-chi', 'iranica-ilkhanids'], { photos: ['baghdad-fall'] }),
  sec('mission', 'دستور برادر یا دولتی برای خود؟', 'His brother’s orders, or a state of his own?',
    [['رشیدالدین می‌نویسد مونگکه به هولاکو فرمان داد اسماعیلیان را براندازد، کردها و لرها را رام کند و خلیفه را مطیع سازد؛ و آشکارا گفت پس از آن بازگردد، اما در نهان گفت او و فرزندانش در ایران بمانند. پس از مرگ مونگکه در ۱۲۵۹، هولاکو عملاً دولتی مستقل ساخت که حدود سه ربع سده دوام آورد.'], ['Rashid al-Din writes that Möngke ordered Hulagu to destroy the Isma‘ilis, subdue the Kurds and Lurs and bring the caliph to submission; and that he publicly told him to come home afterwards, but secretly told him that he and his descendants should stay in Iran. After Möngke died in 1259, Hulagu in effect built an independent state that lasted some three-quarters of a century.']],
    [['امیتای هشدار می‌دهد که رشیدالدین هوادار آشکار خاندان تولی و ایلخانان بود و جوینی، که هم‌روزگار بود، این دستور نهانی را تأیید نمی‌کند. منابع ممالیک حتی می‌گویند هولاکو از مأموریتش فراتر رفت. پس آغاز «دولت ایلخانی» محل بحث است.'], ['Amitai warns that Rashid al-Din was an open partisan of the Toluids and the Ilkhans, and that the contemporary Juvayni does not confirm the secret order. Mamluk sources even suggest that Hulagu went beyond his brief. So how the Ilkhanid state began is disputed.']],
    [['تاریخ‌نویس درباری، داستان آغاز را به سود خاندان شاه می‌نویسد؛ خواننده باید این را بداند.'], ['A court historian tells the founding story in the dynasty’s favour; the reader needs to know that.']],
    ['iranica-hulagu', 'iranica-ilkhanids'], { photos: ['hulagu-doquz'] }),
  sec('property', 'دارایی: گنج در جزیره، مالیات بر مردم', 'Property: treasure on an island, taxes on the people',
    [['گنج‌های هولاکو در دژی در جزیرهٔ شاهی در دریاچهٔ ارومیه نگه داشته می‌شد و خودش هم همان‌جا به خاک سپرده شد. امیتای می‌نویسد نظام مالیاتی مغولان «سنگین‌تر و دلبخواهی‌تر» از پیش بود؛ با این همه، دوران هولاکو و اباقا اندکی ثبات آورد، هرچند عراق و جزیره از این یورش آسیب دیدند.'], ['Hulagu’s treasure was kept in the castle on Shahi island in Lake Urmia, and he was buried there too. Amitai writes that the Mongol tax system was “both more onerous and more capricious” than before; even so, the reigns of Hulagu and Abaqa brought some stability, though Iraq and the Jazira suffered from the conquest.']],
    [['این خوانش ماست: در این دولت تازه، ثروت گردآمده از جنگ و مالیات در دست خاندان فرمانروا و جدا از مردم انبار می‌شد؛ گنجی در جزیره، نه سرمایه‌ای در گردش.'], ['This is our reading: in this new state, wealth gathered from war and taxes was stored by the ruling family, apart from the people: a treasure on an island, not capital in circulation.']],
    [['ثروتی که انبار شود و به گردش درنیاید، کشور را آباد نمی‌کند.'], ['Wealth that is hoarded and never circulates does not make a country prosper.']],
    ['boyle-chi', 'iranica-ilkhanids']),
]

export const hulagu: FeaturedKing = {
  slug: 'hulagu',
  name: B('هولاکو', 'Hulagu'),
  dynastyName: B('ایلخانان', 'The Ilkhanids'),
  reign: B('۱۲۵۶–۱۲۶۵ م', '1256–1265 CE'),
  title: B('هولاکو؛ الموت، بغداد و عین جالوت', 'Hulagu: Alamut, Baghdad and ‘Ain Jalut'),
  lede: B(
    'نوهٔ چنگیز که به فرمان برادرش مونگکه به ایران آمد. دژهای اسماعیلی را گرفت، بغداد را گشود و به خلافت عباسی پایان داد، اما در شام از ممالیک شکست خورد. دولتی که ساخت، ایلخانی، نزدیک هشتاد سال بر ایران فرمان راند. لشکرکشی‌ها را روی نقشه دنبال کنید.',
    'Chinggis Khan’s grandson, sent to Iran by his brother Möngke. He took the Isma‘ili castles, captured Baghdad and ended the Abbasid caliphate, but was beaten by the Mamluks in Syria. The state he built, the Ilkhanate, ruled Iran for nearly eighty years. Follow the campaigns on the map.',
  ),
  stats: [
    { n: B('۹ سال', '9 years'), l: B('در ایران (۱۲۵۶–۱۲۶۵)', 'in Iran (1256–1265)') },
    { n: B('۱۲۵۸', '1258'), l: B('سقوط بغداد (م)', 'fall of Baghdad (CE)') },
    { n: B('۱۲۶۰', '1260'), l: B('عین جالوت (م)', '‘Ain Jalut (CE)') },
    { n: B('کمتر از ۲ هفته', '< 2 weeks'), l: B('محاصرهٔ میمون‌دژ', 'siege of Maymun-Diz') },
  ],
  mapTitle: B('نقشهٔ متحرک: زندگی و لشکرکشی‌ها', 'Animated map: life and campaigns'),
  events: hulaguEvents,
  span: [1253, 1265],
  campaign: {
    id: 'campaigns',
    title: B('لشکرکشی‌های هولاکو: از الموت تا عین جالوت (۱۲۵۶–۱۲۶۳ م)', 'Hulagu’s campaigns: from Alamut to ‘Ain Jalut (1256–1263 CE)'),
    intro: { fa: ['از دژهای اسماعیلی تا بغداد، مراغه، حلب و دمشق، سپس شکست عین جالوت و جنگ با اردوی زرین. تاریخ‌ها از بویل و ایرانیکاست؛ راه‌ها طرح‌وارند.'], en: ['From the Isma‘ili castles to Baghdad, Maragheh, Aleppo and Damascus, then the defeat at ‘Ain Jalut and the war with the Golden Horde. Dates follow Boyle and Iranica; the routes are sketches.'] },
    events: campaignEvents, span: [1256, 1263], view: [33, 30, 67, 45],
    places: [
      { name: B('شبرغان', 'Shibarghan'), c: P.SHIBARGHAN, left: true }, { name: B('میمون‌دژ', 'Maymun-Diz'), c: P.MAYMUNDIZ }, { name: B('بغداد', 'Baghdad'), c: P.BAGHDAD },
      { name: B('مراغه', 'Maragheh'), c: P.MARAGHEH, left: true }, { name: B('حلب', 'Aleppo'), c: P.ALEPPO }, { name: B('دمشق', 'Damascus'), c: P.DAMASCUS },
      { name: B('عین جالوت', '‘Ain Jalut'), c: P.AIN_JALUT, dy: 0.6 }, { name: B('رود ترک', 'Terek'), c: P.TEREK, left: true }, { name: B('همدان', 'Hamadan'), c: P.HAMADAN },
    ],
    clip: { gif: B('/media/hulagu/campaigns-fa.gif', '/media/hulagu/campaigns-en.gif'), mp4: B('/media/hulagu/campaigns-fa.mp4', '/media/hulagu/campaigns-en.mp4'), webm: B('/media/hulagu/campaigns-fa.webm', '/media/hulagu/campaigns-en.webm'), poster: B('/media/hulagu/campaigns-fa.png', '/media/hulagu/campaigns-en.png'), width: 958, height: 356 },
  },
  dossier: hulaguDossier,
  synthesis: { title: B('جمع‌بندی: ویرانگر و بنیان‌گذار', 'Synthesis: destroyer and founder'), paras: {
    fa: [
      'هولاکو خلافت عباسی و دولت اسماعیلی را برانداخت و دولتی ساخت که از آمودریا تا آناتولی را در بر می‌گرفت. شکست عین جالوت مرز غربی آن را در فرات نگه داشت و جنگ با اردوی زرین نشان داد امپراتوری مغول دیگر یکپارچه نیست.',
      'از دید دارایی، ثروت این دولت تازه از جنگ و مالیاتی سنگین می‌آمد و در گنجخانهٔ خاندان انبار می‌شد؛ اصلاح این نظام چهل سال بعد کار غازان شد.',
    ],
    en: [
      'Hulagu destroyed the Abbasid caliphate and the Isma‘ili state and built a state reaching from the Oxus to Anatolia. The defeat at ‘Ain Jalut held its western frontier at the Euphrates, and the war with the Golden Horde showed that the Mongol empire was no longer one.',
      'Through the lens of property, the new state’s wealth came from war and heavy taxes and was stored in the dynasty’s treasury; reforming that system fell to Ghazan forty years later.',
    ],
  }, sources: ['iranica-hulagu', 'iranica-ilkhanids', 'boyle-chi'] },
  sources: ilkSources,
  photos: ilkPhotos,
  related: [
    { href: { fa: '/dynasty/ilkhanids', en: '/dynasty/ilkhanids' }, label: B('دودمان ایلخانی', 'The Ilkhanid dynasty') },
    { href: { fa: '/king/ghazan', en: '/en/king/ghazan' }, label: B('غازان و رشیدالدین', 'Ghazan and Rashid al-Din') },
  ],
  wikipedia: 'https://en.wikipedia.org/wiki/Hulagu_Khan',
}
