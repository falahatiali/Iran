import { createFileRoute } from '@tanstack/react-router'
import { CylinderPage } from '../../components/cylinder/CylinderPage'
import { getCylinder } from '../../server/api'
import { CYLINDER_ALTERNATES, seo } from '../../lib/seo'

export const Route = createFileRoute('/en/cylinder')({
  loader: () => getCylinder(),
  staleTime: Infinity,
  head: () => seo({
    title: 'The Cyrus Cylinder',
    description: 'The Cyrus Cylinder (BM 90920): a Babylonian building inscription, licensed translations, a labeled 3D reconstruction, and a strict split between historical evidence, philosophical interpretation, and modern meaning.',
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
