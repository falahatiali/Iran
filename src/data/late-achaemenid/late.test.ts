import assert from 'node:assert/strict'
import { test } from 'node:test'
import { lateKings, lateSources } from './index'

const filled = (s: string | undefined) => typeof s === 'string' && s.trim().length > 0
const bi = (b: { fa: string; en: string } | undefined) => filled(b?.fa) && filled(b?.en)

test('late kings: events ordered, bilingual, sourced; disputed ones say why', () => {
  for (const k of lateKings) {
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

test('late kings: three separate bilingual layers, photos licensed, quotes cited', () => {
  for (const k of lateKings) {
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

test('Ctesias-only reigns are flagged; no excluded commentator is named', () => {
  for (const slug of ['xerxes-ii', 'sogdianus']) {
    const k = lateKings.find((x) => x.slug === slug)
    assert.ok(k && k.events.some((e) => e.certainty === 'disputed' && /Ctesias/.test(e.certaintyNote?.en ?? '')), slug)
  }
  assert.match(lateSources.ctesias.note?.en ?? '', /unreliable/)
  assert.equal(/jannatkhah|جنت.?خواه/i.test(JSON.stringify(lateKings)), false)
})
