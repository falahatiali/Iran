import { Link, createFileRoute } from '@tanstack/react-router'
import { getDynasty } from '../../server/api'
import { Breadcrumbs } from '../../components/Breadcrumbs'
import { RulerCard } from '../../components/RulerCard'
import { InterleavedTimeline } from '../../components/Timeline'
import { DynastyMap } from '../../components/DynastyMap'
import { Sources } from '../../components/Sources'
import { Reveal, PageTransition } from '../../components/Reveal'
import { Divider } from '../../components/Ornament'
import { eraNames, fa, range } from '../../lib/format'
import { seo } from '../../lib/seo'

export const Route = createFileRoute('/dynasty/$slug')({
  loader: ({ params }) => getDynasty({ data: params.slug }),
  head: ({ loaderData, params }) => loaderData ? seo({ title: loaderData.dynasty.name, description: loaderData.dynasty.summary, path: `/dynasty/${params.slug}` }) : {},
  component: DynastyPage,
})

function DynastyPage() {
  const { dynasty: d, rulers, events, sources, extent, prev, next } = Route.useLoaderData()
  return (
    <PageTransition>
      <header className="relative overflow-hidden girih-bg border-b border-gold/15">
        <div className="absolute inset-0" style={{ background: `radial-gradient(800px 400px at 70% 0%, ${d.accent}55, transparent 70%)` }} />
        <div className="relative mx-auto max-w-7xl px-4 py-14 md:py-20">
          <Breadcrumbs items={[{ label: eraNames[d.era] }, { label: d.name }]} />
          <p className="text-turquoise-soft">{eraNames[d.era]}</p>
          <h1 className="text-5xl md:text-7xl font-black mt-2 text-gilded leading-tight">{d.name}</h1>
          <p dir="ltr" className="text-right text-ivory/50 mt-2">{d.latin}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="glass rounded-full px-4 py-1.5">⏳ {range(d.start, d.end)}</span>
            <span className="glass rounded-full px-4 py-1.5">🏛 پایتخت: {d.capital}</span>
            <span className="glass rounded-full px-4 py-1.5">👑 {fa(rulers.length)} فرمانروا</span>
            <span className="glass rounded-full px-4 py-1.5">📜 {fa(events.length)} رویداد</span>
          </div>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-ivory/85">{d.summary}</p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-14">
        {extent && (
          <Reveal className="grid lg:grid-cols-[2fr_1fr] gap-6 items-center">
            <DynastyMap extent={extent} accent={d.accent} name={d.name} />
            <div>
              <h2 className="text-2xl font-bold text-gold">گستره‌ی فرمانروایی</h2>
              <p className="mt-3 leading-8 text-ivory/75">طرح ساده‌شده‌ی قلمرو {d.name} در اوج گسترش. مرزهای دوران پیشامدرن سیال بودند؛ این نقشه تنها برای جهت‌یابی است.</p>
            </div>
          </Reveal>
        )}

        <Divider />
        <h2 className="text-3xl font-black mb-8">{d.slug === 'islamic-republic' ? 'رهبران' : 'فرمانروایان'}</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rulers.map((r, i) => <Reveal key={r.id} delay={(i % 3) * 0.08}><RulerCard r={r} accent={d.accent} index={i} /></Reveal>)}
        </div>

        <Divider />
        <h2 className="text-3xl font-black mb-2">گاه‌شمار</h2>
        <p className="text-ivory/55 mb-10">پادشاهان (طلایی) و رویدادها (رنگ دودمان) به ترتیب زمان؛ رویدادهای کلیدی پررنگ‌ترند.</p>
        <InterleavedTimeline rulers={rulers} events={events} accent={d.accent} />

        <Sources sources={sources} />

        <nav aria-label="دودمان قبلی و بعدی" className="mt-16 grid sm:grid-cols-2 gap-4">
          {prev ? <Link to="/dynasty/$slug" params={{ slug: prev.slug }} className="glass rounded-2xl p-5 hover:border-gold transition-colors"><span className="text-xs text-ivory/50">→ دودمان پیشین</span><span className="block text-xl font-bold mt-1">{prev.name}</span></Link> : <span />}
          {next && <Link to="/dynasty/$slug" params={{ slug: next.slug }} className="glass rounded-2xl p-5 text-left hover:border-gold transition-colors"><span className="text-xs text-ivory/50">دودمان پسین ←</span><span className="block text-xl font-bold mt-1">{next.name}</span></Link>}
        </nav>
      </div>
    </PageTransition>
  )
}
