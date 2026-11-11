import { createFileRoute } from '@tanstack/react-router'
import { MashrutehPage } from '../../components/mashruteh/MashrutehPage'
import { page } from '../../data/mashruteh'
import { MASHRUTEH_ALTERNATES, seo } from '../../lib/seo'

export const Route = createFileRoute('/event/mashruteh')({
  head: () => seo({ title: page.title.fa, description: page.description.fa, path: '/event/mashruteh', image: '/media/mashruteh/first-majles.webp', alternates: [...MASHRUTEH_ALTERNATES] }),
  component: function MashrutehFa() { return <MashrutehPage locale="fa" /> },
})
