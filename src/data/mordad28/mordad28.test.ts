import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { test } from 'node:test'
import { analysisNoteIds, analysisSections, analysisTexts, cast, days, documents, mordadSources, myths, photos, reading, tadayyoniListen, views } from '.'

const ids = new Set(mordadSources.map((s) => s.id))
const items = [...days.flatMap((d) => d.moments), ...cast, ...myths, ...views, ...documents]

test('every claim cites at least one source, and only sources in the bibliography', () => {
  for (const m of items) assert.ok(m.sources.length > 0)
  assert.deepEqual(items.flatMap((m) => m.sources).filter((s) => !ids.has(s)), [])
})

test('every photo ships as a local file', () => {
  for (const p of photos) assert.ok(existsSync(`public${p.src}`), p.src)
})

test('cast and timeline photos exist in the photo list', () => {
  const pids = new Set(photos.map((p) => p.id))
  for (const id of [...cast.map((c) => c.photo), ...days.flatMap((d) => d.moments.map((m) => m.photo)), ...documents.map((d) => d.photo)]) if (id) assert.ok(pids.has(id), id)
})

test('never names the excluded commentator', () => {
  assert.doesNotMatch(JSON.stringify({ days, cast, myths, views, documents, mordadSources, reading, analysisSections }), /جنت|Jannat/i)
  assert.doesNotMatch(analysisTexts().join('\n'), /جنت|Jannat/i)
})

test('ported dossier keeps five chapters, both languages, and leaves the withheld name out', async () => {
  const { dossierChapters, dossierIndex, essay, withheld } = await import('./dossier')
  assert.deepEqual(dossierChapters.map((c) => c.n), [1, 2, 3, 4, 5])
  assert.doesNotMatch(JSON.stringify({ dossierChapters, dossierIndex, essay }), /جنت|Jannat/i)
  for (const c of dossierChapters) for (const b of c.blocks) {
    const parts = b.t === 'ul' ? b.items : b.t === 'quote' ? [b.text, b.cite] : [b.text]
    for (const x of parts) assert.ok(x.fa.trim() && x.en.trim(), `${c.n}`)
  }
  assert.equal(dossierIndex.rows.length, 6)
  assert.equal(dossierIndex.timeline.length, 5)
  assert.ok(withheld.some((w) => w.includes('chapter 6')))
})

test('site reading no longer says every side has a dirty record, or that the day was neither foreign nor national', () => {
  const fa = reading.fa.join(' ')
  const en = reading.en.join(' ')
  assert.doesNotMatch(fa, /کار صددرصد بیگانه/)
  assert.doesNotMatch(fa, /هیچ طرف کارنامهٔ پاکی ندارد/)
  assert.doesNotMatch(en, /no side has a clean record/i)
  assert.doesNotMatch(en, /100% foreign/)
  assert.match(fa, /محمدرضاشاه/)
  assert.match(en, /Mohammad Reza Shah/)
})

test('analysis essay has twelve sections and footnotes that resolve to the bibliography', () => {
  assert.equal(analysisSections.length, 12)
  assert.deepEqual(analysisSections.map((s) => s.n), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
  const ids = new Set(mordadSources.map((s) => s.id))
  for (const [n, id] of Object.entries(analysisNoteIds)) {
    assert.ok(ids.has(id), `${n} -> ${id}`)
  }
  const notes = [...analysisTexts().join(' ').matchAll(/\[(\d+)\]/g)].map((m) => Number(m[1]))
  assert.ok(notes.length > 20)
  for (const n of notes) {
    assert.ok(analysisNoteIds[n] && ids.has(analysisNoteIds[n]), `footnote ${n}`)
  }
  assert.equal(tadayyoniListen.href, 'https://t.me/Garajetadayoni/10513')
  for (const href of ['https://t.me/Garajetadayoni/6217', 'https://t.me/Garajetadayoni/5688', 'https://t.me/Garajetadayoni/4282', 'https://t.me/Garajetadayoni/4184', 'https://t.me/Garajetadayoni/10513']) {
    assert.ok(mordadSources.some((s) => s.url === href), href)
  }
})
