/** History → library: the dynasties whose courts a library poet lived at. Each note restates a fact that is
 * sourced on the linked «… کیست؟» page, so no new claim is made here. */
export interface EraLinks { note: string; links: readonly { href: string; label: string }[] }

const HAFEZ = [{ href: '/library/hafez/about', label: 'حافظ کیست؟' }, { href: '/library/hafez', label: 'دیوان حافظ' }]

export const ERA_LINKS: Record<string, EraLinks> = {
  injuids: { note: 'شاه شیخ ابواسحاق اینجو پشتیبان بزرگ دانش و ادب بود؛ غزل «یاد باد آن که سر کوی توام منزل بود» حافظ را سوگی بر دولت او می‌دانند.', links: HAFEZ },
  mozaffarids: { note: 'بیشتر عمر شاعری حافظ در روزگار شاه شجاع مظفری گذشت.', links: HAFEZ },
  salghurids: {
    note: 'سعدی بوستان را به اتابک ابوبکر بن سعد زنگی پیشکش کرد.',
    links: [{ href: '/library/saadi', label: 'سعدی کیست؟' }, { href: '/library/bustan', label: 'بوستان سعدی' }, { href: '/library/golestan', label: 'گلستان سعدی' }],
  },
  seljuks: {
    note: 'خیام به دعوت ملکشاه سلجوقی در کار رصد و اصلاح تقویمی بود که تقویم جلالی نام گرفت.',
    links: [{ href: '/library/khayyam/about', label: 'خیام کیست؟' }, { href: '/library/khayyam', label: 'رباعیات خیام' }],
  },
}
