CREATE TABLE sources (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  author TEXT,
  kind TEXT NOT NULL,
  url TEXT
);
CREATE TABLE dynasty_sources (
  dynasty_slug TEXT NOT NULL REFERENCES dynasties(slug) ON DELETE CASCADE,
  source_id TEXT NOT NULL REFERENCES sources(id) ON DELETE CASCADE,
  PRIMARY KEY (dynasty_slug, source_id)
);
CREATE TABLE extents (
  dynasty_slug TEXT PRIMARY KEY REFERENCES dynasties(slug) ON DELETE CASCADE,
  polygon_json TEXT NOT NULL
);
