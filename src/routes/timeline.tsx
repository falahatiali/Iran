import { createFileRoute, Link } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'motion/react'
import { useMemo, useState } from 'react'
import { getTimeline } from '../server/api'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { PageTransition } from '../components/Reveal'
import { EventIcon } from '../components/EventIcon'
import { eraNames, eventTypeNames, fa, year } from '../lib/format'
import { normalize } from '../lib/search'
import { seo } from '../lib/seo'

export const Route = createFileRoute('/timeline')({
  loader: () => getTimeline(),
  head: () => seo({ title: 'گاه‌شمار سراسری', description: 'همه‌ی رویدادهای تاریخ ایران از ایلام تا امروز، با فیلتر دوران، دودمان و نوع رویداد.', path: '/timeline' }),
  component: TimelinePage,
})

const sel = 'rounded-full bg-ivory/5 border border-gold/25 px-4 py-2 text-sm outline-none focus:border-gold'

function TimelinePage() {
  const { dynasties, events } = Route.useLoaderData()
  const [era, setEra] = useState('')
  const [dyn, setDyn] = useState('')
  const [type, setType] = useState('')
  const [major, setMajor] = useState(false)
  const [q, setQ] = useState('')
  const list = useMemo(() => {
    const n = normalize(q)
    return events.filter((e) => (!era || e.era === era) && (!dyn || e.dynastySlug === dyn) && (!type || e.type === type) && (!major || e.importance === 'major') && (!n || normalize(`${e.title} ${e.description ?? ''} ${e.dynastyName}`).includes(n)))
  }, [events, era, dyn, type, major, q])

  return (
    <PageTransition>
      <div className="mx-auto max-w-5xl px-4 py-14">
        <Breadcrumbs items={[{ label: 'گاه‌شمار سراسری' }]} />
        <h1 className="text-5xl font-black text-gilded">گاه‌شمار سراسری</h1>
        <p className="mt-3 text-ivory/65">{fa(events.length)} رویداد از {fa(dynasties.length)} دوره.</p>

        <form role="search" onSubmit={(e) => e.preventDefault()} className="sticky top-16 z-20 mt-8 glass bg-night/80 rounded-2xl p-4 flex flex-wrap gap-3 items-center">
          <label><span className="sr-only">جست‌وجو</span><input value={q} onChange={(e) => setQ(e.target.value)} placeholder="جست‌وجوی رویداد…" className={sel} /></label>
          <label><span className="sr-only">دوران</span>
            <select value={era} onChange={(e) => { setEra(e.target.value); setDyn('') }} className={sel}>
              <option value="">همه‌ی دوران‌ها</option>{Object.entries(eraNames).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </select></label>
          <label><span className="sr-only">دودمان</span>
            <select value={dyn} onChange={(e) => setDyn(e.target.value)} className={sel}>
              <option value="">همه‌ی دودمان‌ها</option>{dynasties.filter((d) => !era || d.era === era).map((d) => <option key={d.slug} value={d.slug}>{d.name}</option>)}
            </select></label>
          <label><span className="sr-only">نوع</span>
            <select value={type} onChange={(e) => setType(e.target.value)} className={sel}>
              <option value="">همه‌ی انواع</option>{Object.entries(eventTypeNames).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </select></label>
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={major} onChange={(e) => setMajor(e.target.checked)} className="accent-[#d9b45a] size-4" /> فقط رویدادهای کلیدی</label>
          <span className="text-xs text-ivory/50 mr-auto" aria-live="polite">{fa(list.length)} نتیجه</span>
        </form>

        <ol className="relative mt-10 border-r-2 border-gold/20 pr-6">
          <AnimatePresence initial={false}>
            {list.map((e) => (
              <motion.li key={e.id} layout initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="relative mb-5">
                <span className="absolute -right-[1.95rem] top-2 size-3.5 rounded-full ring-4 ring-night" style={{ background: e.accent }} aria-hidden="true" />
                <div className="glass rounded-xl p-4 hover:border-gold/50 transition-colors">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-bold text-gold-bright text-sm">{year(e.year)}</span>
                    <span className="text-turquoise-soft"><EventIcon type={e.type} /> {eventTypeNames[e.type]}</span>
                    <Link to="/dynasty/$slug" params={{ slug: e.dynastySlug }} className="rounded-full px-3 py-2 border hover:bg-ivory/10 min-h-11 inline-flex items-center text-sm" style={{ borderColor: e.accent }}>{e.dynastyName}</Link>
                  </div>
                  <p className={`mt-1 ${e.importance === 'major' ? 'font-bold text-lg' : 'text-ivory/80'}`}>{e.title}</p>
                  {e.description && <p className="text-sm text-ivory/60 leading-7 mt-1">{e.description}</p>}
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ol>
      </div>
    </PageTransition>
  )
}
