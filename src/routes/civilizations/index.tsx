import { createFileRoute } from '@tanstack/react-router'
import { CivLanding, type LandingData } from '../../components/civilizations/CivLanding'
import { landingHead } from '../../components/civilizations/civHead'
import { civilizations } from '../../data/civilizations/repository'
import { civSources } from '../../data/civilizations/sources'

export const Route = createFileRoute('/civilizations/')({
  // the loader (code-split with the component) reads every page once for the cover photos and the counts
  loader: async (): Promise<LandingData> => {
    const list = civilizations.list()
    const pages = await Promise.all(list.map((c) => civilizations.get(c.slug)))
    const cited = new Set(pages.flatMap((p) => (p ? [...p.sections.flatMap((s) => s.sources), ...p.timeline.flatMap((m) => m.sources)] : [])))
    return {
      items: list.map((c, i) => ({ ...c, cover: pages[i]?.photos[0] })),
      stats: {
        civs: list.length,
        photos: pages.reduce((n, p) => n + (p?.photos.length ?? 0), 0),
        videos: pages.reduce((n, p) => n + (p?.videos.length ?? 0), 0),
        sources: civSources.filter((s) => cited.has(s.id)).length,
      },
    }
  },
  head: ({ loaderData: d }) => (d ? landingHead(d.items.map((c) => ({ ...c, cover: c.cover?.src }))) : {}),
  component: function Landing() { return <CivLanding data={Route.useLoaderData()} /> },
})
