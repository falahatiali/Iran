import { defineConfig } from 'nitro/config'

export default defineConfig({
  routeRules: {
    // Immutable cache for hashed assets
    '/assets/**': {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    },
    // No-cache for HTML pages
    '/**/*.html': {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    },
    '/': {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    },
  },
  // Return 404 for missing assets instead of serving HTML
  errorHandler: '~/server/error.ts',
})
