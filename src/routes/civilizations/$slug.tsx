import { createFileRoute, notFound } from '@tanstack/react-router'
import { CivPage } from '../../components/civilizations/CivPage'
import { civHead } from '../../components/civilizations/civHead'
import { civilizations } from '../../data/civilizations/repository'

export const Route = createFileRoute('/civilizations/$slug')({
  loader: async ({ params }) => {
    const civ = await civilizations.get(params.slug)
    if (!civ) throw notFound()
    return { civ, all: civilizations.list() }
  },
  head: ({ loaderData: d }) => (d ? civHead(d.civ) : {}),
  component: function CivilizationPage() {
    const { civ, all } = Route.useLoaderData()
    return <CivPage civ={civ} all={all} />
  },
})
