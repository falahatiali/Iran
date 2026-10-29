import { createFileRoute } from '@tanstack/react-router'
import { CylinderPage } from '../../components/cylinder/CylinderPage'
import { getCylinder } from '../../server/api'
import { CYLINDER_ALTERNATES, seo } from '../../lib/seo'

export const Route = createFileRoute('/en/cylinder')({
  loader: () => getCylinder(),
  staleTime: Infinity,
  head: () => seo({
    title: 'The Cyrus Cylinder',
    description: 'The Cyrus Cylinder (BM 90920): complete Rogers 1912 text, photogrammetry of the actual object, and a line-by-line property and liberty reading, kept apart from historical evidence and modern meaning.',
    path: '/en/cylinder',
    locale: 'en_GB',
    alternates: [...CYLINDER_ALTERNATES],
  }),
  component: CylinderEn,
})

function CylinderEn() {
  const data = Route.useLoaderData()
  return <CylinderPage locale="en" data={data} />
}
