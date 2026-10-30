import type { Locale } from '../../lib/i18n'
import type { Place } from '../../data/places'
import { EvidenceBadge } from '../cylinder/EvidenceBadge'
import { PageTransition, Reveal } from '../Reveal'
import { Shamseh } from '../Ornament'

const fmt = (n: number) => n.toFixed(4)

export function PlacePage({ place, locale, kings }: { place: Place; locale: Locale; kings: { slug: string; name: string }[] }) {
  const isFa = locale === 'fa'
  const t = isFa
    ? { home: 'خانه', places: 'مکان‌ها و آثار', toc: 'فهرست', map: 'جایگاه بر نقشه', bib: 'منابع', kings: 'فرمانروایان مرتبط', osm: 'نقشهٔ بزرگ‌تر در OpenStreetMap', sources: 'منابع', photoNote: 'همهٔ عکس‌ها از ویکی‌انبار (Wikimedia Commons) است؛ پروانه و پدیدآورنده در صفحهٔ هر پرونده بررسی شده است.', other: 'English' }
    : { home: 'Home', places: 'Places & monuments', toc: 'Contents', map: 'Location', bib: 'Sources', kings: 'Related rulers', osm: 'Larger map on OpenStreetMap', sources: 'Sources', photoNote: 'All photos are from Wikimedia Commons; licence and author were checked on each file page.', other: 'فارسی' }
  const { lat, lon } = place.coord
  const d = 0.03
  const bbox = [lon - d, lat - d / 1.5, lon + d, lat + d / 1.5].map(fmt).join(',')
  const photo = (id: string) => place.photos.find((p) => p.id === id)
  const src = (id: string) => place.sources.find((s) => s.id === id)
  const sep = isFa ? '‹' : '/'
  return (
    <PageTransition>
      <article lang={locale} dir={isFa ? 'rtl' : 'ltr'}>
        <header className="relative overflow-hidden border-b border-gold/15">
          <Shamseh className="absolute -top-24 -end-24 w-96 h-96 opacity-10" spin />
          <div className="relative mx-auto max-w-5xl px-4 py-14 md:py-20">
            <nav aria-label={isFa ? 'مسیر صفحه' : 'Breadcrumb'} className="text-sm text-ivory/60 mb-6">
              <a href="/" className="hover:text-gold inline-block py-2 min-h-11">{t.home}</a>
              <span className="text-gold/50 mx-2" aria-hidden="true">{sep}</span>
              <span>{t.places}</span>
              <span className="text-gold/50 mx-2" aria-hidden="true">{sep}</span>
              <span aria-current="page">{place.name[locale]}</span>
            </nav>
            <h1 id="place-h" className="text-5xl md:text-7xl font-black text-gilded leading-tight">{place.name[locale]}</h1>
            <p className="mt-6 text-xl leading-10 text-ivory/85 max-w-3xl">{place.lede[locale]}</p>
            <dl className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
              {place.facts.map((f) => <div key={f.label.en} className="glass rounded-2xl p-4"><dt className="text-xs text-ivory/50">{f.label[locale]}</dt><dd className="font-bold text-gold-bright mt-1">{f.value[locale]}</dd></div>)}
            </dl>
            <p className="mt-6"><a href={isFa ? `/en/place/${place.slug}` : `/place/${place.slug}`} hrefLang={isFa ? 'en' : 'fa'} className="glass rounded-full px-5 py-2 inline-flex items-center min-h-11 hover:border-gold">{t.other}</a></p>
          </div>
        </header>
        <div className="mx-auto max-w-5xl px-4 py-12 grid gap-12">
          <nav aria-labelledby="toc-h" className="glass rounded-2xl p-5">
            <h2 id="toc-h" className="font-bold text-gold">{t.toc}</h2>
            <ol className="mt-3 grid sm:grid-cols-2 gap-x-6 text-ivory/80">
              {[['map', t.map], ...place.sections.map((s) => [s.id, s.title[locale]]), ['sources', t.bib]].map(([id, label]) => <li key={id}><a href={`#${id}`} className="hover:text-gold inline-flex items-center min-h-11">{label}</a></li>)}
            </ol>
          </nav>
          <section id="map" aria-labelledby="map-h" className="scroll-mt-24">
            <h2 id="map-h" className="text-3xl font-black text-gilded">{t.map}</h2>
            <p className="mt-2 text-ivory/70" dir="ltr">{fmt(lat)}° N, {fmt(lon)}° E — {place.coord.note[locale]}</p>
            <iframe title={`${t.map}: ${place.name[locale]}`} loading="lazy" className="mt-4 w-full h-80 rounded-2xl border border-gold/20" referrerPolicy="no-referrer"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${fmt(lat)},${fmt(lon)}`} />
            <a className="text-gold hover:underline inline-flex items-center min-h-11" href={`https://www.openstreetmap.org/?mlat=${fmt(lat)}&mlon=${fmt(lon)}#map=15/${fmt(lat)}/${fmt(lon)}`} rel="noopener noreferrer" target="_blank">{t.osm}</a>
            <p className="text-xs text-ivory/50">© OpenStreetMap contributors (ODbL)</p>
          </section>
          {place.sections.map((s) => (
            <Reveal key={s.id}>
              <section id={s.id} aria-labelledby={`${s.id}-h`} className="scroll-mt-24">
                <h2 id={`${s.id}-h`} className="text-3xl font-black text-gilded">{s.title[locale]}</h2>
                {s.period && <p className="mt-1 text-turquoise-soft">{s.period[locale]}</p>}
                {s.layers.map((l, i) => (
                  <div key={i} className="mt-5">
                    <EvidenceBadge layer={l.layer} locale={locale} />
                    {l.paras[locale].map((para, n) => <p key={n} className="mt-3 leading-9 text-ivory/85">{para}</p>)}
                  </div>
                ))}
                {s.photos && (
                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    {s.photos.map(photo).filter((x) => x !== undefined).map((ph) => (
                      <figure key={ph.id} className="glass rounded-2xl overflow-hidden">
                        <img src={ph.src} alt={ph.caption[locale]} loading="lazy" decoding="async" className="w-full h-64 object-cover" />
                        <figcaption className="p-3 text-sm text-ivory/70">
                          {ph.caption[locale]} · <a href={ph.page} className="text-gold hover:underline" rel="noopener noreferrer" target="_blank">{ph.author}</a>, {ph.licenseUrl ? <a href={ph.licenseUrl} className="hover:underline" rel="license noopener noreferrer" target="_blank">{ph.license}</a> : ph.license}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                )}
                <p className="mt-4 text-xs text-ivory/50">{t.sources}: {s.sources.map((id, n) => <span key={id}>{n > 0 && (isFa ? '، ' : ', ')}<a href={`#src-${id}`} className="hover:text-gold">{src(id)?.author ?? id}</a></span>)}</p>
              </section>
            </Reveal>
          ))}
          {kings.length > 0 && (
            <section aria-labelledby="kings-h">
              <h2 id="kings-h" className="text-xl font-bold text-gold">{t.kings}</h2>
              <ul className="mt-3 flex flex-wrap gap-2">{kings.map((k) => <li key={k.slug}><a href={`/king/${k.slug}`} className="glass rounded-full px-4 py-2 inline-flex items-center min-h-11 hover:border-gold">{k.name}</a></li>)}</ul>
            </section>
          )}
          <section id="sources" aria-labelledby="sources-h" className="scroll-mt-24">
            <h2 id="sources-h" className="text-xl font-bold text-gold">{t.bib}</h2>
            <ol className="mt-3 space-y-2 text-sm leading-7 text-ivory/70" dir="ltr">
              {place.sources.map((s) => <li key={s.id} id={`src-${s.id}`} className="text-left">{s.author}, <i>{s.title}</i> ({s.year}). {s.url && <a href={s.url} className="text-gold hover:underline break-all" rel="noopener noreferrer" target="_blank">{s.url}</a>}</li>)}
            </ol>
            <p className="mt-4 text-xs text-ivory/50">{t.photoNote}</p>
          </section>
        </div>
      </article>
    </PageTransition>
  )
}
