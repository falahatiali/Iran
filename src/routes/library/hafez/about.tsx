import { createFileRoute } from '@tanstack/react-router'
import { libraryHead } from '../../../components/library/head'
import { AboutPage } from '../../../components/library/hafez/AboutPage'
import { ABOUT_PATH } from '../../../data/library/hafez'
import { seo } from '../../../lib/seo'

export const Route = createFileRoute('/library/hafez/about')({
  head: () => {
    const s = seo({
      title: 'حافظ کیست؟ زندگی، روزگار آل مظفر، دیوان، فال حافظ و حافظیه',
      description: 'زندگی حافظ شیرازی (حدود ۱۳۱۵–۱۳۹۰)، شیراز و روزگار اینجو و آل مظفر و شاه شجاع، افسانهٔ دیدار با تیمور، تصحیح‌های قزوینی–غنی و خانلری، رسم فال حافظ، گوته و حافظیه؛ با منبع.',
      path: ABOUT_PATH,
      image: '/media/library/og-hafez.jpg',
    })
    return libraryHead(s)
  },
  component: AboutPage,
})
