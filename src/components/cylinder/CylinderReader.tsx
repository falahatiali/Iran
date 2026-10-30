import { useEffect, useMemo, useState } from 'react'
import { parseLineHash } from '../../lib/lineLink'
import { CopyLineLink } from './CopyLineLink'
import type { Locale } from '../../lib/i18n'
import { fa as faNum } from '../../lib/format'
import {
  LIBERTY_THEMES,
  YALE_NOTE,
  cylinderLines,
  lineAnchor,
  type LibertyTheme,
} from '../../data/research/cylinderLines'

type Col = 'akk' | 'en' | 'fa'

export function CylinderReader({ locale }: { locale: Locale }) {
  const isFa = locale === 'fa'
  const [cols, setCols] = useState<Record<Col, boolean>>({ akk: true, en: true, fa: true })
  const [filter, setFilter] = useState<LibertyTheme | 'all'>('all')
  const visible = useMemo(
    () => (filter === 'all' ? cylinderLines : cylinderLines.filter((l) => l.themes.includes(filter))),
    [filter],
  )
  const colCount = (cols.akk ? 1 : 0) + (cols.en ? 1 : 0) + (cols.fa ? 1 : 0) || 1
  const [flash, setFlash] = useState<string | null>(null)
  useEffect(() => {
    let timer: number | undefined
    const go = (retry = true) => {
      const id = parseLineHash(window.location.hash)
      if (!id) return
      const el = document.getElementById(id)
      if (!el) {
        if (!retry) return
        // line hidden by a theme filter: show all lines, then retry on next render
        setFilter('all')
        window.requestAnimationFrame(() => window.requestAnimationFrame(() => go(false)))
        return
      }
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setFlash(id)
      window.clearTimeout(timer)
      timer = window.setTimeout(() => setFlash(null), 2200)
    }
    const onHash = () => go()
    go()
    window.addEventListener('hashchange', onHash)
    return () => {
      window.removeEventListener('hashchange', onHash)
      window.clearTimeout(timer)
    }
  }, [])
  const t = isFa
    ? {
        title: 'متن کامل استوانه — خوانش موازی',
        lede: 'سطر به سطر، با شماره و پیوند پایدار. اکدی و انگلیسی از راجرز ۱۹۱۲ (مالکیت عمومی، قطعهٔ A). فارسی برگردان همین سایت از همان انگلیسی است، نه رازمجو و نه ترجمهٔ موزه. سطرهای آسیب‌دیده و قطعهٔ ییل جدا علامت خورده‌اند. سطرهای آزادی و مالکیت طلایی‌اند.',
        akk: 'اکدی (آوانویسی)',
        en: 'انگلیسی',
        fa: 'فارسی',
        all: 'همهٔ سطرها',
        damaged: 'آسیب‌دیده / ناقص',
        yale: 'قطعهٔ ییل',
        source: 'راجرز ۱۹۱۲ · برگردان فارسی سایت',
      }
    : {
        title: 'Complete text — a parallel reader',
        lede: 'Line by line, numbered, with a stable anchor. Akkadian and English from Rogers 1912 (public domain, fragment A). Persian is this site’s rendering of that English, not Razmju and not the museum translation. Damaged lines and the Yale join are marked. Property- and liberty-bearing lines are gilded.',
        akk: 'Akkadian (transliteration)',
        en: 'English',
        fa: 'Persian',
        all: 'All lines',
        damaged: 'Damaged / incomplete',
        yale: 'Yale join',
        source: 'Rogers 1912 · site Persian rendering',
      }

  const toggle = (key: Col) => {
    setCols((c) => {
      const next = { ...c, [key]: !c[key] }
      if (!next.akk && !next.en && !next.fa) return c
      return next
    })
  }

  return (
    <div className="space-y-5" dir={isFa ? 'rtl' : 'ltr'}>
      <header className="space-y-3">
        <h2 className="text-3xl font-black text-gilded">{t.title}</h2>
        <p className="read text-ivory/80">{t.lede}</p>
        <p className="text-xs text-ivory/50">{t.source}</p>
      </header>

      <div className="flex flex-wrap gap-2">
        {(['akk', 'en', 'fa'] as const).map((key) => (
          <button
            key={key}
            type="button"
            aria-pressed={cols[key]}
            onClick={() => toggle(key)}
            className={`rounded-full px-4 py-2 min-h-11 text-sm ${cols[key] ? 'bg-gold/20 border border-gold text-gold-bright' : 'glass hover:border-gold'}`}
          >
            {t[key]}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className={`rounded-full px-4 py-2 min-h-11 text-sm ${filter === 'all' ? 'bg-gold/20 border border-gold text-gold-bright' : 'glass hover:border-gold'}`}
          onClick={() => setFilter('all')}
        >
          {t.all}
        </button>
        {(Object.keys(LIBERTY_THEMES) as LibertyTheme[]).map((theme) => (
          <a
            key={theme}
            href={`#${lineAnchor(LIBERTY_THEMES[theme].lines[0]!)}`}
            onClick={() => setFilter(theme)}
            className={`rounded-full px-4 py-2 min-h-11 text-sm inline-flex items-center ${filter === theme ? 'bg-gold/20 border border-gold text-gold-bright' : 'glass hover:border-gold'}`}
          >
            {isFa ? LIBERTY_THEMES[theme].fa : LIBERTY_THEMES[theme].en}
          </a>
        ))}
      </div>

      <ol className="space-y-2">
        {visible.map((line) => {
          const gold = line.themes.length > 0
          return (
            <li
              key={line.n}
              id={lineAnchor(line.n)}
              className={`rounded-2xl px-4 py-3 scroll-mt-24 transition-shadow ${flash === lineAnchor(line.n) ? 'line-flash' : ''} ${gold ? 'border border-gold/50 bg-gold/5' : 'glass'}`}
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                <a href={`#${lineAnchor(line.n)}`} className="font-serif text-gold font-bold tabular-nums" dir="ltr">
                  {isFa ? faNum(line.n) : line.n}
                </a>
                <CopyLineLink anchor={lineAnchor(line.n)} locale={locale} />
                {line.status === 'damaged' && <span className="text-xs text-crimson">{t.damaged}</span>}
                {line.status === 'yale-join' && <span className="text-xs text-crimson">{t.yale}</span>}
                {gold && (
                  <span className="text-xs text-gold/80">
                    {line.themes.map((th) => (isFa ? LIBERTY_THEMES[th].fa : LIBERTY_THEMES[th].en)).join(' · ')}
                  </span>
                )}
              </div>
              {line.status === 'yale-join' ? (
                <p className="text-sm leading-7 text-ivory/65">{isFa ? YALE_NOTE.fa : YALE_NOTE.en}</p>
              ) : (
                <div
                  className={`grid gap-4 ${colCount === 3 ? 'md:grid-cols-3' : colCount === 2 ? 'md:grid-cols-2' : 'grid-cols-1'}`}
                >
                  {cols.akk && (
                    <p className="read font-serif text-ivory/90" dir="ltr" lang="akk">
                      <span className="block text-[0.7rem] uppercase tracking-wide text-ivory/40 mb-1">{t.akk}</span>
                      {line.akkadian}
                    </p>
                  )}
                  {cols.en && (
                    <p className="read font-serif text-ivory/90" dir="ltr" lang="en">
                      <span className="block text-[0.7rem] uppercase tracking-wide text-ivory/40 mb-1">{t.en}</span>
                      {line.en}
                    </p>
                  )}
                  {cols.fa && (
                    <p className="read text-ivory/90" dir="rtl" lang="fa">
                      <span className="block text-[0.7rem] tracking-wide text-ivory/40 mb-1">{t.fa}</span>
                      {line.fa}
                    </p>
                  )}
                </div>
              )}
            </li>
          )
        })}
      </ol>
    </div>
  )
}
