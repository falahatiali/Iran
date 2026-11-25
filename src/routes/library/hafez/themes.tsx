import { createFileRoute } from '@tanstack/react-router'
import { NASKH_PRELOAD } from '../../../components/library/head'
import { ThemesPage } from '../../../components/library/hafez/ThemesPage'
import { THEMES_PATH } from '../../../data/library/hafez/paths'
import { divan } from '../../../data/library/hafez/repository'
import { seo } from '../../../lib/seo'

export const Route = createFileRoute('/library/hafez/themes')({
  loader: async () => ({ map: await divan.themes() }),
  head: () => {
    const s = seo({
      title: 'نقشهٔ مضمون‌های غزل حافظ: می، باغ، شب، هجران، ریا',
      description: 'پنج مضمون بزرگ دیوان حافظ در ۴۹۵ غزل، به شمارش واژه‌ها: کدام غزل‌ها از باده می‌گویند، کدام از باغ و شب و هجران و ریا، و این مضمون‌ها کجا به هم می‌رسند. طبقه‌بندی ماشینی این سایت با روش آشکار.',
      path: THEMES_PATH,
      image: '/media/library/og-hafez.jpg',
    })
    return { ...s, links: [...s.links, NASKH_PRELOAD] }
  },
  component: function Page() {
    return <ThemesPage map={Route.useLoaderData().map} />
  },
})
