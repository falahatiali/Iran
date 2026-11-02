import { useRef, useState } from 'react'
import type { Locale } from '../../lib/i18n'
import { Reveal } from '../Reveal'
import { EvidenceBadge } from '../cylinder/EvidenceBadge'
import { building, burning, hotspots, labour, music, presentAbsent, sitePhotos, siteSources, videos, type Quote, type SitePhoto } from '../../data/persepolis/site'

const img = (key: string, w: 640 | 1200) => `/media/persepolis/${key}-${w}.webp`
const src = (id: string) => siteSources.find((s) => s.id === id)

function Photo({ p, locale, className = '' }: { p: SitePhoto; locale: Locale; className?: string }) {
  return (
    <figure className={`glass rounded-2xl overflow-hidden ${className}`}>
      <img src={img(p.key, 1200)} srcSet={`${img(p.key, 640)} 640w, ${img(p.key, 1200)} 1200w`} sizes="(min-width: 768px) 50vw, 100vw" alt={p.caption[locale]} loading="lazy" decoding="async" className="w-full h-56 md:h-64 object-cover" />
      <figcaption className="p-3 text-xs text-ivory/70">
        {p.caption[locale]} · <a href={p.file} className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">{p.author}</a>, {p.licenseUrl ? <a href={p.licenseUrl} className="hover:underline" target="_blank" rel="license noopener noreferrer">{p.license}</a> : p.license}
      </figcaption>
    </figure>
  )
}

function Cite({ ids, locale }: { ids: string[]; locale: Locale }) {
  return <p className="text-xs text-ivory/50 mt-2">{locale === 'fa' ? 'منبع: ' : 'Source: '}{ids.map((id) => { const s = src(id); return s ? `${s.author}, ${s.title} (${s.year})` : id }).join(' · ')}</p>
}

function Q({ q, locale }: { q: Quote; locale: Locale }) {
  const s = src(q.source)
  return (
    <blockquote className="read border-gold/40 px-4 py-3 my-4 text-ivory/90" style={{ borderInlineStartWidth: 4, borderInlineStartStyle: 'solid' }}>
      <p className="font-serif" dir="ltr" lang="en">{q.text}</p>
      {locale === 'fa' && <p className="mt-2" dir="rtl" lang="fa">{q.fa}</p>}
      <footer className="mt-2 text-xs text-ivory/50">{q.ref}{s?.url && <> · <a href={s.url} className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">{locale === 'fa' ? 'متن' : 'text'}</a></>}{locale === 'fa' && ' · ترجمهٔ فارسی از ماست'}</footer>
    </blockquote>
  )
}

function TerracePlan({ locale }: { locale: Locale }) {
  const [sel, setSel] = useState(hotspots[2].id)
  const h = hotspots.find((x) => x.id === sel)!
  const p = h.photo ? sitePhotos.find((x) => x.key === h.photo) : undefined
  const isFa = locale === 'fa'
  return (
    <div className="grid md:grid-cols-[3fr_2fr] gap-4 items-start">
      <svg viewBox="0 0 600 400" className="w-full h-auto glass rounded-2xl" role="group" aria-label={isFa ? 'نقشهٔ طرح‌وار صفه' : 'Schematic plan of the terrace'} style={{ direction: 'ltr' }}>
        <path d="M40 60 H500 L540 40 L590 120 V380 H40 Z" fill="#2a2218" stroke="#c9a85c" strokeWidth={2} />
        <path d="M590 40 Q600 200 590 380" stroke="#4a3d2a" strokeWidth={14} fill="none" />
        <rect x={180} y={125} width={100} height={100} fill="#3a2f22" stroke="#7a6a48" />
        <rect x={325} y={95} width={95} height={95} fill="#3a2f22" stroke="#7a6a48" />
        <rect x={215} y={245} width={60} height={45} fill="#3a2f22" stroke="#7a6a48" />
        <rect x={400} y={250} width={100} height={90} fill="#3a2f22" stroke="#7a6a48" />
        <rect x={110} y={100} width={40} height={40} fill="#3a2f22" stroke="#7a6a48" />
        {hotspots.map((x) => (
          <g key={x.id}>
            <circle cx={x.x} cy={x.y} r={x.id === sel ? 16 : 12} fill={x.id === sel ? '#e3b95b' : '#c9a85c88'} stroke="#fff3" />
            <foreignObject x={x.x - 22} y={x.y - 22} width={44} height={44}>
              <button type="button" aria-label={x.name[locale]} aria-pressed={x.id === sel} onClick={() => setSel(x.id)} style={{ width: 44, height: 44, background: 'transparent', cursor: 'pointer' }} />
            </foreignObject>
            <text x={x.x} y={x.y + 30} textAnchor="middle" fontSize={13} fill="#e9dcb8" style={{ pointerEvents: 'none' }}>{x.name[locale]}</text>
          </g>
        ))}
        <text x={50} y={395} fontSize={11} fill="#e9dcb880">{isFa ? 'طرح‌وار، نه به مقیاس · شمال بالا' : 'schematic, not to scale · north up'}</text>
      </svg>
      <article className="glass rounded-2xl p-5" aria-live="polite">
        <h3 className="text-xl font-black text-gold-bright">{h.name[locale]}</h3>
        <p className="text-sm text-turquoise-soft mt-1">{isFa ? 'سازنده: ' : 'Built by: '}{h.builder[locale]}</p>
        <p className="read mt-3 text-ivory/85 text-sm leading-7">{h.body[locale]}</p>
        <Cite ids={h.sources} locale={locale} />
        {p && <Photo p={p} locale={locale} className="mt-4" />}
      </article>
    </div>
  )
}

function MusicPlayer({ locale }: { locale: Locale }) {
  const ref = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const isFa = locale === 'fa'
  const toggle = () => {
    const a = ref.current
    if (!a) return
    if (a.paused) { a.volume = 0.25; void a.play(); setPlaying(true) } else { a.pause(); setPlaying(false) }
  }
  return (
    <div className="flex flex-wrap items-center gap-3 text-sm">
      <audio ref={ref} src={music.src} preload="none" loop muted={muted} onEnded={() => setPlaying(false)} />
      <button type="button" onClick={toggle} className="glass rounded-full px-4 py-2 min-h-11 hover:border-gold">{playing ? (isFa ? '❚❚ توقف موسیقی' : '❚❚ Pause music') : (isFa ? '▶ پخش موسیقی (اختیاری)' : '▶ Play music (optional)')}</button>
      <button type="button" onClick={() => setMuted(!muted)} aria-pressed={muted} className="glass rounded-full px-4 py-2 min-h-11 hover:border-gold">{muted ? (isFa ? 'صدا روشن' : 'Unmute') : (isFa ? 'بی‌صدا' : 'Mute')}</button>
      <span className="text-xs text-ivory/50" dir="ltr">{music.title} · {music.performer} · <a href={music.page} className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">{music.license}</a></span>
    </div>
  )
}

function VideoCard({ v, locale }: { v: (typeof videos)[number]; locale: Locale }) {
  const [on, setOn] = useState(false)
  return (
    <figure className="glass rounded-2xl overflow-hidden">
      <div className="relative aspect-video bg-black">
        {on ? (
          <iframe src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1`} title={v.title} className="absolute inset-0 w-full h-full" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen loading="lazy" />
        ) : (
          <button type="button" onClick={() => setOn(true)} className="absolute inset-0 w-full h-full group" aria-label={(locale === 'fa' ? 'پخش: ' : 'Play: ') + v.title}>
            <img src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`} alt="" loading="lazy" className="w-full h-full object-cover opacity-80 group-hover:opacity-100" />
            <span className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-black/70 text-gold-bright text-2xl flex items-center justify-center" aria-hidden="true">▶</span>
          </button>
        )}
      </div>
      <figcaption className="p-3 text-sm">
        <p className="font-bold text-ivory/90" dir="auto">{v.title}</p>
        <p className="text-xs text-ivory/50 mt-1" dir="auto">{v.channel} · {v.lang.toUpperCase()}</p>
      </figcaption>
    </figure>
  )
}

export const persepolisNav = (isFa: boolean) => [
  ['site', isFa ? 'تخت‌جمشید' : 'Persepolis'], ['plan', isFa ? 'نقشهٔ صفه' : 'Terrace plan'], ['building', isFa ? 'ساخت و کارگران' : 'Building and workers'],
  ['remains', isFa ? 'آنچه هست و نیست' : 'What remains'], ['burning', isFa ? 'سوختن' : 'The burning'], ['films', isFa ? 'مستندها' : 'Documentaries'],
] as const

export function PersepolisSite({ locale }: { locale: Locale }) {
  const isFa = locale === 'fa'
  const L = (b: { fa: string; en: string }) => b[locale]
  const hero = sitePhotos[0]
  return (
    <>
      <section id="site" className="mb-16 space-y-4">
        <figure className="rounded-3xl overflow-hidden relative">
          <img src={img(hero.key, 1200)} srcSet={`${img(hero.key, 640)} 640w, ${img(hero.key, 1200)} 1200w`} sizes="(min-width: 900px) 900px, 100vw" alt={L(hero.caption)} className="w-full h-72 md:h-[26rem] object-cover" fetchPriority="high" />
          <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 to-transparent p-4 pt-16 text-xs text-ivory/80">
            {L(hero.caption)} · <a href={hero.file} className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">{hero.author}</a>, <a href={hero.licenseUrl} className="hover:underline" target="_blank" rel="license noopener noreferrer">{hero.license}</a>
          </figcaption>
        </figure>
        <h2 className="text-3xl font-black text-gilded">{isFa ? 'تخت‌جمشید: پارسه' : 'Persepolis: Pārsa'}</h2>
        <EvidenceBadge layer="historical" locale={locale} />
        <p className="read text-ivory/80">{isFa
          ? 'داریوش یکم حدود ۵۱۸ پ.م. این صفه را بر دامنهٔ کوه مهر برگزید. خشایارشا و اردشیر یکم کار را ادامه دادند. در ۳۳۰ پ.م. سپاه اسکندر آن را غارت کرد و سوزاند. جغرافی‌دانان مسلمان آن را تخت جمشید، صدستون و چهل‌منار نامیدند. اودوریک حدود ۱۳۲۵ م. از آن گذشت و گروتفند با خواندن کتیبه‌هایش راه خط میخی را گشود.'
          : 'Darius I chose this terrace on the slope of the Kuh-e Mehr around 518 BCE. Xerxes and Artaxerxes I continued the work. In 330 BCE Alexander’s army looted and burned it. Muslim geographers called it Takht-e Jamshid, Sad Sotun and Chehel Minar. Odoric passed by around 1325, and Grotefend opened the way to cuneiform by reading its inscriptions.'}</p>
        <Cite ids={['shahbazi']} locale={locale} />
        <h3 className="text-xl font-bold text-gold pt-4">{isFa ? 'گالری: امروز و دیروز' : 'Gallery: today and yesterday'}</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {sitePhotos.slice(1).map((p) => <Photo key={p.key} p={p} locale={locale} />)}
        </div>
      </section>

      <Reveal>
        <section id="plan" className="mb-16 space-y-4">
          <h2 className="text-3xl font-black text-gilded">{isFa ? 'نقشهٔ صفه: روی هر نقطه بزنید' : 'The terrace plan: tap a point'}</h2>
          <TerracePlan locale={locale} />
        </section>
      </Reveal>

      <Reveal>
        <section id="building" className="mb-16 space-y-4">
          <h2 className="text-3xl font-black text-gilded">{isFa ? 'چه کسی ساخت و چه کسانی کار کردند' : 'Who built it, and who did the work'}</h2>
          <EvidenceBadge layer="historical" locale={locale} />
          <ol className="grid md:grid-cols-3 gap-4">
            {building.map((b) => (
              <li key={b.when.en} className="glass rounded-2xl p-4">
                <p className="text-sm text-turquoise-soft">{L(b.when)}</p>
                <p className="font-black text-gold-bright mt-1">{L(b.who)}</p>
                <p className="text-sm text-ivory/80 mt-2 leading-7">{L(b.what)}</p>
              </li>
            ))}
          </ol>
          {labour.map((p) => <p key={p.en} className="read text-ivory/80">{L(p)}</p>)}
          <Cite ids={['shahbazi', 'hallock', 'cameron']} locale={locale} />
          <div className="glass rounded-2xl p-5">
            <EvidenceBadge layer="philosophical" locale={locale} />
            <p className="read text-ivory/80 mt-2">{isFa
              ? 'این برداشت ماست: لوح‌ها کاری را نشان می‌دهند که با جیره و بعدها با نقره پرداخت می‌شد، و برای مادران و کودکان سهم ویژه داشت. این با تصویر «بردگان سازندهٔ کاخ» نمی‌خواند. اما همهٔ این جیره‌ها را دستگاه شاهی تعیین می‌کرد؛ کارگر نه بازاری برای کارش داشت و نه حقی که در برابر شاه از آن دفاع کند. پرداخت با نقره، کمی آزادی انتخاب به کارگر داد.'
              : 'This is our reading: the tablets show work paid in rations and later in silver, with special shares for mothers and children. That does not fit the image of “slaves building palaces”. But every ration was set by the royal administration; the worker had neither a market for his labour nor a right he could defend against the king. Pay in silver gave the worker a little freedom of choice.'}</p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section id="remains" className="mb-16 space-y-4">
          <h2 className="text-3xl font-black text-gilded">{isFa ? 'آنچه هست، آنچه نیست، و آنچه بحث‌برانگیز است' : 'What is there, what is not, and what is debated'}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="glass rounded-2xl p-5"><h3 className="font-bold text-gold">{isFa ? 'آنچه مانده' : 'What remains'}</h3>{presentAbsent.present.map((p) => <p key={p.en} className="text-sm text-ivory/80 mt-2 leading-7">{L(p)}</p>)}</div>
            <div className="glass rounded-2xl p-5"><h3 className="font-bold text-gold">{isFa ? 'آنچه نیست' : 'What is gone'}</h3>{presentAbsent.absent.map((p) => <p key={p.en} className="text-sm text-ivory/80 mt-2 leading-7">{L(p)}</p>)}</div>
          </div>
          {presentAbsent.debates.map((d) => (
            <div key={d.title.en} className="glass rounded-2xl p-5">
              <h3 className="font-bold text-gold-bright">{L(d.title)} <span className="text-xs text-turquoise-soft">{isFa ? '· مورد اختلاف' : '· disputed'}</span></h3>
              <p className="text-sm text-ivory/80 mt-2 leading-7">{L(d.body)}</p>
            </div>
          ))}
          <Cite ids={['shahbazi', 'schmidt', 'plutarch']} locale={locale} />
        </section>
      </Reveal>

      <section id="burning" className="mb-16 rounded-3xl p-6 md:p-10 space-y-5" style={{ background: 'linear-gradient(180deg,#0b0807 0%,#1a0d07 55%,#0b0807 100%)', boxShadow: 'inset 0 0 120px #6b210855' }}>
        <Reveal>
          <p className="text-sm text-[#e0875a]">{isFa ? 'بهار ۳۳۰ پ.م.' : 'Spring 330 BCE'}</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#f0c49a] mt-1">{isFa ? 'سوختن تخت‌جمشید' : 'The burning of Persepolis'}</h2>
          <p className="read text-ivory/80 mt-4">{L(burning.intro)}</p>
          <div className="mt-4"><MusicPlayer locale={locale} /></div>
        </Reveal>
        {burning.versions.map((v, i) => (
          <Reveal key={v.title.en}>
            <div className="rounded-2xl border border-[#6b2108] p-5 bg-black/30">
              <h3 className="font-bold text-[#f0c49a]">{L(v.title)} <span className="text-xs text-[#e0875a]">{isFa ? '· روایت، مورد اختلاف' : '· account, disputed'}</span></h3>
              <p className="text-sm text-ivory/80 mt-2 leading-7">{L(v.body)}</p>
              <Q q={i === 0 ? burning.arrian : burning.plutarch} locale={locale} />
              <Cite ids={v.sources} locale={locale} />
            </div>
          </Reveal>
        ))}
        <Reveal>
          <div className="rounded-2xl border border-[#6b2108] p-5 bg-black/30">
            <EvidenceBadge layer="historical" locale={locale} />
            <p className="text-sm text-ivory/80 mt-2 leading-7">{L(burning.evidence)}</p>
            <Q q={burning.mules} locale={locale} />
            <Cite ids={['schmidt', 'shahbazi', 'plutarch']} locale={locale} />
          </div>
        </Reveal>
        <Reveal>
          <div className="rounded-2xl border border-[#6b2108] p-5 bg-black/30">
            <EvidenceBadge layer="philosophical" locale={locale} />
            <p className="text-sm text-ivory/80 mt-2 leading-7">{L(burning.lens)}</p>
          </div>
        </Reveal>
      </section>

      <Reveal>
        <section id="films" className="mb-16 space-y-4">
          <h2 className="text-3xl font-black text-gilded">{isFa ? 'مستندها و سخنرانی‌ها' : 'Documentaries and lectures'}</h2>
          <p className="text-sm text-ivory/60">{isFa ? 'ویدیوها تنها با کلیک شما از یوتیوب (بدون کوکی) بار می‌شوند. دیدگاه آن‌ها از آنِ سازندگانشان است.' : 'Videos load from YouTube (no-cookie) only when you click. Their views are their makers’ own.'}</p>
          <div className="grid sm:grid-cols-2 gap-4">{videos.map((v) => <VideoCard key={v.id} v={v} locale={locale} />)}</div>
        </section>
      </Reveal>
    </>
  )
}
