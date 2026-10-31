/**
 * Reza Shah Pahlavi: the 1921 coup, the end of the Qajars (1925), the new state, and the abdication of 1941.
 * Spine: Yarshater (Iran ii, page 5) and the Chronology of Iranian History, with Ferrier (Anglo-Iranian relations),
 * Sheikh-ol-Islami (Army) and Sheikholeslami (Administration) in Encyclopaedia Iranica as counterweights.
 */
import type { DossierSection, FeaturedKing } from '../featured/types'
import { ev, note, sec } from '../late-achaemenid/common'
import { B, P, pvPhotos, pvSources } from './common'

const YA = ['yarshater-iran-p5']
const C2 = ['iranica-chronology-2']
const C3 = ['iranica-chronology-3']
const FE = ['iranica-anglo-iranian-iii']
const AD = ['iranica-administration-vii']

const sketch = note('منابع راه دقیق را نمی‌گویند؛ خط‌ها طرح‌وارند.', 'The sources give no exact routes; the lines are sketches.')
const ironside = note(
  'گاه‌شمار ایرانیکا می‌نویسد ژنرال آیرونساید بریتانیایی در قزوین با رضاخان دربارهٔ کودتا گفت‌وگو کرد. فریه در همان دانشنامه میزان همدستی بریتانیا را «محل بحث» می‌داند: تشویق شخصی آیرونساید را می‌پذیرد، اما پشتیبانی رسمی دولت بریتانیا را نه.',
  'The Iranica chronology says the British General Ironside discussed a coup with Reza Khan in Qazvin. Ferrier, in the same encyclopaedia, calls the extent of British complicity “a moot issue”: he accepts Ironside’s personal encouragement, not official British support.',
)
const nameYear = note(
  'یارشاطر این درخواست را در ۱۹۳۴ می‌گذارد و گاه‌شمار ایرانیکا در ۱۹۳۵. هر دو را می‌گوییم.',
  'Yarshater puts the request in 1934 and the Iranica chronology in 1935. We give both.',
)
const abdication = note(
  'فریه می‌نویسد علت اصلی استعفا «محل بحث» است، اما سیاستی از پیش طراحی‌شده از سوی بریتانیا نبود، هرچند برخی مقام‌های بریتانیایی آن را می‌خواستند.',
  'Ferrier writes that the principal cause of the abdication “is disputable”, but that it was not a premeditated act of British policy, although some British officials desired it.',
)
const oilThreat = note(
  'یارشاطر می‌نویسد شاه «ظاهراً» پس از تهدید بریتانیا کوتاه آمد؛ جزئیات این فشار در منابع ما روشن نیست.',
  'Yarshater writes that the shah gave way “apparently” after British threats; the details of that pressure are not clear in our sources.',
)

export const rezaEvents = [
  ev('coup', 1921, B('۲۱ فوریهٔ ۱۹۲۱ م (۳ اسفند ۱۲۹۹)', '21 February 1921 CE'), 'campaign', P.TEHRAN, B('کودتای ۱۲۹۹', 'The coup of 1921'), B('سید ضیاءالدین طباطبایی و رضاخان میرپنج با قزاق‌ها از قزوین به تهران آمدند و پایتخت را گرفتند. نقش بریتانیا محل بحث است.', 'Sayyed Zia al-Din Tabatabai and Reza Khan Mirpanj marched with the Cossacks from Qazvin and took Tehran. Britain’s role is disputed.'), 'disputed', [...C2, ...FE], { ...ironside, route: [P.QAZVIN, P.TEHRAN] }),
  ev('premier', 1923, B('۱۹۲۳ م', '1923 CE'), 'admin', P.TEHRAN, B('نخست‌وزیر', 'Prime minister'), B('سید ضیاء پس از سه ماه کنار رفت. رضاخان، که وزیر جنگ بود، در ۱۹۲۳ نخست‌وزیر شد و احمدشاه به اروپا رفت.', 'Sayyed Zia was ousted after three months. Reza Khan, minister of war, became prime minister in 1923 and Ahmad Shah left for Europe.'), 'secure', [...YA, ...C2]),
  ev('khazal', 1924, B('۱۹۲۴ م', '1924 CE'), 'campaign', P.KHORRAMSHAHR, B('پایان کار شیخ خزعل', 'Shaikh Khazal removed'), B('رضاخان شیخ خزعل، حاکم نیمه‌مستقل محمره (خرمشهر)، را برانداخت و به تهران آورد.', 'Reza Khan overthrew Shaikh Khazal, the semi-independent ruler of Mohammareh (Khorramshahr), and brought him to Tehran.'), 'secure', [...YA, ...C2], { route: [P.TEHRAN, P.KHORRAMSHAHR] }),
  ev('end-qajar', 1925, B('۳۱ اکتبر ۱۹۲۵ م (۹ آبان ۱۳۰۴)', '31 October 1925 CE'), 'admin', P.TEHRAN, B('پایان قاجار', 'The end of the Qajars'), B('مجلس به پادشاهی قاجار پایان داد. تقی‌زاده، مصدق، علاء و مدرس آن را خلاف قانون اساسی دانستند. در دسامبر مجلس مؤسسان رضاخان را شاه کرد.', 'The Majles ended Qajar rule. Taqizadeh, Mosaddeq, Ala and Modarres opposed it as unconstitutional. In December a Constituent Assembly made Reza Khan shah.'), 'secure', [...YA, ...C2]),
  ev('justice', 1927, B('۱۹۲۷ م', '1927 CE'), 'admin', P.TEHRAN, B('دادگستری نو و پایان کاپیتولاسیون', 'New courts; capitulations ended'), B('علی‌اکبر داور دادگستری را از نو ساخت و امتیازهای قضایی بیگانگان (کاپیتولاسیون) لغو شد.', 'Ali-Akbar Davar rebuilt the justice system, and the extraterritorial rights of foreigners (capitulations) were abolished.'), 'secure', [...YA, ...C2]),
  ev('dress', 1928, B('۱۹۲۸ م', '1928 CE'), 'admin', P.TEHRAN, B('قانون لباس یکسان', 'Uniform dress law'), B('قانون لباس متحدالشکل گذشت و قرار شد هر سال صد دانشجو به خرج دولت به اروپا بروند.', 'The uniform dress law was passed, and one hundred students a year were to be sent to Europe at state expense.'), 'secure', [...YA, ...C2]),
  ev('oil-1933', 1933, B('۱۹۳۲–۱۹۳۳ م', '1932–1933 CE'), 'admin', P.ABADAN, B('امتیاز دارسی و قرارداد ۱۹۳۳', 'The D’Arcy concession and the 1933 agreement'), B('شاه امتیاز نفت دارسی را لغو کرد و کار به جامعهٔ ملل کشید. قرارداد تازهٔ ۱۹۳۳ مدت امتیاز را سی سال بیشتر کرد.', 'The shah cancelled the D’Arcy oil concession and the case went to the League of Nations. The new agreement of 1933 extended the concession by thirty years.'), 'probable', [...YA, ...C2, ...C3], oilThreat),
  ev('teymurtash', 1933, B('۱۹۳۳ م', '1933 CE'), 'admin', P.TEHRAN, B('مرگ تیمورتاش', 'Teymurtash killed'), B('عبدالحسین تیمورتاش، وزیر دربار پیشین، به فرمان شاه در زندان کشته شد.', 'Abd al-Hosayn Teymurtash, the former court minister, was murdered in prison on the shah’s orders.'), 'secure', C3),
  ev('university', 1935, B('فوریهٔ ۱۹۳۵ م', 'February 1935 CE'), 'building', P.TEHRAN, B('دانشگاه تهران', 'University of Tehran'), B('دانشگاه تهران گشوده شد. یک سال بعد کلاس‌های شبانهٔ بزرگسالان آغاز شد.', 'The University of Tehran was opened. A year later evening classes for adults began.'), 'secure', YA),
  ev('iran-name', 1935, B('۱۹۳۴ یا ۱۹۳۵ م', '1934 or 1935 CE'), 'admin', P.TEHRAN, B('«ایران» به جای «پرشیا»', '“Iran” instead of “Persia”'), B('دولت از کشورهای دیگر خواست در نامه‌نگاری رسمی نام «ایران» را به کار برند.', 'The government asked other countries to use the name “Iran” in official correspondence.'), 'disputed', [...YA, ...C3], nameYear),
  ev('gowharshad', 1935, B('۱۹۳۵ م', '1935 CE'), 'religion', P.MASHHAD, B('گوهرشاد', 'Gowharshad'), B('در مسجد گوهرشاد مشهد مردم و روحانیان به قانون لباس اعتراض کردند. سربازان آتش گشودند و کشته‌های بسیار برجا ماند. نایب‌التولیه، محمدولی اسدی، اعدام شد.', 'In the Gowharshad Mosque in Mashhad clerics and people protested against the dress code. Troops opened fire, with heavy casualties. The shrine’s superintendent, Mohammad-Vali Asadi, was executed.'), 'secure', C3),
  ev('unveiling', 1936, B('۱۹۳۶ م', '1936 CE'), 'admin', P.TEHRAN, B('کشف حجاب', 'Unveiling'), B('ملکه و دختران شاه بی‌حجاب در مراسمی عمومی ظاهر شدند و چادر ممنوع شد.', 'The queen and the shah’s daughters appeared unveiled at a public ceremony, and the chador was banned.'), 'secure', C3),
  ev('modarres', 1937, B('۱۹۳۷ م', '1937 CE'), 'admin', P.KASHMAR, B('قتل مدرس', 'Modarres killed'), B('سید حسن مدرس، روحانی سیاسی و از مخالفان شاه، در بازداشت پلیس در کاشمر کشته شد.', 'Sayyed Hasan Modarres, a political cleric who opposed the shah, was murdered by police while in their custody in Kashmar.'), 'secure', C3),
  ev('railway', 1938, B('۱۹۲۷–۱۹۳۸ م', '1927–1938 CE'), 'building', P.VERESK, B('راه‌آهن سراسری', 'The Trans-Iranian Railway'), B('راه‌آهن از بندر شاه در کنار دریای خزر تا خرمشهر در کنار خلیج فارس ساخته شد و پول آن از مالیات قند و چای آمد.', 'The railway was built from Bandar-e Shah on the Caspian to Khorramshahr on the Persian Gulf, paid for by taxes on sugar and tea.'), 'secure', [...YA, ...AD], { route: [P.BANDAR_SHAH, P.VERESK, P.TEHRAN, P.QOM, P.KHORRAMSHAHR] }),
  ev('abdication', 1941, B('۱۶ سپتامبر ۱۹۴۱ م (۲۵ شهریور ۱۳۲۰)', '16 September 1941 CE'), 'admin', P.TEHRAN, B('اشغال و استعفا', 'Invasion and abdication'), B('نیروهای بریتانیا و شوروی وارد ایران شدند. رضاشاه به سود پسرش استعفا داد و به تبعید رفت. علت اصلی استعفا محل بحث است.', 'British and Soviet forces entered Iran. Reza Shah abdicated in favour of his son and went into exile. The principal cause of the abdication is disputed.'), 'disputed', [...YA, ...C3, ...FE], abdication),
]

const campaignEvents = [
  rezaEvents[0],
  ev('gilan', 1921, B('۱۹۲۱ م', '1921 CE'), 'campaign', P.RASHT, B('گیلان', 'Gilan'), B('رضاخان میرزا کوچک‌خان و نیروهای کمونیست را در گیلان شکست داد.', 'Reza Khan defeated Kuchak Khan and the Communist forces in Gilan.'), 'secure', C2, { ...sketch, route: [P.TEHRAN, P.QAZVIN, P.RASHT] }),
  rezaEvents[2],
  rezaEvents[3],
  ev('conscription', 1925, B('۶ ژوئن ۱۹۲۵ م', '6 June 1925 CE'), 'admin', P.TEHRAN, B('قانون نظام وظیفه', 'Conscription law'), B('مجلس قانون نظام وظیفهٔ عمومی را گذراند؛ ارتش نوین پایهٔ قدرت رضاشاه بود.', 'The Majles passed the law of general conscription; the new army was the base of Reza Shah’s power.'), 'secure', ['iranica-army-vi', ...C2]),
  rezaEvents[10],
  rezaEvents[13],
  ev('invasion', 1941, B('۱۹۴۱ م', '1941 CE'), 'campaign', P.TABRIZ, B('اشغال از شمال و جنوب', 'Invasion from north and south'), B('ارتش شوروی از شمال و ارتش بریتانیا از جنوب وارد ایران شد.', 'The Soviet army entered from the north and the British army from the south.'), 'secure', [...YA, ...C3], { ...sketch, route: [P.TABRIZ, P.QAZVIN, P.TEHRAN] }),
  rezaEvents[14],
]

const rezaDossier: DossierSection[] = [
  sec('rise', 'از قزاق تا شاه', 'From Cossack officer to shah',
    [[
      'رضاخان افسر بریگاد قزاق بود. در کودتای ۱۹۲۱ با سید ضیاء تهران را گرفت، سپس وزیر جنگ و در ۱۹۲۳ نخست‌وزیر شد.',
      'در ۱۹۲۴ کوشید جمهوری اعلام کند، اما علما مخالفت کردند و او کنار کشید. در اکتبر ۱۹۲۵ مجلس قاجار را برانداخت و در دسامبر مجلس مؤسسان او را شاه کرد.',
    ], [
      'Reza Khan was an officer of the Cossack division. In the 1921 coup he took Tehran with Sayyed Zia, then became minister of war and, in 1923, prime minister.',
      'In 1924 he tried to declare a republic, but the ulama opposed it and he withdrew. In October 1925 the Majles deposed the Qajars, and in December a Constituent Assembly made him shah.',
    ]],
    [[
      'منابع دربارهٔ نقش بریتانیا یکی نیستند: گاه‌شمار ایرانیکا از گفت‌وگوی آیرونساید با رضاخان می‌گوید و فریه پشتیبانی رسمی بریتانیا را نمی‌پذیرد. ما این پرسش را باز می‌گذاریم.',
      'شیخ‌الاسلامی در مقالهٔ «ارتش» می‌نویسد قدرت پهلوی‌ها برخلاف دودمان‌های پیشین بر ایل تکیه نداشت، بلکه بر نهادهای دولت.',
    ], [
      'The sources disagree on Britain’s role: the Iranica chronology reports Ironside discussing the coup with Reza Khan, and Ferrier does not accept official British support. We leave the question open.',
      'Sheikh-ol-Islami, in the article “Army”, writes that unlike earlier dynasties the Pahlavis’ power rested not on a tribe but on the institutions of the state.',
    ]],
    [[
      'این برداشت ماست: مجلسی که مشروطه ساخته بود خودش دودمان تازه را برگزید؛ چهار نماینده‌ای که مخالفت کردند نشان می‌دهند که این کار در همان روز هم بی‌چون‌وچرا نبود.',
    ], [
      'This is our reading: the parliament created by the constitution itself chose the new dynasty; the four deputies who objected show that the step was contested even on the day.',
    ]],
    [...YA, ...C2, ...FE, 'iranica-army-vi'], { photos: ['reza-portrait', 'reza-coronation'], quotes: [
      { text: 'The extent of British complicity in the coup d’état of Sayyed Żīāʾ-al-dīn Ṭabāṭabāʾī and of Reżā Khan is a moot issue.', fa: '«میزان همدستی بریتانیا در کودتای سید ضیاءالدین طباطبایی و رضاخان مسئله‌ای محل بحث است.»', ref: 'R. W. Ferrier, “Anglo-Iranian Relations iii”, Encyclopaedia Iranica', source: 'iranica-anglo-iranian-iii' },
      { text: 'the Pahlavis are the only ones whose power from the beginning was not tribally based but instead depended on the instrumentalities of the state institutions.', fa: '«پهلوی‌ها تنها دودمانی‌اند که قدرتشان از آغاز بر ایل تکیه نداشت، بلکه به ابزارهای نهادهای دولتی وابسته بود.»', ref: 'M. J. Sheikh-ol-Islami, “Army vi. Pahlavi period”, Encyclopaedia Iranica', source: 'iranica-army-vi' },
    ] }),
  sec('reforms', 'دولت نو: راه‌آهن، دادگستری، دانشگاه', 'The new state: railway, courts, university',
    [[
      'در شانزده سال پادشاهی او دادگستری نو ساخته شد، کاپیتولاسیون لغو شد، راه‌آهن سراسری (۱۹۲۷–۱۹۳۸) با پول مالیات قند و چای کشیده شد و دانشگاه تهران در ۱۹۳۵ گشوده شد.',
      'شیخ‌الاسلامی (مقالهٔ «دیوان‌سالاری») می‌نویسد هزینهٔ راه‌آهن نزدیک به درآمد ده سال نفت بود.',
    ], [
      'In his sixteen-year reign new courts were built, the capitulations were abolished, the Trans-Iranian Railway (1927–1938) was laid with money from taxes on sugar and tea, and the University of Tehran opened in 1935.',
      'Sheikholeslami (article “Administration”) writes that the railway cost a sum nearly equal to a decade of oil revenue.',
    ]],
    [[
      'یارشاطر کارنامهٔ او را بسیار بزرگ می‌داند. همو می‌نویسد رفتار خودکامهٔ شاه دستاورد جنبش مشروطه را از میان برد. ما هر دو داوری را با نام نویسنده می‌آوریم.',
    ], [
      'Yarshater judges his record very large. The same author writes that the shah’s dictatorial behaviour subverted the results of the Constitutional movement. We give both judgements under the author’s name.',
    ]],
    [[
      'این برداشت ماست: بسیاری از نهادهایی که ایرانیان امروز می‌شناسند، مانند دانشگاه تهران و راه‌آهن شمال–جنوب، در این دوره ساخته شدند؛ اما دولتی که ساخت، از مردم نمی‌پرسید.',
    ], [
      'This is our reading: many institutions Iranians know today, such as the University of Tehran and the north–south railway, were built in this period; but the state that built them did not ask the people.',
    ]],
    [...YA, ...AD], { photos: ['veresk-bridge'], quotes: [
      { text: 'It is difficult to find in the long Persian history another monarch, with the possible exception of Cyrus, Darius I, and the Sasanid Ardašir I, who achieved so much in so little time.', fa: '«در تاریخ دراز ایران دشوار است پادشاه دیگری بیابیم، شاید جز کوروش و داریوش یکم و اردشیر ساسانی، که در زمانی چنین کوتاه این‌همه کار کرده باشد.»', ref: 'E. Yarshater, “Iran ii. Iranian history (2) Islamic period, page 5”, Encyclopaedia Iranica', source: 'yarshater-iran-p5' },
    ] }),
  sec('repression', 'سرکوب، لباس و حجاب', 'Repression, dress and the veil',
    [[
      'تیمورتاش (۱۹۳۳) در زندان به فرمان شاه کشته شد و مدرس (۱۹۳۷) در بازداشت پلیس. در ۱۹۳۵ اعتراض به قانون لباس در مسجد گوهرشاد مشهد با آتش سربازان و کشته‌های بسیار پایان یافت.',
      'در ۱۹۳۶ ملکه و دختران شاه بی‌حجاب در مراسمی عمومی ظاهر شدند و چادر ممنوع شد.',
    ], [
      'Teymurtash (1933) was murdered in prison on the shah’s orders and Modarres (1937) in police custody. In 1935 a protest against the dress law in the Gowharshad Mosque in Mashhad ended with troops firing and heavy casualties.',
      'In 1936 the queen and the shah’s daughters appeared unveiled at a public ceremony, and the chador was banned.',
    ]],
    [[
      'یارشاطر هم که کارنامهٔ او را می‌ستاید، از «خودکامگی» او می‌نویسد که انتقاد آزاد را خفه کرد و ترس را جای ستایش پیشین نشاند. منابع ما شمار کشته‌های گوهرشاد را نمی‌دهند؛ ما عددی نمی‌سازیم.',
    ], [
      'Even Yarshater, who praises his record, writes of the “autocratic arbitrariness” that stifled free criticism in his later years, when fear of him replaced the earlier admiration. Our sources give no death toll for Gowharshad; we do not invent one.',
    ]],
    [[
      'این برداشت ماست: کشف حجاب و قانون لباس هنوز از بحث‌برانگیزترین کارهای این دوره‌اند؛ برای برخی نشان آزادی زنان و برای برخی نشان زور دولت بر زندگی خصوصی.',
    ], [
      'This is our reading: unveiling and the dress law are still among the most argued-over acts of the period; to some a sign of women’s freedom, to others of state force over private life.',
    ]],
    [...YA, ...C3]),
  sec('property', 'زمین، دولت و خاندان', 'Land, state and household',
    [[
      'یارشاطر می‌نویسد شاه در مازندران زمین‌های بسیار خرید و بهایی که مأموران او پرداختند «کم از مصادره نبود». گاه‌شمار ایرانیکا می‌نویسد محمدرضاشاه از ۱۹۵۱ بیشتر این زمین‌ها را با بهای کم به صاحبان پیشین بازگرداند.',
      'شیخ‌الاسلامی می‌نویسد دیوان‌سالاری در ظاهر زیر قانون مجلس بود، اما در عمل دنبالهٔ خاندان پهلوی بود.',
    ], [
      'Yarshater writes that the shah acquired large estates in Mazandaran and that the price his agents paid “proved little short of confiscatory”. The Iranica chronology records that from 1951 Mohammad Reza Shah returned most of these lands to their original owners at a low price.',
      'Sheikholeslami writes that the bureaucracy stood within the framework of the Majles on the surface, but in practice was an extension of the Pahlavi household.',
    ]],
    [[
      'این برداشت ماست: در این دوره مرز میان دارایی دولت و دارایی شاه کم‌رنگ شد. همان دولتی که امتیاز بیگانگان را برچید، زمین رعیت را با بهای ناچیز به شاه داد.',
    ], [
      'This is our reading: in this period the line between the state’s property and the shah’s property grew faint. The same state that ended foreigners’ privileges let the shah take peasants’ land at a nominal price.',
    ]],
    [[
      'این برداشت ماست: پرسش «مال دولت از آنِ کیست؟» پس از او هم ماند و در دوره‌های بعد بارها دوباره پیش آمد.',
    ], [
      'This is our reading: the question “whose is the state’s property?” outlived him and returned again and again in later periods.',
    ]],
    [...YA, ...AD, ...C3], { quotes: [
      { text: 'Superficially, the bureaucracy existed within the framework set by the Majlis; in practice, it was an extension of the Pahlavi household.', fa: '«در ظاهر، دیوان‌سالاری در چارچوبی بود که مجلس تعیین کرده بود؛ در عمل، دنبالهٔ خاندان پهلوی بود.»', ref: 'A. Sheikholeslami, “Administration in Iran vii. Pahlavi period”, Encyclopaedia Iranica', source: 'iranica-administration-vii' },
    ] }),
  sec('fall', 'اشغال، استعفا و تبعید', 'Invasion, abdication and exile',
    [[
      'در ۱۹۴۱ بریتانیا و شوروی ایران را اشغال کردند. رضاشاه در ۱۶ سپتامبر به سود پسرش استعفا داد، به موریس و سپس ژوهانسبورگ تبعید شد و در ۱۹۴۴ درگذشت.',
      'پیکرش در ۱۹۵۰ به ایران آمد. گاه‌شمار ایرانیکا می‌نویسد آرامگاهش پس از انقلاب ۱۹۷۹ ویران شد.',
    ], [
      'In 1941 Britain and the Soviet Union occupied Iran. Reza Shah abdicated in favour of his son on 16 September, was exiled to Mauritius and then Johannesburg, and died in 1944.',
      'His body was brought back to Iran in 1950. The Iranica chronology records that his mausoleum was demolished after the revolution of 1979.',
    ]],
    [[
      'فریه علت اصلی استعفا را «محل بحث» می‌داند، اما آن را سیاست از پیش طراحی‌شدهٔ بریتانیا نمی‌شمارد. ارتشی که پایهٔ قدرت او بود در برابر اشغال دوام نیاورد.',
    ], [
      'Ferrier calls the principal cause of the abdication “disputable”, but does not see it as premeditated British policy. The army that was the base of his power did not hold against the invasion.',
    ]],
    [[
      'این برداشت ماست: داوری دربارهٔ رضاشاه امروز هم دوپاره است؛ ما هر دو سوی آن را با منبع آوردیم و داوری نهایی را به خواننده می‌سپاریم.',
    ], [
      'This is our reading: judgement of Reza Shah is still divided today; we have set out both sides with their sources and leave the final verdict to the reader.',
    ]],
    [...YA, ...C3, ...FE], { quotes: [
      { text: 'The principal cause of the abdication of Reżā Shah in favor of his eldest son is disputable, but it was not a premeditated act of British policy', fa: '«علت اصلی استعفای رضاشاه به سود پسر بزرگش محل بحث است، اما کاری از پیش طراحی‌شده در سیاست بریتانیا نبود.»', ref: 'R. W. Ferrier, “Anglo-Iranian Relations iii”, Encyclopaedia Iranica', source: 'iranica-anglo-iranian-iii' },
    ] }),
]

export const rezaShah: FeaturedKing = {
  slug: 'reza-shah',
  name: B('رضاشاه پهلوی', 'Reza Shah Pahlavi'),
  dynastyName: B('پهلوی', 'The Pahlavis'),
  reign: B('۱۹۲۵–۱۹۴۱ م', '1925–1941 CE'),
  title: B('رضاشاه؛ کودتا، دولت نو و استعفا', 'Reza Shah: coup, new state and abdication'),
  lede: B(
    'افسر قزاقی که با کودتای ۱۹۲۱ به قدرت رسید و در ۱۹۲۵ شاه شد. ارتش، دادگستری، راه‌آهن و دانشگاه ساخت و هم‌زمان مخالفان را سرکوب کرد. در ۱۹۴۱، پس از اشغال ایران، به سود پسرش استعفا داد.',
    'A Cossack officer who came to power in the coup of 1921 and became shah in 1925. He built an army, courts, a railway and a university, and at the same time crushed his opponents. In 1941, after Iran was occupied, he abdicated in favour of his son.',
  ),
  stats: [
    { n: B('۱۶ سال', '16 years'), l: B('پادشاهی (۱۹۲۵–۱۹۴۱)', 'reign (1925–1941)') },
    { n: B('۱۱ سال', '11 years'), l: B('ساخت راه‌آهن سراسری (۱۹۲۷–۱۹۳۸)', 'building the Trans-Iranian Railway (1927–1938)') },
    { n: B('۱۰۰', '100'), l: B('دانشجو در سال به اروپا، از ۱۹۲۸', 'students a year to Europe, from 1928') },
    { n: B('۱۶ سپتامبر ۱۹۴۱', '16 Sep 1941'), l: B('استعفا', 'abdication') },
  ],
  mapTitle: B('نقشهٔ متحرک: زندگی و رویدادها', 'Animated map: life and events'),
  events: rezaEvents,
  span: [1921, 1941],
  lifeMap: { view: [44, 28, 61, 39.5], places: [
    { name: B('تهران', 'Tehran'), c: P.TEHRAN, dy: -0.5 }, { name: B('قزوین', 'Qazvin'), c: P.QAZVIN, left: true }, { name: B('خرمشهر', 'Khorramshahr'), c: P.KHORRAMSHAHR, left: true },
    { name: B('مشهد', 'Mashhad'), c: P.MASHHAD }, { name: B('کاشمر', 'Kashmar'), c: P.KASHMAR }, { name: B('بندر شاه', 'Bandar-e Shah'), c: P.BANDAR_SHAH },
  ] },
  campaign: {
    id: 'campaigns',
    title: B('از کودتا تا استعفا (۱۹۲۱–۱۹۴۱ م)', 'From coup to abdication (1921–1941 CE)'),
    intro: { fa: ['کودتا، یکپارچه‌سازی کشور، راه‌آهن و اشغال ۱۹۴۱. خط‌های حرکت طرح‌وارند.'], en: ['The coup, the unification of the country, the railway and the occupation of 1941. Movement lines are sketches.'] },
    events: campaignEvents, span: [1921, 1941], view: [44, 28, 61, 39.5],
    places: [
      { name: B('تهران', 'Tehran'), c: P.TEHRAN, dy: -0.5 }, { name: B('قزوین', 'Qazvin'), c: P.QAZVIN, left: true }, { name: B('رشت', 'Rasht'), c: P.RASHT, left: true },
      { name: B('تبریز', 'Tabriz'), c: P.TABRIZ, left: true }, { name: B('خرمشهر', 'Khorramshahr'), c: P.KHORRAMSHAHR, left: true }, { name: B('مشهد', 'Mashhad'), c: P.MASHHAD },
      { name: B('بندر شاه', 'Bandar-e Shah'), c: P.BANDAR_SHAH },
    ],
    clip: { gif: B('/media/reza-shah/campaigns-fa.gif', '/media/reza-shah/campaigns-en.gif'), mp4: B('/media/reza-shah/campaigns-fa.mp4', '/media/reza-shah/campaigns-en.mp4'), webm: B('/media/reza-shah/campaigns-fa.webm', '/media/reza-shah/campaigns-en.webm'), poster: B('/media/reza-shah/campaigns-fa.png', '/media/reza-shah/campaigns-en.png'), width: 958, height: 356 },
  },
  shareImage: '/media/reza-shah/campaigns-en.png',
  dossier: rezaDossier,
  synthesis: { title: B('جمع‌بندی: دولتی نیرومند، مجلسی ناتوان', 'Synthesis: a strong state, a weak parliament'), paras: {
    fa: [
      'رضاشاه دولتی متمرکز با ارتش، دادگستری، مدرسه و راه‌آهن ساخت و قدرت ایل‌ها و امتیازهای بیگانگان را برچید. یارشاطر این را کارنامه‌ای کم‌مانند می‌داند.',
      'همان منابع می‌گویند او مخالفان را کشت یا زندانی کرد، مجلس را بی‌اثر کرد و زمین‌های بسیار برای خود گرفت. با اشغال ۱۹۴۱ ارتشش دوام نیاورد و او ناچار به استعفا شد.',
    ],
    en: [
      'Reza Shah built a centralised state with an army, courts, schools and a railway, and broke the power of the tribes and the privileges of foreigners. Yarshater judges this a record with few equals.',
      'The same sources say he killed or jailed opponents, emptied the Majles of force and took large estates for himself. When Iran was occupied in 1941 his army did not hold and he was forced to abdicate.',
    ],
  }, sources: [...YA, ...AD, ...FE] },
  sources: pvSources,
  photos: pvPhotos,
  related: [
    { href: { fa: '/dynasty/pahlavis', en: '/dynasty/pahlavis' }, label: B('دودمان پهلوی', 'The Pahlavi dynasty') },
    { href: { fa: '/king/naser-al-din', en: '/en/king/naser-al-din' }, label: B('ناصرالدین‌شاه و مشروطه', 'Naser al-Din Shah and the constitution') },
  ],
  wikipedia: 'https://en.wikipedia.org/wiki/Reza_Shah',
}
