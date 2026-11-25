import { useEffect, useRef, useState } from 'react'
import { baytAnchor } from '../../../data/library/mantiq/sections'
import './sanan.css'

const fa = (n: number) => n.toLocaleString('fa-IR')
const PART = 11902

/** The turns of the tale, each at the bayt that tells it (Ganjoor's text of the story, part 11902). */
const STEPS = [
  { n: 12, t: 'خواب: در روم بتی را سجده می‌کند', x: 797, y: 253 },
  { n: 41, t: 'دختر ترسا برقع برمی‌گیرد', x: 499, y: 307 },
  { n: 237, t: 'یک سال خوک‌بانی، کابین دختر', x: 230, y: 262 },
  { n: 317, t: 'مرید پس از چهل شب پیامبر را می‌بیند', x: 244, y: 101 },
  { n: 354, t: 'غسل و خرقه، بازگشت به حجاز', x: 590, y: 59 },
  { n: 401, t: 'دختر ایمان می‌آورد و جان می‌دهد', x: 846, y: 120 },
] as const

// down from the Kaaba into Rum (the fall), then the high road home (the return)
const FALL = 'M890,190 C820,250 720,300 600,306 C480,312 330,300 230,262 C180,244 150,214 150,190'
const RETURN = 'M150,190 C170,120 260,80 400,66 C540,52 700,56 800,92 C850,112 880,150 890,190'

/** The story as one loop: from the Kaaba down to Rum, and back over the top. Draws itself once seen. */
export function SananArc() {
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
    <figure ref={ref} className={on ? 'sn is-on' : 'sn'} aria-labelledby="sn-cap">
      <svg viewBox="0 0 1040 360" className="sn-svg" role="img" aria-label="رفتن شیخ از کعبه به روم و بازگشتش به حجاز">
        <defs>
          <linearGradient id="sn-sky" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0" stopColor="#f6e3b0" />
            <stop offset=".5" stopColor="#6e5a8a" />
            <stop offset="1" stopColor="#1c2440" />
          </linearGradient>
        </defs>
        <rect width="1040" height="360" rx="24" fill="url(#sn-sky)" />
        <g className="sn-stars" fill="#fff">
          <circle cx="60" cy="40" r="1.4" /><circle cx="130" cy="90" r="1" /><circle cx="210" cy="30" r="1.2" />
          <circle cx="300" cy="140" r="1" /><circle cx="90" cy="300" r="1.1" /><circle cx="360" cy="40" r="1" />
        </g>
        {/* the Kaaba, at the bright end */}
        <g className="sn-kaaba" transform="translate(890 190)">
          <rect x="-34" y="-40" width="68" height="62" fill="#1b1410" />
          <rect x="-34" y="-28" width="68" height="7" fill="#d9b45a" />
          <text y="58" textAnchor="middle">کعبه</text>
        </g>
        {/* the monastery of Rum, at the night end */}
        <g className="sn-dayr" transform="translate(150 190)">
          <path d="M-40,22 V-14 H40 V22 Z M-26,-14 A26,26 0 0 1 26,-14 Z" fill="#0f1730" stroke="#c9b6e8" strokeWidth="1.5" />
          <rect x="-6" y="2" width="12" height="20" fill="#c9b6e8" opacity=".55" />
          <text y="58" textAnchor="middle">روم</text>
        </g>
        <path className="sn-road sn-fall" d={FALL} pathLength={1} />
        <path className="sn-road sn-return" d={RETURN} pathLength={1} />
        {STEPS.map((s, i) => (
          <a key={s.n} href={`#${baytAnchor(PART, s.n)}`} className="sn-stn" style={{ ['--i' as string]: i }}>
            <circle cx={s.x} cy={s.y} r="17" />
            <text x={s.x} y={s.y + 6.5} textAnchor="middle">{fa(i + 1)}</text>
          </a>
        ))}
      </svg>
      <figcaption id="sn-cap">
        <ol className="sn-steps">
          {STEPS.map((s, i) => (
            <li key={s.n}>
              <a href={`#${baytAnchor(PART, s.n)}`}><b>{fa(i + 1)}</b> {s.t} <small>بیت {fa(s.n)}</small></a>
            </li>
          ))}
        </ol>
        <p className="sn-note">راه پایین، رفتن از حرم به روم است و راه بالا، بازگشت به حجاز. هر شماره به بیتی می‌رود که آن گام را می‌گوید.</p>
      </figcaption>
    </figure>
  )
}
