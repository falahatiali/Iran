/** Persian typography invariants for every source and data file under src. */
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { test } from 'node:test'

const src = path.resolve(import.meta.dirname, '..')
const walk = (d: string): string[] => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => {
  const p = path.join(d, e.name)
  return e.isDirectory() ? walk(p) : /\.(tsx?|json)$/.test(e.name) && !/\.test\.tsx?$/.test(e.name) ? [p] : []
})
// The Shahnameh stream owns data/shahnameh and checks its own text; verse quoted elsewhere uses می for "wine".
const files = walk(src).filter((f) => !f.includes(`${path.sep}shahnameh${path.sep}`)).map((f) => ({ rel: path.relative(src, f), text: fs.readFileSync(f, 'utf8') }))

function offenders(re: RegExp, skip: (rel: string) => boolean = () => false) {
  const out: string[] = []
  for (const { rel, text } of files) {
    if (skip(rel)) continue
    text.split('\n').forEach((line, i) => { const m = line.match(re); if (m) out.push(`${rel}:${i + 1}: ${m[0]}`) })
  }
  return out
}

test('Persian text uses Persian yeh and kaf, not the Arabic letters', () => {
  // lib/search.ts maps the Arabic forms to the Persian ones, so it must name them
  assert.deepEqual(offenders(/\S*[\u064A\u0643]\S*/, (rel) => rel === 'lib/search.ts'), [])
})

test('the prefix می / نمی is joined to its verb with a ZWNJ, not a space', () => {
  assert.deepEqual(offenders(/(?<![\u0600-\u06FF\u200C])ن?می [\u0600-\u06FF]{2,}/), [])
})

test('Persian quotations use «» rather than straight double quotes', () => {
  assert.deepEqual(offenders(/'[^'\n]*"[\u0600-\u06FF][^"\n]*"[^'\n]*'/), [])
})

test('no space before Persian punctuation', () => {
  assert.deepEqual(offenders(/[\u0600-\u06FF] [،؛؟](?![\u0600-\u06FF])/), [])
})
