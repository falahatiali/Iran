import { Link, createFileRoute } from '@tanstack/react-router'
import { getRuler } from '../../server/api'
import { Breadcrumbs } from '../../components/Breadcrumbs'
import { FamilyTree } from '../../components/FamilyTree'
import { Sources } from '../../components/Sources'
import { PageTransition, Reveal } from '../../components/Reveal'
import { Shamseh } from '../../components/Ornament'
import { EventIcon } from '../../components/EventIcon'
import { eventTypeNames, fa, range, shRange, year } from '../../lib/format'
import { kingAlternates, kingJsonLd, seo } from '../../lib/seo'
import { getFeaturedKing } from '../../data/featured'
import { placesForKing } from '../../data/places'
import { FeaturedDossier } from '../../components/featured/FeaturedDossier'

export const Route = createFileRoute('/king/$slug')({
  loader: ({ params }) => getRuler({ data: params.slug }),
  head: ({ loaderData, params }) => {
    if (!loaderData) return {}
    const fk = getFeaturedKing(params.slug)
    const base = seo({
      title: fk ? fk.title.fa : loaderData.ruler.name,
      description: `${loaderData.ruler.name} (${loaderData.dynasty.name}): ${loaderData.ruler.description}`,
      path: `/king/${params.slug}`,
      alternates: fk ? kingAlternates(params.slug) : undefined,
    })
    return {
      ...base,
      scripts: [kingJsonLd({ locale: 'fa', slug: params.slug, headline: fk ? fk.title.fa : loaderData.ruler.name, name: loaderData.ruler.name, sameAs: fk?.wikipedia })],
    }
  },
  component: KingPage,
})

function KingPage() {
  const k = Route.useLoaderData()
  const { ruler: r, dynasty: d } = k
  const years = (r.end ?? new Date().getFullYear()) - r.start
  const sh = shRange(r.start, r.end)
  const featured = getFeaturedKing(r.id)
  return (
    <PageTransition>
      <article>
        <header className="relative overflow-hidden border-b border-gold/15">
          <div className="absolute inset-0" style={{ background: `radial-gradient(700px 380px at 20% 10%, ${d.accent}66, transparent 70%)` }} />
          <Shamseh className="absolute -left-12 -top-12 sm:-left-24 sm:-top-24 w-64 h-64 sm:w-96 sm:h-96 opacity-15" spin />
          <div className="relative mx-auto max-w-5xl px-4 py-14 md:py-20">
            <Breadcrumbs items={[{ label: d.name, to: '/dynasty/$slug', params: { slug: d.slug } }, { label: r.name }]} />
            <p className="text-turquoise-soft">{d.name}</p>
            <h1 className="text-5xl md:text-7xl font-black mt-2 text-gilded leading-tight">{r.name}</h1>
            <p dir="ltr" className="text-right text-ivory/50 mt-2">{r.latin}</p>
            <dl className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="glass rounded-2xl p-4"><dt className="text-xs text-ivory/50">دوران فرمانروایی</dt><dd className="font-bold text-gold-bright mt-1">{range(r.start, r.end)}</dd></div>
              {sh && <div className="glass rounded-2xl p-4"><dt className="text-xs text-ivory/50">خورشیدی (تقریبی)</dt><dd className="font-bold text-turquoise-soft mt-1">{sh}</dd></div>}
              <div className="glass rounded-2xl p-4"><dt className="text-xs text-ivory/50">مدت</dt><dd className="font-bold mt-1">{years > 0 ? `${fa(years)} سال` : 'کمتر از یک سال'}</dd></div>
              <div className="glass rounded-2xl p-4"><dt className="text-xs text-ivory/50">دودمان</dt><dd className="font-bold mt-1"><Link to="/dynasty/$slug" params={{ slug: d.slug }} className="hover:text-gold inline-block py-2 min-h-11">{d.name}</Link></dd></div>
            </dl>
          </div>
        </header>

        <div className="mx-auto max-w-5xl px-4 py-14 space-y-14">
          <Reveal>
            <section aria-labelledby="bio-h">
              <h2 id="bio-h" className="text-2xl font-bold text-gold mb-4">زندگی‌نامه</h2>
              <p className="text-xl leading-10 text-ivory/90">{r.description}</p>
              {r.id === 'cyrus-ii' && (
                <p className="mt-4">
                  <Link to="/cylinder" className="text-gold hover:underline min-h-11 inline-flex items-center">صفحهٔ پرچم: استوانهٔ کوروش (BM 90920)</Link>
                </p>
              )}
              {featured && (
                <p className="mt-4 flex flex-wrap gap-2">
                  <a href="#fk-h" className="text-gold hover:underline min-h-11 inline-flex items-center">پروندهٔ ویژه: نقشهٔ متحرک و تحلیل مالکیت ↓</a>
                  <a href={`/en/king/${r.id}`} hrefLang="en" className="glass rounded-full px-4 min-h-11 inline-flex items-center hover:border-gold">English</a>
                </p>
              )}
              <p className="mt-4 text-ivory/60 leading-8">
                {r.name} در {year(r.start)} بر تخت {d.name} نشست{k.predecessor ? ` و جانشین ${k.predecessor.name} شد` : ''}.
                {k.successor ? ` پس از او ${k.successor.name} به فرمانروایی رسید.` : r.end === null ? '' : ' با او این دودمان به پایان رسید یا دوران آن بسته شد.'}
              </p>
            </section>
          </Reveal>

          <Reveal>
            <FamilyTree self={{ id: r.id, name: r.name, reign: [r.start, r.end], isRuler: true }} father={k.father} grandfather={k.grandfather}
              mother={k.mother} spouses={k.spouses} siblings={k.siblings} children={k.children} grandchildren={k.grandchildren} />
          </Reveal>

          {k.events.length > 0 && (
            <section aria-labelledby="ev-h">
              <h2 id="ev-h" className="text-2xl font-bold text-gold mb-6">رویدادهای دوران او</h2>
              <ol className="relative border-r-2 border-gold/25 pr-6 space-y-5">
                {k.events.map((e, i) => (
                  <Reveal key={e.id} delay={i * 0.05}>
                    <li className="relative">
                      <span className="absolute -right-[1.95rem] top-1.5 size-3.5 rounded-full ring-4 ring-night" style={{ background: d.accent }} aria-hidden="true" />
                      <span className="text-xs text-turquoise-soft"><EventIcon type={e.type} /> {eventTypeNames[e.type]} · {year(e.year)}</span>
                      <p className={e.importance === 'major' ? 'font-bold text-lg' : 'text-ivory/80'}>{e.title}</p>
                      {e.description && <p className="text-sm text-ivory/60 leading-7">{e.description}</p>}
                    </li>
                  </Reveal>
                ))}
              </ol>
            </section>
          )}

          {placesForKing(r.id).length > 0 && (
            <section aria-label="مکان‌های مرتبط" className="mt-10 flex flex-wrap gap-2">
              {placesForKing(r.id).map((pl) => <Link key={pl.slug} to="/place/$slug" params={{ slug: pl.slug }} className="glass rounded-full px-4 py-2 inline-flex items-center min-h-11 hover:border-gold">مکان: {pl.name.fa}</Link>)}
            </section>
          )}
          {featured && <FeaturedDossier king={featured} locale="fa" />}

          <nav aria-label="فرمانروای پیشین و پسین" className="grid sm:grid-cols-2 gap-4">
            {k.predecessor ? (
              <Link to="/king/$slug" params={{ slug: k.predecessor.id }} className="glass rounded-2xl p-5 hover:border-gold transition-colors group">
                <span className="text-xs text-ivory/50">→ پیشین</span><span className="block text-xl font-bold mt-1 group-hover:text-gold-bright">{k.predecessor.name}</span>
                <span className="text-xs text-ivory/50">{range(k.predecessor.start, k.predecessor.end)}</span>
              </Link>
            ) : <span />}
            {k.successor && (
              <Link to="/king/$slug" params={{ slug: k.successor.id }} className="glass rounded-2xl p-5 text-left hover:border-gold transition-colors group">
                <span className="text-xs text-ivory/50">پسین ←</span><span className="block text-xl font-bold mt-1 group-hover:text-gold-bright">{k.successor.name}</span>
                <span className="text-xs text-ivory/50">{range(k.successor.start, k.successor.end)}</span>
              </Link>
            )}
          </nav>

          <Sources sources={k.sources} />
        </div>
      </article>
    </PageTransition>
  )
}
