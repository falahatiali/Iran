import assert from 'node:assert/strict'
import { test } from 'node:test'
import { CERTAINTY_LABEL } from './certainty'

test('secure label does not claim a contemporary source', () => {
  for (const l of ['fa', 'en'] as const) {
    assert.doesNotMatch(CERTAINTY_LABEL[l].secure, /contemporary|هم‌زمان|هم‌روزگار/)
    for (const k of ['secure', 'probable', 'disputed'] as const) assert.ok(CERTAINTY_LABEL[l][k].trim().length > 0)
  }
  assert.equal(CERTAINTY_LABEL.en.secure, 'Secure (well attested)')
})
