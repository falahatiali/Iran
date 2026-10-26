import { HeadContent, Link, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { MotionConfig } from 'motion/react'
import appCss from '../styles/app.css?url'
import { getOverview } from '../server/api'
import { BackToTop, Footer, Header } from '../components/Layout'
import { Shamseh } from '../components/Ornament'

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
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
    ],
  }),
  shellComponent: RootDocument,
  component: RootLayout,
  notFoundComponent: NotFound,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}

function RootLayout() {
  const data = Route.useLoaderData()
  return (
    <MotionConfig reducedMotion="user">
      <Header data={data} />
      <main id="main"><Outlet /></main>
      <Footer />
      <BackToTop />
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
