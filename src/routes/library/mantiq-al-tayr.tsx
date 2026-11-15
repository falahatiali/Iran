import { createFileRoute } from '@tanstack/react-router'
import { MantiqPage } from '../../components/library/MantiqPage'
import { NASKH_PRELOAD } from '../../components/library/head'
import { MANTIQ_PATH, mantiq } from '../../data/library/mantiq'
import { seo } from '../../lib/seo'

export const Route = createFileRoute('/library/mantiq-al-tayr')({
  head: () => {
    const s = seo({ title: `${mantiq.title} عطار`, description: mantiq.description, path: MANTIQ_PATH, image: '/media/library/og-mantiq-al-tayr.jpg' })
    return { ...s, links: [...s.links, NASKH_PRELOAD] }
  },
  component: MantiqPage,
})
