import { useState } from 'react'

export function ShareLink({ label = 'رونوشت پیوند' }: { label?: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    const url = window.location.href
    try {
      await navigator.clipboard.writeText(url)
    } catch {
      window.prompt('پیوند:', url)
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button type="button" onClick={() => void copy()} className="glass rounded-full px-4 py-2 text-sm min-h-11 hover:border-gold">
      {copied ? 'کپی شد' : label}
    </button>
  )
}
