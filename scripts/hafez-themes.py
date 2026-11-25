"""The site's own theme map of Hafez's ghazals: a plain word count, not a reading.

Each ghazal's verse text (ganjoor-data, as in src/data/library/hafez/text/ghazals) is folded
(diacritics removed, Arabic ي/ك to Persian), split into words on spaces and punctuation, and a word
counts for a theme when it is one of that theme's listed words, alone or with a common suffix
(ها، ان، ی، ای، ش، ت، م، مان، تان، شان), or after «ال» or a joined «ب». A ghazal is tagged with a theme when it has at least
MIN_HITS such words. The lists, the rule and the threshold are written out on the page.
Known limits are listed there too: the bare word «می» (wine) is left out because it cannot be told
apart from the verb prefix; «سحر» can also mean magic; «دوش» can also mean shoulder.

Run: python3 scripts/hafez-themes.py  -> src/data/library/hafez/text/themes.json
"""
import json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TEXT = os.path.join(ROOT, 'src/data/library/hafez/text')
MIN_HITS = 2
TOP = 6

THEMES = [
    ('wine', 'می و میخانه', ['باده', 'شراب', 'ساقی', 'جام', 'میخانه', 'میکده', 'خرابات', 'ساغر', 'قدح', 'صراحی', 'پیاله', 'پیمانه', 'مست', 'مستی', 'خمار', 'میفروش', 'می‌فروش', 'باده‌فروش', 'سبو', 'مغبچه', 'دردکش']),
    ('garden', 'باغ و بهار', ['گل', 'بلبل', 'باغ', 'بستان', 'گلشن', 'گلستان', 'چمن', 'سرو', 'لاله', 'نرگس', 'سوسن', 'بنفشه', 'صبا', 'بهار', 'نسیم', 'شمشاد', 'گلزار', 'غنچه', 'نوبهار', 'ارغوان', 'سمن', 'یاسمن']),
    ('night', 'شب و سحر', ['شب', 'دوش', 'سحر', 'سحرگاه', 'سحرگه', 'صبح', 'صبحدم', 'ستاره', 'ظلمت', 'تاریک', 'مهتاب', 'نیمه‌شب', 'شبگیر', 'دیجور', 'شمع', 'پروانه', 'چراغ']),
    ('separation', 'هجران', ['هجر', 'هجران', 'فراق', 'جدایی', 'دوری', 'مهجور', 'غریب', 'غربت', 'فرقت', 'وداع', 'سفر', 'غایب', 'انتظار', 'مفارقت', 'جدا']),
    ('piety', 'زهد و ریا', ['زاهد', 'صوفی', 'واعظ', 'شیخ', 'خرقه', 'ریا', 'سالوس', 'زرق', 'محتسب', 'مفتی', 'فقیه', 'سجاده', 'تسبیح', 'صومعه', 'منبر', 'محراب', 'دلق', 'زهد', 'تزویر', 'خانقاه', 'مدرسه']),
]
SUFFIXES = ['‌هایی', '‌های', '‌ها', 'هایی', 'های', 'ها', 'ان', '‌ای', 'ای', 'ی', 'یی', 'ش', 'ت', 'م', 'مان', 'تان', 'شان', '‌اش', '‌ات', '‌ام', 'یش', 'یت', 'یم']

def fold(s):
    s = re.sub('[\u064B-\u0652\u0670\u0654\u0655]', '', s)
    return s.replace('\u064A', 'ی').replace('\u0643', 'ک').replace('ة', 'ه')

def words(line):
    return [w for w in re.split(r'[\s،؛:.!؟?«»"()\[\]…\-]+', fold(line)) if w]

LEX = {key: set(fold(w) for w in ws) for key, _, ws in THEMES}

PREFIXES = ['ال', 'ب']  # Arabic article (السّاقی), and old joined «به» (بباده)

def bare(word, lex):
    if word in lex:
        return True
    return any(word.endswith(suf) and word[: -len(suf)] in lex for suf in SUFFIXES)

def hit(word, lex):
    if bare(word, lex):
        return True
    return any(word.startswith(p) and len(word) - len(p) >= 3 and bare(word[len(p):], lex) for p in PREFIXES)

def main():
    idx = json.load(open(os.path.join(TEXT, 'index.json')))['ghazals']
    rows = []
    for e in idx:
        g = json.load(open(os.path.join(TEXT, f"ghazals/{e['n']}.json")))
        ws = [w for b in g['bayts'] for l in b['l'] for w in words(l)]
        rows.append([e['n']] + [sum(1 for w in ws if hit(w, LEX[key])) for key, _, _ in THEMES])
    out = {
        'method': {
            'minHits': MIN_HITS,
            'suffixes': SUFFIXES,
            'prefixes': PREFIXES,
            'themes': [{'key': k, 'label': lab, 'words': ws} for k, lab, ws in THEMES],
        },
        # [n, hits per theme in the order above]
        'ghazals': rows,
        # per theme, the ghazals with the most hits (ties: lower number first), with their opening line
        'top': {key: [[r[0], r[i + 1], idx[r[0] - 1]['first'][0]] for r in sorted(rows, key=lambda r: (-r[i + 1], r[0]))[:TOP]]
                for i, (key, _, _) in enumerate(THEMES)},
    }
    json.dump(out, open(os.path.join(TEXT, 'themes.json'), 'w'), ensure_ascii=False, separators=(',', ':'))
    for i, (k, lab, _) in enumerate(THEMES):
        print(k, sum(1 for r in rows if r[i + 1] >= MIN_HITS))
    print('none', sum(1 for r in rows if all(c < MIN_HITS for c in r[1:])))

main()
