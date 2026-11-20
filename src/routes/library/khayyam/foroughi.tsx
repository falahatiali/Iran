import { createFileRoute } from '@tanstack/react-router'
import { NASKH_PRELOAD } from '../../../components/library/head'
import { ForoughiPage } from '../../../components/library/khayyam/ForoughiPage'
import { FOROUGHI_PATH } from '../../../data/library/khayyam'
import { rubaiyat } from '../../../data/library/khayyam/repository'
import { seo } from '../../../lib/seo'

export const Route = createFileRoute('/library/khayyam/foroughi')({
  loader: async () => {
    const [edition, hedayat, extra] = await Promise.all([rubaiyat.foroughi(), rubaiyat.hedayat(), rubaiyat.foroughiMeanings()])
    // only the cross-reference travels with the page, not Hedayat's whole text: Foroughi–Ghani number -> Hedayat number
    const inHedayat = hedayat.quatrains.flatMap((q) => (q.fg ? [[q.fg, q.n] as [number, number]] : []))
    return { edition, inHedayat, meanings: extra.meanings }
  },
  head: () => {
    const s = seo({
      title: 'رباعیات خیام به گزینش محمدعلی فروغی و قاسم غنی',
      description: 'متن کامل ۱۷۸ رباعی خیام به انتخاب و تصحیح فروغی و غنی، از گنجور، با پیوند به همتای هر رباعی در «ترانه‌های خیام» صادق هدایت و معنی رباعی‌های دیگر از گنجور.',
      path: FOROUGHI_PATH,
      image: '/media/library/og-khayyam.jpg',
    })
    return { ...s, links: [...s.links, NASKH_PRELOAD] }
  },
  component: ForoughiRoute,
})

function ForoughiRoute() {
  const { edition, inHedayat, meanings } = Route.useLoaderData()
  return <ForoughiPage edition={edition} inHedayat={inHedayat} meanings={meanings} />
}
