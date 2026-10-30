import { Link } from '@tanstack/react-router'
import { useRef, type KeyboardEvent, type PointerEvent, type WheelEvent } from 'react'
import type { EventType } from '../../data/types'
import type { TimelineEvent } from '../../server/api'
import { placeForEventTitle } from '../../data/places'
import { eventTypeNames, fa, isCirca, year } from '../../lib/format'
import { TIMELINE_MAX, TIMELINE_MIN } from '../../lib/searchSchema'
import { EventIcon } from '../EventIcon'
import { pan, pos, ticks, zoom, type Win } from './scale'

export interface ChartDynasty { slug: string; name: string; era: string; start: number; end: number | null; accent: string }

const TYPES = Object.keys(eventTypeNames) as EventType[]
const btn = 'rounded-full border border-gold/30 px-3 min-h-11 min-w-11 inline-flex items-center justify-center text-sm hover:border-gold disabled:opacity-40'

/**
 * Multi-lane chart: a dynasty band plus one lane per event category, over a zoomable window.
 * Time runs right-to-left (older on the right) to follow the Persian reading direction.
 * Keyboard (when focused): + / − zoom, ← / → pan, Home resets, N / P select next / previous event.
 */
export function TimelineChart({ dynasties, events, win, selected, onWindow, onSelect, eraRanges, eraNames, reduced }: {
  dynasties: ChartDynasty[]
  events: TimelineEvent[]
  win: Win
  selected?: TimelineEvent
  onWindow: (w: Win, replace: boolean) => void
  onSelect: (id: string) => void
  eraRanges: { id: string; from: number; to: number }[]
  eraNames: Record<string, string>
  reduced: boolean
}) {
  const box = useRef<HTMLDivElement>(null)
  const drag = useRef<{ x: number; w: Win; moved: boolean } | null>(null)
  const x = (y: number) => `${(pos(y, win) * 100).toFixed(3)}%`
  const visible = events.filter((e) => e.year >= win.from && e.year <= win.to)
  const bands = dynasties.filter((d) => d.start <= win.to && (d.end ?? TIMELINE_MAX) >= win.from)
  const lanes = TYPES.filter((t) => events.some((e) => e.type === t))
  const full = win.from === TIMELINE_MIN && win.to === TIMELINE_MAX

  const yearAt = (clientX: number) => {
    const r = box.current?.getBoundingClientRect()
    if (!r) return (win.from + win.to) / 2
    // RTL: the right edge is win.from
    return win.from + ((r.right - clientX) / r.width) * (win.to - win.from)
  }
  const step = (dir: 1 | -1) => {
    const sorted = [...visible].sort((a, b) => a.year - b.year)
    if (!sorted.length) return
    const i = selected ? sorted.findIndex((e) => e.id === selected.id) : -1
    const next = sorted[Math.min(sorted.length - 1, Math.max(0, i === -1 ? 0 : i + dir))]
    onSelect(next.id)
  }
  const onKey = (e: KeyboardEvent) => {
    const k = e.key
    if (k === '+' || k === '=') onWindow(zoom(win, 0.5), true)
    else if (k === '-' || k === '_') onWindow(zoom(win, 2), true)
    else if (k === 'ArrowLeft') onWindow(pan(win, 0.2), true) // RTL: left = later
    else if (k === 'ArrowRight') onWindow(pan(win, -0.2), true)
    else if (k === 'Home') onWindow({ from: TIMELINE_MIN, to: TIMELINE_MAX }, false)
    else if (k === 'n' || k === 'N') step(1)
    else if (k === 'p' || k === 'P') step(-1)
    else return
    e.preventDefault()
  }
  const onWheel = (e: WheelEvent) => {
    if (!(e.ctrlKey || e.metaKey)) return
    e.preventDefault()
    onWindow(zoom(win, e.deltaY > 0 ? 1.25 : 0.8, yearAt(e.clientX)), true)
  }
  const onDown = (e: PointerEvent) => {
    if ((e.target as HTMLElement).closest('button,a')) return
    drag.current = { x: e.clientX, w: win, moved: false }
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
  }
  const onMove = (e: PointerEvent) => {
    const d = drag.current; const r = box.current?.getBoundingClientRect()
    if (!d || !r) return
    const dx = e.clientX - d.x
    if (Math.abs(dx) < 4 && !d.moved) return
    d.moved = true
    onWindow(pan(d.w, dx / r.width), true) // RTL: dragging right reveals later years
  }
  const onUp = () => { drag.current = null }

  return (
    <section aria-labelledby="chart-h" className="mt-8">
      <h2 id="chart-h" className="sr-only">نمودار چندخطی گاه‌شمار</h2>
      <div className="flex flex-wrap items-center gap-2" role="toolbar" aria-label="بزرگ‌نمایی و جابه‌جایی">
        <button type="button" className={btn} onClick={() => onWindow(zoom(win, 0.5), false)} aria-label="بزرگ‌نمایی">+</button>
        <button type="button" className={btn} onClick={() => onWindow(zoom(win, 2), false)} disabled={full} aria-label="کوچک‌نمایی">−</button>
        <button type="button" className={btn} onClick={() => onWindow(pan(win, -0.33), false)} disabled={win.from <= TIMELINE_MIN} aria-label="کهن‌تر">→</button>
        <button type="button" className={btn} onClick={() => onWindow(pan(win, 0.33), false)} disabled={win.to >= TIMELINE_MAX} aria-label="نوتر">←</button>
        <button type="button" className={btn} onClick={() => onWindow({ from: TIMELINE_MIN, to: TIMELINE_MAX }, false)} disabled={full}>همهٔ تاریخ</button>
        <span className="text-xs text-ivory/50 mx-1">پرش به دوران:</span>
        {eraRanges.map((er) => (
          <button key={er.id} type="button" className={`${btn} ${win.from === er.from && win.to === er.to ? 'bg-gold/15 border-gold' : ''}`} aria-pressed={win.from === er.from && win.to === er.to} onClick={() => onWindow({ from: er.from, to: er.to }, false)}>{eraNames[er.id]}</button>
        ))}
        <span className="text-xs text-ivory/50 ms-auto" aria-live="polite">{year(win.from, { circa: false })} تا {year(win.to, { circa: false })} · {fa(visible.length)} رویداد</span>
      </div>

      <div
        ref={box}
        tabIndex={0}
        role="group"
        aria-label="گاه‌شمار تصویری. کلیدهای + و − بزرگ‌نمایی، جهت‌نماها جابه‌جایی، N و P رویداد بعدی و پیشین، Home بازنشانی."
        aria-describedby="chart-help"
        onKeyDown={onKey}
        onWheel={onWheel}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        className="relative mt-4 glass rounded-2xl ps-28 pe-3 py-3 select-none touch-pan-y outline-none focus-visible:ring-2 focus-visible:ring-gold cursor-grab active:cursor-grabbing overflow-hidden"
      >
        {/* tick grid */}
        <div className="absolute inset-y-0 start-28 end-3 pointer-events-none" aria-hidden="true">
          {ticks(win).map((t) => (
            <div key={t} className="absolute inset-y-0 border-s border-ivory/10" style={{ right: x(t) }}>
              <span className="absolute bottom-1 -translate-x-1/2 text-[0.65rem] text-ivory/45 whitespace-nowrap">{year(t, { circa: false })}</span>
            </div>
          ))}
        </div>
        {/* dynasty band */}
        <div className="relative h-10">
          <span className="absolute -start-26 top-2 w-24 text-xs text-ivory/60">دودمان‌ها</span>
          {bands.map((d) => {
            const a = Math.max(d.start, win.from); const b = Math.min(d.end ?? TIMELINE_MAX, win.to)
            const w = Math.max(0.4, (pos(b, win) - pos(a, win)) * 100)
            return (
              <Link key={d.slug} to="/dynasty/$slug" params={{ slug: d.slug }} tabIndex={-1} title={`${d.name} (${year(d.start)}–${year(d.end)})`}
                className="absolute top-1 h-8 rounded-md text-[0.7rem] leading-8 px-1 truncate text-night font-bold hover:brightness-125"
                style={{ right: x(a), width: `${w}%`, background: d.accent }}>{w > 6 ? d.name : ''}</Link>
            )
          })}
        </div>
        {/* category lanes */}
        {lanes.map((t) => (
          <div key={t} className="relative h-9 border-t border-ivory/5">
            <span className="absolute -start-26 top-2 w-24 text-xs text-turquoise-soft truncate"><EventIcon type={t} /> {eventTypeNames[t]}</span>
            {visible.filter((e) => e.type === t).map((e) => {
              const on = selected?.id === e.id
              return (
                <button key={e.id} type="button" tabIndex={-1} onClick={() => onSelect(e.id)} title={`${year(e.year)} · ${e.title}`} aria-label={`${year(e.year)}: ${e.title}`}
                  className="absolute top-1/2 -translate-y-1/2 translate-x-1/2 size-7 grid place-items-center"
                  style={{ right: x(e.year) }}>
                  <span className={`block rounded-full ring-2 ring-night ${reduced ? '' : 'transition-transform'} ${on ? 'size-4 scale-125 ring-gold' : e.importance === 'major' ? 'size-3' : 'size-2 opacity-80'} ${isCirca(e.year) ? 'outline outline-1 outline-dashed outline-ivory/60' : ''}`} style={{ background: e.accent }} />
                </button>
              )
            })}
          </div>
        ))}
        <div className="h-5" aria-hidden="true" />
      </div>
      <p id="chart-help" className="mt-2 text-xs text-ivory/50 leading-6">
        زمان از راست (کهن) به چپ (نو) است. بکشید تا جابه‌جا شود؛ Ctrl/⌘ + چرخ برای بزرگ‌نمایی. نقطهٔ بزرگ‌تر = رویداد کلیدی؛ حاشیهٔ خط‌چین = تاریخ تقریبی.
      </p>

      {selected && (
        <article aria-live="polite" className="mt-4 glass rounded-2xl p-5 border-gold/40">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="font-bold text-gold-bright text-sm">{year(selected.year)}</span>
            <span className="text-turquoise-soft"><EventIcon type={selected.type} /> {eventTypeNames[selected.type]}</span>
            <CertaintyBadge y={selected.year} />
          </div>
          <h3 className="mt-2 text-xl font-bold">{selected.title}</h3>
          {selected.description && <p className="read mt-1 text-ivory/70">{selected.description}</p>}
          <div className="mt-3 flex flex-wrap gap-2">
            <Link to="/dynasty/$slug" params={{ slug: selected.dynastySlug }} className={btn}>{selected.dynastyName}</Link>
            {(() => { const pl = placeForEventTitle(selected.title); return pl && <Link to="/place/$slug" params={{ slug: pl.slug }} className={btn}>صفحهٔ {pl.name.fa}</Link> })()}
            <button type="button" className={btn} onClick={() => onWindow(zoom({ from: selected.year - 50, to: selected.year + 50 }, 1), false)}>بزرگ‌نمایی روی این رویداد</button>
          </div>
        </article>
      )}
    </section>
  )
}

/** Dating label: before the Achaemenid foundation every date is approximate (see /about#certainty). */
export function CertaintyBadge({ y }: { y: number }) {
  const c = isCirca(y)
  return (
    <a href="/about#certainty" className={`rounded-full border px-2 py-0.5 ${c ? 'border-amber-300/50 text-amber-200' : 'border-emerald-300/40 text-emerald-200'}`} title="قاعده: پیش از ۵۶۰ پ.م. همهٔ تاریخ‌ها تقریبی‌اند. دربارهٔ برچسب‌های قطعیت">
      {c ? 'تاریخ تقریبی' : 'تاریخ معین'}
    </a>
  )
}
