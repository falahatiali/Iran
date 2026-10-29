export type {
  AccessStatus,
  Annotation,
  Artifact,
  BibliographyEntry,
  Claim,
  Citation,
  Confidence,
  Edition,
  EvidenceLayer,
  Fragment,
  Interpretation,
  LicenseKind,
  MediaAsset,
  Passage,
  PassageText,
  RationCategory,
  RationFact,
  RationGroup,
  Review,
  ReviewStatus,
  Revision,
  SourceText,
  Translation,
} from './types'

export { bibliography } from './bibliography'
export { jannatkhahWorks } from './jannatkhah'
export { publishedCount, rationCategories, rationFacts } from './rations'

import { bibliography } from './bibliography'
import {
  annotations as cylinderAnnotations,
  artifacts as cylinderArtifacts,
  citations as cylinderCitations,
  claims as cylinderClaims,
  editions as cylinderEditions,
  fragments as cylinderFragments,
  interpretations as cylinderInterpretations,
  mediaAssets,
  passageTexts,
  passages,
  reviews as cylinderReviews,
  revisions as cylinderRevisions,
  sourceTexts as cylinderSourceTexts,
  translations,
} from './cylinder'
import {
  archiveArtifacts,
  archiveCitations,
  archiveClaims,
  archiveEditions,
  archiveInterpretations,
  archiveReviews,
  archiveRevisions,
  archiveSourceTexts,
} from './archives'
import { publishedCount, rationCategories, rationFacts } from './rations'

export const artifacts = [...cylinderArtifacts, ...archiveArtifacts]
export const sourceTexts = [...cylinderSourceTexts, ...archiveSourceTexts]
export const fragments = cylinderFragments
export const editions = [...cylinderEditions, ...archiveEditions]
export const annotations = cylinderAnnotations
export const citations = [...cylinderCitations, ...archiveCitations]
export const claims = [...cylinderClaims, ...archiveClaims]
export const interpretations = [...cylinderInterpretations, ...archiveInterpretations]
export const reviews = [...cylinderReviews, ...archiveReviews]
export const revisions = [...cylinderRevisions, ...archiveRevisions]
export {
  mediaAssets,
  passageTexts,
  passages,
  translations,
}

const PASSAGE_ID = /^cyl-l\d{2}-\d{2}$/

export function assertResearchInvariants(): string[] {
  const errors: string[] = []
  const translationById = new Map(translations.map((t) => [t.id, t]))
  const passageIds = new Set(passages.map((p) => p.id))
  const bibIds = new Set(bibliography.map((b) => b.id))
  const citationIds = new Set(citations.map((c) => c.id))
  const artifactIds = new Set(artifacts.map((a) => a.id))

  for (const p of passages) {
    if (!PASSAGE_ID.test(p.id)) errors.push(`unstable passage id: ${p.id}`)
  }
  for (const pt of passageTexts) {
    const tr = translationById.get(pt.translationId)
    if (!tr) errors.push(`passage text ${pt.passageId} → missing translation ${pt.translationId}`)
    else if (!tr.canReproduce) errors.push(`reproduced text for non-reproducible translation ${tr.id}`)
    else if (tr.license !== 'public-domain' && tr.license !== 'cc0') {
      errors.push(`reproduced text for non-open license ${tr.id} (${tr.license})`)
    }
    if (!passageIds.has(pt.passageId)) errors.push(`passage text for unknown passage ${pt.passageId}`)
  }
  for (const c of claims) {
    if (c.evidenceLayer !== 'historical' && c.evidenceLayer !== 'philosophical' && c.evidenceLayer !== 'modern') {
      errors.push(`claim ${c.id} missing evidence layer`)
    }
    if (c.artifactId && !artifactIds.has(c.artifactId)) errors.push(`claim ${c.id} unknown artifact ${c.artifactId}`)
    if (c.citationId && !citationIds.has(c.citationId)) errors.push(`claim ${c.id} unknown citation ${c.citationId}`)
  }
  for (const c of citations) {
    if (!bibIds.has(c.bibliographicId)) errors.push(`citation ${c.id} unknown bibliography ${c.bibliographicId}`)
  }
  for (const m of mediaAssets) {
    if (!m.license || !m.provenance) errors.push(`media ${m.id} missing license or provenance`)
    if (m.kind === '3d' && m.isAuthentic) errors.push(`3d asset ${m.id} marked authentic without a verified museum scan`)
  }
  for (const b of bibliography) {
    if (!b.supports.trim()) errors.push(`bibliography ${b.id} has empty supports`)
    if (!b.accessStatus) errors.push(`bibliography ${b.id} missing accessStatus`)
  }
  if (cylinderArtifacts.length === 0 || cylinderSourceTexts.length === 0 || fragments.length < 2) {
    errors.push('cylinder seed incomplete')
  }
  if (editions.length === 0 || translations.length === 0 || annotations.length === 0) {
    errors.push('editions/translations/annotations missing')
  }
  if (!artifacts.some((a) => a.slug === 'persepolis-fortification') || !artifacts.some((a) => a.slug === 'persepolis-treasury')) {
    errors.push('archives artifacts missing')
  }
  const archiveHist = archiveClaims.filter((c) => c.evidenceLayer === 'historical')
  const archivePhil = archiveClaims.filter((c) => c.evidenceLayer === 'philosophical')
  const archiveMod = archiveClaims.filter((c) => c.evidenceLayer === 'modern')
  if (archiveHist.length < 8 || archivePhil.length < 2 || archiveMod.length < 2) {
    errors.push('archives claims missing a layer')
  }
  for (const c of archiveHist) {
    if (/charter of human rights|منشور جهانی حقوق بشر/.test(c.statement) && !/not |نیست|نمی/.test(c.statement)) {
      errors.push(`historical archives claim overreaches: ${c.id}`)
    }
  }
  const letters = new Set(rationCategories.map((c) => c.letter))
  if (rationCategories.length < 30) errors.push('Hallock categories incomplete')
  if (publishedCount(rationCategories.find((c) => c.letter === 'Q')?.pfRange ?? '') !== 304) {
    errors.push('category Q published count is not Hallock’s 304')
  }
  const monthly = rationCategories.filter((c) => ['K1', 'K2', 'K3', 'L1', 'L2', 'L3'].includes(c.letter))
  if (monthly.reduce((n, c) => n + publishedCount(c.pfRange), 0) !== 354) {
    errors.push('K1–L3 published count is not Hallock’s 354')
  }
  const totalPf = rationCategories.reduce((n, c) => n + publishedCount(c.pfRange), 0)
  if (totalPf !== 2087) errors.push(`PF 1–2087 sum is ${totalPf}, expected 2087`)
  for (const cat of rationCategories) {
    if (!citationIds.has(cat.citationId)) errors.push(`ration category ${cat.id} missing citation`)
  }
  for (const f of rationFacts) {
    if (!citationIds.has(f.citationId)) errors.push(`ration fact ${f.id} missing citation`)
    for (const letter of f.categoryLetters) {
      if (!letters.has(letter)) errors.push(`ration fact ${f.id} unknown letter ${letter}`)
    }
  }
  return errors
}
