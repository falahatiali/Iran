import type { CSSProperties } from 'react'

/** The book's one signature touch: «بیا تا گل برافشانیم» — a few Shiraz rose petals drift down over the
 * garden. Pure SVG and CSS; under prefers-reduced-motion the petals rest where they are. Positions come
 * from a fixed seed, so server and browser draw the same garden. */
function petals(n: number, seed: number) {
  let s = seed
  const rnd = () => ((s = (s * 16807) % 2147483647) / 2147483647)
  return Array.from({ length: n }, (_, i) => ({
    x: +(4 + rnd() * 92).toFixed(1),
    y: +(6 + rnd() * 70).toFixed(1),
    size: +(12 + rnd() * 14).toFixed(0),
    dur: +(14 + rnd() * 12).toFixed(1),
    delay: +(-rnd() * 26).toFixed(1),
    sway: +(20 + rnd() * 60).toFixed(0) * (i % 2 ? 1 : -1),
    spin: +(180 + rnd() * 360).toFixed(0),
    tone: i % 3,
  }))
}

const PETALS = petals(16, 726)

export function Petals() {
  return (
    <div className="hf-petals" aria-hidden="true">
      {PETALS.map((p, i) => (
        <span
          key={i}
          className={`hf-petal t${p.tone}`}
          style={{ '--x': `${p.x}%`, '--y': `${p.y}%`, '--s': `${p.size}px`, '--d': `${p.dur}s`, '--w': `${p.delay}s`, '--sw': `${p.sway}px`, '--r': `${p.spin}deg` } as CSSProperties}
        >
          <svg viewBox="0 0 20 24" width="100%" height="100%"><path d="M10 23C3 18 0 11 2.5 5.5 4.5 1 9 .5 10 4c1-3.5 5.5-3 7.5 1.5C20 11 17 18 10 23Z" /></svg>
        </span>
      ))}
    </div>
  )
}
