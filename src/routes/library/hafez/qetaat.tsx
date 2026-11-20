import { createFileRoute } from '@tanstack/react-router'
import { NASKH_PRELOAD } from '../../../components/library/head'
import { PoemsPage } from '../../../components/library/hafez/PoemsPage'
import { fa } from '../../../components/library/hafez/parts'
import { QETAAT_PATH } from '../../../data/library/hafez'
import { divan } from '../../../data/library/hafez/repository'
import { seo } from '../../../lib/seo'

export const Route = createFileRoute('/library/hafez/qetaat')({
  loader: async () => ({ poems: await divan.qetaat() }),
  head: () => {
    const s = seo({ title: 'قطعات حافظ با معنی', description: 'قطعه‌های حافظ در گنجور، از جمله ماده‌تاریخ‌ها و شعرهای مناسبتی، هر کدام با معنی بیت به بیت و خلاصه.', path: QETAAT_PATH, image: '/media/library/og-hafez.jpg' })
    return { ...s, links: [...s.links, NASKH_PRELOAD] }
  },
  component: function Page() {
    const { poems } = Route.useLoaderData()
    return <PoemsPage poems={poems} title="قطعات حافظ" one="قطعه" ganjoorCat="ghete" sub={`${fa(poems.length)} قطعه به روایت گنجور، با معنی هر بیت`} />
  },
})
