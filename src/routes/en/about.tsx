import { createFileRoute } from '@tanstack/react-router'
import { AboutPage } from '../../components/AboutPage'
import { ABOUT_ALTERNATES, seo } from '../../lib/seo'

export const Route = createFileRoute('/en/about')({
  head: () => seo({
    title: 'Iran: the land of the free and the noble — About & methodology',
    description: 'Purpose: rereading Iranian history by the standard of individual liberty and private property; methodology: three separate layers, source hierarchy, certainty labels, citation and corrections policy.',
    path: '/en/about',
    locale: 'en_GB',
    alternates: [...ABOUT_ALTERNATES],
  }),
  component: () => <AboutPage locale="en" />,
})
