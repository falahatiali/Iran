const FA = '۰۱۲۳۴۵۶۷۸۹'
export const fa = (v: number | string) => String(v).replace(/\d/g, (d) => FA[+d])

/** uncertain dating: everything before the Achaemenid foundation is approximate */
export const isCirca = (y: number) => y < -560

export function year(y: number | null, opts: { circa?: boolean } = {}): string {
  if (y === null) return 'اکنون'
  const c = opts.circa ?? isCirca(y) ? 'ح. ' : ''
  return y < 0 ? `${c}${fa(-y)} پ.م` : `${c}${fa(y)} م`
}

/** approx. solar Hijri year (Gregorian - 621); valid for CE years after 622 */
export const solarHijri = (y: number) => y - 621

export function range(start: number, end: number | null): string {
  if (end !== null && start === end) return year(start)
  const sameSide = end === null || (start < 0) === (end < 0)
  if (sameSide && start < 0 && end !== null) return `${isCirca(start) ? 'ح. ' : ''}${fa(-start)}–${fa(-end)} پ.م`
  if (sameSide && start > 0) return `${fa(start)}–${end === null ? 'اکنون' : fa(end)} م`
  return `${year(start)} – ${year(end)}`
}

export function shRange(start: number, end: number | null): string | null {
  if (start < 1500) return null
  return `${fa(solarHijri(start))}–${end === null ? 'اکنون' : fa(solarHijri(end))} ش`
}

export const eraNames: Record<string, string> = {
  ancient: 'ایران باستان', classical: 'دوران کلاسیک', medieval: 'سده‌های میانه', 'early-modern': 'آغاز دوران نو', modern: 'دوران معاصر',
}
export const eventTypeNames: Record<string, string> = {
  founding: 'بنیان‌گذاری', battle: 'نبرد', treaty: 'پیمان', reform: 'اصلاحات', culture: 'فرهنگ و هنر', fall: 'فروپاشی', other: 'رویداد',
}
