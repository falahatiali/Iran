import { createFileRoute } from '@tanstack/react-router'
import { loadPlace, placeHead, PlaceView } from '../../../components/place/placeRoute'

export const Route = createFileRoute('/en/place/$slug')({
  // loader and component are code-split together, so the place data stays out of the entry bundle
  loader: ({ params }) => ({ slug: loadPlace(params.slug).slug, head: placeHead(params.slug, 'en') }),
  head: ({ loaderData }) => loaderData?.head ?? {},
  component: function Page() { return <PlaceView slug={Route.useLoaderData().slug} locale="en" /> },
})
