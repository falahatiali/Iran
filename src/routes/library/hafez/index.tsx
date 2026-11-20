import { createFileRoute } from '@tanstack/react-router'
import { NASKH_PRELOAD } from '../../../components/library/head'
import { HafezPage, summarise } from '../../../components/library/hafez/HafezPage'
import { HAFEZ_PATH, hafez } from '../../../data/library/hafez'
import { divan } from '../../../data/library/hafez/repository'
import { seo } from '../../../lib/seo'

const OG = '/media/library/og-hafez.jpg'

export const Route = createFileRoute('/library/hafez/')({
  loader: async () => {
    const [index, first] = await Promise.all([divan.index(), divan.ghazal(hafez.openingN)])
    return { summary: summarise(index, first!.bayts[0]), title: `${hafez.title} · کتابخانهٔ ادب پارسی`, description: hafez.description, path: HAFEZ_PATH }
  },
  head: ({ loaderData: m }) => {
    if (!m) return {}
    const s = seo({ title: m.title, description: m.description, path: m.path, image: OG })
    return { ...s, links: [...s.links, NASKH_PRELOAD] }
  },
  component: HafezRoute,
})

function HafezRoute() {
  return <HafezPage summary={Route.useLoaderData().summary} />
}
