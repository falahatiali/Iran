/** The book's one signature touch: the sky over Nishapur turning slowly about the pole, with the ecliptic
 * and the vernal equinox marked, where the Jalali year began. Pure SVG and one CSS rotation; still under
 * prefers-reduced-motion. Stars come from a fixed seed, so server and browser draw the same sky. */
function stars(n: number, seed: number) {
  let s = seed
  const rnd = () => ((s = (s * 16807) % 2147483647) / 2147483647)
  return Array.from({ length: n }, () => {
    const r = 40 + Math.sqrt(rnd()) * 560
    const a = rnd() * Math.PI * 2
    return { x: +(Math.cos(a) * r).toFixed(1), y: +(Math.sin(a) * r).toFixed(1), r: +(0.5 + rnd() * rnd() * 1.9).toFixed(2), o: +(0.35 + rnd() * 0.65).toFixed(2) }
  })
}

const STARS = stars(170, 1048)
const TICKS = Array.from({ length: 12 }, (_, i) => (i * Math.PI) / 6)

export function Sky() {
  return (
    <svg className="kh-sky" viewBox="-600 -600 1200 1200" aria-hidden="true" focusable="false">
      <g className="kh-sky-turn">
        {STARS.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r={p.r} opacity={p.o} />)}
        <g className="kh-ecliptic" transform="rotate(-23.4) scale(1 .42)">
          <circle r="430" />
          {TICKS.map((a, i) => <line key={i} x1={Math.cos(a) * 418} y1={Math.sin(a) * 418} x2={Math.cos(a) * 442} y2={Math.sin(a) * 442} />)}
        </g>
        <g transform="rotate(-23.4) translate(430 0)"><circle className="kh-equinox" r="7" /></g>
      </g>
      <circle className="kh-pole" r="3.2" />
    </svg>
  )
}
