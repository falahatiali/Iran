#!/usr/bin/env python3
"""Extract Saadi's Bustan and Golestan, with Ganjoor's meanings, from a sparse clone of ganjoor-data.

  git clone --filter=blob:none --no-checkout --depth 1 https://github.com/ganjoor/ganjoor-data /tmp/gds
  cd /tmp/gds && git sparse-checkout set --no-cone /poets/saadi/boostan/ /poets/saadi/golestan/ && git checkout
  python3 scripts/extract-ganjoor-saadi.py /tmp/gds

For each book writes src/data/library/saadi/text/<book>/index.json (chapters in Ganjoor's order, with the title
and opening line of every section) and <book>/<chapter>-<n>.json (one file per section, loaded only by its page),
plus text/meta.json (the ganjoor-data commit and counts). A section is a list of blocks: a bayt {l: [m1, m2]}
or a prose paragraph {p} (Golestan), each with Ganjoor's meaning when it has one. Ganjoor prefixes machine-written
meanings with «هوش مصنوعی:»; we strip the prefix and keep `ai: true`. Our rewrites live in text/fixes.json
(key "<book>/<chapter>/<n>", then the block number or "S" for the summary) and are marked `fixed: true`.
"""
import json, os, re, subprocess, sys

src = sys.argv[1] if len(sys.argv) > 1 else '/tmp/gds'
root = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'library', 'saadi', 'text')
commit = subprocess.check_output(['git', '-C', src, 'rev-parse', 'HEAD'], text=True).strip()
AI = re.compile(r'^\s*هوش\s*مصنوعی\s*:\s*')
fixes_path = os.path.join(root, 'fixes.json')
fixes = json.load(open(fixes_path, encoding='utf-8')) if os.path.exists(fixes_path) else {}
BOOKS = {'bustan': 'boostan', 'golestan': 'golestan'}


def clean(s):
    s = (s or '').replace('\xa0', ' ').replace('\r', '')
    s = re.sub(r'\s*\n\s*', ' ', s)
    return re.sub(r'\s{2,}', ' ', s).strip()


def meaning(raw):
    raw = clean(raw)
    if not raw:
        return None
    return {'text': AI.sub('', raw).strip(), 'ai': bool(AI.match(raw))}



def poem(url):
    return json.load(open(os.path.join(src, 'poets', url.lstrip('/') + '.json'), encoding='utf-8'))


meta = {'source': 'ganjoor-data', 'commit': commit, 'books': {}}
for slug, gslug in BOOKS.items():
    cat = json.load(open(os.path.join(src, 'poets', 'saadi', gslug, '_cat.json'), encoding='utf-8'))
    chapters = [{'slug': 'dibache', 'title': p['Title'], 'poems': [p]} for p in cat['Poems']]
    for c in cat['ChildCats']:
        cc = json.load(open(os.path.join(src, 'poets', c['FullUrl'].lstrip('/'), '_cat.json'), encoding='utf-8'))
        chapters.append({'slug': re.sub(r'^g', '', c['FullUrl'].rsplit('/', 1)[1]), 'title': c['Title'], 'poems': cc['Poems']})
    os.makedirs(os.path.join(root, slug), exist_ok=True)
    st = {'sections': 0, 'bayts': 0, 'paragraphs': 0, 'ai': 0, 'human': 0, 'fixed': 0, 'none': 0, 'sum_ai': 0, 'sum_human': 0, 'sum_fixed': 0}
    index = []
    for ch in chapters:
        secs = []
        for n, p in enumerate(ch['poems'], 1):
            d = poem(p['FullUrl'])
            blocks, key = [], None
            for v in sorted(d['Verses'], key=lambda v: v['VOrder']):
                pos, t = v['Position'], clean(v['Text'])
                if pos == 'Paragraph':
                    blocks.append({'p': t, 'm': meaning(v.get('CoupletSummary'))})
                elif pos == 'Right':
                    blocks.append({'l': [t], 'm': meaning(v.get('CoupletSummary'))})
                elif pos == 'Left':
                    blocks[-1]['l'].append(t)
                else:
                    raise SystemExit(f'unknown position {pos} in {p["FullUrl"]}')
            fx = fixes.get(f'{slug}/{ch["slug"]}/{n}', {})
            for i, b in enumerate(blocks, 1):
                assert 'p' in b or len(b['l']) == 2, (p['FullUrl'], i)
                if str(i) in fx:
                    b['m'] = {'text': fx[str(i)], 'ai': False, 'fixed': True}
                if b['m'] is None:
                    del b['m']
                    st['none'] += 1
                else:
                    st['fixed' if b['m'].get('fixed') else 'ai' if b['m']['ai'] else 'human'] += 1
                st['paragraphs' if 'p' in b else 'bayts'] += 1
            summary = {'text': fx['S'], 'ai': False, 'fixed': True} if 'S' in fx else meaning(d.get('PoemSummary'))
            if summary:
                st['sum_fixed' if summary.get('fixed') else 'sum_ai' if summary['ai'] else 'sum_human'] += 1
            title = re.sub(r'^بخش\s*[۰-۹0-9]+\s*-\s*', '', d['Title']).strip()
            first = blocks[0]['l'][0] if 'l' in blocks[0] else blocks[0]['p']
            if len(first) > 90:
                first = first[:first.rfind(' ', 0, 88)] + '…'
            sec = {'book': slug, 'chapter': ch['slug'], 'n': n, 'title': title, 'ganjoor': p['FullUrl'], 'summary': summary, 'blocks': blocks}
            with open(os.path.join(root, slug, f'{ch["slug"]}-{n}.json'), 'w', encoding='utf-8') as fh:
                json.dump(sec, fh, ensure_ascii=False, separators=(',', ':'))
            secs.append({'n': n, 'title': title, 'first': first, 'count': len(blocks)})
            st['sections'] += 1
        index.append({'slug': ch['slug'], 'title': ch['title'], 'sections': secs})
    with open(os.path.join(root, slug, 'index.json'), 'w', encoding='utf-8') as fh:
        json.dump({'book': slug, 'chapters': index}, fh, ensure_ascii=False, separators=(',', ':'))
    meta['books'][slug] = {**st, 'chapters': [[c['slug'], len(c['sections']), c['title']] for c in index]}
with open(os.path.join(root, 'meta.json'), 'w', encoding='utf-8') as fh:
    json.dump(meta, fh, ensure_ascii=False, separators=(',', ':'))
print(commit, json.dumps({k: {x: y for x, y in v.items() if x != 'chapters'} for k, v in meta['books'].items()}, ensure_ascii=False))
