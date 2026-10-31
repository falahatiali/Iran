/**
 * Cyaxares (Median *Uvaxštra), king of the Medes, d. 585/4 BCE. Spine: I. M. Diakonoff, "Cyaxares" (Iranica, 1993)
 * and the Babylonian Fall of Nineveh Chronicle (ABC 3, BM 21901; Grayson 1975, as adapted on Livius).
 * Herodotus (tr. A. D. Godley, 1920) is quoted and always labelled as Herodotus. The start of the reign (625)
 * comes only from Herodotus' regnal years, so it is marked disputed.
 */
import type { Coord, DossierQuote, DossierSection, FeaturedKing, FeaturedSource } from '../featured/types'
import type { CommonsPhoto } from '../places/types'
import { ev, note, sec } from '../late-achaemenid/common'

const B = (fa: string, en: string) => ({ fa, en })
const ECBATANA: Coord = [48.52, 34.8]
const ARRAPHA: Coord = [44.39, 35.47]
const TARBISU: Coord = [43.2, 36.44]
const ASSUR: Coord = [43.26, 35.46]
const NINEVEH: Coord = [43.15, 36.36]
const HARRAN: Coord = [39.03, 36.86]
const BABYLON: Coord = [44.42, 32.54]
const HALYS: Coord = [34.2, 39.4]

const HDT = (ch: number) => `https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.01.0126:book=1:chapter=${ch}`
export const cyaxaresSources: FeaturedSource[] = [
  { id: 'diakonoff-ir', author: 'I. M. Diakonoff, Encyclopaedia Iranica', title: 'Cyaxares', year: '1993, updated 2013', url: 'https://www.iranicaonline.org/articles/cyaxares/', note: { fa: 'ستون اصلی این صفحه: تنها هووخشترهٔ گواهی‌شده، رویدادهای ۶۱۵ تا ۶۰۹، و نقد روایت‌های هرودوت.', en: 'The spine of this page: the only attested Cyaxares, the events of 615–609, and a critique of Herodotus’ stories.' } },
  { id: 'abc3', author: 'Babylonian chronicle, tr. A. K. Grayson (1975), adapted by J. Lendering', title: 'ABC 3, the Fall of Nineveh Chronicle (BM 21901), Livius.org', year: 'online', url: 'https://www.livius.org/sources/content/mesopotamian-chronicles-content/abc-3-fall-of-nineveh-chronicle/', note: { fa: 'گزارش هم‌زمان بابلی، سال‌به‌سال، از ۶۱۶ تا ۶۰۹ پ.م.', en: 'The contemporary Babylonian year-by-year record, 616–609 BCE.' } },
  { id: 'grayson1975', author: 'A. K. Grayson', title: 'Assyrian and Babylonian Chronicles (Texts from Cuneiform Sources V)', year: '1975' },
  { id: 'hdt', author: 'Herodotus, tr. A. D. Godley (Loeb, 1920)', title: 'The Histories, book 1, chapters 73–74 and 103–106 (Perseus)', year: '1920', url: HDT(103), note: { fa: 'روایت یونانی، حدود ۱۵۰ سال پس از رویدادها؛ همه جا با برچسب «به روایت هرودوت».', en: 'A Greek account written c. 150 years later; always labelled “according to Herodotus”.' } },
  { id: 'diakonoff-chi', author: 'I. M. Diakonoff', title: 'Media, in The Cambridge History of Iran II, pp. 36–148 (esp. 112–119)', year: '1985' },
  { id: 'zawadzki1988', author: 'S. Zawadzki', title: 'The Fall of Assyria and Median-Babylonian Relations in the Light of the Nabopolassar Chronicle', year: '1988' },
  { id: 'bm-21901', author: 'British Museum', title: 'Chronicle tablet BM 21901 (1896,0409.6) (collection record)', year: 'online', url: 'https://www.britishmuseum.org/collection/object/W_1896-0409-6' },
]
export const cyaxaresSourceIds = new Set(cyaxaresSources.map((s) => s.id))

const t = (path: string) => `https://upload.wikimedia.org/wikipedia/commons/thumb/${path}`
const f = (name: string) => `https://commons.wikimedia.org/wiki/File:${name}`
/** Licence and author read from the Commons API on 2026-10-31. */
export const cyaxaresPhotos: CommonsPhoto[] = [
  { id: 'chronicle', src: t('7/72/Fall_of_Nineveh_Chronicle_BM_21901.jpg/960px-Fall_of_Nineveh_Chronicle_BM_21901.jpg'), page: f('Fall_of_Nineveh_Chronicle_BM_21901.jpg'), author: 'Zunkir', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0', caption: B('لوح «سقوط نینوا» (تاریخ‌نامهٔ بابلی ABC 3): گزارش هم‌زمان کارهای هووخشتره. موزهٔ بریتانیا، BM 21901', 'The “Fall of Nineveh” tablet (Babylonian chronicle ABC 3): the contemporary record of Cyaxares’ deeds. British Museum, BM 21901') },
  { id: 'mashki', src: t('2/27/Nineveh_-_Mashki_Gate.jpg/960px-Nineveh_-_Mashki_Gate.jpg'), page: f('Nineveh_-_Mashki_Gate.jpg'), author: 'Omar Siddeeq Yousif', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0', caption: B('دروازهٔ مشکی نینوا، یکی از دروازه‌های باروی شهر (بازسازی امروزی)', 'The Mashki Gate of Nineveh, one of the gates in the city wall (modern reconstruction)') },
  { id: 'hegmataneh', src: t('a/a5/Iran_-_Hamadan_-_Hegmataneh_-_%28Ecbatana%29_-_panoramio.jpg/960px-Iran_-_Hamadan_-_Hegmataneh_-_%28Ecbatana%29_-_panoramio.jpg'), page: f('Iran_-_Hamadan_-_Hegmataneh_-_(Ecbatana)_-_panoramio.jpg'), author: 'Alireza Javaheri', license: 'CC BY 3.0', licenseUrl: 'https://creativecommons.org/licenses/by/3.0', caption: B('تپهٔ هگمتانه در همدان؛ هرودوت هگمتانه را پایتخت مادها می‌داند. لایه‌های مادی این تپه هنوز به‌روشنی شناخته نشده‌اند', 'The Hegmataneh mound at Hamadan; Herodotus makes Ecbatana the Median capital. Its Median levels are still not clearly identified') },
]

const hdtYears = note('سال آغاز پادشاهی (۶۲۵) تنها از شمارش سال‌های هرودوت درآمده و هیچ سند هم‌زمانی آن را تأیید نمی‌کند.', 'The start of the reign (625) comes only from Herodotus’ count of regnal years; no contemporary document confirms it.')

export const cyaxaresEvents = [
  ev('accession', -625, B('حدود ۶۲۵ پ.م.', 'c. 625 BCE'), 'admin', ECBATANA, B('شاه ماد', 'King of the Medes'), B('هرودوت او را پسر فرورتیش و جانشین او می‌داند. دیاکونوف می‌گوید این شاید اشتباه باشد و پدرش شاید خشثریته (کشتریتی آشوری) بود.', 'Herodotus makes him the son and successor of Phraortes. Diakonoff says this may be a confusion and his father may have been Xšaθrita (Assyrian Kaštariti).'), 'disputed', ['hdt', 'diakonoff-ir'], hdtYears),
  ev('arrapha', -615, B('پایان ۶۱۵ پ.م.', 'late 615 BCE'), 'campaign', ARRAPHA, B('مادها در اراپخا', 'The Medes at Arrapha'), B('مادها استان آشوری اراپخا (کرکوک امروزی) را گرفتند؛ نخستین گام آنان در خاک آشور.', 'The Medes occupied the Assyrian province of Arrapha (modern Kirkuk), their first step on Assyrian soil.'), 'disputed', ['abc3', 'diakonoff-ir'], { route: [ECBATANA, [46.5, 34.9], ARRAPHA], ...note('تاریخ محل بحث است: دیاکونوف آن را مهر و آبان ۶۱۴ می‌گذارد و خوانش لیویوس از تاریخ‌نامه پایان ۶۱۵. لوح در این بخش آسیب دیده است.', 'The date is disputed: Diakonoff puts it in October–November 614, Livius’ reading of the chronicle in late 615. The tablet is damaged here.') }),
  ev('assur', -614, B('تابستان ۶۱۴ پ.م.', 'summer 614 BCE'), 'battle', ASSUR, B('گشودن آشور', 'The capture of Assur'), B('به گزارش تاریخ‌نامهٔ بابلی، مادها تربیصو را گرفتند، کنار دجله پایین آمدند و آشور، پایتخت کهن و دینی آشوریان، را گشودند و غارت کردند. سپاه بابل دیر رسید.', 'The Babylonian chronicle says the Medes took Tarbisu, went down the Tigris and captured and plundered Assur, the old religious capital of Assyria. The Babylonian army arrived too late.'), 'secure', ['abc3', 'diakonoff-ir'], { route: [ARRAPHA, TARBISU, ASSUR] }),
  ev('treaty', -614, B('۶۱۴ پ.م.', '614 BCE'), 'admin', ASSUR, B('پیمان با نبوپلسر', 'The pact with Nabopolassar'), B('کنار ویرانه‌های آشور، هووخشتره و نبوپلسر، شاه بابل، با هم دیدار کردند و پیمان دوستی بستند.', 'By the ruins of Assur, Cyaxares and Nabopolassar, king of Babylon, met and made a pact of friendship.'), 'secure', ['abc3']),
  ev('nineveh', -612, B('خرداد تا مرداد ۶۱۲ پ.م.', 'June–August 612 BCE'), 'battle', NINEVEH, B('سقوط نینوا', 'The fall of Nineveh'), B('مادها و بابلیان سه ماه نینوا را محاصره کردند و گرفتند. سین‌شر‌ایشکون، شاه آشور، مرد. به گفتهٔ تاریخ‌نامه غنیمت بزرگ شهر را بردند و شهر را «تلی از ویرانه» کردند.', 'The Medes and Babylonians besieged Nineveh for three months and took it. Sin-shar-ishkun, king of Assyria, died. The chronicle says they carried off the city’s great booty and turned it into “a ruin heap”.'), 'secure', ['abc3', 'diakonoff-ir'], { route: [ASSUR, NINEVEH] }),
  ev('harran', -610, B('۶۱۰ پ.م.', '610 BCE'), 'battle', HARRAN, B('حران', 'Harran'), B('بازماندگان آشور به رهبری آشوراوبالیط دوم به حران رفتند. در ۶۱۰ مادها و بابلیان با هم به حران تاختند و آشوریان و یاران مصری‌شان شهر را رها کردند.', 'The Assyrian remnant under Ashur-uballit II withdrew to Harran. In 610 the Medes and Babylonians marched on it together, and the Assyrians and their Egyptian allies abandoned the city.'), 'secure', ['abc3', 'diakonoff-ir'], { route: [NINEVEH, [41.0, 36.7], HARRAN] }),
  ev('lydia', -590, B('حدود ۵۹۰–۵۸۵ پ.م.', 'c. 590–585 BCE'), 'campaign', HALYS, B('جنگ با لیدی', 'War with Lydia'), B('به روایت هرودوت، چون آلیاتس، شاه لیدی، سکاهای گریخته را پس نداد، ماد و لیدی پنج سال جنگیدند.', 'According to Herodotus, when Alyattes of Lydia would not give back fleeing Scythians, the Medes and Lydians fought for five years.'), 'probable', ['hdt', 'diakonoff-ir'], { route: [ECBATANA, [44.0, 38.2], [38.5, 39.0], HALYS], ...note('علت جنگ تنها روایت هرودوت است؛ خود جنگ را دیاکونوف می‌پذیرد.', 'The cause of the war is only Herodotus’ story; Diakonoff accepts the war itself.') }),
  ev('eclipse', -585, B('۵۸۵ پ.م.', '585 BCE'), 'admin', HALYS, B('خورشیدگرفتگی و مرز هالیس', 'The eclipse and the Halys frontier'), B('به روایت هرودوت، در سال ششم جنگ روز ناگهان شب شد و دو سپاه از جنگ دست کشیدند. با میانجی‌گری شاهان کیلیکیه و بابل صلح شد و رود هالیس (قزل‌ایرماق) مرز شد. هووخشتره در همان سال درگذشت.', 'According to Herodotus, in the sixth year of the war the day suddenly turned to night and both armies stopped fighting. Through the mediation of the kings of Cilicia and Babylon peace was made and the river Halys (Kızılırmak) became the frontier. Cyaxares died the same year.'), 'probable', ['hdt', 'diakonoff-ir'], note('سال ۵۸۵ از یکی دانستن این خورشیدگرفتگی با گرفتگی ۲۸ مه ۵۸۵ پ.م. می‌آید؛ دیاکونوف آن را با «اگر» می‌گوید.', 'The year 585 comes from identifying this eclipse with that of 28 May 585 BCE; Diakonoff puts it with an “if”.')),
]

const camp = note('تاریخ‌نامه جای اردوها را می‌دهد، نه راه‌ها را؛ خط‌ها طرح‌وارند.', 'The chronicle gives the camps, not the roads; the lines are sketches.')
const campaignEvents = [
  ev('c-ecbatana', -615, B('۶۱۵ پ.م.', '615 BCE'), 'campaign', ECBATANA, B('از هگمتانه به غرب', 'West from Ecbatana'), B('در سال ۶۱۶ بابلیان سپاه آشور و مانایی‌ها را شکسته بودند. دیاکونوف می‌گوید هووخشتره از این فرصت استفاده کرد و به مرزهای آشور رسید.', 'In 616 the Babylonians had beaten the Assyrians and Manneans. Diakonoff says Cyaxares used the chance to reach the borders of Assyria.'), 'probable', ['diakonoff-ir', 'abc3'], camp),
  ev('c-arrapha', -615, B('پایان ۶۱۵ پ.م.', 'late 615 BCE'), 'campaign', ARRAPHA, B('اراپخا (کرکوک)', 'Arrapha (Kirkuk)'), B('نخستین گام در خاک آشور: استان اراپخا.', 'The first step on Assyrian soil: the province of Arrapha.'), 'disputed', ['abc3', 'diakonoff-ir'], { route: [ECBATANA, [46.5, 34.9], ARRAPHA], ...note('تاریخ محل بحث است (پایان ۶۱۵ یا پاییز ۶۱۴) و راه طرح‌وار است.', 'The date is disputed (late 615 or autumn 614) and the route is a sketch.') }),
  ev('c-tarbisu', -614, B('مرداد ۶۱۴ پ.م.', 'August 614 BCE'), 'battle', TARBISU, B('تربیصو، کنار نینوا', 'Tarbisu, by Nineveh'), B('تاریخ‌نامه: مادها به سوی نینوا رفتند و تربیصو، شهری در ناحیهٔ نینوا، را گرفتند.', 'The chronicle: the Medes marched towards Nineveh and captured Tarbisu, a city in the district of Nineveh.'), 'secure', ['abc3'], { route: [ARRAPHA, [43.9, 36.1], TARBISU] }),
  ev('c-assur', -614, B('۶۱۴ پ.م.', '614 BCE'), 'battle', ASSUR, B('آشور', 'Assur'), B('کنار دجله پایین آمدند، آشور را گرفتند و غارت کردند. بابلیان دیر رسیدند.', 'They went down the Tigris and took and plundered Assur. The Babylonians arrived too late.'), 'secure', ['abc3'], { route: [TARBISU, ASSUR] }),
  ev('c-pact', -614, B('۶۱۴ پ.م.', '614 BCE'), 'admin', ASSUR, B('دیدار دو شاه', 'The two kings meet'), B('هووخشتره و نبوپلسر کنار شهر با هم پیمان بستند. سپس هر دو به خانه برگشتند.', 'Cyaxares and Nabopolassar made a pact by the city. Then both went home.'), 'secure', ['abc3'], { route: [BABYLON, ASSUR] }),
  ev('c-nineveh', -612, B('خرداد–مرداد ۶۱۲ پ.م.', 'June–August 612 BCE'), 'battle', NINEVEH, B('محاصرهٔ سه‌ماهه', 'The three-month siege'), B('دو سپاه کنار دجله پیش رفتند و سه ماه نینوا را محاصره کردند. شهر افتاد و غارت شد.', 'The two armies advanced along the Tigris and besieged Nineveh for three months. The city fell and was plundered.'), 'secure', ['abc3'], { route: [ASSUR, NINEVEH] }),
  ev('c-home', -612, B('شهریور ۶۱۲ پ.م.', 'September 612 BCE'), 'campaign', ECBATANA, B('بازگشت با غنیمت', 'Home with the booty'), B('تاریخ‌نامه: در بیستم اولولو (۱۴ سپتامبر ۶۱۲) هووخشتره و سپاهش به خانه رفتند.', 'The chronicle: on 20 Ululu (14 September 612) Cyaxares and his army went home.'), 'secure', ['abc3'], { route: [NINEVEH, [45.5, 35.9], ECBATANA] }),
  ev('c-harran', -610, B('۶۱۰ پ.م.', '610 BCE'), 'battle', HARRAN, B('حران', 'Harran'), B('مادها و بابلیان به حران تاختند؛ آشوراوبالیط و سپاه مصر شهر را رها کردند.', 'The Medes and Babylonians marched on Harran; Ashur-uballit and the Egyptian army abandoned the city.'), 'secure', ['abc3'], { route: [ECBATANA, [44.5, 36.4], NINEVEH, [41.0, 36.7], HARRAN], ...camp }),
]

const ninevehQuote: DossierQuote = { text: 'From the month Simanu until the month Âbu - for three months - they subjected the city to a heavy siege. On the Nth day of the month Âbu they inflicted a major defeat upon a great people. At that time Sin-šar-iškun, king of Assyria, died. They carried off the vast booty of the city and the temple and turned the city into a ruin heap', fa: 'از ماه سیمانو تا ماه آبو، سه ماه، شهر را سخت در محاصره گرفتند. در روزی از ماه آبو شکستی بزرگ بر مردمی بزرگ وارد کردند. در آن هنگام سین‌شر‌ایشکون، شاه آشور، مرد. غنیمت فراوان شهر و معبد را بردند و شهر را تلی از ویرانه کردند.', ref: 'Fall of Nineveh Chronicle (ABC 3), year 14 of Nabopolassar, tr. Grayson 1975 as adapted on Livius.org', source: 'abc3' }
const armyQuote: DossierQuote = { text: 'He is said to have been a much greater soldier than his ancestors: it was he who first organized the men of Asia in companies and posted each arm apart, the spearmen and archers and cavalry: before this they were all mingled together in confusion.', fa: 'می‌گویند او از نیاکانش جنگاوری بسیار بزرگ‌تر بود: او نخستین کسی بود که مردان آسیا را دسته‌دسته سامان داد و هر رسته را جدا گماشت، نیزه‌داران و کمانداران و سواران را؛ پیش از آن همه درهم و آشفته بودند.', ref: 'Herodotus 1.103.1, tr. A. D. Godley (1920)', source: 'hdt' }
const scythQuote: DossierQuote = { text: 'besides exacting from each the tribute which was assessed, they rode about the land carrying off everyone\'s possessions.', fa: 'افزون بر گرفتن خراجی که بر هر کس بسته بودند، در سرزمین می‌تاختند و دارایی همه را می‌بردند.', ref: 'Herodotus 1.106.1, tr. A. D. Godley (1920)', source: 'hdt' }
const eclipseQuote: DossierQuote = { text: 'They were still warring with equal success, when it happened, at an encounter which occurred in the sixth year, that during the battle the day was suddenly turned to night.', fa: 'هنوز با بخت برابر می‌جنگیدند که در نبردی در سال ششم، در میانهٔ جنگ، روز ناگهان شب شد.', ref: 'Herodotus 1.74.2, tr. A. D. Godley (1920)', source: 'hdt' }

export const cyaxaresDossier: DossierSection[] = [
  sec('sources', 'منابع: یک لوح بابلی و یک تاریخ‌نگار یونانی', 'Sources: a Babylonian tablet and a Greek historian',
    [['دو منبع اصلی داریم. یکی لوح بابلی «سقوط نینوا» (ABC 3) در موزهٔ بریتانیاست که سال‌به‌سال، هم‌زمان با رویدادها، نوشته شده و نام هووخشتره (اوماکیشتر) را می‌برد. دیگری هرودوت است، تاریخ‌نگار یونانی که حدود ۱۵۰ سال بعد نوشت. دیاکونوف (ایرانیکا) می‌گوید منابع دیگر یونانی، که از بروسوس و کتسیاس می‌آیند، «ارزش کمی» دارند.'], ['We have two main sources. One is the Babylonian “Fall of Nineveh” tablet (ABC 3) in the British Museum, written year by year at the time and naming Cyaxares (Umakishtar). The other is Herodotus, a Greek historian writing about 150 years later. Diakonoff (Iranica) says the other Greek accounts, derived from Berossus and Ctesias, have “little value”.']],
    [['هر جا لوح بابلی چیزی می‌گوید، آن را «قطعی» گرفته‌ایم. هر جا تنها هرودوت سخن می‌گوید، با برچسب «به روایت هرودوت» آورده‌ایم. دیاکونوف می‌گوید برخی روایت‌های هرودوت، مانند ۲۸ سال فرمانروایی سکاها، با منابع شرقی نمی‌خواند.'], ['Wherever the Babylonian tablet speaks, we treat it as secure. Wherever only Herodotus speaks, we label it “according to Herodotus”. Diakonoff says some of Herodotus’ stories, such as the 28 years of Scythian rule, contradict the eastern sources.']],
    [['نخستین شاه بزرگ ایرانی را از زبان دیگران می‌شناسیم: یک کاتب بابلی و یک یونانی. از خود مادها هیچ نوشته‌ای نمانده است.'], ['We know the first great Iranian king through others: a Babylonian scribe and a Greek. No writing by the Medes themselves survives.']],
    ['abc3', 'bm-21901', 'hdt', 'diakonoff-ir', 'grayson1975'], { photos: ['chronicle'] }),
  sec('life', 'زندگی و پادشاهی به ترتیب', 'Life and reign in order',
    [[
      '۱. به روایت هرودوت پسر فرورتیش بود؛ دیاکونوف پدرش را شاید خشثریته می‌داند (پایین‌تر).',
      '۲. حدود ۶۱۵ پ.م. به خاک آشور رسید و اراپخا (کرکوک) را گرفت.',
      '۳. در ۶۱۴ پ.م. آشور، شهر دینی آشوریان، را گشود و با نبوپلسر بابلی پیمان بست.',
      '۴. در ۶۱۲ پ.م. با بابلیان نینوا را پس از سه ماه محاصره گرفت.',
      '۵. در ۶۱۰ پ.م. با بابلیان واپسین پایگاه آشور در حران را گرفت.',
      '۶. به روایت هرودوت پنج سال با لیدی جنگید؛ پس از خورشیدگرفتگی صلح شد و رود هالیس مرز شد.',
      '۷. در ۵۸۵/۵۸۴ پ.م. درگذشت و پسرش ایشتوویگو (آستیاگ) جانشین او شد.',
    ], [
      '1. According to Herodotus he was the son of Phraortes; Diakonoff suggests his father may have been Xšaθrita (below).',
      '2. Around 615 BCE he reached Assyrian soil and took Arrapha (Kirkuk).',
      '3. In 614 BCE he captured Assur, the religious city of the Assyrians, and made a pact with Nabopolassar of Babylon.',
      '4. In 612 BCE, with the Babylonians, he took Nineveh after a three-month siege.',
      '5. In 610 BCE, with the Babylonians, he took Harran, the last Assyrian stronghold.',
      '6. According to Herodotus he fought Lydia for five years; after an eclipse peace was made and the Halys became the frontier.',
      '7. He died in 585/584 BCE and his son Ishtumegu (Astyages) succeeded him.',
    ]],
    [['دیاکونوف می‌گوید هووخشتره «تنها شاه ماد با این نام است که در تاریخ گواهی شده». «هووخشترهٔ یکمِ» سدهٔ هشتم که برخی پیشنهاد کرده‌اند، به گفتهٔ او «خیالی» است.'], ['Diakonoff says Cyaxares is “the only historically attested Median king named Cyaxares”. The supposed “Cyaxares I” of the 8th century is, in his words, “a phantom”.']],
    [['در کمتر از ده سال، یک پادشاهی کوهستانی کمک کرد تا بزرگ‌ترین امپراتوری زمانه فرو بریزد.'], ['In under ten years a mountain kingdom helped bring down the greatest empire of its age.']],
    ['diakonoff-ir', 'abc3', 'hdt']),
  sec('army', 'سپاه: سازمان تازه، به روایت هرودوت', 'The army: a new organisation, according to Herodotus',
    [['هرودوت می‌گوید هووخشتره نخستین کسی بود که سپاه را بر پایهٔ رسته‌ها سامان داد: نیزه‌داران، کمانداران و سواران جدا. تاریخ‌نامهٔ بابلی از سازمان سپاه ماد چیزی نمی‌گوید؛ تنها نشان می‌دهد که این سپاه می‌توانست شهرهای بزرگ دیواردار را بگیرد.'], ['Herodotus says Cyaxares was the first to organise the army by arms: spearmen, archers and cavalry apart. The Babylonian chronicle says nothing about how the Median army was organised; it only shows that this army could take large walled cities.']],
    [['این ادعا را نمی‌توان با منبع دیگری سنجید. شاید هرودوت پیروزی‌های بزرگ هووخشتره را با یک «نوآوری» توضیح می‌دهد. پس آن را روایت هرودوت می‌دانیم، نه واقعیتی قطعی.'], ['This claim cannot be checked against another source. Herodotus may be explaining Cyaxares’ great victories by an “innovation”. So we treat it as Herodotus’ account, not a secure fact.']],
    [['گرفتن آشور و نینوا کار یک سپاه سازمان‌یافته بود؛ چگونگی‌اش را نمی‌دانیم.'], ['Taking Assur and Nineveh was the work of an organised army; how it was organised we do not know.']],
    ['hdt', 'abc3'], { quotes: [armyQuote] }),
  sec('assyria', 'پایان آشور: آشور، نینوا و حران', 'The end of Assyria: Assur, Nineveh and Harran',
    [['تاریخ‌نامهٔ بابلی گام‌به‌گام می‌گوید: در ۶۱۴ مادها تربیصو و آشور را گرفتند؛ نبوپلسر دیر رسید و دو شاه کنار شهر پیمان بستند. در ۶۱۲ دو سپاه کنار دجله پیش رفتند و سه ماه نینوا را محاصره کردند. شهر افتاد، شاه آشور مرد و شهر غارت شد. در ۶۱۰ مادها و بابلیان به حران تاختند و آشوریان و مصریان آن را رها کردند.'], ['The Babylonian chronicle tells it step by step: in 614 the Medes took Tarbisu and Assur; Nabopolassar arrived late and the two kings made a pact by the city. In 612 the two armies advanced along the Tigris and besieged Nineveh for three months. The city fell, the king of Assyria died and the city was plundered. In 610 the Medes and Babylonians marched on Harran and the Assyrians and Egyptians abandoned it.']],
    [['دیاکونوف می‌گوید پس از گرفتن آشور «غنیمتی عظیم» به ماد برده شد و ماد از «کشوری فقیر و نیمه‌دموکراتیک» به «امپراتوری ثروتمند شرقی» بدل شد. اینکه مادها در نبرد کرکمیش (۶۰۵) هم بودند روشن نیست. به گفتهٔ بروسوس، پیمان با ازدواج استوار شد؛ اینکه عروس دختر یا نوهٔ هووخشتره بود محل بحث است.'], ['Diakonoff says “a huge amount of booty” was carried off to Media after Assur, turning it from “a poor and semidemocratic country into a rich oriental empire”. Whether the Medes also fought at Carchemish (605) is unclear. According to Berossus the pact was sealed by a marriage; whether the bride was Cyaxares’ daughter or granddaughter is disputed.']],
    [['ویرانه‌های نینوا امروز کنار موصل است. دروازه‌های بازسازی‌شدهٔ بارویش یادآور شهری است که روزی پایتخت جهان خاور نزدیک بود.'], ['The ruins of Nineveh lie by modern Mosul. The rebuilt gates of its wall recall a city that was once the capital of the Near Eastern world.']],
    ['abc3', 'diakonoff-ir', 'zawadzki1988', 'grayson1975'], { photos: ['mashki'], quotes: [ninevehQuote] }),
  sec('scythians', 'سکاها: روایتی که با سندها نمی‌خواند', 'The Scythians: a story the documents do not match',
    [['هرودوت می‌گوید وقتی هووخشتره نینوا را محاصره کرده بود، سکاها به رهبری مادیس بر او تاختند و ۲۸ سال بر آسیا فرمان راندند. سپس هووخشتره سرانشان را به مهمانی خواند، مست کرد و کشت.'], ['Herodotus says that while Cyaxares was besieging Nineveh, the Scythians under Madyes attacked him and ruled Asia for 28 years. Then Cyaxares invited their leaders to a feast, made them drunk and killed them.']],
    [['دیاکونوف می‌گوید این گزارش با منابع شرقی «ناسازگار» است و شاید از یک اشتباه برآمده باشد: شاید سکاها در جنگ پدر هووخشتره با آشور بر مادها پیروز شده بودند. ۲۸ سال فرمانروایی سکاها را تاریخ‌نامهٔ بابلی تأیید نمی‌کند.'], ['Diakonoff says this report “contradicts the evidence of the oriental sources” and may rest on an error: the Scythians may have beaten the Medes during the war of Cyaxares’ father with Assyria. The Babylonian chronicle does not confirm 28 years of Scythian rule.']],
    [['خود هرودوت بدی فرمانروایی سکاها را در این می‌بیند که دارایی مردم را می‌بردند. داوری او ساده است: خراج یک چیز است و غارت چیز دیگر.'], ['Herodotus himself sees the evil of Scythian rule in their seizing people’s property. His judgement is simple: tribute is one thing, plunder another.']],
    ['hdt', 'diakonoff-ir'], { quotes: [scythQuote] }),
  sec('lydia', 'لیدی: خورشیدگرفتگی و مرز هالیس', 'Lydia: the eclipse and the Halys frontier',
    [['به روایت هرودوت، ماد و لیدی پنج سال جنگیدند. در سال ششم، در میانهٔ نبرد، روز شب شد و دو سپاه دست از جنگ کشیدند. سوئنسیس، شاه کیلیکیه، و شاه بابل میانجی شدند. رود هالیس مرز شد و آلیاتس دخترش آریِنیس را به همسری آستیاگ، پسر هووخشتره، داد.'], ['According to Herodotus, the Medes and Lydians fought for five years. In the sixth year, during a battle, day turned to night and both armies stopped fighting. Syennesis of Cilicia and the king of Babylon mediated. The river Halys became the frontier and Alyattes gave his daughter Aryenis in marriage to Astyages, son of Cyaxares.']],
    [['دیاکونوف خود جنگ و مرز هالیس را می‌پذیرد و می‌گوید هووخشتره سرانجام لیدیان را به درون آسیای کوچک راند. سال ۵۸۵ از یکی دانستن این خورشیدگرفتگی با گرفتگی ۲۸ مه ۵۸۵ می‌آید؛ دیاکونوف آن را با «اگر» می‌گوید. اینکه تالس آن را پیش‌بینی کرده بود هم تنها روایت هرودوت است.'], ['Diakonoff accepts the war itself and the Halys frontier and says Cyaxares finally drove the Lydians into the interior of Asia Minor. The year 585 comes from identifying the eclipse with that of 28 May 585; Diakonoff puts it with an “if”. That Thales foretold it is also only Herodotus’ story.']],
    [['جنگی که با یک پدیدهٔ آسمانی پایان یافت، با یک قرارداد استوار شد: مرزی روشن میان دو پادشاهی. مرز روشن، پایهٔ صلح و داد و ستد است.'], ['A war ended by a sign in the sky was settled by an agreement: a clear border between two kingdoms. A clear border is the basis of peace and trade.']],
    ['hdt', 'diakonoff-ir'], { quotes: [eclipseQuote] }),
  sec('property', 'دارایی و آزادی: از کشور فقیر به امپراتوری غنیمت', 'Property and liberty: from a poor country to an empire of booty',
    [['تاریخ‌نامهٔ بابلی بارها از غارت سخن می‌گوید: در آشور مادها «غارت کردند و ویران کردند»؛ در نینوا «غنیمت فراوان شهر و معبد» را بردند. دیاکونوف می‌گوید این غنیمت ماد را از «کشوری فقیر و نیمه‌دموکراتیک» به «امپراتوری ثروتمند شرقی» بدل کرد. از سند اقتصادی خود ماد، مانند قرارداد یا مالیات، چیزی نمانده است.'], ['The Babylonian chronicle speaks of plunder again and again: at Assur the Medes “plundered and sacked”; at Nineveh they carried off “the vast booty of the city and the temple”. Diakonoff says this booty turned Media from “a poor and semidemocratic country into a rich oriental empire”. No economic document from Media itself, such as a contract or tax record, survives.']],
    [['این خوانش ماست: ثروتی که از غارت می‌آید، نه از تولید و داد و ستد، قدرت را در دست شاه جمع می‌کند. اگر سخن دیاکونوف درست باشد، همین غنیمت جامعهٔ نیمه‌دموکراتیک ماد را به پادشاهی متمرکز بدل کرد. این تفسیر محل بحث است، چون از جامعهٔ ماد پیش از ۶۱۴ بسیار کم می‌دانیم.'], ['This is our reading: wealth that comes from plunder, not from production and exchange, concentrates power in the king’s hands. If Diakonoff is right, that same booty turned a semi-democratic Median society into a centralised monarchy. This interpretation is disputed, because we know very little about Median society before 614.']],
    [['امپراتوری‌ای که بر غنیمت ساخته شود، باید همیشه غنیمت تازه بیابد. ماد شصت سال پس از نینوا به دست کوروش افتاد.'], ['An empire built on booty must always find new booty. Media fell to Cyrus sixty years after Nineveh.']],
    ['abc3', 'diakonoff-ir', 'diakonoff-chi']),
  sec('family', 'خانواده و جانشینی', 'Family and succession',
    [[
      'پدر: هرودوت او را پسر فرورتیش می‌داند. دیاکونوف می‌گوید در سدهٔ هفتم هیچ «فرورتیش»ی در ماد گواهی نشده و پدر واقعی‌اش شاید خشثریته (کشتریتی) بوده باشد که حدود ۶۷۳ پ.م. شورشی موفق بر آشور رهبری کرد.',
      'پسر: ایشتوویگو (آستیاگ)، واپسین شاه ماد. به روایت هرودوت با آریِنیس، دختر شاه لیدی، ازدواج کرد.',
      'پیوند با بابل: به گفتهٔ بروسوس، نبوکدنصر، پسر نبوپلسر، با آمیتیس، دختر (یا نوهٔ) شاه ماد، ازدواج کرد.',
    ], [
      'Father: Herodotus makes him the son of Phraortes. Diakonoff says no Phraortes is attested in 7th-century Media and his real father may have been Xšaθrita (Kaštariti), who led a successful revolt against Assyria about 673 BCE.',
      'Son: Ishtumegu (Astyages), the last Median king. According to Herodotus he married Aryenis, daughter of the king of Lydia.',
      'The Babylonian link: according to Berossus, Nebuchadnezzar, son of Nabopolassar, married Amytis, daughter (or granddaughter) of the Median king.',
    ]],
    [['یکی دانستن پدر هووخشتره با خشثریته پیشنهاد کامرون و دیاکونوف است و محل بحث است. «باغ‌های معلق» بابل که در داستان‌های پسین برای آمیتیس ساخته شد، در منابع هم‌زمان نیامده است؛ آن را اینجا نمی‌آوریم.'], ['Identifying Cyaxares’ father with Xšaθrita is a proposal of Cameron and Diakonoff and is disputed. The “Hanging Gardens” that later stories say were built for Amytis are not in the contemporary sources; we leave them out here.']],
    [['سه ازدواج شاهانه، سه پیمان: ماد، بابل و لیدی با خویشاوندی به هم بسته شدند.'], ['Three royal marriages, three alliances: Media, Babylon and Lydia were bound by kinship.']],
    ['hdt', 'diakonoff-ir'], { photos: ['hegmataneh'] }),
]

export const cyaxares: FeaturedKing = {
  slug: 'cyaxares',
  name: B('هووخشتره', 'Cyaxares'),
  dynastyName: B('ماد', 'The Medes'),
  reign: B('حدود ۶۲۵–۵۸۵ پ.م.', 'c. 625–585 BCE'),
  title: B('هووخشتره؛ شاه مادی که نینوا را گرفت', 'Cyaxares: the Median king who took Nineveh'),
  lede: B(
    'شاه ماد که با نبوپلسر بابلی به عمر امپراتوری آشور پایان داد: آشور در ۶۱۴، نینوا در ۶۱۲ و حران در ۶۱۰ پ.م. این رویدادها را از یک لوح بابلی هم‌زمان می‌دانیم. داستان‌های سکاها، سازمان سپاه و خورشیدگرفتگی را هرودوت گفته است و همه جا با برچسب او آمده‌اند. لشکرکشی را روی نقشهٔ متحرک ببینید.',
    'The Median king who, with Nabopolassar of Babylon, ended the Assyrian empire: Assur in 614, Nineveh in 612 and Harran in 610 BCE. We know these events from a contemporary Babylonian tablet. The stories of the Scythians, the army reform and the eclipse come from Herodotus and are labelled as his. Follow the campaign on the animated map.',
  ),
  stats: [
    { n: B('۳ ماه', '3 months'), l: B('محاصرهٔ نینوا (ABC 3)', 'siege of Nineveh (ABC 3)') },
    { n: B('۶۱۲', '612'), l: B('سال سقوط نینوا (پ.م.)', 'fall of Nineveh (BCE)') },
    { n: B('۵ سال', '5 years'), l: B('جنگ با لیدی، به روایت هرودوت', 'war with Lydia, per Herodotus') },
    { n: B('هالیس', 'Halys'), l: B('مرز ماد و لیدی', 'Median–Lydian frontier') },
  ],
  mapTitle: B('نقشهٔ متحرک: زندگی و پادشاهی', 'Animated map: life and reign'),
  events: cyaxaresEvents,
  span: [-625, -585],
  campaign: {
    id: 'reign',
    title: B('پایان آشور، گام‌به‌گام (۶۱۵–۶۱۰ پ.م.)', 'The end of Assyria, step by step (615–610 BCE)'),
    intro: { fa: ['از هگمتانه تا اراپخا، آشور، نینوا و حران. هر گام از تاریخ‌نامهٔ بابلی ABC 3 است؛ راه‌ها طرح‌وارند.'], en: ['From Ecbatana to Arrapha, Assur, Nineveh and Harran. Each step is from the Babylonian chronicle ABC 3; the routes are sketches.'] },
    events: campaignEvents, span: [-615, -610], view: [38.2, 32.0, 49.6, 38.4],
    places: [
      { name: B('هگمتانه', 'Ecbatana'), c: ECBATANA }, { name: B('اراپخا (کرکوک)', 'Arrapha (Kirkuk)'), c: ARRAPHA },
      { name: B('نینوا', 'Nineveh'), c: NINEVEH, left: true, dy: -1 }, { name: B('تربیصو', 'Tarbisu'), c: TARBISU, dy: -2 },
      { name: B('آشور', 'Assur'), c: ASSUR, left: true, dy: 1 }, { name: B('حران', 'Harran'), c: HARRAN },
      { name: B('بابل', 'Babylon'), c: BABYLON },
    ],
    clip: { gif: B('/media/cyaxares/reign-fa.gif', '/media/cyaxares/reign-en.gif'), mp4: B('/media/cyaxares/reign-fa.mp4', '/media/cyaxares/reign-en.mp4'), webm: B('/media/cyaxares/reign-fa.webm', '/media/cyaxares/reign-en.webm'), poster: B('/media/cyaxares/reign-fa.png', '/media/cyaxares/reign-en.png'), width: 958, height: 356 },
  },
  shareImage: '/media/cyaxares/reign-en.png',
  dossier: cyaxaresDossier,
  synthesis: { title: B('جمع‌بندی: پیروزی بزرگ، سند اندک', 'Synthesis: a great victory, few documents'), paras: {
    fa: [
      'هووخشتره کار بزرگی کرد: همراه بابل، امپراتوری‌ای را که سه سده بر خاور نزدیک چیره بود از پا درآورد. این را از یک لوح بابلی می‌دانیم، نه از روایت‌های پسین. بیشتر داستان‌های رنگارنگ او، از سکاها تا خورشیدگرفتگی، از هرودوت است و باید با احتیاط خوانده شوند.',
      'از دید مالکیت، ثروت ماد از غنیمت آشور و نینوا آمد. به گفتهٔ دیاکونوف همین ثروت ماد را به امپراتوری بدل کرد. اما پایدارترین دستاورد هووخشتره شاید یک قرارداد بود: مرز هالیس، که جنگ با لیدی را پایان داد.',
    ],
    en: [
      'Cyaxares did something great: with Babylon he brought down an empire that had dominated the Near East for three centuries. We know this from a Babylonian tablet, not from later stories. Most of his colourful tales, from the Scythians to the eclipse, come from Herodotus and must be read with care.',
      'Through the lens of property, Media’s wealth came from the booty of Assur and Nineveh. In Diakonoff’s words, that wealth turned Media into an empire. But Cyaxares’ most lasting achievement may have been an agreement: the Halys frontier, which ended the war with Lydia.',
    ],
  }, sources: ['abc3', 'diakonoff-ir', 'hdt'] },
  sources: cyaxaresSources,
  photos: cyaxaresPhotos,
  related: [
    { href: { fa: '/king/astyages', en: '/king/astyages' }, label: B('ایشتوویگو (آستیاگ)، پسرش', 'Astyages, his son') },
    { href: { fa: '/king/cyrus-ii', en: '/king/cyrus-ii' }, label: B('کوروش بزرگ', 'Cyrus the Great') },
    { href: { fa: '/dynasty/medes', en: '/dynasty/medes' }, label: B('دودمان ماد', 'The Median dynasty') },
  ],
  wikipedia: 'https://en.wikipedia.org/wiki/Cyaxares',
}
