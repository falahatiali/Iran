import { createFileRoute } from '@tanstack/react-router'
import { MordadPage } from '../../components/mordad28/MordadPage'
import { page } from '../../data/mordad28'
import { MORDAD_ALTERNATES, seo } from '../../lib/seo'

export const Route = createFileRoute('/event/28-mordad')({
  head: () => seo({ title: page.title.fa, description: page.description.fa, path: '/event/28-mordad', alternates: [...MORDAD_ALTERNATES] }),
  component: function MordadFa() { return <MordadPage locale="fa" /> },
})
