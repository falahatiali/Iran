import type { CatalogEntry, EraId, EraInfo, SoonStory, Story } from './types'
import { keyumars } from './stories/keyumars'
import { hushang } from './stories/hushang'
import { tahmuras } from './stories/tahmuras'
import { jamshid } from './stories/jamshid'
import { zahhak } from './stories/zahhak'
import { fereydun } from './stories/fereydun'
import { iraj } from './stories/iraj'
import { manuchehr } from './stories/manuchehr'
import { zal } from './stories/zal'
import { rostamBirth } from './stories/rostam-birth'
import { haftKhan } from './stories/haft-khan'
import { sohrab } from './stories/sohrab'
import { siyavash } from './stories/siyavash'
import { kayKhosrow } from './stories/kay-khosrow'
import { bizhanManizheh } from './stories/bizhan-manizheh'
import { rostamEsfandiar } from './stories/rostam-esfandiar'
import { rostamShaghad } from './stories/rostam-shaghad'
import { bahramGur } from './stories/bahram-gur'
import { anushirvan } from './stories/anushirvan'
import { photoById } from './photos'
import { shahnamehSources } from './sources'
export { getCommentary, commentaryIsComplete } from './commentary'
export { loadStoryPoem, POEM_SLUGS, noteKey, verseAnchor } from './poems/load'
export type { StoryPoemText } from './poems/types'

export type { CatalogEntry, Couplet, EraId, EraInfo, Photo, SoonStory, Story } from './types'
export { photos, photoById } from './photos'
export { shahnamehSources, sourceById } from './sources'

export const readyStories: Story[] = [
  keyumars, hushang, tahmuras, jamshid, zahhak, fereydun, iraj,
  manuchehr, zal, rostamBirth, haftKhan, sohrab, siyavash,
  kayKhosrow, bizhanManizheh, rostamEsfandiar, rostamShaghad, bahramGur, anushirvan,
]

export const comingSoon: SoonStory[] = []

export const catalog: CatalogEntry[] = [...readyStories, ...comingSoon].sort((a, b) => a.order - b.order)

export const eras: EraInfo[] = [
  {
    id: 'pishdadian',
    title: 'پیشدادیان',
    titleEn: 'The Pishdadian age',
    kicker: 'عصر اساطیر',
    blurb: 'از کیومرث تا ایرج: نخستین شاهان، کشف آتش، نوروز، شب ضحاک و خیزش کاوه. این بخش اسطوره است، نه سالنامهٔ باستان‌شناسی.',
    blurbEn: 'From Keyumars to Iraj: the first kings, the finding of fire, Nowruz, Zahhak’s night and Kaveh’s rising. This is myth, not an archaeological chronicle.',
  },
  {
    id: 'kayanian',
    title: 'کیانیان',
    titleEn: 'The Kayanian age',
    kicker: 'عصر پهلوانان',
    blurb: 'از منوچهر تا مرگ رستم: روزگار پهلوانان، سیمرغ، هفت‌خوان، کین کیخسرو و تراژدی‌های بزرگ.',
    blurbEn: 'From Manuchehr to the death of Rostam: the heroic age of the Simorgh, the seven labours, Kay Khosrow’s revenge, and the great tragedies.',
  },
  {
    id: 'sasanian',
    title: 'ساسانیان',
    titleEn: 'The historical age',
    kicker: 'نزدیک به تاریخ',
    blurb: 'فردوسی در پایان کتاب به پادشاهی‌هایی می‌رسد که با حافظهٔ تاریخی ایران نزدیک‌ترند. بهرام گور و نوشین‌روان در این بخش‌اند.',
    blurbEn: 'Towards the end Ferdowsi reaches reigns closer to Iran’s historical memory, including Bahram Gur and Anushirvan.',
  },
]

export const landing = {
  title: 'شاهنامه',
  titleEn: 'Shahnameh',
  kicker: 'کتاب شاهان',
  kickerEn: 'The Book of Kings',
  description: 'شاهنامهٔ فردوسی را از آغاز، با روایت کودک‌پسند، بیت‌های اصیل و نگاه ما بخوانید؛ در فضایی جدا از بخش تاریخ، اما در همین سایت.',
  descriptionEn: 'Read Ferdowsi’s Shahnameh from the beginning: family-friendly retellings, authentic verses, and the site’s own reading — a world apart from the history pages, still inside iiraan.com.',
  intro: [
    'شاهنامه کتابی است که فردوسی در اواخر سدهٔ چهارم و آغاز سدهٔ پنجم هجری قمری سرود و معمولاً پایان کار را حدود سال ۴۰۰ قمری، برابر با ۱۰۱۰ میلادی، می‌دانند. نزدیک به پنجاه هزار بیت است و از آغاز پادشاهی تا فرجام ساسانیان را به نظم کشیده است.',
    'ما این بخش را جدا از روایت تاریخی سایت ساخته‌ایم. شاهنامه تاریخ هخامنشی یا ساسانی به معنی سند باستان‌شناختی نیست؛ حماسه است. با این همه، بیت‌هایی که می‌خوانید از متن گنجور است و بر پایهٔ چاپ مسکو نقل می‌شود. چیزی از خود به نام فردوسی نمی‌سازیم.',
    'داستان‌ها به همان ترتیبی می‌آیند که در کتاب آمده‌اند. برای هر داستان یک بازنویسی روشن برای خانواده، چند بیت دقیق، تالار شخصیت‌ها، یک پرسش کوچک و بخش «نگاه ما» هست. نگاه ما تفسیر این سایت است و از متن جدا نشان داده می‌شود.',
  ],
  introEn: [
    'Ferdowsi completed the Shahnameh around 400 AH / 1010 CE: some fifty thousand couplets, from the first mythical kings to the last Sasanians.',
    'This wing of the site is not a history dossier. The Shahnameh is an epic. The verses we quote come from Ganjoor’s text of the Moscow edition. We do not invent lines in Ferdowsi’s name.',
    'The full retellings are in Persian, told from the beginning in order, with a clearly labelled commentary of our own. English pages here are a doorway into that garden.',
  ],
  how: [
    'روایت ساده را با صدای بلند برای کودک بخوانید؛ بیت‌ها را آرام و جدا.',
    'هر جا نوشتیم «نگاه ما» یا «این برداشت ماست»، نظر این سایت است نه سخن فردوسی.',
    'تصویرها نگاره‌های کهن نسخه‌های شاهنامه‌اند، نه تصویر ساختگی.',
  ],
}

export function isStory(entry: CatalogEntry): entry is Story {
  return entry.status === 'ready'
}

export function getEntry(slug: string): CatalogEntry | undefined {
  return catalog.find((e) => e.slug === slug)
}

export function getStory(slug: string): Story | undefined {
  return readyStories.find((s) => s.slug === slug)
}

export function storiesByEra(era: EraId): CatalogEntry[] {
  return catalog.filter((e) => e.era === era)
}

export function neighbors(slug: string): { prev?: CatalogEntry; next?: CatalogEntry } {
  const i = catalog.findIndex((e) => e.slug === slug)
  if (i < 0) return {}
  return { prev: catalog[i - 1], next: catalog[i + 1] }
}

export function storyPhoto(story: Pick<Story, 'heroId'> | Pick<SoonStory, 'heroId'>) {
  return story.heroId ? photoById[story.heroId] : undefined
}

export function sourcesFor(ids: string[]) {
  return ids.map((id) => shahnamehSources.find((s) => s.id === id)).filter((s): s is NonNullable<typeof s> => Boolean(s))
}

export function shahnamehSitemapPaths(): string[] {
  return ['/shahnameh', '/en/shahnameh', ...readyStories.map((s) => `/shahnameh/${s.slug}`)]
}

export const SHAHNAMEH_OPENING: [string, string] = ['به نام خداوندِ جان و خرد', 'کز این برتر، اندیشه، بر نگذرد']
export const SHAHNAMEH_WISDOM: [string, string] = ['توانا بُوَد هر که دانا بُوَد', 'ز دانش، دل پیر، بُرنا بود']
