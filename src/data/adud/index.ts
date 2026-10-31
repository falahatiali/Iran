/**
 * ʿAżod-al-Dawla Fanā Ḵosrow, Buyid ruler 949–983 CE.
 * Spine: J. C. Bürgel and R. Mottahedeh, "ʿAżod-al-Dawla" (Encyclopaedia Iranica), and T. Nagel, "Buyids" (Encyclopaedia Iranica).
 */
import type { Coord, DossierSection, FeaturedKing, FeaturedSource } from '../featured/types'
import type { CommonsPhoto } from '../places/types'
import { ev, note, sec } from '../late-achaemenid/common'

const B = (fa: string, en: string) => ({ fa, en })
const SHIRAZ: Coord = [52.53, 29.61]
const ISFAHAN: Coord = [51.67, 32.65]
const KERMAN: Coord = [57.08, 30.28]
const HORMOZ: Coord = [57.08, 27.1]
const SOHAR: Coord = [56.71, 24.35]
const WASIT: Coord = [46.3, 32.19]
const AHVAZ: Coord = [48.67, 31.32]
const BAGHDAD: Coord = [44.36, 33.31]
const SAMARRA: Coord = [43.88, 34.2]
const MOSUL: Coord = [43.13, 36.34]
const HAMADAN: Coord = [48.51, 34.8]

export const adudSources: FeaturedSource[] = [
  { id: 'iranica-azod', author: 'J. C. Bürgel and R. Mottahedeh, Encyclopaedia Iranica', title: 'ʿAżod-al-Dawla', year: '1987, updated 2011', url: 'https://www.iranicaonline.org/articles/azod-al-dawla/', note: { fa: 'ستون اصلی این صفحه؛ تاریخ‌ها، جاها و رقم‌ها از این مقاله است.', en: 'The spine of this page; the dates, places and figures come from this article.' } },
  { id: 'iranica-buyids', author: 'T. Nagel, Encyclopaedia Iranica', title: 'Buyids', year: '1990, updated 2011', url: 'https://www.iranicaonline.org/articles/buyids/', note: { fa: 'دربارهٔ خاستگاه خاندان، نسب ساسانی و فروپاشی پس از عضدالدوله.', en: 'On the family’s origins, the Sasanian pedigree and the break-up after ‘Adud al-Dawla.' } },
  { id: 'moqaddasi', author: 'al-Moqaddasī', title: 'Aḥsan al-taqāsīm', year: 'c. 985', note: { fa: 'جغرافی‌دان هم‌روزگار؛ منبع وصف بند، کاخ، کتابخانه و بیمارستان شیراز.', en: 'A contemporary geographer; the source for the dam, palace, library and hospital of Shiraz.' } },
  { id: 'biruni', author: 'al-Bīrūnī', title: 'The Chronology of Ancient Nations', year: 'c. 1000', note: { fa: 'دربارهٔ جشن‌های کرد فناخسرو و تردید در نسب ساسانی بوییان.', en: 'On the festivals of Kard-e Fanna Khosrow and doubts about the Buyids’ Sasanian pedigree.' } },
]
export const adudSourceIds = new Set(adudSources.map((s) => s.id))

const f = (name: string) => `https://commons.wikimedia.org/wiki/File:${name}`
/** Licence and author read from the Commons API on 2026-10-31. */
export const adudPhotos: CommonsPhoto[] = [
  { id: 'band-amir', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Band_Amir_by_Eug%C3%A8ne_Flandin.jpg/960px-Band_Amir_by_Eug%C3%A8ne_Flandin.jpg', page: f('Band_Amir_by_Eugène_Flandin.jpg'), author: 'Eugène Flandin', license: 'Public domain', licenseUrl: 'https://commons.wikimedia.org/wiki/Commons:Public_domain', caption: B('بند امیر روی رود کر، طرحی از اوژن فلاندن (دههٔ ۱۸۴۰)', 'Band-e Amir on the Kor river, drawn by Eugène Flandin (1840s)') },
  { id: 'inscription', src: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Inscription_of_Adud_al-Dawla_in_Persepolis.jpg', page: f('Inscription_of_Adud_al-Dawla_in_Persepolis.jpg'), author: 'medieval-islamic-history.com', license: 'CC0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', caption: B('کتیبهٔ عضدالدوله در تخت جمشید', 'The inscription of ‘Adud al-Dawla at Persepolis') },
]

const sketch = note('منابع راه‌ها را نمی‌گویند؛ خط‌ها طرح‌وارند.', 'The sources give no routes; the lines are sketches.')
export const adudEvents = [
  ev('birth', 936, B('۲۴ سپتامبر ۹۳۶ م', '24 September 936 CE'), 'admin', ISFAHAN, B('زادن در اصفهان', 'Born in Isfahan'), B('فناخسرو، پسر رکن‌الدوله حسن، در اصفهان زاده شد.', 'Fanna Khosrow, son of Rukn al-Dawla Hasan, was born in Isfahan.'), 'secure', ['iranica-azod']),
  ev('shiraz', 949, B('۹۴۹ م', '949 CE'), 'admin', SHIRAZ, B('فرمانروای فارس', 'Ruler of Fars'), B('عمویش عمادالدوله، که پسری نداشت، او را در شیراز جانشین خود کرد و در نوامبر همان سال درگذشت.', 'His childless uncle ‘Imad al-Dawla installed him as heir in Shiraz and died that November.'), 'secure', ['iranica-azod', 'iranica-buyids'], { route: [ISFAHAN, SHIRAZ] }),
  ev('title', 962, B('۹۶۲ م', '962 CE'), 'admin', SHIRAZ, B('لقب عضدالدوله', 'The title ‘Adud al-Dawla'), B('خلیفه المطیع لقب «عضدالدوله» (بازوی دولت) را به او داد.', 'The caliph al-Muti‘ gave him the title ‘Adud al-Dawla, “Arm of the State”.'), 'secure', ['iranica-azod']),
  ev('kerman', 967, B('۹۶۷–۹۶۸ م', '967–968 CE'), 'campaign', KERMAN, B('گرفتن کرمان', 'Kerman taken'), B('کرمان را گرفت؛ سپس در دسامبر ۹۷۰ کوچ و بلوچ را شکست داد و تا هرمز رفت.', 'He took Kerman; then in December 970 he defeated the Kuch and Baluch and marched to Hormoz.'), 'secure', ['iranica-azod'], { route: [SHIRAZ, KERMAN, HORMOZ], ...sketch }),
  ev('oman', 973, B('۹۷۳ م', '973 CE'), 'campaign', SOHAR, B('صحار در عمان', 'Sohar in Oman'), B('سپاهش صحار را در عمان گرفت.', 'His forces took Sohar in Oman.'), 'secure', ['iranica-azod'], { route: [HORMOZ, SOHAR], ...sketch }),
  ev('baghdad-1', 975, B('ژانویه–مارس ۹۷۵ م', 'January–March 975 CE'), 'campaign', BAGHDAD, B('نخستین بار در بغداد', 'First time in Baghdad'), B('به یاری پسرعمویش بختیار آمد، شورشیان را در ژانویهٔ ۹۷۵ شکست داد، اما در مارس بختیار را واداشت کناره بگیرد. پدرش رکن‌الدوله خشمگین شد و او را واداشت بغداد را به بختیار پس دهد.', 'He came to help his cousin Bakhtiyar, defeated the rebels in January 975, then in March forced Bakhtiyar to abdicate. His father Rukn al-Dawla, angered, made him hand Baghdad back.'), 'secure', ['iranica-azod'], { route: [SHIRAZ, AHVAZ, WASIT, BAGHDAD], ...sketch }),
  ev('heir', 976, B('۹۷۶ م', '976 CE'), 'admin', ISFAHAN, B('جانشین رکن‌الدوله', 'Heir of Rukn al-Dawla'), B('در دیدار اصفهان، رکن‌الدوله او را جانشین خود کرد و در سپتامبر ۹۷۶ درگذشت.', 'At a meeting in Isfahan Rukn al-Dawla named him heir; Rukn died in September 976.'), 'secure', ['iranica-azod']),
  ev('ahvaz', 977, B('۱ ژوئیهٔ ۹۷۷ م', '1 July 977 CE'), 'battle', AHVAZ, B('نبرد اهواز', 'Battle near Ahvaz'), B('بختیار را نزدیک اهواز شکست داد و در دسامبر وارد بغداد شد.', 'He defeated Bakhtiyar near Ahvaz and entered Baghdad in December.'), 'secure', ['iranica-azod'], { route: [SHIRAZ, AHVAZ] }),
  ev('qasr-jass', 978, B('۲۹ مه ۹۷۸ م', '29 May 978 CE'), 'battle', SAMARRA, B('قصرالجص و موصل', 'Qasr al-Jass and Mosul'), B('نزدیک سامرا بختیار را اسیر کرد و به کشتنش فرمان داد؛ سپس موصل را گرفت.', 'Near Samarra he captured Bakhtiyar and had him executed; then he took Mosul.'), 'secure', ['iranica-azod', 'iranica-buyids'], { route: [BAGHDAD, SAMARRA, MOSUL] }),
  ev('hamadan', 980, B('۹۸۰ م', '980 CE'), 'campaign', HAMADAN, B('همدان و یکپارچگی', 'Hamadan and unity'), B('برادرش فخرالدوله گریخت و او همدان و ری را گرفت. به گفتهٔ ناگل، برای نخستین بار همهٔ قلمرو بویهی زیر فرمان یک تن بود.', 'His brother Fakhr al-Dawla fled and he took Hamadan and Ray. Nagel says that for the first time the whole Buyid realm was under one ruler.'), 'secure', ['iranica-azod', 'iranica-buyids'], { route: [MOSUL, HAMADAN], ...sketch }),
  ev('death', 983, B('۲۶ مارس ۹۸۳ م', '26 March 983 CE'), 'admin', BAGHDAD, B('مرگ', 'Death'), B('در چهل‌وهفت‌سالگی درگذشت، بی‌آنکه جانشینی تعیین کند. خواسته بود در نجف به خاک سپرده شود.', 'He died at forty-seven without naming a successor. He had asked to be buried at Najaf.'), 'probable', ['iranica-azod', 'iranica-buyids'], note('جای مرگ در این دو مقاله نیامده؛ نقطه روی بغداد طرح‌وار است.', 'Neither article gives the place of death; the marker on Baghdad is a sketch.')),
]

const campaignEvents = [
  ev('c-shiraz', 949, B('۹۴۹ م', '949 CE'), 'admin', SHIRAZ, B('شیراز', 'Shiraz'), B('فرمانروای فارس در سیزده‌سالگی.', 'Ruler of Fars at thirteen.'), 'secure', ['iranica-azod']),
  ev('c-kerman', 967, B('۹۶۷ م', '967 CE'), 'campaign', KERMAN, B('کرمان', 'Kerman'), B('گرفتن کرمان.', 'Kerman taken.'), 'secure', ['iranica-azod'], { route: [SHIRAZ, KERMAN], ...sketch }),
  ev('c-hormoz', 970, B('۹۷۰ م', '970 CE'), 'battle', HORMOZ, B('هرمز', 'Hormoz'), B('شکست کوچ و بلوچ؛ تا هرمز.', 'The Kuch and Baluch defeated; on to Hormoz.'), 'secure', ['iranica-azod'], { route: [KERMAN, HORMOZ], ...sketch }),
  ev('c-sohar', 973, B('۹۷۳ م', '973 CE'), 'campaign', SOHAR, B('صحار', 'Sohar'), B('عمان گرفته می‌شود.', 'Oman is taken.'), 'secure', ['iranica-azod'], { route: [HORMOZ, SOHAR], ...sketch }),
  ev('c-ahvaz', 977, B('۹۷۷ م', '977 CE'), 'battle', AHVAZ, B('اهواز', 'Ahvaz'), B('پیروزی بر بختیار.', 'Victory over Bakhtiyar.'), 'secure', ['iranica-azod'], { route: [SHIRAZ, AHVAZ], ...sketch }),
  ev('c-baghdad', 977, B('دسامبر ۹۷۷ م', 'December 977 CE'), 'campaign', BAGHDAD, B('بغداد', 'Baghdad'), B('ورود به بغداد.', 'Entry into Baghdad.'), 'secure', ['iranica-azod'], { route: [AHVAZ, WASIT, BAGHDAD], ...sketch }),
  ev('c-mosul', 978, B('۹۷۸ م', '978 CE'), 'battle', MOSUL, B('سامرا و موصل', 'Samarra and Mosul'), B('بختیار اسیر و کشته می‌شود؛ موصل گرفته می‌شود.', 'Bakhtiyar captured and killed; Mosul taken.'), 'secure', ['iranica-azod'], { route: [BAGHDAD, SAMARRA, MOSUL] }),
  ev('c-hamadan', 980, B('۹۸۰ م', '980 CE'), 'campaign', HAMADAN, B('همدان', 'Hamadan'), B('فخرالدوله می‌گریزد؛ قلمرو یکپارچه.', 'Fakhr al-Dawla flees; the realm united.'), 'secure', ['iranica-azod', 'iranica-buyids'], { route: [MOSUL, HAMADAN], ...sketch }),
]

export const adudDossier: DossierSection[] = [
  sec('sources', 'منابع: ماهیگیرزاده‌ای با نسب ساسانی', 'Sources: a fisherman’s grandson with a Sasanian pedigree',
    [['ناگل می‌گوید پدر بزرگ خاندان، بویه، ماهیگیری فروتن از دیلم بود. عضدالدوله نسبی ساخت که خاندان را به بهرام گور ساسانی می‌رساند؛ بیرونی همان زمان در آن تردید کرد. عضدالدوله همچنین ادعا کرد پدرش امیرالامرا بوده است، که به گفتهٔ ناگل درست نیست.'], ['Nagel says the family’s ancestor Buya was a humble fisherman of Daylam. ‘Adud al-Dawla had a genealogy made linking the family to the Sasanian Bahram Gur; Biruni doubted it at the time. ‘Adud also claimed his father had been amir al-umara, which Nagel says was untrue.']],
    [['نسب ساسانی افسانه است: ناگل آن را «تقریباً بی‌گمان ساختگی» می‌داند. آن را ابزار مشروعیت می‌خوانیم، نه واقعیت تاریخی.'], ['The Sasanian pedigree is a legend: Nagel calls it “almost certainly a forgery”. We read it as a tool of legitimacy, not historical fact.']],
    [['فرمانروایانی که از پایین برمی‌آیند، اغلب گذشته‌ای شاهانه برای خود می‌سازند. این کار نشان می‌دهد مردم آن زمان هنوز به مشروعیت ایرانی کهن ارج می‌نهادند.'], ['Rulers who rise from below often invent a royal past. That this worked shows how much the old Iranian legitimacy still counted.']],
    ['iranica-buyids', 'iranica-azod', 'biruni'], { photos: ['inscription'] }),
  sec('shahanshah', 'شاهنشاه و خلیفه', 'Shahanshah and caliph',
    [['بورگل و مطهده می‌گویند عضدالدوله «احتمالاً» نخستین فرمانروای مسلمان بود که لقب شاهنشاه گرفت. در تخت جمشید کتیبه‌ای گذاشت، جشن‌های سده و مهرگان را برپا می‌کرد، و دخترش را به زور به همسری خلیفه درآورد. هم‌زمان حرم امام حسین در کربلا را بازسازی کرد و بر گور امام علی در نجف بنا ساخت.'], ['Bürgel and Mottahedeh say ‘Adud al-Dawla was “probably” the first Muslim ruler to take the title Shahanshah. He left an inscription at Persepolis, celebrated Sada and Mehregan, and forced the caliph to marry his daughter. He also repaired the shrine of Hosayn at Karbala and built the shrine over ‘Ali’s grave at Najaf.']],
    [['او دو چیز را با هم می‌خواست: شکوه شاهان ایران و نگه‌داشتن خلافت. ناگل می‌گوید این آشتی بر نهادهای تازه نبود، تنها بر شخصیت نیرومند او بود، و با مرگش فروریخت.'], ['He wanted two things at once: the splendour of Iranian kings and the survival of the caliphate. Nagel says this balance rested not on new institutions but only on his forceful personality, and it fell apart when he died.']],
    [['دولتی که بر یک تن تکیه دارد، با او می‌میرد؛ نهادها، نه قهرمانان، ماندگاری می‌آورند.'], ['A state resting on one man dies with him; institutions, not heroes, make things last.']],
    ['iranica-azod', 'iranica-buyids']),
  sec('property', 'دارایی: بند، بازار و مالیات', 'Property: dam, bazaar and tax',
    [['عضدالدوله روی رود کر نزدیک شیراز بند عضدی (بند امیر امروز) را ساخت که زمین بزرگی را زیر کشت برد و هنوز کار می‌کند. در فارس کاروانسرا، آب‌انبار و سد ساخت، در رامهرمز بازار، و در بغداد بیمارستانی که تا حملهٔ مغول برپا بود. به گفتهٔ ابن جوزی، درآمد مالیاتی فارس در زمان او سه برابر آغاز سدهٔ دهم شد. او مواجب سپاه را به‌موقع می‌پرداخت، اما نظام اقطاع را برنگرداند.'], ['Near Shiraz, on the Kor river, ‘Adud al-Dawla built the Band-e ‘Adudi (today’s Band-e Amir), which brought a large area into cultivation and is still in use. In Fars he built caravanserais, cisterns and dams, at Ramhormoz bazaars, and in Baghdad a hospital that lasted until the Mongol invasion. Ibn al-Jawzi says the tax income of Fars under him was triple what it had been at the start of the tenth century. He paid the army promptly but did not reverse the iqta‘ system.']],
    [['این خوانش ماست: بند و بازار دارایی تولیدی ساختند، زمین بایر را آباد کردند و شیراز را شهری بزرگ کردند. اما سه برابر شدن مالیات یعنی دولت سهم بزرگ‌تری از این ثروت را برمی‌داشت؛ و اقطاع، یعنی دادن درآمد زمین به سپاهیان، مالکیت کشاورز را ناامن نگه می‌داشت.'], ['This is our reading: the dam and bazaars created productive property, brought waste land into use and made Shiraz a major city. But tripled tax means the state took a larger share of that wealth; and the iqta‘, granting land revenue to soldiers, kept the farmer’s ownership insecure.']],
    [['زیرساختی که دارایی را بارور می‌کند، ارزشمند است؛ پرسش این است که بهرهٔ آن به دست سازنده می‌رسد یا به خزانه.'], ['Infrastructure that makes property productive is valuable; the question is whether the return reaches those who produce or the treasury.']],
    ['iranica-azod', 'moqaddasi'], { photos: ['band-amir'] }),
]

export const adud: FeaturedKing = {
  slug: 'adud-al-dawla',
  name: B('عضدالدوله دیلمی', '‘Adud al-Dawla'),
  dynastyName: B('آل‌بویه', 'The Buyids'),
  reign: B('۹۴۹–۹۸۳ م', '949–983 CE'),
  title: B('عضدالدوله؛ شاهنشاهی که بغداد را گرفت و بند امیر را ساخت', '‘Adud al-Dawla: the Shahanshah who took Baghdad and built Band-e Amir'),
  lede: B(
    'نوهٔ ماهیگیری دیلمی که در سیزده‌سالگی فرمانروای فارس شد، کرمان و عمان را گرفت، در ۹۷۸ پسرعمویش را کشت و تا ۹۸۰ همهٔ قلمرو بویهی را یکپارچه کرد. نسب ساسانی او را با برچسب افسانه آورده‌ایم. لشکرکشی‌هایش را روی نقشهٔ متحرک دنبال کنید.',
    'The grandson of a Daylamite fisherman who became ruler of Fars at thirteen, took Kerman and Oman, killed his cousin in 978 and by 980 united the whole Buyid realm. His Sasanian pedigree is labelled a legend. Follow his campaigns on the animated map.',
  ),
  stats: [
    { n: B('۳۴ سال', '34 years'), l: B('فرمانروایی', 'in power') },
    { n: B('۹۸۰', '980'), l: B('یکپارچگی قلمرو (م)', 'realm united (CE)') },
    { n: B('۳ برابر', '3×'), l: B('مالیات فارس (ابن جوزی)', 'tax of Fars (Ibn al-Jawzi)') },
    { n: B('۱۵۰٬۰۰۰', '150,000'), l: B('دینار سالانه که بوییان در صلح ۳۶۱ ق به سامانیان می‌پرداختند', 'dinars a year the Buyids paid the Samanids under the peace of 361 AH (971–972 CE)') },
  ],
  mapTitle: B('نقشهٔ متحرک: زندگی و لشکرکشی‌ها', 'Animated map: life and campaigns'),
  events: adudEvents,
  span: [936, 983],
  campaign: {
    id: 'campaigns',
    title: B('لشکرکشی‌ها: از شیراز تا موصل (۹۴۹–۹۸۰ م)', 'The campaigns: from Shiraz to Mosul (949–980 CE)'),
    intro: { fa: ['از شیراز به کرمان، هرمز و عمان، سپس اهواز، بغداد، سامرا و موصل، و سرانجام همدان. رویدادها از ایرانیکاست؛ راه‌ها طرح‌وارند.'], en: ['From Shiraz to Kerman, Hormoz and Oman, then Ahvaz, Baghdad, Samarra and Mosul, and finally Hamadan. The events are from Iranica; the routes are sketches.'] },
    events: campaignEvents, span: [949, 980], view: [39.5, 22.5, 61.5, 40],
    places: [
      { name: B('شیراز', 'Shiraz'), c: SHIRAZ }, { name: B('اصفهان', 'Isfahan'), c: ISFAHAN },
      { name: B('کرمان', 'Kerman'), c: KERMAN }, { name: B('بغداد', 'Baghdad'), c: BAGHDAD },
      { name: B('موصل', 'Mosul'), c: MOSUL, dy: 0.8 }, { name: B('همدان', 'Hamadan'), c: HAMADAN },
    ],
    clip: { gif: B('/media/adud-al-dawla/campaigns-fa.gif', '/media/adud-al-dawla/campaigns-en.gif'), mp4: B('/media/adud-al-dawla/campaigns-fa.mp4', '/media/adud-al-dawla/campaigns-en.mp4'), webm: B('/media/adud-al-dawla/campaigns-fa.webm', '/media/adud-al-dawla/campaigns-en.webm'), poster: B('/media/adud-al-dawla/campaigns-fa.png', '/media/adud-al-dawla/campaigns-en.png'), width: 958, height: 356 },
  },
  shareImage: '/media/adud-al-dawla/campaigns-en.png',
  dossier: adudDossier,
  synthesis: { title: B('جمع‌بندی: اوج و شکنندگی', 'Synthesis: peak and fragility'), paras: {
    fa: [
      'عضدالدوله آل‌بویه را به اوج رساند: از عمان تا موصل، با بغداد و خلیفه زیر فرمان. شیراز به گفتهٔ ایرانیکا در زمان او اهمیتی اقتصادی و فرهنگی یافت که در سده‌های بعد ماند.',
      'اما کشتن پسرعمویش نظام خانوادگی بوییان را درهم شکست و جانشینی تعیین نکرد؛ پس از مرگش پسرانش به جان هم افتادند. از دید دارایی، بند امیر هنوز آب می‌دهد؛ مالیات سه‌برابر و اقطاع، بهای آن آبادانی بود.',
    ],
    en: [
      '‘Adud al-Dawla brought the Buyids to their peak: from Oman to Mosul, with Baghdad and the caliph under his control. Iranica says Shiraz gained under him an economic and cultural importance it kept for centuries.',
      'But executing his cousin broke the Buyid family system, and he named no successor; after his death his sons fought each other. Through the lens of property, Band-e Amir still waters fields; tripled tax and the iqta‘ were the price of that prosperity.',
    ],
  }, sources: ['iranica-azod', 'iranica-buyids'] },
  sources: adudSources,
  photos: adudPhotos,
  related: [
    { href: { fa: '/dynasty/buyids', en: '/dynasty/buyids' }, label: B('دودمان آل‌بویه', 'The Buyid dynasty') },
    { href: { fa: '/king/ismail-samani', en: '/en/king/ismail-samani' }, label: B('اسماعیل سامانی', 'Esma‘il Samani') },
  ],
  wikipedia: 'https://en.wikipedia.org/wiki/%27Adud_al-Dawla',
}
