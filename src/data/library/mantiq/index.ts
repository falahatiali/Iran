/** Content of the Mantiq al-Tayr arrival page. Every verse points at its place in this site's full text
 * (./text, verbatim from Ganjoor); the facts about Attar and the book come from Encyclopaedia Iranica,
 * "ʿAṭṭār, Farīd-al-Dīn" (B. Reinert). */
import { MANTIQ_PATH } from './sections'

export { MANTIQ_PATH }

const GANJOOR = 'https://ganjoor.net/attar/manteghotteyr'
const IRANICA = 'https://www.iranicaonline.org/articles/attar-farid-al-din-poet'

export interface Verse {
  /** the two hemistichs, exactly as in the text */
  lines: readonly [string, string]
  /** where the bayt stands in this site's text: section slug, Ganjoor part id, bayt number */
  section: string
  part: number
  n: number
  where: string
}

export interface Valley {
  n: number
  name: string
  /** the hemistich of the hoopoe's list that names this valley */
  line: string
  /** this site's section on the valley */
  slug: string
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

export const mantiq = {
  title: 'منطق‌الطیر',
  author: 'فریدالدین عطار نیشابوری',
  kicker: 'عرفان · مثنوی',
  description:
    'منطق‌الطیر عطار نیشابوری: سفر مرغان به رهبری هدهد در جست‌وجوی سیمرغ، از گذرگاه هفت وادی. متن کامل کتاب، بخش به بخش، با معنی بیت‌ها.',
  facts: [
    { label: 'زادروز', value: 'حدود ۵۴۰ ق، نیشابور' },
    { label: 'درگذشت', value: '۶۱۸ ق، نیشابور' },
    { label: 'پایان سرایش', value: '۵۷۳ ق، به گواهی بیتی که در همهٔ دست‌نویس‌ها نیست' },
  ],
  opening: {
    lines: ['آفرین جان‌آفرین پاک را', 'آن که جان بخشید و ایمان خاک را'],
    section: 'tawhid', part: 11859, n: 1,
    where: 'در توحید باری تعالی، بیت ۱',
  } satisfies Verse,
  intro: [
    'منطق‌الطیر، که عطار خود آن را «مقامات طیور» هم خوانده، داستانی است در قالب مثنوی با یک قصهٔ قاب: مرغان جهان گرد می‌آیند تا پادشاهی برای خود برگزینند و هدهد، که در قرآن پیک سلیمان است، آنان را به سوی سیمرغ فرا می‌خواند.',
    'به گفتهٔ دانشنامهٔ ایرانیکا، عطار این قاب را از رسالة‌الطیر غزالی گرفت و آن را گسترد و ژرفا بخشید. مرغان در این کتاب گروهی بی‌نام نیستند: هر یک جداگانه پیش می‌آید و دشواری خود را با راه در میان می‌گذارد، و عطار در میانهٔ داستان، حکایت‌های بسیار، از جمله داستان شیخ صنعان، را می‌گنجاند.',
  ],
  sevenValleys: {
    intro: {
      lines: ['گفت ما را هفت وادی در ره است', 'چون گذشتی هفت وادی، درگه است'],
      section: 'ozr-10', part: 12002, n: 9,
      where: 'عذر آوردن مرغان، بخش ۱۰',
    } satisfies Verse,
    valleys: [
      { n: 1, name: 'طلب', line: 'هست وادی طلب آغاز کار', slug: 'talab' },
      { n: 2, name: 'عشق', line: 'وادی عشق است از آن پس، بی‌کنار', slug: 'eshgh' },
      { n: 3, name: 'معرفت', line: 'پس سیم وادیست آن معرفت', slug: 'marefat' },
      { n: 4, name: 'استغنا', line: 'پس چهارم وادی استغنی صفت', slug: 'esteghna' },
      { n: 5, name: 'توحید', line: 'هست پنجم وادی توحید پاک', slug: 'towhid' },
      { n: 6, name: 'حیرت', line: 'پس ششم وادی حیرت صعب ناک', slug: 'heyrat' },
      { n: 7, name: 'فقر و فنا', line: 'هفتمین وادی فقرست و فنا', slug: 'faghr' },
    ] satisfies Valley[],
    listSource: { section: 'ozr-10', part: 12002, n: 13, where: 'عذر آوردن مرغان، بخش ۱۰' },
  },
  story: [
    {
      title: 'انجمن مرغان',
      text: 'مرغان جهان گرد هم می‌آیند و می‌گویند هیچ شهری بی‌شهریار نیست؛ پس باید پادشاهی بجویند.',
      verse: { lines: ['چون بود کاقلیم ما را شاه نیست', 'بیش از این بی شاه بودن راه نیست'], section: 'majma', part: 11875, n: 68, where: 'مجمع مرغان' },
    },
    {
      title: 'هدهد و نشانی سیمرغ',
      text: 'هدهد پیش می‌آید و از پادشاهی می‌گوید که در پس کوه قاف است: سیمرغ، سلطان مرغان.',
      verse: { lines: ['هست ما را پادشاهی بی خلاف', 'در پس کوهی که هست آن کوه قاف'], section: 'majma', part: 11875, n: 97, where: 'مجمع مرغان' },
    },
    {
      title: 'گذر از هفت وادی',
      text: 'راه دراز است و بسیاری در میانه می‌مانند؛ از هزاران مرغ، تنها سی مرغ به درگاه می‌رسند.',
      verse: { lines: ['مدتی شد تا درین راه آمدیم', 'از هزاران، سی به درگاه آمدیم'], section: 'si-morgh', part: 12051, n: 41, where: 'سی‌مرغ در پیشگاه سیمرغ' },
    },
    {
      title: 'سی‌مرغ و سیمرغ',
      text: 'در پایان، آن سی مرغ در سیمرغ می‌نگرند و خود را می‌بینند: آنچه می‌جستند، در خودشان بود.',
      verse: { lines: ['چون نگه کردند آن سی مرغ زود', 'بی‌شک این سی مرغ آن سیمرغ بود'], section: 'si-morgh', part: 12054, n: 33, where: 'حکایت خطی که برادران یوسف هنگام فروش او دادند' },
    },
  ] satisfies Step[],
  /** the birds that come forward one by one, each linked to its section */
  birds: [
    { name: 'هدهد', slug: 'majma', guide: true },
    { name: 'بلبل', slug: 'bolbol' },
    { name: 'طوطی', slug: 'tooti' },
    { name: 'طاووس', slug: 'tavoos' },
    { name: 'بط', slug: 'bat' },
    { name: 'کبک', slug: 'kabk' },
    { name: 'همای', slug: 'homay' },
    { name: 'باز', slug: 'baz' },
    { name: 'بوتیمار', slug: 'bootimar' },
    { name: 'کوف', slug: 'koof' },
    { name: 'صعوه', slug: 'saveh' },
  ] as readonly { name: string; slug: string; guide?: boolean }[],
  sources: [
    { id: 'ganjoor', title: 'گنجور: عطار، منطق‌الطیر (منبع متن)', url: GANJOOR },
    { id: 'iranica', title: 'Encyclopaedia Iranica, “ʿAṭṭār, Farīd-al-Dīn” (Benedikt Reinert)', url: IRANICA },
  ] satisfies Source[],
}
