import { createFileRoute } from '@tanstack/react-router'
import { DariusPage } from '../../components/darius/DariusPage'
import { DARIUS_ALTERNATES, dariusJsonLd, seo } from '../../lib/seo'

export const Route = createFileRoute('/en/darius')({
  head: () => ({
    ...seo({
      title: 'Darius the Great: sword, contract and property',
      description: 'Animated map of the wars and works of Darius I (522–486 BCE) and a sourced dossier on economy, markets, religion, army and individual liberty through a property-rights lens, keeping evidence, interpretation and modern meaning apart.',
      path: '/en/darius',
      locale: 'en_GB',
      alternates: [...DARIUS_ALTERNATES],
    }),
    scripts: [dariusJsonLd('en')],
  }),
  component: () => <DariusPage locale="en" />,
})
