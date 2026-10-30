import assert from 'node:assert/strict'
import { test } from 'node:test'
import { dynasties } from '../dynasties'
import { normalize } from '../../lib/search'
import { places } from './index'

const rulers = new Set(dynasties.flatMap((d) => d.rulers.map((r) => r.id)))
const eventTitles = new Set(dynasties.flatMap((d) => d.events.map((e) => e.title)))

test('every place is internally consistent', () => {
  for (const [slug, p] of Object.entries(places)) {
    assert.equal(p.slug, slug)
    const src = new Set(p.sources.map((s) => s.id))
    const ph = new Set(p.photos.map((x) => x.id))
    for (const s of p.sections) {
      for (const id of s.sources) assert.ok(src.has(id), `${slug}/${s.id} source ${id}`)
      for (const id of s.photos ?? []) assert.ok(ph.has(id), `${slug}/${s.id} photo ${id}`)
      for (const l of s.layers) assert.equal(l.paras.fa.length > 0, l.paras.en.length > 0, `${slug}/${s.id}`)
    }
    for (const k of p.kings) assert.ok(rulers.has(k), `${slug} king ${k}`)
    for (const t of p.eventTitles) assert.ok(eventTitles.has(t), `${slug} event ${t}`)
    for (const x of p.photos) {
      assert.match(x.page, /^https:\/\/commons\.wikimedia\.org\/wiki\/File:/)
      assert.match(x.src, /^https:\/\/upload\.wikimedia\.org\//)
      assert.ok(x.author.length > 0)
    }
  }
})

test('Behistun aliases all resolve to the Bisotun page', () => {
  const hay = normalize([places.bisotun.name.fa, places.bisotun.name.en, ...places.bisotun.aliases].join(' '))
  for (const q of ['بیستون', 'بهستون', 'Behistun', 'Bisotun', 'Bagastana', 'behistun']) assert.ok(hay.includes(normalize(q)), q)
})
