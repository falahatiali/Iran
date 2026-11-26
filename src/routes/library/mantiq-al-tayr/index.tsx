import { createFileRoute } from '@tanstack/react-router'
import { MantiqPage } from '../../../components/library/MantiqPage'
import { libraryHead } from '../../../components/library/head'
import { MANTIQ_PATH, mantiq } from '../../../data/library/mantiq'
import { seo } from '../../../lib/seo'

export const Route = createFileRoute('/library/mantiq-al-tayr/')({
  // the loader is code-split with the component, so the poem's text stays out of the entry bundle
  loader: () => ({ title: `${mantiq.title} عطار`, description: mantiq.description, path: MANTIQ_PATH }),
  head: ({ loaderData: m }) => {
    if (!m) return {}
    const s = seo({ ...m, image: '/media/library/og-mantiq-al-tayr.jpg' })
    return libraryHead(s)
  },
  component: MantiqPage,
})
