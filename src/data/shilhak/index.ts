/**
 * Shilhak-Inshushinak (Elam, Shutrukid dynasty), c. 1150–1120 BCE (the Louvre's dating; Basello gives
 * c. 1140–1120). Narrative after F. Vallat, "Elam i" and "Susa ii" (Iranica), G. P. Basello, "Elamite
 * Kingdom" (2016) and D. T. Potts, The Archaeology of Elam (1999), ch. 7. His Elamite texts: König 1965,
 * EKI 32–59. Verbatim quotes are the Louvre's published French translations; Persian renderings are ours.
 * Map years are schematic: no event of his reign has a firm year.
 */
import type { Coord, DossierQuote, DossierSection, FeaturedKing, FeaturedSource } from '../featured/types'
import type { CommonsPhoto } from '../places/types'
import { clipFor, ev, note, sec } from '../late-achaemenid/common'

const B = (fa: string, en: string) => ({ fa, en })
const SUSA: Coord = [48.257, 32.19]
const LIYAN: Coord = [50.84, 28.93]
const DIYALA: Coord = [44.9, 33.75]
const BABYLONIA: Coord = [44.5, 32.85]
const ARRAPHA: Coord = [44.39, 35.47]
const NUZI: Coord = [44.25, 35.37]

const IR = (slug: string) => `https://www.iranicaonline.org/articles/${slug}/`
const LV = (ark: string) => `https://collections.louvre.fr/en/ark:/53355/${ark}`
export const shilhakSources: FeaturedSource[] = [
  { id: 'vallat', author: 'F. Vallat, Encyclopaedia Iranica', title: 'Elam i. The history of Elam', year: '1998, updated 2016', url: IR('elam-i'), note: { fa: 'می‌گوید او «شمار زیادی کتیبه به ایلامی» دربارهٔ لشکرکشی‌هایش به میان‌رودان به جا گذاشت و از بیست «معبدِ بیشه» نام می‌برد.', en: 'Says he left “a large number of inscriptions in Elamite” on his campaigns against Mesopotamia, and mentions the twenty temples “of the grove”.' } },
  { id: 'vallat-susa', author: 'F. Vallat, Encyclopaedia Iranica', title: 'Susa ii. History during the Elamite period', year: '2008, updated 2018', url: IR('susa-ii-history-during-the-elamite-period'), note: { fa: 'او را پس از اونتاش‌ناپیریشا «مهم‌ترین فرمانروای این دوره» می‌داند؛ دربارهٔ کاخ، نمازخانهٔ آجری و نهونته‌اوتو.', en: 'Calls him “the most important sovereign of this period—after Untaš-Napiriša”; on the palace, the brick chapel and Nahhunte-utu.' } },
  { id: 'basello2016', author: 'G. P. Basello', title: 'Elamite Kingdom, in J. M. MacKenzie (ed.), The Encyclopedia of Empire', year: '2016', url: 'https://www.elamit.net/depot/resources/basello2016encyclopedia-of-empire.pdf', note: { fa: 'ستون بلند EKI 54 حدود ۲۵۰ جای را نام می‌برد؛ چند جای آن تا بابل مرکزی و شمالی، دیاله و اراپخا و نوزی می‌رسد.', en: 'The long stele EKI 54 names c. 250 places; some reach central and northern Babylonia, the Diyala and Arrapha and Nuzi.' } },
  { id: 'potts1999', author: 'D. T. Potts', title: 'The Archaeology of Elam: Formation and Transformation of an Ancient Iranian State, ch. 7', year: '1999', note: { fa: 'کتاب مرجع باستان‌شناسی ایلام؛ بناهای او در شوش و لشکرکشی غربی بر پایهٔ EKI 54.', en: 'The standard archaeology of Elam; his building works at Susa and the western campaign after EKI 54.' } },
  { id: 'konig1965', author: 'F. W. König', title: 'Die elamischen Königsinschriften (Archiv für Orientforschung, Beiheft 16), nos. 32–59', year: '1965', note: { fa: 'مجموعهٔ کتیبه‌های شاهان ایلام؛ کتیبه‌های او شماره‌های ۳۲ تا ۵۹ است.', en: 'The corpus of Elamite royal inscriptions; his texts are nos. 32–59.' } },
  { id: 'vallat1985', author: 'F. Vallat', title: 'Hutelutuš-Inšušinak et la famille royale élamite, Revue d’Assyriologie 79, pp. 43–50', year: '1985' },
  { id: 'harper1992', author: 'P. O. Harper, J. Aruz, F. Tallon (eds.)', title: 'The Royal City of Susa: Ancient Near Eastern Treasures in the Louvre (no. 87, pp. 137–141)', year: '1992', url: 'https://archive.org/details/RoyalCityofSusaAncientNearEasternTreasuresintheLouvre' },
  { id: 'gautier1909', author: 'J.-É. Gautier', title: 'Le “Sit Šamši” de Šilhak in Šušinak, Recueil de travaux 31, pp. 41–49', year: '1909', url: 'http://digi.ub.uni-heidelberg.de/diglit/rectrav1909/0050', note: { fa: 'نخستین انتشار ماکت مفرغی.', en: 'The first publication of the bronze model.' } },
  { id: 'louvre-sit', author: 'Musée du Louvre', title: 'Maquette d’un lieu de culte, dite le Sit-shamshi, Sb 2743 (collections record)', year: 'online', url: LV('cl010176835'), note: { fa: 'مفرغ، ۴۸ × ۳۵ سانتی‌متر؛ یافته در ارگ شوش، ۱۹۰۴–۱۹۰۵؛ کتیبهٔ نذری شاهی به ایلامی (EKI 56).', en: 'Bronze, 48 × 35 cm; found on the Susa acropolis, 1904–1905; an Elamite royal votive text (EKI 56).' } },
  { id: 'louvre-147', author: 'Musée du Louvre', title: 'Stèle de Shilhak-Inshushinak, Sb 147 (EKI 48) (collections record)', year: 'online', url: LV('cl010174567'), note: { fa: 'شاهانی را که از زمان ایدادو معبد اینشوشیناک را ساختند یا مرمت کردند برمی‌شمارد، و بیست شهری را که «معبد اینشوشیناکِ بیشه» در آن‌ها را بازسازی کرد.', en: 'Lists the kings who built or restored the Inshushinak temple since Idadu, and the twenty cities whose “temple of Inshushinak of the grove” he restored.' } },
  { id: 'louvre-1619', author: 'Musée du Louvre', title: 'Brique inscrite, Sb 1619 (collections record, French translation)', year: 'online', url: LV('cl010129981') },
  { id: 'louvre-20714', author: 'Musée du Louvre', title: 'Brique inscrite, Sb 20714 (IRS 39) (collections record, French translation)', year: 'online', url: LV('cl010130070') },
  { id: 'bm-baruli', author: 'British Museum', title: 'Pendant of Bar-Uli, 113886 (1919,0712.635) (collection record)', year: 'online', url: 'https://www.britishmuseum.org/collection/object/W_1919-0712-635', note: { fa: 'سنگ کالسدونی آبی با کتیبه و نقش شاه و دخترش؛ موزه آن را «نخستین شاهزاده‌خانم شناختنی در هنر ایران» می‌نامد.', en: 'Blue chalcedony with an inscription and a scene of the king and his daughter; the museum calls it “the first identifiable princess in Iranian art”.' } },
  { id: 'bm-liyan', author: 'British Museum', title: 'Shilhak-Inshushinak I: bricks found at Liyan (collection records, after C. B. F. Walker 1981)', year: 'online', url: 'https://www.britishmuseum.org/collection/term/BIOG140078', note: { fa: 'آجرهای نوشته‌دار بسیاری از او، یافته در لیان کنار بوشهر.', en: 'Many of his inscribed bricks, found at Liyan by Bushehr.' } },
]
export const shilhakSourceIds = new Set(shilhakSources.map((s) => s.id))

const t = (path: string) => `https://upload.wikimedia.org/wikipedia/commons/thumb/${path}`
const f = (name: string) => `https://commons.wikimedia.org/wiki/File:${name}`
const BYSA3FR = 'https://creativecommons.org/licenses/by-sa/3.0/fr/'
const BYSA4 = 'https://creativecommons.org/licenses/by-sa/4.0'
/** Licence and author read from the Commons API on 2026-10-31. */
export const shilhakPhotos: CommonsPhoto[] = [
  { id: 'sit', src: t('9/9e/Sit-Shamski_bronze_model_from_Susa_Sb_2743-P5260439-white.jpg/960px-Sit-Shamski_bronze_model_from_Susa_Sb_2743-P5260439-white.jpg'), page: f('Sit-Shamski_bronze_model_from_Susa_Sb_2743-P5260439-white.jpg'), author: 'Rama', license: 'CC BY-SA 3.0 FR', licenseUrl: BYSA3FR, caption: B('«سیت‌شمشی»: ماکت مفرغی یک جایگاه آیینی با دو مرد نشسته، آبدان و سکوهای پله‌دار. شوش، لوور، Sb 2743', 'The “Sit-shamshi”: a bronze model of a cult place with two seated men, a basin and stepped platforms. Susa; Louvre, Sb 2743') },
  { id: 'stele', src: t('e/e2/St%C3%A8le_de_Shilhak_Inshushinak_%28Louvre%2C_Sb_147%29_1.jpg/960px-St%C3%A8le_de_Shilhak_Inshushinak_%28Louvre%2C_Sb_147%29_1.jpg'), page: f('Stèle_de_Shilhak_Inshushinak_(Louvre,_Sb_147)_1.jpg'), author: 'Tangopaso', license: 'Public domain', caption: B('ستون EKI 48: فهرست شاهانِ سازندهٔ معبد اینشوشیناک و بیست شهر با «معبدِ بیشه». لوور، Sb 147', 'Stele EKI 48: the list of kings who built the Inshushinak temple and the twenty cities with a “grove temple”. Louvre, Sb 147') },
  { id: 'bull', src: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Bull-man_protecting_palmtree_Louvre_14390-91.jpg', page: f('Bull-man_protecting_palmtree_Louvre_14390-91.jpg'), author: 'Unknown (Louvre photograph)', license: 'Public domain', caption: B('نقش آجری قالبی از شوش: انسان‌گاو و درخت خرما. لوور؛ آجرها در دوران جدید کنار هم چیده شده‌اند', 'Moulded-brick panels from Susa: a bull-man and a palm tree. Louvre; the bricks were reassembled in modern times') },
  { id: 'block', src: t('f/fb/Brick_Shilhak-Inshushinak_Louvre_Sb11945.jpg/960px-Brick_Shilhak-Inshushinak_Louvre_Sb11945.jpg'), page: f('Brick_Shilhak-Inshushinak_Louvre_Sb11945.jpg'), author: 'Unknown (Louvre photograph)', license: 'Public domain', caption: B('آجر نوشته‌دار شیلهک‌اینشوشیناک به خط میخی ایلامی. لوور، Sb 11945', 'An inscribed brick of Shilhak-Inshushinak in Elamite cuneiform. Louvre, Sb 11945') },
  { id: 'liyan', src: t('f/fa/Fired_clay_brick._The_cuneiform_inscription_mentions_the_name_of_the_Elamite_king_Shilhak-Inshushinak_I._Middle_Elamite_Period%2C_1150-1120_BCE._From_Liyan%2C_Iran._British_Museum.jpg/960px-thumbnail.jpg'), page: f('Fired_clay_brick._The_cuneiform_inscription_mentions_the_name_of_the_Elamite_king_Shilhak-Inshushinak_I._Middle_Elamite_Period,_1150-1120_BCE._From_Liyan,_Iran._British_Museum.jpg'), author: 'Osama Shukir Muhammed Amin FRCP(Glasg)', license: 'CC BY-SA 4.0', licenseUrl: BYSA4, caption: B('آجر پخته با نام شیلهک‌اینشوشیناک، از لیان کنار بوشهر. موزهٔ بریتانیا', 'A fired brick naming Shilhak-Inshushinak, from Liyan by Bushehr. British Museum') },
  { id: 'baruli', src: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Stone_carving_depicting_Princess_Bar-Uli%2C_1500-1000_BCE%2C_Susa%2C_Iran%2C_British_Museum.jpg', page: f('Stone_carving_depicting_Princess_Bar-Uli,_1500-1000_BCE,_Susa,_Iran,_British_Museum.jpg'), author: 'SpeakingArch', license: 'CC BY-SA 4.0', licenseUrl: BYSA4, caption: B('آویز کالسدونی: شاه نشسته و دخترش بار-اولی. موزهٔ بریتانیا، 113886', 'The chalcedony pendant: the seated king and his daughter Bar-Uli. British Museum, 113886') },
]

const chrono = note('سال‌ها نمادین‌اند. لوور پادشاهی او را ۱۱۵۰–۱۱۲۰ پ.م. می‌گذارد و بازلو حدود ۱۱۴۰–۱۱۲۰. هیچ رویداد این پادشاهی سال قطعی ندارد.', 'Years are schematic. The Louvre dates his reign 1150–1120 BCE and Basello c. 1140–1120. No event of the reign has a firm year.')

export const shilhakEvents = [
  ev('accession', -1150, B('حدود ۱۱۵۰ پ.م.', 'c. 1150 BCE'), 'admin', SUSA, B('جانشین برادر', 'Successor to his brother'), B('پس از پادشاهی کوتاه برادرش کوتیرناخونته، شیلهک‌اینشوشیناک، پسر شوتروک‌ناخونته، شاه انشان و شوش شد.', 'After the short reign of his brother Kutir-Nakhunte, Shilhak-Inshushinak, son of Shutruk-Nakhunte, became king of Anshan and Susa.'), 'probable', ['vallat', 'louvre-20714'], chrono),
  ev('marriage', -1149, B('آغاز پادشاهی', 'early reign'), 'admin', SUSA, B('همسری با نهونته‌اوتو', 'Marriage to Nahhunte-utu'), B('والا می‌گوید نهونته‌اوتو نخست همسر کوتیرناخونته بود و پس از او همسر شیلهک‌اینشوشیناک شد. شاه در کتیبه‌هایش او را «همسر عزیزم» می‌نامد.', 'Vallat says Nahhunte-utu was first the wife of Kutir-Nakhunte and then of Shilhak-Inshushinak. The king calls her “my beloved wife” in his inscriptions.'), 'probable', ['vallat-susa', 'louvre-1619'], note('این ازدواج از کتیبه‌ها بازسازی شده است؛ خویشاوندی دقیق نهونته‌اوتو با شاهان محل بحث است.', 'The marriage is reconstructed from the inscriptions; Nahhunte-utu’s exact kinship with the kings is debated.')),
  ev('kuk-kirmash', -1146, B('آغاز پادشاهی', 'early reign'), 'religion', SUSA, B('نام کوک‌کیرماش را پاک نکرد', 'He kept Kuk-kirmash’s name'), B('در معبد اینشوشیناک جایگاهی بود که کوک‌کیرماش، شاهی بسیار کهن‌تر، ساخته بود. شیلهک‌اینشوشیناک آن را با آجر پخته از نو ساخت و نوشت که نام و لقب سازندهٔ پیشین را از میان نبرده است.', 'In the Inshushinak temple stood a holy place built by Kuk-kirmash, a far older king. Shilhak-Inshushinak rebuilt it in baked brick and wrote that he had not erased the earlier builder’s name and titles.'), 'secure', ['louvre-1619', 'konig1965'], chrono),
  ev('campaigns', -1140, B('میانهٔ پادشاهی', 'mid-reign'), 'campaign', DIYALA, B('لشکرکشی‌ها به غرب', 'Campaigns to the west'), B('ستون بلند او (EKI 54) حدود ۲۵۰ جای را نام می‌برد. بیشترشان را نمی‌توان یافت، اما چند تا در دیاله، بابل و نزدیک کرکوک امروزی است.', 'His long stele (EKI 54) names about 250 places. Most cannot be located, but some lie in the Diyala, Babylonia and near modern Kirkuk.'), 'disputed', ['basello2016', 'potts1999', 'vallat'], { route: [SUSA, DIYALA, ARRAPHA], ...note('شمار و ترتیب لشکرکشی‌ها روشن نیست و مسیر طرح‌وار است.', 'The number and order of the campaigns are unclear and the route is a sketch.') }),
  ev('grove', -1135, B('میانهٔ پادشاهی', 'mid-reign'), 'religion', SUSA, B('بیست «معبد بیشه»', 'Twenty “grove temples”'), B('روی ستونی (EKI 48) بیست شهر را نام می‌برد که «معبد اینشوشیناکِ بیشه» در آن‌ها را بازسازی کرد. همان ستون شاهان پیشینی را برمی‌شمارد که معبد اینشوشیناک در شوش را ساختند یا مرمت کردند.', 'On one stele (EKI 48) he names twenty cities where he restored the “temple of Inshushinak of the grove”. The same stele lists the earlier kings who built or restored the Inshushinak temple at Susa.'), 'secure', ['louvre-147', 'vallat', 'konig1965'], chrono),
  ev('liyan', -1132, B('میانهٔ پادشاهی', 'mid-reign'), 'religion', LIYAN, B('معبد کیریریشا در لیان', 'The temple of Kiririsha at Liyan'), B('در لیان، کنار بوشهر امروزی، معبد ایزدبانو کیریریشا را با آجر پخته از نو ساخت. در آجرنوشته نام نهونته‌اوتو و شش فرزندشان آمده است.', 'At Liyan, by modern Bushehr, he rebuilt the temple of the goddess Kiririsha in baked brick. The brick text names Nahhunte-utu and six of their children.'), 'secure', ['louvre-20714', 'bm-liyan', 'potts1999'], { route: [SUSA, [49.6, 30.6], LIYAN], ...chrono }),
  ev('sit-shamshi', -1130, B('میانهٔ پادشاهی', 'mid-reign'), 'religion', SUSA, B('سیت‌شمشی: آیین برآمدن خورشید', 'The Sit-shamshi: the sunrise rite'), B('ماکت مفرغی یک جایگاه آیینی را ریخت که کتیبه‌اش آن را «سیت‌شمشی» می‌نامد، واژه‌ای اکدی به معنای «برآمدن خورشید».', 'He had a bronze model of a cult place cast; its inscription calls it a “sit-shamshi”, an Akkadian word for “sunrise”.'), 'secure', ['louvre-sit', 'konig1965', 'harper1992'], chrono),
  ev('chapel', -1128, B('نیمهٔ دوم پادشاهی', 'later reign'), 'building', SUSA, B('نمازخانهٔ آجری کاخ', 'The palace brick chapel'), B('والا می‌گوید او کاخ شاهی شوش و نمازخانه‌ای را که کوتیرناخونته روی آن کار کرده بود، تمام کرد. دیوارهایش نقش آجری داشت: زن یا ایزدبانو، درخت و انسان‌گاو.', 'Vallat says he finished the royal palace at Susa and a chapel Kutir-Nakhunte had already worked on. Its walls had brick reliefs: a woman or goddess, a tree and a bull-man.'), 'probable', ['vallat-susa', 'potts1999'], chrono),
  ev('bar-uli', -1125, B('نیمهٔ دوم پادشاهی', 'later reign'), 'admin', SUSA, B('آویزی برای بار-اولی', 'A pendant for Bar-Uli'), B('روی سنگی کالسدونی، شاه نشسته و سنگی در دست دارد و دخترش بار-اولی ایستاده است؛ به نظر می‌رسد همان سنگ را به گردن دارد. نام هر دو در کتیبهٔ آن آمده است.', 'On a chalcedony stone the king sits holding a stone, and his daughter Bar-Uli stands; she appears to wear the stone at her neck. Both are named in its inscription.'), 'secure', ['bm-baruli'], note('جای یافتن فقط «جنوب‌غرب ایران» ثبت شده؛ نقطه روی شوش نمادین است.', 'The findspot is recorded only as “south-west Iran”; the dot at Susa is symbolic.')),
  ev('succession', -1120, B('حدود ۱۱۲۰ پ.م.', 'c. 1120 BCE'), 'admin', SUSA, B('جانشینی هوتلوتوش‌اینشوشیناک', 'Hutelutush-Inshushinak succeeds'), B('پس از او هوتلوتوش‌اینشوشیناک شاه شد که خود را «پسر کوتیرناخونته و شیلهک‌اینشوشیناک» می‌خواند. چند سال بعد نبوکدنصر یکم، شاه بابل، به ایلام تاخت.', 'Hutelutush-Inshushinak followed him, calling himself “son of Kutir-Nakhunte and of Shilhak-Inshushinak”. A few years later Nebuchadnezzar I of Babylon struck Elam.'), 'probable', ['vallat', 'vallat1985'], chrono),
]

const route = note('ترتیب و شمار لشکرکشی‌ها روشن نیست. بازلو می‌گوید جای‌های ستون EKI 54 «شاید» بر پایهٔ لشکرکشی‌ها گروه‌بندی شده‌اند؛ خط‌ها طرح‌وارند.', 'The order and number of the campaigns are unclear. Basello says the places on EKI 54 are “perhaps” grouped by campaign; the lines are sketches.')
const campaignEvents = [
  ev('susa', -1140, B('میانهٔ پادشاهی', 'mid-reign'), 'campaign', SUSA, B('حرکت از شوش', 'Setting out from Susa'), B('سپاه ایلام از شوش به سوی غرب، به دشت‌های میان‌رودان، راه افتاد. ما نمی‌دانیم یک لشکرکشی بود یا چند لشکرکشی.', 'The Elamite army set out west from Susa towards the plains of Mesopotamia. We do not know whether this was one campaign or several.'), 'disputed', ['basello2016', 'potts1999'], route),
  ev('diyala', -1140, B('میانهٔ پادشاهی', 'mid-reign'), 'battle', DIYALA, B('درهٔ دیاله', 'The Diyala valley'), B('بازلو می‌گوید برخی از جای‌های ستون در منطقهٔ دیاله، شمال‌شرق بغداد امروزی، است.', 'Basello says some of the places on the stele lie in the Diyala region, north-east of modern Baghdad.'), 'probable', ['basello2016'], { route: [SUSA, [46.6, 33.0], DIYALA], ...route }),
  ev('babylonia', -1140, B('میانهٔ پادشاهی', 'mid-reign'), 'battle', BABYLONIA, B('بابل مرکزی و شمالی', 'Central and northern Babylonia'), B('چند جای دیگر در بابل مرکزی و شمالی است. والا می‌گوید او «لشکرکشی‌های فراوان» به همسایگان میان‌رودانی‌اش کرد.', 'Other places lie in central and northern Babylonia. Vallat says he led “a large number of campaigns” against his Mesopotamian neighbours.'), 'probable', ['basello2016', 'vallat-susa'], { route: [DIYALA, BABYLONIA], ...route }),
  ev('arrapha', -1140, B('میانهٔ پادشاهی', 'mid-reign'), 'battle', ARRAPHA, B('اراپخا و نوزی', 'Arrapha and Nuzi'), B('دورترین جای‌های شناخته اراپخا (کرکوک امروزی) و نوزی است، در مرز سرزمین آشور.', 'The farthest identified places are Arrapha (modern Kirkuk) and Nuzi, on the edge of the Assyrian heartland.'), 'probable', ['basello2016'], { route: [BABYLONIA, DIYALA, ARRAPHA], ...route }),
  ev('return', -1139, B('پس از لشکرکشی‌ها', 'after the campaigns'), 'religion', SUSA, B('ستونی برای شوش', 'A stele for Susa'), B('در شوش ستونی بلند برپا شد با نام حدود ۲۵۰ جای. بازلو آن را نشانهٔ نگاهی امپراتوری می‌داند، اما نه فرمانروایی پایدار: هدف بیشتر بردن ثروت آن سرزمین‌ها بود.', 'At Susa a tall stele was set up naming about 250 places. Basello reads it as an imperial outlook, but not stable rule: the aim was more to carry off those lands’ wealth.'), 'secure', ['basello2016', 'konig1965', 'potts1999'], { route: [ARRAPHA, [45.6, 34.2], [47.3, 33.0], SUSA] }),
]

const kukQuote: DossierQuote = { text: "Moi, Shilhak-Inshushinak, fils de Shutruk-Nahhunte, agrandisseur du royaume, dans le temple d'Inshushinak, Kuk-kirmash avait bâti un lieu saint. Comme il était délabré, j'ai vu sa brique, j'ai effectué la conservation (?) et la refondation de sa brique de fondation. Quant à Kuk-kirmash, le nom et la titulature qu'il avait placés ici, je ne les ai pas fait disparaître. Je les ai remis en état et j'y ai placé mon propre nom. Pour ma vie, pour la vie de Nahhunte-utu, mon épouse chérie, la vie de nos enfants à venir, à cet effet, j'ai bâti le temple d'Inshushinak en briques cuites.", fa: 'من، شیلهک‌اینشوشیناک، پسر شوتروک‌ناخونته، گسترش‌دهندهٔ پادشاهی: در معبد اینشوشیناک، کوک‌کیرماش جایگاهی مقدس ساخته بود. چون فرسوده بود، آجرش را دیدم و آجر بنیادش را نگه داشتم (؟) و از نو گذاشتم. نام و لقب‌هایی را که کوک‌کیرماش اینجا گذاشته بود، از میان نبردم. آن‌ها را مرمت کردم و نام خودم را هم آنجا گذاشتم. برای زندگی خودم، برای زندگی نهونته‌اوتو، همسر عزیزم، و زندگی فرزندانی که خواهیم داشت، با این نیت معبد اینشوشیناک را با آجر پخته ساختم.', ref: 'Brick, Louvre Sb 1619, Elamite; French translation in the Louvre collections record', source: 'louvre-1619', lang: 'fr' }
const liyanQuote: DossierQuote = { text: "Humbanumena avait édifié le temple de Kiririsha-de-Liyan en briques crues et, comme il menaçait ruine, moi je l'ai remis en état : en briques cuites de restauration je l'ai (re)construit. et pour ma vie, pour celle de Nahhunte-Utu, de Hutelutush-Inshushinak, de Shilhina-hamru-Lakamar, de Kutir-Huban, d'Ishnikarab-huhun, d'Urutuk-El-halahu et d'Utu-ehihi-Pinigir, c'est dans cette intention que, pour notre sauvegarde, j'en ai fait don à Kiririsha, ma déesse.", fa: 'هومبان‌اومنا معبد کیریریشای لیان را با خشت ساخته بود و چون رو به ویرانی بود، من آن را مرمت کردم: با آجر پخته از نو ساختمش. و برای زندگی خودم، و زندگی نهونته‌اوتو، هوتلوتوش‌اینشوشیناک، شیلهینا‌هَمرو‌لَکَمَر، کوتیرهوبان، ایشنیکرب‌هوهون، اوروتوک‌ال‌هلهو و اوتواِهیهی‌پینیگیر، با این نیت، برای نگهداری ما، آن را به کیریریشا، ایزدبانوی خودم، پیشکش کردم.', ref: 'Brick, Louvre Sb 20714 (IRS 39), Elamite; French translation in the Louvre collections record', source: 'louvre-20714', lang: 'fr' }

export const shilhakDossier: DossierSection[] = [
  sec('sources', 'منابع: شاهی با ده‌ها کتیبه', 'Sources: a king of many inscriptions',
    [['به گفتهٔ والا، از شیلهک‌اینشوشیناک «شمار زیادی» کتیبهٔ ایلامی مانده است. کونیگ (۱۹۶۵) آن‌ها را با شماره‌های ۳۲ تا ۵۹ گرد آورده است. بیشترشان روی آجر و ستون، دربارهٔ ساختن و مرمت معبدهاست. یک ستون بلند (EKI 54) لشکرکشی‌هایش را با نام حدود ۲۵۰ جای ثبت کرده است. آثار او امروز بیشتر در لوور و موزهٔ بریتانیاست.'], ['In Vallat’s words, Shilhak-Inshushinak left “a large number of inscriptions in Elamite”. König (1965) collected them as nos. 32–59. Most are on bricks and stelae and record building and restoring temples. One long stele (EKI 54) records his campaigns by naming about 250 places. His works are now mostly in the Louvre and the British Museum.']],
    [['سال‌شمار او محل بحث است. لوور پادشاهی‌اش را ۱۱۵۰–۱۱۲۰ پ.م. می‌گذارد و بازلو حدود ۱۱۴۰–۱۱۲۰. والا سال‌شمار کوتاه‌تری را ترجیح می‌دهد. چون بیشتر شواهد کتیبه‌های خود اوست، داستان را بیشتر از زبان خود او داریم.'], ['His chronology is disputed. The Louvre dates his reign 1150–1120 BCE and Basello c. 1140–1120. Vallat prefers a shorter chronology. Because most of the evidence is his own inscriptions, we have the story mostly in his own words.']],
    [['وقتی شاهی این همه می‌نویسد، باید پرسید برای که می‌نوشت: برای خدایان، برای جانشینانش و برای تاریخ. شاهی که آیندگان را مخاطب می‌گیرد، می‌خواهد کارش ماندگار بماند.'], ['When a king writes this much, we should ask for whom: for the gods, for his successors and for history. A king who addresses the future wants his work to last.']],
    ['konig1965', 'vallat', 'vallat-susa', 'basello2016', 'potts1999'], { photos: ['block'] }),
  sec('life', 'زندگی و پادشاهی به ترتیب', 'Life and reign in order',
    [[
      '۱. پسر شوتروک‌ناخونته. پس از پادشاهی کوتاه برادرش کوتیرناخونته به تخت نشست.',
      '۲. با نهونته‌اوتو، بیوهٔ برادرش، ازدواج کرد. والا می‌گوید از او چهار یا پنج فرزند داشت.',
      '۳. در شوش و شهرهای دیگر ایلام معبدهای بسیاری ساخت یا بازسازی کرد؛ از جمله بیست «معبد بیشه» و معبد کیریریشا در لیان، کنار بوشهر.',
      '۴. به غرب لشکر کشید: تا دیاله، بابل و اراپخا (کرکوک).',
      '۵. کاخ شاهی شوش و نمازخانه‌ای با نقش‌های آجری را تمام کرد و ماکت مفرغی «سیت‌شمشی» را ساخت.',
      '۶. حدود ۱۱۲۰ پ.م. درگذشت و هوتلوتوش‌اینشوشیناک جانشینش شد.',
    ], [
      '1. Son of Shutruk-Nakhunte. He came to the throne after the short reign of his brother Kutir-Nakhunte.',
      '2. He married Nahhunte-utu, his brother’s widow. Vallat says she bore him four or five children.',
      '3. He built or rebuilt many temples at Susa and across Elam, among them twenty “grove temples” and the temple of Kiririsha at Liyan, by Bushehr.',
      '4. He campaigned west: as far as the Diyala, Babylonia and Arrapha (Kirkuk).',
      '5. He finished the royal palace at Susa and a chapel with brick reliefs, and had the bronze “Sit-shamshi” made.',
      '6. He died c. 1120 BCE and Hutelutush-Inshushinak succeeded him.',
    ]],
    [['والا او را پس از اونتاش‌ناپیریشا «مهم‌ترین فرمانروای این دوره» می‌داند. دوران او اوج دوم ایلام میانه بود.'], ['Vallat calls him “the most important sovereign of this period—after Untaš-Napiriša”. His reign was the second peak of Middle Elam.']],
    [['او از پدرش کمتر مشهور است، چون غنیمتی مانند قانون حمورابی به نامش نیست. اما کتیبه‌هایش بیشتر از ساختن سخن می‌گویند تا از غارت.'], ['He is less famous than his father because no trophy like Hammurabi’s Code bears his name. But his inscriptions speak more of building than of plunder.']],
    ['vallat', 'vallat-susa', 'louvre-147', 'louvre-20714', 'basello2016']),
  sec('titles', 'لقب‌ها: خودش چه می‌گفت؟', 'Titles: what did he call himself?',
    [['در آجرنوشته‌هایی که لوور ترجمه کرده، او خود را چنین می‌نامد: «شاه انشان و شوش»، «بندهٔ محبوب کیریریشا و اینشوشیناک» و «گسترش‌دهندهٔ پادشاهی». او همیشه خود را «پسر شوتروک‌ناخونته» هم می‌خواند. هیچ منبعی لقب دیگری مانند «بزرگ» به او نمی‌دهد.'], ['In the brick texts the Louvre has translated he calls himself “king of Anshan and Susa”, “beloved servant of Kiririsha and Inshushinak” and “enlarger of the kingdom”. He always calls himself “son of Shutruk-Nakhunte” too. No source gives him any later byname such as “the Great”.']],
    [['این همان لقب‌های پدرش است. شاهان شوتروکی با تکرار این لقب‌ها پیوستگی خاندان را نشان می‌دادند: یک پادشاهی، از کوهستان انشان تا دشت شوش.'], ['These are his father’s titles. The Shutrukid kings repeated them to show the continuity of the house: one kingdom, from the Anshan highlands to the Susa plain.']],
    [['لقب‌ها می‌گویند فرمانروا می‌خواست چگونه دیده شود، نه اینکه چگونه بود.'], ['Titles tell us how a ruler wished to be seen, not how he was.']],
    ['louvre-1619', 'louvre-20714', 'konig1965']),
  sec('campaigns', 'لشکرکشی‌ها و ستون ۲۵۰ جای', 'The campaigns and the stele of 250 places',
    [['ستون بلند EKI 54 حدود ۲۵۰ جای را نام می‌برد. بازلو می‌گوید آن‌ها شاید بر پایهٔ لشکرکشی‌ها گروه‌بندی شده‌اند. بیشتر این جای‌ها را نمی‌توان یافت. اما چند تا تا بابل مرکزی و شمالی، منطقهٔ دیاله و قلب سرزمین آشور (اراپخا و نوزی) می‌رسند. والا می‌گوید او «لشکرکشی‌های فراوان» به همسایگان میان‌رودانی‌اش کرد. از سازمان سپاه، شمار سربازان یا نبردی مشخص هیچ گزارشی نمانده است.'], ['The long stele EKI 54 names about 250 places. Basello says they are perhaps grouped by campaign. Most of these places cannot be located. But some reach central and northern Babylonia, the Diyala region and the Assyrian heartland (Arrapha and Nuzi). Vallat says he led “a large number of campaigns” against his Mesopotamian neighbours. No account survives of how his army was organised, how large it was, or of any particular battle.']],
    [['بازلو این ستون را نشانهٔ «نگاهی امپراتوری» می‌داند، اما بی‌آنکه فرمانروایی پایداری بر آن سرزمین‌ها در کار باشد: هدف بیشتر بردن ثروت بود. شمار و ترتیب لشکرکشی‌ها و جای بیشتر نام‌ها محل بحث است.'], ['Basello reads the stele as an “imperial attitude”, without stable control of those lands: the aim was more to loot their resources. The number and order of the campaigns, and the location of most names, are disputed.']],
    [['فهرستی از ۲۵۰ جای غارت‌شده برای شاه افتخار بود؛ برای مردم آن ۲۵۰ جای، از دست رفتن خانه و دارایی.'], ['A list of 250 raided places was glory for the king; for the people of those 250 places, it meant the loss of home and property.']],
    ['basello2016', 'vallat', 'vallat-susa', 'potts1999', 'konig1965']),
  sec('building', 'سازنده: معبدهای بیشه، لیان و کاخ شوش', 'Builder: the grove temples, Liyan and the Susa palace',
    [[
      'ستون EKI 48 (لوور، Sb 147) بیست شهر را نام می‌برد که «معبد اینشوشیناکِ بیشه» در آن‌ها را بازسازی کرد. والا می‌گوید این معبدها در شوشان و ایلام بودند.',
      'در لیان، کنار بوشهر امروزی، معبد کیریریشا را که هومبان‌اومنا با خشت ساخته بود با آجر پخته از نو ساخت. موزهٔ بریتانیا آجرهای نوشته‌دار بسیاری از او را از لیان نگه می‌دارد.',
      'در شوش، به گفتهٔ والا، کاخ شاهی را تمام کرد و نمازخانه‌ای را که کوتیرناخونته روی آن کار کرده بود. دیوارهای آن نقش آجری قالبی داشت: زن یا ایزدبانو، درخت و انسان‌گاو.',
    ], [
      'Stele EKI 48 (Louvre, Sb 147) names twenty cities where he restored the “temple of Inshushinak of the grove”. Vallat says these temples were in Susiana and Elam.',
      'At Liyan, by modern Bushehr, he rebuilt in baked brick the temple of Kiririsha that Humban-umena had built in mud brick. The British Museum holds many of his inscribed bricks from Liyan.',
      'At Susa, Vallat says, he finished the royal palace and a chapel Kutir-Nakhunte had already worked on. Its walls had moulded-brick reliefs: a woman or goddess, a tree and a bull-man.',
    ]],
    [['بیست معبد در بیست شهر یعنی دستگاهی که آجر، کارگر و غذا را در سراسر پادشاهی جابه‌جا می‌کرد. لیان نشان می‌دهد که قدرت او تا کرانهٔ خلیج فارس می‌رسید.'], ['Twenty temples in twenty cities means a system that moved brick, labour and food across the kingdom. Liyan shows his power reached the shore of the Persian Gulf.']],
    [['نقش‌های انسان‌گاو و درخت خرما امروز در لوورند. آجرهای دوباره چیده‌شده نشان می‌دهند بناهای او چه شکلی داشتند.'], ['The bull-man and palm-tree panels are now in the Louvre. The reassembled bricks give an idea of how his buildings looked.']],
    ['louvre-147', 'vallat', 'vallat-susa', 'louvre-20714', 'bm-liyan', 'potts1999'], { photos: ['stele', 'liyan', 'bull'], quotes: [liyanQuote] }),
  sec('religion', 'دین: سیت‌شمشی و آیین برآمدن خورشید', 'Religion: the Sit-shamshi and the sunrise rite',
    [['در ارگ شوش، در ۱۹۰۴–۱۹۰۵، ماکتی مفرغی به اندازهٔ ۴۸ در ۳۵ سانتی‌متر پیدا شد. روی آن دو مرد نشسته، آبدان، سکوهای پله‌دار، ستون‌ها و درخت‌هایی کوچک دیده می‌شود. کتیبهٔ ایلامی آن (EKI 56) آن را «سیت‌شمشی» می‌نامد، یعنی «برآمدن خورشید» به اکدی. لوور آن را ماکت یک جایگاه آیینی می‌داند.'], ['On the Susa acropolis in 1904–1905 a bronze model 48 by 35 cm was found. On it are two seated men, a basin, stepped platforms, pillars and small trees. Its Elamite inscription (EKI 56) calls it a “sit-shamshi”, Akkadian for “sunrise”. The Louvre describes it as a model of a cult place.']],
    [['اینکه ماکت چه آیینی را نشان می‌دهد روشن نیست. کتیبه نام آن را می‌دهد و ماکت صحنه را، اما هیچ شرحی از خود آیین نمانده است. آبدان و دو مرد شاید آیینی با آب را نشان دهند؛ این تنها حدس است. خدای اصلی شوش، اینشوشیناک، بود؛ کیریریشا در لیان پرستیده می‌شد.'], ['What rite the model shows is unclear. The inscription gives its name and the model gives the scene, but no description of the rite survives. The basin and the two men may suggest a rite with water; that is only a guess. The chief god of Susa was Inshushinak; Kiririsha was worshipped at Liyan.']],
    [['امروز سیت‌شمشی در تالار ۳۰۴ لوور به نمایش است: فرصتی کمیاب برای دیدن یک آیین ایلامی، آن‌گونه که خود ایلامیان آن را ساختند.'], ['Today the Sit-shamshi is on display in room 304 of the Louvre: a rare chance to see an Elamite rite as the Elamites themselves modelled it.']],
    ['louvre-sit', 'konig1965', 'harper1992', 'gautier1909', 'vallat-susa'], { photos: ['sit'] }),
  sec('law', 'قانون و آزادی: نام سازندهٔ پیشین را نگه داشت', 'Law and liberty: he kept the earlier builder’s name',
    [['از دوران او هیچ قانون‌نامه یا سند حقوقی‌ای که به نام او باشد نمانده است. اما آجرنوشته‌ای در لوور (Sb 1619) می‌گوید وقتی جایگاه کوک‌کیرماش، شاهی بسیار کهن‌تر، را بازسازی کرد، نام و لقب او را پاک نکرد و نام خودش را در کنارش گذاشت. روی ستون EKI 48 هم شاهان پیشینی را که معبد اینشوشیناک را ساخته بودند، نام برد.'], ['No law collection or legal document in his name survives from his reign. But a brick text in the Louvre (Sb 1619) says that when he rebuilt the holy place of Kuk-kirmash, a far older king, he did not erase that king’s name and titles and set his own name beside them. On stele EKI 48 he also named the earlier kings who had built the Inshushinak temple.']],
    [['این خوانش ماست: نگه داشتن نام سازندهٔ پیشین، به رسمیت شناختن حق او بر کارش است، حتی پس از مرگ. پدرش کتیبه‌اش را روی آثار دیگران افزود، اما متن کهن را هم پاک نکرد. این سنت ایلامی، احترام به نام سازنده، نوعی حرمت مالکیت معنوی است.'], ['This is our reading: keeping the earlier builder’s name recognises his claim to his work, even after death. His father added his own text to others’ monuments but did not erase the old text either. This Elamite habit of respecting the builder’s name is a kind of respect for authorship as property.']],
    [['امروز هم مرمتگر خوب نام سازندهٔ نخست را نگه می‌دارد. حق مؤلف از همین احترام ساده آغاز می‌شود.'], ['Today too a good restorer keeps the original builder’s name. Authors’ rights begin with this simple respect.']],
    ['louvre-1619', 'louvre-147', 'konig1965'], { quotes: [kukQuote] }),
  sec('economy', 'اقتصاد: آجر پخته، مفرغ و غنیمت', 'Economy: baked brick, bronze and booty',
    [['آجرنوشته‌های او می‌گویند معبدها را به جای خشت با آجر پخته از نو ساخت. ریختن ماکت مفرغی سیت‌شمشی هم مهارت بالای فلزکاری شوش را نشان می‌دهد. بازلو می‌گوید لشکرکشی‌ها برای بردن ثروت سرزمین‌های غربی بود.'], ['His brick texts say he rebuilt temples in baked brick instead of mud brick. Casting the bronze Sit-shamshi shows the high skill of Susa’s metalworkers. Basello says the campaigns aimed to carry off the wealth of the western lands.']],
    [['پختن آجر سوخت و کار فراوان می‌خواست. از سندهای اقتصادی دوران او، مانند قرارداد یا حساب، چیزی در منابع ما نیامده است؛ پس دربارهٔ بازار، مالیات یا زمین در دوران او نمی‌توانیم چیزی بگوییم. ثروت ساختمان‌ها احتمالاً بخشی از غنیمت بود.'], ['Firing brick took much fuel and labour. Our sources report no economic documents from his reign, such as contracts or accounts; so we cannot say anything about markets, taxes or land in his time. The wealth for the buildings probably came partly from booty.']],
    [['شکوه ساختمانی که با غنیمت ساخته شود، هزینه‌اش را کسانی پرداختند که نامشان روی آجرها نیست.'], ['The splendour of a building paid for with booty was paid for by people whose names are not on the bricks.']],
    ['louvre-20714', 'louvre-1619', 'louvre-sit', 'basello2016']),
  sec('family', 'خانواده: نهونته‌اوتو، بار-اولی و جانشینی', 'Family: Nahhunte-utu, Bar-Uli and the succession',
    [[
      'نهونته‌اوتو، «همسر عزیزم» در کتیبه‌ها. والا می‌گوید او ده فرزند از چهار پدر داشت: نخست همسر کوتیرناخونته بود، سپس همسر شیلهک‌اینشوشیناک، و از او چهار یا پنج فرزند داشت.',
      'آجرنوشتهٔ لیان (لوور، Sb 20714) نام شش فرزند را کنار نهونته‌اوتو می‌آورد؛ نخستین آن‌ها هوتلوتوش‌اینشوشیناک است.',
      'بار-اولی، دخترش: روی آویزی از کالسدونی آبی (موزهٔ بریتانیا، 113886) شاه نشسته و سنگی در دست دارد، و بار-اولی با تاج ایستاده و به نظر می‌رسد همان سنگ را به گردن دارد. موزه او را «نخستین شاهزاده‌خانم شناختنی در هنر ایران» می‌نامد.',
      'هوتلوتوش‌اینشوشیناک جانشین او شد و خود را «پسر کوتیرناخونته و شیلهک‌اینشوشیناک» خواند. در روزگار او نبوکدنصر یکم به ایلام تاخت و او به انشان پناه برد.',
    ], [
      'Nahhunte-utu, “my beloved wife” in the inscriptions. Vallat says she bore ten children by four fathers: she was first the wife of Kutir-Nakhunte, then of Shilhak-Inshushinak, by whom she had four or five children.',
      'The Liyan brick text (Louvre, Sb 20714) names six children beside Nahhunte-utu; the first is Hutelutush-Inshushinak.',
      'Bar-Uli, his daughter: on a pendant of blue chalcedony (British Museum, 113886) the king sits holding a stone, and Bar-Uli, wearing a diadem, appears to wear that stone at her neck. The museum calls her “the first identifiable princess in Iranian art”.',
      'Hutelutush-Inshushinak succeeded him and called himself “son of Kutir-Nakhunte and of Shilhak-Inshushinak”. In his time Nebuchadnezzar I struck Elam and he took refuge at Anshan.',
    ]],
    [['والا (۱۹۸۵) پیشنهاد می‌کند که هوتلوتوش‌اینشوشیناک پسر شوتروک‌ناخونته از دخترش نهونته‌اوتو بود. این بازسازی محل بحث است. شماره‌گذاری کوتیرناخونته (دوم یا سوم) هم در کتاب‌ها یکسان نیست. آجرنوشتهٔ کوک‌کیرماش از «فرزندان آینده» سخن می‌گوید و آجرنوشتهٔ لیان شش فرزند را نام می‌برد؛ پس شاید اولی از آغاز پادشاهی باشد. این استنباط ماست.'], ['Vallat (1985) proposes that Hutelutush-Inshushinak was a son of Shutruk-Nakhunte by his daughter Nahhunte-utu. This reconstruction is disputed. The numbering of Kutir-Nakhunte (II or III) also differs between books. The Kuk-kirmash brick speaks of “children to come” while the Liyan brick names six children, so the first may date from early in the reign. That inference is ours.']],
    [['نام زنان و دختران خاندان شاهی در کتیبه‌های او آمده است؛ کاری که بسیاری از کتیبه‌های شاهانهٔ باستان نمی‌کنند.'], ['The women and daughters of the royal house are named in his inscriptions, something many ancient royal texts do not do.']],
    ['vallat-susa', 'vallat', 'vallat1985', 'louvre-20714', 'louvre-1619', 'bm-baruli'], { photos: ['baruli'] }),
]

export const shilhakInshushinak: FeaturedKing = {
  slug: 'shilhak-inshushinak',
  name: B('شیلهک‌اینشوشیناک', 'Shilhak-Inshushinak'),
  dynastyName: B('ایلام (دودمان شوتروکی)', 'Elam (Shutrukid dynasty)'),
  reign: B('حدود ۱۱۵۰–۱۱۲۰ پ.م.', 'c. 1150–1120 BCE'),
  title: B('شیلهک‌اینشوشیناک؛ شاه سازندهٔ ایلام', 'Shilhak-Inshushinak: Elam’s builder king'),
  lede: B(
    'پسر شوتروک‌ناخونته و به گفتهٔ والا، پس از اونتاش‌ناپیریشا مهم‌ترین شاه ایلام میانه. بیست «معبد بیشه» را بازسازی کرد، تا لیان در کنار خلیج فارس ساخت و تا کرکوک لشکر کشید. نام شاه پیشین را بر آجرها پاک نکرد. لشکرکشی‌ها را روی نقشهٔ متحرک ببینید و کتیبه‌های خودش را بخوانید.',
    'Son of Shutruk-Nakhunte and, in Vallat’s words, the most important Middle Elamite king after Untash-Napirisha. He restored twenty “grove temples”, built as far as Liyan on the Persian Gulf and campaigned as far as Kirkuk. He did not erase an earlier king’s name from the bricks. Follow the campaigns on the animated map and read his own inscriptions.',
  ),
  stats: [
    { n: B('~۲۵۰', '~250'), l: B('جای نام‌برده در ستون لشکرکشی‌ها', 'places named on the campaign stele') },
    { n: B('۲۰', '20'), l: B('«معبد بیشه» که بازسازی کرد', '“grove temples” he restored') },
    { n: B('۲۸', '28'), l: B('شمارهٔ کتیبه در مجموعهٔ کونیگ (EKI 32–59)', 'inscription numbers in König’s corpus (EKI 32–59)') },
    { n: B('۶', '6'), l: B('فرزند نام‌برده در آجرنوشتهٔ لیان', 'children named on the Liyan brick') },
  ],
  mapTitle: B('نقشهٔ متحرک: زندگی و پادشاهی', 'Animated map: life and reign'),
  events: shilhakEvents,
  span: [-1150, -1120],
  campaign: {
    id: 'reign',
    title: B('لشکرکشی‌های غربی، گام‌به‌گام', 'The western campaigns, step by step'),
    intro: { fa: ['از شوش تا دیاله، بابل و اراپخا و بازگشت. ستون او تنها نام جای‌ها را می‌دهد؛ ترتیب و مسیرها طرح‌وار است.'], en: ['From Susa to the Diyala, Babylonia and Arrapha and back. His stele gives only place names; the order and routes are sketches.'] },
    events: campaignEvents, span: [-1140, -1139], view: [42.6, 29.6, 50.2, 36.2],
    places: [
      { name: B('شوش', 'Susa'), c: SUSA }, { name: B('دیاله', 'Diyala'), c: DIYALA },
      { name: B('بابل', 'Babylonia'), c: BABYLONIA, left: true }, { name: B('اراپخا (کرکوک)', 'Arrapha (Kirkuk)'), c: ARRAPHA, dy: -1 },
      { name: B('نوزی', 'Nuzi'), c: NUZI, left: true, dy: 1 },
    ],
    clip: clipFor('shilhak-inshushinak'),
  },
  shareImage: '/media/shilhak-inshushinak/reign-en.png',
  dossier: shilhakDossier,
  synthesis: { title: B('جمع‌بندی: سازنده‌ای که نام دیگران را نگه داشت', 'Synthesis: a builder who kept others’ names'), paras: {
    fa: [
      'شیلهک‌اینشوشیناک شاهی جنگجو و سازنده بود. به غرب لشکر کشید و ستونی با نام ۲۵۰ جای برپا کرد، اما بیشتر به خاطر معبدهایش شناخته می‌شود: بیست معبد بیشه، معبد کیریریشا در لیان، و کاخ و نمازخانهٔ شوش. ما او را از کتیبه‌های خودش می‌شناسیم، و این کتیبه‌ها نام همسر و فرزندانش را هم نگه داشته‌اند.',
      'از دید مالکیت، داستان او دو رو دارد. لشکرکشی‌هایش برای بردن ثروت دیگران بود. اما در شهر خودش، وقتی بنای شاهی کهن را بازسازی کرد، نام سازنده را پاک نکرد. احترام به نام سازنده، احترام به حق او بر کارش است؛ و همین احترام بود که حافظهٔ ایلام را نگه داشت.',
    ],
    en: [
      'Shilhak-Inshushinak was a warrior and a builder. He campaigned west and set up a stele naming 250 places, but he is known best for his temples: twenty grove temples, the temple of Kiririsha at Liyan, and the palace and chapel at Susa. We know him from his own inscriptions, and they also preserve the names of his wife and children.',
      'Through the lens of property his story has two sides. His campaigns aimed at carrying off other people’s wealth. Yet in his own city, when he rebuilt an ancient king’s shrine, he did not erase the builder’s name. Respecting the builder’s name respects his claim to his work; and that respect is what kept Elam’s memory alive.',
    ],
  }, sources: ['vallat', 'vallat-susa', 'basello2016', 'louvre-1619'] },
  sources: shilhakSources,
  photos: shilhakPhotos,
  related: [
    { href: { fa: '/king/shutruk-nakhunte', en: '/en/king/shutruk-nakhunte' }, label: B('شوتروک‌ناخونته، پدرش', 'Shutruk-Nakhunte, his father') },
    { href: { fa: '/king/untash-napirisha', en: '/en/king/untash-napirisha' }, label: B('اونتاش‌ناپیریشا، سازندهٔ چغازنبیل', 'Untash-Napirisha, builder of Chogha Zanbil') },
    { href: { fa: '/dynasty/elam', en: '/dynasty/elam' }, label: B('دودمان ایلام', 'The Elamite dynasty') },
  ],
  wikipedia: 'https://en.wikipedia.org/wiki/Shilhak-Inshushinak',
}
