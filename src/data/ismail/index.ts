/**
 * Esma'il b. Ahmad Samani, amir of Transoxania and Khorasan 892–907 CE.
 * Spine: C. E. Bosworth, "Esmāʿīl b. Aḥmad b. Asad Sāmānī" (Encyclopaedia Iranica, 1998, updated 2013).
 */
import type { Coord, DossierSection, FeaturedKing, FeaturedSource } from '../featured/types'
import type { CommonsPhoto } from '../places/types'
import { ev, note, sec } from '../late-achaemenid/common'

const B = (fa: string, en: string) => ({ fa, en })
const BUKHARA: Coord = [64.42, 39.77]
const SAMARQAND: Coord = [66.96, 39.65]
const TARAZ: Coord = [71.37, 42.9]
const OSRUSHANA: Coord = [69.0, 39.9]
const BALKH: Coord = [66.9, 36.76]
const GORGAN: Coord = [54.97, 37.2]
const RAY: Coord = [51.43, 35.59]
const QAZVIN: Coord = [50.0, 36.27]
const NISHAPUR: Coord = [58.8, 36.21]

export const ismailSources: FeaturedSource[] = [
  { id: 'bosworth-esmail', author: 'C. E. Bosworth, Encyclopaedia Iranica', title: 'Esmāʿīl b. Aḥmad b. Asad Sāmānī', year: '1998, updated 2013', url: 'https://www.iranicaonline.org/articles/esmail-b-ahmad-b-asad-samani/', note: { fa: 'ستون اصلی این صفحه؛ تاریخ‌ها، جاها و رقم‌ها از این مقاله است.', en: 'The spine of this page; the dates, places and figures come from this article.' } },
  { id: 'bosworth-asad', author: 'C. E. Bosworth, Encyclopaedia Iranica', title: 'Asad b. Sāmānḵodā', year: '1987, updated 2017', url: 'https://www.iranicaonline.org/articles/asad-b-1/', note: { fa: 'دربارهٔ نیای خاندان و نسب‌نامه‌ای که آنان را به بهرام چوبین می‌رساند.', en: 'On the family’s ancestor and the genealogy linking them to Bahram Chobin.' } },
  { id: 'yarshater-iran', author: 'E. Yarshater, Encyclopaedia Iranica', title: 'Iran ii. Iranian History (2) Islamic period', year: '2004', url: 'https://www.iranicaonline.org/articles/iran-ii2-islamic-period-page-2/', note: { fa: 'دربارهٔ جایگاه سامانیان در رستاخیز زبان فارسی و دربارهٔ غلامان ترک.', en: 'On the Samanids’ place in the revival of Persian and on their Turkish slave soldiers.' } },
  { id: 'narshakhi', author: 'Naršaḵī, tr. R. N. Frye (1954)', title: 'The History of Bukhara', year: '943–944, abridged 1128', note: { fa: 'تاریخ محلی بخارا؛ منبع بیشتر داستان‌های پسین دربارهٔ دادگری اسماعیل.', en: 'The local history of Bukhara; the source of most later stories about Esma‘il’s justice.' } },
  { id: 'tabari', author: 'al-Ṭabari', title: 'Taʾriḵ al-rosol wa’l-moluk, vol. III', year: 'early 10th century', note: { fa: 'تاریخ خلافت، هم‌زمان با اسماعیل.', en: 'The caliphate’s history, contemporary with Esma‘il.' } },
]
export const ismailSourceIds = new Set(ismailSources.map((s) => s.id))

const t = (path: string) => `https://upload.wikimedia.org/wikipedia/commons/thumb/${path}`
const f = (name: string) => `https://commons.wikimedia.org/wiki/File:${name}`
/** Licence and author read from the Commons API on 2026-10-31. */
export const ismailPhotos: CommonsPhoto[] = [
  { id: 'mausoleum', src: t('e/e7/Samanid_Mausoleum%2C_Bukhara.jpg/960px-Samanid_Mausoleum%2C_Bukhara.jpg'), page: f('Samanid_Mausoleum,_Bukhara.jpg'), author: 'Bgag', license: 'CC0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', caption: B('آرامگاه سامانی در بخارا. آن را آرامگاه اسماعیل دانسته‌اند، اما شیلا بلر آن را از دورهٔ پسین سامانی می‌داند.', 'The Samanid mausoleum in Bukhara. It has been identified as Esma‘il’s tomb, but Sheila Blair dates it to the later Samanid period.') },
  { id: 'brickwork', src: t('d/da/Bukhara_Samanid_Mausoleum_1.jpg/960px-Bukhara_Samanid_Mausoleum_1.jpg'), page: f('Bukhara_Samanid_Mausoleum_1.jpg'), author: 'Ymblanter', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0', caption: B('آجرکاری آرامگاه سامانی، بخارا', 'The brickwork of the Samanid mausoleum, Bukhara') },
]

const sketch = note('منابع راه‌ها را نمی‌گویند؛ خط‌ها طرح‌وارند.', 'The sources give no routes; the lines are sketches.')
export const ismailEvents = [
  ev('bukhara-gov', 874, B('۸۷۴ م', '874 CE'), 'admin', BUKHARA, B('فرماندار بخارا', 'Governor of Bukhara'), B('برادرش نصر، فرماندار ماوراءالنهر در سمرقند، او را فرماندار بخارا کرد. نزدیک دو دهه در این مقام ماند.', 'His brother Nasr, governor of Transoxania at Samarqand, made him governor of Bukhara. He held the post for almost two decades.'), 'secure', ['bosworth-esmail', 'narshakhi'], { route: [SAMARQAND, BUKHARA] }),
  ev('nasr-war', 885, B('۸۸۵ و ۸۸۸ م', '885 and 888 CE'), 'battle', BUKHARA, B('جنگ با برادر', 'War with his brother'), B('اسماعیل دو بار ۵۰۰٬۰۰۰ درهم خراج سالانه را برای نصر نفرستاد و با رافع بن هرثمه هم‌پیمان شد. نصر دو بار به بخارا لشکر کشید.', 'Esma‘il twice failed to send Nasr the 500,000 dirhams of annual tribute and allied with Rafe‘ b. Harthama. Nasr twice attacked Bukhara.'), 'secure', ['bosworth-esmail'], { route: [SAMARQAND, BUKHARA] }),
  ev('amir', 892, B('اوت ۸۹۲ م', 'August 892 CE'), 'admin', BUKHARA, B('امیر ماوراءالنهر', 'Amir of Transoxania'), B('پس از مرگ نصر، فرمانروای همهٔ ماوراءالنهر شد، پایتخت را به بخارا برد و خلیفه المعتضد او را به رسمیت شناخت.', 'On Nasr’s death he became ruler of all Transoxania, moved the capital to Bukhara and was recognised by the caliph al-Mu‘tadid.'), 'secure', ['bosworth-esmail', 'tabari']),
  ev('taraz', 893, B('۸۹۳ م', '893 CE'), 'campaign', TARAZ, B('گرفتن طراز', 'Taraz taken'), B('به دشت‌های شمال لشکر کشید و طراز را گرفت؛ غنیمت بزرگی از چارپا و برده‌های ترک برد و کلیسایی نسطوری را مسجد کرد.', 'He marched north into the steppes and took Taraz, carrying off an immense booty of animals and Turkish slaves, and turned a Nestorian church into a mosque.'), 'secure', ['bosworth-esmail', 'narshakhi'], { route: [BUKHARA, SAMARQAND, TARAZ], ...sketch }),
  ev('balkh', 900, B('احتمالاً مارس ۹۰۰ م', 'probably March 900 CE'), 'battle', BALKH, B('پیروزی بر عمرو لیث', 'Victory over ‘Amr b. Layth'), B('خلیفه ماوراءالنهر را به عمرو لیث داده بود. عمرو به ولایت‌های بالای جیحون تاخت، اما نزدیک بلخ شکست خورد و اسیر شد. خلیفه اسماعیل را فرماندار خراسان، سیستان، ری، طبرستان و اصفهان کرد.', 'The caliph had granted Transoxania to ‘Amr b. Layth. ‘Amr invaded the upper Oxus provinces but was defeated and captured near Balkh. The caliph appointed Esma‘il governor of Khorasan, Sistan, Ray, Tabarestan and Isfahan.'), 'probable', ['bosworth-esmail', 'tabari'], { route: [BUKHARA, BALKH], ...note('باسورث ماه را «احتمالاً» ربیع‌الاول ۲۸۷ (مارس ۹۰۰) می‌گوید.', 'Bosworth gives the month as “probably” Rabi‘ I 287 (March 900).') }),
  ev('west', 900, B('تا ۹۰۰ م', 'by 900 CE'), 'campaign', RAY, B('تا ری و قزوین', 'As far as Ray and Qazvin'), B('محمد بن زید، امام زیدی طبرستان، در گرگان کشته شد. اسماعیل به شمال ایران تاخت و تا ری و قزوین را گرفت؛ جانشینانش نتوانستند این سرزمین‌ها را نگه دارند.', 'Mohammad b. Zayd, the Zaydi imam of Tabarestan, was killed at Gorgan. Esma‘il pushed across northern Persia and held land as far as Ray and Qazvin; his successors could not keep it.'), 'secure', ['bosworth-esmail'], { route: [NISHAPUR, GORGAN, RAY, QAZVIN] }),
  ev('turks', 904, B('۹۰۴ م', '904 CE'), 'battle', OSRUSHANA, B('بازداشتن ترکان', 'A Turkish invasion repelled'), B('هجومی ترک از دشت‌ها را پس زد.', 'He repelled a Turkish invasion from the steppes.'), 'probable', ['bosworth-esmail'], note('رویداد قطعی است، اما جای آن در منبع نیامده؛ نقطه طرح‌وار است.', 'The event is secure, but the source gives no place; the marker is a sketch.')),
  ev('death', 907, B('نوامبر ۹۰۷ م', 'November 907 CE'), 'admin', BUKHARA, B('مرگ', 'Death'), B('درگذشت و پسرش احمد جانشین او شد.', 'He died and was succeeded by his son Ahmad.'), 'secure', ['bosworth-esmail'], note('جای مرگ در مقالهٔ باسورث نیامده؛ نقطه روی پایتختش است.', 'Bosworth does not give the place of death; the marker is on his capital.')),
]

const campaignEvents = [
  ev('c-amir', 892, B('۸۹۲ م', '892 CE'), 'admin', BUKHARA, B('بخارا', 'Bukhara'), B('اسماعیل امیر می‌شود و بخارا پایتخت.', 'Esma‘il becomes amir; Bukhara becomes the capital.'), 'secure', ['bosworth-esmail']),
  ev('c-taraz', 893, B('۸۹۳ م', '893 CE'), 'campaign', TARAZ, B('طراز', 'Taraz'), B('لشکرکشی به دشت؛ غنیمت چارپا و برده.', 'A steppe campaign; booty of animals and slaves.'), 'secure', ['bosworth-esmail'], { route: [BUKHARA, SAMARQAND, TARAZ], ...sketch }),
  ev('c-balkh', 900, B('۹۰۰ م', '900 CE'), 'battle', BALKH, B('بلخ', 'Balkh'), B('عمرو لیث شکست می‌خورد و اسیر می‌شود.', '‘Amr b. Layth is defeated and captured.'), 'probable', ['bosworth-esmail'], { route: [TARAZ, SAMARQAND, BUKHARA, BALKH], ...note('ماه نبرد احتمالی است.', 'The month of the battle is probable.') }),
  ev('c-gorgan', 900, B('۹۰۰ م', '900 CE'), 'battle', GORGAN, B('گرگان', 'Gorgan'), B('امام زیدی طبرستان در گرگان کشته می‌شود.', 'The Zaydi imam of Tabarestan is killed at Gorgan.'), 'secure', ['bosworth-esmail'], { route: [BALKH, NISHAPUR, GORGAN], ...sketch }),
  ev('c-ray', 900, B('تا ۹۰۰ م', 'by 900 CE'), 'campaign', QAZVIN, B('ری و قزوین', 'Ray and Qazvin'), B('مرز غربی سامانیان، که دیری نماند.', 'The Samanid western limit, which did not last.'), 'secure', ['bosworth-esmail'], { route: [GORGAN, RAY, QAZVIN], ...sketch }),
  ev('c-death', 907, B('۹۰۷ م', '907 CE'), 'admin', BUKHARA, B('بخارا', 'Bukhara'), B('مرگ اسماعیل؛ پسرش احمد جانشین می‌شود.', 'Esma‘il dies; his son Ahmad succeeds.'), 'secure', ['bosworth-esmail'], { route: [QAZVIN, RAY, NISHAPUR, BUKHARA], ...note('بازگشت به پایتخت طرح‌وار است.', 'The return to the capital is a sketch.') }),
]

export const ismailDossier: DossierSection[] = [
  sec('sources', 'منابع: نامی نیک و نسبی ساختگی', 'Sources: a good name and a doubtful pedigree',
    [['باسورث می‌گوید اسماعیل در تاریخ‌ها و ادبیات پسین نام دادگری و دینداری و وفاداری به خلیفه گذاشت و او را «امیر ماضی» و «امیر عادل» خواندند. بیشتر داستان‌های دادگری او از تاریخ بخارای نرشخی و سیاست‌نامهٔ نظام‌الملک است که دیرتر نوشته شده‌اند.'], ['Bosworth says Esma‘il left a reputation for justice, piety and faithful service to the caliph, preserved in later historical and adab literature, where he is called Amir-e Mazi and Amir-e ‘Adel. Most stories of his justice come from Narshakhi’s History of Bukhara and Nezam al-Molk’s Siyasat-nama, written later.']],
    [['بیرونی نسب سامانیان را به بهرام چوبین، سردار ساسانی، و گردیزی تا کیومرث، نخستین انسان، می‌رساند. باسورث می‌گوید این پیوند «هرچه باشد درستی‌اش» در آن روزگار پذیرفته بود. ما آن را نسبی افسانه‌ای و نیازموده می‌دانیم. داستان‌های دادگری او را هم اندرزنامه می‌خوانیم، نه گزارش روزانه.'], ['Biruni traces the Samanids to Bahram Chobin, the Sasanian general, and Gardizi back to Gayomarth, the first man. Bosworth says this link, “whatever its truth”, was generally accepted at the time. We treat it as a legendary, unproven pedigree. We also read the stories of his justice as mirror-for-princes literature, not daily record.']],
    [['نیای واقعی خاندان، سامان‌خدا، به گفتهٔ باسورث دهقانی، یعنی زمین‌داری محلی، از روستای سامان در بلخ بود.'], ['The family’s real ancestor, Saman-khoda, was in Bosworth’s words a local landowner (dehqān) of the village of Saman near Balkh.']],
    ['bosworth-esmail', 'bosworth-asad', 'narshakhi']),
  sec('rise', 'از بخارا تا همهٔ ماوراءالنهر', 'From Bukhara to all of Transoxania',
    [[
      '۱. زاده ۸۴۹ م؛ پسر احمد بن اسد، که به‌همراه برادرانش از سوی فرماندار خلیفه بر شهرهای ماوراءالنهر گماشته شده بود.',
      '۲. از ۸۷۴ تا ۸۹۲ فرماندار بخارا از سوی برادرش نصر.',
      '۳. دو بار خراج ۵۰۰٬۰۰۰ درهمی را نفرستاد و نصر در ۸۸۵ و ۸۸۸ به بخارا تاخت.',
      '۴. در اوت ۸۹۲، پس از مرگ نصر، امیر همهٔ ماوراءالنهر شد و بخارا را پایتخت کرد.',
    ], [
      '1. Born 849 CE; son of Ahmad b. Asad, who with his brothers had been appointed to towns of Transoxania by the caliph’s governor.',
      '2. Governor of Bukhara for his brother Nasr from 874 to 892.',
      '3. He twice withheld the 500,000-dirham tribute, and Nasr attacked Bukhara in 885 and 888.',
      '4. In August 892, on Nasr’s death, he became amir of all Transoxania and made Bukhara the capital.',
    ]],
    [['جنگ دو برادر نشان می‌دهد که خراج پیوند اصلی میان فرماندار و فرمانروا بود: اسماعیل با نگه‌داشتن پول، استقلال خود را آزمود.'], ['The brothers’ war shows that tribute was the real bond between governor and ruler: by keeping the money, Esma‘il tested his independence.']],
    [['بخارا از زمان او مرکز سامانیان و به گفتهٔ یارشاطر کانون فرهنگ عربی و فارسی شد.'], ['From his time Bukhara was the Samanid centre and, Yarshater says, a centre of Arabic and Persian culture.']],
    ['bosworth-esmail', 'bosworth-asad', 'yarshater-iran']),
  sec('balkh', 'بلخ، ۹۰۰ م: پایان قدرت صفاری در خراسان', 'Balkh, 900 CE: the end of Saffarid power in Khorasan',
    [['خلیفه ری، شرق ایران و ماوراءالنهر را به عمرو لیث داده بود؛ یعنی اسماعیل باید برکنار می‌شد. عمرو به ولایت‌های بالای جیحون تاخت، اما نزدیک بلخ، احتمالاً در مارس ۹۰۰، شکست خورد و اسیر شد. خلیفه سپس اسماعیل را فرماندار خراسان، سیستان، ری، طبرستان و اصفهان کرد.'], ['The caliph had granted Ray, eastern Persia and Transoxania to ‘Amr b. Layth, which meant deposing Esma‘il. ‘Amr invaded the upper Oxus provinces but was defeated and captured near Balkh, probably in March 900. The caliph then appointed Esma‘il governor of Khorasan, Sistan, Ray, Tabarestan and Isfahan.']],
    [['باسورث می‌گوید بزرگ‌ترین آوازهٔ اسماعیل نزد هم‌روزگارانش از همین پیروزی بود، و خلیفه را از فشار صفاریان رها کرد. خلیفه یک فرمانروای شرقی را با دیگری مهار کرد.'], ['Bosworth says this victory brought Esma‘il his greatest renown among contemporaries, and relieved the caliphs of Saffarid pressure. The caliph used one eastern ruler to check another.']],
    [['به گفتهٔ باسورث، جانشینان اسماعیل تنها خراسان و ماوراءالنهر را برای همیشه نگه داشتند؛ فرمان خلیفه بر کاغذ بزرگ‌تر از توان واقعی بود.'], ['Bosworth says Esma‘il’s successors kept permanent control only of Khorasan and Transoxania; the caliph’s grant on paper was larger than real power.']],
    ['bosworth-esmail', 'tabari']),
  sec('caliph', 'وفادار در خطبه، مستقل در عمل', 'Loyal in the sermon, independent in practice',
    [['اسماعیل در خطبه و روی سکه نام خلیفه را می‌آورد. به گفتهٔ باسورث، دوری از عراق و آوازهٔ تازه به او امکان داد چون فرمانروایی مستقل رفتار کند، و «هیچ گواهی نیست» که خراج یا مالیات منظمی به بغداد فرستاده باشد.'], ['Esma‘il named the caliph in the Friday sermon and on his coins. Bosworth says his distance from Iraq and his new prestige let him act as an independent sovereign, and that “there is no evidence” he ever sent regular tribute or tax to Baghdad.']],
    [['یعقوب لیث خلیفه را آشکارا خوار می‌داشت؛ اسماعیل احترام ظاهری را نگه داشت و پول را نگه داشت. این دو راه، دو شیوهٔ رهایی از خلافت بودند.'], ['Ya‘qub b. Layth openly scorned the caliph; Esma‘il kept the outward respect and kept the money. These were two ways of breaking free of the caliphate.']],
    [['نام بردن از قدرتی دور، بی‌فرستادن پول، شکلی رایج از استقلال در آن روزگار بود.'], ['Naming a distant authority while sending it nothing was a common form of independence in that age.']],
    ['bosworth-esmail']),
  sec('persian', 'سامانیان و زبان فارسی', 'The Samanids and the Persian language',
    [['به گفتهٔ یارشاطر در ایرانیکا، در دربار سامانی و با تشویق آنان زبان فارسی دوباره زبان شعر، دانش و تاریخ شد: رودکی، شهید بلخی، دقیقی، و شاهنامهٔ فردوسی که در دورهٔ سامانی آغاز شد. ترجمهٔ فارسی تاریخ و تفسیر طبری هم کار این دوره است.'], ['Yarshater writes in Iranica that at the Samanid court and with their encouragement Persian was revived as a vehicle for poetry, scholarship and history: Rudaki, Shahid of Balkh, Daqiqi, and Ferdowsi’s Shahnama, conceived under the Samanids. The Persian versions of Tabari’s history and commentary also date from this period.']],
    [['این شکوفایی بیشتر از زمان نصر دوم و منصور یکم است، نه خود اسماعیل. منابعی که خوانده‌ایم نقش شخصی اسماعیل را در این رستاخیز نشان نمی‌دهند؛ پسرش احمد حتی، به گفتهٔ برخی منابع، زبان دیوان را از فارسی به عربی برگرداند.'], ['This flowering belongs mostly to the reigns of Nasr II and Mansur I, not to Esma‘il himself. The sources we read do not show a personal role for Esma‘il in the revival; some sources even say his son Ahmad switched the language of the chancery from Persian to Arabic.']],
    [['اسماعیل دولتی ساخت که این فرهنگ در آن بالید؛ نسبت دادن خود شکوفایی به او ادعایی است که منابع ما پشتیبانی نمی‌کنند.'], ['Esma‘il built the state in which this culture grew; crediting him with the flowering itself is a claim our sources do not support.']],
    ['yarshater-iran', 'bosworth-esmail']),
  sec('property', 'دارایی: خراج، غنیمت و برده', 'Property: tribute, booty and slaves',
    [['اسماعیل در جنگ با برادرش بر سر ۵۰۰٬۰۰۰ درهم خراج ایستاد. در ۸۹۳ از طراز غنیمت بزرگی از چارپا و برده‌های ترک آورد. یارشاطر می‌گوید سامانیان در لشکرکشی‌های آسیای میانه شمار بسیاری اسیر ترک گرفتند و در سپاه و کاخ به کار گماشتند.'], ['Esma‘il fought his brother over 500,000 dirhams of tribute. In 893 he brought back from Taraz an immense booty of animals and Turkish slaves. Yarshater says the Samanids took large numbers of Turkish captives in their Central Asian campaigns and set them to work in the army and the palace.']],
    [['این خوانش ماست: آوازهٔ دادگری اسماعیل در کنار دولتی بود که بر برده‌گیری ساخته شد. انسان‌ها خود «غنیمت» شمرده می‌شدند. و همین غلامان ترک، به گفتهٔ یارشاطر، سرانجام سرداران و سپس جانشینان سامانیان شدند؛ سبکتگین، پدر محمود غزنوی، یکی از آنان بود. دولتی که دارایی و آزادی دیگران را می‌گرفت، سرانجام خود به دست همان «دارایی» افتاد.'], ['This is our reading: Esma‘il’s reputation for justice sat beside a state built on slave-taking. People were themselves counted as “booty”. And these Turkish slaves, Yarshater says, eventually became commanders and then the Samanids’ successors; Sebüktegin, father of Mahmud of Ghazna, was one of them. A state that took other people’s property and freedom was in the end taken over by that “property”.']],
    [['دادگری برای کسانی که درون دولت‌اند و بردگی برای کسانی که بیرون آن‌اند: پرسش دارایی همیشه این است که حق چه کسی شمرده می‌شود.'], ['Justice for those inside the state and slavery for those outside it: the property question is always whose rights count.']],
    ['bosworth-esmail', 'yarshater-iran'], { photos: ['brickwork'] }),
  sec('tomb', 'آرامگاه سامانی: از اسماعیل یا پس از او؟', 'The Samanid mausoleum: Esma‘il’s or later?',
    [['آرامگاهی آجری در بخارا را آرامگاه اسماعیل دانسته‌اند (اشرودر). شیلا بلر، در کتابش دربارهٔ کتیبه‌های یادمانی آغاز دورهٔ اسلامی، آن را از دورهٔ پسین سامانی می‌داند (باسورث، ایرانیکا).'], ['A brick tomb in Bukhara has been identified as Esma‘il’s (Schroeder). Sheila Blair, in her study of early Islamic monumental inscriptions, dates it to the later Samanid period (Bosworth, Iranica).']],
    [['این تاریخ‌گذاری مورد اختلاف است. ما بنا را «آرامگاه سامانی» می‌نامیم و آن را با اطمینان به اسماعیل نسبت نمی‌دهیم.'], ['This dating is disputed. We call the building “the Samanid mausoleum” and do not attribute it to Esma‘il with confidence.']],
    [['بنایی که امروز نماد اسماعیل است، شاید از نوادگان او باشد؛ یاد تاریخی همیشه با سند یکی نیست.'], ['The building that now symbolises Esma‘il may belong to his descendants; historical memory and evidence are not always the same.']],
    ['bosworth-esmail'], { photos: ['mausoleum'] }),
]

export const ismail: FeaturedKing = {
  slug: 'ismail-samani',
  name: B('اسماعیل سامانی', 'Esma‘il Samani'),
  dynastyName: B('سامانیان', 'The Samanids'),
  reign: B('۸۹۲–۹۰۷ م', '892–907 CE'),
  title: B('اسماعیل سامانی؛ امیری که خراسان را از صفاریان گرفت', 'Esma‘il Samani: the amir who took Khorasan from the Saffarids'),
  lede: B(
    'فرماندار بخارا که در ۸۹۲ امیر همهٔ ماوراءالنهر شد، در ۹۰۰ عمرو لیث را نزدیک بلخ شکست داد و تا ری پیش رفت. در خطبه نام خلیفه را می‌آورد، اما به گفتهٔ باسورث خراجی به بغداد نفرستاد. نسب ساسانی و آرامگاه منسوب به او را با برچسب آورده‌ایم. لشکرکشی‌هایش را روی نقشهٔ متحرک دنبال کنید.',
    'The governor of Bukhara who became amir of all Transoxania in 892, defeated ‘Amr b. Layth near Balkh in 900 and pushed as far as Ray. He named the caliph in the sermon but, Bosworth says, sent no tribute to Baghdad. His Sasanian pedigree and the tomb attributed to him are labelled. Follow his campaigns on the animated map.',
  ),
  stats: [
    { n: B('۱۵ سال', '15 years'), l: B('امیری', 'as amir') },
    { n: B('۹۰۰', '900'), l: B('پیروزی بلخ (م)', 'victory at Balkh (CE)') },
    { n: B('۵۰۰٬۰۰۰', '500,000'), l: B('درهم خراجی که برای نصر نفرستاد', 'dirhams of tribute withheld from Nasr') },
    { n: B('۱۸ سال', '18 years'), l: B('فرمانداری بخارا', 'as governor of Bukhara') },
  ],
  mapTitle: B('نقشهٔ متحرک: زندگی و لشکرکشی‌ها', 'Animated map: life and campaigns'),
  events: ismailEvents,
  span: [874, 907],
  campaign: {
    id: 'campaigns',
    title: B('لشکرکشی‌ها: از طراز تا قزوین (۸۹۲–۹۰۷ م)', 'The campaigns: from Taraz to Qazvin (892–907 CE)'),
    intro: { fa: ['از بخارا به دشت‌های طراز، سپس بلخ و پیروزی بر عمرو لیث، و به سوی غرب تا گرگان، ری و قزوین. رویدادها از مقالهٔ باسورث است؛ راه‌ها طرح‌وارند.'], en: ['From Bukhara to the steppes at Taraz, then Balkh and the victory over ‘Amr b. Layth, and west to Gorgan, Ray and Qazvin. The events are from Bosworth’s article; the routes are sketches.'] },
    events: campaignEvents, span: [892, 907], view: [48.5, 33.5, 73.5, 44.5],
    places: [
      { name: B('بخارا', 'Bukhara'), c: BUKHARA }, { name: B('سمرقند', 'Samarqand'), c: SAMARQAND },
      { name: B('طراز', 'Taraz'), c: TARAZ }, { name: B('بلخ', 'Balkh'), c: BALKH },
      { name: B('نیشابور', 'Nishapur'), c: NISHAPUR }, { name: B('ری', 'Ray'), c: RAY },
    ],
    clip: { gif: B('/media/ismail-samani/campaigns-fa.gif', '/media/ismail-samani/campaigns-en.gif'), mp4: B('/media/ismail-samani/campaigns-fa.mp4', '/media/ismail-samani/campaigns-en.mp4'), webm: B('/media/ismail-samani/campaigns-fa.webm', '/media/ismail-samani/campaigns-en.webm'), poster: B('/media/ismail-samani/campaigns-fa.png', '/media/ismail-samani/campaigns-en.png'), width: 958, height: 356 },
  },
  shareImage: '/media/ismail-samani/campaigns-en.png',
  dossier: ismailDossier,
  synthesis: { title: B('جمع‌بندی: استقلال آرام', 'Synthesis: quiet independence'), paras: {
    fa: [
      'اسماعیل با شکست عمرو لیث، سامانیان را قدرت برتر شرق جهان اسلام کرد. برخلاف یعقوب، با خلیفه درنیفتاد؛ نامش را در خطبه نگه داشت و پولش را نفرستاد. باسورث او را بزرگ‌ترین سامانی می‌داند. نسب ساسانی و آرامگاه منسوب به او، هر دو، جای تردید دارند.',
      'از دید دارایی، آوازهٔ دادگری او در کنار دولتی بود که با خراج و برده‌گیری نگه داشته می‌شد؛ و همان غلامان ترک سرانجام جانشین سامانیان شدند.',
    ],
    en: [
      'By defeating ‘Amr b. Layth, Esma‘il made the Samanids the leading power of the eastern Islamic world. Unlike Ya‘qub, he did not fight the caliph; he kept his name in the sermon and kept the money. Bosworth calls him the greatest of the Samanids. His Sasanian pedigree and the tomb attributed to him are both open to doubt.',
      'Through the lens of property, his reputation for justice sat beside a state kept by tribute and slave-taking; and those Turkish slaves eventually succeeded the Samanids.',
    ],
  }, sources: ['bosworth-esmail', 'yarshater-iran'] },
  sources: ismailSources,
  photos: ismailPhotos,
  related: [
    { href: { fa: '/dynasty/samanids', en: '/dynasty/samanids' }, label: B('دودمان سامانی', 'The Samanid dynasty') },
    { href: { fa: '/king/yaqub-laith', en: '/en/king/yaqub-laith' }, label: B('یعقوب لیث صفار', 'Ya‘qub b. Layth') },
  ],
  wikipedia: 'https://en.wikipedia.org/wiki/Isma%27il_ibn_Ahmad',
}
