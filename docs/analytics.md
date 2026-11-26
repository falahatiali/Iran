# Analytics (GA4)

GA4 is on in production builds. The measurement ID comes from `VITE_GA_ID` (default `G-8VDDV8ZLFD` in `src/lib/analytics.ts`; a measurement ID is public by nature, it ships in every page). An empty `VITE_GA_ID` turns analytics off.

- `public/ga-init.js` loads gtag.js only after the page is idle, with Consent Mode v2: everything is denied until the reader accepts the banner. Ad signals are never granted.
- Browsers that send **Do Not Track** or **Global Privacy Control** get no analytics at all.
- Engagement events go through `src/lib/engagement.ts` (`track()`, `trackSearch()`, `installEngagement()`). It does nothing when gtag is absent (dev, tests, SSR), under DNT/GPC, or when the reader declined the banner. Pages never call gtag directly.

## Events

| Event | When | Parameters |
| --- | --- | --- |
| `meaning_open` / `meaning_hide` | the reader turns the bayt meanings on or off on a ghazal, Bustan/Golestan story, Nowruznameh section or Mantiq section | `book`, `section`, `bayt` (`all`: the toggle covers every bayt) |
| `commentary_open` | «شرح این سایت» comes into view on a Hafez ghazal, its badge is clicked (`via=badge`), or a per-bayt commentary (`<details data-ev>`, Mantiq and Shahnameh) is opened | `book`, `section`, `bayt`, `page`, `via` |
| `story_complete` | the end marker after the last bayt of a ghazal, story or section scrolls into view | `book`, `section`, `page` |
| `scroll_depth` | 25 / 50 / 75 / 100 % of a page (once each per page) | `percent`, `page` |
| `internal_nav` | a click on a link to another page of the site | `from`, `to` |
| `outbound_click` | a click on a link to another site (Ganjoor, Wikipedia, Iranica…) | `link_domain`, `link_url`, `from` |
| `copy_text` | the reader copies text (e.g. a bayt) | `chars`, `book`, `section`, `bayt`, `page` |
| `share` | a copy-link / copy-citation button | `method` (`copy_link`, `copy_citation`), `content_type` (`page`, `bayt`, `line`) |
| `search` | a search box, after the reader pauses typing (1.2 s, 2+ characters) | `search_term` (first 100 characters), `where` (`site`, `hafez-ghazals`, `timeline`, `shahnameh`) |

`page_view` is sent by gtag itself on the first load and by `trackPageView()` on client-side navigation.

## Register in GA4 (Admin → Custom definitions → Create custom dimension, scope: Event)

| Dimension name | Event parameter |
| --- | --- |
| Book | `book` |
| Section | `section` |
| Bayt | `bayt` |
| Page path (event) | `page` |
| Nav from | `from` |
| Nav to | `to` |
| Link domain | `link_domain` |
| Search where | `where` |
| Share method | `method` |
| Content type | `content_type` |
| Via | `via` |

And one custom metric (scope: Event, unit: Standard): `percent` (Scroll percent), and optionally `chars`.

`search_term` and `link_url` are already standard GA4 parameters; no need to register them.

Then, in Admin → Events, mark `story_complete` and `commentary_open` as **key events** to see which pages lead readers to the end of a poem.
