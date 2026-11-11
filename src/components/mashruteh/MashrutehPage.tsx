import { useEffect, useState, type ReactNode } from 'react'
import {
  documents, episodes, episodeUrl, facts, mashrutehSources, page, people, photo, photos, PODCAST_LINKS, reading, sections, timeline,
  type EpisodePart, type MashPhoto, type MashSection,
} from '../../data/mashruteh'
import type { Locale } from '../../lib/i18n'
import { PageTransition, Reveal } from '../Reveal'
import { Shamseh } from '../Ornament'
import { SectionNav } from '../SectionNav'

type T = { ourReading: string; listen: string; ep: string; khadem: string }
type ChipsT = ({ ids }: { ids: string[] }) => ReactNode

export function MashrutehPage({ locale }: { locale: Locale }) {
  const isFa = locale === 'fa'
  const t = isFa
    ? { home: 'خانه', qajars: 'قاجار', here: 'انقلاب مشروطه', other: 'English', days: 'روزشمار', people: 'چهره‌ها', docs: 'سندها', listenMore: 'بیشتر بشنوید', gallery: 'تصویرها', bib: 'منابع', src: 'منابع:', reading: 'نگاه ما', ourReading: 'نگاه ما', listen: 'بشنوید', ep: 'قسمت', khadem: 'برداشت امیر خادم', photoNote: 'همهٔ عکس‌ها از ویکی‌انبار است و برچسب پروانهٔ هر پرونده بررسی شده؛ فهرست کامل در public/media/ATTRIBUTION.txt.', back: 'بازگشت به قاجار' }
    : { home: 'Home', qajars: 'Naser al-Din Shah', here: 'The Constitutional Revolution', other: 'فارسی', days: 'Timeline', people: 'People', docs: 'Documents', listenMore: 'Listen further', gallery: 'Images', bib: 'Sources', src: 'Sources:', reading: 'Our reading', ourReading: 'Our reading', listen: 'Listen', ep: 'Episode', khadem: 'Amir Khadem’s reading', photoNote: 'All photos are from Wikimedia Commons; each file’s licence tag was checked. Full list in public/media/ATTRIBUTION.txt.', back: 'Back to Naser al-Din Shah' }
  const sep = isFa ? '‹' : '/'
  const author = (id: string) => mashrutehSources.find((s) => s.id === id)?.author.split(',')[0] ?? id
  const Chips: ChipsT = ({ ids }) => (
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
  const short: Record<string, [string, string]> = {
    roots: ['زمینه', 'Roots'], mozaffar: ['مظفرالدین‌شاه', 'Mozaffar'], abdolazim: ['شاه عبدالعظیم', 'Shah Abd al-Azim'], legation: ['بست سفارت', 'Legation'],
    farman: ['فرمان', 'Rescript'], majles: ['مجلس اول', 'First Majles'], supplement: ['متمم', 'Supplement'], clergy: ['علما', 'Ulama'], society: ['انجمن و روزنامه', 'Anjomans & press'],
    partition: ['۱۹۰۷', '1907'], coup: ['به توپ بستن', 'Bombardment'], tabriz: ['تبریز', 'Tabriz'], conquest: ['فتح تهران', 'Tehran'], ultimatum: ['اولتیماتوم', 'Ultimatum'], legacy: ['میراث', 'Legacy'],
  }
  const nav: [string, string][] = [
    ...sections.map((s): [string, string] => [s.id, short[s.id]?.[isFa ? 0 : 1] ?? s.title[locale]]),
    ['timeline', t.days], ['people', t.people], ['documents', t.docs], ['podcast', t.listenMore], ['reading', t.reading], ['gallery', t.gallery], ['sources', t.bib],
  ]
  const hero = photo('first-majles') as MashPhoto
  const qajarHref = isFa ? '/dynasty/qajars' : '/en/king/naser-al-din#constitution'
  const partTitle: Record<EpisodePart, string> = isFa
    ? { roots: 'ریشه‌ها (قسمت ۱ تا ۱۱)', mozaffar: 'مظفرالدین‌شاه و مجلس اول', 'mohammad-ali': 'محمدعلی‌شاه' }
    : { roots: 'Roots (episodes 1–11)', mozaffar: 'Mozaffar al-Din Shah and the First Majles', 'mohammad-ali': 'Mohammad Ali Shah' }

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
              <a href={qajarHref} className="hover:text-gold inline-block py-2 min-h-11">{t.qajars}</a>
              <span className="text-gold/50 mx-2" aria-hidden="true">{sep}</span>
              <span aria-current="page">{t.here}</span>
            </nav>
            <p className="text-turquoise-soft font-bold">{page.kicker[locale]}</p>
            <h1 className="mt-2 text-4xl md:text-7xl font-black text-gilded leading-tight max-w-4xl">{page.title[locale]}</h1>
            {page.lede[locale].map((p, i) => <p key={p.slice(0, 40)} className={`mt-6 ${i === 0 ? 'text-xl leading-10 text-ivory/90' : 'text-ivory/75'} max-w-3xl read`}>{p}</p>)}
            <dl className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl">
              {facts.map(([k, v]) => <div key={k.en} className="glass rounded-2xl p-4"><dt className="text-xs text-ivory/50">{k[locale]}</dt><dd className="font-bold text-gold-bright mt-1">{v[locale]}</dd></div>)}
            </dl>
            <p className="mt-6 flex flex-wrap gap-3">
              <a href={isFa ? '/en/event/mashruteh' : '/event/mashruteh'} hrefLang={isFa ? 'en' : 'fa'} className="glass rounded-full px-5 py-2 inline-flex items-center min-h-11 hover:border-gold">{t.other}</a>
              <a href="#farman" className="rounded-full px-5 py-2 inline-flex items-center min-h-11 bg-gold text-night font-bold hover:bg-gold-bright">{isFa ? 'فرمان مشروطیت ↓' : 'The rescript ↓'}</a>
              <a href="#podcast" className="glass rounded-full px-5 py-2 inline-flex items-center min-h-11 hover:border-gold">{t.listenMore}</a>
            </p>
          </div>
        </header>

        <SectionNav items={nav} label={isFa ? 'بخش‌های صفحه' : 'Page sections'} />

        <div className="mx-auto max-w-6xl px-4 py-12 grid grid-cols-[minmax(0,1fr)] gap-20">
          {sections.map((s) => <SectionCard key={s.id} s={s} locale={locale} Chips={Chips} t={t} />)}

          <section id="timeline" aria-labelledby="timeline-h" className="scroll-mt-28">
            <Reveal>
              <H2 id="timeline" kicker={isFa ? 'از تنباکو تا اولتیماتوم' : 'From tobacco to the ultimatum'}>{t.days}</H2>
              <ol className="mt-8 relative border-s-2 border-gold/30 ms-2 grid gap-6">
                {timeline.map((m) => {
                  const ph = photo(m.photo)
                  return (
                    <li key={m.id} className="ps-6 relative">
                      <span aria-hidden="true" className="absolute -start-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-gold bg-night" />
                      <div className={ph ? 'grid md:grid-cols-[minmax(0,1fr)_200px] gap-4' : ''}>
                        <div>
                          <p className="text-xs font-bold text-gold">{m.when[locale]}</p>
                          <h3 className="text-lg font-black text-ivory mt-1">{m.title[locale]}</h3>
                          <p className="read mt-2 text-ivory/85">{m.body[locale]}</p>
                          <Chips ids={m.sources} />
                        </div>
                        {ph && (
                          <figure className="rounded-2xl overflow-hidden border border-gold/20 self-start">
                            <img src={ph.src} alt={ph.caption[locale]} loading="lazy" decoding="async" className="w-full h-36 object-cover object-top" />
                          </figure>
                        )}
                      </div>
                    </li>
                  )
                })}
              </ol>
            </Reveal>
          </section>

          <section id="people" aria-labelledby="people-h" className="scroll-mt-28">
            <Reveal>
              <H2 id="people">{t.people}</H2>
              <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {people.map((p) => (
                  <li key={p.id} className="glass rounded-2xl p-4">
                    <h3 className="font-black text-gold-bright">{p.name[locale]}</h3>
                    <p className="text-xs text-turquoise-soft mt-1">{p.role[locale]}</p>
                    <p className="read mt-2 text-sm text-ivory/85">{p.body[locale]}</p>
                    <Chips ids={p.sources} />
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>

          <section id="documents" aria-labelledby="documents-h" className="scroll-mt-28">
            <Reveal>
              <H2 id="documents">{t.docs}</H2>
              <ul className="mt-6 grid md:grid-cols-2 gap-4">
                {documents.map((d) => (
                  <li key={d.id} className="glass rounded-2xl p-4 border-s-4 border-gold/50">
                    <h3 className="font-black text-ivory">{d.title[locale]}</h3>
                    <p className="text-xs font-bold text-gold mt-1">{d.date[locale]}</p>
                    <p className="read mt-2 text-sm text-ivory/85">{d.body[locale]}</p>
                    <Chips ids={d.sources} />
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>

          <section id="podcast" aria-labelledby="podcast-h" className="scroll-mt-28">
            <Reveal>
              <H2 id="podcast" kicker={isFa ? 'پادکست «ماجرای مشروطه» با امیر خادم' : 'The podcast «Majera-ye Mashruteh» with Amir Khadem'}>{t.listenMore}</H2>
              <p className="read mt-4 text-ivory/80 max-w-3xl">{isFa
                ? 'راهنمای شنیدن: هر قسمت با پیوند به خود ویدیو. خلاصه‌ها از توضیح خود قسمت‌ها گرفته شده است؛ متن قسمت‌ها اینجا بازنشر نمی‌شود. جایی که برداشت شخصی خادم است، با نشان جدا آمده.'
                : 'A listening guide: each episode links to its own video. Summaries follow the episodes’ own descriptions; the episodes’ text is not republished here. Where Khadem gives his own interpretation, it is marked.'}</p>
              <p className="mt-4 flex flex-wrap gap-2">
                {PODCAST_LINKS.map((l) => <a key={l.href} href={l.href} rel="noopener noreferrer" target="_blank" className="glass rounded-full px-4 py-2 inline-flex items-center min-h-11 text-sm text-gold hover:border-gold">{l.label[locale]}</a>)}
              </p>
              {(['roots', 'mozaffar', 'mohammad-ali'] as EpisodePart[]).map((part) => (
                <details key={part} className="mt-6 glass rounded-2xl p-4" open={part !== 'roots'}>
                  <summary className="cursor-pointer font-black text-gold-bright min-h-11 flex items-center">{partTitle[part]}</summary>
                  <ol className="mt-3 grid md:grid-cols-2 gap-3">
                    {episodes.filter((e) => e.part === part).map((e) => (
                      <li key={e.id} className="rounded-xl border border-gold/15 p-3">
                        <a href={episodeUrl(e.n)} rel="noopener noreferrer" target="_blank" className="font-bold text-ivory hover:text-gold">{e.title[locale]}</a>
                        {e.view && <span className="ms-2 rounded-full bg-gold/15 border border-gold/40 px-2 py-0.5 text-[11px] text-gold-bright">{t.khadem}</span>}
                        <p className="mt-1 text-sm text-ivory/70">{e.summary[locale]}</p>
                      </li>
                    ))}
                  </ol>
                </details>
              ))}
              <p className="mt-4 text-xs text-ivory/50">{isFa ? 'برای سال‌های ۱۲۸۷ تا ۱۲۹۰ که پادکست هنوز به آن نرسیده، روایت این صفحه از ایرانیکا و کسروی است.' : 'For 1908–1911, which the podcast has not yet reached, this page relies on Iranica and Kasravi.'}</p>
            </Reveal>
          </section>

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
                      <img src={ph.src} alt={ph.caption[locale]} loading="lazy" decoding="async" className="w-full h-48 object-cover object-top" />
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
                {mashrutehSources.map((s) => (
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
                <a href={qajarHref} className="inline-flex items-center min-h-11 rounded-full px-5 py-2 bg-gold text-night font-bold hover:bg-gold-bright">{t.back}</a>
              </p>
            </Reveal>
          </section>
        </div>
      </article>
    </PageTransition>
  )
}

function SectionCard({ s, locale, Chips, t }: { s: MashSection; locale: Locale; Chips: ChipsT; t: T }) {
  const ph = photo(s.photo)
  return (
    <section id={s.id} aria-labelledby={`${s.id}-h`} className="scroll-mt-28">
      <Reveal>
        <article className="glass rounded-3xl p-5 md:p-8">
          <p className="text-turquoise-soft font-bold text-sm">{s.era[locale]}</p>
          <h2 id={`${s.id}-h`} className="mt-1 text-3xl md:text-4xl font-black text-gilded leading-tight">{s.title[locale]}</h2>
          <div className={ph ? 'mt-6 grid md:grid-cols-[minmax(0,1fr)_240px] gap-6 items-start' : 'mt-6'}>
            <div>
              {s.body[locale].map((p) => <p key={p.slice(0, 48)} className="read mt-4 text-ivory/90 first:mt-0">{p}</p>)}
              {s.quotations && (
                <blockquote dir={s.quotations.dir} lang={s.quotations.dir === 'rtl' ? 'fa' : 'en'} className="mt-5 rounded-2xl border-s-4 border-gold/60 bg-gold/5 px-4 py-3 text-start">
                  {s.quotations.lines.map((line) => <p key={line} className="mt-2 first:mt-0 text-ivory/90 leading-8">«{line}»</p>)}
                  <p dir={locale === 'fa' ? 'rtl' : 'ltr'} lang={locale} className="mt-3 text-xs text-ivory/55">{s.quotations.cite[locale]}</p>
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
          {s.listen && s.listen.length > 0 && (
            <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-ivory/50">🎧 {t.listen}:</span>
              {s.listen.map((l) => (
                <a key={`${l.ep}-${l.t ?? ''}`} href={episodeUrl(l.ep, l.t)} rel="noopener noreferrer" target="_blank" className="rounded-full border border-turquoise/40 px-2.5 py-1 text-turquoise-soft hover:bg-turquoise/10">
                  {t.ep} {typeof l.ep === 'number' ? (locale === 'fa' ? l.ep.toLocaleString('fa-IR') : l.ep) : (locale === 'fa' ? 'ویژه' : 'special')}{l.t ? ` · ${l.t}` : ''} — {l.note[locale]}
                </a>
              ))}
            </div>
          )}
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
