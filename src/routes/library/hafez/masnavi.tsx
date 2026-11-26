import { createFileRoute } from '@tanstack/react-router'
import { RhymeMap } from '../../../components/library/Emblems'
import { libraryHead } from '../../../components/library/head'
import { PoemsPage } from '../../../components/library/hafez/PoemsPage'
import { fa } from '../../../components/library/hafez/parts'
import { MASNAVI_PATH } from '../../../data/library/hafez'
import { divan } from '../../../data/library/hafez/repository'
import { seo } from '../../../lib/seo'

export const Route = createFileRoute('/library/hafez/masnavi')({
  loader: async () => ({ poems: await divan.masnavi() }),
  head: () => {
    const s = seo({ title: 'مثنوی‌های حافظ: «الا ای آهوی وحشی» و ساقی‌نامه، با معنی', description: 'دو مثنوی دیوان حافظ در گنجور، «الا ای آهوی وحشی» و ساقی‌نامه، با معنی بیت به بیت و خلاصه.', path: MASNAVI_PATH, image: '/media/library/og-hafez.jpg' })
    return libraryHead(s)
  },
  component: function Page() {
    const { poems } = Route.useLoaderData()
    const bayts = poems.reduce((n, p) => n + p.bayts.length, 0)
    return (
      <PoemsPage
        poems={poems}
        title="مثنوی‌های حافظ"
        one="مثنوی"
        ganjoorCat="masnavi"
        sub={`«الا ای آهوی وحشی» و ساقی‌نامه · ${fa(bayts)} بیت به روایت گنجور، با معنی هر بیت`}
        emblem={<RhymeMap form="masnavi" count={poems[0].bayts.length} caption="مثنوی: هر بیت قافیهٔ خودش را دارد؛ دو مصراع هر سطر با کمانی به هم می‌رسند." />}
      />
    )
  },
})
