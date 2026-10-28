# Improvement log

A running record of substantial product and research work. Older infrastructure notes live in git history.

## 2026-10-28 — Foundational philosophy and Cyrus Cylinder first release

**Directive:** [FOUNDATIONAL_PHILOSOPHY.md](./FOUNDATIONAL_PHILOSOPHY.md) committed verbatim as a permanent project principle.

**Done in this pass**

- Linked the directive from README, ROADMAP, AGENTS.md, and `.cursor/rules`.
- Mapped section 8 implementation priorities into ROADMAP.
- Opened a verified research log and bibliography (British Museum BM 90920, Encyclopaedia Iranica *Cyrus iv*, Finkel 2013 as catalogued edition, CAIS as one version among several, Persepolis archives, Jannatkhah public sources). Recorded inaccessible items instead of filling gaps.
- Added a typed research content model (artifact, source text, fragment, edition, translation, passage, annotation, citation, claim with evidence layer, interpretation, media asset, review, revision) with SQL migrations, seed, repository access, and tests.
- Shipped the Cyrus Cylinder flagship in Persian (primary, RTL) and English, structured to section 4.5, with labeled evidence layers.
- Passage-level public-domain text only where the license is verified (Rogers 1912, fragment A). Other editions are summarized with links.
- Authentic Wikimedia Commons photography with recorded license and provenance. Procedural clay-cylinder 3D viewer labeled as an artistic reconstruction (no invented cuneiform); asset search documented in the research log.

See [RESEARCH_LOG.md](./RESEARCH_LOG.md) for source-by-source claims.
