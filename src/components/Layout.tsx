import { Link } from '@tanstack/react-router'
import { motion, useScroll, useSpring } from 'motion/react'
import { useEffect, useState } from 'react'
import type { Overview } from '../server/api'
import { SearchDialog } from './Search'
import { Shamseh } from './Ornament'

export function Header({ data }: { data: Overview }) {
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
  const links = [
    { to: '/', label: 'خانه' }, { to: '/timeline', label: 'گاه‌شمار' }, { to: '/about', label: 'درباره و روش‌شناسی' },
  ] as const
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:right-2 focus:z-[60] glass rounded-lg px-6 py-3 min-w-11 min-h-11">پرش به محتوا</a>
      <header className="sticky top-0 z-40 border-b border-gold/15 bg-night/70 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl flex items-center justify-between gap-4 px-4 h-16">
          <Link to="/" className="flex items-center gap-2 font-black text-lg min-h-11"><Shamseh className="size-8" /><span className="text-gilded">تاریخ ایران</span></Link>
          <nav aria-label="ناوبری اصلی" className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link key={l.to} to={l.to} activeOptions={{ exact: true }} className="rounded-full px-4 py-3 text-sm text-ivory/75 hover:text-gold transition-colors min-h-11" activeProps={{ className: 'bg-gold/15 !text-gold-bright' }}>{l.label}</Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={() => setOpen(true)} className="glass rounded-full px-5 py-2.5 text-sm flex items-center gap-2 hover:border-gold/60 transition-colors min-h-11 min-w-11" aria-label="جست‌وجو (Ctrl+K)">
              <span aria-hidden="true">⌕</span><span className="hidden sm:inline text-ivory/70">جست‌وجو</span><kbd className="hidden lg:inline text-[0.65rem] text-ivory/40">Ctrl K</kbd>
            </button>
            <button className="md:hidden glass rounded-full size-11" aria-expanded={menu} aria-controls="mobile-nav" aria-label="منو" onClick={() => setMenu((m) => !m)}>☰</button>
          </div>
        </div>
        {menu && (
          <nav id="mobile-nav" aria-label="ناوبری موبایل" className="md:hidden border-t border-gold/15 px-4 py-2 flex flex-col">
            {links.map((l) => <Link key={l.to} to={l.to} onClick={() => setMenu(false)} className="py-3 text-ivory/80 min-h-11 flex items-center">{l.label}</Link>)}
          </nav>
        )}
        <motion.div style={{ scaleX }} className="h-0.5 origin-right bg-gradient-to-l from-turquoise via-gold to-crimson" aria-hidden="true" />
      </header>
      <SearchDialog data={data} open={open} onClose={() => setOpen(false)} />
    </>
  )
}

export function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const f = () => setShow(window.scrollY > 800)
    window.addEventListener('scroll', f, { passive: true }); f()
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <motion.button
      aria-label="بازگشت به بالا" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      initial={false} animate={{ opacity: show ? 1 : 0, scale: show ? 1 : 0.6, pointerEvents: show ? 'auto' : 'none' }}
      whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.92 }}
      className="fixed bottom-6 left-6 z-40 size-12 rounded-full bg-gradient-to-br from-gold to-[#9c6f1f] text-night text-xl font-black shadow-lg shadow-gold/30"
    >↑</motion.button>
  )
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-gold/15 bg-lapis/30">
      <div className="mx-auto max-w-7xl px-4 py-10 grid gap-6 md:grid-cols-3 text-sm text-ivory/60">
        <div><p className="text-gilded font-black text-lg">تاریخ ایران</p><p className="mt-2 leading-7">مرجعی آزاد و منبع‌دار برای تاریخ ایران، از ایلام تا امروز.</p></div>
        <nav aria-label="پیوندهای پانویس" className="flex flex-col gap-2">
          <Link to="/timeline" className="hover:text-gold py-2 inline-block min-h-11">گاه‌شمار سراسری</Link>
          <Link to="/about" className="hover:text-gold py-2 inline-block min-h-11">روش‌شناسی و منابع</Link>
        </nav>
        <p className="leading-7">متن تحت مجوز MIT. خطوط نقشه از Natural Earth (مالکیت عمومی). قلم وزیرمتن از صابر راستی‌کردار (OFL).</p>
      </div>
    </footer>
  )
}
