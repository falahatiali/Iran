import { useState } from 'react'
import { NAME_SOURCES, NAMED_PROVINCES, PROVINCE_COUNTS, type NameRow } from '../../data/dey1404'
import { provinceHref, toPerson, type Person } from '../../data/dey1404/people'
import { PageTransition } from '../Reveal'
import { Tulip } from './DeyPage'
import { CityGroups, fa, NameDialog } from './NameWall'

/** /event/dey-1404/<province>: one province's names, by city where the source gives one. */
export function ProvincePage({ province, rows }: { province: string; rows: NameRow[] }) {
  const people = rows.map(toPerson)
  const [sel, setSel] = useState<Person | null>(null)
  const pending = people.filter((p) => p.group === 2).length
  return (
    <PageTransition>
      <article lang="fa" dir="rtl" className="dey -mt-8 pb-24">
        <header className="dey-hero relative isolate overflow-hidden">
          <div className="relative mx-auto max-w-4xl px-5 py-20 text-center">
            <Tulip className="mx-auto h-24 w-16 dey-tulip" />
            <p className="mt-5 text-rose-200/80"><a href="/event/dey-1404" className="underline">جاویدنامان هجده و نوزده دی ۱۴۰۴</a></p>
            <h1 className="dey-title mt-3 text-5xl font-black leading-tight md:text-7xl">{province}</h1>
            <p className="mt-5 text-3xl font-black text-rose-100">{fa(people.length)} جاویدنام</p>
            <p className="read mx-auto mt-6 max-w-2xl text-justify leading-8 text-ivory/70">
              نام‌ها از پیوست‌های گزارش سازمان حقوق بشر ایران (شهریور ۱۴۰۵) است، با همان سن، استان و تاریخی که گزارش ثبت کرده.
              {pending > 0 && ` ${fa(pending)} نام از ${NAME_SOURCES[2].label} است و ${NAME_SOURCES[2].note}`}
              {' '}شهر تنها برای کسانی آمده که گزارش آن را نوشته است. روی هر نام بزنید تا مشخصات و منبعش را ببینید.
            </p>
          </div>
          <div className="dey-blood absolute inset-x-0 bottom-0 h-32" aria-hidden="true" />
        </header>
        <div className="mx-auto max-w-6xl px-5">
          <CityGroups people={people} onOpen={setSel} />
          <nav aria-label="استان‌های دیگر" className="mt-20">
            <h2 className="text-2xl font-black text-rose-50">استان‌های دیگر</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {NAMED_PROVINCES.filter((p) => p !== province).map((p) => (
                <li key={p}><a href={provinceHref(p)} className="inline-block rounded-full border border-rose-300/25 px-4 py-1.5 text-rose-100 hover:bg-rose-400/10">{p} <span className="text-ivory/50">{fa(PROVINCE_COUNTS[p])}</span></a></li>
              ))}
            </ul>
            <p className="mt-8"><a href="/event/dey-1404#names" className="text-gold underline">← همهٔ نام‌ها و روایت آن روزها</a></p>
          </nav>
        </div>
        <NameDialog p={sel} onClose={() => setSel(null)} />
      </article>
    </PageTransition>
  )
}
