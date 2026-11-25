"""Build src/data/library/hafez/sharh/*.json from sources.py (the hand-written «شرح این سایت») and wikirev.json
(the Persian Wikipedia revisions each ghazal's notes were drawn from). Run: python3 scripts/hafez-sharh/build.py"""
import json,os,re
HERE=os.path.dirname(os.path.abspath(__file__))
ROOT=os.path.dirname(os.path.dirname(HERE))
exec(open(os.path.join(HERE,'sources.py')).read())
rev=json.load(open(os.path.join(HERE,'wikirev.json')))
SHORT={'kh':'خرمشاهی، حافظ‌نامه','su':'سودی، شرح سودی','ni':'نیساری','qg':'قزوینی و غنی','ja':'جلالیان، شرح جلالی','sa':'حافظ به سعی سایه','se':'سپهر، مثل و مثل‌واره','zo':'ذوالفقاری، فرهنگ ضرب‌المثل‌ها'}
out=os.path.join(ROOT,'src/data/library/hafez/sharh')
os.makedirs(out,exist_ok=True)
idx=json.load(open(os.path.join(ROOT,'src/data/library/hafez/text/index.json')))['ghazals']
listing=[]
for n,pts in sorted(SHARH.items()):
    used=[]
    points=[]
    for h,t,refs in pts:
        rs=[]
        for r in refs:
            m=re.match(r'^([a-z]{2})(?::(.+))?$',r)
            if m:
                k,p=m.groups(); used.append(k) if k not in used else None
                rs.append(SHORT[k]+(f'، ص {p}' if p else ''))
            else: rs.append(r)
        assert rs, (n,h)
        points.append({'h':h,'t':t,'refs':rs})
    w=rev[str(n)]
    doc={'n':n,'points':points,'books':[BOOKS[k] for k in used],'wiki':{'title':w['title'],'oldid':w['oldid'],'date':w['ts'][:10]}}
    json.dump(doc,open(f'{out}/{n}.json','w'),ensure_ascii=False,indent=1)
    listing.append({'n':n,'first':idx[n-1]['first'],'points':len(points)})
json.dump(listing,open(f'{out}/index.json','w'),ensure_ascii=False,indent=1)
print(len(listing),'written')
