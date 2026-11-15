import { useEffect, useRef } from 'react'

/**
 * Reading-progress hairline under the header. Browsers with scroll-driven animations run it entirely in CSS
 * (`.scroll-progress` in app.css); the rest get one passive, frame-throttled scroll listener.
 */
export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = bar.current
    if (!el || CSS.supports('animation-timeline: scroll()')) return
    let frame = 0
    const paint = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      el.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(paint) }
    paint()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(frame) }
  }, [])
  return <div ref={bar} className="scroll-progress h-0.5 origin-right bg-gradient-to-l from-turquoise via-gold to-crimson" aria-hidden="true" />
}
