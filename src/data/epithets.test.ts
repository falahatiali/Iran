import assert from 'node:assert/strict'
import { test } from 'node:test'
import { epithets, epithetSearchText, epithetsFor, nicknamesFor } from './epithets'
import { dynasties } from './dynasties'

const ids = new Set(dynasties.flatMap((d) => d.rulers.map((r) => r.id)))

test('every epithet belongs to a real ruler and names a source', () => {
  for (const [id, list] of Object.entries(epithets)) {
    assert.ok(ids.has(id), id)
    assert.ok(list.length > 0, id)
    for (const e of list) {
      assert.ok(e.fa.trim() && e.en.trim() && e.source.label.trim(), id)
      if (e.source.url) assert.match(e.source.url, /^https:\/\//, id)
      if (e.meaning) assert.ok(e.meaning.fa.trim() && e.meaning.en.trim(), id)
    }
  }
})

test('Artaxerxes I is Longhand, and the Achaemenid titles are marked official', () => {
  const a = epithetsFor('artaxerxes-i')
  assert.ok(a.some((e) => e.kind === 'nickname' && e.fa === 'درازدست' && /Longimanus/.test(e.original ?? '')))
  assert.ok(a.some((e) => e.kind === 'title' && e.fa.includes('شاه بزرگ') && e.original?.includes('xšāyaθiya vazraka')))
  assert.deepEqual(nicknamesFor('artaxerxes-i').map((e) => e.fa), ['درازدست'])
  for (const id of ['darius-i', 'xerxes-i']) assert.equal(epithetsFor(id)[0].kind, 'title')
})

test('search text carries the epithet so “درازدست” or “Longimanus” finds the king', () => {
  assert.match(epithetSearchText('artaxerxes-i'), /درازدست/)
  assert.match(epithetSearchText('artaxerxes-i'), /Longimanus/)
  assert.equal(epithetSearchText('no-such-king'), '')
  assert.deepEqual(epithetsFor('constructor'), [])
})
