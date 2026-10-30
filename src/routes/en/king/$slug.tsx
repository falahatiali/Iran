import { createFileRoute, redirect } from '@tanstack/react-router'
import { getRuler } from '../../../server/api'
import { getFeaturedKing } from '../../../data/featured'
import { isFeaturedKing } from '../../../data/featured/slugs'
import { FeaturedDossier } from '../../../components/featured/FeaturedDossier'
import { PageTransition } from '../../../components/Reveal'
import { Shamseh } from '../../../components/Ornament'
import { Epithets } from '../../../components/Epithets'
import { kingAlternates, kingJsonLd, seo } from '../../../lib/seo'

/** English mirror of a king page. Only featured kings have English content; others go to the Persian page. */
export const Route = createFileRoute('/en/king/$slug')({
  beforeLoad: ({ params }) => {
    if (!isFeaturedKing(params.slug)) throw redirect({ to: '/king/$slug', params: { slug: params.slug }, statusCode: 302 })
  },
  loader: ({ params }) => getRuler({ data: params.slug }),
  head: ({ params }) => {
    const fk = getFeaturedKing(params.slug)
    if (!fk) return {}
    return {
      ...seo({ title: fk.title.en, description: fk.lede.en.slice(0, 300), path: `/en/king/${params.slug}`, locale: 'en_GB', alternates: kingAlternates(params.slug), image: fk.shareImage }),
      scripts: [kingJsonLd({ locale: 'en', slug: params.slug, headline: fk.title.en, name: fk.name.en, sameAs: fk.wikipedia })],
    }
  },
  component: KingPageEn,
})

function KingPageEn() {
  const k = Route.useLoaderData()
  const fk = getFeaturedKing(k.ruler.id)
  if (!fk) return null
  return (
    <PageTransition>
      <article lang="en" dir="ltr">
        <header className="relative overflow-hidden border-b border-gold/15">
          <div className="absolute inset-0" style={{ background: `radial-gradient(700px 380px at 80% 10%, ${k.dynasty.accent}66, transparent 70%)` }} />
          <Shamseh className="absolute -right-12 -top-12 sm:-right-24 sm:-top-24 w-64 h-64 sm:w-96 sm:h-96 opacity-15" spin />
          <div className="relative mx-auto max-w-5xl px-4 py-14 md:py-20">
            <nav aria-label="Breadcrumb" className="text-sm text-ivory/60 mb-6">
              <a href="/" className="hover:text-gold inline-block py-2 min-h-11">Home</a>
              <span className="text-gold/50 mx-2" aria-hidden="true">/</span>
              <a href={`/dynasty/${k.dynasty.slug}`} hrefLang="fa" className="hover:text-gold inline-block py-2 min-h-11">{fk.dynastyName.en}</a>
              <span className="text-gold/50 mx-2" aria-hidden="true">/</span>
              <span aria-current="page">{fk.name.en}</span>
            </nav>
            <p className="text-turquoise-soft">{fk.dynastyName.en}</p>
            <h1 className="text-5xl md:text-7xl font-black mt-2 text-gilded leading-tight">{fk.name.en}</h1>
            <p className="text-ivory/60 mt-2" lang="fa" dir="rtl">{k.ruler.name}</p>
            <Epithets id={k.ruler.id} locale="en" />
            <dl className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="glass rounded-2xl p-4"><dt className="text-xs text-ivory/50">Reign</dt><dd className="font-bold text-gold-bright mt-1">{fk.reign.en}</dd></div>
              <div className="glass rounded-2xl p-4"><dt className="text-xs text-ivory/50">Dynasty</dt><dd className="font-bold mt-1">{fk.dynastyName.en}</dd></div>
              <div className="glass rounded-2xl p-4"><dt className="text-xs text-ivory/50">Persian page</dt><dd className="mt-1"><a href={`/king/${k.ruler.id}`} hrefLang="fa" className="text-gold hover:underline min-h-11 inline-flex items-center">فارسی</a></dd></div>
            </dl>
          </div>
        </header>
        <div className="mx-auto max-w-5xl px-4 py-14">
          <FeaturedDossier king={fk} locale="en" />
        </div>
      </article>
    </PageTransition>
  )
}
