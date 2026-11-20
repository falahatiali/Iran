#!/usr/bin/env python3
"""Extract Hafez's ghazals, with Ganjoor's meanings, from a sparse clone of ganjoor-data.

  git clone --filter=blob:none --no-checkout --depth 1 https://github.com/ganjoor/ganjoor-data /tmp/gdh
  cd /tmp/gdh && git sparse-checkout set --no-cone /poets/hafez/ && git checkout
  python3 scripts/extract-ganjoor-hafez.py /tmp/gdh

Writes src/data/library/hafez/text/index.json (one line per ghazal, for the index page) and
src/data/library/hafez/text/ghazals/<n>.json (one file per ghazal, loaded only by its own page) and
text/meta.json (the ganjoor-data commit and counts).
Meanings come from Ganjoor's CoupletSummary / PoemSummary. Ganjoor prefixes machine-written ones
with «هوش مصنوعی:»; we strip the prefix and keep the fact as `ai: true`. A few corrections we made
after reading are in hafez/text/fixes.json and are marked `fixed: true`.
"""
import json, os, re, subprocess, sys

src = sys.argv[1] if len(sys.argv) > 1 else '/tmp/gdh'
root = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'library', 'hafez', 'text')
commit = subprocess.check_output(['git', '-C', src, 'rev-parse', 'HEAD'], text=True).strip()
AI = re.compile(r'^\s*هوش\s*مصنوعی\s*:\s*')
DIAC = re.compile(r'[\u064B-\u0652\u0670]')
fixes_path = os.path.join(root, 'fixes.json')
fixes = json.load(open(fixes_path, encoding='utf-8')) if os.path.exists(fixes_path) else {}


def clean(s):
    s = (s or '').replace('\xa0', ' ').replace('\r', '')
    s = re.sub(r'\s*\n\s*', ' ', s)
    return re.sub(r'\s{2,}', ' ', s).strip()


def meaning(raw):
    raw = clean(raw)
    if not raw:
        return None
    ai = bool(AI.match(raw))
    return {'text': AI.sub('', raw).strip(), 'ai': ai}


def norm(s):
    return DIAC.sub('', s).replace('\u200c', ' ').replace('ي', 'ی').replace('ك', 'ک').strip(' ؟!?،.:«»')


def radif(lines):
    ws = [norm(l).split() for l in lines]
    out = []
    for i in range(1, min(map(len, ws)) + 1):
        w = {x[-i] for x in ws}
        if len(w) != 1:
            break
        out.insert(0, ws[0][-i])
    return ' '.join(out)


index = []
os.makedirs(os.path.join(root, 'ghazals'), exist_ok=True)
stats = {'bayts': 0, 'ai': 0, 'human': 0, 'none': 0, 'ps_ai': 0, 'ps_human': 0, 'fixed': 0}
for n in range(1, 496):
    d = json.load(open(os.path.join(src, 'poets', 'hafez', 'ghazal', f'sh{n}.json'), encoding='utf-8'))
    vs = sorted(d['Verses'], key=lambda v: v['VOrder'])
    bayts = []
    for v in vs:
        if v['Position'] == 'Right':
            bayts.append({'l': [clean(v['Text'])], 'm': meaning(v.get('CoupletSummary'))})
        else:
            assert v['Position'] == 'Left', (n, v)
            bayts[-1]['l'].append(clean(v['Text']))
    for i, b in enumerate(bayts, 1):
        assert len(b['l']) == 2, (n, i)
        f = fixes.get(str(n), {}).get(str(i))
        if f:
            b['m'] = {'text': f, 'ai': False, 'fixed': True}
            stats['fixed'] += 1
        if b['m'] is None:
            del b['m']
            stats['none'] += 1
        else:
            stats['ai' if b['m']['ai'] else 'human'] += 1
    stats['bayts'] += len(bayts)
    summary = meaning(d.get('PoemSummary'))
    fs = fixes.get(str(n), {}).get('S')
    if fs:
        summary = {'text': fs, 'ai': False, 'fixed': True}
        stats['fixed'] += 1
    if summary:
        stats['ps_ai' if summary['ai'] else 'ps_human'] += 1
    last = norm(bayts[0]['l'][0])[-1]
    g = {'n': n, 'metre': d['Metre']['Rhythm'] if d.get('Metre') else None, 'summary': summary, 'bayts': bayts}
    with open(os.path.join(root, 'ghazals', f'{n}.json'), 'w', encoding='utf-8') as fh:
        json.dump(g, fh, ensure_ascii=False, separators=(',', ':'))
    lines = [bayts[0]['l'][0], bayts[0]['l'][1]] + ([bayts[1]['l'][1]] if len(bayts) > 1 else [])
    index.append({'n': n, 'first': bayts[0]['l'], 'letter': 'ه' if last == 'ة' else last, 'radif': radif(lines), 'count': len(bayts)})

with open(os.path.join(root, 'index.json'), 'w', encoding='utf-8') as fh:
    json.dump({'source': 'ganjoor-data', 'commit': commit, 'stats': stats, 'ghazals': index}, fh, ensure_ascii=False, separators=(',', ':'))
with open(os.path.join(root, 'meta.json'), 'w', encoding='utf-8') as fh:
    json.dump({'source': 'ganjoor-data', 'commit': commit, 'stats': stats}, fh, ensure_ascii=False, separators=(',', ':'))
print(commit, stats)
