import { createFileRoute } from '@tanstack/react-router'
import { MordadPage } from '../../components/mordad28/MordadPage'
import { page } from '../../data/mordad28'
import { MORDAD_ALTERNATES, seo } from '../../lib/seo'

export const Route = createFileRoute('/event/28-mordad')({
  // the loader (code-split with the component) reads the page data, so the entry bundle never imports it
  loader: () => ({ title: page.title.fa, description: page.description.fa }),
  head: ({ loaderData: m }) => (m ? seo({ ...m, path: '/event/28-mordad', alternates: [...MORDAD_ALTERNATES] }) : {}),
  component: function MordadFa() { return <MordadPage locale="fa" /> },
})
