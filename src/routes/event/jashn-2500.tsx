import { createFileRoute } from '@tanstack/react-router'
import { JashnPage } from '../../components/jashn2500/JashnPage'
import { page } from '../../data/jashn2500'
import { JASHN2500_ALTERNATES, seo } from '../../lib/seo'

export const Route = createFileRoute('/event/jashn-2500')({
  head: () => seo({ title: page.title.fa, description: page.description.fa, path: '/event/jashn-2500', image: '/media/jashn2500/pasargadae-7.webp', alternates: [...JASHN2500_ALTERNATES] }),
  component: function JashnFa() { return <JashnPage locale="fa" /> },
})
