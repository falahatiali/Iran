import assert from 'node:assert/strict'
import { test } from 'node:test'
import { foldText, hashAnchor, isAnchor, textHash } from './commentAnchors'

test('anchors survive cosmetic edits but change with the words', () => {
  const a = hashAnchor('intro', 'کوروش   بزرگ، شاه\u200Cشاهان «پارس» بود.')
  assert.equal(hashAnchor('intro', 'كوروش بزرگ شاهشاهان پارس بود'), a, 'spaces, ZWNJ, Arabic kaf, punctuation')
  assert.notEqual(hashAnchor('intro', 'کوروش بزرگ شاه ماد بود'), a)
  assert.notEqual(hashAnchor('other', 'کوروش بزرگ، شاه\u200Cشاهان «پارس» بود.'), a, 'section is part of the anchor')
  assert.equal(foldText('سال ۵۳۹'), foldText('سال 539'))
})

test('anchors are short, deterministic, and pass the server check', () => {
  assert.equal(textHash('abc'), textHash('abc'))
  assert.equal(textHash('').length, 7)
  for (const a of [hashAnchor(null, 'x'), hashAnchor('verses', 'y', 3), 'i:beyt-12', '']) assert.ok(isAnchor(a), a)
  assert.equal(hashAnchor('bad id with spaces', 'x').startsWith('p~'), true)
})
