import type { EvidenceLayer } from '../../data/research/types'
import type { Locale } from '../../lib/i18n'
import { altDariusPath } from '../../lib/i18n'
import { pageCitation } from '../../lib/cite'
import { dariusEvents, dariusSources, dossier, synthesis } from '../../data/darius'
import type { BiParas } from '../../data/darius'
import { PageTransition, Reveal } from '../Reveal'
import { Divider } from '../Ornament'
import { CiteButton } from '../CiteButton'
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

const STATS = [
  { n: { fa: '۱۹', en: '19' }, l: { fa: 'نبرد در «یک سال» (به ادعای بیستون)', en: 'battles in “one year” (Behistun’s claim)' } },
  { n: { fa: '~۳۰', en: '~30' }, l: { fa: 'سرزمین در فهرست نقش‌رستم', en: 'lands in the Naqsh-e Rostam list' } },
  { n: { fa: '۱۱۱', en: '111' }, l: { fa: 'منزل در راه شاهی سارد–شوش', en: 'stations on the Sardis–Susa road' } },
  { n: { fa: '۳۶', en: '36' }, l: { fa: 'سال پادشاهی (۵۲۲–۴۸۶ پ.م.)', en: 'years of reign (522–486 BCE)' } },
]

export function DariusPage({ locale }: { locale: Locale }) {
  const isFa = locale === 'fa'
  const t = isFa
    ? {
        kicker: 'پروندهٔ ویژه · ۵۲۲–۴۸۶ پ.م.',
        title: 'داریوش بزرگ؛ شمشیر، قرارداد و مالکیت',
        lede: 'داریوش یکم با کودتا و نوزده نبرد به تخت رسید و سپس بزرگ‌ترین نظم اداری جهان باستان را ساخت: خراج معین، سکهٔ شاهی، راه‌ها، بایگانی‌ها و احترام به قانون‌های محلی. اینجا جنگ‌ها و ساخته‌هایش را روی نقشهٔ متحرک دنبال کنید و سپس دوران او را با عینک حقوق مالکیت و آزادی فردی بسنجید، با شواهد تاریخی، تفسیر ما و معنای امروز در سه لایهٔ جدا.',
        alt: 'English', crumbs: 'داریوش بزرگ', map: 'نقشهٔ متحرک: جنگ‌ها و ساخته‌ها', layers: 'سه لایهٔ جدا', dossier: 'پرونده', synthesis: 'جمع‌بندی', bib: 'کتاب‌شناسی',
        layersNote: 'هر بخش سه لایه دارد: «شواهد تاریخی» فقط آنچه منابع می‌گویند؛ «تفسیر فلسفی» خوانش ما با معیار مالکیت و آزادی؛ «معنای فرهنگی امروز». نقل‌قول‌ها فقط از ترجمه‌های منتشرشده و با ارجاع است.',
        citePage: 'ارجاع به این صفحه', copied: 'کپی شد', quoteNote: 'ترجمهٔ انگلیسی منتشرشده؛ برگردان فارسی از ماست.', see: 'بیشتر: بایگانی تخت‌جمشید', cyl: 'استوانهٔ کوروش',
      }
    : {
        kicker: 'Special dossier · 522–486 BCE',
        title: 'Darius the Great: sword, contract and property',
        lede: 'Darius I came to the throne by a coup and nineteen battles, then built the largest administrative order of the ancient world: fixed tribute, royal coinage, roads, archives and respect for local law. Follow his wars and works on the animated map, then weigh his reign through the lens of property rights and individual liberty — historical evidence, our interpretation and modern meaning kept in three separate layers.',
        alt: 'فارسی', crumbs: 'Darius the Great', map: 'Animated map: wars and works', layers: 'Three separate layers', dossier: 'Dossier', synthesis: 'Synthesis', bib: 'Bibliography',
        layersNote: 'Each section has three layers: “Historical evidence” is only what the sources say; “Philosophical interpretation” is our reading by the standard of property and liberty; “Modern cultural meaning”. Quotations come only from published translations, with references.',
        citePage: 'Cite this page', copied: 'Copied', quoteNote: 'Published English translation; the Persian rendering is ours.', see: 'More: the Persepolis archives', cyl: 'The Cyrus Cylinder',
      }
  const path = isFa ? '/darius' : '/en/darius'
  const cite = pageCitation({ locale, titleFa: 'داریوش بزرگ؛ شمشیر، قرارداد و مالکیت', titleEn: 'Darius the Great: sword, contract and property', path })

  return (
    <PageTransition>
      <div className="mx-auto max-w-6xl px-4 py-14" lang={locale} dir={isFa ? 'rtl' : 'ltr'}>
        <nav aria-label={isFa ? 'مسیر صفحه' : 'Breadcrumb'} className="text-sm text-ivory/60 mb-6">
          <a href={isFa ? '/' : '/'} className="hover:text-gold inline-block py-2 min-h-11">{isFa ? 'خانه' : 'Home'}</a>
          <span className="text-gold/50 mx-2" aria-hidden="true">{isFa ? '‹' : '/'}</span>
          <span aria-current="page">{t.crumbs}</span>
        </nav>
        <div className="max-w-4xl">
          <p className="text-turquoise-soft tracking-wide text-sm">{t.kicker}</p>
          <h1 className="text-4xl md:text-6xl font-black text-gilded leading-[1.25] mt-3">{t.title}</h1>
          <p className="mt-6 text-lg leading-9 text-ivory/80">{t.lede}</p>
          <p className="mt-4 flex flex-wrap gap-2">
            <a href={altDariusPath(locale)} hrefLang={isFa ? 'en' : 'fa'} className="glass rounded-full px-5 py-2 inline-flex items-center min-h-11 hover:border-gold">{t.alt}</a>
            <CiteButton text={cite} label={t.citePage} copiedLabel={t.copied} />
          </p>
        </div>
        <dl className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
          {STATS.map((s) => (
            <div key={s.n.en} className="glass rounded-2xl p-4">
              <dt className="text-xs text-ivory/60 leading-6 order-2">{s.l[locale]}</dt>
              <dd className="text-3xl font-black text-gilded">{s.n[locale]}</dd>
            </div>
          ))}
        </dl>
        <Divider />

        <nav aria-label={isFa ? 'بخش‌های صفحه' : 'On this page'} className="mb-12">
          <ul className="flex flex-wrap gap-2 text-sm">
            {[['map', t.map], ['layers', t.layers], ...dossier.map((d) => [d.id, d.title[locale]]), ['synthesis', t.synthesis], ['bibliography', t.bib]].map(([id, label]) => (
              <li key={id}><a href={`#${id}`} className="glass rounded-full px-4 py-2 inline-flex min-h-11 items-center hover:border-gold">{label}</a></li>
            ))}
          </ul>
        </nav>

        <section id="map" className="scroll-mt-24">
          <h2 className="text-3xl font-black text-gilded mb-4">{t.map}</h2>
          <CampaignMap events={dariusEvents} locale={locale} />
        </section>

        <section id="layers" className="scroll-mt-24 mt-16 max-w-4xl">
          <h2 className="text-2xl font-black text-gilded">{t.layers}</h2>
          <p className="mt-3 leading-8 text-ivory/75">{t.layersNote}</p>
          <p className="mt-3 flex flex-wrap gap-2">
            <EvidenceBadge layer="historical" locale={locale} /><EvidenceBadge layer="philosophical" locale={locale} /><EvidenceBadge layer="modern" locale={locale} />
          </p>
        </section>

        <div className="max-w-4xl">
          {dossier.map((s, n) => (
            <Reveal key={s.id}>
              <section id={s.id} className="scroll-mt-24 mt-16">
                <p className="text-sm text-turquoise-soft">{t.dossier} · {isFa ? (n + 1).toLocaleString('fa-IR') : n + 1}</p>
                <h2 className="text-3xl font-black text-gilded mt-1 leading-[1.4]">{s.title[locale]}</h2>
                <Layer layer="historical" paras={s.historical} locale={locale} />
                {s.quotes?.map((q) => (
                  <blockquote key={q.text} className="border-gold/40 px-4 py-3 my-4 text-ivory/90 leading-8" style={{ borderInlineStartWidth: 4, borderInlineStartStyle: 'solid' }}>
                    <p className="font-serif" dir="ltr" lang="en">{q.text}</p>
                    {isFa && <p className="mt-2" dir="rtl" lang="fa">{q.fa}</p>}
                    <footer className="mt-2 text-xs text-ivory/50">{q.ref} · <a href={`#src-${q.source}`} className="text-gold hover:underline">{dariusSources.find((x) => x.id === q.source)?.author}</a>{isFa && ` · ${t.quoteNote}`}</footer>
                  </blockquote>
                ))}
                <Layer layer="philosophical" paras={s.interpretation} locale={locale} />
                <Layer layer="modern" paras={s.modern} locale={locale} />
                <p className="mt-4 text-xs text-ivory/50 leading-6">
                  {isFa ? 'منابع' : 'Sources'}: {s.sources.map((id, k) => <span key={id}>{k > 0 && ' · '}<a href={`#src-${id}`} className="text-gold hover:underline">{dariusSources.find((x) => x.id === id)?.author}</a></span>)}
                </p>
              </section>
            </Reveal>
          ))}

          <section id="synthesis" className="scroll-mt-24 mt-20 glass rounded-3xl p-6 md:p-10 border-gold/30">
            <EvidenceBadge layer="philosophical" locale={locale} />
            <h2 className="text-3xl md:text-4xl font-black text-gilded mt-4 leading-[1.4]">{synthesis.title[locale]}</h2>
            {synthesis.paras[locale].map((p, n) => <p key={n} className={`mt-5 leading-9 text-ivory/90 ${n === 0 ? 'text-lg' : ''}`}>{p}</p>)}
          </section>

          <section id="bibliography" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl font-black text-gilded">{t.bib}</h2>
            <ol className="mt-4 space-y-3 text-sm leading-7 text-ivory/75" dir="ltr">
              {dariusSources.map((s) => (
                <li key={s.id} id={`src-${s.id}`} className="scroll-mt-24">
                  {s.author}, <em>{s.title}</em> ({s.year}).{' '}
                  {s.url && <a href={s.url} className="text-gold hover:underline break-all" rel="noopener noreferrer" target="_blank">{s.url}</a>}
                  {s.note && <span className="block text-ivory/55" dir={isFa ? 'rtl' : 'ltr'}>{s.note[locale]}</span>}
                </li>
              ))}
            </ol>
            <p className="mt-8 flex flex-wrap gap-2">
              <a href={isFa ? '/archives' : '/en/archives'} className="glass rounded-full px-5 py-2 inline-flex items-center min-h-11 hover:border-gold">{t.see}</a>
              <a href={isFa ? '/cylinder' : '/en/cylinder'} className="glass rounded-full px-5 py-2 inline-flex items-center min-h-11 hover:border-gold">{t.cyl}</a>
              {isFa && <a href="/king/darius-i" className="glass rounded-full px-5 py-2 inline-flex items-center min-h-11 hover:border-gold">کارت شاه: داریوش بزرگ</a>}
            </p>
          </section>
        </div>
      </div>
    </PageTransition>
  )
}
