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
  Review,
  ReviewStatus,
  Revision,
  SourceText,
  Translation,
} from './types'

export { bibliography } from './bibliography'
export {
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
} from './cylinder'
export { jannatkhahWorks } from './jannatkhah'

import { bibliography } from './bibliography'
import {
  annotations,
  artifacts,
  claims,
  editions,
  fragments,
  mediaAssets,
  passageTexts,
  passages,
  sourceTexts,
  translations,
} from './cylinder'

const PASSAGE_ID = /^cyl-l\d{2}-\d{2}$/

export function assertResearchInvariants(): string[] {
  const errors: string[] = []
  const translationById = new Map(translations.map((t) => [t.id, t]))
  const passageIds = new Set(passages.map((p) => p.id))

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
  }
  for (const m of mediaAssets) {
    if (!m.license || !m.provenance) errors.push(`media ${m.id} missing license or provenance`)
    if (m.kind === '3d' && m.isAuthentic) errors.push(`3d asset ${m.id} marked authentic without a verified museum scan`)
  }
  for (const b of bibliography) {
    if (!b.supports.trim()) errors.push(`bibliography ${b.id} has empty supports`)
    if (!b.accessStatus) errors.push(`bibliography ${b.id} missing accessStatus`)
  }
  if (artifacts.length === 0 || sourceTexts.length === 0 || fragments.length < 2) {
    errors.push('cylinder seed incomplete')
  }
  if (editions.length === 0 || translations.length === 0 || annotations.length === 0) {
    errors.push('editions/translations/annotations missing')
  }
  return errors
}
