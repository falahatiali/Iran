import { createFileRoute, notFound } from '@tanstack/react-router'
import { NASKH_PRELOAD } from '../../../../components/library/head'
import { GhazalPage } from '../../../../components/library/hafez/GhazalPage'
import { fa } from '../../../../components/library/hafez/parts'
import { ghazalPath } from '../../../../data/library/hafez'
import indexMeta from '../../../../data/library/hafez/text/meta.json'
import { divan } from '../../../../data/library/hafez/repository'
import { seo } from '../../../../lib/seo'

export const Route = createFileRoute('/library/hafez/ghazal/$n')({
  validateSearch: (s: Record<string, unknown>): { fal?: 1 } => (s.fal === 1 || s.fal === '1' ? { fal: 1 } : {}),
  loader: async ({ params }) => {
    const n = Number(params.n)
    const g = Number.isInteger(n) && String(n) === params.n ? await divan.ghazal(n) : undefined
    if (!g) throw notFound()
    return { g }
  },
  head: ({ loaderData: m }) => {
    if (!m) return {}
    const { g } = m
    const first = `${g.bayts[0].l[0]} / ${g.bayts[0].l[1]}`
    const s = seo({
      title: `غزل ${fa(g.n)} حافظ: ${g.bayts[0].l[0]}`,
      description: `${first}. متن کامل غزل ${fa(g.n)} حافظ با معنی بیت به بیت${g.summary ? ' و خلاصهٔ غزل' : ''}.`,
      path: ghazalPath(g.n),
      image: '/media/library/og-hafez.jpg',
    })
    return { ...s, links: [...s.links, NASKH_PRELOAD] }
  },
  component: GhazalRoute,
})

function GhazalRoute() {
  const { g } = Route.useLoaderData()
  const { fal } = Route.useSearch()
  return <GhazalPage g={g} commit={indexMeta.commit} fal={fal === 1} />
}
