import { Link } from '@tanstack/react-router'
import { ERA_LABELS, type CivSummary } from '../../data/civilizations/types'
import { fa } from '../../lib/format'

/** Piecewise time scale, compressed for the long Neolithic: [year, position 0..1]. */
const STOPS: [number, number][] = [[-8500, 0], [-5000, 0.24], [-2000, 0.62], [0, 1]]
export function timePos(year: number): number {
  const y = Math.min(Math.max(year, STOPS[0][0]), STOPS[STOPS.length - 1][0])
  for (let i = 1; i < STOPS.length; i++) {
    const [y1, p1] = STOPS[i]
    const [y0, p0] = STOPS[i - 1]
    if (y <= y1) return p0 + ((y - y0) / (y1 - y0)) * (p1 - p0)
  }
  return 1
}
const TICKS = [-8000, -6000, -5000, -4000, -3000, -2000, -1000, 0]
const tickLabel = (y: number) => (y === 0 ? 'آغاز میلادی' : `${fa(-y)} پ.م.`)

/** One bar per civilization on a shared time axis; earlier is on the right, as Persian reads. */
export function CivChronology({ items, highlight }: { items: readonly CivSummary[]; highlight?: string }) {
  return (
    <figure className="glass rounded-3xl p-4 md:p-6" aria-label="گاه‌نگار تمدن‌های کهن ایران">
      <div className="relative ms-28 md:ms-40 h-8 border-b border-gold/25" aria-hidden="true">
        {TICKS.map((t) => (
          <span key={t} className="absolute bottom-1 translate-x-1/2 whitespace-nowrap text-[10px] md:text-xs text-ivory/55" style={{ right: `${timePos(t) * 100}%` }}>{tickLabel(t)}</span>
        ))}
      </div>
      <ol className="mt-2 grid gap-1.5">
        {items.map((c) => {
          const s = timePos(c.span[0])
          const e = timePos(c.span[1])
          const on = highlight === c.slug
          const color = ERA_LABELS[c.era].color
          const open = c.span[1] > 0
          return (
            <li key={c.slug} className="grid grid-cols-[7rem_minmax(0,1fr)] md:grid-cols-[10rem_minmax(0,1fr)] items-center gap-0">
              <Link to="/civilizations/$slug" params={{ slug: c.slug }} className={`truncate text-sm py-1 min-h-8 inline-flex items-center hover:text-gold-bright ${on ? 'text-gold-bright font-black' : 'text-ivory/80'}`}>{c.name}</Link>
              <div className="relative h-6">
                <div className="absolute inset-y-[11px] inset-x-0 bg-ivory/[.06] rounded-full" aria-hidden="true" />
                {TICKS.map((t) => <span key={t} aria-hidden="true" className="absolute inset-y-0 w-px bg-gold/10" style={{ right: `${timePos(t) * 100}%` }} />)}
                <span
                  className={`absolute top-1 h-4 rounded-full ${on ? 'ring-2 ring-gold-bright' : ''}`}
                  style={{ right: `${s * 100}%`, width: `max(8px, ${(e - s) * 100}%)`, background: `linear-gradient(270deg, ${color}, ${c.accent})`, boxShadow: on ? `0 0 18px ${color}` : undefined }}
                  title={`${c.name}: ${c.spanLabel}`}
                >
                  {open && <span aria-hidden="true" className="absolute -left-2 top-1/2 -translate-y-1/2 text-[10px] text-ivory/70">◀</span>}
                </span>
              </div>
            </li>
          )
        })}
      </ol>
      <figcaption className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-ivory/60">
        {Object.entries(ERA_LABELS).map(([k, v]) => (
          <span key={k} className="inline-flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full" style={{ background: v.color }} aria-hidden="true" />{v.name}</span>
        ))}
        <span>مقیاس زمان در هزاره‌های کهن فشرده شده است؛ ◀ یعنی سکونت پس از آغاز میلادی هم ادامه یافت.</span>
      </figcaption>
    </figure>
  )
}
