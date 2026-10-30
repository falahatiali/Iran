import { createFileRoute } from '@tanstack/react-router'
import { AboutPage } from '../components/AboutPage'
import { ABOUT_ALTERNATES, seo } from '../lib/seo'

export const Route = createFileRoute('/about')({
  head: () => seo({
    title: 'ایران؛ سرزمین آزادگان و نجیب‌زادگان — درباره و روش‌شناسی',
    description: 'هدف پروژه: بازخوانی تاریخ ایران با معیار آزادی فردی و حقوق مالکیت خصوصی؛ و روش‌شناسی: سه لایهٔ جدا، سلسله‌مراتب منابع، برچسب قطعیت، سیاست ارجاع و اصلاح.',
    path: '/about',
    alternates: [...ABOUT_ALTERNATES],
  }),
  component: () => <AboutPage locale="fa" />,
})
