/**
 * Reza Shah Pahlavi (1878–1944): from Alasht and the Cossack Brigade to the throne, the new state, the 1941 abdication,
 * exile and the Rey mausoleum. Spine: Yarshater (Iran ii, page 5) and the Iranica chronology; Iranica biographies of
 * Davar, Foroughi, Sardar As'ad and the court; Wikipedia only for plain dates, always labelled as such.
 */
import type { DossierSection, FeaturedKing, Person } from '../featured/types'
import { ev, note, sec } from '../late-achaemenid/common'
import { B, P, pvPhotos, pvSources, rzSources } from './common'
import { rzPhotos } from './reza-photos'

const YA = ['yarshater-iran-p5']
const C2 = ['iranica-chronology-2']
const C3 = ['iranica-chronology-3']
const FE = ['iranica-anglo-iranian-iii']
const AD = ['iranica-administration-vii']
const WP = ['wp-reza-shah']

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
const crownDay = note(
  'مقالهٔ «فروغی» در ایرانیکا روز تاج‌گذاری را ۴ اردیبهشت ۱۳۰۵ (۲۴ آوریل ۱۹۲۶) می‌نویسد و ویکی‌پدیا ۲۵ آوریل. اختلاف یک روزه است.',
  'The Iranica article on Foroughi gives the coronation as 4 Ordibehesht 1305 (24 April 1926); Wikipedia gives 25 April. The two differ by a day.',
)
const cossackYear = note(
  'ویکی‌پدیا می‌گوید در شانزده‌سالگی به قزاق‌ها پیوست؛ سال ۱۸۹۴ از همین سن حساب شده است.',
  'Wikipedia says he joined the Cossacks at sixteen; the year 1894 is reckoned from that age.',
)
const capDate = note(
  'به گفتهٔ مقالهٔ «داور» در ایرانیکا، شاه در ۲۵ آوریل ۱۹۲۷، هنگام گشایش دادگستری نو، پایان کاپیتولاسیون را اعلام کرد؛ لغو آن در ۱۹۲۸ به اجرا درآمد.',
  'According to the Iranica article on Davar, the shah announced the end of the capitulations on 25 April 1927, at the opening of the new judiciary; their abolition took effect in 1928.',
)
const goharToll = note(
  'شمار کشته‌ها روشن نیست. ویکی‌پدیا از گزارشی با رقم ۲٬۰۰۰ تا ۵٬۰۰۰ یاد می‌کند و می‌افزاید که این گزارش شاید عمداً اغراق کرده باشد. ما عددی نمی‌دهیم.',
  'The death toll is unclear. Wikipedia cites a report of 2,000 to 5,000 dead and adds that it may have exaggerated deliberately. We give no number.',
)
const mummy = note(
  'در آوریل ۲۰۱۸ در کار گسترش حرم شاه‌عبدالعظیم پیکری مومیایی‌شده پیدا شد که شاید از آنِ رضاشاه باشد. این هرگز به‌طور رسمی تأیید نشده است.',
  'In April 2018 a mummified body that may be Reza Shah’s was found during the expansion of the Shah Abdol-Azim shrine. This has never been officially confirmed.',
)
const teyDeath = note(
  'گاه‌شمار ایرانیکا می‌نویسد او به فرمان شاه در زندان کشته شد؛ شائول بخاش (۲۰۲۵) می‌نویسد «به احتمال بسیار» چنین بود.',
  'The Iranica chronology says he was murdered in prison on the shah’s orders; Shaul Bakhash (2025) writes that this was so “in all probability”.',
)

export const rezaEvents = [
  ev('birth', 1878, B('۱۵ مارس ۱۸۷۸ م', '15 March 1878 CE'), 'admin', P.ALASHT, B('زادهٔ آلاشت', 'Born in Alasht'), B('رضا، پسر عباسعلی، در آلاشت سوادکوه مازندران زاده شد.', 'Reza, son of Abbas-Ali, was born in Alasht in the Savadkuh district of Mazandaran.'), 'secure', WP),
  ev('cossack', 1894, B('حدود ۱۸۹۴ م', 'about 1894 CE'), 'campaign', P.TEHRAN, B('سرباز بریگاد قزاق', 'A soldier of the Cossack Brigade'), B('در شانزده‌سالگی به بریگاد قزاق پیوست و در آن پله‌پله تا فرماندهی بالا رفت.', 'At sixteen he joined the Cossack Brigade, where he rose step by step to command.'), 'probable', WP, cossackYear),
  ev('coup', 1921, B('۲۱ فوریهٔ ۱۹۲۱ م (۳ اسفند ۱۲۹۹)', '21 February 1921 CE'), 'campaign', P.TEHRAN, B('کودتای ۱۲۹۹', 'The coup of 1921'), B('سید ضیاءالدین طباطبایی و رضاخان میرپنج با حدود ۲٬۲۰۰ قزاق از قزوین به تهران آمدند و پایتخت را تقریباً بی‌خونریزی گرفتند. نقش بریتانیا محل بحث است.', 'Sayyed Zia al-Din Tabatabai and Reza Khan Mirpanj marched some 2,200 Cossacks from Qazvin and took Tehran almost without bloodshed. Britain’s role is disputed.'), 'disputed', [...C2, ...FE, 'iranica-coup-1921'], { ...ironside, route: [P.QAZVIN, P.TEHRAN] }),
  ev('premier', 1923, B('۱۹۲۳ م', '1923 CE'), 'admin', P.TEHRAN, B('نخست‌وزیر', 'Prime minister'), B('سید ضیاء پس از سه ماه کنار رفت. رضاخان، که وزیر جنگ بود، در ۱۹۲۳ نخست‌وزیر شد و احمدشاه به اروپا رفت.', 'Sayyed Zia was ousted after three months. Reza Khan, minister of war, became prime minister in 1923 and Ahmad Shah left for Europe.'), 'secure', [...YA, ...C2]),
  ev('khazal', 1924, B('۱۹۲۴ م', '1924 CE'), 'campaign', P.KHORRAMSHAHR, B('پایان کار شیخ خزعل', 'Shaikh Khazal removed'), B('رضاخان شیخ خزعل، حاکم نیمه‌مستقل محمره (خرمشهر)، را برانداخت و به تهران آورد.', 'Reza Khan overthrew Shaikh Khazal, the semi-independent ruler of Mohammareh (Khorramshahr), and brought him to Tehran.'), 'secure', [...YA, ...C2], { route: [P.TEHRAN, P.KHORRAMSHAHR] }),
  ev('end-qajar', 1925, B('۳۱ اکتبر ۱۹۲۵ م (۹ آبان ۱۳۰۴)', '31 October 1925 CE'), 'admin', P.TEHRAN, B('پایان قاجار', 'The end of the Qajars'), B('مجلس به پیشنهاد داور به پادشاهی قاجار پایان داد. تقی‌زاده، مصدق، علاء و مدرس آن را خلاف قانون اساسی دانستند. در دسامبر مجلس مؤسسان رضاخان را شاه کرد.', 'On a bill introduced by Davar, the Majles ended Qajar rule. Taqizadeh, Mosaddeq, Ala and Modarres opposed it as unconstitutional. In December a Constituent Assembly made Reza Khan shah.'), 'secure', [...YA, ...C2, 'iranica-davar']),
  ev('coronation', 1926, B('آوریل ۱۹۲۶ م (اردیبهشت ۱۳۰۵)', 'April 1926 CE'), 'admin', P.TEHRAN, B('تاج‌گذاری', 'Coronation'), B('رضاشاه تاج‌گذاری کرد و محمدعلی فروغی، نخست‌وزیر، خطابهٔ آیین را خواند.', 'Reza Shah was crowned, and the prime minister, Mohammad-Ali Foroughi, gave the address.'), 'probable', ['iranica-forughi', ...WP], crownDay),
  ev('justice', 1927, B('۲۵ آوریل ۱۹۲۷ م', '25 April 1927 CE'), 'admin', P.TEHRAN, B('دادگستری نو و پایان کاپیتولاسیون', 'New courts; capitulations ended'), B('داور دادگستری کهنه را منحل کرد و دادگستری نو را گشود. شاه در همان آیین پایان امتیازهای قضایی بیگانگان را اعلام کرد.', 'Davar dissolved the old judiciary and opened the new one. At the same ceremony the shah announced the end of the extraterritorial rights of foreigners.'), 'secure', [...YA, ...C2, 'iranica-davar'], capDate),
  ev('dress', 1928, B('۱۹۲۸ م', '1928 CE'), 'admin', P.TEHRAN, B('قانون لباس یکسان', 'Uniform dress law'), B('قانون لباس متحدالشکل گذشت و قرار شد هر سال صد دانشجو به خرج دولت به اروپا بروند.', 'The uniform dress law was passed, and one hundred students a year were to be sent to Europe at state expense.'), 'secure', [...YA, ...C2]),
  ev('bank-melli', 1928, B('۱۹۲۸ م', '1928 CE'), 'building', P.TEHRAN, B('بانک ملی ایران', 'Bank Melli Iran'), B('بانک ملی ایران بنیاد شد تا وابستگی به بانک شاهنشاهی بریتانیایی پایان گیرد؛ مجلس سپس حق انحصاری نشر اسکناس را به آن داد.', 'Bank Melli Iran was founded to end dependence on the British-owned Imperial Bank; the Majles later gave it the monopoly of issuing banknotes.'), 'secure', [...YA, 'wp-bank-melli']),
  ev('antiquities', 1930, B('۳ نوامبر ۱۹۳۰ م', '3 November 1930 CE'), 'building', P.TEHRAN, B('قانون عتیقات', 'The antiquities law'), B('انحصار حفاری فرانسه در ۱۹۲۷ پایان یافته بود. قانون حفظ آثار عتیقه کاوش را زیر نظر دولت درآورد و یافته‌ها را میان ایران و کاوشگران به‌تساوی بخش کرد.', 'The French excavation monopoly had ended in 1927. The Conservation of Antiquities Act put digging under state control and divided finds equally between Iran and the excavators.'), 'secure', ['iranica-excavations', 'wp-museum']),
  ev('oil-1933', 1933, B('۱۹۳۲–۱۹۳۳ م', '1932–1933 CE'), 'admin', P.ABADAN, B('امتیاز دارسی و قرارداد ۱۹۳۳', 'The D’Arcy concession and the 1933 agreement'), B('شاه امتیاز نفت دارسی را لغو کرد و کار به جامعهٔ ملل کشید. قرارداد تازهٔ ۱۹۳۳ مدت امتیاز را سی سال بیشتر کرد.', 'The shah cancelled the D’Arcy oil concession and the case went to the League of Nations. The new agreement of 1933 extended the concession by thirty years.'), 'probable', [...YA, ...C2, ...C3], oilThreat),
  ev('teymurtash', 1933, B('۳ اکتبر ۱۹۳۳ م', '3 October 1933 CE'), 'admin', P.TEHRAN, B('مرگ تیمورتاش', 'Teymurtash killed'), B('عبدالحسین تیمورتاش، وزیر دربار پیشین، در زندان قصر کشته شد.', 'Abd al-Hosayn Teymurtash, the former court minister, died a prisoner in Qasr prison.'), 'secure', [...C3, 'bakhash-teymourtash'], teyDeath),
  ev('sardar-asad', 1934, B('۲ آوریل ۱۹۳۴ م', '2 April 1934 CE'), 'admin', P.TEHRAN, B('مرگ سردار اسعد', 'Sardar As‘ad dies in prison'), B('جعفرقلی‌خان سردار اسعد بختیاری، وزیر جنگ، که در سفر مازندران بازداشت شده بود، در زندان درگذشت.', 'Ja‘far-qoli Khan Sardar As‘ad Bakhtiari, the war minister, arrested during the Mazandaran tour, died in prison.'), 'secure', ['iranica-sardar-asad', ...C3]),
  ev('ferdowsi', 1934, B('۱۹۳۴ م', '1934 CE'), 'building', P.TUS, B('هزارهٔ فردوسی', 'The Ferdowsi millennium'), B('کنگرهٔ هزارهٔ فردوسی با خاورشناسان جهان برگزار شد و آرامگاه شاعر در توس گشوده شد.', 'The Ferdowsi millennium congress gathered orientalists from abroad, and the poet’s tomb at Tus was opened.'), 'secure', [...YA, 'wp-hekmat']),
  ev('university', 1935, B('۴ فوریهٔ ۱۹۳۵ م', '4 February 1935 CE'), 'building', P.TEHRAN, B('دانشگاه تهران', 'University of Tehran'), B('دانشگاه تهران، بر پایهٔ قانون ۱۹۳۴، گشوده شد. یک سال بعد کلاس‌های شبانهٔ بزرگسالان آغاز شد.', 'The University of Tehran, founded under the law of 1934, was opened. A year later evening classes for adults began.'), 'secure', [...YA, 'iranica-education-xvii']),
  ev('iran-name', 1935, B('۱۹۳۴ یا ۱۹۳۵ م', '1934 or 1935 CE'), 'admin', P.TEHRAN, B('«ایران» به جای «پرشیا»', '“Iran” instead of “Persia”'), B('دولت از کشورهای دیگر خواست در نامه‌نگاری رسمی نام «ایران» را به کار برند.', 'The government asked other countries to use the name “Iran” in official correspondence.'), 'disputed', [...YA, ...C3], nameYear),
  ev('gowharshad', 1935, B('ژوئیهٔ ۱۹۳۵ م', 'July 1935 CE'), 'religion', P.MASHHAD, B('گوهرشاد', 'Gowharshad'), B('در مسجد گوهرشاد مشهد مردم و روحانیان به قانون لباس اعتراض کردند. سربازان آتش گشودند و کشته‌های بسیار برجا ماند. نایب‌التولیه، محمدولی اسدی، اعدام شد.', 'In the Gowharshad Mosque in Mashhad clerics and people protested against the dress code. Troops opened fire, with heavy casualties. The shrine’s superintendent, Mohammad-Vali Asadi, was executed.'), 'secure', [...C3, 'wp-goharshad'], goharToll),
  ev('unveiling', 1936, B('۸ ژانویهٔ ۱۹۳۶ م (۱۷ دی ۱۳۱۴)', '8 January 1936 CE'), 'admin', P.TEHRAN, B('کشف حجاب', 'Unveiling'), B('ملکه و دختران شاه بی‌حجاب در مراسمی عمومی ظاهر شدند و چادر ممنوع شد. فرمان تا ۱۹۴۱ با زور اجرا می‌شد.', 'The queen and the shah’s daughters appeared unveiled at a public ceremony, and the chador was banned. The decree was enforced by force until 1941.'), 'secure', [...C3, 'wp-kashf']),
  ev('firouz', 1937, B('۱۹۳۷ م', '1937 CE'), 'admin', P.SEMNAN, B('قتل فیروز', 'Firouz killed'), B('شاهزاده فیروز میرزا نصرت‌الدوله، وزیر مالیهٔ پیشین، که از ۱۹۳۰ در بند بود، در خانه‌ای زیر نگهبانی در سمنان خفه شد.', 'Prince Firouz Mirza Nosrat al-Dowleh, the former finance minister, held since 1930, was strangled in a guarded house in Semnan.'), 'secure', ['wp-firouz']),
  ev('davar', 1937, B('فوریهٔ ۱۹۳۷ م (بهمن ۱۳۱۵)', 'February 1937 CE'), 'admin', P.TEHRAN, B('مرگ داور', 'Davar’s death'), B('داور، وزیر مالیه، از بیم خشم شاه با تریاک به زندگی خود پایان داد.', 'Davar, the finance minister, fearing the shah’s displeasure, took his own life with opium.'), 'secure', ['iranica-davar']),
  ev('museum', 1937, B('۱۹۳۷ م', '1937 CE'), 'building', P.TEHRAN, B('موزهٔ ایران باستان', 'The Iran Bastan Museum'), B('موزهٔ ایران باستان، با طرح آندره گدار، گشوده شد.', 'The Iran Bastan Museum, designed by André Godard, was opened.'), 'secure', ['wp-museum', 'iranica-excavations']),
  ev('modarres', 1937, B('۱۹۳۷ م', '1937 CE'), 'admin', P.KASHMAR, B('قتل مدرس', 'Modarres killed'), B('سید حسن مدرس، روحانی سیاسی و از مخالفان شاه، در بازداشت پلیس در کاشمر کشته شد.', 'Sayyed Hasan Modarres, a political cleric who opposed the shah, was murdered by police while in their custody in Kashmar.'), 'secure', C3),
  ev('railway', 1938, B('۱۹۲۷–۱۹۳۸ م', '1927–1938 CE'), 'building', P.VERESK, B('راه‌آهن سراسری', 'The Trans-Iranian Railway'), B('راه‌آهن ۱٬۳۹۴ کیلومتری از بندر شاه در کنار دریای خزر تا بندر شاهپور در کنار خلیج فارس ساخته شد و پول آن از مالیات قند و چای آمد.', 'The 1,394 km railway was built from Bandar-e Shah on the Caspian to Bandar-e Shahpur on the Persian Gulf, paid for by taxes on sugar and tea.'), 'secure', [...YA, ...AD, 'wp-railway'], { route: [P.BANDAR_SHAH, P.VERESK, P.TEHRAN, P.QOM, P.BANDAR_SHAHPUR] }),
  ev('abdication', 1941, B('۱۶ سپتامبر ۱۹۴۱ م (۲۵ شهریور ۱۳۲۰)', '16 September 1941 CE'), 'admin', P.TEHRAN, B('اشغال و استعفا', 'Invasion and abdication'), B('نیروهای بریتانیا و شوروی از ۲۵ اوت وارد ایران شدند. رضاشاه به سود پسرش استعفا داد و به تبعید رفت. علت اصلی استعفا محل بحث است.', 'British and Soviet forces entered Iran from 25 August. Reza Shah abdicated in favour of his son and went into exile. The principal cause of the abdication is disputed.'), 'disputed', [...YA, ...C3, ...FE, 'wp-invasion'], abdication),
  ev('burial', 1950, B('مه ۱۹۵۰ م', 'May 1950 CE'), 'building', P.REY, B('آرامگاه ری', 'The tomb at Rey'), B('رضاشاه در ۱۹۴۴ در ژوهانسبورگ درگذشته بود. پیکرش از قاهره به ایران آمد و در آرامگاهی نزدیک شاه‌عبدالعظیم در ری به خاک سپرده شد. آرامگاه در ۱۹۸۰ ویران شد.', 'Reza Shah had died in Johannesburg in 1944. His body was brought from Cairo and laid in a mausoleum near Shah Abdol-Azim at Rey. The mausoleum was demolished in 1980.'), 'secure', [...WP, 'wp-mausoleum', ...C3], mummy),
]
const byId = (id: string) => rezaEvents.find((e) => e.id === id)!

const campaignEvents = [
  byId('coup'),
  ev('gilan', 1921, B('۱۹۲۱ م', '1921 CE'), 'campaign', P.RASHT, B('گیلان', 'Gilan'), B('رضاخان میرزا کوچک‌خان و نیروهای کمونیست را در گیلان شکست داد.', 'Reza Khan defeated Kuchak Khan and the Communist forces in Gilan.'), 'secure', C2, { ...sketch, route: [P.TEHRAN, P.QAZVIN, P.RASHT] }),
  byId('khazal'),
  byId('end-qajar'),
  ev('conscription', 1925, B('۶ ژوئن ۱۹۲۵ م', '6 June 1925 CE'), 'admin', P.TEHRAN, B('قانون نظام وظیفه', 'Conscription law'), B('مجلس قانون نظام وظیفهٔ عمومی را گذراند؛ ارتش نوین پایهٔ قدرت رضاشاه بود.', 'The Majles passed the law of general conscription; the new army was the base of Reza Shah’s power.'), 'secure', ['iranica-army-vi', ...C2]),
  byId('gowharshad'),
  byId('railway'),
  ev('invasion', 1941, B('۱۹۴۱ م', '1941 CE'), 'campaign', P.TABRIZ, B('اشغال از شمال و جنوب', 'Invasion from north and south'), B('ارتش شوروی از شمال و ارتش بریتانیا از جنوب وارد ایران شد.', 'The Soviet army entered from the north and the British army from the south.'), 'secure', [...YA, ...C3], { ...sketch, route: [P.TABRIZ, P.QAZVIN, P.TEHRAN] }),
  byId('abdication'),
]

const pp = (id: string, name: [string, string], years: [string, string], role: [string, string], bio: [string, string], fate: [string, string], fateKind: Person['fateKind'], sources: string[], photo?: string): Person =>
  ({ id, name: B(...name), years: B(...years), role: B(...role), bio: B(...bio), fate: B(...fate), fateKind, sources, ...(photo ? { photo } : {}) })

const companions: Person[] = [
  pp('foroughi', ['محمدعلی فروغی (ذکاءالملک)', 'Mohammad-Ali Foroughi (Zoka al-Molk)'], ['۱۸۷۷–۱۹۴۲', '1877–1942'], ['نخست‌وزیر، ادیب و فیلسوف', 'Prime minister, man of letters and philosopher'],
    ['رئیس مجلس دوم بود. مجلس مؤسسان ۱۹۲۵ را سامان داد، نخستین نخست‌وزیر رضاشاه شد و خطابهٔ تاج‌گذاری را خواند. در ۱۹۳۵ فرهنگستان را بنیاد نهاد و «سیر حکمت در اروپا» را نوشت.', 'Speaker of the Second Majles. He organised the Constituent Assembly of 1925, became Reza Shah’s first prime minister and gave the coronation address. In 1935 he founded the Farhangestan, the Persian academy, and wrote “The Course of Philosophy in Europe”.'],
    ['در دسامبر ۱۹۳۵، پس از میانجی‌گری برای اسدی (ماجرای گوهرشاد)، کنار گذاشته شد. در ۱۹۴۱ بازگشت و انتقال آرام تاج به محمدرضاشاه را سامان داد. در ۱۹۴۲ درگذشت.', 'Forced out in December 1935 after interceding for Asadi (the Gowharshad affair). Recalled in 1941, he managed the smooth transfer of the crown to Mohammad Reza Shah. Died in 1942.'],
    'dismissed', ['iranica-forughi', ...YA], 'rz-c-foroughi'),
  pp('davar', ['علی‌اکبر داور', 'Ali-Akbar Davar'], ['۱۸۸۵–۱۹۳۷', '1885–1937'], ['وزیر عدلیه و مالیه؛ معمار دادگستری نو', 'Minister of justice and finance; architect of the new judiciary'],
    ['حقوق‌خواندهٔ ژنو. طرح پایان قاجار را به مجلس برد. در وزارت عدلیه (از ۱۹۲۷) دادگستری کهنه را منحل کرد، ۱۲۰ لایحه از جمله قانون مدنی را گذراند و در ۱۹۳۳ از ایران در جامعهٔ ملل دفاع کرد. در وزارت مالیه انحصارهای دولتی را گسترد.', 'Trained in law at Geneva. He introduced the bill ending the Qajars. As justice minister (from 1927) he dissolved the old judiciary, passed 120 bills including the civil code, and in 1933 defended Iran before the League of Nations. As finance minister he extended the state monopolies.'],
    ['در فوریهٔ ۱۹۳۷، از بیم خشم شاه، با تریاک خودکشی کرد.', 'In February 1937, fearing the shah’s disfavour, he killed himself with opium.'],
    'suicide', ['iranica-davar', ...YA], 'rz-c-davar'),
  pp('teymourtash', ['عبدالحسین تیمورتاش', 'Abd al-Hosayn Teymourtash'], ['۱۸۸۱/۸۲–۱۹۳۳', '1881/82–1933'], ['وزیر دربار', 'Minister of court'],
    ['نیرومندترین مرد دولت پس از شاه. هدایت از زبان شاه می‌آورد: «تیمور از جانب من سخن می‌گوید». یارشاطر او و داور را «معماران اصلی دولت پهلوی» می‌خواند.', 'The most powerful man in the state after the shah. Hedayat quotes the shah: “Teymur speaks for me”. Yarshater names him and Davar “the main architects of the Pahlavi state”.'],
    ['در پایان ۱۹۳۲ برکنار و چند هفته بعد زندانی شد و در اکتبر ۱۹۳۳ در زندان قصر درگذشت؛ به گفتهٔ گاه‌شمار ایرانیکا به فرمان شاه کشته شد.', 'Dismissed at the turn of 1932–33 and arrested weeks later; he died in Qasr prison in October 1933, murdered on the shah’s orders according to the Iranica chronology.'],
    'killed', ['iranica-courts-viii', ...C3, 'bakhash-teymourtash', 'wp-teymourtash'], 'rz-c-teymourtash'),
  pp('firouz', ['شاهزاده فیروز میرزا نصرت‌الدوله', 'Prince Firouz Mirza Nosrat al-Dowleh'], ['۱۸۸۹–۱۹۳۷', '1889–1937'], ['وزیر مالیه', 'Minister of finance'],
    ['پسر بزرگ عبدالحسین فرمانفرما. نماینده، والی، وزیر عدلیه و وزیر مالیهٔ رضاشاه بود و یارشاطر نامش را در میان مردان کاردان گرد شاه می‌آورد.', 'Eldest son of Abd al-Hosayn Farmanfarma. He served Reza Shah as deputy, governor, justice minister and finance minister, and Yarshater lists him among the able men around the shah.'],
    ['در ژوئن ۱۹۳۰ به اتهام رشوه بازداشت شد، در سمنان در بند ماند و در ۱۹۳۷ در همان‌جا خفه شد.', 'Arrested in June 1930 on a bribery charge, he was held in Semnan and strangled there in 1937.'],
    'killed', ['wp-firouz', ...YA], 'rz-c-firouz'),
  pp('taqizadeh', ['سید حسن تقی‌زاده', 'Sayyed Hasan Taqizadeh'], ['۱۸۷۸–۱۹۷۰', '1878–1970'], ['وزیر مالیه، دیپلمات و دانشمند', 'Finance minister, diplomat and scholar'],
    ['از رهبران مشروطه و ناشر «کاوه» در برلین. در ۱۹۲۵ با برانداختن قاجار مخالفت کرد، اما بعد والی خراسان، وزیر راه و از ۱۹۳۰ تا ۱۹۳۳ وزیر مالیه شد و در امضای تمدید امتیاز نفت در ۱۹۳۳ شرکت داشت.', 'A leader of the constitutional movement and publisher of Kaveh in Berlin. In 1925 he opposed deposing the Qajars, yet later became governor of Khorasan, minister of roads and, from 1930 to 1933, finance minister; he took part in signing the 1933 oil extension.'],
    ['از ۱۹۳۳ وزیرمختار پاریس شد و سپس سال‌ها در اروپا ماند و در لندن درس داد؛ در ۱۹۴۱، پس از رفتن شاه، سفیر ایران در لندن شد.', 'From 1933 minister in Paris; he then stayed in Europe for years and taught in London. In 1941, after the shah’s fall, he became Iran’s ambassador in London.'],
    'exile', ['wp-taqizadeh', ...YA, 'iranica-chronology-2'], 'rz-c-taqizadeh'),
  pp('hedayat', ['مهدی‌قلی هدایت (مخبرالسلطنه)', 'Mehdi-qoli Hedayat (Mokhber al-Saltaneh)'], ['۱۸۶۳–۱۹۵۵', '1863–1955'], ['نخست‌وزیر', 'Prime minister'],
    ['نزدیک به شش سال و نیم نخست‌وزیر رضاشاه بود و در خاطراتش از درون آن دولت نوشت؛ یکی از منابع اصلی این دوره.', 'Prime minister to Reza Shah for nearly six and a half years; his memoir, written from inside that government, is a main source for the period.'],
    ['در سپتامبر ۱۹۳۳ برکنار شد و تا ۱۹۵۵ زیست.', 'Dismissed in September 1933; he lived until 1955.'],
    'dismissed', ['wp-hedayat', ...YA], 'rz-c-hedayat'),
  pp('sardar-asad', ['جعفرقلی‌خان سردار اسعد بختیاری', 'Ja‘far-qoli Khan Sardar As‘ad Bakhtiari'], ['۱۸۷۸/۷۹–۱۹۳۴', '1878/79–1934'], ['وزیر جنگ', 'Minister of war'],
    ['از سرداران بختیاری فتح تهران در ۱۹۰۹. در کابینهٔ فروغی وزیر جنگ بود.', 'One of the Bakhtiari commanders who took Tehran for the constitutionalists in 1909. He was war minister in Foroughi’s cabinet.'],
    ['در نوامبر ۱۹۳۳ در سفر مازندران بازداشت شد و در آوریل ۱۹۳۴ در زندان درگذشت؛ گاه‌شمار ایرانیکا می‌نویسد به فرمان شاه کشته شد.', 'Arrested on the Mazandaran tour in November 1933, he died in prison in April 1934; the Iranica chronology says he was murdered on the shah’s orders.'],
    'killed', ['iranica-sardar-asad', ...C3], 'rz-c-sardar-asad'),
  pp('mansur', ['علی منصور (منصورالملک)', 'Ali Mansur (Mansur al-Molk)'], ['۱۸۸۶–۱۹۷۴', '1886–1974'], ['وزیر راه؛ واپسین نخست‌وزیر رضاشاه', 'Minister of roads; Reza Shah’s last prime minister'],
    ['هنگام ساخت راه‌آهن سراسری وزیر راه بود و از ۱۹۴۰ نخست‌وزیر شد.', 'Minister of roads during the building of the Trans-Iranian Railway, and prime minister from 1940.'],
    ['چند روز پس از ورود ارتش‌های بیگانه در ۲۵ اوت ۱۹۴۱ کناره گرفت؛ بعدها دوباره نخست‌وزیر شد.', 'Resigned a few days after the foreign armies entered on 25 August 1941; he was prime minister again later.'],
    'natural', ['wp-mansur'], 'rz-c-mansur'),
  pp('hekmat', ['علی‌اصغر حکمت', 'Ali-Asghar Hekmat'], ['۱۸۹۲–۱۹۸۰', '1892–1980'], ['وزیر معارف (فرهنگ)', 'Minister of education (culture)'],
    ['به گفتهٔ ویکی‌پدیا، پردیس دانشگاه تهران، موزهٔ ایران باستان و آرامگاه‌های فردوسی، حافظ و سعدی زیر نظر او ساخته شد.', 'According to Wikipedia, the University of Tehran campus, the Iran Bastan Museum and the tombs of Ferdowsi, Hafez and Saadi were built under his direction.'],
    ['پس از رضاشاه هم وزیر و دیپلمات ماند و در ۱۹۸۰ درگذشت.', 'He remained a minister and diplomat after Reza Shah and died in 1980.'],
    'natural', ['wp-hekmat'], 'rz-c-hekmat'),
  pp('sadiq', ['عیسی صدیق', 'Isa Sadiq'], ['رئیس دانشسرای عالی از ۱۹۳۲', 'Head of the Teachers’ College from 1932'], ['آموزگار آموزگاران', 'The teachers’ teacher'],
    ['دانشسرای عالی را اداره کرد که هستهٔ دانشگاه تهران شد و در تدوین قانون دانشگاه دست داشت.', 'He ran the Teachers’ College, which became the nucleus of the University of Tehran, and helped draft the university law.'],
    ['منابع ما از بازداشت یا برکناری او در این دوره چیزی نمی‌گویند.', 'Our sources record no arrest or dismissal of his in this period.'],
    'natural', ['iranica-education-xix', 'iranica-education-xvii']),
  pp('zia', ['سید ضیاءالدین طباطبایی', 'Sayyed Zia al-Din Tabatabai'], ['۱۸۸۹–۱۹۶۹', '1889–1969'], ['روزنامه‌نگار؛ رهبر سیاسی کودتا', 'Journalist; political leader of the coup'],
    ['روزنامه‌نگار شیرازی که با رضاخان کودتای ۱۲۹۹ را رهبری کرد و نخست‌وزیر شد.', 'A journalist from Shiraz who led the 1921 coup with Reza Khan and became prime minister.'],
    ['پس از حدود سه ماه، در مه ۱۹۲۱، ناچار به کناره‌گیری و ترک ایران شد و تا ۱۹۴۳ بازنگشت.', 'After about three months, in May 1921, he was forced to resign and leave Iran, and did not return until 1943.'],
    'exile', ['wp-zia', ...YA], 'rz-c-zia'),
]

const YQ = 'E. Yarshater, “Iran ii. Iranian history (2) Islamic period, page 5”, Encyclopaedia Iranica'

const rezaDossier: DossierSection[] = [
  sec('early', 'از آلاشت تا بریگاد قزاق', 'From Alasht to the Cossack Brigade',
    [[
      'رضا در ۱۵ مارس ۱۸۷۸ در آلاشت، در کوهستان سوادکوه مازندران، زاده شد. پدرش، عباسعلی‌خان، هشت ماه پس از تولد او درگذشت.',
      'در شانزده‌سالگی به بریگاد قزاق پیوست؛ نیرویی که افسران روس آن را برای شاهان قاجار ساخته بودند. سربازی ساده بود و پله‌پله بالا رفت تا به درجهٔ میرپنج و فرماندهی رسید.',
    ], [
      'Reza was born on 15 March 1878 in Alasht, in the Savadkuh highlands of Mazandaran. His father, Abbas-Ali Khan, died eight months after his birth.',
      'At sixteen he joined the Cossack Brigade, the force Russian officers had built for the Qajar shahs. He started as a private and rose step by step to the rank of mirpanj and to command.',
    ]],
    [[
      'ایرانیکا او را «افسر قزاقی با خاستگاه فرودست» می‌خواند که با تندی و کارنامهٔ نظامی‌اش برگزیده شد. یارشاطر می‌نویسد او مردی کم‌درس بود که از گردآوردن مردانی درس‌خوانده‌تر از خود نمی‌ترسید.',
    ], [
      'Iranica calls him “a Cossack officer of humble origins” chosen for his forcefulness and military record. Yarshater writes that he was a man of little schooling who was not afraid to gather better-educated men around him.',
    ]],
    [[
      'این برداشت ماست: پادشاهی که از سربازخانه برخاست، دولت را هم مانند سپاه می‌دید: با فرمان، نظم و شتاب.',
    ], [
      'This is our reading: a king who rose from the barracks saw the state as an army too: run by command, discipline and speed.',
    ]],
    [...WP, 'iranica-coup-1921', ...YA], { photos: ['rz-cossack-brigade-1909', 'rz-cossack-kermanshah'] }),
  sec('rise', 'کودتای ۱۲۹۹ و برآمدن سردار سپه', 'The 1921 coup and the rise of Sardar Sepah',
    [[
      'در ۱۸ فوریهٔ ۱۹۲۱ حدود ۲٬۲۰۰ قزاق به فرماندهی رضاخان از قزوین به راه افتادند و در ۲۱ فوریه (۳ اسفند ۱۲۹۹) تهران را تقریباً بی‌خونریزی گرفتند. سید ضیاءالدین طباطبایی نخست‌وزیر شد و رضاخان فرمانده قوا و سپس وزیر جنگ.',
      'سید ضیاء پس از سه ماه کنار رفت. رضاخان، با لقب «سردار سپه»، گیلان را از نیروهای میرزا کوچک‌خان پس گرفت، در ۱۹۲۳ نخست‌وزیر شد و در ۱۹۲۴ کار شیخ خزعل را در خوزستان پایان داد.',
      'در ۱۹۲۴ کوشید جمهوری اعلام کند، اما علما مخالفت کردند و او کنار کشید.',
    ], [
      'On 18 February 1921 some 2,200 Cossacks under Reza Khan set out from Qazvin and on 21 February took Tehran almost without bloodshed. Sayyed Zia al-Din Tabatabai became prime minister and Reza Khan commander of the forces, then minister of war.',
      'Sayyed Zia was ousted after three months. Reza Khan, now styled Sardar Sepah, “commander of the army”, retook Gilan from Mirza Kuchak Khan’s forces, became prime minister in 1923 and in 1924 ended the rule of Shaikh Khazal in Khuzestan.',
      'In 1924 he tried to declare a republic, but the ulama opposed it and he withdrew.',
    ]],
    [[
      'نقش بریتانیا هنوز محل بحث است. ایرانیکا می‌نویسد ژنرال آیرونساید رضاخان را به فرماندهی برگزیده بود؛ فریه همدستی رسمی بریتانیا را «محل بحث» می‌داند.',
      'شیخ‌الاسلامی در مقالهٔ «ارتش» می‌نویسد قدرت پهلوی‌ها، برخلاف دودمان‌های پیشین، بر ایل نبود، بر نهادهای دولت بود.',
    ], [
      'Britain’s role is still disputed. Iranica says General Ironside had chosen Reza Khan to command; Ferrier calls official British complicity “a moot issue”.',
      'Sheikh-ol-Islami, in the article “Army”, writes that unlike earlier dynasties the Pahlavis’ power rested not on a tribe but on the institutions of the state.',
    ]],
    [[
      'این برداشت ماست: چهار سال میان کودتا و تاج، چهار سال ساختن ارتشی بود که بعدها همه‌چیز بر آن ایستاد.',
    ], [
      'This is our reading: the four years between the coup and the crown were four years of building the army on which everything else later stood.',
    ]],
    [...C2, ...FE, 'iranica-coup-1921', 'iranica-army-vi', ...YA], { photos: ['rz-sardar-sepah-1925', 'reza-portrait'], quotes: [
      { text: 'The extent of British complicity in the coup d’état of Sayyed Żīāʾ-al-dīn Ṭabāṭabāʾī and of Reżā Khan is a moot issue.', fa: '«میزان همدستی بریتانیا در کودتای سید ضیاءالدین طباطبایی و رضاخان مسئله‌ای محل بحث است.»', ref: 'R. W. Ferrier, “Anglo-Iranian Relations iii”, Encyclopaedia Iranica', source: 'iranica-anglo-iranian-iii' },
      { text: 'the Pahlavis are the only ones whose power from the beginning was not tribally based but instead depended on the instrumentalities of the state institutions.', fa: '«پهلوی‌ها تنها دودمانی‌اند که قدرتشان از آغاز بر ایل تکیه نداشت، بلکه به ابزارهای نهادهای دولتی وابسته بود.»', ref: 'M. J. Sheikh-ol-Islami, “Army vi. Pahlavi period”, Encyclopaedia Iranica', source: 'iranica-army-vi' },
    ] }),
  sec('crown', 'پایان قاجار و تاج‌گذاری', 'The end of the Qajars and the coronation',
    [[
      'در ۳۱ اکتبر ۱۹۲۵ (۹ آبان ۱۳۰۴) داور طرح برکناری قاجار را به مجلس برد؛ هشتاد نماینده از ۸۵ نفر آن را امضا کرده بودند. تقی‌زاده، مصدق، علاء و مدرس آن را خلاف قانون اساسی دانستند.',
      'مجلس مؤسسانی که فروغی سامان داد، در دسامبر ۱۹۲۵ پادشاهی را به رضا پهلوی و خاندانش سپرد. در اردیبهشت ۱۳۰۵ (آوریل ۱۹۲۶) تاج‌گذاری کرد و فروغی خطابهٔ آیین را خواند.',
    ], [
      'On 31 October 1925 Davar introduced the bill deposing the Qajars; 80 of the 85 deputies had signed it. Taqizadeh, Mosaddeq, Ala and Modarres opposed it as unconstitutional.',
      'A Constituent Assembly organised by Foroughi gave the crown to Reza Pahlavi and his house in December 1925. He was crowned in April 1926 (Ordibehesht 1305), and Foroughi gave the address.',
    ]],
    [[
      'دو منبع روز تاج‌گذاری را یک روز جدا می‌نویسند: ایرانیکا ۲۴ و ویکی‌پدیا ۲۵ آوریل. نام‌ها و لقب‌ها در سیاههٔ زیر آمده‌اند.',
    ], [
      'Two sources put the coronation a day apart: Iranica on 24 April, Wikipedia on 25 April. His names and titles are listed below.',
    ]],
    [[
      'این برداشت ماست: مجلسی که مشروطه ساخته بود خودش دودمان تازه را برگزید؛ چهار نماینده‌ای که مخالفت کردند نشان می‌دهند که این کار در همان روز هم بی‌چون‌وچرا نبود.',
    ], [
      'This is our reading: the parliament created by the constitution itself chose the new dynasty; the four deputies who objected show that the step was contested even on the day.',
    ]],
    [...YA, ...C2, 'iranica-davar', 'iranica-forughi', ...WP], { photos: ['rz-takes-throne-1925', 'rz-coronation-1926', 'reza-coronation'], timeline: [
      { when: B('تا ۱۹۲۱', 'to 1921'), text: B('رضاخان میرپنج، افسر بریگاد قزاق', 'Reza Khan Mirpanj, officer of the Cossack Brigade') },
      { when: B('۱۹۲۱–۱۹۲۵', '1921–1925'), text: B('سردار سپه؛ وزیر جنگ و از ۱۹۲۳ نخست‌وزیر', 'Sardar Sepah; minister of war and, from 1923, prime minister') },
      { when: B('دسامبر ۱۹۲۵', 'December 1925'), text: B('رضاشاه پهلوی، شاه ایران', 'Reza Shah Pahlavi, Shah of Iran') },
      { when: B('۱۹۵۰', '1950'), text: B('مجلس پس از مرگش لقب «رضاشاه کبیر» را به او داد', 'After his death the Majles gave him the title “Reza Shah the Great”') },
    ] }),
  sec('reforms', 'دولت نو: سپاه، دیوان و یکپارچگی کشور', 'The new state: army, administration and a united country',
    [[
      'قانون نظام وظیفه در ۶ ژوئن ۱۹۲۵ دو سال خدمت را برای مردان بیست‌ویک‌ساله اجباری کرد. یارشاطر می‌نویسد او «نخستین پادشاه از روزگار هخامنشیان» بود که ارتشی دائمی سازمان داد.',
      'قانون استخدام کشوری در ۱۹۲۲ دیوان‌سالاری نو را پایه گذاشت و در ۱۹۳۷–۱۹۳۸ کشور به استان‌ها بخش شد. نام خانوادگی و شناسنامه اجباری شد و از ۱۹۳۴–۱۹۳۵ دولت خواست کشور را در جهان «ایران» بنامند.',
      'یارشاطر می‌نویسد شاه با ارتشی یکسره وفادار ایل‌های سرکش را آرام کرد، یکجانشینی آنان را با زور به اجرا گذاشت و برای فرزندانشان مدرسه فراهم کرد. اسکان اجباری از سخت‌ترین فصل‌های این دوره برای ایل‌نشینان بود؛ منابع ما در این باره رقمی نمی‌دهند.',
    ], [
      'The conscription law of 6 June 1925 made two years of service compulsory for men of twenty-one. Yarshater writes that he was “the first monarch since Achaemenid times” to organise a standing army.',
      'The civil service law of 1922 laid the base of a modern bureaucracy, and in 1937–38 the country was divided into provinces. Surnames and identity cards became compulsory, and from 1934–35 the government asked the world to call the country “Iran”.',
      'Yarshater writes that with an army wholly loyal to him the shah pacified the rebellious tribes, enforced their settlement and provided schooling for their children. Forced settlement was among the hardest chapters of the period for the tribes; our sources give no figures for it.',
    ]],
    [[
      'یارشاطر کارنامهٔ او را بسیار بزرگ می‌داند. همو می‌نویسد رفتار خودکامهٔ شاه دستاورد جنبش مشروطه را از میان برد. ما هر دو داوری را با نام نویسنده می‌آوریم.',
    ], [
      'Yarshater judges his record very large. The same author writes that the shah’s dictatorial behaviour subverted the results of the Constitutional movement. We give both judgements under the author’s name.',
    ]],
    [[
      'این برداشت ماست: بسیاری از نهادهایی که ایرانیان امروز می‌شناسند، مانند دانشگاه تهران و راه‌آهن شمال–جنوب، در همین دوره بنیاد گذاشته شدند.',
    ], [
      'This is our reading: many institutions Iranians know today, such as the University of Tehran and the north–south railway, were founded in this period.',
    ]],
    [...YA, ...AD, 'iranica-army-vi', 'iranica-firuz-maryam'], { quotes: [
      { text: 'It is difficult to find in the long Persian history another monarch, with the possible exception of Cyrus, Darius I, and the Sasanid Ardašir I, who achieved so much in so little time.', fa: '«در تاریخ دراز ایران دشوار است پادشاه دیگری بیابیم، شاید جز کوروش و داریوش یکم و اردشیر ساسانی، که در زمانی چنین کوتاه این‌همه کار کرده باشد.»', ref: YQ, source: 'yarshater-iran-p5' },
      { text: 'Reza Shah was the first monarch since Achaemenid times to organize a standing army.', fa: '«رضاشاه نخستین پادشاه از روزگار هخامنشیان بود که ارتشی دائمی سازمان داد.»', ref: YQ, source: 'yarshater-iran-p5' },
    ] }),
  sec('railway', 'راه‌آهن سراسری', 'The Trans-Iranian Railway',
    [[
      'از ۱۹۲۷ تا ۱۹۳۸ راه‌آهنی به درازای ۱٬۳۹۴ کیلومتر از بندر شاه در کنار دریای خزر تا بندر شاهپور در کنار خلیج فارس کشیده شد؛ با نزدیک به ۲۳۰ تونل و ۴٬۱۰۰ پل، از دل البرز و زاگرس.',
      'پول آن از مالیات بر قند و چای وارداتی آمد، نه از وام بیگانه. از ۱۹۳۳ کنسرسیوم دانمارکی کامپساکس ساخت را هماهنگ کرد. پل ورسک، نگین این راه، در دسامبر ۱۹۳۵ به پایان رسید. یونسکو در ۲۰۲۱ این راه‌آهن را میراث جهانی شناخت.',
    ], [
      'From 1927 to 1938 a 1,394 km line was laid from Bandar-e Shah on the Caspian to Bandar-e Shahpur on the Persian Gulf, with some 230 tunnels and 4,100 bridges through the Alborz and the Zagros.',
      'It was paid for by taxes on imported sugar and tea, not by foreign loans. From 1933 the Danish consortium Kampsax coordinated the work. The Veresk bridge, the jewel of the line, was finished in December 1935. UNESCO listed the railway as World Heritage in 2021.',
    ]],
    [[
      'یارشاطر آن را «شاهکار» این دوره و «کار شگفت عزم و کارایی» می‌خواند. شیخ‌الاسلامی در مقالهٔ «دیوان‌سالاری» می‌نویسد هزینهٔ آن نزدیک به درآمد ده سال نفت بود.',
    ], [
      'Yarshater calls it the “crowning achievement” of the period and “a remarkable feat of determination and efficiency”. Sheikholeslami, in the article “Administration”, writes that it cost nearly a decade of oil revenue.',
    ]],
    [[
      'این برداشت ماست: راه‌آهن را مردم با هر استکان چای و هر حبه قند پرداختند؛ برای همین، بیش از هر بنای دیگری این دوره، از آنِ همهٔ ایرانیان است.',
    ], [
      'This is our reading: the people paid for the railway with every glass of tea and every lump of sugar; that is why, more than any other building of the period, it belongs to all Iranians.',
    ]],
    [...YA, ...AD, 'wp-railway', 'wp-veresk'], { wide: true, photos: ['rz-railway-last-bolt', 'rz-veresk', 'rz-reza-train-1937'], quotes: [
      { text: 'The crowning achievement in this respect was the building of the trans-Iranian railroad, which connected Khuzestan in the southwest to Gorgān in the northeast, a remarkable feat of determination and efficiency when we consider that it was all done with domestic capital obtained from taxing sugar and tea imports between 1925 and 1938.', fa: '«شاهکار این کارها ساختن راه‌آهن سراسری بود که خوزستان را در جنوب‌باختری به گرگان در شمال‌خاوری پیوست؛ کاری شگفت از عزم و کارایی، چون همه با سرمایهٔ داخلی و از مالیات بر قند و چای وارداتی در سال‌های ۱۹۲۵ تا ۱۹۳۸ انجام شد.»', ref: YQ, source: 'yarshater-iran-p5' },
    ] }),
  sec('justice', 'داور، دادگستری نو و استقلال مالی', 'Davar, the new judiciary and financial independence',
    [[
      'داور در فوریهٔ ۱۹۲۷ وزیر عدلیه شد، دادگستری کهنه را منحل کرد و در ۲۵ آوریل ۱۹۲۷ دادگستری نو را گشود. شاه در همان آیین پایان کاپیتولاسیون را اعلام کرد. در شش سال ۱۲۰ لایحه گذشت، از جمله قانون مدنی.',
      'در ۱۹۲۸ بانک ملی ایران بنیاد شد تا وابستگی به بانک شاهنشاهی بریتانیایی پایان گیرد. داور در وزارت مالیه (از ۱۹۳۳) انحصارهای دولتی و دادوستد پایاپای با آلمان و شوروی را گسترد و کارخانه‌های دولتی پا گرفتند.',
    ], [
      'Davar became justice minister in February 1927, dissolved the old judiciary and opened the new one on 25 April 1927. At the same ceremony the shah announced the end of the capitulations. In six years 120 bills were passed, the civil code among them.',
      'In 1928 Bank Melli Iran was founded to end dependence on the British-owned Imperial Bank. As finance minister (from 1933) Davar extended the state monopolies and barter trade with Germany and the Soviet Union, and state factories took root.',
    ]],
    [[
      'ایرانیکا مهم‌ترین انتقاد به داور را این می‌داند که او حق دخالت در رأی دادگاه‌ها و برکناری قاضیان سرکش را برای خود نگاه داشت؛ اصلاح اصل ۸۲ قانون اساسی در ۱۹۳۱ استقلال قاضیان را سست کرد.',
    ], [
      'Iranica sees the main criticism of Davar in his keeping the power to intervene in court judgments and remove disobedient judges; the 1931 amendment of Article 82 of the constitution weakened judges’ independence.',
    ]],
    [[
      'این برداشت ماست: دادگستری نو بیگانگان را زیر قانون ایران آورد و یکی از پایدارترین میراث این دوره شد.',
    ], [
      'This is our reading: the new judiciary put foreigners under Iranian law and became one of the lasting bequests of the period.',
    ]],
    ['iranica-davar', ...YA, ...C2, 'wp-bank-melli'], { photos: ['rz-c-davar'], quotes: [
      { text: 'Dāvar was a capable, ambitious, and courageous statesman, devoted to his work.', fa: '«داور دولتمردی کاردان، بلندپرواز و دلیر بود و دل در کار خود داشت.»', ref: 'B. Aqeli, “Dāvar, ʿAlī-Akbar”, Encyclopaedia Iranica', source: 'iranica-davar' },
    ] }),
  sec('culture', 'دانشگاه، فرهنگستان و هزارهٔ فردوسی', 'University, academy and the Ferdowsi millennium',
    [[
      'قانون تربیت معلم در ۱۹۳۴ و قانون دانشگاه در همان سال گذشت. دانشسرای عالی، به ریاست عیسی صدیق، هستهٔ دانشگاه شد و دانشگاه تهران در ۴ فوریهٔ ۱۹۳۵ گشوده شد. از ۱۹۲۸ هر سال صد دانشجو به خرج دولت به اروپا رفتند و در ۱۹۳۶ هزار و پانصد کلاس شبانهٔ بزرگسالان برپا شد.',
      'در ۱۹۳۴ کنگرهٔ هزارهٔ فردوسی خاورشناسان جهان را به تهران و توس آورد و آرامگاه شاعر گشوده شد. در ۱۹۳۵ فروغی فرهنگستان را برای پاسداری زبان فارسی بنیاد نهاد.',
    ], [
      'A teachers’ training act and the university law were passed in 1934. The Teachers’ College, under Isa Sadiq, became the nucleus of the university, and the University of Tehran was opened on 4 February 1935. From 1928 one hundred students a year went to Europe at state expense, and in 1936 some 1,500 evening classes for adults were set up.',
      'In 1934 the Ferdowsi millennium congress brought orientalists from abroad to Tehran and Tus, and the poet’s tomb was opened. In 1935 Foroughi founded the Farhangestan to guard the Persian language.',
    ]],
    [[
      'یارشاطر می‌نویسد اصلاحات آموزشی کارآمدترین راهی بود که چنگ روحانیان بر آموزش را سست کرد و به عرفی‌گرایی میدان داد.',
    ], [
      'Yarshater writes that educational reform was the most effective means of loosening the clerical grip on schooling and promoting secularism.',
    ]],
    [[
      'این برداشت ماست: دانشگاه تهران و آرامگاه فردوسی دو روی یک سکه بودند: آینده‌ای به شیوهٔ اروپا و گذشته‌ای که شاهنامه نگاه داشته بود.',
    ], [
      'This is our reading: the University of Tehran and the tomb of Ferdowsi were two sides of one coin: a future on the European model and a past kept alive by the Shahnameh.',
    ]],
    [...YA, 'iranica-education-xvii', 'iranica-education-xix', 'iranica-forughi', 'wp-hekmat'], { photos: ['rz-law-faculty-1939', 'rz-ferdowsi-congress-1934'], quotes: [
      { text: 'Educational reforms were the most effective means that reduced and gradually almost ended the clerical grip on the educational system and promoted secularism.', fa: '«اصلاحات آموزشی کارآمدترین ابزاری بود که چنگ روحانیان بر نظام آموزشی را کاست، کم‌کم تقریباً به پایان رساند و عرفی‌گرایی را پیش برد.»', ref: YQ, source: 'yarshater-iran-p5' },
    ] }),
  sec('heritage', 'باستان‌شناسی و موزهٔ ایران باستان', 'Archaeology and the Iran Bastan Museum',
    [[
      'از قرارداد ۱۸۹۵ و نسخهٔ نهایی ۱۹۰۰، حق حفاری در سراسر ایران در انحصار فرانسه بود و یافته‌های شوش به فرانسه می‌رفت. در نوامبر ۱۹۲۷ این قرارداد لغو شد و فرانسه پذیرفت در ساختن موزه‌ای ملی یاری کند؛ آندره گدار برای این کار به تهران آمد.',
      'در آبان ۱۳۰۹ (نوامبر ۱۹۳۰)، با کوشش فروغی، قانون حفظ آثار عتیقه گذشت: یافته‌های هر کاوش میان ایران و هیئت کاوشگر به‌تساوی بخش می‌شد و ادارهٔ عتیقات به ریاست گدار بنیاد شد. هرتسفلد در ۱۹۲۸ پاسارگاد را کاوید و از ۱۹۳۱ کاوش بزرگ تخت جمشید با هرتسفلد و سپس اشمیت آغاز شد.',
      'موزهٔ ایران باستان، با طرح گدار و ماکسیم سیرو و به الهام از طاق کسری، در ۱۹۳۷ گشوده شد.',
    ], [
      'Under the convention of 1895 and its final form of 1900, France held a monopoly on excavation across Iran, and the finds of Susa went to France. In November 1927 the convention was annulled and France agreed to help create a national museum; André Godard came to Tehran for the task.',
      'In November 1930, through the efforts of Foroughi among others, the Conservation of Antiquities Act was passed: the finds of each excavation were divided equally between Iran and the expedition, and a Department of Antiquities was founded under Godard. Herzfeld dug Pasargadae in 1928, and from 1931 the great Persepolis excavations began under Herzfeld and then Schmidt.',
      'The Iran Bastan Museum, designed by Godard and Maxime Siroux after the Taq-e Kasra, opened in 1937.',
    ]],
    [[
      'منابع دربارهٔ سال‌های ساخت موزه یکسان نیستند: استروناخ در ایرانیکا آغاز کار را ۱۹۲۹ و ساخت را سه‌ساله می‌نویسد؛ ویکی‌پدیا ساخت را از ۱۹۳۵ و دوساله، به دست عباسعلی معمار و مراد تبریزی. هر دو گشایش را ۱۹۳۷ می‌دانند.',
    ], [
      'The sources differ on the building years: Stronach in Iranica puts the start of work in 1929 and the building at three years; Wikipedia has construction from 1935, over two years, by Abbas-Ali Me‘mar and Morad Tabrizi. Both give the opening as 1937.',
    ]],
    [[
      'این برداشت ماست: پیش از این، گذشتهٔ ایران را بیشتر بیگانگان می‌کاویدند و می‌بردند؛ از این پس دست‌کم نیمی از آن در خانه ماند.',
    ], [
      'This is our reading: before this, Iran’s past was dug up and carried off mostly by foreigners; from now on at least half of it stayed at home.',
    ]],
    ['iranica-excavations', 'wp-museum'], { photos: ['rz-iran-bastan'] }),
  sec('oil', 'نفت: لغو امتیاز دارسی و قرارداد ۱۹۳۳', 'Oil: the D’Arcy concession cancelled and the 1933 agreement',
    [[
      'در ۱۹۳۲ شاه امتیاز دارسی را لغو کرد و بریتانیا شکایت به جامعهٔ ملل برد. داور در ژنو از ایران دفاع کرد. در ۱۹۳۳ قرارداد تازه‌ای بسته شد که سهم ایران را بیشتر کرد، اما مدت امتیاز را سی سال افزود. تقی‌زاده، وزیر مالیه، در امضای آن شرکت داشت.',
    ], [
      'In 1932 the shah cancelled the D’Arcy concession and Britain took the case to the League of Nations. Davar defended Iran at Geneva. A new agreement in 1933 raised Iran’s share but extended the concession by thirty years. Taqizadeh, the finance minister, took part in signing it.',
    ]],
    [[
      'یارشاطر می‌نویسد شاه «ظاهراً» زیر تهدید نظامی بریتانیا، با اکراه بسیار، کوتاه آمد؛ و این به نومیدی کابینه‌اش انجامید.',
    ], [
      'Yarshater writes that the shah, “apparently” under the threat of British military intervention, relented most reluctantly, to the despondent consternation of his cabinet.',
    ]],
    [[
      'این برداشت ماست: لغو امتیاز گامی دلیرانه بود و پایانش عقب‌نشینی؛ نفت تا دو دهه بعد پرسش اصلی سیاست ایران ماند.',
    ], [
      'This is our reading: cancelling the concession was a bold step and its end a retreat; oil remained the central question of Iranian politics for two decades more.',
    ]],
    [...YA, ...C2, ...C3, 'iranica-davar', 'wp-taqizadeh'], { quotes: [
      { text: 'apparently threatened by the British with military intervention, Reza Shah most reluctantly relented', fa: '«رضاشاه، ظاهراً زیر تهدید مداخلهٔ نظامی بریتانیا، با اکراه بسیار کوتاه آمد.»', ref: YQ, source: 'yarshater-iran-p5' },
    ] }),
  sec('women', 'زنان، لباس و کشف حجاب', 'Women, dress and unveiling',
    [[
      'برخی زنان فرهیخته، چون صدیقه دولت‌آبادی، از ۱۹۲۸ بی‌حجاب در جامعه ظاهر شده بودند. قانون لباس متحدالشکل در ۱۹۲۸ گذشت و در ۸ ژانویهٔ ۱۹۳۶ (۱۷ دی ۱۳۱۴) ملکه و دختران شاه بی‌حجاب در آیینی عمومی ظاهر شدند و چادر ممنوع شد. فرمان تا ۱۹۴۱ با زور پلیس اجرا می‌شد و دولت هم‌زمان جنبش «بیداری زنان» (۱۹۳۶–۱۹۴۱) را پیش برد.',
      'در ژوئیهٔ ۱۹۳۵ اعتراض به قانون لباس در مسجد گوهرشاد مشهد با آتش سربازان پایان یافت. نایب‌التولیه، محمدولی اسدی، اعدام شد و فروغی، که برای او میانجی شده بود، کنار رفت.',
    ], [
      'Some educated women, such as Sadiqeh Dowlatabadi, had appeared unveiled in public from 1928. The uniform dress law passed in 1928, and on 8 January 1936 the queen and the shah’s daughters appeared unveiled at a public ceremony and the chador was banned. The decree was enforced by the police until 1941, while the state promoted the Women’s Awakening movement (1936–41).',
      'In July 1935 a protest against the dress law in the Gowharshad Mosque in Mashhad ended with troops opening fire. The shrine’s superintendent, Mohammad-Vali Asadi, was executed, and Foroughi, who had interceded for him, was forced out.',
    ]],
    [[
      'شمار کشته‌های گوهرشاد روشن نیست؛ رقم ۲٬۰۰۰ تا ۵٬۰۰۰ از گزارشی است که شاید عمداً اغراق کرده باشد. ما عددی نمی‌سازیم. ویکی‌پدیا می‌نویسد زنانی که نخست بی‌حجاب به جامعه آمدند بیشتر از طبقهٔ درس‌خواندهٔ شهری بودند.',
    ], [
      'The death toll at Gowharshad is unclear; the figure of 2,000 to 5,000 comes from a report that may have exaggerated deliberately. We do not invent a number. Wikipedia notes that the women who first went out unveiled were mostly from the educated urban classes.',
    ]],
    [[
      'این برداشت ماست: کشف حجاب و قانون لباس هنوز از بحث‌برانگیزترین کارهای این دوره‌اند؛ برای برخی نشان آزادی زنان و برای برخی نشان زور دولت بر زندگی خصوصی.',
    ], [
      'This is our reading: unveiling and the dress law are still among the most argued-over acts of the period; to some a sign of women’s freedom, to others of state force over private life.',
    ]],
    [...C3, ...YA, 'wp-kashf', 'wp-goharshad', 'iranica-forughi'], { photos: ['rz-family-1936'] }),
  sec('companions', 'یاران: سازندگان دولت نو', 'The companions: builders of the new state',
    [[
      'رضاشاه کارهای بزرگ را به دست گروهی از کاردان‌ترین مردان روزگارش سپرد: ادیبان، حقوق‌دانان، دیپلمات‌ها و سرداران. یارشاطر از هدایت، تقی‌زاده، فروغی، تیمورتاش، داور و فیروز نام می‌برد.',
      'سرنوشت آنان آینهٔ سال‌های پایانی پادشاهی است: تیمورتاش، سردار اسعد و فیروز در بند کشته شدند، داور خودکشی کرد و فروغی و هدایت کنار گذاشته شدند.',
    ], [
      'Reza Shah entrusted his great works to some of the ablest men of his time: men of letters, jurists, diplomats and commanders. Yarshater names Hedayat, Taqizadeh, Foroughi, Teymourtash, Davar and Firouz.',
      'Their fates mirror the last years of the reign: Teymourtash, Sardar As‘ad and Firouz were killed in custody, Davar took his own life, and Foroughi and Hedayat were pushed aside.',
    ]],
    [[
      'یارشاطر می‌نویسد شاه دست‌کم تا سال‌های پایانی به آنان مسئولیت می‌سپرد و در سال‌های بعد فضای انتقاد تنگ شد. شیخ‌الاسلامی از هدایت نقل می‌کند که شاه دربارهٔ وزیر دربارش می‌گفت: «تیمور از جانب من سخن می‌گوید.»',
    ], [
      'Yarshater writes that the shah gave them responsibility at least until his later years, when the room for free criticism narrowed. Sheikholeslami quotes Hedayat that the shah said of his court minister: “Teymur speaks for me.”',
    ]],
    [[
      'این برداشت ماست: دولت نو را این مردان ساختند. منابع همچنین مرگ چند تن از آنان را در بازداشت، یا کنار رفتنشان را، ثبت کرده‌اند.',
    ], [
      'This is our reading: these men built the new state. The sources also record that several of them later died in custody or left office.',
    ]],
    [...YA, 'iranica-courts-viii', ...C3], { people: companions, quotes: [
      { text: 'Reza Shah was not afraid to gather around him better educated men than himself but of proven patriotism and ability, like Mehdi-qoli Hedāyat, Taqizādeh, Foruḡi, ʿAbd-al-Ḥosayn Teymurtāš, ʿAli-Akbar Dāvar, and Firuz, and to relegate important responsibilities to them', fa: '«رضاشاه نمی‌ترسید مردانی درس‌خوانده‌تر از خود اما با میهن‌دوستی و کاردانیِ آزموده را گرد خود آورد، چون مهدی‌قلی هدایت، تقی‌زاده، فروغی، عبدالحسین تیمورتاش، علی‌اکبر داور و فیروز، و کارهای مهم را به آنان بسپارد.»', ref: YQ, source: 'yarshater-iran-p5' },
      { text: 'Teymurtāš and Dāvar were known as the main architects of the Pahlavi state.', fa: '«تیمورتاش و داور را معماران اصلی دولت پهلوی می‌دانستند.»', ref: YQ, source: 'yarshater-iran-p5' },
      { text: 'For my part, I have seen nothing but sincere devotion to the Pahlavī ruler by Sardār Asʿad, and I have my doubts about how he was characterized.', fa: '«من از سردار اسعد جز وفاداری صادقانه به شاه پهلوی ندیده‌ام و در آنچه دربارهٔ او گفتند تردید دارم.» (هدایت)', ref: 'Hedayat, quoted in “Baḵtīārī v.(5) Sardār Asʿad III”, Encyclopaedia Iranica', source: 'iranica-sardar-asad' },
    ] }),
  sec('repression', 'مجلس، مطبوعات و مخالفان', 'Parliament, the press and opponents',
    [[
      'مجلس در این سال‌ها فرمان‌پذیر شد و مطبوعات آزاد خاموش. تیمورتاش (۱۹۳۳)، سردار اسعد (۱۹۳۴) و فیروز (۱۹۳۷) در بند جان باختند و مدرس (۱۹۳۷) در بازداشت پلیس در کاشمر کشته شد.',
    ], [
      'In these years the Majles became obedient and the free press silent. Teymourtash (1933), Sardar As‘ad (1934) and Firouz (1937) died in custody, and Modarres (1937) was murdered in police custody in Kashmar.',
    ]],
    [[
      'یارشاطر، که کارنامهٔ سازندگی او را می‌ستاید، می‌نویسد در سال‌های پایانی فضای انتقاد آزاد تنگ شد.',
    ], [
      'Yarshater, who praises his record of building, writes that in the later years the room for free criticism narrowed.',
    ]],
    [[
      'این برداشت ماست: این رویدادها بخشی از کارنامهٔ اوست و در منابع آمده‌اند؛ اندازهٔ آن‌ها را نباید از کارنامهٔ سازندگی‌اش بزرگ‌تر کرد.',
    ], [
      'This is our reading: these events are part of his record and stand in the sources; they should not be made to outweigh what he built.',
    ]],
    [...YA, ...C3]),
  sec('property', 'زمین، دولت و خاندان', 'Land, state and household',
    [[
      'یارشاطر می‌نویسد شاه در مازندران، زادگاهش، زمین‌های بسیار خرید و بهایی که مأموران او پرداختند «کم از مصادره نبود». همو می‌افزاید که او «زندگی ساده‌ای» داشت. گاه‌شمار ایرانیکا می‌نویسد محمدرضاشاه از ۱۹۵۱ بیشتر این زمین‌ها را با بهای کم به صاحبان پیشین بازگرداند.',
      'شیخ‌الاسلامی می‌نویسد دیوان‌سالاری در ظاهر زیر قانون مجلس بود، اما در عمل دنبالهٔ خاندان پهلوی بود.',
    ], [
      'Yarshater writes that the shah acquired large estates in Mazandaran, his home province, and that the price his agents paid “proved little short of confiscatory”. He adds that the shah “lived a simple life”. The Iranica chronology records that from 1951 Mohammad Reza Shah returned most of these lands to their original owners at a low price.',
      'Sheikholeslami writes that the bureaucracy stood within the framework of the Majles on the surface, but in practice was an extension of the Pahlavi household.',
    ]],
    [[
      'این برداشت ماست: یارشاطر خرید زمین‌های گسترده در مازندران را با بهایی «کم از مصادره» ثبت کرده است و می‌افزاید که شاه خود زندگی ساده‌ای داشت. گاه‌شمار ایرانیکا می‌گوید محمدرضاشاه بعدها بیشتر این زمین‌ها را بازگرداند. مرز دارایی شخصی و دارایی دولت در این دوره همیشه روشن نبود.',
    ], [
      'This is our reading: Yarshater records large land purchases in Mazandaran at prices “little short of confiscatory”, and adds that the shah himself lived simply. The Iranica chronology says Mohammad Reza Shah later returned most of these lands. The line between the ruler’s private estate and the state’s property was not always clear in this period.',
    ]],
    [[
      'این برداشت ماست: این پرسش پس از او هم ماند.',
    ], [
      'This is our reading: the question outlived him.',
    ]],
    [...YA, ...AD, ...C3], { quotes: [
      { text: 'Superficially, the bureaucracy existed within the framework set by the Majlis; in practice, it was an extension of the Pahlavi household.', fa: '«در ظاهر، دیوان‌سالاری در چارچوبی بود که مجلس تعیین کرده بود؛ در عمل، دنبالهٔ خاندان پهلوی بود.»', ref: 'A. Sheikholeslami, “Administration in Iran vii. Pahlavi period”, Encyclopaedia Iranica', source: 'iranica-administration-vii' },
    ] }),
  sec('fall', 'شهریور ۱۳۲۰: اشغال و استعفا', 'August 1941: invasion and abdication',
    [[
      'در ۲۵ اوت ۱۹۴۱ (۳ شهریور ۱۳۲۰) ارتش شوروی از شمال و ارتش بریتانیا از جنوب وارد ایران شدند؛ بهانه حضور آلمانی‌ها بود. پس از چند روز جنگ، ارتش ایران در ۳۱ اوت از پایداری دست کشید و علی منصور، نخست‌وزیر، کناره گرفت.',
      'فروغی دوباره نخست‌وزیر شد. رضاشاه در ۱۶ سپتامبر (۲۵ شهریور) به سود پسرش، محمدرضا، استعفا داد و فروغی انتقال آرام تاج را سامان داد.',
    ], [
      'On 25 August 1941 the Soviet army entered Iran from the north and the British army from the south; the pretext was the German presence. After a few days of fighting the Iranian army ceased resistance on 31 August, and the prime minister, Ali Mansur, resigned.',
      'Foroughi became prime minister again. On 16 September Reza Shah abdicated in favour of his son, Mohammad Reza, and Foroughi managed the smooth transfer of the crown.',
    ]],
    [[
      'فریه علت اصلی استعفا را «محل بحث» می‌داند، اما آن را سیاست از پیش طراحی‌شدهٔ بریتانیا نمی‌شمارد. ارتشی که پایهٔ قدرت او بود در برابر اشغال دوام نیاورد.',
    ], [
      'Ferrier calls the principal cause of the abdication “disputable”, but does not see it as premeditated British policy. The army that was the base of his power did not hold against the invasion.',
    ]],
    [[
      'این برداشت ماست: کشوری که او یکپارچه کرده بود در چند روز اشغال شد، اما از هم نپاشید؛ نهادهایش ماندند و پسرش بر تخت نشست.',
    ], [
      'This is our reading: the country he had united was occupied in a few days, but it did not fall apart; its institutions survived and his son took the throne.',
    ]],
    [...YA, ...C3, ...FE, 'wp-invasion', 'iranica-forughi', 'wp-mansur'], { photos: ['rz-tabriz-1941'], quotes: [
      { text: 'The principal cause of the abdication of Reżā Shah in favor of his eldest son is disputable, but it was not a premeditated act of British policy', fa: '«علت اصلی استعفای رضاشاه به سود پسر بزرگش محل بحث است، اما کاری از پیش طراحی‌شده در سیاست بریتانیا نبود.»', ref: 'R. W. Ferrier, “Anglo-Iranian Relations iii”, Encyclopaedia Iranica', source: 'iranica-anglo-iranian-iii' },
    ] }),
  sec('exile', 'تبعید، مرگ و آرامگاه', 'Exile, death and the tomb',
    [[
      'نیروهای بریتانیا او و فرزندانش را به موریس بردند و در موکا ساکن شد؛ سپس به دوربان و ژوهانسبورگ رفت و در ۲۶ ژوئیهٔ ۱۹۴۴ در ژوهانسبورگ درگذشت. پیکرش را مومیایی کردند و در مسجد رفاعی قاهره به امانت نهادند.',
      'در مه ۱۹۵۰ پیکر به ایران آمد و در آرامگاهی نزدیک حرم شاه‌عبدالعظیم در ری به خاک سپرده شد؛ آرامگاه از ۱۹۴۸ با طرح محسن فروغی، کیقباد ظفر و علی صادق ساخته شده بود. مجلس همان سال لقب «کبیر» را به او داد.',
      'در آوریل ۱۹۸۰، پس از انقلاب، آرامگاه به دستور صادق خلخالی ویران شد.',
    ], [
      'British forces took him and his children to Mauritius, where he lived at Moka; he then moved to Durban and Johannesburg, and died in Johannesburg on 26 July 1944. His body was embalmed and kept in trust at the al-Rifa‘i Mosque in Cairo.',
      'In May 1950 the body was brought to Iran and laid in a mausoleum near the shrine of Shah Abdol-Azim at Rey, built from 1948 to designs by Mohsen Foroughi, Keyqobad Zafar and Ali Sadeq. The same year the Majles gave him the title “the Great”.',
      'In April 1980, after the revolution, the mausoleum was demolished on the orders of Sadegh Khalkhali.',
    ]],
    [[
      'در آوریل ۲۰۱۸ در کار گسترش حرم شاه‌عبدالعظیم پیکری مومیایی‌شده پیدا شد که شاید از آنِ رضاشاه باشد. این هرگز به‌طور رسمی تأیید نشده و ما آن را ثابت‌شده نمی‌شماریم.',
    ], [
      'In April 2018 a mummified body that may be Reza Shah’s was found during the expansion of the Shah Abdol-Azim shrine. It has never been officially confirmed, and we do not treat it as established.',
    ]],
    [[
      'این برداشت ماست: آرامگاهی که ویران شد نشان می‌دهد که نام او پس از مرگ هم میدان نبرد سیاست ماند.',
    ], [
      'This is our reading: a tomb that was demolished shows that his name remained a political battlefield long after his death.',
    ]],
    [...WP, 'wp-mausoleum', ...C3], { wide: true, photos: ['rz-johannesburg-1942', 'rz-funeral-1950', 'rz-tomb-rey'] }),
  sec('chronology', 'گاه‌شمار زندگی', 'A chronology of his life',
    [[
      'زندگی رضاشاه از روستایی در سوادکوه تا تخت پادشاهی و از آنجا تا تبعید در جنوب آفریقا، در سیاههٔ زیر آمده است.',
    ], [
      'Reza Shah’s life, from a village in Savadkuh to the throne and from there to exile in South Africa, is set out below.',
    ]],
    [[
      'تاریخ‌ها از منابع همین صفحه‌اند؛ هر جا منابع ناهمسانند، در رویداد مربوط گفته شده است.',
    ], [
      'The dates come from this page’s sources; where the sources differ, the event says so.',
    ]],
    [[
      'این برداشت ماست: شصت‌وشش سال زندگی، که شانزده سالش ایران را دگرگون کرد.',
    ], [
      'This is our reading: sixty-six years of life, sixteen of which transformed Iran.',
    ]],
    [...WP, ...YA, ...C2, ...C3], { timeline: [
      { when: B('۱۸۷۸', '1878'), text: B('زاده در آلاشت سوادکوه', 'Born at Alasht, Savadkuh') },
      { when: B('حدود ۱۸۹۴', 'c. 1894'), text: B('پیوستن به بریگاد قزاق', 'Joins the Cossack Brigade') },
      { when: B('۱۹۲۱', '1921'), text: B('کودتای ۳ اسفند؛ وزیر جنگ', 'The coup of 21 February; minister of war') },
      { when: B('۱۹۲۳', '1923'), text: B('نخست‌وزیر', 'Prime minister') },
      { when: B('۱۹۲۵', '1925'), text: B('قانون نظام وظیفه؛ پایان قاجار؛ مجلس مؤسسان', 'Conscription law; end of the Qajars; Constituent Assembly') },
      { when: B('۱۹۲۶', '1926'), text: B('تاج‌گذاری', 'Coronation') },
      { when: B('۱۹۲۷', '1927'), text: B('دادگستری نو؛ آغاز راه‌آهن؛ پایان انحصار حفاری فرانسه', 'New judiciary; railway begun; French excavation monopoly ends') },
      { when: B('۱۹۲۸', '1928'), text: B('بانک ملی؛ قانون لباس؛ اعزام دانشجو', 'Bank Melli; dress law; students sent abroad') },
      { when: B('۱۹۳۰', '1930'), text: B('قانون حفظ آثار عتیقه', 'Antiquities law') },
      { when: B('۱۹۳۳', '1933'), text: B('قرارداد نفت؛ مرگ تیمورتاش', 'Oil agreement; death of Teymourtash') },
      { when: B('۱۹۳۴', '1934'), text: B('هزارهٔ فردوسی؛ مرگ سردار اسعد', 'Ferdowsi millennium; death of Sardar As‘ad') },
      { when: B('۱۹۳۵', '1935'), text: B('دانشگاه تهران؛ فرهنگستان؛ گوهرشاد؛ «ایران»', 'University of Tehran; Farhangestan; Gowharshad; “Iran”') },
      { when: B('۱۹۳۶', '1936'), text: B('کشف حجاب', 'Unveiling') },
      { when: B('۱۹۳۷', '1937'), text: B('مرگ داور و فیروز؛ موزهٔ ایران باستان', 'Deaths of Davar and Firouz; Iran Bastan Museum') },
      { when: B('۱۹۳۸', '1938'), text: B('پایان راه‌آهن سراسری', 'Trans-Iranian Railway completed') },
      { when: B('۱۹۴۱', '1941'), text: B('اشغال؛ استعفا (۲۵ شهریور)', 'Invasion; abdication (16 September)') },
      { when: B('۱۹۴۴', '1944'), text: B('مرگ در ژوهانسبورگ', 'Dies in Johannesburg') },
      { when: B('۱۹۵۰', '1950'), text: B('خاکسپاری در ری', 'Buried at Rey') },
    ] }),
]

const places = [
  { name: B('تهران', 'Tehran'), c: P.TEHRAN, dy: -0.5 }, { name: B('قزوین', 'Qazvin'), c: P.QAZVIN, left: true }, { name: B('خرمشهر', 'Khorramshahr'), c: P.KHORRAMSHAHR, left: true },
  { name: B('مشهد', 'Mashhad'), c: P.MASHHAD }, { name: B('بندر شاه', 'Bandar-e Shah'), c: P.BANDAR_SHAH }, { name: B('بندر شاهپور', 'Bandar-e Shahpur'), c: P.BANDAR_SHAHPUR, left: true },
]

export const rezaShah: FeaturedKing = {
  slug: 'reza-shah',
  name: B('رضاشاه پهلوی', 'Reza Shah Pahlavi'),
  dynastyName: B('پهلوی', 'The Pahlavis'),
  reign: B('۱۹۲۵–۱۹۴۱ م', '1925–1941 CE'),
  title: B('رضاشاه پهلوی؛ سازندهٔ ایران نو', 'Reza Shah Pahlavi: the builder of modern Iran'),
  lede: B(
    'سربازی از کوهستان سوادکوه که از بریگاد قزاق تا تخت پادشاهی بالا رفت. در شانزده سال ارتش، دادگستری، راه‌آهن سراسری و دانشگاه تهران را ساخت، امتیازهای بیگانگان را برچید و نام «ایران» را در جهان استوار کرد. منابع همین دوره از تنگ شدن فضای مجلس و مطبوعات و مرگ چند تن از نزدیکانش در بازداشت نیز سخن می‌گویند. در شهریور ۱۳۲۰، پس از اشغال ایران، به سود پسرش کناره گرفت و در تبعید درگذشت.',
    'A soldier from the Savadkuh highlands who rose from the Cossack Brigade to the throne. In sixteen years he built an army, a judiciary, the Trans-Iranian Railway and the University of Tehran, ended foreign privileges and fixed the name “Iran” before the world. The sources for the same years also record a narrower room for the Majles and the press, and the death in custody of several men close to him. In September 1941, after Iran was occupied, he abdicated in favour of his son and died in exile.',
  ),
  hero: 'rz-portrait-1938',
  stats: [
    { n: B('۱۶ سال', '16 years'), l: B('پادشاهی (۱۹۲۵–۱۹۴۱)', 'reign (1925–1941)') },
    { n: B('۱٬۳۹۴ کیلومتر', '1,394 km'), l: B('راه‌آهن سراسری، از خزر تا خلیج فارس', 'Trans-Iranian Railway, Caspian to Gulf') },
    { n: B('۴ فوریهٔ ۱۹۳۵', '4 Feb 1935'), l: B('گشایش دانشگاه تهران', 'University of Tehran opened') },
    { n: B('۱۶ سپتامبر ۱۹۴۱', '16 Sep 1941'), l: B('استعفا', 'abdication') },
  ],
  mapTitle: B('نقشهٔ متحرک: زندگی و رویدادها', 'Animated map: life and events'),
  events: rezaEvents,
  span: [1878, 1950],
  lifeMap: { view: [44, 28, 61, 39.5], places: [
    ...places, { name: B('آلاشت', 'Alasht'), c: P.ALASHT, dy: 0.5 }, { name: B('کاشمر', 'Kashmar'), c: P.KASHMAR }, { name: B('توس', 'Tus'), c: P.TUS, dy: -0.4 },
  ] },
  campaign: {
    id: 'campaigns',
    title: B('از کودتا تا استعفا (۱۹۲۱–۱۹۴۱ م)', 'From coup to abdication (1921–1941 CE)'),
    intro: { fa: ['کودتا، یکپارچه‌سازی کشور، راه‌آهن و اشغال ۱۹۴۱. خط‌های حرکت طرح‌وارند.'], en: ['The coup, the unification of the country, the railway and the occupation of 1941. Movement lines are sketches.'] },
    events: campaignEvents, span: [1921, 1941], view: [44, 28, 61, 39.5],
    places: [...places, { name: B('رشت', 'Rasht'), c: P.RASHT, left: true }, { name: B('تبریز', 'Tabriz'), c: P.TABRIZ, left: true }],
    clip: { gif: B('/media/reza-shah/campaigns-fa.gif', '/media/reza-shah/campaigns-en.gif'), mp4: B('/media/reza-shah/campaigns-fa.mp4', '/media/reza-shah/campaigns-en.mp4'), webm: B('/media/reza-shah/campaigns-fa.webm', '/media/reza-shah/campaigns-en.webm'), poster: B('/media/reza-shah/campaigns-fa.png', '/media/reza-shah/campaigns-en.png'), width: 958, height: 356 },
  },
  shareImage: '/media/reza-shah/campaigns-en.png',
  dossier: rezaDossier,
  synthesis: { title: B('جمع‌بندی: سازندهٔ ایران نو', 'Synthesis: the builder of modern Iran'), paras: {
    fa: [
      'رضاشاه کشوری پراکنده، با دولتی تهی‌دست و ارتشی پاره‌پاره، را تحویل گرفت و دولتی متمرکز با ارتش، دادگستری، بانک، مدرسه، دانشگاه و راه‌آهن به جا گذاشت. امتیازهای قضایی بیگانگان را برچید، انحصار باستان‌شناسی فرانسه را پایان داد و نام «ایران» را بر زبان جهان نشاند. یارشاطر می‌نویسد در تاریخ دراز ایران، جز کوروش و داریوش و اردشیر، کمتر پادشاهی در زمانی چنین کوتاه این‌همه کار کرده است.',
      'همان منابع مرگ چند تن از سازندگان دولت نو را در بازداشت ثبت کرده‌اند و از تنگ شدن فضای مجلس و مطبوعات در سال‌های پایانی سخن می‌گویند. یارشاطر خرید زمین در مازندران را نیز با بهایی «کم از مصادره» آورده است. این‌ها در پرونده مانده‌اند؛ اساس کارنامهٔ او نهادهایی است که ساخت و تا امروز برپا هستند.',
      'در شهریور ۱۳۲۰ کشور اشغال شد و او ناچار به استعفا گردید؛ اما کشور از هم نپاشید و راه‌آهن، دانشگاه، دادگستری و بانکی که بنیاد گذاشته بود برجای ماند.',
    ],
    en: [
      'Reza Shah took over a fragmented country with a penniless state and a scattered army, and left a centralised state with an army, courts, a national bank, schools, a university and a railway. He ended the extraterritorial rights of foreigners and the French monopoly on archaeology, and set the name “Iran” in the world’s usage. Yarshater writes that in Iran’s long history, apart from Cyrus, Darius and Ardashir, few monarchs achieved so much in so little time.',
      'The same sources record the death in custody of several builders of the new state, and a narrower room for the Majles and the press in the later years. Yarshater also notes land purchases in Mazandaran at prices “little short of confiscatory”. Those facts remain in the file; the core of his record is the institutions he built, which still stand.',
      'In August 1941 the country was occupied and he was forced to abdicate; but it did not fall apart, and the railway, the university, the courts and the bank he founded remained.',
    ],
  }, sources: [...YA, ...AD, ...FE, ...C3] },
  sources: [...pvSources, ...rzSources],
  photos: [...pvPhotos, ...rzPhotos],
  related: [
    { href: { fa: '/dynasty/pahlavis', en: '/dynasty/pahlavis' }, label: B('دودمان پهلوی', 'The Pahlavi dynasty') },
    { href: { fa: '/king/mohammad-reza-shah', en: '/en/king/mohammad-reza-shah' }, label: B('محمدرضاشاه پهلوی', 'Mohammad Reza Shah Pahlavi') },
    { href: { fa: '/king/naser-al-din', en: '/en/king/naser-al-din' }, label: B('ناصرالدین‌شاه و مشروطه', 'Naser al-Din Shah and the constitution') },
  ],
  wikipedia: 'https://en.wikipedia.org/wiki/Reza_Shah',
}
