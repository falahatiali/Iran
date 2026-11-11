import type { Place, PlaceSection } from './types'

const h = (fa: string[], en: string[]) => ({ layer: 'historical' as const, paras: { fa, en } })
const p = (fa: string[], en: string[]) => ({ layer: 'philosophical' as const, paras: { fa, en } })
const m = (fa: string[], en: string[]) => ({ layer: 'modern' as const, paras: { fa, en } })

const sections: PlaceSection[] = [
  {
    id: 'tower', title: { fa: 'برج', en: 'The tower' }, period: { fa: '۱۰۰۶–۱۰۰۷ م.', en: '1006–1007 CE' },
    layers: [h(
      [
        'گنبد قابوس برجی بلند است که گور شمس‌المعالی قابوس بن وشمگیر، فرمانروای زیاری طبرستان و گرگان (۹۷۸–۱۰۱۲)، را نشان می‌دهد. شهر گنبد کاووس نام خود را از همین بنا گرفته است (بلر، ایرانیکا).',
        'نقشهٔ آن دایره‌ای است با ده پشت‌بند گوشه‌دار در بیرون؛ قطر درونی در پایه ۹٫۶۷ متر و دیوارها سه متر ستبراست. تنها درِ بنا در سوی جنوب‌خاوری است و طاقچه‌های سه‌پر بالای آن از کهن‌ترین نشانه‌های پیدایش مقرنس در ایران به شمار می‌آیند.',
        'آنچه این برج را از همتایانش جدا می‌کند بلندی آن است: با بام مخروطی ۵۲ متر، نزدیک سه برابر قطرش، و بر تپه‌ای ساختگی به بلندی ده متر. به گفتهٔ شیلا بلر، برج تا سی کیلومتر دورتر دیده می‌شود. همهٔ بنا از آجر پختهٔ مرغوب است و تقریباً بی‌آسیب مانده است.',
      ],
      [
        'Gonbad-e Qabus is a tall tower that marks the grave of Shams al-Maʿali Qabus b. Vushmgir, the Ziyarid ruler of Tabarestan and Gorgan (978–1012). The town of Gonbad-e Kavus takes its name from it (Blair, Iranica).',
        'In plan it is a circle with ten right-angled buttresses outside; the interior diameter at the base is 9.67 metres and the walls are three metres thick. The single doorway is on the south-east, and the trilobed niches above it are among the earliest evidence for the development of muqarnas in Iran.',
        'What sets the tower apart is its height: 52 metres including the conical roof, some three times its diameter, standing on a ten-metre artificial mound. According to Sheila Blair it can be seen from thirty kilometres away. It is built entirely of fine baked brick and has survived almost intact.',
      ],
    )],
    sources: ['iranica-gonbad', 'unesco-gonbad'],
  },
  {
    id: 'inscription', title: { fa: 'کتیبه و دو گاه‌شماری', en: 'The inscription and its two calendars' },
    layers: [h(
      [
        'تنها آرایهٔ بنا دو نوار کتیبه است، یکی بالای در و دیگری زیر بام، هر کدام در ده لوح میان پشت‌بندها. متن هر دو یکی است: امیر قابوس بن وشمگیر در زندگی خود ساختن این بنا را فرمود، در سال قمری ۳۹۷ و سال خورشیدی ۳۷۵.',
        'به گفتهٔ بلر، این دو تاریخ زمان فرمان ساخت را میان پایان سپتامبر ۱۰۰۶ و میانهٔ مارس ۱۰۰۷ می‌گذارند. متن به نثر مسجع است و از دو گاه‌شماری، قمری اسلامی و خورشیدی ایرانی، بهره می‌برد. حروف بلند و زاویه‌دار از آجر تراشیده چنان طراحی شده‌اند که از دور خوانده شوند.',
      ],
      [
        'The only decoration is two inscription bands, one above the door and one below the roof, each divided into ten panels between the buttresses. Both carry the same text: the amir Qabus b. Vushmgir ordered the building in his lifetime, in the lunar year 397 and the solar year 375.',
        'According to Blair, the two dates place the commission between late September 1006 and mid-March 1007. The text is in rhymed prose and uses two calendars, the Islamic lunar and the Iranian solar. Its tall, angular letters of cut brick were designed to be read from afar.',
      ],
    )],
    sources: ['iranica-gonbad'],
  },
  {
    id: 'patron', title: { fa: 'قابوس و دربارش', en: 'Qabus and his court' },
    layers: [
      h(
        [
          'قابوس چهارمین فرمانروای خاندان زیاری بود. بلر می‌نویسد که او را فرمانروایی خونریز گزارش کرده‌اند، اما حامی نامدار هنر و دانش هم بود: ابن سینا به دربار او پناه برد و بیرونی نخستین و نامدارترین کتابش، «الآثار الباقیه» دربارهٔ گاه‌شماری‌ها، را در آنجا نوشت. قابوس خود شاعر بود و از پیشگامان نثر مسجع.',
          'نوه‌اش کیکاووس بن اسکندر «قابوس‌نامه» را برای پسرش نوشت؛ کتابی در آیین زندگی و کشورداری که از شاهکارهای نثر فارسی است.',
        ],
        [
          'Qabus was the fourth ruler of the Ziyarid line. Blair writes that he was reportedly a bloodthirsty tyrant, but also a noted patron of the arts and learning: Avicenna took refuge at his court, and Biruni wrote his first and best-known work, the calendrical treatise al-Athar al-baqiya, there. Qabus was himself a poet and a proponent of rhymed prose.',
          'His grandson Kaykavus b. Iskandar wrote the Qabus-nama for his own son, a book on conduct and statecraft that is one of the masterpieces of Persian prose.',
        ],
      ),
      p(
        [
          'این برداشت ماست. فرمانروایی که بر سنگ گور خود هم تاریخ قمری را نوشت و هم تاریخ خورشیدی ایرانی را، نشان می‌دهد که در سدهٔ یازدهم میراث ایرانی و اسلامی در یک بنا کنار هم نشسته بودند؛ همان پیوندی که بیرونی در همین دربار در کتاب گاه‌شماری‌اش با دقت دانشمندانه بررسید.',
        ],
        [
          'This is our reading. A ruler who put both the lunar date and the Iranian solar date on his own tomb shows that in the eleventh century Iranian and Islamic inheritances sat side by side in a single building; the same pairing that Biruni, at the same court, studied with a scholar’s precision in his book on calendars.',
        ],
      ),
    ],
    sources: ['iranica-gonbad', 'iranica-ziyarids-place'],
  },
  {
    id: 'today', title: { fa: 'امروز', en: 'Today' },
    layers: [m(
      [
        'گنبد قابوس اثر شمارهٔ ۸۶ فهرست آثار ملی ایران است و در ۲۰۱۲ در فهرست میراث جهانی یونسکو آمد. یونسکو آن را «شاهکار» معماری آجری آغاز دوران اسلامی و گواه داد و ستد فرهنگی میان کوچ‌نشینان آسیای میانه و تمدن کهن ایران می‌داند؛ شکل برج با بام مخروطی الگوی برج‌آرامگاه‌های ایران، آناتولی و آسیای میانه شد. به گفتهٔ یونسکو این برج تنها نشان برجای ماندهٔ شهر جرجان است.',
      ],
      [
        'Gonbad-e Qabus is no. 86 on Iran’s list of national monuments and was inscribed on UNESCO’s World Heritage List in 2012. UNESCO calls it a “masterpiece” of early Islamic brick architecture and a testimony to cultural exchange between Central Asian nomads and the ancient civilisation of Iran; its conically roofed form became a prototype for tomb towers in Iran, Anatolia and Central Asia. According to UNESCO, it is the only remaining evidence of the city of Jorjan.',
      ],
    )],
    sources: ['unesco-gonbad', 'iranica-gonbad'],
  },
]

export const gonbadQabus: Place = {
  slug: 'gonbad-e-qabus',
  kind: 'monument',
  name: { fa: 'گنبد قابوس', en: 'Gonbad-e Qabus' },
  aliases: ['گنبد قابوس', 'گنبد کاووس', 'گنبد کاووس گلستان', 'برج قابوس', 'Gonbad-e Qabus', 'Gonbad-e Kavus', 'Gunbad-i Qabus', 'Gonbad-e Qābus', 'Qabus tower'],
  lede: {
    fa: 'برج آجری ۵۲ متری که شمس‌المعالی قابوس زیاری در ۱۰۰۶–۱۰۰۷ برای گور خود ساخت؛ با کتیبه‌ای که هم تاریخ قمری دارد و هم تاریخ خورشیدی ایرانی، و یکی از به‌یادماندنی‌ترین بناهای معماری ایران.',
    en: 'A 52-metre brick tower that the Ziyarid ruler Qabus built for his own grave in 1006–1007, with an inscription dated in both the lunar and the Iranian solar calendar; one of the most memorable monuments of Iranian architecture.',
  },
  coord: { lat: 37.2581, lon: 55.1689, note: { fa: 'مختصات تقریبی برج', en: 'Approximate coordinates of the tower' } },
  facts: [
    { label: { fa: 'استان', en: 'Province' }, value: { fa: 'گلستان', en: 'Golestan' } },
    { label: { fa: 'سال ساخت', en: 'Built' }, value: { fa: '۳۹۷ ق / ۳۷۵ خورشیدی (۱۰۰۶–۱۰۰۷ م.)', en: '397 AH / solar 375 (1006–1007 CE)' } },
    { label: { fa: 'بلندی', en: 'Height' }, value: { fa: '۵۲ متر با بام مخروطی', en: '52 m including the conical roof' } },
    { label: { fa: 'میراث جهانی', en: 'World Heritage' }, value: { fa: '۲۰۱۲ م.', en: '2012' } },
  ],
  sections,
  photos: [],
  sources: [
    { id: 'iranica-gonbad', author: 'Sheila S. Blair', title: '“Gonbad-e Qābus iii. Monument”, Encyclopaedia Iranica XI/2, pp. 126–129', year: '2002, updated 2013', url: 'https://www.iranicaonline.org/articles/gonbad-e-qabus/gonbad-e-qabus-iii-monument/' },
    { id: 'unesco-gonbad', author: 'UNESCO World Heritage Centre', title: 'Gonbad-e Qābus (ref. 1398)', year: '2012', url: 'https://whc.unesco.org/en/list/1398/' },
    { id: 'iranica-ziyarids-place', author: 'C. E. Bosworth', title: '“Ziyarids”, Encyclopaedia Iranica', year: '2009', url: 'https://www.iranicaonline.org/articles/ziyarids/' },
  ],
  eventTitles: ['ساخت گنبد قابوس (۱۰۰۶–۱۰۰۷) زیر نظر خود قابوس'],
  kings: ['qabus'],
  wikipedia: 'https://en.wikipedia.org/wiki/Gonbad-e_Qabus_(tower)',
}
