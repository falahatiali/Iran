import assert from 'node:assert/strict'
import { test } from 'node:test'
import { sasanianKings, sasSources } from './index'

const filled = (s: string | undefined) => typeof s === 'string' && s.trim().length > 0
const bi = (b: { fa: string; en: string } | undefined) => filled(b?.fa) && filled(b?.en)

test('sasanian kings: events ordered, bilingual, sourced; disputed ones say why', () => {
  for (const k of sasanianKings) {
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

test('sasanian kings: three separate bilingual layers, photos licensed, quotes cited', () => {
  for (const k of sasanianKings) {
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

test('Sasanian disputes are flagged; legends labelled; no excluded commentator is named', () => {
  const by = (slug: string) => sasanianKings.find((k) => k.slug === slug)
  const has = (slug: string, re: RegExp, id?: string) => by(slug)?.events.some((e) => (!id || e.id === id) && re.test(e.certaintyNote?.en ?? '')) ?? true
  const text = (slug: string) => JSON.stringify(by(slug) ?? '')
  assert.ok(by('ardashir-i') && has('ardashir-i', /controversial/, 'death') && has('ardashir-i', /Bishapur/, 'papak'))
  assert.ok(/Christensen/.test(text('ardashir-i')) && /Boyce/.test(text('ardashir-i')), 'Tansar dating dispute')
  assert.ok(by('ardashir-i')?.dossier.some((s) => s.folk && /legend/i.test(s.folk.origin.en.join(' '))), 'Kar-namag labelled as legend')
  assert.ok(has('shapur-i', /Huyse|Frye|ŠKZ|Roman/, 'edessa'))
  assert.ok(by('shapur-ii')?.dossier.some((s) => s.folk && /tradition|legend/i.test(s.folk.origin.en.join(' '))), 'womb crowning labelled as tradition')
  assert.ok(by('yazdegerd-i')?.events.some((e) => e.id === 'guardian' && e.certainty === 'disputed' && /Agathias/.test(e.certaintyNote?.en ?? '')), 'Theodosius guardianship flagged')
  assert.ok(by('bahram-v')?.dossier.some((s) => s.folk && /Haft Peykar/.test(s.folk.origin.en.join(' ')) && /tradition/i.test(s.folk.title.en)), 'Haft Peykar labelled as tradition')
  assert.ok(by('bahram-v')?.events.some((e) => e.id === 'lions' && e.certainty === 'disputed'), 'lions ordeal flagged')
  assert.ok(has('narseh', /298/, 'nisibis'))
  assert.ok(by('hormizd-iii')?.events.some((e) => e.id === 'help' && e.certainty === 'disputed'), 'Hephthalite help for Peroz flagged as legend')
  assert.ok(has('peroz-i', /Only Procopius/, 'trench') && by('peroz-i')?.campaign?.battles?.some((b) => b.id === 'trench' && b.phases.every((ph) => ph.certainty === 'disputed')), 'trench rests on Procopius and is flagged')
  assert.ok(by('balash')?.events.some((e) => e.id === 'chosen' && e.certainty === 'disputed'), 'Balash kinship to Peroz flagged')
  assert.ok(by('jamasp')?.events.some((e) => e.id === 'end' && e.certainty === 'disputed'), 'Zamasp fate flagged')
  assert.ok(by('kavad-i')?.events.some((e) => e.id === 'mazdak' && e.certainty === 'disputed') && has('kavad-i', /impossible/, 'mazdak') && (by('kavad-i')?.campaign?.battles?.length ?? 0) === 2, 'Mazdak flagged as hostile-sourced; Dara and Callinicum diagrams present')
  assert.ok(has('yazdegerd-ii', /exaggerated/, 'avarayr') && by('yazdegerd-ii')?.campaign?.battles?.some((b) => b.id === 'avarayr' && b.phases.length >= 4), 'Avarayr numbers flagged, diagram present')
  const folk = (slug: string, re: RegExp) => by(slug)?.dossier.some((s) => s.folk && re.test(s.folk.title.en) && /legend|tradition/i.test(s.folk.origin.en.join(' '))) ?? false
  assert.ok(folk('khosrow-i', /chess/) && folk('khosrow-i', /chain of justice/) && folk('khosrow-i', /herb/), 'Khosrow I chess, Borzuya tale and chain of justice labelled')
  assert.ok(by('khosrow-i')?.events.some((e) => e.id === 'hephthalites' && e.certainty === 'disputed') && /alleged|unproven/.test(text('khosrow-i')) && by('khosrow-i')?.campaign?.battles?.some((b) => b.id === 'antioch'), 'Hephthalite date and Gondeshapur academy flagged; Antioch diagram present')
  assert.ok(by('hormizd-iv')?.events.some((e) => e.id === 'accession' && e.certainty === 'disputed') && /chronologically impossible/.test(text('hormizd-iv')), 'Hormizd IV Turkish-mother story flagged')
  assert.ok(folk('bahram-chobin', /romance/) && by('bahram-chobin')?.campaign?.battles?.some((b) => b.id === 'urmia') && by('bahram-chobin')?.events.some((e) => e.id === 'battle' && e.certainty === 'disputed'), 'Bahram Chobin romance labelled; final battle diagram and dispute present')
  assert.ok(folk('khosrow-ii', /Shirin/) && folk('khosrow-ii', /Barbad/) && by('khosrow-ii')?.campaign?.battles?.some((b) => b.id === 'nineveh') && by('khosrow-ii')?.events.some((e) => e.id === 'jerusalem' && e.certainty === 'disputed') && by('khosrow-ii')?.events.some((e) => e.id === 'taq' && e.certainty === 'disputed' && /Peroz/.test(e.certaintyNote?.en ?? '')), 'Khosrow II: Shirin and Barbad labelled, Jerusalem and Taq-e Bostan flagged, Nineveh diagram')
  for (const slug of ['ardashir-i', 'shapur-i', 'shapur-ii', 'bahram-v', 'yazdegerd-ii', 'peroz-i', 'kavad-i', 'khosrow-i', 'bahram-chobin', 'khosrow-ii']) { const k = by(slug); if (k) assert.ok(k.campaign?.clip, slug) }
  assert.match(sasSources.skz.url ?? '', /^https:\/\//)
  assert.equal(/jannatkhah|جنت.?خواه/i.test(JSON.stringify(sasanianKings)), false)
})
