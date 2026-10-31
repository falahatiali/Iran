import { useEffect, useState } from 'react'
import type { Locale } from '../../lib/i18n'
import { CarrhaeBattle } from './CarrhaeBattle'
import { CarrhaePage } from './CarrhaePage'

/** The page, or with `?render` just the bare 1280×720 diagram for scripts/render-carrhae-clip.py. */
export function CarrhaeRoute({ locale }: { locale: Locale }) {
  const [render, setRender] = useState(false)
  useEffect(() => { setRender(new URLSearchParams(window.location.search).has('render')) }, [])
  if (render) return <div style={{ position: 'fixed', inset: 0, zIndex: 2147483647, background: '#1b1611' }}><CarrhaeBattle locale={locale} render id="carrhae-render" /></div>
  return <CarrhaePage locale={locale} />
}
