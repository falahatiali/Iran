import type { Locale } from '../lib/i18n'
import { aboutHero, aboutRefs, methodology, purpose, type AboutBlock } from '../data/about/content'
import { PageTransition, Reveal } from './Reveal'
import { Divider, Shamseh } from './Ornament'

function Block({ b, locale }: { b: AboutBlock; locale: Locale }) {
  return (
    <Reveal>
      <section id={b.id} className="scroll-mt-24">
        <h3 className="text-2xl font-black text-gold-bright">{b.title[locale]}</h3>
        {b.paras[locale].map((p, i) => <p key={i} className="mt-4 text-lg leading-9 text-ivory/85">{p}</p>)}
        {b.list && <ul className="mt-4 space-y-2 leading-8 text-ivory/80 list-disc ps-6">{b.list[locale].map((x) => <li key={x}>{x}</li>)}</ul>}
      </section>
    </Reveal>
  )
}

export function AboutPage({ locale }: { locale: Locale }) {
  const isFa = locale === 'fa'
  return (
    <PageTransition>
      <article lang={locale} dir={isFa ? 'rtl' : 'ltr'}>
        <header className="relative overflow-hidden border-b border-gold/15">
          <Shamseh className="absolute -top-24 -end-24 w-96 h-96 opacity-10" spin />
          <div className="relative mx-auto max-w-3xl px-4 py-16 md:py-24">
            <nav aria-label={isFa ? 'مسیر صفحه' : 'Breadcrumb'} className="text-sm text-ivory/60 mb-6">
              <a href="/" className="hover:text-gold inline-block py-2 min-h-11">{isFa ? 'خانه' : 'Home'}</a>
              <span className="text-gold/50 mx-2" aria-hidden="true">{isFa ? '‹' : '/'}</span>
              <span aria-current="page">{aboutHero.kicker[locale]}</span>
            </nav>
            <p className="text-turquoise-soft">{aboutHero.kicker[locale]}</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-black text-gilded leading-[1.3]">{aboutHero.title[locale]}</h1>
            <p className="mt-8 text-xl leading-10 text-ivory/85">{aboutHero.lede[locale]}</p>
            <p className="mt-6"><a href={isFa ? '/en/about' : '/about'} hrefLang={isFa ? 'en' : 'fa'} className="glass rounded-full px-5 py-2 inline-flex items-center min-h-11 hover:border-gold">{isFa ? 'English' : 'فارسی'}</a></p>
          </div>
        </header>
        <div className="mx-auto max-w-3xl px-4 py-14 space-y-14">
          <h2 className="text-3xl font-black text-gilded">{isFa ? 'هدف' : 'Purpose'}</h2>
          {purpose.map((b) => <Block key={b.id} b={b} locale={locale} />)}
          <Divider />
          <h2 id="methodology" className="text-3xl font-black text-gilded scroll-mt-24">{isFa ? 'روش‌شناسی' : 'Methodology'}</h2>
          {methodology.map((b) => <Block key={b.id} b={b} locale={locale} />)}
          <section aria-labelledby="refs-h">
            <h2 id="refs-h" className="text-xl font-bold text-gold">{isFa ? 'منابع این صفحه' : 'References'}</h2>
            <ol className="mt-3 space-y-2 text-sm leading-7 text-ivory/70" dir="ltr">
              {aboutRefs.map((r) => <li key={r.id} className="text-left">{r.text} {r.url && <a href={r.url} className="text-gold hover:underline break-all" rel="noopener noreferrer" target="_blank">{r.url}</a>}</li>)}
            </ol>
          </section>
        </div>
      </article>
    </PageTransition>
  )
}
