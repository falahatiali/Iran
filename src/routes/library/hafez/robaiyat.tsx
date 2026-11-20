import { createFileRoute } from '@tanstack/react-router'
import { NASKH_PRELOAD } from '../../../components/library/head'
import { PoemsPage } from '../../../components/library/hafez/PoemsPage'
import { fa } from '../../../components/library/hafez/parts'
import { ROBAIYAT_PATH } from '../../../data/library/hafez'
import { divan } from '../../../data/library/hafez/repository'
import { seo } from '../../../lib/seo'

export const Route = createFileRoute('/library/hafez/robaiyat')({
  loader: async () => ({ poems: await divan.robaiyat() }),
  head: () => {
    const s = seo({ title: 'رباعیات حافظ با معنی', description: 'رباعی‌های منسوب به حافظ در گنجور، هر کدام با معنی بیت به بیت و خلاصه.', path: ROBAIYAT_PATH, image: '/media/library/og-hafez.jpg' })
    return { ...s, links: [...s.links, NASKH_PRELOAD] }
  },
  component: function Page() {
    const { poems } = Route.useLoaderData()
    return <PoemsPage poems={poems} title="رباعیات حافظ" one="رباعی" ganjoorCat="robaee2" sub={`${fa(poems.length)} رباعی به روایت گنجور، با معنی هر بیت`} />
  },
})
