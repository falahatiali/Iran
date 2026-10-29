import { createFileRoute } from '@tanstack/react-router'
import { ArchivesPage } from '../../components/archives/ArchivesPage'
import { getArchives } from '../../server/api'
import { ARCHIVES_ALTERNATES, seo } from '../../lib/seo'

export const Route = createFileRoute('/en/archives')({
  loader: () => getArchives(),
  staleTime: Infinity,
  head: () => seo({
    title: 'Persepolis Fortification and Treasury Archives',
    description: 'The Persepolis Fortification and Treasury tablets: 1933–38 discovery, languages, rations, women’s and children’s labour, travel, tax-in-kind and silver — sourced claims, layers kept apart.',
    path: '/en/archives',
    locale: 'en_GB',
    alternates: [...ARCHIVES_ALTERNATES],
  }),
  component: ArchivesEn,
})

function ArchivesEn() {
  const data = Route.useLoaderData()
  return <ArchivesPage locale="en" data={data} />
}
