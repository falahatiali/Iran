import { createFileRoute } from '@tanstack/react-router'
import { libraryHead } from '../../../components/library/head'
import { ArabicPage } from '../../../components/library/khayyam/NowruzPages'
import { ARABIC_PATH } from '../../../data/library/khayyam'
import { seo } from '../../../lib/seo'

export const Route = createFileRoute('/library/khayyam/arabic')({
  head: () => {
    const s = seo({ title: 'شعر عربی خیام: آنچه منابع می‌گویند', description: 'نزدیک چهل بیت عربی به نام عمر خیام: گزیده‌هایی که در زمان او یا اندکی پس از آن نقلشان کرده‌اند، و داوری پژوهشگران؛ بر پایهٔ ایرانیکا.', path: ARABIC_PATH, image: '/media/library/og-khayyam.jpg' })
    return libraryHead(s)
  },
  component: ArabicPage,
})
