import { createFileRoute } from '@tanstack/react-router'
import { libraryHead } from '../../../components/library/head'
import { RubaiyatPage, STATUS_FILTERS, type StatusFilter } from '../../../components/library/khayyam/RubaiyatPage'
import { RUBAIYAT_PATH } from '../../../data/library/khayyam'
import { rubaiyat } from '../../../data/library/khayyam/repository'
import { seo } from '../../../lib/seo'

interface Search {
  theme?: string
  status?: StatusFilter
}

export const Route = createFileRoute('/library/khayyam/rubaiyat')({
  validateSearch: (s: Record<string, unknown>): Search => ({
    theme: typeof s.theme === 'string' && /^t[1-8]$/.test(s.theme) ? s.theme : undefined,
    status: typeof s.status === 'string' && s.status in STATUS_FILTERS && s.status !== 'all' ? (s.status as StatusFilter) : undefined,
  }),
  loader: async () => {
    const [edition, notes] = await Promise.all([rubaiyat.hedayat(), rubaiyat.notes()])
    return { edition, notes }
  },
  head: () => {
    const s = seo({
      title: 'ترانه‌های خیام: ۱۴۳ رباعی به گزینش صادق هدایت',
      description: 'متن کامل ۱۴۳ رباعی «ترانه‌های خیام» صادق هدایت در هشت دفتر، با نشان رباعی‌های مشکوک به نظر هدایت، همتای هر رباعی در گزینش فروغی و غنی، و معنی و شرح.',
      path: RUBAIYAT_PATH,
      image: '/media/library/og-khayyam.jpg',
    })
    return libraryHead(s)
  },
  component: RubaiyatRoute,
})

function RubaiyatRoute() {
  const { edition, notes } = Route.useLoaderData()
  const { theme, status } = Route.useSearch()
  return <RubaiyatPage edition={edition} notes={notes} theme={theme} status={status ?? 'all'} />
}
