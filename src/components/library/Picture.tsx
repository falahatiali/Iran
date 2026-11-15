import type { ImgHTMLAttributes } from 'react'

/** AVIF with a WebP fallback at several widths: `${base}-${w}.avif|webp`.
 * Width and height reserve the box so nothing shifts when the image arrives. */
export function Picture({
  base,
  widths,
  width,
  height,
  sizes,
  alt,
  priority = false,
  className,
  imgClassName,
  ...rest
}: {
  base: string
  widths: readonly number[]
  width: number
  height: number
  sizes: string
  alt: string
  priority?: boolean
  className?: string
  imgClassName?: string
} & Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'width' | 'height' | 'sizes' | 'alt' | 'className'>) {
  const set = (ext: string) => widths.map((w) => `${base}-${w}.${ext} ${w}w`).join(', ')
  const fallback = `${base}-${widths[Math.min(1, widths.length - 1)]}.webp`
  return (
    <picture className={className}>
      <source type="image/avif" srcSet={set('avif')} sizes={sizes} />
      <source type="image/webp" srcSet={set('webp')} sizes={sizes} />
      <img
        src={fallback}
        width={width}
        height={height}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding={priority ? 'sync' : 'async'}
        className={imgClassName}
        {...rest}
      />
    </picture>
  )
}
