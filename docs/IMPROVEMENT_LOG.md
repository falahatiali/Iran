# Improvement log

A running record of substantial product and research work. Older infrastructure notes live in git history.

## 2026-10-29 — Public origin must be the real site URL

**Bug:** production canonical, `og:url`, all sitemap `<loc>` entries, and the robots `Sitemap` line pointed at `https://iran-history.example`.

**Done in this pass**

- Site origin comes from `VITE_SITE_URL` / `APP_DOMAIN` (GitHub `PRODUCTION_URL` / `APP_DOMAIN`, default `https://history.verzav.ir`). Production and sitemap generation fail if that value is missing, `http://`, or a placeholder.
- Docker image build takes the same values as `ARG`s. CI and post-deploy crawls fail if any canonical or sitemap URL is not the configured origin.

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

## 2026-10-29 — Persepolis archives (second research track) and ration explorer

**Directive:** continue [FOUNDATIONAL_PHILOSOPHY.md](./FOUNDATIONAL_PHILOSOPHY.md) §8 and open the Achaemenid economy track with sourced claims only.

**Done in this pass**

- Opened Hallock 1969 (OIP 92) introduction and table of contents from the ISAC PDF; Cameron 1948 at catalog level; Iranica Fortification / Treasury / Significance / Taxation / Economy articles. Conflicting counts (30,000 vs 20–25k; 458 vs 457; BAR/QA vs litres) are logged, not flattened. Unverified figures (16,000 kurtaš, 530 karša, 3,000 bar, *pašap*, Herodotus talents as a tablet sum) stayed out.
- Seeded two artifacts (`persepolis-fortification`, `persepolis-treasury`) into the existing research model with citation-backed claims on all three evidence layers. Philosophical claims are labelled interpretation and not attributed to the Achaemenids.
- Shipped `/archives` and `/en/archives` with an interactive ration explorer of Hallock’s A–W categories (published counts from PF ranges; only intro-verified ration facts). Each datum links to a citation; Chicago + Persian “cite this”; per-category and per-Cylinder-passage shareable hashes.
- Linked from the Cylinder page, Achaemenid dynasty page, about/sources, header/footer, home, search, sitemap, and OG/hreflang. Added a few Cylinder passage annotations from Iranica *Cyrus iv*.
- Ideas file opened at [IDEAS.md](./IDEAS.md). ROADMAP §8.9 marked in progress.

See [RESEARCH_LOG.md](./RESEARCH_LOG.md) §13 for the source table.
