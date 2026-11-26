import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { libraryHead } from '../../../../components/library/head'
import { PoemsPage } from '../../../../components/library/hafez/PoemsPage'
import { fa } from '../../../../components/library/hafez/parts'
import { MONTASAB_COUNT, MONTASAB_PATH, montasabPath } from '../../../../data/library/hafez'
import { divan } from '../../../../data/library/hafez/repository'
import { seo } from '../../../../lib/seo'

export const Route = createFileRoute('/library/hafez/montasab/$n')({
  loader: async ({ params }) => {
    const n = Number(params.n)
    const p = Number.isInteger(n) && String(n) === params.n ? await divan.montasab(n) : undefined
    if (!p) throw notFound()
    return { p }
  },
  head: ({ loaderData: m }) => {
    if (!m) return {}
    const first = m.p.bayts.find((b) => 'l' in b)
    const line = first && 'l' in first ? `${first.l[0]} / ${first.l[1]}` : ''
    const title = `شعر منتسب به حافظ، شمارهٔ ${fa(m.p.n)}: ${first && 'l' in first ? first.l[0] : ''}`
    const s = seo({ title, description: `${line}. متن کامل با معنی بیت به بیت.`, path: montasabPath(m.p.n), image: '/media/library/og-hafez.jpg' })
    return libraryHead(s, {
      crumbs: [{ name: 'اشعار منتسب', path: MONTASAB_PATH }],
      leaf: `شمارهٔ ${fa(m.p.n)}`,
      work: { name: title, description: line, author: null },
    })
  },
  component: function Page() {
    const { p } = Route.useLoaderData()
    const prev = p.n > 1 ? p.n - 1 : null
    const next = p.n < MONTASAB_COUNT ? p.n + 1 : null
    return (
      <PoemsPage
        poems={[p]}
        title={`شعر منتسب، شمارهٔ ${fa(p.n)}`}
        one="شعر منتسب"
        ganjoorCat={`montasab/sh${p.n}`}
        crumbMid={<Link to="/library/hafez/montasab">اشعار منتسب</Link>}
        sub={`${fa(p.bayts.length)} بیت${p.metre ? ` · ${p.metre}` : ''} · منسوب به حافظ، بیرون از تصحیح قزوینی و غنی`}
        nav={
          <nav className="hfg-nav" aria-label="شعرهای دیگر">
            {prev ? <Link to="/library/hafez/montasab/$n" params={{ n: String(prev) }} className="hf-btn">→ شمارهٔ {fa(prev)}</Link> : <span />}
            <Link to="/library/hafez/montasab" className="hf-btn">فهرست</Link>
            {next ? <Link to="/library/hafez/montasab/$n" params={{ n: String(next) }} className="hf-btn">شمارهٔ {fa(next)} ←</Link> : <span />}
          </nav>
        }
      />
    )
  },
})
