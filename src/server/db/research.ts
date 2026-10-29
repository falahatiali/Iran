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
  RationCategory,
  RationFact,
  SourceText,
  Translation,
} from '../../data/research/types'
import { rationCategories, rationFacts } from '../../data/research/rations'
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

export interface ArchivesProject {
  artifacts: Artifact[]
  editions: Edition[]
  claims: Claim[]
  interpretations: Interpretation[]
  citations: Citation[]
  bibliography: BibliographyEntry[]
  rationCategories: RationCategory[]
  rationFacts: RationFact[]
}

export interface ResearchRepository {
  cylinder(): Promise<CylinderProject | null>
  archives(): Promise<ArchivesProject | null>
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

const CYLINDER_BIB = new Set([
  'bm-90920', 'iranica-cyrus-iv', 'finkel-2013', 'cais-cylinder', 'rogers-1912',
  'livius-cogan-schaudig', 'iranica-persepolis-admin', 'iranica-persepolis-elamite',
  'walker-1972', 'berger-1975', 'kuhrt-1983', 'schaudig-2001', 'daderot-cc0',
  'artfletch-sketchfab', 'jannatkhah-youtube-2024',
])

const ARCHIVES_BIB = new Set([
  'hallock-1969', 'cameron-1948', 'isac-oip92-page', 'iranica-pf-archive', 'iranica-pt-archive',
  'iranica-archives-significance', 'iranica-taxation', 'iranica-fiscal', 'iranica-economy-iii',
  'iranica-persepolis-admin', 'iranica-persepolis-elamite', 'chi-vol2-tablets', 'briant-cyrus-alexander',
])

function relatedBib(all: BibliographyEntry[], citations: Citation[], extraIds: Set<string>): BibliographyEntry[] {
  const ids = new Set(extraIds)
  for (const c of citations) ids.add(c.bibliographicId)
  return all.filter((b) => ids.has(b.id))
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
        db.query<Translation>(`${TR} WHERE edition_id IN (SELECT id FROM editions WHERE source_text_id = ?)`, [sourceText.id]),
        db.query<Passage>(`${PA} WHERE source_text_id = ? ORDER BY sort`, [sourceText.id]),
        db.query<PassageText>(PT),
        db.query<Annotation>(AN),
        db.query<Claim>(`${CL} WHERE artifact_id = ?`, [artifact.id]),
        db.query<Interpretation>(IN),
        db.query<Citation>(CI),
        db.query<MediaAsset>(`${ME} WHERE artifact_id = ?`, [artifact.id]),
        db.query<BibliographyEntry>(BIB),
      ])
      const claimIds = new Set(claims.map((c) => c.id))
      const usedCitations = citations.filter((c) => claims.some((cl) => cl.citationId === c.id) || c.id.startsWith('cit-'))
      const cylinderCitations = usedCitations.filter((c) =>
        claims.some((cl) => cl.citationId === c.id) || ['cit-bm-dims', 'cit-iranica-building', 'cit-pf', 'cit-iranica-lines'].includes(c.id),
      )
      return {
        artifact,
        sourceText,
        fragments,
        editions: editions.map((e) => ({ ...e, isScholarlyStandard: flag(e.isScholarlyStandard) })),
        translations: translations.map((t) => ({ ...t, canReproduce: flag(t.canReproduce) })),
        passages: passages.map((p) => ({ ...p, damaged: flag(p.damaged) })),
        passageTexts: passageTexts.filter((p) => passages.some((x) => x.id === p.passageId)),
        annotations: annotations.filter((a) => passages.some((p) => p.id === a.passageId)),
        claims,
        interpretations: interpretations
          .filter((i) => !i.claimId || claimIds.has(i.claimId))
          .map((i) => ({ ...i, isAuthorStatement: flag(i.isAuthorStatement) })),
        citations: cylinderCitations,
        media: media.map((m) => ({ ...m, isAuthentic: flag(m.isAuthentic) })),
        bibliography: relatedBib(bibliography, cylinderCitations, CYLINDER_BIB),
      }
    },
    async archives() {
      const artifacts = await db.query<Artifact>(`${ART} WHERE slug IN (?, ?) ORDER BY slug`, ['persepolis-fortification', 'persepolis-treasury'])
      if (artifacts.length < 2) return null
      const ids = artifacts.map((a) => a.id)
      const placeholders = ids.map(() => '?').join(', ')
      const [editions, claims, interpretations, citations, bibliography] = await Promise.all([
        db.query<Edition>(`${ED} WHERE source_text_id IN (SELECT id FROM source_texts WHERE artifact_id IN (${placeholders}))`, ids),
        db.query<Claim>(`${CL} WHERE artifact_id IN (${placeholders})`, ids),
        db.query<Interpretation>(IN),
        db.query<Citation>(CI),
        db.query<BibliographyEntry>(BIB),
      ])
      const claimIds = new Set(claims.map((c) => c.id))
      const archiveCitations = citations.filter((c) => claims.some((cl) => cl.citationId === c.id) || c.id.startsWith('cit-hallock') || c.id.startsWith('cit-stolper') || c.id.startsWith('cit-treasury') || c.id.startsWith('cit-dandamayev') || c.id.startsWith('cit-significance') || c.id.startsWith('cit-taxation') || c.id.startsWith('cit-isac') || c.id.startsWith('cit-cameron'))
      return {
        artifacts,
        editions: editions.map((e) => ({ ...e, isScholarlyStandard: flag(e.isScholarlyStandard) })),
        claims,
        interpretations: interpretations
          .filter((i) => !i.claimId || claimIds.has(i.claimId))
          .map((i) => ({ ...i, isAuthorStatement: flag(i.isAuthorStatement) })),
        citations: archiveCitations,
        bibliography: relatedBib(bibliography, archiveCitations, ARCHIVES_BIB),
        rationCategories,
        rationFacts,
      }
    },
  }
}
