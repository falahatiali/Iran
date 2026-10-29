import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { test } from 'node:test'
import { createDriver } from '../../server/db/factory'
import { migrate, seed } from '../../../scripts/db'
import { assertResearchInvariants, bibliography, claims, cylinderLines, mediaAssets, passageTexts, passages, publishedCount, rationCategories, rationFacts, translations } from './index'
import { formatChicago, formatPersianCite } from '../../lib/cite'

test('research invariants: licenses, passage IDs, evidence layers', () => {
  const errors = assertResearchInvariants()
  assert.deepEqual(errors, [])
})

test('no copyrighted translation is marked reproducible', () => {
  for (const t of translations) {
    if (t.canReproduce) {
      assert.ok(t.license === 'public-domain' || t.license === 'cc0', t.id)
    }
  }
  const open = new Set(translations.filter((t) => t.canReproduce).map((t) => t.id))
  for (const pt of passageTexts) assert.ok(open.has(pt.translationId), pt.translationId)
})

test('historical layer does not call the cylinder a human-rights charter', () => {
  const hist = claims.filter((c) => c.evidenceLayer === 'historical')
  assert.ok(hist.length >= 4)
  for (const c of hist) {
    assert.equal(/charter of human rights|منشور جهانی حقوق بشر/.test(c.statement) && !/not |نیست|نمی/.test(c.statement), false, c.id)
  }
})

test('every bibliography row records access and a specific claim', () => {
  assert.ok(bibliography.length >= 10)
  for (const b of bibliography) {
    assert.ok(b.supports.length > 20, b.id)
    assert.ok(['verified', 'partial', 'inaccessible'].includes(b.accessStatus), b.id)
  }
})

test('licensed museum photo is on disk', () => {
  assert.ok(fs.existsSync(path.resolve('public/media/cyrus-cylinder-daderot-cc0.jpg')))
})

test('Cyrus II biographical line names the Cylinder as a building inscription with return and yoke', () => {
  const src = fs.readFileSync(path.resolve('src/data/ancient.ts'), 'utf8')
  const line = src.split('\n').find((row) => row.includes("['cyrus-ii'"))
  assert.ok(line)
  assert.match(line, /کتیبهٔ بنایی/)
  assert.match(line, /یوغ|خانه‌/)
})

test('3D media is licensed photogrammetry of the actual object', () => {
  const d3 = mediaAssets.filter((m) => m.kind === '3d')
  assert.equal(d3.length, 1)
  assert.equal(d3[0].isAuthentic, true)
  assert.equal(d3[0].license, 'cc-by')
  assert.match(d3[0].provenance, /photogrammetry/i)
  assert.equal(d3[0].reconstructionLabel, null)
})

test('full Rogers fragment A is present line by line; Yale join is marked empty', () => {
  assert.equal(cylinderLines.length, 45)
  for (const n of [8, 22, 24, 25, 26, 32, 33, 34]) {
    const line = cylinderLines.find((l) => l.n === n)
    assert.ok(line?.en && line.fa && line.akkadian, `line ${n}`)
  }
  const yale = cylinderLines.filter((l) => l.n >= 37)
  assert.equal(yale.length, 9)
  assert.ok(yale.every((l) => l.status === 'yale-join' && l.en === null))
})

test('site copy does not deny the Cylinder’s property and liberty reading', () => {
  const src = [
    fs.readFileSync(path.resolve('src/components/cylinder/CylinderPage.tsx'), 'utf8'),
    fs.readFileSync(path.resolve('src/data/research/cylinder.ts'), 'utf8'),
  ].join('\n')
  assert.equal(/بیان نمی‌کند/.test(src), false)
  assert.equal(/does not state a universal ownership/.test(src), false)
  assert.equal(/does not express property/.test(src), false)
})

test('named-commentator strings are gone from research data and cylinder UI', () => {
  const needle = ['Jan', 'natkhah'].join('')
  const fa = ['\u062c\u0646\u062a', '\u200c', '\u062e\u0648\u0627\u0647'].join('')
  const faSpace = ['\u062c\u0646\u062a', ' ', '\u062e\u0648\u0627\u0647'].join('')
  const files = [
    'src/data/research/cylinder.ts',
    'src/data/research/archives.ts',
    'src/data/research/bibliography.ts',
    'src/data/research/index.ts',
    'src/components/cylinder/CylinderPage.tsx',
    'src/server/db/research.ts',
  ]
  for (const f of files) {
    const src = fs.readFileSync(path.resolve(f), 'utf8')
    assert.equal(new RegExp(`${needle}|${fa}|${faSpace}`, 'i').test(src), false, f)
  }
})

test('licensed cylinder photographs are on disk', () => {
  for (const p of [
    'public/media/cyrus-cylinder-daderot-cc0.jpg',
    'public/media/cyrus-cylinder-peel-1.jpg',
    'public/media/cyrus-cylinder-peel-2.jpg',
    'public/media/cyrus-cylinder-peel-4.jpg',
    'public/media/cyrus-cylinder-prioryman-front.jpg',
  ]) {
    assert.ok(fs.existsSync(path.resolve(p)), p)
  }
})

test('passages cover fragment A and the Yale join', () => {
  assert.ok(passages.some((p) => p.id === 'cyl-l36-45' && p.fragmentId === 'cyl-frag-b'))
  assert.ok(passages.some((p) => p.fragmentId === 'cyl-frag-a'))
})

test('migrate and seed persist cylinder and archives rows', async () => {
  const file = path.join(os.tmpdir(), `iran-research-${process.pid}.db`)
  process.env.DATABASE_URL = `file:${file}`
  const db = createDriver()
  try {
    await migrate(db)
    await seed(db)
    const n = await db.query<{ n: number }>('SELECT COUNT(*) AS n FROM passages')
    assert.ok((n[0]?.n ?? 0) >= 8)
    const art = await db.query<{ slug: string }>('SELECT slug FROM artifacts ORDER BY slug')
    assert.deepEqual(art.map((a) => a.slug).sort(), ['cyrus-cylinder', 'persepolis-fortification', 'persepolis-treasury'])
    const layers = await db.query<{ evidence_layer: string }>('SELECT DISTINCT evidence_layer FROM claims')
    assert.deepEqual(layers.map((r) => r.evidence_layer).sort(), ['historical', 'modern', 'philosophical'])
    const pfClaims = await db.query<{ n: number }>("SELECT COUNT(*) AS n FROM claims WHERE artifact_id = 'persepolis-fortification'")
    assert.ok((pfClaims[0]?.n ?? 0) >= 8)
  } finally {
    db.close()
    fs.rmSync(file, { force: true })
  }
})

test('Hallock category ranges reproduce his 304 travel and 354 monthly counts', () => {
  const q = rationCategories.find((c) => c.letter === 'Q')
  assert.ok(q)
  assert.equal(publishedCount(q.pfRange), 304)
  const monthly = rationCategories.filter((c) => ['K1', 'K2', 'K3', 'L1', 'L2', 'L3'].includes(c.letter))
  assert.equal(monthly.reduce((n, c) => n + publishedCount(c.pfRange), 0), 354)
  assert.equal(rationCategories.reduce((n, c) => n + publishedCount(c.pfRange), 0), 2087)
  assert.ok(rationFacts.some((f) => f.id === 'fact-men-3bar' && f.amount === '3 BAR'))
})

test('archives historical claims stay sourced and do not invent a property charter', () => {
  const hist = claims.filter((c) => c.evidenceLayer === 'historical' && c.artifactId?.startsWith('persepolis'))
  assert.ok(hist.length >= 8)
  for (const c of hist) {
    assert.ok(c.citationId, c.id)
    assert.equal(/charter of human rights|منشور جهانی حقوق بشر/.test(c.statement) && !/not |نیست|نمی/.test(c.statement), false, c.id)
  }
})

test('Chicago and Persian citations include title and access date', () => {
  const hallock = bibliography.find((b) => b.id === 'hallock-1969')
  assert.ok(hallock)
  const en = formatChicago(hallock)
  const fa = formatPersianCite(hallock)
  assert.match(en, /Hallock/)
  assert.match(en, /1969/)
  assert.match(en, /Accessed October 29, 2026/)
  assert.match(fa, /هالوک|Hallock/)
  assert.match(fa, /بازبینی/)
})
