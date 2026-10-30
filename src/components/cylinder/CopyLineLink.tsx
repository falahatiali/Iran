import { useEffect, useRef, useState } from 'react'
import type { Locale } from '../../lib/i18n'
import { SITE_URL } from '../../lib/seo'
import { lineLinkUrl } from '../../lib/lineLink'

async function copyText(text: string, promptLabel: string): Promise<void> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text)
      return
    }
  } catch {
    /* fall through */
  }
  const ta = document.createElement('textarea')
  ta.value = text
  ta.setAttribute('readonly', '')
  ta.style.position = 'fixed'
  ta.style.opacity = '0'
  document.body.appendChild(ta)
  ta.select()
  let ok: boolean
  try {
    ok = document.execCommand('copy')
  } catch {
    ok = false
  }
  ta.remove()
  if (!ok) window.prompt(promptLabel, text)
}

export function CopyLineLink({ anchor, locale }: { anchor: string; locale: Locale }) {
  const isFa = locale === 'fa'
  const label = isFa ? 'کپی پیوند این سطر' : 'Copy link to this line'
  const [copied, setCopied] = useState(false)
  const timer = useRef<number | undefined>(undefined)
  useEffect(() => () => window.clearTimeout(timer.current), [])

  const onClick = async () => {
    const url = lineLinkUrl(SITE_URL, isFa ? '/cylinder' : '/en/cylinder', anchor)
    await copyText(url, label)
    setCopied(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <span className="inline-flex items-center gap-1">
      <button
        type="button"
        onClick={() => void onClick()}
        aria-label={label}
        title={label}
        className="inline-flex items-center justify-center min-h-11 min-w-11 rounded-full text-ivory/50 hover:text-gold hover:bg-gold/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.5 1.5" />
          <path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.5-1.5" />
        </svg>
      </button>
      <span aria-live="polite" className="text-xs text-turquoise-soft min-w-[3rem]">
        {copied ? (isFa ? 'کپی شد' : 'Copied') : ''}
      </span>
    </span>
  )
}
