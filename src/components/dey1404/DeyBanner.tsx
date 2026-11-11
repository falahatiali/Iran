import { Link } from '@tanstack/react-router'

/** Home-page banner for the memorial page of 18 and 19 Dey 1404. Uses the .dey-* styles in app.css. */
export function DeyBanner() {
  const petals = Array.from({ length: 14 }, (_, i) => ({ left: (i * 41) % 100, delay: (i * 1.9) % 12, dur: 10 + ((i * 5) % 8), size: 9 + ((i * 7) % 12), drift: ((i % 5) - 2) * 26 }))
  return (
    <section aria-labelledby="dey-banner-h" className="relative px-3 pt-10 sm:px-4">
      <Link to="/event/dey-1404" className="dey-banner group relative mx-auto block max-w-7xl overflow-hidden rounded-[2rem] focus-visible:outline-2">
        <div className="dey-petals pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          {petals.map((p, i) => (
            <span key={i} className="dey-petal" style={{ left: `${p.left}%`, width: p.size, height: p.size * 1.3, animationDelay: `${p.delay}s`, animationDuration: `${p.dur}s`, ['--drift' as string]: `${p.drift}px` }} />
          ))}
        </div>
        <div className="relative flex flex-col items-center gap-6 px-6 py-14 text-center md:flex-row md:justify-center md:gap-14 md:px-14 md:py-20 md:text-start">
          <div className="dey-tulip-wrap shrink-0" aria-hidden="true">
            <svg viewBox="0 0 64 96" className="h-32 w-22 md:h-56 md:w-36">
              <defs><linearGradient id="dey-banner-petal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ff3b4e" /><stop offset=".55" stopColor="#c0122b" /><stop offset="1" stopColor="#5c0612" /></linearGradient></defs>
              <path d="M32 92 C31 74 30 62 32 50" stroke="#2f6b3a" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M31 72 C20 66 14 58 12 48 C22 52 28 60 31 72Z" fill="#2f6b3a" />
              <path d="M32 52 C18 50 10 38 12 20 C18 26 22 28 26 26 C27 16 29 10 32 4 C35 10 37 16 38 26 C42 28 46 26 52 20 C54 38 46 50 32 52Z" fill="url(#dey-banner-petal)" />
              <path d="M32 52 C27 44 26 34 32 18 C38 34 37 44 32 52Z" fill="#14010a" opacity=".55" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-bold text-rose-200/80 md:text-base">یادنامهٔ خیزش دی‌ماه</p>
            <h2 id="dey-banner-h" className="dey-title mt-3 text-5xl font-black leading-tight sm:text-6xl md:text-7xl lg:text-8xl">هجده و نوزده دی ۱۴۰۴</h2>
            <p className="mt-4 text-xl font-bold text-rose-50 md:text-3xl">به یاد ۴٬۲۱۹ جاویدنام</p>
            <p className="mt-3 max-w-2xl text-base leading-8 text-ivory/70 md:text-lg">ملت ایران و جوانانی که برای آزادی به خیابان آمدند و جان دادند؛ روایت آن دو شب، و نام یکایکشان.</p>
            <span className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-gradient-to-l from-[#e11d48] to-[#9f1239] px-8 py-3 text-lg font-black text-white shadow-[0_0_40px_rgb(225_29_72_/_.45)] transition group-hover:shadow-[0_0_60px_rgb(225_29_72_/_.7)]">
              نام‌ها را بخوانید <span aria-hidden="true">←</span>
            </span>
          </div>
        </div>
      </Link>
    </section>
  )
}
