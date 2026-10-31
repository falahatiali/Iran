import assert from 'node:assert/strict'
import { test } from 'node:test'
import { aghaMohammad, fathAli, qjPhotos, qjSourceIds } from './index'

const filled = (s: string | undefined) => typeof s === 'string' && s.trim().length > 0

for (const king of [aghaMohammad, fathAli]) {
  test(`${king.slug} events are ordered, sourced, bilingual and hedged`, () => {
    for (const list of [king.events, king.campaign?.events ?? []]) {
      for (let i = 1; i < list.length; i++) assert.ok(list[i].year >= list[i - 1].year, list[i].id)
      assert.equal(new Set(list.map((e) => e.id)).size, list.length)
    }
    for (const e of king.events) assert.ok(e.year >= king.span[0] && e.year <= king.span[1], e.id)
    for (const e of [...king.events, ...(king.campaign?.events ?? [])]) {
      for (const s of e.sources) assert.ok(qjSourceIds.has(s), `${e.id} → ${s}`)
      for (const f of [e.title, e.body, e.when]) assert.ok(filled(f.fa) && filled(f.en), e.id)
      if (e.certainty !== 'secure') assert.ok(filled(e.certaintyNote?.fa) && filled(e.certaintyNote?.en), e.id)
    }
  })

  test(`${king.slug} dossier keeps three layers, resolves refs and labels our reading`, () => {
    const ids = new Set(qjPhotos.map((p) => p.id))
    for (const s of king.dossier ?? []) {
      for (const id of s.photos ?? []) assert.ok(ids.has(id), `${s.id} → ${id}`)
      for (const src of s.sources) assert.ok(qjSourceIds.has(src), `${s.id} → ${src}`)
      for (const layer of [s.historical, s.interpretation, s.modern]) assert.ok(layer.fa.length === layer.en.length && layer.fa.every(filled), s.id)
    }
    assert.match(king.dossier?.find((s) => s.id === 'property')?.interpretation.en.join(' ') ?? '', /This is our reading/)
  })
}

test('uncertain dates, disputes and legends are flagged', () => {
  assert.equal(fathAli.events.find((e) => e.id === 'golestan')!.certainty, 'disputed')
  assert.match(fathAli.events.find((e) => e.id === 'turkmanchay')!.certaintyNote!.en, /20,000,000 silver roubles.*£4,000,000.*10,000,000 gold tomans/)
  assert.match(fathAli.dossier.find((s) => s.id === 'founder')!.interpretation.en.join(' '), /not in this source/)
})

test('treaty quotes come from the published Hurewitz translation', () => {
  const treaty = fathAli.dossier.filter((s) => s.id === 'golestan' || s.id === 'turkmanchay').flatMap((s) => s.quotes ?? [])
  assert.equal(treaty.length, 6)
  for (const q of treaty) assert.ok(q.source === 'hurewitz-1956' && /Hurewitz 1956/.test(q.ref), q.ref)
})

test('quotes cite a listed source', () => {
  for (const k of [aghaMohammad, fathAli]) for (const s of k.dossier) for (const q of s.quotes ?? []) assert.ok(qjSourceIds.has(q.source) && filled(q.text) && filled(q.fa), s.id)
})

test('photos carry Commons pages and licences', () => {
  for (const p of qjPhotos) assert.ok(p.page.startsWith('https://commons.wikimedia.org/wiki/File:') && p.src.startsWith('https://upload.wikimedia.org/') && p.licenseUrl, p.id)
})

test('Agha Mohammad Khan: conflicting dates are flagged, not smoothed over', () => {
  const e = (id: string) => aghaMohammad.events.find((x) => x.id === id)!
  assert.equal(e('tehran').certainty, 'disputed')
  assert.match(e('tehran').certaintyNote!.en, /21 March 1786.*1788–89/)
  assert.match(e('tiflis').certaintyNote!.en, /September 1795.*1210\/1796/)
  assert.match(e('killed').certaintyNote!.en, /17 June 1797.*May 1797/)
  assert.equal(fathAli.events.find((x) => x.id === 'amk-killed')!.certainty, 'probable')
})

test('Agha Mohammad Khan: Kerman and Tiflis are reported with the source’s numbers, and the eye legend is not repeated', () => {
  const kerman = aghaMohammad.dossier.find((s) => s.id === 'kerman')!
  assert.ok(kerman.quotes?.some((q) => /20,000 women and children/.test(q.text) && q.source === 'iranica-aga-mohammad-khan'))
  assert.match(kerman.interpretation.en.join(' '), /arbitrary coercion/)
  assert.match(kerman.interpretation.en.join(' '), /not in our sources/)
  assert.ok(aghaMohammad.dossier.find((s) => s.id === 'caucasus')!.quotes?.some((q) => /15,000/.test(q.text)))
})

test('the Agha Mohammad Khan article is credited to Perry, not Hambly', () => {
  const s = aghaMohammad.sources.find((x) => x.id === 'iranica-aga-mohammad-khan')!
  assert.match(s.author, /Perry/)
  for (const k of [aghaMohammad, fathAli]) for (const sec of k.dossier) for (const q of sec.quotes ?? []) assert.doesNotMatch(q.ref, /Hambly/)
})

test('campaign clip covers Tehran, Kerman, Tiflis, Mashhad and Shusha in order', () => {
  const ids = aghaMohammad.campaign!.events.map((e) => e.id)
  const want = ['c-tehran', 'c-kerman', 'c-tiflis', 'c-mashhad', 'c-shusha2']
  assert.deepEqual(ids.filter((id) => want.includes(id)), want)
})
