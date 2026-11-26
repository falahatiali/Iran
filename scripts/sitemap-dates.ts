/* Writes src/data/sitemap-lastmod.json: each sitemap section's last content change, from git history.
 * Run after content lands (`npm run sitemap:dates`); the Docker build has no .git, so the result is committed. */
import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { SECTIONS, SECTION_SOURCES } from '../src/lib/sitemap'

const root = path.resolve(import.meta.dirname, '..')
if (execFileSync('git', ['rev-parse', '--is-shallow-repository'], { cwd: root, encoding: 'utf8' }).trim() === 'true') {
  throw new Error('shallow clone: every path would date to the last commit. Fetch full history first.')
}
const out: Record<string, string> = {}
for (const s of SECTIONS) {
  const d = execFileSync('git', ['log', '-1', '--format=%cs', '--', ...SECTION_SOURCES[s]], { cwd: root, encoding: 'utf8' }).trim()
  if (d) out[s] = d
}
fs.writeFileSync(path.join(root, 'src/data/sitemap-lastmod.json'), JSON.stringify(out, null, 2) + '\n')
console.log(out)
