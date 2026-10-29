import assert from 'node:assert/strict'
import { test } from 'node:test'
import { isPlaceholderSiteUrl, originFromAppDomain, resolvePublicSiteUrl } from './siteUrl'

test('production refuses an empty URL and the historical placeholder', () => {
  assert.throws(() => resolvePublicSiteUrl({ mode: 'production' }), /required/)
  assert.throws(
    () => resolvePublicSiteUrl({ viteUrl: 'https://iran-history.example', mode: 'production' }),
    /placeholder/i,
  )
  assert.throws(
    () => resolvePublicSiteUrl({ envUrl: 'https://example.com', strict: true }),
    /placeholder/i,
  )
  assert.throws(
    () => resolvePublicSiteUrl({ viteUrl: 'http://history.verzav.ir', mode: 'production' }),
    /https/,
  )
})

test('APP_DOMAIN and VITE_SITE_URL both produce a trailing-slash-free https origin', () => {
  assert.equal(originFromAppDomain('history.verzav.ir'), 'https://history.verzav.ir')
  assert.equal(originFromAppDomain('https://history.verzav.ir/'), 'https://history.verzav.ir')
  assert.equal(
    resolvePublicSiteUrl({ appDomain: 'history.verzav.ir', mode: 'production' }),
    'https://history.verzav.ir',
  )
  assert.equal(
    resolvePublicSiteUrl({ viteUrl: 'https://history.verzav.ir/', envUrl: '', mode: 'production' }),
    'https://history.verzav.ir',
  )
})

test('dev may use localhost when nothing is configured; never the placeholder', () => {
  assert.equal(resolvePublicSiteUrl({ mode: 'development' }), 'http://localhost:3000')
  assert.equal(isPlaceholderSiteUrl('https://iran-history.example/'), true)
  assert.equal(isPlaceholderSiteUrl('https://history.verzav.ir'), false)
})
