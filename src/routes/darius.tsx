import { createFileRoute } from '@tanstack/react-router'
import { DariusPage } from '../components/darius/DariusPage'
import { DARIUS_ALTERNATES, dariusJsonLd, seo } from '../lib/seo'

export const Route = createFileRoute('/darius')({
  head: () => ({
    ...seo({
      title: 'داریوش بزرگ؛ شمشیر، قرارداد و مالکیت',
      description: 'نقشهٔ متحرک جنگ‌ها و ساخته‌های داریوش یکم (۵۲۲–۴۸۶ پ.م.) و پروندهٔ منبع‌دار دربارهٔ اقتصاد، بازار، دین، ارتش و آزادی‌های فردی با عینک حقوق مالکیت، با جداسازی شواهد، تفسیر و معنای امروز.',
      path: '/darius',
      alternates: [...DARIUS_ALTERNATES],
    }),
    scripts: [dariusJsonLd('fa')],
  }),
  component: () => <DariusPage locale="fa" />,
})
