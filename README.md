<div dir="rtl">

# تاریخ ایران • مرجع ملی

[![CI](https://github.com/falahatiali/Iran/actions/workflows/ci.yml/badge.svg)](https://github.com/falahatiali/Iran/actions/workflows/ci.yml)

**مرجع ملی تاریخ ایران**: یک وب‌سایت فارسی، راست‌به‌چپ و منبع‌دار که چهار هزار سال تاریخ ایران را از ایلام و ماد و هخامنشیان تا جمهوری اسلامی پوشش می‌دهد. با داده‌های ساخت‌یافته، شجره‌نامه‌ی تعاملی، گاه‌شمار جامع، نقشه‌ی گسترهٔ هر دودمان و کتاب‌شناسی کامل.

## 📊 محتوا

- **۲۴ دودمان/دوره** از ایلام (۲۷۰۰ پ.م.) تا جمهوری اسلامی (۱۳۵۷ تاکنون)
- **۲۱۳ فرمانروا/رهبر** با زندگی‌نامه، دوره حکومت و روابط خانوادگی
- **۱۷۶ رویداد کلیدی** (جنگ‌ها، پیمان‌ها، اصلاحات، رویدادهای فرهنگی)
- **شجره‌نامهٔ تعاملی**: درخت خانوادگی‌ای که چند نسل را به هم متصل می‌کند (پدر، مادر، همسران، فرزندان)
- **گاه‌شمار سراسری**: همهٔ رویدادها در یک خط زمانی قابل فیلتر
- **نقشه‌های گسترهٔ سرزمینی** برای هر دودمان
- **۱۸ منبع معتبر** با نمایش کتاب‌شناسی کامل برای هر دودمان
- **صفحهٔ پرچم استوانهٔ کوروش** (`/cylinder` فارسی، `/en/cylinder` انگلیسی): سه لایهٔ شواهد، ترجمه‌های دارای مجوز، و بازسازی سه‌بعدی برچسب‌خورده

## اصل بنیادین

متن کامل دستور مالک پروژه: [docs/FOUNDATIONAL_PHILOSOPHY.md](./docs/FOUNDATIONAL_PHILOSOPHY.md).

حقوق مالکیت فردی چارچوب تحلیل است، نه مجوزی برای تحریف تاریخ. هر ادعای تاریخی باید با شاهد ثابت شود. در داده و در رابط کاربری سه لایه جدا می‌مانند: **شواهد تاریخی**، **تفسیر فلسفی**، **معنای فرهنگی امروز**. نقل‌قول، ترجمه، تصویر و مدل سه‌بعدی ساختگی ممنوع است. جزئیات پژوهشی این مرحله در [docs/RESEARCH_LOG.md](./docs/RESEARCH_LOG.md) و سیاهه‌ی بهبود در [docs/IMPROVEMENT_LOG.md](./docs/IMPROVEMENT_LOG.md) است.

---

## ✨ ویژگی‌ها

- **پیش‌رندر (Prerender) کامل**: همهٔ ۲۴۰ صفحه به‌صورت استاتیک تولید می‌شوند (SEO محور)
- **صفحات اختصاصی**: صفحه‌ی جداگانه برای هر دودمان (`/dynasty/[slug]`)، هر فرمانروا (`/king/[slug]`)، و استوانهٔ کوروش (`/cylinder`, `/en/cylinder`)
- **شجره‌نامه‌های تعاملی**: درخت خانوادگی کلیک‌پذیر (شجره‌نامه) با پیوندهای بین فرمانروایان
- **گاه‌شمار جامع**: خط زمانی سراسری قابل فیلتر بر اساس دوره، دودمان و نوع رویداد
- **طراحی راست‌به‌چپ**: واسط کاربری کاملاً فارسی با قلم محلی وزیرمتن
- **جست‌وجوی هوشمند فارسی**: نرمال‌سازی ی/ي، ک/ك، نیم‌فاصله و اعراب برای جست‌وجوی دقیق
- **انیمیشن‌های نرم**: انتقال صفحات و افکت‌های ظاهرسازی با احترام به `prefers-reduced-motion`
- **واکنشگرا برای موبایل**: قالب‌های آزمایش‌شده در 360px، 390px و 768px با tap targets حداقل ۴۴px
- **دسترسی‌پذیر**: Semantic HTML، ARIA labels، کنتراست رنگ‌ها
- **یکپارچگی مداوم (CI)**: هر push/PR خودکار lint، typecheck، آزمون دود پایگاه داده، build و ساخت Docker image را اجرا می‌کند

## 🛠 فناوری‌ها

| لایه | فناوری |
|---|---|
| چارچوب | [TanStack Start](https://tanstack.com/start) 1.169+ (React 19 full-stack) |
| زبان | TypeScript 6 |
| استایل | Tailwind CSS 4.1 (native @tailwindcss/vite) |
| انیمیشن | [Motion](https://motion.dev) 14.6 |
| قلم | وزیرمتن (self-hosted در `public/fonts`) |
| پایگاه داده | SQLite 3 با `@libsql/client` |
| سرور | Nitro 3 (Node SSR + prerendering) |
| کانتینر | Docker + docker-compose |
| CI/CD | GitHub Actions (.github/workflows/ci.yml) |

## 🏗 معماری

### الگوی Repository + Factory

```
src/server/
  api.ts              → server functions تنها نقطهٔ تماس routeها با داده
  db/
    repositories.ts   → اینترفیس‌های repository (TypeScript)
    sqlite.ts         → پیاده‌سازی SQLite
    postgres.ts       → Stub برای آینده
    factory.ts        → DB_DRIVER factory (انتخاب درایور)
```

- **جدایی لایه‌ها**: routeها فقط `api.ts` را صدا می‌زنند؛ `api.ts` از repository استفاده می‌کند
- **درایور قابل تعویض**: `DB_DRIVER=sqlite` یا `postgres` (با تغییر `.env`)
- **Migration‌های نسخه‌دار**: `migrations/NNNN_name.{up,down}.sql`
- **Seed‌های یکپارچه**: `src/data/*.ts` → اسکریپت seed → SQLite

### ساختار پروژه

```
iran-history-app/
├── src/
│   ├── data/              # داده‌های ساخت‌یافته TS (۲۴ دودمان، sources، نقشه)
│   │   ├── types.ts       # انواع TypeScript
│   │   ├── ancient.ts     # ایلام، ماد، هخامنشی، اشکانی، ساسانی
│   │   ├── classical.ts   # صفاری، سامانی، غزنوی، سلجوقی
│   │   ├── medieval.ts    # خوارزمشاهی، ایلخانان، تیموری
│   │   ├── later.ts       # صفوی، افشار، زند، قاجار، پهلوی، جمهوری اسلامی
│   │   ├── sources.ts     # ۱۸ منبع + نگاشت دودمان→منابع
│   │   ├── basemap.ts     # PolygonData نقشهٔ پایه
│   │   └── build.ts       # aggregator
│   ├── routes/            # TanStack Start file-based routing
│   │   ├── index.tsx      # صفحهٔ اصلی (لیست دودمان‌ها)
│   │   ├── dynasty/$slug.tsx
│   │   ├── king/$slug.tsx
│   │   ├── timeline.tsx
│   │   ├── about.tsx
│   │   └── __root.tsx     # layout + ۴۰۴
│   ├── components/        # اجزای قابل استفاده مجدد
│   │   ├── Layout.tsx
│   │   ├── RulerCard.tsx
│   │   ├── FamilyTree.tsx # شجره‌نامه با SVG
│   │   ├── Timeline.tsx
│   │   ├── DynastyMap.tsx # نقشهٔ گستره
│   │   ├── Search.tsx
│   │   ├── Sources.tsx
│   │   ├── Reveal.tsx     # Motion wrapper
│   │   └── ...
│   ├── lib/
│   │   ├── format.ts      # اعداد فارسی، تاریخ
│   │   ├── search.ts      # نرمال‌سازی جست‌وجوی فارسی
│   │   └── seo.ts
│   ├── styles/
│   │   └── app.css        # سیستم طراحی (پالت لاجورد، فیروزه، طلایی)
│   └── server/
│       └── ...
├── migrations/            # up/down SQL
│   ├── 0001_init.{up,down}.sql
│   └── 0002_sources_extents.{up,down}.sql
├── scripts/
│   ├── db.ts              # CLI migrator/seeder/rollback
│   └── sitemap.ts         # تولید sitemap.xml + robots.txt
├── public/
│   └── fonts/             # Vazirmatn-{Light,Regular,Bold}.woff2
├── .github/workflows/
│   └── ci.yml             # lint, typecheck, db:smoke, build, docker
├── Dockerfile
├── docker-compose.yml
├── .env.example
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🚀 راه‌اندازی سریع

### پیش‌نیازها

- **Node.js** 20+ (پیشنهاد: 20 LTS)
- **npm** 9+ (با Node.js نصب می‌شود)
- **یا Docker + docker-compose** (برای راه‌اندازی بدون نصب Node)

---

### روش ۱: Docker (یک‌خطی)

```bash
docker compose up --build
```

- **نشانی**: http://localhost:3000
- **داده**: فایل SQLite در volume `iran-db` (مسیر داخلی `/data`)
- **بازنشانی داده**: `docker compose down -v && docker compose up --build`

کانتینر در آغاز خودکار `npm run db:migrate && npm run db:seed` را اجرا می‌کند.

---

### روش ۲: دستی (Development)

#### ۱. نصب وابستگی‌ها

```bash
npm install
```

#### ۲. ساخت و بارگذاری پایگاه داده

```bash
npm run db:migrate    # اجرای migration‌ها
npm run db:seed       # بارگذاری ۲۴ دودمان، ۲۱۳ فرمانروا، ۱۷۶ رویداد
```

یا یک‌خطی:

```bash
npm run db:reset      # rollback + migrate + seed
```

#### ۳. اجرای سرور توسعه

```bash
npm run dev
```

→ http://localhost:3000 (hot reload فعال)

> **نکته**: `npm run dev` خودکار `predev` را اجرا می‌کند که `db:migrate` و `db:seed` را صدا می‌زند.

#### ۴. ساخت برای تولید

```bash
npm run build         # reset DB + تولید sitemap + build + prerender
npm start             # اجرای سرور Node از .output/
```

---

## 📜 دستورات (Scripts)

| دستور | شرح |
|---|---|
| `npm run dev` | سرور توسعه در http://localhost:3000 (با predev) |
| `npm run build` | ساخت تولید (reset DB + sitemap + vite build) |
| `npm start` | اجرای سرور تولید (نیاز به build قبلی) |
| `npm run lint` | بررسی ESLint |
| `npm run typecheck` | بررسی TypeScript (`tsc --noEmit`) |
| `npm run db:migrate` | اجرای migration‌های جدید |
| `npm run db:rollback` | برگرداندن آخرین migration (با `-- --all`: همه) |
| `npm run db:seed` | بارگذاری داده‌های `src/data` در پایگاه داده |
| `npm run db:reset` | rollback کامل + migrate + seed |
| `npm run db:smoke` | آزمون دود: migrate → seed → rollback → migrate → مقایسهٔ شمارش |
| `npm run sitemap` | تولید `public/sitemap.xml` و `robots.txt` |

---

## 🔧 پیکربندی

فایل `.env` (یا `.env.local`) ایجاد کنید (نمونه در `.env.example`):

```bash
# نوع پایگاه داده (فعلاً فقط sqlite پشتیبانی می‌شود)
DB_DRIVER=sqlite

# مسیر فایل SQLite
DATABASE_URL=file:./data/iran.db

# نشانی سایت (برای sitemap و OpenGraph)
VITE_SITE_URL=http://localhost:3000
```

---

## 🧪 بررسی سلامت

```bash
# همهٔ بررسی‌ها یکجا
npm run lint && npm run typecheck && npm run db:smoke && npm run build
```

CI این موارد را در هر push/PR اجرا می‌کند.

---

## 🐛 رفع مشکلات

### مشکل: `Error: SQLITE_CANTOPEN`

**علت**: پوشهٔ `data/` وجود ندارد.

**راه‌حل**:

```bash
mkdir -p data
npm run db:migrate
```

### مشکل: `npm run build` شکست می‌خورد

**علت**: migration اجرا نشده یا داده‌ها seed نشده‌اند.

**راه‌حل**:

```bash
npm run db:reset
npm run build
```

### مشکل: داده‌های قدیمی دیده می‌شوند

**راه‌حل**:

```bash
npm run db:reset    # بازسازی کامل پایگاه داده
```

Docker:

```bash
docker compose down -v && docker compose up --build
```

### مشکل: قلم درست نمایش داده نمی‌شود

**علت**: فایل‌های woff2 در `public/fonts/` وجود ندارند.

**راه‌حل**: بررسی کنید `Vazirmatn-{Light,Regular,Bold}.woff2` در `public/fonts/` هستند.

---

## 📝 ویرایش داده‌ها

همهٔ داده‌ها در `src/data/*.ts` به‌صورت TypeScript ساخت‌یافته ذخیره شده‌اند.

### افزودن/ویرایش فرمانروا

۱. فایل مربوطه را باز کنید (مثلاً `src/data/later.ts` برای قاجار):

```typescript
['naser-al-din', 'ناصرالدین شاه', 'Naser al-Din Shah', 1848, 1896, 'چهارمین شاه قاجار...', { f: 'mohammad-shah', m: 'محبوب خانم', s: ['محبوبه خانم'] }]
```

- اگر `f` (پدر) شناسهٔ فرمانروای دیگری باشد، در شجره‌نامه پیوند می‌خورد
- اگر رشته‌ی ساده باشد، فقط نام نمایش داده می‌شود (بدون پیوند)
- سال‌های پیش از میلاد منفی هستند (مثال: `-330`)

۲. ذخیره کنید و:

```bash
npm run db:reset
npm run dev
```

### افزودن رویداد

در همان فایل دودمان:

```typescript
[1736, 'جنگ نادر با عثمانی', 'battle', 'شرح کوتاه...']
[1501, 'تأسیس صفویه', 'founding', 'اسماعیل اول تبریز را فتح کرد']
[1813, 'پیمان گلستان', 'treaty', undefined, 'minor']  // رویداد فرعی
```

- **انواع**: `founding`, `battle`, `treaty`, `reform`, `culture`, `fall`, `other`
- علامت `'minor'` رویدادهای فرعی را در UI با opacity کمتر نشان می‌دهد

### افزودن منبع

`src/data/sources.ts`:

```typescript
export const sources: Source[] = [
  ['cambridge-iran', 'The Cambridge History of Iran', '1968-1991', 'https://example.com'],
  // ...
];

export const dynastySources: Record<string, string[]> = {
  qajar: ['cambridge-iran', 'floor-qajar'],
  // ...
};
```

سپس `npm run db:reset`.

---

## 📚 استانداردهای محتوا و مشارکت

### اصول محتوا

۱. **همهٔ ادعاها باید منبع‌دار باشند**: هر دودمان به یک یا چند منبع معتبر اشاره می‌کند.
۲. **محتوا خنثی و واقع‌گرایانه**: بدون جانب‌داری سیاسی یا مذهبی.
۳. **دقت تاریخی**: تاریخ‌ها، نام‌ها و رویدادها بر اساس منابع معتبر وارد می‌شوند.

### نحوهٔ ارائهٔ تصحیح

اگر اطلاعات نادرستی پیدا کردید:

۱. **Issue باز کنید** در GitHub با این اطلاعات:
   - صفحه/دودمان/فرمانروای مورد نظر
   - اطلاعات فعلی (نادرست)
   - اطلاعات پیشنهادی (صحیح)
   - **منبع معتبر** (کتاب، مقاله، پایگاه داده‌ی دانشگاهی) با شماره صفحه یا لینک

۲. **یا Pull Request بفرستید**:
   - فایل `src/data/*.ts` را ویرایش کنید
   - منبع را در `sources.ts` اضافه یا به‌روز کنید
   - توضیح دهید چرا تغییر لازم است (با citation)

**مثال Issue**:

> **عنوان**: تاریخ فوت ناصرالدین شاه نادرست است
>
> **صفحه**: `/king/naser-al-din`
>
> **فعلی**: `1896`
>
> **صحیح**: `1896` درست است اما در منابع تاریخ شمسی ۱۳۱۳ ذکر شده.
>
> **منبع**: تاریخ قاجار، محمدحسن خان اعتمادالسلطنه، جلد ۳، ص ۴۵۶

**بدون منبع معتبر، تصحیحات پذیرفته نمی‌شوند.**

---

## 🗺 Roadmap

برای برنامهٔ توسعهٔ آینده به [ROADMAP.md](./ROADMAP.md) مراجعه کنید.

---

## 🚀 استقرار (Deployment)

برای راه‌اندازی استقرار خودکار به سرور شخصی خود، راهنمای کامل را در [DEPLOYMENT.md](./DEPLOYMENT.md) ببینید. این شامل:
- راه‌اندازی CI/CD با GitHub Actions
- پیکربندی Docker و reverse proxy
- استقرار خودکار به production با health checks و rollback
- نظارت، امنیت و عیب‌یابی

---

## 📄 مجوز

**MIT License** — نگاه کنید به [LICENSE](./LICENSE).

**قلم وزیرمتن**: [OFL](https://github.com/rastikerdar/vazirmatn) توسط [صابر راستی‌کردار](https://github.com/rastikerdar)

**خطوط نقشه**: [Natural Earth](https://www.naturalearthdata.com) (مالکیت عمومی)

---

</div>

---

# Iran History • National Reference

[![CI](https://github.com/falahatiali/Iran/actions/workflows/ci.yml/badge.svg)](https://github.com/falahatiali/Iran/actions/workflows/ci.yml)

**A national reference for Iranian history**: a Persian (Farsi) right-to-left website covering four thousand years of Iranian history from Elam, Media, and the Achaemenid Empire to the Islamic Republic. With structured data, interactive family trees, comprehensive timeline, territorial extent maps for each dynasty, and full bibliography.

## 📊 Content

- **24 dynasties/periods** from Elam (2700 BCE) to the Islamic Republic (1979–present)
- **213 rulers/leaders** with biographies, reign dates, and family relations
- **176 key events** (wars, treaties, reforms, cultural milestones)
- **Interactive family trees**: multi-generational trees linking parents, spouses, and children
- **Global timeline**: all events on a single filterable timeline
- **Territorial extent maps** for each dynasty
- **18 authoritative sources** with full citations per dynasty

## ✨ Features

- **Full prerendering**: all 240 pages generated as static HTML (SEO-first)
- **Dedicated pages**: separate dynasty pages (`/dynasty/[slug]`) and king pages (`/king/[slug]`)
- **Clickable interactive family trees**: multi-generational شجره‌نامه (shajare-nāme) with links between rulers
- **Global filterable timeline**: unified chronological view with filters by era, dynasty, and event type
- **Right-to-left design**: fully Persian UI with self-hosted Vazirmatn font
- **Persian-aware search**: normalization for ي/ی, ك/ک, ZWNJ (zero-width non-joiner), and diacritics
- **Smooth animations**: page transitions and reveal effects respecting `prefers-reduced-motion`
- **Mobile-responsive**: templates tested at 360px, 390px, and 768px viewports with tap targets ≥44px
- **Accessible**: semantic HTML, ARIA labels, color contrast
- **Continuous Integration**: automated lint, typecheck, database smoke test, build, and Docker image creation on every push/PR via GitHub Actions

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [TanStack Start](https://tanstack.com/start) 1.169+ (React 19 full-stack) |
| Language | TypeScript 6 |
| Styling | Tailwind CSS 4.1 (native @tailwindcss/vite) |
| Animation | [Motion](https://motion.dev) 14.6 |
| Font | Vazirmatn (self-hosted in `public/fonts`) |
| Database | SQLite 3 via `@libsql/client` |
| Server | Nitro 3 (Node SSR + prerendering) |
| Container | Docker + docker-compose |
| CI/CD | GitHub Actions (.github/workflows/ci.yml) |

## 🏗 Architecture

### Repository Pattern + Factory

```
src/server/
  api.ts              → server functions (routes' only data contact)
  db/
    repositories.ts   → repository interfaces (TypeScript)
    sqlite.ts         → SQLite implementation
    postgres.ts       → Stub for future
    factory.ts        → DB_DRIVER factory (driver selection)
```

- **Layer separation**: routes only call `api.ts`; `api.ts` uses repositories
- **Swappable driver**: `DB_DRIVER=sqlite` or `postgres` (via `.env`)
- **Versioned migrations**: `migrations/NNNN_name.{up,down}.sql`
- **Unified seeds**: `src/data/*.ts` → seed script → SQLite

### Project Structure

```
iran-history-app/
├── src/
│   ├── data/              # Structured TS data (24 dynasties, sources, map)
│   │   ├── types.ts       # TypeScript types
│   │   ├── ancient.ts     # Elam, Media, Achaemenid, Parthian, Sasanian
│   │   ├── classical.ts   # Saffarid, Samanid, Ghaznavid, Seljuk
│   │   ├── medieval.ts    # Khwarazmian, Ilkhanate, Timurid
│   │   ├── later.ts       # Safavid, Afsharid, Zand, Qajar, Pahlavi, Islamic Republic
│   │   ├── sources.ts     # 18 sources + dynasty→sources mapping
│   │   ├── basemap.ts     # PolygonData for base map
│   │   └── build.ts       # aggregator
│   ├── routes/            # TanStack Start file-based routing
│   │   ├── index.tsx      # Home (dynasty list)
│   │   ├── dynasty/$slug.tsx
│   │   ├── king/$slug.tsx
│   │   ├── timeline.tsx
│   │   ├── about.tsx
│   │   └── __root.tsx     # layout + 404
│   ├── components/        # Reusable components
│   │   ├── Layout.tsx
│   │   ├── RulerCard.tsx
│   │   ├── FamilyTree.tsx # SVG family tree
│   │   ├── Timeline.tsx
│   │   ├── DynastyMap.tsx # Extent map
│   │   ├── Search.tsx
│   │   ├── Sources.tsx
│   │   ├── Reveal.tsx     # Motion wrapper
│   │   └── ...
│   ├── lib/
│   │   ├── format.ts      # Persian numbers, dates
│   │   ├── search.ts      # Persian search normalization
│   │   └── seo.ts
│   ├── styles/
│   │   └── app.css        # Design system (lapis, turquoise, gold palette)
│   └── server/
│       └── ...
├── migrations/            # up/down SQL
│   ├── 0001_init.{up,down}.sql
│   └── 0002_sources_extents.{up,down}.sql
├── scripts/
│   ├── db.ts              # CLI migrator/seeder/rollback
│   └── sitemap.ts         # Generate sitemap.xml + robots.txt
├── public/
│   └── fonts/             # Vazirmatn-{Light,Regular,Bold}.woff2
├── .github/workflows/
│   └── ci.yml             # lint, typecheck, db:smoke, build, docker
├── Dockerfile
├── docker-compose.yml
├── .env.example
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** 20+ (recommended: 20 LTS)
- **npm** 9+ (installed with Node.js)
- **Or Docker + docker-compose** (to run without Node installation)

---

### Method 1: Docker (One-liner)

```bash
docker compose up --build
```

- **URL**: http://localhost:3000
- **Data**: SQLite file persisted in `iran-db` volume (internal path `/data`)
- **Reset data**: `docker compose down -v && docker compose up --build`

The container automatically runs `npm run db:migrate && npm run db:seed` on startup.

---

### Method 2: Manual (Development)

#### 1. Install dependencies

```bash
npm install
```

#### 2. Set up database

```bash
npm run db:migrate    # Run migrations
npm run db:seed       # Load 24 dynasties, 213 rulers, 176 events
```

Or one-liner:

```bash
npm run db:reset      # rollback + migrate + seed
```

#### 3. Start dev server

```bash
npm run dev
```

→ http://localhost:3000 (hot reload enabled)

> **Note**: `npm run dev` automatically runs `predev` which calls `db:migrate` and `db:seed`.

#### 4. Build for production

```bash
npm run build         # reset DB + generate sitemap + build + prerender
npm start             # Run Node server from .output/
```

---

## 📜 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Dev server at http://localhost:3000 (with predev) |
| `npm run build` | Production build (reset DB + sitemap + vite build) |
| `npm start` | Run production server (requires prior build) |
| `npm run lint` | ESLint check |
| `npm run typecheck` | TypeScript check (`tsc --noEmit`) |
| `npm run db:migrate` | Run new migrations |
| `npm run db:rollback` | Roll back last migration (with `-- --all`: all) |
| `npm run db:seed` | Load `src/data` into database |
| `npm run db:reset` | Full rollback + migrate + seed |
| `npm run db:smoke` | Smoke test: migrate → seed → rollback → migrate → count comparison |
| `npm run sitemap` | Generate `public/sitemap.xml` and `robots.txt` |

---

## 🔧 Configuration

Create a `.env` file (or `.env.local`) — see `.env.example`:

```bash
# Database driver (currently only sqlite supported)
DB_DRIVER=sqlite

# SQLite file path
DATABASE_URL=file:./data/iran.db

# Site URL (for sitemap and OpenGraph)
VITE_SITE_URL=http://localhost:3000
```

---

## 🧪 Health Check

```bash
# All checks at once
npm run lint && npm run typecheck && npm run db:smoke && npm run build
```

CI runs these on every push/PR.

---

## 🐛 Troubleshooting

### Issue: `Error: SQLITE_CANTOPEN`

**Cause**: `data/` directory doesn't exist.

**Solution**:

```bash
mkdir -p data
npm run db:migrate
```

### Issue: `npm run build` fails

**Cause**: migrations not run or data not seeded.

**Solution**:

```bash
npm run db:reset
npm run build
```

### Issue: Seeing stale data

**Solution**:

```bash
npm run db:reset    # Full database rebuild
```

Docker:

```bash
docker compose down -v && docker compose up --build
```

### Issue: Font not displaying correctly

**Cause**: woff2 files missing from `public/fonts/`.

**Solution**: Verify `Vazirmatn-{Light,Regular,Bold}.woff2` exist in `public/fonts/`.

---

## 📝 Editing Data

All data is stored as structured TypeScript in `src/data/*.ts`.

### Adding/Editing a Ruler

1. Open the relevant file (e.g., `src/data/later.ts` for Qajar):

```typescript
['naser-al-din', 'ناصرالدین شاه', 'Naser al-Din Shah', 1848, 1896, 'Fourth Qajar shah...', { f: 'mohammad-shah', m: 'Mahd-e Olya', s: ['Mahd-e Olya'] }]
```

- If `f` (father) is another ruler's id, it links in the family tree
- If it's a plain string, it's displayed as text only (no link)
- Years BCE are negative (example: `-330`)

2. Save and:

```bash
npm run db:reset
npm run dev
```

### Adding an Event

In the same dynasty file:

```typescript
[1736, 'Nader vs Ottoman war', 'battle', 'Short description...']
[1501, 'Safavid founding', 'founding', 'Ismail I conquered Tabriz']
[1813, 'Treaty of Gulistan', 'treaty', undefined, 'minor']  // Minor event
```

- **Types**: `founding`, `battle`, `treaty`, `reform`, `culture`, `fall`, `other`
- `'minor'` flag shows events with lower opacity in UI

### Adding a Source

`src/data/sources.ts`:

```typescript
export const sources: Source[] = [
  ['cambridge-iran', 'The Cambridge History of Iran', '1968-1991', 'https://example.com'],
  // ...
];

export const dynastySources: Record<string, string[]> = {
  qajar: ['cambridge-iran', 'floor-qajar'],
  // ...
};
```

Then `npm run db:reset`.

---

## 📚 Editorial Standards & Contributing

### Content Principles

The owner directive in [docs/FOUNDATIONAL_PHILOSOPHY.md](./docs/FOUNDATIONAL_PHILOSOPHY.md) governs research and UI. In short:

1. **All claims must be sourced**: each dynasty references one or more authoritative sources. Never invent a citation or quote.
2. **Three layers, labeled:** historical evidence, philosophical interpretation, and modern cultural meaning stay distinct.
3. **Neutral, factual historical layer**: no political or religious bias in what the sources establish.
4. **Translations and media:** reproduce a translation or image only with a verified license; otherwise summarize and link. No fabricated cuneiform or fake museum scans.

### How to Submit Corrections

If you find incorrect information:

1. **Open an Issue** on GitHub with:
   - Page/dynasty/ruler in question
   - Current (incorrect) information
   - Proposed (correct) information
   - **Authoritative source** (book, article, academic database) with page number or link

2. **Or submit a Pull Request**:
   - Edit the relevant `src/data/*.ts` file
   - Add or update the source in `sources.ts`
   - Explain why the change is needed (with citation)

**Example Issue**:

> **Title**: Death date of Naser al-Din Shah is incorrect
>
> **Page**: `/king/naser-al-din`
>
> **Current**: `1896`
>
> **Correct**: `1896` is correct, but Persian calendar sources cite 1313 SH.
>
> **Source**: Tarikh-e Qajar, Mohammad Hassan Khan E'temad al-Saltaneh, Vol 3, p. 456

**Corrections without authoritative sources will not be accepted.**

---

## 🗺 Roadmap

See [ROADMAP.md](./ROADMAP.md) for planned features, including the mapping of the philosophy directive’s section 8 priorities. Research notes: [docs/RESEARCH_LOG.md](./docs/RESEARCH_LOG.md). Improvement log: [docs/IMPROVEMENT_LOG.md](./docs/IMPROVEMENT_LOG.md).

---

## 🚀 Deployment

For automatic deployment to your own server, see the complete guide in [DEPLOYMENT.md](./DEPLOYMENT.md). It includes:
- CI/CD setup with GitHub Actions
- Docker and reverse proxy configuration
- Automatic deployment to production with health checks and rollback
- Monitoring, security, and troubleshooting

---

## 📄 License

**MIT License** — see [LICENSE](./LICENSE).

**Vazirmatn font**: [OFL](https://github.com/rastikerdar/vazirmatn) by [Saber Rastikerdar](https://github.com/rastikerdar)

**Map data**: [Natural Earth](https://www.naturalearthdata.com) (public domain)

---

**Repository**: [github.com/falahatiali/Iran](https://github.com/falahatiali/Iran)
