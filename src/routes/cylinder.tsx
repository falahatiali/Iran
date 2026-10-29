import { createFileRoute } from '@tanstack/react-router'
import { CylinderPage } from '../components/cylinder/CylinderPage'
import { getCylinder } from '../server/api'
import { CYLINDER_ALTERNATES, seo } from '../lib/seo'

export const Route = createFileRoute('/cylinder')({
  loader: () => getCylinder(),
  staleTime: Infinity,
  head: () => seo({
    title: 'استوانهٔ کوروش',
    description: 'استوانهٔ کوروش (BM 90920): متن کامل راجرز ۱۹۱۲، فتوگرامتری شیء واقعی، و خوانش مالکیت و آزادی سطر به سطر، جدا از شواهد تاریخی و معنای فرهنگی امروز.',
    path: '/cylinder',
    alternates: [...CYLINDER_ALTERNATES],
  }),
  component: CylinderFa,
})

function CylinderFa() {
  const data = Route.useLoaderData()
  return <CylinderPage locale="fa" data={data} />
}
