import { createFileRoute } from '@tanstack/react-router'
import { libraryHead } from '../../components/library/head'
import { AboutPage } from '../../components/library/saadi/AboutPage'
import { SAADI_PATH } from '../../data/library/saadi'
import { seo } from '../../lib/seo'

export const Route = createFileRoute('/library/saadi')({
  head: () => {
    const s = seo({
      title: 'سعدی کیست؟ زندگی و روزگار سعدی شیرازی · کتابخانهٔ ادب پارسی',
      description: 'زندگی‌نامهٔ مستند سعدی شیرازی: زادروز و درس در بغداد، سفرها، بوستان و گلستان، درگذشت، آرامگاه سعدیه و سعدی در غرب؛ هر جمله با منبعش.',
      path: SAADI_PATH,
      image: '/media/library/og-golestan.jpg',
    })
    return libraryHead(s)
  },
  component: AboutPage,
})
