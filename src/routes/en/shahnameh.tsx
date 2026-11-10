import { createFileRoute } from '@tanstack/react-router'
import { EnglishLanding } from '../../components/shahnameh/EnglishLanding'
import { landing } from '../../data/shahnameh'
import { SHAHNAMEH_ALTERNATES, seo } from '../../lib/seo'

export const Route = createFileRoute('/en/shahnameh')({
  head: () => seo({
    title: landing.titleEn,
    description: landing.descriptionEn,
    path: '/en/shahnameh',
    locale: 'en_GB',
    image: '/media/shahnameh/gayumars-court.webp',
    alternates: [...SHAHNAMEH_ALTERNATES],
  }),
  component: EnglishLanding,
})
