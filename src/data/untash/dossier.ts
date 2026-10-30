/**
 * Dossier on Untash-Napirisha. Three layers per section: what the evidence says (historical),
 * how scholars read it (interpretation), and what it can mean today through a property-rights lens (modern).
 * The evidence is almost entirely royal building inscriptions and archaeology; where it is silent we say so.
 */
import type { DossierSection, Synthesis } from '../featured/types'

export const untashDossier: DossierSection[] = [
  {
    id: 'legitimacy', title: { fa: 'تبار و مشروعیت', en: 'Lineage and legitimacy' },
    historical: {
      fa: ['اونتاش‌ناپیریشا پسر هومبان‌نومنا بود و خود را «شاه انشان و شوش» می‌خواند. «نامهٔ برلین»، متنی بابلی از دوره‌ای دیرتر، او را داماد بورنابوریاش، شاه کاسی بابل، می‌شمارد.', 'تاریخ پادشاهی او بر پایهٔ همین همزمانی با بورنابوریاش حدود ۱۳۴۰–۱۳۰۰ پ.م. است؛ گاهشماری پایین‌تر، حدود ۱۲۷۵–۱۲۴۰ پ.م.، هنوز در برخی منابع (از جمله یونسکو) آمده است.'],
      en: ['Untash-Napirisha was the son of Humban-numena and styled himself “king of Anshan and Susa”. The “Berlin Letter”, a later Babylonian text, makes him a son-in-law of the Kassite king Burnaburiash.', 'That synchronism dates his reign to c. 1340–1300 BCE; a lower chronology, c. 1275–1240 BCE, still appears in some sources, including UNESCO.'],
    },
    interpretation: {
      fa: ['عنوان دوگانه ادعایی سیاسی است: پادشاهی ایلام میانه بر دو پایه، دشت شوش و کوهستان انشان، ایستاده بود و شاه باید هر دو را نمایندگی می‌کرد. پیوند زناشویی با بابل جایگاه او را در شبکهٔ شاهان بزرگ آن روزگار تثبیت می‌کرد.'],
      en: ['The double title is a political claim: the Middle Elamite kingdom rested on two pillars, the Susa plain and the Anshan highland, and the king had to embody both. Marriage into the Babylonian house placed him in the club of great kings of the age.'],
    },
    modern: {
      fa: ['مشروعیتی که از خون و خدا می‌آید، نه از رضایت مردم، حق حکومت را دارایی خانوادگی می‌کند. این نخستین الگوی دیرپای سیاست در فلات ایران است.'],
      en: ['Legitimacy drawn from blood and gods rather than consent turns the right to rule into family property: the earliest long-lived pattern of politics on the Iranian plateau.'],
    },
    sources: ['eaha-untash', 'iranica-ziggurat', 'carter-stolper1984', 'unesco113'],
  },
  {
    id: 'building', title: { fa: 'شهر و زیگورات', en: 'The city and the ziggurat' }, photos: ['ziggurat', 'model', 'gateway'],
    historical: {
      fa: ['او شهر آل‌اونتاش‌ناپیریشا را در حدود ۴۰ کیلومتری جنوب‌شرقی شوش بنیاد نهاد: سه بارو، محوطه‌ای مقدس، محلهٔ شاهی با کاخ‌ها و گورهای زیرزمینی، و آب‌انبار. زیگورات با ضلع ۱۰۵ متر در دو مرحله ساخته شد و هر یازده ردیف خشت آن کتیبهٔ وقف دارد.', 'شهر در ۱۹۳۶ شناسایی شد، گیرشمن آن را از ۱۹۵۱ تا ۱۹۶۲ کاوید و در ۱۹۷۹ در فهرست میراث جهانی یونسکو ثبت شد.'],
      en: ['He founded Al-Untash-Napirisha about 40 km south-east of Susa: three enclosure walls, a sacred precinct, a royal quarter with palaces and underground tombs, and a water reservoir. The 105 m ziggurat went up in two phases, and every eleventh brick course bears a dedication.', 'The site was identified in 1936, excavated by Ghirshman from 1951 to 1962, and inscribed on the UNESCO World Heritage List in 1979.'],
    },
    interpretation: {
      fa: ['شهری که تقریباً از هیچ ساخته شد و بیشترش خالی ماند، بیش از آنکه پاسخ به نیاز ساکنان باشد، بیانیهٔ قدرت شاه بود. گیرشمن و کارتر آن را مرکزی آیینی و شاهی می‌دانند، نه شهری بازرگانی.'],
      en: ['A city built almost from nothing and left mostly empty was a statement of royal power more than an answer to residents’ needs. Ghirshman and Carter see it as a ritual and royal centre, not a commercial town.'],
    },
    modern: {
      fa: ['شهرهای برنامه‌ریزی‌شده از بالا، از آل‌اونتاش تا پایتخت‌های امروزی، اغلب پس از بنیان‌گذارشان رها می‌شوند؛ شهرهایی که از دادوستد آزاد مردم می‌رویند، می‌مانند.'],
      en: ['Cities planned from above, from Al-Untash to modern capitals, are often abandoned after their founders; cities that grow from people’s free exchange tend to last.'],
    },
    sources: ['carter1992', 'ghirshman1966', 'ghirshman1968', 'unesco113'],
  },
  {
    id: 'economy', title: { fa: 'اقتصاد، کار و بازار', en: 'Economy, labour and markets' }, photos: ['footprint', 'plaque'],
    historical: {
      fa: ['میلیون‌ها خشت پخته و خشت لعابی، میخ‌های سفالی، شیشه و لعاب در خود محل ساخته شد؛ کوره‌ها و کارگاه‌ها در کاوش پیدا شده‌اند. انبارهای پایین زیگورات اشیای گران‌بها را نگه می‌داشتند.', 'از دوران او متنی دربارهٔ بازار، قیمت، مزد یا قرارداد خصوصی در دست نیست. سند اقتصادی ما خود بناهاست.'],
      en: ['Millions of baked and glazed bricks, ceramic knobs, glass and glaze were produced on site; kilns and workshops have been found in excavation. Store-rooms in the ziggurat’s lower levels held valuables.', 'No text of his reign about markets, prices, wages or private contracts survives. Our economic evidence is the buildings themselves.'],
    },
    interpretation: {
      fa: ['چنین پروژه‌ای بسیج گستردهٔ کار و مواد را می‌خواست که احتمالاً از راه کار اجباری یا جیره‌ای زیر نظر معبد و کاخ انجام می‌شد. این استنباط است، نه گفتهٔ متن.'],
      en: ['A project like this required a large mobilisation of labour and materials, probably as corvée or ration labour run by temple and palace. That is an inference, not a statement in the texts.'],
    },
    modern: {
      fa: ['هر خشتی که برای بنای شاهی پخته شد، خشتی بود که برای خانهٔ یک خانواده پخته نشد. هزینهٔ فرصت پروژه‌های شکوهمند را همیشه کسانی می‌پردازند که نامشان بر خشت نیست.'],
      en: ['Every brick fired for a royal monument was a brick not fired for a family’s house. The opportunity cost of grand projects is always paid by people whose names are not on the bricks.'],
    },
    sources: ['ghirshman1966', 'carter1992', 'potts1999'],
  },
  {
    id: 'religion', title: { fa: 'دین: خدایان دشت و کوه', en: 'Religion: gods of plain and highland' },
    historical: {
      fa: ['زیگورات نخست برای اینشوشیناک، خدای شوش، و سپس برای اینشوشیناک و ناپیریشا وقف شد. گرد آن معبدهایی برای خدایان بسیار، از جمله کیریریشا، ساخته شد. در شوش نیز او معبدهای حدود هجده خدا را ساخت یا بازسازی کرد.'],
      en: ['The ziggurat was dedicated first to Inshushinak, god of Susa, and then to Inshushinak and Napirisha. Temples to many gods, Kiririsha among them, were built around it. At Susa he built or rebuilt temples for about eighteen gods.'],
    },
    interpretation: {
      fa: ['میروشجی و والا گرد آوردن خدایان دشت و کوه در یک محوطه را سیاستی برای یکپارچه کردن پادشاهی می‌دانند. دیگران در آن بیشتر پارسایی شخصی شاه را می‌بینند. کتیبه‌ها انگیزه را نمی‌گویند.'],
      en: ['Miroschedji and Vallat read the gathering of lowland and highland gods in one precinct as a policy to unify the kingdom; others see mainly the king’s personal piety. The inscriptions do not state a motive.'],
    },
    modern: {
      fa: ['یک‌کاسه کردن خدایان در پایتخت شاه، دین را ابزار وحدت سیاسی می‌کند. آزادی دینی زمانی آغاز می‌شود که ایمان از دست دولت بیرون بیاید.'],
      en: ['Gathering the gods in the king’s capital makes religion a tool of political unity. Religious liberty begins when faith is taken out of the state’s hands.'],
    },
    sources: ['iranica-ziggurat', 'miroschedji1980', 'eaha-untash', 'steve1967'],
  },
  {
    id: 'law', title: { fa: 'قانون و مالکیت: نفرین به جای دادگاه', en: 'Law and property: curses instead of courts' }, photos: ['napirasu'],
    historical: {
      fa: ['قانون‌نامه‌ای از او نمانده است. آنچه مانده، نفرین‌نامه‌هایی است که بر تندیس‌ها و وقف‌ها نوشته شده و هر کس را که به آن‌ها دست‌درازی کند، به خشم خدایان می‌سپارد. تندیس ناپیراسو و تندیس Sb 62 خود او چنین نفرین‌هایی دارند.'],
      en: ['No law code of his survives. What survives are curse formulae on statues and dedications that consign anyone who tampers with them to the gods’ anger. The Napir-Asu statue and his own statue Sb 62 carry such curses.'],
    },
    interpretation: {
      fa: ['نفرین، حمایت از دارایی در جهانی بی‌پلیس و بی‌دادگاه مستقل است: مالکیت (اینجا، مالکیت وقفی خدا و نام نیک ملکه) را با تهدید کیفر آسمانی پاس می‌دارد. کیفر به نسل و نام دزد هم می‌رسد.'],
      en: ['A curse protects property in a world without police or independent courts: it guards ownership (here, a god’s dedicated object and the queen’s name) with the threat of divine punishment, which reaches the thief’s descendants and name.'],
    },
    modern: {
      fa: ['نیاز به امنیت مالکیت از نخستین متن‌های فلات ایران پیداست. گام بعدی تمدن، جایگزینی ترس از خدایان با قاعده‌ای همگانی و دادگاهی بی‌طرف بود، و کیفر فردی به جای کیفر فرزندان.'],
      en: ['The demand for secure property is visible in the plateau’s earliest texts. Civilisation’s next step was to replace fear of the gods with general rules and impartial courts, and to punish the wrongdoer rather than his children.'],
    },
    quotes: [
      { text: 'I, Napir-Asu, wife of Untash-Napirisha. He who would seize my statue, who would smash it, who would destroy its inscription, who would erase my name, may he be smitten by the curse of Napirisha, of Kiririsha, and of Inshushinak, that his name shall become extinct, that his offspring be barren, that the forces of Beltiya, the great goddess, shall sweep down on him. This is Napir-Asu’s offering.', fa: 'من، ناپیراسو، همسر اونتاش‌ناپیریشا. هر کس تندیس مرا بگیرد، بشکند، کتیبه‌اش را نابود کند، نام مرا پاک کند، نفرین ناپیریشا، کیریریشا و اینشوشیناک بر او فرود آید، نامش نابود شود، نسلش سترون شود، و نیروهای بلتیا، ایزدبانوی بزرگ، بر او فرود آیند. این پیشکش ناپیراسو است.', ref: 'Statue of Napir-Asu, Louvre Sb 2731; tr. F. Tallon, cat. no. 83', source: 'harper1992' },
    ],
    sources: ['harper1992', 'louvre-sb2731', 'louvre-sb62'],
  },
  {
    id: 'army', title: { fa: 'ارتش و سیاست خارجی', en: 'Army and foreign relations' },
    historical: {
      fa: ['هیچ لشکرکشی قطعی از او ثبت نشده است. رابطه با بابل کاسی بر پیوند زناشویی استوار بود. کتیبهٔ تندیس ایمریا که از سرزمین کاسی آمده، تنها نشانهٔ احتمالی درگیری است و خوانش آن محل بحث است.'],
      en: ['No campaign of his is securely recorded. Relations with Kassite Babylon rested on marriage. The inscription of an Immeriya statue from Kassite territory is the only possible hint of conflict, and its reading is disputed.'],
    },
    interpretation: {
      fa: ['والا متن را بزرگداشت بورنابوریاش می‌خواند و ژان-ماری دوران «ایمریا» را نامی نذری می‌داند؛ پژوهشگران دیگر احتمال یورش به بابل را مطرح کرده‌اند. بر این پایه نمی‌توان او را شاهی جنگجو یا صلح‌جو نامید.'],
      en: ['Vallat reads the text as homage to Burnaburiash and Durand takes “Immeriya” as a votive name; other scholars have suggested a raid on Babylonia. On this evidence he cannot be called either a warrior or a peacemaker.'],
    },
    modern: {
      fa: ['صلح از راه دادوستد و پیوند، ارزان‌تر از جنگ است؛ اما وقتی پیوند میان دو خاندان شاهی است، صلح هم دارایی شاهان می‌ماند، نه حق مردم.'],
      en: ['Peace through exchange and alliance is cheaper than war; but when the alliance is between two royal houses, peace remains the kings’ property rather than the people’s right.'],
    },
    sources: ['vallat1999', 'durand2000', 'eaha-untash', 'potts1999'],
  },
  {
    id: 'freedoms', title: { fa: 'زنان و آزادی‌های فردی', en: 'Women and individual freedoms' },
    historical: {
      fa: ['دربارهٔ زندگی مردم عادی در دوران او تقریباً هیچ متنی نداریم. ملکه ناپیراسو، با تندیسی به نام خود و کتیبه‌ای که او را پیشکش‌کننده می‌خواند، پس از شاه برجسته‌ترین فرد نام‌دار این دوران است.'],
      en: ['We have almost no texts on ordinary people’s lives in his reign. Queen Napir-Asu, with a statue in her own name and an inscription naming her as the donor, is the most prominent named individual besides the king.'],
    },
    interpretation: {
      fa: ['اینکه ملکه به نام خود وقف می‌کند و نفرین می‌گذارد، نشان می‌دهد زنان خاندان شاهی ایلام می‌توانستند صاحب دارایی و کنشگر دینی باشند. نمی‌توان این را به زنان عادی تعمیم داد.'],
      en: ['That the queen makes a dedication and lays a curse in her own name shows that Elamite royal women could own property and act in religion. It cannot be generalised to ordinary women.'],
    },
    modern: {
      fa: ['سکوت منابع دربارهٔ مردم، خودش داده است: در نظمی که همه‌چیز گرد شاه و خدا می‌چرخد، فرد تنها وقتی در تاریخ می‌ماند که صاحب چیزی به نام خود باشد.'],
      en: ['The sources’ silence about ordinary people is itself evidence: in an order revolving around king and god, an individual enters history only when they own something in their own name.'],
    },
    sources: ['harper1992', 'louvre-sb2731', 'potts1999'],
  },
  {
    id: 'legacy', title: { fa: 'میراث', en: 'Legacy' },
    historical: {
      fa: ['شهر پس از او ناتمام ماند، اما محوطهٔ مقدس و گورهای زیرزمینی سده‌ها به کار ماند. آشوربانیپال در حدود ۶۴۰ پ.م. منطقه را ویران کرد. امروز زیگورات چغازنبیل از بهترین نمونه‌های بازماندهٔ زیگورات در جهان است.'],
      en: ['The city was left unfinished after him, though the sacred precinct and underground tombs stayed in use for centuries. Ashurbanipal devastated the region around 640 BCE. Today the Chogha Zanbil ziggurat is one of the best-preserved ziggurats anywhere.'],
    },
    interpretation: {
      fa: ['زمان رها شدن شهر محل اختلاف است: کارتر از کاربرد زیارتی و تدفینی تا حدود ۱۰۰۰ پ.م. سخن می‌گوید و یونسکو ویرانی نهایی را به آشوربانیپال نسبت می‌دهد.'],
      en: ['When the city was abandoned is debated: Carter describes pilgrimage and burial use to about 1000 BCE, while UNESCO links the final destruction to Ashurbanipal.'],
    },
    modern: {
      fa: ['آنچه از اونتاش‌ناپیریشا مانده، کار دست هزاران سازندهٔ بی‌نام است. ستایش زیگورات، ستایش مهارت آنان است، نه لزوماً ستایش نظمی که آنان را به کار گرفت.'],
      en: ['What survives of Untash-Napirisha is the handiwork of thousands of nameless builders. Admiring the ziggurat is admiring their skill, not necessarily the order that set them to work.'],
    },
    sources: ['carter1992', 'unesco113'],
  },
]

export const untashSynthesis: Synthesis = {
  title: { fa: 'جمع‌بندی: شاهی که با خشت سخن گفت', en: 'Synthesis: a king who spoke in bricks' },
  paras: {
    fa: ['اونتاش‌ناپیریشا را تقریباً فقط از بناها و کتیبه‌های وقفش می‌شناسیم. او نه قانون‌نامه‌ای گذاشت و نه گزارش جنگی؛ آنچه گذاشت، شهری به نام خود و زیگوراتی است که هنوز بر دشت خوزستان ایستاده است.', 'از نگاه حقوق مالکیت، دوران او دو چهره دارد. نفرین‌نامه‌ها نشان می‌دهد نیاز به امنیت دارایی از کهن‌ترین لایه‌های تاریخ ایران حاضر است. اما این امنیت برای خدایان و خاندان شاهی بود، با ابزار ترس، نه برای همه با ابزار قانون. فاصلهٔ این نظم تا «پادشاهی قانون» همان راهی است که تاریخ ایران پس از او پیمود.'],
    en: ['We know Untash-Napirisha almost only through his buildings and dedication inscriptions. He left no law code and no war report; he left a city bearing his name and a ziggurat still standing on the Khuzestan plain.', 'Through a property-rights lens his reign has two faces. The curse formulae show that the demand for secure property is present in the oldest layers of Iranian history. But that security belonged to gods and the royal house and rested on fear, not on law for everyone. The distance from this order to a rule of law is the road Iranian history travelled after him.'],
  },
  sources: ['carter1992', 'harper1992', 'potts1999'],
}
