import assert from 'node:assert/strict'
import { test } from 'node:test'
import { arsacidKings, parSources } from './index'

const filled = (s: string | undefined) => typeof s === 'string' && s.trim().length > 0
const bi = (b: { fa: string; en: string } | undefined) => filled(b?.fa) && filled(b?.en)

test('arsacid kings: events ordered, bilingual, sourced; disputed ones say why', () => {
  for (const k of arsacidKings) {
    const all = [...k.events, ...(k.campaign?.events ?? [])]
    for (const list of [k.events, k.campaign?.events ?? []]) for (let i = 1; i < list.length; i++) assert.ok(list[i].year >= list[i - 1].year, `${k.slug}/${list[i].id}`)
    assert.equal(new Set(k.events.map((e) => e.id)).size, k.events.length, k.slug)
    for (const e of all) {
      assert.ok(bi(e.title) && bi(e.body) && bi(e.when) && e.sources.length > 0, `${k.slug}/${e.id}`)
      if (e.certainty === 'disputed') assert.ok(bi(e.certaintyNote), `${k.slug}/${e.id}`)
      for (const [lon, lat] of [e.coord, ...(e.route ?? []), ...(e.fleet ?? [])]) assert.ok(lon >= 18 && lon <= 80 && lat >= 12 && lat <= 50, `${k.slug}/${e.id}`)
    }
  }
})

test('arsacid kings: three separate bilingual layers, photos licensed, quotes cited', () => {
  for (const k of arsacidKings) {
    const src = new Set(k.sources.map((s) => s.id))
    const ph = new Set((k.photos ?? []).map((p) => p.id))
    for (const p of k.photos ?? []) {
      assert.ok(p.page.startsWith('https://commons.wikimedia.org/wiki/File:') && p.src.startsWith('https://upload.wikimedia.org/'), p.id)
      if (p.license !== 'CC0' && p.license !== 'Public domain') assert.ok(p.licenseUrl, p.id)
    }
    for (const s of k.dossier) {
      for (const layer of [s.historical, s.interpretation, s.modern]) assert.ok(layer.fa.length > 0 && layer.en.length > 0 && [...layer.fa, ...layer.en].every(filled), `${k.slug}/${s.id}`)
      for (const id of s.photos ?? []) assert.ok(ph.has(id), `${k.slug}/${s.id}/${id}`)
      for (const q of s.quotes ?? []) assert.ok(src.has(q.source) && filled(q.ref) && filled(q.fa) && filled(q.text), `${k.slug}/${s.id}`)
    }
    assert.equal(k.synthesis.paras.fa.length, k.synthesis.paras.en.length, k.slug)
  }
})

test('Arsacid disputes are flagged; no excluded commentator is named', () => {
  const by = (slug: string) => arsacidKings.find((k) => k.slug === slug)
  const has = (slug: string, re: RegExp, id?: string) => by(slug)?.events.some((e) => (!id || e.id === id) && re.test(e.certaintyNote?.en ?? '')) ?? true
  assert.ok(by('arsaces-i') && has('arsaces-i', /Tiridates/))
  assert.ok(has('artabanus-i', /Artabanus II/))
  assert.ok(has('mithridates-ii', /Badian/, 'sulla'))
  assert.ok(has('mithridates-ii', /Friyapat/, 'accession'))
  for (const slug of ['mithridates-i', 'mithridates-ii']) { const k = by(slug); if (k) assert.ok(k.campaign?.clip, slug) }
  assert.match(parSources.justin.url ?? '', /^https:\/\//)
  assert.equal(/jannatkhah|جنت.?خواه/i.test(JSON.stringify(arsacidKings)), false)
})
