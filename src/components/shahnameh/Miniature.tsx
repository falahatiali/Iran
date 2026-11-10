import type { Photo } from '../../data/shahnameh'

export function Miniature({
  photo,
  priority = false,
  className = '',
  sizes = '(max-width: 800px) 100vw, 720px',
  decorative = false,
}: {
  photo: Photo
  priority?: boolean
  className?: string
  sizes?: string
  decorative?: boolean
}) {
  return (
    <img
      src={photo.src800}
      srcSet={`${photo.src800} 800w, ${photo.src} ${photo.width}w`}
      sizes={sizes}
      width={photo.width}
      height={photo.height}
      alt={decorative ? '' : photo.alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      className={className}
    />
  )
}

export function PhotoCredit({ photo }: { photo: Photo }) {
  return (
    <p className="text-xs text-ivory/55 leading-7 no-justify">
      {photo.titleFa} — {photo.manuscript}. {photo.artist}.{' '}
      <a href={photo.page} className="underline decoration-gold/40 hover:text-gold" target="_blank" rel="noopener noreferrer">
        منبع نگاره در ویکی‌انبار ({photo.license})
      </a>
    </p>
  )
}
