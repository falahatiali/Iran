import assert from 'node:assert/strict'
import { test } from 'node:test'
import { gaEnabled } from './analytics'

test('GA loads only in production with a valid measurement ID', () => {
  assert.equal(gaEnabled(true, 'G-8VDDV8ZLFD'), true)
  assert.equal(gaEnabled(false, 'G-8VDDV8ZLFD'), false)
  assert.equal(gaEnabled(true, ''), false)
  assert.equal(gaEnabled(true, 'x"><script>'), false)
})

test('engagement events respect Do Not Track, Global Privacy Control and a declined banner', async () => {
  const { trackingAllowed } = await import('./engagement')
  assert.equal(trackingAllowed({ doNotTrack: '1' }, 'granted'), false)
  assert.equal(trackingAllowed({ globalPrivacyControl: true }, undefined), false)
  assert.equal(trackingAllowed({}, 'denied'), false)
  assert.equal(trackingAllowed({ doNotTrack: null }, 'granted'), true)
  assert.equal(trackingAllowed(undefined, 'granted'), false)
})

test('the analytics doc lists every event the code sends', async () => {
  const fs = await import('node:fs')
  const path = await import('node:path')
  const doc = fs.readFileSync(path.resolve(import.meta.dirname, '../../docs/analytics.md'), 'utf8')
  const src = ['src/lib/engagement.ts', 'src/components/library/hafez/GhazalPage.tsx', 'src/components/library/saadi/SectionPage.tsx', 'src/components/ShareLink.tsx', 'src/components/verse/VerseExplanation.tsx']
    .map((f) => fs.readFileSync(path.resolve(import.meta.dirname, '../..', f), 'utf8')).join('\n')
  const names = new Set([...src.matchAll(/(?:track\(|data-track-view="|data-ev="|')((?:meaning|commentary|story|scroll|internal|outbound|copy|share|search)_?[a-z_]*)['"]/g)].map((m) => m[1]))
  for (const n of ['meaning_open', 'meaning_hide', 'commentary_open', 'story_complete', 'scroll_depth', 'internal_nav', 'outbound_click', 'copy_text', 'share', 'search']) {
    assert.ok(doc.includes(`\`${n}\``), `docs/analytics.md misses ${n}`)
    assert.ok(names.has(n) || src.includes(`'${n}'`), `code no longer sends ${n}`)
  }
})
