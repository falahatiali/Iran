import { bibliography } from './bibliography'
import {
  annotations,
  artifacts,
  citations,
  claims,
  editions,
  fragments,
  interpretations,
  mediaAssets,
  passageTexts,
  passages,
  reviews,
  revisions,
  sourceTexts,
  translations,
} from './index'

export const researchClearSql = [
  'DELETE FROM revisions',
  'DELETE FROM reviews',
  'DELETE FROM media_assets',
  'DELETE FROM interpretations',
  'DELETE FROM claims',
  'DELETE FROM citations',
  'DELETE FROM annotations',
  'DELETE FROM passage_texts',
  'DELETE FROM passages',
  'DELETE FROM translations',
  'DELETE FROM editions',
  'DELETE FROM fragments',
  'DELETE FROM source_texts',
  'DELETE FROM artifacts',
  'DELETE FROM bibliography',
]

export function researchSeedStmts(): { sql: string; args?: unknown[] }[] {
  const stmts: { sql: string; args?: unknown[] }[] = researchClearSql.map((sql) => ({ sql }))
  for (const b of bibliography) {
    stmts.push({
      sql: 'INSERT INTO bibliography VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)',
      args: [b.id, b.title, b.author, b.year, b.kind, b.publisher, b.url, b.isbn, b.license, b.accessStatus, b.supports, b.accessedOn, b.notes],
    })
  }
  for (const a of artifacts) {
    stmts.push({
      sql: 'INSERT INTO artifacts VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
      args: [a.id, a.slug, a.nameFa, a.nameEn, a.museumNumber, a.material, a.lengthCmMin, a.lengthCmMax, a.diameterCmMax, a.findspot, a.discoveryYear, a.excavator, a.language, a.script, a.dateNote, a.reviewStatus],
    })
  }
  for (const t of sourceTexts) {
    stmts.push({ sql: 'INSERT INTO source_texts VALUES (?,?,?,?,?,?)', args: [t.id, t.artifactId, t.language, t.script, t.lineCount, t.notes] })
  }
  for (const f of fragments) {
    stmts.push({
      sql: 'INSERT INTO fragments VALUES (?,?,?,?,?,?,?,?,?)',
      args: [f.id, f.artifactId, f.label, f.holder, f.inventory, f.linesFrom, f.linesTo, f.identifiedBy, f.notes],
    })
  }
  for (const e of editions) {
    stmts.push({
      sql: 'INSERT INTO editions VALUES (?,?,?,?,?,?,?,?,?)',
      args: [e.id, e.sourceTextId, e.title, e.editor, e.year, e.isbn, e.url, e.license, e.isScholarlyStandard ? 1 : 0],
    })
  }
  for (const t of translations) {
    stmts.push({
      sql: 'INSERT INTO translations VALUES (?,?,?,?,?,?,?,?,?)',
      args: [t.id, t.editionId, t.language, t.translator, t.year, t.license, t.canReproduce ? 1 : 0, t.url, t.notes],
    })
  }
  for (const p of passages) {
    stmts.push({
      sql: 'INSERT INTO passages VALUES (?,?,?,?,?,?,?,?,?)',
      args: [p.id, p.sourceTextId, p.sort, p.linesFrom, p.linesTo, p.fragmentId, p.damaged ? 1 : 0, p.summaryFa, p.summaryEn],
    })
  }
  for (const p of passageTexts) {
    stmts.push({ sql: 'INSERT INTO passage_texts VALUES (?,?,?)', args: [p.passageId, p.translationId, p.body] })
  }
  for (const a of annotations) {
    stmts.push({ sql: 'INSERT INTO annotations VALUES (?,?,?,?,?)', args: [a.id, a.passageId, a.kind, a.locale, a.body] })
  }
  for (const c of citations) {
    stmts.push({ sql: 'INSERT INTO citations VALUES (?,?,?,?,?,?)', args: [c.id, c.bibliographicId, c.locator, c.url, c.accessedOn, c.claim] })
  }
  for (const c of claims) {
    stmts.push({
      sql: 'INSERT INTO claims VALUES (?,?,?,?,?,?,?,?)',
      args: [c.id, c.passageId, c.artifactId, c.evidenceLayer, c.locale, c.statement, c.confidence, c.citationId],
    })
  }
  for (const i of interpretations) {
    stmts.push({
      sql: 'INSERT INTO interpretations VALUES (?,?,?,?,?,?)',
      args: [i.id, i.claimId, i.school, i.locale, i.body, i.isAuthorStatement ? 1 : 0],
    })
  }
  for (const m of mediaAssets) {
    stmts.push({
      sql: 'INSERT INTO media_assets VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)',
      args: [m.id, m.artifactId, m.kind, m.title, m.url, m.localPath, m.license, m.licenseUrl, m.author, m.sourcePage, m.provenance, m.isAuthentic ? 1 : 0, m.reconstructionLabel],
    })
  }
  for (const r of reviews) {
    stmts.push({
      sql: 'INSERT INTO reviews VALUES (?,?,?,?,?,?,?)',
      args: [r.id, r.entityKind, r.entityId, r.status, r.reviewer, r.notes, r.reviewedAt],
    })
  }
  for (const r of revisions) {
    stmts.push({ sql: 'INSERT INTO revisions (entity_kind, entity_id, changed_at, summary) VALUES (?,?,?,?)', args: [r.entityKind, r.entityId, r.changedAt, r.summary] })
  }
  return stmts
}
