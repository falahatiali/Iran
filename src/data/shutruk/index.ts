/**
 * Shutruk-Nakhunte (Elam, Shutrukid dynasty), c. 1184–1155 BCE (middle chronology; Vallat dates the
 * dynasty c. 1210–1100). Main narrative after F. Vallat, "Elam i. The history of Elam" (Iranica) and
 * D. T. Potts, The Archaeology of Elam (1999), pp. 232–237. His own Elamite texts are collected in
 * F. W. König, Die elamischen Königsinschriften (1965). Map years are schematic except 1158.
 */
import type { Coord, DossierSection, FeaturedKing, FeaturedSource } from '../featured/types'
import type { CommonsPhoto } from '../places/types'
import { clipFor, ev, note, sec } from '../late-achaemenid/common'

const B = (fa: string, en: string) => ({ fa, en })
const SUSA: Coord = [48.257, 32.19]
const DUR_UNTASH: Coord = [48.522, 32.009]
const ANSHAN: Coord = [52.41, 30.0]
const DER: Coord = [45.98, 33.12]
const ESHNUNNA: Coord = [44.73, 33.48]
const SIPPAR: Coord = [44.25, 33.06]
const AKKAD: Coord = [44.55, 33.25]
const BABYLON: Coord = [44.42, 32.54]

const IR = (slug: string) => `https://www.iranicaonline.org/articles/${slug}/`
export const shutrukSources: FeaturedSource[] = [
  { id: 'vallat', author: 'F. Vallat, Encyclopaedia Iranica', title: 'Elam i. The history of Elam', year: '1998, updated 2016', url: IR('elam-i'), note: { fa: 'روایت اصلی ما از دودمان شوتروکی؛ دودمان را حدود ۱۲۱۰–۱۱۰۰ پ.م. می‌گذارد.', en: 'Our main account of the Shutrukid dynasty; dates the dynasty c. 1210–1100 BCE.' } },
  { id: 'potts1999', author: 'D. T. Potts', title: 'The Archaeology of Elam: Formation and Transformation of an Ancient Iranian State (pp. 232–237)', year: '1999', note: { fa: 'کتاب مرجع باستان‌شناسی ایلام؛ غنیمت‌های شوتروک‌ناخونته و کتیبه‌هایش را بررسی می‌کند.', en: 'The standard archaeology of Elam; discusses Shutruk-Nakhunte’s trophies and their inscriptions.' } },
  { id: 'konig1965', author: 'F. W. König', title: 'Die elamischen Königsinschriften (Archiv für Orientforschung, Beiheft 16)', year: '1965', note: { fa: 'مجموعهٔ کتیبه‌های شاهان ایلام، از جمله متن‌هایی که شوتروک‌ناخونته بر غنیمت‌ها نوشت.', en: 'The corpus of Elamite royal inscriptions, including the texts Shutruk-Nakhunte added to his trophies.' } },
  { id: 'vdm2015', author: 'M. Van De Mieroop', title: 'A History of the Ancient Near East, ca. 3000–323 BC, 3rd ed. (p. 199)', year: '2015', note: { fa: 'ترجمهٔ انگلیسی کتیبهٔ شوتروک‌ناخونته بر ستون نرام‌سین.', en: 'English translation of Shutruk-Nakhunte’s inscription on the Naram-Sin stele.' } },
  { id: 'potts2006', author: 'D. T. Potts', title: 'Elamites and Kassites in the Persian Gulf, Journal of Near Eastern Studies 65.2, pp. 111–119', year: '2006', url: 'https://doi.org/10.1086/504986' },
  { id: 'vandijk1986', author: 'J. van Dijk', title: 'Die dynastischen Heiraten zwischen Kassiten und Elamern, Orientalia 55, pp. 159–170', year: '1986', note: { fa: 'انتشار «نامهٔ برلین»: نامه‌ای که شاهی ایلامی در آن با تکیه بر ازدواج‌های کاسی، تخت بابل را حق خود می‌داند.', en: 'Publication of the “Berlin letter”: an Elamite king claims the throne of Babylon through Kassite marriages.' } },
  { id: 'vallat1985', author: 'F. Vallat', title: 'Hutelutuš-Inšušinak et la famille royale élamite, Revue d’Assyriologie 79, pp. 43–50', year: '1985' },
  { id: 'scheil1902', author: 'V. Scheil', title: 'Textes élamites-sémitiques, 2e série (Mémoires de la Délégation en Perse 4)', year: '1902', url: 'https://archive.org/details/mmoires04franuoft', note: { fa: 'نخستین انتشار قانون حمورابی؛ شیل گمان زد که شوتروک‌ناخونته ستون‌های پاک‌شده را برای کتیبهٔ خودش تراشید.', en: 'First edition of the Code of Hammurabi; Scheil guessed that Shutruk-Nakhunte had the erased columns cleared for his own text.' } },
  { id: 'roth', author: 'M. T. Roth', title: 'Law Collections from Mesopotamia and Asia Minor (SBL Writings from the Ancient World 6)', year: '1995; 2nd ed. 1997' },
  { id: 'harper1992', author: 'P. O. Harper, J. Aruz, F. Tallon (eds.)', title: 'The Royal City of Susa: Ancient Near Eastern Treasures in the Louvre', year: '1992', url: 'https://archive.org/details/RoyalCityofSusaAncientNearEasternTreasuresintheLouvre' },
  { id: 'louvre-code', author: 'Musée du Louvre', title: 'Code de Hammurabi, Sb 8 (collections record)', year: 'online', url: 'https://collections.louvre.fr/en/ark:/53355/cl010174436', note: { fa: 'یافته در شوش، ۱۹۰۱–۱۹۰۲، در کاوش ژاک دو مورگان؛ با «تقسیم پس از کاوش» به لوور رسید.', en: 'Found at Susa in 1901–1902 in Jacques de Morgan’s excavation; came to the Louvre through the post-excavation division of finds.' } },
]
export const shutrukSourceIds = new Set(shutrukSources.map((s) => s.id))

const t = (path: string) => `https://upload.wikimedia.org/wikipedia/commons/thumb/${path}`
const f = (name: string) => `https://commons.wikimedia.org/wiki/File:${name}`
/** Licence and author read from the Commons API on 2026-10-30. */
export const shutrukPhotos: CommonsPhoto[] = [
  { id: 'naram', src: t('3/33/Victory_stele_of_Naram_Sin_9064.jpg/960px-Victory_stele_of_Naram_Sin_9064.jpg'), page: f('Victory_stele_of_Naram_Sin_9064.jpg'), author: 'Rama', license: 'CC BY-SA 3.0 FR', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/fr/', caption: B('ستون پیروزی نرام‌سین (حدود ۲۲۵۰ پ.م.)، که شوتروک‌ناخونته از سیپار به شوش برد. لوور، Sb 4', 'The victory stele of Naram-Sin (c. 2250 BCE), carried from Sippar to Susa by Shutruk-Nakhunte. Louvre, Sb 4') },
  { id: 'naram-elamite', src: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Naram-Sin_stele_inscription_in_Elamite.jpg', page: f('Naram-Sin_stele_inscription_in_Elamite.jpg'), author: 'Rama', license: 'CC BY-SA 3.0 FR', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/fr/', caption: B('کتیبهٔ ایلامی شوتروک‌ناخونته روی کوهِ ستون نرام‌سین: هزار سال پس از ساخت ستون افزوده شد', 'Shutruk-Nakhunte’s Elamite inscription on the mountain of the Naram-Sin stele, added a thousand years after the stele was made') },
  { id: 'code', src: 'https://upload.wikimedia.org/wikipedia/commons/6/64/P1050763_Louvre_code_Hammurabi_face_rwk.JPG', page: f('P1050763_Louvre_code_Hammurabi_face_rwk.JPG'), author: 'Mbzt', license: 'CC BY 3.0', licenseUrl: 'https://creativecommons.org/licenses/by/3.0', caption: B('ستون قانون حمورابی، یافته در شوش. لوور، Sb 8', 'The Code of Hammurabi stele, found at Susa. Louvre, Sb 8') },
  { id: 'manishtushu', src: t('1/1a/Statue_de_Manishtusu_-_Sb_47_-_Antiquit%C3%A9s_orientales_du_Louvre.jpg/960px-Statue_de_Manishtusu_-_Sb_47_-_Antiquit%C3%A9s_orientales_du_Louvre.jpg'), page: f('Statue_de_Manishtusu_-_Sb_47_-_Antiquités_orientales_du_Louvre.jpg'), author: 'Shonagon', license: 'CC0', caption: B('تندیس مانیشتوشو، شاه اکد؛ کتیبهٔ ایلامی شوتروک‌ناخونته می‌گوید آن را به شوش آورد. لوور، Sb 47', 'Statue of Manishtushu, king of Akkad; Shutruk-Nakhunte’s Elamite text says he brought it to Susa. Louvre, Sb 47') },
  { id: 'eshnunna', src: t('e/e5/Regno_di_eshnunna%2C_statuetta_di_un_sovrano_mesopotamico_seduto%2C_usurpato_dal_re_elamita_shutruk-nahhunte%2C_in_calcare%2C_2000-1900_ac_ca.%2C_SB_58.jpg/960px-Regno_di_eshnunna%2C_statuetta_di_un_sovrano_mesopotamico_seduto%2C_usurpato_dal_re_elamita_shutruk-nahhunte%2C_in_calcare%2C_2000-1900_ac_ca.%2C_SB_58.jpg'), page: f('Regno_di_eshnunna,_statuetta_di_un_sovrano_mesopotamico_seduto,_usurpato_dal_re_elamita_shutruk-nahhunte,_in_calcare,_2000-1900_ac_ca.,_SB_58.jpg'), author: 'Francesco Bini (Sailko)', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0', caption: B('تندیسک شاهی نشسته از اشنونا (حدود ۲۰۰۰ پ.م.) که شوتروک‌ناخونته نام خود را بر آن نوشت. لوور، Sb 58', 'Seated ruler from Eshnunna (c. 2000 BCE) that Shutruk-Nakhunte re-inscribed with his own name. Louvre, Sb 58') },
]

const chrono = note('سال‌ها نمادین‌اند. پادشاهی او را معمولاً حدود ۱۱۸۴–۱۱۵۵ پ.م. می‌گذارند؛ والا کل دودمان را حدود ۱۲۱۰–۱۱۰۰ پ.م. می‌داند.', 'Years are schematic. His reign is usually put at c. 1184–1155 BCE; Vallat dates the whole dynasty c. 1210–1100 BCE.')

export const shutrukEvents = [
  ev('accession', -1184, B('حدود ۱۱۸۴ پ.م.', 'c. 1184 BCE'), 'admin', SUSA, B('شاه انشان و شوش', 'King of Anshan and Susa'), B('شوتروک‌ناخونته، پسر هالوتوش‌اینشوشیناک، به پادشاهی رسید و دودمان تازه‌ای بنیاد گذاشت. او خود را «شاه انشان و شوش» خواند، یعنی شاه کوهستان فارس و دشت خوزستان با هم.', 'Shutruk-Nakhunte, son of Hallutush-Inshushinak, came to the throne and founded a new dynasty. He called himself “king of Anshan and Susa”: king of the Fars highlands and the Khuzestan plain together.'), 'probable', ['vallat', 'potts1999', 'konig1965'], { route: [ANSHAN, SUSA], ...chrono }),
  ev('marriage', -1180, B('آغاز پادشاهی', 'early reign'), 'admin', BABYLON, B('همسری از خاندان کاسی', 'A Kassite bride'), B('گفته می‌شود او با دختر ملی‌شیپاک، شاه کاسی بابل، ازدواج کرد. شاهان ایلام و بابل نسل‌ها با هم وصلت کرده بودند.', 'He is said to have married a daughter of Meli-Shipak, the Kassite king of Babylon. The royal houses of Elam and Babylon had intermarried for generations.'), 'disputed', ['potts2006', 'vandijk1986'], { route: [BABYLON, SUSA], ...note('این ازدواج از منابع غیرمستقیم بازسازی شده است.', 'This marriage is reconstructed from indirect evidence.') }),
  ev('letter', -1170, B('پیش از ۱۱۵۸ پ.م.', 'before 1158 BCE'), 'admin', BABYLON, B('ادعای تخت بابل', 'A claim to the throne of Babylon'), B('در «نامهٔ برلین» شاهی ایلامی همهٔ ازدواج‌های شاهان ایلام با شاهزاده‌خانم‌های کاسی را برمی‌شمارد و تخت بابل را حق خود می‌داند. والا می‌گوید نویسنده شاید شوتروک‌ناخونته بود.', 'In the “Berlin letter” an Elamite king lists every marriage of Elamite kings to Kassite princesses and claims the throne of Babylon as his right. Vallat suggests the writer may have been Shutruk-Nakhunte.'), 'disputed', ['vandijk1986', 'vallat'], note('نام نویسنده و گیرندهٔ نامه از میان رفته است؛ نامه نسخه‌ای بابلیِ بسیار دیرتر است.', 'The names of sender and addressee are lost; the letter is a much later Babylonian copy.')),
  ev('dur-untash', -1165, B('میانهٔ پادشاهی', 'mid-reign'), 'religion', DUR_UNTASH, B('کتیبه‌ها از چغازنبیل به شوش', 'Inscriptions from Chogha Zanbil to Susa'), B('شوتروک‌ناخونته می‌گوید چند کتیبه را از دوراونتاش (چغازنبیل)، شهری که دیگر رها شده بود، به شوش برد. شوش دوباره مرکز ایلام شد.', 'Shutruk-Nakhunte reports carrying inscriptions from Dur-Untash (Chogha Zanbil), by then abandoned, to Susa. Susa became the heart of Elam again.'), 'probable', ['vallat', 'konig1965'], { route: [DUR_UNTASH, SUSA], ...chrono }),
  ev('raid', -1158, B('۱۱۵۸ پ.م.', '1158 BCE'), 'battle', SIPPAR, B('یورش به بابل', 'The raid on Babylonia'), B('او به اکد، بابل و اشنونا یورش برد. سیپار را گرفت و ستون نرام‌سین و احتمالاً قانون حمورابی را به غنیمت برد. تندیس‌های مانیشتوشو را هم برد.', 'He raided Akkad, Babylon and Eshnunna. He took Sippar and carried off the Naram-Sin stele and, probably, the Code of Hammurabi. He also took statues of Manishtushu.'), 'secure', ['vallat', 'potts1999', 'konig1965'], { route: [SUSA, DER, ESHNUNNA, SIPPAR] }),
  ev('babylon', -1158, B('۱۱۵۸ پ.م.', '1158 BCE'), 'battle', BABYLON, B('پایان زبابا‌شوما‌ایدینا', 'The end of Zababa-shuma-iddina'), B('او شاه کاسی، زبابا‌شوما‌ایدینا، را کشت و پسر بزرگش کوتیرناخونته را بر تخت بابل نشاند.', 'He killed the Kassite king Zababa-shuma-iddina and put his eldest son, Kutir-Nakhunte, on the throne of Babylon.'), 'probable', ['vallat'], { route: [SIPPAR, BABYLON], ...note('والا این را در ۱۱۵۸ می‌گذارد؛ جزئیات از منابع پراکنده بازسازی شده است.', 'Vallat dates this to 1158; the details are reconstructed from scattered sources.') }),
  ev('trophies', -1157, B('پس از ۱۱۵۸ پ.م.', 'after 1158 BCE'), 'religion', SUSA, B('غنیمت‌ها برای اینشوشیناک', 'Trophies for Inshushinak'), B('غنیمت‌ها در شوش در پرستشگاه اینشوشیناک، خدای شهر، گذاشته شدند. او بر بسیاری از آن‌ها کتیبه‌ای به زبان ایلامی افزود و نام خود را نوشت.', 'The trophies were set up at Susa in the sanctuary of Inshushinak, the city god. On many of them he added an Elamite inscription with his own name.'), 'secure', ['konig1965', 'potts1999', 'vdm2015'], { route: [BABYLON, DER, SUSA] }),
  ev('succession', -1155, B('حدود ۱۱۵۵ پ.م.', 'c. 1155 BCE'), 'admin', SUSA, B('جانشینی کوتیرناخونته', 'Kutir-Nakhunte succeeds'), B('پس از مرگ او، کوتیرناخونته شاه شد و با برکناری انلیل‌نادین‌آهه به دودمان کاسی بابل پایان داد. پس از او برادرش شیلهک‌اینشوشیناک شاه شد.', 'After his death Kutir-Nakhunte became king and ended the Kassite dynasty of Babylon by deposing Enlil-nadin-ahi. His brother Shilhak-Inshushinak followed him.'), 'probable', ['vallat'], chrono),
]

const campaignEvents = [
  ev('susa', -1158, B('۱۱۵۸ پ.م.', '1158 BCE'), 'campaign', SUSA, B('حرکت از شوش', 'Setting out from Susa'), B('سپاه ایلام از شوش به سوی غرب و دجله راه افتاد.', 'The Elamite army set out west from Susa towards the Tigris.'), 'probable', ['vallat', 'potts1999'], note('مسیر دقیق نامعلوم است؛ خط‌ها طرح‌وارند.', 'The exact route is unknown; the lines are sketches.')),
  ev('eshnunna', -1158, B('۱۱۵۸', '1158'), 'battle', ESHNUNNA, B('اشنونا: تندیس‌ها', 'Eshnunna: the statues'), B('از اشنونا تندیس‌هایی برده شد. والا تندیس‌های مانیشتوشو را از اینجا می‌داند. شوتروک‌ناخونته روی تندیسکی نشسته از اشنونا نام خود را نوشت.', 'Statues were taken from Eshnunna. Vallat places the Manishtushu statues here. Shutruk-Nakhunte wrote his own name on a seated statuette from Eshnunna.'), 'probable', ['vallat', 'harper1992'], { route: [SUSA, DER, ESHNUNNA] }),
  ev('akkad', -1158, B('۱۱۵۸', '1158'), 'battle', AKKAD, B('اکد: تندیس مانیشتوشو', 'Akkad: a Manishtushu statue'), B('کتیبهٔ ایلامی روی یک تندیس مانیشتوشو (Sb 47) می‌گوید آن را از اکد آورد.', 'The Elamite text on one Manishtushu statue (Sb 47) says it was brought from Akkad.'), 'disputed', ['harper1992', 'vallat'], { route: [ESHNUNNA, AKKAD], ...note('جای شهر اکد هنوز پیدا نشده و نقطه حدسی است. منابع دربارهٔ اینکه کدام تندیس از اکد و کدام از اشنونا آمد هم‌نظر نیستند.', 'The city of Akkad has never been located; the point is a guess. Sources differ on which statues came from Akkad and which from Eshnunna.') }),
  ev('sippar', -1158, B('۱۱۵۸', '1158'), 'battle', SIPPAR, B('سیپار: ستون نرام‌سین و قانون حمورابی', 'Sippar: the Naram-Sin stele and Hammurabi’s Code'), B('او در کتیبه‌اش می‌گوید سیپار را شکست داد و ستون نرام‌سین را برد. قانون حمورابی هم به احتمال زیاد از سیپار آمد.', 'In his inscription he says he defeated Sippar and took the Naram-Sin stele. The Code of Hammurabi most likely came from Sippar too.'), 'probable', ['vdm2015', 'roth', 'konig1965'], { route: [AKKAD, SIPPAR], ...note('اینکه قانون حمورابی از سیپار آمد، پیشنهاد روث است؛ متن خود ستون جای آن را نمی‌گوید.', 'That the Code came from Sippar is Roth’s suggestion; the stele itself does not say where it stood.') }),
  ev('babylon', -1158, B('۱۱۵۸', '1158'), 'battle', BABYLON, B('بابل: شاهی تازه', 'Babylon: a new king'), B('زبابا‌شوما‌ایدینا کشته شد و کوتیرناخونته بر تخت بابل نشست.', 'Zababa-shuma-iddina was killed and Kutir-Nakhunte took the throne of Babylon.'), 'probable', ['vallat'], { route: [SIPPAR, BABYLON] }),
  ev('return', -1157, B('پس از ۱۱۵۸', 'after 1158'), 'religion', SUSA, B('بازگشت با غنیمت‌ها', 'Home with the trophies'), B('ستون‌ها و تندیس‌ها به شوش رسیدند و به اینشوشیناک پیشکش شدند. سه هزار سال بعد، باستان‌شناسان فرانسوی آن‌ها را همان‌جا یافتند.', 'The stelae and statues reached Susa and were offered to Inshushinak. Three thousand years later French archaeologists found them there.'), 'secure', ['konig1965', 'louvre-code', 'potts1999'], { route: [BABYLON, [45.3, 32.9], DER, [47.2, 32.6], SUSA] }),
]

const naramQuote = { text: 'I am Shutruk-Nahhunte, son of Hallutush-Inshushinak, beloved servant of the god Inshushinak, king of Anshan and Susa, who has enlarged the kingdom, who takes care of the lands of Elam, the lord of the land of Elam. When the god Inshushinak gave me the order, I defeated Sippar. I took the stele of Naram-Sin and carried it off, bringing it to the land of Elam. For Inshushinak, my god, I set it as an offering.', fa: 'من شوتروک‌ناخونته‌ام، پسر هالوتوش‌اینشوشیناک، بندهٔ محبوب خدا اینشوشیناک، شاه انشان و شوش، که پادشاهی را گسترش داد، که از سرزمین‌های ایلام نگهداری می‌کند، سرور سرزمین ایلام. چون خدا اینشوشیناک به من فرمان داد، سیپار را شکست دادم. ستون نرام‌سین را گرفتم و بردم و به سرزمین ایلام آوردم. آن را برای اینشوشیناک، خدای خودم، پیشکش کردم.', ref: 'Elamite inscription on the Naram-Sin stele (Louvre Sb 4), tr. in M. Van De Mieroop 2015, p. 199', source: 'vdm2015' }

export const shutrukDossier: DossierSection[] = [
  sec('sources', 'منابع: شاهی که روی غنیمت‌هایش نوشت', 'Sources: a king who wrote on his trophies',
    [['بیشتر آنچه از شوتروک‌ناخونته می‌دانیم از کتیبه‌های خود اوست. او این متن‌ها را به زبان ایلامی روی ستون‌ها و تندیس‌هایی نوشت که از میان‌رودان به شوش آورد. کونیگ (۱۹۶۵) این کتیبه‌ها را گرد آورده است. بقیه از منابع بابلی و از «نامهٔ برلین» می‌آید، که نسخه‌ای بسیار دیرتر است.'], ['Most of what we know of Shutruk-Nakhunte comes from his own inscriptions. He wrote them in Elamite on the stelae and statues he brought from Mesopotamia to Susa. König (1965) collected these texts. The rest comes from Babylonian sources and the “Berlin letter”, a much later copy.']],
    [['سال‌شمار او محل بحث است. بیشتر کتاب‌ها پادشاهی‌اش را حدود ۱۱۸۴–۱۱۵۵ پ.م. می‌گذارند. والا کل دودمان شوتروکی را حدود ۱۲۱۰–۱۱۰۰ پ.م. می‌داند. تنها تاریخ نسبتاً محکم، یورش به بابل در ۱۱۵۸ پ.م. است.'], ['His chronology is disputed. Most books put his reign at c. 1184–1155 BCE. Vallat dates the whole Shutrukid dynasty c. 1210–1100 BCE. The only fairly firm date is the raid on Babylon in 1158 BCE.']],
    [['وقتی شاهی خودش داستانش را می‌نویسد، باید پرسید چه چیزی را نگفته است: از مردمی که غنیمت‌ها را جابه‌جا کردند یا خسارت دیدند، هیچ متنی نمانده است.'], ['When a king writes his own story, we must ask what he left out: no text survives from the people who hauled the trophies or suffered the raids.']],
    ['konig1965', 'potts1999', 'vallat', 'vandijk1986'], { photos: ['naram-elamite'] }),
  sec('life', 'زندگی و پادشاهی به ترتیب', 'Life and reign in order',
    [[
      '۱. پسر هالوتوش‌اینشوشیناک. هیچ مدرکی نیست که پدرش شاه بوده باشد؛ پس شاید شوتروک‌ناخونته خود قدرت را گرفت و دودمانی تازه ساخت.',
      '۲. گفته می‌شود با دختر ملی‌شیپاک، شاه کاسی بابل، ازدواج کرد.',
      '۳. چند کتیبه را از چغازنبیلِ رهاشده به شوش برد و شوش را دوباره مرکز کرد.',
      '۴. در ۱۱۵۸ پ.م. به میان‌رودان یورش برد: اکد، سیپار، اشنونا و بابل. شاه بابل را کشت و پسرش کوتیرناخونته را به جای او گذاشت.',
      '۵. غنیمت‌ها را در شوش به اینشوشیناک پیشکش کرد و بر آن‌ها نام خود را نوشت.',
      '۶. حدود ۱۱۵۵ پ.م. درگذشت. سه پسرش، کوتیرناخونته، شیلهک‌اینشوشیناک و هوتلوتوش‌اینشوشیناک، پس از او شاه شدند.',
    ], [
      '1. Son of Hallutush-Inshushinak. There is no evidence that his father was king, so Shutruk-Nakhunte may have seized power and founded a new line.',
      '2. He is said to have married a daughter of Meli-Shipak, the Kassite king of Babylon.',
      '3. He moved inscriptions from abandoned Chogha Zanbil to Susa and made Susa the centre again.',
      '4. In 1158 BCE he raided Mesopotamia: Akkad, Sippar, Eshnunna and Babylon. He killed the king of Babylon and put his son Kutir-Nakhunte in his place.',
      '5. He offered the trophies to Inshushinak at Susa and wrote his name on them.',
      '6. He died c. 1155 BCE. Three sons, Kutir-Nakhunte, Shilhak-Inshushinak and Hutelutush-Inshushinak, reigned after him.',
    ]],
    [['والا دورهٔ شوتروکی را دوران شکوه دوبارهٔ شوش می‌داند: ثروتی که از این لشکرکشی‌ها آمد، به شاهان اجازه داد معبدهای شوش را با شکوه بازسازی کنند.'], ['Vallat sees the Shutrukid age as Susa’s second flowering: wealth from these campaigns let the kings rebuild Susa’s temples in splendour.']],
    [['شکوه یک پایتخت اغلب با ثروتی ساخته می‌شود که از جای دیگری برده شده است.'], ['A capital’s splendour is often built on wealth taken from somewhere else.']],
    ['vallat', 'potts1999', 'potts2006']),
  sec('titles', 'لقب‌ها: خودش چه می‌گفت؟', 'Titles: what did he call himself?',
    [['در کتیبهٔ روی ستون نرام‌سین، او خود را چنین می‌نامد: «بندهٔ محبوب اینشوشیناک»، «شاه انشان و شوش»، «کسی که پادشاهی را گسترش داد»، «نگهبان سرزمین‌های ایلام» و «سرور سرزمین ایلام». او هیچ لقب دیگری مانند «بزرگ» یا «فاتح» ندارد که منبعی آن را تأیید کند.'], ['In the inscription on the Naram-Sin stele he calls himself “beloved servant of Inshushinak”, “king of Anshan and Susa”, “who has enlarged the kingdom”, “who takes care of the lands of Elam” and “lord of the land of Elam”. No source gives him any later byname such as “the Great” or “the Conqueror”.']],
    [['«شاه انشان و شوش» لقبی کهن بود که شاهان ایلام میانه زنده کردند. این لقب ادعای یکپارچگی کوهستان و دشت بود. «گسترش‌دهندهٔ پادشاهی» نشان می‌دهد او خود را با پیروزی‌هایش می‌شناساند.'], ['“King of Anshan and Susa” was an old title revived by the Middle Elamite kings: a claim to unite highland and lowland. “Who has enlarged the kingdom” shows he defined himself by his conquests.']],
    [['لقب‌ها می‌گویند فرمانروا می‌خواست چگونه دیده شود، نه اینکه چگونه بود.'], ['Titles tell us how a ruler wished to be seen, not how he was.']],
    ['vdm2015', 'vallat', 'konig1965'], { quotes: [naramQuote] }),
  sec('letter', 'نامهٔ برلین و ادعای تخت بابل', 'The Berlin letter and the claim to Babylon',
    [['شاهان ایلام و کاسی‌های بابل نسل‌ها با هم وصلت کرده بودند. «نامهٔ برلین» نامه‌ای است به زبان اکدی، در نسخه‌ای بابلیِ دیرتر. در آن، شاهی ایلامی همهٔ این ازدواج‌ها را برمی‌شمارد و می‌گوید تخت بابل حق اوست. نام او از میان رفته است.'], ['The kings of Elam and the Kassites of Babylon had intermarried for generations. The “Berlin letter” is an Akkadian letter preserved in a later Babylonian copy. In it an Elamite king lists all these marriages and says the throne of Babylon is his by right. His name is lost.']],
    [['والا می‌گوید نویسنده شاید شوتروک‌ناخونته بود و شاید یورش ۱۱۵۸ پس از رد این ادعا آمد. این پیوند حدس است.'], ['Vallat suggests the writer may have been Shutruk-Nakhunte, and that the 1158 raid may have followed Babylon’s rejection of the claim. The link is a conjecture.']],
    [['ادعای «حق موروثی» بر سرزمین دیگران، از کهن‌ترین بهانه‌های جنگ است.'], ['A claim of “hereditary right” to other people’s land is one of the oldest excuses for war.']],
    ['vandijk1986', 'vallat', 'potts2006']),
  sec('raid', 'یورش ۱۱۵۸: سیپار، اکد، اشنونا، بابل', 'The raid of 1158: Sippar, Akkad, Eshnunna, Babylon',
    [['در ۱۱۵۸ پ.م. شوتروک‌ناخونته به میان‌رودان یورش برد. خودش می‌گوید به فرمان اینشوشیناک سیپار را شکست داد. والا می‌گوید او به اکد، بابل و اشنونا هم یورش برد. او شاه کاسی، زبابا‌شوما‌ایدینا، را کشت و پسرش کوتیرناخونته را بر تخت بابل نشاند.'], ['In 1158 BCE Shutruk-Nakhunte raided Mesopotamia. He says himself that he defeated Sippar at Inshushinak’s command. Vallat says he also raided Akkad, Babylon and Eshnunna. He killed the Kassite king Zababa-shuma-iddina and set his son Kutir-Nakhunte on the throne of Babylon.']],
    [['این یورش بیشتر برای غنیمت و اعتبار بود تا گرفتن سرزمین برای همیشه. غنیمت‌ها نشانهٔ پیروزی خدا و شاه ایلام بر میان‌رودان بودند.'], ['The raid was more about trophies and prestige than lasting conquest. The trophies stood for the victory of Elam’s god and king over Mesopotamia.']],
    [['غارت آثار یک ملت، دزدیدن حافظهٔ آن است؛ اما همین غنیمت‌ها بودند که این آثار را برای ما نگه داشتند.'], ['Plundering a people’s monuments steals their memory; yet these very trophies are what preserved the monuments for us.']],
    ['vallat', 'vdm2015', 'potts1999']),
  sec('trophies', 'غنیمت‌ها و کتیبه‌هایی که او افزود', 'The trophies and the inscriptions he added',
    [[
      'ستون نرام‌سین: ستون پیروزی نرام‌سین، شاه اکد، حدود ۲۲۵۰ پ.م. شوتروک‌ناخونته متن کهن را پاک نکرد. کتیبه‌ای ایلامی روی کوهِ ستون افزود و گفت آن را از سیپار آورده و به اینشوشیناک پیشکش کرده است.',
      'قانون حمورابی: ستونی از بازالت به بلندی ۲۲۵ سانتی‌متر. در شوش، در ۱۹۰۱–۱۹۰۲، پیدا شد. نزدیک پایین آن هفت ستون از متن قانون‌ها در روزگار باستان صاف و پاک شده است. شیل (۱۹۰۲) گمان زد که شوتروک‌ناخونته جا را برای کتیبهٔ خودش آماده کرد، اما آن کتیبه هرگز نوشته نشد.',
      'تندیس‌های مانیشتوشو: شاه اکد، حدود ۲۲۷۰ پ.م. روی یکی از آن‌ها (Sb 47) کتیبه‌ای ایلامی هست که می‌گوید از اکد آمد؛ والا تندیس‌های مانیشتوشو را از اشنونا می‌داند.',
    ], [
      'The Naram-Sin stele: the victory stele of Naram-Sin, king of Akkad, c. 2250 BCE. Shutruk-Nakhunte did not erase the old text. He added an Elamite inscription on the mountain of the stele, saying he had brought it from Sippar and offered it to Inshushinak.',
      'The Code of Hammurabi: a basalt stele 225 cm high, found at Susa in 1901–1902. Near the bottom, seven columns of the laws were smoothed away in antiquity. Scheil (1902) guessed that Shutruk-Nakhunte had the space cleared for his own text, which was never carved.',
      'The Manishtushu statues: king of Akkad, c. 2270 BCE. One of them (Sb 47) bears an Elamite text saying it came from Akkad; Vallat has the Manishtushu statues come from Eshnunna.',
    ]],
    [['نکته‌های مورد اختلاف: اینکه پاک‌شدن ستون‌های قانون حمورابی کار شوتروک‌ناخونته بود، تنها گمان است. اینکه قانون حمورابی از سیپار آمد، پیشنهاد روث است. خاستگاه تندیس‌های مانیشتوشو، اکد یا اشنونا، روشن نیست.'], ['Points in dispute: that Shutruk-Nakhunte had the Code’s columns erased is only a guess. That the Code came from Sippar is Roth’s suggestion. Whether the Manishtushu statues came from Akkad or Eshnunna is unclear.']],
    [['امروز این آثار در لوورند. باستان‌شناسان فرانسوی آن‌ها را در شوش یافتند و بنا بر قرارداد «تقسیم یافته‌ها» به پاریس بردند. پرسش اینکه میراث از آنِ کیست، از ۱۱۵۸ پ.م. تا امروز زنده است.'], ['Today these works are in the Louvre. French archaeologists found them at Susa and took them to Paris under the agreement for “division of finds”. The question of who owns heritage has stayed alive from 1158 BCE to today.']],
    ['konig1965', 'potts1999', 'vdm2015', 'scheil1902', 'roth', 'harper1992', 'louvre-code', 'vallat'], { photos: ['naram', 'code', 'manishtushu', 'eshnunna'], quotes: [naramQuote] }),
  sec('family', 'خانواده و جانشینی', 'Family and succession',
    [[
      'کوتیرناخونته، پسر بزرگ، در ۱۱۵۸ بر تخت بابل نشست. پس از مرگ پدر شاه ایلام شد و با برکناری انلیل‌نادین‌آهه به دودمان کاسی پایان داد. پادشاهی‌اش کوتاه بود.',
      'شیلهک‌اینشوشیناک، برادرش، جانشین او شد. او کتیبه‌های بسیار به جا گذاشت و معبدهای فراوانی ساخت یا بازسازی کرد.',
      'هوتلوتوش‌اینشوشیناک، آخرین شاه دودمان، گاهی خود را «پسر شوتروک‌ناخونته، کوتیرناخونته و شیلهک‌اینشوشیناک» می‌خواند.',
    ], [
      'Kutir-Nakhunte, the eldest son, took the throne of Babylon in 1158. After his father died he became king of Elam and ended the Kassite dynasty by deposing Enlil-nadin-ahi. His reign was short.',
      'Shilhak-Inshushinak, his brother, succeeded him. He left many inscriptions and built or restored many temples.',
      'Hutelutush-Inshushinak, the last king of the dynasty, sometimes called himself “son of Shutruk-Nakhunte, Kutir-Nakhunte and Shilhak-Inshushinak”.',
    ]],
    [['والا (۱۹۸۵) پیشنهاد می‌کند که هوتلوتوش‌اینشوشیناک پسر شوتروک‌ناخونته از دختر خودش، نهونته‌اوتو، بود. این برداشت محل بحث است. شماره‌گذاری کوتیرناخونته (دوم یا سوم) هم در کتاب‌ها یکسان نیست.'], ['Vallat (1985) proposes that Hutelutush-Inshushinak was a son of Shutruk-Nakhunte by his own daughter, Nahhunte-utu. This reading is disputed. The numbering of Kutir-Nakhunte (II or III) also differs between books.']],
    [['وقتی قدرت در یک خانواده دست‌به‌دست می‌شود، قانون جانشینی همان قانون خانواده است، نه قانون مردم.'], ['When power passes within one family, the law of succession is family law, not the people’s law.']],
    ['vallat', 'vallat1985']),
]

export const shutrukNakhunte: FeaturedKing = {
  slug: 'shutruk-nakhunte',
  name: B('شوتروک‌ناخونته', 'Shutruk-Nakhunte'),
  dynastyName: B('ایلام (دودمان شوتروکی)', 'Elam (Shutrukid dynasty)'),
  reign: B('حدود ۱۱۸۴–۱۱۵۵ پ.م.', 'c. 1184–1155 BCE'),
  title: B('شوتروک‌ناخونته؛ شاهی که قانون حمورابی را به شوش آورد', 'Shutruk-Nakhunte: the king who brought Hammurabi’s Code to Susa'),
  lede: B(
    'شاه انشان و شوش و بنیان‌گذار دودمان شوتروکی. در ۱۱۵۸ پ.م. به بابل یورش برد و ستون نرام‌سین، قانون حمورابی و تندیس‌های مانیشتوشو را به شوش آورد. سه هزار سال بعد، این آثار در شوش پیدا شدند و امروز در لوورند. یورش را روی نقشهٔ متحرک ببینید و کتیبه‌ای را که خودش بر غنیمت‌ها نوشت بخوانید.',
    'King of Anshan and Susa and founder of the Shutrukid dynasty. In 1158 BCE he raided Babylonia and brought the Naram-Sin stele, the Code of Hammurabi and the Manishtushu statues to Susa. Three thousand years later they were found there; today they are in the Louvre. Follow the raid on the animated map and read the inscription he wrote on his trophies.',
  ),
  stats: [
    { n: B('۱۱۵۸', '1158'), l: B('پ.م.، یورش به بابل', 'BCE, the raid on Babylon') },
    { n: B('۳', '3'), l: B('شاهکار میان‌رودان در لوور که او به شوش آورد', 'Mesopotamian masterpieces now in the Louvre that he took to Susa') },
    { n: B('۳', '3'), l: B('پسرِ شاه‌شده', 'sons who became king') },
    { n: B('~۱۰۰۰', '~1000'), l: B('سال میان ستون نرام‌سین و کتیبهٔ او', 'years between the Naram-Sin stele and his inscription') },
  ],
  mapTitle: B('نقشهٔ متحرک: زندگی و پادشاهی', 'Animated map: life and reign'),
  events: shutrukEvents,
  span: [-1184, -1155],
  campaign: {
    id: 'reign',
    title: B('یورش ۱۱۵۸ پ.م. به بابل، گام‌به‌گام', 'The raid on Babylonia in 1158 BCE, step by step'),
    intro: { fa: ['از شوش تا سیپار و بابل و بازگشت با غنیمت‌ها. ترتیب شهرها و مسیرها طرح‌وار است؛ منابع تنها نام شهرها را می‌دهند.'], en: ['From Susa to Sippar and Babylon and home with the trophies. The order of cities and the routes are sketches; the sources give only the city names.'] },
    events: campaignEvents, span: [-1158, -1157], view: [43.2, 30.8, 49.6, 34.4],
    places: [
      { name: B('شوش', 'Susa'), c: SUSA }, { name: B('چغازنبیل', 'Chogha Zanbil'), c: DUR_UNTASH },
      { name: B('دیر', 'Der'), c: DER }, { name: B('اشنونا', 'Eshnunna'), c: ESHNUNNA },
      { name: B('سیپار', 'Sippar'), c: SIPPAR, left: true }, { name: B('بابل', 'Babylon'), c: BABYLON, left: true },
    ],
    clip: clipFor('shutruk-nakhunte'),
  },
  shareImage: '/media/shutruk-nakhunte/reign-en.png',
  dossier: shutrukDossier,
  synthesis: { title: B('جمع‌بندی: غنیمت، حافظه و مالکیت', 'Synthesis: plunder, memory and property'), paras: {
    fa: [
      'شوتروک‌ناخونته شاهی جنگجو بود که دودمانی تازه ساخت، شوش را دوباره مرکز ایلام کرد و با یورش ۱۱۵۸ به بابل، پایان دودمان کاسی را رقم زد. ما او را بیشتر از متن‌هایی می‌شناسیم که خودش روی غنیمت‌ها نوشت.',
      'از دید مالکیت، داستان او دوگانه است. او آثار شهرهای دیگر را به زور برد و به نام خود کرد. اما چون آن‌ها را نابود نکرد و متن کهن را نگه داشت، قانون حمورابی و ستون نرام‌سین برای ما ماندند. دارایی‌ای که با زور جابه‌جا شود، حافظه را هم جابه‌جا می‌کند.',
    ],
    en: [
      'Shutruk-Nakhunte was a warrior king who founded a new dynasty, made Susa the heart of Elam again and, with the raid of 1158, sealed the end of the Kassite dynasty. We know him mostly from the texts he wrote on his own trophies.',
      'Through the lens of property his story cuts both ways. He took other cities’ monuments by force and put his name on them. But because he kept them and left the old texts, the Code of Hammurabi and the Naram-Sin stele survived for us. Property moved by force moves memory with it.',
    ],
  }, sources: ['vallat', 'potts1999', 'konig1965'] },
  sources: shutrukSources,
  photos: shutrukPhotos,
  related: [
    { href: { fa: '/king/untash-napirisha', en: '/en/king/untash-napirisha' }, label: B('اونتاش‌ناپیریشا، سازندهٔ چغازنبیل', 'Untash-Napirisha, builder of Chogha Zanbil') },
    { href: { fa: '/king/shilhak-inshushinak', en: '/en/king/shilhak-inshushinak' }, label: B('شیلهک‌اینشوشیناک، پسرش', 'Shilhak-Inshushinak, his son') },
    { href: { fa: '/dynasty/elam', en: '/dynasty/elam' }, label: B('دودمان ایلام', 'The Elamite dynasty') },
  ],
  wikipedia: 'https://en.wikipedia.org/wiki/Shutruk-Nakhunte',
}
