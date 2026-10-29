import { Link } from '@tanstack/react-router'
import { useEffect } from 'react'
import type { CylinderProject } from '../../server/db/research'
import type { EvidenceLayer } from '../../data/research/types'
import type { Locale } from '../../lib/i18n'
import { altCylinderPath } from '../../lib/i18n'
import { formatBoth, pageCitation } from '../../lib/cite'
import { fa as faNum } from '../../lib/format'
import { PageTransition, Reveal } from '../Reveal'
import { Divider } from '../Ornament'
import { CiteButton, ShareHashButton } from '../CiteButton'
import { CylinderViewer } from './CylinderViewer'
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

export function CylinderPage({ locale, data }: { locale: Locale; data: CylinderProject }) {
  const isFa = locale === 'fa'
  const t = isFa
    ? {
        kicker: 'اثر پرچم · BM 90920',
        title: 'کوروش بزرگ؛ آزادی، حقوق مالکیت و میراث ایران باستان',
        lede: 'استوانهٔ کوروش یک کتیبهٔ بنایی بابلی است، نه قانون اساسی مدرن. اینجا متن، ماده، و تاریخ کشف را از منابع قابل‌راستی‌آزمایی جدا می‌کنیم از تفسیری که با نظریهٔ حقوق فردی می‌پرسیم، و از معنایی که این شیء امروز برای ایرانیان دارد.',
        alt: 'English',
        crumbs: 'استوانهٔ کوروش',
        layersTitle: 'سه لایهٔ جدا — هیچ‌گاه در یک صدا قاطی نمی‌شوند',
        open1: 'گشایش',
        open2: 'کوروش و صحنهٔ بابل',
        exhibit: 'نمایش اثر',
        timeline: 'گاه‌شمار',
        guided: 'خوانش راهنما',
        text: 'متن و ترجمه‌ها',
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
        photoCredit: 'عکس: دادروت، موزهٔ بریتانیا، CC0 ۱.۰',
        citePage: 'استناد به این صفحه',
        citePassage: 'استناد به این بند',
        sharePassage: 'پیوند این بند',
        copied: 'کپی شد',
      }
    : {
        kicker: 'Flagship object · BM 90920',
        title: 'Cyrus the Great — Freedom, Ownership, and the Legacy of Ancient Persia',
        lede: 'The Cyrus Cylinder is a Babylonian building inscription, not a modern constitution. This page keeps what catalogs and editions establish apart from a philosophical reading in terms of individual rights, and apart from what the object means to Iranians today.',
        alt: 'فارسی',
        crumbs: 'Cyrus Cylinder',
        layersTitle: 'Three separate layers — never collapsed into one voice',
        open1: 'Opening',
        open2: 'Cyrus and the Babylonian setting',
        exhibit: 'The exhibit',
        timeline: 'Timeline',
        guided: 'Guided reading',
        text: 'Text and translations',
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
        photoCredit: 'Photo: Daderot, British Museum, CC0 1.0',
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
                <p className="leading-9 text-ivory/80">ایرانیان اغلب این شیء را با افتخار می‌خوانند. آن افتخار جای دارد — اگر روی دستاورد واقعی بایستد: شاهی پارسی که خود را در زبان بابل، با بازسازی معابد و بازگرداندن جماعت‌ها معرفی می‌کند. جای ندارد اگر کتیبه را قانون اساسی لیبرال جا بزنیم.</p>
              </>
            ) : (
              <>
                <p className="leading-9 text-ivory/80">In a British Museum case lies a clay barrel about a handspan long: fired, wheel-made, inscribed in Akkadian cuneiform. Museum number 90920. The catalog dates it after 539 BCE in Babylon, credits Hormuzd Rassam at Amran in 1879, and notes that the text is still incomplete after restoration.</p>
                <p className="leading-9 text-ivory/80">Iranians often meet this object with pride. That pride holds if it rests on what the sources show: a Persian king presenting himself in Babylonian language as restorer of temples and returner of displaced communities. It does not hold if we dress the barrel as a liberal constitution.</p>
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
                <p className="leading-9 text-ivory/80">این یک سند مشروعیت بابلی است، هم‌خانوادهٔ کتیبه‌های پی‌نهاد آشوربانی‌پال، نه فرمان پارسی جدا از سنت میان‌رودان. ایرانیکا آن را صریحاً کتیبهٔ بنایی می‌خواند.</p>
              </>
            ) : (
              <>
                <p className="leading-9 text-ivory/80">In 539 BCE Cyrus took Babylon. Nabonidus was the last Chaldean king. Iranica’s account: the text was composed by priests of Marduk. Marduk accuses Nabonidus of cultic ruin, chooses Cyrus of Anshan, and Babylon falls without a battle. Then Cyrus speaks in the first person.</p>
                <p className="leading-9 text-ivory/80">It is a Babylonian legitimacy document, kin to Assurbanipal foundation inscriptions, not a Persian decree outside Mesopotamian tradition. Iranica calls it a typical building inscription.</p>
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
                <li>اتهام نبونئید الهیات مردوک است، گزارش بی‌طرف نیست.</li>
                <li>«بدون نبرد» ادعای کتیبه است.</li>
                <li>القاب و تبار، شاهی را در زبان بابل می‌نشانند.</li>
                <li>بازگشت مردم و خدایان، بازسازی آیین محلی است نه منشور جهانی.</li>
                <li>قطعهٔ ییل دیوار بابل و آشوربانی‌پال را می‌افزاید؛ پایان هنوز ناقص است.</li>
              </ol>
            ) : (
              <ol className="list-decimal leading-9 text-ivory/80 space-y-2 ps-6">
                <li>The opening is broken; do not silently restore it.</li>
                <li>The indictment of Nabonidus is Marduk theology, not a neutral report.</li>
                <li>“Without battle” is the inscription’s claim.</li>
                <li>Titles and genealogy seat kingship in Babylonian language.</li>
                <li>The return of people and gods is local cult restoration, not a world charter.</li>
                <li>The Yale join adds Babylon’s wall and Ashurbanipal; the ending is still incomplete.</li>
              </ol>
            )}
          </section>
        </Reveal>

        <Reveal>
          <section id="text" className="mb-16 space-y-4">
            <h2 className="text-3xl font-black text-gilded">{t.text}</h2>
            {isFa ? (
              <>
                <p className="leading-9 text-ivory/80">متن اکدی ۴۵ سطر است (ایرانیکا): قطعهٔ A در لندن، قطعهٔ B در ییل. ویراست مرجع جاری فینکل ۲۰۱۳ است؛ ترجمهٔ او در کاتالوگ موزه آمده و <strong>اینجا بازنشر نشده</strong> چون حق‌نشر دارد. شادیگ ۲۰۰۱ ویراست آشورشناسی است و در این گذر کتابش باز نشد.</p>
                <p className="leading-9 text-ivory/80">آنچه قانوناً قابل‌نقل است ترجمهٔ راجرز ۱۹۱۲ از قطعهٔ A است (مالکیت عمومی در آمریکا). کهنه است، قطعهٔ ییل را ندارد، و ترجمهٔ رسمی موزه نیست. فارسی زیر آن برگردان ما از راجرز است، نه رازمجو.</p>
              </>
            ) : (
              <>
                <p className="leading-9 text-ivory/80">The Akkadian text runs to 45 lines (Iranica): fragment A in London, fragment B at Yale. The current reference edition is Finkel 2013; his translation appears on the museum catalog and is <strong>not reproduced here</strong> (copyright). Schaudig 2001 is the Assyriological edition; the book was not opened this pass.</p>
                <p className="leading-9 text-ivory/80">What we may lawfully quote is Rogers 1912 for fragment A (public domain in the United States). It is old, lacks the Yale join, and is not the official museum translation. Persian below is our rendering of Rogers, not Razmju.</p>
              </>
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
              <p className="leading-9 text-ivory/80">از نظر تاریخی استوانه گزارش فتح و بازسازی بابل است با صدای مردوک و سپس صدای شاه. کاهنان آن را در سنت کتیبه‌های پی‌نهاد نوشتند. جنگ، مالیات، جغرافیا و ادغام اقوام را به‌تنهایی توضیح نمی‌دهد و نباید به‌تنهایی علت شاهنشاهی دانسته شود.</p>
            ) : (
              <p className="leading-9 text-ivory/80">Historically the Cylinder is an account of Babylon’s capture and restoration, in Marduk’s voice then the king’s. Priests wrote it in the foundation-inscription tradition. It does not by itself explain the empire’s military, fiscal, or geographic success, and must not be treated as the cause of empire.</p>
            )}
            <EvidenceBadge layer="philosophical" locale={locale} />
            {claims('philosophical').map((c) => <p key={c.id} className="leading-9 text-ivory/80">{c.statement}</p>)}
          </section>
        </Reveal>

        <Reveal>
          <section id="rights" className="mb-16 space-y-4">
            <h2 className="text-3xl font-black text-gilded">{t.rights}</h2>
            {isFa ? (
              <>
                <p className="leading-9 text-ivory/80">جست‌وجوی شاهد مستقیم: استوانه حق مالکیت جهانی، آزادی پیشه، یا الغای بردگی را بیان نمی‌کند. آنچه می‌گوید رفتار شاه با مغلوب، بازسازی نهادهای محلی، توجیه قدرت، و بازگرداندن جماعت‌ها و پیکره‌هاست. این‌ها برای پرسش از قدرت خودسر مهم‌اند — اما شاهد قانونی مالکیت خصوصی نیستند.</p>
                <p className="leading-9 text-ivory/80">برای اقتصاد واقعی هخامنشی باید سراغ <Link to="/archives" className="text-gold hover:underline">بایگانی بارو و خزانهٔ تخت‌جمشید</Link> رفت: جیره، نقره، کارگران kurtaš، مالیات شاهی. ایرانیکا این‌ها را ادارهٔ اقتصاد شاهی می‌داند، نه سند مالکیت فردی به معنای مدرن. بایگانی موری‌شو در این گذر باز نشد.</p>
                <p className="leading-9 text-ivory/80">پرسش‌های جنت‌خواه — آیا فرد صاحب حق است؟ آیا ثمرهٔ کارش در امان است؟ آیا قدرت حد دارد؟ — چارچوب تحلیل ماست. در این گذر کتاب چاپ‌شده با شابک از او تأیید نشد؛ جمله‌ای به او نسبت داده نشده است.</p>
              </>
            ) : (
              <>
                <p className="leading-9 text-ivory/80">Direct textual search: the Cylinder does not state a universal ownership right, freedom of occupation, or the abolition of slavery. It does speak to how a conqueror treats the defeated, restores local institutions, justifies power, and returns communities and cult images. That matters for arbitrary power — it is not a statute of private property.</p>
                <p className="leading-9 text-ivory/80">For the Achaemenid economy, turn to the <Link to="/archives" className="text-gold hover:underline">Persepolis Fortification and Treasury archives</Link>: rations, silver, kurtaš workers, royal taxes. Iranica treats these as royal-economy administration, not modern individual title. The Murashu archive was not opened this pass.</p>
                <p className="leading-9 text-ivory/80">Jannatkhah’s questions — is the individual a rights-holder? is the fruit of labour secure? are there limits on power? — are our analytical frame. No ISBN edition of his book was verified here; no sentence is attributed to him.</p>
              </>
            )}
          </section>
        </Reveal>

        <Reveal>
          <section id="compare" className="mb-16 space-y-4">
            <h2 className="text-3xl font-black text-gilded">{t.compare}</h2>
            {data.interpretations.filter((i) => i.locale === locale).map((i) => (
              <div key={i.id} className="glass rounded-2xl p-5 space-y-2">
                <EvidenceBadge layer={i.school.includes('jannatkhah') ? 'philosophical' : 'modern'} locale={locale} />
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
