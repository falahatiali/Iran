#!/usr/bin/env python3
"""Fetch Attar's Mantiq al-Tayr from the Ganjoor API, verbatim, and split it into this site's reading sections.

Writes src/data/library/mantiq/text/<slug>.json (one file per section, lazy-loaded by the section page)
and src/data/library/mantiq/sections.gen.ts (the table of contents). Re-run to refresh; responses are cached in /tmp.
"""
import json, time, urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'src/data/library/mantiq/text'
TOC = ROOT / 'src/data/library/mantiq/sections.gen.ts'
RAW = Path('/tmp/ganjoor-mq')
RAW.mkdir(exist_ok=True)
OUT.mkdir(parents=True, exist_ok=True)
UA = {'User-Agent': 'iiraan.com-library-research/1.0 (educational; public-domain text via Ganjoor)'}
BASE = '/attar/manteghotteyr'

# (group id, group title)
GROUPS = [
    ('opening', 'دیباچه'),
    ('gathering', 'انجمن مرغان'),
    ('birds', 'بهانه‌های مرغان'),
    ('hoopoe', 'هدهد و مرغان'),
    ('excuses', 'پرسش‌ها و پاسخ‌های راه'),
    ('valleys', 'هفت وادی'),
    ('end', 'سیمرغ و پایان'),
]
# (slug, group, title, Ganjoor category, poem slugs or None for all)
SECTIONS = [
    ('tawhid', 'opening', 'در توحید باری تعالی', 'touhid', None),
    ('naat', 'opening', 'در نعت رسول', 'naat', None),
    ('kholafa', 'opening', 'در فضائل خلفا', 'kholafa', None),
    ('taassob', 'opening', 'در تعصب', 'taassob', None),
    ('majma', 'gathering', 'آغاز کتاب: مجمع مرغان', 'aghazm', None),
    ('simorgh', 'gathering', 'حکایت سیمرغ', '30morgh', None),
    ('bolbol', 'birds', 'بلبل', 'bolbol', None),
    ('tooti', 'birds', 'طوطی', '2t', None),
    ('tavoos', 'birds', 'طاووس', 'tavoos', None),
    ('bat', 'birds', 'بط', 'bat', None),
    ('kabk', 'birds', 'کبک', 'kabk', None),
    ('homay', 'birds', 'همای', 'homay', None),
    ('baz', 'birds', 'باز', 'baaz', None),
    ('bootimar', 'birds', 'بوتیمار', 'bootimar', None),
    ('koof', 'birds', 'کوف', 'koof', None),
    ('saveh', 'birds', 'صعوه', 'saawe', None),
    ('porsesh', 'hoopoe', 'پرسش مرغان', 'porsesh', None),
    ('javab-hodhod', 'hoopoe', 'پاسخ هدهد', 'hodhod', ['sh1']),
    ('sheikh-sanan', 'hoopoe', 'داستان شیخ صنعان', 'hodhod', ['sh2']),
    ('azm-rah', 'hoopoe', 'عزم راه کردن مرغان', 'azm-rah', None),
] + [
    (f'ozr-{i + 1}', 'excuses', f'عذر آوردن مرغان، بخش {"۱۲۳۴۵۶۷۸۹"[i] if i < 9 else "۱۰"}', 'ozr-morghan', [f'sh{n}' for n in range(i * 10 + 1, min(i * 10 + 10, 98) + 1)])
    for i in range(10)
] + [
    ('talab', 'valleys', 'وادی طلب', 'vadi-talab', None),
    ('eshgh', 'valleys', 'وادی عشق', 'vadi-eshgh', None),
    ('marefat', 'valleys', 'وادی معرفت', 'vadi-marefat', None),
    ('esteghna', 'valleys', 'وادی استغنا', 'vadi-esteghna', None),
    ('towhid', 'valleys', 'وادی توحید', 'vad-towhid', None),
    ('heyrat', 'valleys', 'وادی حیرت', 'vadi-heyrat', None),
    ('faghr', 'valleys', 'وادی فقر و فنا', 'vadi-faghr', None),
    ('si-morgh', 'end', 'سی‌مرغ در پیشگاه سیمرغ', '30-morgh', None),
    ('hasb-e-hal', 'end', 'در وصف حال', 'haaleh', None),
]

def get(url):
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=90) as r:
        return json.load(r)

def cached(name, url):
    f = RAW / name
    if f.exists():
        return json.loads(f.read_text())
    d = get(url)
    f.write_text(json.dumps(d, ensure_ascii=False))
    time.sleep(0.3)
    return d

def couplets(verses):
    by = {}
    for v in verses:
        if v.get('versePosition') not in (0, 1):
            raise SystemExit(f'unexpected verse position {v.get("versePosition")}')
        slot = by.setdefault(v['coupletIndex'], {'n': v['coupletIndex'] + 1, 'a': '', 'b': ''})
        slot['a' if v['versePosition'] == 0 else 'b'] = v['text'].strip()
    bad = [c['n'] for c in by.values() if not c['a'] or not c['b']]
    if bad:
        raise SystemExit(f'incomplete couplets {bad[:5]}')
    return [by[i] for i in sorted(by)]

def main():
    cats = {}
    toc = []
    total = 0
    for slug, group, title, cat, only in SECTIONS:
        if cat not in cats:
            cats[cat] = cached(f'cat-{cat}.json', f'https://api.ganjoor.net/api/ganjoor/cat?url={BASE}/{cat}&poems=true&mainSections=false')['cat']['poems']
        poems = [p for p in cats[cat] if only is None or p['urlSlug'] in only]
        parts = []
        for p in poems:
            d = cached(f'{p["id"]}.json', f'https://api.ganjoor.net/api/ganjoor/poem/{p["id"]}')
            cs = couplets(d['verses'])
            parts.append({'id': p['id'], 'title': p['title'].strip(), 'ganjoor': f'{BASE}/{cat}/{p["urlSlug"]}', 'couplets': cs})
        n = sum(len(p['couplets']) for p in parts)
        total += n
        (OUT / f'{slug}.json').write_text(json.dumps({'slug': slug, 'parts': parts}, ensure_ascii=False, separators=(',', ':')) + '\n')
        toc.append({'slug': slug, 'group': group, 'title': title, 'coupletCount': n,
                    'parts': [{'id': p['id'], 'title': p['title'], 'count': len(p['couplets'])} for p in parts]})
        print(f'{slug:14} {len(parts):3} parts {n:5} bayts')
    print('TOTAL', total)
    TOC.write_text(
        '// Generated by scripts/fetch-ganjoor-mantiq.py from the Ganjoor API. Do not edit by hand.\n'
        "import type { MantiqGroup, MantiqSectionMeta } from './types'\n\n"
        f'export const MANTIQ_GROUPS: readonly MantiqGroup[] = {json.dumps([{"id": g, "title": t} for g, t in GROUPS], ensure_ascii=False, indent=2)}\n\n'
        f'export const MANTIQ_SECTIONS: readonly MantiqSectionMeta[] = {json.dumps(toc, ensure_ascii=False, indent=2)}\n'
        f'\nexport const MANTIQ_TOTAL_COUPLETS = {total}\n'
    )
    (OUT / 'load.gen.ts').write_text(
        '// Generated by scripts/fetch-ganjoor-mantiq.py. One lazy chunk per section.\n'
        "import type { MantiqText } from '../types'\n\n"
        'export const textLoaders: Record<string, () => Promise<MantiqText>> = {\n'
        + ''.join(f"  '{t['slug']}': () => import('./{t['slug']}.json').then((m) => m.default),\n" for t in toc)
        + '}\n'
    )

if __name__ == '__main__':
    main()
