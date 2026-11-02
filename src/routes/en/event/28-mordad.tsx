import { createFileRoute } from '@tanstack/react-router'
import { MordadPage } from '../../../components/mordad28/MordadPage'
import { page } from '../../../data/mordad28'
import { MORDAD_ALTERNATES, seo } from '../../../lib/seo'

export const Route = createFileRoute('/en/event/28-mordad')({
  head: () => seo({ title: page.title.en, description: page.description.en, path: '/en/event/28-mordad', locale: 'en_GB', alternates: [...MORDAD_ALTERNATES] }),
  component: function MordadEn() { return <MordadPage locale="en" /> },
})
