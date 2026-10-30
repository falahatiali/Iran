# Improvement log

A running record of substantial product and research work. Older infrastructure notes live in git history.

## 2026-10-29 — Cylinder: full text, real 3D, property/liberty reading

**Directive:** owner. Remove every named living commentator from the product; keep the liberty/property frame. Argue from the Cylinder’s wording that it recognizes individual property and liberty. Replace the blank reconstruction with a licensed model of the actual object. Print the complete open text.

**Done in this pass**

- Site-wide purge of the previously named commentator (pages, seed, bibliography, tests, philosophy addendum). Frame remains unattributed.
- Parallel reader on `/cylinder` and `/en/cylinder`: Rogers 1912 Akkadian transliteration + English (public domain, fragment A, lines 1–36), site Persian rendering of that English, Yale join 37–45 marked empty. Property/liberty lines highlighted and anchored.
- Interpretation rewritten passage-by-passage from lines 8, 22–26, 30–34 (yoke, peaceful entry, houses, return, cults). Historical quotation stays a separate layer.
- 3D: Sketchfab photogrammetry of BM 90920 by artfletch, **CC BY 4.0** (159 photos, Reality Capture). Not an official museum scan. Photo fallback: Daderot CC0 + Mike Peel / Prioryman CC BY-SA 4.0.

## 2026-10-29 — Public origin must be the real site URL

**Bug:** production canonical, `og:url`, all sitemap `<loc>` entries, and the robots `Sitemap` line pointed at `https://iran-history.example`.

**Done in this pass**

- Site origin comes from `VITE_SITE_URL` / `APP_DOMAIN` (GitHub `PRODUCTION_URL` / `APP_DOMAIN`, default `https://iiraan.com`). Production and sitemap generation fail if that value is missing, `http://`, or a placeholder.
- Docker image build takes the same values as `ARG`s. CI and post-deploy crawls fail if any canonical or sitemap URL is not the configured origin.

## 2026-10-28 — Foundational philosophy and Cyrus Cylinder first release

**Directive:** [FOUNDATIONAL_PHILOSOPHY.md](./FOUNDATIONAL_PHILOSOPHY.md) committed verbatim as a permanent project principle.

**Done in this pass**

- Linked the directive from README, ROADMAP, AGENTS.md, and `.cursor/rules`.
- Mapped section 8 implementation priorities into ROADMAP.
- Opened a verified research log and bibliography (British Museum BM 90920, Encyclopaedia Iranica *Cyrus iv*, Finkel 2013 as catalogued edition, CAIS as one version among several, Persepolis archives). Recorded inaccessible items instead of filling gaps.
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

## 2026-10-30 — King-by-king program: Untash-Napirisha (first king in site order)

**Directive:** give every ruler, in site order, a featured dossier to the Darius standard: animated deeds map with certainty flags, three separate layers per section, licensed Commons photos, and verbatim quotes only from published translations.

**Done in this pass**

- Untash-Napirisha (Elam, Igihalkid dynasty) is the first ruler of the first dynasty. He is historical, not legendary.
- Moved his dates to c. 1340–1300 BCE (the Burnaburiash synchronism; Wiley *EAH* and Iranica *Ziggurat*). The lower chronology, c. 1275–1240 BCE (Carter 1992, UNESCO), is noted on the page. The ziggurat timeline event moved to c. 1320 BCE.
- `src/data/untash/`: 10 mapped events, 8 dossier sections and a synthesis, 15 sources, and 6 Commons photos with licences checked through the Commons API.
- `FeaturedKing.photos` and `DossierSection.photos` are generic now, so the next dossiers can carry galleries.
- The only verbatim quote is the Napir-Asu statue curse, in F. Tallon's translation (Harper, Aruz and Tallon 1992, cat. 83).
- Flagged as disputed: the Immeriya statue (a campaign, or homage to Burnaburiash; Vallat 1999, Durand 2000) and the highland-gods "policy" (Miroschedji). Abandonment of the site: Carter (c. 1000 BCE) versus UNESCO (Ashurbanipal, c. 640 BCE).
- No texts on markets, wages or ordinary people survive from the reign, and the page says so.

**Next king:** Shutruk-Nakhunte (Elam), covering the Babylonian campaign and the Hammurabi stele and Naram-Sin stele brought to Susa.
