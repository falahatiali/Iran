#!/usr/bin/env python3
"""Build this site's Mantiq al-Tayr text, with Ganjoor's per-bayt meanings, from a sparse clone of ganjoor-data.

  git clone --filter=blob:none --no-checkout --depth 1 https://github.com/ganjoor/ganjoor-data /tmp/gda
  cd /tmp/gda && git sparse-checkout set --no-cone /poets/attar/manteghotteyr/ && git checkout
  python3 scripts/extract-ganjoor-mantiq.py /tmp/gda

The book is read in Ganjoor's order (its 29 chapters, 211 poems). Ganjoor keeps the birds' questions to the
hoopoe inside the poems ("عذر آوردن مرغان" is one chapter of 98 tales, and each question begins part-way through
the tale before it), so we cut that chapter at the bayt where each question begins: one page per question.
Every bayt keeps its Ganjoor poem id and its number in that poem, so links and anchors (b-<poem>-<n>) are stable.

Meanings are Ganjoor's CoupletSummary / PoemSummary. Ganjoor prefixes machine-written ones with «هوش مصنوعی:»;
we strip the prefix and keep the fact as `ai: true`. Corrections we made after reading live in
mantiq/text/fixes.json ("<poem id>:<n>" or "<poem id>:S" -> text) and are marked `fixed: true`.

Writes src/data/library/mantiq/text/<slug>.json (one per page, loaded only by that page),
text/load.gen.ts, sections.gen.ts (table of contents) and text/meta.json (commit and counts).
"""
import json, re, subprocess, sys
from pathlib import Path

SRC = Path(sys.argv[1] if len(sys.argv) > 1 else '/tmp/gda')
BOOK = SRC / 'poets/attar/manteghotteyr'
ROOT = Path(__file__).resolve().parent.parent
MQ = ROOT / 'src/data/library/mantiq'
OUT = MQ / 'text'
GANJOOR = '/attar/manteghotteyr'
AI = re.compile(r'^\s*هوش\s*مصنوعی\s*:\s*')
commit = subprocess.check_output(['git', '-C', str(SRC), 'rev-parse', 'HEAD'], text=True).strip()
fixes = json.loads((OUT / 'fixes.json').read_text()) if (OUT / 'fixes.json').exists() else {}

GROUPS = [
    ('opening', 'دیباچه', 'ستایش خدا و پیامبر و یاران'),
    ('gathering', 'انجمن مرغان', 'مرغان گرد می‌آیند و هدهد از سیمرغ می‌گوید'),
    ('birds', 'بهانه‌های مرغان', 'هر مرغ عذری می‌آورد و هدهد پاسخ می‌دهد'),
    ('hoopoe', 'هدهد و مرغان', 'نسبت مرغان با سیمرغ، شیخ صنعان، عزم راه'),
    ('questions', 'پرسش‌های راه', 'بیست‌ودو پرسش مرغان و پاسخ‌های هدهد'),
    ('valleys', 'هفت وادی', 'از طلب تا فقر و فنا'),
    ('end', 'سیمرغ و پایان', 'سی مرغ در پیشگاه سیمرغ'),
]

def clean(s):
    s = (s or '').replace('\xa0', ' ').replace('\r', '')
    s = re.sub(r'\s*\n\s*', ' ', s)
    return re.sub(r'\s{2,}', ' ', s).strip()

def meaning(raw, key):
    if key in fixes:
        return {'text': fixes[key], 'ai': False, 'fixed': True}
    raw = clean(raw)
    if not raw:
        return None
    ai = bool(AI.match(raw))
    return {'text': AI.sub('', raw).strip(), 'ai': ai}

# --- read the book in Ganjoor's order ---
chapters = []  # (cat slug, cat title, [poem])
for c in json.loads((BOOK / '_cat.json').read_text())['ChildCats']:
    cat = c['FullUrl'].rsplit('/', 1)[1]
    meta = json.loads((BOOK / cat / '_cat.json').read_text())
    assert not meta['ChildCats'], cat
    poems = []
    for p in meta['Poems']:
        rel = p['FullUrl'].split('manteghotteyr/', 1)[1]
        d = json.loads((BOOK / f'{rel}.json').read_text())
        assert d['Id'] == p['Id']
        cs = []
        for v in sorted(d['Verses'], key=lambda v: v['VOrder']):
            if v['Position'] == 'Right':
                n = len(cs) + 1
                cs.append({'n': n, 'a': clean(v['Text']), 'b': ''})
                m = meaning(v.get('CoupletSummary'), f"{d['Id']}:{n}")
                if m:
                    cs[-1]['m'] = m
            else:
                assert v['Position'] == 'Left' and not cs[-1]['b'], (rel, v)
                cs[-1]['b'] = clean(v['Text'])
        assert all(x['a'] and x['b'] for x in cs), rel
        poems.append({'id': d['Id'], 'title': clean(p['Title']), 'ganjoor': f'{GANJOOR}/{rel}', 'couplets': cs,
                      'summary': meaning(d.get('PoemSummary'), f"{d['Id']}:S")})
    chapters.append((cat, poems))
poem = {p['id']: p for _, ps in chapters for p in ps}
order = [p['id'] for _, ps in chapters for p in ps]
cat_of = {c: ps for c, ps in chapters}

def whole(cat, only=None):
    return [(p['id'], 1, len(p['couplets'])) for p in cat_of[cat] if only is None or p['ganjoor'].rsplit('/', 1)[1] in only]

# The 22 questions: (poem id, bayt where the question begins, opening words to check, short title of the question)
QUESTIONS = [
    (11904, 38, 'سایلی گفتش', 'برتری هدهد'),
    (11907, 29, 'دیگری گفتش', 'ناتوانی'),
    (11911, 7, 'دیگری گفتش', 'گناه'),
    (11917, 9, 'دیگری گفتش', 'دل ناپایدار'),
    (11920, 17, 'دیگری گفتش', 'نفس'),
    (11924, 5, 'دیگری گفتش', 'ابلیس'),
    (11928, 5, 'دیگری گفتش', 'دوستی زر'),
    (11931, 14, 'دیگری گفتش', 'قصر زرنگار'),
    (11937, 3, 'دیگری گفتش', 'عشق دلبر'),
    (11942, 8, 'دیگری گفتش', 'ترس از مرگ'),
    (11947, 6, 'دیگری گفتش', 'غم و ناکامی'),
    (11953, 15, 'دیگری پرسید', 'فرمان‌برداری'),
    (11957, 6, 'دیگری گفتش', 'پاک‌بازی'),
    (11961, 6, 'دیگری گفتش', 'همت'),
    (11965, 8, 'دیگری گفتش', 'انصاف و وفا'),
    (11969, 32, 'دیگری پرسید', 'گستاخی'),
    (11975, 8, 'دیگری گفتش', 'لاف عشق'),
    (11979, 11, 'دیگری گفتش', 'پندار کمال'),
    (11986, 7, 'دیگری گفتش', 'شادی در سفر'),
    (11991, 5, 'دیگری گفتش', 'چه بخواهیم'),
    (11998, 23, 'دیگری گفت', 'تحفهٔ راه'),
    (12002, 7, 'دیگری گفتش', 'درازی راه'),
]
FA = '۰۱۲۳۴۵۶۷۸۹'
fa = lambda n: ''.join(FA[int(c)] for c in str(n))

def span(start, end):
    """Poem pieces from (poem, n) up to but not including (poem, n); end None = end of the chapter run."""
    out = []
    i = order.index(start[0])
    pid, n = start
    while True:
        p = poem[pid]
        last = len(p['couplets'])
        if end and pid == end[0]:
            if end[1] > n:
                out.append((pid, n, end[1] - 1))
            return out
        out.append((pid, n, last))
        i += 1
        if end is None and (i >= len(order) or poem[order[i]]['ganjoor'].split('/')[3] != 'ozr-morghan'):
            return out
        pid, n = order[i], 1

for pid, n, words, _ in QUESTIONS:
    assert poem[pid]['couplets'][n - 1]['a'].startswith(words), (pid, n)

SECTIONS = [
    ('tawhid', 'opening', 'در توحید باری تعالی', whole('touhid')),
    ('naat', 'opening', 'در نعت رسول', whole('naat')),
    ('kholafa', 'opening', 'در فضائل خلفا', whole('kholafa')),
    ('taassob', 'opening', 'در تعصب', whole('taassob')),
    ('majma', 'gathering', 'آغاز کتاب: مجمع مرغان', whole('aghazm')),
    ('simorgh', 'gathering', 'حکایت سیمرغ', whole('30morgh')),
    ('bolbol', 'birds', 'بلبل', whole('bolbol')),
    ('tooti', 'birds', 'طوطی', whole('2t')),
    ('tavoos', 'birds', 'طاووس', whole('tavoos')),
    ('bat', 'birds', 'بط', whole('bat')),
    ('kabk', 'birds', 'کبک', whole('kabk')),
    ('homay', 'birds', 'همای', whole('homay')),
    ('baz', 'birds', 'باز', whole('baaz')),
    ('bootimar', 'birds', 'بوتیمار', whole('bootimar')),
    ('koof', 'birds', 'کوف', whole('koof')),
    ('saveh', 'birds', 'صعوه', whole('saawe')),
    ('porsesh', 'hoopoe', 'پرسش مرغان', whole('porsesh')),
    ('javab-hodhod', 'hoopoe', 'پاسخ هدهد', whole('hodhod', ['sh1'])),
    ('sheikh-sanan', 'hoopoe', 'داستان شیخ صنعان', whole('hodhod', ['sh2'])),
    ('azm-rah', 'hoopoe', 'عزم راه کردن مرغان', [(11903, 1, len(poem[11903]['couplets'])), (11904, 1, 37)]),
] + [
    (f'q-{i + 1}', 'questions', f'پرسش {fa(i + 1)}: {title}',
     span((pid, n), (QUESTIONS[i + 1][0], QUESTIONS[i + 1][1]) if i + 1 < len(QUESTIONS) else None))
    for i, (pid, n, _, title) in enumerate(QUESTIONS)
] + [
    ('talab', 'valleys', 'وادی طلب', whole('vadi-talab')),
    ('eshgh', 'valleys', 'وادی عشق', whole('vadi-eshgh')),
    ('marefat', 'valleys', 'وادی معرفت', whole('vadi-marefat')),
    ('esteghna', 'valleys', 'وادی استغنا', whole('vadi-esteghna')),
    ('towhid', 'valleys', 'وادی توحید', whole('vad-towhid')),
    ('heyrat', 'valleys', 'وادی حیرت', whole('vadi-heyrat')),
    ('faghr', 'valleys', 'وادی فقر و فنا', whole('vadi-faghr')),
    ('si-morgh', 'end', 'سی‌مرغ در پیشگاه سیمرغ', whole('30-morgh')),
    ('hasb-e-hal', 'end', 'در وصف حال', whole('haaleh')),
]

# --- check: every bayt of the book once, in Ganjoor's order ---
flat = [(pid, k) for _, _, _, pieces in SECTIONS for pid, a, b in pieces for k in range(a, b + 1)]
want = [(pid, c['n']) for pid in order for c in poem[pid]['couplets']]
assert flat == want, 'sections do not cover the book exactly once, in order'

stats = {'bayts': 0, 'ai': 0, 'human': 0, 'fixed': 0, 'none': 0, 'summaries': 0, 'summaries_ai': 0}
toc = []
for f in OUT.glob('*.json'):
    if f.name not in ('fixes.json',):
        f.unlink()
for slug, group, title, pieces in SECTIONS:
    parts = []
    for pid, a, b in pieces:
        p = poem[pid]
        cs = p['couplets'][a - 1:b]
        for c in cs:
            m = c.get('m')
            stats['bayts'] += 1
            stats['none' if not m else 'fixed' if m.get('fixed') else 'ai' if m['ai'] else 'human'] += 1
        part = {'id': pid, 'title': p['title'] if a == 1 else 'پرسش و پاسخ', 'ganjoor': p['ganjoor'], 'from': a, 'to': b,
                'of': len(p['couplets']), 'couplets': cs}
        if a == 1 and p['summary']:
            part['summary'] = p['summary']
            stats['summaries'] += 1
            stats['summaries_ai'] += p['summary']['ai']
        parts.append(part)
    n = sum(len(p['couplets']) for p in parts)
    first = parts[0]['couplets'][0]
    (OUT / f'{slug}.json').write_text(json.dumps({'slug': slug, 'parts': parts}, ensure_ascii=False, separators=(',', ':')) + '\n')
    toc.append({'slug': slug, 'group': group, 'title': title, 'coupletCount': n, 'first': [first['a'], first['b']],
                'parts': [{'id': p['id'], 'title': p['title'], 'from': p['from'], 'to': p['to'], 'count': len(p['couplets'])} for p in parts]})
    print(f'{slug:14} {len(parts):3} parts {n:5} bayts')
total = stats['bayts']
print('TOTAL', total, stats, commit)
(OUT / 'fixes.json').exists() or (OUT / 'fixes.json').write_text('{}\n')
(OUT / 'meta.json').write_text(json.dumps({'source': 'ganjoor-data', 'commit': commit, 'stats': stats}, ensure_ascii=False) + '\n')
(MQ / 'sections.gen.ts').write_text(
    '// Generated by scripts/extract-ganjoor-mantiq.py from ganjoor-data. Do not edit by hand.\n'
    "import type { MantiqGroup, MantiqSectionMeta } from './types'\n\n"
    f'export const MANTIQ_GROUPS: readonly MantiqGroup[] = {json.dumps([{"id": g, "title": t, "sub": s} for g, t, s in GROUPS], ensure_ascii=False, indent=2)}\n\n'
    f'export const MANTIQ_SECTIONS: readonly MantiqSectionMeta[] = {json.dumps(toc, ensure_ascii=False, indent=2)}\n'
    f'\nexport const MANTIQ_TOTAL_COUPLETS = {total}\n'
    f"\nexport const MANTIQ_MEANINGS = {json.dumps({**stats, 'commit': commit}, ensure_ascii=False)} as const\n"
)
(OUT / 'load.gen.ts').write_text(
    '// Generated by scripts/extract-ganjoor-mantiq.py. One lazy chunk per page.\n'
    "import type { MantiqText } from '../types'\n\n"
    'export const textLoaders: Record<string, () => Promise<MantiqText>> = {\n'
    + ''.join(f"  '{t['slug']}': () => import('./{t['slug']}.json').then((m) => m.default as MantiqText),\n" for t in toc)
    + '}\n'
)
