import { Link } from '@tanstack/react-router'
import { useEffect } from 'react'
import type { ArchivesProject } from '../../server/db/research'
import type { EvidenceLayer } from '../../data/research/types'
import type { Locale } from '../../lib/i18n'
import { altArchivesPath } from '../../lib/i18n'
import { formatBoth, pageCitation } from '../../lib/cite'
import { PageTransition, Reveal } from '../Reveal'
import { Divider } from '../Ornament'
import { EvidenceBadge } from '../cylinder/EvidenceBadge'
import { CiteButton } from '../CiteButton'
import { RationExplorer } from './RationExplorer'

export function ArchivesPage({ locale, data }: { locale: Locale; data: ArchivesProject }) {
  const isFa = locale === 'fa'
  const pf = data.artifacts.find((a) => a.slug === 'persepolis-fortification')
  const pt = data.artifacts.find((a) => a.slug === 'persepolis-treasury')
  const claims = (layer: EvidenceLayer) => data.claims.filter((c) => c.evidenceLayer === layer && c.locale === locale)
  const t = isFa
    ? {
        kicker: 'اقتصاد هخامنشی · بارو و خزانه',
        title: 'بایگانی بارو و خزانهٔ تخت‌جمشید',
        lede: 'الواح گلی ادارهٔ شاهی در پارسِ داریوش و خشایارشا: جیره، سفر، کار زنان و کودکان، مالیات جنسی، و نقره به‌جای توشه. هر ادعا منبع دارد. تفسیر آزادی/مالکیت برچسب جدا دارد و به هخامنشیان نسبت داده نمی‌شود.',
        crumbs: 'بایگانی تخت‌جمشید',
        alt: 'English',
        layers: 'سه لایهٔ جدا',
        discover: 'کشف و زبان‌ها',
        explorer: 'کاوشگر جیره',
        labor: 'کار، زن و کودک',
        travel: 'جیرهٔ سفر',
        tax: 'مالیات و اقتصاد نهادی',
        treasury: 'خزانه',
        philosophy: 'پرسش فلسفی (تفسیر ما)',
        meaning: 'معنای فرهنگی امروز',
        bib: 'کتاب‌شناسی',
        related: 'خواندن بیشتر',
        citePage: 'استناد به این صفحه',
        copied: 'کپی شد',
      }
    : {
        kicker: 'Achaemenid economy · Fortification & Treasury',
        title: 'The Persepolis Fortification and Treasury Archives',
        lede: 'Clay tablets of royal administration in Darius’s and Xerxes’s Persia: rations, travel, women’s and children’s labour, tax-in-kind, and silver in lieu of provisions. Every claim is sourced. The liberty/property reading is labelled interpretation and is never put in Achaemenid mouths.',
        crumbs: 'Persepolis archives',
        alt: 'فارسی',
        layers: 'Three separate layers',
        discover: 'Discovery and languages',
        explorer: 'Ration explorer',
        labor: 'Labour, women, children',
        travel: 'Travel rations',
        tax: 'Tax and the institutional economy',
        treasury: 'Treasury',
        philosophy: 'A philosophical question (our reading)',
        meaning: 'Modern cultural meaning',
        bib: 'Bibliography',
        related: 'Related reading',
        citePage: 'Cite this page',
        copied: 'Copied',
      }

  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (!id) return
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const pageCite = pageCitation({
    locale,
    titleFa: 'بایگانی بارو و خزانهٔ تخت‌جمشید',
    titleEn: 'The Persepolis Fortification and Treasury Archives',
    path: locale === 'en' ? '/en/archives' : '/archives',
    extra: data.bibliography.slice(0, 3).map((b) => formatBoth(b)).join('\n\n'),
  })

  return (
    <PageTransition>
      <div className="mx-auto max-w-4xl px-4 py-14" lang={locale} dir={isFa ? 'rtl' : 'ltr'}>
        <nav aria-label={isFa ? 'مسیر صفحه' : 'Breadcrumb'} className="text-sm text-ivory/60 mb-6">
          <a href="/" className="hover:text-gold inline-block py-2 min-h-11">{isFa ? 'خانه' : 'Home'}</a>
          <span className="text-gold/50 mx-2" aria-hidden="true">{isFa ? '‹' : '/'}</span>
          <span aria-current="page">{t.crumbs}</span>
        </nav>

        <p className="text-turquoise-soft tracking-wide text-sm">{t.kicker}</p>
        <h1 className="text-4xl md:text-5xl font-black text-gilded leading-[1.25] mt-3">{t.title}</h1>
        <p className="mt-6 text-lg leading-9 text-ivory/80">{t.lede}</p>
        <p className="mt-4 flex flex-wrap gap-2">
          <a href={altArchivesPath(locale)} className="glass rounded-full px-5 py-2 inline-block min-h-11 hover:border-gold" hrefLang={locale === 'fa' ? 'en' : 'fa'}>
            {t.alt}
          </a>
          <CiteButton text={pageCite} label={t.citePage} copiedLabel={t.copied} />
        </p>
        <Divider />

        <nav aria-label={isFa ? 'بخش‌های صفحه' : 'On this page'} className="mb-16">
          <ul className="flex flex-wrap gap-2 text-sm">
            {([
              ['layers', t.layers],
              ['discovery', t.discover],
              ['explorer', t.explorer],
              ['labor', t.labor],
              ['travel', t.travel],
              ['tax', t.tax],
              ['treasury', t.treasury],
              ['philosophy', t.philosophy],
              ['meaning', t.meaning],
              ['bibliography', t.bib],
            ] as const).map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="glass rounded-full px-4 py-2 inline-flex min-h-11 items-center hover:border-gold">{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="layers" aria-labelledby="layers-h" className="mb-16">
          <h2 id="layers-h" className="text-2xl font-bold text-gold mb-4">{t.layers}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {(['historical', 'philosophical', 'modern'] as const).map((layer) => (
              <div key={layer} className="glass rounded-2xl p-5 space-y-3">
                <EvidenceBadge layer={layer} locale={locale} />
                {claims(layer).slice(0, 1).map((c) => (
                  <p key={c.id} className="text-sm leading-7 text-ivory/80">{c.statement}</p>
                ))}
              </div>
            ))}
          </div>
        </section>

        <Reveal>
          <section id="discovery" className="mb-16 space-y-4">
            <h2 className="text-3xl font-black text-gilded">{t.discover}</h2>
            <EvidenceBadge layer="historical" locale={locale} />
            {pf && (
              <p className="leading-9 text-ivory/80">
                {isFa
                  ? `${pf.nameFa}. ${pf.findspot}. کاوش: ${pf.excavator}، ${pf.discoveryYear}. زبان: ${pf.language}.`
                  : `${pf.nameEn}. ${pf.findspot}. Excavator: ${pf.excavator}, ${pf.discoveryYear}. Language: ${pf.language}.`}
              </p>
            )}
            {claims('historical').filter((c) => c.id.includes('discovery') || c.id.includes('counts') || c.id.includes('languages') || c.id.includes('dates') || c.id.includes('what')).map((c) => (
              <p key={c.id} className="leading-9 text-ivory/80">{c.statement}</p>
            ))}
            <p className="text-sm text-ivory/55">
              {isFa
                ? 'ایرانیکا از «پروژهٔ بایگانی باروی تخت‌جمشید» (Persepolis Fortification Archive Project) در مؤسسهٔ شرق‌شناسی نام می‌برد؛ ادامهٔ کار انتشار پس از هالوک.'
                : 'Iranica names the Persepolis Fortification Archive Project at the Oriental Institute — the publication programme that continues Hallock’s work.'}
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section id="explorer" className="mb-16 space-y-4">
            <h2 className="text-3xl font-black text-gilded">{t.explorer}</h2>
            <RationExplorer
              locale={locale}
              categories={data.rationCategories}
              facts={data.rationFacts}
              citations={data.citations}
              bibliography={data.bibliography}
            />
          </section>
        </Reveal>

        <Reveal>
          <section id="labor" className="mb-16 space-y-4">
            <h2 className="text-3xl font-black text-gilded">{t.labor}</h2>
            <EvidenceBadge layer="historical" locale={locale} />
            {claims('historical').filter((c) => c.id.includes('labor')).map((c) => (
              <p key={c.id} className="leading-9 text-ivory/80">{c.statement}</p>
            ))}
          </section>
        </Reveal>

        <Reveal>
          <section id="travel" className="mb-16 space-y-4">
            <h2 className="text-3xl font-black text-gilded">{t.travel}</h2>
            <EvidenceBadge layer="historical" locale={locale} />
            {claims('historical').filter((c) => c.id.includes('travel')).map((c) => (
              <p key={c.id} className="leading-9 text-ivory/80">{c.statement}</p>
            ))}
          </section>
        </Reveal>

        <Reveal>
          <section id="tax" className="mb-16 space-y-4">
            <h2 className="text-3xl font-black text-gilded">{t.tax}</h2>
            <EvidenceBadge layer="historical" locale={locale} />
            {claims('historical').filter((c) => c.id.includes('tax') || c.id.includes('institutional')).map((c) => (
              <p key={c.id} className="leading-9 text-ivory/80">{c.statement}</p>
            ))}
          </section>
        </Reveal>

        <Reveal>
          <section id="treasury" className="mb-16 space-y-4">
            <h2 className="text-3xl font-black text-gilded">{t.treasury}</h2>
            <EvidenceBadge layer="historical" locale={locale} />
            {pt && (
              <p className="leading-9 text-ivory/80">
                {isFa
                  ? `${pt.nameFa}. ${pt.findspot}. کاوش: ${pt.excavator}.`
                  : `${pt.nameEn}. ${pt.findspot}. Excavator: ${pt.excavator}.`}
              </p>
            )}
            {claims('historical').filter((c) => c.id.includes('pt-') || c.id.includes('silver')).map((c) => (
              <p key={c.id} className="leading-9 text-ivory/80">{c.statement}</p>
            ))}
          </section>
        </Reveal>

        <Reveal>
          <section id="philosophy" className="mb-16 space-y-4">
            <h2 className="text-3xl font-black text-gilded">{t.philosophy}</h2>
            <EvidenceBadge layer="philosophical" locale={locale} />
            {claims('philosophical').map((c) => <p key={c.id} className="leading-9 text-ivory/80">{c.statement}</p>)}
            {data.interpretations.filter((i) => i.locale === locale).map((i) => (
              <div key={i.id} className="glass rounded-2xl p-5">
                <p className="leading-8 text-ivory/80">{i.body}</p>
              </div>
            ))}
          </section>
        </Reveal>

        <Reveal>
          <section id="meaning" className="mb-16 space-y-4">
            <h2 className="text-3xl font-black text-gilded">{t.meaning}</h2>
            <EvidenceBadge layer="modern" locale={locale} />
            {claims('modern').map((c) => <p key={c.id} className="leading-9 text-ivory/80">{c.statement}</p>)}
          </section>
        </Reveal>

        <Reveal>
          <section id="bibliography" className="mb-16">
            <h2 className="text-3xl font-black text-gilded mb-6">{t.bib}</h2>
            <ul className="space-y-4">
              {data.bibliography.map((b) => (
                <li key={b.id} className="glass rounded-2xl p-5 text-sm leading-7">
                  <p className="font-bold text-ivory">{b.author ? `${b.author}. ` : ''}{b.title}{b.year ? ` (${b.year})` : ''}</p>
                  <p className="text-ivory/60">{b.publisher}</p>
                  <p className="text-ivory/70 mt-1">{isFa ? 'چه ادعایی را پشتیبانی می‌کند: ' : 'Supports: '}{b.supports}</p>
                  <p className="text-ivory/45 mt-1">{b.accessStatus}{b.url ? ' · ' : ''}{b.url && <a className="text-gold hover:underline break-all" href={b.url}>{b.url}</a>}</p>
                  <div className="mt-3">
                    <CiteButton
                      text={formatBoth(b)}
                      label={isFa ? 'رونوشت استناد (فارسی + شیکاگو)' : 'Copy citation (Persian + Chicago)'}
                      copiedLabel={t.copied}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <section id="related" className="mb-8 space-y-3">
            <h2 className="text-3xl font-black text-gilded">{t.related}</h2>
            <p><Link to="/cylinder" className="text-gold hover:underline min-h-11 inline-flex items-center">{isFa ? 'استوانهٔ کوروش' : 'The Cyrus Cylinder'}</Link></p>
            <p><Link to="/dynasty/$slug" params={{ slug: 'achaemenids' }} className="text-gold hover:underline min-h-11 inline-flex items-center">{isFa ? 'دودمان هخامنشی' : 'The Achaemenid dynasty'}</Link></p>
            <p><Link to="/about" className="text-gold hover:underline min-h-11 inline-flex items-center">{isFa ? 'روش‌شناسی و منابع' : 'Methodology and sources'}</Link></p>
          </section>
        </Reveal>
      </div>
    </PageTransition>
  )
}
