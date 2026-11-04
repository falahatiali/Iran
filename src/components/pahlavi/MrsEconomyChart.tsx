import { mrsEconomy } from '../../data/pahlavi/mohammad-reza'
import type { Locale } from '../../lib/i18n'

const num = (n: number, locale: Locale) => n.toLocaleString(locale === 'fa' ? 'fa-IR' : 'en-US')
const yr = (n: number, locale: Locale) => n.toLocaleString(locale === 'fa' ? 'fa-IR' : 'en-US', { useGrouping: false })

function Bar({ label, value, max, text, tone }: { label: string; value: number; max: number; text: string; tone: string }) {
  return (
    <div className="grid grid-cols-[5.5rem_1fr] items-center gap-3 text-sm">
      <span className="text-ivory/70">{label}</span>
      <div className="relative h-7 rounded bg-ivory/5">
        <div className={`h-7 rounded ${tone}`} style={{ width: `${Math.max(4, (value / max) * 100)}%` }} />
        <span className="absolute inset-y-0 start-2 flex items-center font-bold text-ivory">{text}</span>
      </div>
    </div>
  )
}

/** Income per head and census literacy under Mohammad Reza Shah; numbers as given on Wikipedia’s article on him. */
export function MrsEconomyChart({ locale }: { locale: Locale }) {
  const fa = locale === 'fa'
  const { perCapita, literacy, growth } = mrsEconomy
  const maxUsd = Math.max(...perCapita.map((p) => p.usd))
  return (
    <figure className="rounded-2xl border border-gold/30 bg-black/30 p-5 sm:p-7" aria-label={fa ? 'نمودار اقتصاد و سواد' : 'Economy and literacy chart'}>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-4 text-lg font-black text-gilded">{fa ? 'درآمد سرانه (دلار)' : 'Income per head (US$)'}</h3>
          <div className="space-y-3">
            {perCapita.map((p) => <Bar key={p.year} label={yr(p.year, locale)} value={p.usd} max={maxUsd} text={`$${num(p.usd, locale)}`} tone="bg-gold/70" />)}
          </div>
          <p className="mt-4 text-sm text-ivory/70">{fa ? `رشد میانگین سالانهٔ اقتصاد ${num(growth.gdp, locale)}٪ (${yr(growth.from, locale)}–${yr(growth.to, locale)})` : `Average annual GDP growth ${growth.gdp}% (${growth.from}–${growth.to})`}</p>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-black text-gilded">{fa ? 'باسوادی بر پایهٔ سرشماری (٪)' : 'Literacy by census (%)'}</h3>
          <div className="space-y-3">
            {literacy.flatMap((l) => [
              <Bar key={`${l.year}m`} label={`${yr(l.year, locale)} ${fa ? 'مردان' : 'men'}`} value={l.men} max={100} text={`${num(l.men, locale)}${fa ? '٪' : '%'}`} tone="bg-turquoise/60" />,
              <Bar key={`${l.year}w`} label={`${yr(l.year, locale)} ${fa ? 'زنان' : 'women'}`} value={l.women} max={100} text={`${num(l.women, locale)}${fa ? '٪' : '%'}`} tone="bg-rose-400/60" />,
            ])}
          </div>
        </div>
      </div>
      <figcaption className="mt-5 text-xs text-ivory/60">{fa ? 'منبع: ویکی‌پدیا، «محمدرضا پهلوی» (خوانده‌شده ۲۰۲۶-۱۱-۰۴)، با نقل از سرشماری‌های ۱۹۶۶ و ۱۹۷۶.' : 'Source: Wikipedia, “Mohammad Reza Pahlavi” (read 2026-11-04), citing the 1966 and 1976 censuses.'}</figcaption>
    </figure>
  )
}
