/**
 * Jalal al-Din Mingburnu, last Khwarazmshah, 1220–1231 CE.
 * Spine: C. E. Bosworth, "Jalāl-al-Din Ḵᵛārazmšāh(i) Mengübirni" (Encyclopaedia Iranica); detail from J. A. Boyle, CHI 5.
 */
import type { DossierSection, FeaturedKing } from '../featured/types'
import { ev, note, sec } from '../late-achaemenid/common'
import { B, P, khwPhotos, khwSources } from './common'

const sketch = note('منابع راه‌ها را نمی‌گویند؛ خط‌ها طرح‌وارند.', 'The sources give no routes; the lines are sketches.')

export const jalalEvents = [
  ev('heir', 1220, B('دسامبر ۱۲۲۰ م', 'December 1220 CE'), 'admin', P.ASHURADEH, B('جانشین پدر', 'His father’s heir'), B('پدرش سلطان محمد در جزیره‌ای در خزر مرد و پیش از مرگ او را به جای برادر کوچک‌ترش اوزلاغ‌شاه جانشین کرد.', 'His father Sultan Muhammad died on a Caspian island, having just named him heir in place of his younger brother Uzlagh Shah.'), 'probable', ['iranica-jalal', 'boyle-chi'], note('تغییر وصیت را نسوی گزارش می‌کند؛ جای جزیره قطعی نیست.', 'The change of succession is reported by Nasawi; the island is not certain.')),
  ev('gurganj', 1221, B('اوایل ۱۲۲۱ م', 'Early 1221 CE'), 'campaign', P.GURGANJ, B('گرگانج و گریز به جنوب', 'Gurganj and the flight south'), B('از راه منقشلاق به گرگانج رسید، اما از توطئهٔ امیران ترک بر جان خود آگاه شد و پایتخت را ترک کرد. نزدیک نسا گروهی از سواران مغول را شکست داد و به غزنه رفت.', 'He reached Gurganj via Mangyshlak, but learned of a plot by Turkish commanders against his life and left the capital. Near Nasa he defeated a force of Mongol cavalry and made for Ghazna.'), 'secure', ['iranica-jalal', 'boyle-chi'], { route: [P.ASHURADEH, P.GURGANJ, P.NISHAPUR, P.GHAZNA], ...sketch }),
  ev('parvan', 1221, B('بهار ۱۲۲۱ م', 'Spring 1221 CE'), 'battle', P.PARVAN, B('پیروزی پروان', 'Victory at Parvan'), B('در غزنه سپاهی از خوارزمیان، ترکان و غوریان گرد آورد و در پروان مغولان را سخت شکست داد. اما امیرانش بر سر غنیمت دعوا کردند و بخشی از سپاه جدا شد.', 'At Ghazna he gathered an army of Khwarazmians, Turks and Ghurids and inflicted a serious defeat on the Mongols at Parvan. But his commanders quarrelled over the booty and part of the army left him.'), 'secure', ['iranica-jalal', 'boyle-chi'], { route: [P.GHAZNA, P.PARVAN], ...sketch }),
  ev('indus', 1221, B('اوت–سپتامبر یا نوامبر ۱۲۲۱ م', 'Aug–Sep or Nov 1221 CE'), 'battle', P.INDUS, B('نبرد کنار سند', 'The battle on the Indus'), B('چنگیز خود او را کنار سند گرفت. جلال‌الدین تا نیمروز جنگید، سپس با اسب به رود زد و به آن سو رسید. بویل می‌نویسد چنگیز با «شگفتی و ستایش» او را به پسرانش نشان داد.', 'Chinggis himself caught him on the Indus. Jalal al-Din fought until midday, then drove his horse into the river and reached the far bank. Boyle writes that Chinggis pointed him out to his sons “with expressions of amazement and admiration”.'), 'probable', ['iranica-jalal', 'boyle-chi'], { route: [P.PARVAN, P.GHAZNA, P.INDUS], ...note('جوینی نبرد را در اوت–سپتامبر و نسوی در نوامبر ۱۲۲۱ می‌گذارد؛ جای آن «احتمالاً» نزدیک کالاباغ امروز است. ستایش چنگیز در منابع آمده، اما جزئیاتش رنگ داستانی دارد.', 'Juvayni puts the battle in Aug–Sep, Nasawi in November 1221; the place is “probably” near modern Kalabagh. Chinggis’s admiration is in the sources, but the detail has the colour of legend.') }),
  ev('kerman', 1224, B('۱۲۲۴ م', '1224 CE'), 'campaign', P.KERMAN, B('بازگشت به ایران از راه کرمان', 'Back to Iran through Kerman'), B('پس از سه سال در هند، از کرمان گذشت، براق حاجب را حاکم آنجا کرد و در فارس با دختر اتابک سلغری ازدواج کرد.', 'After three years in India he passed through Kerman, confirmed Baraq Hajib as its governor, and in Fars married a daughter of the Salghurid atabeg.'), 'secure', ['iranica-jalal'], { route: [P.INDUS, P.KERMAN], ...sketch }),
  ev('tabriz', 1225, B('۲۵ ژوئیهٔ ۱۲۲۵ م', '25 July 1225 CE'), 'campaign', P.TABRIZ, B('تبریز', 'Tabriz'), B('اتابک ازبک را از پایتختش تبریز بیرون کرد و پیروزمندانه به شهر درآمد.', 'He drove the atabeg Uzbek from his capital Tabriz and made a triumphal entry.'), 'secure', ['iranica-jalal', 'boyle-chi'], { route: [P.KERMAN, P.ISFAHAN, P.RAYY, P.TABRIZ], ...sketch }),
  ev('tbilisi', 1226, B('مارس ۱۲۲۶ م', 'March 1226 CE'), 'battle', P.TBILISI, B('تفلیس', 'Tbilisi'), B('گرجیان را شکست داد و تفلیس را گرفت. به گفتهٔ بویل مسیحیان شهر، جز آنان که دین گرداندند، کشتار شدند و کلیساها ویران شد.', 'He defeated the Georgians and took Tbilisi. Boyle says the Christian population, except those who apostatised, were massacred and the churches razed.'), 'secure', ['iranica-jalal', 'boyle-chi'], { route: [P.TABRIZ, P.TBILISI], ...sketch }),
  ev('isfahan', 1227, B('۱۲۲۷ م', '1227 CE'), 'battle', P.ISFAHAN, B('نبرد بیرون اصفهان', 'Battle outside Isfahan'), B('مغولان دوباره آمدند. نبرد بیرون اصفهان از نظر فنی پیروزی مغول بود، اما تلفاتشان چنان سنگین بود که به ماوراءالنهر بازگشتند.', 'The Mongols returned. The battle outside Isfahan was technically a Mongol victory, but their losses were so heavy that they withdrew to Transoxania.'), 'secure', ['iranica-jalal'], { route: [P.TBILISI, P.TABRIZ, P.ISFAHAN], ...sketch }),
  ev('erzincan', 1230, B('ژوئیه–اوت ۱۲۳۰ م', 'Jul–Aug 1230 CE'), 'battle', P.ERZINCAN, B('خلاط، سپس شکست ارزنجان', 'Akhlat, then defeat at Erzincan'), B('خلاط را پس از محاصره‌های پیاپی گرفت، اما ایوبیان و سلجوقیان روم با هم او را در ارزنجان شکست دادند.', 'He finally took Akhlat after repeated sieges, but the Ayyubids and the Seljuks of Rum together defeated him at Erzincan.'), 'secure', ['iranica-jalal'], { route: [P.ISFAHAN, P.TABRIZ, P.AKHLAT, P.ERZINCAN], ...sketch }),
  ev('death', 1231, B('اوت ۱۲۳۱ م', 'August 1231 CE'), 'admin', P.MAYYAFARIQIN, B('مرگ در روستایی کرد', 'Death in a Kurdish village'), B('سپاه تازهٔ مغول به فرماندهی چورماغون آمد. جلال‌الدین بی‌سپاه گریخت و در روستایی کرد نزدیک میافارقین به‌گونه‌ای مرموز کشته شد.', 'A new Mongol army under Chormaghun appeared. With no army left, Jalal al-Din fled and was mysteriously killed in a Kurdish village near Mayyafariqin.'), 'probable', ['iranica-jalal', 'boyle-chi'], { route: [P.ERZINCAN, P.TABRIZ, P.AKHLAT, P.MAYYAFARIQIN], ...note('انگیزهٔ کشتن او روشن نیست؛ باسورث «شاید» طمع یا انتقام را می‌گوید.', 'The motive is unclear; Bosworth suggests “perhaps” gain or revenge.') }),
]

export const jalalDossier: DossierSection[] = [
  sec('indus', 'سند: شکستی که افسانه شد', 'The Indus: a defeat that became a legend',
    [['کنار سند جناح راست و چپ سپاه جلال‌الدین شکست خوردند و تنها قلب سپاه با ۷۰۰ مرد ماند. او تا نیمروز جنگید، سپس از کرانه‌ای بلند با اسب به رود زد و به آن سو رسید. بیشتر یارانش که در پی او به آب زدند، با تیر مغولان کشته شدند. حدود ۴۰۰۰ تن از سپاهش به هند رسیدند.'], ['On the Indus the right and left wings of Jalal al-Din’s army were broken and only the centre, 700 men, held. He fought until midday, then rode his horse off a high bank into the river and reached the far side. Most of the men who followed him into the water were killed by Mongol arrows. Some 4,000 of his troops got safely across into India.']],
    [['این صحنه سده‌ها بعد هم نقاشی شد، مانند نگارهٔ مغولی هند در همین بخش، و ستایش چنگیز از او رنگ افسانه گرفت. منابع نزدیک به رویداد آن را می‌آورند، اما تاریخ نبرد هم یکسان نیست: جوینی تابستان و نسوی نوامبر را می‌گوید. ما آن را «احتمالی» نشان می‌دهیم.'], ['The scene was still being painted centuries later, as in the Mughal painting here, and Chinggis’s admiration took on the colour of legend. The near-contemporary sources do report it, but they do not even agree on the date: Juvayni gives late summer, Nasawi November. We mark it as probable.']],
    [['قهرمانی فردی در یک روز، سرنوشت یک جنگ را عوض نمی‌کند؛ اما حافظهٔ ملت‌ها را می‌سازد.'], ['One man’s heroism on one day does not change the outcome of a war; but it shapes a people’s memory.']],
    ['boyle-chi', 'iranica-jalal'], { photos: ['indus-crossing'] }),
  sec('wars', 'یازده سال جنگ، بی‌متحد', 'Eleven years of war, without allies',
    [['جلال‌الدین پس از هند به غرب ایران آمد، کرمان و فارس را به فرمان آورد، تبریز را گرفت و تفلیس را گشود. با خلیفه، ایوبیان، سلجوقیان روم و اسماعیلیان هم جنگید یا کشمکش داشت. در ۱۲۳۰ ایوبیان و سلجوقیان روم با هم او را در ارزنجان شکست دادند و یک سال بعد، تنها و بی‌سپاه، کشته شد.'], ['After India Jalal al-Din came to western Iran, brought Kerman and Fars under him, took Tabriz and captured Tbilisi. He also fought or quarrelled with the caliph, the Ayyubids, the Seljuks of Rum and the Isma‘ilis. In 1230 the Ayyubids and the Rum Seljuks together defeated him at Erzincan, and a year later, alone and without an army, he was killed.']],
    [['باسورث می‌گوید او شاید تنها فرمانروای ایران شرقی بود که سیاست و مهارت جنگی ایستادگی در برابر مغول را داشت، «اگر» می‌توانست فرمانروایان محلی را متحد کند؛ اما «اختلاف‌ها و رشک‌ها» چنین کاری را ناممکن کرد. اگر او را قهرمان می‌شناسیم، باید بدانیم همان منابع از کشتار تفلیس هم می‌گویند.'], ['Bosworth says he was perhaps the only ruler in the eastern Iranian world with the statesmanship and military expertise to withstand the Mongols, “if” he could have united the local rulers; but “divisions and jealousies made such an aim impossible”. If he is remembered as a hero, the same sources also report the massacre at Tbilisi.']],
    [['دلاوری بی‌متحد کافی نیست؛ ایستادگی در برابر نیرویی بزرگ، ائتلاف می‌خواهد.'], ['Courage without allies is not enough; resisting a great power needs a coalition.']],
    ['iranica-jalal', 'boyle-chi']),
  sec('property', 'دارایی: پادشاهی بی‌سرزمین', 'Property: a king without a land',
    [['باسورث می‌نویسد جلال‌الدین «هرگز» نتوانست جز زمانی کوتاه در سرزمین نیاکانش فرمان براند. سپاهش با غنیمت زنده بود: پس از پروان امیرانش بر سر غنیمت دعوا کردند و بخشی از سپاه رفت؛ و وزیرش برای آذوقهٔ سپاه به ناحیهٔ ارزروم یورش برد.'], ['Bosworth writes that Jalal al-Din was “never” able to reign in his ancestral kingdom for more than a brief time. His army lived on booty: after Parvan his commanders quarrelled over the spoils and part of the army left; and his vizier raided the Erzurum region for provisions.']],
    [['این خوانش ماست: پادشاهی که زمین و مالیات پایدار نداشت، تنها با غنیمت می‌توانست سپاهش را نگه دارد؛ و همین غارت، فرمانروایان همسایه را که می‌توانستند متحدش باشند، دشمن او کرد.'], ['This is our reading: a king with no secure land or taxes could keep his army only through booty; and that very plunder turned the neighbouring rulers, who might have been his allies, into enemies.']],
    [['بی‌پایهٔ اقتصادی پایدار، حتی بهترین فرمانده هم در جنگی دراز می‌بازد.'], ['Without a stable economic base, even the best commander loses a long war.']],
    ['iranica-jalal', 'boyle-chi']),
]

export const jalalAlDin: FeaturedKing = {
  slug: 'jalal-al-din',
  name: B('جلال‌الدین خوارزمشاه', 'Jalal al-Din Khwarazmshah'),
  dynastyName: B('خوارزمشاهیان', 'The Khwarazmshahs'),
  reign: B('۱۲۲۰–۱۲۳۱ م', '1220–1231 CE'),
  title: B('جلال‌الدین؛ آخرین خوارزمشاه و نبرد سند', 'Jalal al-Din: the last Khwarazmshah and the Indus'),
  lede: B(
    'پسر سلطان محمد که پس از گریز پدر، یازده سال با مغولان و همسایگان جنگید. در پروان پیروز شد، کنار سند با اسب از رود گذشت و از تبریز تا تفلیس تاخت. اما متحدی نیافت و در ۱۲۳۱ در روستایی کرد کشته شد.',
    'Sultan Muhammad’s son, who after his father’s flight fought the Mongols and his neighbours for eleven years. He won at Parvan, swam the Indus on horseback and raided from Tabriz to Tbilisi. But he found no allies and was killed in a Kurdish village in 1231.',
  ),
  stats: [
    { n: B('۱۱ سال', '11 years'), l: B('جنگ پس از پدر', 'of war after his father') },
    { n: B('۷۰۰', '700'), l: B('مرد در قلب سپاه کنار سند', 'men in his centre on the Indus') },
    { n: B('۴٬۰۰۰', '4,000'), l: B('سپاهی که به هند رسید', 'troops who reached India') },
    { n: B('۱۲۳۱', '1231'), l: B('پایان دودمان (م)', 'end of the dynasty (CE)') },
  ],
  mapTitle: B('نقشهٔ متحرک: زندگی و لشکرکشی‌ها', 'Animated map: life and campaigns'),
  events: jalalEvents,
  span: [1220, 1231],
  dossier: jalalDossier,
  synthesis: { title: B('جمع‌بندی: قهرمانی بی‌پایگاه', 'Synthesis: a hero without a base'), paras: {
    fa: [
      'جلال‌الدین در پروان مغولان را شکست داد و کنار سند جان به در برد؛ سپس در غرب ایران و قفقاز دولتی کوتاه ساخت. با مرگش در ۱۲۳۱، دودمان خوارزمشاهی پایان یافت و سپاهیانش در آناتولی و شام پراکنده شدند.',
      'از دید دارایی، او پادشاهی بی‌سرزمین بود که سپاهش را با غنیمت نگه می‌داشت؛ و همین، همسایگانی را که می‌توانستند متحدش باشند، از او دور کرد.',
    ],
    en: [
      'Jalal al-Din beat the Mongols at Parvan and escaped them on the Indus; then he built a short-lived state in western Iran and the Caucasus. With his death in 1231 the line of the Khwarazmshahs ended, and his troops scattered into Anatolia and Syria.',
      'Through the lens of property, he was a king without a land who kept his army on booty; and that drove away the neighbours who might have been his allies.',
    ],
  }, sources: ['iranica-jalal', 'boyle-chi'] },
  sources: khwSources,
  photos: khwPhotos,
  related: [
    { href: { fa: '/dynasty/khwarazmshahs', en: '/dynasty/khwarazmshahs' }, label: B('دودمان خوارزمشاهی', 'The Khwarazmshah dynasty') },
    { href: { fa: '/king/ala-al-din-muhammad', en: '/en/king/ala-al-din-muhammad' }, label: B('سلطان محمد و اترار', 'Muhammad II and Otrar') },
  ],
  wikipedia: 'https://en.wikipedia.org/wiki/Jalal_al-Din_Mangburni',
}
