# Improvement log

A running record of substantial product and research work. Older infrastructure notes live in git history.

## 2026-10-30 — The late Achaemenids, Artaxerxes I to Bessus

**Directive:** owner. Present every king after Artaxerxes I to the end of the Achaemenids, in order and with their data, each on its canonical `/king/<slug>` page (+ `/en`).

**Done in this pass**

- Shared module `src/data/late-achaemenid/` (`common.ts`: one bibliography, places, Commons photos with licences read from the Commons API, event helpers; `late.test.ts`: order, bilingual three layers, certainty notes, photo licences, cited quotes).
- Compact featured pages: `xerxes-ii`, `sogdianus` (Ctesias flagged as almost the only source; Babylonian documents go straight from Artaxerxes I to Darius II), `artaxerxes-iv` (Arses; Bagoas; Xanthos trilingual stele, flagged), and a new ruler `artaxerxes-v` (Bessus, claimant 330–329, flagged).
- Full dossier `darius-ii` (Nothos): Parysatis, the Murašû archive, the revolts, the treaties with Sparta (Thucydides 8.18, 8.58 quoted from Crawley), Cyrus the Younger in Sardis, Elephantine and the loss of Egypt; animated map of the Ionian War 412–404 (`public/media/darius-ii/`).
- Full dossier `artaxerxes-ii` (Mnemon, epithet per Plutarch and Hesychius via Iranica): Cunaxa and the Ten Thousand (Anabasis 1.1.1, 1.8.26, 4.7.24 quoted from Dakyns), Cnidus and the King’s Peace (Hellenica 5.1.31 verbatim), Egypt, the Satraps’ Revolt, the court, and the A2Sa/A2Ha building texts naming Anahita and Mithra; animated map of the Anabasis route 401–400 (`public/media/artaxerxes-ii/`).
- Full dossier `artaxerxes-iii` (Ochus): the mercenary decree and Artabazus, Tennes and the burning of Sidon, the reconquest of Egypt (temple records sold back, Diodorus 16.51), Philip and Perinthus (Arrian 2.14.4–5 quoted from Chinnock, flagged as a literary letter), the Persepolis palace, Bagoas; animated map 358–340 (`public/media/artaxerxes-iii/`).

**Disputed points flagged:** the reigns of Xerxes II and Sogdianus (Ctesias 45 days / 6½ months vs Diodorus 1 year / 7 months; unknown to Babylon); whether the Xanthos “Artaxerxes” is Arses or Artaxerxes III; Bagoas' role in the poisonings; where Bessus was executed; for Darius II: the Ctesias-only accession story and Arsites' revolt, the date of Pissuthnes' revolt (c. 422 vs 415–413), the reconstructed Elephantine Passover letter, the lost “treaty of Boeotius”, and Tissaphernes' motives (Thucydides commits to none); for Artaxerxes II: the coronation plot and Stateira's poisoning (Ctesias/Plutarch only), who killed Cyrus at Cunaxa, the undated Cadusian campaign, the location of Mount Theches, and whether the Satraps' Revolt was one movement; for Artaxerxes III: the date of the Egyptian reconquest (Iranica 346/345–343, often 343/342, Diodorus under 351/350), the scale of Sidon's destruction, Aelian's hostile Apis story, the authenticity of Alexander's letter, and the poisoning by Bagoas; for Darius III: his origin, the pretenders in Egypt and Babylon, the peace letters (Badian: likely fictitious), the site of the Persian Gates, the motive for burning Persepolis, the account of his last days, army sizes, when he fled at Gaugamela, and whether the Mosaic shows Issus or Gaugamela.

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

## 2026-10-30 — Darius III: Ariobarzanes and the Persian Gates; Shutruk-Nakhunte dossier

**Done in this pass**

- Darius III: new section on Ariobarzanes and the Persian Gates, a five-phase animated battle diagram (GIF/MP4/WebM, fa and en) and two map steps (repulse; the turning path). Disputes flagged: army size, the site (Stein 1940 vs Speck 2002), Ariobarzanes' end (Arrian vs Curtius), the guide.
- New «روایت مردمی» box type (`DossierSection.folk`), marked as not historical. Youtab, his "sister", appears in no ancient source; the earliest place we found her is Farrokh 2007 (no source given). A link to Iotapa of Atropatene (Cassius Dio 51.16) is offered only as a guess.
- `src/data/shutruk/`: Shutruk-Nakhunte featured page with 8 life events, a 6-step animated 1158 BCE raid map (fa/en clip), 7 dossier sections, 11 sources (Vallat/Iranica, Potts 1999, König 1965, Van De Mieroop 2015, Van Dijk 1986, Vallat 1985, Scheil 1902, Roth), 5 Commons photos with API-checked licences, and four official titles in the epithet index.
- Only verbatim quote: his Elamite inscription on the Naram-Sin stele, in Van De Mieroop's translation.
- Flagged: reign dates (1184–1155 vs Vallat's 1210–1100 dynasty), the Kassite marriage, the Berlin letter's author, the Code's erased columns (Scheil's guess), the Code's origin (Roth: Sippar), Manishtushu statues (Akkad vs Eshnunna), Hutelutush's mother (Vallat 1985), Kutir-Nakhunte II vs III.
- Left out as unverified: the Meli-Shipak kudurru as his booty, the Marduk statue, and any nickname.

**Next king:** Shilhak-Inshushinak.

## 2026-10-30 — Parthians, batch 1: Arsaces I to Mithridates II

**Done in this pass**

- `src/data/arsacid/`: shared Parthian coordinates, sources (Justin/Watson, Strabo/Hamilton & Falconer, Plutarch/Dryden-Clough, Shiji/Watson, Isidore/Schoff, Nisa ostraca, Babylonian diaries, Iranica "Arsacids ii", Assar 2006, Olbrycht, Dąbrowa, Sellwood, Curtis, Badian and others) and CNG coin photos with checked licences.
- Short pages: Arsaces I, Arsaces II, Phriapatius, Phraates I, Phraates II, Artabanus I.
- Featured: Mithridates I (map clip of Media and Mesopotamia, 148–138 BCE) and Mithridates II (clip covering Characene, the Han embassy, Armenia, Sulla and Gotarzes).
- Verbatim quotes only from Watson's Justin, Hamilton & Falconer's Strabo and Dryden/Clough's Plutarch. Shiji 123 is paraphrased.
- Flagged: Tiridates, Justin vs Strabo on Arsaces' origin, Assar's lower chronology, "Arsaces IV", Phraates II's dates and death site, Artabanus I/II numbering, Tocharii = Yuezhi, Mithridates II's parentage, the Sulla date (96 vs 92), 400 vs 4,000 free men, "feudalism".

**Next king:** Gotarzes I (`gotarzes-i`, c. 91–80 BCE).

## 2026-10-31 — Parthians, batch 2: Gotarzes I to Vonones I

**Done in this pass**

- Short pages (`dark.ts`): Gotarzes I, Orodes I, Sinatruces, Phraates III, Mithridates III, with every date flagged against the Babylonian tablets and the Sellwood/Assar/Olbrycht disagreements.
- Featured: Orodes II (reign map 57–37 BCE, animated Carrhae diagram in six phases, sections on Surena, Carrhae, Crassus' death after Plutarch, the prisoners in Merv, Pacorus I and Orodes' death) and Phraates IV (Antony's 36 BCE campaign map, the return of the standards in 20 BCE, Musa and the sons sent to Rome).
- Short pages (`late.ts`): Phraates V and Musa, Orodes III, Vonones I.
- Verbatim quotes only from Dryden/Clough's Plutarch, Watson's Justin, Whiston's Josephus and Bushnell's Res Gestae. Dio, Tacitus and Velleius are paraphrased or quoted through Iranica.
- `BattleDiagram` gained an optional `sides` legend (Parthians/Romans).
- Flagged: Mithridates III/IV numbering, the Carrhae army sizes, whether Crassus' death was a trap, the Shami statue as "Surena", the Liqian legend, the Gindarus anniversary, Orodes' death (parricide vs grief), the thirty brothers, Phraaspa's site, the 20 BCE date and treaty, who gave Musa, the incest story, Orodes III's death (feast vs hunt).
- Left out as unverified: Surena's personal name, any epithet for Phraates IV beyond the coins, Tacitus quoted verbatim.

**Next king:** Artabanus II (`artabanus-ii`, 12–38 CE).

## 2026-10-31 — Parthians, batch 3: Artabanus II to Vologases III

**Done in this pass**

- Carrhae perf: the pages never load the GIFs. They play MP4/WebM with a poster, and the GIFs (including the new 640px share copy) are download links only.
- `common.ts`: new coordinates (Nehardea, Nisibis, Cilicia, the Arsanias, Hatra, Spasinou Charax, Vologesocerta, the Alans), new sources (Tacitus *Annals*/Church & Brodribb, Josephus *Antiquities*/Whiston, Iranica "Artabanus iii", Boyce "Gōdarz", Kellens "Avesta", Kahrstedt 1950, Dąbrowa 1983, Hou Hanshu/Hill) and coin and relief photos (CNG CC BY-SA 3.0, Gdr public domain, Lendering CC0), with licences checked.
- Featured: Artabanus II (`artabanus2.ts`). Sections cover his origin, Rome and the "lands of Cyrus" letter, the king and the nobles, Asineus and Anileus, the two exiles and Izates, and Seleucia's senate.
- `brothers.ts`: Vardanes I, Gotarzes II (Meherdates, Mount Sambulos, the Bisotun "Gotarzes" relief) and Vonones II.
- Featured: Vologases I (`vologases1.ts`). Sections cover Armenia 52–63, Rhandeia, the crown at Nero's statue, Vardanes II inside, and the Avesta tradition.
- `second-century.ts`: Pacorus II (with Artabanus III and the Han envoy/gift inside), Osroes I (Trajan's war, Hatra, Hadrian) and Vologases III (with Le Rider's Vologases II inside, and the Alans).
- Verbatim quotes only from Church & Brodribb's Tacitus and Whiston's Josephus, each checked against the Wikisource or Gutenberg text. Dio and the Hou Hanshu are paraphrased or reached through Iranica.
- Flagged: who succeeded Artabanus II (Vardanes or Gotarzes), how Gotarzes was related to him, the date of the bridge meeting (Tiberius or Caligula), Tacitus vs Josephus on the exiles, the causes of the Seleucia revolt, the Bisotun relief as Gotarzes II (Herzfeld vs Chaumont), the Shahnameh Gōdarz link (legend), Vonones II as king of Media or Armenia and whether he reigned at all, the Charinda/Sindes and Sambulos sites, the "yoke" rumour, the "Valaxš" of the Avesta as Vologases I, the date of Vologases I's death, Le Rider's Vologases II/III numbering, Tiaozhi = Characene, "Manqu" = Pacorus, and the Parthians blocking Gan Ying.
- Left out as unverified: Dio's account of Tiridates in Rome, Vologesocerta's founding, Pacorus II and Decebalus, and any quote from Dio or the Hou Hanshu.

**Next king:** Vologases IV (`vologases-iv`, 147–191 CE).

## 2026-10-31 — Parthians, batch 4 (last): Vologases IV to Artabanus IV

**Done in this pass**

- `common.ts`: new coordinates (Hormozgan near Golpayegan, Edessa, Syria, Firuzabad), new sources (Herodian/Echols on Livius, Iranica "Ardašīr I") and coins for Vologases IV, Osroes II, Vologases V, Vologases VI and Artabanus IV (CNG CC BY-SA 3.0, Gdr public domain), with licences read from the Commons API.
- `vologases4.ts`: Vologases IV (the war of 161–166, Seleucia and Ctesiphon at the end of 165 or early 166, the epidemic) and Osroes II, a coin-only king newly added to `classical.ts`.
- `severan.ts`: Vologases V (Severus' war of 195–199, the sack of Ctesiphon on 28 January 198, Hatra, the new provinces, Pāpak's revolt) and Vologases VI (the split with Artabanus).
- Featured: Artabanus IV (`artabanus4.ts`), with a reign map from 213 to 224 and a clip, and an animated four-phase Nisibis diagram with fa and en clips. Sections cover Caracalla's proposal, Nisibis and Hormozgan.
- Verbatim quotes only from Echols' Herodian (3.9.11–12, 4.10.4, 4.11.5, 4.14.6, 4.15.4, 6.2.7). Cassius Dio (LacusCurtius) could not be fetched; nothing is quoted from him, and his version is reached only through Iranica.
- Flagged:
  - Herodian vs Iranica on the proposal: Herodian has Artabanus accept, followed by the massacre, while Iranica has him refuse.
  - The massacre's site.
  - Nisibis: Herodian calls it a draw, but Iranica reads it as a Roman defeat (50 million denarii).
  - The 28 April 224 date (Nöldeke, "probably").
  - Hormozgan's site.
  - The 226 coronation.
  - The order of Ctesiphon and Hatra in 198 (Herodian vs Iranica/Dio), and Herodian's "Artabanus" for Vologases V.
  - The Vologases numbering in Iranica's "Ardašīr I".
  - The end dates of Vologases IV, V and VI, and the 227/228 coin of Vologases VI.
  - The Antonine Plague link.
  - Osroes II's existence beyond coins.
- Left out as unverified: Dio's account of the Arbela tombs (given only via the Livius note), details of the destruction of Seleucia in 165, Artabanus' regional base, and any Tabari quote.

**Next king:** Ardashir I (Sasanian) (`ardashir-i`, 224–242 CE).

## 2026-10-31 — Sasanians, batch 1: Ardashir I to Narseh

**Done in this pass**

- Featured: Ardashir I (`ardashir-i`) and Shapur I (`shapur-i`), each with a reign map and clip; Shapur I also has an animated Edessa battle diagram (fa/en GIF). Quotes are verbatim from published ŠKZ translations, with citations.
- `CampaignMap.tsx` / `featured/types.ts`: optional `dy` place-label shift (the `left` flag mirrors in RTL); used to separate the Ctesiphon and Misiche labels on the Shapur I map.
- `common.ts`: Satala and Ahvaz coordinates.
- `short.ts`: Hormizd I, Bahram I, Bahram II and Bahram III. Flagged: the regnal chronology (Shahbazi vs Skjærvø/Weber) and Mani's death year (274 Henning vs 276 Weber). Bahram III's surrender comes from Paikuli; only his later fate is unknown.
- `narseh.ts`: Narseh, covering Paikuli (NPi §4 and §91, tr. Skjærvø), Galerius (Callinicum 297, Osxa 298) and the Peace of Nisibis. Flagged: the treaty year (298 per Iranica vs 299). The clauses are not listed, because the treaty text does not survive; only Petros Patrikios' summary is mentioned.
- All new photos come from Commons with verified licences and are recorded in `public/media/ATTRIBUTION.txt`.

**Next king:** Hormizd II (`hormizd-ii`).
