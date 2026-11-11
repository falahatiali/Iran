import { createFileRoute } from '@tanstack/react-router'
import { DeyPage } from '../../../components/dey1404/DeyPage'
import { hero } from '../../../data/dey1404'
import { seo } from '../../../lib/seo'

export const Route = createFileRoute('/event/dey-1404/')({
  head: () => seo({ title: `جاویدنامان ${hero.title} ${hero.year}`, description: hero.description, path: '/event/dey-1404', image: '/media/dey1404/og.jpg' }),
  component: DeyPage,
})
