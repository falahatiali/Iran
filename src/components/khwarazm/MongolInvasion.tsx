import { useState } from 'react'
import type { Locale } from '../../lib/i18n'
import { digits } from '../../lib/format'
import { chapters, claims, faNote, mongol, mongolPhotos, mongolSources, quotes, type MQuote } from '../../data/khwarazm/mongol'
import { khwPhotos, khwSources } from '../../data/khwarazm/common'
import { muhammadKh } from '../../data/khwarazm/muhammad'
import { Reveal } from '../Reveal'
import { EvidenceBadge } from '../cylinder/EvidenceBadge'
import { CampaignMap } from '../featured/CampaignMap'
import { AnimatedClip } from '../featured/AnimatedClip'

const src = (id: string) => mongolSources.find((s) => s.id === id)
const photo = (id?: string) => (id ? mongolPhotos.find((p) => p.id === id) ?? khwPhotos.find((p) => p.id === id) : undefined)
const card = 'rounded-2xl border border-[#6b2108] p-5 bg-black/30'
const TONE = { secure: 'border-emerald-500/50 text-emerald-300', probable: 'border-amber-500/50 text-amber-300', disputed: 'border-red-500/60 text-red-300' } as const
const CERT = { secure: { fa: 'قطعی', en: 'Secure' }, probable: { fa: 'محتمل', en: 'Probable' }, disputed: { fa: 'محل اختلاف', en: 'Disputed' } } as const

function Q({ q, locale }: { q: MQuote; locale: Locale }) {
  const s = src(q.source)
  const isFa = locale === 'fa'
  return (
    <blockquote className="read border-[#e0875a]/60 px-4 py-3 my-4 text-[#f0c49a]" style={{ borderInlineStartWidth: 4, borderInlineStartStyle: 'solid' }}>
      <p className="font-serif" dir="ltr" lang="en">“{q.text}”</p>
      {q.orig && <p className="mt-2 font-bold" dir="rtl" lang="fa">«{q.orig}»</p>}
      {isFa && !q.orig && <p className="mt-2" dir="rtl" lang="fa">{q.fa}</p>}
      <footer className="mt-2 text-xs text-ivory/55">{q.ref}{s?.url && <> · <a href={s.url} className="text-[#e0875a] hover:underline" target="_blank" rel="noopener noreferrer">{isFa ? 'متن' : 'text'}</a></>}{isFa && !q.orig && ` · ${faNote}`}</footer>
    </blockquote>
  )
}

function Fig({ id, locale, tall }: { id?: string; locale: Locale; tall?: boolean }) {
  const ph = photo(id)
  if (!ph) return null
  return (
    <figure className="rounded-2xl overflow-hidden border border-[#6b2108] bg-black/40">
      <img src={ph.src} alt={ph.caption[locale]} loading="lazy" decoding="async" className={`w-full object-contain bg-black/50 ${tall ? 'max-h-[32rem]' : 'max-h-80'}`} />
      <figcaption className="p-3 text-xs text-ivory/65">{ph.caption[locale]} · <a href={ph.page} target="_blank" rel="noopener noreferrer" className="hover:underline">{ph.author}, {ph.license}</a></figcaption>
    </figure>
  )
}

function Timeline({ locale }: { locale: Locale }) {
  const [sel, setSel] = useState(chapters[0].id)
  const isFa = locale === 'fa'
  const c = chapters.find((x) => x.id === sel)!
  return (
    <div className="mt-8">
      <h3 className="text-xl font-black text-[#f0c49a]">{isFa ? 'گاه‌شمار: روی هر رویداد بزنید' : 'Timeline: tap an event'}</h3>
      <ol className="mt-4 flex gap-2 overflow-x-auto pb-3" aria-label={isFa ? 'گاه‌شمار یورش' : 'Invasion timeline'}>
        {chapters.map((x) => (
          <li key={x.id} className="shrink-0">
            <button type="button" onClick={() => setSel(x.id)} aria-pressed={sel === x.id}
              className={`min-h-11 rounded-full border px-4 py-2 text-sm whitespace-nowrap ${sel === x.id ? 'border-[#e0875a] bg-[#6b2108]/60 text-[#f0c49a]' : 'border-[#6b2108] text-ivory/75 hover:border-[#e0875a]'}`}>
              <span className="font-bold">{x.year}</span> · {x.place[locale]}
            </button>
          </li>
        ))}
      </ol>
      <a href={`#mi-${c.id}`} className={`${card} mt-2 block hover:border-[#e0875a]`} aria-live="polite">
        <p className="text-xs text-[#e0875a]">{c.when[locale]} · {c.place[locale]}</p>
        <p className="mt-1 text-lg font-bold text-[#f0c49a]">{c.title[locale]}</p>
        <p className="mt-2 text-sm text-ivory/80 line-clamp-3">{c.body[locale]}</p>
      </a>
    </div>
  )
}

export function MongolInvasion({ locale }: { locale: Locale }) {
  const isFa = locale === 'fa'
  const camp = muhammadKh.campaign!
  return (
    <section id="mongol-invasion" aria-labelledby="mi-h" className="scroll-mt-24 mt-16 rounded-3xl p-5 md:p-10 -mx-2 md:mx-0"
      style={{ background: 'linear-gradient(180deg,#0b0807 0%,#1a0d07 55%,#0b0807 100%)', boxShadow: 'inset 0 0 120px #6b210855' }}>
      <Reveal>
        <p className="text-sm font-bold tracking-wide text-[#e0875a]">{mongol.kicker[locale]}</p>
        <h2 id="mi-h" className="text-3xl md:text-4xl font-black text-[#f0c49a] mt-1">{mongol.title[locale]}</h2>
        <div className="mt-6 grid md:grid-cols-[1fr_16rem] gap-6 items-start">
          <div>
            <p className="read text-ivory/85 leading-8">{mongol.intro[locale]}</p>
            <Q q={quotes.athir} locale={locale} />
          </div>
          <Fig id="genghis-portrait" locale={locale} />
        </div>
      </Reveal>

      <Timeline locale={locale} />

      <div className="mt-10">
        <h3 className="text-xl font-black text-[#f0c49a]">{isFa ? 'نقشهٔ یورش' : 'Map of the campaign'}</h3>
        <div className="mt-4"><CampaignMap events={camp.events} sources={khwSources} locale={locale} view={camp.view} places={camp.places} label={camp.title[locale]} /></div>
        {camp.clip && <AnimatedClip clip={camp.clip} caption={camp.title} locale={locale} />}
        <div className="mt-4"><Fig id="khwarazm-map" locale={locale} tall /></div>
      </div>

      <ol className="mt-12 space-y-10">
        {chapters.map((c, i) => (
          <li key={c.id} id={`mi-${c.id}`} className="scroll-mt-24">
            <Reveal>
              <div className={`grid gap-6 ${c.photo ? 'lg:grid-cols-[1fr_22rem]' : ''} items-start`}>
                <div>
                  <p className="text-xs text-[#e0875a]">{digits(i + 1, locale)} · {c.when[locale]} · {c.place[locale]}</p>
                  <h3 className="mt-1 text-2xl font-black text-[#f0c49a]">{c.title[locale]}</h3>
                  <span className={`mt-2 inline-block rounded-full border px-3 py-0.5 text-xs font-bold ${TONE[c.certainty]}`}>{CERT[c.certainty][locale]}</span>
                  {c.note && <span className="ms-2 text-xs text-ivory/55">{c.note[locale]}</span>}
                  <p className="read mt-3 text-ivory/85 leading-8">{c.body[locale]}</p>
                  {c.id === 'bukhara' && <Q q={quotes.fled} locale={locale} />}
                  {c.quote && <Q q={c.quote} locale={locale} />}
                  <p className="text-xs text-ivory/45 mt-2">{isFa ? 'منبع: ' : 'Sources: '}{c.sources.map((s) => src(s)?.author ?? s).join(' · ')}</p>
                </div>
                {c.photo && <Fig id={c.photo} locale={locale} />}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <div className="mt-14">
        <h3 className="text-2xl font-black text-[#f0c49a]">{isFa ? 'شمار کشتگان: ادعای منابع' : 'Death tolls: what the sources claim'}</h3>
        <span className={`mt-2 inline-block rounded-full border px-3 py-0.5 text-xs font-bold ${TONE.disputed}`}>{isFa ? 'اغراق‌آمیز به نظر پژوهشگران امروز' : 'Exaggerated, in modern scholars’ view'}</span>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="text-[#e0875a] text-start border-b border-[#6b2108]">
              <th className="p-2 text-start">{isFa ? 'شهر' : 'City'}</th><th className="p-2 text-start">{isFa ? 'رقم ادعایی' : 'Claimed figure'}</th><th className="p-2 text-start">{isFa ? 'منبع' : 'Source'}</th><th className="p-2 text-start">{isFa ? 'ارجاع' : 'Reference'}</th>
            </tr></thead>
            <tbody>{claims.map((c) => (
              <tr key={c.place.en + c.figure} className="border-b border-[#6b2108]/50 text-ivory/85">
                <td className="p-2">{c.place[locale]}</td><td className="p-2 font-bold" dir="ltr">{c.figure}</td><td className="p-2">{c.who[locale]}</td><td className="p-2 text-xs text-ivory/55" dir="ltr">{c.ref}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
        <p className="read mt-4 text-ivory/80 leading-8">{mongol.claimsNote[locale]}</p>
        <div className="mt-4 grid sm:grid-cols-2 gap-4"><Fig id="siege" locale={locale} /><Fig id="juvayni-ms" locale={locale} /></div>
      </div>

      <div className="mt-14 grid lg:grid-cols-[1fr_22rem] gap-6 items-start">
        <div>
          <h3 className="text-2xl font-black text-[#f0c49a]">{isFa ? 'پس از یورش: قنات‌ها، جمعیت، اقتصاد' : 'After the storm: qanats, people, economy'}</h3>
          <p className="read mt-3 text-ivory/85 leading-8">{mongol.toll[locale]}</p>
          <div className={`${card} mt-6`}>
            <EvidenceBadge layer="philosophical" locale={locale} />
            <p className="read mt-3 text-[#f0c49a] leading-8">{mongol.lens[locale]}</p>
          </div>
        </div>
        <Fig id="qanat" locale={locale} />
      </div>

      <details className="mt-10 text-sm text-ivory/70">
        <summary className="cursor-pointer min-h-11 text-[#e0875a] font-bold">{isFa ? 'منابع این بخش' : 'Sources for this section'}</summary>
        <ul className="mt-3 space-y-1">{mongolSources.map((s) => <li key={s.id}>{s.author}, <i>{s.title}</i> ({s.year}){s.url && <> · <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-[#e0875a] hover:underline">{isFa ? 'پیوند' : 'link'}</a></>}</li>)}</ul>
        <p className="mt-3">{isFa ? 'هاب «روزهای تلخ تاریخ ایران» بعداً ساخته می‌شود.' : 'A hub for the bitter days of Iranian history will follow.'}</p>
      </details>
    </section>
  )
}
