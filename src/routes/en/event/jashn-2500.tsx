import { createFileRoute } from '@tanstack/react-router'
import { JashnPage } from '../../../components/jashn2500/JashnPage'
import { page } from '../../../data/jashn2500'
import { JASHN2500_ALTERNATES, seo } from '../../../lib/seo'

export const Route = createFileRoute('/en/event/jashn-2500')({
  head: () => seo({ title: page.title.en, description: page.description.en, path: '/en/event/jashn-2500', locale: 'en_GB', image: '/media/jashn2500/pasargadae-7.webp', alternates: [...JASHN2500_ALTERNATES] }),
  component: function JashnEn() { return <JashnPage locale="en" /> },
})
