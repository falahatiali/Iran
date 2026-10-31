/**
 * Karim Khan Zand, "the Wakil", 1751–1779 CE, with the Zand successors to Lotf-Ali Khan (d. 1794).
 * Spine: J. R. Perry, "Karim Khan Zand" and "Zand Dynasty" (both Encyclopaedia Iranica).
 */
import type { DossierSection, FeaturedKing } from '../featured/types'
import { ev, note, sec } from '../late-achaemenid/common'
import { B, P, zdPhotos, zdSources } from './common'

const sketch = note('منابع راه دقیق را نمی‌گویند؛ خط‌ها طرح‌وارند.', 'The sources give no exact routes; the lines are sketches.')
const K = ['iranica-karim-khan']
const KZ = ['iranica-karim-khan', 'iranica-zand-dynasty']

export const karimEvents = [
  ev('birth', 1705, B('حدود ۱۷۰۵ م', 'c. 1705 CE'), 'admin', P.MALAYER, B('زاده در ایل زند', 'Born into the Zand tribe'), B('زندها ایلی کوچ‌نشین از شاخهٔ لک لرهای شمالی بودند، با مرکز روستاهای پری و کمازان نزدیک ملایر.', 'The Zand were a pastoral tribe of the Lak branch of the northern Lors, centred on the villages of Pari and Kamazan near Malayer.'), 'probable', K, note('سال زادن تقریبی است («حدود ۱۷۰۵») و جای دقیق آن را منبع نمی‌گوید.', 'The birth year is approximate (“ca. 1705”) and the source does not give the exact place.')),
  ev('deported', 1732, B('۱۷۳۲ م', '1732 CE'), 'admin', P.MASHHAD, B('تبعید به خراسان', 'Deported to Khorasan'), B('نادرشاه هزاران بختیاری و شماری از خانواده‌های زند را به خراسان کوچاند؛ کریم در سپاه نادر خدمت کرد.', 'Nader Shah deported thousands of Bakhtiari and a number of Zand families to Khorasan; Karim served in Nader’s army.'), 'secure', KZ),
  ev('isfahan', 1750, B('۱۷۵۰ م', '1750 CE'), 'campaign', P.ISFAHAN, B('اصفهان و اسماعیل سوم', 'Isfahan and Esmail III'), B('پس از کشته شدن نادر ایلش را به خانه برگرداند. با علی‌مردان‌خان بختیاری اصفهان را گرفت و شاهزاده‌ای صفوی را با نام اسماعیل سوم بر تخت نشاند.', 'After Nader’s murder he led his people home. With Ali-Mardan Khan Bakhtiari he took Isfahan and set up a Safavid prince as Shah Esmail III.'), 'secure', KZ),
  ev('wakil', 1751, B('ژانویهٔ ۱۷۵۱ م', 'January 1751 CE'), 'admin', P.BAKHTIARI, B('وکیل‌الدوله', 'Wakil al-dawla'), B('علی‌مردان‌خان را شکست داد و لقب او، «وکیل‌الدوله» (نایب‌السلطنه)، را برگرفت.', 'He defeated Ali-Mardan Khan and took over his title of wakil al-dawla, “deputy of the state” or regent.'), 'secure', KZ),
  ev('shiraz', 1754, B('۲۹ نوامبر ۱۷۵۴ م', '29 November 1754 CE'), 'campaign', P.SHIRAZ, B('ورود نخست به شیراز', 'First entry into Shiraz'), B('پس از پیروزی بر فتحعلی‌خان افشار در کمارج، برای نخستین بار وارد شیراز، پایتخت آینده‌اش، شد.', 'After beating Fath-Ali Khan Afshar at Kamarej he entered his future capital, Shiraz, for the first time.'), 'secure', K),
  ev('qajar', 1759, B('۱۴ فوریهٔ ۱۷۵۹ م', '14 February 1759 CE'), 'battle', P.ASTARABAD, B('پایان محمدحسن‌خان قاجار', 'End of Mohammad-Hasan Khan Qajar'), B('سپاهی به فرماندهی شیخ‌علی‌خان زند محمدحسن‌خان قاجار را شکست داد و او کشته شد. کریم‌خان دو زمستان در تهران ماند و دژ-اقامتگاهی ساخت که هستهٔ کاخ گلستان آینده شد.', 'An army under Shaykh-Ali Khan Zand defeated Mohammad-Hasan Khan Qajar, who was killed. Karim Khan spent two winters in Tehran and built a fortified residence that became the nucleus of the later Golestan Palace.'), 'secure', K),
  ev('tabriz', 1763, B('فوریهٔ ۱۷۶۳ م', 'February 1763 CE'), 'campaign', P.TABRIZ, B('تبریز و ارومیه', 'Tabriz and Urmia'), B('افشارها و دنبلی‌ها را شکست داد و تبریز و ارومیه را گرفت. آزادخان افغان تسلیم شد و در شیراز با احترام زیست.', 'He beat the Afshar and Donboli forces and took Tabriz and Urmia. Azad Khan the Afghan surrendered and lived in honourable retirement at Shiraz.'), 'secure', K),
  ev('capital', 1765, B('۲۱ ژوئیهٔ ۱۷۶۵ م', '21 July 1765 CE'), 'building', P.SHIRAZ, B('شیراز پایتخت', 'Shiraz the capital'), B('دوباره به شیراز آمد و تا مرگ، نزدیک چهارده سال، در آن ماند. در همین سال به کمپانی هند شرقی بریتانیا اجازهٔ تجارتخانه در بوشهر داد.', 'He re-entered Shiraz and stayed there until his death almost fourteen years later. The same year he let the British East India Company open a trading post at Bushehr.'), 'secure', K),
  ev('esmail-dies', 1773, B('۱۷۷۳ م', '1773 CE'), 'admin', P.SHIRAZ, B('مرگ اسماعیل سوم', 'Esmail III dies'), B('شاه دست‌نشاندهٔ صفوی در دژ آباده درگذشت و نمایش بازگشت صفوی بی‌صدا کنار گذاشته شد.', 'The Safavid puppet shah died in the fortress at Abada, and the fiction of a Safavid revival was quietly dropped.'), 'secure', KZ),
  ev('basra', 1776, B('۱۷۷۵–۱۷۷۶ م', '1775–1776 CE'), 'battle', P.BASRA, B('بصره', 'Basra'), B('برادرش صادق‌خان پس از یک سال محاصره بصره را گرفت و تا مرگ کریم‌خان در دست زندها ماند. در پاییز ۱۷۷۵ در قحطی اصفهان و فارس انبارهای دولتی را گشود.', 'His brother Sadeq Khan took Basra after a year’s siege, and the Zands held it until Karim Khan died. In autumn 1775 he opened the state granaries during a famine in Isfahan and Fars.'), 'secure', KZ),
  ev('death', 1779, B('۱ مارس ۱۷۷۹ م', '1 March 1779 CE'), 'admin', P.SHIRAZ, B('مرگ در شیراز', 'Death at Shiraz'), B('در هفتادسالگی، پس از شش ماه بیماری، احتمالاً سل، درگذشت و بی‌تشریفات در باغ نظر به خاک سپرده شد.', 'He died in his seventies after a six-month illness, probably tuberculosis, and was buried with scant ceremony in the Bagh-e Nazar.'), 'secure', K),
]

const campaignEvents = [
  ev('c-isfahan', 1750, B('۱۷۵۰', '1750'), 'campaign', P.ISFAHAN, B('اصفهان', 'Isfahan'), B('با بختیاری‌ها گرفته شد.', 'Taken with the Bakhtiari.'), 'secure', KZ),
  ev('c-bakhtiari', 1751, B('ژانویهٔ ۱۷۵۱', 'Jan 1751'), 'battle', P.BAKHTIARI, B('سرزمین بختیاری', 'Bakhtiari country'), B('علی‌مردان‌خان شکست خورد.', 'Ali-Mardan Khan is beaten.'), 'secure', K, { route: [P.ISFAHAN, P.BAKHTIARI], ...sketch }),
  ev('c-astarabad', 1752, B('۱۷۵۲', '1752'), 'campaign', P.ASTARABAD, B('استرآباد', 'Astarabad'), B('دنبال کردن قاجار؛ عقب رانده شد.', 'Pursuing the Qajars; driven back.'), 'secure', K, { route: [P.KERMANSHAH, P.TEHRAN, P.ASTARABAD], ...sketch }),
  ev('c-kuhgiluya', 1753, B('۱۷۵۳', '1753'), 'campaign', P.KUHGILUYA, B('کهگیلویه', 'Kuhgiluya'), B('پس از شکست از آزادخان عقب نشست.', 'He retreats after losing to Azad Khan.'), 'secure', K, { route: [P.ASTARABAD, P.ISFAHAN, P.KUHGILUYA], ...sketch }),
  ev('c-kamarej', 1754, B('۱۷۵۴', '1754'), 'battle', P.KAMAREJ, B('کمارج', 'Kamarej'), B('فتحعلی‌خان افشار شکست خورد.', 'Fath-Ali Khan Afshar is beaten.'), 'secure', K, { route: [P.KUHGILUYA, P.KAMAREJ], ...sketch }),
  ev('c-shiraz', 1754, B('نوامبر ۱۷۵۴', 'Nov 1754'), 'admin', P.SHIRAZ, B('شیراز', 'Shiraz'), B('ورود نخست.', 'First entry.'), 'secure', K, { route: [P.KAMAREJ, P.SHIRAZ], ...sketch }),
  ev('c-tehran', 1759, B('۱۷۵۹', '1759'), 'admin', P.TEHRAN, B('تهران', 'Tehran'), B('پس از مرگ محمدحسن‌خان قاجار.', 'After Mohammad-Hasan Khan Qajar’s death.'), 'secure', K, { route: [P.SHIRAZ, P.ISFAHAN, P.TEHRAN], ...sketch }),
  ev('c-tabriz', 1763, B('فوریهٔ ۱۷۶۳', 'Feb 1763'), 'battle', P.TABRIZ, B('تبریز', 'Tabriz'), B('دنبلی‌ها شکست خوردند.', 'The Donboli are beaten.'), 'secure', K, { route: [P.TEHRAN, P.TABRIZ], ...sketch }),
  ev('c-urmia', 1763, B('فوریهٔ ۱۷۶۳', 'Feb 1763'), 'battle', P.URMIA, B('ارومیه', 'Urmia'), B('افشارها تسلیم شدند.', 'The Afshars surrender.'), 'secure', K, { route: [P.TABRIZ, P.URMIA], ...sketch }),
  ev('c-capital', 1765, B('ژوئیهٔ ۱۷۶۵', 'Jul 1765'), 'building', P.SHIRAZ, B('شیراز', 'Shiraz'), B('بازگشت؛ پایتخت.', 'Return; the capital.'), 'secure', K, { route: [P.URMIA, P.KERMANSHAH, P.ISFAHAN, P.SHIRAZ], ...sketch }),
  ev('c-basra', 1776, B('۱۷۷۵–۱۷۷۶', '1775–1776'), 'battle', P.BASRA, B('بصره', 'Basra'), B('صادق‌خان شهر را گرفت.', 'Sadeq Khan takes the city.'), 'secure', KZ, { route: [P.SHIRAZ, P.BUSHEHR, P.BASRA], ...sketch }),
]

export const karimDossier: DossierSection[] = [
  sec('wakil', 'وکیل، نه شاه', 'Wakil, not shah',
    [['کریم‌خان در ۱۷۵۱ لقب رقیبش علی‌مردان‌خان، «وکیل‌الدوله» (نایب‌السلطنه)، را برگرفت و به نام شاه دست‌نشانده‌ای صفوی، اسماعیل سوم، فرمان راند.', 'پری می‌نویسد او برخلاف انتظار ایرانیان، فرانسویان و روس‌ها هرگز لقب شاه نگرفت و وکیل را «وکیل‌الرعایا» (نمایندهٔ رعیت) خواند. وکیل‌الرعایا از دورهٔ صفوی نام کارگزاری محلی بود که شاه برای رسیدگی به جرم‌ها و شکایت از ستم دیوانیان می‌گماشت.'],
     ['In 1751 Karim Khan took over his rival Ali-Mardan Khan’s title of wakil al-dawla (“deputy of the state”, regent) and ruled in the name of a Safavid puppet, Esmail III.', 'Perry writes that, against the expectations of Iranians, French and Russians, he never took the title of shah, and reinterpreted wakil as wakil al-raʿāyā, “deputy of the subjects”. From Safavid times wakil al-raʿāyā was the name of a local official appointed by the shah to investigate crimes and complaints of administrative abuse.']],
    [['وکیل‌الرعایا عنوانی فروتنانه بود اما قدرت او کم نبود: پری می‌نویسد اختیار اجرایی را برای خود نگه داشت، وزیرانش فقط مهر می‌زدند و فرماندهی سپاه را تقریباً تنها به خویشان نزدیک زند می‌داد.', 'پس از مرگ اسماعیل سوم (۱۷۷۳) نمایش بازگشت صفوی کنار رفت، اما او باز شاه نشد.'],
     ['Wakil al-raʿāyā was a modest title, but his power was not modest: Perry writes that he kept executive authority to himself, his viziers were rubber stamps, and he gave military command almost only to close Zand kinsmen.', 'After Esmail III died (1773) the fiction of a Safavid revival was dropped, but he still did not become shah.']],
    [['پری می‌نویسد کریم‌خان هنوز در میان فرمانروایان ایران، اگر نه بزرگ‌ترین، بی‌گمان «بهترین» شمرده می‌شود. لقب وکیل‌الرعایا امروز هم نماد این نام نیک است؛ اینکه این لقب تا چه اندازه در عمل حق رعیت را پاس داشت، داوری ماست و منابع آن را اندازه نمی‌گیرند.'],
     ['Perry writes that Karim Khan is still generally regarded among Persia’s rulers as, if not the greatest, undoubtedly the best. The title wakil al-raʿāyā is still a symbol of that good name; how far it protected subjects in practice is our judgement, and the sources do not measure it.']],
    KZ, { photos: ['karim-louvre'], quotes: [{ text: 'The happy reign of this excellent prince as contrasted with those who preceded and followed him, affords to the Historian of Persia that description of mixed pleasure and repose which a traveller enjoys who arrives at a beautiful and fertile valley, in the midst of an arduous journey over barren and rugged wastes', fa: 'پادشاهی خوش این شاهزادهٔ نیک، در برابر آنان که پیش و پس از او آمدند، به تاریخ‌نویس ایران همان آمیزهٔ لذت و آرامشی را می‌دهد که مسافری در میانهٔ سفری سخت در بیابان‌های خشک و ناهموار، با رسیدن به دره‌ای زیبا و حاصلخیز می‌یابد.', ref: 'Sir John Malcolm, quoted in Perry, “Karim Khan Zand”, Encyclopaedia Iranica', source: 'iranica-karim-khan' }] }),
  sec('shiraz', 'شیراز وکیل', 'The Wakil’s Shiraz',
    [['کریم‌خان شیراز را تا اندازهٔ زیادی از نو ساخت. ارگ، مسجد و چند باغ او هنوز برپاست؛ باروی شهر، چند حمام و کاروانسرا و نیمی از بازار سرپوشیدهٔ وکیل یا به فرمان آقامحمدخان (۱۷۹۲) یا در نوسازی سدهٔ بیستم ویران شد.', 'آرامگاه‌های شاه شجاع، حافظ و سعدی را که رها شده بود تعمیر کرد. افسران زند، لک و لر را در شیراز جا داد؛ جمعیت شهر از اصفهان بیشتر شد، «شاید ۴۰ تا ۵۰ هزار»، و شاعران و هنرمندان از اصفهان به آن آمدند.'],
     ['Karim Khan largely rebuilt Shiraz. His Arg (citadel), mosque and several gardens still stand; the city wall, several baths and caravanserais and half of the Wakil’s covered bazaar were demolished, either on Agha Mohammad Khan’s order (1792) or in 20th-century redevelopment.', 'He repaired the neglected tombs of Shah Shoja, Hafez and Saadi. He housed Zand, Lak and Lor officers in Shiraz; the city grew larger than Isfahan, “perhaps 40–50,000”, and drew poets and artisans from there.']],
    [['دنبلی، گروگان-میهمان او از تبریز که بعدها تاریخ‌نگار قاجار شد، دربار شیراز را آمیزه‌ای از شراب و زن و شعر می‌نماید؛ این نگاه یک درباری است. «شاخ نبات»، معشوقهٔ کریم‌خان، نامی است که مردم آن را نام معشوق حافظ نیز می‌دانند؛ این باوری عامیانه است، نه سند.', 'پری می‌نویسد تعزیه «به احتمال زیاد» در دورهٔ وکیل شکل گرفت و تشیع، که در دورهٔ نادر زیر فشار بود، در دورهٔ زند دوباره جزئی از هویت ایرانی شد.'],
     ['Donboli, his hostage-guest from Tabriz who later became a Qajar historian, paints the Shiraz court as a haze of wine, women and verse; that is a courtier’s view. Shakh-e Nabat (“Sugar-Candy”), Karim Khan’s favourite, bore a name popularly believed to be that of Hafez’s beloved; that is a popular belief, not evidence.', 'Perry writes that the taʿzia passion play “most likely” took shape in the Wakil’s reign, and that Shi’ism, under pressure in Nader’s time, fully reasserted itself as part of Iranian identity under the Zands.']],
    [['ارگ کریم‌خان، مسجد و بازار وکیل و آرامگاه‌های حافظ و سعدی امروز بخشی از چهرهٔ شیرازند؛ آنچه امروز دیده می‌شود بارها تعمیر و دگرگون شده است.'],
     ['The Arg, the Wakil’s mosque and bazaar and the tombs of Hafez and Saadi are part of Shiraz’s face today; what one sees now has been repaired and altered many times.']],
    K, { photos: ['arg-shiraz'] }),
  sec('property', 'غنیمت، غله و نقره', 'Windfalls, grain and silver',
    [['پری می‌نویسد کریم‌خان قاعده داشت که بادآورده را از آن خود نکند: ارث بی‌وارث را مصادره نکرد و وقتی در بازسازی شیراز کوزه‌ای سکهٔ زر پیدا شد، آن را میان کارگران پخش کرد. هدیه‌های جواهر را می‌شکست و می‌فروخت تا خزانه پر شود.', 'در پاییز ۱۷۷۵ در قحطی اصفهان و فارس انبارهای دولتی را گشود. غله از تهران، قزوین و آذربایجان آمد و بهایش در شیراز به چهارده برابر نرخ رسمی رسید، اما او آن را به همان نرخ رسمی به نیازمندان فروخت. در نخستین قرارداد بازرگانی با کمپانی هند شرقی (شیراز، ژوئیهٔ ۱۷۶۳) شرط شد که کمپانی همهٔ درآمد خود را نقد از ایران بیرون نبرد.'],
     ['Perry writes that Karim Khan made it a rule not to keep windfalls: he did not confiscate estates left without heirs, and when a pot of gold coins was dug up during the rebuilding of Shiraz he shared it among the workers. He had gifts of jewellery broken up and sold to top up the treasury.', 'In autumn 1775, during a famine in Isfahan and Fars, he opened the state granaries. Grain came from Tehran, Qazvin and Azarbaijan and cost fourteen times the nominal rate by the time it reached Shiraz, but he sold it to the needy at the nominal rate. The first trade agreement with the East India Company (Shiraz, July 1763) required the Company not to take all its earnings out of Iran in cash.']],
    [['این برداشت ماست: کریم‌خان دارایی شاه را با دارایی کشور یکی نمی‌دانست. او بادآورده را پخش می‌کرد، غله را زیر قیمت می‌فروخت و از بیرون رفتن نقره جلوگیری می‌کرد، یعنی خزانه را ابزار آرامش رعیت می‌دید نه گنجی شخصی. این برخلاف نادر بود که دولتش را بر غنیمت ساخت.', 'محدودیت این برداشت: پری یادآوری می‌کند که بسیاری از این‌ها از حکایت‌های مردمی است و کارنامهٔ او پاک نیست، مانند اعدام چند افسر زند و فتحعلی‌خان افشار و کور کردن شیخ‌علی‌خان زند.'],
     ['This is our reading: Karim Khan did not treat the ruler’s property as the same thing as the country’s wealth. He handed out windfalls, sold grain below cost and tried to stop silver leaving the country, treating the treasury as a tool for keeping subjects at peace rather than a personal hoard. That is the opposite of Nader, whose state was built on booty.', 'The limits of this reading: Perry notes that much of this comes from popular anecdotes, and his record is not clean, with executions of Zand officers and of Fath-Ali Khan Afshar and the blinding of Shaykh-Ali Khan Zand.']],
    [['دغدغهٔ بیرون رفتن نقره و کسری بازرگانی، که در قرارداد ۱۷۶۳ آمد، پرسشی است که در تاریخ اقتصادی ایران بارها بازگشته است.'],
     ['The worry about silver leaving the country and the trade deficit, written into the 1763 agreement, is a question that has returned again and again in Iran’s economic history.']],
    K, { quotes: [{ text: 'and not export from Persia the whole Amount of their sales in ready Money, as this will impoverish the Kingdoms [sic] and in the end prejudice Trade in general', fa: '«و همهٔ مبلغ فروش خود را نقد از ایران بیرون نبرند، زیرا این کار کشور را فقیر می‌کند و سرانجام به بازرگانی به‌طور کلی زیان می‌زند.»', ref: 'Shiraz trade agreement with the East India Company, July 1763, quoted in Perry, “Karim Khan Zand”, Encyclopaedia Iranica', source: 'iranica-karim-khan' }] }),
  sec('fall', 'از وکیل تا لطفعلی‌خان', 'From the Wakil to Lotf-Ali Khan',
    [['پس از مرگ کریم‌خان (۱۷۷۹) خویشانش به جان هم افتادند. زکی‌خان به نام پسر کریم‌خان، محمدعلی، بر شیراز چیره شد و به دست سپاهیان خودش کشته شد. صادق‌خان، برادر کریم‌خان، شیراز را گرفت اما در ۱۷۸۱ علی‌مرادخان شهر را با خیانت گشود و هر دو پسر کریم‌خان و صادق‌خان کشته شدند. آقامحمدخان قاجار، که شانزده سال گروگان کریم‌خان بود، پس از مرگ او از شیراز گریخت.', 'لطفعلی‌خان (زادهٔ ۱۷۶۹) در ۱۷۸۹ شیراز را پس گرفت. در ۱۷۹۱ در راه اصفهان سپاهش به تحریک برادر حاجی ابراهیم کلانتر رهایش کرد و حاجی ابراهیم شیراز را به آقامحمدخان سپرد (۲۱ ژوئیهٔ ۱۷۹۲). لطفعلی‌خان در ۱۷۹۴ چهار ماه کرمان را نگه داشت، سپس به بم گریخت؛ حاکم بم او را به قاجار سپرد و او را کور کردند، شکنجه دادند و در نوامبر ۱۷۹۴ در تهران کشتند.'],
     ['After Karim Khan died (1779) his kinsmen turned on each other. Zaki Khan seized Shiraz in the name of Karim Khan’s son Mohammad-Ali and was killed by his own troops. Sadeq Khan, Karim Khan’s brother, took Shiraz, but in 1781 Ali-Morad Khan took the city by treachery and both of Karim Khan’s sons and Sadeq Khan were killed. Agha Mohammad Khan Qajar, Karim Khan’s hostage for sixteen years, escaped from Shiraz on his death.', 'Lotf-Ali Khan (born 1769) recovered Shiraz in 1789. In 1791, on the road to Isfahan, his army deserted him at the instigation of the brother of Haji Ebrahim, the mayor of Shiraz, and Haji Ebrahim handed Shiraz to Agha Mohammad Khan (21 July 1792). Lotf-Ali Khan held Kerman for four months in 1794, then fled to Bam; its governor handed him to the Qajars, who blinded and tortured him and executed him in Tehran in November 1794.']],
    [['پری می‌نویسد آوازهٔ دودمان بر بنیادگذارش استوار است: کریم‌خان توانست هم ایل‌های زاگرس را در یک سپاه گرد آورد و هم اعتماد دیوانیان و بزرگان شهرها را جلب کند. جانشینانش با جنگ خانگی این دستاورد را نابود کردند و نتوانستند اعتماد شهری‌ها را، که حاجی ابراهیم نمونهٔ آن بود، نگه دارند.', 'لطفعلی‌خان تنها جانشینی است که پری می‌گوید برای دلیری و درستی‌اش ستایش شد؛ تصویر قهرمانانهٔ او در یاد مردم از همین‌جا می‌آید و بخشی از آن رنگ افسانه دارد.'],
     ['Perry writes that the dynasty’s reputation rests on its founder: Karim Khan could both weld the Zagros tribes into one army and win the trust of the bureaucrats and magnates of the cities. His successors destroyed that achievement through civil war and could not keep the confidence of the townsmen, typified by Haji Ebrahim.', 'Lotf-Ali Khan is the only successor who, Perry says, won admiration for his courage and integrity; his heroic image in popular memory starts here, and part of it is legend.']],
    [['سرنوشت استخوان‌های کریم‌خان نامعلوم است: آقامحمدخان آن‌ها را به تهران برد؛ گزارشی می‌گوید فتحعلی‌شاه آن‌ها را به نجف فرستاد و گزارشی دیگر که رضاشاه آن‌ها را در قم دفن کرد. پری می‌نویسد آرامگاه او دیگر به یقین دانسته نیست.', 'حاجی ابراهیم نخستین صدراعظم قاجار شد؛ گذار از زند به قاجار بیشتر با پیوستن بزرگان شهری به برنده رقم خورد تا با یک نبرد.'],
     ['The fate of Karim Khan’s bones is unknown: Agha Mohammad Khan moved them to Tehran; one report says Fath-Ali Shah sent them to Najaf, another that Reza Shah had them buried in Qom. Perry writes that his resting place is no longer known for certain.', 'Haji Ebrahim became the first Qajar grand vizier; the passage from Zand to Qajar was decided more by city magnates joining the winner than by a single battle.']],
    ['iranica-zand-dynasty', 'iranica-karim-khan']),
]

export const karimKhan: FeaturedKing = {
  slug: 'karim-khan',
  name: B('کریم‌خان زند', 'Karim Khan Zand'),
  dynastyName: B('زندیان', 'The Zands'),
  reign: B('۱۷۵۱–۱۷۷۹ م', '1751–1779 CE'),
  title: B('کریم‌خان زند؛ وکیل‌الرعایا', 'Karim Khan Zand: deputy of the subjects'),
  lede: B(
    'سرکردهٔ ایلی لک که نادر او را به خراسان تبعید کرده بود، پس از مرگ نادر ایران جز خراسان را از شیراز اداره کرد. هرگز شاه نشد و خود را «وکیل‌الرعایا» خواند، شیراز را از نو ساخت و پس از مرگش خاندانش در جنگ خانگی کشور را به قاجار باختند.',
    'A Lak tribal chief whom Nader had deported to Khorasan, after Nader’s death he ruled Iran, except Khorasan, from Shiraz. He never became shah and called himself “deputy of the subjects”, rebuilt Shiraz, and after his death his family lost the country to the Qajars in civil war.',
  ),
  stats: [
    { n: B('۲۸ سال', '28 years'), l: B('فرمانروایی (۱۷۵۱–۱۷۷۹)', 'rule (1751–1779)') },
    { n: B('۰', '0'), l: B('بار لقب شاه', 'times he took the title shah') },
    { n: B('۴۰–۵۰ هزار', '40–50,000'), l: B('جمعیت تقریبی شیراز («شاید»)', 'Shiraz’s rough population (“perhaps”)') },
    { n: B('۱۷۹۴', '1794'), l: B('کشته شدن لطفعلی‌خان (م)', 'Lotf-Ali Khan executed (CE)') },
  ],
  mapTitle: B('نقشهٔ متحرک: زندگی و لشکرکشی‌ها', 'Animated map: life and campaigns'),
  events: karimEvents,
  span: [1705, 1779],
  lifeMap: { view: [42, 27, 62, 40], places: [
    { name: B('ملایر', 'Malayer'), c: P.MALAYER, left: true }, { name: B('مشهد', 'Mashhad'), c: P.MASHHAD }, { name: B('اصفهان', 'Isfahan'), c: P.ISFAHAN },
    { name: B('شیراز', 'Shiraz'), c: P.SHIRAZ, dy: 0.7 }, { name: B('استرآباد', 'Astarabad'), c: P.ASTARABAD }, { name: B('تبریز', 'Tabriz'), c: P.TABRIZ, left: true },
    { name: B('بصره', 'Basra'), c: P.BASRA, left: true },
  ] },
  campaign: {
    id: 'campaigns',
    title: B('لشکرکشی‌های کریم‌خان (۱۷۵۰–۱۷۷۶ م)', 'Karim Khan’s campaigns (1750–1776 CE)'),
    intro: { fa: ['از اصفهان و سرزمین بختیاری تا استرآباد، شیراز، تهران، تبریز و ارومیه، و سرانجام بصره. تاریخ‌ها از ایرانیکا (پری) است؛ راه‌ها طرح‌وارند.'], en: ['From Isfahan and Bakhtiari country to Astarabad, Shiraz, Tehran, Tabriz and Urmia, and finally Basra. Dates follow Iranica (Perry); the routes are sketches.'] },
    events: campaignEvents, span: [1750, 1776], view: [42, 27, 58, 40],
    places: [
      { name: B('اصفهان', 'Isfahan'), c: P.ISFAHAN, dy: -0.6 }, { name: B('بختیاری', 'Bakhtiari'), c: P.BAKHTIARI, left: true }, { name: B('استرآباد', 'Astarabad'), c: P.ASTARABAD },
      { name: B('کهگیلویه', 'Kuhgiluya'), c: P.KUHGILUYA, left: true }, { name: B('کمارج', 'Kamarej'), c: P.KAMAREJ, left: true }, { name: B('شیراز', 'Shiraz'), c: P.SHIRAZ, dy: 0.7 },
      { name: B('تهران', 'Tehran'), c: P.TEHRAN }, { name: B('تبریز', 'Tabriz'), c: P.TABRIZ }, { name: B('ارومیه', 'Urmia'), c: P.URMIA, left: true },
      { name: B('کرمانشاه', 'Kermanshah'), c: P.KERMANSHAH, left: true }, { name: B('بوشهر', 'Bushehr'), c: P.BUSHEHR, left: true }, { name: B('بصره', 'Basra'), c: P.BASRA, left: true },
    ],
    clip: { gif: B('/media/karim-khan/campaigns-fa.gif', '/media/karim-khan/campaigns-en.gif'), mp4: B('/media/karim-khan/campaigns-fa.mp4', '/media/karim-khan/campaigns-en.mp4'), webm: B('/media/karim-khan/campaigns-fa.webm', '/media/karim-khan/campaigns-en.webm'), poster: B('/media/karim-khan/campaigns-fa.png', '/media/karim-khan/campaigns-en.png'), width: 958, height: 356 },
  },
  shareImage: '/media/karim-khan/campaigns-en.png',
  dossier: karimDossier,
  synthesis: { title: B('جمع‌بندی: آرامشی میان دو توفان', 'Synthesis: a calm between two storms'), paras: {
    fa: [
      'کریم‌خان پس از نادر، که با شمشیر و غنیمت فرمان راند، کشوری خسته را با سازش، خویشان و اعتماد شهری‌ها اداره کرد. او شاه نشد، شیراز را ساخت و با غله و بازرگانی به آرامش رعیت اندیشید.',
      'اما دولت او به شخص خودش بسته بود. فرماندهی را به خویشان داد و پس از مرگش همین خویشان یکدیگر را کشتند؛ بزرگان شهرها به قاجار پیوستند و دودمان زند در پانزده سال از میان رفت.',
    ],
    en: [
      'After Nader, who ruled by sword and booty, Karim Khan governed a worn-out country through compromise, kinsmen and the trust of the towns. He did not become shah, built Shiraz, and thought about his subjects’ peace through grain and trade.',
      'But his state was tied to his person. He gave command to his kinsmen, and after his death those kinsmen killed each other; the city magnates went over to the Qajars and the Zand dynasty was gone within fifteen years.',
    ],
  }, sources: KZ },
  sources: zdSources,
  photos: zdPhotos,
  related: [
    { href: { fa: '/dynasty/zands', en: '/dynasty/zands' }, label: B('دودمان زند', 'The Zand dynasty') },
    { href: { fa: '/king/nader', en: '/en/king/nader' }, label: B('نادرشاه افشار', 'Nader Shah Afshar') },
    { href: { fa: '/dynasty/qajars', en: '/dynasty/qajars' }, label: B('دودمان قاجار', 'The Qajar dynasty') },
  ],
  wikipedia: 'https://en.wikipedia.org/wiki/Karim_Khan_Zand',
}
