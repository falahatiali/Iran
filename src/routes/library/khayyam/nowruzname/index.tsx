import { createFileRoute } from '@tanstack/react-router'
import { NASKH_PRELOAD } from '../../../../components/library/head'
import { NowruzPage } from '../../../../components/library/khayyam/NowruzPages'
import { NOWRUZ_PATH } from '../../../../data/library/khayyam'
import { nowruz } from '../../../../data/library/khayyam/nowruz-repository'
import { seo } from '../../../../lib/seo'

export const Route = createFileRoute('/library/khayyam/nowruzname/')({
  loader: async () => ({ index: await nowruz.index() }),
  head: () => {
    const s = seo({ title: 'نوروزنامه، منسوب به خیام: متن کامل با معنی', description: 'نوروزنامه، رسالهٔ فارسی دربارهٔ نوروز و آیین پادشاهان ایران، منسوب به عمر خیام؛ ۴۲ بخش با متن گنجور، معنی هر بند و خلاصه، و گزارش مستند بحث انتساب آن.', path: NOWRUZ_PATH, image: '/media/library/og-khayyam.jpg' })
    return { ...s, links: [...s.links, NASKH_PRELOAD] }
  },
  component: function Page() {
    return <NowruzPage index={Route.useLoaderData().index} />
  },
})
