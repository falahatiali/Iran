import { Link } from '@tanstack/react-router'
import { ERA_LABELS, type CivEra, type CivPhoto, type CivSummary } from '../../data/civilizations/types'
import { fa } from '../../lib/format'
import { Breadcrumbs } from '../Breadcrumbs'
import { Shamseh } from '../Ornament'
import { PageTransition, Reveal } from '../Reveal'
import { CivChronology } from './CivChronology'
import { CivEmblem } from './CivEmblem'
import { CivMap } from './CivMap'

export interface LandingData {
  items: readonly (CivSummary & { cover?: CivPhoto })[]
  stats: { civs: number; photos: number; videos: number; sources: number }
}

const ERA_ORDER: CivEra[] = ['neolithic', 'chalcolithic', 'bronze', 'elamite', 'iron']

export function CivLanding({ data }: { data: LandingData }) {
  const { items, stats } = data
  return (
    <PageTransition>
      <article data-book="civilizations" data-section="landing">
        <header className="relative overflow-hidden border-b border-gold/15 girih-bg">
          <Shamseh className="absolute -top-28 -start-28 w-[28rem] h-[28rem] opacity-10" spin />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-night/60 to-night" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 py-14 md:py-24 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center">
            <div>
              <Breadcrumbs items={[{ label: 'تمدن‌های کهن ایران' }]} />
              <p className="text-turquoise-soft font-bold">دانشنامه · از هزارهٔ نهم پ.م. تا برآمدن مادها</p>
              <h1 className="civ-title mt-3 text-5xl md:text-7xl font-black leading-tight">تمدن‌های کهن ایران</h1>
              <p className="read read-lede mt-6 text-ivory/90">
                پیش از هخامنشیان، فلات ایران و دامنه‌های آن خانهٔ نخستین گله‌داران، سفالگران چیره‌دست، شهرهای خشتی بیابان و پادشاهی کهن ایلام بود. این دانشنامه هر تمدن را در صفحه‌ای جدا روایت می‌کند: با نقشه، گاه‌نگار، تصویرهای آزاد، پیوند ویدیوها و منبع برای هر ادعا.
              </p>
              <p className="read mt-4 text-ivory/70">
                تاریخ‌ها همه تقریبی‌اند و گاه پژوهشگران بر سرشان هم‌داستان نیستند. هر جا اختلاف هست، هر دو روایت با منبع آمده است.
              </p>
              <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
                {([['تمدن و محوطه', stats.civs], ['تصویر آزاد', stats.photos], ['ویدیو', stats.videos], ['منبع', stats.sources]] as const).map(([l, n]) => (
                  <div key={l} className="glass rounded-2xl p-4 text-center"><dt className="text-xs text-ivory/55">{l}</dt><dd className="text-3xl font-black text-gold-bright mt-1">{fa(n)}</dd></div>
                ))}
              </dl>
            </div>
            <div className="glass rounded-[2rem] p-3 md:p-4">
              <CivMap items={items} className="w-full h-auto rounded-[1.5rem]" />
              <p className="mt-2 text-center text-xs text-ivory/50">روی نام هر تمدن بزنید تا صفحه‌اش باز شود.</p>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-4 py-14 grid gap-20">
          <section aria-labelledby="chrono-h">
            <Reveal>
              <p className="text-turquoise-soft font-bold text-sm">گاه‌نگار</p>
              <h2 id="chrono-h" className="text-3xl md:text-4xl font-black text-gilded">هزاره‌ها در یک نگاه</h2>
              <p className="read mt-3 text-ivory/70">هر نوار، بازهٔ تقریبی سکونت یا شکوفایی یک تمدن است، به تاریخی که منبع‌های صفحهٔ آن تمدن آورده‌اند.</p>
              <div className="mt-6"><CivChronology items={items} /></div>
            </Reveal>
          </section>

          {ERA_ORDER.map((era) => {
            const group = items.filter((c) => c.era === era)
            if (group.length === 0) return null
            const e = ERA_LABELS[era]
            return (
              <section key={era} aria-labelledby={`era-${era}`}>
                <Reveal>
                  <header className="flex flex-wrap items-end justify-between gap-3 border-b border-gold/15 pb-3">
                    <h2 id={`era-${era}`} className="text-3xl md:text-4xl font-black" style={{ color: e.color }}>{e.name}</h2>
                    <p className="text-sm text-ivory/55">{e.span}</p>
                  </header>
                </Reveal>
                <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {group.map((c, i) => (
                    <li key={c.slug}>
                      <Reveal delay={i * 0.06} className="h-full">
                        <Link to="/civilizations/$slug" params={{ slug: c.slug }} className="civ-card group glass relative flex h-full flex-col overflow-hidden rounded-3xl" style={{ ['--civ-accent' as string]: c.accent }}>
                          <div className="relative h-44 overflow-hidden">
                            {c.cover
                              ? <img src={c.cover.src} alt="" loading="lazy" decoding="async" className="civ-card-img h-full w-full object-cover" />
                              : <div className="h-full w-full" style={{ background: `radial-gradient(circle at 30% 30%, ${c.accent}, #070d1f)` }} />}
                            <div className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-transparent" aria-hidden="true" />
                            <span className="absolute top-3 start-3 rounded-full bg-night/70 px-3 py-1 text-xs font-bold backdrop-blur" style={{ color: e.color }}>{c.spanLabel}</span>
                            <CivEmblem name={c.emblem} className="absolute -bottom-1 end-3 size-16 text-gold-bright drop-shadow-[0_0_12px_rgba(0,0,0,.8)]" />
                          </div>
                          <div className="flex flex-1 flex-col p-5">
                            <h3 className="text-2xl font-black text-ivory group-hover:text-gold-bright">{c.name}</h3>
                            <p dir="ltr" className="text-right text-xs text-ivory/45">{c.latin}</p>
                            <p className="mt-3 text-sm leading-7 text-ivory/80">{c.tagline}</p>
                            <p className="mt-auto pt-4 text-xs text-ivory/50">{c.region}</p>
                          </div>
                        </Link>
                      </Reveal>
                    </li>
                  ))}
                </ul>
              </section>
            )
          })}

          <section aria-labelledby="method-h" className="glass rounded-3xl p-6 md:p-8">
            <h2 id="method-h" className="text-2xl font-black text-gilded">روش این دانشنامه</h2>
            <p className="read mt-3 text-ivory/80">
              هر بند به منبع‌هایش پیوند دارد: دانشنامهٔ ایرانیکا، برگه‌های ثبت جهانی یونسکو، گزارش‌های کاوش، مقاله‌های داوری‌شده و پرونده‌های موزه‌ها. عکس‌ها یا آزادند (ویکی‌انبار با پروانهٔ کریتیو کامنز یا مالکیت عمومی) یا از مجموعهٔ دسترسی آزاد موزهٔ متروپولیتن (CC0)؛ پدیدآورنده و پروانهٔ هر عکس زیر آن آمده است. ویدیوها تنها پیوندند و محتوایشان بر عهدهٔ سازندگانشان است. برداشت خودمان، هر جا آمده، جدا و با برچسب «نگاه ما» است.
            </p>
            <p className="mt-4"><Link to="/timeline" className="text-gold hover:underline">گاه‌شمار سراسری تاریخ ایران ←</Link></p>
          </section>
        </div>
        <div data-track-view="story_complete" data-section="landing" aria-hidden="true" className="h-px" />
      </article>
    </PageTransition>
  )
}
