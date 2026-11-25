import { createFileRoute } from '@tanstack/react-router'
import { NASKH_PRELOAD } from '../../../../components/library/head'
import { MontasabPage } from '../../../../components/library/hafez/MontasabPage'
import { MONTASAB_PATH } from '../../../../data/library/hafez'
import { divan } from '../../../../data/library/hafez/repository'
import { seo } from '../../../../lib/seo'

export const Route = createFileRoute('/library/hafez/montasab/')({
  loader: async () => ({ poems: await divan.montasabIndex() }),
  head: () => {
    const s = seo({ title: 'اشعار منتسب به حافظ، با معنی', description: 'شعرهایی که گنجور منسوب به حافظ گرد آورده و در تصحیح قزوینی و غنی نیامده‌اند، هر کدام با متن کامل و معنی بیت به بیت.', path: MONTASAB_PATH, image: '/media/library/og-hafez.jpg' })
    return { ...s, links: [...s.links, NASKH_PRELOAD] }
  },
  component: function Page() {
    return <MontasabPage poems={Route.useLoaderData().poems} />
  },
})
