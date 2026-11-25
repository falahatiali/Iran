import { createFileRoute } from '@tanstack/react-router'
import { NASKH_PRELOAD } from '../../../../components/library/head'
import { ChapterPage } from '../../../../components/library/saadi/ChapterPage'
import { BOOKS, chapterPath } from '../../../../data/library/saadi'
import { loadChapter } from '../../../../data/library/saadi/load'
import { seo } from '../../../../lib/seo'

export const Route = createFileRoute('/library/bustan/$chapter/')({
  loader: ({ params }) => loadChapter('bustan', params.chapter),
  head: ({ loaderData: m }) => {
    if (!m) return {}
    const s = seo({
      title: `${m.chapter.title} · ${BOOKS.bustan.title}`,
      description: `${BOOKS.bustan.title}، ${m.chapter.title}: فهرست ${m.chapter.sections.length.toLocaleString('fa-IR')} ${BOOKS.bustan.unit} با متن کامل و معنی.`,
      path: chapterPath('bustan', m.chapter.slug),
      image: '/media/library/og-bustan.jpg',
    })
    return { ...s, links: [...s.links, NASKH_PRELOAD] }
  },
  component: Chapter,
})

function Chapter() {
  const { chapter, prev, next } = Route.useLoaderData()
  return <ChapterPage book="bustan" chapter={chapter} prev={prev} next={next} />
}
