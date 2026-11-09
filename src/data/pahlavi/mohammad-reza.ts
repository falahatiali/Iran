/**
 * Mohammad Reza Shah Pahlavi, 1941–1979: occupation, Mosaddeq and the coup of 1953, the White Revolution,
 * the oil boom, and the revolution of 1978–79.
 * Spine: Yarshater (Iran ii, page 6) and the Chronology of Iranian History (parts 3 and 4), with Gasiorowski on the coup,
 * all in Encyclopaedia Iranica.
 */
import type { DossierSection, FeaturedKing } from '../featured/types'
import { ev, note, sec } from '../late-achaemenid/common'
import { B, P, pvPhotos, pvSources, rzSources } from './common'
import { mrsPhotos } from './mrs-photos'

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
  ev('iran-national', 1967, B('۱۹۶۷ م', '1967 CE'), 'building', P.TEHRAN, B('پیکان و جشن هنر شیراز', 'The Peykan and the Shiraz Arts Festival'), B('ایران ناسیونال برادران خیامی تولید پیکان را آغاز کرد و نخستین جشن هنر شیراز برگزار شد.', 'The Khayami brothers’ Iran National began making the Peykan, and the first Shiraz Arts Festival was held.'), 'secure', ['wp-khayami', 'wp-shiraz-festival']),
  ev('persepolis', 1971, B('۱۹۷۱ م', '1971 CE'), 'building', P.PERSEPOLIS, B('جشن‌های ۲۵۰۰ ساله', 'The 2,500-year celebrations'), B('جشن ۲۵۰۰ سالهٔ پادشاهی ایران در تخت جمشید برگزار شد و ۶۹ سران کشورها یا نمایندگانشان آمدند.', 'The 2,500th anniversary of the Persian monarchy was celebrated at Persepolis, with 69 heads of state or their representatives.'), 'secure', C3),
  ev('oil-boom', 1973, B('۱۹۷۳ م', '1973 CE'), 'admin', P.ABADAN, B('چهار برابر شدن بهای نفت', 'Oil price quadruples'), B('پس از تحریم نفتی کشورهای عرب، بهای نفت چهار برابر شد و درآمد نفت ایران از ۲۰ میلیارد دلار گذشت.', 'After the Arab oil embargo the price of oil quadrupled and Iran’s oil revenue rose to over $20 billion.'), 'secure', C3),
  ev('f14', 1974, B('ژانویه و ژوئن ۱۹۷۴ م', 'January and June 1974 CE'), 'admin', P.ISFAHAN, B('خرید اف‑۱۴', 'The F-14 purchase'), B('ایران ۳۰ و سپس ۵۰ فروند دیگر اف‑۱۴ سفارش داد و پایگاه خاتمی در نزدیکی اصفهان ساخته شد.', 'Iran ordered 30 and then 50 more F-14s, and Khatami Air Base was built near Isfahan.'), 'secure', ['wp-f14', 'frus-1974-61']),
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
  mrsEvents.find((e) => e.id === 'departure')!,
  ev('khomeini-returns', 1979, B('۱ فوریهٔ ۱۹۷۹ م (۱۲ بهمن ۱۳۵۷)', '1 February 1979 CE'), 'religion', P.TEHRAN, B('بازگشت خمینی', 'Khomeini returns'), B('آیت‌الله خمینی از پاریس به تهران بازگشت و جمعیتی بزرگ به پیشوازش رفت.', 'Ayatollah Khomeini returned to Tehran from Paris and was welcomed by a huge crowd.'), 'secure', C4),
  ev('neutral', 1979, B('۱۱ فوریهٔ ۱۹۷۹ م (۲۲ بهمن ۱۳۵۷)', '11 February 1979 CE'), 'admin', P.TEHRAN, B('بی‌طرفی ارتش', 'The army stands down'), B('شورای عالی ارتش سربازان را به پادگان‌ها بازگرداند و دولت بختیار فروریخت. در فروردین ۱۳۵۸ همه‌پرسی جمهوری اسلامی را تأیید کرد.', 'The army’s Supreme Council ordered the troops back to barracks and the Bakhtiar government fell. In a referendum on 30–31 March 1979 an Islamic Republic was approved.'), 'secure', C4),
]

const WM = ['wp-mrs']
const OUR = 'نگاه ما: '
const OUR_EN = 'Our view: '

export const mrsEconomy = {
  perCapita: [{ year: 1963, usd: 170 }, { year: 1977, usd: 2060 }],
  literacy: [{ year: 1966, men: 39.2, women: 17.4 }, { year: 1976, men: 47.5, women: 35.5 }],
  growth: { gdp: 10.5, industry: 15.0, services: 14.3, from: 1963, to: 1977 },
}

const mrsDossier: DossierSection[] = [
  sec('early', 'شاه جوان و آزادیِ بی‌سابقه', 'The young shah and an unprecedented freedom',
    [[
      'محمدرضا در ۱۹۴۱، در بیست‌ودو سالگی، در کشوری اشغال‌شده شاه شد. یارشاطر می‌نویسد او در این سال‌ها رأی مجلس را در گزینش نخست‌وزیران دنبال می‌کرد و آزادی در کشور «بی‌سابقه» بود.',
      'در ۱۹۴۹ به جان شاه سوءقصد شد؛ حزب توده غیرقانونی شد و شاه اختیار انحلال مجلس را گرفت.',
    ], [
      'Mohammad Reza became shah in 1941, aged twenty-two, in an occupied country. Yarshater writes that in these years he followed the Majles’ vote in choosing prime ministers, and that freedom in the country was “unprecedented”.',
      'In 1949 an attempt was made on the shah’s life; the Tudeh party was outlawed and the shah gained the power to dissolve the Majles.',
    ]],
    [[
      `${OUR}شاهی جوان که کشورش را سربازان بیگانه گرفته بودند، تاج را از پدری تبعیدی گرفت و کشور را بی‌آن‌که از هم بپاشد، از جنگ جهانی بیرون آورد. این آغاز کوچکی نبود.`,
    ], [
      `${OUR_EN}a young king, whose country was held by foreign soldiers, took the crown from an exiled father and brought the country out of the world war without breaking apart. That was no small beginning.`,
    ]],
    [[
      'این برداشت ماست: آزادی مطبوعات و مجلس در این سال‌ها نشان داد جامعهٔ ایرانی آمادهٔ گفت‌وگوی سیاسی است.',
    ], [
      'This is our reading: the free press and parliament of these years showed that Iranian society was ready for political debate.',
    ]],
    [...Y6, ...C3], { photos: ['mrs-coronation-1967'], quotes: [
      { text: 'The first phase of Moḥammad Reza Shah’s reign (1941-53) was characterized by factionalism in the Majles, unbridled disputes, and sometimes character assassinations in the press, as a fruit of unprecedented freedom, despite a measure of government control.', fa: '«مرحلهٔ نخست پادشاهی محمدرضاشاه (۱۹۴۱–۱۹۵۳) با جناح‌بازی در مجلس، کشمکش‌های لگام‌گسیخته و گاه ترور شخصیت در مطبوعات شناخته می‌شد؛ ثمرهٔ آزادی بی‌سابقه، با وجود اندکی نظارت دولت.»', ref: 'E. Yarshater, “Iran ii. Iranian history (2) Islamic period, page 6”, Encyclopaedia Iranica', source: 'yarshater-iran-p6' },
    ] }),
  sec('azarbaijan', 'نجات آذربایجان (۱۹۴۶)', 'Saving Azarbaijan (1946)',
    [[
      'پس از جنگ جهانی، متفقین پیمان بسته بودند تا شش ماه پس از پایان جنگ ایران را ترک کنند. اما در آغاز ۱۹۴۶ ارتش شوروی در شمال ایران ماند و دولت‌های خودخوانده‌ای را در تبریز و مهاباد پشتیبانی کرد.',
      'ایران به سازمان ملل شکایت برد و شورای امنیت در ۳۰ ژانویهٔ ۱۹۴۶ قطعنامهٔ ۲ را صادر کرد. حسین علاء، سفیر ایران در آمریکا (۱۹۴۵–۱۹۵۰)، در این سال‌ها در واشنگتن بود. مجلس در ۲۶ ژانویهٔ ۱۹۴۶ با ۵۲ رأی در برابر ۵۱ رأی قوام‌السلطنه را نخست‌وزیر کرد؛ او برای گفت‌وگوی رودررو با استالین به مسکو رفت.',
      'آمریکا از شکایت‌های ایران در شورای امنیت پشتیبانی کرد. در ۲۴ مارس استالین فرمان بیرون رفتن ارتش سرخ را داد و ارتش شوروی تا ژوئن ۱۹۴۶ ایران را ترک کرد.',
      'در ۱۱ دسامبر ۱۹۴۶ (۲۰ آذر ۱۳۲۵) ارتش ایران به رهبری خود شاه به آذربایجان رفت و حکومت پیشه‌وری بی‌مقاومت چندانی فرو ریخت. در ۲۲ اکتبر ۱۹۴۷ مجلس تازه قرارداد نفت شوروی را با ۱۰۲ رأی در برابر ۲ رأی رد کرد.',
    ], [
      'After the world war the Allies had agreed to leave Iran within six months of the end of hostilities. But in early 1946 the Soviet army stayed in northern Iran and backed self-proclaimed governments in Tabriz and Mahabad.',
      'Iran took its complaint to the United Nations, and on 30 January 1946 the Security Council passed Resolution 2. Hossein Ala was Iran’s ambassador to the United States from 1945 to 1950. On 26 January 1946 the Majles elected Qavam os-Saltaneh prime minister by 52 votes to 51; he flew to Moscow to talk to Stalin in person.',
      'The United States backed Iran’s complaints in the Security Council. On 24 March Stalin ordered the Red Army out, and Soviet troops had left Iran by June 1946.',
      'On 11 December 1946 the Iranian army, led by the shah in person, entered Azarbaijan, and Pishevari’s government collapsed with little resistance. On 22 October 1947 the new Majles rejected the Soviet oil agreement by 102 votes to 2.',
    ]],
    [[
      `${OUR}این یکی از درخشان‌ترین پیروزی‌های دیپلماسی ایران در سدهٔ بیستم بود. هیچ گلوله‌ای بر ارتش سرخ شلیک نشد؛ ایران با شکایت در سازمان ملل، با زیرکی قوام در مسکو، با کار علاء در آمریکا و با ارتشی که شاه جوان خود پیشاپیش آن رفت، استان‌هایش را پس گرفت.`,
      'منابع از کشمکش شاه و قوام هم می‌گویند: ویکی‌پدیا می‌نویسد شاه می‌کوشید گفت‌وگوی قوام با پیشه‌وری را بی‌اثر کند. هر دو در این پیروزی سهم داشتند.',
    ], [
      `${OUR_EN}this was one of the most brilliant victories of Iranian diplomacy in the twentieth century. Not a shot was fired at the Red Army; through a complaint to the UN, Qavam’s shrewdness in Moscow, Ala’s work in America and an army the young shah himself led, Iran won back its provinces.`,
      'The sources also record friction between the shah and Qavam: Wikipedia writes that the shah sought to undercut Qavam’s attempts to reach an agreement with Pishevari. Both had a share in this victory.',
    ]],
    [[
      'این برداشت ماست: آذربایجان نشان داد که یکپارچگی ایران را می‌توان با دیپلماسی، قانون بین‌المللی و همبستگی ملی نگه داشت.',
    ], [
      'This is our reading: Azarbaijan showed that Iran’s unity could be kept through diplomacy, international law and national solidarity.',
    ]],
    ['wp-crisis-1946', 'wp-qavam', 'wp-ala', ...WM, ...C3], { photos: ['mrs-qavam-moscow', 'mrs-ala'], timeline: [
      { when: B('۲۶ ژانویهٔ ۱۹۴۶', '26 Jan 1946'), text: B('قوام با ۵۲ رأی در برابر ۵۱ نخست‌وزیر می‌شود', 'Qavam elected prime minister, 52 votes to 51') },
      { when: B('۳۰ ژانویهٔ ۱۹۴۶', '30 Jan 1946'), text: B('قطعنامهٔ ۲ شورای امنیت', 'UN Security Council Resolution 2') },
      { when: B('۲۴ مارس ۱۹۴۶', '24 Mar 1946'), text: B('استالین فرمان بیرون رفتن ارتش سرخ را می‌دهد', 'Stalin orders the Red Army out') },
      { when: B('۱۱ دسامبر ۱۹۴۶', '11 Dec 1946'), text: B('ارتش ایران به رهبری شاه به آذربایجان بازمی‌گردد', 'The army, led by the shah, returns to Azarbaijan') },
      { when: B('۲۲ اکتبر ۱۹۴۷', '22 Oct 1947'), text: B('مجلس قرارداد نفت شوروی را ۱۰۲ به ۲ رد می‌کند', 'Majles rejects the Soviet oil deal, 102 to 2') },
    ] }),
  sec('mosaddeq', 'مصدق، نفت و ۲۸ مرداد', 'Mosaddeq, oil and 19 August 1953',
    [[
      'در آوریل ۱۹۵۱ [مصدق](/event/28-mordad) نخست‌وزیر شد و صنعت نفت ملی شد. در اوت ۱۹۵۳ شاه مصدق را برکنار کرد، مصدق نپذیرفت و شاه کشور را ترک کرد. در ۱۹ اوت مصدق سرنگون شد و شاه بازگشت. در ۱۹۵۴ قرارداد کنسرسیوم امضا شد و نفت دوباره جریان یافت.',
    ], [
      'In April 1951 [Mosaddeq](/en/event/28-mordad) became prime minister and the oil industry was nationalised. In August 1953 the shah dismissed Mosaddeq, Mosaddeq refused to go and the shah left the country. On 19 August Mosaddeq fell and the shah returned. In 1954 the consortium agreement was signed and oil flowed again.',
    ]],
    [[
      'نقش بیگانگان و شاه در این روز را منابع ایرانیکا با واژه‌های گوناگون می‌گویند (بنگرید به یادداشت رویداد و صفحهٔ ۲۸ مرداد).',
    ], [
      'Iranica’s articles describe the roles of foreign powers and the shah in different words (see the event note and the 19 August page).',
    ]],
    [[
      'این برداشت ماست: ۲۸ مرداد هنوز یکی از پرمناقشه‌ترین روزهای تاریخ معاصر ایران است؛ صفحهٔ جداگانه‌اش روایت‌ها را کنار شواهد می‌گذارد.',
    ], [
      'This is our reading: 19 August 1953 is still one of the most contested days in modern Iranian history; its own page sets the narratives beside the evidence.',
    ]],
    [...CO, ...Y6, ...C3], { photos: ['mosaddeq-1952'],
      link: {
        href: { fa: '/event/28-mordad', en: '/en/event/28-mordad' },
        kicker: { fa: 'صفحهٔ ویژه', en: 'Dedicated page' },
        label: { fa: '۲۸ مرداد ساعت‌به‌ساعت', en: '19 August 1953, hour by hour' },
        blurb: {
          fa: 'بازیگران، اسناد و روایت‌ها را در برابر شواهد بخوانید؛ صفحه‌ای جداگانه از این پرونده.',
          en: 'The cast, the documents and the narratives against the evidence — a page of its own.',
        },
        thumb: '/media/mordad28/mosaddeq.webp',
        thumbAlt: { fa: 'محمد مصدق، ۱۹۵۱', en: 'Mohammad Mosaddeq, 1951' },
      } }),
  sec('white-revolution', 'انقلاب سفید: زمین، دانش و رأی زنان', 'The White Revolution: land, learning and women’s vote',
    [[
      'انقلاب سفید ۱۹ اصل داشت که در شانزده سال آمد؛ شش اصل نخست در ۹ ژانویهٔ ۱۹۶۳ اعلام شد و در ۲۶ ژانویهٔ ۱۹۶۳ به همه‌پرسی رفت.',
      'زمین‌های بزرگ به دهقانان فروخته شد و مالکان با سهام کارخانه‌های دولتی جبران شدند. زنان حق رأی گرفتند. سپاه دانش ساخته شد تا جوانان دیپلمه سربازی را با درس دادن در روستاها بگذرانند؛ سپاه بهداشت پزشکی را به روستاها برد.',
      'به گفتهٔ همان منابع، تولید کشاورزی از ۱۹۶۴ تا ۱۹۷۰ هشتاد درصد در وزن و ۶۷ درصد در ارزش بالا رفت. بنا بر سرشماری‌ها، باسوادی مردان از ۳۹٫۲ درصد (۱۹۶۶) به ۴۷٫۵ درصد (۱۹۷۶) و باسوادی زنان از ۱۷٫۴ به ۳۵٫۵ درصد رسید.',
    ], [
      'The White Revolution had 19 points introduced over sixteen years; the first six were announced on 9 January 1963 and put to a referendum on 26 January 1963.',
      'Large estates were sold to the peasants and landlords were compensated with shares in state factories. Women gained the vote. The Literacy Corps let young men with a diploma serve their military service teaching in villages; the Health Corps took medicine to the countryside.',
      'By the same sources, farm output rose 80% in tonnage and 67% in value between 1964 and 1970. By the censuses, male literacy rose from 39.2% (1966) to 47.5% (1976) and female literacy from 17.4% to 35.5%.',
    ]],
    [[
      `${OUR}در یک نسل، دختر روستایی که مادرش نه رأی داشت و نه سواد، به مدرسه رفت و پای صندوق رأی ایستاد. کمتر پادشاهی در تاریخ ایران چنین دگرگونی‌ای را در زندگی روزمرهٔ مردم برپا کرد.`,
    ], [
      `${OUR_EN}in one generation, a village girl whose mother had neither a vote nor letters went to school and stood at the ballot box. Few kings in Iran’s history brought such a change to people’s daily lives.`,
    ]],
    [[
      'این برداشت ماست: سپاه دانش و سپاه بهداشت هنوز در یاد خانواده‌های روستایی زنده‌اند.',
    ], [
      'This is our reading: the Literacy and Health Corps are still alive in the memory of rural families.',
    ]],
    ['wp-white-revolution', ...WM, ...C3], { photos: ['mrs-women-vote-1963'], wide: true }),
  sec('economy', 'اقتصاد: پانزده سال رشد', 'The economy: fifteen years of growth',
    [[
      'از ۱۹۶۳ تا ۱۹۷۷ تولید ناخالص داخلی ایران سالانه به‌طور میانگین ۱۰٫۵ درصد رشد کرد؛ صنعت ۱۵ و خدمات ۱۴٫۳ درصد. درآمد سرانه از ۱۷۰ دلار در ۱۹۶۳ به ۲٬۰۶۰ دلار در ۱۹۷۷ رسید.',
      'بنا بر دادهٔ بانک مرکزی که ویکی‌پدیا نقل می‌کند، رشد سالانه در ۱۹۶۰ تا ۱۹۷۹ به‌طور میانگین ۹٫۱ درصد بود. پس از ۱۹۷۳ بهای نفت چند برابر شد و درآمد نفت ایران جهش کرد.',
    ], [
      'From 1963 to 1977 Iran’s GDP grew by an average of 10.5% a year; industry by 15% and services by 14.3%. Income per head rose from $170 in 1963 to $2,060 in 1977.',
      'By Central Bank data quoted on Wikipedia, annual growth in 1960–1979 averaged 9.1%. After 1973 the oil price multiplied and Iran’s oil revenue leapt.',
    ]],
    [[
      `${OUR}این‌ها فقط عدد نیستند: کارخانه، جاده، سد، دانشگاه و طبقهٔ متوسطی که برای نخستین بار خانه و خودرو و سفر داشت. تا میانهٔ دههٔ ۱۹۷۰ بدهی ملی پرداخت شد و ایران از بدهکار به بستانکار بدل شد؛ شهرنشینی از ۳۱ درصد (۱۹۵۶) به ۴۹ درصد (۱۹۷۸) رسید.`,
      'ویکی‌پدیا این ارقام را از منابع گوناگون می‌آورد؛ ما سرچشمهٔ هر عدد را در کتاب‌شناسی گذاشته‌ایم.',
    ], [
      `${OUR_EN}these are not just numbers: factories, roads, dams, universities, and a middle class that for the first time owned homes and cars and travelled. By the mid-1970s the national debt was paid off and Iran turned from debtor to creditor; urbanisation rose from 31% (1956) to 49% (1978).`,
      'Wikipedia draws these figures from various sources; we give the source of each number in the bibliography.',
    ]],
    [[
      'این برداشت ماست: آن رشد نشان داد ایرانیان، با امنیت و سرمایه، چه می‌توانند بسازند.',
    ], [
      'This is our reading: that growth showed what Iranians can build when they have security and capital.',
    ]],
    [...WM, ...C3, ...C4], { embed: 'mrs-economy' }),
  sec('entrepreneurs', 'کارآفرینان ایرانی', 'Iranian entrepreneurs',
    [[
      'حبیب ثابت (۱۹۰۳–۱۹۹۰) از بزرگ‌ترین صنعتگران ایران بود: نمایندگی جنرال الکتریک، وستینگهاوس و فولکس‌واگن، کارخانهٔ پپسی از ۱۹۵۵، و نخستین تلویزیون ایران که در ۲۳ اکتبر ۱۹۵۸ در تهران آغاز به کار کرد.',
      'برادران خیامی، محمود و احمد، در ۱۹۶۲ ایران ناسیونال را ساختند. پیکان از ۱۹۶۷ تولید شد؛ تا ۱۹۷۹ سالانه ۱۰۰٬۰۰۰ خودرو با حدود ۴۴ درصد قطعهٔ ساخت ایران بیرون می‌آمد. احمد خیامی فروشگاه‌های کوروش را هم بنیاد نهاد.',
      'ابوالحسن ابتهاج، رئیس بانک ملی از ۱۹۴۲، به گفتهٔ یوجین بلک، رئیس بانک جهانی، «پیشگامی برجسته در توسعهٔ جهان سوم» بود.',
    ], [
      'Habib Sabet (1903–1990) was one of Iran’s major industrialists: franchises for General Electric, Westinghouse and Volkswagen, Pepsi bottling from 1955, and Iran’s first television station, launched in Tehran on 23 October 1958.',
      'The Khayami brothers, Mahmoud and Ahmad, founded Iran National in 1962. The Peykan went into production in 1967; by 1979 100,000 cars a year were made with about 44% Iranian parts. Ahmad Khayami also founded the Kourosh department stores.',
      'Abol Hassan Ebtehaj, head of Bank Melli from 1942, was in the words of World Bank president Eugene Black “an outstanding pioneer in Third World development”.',
    ]],
    [[
      `${OUR}کارآفرینی که فرزند خانواده‌ای ساده بود، دوچرخه کرایه می‌داد و تلویزیون ساخت؛ برادرانی از مشهد که خودروی ملی ایران را ساختند. این دوره‌ای بود که در آن سرمایهٔ خصوصی ایرانی می‌توانست رؤیا ببیند و بسازد.`,
    ], [
      `${OUR_EN}an entrepreneur who started by renting bicycles and ended by founding television; brothers from Mashhad who built Iran’s national car. This was an era in which private Iranian capital could dream and build.`,
    ]],
    [[
      'این برداشت ماست: حق مالکیت و امنیت سرمایه، زمینهٔ این کارنامه بود.',
    ], [
      'This is our reading: property rights and secure capital were the ground of this record.',
    ]],
    ['wp-sabet', 'wp-khayami', 'wp-ebtehaj'], { quotes: [
      { text: 'one of the most significant Iranians of the post-World War II period ... an outstanding pioneer in Third World development, a nationalist utterly committed to the promotion of his country\'s interests.', fa: '«یکی از مهم‌ترین ایرانیان دوران پس از جنگ جهانی دوم … پیشگامی برجسته در توسعهٔ جهان سوم، میهن‌دوستی سراپا وقف پیشبرد منافع کشورش.»', source: 'wp-ebtehaj', ref: 'Eugene R. Black, quoted in Wikipedia, “Abol Hassan Ebtehaj”' },
    ] }),
  sec('culture', 'اوج موسیقی و ادبیات', 'The high tide of music and literature',
    [[
      'برنامهٔ «گل‌ها» به بنیان‌گذاری داوود پیرنیا از ۱۹۵۶ تا ۱۹۷۹ در رادیو پخش شد: ۱٬۵۷۸ برنامه، نزدیک ۸۴۷ ساعت موسیقی و شعر. بنان از ۱۹۴۲ در رادیو می‌خواند؛ دلکش از ۱۹۴۵ در رادیو ایران بود؛ شجریان در ۱۹۵۹ در رادیو خراسان آغاز کرد و در دههٔ ۱۹۶۰ نام‌آور شد؛ گوگوش در پایان دههٔ ۱۹۷۰ در اوج شهرت بود.',
      'جشن هنر شیراز از ۱۹۶۷ تا ۱۹۷۷ هنرمندان شرق و غرب را در شیراز و تخت جمشید گرد آورد. کانون پرورش فکری کودکان و نوجوانان در ۱۹۶۵ با کتابخانه‌های ثابت و سیار در سراسر کشور آغاز شد.',
      'شاملو با «هوای تازه» (۱۹۵۷) نام‌آور شد؛ فروغ فرخزاد «تولدی دیگر» را در ۱۹۶۴ منتشر کرد و فیلم «خانه سیاه است» (۱۹۶۲) را ساخت؛ «هشت کتاب» سهراب سپهری در ۱۹۷۶ درآمد.',
    ], [
      'The radio programme Golha, founded by Davoud Pirnia, ran from 1956 to 1979: 1,578 programmes, about 847 hours of music and poetry. Banan sang on the radio from 1942; Delkash joined Radio Iran in 1945; Shajarian began at Radio Khorasan in 1959 and rose to fame in the 1960s; Googoosh was at the height of her fame in the late 1970s.',
      'The Shiraz Arts Festival brought artists of East and West to Shiraz and Persepolis from 1967 to 1977. Kanoon, the Institute for the Intellectual Development of Children and Young Adults, began in 1965 with permanent and travelling libraries across the country.',
      'Shamlou rose to fame with Fresh Air (1957); Forough Farrokhzad published Reborn in 1964 and made The House Is Black (1962); Sohrab Sepehri’s Eight Books appeared in 1976.',
    ]],
    [[
      `${OUR}در یک نسل، صدای بنان و دلکش و شجریان، شعر فروغ و شاملو و سپهری، و نسلی از کودکان که در کتابخانه‌های کانون بزرگ شدند. بسیاری از آنچه امروز «فرهنگ ایرانی» می‌نامیم در همین سال‌ها شکفت.`,
    ], [
      `${OUR_EN}in one generation came the voices of Banan, Delkash and Shajarian, the poetry of Forough, Shamlou and Sepehri, and a generation of children raised in Kanoon’s libraries. Much of what we call Iranian culture today blossomed in these years.`,
    ]],
    [[
      'این برداشت ماست: گل‌ها هنوز در خانه‌های ایرانی پخش می‌شود.',
    ], [
      'This is our reading: Golha is still played in Iranian homes.',
    ]],
    ['wp-golha', 'wp-banan', 'wp-delkash', 'wp-shajarian', 'wp-googoosh', 'wp-shiraz-festival', 'wp-kanoon', 'wp-forough', 'wp-shamlou', 'wp-sepehri'], { photos: ['mrs-forough', 'mrs-shiraz-festival'] }),
  sec('jashn-2500', 'جشن‌های ۲۵۰۰ ساله شاهنشاهی', 'The 2,500-year celebrations of the monarchy',
    [[
      'در اکتبر ۱۹۷۱ جشن ۲۵۰۰ سالهٔ پادشاهی ایران برگزار شد. آیین گشایش در ۱۲ اکتبر بر سر آرامگاه کوروش در پاسارگاد بود. گردهمایی اصلی در تخت جمشید شکل گرفت و گاه‌شمار ایرانیکا می‌نویسد ۶۹ سران کشورها یا نمایندگانشان در آن شرکت کردند.',
      'در ۱۶ اکتبر برج شهیاد آریامهر، طرح حسین امانت، در تهران گشوده شد و استوانهٔ کوروش، که موزهٔ بریتانیا به امانت داده بود، در موزهٔ درون برج به نمایش درآمد.',
    ], [
      'In October 1971 the 2,500th anniversary of the Persian monarchy was marked. The opening ceremony was held on 12 October at Cyrus’s tomb in Pasargadae. The main gatherings were at Persepolis, and the Iranica chronology records that 69 heads of state or their representatives took part.',
      'On 16 October the Shahyad Aryamehr monument, designed by Hossein Amanat, was opened in Tehran, and the Cyrus Cylinder, on loan from the British Museum, was displayed in the museum inside the tower.',
    ]],
    [[
      `${OUR}این جشن ایران کهن را پیش چشم جهان آورد و پیوند میان کوروش و ایران امروز را بیان کرد. شهیاد هنوز در تهران ایستاده است.`,
    ], [
      `${OUR_EN}these celebrations set Iran’s ancient past before the world and stated the link between Cyrus and Iran today. Shahyad still stands in Tehran.`,
    ]],
    [[
      'این برداشت ماست: روزشمار، مهمانان و میراث این جشن را در صفحه‌ای جداگانه آورده‌ایم.',
    ], [
      'This is our reading: a dedicated page sets out the days, the guests and what remained of these celebrations.',
    ]],
    [...C3, 'nyt-1971-10-13', 'steele-2014'], {
      link: {
        href: { fa: '/event/jashn-2500', en: '/en/event/jashn-2500' },
        kicker: { fa: 'صفحهٔ ویژه', en: 'Dedicated page' },
        label: { fa: 'جشن‌های ۲۵۰۰ ساله شاهنشاهی', en: 'The 2,500-year celebrations' },
        blurb: {
          fa: 'از سخن پاسارگاد تا شهر چادری تخت جمشید، رژه، کنگرهٔ ایران‌شناسی و گشایش شهیاد.',
          en: 'From the speech at Pasargadae to the tent city at Persepolis, the parade, the congress of Iranology and the opening of Shahyad.',
        },
        thumb: '/media/jashn2500/speech.webp',
        thumbAlt: { fa: 'آیین ۱۲ اکتبر ۱۹۷۱ بر سر آرامگاه کوروش', en: 'The ceremony of 12 October 1971 at Cyrus’s tomb' },
      },
    }),
  sec('freedoms', 'آزادی پوشش و شیوهٔ زندگی', 'Freedom of dress and way of life',
    [[
      'منع حجاب رضاشاه پنج سال (۱۹۳۶–۱۹۴۱) اجرا شد؛ پس از آن، به گفتهٔ منابع، زنان تا انقلاب ۱۹۷۹ چهل سال آزاد بودند هر گونه که می‌خواهند بپوشند. در دوران محمدرضاشاه پوشیدن چادر یا روسری جرم نبود.',
      'در دههٔ ۱۹۷۰ بسیاری از زنان از پوشش و موی گوگوش پیروی می‌کردند.',
    ], [
      'Reza Shah’s ban on the veil was enforced for five years (1936–1941); after that, the sources say, women were free to dress as they wished for forty years until the revolution of 1979. Under Mohammad Reza Shah wearing a chador or headscarf was no offence.',
      'In the 1970s many women copied Googoosh’s clothes and haircut.',
    ]],
    [[
      `${OUR}زنی با چادر و زنی بی‌روسری می‌توانستند در یک خیابان راه بروند و هیچ‌کدام از دولت نترسند. این همزیستی شیوه‌های دینی و غیردینی زندگی، یکی از گران‌بهاترین آزادی‌های آن روزگار بود.`,
    ], [
      `${OUR_EN}a woman in a chador and a woman without a scarf could walk the same street, and neither feared the state. That coexistence of religious and secular ways of life was one of the most precious freedoms of the age.`,
    ]],
    [[
      'این برداشت ماست: آزادی پوشش بخشی از مالکیت هر کس بر تن خویش است.',
    ], [
      'This is our reading: freedom of dress is part of each person’s ownership of their own body.',
    ]],
    ['wp-kashf', 'wp-googoosh'], {}),
  sec('army', 'ارتش نیرومند و خرید اف‑۱۴', 'A strong army and the F-14',
    [[
      'نیروی هوایی شاهنشاهی در آغاز دههٔ ۱۹۷۰ جنگنده‌ای می‌خواست که بتواند هواپیماهای شناسایی میگ‑۲۵ شوروی را رهگیری کند. پس از سفر نیکسون به تهران در ۱۹۷۲، اف‑۱۴ و اف‑۱۵ در پایگاه اندروز برای شاه و فرماندهان به نمایش درآمدند.',
      'در ژانویهٔ ۱۹۷۴ ایران ۳۰ اف‑۱۴ و ۴۲۴ موشک فینیکس سفارش داد (طرح «پرشین کینگ»). در ۱۰ ژوئن ۱۹۷۴ شاه ۵۰ فروند دیگر خرید؛ سفارت آمریکا ارزش ۸۰ فروند را بی موشک نزدیک ۱٫۸ میلیارد دلار نوشت. سفارش به ۷۱۴ موشک فینیکس، قطعات و موتور ده ساله و ساخت پایگاه خاتمی در نزدیکی اصفهان رسید.',
      'گرومن، سازندهٔ اف‑۱۴، در بحران مالی بود. در ۱۹۷۴ بانک ملی ایران ۷۵ میلیون دلار وام به گرومن داد، بخشی از بستهٔ ۲۰۰ میلیون دلاری که گرومن را از سقوط مالی بیرون آورد. نخستین اف‑۱۴ در ژانویهٔ ۱۹۷۶ رسید و در پایان ۷۹ فروند به ایران تحویل شد.',
    ], [
      'In the early 1970s the Imperial Iranian Air Force wanted a fighter able to intercept Soviet MiG-25 reconnaissance flights. After Nixon’s visit to Tehran in 1972, the F-14 and F-15 were demonstrated for the shah and his commanders at Andrews AFB.',
      'In January 1974 Iran ordered 30 F-14s and 424 Phoenix missiles (Project Persian King). On 10 June 1974 the shah bought 50 more; the US embassy put the value of the 80 aircraft at almost $1.8 billion, missiles not included. The order grew to 714 Phoenix missiles, ten years of spares and engines, and the building of Khatami Air Base near Isfahan.',
      'Grumman, the F-14’s maker, was in a financial crisis. In 1974 Bank Melli Iran lent Grumman $75 million, part of a $200 million package that pulled the company out of its tailspin. The first F-14 arrived in January 1976, and 79 were delivered to Iran in all.',
    ]],
    [[
      `${OUR}شاهی که در نوجوانی فروپاشی ارتش پدر را در ۱۹۴۱ دیده بود، پیمان بست که ایران دیگر بی‌دفاع نماند. او نه تنها پیشرفته‌ترین جنگندهٔ جهان را خرید، که با وام بانک ملی سازندهٔ آن را هم سرپا نگه داشت. همین هواپیماها سال‌ها بعد آسمان ایران را در جنگ با عراق پاس داشتند.`,
    ], [
      `${OUR_EN}a king who as a youth had seen his father’s army collapse in 1941 vowed that Iran would never again be defenceless. He not only bought the most advanced fighter in the world but, with a Bank Melli loan, kept its maker on its feet. Years later those same aircraft guarded Iran’s skies in the war with Iraq.`,
    ]],
    [[
      'این برداشت ماست: اف‑۱۴های ایران هنوز نماد توان فنی و دوراندیشی آن دوران‌اند.',
    ], [
      'This is our reading: Iran’s F-14s remain a symbol of the technical ability and foresight of that era.',
    ]],
    ['wp-f14', 'frus-1974-61', 'nyt-1975-grumman', 'nyt-1975-melli', ...WM], { photos: ['mrs-f14-1975'], wide: true, timeline: [
      { when: B('ژانویهٔ ۱۹۷۴', 'Jan 1974'), text: B('سفارش ۳۰ اف‑۱۴ و ۴۲۴ فینیکس', '30 F-14s and 424 Phoenix ordered') },
      { when: B('۱۰ ژوئن ۱۹۷۴', '10 Jun 1974'), text: B('۵۰ فروند دیگر؛ جمعاً ۸۰', '50 more; 80 in all') },
      { when: B('۱۹۷۴', '1974'), text: B('وام ۷۵ میلیون دلاری بانک ملی به گرومن', 'Bank Melli’s $75 million loan to Grumman') },
      { when: B('ژانویهٔ ۱۹۷۶', 'Jan 1976'), text: B('رسیدن نخستین اف‑۱۴', 'First F-14 arrives') },
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
  sec('shadows', 'سایه‌ها و پایان', 'Shadows and the end',
    [[
      'ساواک در ۱۹۵۷ ساخته شد و در ۱۹۷۵ کشور تک‌حزبی (رستاخیز) شد. در ۱۹۷۸ اعتراض‌ها سراسری شد؛ شاه در ۱۶ ژانویهٔ ۱۹۷۹ ایران را ترک کرد و در ۱۹۸۰ در قاهره درگذشت.',
    ], [
      'SAVAK was formed in 1957, and in 1975 Iran became a one-party state (Rastakhiz). In 1978 protest spread across the country; the shah left Iran on 16 January 1979 and died in Cairo in 1980.',
    ]],
    [[
      'منابع ایرانیکا از محدود شدن آزادی سیاسی در سال‌های پایانی می‌گویند.',
    ], [
      'Iranica’s articles record the narrowing of political freedom in the last years.',
    ]],
    [[
      'این برداشت ماست: داوری دربارهٔ این پادشاهی هنوز دوپاره است؛ ما رویدادها را با منبع آورده‌ایم.',
    ], [
      'This is our reading: judgement of this reign is still divided; we have set out the events with their sources.',
    ]],
    [...Y6, ...C3, ...C4]),
]


export const mohammadReza: FeaturedKing = {
  slug: 'mohammad-reza-shah',
  name: B('محمدرضاشاه پهلوی', 'Mohammad Reza Shah Pahlavi'),
  dynastyName: B('پهلوی', 'The Pahlavis'),
  reign: B('۱۹۴۱–۱۹۷۹ م', '1941–1979 CE'),
  title: B('محمدرضاشاه پهلوی؛ آذربایجان، انقلاب سفید، رشد، فرهنگ و ارتش', 'Mohammad Reza Shah: Azarbaijan, the White Revolution, growth, culture and a strong army'),
  lede: B(
    'در ۱۹۴۱ در کشوری اشغال‌شده شاه شد. در ۱۹۴۶ آذربایجان را بی‌جنگ با ارتش سرخ به ایران بازگرداند، با انقلاب سفید زمین، سواد و رأی را به روستا و به زنان رساند، و در پانزده سال اقتصاد ایران را سالانه بیش از ده درصد رشد داد. موسیقی و شعر فارسی در دوران او به اوج رسید و ارتش ایران با اف‑۱۴ از نیرومندترین‌های منطقه شد.',
    'He became shah in 1941 in an occupied country. In 1946 he brought Azarbaijan back to Iran without a war with the Red Army; with the White Revolution he took land, literacy and the vote to the villages and to women; and for fifteen years Iran’s economy grew by more than ten per cent a year. Persian music and poetry reached a high tide in his reign, and with the F-14 Iran’s air force became one of the strongest in the region.',
  ),
  stats: [
    { n: B('۳۸ سال', '38 years'), l: B('پادشاهی (۱۹۴۱–۱۹۷۹)', 'reign (1941–1979)') },
    { n: B('۱۰٫۵٪', '10.5%'), l: B('رشد سالانهٔ اقتصاد، ۱۹۶۳–۱۹۷۷', 'annual GDP growth, 1963–1977') },
    { n: B('۱۷۰ ← ۲٬۰۶۰ دلار', '$170 → $2,060'), l: B('درآمد سرانه، ۱۹۶۳–۱۹۷۷', 'income per head, 1963–1977') },
    { n: B('۷۹ اف‑۱۴', '79 F-14s'), l: B('تحویل‌شده به نیروی هوایی', 'delivered to the air force') },
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
  synthesis: { title: B('جمع‌بندی: پادشاهی ساختن', 'Synthesis: a reign of building'), paras: {
    fa: [
      'منابع این صفحه نشان می‌دهند: آذربایجان در ۱۹۴۶ بازگشت، انقلاب سفید زمین و سواد و رأی را گسترد، اقتصاد پانزده سال پیاپی بیش از ده درصد رشد کرد، کارآفرینان ایرانی تلویزیون و خودروی ملی ساختند، گل‌ها و شعر نو شکفتند، و ارتش با اف‑۱۴ نیرومند شد.',
      'نگاه ما: محمدرضاشاه ایرانی را تحویل گرفت که اشغال شده بود و ایرانی را بر جا گذاشت که راه، کارخانه، دانشگاه، فرهنگی زنده و ارتشی توانا داشت. سایه‌های پایان کار او را با منبع آورده‌ایم، اما کارنامهٔ ساختن او بزرگ‌تر از آن است که فراموش شود.',
    ],
    en: [
      'The sources on this page show it: Azarbaijan returned in 1946, the White Revolution spread land, literacy and the vote, the economy grew by over ten per cent a year for fifteen years, Iranian entrepreneurs built television and a national car, Golha and modern poetry blossomed, and the F-14 made the army strong.',
      'Our view: Mohammad Reza Shah took over an occupied Iran and left an Iran of roads, factories, universities, a living culture and a capable army. We have recorded the shadows of his last years with their sources, but his record of building is too great to be forgotten.',
    ],
  }, sources: [...Y6, ...CO, ...C3, ...C4] },
  sources: [...pvSources, ...rzSources.filter((s) => s.id === 'wp-kashf')],
  photos: [...pvPhotos, ...mrsPhotos],
  hero: 'mrs-portrait-1973',
  related: [
    { href: { fa: '/dynasty/pahlavis', en: '/dynasty/pahlavis' }, label: B('دودمان پهلوی', 'The Pahlavi dynasty') },
    { href: { fa: '/king/reza-shah', en: '/en/king/reza-shah' }, label: B('رضاشاه پهلوی', 'Reza Shah Pahlavi') },
  ],
  wikipedia: 'https://en.wikipedia.org/wiki/Mohammad_Reza_Pahlavi',
}
