import { createFileRoute, notFound } from '@tanstack/react-router'
import { libraryHead } from '../../../../components/library/head'
import { NowruzSectionPage } from '../../../../components/library/khayyam/NowruzPages'
import { NOWRUZ_COUNT, NOWRUZ_PATH, nowruzPath } from '../../../../data/library/khayyam'
import { nowruz } from '../../../../data/library/khayyam/nowruz-repository'
import { opening } from '../../../../data/library/seoText'
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
    const title = m.s.title === 'حکایت' ? `حکایت نوروزنامه: ${opening(b)}` : `نوروزنامه، ${m.s.title}`
    const s = seo({ title, description: `${line}… متن کامل با معنی و خلاصه.`, path: nowruzPath(m.s.n), image: '/media/library/og-khayyam.jpg' })
    return libraryHead(s, { crumbs: [{ name: 'نوروزنامه', path: NOWRUZ_PATH }], leaf: m.s.title, work: { name: title, description: line, author: null, partOf: { name: 'نوروزنامه', path: NOWRUZ_PATH, sameAs: 'https://www.wikidata.org/wiki/Q5957813' } } })
  },
  component: function Page() {
    return <NowruzSectionPage s={Route.useLoaderData().s} total={NOWRUZ_COUNT} />
  },
})
