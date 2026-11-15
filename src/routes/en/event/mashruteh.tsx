import { createFileRoute } from '@tanstack/react-router'
import { MashrutehPage } from '../../../components/mashruteh/MashrutehPage'
import { page } from '../../../data/mashruteh'
import { MASHRUTEH_ALTERNATES, seo } from '../../../lib/seo'

export const Route = createFileRoute('/en/event/mashruteh')({
  // the loader (code-split with the component) reads the page data, so the entry bundle never imports it
  loader: () => ({ title: page.title.en, description: page.description.en }),
  head: ({ loaderData: m }) => (m ? seo({ ...m, path: '/en/event/mashruteh', locale: 'en_GB', image: '/media/mashruteh/first-majles.webp', alternates: [...MASHRUTEH_ALTERNATES] }) : {}),
  component: function MashrutehEn() { return <MashrutehPage locale="en" /> },
})
