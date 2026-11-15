import { createFileRoute } from '@tanstack/react-router'
import { MordadPage } from '../../../components/mordad28/MordadPage'
import { page } from '../../../data/mordad28'
import { MORDAD_ALTERNATES, seo } from '../../../lib/seo'

export const Route = createFileRoute('/en/event/28-mordad')({
  // the loader (code-split with the component) reads the page data, so the entry bundle never imports it
  loader: () => ({ title: page.title.en, description: page.description.en }),
  head: ({ loaderData: m }) => (m ? seo({ ...m, path: '/en/event/28-mordad', locale: 'en_GB', alternates: [...MORDAD_ALTERNATES] }) : {}),
  component: function MordadEn() { return <MordadPage locale="en" /> },
})
