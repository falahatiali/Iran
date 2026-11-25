import { createFileRoute } from '@tanstack/react-router'
import { Shamseh } from '../../../components/library/Emblems'
import { NASKH_PRELOAD } from '../../../components/library/head'
import { PoemsPage } from '../../../components/library/hafez/PoemsPage'
import { MOQADDAME_PATH } from '../../../data/library/hafez'
import { divan } from '../../../data/library/hafez/repository'
import { seo } from '../../../lib/seo'

export const Route = createFileRoute('/library/hafez/moqaddame')({
  loader: async () => ({ poems: await divan.moqaddame() }),
  head: () => {
    const s = seo({ title: 'مقدمهٔ جمع‌آورندهٔ دیوان حافظ، با معنی', description: 'مقدمه‌ای که در نسخه‌ها پیش از دیوان حافظ آمده است، به روایت گنجور، با معنی بند به بند و خلاصه.', path: MOQADDAME_PATH, image: '/media/library/og-hafez.jpg' })
    return { ...s, links: [...s.links, NASKH_PRELOAD] }
  },
  component: function Page() {
    const { poems } = Route.useLoaderData()
    return (
      <PoemsPage
        poems={poems}
        title="مقدمهٔ جمع‌آورندهٔ دیوان"
        one="مقدمه"
        ganjoorCat="dibache"
        numbered={false}
        sub="نثری آمیخته با شعر که در نسخه‌ها پیش از غزل‌ها آمده است، به روایت گنجور، با معنی هر بند"
        emblem={<Shamseh caption="شمسه، خورشیدی که نسخه‌های مذهّب با آن آغاز می‌شوند." />}
      />
    )
  },
})
