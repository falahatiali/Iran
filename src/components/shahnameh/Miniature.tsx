import type { Photo } from '../../data/shahnameh'

/** Every miniature also ships as AVIF beside its WebP (same name, `.avif`): 15–50% smaller for these dense paintings. */
export const avifOf = (webp: string) => webp.replace(/\.webp$/, '.avif')

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
    <picture className="contents">
      <source type="image/avif" srcSet={`${avifOf(photo.src800)} 800w, ${avifOf(photo.src)} ${photo.width}w`} sizes={sizes} />
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
    </picture>
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
