/** What each Saadi route loads, kept out of the route files so both books share it. */
import { notFound } from '@tanstack/react-router'
import { BOOKS, type SaadiBook, chapterCounts } from '.'
import { saadi } from './repository'
import type { Block } from './types'

export async function loadLanding(book: SaadiBook) {
  const c = BOOKS[book]
  const [index, first] = await Promise.all([saadi.index(book), saadi.section(book, c.opening.chapter, c.opening.n)])
  const bayts = first!.blocks.filter((b): b is Extract<Block, { l: unknown }> => 'l' in b)
  const i = c.opening.starts ? bayts.findIndex((b) => b.l[0].startsWith(c.opening.starts!)) : 0
  const ch = index.chapters.find((x) => x.slug === c.opening.chapter)!
  const blockN = first!.blocks.indexOf(bayts[i]) + 1
  return {
    index,
    opening: { l: bayts[i].l, chapter: ch.slug, n: c.opening.n, block: blockN, where: ch.title === first!.title ? ch.title : `${ch.title}، ${first!.title}` },
  }
}

export async function loadChapter(book: SaadiBook, slug: string) {
  const index = await saadi.index(book)
  const i = index.chapters.findIndex((c) => c.slug === slug)
  if (i < 0) throw notFound()
  return { chapter: index.chapters[i], prev: index.chapters[i - 1], next: index.chapters[i + 1] }
}

export async function loadSection(book: SaadiBook, chapter: string, raw: string) {
  const n = Number(raw)
  const chs = chapterCounts(book)
  const ci = chs.findIndex(([slug]) => slug === chapter)
  if (ci < 0 || !Number.isInteger(n) || String(n) !== raw || n < 1 || n > chs[ci][1]) throw notFound()
  const s = await saadi.section(book, chapter, n)
  if (!s) throw notFound()
  const prev = n > 1 ? { chapter, n: n - 1 } : ci > 0 ? { chapter: chs[ci - 1][0], n: chs[ci - 1][1] } : undefined
  const next = n < chs[ci][1] ? { chapter, n: n + 1 } : ci < chs.length - 1 ? { chapter: chs[ci + 1][0], n: 1 } : undefined
  return { s, chapterTitle: chs[ci][2], prev, next }
}
