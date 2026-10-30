import { Link, createFileRoute, getRouteApi, stripSearchParams, useNavigate } from '@tanstack/react-router'
import { motion, useScroll, useTransform } from 'motion/react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Shamseh, Divider } from '../components/Ornament'
import { Reveal } from '../components/Reveal'
import { ShareLink } from '../components/ShareLink'
import { eraNames, fa, range } from '../lib/format'
import { normalize } from '../lib/search'
import { seo } from '../lib/seo'
import { HOME_DEFAULTS, filterByQuery, hasNonDefaultSearch, homeSearchSchema, type HomeSearch } from '../lib/searchSchema'
import { useDraftQuery } from '../lib/useDraftQuery'

export const Route = createFileRoute('/')({
  validateSearch: (search: Record<string, unknown>): HomeSearch => homeSearchSchema.parse(search),
  search: { middlewares: [stripSearchParams(HOME_DEFAULTS)] },
  head: ({ match }) => seo({
    title: 'تاریخ ایران',
    description: 'تاریخ ایران از ایلام و هخامنشیان تا امروز: همه‌ی دودمان‌ها و پادشاهان به ترتیب زمانی، با رویدادها، شجره‌نامه و منابع.',
    noindex: hasNonDefaultSearch({ ...HOME_DEFAULTS, ...match.search }, HOME_DEFAULTS),
  }),
  component: Home,
})
const root = getRouteApi('__root__')

function Hero({ totals }: { totals: { dynasties: number; rulers: number; events: number } }) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  const op = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  return (
    <section ref={ref} className="relative min-h-[92vh] flex items-center justify-center overflow-hidden girih-bg" aria-labelledby="hero-h">
      <motion.div style={{ y: y1 }} className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden px-8">
        <Shamseh className="max-w-full max-h-full w-[min(120vmin,95vw)] h-[min(120vmin,95vh)] opacity-25" spin />
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute -bottom-20 inset-x-0 h-72 bg-gradient-to-t from-night via-night/80 to-transparent" />
      <motion.div style={{ opacity: op }} className="relative z-10 text-center px-4 max-w-4xl">
        <motion.p initial={{ opacity: 0, letterSpacing: '0.6em' }} animate={{ opacity: 1, letterSpacing: '0.25em' }} transition={{ duration: 1.4 }} className="text-turquoise-soft text-sm md:text-base">از شوش تا تهران · پنج هزار سال</motion.p>
        <motion.h1 id="hero-h" initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 1.1, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-[length:var(--text-display)] font-black leading-[1.15] mt-4 text-gilded">تاریخ ایران</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 1 }} className="mt-6 text-lg md:text-xl leading-9 text-ivory/80">
          روایت دودمان‌ها و فرمانروایانی که این سرزمین را ساختند — به ترتیب زمان، با رویدادها، شجره‌نامه‌ها و منابع.
        </motion.p>
        <motion.dl initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="mt-10 grid grid-cols-3 gap-3 max-w-lg mx-auto">
          {[['دودمان و دوره', totals.dynasties], ['فرمانروا', totals.rulers], ['رویداد', totals.events]].map(([l, n]) => (
            <div key={l} className="glass rounded-2xl py-4"><dt className="text-xs text-ivory/60">{l}</dt><dd className="text-3xl font-black text-gold-bright">{fa(n)}</dd></div>
          ))}
        </motion.dl>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="#eras" className="rounded-full bg-gradient-to-l from-gold to-[#b8862f] text-night font-bold px-7 py-3 hover:shadow-[0_0_30px_#d9b45a80] transition-shadow">آغاز سفر</a>
          <Link to="/cylinder" className="glass rounded-full px-7 py-3 hover:border-gold">استوانهٔ کوروش</Link>
          <Link to="/king/$slug" params={{ slug: 'darius-i' }} className="glass rounded-full px-7 py-3 hover:border-gold">داریوش بزرگ</Link>
          <Link to="/archives" className="glass rounded-full px-7 py-3 hover:border-gold">بایگانی تخت‌جمشید</Link>
          <Link to="/timeline" className="glass rounded-full px-7 py-3 hover:border-gold">گاه‌شمار سراسری</Link>
        </motion.div>
      </motion.div>
      <motion.span aria-hidden="true" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-8 text-gold/60 text-2xl">⌄</motion.span>
    </section>
  )
}

function Home() {
  const data = root.useLoaderData()
  const { q = '' } = Route.useSearch()
  const navigate = useNavigate({ from: '/' })
  const [draft, setDraft] = useDraftQuery(q, (next) => {
    void navigate({ search: { q: next }, replace: true, resetScroll: false })
  })
  const [active, setActive] = useState(data.dynasties[0]?.slug ?? '')
  const navRef = useRef<HTMLDivElement>(null)

  const filtered = useMemo(() => {
    const n = normalize(q)
    if (!n) return data.dynasties
    return data.dynasties
      .map((d) => ({
        ...d,
        rulers: normalize(`${d.name} ${d.latin}`).includes(n)
          ? d.rulers
          : filterByQuery(d.rulers, q, (r) => `${r.name} ${r.latin}`),
      }))
      .filter((d) => d.rulers.length)
  }, [q, data])

  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id.replace('d-', ''))), { rootMargin: '-45% 0px -50% 0px' })
    document.querySelectorAll('[data-dyn]').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [filtered])
  useEffect(() => {
    const nav = navRef.current
    const chip = nav?.querySelector<HTMLElement>(`[data-chip="${active}"]`)
    if (nav && chip) nav.scrollTo({ left: chip.offsetLeft - nav.clientWidth / 2 + chip.clientWidth / 2, behavior: 'smooth' })
  }, [active])

  const eras = Object.keys(eraNames)
  return (
    <>
      <Hero totals={data.totals} />
      <section id="eras" aria-labelledby="eras-h" className="mx-auto max-w-7xl px-4 pt-16">
        <Reveal><h2 id="eras-h" className="text-3xl md:text-4xl font-black text-center">نمایه‌ی دوران‌ها</h2></Reveal>
        <Divider />
        <div className="grid gap-4 md:grid-cols-5">
          {eras.map((era, i) => {
            const ds = data.dynasties.filter((d) => d.era === era)
            if (ds.length === 0) return null
            return (
              <Reveal key={era} delay={i * 0.08}>
                <div className="glass rounded-2xl p-5 h-full hover:-translate-y-1 transition-transform">
                  <h3 className="font-bold text-gold">{eraNames[era]}</h3>
                  <p className="text-xs text-ivory/50 mt-1">{range(ds[0].start, ds[ds.length - 1].end)}</p>
                  <ul className="mt-3 space-y-1 text-sm">
                    {ds.map((d) => <li key={d.slug}><a href={`#d-${d.slug}`} className="text-ivory/80 hover:text-turquoise-soft inline-block py-2 pl-2 min-h-11 min-w-11">• {d.name}</a></li>)}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      <div className="sticky top-16 z-30 mt-16 border-y border-gold/15 bg-night/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 flex items-center gap-3 py-2">
          <label className="shrink-0">
            <span className="sr-only">فیلتر پادشاهان</span>
            <input value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="فیلتر پادشاه…" className="w-32 md:w-48 rounded-full bg-ivory/5 border border-gold/25 px-4 py-1.5 text-sm outline-none focus:border-gold" />
          </label>
          <ShareLink label="رونوشت پیوند" />
          <div className="relative flex-1 min-w-0">
            <nav ref={navRef} aria-label="دودمان‌ها" className="flex gap-2 overflow-x-auto [scrollbar-width:none] scroll-smooth">
              {filtered.map((d) => (
                <a key={d.slug} data-chip={d.slug} href={`#d-${d.slug}`} aria-current={active === d.slug ? 'true' : undefined}
                  className={`relative shrink-0 whitespace-nowrap rounded-full px-3 py-2.5 text-sm transition-colors min-h-11 inline-flex items-center ${active === d.slug ? 'text-night' : 'text-ivory/70 hover:text-gold'}`}>
                  {active === d.slug && <motion.span layoutId="chip" className="absolute inset-0 rounded-full bg-gold" transition={{ type: 'spring', stiffness: 400, damping: 30 }} />}
                  <span className="relative">{d.name}</span>
                </a>
              ))}
            </nav>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-night/80 to-transparent" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-night/80 to-transparent" aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4">
        {filtered.length === 0 && <p className="text-center py-20 text-ivory/50">نتیجه‌ای برای «{q}» یافت نشد.</p>}
        {filtered.map((d, i) => (
          <section key={d.slug} id={`d-${d.slug}`} data-dyn aria-labelledby={`h-${d.slug}`} className="scroll-mt-32 py-16 border-b border-gold/10">
            <Reveal>
              <div className="grid md:grid-cols-[1fr_auto] gap-6 items-end">
                <div>
                  <p className="text-sm text-turquoise-soft">{eraNames[d.era]} · {fa(i + 1)}</p>
                  <h2 id={`h-${d.slug}`} className="text-4xl md:text-5xl font-black mt-2" style={{ textShadow: `0 0 40px ${d.accent}` }}>{d.name}</h2>
                  <p dir="ltr" className="text-right text-sm text-ivory/50 mt-1">{d.latin}</p>
                  <p className="mt-4 max-w-3xl leading-8 text-ivory/80">{d.summary}</p>
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-gold-bright">{range(d.start, d.end)}</p>
                  <p className="text-sm text-ivory/55">{fa(d.rulers.length)} فرمانروا · {fa(d.eventCount)} رویداد</p>
                </div>
              </div>
            </Reveal>
            <ul className="mt-8 flex flex-wrap gap-2">
              {d.rulers.map((r, j) => (
                <motion.li key={r.id} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: Math.min(j * 0.03, 0.6) }}>
                  <Link to="/king/$slug" params={{ slug: r.id }} className="group inline-flex flex-col rounded-xl border border-gold/20 bg-ivory/[.03] px-4 py-2 hover:border-gold hover:bg-gold/10 hover:-translate-y-0.5 transition-all">
                    <span className="font-medium group-hover:text-gold-bright">{r.name}</span>
                    <span className="text-[0.7rem] text-ivory/50">{range(r.start, r.end)}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            <Link to="/dynasty/$slug" params={{ slug: d.slug }} className="mt-8 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-night hover:gap-4 transition-all min-h-11" style={{ background: `linear-gradient(90deg, #d9b45a, ${d.accent})` }}>
              صفحه‌ی کامل {d.name}: کارت‌ها، گاه‌شمار و نقشه <span aria-hidden="true">←</span>
            </Link>
          </section>
        ))}
      </div>
    </>
  )
}
