import { useEffect, useState, type ReactNode } from 'react'
import { facts, jashnSources, page, photo, photos, reading, sections, timeline, type JashnPhoto } from '../../data/jashn2500'
import type { Locale } from '../../lib/i18n'
import { PageTransition, Reveal } from '../Reveal'
import { Shamseh } from '../Ornament'

export function JashnPage({ locale }: { locale: Locale }) {
  const isFa = locale === 'fa'
  const t = isFa
    ? { home: 'خانه', mrs: 'محمدرضا شاه', here: 'جشن‌های ۲۵۰۰ ساله', other: 'English', idea: 'ایده', days: 'روزشمار', gallery: 'تصویرها', bib: 'منابع', src: 'منابع:', reading: 'نگاه ما', ourReading: 'نگاه ما', photoNote: 'همهٔ عکس‌ها از ویکی‌انبار است و برچسب پروانهٔ هر پرونده بررسی شده؛ فهرست کامل در public/media/ATTRIBUTION.txt.', back: 'بازگشت به محمدرضا شاه' }
    : { home: 'Home', mrs: 'Mohammad Reza Shah', here: 'The 2,500-year celebrations', other: 'فارسی', idea: 'The idea', days: 'Day by day', gallery: 'Images', bib: 'Sources', src: 'Sources:', reading: 'Our reading', ourReading: 'Our reading', photoNote: 'All photos are from Wikimedia Commons; each file’s licence tag was checked. Full list in public/media/ATTRIBUTION.txt.', back: 'Back to Mohammad Reza Shah' }
  const sep = isFa ? '‹' : '/'
  const author = (id: string) => jashnSources.find((s) => s.id === id)?.author.split(',')[0] ?? id
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
  const nav: [string, string][] = isFa
    ? [['idea', 'ایده'], ['preparations', 'تدارک'], ['pasargadae', 'پاسارگاد'], ['timeline', t.days], ['guests', 'مهمانان'], ['congress', 'کنگره'], ['banquet', 'ضیافت'], ['parade', 'رژه'], ['tehran', 'تهران'], ['legacy', 'میراث'], ['reading', t.reading], ['gallery', t.gallery], ['sources', t.bib]]
    : [['idea', 'The idea'], ['preparations', 'Preparations'], ['pasargadae', 'Pasargadae'], ['timeline', t.days], ['guests', 'Guests'], ['congress', 'Congress'], ['banquet', 'Banquet'], ['parade', 'Parade'], ['tehran', 'Tehran'], ['legacy', 'Legacy'], ['reading', t.reading], ['gallery', t.gallery], ['sources', t.bib]]
  const hero = photo('pasargadae-7') as JashnPhoto
  const mrsHref = isFa ? '/king/mohammad-reza-shah#jashn-2500' : '/en/king/mohammad-reza-shah#jashn-2500'

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
            {page.lede[locale].map((p) => <p key={p.slice(0, 40)} className={`mt-6 ${p === page.lede[locale][0] ? 'text-xl leading-10 text-ivory/90' : 'text-ivory/75'} max-w-3xl read`}>{p}</p>)}
            <dl className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl">
              {facts.map(([k, v]) => <div key={k.en} className="glass rounded-2xl p-4"><dt className="text-xs text-ivory/50">{k[locale]}</dt><dd className="font-bold text-gold-bright mt-1">{v[locale]}</dd></div>)}
            </dl>
            <p className="mt-6 flex flex-wrap gap-3">
              <a href={isFa ? '/en/event/jashn-2500' : '/event/jashn-2500'} hrefLang={isFa ? 'en' : 'fa'} className="glass rounded-full px-5 py-2 inline-flex items-center min-h-11 hover:border-gold">{t.other}</a>
              <a href="#pasargadae" className="rounded-full px-5 py-2 inline-flex items-center min-h-11 bg-gold text-night font-bold hover:bg-gold-bright">{isFa ? 'سخن پاسارگاد ↓' : 'The Pasargadae speech ↓'}</a>
            </p>
          </div>
        </header>

        <SectionNav items={nav} label={isFa ? 'بخش‌های صفحه' : 'Page sections'} />

        <div className="mx-auto max-w-6xl px-4 py-12 grid grid-cols-[minmax(0,1fr)] gap-20">
          {sections.slice(0, 3).map((s) => <SectionCard key={s.id} s={s} locale={locale} Chips={Chips} t={t} />)}

          <section id="timeline" aria-labelledby="timeline-h" className="scroll-mt-28">
            <Reveal>
              <H2 id="timeline" kicker={isFa ? 'از پاسارگاد تا تهران' : 'From Pasargadae to Tehran'}>{t.days}</H2>
              <ol className="mt-8 relative border-s-2 border-gold/30 ms-2 grid gap-6">
                {timeline.map((m) => {
                  const ph = photo(m.photo)
                  return (
                    <li key={m.id} className="ps-6 relative">
                      <span aria-hidden="true" className="absolute -start-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-gold bg-night" />
                      <div className="grid md:grid-cols-[minmax(0,1fr)_200px] gap-4">
                        <div>
                          <p className="text-xs font-bold text-gold">{m.when[locale]}</p>
                          <h3 className="text-lg font-black text-ivory mt-1">{m.title[locale]}</h3>
                          <p className="read mt-2 text-ivory/85">{m.body[locale]}</p>
                          <Chips ids={m.sources} />
                        </div>
                        {ph && (
                          <figure className="rounded-2xl overflow-hidden border border-gold/20 self-start">
                            <img src={ph.src} alt={ph.caption[locale]} loading="lazy" decoding="async" className="w-full h-36 object-cover object-top" />
                            <figcaption className="p-2 text-[11px] text-ivory/60">{ph.caption[locale]}</figcaption>
                          </figure>
                        )}
                      </div>
                    </li>
                  )
                })}
              </ol>
            </Reveal>
          </section>

          {sections.slice(3).map((s) => <SectionCard key={s.id} s={s} locale={locale} Chips={Chips} t={t} />)}

          <section id="reading" aria-labelledby="reading-h" className="scroll-mt-28">
            <Reveal>
              <H2 id="reading">{t.reading}</H2>
              <aside className="mt-6 rounded-3xl p-5 md:p-8 border-2 border-dashed border-gold/50" style={{ background: 'linear-gradient(135deg, rgba(217,180,90,.12), rgba(15,31,75,.55))' }}>
                <p className="inline-flex items-center gap-2 rounded-full bg-gold/15 border border-gold/50 px-3 py-1 text-xs font-bold text-gold-bright">
                  <span aria-hidden="true">✎</span>{t.ourReading}
                </p>
                {reading[locale].map((p) => <p key={p.slice(0, 48)} className="read mt-4 text-ivory/90">{p}</p>)}
              </aside>
            </Reveal>
          </section>

          <section id="gallery" aria-labelledby="gallery-h" className="scroll-mt-28">
            <Reveal>
              <H2 id="gallery">{t.gallery}</H2>
              <p className="mt-3 text-sm text-ivory/55">{t.photoNote}</p>
              <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {photos.map((ph) => (
                  <li key={ph.id}>
                    <figure className="glass rounded-3xl overflow-hidden h-full">
                      <img src={ph.src} alt={ph.caption[locale]} loading="lazy" decoding="async" className="w-full h-48 object-cover" />
                      <figcaption className="p-4 text-sm text-ivory/75">
                        <p>{ph.caption[locale]}</p>
                        <p className="mt-2 text-xs text-ivory/45">
                          <a href={ph.page} className="text-gold hover:underline" rel="noopener noreferrer" target="_blank">{ph.author}</a>
                          {', '}{ph.license}
                        </p>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>

          <section id="sources" aria-labelledby="sources-h" className="scroll-mt-28">
            <Reveal>
              <H2 id="sources">{t.bib}</H2>
              <ol className="mt-6 grid gap-3">
                {jashnSources.map((s) => (
                  <li key={s.id} id={`src-${s.id}`} className="glass rounded-2xl p-4 scroll-mt-28">
                    <p className="font-bold text-ivory">{s.author}</p>
                    <p className="mt-1 text-ivory/80">
                      {s.url ? <a href={s.url} className="text-gold hover:underline" rel="noopener noreferrer" target="_blank">{s.title}</a> : s.title}
                      <span className="text-ivory/50"> ({s.year})</span>
                    </p>
                    {s.note && <p className="mt-2 text-sm text-ivory/60">{s.note[locale]}</p>}
                  </li>
                ))}
              </ol>
              <p className="mt-8">
                <a href={mrsHref} className="inline-flex items-center min-h-11 rounded-full px-5 py-2 bg-gold text-night font-bold hover:bg-gold-bright">{t.back}</a>
              </p>
            </Reveal>
          </section>
        </div>
      </article>
    </PageTransition>
  )
}

function SectionCard({ s, locale, Chips, t }: {
  s: (typeof sections)[number]
  locale: Locale
  Chips: ({ ids }: { ids: string[] }) => ReactNode
  t: { ourReading: string }
}) {
  const ph = photo(s.photo)
  return (
    <section id={s.id} aria-labelledby={`${s.id}-h`} className="scroll-mt-28">
      <Reveal>
        <article className="glass rounded-3xl p-5 md:p-8">
          <h2 id={`${s.id}-h`} className="text-3xl md:text-4xl font-black text-gilded leading-tight">{s.title[locale]}</h2>
          <div className={ph ? 'mt-6 grid md:grid-cols-[minmax(0,1fr)_240px] gap-6 items-start' : 'mt-6'}>
            <div>
              {s.body[locale].map((p) => <p key={p.slice(0, 48)} className="read mt-4 text-ivory/90 first:mt-0">{p}</p>)}
              {s.quotations && (
                <blockquote dir="ltr" lang="en" className="mt-5 rounded-2xl border-s-4 border-gold/60 bg-gold/5 px-4 py-3 text-start">
                  {s.quotations.lines.map((line) => <p key={line} className="mt-2 first:mt-0 text-ivory/90 leading-8">“{line}”</p>)}
                  <p dir={locale === 'fa' ? 'rtl' : 'ltr'} className="mt-3 text-xs text-ivory/55">{s.quotations.cite[locale]}</p>
                </blockquote>
              )}
              <Chips ids={s.sources} />
            </div>
            {ph && (
              <figure className="rounded-2xl overflow-hidden border border-gold/20">
                <img src={ph.src} alt={ph.caption[locale]} loading="lazy" decoding="async" className="w-full h-52 object-cover object-top" />
                <figcaption className="p-3 text-[11px] text-ivory/60">{ph.caption[locale]}</figcaption>
              </figure>
            )}
          </div>
          {s.view && (
            <aside className="mt-6 rounded-3xl p-5 border-2 border-dashed border-gold/50" style={{ background: 'linear-gradient(135deg, rgba(217,180,90,.12), rgba(15,31,75,.55))' }}>
              <p className="inline-flex items-center gap-2 rounded-full bg-gold/15 border border-gold/50 px-3 py-1 text-xs font-bold text-gold-bright">
                <span aria-hidden="true">✎</span>{t.ourReading}
              </p>
              {s.view[locale].map((p) => <p key={p.slice(0, 48)} className="read mt-3 text-ivory/90">{p}</p>)}
            </aside>
          )}
        </article>
      </Reveal>
    </section>
  )
}

function ReadingProgress() {
  const [p, setP] = useState(0)
  useEffect(() => {
    const on = () => { const h = document.documentElement; const max = h.scrollHeight - h.clientHeight; setP(max > 0 ? h.scrollTop / max : 0) }
    on(); window.addEventListener('scroll', on, { passive: true }); return () => window.removeEventListener('scroll', on)
  }, [])
  return <div aria-hidden="true" className="fixed top-0 inset-x-0 z-50 h-1 bg-transparent"><div className="h-full bg-gradient-to-r from-turquoise via-gold to-crimson" style={{ width: `${(p * 100).toFixed(1)}%` }} /></div>
}

function SectionNav({ items, label }: { items: [string, string][]; label: string }) {
  const [active, setActive] = useState(items[0][0])
  useEffect(() => {
    const obs = new IntersectionObserver((es) => { for (const e of es) if (e.isIntersecting) setActive(e.target.id) }, { rootMargin: '-30% 0px -60% 0px' })
    for (const [id] of items) { const el = document.getElementById(id); if (el) obs.observe(el) }
    return () => obs.disconnect()
  }, [items])
  return (
    <nav aria-label={label} className="sticky top-16 z-30 border-b border-gold/15 bg-night/85 backdrop-blur">
      <ol className="mx-auto max-w-6xl px-4 flex gap-1 overflow-x-auto [scrollbar-width:none]">
        {items.map(([id, l]) => <li key={id} className="shrink-0"><a href={`#${id}`} aria-current={active === id ? 'true' : undefined} className={`inline-flex items-center min-h-11 px-3 text-sm border-b-2 ${active === id ? 'border-gold text-gold-bright' : 'border-transparent text-ivory/60 hover:text-ivory'}`}>{l}</a></li>)}
      </ol>
    </nav>
  )
}
