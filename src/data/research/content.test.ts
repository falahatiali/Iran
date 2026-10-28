import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { test } from 'node:test'
import { createDriver } from '../../server/db/factory'
import { migrate, seed } from '../../../scripts/db'
import { assertResearchInvariants, bibliography, claims, mediaAssets, passageTexts, passages, translations } from './index'
import { jannatkhahWorks } from './jannatkhah'

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

test('Cyrus II biographical line does not call the cylinder a modern charter', () => {
  const src = fs.readFileSync(path.resolve('src/data/ancient.ts'), 'utf8')
  const line = src.split('\n').find((row) => row.includes("['cyrus-ii'"))
  assert.ok(line)
  assert.equal(/آزادی دینی/.test(line), false)
  assert.match(line, /کتیبهٔ بنایی/)
})

test('3D media is labeled a reconstruction', () => {
  const d3 = mediaAssets.filter((m) => m.kind === '3d')
  assert.equal(d3.length, 1)
  assert.equal(d3[0].isAuthentic, false)
  assert.ok(d3[0].reconstructionLabel?.toLowerCase().includes('reconstruction'))
})

test('Jannatkhah unverified book title is flagged', () => {
  const reported = jannatkhahWorks.find((w) => w.id === 'jk-din-va-azadi')
  assert.ok(reported)
  assert.equal(reported.titleVerified, false)
  assert.equal(reported.url, null)
})

test('passages cover fragment A and the Yale join', () => {
  assert.ok(passages.some((p) => p.id === 'cyl-l36-45' && p.fragmentId === 'cyl-frag-b'))
  assert.ok(passages.some((p) => p.fragmentId === 'cyl-frag-a'))
})

test('migrate and seed persist cylinder rows', async () => {
  const file = path.join(os.tmpdir(), `iran-research-${process.pid}.db`)
  process.env.DATABASE_URL = `file:${file}`
  const db = createDriver()
  try {
    await migrate(db)
    await seed(db)
    const n = await db.query<{ n: number }>('SELECT COUNT(*) AS n FROM passages')
    assert.ok((n[0]?.n ?? 0) >= 8)
    const art = await db.query<{ slug: string }>('SELECT slug FROM artifacts')
    assert.equal(art[0]?.slug, 'cyrus-cylinder')
    const layers = await db.query<{ evidence_layer: string }>('SELECT DISTINCT evidence_layer FROM claims')
    assert.deepEqual(layers.map((r) => r.evidence_layer).sort(), ['historical', 'modern', 'philosophical'])
  } finally {
    db.close()
    fs.rmSync(file, { force: true })
  }
})
