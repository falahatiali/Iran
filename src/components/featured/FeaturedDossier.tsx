import type { EvidenceLayer } from '../../data/research/types'
import type { BiParas, FeaturedKing } from '../../data/featured/types'
import type { Locale } from '../../lib/i18n'
import { Reveal } from '../Reveal'
import { EvidenceBadge } from '../cylinder/EvidenceBadge'
import { CampaignMap } from './CampaignMap'

function Layer({ layer, paras, locale }: { layer: EvidenceLayer; paras: BiParas; locale: Locale }) {
  return (
    <div className="mt-5">
      <EvidenceBadge layer={layer} locale={locale} />
      {paras[locale].map((p, n) => <p key={n} className="mt-3 leading-9 text-ivory/85">{p}</p>)}
    </div>
  )
}

/** Extended dossier rendered inside a king page when the ruler has a `featuredKings` entry. */
export function FeaturedDossier({ king, locale }: { king: FeaturedKing; locale: Locale }) {
  const isFa = locale === 'fa'
  const t = isFa
    ? { kicker: 'پروندهٔ ویژه', layers: 'سه لایهٔ جدا', dossier: 'پرونده', synthesis: 'جمع‌بندی', bib: 'کتاب‌شناسی', sources: 'منابع', quoteNote: 'ترجمهٔ انگلیسی منتشرشده؛ برگردان فارسی از ماست.',
        layersNote: 'هر بخش سه لایه دارد: «شواهد تاریخی» فقط آنچه منابع می‌گویند؛ «تفسیر فلسفی» خوانش ما با معیار مالکیت و آزادی؛ «معنای فرهنگی امروز». نقل‌قول‌ها فقط از ترجمه‌های منتشرشده و با ارجاع است.' }
    : { kicker: 'Featured dossier', layers: 'Three separate layers', dossier: 'Dossier', synthesis: 'Synthesis', bib: 'Bibliography', sources: 'Sources', quoteNote: '',
        layersNote: 'Each section has three layers: “Historical evidence” is only what the sources say; “Philosophical interpretation” is our reading by the standard of property and liberty; “Modern cultural meaning”. Quotations come only from published translations, with references.' }
  const author = (id: string) => king.sources.find((x) => x.id === id)?.author ?? id
  const toc = [['map', king.mapTitle[locale]], ['layers', t.layers], ...king.dossier.map((d) => [d.id, d.title[locale]]), ['synthesis', t.synthesis], ['bibliography', t.bib]]

  return (
    <div lang={locale} dir={isFa ? 'rtl' : 'ltr'} className="space-y-0">
      <section aria-labelledby="fk-h">
        <p className="text-sm text-turquoise-soft">{t.kicker}</p>
        <h2 id="fk-h" className="text-3xl md:text-5xl font-black text-gilded leading-[1.3] mt-2">{king.title[locale]}</h2>
        <p className="mt-5 text-lg leading-9 text-ivory/80">{king.lede[locale]}</p>
        <dl className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
          {king.stats.map((s) => (
            <div key={s.n.en + s.l.en} className="glass rounded-2xl p-4 flex flex-col-reverse">
              <dt className="text-xs text-ivory/60 leading-6">{s.l[locale]}</dt>
              <dd className="text-3xl font-black text-gilded">{s.n[locale]}</dd>
            </div>
          ))}
        </dl>
        <nav aria-label={isFa ? 'بخش‌های پرونده' : 'Dossier contents'} className="mt-8">
          <ul className="flex flex-wrap gap-2 text-sm">
            {toc.map(([id, label]) => <li key={id}><a href={`#${id}`} className="glass rounded-full px-4 py-2 inline-flex min-h-11 items-center hover:border-gold">{label}</a></li>)}
          </ul>
        </nav>
      </section>

      <section id="map" className="scroll-mt-24 mt-14">
        <h2 className="text-3xl font-black text-gilded mb-4">{king.mapTitle[locale]}</h2>
        <CampaignMap events={king.events} sources={king.sources} locale={locale} label={king.mapTitle[locale]} />
      </section>

      <section id="layers" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-black text-gilded">{t.layers}</h2>
        <p className="mt-3 leading-8 text-ivory/75">{t.layersNote}</p>
        <p className="mt-3 flex flex-wrap gap-2"><EvidenceBadge layer="historical" locale={locale} /><EvidenceBadge layer="philosophical" locale={locale} /><EvidenceBadge layer="modern" locale={locale} /></p>
      </section>

      {king.dossier.map((s, n) => (
        <Reveal key={s.id}>
          <section id={s.id} className="scroll-mt-24 mt-16">
            <p className="text-sm text-turquoise-soft">{t.dossier} · {isFa ? (n + 1).toLocaleString('fa-IR') : n + 1}</p>
            <h2 className="text-3xl font-black text-gilded mt-1 leading-[1.4]">{s.title[locale]}</h2>
            <Layer layer="historical" paras={s.historical} locale={locale} />
            {s.quotes?.map((q) => (
              <blockquote key={q.text} className="border-gold/40 px-4 py-3 my-4 text-ivory/90 leading-8" style={{ borderInlineStartWidth: 4, borderInlineStartStyle: 'solid' }}>
                <p className="font-serif" dir="ltr" lang="en">{q.text}</p>
                {isFa && <p className="mt-2" dir="rtl" lang="fa">{q.fa}</p>}
                <footer className="mt-2 text-xs text-ivory/50">{q.ref} · <a href={`#src-${q.source}`} className="text-gold hover:underline">{author(q.source)}</a>{isFa && ` · ${t.quoteNote}`}</footer>
              </blockquote>
            ))}
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
        {king.synthesis.paras[locale].map((p, n) => <p key={n} className={`mt-5 leading-9 text-ivory/90 ${n === 0 ? 'text-lg' : ''}`}>{p}</p>)}
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
        <p className="mt-8 flex flex-wrap gap-2">
          {king.related.map((r) => <a key={r.href.fa} href={r.href[locale]} className="glass rounded-full px-5 py-2 inline-flex items-center min-h-11 hover:border-gold">{r.label[locale]}</a>)}
        </p>
      </section>
    </div>
  )
}
