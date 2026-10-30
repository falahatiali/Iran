import assert from 'node:assert/strict'
import { test } from 'node:test'
import {
  HOME_DEFAULTS,
  TIMELINE_DEFAULTS,
  applyTimelineSearch,
  compactSearch,
  hasNonDefaultSearch,
  homeSearchSchema,
  parseHomeSearch,
  parseTimelineSearch,
  timelineSearchSchema,
} from './searchSchema'
import { defaultParseSearch, defaultStringifySearch } from '@tanstack/react-router'

test('timeline schema falls back on invalid params', () => {
  const parsed = parseTimelineSearch({
    q: 12,
    era: 'not-an-era',
    dynasty: 'Achaemenids!!!',
    type: 'war',
    major: 'yes',
    sort: 'popular',
    junk: 'x',
  })
  assert.equal(parsed.q, '12')
  assert.equal(parsed.era, '')
  assert.equal(parsed.dynasty, 'achaemenids')
  assert.equal(parsed.type, '')
  assert.equal(parsed.major, false)
  assert.equal(parsed.sort, 'year-asc')
  assert.equal('junk' in parsed, false)
})

test('timeline schema accepts boolean and enum values', () => {
  const parsed = parseTimelineSearch({
    q: ' بیستون ',
    era: 'ancient',
    dynasty: 'achaemenids',
    type: 'culture',
    major: 'true',
    sort: 'year-desc',
  })
  assert.equal(parsed.q, 'بیستون')
  assert.equal(parsed.era, 'ancient')
  assert.equal(parsed.dynasty, 'achaemenids')
  assert.equal(parsed.type, 'culture')
  assert.equal(parsed.major, true)
  assert.equal(parsed.sort, 'year-desc')
})

test('compact search omits defaults so URLs stay clean', () => {
  assert.deepEqual(compactSearch(TIMELINE_DEFAULTS, TIMELINE_DEFAULTS), {})
  assert.deepEqual(
    compactSearch({ ...TIMELINE_DEFAULTS, q: 'بیستون' }, TIMELINE_DEFAULTS),
    { q: 'بیستون' },
  )
  assert.equal(hasNonDefaultSearch(TIMELINE_DEFAULTS, TIMELINE_DEFAULTS), false)
  assert.equal(hasNonDefaultSearch({ ...HOME_DEFAULTS, q: 'کوروش' }, HOME_DEFAULTS), true)
})

test('Persian query round-trips through TanStack search serialization', () => {
  const qs = defaultStringifySearch({ q: 'بیستون' })
  assert.equal(qs.startsWith('?'), true)
  assert.match(qs, /q=/)
  assert.match(qs, /%D8%A8%DB%8C%D8%B3%D8%AA%D9%88%D9%86/)
  const parsed = defaultParseSearch(qs) as { q?: unknown }
  assert.equal(parsed.q, 'بیستون')
  assert.equal(parseTimelineSearch(parsed).q, 'بیستون')
})

test('applyTimelineSearch filters and sorts without dropping valid hits', () => {
  const events = [
    { era: 'ancient', dynastySlug: 'achaemenids', type: 'culture', importance: 'major', title: 'نگارش کتیبه‌ی بیستون', description: '', dynastyName: 'هخامنشیان', year: -520 },
    { era: 'ancient', dynastySlug: 'achaemenids', type: 'battle', importance: 'major', title: 'نبرد ماراتون', description: '', dynastyName: 'هخامنشیان', year: -490 },
    { era: 'modern', dynastySlug: 'pahlavi', type: 'founding', importance: 'minor', title: 'آغاز پهلوی', description: '', dynastyName: 'پهلوی', year: 1925 },
  ]
  const hits = applyTimelineSearch(events, { ...TIMELINE_DEFAULTS, q: 'بیستون' })
  assert.equal(hits.length, 1)
  assert.equal(hits[0].title.includes('بیستون'), true)

  const desc = applyTimelineSearch(events, { ...TIMELINE_DEFAULTS, era: 'ancient', sort: 'year-desc' })
  assert.deepEqual(desc.map((e) => e.year), [-490, -520])
})

test('standard schema validate matches parse', () => {
  const input = { q: 'بیستون', era: 'bogus' }
  assert.deepEqual(timelineSearchSchema['~standard'].validate(input).value, parseTimelineSearch(input))
  assert.deepEqual(homeSearchSchema['~standard'].validate({ q: 'کوروش' }).value, parseHomeSearch({ q: 'کوروش' }))
})

test('home search coerces and truncates', () => {
  assert.equal(parseHomeSearch({ q: 'کوروش' }).q, 'کوروش')
  assert.equal(parseHomeSearch({ q: null }).q, '')
  assert.equal(parseHomeSearch('nope').q, '')
  assert.ok(parseHomeSearch({ q: 'آ'.repeat(500) }).q.length <= 200)
})

test('timeline window is parsed, clamped and kept at a minimum span', () => {
  const a = parseTimelineSearch({ from: '-550', to: '-330' })
  assert.deepEqual([a.from, a.to], [-550, -330])
  const b = parseTimelineSearch({ from: '-99999', to: 'x' })
  assert.deepEqual([b.from, b.to], [TIMELINE_DEFAULTS.from, TIMELINE_DEFAULTS.to])
  const c = parseTimelineSearch({ from: '100', to: '-100' })
  assert.deepEqual([c.from, c.to], [-100, 100])
  const d = parseTimelineSearch({ from: '1000', to: '1001' })
  assert.ok(d.to - d.from >= 20)
  assert.equal(parseTimelineSearch({ ev: 'achaemenids-e3<script>' }).ev, 'achaemenids-e3script')
})

test('timeline window filters events and default window is stripped from the URL', () => {
  const events = [
    { era: 'ancient', dynastySlug: 'a', type: 'culture', importance: 'major', title: 'x', dynastyName: 'A', year: -520 },
    { era: 'modern', dynastySlug: 'b', type: 'reform', importance: 'minor', title: 'y', dynastyName: 'B', year: 1906 },
  ]
  const r = applyTimelineSearch(events, { ...TIMELINE_DEFAULTS, from: -600, to: -400 })
  assert.deepEqual(r.map((e) => e.title), ['x'])
  assert.deepEqual(compactSearch(parseTimelineSearch({}), TIMELINE_DEFAULTS), {})
})
