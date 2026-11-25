import { createFileRoute, redirect } from '@tanstack/react-router'
import { NASKH_PRELOAD } from '../../../../components/library/head'
import { GhazalsPage } from '../../../../components/library/hafez/GhazalsPage'
import { GHAZALS_PATH } from '../../../../data/library/hafez'
import { divan } from '../../../../data/library/hafez/repository'
import { seo } from '../../../../lib/seo'

export const Route = createFileRoute('/library/hafez/ghazals/')({
  /** the old ?letter= links now have pages of their own */
  beforeLoad: async ({ search }) => {
    const letter = (search as Record<string, unknown>).letter
    if (typeof letter !== 'string') return
    const hit = (await divan.letters()).find((l) => l.letter === letter)
    if (hit) throw redirect({ to: '/library/hafez/ghazals/$harf', params: { harf: hit.slug }, statusCode: 301 })
  },
  loader: async () => {
    const [letters, sharh] = await Promise.all([divan.letters(), divan.sharhIndex()])
    return { letters, sharh }
  },
  head: () => {
    const s = seo({
      title: 'غزلیات حافظ: فهرست ۴۹۵ غزل با معنی',
      description: 'فهرست همهٔ ۴۹۵ غزل حافظ به روایت گنجور، حرف به حرف، با مطلع، ردیف و شمار بیت‌ها و جست‌وجو در همهٔ دیوان. هر غزل با معنی بیت به بیت.',
      path: GHAZALS_PATH,
      image: '/media/library/og-hafez.jpg',
    })
    return { ...s, links: [...s.links, NASKH_PRELOAD] }
  },
  component: function Page() {
    const { letters, sharh } = Route.useLoaderData()
    return <GhazalsPage letters={letters} sharh={sharh} />
  },
})
