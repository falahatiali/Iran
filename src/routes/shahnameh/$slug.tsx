import { createFileRoute, notFound, stripSearchParams } from '@tanstack/react-router'
import { ComingSoonPage, StoryPage } from '../../components/shahnameh/StoryPage'
import { getEntry, isStory, photoById } from '../../data/shahnameh'
import { parseStoryViewSearch } from '../../data/shahnameh/storyView'
import { seo } from '../../lib/seo'

export const Route = createFileRoute('/shahnameh/$slug')({
  validateSearch: parseStoryViewSearch,
  search: { middlewares: [stripSearchParams({})] },
  loader: ({ params }) => {
    const entry = getEntry(params.slug)
    if (!entry) throw notFound()
    // resolved here because the loader is code-split: head must not import the Shahnameh data itself
    const image = entry.heroId ? photoById[entry.heroId]?.src : '/media/shahnameh/gayumars-court.webp'
    return { entry, image }
  },
  head: ({ loaderData: d }) => {
    if (!d) return {}
    const { entry: loaderData, image } = d
    if (loaderData.status === 'ready') { // not isStory(): head must not import the data module
      return seo({
        title: `${loaderData.title} در شاهنامه`,
        description: loaderData.summary,
        path: `/shahnameh/${loaderData.slug}`,
        image,
        alternates: [
          { hrefLang: 'fa', path: `/shahnameh/${loaderData.slug}` },
          { hrefLang: 'en', path: '/en/shahnameh' },
          { hrefLang: 'x-default', path: `/shahnameh/${loaderData.slug}` },
        ],
      })
    }
    return seo({
      title: `${loaderData.title} (به‌زودی)`,
      description: loaderData.summary,
      path: `/shahnameh/${loaderData.slug}`,
      image,
      noindex: true,
    })
  },
  component: function ShahnamehStoryRoute() {
    const { entry } = Route.useLoaderData()
    return isStory(entry) ? <StoryPage story={entry} /> : <ComingSoonPage entry={entry} />
  },
})
