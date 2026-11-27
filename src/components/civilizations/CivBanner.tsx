import { Link } from '@tanstack/react-router'
import { civilizations } from '../../data/civilizations/repository'
import { CivEmblem } from './CivEmblem'

/** Home-page box for the ancient civilizations encyclopedia, below the Darius prayer. Uses the .civ-* styles in app.css. */
export function CivBanner() {
  const items = civilizations.list()
  const dust = Array.from({ length: 16 }, (_, i) => ({ left: (i * 37) % 100, delay: (i * 1.7) % 11, dur: 9 + ((i * 3) % 7), size: 2 + (i % 4), drift: ((i % 5) - 2) * 18 }))
  return (
    <section aria-labelledby="civ-banner-h" className="relative px-3 pt-10 sm:px-4">
      <div className="civ-banner relative mx-auto max-w-7xl overflow-hidden rounded-[2rem]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          {dust.map((d, i) => <span key={i} className="civ-dust" style={{ left: `${d.left}%`, width: d.size, height: d.size, animationDelay: `${d.delay}s`, animationDuration: `${d.dur}s`, ['--drift' as string]: `${d.drift}px` }} />)}
        </div>
        <div className="relative grid gap-8 px-6 py-12 md:grid-cols-[auto_minmax(0,1fr)] md:items-center md:gap-14 md:px-14 md:py-16">
          <svg viewBox="0 0 160 120" className="civ-zig mx-auto h-32 w-44 md:h-48 md:w-64 text-gold" aria-hidden="true">
            <defs><linearGradient id="civ-zig-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f2d68b" /><stop offset="1" stopColor="#8a5a1c" /></linearGradient></defs>
            <circle cx="118" cy="26" r="12" fill="#f2d68b" opacity=".85" />
            <path d="M8 112h144M20 112V96h120v16M34 96V80h92v16M48 80V64h64v16M62 64V48h36v16M72 48V36h16v12" fill="url(#civ-zig-fill)" fillOpacity=".22" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M74 112V96h12v16M80 36V26" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
          <div className="text-center md:text-start">
            <p className="text-sm font-bold text-turquoise-soft md:text-base">دانشنامهٔ تازه · از نخستین روستاها تا نخستین شهرها</p>
            <h2 id="civ-banner-h" className="civ-title mt-3 text-4xl font-black leading-tight sm:text-5xl md:text-6xl lg:text-7xl">تمدن‌های کهن ایران</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-ivory/75 md:text-lg mx-auto md:mx-0">
              از گله‌های بز گنج‌دره تا زیگورات چغازنبیل: هر تمدن با نقشه، گاه‌نگار، تصویرهای آزاد، ویدیو و منبع برای هر ادعا.
            </p>
            <ul className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
              {items.map((c) => (
                <li key={c.slug}>
                  <Link to="/civilizations/$slug" params={{ slug: c.slug }} className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-gold/25 bg-night/40 px-3 py-1.5 text-sm text-ivory/90 backdrop-blur hover:border-gold hover:bg-gold/10 hover:text-gold-bright transition-colors">
                    <CivEmblem name={c.emblem} className="size-6 shrink-0" />
                    <span className="font-bold">{c.name}</span>
                    <span className="hidden text-[0.7rem] text-ivory/50 sm:inline">{c.spanLabel}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/civilizations" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-gradient-to-l from-gold to-[#b8862f] px-8 py-3 text-lg font-black text-night shadow-[0_0_40px_rgb(217_180_90_/_.35)] transition hover:shadow-[0_0_60px_rgb(217_180_90_/_.6)] hover:gap-4">
              ورود به دانشنامه <span aria-hidden="true">←</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
