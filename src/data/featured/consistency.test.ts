/** The reign and dynasty shown on a king's dossier must agree with the shared ruler record
 * that the timeline, the rulers bar, search and the family tree all read. */
import assert from 'node:assert/strict'
import { test } from 'node:test'
import { dynasties } from '../dynasties'
import { featuredKings } from './index'

const rulers = new Map(dynasties.flatMap((d) => d.rulers.map((r) => [r.id, { r, d }] as const)))

/** "139/8" → [139, 138]: a slash alternative may drop the leading digits. */
function years(s: string): number[] {
  return [...s.matchAll(/(\d+)(?:\/(\d+))?/g)].flatMap((m) => {
    const a = Number(m[1])
    if (!m[2]) return [a]
    const b = m[2].length < m[1].length ? Number(m[1].slice(0, m[1].length - m[2].length) + m[2]) : Number(m[2])
    return [a, b]
  })
}

type Window = [number, number]
/** Year windows a reign string allows for its start and its end. "c." widens the whole reign and "a/b" one side;
 * "after X" leaves the end open; a range in brackets ("or 271–274", "Assar: 165–132") is an
 * alternative chronology; a lone bracketed year ("or 47") may stand for either side; with
 * "a–b and c–d" the reign runs from a to d. Years are compared without era sign. */
function chronologies(reign: string): { start: Window[]; end: Window[] } {
  const approx = /c\./.test(reign)
  const side = (t: string): Window => {
    const ys = years(t)
    const tol = approx || t.includes('/') ? 1 : 0
    return [Math.min(...ys) - tol, /after/.test(t) ? Infinity : Math.max(...ys) + tol]
  }
  const ranges = [reign.replace(/\([^)]*\)/g, '')]
  const singles: Window[] = []
  for (const m of reign.matchAll(/\(([^)]*)\)/g)) {
    if (/–| to /.test(m[1])) ranges.push(m[1].replace(/^[^\d]*:/, ''))
    else if (/\d/.test(m[1])) singles.push(side(m[1]))
  }
  const start: Window[] = [...singles]
  const end: Window[] = [...singles]
  for (const r of ranges) {
    const parts = r.split(/–| to /)
    start.push(side(parts[0]))
    end.push(side(parts[parts.length - 1]))
  }
  return { start, end }
}

/** Reigns where the dossier follows a different, cited chronology than the overview record. */
const DISPUTED = new Set([
  'mithridates-iii', // dossier: 58/57–55 BCE; overview: 57–54 BCE
  'hormizd-i', // Iranica gives 270–271 or 272–273
])

test('every featured king has a ruler record', () => {
  for (const slug of Object.keys(featuredKings)) assert.ok(rulers.has(slug), slug)
})

test('dossier reign years agree with the shared ruler record', () => {
  const bad: string[] = []
  for (const k of Object.values(featuredKings)) {
    const hit = rulers.get(k.slug)
    if (!hit || DISPUTED.has(k.slug)) continue
    const w = chronologies(k.reign.en)
    const s = Math.abs(hit.r.start)
    const ok = (y: number, ws: Window[]) => ws.some(([lo, hi]) => y >= lo && y <= hi)
    if (!ok(s, w.start)) bad.push(`${k.slug}: starts ${hit.r.start}, dossier says ${k.reign.en}`)
    if (hit.r.end !== null && !ok(Math.abs(hit.r.end), w.end)) bad.push(`${k.slug}: ends ${hit.r.end}, dossier says ${k.reign.en}`)
  }
  assert.deepEqual(bad, [])
})

test('the Persian and English reign strings carry the same years', () => {
  const toLatin = (s: string) => s.replace(/[۰-۹]/g, (c) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(c)))
  for (const k of Object.values(featuredKings)) {
    const fa = years(toLatin(k.reign.fa))
    const en = years(k.reign.en)
    assert.deepEqual(fa, en, `${k.slug}: «${k.reign.fa}» vs “${k.reign.en}”`)
  }
})
