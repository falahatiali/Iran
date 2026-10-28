import { useEffect, useRef, useState } from 'react'

/** Instant input; commits to the URL after `delay` ms of quiet. Back/forward syncs the draft. */
export function useDraftQuery(urlValue: string, commit: (q: string) => void, delay = 300) {
  const [draft, setDraft] = useState(urlValue)
  const commitRef = useRef(commit)
  commitRef.current = commit

  useEffect(() => {
    setDraft(urlValue)
  }, [urlValue])

  useEffect(() => {
    if (draft === urlValue) return
    const t = window.setTimeout(() => commitRef.current(draft), delay)
    return () => window.clearTimeout(t)
  }, [draft, urlValue, delay])

  return [draft, setDraft] as const
}
