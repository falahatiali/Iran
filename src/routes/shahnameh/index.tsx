import { createFileRoute } from '@tanstack/react-router'
import { LandingPage } from '../../components/shahnameh/LandingPage'
import { landing } from '../../data/shahnameh'
import { SHAHNAMEH_ALTERNATES, seo } from '../../lib/seo'

export const Route = createFileRoute('/shahnameh/')({
  head: () => seo({
    title: landing.title,
    description: landing.description,
    path: '/shahnameh',
    image: '/media/shahnameh/gayumars-court.webp',
    alternates: [...SHAHNAMEH_ALTERNATES],
  }),
  component: LandingPage,
})
