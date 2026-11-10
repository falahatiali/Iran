import type { ReactNode } from 'react'
import './shahnameh.css'

export function ShahnamehShell({ children }: { children: ReactNode }) {
  return (
    <div className="shn-world">
      <div className="shn-dust" aria-hidden="true" />
      {children}
    </div>
  )
}
