/** Saadi in the library: sources and the sourced prose of the Bustan, the Golestan and the «سعدی کیست؟» page.
 * Texts and meanings are from Ganjoor's open data (./text, see scripts/extract-ganjoor-saadi.py);
 * every sentence of prose below carries the ids of the sources it rests on. «نگاه ما» is kept apart, in `ourView`. */
import type { SaadiBook } from './paths'

export * from './paths'

export interface SdSource {
  id: string
  title: string
  url: string
}

export const SOURCES = [
  { id: 'ganjoor-bustan', title: 'گنجور: بوستان سعدی (متن، معنی بیت‌ها و خلاصهٔ بخش‌ها)', url: 'https://ganjoor.net/saadi/boostan' },
  { id: 'ganjoor-golestan', title: 'گنجور: گلستان سعدی (متن، معنی بندها و بیت‌ها و خلاصهٔ حکایت‌ها)', url: 'https://ganjoor.net/saadi/golestan' },
  { id: 'ganjoor-data', title: 'ganjoor-data: خروجی دادهٔ باز گنجور (منبع استخراج متن و معنی‌ها)', url: 'https://github.com/ganjoor/ganjoor-data' },
  { id: 'iranica-life', title: 'Encyclopaedia Iranica, “Saʿdi Širāzi” (Paul E. Losensky)', url: 'https://www.iranicaonline.org/articles/sadi-sirazi/' },
  { id: 'iranica-bustan', title: 'Encyclopaedia Iranica, “Būstān” (G. M. Wickens)', url: 'https://www.iranicaonline.org/articles/bustan-sadi/' },
  { id: 'iranica-golestan', title: 'Encyclopaedia Iranica, “Golestān-e Saʿdi”', url: 'https://www.iranicaonline.org/articles/golestan-e-sadi/' },
  { id: 'britannica', title: 'Encyclopaedia Britannica, “Saʿdī”', url: 'https://www.britannica.com/biography/Sadi' },
  { id: 'wiki-saadi', title: 'Wikipedia, “Saadi Shirazi” (بخش‌های «بنی آدم» و تأثیر در غرب)', url: 'https://en.wikipedia.org/wiki/Saadi_Shirazi' },
  { id: 'wiki-tomb', title: 'Wikipedia, “Tomb of Saadi”', url: 'https://en.wikipedia.org/wiki/Tomb_of_Saadi' },
] as const satisfies readonly SdSource[]

export type SourceId = (typeof SOURCES)[number]['id']
export const sourceById = (id: SourceId) => SOURCES.find((s) => s.id === id)!

export interface Para {
  text: string
  cite: readonly SourceId[]
}

export interface AboutSection {
  id: string
  title: string
  paras: readonly Para[]
}

export interface BookContent {
  slug: SaadiBook
  title: string
  kicker: string
  description: string
  /** the bayt the landing opens with: the first of this section, or the first that starts with `starts` */
  opening: { chapter: string; n: number; starts?: string }
  facts: readonly { label: string; value: string }[]
  intro: readonly Para[]
  ourView: readonly string[]
  /** what a section is called in this book */
  unit: string
}

export const SAADI_NAME = 'ابومحمد مشرف‌الدین مصلح بن عبدالله سعدی شیرازی'

export const BOOKS: Record<SaadiBook, BookContent> = {
  bustan: {
    slug: 'bustan',
    title: 'بوستان سعدی',
    kicker: 'مثنوی · اخلاق · حکایت',
    description: 'بوستان سعدی کامل: دیباچه و هر ده باب، ۲۳۰ بخش و حکایت با متن کامل از گنجور، معنی بیت به بیت و خلاصهٔ هر بخش؛ با درآمدی مستند دربارهٔ کتاب و زندگی سعدی.',
    opening: { chapter: 'niyayesh', n: 1 },
    unit: 'بخش',
    facts: [
      { label: 'سروده', value: '۶۵۵ ق / ۱۲۵۷ م' },
      { label: 'قالب', value: 'مثنوی، نزدیک به ۴۱۰۰ بیت' },
      { label: 'ساختار', value: 'دیباچه و ده باب' },
      { label: 'پیشکش به', value: 'اتابک ابوبکر بن سعد زنگی' },
    ],
    intro: [
      { text: 'بوستان مثنوی‌ای است در نزدیک به ۴۱۰۰ بیت که سعدی آن را در سال ۶۵۵ ق / ۱۲۵۷ م به پایان برد؛ نامی که در آغاز بر آن بود ظاهراً «سعدی‌نامه» است و «بوستان» به معنای باغ گیاهان خوش‌بوست.', cite: ['iranica-bustan', 'britannica'] },
      { text: 'سعدی کتاب را به اتابک ابوبکر بن سعد زنگی، فرمانروای فارس از ۶۲۳ تا ۶۵۸ ق (۱۲۲۶ تا ۱۲۶۰ م)، پیشکش کرد و پسر او سعد و نواده‌اش محمد بن سعد را نیز ستود؛ با این همه در بوستان سخنانی بی‌پرده خطاب به فرمانروایان کم نیست.', cite: ['iranica-bustan'] },
      { text: 'پس از دیباچه، کتاب ده باب دارد: عدل و تدبیر و رای، احسان، عشق و مستی و شور، تواضع، رضا، قناعت، عالم تربیت، شکر بر عافیت، توبه و راه صواب، و مناجات و ختم کتاب. هر باب از حکایت‌ها و گفتارهایی کوتاه ساخته شده است.', cite: ['ganjoor-bustan', 'iranica-bustan'] },
      { text: 'بیشتر منتقدان ایرانی برخی از حکایت‌های بوستان، مانند حکایت بتخانه‌ای در گجرات (در باب هشتم)، را ساختگی می‌دانند. شاید خود سعدی بوستان را از گلستان، که چند ماه پس از آن نوشت، برتر می‌شمرد.', cite: ['iranica-bustan'] },
    ],
    ourView: [
      'بوستان را می‌شود باغی دانست که در آن پند، داستان و دعا کنار هم روییده‌اند. زبانش ساده است و وزنش روان؛ همین سادگی است که بیت‌هایش را مَثَل کرده است. پیشنهاد ما: از باب اول شروع کنید، یا از هر بابی که نامش شما را می‌خواند، و برای هر بیت، اگر خواستید، معنی‌اش را هم بخوانید.',
    ],
  },
  golestan: {
    slug: 'golestan',
    title: 'گلستان سعدی',
    kicker: 'نثر مسجّع · حکایت · حکمت',
    description: 'گلستان سعدی کامل: دیباچه و هر هشت باب، حکایت به حکایت با متن کامل از گنجور، معنی بند به بند و بیت به بیت و خلاصهٔ هر حکایت؛ با درآمدی مستند دربارهٔ کتاب و زندگی سعدی.',
    opening: { chapter: 'dibache', n: 1, starts: 'به چه کار آیدت' },
    unit: 'حکایت',
    facts: [
      { label: 'نوشته', value: '۶۵۶ ق / ۱۲۵۸ م' },
      { label: 'قالب', value: 'نثر آمیخته با شعر' },
      { label: 'ساختار', value: 'دیباچه و هشت باب' },
      { label: 'پیشکش به', value: 'اتابک ابوبکر بن سعد' },
    ],
    intro: [
      { text: 'گلستان را شاید بتوان پرنفوذترین اثر نثر فارسی دانست. سعدی آن را در سال ۶۵۶ ق / ۱۲۵۸ م، چند ماه پس از بوستان، به پایان برد؛ بیشتر آن نثر است و شعرهای کوتاه در میان آن نشسته است.', cite: ['iranica-golestan', 'iranica-bustan', 'britannica'] },
      { text: 'کتاب به اتابک ابوبکر بن سعد، پسرش سعد و وزیر فخرالدین ابوبکر بن ابی‌نصر پیشکش شده است. گلستان هشت باب دارد، به شمار هشت در بهشت: سیرت پادشاهان، اخلاق درویشان، فضیلت قناعت، فواید خاموشی، عشق و جوانی، ضعف و پیری، تأثیر تربیت، و آداب صحبت.', cite: ['iranica-golestan', 'ganjoor-golestan'] },
      { text: '«سعدی»ای که در بیش از چهل حکایت از زبان خود سخن می‌گوید بیشتر شخصیتی در داستان است تا گزارشی از زندگی نویسنده. زبان کتاب را «سهل ممتنع» خوانده‌اند: ساده به چشم می‌آید و تقلیدش دشوار است.', cite: ['iranica-golestan'] },
      { text: 'شعر «بنی‌آدم اعضای یکدیگرند» از حکایت دهم باب اول گلستان است؛ همین شعر بر فرشی آمده که در سال ۲۰۰۵ در ساختمان سازمان ملل در نیویورک نصب شد.', cite: ['wiki-saadi', 'ganjoor-golestan'] },
    ],
    ourView: [
      'گلستان کتابی است که می‌شود هر صفحه‌اش را جدا خواند: هر حکایت چند سطر نثر است و یکی دو بیت که حرف را می‌بندد. پیشنهاد ما: با دیباچه آغاز کنید، که در آن سعدی می‌گوید چرا این کتاب را نوشت، و سپس از هر بابی که خواستید. معنی هر بند و هر بیت زیر خودش آمده است.',
    ],
  },
}

export const about: readonly AboutSection[] = [
  {
    id: 'name',
    title: 'نام و زادروز',
    paras: [
      { text: `نامش را ${SAADI_NAME.replace(' سعدی شیرازی', '')} نوشته‌اند و در شیراز به دنیا آمد. بیشتر پژوهشگران زادنش را حدود ۶۰۶ ق / ۱۲۰۹–۱۲۱۰ م می‌دانند؛ این تاریخ را از اشارهٔ گلستان به پنجاه‌سالگی سراینده به دست آورده‌اند، اما عباس اقبال آن را میان ۶۱۰ و ۶۱۵ ق (۱۲۱۳ تا ۱۲۱۸ م) می‌داند و بریتانیکا هم حدود ۱۲۱۳ م آورده است.`, cite: ['iranica-life', 'iranica-golestan', 'britannica'] },
      { text: 'تخلص «سعدی» را از نام اتابک سعد بن زنگی، فرمانروای فارس، گرفته است.', cite: ['britannica'] },
    ],
  },
  {
    id: 'youth',
    title: 'کودکی و بغداد',
    paras: [
      { text: 'پدرش در کودکی او درگذشت و نخستین آموزگارش همو بود. سعدی حدود ۶۲۰ ق / ۱۲۲۳–۱۲۲۴ م برای درس به بغداد رفت و در نظامیهٔ بغداد درس خواند.', cite: ['iranica-life', 'britannica'] },
    ],
  },
  {
    id: 'travels',
    title: 'سفرها',
    paras: [
      { text: 'بریتانیکا از سفرهای او به آناتولی، شام، مصر و عراق یاد می‌کند و می‌گوید سفر به هند و آسیای میانه تأیید نشده و داستان اسارتش به دست فرنگیان در طرابلس «بسیار مشکوک» است. همایون کاتوزیان سفر به عراق، شام، فلسطین و عربستان را محتمل و سفر به خراسان، هند و کاشغر را بعید می‌داند.', cite: ['britannica', 'iranica-life'] },
      { text: 'بسیاری از حکایت‌هایی که سعدی از زبان خود و از سفرهایش می‌گوید داستانی است و نمی‌شود آن‌ها را زندگی‌نامه خواند.', cite: ['iranica-life', 'iranica-golestan'] },
    ],
  },
  {
    id: 'works',
    title: 'بازگشت به شیراز و آثار',
    paras: [
      { text: 'سعدی بوستان را در ۶۵۵ ق / ۱۲۵۷ م و گلستان را در ۶۵۶ ق / ۱۲۵۸ م به پایان برد و هر دو را به اتابک ابوبکر بن سعد زنگی پیشکش کرد. غزل‌هایش در زمان زندگی‌اش نامدار بود، هرچند در ۱۲۵۷ م گله کرده است که در شیراز قدرش را نمی‌دانند.', cite: ['iranica-bustan', 'iranica-golestan'] },
      { text: 'بر ویرانی بغداد به دست مغولان در ۱۲۵۸ م مرثیه‌ای سرود و در پایان گلستان هم به این واقعه اشاره‌ای هست. جز این‌ها، شعر عربی و شش رساله به نثر هم به او نسبت داده‌اند.', cite: ['britannica', 'iranica-golestan'] },
    ],
  },
  {
    id: 'death',
    title: 'درگذشت',
    paras: [
      { text: 'سال درگذشت او را منابع کهن گوناگون آورده‌اند، میان ۱۲۹۱ و ۱۲۹۹ م. سعید نفیسی ۲۷ ذی‌الحجهٔ ۶۹۱ ق / ۹ دسامبر ۱۲۹۲ م را درست می‌داند و دولتشاه و جامی شوال ۶۹۱ را آورده‌اند؛ بریتانیکا ۹ دسامبر ۱۲۹۱ را نوشته است.', cite: ['iranica-life', 'britannica'] },
    ],
  },
  {
    id: 'tomb',
    title: 'سعدیه',
    paras: [
      { text: 'سعدی در خانقاه خود در شیراز به خاک سپرده شد. در سدهٔ هفتم شمس‌الدین جوینی، وزیر اباقاخان، بر گورش بنایی ساخت که در سدهٔ یازدهم هجری (هفدهم میلادی) ویران شد؛ کریم‌خان زند بنایی دوطبقه از آجر و گچ با دو اتاق به جای آن ساخت.', cite: ['wiki-tomb'] },
      { text: 'بنای کنونی را محسن فروغی طراحی کرد و میان ۱۹۵۰ و ۱۹۵۲ م ساخته شد، با الهام از چهل‌ستون: بیرونش مکعب و درونش هشت‌ضلعی است با گنبدی فیروزه‌ای، و بر دیوارهای گرد آرامگاه هفت بیت از شعر سعدی نوشته شده است. آرامگاه در ۹ دسامبر ۱۹۷۵ در فهرست آثار ملی ایران ثبت شد.', cite: ['wiki-tomb'] },
    ],
  },
  {
    id: 'west',
    title: 'سعدی در غرب',
    paras: [
      { text: 'آندره دو ریه نخستین اروپایی بود که سعدی را با ترجمهٔ بخشی از گلستان به فرانسوی (۱۶۳۴) به غرب شناساند و آدام اولئاریوس در ۱۶۵۴ ترجمهٔ کامل بوستان و گلستان را به آلمانی منتشر کرد.', cite: ['wiki-saadi'] },
      { text: 'دیوان غربی‌شرقی گوته از سعدی اثر پذیرفته است، گلستان بر حکایت‌های لافونتن اثر گذاشت، و ولتر خوش داشت دوستانش او را «سعدی» بخوانند.', cite: ['wiki-saadi'] },
    ],
  },
]

export const ABOUT_VIEW: readonly string[] = [
  'سعدی را «استاد سخن» می‌خوانند و دلیلش در همین دو کتاب پیداست: جمله‌هایی که هفتصد سال است در زبان مردم مانده‌اند. ما کوشیده‌ایم در این صفحه فقط آنچه منابع می‌گویند بیاوریم و جایی که منابع هم‌داستان نیستند، اختلافشان را نشان دهیم.',
]
