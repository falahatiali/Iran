import { createFileRoute } from '@tanstack/react-router'
import { libraryHead } from '../../../components/library/head'
import { AboutPage } from '../../../components/library/khayyam/AboutPage'
import { ABOUT_PATH } from '../../../data/library/khayyam'
import { seo } from '../../../lib/seo'

export const Route = createFileRoute('/library/khayyam/about')({
  head: () => {
    const s = seo({
      title: 'خیام کیست؟ زندگی، جبر، تقویم جلالی و رباعیات',
      description: 'زندگی عمر خیام نیشابوری (۱۰۴۸–۱۱۳۱)، کارهای او در جبر و هندسه، رصدخانه و تقویم جلالی، رساله‌ها، نوروزنامه، مسئلهٔ اصالت رباعیات، فیتزجرالد و آرامگاهش در نیشابور؛ با منبع.',
      path: ABOUT_PATH,
      image: '/media/library/og-khayyam.jpg',
    })
    return libraryHead(s)
  },
  component: AboutPage,
})
