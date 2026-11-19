#!/usr/bin/env python3
"""Extract Khayyam's rubaiyat from Ganjoor's open data export (github.com/ganjoor/ganjoor-data).

Only the Khayyam folder is needed; nothing from the dump is committed except the extracted text:

  git clone --depth 1 --filter=blob:none --sparse https://github.com/ganjoor/ganjoor-data /tmp/gd
  git -C /tmp/gd sparse-checkout set poets/khayyam
  python3 scripts/extract-ganjoor-khayyam.py /tmp/gd

Writes src/data/library/khayyam/text/hedayat.json (Sadegh Hedayat's «ترانه‌های خیام», 143 quatrains in his
eight headings) and text/foroughi.json (the Foroughi–Ghani selection, 178 quatrains), each quatrain verbatim,
with its Ganjoor address. For a Hedayat quatrain it also records Hedayat's own star (*), his mark for a quatrain
he found doubtful, and its number in the Foroughi–Ghani set when both editors chose it (matched on the text with
variant readings allowed: similarity of at least 0.7 after normalising).
"""
import difflib, json, re, subprocess, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'src/data/library/khayyam/text'

def norm(s: str) -> str:
    """Compare quatrains across editions: drop diacritics, ZWNJ, punctuation and spaces."""
    s = re.sub(r'[\u064B-\u065F\u0670\u200c\u200e\u200f،؛؟!?,.:«»()\-–—\s]', '', s)
    for a, b in (('ي', 'ی'), ('ك', 'ک'), ('آ', 'ا'), ('أ', 'ا'), ('إ', 'ا'), ('ۀ', 'ه'), ('ة', 'ه')):
        s = s.replace(a, b)
    return s

def poem(f: Path) -> dict:
    d = json.loads(f.read_text())
    lines = [v['Text'].strip() for v in sorted(d['Verses'], key=lambda v: v['VOrder'])]
    if len(lines) != 4:
        raise SystemExit(f'{f}: {len(lines)} lines, expected 4')
    return {'id': d['Id'], 'ganjoor': d['FullUrl'], 'lines': lines}

def cat_poems(cat: Path) -> list[dict]:
    c = json.loads((cat / '_cat.json').read_text())
    return [poem(cat / f"{p['FullUrl'].rsplit('/', 1)[1]}.json") for p in c['Poems']]

def main():
    src = Path(sys.argv[1]) / 'poets/khayyam'
    commit = subprocess.run(['git', '-C', sys.argv[1], 'rev-parse', 'HEAD'], capture_output=True, text=True).stdout.strip()
    OUT.mkdir(parents=True, exist_ok=True)

    fg = cat_poems(src / 'robaee')
    fg_texts = []
    for i, q in enumerate(fg, 1):
        q['n'] = i
        fg_texts.append((i, norm(''.join(q['lines']))))

    def fg_match(lines):
        t = norm(''.join(lines))
        r, i = max((difflib.SequenceMatcher(None, t, x).ratio(), i) for i, x in fg_texts)
        return i if r >= 0.7 else None

    root = json.loads((src / 'tarane/_cat.json').read_text())
    themes, quatrains, n = [], [], 0
    for i, ch in enumerate(root['ChildCats'], 1):
        title = re.sub(r'\s*\[.*\]\s*$', '', ch['Title']).strip()
        slug = ch['FullUrl'].rsplit('/', 1)[1]
        qs = cat_poems(src / 'tarane' / slug)
        themes.append({'id': f't{i}', 'title': title, 'count': len(qs)})
        for q in qs:
            n += 1
            q['n'] = n
            q['theme'] = f't{i}'
            q['doubtful'] = q['lines'][0].startswith('*')
            q['lines'][0] = q['lines'][0].lstrip('* ').strip()
            q['fg'] = fg_match(q['lines'])
            quatrains.append(q)
        print(f'{title:16} {len(qs):3}')
    both = sum(1 for q in quatrains if q['fg'])
    print('hedayat', len(quatrains), 'starred', sum(q['doubtful'] for q in quatrains), 'foroughi', len(fg), 'in both', both)
    meta = {'source': 'https://github.com/ganjoor/ganjoor-data', 'commit': commit}
    (OUT / 'hedayat.json').write_text(json.dumps({**meta, 'themes': themes, 'quatrains': quatrains}, ensure_ascii=False, separators=(',', ':')) + '\n')
    (OUT / 'foroughi.json').write_text(json.dumps({**meta, 'quatrains': fg}, ensure_ascii=False, separators=(',', ':')) + '\n')

if __name__ == '__main__':
    main()
