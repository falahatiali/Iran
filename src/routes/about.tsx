import { createFileRoute } from '@tanstack/react-router'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { PageTransition } from '../components/Reveal'
import { Divider } from '../components/Ornament'
import { seo } from '../lib/seo'

export const Route = createFileRoute('/about')({
  head: () => seo({ title: 'درباره و روش‌شناسی', description: 'روش گردآوری، منابع و معیارهای ویرایشی پروژه‌ی تاریخ ایران.', path: '/about' }),
  component: About,
})

function About() {
  const block = 'glass rounded-2xl p-6 leading-9 text-ivory/80'
  return (
    <PageTransition>
      <div className="mx-auto max-w-3xl px-4 py-14">
        <Breadcrumbs items={[{ label: 'درباره و روش‌شناسی' }]} />
        <h1 className="text-5xl font-black text-gilded">درباره و روش‌شناسی</h1>
        <p className="mt-6 text-lg leading-9 text-ivory/80">هدف این پروژه ساختن مرجعی آزاد، دقیق و منبع‌دار برای تاریخ سیاسی و فرهنگی ایران است؛ از ایلام تا امروز.</p>
        <Divider />
        <div className="space-y-6">
          <section className={block}><h2 className="text-xl font-bold text-gold mb-2">منابع</h2>
            تاریخ‌ها و نام‌ها بر پایه‌ی اجماع پژوهشی، به‌ویژه دانشنامه‌ی ایرانیکا، تاریخ ایران کمبریج و «سلسله‌های اسلامی جدید» باسورث است و در جای لازم با منابع دست‌اول (کتیبه‌ی بیستون، استوانه‌ی کوروش، هرودوت، طبری، بیهقی، جوینی، رشیدالدین) سنجیده شده است. فهرست منابع هر دودمان در پایان صفحه‌ی آن آمده است.</section>
          <section className={block}><h2 className="text-xl font-bold text-gold mb-2">تاریخ‌گذاری</h2>
            تاریخ‌ها میلادی‌اند (پ.م = پیش از میلاد). نشانه‌ی «ح.» یعنی تاریخ تقریبی یا محل اختلاف است (به‌ویژه برای ایلام، ماد و آغاز هخامنشیان). برای دوران صفوی به بعد، سال خورشیدی تقریبی (میلادی منهای ۶۲۱) نیز آمده است. هم‌پوشانی دوره‌ها نشان‌دهنده‌ی فرمانروایی هم‌زمان رقیبان یا شاخه‌های گوناگون است.</section>
          <section className={block}><h2 className="text-xl font-bold text-gold mb-2">معیارهای ویرایشی</h2>
            دقت بر گستردگی مقدم است: تنها فرمانروایان شناخته‌شده و مستند آمده‌اند. برای دودمان‌های پرشاخه (اشکانیان، آل‌بویه، غزنویان) فرمانروایان اصلی گزینش شده‌اند. بخش معاصر بی‌طرفانه و تنها با واقعیت‌های مستند نوشته شده است.</section>
          <section className={block}><h2 className="text-xl font-bold text-gold mb-2">نقشه‌ها</h2>
            گستره‌ها طرح‌هایی ساده‌شده و تقریبی‌اند که به دست ویراستاران کشیده شده‌اند؛ خطوط ساحلی از Natural Earth (مالکیت عمومی) گرفته شده است.</section>
          <section className={block}><h2 className="text-xl font-bold text-gold mb-2">مشارکت</h2>
            داده‌ها در پوشه‌ی <code dir="ltr">src/data</code> نگهداری و با اسکریپت seed به پایگاه داده بارگذاری می‌شوند. هر اصلاح باید همراه منبع باشد.</section>
        </div>
      </div>
    </PageTransition>
  )
}
