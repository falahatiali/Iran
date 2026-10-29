import { Link } from '@tanstack/react-router'
import { useEffect } from 'react'
import type { CylinderProject } from '../../server/db/research'
import type { EvidenceLayer } from '../../data/research/types'
import type { Locale } from '../../lib/i18n'
import { altCylinderPath } from '../../lib/i18n'
import { formatBoth, pageCitation } from '../../lib/cite'
import { fa as faNum } from '../../lib/format'
import { LIBERTY_THEMES, cylinderLines, lineAnchor } from '../../data/research/cylinderLines'
import { PageTransition, Reveal } from '../Reveal'
import { Divider } from '../Ornament'
import { CiteButton, ShareHashButton } from '../CiteButton'
import { CylinderViewer } from './CylinderViewer'
import { CylinderReader } from './CylinderReader'
import { EvidenceBadge } from './EvidenceBadge'

const TIMELINE = [
  { y: -539, fa: 'فتح بابل به‌دست کوروش؛ کتیبه پس از این رویداد نوشته و در پی دیوار نهاده شده است (کاتالوگ موزه: ۵۳۹ پ.م. به بعد).', en: 'Cyrus captures Babylon; the inscription is written afterwards and deposited in the wall (BM: 539 BC after).' },
  { y: 1879, fa: 'هرمز رسام استوانه را در عمران بابل، در ارتباط با معبد مردوک / پی بنا، می‌یابد.', en: 'Hormuzd Rassam finds the cylinder at Amran, Babylon, in a foundation context tied to the Marduk temple.' },
  { y: 1880, fa: 'ورود به مجموعهٔ موزهٔ بریتانیا؛ شمارهٔ ۹۰۹۲۰.', en: 'Enters the British Museum collection as 90920.' },
  { y: 1912, fa: 'راجرز ترجمهٔ انگلیسی قطعهٔ A را در مالکیت عمومی منتشر می‌کند (کهنه؛ بدون قطعهٔ ییل).', en: 'Rogers publishes a public-domain English of fragment A (dated; no Yale join).' },
  { y: 1972, fa: 'واکر قطعه‌ای تازه از استوانه را معرفی می‌کند (ایرانیکا و کتاب‌شناسی موزه).', en: 'Walker publishes a newly identified fragment (cited by Iranica and the BM).' },
  { y: 1975, fa: 'برگر قطعهٔ ییل (خطوط ۳۶–۴۵) را به متن می‌پیوندد.', en: 'Berger identifies the Yale fragment as lines 36–45.' },
  { y: 2013, fa: 'ویراست فینکل در موزهٔ بریتانیا؛ ترجمهٔ جاری کاتالوگ از اوست و اینجا رونویسی نشده است.', en: 'Finkel’s BM edition; the catalog’s running translation is his and is not copied here.' },
]

function Quote({ n, locale }: { n: number; locale: Locale }) {
  const line = cylinderLines.find((l) => l.n === n)
  if (!line?.en) return null
  const isFa = locale === 'fa'
  return (
    <blockquote className="border-gold/30 px-4 py-3 my-3 text-ivory/90 leading-8" style={{ borderInlineStartWidth: 4, borderInlineStartStyle: 'solid' }}>
      <p className="font-serif" dir="ltr" lang="en">{line.en}</p>
      {isFa && <p className="mt-2" dir="rtl" lang="fa">{line.fa}</p>}
      <footer className="mt-2 text-xs text-ivory/50">
        <a href={`#${lineAnchor(n)}`} className="text-gold hover:underline">
          {isFa ? `سطر ${faNum(n)} · راجرز ۱۹۱۲` : `line ${n} · Rogers 1912`}
        </a>
      </footer>
    </blockquote>
  )
}

export function CylinderPage({ locale, data }: { locale: Locale; data: CylinderProject }) {
  const isFa = locale === 'fa'
  const t = isFa
    ? {
        kicker: 'اثر پرچم · BM 90920',
        title: 'کوروش بزرگ؛ آزادی، حقوق مالکیت و میراث ایران باستان',
        lede: 'استوانهٔ کوروش کتیبهٔ بنایی بابلی است — و در همان متن، حق مردم بر خانه و سرزمین، آزادی آیین، رهایی از بیگاری، و امنیت در برابر غارت را به زبان اکدی ثبت می‌کند. اینجا واژه‌های راجرز ۱۹۱۲ را از تفسیری که از آن واژه‌ها در دفاع از مالکیت و آزادی می‌سازیم جدا نگاه می‌داریم، و از معنایی که این شیء امروز برای ایرانیان دارد.',
        alt: 'English',
        crumbs: 'استوانهٔ کوروش',
        layersTitle: 'سه لایهٔ جدا — هیچ‌گاه در یک صدا قاطی نمی‌شوند',
        open1: 'گشایش',
        open2: 'کوروش و صحنهٔ بابل',
        exhibit: 'نمایش اثر',
        timeline: 'گاه‌شمار',
        guided: 'خوانش راهنما',
        text: 'متن کامل و ترجمه‌ها',
        passages: 'بندهای کلیدی',
        analysis: 'تحلیل تاریخی و فلسفی',
        rights: 'حقوق فردی و مالکیت',
        compare: 'شواهد در برابر تفسیرهای مدرن',
        bib: 'کتاب‌شناسی',
        related: 'خواندن بیشتر',
        damaged: 'آسیب‌دیده / ناقص',
        lines: 'سطر',
        source: 'منبع ترجمهٔ قابل‌نشر',
        noText: 'ترجمه‌ای با مجوز باز برای این بند در دست نیست. خلاصهٔ ما و پیوند به ویراست فینکل / شادیگ.',
        finkelLink: 'ترجمهٔ فینکل در کاتالوگ موزهٔ بریتانیا',
        liviusLink: 'ترجمهٔ علمی دیگر (کوگان/شادیگ) در Livius — بدون مجوز بازنشر',
        photoCredit: 'عکس‌ها و مدل سه‌بعدی: مجوزها در زیر نمایشگر.',
        citePage: 'استناد به این صفحه',
        citePassage: 'استناد به این بند',
        sharePassage: 'پیوند این بند',
        copied: 'کپی شد',
      }
    : {
        kicker: 'Flagship object · BM 90920',
        title: 'Cyrus the Great — Freedom, Ownership, and the Legacy of Ancient Persia',
        lede: 'The Cyrus Cylinder is a Babylonian building inscription — and in that same text it records people’s claim to house and land, freedom of worship, relief from forced labour, and security from plunder. This page keeps Rogers 1912’s wording apart from the interpretation we draw from it in defence of property and liberty, and apart from what the object means to Iranians today.',
        alt: 'فارسی',
        crumbs: 'Cyrus Cylinder',
        layersTitle: 'Three separate layers — never collapsed into one voice',
        open1: 'Opening',
        open2: 'Cyrus and the Babylonian setting',
        exhibit: 'The exhibit',
        timeline: 'Timeline',
        guided: 'Guided reading',
        text: 'Complete text and translations',
        passages: 'Key passages',
        analysis: 'Historical and philosophical analysis',
        rights: 'Individual rights and property',
        compare: 'Evidence against modern readings',
        bib: 'Bibliography',
        related: 'Related reading',
        damaged: 'Damaged / incomplete',
        lines: 'lines',
        source: 'Publishable translation',
        noText: 'No openly licensed translation of this span is on hand. Our summary, plus links to Finkel / Schaudig.',
        finkelLink: 'Finkel’s translation on the British Museum catalog',
        liviusLink: 'Another scholarly English (Cogan/Schaudig) on Livius — no reuse licence stated',
        photoCredit: 'Photographs and 3D model: licences under the viewer.',
        citePage: 'Cite this page',
        citePassage: 'Cite this passage',
        sharePassage: 'Share this passage',
        copied: 'Copied',
      }

  const claims = (layer: EvidenceLayer) => data.claims.filter((c) => c.evidenceLayer === layer && c.locale === locale)
  const yearLabel = (y: number) => (y < 0 ? (isFa ? `${faNum(-y)} پ.م.` : `${-y} BCE`) : (isFa ? `${faNum(y)} م.` : `${y} CE`))
  const iranica = data.bibliography.find((b) => b.id === 'iranica-cyrus-iv')
  const bm = data.bibliography.find((b) => b.id === 'bm-90920')
  const pageCite = pageCitation({
    locale,
    titleFa: 'استوانهٔ کوروش',
    titleEn: 'The Cyrus Cylinder',
    path: locale === 'en' ? '/en/cylinder' : '/cylinder',
    extra: [bm, iranica].filter(Boolean).map((b) => formatBoth(b!)).join('\n\n'),
  })

  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (!id) return
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <PageTransition>
      <div className="mx-auto max-w-4xl px-4 py-14" lang={locale} dir={isFa ? 'rtl' : 'ltr'}>
        <nav aria-label={isFa ? 'مسیر صفحه' : 'Breadcrumb'} className="text-sm text-ivory/60 mb-6">
          <a href="/" className="hover:text-gold inline-block py-2 min-h-11">{isFa ? 'خانه' : 'Home'}</a>
          <span className="text-gold/50 mx-2" aria-hidden="true">{isFa ? '‹' : '/'}</span>
          <span aria-current="page">{t.crumbs}</span>
        </nav>

        <p className="text-turquoise-soft tracking-wide text-sm">{t.kicker}</p>
        <h1 className="text-4xl md:text-5xl font-black text-gilded leading-[1.25] mt-3">{t.title}</h1>
        <p className="mt-6 text-lg leading-9 text-ivory/80">{t.lede}</p>
        <p className="mt-4 flex flex-wrap gap-2">
          <a href={altCylinderPath(locale)} className="glass rounded-full px-5 py-2 inline-block min-h-11 hover:border-gold" hrefLang={locale === 'fa' ? 'en' : 'fa'}>
            {t.alt}
          </a>
          <CiteButton text={pageCite} label={t.citePage} copiedLabel={t.copied} />
        </p>
        <Divider />

        <nav aria-label={isFa ? 'بخش‌های صفحه' : 'On this page'} className="mb-16">
          <ul className="flex flex-wrap gap-2 text-sm">
            {([
              ['opening', t.open1],
              ['setting', t.open2],
              ['exhibit', t.exhibit],
              ['timeline', t.timeline],
              ['guided', t.guided],
              ['text', t.text],
              ['passages', t.passages],
              ['analysis', t.analysis],
              ['rights', t.rights],
              ['compare', t.compare],
              ['bibliography', t.bib],
              ['related', t.related],
            ] as const).map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="glass rounded-full px-4 py-2 inline-flex min-h-11 items-center hover:border-gold">{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <section aria-labelledby="layers" className="mb-16">
          <h2 id="layers" className="text-2xl font-bold text-gold mb-4">{t.layersTitle}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {(['historical', 'philosophical', 'modern'] as const).map((layer) => (
              <div key={layer} className="glass rounded-2xl p-5 space-y-3">
                <EvidenceBadge layer={layer} locale={locale} />
                {claims(layer).slice(0, 1).map((c) => (
                  <p key={c.id} className="text-sm leading-7 text-ivory/80">{c.statement}</p>
                ))}
              </div>
            ))}
          </div>
        </section>

        <Reveal>
          <section id="opening" className="mb-16 space-y-4">
            <h2 className="text-3xl font-black text-gilded">{t.open1}</h2>
            {isFa ? (
              <>
                <p className="leading-9 text-ivory/80">در ویترین موزهٔ بریتانیا بشکه‌ای گلی به درازای تقریبی یک کف دست خوابیده است: پخته، چرخ‌ساز، با میخ‌خط اکدی. شمارهٔ موزه ۹۰۹۲۰ است. کاتالوگ می‌گوید پس از ۵۳۹ پ.م. در بابل ساخته شده، هرمز رسام آن را در ۱۸۷۹ در عمران یافته، و حتی پس از مرمت متن کامل نیست.</p>
                <p className="leading-9 text-ivory/80">افتخار ایرانی به این شیء روی همان سطرهایی می‌ایستد که در دست است: شاهی پارسی که در زبان بابل اعلام می‌کند خانه‌ها را باز می‌سازد، یوغ را برمی‌دارد، خدایان و مردم را به جای خود بازمی‌گرداند، و سپاهش بدون غارت وارد شهر می‌شود. آن سطرها را باید خواند، نه با شعار پوشاند و نه با انکار خالی کرد.</p>
              </>
            ) : (
              <>
                <p className="leading-9 text-ivory/80">In a British Museum case lies a clay barrel about a handspan long: fired, wheel-made, inscribed in Akkadian cuneiform. Museum number 90920. The catalog dates it after 539 BCE in Babylon, credits Hormuzd Rassam at Amran in 1879, and notes that the text is still incomplete after restoration.</p>
                <p className="leading-9 text-ivory/80">Iranian pride in this object stands on the lines we actually have: a Persian king, speaking in Babylonian, who restores houses, lifts a shameful yoke, returns gods and people to their places, and brings his army in without plunder. Those lines should be read — neither wrapped in slogans nor emptied by denial.</p>
              </>
            )}
          </section>
        </Reveal>

        <Reveal>
          <section id="setting" className="mb-16 space-y-4">
            <h2 className="text-3xl font-black text-gilded">{t.open2}</h2>
            {isFa ? (
              <>
                <p className="leading-9 text-ivory/80">در ۵۳۹ پ.م. کوروش بابل را گرفت. آخرین شاه کلدانی نبونئید بود. کتیبه — به روایت ایرانیکا — از زبان کاهنان مردوک نوشته شده: مردوک نبونئید را به تباهی آیین متهم می‌کند، کوروش شاه انشان را برمی‌گزیند، و بابل بدون نبرد سقوط می‌کند. سپس کوروش به اول‌شخص سخن می‌گوید.</p>
                <p className="leading-9 text-ivory/80">این سند مشروعیت بابلی است، هم‌خانوادهٔ کتیبه‌های پی‌نهاد میان‌رودان. ایرانیکا آن را کتیبهٔ بنایی می‌خواند. همان قالب، محتوای مشخصی دارد که در سطرهای ۲۲ تا ۳۴ به خانه، یوغ، پرستشگاه و بازگشت مردم می‌رسد.</p>
              </>
            ) : (
              <>
                <p className="leading-9 text-ivory/80">In 539 BCE Cyrus took Babylon. Nabonidus was the last Chaldean king. Iranica’s account: the text was composed by priests of Marduk. Marduk accuses Nabonidus of cultic ruin, chooses Cyrus of Anshan, and Babylon falls without a battle. Then Cyrus speaks in the first person.</p>
                <p className="leading-9 text-ivory/80">It is a Babylonian legitimacy document, kin to Mesopotamian foundation inscriptions. Iranica calls it a building inscription. That genre still carries specific content: lines 22–34 reach houses, the yoke, sanctuaries, and the return of people.</p>
              </>
            )}
            <EvidenceBadge layer="historical" locale={locale} />
          </section>
        </Reveal>

        <Reveal>
          <section id="exhibit" className="mb-16 space-y-4">
            <h2 className="text-3xl font-black text-gilded">{t.exhibit}</h2>
            <p className="text-sm text-ivory/60">{t.photoCredit}</p>
            <CylinderViewer locale={locale} />
          </section>
        </Reveal>

        <Reveal>
          <section id="timeline" className="mb-16">
            <h2 className="text-3xl font-black text-gilded mb-6">{t.timeline}</h2>
            <ol className="space-y-4">
              {TIMELINE.map((row) => (
                <li key={row.y} className="glass rounded-2xl p-5 flex gap-4">
                  <span className="text-gold font-black shrink-0 w-24">{yearLabel(row.y)}</span>
                  <span className="leading-8 text-ivory/80">{isFa ? row.fa : row.en}</span>
                </li>
              ))}
            </ol>
          </section>
        </Reveal>

        <Reveal>
          <section id="guided" className="mb-16 space-y-4">
            <h2 className="text-3xl font-black text-gilded">{t.guided}</h2>
            {isFa ? (
              <ol className="list-decimal leading-9 text-ivory/80 space-y-2 ps-6">
                <li>آغاز شکسته است؛ چیزی به آن نیفزایید.</li>
                <li>اتهام نبونئید الهیات مردوک است؛ همان اتهام یوغ و بیگاری را نام می‌برد (<a className="text-gold hover:underline" href={`#${lineAnchor(8)}`}>سطر ۸</a>).</li>
                <li>«بدون نبرد» ادعای کتیبه است (<a className="text-gold hover:underline" href={`#${lineAnchor(17)}`}>سطر ۱۷</a>).</li>
                <li>ورود آرام سپاه و ممنوعیت دشمن، امنیت جان و مال را اعلام می‌کند (<a className="text-gold hover:underline" href={`#${lineAnchor(24)}`}>۲۲–۲۴</a>).</li>
                <li>برداشتن یوغ و بازسازی خانه‌ها، رهایی از بیگاری و احیای ملک است (<a className="text-gold hover:underline" href={`#${lineAnchor(25)}`}>۲۵–۲۶</a>).</li>
                <li>بازگشت مردم و خدایان به جای خود، بازگرداندن سکونت و آیین است (<a className="text-gold hover:underline" href={`#${lineAnchor(32)}`}>۳۰–۳۴</a>).</li>
              </ol>
            ) : (
              <ol className="list-decimal leading-9 text-ivory/80 space-y-2 ps-6">
                <li>The opening is broken; do not silently restore it.</li>
                <li>The indictment of Nabonidus is Marduk theology; it also names a yoke of unresting servitude (<a className="text-gold hover:underline" href={`#${lineAnchor(8)}`}>line 8</a>).</li>
                <li>“Without battle” is the inscription’s claim (<a className="text-gold hover:underline" href={`#${lineAnchor(17)}`}>line 17</a>).</li>
                <li>A peaceful army and a ban on the enemy announce security of person and goods (<a className="text-gold hover:underline" href={`#${lineAnchor(24)}`}>22–24</a>).</li>
                <li>Lifting the yoke and restoring houses is relief from corvée and revival of dwellings (<a className="text-gold hover:underline" href={`#${lineAnchor(25)}`}>25–26</a>).</li>
                <li>Returning people and gods to their places restores settlement and worship (<a className="text-gold hover:underline" href={`#${lineAnchor(32)}`}>30–34</a>).</li>
              </ol>
            )}
          </section>
        </Reveal>

        <Reveal>
          <section id="text" className="mb-16 space-y-6">
            <CylinderReader locale={locale} />
            {isFa ? (
              <p className="leading-9 text-ivory/80">متن اکدی ۴۵ سطر است (ایرانیکا): قطعهٔ A در لندن، قطعهٔ B در ییل. ویراست مرجع جاری فینکل ۲۰۱۳ است؛ ترجمهٔ او در کاتالوگ موزه آمده و <strong>اینجا بازنشر نشده</strong> چون حق‌نشر دارد. آنچه قانوناً سطر به سطر می‌آید راجرز ۱۹۱۲ است.</p>
            ) : (
              <p className="leading-9 text-ivory/80">The Akkadian text runs to 45 lines (Iranica): fragment A in London, fragment B at Yale. The current reference edition is Finkel 2013; his translation appears on the museum catalog and is <strong>not reproduced here</strong> (copyright). What we may print line by line is Rogers 1912.</p>
            )}
            <p className="flex flex-wrap gap-3 text-sm">
              <a className="text-gold hover:underline min-h-11 inline-flex items-center" href="https://www.britishmuseum.org/collection/object/W_1880-0617-1941">{t.finkelLink}</a>
              <a className="text-gold hover:underline min-h-11 inline-flex items-center" href="https://www.livius.org/sources/content/cyrus-cylinder/cyrus-cylinder-translation/">{t.liviusLink}</a>
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section id="passages" className="mb-16">
            <h2 className="text-3xl font-black text-gilded mb-6">{t.passages}</h2>
            <div className="space-y-6">
              {data.passages.map((p) => {
                const body = data.passageTexts.find((x) => x.passageId === p.id && data.translations.find((tr) => tr.id === x.translationId && tr.language === locale && tr.canReproduce))
                const notes = data.annotations.filter((a) => a.passageId === p.id && a.locale === locale)
                return (
                  <article key={p.id} id={p.id} className="glass rounded-2xl p-6 space-y-3">
                    <header className="flex flex-wrap items-center gap-3">
                      <code dir="ltr" className="text-gold text-sm">{p.id}</code>
                      <span className="text-ivory/50 text-sm">{t.lines} {isFa ? `${faNum(p.linesFrom)}–${faNum(p.linesTo)}` : `${p.linesFrom}–${p.linesTo}`}</span>
                      {p.damaged && <span className="text-xs text-crimson">{t.damaged}</span>}
                      <ShareHashButton hash={p.id} label={t.sharePassage} copiedLabel={t.copied} />
                      <CiteButton
                        text={pageCitation({
                          locale,
                          titleFa: `استوانهٔ کوروش، بند ${p.id} (سطر ${p.linesFrom}–${p.linesTo})`,
                          titleEn: `Cyrus Cylinder, passage ${p.id} (lines ${p.linesFrom}–${p.linesTo})`,
                          path: `${locale === 'en' ? '/en/cylinder' : '/cylinder'}#${p.id}`,
                          extra: iranica ? formatBoth(iranica) : undefined,
                        })}
                        label={t.citePassage}
                        copiedLabel={t.copied}
                      />
                    </header>
                    <p className="leading-8 text-ivory/85">{isFa ? p.summaryFa : p.summaryEn}</p>
                    {body ? (
                      <blockquote className="border-gold/30 px-4 py-2 text-ivory/90 leading-8" style={{ borderInlineStartWidth: 4, borderInlineStartStyle: 'solid' }}>
                        <p>{body.body}</p>
                        <footer className="mt-2 text-xs text-ivory/50">{t.source}: Rogers 1912</footer>
                      </blockquote>
                    ) : (
                      <p className="text-sm text-ivory/55">{t.noText}</p>
                    )}
                    {notes.map((n) => (
                      <p key={n.id} className="text-sm leading-7 text-ivory/70">
                        <span className="text-gold/80">{n.kind}: </span>{n.body}
                      </p>
                    ))}
                    <p className="text-sm">
                      <a className="text-gold hover:underline" href={`#${lineAnchor(p.linesFrom)}`}>
                        {isFa ? `رفتن به سطر ${faNum(p.linesFrom)} در خوانش موازی` : `Go to line ${p.linesFrom} in the parallel reader`}
                      </a>
                    </p>
                  </article>
                )
              })}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="analysis" className="mb-16 space-y-4">
            <h2 className="text-3xl font-black text-gilded">{t.analysis}</h2>
            <EvidenceBadge layer="historical" locale={locale} />
            {isFa ? (
              <p className="leading-9 text-ivory/80">از نظر تاریخی استوانه گزارش فتح و بازسازی بابل است با صدای مردوک و سپس صدای شاه. کاهنان آن را در سنت کتیبه‌های پی‌نهاد نوشتند. همان گزارش، سطر به سطر، خانه‌های فروریخته، یوغ ننگین، بازگشت مردم به سکونتگاه، و بازگشت خدایان به پرستشگاه را نام می‌برد.</p>
            ) : (
              <p className="leading-9 text-ivory/80">Historically the Cylinder is an account of Babylon’s capture and restoration, in Marduk’s voice then the king’s. Priests wrote it in the foundation-inscription tradition. That same account, line by line, names fallen houses, a shameful yoke, people returned to their settlements, and gods returned to their sanctuaries.</p>
            )}
            <EvidenceBadge layer="philosophical" locale={locale} />
            {claims('philosophical').map((c) => <p key={c.id} className="leading-9 text-ivory/80">{c.statement}</p>)}
          </section>
        </Reveal>

        <Reveal>
          <section id="rights" className="mb-16 space-y-5">
            <h2 className="text-3xl font-black text-gilded">{t.rights}</h2>
            <EvidenceBadge layer="philosophical" locale={locale} />
            {isFa ? (
              <p className="leading-9 text-ivory/80">موضع این پروژه این است که استوانه حق مالکیت فردی و آزادی را به رسمیت می‌شناسد. این تفسیر است، نه شعار جدا از متن. هر بند زیر به سطر مشخص و نقل راجرز ۱۹۱۲ بسته است. واژه‌ای که در استوانه نیست — از جمله نام یهودا — ساخته نشده است.</p>
            ) : (
              <p className="leading-9 text-ivory/80">This project’s position is that the Cylinder recognizes individual property rights and liberty. That is interpretation, not a slogan detached from the text. Each block below is tied to a numbered line and to Rogers 1912. Words the Cylinder does not contain — including the name Judah — are not invented.</p>
            )}

            <article className="glass rounded-2xl p-6 space-y-2">
              <h3 className="text-xl font-bold text-gold">
                <a href={`#${lineAnchor(24)}`}>{isFa ? LIBERTY_THEMES.peace.fa : LIBERTY_THEMES.peace.en}</a>
              </h3>
              {isFa ? (
                <p className="leading-8 text-ivory/80">کوروش ورود خود را «با پیروزی» اما «آسوده» می‌نویسد و می‌گوید در همهٔ سومر و اکد دشمنی را راه نداده است. غارت، وحشت، و دست‌درازی سپاه به مال مردم دقیقاً همان چیزی است که این سطرها نفی می‌کنند. امنیت تصرف، پیش‌شرط مالکیت است.</p>
              ) : (
                <p className="leading-8 text-ivory/80">Cyrus writes his entry as triumphant and yet peaceful, and says he permitted no enemy in all Sumer and Akkad. Plunder, terror, and an army’s seizure of people’s goods are exactly what these lines shut out. Secure possession is the precondition of property.</p>
              )}
              <Quote n={22} locale={locale} />
              <Quote n={24} locale={locale} />
            </article>

            <article className="glass rounded-2xl p-6 space-y-2">
              <h3 className="text-xl font-bold text-gold">
                <a href={`#${lineAnchor(25)}`}>{isFa ? LIBERTY_THEMES.corvee.fa : LIBERTY_THEMES.corvee.en}</a>
              </h3>
              {isFa ? (
                <p className="leading-8 text-ivory/80">نبونئید، به روایت کتیبه، مردم را «با بیگاری بی‌آسایش» تباه کرده بود. کوروش می‌گوید «یوغ ننگین» از گردن مردم بابل برداشته شد. بیگاری، گرفتن اجباری زمان و نیروی شخص است — نقیض آزادی پیشه و ثمرهٔ کار. برداشتن یوغ، به رسمیت شناختن همان آزادی است.</p>
              ) : (
                <p className="leading-8 text-ivory/80">Nabonidus, in the inscription’s voice, had brought people to ruin through “servitude without rest.” Cyrus says the “shameful yoke” was removed from Babylon’s people. Corvée is coerced taking of a person’s time and labour — the negation of liberty of occupation and of the fruit of work. Lifting that yoke recognizes that liberty.</p>
              )}
              <Quote n={8} locale={locale} />
              <Quote n={25} locale={locale} />
            </article>

            <article className="glass rounded-2xl p-6 space-y-2">
              <h3 className="text-xl font-bold text-gold">
                <a href={`#${lineAnchor(26)}`}>{isFa ? LIBERTY_THEMES.houses.fa : LIBERTY_THEMES.houses.en}</a>
              </h3>
              {isFa ? (
                <p className="leading-8 text-ivory/80">سطر ۲۶ خانه‌های فروریخته را بازمی‌سازد و ویرانه را پاک می‌کند. خانه، ملموس‌ترین شکل ملک است. شاهی که ویرانی خانه‌ها را پایان می‌دهد، تصرف مسکونی را به رسمیت می‌شناسد — نه به‌عنوان لطف مبهم، بلکه به‌عنوان عمل مشخص روی «šubat» / dwellings.</p>
              ) : (
                <p className="leading-8 text-ivory/80">Line 26 restores fallen dwellings and clears their ruins. A house is the most concrete form of property. A king who ends the ruin of houses recognizes residential possession — not as a vague favour, but as a specified act upon “dwellings.”</p>
              )}
              <Quote n={26} locale={locale} />
            </article>

            <article className="glass rounded-2xl p-6 space-y-2">
              <h3 className="text-xl font-bold text-gold">
                <a href={`#${lineAnchor(32)}`}>{isFa ? LIBERTY_THEMES.return.fa : LIBERTY_THEMES.return.en}</a>
              </h3>
              {isFa ? (
                <p className="leading-8 text-ivory/80">از آشور و شوش تا شهرهای آن سوی دجله، کوروش مردم را گرد می‌آورد و به سکونتگاه‌هایشان بازمی‌گرداند. تبعید، سلب سرزمین و خانه است. بازگشت به «da-ád-mi» / dwelling-places، اعادهٔ همان ملک است. نام یهودا در متن نیست؛ ادعای ما از همین سطرهای نام‌برده است، نه از کتاب مقدس.</p>
              ) : (
                <p className="leading-8 text-ivory/80">From Asshur and Susa to the cities beyond the Tigris, Cyrus gathers people and restores them to their dwelling-places. Deportation is the taking of land and house. Return to those settlements is restitution of that holding. Judah is not named; the claim here is from these lines, not from the Bible.</p>
              )}
              <Quote n={30} locale={locale} />
              <Quote n={32} locale={locale} />
            </article>

            <article className="glass rounded-2xl p-6 space-y-2">
              <h3 className="text-xl font-bold text-gold">
                <a href={`#${lineAnchor(33)}`}>{isFa ? LIBERTY_THEMES.worship.fa : LIBERTY_THEMES.worship.en}</a>
              </h3>
              {isFa ? (
                <p className="leading-8 text-ivory/80">خدایانی که نبونئید به‌زور به بابل آورده بود به پرستشگاه خود بازمی‌گردند. آزادی آیین یعنی جماعت بتواند خدای خود را در جای خود بپرستد، نه در اسارتِ مرکز. این سطرها همان آزادی را ثبت می‌کنند.</p>
              ) : (
                <p className="leading-8 text-ivory/80">Gods whom Nabonidus had forced into Babylon are returned to their own sanctuaries. Freedom of worship means a community may serve its god in its own place, not in captivity at the centre. These lines record that liberty.</p>
              )}
              <Quote n={33} locale={locale} />
              <Quote n={34} locale={locale} />
            </article>

            {isFa ? (
              <p className="leading-9 text-ivory/80">برای اقتصاد جاری هخامنشی — جیره، نقره، kurtaš — باید سراغ <Link to="/archives" className="text-gold hover:underline">بایگانی بارو و خزانهٔ تخت‌جمشید</Link> رفت. آن الواح دستگاه توشهٔ شاهی‌اند. استوانه چیز دیگری است: اعلام حد بر غارت، بیگاری، تبعید آیین و سلب خانه.</p>
            ) : (
              <p className="leading-9 text-ivory/80">For the running Achaemenid economy — rations, silver, kurtaš — turn to the <Link to="/archives" className="text-gold hover:underline">Persepolis Fortification and Treasury archives</Link>. Those tablets are a royal provisioning machine. The Cylinder is something else: a public limit on plunder, corvée, cultic exile, and the taking of houses.</p>
            )}
          </section>
        </Reveal>

        <Reveal>
          <section id="compare" className="mb-16 space-y-4">
            <h2 className="text-3xl font-black text-gilded">{t.compare}</h2>
            {data.interpretations.filter((i) => i.locale === locale).map((i) => (
              <div key={i.id} className="glass rounded-2xl p-5 space-y-2">
                <EvidenceBadge layer={i.school.includes('liberty') || i.school.includes('property') ? 'philosophical' : 'modern'} locale={locale} />
                <p className="leading-8 text-ivory/80">{i.body}</p>
              </div>
            ))}
          </section>
        </Reveal>

        <Reveal>
          <section id="bibliography" className="mb-16">
            <h2 className="text-3xl font-black text-gilded mb-6">{t.bib}</h2>
            <ul className="space-y-4">
              {data.bibliography.map((b) => (
                <li key={b.id} className="glass rounded-2xl p-5 text-sm leading-7">
                  <p className="font-bold text-ivory">{b.author ? `${b.author}. ` : ''}{b.title}{b.year ? ` (${b.year})` : ''}</p>
                  <p className="text-ivory/60">{b.publisher}</p>
                  <p className="text-ivory/70 mt-1">{isFa ? 'چه ادعایی را پشتیبانی می‌کند: ' : 'Supports: '}{b.supports}</p>
                  <p className="text-ivory/45 mt-1">{b.accessStatus}{b.url ? ' · ' : ''}{b.url && <a className="text-gold hover:underline break-all" href={b.url}>{b.url}</a>}</p>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <section id="related" className="mb-8 space-y-3">
            <h2 className="text-3xl font-black text-gilded">{t.related}</h2>
            <p><Link to="/archives" className="text-gold hover:underline min-h-11 inline-flex items-center">{isFa ? 'بایگانی بارو و خزانهٔ تخت‌جمشید' : 'Persepolis Fortification and Treasury archives'}</Link></p>
            <p><Link to="/dynasty/$slug" params={{ slug: 'achaemenids' }} className="text-gold hover:underline min-h-11 inline-flex items-center">{isFa ? 'دودمان هخامنشی' : 'The Achaemenid dynasty'}</Link></p>
            <p><Link to="/king/$slug" params={{ slug: 'cyrus-ii' }} className="text-gold hover:underline min-h-11 inline-flex items-center">{isFa ? 'کوروش دوم' : 'Cyrus II'}</Link></p>
            <p><Link to="/about" className="text-gold hover:underline min-h-11 inline-flex items-center">{isFa ? 'روش‌شناسی' : 'Methodology'}</Link></p>
            <p><a href="https://github.com/falahatiali/Iran/blob/main/docs/FOUNDATIONAL_PHILOSOPHY.md" className="text-gold hover:underline min-h-11 inline-flex items-center">{isFa ? 'اصل فلسفهٔ پروژه' : 'Project philosophy directive'}</a></p>
          </section>
        </Reveal>
      </div>
    </PageTransition>
  )
}
