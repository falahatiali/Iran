import type { ReactNode } from 'react'
import type { DossierQuote } from '../../data/featured/types'
import { aftermath, battleQuotes, campaign, carrhaePhotos, carrhaeSources, historiography, legends, liberty, oobNote, orderOfBattle, page, why } from '../../data/carrhae'
import type { Locale } from '../../lib/i18n'
import { EvidenceBadge } from '../cylinder/EvidenceBadge'
import { CampaignMap } from '../featured/CampaignMap'
import { PageTransition, Reveal } from '../Reveal'
import { Shamseh } from '../Ornament'
import { CarrhaeBattle } from './CarrhaeBattle'

export function CarrhaePage({ locale }: { locale: Locale }) {
  const isFa = locale === 'fa'
  const t = isFa
    ? { home: 'خانه', parthians: 'اشکانیان', toc: 'فهرست', battle: 'نبرد، گام‌به‌گام', map: 'نقشهٔ لشکرکشی', oob: 'دو سپاه: شمارها و اختلاف‌ها', why: 'چرا پارتیان پیروز شدند؟', after: 'پیامدها', lens: 'از دریچهٔ آزادی و مالکیت', hist: 'منابع و تاریخ‌نگاری', legends: 'افسانه‌ها، نه تاریخ', gallery: 'تصویرها', bib: 'کتاب‌شناسی', side: 'سپاه', unit: 'یگان', fig: 'شمار', src: 'منبع', dispute: 'اختلاف', rome: 'روم', parthia: 'پارت', evidence: 'شواهد', reading: 'برداشت پژوهشگران', claim: 'ادعا', verdict: 'داوری', clip: 'نسخهٔ ویدیویی (۱۲۸۰×۷۲۰):', quoteNote: 'ترجمهٔ فارسی از ماست؛ متن اصلی از ترجمهٔ انگلیسی درایدن–کلاف.', photoNote: 'همهٔ عکس‌ها از ویکی‌انبار (Wikimedia Commons) است؛ پروانه و پدیدآورنده در صفحهٔ هر پرونده بررسی شده است.', orodes: 'ارد دوم', other: 'English', mapNote: 'مسیرها طرح‌وارند.' }
    : { home: 'Home', parthians: 'Arsacids', toc: 'Contents', battle: 'The battle, step by step', map: 'The campaign map', oob: 'The two armies: numbers and disputes', why: 'Why the Parthians won', after: 'Aftermath', lens: 'Through the lens of liberty and property', hist: 'Sources and historiography', legends: 'Legends, not history', gallery: 'Images', bib: 'Bibliography', side: 'Side', unit: 'Unit', fig: 'Figure', src: 'Source', dispute: 'Dispute', rome: 'Rome', parthia: 'Parthia', evidence: 'Evidence', reading: 'What scholars infer', claim: 'The claim', verdict: 'Verdict', clip: 'Video version (1280×720):', quoteNote: '', photoNote: 'All photos are from Wikimedia Commons; licence and author were checked on each file page.', orodes: 'Orodes II', other: 'فارسی', mapNote: 'Routes are sketches.' }
  const sep = isFa ? '‹' : '/'
  const author = (id: string) => carrhaeSources.find((s) => s.id === id)?.author.split(',')[0] ?? id
  const cite = (ids: string[]) => <p className="mt-3 text-xs text-ivory/50">{isFa ? 'منابع:' : 'Sources:'} {ids.map((s, k) => <span key={s}>{k > 0 && ' · '}<a href={`#src-${s}`} className="text-gold hover:underline">{author(s)}</a></span>)}</p>
  const Quote = ({ q }: { q: DossierQuote }) => (
    <blockquote className="mt-5 border-s-4 border-gold/60 ps-5 py-1">
      <p className="read text-ivory/90 italic" lang="en" dir="ltr">“{q.text}”</p>
      {isFa && <p className="read mt-2 text-ivory/80">«{q.fa}»</p>}
      <footer className="mt-2 text-xs text-ivory/50">{q.ref} · <a href={`#src-${q.source}`} className="text-gold hover:underline">{author(q.source)}</a>{isFa && ` · ${t.quoteNote}`}</footer>
    </blockquote>
  )
  const H2 = ({ id, children }: { id: string; children: ReactNode }) => <h2 id={`${id}-h`} className="text-3xl md:text-4xl font-black text-gilded">{children}</h2>
  const toc: [string, string][] = [['battle', t.battle], ['campaign', t.map], ['oob', t.oob], ['why', t.why], ['aftermath', t.after], ['lens', t.lens], ['historiography', t.hist], ['legends', t.legends], ['gallery', t.gallery], ['sources', t.bib]]
  const crassus = carrhaePhotos[0]
  return (
    <PageTransition>
      <article lang={locale} dir={isFa ? 'rtl' : 'ltr'}>
        <header className="relative overflow-hidden border-b border-gold/15">
          <Shamseh className="absolute -top-24 -end-24 w-96 h-96 opacity-10" spin />
          <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-20 grid grid-cols-[minmax(0,1fr)] md:grid-cols-[minmax(0,1fr)_280px] gap-10 items-center">
            <div>
              <nav aria-label={isFa ? 'مسیر صفحه' : 'Breadcrumb'} className="text-sm text-ivory/60 mb-6">
                <a href="/" className="hover:text-gold inline-block py-2 min-h-11">{t.home}</a>
                <span className="text-gold/50 mx-2" aria-hidden="true">{sep}</span>
                <a href="/dynasty/parthians" className="hover:text-gold inline-block py-2 min-h-11">{t.parthians}</a>
                <span className="text-gold/50 mx-2" aria-hidden="true">{sep}</span>
                <a href={isFa ? '/king/orodes-ii' : '/en/king/orodes-ii'} className="hover:text-gold inline-block py-2 min-h-11">{t.orodes}</a>
                <span className="text-gold/50 mx-2" aria-hidden="true">{sep}</span>
                <span aria-current="page">{isFa ? 'حران' : 'Carrhae'}</span>
              </nav>
              <p className="text-turquoise-soft font-bold">{page.kicker[locale]}</p>
              <h1 className="mt-2 text-5xl md:text-7xl font-black text-gilded leading-tight">{page.title[locale]}</h1>
              {page.lede[locale].map((p, k) => <p key={k} className={`mt-6 ${k === 0 ? 'text-xl leading-10 text-ivory/90' : 'text-ivory/70'} max-w-3xl`}>{p}</p>)}
              <dl className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
                {[[isFa ? 'تاریخ' : 'Date', isFa ? '۶ مه ۵۳ پ.م.' : '6 May 53 BCE'], [isFa ? 'جا' : 'Place', isFa ? 'جنوب حران، کنار بلیخ' : 'south of Carrhae, on the Balikh'], [isFa ? 'فرماندهان' : 'Commanders', isFa ? 'سورنا · کراسوس' : 'Surena · Crassus'], [isFa ? 'نسبت' : 'Odds', isFa ? 'حدود ۱ به ۴' : 'about 1 to 4']].map(([k, v]) => (
                  <div key={k} className="glass rounded-2xl p-4"><dt className="text-xs text-ivory/50">{k}</dt><dd className="font-bold text-gold-bright mt-1">{v}</dd></div>
                ))}
              </dl>
              <p className="mt-6"><a href={isFa ? '/en/battle/carrhae' : '/battle/carrhae'} hrefLang={isFa ? 'en' : 'fa'} className="glass rounded-full px-5 py-2 inline-flex items-center min-h-11 hover:border-gold">{t.other}</a></p>
            </div>
            <figure className="glass rounded-3xl overflow-hidden hidden md:block">
              <img src={crassus.src} alt={crassus.caption[locale]} className="w-full h-80 object-cover object-top" decoding="async" />
              <figcaption className="p-3 text-xs text-ivory/60">{crassus.caption[locale]} · <a href={crassus.page} className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">{crassus.author}</a>, <a href={crassus.licenseUrl} rel="license noopener noreferrer" target="_blank" className="hover:underline">{crassus.license}</a></figcaption>
            </figure>
          </div>
        </header>

        <div className="mx-auto max-w-6xl px-4 py-12 grid grid-cols-[minmax(0,1fr)] gap-16">
          <nav aria-labelledby="toc-h" className="glass rounded-2xl p-5">
            <h2 id="toc-h" className="font-bold text-gold">{t.toc}</h2>
            <ol className="mt-3 grid sm:grid-cols-2 md:grid-cols-3 gap-x-6 text-ivory/80">
              {toc.map(([id, label]) => <li key={id}><a href={`#${id}`} className="hover:text-gold inline-flex items-center min-h-11">{label}</a></li>)}
            </ol>
          </nav>

          <section id="battle" aria-labelledby="battle-h" className="scroll-mt-24">
            <H2 id="battle">{t.battle}</H2>
            <p className="mt-2 text-ivory/70 max-w-3xl">{isFa ? 'یازده گام، از راه بیابان تا کوه‌های سیناکا. پخش کنید، یا با دکمه‌ها و کلیدهای پیکان گام‌به‌گام پیش بروید. هر گام می‌گوید روایتش قطعی، محتمل یا محل بحث است.' : 'Eleven steps, from the desert road to the Sinnaca hills. Press play, or step through with the buttons or the arrow keys. Each step says whether its account is secure, probable or disputed.'}</p>
            <div className="mt-6"><CarrhaeBattle locale={locale} sources={carrhaeSources} /></div>
            <p className="mt-3 text-sm text-ivory/60">{t.clip}{' '}
              <a href={page.clip.mp4[locale]} download className="text-gold hover:underline">MP4</a> · <a href={page.clip.webm[locale]} download className="text-gold hover:underline">WebM</a> · <a href={page.clip.gifSmall[locale]} download className="text-gold hover:underline">{isFa ? 'GIF سبک (۶۴۰ پیکسل، برای اشتراک)' : 'light GIF (640px, for sharing)'}</a> · <a href={page.clip.gif[locale]} download className="text-gold hover:underline">{isFa ? 'GIF کامل (۱۲۸۰، حدود ۸ مگابایت)' : 'full GIF (1280px, about 8 MB)'}</a>
            </p>
            {battleQuotes.map((q) => <Quote key={q.ref} q={q} />)}
          </section>

          <Reveal>
            <section id="campaign" aria-labelledby="campaign-h" className="scroll-mt-24">
              <H2 id="campaign">{t.map}</H2>
              <p className="mt-2 text-ivory/70 max-w-3xl">{isFa ? 'کراسوس از زئوگما گذشت و راه بیابان را برگزید؛ ارد خود به ارمنستان تاخت تا آرتاوازد نتواند یاری کند؛ سورنا با سواره در میان‌رودان ماند. اسیران را به مرو، در آن سوی ایران، بردند.' : 'Crassus crossed at Zeugma and chose the desert road; Orodes himself struck into Armenia so Artavasdes could not help; Surena stayed in Mesopotamia with the cavalry. The captives were taken to Merv, on the far side of Iran.'} {t.mapNote}</p>
              <div className="mt-6"><CampaignMap events={campaign.events} sources={carrhaeSources} locale={locale} label={campaign.title[locale]} view={campaign.view} places={campaign.places} stamp="when" /></div>
            </section>
          </Reveal>

          <Reveal>
            <section id="oob" aria-labelledby="oob-h" className="scroll-mt-24">
              <H2 id="oob">{t.oob}</H2>
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                {(['rome', 'parthia'] as const).map((side) => (
                  <div key={side} className="glass rounded-3xl p-5" style={{ borderTop: `4px solid ${side === 'rome' ? '#d0533f' : '#e2b453'}` }}>
                    <h3 className="text-2xl font-black">{side === 'rome' ? (isFa ? 'روم: کراسوس' : 'Rome: Crassus') : (isFa ? 'پارت: سورنا' : 'Parthia: Surena')}</h3>
                    <table className="mt-3 w-full text-sm">
                      <caption className="sr-only">{side === 'rome' ? t.rome : t.parthia}</caption>
                      <thead><tr className="text-ivory/50 text-start"><th scope="col" className="text-start py-2">{t.unit}</th><th scope="col" className="text-start py-2">{t.fig}</th><th scope="col" className="text-start py-2">{t.src}</th></tr></thead>
                      <tbody>
                        {orderOfBattle.filter((r) => r.side === side).map((r) => (
                          <tr key={r.unit.en} className="border-t border-ivory/10 align-top">
                            <th scope="row" className="py-2 pe-2 text-start font-bold">{r.unit[locale]}</th>
                            <td className="py-2 pe-2 text-gold-bright">{r.figure[locale]}{r.dispute && <span className="block text-xs text-amber-200 mt-1">⚠ {r.dispute[locale]}</span>}</td>
                            <td className="py-2 text-ivory/60 text-xs">{r.source[locale]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-ivory/60 max-w-3xl">{oobNote[locale]}</p>
              {cite(['plut-crassus', 'ir-carrhae', 'florus', 'pliny'])}
            </section>
          </Reveal>

          <Reveal>
            <section id="why" aria-labelledby="why-h" className="scroll-mt-24">
              <H2 id="why">{t.why}</H2>
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                {why.map((c) => (
                  <article key={c.id} className="glass rounded-3xl p-6">
                    <h3 className="text-xl font-black"><span aria-hidden="true" className="me-2">{c.icon}</span>{c.title[locale]}</h3>
                    <div className="mt-3"><EvidenceBadge layer="historical" locale={locale} /></div>
                    {c.evidence[locale].map((p, k) => <p key={k} className="read mt-2 text-ivory/85">{p}</p>)}
                    <div className="mt-4"><EvidenceBadge layer="philosophical" locale={locale} /> <span className="text-xs text-ivory/50">{t.reading}</span></div>
                    {c.reading[locale].map((p, k) => <p key={k} className="read mt-2 text-ivory/75">{p}</p>)}
                    {cite(c.sources)}
                  </article>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section id="aftermath" aria-labelledby="aftermath-h" className="scroll-mt-24">
              <H2 id="aftermath">{t.after}</H2>
              <ol className="mt-6 relative border-s-2 border-gold/30 ps-6 grid gap-8">
                {aftermath.map((a) => (
                  <li key={a.id} id={`after-${a.id}`} className="relative">
                    <span aria-hidden="true" className="absolute -start-[33px] top-2 w-4 h-4 rounded-full bg-gold ring-4 ring-night" />
                    <p className="text-sm text-turquoise-soft">{a.when[locale]}</p>
                    <h3 className="text-2xl font-black">{a.title[locale]}</h3>
                    {a.body[locale].map((p, k) => <p key={k} className="read mt-2 text-ivory/85">{p}</p>)}
                    {a.quote && <Quote q={a.quote} />}
                    {cite(a.sources)}
                  </li>
                ))}
              </ol>
            </section>
          </Reveal>

          <Reveal>
            <section id="lens" aria-labelledby="lens-h" className="scroll-mt-24 glass rounded-3xl p-6 md:p-8">
              <EvidenceBadge layer="philosophical" locale={locale} />
              <h2 id="lens-h" className="mt-3 text-3xl font-black text-gilded">{t.lens}: {liberty.title[locale]}</h2>
              {liberty.paras[locale].map((p, k) => <p key={k} className="read mt-3 text-ivory/85">{p}</p>)}
              <Quote q={liberty.quote} />
              {cite(liberty.sources)}
            </section>
          </Reveal>

          <Reveal>
            <section id="historiography" aria-labelledby="historiography-h" className="scroll-mt-24">
              <H2 id="historiography">{t.hist}</H2>
              {historiography[locale].map((p, k) => <p key={k} className="read mt-3 text-ivory/85 max-w-4xl">{p}</p>)}
              {cite(['plut-crassus', 'dio', 'florus', 'ir-carrhae', 'debevoise'])}
            </section>
          </Reveal>

          <Reveal>
            <section id="legends" aria-labelledby="legends-h" className="scroll-mt-24">
              <H2 id="legends">{t.legends}</H2>
              <div className="mt-6 grid md:grid-cols-3 gap-6">
                {legends.map((l) => (
                  <aside key={l.id} aria-label={l.title[locale]} className="rounded-3xl p-5 border-2 border-dashed border-amber-300/50" style={{ background: 'linear-gradient(135deg, rgba(120,72,20,.35), rgba(40,24,60,.55))' }}>
                    <p className="inline-flex items-center gap-2 rounded-full bg-amber-300/15 border border-amber-300/50 px-3 py-1 text-xs font-bold text-amber-200"><span aria-hidden="true">❦</span>{isFa ? 'افسانه یا نظریهٔ امروزی' : 'Legend or modern theory'}</p>
                    <h3 className="text-xl font-black text-amber-100 mt-3">{l.title[locale]}</h3>
                    <p className="text-sm font-bold text-turquoise-soft mt-3">{t.claim}</p>
                    {l.claim[locale].map((p, k) => <p key={k} className="read mt-1 text-ivory/85 italic">{p}</p>)}
                    <p className="text-sm font-bold text-turquoise-soft mt-3">{t.verdict}</p>
                    {l.verdict[locale].map((p, k) => <p key={k} className="read mt-1 text-ivory/85">{p}</p>)}
                    {cite(l.sources)}
                  </aside>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section id="gallery" aria-labelledby="gallery-h" className="scroll-mt-24">
              <H2 id="gallery">{t.gallery}</H2>
              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {carrhaePhotos.map((ph) => (
                  <figure key={ph.id} className="glass rounded-2xl overflow-hidden">
                    <img src={ph.src} alt={ph.caption[locale]} loading="lazy" decoding="async" className="w-full h-64 object-cover object-top" />
                    <figcaption className="p-3 text-sm text-ivory/70">
                      {ph.caption[locale]} · <a href={ph.page} className="text-gold hover:underline" rel="noopener noreferrer" target="_blank">{ph.author}</a>, {ph.licenseUrl ? <a href={ph.licenseUrl} className="hover:underline" rel="license noopener noreferrer" target="_blank">{ph.license}</a> : ph.license}
                    </figcaption>
                  </figure>
                ))}
              </div>
              <p className="mt-4 text-xs text-ivory/50">{t.photoNote}</p>
            </section>
          </Reveal>

          <section id="sources" aria-labelledby="sources-h" className="scroll-mt-24">
            <H2 id="sources">{t.bib}</H2>
            <ol className="mt-4 grid gap-3 text-sm">
              {carrhaeSources.map((s) => (
                <li key={s.id} id={`src-${s.id}`} className="glass rounded-2xl p-4 scroll-mt-24">
                  <span className="font-bold">{s.author}</span>, <em>{s.title}</em> ({s.year}){s.url && <> · <a href={s.url} className="text-gold hover:underline" rel="noopener noreferrer" target="_blank">{isFa ? 'پیوند' : 'link'}</a></>}
                  {s.note && <p className="mt-1 text-ivory/60">{s.note[locale]}</p>}
                </li>
              ))}
            </ol>
            <p className="mt-6 flex flex-wrap gap-3">
              {[[isFa ? '/king/orodes-ii' : '/en/king/orodes-ii', isFa ? 'ارد دوم، شاه روزگار حران' : 'Orodes II, king at the time of Carrhae'], [isFa ? '/king/phraates-iv' : '/en/king/phraates-iv', isFa ? 'فرهاد چهارم و بازگشت درفش‌ها' : 'Phraates IV and the return of the standards'], ['/dynasty/parthians', isFa ? 'دودمان اشکانی' : 'The Arsacid dynasty']].map(([href, label]) => (
                <a key={href} href={href} className="glass rounded-full px-5 py-2 inline-flex items-center min-h-11 hover:border-gold">{label}</a>
              ))}
            </p>
          </section>
        </div>
      </article>
    </PageTransition>
  )
}
