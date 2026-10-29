import type { RationCategory, RationFact } from './types'

/**
 * Inclusive count of PF numbers in a Hallock range string such as
 * "PF 1285–1579, 2049–2057". En-dash or hyphen both parse.
 */
export function publishedCount(pfRange: string): number {
  const body = pfRange.replace(/^PF\s+/i, '')
  let n = 0
  for (const part of body.split(',')) {
    const nums = part.trim().split(/[–-]/).map((s) => Number(s.trim()))
    const a = nums[0]
    if (!Number.isFinite(a)) continue
    const b = nums[1]
    n += Number.isFinite(b) ? (b as number) - a + 1 : 1
  }
  return n
}

const C = 'cit-hallock-categories'

/** Table of contents of Hallock 1969, OIP 92, printed pp. vii–viii (PDF p. 7). Persian names are our rendering of those English titles, not a published Persian edition. */
export const rationCategories: RationCategory[] = [
  { id: 'cat-a', letter: 'A', nameFa: 'جابه‌جایی کالا', nameEn: 'Transportation of Commodities', pfRange: 'PF 1–57', group: 'supply', citationId: C },
  { id: 'cat-b', letter: 'B', nameFa: 'تحویل کالا', nameEn: 'Delivery of Commodities', pfRange: 'PF 58–137, 2015–2017', group: 'supply', citationId: C },
  { id: 'cat-c1', letter: 'C1', nameFa: 'سپرده‌ها با «زیکا» و «دا»', nameEn: 'Deposits with “Zikka-” and “Da-”', pfRange: 'PF 138–232, 2018–2024', group: 'supply', citationId: C },
  { id: 'cat-c2', letter: 'C2', nameFa: 'مانده‌های حساب', nameEn: 'Accounting Balances', pfRange: 'PF 233–258', group: 'supply', citationId: C },
  { id: 'cat-c3', letter: 'C3', nameFa: 'پرداخت‌های «موزی»', nameEn: '“Muzzi” Payments', pfRange: 'PF 259–266', group: 'supply', citationId: C },
  { id: 'cat-c4', letter: 'C4', nameFa: 'دام خرد به‌عنوان مالیات', nameEn: 'Small Cattle as Tax', pfRange: 'PF 267–273, 2025', group: 'supply', citationId: C },
  { id: 'cat-c5', letter: 'C5', nameFa: 'مبادله', nameEn: 'Exchanges', pfRange: 'PF 274–279', group: 'supply', citationId: C },
  { id: 'cat-c6', letter: 'C6', nameFa: 'سپرده‌های دیگر', nameEn: 'Other “Deposits”', pfRange: 'PF 280–299, 2026', group: 'supply', citationId: C },
  { id: 'cat-d', letter: 'D', nameFa: 'رسیدهای عمومی', nameEn: 'General Receipts', pfRange: 'PF 300–335, 2027–2028', group: 'supply', citationId: C },
  { id: 'cat-e', letter: 'E', nameFa: 'مصرف / به‌کارگیری', nameEn: 'Utilization', pfRange: 'PF 336–431, 2029–2030', group: 'supply', citationId: C },
  { id: 'cat-f', letter: 'F', nameFa: 'کنارگذاشتن غله برای بذر و علوفه', nameEn: 'Setting-aside of Grains for Seed and Fodder', pfRange: 'PF 432–545', group: 'supply', citationId: C },
  { id: 'cat-g', letter: 'G', nameFa: 'تأمین توشه', nameEn: 'Providing of Provisions', pfRange: 'PF 546–653, 2031–2032', group: 'supply', citationId: C },
  { id: 'cat-h', letter: 'H', nameFa: 'رسید مقامات', nameEn: 'Receipts by Officials', pfRange: 'PF 654–690', group: 'supply', citationId: C },
  { id: 'cat-j', letter: 'J', nameFa: 'توشهٔ شاهی', nameEn: 'Royal Provisions', pfRange: 'PF 691–740, 2033–2035', group: 'supply', citationId: C },
  { id: 'cat-k1', letter: 'K1', nameFa: 'جیرهٔ افراد با نقش دینی', nameEn: 'Rations for Individuals with Religious Functions', pfRange: 'PF 741–774, 2036', group: 'rations-people', citationId: C },
  { id: 'cat-k2', letter: 'K2', nameFa: 'جیرهٔ ماهانهٔ افراد نام‌دار (با وصف)', nameEn: 'Regular Monthly Rations for Named Persons Qualified in Some Way', pfRange: 'PF 775–795, 2037', group: 'rations-people', citationId: C },
  { id: 'cat-k3', letter: 'K3', nameFa: 'جیرهٔ ماهانهٔ افراد نام‌دار (بدون وصف)', nameEn: 'Regular Monthly Rations for Named Persons without Qualification', pfRange: 'PF 796–846, 2038', group: 'rations-people', citationId: C },
  { id: 'cat-l1', letter: 'L1', nameFa: 'جیرهٔ ماهانه با «گال مکیپ»', nameEn: 'Regular Monthly Rations with “Gal Makip”', pfRange: 'PF 847–994, 2039–2043', group: 'rations-people', citationId: C },
  { id: 'cat-l2', letter: 'L2', nameFa: 'جیرهٔ ماهانه با «گالما»', nameEn: 'Regular Monthly Rations with “Galma”', pfRange: 'PF 995–1046, 2044–2045', group: 'rations-people', citationId: C },
  { id: 'cat-l3', letter: 'L3', nameFa: 'جیره‌های ماهانهٔ دیگر', nameEn: 'Other Regular Monthly Rations', pfRange: 'PF 1047–1084', group: 'rations-people', citationId: C },
  { id: 'cat-m', letter: 'M', nameFa: 'جیره‌های ویژه', nameEn: 'Special Rations', pfRange: 'PF 1085–1199, 2046–2047', group: 'rations-people', citationId: C },
  { id: 'cat-n', letter: 'N', nameFa: 'جیرهٔ مادران', nameEn: 'Mothers’ Rations', pfRange: 'PF 1200–1237, 2048', group: 'rations-people', citationId: C },
  { id: 'cat-p', letter: 'P', nameFa: 'جیره‌های روزانه', nameEn: 'Daily Rations', pfRange: 'PF 1238–1284', group: 'rations-people', citationId: C },
  { id: 'cat-q', letter: 'Q', nameFa: 'جیرهٔ سفر', nameEn: 'Travel Rations', pfRange: 'PF 1285–1579, 2049–2057', group: 'rations-people', citationId: C },
  { id: 'cat-r', letter: 'R', nameFa: 'جیره‌های طبقه‌بندی‌نشده', nameEn: 'Unclassifiable Ration Texts', pfRange: 'PF 1580–1634, 2058–2059', group: 'rations-people', citationId: C },
  { id: 'cat-s1', letter: 'S1', nameFa: 'جیرهٔ منظم حیوانات', nameEn: 'Regular Rations for Animals', pfRange: 'PF 1635–1756, 2060–2066', group: 'rations-animals', citationId: C },
  { id: 'cat-s2', letter: 'S2', nameFa: 'جیرهٔ ویژهٔ حیوانات', nameEn: 'Special Rations for Animals', pfRange: 'PF 1757–1779', group: 'rations-animals', citationId: C },
  { id: 'cat-s3', letter: 'S3', nameFa: 'جیرهٔ سفر حیوانات', nameEn: 'Travel Rations for Animals', pfRange: 'PF 1780–1787', group: 'rations-animals', citationId: C },
  { id: 'cat-t', letter: 'T', nameFa: 'نامه‌ها', nameEn: 'Letters', pfRange: 'PF 1788–1860, 2067–2071', group: 'admin', citationId: C },
  { id: 'cat-u', letter: 'U', nameFa: 'برچسب‌ها', nameEn: 'Labels', pfRange: 'PF 1861–1939', group: 'admin', citationId: C },
  { id: 'cat-v', letter: 'V', nameFa: 'دفترروزنامه‌ها', nameEn: 'Journals', pfRange: 'PF 1940–1960, 2072–2074', group: 'admin', citationId: C },
  { id: 'cat-w', letter: 'W', nameFa: 'حساب‌ها', nameEn: 'Accounts', pfRange: 'PF 1961–2014, 2075–2087', group: 'admin', citationId: C },
]

/** Only amounts Hallock states in the 1969 introduction (printed pp. 4–5). No invented QA-per-person scales. */
export const rationFacts: RationFact[] = [
  {
    id: 'fact-monthly-corpus',
    categoryLetters: ['K1', 'K2', 'K3', 'L1', 'L2', 'L3'],
    whoFa: 'مجموعهٔ جیره‌های ماهانهٔ منظم',
    whoEn: 'Regular monthly ration corpus',
    commodityFa: 'عمدتاً غله و کالاهای خوراکی',
    commodityEn: 'chiefly grain and food commodities',
    amount: '354 texts (PF 741–1084, 2036–45)',
    unitGloss: 'Hallock: largest single group in the volume',
    citationId: 'cit-hallock-intro-rations',
    confidence: 'well-supported',
  },
  {
    id: 'fact-travel-corpus',
    categoryLetters: ['Q'],
    whoFa: 'جیرهٔ سفر',
    whoEn: 'Travel rations',
    commodityFa: 'خوراک روزانهٔ مسافران',
    commodityEn: 'daily travel provisions',
    amount: '304 texts (category Q)',
    unitGloss: 'Hallock: second-largest group; most rations for a single day',
    citationId: 'cit-hallock-intro-rations',
    confidence: 'well-supported',
  },
  {
    id: 'fact-men-3bar',
    categoryLetters: ['K1', 'K2', 'K3', 'L1', 'L2', 'L3'],
    whoFa: 'مردان (جیرهٔ ماهانهٔ معمول)',
    whoEn: 'Men (usual monthly grain ration)',
    commodityFa: 'غله',
    commodityEn: 'grain',
    amount: '3 BAR',
    unitGloss: 'Hallock: “30 quarts”; normal maximum 6 BAR, “not often reached”',
    citationId: 'cit-hallock-intro-rations',
    confidence: 'well-supported',
  },
  {
    id: 'fact-min-5qa',
    categoryLetters: ['K1', 'K2', 'K3', 'L1', 'L2', 'L3'],
    whoFa: 'حداقل ماهانهٔ معمول',
    whoEn: 'Usual monthly minimum',
    commodityFa: 'غله',
    commodityEn: 'grain',
    amount: '5 QA = 1 BAR',
    unitGloss: 'Hallock: other normal rations are multiples of this; do not convert to litres here (see research log)',
    citationId: 'cit-hallock-intro-rations',
    confidence: 'well-supported',
  },
  {
    id: 'fact-women-l',
    categoryLetters: ['L1', 'L2', 'L3'],
    whoFa: 'زنان در گروه‌های کار',
    whoEn: 'Women in work groups (L 1–3)',
    commodityFa: 'غله',
    commodityEn: 'grain',
    amount: 'women more numerous than men, boys, and girls; normally smaller rations than men',
    unitGloss: 'Hallock: some women receive more than any of the men (supervisors / special skills, his inference)',
    citationId: 'cit-hallock-intro-rations',
    confidence: 'well-supported',
  },
  {
    id: 'fact-mothers-n',
    categoryLetters: ['N'],
    whoFa: 'مادران (جیرهٔ پاداش زایمان)',
    whoEn: 'Mothers (childbirth rations)',
    commodityFa: 'غله (و کالاهای وابسته)',
    commodityEn: 'grain (and related commodities)',
    amount: 'mothers of boys regularly twice mothers of girls',
    unitGloss: 'Hallock: given as reward',
    citationId: 'cit-hallock-intro-rations',
    confidence: 'well-supported',
  },
  {
    id: 'fact-ionian-mothers',
    categoryLetters: ['N'],
    whoFa: 'مادران ایونی در تخت‌جمشید (PF 1224)',
    whoEn: 'Ionian mothers at Persepolis (PF 1224)',
    commodityFa: 'غله',
    commodityEn: 'grain',
    amount: '9 mothers of boys: 2 quarts each; 14 mothers of girls: 1 quart each',
    unitGloss: 'Hallock introduction, one tablet; quarts are his gloss',
    citationId: 'cit-hallock-intro-rations',
    confidence: 'well-supported',
  },
  {
    id: 'fact-officials-daily',
    categoryLetters: ['H'],
    whoFa: 'چهار مقام عالی (جیرهٔ روزانهٔ شراب/آبجو)',
    whoEn: 'Four high officials (daily wine/beer)',
    commodityFa: 'شراب یا آبجو (هم‌ارزش در این متون)',
    commodityEn: 'wine or beer (equal value in these texts)',
    amount: 'Gobryas 10 marris/day; Parnaka 9; Irdumartiya 5; Zissawis 3',
    unitGloss: 'Hallock: 28 texts PF 654–78 and 688–90; 1 marris ≈ 10 quarts in his metrology',
    citationId: 'cit-hallock-intro-rations',
    confidence: 'well-supported',
  },
  {
    id: 'fact-exchange-values',
    categoryLetters: ['C5'],
    whoFa: 'نرخ مبادله در چند متن مبادله',
    whoEn: 'Exchange values in the exchange texts',
    commodityFa: 'گوسفند / شراب در برابر جو',
    commodityEn: 'sheep / wine in barley',
    amount: '1 sheep = 10 BAR (100 quarts); 1 marris wine = 3 BAR barley',
    unitGloss: 'Hallock: “normal values”; not a market price series',
    citationId: 'cit-hallock-intro-rations',
    confidence: 'well-supported',
  },
  {
    id: 'fact-silver-lieu',
    categoryLetters: ['Q'],
    whoFa: 'کارگران و صنعتگران خزانه (نه بارو)',
    whoEn: 'Treasury workers and craftsmen (not Fortification)',
    commodityFa: 'نقره به‌جای جیرهٔ جنسی',
    commodityEn: 'silver in lieu of rations in kind',
    amount: 'sheep, wine, or grain rations commuted in silver',
    unitGloss: 'Hallock intro + Iranica Treasury archive; dates 492–458/457 BCE',
    citationId: 'cit-treasury-silver',
    confidence: 'well-supported',
  },
]
