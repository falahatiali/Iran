/**
 * ʿAlaʾ al-Din Muhammad (Muhammad II), Khwarazmshah 1200–1220 CE, Otrar and the Mongol invasion.
 * Spine: C. E. Bosworth, Encyclopaedia Iranica; invasion dates from J. A. Boyle, Cambridge History of Iran 5.
 */
import type { DossierSection, FeaturedKing } from '../featured/types'
import { ev, note, sec } from '../late-achaemenid/common'
import { B, P, khwPhotos, khwSources } from './common'

const sketch = note('منابع راه‌ها را نمی‌گویند؛ خط‌ها طرح‌وارند.', 'The sources give no routes; the lines are sketches.')

export const muhammadEvents = [
  ev('accession', 1200, B('اوت ۱۲۰۰ م', 'August 1200 CE'), 'admin', P.GURGANJ, B('جانشینی تکش', 'Succeeds Tekish'), B('پسر دوم تکش و ترکان خاتون بود و در گرگانج به جای پدر نشست. هنوز به‌طور رسمی دست‌نشاندهٔ قراختاییان بود.', 'The second son of Tekish and Terken Khatun, he succeeded his father at Gurganj. Formally he was still a vassal of the Qara Khitay.'), 'secure', ['iranica-muhammad-kh']),
  ev('ghurids', 1204, B('۱۲۰۴ م', '1204 CE'), 'battle', P.GURGANJ, B('غوریان تا گرگانج', 'The Ghurids reach Gurganj'), B('سلطان غوری به خوارزم تاخت و نزدیک بود پایتخت را بگیرد، اما رانده شد و صلح بسته شد.', 'The Ghurid sultan invaded Khwarazm and almost took the capital before he was driven off and peace was made.'), 'secure', ['iranica-muhammad-kh']),
  ev('talas', 1210, B('حدود ۱۲۱۰ م', 'c. 1210 CE'), 'battle', P.TALAS, B('پیروزی بر قراختاییان', 'Victory over the Qara Khitay'), B('نزدیک طلاس سپاه قراختاییان را شکست داد. این پیروزی را در جهان اسلام پیروزی دین خواندند و او لقب «اسکندر دوم» گرفت.', 'Near Talas he defeated the Qara Khitay. The victory was hailed across the Muslim world as a triumph for the faith, and he took titles such as “the second Alexander”.'), 'probable', ['iranica-muhammad-kh'], { route: [P.GURGANJ, P.BUKHARA, P.SAMARKAND, P.TALAS], ...note('سال دقیق نبرد در منابع روشن نیست و جای آن تقریبی است.', 'The exact year is unclear in the sources and the place is approximate.') }),
  ev('samarkand', 1212, B('۱۲۱۲ م', '1212 CE'), 'battle', P.SAMARKAND, B('غارت سمرقند', 'Samarkand sacked'), B('عثمان‌خان قراخانی دوباره به قراختاییان پیوست. محمد سمرقند را غارت کرد و تقریباً همهٔ خاندان قراخانی را در ماوراءالنهر کشت.', 'The Qarakhanid ‘Uthman Khan went back to the Qara Khitay. Muhammad sacked Samarkand and massacred almost all the Qarakhanid family in Transoxania.'), 'secure', ['iranica-muhammad-kh'], { route: [P.TALAS, P.SAMARKAND], ...sketch }),
  ev('zagros', 1217, B('زمستان ۱۲۱۷–۱۲۱۸ م', 'Winter 1217–1218 CE'), 'campaign', P.HAMADAN, B('لشکرکشی به بغداد در برف', 'The march on Baghdad, stopped by snow'), B('خلیفه ناصر را غاصب خواند، یک سید را خلیفه کرد و به سوی بغداد رفت؛ اما برف بی‌مانند در گذرگاه‌های زاگرس سپاهش را نگه داشت و ناچار بازگشت.', 'He declared the caliph al-Nasir a usurper, proclaimed a sayyid as rival caliph and marched on Baghdad; but unparalleled snowstorms in the Zagros passes stopped his army and forced him back.'), 'secure', ['iranica-muhammad-kh'], { route: [P.SAMARKAND, P.NISHAPUR, P.RAYY, P.HAMADAN], ...note('جای دقیق توقف سپاه در زاگرس روشن نیست؛ نقطه نزدیک همدان طرح‌وار است.', 'Where exactly the army was stopped is not known; the marker near Hamadan is a sketch.') }),
  ev('otrar', 1218, B('۱۲۱۸ م', '1218 CE'), 'battle', P.OTRAR, B('کشتار اترار', 'The Otrar massacre'), B('حاکم اترار، اینالچوق (غایرخان)، کاروان بازرگانانی را که چنگیز فرستاده بود گرفت، کالایشان را برداشت و آنان را کشت؛ به گفتهٔ جوینی ۴۵۰ تن. سپس محمد سفیران چنگیز را که غرامت می‌خواستند کشت.', 'The governor of Otrar, Inalchuq (Ghayir Khan), seized the merchants sent by Chinggis Khan, took their goods and killed them; 450 people, according to Juvayni. Muhammad then put to death the envoys who came to demand redress.'), 'disputed', ['iranica-otrar', 'iranica-muhammad-kh', 'boyle-chi'], note('کشتار قطعی است. اینکه سلطان دستور داد یا فقط چشم پوشید محل بحث است؛ شمار سفیران کشته‌شده هم در منابع یکسان نیست.', 'The massacre is secure. Whether the sultan ordered it or only connived is debated, and the sources differ on how many envoys were killed.')),
  ev('bukhara', 1220, B('فوریهٔ ۱۲۲۰ م', 'February 1220 CE'), 'battle', P.BUKHARA, B('سقوط بخارا', 'Bukhara falls'), B('چنگیز اترار را به پسرانش سپرد و خود به بخارا رفت. پادگان پس از سه روز گریخت، شهر تسلیم شد و ارگ پس از حدود دوازده روز گرفته شد.', 'Chinggis left Otrar to his sons and went for Bukhara. The garrison fled after three days, the town surrendered, and the citadel fell after some twelve days.'), 'secure', ['boyle-chi', 'iranica-muhammad-kh'], { route: [P.OTRAR, P.BUKHARA], ...sketch }),
  ev('flight', 1220, B('مارس تا مه ۱۲۲۰ م', 'March–May 1220 CE'), 'campaign', P.NISHAPUR, B('گریز سلطان', 'The sultan’s flight'), B('سمرقند نیز افتاد. محمد ماوراءالنهر را بی‌دفاع رها کرد و از بلخ به نیشابور گریخت؛ جبه و سبتای در پی او بودند.', 'Samarkand fell too. Muhammad abandoned Transoxania without a fight and fled from Balkh to Nishapur, pursued by Jebe and Sübedei.'), 'secure', ['boyle-chi', 'iranica-muhammad-kh'], { route: [P.BUKHARA, P.SAMARKAND, P.BALKH, P.NISHAPUR], ...sketch }),
  ev('death', 1220, B('دسامبر ۱۲۲۰ یا ژانویهٔ ۱۲۲۱ م', 'December 1220 or January 1221 CE'), 'admin', P.ASHURADEH, B('مرگ در جزیره‌ای در خزر', 'Death on a Caspian island'), B('پس از گریز از عراق عجم به کرانهٔ خزر، به جزیره‌ای پناه برد، احتمالاً آشوراده، و در تنگدستی مرد. پیش از مرگ جلال‌الدین را جانشین کرد.', 'After fleeing through western Iran to the Caspian coast, he took refuge on an island, probably Ashuradeh, and died there in misery. Just before his death he named Jalal al-Din his heir.'), 'probable', ['iranica-muhammad-kh', 'boyle-chi'], { route: [P.NISHAPUR, P.RAYY, P.HAMADAN, P.ASHURADEH], ...note('جای جزیره «احتمالاً» آشوراده است و تاریخ مرگ دسامبر ۱۲۲۰ یا ژانویهٔ ۱۲۲۱. جوینی می‌گوید از اندوه مرد؛ نسوی التهاب حاد ریه را می‌گوید.', 'The island is “probably” Ashuradeh, and the date is December 1220 or January 1221. Juvayni says he died of grief; Nasawi gives an acute inflammation of the lungs.') }),
]

const campaignEvents = [
  ev('c-otrar', 1218, B('۱۲۱۸ م', '1218 CE'), 'battle', P.OTRAR, B('اترار', 'Otrar'), B('کشتار کاروان بازرگانان.', 'The merchant caravan massacred.'), 'secure', ['iranica-otrar']),
  ev('c-otrar2', 1219, B('پاییز ۱۲۱۹ م', 'Autumn 1219 CE'), 'battle', P.OTRAR, B('محاصرهٔ اترار', 'Otrar besieged'), B('چنگیز به سیحون می‌رسد.', 'Chinggis reaches the Jaxartes.'), 'secure', ['iranica-otrar', 'boyle-chi']),
  ev('c-bukhara', 1220, B('فوریهٔ ۱۲۲۰ م', 'Feb 1220 CE'), 'battle', P.BUKHARA, B('بخارا', 'Bukhara'), B('شهر تسلیم و ارگ گرفته می‌شود.', 'The town surrenders; the citadel is stormed.'), 'secure', ['boyle-chi'], { route: [P.OTRAR, P.BUKHARA], ...sketch }),
  ev('c-samarkand', 1220, B('۱۲۲۰ م', '1220 CE'), 'battle', P.SAMARKAND, B('سمرقند', 'Samarkand'), B('پس از پنج روز تسلیم می‌شود.', 'It surrenders on the fifth day.'), 'secure', ['boyle-chi'], { route: [P.BUKHARA, P.SAMARKAND], ...sketch }),
  ev('c-nishapur', 1220, B('آوریل–مه ۱۲۲۰ م', 'Apr–May 1220 CE'), 'campaign', P.NISHAPUR, B('گریز سلطان', 'The sultan flees'), B('محمد از بلخ به نیشابور و از آنجا به غرب.', 'Muhammad flees via Balkh to Nishapur and on west.'), 'secure', ['boyle-chi'], { route: [P.SAMARKAND, P.BALKH, P.NISHAPUR], ...sketch }),
  ev('c-death', 1220, B('دسامبر ۱۲۲۰ م', 'Dec 1220 CE'), 'admin', P.ASHURADEH, B('مرگ سلطان', 'The sultan dies'), B('در جزیره‌ای در خزر.', 'On an island in the Caspian.'), 'probable', ['boyle-chi'], { route: [P.NISHAPUR, P.RAYY, P.ASHURADEH], ...note('جای جزیره و ماه مرگ قطعی نیست.', 'The island and the month are not certain.') }),
  ev('c-merv', 1221, B('فوریهٔ ۱۲۲۱ م', 'Feb 1221 CE'), 'battle', P.MERV, B('مرو', 'Merv'), B('تولوی به مرو می‌رسد.', 'Tolui reaches Merv.'), 'secure', ['boyle-chi'], { route: [P.SAMARKAND, P.MERV], ...sketch }),
  ev('c-nishapur2', 1221, B('آوریل ۱۲۲۱ م', 'Apr 1221 CE'), 'battle', P.NISHAPUR, B('نیشابور', 'Nishapur'), B('شهر پس از سه روز یورش گرفته می‌شود.', 'The town is stormed after three days.'), 'secure', ['boyle-chi'], { route: [P.MERV, P.NISHAPUR], ...sketch }),
  ev('c-gurganj', 1221, B('بهار ۱۲۲۱ م', 'Spring 1221 CE'), 'battle', P.GURGANJ, B('گرگانج', 'Gurganj'), B('پایتخت پس از محاصره‌ای طولانی ویران می‌شود.', 'The capital is destroyed after a long siege.'), 'secure', ['iranica-muhammad-kh', 'boyle-chi'], { route: [P.BUKHARA, P.GURGANJ], ...sketch }),
  ev('c-indus', 1221, B('۱۲۲۱ م', '1221 CE'), 'battle', P.INDUS, B('کنار سند', 'The Indus'), B('جلال‌الدین شکست می‌خورد و از رود می‌گذرد.', 'Jalal al-Din is defeated and swims the river.'), 'probable', ['iranica-jalal', 'boyle-chi'], { route: [P.NISHAPUR, P.BALKH, P.GHAZNA, P.INDUS], ...note('جوینی اوت–سپتامبر و نسوی نوامبر را می‌گوید.', 'Juvayni gives Aug–Sep, Nasawi November.') }),
]

export const muhammadDossier: DossierSection[] = [
  sec('otrar', 'اترار: کاروانی که جنگ را آغاز کرد', 'Otrar: the caravan that started a war',
    [['در ۱۲۱۸ کاروانی از بازرگانان مسلمان، که چنگیز برای گشودن بازرگانی با خوارزم فرستاده بود، به اترار رسید. حاکم شهر، اینالچوق که خویشاوند سلطان بود، آنان را جاسوس خواند، کالایشان را گرفت و کشتشان. چنگیز غرامت خواست؛ محمد سفیران او را کشت. یک سال بعد سپاه مغول بر کنار سیحون بود.'], ['In 1218 a caravan of Muslim merchants, sent by Chinggis Khan to open trade with Khwarazm, reached Otrar. The governor, Inalchuq, a kinsman of the sultan, called them spies, took their goods and killed them. Chinggis demanded redress; Muhammad killed his envoys. A year later the Mongol army stood on the Jaxartes.']],
    [['نقش سلطان محل بحث است. باسورث در مقالهٔ اترار می‌گوید حاکم «ظاهراً با موافقت خود شاه» دست به کشتار زد، و در مقالهٔ سلطان آن را «خطایی» می‌داند که شاید از ناتوانی سلطان در مهار زیردستی در مرز بود؛ اما کشتن سفیران را «تحریکی بی‌معنا» از خود محمد می‌نامد. بویل می‌نویسد سلطان کشتار را «اجازه داد یا دست‌کم به آن چشم پوشید». جکسون یادآور می‌شود که کشتار برای چنگیز «بهانه‌ای» بود.'], ['The sultan’s part is disputed. In the Otrar article Bosworth says the governor acted “apparently with the agreement of the king himself”; in the article on the sultan he calls it a “blunder” that may be excused by the sultan’s lack of control over a frontier subordinate, but calls the killing of the envoys “a senseless act of provocation by Moḥammad himself”. Boyle writes that the sultan “authorized or at any rate connived at” the massacre. Jackson notes that for Chinggis it “furnished a pretext”.']],
    [['کشتن پیام‌آوران، راه گفت‌وگو را می‌بندد و هزینه‌اش را مردم می‌پردازند، نه فرمانروا.'], ['Killing the messenger closes the road to talks, and the people pay the price, not the ruler.']],
    ['iranica-otrar', 'iranica-muhammad-kh', 'boyle-chi', 'iranica-mongols'], { photos: ['otrar-air'] }),
  sec('invasion', 'یورش: از اترار تا سند', 'The invasion: from Otrar to the Indus',
    [['چنگیز در پاییز ۱۲۱۹ سپاهش را کنار اترار بخش کرد: پسرانش اترار را محاصره کردند و خود به بخارا رفت، که در فوریهٔ ۱۲۲۰ افتاد؛ سپس سمرقند. محمد ماوراءالنهر را بی‌جنگ رها کرد و گریخت. در ۱۲۲۱ مرو، نیشابور و گرگانج یکی‌یکی گرفته و ویران شدند، و جلال‌الدین کنار سند شکست خورد.'], ['In autumn 1219 Chinggis divided his army at Otrar: his sons besieged the town while he went for Bukhara, which fell in February 1220, and then Samarkand. Muhammad abandoned Transoxania without a battle and fled. In 1221 Merv, Nishapur and Gurganj were taken and destroyed one after another, and Jalal al-Din was defeated on the Indus.']],
    [['شمار کشتگان در منابع بسیار بزرگ است و پژوهشگران آن را اغراق می‌دانند؛ ما رقمی نمی‌دهیم. تاریخ‌ها از بویل است که گزارش جوینی و نسوی را کنار هم گذاشته. بارتولد سپاه مغول را ۱۵۰ تا ۲۰۰ هزار تن برآورد کرده؛ این برآورد است، نه شمارش.'], ['The death tolls in the sources are enormous and scholars treat them as exaggerated; we give no figures. The dates follow Boyle, who sets Juvayni and Nasawi side by side. Barthold estimated the Mongol army at 150,000 to 200,000 men; that is an estimate, not a count.']],
    [['شهرهایی که قرن‌ها ساخته شده بودند، در دو سال از میان رفتند؛ بازسازی گاه نسل‌ها طول کشید و گاه هرگز رخ نداد.'], ['Cities built over centuries were destroyed in two years; rebuilding sometimes took generations, and sometimes never came.']],
    ['boyle-chi', 'iranica-muhammad-kh'], { photos: ['bukhara-sermon'] }),
  sec('property', 'دارایی: کاروان، غنیمت و سپاه بی‌وفا', 'Property: a caravan, booty and a disloyal army',
    [['کاروان اترار پر از طلا، نقره، ابریشم و پوست بود و بویل می‌نویسد همین ثروت آز حاکم را برانگیخت. باسورث می‌گوید سپاه خوارزم بیشتر از ترکان قپچاق بود که هنوز تقریباً نامسلمان بودند و زیاده‌روی‌هایشان پشتیبانی مردم ماوراءالنهر و ایران را از سلطان گرفت.'], ['The Otrar caravan carried gold, silver, silks and furs, and Boyle writes that this wealth excited the governor’s greed. Bosworth says the Khwarazmian army was largely Qipchaq Turks, still virtually pagan, whose excesses quickly lost the sultan support in Transoxania and Iran.']],
    [['این خوانش ماست: در این دولت، دارایی بازرگان در برابر حاکم امنیت نداشت؛ کالای یک کاروان به یک دستور مصادره شد. سپاهی که با غنیمت نگه داشته می‌شد، وقتی جنگ سخت شد وفادار نماند. باسورث هم می‌گوید خوارزم برای ادارهٔ امپراتوری‌ای چنین پهناور، نیروی انسانی و خزانهٔ کافی نداشت.'], ['This is our reading: in this state a merchant’s property had no protection from a governor; a whole caravan was confiscated by one order. An army held together by booty did not stay loyal when the war turned hard. Bosworth also says Khwarazm lacked the manpower and treasure to run so far-flung an empire.']],
    [['امنیت مال بازرگان فقط اخلاق نیست؛ پایهٔ بازرگانی و صلح میان کشورهاست.'], ['Security for a merchant’s goods is not only a moral matter; it is the basis of trade and of peace between states.']],
    ['boyle-chi', 'iranica-muhammad-kh']),
]

export const muhammadKh: FeaturedKing = {
  slug: 'ala-al-din-muhammad',
  name: B('سلطان محمد خوارزمشاه', 'Muhammad II of Khwarazm'),
  dynastyName: B('خوارزمشاهیان', 'The Khwarazmshahs'),
  reign: B('۱۲۰۰–۱۲۲۰ م', '1200–1220 CE'),
  title: B('سلطان محمد خوارزمشاه؛ اترار و یورش مغول', 'Muhammad II of Khwarazm: Otrar and the Mongol invasion'),
  lede: B(
    'علاءالدین محمد امپراتوری خوارزم را به اوج رساند و حتی به سوی بغداد لشکر کشید. اما کشتار بازرگانان در اترار و کشتن سفیران چنگیز، یورش مغول را به همراه آورد. سلطان گریخت و در جزیره‌ای در خزر مرد. یورش را روی نقشه دنبال کنید.',
    '‘Ala’ al-Din Muhammad brought the Khwarazmian empire to its peak and even marched on Baghdad. But the massacre of merchants at Otrar and the killing of Chinggis Khan’s envoys brought the Mongol invasion. The sultan fled and died on an island in the Caspian. Follow the invasion on the map.',
  ),
  stats: [
    { n: B('۲۰ سال', '20 years'), l: B('سلطنت', 'as sultan') },
    { n: B('۴۵۰', '450'), l: B('بازرگان کشته در اترار (به گفتهٔ جوینی)', 'merchants killed at Otrar (per Juvayni)') },
    { n: B('۱۲۱۸', '1218'), l: B('کشتار اترار (م)', 'Otrar massacre (CE)') },
    { n: B('۱ جزیره', '1 island'), l: B('جای مرگ در خزر', 'where he died, in the Caspian') },
  ],
  mapTitle: B('نقشهٔ متحرک: زندگی و لشکرکشی‌ها', 'Animated map: life and campaigns'),
  events: muhammadEvents,
  span: [1200, 1220],
  campaign: {
    id: 'campaigns',
    title: B('یورش مغول: از اترار تا سند (۱۲۱۸–۱۲۲۱ م)', 'The Mongol invasion: from Otrar to the Indus (1218–1221 CE)'),
    intro: { fa: ['از کشتار اترار تا بخارا و سمرقند، گریز سلطان و مرگش در خزر، و سپس مرو، نیشابور، گرگانج و نبرد سند. تاریخ‌ها از بویل و ایرانیکاست؛ راه‌ها طرح‌وارند.'], en: ['From the Otrar massacre to Bukhara and Samarkand, the sultan’s flight and death on the Caspian, then Merv, Nishapur, Gurganj and the battle on the Indus. Dates follow Boyle and Iranica; the routes are sketches.'] },
    events: campaignEvents, span: [1218, 1221], view: [50, 30, 74, 46],
    places: [
      { name: B('اترار', 'Otrar'), c: P.OTRAR }, { name: B('بخارا', 'Bukhara'), c: P.BUKHARA, left: true }, { name: B('سمرقند', 'Samarkand'), c: P.SAMARKAND },
      { name: B('گرگانج', 'Gurganj'), c: P.GURGANJ }, { name: B('مرو', 'Merv'), c: P.MERV }, { name: B('نیشابور', 'Nishapur'), c: P.NISHAPUR, left: true },
      { name: B('بلخ', 'Balkh'), c: P.BALKH }, { name: B('آشوراده', 'Ashuradeh'), c: P.ASHURADEH, left: true }, { name: B('غزنه', 'Ghazna'), c: P.GHAZNA, left: true },
      { name: B('سند', 'Indus'), c: P.INDUS },
    ],
    clip: { gif: B('/media/ala-al-din-muhammad/campaigns-fa.gif', '/media/ala-al-din-muhammad/campaigns-en.gif'), mp4: B('/media/ala-al-din-muhammad/campaigns-fa.mp4', '/media/ala-al-din-muhammad/campaigns-en.mp4'), webm: B('/media/ala-al-din-muhammad/campaigns-fa.webm', '/media/ala-al-din-muhammad/campaigns-en.webm'), poster: B('/media/ala-al-din-muhammad/campaigns-fa.png', '/media/ala-al-din-muhammad/campaigns-en.png'), width: 958, height: 356 },
  },
  shareImage: '/media/ala-al-din-muhammad/campaigns-en.png',
  dossier: muhammadDossier,
  synthesis: { title: B('جمع‌بندی: امپراتوری‌ای که در دو سال فروریخت', 'Synthesis: an empire that fell in two years'), paras: {
    fa: [
      'محمد بر قراختاییان پیروز شد، سمرقند را گرفت و تا زاگرس پیش رفت. اما به گفتهٔ باسورث با تحریک مغولان «فرصت ساختن امپراتوری‌ای پایدار» را از دست داد و برای بخش بزرگی از جهان اسلام «فاجعه‌هایی انسانی و اجتماعی» به بار آورد.',
      'از دید دارایی، امنیت مال بازرگان و وفاداری سپاه هر دو به ارادهٔ یک تن بسته بود. هنگامی که آن تن گریخت، هیچ نهادی نماند که از شهرها دفاع کند.',
    ],
    en: [
      'Muhammad defeated the Qara Khitay, took Samarkand and advanced to the Zagros. But by provoking the Mongols, Bosworth says, he “threw away … the chance of building up an empire of some permanence” and unleashed “a series of human and social disasters” over much of the Islamic world.',
      'Through the lens of property, both a merchant’s security and the army’s loyalty hung on one man’s will. When that man fled, no institution was left to defend the cities.',
    ],
  }, sources: ['iranica-muhammad-kh', 'iranica-otrar'] },
  sources: khwSources,
  photos: khwPhotos,
  related: [
    { href: { fa: '/dynasty/khwarazmshahs', en: '/dynasty/khwarazmshahs' }, label: B('دودمان خوارزمشاهی', 'The Khwarazmshah dynasty') },
    { href: { fa: '/king/jalal-al-din', en: '/en/king/jalal-al-din' }, label: B('جلال‌الدین و نبرد سند', 'Jalal al-Din and the Indus') },
  ],
  wikipedia: 'https://en.wikipedia.org/wiki/Muhammad_II_of_Khwarazm',
}
