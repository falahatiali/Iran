/** Pure helpers for the timeline chart: position, ticks, zoom and pan. */
import { clampWindow } from '../../lib/searchSchema'

export interface Win { from: number; to: number }

/** 0..1 position of a year inside the window. */
export const pos = (y: number, w: Win) => (y - w.from) / (w.to - w.from)

const STEPS = [1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000]
/** Round tick values so that roughly `target` ticks fall inside the window. */
export function ticks(w: Win, target = 8): number[] {
  const raw = (w.to - w.from) / target
  const step = STEPS.find((s) => s >= raw) ?? 1000
  const out: number[] = []
  for (let t = Math.ceil(w.from / step) * step; t <= w.to; t += step) out.push(t)
  return out
}

/** Zoom by `factor` (<1 zooms in) around `anchor` (a year; defaults to the centre). */
export function zoom(w: Win, factor: number, anchor = (w.from + w.to) / 2): Win {
  const from = anchor - (anchor - w.from) * factor
  const to = anchor + (w.to - anchor) * factor
  return clampWindow(from, to)
}

/** Pan by a fraction of the current span (positive = later years). */
export function pan(w: Win, fraction: number): Win {
  const d = (w.to - w.from) * fraction
  return clampWindow(w.from + d, w.to + d)
}
