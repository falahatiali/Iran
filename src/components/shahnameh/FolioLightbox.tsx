import { useEffect } from 'react'
import type { Photo } from '../../data/shahnameh'

export function FolioLightbox({
  photo,
  open,
  onClose,
}: {
  photo: Photo
  open: boolean
  onClose: () => void
}) {
  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4" role="dialog" aria-modal="true" aria-label={photo.titleFa}>
      <button type="button" className="absolute inset-0 bg-night/88" aria-label="بستن نگاره" onClick={onClose} />
      <div className="relative z-10 max-w-[92vw] max-h-[92svh] flex flex-col items-center">
        <img
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          className="max-h-[82svh] w-auto max-w-full object-contain rounded-2xl shadow-2xl"
        />
        <p className="mt-3 text-xs text-ivory/70 text-center max-w-xl no-justify">{photo.titleFa} — {photo.manuscript}</p>
        <button type="button" onClick={onClose} className="mt-3 rounded-full border border-gold/50 px-5 py-2 text-gold-bright min-h-11 hover:bg-gold/10">
          بستن
        </button>
      </div>
    </div>
  )
}
