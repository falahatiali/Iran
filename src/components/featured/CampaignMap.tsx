import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useCallback, useEffect, useState } from 'react'
import { BASEMAP, LAND_PATH } from '../../data/basemap'
import type { Certainty, Coord, EventKind, FeaturedSource, MapEvent } from '../../data/featured/types'
import type { Locale } from '../../lib/i18n'
import { fa as faNum } from '../../lib/format'

const K = (BASEMAP.scale * Math.PI) / 180
export const project = ([lon, lat]: Coord): [number, number] => [BASEMAP.width / 2 + (lon - BASEMAP.center[0]) * K, BASEMAP.height / 2 - (lat - BASEMAP.center[1]) * K]
const pathOf = (pts: Coord[]) => 'M' + pts.map((p) => project(p).map((n) => n.toFixed(1)).join(' ')).join('L')

const KIND_COLOR: Record<EventKind, string> = { battle: '#e0565b', campaign: '#f2d68b', building: '#4fd1c5', admin: '#a5b4fc', religion: '#f5f0e6' }
const KIND_LABEL: Record<Locale, Record<EventKind, string>> = {
  fa: { battle: 'نبرد', campaign: 'لشکرکشی', building: 'ساخت‌وساز', admin: 'اداره و اقتصاد', religion: 'دین' },
  en: { battle: 'Battle', campaign: 'Campaign', building: 'Building', admin: 'Administration & economy', religion: 'Religion' },
}
const CERT: Record<Locale, Record<Certainty, string>> = {
  fa: { secure: 'استوار (منبع هم‌زمان)', probable: 'محتمل', disputed: 'محل بحث' },
  en: { secure: 'Secure (contemporary source)', probable: 'Probable', disputed: 'Disputed' },
}
const CERT_TONE: Record<Certainty, string> = { secure: 'border-turquoise/50 text-turquoise-soft', probable: 'border-gold/50 text-gold-bright', disputed: 'border-crimson/60 text-ivory' }

const PLACES: { name: { fa: string; en: string }; c: Coord }[] = [
  { name: { fa: 'تخت‌جمشید', en: 'Persepolis' }, c: [52.89, 29.93] },
  { name: { fa: 'شوش', en: 'Susa' }, c: [48.26, 32.19] },
  { name: { fa: 'بابل', en: 'Babylon' }, c: [44.42, 32.54] },
  { name: { fa: 'هگمتانه', en: 'Ecbatana' }, c: [48.52, 34.8] },
  { name: { fa: 'سارد', en: 'Sardis' }, c: [28.04, 38.49] },
  { name: { fa: 'ممفیس', en: 'Memphis' }, c: [31.25, 29.85] },
  { name: { fa: 'آتن', en: 'Athens' }, c: [23.73, 37.98] },
  { name: { fa: 'باختر', en: 'Bactra' }, c: [66.9, 36.75] },
]

export function CampaignMap({ events, sources, locale, label }: { events: MapEvent[]; sources: FeaturedSource[]; locale: Locale; label?: string }) {
  const isFa = locale === 'fa'
  const reduce = useReducedMotion()
  const [i, setI] = useState(0)
  const [playing, setPlaying] = useState(false)
  const ev = events[i]
  const last = events.length - 1
  const go = useCallback((n: number) => setI(Math.max(0, Math.min(last, n))), [last])

  useEffect(() => {
    if (!playing) return
    if (i >= last) { setPlaying(false); return }
    const t = window.setTimeout(() => setI((n) => n + 1), reduce ? 6000 : 3800)
    return () => window.clearTimeout(t)
  }, [playing, i, last, reduce])

  const onKey = (e: React.KeyboardEvent) => {
    const fwd = isFa ? 'ArrowLeft' : 'ArrowRight'
    const back = isFa ? 'ArrowRight' : 'ArrowLeft'
    if (e.key === fwd) { e.preventDefault(); go(i + 1) }
    else if (e.key === back) { e.preventDefault(); go(i - 1) }
    else if (e.key === 'Home') { e.preventDefault(); go(0) }
    else if (e.key === 'End') { e.preventDefault(); go(last) }
    else if (e.key === ' ' && e.target === e.currentTarget) { e.preventDefault(); setPlaying((p) => !p) }
  }

  const year = (y: number) => (isFa ? `${faNum(-y)} پ.م.` : `${-y} BCE`)
  const [x, y] = project(ev.coord)
  const srcName = (id: string) => sources.find((s) => s.id === id)
  const t = isFa
    ? { play: 'پخش', pause: 'توقف', prev: 'رویداد پیشین', next: 'رویداد بعدی', scrub: 'گاه‌نما', sources: 'منابع', cert: 'میزان قطعیت', legend: 'راهنما', hint: 'کلیدهای جهت‌نما، Home/End و فاصله کار می‌کنند.', map: label ?? 'نقشهٔ متحرک' }
    : { play: 'Play', pause: 'Pause', prev: 'Previous event', next: 'Next event', scrub: 'Timeline', sources: 'Sources', cert: 'Certainty', legend: 'Legend', hint: 'Arrow keys, Home/End and Space work.', map: label ?? 'Animated map' }

  return (
    <section aria-label={t.map} className="glass rounded-2xl p-3 md:p-4" onKeyDown={onKey} tabIndex={0}>
      <div className="grid gap-4 lg:grid-cols-[1.6fr_1fr]">
        <figure className="relative overflow-hidden rounded-xl">
          <svg viewBox={`0 0 ${BASEMAP.width} ${BASEMAP.height}`} role="img" aria-label={`${t.map}: ${ev.title[locale]}`} className="w-full h-auto">
            <defs>
              <marker id="fk-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M0 0L10 5L0 10z" fill={KIND_COLOR[ev.kind]} />
              </marker>
              <radialGradient id="fk-glow"><stop offset="0%" stopColor="#f2d68b" stopOpacity=".55" /><stop offset="100%" stopColor="#f2d68b" stopOpacity="0" /></radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="#0a1636" />
            <path d={LAND_PATH} fill="#1b2a52" stroke="#d9b45a" strokeOpacity=".25" strokeWidth=".6" />
            {PLACES.map((p) => { const [px, py] = project(p.c); return (
              <g key={p.name.en} aria-hidden="true">
                <circle cx={px} cy={py} r="1.8" fill="#f5f0e6" fillOpacity=".5" />
                <text x={px + 4} y={py + 10} fill="#f5f0e6" fillOpacity=".45" fontSize="9">{p.name[locale]}</text>
              </g>
            ) })}
            {events.slice(0, i).map((e) => e.route && (
              <path key={e.id} d={pathOf(e.route)} fill="none" stroke={KIND_COLOR[e.kind]} strokeOpacity=".22" strokeWidth="1.4" strokeDasharray="3 3" />
            ))}
            {events.map((e, n) => { const [ex, ey] = project(e.coord); return (
              <circle key={e.id} cx={ex} cy={ey} r={n === i ? 0 : 3} fill={KIND_COLOR[e.kind]} fillOpacity={n < i ? 0.75 : 0.2}
                className="cursor-pointer" onClick={() => go(n)}>
                <title>{`${year(e.year)} · ${e.title[locale]}`}</title>
              </circle>
            ) })}
            {ev.route && (
              <motion.path key={`r-${ev.id}`} d={pathOf(ev.route)} fill="none" stroke={KIND_COLOR[ev.kind]} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#fk-arrow)"
                initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.2, ease: 'easeInOut' }} />
            )}
            <motion.g key={`m-${ev.id}`} initial={reduce ? false : { opacity: 0, scale: 0.4 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: reduce ? 0 : ev.route ? 1.8 : 0.1, duration: 0.5 }} style={{ transformOrigin: `${x}px ${y}px` }}>
              <circle cx={x} cy={y} r="22" fill="url(#fk-glow)" />
              {!reduce && <motion.circle cx={x} cy={y} r="7" fill="none" stroke={KIND_COLOR[ev.kind]} strokeWidth="1.5" animate={{ r: [7, 16], opacity: [0.9, 0] }} transition={{ repeat: Infinity, duration: 1.8 }} />}
              <circle cx={x} cy={y} r="6" fill={KIND_COLOR[ev.kind]} stroke="#0a1636" strokeWidth="1.5" />
            </motion.g>
            <text x={isFa ? BASEMAP.width - 16 : 16} y="34" textAnchor={isFa ? 'end' : 'start'} fill="#f2d68b" fontSize="26" fontWeight="900">{year(ev.year)}</text>
          </svg>
          <figcaption className="text-xs text-ivory/50 mt-2 px-1">
            {isFa ? 'مسیرها طرح ویراستاری و تقریبی‌اند، نه ردّ دقیق جغرافیایی. خطوط ساحلی: Natural Earth (مالکیت عمومی).' : 'Routes are approximate editorial sketches, not exact tracks. Coastlines: Natural Earth (public domain).'}
          </figcaption>
        </figure>

        <div className="flex flex-col gap-3" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.article key={ev.id} initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>
              <p className="flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full px-3 py-1 font-bold text-night" style={{ background: KIND_COLOR[ev.kind] }}>{KIND_LABEL[locale][ev.kind]}</span>
                <span className="text-ivory/60">{ev.when[locale]}</span>
                <span className="text-ivory/40">{isFa ? `${faNum(i + 1)} از ${faNum(events.length)}` : `${i + 1} of ${events.length}`}</span>
              </p>
              <h3 className="mt-2 text-xl font-black text-gilded leading-9">{ev.title[locale]}</h3>
              <p className="mt-2 leading-8 text-ivory/85">{ev.body[locale]}</p>
              <p className={`mt-3 rounded-xl border px-3 py-2 text-sm leading-7 ${CERT_TONE[ev.certainty]}`}>
                <strong>{t.cert}: {CERT[locale][ev.certainty]}</strong>
                {ev.certaintyNote && <span className="block text-ivory/75">{ev.certaintyNote[locale]}</span>}
              </p>
              <p className="mt-3 text-xs text-ivory/55 leading-6">
                {t.sources}: {ev.sources.map((s, n) => { const src = srcName(s); return (
                  <span key={s}>{n > 0 && ' · '}<a href={`#src-${s}`} className="text-gold hover:underline">{src ? `${src.author}, ${src.year}` : s}</a></span>
                ) })}
              </p>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button type="button" onClick={() => go(i - 1)} disabled={i === 0} aria-label={t.prev} className="glass rounded-full size-11 disabled:opacity-40 hover:border-gold">{isFa ? '→' : '←'}</button>
        <button type="button" onClick={() => { if (i >= last) setI(0); setPlaying((p) => !p) }} aria-pressed={playing} className="rounded-full px-6 min-h-11 font-black text-night bg-gradient-to-br from-gold to-[#9c6f1f]">{playing ? `❚❚ ${t.pause}` : `▶ ${t.play}`}</button>
        <button type="button" onClick={() => go(i + 1)} disabled={i === last} aria-label={t.next} className="glass rounded-full size-11 disabled:opacity-40 hover:border-gold">{isFa ? '←' : '→'}</button>
        <label className="flex-1 min-w-48 flex items-center gap-3 text-sm text-ivory/60">
          <span className="sr-only">{t.scrub}</span>
          <input type="range" min={0} max={last} step={1} value={i} onChange={(e) => { setPlaying(false); go(Number(e.target.value)) }}
            aria-valuetext={`${year(ev.year)} · ${ev.title[locale]}`} className="w-full accent-[#d9b45a] min-h-11" dir={isFa ? 'rtl' : 'ltr'} />
        </label>
      </div>
      <ol className="mt-3 flex gap-1 overflow-x-auto pb-2 text-xs" aria-label={t.scrub}>
        {events.map((e, n) => (
          <li key={e.id}>
            <button type="button" onClick={() => { setPlaying(false); go(n) }} aria-current={n === i ? 'step' : undefined}
              className={`whitespace-nowrap rounded-full border px-3 min-h-11 ${n === i ? 'border-gold bg-gold/15 text-gold-bright' : 'border-ivory/10 text-ivory/60 hover:border-gold/50'}`}>
              <span className="inline-block size-2 rounded-full me-1" style={{ background: KIND_COLOR[e.kind] }} aria-hidden="true" />{year(e.year)}
            </button>
          </li>
        ))}
      </ol>
      <p className="mt-2 flex flex-wrap gap-3 text-xs text-ivory/55" aria-label={t.legend}>
        {(Object.keys(KIND_COLOR) as EventKind[]).map((k) => (
          <span key={k} className="inline-flex items-center gap-1"><span className="size-2.5 rounded-full" style={{ background: KIND_COLOR[k] }} aria-hidden="true" />{KIND_LABEL[locale][k]}</span>
        ))}
        <span className="text-ivory/40">{t.hint}</span>
      </p>
    </section>
  )
}
