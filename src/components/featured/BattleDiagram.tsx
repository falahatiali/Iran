import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import type { BattleDiagram as Diagram, Certainty, FeaturedSource, Side } from '../../data/featured/types'
import type { Locale } from '../../lib/i18n'

const SIDE: Record<Side, string> = { persian: '#e0a84a', greek: '#7dd3c0' }
const CERT: Record<Locale, Record<Certainty, string>> = {
  fa: { secure: 'قطعی', probable: 'محتمل', disputed: 'محل بحث' },
  en: { secure: 'secure', probable: 'probable', disputed: 'disputed' },
}
const pathOf = (pts: [number, number][]) => pts.map(([x, y], n) => `${n ? 'L' : 'M'}${x} ${y}`).join(' ')

/** Schematic, phase-by-phase battle diagram. Unit positions are illustrative, not surveyed. */
export function BattleDiagram({ battle, sources, locale }: { battle: Diagram; sources: FeaturedSource[]; locale: Locale }) {
  const isFa = locale === 'fa'
  const reduce = useReducedMotion()
  const [i, setI] = useState(0)
  const [playing, setPlaying] = useState(false)
  const ph = battle.phases[i]
  useEffect(() => {
    if (!playing) return
    if (i >= battle.phases.length - 1) { setPlaying(false); return }
    const t = window.setTimeout(() => setI((n) => n + 1), reduce ? 6000 : 4200)
    return () => window.clearTimeout(t)
  }, [playing, i, battle.phases.length, reduce])
  const author = (id: string) => sources.find((s) => s.id === id)?.author ?? id
  const num = (n: number) => (isFa ? n.toLocaleString('fa-IR') : String(n))

  return (
    <figure className="glass rounded-3xl p-4 md:p-6" aria-labelledby={`bd-${battle.id}`}>
      <figcaption>
        <h3 id={`bd-${battle.id}`} className="text-2xl font-black text-gilded">{battle.title[locale]}</h3>
        <p className="text-sm text-ivory/60 mt-1">{battle.when[locale]} · {isFa ? 'نمودار طرح‌وار؛ جای دقیق یگان‌ها محل بحث است' : 'Schematic; exact positions are debated'}</p>
      </figcaption>
      <div className="mt-4 grid md:grid-cols-[3fr_2fr] gap-5 items-start">
        <svg viewBox="0 0 100 60" className="w-full rounded-2xl bg-[#0a1636]" role="img" aria-label={`${battle.title[locale]}: ${ph.title[locale]}`}>
          {battle.land.map((d, n) => <path key={n} d={d} fill="#1b2a52" stroke="#d9b45a" strokeOpacity=".3" strokeWidth=".25" />)}
          {battle.labels.map((l) => (
            <text key={l.text.en} x={l.at[0]} y={l.at[1]} fontSize="2.6" textAnchor="middle" fill={l.tone === 'sea' ? '#93c5fd' : '#f5f0e6'} fillOpacity=".55" fontStyle={l.tone === 'sea' ? 'italic' : undefined}>{l.text[locale]}</text>
          ))}
          {ph.arrows?.map((a, n) => (
            <motion.path key={`${ph.id}-${n}`} d={pathOf(a.path)} fill="none" stroke={SIDE[a.side]} strokeWidth=".7" strokeDasharray="1.6 1" strokeLinecap="round"
              initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.6, delay: 0.6 }} />
          ))}
          {ph.units.map((u) => (
            <motion.g key={u.id} initial={false} animate={{ x: u.at[0], y: u.at[1] }} transition={{ duration: reduce ? 0 : 1.4, ease: 'easeInOut' }}>
              {u.kind === 'fleet'
                ? <path d="M-2.4 -.8 L2.4 -.8 L1.6 1 L-1.6 1 Z" fill={SIDE[u.side]} stroke="#0a1636" strokeWidth=".2" />
                : <rect x="-2.4" y="-1" width="4.8" height="2" rx=".4" fill={SIDE[u.side]} stroke="#0a1636" strokeWidth=".2" />}
              <text y="-1.8" fontSize="2.1" textAnchor="middle" fill="#f5f0e6">{u.label[locale]}</text>
            </motion.g>
          ))}
        </svg>
        <div aria-live="polite">
          <p className="text-sm text-turquoise-soft">{isFa ? 'مرحله' : 'Phase'} {num(i + 1)} / {num(battle.phases.length)} · <span className={ph.certainty === 'disputed' ? 'text-red-300' : ph.certainty === 'probable' ? 'text-amber-200' : 'text-emerald-300'}>{CERT[locale][ph.certainty]}</span></p>
          <h4 className="text-xl font-bold text-ivory mt-1 leading-8">{ph.title[locale]}</h4>
          <p className="mt-2 leading-8 text-ivory/80">{ph.body[locale]}</p>
          {ph.certaintyNote && <p className="mt-2 text-sm leading-7 text-ivory/60">{ph.certaintyNote[locale]}</p>}
          <p className="mt-2 text-xs text-ivory/50">{ph.sources.map((s, n) => <span key={s}>{n > 0 && ' · '}<a href={`#src-${s}`} className="text-gold hover:underline">{author(s)}</a></span>)}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button type="button" onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="glass rounded-full px-4 min-h-11 disabled:opacity-40">{isFa ? 'قبلی' : 'Previous'}</button>
            <button type="button" onClick={() => { if (i >= battle.phases.length - 1) setI(0); setPlaying((p) => !p) }} className="glass rounded-full px-4 min-h-11 border-gold/40">{playing ? (isFa ? 'توقف' : 'Pause') : (isFa ? 'پخش' : 'Play')}</button>
            <button type="button" onClick={() => setI((n) => Math.min(battle.phases.length - 1, n + 1))} disabled={i === battle.phases.length - 1} className="glass rounded-full px-4 min-h-11 disabled:opacity-40">{isFa ? 'بعدی' : 'Next'}</button>
          </div>
          <p className="mt-3 flex gap-4 text-xs text-ivory/60">
            <span className="inline-flex items-center gap-1"><span className="size-2.5 rounded-sm" style={{ background: SIDE.persian }} aria-hidden="true" />{isFa ? 'ایرانیان' : 'Persians'}</span>
            <span className="inline-flex items-center gap-1"><span className="size-2.5 rounded-sm" style={{ background: SIDE.greek }} aria-hidden="true" />{isFa ? 'یونانیان' : 'Greeks'}</span>
          </p>
        </div>
      </div>
    </figure>
  )
}
