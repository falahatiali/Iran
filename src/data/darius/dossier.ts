/** Long-form dossier for /king/darius-i. Each section keeps the three layers of docs/FOUNDATIONAL_PHILOSOPHY.md apart. */
import type { DossierSection, Synthesis } from '../featured/types'

export const dossier: DossierSection[] = [
  {
    id: 'rise',
    title: { fa: 'رسیدن به قدرت و مشروعیت', en: 'Rise to power and legitimacy' },
    historical: {
      fa: [
        'داریوش پسر ویشتاسپ از شاخه‌ای فرعی از هخامنشیان بود، نه وارث مستقیم کوروش. در ۵۲۲ پ.م. پس از مرگ کمبوجیه، با شش نجیب‌زادهٔ پارسی کسی را کشت که بیستون او را گئوماتِ مغ می‌خواند که به دروغ خود را بردیا برادر کمبوجیه نامیده بود.',
        'سپس تقریباً سراسر شاهنشاهی شورید: ایلام، بابل (دو بار)، ماد، ارمنستان، پارت، مرو، سکاها و حتی خود پارس. بیستون می‌گوید داریوش در «یک سال» نوزده نبرد کرد و نُه شاه را گرفت. او برای مشروعیت به سه چیز تکیه کرد: تبار مشترک از هخامنش، خواست اهورامزدا، و تقابل «راستی» با «دروغ» (drauga).',
        'داریوش با آتوسا و آرتیستونه دختران کوروش و نیز دختر بردیا ازدواج کرد؛ پیوندی که ادعایش را به خاندان کوروش گره زد.',
      ],
      en: [
        'Darius son of Vištāspa came from a collateral branch of the Achaemenids, not Cyrus’s direct line. In 522 BCE, after Cambyses’ death, he and six Persian nobles killed the man Behistun calls Gaumata the Magus, who had falsely claimed to be Bardiya, Cambyses’ brother.',
        'Almost the whole empire then revolted: Elam, Babylon (twice), Media, Armenia, Parthia, Margiana, the Saka and Persis itself. Behistun says Darius fought nineteen battles and took nine kings “in one and the same year.” He rested his legitimacy on three things: shared descent from Achaemenes, the will of Ahuramazda, and the opposition of “truth” to “the Lie” (drauga).',
        'He married Cyrus’s daughters Atossa and Artystone and a daughter of Bardiya, tying his claim to Cyrus’s house.',
      ],
    },
    interpretation: {
      fa: [
        'از نگاه حقوق مالکیت، پرسش بنیادین این است: «تاج» مال کیست؟ در منطق بیستون، پادشاهی میراثی است که از خاندان «ربوده» شده و داریوش آن را «بازگردانده». این همان زبان اعادهٔ مال غصبی است. حتی بیستون می‌گوید گئومات کشتزارها، گله‌ها، بردگان و خانه‌هایی را که از مردم گرفته بود، داریوش به آنان بازگرداند (DB §۱۴). یعنی داریوش مشروعیت خود را بر این ادعا بنا کرد که مالکیت ربوده‌شده را به صاحبانش بازمی‌گرداند.',
        'اما همین متن نشان می‌دهد مشروعیت از رضایت نمی‌آمد. نوزده نبرد یعنی بخش بزرگی از رعایا به این حکومت تن نمی‌دادند. حکومتی که با شمشیر بنا شده باشد، برای ماندن باید ثابت کند غارتگرِ گذرا نیست و نظم پایدار می‌آورد. داستان بقیهٔ دوران داریوش، داستان همین گذار است.',
      ],
      en: [
        'Through a property-rights lens, the foundational question is: whose is the crown? In Behistun’s logic the kingship is an inheritance “taken away” from the family and “restored” by Darius — the language of recovering stolen property. Behistun even claims Darius gave back to the people the pastures, herds, household slaves and houses Gaumata had taken (DB §14): he built his legitimacy on restitution.',
        'Yet the same text shows legitimacy did not come from consent. Nineteen battles mean much of the empire refused this government. A regime founded by the sword must then show it is not a passing plunderer but a source of durable order. The rest of Darius’s reign is the story of that transition.',
      ],
    },
    modern: {
      fa: ['بیستون نخستین «روایت رسمی» بلند ایرانی است و یادآور می‌شود که تاریخ را پیروزان می‌نویسند. خوانندهٔ امروز می‌تواند هم به هوش سیاسی داریوش احترام بگذارد و هم بپرسد صدای شکست‌خوردگان کجاست.'],
      en: ['Behistun is the first long Iranian “official narrative” and a reminder that winners write history. A reader today can respect Darius’s political skill and still ask where the voices of the defeated are.'],
    },
    sources: ['kent1953', 'schmitt1991', 'herodotus', 'briant2002', 'iranica-darius'],
  },
  {
    id: 'administration',
    title: { fa: 'سازمان اداری: ساتراپی‌ها، چشم شاه و «داته»', en: 'Administration: satrapies, the King’s Eye, and dāta' },
    historical: {
      fa: [
        'هرودوت (۳.۸۹) می‌گوید داریوش شاهنشاهی را به بیست «نوموس» (ساتراپی) بخش کرد و برای هر یک خراج معین گذاشت. کتیبه‌ها فهرست‌های «دَهیو» (سرزمین/مردم) را می‌آورند که از ۲۳ در بیستون به حدود ۳۰ در نقش‌رستم می‌رسد.',
        'شهربانان (خشثرپاون) اغلب پارسی و از نزدیکان شاه بودند، ولی دبیران، فرماندهان پادگان و خزانه‌داران جداگانه گزارش می‌دادند. منابع یونانی از «چشم شاه» و «گوش شاه» سخن می‌گویند؛ بایگانی تخت‌جمشید شبکه‌ای از دبیران، مهرها و سندهای سفر را نشان می‌دهد.',
        'واژهٔ پارسی باستان «داته» (dāta، قانون) در بیستون آمده: «این سرزمین‌ها به داتهٔ من رفتار کردند» (DB §۸)، و بعدها به آرامی و عبری (dāt) راه یافت. در مصر، داریوش به گردآوری قانون‌های مصری فرمان داد؛ در بابل، حقوق قراردادی بابلی همچنان به کار رفت.',
      ],
      en: [
        'Herodotus (3.89) says Darius divided the empire into twenty nomoi (satrapies) and fixed each one’s tribute. The inscriptions list dahyāva (lands/peoples), growing from 23 at Behistun to about 30 at Naqsh-e Rostam.',
        'Satraps (xšaçapāvan) were usually Persians close to the king, but scribes, garrison commanders and treasurers reported separately. Greek sources speak of the “King’s Eye” and “King’s Ear”; the Persepolis archive shows a network of scribes, seals and travel documents.',
        'The Old Persian word dāta (law) appears at Behistun: “these lands walked according to my law” (DB §8), and later passed into Aramaic and Hebrew (dāt). In Egypt Darius ordered Egyptian law collected; in Babylon, Babylonian contract law kept operating.',
      ],
    },
    interpretation: {
      fa: [
        'نکتهٔ کلیدی این است که «داته» یک قانون‌نامهٔ واحد برای همه نبود. شواهد نشان می‌دهد داریوش نظمی چندمرکزی ساخت: قانون شاه در بالا (وفاداری، خراج، نظم)، و قانون‌های محلی در پایین (ازدواج، ارث، قرارداد، معبد). برای مالکیت خصوصی این پیامد بزرگی دارد: کشاورز بابلی یا بازرگان مصری با قواعدی آشنا زندگی می‌کرد که پیش‌بینی‌پذیر بود.',
        'ولی جداسازی قدرت‌ها برای پاسخ‌گویی شهربان به شاه بود، نه به رعیت. «چشم شاه» دستگاه نظارت بالا بر پایین بود، نه دادگاهی که رعیت بتواند شاه را در آن به محاکمه بکشد. حاکمیت قانون بر رعایا بود، نه بر خود شاه.',
      ],
      en: [
        'The key point is that dāta was not one code for all. The evidence points to a polycentric order: royal law on top (loyalty, tribute, order) and local laws below (marriage, inheritance, contract, temple). For private property this matters: a Babylonian farmer or Egyptian merchant lived under familiar, predictable rules.',
        'But the separation of offices served to make satraps answerable to the king, not to subjects. The King’s Eye was top-down surveillance, not a court in which a subject could hold the king to account. The rule of law bound the ruled, not the ruler.',
      ],
    },
    modern: {
      fa: ['الگوی «قانون مشترک کم، قانون محلی زیاد» امروز در بحث فدرالیسم و رقابت نظام‌های حقوقی معنا دارد. اما بدون مهار قدرت مرکز، این تنوع به لطف حاکم وابسته می‌ماند.'],
      en: ['The pattern of “thin common law, thick local law” resonates in today’s debates on federalism and jurisdictional competition. Without limits on the centre, however, that diversity remains at the ruler’s pleasure.'],
    },
    sources: ['herodotus', 'kent1953', 'kuhrt2007', 'briant2002'],
  },
  {
    id: 'economy',
    title: { fa: 'اقتصاد، پول و خراج', en: 'Economy, money and tribute' },
    historical: {
      fa: [
        'هرودوت (۳.۸۹) نقل می‌کند پارسیان می‌گفتند کوروش پدر بود، کمبوجیه ارباب، و داریوش «کاپلوس» (کاسب، دکان‌دار)، چون به گفتهٔ او از هر چیز سودی می‌ساخت. او سپس خراج هر ساتراپی را به تالان نقره (و برای هند، خاکهٔ زر) برمی‌شمارد (۳.۹۰–۹۷): بابل و آشور ۱۰۰۰ تالان، مصر ۷۰۰ تالان، هند ۳۶۰ تالان زر؛ خود پارس از خراج معاف بود (۳.۹۷)، و برخی مردمان «هدیه» می‌دادند.',
        'سکهٔ زرین «زریک» و سیمین «سیگلوس» با نقش شاه کماندار رواج یافت، هرچند در قلب شاهنشاهی بیشتر نقرهٔ وزنی و کالا به کار می‌رفت. داریوش وزنه‌های سنگی رسمی (مثلاً وزنه‌های سنگی با کتیبه به «کرشه») ساخت.',
        'بایگانی باروی تخت‌جمشید (۵۰۹–۴۹۳ پ.م.) و بایگانی خزانه (از ۴۹۲ پ.م.) نشان می‌دهند که هزاران کارگر (کورتش) با جیرهٔ ماهانه غله، شراب، آبجو و گاه گوشت کار می‌کردند. زنان هم‌پای مردان جیره می‌گرفتند؛ سرپرستان زن گاه بیش از مردان گروه می‌گرفتند؛ مادران پس از زایمان جیرهٔ ویژه داشتند (برای نوزاد پسر بیش از دختر)؛ و کارگران ماهر سهم بیشتری می‌بردند. در لوح‌های خزانه بخشی از دستمزد به نقره پرداخت می‌شد.',
      ],
      en: [
        'Herodotus (3.89) reports the Persians saying Cyrus was a father, Cambyses a master and Darius a kapēlos (shopkeeper, huckster), because, Herodotus explains, he turned everything to profit (paraphrase). He then lists each satrapy’s tribute in silver talents (gold dust for India) (3.90–97): Babylon and Assyria 1,000, Egypt 700, India 360 of gold; Persis itself was exempt (3.97), and some peoples gave “gifts.”',
        'The gold daric and silver siglos with the royal archer spread, though in the imperial heartland weighed silver and goods did most of the work. Darius issued official stone weights (inscribed in karša).',
        'The Persepolis Fortification Archive (509–493 BCE) and the Treasury Archive (from 492) show thousands of workers (kurtaš) on monthly rations of grain, wine, beer and sometimes meat. Women drew rations alongside men; female overseers sometimes outranked the men of their team; mothers received special birth rations (larger for a boy than a girl); skilled workers earned more. In the Treasury tablets part of the wages was paid in silver.',
      ],
    },
    interpretation: {
      fa: [
        'لقب «کاسب» در دهان اشراف پارسی تحقیرآمیز بود، اما از نگاه اقتصاد سیاسی تعریف است. داریوش به جای غارت بی‌قاعده، خراج سالانهٔ معین گذاشت. اقتصاددان منکور اولسون (۱۹۹۳) میان «راهزن سرگردان» که هرچه بتواند می‌برد و «راهزن ساکن» که چون خود را صاحب درآمد آینده می‌بیند، به سود خود مالیات را محدود و پیش‌بینی‌پذیر می‌کند، تمایز گذاشت. اصلاح خراج داریوش نمونه‌ای کلاسیک از این گذار است. رقم ثابت یعنی هر اضافه‌تولید مال تولیدکننده می‌ماند، و این انگیزهٔ سرمایه‌گذاری و تولید می‌سازد.',
        'سکه و وزنهٔ استاندارد هزینهٔ معامله را کم می‌کنند: سنجیدن عیار و وزن، کار هر بار هر بازار نیست. این کالای عمومی واقعی است که حتی سنت لیبرال کلاسیک (از اسمیت تا میزس) برای کارکرد دولت در تضمین پول سالم می‌پذیرد، هرچند میزس هشدار می‌دهد همان دولت می‌تواند پول را نیز خراب کند.',
        'اما خراج، به تعبیر باستیا، «غارت قانونی» است: انتقال اجباری ثروت از تولیدکننده به حاکم، هرچند منظم. پارس معاف بود و دیگران می‌پرداختند؛ یعنی یک قوم بر دیگران امتیاز مالیاتی داشت. لوح‌های تخت‌جمشید هم دوپهلو هستند: کار مزدی با تفاوت مهارت و حقوق زنان، واقعیتی شگفت برای جهان باستان است، اما کورتش‌ها اغلب کارگران وابسته، گاه اسیران جنگی کوچانده بودند؛ آزادی ترک کار و جابه‌جایی آنان روشن نیست. پس «مزد» اینجا به معنای قرارداد آزاد امروزی نیست، و ادعای اینکه «همهٔ تخت‌جمشید با کار آزاد ساخته شد» به همان اندازهٔ اسطورهٔ «بردگان ساختند» ساده‌سازی است.',
      ],
      en: [
        'The nickname “huckster” was an aristocratic sneer, but in political economy it is a compliment. Instead of arbitrary plunder Darius set a fixed annual tribute. The economist Mancur Olson (1993) distinguished the “roving bandit,” who takes all he can, from the “stationary bandit,” who, seeing himself as owner of future revenue, limits and regularises taxation in his own interest. Darius’s tribute reform is a textbook case of that transition. A fixed sum means every extra unit produced stays with the producer — an incentive to invest and produce.',
        'Standard coin and weights cut transaction costs: assaying weight and purity no longer has to be repeated at every market. This is a genuine public good that even the classical-liberal tradition (from Smith to Mises) grants to a state guaranteeing sound money — though Mises warns the same state can debase it.',
        'Yet tribute is, in Bastiat’s term, “legal plunder”: a compulsory transfer from producer to ruler, however orderly. Persis was exempt while others paid — one people held a tax privilege over the rest. The Persepolis tablets are double-edged too: wage work with skill differentials and women’s pay is remarkable for antiquity, but kurtaš were often dependent workers, sometimes deported captives, whose freedom to quit or move is unclear. “Wages” here are not today’s free contract, and the claim that “Persepolis was built entirely by free labour” simplifies as much as the myth that “slaves built it.”',
      ],
    },
    modern: {
      fa: ['از داریوش می‌توان یک درس روشن گرفت: پیش‌بینی‌پذیری مالیات و پول سالم، حتی زیر حکومتی غیردموکراتیک، تولید را تشویق می‌کند. اما مشروعیت مالیات به رضایت مالیات‌دهنده بستگی دارد، چیزی که شاهنشاهی هرگز ادعایش را نکرد.'],
      en: ['One clear lesson from Darius: predictable taxes and sound money encourage production, even under undemocratic rule. But the legitimacy of a tax depends on the consent of those taxed — something the empire never claimed.'],
    },
    sources: ['herodotus', 'iranica-daric', 'bm-daric', 'hallock1969', 'cameron1948', 'brosius1996', 'henkelman2008', 'olson1993'],
  },
  {
    id: 'markets',
    title: { fa: 'بازار، تجارت و مالکیت خصوصی', en: 'Markets, trade and private property' },
    historical: {
      fa: [
        'راه شاهی (۱۱۱ منزل میان سارد و شوش به گفتهٔ هرودوت ۵.۵۲)، آبراه نیل–دریای سرخ (DZc)، و سفر اسکولاکس از سند تا مصر (هرودوت ۴.۴۴)، شاهنشاهی را از دریای اژه تا سند به هم پیوستند. مسافران با سند «هلمی» در منزل‌ها جیره می‌گرفتند.',
        'در بابل، بنگاه خانوادگی اگیبی (Egibi) در دوران داریوش وام می‌داد، زمین و خانه اجاره و خرید و فروش می‌کرد، و مالیات‌های شاهی را در برابر کارمزد گردآوری یا پیش‌پرداخت می‌کرد. بایگانی مردوک-ناصر-اپلی (۵۲۱–۴۸۷ پ.م.) پر از قراردادهای مکتوب با گواه و مهر است که به سال‌های پادشاهی داریوش تاریخ‌گذاری شده‌اند.',
        'نظام «زمین کمان»، «زمین اسب» و «زمین ارابه» (bīt qašti, bīt sīsî, bīt narkabti) به سربازان یا خانواده‌ها زمینی می‌داد در برابر خدمت نظامی یا مالیات. بیشترین شاهد آن، بایگانی موراشو در نیپور، از پس از داریوش (۴۵۵–۴۰۳ پ.م.) است و نشان می‌دهد این زمین‌ها به ارث می‌رسید، گرو گذاشته و به بنگاه‌ها اجاره داده می‌شد. ریشه‌های آن به احتمال زیاد در دوران داریوش است.',
        'زنان خاندان شاهی، مانند آرتیستونه (ایرتشدونه) و ایردبمه، املاک خود را داشتند، کارگران خود را جیره می‌دادند و با مهر خود فرمان صادر می‌کردند (بایگانی تخت‌جمشید).',
      ],
      en: [
        'The Royal Road (111 stations between Sardis and Susa per Herodotus 5.52), the Nile–Red Sea canal (DZc), and Scylax’s voyage from the Indus to Egypt (Herodotus 4.44) tied the empire together from the Aegean to the Indus. Travellers drew rations at stations on a halmi document.',
        'In Babylon the Egibi family firm, under Darius, lent money, leased and traded land and houses, and collected or advanced royal taxes for a fee. The archive of Marduk-nāṣir-apli (521–487 BCE) is full of written, witnessed, sealed contracts dated by Darius’s regnal years.',
        'The system of “bow land”, “horse land” and “chariot land” (bīt qašti, bīt sīsî, bīt narkabti) gave land to soldiers or families in return for service or tax. Most evidence comes from the Murašû archive at Nippur, after Darius (455–403 BCE), showing these plots were inherited, pledged and leased to firms; their roots are probably in Darius’s time.',
        'Royal women such as Artystone (Irtašduna) and Irdabama held their own estates, rationed their own workers and issued orders under their own seals (Persepolis archive).',
      ],
    },
    interpretation: {
      fa: [
        'اینجا شواهد ما از هر جای دیگر نیرومندتر است. وقتی قراردادی در بابل با تاریخ «سال ۱۰ داریوش» نوشته می‌شود، یعنی اعتبار قرارداد به بقای نظم شاهی گره خورده است، و بازرگانان روی این بقا شرط می‌بستند. نظم داریوش، بازارهای کهن بابل را نه جایگزین که حمایت کرد؛ یعنی همان «نظم خودجوشی» که هایک می‌گفت از تعامل داوطلبانهٔ افراد برمی‌خیزد، زیر چتر امنیت پارسی ادامه یافت.',
        'زمین در برابر خدمت اما نشان می‌دهد مالکیت در این نظام چندلایه بود: کشاورز حق بهره‌برداری و ارث داشت، ولی زمین در نهایت «مال شاه» بود و مشروط به خدمت. این به فئودالیسم اروپایی بیشتر شبیه است تا مالکیت مطلق رومی یا لاکی. لاک مالکیت را پیش از دولت و برآمده از کار می‌داند؛ در منطق هخامنشی، مالکیت از شاه جاری می‌شد و پاداش وفاداری بود. با این حال، اینکه این حق‌ها را می‌شد به ارث گذاشت، گرو گذاشت و اجاره داد، یعنی در عمل به مالکیت خصوصی بسیار نزدیک می‌شدند.',
        'مالکیت زنان خاندان شاهی نیز شگفت است، اما نباید آن را به همهٔ زنان تعمیم داد: اینها زنان طبقهٔ بالا بودند. در بابل نیز زنان آزاد می‌توانستند مالک باشند و قرارداد ببندند، که سنتی بابلی بود نه ابداع پارسی.',
      ],
      en: [
        'Here our evidence is stronger than anywhere else. When a Babylonian contract is dated “year 10 of Darius,” its value is tied to the survival of royal order, and merchants were betting on that survival. Darius’s order protected Babylon’s old markets rather than replacing them: the spontaneous order Hayek described, arising from voluntary interaction, continued under a Persian security umbrella.',
        'Land-for-service shows property in this system was layered: the holder had rights of use and inheritance, but the land was ultimately the king’s and conditional on service. That is closer to European feudal tenure than to Roman or Lockean full ownership. Locke grounds property in labour, prior to the state; in Achaemenid logic property flowed from the king as a reward for loyalty. Yet rights that could be inherited, pledged and leased came very close, in practice, to private property.',
        'The royal women’s estates are striking, but must not be generalised to all women: these were elite. In Babylonia free women could also own and contract — a Babylonian tradition, not a Persian invention.',
      ],
    },
    modern: {
      fa: ['اقتصاد امروز همان را تأیید می‌کند که بازرگانان بابلی می‌دانستند: قرارداد مکتوب، دادگاه قابل اتکا و جاده‌های امن، ارزان‌ترین زیرساخت ثروت‌اند. اما مالکیتی که به لطف حاکم وابسته باشد، در روز خشم او نیز از دست می‌رود.'],
      en: ['Modern economics confirms what Babylonian merchants knew: written contracts, reliable courts and safe roads are the cheapest infrastructure of wealth. But property held at the ruler’s pleasure can be lost on the day of his anger.'],
    },
    sources: ['herodotus', 'abraham2004', 'stolper1985', 'hallock1969', 'brosius1996', 'kuhrt2007', 'briant2002'],
  },
  {
    id: 'religion',
    title: { fa: 'دین: اهورامزدا و آیین‌های محلی', en: 'Religion: Ahuramazda and local cults' },
    historical: {
      fa: [
        'کتیبه‌های داریوش پیوسته می‌گویند «به خواست اهورامزدا» کار کرده است. او زرتشت را نام نمی‌برد و پژوهشگران دربارهٔ اینکه داریوش «زرتشتی» به معنای امروزی بود اتفاق ندارند.',
        'بایگانی تخت‌جمشید نشان می‌دهد دستگاه شاهی به خدایان ایلامی (هومبان و دیگران) و ایرانی و حتی بابلی قربانی و جیره می‌داد (هنکلمن ۲۰۰۸). در مصر، ودجاهورسنت گزارش می‌دهد داریوش به او فرمان بازسازی «خانهٔ زندگی» سائیس را داد؛ نقش داریوش به شیوهٔ فرعون در معبد هیبیس در خارگه دیده می‌شود. عزرا ۶ تأیید و پشتیبانی مالی داریوش از معبد اورشلیم را روایت می‌کند.',
        '«نامهٔ داریوش به گاداتاس» (به یونانی، روی سنگی از دورهٔ رومی در مگنزیا) شهربانی را به خاطر مالیات‌گیری از باغبانان مقدس آپولون سرزنش می‌کند؛ بریان (۲۰۰۳) آن را ساختگی می‌داند و بحث ادامه دارد.',
      ],
      en: [
        'Darius’s inscriptions repeatedly say he acted “by the favour of Ahuramazda.” He never names Zarathustra, and scholars disagree whether he was “Zoroastrian” in the later sense.',
        'The Persepolis archive shows the royal administration issuing offerings and rations to Elamite (Humban and others), Iranian and even Babylonian gods (Henkelman 2008). In Egypt Udjahorresnet reports Darius ordered him to restore the House of Life at Sais; Darius appears as pharaoh at the Hibis temple in Kharga. Ezra 6 reports Darius confirming and funding the Jerusalem temple.',
        'The “Letter of Darius to Gadatas” (Greek, on a Roman-era stone from Magnesia) rebukes a satrap for taxing Apollo’s sacred gardeners; Briant (2003) considers it a forgery and the debate continues.',
      ],
    },
    interpretation: {
      fa: [
        'آزادی وجدان، در زبان حقوق مالکیت، مالکیت فرد بر ذهن و آیین خویش است. نظم داریوش این را به معنای امروزی تضمین نکرد: آیین‌ها جمعی و شهری بودند، نه حق فردی. اما در عمل، شاه به جای تحمیل یک دین، به آیین‌های محلی هزینه داد و از کاهنان مشروعیت گرفت. انگیزه آشکارا سیاسی بود؛ ولی نتیجه این بود که دارایی معبدها و جماعت‌های دینی محترم ماند.',
        'مرز این تساهل هم روشن است: در بیستون، دشمن «دروغ» است و شورشی پیرو دروغ. در کتیبهٔ دئوه‌ی خشایارشا (پسر داریوش) سخن از ویران کردن پرستشگاه «دیوان» است. دین شاهی وقتی با وفاداری سیاسی گره بخورد، دشمن سیاسی را دشمن دینی هم می‌کند.',
      ],
      en: [
        'Freedom of conscience, in property-rights terms, is self-ownership of one’s mind and worship. Darius’s order did not guarantee that in a modern sense: cults were collective and civic, not individual rights. In practice, though, the king funded local cults instead of imposing one religion and drew legitimacy from their priests. The motive was clearly political, but the result was respect for the property of temples and religious communities.',
        'The limits are clear too: at Behistun the enemy is “the Lie” and the rebel its follower. In the daiva inscription of Xerxes (Darius’s son) a sanctuary of “demons” is destroyed. When royal religion is fused with political loyalty, a political enemy becomes a religious one.',
      ],
    },
    modern: {
      fa: ['تساهل دینی داریوش الگویی سیاسی بود، نه منشور آزادی وجدان. با این حال در برابر بسیاری از امپراتوری‌های پس از خود، پشتوانه‌ای واقعی برای این ادعاست که تنوع دینی و ثبات سیاسی می‌توانند هم‌زیست باشند.'],
      en: ['Darius’s religious tolerance was a political model, not a charter of freedom of conscience. Still, compared with many later empires, it is real support for the claim that religious diversity and political stability can coexist.'],
    },
    sources: ['kent1953', 'henkelman2008', 'lichtheim1980', 'ezra', 'briant2003', 'kuhrt2007'],
  },
  {
    id: 'army',
    title: { fa: 'ارتش و پشتیبانی', en: 'Army and logistics' },
    historical: {
      fa: [
        'هستهٔ ارتش، پیادگان و سواران پارسی و مادی بودند. هرودوت (۷.۸۳، در شرح سپاه خشایارشا) از ده هزار «جاویدان» سخن می‌گوید که شمارشان همیشه کامل نگه داشته می‌شد؛ نام پارسی آنان روشن نیست. کاشی‌های لعابی شوش کمانداران و نیزه‌داران گارد را نشان می‌دهند.',
        'لشکرکشی‌ها از نیروهای همهٔ ساتراپی‌ها و ناوگان فنیقی، ایونی، قبرسی و مصری استفاده می‌کردند. زمین کمان و اسب، سربازان را با زمین تأمین می‌کرد. انبارها، منزل‌ها و جیره‌های ثبت‌شده در بایگانی تخت‌جمشید، ستون پشتیبانی همین ارتش بودند. پل‌های قایقی بسفر و دانوب کار مهندسان یونانی در خدمت شاه بود.',
      ],
      en: [
        'The core was Persian and Median infantry and cavalry. Herodotus (7.83, describing Xerxes’ army) speaks of 10,000 “Immortals” kept always at full strength; their Persian name is unknown. The glazed-brick panels of Susa show the guard’s archers and spearmen.',
        'Campaigns drew contingents from every satrapy and Phoenician, Ionian, Cypriot and Egyptian fleets. Bow and horse land supplied soldiers through land grants. The stores, stations and rations recorded at Persepolis were this army’s logistic backbone. The pontoon bridges over the Bosporus and Danube were Greek engineers working for the king.',
      ],
    },
    interpretation: {
      fa: [
        'ارتش داریوش نشان می‌دهد شاهنشاهی هم شبکهٔ تجارت بود و هم ماشین زور. هزینهٔ این ماشین را خراج می‌پرداخت، و خراج را ارتش تضمین می‌کرد: چرخه‌ای که در آن امنیت جاده و بازار با همان شمشیری خریده می‌شد که اگر لازم بود، شهر شورشی را ویران می‌کرد.',
        'زمین در برابر خدمت، سرباز را به ذی‌نفع نظم بدل می‌کرد: کسی که زمینی برای از دست دادن دارد، کمتر می‌شورد. این همان پیوند مالکیت و ثبات است، اما مالکیتی مشروط که قدرت را در دست شاه نگه می‌داشت.',
      ],
      en: [
        'Darius’s army shows the empire was both a trade network and a machine of force. Tribute paid for the machine, and the machine secured the tribute: a cycle in which the safety of road and market was bought with the same sword that could raze a rebellious city.',
        'Land-for-service turned soldiers into stakeholders: someone with land to lose is less likely to revolt. That is the link between property and stability — but a conditional property that kept power in the king’s hand.',
      ],
    },
    modern: {
      fa: ['جاویدان در فرهنگ امروز نماد شکوه شده است. تاریخ واقعی‌تر، پشتیبانی و اداره را قهرمان اصلی می‌کند: بدون جیره و جاده، هیچ سپاهی جاویدان نمی‌ماند.'],
      en: ['The Immortals have become a modern symbol of glory. The truer history makes logistics and administration the real heroes: without rations and roads, no army stays immortal.'],
    },
    sources: ['herodotus', 'hallock1969', 'briant2002', 'stolper1985'],
  },
  {
    id: 'law-liberty',
    title: { fa: 'قانون و آزادی‌های فردی', en: 'Law and individual liberty' },
    historical: {
      fa: [
        'کتیبهٔ DNb بر آرامگاه داریوش، تصویر «شاه دادگر» را می‌کشد: دوست راستی است، نمی‌خواهد ناتوان از توانا آسیب ببیند و نه توانا از ناتوان؛ پاداش را به اندازهٔ همکاری و کیفر را به اندازهٔ آسیب می‌دهد؛ و سخن یک تن را دربارهٔ دیگری نمی‌پذیرد تا سوگند هر دو را بشنود.',
        'در همان دوران، بیستون مثله کردن و بر دار کردن شورشیان (فرورتیش، چیثرتخمه و دیگران) را با افتخار گزارش می‌کند. هرودوت کوچاندن جمعی میلتوسیان، ارتریاییان و مردم بارکه را روایت می‌کند. بردگی در بابل و جاهای دیگر برقرار بود و قراردادهای فروش برده در دوران داریوش وجود دارد.',
      ],
      en: [
        'DNb on Darius’s tomb paints the “just king”: a friend of right, who does not wish the weak harmed by the strong nor the strong by the weak; who rewards in proportion to cooperation and punishes in proportion to harm; and who will not believe one man’s word against another until he hears the sworn statements of both.',
        'In the same reign Behistun proudly reports the mutilation and impalement of rebels (Fravartish, Ciçantaxma and others). Herodotus reports mass deportations of Milesians, Eretrians and the people of Barca. Slavery continued in Babylonia and elsewhere, and slave-sale contracts from Darius’s reign survive.',
      ],
    },
    interpretation: {
      fa: [
        'DNb یکی از کهن‌ترین بیان‌های اصل «برابری در برابر داوری» و «شنیدن هر دو طرف» (audi alteram partem) است، و نیز اصل تناسب کیفر با آسیب. اینها ستون‌های حقوق فردی‌اند: فرد را مسئول کار خودش می‌دانند، نه خانواده یا قومش. اما DNb تعهد اخلاقی شاه است، نه حقی که فرد بتواند علیه شاه مطالبه کند. «من نمی‌خواهم» به معنای «تو حق داری» نیست.',
        'و شواهد خلاف را باید کامل گفت: مثله کردن مخالفان سیاسی، کوچاندن جمعی، و برده‌داری با هر خوانشی از آزادی فردی ناسازگارند. کیفر جمعی شهرهای شورشی درست همان «تنبیه افراد به خاطر کار دیگران» است که چارچوب ما محکوم می‌کند. پس داوری صادقانه این است: داریوش ایدهٔ «عدالت برای توانا و ناتوان» را بر سنگ نوشت، اما آن را برای هر کسی که وفاداری‌اش را زیر سؤال می‌برد، به حالت تعلیق درمی‌آورد.',
      ],
      en: [
        'DNb is one of the oldest statements of equality before judgment and of hearing both sides (audi alteram partem), and of punishment proportional to harm. These are pillars of individual rights: they hold a person responsible for his own deeds, not those of his family or people. But DNb is the king’s moral self-commitment, not a right an individual could claim against the king. “It is not my wish” is not “you have a right.”',
        'And the counter-evidence must be stated in full: mutilating political opponents, mass deportation and slavery are incompatible with any reading of individual liberty. The collective punishment of rebel cities is exactly the “punishing individuals for the acts of others” our framework condemns. The honest verdict: Darius carved the idea of justice for strong and weak in stone, but suspended it for anyone who questioned his loyalty.',
      ],
    },
    modern: {
      fa: ['جملهٔ DNb دربارهٔ ناتوان و توانا را می‌توان با غرور خواند، به شرط آنکه همان سنگ‌ها، بیستون را هم بخوانیم. ارزش واقعی DNb این است که معیاری داد که می‌توان خود داریوش را با آن سنجید.'],
      en: ['The DNb sentence on the weak and the strong can be read with pride, provided the same stones of Behistun are read too. DNb’s real value is that it gives a standard by which Darius himself can be judged.'],
    },
    quotes: [
      { text: 'It is not my wish that the weak should have harm done him by the strong, nor is it my wish that the strong should have harm done him by the weak.', fa: 'خواست من نیست که ناتوان از توانا آسیب ببیند، و نه خواست من است که توانا از ناتوان آسیب ببیند.', ref: 'DNb §2', source: 'livius-dnb' },
      { text: 'What a man says against a man, that does not convince me, until I hear the sworn statements of both.', fa: 'آنچه کسی بر ضد کسی می‌گوید مرا قانع نمی‌کند، تا سوگندِ هر دو را بشنوم.', ref: 'DNb §2', source: 'livius-dnb' },
    ],
    sources: ['livius-dnb', 'kent1953', 'herodotus', 'kuhrt2007', 'abraham2004'],
  },
  {
    id: 'building',
    title: { fa: 'ساختن و کار: شوش و تخت‌جمشید', en: 'Building and labour: Susa and Persepolis' },
    historical: {
      fa: [
        'منشور بنیاد شوش (DSf) فهرستی از مواد و مردمان می‌دهد: سدر لبنان را آشوریان تا بابل و کاریان و ایونیان تا شوش آوردند؛ چوب یکا از گنداره و کرمان؛ زر از سارد و باختر؛ لاجورد و عقیق از سغد؛ فیروزه از خوارزم؛ نقره و آبنوس از مصر؛ عاج از حبشه، هند و رخج. سنگ‌تراشان ایونی و ساردی، زرگران مادی و مصری، و آجرسازان بابلی کار کردند.',
        'لوح‌های تخت‌جمشید هزاران کارگر از ملیت‌های گوناگون (مصری، ایونی، کاری، بابلی، لیدیایی و...) را با جیرهٔ ثبت‌شده نشان می‌دهند؛ سنگ‌تراشان و دیگر متخصصان جیرهٔ بیشتر داشتند.',
      ],
      en: [
        'The Susa foundation charter (DSf) lists materials and peoples: Lebanese cedar brought by Assyrians to Babylon and by Carians and Ionians to Susa; yakā wood from Gandhara and Carmania; gold from Sardis and Bactria; lapis and carnelian from Sogdiana; turquoise from Chorasmia; silver and ebony from Egypt; ivory from Ethiopia, India and Arachosia. Ionian and Sardian stonecutters, Median and Egyptian goldsmiths, and Babylonian brickmakers did the work.',
        'The Persepolis tablets show thousands of workers of many origins (Egyptian, Ionian, Carian, Babylonian, Lydian …) on recorded rations; stonecutters and other specialists drew more.',
      ],
    },
    interpretation: {
      fa: [
        'DSf بیش از همه، ستایش تقسیم کار است: هر مردم آنچه را بهتر می‌داند می‌آورد و می‌سازد. این تصویر نزدیک به ایدهٔ اسمیتی مزیت و تخصص است، اما سازمان‌دهنده نه بازار، بلکه شاه است. ثروت از سراسر جهان شناخته‌شده به یک کاخ جریان یافت؛ پرسش مالکیت این است که سهم سازندگان از آنچه ساختند چه بود؟ جیره و دستمزد واقعی بود و مهارت پاداش داشت؛ اما مالک ارزش نهایی، شاه بود.',
      ],
      en: [
        'Above all, DSf celebrates division of labour: each people brings and makes what it does best. The picture is close to Smith’s idea of specialisation and advantage — but the organiser is the king, not the market. Wealth from the known world flowed into one palace; the property question is what share the builders kept. Rations and wages were real and skill was rewarded; but the owner of the final value was the king.',
      ],
    },
    modern: {
      fa: ['تخت‌جمشید را نه بردگان ساختند و نه «شهروندان آزاد» به معنای امروزی؛ کارگرانی ساختند که مزد و جیره می‌گرفتند و در شبکه‌ای از وابستگی به دستگاه شاهی زندگی می‌کردند. همین واقعیت پیچیده، از هر اسطوره‌ای ارزشمندتر است.'],
      en: ['Persepolis was built neither by slaves nor by “free citizens” in today’s sense, but by workers who drew wages and rations within a web of dependence on the royal economy. That complex truth is worth more than any myth.'],
    },
    sources: ['kent1953', 'livius-ari', 'hallock1969', 'pfa', 'kuhrt2007'],
  },
  {
    id: 'legacy',
    title: { fa: 'میراث', en: 'Legacy' },
    historical: {
      fa: [
        'ساختار ساتراپی، راه‌ها، آرامی شاهنشاهی به عنوان زبان اداری، و سکه، از داریوش به جانشینانش و تا حد زیادی به اسکندر و سلوکیان رسید. یونانیان او را هم سازمان‌دهنده‌ای بزرگ و هم دشمن ماراتن به یاد آوردند.',
      ],
      en: [
        'The satrapal structure, roads, Imperial Aramaic as the administrative language and coinage passed from Darius to his successors and largely to Alexander and the Seleucids. Greeks remembered him both as a great organiser and as the enemy at Marathon.',
      ],
    },
    interpretation: {
      fa: [
        'میراث پایدار داریوش نه فتح، که نهاد بود: قواعدی که پس از او ماند. نهادهایی که هزینهٔ معامله را کم کنند و قرارداد را محترم بشمارند، از حاکمانشان بیشتر عمر می‌کنند. همین درس مرکزی چارچوب ما است.',
      ],
      en: [
        'Darius’s lasting legacy was not conquest but institutions: rules that outlived him. Institutions that lower transaction costs and respect contracts outlive their rulers. That is the central lesson of our framework.',
      ],
    },
    modern: {
      fa: ['برای ایرانیان، داریوش نماد سازندگی و سامان است. این صفحه پیشنهاد می‌کند او را با معیار خودش بسنجیم: آیا ناتوان از توانا ایمن بود؟'],
      en: ['For Iranians Darius symbolises building and order. This page suggests judging him by his own standard: was the weak safe from the strong?'],
    },
    sources: ['briant2002', 'kuhrt2007', 'iranica-darius'],
  },
]

/** Closing synthesis essay (interpretation layer only). */
export const synthesis: Synthesis = {
  title: { fa: 'جمع‌بندی: «راهزن ساکن» یا نگهبان مالکیت؟ نظم داریوش با عینک حقوق مالکیت', en: 'Synthesis: “stationary bandit” or guardian of property? Darius’s order through a property-rights lens' },
  paras: {
    fa: [
      'داریوش با زور به قدرت رسید و با زور آن را نگه داشت. اما آنچه او را از بسیاری فاتحان جدا می‌کند، این است که پس از پیروزی، غارت را به قاعده بدل کرد. خراج سالانهٔ معین، سکه و وزنهٔ استاندارد، راه‌ها و منزل‌ها، بایگانی‌های مکتوب و احترام به قانون‌های محلی، همه یک کارکرد داشتند: نامطمئنی را کم کنند. و نامطمئنی، بزرگ‌ترین دشمن مالکیت است. کشاورزی که نمی‌داند فردا چه از او گرفته می‌شود، نمی‌کارد؛ بازرگانی که نمی‌داند قراردادش اجرا می‌شود، وام نمی‌دهد.',
      'شواهد نشان می‌دهد این پیش‌بینی‌پذیری واقعاً به کار افتاد: بنگاه‌های بابلی در دوران داریوش رونق داشتند، قراردادها با سال‌های پادشاهی او تاریخ می‌خوردند، کار مزدی با تفاوت مهارت و حتی حقوق زنان ثبت می‌شد، و زمین‌های خدمتی به ارث می‌رسید و گرو گذاشته می‌شد. این یک «نظم مالکیت» واقعی است، شاید پیشرفته‌ترین نظم فراقومی جهان تا آن زمان.',
      'اما این نظم دو مرز بنیادین داشت. نخست، مالکیت از بالا جاری می‌شد: شاه مالک نهایی زمین فتح‌شده بود و حق‌ها را در برابر وفاداری و خدمت می‌بخشید. مالکیت حق طبیعی فرد پیش از دولت (لاک) نبود، امتیازی در درون دولت بود. دوم، هیچ نهادی شاه را محدود نمی‌کرد. DNb تعهدی اخلاقی است که شاه به خود می‌دهد، و بیستون نشان می‌دهد چه بر سر کسی می‌آمد که این تعهد را آزمایش می‌کرد. خراج، به تعبیر باستیا، غارت قانونی بود؛ کوچاندن و کیفر جمعی، نفی مسئولیت فردی.',
      'پس پاسخ صادقانه به پرسش ما چنین است: داریوش نگهبان مالکیت بود تا جایی که مالکیت در خدمت پایداری شاهنشاهی بود. او فهمید که رعیت ثروتمند و قرارداد محترم، خراج بیشتر و شورش کمتر می‌آورد؛ این همان منطق «راهزن ساکن» اولسون است. نمی‌توانیم بگوییم مالکیت خصوصی «شاهنشاهی را ساخت»؛ ارتش، جغرافیا، مشروعیت دینی و پیوند اقوام نیز علت بودند، و شواهد علّی برای ادعایی تک‌عاملی نداریم. اما می‌توانیم بگوییم بخش پایدار میراث او، دقیقاً همان بخش‌هایی است که از مالکیت و قرارداد محافظت کردند، و بخش ناپایدار، همان‌هایی که بر زور تکیه داشتند.',
      'درس امروز: آنچه داریوش به عنوان لطف شاهی داد، یعنی امنیت مالکیت، قرارداد اجراشدنی و عدالت برای توانا و ناتوان، باید حق باشد، نه لطف؛ و برای آنکه حق باشد، باید نهادی وجود داشته باشد که حتی شاه را محدود کند. داریوش نیمهٔ نخست این معادله را ساخت. نیمهٔ دوم را تاریخ بعدی باید می‌ساخت.',
    ],
    en: [
      'Darius took power by force and kept it by force. What sets him apart from many conquerors is that after victory he turned plunder into rule. Fixed annual tribute, standard coins and weights, roads and stations, written archives and respect for local law all did one thing: reduce uncertainty. And uncertainty is the greatest enemy of property. A farmer who does not know what will be taken tomorrow does not plant; a merchant who does not know whether his contract will be enforced does not lend.',
      'The evidence shows this predictability worked: Babylonian firms flourished under Darius, contracts were dated by his regnal years, wage labour with skill differentials and even women’s pay was recorded, and service land was inherited and pledged. That is a real property order — perhaps the most developed multi-ethnic one in the world to that date.',
      'But it had two fundamental limits. First, property flowed from above: the king was the ultimate owner of conquered land and granted rights in return for loyalty and service. Property was not a natural right of the individual prior to the state (Locke) but a privilege within it. Second, no institution constrained the king. DNb is a moral commitment the king makes to himself, and Behistun shows what happened to anyone who tested it. Tribute was, in Bastiat’s term, legal plunder; deportation and collective punishment denied individual responsibility.',
      'So the honest answer to our question is: Darius was a guardian of property insofar as property served the stability of the empire. He understood that rich subjects and respected contracts bring more tribute and fewer revolts — Olson’s logic of the stationary bandit. We cannot say private property “built the empire”: the army, geography, religious legitimacy and the integration of peoples were causes too, and we lack causal evidence for a single-factor claim. But we can say the durable part of his legacy is exactly the part that protected property and contract, and the fragile part is the part that relied on force.',
      'The lesson today: what Darius gave as royal favour — secure property, enforceable contracts, justice for strong and weak — must be a right, not a favour; and for it to be a right there must be an institution that binds even the king. Darius built the first half of that equation. Later history had to build the second.',
    ],
  },
  sources: ['olson1993', 'abraham2004', 'stolper1985', 'hallock1969', 'livius-dnb', 'kent1953', 'briant2002', 'kuhrt2007'],
}
