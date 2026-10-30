# Contributing to Iran History (iiraan.com)

Thank you for helping build a sourced, honest reference to the history of Iran. This document lists the **rules** every contribution must follow and the **way** to submit one.

The project's founding brief is in [docs/FOUNDATIONAL_PHILOSOPHY.md](./docs/FOUNDATIONAL_PHILOSOPHY.md). Please read it before proposing content.

## Contents

- [Rules](#rules)
  - [1. Sourcing](#1-sourcing)
  - [2. Quotations](#2-quotations)
  - [3. Evidence, interpretation and modern meaning](#3-evidence-interpretation-and-modern-meaning)
  - [4. Images and media](#4-images-and-media)
  - [5. Page structure](#5-page-structure)
  - [6. Security and privacy](#6-security-and-privacy)
  - [7. Commits](#7-commits)
  - [8. Conduct](#8-conduct)
- [How to contribute](#how-to-contribute)
- [Reporting a factual error](#reporting-a-factual-error)
- [Proposing a new page](#proposing-a-new-page)
- [Pull request checklist](#pull-request-checklist)

## Rules

### 1. Sourcing

- **Every historical claim needs a citable source.** Give the author, title, edition and year, plus a page, section or line, or a stable URL for reference articles.
- Prefer, in order:
  1. Primary sources in scholarly editions, such as Kent 1953 or Schmitt 1991.
  2. Peer-reviewed reference works, such as *Encyclopædia Iranica* or UNESCO nomination files.
  3. Reputable secondary syntheses.
- Popular websites, social media and AI output are **not** sources.
- When sources disagree on a date or fact, **say so** and give both, rather than picking one silently.
- Add new sources to the relevant bibliography file, for example `src/data/sources.ts`, `src/data/places/*.ts`, `src/data/darius/bibliography.ts` or `src/data/research/bibliography.ts`, and make sure the data tests still pass.

### 2. Quotations

- **Never invent, paraphrase into quotation marks, or "improve" a quote.**
- Quote verbatim only from **published translations or editions**, and name the edition, translator and line or page.
- Prefer out-of-copyright editions for long passages. For copyrighted translations, quote briefly and link to the source.
- A paraphrase must be clearly marked as one.

### 3. Evidence, interpretation and modern meaning

Content is written in three separate layers. Never mix them in one sentence or field:

| Layer | Contains | Example |
|---|---|---|
| **Evidence** | What the sources say, with citations | "DB §14 says Darius restored pastures, herds and households." (Kent 1953) |
| **Interpretation** | An argued reading, labelled as such, including the liberty / property-rights lens | "This can be read as a restoration of property after usurpation." |
| **Modern meaning** | What the object or event means to Iranians today | The Cylinder as a modern national symbol |

The liberty / property-rights lens is a way of asking questions. It must never be used to distort or overstate the evidence.

### 4. Images and media

- Use only images that are **public domain, CC0, CC BY or CC BY-SA**, usually from Wikimedia Commons.
- **Check the licence on the file's own page**, not just the search result. Record the author, licence, licence URL and source page next to the image in the data, and show the credit in the UI.
- Do not use images under "fair use", "all rights reserved", NC or ND licences, or from unknown origins.
- Do not upload generated images presented as historical photos or artefacts. Decorative artwork must be original (see `docs/assets/`).

### 5. Page structure

- **One canonical page per king**, at `/king/<slug>` (and `/en/king/<slug>`), reached through dynasty → king. Do not create parallel pages for the same person; deepen the existing one instead (see the Darius I dossier).
- **Places and topics get dedicated pages**, for example `/place/bisotun`. Link them from events, kings, search and the timeline.
- New routes must be added to the prerender list in `vite.config.ts` and to `scripts/sitemap.ts`, with Persian and English alternates where both exist.

### 6. Security and privacy

The repository is **public**:

- No secrets, API keys, tokens, `.env` files, server IPs, SSH details or private file paths in commits, issues or PRs.
- Production configuration lives in GitHub repository variables and secrets, or on the server. Only the `*.example` files belong in git.
- Do not include personal data about private individuals.

### 7. Commits

- Use [Conventional Commits](https://www.conventionalcommits.org/):
  - `feat(place): add Pasargadae page`
  - `fix(data): correct Gotarzes II reign dates`
  - `docs(readme): …`
  - `refactor(…)`, `test(…)`, `chore(…)`
- One logical change per commit. Explain *why* in the body when it is not obvious, and cite the source for data fixes.

### 8. Conduct

- Be respectful and assume good faith. Debate sources and arguments, not people.
- No harassment, insults, or ethnic, religious or political attacks. Iran's history belongs to all of its peoples.
- Maintainers may edit, close or lock contributions that break these rules.

## How to contribute

1. **Fork** the repository and clone your fork.
2. **Create a branch** from `main`:

   ```bash
   git checkout -b feat/pasargadae      # or fix/gotarzes-date, docs/…
   ```

3. **Install and run locally:**

   ```bash
   npm ci
   npm run dev
   ```

4. **Make your change.** Add or update tests for data changes (`src/data/**/*.test.ts`). Run `npm run generate-routes` after adding a route.
5. **Run the quality gates.** All four must pass:

   ```bash
   npm run lint
   npm run typecheck
   npm test
   VITE_SITE_URL=https://iiraan.com npm run build
   ```

6. **Open a pull request** against `main`. In the description:
   - what changed and why
   - **the sources used**, with page, section or URL
   - screenshots for UI changes (fa and en where relevant)
7. **CI must pass** and **a maintainer review is required** before merge. Expect questions about sources; that is the point.

## Reporting a factual error

Open an issue titled `Correction: <page> – <short claim>` and include:

- the page URL, for example `https://iiraan.com/place/bisotun`
- the claim as it appears now
- the correct reading
- **the source**: author, title, edition, page or section, or a stable URL
- optionally, which layer the fix concerns (evidence, interpretation or modern meaning)

Corrections backed by a good source are prioritised.

## Proposing a new page

Open an issue titled `Proposal: <place / topic / dossier>` with a short outline, the key sources, and any licensed images you have found (with links to their Commons pages). Check the [README roadmap](./README.md#-roadmap) first.

## Pull request checklist

- [ ] Every new claim has a citable source
- [ ] No invented or altered quotes
- [ ] Evidence, interpretation and modern meaning are kept separate
- [ ] Image licences verified and credited
- [ ] No duplicate king pages; new places or topics are on dedicated pages
- [ ] No secrets, IPs, keys or private paths
- [ ] Conventional Commit messages
- [ ] `lint`, `typecheck`, `test` and `build` (with `VITE_SITE_URL`) pass locally
