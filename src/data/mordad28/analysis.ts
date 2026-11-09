/**
 * Site analysis for /event/28-mordad: oil, the constitution, and Mosaddeq’s responsibility.
 * Persian body follows the final editorial draft; English cards summarise each section.
 * Footnote numbers [1]–[26] resolve through analysisNoteIds to mordadSources.
 */
import type { Bi } from '../featured/types'

export const analysisNoteIds: Record<number, string> = {
  1: 'nezamat-oil-law',
  2: 'frus-d144',
  3: 'frus-d152',
  4: 'frus-d135',
  5: 'frus-d300',
  6: 'icj-aioc',
  7: 'umd-uk-complaint',
  8: 'iranica-coup',
  9: 'nezamat-powers-6mo',
  10: 'nezamat-powers-1yr',
  11: 'nyt-1953-08-04',
  12: 'iranica-constitution',
  13: 'tadayyoni-6217',
  14: 'gasiorowski-tpbedamn',
  15: 'malekzadeh-agabekov',
  16: 'frus-d275',
  17: 'frus-d375',
  18: 'frus-d184',
  19: 'frus-d216',
  20: 'nsa-1952-approach',
  21: 'abrahamian-iranwire-2017',
  22: 'frus-d240',
  23: 'newpress-coup',
  24: 'tadayyoni-5688',
  25: 'tadayyoni-4184',
  26: 'tadayyoni-4282',
}

export interface AnalysisView {
  title: string
  paras: string[]
}

export interface AnalysisSub {
  title: string
  paras: string[]
  view?: AnalysisView
}

export interface AnalysisSection {
  id: string
  n: number
  title: Bi
  summaryEn: string
  paras: string[]
  view?: AnalysisView
  subs?: AnalysisSub[]
}

export const analysisIntro = {
  kicker: { fa: 'تحلیل ما', en: 'Our analysis' } satisfies Bi,
  title: {
    fa: '۲۸ مرداد؛ نفت، مشروطه و مسئولیت مصدق',
    en: '28 Mordad: oil, the constitution, and Mosaddeq’s responsibility',
  } satisfies Bi,
  beforeTitle: { fa: 'پیش از خواندن', en: 'Before you read' } satisfies Bi,
  paras: {
    fa: [
      'این نوشته، رخداد تاریخی را از داوری سیاسی جدا می‌کند. گزارش رویدادها به اسناد و پژوهش‌های معرفی‌شده در پایان متن تکیه دارد. بندهای «نگاه ما» بیانگر برداشت نویسندگان سایت از موضع دفاع از پادشاهی مشروطه، توسعه و همکاری اقتصادی با جهان است؛ نه ادعای توافق همهٔ تاریخ‌نگاران.',
      'پرسش ما فقط این نیست که چه کسانی در سقوط دولت مصدق نقش داشتند. می‌پرسیم سیاست نفتی او چه نتیجه‌ای داشت، با مجلس چه کرد و چرا ائتلاف حامیانش از هم گسست. شناخت عملیات خارجی لازم است، اما جای بررسی تصمیم‌های نخست‌وزیر را نمی‌گیرد.',
    ],
    en: [
      'This essay keeps the historical record apart from political judgment. The account of events rests on the documents and studies listed at the end. The “our reading” passages state this site’s view, in defence of constitutional monarchy, development and economic cooperation with the world; they are not a claim that all historians agree.',
      'Our question is not only who took part in the fall of Mosaddeq’s government. We ask what his oil policy achieved, what he did with the Majles, and why his coalition broke apart. The foreign operation must be known; it does not take the place of examining the prime minister’s own decisions.',
    ],
  },
}

export const analysisSections: AnalysisSection[] = [
  {
    id: 'oil-national',
    n: 1,
    title: {
      fa: 'ملی‌شدن نفت؛ حق مالکیت با موفقیت اقتصادی یکی نیست',
      en: 'Nationalising oil is not the same as economic success',
    },
    summaryEn:
      'In March 1951 both houses of parliament approved the nationalisation of the oil industry. The text itself said exploration, extraction and operations should pass into the hands of the state, so nationalisation and state management were linked in the law. Ownership, management and the public benefit are still three different questions: changing the owner does not, by itself, answer how the industry is run or what share the people receive.',
    paras: [
      'در اسفند ۱۳۲۹، مجلس شورای ملی و مجلس سنا اصل ملی‌شدن صنعت نفت را تصویب کردند. متن پیشنهاد، معنای اجرایی آن را نیز روشن می‌کرد: «تمام عملیات اکتشاف، استخراج و بهره‌برداری در دست دولت قرار گیرد.» بنابراین در زبان همان قانون، ملی‌شدن با ادارهٔ دولتی صنعت پیوند داشت. نمی‌توان گفت قانون فقط نام «ملی» داشت و دولتی‌شدن هیچ نسبتی با معنای آن نداشت.[1]',
      'با این حال، مالکیت ملی، ادارهٔ دولتی و منفعت عمومی سه پرسش متفاوت‌اند. مالکیت می‌گوید منابع و تأسیسات متعلق به چه کسی است؛ مدیریت می‌گوید چه کسی صنعت را اداره می‌کند؛ منفعت عمومی می‌پرسد مردم از حاصل آن چه سهمی می‌برند. تغییر مالک، به‌خودی‌خود پاسخ دو پرسش بعدی نیست.',
    ],
    view: {
      title: 'نگاه ما: استقلال باید به توانایی تبدیل شود',
      paras: [
        'به باور ما، سیاست نفتی زمانی موفق است که حق ایران را به درآمد پایدار، آموزش نیروی متخصص، سرمایه‌گذاری و آبادانی تبدیل کند. دولتی‌شدن بدون پاسخ‌گویی و کارآمدی، تضمین نمی‌کند ثروت کشور در خدمت مردم قرار گیرد. همان‌طور که همکاری با شرکت خارجی نیز به‌خودی‌خود نشانهٔ وابستگی نیست؛ باید مفاد قرارداد، اختیار تصمیم‌گیری و سهم واقعی کشور را سنجید.',
        'نقد ما به مصدق، دفاع از امتیاز پیشین نیست. پرسش این است که پس از اعلام ملی‌شدن، برای بهره‌برداری اقتصادی از آن چه راهی برگزیده شد و آیا هزینهٔ ادامهٔ بن‌بست به‌اندازهٔ کافی در تصمیم‌ها وزن داشت.',
      ],
    },
  },
  {
    id: 'oil-capacity',
    n: 2,
    title: {
      fa: 'آیا ایران توان ادارهٔ صنعت نفت را نداشت؟',
      en: 'Did Iran lack the capacity to run the oil industry?',
    },
    summaryEn:
      'The claim that Iran had no capacity at all does not fit a contemporaneous report. In January 1952 Ambassador Henderson relayed an informal IBRD assessment: Abadan and the fields were well kept, and with about 500 foreign specialists and able management, output could return to earlier levels or beyond. The same report estimated what Iranians could do with little or no foreign help. The harder problems were refining specialised units, tankers and access to a market dominated by the major companies.',
    paras: [
      'پاسخ «هیچ توانی نداشت» با یک گزارش مهم هم‌زمان سازگار نیست. هندرسن، سفیر آمریکا، در ژانویهٔ ۱۹۵۲ ارزیابی غیررسمی کارشناسان بانک بین‌المللی را گزارش کرد: تأسیسات آبادان و میدان‌های نفتی در وضعیت خوبی نگهداری می‌شدند و با حدود ۵۰۰ متخصص خارجی و مدیریتی توانا، امکان بازگشت به سطح تولید پیشین یا فراتر از آن وجود داشت.[2]',
      'همان گزارش، ظرفیت ایرانیان با کمک خارجی اندک یا بدون آن را تا ۲۵ میلیون تن نفت خام و پالایش تا ۵ میلیون تن در سال برآورد می‌کرد؛ البته بعضی واحدهای تخصصی پالایشگاه استثنا بودند. این اعداد **ارزیابی ظرفیت** بودند، نه گزارش تولیدی که بالفعل تحقق یافته باشد. ارزیابی نیز از گفت‌وگوی غیررسمی کارشناسان به سفارت منتقل شده بود، نه از گزارش نهایی منتشرشدهٔ بانک.[2]',
      'مسئله فقط بیرون‌آوردن نفت از زمین نبود. نفت باید پالایش می‌شد، با نفتکش به مشتری می‌رسید و در بازاری به فروش می‌رفت که شرکت‌های بزرگ در آن نفوذ گسترده داشتند. ارزیابی اطلاعاتی ژانویهٔ ۱۹۵۳، کمبود نفتکش و دشواری دسترسی به شبکهٔ توزیع را از موانع فروش مؤثر می‌دانست. فشار بریتانیا و اختلاف حقوقی نیز بر این موانع می‌افزود.[3]',
    ],
    view: {
      title: 'نگاه ما: راه درست، تحقیر توان ایرانی نبود',
      paras: [
        'از نگاه ما، ضعف استدلال «ایران هیچ‌چیز بلد نبود» این است که توان متخصصان ایرانی را نادیده می‌گیرد. استدلال قوی‌تر این است: صنعت نفت مجموعه‌ای از مهارت، سرمایه، تجهیزات، حمل‌ونقل و بازار است. حفظ مالکیت و حقوق ایران می‌توانست با مذاکره برای تأمین این حلقه‌ها همراه شود. استقلال اقتصادی، توان انتخاب شریک و گرفتن قرارداد بهتر است؛ نه الزاماً انجام همهٔ کارها بدون شریک.',
      ],
    },
  },
  {
    id: 'partnership',
    n: 3,
    title: {
      fa: 'آیا مصدق هر نوع مشارکتی را رد می‌کرد؟',
      en: 'Did Mosaddeq reject every form of partnership?',
    },
    summaryEn:
      'The documents do not support an absolute claim that he rejected all cooperation. In November 1951 Henderson reported that Mosaddeq saw the IBRD plan as an opening, while remaining opposed to the return of British experts and uneasy about the sale price. The February 1953 proposals show the dispute turning on the basis for compensation. The criticism is that turning oil into a test of honour made a calculated, staged settlement harder; it does not mean every foreign offer was fair.',
    paras: [
      'اسناد چنین حکم مطلقی را تأیید نمی‌کنند. هندرسن در نوامبر ۱۹۵۱ گزارش داد که مصدق طرح همکاری بانک بین‌المللی را روزنه‌ای برای حل اختلاف می‌دانست. در گفت‌وگو، امکان ایجاد شرکتی با همکاری بانک و شرکت ملی نفت برای به‌کارگیری متخصصان ایرانی و خارجی مطرح شد. او دربارهٔ بازگشت کارشناسان بریتانیایی مخالفت داشت و دربارهٔ قیمت فروش نیز نگران بود.[4]',
      'این سند دو نکته را روشن می‌کند: همکاری خارجی، لزوماً با اصل ملی‌شدن ناسازگار نبود؛ و مصدق نیز همیشه مخالف اصل چنین همکاری‌ای نبود. اختلاف بر سر شرایط، مدیریت، قیمت، غرامت و نقش بریتانیا ادامه داشت.',
      'در پیشنهاد فوریهٔ ۱۹۵۳، یکی از اختلاف‌های اصلی بر سر مبنای محاسبهٔ غرامت بود. مصدق با عبارتی که زیانِ از‌دست‌رفتن مجموعهٔ فعالیت شرکت در ایران را مبنا قرار می‌داد و با ارجاع به قانون ملی‌شدن زغال‌سنگ بریتانیا مشکل داشت. هندرسن پیشنهاد را منصفانه معرفی می‌کرد، اما این داوریِ طرف مذاکره بود، نه حکمی بی‌طرفانه دربارهٔ تمام آثار اقتصادی قرارداد.[5]',
    ],
    view: {
      title: 'نگاه ما: سیاست نباید راه بازگشت را ببندد',
      paras: [
        'به باور ما، رهبر سیاسی باید میان هدف نهایی و توافقی که در شرایط موجود شدنی است تفاوت بگذارد. تبدیل اختلاف نفتی به آزمون حیثیت، می‌توانست عقب‌نشینی حساب‌شده و توافق مرحله‌ای را دشوار کند. ارزیابی اطلاعاتی آمریکا در ژانویهٔ ۱۹۵۳ نیز معتقد بود جبههٔ ملی، نفت را چنان به نماد استقلال تبدیل کرده که توافق باید در افکار عمومی به‌صورت پیروزی سیاسی عرضه می‌شد.[3]',
        'این نقد به مصدق جدی است، اما معنایش آن نیست که هر پیشنهاد خارجی خوب بود یا توافق مطلوب، بدون مانع روی میز قرار داشت. بریتانیا نیز حیثیت، منافع تجاری و اثر توافق ایران بر دیگر امتیازهای نفتی را در نظر می‌گرفت. نقد تصمیم‌های مصدق زمانی محکم‌تر است که محدودیت واقعی گزینه‌ها را بشناسد.',
      ],
    },
  },
  {
    id: 'company-britain',
    n: 4,
    title: {
      fa: 'شرکت نفت طرف قرارداد بود؛ دولت بریتانیا هم دخالت داشت',
      en: 'The oil company was the contract party; the British government was also involved',
    },
    summaryEn:
      'The 1933 concession was between Iran and the company, not between two states, and the International Court of Justice accepted that distinction in July 1952 when it declined jurisdiction. That does not mean the British government was absent: it was the majority shareholder, took the case to the Court, and played a part in political and economic pressure on Iran. The Hague ruling was about jurisdiction, not a verdict on the whole oil strategy.',
    paras: [
      'در این بحث باید حقوق قرارداد را از سیاست بین‌المللی جدا کرد. قرارداد ۱۹۳۳ میان دولت ایران و شرکت نفت بود، نه قراردادی میان ایران و دولت بریتانیا. دیوان بین‌المللی دادگستری نیز این تمایز را پذیرفت و در رأی ژوئیهٔ ۱۹۵۲ اعلام کرد صلاحیت رسیدگی به اختلاف را ندارد.[6]',
      'اما از این نکته نمی‌توان نتیجه گرفت دولت بریتانیا در منازعه حضور نداشت. دولت بریتانیا سهام‌دار اکثریت شرکت بود، دعوا را به دیوان برد و در فشار سیاسی و اقتصادی بر ایران نقش داشت. پرونده، فقط اختلافی میان دولت ایران و یک بنگاه خصوصیِ بی‌ارتباط با حکومت نبود.[6][7][8]',
      'رأی لاهه نیز تأیید همهٔ تصمیم‌های اقتصادی مصدق نبود. دیوان دربارهٔ صلاحیت خود تصمیم گرفت؛ این پیروزی حقوقی را نباید به گواه موفقیت تمام راهبرد نفتی دولت تبدیل کرد.',
    ],
  },
  {
    id: 'constitution',
    n: 5,
    title: {
      fa: 'مصدق و مشروطه؛ مسئله فقط دربار نبود',
      en: 'Mosaddeq and constitutionalism: the issue was not only the court',
    },
    summaryEn:
      'One achievement of constitutionalism was to make the government answerable to parliament. Mosaddeq, whose standing came from defending the law, sought wide law-making powers. Those powers were granted by the Majles, then extended; the real question is how well that concentration of power fitted constitutional principle. The August 1953 referendum to dissolve parliament was not a secret ballot. The 1949 constitutional revision had given dissolution, under conditions, to the shah, so a prime ministerial referendum faced a serious legal objection.',
    paras: [
      'یکی از دستاوردهای مهم مشروطه، پاسخ‌گوکردن دولت در برابر مجلس و محدودکردن قدرت بود. از همین زاویه می‌توان کارنامهٔ مصدق را نقد کرد: سیاستمداری که اعتبار خود را از دفاع از قانون می‌گرفت، برای ادارهٔ کشور خواهان اختیارات گستردهٔ قانون‌گذاری شد.',
      'این اختیارات، بدون هیچ مجوزی تصرف نشده بود. مصوبهٔ مرداد ۱۳۳۱ به شخص نخست‌وزیر اجازه می‌داد در حوزه‌های تعیین‌شده، لوایحی را موقتاً به اجرا بگذارد و برای تعیین تکلیف به مجلسین ارائه کند. سپس مدت اختیارات برای یک سال دیگر تمدید شد. پس ادعای «هیچ مصوبه‌ای در کار نبود» نادرست است؛ بحث اصلی، سازگاری این تمرکز قدرت با اصول مشروطه و کیفیت نظارت بر آن است.[9][10]',
      'در مرداد ۱۳۳۲، مسئلهٔ همه‌پرسی انحلال مجلس مطرح شد. گزارش هم‌زمان نیویورک‌تایمز از مرحلهٔ تهران می‌گوید رأی مخفی نبود، محل رأی‌دادن موافقان و مخالفان جدا بود و رأی‌دهنده باید مشخصات هویتی خود را اعلام می‌کرد. چنین روشی، امکان تشخیص موضع سیاسی رأی‌دهنده را فراهم می‌کرد.[11]',
      'در بازنگری قانون اساسی در سال ۱۳۲۸، اختیار انحلال مجلس با شرایطی به شاه داده شده بود. به همین دلیل، استفادهٔ نخست‌وزیر از همه‌پرسی برای این منظور با ایراد جدی حقوقی روبه‌رو بود. تفسیر حدود اختیارات نهادها، بخشی از خود بحران بود؛ نمی‌توان با یک شعار تمام اختلاف حقوقی را حل‌شده دانست.[12]',
    ],
    view: {
      title: 'نگاه ما: تضعیف نهادی که باید دولت را مهار می‌کرد',
      paras: [
        'به باور ما، این نقطه از کارنامهٔ مصدق سزاوار نقدی صریح است. او که از سنت مشروطه اعتبار می‌گرفت، با تمرکز اختیار قانون‌گذاری و حرکت به سوی حذف مجلس موجود، به تضعیف سازوکاری کمک کرد که باید قدرت نخست‌وزیر را نیز محدود می‌کرد.',
        'محبوبیت، جای نظارت نهادی را نمی‌گیرد. مجلسِ پرتنش و مخالف، می‌تواند برای دولت دردسرساز باشد؛ اما دشواربودن پاسخ‌گویی، دلیل کافی برای کنارزدن آن نیست. از این منظر، ما مصدق را نه صرفاً قربانی بحران، بلکه یکی از مسئولان فرسایش دستاوردهای مشروطه می‌دانیم.',
      ],
    },
  },
  {
    id: 'coalition',
    n: 6,
    title: {
      fa: 'فروپاشی ائتلاف؛ چرا مخالفان داخلی اهمیت داشتند؟',
      en: 'The coalition’s collapse: why domestic opponents mattered',
    },
    summaryEn:
      'The fall of the government cannot be explained by naming one intelligence service alone. After 30 Tir 1331, earlier allies such as Kashani, Baqa’i and Makki drew away. Appointments and emergency powers were among the points of dispute, and some of these forces later cooperated with Zahedi. Mahdi Tadayyoni stresses that weakening the traditional pillars of power could open space for the Tudeh party; we find that attention helpful.',
    paras: [
      'سقوط دولت را نمی‌توان فقط با نام یک سازمان اطلاعاتی توضیح داد. پس از سی تیر ۱۳۳۱، فاصلهٔ برخی همراهان پیشین، از جمله کاشانی، بقایی و مکی، با مصدق بیشتر شد. انتصاب‌های دولت و مسئلهٔ اختیارات فوق‌العاده از موضوع‌های اختلاف بود. پژوهش ایرانیکا نشان می‌دهد بخشی از این نیروها به همکاری با زاهدی روی آوردند.[8]',
      'این شکاف‌ها اهمیت دارند، چون نشان می‌دهند مخالفت با مصدق فقط از خارج وارد نشده بود. دربار، بخشی از افسران، نیروهای مذهبی و سیاستمداران جداشده از ائتلاف، انگیزه‌ها و محاسبات خود را داشتند. البته وجود انگیزهٔ داخلی، ارتباط بعضی شبکه‌ها با قدرت‌های خارجی را نفی نمی‌کند.',
      'مهدی تدینی، نویسندهٔ یادداشت‌های انتقادی دربارهٔ مصدق در کانال گاراژ، به پیامدهای این کشمکش برای نیروهای داخلی توجه می‌کند. او در «مصدق و چپ جدید و قدیم» توضیح می‌دهد که تضعیف ارکان سنتی قدرت می‌توانست برای حزب توده فرصت بسازد. به باور ما، توجه او به این پیامد، راهگشاست؛ برای سنجش سیاست مصدق باید دید درگیری‌های دولت چه نیروهایی را تضعیف می‌کرد و چه فرصت‌هایی در اختیار رقیبان می‌گذاشت.[13]',
    ],
    view: {
      title: 'نگاه ما: نخست‌وزیر مسئول حفظ امکان همکاری هم بود',
      paras: [
        'از نگاه ما، سنجش رهبری فقط با قدرت بسیج هواداران انجام نمی‌شود. توان نگه‌داشتن ائتلاف، تحمل مخالفت و جلوگیری از تبدیل همهٔ اختلاف‌ها به نبرد نهایی نیز مهم است. دولت دوم مصدق در این زمینه به بن‌بستی پرهزینه رسید. نقد این شکست، به معنای نادیده‌گرفتن مداخلهٔ خارجی نیست؛ بررسی مسئولیت یک دولت در ادارهٔ بحران خودش است.',
      ],
    },
  },
  {
    id: 'tudeh',
    n: 7,
    title: {
      fa: 'خطر حزب توده؛ واقعی، اما نه پیروزیِ حتمی و فوری',
      en: 'The Tudeh danger: real, but not an immediate takeover',
    },
    summaryEn:
      'The Soviet occupation and the local regimes in Azerbaijan and Kurdistan in 1945–46 had already made territorial integrity a practical concern. A later National Intelligence Estimate, in January 1953, did not think the Tudeh likely to seize the state that year, yet warned that its influence could grow if economic and political erosion continued. The discovery of the Tudeh military network in 1954 showed how serious the penetration was; it does not by itself prove the party was ready to win in August 1953.',
    paras: [
      'برای فهم نگرانی از شوروی، باید تجربهٔ پیشین ایران را دید. در سال‌های ۱۳۲۴ و ۱۳۲۵، حضور نیروهای شوروی و حمایت از حکومت‌های محلی در آذربایجان و کردستان، نگرانی دربارهٔ تمامیت ارضی را به مسئله‌ای عینی تبدیل کرده بود. مخالفت آمریکا با این اقدامات و حمایت آن از تلاش دولت ایران برای بازگرداندن اقتدار خود نیز بخشی از این سابقه بود.[14]',
      'نفوذ اطلاعاتی شوروی سابقه‌ای قدیمی‌تر داشت. پژوهشی دانشگاهی دربارهٔ آقابکف، از افشای شبکهٔ جاسوسی شوروی در پاییز ۱۹۳۰ و حضور اعضای آن در دستگاه‌های دولتی ایران سخن می‌گوید. این سابقه نشان می‌دهد نگرانی امنیتی از همسایهٔ شمالی، اختراع روزهای آخر دولت مصدق نبود. بااین‌حال، یک شبکه در دورهٔ رضاشاه به‌تنهایی مدرک وجود همان شبکه یا همان توان عملیاتی در سال ۱۳۳۲ نیست.[15]',
      'مهم‌تر از قیاس‌های تاریخی، ارزیابی هم‌زمان است. برآورد اطلاعات ملی آمریکا در ژانویهٔ ۱۹۵۳، تسلط حزب توده بر دولت را در همان سال محتمل نمی‌دانست؛ چه از راه پارلمانی، چه با زور و چه با نفوذ در حکومت. اما همان سند دربارهٔ نفوذ حزب و احتمال تقویت آن در صورت ادامهٔ فرسایش اقتصادی و سیاسی هشدار می‌داد.[3]',
      'در ارزیابی ۱۷ اوت ۱۹۵۳، پس از شکست اقدام اولیه برای برکناری مصدق، تحلیلگران CIA حزب توده را آمادهٔ تصرف فوری قدرت نمی‌دانستند؛ بااین‌حال، تضعیف مخالفان غیرکمونیست را به سود موقعیت آیندهٔ حزب ارزیابی می‌کردند. این، پیش‌بینی دستگاه اطلاعاتی بود، نه خبر از آینده‌ای که حتماً رخ می‌داد.[16]',
      'کشف شبکهٔ حزب توده در نیروهای مسلح در مرداد ۱۳۳۳ نیز واقعیتی مهم است. گزارش دسامبر همان سال از بازداشت صدها فرد مرتبط سخن می‌گوید و در عین حال تأکید می‌کند گسترهٔ کامل نفوذ هنوز روشن نشده بود. این کشف، جدی‌بودن نفوذ را نشان می‌دهد؛ نه اینکه به‌تنهایی ثابت کند حزب در مرداد سال قبل آمادهٔ پیروزی قطعی بود.[17]',
    ],
    view: {
      title: 'نگاه ما: نگرانی شاه را باید در جغرافیای واقعی ایران فهمید',
      paras: [
        'به باور ما، حفظ ایران در برابر گسترش نفوذ شوروی، دغدغه‌ای مهم و قابل‌دفاع در سیاست محمدرضاشاه بود. نمی‌توان با تمرکز صرف بر نفت، این نگرانی را از روایت حذف کرد. اما دفاع مستند از این موضع به ادعای اثبات‌ناپذیر «اگر مصدق می‌ماند، ایران حتماً تجزیه می‌شد» نیاز ندارد. جدی‌بودن خطر با قطعی‌بودن بدترین نتیجه فرق دارد.',
      ],
    },
  },
  {
    id: 'monarchy',
    n: 8,
    title: {
      fa: 'مشروطه، جمهوری و روزهای پس از خروج شاه',
      en: 'Constitutional monarchy, a republic, and the days after the shah left',
    },
    summaryEn:
      'After the shah left in August 1953, a possible change in the monarchy became a subject of discussion. A CIA note of 17 August mentioned a regency council, another shah, or even abolition of the throne; that records analysts’ concerns, not a final decision by the government. Tadayyoni emphasises republican leanings among some of Mosaddeq’s circle. Details in that note about preparing a referendum on the morning of 28 Mordad have not been independently confirmed here from a direct government decision.',
    paras: [
      'پس از خروج شاه در مرداد ۱۳۳۲، احتمال تغییر در ساختار سلطنت به موضوع بحث تبدیل شد. یادداشت ۱۷ اوت CIA از امکان تشکیل شورای سلطنت، تعیین شاهی دیگر یا حتی الغای سلطنت سخن می‌گفت. این سند، نگرانی و پیش‌بینی تحلیلگران را ثبت می‌کند؛ نه اینکه به‌خودی‌خود وجود تصمیم نهایی و اجراشدهٔ دولت را ثابت کند.[16]',
      'تدینی در یادداشت خود، بر گرایش جمهوری‌خواهانهٔ برخی نزدیکان مصدق و طرح شورای سلطنت تأکید می‌کند. توجه او به سرنوشت نهاد سلطنت، برای فهم ابعاد بحران اهمیت دارد. جزئیات آماده‌سازی همه‌پرسی در صبح ۲۸ مرداد که در این یادداشت آمده، در بررسی حاضر با سند مستقیم تصمیم دولت مستقلاً تأیید نشده است.[13]',
    ],
    view: {
      title: 'نگاه ما',
      paras: [
        'از موضع دفاع از پادشاهی مشروطه، کنارزدن نهاد سلطنت در میانهٔ بحران، تغییری بنیادین بود؛ نه صرفاً جابه‌جایی یک نخست‌وزیر. بااین‌حال، نقد این گرایش نباید به یکسان‌گرفتن همهٔ هواداران مصدق یا نسبت‌دادن تصمیم اثبات‌نشده به او بینجامد.',
      ],
    },
  },
  {
    id: 'ajax',
    n: 9,
    title: {
      fa: 'آژاکس؛ سند مداخله را نمی‌توان حذف کرد',
      en: 'Ajax: the evidence of intervention cannot be removed',
    },
    summaryEn:
      'A document of 4 April 1953 records Kermit Roosevelt’s request for TPAJAX funds, with staged payments and a waiver of written receipts; the published sum is redacted. A meeting on 6 June planned a change of government, a military role and a press campaign. The first attempt on the night of 15–16 August failed; on 19 August a mix of opponents, street crowds and parts of the army brought the government down. Foreign organisation does not mean every person in the street was paid; genuine opponents do not cancel the foreign documents.',
    paras: [
      'در سند ۴ آوریل ۱۹۵۳، کرمیت روزولت برای عملیات ویژهٔ آژاکس درخواست بودجه می‌کند. سند از پرداخت مرحله‌ای و معافیت از دریافت رسید کتبی سخن می‌گوید و تأیید مقام‌های CIA را نیز ثبت کرده است. مبلغ در نسخهٔ منتشرشده پوشیده مانده؛ بنابراین نباید عددی را به این نسخه نسبت داد که در آن دیده نمی‌شود.[18]',
      'صورت‌جلسهٔ ۶ ژوئن، برنامه‌ریزی برای جابه‌جایی دولت، نقش نیروهای نظامی و برنامهٔ مطبوعاتی و تبلیغاتی را نشان می‌دهد. اسناد منتشرشدهٔ دیگر نیز پیشنهاد بریتانیا برای برکناری مصدق و گفت‌وگوهای دو کشور را ثبت کرده‌اند.[19][20]',
      'اقدام اولیه در شب ۲۴ به ۲۵ مرداد ناکام ماند. در ۲۸ مرداد، ترکیبی از نیروهای مخالف دولت، جمعیت خیابانی و بخش‌هایی از نیروهای نظامی، دولت را سرنگون کردند. پژوهش‌های تاریخی، هم فعالیت شبکه‌های مرتبط با عملیات خارجی و هم پیوستن نیروهای داخلی با انگیزه‌های متفاوت را بررسی کرده‌اند.[8]',
      'وجود تأمین مالی و سازمان‌دهی، ثابت نمی‌کند هر فرد حاضر در خیابان مزد گرفته بود. به همان اندازه، حضور مخالفان واقعی مصدق، اسناد سازمان‌دهی خارجی را بی‌اعتبار نمی‌کند. نتیجهٔ تاریخی از کنار هم قرارگرفتن این عوامل به دست آمد.',
    ],
    view: {
      title: 'نگاه ما: مسئولیت مصدق با کشف عملیات خارجی ناپدید نمی‌شود',
      paras: [
        'از نگاه ما، خطای روایت قهرمان‌محور این است که با رسیدن به نام CIA، پرسش دربارهٔ تصمیم‌های مصدق را پایان‌یافته می‌داند. دولت او پیش از سقوط نیز باید دربارهٔ راهبرد نفت، تمرکز قدرت، همه‌پرسی و ازهم‌گسیختن ائتلاف خود پاسخ بدهد.',
        'دفاع ما از محمدرضاشاه به حذف سند نیاز ندارد. می‌توان اهمیت نهاد پادشاهی، نگرانی از شوروی و انتخاب همکاری با جهان را برجسته کرد و هم‌زمان گزارش درست عملیات خارجی را نگه داشت. اعتبار این دفاع، به همین توانایی در روبه‌روشدن با سند وابسته است.',
      ],
    },
  },
  {
    id: 'consortium',
    n: 10,
    title: {
      fa: 'پس از بحران؛ کنسرسیوم چه چیزی را نشان می‌دهد؟',
      en: 'After the crisis: what the consortium shows',
    },
    summaryEn:
      'The 1954 consortium agreement showed that Iran’s legal ownership and cooperation with foreign companies could sit inside one contract. Legal title to the former facilities passed to Iran, while most production and refining was run by operating companies of the consortium. Iran named two of seven directors on each board and was to receive 50 percent of net profits. Legal ownership should not be confused with full operational control; nor should the reopening of sales and revenue be ignored.',
    paras: [
      'توافق کنسرسیوم در سال ۱۳۳۳ نشان داد مالکیت حقوقی ایران و همکاری با شرکت‌های خارجی می‌توانند در یک چارچوب قراردادی کنار هم قرار گیرند. خلاصهٔ توافق در اسناد آمریکا می‌گوید مالکیت حقوقی تأسیسات پیشین به ایران منتقل شد، اما ادارهٔ بخش اصلی تولید و پالایش با شرکت‌های عملیاتی وابسته به کنسرسیوم بود. دو عضو از هفت عضو هیئت‌مدیرهٔ هر شرکت را ایران معرفی می‌کرد و سهم ایران از سود خالص، ۵۰ درصد تعیین شده بود.[17]',
      'پس نباید مالکیت حقوقی را با کنترل کامل عملیاتی یکی گرفت. از سوی دیگر، نمی‌توان از کنار بازشدن دوبارهٔ مسیر فروش و درآمد گذشت. همان گزارش، درآمد سال سوم را ۱۷۵ میلیون دلار برآورد می‌کرد؛ این رقم **پیش‌بینی آن زمان** بود، نه آمار تحقق‌یافته‌ای که از آن سند بتوان استخراج کرد.[17]',
    ],
    view: {
      title: 'نگاه ما: خروج از بن‌بست، ارزش سیاسی داشت',
      paras: [
        'به باور ما، پشتیبانی محمدرضاشاه از حل اختلاف و بازگشت ایران به همکاری اقتصادی بین‌المللی، انتخابی مهم در جهت تأمین منابع توسعه بود. قرارداد را می‌توان بندبه‌بند سنجید و دربارهٔ محدودیت‌هایش بحث کرد؛ اما اصلِ ترجیحِ درآمد، سرمایه‌گذاری و امکان مذاکرهٔ بعدی بر ادامهٔ بن‌بست، قابل‌دفاع است.',
        'این نتیجه نیز ثابت نمی‌کند همان توافق با همان شرایط، پیش از سقوط دولت مصدق آمادهٔ پذیرش بود. شرایط بازار، سیاست دولت‌ها و ترکیب طرف‌های مذاکره تغییر کرده بود.',
      ],
    },
  },
  {
    id: 'abrahamian',
    n: 11,
    title: {
      fa: 'نقد آبراهامیان؛ از جملهٔ دقیق تا سند مقابل',
      en: 'Critiquing Abrahamian: from the exact sentence to the document opposite it',
    },
    summaryEn:
      'Two claims in Abrahamian’s 2017 interview are set beside the documents: that “there was never a compromise offered him,” and that “there was no evidence of a communist threat to Iran.” The first, even with his explanation about real control, overstates how closed the bargaining room was. The second is sound if it means no imminent Tudeh seizure that year; it is too absolute if it means there was no serious security concern at all. A publisher’s blurb that the operation “installed” the shah is a fault in the blurb, not, without checking the book, a quotation from Abrahamian himself.',
    paras: [
      'در نقد روایت آبراهامیان، دو پرسش را با جمله‌های خود او و اسناد مقابل بررسی می‌کنیم: آیا راه سازش نفتی کاملاً بسته بود و آیا نگرانی از کمونیسم هیچ پشتوانه‌ای نداشت؟ این بررسی بر مصاحبهٔ ۲۰۱۷ او و اسناد مشخص تمرکز دارد و نقد کامل و صفحه‌به‌صفحهٔ کتاب «کودتا» نیست.[21]',
    ],
    subs: [
      {
        title: 'الف) «هیچ سازشی پیشنهاد نشد»؛ تعبیری که باید محدود شود',
        paras: [
          'آبراهامیان در پاسخ به پرسش دربارهٔ امکان توافق نفتی می‌گوید: «there was never a compromise offered him»؛ یعنی «هیچ‌گاه سازشی به او پیشنهاد نشد». او بلافاصله توضیح می‌دهد که از نگاه مصدق، ملی‌شدن باید کنترل واقعی اکتشاف، پالایش و صادرات را در اختیار ایرانیان قرار می‌داد؛ در حالی که طرف‌های غربی بر حفظ مدیریت صنعت اصرار داشتند.[21]',
          'این توضیح را نباید از نقل او حذف کرد. بحث او صرفاً انکار وجود برگه‌های پیشنهادی نیست؛ دربارهٔ محتوای سازش است. بااین‌حال، به باور ما، تعبیر مطلق «هیچ سازشی» فضای واقعی چانه‌زنی را بیش از حد بسته نشان می‌دهد. گزارش نوامبر ۱۹۵۱، علاقهٔ خود مصدق به راه‌حل بانک بین‌المللی را ثبت کرده و گزارش فوریهٔ ۱۹۵۳، اختلاف مشخص دربارهٔ مبنای غرامت را شرح می‌دهد.[4][5]',
          'شاهد مهم‌تر، یادداشت نوامبر ۱۹۵۲ وزارت خارجهٔ آمریکاست: مقام آمریکایی از بررسی کمک یک‌جانبه به دولت مصدق، در صورت نرسیدن بریتانیا به توافقی موردقبول او، سخن می‌گوید. این سند با تصویر دو دولت به‌عنوان اراده‌ای کاملاً یکدست سازگار نیست.[20]',
          '**جمع‌بندی نقد:** از نظر ما، اختلاف منافع و امکان چانه‌زنی در این روایت کم‌رنگ می‌شود. اما این اسناد ثابت نمی‌کنند پیشنهاد نهایی حتماً منصفانه بود یا پذیرش آن موفقیت را تضمین می‌کرد.',
        ],
      },
      {
        title: 'ب) نبودِ خطر فوری با نبودِ هیچ خطر یکی نیست',
        paras: [
          'آبراهامیان در همان مصاحبه، هنگام رد توجیه ضدکمونیستی عملیات، می‌گوید: «There was no evidence of a communist threat to Iran»؛ یعنی «هیچ شاهدی از تهدید کمونیستی علیه ایران وجود نداشت». در ادامه، محور استدلالش این است که حزب توده آمادگی تصرف قدرت را نداشت و گزارش‌های اطلاعاتی نیز خطر فوری را تأیید نمی‌کردند.[21]',
          'بخش دوم این استدلال پشتوانه دارد: ارزیابی ژانویهٔ ۱۹۵۳، تسلط حزب را در همان سال محتمل نمی‌دانست. اما همان سند دربارهٔ نفوذ و خطر قدرت‌گیری تدریجی هشدار می‌داد. سیاست مصوب دولت ترومن در نوامبر ۱۹۵۲ نیز نگرانی از گسترش نفوذ شوروی را آشکارا ثبت می‌کند.[3][22]',
          '**جمع‌بندی نقد:** اگر منظور «نبودِ احتمال بالای کودتای فوری حزب توده» باشد، سند مهمی در تأیید آن وجود دارد. اگر عبارت به معنای «نبودِ هیچ تهدید یا نگرانی امنیتی معتبر» خوانده شود، بیش از آنچه اسناد اجازه می‌دهند مطلق است. وجود نگرانی واقعی نیز به‌خودی‌خود ضرورت یا مشروعیت سرنگونی دولت را ثابت نمی‌کند.',
        ],
      },
      {
        title: 'پ) خطای معرفی ناشر را با متن کتاب اشتباه نگیریم',
        paras: [
          'در معرفی انگلیسی کتاب در وب‌سایت ناشر آمده که عملیات، شاه را «installed Muhammad Reza Shah Pahlavi in his place»؛ یعنی به‌جای رهبر برکنارشده مستقر کرد. این عبارت از نظر مقام سیاسی دقیق نیست: محمدرضاشاه از سال ۱۳۲۰ پادشاه بود و زاهدی جانشین مصدق در نخست‌وزیری شد.[8][12][23]',
          'این ایراد به **متن معرفی ناشر** وارد است. بدون تطبیق با صفحهٔ کتاب، نمی‌توان آن را نقل‌قول خود آبراهامیان یا خطای اثبات‌شدهٔ متن کتاب معرفی کرد. رعایت همین مرز، تفاوت نقد مستند با جدل شتاب‌زده است.',
        ],
      },
      {
        title: 'ت) روایت غرب‌ستیز و مسئولیت سیاست داخلی',
        paras: [
          'تدینی در نقدهایش، روایت آبراهامیان را در خدمت نگاه چپ و غرب‌ستیز می‌داند و بر تأثیر آن در فضای فکری ایران تأکید می‌کند.[13][24][25]',
        ],
        view: {
          title: 'نگاه ما',
          paras: [
            'نقد او به کارکرد چنین روایتی را وارد می‌دانیم. تمرکز بر ستم خارجی، اگر انتخاب‌های داخلی و هزینهٔ سیاست‌های اقتصادی را به حاشیه ببرد، فهم مسئولیت دولت مصدق را ناقص می‌کند. دو مسئلهٔ بررسی‌شده در این بخش نشان می‌دهند چرا باید اختلاف مواضع دولت‌های غربی و تفاوت خطر فوری با خطر بلندمدت را در روایت نگه داشت.',
          ],
        },
      },
    ],
  },
  {
    id: 'tadayyoni',
    n: 12,
    title: {
      fa: 'خوانشی از نقدهای مهدی تدینی؛ استقلال، آزادی و توسعه',
      en: 'A reading of Mahdi Tadayyoni’s critiques: independence, liberty and development',
    },
    summaryEn:
      'In “Mosaddeq and the new and old left,” Tadayyoni highlights three points: how the memory of Mosaddeq’s fall can be used to criticise America; how the government’s clash with traditional forces could help the Tudeh; and the later link between some of Mosaddeq’s supporters and republicanism. He is careful to distinguish the Tudeh from non-Tudeh leftists who supported Mosaddeq for his own sake. We find his argument that anti-Western feeling can become a cover for opposing economic liberty and modern institutions convincing.',
    paras: [
      'در یادداشت «مصدق و چپ جدید و قدیم»، تدینی سه محور را برجسته می‌کند: قابلیت استفاده از خاطرهٔ سقوط مصدق برای نقد آمریکا؛ فرصت‌سازیِ کشمکش دولت با نیروهای سنتی برای حزب توده؛ و پیوند برخی هواداران بعدی مصدق با جمهوری‌خواهی. او در پی‌نوشت تصریح می‌کند که بخش بزرگی از حامیان ثابت‌قدم مصدق، چپ‌های غیرتوده‌ای بودند و برای آنان حمایت از مصدق هدف بود، نه ابزار.[13]',
      'تفکیکی که خود تدینی میان حزب توده و چپ‌های غیرتوده‌ایِ وفادار به مصدق می‌گذارد، به فهم دقیق‌تر آن دوره کمک می‌کند. موضوع نقد، شیوهٔ استفاده از میراث سیاسی مصدق است؛ تفاوت جریان‌ها و انگیزه‌های حامیان او نیز بخشی از همین بررسی است.',
      'در یادداشت «چپ آکادمیک غربی، متحد غرب‌ستیزان شرقی»، تدینی به رابطهٔ غرب‌ستیزی با مخالفت با آزادی اقتصادی و نهادهای مدرن می‌پردازد.[24]',
      'در دو یادداشت دیگر، او با تشبیه کتاب «کودتا» به متنی مناسب شبکهٔ افق و نقد تأثیر روایت آبراهامیان، اعتراض خود را به کاربرد سیاسی این تاریخ‌نگاری بیان می‌کند. این داوری او دربارهٔ کارکرد روایت است؛ در بخش پیش، نقد مشخص ما با نقل جمله و بررسی سند آمده است.[25][26]',
    ],
    view: {
      title: 'نگاه ما: نقد قدرت خارجی نباید به نفی توسعه تبدیل شود',
      paras: [
        'مهدی تدینی به نکته‌ای مهم اشاره می‌کند: غرب‌ستیزی می‌تواند پوششی برای مخالفت با آزادی اقتصادی و نهادهای مدرن باشد و زبان دانشگاهی به آن اعتبار بدهد. ما این استدلال او را قانع‌کننده می‌دانیم؛ نقد قدرت‌های غربی نباید به نفی تجارت، انتقال فناوری و همکاری با جهان تبدیل شود.[24]',
        'از نگاه ما، سیاست‌های اقتدارگرایانه و اقتصاد دولتیِ غیرپاسخ‌گو، حتی با شعار عدالت، می‌توانند آزادی فردی، فرصت پیشرفت و رفاه مردم را قربانی کنند. نقد ما متوجه حذف تکثر سیاسی، محدودکردن انتخاب شهروندان و تمرکز قدرت اقتصادی بدون نظارت و پاسخ‌گویی است. شعار عدالت، این سیاست‌ها را از سنجش با نتیجهٔ واقعی‌شان معاف نمی‌کند.',
        'استقلال باید توان کشور برای انتخاب شریک، مذاکره و گرفتن قرارداد بهتر را افزایش دهد. دفاع از حقوق ایران با دادوستد و انتقال فناوری سازگار است. این همان معیاری است که با آن از جهت‌گیری محمدرضاشاه به سوی همکاری اقتصادی و امنیتی با جهان دفاع می‌کنیم.',
      ],
    },
  },
]

export const tadayyoniListen = {
  id: 'tadayyoni-listen',
  kicker: { fa: 'گفتار', en: 'A talk' } satisfies Bi,
  title: { fa: 'برای شنیدن گفتار مهدی تدینی', en: 'Listen to Mahdi Tadayyoni' } satisfies Bi,
  lead: {
    fa: 'این گفتار به بررسی رابطهٔ شاه و مصدق از نگاه تدینی اختصاص دارد. پیوند زیر شما را به نسخهٔ اصلی در کانال گاراژ می‌برد.',
    en: 'This talk examines the relationship between the shah and Mosaddeq as Tadayyoni sees it. The link below takes you to the original post on the Garage channel.',
  } satisfies Bi,
  button: {
    fa: 'شنیدن گفتار: «رابطهٔ شاه و مصدق»',
    en: 'Listen: “The relationship between the Shah and Mosaddeq”',
  } satisfies Bi,
  href: 'https://t.me/Garajetadayoni/10513',
  note: {
    fa: 'فایل صوتی را اینجا میزبانی نمی‌کنیم. برای بازنشر مستقل، اجازهٔ صاحب حقوق لازم است.',
    en: 'We do not host the audio here. Re-publishing it independently would need the rights-holder’s permission.',
  } satisfies Bi,
}

export function analysisTexts(): string[] {
  const out: string[] = [...analysisIntro.paras.fa, ...analysisIntro.paras.en]
  for (const s of analysisSections) {
    out.push(s.title.fa, s.title.en, s.summaryEn, ...s.paras)
    if (s.view) out.push(s.view.title, ...s.view.paras)
    for (const sub of s.subs ?? []) {
      out.push(sub.title, ...sub.paras)
      if (sub.view) out.push(sub.view.title, ...sub.view.paras)
    }
  }
  out.push(
    tadayyoniListen.title.fa,
    tadayyoniListen.title.en,
    tadayyoniListen.lead.fa,
    tadayyoniListen.lead.en,
    tadayyoniListen.button.fa,
    tadayyoniListen.button.en,
    tadayyoniListen.href,
    tadayyoniListen.note.fa,
    tadayyoniListen.note.en,
  )
  return out
}
