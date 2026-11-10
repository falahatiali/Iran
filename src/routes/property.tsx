import { createFileRoute } from '@tanstack/react-router'
import { PropertyPage } from '../components/PropertyPage'
import { PROPERTY_ALTERNATES, seo } from '../lib/seo'

export const Route = createFileRoute('/property')({
  head: () => seo({
    title: 'حقوق مالکیت در تاریخ ایران',
    description: 'شواهد منبع‌دار از مالکیت، ارث، فروش و رهن در تاریخ ایران: لوح‌های تخت‌جمشید، قراردادهای بابل، بیستون و کتاب ساسانی هزار داوری.',
    path: '/property',
    alternates: [...PROPERTY_ALTERNATES],
  }),
  component: () => <PropertyPage locale="fa" />,
})
