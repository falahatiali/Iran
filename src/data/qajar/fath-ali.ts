/**
 * Fath-Ali Shah Qajar, 1797–1834 CE, opened by his uncle and founder of the dynasty, Agha Mohammad Khan (d. 1797),
 * with the two Russo-Persian wars and the treaties of Golestan (1813) and Turkmanchay (1828).
 * Spine: Amanat, Perry, Hitchins, Busse and the Golestan and Russia articles (Encyclopaedia Iranica); treaty text: Hurewitz 1956.
 */
import type { DossierSection, FeaturedKing } from '../featured/types'
import { ev, note, sec } from '../late-achaemenid/common'
import { B, P, qjPhotos, qjSources } from './common'

const sketch = note('منابع راه دقیق را نمی‌گویند؛ خط‌ها طرح‌وارند.', 'The sources give no exact routes; the lines are sketches.')
const FA = ['iranica-fath-ali-shah']
const AMK = ['iranica-aga-mohammad-khan']
const GE = ['iranica-aga-mohammad-khan', 'iranica-georgia-ii']
const AB = ['iranica-abbas-mirza']
const RU = ['iranica-russia-i']
const GO = ['iranica-golestan', 'hurewitz-1956']
const TU = ['hurewitz-1956', 'iranica-abbas-mirza', 'iranica-fath-ali-shah']

const golestanDate = note(
  'تاریخ امضا در منابع یکی نیست: ایرانیکا ۲۴ اکتبر ۱۸۱۳، هورویتس ۱۲ اکتبر و پاکروان ۲۱ اکتبر می‌دهد. بخشی از این اختلاف از تفاوت تقویم روسی (کهنه) و میلادی نو است.',
  'Sources disagree on the signing date: Iranica gives 24 October 1813, Hurewitz 12 October and Pakravan 21 October. Part of the gap comes from the difference between the old Russian calendar and the Western one.',
)
const indemnity = note(
  'مبلغ غرامت به چند گونه گزارش شده: متن ترجمهٔ هورویتس «۲۰٬۰۰۰٬۰۰۰ روبل نقره» (برابر ده کرور تومان نقره)، امانت ۴٬۰۰۰٬۰۰۰ پوند و یارشاطر «۱۰٬۰۰۰٬۰۰۰ تومان زر». این‌ها یک مبلغ در واحدهای گوناگون یا برآوردهای متفاوت‌اند و ما یکی را برنمی‌گزینیم.',
  'The indemnity is reported in several forms: Hurewitz’s translation of the text says “20,000,000 silver roubles” (ten kurur of silver tomans), Amanat £4,000,000 and Yarshater “10,000,000 gold tomans”. These are one sum in different units or different estimates, and we do not choose between them.',
)

export const fathAliEvents = [
  ev('birth', 1769, B('مه ۱۷۶۹ م', 'May 1769 CE'), 'admin', P.DAMGHAN, B('زاده در دامغان', 'Born at Damghan'), B('پسر بزرگ حسینقلی‌خان قاجار («جهانسوز») بود و تا پادشاهی «باباخان» خوانده می‌شد.', 'He was the elder son of Hosaynqoli Khan Qajar, “the world-burner”, and was known as Baba Khan until he became shah.'), 'secure', FA),
  ev('hostage', 1774, B('حدود ۱۷۷۴ م', 'c. 1774 CE'), 'admin', P.SHIRAZ, B('گروگان در شیراز', 'Hostage at Shiraz'), B('در پنج‌سالگی گروگان دربار کریم‌خان زند شد و به عمویش آقامحمدخان پیوست که او هم آنجا زیر نظر بود.', 'At the age of five he was sent as a hostage to Karim Khan Zand’s court, where he joined his uncle Agha Mohammad Khan, also held under watch.'), 'probable', FA, note('منبع فقط «در پنج‌سالگی» می‌گوید؛ سال از سال زادن حساب شده است.', 'The source only says “at the age of five”; the year is worked out from his birth.')),
  ev('heir', 1786, B('۲۱ مارس ۱۷۸۶ م', '21 March 1786 CE'), 'admin', P.TEHRAN, B('ولیعهد در تهران', 'Heir at Tehran'), B('آقامحمدخان در پایتخت تازه‌اش، تهران، به قدرت نشست و باباخان را جانشین و نایب‌السلطنه کرد؛ خودش هنوز لقب شاه نگرفت.', 'Agha Mohammad Khan took power in his new capital, Tehran, and named Baba Khan heir and vice-regent; he himself did not yet take the title shah.'), 'disputed', [...FA, ...AMK], note('امانت این را ۲۱ مارس ۱۷۸۶ می‌گذارد؛ پری بر تخت نشستن در تهران را ۱۲۰۳ ق (۱۷۸۸–۱۷۸۹ م) و ولیعهدی باباخان را «اندکی پس از آن» می‌داند.', 'Amanat dates this to 21 March 1786; Perry puts the enthronement at Tehran in 1203 AH (1788–89 CE) and Baba Khan’s designation as heir “soon afterwards”.')),
  ev('kerman', 1794, B('۱۷۹۴ م', '1794 CE'), 'battle', P.KERMAN, B('کرمان', 'Kerman'), B('آقامحمدخان کرمان را از لطفعلی‌خان زند گرفت. به نوشتهٔ ایرانیکا نزدیک ۲۰٬۰۰۰ زن و کودک به بردگی به سربازان داده شدند و مردان یا کشته یا کور شدند.', 'Agha Mohammad Khan took Kerman from Lotf-Ali Khan Zand. Iranica writes that nearly 20,000 women and children were given to the soldiers as slaves, and the men were either killed or blinded.'), 'secure', AMK),
  ev('tiflis', 1795, B('سپتامبر ۱۷۹۵ م', 'September 1795 CE'), 'battle', P.TIFLIS, B('غارت تفلیس', 'Sack of Tiflis'), B('سپاه قاجار ارتش هراکلیوس (ارکلی) گرجی را شکست داد و تفلیس را غارت کرد؛ دست‌کم ۱۵٬۰۰۰ تن به بردگی برده شدند.', 'The Qajar army beat the Georgian army of Heraclius (Erekli) and sacked Tiflis; at least 15,000 people were carried off as slaves.'), 'probable', GE, note('هیچینز تفلیس را «سپتامبر ۱۷۹۵» می‌گذارد. پری آغاز لشکرکشی را «بهار ۱۲۱۰ ق/۱۷۹۶ م» می‌نویسد، اما خودش غارت را پیش از تاج‌گذاری مارس ۱۷۹۶ می‌آورد؛ پس تاریخ هیچینز با ترتیب رویدادها جورتر است.', 'Hitchins dates Tiflis to “September 1795”. Perry writes “the spring of 1210/1796” for the start of the campaign, yet places the sack before the coronation of March 1796, so Hitchins’s date fits the order of events better.')),
  ev('crowned', 1796, B('مارس ۱۷۹۶ م', 'March 1796 CE'), 'admin', P.MOGHAN, B('تاج‌گذاری در دشت مغان', 'Crowned on the Moghan plain'), B('آقامحمدخان در دشت مغان، جای تاج‌گذاری نادرشاه، رسماً شاه شد و در اردبیل شمشیر شاهان صفوی را بست.', 'Agha Mohammad Khan was formally crowned shah on the Moghan plain, where Nader Shah had been crowned, and at Ardabil girded on the sword of the Safavid shahs.'), 'secure', AMK),
  ev('amk-killed', 1797, B('۱۷ ژوئن ۱۷۹۷ م', '17 June 1797 CE'), 'admin', P.SHUSHA, B('کشته شدن آقامحمدخان', 'Agha Mohammad Khan murdered'), B('آقامحمدخان در لشکرکشی دوم به قفقاز در شوشا به دست خدمتکارانش کشته شد.', 'Agha Mohammad Khan was murdered by his servants at Shusha during his second Caucasus campaign.'), 'probable', [...AMK, ...FA], note('پری روز را ۲۱ ذیحجهٔ ۱۲۱۱ ق/۱۷ ژوئن ۱۷۹۷ می‌دهد؛ امانت «ذیقعدهٔ ۱۲۱۱/مه ۱۷۹۷» می‌نویسد.', 'Perry gives 21 Ḏu’l-ḥeǰǰa 1211/17 June 1797; Amanat writes “Ḏu’l-qaʿda 1211/May 1797”.')),
  ev('accession', 1797, B('۱۷۹۷ م', '1797 CE'), 'admin', P.TEHRAN, B('فتحعلی‌شاه', 'Fath-Ali Shah'), B('باباخان پیش از مدعیان به تهران رسید و با نام فتحعلی‌شاه بر تخت نشست. تا ۱۸۰۱ با شورش خویشان و سرکردگان ایل‌ها درگیر بود.', 'Baba Khan reached Tehran ahead of rival claimants and took the throne as Fath-Ali Shah. Until 1801 he faced revolts by kinsmen and tribal chiefs.'), 'secure', FA),
  ev('ganja', 1804, B('ژانویهٔ ۱۸۰۴ م', 'January 1804 CE'), 'battle', P.GANJA, B('سقوط گنجه', 'Fall of Ganja'), B('سیسیانوف، فرمانده روس، ارگ گنجه را گرفت و میان ۱٬۵۰۰ تا ۳٬۰۰۰ تن از مردم را کشت. جنگ نخست ایران و روس در همین سال آغاز شد.', 'The Russian commander Tsitsianov stormed the citadel of Ganja and massacred between 1,500 and 3,000 inhabitants. The first Russo-Persian war began the same year.'), 'secure', RU),
  ev('finkenstein', 1807, B('۴ مه ۱۸۰۷ م', '4 May 1807 CE'), 'admin', P.TEHRAN, B('پیمان فینکنشتاین با فرانسه', 'Treaty of Finkenstein with France'), B('ناپلئون ادعای ایران بر گرجستان را پذیرفت و قول کمک نظامی داد؛ دو ماه بعد با روسیه در تیلسیت آشتی کرد و ایران تنها ماند.', 'Napoleon recognised Persia’s claim to Georgia and promised military help; two months later he made peace with Russia at Tilsit and Persia was left alone.'), 'secure', ['iranica-golestan', 'iranica-fath-ali-shah']),
  ev('aslanduz', 1812, B('۱۸۱۲ م', '1812 CE'), 'battle', P.ASLANDUZ, B('اصلاندوز و لنکران', 'Aslanduz and Lankaran'), B('ارتش ایران در نبردهای اصلاندوز و لنکران سخت شکست خورد و نزدیک ۵٬۰۰۰ تن از سپاه نو از دست رفت.', 'The Persian army suffered heavy defeats at Aslanduz and Lankaran and lost about 5,000 men of the new army.'), 'probable', AB, note('بوسه هر دو نبرد را در ۱۸۱۲ می‌گذارد؛ گزارش ایرانیکا دربارهٔ گلستان نشان می‌دهد جنگ در طالش تا اوایل ۱۸۱۳ کشید.', 'Busse dates both battles to 1812; Iranica’s Golestan article shows the fighting in Talesh ran into early 1813.')),
  ev('golestan', 1813, B('اکتبر ۱۸۱۳ م', 'October 1813 CE'), 'admin', P.GOLESTAN, B('عهدنامهٔ گلستان', 'Treaty of Golestan'), B('ایران فرمانروایی روسیه را بر گرجستان، قره‌باغ و خان‌نشین‌های شمال ارس جز ایروان و نخجوان پذیرفت. شرط‌ها را رتیشچف تحمیل کرد و اوزلی، سفیر بریتانیا، میانجی بود.', 'Persia recognised Russian rule over Georgia, Karabakh and the khanates north of the Aras except Erivan and Nakhchivan. Rtishchev dictated the terms, with the British envoy Ouseley mediating.'), 'disputed', GO, golestanDate),
  ev('war-two', 1826, B('سپتامبر ۱۸۲۶ م', 'September 1826 CE'), 'battle', P.GANJA, B('جنگ دوم؛ شکست گنجه', 'Second war; defeat near Ganja'), B('علما فتوای جهاد دادند و شاه با وجود تردید به جنگ تن داد. عباس‌میرزا از راه شوشا به گنجه رفت و چنان شکست خورد که سرنوشت جنگ روشن شد.', 'The ulama declared holy war, and the shah gave in despite his doubts. Abbas Mirza advanced on Ganja via Shusha and was so badly beaten that the outcome of the war was no longer in doubt.'), 'secure', ['iranica-abbas-mirza', 'iranica-fath-ali-shah']),
  ev('tabriz', 1827, B('۲۴ اکتبر ۱۸۲۷ م', '24 October 1827 CE'), 'battle', P.TABRIZ, B('روس‌ها در تبریز', 'Russians take Tabriz'), B('روس‌ها به آذربایجان رسیدند و تبریز را گرفتند.', 'The Russians pushed into Azarbaijan and captured Tabriz.'), 'secure', AB),
  ev('turkmanchay', 1828, B('۱۰/۲۲ فوریهٔ ۱۸۲۸ م', '10/22 February 1828 CE'), 'admin', P.TURKMANCHAY, B('عهدنامهٔ ترکمانچای', 'Treaty of Turkmanchay'), B('ایران ایروان و نخجوان را واگذار کرد، غرامتی سنگین پذیرفت و حق داشتن کشتی جنگی در دریای خزر را از دست داد. پیمان بازرگانی همراه آن به اتباع روس امتیاز قضایی داد.', 'Persia ceded Erivan and Nakhchivan, accepted a heavy indemnity and lost the right to keep warships on the Caspian. The commercial treaty signed with it gave Russian subjects legal privileges.'), 'secure', TU, { ...indemnity }),
  ev('death', 1834, B('۲۴ اکتبر ۱۸۳۴ م', '24 October 1834 CE'), 'admin', P.ISFAHAN, B('مرگ در اصفهان', 'Death at Isfahan'), B('برای گرفتن مالیات عقب‌افتادهٔ فارس به اصفهان رفته بود و ناگهان درگذشت. در آرامگاهی که خود در حرم حضرت معصومه در قم ساخته بود به خاک سپرده شد.', 'He had gone to Isfahan to collect Fars’s tax arrears and died there suddenly. He was buried in the tomb he had built for himself in the shrine of Fatima Masuma at Qom.'), 'secure', FA),
]

const warEvents = [
  ev('w-ganja', 1804, B('ژانویهٔ ۱۸۰۴', 'Jan 1804'), 'battle', P.GANJA, B('گنجه', 'Ganja'), B('روس‌ها گنجه را گرفتند.', 'The Russians storm Ganja.'), 'secure', RU),
  ev('w-erivan', 1804, B('ژوئن–ژوئیهٔ ۱۸۰۴', 'Jun–Jul 1804'), 'battle', P.ERIVAN, B('ایروان', 'Erivan'), B('عباس‌میرزا سیسیانوف را عقب راند.', 'Abbas Mirza drives Tsitsianov back.'), 'secure', RU, { route: [P.TABRIZ, P.ERIVAN], ...sketch }),
  ev('w-aslanduz', 1812, B('۱۸۱۲', '1812'), 'battle', P.ASLANDUZ, B('اصلاندوز', 'Aslanduz'), B('شکست سخت ایران.', 'A heavy Persian defeat.'), 'secure', AB, { route: [P.TABRIZ, P.ASLANDUZ], ...sketch }),
  ev('w-lankaran', 1812, B('۱۸۱۲–۱۸۱۳', '1812–1813'), 'battle', P.LANKARAN, B('لنکران', 'Lankaran'), B('شکست در طالش.', 'Defeat in Talesh.'), 'probable', ['iranica-abbas-mirza', 'iranica-golestan'], { route: [P.ASLANDUZ, P.LANKARAN], ...note('بوسه ۱۸۱۲ می‌گوید؛ جنگ در طالش تا اوایل ۱۸۱۳ کشید.', 'Busse says 1812; fighting in Talesh ran into early 1813.') }),
  ev('w-golestan', 1813, B('اکتبر ۱۸۱۳', 'Oct 1813'), 'admin', P.GOLESTAN, B('گلستان', 'Golestan'), B('عهدنامهٔ صلح.', 'Peace treaty.'), 'disputed', GO, golestanDate),
  ev('w-soltaniyeh', 1826, B('بهار ۱۸۲۶', 'Spring 1826'), 'admin', P.SOLTANIYEH, B('سلطانیه', 'Soltaniyeh'), B('شورای جنگ نزد شاه.', 'War council before the shah.'), 'secure', FA),
  ev('w-ganja2', 1826, B('سپتامبر ۱۸۲۶', 'Sep 1826'), 'battle', P.GANJA, B('گنجه', 'Ganja'), B('شکست سخت عباس‌میرزا.', 'Abbas Mirza badly beaten.'), 'secure', AB, { route: [P.TABRIZ, P.SHUSHA, P.GANJA], ...sketch }),
  ev('w-echmiadzin', 1827, B('۱۸۲۷', '1827'), 'battle', P.ECHMIADZIN, B('اوچ‌کلیسا', 'Echmiadzin'), B('پیروزی کوچک ایران.', 'A minor Persian victory.'), 'secure', AB, { route: [P.NAKHCHIVAN, P.ECHMIADZIN], ...sketch }),
  ev('w-tabriz', 1827, B('۲۴ اکتبر ۱۸۲۷', '24 Oct 1827'), 'battle', P.TABRIZ, B('تبریز', 'Tabriz'), B('روس‌ها شهر را گرفتند.', 'The Russians take the city.'), 'secure', AB, { route: [P.ERIVAN, P.NAKHCHIVAN, P.TABRIZ], ...sketch }),
  ev('w-turkmanchay', 1828, B('فوریهٔ ۱۸۲۸', 'Feb 1828'), 'admin', P.TURKMANCHAY, B('ترکمانچای', 'Turkmanchay'), B('صلح؛ مرز ارس.', 'Peace; the Aras frontier.'), 'secure', TU, { route: [P.TABRIZ, P.TURKMANCHAY], ...sketch }),
]

export const fathAliDossier: DossierSection[] = [
  sec('founder', 'آقامحمدخان، بنیادگذار', 'Agha Mohammad Khan, the founder',
    [['آقامحمدخان (زادهٔ حدود ۱۷۴۲) در کودکی به فرمان عادل‌شاه افشار اخته شد و سال‌ها گروگان کریم‌خان زند در شیراز بود. پس از مرگ کریم‌خان در مارس ۱۷۷۹ از شیراز گریخت، تهران را پایتخت کرد و در جنگ با جانشینان زند پیروز شد.', 'در ۱۷۹۴ کرمان را گرفت و در سپتامبر ۱۷۹۵ تفلیس را غارت کرد. در مارس ۱۷۹۶ در دشت مغان تاج گذاشت و در ژوئن ۱۷۹۷ در شوشا کشته شد.'],
     ['Agha Mohammad Khan (born about 1742) was castrated as a child on the orders of Adel Shah Afshar and was long a hostage of Karim Khan Zand at Shiraz. After Karim Khan died in March 1779 he escaped from Shiraz, made Tehran his capital and won the war against the Zand successors.', 'In 1794 he took Kerman, and in September 1795 he sacked Tiflis. He was crowned on the Moghan plain in March 1796 and was murdered at Shusha in June 1797.']],
    [['پری می‌نویسد رفتار او در کرمان «نمونهٔ بی‌رحمی» شده است. داستان مشهور مردمی که چشم‌ها را شمردند یا وزن کردند در این منبع نیامده؛ ما عددهای آن داستان را تکرار نمی‌کنیم و فقط گزارش ایرانیکا را می‌آوریم.', 'همان منبع او را سخت‌کوش، ساده‌زیست و اهل نظم می‌داند و گواهی فورستر را نقل می‌کند. او استخوان‌های کریم‌خان را از شیراز به تهران برد و زیر آستانهٔ کاخش دفن کرد تا هر روز بر آن پا بگذارد.'],
     ['Perry writes that his conduct at Kerman “has come down as an exemplar of brutality”. The famous popular story that the eyes were counted or weighed is not in this source; we do not repeat its numbers and give only Iranica’s report.', 'The same source calls him hard-working, austere and concerned with order, and quotes Forster’s testimony. He had Karim Khan’s bones moved from Shiraz to Tehran and buried under the threshold of his palace so that he could tread on them every day.']],
    [['تهران که او پایتخت کرد، هنوز پایتخت ایران است. یاد او در ایران امروز دوگانه است: یکپارچه‌کنندهٔ کشور و فرمانروایی بی‌رحم؛ هر دو در منابع هست.'],
     ['Tehran, which he made the capital, is still Iran’s capital. His memory in Iran today is double: the man who reunited the country and a ruthless ruler; both are in the sources.']],
    AMK, { quotes: [{ text: 'this habit does not seem to operate to the prejudice of the people. This chief has the reputation of being attentive to business . . . which is indeed obvious to common notice', fa: '«این عادت [باده‌نوشی] گویا به زیان مردم نیست. این سرکرده به کاردانی شهره است… و این براستی بر همه آشکار است.»', ref: 'George Forster, A Journey from Bengal to England I, p. 198 (on Agha Mohammad Khan at Sari in the 1780s), quoted in Perry, Encyclopaedia Iranica', source: 'iranica-aga-mohammad-khan' }] }),
  sec('court', 'شاه و دربار', 'The shah and his court',
    [['فتحعلی‌شاه در ۱۷۹۷ به تخت نشست و تا ۱۸۰۱ شورش خویشان و سرکردگان را فرو نشاند. پسرانش را حاکم ولایت‌ها کرد: عباس‌میرزا در تبریز، حسینعلی‌میرزا در فارس، محمدعلی‌میرزا در کرمانشاه.', 'امانت می‌نویسد دربار او برخلاف ساده‌زیستی آقامحمدخان پرشکوه بود. شاه با جان ملکم، فرستادهٔ بریتانیا، دربارهٔ آزادی در انگلستان گفت‌وگو کرد.'],
     ['Fath-Ali Shah took the throne in 1797 and put down revolts by kinsmen and chiefs until 1801. He made his sons governors of provinces: Abbas Mirza in Tabriz, Hosayn-Ali Mirza in Fars, Mohammad-Ali Mirza in Kermanshah.', 'Amanat writes that, unlike Agha Mohammad Khan’s austerity, his court was lavish. The shah discussed liberty in England with the British envoy John Malcolm.']],
    [['امانت می‌نویسد دستاورد او این بود که خان‌سالاری ایلی را به پادشاهی متمرکز و پایدار بدل کرد. پاسخ او به ملکم نشان می‌دهد که خودکامگی را آگاهانه برمی‌گزید و هزینه‌اش، ناپایداری، را هم می‌دید.'],
     ['Amanat writes that his achievement was to turn a tribal khanship into a centralised and stable monarchy. His answer to Malcolm shows he chose absolute rule knowingly and saw its cost, instability.']],
    [['چهره‌های رسمی او با ریش بلند و تاج، که در موزه‌های جهان مانده، تصویر رایج «شاه قاجار» را ساخته‌اند.'],
     ['His official portraits with long beard and crown, now in museums around the world, shaped the common image of “the Qajar shah”.']],
    FA, { photos: ['fath-ali-mihr-ali'], quotes: [{ text: 'your king is, I see, only the first magistrate of the country', fa: '«می‌بینم که پادشاه شما تنها کدخدای اول کشور است.»', ref: 'Fath-Ali Shah to John Malcolm (Malcolm, 1845, pp. 213-15), quoted in Amanat, Encyclopaedia Iranica', source: 'iranica-fath-ali-shah' }, { text: 'has permanence, but it has no enjoyment', fa: '«[چنین قدرتی] پایدار است اما لذتی ندارد»؛ و قدرت خودش «قدرت واقعی است اما پایدار نیست».', ref: 'Fath-Ali Shah to John Malcolm, quoted in Amanat, Encyclopaedia Iranica; the shah continued that his own power “is real power but then it has no permanence”', source: 'iranica-fath-ali-shah' }] }),
  sec('golestan', 'عهدنامهٔ گلستان (۱۸۱۳)', 'The Treaty of Golestan (1813)',
    [['پس از شکست‌های ۱۸۱۲ و فشار بریتانیا، که دیگر نمی‌خواست با متحد روسی‌اش درگیر شود، ایران صلح گلستان را پذیرفت. شرط‌ها را رتیشچف دیکته کرد و گور اوزلی میانجی بود. در سپتامبر ۱۸۱۴ در تفلیس تأیید شد.', 'ایران گرجستان، قره‌باغ و خان‌نشین‌های شمال ارس جز ایروان و نخجوان را به روسیه واگذاشت. بند ۴ روسیه را پشتیبان ولیعهدی کرد که شاه برمی‌گزید.'],
     ['After the defeats of 1812, and under pressure from Britain, which no longer wanted to fight its Russian ally, Persia accepted the peace of Golestan. Rtishchev dictated the terms, with Gore Ouseley mediating. It was ratified at Tiflis in September 1814.', 'Persia gave up Georgia, Karabakh and the khanates north of the Aras except Erivan and Nakhchivan. Article 4 made Russia the backer of whichever heir the shah named.']],
    [['بند ۴ ظاهراً به سود ایران بود، اما به روسیه راه داد که در جانشینی قاجار نقش داشته باشد. ایرانیکا می‌نویسد مرزها روشن تعیین نشد و همین زمینهٔ جنگ دوم را فراهم کرد.', 'تاریخ امضا در منابع یکی نیست (۱۲، ۲۱ یا ۲۴ اکتبر ۱۸۱۳)؛ ما اختلاف را نشان می‌دهیم و یکی را برنمی‌گزینیم.'],
     ['Article 4 looked like a favour to Persia, but it gave Russia a say in the Qajar succession. Iranica writes that the borders were not clearly defined, which prepared the ground for the second war.', 'Sources disagree on the signing date (12, 21 or 24 October 1813); we show the disagreement and do not choose.']],
    [['از دست رفتن قفقاز در گلستان و ترکمانچای در یاد تاریخی ایرانیان زخمی ماندگار است. مرزی که این دو عهدنامه کشیدند امروز بخشی از مرز ایران با جمهوری آذربایجان و ارمنستان است.'],
     ['The loss of the Caucasus at Golestan and Turkmanchay remains a lasting wound in Iranians’ historical memory. The line the two treaties drew is today part of Iran’s border with Azerbaijan and Armenia.']],
    GO, { quotes: [
      { text: 'His Majesty the King of Persia, in demonstration of his amicable sentiments towards the Emperor of Russia, acknowledges in his own name and that of his heirs the sovereignty of the Emperor of Russia over the provinces of Karabagh and Georgia', fa: '«اعلیحضرت پادشاه ایران برای نشان دادن احساسات دوستانه به امپراتور روسیه، به نام خود و وارثانش فرمانروایی امپراتور روسیه را بر ولایت‌های قره‌باغ و گرجستان… می‌پذیرد.»', ref: 'Treaty of Gulistan, Art. 3, English translation in Hurewitz 1956, vol. I', source: 'hurewitz-1956' },
      { text: 'engages for himself and heirs to recognise the Prince who shall be nominated heir-apparent, and to afford him assistance in case he should require it to suppress any opposing party. The power of Persia will thus be increased by the aid of Russia.', fa: '«[امپراتور روسیه] برای خود و وارثانش تعهد می‌کند شاهزاده‌ای را که ولیعهد نامیده شود به رسمیت بشناسد و اگر برای سرکوب گروه مخالف نیاز داشت به او کمک کند. بدین‌سان قدرت ایران با یاری روسیه افزوده خواهد شد.»', ref: 'Treaty of Gulistan, Art. 4, English translation in Hurewitz 1956, vol. I', source: 'hurewitz-1956' },
    ] }),
  sec('turkmanchay', 'عهدنامهٔ ترکمانچای (۱۸۲۸)', 'The Treaty of Turkmanchay (1828)',
    [['جنگ دوم (۱۸۲۶–۱۸۲۸) با فتوای جهاد علما و فشار گروه جنگ‌طلب دربار آغاز شد. پس از شکست گنجه و افتادن تبریز به دست روس‌ها، ایران در ترکمانچای، روستایی در جنوب شرقی تبریز، صلح کرد.', 'متن عهدنامه ایروان و نخجوان را واگذار کرد، غرامتی سنگین گذاشت و داشتن کشتی جنگی در خزر را تنها حق روسیه دانست. پیمان بازرگانی همراه آن گمرک را پنج درصد ثابت کرد و دادرسی اتباع روس را به حضور نمایندهٔ روس بست.'],
     ['The second war (1826–1828) began with the ulama’s call for holy war and pressure from the war party at court. After the defeat near Ganja and the fall of Tabriz, Persia made peace at Turkmanchay, a village south-east of Tabriz.', 'The treaty ceded Erivan and Nakhchivan, imposed a heavy indemnity and made warships on the Caspian a right of Russia alone. The commercial treaty signed with it fixed customs at five per cent and allowed Russian subjects to be tried only in the presence of a Russian delegate.']],
    [['بند هشتم پیمان بازرگانی نمونهٔ «کاپیتولاسیون» (امتیاز قضایی بیگانگان) در ایران شد و قدرت‌های دیگر نیز همین امتیاز را خواستند.', 'مبلغ غرامت در منابع به سه گونه آمده (۲۰ میلیون روبل نقره، ۴ میلیون پوند، ۱۰ میلیون تومان زر)؛ ما هر سه را نشان می‌دهیم.'],
     ['Article VIII of the commercial treaty became the model of “capitulations” (legal privileges for foreigners) in Persia, and other powers sought the same rights.', 'The indemnity appears in three forms in the sources (20 million silver roubles, £4 million, 10 million gold tomans); we show all three.']],
    [['ایرانیکا می‌نویسد مرزی که ترکمانچای کشید در عمل تا ۱۹۹۱ بی‌تغییر ماند و امروز مرز ایران در امتداد ارس است. نام «ترکمانچای» در زبان سیاسی فارسی هنوز نماد قرارداد تحمیلی است؛ این برداشت ماست از کاربرد امروز، نه گزارش منبع.'],
     ['Iranica writes that the border Turkmanchay drew stayed unchanged until 1991, and Iran’s frontier still follows the Aras. The name “Turkmanchay” is still a byword for an imposed treaty in Persian political language; that is our reading of current usage, not a report from the sources.']],
    TU, { quotes: [
      { text: 'His Majesty the Shah of Persia, both in his name as in that of his Heirs and Successors, cedes in entire ownership to the Russian Empire the Khanate of Erivan on both sides of the Araxe, and the Khanate of Nakhitchevan.', fa: '«اعلیحضرت شاه ایران به نام خود و وارثان و جانشینانش خان‌نشین ایروان در دو سوی ارس و خان‌نشین نخجوان را با مالکیت کامل به امپراتوری روسیه واگذار می‌کند.»', ref: 'Treaty of Turkmanchay, Art. III, English translation in Hurewitz 1956, vol. I', source: 'hurewitz-1956' },
      { text: 'His Majesty the Shah of Persia undertakes to make them good by means of a pecuniary indemnity.', fa: '«اعلیحضرت شاه ایران تعهد می‌کند [زیان‌ها] را با غرامت پولی جبران کند.»', ref: 'Treaty of Turkmanchay, Art. VI, English translation in Hurewitz 1956, vol. I; the article fixes the sum at 20,000,000 silver roubles', source: 'hurewitz-1956' },
      { text: 'with the exception of Russia, no other Power shall be able to have war vessels on the Caspian Sea.', fa: '«جز روسیه هیچ قدرت دیگری نمی‌تواند در دریای خزر کشتی جنگی داشته باشد.»', ref: 'Treaty of Turkmanchay, Art. VIII, English translation in Hurewitz 1956, vol. I', source: 'hurewitz-1956' },
      { text: 'the courts of the country may only proceed to take cognizance and give judgment concerning the crime in the presence of a delegate of the Russian Mission or Consulate', fa: '«دادگاه‌های کشور تنها در حضور نمایندهٔ سفارت یا کنسولگری روسیه می‌توانند به جرم رسیدگی و دربارهٔ آن حکم کنند.»', ref: 'Russo-Persian commercial treaty of Turkmanchay, Art. VIII, English translation in Hurewitz 1956, vol. I', source: 'hurewitz-1956' },
    ] }),
  sec('property', 'خزانهٔ شاه و غرامت کشور', 'The shah’s treasure and the country’s indemnity',
    [['امانت می‌نویسد پس از ترکمانچای خزانهٔ دولت ورشکسته بود و تنها با پافشاری بریتانیا شاهِ صرفه‌جو بخش بزرگی از گنجینهٔ شخصی‌اش را برای پرداخت غرامت داد.', 'در همین دوره روسیه عباس‌میرزا را، که شاه ولیعهد کرده بود، به حکم بند ۴ گلستان پشتیبانی می‌کرد.'],
     ['Amanat writes that after Turkmanchay the state treasury was bankrupt, and only under British persuasion did the parsimonious shah reluctantly part with a large portion of his own royal treasures to pay the indemnity.', 'In the same years Russia backed Abbas Mirza, whom the shah had named heir, under Article 4 of Golestan.']],
    [['این برداشت ماست: در این ماجرا مرز میان دارایی شاه و دارایی کشور روشن نبود. خزانهٔ دولت خالی بود اما گنجینهٔ شاه پر؛ و پرداخت غرامتِ جنگی که کشور باخته بود به خواست شخص شاه بستگی داشت.', 'محدودیت این برداشت: منبع ما مقدار گنجینهٔ داده‌شده را نمی‌گوید و انگیزهٔ شاه را فقط از دید امانت می‌شناسیم.'],
     ['This is our reading: in this episode the line between the shah’s property and the country’s wealth was not clear. The state treasury was empty while the shah’s treasure was full, and paying the indemnity for a war the country had lost depended on the shah’s personal will.', 'The limits of this reading: our source does not say how much treasure was handed over, and we know the shah’s motives only through Amanat.']],
    [['پرسش جدایی بودجهٔ کشور از دارایی دربار بعدها در دورهٔ مشروطه دوباره پیش آمد؛ پیوند دادن این دو ماجرا برداشت ماست.'],
     ['The question of separating the state budget from the court’s property came back in the constitutional era; linking the two episodes is our reading.']],
    FA),
]

export const fathAli: FeaturedKing = {
  slug: 'fath-ali',
  name: B('فتحعلی‌شاه قاجار', 'Fath-Ali Shah Qajar'),
  dynastyName: B('قاجاریان', 'The Qajars'),
  reign: B('۱۷۹۷–۱۸۳۴ م', '1797–1834 CE'),
  title: B('فتحعلی‌شاه؛ دربار پرشکوه و قفقاز ازدست‌رفته', 'Fath-Ali Shah: a lavish court and a lost Caucasus'),
  lede: B(
    'برادرزادهٔ آقامحمدخان، بنیادگذار قاجار، که پس از قتل عمویش در ۱۷۹۷ شاه شد. دربار او پرشکوه و پایدار بود، اما در دو جنگ با روسیه قفقاز را از دست داد و با عهدنامه‌های گلستان و ترکمانچای مرز تازهٔ ایران کشیده شد.',
    'The nephew of the dynasty’s founder, Agha Mohammad Khan, he became shah after his uncle’s murder in 1797. His court was lavish and stable, but in two wars with Russia he lost the Caucasus, and the treaties of Golestan and Turkmanchay drew Iran’s new border.',
  ),
  stats: [
    { n: B('۳۷ سال', '37 years'), l: B('پادشاهی (۱۷۹۷–۱۸۳۴)', 'reign (1797–1834)') },
    { n: B('۲', '2'), l: B('جنگ با روسیه', 'wars with Russia') },
    { n: B('۲۰ میلیون', '20 million'), l: B('روبل نقره غرامت (هورویتس)', 'silver roubles indemnity (Hurewitz)') },
    { n: B('۵٪', '5%'), l: B('گمرک ثابت برای کالای روسی', 'fixed duty on Russian trade') },
  ],
  mapTitle: B('نقشهٔ متحرک: زندگی و رویدادها', 'Animated map: life and events'),
  events: fathAliEvents,
  span: [1769, 1834],
  lifeMap: { view: [43, 28, 60, 42.5], places: [
    { name: B('دامغان', 'Damghan'), c: P.DAMGHAN }, { name: B('شیراز', 'Shiraz'), c: P.SHIRAZ }, { name: B('تهران', 'Tehran'), c: P.TEHRAN },
    { name: B('کرمان', 'Kerman'), c: P.KERMAN }, { name: B('تفلیس', 'Tiflis'), c: P.TIFLIS, left: true }, { name: B('شوشا', 'Shusha'), c: P.SHUSHA },
    { name: B('تبریز', 'Tabriz'), c: P.TABRIZ, left: true }, { name: B('اصفهان', 'Isfahan'), c: P.ISFAHAN },
  ] },
  campaign: {
    id: 'campaigns',
    title: B('جنگ‌های ایران و روس (۱۸۰۴–۱۸۲۸ م)', 'The Russo-Persian wars (1804–1828 CE)'),
    intro: { fa: ['دو جنگ در قفقاز، از گنجه تا ترکمانچای. تاریخ‌ها از ایرانیکا (بوسه، امانت و مقالهٔ روسیه) و متن عهدنامه‌ها از هورویتس است؛ راه‌ها طرح‌وارند.'], en: ['Two wars in the Caucasus, from Ganja to Turkmanchay. Dates follow Iranica (Busse, Amanat and the Russia article) and the treaty texts follow Hurewitz; the routes are sketches.'] },
    events: warEvents, span: [1804, 1828], view: [43, 36, 50.5, 42],
    places: [
      { name: B('گنجه', 'Ganja'), c: P.GANJA }, { name: B('ایروان', 'Erivan'), c: P.ERIVAN, dy: -0.35 }, { name: B('اصلاندوز', 'Aslanduz'), c: P.ASLANDUZ },
      { name: B('لنکران', 'Lankaran'), c: P.LANKARAN }, { name: B('گلستان', 'Golestan'), c: P.GOLESTAN, dy: -0.4 }, { name: B('سلطانیه', 'Soltaniyeh'), c: P.SOLTANIYEH },
      { name: B('شوشا', 'Shusha'), c: P.SHUSHA }, { name: B('اوچ‌کلیسا', 'Echmiadzin'), c: P.ECHMIADZIN, left: true, dy: 0.3 }, { name: B('نخجوان', 'Nakhchivan'), c: P.NAKHCHIVAN, left: true },
      { name: B('تبریز', 'Tabriz'), c: P.TABRIZ, left: true }, { name: B('ترکمانچای', 'Turkmanchay'), c: P.TURKMANCHAY }, { name: B('تفلیس', 'Tiflis'), c: P.TIFLIS, left: true },
    ],
    clip: { gif: B('/media/fath-ali/campaigns-fa.gif', '/media/fath-ali/campaigns-en.gif'), mp4: B('/media/fath-ali/campaigns-fa.mp4', '/media/fath-ali/campaigns-en.mp4'), webm: B('/media/fath-ali/campaigns-fa.webm', '/media/fath-ali/campaigns-en.webm'), poster: B('/media/fath-ali/campaigns-fa.png', '/media/fath-ali/campaigns-en.png'), width: 958, height: 356 },
  },
  shareImage: '/media/fath-ali/campaigns-en.png',
  dossier: fathAliDossier,
  synthesis: { title: B('جمع‌بندی: پایداری در درون، شکست در مرز', 'Synthesis: stability within, defeat on the frontier'), paras: {
    fa: [
      'آقامحمدخان کشور را با شمشیر و بی‌رحمی یکپارچه کرد و فتحعلی‌شاه آن را با دربار، پسران حاکم و پیوندهای ایلی نگه داشت. امانت این را دستاورد او می‌داند: پادشاهی‌ای پایدار به جای خان‌سالاری ایلی.',
      'اما در برابر ارتشی مدرن و دیپلماسی اروپایی این ساختار کم آورد. گلستان و ترکمانچای قفقاز را گرفتند، غرامت سنگین و امتیاز قضایی بیگانگان را آوردند و مرزی کشیدند که هنوز برجاست.',
    ],
    en: [
      'Agha Mohammad Khan reunited the country by the sword and with great cruelty, and Fath-Ali Shah held it together through his court, his governor sons and tribal ties. Amanat counts this as his achievement: a stable monarchy in place of a tribal khanship.',
      'But this structure fell short against a modern army and European diplomacy. Golestan and Turkmanchay took the Caucasus, brought a heavy indemnity and legal privileges for foreigners, and drew a border that still stands.',
    ],
  }, sources: ['iranica-fath-ali-shah', 'iranica-aga-mohammad-khan', 'hurewitz-1956'] },
  sources: qjSources,
  photos: qjPhotos,
  related: [
    { href: { fa: '/dynasty/qajars', en: '/dynasty/qajars' }, label: B('دودمان قاجار', 'The Qajar dynasty') },
    { href: { fa: '/king/agha-mohammad', en: '/en/king/agha-mohammad' }, label: B('آقامحمدخان قاجار، عمویش', 'Agha Mohammad Khan Qajar, his uncle') },
    { href: { fa: '/king/karim-khan', en: '/en/king/karim-khan' }, label: B('کریم‌خان زند', 'Karim Khan Zand') },
  ],
  wikipedia: 'https://en.wikipedia.org/wiki/Fath-Ali_Shah_Qajar',
}
