import { type ReactNode } from 'react'
import { reading } from '../../data/mordad28'
import { analysisIntro, analysisNoteIds, analysisSections, tadayyoniListen } from '../../data/mordad28/analysis'
import type { Locale } from '../../lib/i18n'
import { Reveal } from '../Reveal'

const FA_DIGITS = '۰۱۲۳۴۵۶۷۸۹'
const faNum = (n: number) => String(n).replace(/\d/g, (d) => FA_DIGITS[Number(d)])

function rich(text: string, locale: Locale): ReactNode[] {
  const re = /(\*\*(.+?)\*\*|\[(\d+)\])/g
  const out: ReactNode[] = []
  let last = 0
  let m: RegExpExecArray | null
  let i = 0
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index))
    if (m[2] !== undefined) {
      out.push(<strong key={`b-${i++}`} className="text-gold-bright">{m[2]}</strong>)
    } else {
      const n = Number(m[3])
      const id = analysisNoteIds[n]
      const label = locale === 'fa' ? faNum(n) : String(n)
      out.push(
        <sup key={`n-${i++}`} className="ms-0.5">
          <a href={id ? `#src-${id}` : '#sources'} className="text-gold hover:underline font-bold">[{label}]</a>
        </sup>,
      )
    }
    last = m.index + m[0].length
  }
  if (last < text.length) out.push(text.slice(last))
  return out
}

function ViewBox({ title, paras, locale }: { title: string; paras: string[]; locale: Locale }) {
  return (
    <aside className="mt-6 rounded-3xl p-5 md:p-6 border-2 border-dashed border-gold/50" style={{ background: 'linear-gradient(135deg, rgba(217,180,90,.12), rgba(15,31,75,.55))' }}>
      <p className="inline-flex items-center gap-2 rounded-full bg-gold/15 border border-gold/50 px-3 py-1 text-xs font-bold text-gold-bright">
        <span aria-hidden="true">✎</span>{locale === 'fa' ? 'نگاه ما' : 'Our reading'}
      </p>
      {title !== 'نگاه ما' && <h4 className="mt-3 text-xl font-black text-gilded">{title.replace(/^نگاه ما[:：]?\s*/, '')}</h4>}
      {paras.map((p) => <p key={p.slice(0, 48)} className="read mt-3 text-ivory/90">{rich(p, locale)}</p>)}
    </aside>
  )
}

export function MordadAnalysis({ locale }: { locale: Locale }) {
  const isFa = locale === 'fa'
  return (
    <section id="analysis" aria-labelledby="analysis-h" className="scroll-mt-28">
      <Reveal>
        <p className="text-turquoise-soft font-bold text-sm">{analysisIntro.kicker[locale]}</p>
        <h2 id="analysis-h" className="mt-1 text-3xl md:text-5xl font-black text-gilded leading-tight">{analysisIntro.title[locale]}</h2>
        <div className="mt-6 glass rounded-3xl p-5 md:p-8">
          <h3 className="text-xl font-black text-gold-bright">{analysisIntro.beforeTitle[locale]}</h3>
          {analysisIntro.paras[locale].map((p) => <p key={p.slice(0, 40)} className="read mt-4 text-ivory/90">{p}</p>)}
        </div>
      </Reveal>

      <nav aria-label={isFa ? 'بخش‌های تحلیل' : 'Analysis sections'} className="mt-8">
        <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {analysisSections.map((s) => (
            <li key={s.id}>
              <a href={`#analysis-${s.id}`} className="h-full flex gap-3 glass rounded-2xl p-4 hover:border-gold min-h-11">
                <span className="shrink-0 text-sm font-black text-gold-bright tabular-nums">{isFa ? faNum(s.n).padStart(2, FA_DIGITS[0]) : String(s.n).padStart(2, '0')}</span>
                <span className="text-sm font-bold text-ivory leading-7">{s.title[locale]}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {isFa ? (
        <div className="mt-10 grid gap-8">
          {analysisSections.map((s) => (
            <Reveal key={s.id}>
              <article id={`analysis-${s.id}`} className="scroll-mt-28 glass rounded-3xl p-5 md:p-8">
                <p className="text-sm font-bold text-turquoise-soft">{faNum(s.n)}</p>
                <h3 className="mt-1 text-2xl md:text-3xl font-black text-gilded leading-tight">{s.title.fa}</h3>
                {s.paras.map((p) => <p key={p.slice(0, 48)} className="read mt-4 text-ivory/85">{rich(p, 'fa')}</p>)}
                {s.subs?.map((sub) => (
                  <div key={sub.title} className="mt-6">
                    <h4 className="text-xl font-black text-gold-bright">{sub.title}</h4>
                    {sub.paras.map((p) => <p key={p.slice(0, 48)} className="read mt-3 text-ivory/85">{rich(p, 'fa')}</p>)}
                    {sub.view && <ViewBox title={sub.view.title} paras={sub.view.paras} locale="fa" />}
                  </div>
                ))}
                {s.view && <ViewBox title={s.view.title} paras={s.view.paras} locale="fa" />}
              </article>
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="mt-10 grid gap-5">
          {analysisSections.map((s) => (
            <article key={s.id} id={`analysis-${s.id}`} className="scroll-mt-28 glass rounded-3xl p-5 md:p-7">
              <p className="text-sm font-bold text-turquoise-soft">{String(s.n).padStart(2, '0')}</p>
              <h3 className="mt-1 text-2xl font-black text-gilded leading-tight">{s.title.en}</h3>
              <p className="read mt-3 text-ivory/85">{s.summaryEn}</p>
            </article>
          ))}
        </div>
      )}

      <Reveal>
        <aside id={tadayyoniListen.id} className="mt-10 overflow-hidden rounded-3xl border border-gold/45 bg-gradient-to-br from-lapis/55 via-lapis/35 to-[#0b1638]/80 p-6 md:p-8">
          <p className="text-sm font-bold tracking-wide text-turquoise-soft">{tadayyoniListen.kicker[locale]}</p>
          <h3 className="mt-2 text-2xl md:text-3xl font-black text-gilded">{tadayyoniListen.title[locale]}</h3>
          <p className="read mt-4 text-ivory/85">{tadayyoniListen.lead[locale]}</p>
          <a
            href={tadayyoniListen.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-3 min-h-14 rounded-2xl bg-gold px-6 py-3 text-base md:text-lg font-black text-night hover:bg-gold-bright"
          >
            {tadayyoniListen.button[locale]}
            <span aria-hidden="true">{isFa ? '←' : '→'}</span>
          </a>
          <p className="mt-4 text-sm text-ivory/55">{tadayyoniListen.note[locale]}</p>
        </aside>
      </Reveal>

      <Reveal>
        <section id="reading" aria-labelledby="reading-h" className="scroll-mt-28 mt-10">
          <div className="rounded-3xl p-6 md:p-8 border-2 border-dashed border-gold/50" style={{ background: 'linear-gradient(135deg, rgba(217,180,90,.12), rgba(15,31,75,.55))' }}>
            <p className="inline-flex items-center gap-2 rounded-full bg-gold/15 border border-gold/50 px-3 py-1 text-xs font-bold text-gold-bright">
              <span aria-hidden="true">✎</span>{isFa ? 'این برداشت ماست' : 'This is our reading'}
            </p>
            <h2 id="reading-h" className="mt-3 text-3xl font-black text-gilded">{isFa ? 'نگاه ما؛ جمع‌بندی' : 'Our reading: a summing up'}</h2>
            {reading[locale].map((p) => <p key={p.slice(0, 40)} className="read mt-4 text-ivory/90 max-w-4xl">{p}</p>)}
          </div>
        </section>
      </Reveal>
    </section>
  )
}
