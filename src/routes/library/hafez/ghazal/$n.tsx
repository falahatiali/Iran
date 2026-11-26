import { createFileRoute, notFound } from '@tanstack/react-router'
import { libraryHead } from '../../../../components/library/head'
import { GhazalPage } from '../../../../components/library/hafez/GhazalPage'
import { fa } from '../../../../components/library/hafez/parts'
import { GHAZALS_PATH, ghazalPath } from '../../../../data/library/hafez'
import indexMeta from '../../../../data/library/hafez/text/meta.json'
import { relatedGhazals } from '../../../../data/library/hafez/related'
import { divan } from '../../../../data/library/hafez/repository'
import { seo } from '../../../../lib/seo'

export const Route = createFileRoute('/library/hafez/ghazal/$n')({
  validateSearch: (s: Record<string, unknown>): { fal?: 1 } => (s.fal === 1 || s.fal === '1' ? { fal: 1 } : {}),
  loader: async ({ params }) => {
    const n = Number(params.n)
    const g = Number.isInteger(n) && String(n) === params.n ? await divan.ghazal(n) : undefined
    if (!g) throw notFound()
    const [sharh, themes, index] = await Promise.all([divan.sharh(n), divan.themes(), divan.index()])
    const rel = relatedGhazals(themes, n)
    const firsts = new Map(index.ghazals.map((e) => [e.n, e.first[0]]))
    return { g, sharh, related: { theme: rel.theme, items: rel.items.map((r) => ({ n: r.n, first: firsts.get(r.n) ?? '' })) } }
  },
  head: ({ loaderData: m }) => {
    if (!m) return {}
    const { g } = m
    const first = `${g.bayts[0].l[0]} / ${g.bayts[0].l[1]}`
    const s = seo({
      title: `غزل ${fa(g.n)} حافظ: ${g.bayts[0].l[0]}`,
      description: `${first}. متن کامل غزل ${fa(g.n)} حافظ با معنی بیت به بیت${g.summary ? ' و خلاصهٔ غزل' : ''}${m.sharh ? '، و شرحی کوتاه و مستند از نکته‌های شارحان' : ''}.`,
      path: ghazalPath(g.n),
      image: '/media/library/og-hafez.jpg',
    })
    return libraryHead(s, {
      crumbs: [{ name: 'غزلیات', path: GHAZALS_PATH }],
      leaf: `غزل ${fa(g.n)}`,
      work: { name: `غزل ${fa(g.n)} حافظ: ${g.bayts[0].l[0]}`, genre: 'غزل', position: g.n, description: first },
    })
  },
  component: GhazalRoute,
})

function GhazalRoute() {
  const { g, sharh, related } = Route.useLoaderData()
  const { fal } = Route.useSearch()
  return <GhazalPage g={g} commit={indexMeta.commit} fal={fal === 1} sharh={sharh} related={related} />
}
