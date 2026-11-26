import { createFileRoute, notFound, redirect } from '@tanstack/react-router'
import { MantiqSectionPage } from '../../../components/library/MantiqSectionPage'
import { libraryHead } from '../../../components/library/head'
import { mantiq } from '../../../data/library/mantiq'
import { groupTitle, legacySection, loadMantiqNotes, loadMantiqText, sectionBySlug, sectionPath } from '../../../data/library/mantiq/sections'
import { seo } from '../../../lib/seo'

export const Route = createFileRoute('/library/mantiq-al-tayr/$section')({
  // text and notes are one lazy chunk each per section, so a page carries only its own verses
  loader: async ({ params }) => {
    const meta = sectionBySlug(params.section)
    if (!meta) {
      const moved = legacySection(params.section)
      if (moved) throw redirect({ to: '/library/mantiq-al-tayr/$section', params: { section: moved.slug }, statusCode: 301 })
      throw notFound()
    }
    const [text, notes] = await Promise.all([loadMantiqText(meta.slug), loadMantiqNotes(meta.slug)])
    if (!text) throw notFound()
    const first = text.parts[0]?.couplets[0]
    return {
      meta,
      text,
      notes,
      title: `${meta.title} · ${mantiq.title} عطار`,
      description: `${mantiq.title} عطار، ${groupTitle(meta.group)}: ${meta.title}. متن کامل ${meta.coupletCount.toLocaleString('fa-IR')} بیت با معنی هر بیت.${first ? ` «${first.a} / ${first.b}»` : ''}`,
      path: sectionPath(meta.slug),
    }
  },
  head: ({ loaderData: m }) => {
    if (!m) return {}
    const s = seo({ title: m.title, description: m.description, path: m.path, image: '/media/library/og-mantiq-al-tayr.jpg' })
    return libraryHead(s, { leaf: m.meta.title, work: { name: m.title, description: m.description } })
  },
  component: SectionRoute,
})

function SectionRoute() {
  const { meta, text, notes } = Route.useLoaderData()
  return <MantiqSectionPage meta={meta} text={text} notes={notes} />
}
