import { useState } from 'react'

export function CiteButton({
  text,
  label,
  copiedLabel,
}: {
  text: string
  label: string
  copiedLabel: string
}) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      window.prompt(label, text)
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      type="button"
      onClick={() => void copy()}
      className="glass rounded-full px-4 py-2 text-sm min-h-11 hover:border-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      aria-label={label}
    >
      {copied ? copiedLabel : label}
    </button>
  )
}

export function ShareHashButton({
  hash,
  label,
  copiedLabel,
}: {
  hash: string
  label: string
  copiedLabel: string
}) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    const url = `${window.location.origin}${window.location.pathname}#${hash}`
    try {
      await navigator.clipboard.writeText(url)
    } catch {
      window.prompt(label, url)
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      type="button"
      onClick={() => void copy()}
      className="glass rounded-full px-4 py-2 text-sm min-h-11 hover:border-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      aria-label={label}
    >
      {copied ? copiedLabel : label}
    </button>
  )
}
