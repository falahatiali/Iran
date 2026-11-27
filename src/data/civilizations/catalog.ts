/** The catalog of civilizations: the light list the home box, the landing grid, the map and the chronology read.
 * Full pages live in ./content/<slug>.ts and are loaded on demand (see ./repository.ts). Ordered by start date. */
import type { CivSummary } from './types'

export const CATALOG: readonly CivSummary[] = [
  {
    slug: 'ganj-dareh', name: 'گنج‌دره', latin: 'Ganj Dareh', era: 'neolithic', span: [-8200, -7900], spanLabel: 'حدود ۱۰٬۲۰۰ سال پیش',
    region: 'هرسین، کرمانشاه', coord: [47.476, 34.272], accent: '#8fbf6a', emblem: 'goat',
    tagline: 'کهن‌ترین گواه اهلی‌شدن بز در جهان، در دل زاگرس.',
  },
  {
    slug: 'sialk', name: 'تپه سیلک', latin: 'Tepe Sialk', era: 'chalcolithic', span: [-6000, -700], spanLabel: 'حدود ۶۰۰۰ پ.م. تا هزارهٔ یکم پ.م.',
    region: 'کاشان، اصفهان', coord: [51.405, 33.969], accent: '#e0a458', emblem: 'pot',
    tagline: 'دو تپه و دو گورستان در کاشان؛ سفال‌هایی با نقش بز کوهی و سکویی پلکانی.',
  },
  {
    slug: 'susa', name: 'شوش', latin: 'Susa', era: 'elamite', span: [-4200, 1250], spanLabel: 'پایان هزارهٔ پنجم پ.م. تا سدهٔ سیزدهم م.',
    region: 'شوش، خوزستان', coord: [48.257, 32.19], accent: '#2ec4b6', emblem: 'column',
    tagline: 'بیست‌وهفت لایه شهر روی هم؛ پایتخت ایلام و هخامنشیان.',
  },
  {
    slug: 'shahr-e-sukhteh', name: 'شهر سوخته', latin: 'Shahr-e Sukhteh', era: 'bronze', span: [-3200, -1800], spanLabel: 'حدود ۳۲۰۰ تا ۱۸۰۰ پ.م.',
    region: 'زابل، سیستان و بلوچستان', coord: [61.327, 30.595], accent: '#e76f51', emblem: 'eye',
    tagline: 'شهری بر چهارراه عصر مفرغ؛ چشم مصنوعی، صفحهٔ بازی و هزاران گور.',
  },
  {
    slug: 'jiroft', name: 'جیرفت و کنار صندل', latin: 'Jiroft / Konar Sandal', era: 'bronze', span: [-2500, -2000], spanLabel: 'نیمهٔ دوم هزارهٔ سوم پ.م.',
    region: 'دره هلیل‌رود، کرمان', coord: [57.8, 28.45], accent: '#5fa8d3', emblem: 'snake',
    tagline: 'ظرف‌های کلریتی پرنقش، ارگی بزرگ کنار هلیل‌رود و بحثی که هنوز باز است.',
  },
  {
    slug: 'chogha-zanbil', name: 'چغازنبیل', latin: 'Chogha Zanbil', era: 'elamite', span: [-1250, -1000], spanLabel: 'حدود ۱۲۵۰ پ.م.',
    region: 'شوش، خوزستان', coord: [48.522, 32.009], accent: '#c9a227', emblem: 'ziggurat',
    tagline: 'شهر مقدس اونتاش‌ناپیریشا و بزرگ‌ترین زیگورات بیرون از میان‌رودان.',
  },
  {
    slug: 'ali-kosh', name: 'علی‌کش', latin: 'Ali Kosh', era: 'neolithic', span: [-7800, -6100], spanLabel: 'هزارهٔ هشتم تا حدود ۶۱۰۰ پ.م.',
    region: 'دشت دهلران، ایلام', coord: [47.33, 32.56], accent: '#a3c45a', emblem: 'wheat',
    tagline: 'روستایی دوهزارساله در دشت دهلران که گذار از شکار به کشاورزی و دامداری را نشان می‌دهد.',
  },
  {
    slug: 'chogha-mish', name: 'چغامیش', latin: 'Chogha Mish', era: 'chalcolithic', span: [-6000, -3200], spanLabel: 'هزارهٔ ششم تا چهارم پ.م.',
    region: 'میان دزفول و شوشتر، خوزستان', coord: [48.56, 32.22], accent: '#d98f4e', emblem: 'seal',
    tagline: 'بزرگ‌ترین محوطهٔ پیش از تاریخ دشت شوشان؛ از سفال منقوش تا مهرهای استوانه‌ای.',
  },
  {
    slug: 'tepe-hissar', name: 'تپه حصار', latin: 'Tepe Hissar', era: 'chalcolithic', span: [-5000, -1900], spanLabel: 'پس از ۵۰۰۰ تا حدود ۱۹۰۰ پ.م.',
    region: 'دامغان، سمنان', coord: [54.38, 36.15], accent: '#b5838d', emblem: 'pot',
    tagline: 'سفالگران و فلزکاران دامغان؛ از سفال منقوش تا ظرف خاکستری و کوره‌های ذوب.',
  },
  {
    slug: 'godin-tepe', name: 'گودین تپه', latin: 'Godin Tepe', era: 'chalcolithic', span: [-5000, -500], spanLabel: 'حدود ۵۰۰۰ تا ۵۰۰ پ.م.',
    region: 'دره کنگاور، کرمانشاه', coord: [48.067, 34.517], accent: '#e9c46a', emblem: 'vessel',
    tagline: 'پاسگاهی بر جادهٔ خراسان بزرگ و از نخستین جاهایی که شیمی، ردّ آبجو و شراب کهن را در آن یافت.',
  },
  {
    slug: 'tepe-yahya', name: 'تپه یحیی', latin: 'Tepe Yahya', era: 'bronze', span: [-5500, 300], spanLabel: 'حدود ۵۵۰۰ پ.م. تا ۳۰۰ م.، با وقفه',
    region: 'دره صوغان، کرمان', coord: [56.867, 28.333], accent: '#7fb7be', emblem: 'tablet',
    tagline: 'تنها توالی بلند جنوب شرق ایران؛ لوح‌های آغاز ایلامی و کارگاه ظرف‌های کلریتی.',
  },
  {
    slug: 'shahdad', name: 'شهداد', latin: 'Shahdad', era: 'bronze', span: [-4500, -2000], spanLabel: 'از هزارهٔ پنجم تا حدود ۲۰۰۰ پ.م.',
    region: 'لبهٔ غربی دشت لوت، کرمان', coord: [57.75, 30.35], accent: '#f4a261', emblem: 'flag',
    tagline: 'شهری در لبهٔ کویر لوت؛ درفش فلزی، پیکره‌های گلی و تپه‌ای از سرباره.',
  },
  {
    slug: 'anshan', name: 'انشان (تل ملیان)', latin: 'Anshan / Tal-e Malyan', era: 'elamite', span: [-3400, -550], spanLabel: 'حدود ۳۴۰۰ تا سدهٔ ششم پ.م.',
    region: 'دشت بیضا، فارس', coord: [52.41, 30.01], accent: '#48cae4', emblem: 'bull',
    tagline: 'پایتخت کوهستانی ایلام، خاستگاه خط آغاز ایلامی و سرزمینی که کوروش خود را شاه آن خواند.',
  },
  {
    slug: 'haft-tepe', name: 'هفت‌تپه', latin: 'Haft Tepe (Kabnak?)', era: 'elamite', span: [-1500, -1350], spanLabel: 'میانهٔ هزارهٔ دوم پ.م.',
    region: 'جنوب شرقی شوش، خوزستان', coord: [48.33, 32.08], accent: '#80ced7', emblem: 'sun',
    tagline: 'شهر تپتی‌اهر؛ آرامگاه طاق‌دار، کارگاه هنرمندان و لوح‌هایی که دورانی تاریک را روشن کرد.',
  },
  {
    slug: 'marlik', name: 'مارلیک', latin: 'Marlik', era: 'iron', span: [-1400, -900], spanLabel: 'سدهٔ چهاردهم تا دهم پ.م.',
    region: 'دره گوهررود، رودبار، گیلان', coord: [49.47, 36.88], accent: '#ffd166', emblem: 'griffin',
    tagline: 'گورستان نخبگان با بیش از ۲۵٬۰۰۰ شیء؛ جام‌های زرین و پیکرک‌های جانوری.',
  },
  {
    slug: 'hasanlu', name: 'حسنلو', latin: 'Hasanlu', era: 'iron', span: [-1100, -800], spanLabel: 'پایان هزارهٔ دوم تا حدود ۸۰۰ پ.م.',
    region: 'دشت سلدوز، آذربایجان غربی', coord: [45.217, 37.0], accent: '#c77dff', emblem: 'bowl',
    tagline: 'ارگی که در یک یورش ناگهانی سوخت و جام زرین و هزاران شیء را برای ما نگه داشت.',
  },
  {
    slug: 'mannea', name: 'ماننا و زیویه', latin: 'Mannea / Ziwiye', era: 'iron', span: [-850, -600], spanLabel: 'سدهٔ نهم تا هفتم پ.م.',
    region: 'جنوب دریاچه ارومیه، پیرامون سقز', coord: [46.47, 36.2], accent: '#9d8df1', emblem: 'lion',
    tagline: 'پادشاهی میان آشور و اورارتو، و «گنجینهٔ زیویه» که بیش از آن‌که کاوش شود غارت شد.',
  },
  {
    slug: 'hegmataneh', name: 'هگمتانه و مادها', latin: 'Hegmataneh / Ecbatana', era: 'iron', span: [-700, 1000], spanLabel: 'از اواخر سدهٔ هشتم پ.م. (به روایت هرودوت)',
    region: 'همدان', coord: [48.517, 34.8], accent: '#b388eb', emblem: 'fortress',
    tagline: 'پایتخت مادها با هفت بارو در روایت هرودوت، و تابستان‌گاه شاهان هخامنشی.',
  },
]

export const civSummary = (slug: string) => CATALOG.find((c) => c.slug === slug)

export function summaryOf(slug: string): CivSummary {
  const s = civSummary(slug)
  if (!s) throw new Error(`unknown civilization: ${slug}`)
  return s
}

export const civPath = (slug: string) => `/civilizations/${slug}`
