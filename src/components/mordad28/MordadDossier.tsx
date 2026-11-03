import { useState, type ReactNode } from 'react'
import { dossierChapters, dossierIndex as D, essay, type DBlock, type EBlock } from '../../data/mordad28/dossier'
import type { Locale } from '../../lib/i18n'
import { Reveal } from '../Reveal'

/** Renders the source's **bold** marks; nothing else is interpreted. */
export function md(s: string): ReactNode[] {
  return s.split(/\*\*(.+?)\*\*/g).map((x, i) => (i % 2 ? <strong key={i} className="text-gold-bright">{x}</strong> : x))
}

function Block({ b, locale }: { b: DBlock; locale: Locale }) {
  if (b.t === 'h2') return <h3 className="mt-8 text-2xl font-black text-gold-bright">{b.text[locale]}</h3>
  if (b.t === 'ul') return <ul className="mt-4 space-y-2 list-disc ps-6 text-ivory/85 leading-8">{b.items.map((x) => <li key={x.fa}>{md(x[locale])}</li>)}</ul>
  if (b.t === 'quote') return (
    <blockquote className="my-6 border-gold/50 px-4 py-3 text-ivory/90 font-serif text-lg leading-9" style={{ borderInlineStartWidth: 4, borderInlineStartStyle: 'solid' }}>
      <p>{b.text[locale]}</p><footer className="mt-2 text-xs text-ivory/55 font-sans">{b.cite[locale]}</footer>
    </blockquote>
  )
  return <p className={`mt-4 leading-9 ${b.t === 'note' ? 'glass rounded-2xl p-4 text-ivory/75' : 'text-ivory/85'}`}>{md(b.text[locale])}</p>
}

function EssayBlock({ b }: { b: EBlock }) {
  if (b.type === 'h2') return <h4 className="mt-6 text-xl font-black text-gold-bright">{b.text}</h4>
  if (b.type === 'ul') return <ul className="mt-3 space-y-2 list-disc ps-6 leading-8">{b.items.map((x) => <li key={x}>{md(x)}</li>)}</ul>
  if (b.type === 'quote') return <blockquote className="my-4 border-gold/50 px-4 py-2 font-serif leading-9" style={{ borderInlineStartWidth: 4, borderInlineStartStyle: 'solid' }}><p>{md(b.text)}</p>{b.cite && <footer className="mt-1 text-xs text-ivory/55">{b.cite}</footer>}</blockquote>
  return <p className="mt-3 leading-9">{md(b.text)}</p>
}

export function MordadDossier({ locale }: { locale: Locale }) {
  const isFa = locale === 'fa'
  const [sel, setSel] = useState(1)
  const c = dossierChapters.find((x) => x.n === sel)!
  const go = (n: number) => { setSel(n); document.getElementById('dossier-reader')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }
  const ourBadge = isFa ? 'متن پرونده: روایت و برداشت نویسنده، نه حکم تاریخی' : 'The dossier text: the author’s narrative and reading, not a historical verdict'
  return (
    <section id="dossier" aria-labelledby="dossier-h" className="scroll-mt-28">
      <Reveal>
        <p className="inline-block rounded-full border border-amber-400/50 px-3 py-1 text-xs font-bold text-amber-200">{ourBadge}</p>
        <p className="mt-4 text-turquoise-soft font-bold text-sm">{D.kicker[locale]}</p>
        <h2 id="dossier-h" className="text-3xl md:text-5xl font-black text-gilded">{D.title[locale]}</h2>
        <p className="mt-2 text-ivory/60">{D.brandSub[locale]}</p>
        <div className="mt-6 grid lg:grid-cols-[1fr_22rem] gap-6 items-start">
          <p className="text-lg leading-9 text-ivory/90">{D.subtitle[locale]}</p>
          <aside className="glass rounded-2xl p-5">
            <h3 className="font-black text-gold-bright">{D.asideTitle[locale]}</h3>
            <blockquote className="mt-3 font-serif leading-8 text-ivory/90">{D.asideQuote[locale]}<footer className="mt-2 text-xs text-ivory/55 font-sans">{D.asideCite[locale]}</footer></blockquote>
            <p className="mt-4 text-sm text-ivory/70 leading-7">{md(D.method[locale])}</p>
          </aside>
        </div>
      </Reveal>

      <h3 className="mt-12 text-2xl font-black text-gold-bright">{D.chTitle[locale]}</h3>
      <p className="mt-1 text-ivory/65">{D.chSub[locale]}</p>
      <ol className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {D.cards.map((k) => (
          <li key={k.n}>
            <button type="button" onClick={() => go(k.n)} aria-pressed={sel === k.n} className={`h-full w-full text-start glass rounded-2xl p-5 hover:border-gold ${sel === k.n ? 'border-gold' : ''}`}>
              <span className="flex flex-wrap items-center justify-between gap-2 text-xs"><span className="rounded-full bg-gold/15 px-3 py-1 font-bold text-gold-bright">{k.badge[locale]}</span><span className="text-ivory/55">{k.tag[locale]}</span></span>
              <span className="mt-3 block text-lg font-black text-ivory">{k.h3[locale]}</span>
              <span className="mt-2 block text-sm text-ivory/70 leading-7">{k.p[locale]}</span>
              <span className="mt-3 flex flex-wrap gap-2 text-xs text-ivory/60">{k.chips.map((x) => <span key={x.fa} className="rounded-full border border-gold/20 px-2 py-0.5">{md(x[locale])}</span>)}</span>
            </button>
          </li>
        ))}
        <li className="glass rounded-2xl p-5 opacity-60 text-sm leading-7">
          <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-bold">{isFa ? '۶' : '6'}</span>
          <p className="mt-3">{isFa ? 'فصل ۶ تا تصمیم علی منتشر نمی‌شود.' : 'Chapter 6 is held back pending a decision.'}</p>
        </li>
      </ol>

      <div id="dossier-reader" className="mt-10 scroll-mt-32 glass rounded-3xl p-5 md:p-10">
        <div role="tablist" aria-label={isFa ? 'فصل‌ها' : 'Chapters'} className="flex gap-2 overflow-x-auto pb-2">
          {dossierChapters.map((x) => (
            <button key={x.n} role="tab" type="button" aria-selected={sel === x.n} onClick={() => setSel(x.n)}
              className={`shrink-0 min-h-11 rounded-full px-4 text-sm border ${sel === x.n ? 'border-gold bg-gold/15 text-gold-bright font-bold' : 'border-gold/20 text-ivory/70 hover:border-gold'}`}>{x.brand[locale]}</button>
          ))}
        </div>
        <div role="tabpanel" aria-label={c.brand[locale]} className="mt-4">
          <div className="h-1 rounded-full bg-gold/10 overflow-hidden" aria-hidden="true"><div className="h-full bg-gradient-to-r from-turquoise via-gold to-crimson" style={{ width: `${(c.n / 6) * 100}%` }} /></div>
          <p className="mt-4 text-turquoise-soft font-bold text-sm">{c.kicker[locale]}</p>
          <h3 className="mt-1 text-3xl font-black text-gilded">{c.title[locale]}</h3>
          <p className="mt-4 text-lg leading-9 text-ivory/90">{md(c.lead[locale])}</p>
          {c.blocks.map((b, i) => <Block key={i} b={b} locale={locale} />)}
          <nav className="mt-10 flex justify-between gap-3">
            {c.n > 1 ? <button type="button" onClick={() => go(c.n - 1)} className="glass rounded-full px-5 min-h-11">{isFa ? '→ فصل قبلی' : '← Previous chapter'}</button> : <span />}
            {c.n < 5 && <button type="button" onClick={() => go(c.n + 1)} className="rounded-full px-5 min-h-11 bg-gold text-night font-bold">{isFa ? 'فصل بعدی ←' : 'Next chapter →'}</button>}
          </nav>
        </div>
      </div>

      <div id="compare" className="mt-16 scroll-mt-28">
        <h3 className="text-2xl md:text-3xl font-black text-gilded">{D.cmpTitle[locale]}</h3>
        <p className="mt-1 text-ivory/65">{D.cmpSub[locale]}</p>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[40rem] text-sm border-collapse">
            <thead><tr>{D.rows[0].map((h) => <th key={h.fa} className="p-3 text-start text-gold-bright border-b border-gold/30">{h[locale]}</th>)}</tr></thead>
            <tbody>{D.rows.slice(1).map((r, i) => (
              <tr key={i} className="align-top border-b border-gold/10">
                {r.map((cell, j) => <td key={j} className="p-3 leading-7 text-ivory/85">{'pill' in cell && cell.pill && <span className={`me-2 mb-1 inline-block rounded-full px-2 py-0.5 text-xs font-bold ${i % 2 ? 'bg-turquoise/20 text-turquoise-soft' : 'bg-crimson/25 text-rose-200'}`}>{(cell.pill as { fa: string; en: string })[locale]}</span>}{cell[locale]}</td>)}
              </tr>
            ))}</tbody>
          </table>
        </div>
      </div>

      <div id="timeline" className="mt-16 scroll-mt-28">
        <h3 className="text-2xl md:text-3xl font-black text-gilded">{D.tlTitle[locale]}</h3>
        <p className="mt-1 text-ivory/65">{D.tlSub[locale]}</p>
        <ol className="mt-6 border-s-2 border-gold/30 ms-2 space-y-6">
          {D.timeline.map((x) => (
            <li key={x.when.fa} className="relative ps-6">
              <span className={`absolute -start-[9px] top-1.5 h-4 w-4 rounded-full ${x.accent ? 'bg-crimson' : 'bg-gold'}`} aria-hidden="true" />
              <p className="text-sm font-bold text-gold-bright">{x.when[locale]}</p>
              <p className="mt-1 font-black text-ivory">{x.title[locale]}</p>
              <p className="mt-1 text-ivory/75 leading-8">{x.text[locale]}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-16 glass rounded-3xl p-6 md:p-10 border-gold/30">
        <h3 className="text-2xl font-black text-gilded">{D.endTitle[locale]}</h3>
        <p className="mt-1 text-ivory/65">{D.endSub[locale]}</p>
        <p className="mt-5 flex flex-wrap gap-2 text-xs"><span className="rounded-full bg-gold/15 px-3 py-1 font-bold text-gold-bright">★ {D.endBadge[locale]}</span><span className="rounded-full border border-gold/20 px-3 py-1">{D.endTag[locale]}</span></p>
        <p className="mt-4 text-xl font-black text-ivory">{D.endH[locale]}</p>
        <p className="mt-3 leading-9 text-ivory/85">{md(D.endP[locale])}</p>
      </div>

      <div id="essay" className="mt-16 scroll-mt-28">
        <h3 className="text-2xl md:text-3xl font-black text-gilded">{isFa ? 'جستار بلند: مقدمه و ده فصل' : 'The long essay: introduction and ten chapters'}</h3>
        {!isFa && <p className="mt-2 text-sm text-amber-200/80">The chapter bodies below are still in Persian only; their titles and summaries are from the source. An English translation will follow.</p>}
        <div className="mt-4 space-y-3 text-ivory/85">{essay.intro.map((p) => <p key={p.fa} className="leading-9">{md(p[locale])}</p>)}</div>
        <div className="mt-6 space-y-3">
          {essay.chapters.map((e) => (
            <details key={e.n} className="glass rounded-2xl p-4 group">
              <summary className="cursor-pointer min-h-11 flex flex-col justify-center"><span className="font-black text-ivory">{e.n === 0 ? (isFa ? 'مقدمه' : 'Introduction') : (isFa ? `فصل ${e.n}` : `Chapter ${e.n}`)} · {e.title[locale]}</span><span className="text-sm text-ivory/60 mt-1">{e.desc[locale]}</span></summary>
              <div lang="fa" dir="rtl" className="mt-4 text-ivory/85">
                <p className="text-lg leading-9 text-ivory/90">{md(e.lead)}</p>
                {e.blocks.map((b, i) => <EssayBlock key={i} b={b} />)}
              </div>
            </details>
          ))}
        </div>
        <div className="mt-8 glass rounded-3xl p-6 md:p-8">
          <h4 className="text-xl font-black text-gold-bright">{essay.title[locale]}</h4>
          {essay.conclusion.map((p) => <p key={p.fa} className="mt-3 leading-9 text-ivory/85">{md(p[locale])}</p>)}
        </div>
        <div className="mt-6 text-sm text-ivory/60">
          <p className="font-bold">{D.footer.title[locale]}:</p>
          <ul className="mt-1 list-disc ps-6">{D.footer.links.map((l) => <li key={l.href}><a href={l.href} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">{l.label[locale]}</a></li>)}</ul>
          <p className="mt-2">{D.footer.method[locale]}</p>
        </div>
      </div>
    </section>
  )
}
