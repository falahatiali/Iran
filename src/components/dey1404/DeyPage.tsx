import { useEffect, useRef, useState } from 'react'
import { closing, deySources, hero, manifesto, nameNote, otherLists, pillars, stats, story, tolls } from '../../data/dey1404'
import { PageTransition, Reveal } from '../Reveal'
import { fa, NameWall } from './NameWall'

const FA = '۰۱۲۳۴۵۶۷۸۹'

/** A red tulip, the old Persian sign of those who die for their land. */
export function Tulip({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 96" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="dey-petal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ff3b4e" /><stop offset=".55" stopColor="#c0122b" /><stop offset="1" stopColor="#5c0612" />
        </linearGradient>
      </defs>
      <path d="M32 92 C31 74 30 62 32 50" stroke="#2f6b3a" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M31 72 C20 66 14 58 12 48 C22 52 28 60 31 72Z" fill="#2f6b3a" />
      <path d="M32 52 C18 50 10 38 12 20 C18 26 22 28 26 26 C27 16 29 10 32 4 C35 10 37 16 38 26 C42 28 46 26 52 20 C54 38 46 50 32 52Z" fill="url(#dey-petal)" />
      <path d="M32 52 C27 44 26 34 32 18 C38 34 37 44 32 52Z" fill="#14010a" opacity=".55" />
    </svg>
  )
}

/** Falling petals; positions are fixed (not random) so server and client render the same. */
function Petals() {
  const petals = Array.from({ length: 22 }, (_, i) => ({
    left: (i * 37) % 100, delay: (i * 1.7) % 14, dur: 11 + ((i * 5) % 9), size: 10 + ((i * 7) % 14), drift: ((i % 5) - 2) * 30,
  }))
  return (
    <div className="dey-petals pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {petals.map((p, i) => (
        <span key={i} className="dey-petal" style={{ left: `${p.left}%`, width: p.size, height: p.size * 1.3, animationDelay: `${p.delay}s`, animationDuration: `${p.dur}s`, ['--drift' as string]: `${p.drift}px` }} />
      ))}
    </div>
  )
}

function Chips({ ids }: { ids: string[] }) {
  return (
    <span className="mt-3 flex flex-wrap gap-2 text-xs">
      {ids.map((id) => {
        const n = deySources.findIndex((s) => s.id === id) + 1
        return <a key={id} href={`#dey-src-${id}`} className="rounded-full border border-rose-300/25 px-2.5 py-0.5 text-rose-200/80 hover:bg-rose-400/10">منبع {fa(n)}</a>
      })}
    </span>
  )
}

const toNum = (v: string) => (/^[۰-۹٬]+$/.test(v) ? +v.replace(/٬/g, '').replace(/[۰-۹]/g, (d) => String(FA.indexOf(d))) : null)

/** Counts up once when it scrolls into view; the server and reduced-motion readers get the final figure. */
function Tally({ value }: { value: string }) {
  const target = toNum(value)
  const ref = useRef<HTMLSpanElement>(null)
  const [shown, setShown] = useState(value)
  useEffect(() => {
    const el = ref.current
    if (target === null || !el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now(), dur = 2200
      const step = (t: number) => {
        const k = Math.min(1, (t - t0) / dur), eased = 1 - Math.pow(1 - k, 3)
        setShown(fa(Math.round(target * eased)))
        if (k < 1) raf = requestAnimationFrame(step)
      }
      raf = requestAnimationFrame(step)
    }, { threshold: 0.4 })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [target])
  return <span ref={ref} aria-label={value}>{shown}</span>
}

export function DeyPage() {
  return (
    <PageTransition>
      <article lang="fa" dir="rtl" className="dey -mt-8 pb-24">
        <header className="dey-hero relative isolate overflow-hidden">
          <Petals />
          <div className="relative mx-auto flex min-h-[88vh] max-w-5xl flex-col items-center justify-center px-5 py-24 text-center">
            <div className="dey-tulip-wrap"><Tulip className="h-36 w-24 md:h-48 md:w-32 dey-tulip" /></div>
            <p className="mt-6 text-rose-200/80 text-sm md:text-base">{hero.kicker}</p>
            <h1 className="dey-title mt-4 text-6xl font-black leading-none md:text-8xl lg:text-9xl">{hero.title}</h1>
            <p className="mt-3 text-4xl font-black text-rose-300/90 md:text-5xl">{hero.year}</p>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-ivory/80 md:text-xl">{hero.sub}</p>
            <a href="#names" className="mt-10 inline-flex items-center gap-2 rounded-full border border-rose-300/40 bg-rose-900/30 px-6 py-3 font-bold text-rose-50 hover:bg-rose-800/40">نام‌ها را بخوانید ↓</a>
          </div>
          <div className="dey-blood absolute inset-x-0 bottom-0 h-40" aria-hidden="true" />
        </header>

        <div className="mx-auto max-w-6xl px-5">
          <ul className="-mt-10 grid grid-cols-2 gap-3 md:grid-cols-5">
            {stats.map((s) => (
              <li key={s.label} className="dey-card p-5 text-center">
                <span className="block text-3xl font-black text-rose-100 md:text-4xl"><Tally value={s.value} /></span>
                <span className="mt-2 block text-sm text-ivory/60">{s.label}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-center text-xs text-ivory/40">به ثبت سازمان حقوق بشر ایران، شهریور ۱۴۰۵. <a href="#tolls" className="underline">چرا شمارها با هم فرق دارند؟</a></p>

          <Reveal>
            <section aria-labelledby="manifesto-h" className="dey-manifesto relative mx-auto mt-24 max-w-4xl px-6 py-14 md:px-14">
              <p className="text-center text-sm font-bold text-gold">نگاه ما · بیانیهٔ این صفحه</p>
              <h2 id="manifesto-h" className="mt-3 text-center text-4xl font-black text-gilded md:text-6xl">{manifesto.title}</h2>
              <div className="mt-10 space-y-7">
                {manifesto.paras.map((p, i) => <p key={i} className={`read text-justify text-xl leading-[2.4] text-ivory/90 md:text-2xl md:leading-[2.5]`}>{p}</p>)}
              </div>
              <p className="mt-10 text-center text-sm text-ivory/45">این بخش برداشت و دیدگاه این سایت است، نه گزارش رویداد. روایت مستند در بخش بعد آمده است.</p>
            </section>
          </Reveal>

          <section aria-labelledby="pillars-h" className="mt-20">
            <h2 id="pillars-h" className="text-center text-3xl font-black text-rose-50 md:text-4xl">ریشه‌ای کهن: مال و جانِ مردم در سندهای ایران</h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-ivory/60">سه شاهد منبع‌دار از صفحهٔ <a href="/property" className="text-gold underline">حقوق مالکیت در تاریخ ایران</a>.</p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {pillars.map((p) => (
                <a key={p.href} href={p.href} className="dey-card block p-6 transition hover:-translate-y-1">
                  <span className="block text-xl font-black text-gold-bright">{p.title}</span>
                  <span className="read mt-3 block text-justify leading-8 text-ivory/75">{p.text}</span>
                  <span className="mt-4 block text-sm text-rose-200/70">بیشتر بخوانید ←</span>
                </a>
              ))}
            </div>
          </section>

          <section aria-labelledby="story-h" className="mt-24">
            <h2 id="story-h" className="text-center text-4xl font-black text-rose-50 md:text-5xl">روایت آن روزها</h2>
            <ol className="dey-line relative mx-auto mt-12 max-w-3xl space-y-10 ps-10">
              {story.map((s) => (
                <li key={s.id} id={s.id} className="relative scroll-mt-24">
                  <span className="dey-dot absolute -start-10 top-2" aria-hidden="true" />
                  <Reveal>
                    <p className="text-sm font-bold text-rose-300">{s.date}</p>
                    <h3 className="mt-1 text-2xl font-black text-ivory">{s.title}</h3>
                    <p className="read mt-3 text-justify leading-9 text-ivory/80">{s.text}</p>
                    <Chips ids={s.sources} />
                  </Reveal>
                </li>
              ))}
            </ol>
          </section>

          <section id="tolls" aria-labelledby="tolls-h" className="mt-24 scroll-mt-24">
            <h2 id="tolls-h" className="text-center text-3xl font-black text-rose-50 md:text-4xl">چند نفر؟ شمارها و اختلافشان</h2>
            <p className="read mx-auto mt-4 max-w-3xl text-justify leading-8 text-ivory/65">شمار واقعی کشته‌شدگان هنوز روشن نیست. قطع اینترنت، فشار بر خانواده‌ها و بسته بودن پرونده‌های بیمارستان و پزشکی قانونی، شمارش مستقل را دشوار کرده است. هر رقم را با گویندهٔ آن می‌آوریم.</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {tolls.map((t) => (
                <div key={t.who} className="dey-card p-6">
                  <p className="text-sm font-bold text-rose-300">{t.who}</p>
                  <p className="mt-1 text-4xl font-black text-ivory">{t.figure}</p>
                  <p className="read mt-3 text-justify leading-8 text-ivory/70">{t.note}</p>
                  <Chips ids={t.sources} />
                </div>
              ))}
            </div>
          </section>

          <section id="names" aria-labelledby="names-h" className="mt-28 scroll-mt-24">
            <div className="text-center">
              <Tulip className="mx-auto h-16 w-11" />
              <h2 id="names-h" className="dey-title mt-4 text-5xl font-black md:text-7xl">جاویدنامان</h2>
              <p className="read mx-auto mt-6 max-w-3xl text-justify leading-8 text-ivory/70">{nameNote}</p>
              <p className="mt-4 flex flex-wrap justify-center gap-3 text-sm">
                {otherLists.map((l) => <a key={l.href} href={l.href} target="_blank" rel="noopener" className="rounded-full border border-rose-300/30 px-3 py-1 text-rose-100 hover:bg-rose-400/10">{l.label} ↗</a>)}
              </p>
            </div>
            <div className="mt-12"><NameWall /></div>
          </section>

          <section aria-labelledby="closing-h" className="dey-closing relative mt-28 overflow-hidden px-6 py-20 text-center">
            <div className="dey-candles mx-auto flex justify-center gap-5" aria-hidden="true">{Array.from({ length: 7 }, (_, i) => <span key={i} className="dey-candle"><span className="dey-flame dey-flame-lg" /></span>)}</div>
            <p className="mt-10 text-sm font-bold text-gold">نگاه ما</p>
            <h2 id="closing-h" className="dey-title mt-2 text-5xl font-black md:text-7xl">{closing.title}</h2>
            <div className="mx-auto mt-8 max-w-3xl space-y-6">{closing.paras.map((p, i) => <p key={i} className="read text-justify text-xl leading-[2.3] text-ivory/85">{p}</p>)}</div>
            <p className="mt-10 flex flex-wrap justify-center gap-3 text-sm">
              <a href="/property" className="rounded-full border border-gold/40 px-4 py-2 text-gold hover:bg-gold/10">حقوق مالکیت در تاریخ ایران</a>
              <a href="/event/mashruteh" className="rounded-full border border-gold/40 px-4 py-2 text-gold hover:bg-gold/10">انقلاب مشروطه</a>
              <a href="/timeline" className="rounded-full border border-gold/40 px-4 py-2 text-gold hover:bg-gold/10">گاه‌شمار سراسری</a>
            </p>
          </section>

          <section aria-labelledby="dey-src-h" className="mt-24">
            <h2 id="dey-src-h" className="text-2xl font-black text-gold-bright">منابع</h2>
            <ol className="mt-4 list-decimal space-y-2 ps-6 text-sm text-ivory/70">
              {deySources.map((s) => <li key={s.id} id={`dey-src-${s.id}`}><a href={s.url} target="_blank" rel="noopener" className="hover:text-gold">{s.title}</a></li>)}
            </ol>
            <p className="mt-6 text-sm text-ivory/45">این صفحه عکسی از جان‌باختگان منتشر نمی‌کند؛ لاله، شمع و نام، نشانهٔ یادِ آنان است.</p>
          </section>
        </div>
      </article>
    </PageTransition>
  )
}
