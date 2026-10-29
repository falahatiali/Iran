import { useId, useState } from 'react'
import type { Locale } from '../../lib/i18n'

/** Photogrammetry of the actual BM 90920. CC BY 4.0, @artfletch on Sketchfab. Not an official museum scan. */
const SKETCHFAB = {
  uid: 'f8d0a48f63f44bb49323b623853f6592',
  embed: 'https://sketchfab.com/models/f8d0a48f63f44bb49323b623853f6592/embed?autostart=1&ui_theme=dark&ui_infos=1&ui_watermark=0',
  page: 'https://sketchfab.com/3d-models/the-cyrus-cylinder-f8d0a48f63f44bb49323b623853f6592',
  license: 'https://creativecommons.org/licenses/by/4.0/',
}

const PHOTOS = [
  {
    src: '/media/cyrus-cylinder-daderot-cc0.jpg',
    fa: 'نمای سه‌چهارم، موزهٔ بریتانیا. عکس دادروت، CC0 ۱.۰.',
    en: 'Three-quarter view, British Museum. Photograph by Daderot, CC0 1.0.',
    attr: 'Daderot / CC0 1.0',
  },
  {
    src: '/media/cyrus-cylinder-peel-1.jpg',
    fa: 'نمای طولی با میخ‌خط. عکس مایک پیل، CC BY-SA ۴.۰.',
    en: 'Long view with cuneiform. Photograph by Mike Peel, CC BY-SA 4.0.',
    attr: 'Mike Peel / CC BY-SA 4.0',
  },
  {
    src: '/media/cyrus-cylinder-peel-2.jpg',
    fa: 'نمای دیگر از همان شیء. عکس مایک پیل، CC BY-SA ۴.۰.',
    en: 'Another face of the same object. Photograph by Mike Peel, CC BY-SA 4.0.',
    attr: 'Mike Peel / CC BY-SA 4.0',
  },
  {
    src: '/media/cyrus-cylinder-prioryman-front.jpg',
    fa: 'نمای روبرو. عکس Prioryman، CC BY-SA ۴.۰.',
    en: 'Front face. Photograph by Prioryman, CC BY-SA 4.0.',
    attr: 'Prioryman / CC BY-SA 4.0',
  },
  {
    src: '/media/cyrus-cylinder-peel-4.jpg',
    fa: 'نمای نزدیک از گل و میخ‌خط. عکس مایک پیل، CC BY-SA ۴.۰.',
    en: 'Close view of clay and cuneiform. Photograph by Mike Peel, CC BY-SA 4.0.',
    attr: 'Mike Peel / CC BY-SA 4.0',
  },
] as const

export function CylinderViewer({ locale }: { locale: Locale }) {
  const fa = locale === 'fa'
  const [mode, setMode] = useState<'3d' | 'photo'>('3d')
  const [i, setI] = useState(0)
  const photo = PHOTOS[i]!
  const labelId = useId()
  const n = PHOTOS.length

  return (
    <figure className="glass overflow-hidden rounded-3xl">
      <p id={labelId} className="sr-only">
        {fa
          ? 'مدل سه‌بعدی فتوگرامتری شیء واقعی BM 90920 در موزهٔ بریتانیا، با مجوز CC BY ۴.۰.'
          : 'Photogrammetric 3D model of the actual BM 90920 in the British Museum, licensed CC BY 4.0.'}
      </p>
      {mode === '3d' ? (
        <div className="relative w-full aspect-[16/10] bg-night">
          <iframe
            title={fa ? 'استوانهٔ کوروش، فتوگرامتری شیء واقعی BM 90920' : 'The Cyrus Cylinder, photogrammetry of the actual BM 90920'}
            src={SKETCHFAB.embed}
            className="absolute inset-0 h-full w-full border-0"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      ) : (
        <div className="relative w-full aspect-[16/10] bg-night">
          <img
            src={photo.src}
            alt={fa ? photo.fa : photo.en}
            className="h-full w-full object-contain bg-night"
            width={1600}
            height={1000}
            decoding="async"
          />
          <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
            <button type="button" className="glass rounded-full px-4 py-2 min-h-11" onClick={() => setI((p) => (p + n - 1) % n)} aria-label={fa ? 'عکس قبلی' : 'Previous photograph'}>
              {fa ? '‹ قبلی' : '‹ Prev'}
            </button>
            <span className="glass rounded-full px-4 py-2 min-h-11 tabular-nums" dir="ltr">{i + 1}/{n}</span>
            <button type="button" className="glass rounded-full px-4 py-2 min-h-11" onClick={() => setI((p) => (p + 1) % n)} aria-label={fa ? 'عکس بعدی' : 'Next photograph'}>
              {fa ? 'بعدی ›' : 'Next ›'}
            </button>
          </div>
        </div>
      )}
      <figcaption className="px-5 py-4 text-sm leading-7 text-ivory/75 space-y-2">
        <p className="font-bold text-gold">
          {fa
            ? 'شیء واقعی — فتوگرامتری BM 90920، نه بازسازی هنری.'
            : 'The actual object — photogrammetry of BM 90920, not an artistic reconstruction.'}
        </p>
        <p>
          {fa
            ? <>مدل سه‌بعدی: ۱۵۹ عکس، نوامبر ۲۰۲۴، Reality Capture، <a className="text-gold hover:underline" href={SKETCHFAB.page}>@artfletch روی Sketchfab</a>. مجوز <a className="text-gold hover:underline" href={SKETCHFAB.license}>CC BY ۴.۰</a>. اسکن رسمی موزهٔ بریتانیا نیست؛ فتوگرامتری همان استوانه در ویترین موزه است. چرخش، بزرگ‌نمایی و دیدن هر سوی شیء در نمایشگر Sketchfab.</>
            : <>3D model: 159 photographs, November 2024, Reality Capture, <a className="text-gold hover:underline" href={SKETCHFAB.page}>@artfletch on Sketchfab</a>. License <a className="text-gold hover:underline" href={SKETCHFAB.license}>CC BY 4.0</a>. Not an official British Museum scan; it is photogrammetry of the cylinder in the museum case. Rotate, zoom, and see every side in the Sketchfab viewer.</>}
        </p>
        {mode === 'photo' && <p className="text-ivory/55">{fa ? photo.fa : photo.en}</p>}
        <div className="flex flex-wrap gap-2 pt-1">
          <button type="button" className="glass rounded-full px-4 py-2 min-h-11 hover:border-gold" onClick={() => setMode('3d')}>
            {fa ? 'نمای سه‌بعدی واقعی' : 'Real 3D view'}
          </button>
          <button type="button" className="glass rounded-full px-4 py-2 min-h-11 hover:border-gold" onClick={() => setMode('photo')}>
            {fa ? 'عکس‌های دارای مجوز از هر سو' : 'Licensed photographs, every face'}
          </button>
        </div>
      </figcaption>
    </figure>
  )
}
