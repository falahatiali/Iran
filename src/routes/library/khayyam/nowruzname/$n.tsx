import { createFileRoute, notFound } from '@tanstack/react-router'
import { NASKH_PRELOAD } from '../../../../components/library/head'
import { NowruzSectionPage } from '../../../../components/library/khayyam/NowruzPages'
import { NOWRUZ_COUNT, nowruzPath } from '../../../../data/library/khayyam'
import { nowruz } from '../../../../data/library/khayyam/nowruz-repository'
import { seo } from '../../../../lib/seo'

export const Route = createFileRoute('/library/khayyam/nowruzname/$n')({
  loader: async ({ params }) => {
    const n = Number(params.n)
    const s = Number.isInteger(n) && String(n) === params.n ? await nowruz.section(n) : undefined
    if (!s) throw notFound()
    return { s }
  },
  head: ({ loaderData: m }) => {
    if (!m) return {}
    const b = m.s.blocks[0]
    const line = 'p' in b ? b.p.split(/\s+/).slice(0, 18).join(' ') : `${b.l[0]} / ${b.l[1]}`
    const s = seo({ title: `نوروزنامه، ${m.s.title}`, description: `${line}… متن کامل با معنی و خلاصه.`, path: nowruzPath(m.s.n), image: '/media/library/og-khayyam.jpg' })
    return { ...s, links: [...s.links, NASKH_PRELOAD] }
  },
  component: function Page() {
    return <NowruzSectionPage s={Route.useLoaderData().s} total={NOWRUZ_COUNT} />
  },
})
