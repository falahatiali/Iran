import assert from 'node:assert/strict'
import { test } from 'node:test'
import { localeFromPath, siblingLocalePath } from './i18n'

test('localeFromPath reads the /en prefix', () => {
  assert.equal(localeFromPath('/property'), 'fa')
  assert.equal(localeFromPath('/en/property'), 'en')
})

test('siblingLocalePath mirrors paired topic pages including property', () => {
  assert.equal(siblingLocalePath('/property'), '/en/property')
  assert.equal(siblingLocalePath('/en/property'), '/property')
  assert.equal(siblingLocalePath('/about'), '/en/about')
  assert.equal(siblingLocalePath('/en/about'), '/about')
  assert.equal(siblingLocalePath('/cylinder'), '/en/cylinder')
  assert.equal(siblingLocalePath('/en/cylinder'), '/cylinder')
  assert.equal(siblingLocalePath('/event/28-mordad'), '/en/event/28-mordad')
  assert.equal(siblingLocalePath('/en/event/28-mordad'), '/event/28-mordad')
  assert.equal(siblingLocalePath('/king/cyrus-ii'), '/en/king/cyrus-ii')
  assert.equal(siblingLocalePath('/en/king/cyrus-ii'), '/king/cyrus-ii')
  assert.equal(siblingLocalePath('/shahnameh'), '/en/shahnameh')
  assert.equal(siblingLocalePath('/en/shahnameh'), '/shahnameh')
  assert.equal(siblingLocalePath('/shahnameh/rostam-esfandiar'), '/en/shahnameh')
  assert.equal(siblingLocalePath('/en/shahnameh/foo'), '/shahnameh/foo')
})
