import test from 'node:test'
import assert from 'node:assert/strict'
import { lineLinkUrl, parseLineHash } from './lineLink'

test('lineLinkUrl joins origin, path and anchor without double slashes', () => {
  assert.equal(lineLinkUrl('https://a.example/', '/cylinder', 'line-07'), 'https://a.example/cylinder#line-07')
  assert.equal(lineLinkUrl('https://a.example', 'en/cylinder', 'line-45'), 'https://a.example/en/cylinder#line-45')
})

test('parseLineHash accepts only reader line anchors', () => {
  assert.equal(parseLineHash('#line-07'), 'line-07')
  assert.equal(parseLineHash('line-45'), 'line-45')
  assert.equal(parseLineHash('#peace'), null)
  assert.equal(parseLineHash(''), null)
})
