/** One registry for the site's fixed (non-slug) pages: their Persian and English paths,
 * labels for search and menus, and the search keywords. The sitemap, hreflang alternates,
 * the language switch and the search dialog all read from here, so a new page is added once.
 * Kept free of data-module imports: the header bundles it on every page. */

export interface SitePage {
  key: string
  fa: { path: string; label: string; sub: string }
  /** the English mirror, when one exists */
  en?: { path: string; label: string; sub: string }
  /** extra search keywords in both languages */
  keywords?: string
  /** listed in the search dialog as a page hit */
  searchable?: boolean
}

export const SITE_PAGES: readonly SitePage[] = [
  { key: 'home', fa: { path: '/', label: 'خانه', sub: 'تاریخ ایران' } },
  {
    key: 'shahnameh', searchable: true,
    fa: { path: '/shahnameh', label: 'شاهنامه', sub: 'فردوسی · Shahnameh' },
    en: { path: '/en/shahnameh', label: 'Shahnameh', sub: 'Ferdowsi’s Book of Kings' },
    keywords: 'شاهنامه فردوسی کیومرث هوشنگ تهمورث جمشید ضحاک فریدون کاوه ایرج منوچهر زال سیمرغ رستم سهراب سیاوش کیخسرو بیژن منیژه بهرام گور انوشیروان Ferdowsi Shahnameh',
  },
  {
    key: 'cylinder', searchable: true,
    fa: { path: '/cylinder', label: 'استوانهٔ کوروش', sub: 'BM 90920 · Cyrus Cylinder' },
    en: { path: '/en/cylinder', label: 'The Cyrus Cylinder', sub: 'BM 90920 · Cyrus Cylinder' },
    keywords: 'استوانه کوروش Cyrus Cylinder BM 90920 منشور کتیبه بابل',
  },
  {
    key: 'archives', searchable: true,
    fa: { path: '/archives', label: 'بایگانی بارو و خزانهٔ تخت‌جمشید', sub: 'Persepolis Fortification · Treasury' },
    en: { path: '/en/archives', label: 'Persepolis Fortification and Treasury archives', sub: 'Persepolis Fortification · Treasury' },
    keywords: 'بایگانی بارو خزانه تخت‌جمشید Persepolis Fortification Treasury Hallock جیره الواح',
  },
  {
    key: 'carrhae', searchable: true,
    fa: { path: '/battle/carrhae', label: 'نبرد حران (۵۳ پ.م.)', sub: 'اشکانیان · ارد دوم · سورنا' },
    en: { path: '/en/battle/carrhae', label: 'The Battle of Carrhae (53 BCE)', sub: 'Arsacids · Orodes II · Surena' },
    keywords: 'نبرد حران کراسوس سورنا سورن ارد اشکانیان پارت Carrhae Crassus Surena Orodes Parthian battle',
  },
  {
    key: 'mordad28', searchable: true,
    fa: { path: '/event/28-mordad', label: '۲۸ مرداد ۱۳۳۲', sub: 'کودتای ۱۹۵۳' },
    en: { path: '/en/event/28-mordad', label: '28 Mordad 1332 / 19 August 1953', sub: 'The 1953 coup' },
    keywords: '28 مرداد کودتا مصدق 1953 coup Mosaddeq Mordad',
  },
  {
    key: 'jashn2500', searchable: true,
    fa: { path: '/event/jashn-2500', label: 'جشن‌های ۲۵۰۰ ساله', sub: 'مهر ۱۳۵۰' },
    en: { path: '/en/event/jashn-2500', label: 'The 2,500-year celebrations', sub: 'October 1971' },
    keywords: 'جشنهای 2500 ساله Persepolis 1971 celebrations jashn',
  },
  {
    key: 'mashruteh', searchable: true,
    fa: { path: '/event/mashruteh', label: 'انقلاب مشروطه', sub: '۱۲۸۴ تا ۱۲۹۰ خورشیدی' },
    en: { path: '/en/event/mashruteh', label: 'The Constitutional Revolution', sub: '1905–1911' },
    keywords: 'انقلاب مشروطه مشروطیت مجلس شورای ملی مظفرالدین شاه محمدعلی شاه ستارخان باقرخان بهبهانی طباطبایی Constitutional Revolution Mashruteh Majles 1906',
  },
  {
    key: 'dey1404', searchable: true,
    fa: { path: '/event/dey-1404', label: 'جاویدنامان ۱۸ و ۱۹ دی ۱۴۰۴', sub: 'یادنامهٔ خیزش دی‌ماه' },
    keywords: 'دی 1404 ۱۸ دی ۱۹ دی جاویدنامان جانباختگان کشتار اعتراضات خیزش آزادی لاله January 2026 protests massacre Iran names victims',
  },
  {
    key: 'property', searchable: true,
    fa: { path: '/property', label: 'حقوق مالکیت در تاریخ ایران', sub: 'لوح‌ها، قراردادها، هزار داوری' },
    en: { path: '/en/property', label: 'Property rights in the history of Iran', sub: 'Tablets, contracts, Mādayān ī hazār dādestān' },
    keywords: 'حقوق مالکیت property rights هزار داوری MHD Persepolis tablets Murashu Egibi',
  },
  {
    key: 'timeline', searchable: true,
    fa: { path: '/timeline', label: 'گاه‌شمار سراسری', sub: 'همهٔ رویدادها از ایلام تا امروز' },
    keywords: 'گاه‌شمار گاهشمار تقویم رویدادها timeline events chronology',
  },
  {
    key: 'kings', searchable: true,
    fa: { path: '/kings', label: 'فرمانروایان در یک نگاه', sub: 'نوار زمانی همهٔ فرمانروایان' },
    keywords: 'فرمانروایان پادشاهان شاهان فهرست rulers kings list',
  },
  {
    key: 'about', searchable: true,
    fa: { path: '/about', label: 'درباره و روش‌شناسی', sub: 'روش کار این سایت' },
    en: { path: '/en/about', label: 'About and methodology', sub: 'How this site works' },
    keywords: 'درباره روش‌شناسی about methodology magi magic مالکیت منابع sources',
  },
]

export function sitePage(key: string): SitePage {
  const p = SITE_PAGES.find((x) => x.key === key)
  if (!p) throw new Error(`unknown site page: ${key}`)
  return p
}

/** hreflang alternates (fa, en, x-default) for a fixed page with an English mirror. */
export function pageAlternates(key: string) {
  const p = sitePage(key)
  if (!p.en) throw new Error(`site page has no English mirror: ${key}`)
  return [
    { hrefLang: 'fa', path: p.fa.path },
    { hrefLang: 'en', path: p.en.path },
    { hrefLang: 'x-default', path: p.fa.path },
  ] as const
}

/** [fa, en] path pairs for every fixed page with a mirror. */
export const PAGE_PAIRS: readonly [string, string][] = SITE_PAGES.flatMap((p) => (p.en ? [[p.fa.path, p.en.path] as [string, string]] : []))

/** Every fixed, indexable path in both languages, for the sitemap. */
export const STATIC_PATHS: readonly string[] = SITE_PAGES.flatMap((p) => (p.en ? [p.fa.path, p.en.path] : [p.fa.path]))
