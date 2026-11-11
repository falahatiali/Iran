/** Bibliography for /event/mashruteh. Every claim on the page points at one of these ids. */
import type { FeaturedSource } from '../featured/types'

const IR = 'Encyclopaedia Iranica'
const ir = (slug: string) => `https://www.iranicaonline.org/articles/${slug}/`
const ws = (title: string) => `https://fa.wikisource.org/wiki/${encodeURIComponent(title.replace(/ /g, '_'))}`
const B = (fa: string, en: string) => ({ fa, en })

export const PODCAST_URL = 'https://www.youtube.com/playlist?list=PL4Uk6RJQQjAu9CPHTvDqaXq1pHpQhNXLn'

export const mashrutehSources: FeaturedSource[] = [
  {
    id: 'iranica-cr-events', author: `Vanessa Martin, ${IR}`, title: 'Constitutional Revolution ii. Events', year: '1992, updated 2013', url: ir('constitutional-revolution-ii'),
    note: B('ستون روایت این صفحه: وام‌ها، گمرک و نوز، بست عبدالعظیم، بست سفارت، فرمان‌ها، مجلس اول، کودتای ۱۹۰۸، تبریز، فتح تهران، مجلس دوم، شوستر و اولتیماتوم.', 'The spine of this page: the loans, the customs and Naus, the Abd al-Azim sanctuary, the legation sanctuary, the rescripts, the First Majles, the 1908 coup, Tabriz, the taking of Tehran, the Second Majles, Shuster and the ultimatum.'),
  },
  {
    id: 'iranica-cr-constitution', author: `Saïd Amir Arjomand, ${IR}`, title: 'Constitutional Revolution iii. The Constitution', year: '1992, updated 2013', url: ir('constitutional-revolution-iii'),
    note: B('نگارش قانون اساسی ۱۲۸۵ و متمم ۱۲۸۶، الگوی بلژیکی و بلغاری، قانون‌های انتخابات ۱۹۰۶، ۱۹۰۹ و ۱۹۱۱.', 'The drafting of the 1906 law and the 1907 supplement, the Belgian and Bulgarian models, and the electoral laws of 1906, 1909 and 1911.'),
  },
  {
    id: 'majles-farman', author: 'مجلس شورای ملی (ویکی‌نبشته)', title: 'مصوبات دورهٔ اول قانونگذاری مجلس شورای ملی: فرمان مشروطیت', year: 'چاپ ۱۳۱۸ خورشیدی', url: ws('مصوبات دوره اول قانونگذاری مجلس شورای ملی/فرمان مشروطیت'),
    note: B('متن فرمان مظفرالدین‌شاه به تاریخ ۱۴ جمادی‌الثانی ۱۳۲۴، در مجموعهٔ رسمی مصوبات مجلس اول.', 'The text of Mozaffar al-Din Shah’s rescript dated 14 Jomada II 1324, in the official collection of the First Majles’s enactments.'),
  },
  {
    id: 'majles-qanun', author: 'مجلس شورای ملی (ویکی‌نبشته)', title: 'مصوبات دورهٔ اول قانونگذاری مجلس شورای ملی: قانون اساسی', year: 'چاپ ۱۳۱۸ خورشیدی', url: ws('مصوبات دوره اول قانونگذاری مجلس شورای ملی/قانون اساسی'),
    note: B('متن قانون اساسی به تاریخ ۱۴ ذی‌القعدهٔ ۱۳۲۴.', 'The text of the Fundamental Law dated 14 Dhu al-Qaʿda 1324.'),
  },
  {
    id: 'majles-motammam', author: 'مجلس شورای ملی (ویکی‌نبشته)', title: 'مصوبات دورهٔ اول قانونگذاری مجلس شورای ملی: متمم قانون اساسی', year: 'چاپ ۱۳۱۸ خورشیدی', url: ws('مصوبات دوره اول قانونگذاری مجلس شورای ملی/متمم قانون اساسی'),
    note: B('متن متمم قانون اساسی؛ نقل اصل‌های ۲، ۷، ۸، ۲۰، ۲۶ و ۳۵ از همین چاپ است.', 'The text of the Supplementary Fundamental Law; Articles 2, 7, 8, 20, 26 and 35 are quoted from this edition.'),
  },
  {
    id: 'kasravi-2', author: 'احمد کسروی', title: 'تاریخ مشروطهٔ ایران، گفتار دوم: جنبش مشروطه‌خواهی چگونه پیدا شد؟', year: '۱۳۱۹ خورشیدی', url: ws('تاریخ مشروطه ایران/۲'),
    note: B('گرانی قند و فلک کردن بازرگانان، و دفاع کسروی از آگاهی بهبهانی و طباطبایی.', 'The dear sugar and the bastinado of the merchants, and Kasravi’s defence of Behbahani and Tabatabai’s understanding of constitutionalism.'),
  },
  {
    id: 'kasravi-11', author: 'احمد کسروی', title: 'تاریخ مشروطهٔ ایران، گفتار یازدهم: چگونه مجلس به توپ بسته شد؟', year: '۱۳۱۹ خورشیدی', url: ws('تاریخ مشروطه ایران/۱۱'),
    note: B('آغاز گفت‌وگوی محمدعلی‌شاه با سفارت روس و کلنل لیاخوف دربارهٔ برانداختن مجلس.', 'The start of Mohammad Ali Shah’s talks with the Russian legation and Colonel Liakhov about overthrowing the Majles.'),
  },
  {
    id: 'kasravi-12', author: 'احمد کسروی', title: 'تاریخ مشروطهٔ ایران، گفتار دوازدهم: جنگ در تبریز چگونه آغاز یافت؟', year: '۱۳۱۹ خورشیدی', url: ws('تاریخ مشروطه ایران/۱۲'),
    note: B('روز پایین کشیدن بیرق‌های سفید به دست ستارخان.', 'The day Sattar Khan pulled down the white flags.'),
  },
  {
    id: 'eb1911-muzaffar', author: 'Encyclopædia Britannica, 11th ed. (Wikisource)', title: 'Muzaffar-ed-Dīn', year: '1911', url: 'https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Muzaffar-ed-D%C4%ABn',
    note: B('گزارشی تقریباً هم‌زمان از تاج‌گذاری، وام‌های روس و سه سفر اروپا؛ لحن آن نگاه بریتانیایی آن روز است.', 'A near-contemporary account of the accession, the Russian loans and the three European journeys; its tone is the British view of the day.'),
  },
  {
    id: 'iranica-qajar', author: `E. Yarshater, ${IR}`, title: 'Iran ii. Iranian history (2) Islamic period, page 5: the Qajar dynasty', year: 'online edition', url: ir('iran-ii2-islamic-period-page-5'),
    note: B('نمای کلی پادشاهی ناصرالدین‌شاه و مظفرالدین‌شاه و ترور ۱۸۹۶.', 'An overview of Naser al-Din Shah’s and Mozaffar al-Din Shah’s reigns and the assassination of 1896.'),
  },
  {
    id: 'iranica-shirazi', author: IR, title: 'Ḥasan Širāzi, Mirzā Moḥammad', year: 'online edition', url: ir('hasan-sirazi-mirza-mohammad'),
    note: B('جنبش تنباکو، فتوای تحریم و لغو امتیاز.', 'The Tobacco protest, the boycott fatwa and the cancellation of the concession.'),
  },
  {
    id: 'iranica-arc-1907', author: IR, title: 'Anglo-Russian Convention of 1907', year: 'online edition', url: ir('anglo-russian-convention-of-1907-an-agreement-relating-to-persia-afghanistan-and-tibet'),
    note: B('متن و خط‌های تقسیم ایران در قرارداد ۱۹۰۷.', 'The text and the dividing lines of the 1907 convention.'),
  },
  {
    id: 'iranica-gb-iii', author: IR, title: 'Great Britain iii. British influence in Persia, 1900–21', year: 'online edition', url: ir('great-britain/great-britain-iii'),
    note: B('اینکه قرارداد ۱۹۰۷ بی‌مشورت با ایران بسته شد و تهران تا ۱۱ سپتامبر رسماً از متن آگاه نشد.', 'That the 1907 agreement was made without consulting Persia and Tehran was not officially told its terms until 11 September.'),
  },
  {
    id: 'treaty-1907', author: 'UK Treaty Series 1907 No. 34 (FCDO)', title: 'Convention between the United Kingdom and Russia relating to Persia, Afghanistan, and Thibet', year: '1907', url: 'https://treaties.fcdo.gov.uk/data/Library2/pdf/1907-TS0034.pdf',
    note: B('متن رسمی انگلیسی قرارداد؛ نقل خط قصرشیرین–اصفهان–یزد–کاخک از همین متن است.', 'The official English text; the Kasr-i-Shirin–Isfahan–Yezd–Kakhk line is quoted from it.'),
  },
  {
    id: 'iranica-sattar', author: IR, title: 'Sattār Khan', year: 'online edition', url: ir('sattar-khan-one-of-the-most-popular-heroes-from-tabriz-who-defended-the-town-during-the-lesser-autocracy-in-1908-09'),
    note: B('سه مرحلهٔ جنگ یازده‌ماههٔ تبریز، ۱۷ ژوئیهٔ ۱۹۰۸ و لقب «سردار ملی».', 'The three stages of the eleven-month war in Tabriz, 17 July 1908, and the title “Sardar-e melli”.'),
  },
  {
    id: 'iranica-baqer', author: IR, title: 'Bāqer Khan Sālār-e Mellī', year: 'online edition', url: ir('baqer-khan-salar-melli'),
    note: B('بیرق سفید ۴ ژوئیهٔ ۱۹۰۸، نبرد ساری‌داغ و پناه بردن دو سردار به کنسولگری عثمانی.', 'The white flag of 4 July 1908, the battle of Saridagh and the two leaders’ refuge in the Ottoman consulate.'),
  },
  {
    id: 'iranica-nuri', author: `Vanessa Martin, ${IR}`, title: 'Nuri, Fażl-Allāh', year: 'online edition', url: ir('nuri-fazl-allah'),
    note: B('همراهی نخستین، مخالفت بعدی، «مشروطهٔ مشروعه»، محاکمه و اعدام ۳۱ ژوئیهٔ ۱۹۰۹.', 'Early cooperation, later opposition, the idea of a constitution “according to the sharia”, trial and execution on 31 July 1909.'),
  },
  {
    id: 'iranica-behbahani', author: IR, title: 'Behbahānī, ʿAbdallāh', year: 'online edition', url: ir('abdallah-behbahani'),
    note: B('روز به توپ بستن مجلس، تبعید، بازگشت و ترور ۱۶ ژوئیهٔ ۱۹۱۰.', 'The day of the bombardment, exile, return and assassination on 16 July 1910.'),
  },
  {
    id: 'iranica-teqat', author: IR, title: 'Ṯeqat al-Islām, Mirzā ʿAli Tabrizi', year: 'online edition', url: ir('%E1%B9%AFeqat-al-islam-mirza-%CA%BFali-tabrizi'),
    note: B('به دار آویخته شدن ثقة‌الاسلام به دست نیروهای روس در تبریز، ۳۱ دسامبر ۱۹۱۱.', 'The hanging of Seqat al-Eslam by Russian forces in Tabriz, 31 December 1911.'),
  },
  {
    id: 'iranica-chronology-2', author: `Ehsan Yarshater, ${IR}`, title: 'Chronology of Iranian History, Part 2', year: 'online edition', url: ir('chronology-of-iranian-history-part-2'),
    note: B('رد و سپس پذیرش اولتیماتوم روسیه در مجلس دوم، و بسته شدن مجلس در ۲۴ دسامبر ۱۹۱۱.', 'The Second Majles’s rejection and later acceptance of the Russian ultimatum, and its closure on 24 December 1911.'),
  },
  {
    id: 'majera-podcast', author: 'امیر خادم، Majera Media', title: 'ماجرای مشروطه (پادکست، فهرست پخش یوتیوب)', year: '۲۰۲۴–۲۰۲۶', url: PODCAST_URL,
    note: B('مرور مفصل تاریخ جنبش مشروطه به نویسندگی، تهیه و اجرای امیر خادم، با نقل مستقیم از روزنامهٔ مجلس، اسناد وزارت خارجهٔ بریتانیا و خاطرات هم‌روزگاران. راهنمای قسمت‌ها در همین صفحه آمده است.', 'A detailed history of the constitutional movement, written, produced and presented by Amir Khadem, quoting directly from the Majles newspaper, British Foreign Office papers and contemporaries’ memoirs. An episode guide is on this page.'),
  },
]
