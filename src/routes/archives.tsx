import { createFileRoute } from '@tanstack/react-router'
import { ArchivesPage } from '../components/archives/ArchivesPage'
import { getArchives } from '../server/api'
import { ARCHIVES_ALTERNATES, seo } from '../lib/seo'

export const Route = createFileRoute('/archives')({
  loader: () => getArchives(),
  staleTime: Infinity,
  head: () => seo({
    title: 'بایگانی بارو و خزانهٔ تخت‌جمشید',
    description: 'الواح بارو و خزانهٔ تخت‌جمشید: کشف ۱۹۳۳–۳۸، زبان‌ها، جیره، کار زنان و کودکان، سفر، مالیات جنسی و نقره — هر ادعا با منبع، جدا از تفسیر فلسفی.',
    path: '/archives',
    alternates: [...ARCHIVES_ALTERNATES],
  }),
  component: ArchivesFa,
})

function ArchivesFa() {
  const data = Route.useLoaderData()
  return <ArchivesPage locale="fa" data={data} />
}
