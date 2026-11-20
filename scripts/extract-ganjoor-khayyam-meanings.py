#!/usr/bin/env python3
"""Ganjoor's meanings for the Foroughi–Ghani quatrains that are not in Hedayat's selection (those have our own notes).

  cd /tmp/gdh && git sparse-checkout add /poets/khayyam/ && git checkout
  python3 scripts/extract-ganjoor-khayyam-meanings.py /tmp/gdh

Writes src/data/library/khayyam/text/foroughi-meanings.json: for each such quatrain, the meaning of each of its two
bayts (Ganjoor's CoupletSummary), with `ai` set where Ganjoor marks it «هوش مصنوعی» (the prefix itself is dropped).
Meanings in colloquial spelling are left out rather than shown.
"""
import json, os, re, subprocess, sys

src = sys.argv[1] if len(sys.argv) > 1 else '/tmp/gdh'
root = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'library', 'khayyam', 'text')
commit = subprocess.check_output(['git', '-C', src, 'rev-parse', 'HEAD'], text=True).strip()
AI = re.compile(r'^\s*هوش\s*مصنوعی\s*:\s*')
COLLOQUIAL = re.compile(r'(?:^|[\s،.])(میگه|میگن|درسته|چی|اون|میشه|نمیشه|کنه|داره|باشه|بشه|میکنه|رو)(?=$|[\s.،!؟])')
hedayat = json.load(open(os.path.join(root, 'hedayat.json'), encoding='utf-8'))
foroughi = json.load(open(os.path.join(root, 'foroughi.json'), encoding='utf-8'))
in_hedayat = {q['fg'] for q in hedayat['quatrains'] if q.get('fg')}


def clean(s):
    s = re.sub(r'\s*\n\s*', ' ', (s or '').replace('\xa0', ' ').replace('\r', ''))
    return re.sub(r'\s{2,}', ' ', s).strip()


out, skipped = {}, 0
for q in foroughi['quatrains']:
    if q['n'] in in_hedayat:
        continue
    d = json.load(open(os.path.join(src, 'poets', q['ganjoor'].lstrip('/') + '.json'), encoding='utf-8'))
    ms = []
    for v in sorted(d['Verses'], key=lambda v: v['VOrder']):
        s = clean(v.get('CoupletSummary'))
        if v['Position'] != 'Right' or not s:
            continue
        text = AI.sub('', s).strip()
        if COLLOQUIAL.search(text):
            skipped += 1
            continue
        ms.append({'text': text, 'ai': bool(AI.match(s))})
    if ms:
        out[str(q['n'])] = ms
with open(os.path.join(root, 'foroughi-meanings.json'), 'w', encoding='utf-8') as fh:
    json.dump({'source': 'ganjoor-data', 'commit': commit, 'meanings': out}, fh, ensure_ascii=False, separators=(',', ':'))
print(commit, len(out), 'quatrains;', sum(len(m) for m in out.values()), 'meanings;', skipped, 'colloquial left out')
