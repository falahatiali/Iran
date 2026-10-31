/**
 * Timur (Tīmūr-i Lang), 1370–1405 CE, with his successors Shahrukh, Gowharshad and Ulugh Beg.
 * Spine: H. R. Roemer, CHI 6 (1986), chs. 2–3; B. F. Manz, "Gowhar-šād Āḡā" (Encyclopaedia Iranica).
 */
import type { DossierSection, FeaturedKing } from '../featured/types'
import { ev, note, sec } from '../late-achaemenid/common'
import { B, P, timPhotos, timSources } from './common'

const sketch = note('منابع راه دقیق را نمی‌گویند؛ خط‌ها طرح‌وارند.', 'The sources give no exact routes; the lines are sketches.')

export const timurEvents = [
  ev('birth', 1336, B('۸ آوریل ۱۳۳۶ م', '8 April 1336 CE'), 'admin', P.KESH, B('زادهٔ کش', 'Born in Kesh'), B('در کش (شهر سبز) در ماوراءالنهر زاده شد. پدرش امیر طراغای در قبیلهٔ برلاس ارجمند بود، هرچند ثروتمند نبود. نام «تیمور» در ترکی یعنی آهن؛ «تیمور لنگ» در فارسی، در اروپا «تامرلن» شد.', 'He was born in Kesh (Shahr-i Sabz) in Transoxania. His father, Amir Taraghai, was respected in the Barlas tribe, though not wealthy. “Timur” means iron in Turkish; the Persian “Timur-i Lang”, Timur the Lame, became “Tamerlane” in Europe.'), 'secure', ['roemer-chi']),
  ev('balkh', 1370, B('۱۳۷۰ م', '1370 CE'), 'campaign', P.BALKH, B('بلخ و فرمانروایی ماوراءالنهر', 'Balkh and the rule of Transoxania'), B('هم‌پیمان و رقیبش امیر حسین را در بلخ محاصره کرد. با آنکه به او امان داده بود، گذاشت یکی از امیران محلی او را به انتقام بکشد. سپس با سرای ملک خانم، دختر یک خان چغتایی، ازدواج کرد و خان دست‌نشانده‌ای از خاندان چنگیز را در سمرقند بر تخت نشاند.', 'He besieged his ally and rival Amir Husain in Balkh. Although he had granted Husain safe conduct, he let a local prince kill him in revenge. He then married Saray Mulk Khanum, daughter of a Chaghatayid khan, and set up a puppet Chinggisid khan in Samarqand.'), 'secure', ['roemer-chi'], { route: [P.SAMARQAND, P.BALKH] }),
  ev('herat', 1381, B('۱۳۸۱ م', '1381 CE'), 'campaign', P.HERAT, B('هرات', 'Herat'), B('هرات تسلیم شد. باروها برچیده شد، باجی سنگین گرفتند و گروهی از بزرگان و دانشمندان به شهر سبز کوچانده شدند. بزرگان شهر از کشتار در امان ماندند.', 'Herat surrendered. Its walls were pulled down, a heavy tribute was taken, and a group of notables and scholars was deported to Shahr-i Sabz. The city’s dignitaries were spared.'), 'secure', ['roemer-chi'], { route: [P.BALKH, P.HERAT], ...sketch }),
  ev('isfahan', 1388, B('۱۳۸۸ م (رومر)', '1388 CE (Roemer)'), 'battle', P.ISFAHAN, B('اصفهان', 'Isfahan'), B('مردم شهر به مأموران مالیات حمله کردند و تیمور شهر را به کیفر سپرد. تاریخ‌نویس حافظ ابرو می‌نویسد گرد نیمی از شهر بیست‌وهشت مناره از سر کشتگان شمرد، هر یک حدود ۱۵۰۰ سر.', 'The townspeople attacked the tax collectors and Timur had the city punished. The historian Hafiz-i Abru writes that, walking half way round the city, he counted twenty-eight towers of heads, each of about 1,500.'), 'probable', ['roemer-chi'], { route: [P.HERAT, P.SULTANIYYA, P.ISFAHAN], ...note('رومر تاریخ را ۷۹۰ ق/۱۳۸۸ می‌گذارد. رقم ۷۰ هزار سر در منابع آمده؛ رومر آن را «شاید ناممکن نیست» می‌داند؛ ما آن را شمارش قطعی نمی‌دانیم.', 'Roemer dates it 790/1388. The sources give 70,000 heads; Roemer thinks the figure may not be impossible; we do not treat it as a firm count.') }),
  ev('baghdad-1393', 1393, B('۱۳۹۳ م', '1393 CE'), 'campaign', P.BAGHDAD, B('نخستین گشودن بغداد', 'Baghdad, the first time'), B('سلطان احمد جلایری، آخرین رقیب او در ایران، از بغداد گریخت و شهر به دست تیمور افتاد.', 'Sultan Ahmad Jalayir, his last rival in Iran, fled Baghdad and the city fell to Timur.'), 'secure', ['roemer-chi'], { route: [P.ISFAHAN, P.SULTANIYYA, P.BAGHDAD], ...sketch }),
  ev('terek', 1395, B('بهار ۱۳۹۵ م', 'Spring 1395 CE'), 'battle', P.TEREK, B('رود ترک', 'The Terek'), B('توقتمش، خان اردوی زرین، که روزی به تیمور پناه آورده بود، رقیبش شده بود. دو سپاه در درهٔ ترک در قفقاز شمالی جنگیدند و سپاه قپچاق سخت شکست خورد. سپس سرای، پایتخت اردوی زرین، غارت شد.', 'Toqtamish, khan of the Golden Horde, who had once taken refuge with Timur, had become his rival. The armies met in the Terek valley in the northern Caucasus and the Qipchaq army was crushed. Then Sarai, the Golden Horde’s capital, was sacked.'), 'secure', ['roemer-chi'], { route: [P.TABRIZ, P.TEREK, P.SARAI], ...note('رومر می‌گوید داستان‌های رسیدن تیمور به مسکو «هیچ پایه‌ای» ندارند.', 'Roemer says stories of Timur reaching Moscow have no basis in fact.') }),
  ev('delhi', 1398, B('۱۳۹۸ م', '1398 CE'), 'battle', P.DELHI, B('دهلی', 'Delhi'), B('لشکرکشی به هند دو سال طول کشید و با غارت دهلی به اوج رسید. به گفتهٔ رومر منابع هیچ انگیزهٔ سیاسی برای آن نمی‌گویند، و چون بیشتر بر ضد فرمانروایان مسلمان بود، انگیزهٔ گسترش اسلام پذیرفتنی نیست.', 'The Indian campaign lasted two years and culminated in the sack of Delhi. Roemer notes that the sources give no political reason for it, and since it was aimed mainly at Muslim rulers, a wish to spread Islam cannot be accepted as the motive.'), 'secure', ['roemer-chi'], { route: [P.SAMARQAND, P.KABUL, P.DELHI], ...sketch }),
  ev('damascus', 1401, B('دسامبر ۱۴۰۰ – مارس ۱۴۰۱ م', 'December 1400 – March 1401 CE'), 'battle', P.DAMASCUS, B('حلب و دمشق', 'Aleppo and Damascus'), B('سپاه از ملطیه به شام رفت و حلب را گرفت. پایان دسامبر به دمشق رسید؛ سلطان ممالیک، فرج، بی‌جنگ بازگشت و شهر تسلیم شد. با این همه در میانهٔ مارس ۱۴۰۱ شهر سه روز غارت شد، به گفتهٔ رومر برخلاف فرمان تیمور.', 'The army marched from Malatya into Syria and took Aleppo. At the end of December it reached Damascus; the Mamluk sultan Faraj withdrew without a battle and the city surrendered. Even so, in mid-March 1401 it was given over to three days of plunder, against Timur’s orders according to Roemer.'), 'secure', ['roemer-chi'], { route: [P.MALATYA, P.ALEPPO, P.DAMASCUS], ...sketch }),
  ev('baghdad-1401', 1401, B('۹ ژوئیهٔ ۱۴۰۱ م', '9 July 1401 CE'), 'battle', P.BAGHDAD, B('بغداد، بار دوم', 'Baghdad, the second time'), B('شهر پس از چهل روز محاصره تسلیم نشد و با یورش گرفته شد. تیمور فرمان کشتار مردم را داد و زنان و کودکان هم در امان نماندند؛ تنها عالمان دین، شیخ‌ها و درویشان را بخشیدند. باروها و ساختمان‌های عمومی ویران شد.', 'The city did not surrender after a forty-day siege and was taken by storm. Timur ordered a massacre from which not even women and children were spared; only theologians, shaykhs and dervishes were let live. The walls and public buildings were destroyed.'), 'secure', ['roemer-chi'], { route: [P.DAMASCUS, P.BAGHDAD], ...sketch }),
  ev('ankara', 1402, B('۲۸ ژوئیهٔ ۱۴۰۲ م (به احتمال)', '28 July 1402 CE (most likely)'), 'battle', P.ANKARA, B('آنکارا', 'Ankara'), B('تیمور سلطان عثمانی، بایزید، را به میدانی نزدیک آنکارا کشاند. سپاه خسته و دیررسیدهٔ عثمانی شکست خورد و بایزید، که هنگام گریز از اسب افتاد، اسیر شد.', 'Timur drew the Ottoman sultan Bayezid to a plain near Ankara. The tired, late-arriving Ottoman army was beaten, and Bayezid, who fell from his horse while trying to escape, was captured.'), 'probable', ['roemer-chi'], { route: [P.TABRIZ, P.MALATYA, P.ANKARA], ...note('منابع در روز نبرد هم‌داستان نیستند؛ رومر ۲۸ ژوئیه را محتمل‌تر می‌داند. شمار سپاهیان در منابع بسیار پراکنده است و ما رقمی نمی‌آوریم.', 'The sources disagree on the day; Roemer takes 28 July as most likely. The figures for the armies vary hugely, and we give none.') }),
  ev('kan-i-gil', 1404, B('سپتامبر ۱۴۰۴ م', 'September 1404 CE'), 'admin', P.KAN_I_GIL, B('قوریلتای کان گل', 'The assembly at Kan-i Gil'), B('تیمور در دشت کان گل نزدیک سمرقند قوریلتای بزرگی برپا کرد. کلاویخو، سفیر کاستیل، که تازه رسیده بود، در آن حاضر بود و گزارشش را نوشت.', 'Timur held a great assembly on the plain of Kan-i Gil near Samarqand. Clavijo, the Castilian ambassador, had just arrived, attended it and wrote an account.'), 'secure', ['roemer-chi']),
  ev('death', 1405, B('۱۸ فوریهٔ ۱۴۰۵ م', '18 February 1405 CE'), 'admin', P.OTRAR, B('مرگ در اترار', 'Death at Otrar'), B('در راه لشکرکشی به چین، در سرمای سخت اترار بیمار شد و در شب ۱۸ فوریه درگذشت. نوه‌اش پیرمحمد را جانشین کرده بود. او را پنهانی در سمرقند به خاک سپردند؛ بعدها، به احتمال در ۱۴۰۹، به گور امیر برده شد.', 'On the way to a campaign against China he fell ill in the bitter cold at Otrar and died in the night of 18 February. He had named his grandson Pir Muhammad as heir. He was buried in secret in Samarqand and later, probably in 1409, moved to the Gur-e Amir.'), 'secure', ['roemer-chi']),
]

const campaignEvents = [
  ev('c-herat', 1381, B('۱۳۸۱', '1381'), 'campaign', P.HERAT, B('هرات', 'Herat'), B('هرات تسلیم شد.', 'Herat surrenders.'), 'secure', ['roemer-chi'], { route: [P.SAMARQAND, P.BALKH, P.HERAT] }),
  ev('c-isfahan', 1388, B('۱۳۸۸', '1388'), 'battle', P.ISFAHAN, B('اصفهان', 'Isfahan'), B('شورش بر مأموران مالیات و کیفری هولناک.', 'A revolt against the tax collectors and a terrible punishment.'), 'probable', ['roemer-chi'], { route: [P.HERAT, P.SULTANIYYA, P.ISFAHAN], ...note('تاریخ از رومر (۷۹۰ ق).', 'Date from Roemer (790 AH).') }),
  ev('c-baghdad-1393', 1393, B('۱۳۹۳', '1393'), 'campaign', P.BAGHDAD, B('بغداد', 'Baghdad'), B('سلطان احمد جلایری گریخت.', 'Sultan Ahmad Jalayir flees.'), 'secure', ['roemer-chi'], { route: [P.ISFAHAN, P.SULTANIYYA, P.BAGHDAD] }),
  ev('c-terek', 1395, B('۱۳۹۵', '1395'), 'battle', P.TEREK, B('رود ترک', 'The Terek'), B('شکست توقتمش و غارت سرای.', 'Toqtamish defeated; Sarai sacked.'), 'secure', ['roemer-chi'], { route: [P.TABRIZ, P.TEREK, P.SARAI] }),
  ev('c-delhi', 1398, B('۱۳۹۸', '1398'), 'battle', P.DELHI, B('دهلی', 'Delhi'), B('غارت دهلی.', 'Delhi is sacked.'), 'secure', ['roemer-chi'], { route: [P.SAMARQAND, P.KABUL, P.DELHI] }),
  ev('c-damascus', 1401, B('مارس ۱۴۰۱', 'Mar 1401'), 'battle', P.DAMASCUS, B('دمشق', 'Damascus'), B('سه روز غارت.', 'Three days of plunder.'), 'secure', ['roemer-chi'], { route: [P.MALATYA, P.ALEPPO, P.DAMASCUS] }),
  ev('c-baghdad-1401', 1401, B('ژوئیهٔ ۱۴۰۱', 'Jul 1401'), 'battle', P.BAGHDAD, B('بغداد', 'Baghdad'), B('یورش و کشتار.', 'Storm and massacre.'), 'secure', ['roemer-chi'], { route: [P.DAMASCUS, P.BAGHDAD] }),
  ev('c-ankara', 1402, B('ژوئیهٔ ۱۴۰۲', 'Jul 1402'), 'battle', P.ANKARA, B('آنکارا', 'Ankara'), B('بایزید اسیر شد.', 'Bayezid is captured.'), 'probable', ['roemer-chi'], { route: [P.TABRIZ, P.MALATYA, P.ANKARA], ...note('روز نبرد قطعی نیست.', 'The exact day is uncertain.') }),
  ev('c-otrar', 1405, B('فوریهٔ ۱۴۰۵', 'Feb 1405'), 'admin', P.OTRAR, B('اترار', 'Otrar'), B('مرگ در راه چین.', 'Death on the road to China.'), 'secure', ['roemer-chi'], { route: [P.SAMARQAND, P.OTRAR] }),
]

export const timurDossier: DossierSection[] = [
  sec('terror', 'منار سرها: ترس به‌عنوان روش', 'Towers of heads: fear as a method',
    [['به نوشتهٔ رومر، مردم شهرهای گشوده بخشی از غنیمت به شمار می‌آمدند: فروخته یا به ماوراءالنهر کوچانده می‌شدند و بسیاری، گاه نیمی، در راه می‌مردند. تیمور بیرون دروازهٔ شهرهای کیفردیده منارهایی از سر برپا می‌کرد. در اصفهان، حافظ ابرو بیست‌وهشت منار شمرد. در بغداد (۱۴۰۱) جز عالمان دین و درویشان کسی را نبخشیدند. در برابر، بزرگان شهرها، مانند هرات در ۱۳۸۱، معمولاً در امان می‌ماندند.'], ['According to Roemer, the people of conquered cities counted as booty: they were sold or deported to Transoxania, and many, often one in two, died on the way. Outside the gates of cities he punished, Timur raised towers of heads. At Isfahan, Hafiz-i Abru counted twenty-eight. At Baghdad (1401) only theologians and dervishes were spared. The leading men of a city, as at Herat in 1381, were usually spared.']],
    [['رومر این منارها را «نماد مستقیم بی‌رحمی لگام‌گسیختهٔ او» می‌خواند و می‌نویسد مغولان نیز «هرگز به این درجه از ناانسانی» نرسیدند. باید دانست برخی گزارش‌ها از نویسندگان دشمن او، مانند ابن عربشاه، است؛ اما شمارش حافظ ابرو گزارشی از نزدیک است. رقم‌های کلی کشتگان را برآورد می‌دانیم، نه شمارش.'], ['Roemer calls the towers “direct symbols of his unbridled cruelty” and writes that the Mongols too achieved nothing that “equalled this degree of inhumanity”. Some accounts come from hostile writers such as Ibn ‘Arabshah; but Hafiz-i Abru’s count is a first-hand report. We treat overall death tolls as estimates, not counts.']],
    [['قدرتی که بر ترس بنا شود، پس از مرگ بنیان‌گذارش زود از هم می‌پاشد.'], ['Power built on fear comes apart quickly once its founder dies.']],
    ['roemer-chi'], { photos: ['toqtamish-1436'] }),
  sec('legitimacy', 'امیر، نه خان', 'Amir, not khan',
    [['تیمور از تبار چنگیز نبود. یک سنگ‌نوشتهٔ آرامگاهی بعدها برای خاندانش نیای مشترک با چنگیز ساخت، اما خودش در زندگی چنین ادعایی نکرد. او خان‌هایی دست‌نشانده از خاندان چنگیز در سمرقند بر تخت نشاند، خودش را «امیر» خواند و چون با دختر یک خان چنگیزی ازدواج کرده بود، لقب «گورکان» (داماد) گرفت. با آنکه سنی بود، به گفتهٔ الگار دانشمندانی چون تفتازانی و میرسید شریف جرجانی را «گاه به زور» به سمرقند برد.'], ['Timur was not a descendant of Chinggis Khan. A burial inscription later gave his family a common ancestry with Chinggis, but in his lifetime he made no such claim. He set up puppet Chinggisid khans in Samarqand, called himself “amir”, and, having married a Chinggisid khan’s daughter, took the title güregen, “son-in-law”. A Sunni, he brought scholars such as Taftazani and Sharif Jurjani to Samarqand, in Algar’s words “sometimes forcibly”.']],
    [['رومر می‌نویسد: «این نشان می‌دهد که او حس می‌کرد فرمانروایی‌اش به مشروعیت نیاز دارد.» یعنی شمشیر کافی نبود؛ نام چنگیز و پشتیبانی عالمان دین هم لازم بود.'], ['Roemer writes: “This suggests that he felt his rule stood in need of legitimisation.” The sword was not enough; he also needed the name of Chinggis and the backing of religious scholars.']],
    [['حتی فاتحان هم بی‌پذیرش مردم و نهادها نمی‌توانند فرمان برانند.'], ['Even conquerors cannot rule without acceptance from people and institutions.']],
    ['roemer-chi', 'iranica-islam-timurid'], { photos: ['timur-1436'] }),
  sec('property', 'دارایی: غنیمت برای پایتخت', 'Property: plunder for the capital',
    [['تیمور سمرقند را دهه‌ها آراست و گردش روستاهایی ساخت که نام شهرهای بزرگ اسلامی را داشتند. صنعتگران و دانشمندان شهرهای گشوده به آنجا کوچانده می‌شدند. پس از نبرد ترک، شهرهای اردوی زرین چنان ویران شد که به گفتهٔ رومر بازرگانی دوربرد از آن راه تقریباً از کار افتاد؛ او می‌نویسد تیمور «احتمالاً» قصد داشت اقتصاد آن سرزمین را نابود کند.'], ['Timur spent decades adorning Samarqand and ringed it with villages named after the great cities of Islam. Craftsmen and scholars from conquered cities were deported there. After the Terek, the cities of the Golden Horde were so devastated that, in Roemer’s account, long-distance trade by that route was virtually paralysed; he writes that Timur had “probably” intended to ruin that country’s economy.']],
    [['این خوانش ماست: در دولت تیمور دارایی و حتی جان مردمِ شهرهای گشوده از آنِ فاتح بود. ثروت از پیرامون به زور به پایتخت برده می‌شد؛ تنها کسانی در امان بودند که فاتح می‌بخشید. این دارایی بود، اما مالکیت نبود.'], ['This is our reading: in Timur’s state, the property and even the lives of conquered townspeople belonged to the conqueror. Wealth was moved by force from the edges to the capital; only those the conqueror chose to spare were safe. That was wealth, but not ownership.']],
    [['شکوه پایتختی که از غارت دیگران ساخته شود، بر ویرانی دیگران ایستاده است.'], ['A capital made splendid by plundering others stands on others’ ruin.']],
    ['roemer-chi'], { photos: ['gur-e-amir'] }),
  sec('successors', 'پس از تیمور: شاهرخ، گوهرشاد و الغ‌بیگ', 'After Timur: Shahrukh, Gowharshad and Ulugh Beg',
    [['پس از کشمکش جانشینی، شاهرخ، پسر تیمور، در ۱۳ مه ۱۴۰۹ بی‌جنگ سمرقند را گرفت و پسرش الغ‌بیگ را فرمانروای ماوراءالنهر کرد؛ خودش در هرات ماند. همسرش گوهرشاد مسجد جامع مشهد را ساخت (پایان ۱۴۱۸) و در ۱۴۲۶ برایش وقف گذاشت؛ مدرسه و مسجدی هم در هرات (۱۴۱۷ تا ۱۴۳۷) ساخت که معمارش قوام‌الدین شیرازی بود. الغ‌بیگ در سمرقند رصدخانه‌ای ساخت و زیج او نامش را ماندگار کرد. شاهرخ در ۱۳ مارس ۱۴۴۷ در ری درگذشت. الغ‌بیگ پس از دو سال پادشاهی از پسرش عبداللطیف شکست خورد و در راه حج، پس از دادگاهی ساختگی، در اکتبر ۱۴۴۹ کشته شد. گوهرشاد هم در ۳۱ ژوئیهٔ ۱۴۵۷ به فرمان ابوسعید تیموری اعدام شد.'], ['After a succession struggle, Timur’s son Shahrukh took Samarqand without a fight on 13 May 1409 and made his son Ulugh Beg governor of Transoxania; he himself stayed in Herat. His wife Gowharshad built the great mosque at Mashhad (finished 1418) and endowed it in 1426; she also built a madrasa and mosque in Herat (1417–1437), with Qavam al-Din Shirazi as architect. Ulugh Beg built an observatory in Samarqand, and his astronomical tables made his name last. Shahrukh died at Ray on 13 March 1447. After two years on the throne, Ulugh Beg was defeated by his son ‘Abd al-Latif and, after a sham trial, was killed on his way to Mecca in October 1449. Gowharshad was executed on the orders of the Timurid Abu Sa‘id on 31 July 1457.']],
    [['رومر می‌نویسد در دربار هرات دیگران، به‌ویژه گوهرشاد، بیش از خود شاهرخ بر حکومت اثر داشتند. مَنز دقیق‌تر می‌گوید گوهرشاد در رتبه پس از همسر چنگیزی شاهرخ، ملکت آغا، بود اما به او نزدیک‌تر و در سیاست فعال‌تر بود. سال ساخت رصدخانه هم روشن نیست: رومر آن را ۸۲۵ ق/حدود ۱۴۲۰ می‌گذارد. رومر الغ‌بیگ را دانشمندی فرهیخته اما «نه مرد عمل» می‌خواند.'], ['Roemer writes that at the Herat court others, especially Gowharshad, had more influence on government than Shahrukh himself. Manz is more precise: Gowharshad ranked below Shahrukh’s Chinggisid wife, Malekat Agha, but was closer to him and more active politically. The date of the observatory is not certain either: Roemer gives 825 AH, about 1420. Roemer calls Ulugh Beg a cultured prince but “not a man of action”.']],
    [['فرزندان یک جهان‌گشا، ماندگاری‌شان را در مسجد و مدرسه و رصدخانه یافتند، نه در جنگ.'], ['A conqueror’s descendants found their lasting legacy in mosques, madrasas and an observatory, not in war.']],
    ['roemer-chi', 'iranica-gowharshad'], { photos: ['goharshad', 'ulugh-beg-observatory'] }),
]

export const timur: FeaturedKing = {
  slug: 'timur',
  name: B('تیمور', 'Timur'),
  dynastyName: B('تیموریان', 'The Timurids'),
  reign: B('۱۳۷۰–۱۴۰۵ م', '1370–1405 CE'),
  title: B('تیمور؛ از سمرقند تا آنکارا', 'Timur: from Samarqand to Ankara'),
  lede: B(
    'امیری از قبیلهٔ برلاس که از چنگیز تبار نداشت، اما از دهلی تا آنکارا تاخت. هرات، اصفهان، بغداد و دمشق را گرفت، اردوی زرین را درهم شکست و سلطان عثمانی را اسیر کرد. بی‌رحمی‌اش در منابع کم‌مانند است؛ جانشینانش، شاهرخ، گوهرشاد و الغ‌بیگ، نامشان را با هنر و دانش ماندگار کردند. لشکرکشی‌ها را روی نقشه دنبال کنید.',
    'An amir of the Barlas tribe with no Chinggisid blood, who rode from Delhi to Ankara. He took Herat, Isfahan, Baghdad and Damascus, broke the Golden Horde and captured the Ottoman sultan. His cruelty stands out even in the sources; his successors, Shahrukh, Gowharshad and Ulugh Beg, made their names through art and learning. Follow the campaigns on the map.',
  ),
  stats: [
    { n: B('۳۵ سال', '35 years'), l: B('فرمانروایی (۱۳۷۰–۱۴۰۵)', 'in power (1370–1405)') },
    { n: B('۲۸', '28'), l: B('منار سر که حافظ ابرو در اصفهان شمرد', 'towers of heads Hafiz-i Abru counted at Isfahan') },
    { n: B('۱۴۰۲', '1402'), l: B('آنکارا؛ اسارت بایزید (م)', 'Ankara; Bayezid captured (CE)') },
    { n: B('۱۴۰۵', '1405'), l: B('مرگ در اترار (م)', 'death at Otrar (CE)') },
  ],
  mapTitle: B('نقشهٔ متحرک: زندگی و لشکرکشی‌ها', 'Animated map: life and campaigns'),
  events: timurEvents,
  span: [1336, 1405],
  campaign: {
    id: 'campaigns',
    title: B('لشکرکشی‌های تیمور: از هرات تا آنکارا (۱۳۸۱–۱۴۰۵ م)', 'Timur’s campaigns: from Herat to Ankara (1381–1405 CE)'),
    intro: { fa: ['از هرات و اصفهان تا رود ترک، دهلی، دمشق، بغداد و آنکارا، و سرانجام مرگ در اترار. تاریخ‌ها از رومر (تاریخ ایران کمبریج، جلد ۶) است؛ راه‌ها طرح‌وارند.'], en: ['From Herat and Isfahan to the Terek, Delhi, Damascus, Baghdad and Ankara, and finally death at Otrar. Dates follow Roemer (Cambridge History of Iran, vol. 6); the routes are sketches.'] },
    events: campaignEvents, span: [1381, 1405], view: [29, 24, 80, 48],
    places: [
      { name: B('سمرقند', 'Samarqand'), c: P.SAMARQAND }, { name: B('هرات', 'Herat'), c: P.HERAT, left: true }, { name: B('اصفهان', 'Isfahan'), c: P.ISFAHAN },
      { name: B('بغداد', 'Baghdad'), c: P.BAGHDAD, left: true }, { name: B('رود ترک', 'Terek'), c: P.TEREK, left: true }, { name: B('سرای', 'Sarai'), c: P.SARAI },
      { name: B('دهلی', 'Delhi'), c: P.DELHI, left: true }, { name: B('دمشق', 'Damascus'), c: P.DAMASCUS, left: true }, { name: B('آنکارا', 'Ankara'), c: P.ANKARA },
      { name: B('اترار', 'Otrar'), c: P.OTRAR },
    ],
    clip: { gif: B('/media/timur/campaigns-fa.gif', '/media/timur/campaigns-en.gif'), mp4: B('/media/timur/campaigns-fa.mp4', '/media/timur/campaigns-en.mp4'), webm: B('/media/timur/campaigns-fa.webm', '/media/timur/campaigns-en.webm'), poster: B('/media/timur/campaigns-fa.png', '/media/timur/campaigns-en.png'), width: 958, height: 356 },
  },
  dossier: timurDossier,
  synthesis: { title: B('جمع‌بندی: جهان‌گشایی بی‌دولت', 'Synthesis: conquest without a state'), paras: {
    fa: [
      'تیمور در سی‌وپنج سال از دهلی تا آنکارا تاخت، اما دولتی پایدار نساخت؛ پس از مرگش جانشینان بر سر میراث جنگیدند. آنچه ماند، شهرها و هنری بود که فرزندانش، به‌ویژه در هرات و سمرقند، پروردند.',
      'از دید دارایی، دولت تیمور دارایی مردم گشوده را از آنِ خود می‌دانست و ثروت را به زور به پایتخت می‌برد. شکوه سمرقند بر ویرانی دیگر شهرها ایستاده بود.',
    ],
    en: [
      'In thirty-five years Timur rode from Delhi to Ankara, but built no lasting state; after his death his heirs fought over the inheritance. What remained were cities and an art that his descendants nurtured, above all in Herat and Samarqand.',
      'Through the lens of property, Timur’s state treated the possessions of conquered people as its own and moved wealth by force to the capital. Samarqand’s splendour stood on the ruin of other cities.',
    ],
  }, sources: ['roemer-chi', 'iranica-gowharshad'] },
  sources: timSources,
  photos: timPhotos,
  related: [
    { href: { fa: '/dynasty/timurids', en: '/dynasty/timurids' }, label: B('دودمان تیموری', 'The Timurid dynasty') },
    { href: { fa: '/king/hulagu', en: '/en/king/hulagu' }, label: B('هولاکو و ایلخانان', 'Hulagu and the Ilkhanids') },
  ],
  wikipedia: 'https://en.wikipedia.org/wiki/Timur',
}
