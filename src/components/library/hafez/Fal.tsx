import { Link, useNavigate } from '@tanstack/react-router'
import { GHAZAL_COUNT } from '../../../data/library/hafez/paths'

/** Fal-e Hafez as the tradition does it: one ghazal at random. Without JavaScript the link opens the index. */
export function FalButton({ className = 'hf-btn' }: { className?: string }) {
  const navigate = useNavigate()
  return (
    <Link
      className={className}
      to="/library/hafez/ghazals"
      onClick={(e) => {
        e.preventDefault()
        const n = 1 + Math.floor(Math.random() * GHAZAL_COUNT)
        void navigate({ to: '/library/hafez/ghazal/$n', params: { n: String(n) }, search: { fal: 1 } })
      }}
    >
      فال حافظ
    </Link>
  )
}
