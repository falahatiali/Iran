import { createFileRoute } from '@tanstack/react-router'
import { CarrhaeRoute } from '../../../components/carrhae/CarrhaeRoute'
import { page } from '../../../data/carrhae'
import { CARRHAE_ALTERNATES, seo } from '../../../lib/seo'

export const Route = createFileRoute('/en/battle/carrhae')({
  // the loader (code-split with the component) reads the page data, so the entry bundle never imports it
  loader: () => ({ title: page.title.en, description: page.description.en }),
  head: ({ loaderData: m }) => (m ? seo({ ...m, path: '/en/battle/carrhae', locale: 'en_GB', image: '/media/carrhae/battle-en.png', alternates: [...CARRHAE_ALTERNATES] }) : {}),
  component: function CarrhaeEn() { return <CarrhaeRoute locale="en" /> },
})
