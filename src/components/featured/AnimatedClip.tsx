import { useReducedMotion } from 'motion/react'
import { useEffect, useRef } from 'react'
import type { Bi, CampaignClip } from '../../data/featured/types'
import type { Locale } from '../../lib/i18n'

/**
 * A rendered clip as a figure. With motion allowed it autoplays (muted, looping) while on screen;
 * with prefers-reduced-motion it shows the still poster and plays only when the reader presses play.
 */
export function AnimatedClip({ clip, caption, locale }: { clip: CampaignClip; caption: Bi; locale: Locale }) {
  const reduce = useReducedMotion() ?? false
  const ref = useRef<HTMLVideoElement>(null)
  const isFa = locale === 'fa'
  useEffect(() => {
    const v = ref.current
    if (!v || reduce || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) void v.play().catch(() => undefined)
      else v.pause()
    }, { threshold: 0.4 })
    io.observe(v)
    return () => io.disconnect()
  }, [reduce])
  return (
    <figure className="mt-8 glass rounded-3xl p-4 md:p-6">
      <video ref={ref} controls muted playsInline loop preload={reduce ? 'none' : 'metadata'} poster={clip.poster[locale]} width={clip.width} height={clip.height} aria-label={caption[locale]} className="w-full h-auto rounded-2xl">
        <source src={clip.webm[locale]} type="video/webm" />
        <source src={clip.mp4[locale]} type="video/mp4" />
        <img src={clip.poster[locale]} alt={caption[locale]} width={clip.width} height={clip.height} className="w-full h-auto rounded-2xl" />
      </video>
      <figcaption className="mt-3 text-sm text-ivory/70 leading-7">
        {caption[locale]}{' '}
        {isFa ? 'بارگیری:' : 'Download:'}{' '}
        <a href={clip.gif[locale]} download className="text-gold hover:underline">GIF</a> · <a href={clip.mp4[locale]} download className="text-gold hover:underline">MP4</a> · <a href={clip.webm[locale]} download className="text-gold hover:underline">WebM</a>
      </figcaption>
    </figure>
  )
}
