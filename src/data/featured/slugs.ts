/** Ruler slugs with an extended (featured) dossier and an English mirror at /en/king/$slug.
 * Kept separate from ./index.ts so the layout and sitemap don't bundle dossier content. Tested to match `featuredKings`. */
export const FEATURED_KING_SLUGS = ['untash-napirisha', 'darius-i', 'xerxes-i', 'artaxerxes-i'] as const
export const isFeaturedKing = (slug: string) => (FEATURED_KING_SLUGS as readonly string[]).includes(slug)
