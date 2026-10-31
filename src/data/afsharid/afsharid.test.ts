import assert from 'node:assert/strict'
import { test } from 'node:test'
import { nader, afPhotos, afSourceIds } from './index'

const filled = (s: string | undefined) => typeof s === 'string' && s.trim().length > 0

for (const king of [nader]) {
  test(`${king.slug} events are ordered, sourced, bilingual and hedged`, () => {
    for (const list of [king.events, king.campaign?.events ?? []]) {
      for (let i = 1; i < list.length; i++) assert.ok(list[i].year >= list[i - 1].year, list[i].id)
      assert.equal(new Set(list.map((e) => e.id)).size, list.length)
    }
    for (const e of king.events) assert.ok(e.year >= king.span[0] && e.year <= king.span[1], e.id)
    for (const e of [...king.events, ...(king.campaign?.events ?? [])]) {
      for (const s of e.sources) assert.ok(afSourceIds.has(s), `${e.id} → ${s}`)
      for (const f of [e.title, e.body, e.when]) assert.ok(filled(f.fa) && filled(f.en), e.id)
      if (e.certainty !== 'secure') assert.ok(filled(e.certaintyNote?.fa) && filled(e.certaintyNote?.en), e.id)
    }
  })

  test(`${king.slug} dossier keeps three layers, resolves refs and labels our reading`, () => {
    const ids = new Set(afPhotos.map((p) => p.id))
    for (const s of king.dossier ?? []) {
      for (const id of s.photos ?? []) assert.ok(ids.has(id), `${s.id} → ${id}`)
      for (const src of s.sources) assert.ok(afSourceIds.has(src), `${s.id} → ${src}`)
      for (const layer of [s.historical, s.interpretation, s.modern]) assert.ok(layer.fa.length === layer.en.length && layer.fa.every(filled), s.id)
    }
    assert.match(king.dossier?.find((s) => s.id === 'property')?.interpretation.en.join(' ') ?? '', /This is our reading/)
  })
}

test('uncertain dates and disputes are flagged', () => {
  for (const id of ['abivard', 'turkestan']) assert.equal(nader.events.find((e) => e.id === id)!.certainty, 'probable')
  assert.match(nader.dossier.find((s) => s.id === 'fall')!.modern.en.join(' '), /1795.*1796/)
  assert.match(nader.dossier.find((s) => s.id === 'mughan')!.historical.en.join(' '), /It is reported/)
})

test('quotes cite a listed source', () => {
  for (const k of [nader]) for (const s of k.dossier) for (const q of s.quotes ?? []) assert.ok(afSourceIds.has(q.source) && filled(q.text) && filled(q.fa), s.id)
})

test('photos carry Commons pages and licences', () => {
  for (const p of afPhotos) assert.ok(p.page.startsWith('https://commons.wikimedia.org/wiki/File:') && p.src.startsWith('https://upload.wikimedia.org/') && p.licenseUrl, p.id)
})
