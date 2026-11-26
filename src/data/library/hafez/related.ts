/** «غزل‌های هم‌مضمون»: neighbours on the site's own theme map (text/themes.json, see scripts/hafez-themes.py).
 * Two ghazals are close when their theme-word counts point the same way (cosine similarity). */
import type { ThemeMap } from './types'

export interface Related { n: number; score: number }

export function relatedGhazals(map: ThemeMap, n: number, k = 4): { theme?: string; items: Related[] } {
  const rows = new Map(map.ghazals.map((r) => [r[0], r.slice(1)]))
  const v = rows.get(n)
  if (!v || v.every((x) => x === 0)) return { items: [] }
  const norm = (a: readonly number[]) => Math.hypot(...a)
  const nv = norm(v)
  const items: Related[] = []
  for (const [m, w] of rows) {
    if (m === n) continue
    const nw = norm(w)
    if (!nw) continue
    items.push({ n: m, score: w.reduce((s, x, i) => s + x * v[i], 0) / (nv * nw) })
  }
  items.sort((a, b) => b.score - a.score || Math.abs(a.n - n) - Math.abs(b.n - n) || a.n - b.n)
  const top = v.indexOf(Math.max(...v))
  return { theme: map.method.themes[top]?.label, items: items.slice(0, k) }
}
