import type { ReactNode } from 'react'
import type { EvidenceLayer } from '../../data/research/types'
import type { BiParas, FeaturedKing, Person } from '../../data/featured/types'
import type { CommonsPhoto } from '../../data/places/types'
import type { Locale } from '../../lib/i18n'
import { Reveal } from '../Reveal'
import { EvidenceBadge } from '../cylinder/EvidenceBadge'
import { AnimatedClip } from './AnimatedClip'
import { BattleDiagram } from './BattleDiagram'
import { CampaignMap } from './CampaignMap'
import { MongolInvasion } from '../khwarazm/MongolInvasion'
import { DariusPrayer } from '../darius/DariusPrayer'
import { CarrhaeBattle } from '../carrhae/CarrhaeBattle'
import { CyrusTombReconstruction } from '../cyrus/CyrusTombReconstruction'
import { MrsEconomyChart } from '../pahlavi/MrsEconomyChart'

/** Turn `[label](href)` markers in dossier body text into gold underlined links. */
function withInlineLinks(text: string): ReactNode {
  const parts: ReactNode[] = []
  const re = /\[([^\]]+)\]\(([^)]+)\)/g
  let last = 0
  let m: RegExpExecArray | null
  let i = 0
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index))
    parts.push(<a key={i++} href={m[2]} className="font-semibold text-gold underline decoration-gold/50 underline-offset-4 hover:decoration-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">{m[1]}</a>)
    last = m.index + m[0].length
  }
  if (last < text.length) parts.push(text.slice(last))
  return parts.length ? parts : text
}

function Layer({ layer, paras, locale }: { layer: EvidenceLayer; paras: BiParas; locale: Locale }) {
  return (
    <div className="mt-5">
      <EvidenceBadge layer={layer} locale={locale} />
      {paras[locale].map((p, n) => <p key={n} className="read mt-3 text-ivory/85">{withInlineLinks(p)}</p>)}
    </div>
  )
}

type TopicLink = NonNullable<FeaturedKing['dossier'][number]['link']>

/** Wide call-out that a section points to a dedicated topic page (not an in-page jump). */
function TopicPageCard({ link, locale }: { link: TopicLink; locale: Locale }) {
  const isFa = locale === 'fa'
  const kicker = link.kicker?.[locale] ?? (isFa ? 'صفحهٔ ویژه' : 'Dedicated page')
  const open = isFa ? 'باز کردن صفحه' : 'Open page'
  return (
    <a
      href={link.href[locale]}
      className="group mt-8 flex flex-col overflow-hidden rounded-2xl border border-gold/45 bg-gradient-to-br from-lapis/55 via-lapis/35 to-[#0b1638]/80 shadow-[0_0_0_1px_rgba(217,180,90,0.12)] transition hover:border-gold hover:shadow-[0_0_28px_rgba(217,180,90,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:flex-row"
      aria-label={`${kicker}: ${link.label[locale]}. ${open}`}
    >
      {link.thumb && (
        <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-night/60 sm:aspect-auto sm:w-40 md:w-48">
          <img src={link.thumb} alt={link.thumbAlt?.[locale] ?? ''} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" loading="lazy" width={384} height={288} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/50 to-transparent sm:bg-gradient-to-l sm:from-transparent sm:to-night/20" />
        </div>
      )}
      <div className="flex flex-1 items-center gap-4 px-5 py-5 sm:px-6 sm:py-6">
        <div className="min-w-0 flex-1">
          <p className="text-[0.7rem] font-bold tracking-[0.14em] text-gold uppercase">{kicker}</p>
          <p className="mt-1.5 text-lg font-black leading-snug text-gold-bright sm:text-xl">{link.label[locale]}</p>
          {link.blurb && <p className="mt-2 text-sm leading-relaxed text-ivory/75">{link.blurb[locale]}</p>}
        </div>
        <span
          aria-hidden="true"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-gold/10 text-xl text-gold-bright transition group-hover:bg-gold/25 group-hover:translate-x-0 rtl:group-hover:-translate-x-0.5 ltr:group-hover:translate-x-0.5"
        >
          {isFa ? '←' : '→'}
        </span>
      </div>
    </a>
  )
}

function Credit({ ph }: { ph: CommonsPhoto }) {
  return <><a href={ph.page} className="text-gold hover:underline" rel="noopener noreferrer" target="_blank">{ph.author}</a>, {ph.licenseUrl ? <a href={ph.licenseUrl} className="hover:underline" rel="license noopener noreferrer" target="_blank">{ph.license}</a> : ph.license}</>
}

const fateLabel: Record<Person['fateKind'], { fa: string; en: string; cls: string }> = {
  natural: { fa: 'درگذشت طبیعی', en: 'Natural death', cls: 'border-turquoise-soft/50 text-turquoise-soft' },
  killed: { fa: 'کشته در زندان یا بازداشت', en: 'Killed in prison or custody', cls: 'border-red-400/60 text-red-300' },
  suicide: { fa: 'خودکشی', en: 'Suicide', cls: 'border-amber-300/60 text-amber-200' },
  exile: { fa: 'تبعید', en: 'Exile', cls: 'border-sky-300/50 text-sky-200' },
  dismissed: { fa: 'برکناری', en: 'Dismissed', cls: 'border-ivory/40 text-ivory/70' },
}

function PersonCard({ p, photo, author, locale }: { p: Person; photo?: CommonsPhoto; author: (id: string) => string; locale: Locale }) {
  const f = fateLabel[p.fateKind]
  return (
    <article id={`person-${p.id}`} className="glass rounded-3xl overflow-hidden flex flex-col scroll-mt-24">
      {photo
        ? <img src={photo.src} alt={photo.caption[locale]} loading="lazy" decoding="async" className="w-full aspect-[4/5] object-cover object-top bg-black/30" />
        : <div aria-hidden="true" className="w-full aspect-[4/5] grid place-items-center bg-gradient-to-b from-gold/10 to-black/30 text-7xl font-black text-gold/60">{p.name[locale].slice(0, 1)}</div>}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-black text-gold-bright leading-[1.5]">{p.name[locale]}</h3>
        <p className="text-xs text-ivory/55 mt-1">{p.years[locale]}</p>
        <p className="text-sm text-turquoise-soft mt-2 leading-7">{p.role[locale]}</p>
        <p className="read mt-3 text-ivory/85 text-[0.95rem]">{p.bio[locale]}</p>
        <div className="mt-auto pt-4">
          <p className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${f.cls}`}>{f[locale]}</p>
          <p className="mt-2 text-sm text-ivory/75 leading-7">{p.fate[locale]}</p>
          <p className="mt-3 text-xs text-ivory/45 leading-6">
            {locale === 'fa' ? 'منابع' : 'Sources'}: {p.sources.map((id, k) => <span key={id}>{k > 0 && ' · '}<a href={`#src-${id}`} className="text-gold hover:underline">{author(id)}</a></span>)}
            {photo && <> · {locale === 'fa' ? 'عکس' : 'Photo'}: <Credit ph={photo} /></>}
          </p>
        </div>
      </div>
    </article>
  )
}

/** Full-width page header for a featured king with a `hero` portrait: replaces the standard king header. */
export function FeaturedHero({ king, locale, crumbs, facts, accent, name, kicker }: { king: FeaturedKing; locale: Locale; crumbs: ReactNode; facts: ReactNode; accent: string; name: string; kicker: string }) {
  const ph = king.hero ? king.photos?.find((p) => p.id === king.hero) : undefined
  return (
    <header lang={locale} dir={locale === 'fa' ? 'rtl' : 'ltr'} className="relative overflow-hidden border-b border-gold/20">
      <div className="absolute inset-0" style={{ background: `radial-gradient(900px 520px at 75% 20%, ${accent}55, transparent 70%), linear-gradient(180deg, transparent 60%, rgb(5 8 20 / 0.9))` }} />
      <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-12 md:pt-14 md:pb-16">
        {crumbs}
        <div className="mt-6 grid gap-8 md:gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] items-center">
          <div className="order-2 md:order-1">
            <p className="text-turquoise-soft tracking-wide">{kicker}</p>
            <h1 className="text-5xl md:text-7xl font-black mt-3 text-gilded leading-[1.25]">{name}</h1>
            <p className="text-2xl md:text-3xl font-bold text-gold-bright/90 mt-4 leading-[1.5] first-letter:uppercase">{king.title[locale].split(/[؛:]/).slice(1).join(':').trim() || king.title[locale]}</p>
            <p className="read mt-6 text-ivory/85 read-lede">{king.lede[locale]}</p>
          </div>
          {ph && (
            <figure className="order-1 md:order-2 mx-auto w-full max-w-sm md:max-w-none">
              <div className="rounded-[2rem] p-1.5 bg-gradient-to-b from-gold/70 via-gold/20 to-gold/60 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
                <img src={ph.src} alt={ph.caption[locale]} decoding="async" fetchPriority="high" className="w-full aspect-[4/5] object-cover object-top rounded-[1.7rem]" />
              </div>
              <figcaption className="mt-3 text-xs text-ivory/65 leading-6 text-center">{ph.caption[locale]} · <Credit ph={ph} /></figcaption>
            </figure>
          )}
        </div>
        {facts}
      </div>
    </header>
  )
}

/** Extended dossier rendered inside a king page when the ruler has a `featuredKings` entry. */
export function FeaturedDossier({ king, locale }: { king: FeaturedKing; locale: Locale }) {
  const isFa = locale === 'fa'
  const t = isFa
    ? { kicker: 'پروندهٔ ویژه', layers: 'سه لایهٔ جدا', dossier: 'پرونده', synthesis: 'جمع‌بندی', bib: 'کتاب‌شناسی', sources: 'منابع', quoteNote: 'ترجمهٔ انگلیسی منتشرشده؛ برگردان فارسی از ماست.', quoteNoteFr: 'ترجمهٔ فرانسوی منتشرشده؛ برگردان فارسی از ماست.', photoNote: 'همهٔ عکس‌ها از ویکی‌انبار (Wikimedia Commons) است؛ پروانه و پدیدآورنده در صفحهٔ هر پرونده بررسی شده است.',
        layersNote: 'هر بخش سه لایه دارد: «شواهد تاریخی» فقط آنچه منابع می‌گویند؛ «تفسیر فلسفی» خوانش ما با معیار مالکیت و آزادی؛ «معنای فرهنگی امروز». نقل‌قول‌ها فقط از ترجمه‌های منتشرشده و با ارجاع است.' }
    : { kicker: 'Featured dossier', layers: 'Three separate layers', dossier: 'Dossier', synthesis: 'Synthesis', bib: 'Bibliography', sources: 'Sources', quoteNote: '', quoteNoteFr: '', photoNote: 'All photos are from Wikimedia Commons; licence and author were checked on each file page.',
        layersNote: 'Each section has three layers: “Historical evidence” is only what the sources say; “Philosophical interpretation” is our reading by the standard of property and liberty; “Modern cultural meaning”. Quotations come only from published translations, with references.' }
  const photo = (id: string) => king.photos?.find((p) => p.id === id)
  const author = (id: string) => king.sources.find((x) => x.id === id)?.author ?? id
  const c = king.campaign
  const hero = king.hero ? photo(king.hero) : undefined
  const top = !!hero
  const toc = [...(king.slug === 'jalal-al-din' ? [['mongol-invasion', locale === 'fa' ? 'یورش مغول' : 'The Mongol invasion']] : []), ['map', king.mapTitle[locale]], ...(c ? [[c.id, c.title[locale]]] : []), ['layers', t.layers], ...king.dossier.map((d) => [d.id, d.title[locale]]), ['synthesis', t.synthesis], ['bibliography', t.bib]]

  return (
    <div lang={locale} dir={isFa ? 'rtl' : 'ltr'} className="space-y-0">
      <section aria-labelledby="fk-h">
        {top ? (
          <h2 id="fk-h" className="text-3xl md:text-4xl font-black text-gilded leading-[1.3]">{t.kicker}</h2>
        ) : (<>
        <div>
          <div>
            <p className="text-sm text-turquoise-soft">{t.kicker}</p>
            <h2 id="fk-h" className="text-3xl md:text-5xl font-black text-gilded leading-[1.3] mt-2">{king.title[locale]}</h2>
            <p className="read mt-5 text-ivory/80 read-lede">{king.lede[locale]}</p>
          </div>
        </div>
        <dl className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
          {king.stats.map((s) => (
            <div key={s.n.en + s.l.en} className="glass rounded-2xl p-4 flex flex-col-reverse">
              <dt className="text-xs text-ivory/60 leading-6">{s.l[locale]}</dt>
              <dd className="text-3xl font-black text-gilded">{s.n[locale]}</dd>
            </div>
          ))}
        </dl>
        </>)}
        <nav aria-label={isFa ? 'بخش‌های پرونده' : 'Dossier contents'} className="mt-8">
          <ul className="flex flex-wrap gap-2 text-sm">
            {toc.map(([id, label]) => <li key={id}><a href={`#${id}`} className="glass rounded-full px-4 py-2 inline-flex min-h-11 items-center hover:border-gold">{label}</a></li>)}
          </ul>
        </nav>
      </section>

      {king.slug === 'jalal-al-din' && <MongolInvasion locale={locale} />}

      <section id="map" className="scroll-mt-24 mt-14">
        <h2 className="text-3xl font-black text-gilded mb-4">{king.mapTitle[locale]}</h2>
        <CampaignMap events={king.events} sources={king.sources} locale={locale} label={king.mapTitle[locale]} view={king.lifeMap?.view} places={king.lifeMap?.places} />
      </section>

      {c && (
        <section id={c.id} className="scroll-mt-24 mt-16">
          <h2 className="text-3xl font-black text-gilded mb-4 leading-[1.4]">{c.title[locale]}</h2>
          {c.intro[locale].map((p, n) => <p key={n} className="read mt-3 text-ivory/85">{p}</p>)}
          <div className="mt-6">
            <CampaignMap events={c.events} sources={king.sources} locale={locale} label={c.title[locale]} view={c.view} places={c.places} stamp="when" />
          </div>
          {c.clip && <AnimatedClip clip={c.clip} caption={{ fa: 'همین نقشه به صورت کلیپ برای هم‌رسانی.', en: 'The same map as a shareable clip.' }} locale={locale} />}
          {c.battles?.map((b) => <div key={b.id} id={`battle-${b.id}`} className="mt-10 scroll-mt-24"><BattleDiagram battle={b} sources={king.sources} locale={locale} /></div>)}
        </section>
      )}

      <section id="layers" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-black text-gilded">{t.layers}</h2>
        <p className="read mt-3 text-ivory/75">{t.layersNote}</p>
        <p className="mt-3 flex flex-wrap gap-2"><EvidenceBadge layer="historical" locale={locale} /><EvidenceBadge layer="philosophical" locale={locale} /><EvidenceBadge layer="modern" locale={locale} /></p>
      </section>

      {king.dossier.map((s, n) => (
        <Reveal key={s.id}>
          {king.slug === 'darius-i' && n === Math.floor(king.dossier.length / 2) && <DariusPrayer locale={locale} />}
          <section id={s.id} className="scroll-mt-24 mt-16">
            <p className="text-sm text-turquoise-soft">{t.dossier} · {isFa ? (n + 1).toLocaleString('fa-IR') : n + 1}</p>
            <h2 className="text-3xl font-black text-gilded mt-1 leading-[1.4]">{s.title[locale]}</h2>
            <Layer layer="historical" paras={s.historical} locale={locale} />
            {s.timeline && (
              <ol className="mt-6 border-gold/30 space-y-4" style={{ borderInlineStartWidth: 2, borderInlineStartStyle: 'solid', paddingInlineStart: '1.25rem' }}>
                {s.timeline.map((x) => (
                  <li key={x.when.en} className="relative">
                    <span aria-hidden="true" className="absolute top-2 size-3 rounded-full bg-gold" style={{ insetInlineStart: '-1.65rem' }} />
                    <p className="text-sm font-bold text-gold-bright">{x.when[locale]}</p>
                    <p className="read text-ivory/85">{x.text[locale]}</p>
                  </li>
                ))}
              </ol>
            )}
            {s.quotes?.map((q) => (
              <blockquote key={q.text} className="read border-gold/40 px-4 py-3 my-4 text-ivory/90" style={{ borderInlineStartWidth: 4, borderInlineStartStyle: 'solid' }}>
                <p className="font-serif" dir="ltr" lang={q.lang ?? 'en'}>{q.text}</p>
                {isFa && <p className="mt-2" dir="rtl" lang="fa">{q.fa}</p>}
                <footer className="mt-2 text-xs text-ivory/50">{q.ref} · <a href={`#src-${q.source}`} className="text-gold hover:underline">{author(q.source)}</a>{isFa && ` · ${q.lang === 'fr' ? t.quoteNoteFr : t.quoteNote}`}</footer>
              </blockquote>
            ))}
            {s.embed === 'carrhae' && <div className="mt-8"><CarrhaeBattle locale={locale} sources={king.sources} id={`${s.id}-battle`} /></div>}
            {s.embed === 'cyrus-tomb' && <div className="mt-8"><CyrusTombReconstruction locale={locale} /></div>}
            {s.embed === 'mrs-economy' && <div className="mt-8"><MrsEconomyChart locale={locale} /></div>}
            {s.clip && !s.embed && <AnimatedClip clip={s.clip.media} caption={s.clip.caption} locale={locale} />}
            {s.link && <TopicPageCard link={s.link} locale={locale} />}
            {s.people && (
              <div className="mt-8 grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {s.people.map((p) => <PersonCard key={p.id} p={p} photo={p.photo ? photo(p.photo) : undefined} author={author} locale={locale} />)}
              </div>
            )}
            {s.photos && (
              <div className={`mt-6 grid gap-4 ${s.wide ? '' : 'sm:grid-cols-2'}`}>
                {s.photos.map(photo).filter((x) => x !== undefined).map((ph) => (
                  <figure key={ph.id} className="glass rounded-2xl overflow-hidden">
                    <img src={ph.src} alt={ph.caption[locale]} loading="lazy" decoding="async" className={s.wide ? 'w-full max-h-[40rem] object-contain bg-black/40' : 'w-full h-64 object-cover object-top'} />
                    <figcaption className="p-3 text-sm text-ivory/70">
                      {ph.caption[locale]} · <Credit ph={ph} />
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
            {s.folk && (
              <aside aria-label={s.folk.title[locale]} className="folk mt-8 rounded-3xl p-5 md:p-7 border-2 border-dashed border-amber-300/50" style={{ background: 'linear-gradient(135deg, rgba(120,72,20,.35), rgba(40,24,60,.55))' }}>
                <p className="inline-flex items-center gap-2 rounded-full bg-amber-300/15 border border-amber-300/50 px-3 py-1 text-sm font-bold text-amber-200">
                  <span aria-hidden="true">❦</span>{isFa ? 'روایت مردمی · در منابع باستانی نیامده است' : 'Popular tradition · not in the ancient sources'}
                </p>
                <h3 className="text-2xl font-black text-amber-100 mt-3 leading-[1.5]">{s.folk.title[locale]}</h3>
                {s.folk.story[locale].map((p, k) => <p key={k} className="read mt-3 text-ivory/90 italic">{p}</p>)}
                <div className="mt-5 rounded-2xl bg-black/25 p-4">
                  <p className="text-sm font-bold text-turquoise-soft">{isFa ? 'این روایت از کجا آمده؟' : 'Where does this story come from?'}</p>
                  {s.folk.origin[locale].map((p, k) => <p key={k} className="read mt-2 text-ivory/80">{p}</p>)}
                  <p className="mt-3 text-xs text-ivory/50">{t.sources}: {s.folk.sources.map((id, k) => <span key={id}>{k > 0 && ' · '}<a href={`#src-${id}`} className="text-gold hover:underline">{author(id)}</a></span>)}</p>
                </div>
              </aside>
            )}
            <Layer layer="philosophical" paras={s.interpretation} locale={locale} />
            <Layer layer="modern" paras={s.modern} locale={locale} />
            <p className="mt-4 text-xs text-ivory/50 leading-6">
              {t.sources}: {s.sources.map((id, k) => <span key={id}>{k > 0 && ' · '}<a href={`#src-${id}`} className="text-gold hover:underline">{author(id)}</a></span>)}
            </p>
          </section>
        </Reveal>
      ))}

      <section id="synthesis" className="scroll-mt-24 mt-20 glass rounded-3xl p-6 md:p-10 border-gold/30">
        <EvidenceBadge layer="philosophical" locale={locale} />
        <h2 className="text-3xl md:text-4xl font-black text-gilded mt-4 leading-[1.4]">{king.synthesis.title[locale]}</h2>
        {king.synthesis.paras[locale].map((p, n) => <p key={n} className={`read mt-5 text-ivory/90 ${n === 0 ? 'read-lede' : ''}`}>{p}</p>)}
      </section>

      <section id="bibliography" className="scroll-mt-24 mt-16">
        <h2 className="text-2xl font-black text-gilded">{t.bib}</h2>
        <ol className="mt-4 space-y-3 text-sm leading-7 text-ivory/75" dir="ltr">
          {king.sources.map((s) => (
            <li key={s.id} id={`src-${s.id}`} className="scroll-mt-24 text-left">
              {s.author}, <em>{s.title}</em> ({s.year}).{' '}
              {s.url && <a href={s.url} className="text-gold hover:underline break-all" rel="noopener noreferrer" target="_blank">{s.url}</a>}
              {s.note && <span className="block text-ivory/55" dir={isFa ? 'rtl' : 'ltr'}>{s.note[locale]}</span>}
            </li>
          ))}
        </ol>
        {king.photos && <p className="mt-4 text-xs text-ivory/50">{t.photoNote}</p>}
        <p className="mt-8 flex flex-wrap gap-2">
          {king.related.map((r) => <a key={r.href.fa} href={r.href[locale]} className="glass rounded-full px-5 py-2 inline-flex items-center min-h-11 hover:border-gold">{r.label[locale]}</a>)}
        </p>
      </section>
    </div>
  )
}
