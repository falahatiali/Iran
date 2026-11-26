import { createFileRoute } from '@tanstack/react-router'
import { libraryHead } from '../../../components/library/head'
import { BookPage, summarise } from '../../../components/library/saadi/BookPage'
import { BOOKS, bookPath } from '../../../data/library/saadi'
import { loadLanding } from '../../../data/library/saadi/load'
import { seo } from '../../../lib/seo'

export const Route = createFileRoute('/library/bustan/')({
  loader: async () => {
    const { index, opening } = await loadLanding('bustan')
    return { summary: summarise(index, opening) }
  },
  head: () => {
    const s = seo({ title: `${BOOKS.bustan.title} · کتابخانهٔ ادب پارسی`, description: BOOKS.bustan.description, path: bookPath('bustan'), image: '/media/library/og-bustan.jpg' })
    return libraryHead(s)
  },
  component: Landing,
})

function Landing() {
  return <BookPage summary={Route.useLoaderData().summary} />
}
