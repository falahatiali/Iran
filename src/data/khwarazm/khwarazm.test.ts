import assert from 'node:assert/strict'
import { test } from 'node:test'
import { jalalAlDin, khwPhotos, khwSourceIds, muhammadKh } from './index'

const filled = (s: string | undefined) => typeof s === 'string' && s.trim().length > 0

for (const king of [muhammadKh, jalalAlDin]) {
  test(`${king.slug} events are ordered, sourced, bilingual and hedged`, () => {
    for (const list of [king.events, king.campaign?.events ?? []]) {
      for (let i = 1; i < list.length; i++) assert.ok(list[i].year >= list[i - 1].year, list[i].id)
      assert.equal(new Set(list.map((e) => e.id)).size, list.length)
    }
    for (const e of king.events) assert.ok(e.year >= king.span[0] && e.year <= king.span[1], e.id)
    for (const e of [...king.events, ...(king.campaign?.events ?? [])]) {
      for (const s of e.sources) assert.ok(khwSourceIds.has(s), `${e.id} → ${s}`)
      for (const f of [e.title, e.body, e.when]) assert.ok(filled(f.fa) && filled(f.en), e.id)
      if (e.certainty !== 'secure') assert.ok(filled(e.certaintyNote?.fa) && filled(e.certaintyNote?.en), e.id)
    }
  })

  test(`${king.slug} dossier keeps three layers, resolves refs and labels our reading`, () => {
    const ids = new Set(khwPhotos.map((p) => p.id))
    for (const s of king.dossier ?? []) {
      for (const id of s.photos ?? []) assert.ok(ids.has(id), `${s.id} → ${id}`)
      for (const src of s.sources) assert.ok(khwSourceIds.has(src), `${s.id} → ${src}`)
      for (const layer of [s.historical, s.interpretation, s.modern]) assert.ok(layer.fa.length === layer.en.length && layer.fa.every(filled), s.id)
    }
    assert.match(king.dossier?.find((s) => s.id === 'property')?.interpretation.en.join(' ') ?? '', /This is our reading/)
  })
}

test('Otrar is flagged as disputed and the Indus as probable', () => {
  assert.equal(muhammadKh.events.find((e) => e.id === 'otrar')!.certainty, 'disputed')
  assert.equal(jalalAlDin.events.find((e) => e.id === 'indus')!.certainty, 'probable')
})

test('photos carry Commons pages and licences', () => {
  for (const p of khwPhotos) assert.ok(p.page.startsWith('https://commons.wikimedia.org/wiki/File:') && p.src.startsWith('https://upload.wikimedia.org/') && p.licenseUrl, p.id)
})

test('Mongol invasion section is sourced, flagged and licensed', async () => {
  const { chapters, claims, mongol, mongolPhotos, mongolSources, quotes } = await import('./mongol')
  const ids = new Set(mongolSources.map((s) => s.id))
  for (const c of chapters) {
    for (const s of c.sources) assert.ok(ids.has(s), `${c.id} → ${s}`)
    if (c.certainty !== 'secure') assert.ok(filled(c.note?.fa) && filled(c.note?.en), c.id)
  }
  for (const q of Object.values(quotes)) assert.ok(ids.has(q.source) && /p\./.test(q.ref), q.ref)
  for (const c of claims) assert.ok(ids.has(c.source))
  assert.equal(chapters.find((c) => c.id === 'gurganj')!.certainty, 'disputed')
  assert.match(mongol.lens.en, /^This is our reading/)
  assert.match(mongol.lens.fa, /^این برداشت ماست/)
  for (const p of mongolPhotos) assert.ok(p.page.startsWith('https://commons.wikimedia.org/wiki/File:') && p.licenseUrl && p.src.startsWith('/media/jalal-al-din/'), p.id)
})
