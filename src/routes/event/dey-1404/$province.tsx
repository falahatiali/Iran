import { createFileRoute, notFound } from '@tanstack/react-router'
import { ProvincePage } from '../../../components/dey1404/ProvincePage'
import { PROVINCE_COUNTS, provinceBySlug, type NameRow } from '../../../data/dey1404'
import { seo } from '../../../lib/seo'

const FA = '۰۱۲۳۴۵۶۷۸۹'
const fa = (n: number) => String(n).replace(/\d/g, (d) => FA[+d])

export const Route = createFileRoute('/event/dey-1404/$province')({
  loader: async ({ params }) => {
    const province = provinceBySlug(params.province)
    if (!province) throw notFound()
    const rows = (await import('../../../data/dey1404/names.json')).default as NameRow[]
    return { province, rows: rows.filter((r) => r[3] === province && r[5] !== 3) }
  },
  head: ({ params }) => {
    const p = provinceBySlug(params.province)
    if (!p) return {}
    return seo({
      title: `جاویدنامان استان ${p} در خیزش دی ۱۴۰۴`,
      description: `نام ${fa(PROVINCE_COUNTS[p])} جان‌باختهٔ استان ${p} در سرکوب اعتراضات دی‌ماه ۱۴۰۴، با سن، شهر و تاریخ، به ثبت سازمان حقوق بشر ایران.`,
      path: `/event/dey-1404/${params.province}`, image: '/media/dey1404/og.jpg',
    })
  },
  component: function Page() { const d = Route.useLoaderData(); return <ProvincePage province={d.province} rows={d.rows} /> },
})
