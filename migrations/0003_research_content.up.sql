CREATE TABLE bibliography (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  author TEXT,
  year INTEGER,
  kind TEXT NOT NULL,
  publisher TEXT,
  url TEXT,
  isbn TEXT,
  license TEXT NOT NULL,
  access_status TEXT NOT NULL,
  supports TEXT NOT NULL,
  accessed_on TEXT NOT NULL,
  notes TEXT NOT NULL
);

CREATE TABLE artifacts (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  name_fa TEXT NOT NULL,
  name_en TEXT NOT NULL,
  museum_number TEXT,
  material TEXT NOT NULL,
  length_cm_min REAL,
  length_cm_max REAL,
  diameter_cm_max REAL,
  findspot TEXT NOT NULL,
  discovery_year INTEGER,
  excavator TEXT,
  language TEXT NOT NULL,
  script TEXT NOT NULL,
  date_note TEXT NOT NULL,
  review_status TEXT NOT NULL
);

CREATE TABLE source_texts (
  id TEXT PRIMARY KEY,
  artifact_id TEXT NOT NULL REFERENCES artifacts(id) ON DELETE CASCADE,
  language TEXT NOT NULL,
  script TEXT NOT NULL,
  line_count INTEGER NOT NULL,
  notes TEXT NOT NULL
);

CREATE TABLE fragments (
  id TEXT PRIMARY KEY,
  artifact_id TEXT NOT NULL REFERENCES artifacts(id) ON DELETE CASCADE,
  label TEXT NOT NULL,
  holder TEXT NOT NULL,
  inventory TEXT NOT NULL,
  lines_from INTEGER,
  lines_to INTEGER,
  identified_by TEXT,
  notes TEXT NOT NULL
);

CREATE TABLE editions (
  id TEXT PRIMARY KEY,
  source_text_id TEXT NOT NULL REFERENCES source_texts(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  editor TEXT NOT NULL,
  year INTEGER,
  isbn TEXT,
  url TEXT,
  license TEXT NOT NULL,
  is_scholarly_standard INTEGER NOT NULL
);

CREATE TABLE translations (
  id TEXT PRIMARY KEY,
  edition_id TEXT REFERENCES editions(id) ON DELETE SET NULL,
  language TEXT NOT NULL,
  translator TEXT NOT NULL,
  year INTEGER,
  license TEXT NOT NULL,
  can_reproduce INTEGER NOT NULL,
  url TEXT,
  notes TEXT NOT NULL
);

CREATE TABLE passages (
  id TEXT PRIMARY KEY,
  source_text_id TEXT NOT NULL REFERENCES source_texts(id) ON DELETE CASCADE,
  sort INTEGER NOT NULL,
  lines_from INTEGER NOT NULL,
  lines_to INTEGER NOT NULL,
  fragment_id TEXT NOT NULL REFERENCES fragments(id),
  damaged INTEGER NOT NULL,
  summary_fa TEXT NOT NULL,
  summary_en TEXT NOT NULL
);

CREATE TABLE passage_texts (
  passage_id TEXT NOT NULL REFERENCES passages(id) ON DELETE CASCADE,
  translation_id TEXT NOT NULL REFERENCES translations(id) ON DELETE CASCADE,
  body TEXT NOT NULL,
  PRIMARY KEY (passage_id, translation_id)
);

CREATE TABLE annotations (
  id TEXT PRIMARY KEY,
  passage_id TEXT NOT NULL REFERENCES passages(id) ON DELETE CASCADE,
  kind TEXT NOT NULL,
  locale TEXT NOT NULL,
  body TEXT NOT NULL
);

CREATE TABLE citations (
  id TEXT PRIMARY KEY,
  bibliographic_id TEXT NOT NULL REFERENCES bibliography(id),
  locator TEXT,
  url TEXT,
  accessed_on TEXT NOT NULL,
  claim TEXT NOT NULL
);

CREATE TABLE claims (
  id TEXT PRIMARY KEY,
  passage_id TEXT REFERENCES passages(id) ON DELETE SET NULL,
  artifact_id TEXT REFERENCES artifacts(id) ON DELETE SET NULL,
  evidence_layer TEXT NOT NULL CHECK (evidence_layer IN ('historical', 'philosophical', 'modern')),
  locale TEXT NOT NULL,
  statement TEXT NOT NULL,
  confidence TEXT NOT NULL CHECK (confidence IN ('well-supported', 'disputed', 'unknowable', 'interpretive')),
  citation_id TEXT REFERENCES citations(id) ON DELETE SET NULL
);

CREATE TABLE interpretations (
  id TEXT PRIMARY KEY,
  claim_id TEXT REFERENCES claims(id) ON DELETE SET NULL,
  school TEXT NOT NULL,
  locale TEXT NOT NULL,
  body TEXT NOT NULL,
  is_author_statement INTEGER NOT NULL
);

CREATE TABLE media_assets (
  id TEXT PRIMARY KEY,
  artifact_id TEXT REFERENCES artifacts(id) ON DELETE SET NULL,
  kind TEXT NOT NULL,
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  local_path TEXT,
  license TEXT NOT NULL,
  license_url TEXT NOT NULL,
  author TEXT NOT NULL,
  source_page TEXT NOT NULL,
  provenance TEXT NOT NULL,
  is_authentic INTEGER NOT NULL,
  reconstruction_label TEXT
);

CREATE TABLE reviews (
  id TEXT PRIMARY KEY,
  entity_kind TEXT NOT NULL,
  entity_id TEXT NOT NULL,
  status TEXT NOT NULL,
  reviewer TEXT,
  notes TEXT NOT NULL,
  reviewed_at TEXT
);

CREATE TABLE revisions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  entity_kind TEXT NOT NULL,
  entity_id TEXT NOT NULL,
  changed_at TEXT NOT NULL,
  summary TEXT NOT NULL
);
