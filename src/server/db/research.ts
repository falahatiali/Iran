import type {
  Annotation,
  Artifact,
  BibliographyEntry,
  Claim,
  Citation,
  Edition,
  Fragment,
  Interpretation,
  MediaAsset,
  Passage,
  PassageText,
  SourceText,
  Translation,
} from '../../data/research/types'
import type { SqlDriver } from './repositories'

export interface CylinderProject {
  artifact: Artifact
  sourceText: SourceText
  fragments: Fragment[]
  editions: Edition[]
  translations: Translation[]
  passages: Passage[]
  passageTexts: PassageText[]
  annotations: Annotation[]
  claims: Claim[]
  interpretations: Interpretation[]
  citations: Citation[]
  media: MediaAsset[]
  bibliography: BibliographyEntry[]
}

export interface ResearchRepository {
  cylinder(): Promise<CylinderProject | null>
  bibliography(): Promise<BibliographyEntry[]>
}

const BIB = `SELECT id, title, author, year, kind, publisher, url, isbn, license,
  access_status AS accessStatus, supports, accessed_on AS accessedOn, notes FROM bibliography`
const ART = `SELECT id, slug, name_fa AS nameFa, name_en AS nameEn, museum_number AS museumNumber,
  material, length_cm_min AS lengthCmMin, length_cm_max AS lengthCmMax, diameter_cm_max AS diameterCmMax,
  findspot, discovery_year AS discoveryYear, excavator, language, script, date_note AS dateNote,
  review_status AS reviewStatus FROM artifacts`
const ST = `SELECT id, artifact_id AS artifactId, language, script, line_count AS lineCount, notes FROM source_texts`
const FR = `SELECT id, artifact_id AS artifactId, label, holder, inventory, lines_from AS linesFrom,
  lines_to AS linesTo, identified_by AS identifiedBy, notes FROM fragments`
const ED = `SELECT id, source_text_id AS sourceTextId, title, editor, year, isbn, url, license,
  is_scholarly_standard AS isScholarlyStandard FROM editions`
const TR = `SELECT id, edition_id AS editionId, language, translator, year, license,
  can_reproduce AS canReproduce, url, notes FROM translations`
const PA = `SELECT id, source_text_id AS sourceTextId, sort, lines_from AS linesFrom, lines_to AS linesTo,
  fragment_id AS fragmentId, damaged, summary_fa AS summaryFa, summary_en AS summaryEn FROM passages`
const PT = `SELECT passage_id AS passageId, translation_id AS translationId, body FROM passage_texts`
const AN = `SELECT id, passage_id AS passageId, kind, locale, body FROM annotations`
const CI = `SELECT id, bibliographic_id AS bibliographicId, locator, url, accessed_on AS accessedOn, claim FROM citations`
const CL = `SELECT id, passage_id AS passageId, artifact_id AS artifactId, evidence_layer AS evidenceLayer,
  locale, statement, confidence, citation_id AS citationId FROM claims`
const IN = `SELECT id, claim_id AS claimId, school, locale, body, is_author_statement AS isAuthorStatement FROM interpretations`
const ME = `SELECT id, artifact_id AS artifactId, kind, title, url, local_path AS localPath, license,
  license_url AS licenseUrl, author, source_page AS sourcePage, provenance, is_authentic AS isAuthentic,
  reconstruction_label AS reconstructionLabel FROM media_assets`

function flag(v: unknown): boolean {
  return v === 1 || v === true
}

export function createResearchRepository(db: SqlDriver): ResearchRepository {
  return {
    bibliography: () => db.query<BibliographyEntry>(`${BIB} ORDER BY year IS NULL, year, id`),
    async cylinder() {
      const [artifact] = await db.query<Artifact>(`${ART} WHERE slug = ?`, ['cyrus-cylinder'])
      if (!artifact) return null
      const [sourceText] = await db.query<SourceText>(`${ST} WHERE artifact_id = ?`, [artifact.id])
      if (!sourceText) return null
      const [
        fragments, editions, translations, passages, passageTexts, annotations, claims, interpretations, citations, media, bibliography,
      ] = await Promise.all([
        db.query<Fragment>(`${FR} WHERE artifact_id = ? ORDER BY lines_from`, [artifact.id]),
        db.query<Edition>(`${ED} WHERE source_text_id = ?`, [sourceText.id]),
        db.query<Translation>(TR),
        db.query<Passage>(`${PA} WHERE source_text_id = ? ORDER BY sort`, [sourceText.id]),
        db.query<PassageText>(PT),
        db.query<Annotation>(AN),
        db.query<Claim>(`${CL} WHERE artifact_id = ? OR artifact_id IS NULL`, [artifact.id]),
        db.query<Interpretation>(IN),
        db.query<Citation>(CI),
        db.query<MediaAsset>(`${ME} WHERE artifact_id = ?`, [artifact.id]),
        db.query<BibliographyEntry>(BIB),
      ])
      return {
        artifact,
        sourceText,
        fragments,
        editions: editions.map((e) => ({ ...e, isScholarlyStandard: flag(e.isScholarlyStandard) })),
        translations: translations.map((t) => ({ ...t, canReproduce: flag(t.canReproduce) })),
        passages: passages.map((p) => ({ ...p, damaged: flag(p.damaged) })),
        passageTexts,
        annotations,
        claims,
        interpretations: interpretations.map((i) => ({ ...i, isAuthorStatement: flag(i.isAuthorStatement) })),
        citations,
        media: media.map((m) => ({ ...m, isAuthentic: flag(m.isAuthentic) })),
        bibliography,
      }
    },
  }
}
