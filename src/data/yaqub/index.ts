/**
 * Ya'qub b. Layth al-Saffar, amir of Sistan 861–879 CE.
 * Spine: C. E. Bosworth, "Ya'qub b. Layth b. Mo'addal" and "Saffarids" (Encyclopaedia Iranica).
 * The Tarikh-e Sistan is the local, admiring source; the Arabic chronicles (Tabari) are hostile. Both are labelled.
 */
import type { Coord, DossierQuote, DossierSection, FeaturedKing, FeaturedSource } from '../featured/types'
import type { CommonsPhoto } from '../places/types'
import { ev, note, sec } from '../late-achaemenid/common'

const B = (fa: string, en: string) => ({ fa, en })
const ZARANG: Coord = [61.75, 31.05]
const BOST: Coord = [64.36, 31.55]
const ZAMINDAVAR: Coord = [64.4, 32.4]
const JOVEYN: Coord = [61.6, 31.9]
const HERAT: Coord = [62.2, 34.35]
const KABUL: Coord = [69.17, 34.53]
const NISHAPUR: Coord = [58.8, 36.21]
const KERMAN: Coord = [57.08, 30.28]
const SHIRAZ: Coord = [52.53, 29.61]
const AHVAZ: Coord = [48.67, 31.32]
const WASIT: Coord = [46.3, 32.19]
const DAYR: Coord = [44.6, 33.0]
const BAGHDAD: Coord = [44.36, 33.31]
const JONDISHAPUR: Coord = [48.52, 32.28]

export const yaqubSources: FeaturedSource[] = [
  { id: 'bosworth-ir', author: 'C. E. Bosworth, Encyclopaedia Iranica', title: 'Yaʿqub b. Layṯ b. Moʿaddal', year: '2002, updated 2018', url: 'https://www.iranicaonline.org/articles/yaqub-b-lay-b-moaddal/', note: { fa: 'ستون اصلی این صفحه؛ تاریخ‌ها و جای رویدادها از این مقاله است و ناهمخوانی منابع را نشان می‌دهد.', en: 'The spine of this page; the dates and places come from this article, which also flags where the sources disagree.' } },
  { id: 'saffarids-ir', author: 'C. E. Bosworth, Encyclopaedia Iranica', title: 'Saffarids', year: '2000, updated 2014', url: 'https://www.iranicaonline.org/articles/saffarids/', note: { fa: 'دربارهٔ سپاه، خزانه و فرهنگ صفاریان، و دربارهٔ اینکه منابع عربی دشمن آنان‌اند و تاریخ سیستان ستایشگر.', en: 'On the Saffarid army, treasury and culture, and on the hostile Arabic sources versus the admiring Tarikh-e Sistan.' } },
  { id: 'tarikh-sistan', author: 'Anonymous, ed. M.-T. Bahār (1935); Eng. tr. M. Gold (1976)', title: 'Tāriḵ-e Sistān', year: 'c. 11th century', note: { fa: 'تاریخ محلی سیستان، دو نسل پس از صفاریان؛ به گفتهٔ باسورث با غرور محلی از یعقوب و عمرو یاد می‌کند.', en: 'The local history of Sistan, written two generations after the Saffarids; Bosworth says it treats Ya‘qub and ‘Amr with local pride.' } },
  { id: 'tabari', author: 'al-Ṭabari', title: 'Taʾriḵ al-rosol wa’l-moluk, vol. III', year: 'early 10th century', note: { fa: 'تاریخ رسمی خلافت؛ به گفتهٔ باسورث، مانند بیشتر منابع عربی، صفاریان را آشوبگر می‌بیند.', en: 'The caliphate’s history; Bosworth says that, like most Arabic sources, it sees the Saffarids as a disruptive force.' } },
  { id: 'iranica-taherids', author: 'Encyclopaedia Iranica', title: 'Taherids', year: 'online', url: 'https://www.iranicaonline.org/articles/taherid-dynasty/' },
]
export const yaqubSourceIds = new Set(yaqubSources.map((s) => s.id))

const t = (path: string) => `https://upload.wikimedia.org/wikipedia/commons/thumb/${path}`
const f = (name: string) => `https://commons.wikimedia.org/wiki/File:${name}`
/** Licence and author read from the Commons API on 2026-10-31. */
export const yaqubPhotos: CommonsPhoto[] = [
  { id: 'tomb', src: t('8/86/Tomb_of_Ya%27qub_ibn_al-Layth_al-Saffar.jpg/960px-Tomb_of_Ya%27qub_ibn_al-Layth_al-Saffar.jpg'), page: f("Tomb_of_Ya'qub_ibn_al-Layth_al-Saffar.jpg"), author: 'Borna253', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0', caption: B('آرامگاهی نزدیک دزفول که به یعقوب نسبت داده می‌شود؛ بنای کنونی از روزگار او نیست.', 'A tomb near Dezful attributed to Ya‘qub; the present building is not from his time.') },
  { id: 'jondishapur', src: t('9/99/Ancient_City_of_Gandhi_Shapour_01.jpg/960px-Ancient_City_of_Gandhi_Shapour_01.jpg'), page: f('Ancient_City_of_Gandhi_Shapour_01.jpg'), author: 'Alireza.heydear', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0', caption: B('ویرانه‌های جندی‌شاپور، جایی که یعقوب در ۸۷۹ م از بیماری درگذشت', 'The ruins of Jondishapur, where Ya‘qub died of illness in 879 CE') },
]

const chron = note('باسورث می‌گوید منابع دربارهٔ ترتیب دقیق این رویدادها هم‌صدا نیستند.', 'Bosworth says the sources disagree on the exact order of these events.')
export const yaqubEvents = [
  ev('amir', 861, B('۱۰ آوریل ۸۶۱ م', '10 April 861 CE'), 'admin', ZARANG, B('امیر سیستان', 'Amir of Sistan'), B('رویگری از روستای قرنین، که در گروه‌های عیاران بالا آمده بود، درهم بن نصر را کنار زد و در زرنج امیر خوانده شد.', 'A coppersmith from the village of Qarnin who had risen in the ‘ayyār bands set Derham b. Nasr aside and was hailed as Amir in Zarang.'), 'secure', ['bosworth-ir', 'tarikh-sistan']),
  ev('zunbil', 864, B('۸۶۴–۸۶۵ م', '864–865 CE'), 'campaign', ZAMINDAVAR, B('بست و زمینداور', 'Bost and Zamindavar'), B('به جنگ سرور پیشینش صالح در بست رفت، سپس در رخج و زمینداور فرمانروای محلی، زنبیل، را کشت و غنیمت بسیار گرفت.', 'He marched on his former master Saleh at Bost, then killed the local ruler, the Zunbil, in Rukhkhaj and Zamindavar, taking immense booty.'), 'probable', ['bosworth-ir'], { route: [ZARANG, BOST, ZAMINDAVAR], ...chron }),
  ev('ammar', 865, B('۸۶۵ م', '865 CE'), 'battle', JOVEYN, B('شکست خوارج', 'The Kharijites defeated'), B('خوارج شمال سیستان را شکست داد و رهبرشان عمار بن یاسر را کشت. بسیاری از آنان را در سپاه خود به یک دستهٔ جدا پذیرفت.', 'He defeated the Kharijites of northern Sistan and killed their leader ‘Ammar b. Yaser. He took many of them into his army as a separate unit.'), 'secure', ['bosworth-ir', 'tarikh-sistan']),
  ev('herat', 867, B('۸۶۷ م (یا ۸۷۱)', '867 CE (or 871)'), 'battle', HERAT, B('گرفتن هرات', 'Herat taken'), B('هرات را از فرماندار طاهری گرفت. محمد بن طاهر ناچار سیستان، کابل، کرمان و فارس را به نام او کرد؛ نخستین بار که قدرت صفاری بیرون از سیستان رسمی شد.', 'He took Herat from its Tahirid governor. Muhammad b. Tahir had to grant him Sistan, Kabul, Kerman and Fars; the first official recognition of Saffarid power outside Sistan.'), 'disputed', ['bosworth-ir', 'tarikh-sistan'], { route: [ZARANG, HERAT], ...note('روایت «شرقی» (گردیزی) این را در ۸۷۱ می‌گذارد؛ تاریخ سیستان ۸۶۷ را تأیید می‌کند.', 'The “eastern” tradition (Gardizi) puts this in 871; the Tarikh-e Sistan supports 867.') }),
  ev('shiraz', 869, B('۸۶۹ م', '869 CE'), 'battle', SHIRAZ, B('پیروزی در شیراز', 'Victory at Shiraz'), B('علی بن حسین، فرماندار خلیفه در فارس، را در شیراز شکست داد و با غنیمت به زرنج برگشت.', 'He defeated ‘Ali b. Hosayn, the caliph’s governor of Fars, at Shiraz and returned to Zarang with rich spoils.'), 'secure', ['bosworth-ir', 'tabari'], { route: [ZARANG, KERMAN, SHIRAZ] }),
  ev('kabul', 870, B('۸۷۰ یا ۸۷۲ م', '870 or 872 CE'), 'campaign', KABUL, B('کابل و بلخ', 'Kabul and Balkh'), B('به ناحیهٔ کابل لشکر کشید و سپس به ابوداوودیان بلخ تاخت. برده و گنج‌های معبد، از جمله بت‌هایی که برای خلیفه فرستاد، غنیمت این لشکرکشی‌ها بود.', 'He led an expedition to the Kabul region, then attacked the Abu Dawudids of Balkh. Slaves and temple treasures, including idols he sent to the caliph, were the booty of these raids.'), 'disputed', ['bosworth-ir', 'tarikh-sistan'], { route: [ZARANG, BOST, KABUL], ...note('گردیزی ۸۷۰ و تاریخ سیستان ۸۷۲ می‌گوید.', 'Gardizi gives 870 and the Tarikh-e Sistan 872.') }),
  ev('nishapur', 873, B('تابستان ۸۷۳ م', 'summer 873 CE'), 'admin', NISHAPUR, B('پایان طاهریان در نیشابور', 'The end of the Tahirids at Nishapur'), B('بی‌جنگ وارد نیشابور شد و محمد بن طاهر را زندانی کرد. همهٔ منابع بر این تاریخ هم‌صدا هستند.', 'He entered Nishapur without striking a blow and imprisoned Muhammad b. Tahir. All the sources agree on this date.'), 'secure', ['bosworth-ir', 'tabari', 'iranica-taherids'], { route: [HERAT, NISHAPUR] }),
  ev('fars', 875, B('۸۷۵ م', '875 CE'), 'campaign', AHVAZ, B('فارس و اهواز', 'Fars and Ahvaz'), B('محمد بن واصل را در فارس شکست داد و فارس و اهواز را گرفت. خلیفه از پیوند او با شورشیان زنگ می‌ترسید؛ به گفتهٔ باسورث پیمان رسمی میان آنان نبود.', 'He defeated Muhammad b. Wasel in Fars and occupied Fars and Ahvaz. The caliph feared an alliance with the Zanj rebels; Bosworth says no formal pact was made.'), 'secure', ['bosworth-ir', 'saffarids-ir'], { route: [SHIRAZ, AHVAZ] }),
  ev('dayr', 876, B('۸۷۶ م', '876 CE'), 'battle', DAYR, B('شکست در دیرالعاقول', 'Defeat at Dayr al-‘Aqul'), B('واسط را گرفت و به سوی بغداد رفت، اما در دیرالعاقول، حدود ۸۰ کیلومتری جنوب‌شرق بغداد، در زمینی پر از نهرهای آبیاری، از الموفق شکست خورد.', 'He took Wasit and marched on Baghdad, but was defeated by al-Mowaffaq at Dayr al-‘Aqul, about 80 km south-east of Baghdad, in ground cut by irrigation canals.'), 'secure', ['bosworth-ir', 'tabari', 'tarikh-sistan'], { route: [AHVAZ, WASIT, DAYR] }),
  ev('death', 879, B('ژوئن ۸۷۹ م', 'June 879 CE'), 'admin', JONDISHAPUR, B('مرگ در جندی‌شاپور', 'Death at Jondishapur'), B('سه سال پس از شکست، هنوز فارس، اهواز و کرمان را در دست داشت. در جندی‌شاپور از بیماری درونی درگذشت.', 'Three years after the defeat he still held Fars, Ahvaz and Kerman. He died of an internal illness at Jondishapur.'), 'secure', ['bosworth-ir', 'tarikh-sistan'], { route: [DAYR, JONDISHAPUR] }),
]

const sketch = note('منابع راه‌ها را نمی‌گویند؛ خط‌ها طرح‌وارند.', 'The sources give no routes; the lines are sketches.')
const campaignEvents = [
  ev('c-nishapur', 873, B('۸۷۳ م', '873 CE'), 'admin', NISHAPUR, B('نیشابور', 'Nishapur'), B('از هرات به نیشابور؛ پایان طاهریان بی‌جنگ.', 'From Herat to Nishapur; the Tahirids end without a battle.'), 'secure', ['bosworth-ir'], { route: [ZARANG, HERAT, NISHAPUR] }),
  ev('c-fars', 875, B('۸۷۵ م', '875 CE'), 'campaign', SHIRAZ, B('فارس', 'Fars'), B('دومین لشکرکشی به فارس؛ محمد بن واصل می‌گریزد.', 'The second incursion into Fars; Muhammad b. Wasel flees.'), 'probable', ['bosworth-ir'], { route: [NISHAPUR, KERMAN, SHIRAZ], ...sketch }),
  ev('c-ahvaz', 875, B('۸۷۵ م', '875 CE'), 'campaign', AHVAZ, B('اهواز', 'Ahvaz'), B('اهواز با زمین‌های آبی پربارش گرفته می‌شود.', 'Ahvaz, with its rich irrigated lands, is occupied.'), 'secure', ['bosworth-ir'], { route: [SHIRAZ, AHVAZ] }),
  ev('c-wasit', 876, B('۸۷۶ م', '876 CE'), 'battle', WASIT, B('واسط', 'Wasit'), B('یعقوب پیشنهادهای خلیفه را رد می‌کند و واسط را می‌گیرد.', 'Ya‘qub rejects the caliph’s offers and takes Wasit.'), 'secure', ['bosworth-ir', 'tabari'], { route: [AHVAZ, WASIT] }),
  ev('c-dayr', 876, B('۸۷۶ م', '876 CE'), 'battle', DAYR, B('دیرالعاقول', 'Dayr al-‘Aqul'), B('شکست از الموفق؛ خطر برای بغداد برطرف می‌شود.', 'Defeat by al-Mowaffaq; the threat to Baghdad is lifted.'), 'secure', ['bosworth-ir', 'tabari'], { route: [WASIT, DAYR] }),
  ev('c-death', 879, B('۸۷۹ م', '879 CE'), 'admin', JONDISHAPUR, B('جندی‌شاپور', 'Jondishapur'), B('بازگشت به خوزستان؛ مرگ در ۸۷۹.', 'Back to Khuzestan; death in 879.'), 'secure', ['bosworth-ir'], { route: [DAYR, JONDISHAPUR], ...note('بازگشت بر پایهٔ جای مرگ اوست؛ راه طرح‌وار است.', 'The return is inferred from where he died; the route is a sketch.') }),
]

const abbasidQuote: DossierQuote = { text: 'Don’t you see what they did to Abu Salama, Abu Moslem, the Barmakid family and Fażl b. Sahl, despite everything which these men had done on the dynasty’s behalf? Let no-one ever trust them!', fa: 'نمی‌بینید با ابوسلمه، ابومسلم، برمکیان و فضل بن سهل، با همهٔ آنچه برای این دودمان کردند، چه کردند؟ هیچ‌کس هرگز به آنان اعتماد نکند!', ref: 'Tāriḵ-e Sistān pp. 267–68, Eng. tr. p. 213, as quoted by C. E. Bosworth, Encyclopaedia Iranica, “Saffarids”', source: 'tarikh-sistan' }

export const yaqubDossier: DossierSection[] = [
  sec('sources', 'منابع: یک تاریخ ستایشگر و تاریخ‌های دشمن', 'Sources: one admiring history and many hostile ones',
    [['دو گروه منبع داریم. تاریخ‌های عربی خلافت، مانند طبری، یعقوب را آشوبگر و کمی بهتر از راهزن می‌دانند. تاریخ سیستان، که حدود دو نسل پس از صفاریان نوشته شد، با غرور محلی از او یاد می‌کند. مسعودی تنها نویسندهٔ عرب‌زبانی است که به گفتهٔ باسورث با همدلی بیشتری از توان جنگی او می‌نویسد.'], ['There are two groups of sources. The Arabic histories of the caliphate, such as Tabari, see Ya‘qub as a disruptive force and little better than a brigand. The Tarikh-e Sistan, written about two generations after the Saffarids, remembers him with local pride. Mas‘udi is the one Arabic writer who, Bosworth says, judges his military skill more sympathetically.']],
    [['باسورث می‌گوید ستایشگران پسین برای یعقوب نسبی تا ساسانیان و شاهان افسانه‌ای ساختند، اما او «به‌راستی» از مردم عادی بود. این نسب‌نامه افسانه است و در این صفحه به کار نرفته است.'], ['Bosworth says later eulogists fabricated a descent for Ya‘qub back to the Sasanians and legendary kings, but his origins were “in reality firmly plebeian”. That genealogy is a legend and is not used on this page.']],
    [['هر دو گروه منبع جانبدارند. تاریخ‌ها و جای رویدادها را از جایی می‌آوریم که منابع هم‌صدا هستند، و ناهمخوانی‌ها را نشان می‌دهیم.'], ['Both groups of sources take sides. We take dates and places where the sources agree, and show where they disagree.']],
    ['saffarids-ir', 'bosworth-ir', 'tarikh-sistan', 'tabari']),
  sec('rise', 'از رویگری تا امیری', 'From coppersmith to amir',
    [[
      '۱. رویگر (صفار) زاده در روستای قرنین؛ برادرش عمرو چارپادار بود.',
      '۲. در گروه‌های عیاران سیستان بالا آمد؛ این گروه‌ها برای جنگ با خوارج پدید آمده بودند.',
      '۳. در ۱۰ آوریل ۸۶۱ در زرنج امیر خوانده شد.',
      '۴. در ۸۶۵ خوارج شمال سیستان را شکست داد و بسیاری از آنان را به سپاه خود پذیرفت.',
      '۵. هرات را گرفت؛ طاهریان او را فرماندار سیستان، کابل، کرمان و فارس شناختند.',
      '۶. در ۸۷۳ نیشابور را بی‌جنگ گرفت و طاهریان را برانداخت.',
    ], [
      '1. A coppersmith (saffār) born in the village of Qarnin; his brother ‘Amr was a mule-hirer.',
      '2. He rose in the ‘ayyār bands of Sistan, groups formed to fight the Kharijites.',
      '3. On 10 April 861 he was hailed as Amir in Zarang.',
      '4. In 865 he defeated the Kharijites of northern Sistan and took many of them into his army.',
      '5. He took Herat; the Tahirids recognised him as governor of Sistan, Kabul, Kerman and Fars.',
      '6. In 873 he took Nishapur without a battle and overthrew the Tahirids.',
    ]],
    [['باسورث می‌گوید یعقوب «تنها با شمشیر» به قدرت رسید، بی‌پشتوانهٔ خاندان یا پیوند با دربار. پذیرفتن خوارج شکست‌خورده در سپاه هم کمبود نیرو را جبران می‌کرد و هم دشمنانش را بهانه داد که او را همدل خوارج بخوانند.'], ['Bosworth says Ya‘qub came to power “solely by the sword”, with no advantages of birth or court connections. Taking defeated Kharijites into his army made up for his small manpower, and also gave his enemies a pretext to call him a Kharijite sympathiser.']],
    [['یعقوب نشان داد که در قرن نهم، توانایی جنگی می‌توانست جای تبار را بگیرد.'], ['Ya‘qub showed that in the ninth century, military ability could take the place of birth.']],
    ['bosworth-ir', 'saffarids-ir', 'tarikh-sistan']),
  sec('baghdad', 'لشکرکشی به بغداد و دیرالعاقول', 'The march on Baghdad and Dayr al-‘Aqul',
    [['در ۸۷۵ فارس و اهواز را گرفت. خلیفه فرمانداری سرزمین‌های فراوانی را به او پیشنهاد کرد، اما یعقوب نپذیرفت، واسط را گرفت و به سوی بغداد رفت. در ۸۷۶ در دیرالعاقول، در زمینی پر از نهرهای آبیاری که سپاهش نمی‌شناخت، از الموفق، برادر خلیفه، شکست خورد.'], ['In 875 he occupied Fars and Ahvaz. The caliph offered him the governorship of a vast array of lands, but Ya‘qub refused, took Wasit and marched on Baghdad. In 876 at Dayr al-‘Aqul, in ground cut by irrigation canals that his army did not know, he was defeated by al-Mowaffaq, the caliph’s brother.']],
    [['شکست پایان کار او نبود: تا مرگش در ۸۷۹، فارس، اهواز و کرمان را نگه داشت و جنوب و شرق ایران از دست خلافت بیرون ماند. خلیفه از پیوند او با شورشیان زنگ در جنوب عراق می‌ترسید؛ باسورث می‌گوید پیمان رسمی نبود، اما همکاری محلی بود.'], ['The defeat did not end his career: until his death in 879 he held Fars, Ahvaz and Kerman, and southern and eastern Iran stayed outside caliphal control. The caliph feared a link with the Zanj rebels of southern Iraq; Bosworth says there was no formal pact, but there was local cooperation.']],
    [['از نیشابور تا نزدیکی بغداد در سه سال: یعقوب نشان داد که خلافت دیگر نمی‌تواند همهٔ سرزمین‌هایش را نگه دارد.'], ['From Nishapur to near Baghdad in three years: Ya‘qub showed that the caliphate could no longer hold all its lands.']],
    ['bosworth-ir', 'tabari', 'tarikh-sistan'], { photos: ['jondishapur'] }),
  sec('caliph', 'یعقوب و خلیفه', 'Ya‘qub and the caliph',
    [['به گفتهٔ تاریخ سیستان، یعقوب بارها می‌گفت عباسیان فرمانروایی خود را بر نیرنگ ساخته‌اند و با کسانی که به آنان خدمت کرده بودند بدرفتاری کردند.'], ['According to the Tarikh-e Sistan, Ya‘qub often said that the Abbasids had built their rule on treachery and had mistreated those who served them.']],
    [['باسورث او را «مدافع واقع‌گرایی سیاسی» می‌داند که این «افسانهٔ خلافتی» را نمی‌پذیرفت که هر فرمانروا قدرتش را از خلیفه دارد. او یعقوب را بلندگوی نارضایتی محلی سیستان می‌داند، اما «نه یک ملی‌گرای نخستین ایرانی». این داوری با برداشت رایج امروزی از یعقوب به‌عنوان قهرمان ملی فرق دارد.'], ['Bosworth sees him as an exponent of Realpolitik who had no time for the “caliphal fiction” that every ruler held power only by the caliph’s delegation. He calls Ya‘qub a mouthpiece of local Sistani protest, but “not a proto-Persian nationalist”. This judgment differs from the common modern image of Ya‘qub as a national hero.']],
    [['بی‌اعتمادی یعقوب به خلیفه از تجربهٔ کسانی می‌آمد که به قدرت خدمت کرده و قربانی آن شده بودند.'], ['Ya‘qub’s distrust of the caliphs came from the experience of men who had served power and been destroyed by it.']],
    ['tarikh-sistan', 'bosworth-ir', 'saffarids-ir'], { quotes: [abbasidQuote] }),
  sec('persian', 'زبان فارسی: «چیزی که من اندر نیابم»', 'The Persian language: “what I do not understand”',
    [['تاریخ سیستان (ص ۲۰۹–۲۱۰ چاپ بهار) می‌گوید پس از پیروزی بر خوارج، شاعران به رسم زمان او را به عربی ستودند. یعقوب عربی نمی‌دانست و گفت: «چیزی که من اندر نیابم چرا باید گفت؟» پس دبیرش، محمد بن وصیف، به فارسی برای او شعر گفت.'], ['The Tarikh-e Sistan (pp. 209–10 of Bahar’s edition) says that after his victory over the Kharijites, poets praised him in Arabic, as was the custom. Ya‘qub knew no Arabic and said: “Why should something be recited that I do not understand?” So his secretary, Muhammad b. Wasif, began writing verse for him in Persian.']],
    [['تاریخ سیستان محمد بن وصیف را نخستین شاعر فارسی می‌خواند. باسورث، به پیروی از لازار، این ادعا را «کمتر پذیرفتنی» می‌داند، چون شعر فارسی عروضی در آن روزگار در جاهای دیگر هم پدید آمده بود، و می‌گوید نمی‌توان صفاریان را هم‌پایهٔ سامانیان در رستاخیز ادب فارسی دانست.'], ['The Tarikh-e Sistan calls Muhammad b. Wasif the first Persian poet. Bosworth, following Lazard, finds this claim “less sustainable”, because Persian verse in quantitative metres was emerging elsewhere at the time, and says the Saffarids cannot be given a place in the Persian literary revival comparable to the Samanids’.']],
    [['جملهٔ یعقوب ساده است: شعری که شنونده نفهمد بی‌فایده است. همین سادگی آن را در یاد فارسی‌زبانان نگه داشته است.'], ['Ya‘qub’s remark is plain: a poem the listener cannot understand is useless. That plainness is why Persian speakers still remember it.']],
    ['tarikh-sistan', 'saffarids-ir']),
  sec('property', 'دارایی: غنیمت، مالیات و خزانه', 'Property: booty, tax and treasury',
    [['به گفتهٔ باسورث، یعقوب در ۸۷۰ تنها از فارس ۳۰ میلیون درهم خراج گرفت. از لشکرکشی‌های شرقی برده و گنج‌های معبد آورد. در مرگ، چهار میلیون دینار و پنجاه میلیون درهم در خزانه داشت. خودش ساده می‌زیست: گفته‌اند روی زین‌پوشی کهنه می‌خوابید و نان جو و پیاز می‌خورد.'], ['According to Bosworth, in 870 Ya‘qub collected 30 million dirhams of land tax from Fars alone. From his eastern raids he brought back slaves and temple treasures. At his death his treasury held four million dinars and fifty million dirhams. He himself lived simply: he is said to have slept on an old saddle cloth and ate barley bread and onions.']],
    [['این خوانش ماست: یعقوب خلیفه را به نیرنگ متهم می‌کرد، اما سپاهش با همان ابزار همهٔ فرمانروایان زمانه، یعنی غنیمت و خراج، نگه داشته می‌شد. باسورث می‌گوید آنچه او را به فارس و اهواز می‌کشید درآمد مالیاتی آن‌ها بود. زندگی سادهٔ شخصی او با خزانهٔ بزرگی که از دارایی دیگران پر شده بود کنار هم بود. مردمی که در لشکرکشی‌های شرقی برده شدند، خود «غنیمت» به شمار آمدند.'], ['This is our reading: Ya‘qub accused the caliphs of treachery, but his army was kept by the same means as every ruler of the age, booty and land tax. Bosworth says what drew him to Fars and Ahvaz was their tax yield. His simple personal life sat alongside a great treasury filled from other people’s property. People enslaved in the eastern raids were themselves counted as “booty”.']],
    [['جابه‌جایی قدرت از خلیفه به امیری محلی، به‌خودی‌خود دارایی مردم را امن‌تر نکرد. پرسش این است که چه کسی می‌گیرد و چه چیزی او را محدود می‌کند.'], ['A shift of power from the caliph to a local amir did not by itself make people’s property more secure. The question is who takes, and what limits him.']],
    ['bosworth-ir', 'saffarids-ir'], { photos: ['tomb'] }),
  sec('family', 'خانواده و جانشینی', 'Family and succession',
    [[
      'پدر: لیث بن معدل.',
      'برادران: عمرو، که جانشین او شد، و علی، که یعقوب او را جانشین خواسته بود.',
      'فرزند: منابعی که خوانده‌ایم از پسری برای او نام نمی‌برند.',
      'جانشین: عمرو لیث، که به گفتهٔ باسورث علی را کنار زد.',
    ], [
      'Father: Layth b. Mo‘addal.',
      'Brothers: ‘Amr, who succeeded him, and ‘Ali, whom Ya‘qub had chosen as successor.',
      'Children: the sources we read name no son.',
      'Successor: ‘Amr b. Layth, who, Bosworth says, set ‘Ali aside.',
    ]],
    [['جانشینی به خواست یعقوب انجام نشد. عمرو با زد و بند علی را کنار گذاشت و، برخلاف برادرش، خود را دست‌کم در ظاهر نمایندهٔ خلیفه خواند.'], ['The succession did not go as Ya‘qub wished. ‘Amr intrigued against ‘Ali and, unlike his brother, at least nominally presented himself as the caliph’s deputy.']],
    [['قدرتی که بر شمشیر یک مرد ساخته شده بود، پس از مرگ او بی‌درنگ بر سر جانشینی کشمکش داشت.'], ['A power built on one man’s sword was disputed the moment he died.']],
    ['saffarids-ir', 'bosworth-ir']),
]

export const yaqub: FeaturedKing = {
  slug: 'yaqub-laith',
  name: B('یعقوب لیث صفار', 'Ya‘qub b. Layth al-Saffar'),
  dynastyName: B('صفاریان', 'The Saffarids'),
  reign: B('۸۶۱–۸۷۹ م', '861–879 CE'),
  title: B('یعقوب لیث؛ رویگری که تا نزدیک بغداد رفت', 'Ya‘qub b. Layth: the coppersmith who marched on Baghdad'),
  lede: B(
    'رویگری از سیستان که در گروه‌های عیاران بالا آمد، در ۸۶۱ امیر شد، طاهریان را برانداخت و تا دیرالعاقول نزدیک بغداد پیش رفت. منابع عربی او را راهزن و تاریخ سیستان قهرمان می‌دانند؛ هر دو را با برچسب آورده‌ایم. لشکرکشی غربی او را روی نقشهٔ متحرک دنبال کنید.',
    'A coppersmith from Sistan who rose in the ‘ayyār bands, became Amir in 861, overthrew the Tahirids and reached Dayr al-‘Aqul near Baghdad. The Arabic sources call him a brigand and the Tarikh-e Sistan a hero; both are labelled. Follow his western campaign on the animated map.',
  ),
  stats: [
    { n: B('۱۸ سال', '18 years'), l: B('امیری', 'as Amir') },
    { n: B('۸۷۳', '873'), l: B('پایان طاهریان (م)', 'end of the Tahirids (CE)') },
    { n: B('۳۰ میلیون', '30 million'), l: B('درهم خراج فارس در ۸۷۰', 'dirhams of Fars tax in 870') },
    { n: B('۸۰ کیلومتر', '80 km'), l: B('از بغداد، در دیرالعاقول', 'from Baghdad, at Dayr al-‘Aqul') },
  ],
  mapTitle: B('نقشهٔ متحرک: زندگی و لشکرکشی‌ها', 'Animated map: life and campaigns'),
  events: yaqubEvents,
  span: [861, 879],
  campaign: {
    id: 'west',
    title: B('لشکرکشی غربی: از نیشابور تا دیرالعاقول (۸۷۳–۸۷۹ م)', 'The western campaign: from Nishapur to Dayr al-‘Aqul (873–879 CE)'),
    intro: { fa: ['از نیشابور به فارس و اهواز، سپس واسط و دیرالعاقول، و بازگشت به جندی‌شاپور. رویدادها از مقالهٔ باسورث است؛ راه‌ها طرح‌وارند.'], en: ['From Nishapur to Fars and Ahvaz, then Wasit and Dayr al-‘Aqul, and back to Jondishapur. The events are from Bosworth’s article; the routes are sketches.'] },
    events: campaignEvents, span: [873, 879], view: [40.6, 26.8, 64.4, 39.8],
    places: [
      { name: B('زرنج', 'Zarang'), c: ZARANG }, { name: B('نیشابور', 'Nishapur'), c: NISHAPUR },
      { name: B('شیراز', 'Shiraz'), c: SHIRAZ }, { name: B('بغداد', 'Baghdad'), c: BAGHDAD },
      { name: B('جندی‌شاپور', 'Jondishapur'), c: JONDISHAPUR },
    ],
    clip: { gif: B('/media/yaqub-laith/west-fa.gif', '/media/yaqub-laith/west-en.gif'), mp4: B('/media/yaqub-laith/west-fa.mp4', '/media/yaqub-laith/west-en.mp4'), webm: B('/media/yaqub-laith/west-fa.webm', '/media/yaqub-laith/west-en.webm'), poster: B('/media/yaqub-laith/west-fa.png', '/media/yaqub-laith/west-en.png'), width: 958, height: 356 },
  },
  shareImage: '/media/yaqub-laith/west-en.png',
  dossier: yaqubDossier,
  synthesis: { title: B('جمع‌بندی: قدرت از شمشیر، نه از خلیفه', 'Synthesis: power from the sword, not the caliph'), paras: {
    fa: [
      'یعقوب نخستین فرمانروای شرق جهان اسلام بود که بی‌تبار و بی‌فرمان خلیفه، تنها با سپاهش، سرزمینی بزرگ ساخت. باسورث او را آغازگر از هم پاشیدن یکپارچگی سیاسی خلافت می‌داند، اما نه ملی‌گرا. جملهٔ معروفش دربارهٔ شعر عربی از تاریخ سیستان است.',
      'از دید دارایی، یعقوب الگوی فرمانروای زمانه‌اش بود: خراج فارس و غنیمت شرق خزانه‌ای بزرگ ساخت. جابه‌جایی قدرت از بغداد به زرنج، دارایی مردم را امن‌تر نکرد؛ تنها گیرنده را عوض کرد.',
    ],
    en: [
      'Ya‘qub was the first ruler in the eastern Islamic world to build a large state without birth or caliphal appointment, by his army alone. Bosworth sees him as an early stage in the break-up of caliphal unity, but not as a nationalist. His famous remark about Arabic poetry comes from the Tarikh-e Sistan.',
      'Through the lens of property, Ya‘qub was the model ruler of his age: the land tax of Fars and the booty of the east built a great treasury. Moving power from Baghdad to Zarang did not make people’s property more secure; it only changed who took it.',
    ],
  }, sources: ['bosworth-ir', 'saffarids-ir', 'tarikh-sistan'] },
  sources: yaqubSources,
  photos: yaqubPhotos,
  related: [
    { href: { fa: '/dynasty/saffarids', en: '/dynasty/saffarids' }, label: B('دودمان صفاری', 'The Saffarid dynasty') },
    { href: { fa: '/dynasty/tahirids', en: '/dynasty/tahirids' }, label: B('طاهریان', 'The Tahirids') },
  ],
  wikipedia: 'https://en.wikipedia.org/wiki/Ya%27qub_ibn_al-Layth_al-Saffar',
}
