import { Link } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import { mantiq, type Verse } from '../../../data/library/mantiq'
import { baytAnchor } from '../../../data/library/mantiq/sections'
import { prefersReducedMotion } from '../motion'
import './journey.css'

const fa = (n: number) => n.toLocaleString('fa-IR')

/** Where the stations sit in each drawing: the gathering, the seven valleys, then the threshold of the Simorgh. */
type Pt = readonly [number, number]
interface Layout { w: number; h: number; pts: readonly Pt[]; mirror: Pt; r: number }
const WIDE: Layout = {
  w: 1000, h: 520,
  pts: [[950, 470], [850, 430], [748, 372], [650, 410], [548, 318], [446, 352], [344, 250], [242, 284], [128, 212]],
  mirror: [128, 150], r: 62,
}
const TALL: Layout = {
  w: 360, h: 1040,
  pts: [[180, 1000], [92, 900], [268, 800], [92, 700], [268, 600], [92, 500], [268, 400], [92, 300], [180, 192]],
  mirror: [180, 132], r: 60,
}

/** A smooth line through the stations (Catmull–Rom turned into cubic Béziers). */
function pathThrough(pts: readonly Pt[]) {
  let d = `M${pts[0][0]},${pts[0][1]}`
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] ?? p2
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6]
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6]
    d += ` C${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${p2[0]},${p2[1]}`
  }
  return d
}

/** The birds that set out, and the station each one stops at (8 = the threshold). Exactly thirty arrive:
 * «از هزاران، سی به درگاه آمدیم». How many fall where is not in the text, so the spread here is only a picture. */
const FLOCK = 150
const ARRIVE = 30
const stops: number[] = (() => {
  let seed = 7
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647)
  const out = Array.from({ length: FLOCK }, (_, i) => (i < ARRIVE ? 8 : 1 + Math.floor(rnd() * 7.6)))
  return out.map((s) => Math.min(s, 8))
})()

function Map({ layout, id, play }: { layout: Layout; id: string; play: number }) {
  const pathRef = useRef<SVGPathElement>(null)
  const birdsRef = useRef<SVGGElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const d = pathThrough(layout.pts)
  const [mx, my] = layout.mirror
  const ring = (k: number): Pt => {
    const a = (k / ARRIVE) * Math.PI * 2 - Math.PI / 2
    return [mx + Math.cos(a) * (layout.r + 14), my + Math.sin(a) * (layout.r + 14)]
  }

  useEffect(() => {
    const path = pathRef.current, g = birdsRef.current, svg = svgRef.current
    if (!path || !g || !svg) return
    const birds = Array.from(g.children) as SVGGElement[]
    const settle = () => {
      svg.classList.add('is-arrived')
      birds.forEach((b, i) => {
        if (i < ARRIVE) { const [x, y] = ring(i); b.setAttribute('transform', `translate(${x} ${y})`); b.style.opacity = '1' }
        else b.style.opacity = '0'
      })
    }
    if (prefersReducedMotion() || svg.getBoundingClientRect().width === 0) { settle(); return }
    svg.classList.remove('is-arrived')
    // length along the path of each station
    const total = path.getTotalLength()
    const at: number[] = []
    let s = 0
    for (const [x, y] of layout.pts) {
      let best = s, bd = Infinity
      for (let l = s; l <= total; l += 2) {
        const p = path.getPointAtLength(l)
        const dd = (p.x - x) ** 2 + (p.y - y) ** 2
        if (dd < bd) { bd = dd; best = l }
      }
      at.push(best); s = best
    }
    const speed = total / 9000 // ms for the whole climb
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const t = now - start
      let moving = false
      birds.forEach((b, i) => {
        const delay = (i % 50) * 40 + Math.floor(i / 50) * 140
        const goal = at[stops[i]]
        const l = Math.max(0, (t - delay) * speed)
        const jitter = Math.sin(i * 12.9898) * 9
        if (l < goal) {
          moving = true
          const p = path.getPointAtLength(l)
          b.setAttribute('transform', `translate(${p.x + jitter * 0.6} ${p.y + Math.cos(i * 7.1) * 7})`)
          b.style.opacity = l > 0 ? '1' : '0'
        } else if (stops[i] < 8) {
          const p = path.getPointAtLength(goal)
          const fade = Math.min(1, (l - goal) / (total * 0.06))
          b.setAttribute('transform', `translate(${p.x + jitter} ${p.y - fade * 26})`)
          b.style.opacity = String(1 - fade)
          if (fade < 1) moving = true
        } else {
          const p = path.getPointAtLength(goal)
          const k = Math.min(1, (l - goal) / (total * 0.12))
          const [x, y] = ring(i)
          b.setAttribute('transform', `translate(${p.x + (x - p.x) * k} ${p.y + (y - p.y) * k})`)
          b.style.opacity = '1'
          if (k < 1) moving = true
        }
      })
      if (moving) raf = requestAnimationFrame(tick)
      else settle()
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [play])

  return (
    <svg ref={svgRef} className={`mqj-svg mqj-${id}`} viewBox={`0 0 ${layout.w} ${layout.h}`} role="img" aria-labelledby={`mqj-t-${id}`}>
      <title id={`mqj-t-${id}`}>نقشهٔ راه مرغان: از انجمن مرغان، از هفت وادی، تا درگاه سیمرغ؛ از هزاران مرغ، سی مرغ می‌رسند.</title>
      <defs>
        <radialGradient id={`mqj-glow-${id}`}>
          <stop offset="0" stopColor="#fff6d8" />
          <stop offset=".55" stopColor="#f2d68b" stopOpacity=".55" />
          <stop offset="1" stopColor="#f2d68b" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`mqj-mtn-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1d3a5a" />
          <stop offset="1" stopColor="#0a1830" />
        </linearGradient>
      </defs>
      {id === 'wide' ? (
        <path className="mqj-mtn" fill={`url(#mqj-mtn-${id})`} d="M0,520 L0,380 L90,300 L128,212 L170,290 L260,330 L330,300 L420,390 L520,350 L600,430 L700,400 L800,470 L900,440 L1000,500 L1000,520Z" />
      ) : (
        <path className="mqj-mtn" fill={`url(#mqj-mtn-${id})`} d="M0,1040 L0,260 L90,200 L180,190 L270,200 L360,250 L360,1040Z" opacity=".55" />
      )}
      <circle className="mqj-halo" cx={mx} cy={my} r={layout.r * 2.1} fill={`url(#mqj-glow-${id})`} />
      <path ref={pathRef} className="mqj-road" d={d} fill="none" />
      <path className="mqj-road-dash" d={d} fill="none" />
      <circle className="mqj-mirror" cx={mx} cy={my} r={layout.r} />
      <circle className="mqj-mirror-rim" cx={mx} cy={my} r={layout.r + 14} fill="none" />
      <g ref={birdsRef} className="mqj-birds" aria-hidden="true">
        {stops.map((_, i) => (
          <g key={i} style={{ opacity: 0 }}>
            <path d="M-5,0 Q-2.5,-3.2 0,0 Q2.5,-3.2 5,0" />
          </g>
        ))}
      </g>
      {layout.pts.slice(1, 8).map(([x, y], i) => (
        <g key={i} className="mqj-stn">
          <circle cx={x} cy={y} r="19" />
          <text x={x} y={y + 7} textAnchor="middle">{fa(i + 1)}</text>
        </g>
      ))}
      <circle className="mqj-start" cx={layout.pts[0][0]} cy={layout.pts[0][1]} r="8" />
    </svg>
  )
}

function Cite({ v }: { v: Verse }) {
  return (
    <Link to="/library/mantiq-al-tayr/$section" params={{ section: v.section }} hash={baytAnchor(v.part, v.n)}>
      {v.where}، بیت {fa(v.n)}
    </Link>
  )
}

/** The seven valleys as one climb. Thousands set out; thirty reach the threshold and, looking, see themselves. */
export function JourneyMap() {
  const { sevenValleys: sv, story } = mantiq
  const arrived = story[2].verse
  const mirror = story[3].verse
  const [play, setPlay] = useState(0)
  const boxRef = useRef<HTMLDivElement>(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = boxRef.current
    if (!el || typeof IntersectionObserver === 'undefined') { setSeen(true); return }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect() } }, { threshold: 0.35 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  const labels = (l: Layout, side: (i: number) => 'is-s' | 'is-e' | 'is-up' | 'is-down') => (
    <ol className="mqj-labels">
      {sv.valleys.map((v, i) => {
        const [x, y] = l.pts[i + 1]
        return (
          <li key={v.slug} className={side(i)} style={{ left: `${(x / l.w) * 100}%`, top: `${(y / l.h) * 100}%` }}>
            <Link to="/library/mantiq-al-tayr/$section" params={{ section: v.slug }}>
              <b>{v.name}</b>
              <small>{v.line}</small>
            </Link>
          </li>
        )
      })}
    </ol>
  )
  return (
    <section id="valleys" className="mqj" aria-labelledby="mqj-h">
      <h2 id="mqj-h">راه هفت وادی</h2>
      <figure className="mq-couplet mqj-intro">
        <blockquote><span>{sv.intro.lines[0]}</span><span>{sv.intro.lines[1]}</span></blockquote>
        <figcaption><Cite v={sv.intro} /></figcaption>
      </figure>
      <div ref={boxRef} className="mqj-stage">
        <div className="mqj-frame is-wide">
          {seen ? <Map layout={WIDE} id="wide" play={play} /> : <div className="mqj-svg" />}
          {labels(WIDE, (i) => (i % 2 === 0 ? 'is-down' : 'is-up'))}
          <p className="mqj-gate" style={{ left: `${(WIDE.mirror[0] / WIDE.w) * 100}%`, top: `${((WIDE.mirror[1] + WIDE.r + 26) / WIDE.h) * 100}%` }}>
            <Link to="/library/mantiq-al-tayr/$section" params={{ section: 'si-morgh' }}>درگاه سیمرغ</Link>
          </p>
          <p className="mqj-from" style={{ left: `${(WIDE.pts[0][0] / WIDE.w) * 100}%`, top: `${(WIDE.pts[0][1] / WIDE.h) * 100}%` }}>
            <Link to="/library/mantiq-al-tayr/$section" params={{ section: 'majma' }}>انجمن مرغان</Link>
          </p>
        </div>
        <div className="mqj-frame is-tall">
          {seen ? <Map layout={TALL} id="tall" play={play} /> : <div className="mqj-svg" />}
          {labels(TALL, (i) => (i % 2 === 0 ? 'is-s' : 'is-e'))}
          <p className="mqj-gate" style={{ left: `${(TALL.mirror[0] / TALL.w) * 100}%`, top: `${((TALL.mirror[1] + TALL.r + 24) / TALL.h) * 100}%` }}>
            <Link to="/library/mantiq-al-tayr/$section" params={{ section: 'si-morgh' }}>درگاه سیمرغ</Link>
          </p>
          <p className="mqj-from" style={{ left: `${(TALL.pts[0][0] / TALL.w) * 100}%`, top: `${(TALL.pts[0][1] / TALL.h) * 100}%` }}>
            <Link to="/library/mantiq-al-tayr/$section" params={{ section: 'majma' }}>انجمن مرغان</Link>
          </p>
        </div>
      </div>
      <div className="mqj-end">
        <figure className="mq-couplet">
          <blockquote><span>{arrived.lines[0]}</span><span>{arrived.lines[1]}</span></blockquote>
          <figcaption><Cite v={arrived} /></figcaption>
        </figure>
        <figure className="mq-couplet is-mirror">
          <blockquote><span>{mirror.lines[0]}</span><span>{mirror.lines[1]}</span></blockquote>
          <figcaption><Cite v={mirror} /></figcaption>
        </figure>
        <p className="mqj-note">
          در نقشه {fa(FLOCK)} مرغ به راه می‌افتند و درست {fa(ARRIVE)} مرغ به درگاه می‌رسند و گرد آینه می‌نشینند. اینکه چند مرغ در کدام وادی
          می‌مانند در متن نیامده؛ پراکندگی آن نمایشی است. نام وادی‌ها از زبان هدهد است:{' '}
          <Link to="/library/mantiq-al-tayr/$section" params={{ section: sv.listSource.section }} hash={baytAnchor(sv.listSource.part, sv.listSource.n)}>{sv.listSource.where}، بیت‌های {fa(sv.listSource.n)} تا {fa(sv.listSource.n + 3)}</Link>.
        </p>
        <button type="button" className="mq-btn mqj-replay" onClick={() => setPlay((n) => n + 1)}>پرواز دوباره</button>
      </div>
    </section>
  )
}
