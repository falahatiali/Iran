/** Content of /property and /en/property: sourced notes on property in Iranian history. */
import type { AboutBlock, AboutRef, Bi } from '../about/content'

export const propertyHero = {
  kicker: { fa: 'حقوق مالکیت', en: 'Property rights' } satisfies Bi,
  title: { fa: 'حقوق مالکیت در تاریخ ایران', en: 'Property rights in the history of Iran' } satisfies Bi,
  lede: {
    fa: 'در اسناد به‌جامانده از تاریخ ایران، بارها از ملک، ارث، فروش، رهن و سهم زنان سخن رفته است. این صفحه همان شواهد را یک‌جا می‌آورد: از لوح‌های تخت‌جمشید و قراردادهای بابل در دورهٔ هخامنشی تا کتاب ساسانی «هزار داوری». آنچه منابع می‌گویند از خوانش ما جدا مانده است. ما این نهادها را «حقوق مالکیت به معنای امروزی» نمی‌نامیم.',
    en: 'Surviving documents from Iranian history speak again and again of holdings, inheritance, sale, pledge and women’s shares. This page gathers that evidence in one place: from the Persepolis tablets and Babylonian contracts under the Achaemenids to the Sasanian Book of a Thousand Judgements. What the sources say is kept apart from our reading. We do not call these institutions “property rights” in the modern sense.',
  } satisfies Bi,
}

export const propertySections: AboutBlock[] = [
  {
    id: 'caution',
    title: { fa: 'چه می‌گوییم، و چه نمی‌گوییم', en: 'What we say, and what we do not' },
    paras: {
      fa: [
        'مراد ما از «حقوق مالکیت» در این صفحه این نیست که در ایران باستان قانونی مانند قانون مدنی امروز برقرار بود، یا فرد می‌توانست شاه را در دادگاهی مستقل به محاکمه بکشد. منابع چنین چیزی نمی‌گویند.',
        'آنچه منابع نشان می‌دهند این است: مردم می‌توانستند زمین و خانه و کالا را بخرند و بفروشند، به رهن بگذارند، اجاره دهند و به ارث بگذارند؛ قراردادها نوشته، گواهی و مهر می‌شد؛ و در دورهٔ ساسانی فقیهان و داوران دربارهٔ مالکیت، با اصطلاحاتی دقیق، حکم می‌نوشتند. این‌ها حق به معنای امروز نیستند، اما گواهی‌اند که دارایی فقط غنیمت شاه نبود و قاعده داشت.',
      ],
      en: [
        'By “property rights” on this page we do not mean that ancient Iran had a civil code like today’s, or that a person could take the king to an independent court. The sources do not say that.',
        'What they do show is that people could buy and sell land, houses and goods, pledge them, lease them and leave them to heirs; that contracts were written, witnessed and sealed; and that in the Sasanian period jurists and judges wrote decisions about ownership in a precise technical language. These are not rights in the modern sense, but they are evidence that property was not simply the king’s booty, and that it had rules.',
      ],
    },
  },
  {
    id: 'achaemenid',
    title: { fa: 'هخامنشیان: مزد، قرارداد و اعادهٔ مال', en: 'The Achaemenids: pay, contracts and restitution' },
    paras: {
      fa: [
        'بایگانی باروی تخت‌جمشید (حدود ۵۰۹ تا ۴۹۳ پ.م.) و بایگانی خزانه (از حدود ۴۹۲ پ.م.) هزاران کارگر (کورتش) را با جیرهٔ ماهانهٔ غله، شراب، آبجو و گاه گوشت نشان می‌دهند. زنان هم‌پای مردان جیره می‌گرفتند؛ سرپرستان زن گاه بیش از مردان گروه سهم می‌بردند؛ مادران پس از زایمان جیرهٔ ویژه داشتند؛ و کارگران ماهر سهم بیشتری می‌گرفتند. در لوح‌های خزانه بخشی از پرداخت به نقره بود. این اسناد مزد و جیره را ثبت می‌کنند، نه قرارداد کار آزاد به معنای امروزی را. بسیاری از کورتش‌ها کارگران وابسته بودند و گاه از اسیران کوچانده.',
        'در بابل، در همان سال‌های داریوش، بنگاه خانوادگی اگیبی زمین و خانه می‌خرید و می‌فروخت و اجاره می‌داد و وام می‌نوشت. بایگانی مردوک-ناصر-اپلی (۵۲۱ تا ۴۸۷ پ.م.) پر از قراردادهای مکتوب با گواه و مهر است که به سال‌های پادشاهی داریوش تاریخ خورده‌اند. نظم شاهی بازار کهن بابل را برنینداخت؛ آن را زیر چتر خود نگاه داشت.',
        'نظام «زمین کمان»، «زمین اسب» و «زمین ارابه» به خانواده‌ها زمینی در برابر خدمت یا مالیات می‌داد. بیشترین شاهد آن از بایگانی موراشو در نیپور است (حدود ۴۵۵ تا ۴۰۳ پ.م.، در پادشاهی اردشیر یکم و داریوش دوم). متیو استالپر نشان داده است که این زمین‌ها به ارث می‌رسید، به رهن گذاشته می‌شد و به بنگاه‌ها اجاره داده می‌شد. پس حق بهره‌برداری فقط برای یک نسل نبود.',
        'بیستون، به روایت خود داریوش، می‌گوید گئومات کشتزارها، گله‌ها، بردگان خانگی و خانه‌هایی را که از مردم گرفته بود، او به صاحبانشان بازگرداند (DB بند ۱۴). شاه مشروعیت خود را بر اعادهٔ مالِ گرفته‌شده بنا کرد. همین کتیبه نشان می‌دهد که در زبان رسمی هخامنشی، ربودن دارایی مردم عملی ناپسند شمرده می‌شد که باید جبران گردد.',
      ],
      en: [
        'The Persepolis Fortification Archive (c. 509–493 BCE) and the Treasury Archive (from c. 492) show thousands of workers (kurtaš) on monthly rations of grain, wine, beer and sometimes meat. Women drew rations alongside men; female overseers sometimes received more than the men of their team; mothers received a special birth ration; and skilled workers received more. In the Treasury tablets part of the payment was in silver. These records document rations and pay, not a free labour contract in today’s sense. Many kurtaš were dependent workers, and some were deported captives.',
        'In Babylonia, in the same years of Darius, the Egibi family firm bought, sold and leased land and houses and wrote loans. The archive of Marduk-nāṣir-apli (521–487 BCE) is full of written, witnessed, sealed contracts dated by Darius’s regnal years. Royal order did not replace Babylon’s old markets; it sheltered them.',
        'The system of “bow land”, “horse land” and “chariot land” gave families a holding in return for service or tax. Most of the evidence comes from the Murašû archive at Nippur (c. 455–403 BCE, under Artaxerxes I and Darius II). Matthew Stolper showed that these plots were inherited, pledged and leased to firms. The right of use was not for one generation only.',
        'At Bisotun, in Darius’s own account, Gaumata had taken pastures, herds, household servants and houses from the people, and Darius restored them to their owners (DB §14). He built his legitimacy on the restitution of property that had been taken. The same inscription shows that, in official Achaemenid language, seizing people’s property was a wrong that had to be made good.',
      ],
    },
  },
  {
    id: 'cylinder',
    title: { fa: 'استوانهٔ کوروش: همان که متن می‌گوید', en: 'The Cyrus Cylinder: what the text itself says' },
    paras: {
      fa: [
        'استوانهٔ کوروش کتیبه‌ای بنایی به سنت شاهان بابل است. کوروش در آن خود را برگزیدهٔ مردوک می‌نامد، از بازگرداندن مردم به جاهایشان و بازگرداندن خدایان به پرستشگاه‌هایشان سخن می‌گوید و از نوسازی معبدها یاد می‌کند. متن از یهودیان نام نمی‌برد و ادعا نمی‌کند که نخستین منشور حقوق بشر است؛ این نام از سدهٔ بیستم است.',
        'آنچه به دارایی مربوط است در همین جمله‌هاست: بازگشت مردم به سکونتگاه‌هایشان و احیای پرستشگاه‌ها. این سیاست بازسازی است، نه قانون‌نامهٔ مالکیت فردی. متن کامل و بحث آن در صفحهٔ استوانه آمده است.',
      ],
      en: [
        'The Cyrus Cylinder is a building inscription in the tradition of Babylonian kings. In it Cyrus calls himself Marduk’s chosen one, speaks of returning people to their places and gods to their sanctuaries, and mentions the restoration of temples. The text does not name the Judeans and does not claim to be the first charter of human rights; that label is from the twentieth century.',
        'What concerns property is in those same sentences: the return of people to their settlements and the restoration of temples. That is a policy of restoration, not a code of individual ownership. The full text and discussion are on the Cylinder page.',
      ],
    },
  },
  {
    id: 'sasanian',
    title: { fa: 'ساسانیان: کتاب هزار داوری', en: 'The Sasanians: the Book of a Thousand Judgements' },
    paras: {
      fa: [
        'مهم‌ترین سند حقوقی برجا مانده از ایران پیش از اسلام، کتاب پهلوی «هزار داوری» است (مادیان هزار دادستان؛ عنوان اصلی در دیباچه «هزار دادستان» است). به گفتهٔ ماریا ماکوخ در دانشنامهٔ ایرانیکا، این اثر تنها مجموعهٔ یکسره حقوقی از فقه ایرانی پیش از اسلام است که به ما رسیده و یکی از بنیادی‌ترین منابع تاریخ اجتماعی و اداری ساسانیان به شمار می‌رود.',
        'گردآورنده فرخ‌مرد پسر بهرام است. کتاب قانون‌نامهٔ شاهانه نیست، بلکه گردآیه‌ای بلند از پرونده‌های واقعی و فرضی است که از سجل دادگاه‌ها، وصیت‌ها، رساله‌های فقهی، شرح فقیهان و نقل قول خبرگان فراهم آمده است. ماکوخ تاریخ تدوین را نیمهٔ نخست سدهٔ هفتم میلادی می‌داند، پس از سال بیست‌وششم پادشاهی خسرو دوم پرویز (۵۹۱ تا ۶۲۸)، که آخرین شاه نام‌برده در کتاب است. محتوا یکسره ساسانی است و از حقوق دورهٔ اسلامی اثر نپذیرفته است.',
        'فصل‌های برجا مانده نشان می‌دهند داوران ساسانی دربارهٔ چه چیزهایی حکم می‌نوشتند: دارایی‌ای که کسی آن را «مال من» می‌خواند؛ دارایی به ارث رسیده؛ اعلام مالکیت کسی بر چیزی؛ رهن اصل مال؛ رهن منافع (انتفاع)؛ اجاره؛ بیع و هبه؛ شرکت و ضمان؛ آبیاری مشترک؛ نفقه؛ ازدواج با حقوق تمام (پادشایی)؛ طلاق؛ قیومت؛ و جانشینی میانی و ستوری. حتی بنیاد آتش و وقف برای روان از نگاه حقوقی بررسی شده است، نه فقط دینی.',
        'پس در ایران ساسانی مالکیت موضوع دادگاه بود. کسی می‌توانست بگوید «این مال من است»، آن را به رهن بگذارد، اجاره دهد، شریک بگیرد، و پس از مرگش سهم وارثان با قاعده تقسیم شود. این تصویر با این ادعا که ایرانیان تا پیش از دوران جدید از مالکیت بی‌بهره بودند، نمی‌خواند.',
      ],
      en: [
        'The most important legal document that survives from pre-Islamic Iran is the Pahlavi Book of a Thousand Judgements (Mādayān ī hazār dādestān; the preface calls it Hazār dādestān, “A Thousand Judgements”). According to Maria Macuch in Encyclopaedia Iranica, it is the only exclusively legal work on pre-Islamic Iranian jurisprudence that has come down to us, and one of the fundamental sources for the social and institutional history of Sasanian Iran.',
        'The compiler was Farroxmard ī Wahrāmān. The book is not a royal law-code, but a long compilation of actual and hypothetical cases drawn from court records, testaments, works of jurisprudence, jurists’ commentaries and quotations from leading experts. Macuch dates the compilation to the first half of the seventh century, after the twenty-sixth year of Khosrow II Parviz (591–628), the last sovereign named in the book. Its content is wholly Sasanian and uninfluenced by the later development of law in the Islamic period.',
        'The surviving chapters show what Sasanian judges wrote decisions about: property that a person called “my own”; inherited possessions; declaring someone the owner of a thing; pledging the substance of a property (mortgage); pledging the usufruct; rent; sale and gift; partnership and surety; shared irrigation; maintenance; marriage with full rights (pādixšāy); divorce; guardianship; and intermediary and auxiliary succession (stūrīh). Even fire foundations and endowments for the soul are treated from a legal point of view, not only a religious one.',
        'So in Sasanian Iran ownership was a matter for the courts. A person could say “this property is my own”, pledge it, lease it, take a partner, and after death have the heirs’ shares divided by rule. That picture does not fit the claim that Iranians had no property until modern times.',
      ],
    },
  },
  {
    id: 'women',
    title: { fa: 'زنان و دارایی در همان کتاب', en: 'Women and property in the same book' },
    paras: {
      fa: [
        'کتاب هزار داوری، و مقالهٔ ماکوخ دربارهٔ ارث ساسانی در ایرانیکا، سهم زنان را با دقت ثبت کرده‌اند. در ازدواج با حقوق تمام، پسران سهم برابر می‌گرفتند؛ زن (یا زنان) سهمی به اندازهٔ سهم یک پسر داشتند؛ دختر ازدواج‌نکرده نیمی از سهم برادر را می‌برد. دختر شوهرکرده، چون پیش‌تر جهاز گرفته بود، دوباره از ترکه سهم نمی‌برد. حق نخست‌زادگی، به معنای سهم ویژهٔ پسر بزرگ، در این نظام نبود.',
        'دارایی‌ای که زن به خانهٔ شوهر می‌آورد — جهاز یا آنچه پیش از ازدواج از پدر یا از دولت گرفته بود — به گفتهٔ منابع فقهی مال مطلق او می‌ماند و بدهی شوهر یا پدر از آن برداشت نمی‌شد. فقیهی به نام بهرام می‌گفت زن حق درآمد خود (ویندیشن) را دارد. زن می‌توانست، با رضایت شوهر، در بخشی از دارایی او تصرف کند؛ زمین، مجرای آب، گیاهان، خانه و دو بندهٔ تمام از این تصرف بیرون بود.',
        'با این همه، زنان در همهٔ زمینه‌ها شخص حقوقی کامل به شمار نمی‌آمدند. دختر معمولاً نمی‌توانست جانشین مستقیم و تام پدر خانواده شود و به‌تنهایی قیّم ترکه باشد؛ نقش او بیشتر جانشینی میانی بود. بردگی نیز در همین کتاب موضوع حکم است. پس سخن از «حقوق زنان ساسانی» باید همین حدها را نگاه دارد: سهم ارث و دارایی شخصی مستند است؛ برابری کامل حقوقی نیست.',
      ],
      en: [
        'The Book of a Thousand Judgements, and Macuch’s Iranica article on Sasanian inheritance, record women’s shares with care. In a marriage with full rights, sons received equal portions; the wife (or wives) received a portion the size of a son’s; an unmarried daughter received half a brother’s share. A married daughter, having already received a dowry, did not inherit again from the estate. There was no right of primogeniture, in the sense of a special share for the eldest son.',
        'Property a wife brought into the marriage — her dowry, or what she had received from her father or from the state before marriage — remained, according to the legal sources, her absolute possession, and was not used to pay her husband’s or father’s debts. A jurist named Wahrām held that a wife was entitled to her own income (windišn). A wife could, with her husband’s consent, dispose of part of his property; land, watercourses, plants, houses and two full slaves were excluded from that disposal.',
        'Even so, women were not full legal persons in every field. A daughter could not usually become the direct, universal successor of the paterfamilias or take sole charge of the estate; her role was more often that of an intermediary successor. Slavery is also a subject of decisions in the same book. So any account of “Sasanian women’s rights” must keep these limits: inherited shares and personal property are documented; full legal equality is not.',
      ],
    },
  },
  {
    id: 'reading',
    title: { fa: 'نگاه ما', en: 'Our reading' },
    paras: {
      fa: [
        'این برداشت ماست. اسناد نشان می‌دهند که در بخش بزرگی از تاریخ ایران، دارایی قاعده داشت: نوشته می‌شد، به ارث می‌رسید، به رهن می‌رفت و در دادگاه محل نزاع بود. دورهٔ ساسانی از این حیث غنی‌ترین پرونده را دارد، چون یک کتاب تخصصی حقوق برای ما مانده است. دورهٔ هخامنشی را بیشتر از بایگانی‌های اداری و قراردادهای بابلی می‌شناسیم.',
        'همین اسناد حد این قاعده را هم نشان می‌دهند. شاه در بالا ایستاده بود؛ بخشی از زمین در برابر خدمت بود؛ بردگی وجود داشت؛ و زنان در همهٔ ابواب شخص حقوقی کامل نبودند. قاعدهٔ روشن بهتر از گرفتن بی‌قاعده است، اما قاعده‌ای که شاه هم زیر آن باشد در این متون به صورت نهاد مستقل دیده نمی‌شود.',
        'ارزش این صفحه در درشت‌گویی نیست. ارزش آن در این است که مالکیت ایرانی را از روی پرونده و قرارداد و حکم دادگاه نشان می‌دهد، نه از روی شعار.',
      ],
      en: [
        'This is our reading. The documents show that for a large part of Iranian history property had rules: it was written down, inherited, pledged and argued over in court. The Sasanian period has the richest file, because a specialist law-book has survived. The Achaemenid period is known mainly from administrative archives and Babylonian contracts.',
        'The same documents also show the limits of those rules. The king stood at the top; some land was held in return for service; slavery existed; and women were not full legal persons in every chapter of the law. A clear rule is better than lawless taking, but a rule that the king himself stands under does not appear in these texts as an independent institution.',
        'The value of this page is not in large claims. It is in showing Iranian property from case-files, contracts and court decisions, not from slogans.',
      ],
    },
  },
]

export const propertyRefs: AboutRef[] = [
  { id: 'macuch-mhd', text: 'Maria Macuch, “Mādayān ī hazār dādestān”, Encyclopaedia Iranica (2005, updated 2017).', url: 'https://www.iranicaonline.org/articles/madayan-i-hazar-dadestan/' },
  { id: 'macuch-inheritance', text: 'Maria Macuch, “Inheritance i. Sasanian period”, Encyclopaedia Iranica (2017).', url: 'https://www.iranicaonline.org/articles/inheritance-i/' },
  { id: 'macuch-legal', text: 'Maria Macuch, “Judicial and Legal Systems iii. Sasanian legal system”, Encyclopaedia Iranica (2012).', url: 'https://www.iranicaonline.org/articles/judicial-and-legal-systems-iii-sasanian-legal-system/' },
  { id: 'perikhanian1997', text: 'Anahit Perikhanian, The Book of a Thousand Judgements (A Sasanian Law-Book), Costa Mesa and New York, 1997.' },
  { id: 'macuch1993', text: 'Maria Macuch, Rechtskasuistik und Gerichtspraxis zu Beginn des siebenten Jahrhunderts in Iran: Die Rechtssammlung des Farroxmard i Wahrāmān, Wiesbaden, 1993.' },
  { id: 'stolper1985', text: 'Matthew W. Stolper, Entrepreneurs and Empire: The Murašû Archive, the Murašû Firm, and Persian Rule in Babylonia, Istanbul, 1985.' },
  { id: 'abraham2004', text: 'Kathleen Abraham, Business and Politics under the Persian Empire: The Financial Dealings of Marduk-nāṣir-apli of the House of Egibi (521–487 B.C.E.), Bethesda, 2004.' },
  { id: 'hallock1969', text: 'Richard T. Hallock, Persepolis Fortification Tablets, Chicago, 1969.' },
  { id: 'cameron1948', text: 'George G. Cameron, Persepolis Treasury Tablets, Chicago, 1948.' },
  { id: 'brosius1996', text: 'Maria Brosius, Women in Ancient Persia, 559–331 BC, Oxford, 1996.' },
  { id: 'kent1953', text: 'R. G. Kent, Old Persian: Grammar, Texts, Lexicon, New Haven, 1953, DB §14.' },
  { id: 'livius-db', text: 'Darius I, Bisotun inscription (DB), text at Livius.org.', url: 'https://www.livius.org/sources/content/behistun-persian-text/' },
]
