import { createFileRoute } from '@tanstack/react-router'
import { RhymeMap } from '../../../components/library/Emblems'
import { NASKH_PRELOAD } from '../../../components/library/head'
import { PoemsPage } from '../../../components/library/hafez/PoemsPage'
import { fa } from '../../../components/library/hafez/parts'
import { QASAID_PATH } from '../../../data/library/hafez'
import { divan } from '../../../data/library/hafez/repository'
import { seo } from '../../../lib/seo'

export const Route = createFileRoute('/library/hafez/qasaid')({
  loader: async () => ({ poems: await divan.qasaid() }),
  head: () => {
    const s = seo({ title: 'قصاید حافظ با معنی', description: 'سه قصیدهٔ دیوان حافظ در گنجور، در مدح شاه شجاع، قوام‌الدین محمد صاحب‌عیار و شاه شیخ ابواسحاق، با معنی بیت به بیت و خلاصه.', path: QASAID_PATH, image: '/media/library/og-hafez.jpg' })
    return { ...s, links: [...s.links, NASKH_PRELOAD] }
  },
  component: function Page() {
    const { poems } = Route.useLoaderData()
    return (
      <PoemsPage
        poems={poems}
        title="قصاید حافظ"
        one="قصیده"
        ganjoorCat="ghaside"
        sub={`${fa(poems.length)} قصیده به روایت گنجور، با معنی هر بیت`}
        emblem={<RhymeMap form="qasida" count={poems[0].bayts.length} caption="قصیده: یک قافیه از بیت نخست تا بیت آخر؛ رشتهٔ زر از مصراع دوم همهٔ بیت‌ها می‌گذرد." />}
      />
    )
  },
})
