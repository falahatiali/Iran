import { createFileRoute } from '@tanstack/react-router'
import { MashrutehPage } from '../../../components/mashruteh/MashrutehPage'
import { page } from '../../../data/mashruteh'
import { MASHRUTEH_ALTERNATES, seo } from '../../../lib/seo'

export const Route = createFileRoute('/en/event/mashruteh')({
  head: () => seo({ title: page.title.en, description: page.description.en, path: '/en/event/mashruteh', locale: 'en_GB', image: '/media/mashruteh/first-majles.webp', alternates: [...MASHRUTEH_ALTERNATES] }),
  component: function MashrutehEn() { return <MashrutehPage locale="en" /> },
})
