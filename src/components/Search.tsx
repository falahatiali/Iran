import { useNavigate } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useMemo, useRef, useState } from 'react'
import type { Overview } from '../server/api'
import { normalize } from '../lib/search'
import { range, year } from '../lib/format'
import { placeForEventTitle, places } from '../data/places'
import { epithetSearchText, nicknamesFor } from '../data/epithets'

type Hit =
  | { kind: 'dynasty'; key: string; label: string; sub: string; slug: string }
  | { kind: 'ruler'; key: string; label: string; sub: string; slug: string }
  | { kind: 'event'; key: string; label: string; sub: string; slug: string }
  | { kind: 'page'; key: string; label: string; sub: string; slug: string }
  | { kind: 'place'; key: string; label: string; sub: string; slug: string }

export function SearchDialog({ data, open, onClose }: { data: Overview; open: boolean; onClose: () => void }) {
  const [q, setQ] = useState('')
  const [sel, setSel] = useState(0)
  const input = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const index = useMemo(() => {
    const names = new Map(data.dynasties.map((d) => [d.slug, d.name]))
    const all: (Hit & { hay: string })[] = []
    for (const d of data.dynasties) {
      all.push({ kind: 'dynasty', key: `d-${d.slug}`, label: d.name, sub: range(d.start, d.end), slug: d.slug, hay: normalize(`${d.name} ${d.latin}`) })
      for (const r of d.rulers) all.push({ kind: 'ruler', key: `r-${r.id}`, label: r.name, sub: [d.name, range(r.start, r.end), ...nicknamesFor(r.id).map((e) => `«${e.fa}»`)].join(' · '), slug: r.id, hay: normalize(`${r.name} ${r.latin} ${epithetSearchText(r.id)}`) })
    }
    for (const e of data.events) all.push({ kind: 'event', key: `e-${e.id}`, label: e.title, sub: `${names.get(e.dynastySlug)} · ${year(e.year)}`, slug: e.dynastySlug, hay: normalize(e.title) })
    for (const p of Object.values(places)) all.push({ kind: 'place', key: `pl-${p.slug}`, label: p.name.fa, sub: p.name.en, slug: p.slug, hay: normalize([p.name.fa, p.name.en, ...p.aliases].join(' ')) })
    all.push({
      kind: 'page',
      key: 'p-cylinder',
      label: 'استوانهٔ کوروش',
      sub: 'BM 90920 · Cyrus Cylinder',
      slug: 'cylinder',
      hay: normalize('استوانه کوروش Cyrus Cylinder BM 90920 منشور کتیبه بابل'),
    })
    all.push({
      kind: 'page',
      key: 'p-archives',
      label: 'بایگانی بارو و خزانهٔ تخت‌جمشید',
      sub: 'Persepolis Fortification · Treasury',
      slug: 'archives',
      hay: normalize('بایگانی بارو خزانه تخت‌جمشید Persepolis Fortification Treasury Hallock جیره الواح'),
    })
    return all
  }, [data])
  const nq = normalize(q)
  // places first: a topic page beats a same-named ruler (e.g. بیستون the monument vs. the Ziyarid ruler)
  const hits = nq ? index.filter((h) => h.hay.includes(nq)).sort((a, b) => Number(b.kind === 'place') - Number(a.kind === 'place')).slice(0, 30) : []

  useEffect(() => { if (open) { setQ(''); setTimeout(() => input.current?.focus(), 30) } }, [open])
  useEffect(() => setSel(0), [q])

  const go = (h: Hit) => {
    onClose()
    if (h.kind === 'ruler') void navigate({ to: '/king/$slug', params: { slug: h.slug } })
    else if (h.kind === 'page') void navigate({ to: h.slug === 'archives' ? '/archives' : '/cylinder' })
    else if (h.kind === 'place') void navigate({ to: '/place/$slug', params: { slug: h.slug } })
    else if (h.kind === 'event') {
      const pl = placeForEventTitle(h.label)
      if (pl) void navigate({ to: '/place/$slug', params: { slug: pl.slug } })
      else void navigate({ to: '/timeline', search: { q: h.label } })
    }
    else void navigate({ to: '/dynasty/$slug', params: { slug: h.slug } })
  }
  const openTimeline = () => {
    onClose()
    void navigate({ to: '/timeline', search: { q } })
  }
  const label = { dynasty: 'دودمان', ruler: 'فرمانروا', event: 'رویداد', page: 'صفحه', place: 'مکان و اثر' }

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-50 flex items-start justify-center bg-night/70 backdrop-blur-sm p-4 pt-[12vh]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.div role="dialog" aria-modal="true" aria-label="جست‌وجو" className="glass w-full max-w-xl rounded-2xl overflow-hidden bg-lapis/80"
            initial={{ y: -20, scale: 0.97 }} animate={{ y: 0, scale: 1 }} exit={{ y: -10, scale: 0.98 }} onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              if (e.key === 'Escape') onClose()
              if (e.key === 'ArrowDown') { e.preventDefault(); setSel((s) => Math.min(s + 1, hits.length - 1)) }
              if (e.key === 'ArrowUp') { e.preventDefault(); setSel((s) => Math.max(s - 1, 0)) }
              if (e.key === 'Enter' && hits[sel]) go(hits[sel])
              else if (e.key === 'Enter' && q.trim()) openTimeline()
            }}>
            <label className="flex items-center gap-3 px-5 border-b border-gold/20">
              <span aria-hidden="true" className="text-gold">⌕</span>
              <span className="sr-only">جست‌وجوی پادشاه، دودمان یا رویداد</span>
              <input ref={input} value={q} onChange={(e) => setQ(e.target.value)} placeholder="نام پادشاه، دودمان یا رویداد… (مثلاً کوروش، Abbas، چالدران)"
                className="w-full bg-transparent py-4 outline-none placeholder:text-ivory/40" role="combobox" aria-expanded={hits.length > 0} aria-controls="search-results" aria-activedescendant={hits[sel]?.key} />
              <kbd className="text-xs text-ivory/40 border border-ivory/20 rounded px-1.5">Esc</kbd>
            </label>
            <ul id="search-results" role="listbox" className="max-h-[55vh] overflow-y-auto p-2">
              {q && hits.length === 0 && (
                <li className="p-4 text-ivory/50 text-center">
                  نتیجه‌ای یافت نشد.
                  <button type="button" onClick={openTimeline} className="block mx-auto mt-3 text-gold hover:underline min-h-11">جست‌وجو در گاه‌شمار</button>
                </li>
              )}
              {hits.map((h, i) => (
                <li key={h.key} id={h.key} role="option" aria-selected={i === sel}>
                  <button onMouseEnter={() => setSel(i)} onClick={() => go(h)} className={`w-full text-right flex items-center justify-between gap-3 rounded-xl px-4 py-2.5 transition-colors ${i === sel ? 'bg-gold/15' : ''}`}>
                    <span><span className="block font-medium">{h.label}</span><span className="block text-xs text-ivory/50">{h.sub}</span></span>
                    <span className="text-[0.7rem] rounded-full border border-turquoise/40 text-turquoise-soft px-2 py-0.5 shrink-0">{label[h.kind]}</span>
                  </button>
                </li>
              ))}
              {q.trim() !== '' && (
                <li className="px-4 py-2">
                  <button type="button" onClick={openTimeline} className="text-sm text-gold hover:underline min-h-11">
                    جست‌وجو در گاه‌شمار برای «{q}»
                  </button>
                </li>
              )}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

