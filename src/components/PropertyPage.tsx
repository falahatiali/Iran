import type { Locale } from '../lib/i18n'
import { propertyHero, propertyRefs, propertySections } from '../data/property/content'
import type { AboutBlock } from '../data/about/content'
import { PageTransition, Reveal } from './Reveal'
import { Divider, Shamseh } from './Ornament'
import { SectionNav } from './SectionNav'

function Block({ b, locale }: { b: AboutBlock; locale: Locale }) {
  return (
    <Reveal>
      <section id={b.id} className="scroll-mt-24">
        <h2 className="text-2xl font-black text-gold-bright">{b.title[locale]}</h2>
        {b.paras[locale].map((p, i) => <p key={i} className="read mt-4 text-ivory/85 read-lede">{p}</p>)}
        {b.list && <ul className="read mt-4 space-y-2 text-ivory/80 list-disc ps-6">{b.list[locale].map((x) => <li key={x}>{x}</li>)}</ul>}
      </section>
    </Reveal>
  )
}

export function PropertyPage({ locale }: { locale: Locale }) {
  const isFa = locale === 'fa'
  const links = isFa
    ? [
        { href: '/king/darius-i', label: 'داریوش بزرگ' },
        { href: '/king/cyrus-ii', label: 'کوروش بزرگ' },
        { href: '/cylinder', label: 'استوانهٔ کوروش' },
        { href: '/archives', label: 'بایگانی تخت‌جمشید' },
        { href: '/king/khosrow-i', label: 'خسرو انوشیروان' },
        { href: '/about#methodology', label: 'روش‌شناسی' },
      ]
    : [
        { href: '/en/king/darius-i', label: 'Darius the Great' },
        { href: '/en/king/cyrus-ii', label: 'Cyrus the Great' },
        { href: '/en/cylinder', label: 'The Cyrus Cylinder' },
        { href: '/en/archives', label: 'The Persepolis archives' },
        { href: '/en/king/khosrow-i', label: 'Khosrow Anushirvan' },
        { href: '/en/about#methodology', label: 'Methodology' },
      ]
  return (
    <PageTransition>
      <article lang={locale} dir={isFa ? 'rtl' : 'ltr'}>
        <header className="relative overflow-hidden border-b border-gold/15">
          <Shamseh className="absolute -top-24 -end-24 w-96 h-96 opacity-10" spin />
          <div className="relative mx-auto max-w-3xl px-4 py-16 md:py-24">
            <nav aria-label={isFa ? 'مسیر صفحه' : 'Breadcrumb'} className="text-sm text-ivory/60 mb-6">
              <a href="/" className="hover:text-gold inline-block py-2 min-h-11">{isFa ? 'خانه' : 'Home'}</a>
              <span className="text-gold/50 mx-2" aria-hidden="true">{isFa ? '‹' : '/'}</span>
              <span aria-current="page">{propertyHero.kicker[locale]}</span>
            </nav>
            <p className="text-turquoise-soft">{propertyHero.kicker[locale]}</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-black text-gilded leading-[1.3]">{propertyHero.title[locale]}</h1>
            <p className="read read-lede mt-8 text-ivory/85">{propertyHero.lede[locale]}</p>
            <p className="mt-6"><a href={isFa ? '/en/property' : '/property'} hrefLang={isFa ? 'en' : 'fa'} className="glass rounded-full px-5 py-2 inline-flex items-center min-h-11 hover:border-gold">{isFa ? 'English' : 'فارسی'}</a></p>
          </div>
        </header>
        <SectionNav
          label={isFa ? 'بخش‌های صفحه' : 'Page sections'}
          items={[
            ...propertySections.map((b) => [b.id, b.title[locale]] as const),
            ['related-h', isFa ? 'پیوندهای مرتبط' : 'Related pages'] as const,
            ['refs-h', isFa ? 'منابع' : 'References'] as const,
          ]}
        />
        <div className="mx-auto max-w-3xl px-4 py-14 space-y-14">
          {propertySections.map((b) => <Block key={b.id} b={b} locale={locale} />)}
          <Divider />
          <section aria-labelledby="related-h">
            <h2 id="related-h" className="text-xl font-bold text-gold">{isFa ? 'پیوندهای مرتبط' : 'Related pages'}</h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="glass rounded-full px-4 py-2 inline-flex items-center min-h-11 hover:border-gold">{l.label}</a>
                </li>
              ))}
            </ul>
          </section>
          <section aria-labelledby="refs-h">
            <h2 id="refs-h" className="text-xl font-bold text-gold">{isFa ? 'منابع این صفحه' : 'References'}</h2>
            <ol className="mt-3 space-y-2 text-sm leading-7 text-ivory/70" dir="ltr">
              {propertyRefs.map((r) => <li key={r.id} className="text-left">{r.text} {r.url && <a href={r.url} className="text-gold hover:underline break-all" rel="noopener noreferrer" target="_blank">{r.url}</a>}</li>)}
            </ol>
          </section>
        </div>
      </article>
    </PageTransition>
  )
}
