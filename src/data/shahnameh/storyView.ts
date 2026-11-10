/** Which pane a Shahnameh story page should open on. */
export type StoryView = 'tale' | 'poem'

export type StoryViewSearch = {
  view?: 'poem'
}

/** Keep ?view=poem; anything else (including the default tale) is dropped. */
export function parseStoryViewSearch(search: Record<string, unknown>): StoryViewSearch {
  return search.view === 'poem' ? { view: 'poem' } : {}
}

/**
 * Open the full poem when the URL asks for it:
 * `?view=poem`, `#poem`, or a verse/scene deep link (`#v-…`, `#scene-…`).
 */
export function storyViewFromLocation(search: string, hash: string): StoryView {
  const query = search.startsWith('?') ? search.slice(1) : search
  if (new URLSearchParams(query).get('view') === 'poem') return 'poem'
  let id = hash.startsWith('#') ? hash.slice(1) : hash
  try {
    id = decodeURIComponent(id)
  } catch {
    /* keep the raw hash if it is not URI-encoded */
  }
  if (id === 'poem' || id.startsWith('v-') || id.startsWith('scene-')) return 'poem'
  return 'tale'
}
