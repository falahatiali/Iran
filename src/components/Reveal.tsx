import type { CSSProperties, ReactNode } from 'react'

/**
 * Fade-and-rise as the block scrolls into view, in CSS only (scroll-driven animation, see `.reveal` in app.css).
 * Server-rendered content is never hidden waiting for JavaScript, so it can paint (and count as LCP) at once;
 * browsers without scroll timelines, and readers who prefer reduced motion, simply see it still.
 */
export function Reveal({ children, delay = 0, className, y = 28 }: { children: ReactNode; delay?: number; className?: string; y?: number }) {
  const style = { '--reveal-y': `${y}px`, '--reveal-delay': delay } as CSSProperties
  return <div className={className ? `reveal ${className}` : 'reveal'} style={style}>{children}</div>
}

/** A short fade on client-side navigation only (`.page-in` in app.css); the first, server-rendered paint is never faded. */
export function PageTransition({ children }: { children: ReactNode }) {
  return <div className="page-in">{children}</div>
}
