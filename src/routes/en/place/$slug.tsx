import { createFileRoute } from '@tanstack/react-router'
import { loadPlace, placeHead, PlaceView } from '../../../components/place/placeRoute'

export const Route = createFileRoute('/en/place/$slug')({
  loader: ({ params }) => loadPlace(params.slug).slug,
  head: ({ params }) => placeHead(params.slug, 'en'),
  component: function Page() { return <PlaceView slug={Route.useLoaderData()} locale="en" /> },
})
