/** Sources cited on /king/untash-napirisha. Every event, section and photo caption points here by id. */
import type { FeaturedSource } from '../featured/types'

export const untashSources: FeaturedSource[] = [
  { id: 'carter1992', author: 'E. Carter', title: 'Čoḡā Zanbīl, Encyclopaedia Iranica (updated 2017)', year: '1992', url: 'https://www.iranicaonline.org/articles/coga-zanbil/', note: { fa: 'شرح باستان‌شناختی شهر، زیگورات، معبدها، محلهٔ شاهی و گورهای زیرزمینی.', en: 'Archaeological account of the city, ziggurat, temples, royal quarter and underground tombs.' } },
  { id: 'iranica-ziggurat', author: 'Encyclopaedia Iranica', title: 'Ziggurat', year: 'online', url: 'https://www.iranicaonline.org/articles/ziggurat/', note: { fa: 'تاریخ‌گذاری دوگانهٔ پادشاهی (حدود ۱۳۴۰–۱۳۰۰ یا ۱۲۷۵–۱۲۴۰ پ.م.) و مراحل ساخت زیگورات.', en: 'Gives both datings of the reign (c. 1340–1300 or c. 1275–1240 BCE) and the ziggurat’s building phases.' } },
  { id: 'unesco113', author: 'UNESCO World Heritage Centre', title: 'Tchogha Zanbil (property 113, inscribed 1979)', year: '1979–', url: 'https://whc.unesco.org/en/list/113/' },
  { id: 'eaha-untash', author: 'The Encyclopedia of Ancient History: Asia and Africa (Wiley)', title: 'Untash-Napirisha', year: '2021', url: 'https://doi.org/10.1002/9781119399919.eahaa00060', note: { fa: 'تبار بر پایهٔ «نامهٔ برلین»، همزمانی با بورنابوریاش و بازسازی معبدهای حدود هجده خدا در شوش.', en: 'Genealogy from the “Berlin Letter”, the Burnaburiash synchronism, and the rebuilding of temples for about eighteen gods at Susa.' } },
  { id: 'ghirshman1966', author: 'R. Ghirshman', title: 'Tchoga Zanbil (Dur-Untash) I: La ziggurat (MDAFI 39)', year: '1966' },
  { id: 'ghirshman1968', author: 'R. Ghirshman', title: 'Tchoga Zanbil (Dur-Untash) II: Temenos, temples, palais, tombes (MDAFI 40)', year: '1968' },
  { id: 'steve1967', author: 'M.-J. Steve', title: 'Tchoga Zanbil (Dur-Untash) III: Textes élamites et accadiens de Tchoga Zanbil (MDAFI 41)', year: '1967' },
  { id: 'carter-stolper1984', author: 'E. Carter and M. W. Stolper', title: 'Elam: Surveys of Political History and Archaeology', year: '1984' },
  { id: 'potts1999', author: 'D. T. Potts', title: 'The Archaeology of Elam: Formation and Transformation of an Ancient Iranian State', year: '1999 (2nd ed. 2016)' },
  { id: 'miroschedji1980', author: 'P. de Miroschedji', title: 'Le dieu élamite Napirisha, Revue d’assyriologie 74', year: '1980' },
  { id: 'vallat1999', author: 'F. Vallat', title: 'L’hommage de l’Élamite Untash-Napirisha au Cassite Burnaburiash, Akkadica 114, 109–117', year: '1999', url: 'https://akkadica.ugent.be/article/id/100473/' },
  { id: 'durand2000', author: 'J.-M. Durand', title: 'Note in NABU 2000/39 (on the Immeriya statue inscription)', year: '2000' },
  { id: 'harper1992', author: 'P. O. Harper, J. Aruz and F. Tallon (eds.)', title: 'The Royal City of Susa: Ancient Near Eastern Treasures in the Louvre (Metropolitan Museum of Art), cat. no. 83 by F. Tallon', year: '1992', note: { fa: 'ترجمهٔ انگلیسی منتشرشدهٔ نفرین‌نامهٔ تندیس ناپیراسو از همین مدخل است.', en: 'The published English translation of the Napir-Asu statue curse is quoted from this entry.' } },
  { id: 'louvre-sb2731', author: 'Musée du Louvre', title: 'Statue de la reine Napirasu, Sb 2731', year: 'collections online', url: 'https://collections.louvre.fr/en/ark:/53355/cl010176829' },
  { id: 'louvre-sb62', author: 'Musée du Louvre', title: 'Statue (fragment) of Untash-Napirisha, Sb 62', year: 'collections online', url: 'https://collections.louvre.fr/ark:/53355/cl010174486' },
]

export const untashSourceIds = new Set(untashSources.map((s) => s.id))
