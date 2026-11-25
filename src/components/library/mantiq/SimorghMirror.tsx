import { useEffect, useRef, useState } from 'react'
import { baytAnchor } from '../../../data/library/mantiq/sections'
import './sanan.css'
import './simorgh.css'

const fa = (n: number) => n.toLocaleString('fa-IR')

/** The turns of the ending, each at the bayt that tells it (Ganjoor 12051 and 12054). */
const STEPS = [
  { part: 12051, n: 22, t: 'از جهانی پر مرغ، تنها سی مرغ می‌رسند' },
  { part: 12051, n: 33, t: 'چاووش عزت بیرون می‌آید و آنان را می‌راند' },
  { part: 12054, n: 18, t: 'در رقعه، هرچه کرده‌اند نوشته است' },
  { part: 12054, n: 33, t: 'این سی مرغ همان سیمرغ است' },
  { part: 12054, n: 43, t: 'پیشگاه، آینه‌ای چون آفتاب است' },
  { part: 12054, n: 56, t: 'سایه در خورشید گم می‌شود' },
] as const

const CX = 520
const CY = 200
const N = 30
// where each of the thirty starts (a loose flock coming in from the east) and where it ends (a ring round the mirror)
const BIRDS = Array.from({ length: N }, (_, i) => {
  const a = (i / N) * Math.PI * 2 - Math.PI / 2
  const row = i % 6
  const col = Math.floor(i / 6)
  return {
    x0: 1000 - col * 34 + (row % 2) * 14,
    y0: 70 + row * 46 + (col % 2) * 12,
    x1: Math.round(CX + Math.cos(a) * 158),
    y1: Math.round(CY + Math.sin(a) * 158),
    xr: Math.round(CX - Math.cos(a) * 82),
    yr: Math.round(CY + Math.sin(a) * 82),
  }
})
const WING = 'M-11,0 Q-5.5,-7.5 0,0 Q5.5,-7.5 11,0'

/** The ending: thirty birds come to the court and see themselves in its mirror. Plays once seen. */
export function SimorghMirror() {
  const ref = useRef<HTMLElement>(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') { setOn(true); return }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect() } }, { threshold: 0.3 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <figure ref={ref} className={on ? 'smr is-on' : 'smr'} aria-labelledby="smr-cap">
      <svg viewBox="0 0 1040 400" className="smr-svg" role="img" aria-label="سی مرغ به پیشگاه می‌رسند و در آینه سیمرغ را می‌بینند">
        <defs>
          <radialGradient id="smr-sky" cx=".5" cy=".5" r=".75">
            <stop offset="0" stopColor="#3a3160" />
            <stop offset=".6" stopColor="#1a2140" />
            <stop offset="1" stopColor="#0c1026" />
          </radialGradient>
          <radialGradient id="smr-glass" cx=".42" cy=".38" r=".7">
            <stop offset="0" stopColor="#fff8e2" />
            <stop offset=".55" stopColor="#e8d6a6" />
            <stop offset="1" stopColor="#a8894a" />
          </radialGradient>
          <clipPath id="smr-clip"><circle cx={CX} cy={CY} r="118" /></clipPath>
        </defs>
        <rect width="1040" height="400" rx="24" fill="url(#smr-sky)" />
        <g className="smr-rays" stroke="#f6dc96">
          {Array.from({ length: 24 }, (_, i) => {
            const a = (i / 24) * Math.PI * 2
            return <line key={i} x1={CX + Math.cos(a) * 184} y1={CY + Math.sin(a) * 184} x2={CX + Math.cos(a) * 232} y2={CY + Math.sin(a) * 232} />
          })}
        </g>
        <circle cx={CX} cy={CY} r="124" fill="none" stroke="#d9b45a" strokeWidth="6" />
        <circle cx={CX} cy={CY} r="118" fill="url(#smr-glass)" />
        <g clipPath="url(#smr-clip)" className="smr-reflect">
          {BIRDS.map((b, i) => (
            <path key={i} d={WING} transform={`translate(${b.xr} ${b.yr}) scale(-1 1)`} />
          ))}
          <text x={CX} y={CY + 12} textAnchor="middle" className="smr-name">سیمرغ</text>
        </g>
        <g className="smr-birds">
          {BIRDS.map((b, i) => (
            <path
              key={i}
              d={WING}
              style={{ ['--x0' as string]: `${b.x0}px`, ['--y0' as string]: `${b.y0}px`, ['--x1' as string]: `${b.x1}px`, ['--y1' as string]: `${b.y1}px`, ['--i' as string]: i }}
            />
          ))}
        </g>
        <text x="180" y="70" textAnchor="middle" className="smr-label">سی مرغ</text>
        <text x="180" y="100" textAnchor="middle" className="smr-sub">از هزاران، سی به درگاه آمدیم</text>
      </svg>
      <figcaption id="smr-cap">
        <ol className="sn-steps">
          {STEPS.map((s, i) => (
            <li key={`${s.part}-${s.n}`}>
              <a href={`#${baytAnchor(s.part, s.n)}`}><b>{fa(i + 1)}</b> {s.t} <small>بیت {fa(s.n)}</small></a>
            </li>
          ))}
        </ol>
        <p className="sn-note">سی مرغ به پیشگاه می‌رسند و در آینهٔ آن، خود را سیمرغ می‌بینند. چیدن مرغان به گرد آینه نقش این سایت است، نه وصف عطار؛ هر شماره به بیتی می‌رود که آن گام را می‌گوید.</p>
      </figcaption>
    </figure>
  )
}
