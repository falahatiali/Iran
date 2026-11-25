"""Extract the Nowruz-nama (attributed to Khayyam) and its meanings from ganjoor-data.

  git clone --filter=blob:none --no-checkout https://github.com/ganjoor/ganjoor-data /tmp/gdh
  cd /tmp/gdh && git sparse-checkout set --no-cone /poets/khayyam/ && git checkout 7d7beabc1edfbddbd51835e979b309d653d25e39
  python3 scripts/extract-ganjoor-nowruz.py /tmp/gdh

Writes src/data/library/khayyam/text/nowruz/{index.json, <n>.json}: one file per section, in Ganjoor's order.
A block is prose {p, m} or a bayt {l: [a, b], m}; `m` is Ganjoor's meaning, `ai` when Ganjoor marks it «هوش مصنوعی».
"""
import json, os, re, subprocess, sys

src = sys.argv[1] if len(sys.argv) > 1 else '/tmp/gdh'
root = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'library', 'khayyam', 'text', 'nowruz')
commit = subprocess.check_output(['git', '-C', src, 'rev-parse', 'HEAD'], text=True).strip()
AI = re.compile(r'^\s*هوش\s*مصنوعی\s*:\s*')


def clean(s):
    s = (s or '').replace('\xa0', ' ').replace('\r', '')
    s = re.sub(r'\s*\n\s*', ' ', s)
    return re.sub(r'\s{2,}', ' ', s).strip()


def meaning(raw):
    raw = clean(raw)
    if not raw:
        return None
    return {'text': AI.sub('', raw).strip(), 'ai': bool(AI.match(raw))}


os.makedirs(root, exist_ok=True)
base = os.path.join(src, 'poets', 'khayyam', 'nouroozname')
cat = json.load(open(os.path.join(base, '_cat.json'), encoding='utf-8'))
stats = {'sections': 0, 'paragraphs': 0, 'bayts': 0, 'ai': 0, 'human': 0, 'none': 0, 'ps_ai': 0, 'ps_human': 0}
index = []
for n, pm in enumerate(cat['Poems'], 1):
    slug = pm['FullUrl'].rsplit('/', 1)[-1]
    assert slug == f'sh{n}', (n, slug)
    d = json.load(open(os.path.join(base, f'{slug}.json'), encoding='utf-8'))
    blocks = []
    for v in sorted(d['Verses'], key=lambda v: v['VOrder']):
        m = meaning(v.get('CoupletSummary'))
        t = clean(v['Text'])
        if v['Position'] == 'Paragraph':
            blocks.append({'p': t, **({'m': m} if m else {})})
        elif v['Position'] == 'Right':
            blocks.append({'l': [t], **({'m': m} if m else {})})
        elif v['Position'] == 'Left':
            blocks[-1]['l'].append(t)
        else:
            raise AssertionError((n, v['Position']))
    for b in blocks:
        stats['paragraphs' if 'p' in b else 'bayts'] += 1
        stats['none' if 'm' not in b else ('ai' if b['m']['ai'] else 'human')] += 1
    summary = meaning(d.get('PoemSummary'))
    if summary:
        stats['ps_ai' if summary['ai'] else 'ps_human'] += 1
    title = re.sub(r'^بخش [۰-۹]+ - ', '', d['Title'])
    sec = {'n': n, 'title': title, 'ganjoor': d['FullUrl'], 'summary': summary, 'blocks': blocks}
    with open(os.path.join(root, f'{n}.json'), 'w', encoding='utf-8') as fh:
        json.dump(sec, fh, ensure_ascii=False, separators=(',', ':'))
    first = blocks[0]['p'] if 'p' in blocks[0] else ' / '.join(blocks[0]['l'])
    index.append({'n': n, 'title': title, 'first': ' '.join(first.split()[:12]), 'count': len(blocks)})
    stats['sections'] += 1
with open(os.path.join(root, 'index.json'), 'w', encoding='utf-8') as fh:
    json.dump({'source': 'ganjoor-data', 'commit': commit, 'stats': stats, 'sections': index}, fh, ensure_ascii=False, separators=(',', ':'))
print(commit, stats)
