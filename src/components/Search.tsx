import { useNavigate, useRouterState } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useMemo, useRef, useState } from 'react'
import type { Overview } from '../server/api'
import { normalize } from '../lib/search'
import { localeFromPath } from '../lib/i18n'
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
  const locale = useRouterState({ select: (s) => localeFromPath(s.location.pathname) })
  const en = locale === 'en'
  const index = useMemo(() => {
    const names = new Map(data.dynasties.map((d) => [d.slug, d.name]))
    const all: (Hit & { hay: string })[] = []
    for (const d of data.dynasties) {
      all.push({ kind: 'dynasty', key: `d-${d.slug}`, label: en ? d.latin : d.name, sub: range(d.start, d.end), slug: d.slug, hay: normalize(`${d.name} ${d.latin}`) })
      for (const r of d.rulers) all.push({ kind: 'ruler', key: `r-${r.id}`, label: en ? r.latin : r.name, sub: [en ? d.latin : d.name, range(r.start, r.end), ...nicknamesFor(r.id).map((e) => `«${en ? e.en : e.fa}»`)].join(' · '), slug: r.id, hay: normalize(`${r.name} ${r.latin} ${epithetSearchText(r.id)}`) })
    }
    for (const e of data.events) all.push({ kind: 'event', key: `e-${e.id}`, label: e.title, sub: `${names.get(e.dynastySlug)} · ${year(e.year)}`, slug: e.dynastySlug, hay: normalize(e.title) })
    for (const p of Object.values(places)) all.push({ kind: 'place', key: `pl-${p.slug}`, label: p.name.fa, sub: p.name.en, slug: p.slug, hay: normalize([p.name.fa, p.name.en, ...p.aliases].join(' ')) })
    all.push({ kind: 'page', key: 'p-cylinder', label: en ? 'The Cyrus Cylinder' : 'استوانهٔ کوروش', sub: 'BM 90920 · Cyrus Cylinder', slug: 'cylinder', hay: normalize('استوانه کوروش Cyrus Cylinder BM 90920 منشور کتیبه بابل') })
    all.push({ kind: 'page', key: 'p-archives', label: en ? 'Persepolis Fortification and Treasury archives' : 'بایگانی بارو و خزانهٔ تخت‌جمشید', sub: 'Persepolis Fortification · Treasury', slug: 'archives', hay: normalize('بایگانی بارو خزانه تخت‌جمشید Persepolis Fortification Treasury Hallock جیره الواح') })
    all.push({ kind: 'page', key: 'p-property', label: en ? 'Property rights in the history of Iran' : 'حقوق مالکیت در تاریخ ایران', sub: en ? 'Tablets, contracts, Mādayān ī hazār dādestān' : 'لوح‌ها، قراردادها، هزار داوری', slug: 'property', hay: normalize('حقوق مالکیت property rights هزار داوری MHD Persepolis tablets Murashu Egibi') })
    all.push({ kind: 'page', key: 'p-about', label: en ? 'About and methodology' : 'درباره و روش‌شناسی', sub: en ? 'How this site works' : 'روش کار این سایت', slug: 'about', hay: normalize('درباره روش‌شناسی about methodology magi magic مالکیت') })
    all.push({ kind: 'page', key: 'p-mordad', label: en ? '28 Mordad 1332 / 19 August 1953' : '۲۸ مرداد ۱۳۳۲', sub: en ? 'The 1953 coup' : 'کودتای ۱۹۵۳', slug: '28-mordad', hay: normalize('28 مرداد کودتا مصدق 1953 coup Mosaddeq Mordad') })
    all.push({ kind: 'page', key: 'p-jashn', label: en ? 'The 2,500-year celebrations' : 'جشن‌های ۲۵۰۰ ساله', sub: en ? 'October 1971' : 'مهر ۱۳۵۰', slug: 'jashn-2500', hay: normalize('جشنهای 2500 ساله Persepolis 1971 celebrations jashn') })
    all.push({ kind: 'page', key: 'p-shahnameh', label: en ? 'Shahnameh' : 'شاهنامه', sub: en ? 'Ferdowsi’s Book of Kings' : 'فردوسی · Shahnameh', slug: 'shahnameh', hay: normalize('شاهنامه فردوسی کیومرث هوشنگ تهمورث جمشید ضحاک فریدون کاوه ایرج منوچهر زال سیمرغ رستم سهراب سیاوش Ferdowsi Shahnameh') })
    return all
  }, [data, en])
  const nq = normalize(q)
  // places first: a topic page beats a same-named ruler (e.g. بیستون the monument vs. the Ziyarid ruler)
  const hits = nq ? index.filter((h) => h.hay.includes(nq)).sort((a, b) => Number(b.kind === 'place') - Number(a.kind === 'place')).slice(0, 30) : []

  useEffect(() => { if (open) { setQ(''); setTimeout(() => input.current?.focus(), 30) } }, [open])
  useEffect(() => setSel(0), [q])

  const go = (h: Hit) => {
    onClose()
    if (h.kind === 'ruler') void navigate({ to: '/king/$slug', params: { slug: h.slug } })
    else if (h.kind === 'page') {
      if (h.slug === 'archives') void navigate({ to: en ? '/en/archives' : '/archives' })
      else if (h.slug === 'property') void navigate({ to: en ? '/en/property' : '/property' })
      else if (h.slug === 'about') void navigate({ to: en ? '/en/about' : '/about' })
      else if (h.slug === '28-mordad') void navigate({ to: en ? '/en/event/28-mordad' : '/event/28-mordad' })
      else if (h.slug === 'jashn-2500') void navigate({ to: en ? '/en/event/jashn-2500' : '/event/jashn-2500' })
      else if (h.slug === 'shahnameh') void navigate({ to: en ? '/en/shahnameh' : '/shahnameh' })
      else void navigate({ to: en ? '/en/cylinder' : '/cylinder' })
    }
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
  const label = en
    ? { dynasty: 'Dynasty', ruler: 'Ruler', event: 'Event', page: 'Page', place: 'Place' }
    : { dynasty: 'دودمان', ruler: 'فرمانروا', event: 'رویداد', page: 'صفحه', place: 'مکان و اثر' }

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-50 flex items-start justify-center bg-night/70 backdrop-blur-sm p-4 pt-[12vh]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.div role="dialog" aria-modal="true" aria-label={en ? 'Search' : 'جست‌وجو'} className="glass w-full max-w-xl rounded-2xl overflow-hidden bg-lapis/80"
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
              <span className="sr-only">{en ? 'Search for a king, dynasty or event' : 'جست‌وجوی پادشاه، دودمان یا رویداد'}</span>
              <input ref={input} value={q} onChange={(e) => setQ(e.target.value)} placeholder={en ? 'A king, dynasty or event… (Cyrus, Abbas, Chaldiran)' : 'نام پادشاه، دودمان یا رویداد… (مثلاً کوروش، Abbas، چالدران)'}
                className="w-full bg-transparent py-4 outline-none placeholder:text-ivory/40" role="combobox" aria-expanded={hits.length > 0} aria-controls="search-results" aria-activedescendant={hits[sel]?.key} />
              <kbd className="text-xs text-ivory/40 border border-ivory/20 rounded px-1.5">Esc</kbd>
            </label>
            <ul id="search-results" role="listbox" className="max-h-[55vh] overflow-y-auto p-2">
              {q && hits.length === 0 && (
                <li className="p-4 text-ivory/65 text-center">
                  {en ? 'No results found.' : 'نتیجه‌ای یافت نشد.'}
                  <button type="button" onClick={openTimeline} className="block mx-auto mt-3 text-gold hover:underline min-h-11">{en ? 'Search the timeline' : 'جست‌وجو در گاه‌شمار'}</button>
                </li>
              )}
              {hits.map((h, i) => (
                <li key={h.key} id={h.key} role="option" aria-selected={i === sel}>
                  <button onMouseEnter={() => setSel(i)} onClick={() => go(h)} className={`w-full text-start flex items-center justify-between gap-3 rounded-xl px-4 py-2.5 transition-colors min-h-11 ${i === sel ? 'bg-gold/15' : ''}`}>
                    <span><span className="block font-medium">{h.label}</span><span className="block text-xs text-ivory/65">{h.sub}</span></span>
                    <span className="text-[0.7rem] rounded-full border border-turquoise/40 text-turquoise-soft px-2 py-0.5 shrink-0">{label[h.kind]}</span>
                  </button>
                </li>
              ))}
              {q.trim() !== '' && (
                <li className="px-4 py-2">
                  <button type="button" onClick={openTimeline} className="text-sm text-gold hover:underline min-h-11">
                    {en ? `Search the timeline for “${q}”` : `جست‌وجو در گاه‌شمار برای «${q}»`}
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

