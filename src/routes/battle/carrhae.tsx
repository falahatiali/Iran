import { createFileRoute } from '@tanstack/react-router'
import { CarrhaeRoute } from '../../components/carrhae/CarrhaeRoute'
import { page } from '../../data/carrhae'
import { CARRHAE_ALTERNATES, seo } from '../../lib/seo'

export const Route = createFileRoute('/battle/carrhae')({
  // the loader (code-split with the component) reads the page data, so the entry bundle never imports it
  loader: () => ({ title: page.title.fa, description: page.description.fa }),
  head: ({ loaderData: m }) => (m ? seo({ ...m, path: '/battle/carrhae', image: '/media/carrhae/battle-fa.png', alternates: [...CARRHAE_ALTERNATES] }) : {}),
  component: function CarrhaeFa() { return <CarrhaeRoute locale="fa" /> },
})
