import { useReducedMotion } from 'motion/react'
import { useCallback, useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import { phases, terrain, units, type BattleUnitDef, type Phase, type Side, type UnitState, type XY } from '../../data/carrhae/battle'
import type { FeaturedSource } from '../../data/featured/types'
import type { Locale } from '../../lib/i18n'

const W = 1280
const H = 720
const MOVE_S = 1.6
const HOLD_S = 6.6
const COLOR: Record<Side, { main: string; soft: string; ink: string }> = {
  rome: { main: '#d0533f', soft: '#f1a38f', ink: '#3b0f0a' },
  parthia: { main: '#e2b453', soft: '#f6dc9a', ink: '#3a2a07' },
}
const CERT: Record<Locale, Record<Phase['certainty'], string>> = {
  fa: { secure: 'قطعی', probable: 'محتمل', disputed: 'محل بحث' },
  en: { secure: 'secure', probable: 'probable', disputed: 'disputed' },
}

const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2)
const clamp = (v: number) => Math.max(0, Math.min(1, v))
const lerp = (a: number, b: number, t: number) => a + (b - a) * t
const lerpXY = (a: XY, b: XY, t: number): XY => [lerp(a[0], b[0], t), lerp(a[1], b[1], t)]
const opacityOf = (s: UnitState) => (s.gone ? 0 : s.hidden ? 0.26 : 1)

/** Draw one unit glyph centred on 0,0. */
function Glyph({ u }: { u: BattleUnitDef }) {
  const c = COLOR[u.side]
  switch (u.kind) {
    case 'legion': {
      // hollow square: twelve cohorts a side, drawn as six blocks a side
      const blocks: ReactNode[] = []
      for (let k = 0; k < 6; k++) {
        const o = -75 + k * 25
        blocks.push(<rect key={`t${k}`} x={o + 2} y={-62} width={21} height={12} />, <rect key={`b${k}`} x={o + 2} y={50} width={21} height={12} />)
        if (k > 0 && k < 5) blocks.push(<rect key={`l${k}`} x={-88} y={-62 + k * 22} width={12} height={18} />, <rect key={`r${k}`} x={76} y={-62 + k * 22} width={12} height={18} />)
      }
      return <g fill={c.main} stroke={c.soft} strokeWidth={1.2}>{blocks}</g>
    }
    case 'cohort':
      return <g fill={c.main} stroke={c.soft} strokeWidth={1.2}>{[-24, 0, 24].map((x) => <rect key={x} x={x - 10} y={-9} width={20} height={18} />)}</g>
    case 'light':
      return <g fill={c.soft}>{[[-22, -6], [-8, 6], [6, -8], [20, 4], [0, 12]].map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r={4.5} />)}</g>
    case 'gallic':
      return <g fill={c.soft} stroke={c.main} strokeWidth={1.5}>{[[-26, 6], [-6, -6], [14, 6], [-16, 16], [4, 18]].map(([x, y]) => <path key={`${x}${y}`} d={`M${x} ${y + 9} l9 -18 l9 18 z`} />)}</g>
    case 'cataphract':
      return (
        <g>
          {[[-30, -10], [-10, -10], [10, -10], [30, -10], [-20, 10], [0, 10], [20, 10]].map(([x, y]) => (
            <g key={`${x}${y}`} transform={`translate(${x} ${y})`}>
              <path d="M0 -10 L9 0 L0 10 L-9 0 Z" fill="#9fb3c8" stroke={c.main} strokeWidth={1.6} />
              <line x1={0} y1={-10} x2={0} y2={-24} stroke="#dfe7ef" strokeWidth={1.6} />
            </g>
          ))}
        </g>
      )
    case 'archer':
      return (
        <g>
          {[[-22, -8], [0, -14], [22, -8], [-12, 10], [12, 10]].map(([x, y]) => (
            <g key={`${x}${y}`} transform={`translate(${x} ${y})`}>
              <circle r={5.5} fill={c.main} />
              <path d="M7 -8 Q15 0 7 8" fill="none" stroke={c.soft} strokeWidth={1.8} />
            </g>
          ))}
        </g>
      )
    case 'camel':
      return (
        <g fill="#c98b3c" stroke={c.soft} strokeWidth={1}>
          {[-26, 0, 26].map((x) => <path key={x} transform={`translate(${x} 0)`} d="M-11 6 L-11 -1 Q-7 -9 -3 -2 Q0 -11 4 -2 L8 -4 L11 -8 L12 -3 L9 1 L9 6 Z" />)}
        </g>
      )
    case 'commander':
      return (
        <g>
          <line x1={0} y1={14} x2={0} y2={-22} stroke={c.soft} strokeWidth={2} />
          <path d="M0 -22 L22 -15 L0 -8 Z" fill={c.main} stroke={c.soft} strokeWidth={1} />
          <circle r={5} cy={14} fill={c.soft} />
        </g>
      )
    case 'wounded':
      return <g stroke="#b8b0a4" strokeWidth={3}>{[[-20, 0], [0, -8], [20, 0], [-10, 12], [10, 12]].map(([x, y]) => <g key={`${x}${y}`} transform={`translate(${x} ${y})`}><line x1={-5} y1={0} x2={5} y2={0} /><line x1={0} y1={-5} x2={0} y2={5} /></g>)}</g>
  }
}

/** Where a unit's label sits relative to its centre. */
const labelDy = (u: BattleUnitDef) => (u.kind === 'legion' ? -66 : u.id === 'ha-s' ? -30 : 34)

function Arrow({ from, to, color, progress, dashed }: { from: XY; to: XY; color: string; progress: number; dashed?: boolean }) {
  const [x1, y1] = from
  const [x2, y2] = to
  const mx = (x1 + x2) / 2 + (y2 - y1) * 0.18
  const my = (y1 + y2) / 2 - (x2 - x1) * 0.18
  const len = Math.hypot(x2 - x1, y2 - y1) * 1.08
  return (
    <path d={`M${x1} ${y1} Q${mx} ${my} ${x2} ${y2}`} fill="none" stroke={color} strokeWidth={4} strokeLinecap="round" markerEnd="url(#carrhae-head)" opacity={0.75}
      strokeDasharray={dashed ? '10 10' : `${len} ${len}`} strokeDashoffset={dashed ? 0 : len * (1 - progress)} />
  )
}

/** Arrow volleys (or arrow bundles on a resupply run) travelling from one unit to another. */
function Volley({ from, to, clock, strength, color, still }: { from: XY; to: XY; clock: number; strength: number; color: string; still: boolean }) {
  if (strength <= 0) return null
  const ang = Math.atan2(to[1] - from[1], to[0] - from[0]) * (180 / Math.PI)
  if (still) return <line x1={from[0]} y1={from[1]} x2={to[0]} y2={to[1]} stroke={color} strokeWidth={2} strokeDasharray="3 9" opacity={0.8 * strength} />
  return (
    <g opacity={strength}>
      {[0, 1, 2, 3, 4, 5].map((k) => {
        const f = (clock * 0.55 + k / 6) % 1
        const [x, y] = lerpXY(from, to, f)
        const arc = Math.sin(f * Math.PI) * -26
        return (
          <g key={k} transform={`translate(${x} ${y + arc}) rotate(${ang})`} opacity={Math.sin(f * Math.PI)}>
            <line x1={-12} y1={0} x2={8} y2={0} stroke={color} strokeWidth={2} />
            <path d="M8 -3.5 L14 0 L8 3.5 Z" fill={color} />
          </g>
        )
      })}
    </g>
  )
}

export interface CarrhaeFrame { phase: number; t: number; clock: number }
declare global { interface Window { __carrhae?: (f: CarrhaeFrame) => Promise<void> } }

export function CarrhaeBattle({ locale, sources, render = false, id = 'carrhae-battle' }: { locale: Locale; sources?: FeaturedSource[]; render?: boolean; id?: string }) {
  const reduce = (useReducedMotion() ?? false) && !render
  const isFa = locale === 'fa'
  const uid = useId().replace(/:/g, '')
  const num = (n: number) => (isFa ? n.toLocaleString('fa-IR') : String(n))
  const [i, setI] = useState(0)
  const [t, setT] = useState(1)
  const [clock, setClock] = useState(0)
  const [playing, setPlaying] = useState(false)
  const held = useRef(0)
  const boxRef = useRef<HTMLDivElement>(null)
  const startedOnView = useRef(false)

  const go = useCallback((n: number) => {
    const k = Math.max(0, Math.min(phases.length - 1, n))
    setI(k); setT(reduce ? 1 : 0); held.current = 0
  }, [reduce])

  // the animation loop: transitions always, the clock and auto-advance only while playing
  useEffect(() => {
    if (render || reduce) return
    if (!playing && t >= 1) return
    let raf = 0
    let last = performance.now()
    const tick = (now: number) => {
      const dt = Math.min(0.1, (now - last) / 1000)
      last = now
      setT((v) => (v < 1 ? clamp(v + dt / MOVE_S) : v))
      if (playing) {
        setClock((c) => c + dt)
        held.current += dt
        if (held.current >= HOLD_S) {
          held.current = 0
          setI((k) => {
            if (k >= phases.length - 1) { setPlaying(false); return k }
            setT(0)
            return k + 1
          })
        }
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [playing, t, render, reduce])

  // start playing the first time the diagram scrolls into view (never with reduced motion)
  useEffect(() => {
    const el = boxRef.current
    if (!el || render || reduce || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !startedOnView.current) { startedOnView.current = true; held.current = 0; setPlaying(true) }
      if (!e.isIntersecting) setPlaying(false)
    }, { threshold: 0.5 })
    io.observe(el)
    return () => io.disconnect()
  }, [render, reduce])

  // deterministic frames for the clip renderer
  useEffect(() => {
    window.__carrhae = (f) => new Promise((res) => {
      setPlaying(false); setI(f.phase); setT(f.t); setClock(f.clock)
      requestAnimationFrame(() => requestAnimationFrame(() => res()))
    })
    return () => { delete window.__carrhae }
  }, [])

  const ph = phases[i]
  const prev = phases[Math.max(0, i - 1)]
  const e = ease(t)
  const pos = (uid2: string): XY => lerpXY(prev.units[uid2].at, ph.units[uid2].at, i === 0 ? 1 : e)
  const opa = (uid2: string) => lerp(opacityOf(prev.units[uid2]), opacityOf(ph.units[uid2]), i === 0 ? 1 : e)
  const fx = (k: string) => (ph.effects?.includes(k as never) ? 1 : 0)
  const fxPrev = (k: string) => (prev.effects?.includes(k as never) && i > 0 ? 1 : 0)
  const fxv = (k: string) => lerp(fxPrev(k), fx(k), e)
  const still = reduce || (!playing && !render)
  const volleyStrength = clamp((t - 0.55) / 0.45)

  const onKey = (ev: KeyboardEvent) => {
    const fwd = isFa ? 'ArrowLeft' : 'ArrowRight'
    const back = isFa ? 'ArrowRight' : 'ArrowLeft'
    if (ev.key === fwd) { ev.preventDefault(); setPlaying(false); go(i + 1) }
    else if (ev.key === back) { ev.preventDefault(); setPlaying(false); go(i - 1) }
    else if (ev.key === ' ' || ev.key === 'k') { ev.preventDefault(); setPlaying((p) => !p) }
    else if (ev.key === 'Home') { ev.preventDefault(); go(0) }
    else if (ev.key === 'End') { ev.preventDefault(); go(phases.length - 1) }
  }
  const font = 'Vazirmatn, system-ui, sans-serif'
  const dir = isFa ? 'rtl' : 'ltr'
  const L = terrain.labels
  const label = (txt: string, x: number, y: number, extra?: { size?: number; color?: string; anchor?: 'start' | 'middle' | 'end'; weight?: number; op?: number }) => (
    <text x={x} y={y} fontFamily={font} fontSize={extra?.size ?? 17} fontWeight={extra?.weight ?? 600} fill={extra?.color ?? '#efe6d2'} textAnchor={extra?.anchor ?? 'middle'} direction={dir}
      stroke="#120e0a" strokeWidth={4} paintOrder="stroke" opacity={extra?.op ?? 1}>{txt}</text>
  )
  const name = (s?: string) => (s ? (sources?.find((x) => x.id === s)?.author.split(',')[0] ?? s) : '')

  const svg = (
    <svg viewBox={`0 0 ${W} ${H}`} width={render ? W : undefined} height={render ? H : undefined} role="img" aria-labelledby={`${uid}-t`} className={render ? 'block' : 'block w-full h-auto rounded-2xl'} style={{ background: '#1b1611' }}>
      <title id={`${uid}-t`}>{`${isFa ? 'نبرد حران' : 'Battle of Carrhae'} — ${ph.title[locale]}: ${ph.caption[locale]}`}</title>
      <defs>
        <radialGradient id={`${uid}-sand`} cx="55%" cy="55%" r="75%">
          <stop offset="0" stopColor="#4a3b27" /><stop offset="0.6" stopColor="#2f2619" /><stop offset="1" stopColor="#17120d" />
        </radialGradient>
        <linearGradient id={`${uid}-river`} x1="0" x2="1"><stop offset="0" stopColor="#2a6f8f" /><stop offset="0.5" stopColor="#5fb1cf" /><stop offset="1" stopColor="#2a6f8f" /></linearGradient>
        <radialGradient id={`${uid}-dust`}><stop offset="0" stopColor="#c9a36b" stopOpacity="0.75" /><stop offset="1" stopColor="#c9a36b" stopOpacity="0" /></radialGradient>
        <radialGradient id={`${uid}-heat`} cx="50%" cy="0%" r="90%"><stop offset="0" stopColor="#ffb347" stopOpacity="0.28" /><stop offset="1" stopColor="#ffb347" stopOpacity="0" /></radialGradient>
        <marker id="carrhae-head" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="context-stroke" /></marker>
        <filter id={`${uid}-blur`}><feGaussianBlur stdDeviation="18" /></filter>
      </defs>
      {/* ground */}
      <rect width={W} height={H} fill={`url(#${uid}-sand)`} />
      {[140, 230, 330, 450, 560, 660].map((y, k) => <path key={y} d={`M0 ${y} C 300 ${y - 30 + k * 4}, 700 ${y + 34}, 1280 ${y - 12}`} fill="none" stroke="#5a4830" strokeOpacity={0.35} strokeWidth={1.4} />)}
      {/* low rises that hid the Parthian army */}
      {terrain.rises.map(([x, y]) => <ellipse key={x} cx={x} cy={y} rx={120} ry={26} fill="#5b4a31" opacity={0.55} />)}
      {/* Sinnaca hills */}
      {[0, 1, 2].map((k) => <ellipse key={k} cx={terrain.sinnaca[0]} cy={terrain.sinnaca[1]} rx={150 - k * 40} ry={62 - k * 17} fill="none" stroke="#8a7350" strokeWidth={2} opacity={0.75} />)}
      <ellipse cx={terrain.sinnaca[0]} cy={terrain.sinnaca[1]} rx={150} ry={62} fill="#6b5838" opacity={0.35} />
      {label(L.sinnaca[locale], terrain.sinnaca[0], terrain.sinnaca[1] + 88, { color: '#e6d3ad' })}
      {/* sandy hillock where Publius made his stand */}
      <ellipse cx={terrain.hillock[0]} cy={terrain.hillock[1]} rx={46} ry={18} fill="#8a7046" opacity={0.6} />
      {label(L.hillock[locale], terrain.hillock[0], terrain.hillock[1] + 44, { size: 14, color: '#d9c49b', weight: 500 })}
      {/* Balikh */}
      <path d={`M${terrain.river.map(([x, y]) => `${x} ${y}`).join(' L')}`} fill="none" stroke={`url(#${uid}-river)`} strokeWidth={14} strokeLinejoin="round" opacity={0.9} />
      <path d={`M${terrain.river.map(([x, y]) => `${x} ${y}`).join(' L')}`} fill="none" stroke="#bfe6f2" strokeWidth={2} strokeDasharray="14 22" opacity={0.5} />
      <g transform={`translate(${terrain.river[3][0] - 26} ${terrain.river[3][1] + 40}) rotate(-86)`}>{label(L.river[locale], 0, 0, { color: '#bfe6f2', size: 16 })}</g>
      {/* Carrhae */}
      <g transform={`translate(${terrain.carrhae[0]} ${terrain.carrhae[1]})`}>
        <circle r={30} fill="#3a2f22" stroke="#d8c08a" strokeWidth={3} />
        {[0, 60, 120, 180, 240, 300].map((a) => <rect key={a} x={-5} y={-36} width={10} height={10} fill="#d8c08a" transform={`rotate(${a})`} />)}
      </g>
      {label(L.carrhae[locale], terrain.carrhae[0], terrain.carrhae[1] + 58, { color: '#f3dfa8', size: 18, weight: 700 })}
      {label(L.south[locale], 560, 712, { size: 14, color: '#bba985', weight: 500 })}
      {/* north arrow */}
      <g transform="translate(1236 110)"><path d="M0 -22 L9 8 L0 2 L-9 8 Z" fill="#e2b453" />{label(isFa ? 'شمال' : 'N', 0, 30, { size: 13 })}</g>
      <rect width={W} height={H} fill={`url(#${uid}-heat)`} opacity={fxv('heat')} />

      {/* movement arrows */}
      {i > 0 && units.map((u) => {
        const a = prev.units[u.id]; const b = ph.units[u.id]
        if (a.gone || b.gone || Math.hypot(b.at[0] - a.at[0], b.at[1] - a.at[1]) < 60) return null
        return <Arrow key={`m-${u.id}`} from={a.at} to={b.at} color={COLOR[u.side].soft} progress={e} />
      })}
      {/* dust */}
      <ellipse cx={940} cy={320} rx={230} ry={150} fill={`url(#${uid}-dust)`} opacity={fxv('dust')} filter={`url(#${uid}-blur)`} />
      {/* volleys and resupply */}
      {ph.volleys?.map(([a, b]) => <Volley key={`v-${a}-${b}`} from={pos(a)} to={pos(b)} clock={clock} strength={volleyStrength} color="#f6dc9a" still={still} />)}
      {ph.resupply?.map(([a, b]) => <Volley key={`r-${a}-${b}`} from={pos(a)} to={pos(b)} clock={clock * 0.7} strength={volleyStrength} color="#ffb347" still={still} />)}
      {/* drums */}
      {fx('drums') > 0 && units.filter((u) => u.side === 'parthia' && !ph.units[u.id].gone && !ph.units[u.id].hidden).map((u) => {
        const [x, y] = pos(u.id)
        return [0, 1, 2].map((k) => {
          const f = still ? (k + 1) / 4 : ((clock * 0.8 + k / 3) % 1)
          return <circle key={`d-${u.id}-${k}`} cx={x} cy={y} r={20 + f * 70} fill="none" stroke="#e2b453" strokeWidth={2} opacity={(1 - f) * 0.6 * e} />
        })
      })}
      {/* units */}
      {units.map((u) => {
        const o = opa(u.id)
        if (o <= 0.01) return null
        const [x, y] = pos(u.id)
        const isLegion = u.kind === 'legion'
        // ghosted (still unseen) units carry no label, and a unit sitting inside the square leaves the label to the square
        const sq = pos('square')
        const crowded = u.id !== 'square' && opa('square') > 0.5 && Math.hypot(x - sq[0], y - sq[1]) < 110
        const showLabel = o > 0.6 && !crowded
        return (
          <g key={u.id} transform={`translate(${x} ${y})`} opacity={o}>
            <Glyph u={u} />
            {showLabel && label(u.label[locale], 0, labelDy(u), { size: isLegion ? 17 : 15, color: COLOR[u.side].soft, weight: 700 })}
          </g>
        )
      })}
      {ph.marker && t > 0.6 && (
        <g transform={`translate(${ph.marker.at[0]} ${ph.marker.at[1]})`} opacity={clamp((t - 0.6) / 0.4)}>
          <circle r={16} fill="none" stroke="#ff6b5a" strokeWidth={3} />
          <path d="M-9 -9 L9 9 M9 -9 L-9 9" stroke="#ff6b5a" strokeWidth={3} />
          {label(ph.marker.label[locale], 0, -26, { size: 15, color: '#ffb0a5', weight: 700 })}
        </g>
      )}
      <rect width={W} height={H} fill="#0a1030" opacity={fxv('night') * 0.5} pointerEvents="none" />

      {/* legend */}
      <g transform={isFa ? 'translate(1100 450)' : 'translate(24 450)'}>
        <rect x={0} y={0} width={156} height={160} rx={12} fill="#120e0a" opacity={0.72} />
        {([['cataphract', 'parthia', isFa ? 'زره‌پوش' : 'Cataphracts'], ['archer', 'parthia', isFa ? 'کماندار سوار' : 'Horse archers'], ['camel', 'parthia', isFa ? 'شتر تیر' : 'Arrow camels'], ['cohort', 'rome', isFa ? 'پیادهٔ رومی' : 'Legionaries'], ['gallic', 'rome', isFa ? 'سوار گل' : 'Gallic horse']] as const).map(([k, side, txt], n) => (
          <g key={k} transform={`translate(0 ${24 + n * 28})`}>
            <g transform={`translate(${isFa ? 124 : 32} 0) scale(0.42)`}><Glyph u={{ id: k, kind: k, side, label: { fa: '', en: '' } }} /></g>
            {label(txt, isFa ? 98 : 58, 5, { size: 13, anchor: 'start', weight: 500 })}
          </g>
        ))}
      </g>

      {/* header and caption, as HTML so Persian wraps and shapes properly */}
      <foreignObject x={0} y={0} width={W} height={84}>
        <div dir={dir} style={{ fontFamily: font, color: '#f4ead5', padding: '14px 26px', display: 'flex', alignItems: 'baseline', gap: 16, background: 'linear-gradient(#120e0aee, #120e0a00)' }}>
          <span style={{ fontSize: 16, color: '#e2b453', fontWeight: 700 }}>{isFa ? 'نبرد حران · ۵۳ پ.م.' : 'Carrhae · 53 BCE'}</span>
          <span style={{ fontSize: 26, fontWeight: 900 }}>{num(i + 1)}. {ph.title[locale]}</span>
          <span style={{ fontSize: 16, color: '#cbbd9f' }}>{ph.when[locale]}</span>
          <span style={{ marginInlineStart: 'auto', fontSize: 15, color: '#cbbd9f' }}>{num(i + 1)} / {num(phases.length)}</span>
        </div>
      </foreignObject>
      <foreignObject x={0} y={H - 112} width={W} height={112}>
        <div dir={dir} style={{ fontFamily: font, color: '#f4ead5', margin: '0 26px', padding: '12px 20px', background: '#120e0ad9', borderRadius: 14, borderInlineStart: '4px solid #e2b453', fontSize: 21, lineHeight: 1.6, fontWeight: 500 }}>
          {ph.caption[locale]}
          <span style={{ display: 'block', fontSize: 12, color: '#a99c80', marginTop: 2 }}>{L.schematic[locale]} · {isFa ? 'منبع اصلی: پلوتارک، کراسوس' : 'Main source: Plutarch, Crassus'}</span>
        </div>
      </foreignObject>
      {/* phase progress */}
      <g transform={`translate(26 ${H - 4})`}>
        {phases.map((p, k) => <rect key={p.id} x={k * ((W - 52) / phases.length)} y={-4} width={(W - 52) / phases.length - 4} height={4} rx={2} fill={k < i || (k === i && t >= 1) ? '#e2b453' : k === i ? '#a8843a' : '#4a3e2c'} />)}
      </g>
    </svg>
  )

  if (render) return <div id={id} style={{ width: W, height: H }}>{svg}</div>

  const btn = 'glass rounded-full px-4 min-h-11 inline-flex items-center gap-2 text-sm hover:border-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold'
  return (
    <figure id={id} className="glass rounded-3xl p-3 md:p-5">
      <div ref={boxRef} tabIndex={0} onKeyDown={onKey} aria-roledescription={isFa ? 'نمایش گام‌به‌گام نبرد' : 'step-by-step battle'} aria-label={isFa ? 'نمودار نبرد حران. با کلیدهای پیکان گام بعد و قبل، با فاصله پخش و توقف.' : 'Carrhae battle diagram. Arrow keys step forward and back; Space plays and pauses.'}
        className="rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold overflow-hidden">
        {svg}
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2" dir={dir}>
        <button type="button" className={btn} onClick={() => { setPlaying(false); go(i - 1) }} disabled={i === 0} aria-label={isFa ? 'گام قبل' : 'Previous step'}>{isFa ? '→' : '←'}</button>
        <button type="button" className={`${btn} font-bold`} aria-pressed={playing} onClick={() => { if (i === phases.length - 1 && !playing) go(0); held.current = 0; setPlaying((p) => !p) }}>
          {playing ? (isFa ? 'توقف' : 'Pause') : (isFa ? 'پخش' : 'Play')}
        </button>
        <button type="button" className={btn} onClick={() => { setPlaying(false); go(i + 1) }} disabled={i === phases.length - 1} aria-label={isFa ? 'گام بعد' : 'Next step'}>{isFa ? '←' : '→'}</button>
        <ol className="flex flex-wrap gap-1 ms-2" aria-label={isFa ? 'گام‌ها' : 'Steps'}>
          {phases.map((p, k) => (
            <li key={p.id}>
              <button type="button" onClick={() => { setPlaying(false); go(k) }} aria-current={k === i ? 'step' : undefined} title={p.title[locale]}
                className={`min-h-11 min-w-11 rounded-full text-sm border ${k === i ? 'bg-gold text-night border-gold font-bold' : 'border-ivory/20 hover:border-gold'}`}>
                {num(k + 1)}<span className="sr-only"> {p.title[locale]}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
      <figcaption className="mt-4" aria-live="polite">
        <p className="text-sm text-turquoise-soft">
          {isFa ? 'گام' : 'Step'} {num(i + 1)} / {num(phases.length)} · {ph.when[locale]} ·{' '}
          <span className={ph.certainty === 'disputed' ? 'text-red-300' : ph.certainty === 'probable' ? 'text-amber-200' : 'text-emerald-300'}>{CERT[locale][ph.certainty]}</span>
        </p>
        <h3 className="text-2xl font-black mt-1">{ph.title[locale]}</h3>
        {ph.body[locale].map((p, k) => <p key={k} className="read mt-2 text-ivory/85">{p}</p>)}
        {ph.certaintyNote && <p className="mt-2 text-sm leading-7 text-ivory/60">{ph.certaintyNote[locale]}</p>}
        <p className="mt-2 text-xs text-ivory/50">{isFa ? 'منابع:' : 'Sources:'} {ph.sources.map((s, k) => <span key={s}>{k > 0 && ' · '}<a href={`#src-${s}`} className="text-gold hover:underline">{name(s)}</a></span>)}</p>
        {reduce && <p className="mt-2 text-xs text-ivory/50">{isFa ? 'حرکت کاهش‌یافته فعال است: نمودار خودکار پخش نمی‌شود و هر گام بی‌پویانمایی نشان داده می‌شود.' : 'Reduced motion is on: the diagram does not autoplay and each step is shown without animation.'}</p>}
      </figcaption>
    </figure>
  )
}
