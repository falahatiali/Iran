import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import { cast, days, documents, facts, mordadSources, myths, page, photo, photos, views, type Certainty, type MordadPhoto, type Verdict } from '../../data/mordad28'
import type { Locale } from '../../lib/i18n'
import { digits } from '../../lib/format'
import { PageTransition, Reveal } from '../Reveal'
import { Shamseh } from '../Ornament'
import { SectionNav } from '../SectionNav'
import { MordadDossier } from './MordadDossier'
import { MordadAnalysis } from './MordadAnalysis'

const CERT: Record<Certainty, { fa: string; en: string; tone: string }> = {
  secure: { fa: 'قطعی', en: 'Secure', tone: 'border-turquoise/50 bg-turquoise/10 text-turquoise-soft' },
  probable: { fa: 'محتمل', en: 'Probable', tone: 'border-gold/50 bg-gold/10 text-gold-bright' },
  disputed: { fa: 'محل بحث', en: 'Disputed', tone: 'border-crimson/60 bg-crimson/15 text-ivory' },
}
const VERDICT: Record<Verdict, { fa: string; en: string; tone: string; mark: string }> = {
  false: { fa: 'شواهد رد می‌کند', en: 'Evidence contradicts', tone: 'border-crimson/60 bg-crimson/20 text-ivory', mark: '✕' },
  partly: { fa: 'نیمه‌درست', en: 'Partly true', tone: 'border-gold/50 bg-gold/10 text-gold-bright', mark: '◐' },
  disputed: { fa: 'محل بحث پژوهشگران', en: 'Disputed by scholars', tone: 'border-turquoise/50 bg-turquoise/10 text-turquoise-soft', mark: '?' },
}

export function MordadPage({ locale }: { locale: Locale }) {
  const isFa = locale === 'fa'
  const t = isFa
    ? { home: 'خانه', mrs: 'محمدرضا شاه', here: '۲۸ مرداد', other: 'English', days: 'روزبه‌روز', cast: 'بازیگران', myths: 'روایت‌ها و شواهد', debate: 'پژوهشگران چه می‌گویند', docs: 'اسناد', reading: 'برداشت ما', gallery: 'تصویرها', bib: 'منابع', src: 'منابع:', claim: 'ادعا', who: 'از سوی', evidence: 'شواهد', other2: 'دیدگاه دیگر', open: 'شواهد را ببین', close: 'بستن', caution: 'احتیاط', did: 'چه کرد', debated: 'محل بحث', filter: 'نمایش:', all: 'همه', photoNote: 'همهٔ عکس‌ها از ویکی‌انبار است و برچسب پروانهٔ هر پرونده بررسی شده؛ فهرست کامل در public/media/ATTRIBUTION.txt.', origin: 'فهرست ادعاها از مخزن «religion-and-freedom» (بخش ۲۸ مرداد) آمده است؛ شواهد هر کارت از منابع پژوهشی است، نه از آن مخزن.', ourReading: 'این برداشت ماست', prev: 'روز پیش', next: 'روز بعد', keys: 'با کلیدهای پیکان هم می‌توانید روزها را عوض کنید.', back: 'بازگشت به محمدرضا شاه' }
    : { home: 'Home', mrs: 'Mohammad Reza Shah', here: '28 Mordad', other: 'فارسی', days: 'Day by day', cast: 'The cast', myths: 'Stories and evidence', debate: 'What scholars say', docs: 'Documents', reading: 'Our reading', gallery: 'Images', bib: 'Sources', src: 'Sources:', claim: 'Claim', who: 'Told by', evidence: 'Evidence', other2: 'The other view', open: 'See the evidence', close: 'Close', caution: 'Caution', did: 'What they did', debated: 'Disputed', filter: 'Show:', all: 'All', photoNote: 'All photos are from Wikimedia Commons; each file’s licence tag was checked. Full list in public/media/ATTRIBUTION.txt.', origin: 'The list of claims comes from the “religion-and-freedom” repository (its 28 Mordad section); the evidence on each card comes from scholarly sources, not from that repository.', ourReading: 'This is our reading', prev: 'Previous day', next: 'Next day', keys: 'You can also change days with the arrow keys.', back: 'Back to Mohammad Reza Shah' }
  const sep = isFa ? '‹' : '/'
  const author = (id: string) => mordadSources.find((s) => s.id === id)?.author.split(',')[0] ?? id
  const Chips = ({ ids }: { ids: string[] }) => (
    <p className="mt-3 flex flex-wrap items-center gap-2 text-xs text-ivory/50">{t.src}
      {ids.map((s) => <a key={s} href={`#src-${s}`} className="rounded-full border border-gold/30 px-2.5 py-1 text-gold hover:bg-gold/10">{author(s)}</a>)}
    </p>
  )
  const H2 = ({ id, kicker, children }: { id: string; kicker?: string; children: ReactNode }) => (
    <header>
      {kicker && <p className="text-turquoise-soft font-bold text-sm">{kicker}</p>}
      <h2 id={`${id}-h`} className="text-3xl md:text-4xl font-black text-gilded">{children}</h2>
    </header>
  )
  const nav: [string, string][] = [['dossier', isFa ? 'پرونده' : 'Dossier'], ['compare', isFa ? 'جدول مقایسه' : 'Comparison'], ['timeline', isFa ? 'تایم‌لاین' : 'Timeline'], ['essay', isFa ? 'جستار' : 'Essay'], ['days', t.days], ['cast', t.cast], ['myths', t.myths], ['debate', t.debate], ['documents', t.docs], ['analysis', isFa ? 'تحلیل ما' : 'Our analysis'], ['reading', t.reading], ['gallery', t.gallery], ['sources', t.bib]]
  const hero = photo('tanks-ferdowsi') as MordadPhoto
  const mrsHref = isFa ? '/king/mohammad-reza-shah#mosaddeq' : '/en/king/mohammad-reza-shah#mosaddeq'

  return (
    <PageTransition>
      <ReadingProgress />
      <article lang={locale} dir={isFa ? 'rtl' : 'ltr'}>
        <header className="relative overflow-hidden border-b border-gold/15">
          <img src={hero.src} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-25 grayscale" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-b from-night/40 via-night/80 to-night" aria-hidden="true" />
          <Shamseh className="absolute -top-24 -end-24 w-96 h-96 opacity-10" spin />
          <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-24">
            <nav aria-label={isFa ? 'مسیر صفحه' : 'Breadcrumb'} className="text-sm text-ivory/60 mb-6">
              <a href="/" className="hover:text-gold inline-block py-2 min-h-11">{t.home}</a>
              <span className="text-gold/50 mx-2" aria-hidden="true">{sep}</span>
              <a href={mrsHref} className="hover:text-gold inline-block py-2 min-h-11">{t.mrs}</a>
              <span className="text-gold/50 mx-2" aria-hidden="true">{sep}</span>
              <span aria-current="page">{t.here}</span>
            </nav>
            <p className="text-turquoise-soft font-bold">{page.kicker[locale]}</p>
            <h1 className="mt-2 text-4xl md:text-7xl font-black text-gilded leading-tight max-w-4xl">{page.title[locale]}</h1>
            {page.lede[locale].map((p, k) => <p key={k} className={`read mt-6 max-w-3xl ${k === 0 ? 'read-lede text-ivory/90' : 'text-ivory/80'}`}>{p}</p>)}
            <dl className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl">
              {facts.map(([k, v]) => <div key={k.en} className="glass rounded-2xl p-4"><dt className="text-xs text-ivory/50">{k[locale]}</dt><dd className="font-bold text-gold-bright mt-1">{v[locale]}</dd></div>)}
            </dl>
            <p className="mt-6 flex flex-wrap gap-3">
              <a href={isFa ? '/en/event/28-mordad' : '/event/28-mordad'} hrefLang={isFa ? 'en' : 'fa'} className="glass rounded-full px-5 py-2 inline-flex items-center min-h-11 hover:border-gold">{t.other}</a>
              <a href="#myths" className="rounded-full px-5 py-2 inline-flex items-center min-h-11 bg-gold text-night font-bold hover:bg-gold-bright">{isFa ? `${myths.length} روایت در برابر شواهد ↓` : `${myths.length} stories against the evidence ↓`}</a>
            </p>
          </div>
        </header>

        <SectionNav items={nav} label={isFa ? 'بخش‌های صفحه' : 'Page sections'} />

        <div className="mx-auto max-w-6xl px-4 py-12 grid grid-cols-[minmax(0,1fr)] gap-20">
          <MordadDossier locale={locale} />

          <section id="days" aria-labelledby="days-h" className="scroll-mt-28">
            <H2 id="days" kicker={isFa ? 'از کلاردشت تا خیابان کاخ' : 'From Kelardasht to Kakh Street'}>{t.days}</H2>
            <DayTimeline locale={locale} Chips={Chips} t={t} />
          </section>

          <Reveal>
            <section id="cast" aria-labelledby="cast-h" className="scroll-mt-28">
              <H2 id="cast" kicker={isFa ? 'چه کسی چه کرد' : 'Who did what'}>{t.cast}</H2>
              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {cast.map((c) => { const ph = photo(c.photo); return (
                  <details key={c.id} className="group glass rounded-3xl overflow-hidden open:border-gold/60">
                    <summary className="cursor-pointer list-none flex items-center gap-4 p-4 min-h-24">
                      {ph ? <img src={ph.src} alt={ph.caption[locale]} loading="lazy" decoding="async" className="h-20 w-20 shrink-0 rounded-2xl object-cover object-top grayscale group-open:grayscale-0 transition" /> : <span aria-hidden="true" className="h-20 w-20 shrink-0 rounded-2xl bg-lapis grid place-items-center text-3xl text-gold">☭</span>}
                      <span className="min-w-0">
                        <span className="block text-lg font-black text-ivory">{c.name[locale]}</span>
                        <span className="block text-sm text-ivory/60">{c.role[locale]}</span>
                        {c.debate && <span className="mt-1 inline-block rounded-full border border-crimson/60 bg-crimson/15 px-2 py-0.5 text-[11px]">{t.debated}</span>}
                      </span>
                      <span aria-hidden="true" className="ms-auto text-gold transition group-open:rotate-45 text-2xl">+</span>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-xs font-bold text-turquoise-soft">{t.did}</p>
                      <p className="read mt-1 text-ivory/85">{c.did[locale]}</p>
                      {c.debate && <p className="read mt-3 text-ivory/70 border-s-2 border-crimson/60 ps-3">{c.debate[locale]}</p>}
                      <Chips ids={c.sources} />
                    </div>
                  </details>
                ) })}
              </div>
            </section>
          </Reveal>

          <section id="myths" aria-labelledby="myths-h" className="scroll-mt-28">
            <H2 id="myths" kicker={isFa ? 'تحریف، نیمه‌حقیقت، یا محل بحث' : 'Distortion, half-truth, or open question'}>{t.myths}</H2>
            <p className="mt-3 text-ivory/70 max-w-3xl">{isFa ? 'هر کارت یک روایت رایج است و می‌گوید از کجا می‌آید. روی کارت بزنید تا شواهد و منابع را ببینید. روایت‌های هر دو سو آمده است.' : 'Each card is a common story and says where it comes from. Open a card for the evidence and its sources. Stories from both sides are here.'}</p>
            <p className="mt-2 text-xs text-ivory/50 max-w-3xl">{t.origin}</p>
            <MythList locale={locale} Chips={Chips} t={t} />
          </section>

          <Reveal>
            <section id="debate" aria-labelledby="debate-h" className="scroll-mt-28">
              <H2 id="debate" kicker={isFa ? 'سه خوانش' : 'Three readings'}>{t.debate}</H2>
              <p className="mt-3 text-ivory/70 max-w-3xl">{isFa ? 'پرسش اصلی پژوهشگران این است: سهم سیا و MI6 در برابر سهم نیروهای داخلی چقدر بود؟' : 'The scholars’ main question: how much was the CIA and MI6, and how much domestic forces?'}</p>
              <div className="mt-6 relative">
                <div aria-hidden="true" className="hidden md:block absolute top-1/2 inset-x-0 h-1 rounded-full bg-gradient-to-l from-crimson via-gold to-turquoise opacity-40" />
                <ol className="relative grid md:grid-cols-3 gap-5">
                  {views.map((v) => (
                    <li key={v.id} className="glass rounded-3xl p-5">
                      <h3 className="text-xl font-black text-gold-bright">{v.label[locale]}</h3>
                      <p className="text-sm text-turquoise-soft mt-1">{v.who[locale]}</p>
                      <p className="read mt-3 text-ivory/85">{v.claim[locale]}</p>
                      <Chips ids={v.sources} />
                    </li>
                  ))}
                </ol>
                <p className="mt-3 flex justify-between text-xs text-ivory/50"><span>{isFa ? 'سهم بیگانه بیشتر' : 'more foreign'}</span><span>{isFa ? 'سهم داخلی بیشتر' : 'more domestic'}</span></p>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section id="documents" aria-labelledby="documents-h" className="scroll-mt-28">
              <H2 id="documents" kicker={isFa ? 'آنچه می‌توان خواند' : 'What you can read yourself'}>{t.docs}</H2>
              <div className="mt-6 grid md:grid-cols-2 gap-5">
                {documents.map((d) => { const ph = photo(d.photo); return (
                  <article key={d.id} className="glass rounded-3xl p-5 flex gap-4">
                    {ph && <a href={ph.page} target="_blank" rel="noopener noreferrer" className="shrink-0"><img src={ph.src} alt={ph.caption[locale]} loading="lazy" decoding="async" className="h-36 w-28 rounded-xl object-cover object-top bg-ivory/90" /></a>}
                    <div className="min-w-0">
                      <h3 className="text-lg font-black text-ivory">{d.title[locale]}</h3>
                      <p className="text-xs text-ivory/50 mt-1">{d.date[locale]}</p>
                      <p className="read mt-2 text-ivory/85">{d.says[locale]}</p>
                      <p className="mt-2 text-sm text-gold-bright"><span className="font-bold">{t.caution}: </span>{d.caution[locale]}</p>
                      <Chips ids={d.sources} />
                    </div>
                  </article>
                ) })}
              </div>
            </section>
          </Reveal>

          <MordadAnalysis locale={locale} />

          <Reveal>
            <section id="gallery" aria-labelledby="gallery-h" className="scroll-mt-28">
              <H2 id="gallery">{t.gallery}</H2>
              <div className="mt-6 columns-1 sm:columns-2 lg:columns-3 gap-4 [&>figure]:mb-4">
                {photos.map((ph) => (
                  <figure key={ph.id} className="glass rounded-2xl overflow-hidden break-inside-avoid">
                    <img src={ph.src} alt={ph.caption[locale]} loading="lazy" decoding="async" className="w-full" />
                    <figcaption className="p-3 text-sm text-ivory/70">{ph.caption[locale]} · <a href={ph.page} className="text-gold hover:underline" rel="noopener noreferrer" target="_blank">{ph.author}</a>, {ph.license}</figcaption>
                  </figure>
                ))}
              </div>
              <p className="mt-2 text-xs text-ivory/50">{t.photoNote}</p>
            </section>
          </Reveal>

          <section id="sources" aria-labelledby="sources-h" className="scroll-mt-28">
            <H2 id="sources">{t.bib}</H2>
            <ol className="mt-4 grid md:grid-cols-2 gap-3 text-sm">
              {mordadSources.map((s) => (
                <li key={s.id} id={`src-${s.id}`} className="glass rounded-2xl p-4 scroll-mt-28 target:border-gold">
                  <span className="font-bold">{s.author}</span>, <em>{s.title}</em> ({s.year}){s.url && <> · <a href={s.url} className="text-gold hover:underline" rel="noopener noreferrer" target="_blank">{isFa ? 'پیوند' : 'link'}</a></>}
                  {s.note && <p className="mt-1 text-ivory/60">{s.note[locale]}</p>}
                </li>
              ))}
            </ol>
            <p className="mt-6"><a href={mrsHref} className="glass rounded-full px-5 py-2 inline-flex items-center min-h-11 hover:border-gold">{t.back}</a></p>
          </section>
        </div>
      </article>
    </PageTransition>
  )
}

type T = Record<string, string>
type ChipsT = (p: { ids: string[] }) => ReactNode

function ReadingProgress() {
  const [p, setP] = useState(0)
  useEffect(() => {
    const on = () => { const h = document.documentElement; const max = h.scrollHeight - h.clientHeight; setP(max > 0 ? h.scrollTop / max : 0) }
    on(); window.addEventListener('scroll', on, { passive: true }); return () => window.removeEventListener('scroll', on)
  }, [])
  return <div aria-hidden="true" className="fixed top-0 inset-x-0 z-50 h-1 bg-transparent"><div className="h-full bg-gradient-to-r from-turquoise via-gold to-crimson" style={{ width: `${(p * 100).toFixed(1)}%` }} /></div>
}

function DayTimeline({ locale, Chips, t }: { locale: Locale; Chips: ChipsT; t: T }) {
  const [i, setI] = useState(4)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const isFa = locale === 'fa'
  const go = (n: number) => { const k = (n + days.length) % days.length; setI(k); tabs.current[k]?.focus() }
  const onKey = (e: KeyboardEvent) => {
    const fwd = isFa ? 'ArrowLeft' : 'ArrowRight'; const back = isFa ? 'ArrowRight' : 'ArrowLeft'
    if (e.key === fwd) { e.preventDefault(); go(i + 1) } else if (e.key === back) { e.preventDefault(); go(i - 1) }
  }
  const d = days[i]
  return (
    <div className="mt-6">
      <div role="tablist" aria-label={t.days} onKeyDown={onKey} className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:thin]">
        {days.map((x, k) => (
          <button key={x.id} ref={(el) => { tabs.current[k] = el }} role="tab" id={`tab-${x.id}`} aria-selected={k === i} aria-controls={`panel-${x.id}`} tabIndex={k === i ? 0 : -1} onClick={() => setI(k)}
            className={`shrink-0 rounded-2xl px-4 py-3 min-h-11 text-start border transition ${k === i ? 'border-gold bg-gold/15 text-gold-bright' : 'border-ivory/10 bg-lapis/40 text-ivory/70 hover:border-gold/50'} ${x.id === 'd28' ? 'ring-1 ring-crimson/60' : ''}`}>
            <span className="block font-black">{x.label[locale]}</span>
            <span className="block text-[11px] opacity-70">{digits(x.moments.length, locale)} {isFa ? 'رخداد' : 'events'}</span>
          </button>
        ))}
      </div>
      <p className="mt-1 text-xs text-ivory/40">{t.keys}</p>
      <div role="tabpanel" id={`panel-${d.id}`} aria-labelledby={`tab-${d.id}`} className="mt-4 glass rounded-3xl p-5 md:p-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div><p className="text-sm text-turquoise-soft">{d.date[locale]}</p><p className="text-xl font-black text-ivory mt-1">{d.summary[locale]}</p></div>
          <div className="flex gap-2">
            <button type="button" onClick={() => go(i - 1)} className="glass rounded-full px-4 min-h-11" aria-label={t.prev}>{isFa ? '→' : '←'}</button>
            <button type="button" onClick={() => go(i + 1)} className="glass rounded-full px-4 min-h-11" aria-label={t.next}>{isFa ? '←' : '→'}</button>
          </div>
        </div>
        <ol key={d.id} className="mt-6 relative border-s-2 border-gold/30 ms-2 grid gap-6">
          {d.moments.map((m, k) => { const ph = photo(m.photo); const c = CERT[m.certainty]; return (
            <li key={k} className="ps-6 relative animate-[fadein_.5s_ease_both]" style={{ animationDelay: `${k * 80}ms` }}>
              <span aria-hidden="true" className="absolute -start-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-gold bg-night" />
              <div className="grid md:grid-cols-[minmax(0,1fr)_200px] gap-4">
                <div>
                  <p className="text-xs font-bold text-gold">{m.time[locale]}</p>
                  <h3 className="text-lg font-black text-ivory mt-1">{m.title[locale]} <span className={`ms-2 align-middle inline-block rounded-full border px-2 py-0.5 text-[11px] font-bold ${c.tone}`}>{c[locale]}</span></h3>
                  <p className="read mt-2 text-ivory/85">{m.body[locale]}</p>
                  {m.note && <p className="mt-2 text-sm text-ivory/60 italic">{m.note[locale]}</p>}
                  <Chips ids={m.sources} />
                </div>
                {ph && <figure className="rounded-2xl overflow-hidden border border-gold/20 self-start"><img src={ph.src} alt={ph.caption[locale]} loading="lazy" decoding="async" className="w-full h-36 object-cover object-top" /><figcaption className="p-2 text-[11px] text-ivory/60">{ph.caption[locale]}</figcaption></figure>}
              </div>
            </li>
          ) })}
        </ol>
      </div>
    </div>
  )
}

function MythList({ locale, Chips, t }: { locale: Locale; Chips: ChipsT; t: T }) {
  const [f, setF] = useState<Verdict | 'all'>('all')
  const shown = myths.filter((m) => f === 'all' || m.verdict === f)
  return (
    <>
      <div className="mt-5 flex flex-wrap items-center gap-2 text-sm" role="group" aria-label={t.filter}>
        <span className="text-ivory/50">{t.filter}</span>
        {(['all', 'false', 'partly', 'disputed'] as const).map((k) => (
          <button key={k} type="button" aria-pressed={f === k} onClick={() => setF(k)} className={`rounded-full border px-4 min-h-11 ${f === k ? 'border-gold bg-gold/15 text-gold-bright' : 'border-ivory/15 text-ivory/70 hover:border-gold/50'}`}>
            {k === 'all' ? `${t.all} (${myths.length})` : `${VERDICT[k].mark} ${VERDICT[k][locale]} (${myths.filter((m) => m.verdict === k).length})`}
          </button>
        ))}
      </div>
      <ol className="mt-6 grid md:grid-cols-2 gap-5">
        {shown.map((m, n) => { const v = VERDICT[m.verdict]; return (
          <li key={m.id}>
            <details className="group h-full rounded-3xl border border-ivory/10 bg-lapis/30 open:bg-lapis/50 open:border-gold/50 transition">
              <summary className="cursor-pointer list-none p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-bold ${v.tone}`}><span aria-hidden="true">{v.mark}</span>{v[locale]}</span>
                  <span className="text-xs text-ivory/40">{String(n + 1).padStart(2, '0')}</span>
                </div>
                <p className="mt-3 text-xs font-bold text-turquoise-soft">{t.claim}</p>
                <p className="mt-1 text-xl font-black text-ivory leading-9">«{m.claim[locale]}»</p>
                <p className="mt-2 text-xs text-ivory/50">{t.who}: {m.who[locale]}</p>
                <p className="mt-3 text-sm text-gold group-open:hidden">{t.open} ▾</p>
              </summary>
              <div className="px-5 pb-5">
                <p className="text-xs font-bold text-turquoise-soft">{t.evidence}</p>
                {m.evidence[locale].map((p, k) => <p key={k} className="read mt-2 text-ivory/85">{p}</p>)}
                {m.other && <div className="mt-4 rounded-2xl border-s-4 border-turquoise/60 bg-turquoise/5 p-3"><p className="text-xs font-bold text-turquoise-soft">{t.other2}</p><p className="read mt-1 text-ivory/80">{m.other[locale]}</p></div>}
                <Chips ids={m.sources} />
              </div>
            </details>
          </li>
        ) })}
      </ol>
    </>
  )
}
