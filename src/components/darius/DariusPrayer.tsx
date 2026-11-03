import type { Locale } from '../../lib/i18n'

/** DPd §3 (Persepolis, south terrace wall). Translation after Livius / Kent 1953; transliteration as in Kent and Lecoq. */
export const dariusPrayer = {
  quote: {
    fa: 'اهورامزدا این کشور را از سپاه دشمن، از خشک‌سالی، از دروغ بپاید!',
    en: 'May Ahuramazda protect this country from a (hostile) army, from famine, from the Lie!',
  },
  translit: 'imām dahyāum Auramazdā pātuv hacā hainayā, hacā dušiyārā, hacā draugā',
  cite: {
    fa: 'داریوش بزرگ، کتیبهٔ DPd بند ۳، دیوار جنوبی صفهٔ تخت‌جمشید (Kent 1953؛ Lecoq 1997؛ Livius)',
    en: 'Darius the Great, inscription DPd §3, south wall of the Persepolis terrace (Kent 1953; Lecoq 1997; Livius)',
  },
  reflection: {
    fa: [
      'دو هزار و پانصد سال پیش، داریوش بر سنگ تخت‌جمشید سه آرزو برای این سرزمین نوشت؛ و امروز، حقیقتاً، ما به هر سهٔ آن‌ها نیاز داریم.',
      'به ایمنی از دشمن، تا خانه و دسترنج مردم پایدار بماند. به رهایی از خشک‌سالی، که امروز در چهرهٔ تشنگی دشت‌ها و فرونشستن زمین پیش روی ماست.',
      'و بیش از همه، به رهایی از دروغ؛ چون هر ویرانی دیگری از آن‌جا آغاز می‌شود که راست گفتن هزینه داشته باشد.',
      'این دعا را نه برای ستایش گذشته، که برای فردای ایران دوباره می‌خوانیم.',
    ],
    en: [
      'Two and a half thousand years ago Darius carved three wishes for this land into the stone of Persepolis; today we truly need all three.',
      'Safety from the enemy, so that people’s homes and the fruit of their labour endure. Deliverance from drought, which now faces us as thirsty plains and sinking ground.',
      'And above all, deliverance from the Lie, because every other ruin begins where telling the truth carries a price.',
      'We read this prayer again not to praise the past, but for the sake of Iran’s tomorrow.',
    ],
  },
}

export function DariusPrayer({ locale }: { locale: Locale }) {
  const p = dariusPrayer
  const isFa = locale === 'fa'
  return (
    <section id="darius-prayer" aria-labelledby="darius-prayer-h" className="scroll-mt-24 mt-20 mb-4">
      <div className="relative overflow-hidden rounded-[2rem] border border-gold/40 bg-gradient-to-b from-lapis/40 to-lapis/30 px-6 py-14 md:px-16 md:py-20 text-center shadow-2xl">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
        <p className="text-sm md:text-base tracking-widest text-turquoise-soft">{isFa ? 'دعای داریوش برای ایران' : 'Darius’s prayer for Iran'}</p>
        <p aria-hidden className="mt-4 text-gold text-2xl">𐎠 · 𐎢 · 𐎼</p>
        <blockquote className="mx-auto mt-6 max-w-4xl">
          <h2 id="darius-prayer-h" className="text-3xl sm:text-4xl md:text-6xl font-black text-gilded leading-[1.6] md:leading-[1.55]">«{p.quote[locale]}»</h2>
          <p dir="ltr" lang="peo-Latn" className="mt-8 text-sm md:text-base italic text-ivory/75">{p.translit}</p>
          {isFa && <p dir="ltr" className="mt-2 text-sm text-ivory/70">“{p.quote.en}”</p>}
          <footer className="mt-6 text-sm md:text-base text-gold-bright/90">— {p.cite[locale]}</footer>
        </blockquote>
        <div className="mx-auto mt-12 max-w-3xl border-t border-gold/30 pt-10 text-start">
          <p className="inline-block rounded-full border border-turquoise-soft/50 px-3 py-1 text-xs md:text-sm text-turquoise-soft">{isFa ? 'این برداشت ماست' : 'This is our reading'}</p>
          {p.reflection[locale].map((s, n) => <p key={n} className="read mt-5 text-lg md:text-xl leading-loose text-ivory/90">{s}</p>)}
        </div>
      </div>
    </section>
  )
}

/** Home-page teaser: the same DPd §3 line, linking to the full block on the Darius page. */
export function DariusPrayerTeaser() {
  const p = dariusPrayer
  return (
    <section aria-labelledby="home-prayer-h" className="mx-auto max-w-5xl px-4 pt-14">
      <div className="relative overflow-hidden rounded-[2rem] border border-gold/40 bg-gradient-to-b from-lapis/40 to-lapis/20 px-6 py-12 md:px-14 md:py-16 text-center">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
        <p className="text-sm md:text-base tracking-widest text-turquoise-soft">دعای داریوش برای ایران · ۲۵۰۰ سال پیش</p>
        <h2 id="home-prayer-h" className="mt-6 text-3xl sm:text-4xl md:text-5xl font-black text-gilded leading-[1.6]">«{p.quote.fa}»</h2>
        <p dir="ltr" lang="peo-Latn" className="mt-6 text-sm md:text-base italic text-ivory/75">{p.translit}</p>
        <p className="mt-3 text-sm md:text-base text-gold-bright/90">— {p.cite.fa}</p>
        <p className="mt-8 text-lg md:text-xl leading-9 text-ivory/90">امروز، حقیقتاً، به هر سهٔ این آرزوها نیاز داریم.</p>
        <a href="/king/darius-i#darius-prayer" className="mt-8 inline-block rounded-full bg-gradient-to-l from-gold to-[#b8862f] text-night font-bold px-7 py-3 hover:shadow-[0_0_30px_#d9b45a80] transition-shadow">برداشت ما از این دعا</a>
      </div>
    </section>
  )
}
