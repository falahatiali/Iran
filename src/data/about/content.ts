/** Content of /about and /en/about: the project's purpose and its methodology. */
export interface Bi { fa: string; en: string }
export interface AboutBlock { id: string; title: Bi; paras: { fa: string[]; en: string[] }; list?: { fa: string[]; en: string[] } }
export interface AboutRef { id: string; text: string; url?: string }

export const aboutHero = {
  kicker: { fa: 'درباره و روش‌شناسی', en: 'About & methodology' },
  title: { fa: 'ایران؛ سرزمین آزادگان و نجیب‌زادگان', en: 'Iran: the land of the free and the noble' },
  lede: {
    fa: 'این پروژه تاریخ ایران را از نو می‌خواند، نه با افسانه و نه با شعار، بلکه با یک پرسش روشن: در هر دوره، آدمی تا چه اندازه صاحب جان، کار، دارایی و وجدان خویش بود؟ ما آزادی فردی و حقوق مالکیت خصوصی را معیار تحلیل گرفته‌ایم، و هر ادعای تاریخی را تنها با سند می‌پذیریم.',
    en: 'This project rereads the history of Iran, not through legend or slogan, but through one clear question: in each age, how far did a person own his or her own life, labour, property and conscience? We take individual liberty and private property rights as the analytical standard, and we accept historical claims only on evidence.',
  },
}

export const purpose: AboutBlock[] = [
  {
    id: 'why',
    title: { fa: 'چرا عینکی تازه؟', en: 'Why a new lens?' },
    paras: {
      fa: [
        'تاریخ ایران را بیشتر به صورت فهرست شاهان، جنگ‌ها و دودمان‌ها نوشته‌اند: چه کسی بر تخت نشست، چه کسی شکست خورد. ما می‌خواهیم پرسش دیگری بپرسیم: کشاورز، بازرگان، صنعتگر و زن و مرد عادی در زیر این تخت‌ها چه داشتند؟ آیا می‌توانستند آنچه با کار خود ساخته بودند نگه دارند، بفروشند، به ارث بگذارند؟ آیا قراردادشان اجرا می‌شد؟ آیا کسی جز خودشان به خاطر کارشان کیفر می‌دید؟',
        'این پرسش‌ها تاریخ را کوچک نمی‌کنند؛ آن را انسانی می‌کنند. از گل‌نبشته‌های تخت‌جمشید که مزد زنان کارگر را ثبت کرده‌اند تا قراردادهای بازرگانان بابل در دوران هخامنشی، از وقف‌نامه‌ها و بازارهای سده‌های میانه تا مشروطه، تاریخ ایران پر از شواهدی است که با این عینک تازه معنا پیدا می‌کنند.',
      ],
      en: [
        'Iranian history has mostly been written as a list of kings, wars and dynasties: who took the throne, who fell. We ask a different question: what did the farmer, merchant, craftsman, and ordinary woman and man beneath those thrones actually have? Could they keep, sell and bequeath what their work produced? Were their contracts enforced? Was anyone punished for their deeds other than themselves?',
        'These questions do not shrink history; they make it human. From the Persepolis tablets recording the wages of women workers to the contracts of Babylonian merchants under the Achaemenids, from the endowment deeds and bazaars of the middle ages to the Constitutional Revolution, Iran’s past is full of evidence that gains meaning through this lens.',
      ],
    },
  },
  {
    id: 'name',
    title: { fa: '«ایران» یعنی چه؟ واژه، و خوانش ما', en: 'What does “Iran” mean? The word, and our reading' },
    paras: {
      fa: [
        'نام «ایران» از پارسی میانه «اِران» (Ērān)، یعنی «[سرزمینِ] آریاها»، می‌آید و آن از ایرانی کهن ‎*arya-‎ (پارسی باستان ariya-، اوستایی airiia-). به گفتهٔ دانشنامهٔ ایرانیکا، این واژه در اصل نام‌خوانی قومی و زبانی مردمان هندوایرانی بود؛ داریوش خود را در نقش‌رستم «پارسی، پسر پارسی، آریایی، از تبار آریایی» می‌خواند. معنای ریشه‌ای دقیق آن هنوز قطعی نیست.',
        'با این همه، در سنت هندی و ایرانی این واژه با بزرگ‌منشی پیوند خورد: در سنسکریت ārya «نجیب، والاتبار» معنا می‌دهد و در پارسی میانه ērīh یعنی «نجابت». برخی پژوهش‌های تازه حتی پیشنهاد کرده‌اند که معنای کهن‌تر آن «آزاده» در برابر «بنده» بوده است. در فارسی دری نیز «آزاده» و «آزادگان» برای ایرانیان نجیب‌تبار به کار رفته است.',
        'پس خوانش «ایران، سرزمین آزادگان و نجیب‌زادگان» خوانش تفسیری این پروژه است، ریشه در سنت فارسی دارد و پژوهش زبان‌شناختی هم آن را رد نمی‌کند؛ اما آن را حقیقت ریشه‌شناختی قطعی نمی‌نامیم. و صریح می‌گوییم: «آریایی» در این پروژه هیچ معنای نژادی ندارد. سوءاستفادهٔ نژادپرستانهٔ سدهٔ بیستم از این واژه، خود نقض همان آزادگی است که ما از آن سخن می‌گوییم.',
        'برای ما «آزاده» یک صفت تاریخی برای یک قوم نیست، بلکه آرمانی است که هر کس می‌تواند به آن برسد: انسانی که صاحب خویش است، دارایی‌اش از دست‌اندازی ایمن است، و جز با رضایت خود به کاری وادار نمی‌شود. بازنویسی تاریخ ایران یعنی دنبال کردن این آرمان در گذشته: کجا به آن نزدیک شدیم، کجا از آن دور افتادیم، و چرا.',
      ],
      en: [
        'The name “Iran” comes from Middle Persian Ērān, “[the land] of the Aryas”, from Old Iranian *arya- (Old Persian ariya-, Avestan airiia-). According to Encyclopaedia Iranica it was originally the ethnic and linguistic self-designation of the Indo-Iranian peoples; Darius calls himself at Naqsh-e Rostam “a Persian, son of a Persian, an Aryan, of Aryan lineage.” Its root meaning is still not settled.',
        'Yet in Indian and Iranian tradition the word became tied to nobility: Sanskrit ārya means “noble, honourable”, Middle Persian ērīh means “nobility”, and some recent scholarship even proposes an older sense of “free man” as opposed to “servant”. In New Persian, āzāda and āzādagān (“the free, the noble-born”) were used of Iranians of noble descent.',
        '“Iran, the land of the free and the noble” is therefore this project’s interpretive reading. It is rooted in Persian tradition and compatible with the linguistic research, but we do not present it as settled etymology. And we say plainly: “Aryan” here has no racial meaning whatsoever. The twentieth century’s racist abuse of the word is itself a violation of the very freedom we write about.',
        'For us “free” (āzāda) is not a historical label for one people but an ideal anyone can reach: a person who owns himself, whose property is secure from seizure, and who is compelled to nothing without consent. Rewriting the history of Iran means tracing that ideal through the past: where we came close to it, where we fell away, and why.',
      ],
    },
  },
  {
    id: 'mission',
    title: { fa: 'مأموریت', en: 'Mission' },
    paras: {
      fa: ['ساختن مرجع ملی آزاد، دقیق و منبع‌دار برای تاریخ ایران، از ایلام تا امروز، که هر صفحه‌اش سه کار بکند: آنچه را رخ داد با سند نشان دهد؛ آن را با معیار آزادی و مالکیت بسنجد؛ و بگوید امروز برای ما چه معنایی دارد. این سه لایه هرگز در هم آمیخته نمی‌شوند.'],
      en: ['To build a free, rigorous and sourced national reference for the history of Iran, from Elam to today, in which every page does three things: shows what happened, with evidence; weighs it by the standard of liberty and property; and says what it means for us now. Those three layers are never blended.'],
    },
    list: {
      fa: ['آیا این نظام افراد را صاحبان مشروع حق می‌شناخت؟', 'آیا ثمرهٔ کار و مالکیت مشروع ایمن بود؟', 'آیا می‌شد دارایی را نگه داشت، به کار برد، فروخت و به ارث گذاشت؟', 'آیا قراردادها داوطلبانه بودند یا اجباری؟', 'آیا فرمانروا می‌توانست خودسرانه مصادره کند؟', 'آیا هر کس فقط پاسخ‌گوی کار خود بود؟', 'چه چیزی قدرت سیاسی را محدود می‌کرد؟'],
      en: ['Did the system recognise individuals as legitimate holders of rights?', 'Were the fruits of labour and legitimate property secure?', 'Could property be kept, used, sold and bequeathed?', 'Were agreements voluntary or compelled?', 'Could rulers confiscate arbitrarily?', 'Was each person answerable only for his own deeds?', 'What limited political power?'],
    },
  },
]

export const methodology: AboutBlock[] = [
  {
    id: 'layers',
    title: { fa: 'سه لایهٔ جدا', en: 'Three separate layers' },
    paras: {
      fa: ['هر ادعا در یکی از سه لایه برچسب می‌خورد و جای آن در صفحه با نشان رنگی دیده می‌شود: «شواهد تاریخی» فقط آنچه منابع می‌گویند؛ «تفسیر فلسفی» خوانش ما با معیار آزادی و مالکیت، که استدلال می‌کند و ادعای سند نمی‌کند؛ «معنای فرهنگی امروز» آنچه این گذشته برای ایرانیان امروز معنا می‌دهد. تفسیر هرگز به شکل واقعیت نوشته نمی‌شود.'],
      en: ['Every claim is tagged with one of three layers and marked by a coloured badge: “Historical evidence” is only what the sources say; “Philosophical interpretation” is our reading by the standard of liberty and property, which argues and does not pretend to be evidence; “Modern cultural meaning” is what this past means to Iranians now. Interpretation is never written as fact.'],
    },
  },
  {
    id: 'hierarchy',
    title: { fa: 'سلسله‌مراتب منابع', en: 'Source hierarchy' },
    paras: { fa: ['وزن هر منبع به نزدیکی آن به رویداد و امکان راستی‌آزمایی‌اش بستگی دارد:'], en: ['A source weighs according to its closeness to the events and how far it can be checked:'] },
    list: {
      fa: ['۱. منابع دست‌اول هم‌زمان: کتیبه‌ها (بیستون، استوانهٔ کوروش)، بایگانی‌های اداری (گل‌نبشته‌های تخت‌جمشید، موراشو)، سکه‌ها، باستان‌شناسی.', '۲. نویسندگان کهن و سده‌های میانه: هرودوت، طبری، بیهقی و دیگران، با سنجش جانب‌داری و فاصلهٔ زمانی‌شان.', '۳. پژوهش مدرن داوری‌شده: ایرانیکا، تاریخ ایران کمبریج، بریان، کورت و دیگران.', '۴. هر چیز دیگر (وب‌سایت‌ها، تصاویر بی‌منبع، نقل‌قول‌های شبکه‌های اجتماعی) منبع به شمار نمی‌آید.'],
      en: ['1. Contemporary primary sources: inscriptions (Behistun, the Cyrus Cylinder), administrative archives (Persepolis tablets, Murašû), coins, archaeology.', '2. Ancient and medieval authors: Herodotus, Tabari, Bayhaqi and others, weighed for bias and distance from events.', '3. Peer-reviewed modern scholarship: Encyclopaedia Iranica, the Cambridge History of Iran, Briant, Kuhrt and others.', '4. Anything else (websites, unsourced images, social-media quotations) does not count as a source.'],
    },
  },
  {
    id: 'certainty',
    title: { fa: 'برچسب‌های قطعیت', en: 'Certainty labels' },
    paras: { fa: ['رویدادها و ادعاها برچسب قطعیت می‌گیرند:'], en: ['Events and claims carry a certainty label:'] },
    list: {
      fa: ['استوار: منبع هم‌زمان دست‌اول آن را تأیید می‌کند.', 'محتمل: اجماع پژوهشی هست ولی شکاف یا تاریخ تقریبی دارد.', 'محل بحث: پژوهشگران دربارهٔ تاریخ، مکان یا خود رویداد اختلاف دارند، یا تنها یک طرف ماجرا روایت کرده است (مثلاً ماراتن فقط از منابع یونانی).', 'نشانهٔ «ح.» در تاریخ‌ها یعنی تقریبی.'],
      en: ['Secure: confirmed by a contemporary primary source.', 'Probable: scholarly consensus, with gaps or approximate dating.', 'Disputed: scholars disagree on date, place or the event itself, or only one side tells the story (e.g. Marathon, known only from Greek sources).', '“c.” before a date means approximate.'],
    },
  },
  {
    id: 'citation',
    title: { fa: 'سیاست ارجاع و نقل‌قول', en: 'Citation and quotation policy' },
    paras: {
      fa: ['هیچ نقل‌قولی جعل نمی‌شود. نقل مستقیم فقط از ترجمهٔ منتشرشده و با ارجاع دقیق (کتیبه و بند، کتاب و صفحه) می‌آید؛ برگردان فارسی ما همیشه با برچسب «از ماست» مشخص می‌شود. ترجمه‌های دارای حق نشر رونویسی نمی‌شوند، بلکه خلاصه و پیوند داده می‌شوند. هر صفحهٔ اصلی دکمهٔ «ارجاع به این صفحه» دارد. اندیشه‌ها به متفکران نام‌دار و منابع عمومی نسبت داده می‌شوند، نه به مفسران معاصر بی‌سند.'],
      en: ['No quotation is invented. Direct quotes come only from published translations with exact references (inscription and section, book and page); our Persian renderings are always labelled as ours. Copyrighted translations are not reproduced but summarised and linked. Every major page has a “Cite this page” button. Ideas are attributed to named thinkers and public sources, not to unsourced contemporary commentators.'],
    },
  },
  {
    id: 'dating',
    title: { fa: 'تاریخ‌گذاری و نقشه‌ها', en: 'Dating and maps' },
    paras: {
      fa: ['تاریخ‌ها میلادی‌اند (پ.م. = پیش از میلاد) و از دوران صفوی به بعد سال خورشیدی تقریبی هم آمده است. نقشه‌ها طرح‌های ساده‌شدهٔ ویراستاری‌اند؛ خطوط ساحلی از Natural Earth (مالکیت عمومی). مسیرهای لشکرکشی تقریبی‌اند و چنین برچسب خورده‌اند.'],
      en: ['Dates are Common Era (BCE = before the Common Era); from the Safavids on, approximate solar-hijri years are also shown. Maps are simplified editorial sketches; coastlines from Natural Earth (public domain). Campaign routes are approximate and labelled as such.'],
    },
  },
  {
    id: 'corrections',
    title: { fa: 'سیاست اصلاح', en: 'Corrections policy' },
    paras: {
      fa: ['خطا را پنهان نمی‌کنیم. هر کس می‌تواند با منبع، اصلاحی پیشنهاد دهد (از راه GitHub). اصلاحِ واقعیت‌ها با ارجاع ثبت می‌شود و تاریخچهٔ همهٔ تغییرات در مخزن عمومی پروژه دیده می‌شود. دیدگاه مخالف، اگر مستند باشد، در لایهٔ تفسیر جای خود را دارد.'],
      en: ['We do not hide errors. Anyone can propose a correction, with a source, via GitHub. Factual corrections are recorded with references, and the full history of changes is visible in the project’s public repository. A documented opposing view has its place in the interpretation layer.'],
    },
  },
]

export const aboutRefs: AboutRef[] = [
  { id: 'iranica-aryans', text: 'R. Schmitt, “Aryans”, Encyclopaedia Iranica.', url: 'https://www.iranicaonline.org/articles/aryans/' },
  { id: 'iranica-arya', text: 'H. W. Bailey, “Arya”, Encyclopaedia Iranica.', url: 'https://www.iranicaonline.org/articles/arya-an-ethnic-epithet/' },
  { id: 'bhasha2023', text: '“The Meaning and Etymology of ārya”, Bhasha: Journal of South Asian Linguistics, Philology and Grammatical Traditions (2023).', url: 'https://doi.org/10.30687/bhasha/2785-5953/2023/01/006' },
  { id: 'motadel', text: 'D. Motadel, “Iran and the Aryan myth”, in A. Ansari (ed.), Perceptions of Iran (2014).', url: 'https://www.davidmotadel.com/wp-content/uploads/2016/08/MotadelAryans.pdf' },
  { id: 'kent', text: 'R. G. Kent, Old Persian: Grammar, Texts, Lexicon (1953), DNa §2.' },
  { id: 'philosophy', text: 'Project charter: docs/FOUNDATIONAL_PHILOSOPHY.md', url: 'https://github.com/falahatiali/Iran/blob/main/docs/FOUNDATIONAL_PHILOSOPHY.md' },
]
