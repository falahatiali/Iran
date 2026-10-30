/**
 * Mapped deeds of Untash-Napirisha (Middle Elamite, Igihalkid dynasty).
 * Years follow the higher chronology (c. 1340–1300 BCE, via the Burnaburiash synchronism) and are
 * schematic: no inscription of his is dated to a regnal year, so the sequence matters, not the year.
 */
import type { MapEvent } from '../featured/types'

const SUSA: [number, number] = [48.257, 32.19]
const CZ: [number, number] = [48.522, 32.009]
const ANSHAN: [number, number] = [52.41, 30.0]
const BABYLON: [number, number] = [44.42, 32.54]

const chrono = { fa: 'تاریخ‌ها نمادین است. سال‌شمار پادشاهی او محل بحث است: حدود ۱۳۴۰–۱۳۰۰ پ.م. یا حدود ۱۲۷۵–۱۲۴۰ پ.م.', en: 'Years are schematic. His reign is dated either c. 1340–1300 BCE or c. 1275–1240 BCE.' }

export const untashEvents: MapEvent[] = [
  {
    id: 'accession', year: -1340, when: { fa: 'حدود ۱۳۴۰ پ.م.', en: 'c. 1340 BCE' }, kind: 'admin',
    title: { fa: 'شاه انشان و شوش', en: 'King of Anshan and Susa' },
    body: { fa: 'اونتاش‌ناپیریشا، پسر هومبان‌نومنا از دودمان ایگی‌هلکی، به پادشاهی رسید و خود را «شاه انشان و شوش» خواند: پیوند دشت خوزستان با کوهستان فارس.', en: 'Untash-Napirisha, son of Humban-numena of the Igihalkid line, came to the throne and styled himself “king of Anshan and Susa”, joining the Khuzestan lowland to the Fars highland.' },
    coord: SUSA, route: [ANSHAN, SUSA],
    certainty: 'probable', certaintyNote: chrono, sources: ['eaha-untash', 'iranica-ziggurat', 'carter-stolper1984'],
  },
  {
    id: 'kassite-marriage', year: -1338, when: { fa: 'آغاز پادشاهی', en: 'early reign' }, kind: 'admin',
    title: { fa: 'پیوند زناشویی با بابل کاسی', en: 'Marriage alliance with Kassite Babylon' },
    body: { fa: 'بنا بر «نامهٔ برلین» (متنی بابلیِ دیرتر)، او با دختر بورنابوریاش، شاه کاسی بابل، ازدواج کرد. مادرش نیز از خاندان کوریگالزو بود. ایلام و بابل با پیوند خونی صلح را نگه می‌داشتند.', en: 'According to the “Berlin Letter” (a later Babylonian text), he married a daughter of the Kassite king Burnaburiash; his mother also came from the house of Kurigalzu. Elam and Babylon kept the peace through marriage.' },
    coord: BABYLON, route: [BABYLON, SUSA],
    certainty: 'probable', certaintyNote: { fa: 'تنها منبع، نامه‌ای دیرتر است که در جدلی سیاسی نوشته شده.', en: 'The only source is a later letter written in a political dispute.' }, sources: ['eaha-untash', 'potts1999'],
  },
  {
    id: 'susa-temples', year: -1335, when: { fa: 'سال‌های نخست', en: 'early years' }, kind: 'religion',
    title: { fa: 'بازسازی معبدهای شوش', en: 'Rebuilding the temples of Susa' },
    body: { fa: 'خشت‌های نوشته‌دار او در شوش از ساخت یا بازسازی معبد برای حدود هجده خدا خبر می‌دهند، بیشتر به زبان ایلامی و برخی به اکدی.', en: 'His inscribed bricks at Susa record building or rebuilding temples for about eighteen gods, mostly in Elamite, some in Akkadian.' },
    coord: SUSA, certainty: 'secure', sources: ['eaha-untash', 'steve1967'],
  },
  {
    id: 'found-city', year: -1332, when: { fa: 'میانهٔ پادشاهی', en: 'mid-reign' }, kind: 'building',
    title: { fa: 'بنیاد شهر آل‌اونتاش‌ناپیریشا', en: 'Founding Al-Untash-Napirisha' },
    body: { fa: 'در حدود ۴۰ کیلومتری جنوب‌شرقی شوش، کنار رود دز، شهری تازه با نام خود بنیاد نهاد (چغازنبیل امروزی). بارویی بیش از ۴ کیلومتر حدود ۱۰۰ هکتار را در بر می‌گرفت.', en: 'About 40 km south-east of Susa by the Dez river he founded a new city bearing his name (modern Chogha Zanbil). A wall over 4 km long enclosed about 100 hectares.' },
    coord: CZ, route: [SUSA, CZ], certainty: 'secure', sources: ['carter1992', 'unesco113', 'ghirshman1968'],
  },
  {
    id: 'ziggurat-phase1', year: -1328, when: { fa: 'مرحلهٔ نخست', en: 'first phase' }, kind: 'building',
    title: { fa: 'حیاط معبد اینشوشیناک', en: 'The Inshushinak temple court' },
    body: { fa: 'نخست حیاطی چهارگوش با معبدهایی برای اینشوشیناک، خدای شوش، ساخته شد. در هر یازده ردیف خشت، یک ردیف با کتیبهٔ وقف مهر شده است.', en: 'First a square court with temples to Inshushinak, god of Susa, was built. Every eleventh course of brick carries a stamped dedication.' },
    coord: CZ, certainty: 'secure', sources: ['ghirshman1966', 'iranica-ziggurat', 'steve1967'],
  },
  {
    id: 'ziggurat-phase2', year: -1320, when: { fa: 'مرحلهٔ دوم', en: 'second phase' }, kind: 'building',
    title: { fa: 'زیگورات پنج‌طبقه', en: 'The five-stage ziggurat' },
    body: { fa: 'حیاط با طبقه‌ها پر شد و زیگوراتی با ضلع ۱۰۵ متر و بلندی اصلی حدود ۵۳ متر برآمد. امروز حدود ۲۵ متر از آن مانده است. بزرگ‌ترین زیگورات شناخته‌شدهٔ بیرون از میان‌رودان است.', en: 'The court was filled in with stages, raising a ziggurat 105 m on a side and about 53 m high; about 25 m survive. It is the largest known ziggurat outside Mesopotamia.' },
    coord: CZ, certainty: 'probable', certaintyNote: { fa: 'بلندی اصلی بازسازی است.', en: 'The original height is a reconstruction.' }, sources: ['ghirshman1966', 'unesco113', 'carter1992'],
  },
  {
    id: 'highland-gods', year: -1315, when: { fa: 'مرحلهٔ دوم', en: 'second phase' }, kind: 'religion',
    title: { fa: 'ناپیریشا و کیریریشا در کنار اینشوشیناک', en: 'Napirisha and Kiririsha join Inshushinak' },
    body: { fa: 'نام ناپیریشا، خدای بزرگ کوهستان، به وقف زیگورات افزوده شد و معبدی برای کیریریشا ساخته شد. گرد زیگورات معبدهای بسیاری برای خدایان دشت و کوه برپا شد.', en: 'The name of Napirisha, great god of the highlands, was added to the ziggurat’s dedication and a temple to Kiririsha was built. Many temples to lowland and highland gods rose around the ziggurat.' },
    coord: CZ, route: [ANSHAN, CZ],
    certainty: 'disputed', certaintyNote: { fa: 'اینکه این تغییر سیاستی آگاهانه برای یکی کردن دشت و کوه بود، تفسیر میروشجی و والا است، نه گفتهٔ کتیبه.', en: 'That this was a deliberate policy to unite lowland and highland is the interpretation of Miroschedji and Vallat, not a statement of the inscriptions.' }, sources: ['miroschedji1980', 'iranica-ziggurat', 'potts1999'],
  },
  {
    id: 'napirasu', year: -1310, when: { fa: 'پادشاهی او', en: 'during his reign' }, kind: 'religion',
    title: { fa: 'تندیس ملکه ناپیراسو', en: 'The statue of Queen Napir-Asu' },
    body: { fa: 'تندیسی ۱۲۹ سانتی‌متری و حدود ۱۷۵۰ کیلوگرمی از ملکه ناپیراسو با هستهٔ مفرغ ریخته‌گری شده و در معبد نین‌هورسگ شوش نهاده شد. از شاهکارهای فلزکاری جهان باستان است.', en: 'A 129 cm, roughly 1,750 kg statue of Queen Napir-Asu was cast on a bronze core and set up in the Ninhursag temple at Susa: a masterpiece of ancient metalwork.' },
    coord: SUSA, route: [CZ, SUSA], certainty: 'secure', sources: ['louvre-sb2731', 'harper1992'],
  },
  {
    id: 'immeriya', year: -1305, when: { fa: 'تاریخ نامعلوم', en: 'date unknown' }, kind: 'campaign',
    title: { fa: 'تندیس «ایمریا»: لشکرکشی یا هدیه؟', en: 'The “Immeriya” statue: campaign or gift?' },
    body: { fa: 'کتیبهٔ ایلامی تندیسی از خدای ایمریا که از سرزمین کاسی آورده شده بود، گاه نشانهٔ یورش به بابل خوانده شده است.', en: 'The Elamite inscription of a statue of the god Immeriya, brought from Kassite territory, has sometimes been read as evidence of a raid on Babylonia.' },
    coord: BABYLON, route: [BABYLON, SUSA],
    certainty: 'disputed', certaintyNote: { fa: 'والا آن را بزرگداشت بورنابوریاش می‌داند و ژان-ماری دوران آن را نامی نذری. هیچ لشکرکشی قطعی از او ثبت نشده است.', en: 'Vallat reads it as homage to Burnaburiash and Durand as a votive name. No campaign of his is securely attested.' }, sources: ['vallat1999', 'durand2000', 'potts1999'],
  },
  {
    id: 'unfinished', year: -1300, when: { fa: 'حدود ۱۳۰۰ پ.م.', en: 'c. 1300 BCE' }, kind: 'admin',
    title: { fa: 'شهری که ناتمام ماند', en: 'A city left unfinished' },
    body: { fa: 'پس از او ساخت شهر ادامه نیافت و بخش بزرگی از درون بارو هرگز ساخته نشد، اما زیارتگاه و گورهای زیرزمینی محلهٔ شاهی سده‌ها به کار ماند. آشوربانیپال در حدود ۶۴۰ پ.م. منطقه را ویران کرد.', en: 'After him the city was not continued and much of the walled area was never built up, yet the sanctuary and the royal quarter’s underground tombs stayed in use for centuries. Ashurbanipal devastated the region around 640 BCE.' },
    coord: CZ,
    certainty: 'probable', certaintyNote: { fa: 'زمان رها شدن روشن نیست: کارتر کاربرد را تا حدود ۱۰۰۰ پ.م. می‌داند و یونسکو ویرانی نهایی را به آشوربانیپال نسبت می‌دهد.', en: 'When it was abandoned is unclear: Carter has use continuing to about 1000 BCE; UNESCO ties the final destruction to Ashurbanipal.' }, sources: ['carter1992', 'unesco113', 'ghirshman1968'],
  },
]
