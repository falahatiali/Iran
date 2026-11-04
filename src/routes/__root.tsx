import { HeadContent, Link, Outlet, Scripts, createRootRoute, useRouter, useRouterState } from '@tanstack/react-router'
import { MotionConfig } from 'motion/react'
import { useEffect, useState } from 'react'
import appCss from '../styles/app.css?url'
import { getOverview } from '../server/api'
import { BackToTop, Footer, Header } from '../components/Layout'
import { Shamseh } from '../components/Ornament'
import { ReadingTool } from '../components/ReadingTool'
import { READING_BOOT_SCRIPT } from '../lib/reading'
import { GA_ID, gaEnabled, trackPageView } from '../lib/analytics'
import { ConsentBanner } from '../components/ConsentBanner'

export const Route = createRootRoute({
  loader: () => getOverview(),
  staleTime: Infinity,
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#070d1f' },
      { title: 'تاریخ ایران' },
    ],
    links: [
      { rel: 'preload', href: '/fonts/Vazirmatn-Regular.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { rel: 'preload', href: '/fonts/Vazirmatn-Black.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { rel: 'preload', href: '/fonts/GentiumBookPlus-Regular.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
    ],
  }),
  shellComponent: RootDocument,
  component: RootLayout,
  notFoundComponent: NotFound,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const isEn = pathname.startsWith('/en')
  const router = useRouter()
  useEffect(() => {
    if (!gaEnabled()) return
    return router.subscribe('onResolved', (e) => {
      // the initial load is counted by the config call; only count real client-side moves
      if (!e.fromLocation || e.fromLocation.href === e.toLocation.href) return
      requestAnimationFrame(() => trackPageView(e.toLocation.href))
    })
  }, [router])
  useEffect(() => {
    // One-time reload guard for stale chunk/asset errors after deployment
    const handleChunkError = (event: ErrorEvent | PromiseRejectionEvent) => {
      const error = 'reason' in event ? event.reason : event.error
      const message = error?.message || String(error)
      
      // Detect dynamic import / chunk loading failures
      if (
        message.includes('Failed to fetch dynamically imported module') ||
        message.includes('error loading dynamically imported module') ||
        message.includes('Importing a module script failed') ||
        message.includes('chunk')
      ) {
        const reloadKey = 'chunk-reload-attempted'
        if (!sessionStorage.getItem(reloadKey)) {
          sessionStorage.setItem(reloadKey, Date.now().toString())
          window.location.reload()
        }
      }
    }
    
    window.addEventListener('error', handleChunkError)
    window.addEventListener('unhandledrejection', handleChunkError)
    
    return () => {
      window.removeEventListener('error', handleChunkError)
      window.removeEventListener('unhandledrejection', handleChunkError)
    }
  }, [])
  
  return (
    <html lang={isEn ? 'en' : 'fa'} dir={isEn ? 'ltr' : 'rtl'} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: READING_BOOT_SCRIPT }} />
        <HeadContent />
        {gaEnabled() && <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />}
        {gaEnabled() && <script src="/ga-init.js" data-ga-id={GA_ID} />}
      </head>
      <body>
        {children}
        <ClientConsent isEn={isEn} />
        <Scripts />
      </body>
    </html>
  )
}

function RootLayout() {
  const data = Route.useLoaderData()
  const isEn = useRouterState({ select: (s) => s.location.pathname.startsWith('/en') })
  return (
    <MotionConfig reducedMotion="user">
      <Header data={data} />
      <main id="main"><Outlet /></main>
      <Footer />
      <BackToTop />
      <ReadingTool locale={isEn ? 'en' : 'fa'} />
    </MotionConfig>
  )
}

function NotFound() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-24">
      <Shamseh className="size-32 opacity-70" spin />
      <h1 className="text-5xl font-black text-gilded mt-6">۴۰۴</h1>
      <p className="mt-4 text-ivory/70">این برگ از تاریخ گم شده است.</p>
      <Link to="/" className="mt-8 glass rounded-full px-6 py-3 hover:border-gold min-h-11">بازگشت به خانه</Link>
    </section>
  )
}

function ClientConsent({ isEn }: { isEn: boolean }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return mounted && gaEnabled() ? <ConsentBanner locale={isEn ? 'en' : 'fa'} /> : null
}
