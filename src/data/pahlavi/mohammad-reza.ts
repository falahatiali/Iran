/**
 * Mohammad Reza Shah Pahlavi, 1941–1979: occupation, Mosaddeq and the coup of 1953, the White Revolution,
 * the oil boom, and the revolution of 1978–79.
 * Spine: Yarshater (Iran ii, page 6) and the Chronology of Iranian History (parts 3 and 4), with Gasiorowski on the coup,
 * all in Encyclopaedia Iranica.
 */
import type { DossierSection, FeaturedKing } from '../featured/types'
import { ev, note, sec } from '../late-achaemenid/common'
import { B, P, pvPhotos, pvSources } from './common'

const Y6 = ['yarshater-iran-p6']
const C3 = ['iranica-chronology-3']
const C4 = ['iranica-chronology-4']
const CO = ['iranica-coup-1953']

const sketch = note('منابع راه دقیق را نمی‌گویند؛ خط‌ها طرح‌وارند.', 'The sources give no exact routes; the lines are sketches.')
const coupFrame = note(
  'منابع ایرانیکا این روز را با واژه‌های گوناگون می‌گویند: گازیوروفسکی از قول رایت می‌نویسد کودتا را «MI6 طراحی کرد و CIA اجرا کرد»؛ یارشاطر می‌نویسد کودتا «با الهام و یاری بریتانیا و آمریکا» و «با موافقت شاه» طراحی شد؛ گاه‌شمار ایرانیکا آن را برکناری مصدق به دست شاه «با پشتیبانی آمریکا و بریتانیا» می‌خواند که «عموماً کودتا دانسته می‌شود». ما هر سه را می‌آوریم.',
  'Iranica’s articles describe the day in different words: Gasiorowski, quoting Wright, says the coup was “conceived by MI6 … and delivered by CIA”; Yarshater writes that a coup “inspired and aided by the British and the Americans was conceived with the concurrence of the shah”; the Iranica chronology calls it Mosaddeq’s dismissal by the shah “with American and British backing”, a move “generally conceived as a coup d’état”. We give all three.',
)
const rex = note(
  'گاه‌شمار ایرانیکا می‌نویسد آن روزها آتش‌سوزی را بیشتر کار ساواک می‌دانستند، اما پس از انقلاب «ثابت شد» که گروهی مذهبی آن را برپا کرده بود. ما این را از همان منبع نقل می‌کنیم و منبع دیگری برای آن در دست نداریم.',
  'The Iranica chronology says that at the time the fire was largely blamed on SAVAK, but that after the revolution it “was proved” to have been started by a religious group. We report this from that one source and have no second source for it.',
)
const blackFriday = note(
  'شمار کشته‌ها محل اختلاف است: گاه‌شمار ایرانیکا برآورد ۱۶۴ تن را می‌دهد و می‌نویسد تبلیغات انقلابی آن زمان ۸٬۰۰۰ تن می‌گفت.',
  'The death toll is disputed: the Iranica chronology gives an estimate of 164 and says revolutionary propaganda at the time put it at 8,000.',
)

export const mrsEvents = [
  ev('accession', 1941, B('سپتامبر ۱۹۴۱ م (شهریور ۱۳۲۰)', 'September 1941 CE'), 'admin', P.TEHRAN, B('ولیعهد شاه می‌شود', 'The crown prince becomes shah'), B('پس از اشغال ایران و استعفای رضاشاه، ولیعهد ۲۱ ساله با موافقت متفقین شاه شد.', 'After the occupation of Iran and Reza Shah’s abdication, the 21-year-old crown prince became shah with the agreement of the Allies.'), 'secure', [...C3, ...Y6]),
  ev('azarbaijan', 1946, B('۱۹۴۶ م', '1946 CE'), 'admin', P.TABRIZ, B('بیرون رفتن ارتش شوروی', 'Soviet troops withdraw'), B('قوام‌السلطنه، نخست‌وزیر، با وعدهٔ امتیاز نفت و خودمختاری بیشتر برای آذربایجان، شوروی را به بیرون بردن سربازانش راضی کرد.', 'The prime minister, Qavam al-Saltana, persuaded the Soviets to withdraw their troops from Azarbaijan with the promise of an oil concession and greater autonomy for the province.'), 'secure', C3),
  ev('1949', 1949, B('۱۹۴۹ م', '1949 CE'), 'admin', P.TEHRAN, B('سوءقصد و اختیار انحلال مجلس', 'Assassination attempt; power to dissolve the Majles'), B('به جان شاه سوءقصد شد و حزب توده غیرقانونی شد. همان سال مجلس مؤسسان به شاه اختیار انحلال مجلس را داد.', 'An attempt was made on the shah’s life and the Tudeh party was outlawed. The same year a Constituent Assembly gave the shah the power to dissolve the Majles.'), 'secure', C3),
  ev('nationalisation', 1951, B('۲۹ آوریل ۱۹۵۱ م (۹ اردیبهشت ۱۳۳۰)', '29 April 1951 CE'), 'admin', P.ABADAN, B('مصدق و ملی شدن نفت', 'Mosaddeq and oil nationalisation'), B('محمد مصدق، رهبر جبههٔ ملی، نخست‌وزیر شد و دو روز بعد صنعت نفت که در دست بریتانیا بود ملی شد. بریتانیا خرید نفت ایران را تحریم کرد.', 'Mohammad Mosaddeq, leader of the National Front, became prime minister, and two days later the British-owned oil industry was nationalised. Britain boycotted Iranian oil.'), 'secure', [...CO, ...C3]),
  ev('coup', 1953, B('۱۹ اوت ۱۹۵۳ م (۲۸ مرداد ۱۳۳۲)', '19 August 1953 CE'), 'admin', P.TEHRAN, B('کودتای ۲۸ مرداد', 'The coup of 19 August 1953'), B('شاه مصدق را برکنار کرد، مصدق فرمان را نپذیرفت و شاه به ایتالیا رفت. با کودتا مصدق سرنگون شد، سرلشکر زاهدی نخست‌وزیر شد و شاه بازگشت.', 'The shah dismissed Mosaddeq, Mosaddeq ignored the decree and the shah left for Italy. The coup overthrew Mosaddeq, General Zahedi became prime minister and the shah returned.'), 'disputed', [...CO, ...Y6, ...C3], coupFrame),
  ev('consortium', 1954, B('۱۹۵۴ م', '1954 CE'), 'admin', P.ABADAN, B('کنسرسیوم نفت', 'The oil consortium'), B('دولت با کنسرسیومی از شرکت‌های نفتی غربی به توافق رسید و کار در صنعت نفت از سر گرفته شد.', 'The government reached agreement with a consortium of Western oil companies, and work resumed in the oil industry.'), 'secure', C3),
  ev('savak', 1957, B('۱۹۵۷ م', '1957 CE'), 'admin', P.TEHRAN, B('ساواک', 'SAVAK'), B('ساواک، پلیس مخفی ایران، با مشورت آمریکا ساخته شد.', 'SAVAK, the Iranian secret police, was formed with advice from the United States.'), 'secure', C3),
  ev('white-revolution', 1963, B('ژانویهٔ ۱۹۶۳ م', 'January 1963 CE'), 'admin', P.TEHRAN, B('انقلاب سفید', 'The White Revolution'), B('شاه برنامهٔ اصلاحات ارضی، حق رأی زنان، ملی شدن جنگل‌ها و سپاه دانش را آغاز کرد. اعتراض آیت‌الله خمینی و زندانی شدنش به شورش‌هایی انجامید که سرکوب شد.', 'The shah launched land reform, votes for women, the nationalisation of forests and the Education Corps. Ayatollah Khomeini’s protest and imprisonment led to riots, which were crushed.'), 'secure', [...Y6, ...C3]),
  ev('exile', 1964, B('۱۹۶۴ م', '1964 CE'), 'religion', P.QOM, B('کاپیتولاسیون و تبعید خمینی', 'Immunity law; Khomeini exiled'), B('قانونی به نظامیان آمریکایی در ایران مصونیت سیاسی داد. خمینی آن را سخت نقد کرد و به ترکیه و سپس نجف تبعید شد.', 'A law extended diplomatic immunity to American servicemen in Iran. Khomeini attacked it and was exiled to Turkey and later Najaf.'), 'secure', C3),
  ev('persepolis', 1971, B('۱۹۷۱ م', '1971 CE'), 'building', P.PERSEPOLIS, B('جشن‌های ۲۵۰۰ ساله', 'The 2,500-year celebrations'), B('جشن ۲۵۰۰ سالهٔ پادشاهی ایران در تخت جمشید برگزار شد و ۶۹ سران کشورها یا نمایندگانشان آمدند.', 'The 2,500th anniversary of the Persian monarchy was celebrated at Persepolis, with 69 heads of state or their representatives.'), 'secure', C3),
  ev('oil-boom', 1973, B('۱۹۷۳ م', '1973 CE'), 'admin', P.ABADAN, B('چهار برابر شدن بهای نفت', 'Oil price quadruples'), B('پس از تحریم نفتی کشورهای عرب، بهای نفت چهار برابر شد و درآمد نفت ایران از ۲۰ میلیارد دلار گذشت.', 'After the Arab oil embargo the price of oil quadrupled and Iran’s oil revenue rose to over $20 billion.'), 'secure', C3),
  ev('rastakhiz', 1975, B('۱۹۷۵ م', '1975 CE'), 'admin', P.TEHRAN, B('حزب رستاخیز', 'The Rastakhiz party'), B('شاه حزب رستاخیز را ساخت و کشور تک‌حزبی شد؛ عضویت در آن وظیفهٔ هر شهروند شمرده می‌شد.', 'The shah founded the Rastakhiz party, making Iran a one-party state; membership was treated as every citizen’s duty.'), 'secure', C4),
  ev('calendar', 1976, B('۱۹۷۶ م', '1976 CE'), 'admin', P.TEHRAN, B('تقویم شاهنشاهی', 'The imperial calendar'), B('تقویم تازه‌ای بر پایهٔ بنیان‌گذاری شاهنشاهی هخامنشی آمد و سال ۲۵۳۵ شد. همان سال عفو بین‌الملل از رفتار با زندانیان سیاسی ایران انتقاد کرد.', 'A new calendar counted from the founding of the Achaemenid empire, making the year 2535. The same year Amnesty International criticised Iran’s treatment of political prisoners.'), 'secure', C4),
  ev('letters', 1977, B('۱۹۷۷ م', '1977 CE'), 'admin', P.TEHRAN, B('نامه‌های سرگشاده', 'Open letters'), B('چهل شاعر و نویسنده آزادی بیان خواستند و موجی از نامه‌های سرگشاده آغاز شد. شاه هویدا را پس از سیزده سال نخست‌وزیری برکنار کرد.', 'Forty poets and writers demanded freedom of expression, beginning a wave of open letters. The shah dismissed Hoveyda after thirteen years as prime minister.'), 'secure', C4),
  ev('departure', 1979, B('۱۶ ژانویهٔ ۱۹۷۹ م (۲۶ دی ۱۳۵۷)', '16 January 1979 CE'), 'admin', P.TEHRAN, B('شاه ایران را ترک می‌کند', 'The shah leaves Iran'), B('پس از یک سال اعتراض و اعتصاب، شاه و خانواده‌اش ایران را ترک کردند و قدرت را به نخست‌وزیر شاپور بختیار سپردند.', 'After a year of protest and strikes, the shah and his family left Iran, handing power to the prime minister, Shapur Bakhtiar.'), 'secure', C4),
]

const revEvents = [
  ev('qom', 1978, B('۹ ژانویهٔ ۱۹۷۸ م (۱۹ دی ۱۳۵۶)', '9 January 1978 CE'), 'religion', P.QOM, B('قم', 'Qom'), B('پلیس به جمعیتی که در قم به مقاله‌ای توهین‌آمیز دربارهٔ خمینی در روزنامهٔ اطلاعات اعتراض می‌کرد آتش گشود.', 'Police opened fire on a crowd in Qom protesting against an insulting article about Khomeini in the daily Ettelaat.'), 'secure', C4),
  ev('tabriz', 1978, B('۱۸–۱۹ فوریهٔ ۱۹۷۸ م', '18–19 February 1978 CE'), 'religion', P.TABRIZ, B('تبریز و چهلم‌ها', 'Tabriz and the forty-day cycle'), B('در چهلم کشته‌های قم تبریز به پا خاست؛ از آن پس هر چهل روز شهری دیگر برخاست.', 'On the fortieth day after the Qom deaths Tabriz rose; from then on, protests recurred every forty days in other cities.'), 'secure', C4, { ...sketch, route: [P.QOM, P.TABRIZ] }),
  ev('rex', 1978, B('۲۰ اوت ۱۹۷۸ م (۲۸ مرداد ۱۳۵۷)', '20 August 1978 CE'), 'religion', P.ABADAN, B('سینما رکس', 'The Rex cinema'), B('آتش‌سوزی سینما رکس آبادان بیش از ۴۰۰ کشته داشت و موج اعتراض را بزرگ‌تر کرد. اینکه چه کسی آن را برپا کرد محل اختلاف بوده است.', 'A fire at the Rex cinema in Abadan killed over 400 people and swelled the protests. Who started it has been disputed.'), 'disputed', C4, rex),
  ev('black-friday', 1978, B('۸ سپتامبر ۱۹۷۸ م (۱۷ شهریور ۱۳۵۷)', '8 September 1978 CE'), 'religion', P.TEHRAN, B('جمعهٔ سیاه', 'Black Friday'), B('در تهران چند هزار تظاهرکننده با سربازان درگیر شدند.', 'In Tehran several thousand demonstrators clashed with troops.'), 'disputed', C4, blackFriday),
  ev('strikes', 1978, B('اکتبر–دسامبر ۱۹۷۸ م', 'October–December 1978 CE'), 'admin', P.ABADAN, B('اعتصاب نفت', 'The oil strike'), B('اعتصاب به صنعت نفت و دیگر بخش‌ها رسید. در نوامبر دولت نظامی سرکار آمد و در دسامبر کارگران نفت اعتصاب عمومی کردند.', 'Strikes spread to the oil industry and other sectors. In November a military government took over, and in December oil workers began a general strike.'), 'secure', C4),
  ev('isfahan', 1978, B('۱۰–۱۱ دسامبر ۱۹۷۸ م (تاسوعا و عاشورا)', '10–11 December 1978 CE'), 'religion', P.ISFAHAN, B('راهپیمایی‌های بزرگ', 'Mass marches'), B('در تهران و سراسر کشور راهپیمایی‌های بزرگ برپا شد؛ در اصفهان دفتر ساواک و بانک‌ها آتش گرفت.', 'Huge marches filled Tehran and the whole country; in Isfahan crowds attacked the SAVAK offices and burned banks.'), 'secure', C4),
  mrsEvents[14],
  ev('khomeini-returns', 1979, B('۱ فوریهٔ ۱۹۷۹ م (۱۲ بهمن ۱۳۵۷)', '1 February 1979 CE'), 'religion', P.TEHRAN, B('بازگشت خمینی', 'Khomeini returns'), B('آیت‌الله خمینی از پاریس به تهران بازگشت و جمعیتی بزرگ به پیشوازش رفت.', 'Ayatollah Khomeini returned to Tehran from Paris and was welcomed by a huge crowd.'), 'secure', C4),
  ev('neutral', 1979, B('۱۱ فوریهٔ ۱۹۷۹ م (۲۲ بهمن ۱۳۵۷)', '11 February 1979 CE'), 'admin', P.TEHRAN, B('بی‌طرفی ارتش', 'The army stands down'), B('شورای عالی ارتش سربازان را به پادگان‌ها بازگرداند و دولت بختیار فروریخت. در فروردین ۱۳۵۸ همه‌پرسی جمهوری اسلامی را تأیید کرد.', 'The army’s Supreme Council ordered the troops back to barracks and the Bakhtiar government fell. In a referendum on 30–31 March 1979 an Islamic Republic was approved.'), 'secure', C4),
]

const mrsDossier: DossierSection[] = [
  sec('early', 'شاه جوان و مجلس', 'The young shah and the Majles',
    [[
      'محمدرضا در ۱۹۴۱ در کشوری اشغال‌شده شاه شد. یارشاطر می‌نویسد او در این سال‌ها رأی مجلس را در گزینش نخست‌وزیران دنبال می‌کرد و آزادی «بی‌سابقه» بود.',
      'در ۱۹۴۶ ارتش شوروی آذربایجان را ترک کرد. در ۱۹۴۹ پس از سوءقصد به شاه، حزب توده غیرقانونی شد و شاه اختیار انحلال مجلس را گرفت.',
    ], [
      'Mohammad Reza became shah in 1941 in an occupied country. Yarshater writes that in these years he followed the Majles’ vote in choosing prime ministers, and that freedom was “unprecedented”.',
      'In 1946 Soviet troops left Azarbaijan. In 1949, after an attempt on the shah’s life, the Tudeh party was outlawed and the shah gained the power to dissolve the Majles.',
    ]],
    [[
      'یارشاطر همین دوره را دورهٔ «جناح‌بازی» در مجلس و دولت‌های ناکارآمد هم می‌داند. ما هر دو روی آن را از همان نویسنده می‌آوریم.',
    ], [
      'Yarshater also describes the same period as one of Majles factionalism and ineffective government. We give both sides from the same author.',
    ]],
    [[
      'این برداشت ماست: سال‌های ۱۹۴۱ تا ۱۹۵۳ تنها دورهٔ این پادشاهی بود که مجلس و مطبوعات واقعاً با دربار رقابت می‌کردند؛ بحث دربارهٔ آن هنوز زنده است.',
    ], [
      'This is our reading: 1941 to 1953 was the only part of this reign in which the Majles and the press truly competed with the court; arguments about it are still alive.',
    ]],
    [...Y6, ...C3], { photos: ['mrs-1973'], quotes: [
      { text: 'The first phase of Moḥammad Reza Shah’s reign (1941-53) was characterized by factionalism in the Majles, unbridled disputes, and sometimes character assassinations in the press, as a fruit of unprecedented freedom, despite a measure of government control.', fa: '«مرحلهٔ نخست پادشاهی محمدرضاشاه (۱۹۴۱–۱۹۵۳) با جناح‌بازی در مجلس، کشمکش‌های لگام‌گسیخته و گاه ترور شخصیت در مطبوعات شناخته می‌شد؛ ثمرهٔ آزادی بی‌سابقه، با وجود اندکی نظارت دولت.»', ref: 'E. Yarshater, “Iran ii. Iranian history (2) Islamic period, page 6”, Encyclopaedia Iranica', source: 'yarshater-iran-p6' },
    ] }),
  sec('mosaddeq', 'مصدق، نفت و کودتای ۲۸ مرداد', 'Mosaddeq, oil and the coup of 1953',
    [[
      'در آوریل ۱۹۵۱ مصدق نخست‌وزیر شد و صنعت نفت ملی شد. بریتانیا نفت ایران را تحریم کرد و در ۱۹۵۲ مصدق رابطه با بریتانیا را برید.',
      'در اوت ۱۹۵۳ شاه مصدق را برکنار کرد، مصدق نپذیرفت و شاه کشور را ترک کرد. در ۱۹ اوت مصدق با کودتا سرنگون شد و شاه بازگشت. در ۱۹۵۴ قرارداد کنسرسیوم بسته شد.',
    ], [
      'In April 1951 Mosaddeq became prime minister and the oil industry was nationalised. Britain boycotted Iranian oil, and in 1952 Mosaddeq broke off relations with Britain.',
      'In August 1953 the shah dismissed Mosaddeq, Mosaddeq refused to go and the shah left the country. On 19 August Mosaddeq was overthrown in a coup and the shah returned. In 1954 the consortium agreement was signed.',
    ]],
    [[
      'نقش بیگانگان و شاه در این کودتا را منابع ایرانیکا با واژه‌های گوناگون می‌گویند (بنگرید به یادداشت رویداد). یارشاطر می‌نویسد روشنفکران پس از کودتا به حاشیه رانده شدند.',
    ], [
      'Iranica’s articles describe the roles of foreign powers and the shah in different words (see the note on the event). Yarshater writes that intellectuals were largely marginalised after the coup.',
    ]],
    [[
      'این برداشت ماست: ۲۸ مرداد هنوز یکی از پرمناقشه‌ترین روزهای تاریخ معاصر ایران است و برداشت هر کس از آن اغلب با داوری‌اش دربارهٔ کل این پادشاهی گره خورده است.',
    ], [
      'This is our reading: 19 August 1953 is still one of the most contested days in modern Iranian history, and each reader’s view of it is often tied to their judgement of the whole reign.',
    ]],
    [...CO, ...Y6, ...C3], { photos: ['mosaddeq-1952'], quotes: [
      { text: 'conceived by MI6 [the British Intelligence Service] and delivered by CIA', fa: '«MI6 [سرویس اطلاعاتی بریتانیا] طراحی کرد و CIA اجرا کرد.»', ref: 'M. J. Gasiorowski, “Coup d’état of 1332 Š./1953”, Encyclopaedia Iranica, quoting P. Wright, p. 259', source: 'iranica-coup-1953' },
      { text: 'Eventually, a coup inspired and aided by the British and the Americans was conceived with the concurrence of the shah, who dismissed Moṣaddeq as prime minister, but Moṣaddeq ignored the royal decree and had the shah’s envoy arrested.', fa: '«سرانجام کودتایی با الهام و یاری بریتانیا و آمریکا و با موافقت شاه طراحی شد؛ شاه مصدق را از نخست‌وزیری برکنار کرد، اما مصدق فرمان شاهانه را نادیده گرفت و فرستادهٔ شاه را بازداشت کرد.»', ref: 'E. Yarshater, “Iran ii. Iranian history (2) Islamic period, page 6”, Encyclopaedia Iranica', source: 'yarshater-iran-p6' },
    ] }),
  sec('property', 'زمین، نفت و دارایی', 'Land, oil and property',
    [[
      'گاه‌شمار ایرانیکا می‌نویسد شاه از ۱۹۵۱ بیشتر زمین‌هایی را که رضاشاه در مازندران گرفته بود، با بهای کم به صاحبان پیشین بازگرداند.',
      'انقلاب سفید (۱۹۶۳) زمین‌های کشاورزی را به دهقانان داد. در همین سال‌ها نفت ملی شد و پس از ۱۹۷۳ درآمد آن چند برابر شد. در ۱۹۷۸ شریف‌امامی، نخست‌وزیر، رئیس بنیاد پهلوی بود.',
    ], [
      'The Iranica chronology says that from 1951 the shah returned most of the lands Reza Shah had taken in Mazandaran to their original owners at a low price.',
      'The White Revolution (1963) gave farmland to the peasants. In these decades oil was nationalised, and after 1973 its revenue multiplied. In 1978 the prime minister, Sharif-Emami, was head of the Pahlavi Foundation.',
    ]],
    [[
      'این برداشت ماست: در این پادشاهی دو بار مالکیت از نو تقسیم شد: نفت از شرکت بیگانه به دولت رسید و زمین از مالکان بزرگ به دهقانان. اما درآمد نفت در دست دولتی ماند که پاسخگوی مجلس نبود.',
      'یارشاطر می‌نویسد شکاف میان دارا و ندار بیشتر شد و این به جنبش اعتراضی اسلامی نیرو داد.',
    ], [
      'This is our reading: property was redivided twice in this reign: oil passed from a foreign company to the state, and land from large owners to peasants. But the oil revenue stayed with a state that did not answer to the Majles.',
      'Yarshater writes that the gap between rich and poor widened, and that this strengthened the Islamic protest movement.',
    ]],
    [[
      'این برداشت ماست: پرسش اینکه ثروت نفت از آنِ کیست و چه کسی دربارهٔ آن تصمیم می‌گیرد، پس از ۱۹۷۹ هم باز ماند.',
    ], [
      'This is our reading: the question of whom the oil wealth belongs to, and who decides about it, remained open after 1979.',
    ]],
    [...Y6, ...C3, ...C4], { quotes: [
      { text: 'The gap between the rich and the poor widened, and this lent further strength to the Islamic protest movement.', fa: '«شکاف میان دارا و ندار بیشتر شد و این به جنبش اعتراضی اسلامی نیروی بیشتری داد.»', ref: 'E. Yarshater, “Iran ii. Iranian history (2) Islamic period, page 6”, Encyclopaedia Iranica', source: 'yarshater-iran-p6' },
    ] }),
  sec('autocracy', 'ساواک، رستاخیز و تخت جمشید', 'SAVAK, Rastakhiz and Persepolis',
    [[
      'ساواک در ۱۹۵۷ با مشورت آمریکا ساخته شد. در ۱۹۷۱ جشن ۲۵۰۰ ساله در تخت جمشید برگزار شد، در ۱۹۷۵ کشور تک‌حزبی شد و در ۱۹۷۶ تقویم شاهنشاهی آمد.',
      'گاه‌شمار ایرانیکا می‌نویسد ملی‌گرایان تقویم تازه را ستودند و روحانیان از آن رنجیدند. همان سال عفو بین‌الملل از رفتار با زندانیان سیاسی انتقاد کرد.',
    ], [
      'SAVAK was formed in 1957 with American advice. In 1971 the 2,500-year celebrations were held at Persepolis, in 1975 Iran became a one-party state, and in 1976 the imperial calendar was introduced.',
      'The Iranica chronology says nationalists praised the new calendar and the clergy resented it. The same year Amnesty International criticised the treatment of political prisoners.',
    ]],
    [[
      'یارشاطر می‌نویسد خرید انبوه جنگ‌افزار از آمریکا به مخالفان بهانه داد که شاه را دست‌نشاندهٔ آمریکا بخوانند. این داوری مخالفان است که او گزارش می‌کند، نه داوری خودش.',
    ], [
      'Yarshater writes that the huge purchases of American arms let opponents call the shah a stooge of the United States. That is the opponents’ judgement as he reports it, not his own.',
    ]],
    [[
      'این برداشت ماست: پیوند دادن پادشاهی با هخامنشیان، در تخت جمشید و در تقویم، کوششی بود تا مشروعیت از تاریخ باستان گرفته شود؛ بسیاری از مردم آن را نپذیرفتند.',
    ], [
      'This is our reading: linking the monarchy to the Achaemenids, at Persepolis and in the calendar, was an attempt to draw legitimacy from ancient history; many people did not accept it.',
    ]],
    [...Y6, ...C3, ...C4]),
  sec('revolution', 'انقلاب ۱۳۵۷', 'The revolution of 1978–79',
    [[
      'از قم در ژانویهٔ ۱۹۷۸ تا اعتصاب نفت در پاییز، اعتراض یک سال ادامه یافت. شاه در ۱۶ ژانویهٔ ۱۹۷۹ ایران را ترک کرد، خمینی در ۱ فوریه بازگشت و در ۱۱ فوریه ارتش بی‌طرفی اعلام کرد.',
      'شاه در ۱۹۸۰ در قاهره درگذشت. گاه‌شمار ایرانیکا می‌نویسد او سرطان خود را از مردم پنهان کرده بود.',
    ], [
      'From Qom in January 1978 to the oil strike in the autumn, protest lasted a year. The shah left Iran on 16 January 1979, Khomeini returned on 1 February, and on 11 February the army declared itself neutral.',
      'The shah died in Cairo in 1980. The Iranica chronology says he had kept his cancer secret from the Iranian people.',
    ]],
    [[
      'یارشاطر می‌نویسد ترس از شاه از میان رفت و سربازان از تیراندازی سر باز زدند. شمار کشته‌های جمعهٔ سیاه و عاملان آتش‌سوزی سینما رکس هنوز محل اختلاف است (بنگرید به یادداشت رویدادها).',
    ], [
      'Yarshater writes that fear of the shah had disappeared and soldiers refused to shoot. The death toll of Black Friday and who set the Rex cinema fire remain disputed (see the event notes).',
    ]],
    [[
      'این برداشت ماست: داوری دربارهٔ محمدرضاشاه امروز هم دوپاره است؛ ما رویدادها و داوری‌ها را با نام منبع آوردیم و داوری نهایی را به خواننده می‌سپاریم.',
    ], [
      'This is our reading: judgement of Mohammad Reza Shah is still divided today; we have set out the events and the judgements with their sources and leave the final verdict to the reader.',
    ]],
    [...Y6, ...C4]),
]

export const mohammadReza: FeaturedKing = {
  slug: 'mohammad-reza-shah',
  name: B('محمدرضاشاه پهلوی', 'Mohammad Reza Shah Pahlavi'),
  dynastyName: B('پهلوی', 'The Pahlavis'),
  reign: B('۱۹۴۱–۱۹۷۹ م', '1941–1979 CE'),
  title: B('محمدرضاشاه؛ نفت، کودتا، انقلاب سفید و ۱۳۵۷', 'Mohammad Reza Shah: oil, coup, White Revolution and 1979'),
  lede: B(
    'در ۱۹۴۱ در کشوری اشغال‌شده شاه شد. پس از کودتای ۱۹۵۳ و برکناری مصدق قدرتش بیشتر شد، با انقلاب سفید و درآمد نفت کشور را دگرگون کرد و در ۱۹۷۹ با انقلاب ایران را ترک کرد.',
    'He became shah in 1941 in an occupied country. After the coup of 1953 and Mosaddeq’s fall his power grew; with the White Revolution and oil revenue he transformed the country, and in 1979 he left Iran in the revolution.',
  ),
  stats: [
    { n: B('۳۸ سال', '38 years'), l: B('پادشاهی (۱۹۴۱–۱۹۷۹)', 'reign (1941–1979)') },
    { n: B('۱۹ اوت ۱۹۵۳', '19 Aug 1953'), l: B('کودتا و سرنگونی مصدق', 'coup; Mosaddeq overthrown') },
    { n: B('بیش از ۲۰ میلیارد دلار', 'over $20 billion'), l: B('درآمد نفت پس از ۱۹۷۳', 'oil revenue after 1973') },
    { n: B('۱۶ ژانویهٔ ۱۹۷۹', '16 Jan 1979'), l: B('ترک ایران', 'leaves Iran') },
  ],
  mapTitle: B('نقشهٔ متحرک: زندگی و رویدادها', 'Animated map: life and events'),
  events: mrsEvents,
  span: [1941, 1979],
  lifeMap: { view: [44, 28, 61, 39.5], places: [
    { name: B('تهران', 'Tehran'), c: P.TEHRAN, dy: -0.5 }, { name: B('تبریز', 'Tabriz'), c: P.TABRIZ, left: true }, { name: B('آبادان', 'Abadan'), c: P.ABADAN, left: true },
    { name: B('قم', 'Qom'), c: P.QOM, left: true }, { name: B('تخت جمشید', 'Persepolis'), c: P.PERSEPOLIS },
  ] },
  campaign: {
    id: 'campaigns',
    title: B('انقلاب: از قم تا ۲۲ بهمن (۱۹۷۸–۱۹۷۹ م)', 'Revolution: from Qom to 11 February (1978–1979 CE)'),
    intro: { fa: ['یک سال اعتراض، اعتصاب و راهپیمایی، از روی گاه‌شمار ایرانیکا. خط‌ها طرح‌وارند.'], en: ['A year of protest, strikes and marches, following the Iranica chronology. Lines are sketches.'] },
    events: revEvents, span: [1978, 1979], view: [44, 28, 61, 39.5],
    places: [
      { name: B('تهران', 'Tehran'), c: P.TEHRAN, dy: -0.5 }, { name: B('قم', 'Qom'), c: P.QOM, left: true }, { name: B('تبریز', 'Tabriz'), c: P.TABRIZ, left: true },
      { name: B('آبادان', 'Abadan'), c: P.ABADAN, left: true }, { name: B('اصفهان', 'Isfahan'), c: P.ISFAHAN },
    ],
    clip: { gif: B('/media/mohammad-reza-shah/campaigns-fa.gif', '/media/mohammad-reza-shah/campaigns-en.gif'), mp4: B('/media/mohammad-reza-shah/campaigns-fa.mp4', '/media/mohammad-reza-shah/campaigns-en.mp4'), webm: B('/media/mohammad-reza-shah/campaigns-fa.webm', '/media/mohammad-reza-shah/campaigns-en.webm'), poster: B('/media/mohammad-reza-shah/campaigns-fa.png', '/media/mohammad-reza-shah/campaigns-en.png'), width: 958, height: 356 },
  },
  shareImage: '/media/mohammad-reza-shah/campaigns-en.png',
  dossier: mrsDossier,
  synthesis: { title: B('جمع‌بندی: نوسازی بی‌مشارکت', 'Synthesis: modernisation without participation'), paras: {
    fa: [
      'دوازده سال نخست این پادشاهی آزادی‌ای بی‌سابقه داشت که با کودتای ۱۹۵۳ پایان یافت. پس از آن شاه با اصلاحات ارضی، حق رأی زنان و درآمد نفت کشور را دگرگون کرد.',
      'همان منابع از ساواک، حزب واحد، شکاف میان دارا و ندار و اعتراض روحانیان و نویسندگان می‌گویند. در ۱۹۷۸ ترس از میان رفت و در ۱۹۷۹ پادشاهی پایان یافت.',
    ],
    en: [
      'The first twelve years of the reign had an unprecedented freedom that ended with the coup of 1953. After that the shah transformed the country with land reform, votes for women and oil revenue.',
      'The same sources record SAVAK, the single party, a widening gap between rich and poor, and protest from both clerics and writers. In 1978 fear disappeared, and in 1979 the monarchy ended.',
    ],
  }, sources: [...Y6, ...CO, ...C3, ...C4] },
  sources: pvSources,
  photos: pvPhotos,
  related: [
    { href: { fa: '/dynasty/pahlavis', en: '/dynasty/pahlavis' }, label: B('دودمان پهلوی', 'The Pahlavi dynasty') },
    { href: { fa: '/king/reza-shah', en: '/en/king/reza-shah' }, label: B('رضاشاه پهلوی', 'Reza Shah Pahlavi') },
  ],
  wikipedia: 'https://en.wikipedia.org/wiki/Mohammad_Reza_Pahlavi',
}
