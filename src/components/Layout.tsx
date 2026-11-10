import { Link, useRouterState } from '@tanstack/react-router'
import { motion, useScroll, useSpring } from 'motion/react'
import { useEffect, useState } from 'react'
import type { Overview } from '../server/api'
import { localeFromPath, siblingLocalePath } from '../lib/i18n'
import { SearchDialog } from './Search'
import { openConsent } from './ConsentBanner'
import { gaEnabled } from '../lib/analytics'
import { Shamseh } from './Ornament'

export function Header({ data }: { data: Overview }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const locale = localeFromPath(pathname)
  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 150, damping: 30 })
  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !(e.target instanceof HTMLInputElement))) { e.preventDefault(); setOpen(true) }
    }
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [])
  const links = locale === 'en'
    ? [
        { to: '/', label: 'Home' },
        { to: '/cylinder', label: 'Cyrus Cylinder' },
        { to: '/archives', label: 'Persepolis archives' },
        { to: '/en/king/$slug', params: { slug: 'darius-i' }, label: 'Darius the Great' },
        { to: '/timeline', label: 'Timeline' },
        { to: '/en/about', label: 'About' },
      ] as const
    : [
        { to: '/', label: 'خانه' },
        { to: '/cylinder', label: 'استوانهٔ کوروش' },
        { to: '/archives', label: 'بایگانی تخت‌جمشید' },
        { to: '/king/$slug', params: { slug: 'darius-i' }, label: 'داریوش بزرگ' },
        { to: '/timeline', label: 'گاه‌شمار' },
        { to: '/kings', label: 'فرمانروایان' },
        { to: '/about', label: 'درباره و روش‌شناسی' },
      ] as const
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:right-2 focus:z-[60] glass rounded-lg px-6 py-3 min-w-11 min-h-11">{locale === 'en' ? 'Skip to content' : 'پرش به محتوا'}</a>
      <header className="sticky top-0 z-40 border-b border-gold/15 bg-night/70 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl flex items-center justify-between gap-4 px-4 h-16">
          <Link to="/" className="flex items-center gap-2 font-black text-lg min-h-11"><Shamseh className="size-8" /><span className="text-gilded">{locale === 'en' ? 'Iran History' : 'تاریخ ایران'}</span></Link>
          <nav aria-label={locale === 'en' ? 'Main navigation' : 'ناوبری اصلی'} className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link key={l.label} to={l.to} params={'params' in l ? l.params : undefined} activeOptions={{ exact: true }} className="rounded-full px-4 py-3 text-sm text-ivory/75 hover:text-gold transition-colors min-h-11" activeProps={{ className: 'bg-gold/15 !text-gold-bright' }}>{l.label}</Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={siblingLocalePath(pathname)}
              className="inline-flex glass rounded-full px-3 sm:px-4 py-2 text-sm hover:border-gold min-h-11 items-center"
              hrefLang={pathname.startsWith('/en') ? 'fa' : 'en'}
              title={pathname.startsWith('/en') ? 'نسخهٔ فارسی' : 'English'}
            >
              {locale === 'en' ? 'فا' : 'EN'}
            </a>
            <button onClick={() => setOpen(true)} className="glass rounded-full px-5 py-2.5 text-sm flex items-center gap-2 hover:border-gold/60 transition-colors min-h-11 min-w-11" aria-label={locale === 'en' ? 'Search (Ctrl+K)' : 'جست‌وجو (Ctrl+K)'}>
              <span aria-hidden="true">⌕</span><span className="hidden sm:inline text-ivory/70">{locale === 'en' ? 'Search' : 'جست‌وجو'}</span><kbd className="hidden lg:inline text-[0.65rem] text-ivory/40">Ctrl K</kbd>
            </button>
            <button className="md:hidden glass rounded-full size-11" aria-expanded={menu} aria-controls="mobile-nav" aria-label={locale === 'en' ? 'Menu' : 'منو'} onClick={() => setMenu((m) => !m)}>☰</button>
          </div>
        </div>
        {menu && (
          <nav id="mobile-nav" aria-label={locale === 'en' ? 'Mobile navigation' : 'ناوبری موبایل'} className="md:hidden border-t border-gold/15 px-4 py-2 flex flex-col">
            {links.map((l) => <Link key={l.label} to={l.to} params={'params' in l ? l.params : undefined} onClick={() => setMenu(false)} className="py-3 text-ivory/80 min-h-11 flex items-center">{l.label}</Link>)}
          </nav>
        )}
        <motion.div style={{ scaleX }} className="h-0.5 origin-right bg-gradient-to-l from-turquoise via-gold to-crimson" aria-hidden="true" />
      </header>
      <SearchDialog data={data} open={open} onClose={() => setOpen(false)} />
    </>
  )
}

export function BackToTop() {
  const isEn = useRouterState({ select: (s) => s.location.pathname.startsWith('/en') })
  const [show, setShow] = useState(false)
  useEffect(() => {
    const f = () => setShow(window.scrollY > 640)
    window.addEventListener('scroll', f, { passive: true }); f()
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <motion.button
      aria-label={isEn ? 'Back to top' : 'بازگشت به بالا'}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      initial={false} animate={{ opacity: show ? 1 : 0, scale: show ? 1 : 0.6, pointerEvents: show ? 'auto' : 'none' }}
      whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.92 }}
      className="fixed bottom-24 right-4 sm:bottom-6 sm:right-6 z-40 grid place-items-center size-12 rounded-full bg-gradient-to-br from-gold to-[#9c6f1f] text-night text-xl font-black shadow-lg shadow-gold/30"
    >↑</motion.button>
  )
}

export function Footer() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const isEn = pathname.startsWith('/en')
  const t = isEn
    ? {
        brand: 'Iran History',
        blurb: 'A free, sourced reference for the history of Iran, from Elam to today.',
        explore: 'Explore',
        events: 'Key events',
        about: 'About this site',
        license: 'Text under the MIT licence. Map lines from Natural Earth (public domain). Vazirmatn typeface by Saber Rastikerdar (OFL).',
        cookies: 'Cookie settings',
        exploreAria: 'Footer links',
        eventsAria: 'Key events',
      }
    : {
        brand: 'تاریخ ایران',
        blurb: 'مرجعی آزاد و منبع‌دار برای تاریخ ایران، از ایلام تا امروز.',
        explore: 'گشت‌وگذار',
        events: 'رویدادهای کلیدی',
        about: 'دربارهٔ سایت',
        license: 'متن تحت مجوز MIT. خطوط نقشه از Natural Earth (مالکیت عمومی). قلم وزیرمتن از صابر راستی‌کردار (OFL).',
        cookies: 'تنظیمات کوکی',
        exploreAria: 'پیوندهای پانویس',
        eventsAria: 'رویدادهای کلیدی',
      }
  const explore = isEn
    ? [
        { href: '/en/cylinder', label: 'Cyrus Cylinder' },
        { href: '/en/archives', label: 'Persepolis archives' },
        { href: '/timeline', label: 'Timeline' },
        { href: '/kings', label: 'Rulers at a glance' },
        { href: '/en/property', label: 'Property rights' },
        { href: '/en/about', label: 'Method and sources' },
      ]
    : [
        { href: '/cylinder', label: 'استوانهٔ کوروش' },
        { href: '/archives', label: 'بایگانی تخت‌جمشید' },
        { href: '/timeline', label: 'گاه‌شمار سراسری' },
        { href: '/kings', label: 'فرمانروایان در یک نگاه' },
        { href: '/property', label: 'حقوق مالکیت' },
        { href: '/about', label: 'روش‌شناسی و منابع' },
      ]
  const events = isEn
    ? [
        { href: '/en/event/28-mordad', title: '19 August 1953', kicker: '28 Mordad 1332' },
        { href: '/en/event/jashn-2500', title: 'The 2,500-year celebrations', kicker: 'October 1971' },
      ]
    : [
        { href: '/event/28-mordad', title: '۲۸ مرداد ۱۳۳۲', kicker: 'کودتای ۱۹۵۳' },
        { href: '/event/jashn-2500', title: 'جشن‌های ۲۵۰۰ ساله', kicker: 'مهر ۱۳۵۰' },
      ]
  return (
    <footer className="mt-24 relative border-t border-gold/20 bg-gradient-to-b from-lapis/25 via-[#0a1733] to-[#070f24]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-gold/60 to-transparent" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 pt-14 pb-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-sm text-ivory/65">
          <div>
            <p className="flex items-center gap-2.5 text-gilded font-black text-lg">
              <Shamseh className="size-8 opacity-90" />
              <span>{t.brand}</span>
            </p>
            <p className="mt-4 leading-8 max-w-xs">{t.blurb}</p>
          </div>
          <nav aria-label={t.exploreAria}>
            <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-gold mb-4">{t.explore}</p>
            <ul className="flex flex-col">
              {explore.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-gold py-2 inline-block min-h-11 transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label={t.eventsAria}>
            <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-gold mb-4">{t.events}</p>
            <ul className="flex flex-col gap-2">
              {events.map((e) => (
                <li key={e.href}>
                  <a href={e.href} aria-current={pathname === e.href ? 'page' : undefined} className={`group block rounded-2xl border px-4 py-3 hover:border-gold/50 hover:bg-gold/5 transition-colors min-h-11 ${pathname === e.href ? 'border-gold/60 bg-gold/10' : 'border-gold/15 bg-night/20'}`}>
                    <span className="block text-[0.7rem] font-bold tracking-wide text-turquoise-soft">{e.kicker}</span>
                    <span className="mt-1 block font-black text-gold-bright group-hover:text-gold">{e.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-gold mb-4">{t.about}</p>
            <p className="leading-8">{t.license}</p>
            {gaEnabled() && (
              <button type="button" onClick={openConsent} className="hover:text-gold mt-4 py-2 min-h-11 text-start">
                {t.cookies}
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
