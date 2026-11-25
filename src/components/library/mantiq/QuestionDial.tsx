import { Link } from '@tanstack/react-router'
import { MANTIQ_SECTIONS } from '../../../data/library/mantiq/sections'
import './question-dial.css'

const fa = (n: number) => n.toLocaleString('fa-IR')
const QUESTIONS = MANTIQ_SECTIONS.filter((s) => /^q-\d+$/.test(s.slug))

/** The birds' twenty-two questions as one arc of beads; the current one glows, each bead opens its question. */
export function QuestionDial({ slug }: { slug: string }) {
  const k = QUESTIONS.findIndex((q) => q.slug === slug)
  if (k < 0) return null
  const last = QUESTIONS.length - 1
  return (
    <nav className="mqq" aria-label="بیست‌ودو پرسش مرغان">
      <p className="mqq-k">
        <span className="mqq-who">مرغی می‌پرسد، هدهد پاسخ می‌دهد</span>
        <b>پرسش {fa(k + 1)} از {fa(QUESTIONS.length)}</b>
      </p>
      <ol className="mqq-arc">
        {QUESTIONS.map((q, i) => (
          <li key={q.slug} style={{ ['--y' as string]: `${Math.round(-Math.sin((Math.PI * i) / last) * 30)}px` }}>
            <Link
              to="/library/mantiq-al-tayr/$section"
              params={{ section: q.slug }}
              className={i === k ? 'is-cur' : i < k ? 'is-past' : undefined}
              aria-current={i === k ? 'page' : undefined}
              title={q.title}
              aria-label={`پرسش ${fa(i + 1)}: ${q.title}`}
            >
              {fa(i + 1)}
            </Link>
          </li>
        ))}
      </ol>
      <p className="mqq-t">{QUESTIONS[k].title.replace(/^پرسش [۰-۹]+:\s*/, '')}</p>
    </nav>
  )
}
