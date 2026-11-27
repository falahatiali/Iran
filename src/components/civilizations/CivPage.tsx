import { Link } from '@tanstack/react-router'
import { civSource } from '../../data/civilizations/sources'
import { ERA_LABELS, type CivPhoto, type CivSource, type CivSummary, type Civilization } from '../../data/civilizations/types'
import { fa } from '../../lib/format'
import { Breadcrumbs } from '../Breadcrumbs'
import { PageTransition, Reveal } from '../Reveal'
import { SectionNav } from '../SectionNav'
import { CivChronology } from './CivChronology'
import { CivEmblem } from './CivEmblem'
import { CivMap } from './CivMap'

const KIND: Record<CivSource['kind'], string> = { encyclopedia: 'دانشنامه', museum: 'موزه', journal: 'مقالهٔ علمی', unesco: 'یونسکو', magazine: 'مجله', book: 'کتاب', report: 'گزارش' }

/** The page's bibliography: every source cited in a section or milestone, numbered by first citation. */
export function citedSources(civ: Civilization): CivSource[] {
  const ids = [...new Set([...civ.sections.flatMap((s) => s.sources), ...civ.timeline.flatMap((m) => m.sources)])]
  return ids.flatMap((id) => { const s = civSource(id); return s ? [s] : [] })
}

function Cites({ ids, order }: { ids: readonly string[]; order: Map<string, number> }) {
  return (
    <span className="ms-1 inline-flex flex-wrap gap-1 align-baseline">
      {ids.map((id) => order.has(id) && (
        <a key={id} href={`#src-${id}`} className="inline-flex min-h-6 items-center rounded-md border border-gold/30 px-1.5 text-[0.7rem] font-bold text-gold hover:bg-gold/15" aria-label={`منبع ${fa(order.get(id)!)}`}>[{fa(order.get(id)!)}]</a>
      ))}
    </span>
  )
}

function Figure({ p, className = '' }: { p: CivPhoto; className?: string }) {
  return (
    <figure className={`overflow-hidden rounded-2xl border border-gold/15 bg-night/50 ${className}`}>
      <div className="bg-black/40"><img src={p.src} alt={p.caption} loading="lazy" decoding="async" className="mx-auto block h-auto max-h-[34rem] w-auto max-w-full" style={{ aspectRatio: String(p.ratio) }} /></div>
      <figcaption className="p-3 text-xs leading-6 text-ivory/70">
        {p.caption}
        <span className="block text-ivory/45">
          {p.museum ? `${p.museum} · ` : ''}
          <a href={p.page} target="_blank" rel="noopener" className="underline decoration-dotted hover:text-gold">{p.author} · {p.license}</a>
        </span>
      </figcaption>
    </figure>
  )
}

export function CivPage({ civ, all }: { civ: Civilization; all: readonly CivSummary[] }) {
  const era = ERA_LABELS[civ.era]
  const sources = citedSources(civ)
  const order = new Map(sources.map((s, i) => [s.id, i + 1]))
  const photo = new Map(civ.photos.map((p) => [p.id, p]))
  const inSections = new Set(civ.sections.flatMap((s) => (s.photo ? [s.photo] : [])))
  const gallery = civ.photos.filter((p) => !inSections.has(p.id))
  const cover = civ.photos[0]
  const idx = all.findIndex((c) => c.slug === civ.slug)
  const prev = idx > 0 ? all[idx - 1] : undefined
  const next = idx >= 0 && idx < all.length - 1 ? all[idx + 1] : undefined
  const related = civ.related.flatMap((s) => all.filter((c) => c.slug === s))
  const timeline = [...civ.timeline].sort((a, b) => a.year - b.year)
  const nav: [string, string][] = [
    ...civ.sections.map((s) => [s.id, s.title] as [string, string]),
    ['timeline', 'گاه‌نگار'],
    ...(gallery.length ? [['gallery', 'تصویرها'] as [string, string]] : []),
    ...(civ.videos.length ? [['videos', 'ویدیوها'] as [string, string]] : []),
    ...(civ.view?.length ? [['our-view', 'نگاه ما'] as [string, string]] : []),
    ['sources', 'منابع'],
  ]

  return (
    <PageTransition>
      <article data-book="civilizations" data-section={civ.slug} style={{ ['--civ-accent' as string]: civ.accent }}>
        <header className="relative overflow-hidden border-b border-gold/15">
          {cover && <img src={cover.src} alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" fetchPriority="high" />}
          <div className="absolute inset-0 bg-gradient-to-b from-night/40 via-night/75 to-night" aria-hidden="true" />
          <div className="absolute inset-0" style={{ background: `radial-gradient(60% 70% at 80% 20%, ${civ.accent}33, transparent 70%)` }} aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-4 pt-8 pb-14 md:pb-20">
            <Breadcrumbs items={[{ label: 'تمدن‌های کهن ایران', to: '/civilizations' }, { label: civ.name }]} />
            <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
              <div>
                <p className="font-bold" style={{ color: era.color }}>{era.name} · {civ.spanLabel}</p>
                <h1 className="civ-title mt-2 text-5xl md:text-7xl font-black leading-tight">{civ.name}</h1>
                <p dir="ltr" className="text-right mt-1 text-ivory/50">{civ.latin}</p>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-ivory/85">{civ.tagline}</p>
              </div>
              <CivEmblem name={civ.emblem} title={civ.name} className="mx-auto size-36 md:size-48 text-gold-bright drop-shadow-[0_0_30px_var(--civ-accent)]" />
            </div>
          </div>
        </header>

        <SectionNav items={nav} label={`بخش‌های صفحهٔ ${civ.name}`} />

        <div className="mx-auto max-w-6xl px-4 py-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div className="min-w-0">
            <div className="grid gap-4">
              {civ.lede.map((p, i) => <p key={i} className={`read ${i === 0 ? 'read-lede text-ivory' : 'text-ivory/85'}`}>{p}</p>)}
            </div>

            {civ.sections.map((s, i) => {
              const ph = s.photo ? photo.get(s.photo) : undefined
              return (
                <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className="scroll-mt-32 mt-14">
                  <Reveal>
                    <h2 id={`${s.id}-h`} className="text-2xl md:text-3xl font-black text-gilded"><span className="text-ivory/30 me-2 text-lg">{fa(i + 1)}</span>{s.title}</h2>
                    <div className="mt-4 grid gap-4">
                      {s.body.map((p, j) => (
                        <p key={j} className="read text-ivory/85">{p}{j === s.body.length - 1 && <Cites ids={s.sources} order={order} />}</p>
                      ))}
                    </div>
                    {ph && <Figure p={ph} className="mt-6" />}
                  </Reveal>
                </section>
              )
            })}

            <section id="timeline" aria-labelledby="timeline-h" className="scroll-mt-32 mt-16">
              <h2 id="timeline-h" className="text-2xl md:text-3xl font-black text-gilded">گاه‌نگار {civ.name}</h2>
              <ol className="mt-6 relative border-s-2 border-gold/25 ps-6 grid gap-6">
                {timeline.map((m, i) => (
                  <li key={i} className="relative">
                    <span className="absolute -start-[2.05rem] top-1.5 size-4 rounded-full border-2 border-night" style={{ background: civ.accent }} aria-hidden="true" />
                    <p className="font-black text-gold-bright">{m.when}</p>
                    <p className="read mt-1 text-ivory/85">{m.text}<Cites ids={m.sources} order={order} /></p>
                  </li>
                ))}
              </ol>
            </section>

            {gallery.length > 0 && (
              <section id="gallery" aria-labelledby="gallery-h" className="scroll-mt-32 mt-16">
                <h2 id="gallery-h" className="text-2xl md:text-3xl font-black text-gilded">تصویرها</h2>
                <div className="mt-6 columns-1 sm:columns-2 gap-4 [&>figure]:mb-4 [&>figure]:break-inside-avoid">
                  {gallery.map((p) => <Figure key={p.id} p={p} />)}
                </div>
              </section>
            )}

            {civ.videos.length > 0 && (
              <section id="videos" aria-labelledby="videos-h" className="scroll-mt-32 mt-16">
                <h2 id="videos-h" className="text-2xl md:text-3xl font-black text-gilded">ویدیوها</h2>
                <p className="mt-2 text-sm text-ivory/55">پیوند به یوتیوب؛ محتوای هر ویدیو بر عهدهٔ سازندهٔ آن است.</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {civ.videos.map((v) => (
                    <li key={v.id}>
                      <a href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener" className="civ-card glass group flex h-full items-start gap-4 rounded-2xl p-4">
                        <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-[#c4302b]/85 text-white shadow-lg group-hover:scale-110 transition-transform" aria-hidden="true">
                          <svg viewBox="0 0 24 24" className="size-6 -scale-x-100 rtl:scale-x-100"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>
                        </span>
                        <span className="min-w-0">
                          <span className="block font-bold leading-7 text-ivory group-hover:text-gold-bright" dir="auto">{v.title}</span>
                          <span className="mt-1 block text-xs text-ivory/55">{v.channel} · {v.lang === 'fa' ? 'فارسی' : 'انگلیسی'}</span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {civ.view && civ.view.length > 0 && (
              <aside id="our-view" aria-labelledby="our-view-h" className="scroll-mt-32 mt-16 rounded-3xl border border-dashed border-turquoise-soft/40 bg-turquoise-soft/[.04] p-6">
                <p className="text-xs font-bold text-turquoise-soft">برداشت ما · جدا از متن مستند</p>
                <h2 id="our-view-h" className="mt-1 text-2xl font-black text-ivory">نگاه ما</h2>
                <div className="mt-3 grid gap-3">{civ.view.map((p, i) => <p key={i} className="read text-ivory/80">{p}</p>)}</div>
              </aside>
            )}

            <section id="sources" aria-labelledby="sources-h" className="scroll-mt-32 mt-16">
              <h2 id="sources-h" className="text-2xl md:text-3xl font-black text-gilded">منابع</h2>
              <ol className="mt-6 grid gap-3">
                {sources.map((s, i) => (
                  <li key={s.id} id={`src-${s.id}`} className="scroll-mt-32 flex gap-3 rounded-xl border border-gold/10 p-3 target:border-gold target:bg-gold/10">
                    <span className="font-black text-gold">{fa(i + 1)}</span>
                    <span className="min-w-0 text-sm leading-7 text-ivory/80">
                      {s.author}، <a href={s.url} target="_blank" rel="noopener" className="font-bold text-ivory underline decoration-gold/40 hover:text-gold" dir="auto">{s.title}</a>، {s.year}
                      <span className="ms-2 rounded-full bg-gold/10 px-2 py-0.5 text-[0.7rem] text-gold">{KIND[s.kind]}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          <aside className="grid content-start gap-6 lg:sticky lg:top-32 lg:self-start">
            <dl className="glass rounded-3xl p-5 grid gap-3">
              {civ.facts.map(([k, v]) => (
                <div key={k} className="border-b border-gold/10 pb-3 last:border-0 last:pb-0">
                  <dt className="text-xs text-ivory/50">{k}</dt>
                  <dd className="mt-0.5 text-sm font-bold leading-7 text-ivory">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="glass rounded-3xl p-2">
              <CivMap items={all} highlight={civ.slug} className="w-full h-auto rounded-2xl" />
            </div>
          </aside>
        </div>

        <div className="mx-auto max-w-6xl px-4 pb-16 grid gap-12">
          <section aria-labelledby="chrono-h">
            <h2 id="chrono-h" className="text-2xl font-black text-gilded">{civ.name} در کنار دیگر تمدن‌ها</h2>
            <div className="mt-4"><CivChronology items={all} highlight={civ.slug} /></div>
          </section>

          {related.length > 0 && (
            <section aria-labelledby="related-h">
              <h2 id="related-h" className="text-2xl font-black text-gilded">تمدن‌های پیوسته</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                {related.map((c) => (
                  <li key={c.slug}>
                    <Link to="/civilizations/$slug" params={{ slug: c.slug }} className="civ-card glass flex min-h-11 items-center gap-3 rounded-2xl p-4" style={{ ['--civ-accent' as string]: c.accent }}>
                      <CivEmblem name={c.emblem} className="size-12 shrink-0 text-gold" />
                      <span><span className="block font-black text-ivory">{c.name}</span><span className="text-xs text-ivory/55">{c.spanLabel}</span></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <nav aria-label="تمدن پیشین و پسین" className="grid gap-3 sm:grid-cols-2">
            {prev ? <Link to="/civilizations/$slug" params={{ slug: prev.slug }} className="glass rounded-2xl p-4 min-h-11 hover:border-gold"><span className="block text-xs text-ivory/50">→ کهن‌تر</span><span className="font-black">{prev.name}</span></Link> : <span />}
            {next && <Link to="/civilizations/$slug" params={{ slug: next.slug }} className="glass rounded-2xl p-4 min-h-11 text-end hover:border-gold"><span className="block text-xs text-ivory/50">تازه‌تر ←</span><span className="font-black">{next.name}</span></Link>}
          </nav>
        </div>
        <div data-track-view="story_complete" data-section={civ.slug} aria-hidden="true" className="h-px" />
      </article>
    </PageTransition>
  )
}
