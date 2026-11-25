import { createFileRoute } from '@tanstack/react-router'
import { NASKH_PRELOAD } from '../../../components/library/head'
import { BookPage, summarise } from '../../../components/library/saadi/BookPage'
import { BOOKS, bookPath } from '../../../data/library/saadi'
import { loadLanding } from '../../../data/library/saadi/load'
import { seo } from '../../../lib/seo'

export const Route = createFileRoute('/library/golestan/')({
  loader: async () => {
    const { index, opening } = await loadLanding('golestan')
    return { summary: summarise(index, opening) }
  },
  head: () => {
    const s = seo({ title: `${BOOKS.golestan.title} · کتابخانهٔ ادب پارسی`, description: BOOKS.golestan.description, path: bookPath('golestan'), image: '/media/library/og-golestan.jpg' })
    return { ...s, links: [...s.links, NASKH_PRELOAD] }
  },
  component: Landing,
})

function Landing() {
  return <BookPage summary={Route.useLoaderData().summary} />
}
