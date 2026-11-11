import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { deySources, NAME_SOURCES, NAMED_PROVINCES, PROVINCE_COUNTS, PROVINCE_SLUGS, UNKNOWN_PROVINCE, type NameRow } from '../../data/dey1404'
import { byCity, personAnchor, personHref, provinceHref, toPerson, type Person } from '../../data/dey1404/people'

const FA = '۰۱۲۳۴۵۶۷۸۹'
export const fa = (n: number) => n.toLocaleString('en-US').replace(/\d/g, (d) => FA[+d]).replace(/,/g, '٬')
const BATCH = 60
const reduced = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const BADGE: Record<number, string | null> = { 1: null, 2: 'نیازمند مستندسازی بیشتر', 3: 'اعدام' }

export function NameCard({ p, onOpen, lit = false }: { p: Person; onOpen: (p: Person) => void; lit?: boolean }) {
  const where = p.place ?? p.province
  return (
    <li id={personAnchor(p.id)} className={`dey-person scroll-mt-28 ${lit ? 'dey-person-lit' : ''}`}>
      <button type="button" className="block h-full w-full p-5 text-start" onClick={() => onOpen(p)} aria-haspopup="dialog">
        <span className="dey-flame" aria-hidden="true" />
        <span className="block pe-6 text-xl font-black leading-relaxed text-ivory md:text-2xl">{p.name}</span>
        <span className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-base text-ivory/70">
          {p.age && <span>{p.age} ساله</span>}
          {where && <span>{where}</span>}
          {(p.date || p.group !== 3) && <span>{p.date ?? 'دی ۱۴۰۴'}</span>}
        </span>
        {BADGE[p.group] && <span className={`mt-3 inline-block rounded-full px-3 py-0.5 text-xs ${p.group === 3 ? 'bg-rose-700/40 text-rose-50' : 'border border-ivory/20 text-ivory/60'}`}>{BADGE[p.group]}</span>}
      </button>
    </li>
  )
}

/** One shared dialog for every name: who, where, when, which source and how sure. */
export function NameDialog({ p, onClose }: { p: Person | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)
  useEffect(() => { if (p && !ref.current?.open) ref.current?.showModal() }, [p])
  const src = p ? NAME_SOURCES[p.group] : null
  const srcUrl = src ? deySources.find((s) => s.id === src.source)?.url : undefined
  return (
    <dialog ref={ref} className="dey-dialog" aria-labelledby="dey-dialog-h" onClose={onClose} onClick={(e) => { if (e.target === e.currentTarget) e.currentTarget.close() }}>
      {p && src && (
        <div className="p-7 text-center">
          <span className="dey-flame dey-flame-lg" aria-hidden="true" />
          <h4 id="dey-dialog-h" className="mt-5 text-3xl font-black text-rose-50">{p.name}</h4>
          <dl className="mt-5 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-start">
            <dt className="text-ivory/45">سن</dt><dd className="text-ivory/90">{p.age ? `${p.age} ساله` : 'ثبت نشده'}</dd>
            <dt className="text-ivory/45">استان</dt><dd className="text-ivory/90">{p.province ?? 'ثبت نشده'}</dd>
            {p.place && <><dt className="text-ivory/45">شهر</dt><dd className="text-ivory/90">{p.place}</dd></>}
            <dt className="text-ivory/45">{p.group === 3 ? 'اعدام' : 'تاریخ'}</dt><dd className="text-ivory/90">{p.date ?? (p.group === 3 ? 'تاریخ در این منبع نیامده' : 'دی‌ماه ۱۴۰۴، روز ثبت نشده')}</dd>
            {p.note && <><dt className="text-ivory/45">توضیح</dt><dd className="text-ivory/90">{p.note}</dd></>}
            <dt className="text-ivory/45">اعتبار</dt><dd className="text-ivory/90">{p.confidence}</dd>
            <dt className="text-ivory/45">منبع</dt><dd><a href={srcUrl} target="_blank" rel="noopener" className="text-gold underline">{src.label}</a></dd>
          </dl>
          <p className="mt-6 text-rose-200/80">یادش گرامی</p>
          <p className="mt-3 text-xs text-ivory/40"><a href={personHref(p.id)} className="underline">پیوند ماندگار این نام</a></p>
          <form method="dialog"><button className="mt-5 rounded-full border border-rose-300/40 px-6 py-2 text-rose-50 hover:bg-rose-800/40" autoFocus>بستن</button></form>
        </div>
      )}
    </dialog>
  )
}

/** Cards for a list of people, rendered a batch at a time as the reader scrolls (a button does the same without JS observers). */
function Cards({ people, onOpen, min = 0, lit }: { people: Person[]; onOpen: (p: Person) => void; min?: number; lit?: string }) {
  const [limit, setLimit] = useState(BATCH)
  const shown = Math.max(limit, min)
  const end = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = end.current
    if (!el || shown >= people.length) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setLimit((l) => Math.max(l, shown) + BATCH) }, { rootMargin: '600px' })
    io.observe(el)
    return () => io.disconnect()
  }, [shown, people.length])
  return (
    <>
      <ul className="dey-people mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {people.slice(0, shown).map((p) => <NameCard key={p.id} p={p} onOpen={onOpen} lit={p.id === lit} />)}
      </ul>
      {shown < people.length && (
        <div ref={end} className="mt-4 text-center">
          <button type="button" onClick={() => setLimit(shown + BATCH * 4)} className="rounded-full border border-rose-300/30 px-5 py-2 text-sm text-rose-100 hover:bg-rose-400/10">
            {fa(people.length - shown)} نام دیگر
          </button>
        </div>
      )}
    </>
  )
}

/** A province's (or group's) names, by city where the source gives one. */
export function CityGroups({ people, onOpen, min, lit }: { people: Person[]; onOpen: (p: Person) => void; min?: number; lit?: string }) {
  const groups = byCity(people)
  if (groups.length === 1) return <Cards people={people} onOpen={onOpen} min={min} lit={lit} />
  return (
    <>
      {groups.map((g) => (
        <div key={g.city ?? ''} className="mt-6">
          <h4 className="text-lg font-bold text-rose-200">{g.city ?? 'شهر در گزارش نیامده'} <span className="text-sm font-normal text-ivory/45">({fa(g.people.length)})</span></h4>
          <Cards people={g.people} onOpen={onOpen} min={min} lit={lit} />
        </div>
      ))}
    </>
  )
}

interface Section { key: string; anchor: string; title: string; note?: string; people: Person[]; page?: string }

function SectionBlock({ s, open, onToggle, onOpen, lit }: { s: Section; open: boolean; onToggle: () => void; onOpen: (p: Person) => void; lit?: string }) {
  const idx = lit ? s.people.findIndex((p) => p.id === lit) : -1
  return (
    <section id={s.anchor} className="dey-section scroll-mt-24" aria-labelledby={`${s.anchor}-h`}>
      <h3 id={`${s.anchor}-h`}>
        <button type="button" aria-expanded={open} aria-controls={`${s.anchor}-body`} onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start">
          <span className="text-2xl font-black text-rose-50 md:text-3xl">{s.title}</span>
          <span className="flex items-center gap-3 text-ivory/60"><span className="text-lg font-bold text-rose-200">{fa(s.people.length)} نام</span><span aria-hidden="true" className={`dey-chev ${open ? 'dey-chev-open' : ''}`}>‹</span></span>
        </button>
      </h3>
      {open && (
        <div id={`${s.anchor}-body`} className="px-5 pb-6">
          {s.note && <p className="text-sm text-ivory/55">{s.note}</p>}
          {s.page && <p className="mt-1 text-sm"><a href={s.page} className="text-gold underline">صفحهٔ جداگانهٔ این استان ←</a></p>}
          <CityGroups people={s.people} onOpen={onOpen} min={idx + 1} lit={lit} />
        </div>
      )}
    </section>
  )
}

/** Province cards with counts; each link opens its section here (and is a real link to the province page). */
function ProvinceIndex({ onPick }: { onPick: (key: string) => void }) {
  const max = PROVINCE_COUNTS[NAMED_PROVINCES[0]]
  return (
    <nav aria-label="نام‌ها به تفکیک استان">
      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
        <li><a href="#dey-executed" onClick={(e) => { e.preventDefault(); onPick('executed') }} className="dey-pcard dey-pcard-x" style={{ ['--k' as string]: 1 }}>
          <span className="block text-base font-bold">اعدام‌شدگان</span><span className="block text-3xl font-black">{fa(34)}</span></a></li>
        {NAMED_PROVINCES.map((p) => (
          <li key={p}><a href={provinceHref(p)} onClick={(e) => { e.preventDefault(); onPick(p) }} className="dey-pcard" style={{ ['--k' as string]: 0.15 + 0.85 * Math.sqrt(PROVINCE_COUNTS[p] / max) }}>
            <span className="block text-base font-bold">{p}</span><span className="block text-3xl font-black">{fa(PROVINCE_COUNTS[p])}</span></a></li>
        ))}
        <li><a href="#prov-unknown" onClick={(e) => { e.preventDefault(); onPick('unknown') }} className="dey-pcard" style={{ ['--k' as string]: 0.1 }}>
          <span className="block text-base font-bold">استان نامعلوم</span><span className="block text-3xl font-black">{fa(UNKNOWN_PROVINCE)}</span></a></li>
      </ul>
      <p className="mt-3 text-center text-sm text-ivory/50">رنگ تندتر یعنی نام‌های بیشتر. از خراسان جنوبی در این فهرست نامی ثبت نشده است.</p>
    </nav>
  )
}

const keyOf = (p: Person) => (p.group === 3 ? 'executed' : p.province ?? 'unknown')

export function NameWall() {
  const [people, setPeople] = useState<Person[] | null>(null)
  const [q, setQ] = useState('')
  const [open, setOpen] = useState<Set<string>>(() => new Set(['executed']))
  const [sel, setSel] = useState<Person | null>(null)
  const [lit, setLit] = useState<string>()
  useEffect(() => {
    let live = true
    import('../../data/dey1404/names.json').then((m) => { if (live) setPeople((m.default as NameRow[]).map(toPerson)) })
    return () => { live = false }
  }, [])

  const sections = useMemo<Section[]>(() => {
    const by = new Map<string, Person[]>()
    for (const p of people ?? []) { const k = keyOf(p); const l = by.get(k); if (l) l.push(p); else by.set(k, [p]) }
    return [
      { key: 'executed', anchor: 'dey-executed', title: 'اعدام‌شدگان خیزش دی', note: NAME_SOURCES[3].note, people: by.get('executed') ?? [] },
      ...NAMED_PROVINCES.map((p) => ({ key: p, anchor: `prov-${PROVINCE_SLUGS[p]}`, title: p, people: by.get(p) ?? [], page: provinceHref(p) })),
      { key: 'unknown', anchor: 'prov-unknown', title: 'استان نامعلوم', note: 'گزارش برای این جان‌باختگان استانی ثبت نکرده است.', people: by.get('unknown') ?? [] },
    ]
  }, [people])

  // Cards below the fold have an estimated height (content-visibility), so the first jump can land short;
  // settle it with two more instant jumps once the real heights are known.
  const reveal = useCallback((key: string, anchor: string) => {
    setOpen((o) => new Set(o).add(key))
    const block = anchor.startsWith('p-') ? 'center' : 'start'
    const go = (behavior: ScrollBehavior) => document.getElementById(anchor)?.scrollIntoView({ behavior, block })
    requestAnimationFrame(() => requestAnimationFrame(() => go(reduced() ? 'auto' : 'smooth')))
    for (const t of [700, 1300]) setTimeout(() => go('auto'), t)
  }, [])
  const pick = (key: string) => { setQ(''); const s = sections.find((x) => x.key === key); reveal(key, s?.anchor ?? 'names-wall') }

  // #p-<id> opens that person's section and scrolls to their card; #prov-<slug> opens a province.
  useEffect(() => {
    if (!people) return
    const go = () => {
      const h = decodeURIComponent(location.hash.slice(1))
      if (h.startsWith('p-')) {
        const p = people.find((x) => personAnchor(x.id) === h)
        if (p) { setLit(p.id); reveal(keyOf(p), h) }
      } else {
        const s = sections.find((x) => x.anchor === h)
        if (s) reveal(s.key, s.anchor)
      }
    }
    go()
    window.addEventListener('hashchange', go)
    return () => window.removeEventListener('hashchange', go)
  }, [people, sections, reveal])

  const norm = (s: string) => s.replace(/[\u200c\s]+/g, ' ').trim()
  const k = norm(q)
  const hits = useMemo(() => (k && people ? people.filter((p) => norm(p.name).includes(k)) : null), [k, people])
  const toggle = (key: string) => setOpen((o) => { const n = new Set(o); if (n.has(key)) n.delete(key); else n.add(key); return n })

  return (
    <div>
      <ProvinceIndex onPick={pick} />
      <div id="names-wall" className="mt-10 scroll-mt-24">
        <label className="block">
          <span className="sr-only">جست‌وجوی نام</span>
          <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="جست‌وجوی نام…"
            className="w-full rounded-2xl border border-rose-300/25 bg-black/40 px-5 py-4 text-lg text-ivory placeholder:text-ivory/40 focus:border-rose-300/60" />
        </label>
        <p className="mt-3 text-sm text-ivory/55" aria-live="polite">
          {!people ? 'در حال بارگذاری نام‌ها…' : hits ? `${fa(hits.length)} نام یافت شد` : `${fa(people.length)} نام، به تفکیک استان. روی هر استان بزنید تا نام‌ها باز شوند.`}
        </p>
        {hits ? <Cards key={k} people={hits} onOpen={setSel} /> : people && (
          <div className="mt-6 space-y-3">
            {sections.map((s) => <SectionBlock key={s.key} s={s} open={open.has(s.key)} onToggle={() => toggle(s.key)} onOpen={setSel} lit={lit} />)}
          </div>
        )}
      </div>
      <NameDialog p={sel} onClose={() => setSel(null)} />
    </div>
  )
}
