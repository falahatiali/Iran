/** Topic pages that a timeline event links to, keyed by the event's (Persian) title. */
export interface Topic { path: string; name: string }
const TOPICS: Record<string, Topic> = {
  'نبرد حران (کارهه)': { path: '/battle/carrhae', name: 'نبرد حران' },
  'انقلاب مشروطه و گشایش مجلس': { path: '/event/mashruteh', name: 'انقلاب مشروطه' },
  'به توپ بستن مجلس': { path: '/event/mashruteh#coup', name: 'انقلاب مشروطه' },
  'فتح تهران به دست مشروطه‌خواهان': { path: '/event/mashruteh#conquest', name: 'انقلاب مشروطه' },
  'کودتای ۲۸ مرداد': { path: '/event/28-mordad', name: '۲۸ مرداد' },
  'جشن‌های ۲۵۰۰ سالهٔ شاهنشاهی': { path: '/event/jashn-2500', name: 'جشن‌های ۲۵۰۰ ساله' },
}
export const topicForEventTitle = (title: string): Topic | undefined => TOPICS[title]
