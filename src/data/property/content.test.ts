import assert from 'node:assert/strict'
import { test } from 'node:test'
import { propertyHero, propertyRefs, propertySections } from './content'

const filled = (s: string | undefined) => typeof s === 'string' && s.trim().length > 0

test('property page is bilingual, sourced and does not overclaim modern rights', () => {
  assert.ok(filled(propertyHero.title.fa) && filled(propertyHero.title.en))
  assert.ok(filled(propertyHero.lede.fa) && filled(propertyHero.lede.en))
  const ids = ['caution', 'achaemenid', 'cylinder', 'sasanian', 'women', 'reading']
  assert.deepEqual(propertySections.map((s) => s.id), ids)
  for (const s of propertySections) {
    assert.ok(s.paras.fa.length === s.paras.en.length && s.paras.fa.every(filled) && s.paras.en.every(filled), s.id)
  }
  const all = JSON.stringify({ propertyHero, propertySections, propertyRefs })
  assert.match(all, /Mādayān ī hazār dādestān|هزار داوری/)
  assert.match(all, /Farroxmard|فرخ‌مرد/)
  assert.match(all, /Murašû|موراشو/)
  assert.match(all, /DB §14|بند ۱۴/)
  assert.match(propertyHero.lede.en, /modern sense/)
  assert.match(propertySections.find((s) => s.id === 'reading')?.paras.en.join(' ') ?? '', /This is our reading/)
  assert.equal(/jannatkhah|جنت.?خواه/i.test(all), false)
  assert.ok(propertyRefs.some((r) => r.id === 'macuch-mhd' && r.url?.includes('madayan-i-hazar-dadestan')))
  assert.ok(propertyRefs.every((r) => filled(r.text)))
})
