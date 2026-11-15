import { createFileRoute } from '@tanstack/react-router'
import { LandingPage } from '../../components/shahnameh/LandingPage'
import { landing } from '../../data/shahnameh'
import { SHAHNAMEH_ALTERNATES, seo } from '../../lib/seo'

export const Route = createFileRoute('/shahnameh/')({
  // the loader is code-split with the component, so the landing data stays out of the entry bundle
  loader: () => ({ title: landing.title, description: landing.description }),
  head: ({ loaderData: m }) => (m ? seo({
    ...m,
    path: '/shahnameh',
    image: '/media/shahnameh/gayumars-court.webp',
    alternates: [...SHAHNAMEH_ALTERNATES],
  }) : {}),
  component: LandingPage,
})
