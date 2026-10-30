/** Dated events of Darius I's reign for the animated campaign map on /king/darius-i. */
import type { Coord, MapEvent } from '../featured/types'

export type DariusEvent = MapEvent

const SUSA: Coord = [48.26, 32.19]
const BABYLON: Coord = [44.42, 32.54]
const ECBATANA: Coord = [48.52, 34.8]
const SARDIS: Coord = [28.04, 38.49]
const PERSEPOLIS: Coord = [52.89, 29.93]

export const dariusEvents: DariusEvent[] = [
  {
    id: 'gaumata', year: -522, when: { fa: '۲۹ سپتامبر ۵۲۲ پ.م. (۱۰ باگیادی)', en: '29 September 522 BCE (10 Bāgayādi)' }, kind: 'battle',
    title: { fa: 'کشتن گئومات در سیکیه‌اووتی، ماد', en: 'Gaumata killed at Sikayauvati, Media' },
    body: { fa: 'به روایت بیستون، داریوش با شش همدست، گئومات مغ را که خود را بردیا پسر کوروش خوانده بود، در دژ سیکیه‌اووتی در نسایهٔ ماد کشت و پادشاهی را «بازگرداند».', en: 'According to Behistun, Darius and six accomplices killed Gaumata the Magus, who had claimed to be Bardiya son of Cyrus, at the fortress of Sikayauvati in Nisaya, Media, and “restored” the kingship.' },
    coord: [47.9, 34.45], route: [PERSEPOLIS, [50.5, 32.5], [47.9, 34.45]], certainty: 'disputed',
    certaintyNote: { fa: 'تاریخ از بیستون استوار است؛ اما اینکه کشته‌شده واقعاً یک مغ دروغین بود یا بردیای واقعی، از زمان پژوهش‌های سدهٔ بیستم محل بحث است. همهٔ روایت‌ها (بیستون، هرودوت ۳.۶۱–۸۸) از جانب پیروز است.', en: 'The date is secure from Behistun, but whether the victim was a false Magus or the real Bardiya has been debated since 20th-century scholarship. Every account (Behistun, Herodotus 3.61–88) comes from the winning side.' },
    sources: ['kent1953', 'schmitt1991', 'herodotus', 'briant2002'],
  },
  {
    id: 'nidintubel', year: -522, when: { fa: 'دسامبر ۵۲۲ پ.م.', en: 'December 522 BCE' }, kind: 'battle',
    title: { fa: 'نبرد دجله و زازانا؛ گرفتن بابل از ندینتو-بل', en: 'Battles of the Tigris and Zāzāna; Babylon taken from Nidintu-Bēl' },
    body: { fa: 'ندینتو-بل خود را «نبوکدنصر پسر نبونئید» خواند. داریوش از دجله گذشت، دو بار پیروز شد و بابل را گرفت.', en: 'Nidintu-Bēl styled himself “Nebuchadnezzar son of Nabonidus”. Darius crossed the Tigris, won twice and took Babylon.' },
    coord: BABYLON, route: [[47.9, 34.45], [45.6, 33.6], BABYLON], certainty: 'secure', sources: ['kent1953', 'kuhrt2007'],
  },
  {
    id: 'fravartish', year: -521, when: { fa: 'مه–ژوئن ۵۲۱ پ.م.', en: 'May–June 521 BCE' }, kind: 'battle',
    title: { fa: 'نبرد کوندورو و سرکوب فرورتیش در ماد', en: 'Battle of Kunduru; Fravartish crushed in Media' },
    body: { fa: 'فرورتیش که خود را خشثریته از تبار هووخشتره خواند، در کوندورو شکست خورد، در ری گرفتار شد و در هگمتانه با بریدن بینی، گوش و زبان و کندن یک چشم، بر دار شد (DB §۳۲).', en: 'Fravartish, who claimed to be Khshathrita of the line of Cyaxares, was beaten at Kunduru, captured at Rhagae, mutilated (nose, ears, tongue, one eye) and impaled at Ecbatana (DB §32).' },
    coord: ECBATANA, route: [BABYLON, [46.8, 34.2], ECBATANA], certainty: 'secure', sources: ['kent1953', 'schmitt1991'],
  },
  {
    id: 'armenia', year: -521, when: { fa: '۵۲۱ پ.م.', en: '521 BCE' }, kind: 'campaign',
    title: { fa: 'نبردهای ارمنستان: دادرشی و وئومیسه', en: 'Armenian battles: Dādarši and Vaumisa' },
    body: { fa: 'سرداران داریوش، دادرشی ارمنی و وئومیسه پارسی، در چند نبرد شورشیان ارمنستان را شکست دادند.', en: 'Darius’s generals, the Armenian Dādarši and the Persian Vaumisa, defeated the Armenian rebels in several battles.' },
    coord: [43.6, 39.0], route: [ECBATANA, [45.5, 37.5], [43.6, 39.0]], certainty: 'secure', sources: ['kent1953'],
  },
  {
    id: 'parthia', year: -521, when: { fa: '۵۲۱ پ.م.', en: '521 BCE' }, kind: 'battle',
    title: { fa: 'ویشتاسپ، پدر داریوش، پارت و گرگان را آرام می‌کند', en: 'Vištāspa, Darius’s father, pacifies Parthia and Hyrcania' },
    body: { fa: 'پدر داریوش که خود شهربان پارت بود، در ویشپئوزاتی و پتیگرَبنا بر شورشیان پیروز شد؛ داریوش سپاهی از ری به یاری‌اش فرستاد.', en: 'Darius’s father, satrap of Parthia, beat the rebels at Višpauzāti and Patigrabanā; Darius sent him an army from Rhagae.' },
    coord: [58.3, 37.4], route: [[51.4, 35.6], [55.0, 36.6], [58.3, 37.4]], certainty: 'secure', sources: ['kent1953'],
  },
  {
    id: 'margiana', year: -521, when: { fa: 'دسامبر ۵۲۱ پ.م.', en: 'December 521 BCE' }, kind: 'battle',
    title: { fa: 'سرکوب فرادَه در مرو', en: 'Frāda crushed in Margiana' },
    body: { fa: 'دادرشی، شهربان باختر، شورش فراده را در مرو در هم شکست. نسخهٔ بابلی بیستون شمار کشتگان را بسیار بالا می‌آورد؛ این اعداد را باید با احتیاط خواند.', en: 'Dādarši, satrap of Bactria, broke Frāda’s revolt in Margiana. The Babylonian version gives very high casualty figures, to be read with caution.' },
    coord: [61.8, 37.6], certainty: 'secure', sources: ['kent1953', 'kuhrt2007'],
  },
  {
    id: 'vahyazdata', year: -521, when: { fa: '۵۲۱ پ.م.', en: '521 BCE' }, kind: 'battle',
    title: { fa: 'شکست وهیزداته، «بردیای دوم»، در پارس', en: 'Vahyazdāta, the “second Bardiya”, defeated in Persis' },
    body: { fa: 'در خود پارس مردی دیگر خود را بردیا خواند. سردار ارتوردیه او را در رخا و کوه پرگ شکست داد و در اوادَیچیه بر دار شد. اینکه شورشی در قلب پارس دوباره به نام بردیا برخاست، نشان می‌دهد ادعای داریوش همه را قانع نکرده بود.', en: 'In Persis itself another man claimed to be Bardiya. General Artavardiya beat him at Rakhā and Mount Parga; he was impaled at Uvādaicaya. A second revolt in Persia proper under Bardiya’s name shows Darius’s claim did not convince everyone.' },
    coord: PERSEPOLIS, route: [SUSA, [50.8, 31.0], PERSEPOLIS], certainty: 'secure', sources: ['kent1953', 'briant2002'],
  },
  {
    id: 'arakha', year: -521, when: { fa: 'نوامبر ۵۲۱ پ.م.', en: 'November 521 BCE' }, kind: 'battle',
    title: { fa: 'شورش دوم بابل: ارخه', en: 'Second Babylonian revolt: Arakha' },
    body: { fa: 'ارخهٔ ارمنی نیز خود را نبوکدنصر خواند. ویندفرنه (اینتافرنس) بابل را گرفت. بیستون جمع‌بندی می‌کند: «در یک سال» نوزده نبرد و نُه شاه گرفتار. «یک سال» احتمالاً سالی ادبی و کمی بیش از دوازده ماه است.', en: 'Arakha the Armenian also claimed to be Nebuchadnezzar. Vindafarnā (Intaphernes) took Babylon. Behistun sums up: nineteen battles and nine kings captured “in one and the same year” — likely a literary year of slightly over twelve months.' },
    coord: BABYLON, certainty: 'probable', certaintyNote: { fa: 'شمار «نوزده نبرد در یک سال» ادعای خود داریوش است (DB §۵۲)؛ گاه‌نگاری دقیق را پژوهشگران با تاریخ‌های بابلی بازسازی کرده‌اند.', en: 'The “nineteen battles in one year” is Darius’s own claim (DB §52); the exact chronology is reconstructed from the Babylonian dates.' },
    sources: ['kent1953', 'schmitt1991', 'kuhrt2007'],
  },
  {
    id: 'behistun', year: -520, when: { fa: 'حدود ۵۲۰–۵۱۸ پ.م.', en: 'c. 520–518 BCE' }, kind: 'building',
    title: { fa: 'کتیبهٔ بیستون کنده می‌شود', en: 'The Behistun inscription is carved' },
    body: { fa: 'بر صخره‌ای کنار راه بابل–هگمتانه، داریوش روایت رسیدن به قدرت را به ایلامی، بابلی و پارسی باستان نوشت؛ پارسی باستان احتمالاً تازه برای همین کار به خط درآمد. نسخه‌های آرامی آن تا الفانتین مصر رسید.', en: 'On a cliff by the Babylon–Ecbatana road Darius set down his account of the accession in Elamite, Babylonian and Old Persian; Old Persian writing was probably created for this. Aramaic copies reached Elephantine in Egypt.' },
    coord: [47.44, 34.39], place: 'bisotun', certainty: 'probable', certaintyNote: { fa: 'ترتیب ساخت نسخه‌ها و ستون پنجم (افزوده دربارهٔ ایلام و سکاها) دقیق تاریخ‌گذاری نشده است.', en: 'The order of the versions and the added fifth column (Elam and the Saka) are not precisely dated.' },
    sources: ['schmitt1991', 'kuhrt2007', 'livius-ari'],
  },
  {
    id: 'elam-saka', year: -519, when: { fa: '۵۲۰–۵۱۹ پ.م. (سال‌های ۲ و ۳)', en: '520–519 BCE (regnal years 2–3)' }, kind: 'campaign',
    title: { fa: 'ایلام دوباره، و لشکرکشی به سکاهای تیزخود (سکونخا)', en: 'Elam again, and the campaign against the pointed-hat Saka (Skunkha)' },
    body: { fa: 'ستون پنجم بیستون از شورش اتمئیته در ایلام و سپس لشکرکشی داریوش به سکاهای تیزخود می‌گوید؛ رهبرشان سکونخا گرفتار شد و نقش او با کلاه نوک‌تیز به انتهای صف شاهان دروغگو افزوده شد.', en: 'Column V of Behistun records Atamaita’s revolt in Elam and then Darius’s campaign against the pointed-hat Saka; their chief Skunkha was captured and his figure, with pointed cap, was added at the end of the line of “liar kings”.' },
    coord: [60.5, 42.0], route: [SUSA, [52.0, 36.5], [57.5, 39.5], [60.5, 42.0]], certainty: 'disputed',
    certaintyNote: { fa: 'محل این سکاها (شرق دریای کاسپین؟ پیرامون آرال؟) و دریا یا رودی که داریوش گذشت، روشن نیست؛ مسیر روی نقشه فرضی است.', en: 'Where these Saka lived (east of the Caspian? around the Aral?) and which sea or river Darius crossed is unclear; the route shown is hypothetical.' },
    sources: ['schmitt1991', 'briant2002', 'iranica-darius'],
  },
  {
    id: 'egypt', year: -518, when: { fa: '۵۱۹–۵۱۸ پ.م.', en: '519–518 BCE' }, kind: 'admin',
    title: { fa: 'داریوش در مصر؛ گردآوری قوانین مصر', en: 'Darius in Egypt; the collection of Egyptian law' },
    body: { fa: 'به روایت «تاریخچهٔ دموتیک» (پشت پاپیروس)، داریوش در سال سوم فرمان داد دانایان سپاهی، کاهنان و دبیران، قانون‌های پیشین مصر را تا سال ۴۴ آمسیس گردآوری کنند؛ کار تا سال ۱۹ ادامه یافت و به آرامی و دموتیک نوشته شد. ودجاهورسنت نیز به فرمان او «خانهٔ زندگی» سائیس را بازسازی کرد.', en: 'According to the Demotic Chronicle (verso), in his third year Darius ordered the wise men of the army, priests and scribes to collect Egypt’s former law up to Amasis’ year 44; the work ran to year 19, written in Aramaic and Demotic. Udjahorresnet, on his orders, restored the House of Life at Sais.' },
    coord: [31.25, 29.85], route: [SUSA, [38.5, 33.5], [34.0, 31.2], [31.25, 29.85]], certainty: 'probable',
    certaintyNote: { fa: 'متن دموتیک دیرتر (دورهٔ بطلمیوسی) نوشته شده است؛ سفر داریوش به مصر در ۵۱۸ استنباط است.', en: 'The Demotic text was written later (Ptolemaic); Darius’s visit to Egypt in 518 is an inference.' },
    sources: ['kuhrt2007', 'lichtheim1980', 'briant2002'],
  },
  {
    id: 'persepolis-susa', year: -518, when: { fa: 'از حدود ۵۱۸ پ.م.', en: 'from c. 518 BCE' }, kind: 'building',
    title: { fa: 'آغاز تخت‌جمشید و کاخ شوش', en: 'Persepolis and the Susa palace begun' },
    body: { fa: 'ساخت صُفهٔ تخت‌جمشید و کاخ شوش آغاز شد. منشور بنیاد شوش (DSf) می‌گوید چوب سدر از لبنان، زر از سارد و باختر، لاجورد از سغد، فیروزه از خوارزم، عاج از حبشه و هند آمد، و سنگ‌تراشان ایونی و سارد، زرگران مادی و مصری، و آجرپزان بابلی کار کردند.', en: 'Work began on the Persepolis terrace and the Susa palace. The Susa foundation charter (DSf) says cedar came from Lebanon, gold from Sardis and Bactria, lapis from Sogdiana, turquoise from Chorasmia, ivory from Ethiopia and India, and that Ionian and Sardian stonecutters, Median and Egyptian goldsmiths and Babylonian brickmakers did the work.' },
    coord: PERSEPOLIS, certainty: 'probable', certaintyNote: { fa: 'تاریخ دقیق آغاز ساخت تخت‌جمشید (۵۱۸ یا کمی بعد) قطعی نیست.', en: 'The exact start date at Persepolis (518 or a little later) is not certain.' },
    sources: ['kent1953', 'kuhrt2007', 'livius-ari'],
  },
  {
    id: 'indus', year: -517, when: { fa: 'حدود ۵۱۸–۵۱۵ پ.م.', en: 'c. 518–515 BCE' }, kind: 'campaign',
    title: { fa: 'هندوش (دره سند) به شاهنشاهی می‌پیوندد؛ سفر اسکولاکس', en: 'Hindush (Indus valley) joins the empire; Scylax’s voyage' },
    body: { fa: 'هندوش در فهرست سرزمین‌های تخت‌جمشید (DPe) و نقش‌رستم (DNa) هست ولی در بیستون نیست؛ پس میان ۵۱۸ و حدود ۵۱۵ افزوده شد. هرودوت (۴.۴۴) می‌گوید داریوش اسکولاکس کاریاندایی را فرستاد تا سند را تا دریا و سپس دریا را تا مصر بپیماید؛ به گفتهٔ او (۳.۹۴) هند ۳۶۰ تالان خاکهٔ زر خراج می‌داد.', en: 'Hindush appears in the land lists of Persepolis (DPe) and Naqsh-e Rostam (DNa) but not Behistun, so it was added between 518 and c. 515. Herodotus (4.44) says Darius sent Scylax of Caryanda down the Indus to the sea and then by sea to Egypt; he says (3.94) India paid 360 talents of gold dust.' },
    coord: [68.4, 26.0], route: [PERSEPOLIS, [60.0, 30.5], [66.0, 30.2], [68.4, 26.0], [67.3, 24.0]], certainty: 'disputed',
    certaintyNote: { fa: 'هیچ روایت نظامی از این فتح نمانده؛ تاریخ از فهرست‌های کتیبه‌ها استنباط می‌شود و رقم خراج هرودوت محل تردید است.', en: 'No military narrative survives; the date is inferred from the inscription lists, and Herodotus’ tribute figure is doubted.' },
    sources: ['kent1953', 'herodotus', 'briant2002'],
  },
  {
    id: 'jerusalem', year: -515, when: { fa: 'آدار سال ششم داریوش، ۵۱۵ پ.م.', en: 'Adar of Darius’s 6th year, 515 BCE' }, kind: 'religion',
    title: { fa: 'تکمیل معبد دوم اورشلیم', en: 'The Second Temple in Jerusalem completed' },
    body: { fa: 'بنا بر عزرا ۶، تتنای حاکم ماورای رود بازسازی را زیر سؤال برد؛ داریوش در بایگانی هگمتانه فرمان کوروش را یافت، کار را تأیید کرد و هزینه را از درآمد شاهی آن ایالت داد. معبد در سال ششم او تمام شد.', en: 'According to Ezra 6, Tattenai, governor Beyond the River, questioned the rebuilding; Darius found Cyrus’s decree in the Ecbatana archive, confirmed the work and paid costs from the royal revenue of the province. The temple was finished in his sixth year.' },
    coord: [35.23, 31.78], certainty: 'probable', certaintyNote: { fa: 'متن عزرا دیرتر نوشته شده و اصالت لفظی «فرمان‌ها» بحث‌برانگیز است؛ تاریخ ۵۱۵ پذیرفتهٔ عموم است.', en: 'Ezra was composed later and the verbatim authenticity of the “decrees” is debated; the 515 date is widely accepted.' },
    sources: ['ezra', 'kuhrt2007', 'briant2002'],
  },
  {
    id: 'scythia', year: -513, when: { fa: 'حدود ۵۱۳ پ.م.', en: 'c. 513 BCE' }, kind: 'campaign',
    title: { fa: 'لشکرکشی به سکاهای اروپا: پل بسفر و دانوب', en: 'European Scythian campaign: bridging the Bosporus and the Danube' },
    body: { fa: 'به روایت هرودوت (۴.۸۳–۱۴۲)، مندروکلس سامی بر بسفر پل قایقی ساخت، ایونیان پلی بر دانوب زدند و داریوش به دشت‌های شمال رفت. سکاها از نبرد رو در رو گریختند، زمین را سوزاندند و داریوش بی‌نتیجه بازگشت؛ اما تراکیه زیر فرمان ماند.', en: 'Per Herodotus (4.83–142), Mandrocles of Samos bridged the Bosporus with boats, the Ionians bridged the Danube and Darius marched into the northern steppe. The Scythians refused battle, burned the land, and Darius returned without a decision; Thrace, however, stayed under Persian control.' },
    coord: [31.5, 47.0], route: [SARDIS, [29.0, 41.05], [27.8, 42.7], [28.7, 45.2], [31.5, 47.0]], certainty: 'disputed',
    certaintyNote: { fa: 'تاریخ (۵۱۳ یا ۵۱۲، برخی زودتر)، دامنه و هدف لشکرکشی محل بحث است و تقریباً همهٔ جزئیات از هرودوت است.', en: 'The date (513 or 512, some earlier), reach and aim of the campaign are disputed, and nearly every detail comes from Herodotus.' },
    sources: ['herodotus', 'briant2002', 'iranica-darius'],
  },
  {
    id: 'thrace-macedon', year: -511, when: { fa: 'حدود ۵۱۲–۵۱۰ پ.م.', en: 'c. 512–510 BCE' }, kind: 'campaign',
    title: { fa: 'مگابازوس، تراکیه و تسلیم مقدونیه', en: 'Megabazus, Thrace, and the submission of Macedon' },
    body: { fa: 'مگابازوس شهرهای کرانهٔ تراکیه را گرفت و آمونتاس پادشاه مقدونیه «خاک و آب» داد (هرودوت ۵.۱۷–۲۱). سرزمین «سکودره» در فهرست‌های بعدی داریوش احتمالاً همین ناحیه است.', en: 'Megabazus took the Thracian coastal towns and Amyntas of Macedon gave “earth and water” (Herodotus 5.17–21). The land “Skudra” in Darius’s later lists is probably this region.' },
    coord: [22.5, 40.6], route: [[28.7, 45.2], [26.5, 41.5], [24.0, 40.9], [22.5, 40.6]], certainty: 'probable', sources: ['herodotus', 'kent1953', 'briant2002'],
  },
  {
    id: 'pfa', year: -509, when: { fa: '۵۰۹–۴۹۳ پ.م. (سال‌های ۱۳ تا ۲۸)', en: '509–493 BCE (regnal years 13–28)' }, kind: 'admin',
    title: { fa: 'بایگانی باروی تخت‌جمشید', en: 'The Persepolis Fortification Archive' },
    body: { fa: 'ده‌ها هزار گل‌نبشته، بیشترشان ایلامی، جیرهٔ غله، شراب و دام را برای کارگران مرد و زن، مسافران راه شاهی، خدایان و خانوادهٔ شاهی ثبت می‌کنند. این بزرگ‌ترین شاهد مستقیم اقتصاد داریوش است.', en: 'Tens of thousands of tablets, mostly Elamite, record rations of grain, wine and livestock for men and women workers, travellers on the royal roads, gods and the royal family. It is the largest direct witness to Darius’s economy.' },
    coord: [52.95, 29.85], certainty: 'secure', sources: ['hallock1969', 'pfa', 'henkelman2008'],
  },
  {
    id: 'royal-road', year: -505, when: { fa: 'دوران داریوش (پایه‌های کهن‌تر)', en: 'Darius’s reign (older foundations)' }, kind: 'building',
    title: { fa: 'راه شاهی سارد–شوش و چاپارخانه‌ها', en: 'The Royal Road Sardis–Susa and its way-stations' },
    body: { fa: 'هرودوت (۵.۵۲–۵۴) ۱۱۱ منزل و حدود ۹۰ روز پیاده را میان سارد و شوش برمی‌شمارد. گل‌نبشته‌های تخت‌جمشید مسافرانی را نشان می‌دهند که با «هَلمی» (برگهٔ مهرشدهٔ سفر) در منزل‌ها جیره می‌گرفتند.', en: 'Herodotus (5.52–54) counts 111 stations and about 90 days on foot between Sardis and Susa. The Fortification tablets show travellers drawing rations at stations on a halmi (sealed travel authorisation).' },
    coord: SUSA, route: [SARDIS, [32.5, 39.0], [36.0, 38.7], [39.5, 37.6], [43.1, 36.3], [45.4, 35.0], [47.0, 33.4], SUSA], certainty: 'probable',
    certaintyNote: { fa: 'مسیر دقیق راه شاهی بازسازی پژوهشگران است؛ بخش‌هایی از شبکه پیش از داریوش وجود داشت.', en: 'The exact course is a scholarly reconstruction; parts of the network predate Darius.' },
    sources: ['herodotus', 'hallock1969', 'briant2002'],
  },
  {
    id: 'canal', year: -500, when: { fa: 'میان ۵۱۸ و ۴۹۶ پ.م.', en: 'between 518 and 496 BCE' }, kind: 'building',
    title: { fa: 'آبراه نیل–دریای سرخ و سنگ‌نبشته‌های سوئز', en: 'The Nile–Red Sea canal and the Suez stelae' },
    body: { fa: 'داریوش آبراهی را که نکائو آغاز کرده بود تکمیل کرد. سنگ‌نبشته‌های سوئز (DZc) می‌گویند به فرمان او از نیل تا دریایی که از پارس می‌آید کنده شد و کشتی‌ها از مصر از راه این آبراه به پارس رفتند.', en: 'Darius completed the canal begun by Necho. The Suez stelae (DZc) say it was dug on his order from the Nile to the sea that comes from Persia, and that ships went from Egypt through it to Persia.' },
    coord: [32.4, 30.4], route: [[31.25, 30.1], [32.0, 30.5], [32.4, 30.4], [32.55, 29.95]], certainty: 'probable',
    certaintyNote: { fa: 'تاریخ ساخت دقیق نیست؛ هرودوت (۲.۱۵۸) و سنگ‌نبشته‌ها در جزئیات هم‌خوان نیستند.', en: 'The date is not precise; Herodotus (2.158) and the stelae differ in detail.' },
    sources: ['kent1953', 'herodotus', 'kuhrt2007'],
  },
  {
    id: 'daric', year: -500, when: { fa: 'حدود ۵۱۰–۵۰۰ پ.م.', en: 'c. 510–500 BCE' }, kind: 'admin',
    title: { fa: 'زریک و سیگلوس: سکهٔ شاهی', en: 'Daric and siglos: royal coinage' },
    body: { fa: 'سکهٔ زرین «زریک» (حدود ۸٫۴ گرم) و سیمین «سیگلوس» (حدود ۵٫۴ گرم) با نقش شاه کماندار در آسیای کوچک ضرب شد. اثر مهر همین نقش بر گل‌نبشته‌ای از سال ۵۰۰ پ.م. تاریخ را محدود می‌کند.', en: 'The gold daric (c. 8.4 g) and silver siglos (c. 5.4 g), stamped with the royal archer, were struck in Asia Minor. An impression of this type on a tablet dated 500 BCE gives a terminus.' },
    coord: SARDIS, certainty: 'probable', certaintyNote: { fa: 'تاریخ آغاز ضرب و نسبت آن با داریوش (و ریشهٔ نام «دَریک») مورد بحث است.', en: 'When minting began, and the link to Darius (and the origin of the name “daric”), are debated.' },
    sources: ['iranica-daric', 'bm-daric', 'briant2002'],
  },
  {
    id: 'ionian', year: -499, when: { fa: '۴۹۹ پ.م.', en: '499 BCE' }, kind: 'battle',
    title: { fa: 'آغاز شورش ایونیه؛ سوختن سارد (۴۹۸)', en: 'Ionian Revolt begins; Sardis burned (498)' },
    body: { fa: 'پس از شکست حمله به ناکسوس، آریستاگوراس میلتوس را به شورش کشاند. با کمک آتن و ارتریا، سارد سوخت و معبد کوبابا آسیب دید (هرودوت ۵.۹۹–۱۰۲).', en: 'After the failed attack on Naxos, Aristagoras led Miletus into revolt. With Athenian and Eretrian help Sardis was burned, including the temple of Kybebe (Herodotus 5.99–102).' },
    coord: SARDIS, route: [[27.28, 37.53], [27.6, 38.1], SARDIS], certainty: 'probable', certaintyNote: { fa: 'روایت تقریباً تنها از هرودوت است.', en: 'The narrative is almost entirely Herodotus.' },
    sources: ['herodotus', 'briant2002'],
  },
  {
    id: 'lade', year: -494, when: { fa: '۴۹۴ پ.م.', en: '494 BCE' }, kind: 'battle',
    title: { fa: 'نبرد دریایی لاده و سقوط میلتوس', en: 'Naval battle of Lade; fall of Miletus' },
    body: { fa: 'ناوگان فنیقی، قبرسی و مصریِ شاه در لاده پیروز شد. میلتوس گرفته شد و به گفتهٔ هرودوت (۶.۱۸–۲۰) مردانش کشته و زنان و کودکان برده شدند و بازماندگان به امپه بر دهانهٔ دجله کوچانده شدند. در ۴۹۳ آرتافرن خراج ایونیه را بر پایهٔ پیمایش زمین از نو تعیین کرد (۶.۴۲).', en: 'The king’s Phoenician, Cypriot and Egyptian fleet won at Lade. Miletus fell; per Herodotus (6.18–20) men were killed, women and children enslaved and survivors deported to Ampe near the Tigris mouth. In 493 Artaphernes reassessed Ionian tribute from a land survey (6.42).' },
    coord: [27.25, 37.5], certainty: 'probable', certaintyNote: { fa: 'روایت یونانی؛ ابعاد کشتار و کوچ ممکن است بزرگ‌نمایی باشد.', en: 'Greek narrative; the scale of killing and deportation may be exaggerated.' },
    sources: ['herodotus', 'briant2002'],
  },
  {
    id: 'mardonius', year: -492, when: { fa: '۴۹۲ پ.م.', en: '492 BCE' }, kind: 'campaign',
    title: { fa: 'لشکرکشی مردونیه؛ توفان آتوس', en: 'Mardonius’s expedition; the storm at Athos' },
    body: { fa: 'مردونیه در ایونیه به جای جباران، حکومت‌های «دموکراتیک» گذاشت (هرودوت ۶.۴۳)، تراکیه و مقدونیه را دوباره زیر فرمان آورد، اما ناوگانش در توفان دماغهٔ آتوس آسیب سخت دید.', en: 'In Ionia Mardonius replaced tyrants with “democracies” (Herodotus 6.43), reasserted control over Thrace and Macedon, but his fleet was badly wrecked off Mount Athos.' },
    coord: [24.33, 40.16], route: [[29.0, 40.4], [26.4, 40.3], [24.33, 40.16]], certainty: 'probable', sources: ['herodotus', 'briant2002'],
  },
  {
    id: 'marathon', year: -490, when: { fa: 'تابستان ۴۹۰ پ.م.', en: 'late summer 490 BCE' }, kind: 'battle',
    title: { fa: 'ارتریا و ماراتن', en: 'Eretria and Marathon' },
    body: { fa: 'داتیس و آرتافرن از راه دریا ناکسوس و ارتریا را گرفتند (اسیران ارتریایی را به ارِدِریکه در شوش کوچاندند) و در ماراتن پیاده شدند؛ آتنیان و پلاتاییان آنان را شکست دادند. برای شاهنشاهی این یک عملیات تنبیهی کناری بود؛ برای یونانیان، اسطورهٔ بنیادین.', en: 'Datis and Artaphernes took Naxos and Eretria by sea (Eretrian captives were settled at Arderikka near Susa) and landed at Marathon, where Athenians and Plataeans beat them. For the empire it was a peripheral punitive operation; for the Greeks a founding myth.' },
    coord: [23.97, 38.12], route: [[26.2, 37.1], [25.4, 37.1], [23.8, 38.4], [23.97, 38.12]], certainty: 'disputed',
    certaintyNote: { fa: 'تنها از منابع یونانی (به‌ویژه هرودوت ۶.۹۴–۱۲۰) می‌شناسیم؛ هیچ منبع پارسی از ماراتن یاد نمی‌کند. ارقام ۶۴۰۰ کشتهٔ پارسی در برابر ۱۹۲ آتنی پذیرفتنی نیست مگر با احتیاط.', en: 'Known only from Greek sources (especially Herodotus 6.94–120); no Persian source mentions Marathon. The 6,400 Persian vs 192 Athenian dead should be treated with caution.' },
    sources: ['herodotus', 'briant2002', 'kuhrt2007'],
  },
  {
    id: 'death', year: -486, when: { fa: 'نوامبر ۴۸۶ پ.م.', en: 'November 486 BCE' }, kind: 'admin',
    title: { fa: 'درگذشت داریوش؛ آرامگاه نقش‌رستم', en: 'Darius dies; the tomb at Naqsh-e Rostam' },
    body: { fa: 'داریوش در حالی که مصر شوریده بود درگذشت و در آرامگاه صخره‌ای نقش‌رستم با کتیبه‌های DNa (فهرست سرزمین‌ها) و DNb (اندرزنامهٔ شاه دادگر) به خاک سپرده شد.', en: 'Darius died while Egypt was in revolt and was buried in the rock tomb at Naqsh-e Rostam with inscriptions DNa (list of lands) and DNb (the just king’s self-portrait).' },
    coord: [52.87, 29.99], certainty: 'secure', sources: ['kent1953', 'livius-dnb', 'iranica-darius'],
  },
]
