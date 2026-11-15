import { createFileRoute } from '@tanstack/react-router'
import { MashrutehPage } from '../../components/mashruteh/MashrutehPage'
import { page } from '../../data/mashruteh'
import { MASHRUTEH_ALTERNATES, seo } from '../../lib/seo'

export const Route = createFileRoute('/event/mashruteh')({
  // the loader (code-split with the component) reads the page data, so the entry bundle never imports it
  loader: () => ({ title: page.title.fa, description: page.description.fa }),
  head: ({ loaderData: m }) => (m ? seo({ ...m, path: '/event/mashruteh', image: '/media/mashruteh/first-majles.webp', alternates: [...MASHRUTEH_ALTERNATES] }) : {}),
  component: function MashrutehFa() { return <MashrutehPage locale="fa" /> },
})
