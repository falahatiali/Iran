import { lazy, type ComponentType } from 'react'

/**
 * A component in its own chunk that the server still renders inline. The server starts loading it as soon as this
 * module is evaluated, so by render time it is resolved and lands in place in the prerendered HTML (a plain
 * `React.lazy` would suspend there and stream the markup to the end of the document). In the browser it stays a
 * lazy chunk: React keeps the server HTML of its Suspense boundary until the chunk arrives, then hydrates it.
 * Always render it inside `<Suspense>`.
 */
export function lazyPiece<P extends object>(load: () => Promise<ComponentType<P>>): ComponentType<P> {
  let loaded: ComponentType<P> | undefined
  const fetch = () => load().then((c) => (loaded = c))
  const Lazy = lazy(() => fetch().then((c) => ({ default: c })))
  if (import.meta.env.SSR) void fetch()
  function Piece(props: P) {
    const C = loaded
    return C ? <C {...props} /> : <Lazy {...props} />
  }
  return Piece
}
