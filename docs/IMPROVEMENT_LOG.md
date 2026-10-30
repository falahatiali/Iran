# Improvement log

A running record of substantial product and research work. Older infrastructure notes live in git history.

## 2026-10-30 — The late Achaemenids, Artaxerxes I to Bessus

**Directive:** owner. Present every king after Artaxerxes I to the end of the Achaemenids, in order and with their data, each on its canonical `/king/<slug>` page (+ `/en`).

**Done in this pass**

- Shared module `src/data/late-achaemenid/` (`common.ts`: one bibliography, places, Commons photos with licences read from the Commons API, event helpers; `late.test.ts`: order, bilingual three layers, certainty notes, photo licences, cited quotes).
- Compact featured pages: `xerxes-ii`, `sogdianus` (Ctesias flagged as almost the only source; Babylonian documents go straight from Artaxerxes I to Darius II), `artaxerxes-iv` (Arses; Bagoas; Xanthos trilingual stele, flagged), and a new ruler `artaxerxes-v` (Bessus, claimant 330–329, flagged).
- Full dossier `darius-ii` (Nothos): Parysatis, the Murašû archive, the revolts, the treaties with Sparta (Thucydides 8.18, 8.58 quoted from Crawley), Cyrus the Younger in Sardis, Elephantine and the loss of Egypt; animated map of the Ionian War 412–404 (`public/media/darius-ii/`).

**Disputed points flagged:** the reigns of Xerxes II and Sogdianus (Ctesias 45 days / 6½ months vs Diodorus 1 year / 7 months; unknown to Babylon); whether the Xanthos “Artaxerxes” is Arses or Artaxerxes III; Bagoas' role in the poisonings; where Bessus was executed; for Darius II: the Ctesias-only accession story and Arsites' revolt, the date of Pissuthnes' revolt (c. 422 vs 415–413), the reconstructed Elephantine Passover letter, the lost “treaty of Boeotius”, and Tissaphernes' motives (Thucydides commits to none).

**Next:** Shutruk-Nakhunte.

## 2026-10-30 — Xerxes' murder, Artaxerxes I Longhand, and royal epithets

**Directive:** owner. Explain how Xerxes was killed and what came before and after; give Artaxerxes I (“Longhand”) a full dossier; add the kings' epithets and titles where a source names them.

**Done in this pass**

- Xerxes: new dossier section `death` (the late court, Artabanus the hazarapat, four versions: Ctesias via Photius, Diodorus 11.69, Justin 3.1, Aristotle *Politics* 1311b; Artabanus' fall; Bactria; the date from BM 32234, c. 4–8 August 465, after Stolper 1988). Life map gained `crown-prince`, `artabanus-fall` and `bactria`; `murder` is now flagged disputed (the tablet says “his son”, the Greeks say Artabanus; Aspamitres vs Mithridates). Sources added: Justin, Aristotle, Manetho fr. 70, BM 32234, Stolper 1988.
- `/king/artaxerxes-i` and `/en/king/artaxerxes-i` are featured dossiers: a 14-step life map (accession 465 to death 424/423), an 11-step western campaign map (`reign`: Inaros, the Athenian fleet, Papremis, the White Wall, Spartan bribe, Megabyzus, Prosopitis, Mendes, Cimon at Cyprus, Callias, Samos) with fleet tracks, eleven three-layer sections (life, name and titles, accession, Egypt, the Callias peace, the court, Themistocles' three cities, Ezra and Nehemiah, the Murašû archive, buildings and A1Pa, the succession), seven Commons photos and a synthesis. Verbatim quotes only from A1Pa (Lecoq via Livius), Thucydides (Hobbes), Diodorus (Oldfather), Plutarch (Perrin) and Nehemiah (KJV).
- Clip rendered with `scripts/render-campaign-clip.py … --section reign` to `public/media/artaxerxes-i/reign-{fa,en}.{gif,mp4,webm,png}`; the PNG is the og:image.
- Epithets: `src/data/epithets.ts` keyed by ruler id (Persian form, original form and language, meaning, kind = official title / later byname / patronymic, source). Shown on king page headers (fa and en, `Epithets` component), as chips on dynasty ruler cards, and in search (hay and subtitle), so “درازدست” or “Longimanus” finds Artaxerxes I. Filled for Cyrus II, Darius I, Xerxes I, Artaxerxes I, Darius II, Artaxerxes II, Ardashir I, Shapur II, Bahram V, Khosrow I and Khosrow II. Tests in `src/data/epithets.test.ts`.
- Disputed and flagged: who killed Xerxes; whether Artabanus reigned; the Bactrian leader; the Egyptian war's dates and ship numbers; the Peace of Callias; Megabyzus' revolt (Ctesias only); Ezra's date (Artaxerxes I or II); the Murašû family label on the Nippur replica; the tomb attribution; the reign length (40/41/42); the meaning of Longimanus.

**Not filled (no source opened yet):** Mithridates II “the Great” and the Parthian “king of kings”; the meaning of Parvēz.

**Next:** Shutruk-Nakhunte.

## 2026-10-30 — Xerxes I: life, the Greek war, battle diagrams and a GIF clip

**Directive:** owner. Focus on Xerxes: everything known, his life in order, the Greek war in full, shown as an animation from beginning to end.

**Done in this pass**

- `/king/xerxes-i` and `/en/king/xerxes-i` became featured dossiers. The life map has 12 dated, sourced steps, from his birth c. 518 to his murder in 465.
- New zoomed campaign map, 15 steps from the Ionian revolt to the aftermath of 479. It shows the army route and a dashed blue fleet track, and labels every step secure, probable or disputed. `CampaignMap` gained the `view`, `places`, `stamp` and `fleet` options, plus the `window.__FK_STEP_MS` capture hook.
- Schematic `BattleDiagram` component with phase-by-phase Thermopylae (3 phases) and Salamis (4 phases) diagrams. Each phase cites Herodotus book.chapter and flags debated deployments (Tuplin).
- Clip rendered from the real page by `scripts/render-campaign-clip.py` (headless Chrome + ffmpeg) to `public/media/xerxes/war-{fa,en}.{gif,mp4,webm,png}`. The GIF is under 3 MB; the PNG is the og:image. `seo()` now takes `image`.
- Ten dossier sections keep the three layers separate: life, the revolts and the Esagila myth (Kuhrt & Sherwin-White 1987; Waerzeggers 2003/4), the war, army size (Herodotus' 1.7M / 5,283,220 given as his claim; modern estimates kept separate), economy and tribute, markets and the post, religion and XPh, law, freedoms, and reception (Aeschylus, Herodotus, Ctesias flagged unreliable, Esther, *300*).
- Ten Commons photos, with licences checked via the API.

**Next:** Shutruk-Nakhunte.

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
