import type { Place, PlaceSection } from './types'

const h = (fa: string[], en: string[]) => ({ layer: 'historical' as const, paras: { fa, en } })
const p = (fa: string[], en: string[]) => ({ layer: 'philosophical' as const, paras: { fa, en } })
const m = (fa: string[], en: string[]) => ({ layer: 'modern' as const, paras: { fa, en } })

const sections: PlaceSection[] = [
  {
    id: 'location', title: { fa: 'جایگاه و نام', en: 'Location and name' },
    layers: [h(
      ['کوه بیستون در رشته‌کوه زاگرس، حدود ۳۰ کیلومتری شرق کرمانشاه، بر سر راه باستانی‌ای است که دشت میان‌رودان را به فلات ایران و همدان (اکباتان) می‌پیوست؛ همان راهی که بعدها «جادهٔ خراسان بزرگ» نام گرفت. چشمه‌ها و دشت پای کوه، این‌جا را از دیرباز منزلگاه کاروان‌ها و لشکرها کرده است.', 'نام پارسی باستان آن را معمولاً ‎*bagastāna‎ «جایگاه خدایان» بازسازی می‌کنند؛ دیودور سیسیلی آن را Bagistanon می‌نامد. جغرافی‌دانان مسلمان آن را «بهستون/بهیستون» نوشته‌اند (گویی «با ستون‌های نیک») و صورت امروزی «بیستون» (گویی «بی‌ستون») دگرگونی عامیانهٔ همان است (Schmitt، ایرانیکا).'],
      ['Mount Bisotun lies in the Zagros, about 30 km east of Kermanshah, on the ancient road linking Mesopotamia to the Iranian plateau and Hamadan (Ecbatana), later called the Great Khorasan Road. Its springs and the plain below made it a stop for caravans and armies from the earliest times.', 'Its Old Persian name is usually reconstructed as *bagastāna, “place of the gods”; Diodorus of Sicily calls it Bagistanon. Medieval geographers wrote Behestūn (as if “with good columns”); the modern Bisotun (as if “without columns”) is a popular transformation of it (Schmitt, Iranica).'],
    )],
    sources: ['unesco', 'iranica-bisotun'],
  },
  {
    id: 'prehistory', title: { fa: 'پیش از تاریخ: غار بیستون', en: 'Prehistory: the Bisotun cave' }, period: { fa: 'پارینه‌سنگی میانه', en: 'Middle Palaeolithic' },
    layers: [h(
      ['کهن‌ترین نشان آدمی در بیستون یافته‌های پارینه‌سنگی غاری کنار چشمه است که کارلتون کون در ۱۹۴۹ کاوید. ابزارهای سنگی آن از سنت موستری (پارینه‌سنگی میانه) شمرده می‌شود و پژوهش‌های بعدی یک استخوان انسانی آن را به نئاندرتال نسبت داده‌اند (این نسبت را با منابع تخصصی باید سنجید). پس از آن، نشانه‌های یک سکونتگاه هزارهٔ دوم پ.م. و دژی که «دژ مادی» نام گرفته است دیده می‌شود؛ برخی آن را همان دژ سیکَیَووَتیش می‌دانند که داریوش در آن گئوماتا را کشت.'],
      ['The earliest human traces at Bisotun are Palaeolithic finds from a cave by the spring, excavated by Carleton Coon in 1949. Its stone tools are classed as Mousterian (Middle Palaeolithic), and later studies attribute a human bone from it to a Neanderthal (this attribution should be checked against specialist literature). Then come traces of a second-millennium BCE settlement and a so-called “Median fortress”, which some identify with Sikayauvatish, where Darius killed Gaumata.'],
    )],
    sources: ['unesco', 'iranica-bisotun'],
  },
  {
    id: 'relief', title: { fa: 'نقش و کتیبهٔ داریوش', en: 'The relief and inscription of Darius' }, period: { fa: 'ح. ۵۲۰–۵۱۸ پ.م.', en: 'c. 520–518 BCE' },
    layers: [
      h(
        ['داریوش بزرگ پس از سرکوب شورش‌های سال‌های ۵۲۲–۵۲۱ پ.م.، بر صخره‌ای بلند و دسترس‌ناپذیر بالای جاده، نقش برجسته‌ای کند: خود او پای بر گئوماتای مغ نهاده، نُه «شاه دروغین» دست‌بسته و با بند گردن در برابرش ایستاده‌اند، دو ملازم پشت سر او هستند و پیکری بالدار بر فراز صحنه است که بیشتر آن را اهورامزدا می‌دانند (هرچند این شناسایی محل بحث است). بعدها پیکر دهم، سکونخای سکایی، با کلاه نوک‌تیز افزوده شد.', 'متن، سه زبانه است: ایلامی، بابلی (اکدی) و پارسی باستان. ترتیب نگارش و جای‌به‌جایی متن ایلامی نشان می‌دهد که نقش و نوشته در چند مرحله کار شده است. ستون پنجم پارسی، که از سال‌های دوم و سوم پادشاهی سخن می‌گوید، بعدتر افزوده شد. خود نقش حدود ۳ متر بلندی و ۵٫۵ متر درازا دارد و حدود ۶۶ متر بالاتر از چشمه‌های دشت کنده شده است (Schmitt، ایرانیکا). به گفتهٔ لوشای، متن ایلامی کهن‌ترین است و خط پارسی باستان پس از پایان نقش، حدود ۵۲۰ پ.م.، پدید آمد. رونوشتی از خود نقش هم در بابل برپا شده بود.'],
        ['After crushing the revolts of 522–521 BCE, Darius the Great carved a relief on a high, inaccessible cliff above the road: he stands with his foot on Gaumata the Magian, nine bound “lying kings” stand roped before him, two attendants stand behind him, and a winged figure, usually identified as Ahuramazda (the identification is debated), hovers above. A tenth figure, Skunkha the Scythian in a pointed cap, was added later.', 'The text is trilingual: Elamite, Babylonian (Akkadian) and Old Persian. The order of carving and the relocation of the Elamite text show the monument was made in several stages. The fifth Old Persian column, on the second and third regnal years, is a later addition. The relief itself is about 3 m high and 5.5 m long, carved about 66 m above the springs on the plain (Schmitt, Iranica). According to Luschey the Elamite text is the oldest, and the Old Persian script was introduced only after the relief was finished, c. 520 BCE. A copy of the relief itself stood at Babylon.'],
      ),
      p(
        ['بیستون نخستین «بیانیهٔ مشروعیت» بلندِ ایران است. داریوش حق خود را بر نسب، بر خواست اهورامزدا و بر مبارزه با «دروغ» بنا می‌کند. از دید آزادی، مهم این است که پادشاه لازم دیده در برابر مردم استدلال کند و روایت خود را ثبت کند؛ اما باید به یاد داشت که این روایت یک‌طرفه است و صدای شورشیان در آن شنیده نمی‌شود.'],
        ['Behistun is Iran’s first long “statement of legitimacy”. Darius grounds his right in lineage, in Ahuramazda’s favour and in the fight against “the Lie”. From the standpoint of liberty, what matters is that the king felt he had to argue his case to his subjects and put it on record; but the account is one-sided, and the rebels’ voices are absent.'],
      ),
    ],
    photos: ['relief-gaumata', 'darius-closeup'],
    sources: ['kent', 'schmitt1991', 'king-thompson', 'iranica-bisotun', 'iranica-bisotun-iii'],
  },
  {
    id: 'text', title: { fa: 'متن کتیبه: خلاصهٔ بند به بند', en: 'The text: section-by-section summary' },
    layers: [h(
      ['ما متن کامل را رونویسی نمی‌کنیم، زیرا ترجمه‌های جدید دارای حق نشرند. ترجمهٔ L. W. King و R. C. Thompson (۱۹۰۷) در مالکیت عمومی است و از راه پیوند کتاب‌شناسی در دسترس است. خلاصه، با شمارهٔ بندهای پارسی باستان (DB):', '§۱–۹: داریوش خود را معرفی می‌کند، نسب هخامنشی‌اش را تا هخامنش برمی‌شمرد و بیست‌وسه سرزمین فرمانبر را نام می‌برد.', '§۱۰–۱۵: کمبوجیه برادرش بردیا را پنهانی می‌کشد؛ گئوماتای مغ خود را بردیا می‌خواند و پادشاهی را می‌گیرد؛ داریوش با یارانش او را در ۵۲۲ پ.م. می‌کشد و آنچه گئوماتا ستانده بود به مردم بازمی‌گرداند.', '§۱۶–۵۷: شورش‌های پی‌درپی در ایلام، بابل، ماد، پارس، ارمنستان، مرو و دیگر جاها و نبردهای سرداران داریوش، با جای و روز هر نبرد.', '§۵۸–۷۰: داریوش سوگند می‌خورد که راست گفته، شاهان آینده را از دروغ و ستم بازمی‌دارد، از نگه‌داشتن نقش و کتیبه سخن می‌گوید و یاران شش‌گانه‌اش را نام می‌برد. بند ۷۰ (در متن ایلامی) از نوشتن متن «به آریایی» و فرستادن رونوشت‌ها به سراسر کشور سخن می‌گوید.', '§۷۱–۷۶ (ستون پنجم): لشکرکشی سال‌های بعد به ایلام و به سکاهای تیزخود.'],
      ['We do not reproduce the full text, since modern translations are under copyright. The translation of L. W. King and R. C. Thompson (1907) is in the public domain and is linked in the bibliography. Summary, by Old Persian section numbers (DB):', '§§1–9: Darius introduces himself, traces his Achaemenid lineage to Achaemenes, and names twenty-three subject lands.', '§§10–15: Cambyses secretly kills his brother Bardiya; Gaumata the Magian claims to be Bardiya and seizes the kingship; Darius and his companions kill him in 522 BCE, and Darius restores to the people what Gaumata had taken.', '§§16–57: successive revolts in Elam, Babylon, Media, Persia, Armenia, Margiana and elsewhere, and the battles of Darius’s generals, each with place and day.', '§§58–70: Darius swears he has told the truth, warns future kings against the Lie and injustice, speaks of preserving the relief and text, and names his six helpers. §70 (in the Elamite version) speaks of writing the text “in Aryan” and sending copies throughout the lands.', '§§71–76 (column V): later campaigns against Elam and the Scythians with pointed caps.'],
    )],
    sources: ['kent', 'schmitt1991', 'king-thompson'],
  },
  {
    id: 'property', title: { fa: 'بند ۱۴: مالکیت در سنگ', en: 'DB §14: property in stone' },
    layers: [
      h(
        ['در بند ۱۴، داریوش می‌گوید پادشاهی را که از دودمانش ستانده شده بود به جای خود بازگرداند، پرستشگاه‌هایی را که گئوماتا ویران کرده بود از نو ساخت، و چراگاه‌ها، رمه‌ها، بندگان خانگی و خانه‌هایی را که گئوماتا از مردم گرفته بود به آنان بازگرداند (خلاصه بر پایهٔ ترجمهٔ Kent 1953؛ برگردان فارسی از ماست). معنای دقیق برخی واژه‌ها، به‌ویژه آنچه «بندگان خانگی» ترجمه می‌شود، محل بحث است.'],
        ['In §14 Darius says he restored the kingship taken from his family, rebuilt the sanctuaries Gaumata had destroyed, and gave back to the people the pastures, herds, household servants and houses that Gaumata had seized (summary after Kent 1953). The exact sense of some words, especially the one rendered “household servants”, is debated.'],
      ),
      p(
        ['این بند شگفت‌انگیز است: کهن‌ترین سند بلند شاهی ایران، بازگرداندن داراییِ ستانده‌شده را یکی از دلایل مشروعیت شاه می‌شمارد. یعنی مصادره را «دروغ» و بازگرداندن مال را «راستی» می‌داند. اما نباید آن را حقوق مالکیت به معنای امروزی خواند: بازگرداننده خود شاه است و حق، از دست او می‌رسد، نه از قانونی که او را هم محدود کند. فهرست «بندگان» هم یادآور است که آدمی می‌توانست خود دارایی دیگری باشد.'],
        ['This section is remarkable: Iran’s oldest long royal text counts the restitution of seized property among the grounds of a king’s legitimacy, treating confiscation as “the Lie” and restitution as “truth”. But it should not be read as property rights in the modern sense: the restorer is the king himself, and the right flows from his hand, not from a law that binds him too. The listing of “servants” is a reminder that a person could be another’s property.'],
      ),
      m(
        ['برای ایرانی امروز، بند ۱۴ پرسشی زنده است: آیا امنیت دارایی لطف فرمانرواست یا حق شهروند؟ بیستون نشان می‌دهد که این پرسش ۲۵۰۰ سال پیش هم در سنگ کنده شده بود.'],
        ['For Iranians today, §14 is a live question: is the security of property a ruler’s favour or a citizen’s right? Behistun shows the question was carved in stone 2,500 years ago.'],
      ),
    ],
    sources: ['kent', 'schmitt1991'],
  },
  {
    id: 'copies', title: { fa: 'رونوشت‌ها: بابل و الفانتین', en: 'Copies: Babylon and Elephantine' },
    layers: [h(
      ['داریوش گفته بود رونوشت‌ها را به سراسر کشور فرستاد، و باستان‌شناسی آن را تأیید می‌کند: پاره‌هایی از یک ستون سنگی با متن بابلی در بابل، و ترجمه‌ای آرامی بر پاپیروس در الفانتین مصر، که در زمان داریوش دوم (اواخر سدهٔ پنجم پ.م.) رونویسی شده است، یافت شده‌اند. پس متن، نه تنها بر صخره، بلکه در اداره‌ها و پادگان‌های دوردست خوانده می‌شد.'],
      ['Darius said he sent copies throughout the lands, and archaeology confirms it: fragments of a stone stele with the Babylonian text were found at Babylon, and an Aramaic version on papyrus, copied under Darius II (late fifth century BCE), was found at Elephantine in Egypt. The text was read not only on the cliff but in distant offices and garrisons.'],
    )],
    sources: ['schmitt1991', 'iranica-bisotun'],
  },
  {
    id: 'decipherment', title: { fa: 'رمزگشایی خط میخی', en: 'Deciphering cuneiform' }, period: { fa: '۱۸۰۲–۱۸۵۷ م.', en: '1802–1857' },
    layers: [h(
      ['گئورگ فریدریش گروتفند در ۱۸۰۲ از روی کتیبه‌های تخت‌جمشید نخستین گام‌ها را در خواندن پارسی باستان برداشت. هنری راولینسون، افسر بریتانیایی، از ۱۸۳۵ تا ۱۸۴۷ با بالا رفتن از صخره و گاه آویزان از طناب، متن‌های بیستون را رونویسی کرد؛ ترجمهٔ پارسی باستان او در ۱۸۴۶–۱۸۴۷ منتشر شد. متن پارسی باستان کلید متن بابلی شد؛ و در ۱۸۵۷ آزمونی که در آن راولینسون، ادوارد هینکس، ژول اوپر و هنری فاکس تالبوت جداگانه یک متن اکدی را ترجمه کردند، نشان داد که خط میخی اکدی خوانده شده است. به همین دلیل بیستون را «سنگ رشید» میان‌رودان می‌نامند.'],
      ['Georg Friedrich Grotefend took the first steps in reading Old Persian in 1802, from Persepolis inscriptions. Henry Rawlinson, a British officer, copied the Behistun texts between 1835 and 1847, climbing the cliff and at times hanging from ropes; his Old Persian translation appeared in 1846–47. The Old Persian unlocked the Babylonian; and in 1857 a test in which Rawlinson, Edward Hincks, Jules Oppert and Henry Fox Talbot independently translated the same Akkadian text showed Akkadian cuneiform had been deciphered. Hence Behistun is called the Rosetta Stone of Mesopotamia.'],
    )],
    sources: ['schmitt1991', 'iranica-bisotun-iii', 'unesco'],
  },
  {
    id: 'herakles', title: { fa: 'هرکول سلوکی', en: 'The Seleucid Herakles' }, period: { fa: '۱۴۸ پ.م.', en: '148 BCE' },
    layers: [h(
      ['پیکرهٔ هراکلس آرمیده با جام در دست، در ۱۳۳۸ خورشیدی (۱۹۵۹–۱۹۶۰) هنگام پایین بردن سطح جادهٔ اصلی به دست علی حاکمی پیدا شد. کتیبه‌ای یونانی دارد که آن را به سال ۱۴۸ پ.م. تاریخ می‌گذارد. لوشای آن را کاری نه‌چندان استادانه ولی مهم برای تاریخ‌گذاری می‌داند. یک پایهٔ ستون یونی که در گورستان بیستون پیدا شد شاید از بنایی در زمان اسکندر باشد (گمانه).'],
      ['A reclining Herakles holding a cup, was found by A. Hakemi in 1959–60 while the main road was being lowered. Its Greek inscription dates it to 148 BCE. Luschey calls it clumsy work but important for its date. An Ionic column base from the Bisotun cemetery may come from a building of Alexander’s time (a conjecture).'],
    )],
    photos: ['herakles'],
    sources: ['iranica-bisotun', 'unesco'],
  },
  {
    id: 'parthian', title: { fa: 'نقش‌های اشکانی', en: 'Parthian reliefs' }, period: { fa: 'سدهٔ اول پ.م. – سدهٔ اول م.', en: '1st century BCE – 1st century CE' },
    layers: [h(
      ['زیر نقش داریوش، دو نقش برجستهٔ اشکانی هست. یکی، مهرداد دوم (ح. ۱۲۴–۸۸ پ.م.) را نشان می‌دهد که چهار بزرگ یا ساتراپ در برابرش ایستاده‌اند؛ دیگری، گودرز سواره در نبرد را با پیکر نیکه (پیروزی) بر فراز صحنه و کتیبه‌ای یونانی، که بیشتر آن را از گودرز دوم (ح. ۴۰–۵۱ م.) می‌دانند. «سنگ اشکانی» دیگری هم هست که نام بلاش (Vologases) بر آن خوانده شده. هر دو امروز بسیار فرسوده‌اند.', 'در ۱۰۹۴ ق. (۱۶۸۴–۱۶۸۵ م.)، کتیبهٔ وقف‌نامهٔ شیخ علی‌خان زنگنه را درست روی بخشی از نقش مهرداد کندند و بخشی از آن را نابود کردند؛ تصویرهای اروپاییان پیش از آن (مانند طرح گرلو در سدهٔ هفدهم) کمک می‌کند ببینیم چه از دست رفت.'],
      ['Below Darius’s relief are two Parthian reliefs. One shows Mithradates II (c. 124–88 BCE) with four dignitaries or satraps before him; the other horsemen in combat with Nike above and a Greek inscription, usually attributed to Gotarzes II (c. 40–51 CE). A separate “Parthian stone” bears a name read as Vologases. Both are now badly weathered.', 'In AH 1094 (1684–85 CE) the endowment inscription of Sheikh Ali Khan Zanganeh was cut directly over part of the Mithradates relief, destroying it; earlier European drawings (such as Grelot’s in the seventeenth century) help show what was lost.'],
    )],
    photos: ['parthian', 'gotarzes-waqf', 'mithradates'],
    sources: ['iranica-bisotun', 'unesco'],
  },
  {
    id: 'sasanian', title: { fa: 'ساسانیان و فرهاد تراش', en: 'The Sasanians and Farhad Tarash' }, period: { fa: 'سده‌های ۶–۷ م.', en: '6th–7th centuries CE' },
    layers: [
      h(
        ['از دورهٔ ساسانی، سه سرستون بزرگ با پیکر شاه و ایزدبانو آناهید (به نظر لوشای از زمان خسرو دوم، حدود ۶۰۰ م.)، پایه‌های نُه‌گانهٔ پل خسرو (حدود ۱۵۰ متر)، دیوار نگهبان کنار رود گاماسیاب و صدها سنگ تراش‌خورده با نشان سنگتراشان ساسانی مانده است. بزرگ‌ترین آن‌ها «فرهاد تراش» است: دیوارهٔ صاف‌شدهٔ صخره به پهنای حدود ۲۰۰ متر و بلندی حدود ۳۰ متر، بزرگ‌ترین کار از این گونه در ایران؛ حدود ۴۰٬۰۰۰ متر مکعب سنگ از آن برداشته شده است. زالتسمان پیشنهاد کرده که قرار بود ایوانی عظیم هم‌اندازهٔ طاق کسری در آن کنده شود؛ این گمانه است و کار نیمه‌تمام ماند.'],
        ['From the Sasanian period survive three large capitals with the king and the goddess Anahid (dated by Luschey to Khosrow II, c. 600 CE), the nine piers of Pol-e Khosrow (about 150 m), a retaining wall along the Gamasiab and hundreds of dressed blocks with Sasanian masons’ marks. The largest is Farhad Tarash: a chiselled rock face about 200 m wide and 30 m high, the biggest such work in Iran, from which some 40,000 m³ of rock were removed. Salzmann proposed that a vast ayvan on the scale of Taq-e Kasra was planned there; this is a hypothesis, and the work was left unfinished.'],
      ),
      m(
        ['در ادب فارسی، نظامی گنجوی در «خسرو و شیرین» فرهاد کوهکن را عاشقی می‌سازد که برای شیرین کوه بیستون را می‌تراشد. افسانه، کار بی‌مزد و بی‌پایان را به نماد عشق بدل کرده است؛ تاریخ، شاید یک پروژهٔ شاهانهٔ نیمه‌کاره را نشان دهد.'],
        ['In Persian literature Nizami Ganjavi’s Khosrow and Shirin makes Farhad the mountain-cutter a lover who carves Mount Bisotun for Shirin. The legend turned endless unpaid labour into a symbol of love; history may show an unfinished royal project.'],
      ),
    ],
    photos: ['farhad'],
    sources: ['iranica-bisotun', 'unesco'],
  },
  {
    id: 'islamic', title: { fa: 'کاروانسراها و وقف‌نامهٔ شیخ علی‌خان', en: 'Caravanserais and the Zanganeh endowment' }, period: { fa: 'ایلخانی تا صفوی', en: 'Ilkhanid to Safavid' },
    layers: [
      h(
        ['بیستون منزلگاه کاروان‌ها ماند. «کاروانسرای کهنه» (حدود ۸۰×۸۰ متر) با مسجدی در میان حیاط، به نظر لوشای دژی نظامی از دوران حسنویه کرد (سدهٔ دهم م.) بود؛ کوشکی ایلخانی کنار رود از زمان اولجایتو مانده است. شیخ علی‌خان زنگنه، وزیر شاه سلیمان صفوی، در ۱۰۹۲–۱۰۹۶ ق. (۱۶۸۱–۱۶۸۵ م.) کاروانسرای نو (معروف به شاه‌عباسی، حدود ۸۰×۹۰ متر با چهار ایوان) و پلی چهارطاقی ساخت و وقف‌نامه‌ای بر صخره کند. جزئیات موقوفات را باید از متن خود کتیبه خواند؛ ما آن را ندیده‌ایم.'],
        ['Bisotun remained a caravan stop. The “Old Caravanserai” (about 80 × 80 m), with a mosque in its courtyard, was in Luschey’s view a fortified outpost of the Kurdish prince Hasanuya (10th century CE); an Ilkhanid kiosk by the river dates to Öljeitü. Sheikh Ali Khan Zanganeh, vizier of Shah Soleyman, built the New Caravanserai (known as Shah Abbasi, about 80 × 90 m with four ayvans) and a four-arched bridge in AH 1092–96 (1681–85 CE), and cut an endowment deed into the rock. The details of the endowed property must be read from the inscription itself, which we have not seen.'],
      ),
      p(
        ['وقف، نهاد مدنی مهمی در تاریخ ایران است: مالکی خصوصی درآمد دارایی‌اش را به‌طور دائمی به کار عمومی می‌بخشد، بی‌آنکه دولت آن را اداره کند. اما همین وقف‌نامه روی نقشی کهن‌تر کنده شد؛ یعنی یک کار نیکوکارانه، میراث دیگری را نابود کرد.'],
        ['The waqf was an important civil institution in Iranian history: a private owner permanently devotes the income of property to a public purpose without state management. Yet this deed was cut over an older relief: a charitable act destroyed another heritage.'],
      ),
    ],
    photos: ['gotarzes-waqf', 'caravanserai'],
    sources: ['iranica-bisotun', 'unesco'],
  },
  {
    id: 'today', title: { fa: 'میراث جهانی و بیستونِ امروز', en: 'World Heritage and Bisotun today' }, period: { fa: 'از ۲۰۰۶ م.', en: 'Since 2006' },
    layers: [
      h(
        ['بیستون در ۲۰۰۶ در فهرست میراث جهانی یونسکو ثبت شد. داربست‌های مرمت سال‌ها جلوی نقش داریوش بود و به نمادی از کندی کار مرمت تبدیل شد. تهدیدها فرسایش، نفوذ آب و ساخت‌وساز در حریم محوطه است.', 'بازدید: محوطه از جادهٔ کرمانشاه–همدان در دسترس است. نقش داریوش از پای صخره و با دوربین دیده می‌شود؛ هرکول، نقش‌های اشکانی، فرهاد تراش و کاروانسرا در مسیر پیاده‌روی پای کوه‌اند. ساعت و بلیت را پیش از سفر از منابع رسمی بپرسید.'],
        ['Bisotun was inscribed on UNESCO’s World Heritage List in 2006. Restoration scaffolding stood in front of the Darius relief for years and became a symbol of slow conservation. Threats include erosion, water seepage and construction within the protected zone.', 'Visiting: the site is on the Kermanshah–Hamadan road. The Darius relief is seen from below, best with binoculars; Herakles, the Parthian reliefs, Farhad Tarash and the caravanserai are along the walk at the foot of the mountain. Check opening hours and tickets with official sources before travelling.'],
      ),
      m(
        ['بیستون یادآور است که هر دوره روی سنگ دوره‌های پیشین نوشت: شاه، سردار، وزیر و عاشق افسانه‌ای. نگه‌داری این لایه‌ها کار جامعه است، نه تنها دولت.'],
        ['Bisotun is a reminder that every age wrote over the stone of those before: king, general, vizier, legendary lover. Keeping these layers is the work of society, not of the state alone.'],
      ),
    ],
    photos: ['overview'],
    sources: ['unesco'],
  },
]

export const bisotun: Place = {
  slug: 'bisotun',
  kind: 'monument',
  name: { fa: 'بیستون', en: 'Bisotun (Behistun)' },
  aliases: ['بیستون', 'بهستون', 'بیستون کرمانشاه', 'کتیبه بیستون', 'Behistun', 'Bisotun', 'Bisitun', 'Bistoon', 'Bagastana', 'Bagistanon', 'DB'],
  lede: {
    fa: 'کوهی در کرمانشاه که از نئاندرتال‌ها تا داریوش، از هرکول سلوکی تا فرهادِ افسانه و وزیر صفوی، هر دوره نشانی بر آن گذاشته است؛ و کتیبهٔ سه‌زبانهٔ آن کلید خواندن خط میخی شد.',
    en: 'A mountain in Kermanshah on which every age, from Neanderthals to Darius, from a Seleucid Herakles to legendary Farhad and a Safavid vizier, left its mark; its trilingual inscription became the key to reading cuneiform.',
  },
  coord: { lat: 34.3883, lon: 47.4367, note: { fa: 'مختصات تقریبی نقش داریوش', en: 'Approximate coordinates of the Darius relief' } },
  facts: [
    { label: { fa: 'استان', en: 'Province' }, value: { fa: 'کرمانشاه', en: 'Kermanshah' } },
    { label: { fa: 'کتیبهٔ داریوش', en: 'Darius inscription' }, value: { fa: 'ح. ۵۲۰ پ.م.', en: 'c. 520 BCE' } },
    { label: { fa: 'زبان‌ها', en: 'Languages' }, value: { fa: 'پارسی باستان، ایلامی، بابلی', en: 'Old Persian, Elamite, Babylonian' } },
    { label: { fa: 'میراث جهانی', en: 'World Heritage' }, value: { fa: '۲۰۰۶ م.', en: '2006' } },
  ],
  sections,
  photos: [
    { id: 'overview', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Bistoon_Kermanshah.jpg/960px-Bistoon_Kermanshah.jpg', page: 'https://commons.wikimedia.org/wiki/File:Bistoon_Kermanshah.jpg', author: 'Alieh', license: 'CC BY 2.0', licenseUrl: 'https://creativecommons.org/licenses/by/2.0', caption: { fa: 'پیکرهٔ هرکول و کوه بیستون', en: 'The Herakles statue and Mount Bisotun' } },
    { id: 'relief-gaumata', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Behistun_relief_Darius_and_Gaumata.jpg/960px-Behistun_relief_Darius_and_Gaumata.jpg', page: 'https://commons.wikimedia.org/wiki/File:Behistun_relief_Darius_and_Gaumata.jpg', author: 'Patrick C (dynamosquito)', license: 'CC BY-SA 2.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0', caption: { fa: 'داریوش پای بر گئوماتا', en: 'Darius with his foot on Gaumata' } },
    { id: 'darius-closeup', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Behistun_Darius_the_Great.jpg/960px-Behistun_Darius_the_Great.jpg', page: 'https://commons.wikimedia.org/wiki/File:Behistun_Darius_the_Great.jpg', author: 'Leen van Dorp', license: 'CC0', caption: { fa: 'پیکر داریوش در نقش بیستون', en: 'Darius in the Behistun relief' } },
    { id: 'herakles', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Statue_of_Herakles_Bisotun.jpg/960px-Statue_of_Herakles_Bisotun.jpg', page: 'https://commons.wikimedia.org/wiki/File:Statue_of_Herakles_Bisotun.jpg', author: 'ninara', license: 'CC BY 2.0', licenseUrl: 'https://creativecommons.org/licenses/by/2.0', caption: { fa: 'هرکول آرمیده، ۱۴۸ پ.م.', en: 'Reclining Herakles, 148 BCE' } },
    { id: 'mithradates', src: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Behistun%2C_Parthian_relief_of_Mithridates_II.jpg', page: 'https://commons.wikimedia.org/wiki/File:Behistun,_Parthian_relief_of_Mithridates_II.jpg', author: 'Marco Prins', license: 'CC0', caption: { fa: 'نقش اشکانی مهرداد دوم', en: 'Parthian relief of Mithradates II' } },
    { id: 'parthian', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/IranBisotunParthRelief1.jpg/960px-IranBisotunParthRelief1.jpg', page: 'https://commons.wikimedia.org/wiki/File:IranBisotunParthRelief1.jpg', author: 'Ziegler175', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0', caption: { fa: 'نقش‌های اشکانی بیستون', en: 'The Parthian reliefs at Bisotun' } },
    { id: 'gotarzes-waqf', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Relief_of_Gotarzes%27_conquest_and_Waqf_of_Ali_Khan_Zanganeh.jpg/960px-Relief_of_Gotarzes%27_conquest_and_Waqf_of_Ali_Khan_Zanganeh.jpg', page: 'https://commons.wikimedia.org/wiki/File:Relief_of_Gotarzes%27_conquest_and_Waqf_of_Ali_Khan_Zanganeh.jpg', author: 'ئاسۆ', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0', caption: { fa: 'نقش پیروزی گودرز دوم و وقف‌نامهٔ شیخ علی‌خان زنگنه', en: 'Gotarzes II relief and the Zanganeh endowment' } },
    { id: 'farhad', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Farhad_Tarash_2016.jpg/960px-Farhad_Tarash_2016.jpg', page: 'https://commons.wikimedia.org/wiki/File:Farhad_Tarash_2016.jpg', author: 'Sepideh Shahbazi', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0', caption: { fa: 'فرهاد تراش', en: 'Farhad Tarash' } },
    { id: 'caravanserai', src: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Shah_Abbasi_Caravanserai_of_Bisotun2015-05-21_18.jpg', page: 'https://commons.wikimedia.org/wiki/File:Shah_Abbasi_Caravanserai_of_Bisotun2015-05-21_18.jpg', author: 'Farzad Menati', license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0', caption: { fa: 'کاروانسرای صفوی بیستون', en: 'The Safavid caravanserai of Bisotun' } },
  ],
  sources: [
    { id: 'unesco', author: 'UNESCO World Heritage Centre', title: 'Bisotun (ref. 1222)', year: '2006', url: 'https://whc.unesco.org/en/list/1222/' },
    { id: 'iranica-bisotun', author: 'R. Schmitt; H. Luschey', title: '“Bisotun” i. Introduction; ii. Archaeology, Encyclopaedia Iranica', year: '2000/2013', url: 'https://www.iranicaonline.org/articles/bisotun-ii/' },
    { id: 'iranica-bisotun-iii', author: 'R. Schmitt', title: '“Bisotun iii. Darius’s Inscriptions”, Encyclopaedia Iranica', year: '2000', url: 'https://www.iranicaonline.org/articles/bisotun-iii/' },
    { id: 'schmitt1991', author: 'R. Schmitt', title: 'The Bisitun Inscriptions of Darius the Great: Old Persian Text (CII I.I.I)', year: '1991' },
    { id: 'kent', author: 'R. G. Kent', title: 'Old Persian: Grammar, Texts, Lexicon', year: '1953' },
    { id: 'king-thompson', author: 'L. W. King, R. C. Thompson', title: 'The Sculptures and Inscription of Darius the Great on the Rock of Behistûn in Persia (public domain)', year: '1907', url: 'https://archive.org/details/sculpturesinscri00brituoft' },
  ],
  eventTitles: ['نگارش کتیبه‌ی بیستون'],
  kings: ['darius-i', 'gotarzes-ii'],
  wikipedia: 'https://en.wikipedia.org/wiki/Behistun_Inscription',
}
