import { createFileRoute } from '@tanstack/react-router'
import { CarrhaeRoute } from '../../components/carrhae/CarrhaeRoute'
import { page } from '../../data/carrhae'
import { CARRHAE_ALTERNATES, seo } from '../../lib/seo'

export const Route = createFileRoute('/battle/carrhae')({
  head: () => seo({ title: page.title.fa, description: page.description.fa, path: '/battle/carrhae', alternates: [...CARRHAE_ALTERNATES] }),
  component: function CarrhaeFa() { return <CarrhaeRoute locale="fa" /> },
})
