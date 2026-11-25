import { createFileRoute } from '@tanstack/react-router'
import { NASKH_PRELOAD } from '../../../../components/library/head'
import { SectionPage } from '../../../../components/library/saadi/SectionPage'
import { BOOKS, sectionPath } from '../../../../data/library/saadi'
import { loadSection } from '../../../../data/library/saadi/load'
import meta from '../../../../data/library/saadi/text/meta.json'
import { seo } from '../../../../lib/seo'

export const Route = createFileRoute('/library/golestan/$chapter/$n')({
  loader: ({ params }) => loadSection('golestan', params.chapter, params.n),
  head: ({ loaderData: m }) => {
    if (!m) return {}
    const first = m.s.blocks[0]
    const line = 'p' in first ? first.p.split(/\s+/).slice(0, 14).join(' ') : `${first.l[0]} / ${first.l[1]}`
    const s = seo({
      title: `${m.s.title} · ${m.chapterTitle} · ${BOOKS.golestan.title}`,
      description: `${line}… متن کامل با معنی${'p' in first ? ' بند به بند' : ' بیت به بیت'}${m.s.summary ? ' و خلاصه' : ''}.`,
      path: sectionPath('golestan', m.s.chapter, m.s.n),
      image: '/media/library/og-golestan.jpg',
    })
    return { ...s, links: [...s.links, NASKH_PRELOAD] }
  },
  component: Section,
})

function Section() {
  const { s, chapterTitle, prev, next } = Route.useLoaderData()
  return <SectionPage s={s} chapterTitle={chapterTitle} commit={meta.commit} prev={prev} next={next} />
}
