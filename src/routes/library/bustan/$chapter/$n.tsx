import { createFileRoute } from '@tanstack/react-router'
import { libraryHead } from '../../../../components/library/head'
import { SectionPage } from '../../../../components/library/saadi/SectionPage'
import { BOOKS, chapterPath, sectionPath } from '../../../../data/library/saadi'
import { saadiSectionTitle } from '../../../../data/library/seoText'
import { loadSection } from '../../../../data/library/saadi/load'
import meta from '../../../../data/library/saadi/text/meta.json'
import { seo } from '../../../../lib/seo'

export const Route = createFileRoute('/library/bustan/$chapter/$n')({
  loader: ({ params }) => loadSection('bustan', params.chapter, params.n),
  head: ({ loaderData: m }) => {
    if (!m) return {}
    const first = m.s.blocks[0]
    const line = 'p' in first ? first.p.split(/\s+/).slice(0, 14).join(' ') : `${first.l[0]} / ${first.l[1]}`
    const title = saadiSectionTitle(BOOKS.bustan.title, m.s.title, m.chapterTitle, first)
    const s = seo({
      title,
      description: `${line}… متن کامل با معنی${'p' in first ? ' بند به بند' : ' بیت به بیت'}${m.s.summary ? ' و خلاصه' : ''}.`,
      path: sectionPath('bustan', m.s.chapter, m.s.n),
      image: '/media/library/og-bustan.jpg',
    })
    return libraryHead(s, {
      crumbs: [{ name: m.chapterTitle, path: chapterPath('bustan', m.s.chapter) }],
      leaf: m.s.title,
      work: { name: title, description: line },
    })
  },
  component: Section,
})

function Section() {
  const { s, chapterTitle, prev, next } = Route.useLoaderData()
  return <SectionPage s={s} chapterTitle={chapterTitle} commit={meta.commit} prev={prev} next={next} />
}
