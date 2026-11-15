import { defineConfig } from 'nitro/config'

const MONTH = 60 * 60 * 24 * 30

export default defineConfig({
  routeRules: {
    // HTML and routes: always revalidate, but without `no-store`, which bars the back/forward cache
    '/**': {
      headers: {
        'Cache-Control': 'no-cache',
      },
    },
    // Server functions (comments, admin) and the admin page: never stored anywhere
    '/_serverFn/**': {
      headers: {
        'Cache-Control': 'no-store',
      },
    },
    '/admin/**': {
      headers: {
        'Cache-Control': 'no-store',
      },
    },
    // Immutable cache for hashed assets
    '/assets/**': {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    },
    // Fonts and media keep their names when edited, so cache them for a month and refresh in the background
    '/fonts/**': {
      headers: {
        'Cache-Control': `public, max-age=${MONTH}, stale-while-revalidate=${MONTH}`,
      },
    },
    '/media/**': {
      headers: {
        'Cache-Control': `public, max-age=${MONTH}, stale-while-revalidate=${MONTH}`,
      },
    },
  },
  // Return 404 for missing assets instead of serving HTML
  errorHandler: './server/error.ts',
})
