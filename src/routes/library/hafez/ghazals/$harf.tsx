import { createFileRoute, notFound } from '@tanstack/react-router'
import { NASKH_PRELOAD } from '../../../../components/library/head'
import { GhazalsPage } from '../../../../components/library/hafez/GhazalsPage'
import { fa } from '../../../../components/library/hafez/parts'
import { letterPath } from '../../../../data/library/hafez'
import { divan } from '../../../../data/library/hafez/repository'
import { seo } from '../../../../lib/seo'

export const Route = createFileRoute('/library/hafez/ghazals/$harf')({
  loader: async ({ params }) => {
    const letters = await divan.letters()
    const entry = letters.find((l) => l.slug === params.harf)
    const ghazals = entry && (await divan.letter(entry.slug))
    if (!entry || !ghazals) throw notFound()
    return { letters, current: { entry, ghazals } }
  },
  head: ({ loaderData: m }) => {
    if (!m) return {}
    const { entry } = m.current
    const s = seo({
      title: `غزل‌های حافظ، حرف «${entry.letter}»: ${fa(entry.count)} غزل با معنی`,
      description: `${fa(entry.count)} غزل حافظ که مصراع نخستشان به «${entry.letter}» ختم می‌شود، از «${entry.mutla[0]}»؛ هر کدام با متن گنجور و معنی بیت به بیت.`,
      path: letterPath(entry.slug),
      image: '/media/library/og-hafez.jpg',
    })
    return { ...s, links: [...s.links, NASKH_PRELOAD] }
  },
  component: function Page() {
    const { letters, current } = Route.useLoaderData()
    return <GhazalsPage letters={letters} current={current} />
  },
})
