import { useEffect, useRef, useState } from 'react'
import { baytAnchor } from '../../../data/library/mantiq/sections'
import './sanan.css'
import './hoopoe.css'

const fa = (n: number) => n.toLocaleString('fa-IR')
const PART = 11875

/**
 * The greetings that open "the gathering of the birds" (Ganjoor 11875, bayts 1–65).
 * The hoopoe is greeted first (bayt 1, beside Solomon) and sits at the centre; each of the other twelve is greeted beside a prophet or sign that the bayt itself names.
 */
const BIRDS = [
  { n: 6, bird: 'موسیچه', sign: 'موسی' },
  { n: 11, bird: 'طوطی', sign: 'خلیل' },
  { n: 16, bird: 'کبک', sign: 'ناقهٔ صالح' },
  { n: 21, bird: 'تنگ‌باز', sign: 'یار غار' },
  { n: 26, bird: 'درّاج', sign: 'عیسی' },
  { n: 31, bird: 'عندلیب', sign: 'داوود' },
  { n: 36, bird: 'طاووس', sign: 'آدم' },
  { n: 41, bird: 'تذرو', sign: 'یوسف' },
  { n: 46, bird: 'قمری', sign: 'یونس' },
  { n: 51, bird: 'فاخته', sign: 'خضر' },
  { n: 56, bird: 'باز', sign: 'ذوالقرنین' },
  { n: 61, bird: 'مرغ زرین', sign: 'آتش' },
] as const

/** The hoopoe's own call, at the bayts that carry it. */
const CALL = [
  { n: 72, t: 'هدهد آشفته به میان جمع می‌آید' },
  { n: 75, t: '«منم برید حضرت و پیک غیب»' },
  { n: 97, t: 'پادشاهی در پس کوه قاف' },
  { n: 98, t: 'نام او سیمرغ، سلطان طیور' },
] as const

const CX = 520
const CY = 254
const RX = 430
const RY = 178
// twelve seats on an ellipse round the hoopoe, starting at the top and running clockwise (right to left reads naturally in RTL)
const SEATS = BIRDS.map((_, i) => {
  const a = -Math.PI / 2 + (i / BIRDS.length) * Math.PI * 2
  return { x: Math.round(CX + Math.cos(a) * RX), y: Math.round(CY + Math.sin(a) * RY) }
})
const WING = 'M-10,0 Q-5,-7 0,0 Q5,-7 10,0'
// the crest: a fan of feathers, each tipped black, as the hoopoe has
const CREST = [-62, -44, -26, -8, 10, 28, 46]

/** The gathering: the hoopoe at the centre, its call spreading in rings to the twelve birds greeted at the opening. */
export function HoopoeCall() {
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
    <figure ref={ref} className={on ? 'hc is-on' : 'hc'} aria-labelledby="hc-cap">
      <svg viewBox="0 0 1040 500" className="hc-svg" role="img" aria-label="هدهد در میان مرغان؛ ندای او تا دوازده مرغی که در آغاز بخش خوشامد گفته می‌شوند می‌رسد">
        <defs>
          <radialGradient id="hc-sky" cx="50%" cy="50%" r="70%">
            <stop offset="0" stopColor="#3b4f6e" />
            <stop offset=".55" stopColor="#1d2a45" />
            <stop offset="1" stopColor="#0f1629" />
          </radialGradient>
          <radialGradient id="hc-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#f6dc96" stopOpacity=".55" />
            <stop offset="1" stopColor="#f6dc96" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1040" height="500" rx="24" fill="url(#hc-sky)" />
        <ellipse cx={CX} cy={CY} rx={RX} ry={RY} className="hc-orbit" />
        <circle cx={CX} cy={CY} r="120" fill="url(#hc-glow)" />
        <g className="hc-rings">
          {[0, 1, 2].map((k) => (
            <ellipse key={k} cx={CX} cy={CY} rx="110" ry="46" style={{ ['--k' as string]: k }} />
          ))}
        </g>

        {/* the hoopoe, facing left as the text runs */}
        <g className="hc-bird" transform={`translate(${CX} ${CY})`}>
          <path d="M40,6 L92,26 L86,36 L36,20 Z" fill="#1b1410" />
          <path d="M80,24 l26,10 l-4,6 l-26,-10 Z" fill="#fbf4e2" />
          <ellipse cx="0" cy="8" rx="52" ry="30" fill="#d79a62" transform="rotate(-10)" />
          <path d="M-6,-6 C14,-12 40,-4 58,14 C34,30 10,34 -10,28 Z" fill="#1b1410" />
          {[0, 1, 2, 3].map((k) => (
            <path key={k} d={`M${4 + k * 12},${-6 + k * 2} l10,${30 - k * 3}`} stroke="#fbf4e2" strokeWidth="4.5" strokeLinecap="round" />
          ))}
          <circle cx="-44" cy="-22" r="20" fill="#e2aa72" />
          <circle cx="-50" cy="-25" r="3" fill="#1b1410" />
          <path d="M-62,-20 Q-92,-12 -118,4" stroke="#2a1d14" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <g transform="translate(-40 -38)"><g className="hc-crest">
            {CREST.map((r) => (
              <g key={r} transform={`rotate(${r})`}>
                <path d="M0,0 C-5,-14 -5,-28 0,-40 C5,-28 5,-14 0,0 Z" fill="#e8a868" />
                <path d="M0,-32 C-3,-36 -3,-39 0,-44 C3,-39 3,-36 0,-32 Z" fill="#1b1410" />
              </g>
            ))}
          </g></g>
          <path d="M-14,36 l-6,18 M4,38 l2,18" stroke="#2a1d14" strokeWidth="3" strokeLinecap="round" />
        </g>
        <a href={`#${baytAnchor(PART, 1)}`} className="hc-centre">
          <text x={CX} y={CY + 92} textAnchor="middle" className="hc-name">هدهد</text>
          <text x={CX} y={CY + 116} textAnchor="middle" className="hc-sign">همراز سلیمان</text>
        </a>

        {BIRDS.map((b, i) => {
          const s = SEATS[i]
          return (
            <a key={b.n} href={`#${baytAnchor(PART, b.n)}`} className="hc-seat" style={{ ['--i' as string]: i }}>
              <circle cx={s.x} cy={s.y} r="30" />
              <path d={WING} transform={`translate(${s.x} ${s.y - 6}) scale(1.4)`} />
              <text x={s.x} y={s.y + 16} textAnchor="middle" className={b.sign.length > 6 ? 'hc-sign hc-sign-long' : 'hc-sign'}>{b.sign}</text>
              <text x={s.x} y={s.y + (s.y < CY ? -40 : 52)} textAnchor="middle" className="hc-bname">{b.bird}</text>
            </a>
          )
        })}
      </svg>
      <figcaption id="hc-cap">
        <ol className="sn-steps">
          {CALL.map((c, i) => (
            <li key={c.n}>
              <a href={`#${baytAnchor(PART, c.n)}`}><b>{fa(i + 1)}</b> {c.t} <small>بیت {fa(c.n)}</small></a>
            </li>
          ))}
        </ol>
        <p className="sn-note">
          آغاز این بخش نخست هدهد را در کنار سلیمان خوشامد می‌گوید و سپس دوازده مرغ دیگر را یک‌به‌یک؛ گرداگرد هدهد همان دوازده مرغ‌اند؛ زیر نام هر مرغ، پیامبر یا نشانه‌ای آمده که همان بیت با او
          پیوند می‌دهد. هر مهره به بیت خوشامد آن مرغ می‌رود و شماره‌های پایین به ندای خود هدهد. چیدن مرغان به گرد هدهد نقش این سایت است، نه
          وصف عطار.
        </p>
      </figcaption>
    </figure>
  )
}
