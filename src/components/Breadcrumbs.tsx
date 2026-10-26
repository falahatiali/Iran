import { Link } from '@tanstack/react-router'

export interface Crumb { label: string; to?: '/dynasty/$slug' | '/timeline' | '/about'; params?: { slug: string } }

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="مسیر صفحه" className="text-sm text-ivory/60 mb-6">
      <ol className="flex flex-wrap items-center gap-2">
        <li><Link to="/" className="hover:text-gold transition-colors inline-block py-2 px-2 min-h-11 min-w-11">خانه</Link></li>
        {items.map((c) => (
          <li key={c.label} className="flex items-center gap-2">
            <span aria-hidden="true" className="text-gold/50">‹</span>
            {c.to ? <Link to={c.to} params={c.params} className="hover:text-gold transition-colors inline-block py-2 px-2 min-h-11 min-w-11">{c.label}</Link> : <span aria-current="page" className="text-ivory/90 inline-block py-2">{c.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
