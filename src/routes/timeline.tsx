import { createFileRoute, Link, stripSearchParams, useNavigate } from '@tanstack/react-router'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useMemo } from 'react'
import { getTimeline } from '../server/api'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { PageTransition } from '../components/Reveal'
import { EventIcon } from '../components/EventIcon'
import { topicForEventTitle } from '../data/topics'
import { ShareLink } from '../components/ShareLink'
import { eraNames, eventTypeNames, fa, year } from '../lib/format'
import { seo } from '../lib/seo'
import { placeForEventTitle } from '../data/places'
import { CertaintyBadge, TimelineChart } from '../components/timeline/TimelineChart'
import type { Win } from '../components/timeline/scale'
import {
  TIMELINE_DEFAULTS,
  TIMELINE_MAX,
  applyTimelineSearch,
  hasNonDefaultSearch,
  timelineSearchSchema,
  type TimelineSearch,
} from '../lib/searchSchema'
import { useDraftQuery } from '../lib/useDraftQuery'

export const Route = createFileRoute('/timeline')({
  validateSearch: (search: Record<string, unknown>): TimelineSearch => timelineSearchSchema.parse(search),
  search: { middlewares: [stripSearchParams(TIMELINE_DEFAULTS)] },
  loader: () => getTimeline(),
  head: ({ match }) => seo({
    title: 'گاه‌شمار سراسری',
    description: 'همه‌ی رویدادهای تاریخ ایران از ایلام تا امروز، با فیلتر دوران، دودمان و نوع رویداد.',
    path: '/timeline',
    noindex: hasNonDefaultSearch({ ...TIMELINE_DEFAULTS, ...match.search }, TIMELINE_DEFAULTS),
  }),
  component: TimelinePage,
})

const sel = 'rounded-full bg-ivory/5 border border-gold/25 px-4 py-2 text-sm outline-none focus:border-gold'

function TimelinePage() {
  const { dynasties, events } = Route.useLoaderData()
  const search = Route.useSearch({ select: (s) => ({ ...TIMELINE_DEFAULTS, ...s }) })
  const navigate = useNavigate({ from: '/timeline' })
  const list = useMemo(() => applyTimelineSearch(events, search), [events, search])
  // the chart shows every filtered event across all time; the window only narrows what is drawn and listed
  const chartEvents = useMemo(() => applyTimelineSearch(events, { ...search, from: TIMELINE_DEFAULTS.from, to: TIMELINE_DEFAULTS.to, sort: 'year-asc' }), [events, search])
  const reduced = useReducedMotion() ?? false
  const eraRanges = useMemo(() => Object.keys(eraNames).flatMap((id) => {
    const ds = dynasties.filter((d) => d.era === id)
    if (!ds.length) return []
    return [{ id, from: Math.min(...ds.map((d) => d.start)), to: Math.min(TIMELINE_MAX, Math.max(...ds.map((d) => d.end ?? TIMELINE_MAX))) }]
  }), [dynasties])
  const selected = events.find((e) => e.id === search.ev)

  const patch = (next: Partial<TimelineSearch>, replace: boolean) => {
    void navigate({
      search: (prev) => ({ ...prev, ...next }),
      replace,
      resetScroll: false,
    })
  }
  const setWindow = (w: Win, replace: boolean) => patch({ from: w.from, to: w.to }, replace)
  const [draft, setDraft] = useDraftQuery(search.q, (q) => patch({ q }, true))

  return (
    <PageTransition>
      <div className="mx-auto max-w-5xl px-4 py-14">
        <Breadcrumbs items={[{ label: 'گاه‌شمار سراسری' }]} />
        <h1 className="text-5xl font-black text-gilded">گاه‌شمار سراسری</h1>
        <p className="mt-3 text-ivory/65">{fa(events.length)} رویداد از {fa(dynasties.length)} دوره.</p>

        <form role="search" onSubmit={(e) => e.preventDefault()} className="sticky top-16 z-20 mt-8 glass bg-night/80 rounded-2xl p-4 flex flex-wrap gap-3 items-center">
          <label><span className="sr-only">جست‌وجو</span><input value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="جست‌وجوی رویداد…" className={sel} /></label>
          <label><span className="sr-only">دوران</span>
            <select value={search.era} onChange={(e) => { const era = e.target.value as TimelineSearch['era']; const r = eraRanges.find((x) => x.id === era); patch({ era, dynasty: '', from: r?.from ?? TIMELINE_DEFAULTS.from, to: r?.to ?? TIMELINE_DEFAULTS.to }, false) }} className={sel}>
              <option value="">همه‌ی دوران‌ها</option>{Object.entries(eraNames).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </select></label>
          <label><span className="sr-only">دودمان</span>
            <select value={search.dynasty} onChange={(e) => patch({ dynasty: e.target.value }, false)} className={sel}>
              <option value="">همه‌ی دودمان‌ها</option>{dynasties.filter((d) => !search.era || d.era === search.era).map((d) => <option key={d.slug} value={d.slug}>{d.name}</option>)}
            </select></label>
          <label><span className="sr-only">نوع</span>
            <select value={search.type} onChange={(e) => patch({ type: e.target.value as TimelineSearch['type'] }, false)} className={sel}>
              <option value="">همه‌ی انواع</option>{Object.entries(eventTypeNames).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </select></label>
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={search.major} onChange={(e) => patch({ major: e.target.checked }, false)} className="accent-[#d9b45a] size-4" /> فقط رویدادهای کلیدی</label>
          <label><span className="sr-only">چینش</span>
            <select value={search.sort} onChange={(e) => patch({ sort: e.target.value as TimelineSearch['sort'] }, false)} className={sel}>
              <option value="year-asc">کهن به نو</option>
              <option value="year-desc">نو به کهن</option>
            </select></label>
          <ShareLink />
          <span className="text-xs text-ivory/50 mr-auto" aria-live="polite">{fa(list.length)} نتیجه</span>
        </form>

        <TimelineChart dynasties={dynasties} events={chartEvents} win={{ from: search.from, to: search.to }} selected={selected} onWindow={setWindow} onSelect={(ev) => patch({ ev }, true)} eraRanges={eraRanges} eraNames={eraNames} reduced={reduced} />

        <h2 className="sr-only">فهرست رویدادها</h2>
        <ol className="relative mt-10 border-r-2 border-gold/20 pr-6">
          <AnimatePresence initial={false}>
            {list.map((e) => (
              <motion.li key={e.id} id={e.id} layout={!reduced} initial={reduced ? false : { opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={reduced ? { opacity: 0 } : { opacity: 0, x: -20 }} transition={{ duration: reduced ? 0 : 0.3 }} className="relative mb-5 scroll-mt-40">
                <span className="absolute -right-[1.95rem] top-2 size-3.5 rounded-full ring-4 ring-night" style={{ background: e.accent }} aria-hidden="true" />
                <div className={`glass rounded-xl p-4 hover:border-gold/50 transition-colors ${search.ev === e.id ? 'border-gold' : ''}`}>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-bold text-gold-bright text-sm">{year(e.year)}</span>
                    <span className="text-turquoise-soft"><EventIcon type={e.type} /> {eventTypeNames[e.type]}</span>
                    <CertaintyBadge y={e.year} />
                    <Link to="/dynasty/$slug" params={{ slug: e.dynastySlug }} className="rounded-full px-3 py-2 border hover:bg-ivory/10 min-h-11 inline-flex items-center text-sm" style={{ borderColor: e.accent }}>{e.dynastyName}</Link>
                  </div>
                  <p className={`mt-1 ${e.importance === 'major' ? 'font-bold text-lg' : 'text-ivory/80'}`}>{e.title}</p>
                  {e.description && <p className="text-sm text-ivory/60 leading-7 mt-1">{e.description}</p>}
                  {(() => { const pl = placeForEventTitle(e.title); return pl && <Link to="/place/$slug" params={{ slug: pl.slug }} className="mt-2 inline-flex items-center min-h-11 text-sm text-gold hover:underline">صفحهٔ {pl.name.fa} ←</Link> })()}
                  {(() => { const tp = topicForEventTitle(e.title); return tp && <a href={tp.path} className="mt-2 ms-4 inline-flex items-center min-h-11 text-sm text-gold hover:underline">صفحهٔ {tp.name} ←</a> })()}
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ol>
        {list.length === 0 && <p className="text-center py-16 text-ivory/50">نتیجه‌ای برای این پالایه یافت نشد.</p>}
      </div>
    </PageTransition>
  )
}
