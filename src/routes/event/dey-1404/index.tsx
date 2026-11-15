import { createFileRoute } from '@tanstack/react-router'
import { DeyPage } from '../../../components/dey1404/DeyPage'
import { hero } from '../../../data/dey1404'
import { seo } from '../../../lib/seo'

export const Route = createFileRoute('/event/dey-1404/')({
  // the loader is code-split with the component, so the memorial data stays out of the entry bundle
  loader: () => ({ title: `جاویدنامان ${hero.title} ${hero.year}`, description: hero.description }),
  head: ({ loaderData: m }) => (m ? seo({ ...m, path: '/event/dey-1404', image: '/media/dey1404/og.jpg' }) : {}),
  component: DeyPage,
})
