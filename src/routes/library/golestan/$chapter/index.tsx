import { createFileRoute } from '@tanstack/react-router'
import { libraryHead } from '../../../../components/library/head'
import { ChapterPage } from '../../../../components/library/saadi/ChapterPage'
import { BOOKS, chapterPath } from '../../../../data/library/saadi'
import { loadChapter } from '../../../../data/library/saadi/load'
import { seo } from '../../../../lib/seo'

export const Route = createFileRoute('/library/golestan/$chapter/')({
  loader: ({ params }) => loadChapter('golestan', params.chapter),
  head: ({ loaderData: m }) => {
    if (!m) return {}
    const s = seo({
      title: `${m.chapter.title} · ${BOOKS.golestan.title}`,
      description: `${BOOKS.golestan.title}، ${m.chapter.title}: فهرست ${m.chapter.sections.length.toLocaleString('fa-IR')} ${BOOKS.golestan.unit} با متن کامل و معنی.`,
      path: chapterPath('golestan', m.chapter.slug),
      image: '/media/library/og-golestan.jpg',
    })
    return libraryHead(s, { leaf: m.chapter.title, work: { name: `${m.chapter.title} · ${BOOKS.golestan.title}` } })
  },
  component: Chapter,
})

function Chapter() {
  const { chapter, prev, next } = Route.useLoaderData()
  return <ChapterPage book="golestan" chapter={chapter} prev={prev} next={next} />
}
