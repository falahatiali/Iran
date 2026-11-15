/** Content of the Mantiq al-Tayr arrival page. Every verse is copied from Ganjoor (linked per verse);
 * the facts about Attar and the book come from Encyclopaedia Iranica, "ʿAṭṭār, Farīd-al-Dīn" (B. Reinert).
 * This is an introduction: the full text of the book comes in a later step. */

const GANJOOR = 'https://ganjoor.net/attar/manteghotteyr'
const IRANICA = 'https://www.iranicaonline.org/articles/attar-farid-al-din-poet'

export interface Verse {
  /** the two hemistichs, exactly as on Ganjoor */
  lines: readonly [string, string]
  /** the Ganjoor page and verse numbers, for the citation */
  url: string
  where: string
}

export interface Valley {
  n: number
  name: string
  /** the hemistich of the hoopoe's list that names this valley */
  line: string
  /** Ganjoor's section on this valley */
  url: string
}

export interface Step {
  title: string
  text: string
  verse: Verse
}

export interface Source {
  id: string
  title: string
  url: string
}

export const MANTIQ_PATH = '/library/mantiq-al-tayr'

export const mantiq = {
  title: 'منطق‌الطیر',
  author: 'فریدالدین عطار نیشابوری',
  kicker: 'عرفان · مثنوی',
  description:
    'منطق‌الطیر عطار نیشابوری: سفر مرغان به رهبری هدهد در جست‌وجوی سیمرغ، از گذرگاه هفت وادی. درآمدی بر کتاب با بیت‌های اصیل از گنجور.',
  facts: [
    { label: 'زادروز', value: 'حدود ۵۴۰ ق، نیشابور' },
    { label: 'درگذشت', value: '۶۱۸ ق، نیشابور' },
    { label: 'پایان سرایش', value: '۵۷۳ ق، به گواهی بیتی که در همهٔ دست‌نویس‌ها نیست' },
  ],
  opening: {
    lines: ['آفرین جان‌آفرین پاک را', 'آن که جان بخشید و ایمان خاک را'],
    url: `${GANJOOR}/touhid/sh1`,
    where: 'فی التوحید باری تعالی، بیت ۱',
  } satisfies Verse,
  intro: [
    'منطق‌الطیر، که عطار خود آن را «مقامات طیور» هم خوانده، داستانی است در قالب مثنوی با یک قصهٔ قاب: مرغان جهان گرد می‌آیند تا پادشاهی برای خود برگزینند و هدهد، که در قرآن پیک سلیمان است، آنان را به سوی سیمرغ فرا می‌خواند.',
    'به گفتهٔ دانشنامهٔ ایرانیکا، عطار این قاب را از رسالة‌الطیر غزالی گرفت و آن را گسترد و ژرفا بخشید. مرغان در این کتاب گروهی بی‌نام نیستند: هر یک جداگانه پیش می‌آید و دشواری خود را با راه در میان می‌گذارد، و عطار در میانهٔ داستان، حکایت‌های بسیار، از جمله داستان شیخ صنعان، را می‌گنجاند.',
  ],
  sevenValleys: {
    intro: {
      lines: ['گفت ما را هفت وادی در ره است', 'چون گذشتی هفت وادی، درگه است'],
      url: `${GANJOOR}/ozr-morghan/sh98`,
      where: 'عذر آوردن مرغان، بیت ۹',
    } satisfies Verse,
    valleys: [
      { n: 1, name: 'طلب', line: 'هست وادی طلب آغاز کار', url: `${GANJOOR}/vadi-talab` },
      { n: 2, name: 'عشق', line: 'وادی عشق است از آن پس، بی‌کنار', url: `${GANJOOR}/vadi-eshgh` },
      { n: 3, name: 'معرفت', line: 'پس سیم وادیست آن معرفت', url: `${GANJOOR}/vadi-marefat` },
      { n: 4, name: 'استغنا', line: 'پس چهارم وادی استغنی صفت', url: `${GANJOOR}/vadi-esteghna` },
      { n: 5, name: 'توحید', line: 'هست پنجم وادی توحید پاک', url: `${GANJOOR}/vad-towhid` },
      { n: 6, name: 'حیرت', line: 'پس ششم وادی حیرت صعب ناک', url: `${GANJOOR}/vadi-heyrat` },
      { n: 7, name: 'فقر و فنا', line: 'هفتمین وادی فقرست و فنا', url: `${GANJOOR}/vadi-faghr` },
    ] satisfies Valley[],
    listSource: { url: `${GANJOOR}/ozr-morghan/sh98`, where: 'عذر آوردن مرغان، بیت‌های ۱۳ تا ۱۶' },
  },
  story: [
    {
      title: 'انجمن مرغان',
      text: 'مرغان جهان گرد هم می‌آیند و می‌گویند هیچ شهری بی‌شهریار نیست؛ پس باید پادشاهی بجویند.',
      verse: { lines: ['چون بود کاقلیم ما را شاه نیست', 'بیش از این بی شاه بودن راه نیست'], url: `${GANJOOR}/aghazm/sh1`, where: 'مجمع مرغان، بیت ۶۸' },
    },
    {
      title: 'هدهد و نشانی سیمرغ',
      text: 'هدهد پیش می‌آید و از پادشاهی می‌گوید که در پس کوه قاف است: سیمرغ، سلطان مرغان.',
      verse: { lines: ['هست ما را پادشاهی بی خلاف', 'در پس کوهی که هست آن کوه قاف'], url: `${GANJOOR}/aghazm/sh1`, where: 'مجمع مرغان، بیت ۹۷' },
    },
    {
      title: 'گذر از هفت وادی',
      text: 'راه دراز است و بسیاری در میانه می‌مانند؛ از هزاران مرغ، تنها سی مرغ به درگاه می‌رسند.',
      verse: { lines: ['مدتی شد تا درین راه آمدیم', 'از هزاران، سی به درگاه آمدیم'], url: `${GANJOOR}/30-morgh/sh1`, where: 'سی‌مرغ در پیشگاه سیمرغ، بیت ۴۱' },
    },
    {
      title: 'سی‌مرغ و سیمرغ',
      text: 'در پایان، آن سی مرغ در سیمرغ می‌نگرند و خود را می‌بینند: آنچه می‌جستند، در خودشان بود.',
      verse: { lines: ['چون نگه کردند آن سی مرغ زود', 'بی‌شک این سی مرغ آن سیمرغ بود'], url: `${GANJOOR}/30-morgh/sh4`, where: 'حکایت خطی که برادران یوسف هنگام فروش او دادند، بیت ۳۳' },
    },
  ] satisfies Step[],
  /** the birds that come forward one by one, as Ganjoor titles their sections */
  birds: [
    { name: 'هدهد', url: `${GANJOOR}/aghazm/sh1`, guide: true },
    { name: 'بلبل', url: `${GANJOOR}/bolbol` },
    { name: 'طوطی', url: `${GANJOOR}/2t` },
    { name: 'طاووس', url: `${GANJOOR}/tavoos` },
    { name: 'بط', url: `${GANJOOR}/bat` },
    { name: 'کبک', url: `${GANJOOR}/kabk` },
    { name: 'همای', url: `${GANJOOR}/homay` },
    { name: 'باز', url: `${GANJOOR}/baaz` },
    { name: 'بوتیمار', url: `${GANJOOR}/bootimar` },
    { name: 'کوف', url: `${GANJOOR}/koof` },
    { name: 'صعوه', url: `${GANJOOR}/saawe` },
  ] as readonly { name: string; url: string; guide?: boolean }[],
  sources: [
    { id: 'ganjoor', title: 'گنجور: عطار، منطق‌الطیر (متن کامل)', url: GANJOOR },
    { id: 'iranica', title: 'Encyclopaedia Iranica, “ʿAṭṭār, Farīd-al-Dīn” (Benedikt Reinert)', url: IRANICA },
  ] satisfies Source[],
}
