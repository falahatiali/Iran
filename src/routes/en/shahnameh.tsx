import { createFileRoute } from '@tanstack/react-router'
import { EnglishLanding } from '../../components/shahnameh/EnglishLanding'
import { landing } from '../../data/shahnameh'
import { SHAHNAMEH_ALTERNATES, seo } from '../../lib/seo'

export const Route = createFileRoute('/en/shahnameh')({
  // the loader is code-split with the component, so the landing data stays out of the entry bundle
  loader: () => ({ title: landing.titleEn, description: landing.descriptionEn }),
  head: ({ loaderData: m }) => (m ? seo({
    ...m,
    path: '/en/shahnameh',
    locale: 'en_GB',
    image: '/media/shahnameh/gayumars-court.webp',
    alternates: [...SHAHNAMEH_ALTERNATES],
  }) : {}),
  component: EnglishLanding,
})
