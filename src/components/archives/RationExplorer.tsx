import { useEffect, useMemo, useState, type KeyboardEvent } from 'react'
import type { BibliographyEntry, Citation, RationCategory, RationFact, RationGroup } from '../../data/research/types'
import { publishedCount } from '../../data/research/rations'
import type { Locale } from '../../lib/i18n'
import { formatBoth } from '../../lib/cite'
import { fa as faNum } from '../../lib/format'
import { CiteButton, ShareHashButton } from '../CiteButton'

const GROUPS: { id: RationGroup | 'all'; fa: string; en: string }[] = [
  { id: 'all', fa: 'همه', en: 'All' },
  { id: 'rations-people', fa: 'جیرهٔ مردم', en: 'People’s rations' },
  { id: 'rations-animals', fa: 'جیرهٔ حیوانات', en: 'Animals' },
  { id: 'supply', fa: 'عرضه و مالیات', en: 'Supply & tax' },
  { id: 'admin', fa: 'اداره', en: 'Admin' },
]

export function RationExplorer({
  locale,
  categories,
  facts,
  citations,
  bibliography,
}: {
  locale: Locale
  categories: RationCategory[]
  facts: RationFact[]
  citations: Citation[]
  bibliography: BibliographyEntry[]
}) {
  const isFa = locale === 'fa'
  const [group, setGroup] = useState<RationGroup | 'all'>('all')
  const [selectedId, setSelectedId] = useState(categories.find((c) => c.letter === 'Q')?.id ?? categories[0]?.id)

  const visible = useMemo(
    () => categories.filter((c) => group === 'all' || c.group === group),
    [categories, group],
  )
  const selected = visible.find((c) => c.id === selectedId) ?? visible[0]
  const max = Math.max(...visible.map((c) => publishedCount(c.pfRange)), 1)
  const relatedFacts = facts.filter((f) => selected && f.categoryLetters.includes(selected.letter))
  const citeFor = (id: string) => {
    const cit = citations.find((c) => c.id === id)
    const bib = bibliography.find((b) => b.id === cit?.bibliographicId)
    return bib ? formatBoth(bib) : ''
  }

  useEffect(() => {
    const raw = window.location.hash.replace(/^#/, '')
    if (!raw.startsWith('cat-')) return
    const hit = categories.find((c) => c.id === raw)
    if (!hit) return
    setGroup('all')
    setSelectedId(hit.id)
    window.setTimeout(() => document.getElementById(hit.id)?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 50)
  }, [categories])

  useEffect(() => {
    if (selected && !visible.some((c) => c.id === selected.id) && visible[0]) setSelectedId(visible[0].id)
  }, [visible, selected])

  const onKey = (e: KeyboardEvent, index: number) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault()
      const next = visible[Math.min(index + 1, visible.length - 1)]
      if (next) setSelectedId(next.id)
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault()
      const prev = visible[Math.max(index - 1, 0)]
      if (prev) setSelectedId(prev.id)
    } else if (e.key === 'Home') {
      e.preventDefault()
      if (visible[0]) setSelectedId(visible[0].id)
    } else if (e.key === 'End') {
      e.preventDefault()
      const last = visible[visible.length - 1]
      if (last) setSelectedId(last.id)
    }
  }

  return (
    <div className="space-y-6">
      <p className="text-sm leading-7 text-ivory/65">
        {isFa
          ? 'فقط طبقه‌ها و ارقامی که هالوک ۱۹۶۹ در فهرست مطالب و مقدمهٔ OIP 92 نوشته است. ارتفاع ستون = شمار متون منتشرشده در آن طبقه (از دامنهٔ PF). تبدیل لیتر انجام نشده چون معادل بار/قا میان هالوک و ایرانیکا اختلاف دارد.'
          : 'Only categories and figures Hallock 1969 prints in the OIP 92 table of contents and introduction. Bar height = published texts in that class (from the PF range). No litre conversion: Hallock’s BAR/QA ratio and Iranica’s litre glosses do not match.'}
      </p>
      <div role="radiogroup" aria-label={isFa ? 'پالایش طبقه' : 'Filter categories'} className="flex flex-wrap gap-2">
        {GROUPS.map((g) => (
          <label key={g.id} className={`glass rounded-full px-4 py-2 text-sm min-h-11 inline-flex items-center gap-2 cursor-pointer hover:border-gold has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-gold ${group === g.id ? 'border-gold bg-gold/15' : ''}`}>
            <input
              type="radio"
              name="ration-group"
              value={g.id}
              checked={group === g.id}
              onChange={() => setGroup(g.id)}
              className="accent-gold"
            />
            {isFa ? g.fa : g.en}
          </label>
        ))}
      </div>

      <ul role="listbox" aria-label={isFa ? 'طبقه‌های هالوک' : 'Hallock categories'} className="flex flex-wrap gap-2">
        {visible.map((c, i) => (
          <li key={c.id} role="option" aria-selected={c.id === selected?.id}>
            <button
              type="button"
              id={`btn-${c.id}`}
              onClick={() => setSelectedId(c.id)}
              onKeyDown={(e) => onKey(e, i)}
              className={`glass rounded-full px-3 py-2 text-sm min-h-11 hover:border-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${c.id === selected?.id ? 'border-gold bg-gold/20 text-gold' : ''}`}
            >
              <span dir="ltr">{c.letter}</span>
              <span className="text-ivory/50 ms-2">{isFa ? faNum(publishedCount(c.pfRange)) : publishedCount(c.pfRange)}</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="glass rounded-2xl p-4 overflow-x-auto">
          <p className="sr-only" id="ration-chart-desc">
            {isFa ? 'نمودار ستونی شمار متون هر طبقهٔ هالوک' : 'Bar chart of Hallock category text counts'}
          </p>
          <svg viewBox={`0 0 640 ${Math.max(visible.length * 28 + 16, 120)}`} role="img" aria-labelledby="ration-chart-desc" className="w-full min-h-64 text-ivory">
            {visible.map((c, i) => {
              const n = publishedCount(c.pfRange)
              const w = (n / max) * 460
              const y = 8 + i * 28
              const active = c.id === selected?.id
              return (
                <g key={c.id}>
                  <text x={isFa ? 630 : 10} y={y + 14} fill="currentColor" fontSize="11" textAnchor={isFa ? 'end' : 'start'} opacity={0.85}>{c.letter}</text>
                  <rect
                    x={isFa ? 620 - 80 - w : 80}
                    y={y}
                    width={Math.max(w, 2)}
                    height={20}
                    rx={4}
                    fill={active ? '#d9b45a' : '#2ec4b6'}
                    opacity={active ? 1 : 0.75}
                    aria-hidden="true"
                    onClick={() => setSelectedId(c.id)}
                    className="cursor-pointer"
                    stroke={active ? '#f3e6c4' : 'transparent'}
                  />
                  <text x={isFa ? 620 - 86 - w : 86 + w} y={y + 14} fill="#f3e6c4" fontSize="11" textAnchor={isFa ? 'end' : 'start'}>{isFa ? faNum(n) : n}</text>
                </g>
              )
            })}
          </svg>
        </div>

        <div id={selected?.id} className="glass rounded-2xl p-5 space-y-3" role="region" aria-live="polite" aria-label={isFa ? 'جزئیات طبقه' : 'Category detail'}>
          {selected && (
            <>
              <p className="text-gold font-black text-xl" dir="ltr">{selected.letter}</p>
              <h3 className="text-lg font-bold text-gilded">{isFa ? selected.nameFa : selected.nameEn}</h3>
              <p className="text-sm text-ivory/60" dir="ltr">{selected.pfRange}</p>
              <p className="text-ivory/80">
                {isFa ? 'متون منتشرشده در این جلد: ' : 'Texts published in this volume: '}
                <strong className="text-gold">{isFa ? faNum(publishedCount(selected.pfRange)) : publishedCount(selected.pfRange)}</strong>
              </p>
              <div className="flex flex-wrap gap-2">
                <ShareHashButton hash={selected.id} label={isFa ? 'پیوند این طبقه' : 'Share this class'} copiedLabel={isFa ? 'کپی شد' : 'Copied'} />
                <CiteButton
                  text={citeFor(selected.citationId)}
                  label={isFa ? 'استناد به این طبقه' : 'Cite this class'}
                  copiedLabel={isFa ? 'کپی شد' : 'Copied'}
                />
              </div>
              {relatedFacts.length > 0 && (
                <ul className="space-y-3 pt-2">
                  {relatedFacts.map((f) => (
                    <li key={f.id} className="border-gold/20 rounded-xl p-3 bg-night/40" style={{ borderInlineStartWidth: 3, borderInlineStartStyle: 'solid' }}>
                      <p className="text-sm font-bold text-ivory">{isFa ? f.whoFa : f.whoEn}</p>
                      <p className="text-gold text-sm mt-1">{f.amount}</p>
                      <p className="text-xs text-ivory/55 mt-1">{f.unitGloss}</p>
                      <p className="text-xs text-ivory/45 mt-2">{isFa ? f.commodityFa : f.commodityEn}</p>
                      <div className="mt-2">
                        <CiteButton
                          text={citeFor(f.citationId)}
                          label={isFa ? 'استناد به این رقم' : 'Cite this figure'}
                          copiedLabel={isFa ? 'کپی شد' : 'Copied'}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
