import { createFileRoute } from '@tanstack/react-router'
import { PropertyPage } from '../../components/PropertyPage'
import { PROPERTY_ALTERNATES, seo } from '../../lib/seo'

export const Route = createFileRoute('/en/property')({
  head: () => seo({
    title: 'Property rights in the history of Iran',
    description: 'Sourced evidence for ownership, inheritance, sale and pledge in Iranian history: the Persepolis tablets, Babylonian contracts, Bisotun and the Sasanian Book of a Thousand Judgements.',
    path: '/en/property',
    locale: 'en_GB',
    alternates: [...PROPERTY_ALTERNATES],
  }),
  component: () => <PropertyPage locale="en" />,
})
