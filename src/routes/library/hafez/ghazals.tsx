import { createFileRoute } from '@tanstack/react-router'
import { NASKH_PRELOAD } from '../../../components/library/head'
import { GhazalsPage } from '../../../components/library/hafez/GhazalsPage'
import { GHAZALS_PATH } from '../../../data/library/hafez'
import { divan } from '../../../data/library/hafez/repository'
import { seo } from '../../../lib/seo'

interface Search {
  letter?: string
}

export const Route = createFileRoute('/library/hafez/ghazals')({
  validateSearch: (s: Record<string, unknown>): Search => ({
    letter: typeof s.letter === 'string' && /^[\u0600-\u06FF]$/.test(s.letter) ? s.letter : undefined,
  }),
  loader: async () => ({ ghazals: (await divan.index()).ghazals }),
  head: () => {
    const s = seo({
      title: 'غزلیات حافظ: فهرست ۴۹۵ غزل با معنی',
      description: 'فهرست همهٔ ۴۹۵ غزل حافظ به روایت گنجور، با مطلع، ردیف و شمار بیت‌ها؛ جست‌وجو در مطلع و ردیف و فهرست حرف به حرف. هر غزل با معنی بیت به بیت.',
      path: GHAZALS_PATH,
      image: '/media/library/og-hafez.jpg',
    })
    return { ...s, links: [...s.links, NASKH_PRELOAD] }
  },
  component: GhazalsRoute,
})

function GhazalsRoute() {
  const { ghazals } = Route.useLoaderData()
  const { letter } = Route.useSearch()
  return <GhazalsPage ghazals={ghazals} letter={letter} />
}
