import { createFileRoute } from '@tanstack/react-router'
import { CarrhaeRoute } from '../../../components/carrhae/CarrhaeRoute'
import { page } from '../../../data/carrhae'
import { CARRHAE_ALTERNATES, seo } from '../../../lib/seo'

export const Route = createFileRoute('/en/battle/carrhae')({
  head: () => seo({ title: page.title.en, description: page.description.en, path: '/en/battle/carrhae', locale: 'en_GB', alternates: [...CARRHAE_ALTERNATES] }),
  component: function CarrhaeEn() { return <CarrhaeRoute locale="en" /> },
})
