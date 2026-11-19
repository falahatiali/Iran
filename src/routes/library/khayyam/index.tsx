import { createFileRoute } from '@tanstack/react-router'
import { NASKH_PRELOAD } from '../../../components/library/head'
import { KhayyamPage, summarise } from '../../../components/library/khayyam/KhayyamPage'
import { KHAYYAM_PATH, khayyam } from '../../../data/library/khayyam'
import { rubaiyat } from '../../../data/library/khayyam/repository'
import { seo } from '../../../lib/seo'

const OG = '/media/library/og-khayyam.jpg'

export const Route = createFileRoute('/library/khayyam/')({
  // the edition is its own lazy chunk, shared with the rubaiyat page; the page itself carries only a summary of it
  loader: async () => ({ summary: summarise(await rubaiyat.hedayat()), title: `${khayyam.title} · کتابخانهٔ ادب پارسی`, description: khayyam.description, path: KHAYYAM_PATH }),
  head: ({ loaderData: m }) => {
    if (!m) return {}
    const s = seo({ title: m.title, description: m.description, path: m.path, image: OG })
    return { ...s, links: [...s.links, NASKH_PRELOAD] }
  },
  component: KhayyamRoute,
})

function KhayyamRoute() {
  return <KhayyamPage summary={Route.useLoaderData().summary} />
}
