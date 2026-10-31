import { createFileRoute, Link, stripSearchParams, useNavigate } from '@tanstack/react-router'
import { useMemo } from 'react'
import { getOverview, type DynastySummary } from '../server/api'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { PageTransition } from '../components/Reveal'
import { ShareLink } from '../components/ShareLink'
import { eraNames, fa, isCirca, range, year } from '../lib/format'
import { seo } from '../lib/seo'
import { pan, pos, ticks, zoom, type Win } from '../components/timeline/scale'
import { KINGS_DEFAULTS, inWindow, longest, packLanes, parseKingsSearch, reignLength, relate, type KingsSearch } from '../lib/reigns'
import { FEATURED_KING_SLUGS } from '../data/featured/slugs'
import { epithetsFor } from '../data/epithets'

export const Route = createFileRoute('/kings')({
  validateSearch: (search: Record<string, unknown>): KingsSearch => parseKingsSearch(search),
  search: { middlewares: [stripSearchParams(KINGS_DEFAULTS)] },
  loader: () => getOverview(),
  head: ({ match }) => seo({
    title: 'فرمانروایان ایران در یک نگاه',
    description: 'نوار زمانی همهٔ فرمانروایان ایران، از ایلام تا امروز، دودمان به دودمان؛ با مقایسهٔ دو فرمانروایی روی یک محور.',
    path: '/kings',
    noindex: Object.keys(match.search).length > 0,
  }),
  component: KingsPage,
})

/** the dataset’s “now”, for rulers still in office; fixed so the server and browser agree */
const NOW = 2026
const featured = new Set<string>(FEATURED_KING_SLUGS)
type RulerLite = DynastySummary['rulers'][number] & { dynasty: string; dynastyName: string; accent: string }

const btn = 'rounded-full border border-gold/25 bg-ivory/5 px-3 py-1.5 text-sm hover:border-gold hover:text-gold transition-colors min-h-11 min-w-11'
const sel = 'rounded-full bg-ivory/5 border border-gold/25 px-4 py-2 text-sm outline-none focus:border-gold w-full min-w-0 md:w-80'

function KingsPage() {
  const { dynasties } = Route.useLoaderData()
  const search = Route.useSearch({ select: (s) => ({ ...KINGS_DEFAULTS, ...s }) })
  const navigate = useNavigate({ from: '/kings' })
  const w: Win = { from: search.from, to: search.to }

  const all = useMemo<RulerLite[]>(() => dynasties.flatMap((d) => d.rulers.map((r) => ({ ...r, dynasty: d.slug, dynastyName: d.name, accent: d.accent }))), [dynasties])
  const byId = useMemo(() => new Map(all.map((r) => [r.id, r])), [all])
  const lanes = useMemo(() => Object.fromEntries(dynasties.map((d) => [d.slug, packLanes(d.rulers, NOW)])), [dynasties])
  const presets = useMemo(() => Object.keys(eraNames).flatMap((id) => {
    const rs = dynasties.filter((d) => d.era === id).flatMap((d) => d.rulers)
    if (!rs.length) return []
    return [{ id, label: eraNames[id], from: Math.min(...rs.map((r) => r.start)) - 10, to: Math.max(...rs.map((r) => r.end ?? NOW)) + 10 }]
  }), [dynasties])

  const a = byId.get(search.a)
  const b = byId.get(search.b)
  const visible = dynasties.filter((d) => d.rulers.some((r) => inWindow(r, w, NOW)))
  const top = useMemo(() => longest(all, NOW, 5), [all])

  const patch = (next: Partial<KingsSearch>, replace = false) =>
    void navigate({ search: (prev) => ({ ...prev, ...next }), replace, resetScroll: false })
  const setWin = (n: Win, replace = false) => patch({ from: n.from, to: n.to }, replace)
  const pick = (id: string) => {
    if (!search.a || search.a === id) patch({ a: id }, true)
    else if (!search.b || search.b === id) patch({ b: id }, true)
    else patch({ a: search.b, b: id }, true)
  }
  const pct = (y: number) => `${Math.max(0, Math.min(1, pos(y, w))) * 100}%`
  const width = (s: number, e: number) => `max(3px, ${(Math.min(1, pos(e, w)) - Math.max(0, pos(s, w))) * 100}%)`

  return (
    <PageTransition>
      <div className="mx-auto max-w-6xl px-4 py-14 overflow-x-clip">
        <Breadcrumbs items={[{ label: 'فرمانروایان ایران در یک نگاه' }]} />
        <h1 className="text-4xl md:text-5xl font-black text-gilded">فرمانروایان ایران در یک نگاه</h1>
        <p className="mt-3 text-ivory/70 leading-loose max-w-3xl">
          {fa(all.length)} فرمانروا از {fa(dynasties.length)} دودمان، هر کدام یک نوار. درازای هر نوار همان درازای فرمانروایی است.
          روی هر نوار بزنید تا در جعبهٔ مقایسه بنشیند؛ دو فرمانروا را کنار هم ببینید.
        </p>

        <div className="sticky top-16 z-20 mt-8 glass bg-night/85 rounded-2xl p-3 flex flex-wrap gap-2 items-center" role="toolbar" aria-label="بزرگ‌نمایی و جابه‌جایی">
          <button type="button" className={btn} onClick={() => setWin(KINGS_DEFAULTS)}>همه</button>
          {presets.map((p) => <button key={p.id} type="button" className={btn} onClick={() => setWin({ from: p.from, to: p.to })}>{p.label}</button>)}
          <span className="grow" />
          <button type="button" className={btn} aria-label="بزرگ‌نمایی" onClick={() => setWin(zoom(w, 0.6), true)}>+</button>
          <button type="button" className={btn} aria-label="کوچک‌نمایی" onClick={() => setWin(zoom(w, 1 / 0.6), true)}>−</button>
          <button type="button" className={btn} aria-label="سال‌های پیش‌تر" onClick={() => setWin(pan(w, -0.3), true)}>→</button>
          <button type="button" className={btn} aria-label="سال‌های پس‌تر" onClick={() => setWin(pan(w, 0.3), true)}>←</button>
          <span className="text-xs text-ivory/55 w-full md:w-auto">{year(w.from, { circa: false })} تا {year(w.to, { circa: false })}</span>
        </div>

        {/* the ribbon: time runs left→right like any chart, even on an RTL page */}
        <div className="mt-6 glass rounded-2xl p-4 overflow-hidden" dir="ltr">
          <div className="relative h-6 ms-28 md:ms-36 text-[11px] text-ivory/50" aria-hidden="true">
            {ticks(w, 8).map((t) => (
              <span key={t} className="absolute -translate-x-1/2 top-0" style={{ left: pct(t) }}>{t < 0 ? `${fa(-t)} پ.م` : fa(t)}</span>
            ))}
          </div>
          <ul className="space-y-1.5">
            {visible.map((d) => {
              const rows = Math.max(1, ...d.rulers.map((r) => (lanes[d.slug][r.id] ?? 0) + 1))
              return (
                <li key={d.slug} className="flex items-stretch gap-2">
                  <Link to="/dynasty/$slug" params={{ slug: d.slug }} dir="rtl" className="w-26 md:w-34 shrink-0 text-xs md:text-sm text-ivory/80 hover:text-gold flex items-center justify-end text-end py-1 min-h-11">
                    <span className="inline-block size-2 rounded-full me-1.5" style={{ background: d.accent }} aria-hidden="true" />{d.name}
                  </Link>
                  <div className="relative grow border-s border-ivory/10" style={{ height: `${rows * 22 + 6}px` }}>
                    {ticks(w, 8).map((t) => <span key={t} aria-hidden="true" className="absolute top-0 bottom-0 w-px bg-ivory/5" style={{ left: pct(t) }} />)}
                    {d.rulers.filter((r) => inWindow(r, w, NOW)).map((r) => {
                      const on = r.id === search.a || r.id === search.b
                      return (
                        <button
                          key={r.id}
                          type="button"
                          onClick={() => pick(r.id)}
                          aria-pressed={on}
                          title={`${r.name} · ${range(r.start, r.end)}${featured.has(r.id) ? ' · پروندهٔ کامل' : ''}`}
                          aria-label={`${r.name}، ${range(r.start, r.end)}`}
                          className={`absolute h-5 rounded-md text-[10px] leading-5 px-1 overflow-hidden whitespace-nowrap text-night font-bold transition-[outline,filter] hover:brightness-125 focus-visible:outline-2 focus-visible:outline-gold ${on ? 'outline-2 outline-ivory z-10' : ''}`}
                          style={{ left: pct(r.start), width: width(r.start, r.end ?? NOW), top: `${(lanes[d.slug][r.id] ?? 0) * 22 + 3}px`, background: d.accent }}
                        >
                          {pos(r.end ?? NOW, w) - pos(r.start, w) > 0.06 ? <span dir="rtl">{featured.has(r.id) ? '★ ' : ''}{r.name}</span> : featured.has(r.id) && pos(r.end ?? NOW, w) - pos(r.start, w) > 0.012 ? <span aria-hidden="true">★</span> : null}
                        </button>
                      )
                    })}
                  </div>
                </li>
              )
            })}
          </ul>
          {!visible.length && <p dir="rtl" className="text-ivory/60 text-sm py-6 text-center">در این بازه فرمانروایی در داده‌های ما نیست.</p>}
        </div>
        <p className="mt-3 text-xs text-ivory/55 leading-relaxed">
          ★ یعنی این فرمانروا پروندهٔ کامل دارد. تاریخ‌های پیش از ۵۶۰ پ.م. تقریبی‌اند و برخی، مانند سال‌های شاهان ماد، بر پایهٔ روایت هرودوت است. نوارهای روی هم یعنی مدعیان هم‌زمان یا فرمانروایان هم‌زمان.
        </p>

        <section className="mt-10 glass rounded-2xl p-5" aria-labelledby="cmp">
          <h2 id="cmp" className="text-2xl font-black text-gold">مقایسهٔ دو فرمانروا</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {(['a', 'b'] as const).map((k) => (
              <label key={k} className="flex items-center gap-2 text-sm w-full md:w-auto min-w-0">
                <span className="text-ivory/60 shrink-0">{k === 'a' ? 'نخستین' : 'دومین'}</span>
                <select value={byId.has(search[k]) ? search[k] : ''} onChange={(e) => patch({ [k]: e.target.value }, true)} className={sel}>
                  <option value="">— برگزینید —</option>
                  {dynasties.map((d) => <optgroup key={d.slug} label={d.name}>{d.rulers.map((r) => <option key={r.id} value={r.id}>{r.name} ({range(r.start, r.end)})</option>)}</optgroup>)}
                </select>
              </label>
            ))}
            {(a || b) && <button type="button" className={btn} onClick={() => patch({ a: '', b: '' }, true)}>پاک کردن</button>}
          </div>
          {a || b ? <Compare a={a} b={b} /> : <p className="mt-4 text-ivory/60 text-sm">روی دو نوار بزنید یا از فهرست بالا دو فرمانروا برگزینید.</p>}
          {(a || b) && <div className="mt-4"><ShareLink /></div>}
        </section>

        <section className="mt-10" aria-labelledby="long">
          <h2 id="long" className="text-2xl font-black text-gold">بلندترین فرمانروایی‌ها در داده‌های ما</h2>
          <ol className="mt-4 grid gap-2 md:grid-cols-2">
            {top.map((r, i) => (
              <li key={r.id} className="glass rounded-xl p-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="text-gold font-black w-6 text-center">{fa(i + 1)}</span>
                <span className="inline-block size-2.5 rounded-full" style={{ background: r.accent }} aria-hidden="true" />
                <Link to="/king/$slug" params={{ slug: r.id }} className="hover:text-gold font-bold">{r.name}</Link>
                <span className="text-ivory/55 text-sm">{r.dynastyName} · {range(r.start, r.end)}{isCirca(r.start) ? ' · تاریخ سنتی و تقریبی' : ''}</span>
                <span className="ms-auto text-sm">{fa(reignLength(r, NOW))} سال</span>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </PageTransition>
  )
}

function Compare({ a, b }: { a?: RulerLite; b?: RulerLite }) {
  const pair = [a, b].filter((x): x is RulerLite => !!x)
  const from = Math.min(...pair.map((r) => r.start))
  const to = Math.max(...pair.map((r) => r.end ?? NOW))
  const pad = Math.max(5, Math.round((to - from) * 0.08))
  const w: Win = { from: from - pad, to: to + pad }
  const rel = a && b ? relate(a, b, NOW) : null
  const firstName = rel?.kind === 'gap' ? (rel.first === a?.id ? a?.name : b?.name) : ''
  const secondName = rel?.kind === 'gap' ? (rel.first === a?.id ? b?.name : a?.name) : ''
  return (
    <div className="mt-5">
      <div className="grid gap-3 md:grid-cols-2">
        {pair.map((r) => {
          const eps = epithetsFor(r.id).slice(0, 3)
          return (
            <article key={r.id} className="rounded-xl border border-ivory/10 p-4" style={{ borderInlineStartColor: r.accent, borderInlineStartWidth: 4 }}>
              <Link to="/king/$slug" params={{ slug: r.id }} className="text-xl font-black hover:text-gold">{r.name}</Link>
              <p className="text-ivory/60 text-sm" dir="ltr">{r.latin}</p>
              <p className="mt-2 text-sm">{r.dynastyName} · {range(r.start, r.end)}{isCirca(r.start) ? ' (تقریبی)' : ''} · <b>{reignLength(r, NOW) ? `${fa(reignLength(r, NOW))} سال` : 'کمتر از یک سال'}</b></p>
              {eps.length > 0 && <ul className="mt-2 flex flex-wrap gap-1.5">{eps.map((e) => <li key={e.fa} className="rounded-full bg-gold/10 border border-gold/30 px-2.5 py-0.5 text-xs text-gold">{e.fa}</li>)}</ul>}
              {featured.has(r.id) && <Link to="/king/$slug" params={{ slug: r.id }} className="mt-3 inline-block text-sm text-gold underline underline-offset-4">★ پروندهٔ کامل</Link>}
            </article>
          )
        })}
      </div>
      {rel && (
        <p className="mt-4 text-lg leading-loose" role="status">
          {rel.kind === 'same' && 'هر دو یک نفرند.'}
          {rel.kind === 'overlap' && (rel.years > 0 ? `این دو فرمانروایی ${fa(rel.years)} سال هم‌زمان بودند.` : 'پایان یکی و آغاز دیگری در یک سال بود.')}
          {rel.kind === 'gap' && `از پایان فرمانروایی ${firstName} تا آغاز فرمانروایی ${secondName} ${fa(rel.years)} سال گذشت.`}
        </p>
      )}
      <div className="mt-4 rounded-xl bg-ivory/5 p-3" dir="ltr" aria-hidden="true">
        {pair.map((r) => (
          <div key={r.id} className="relative h-7 my-1">
            <span className="absolute h-6 top-0.5 rounded-md text-[11px] leading-6 px-1.5 text-night font-bold whitespace-nowrap overflow-hidden" style={{ left: `${pos(r.start, w) * 100}%`, width: `max(4px, ${(pos(r.end ?? NOW, w) - pos(r.start, w)) * 100}%)`, background: r.accent }}>
              <span dir="rtl">{r.name}</span>
            </span>
          </div>
        ))}
        <div className="relative h-5 text-[11px] text-ivory/50 border-t border-ivory/10">
          {ticks(w, 6).map((t) => <span key={t} className="absolute -translate-x-1/2 top-0.5" style={{ left: `${pos(t, w) * 100}%` }}>{t < 0 ? `${fa(-t)} پ.م` : fa(t)}</span>)}
        </div>
      </div>
    </div>
  )
}
