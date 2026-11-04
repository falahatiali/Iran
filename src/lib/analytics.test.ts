import assert from 'node:assert/strict'
import { test } from 'node:test'
import { gaEnabled } from './analytics'

test('GA loads only in production with a valid measurement ID', () => {
  assert.equal(gaEnabled(true, 'G-8VDDV8ZLFD'), true)
  assert.equal(gaEnabled(false, 'G-8VDDV8ZLFD'), false)
  assert.equal(gaEnabled(true, ''), false)
  assert.equal(gaEnabled(true, 'x"><script>'), false)
})
