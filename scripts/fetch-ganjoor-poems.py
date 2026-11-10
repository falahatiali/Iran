#!/usr/bin/env python3
"""Fetch Shahnameh verses from the Ganjoor API (Moscow text) and store them as JSON."""
import json, time, urllib.request
from pathlib import Path

OUT = Path('/workspace/iran-main/src/data/shahnameh/poems')
RAW = Path('/tmp/ganjoor-raw')
OUT.mkdir(parents=True, exist_ok=True)
RAW.mkdir(parents=True, exist_ok=True)

# poem IDs discovered from api.ganjoor.net category listings on 2026-11-10
STORY_POEMS: dict[str, list[int]] = {
    'keyumars': [1335, 1336],
    'hushang': [1337, 1338, 1339],
    'tahmuras': [1341],
    'jamshid': [1342, 1345],
    'zahhak': [1343, 1344, 1346, 1347, 1348],
    'fereydun': [1349, 1350, 1351, 1352, 1353, 1354, 1355, 1356, 1357, 1358],
    'iraj': list(range(1362, 1369)),           # fereydoon sh5–sh11
    'manuchehr': list(range(1369, 1378)) + [1378],  # fereydoon sh12–sh20 + manoochehr sh1
    'zal': list(range(1379, 1402)),            # manoochehr sh2–sh24
    'rostam-birth': [1402, 1403, 1404],
    'haft-khan': list(range(1434, 1441)),      # kkavoos sh5–sh11
    'sohrab': list(range(1459, 1480)),
    'siyavash': list(range(1480, 1496)),       # through the vengeance after his death
    'kay-khosrow': list(range(1496, 1502)) + [1502, 87954, 87955] + list(range(88083, 88106)),
    # find + just rule + capture/death of Afrasiab through disappearance (mahmood sh24–sh46)
    'bizhan-manizheh': [1507] + list(range(88011, 88024)),
    'rostam-esfandiar': list(range(1575, 1606)),
    'rostam-shaghad': list(range(1606, 1614)),
    'bahram-gur': [1770, 1771, 1782, 1794],    # accession, justice, onager hunt, seven-year tax
    'anushirvan': [1822, 1823, 151743, 151774],  # coronation, tax, Bozorgmehr, chess
}

UA = {'User-Agent': 'iiraan.com-shahnameh-research/1.0 (educational; Moscow edition via Ganjoor)'}

def get(url: str):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=90) as r:
        return json.load(r)

def couplets_from_verses(verses: list[dict]) -> list[dict]:
    by: dict[int, dict] = {}
    for v in verses:
        if v.get('versePosition') not in (0, 1):
            continue
        idx = v['coupletIndex']
        slot = by.setdefault(idx, {'n': idx + 1, 'a': '', 'b': ''})
        if v['versePosition'] == 0:
            slot['a'] = v['text']
        else:
            slot['b'] = v['text']
    missing = [c['n'] for c in by.values() if not c['a'] or not c['b']]
    if missing:
        raise SystemExit(f'incomplete couplets: {missing[:8]}')
    return [by[i] for i in sorted(by)]

def fetch_poem(pid: int) -> dict:
    cache = RAW / f'{pid}.json'
    if cache.exists():
        p = json.loads(cache.read_text())
    else:
        p = get(f'https://api.ganjoor.net/api/ganjoor/poem/{pid}')
        cache.write_text(json.dumps(p, ensure_ascii=False))
        time.sleep(0.35)
    verses = p.get('verses') or []
    couplets = couplets_from_verses(verses)
    full = p.get('fullUrl') or ''
    return {
        'ganjoorId': p['id'],
        'title': p.get('title') or '',
        'fullTitle': p.get('fullTitle') or '',
        'url': f'https://ganjoor.net{full}' if full.startswith('/') else f'https://ganjoor.net/ferdousi/shahname',
        'apiUrl': f'https://api.ganjoor.net/api/ganjoor/poem/{pid}',
        'fullUrl': full,
        'coupletCount': len(couplets),
        'range': {'from': couplets[0]['n'] if couplets else 0, 'to': couplets[-1]['n'] if couplets else 0},
        'couplets': couplets,
    }

def main():
    summary = []
    for slug, ids in STORY_POEMS.items():
        poems = []
        for pid in ids:
            rec = fetch_poem(pid)
            poems.append(rec)
            print(f'  {slug:18} {pid} {rec["coupletCount"]:4}  {rec["title"]}')
        total = sum(p['coupletCount'] for p in poems)
        doc = {
            'slug': slug,
            'fetchedAt': '2026-11-10',
            'source': 'https://api.ganjoor.net',
            'edition': 'متن گنجور بر پایهٔ چاپ مسکو',
            'poemCount': len(poems),
            'coupletCount': total,
            'poems': poems,
        }
        (OUT / f'{slug}.json').write_text(json.dumps(doc, ensure_ascii=False, indent=2) + '\n')
        summary.append((slug, len(poems), total))
    print('\n=== totals ===')
    for slug, npoems, n in summary:
        print(f'{slug:18} {npoems:3} poems  {n:5} couplets')
    print('ALL', sum(n for _,_,n in summary))

if __name__ == '__main__':
    main()
