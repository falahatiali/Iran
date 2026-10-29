/** Evidence layers from FOUNDATIONAL_PHILOSOPHY.md §4.7 — never collapse these. */
export type EvidenceLayer = 'historical' | 'philosophical' | 'modern'

export type ReviewStatus = 'draft' | 'verified' | 'needs-review' | 'rejected'
export type Confidence = 'well-supported' | 'disputed' | 'unknowable' | 'interpretive'
export type LicenseKind =
  | 'public-domain'
  | 'cc0'
  | 'cc-by'
  | 'cc-by-sa'
  | 'copyright'
  | 'unknown'
  | 'all-rights-reserved'

export type AccessStatus = 'verified' | 'partial' | 'inaccessible'

export interface BibliographyEntry {
  id: string
  title: string
  author: string | null
  year: number | null
  kind: 'catalog' | 'encyclopedia' | 'edition' | 'translation' | 'article' | 'video' | 'archive' | 'webpage'
  publisher: string | null
  url: string | null
  isbn: string | null
  license: LicenseKind
  accessStatus: AccessStatus
  /** The specific claim this source is allowed to support. */
  supports: string
  accessedOn: string
  notes: string
}

export interface Artifact {
  id: string
  slug: string
  nameFa: string
  nameEn: string
  museumNumber: string | null
  material: string
  lengthCmMin: number | null
  lengthCmMax: number | null
  diameterCmMax: number | null
  findspot: string
  discoveryYear: number | null
  excavator: string | null
  language: string
  script: string
  dateNote: string
  reviewStatus: ReviewStatus
}

export interface SourceText {
  id: string
  artifactId: string
  language: string
  script: string
  lineCount: number
  notes: string
}

export interface Fragment {
  id: string
  artifactId: string
  label: string
  holder: string
  inventory: string
  linesFrom: number | null
  linesTo: number | null
  identifiedBy: string | null
  notes: string
}

export interface Edition {
  id: string
  sourceTextId: string
  title: string
  editor: string
  year: number | null
  isbn: string | null
  url: string | null
  license: LicenseKind
  isScholarlyStandard: boolean
}

export interface Translation {
  id: string
  editionId: string | null
  language: 'akkadian' | 'en' | 'fa' | 'de'
  translator: string
  year: number | null
  license: LicenseKind
  canReproduce: boolean
  url: string | null
  notes: string
}

export interface Passage {
  id: string
  sourceTextId: string
  sort: number
  linesFrom: number
  linesTo: number
  fragmentId: string
  damaged: boolean
  summaryFa: string
  summaryEn: string
}

export interface PassageText {
  passageId: string
  translationId: string
  body: string
}

export interface Annotation {
  id: string
  passageId: string
  kind: 'term' | 'context' | 'alternative-reading' | 'limit'
  locale: 'fa' | 'en'
  body: string
}

export interface Citation {
  id: string
  bibliographicId: string
  locator: string | null
  url: string | null
  accessedOn: string
  claim: string
}

export interface Claim {
  id: string
  passageId: string | null
  artifactId: string | null
  evidenceLayer: EvidenceLayer
  locale: 'fa' | 'en'
  statement: string
  confidence: Confidence
  citationId: string | null
}

export interface Interpretation {
  id: string
  claimId: string | null
  school: string
  locale: 'fa' | 'en'
  body: string
  isAuthorStatement: boolean
}

export interface MediaAsset {
  id: string
  artifactId: string | null
  kind: 'photo' | '3d' | 'diagram'
  title: string
  url: string
  localPath: string | null
  license: LicenseKind
  licenseUrl: string
  author: string
  sourcePage: string
  provenance: string
  isAuthentic: boolean
  reconstructionLabel: string | null
}

export interface Review {
  id: string
  entityKind: string
  entityId: string
  status: ReviewStatus
  reviewer: string | null
  notes: string
  reviewedAt: string | null
}

export interface Revision {
  entityKind: string
  entityId: string
  changedAt: string
  summary: string
}

/** Hallock 1969 (OIP 92) text category — labels from the volume table of contents. */
export type RationGroup = 'supply' | 'rations-people' | 'rations-animals' | 'admin'

export interface RationCategory {
  id: string
  letter: string
  nameFa: string
  nameEn: string
  pfRange: string
  group: RationGroup
  citationId: string
}

export interface RationFact {
  id: string
  categoryLetters: string[]
  whoFa: string
  whoEn: string
  commodityFa: string
  commodityEn: string
  amount: string
  unitGloss: string
  citationId: string
  confidence: Confidence
}
