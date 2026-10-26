CREATE TABLE dynasties (
  slug TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  latin TEXT NOT NULL,
  era TEXT NOT NULL,
  start_year INTEGER NOT NULL,
  end_year INTEGER,
  capital TEXT NOT NULL,
  summary TEXT NOT NULL,
  accent TEXT NOT NULL,
  sort INTEGER NOT NULL
);
CREATE TABLE rulers (
  id TEXT PRIMARY KEY,
  dynasty_slug TEXT NOT NULL REFERENCES dynasties(slug) ON DELETE CASCADE,
  name TEXT NOT NULL,
  latin TEXT NOT NULL,
  start_year INTEGER NOT NULL,
  end_year INTEGER,
  description TEXT NOT NULL,
  sort INTEGER NOT NULL
);
CREATE INDEX rulers_dynasty ON rulers(dynasty_slug, sort);
CREATE TABLE events (
  id TEXT PRIMARY KEY,
  dynasty_slug TEXT NOT NULL REFERENCES dynasties(slug) ON DELETE CASCADE,
  year INTEGER NOT NULL,
  title TEXT NOT NULL,
  type TEXT NOT NULL,
  importance TEXT NOT NULL,
  description TEXT
);
CREATE INDEX events_dynasty ON events(dynasty_slug, year);
CREATE TABLE relations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ruler_id TEXT NOT NULL REFERENCES rulers(id) ON DELETE CASCADE,
  kind TEXT NOT NULL CHECK (kind IN ('father','mother','spouse')),
  related_ruler_id TEXT REFERENCES rulers(id),
  related_name TEXT
);
CREATE INDEX relations_ruler ON relations(ruler_id);
CREATE INDEX relations_related ON relations(related_ruler_id);
