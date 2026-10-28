import { useEffect, useId, useRef, useState } from 'react'
import type { Locale } from '../../lib/i18n'

const PHOTO = '/media/cyrus-cylinder-daderot-cc0.jpg'
const PHOTO_ATTR = {
  fa: 'عکس واقعی شیء در موزهٔ بریتانیا، دادروت، CC0 ۱.۰ — جایگزین ایستا.',
  en: 'Photograph of the actual object in the British Museum, Daderot, CC0 1.0 — static fallback.',
}

/**
 * Procedural clay barrel at BM 90920 proportions (length ~22.5 cm, max diameter 10 cm).
 * Not a museum scan. No cuneiform is drawn.
 */
export function CylinderViewer({ locale }: { locale: Locale }) {
  const host = useRef<HTMLDivElement>(null)
  const [mode, setMode] = useState<'3d' | 'photo'>('photo')
  const [failed, setFailed] = useState(false)
  const labelId = useId()
  const fa = locale === 'fa'

  useEffect(() => {
    if (failed) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    // Keep the first mobile paint on the museum photo; Three.js is opt-in.
    if (window.matchMedia('(max-width: 640px)').matches) return
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if (!gl) return
    setMode('3d')
  }, [failed])

  useEffect(() => {
    if (mode !== '3d' || failed) return
    const el = host.current
    if (!el) return

    let cancelled = false
    const cleanups: Array<() => void> = []

    void import('three').then((THREE) => {
      if (cancelled || !host.current) return
      const root = host.current
      const scene = new THREE.Scene()
      scene.background = new THREE.Color(0x070d1f)

      const camera = new THREE.PerspectiveCamera(42, root.clientWidth / Math.max(root.clientHeight, 1), 0.1, 40)
      const narrow = root.clientWidth < 640
      const renderer = new THREE.WebGLRenderer({ antialias: !narrow, alpha: false, powerPreference: 'high-performance' })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, narrow ? 1.25 : 1.75))
      renderer.setSize(root.clientWidth, root.clientHeight)
      renderer.domElement.setAttribute('aria-hidden', 'true')
      root.appendChild(renderer.domElement)

      scene.add(new THREE.HemisphereLight(0xf6efe1, 0x1a3478, 1.05))
      const key = new THREE.DirectionalLight(0xffe6b0, 1.35)
      key.position.set(2.2, 1.8, 3)
      scene.add(key)
      const fill = new THREE.DirectionalLight(0x2ec4b6, 0.22)
      fill.position.set(-3, 0.4, 1)
      scene.add(fill)

      // Relative units: height 2.25 ≡ 22.5 cm; max radius 0.5 ≡ 5 cm (diameter 10 cm).
      // Tapered ends ≈ 8 cm diameter → radius 0.4. Barrel bulge, no signs.
      const points: InstanceType<typeof THREE.Vector2>[] = []
      const half = 1.125
      const steps = narrow ? 16 : 24
      for (let i = 0; i <= steps; i++) {
        const t = i / steps
        const y = -half + t * 2.25
        const r = 0.4 + 0.1 * Math.sin(Math.PI * t)
        points.push(new THREE.Vector2(r, y))
      }
      const geo = new THREE.LatheGeometry(points, narrow ? 32 : 48)
      const mat = new THREE.MeshStandardMaterial({
        color: 0xc2a06a,
        roughness: 0.92,
        metalness: 0.02,
      })
      const mesh = new THREE.Mesh(geo, mat)
      mesh.rotation.z = Math.PI / 2
      scene.add(mesh)

      let rotY = 0.35
      let rotX = 0.12
      let dist = 4.2
      let dragging = false
      let lastX = 0
      let lastY = 0
      let visible = true
      let frame = 0

      const applyCam = () => {
        camera.position.set(Math.sin(rotY) * dist, rotX * 1.4, Math.cos(rotY) * dist)
        camera.lookAt(0, 0, 0)
      }
      applyCam()

      const onPointerDown = (e: PointerEvent) => {
        dragging = true
        lastX = e.clientX
        lastY = e.clientY
        renderer.domElement.setPointerCapture(e.pointerId)
        root.focus()
      }
      const onPointerMove = (e: PointerEvent) => {
        if (!dragging) return
        rotY -= (e.clientX - lastX) * 0.008
        rotX = Math.max(-0.9, Math.min(0.9, rotX + (e.clientY - lastY) * 0.006))
        lastX = e.clientX
        lastY = e.clientY
      }
      const onPointerUp = () => { dragging = false }
      const onWheel = (e: WheelEvent) => {
        e.preventDefault()
        dist = Math.max(2.4, Math.min(8, dist + e.deltaY * 0.01))
      }
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'ArrowRight') rotY -= 0.12
        else if (e.key === 'ArrowLeft') rotY += 0.12
        else if (e.key === 'ArrowUp') rotX = Math.min(0.9, rotX + 0.08)
        else if (e.key === 'ArrowDown') rotX = Math.max(-0.9, rotX - 0.08)
        else if (e.key === '+' || e.key === '=') dist = Math.max(2.4, dist - 0.25)
        else if (e.key === '-') dist = Math.min(8, dist + 0.25)
        else if (e.key === '0') { rotY = 0.35; rotX = 0.12; dist = 4.2 }
        else if (e.key === 'f' || e.key === 'F') {
          if (!document.fullscreenElement) root.requestFullscreen?.().catch(() => undefined)
          else document.exitFullscreen?.().catch(() => undefined)
        } else return
        e.preventDefault()
      }
      const resize = () => {
        if (!host.current) return
        camera.aspect = host.current.clientWidth / Math.max(host.current.clientHeight, 1)
        camera.updateProjectionMatrix()
        renderer.setSize(host.current.clientWidth, host.current.clientHeight)
      }

      renderer.domElement.addEventListener('pointerdown', onPointerDown)
      renderer.domElement.addEventListener('pointermove', onPointerMove)
      renderer.domElement.addEventListener('pointerup', onPointerUp)
      renderer.domElement.addEventListener('pointercancel', onPointerUp)
      renderer.domElement.addEventListener('wheel', onWheel, { passive: false })
      root.addEventListener('keydown', onKey)
      window.addEventListener('resize', resize)

      const io = new IntersectionObserver(([entry]) => { visible = entry?.isIntersecting ?? false }, { threshold: 0.05 })
      io.observe(root)
      const onHide = () => { visible = document.visibilityState === 'visible' }
      document.addEventListener('visibilitychange', onHide)

      const tick = () => {
        if (cancelled) return
        frame = requestAnimationFrame(tick)
        if (!visible) return
        if (!dragging) rotY += 0.003
        applyCam()
        renderer.render(scene, camera)
      }
      tick()

      const dispose = () => {
        cancelAnimationFrame(frame)
        io.disconnect()
        document.removeEventListener('visibilitychange', onHide)
        window.removeEventListener('resize', resize)
        root.removeEventListener('keydown', onKey)
        renderer.domElement.removeEventListener('pointerdown', onPointerDown)
        renderer.domElement.removeEventListener('pointermove', onPointerMove)
        renderer.domElement.removeEventListener('pointerup', onPointerUp)
        renderer.domElement.removeEventListener('pointercancel', onPointerUp)
        renderer.domElement.removeEventListener('wheel', onWheel)
        geo.dispose()
        mat.dispose()
        renderer.dispose()
        renderer.domElement.remove()
      }
      if (cancelled) {
        dispose()
        return
      }
      cleanups.push(dispose)
    }).catch(() => { if (!cancelled) setFailed(true) })

    return () => {
      cancelled = true
      for (const fn of cleanups) fn()
    }
  }, [mode, failed])

  const showPhoto = mode === 'photo' || failed

  return (
    <figure className="glass overflow-hidden rounded-3xl">
      <p id={labelId} className="sr-only">
        {fa
          ? 'بازسازی هنری استوانهٔ گلی با تناسب موزهٔ بریتانیا. هیچ میخ‌خطی کشیده نشده است.'
          : 'Artistic reconstruction of a clay cylinder at British Museum proportions. No cuneiform is drawn.'}
      </p>
      {showPhoto ? (
        <img
          src={PHOTO}
          alt={fa ? 'استوانهٔ کوروش در موزهٔ بریتانیا، عکس دادروت' : 'The Cyrus Cylinder in the British Museum, photograph by Daderot'}
          className="w-full aspect-[16/9] object-cover bg-night"
          width={1280}
          height={650}
          decoding="async"
          fetchPriority="high"
        />
      ) : (
        <div
          ref={host}
          className="w-full aspect-[16/9] bg-night touch-none outline-none"
          tabIndex={0}
          role="img"
          aria-labelledby={labelId}
        />
      )}
      <figcaption className="px-5 py-4 text-sm leading-7 text-ivory/75 space-y-2">
        <p className="font-bold text-gold">
          {fa
            ? 'بازسازی هنری — نه اسکن موزه. میخ‌خط ساختگی نیست.'
            : 'Artistic reconstruction — not a museum scan. No invented cuneiform.'}
        </p>
        <p>
          {fa
            ? 'تناسب از کاتالوگ BM 90920: درازای حدود ۲۲٫۵ سانتی‌متر، قطر بیشینه ۱۰ سانتی‌متر، دو سر باریک‌تر. اسکن رسمی موزه در این گذر یافت نشد. مدل گردشگر Sketchfab به‌کار نرفت.'
            : 'Proportions from BM 90920: about 22.5 cm long, 10 cm maximum diameter, tapered ends. No official museum scan was found this pass. A visitor Sketchfab mesh was not used.'}
        </p>
        <p className="text-ivory/50">{PHOTO_ATTR[locale]}</p>
        <p className="text-ivory/50">
          {fa
            ? 'روی صفحهٔ باریک ابتدا عکس موزه می‌آید؛ دکمهٔ سه‌بعدی مدل را بار می‌کند. پس از تمرکز روی نما: پیکان‌ها چرخش، +/− بزرگ‌نمایی، F تمام‌صفحه، ۰ بازنشانی. لمس و کشیدن هم کار می‌کند.'
            : 'On small screens the museum photograph loads first; the 3D button fetches the model. With the viewer focused: arrows rotate, +/− zoom, F fullscreen, 0 reset. Drag and touch work too.'}
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          <button type="button" className="glass rounded-full px-4 py-2 min-h-11 hover:border-gold" onClick={() => { setFailed(false); setMode('3d') }}>
            {fa ? 'نمای سه‌بعدی' : '3D view'}
          </button>
          <button type="button" className="glass rounded-full px-4 py-2 min-h-11 hover:border-gold" onClick={() => setMode('photo')}>
            {fa ? 'عکس واقعی موزه' : 'Museum photograph'}
          </button>
        </div>
      </figcaption>
    </figure>
  )
}
