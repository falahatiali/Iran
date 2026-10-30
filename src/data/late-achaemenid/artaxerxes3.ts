/**
 * Artaxerxes III Ochus (r. 359/358–338 BCE). Babylonian dating fixes the accession (from Nov. 359);
 * Diodorus 16 is the main narrative (his dates for Egypt are displaced and flagged); Aelian's Apis
 * story is hostile Egyptian tradition and flagged. Verbatim quote: Arrian 2.14 (Chinnock).
 */
import type { Coord, DossierSection, FeaturedKing } from '../featured/types'
import { ACH, BABYLON, CADUSIA, CYPRUS, MEMPHIS, PELUSIUM, PERSEPOLIS, SIDON, SUSA, clipFor, ev, note, photos, pick, related, sec } from './common'

const B = (fa: string, en: string) => ({ fa, en })
const DASCYLIUM: Coord = [28.06, 40.17]
const PELLA: Coord = [22.52, 40.76]
const PERINTHUS: Coord = [27.96, 40.98]
const BUBASTIS: Coord = [31.51, 30.57]
const NUBIA: Coord = [32.9, 22.6]
const TRIPOLIS: Coord = [35.84, 34.44]
const ATHENS: Coord = [23.73, 37.97]

const events = [
  ev('accession', -359, B('نوامبر ۳۵۹ پ.م.', 'November 359 BCE'), 'admin', SUSA, B('اخوس، اردشیر سوم', 'Ochus becomes Artaxerxes III'), B('اخوس، پسر اردشیر دوم و استاتیرا، با نام اردشیر شاه شد. سال‌شمار بابلی پادشاهی‌اش را از نوامبر ۳۵۹ می‌شمارد؛ پولیاینوس (۷.۱۷) می‌گوید ده ماه مرگ پدر را پنهان کرد. به گفتهٔ یوستینوس برادران و خواهران و دیگر رقیبان را کشت.', 'Ochus, son of Artaxerxes II and Stateira, became king as Artaxerxes. The Babylonian era counts his reign from November 359; Polyaenus (7.17) says he hid his father’s death for ten months. According to Justin he killed his brothers, sisters and other rivals.'), 'probable', ['ir-a3', 'justin'], note('شمار «۸۰ برادر در یک روز» نزد کورتیوس (۱۰.۵.۲۳) بلاغی است.', 'Curtius’ “80 brothers in one day” (10.5.23) is rhetorical.')),
  ev('cadusii', -358, B('سال‌های نخست', 'the first years'), 'battle', CADUSIA, B('جنگ کادوسیان و کودومانوس', 'The Cadusian war and Codomannus'), B('نخست با کادوسیان شورشی در ماد آتروپاتن جنگید؛ کودومانوس، داریوش سوم آینده، در نبرد تن‌به‌تن نام آور شد (دیودوروس ۱۷.۶.۱؛ یوستینوس ۱۰.۳.۳–۴).', 'He first fought the rebel Cadusii in Media Atropatene; Codomannus, the future Darius III, won fame in single combat (Diodorus 17.6.1; Justin 10.3.3–4).'), 'probable', ['diodorus', 'justin', 'ir-a3']),
  ev('mercenaries', -356, B('حدود ۳۵۶–۳۵۲ پ.م.', 'c. 356–352 BCE'), 'admin', DASCYLIUM, B('فرمان برچیدن مزدوران؛ گریز ارتباز', 'Mercenaries disbanded; Artabazus flees'), B('شاه به ساتراپ‌های غرب فرمان داد مزدوران یونانی خود را مرخص کنند. اورونتس رام شد؛ ارتباز، ساتراپ فروگیهٔ هلسپونت، که خارس آتنی نخست یاری‌اش کرده بود، شکست خورد و نزد فیلیپ مقدونی پناه برد.', 'The king ordered the western satraps to dismiss their Greek mercenaries. Orontes submitted; Artabazus, satrap of Hellespontine Phrygia, first helped by the Athenian Chares, was defeated and took refuge with Philip of Macedon.'), 'probable', ['diodorus', 'ir-a3'], { route: [DASCYLIUM, [25.5, 40.6], PELLA] }),
  ev('egypt-fail', -351, B('حدود ۳۵۱ پ.م.', 'c. 351 BCE'), 'campaign', PELUSIUM, B('لشکرکشی ناکام به مصر', 'A failed campaign to Egypt'), B('لشکرکشی سرداران شاه به مصر شکست خورد.', 'The campaign of the king’s generals against Egypt failed.'), 'probable', ['ir-a3', 'diodorus'], note('جزئیات و تاریخ دقیق روشن نیست.', 'The details and exact date are unclear.')),
  ev('tennes', -351, B('از ۳۵۱ پ.م.', 'from 351 BCE'), 'battle', SIDON, B('شورش فنیقیه و قبرس', 'Revolt in Phoenicia and Cyprus'), B('شورشی در سوریه، فنیقیه و قبرس، به رهبری تنس شاه صیدا و با پشتیبانی نکتانبو فرعون مصر، درگرفت. ساتراپ‌های کاریه، کیلیکیه و سوریه با آن جنگیدند بی‌آنکه پیروز شوند.', 'A revolt broke out in Syria, Phoenicia and Cyprus, led by Tennes king of Sidon and backed by Nectanebo, pharaoh of Egypt. The satraps of Caria, Cilicia and Syria fought it without success.'), 'secure', ['diodorus', 'ir-a3']),
  ev('sidon', -345, B('حدود ۳۴۶/۳۴۵ پ.م.', 'c. 346/345 BCE'), 'battle', SIDON, B('ویرانی صیدا', 'Sidon destroyed'), B('شاه با سپاهی بزرگ از بابل آمد. تنس شهر را تسلیم کرد و صیداییان خود شهر را آتش زدند (دیودوروس ۱۶.۴۳–۴۵). دیگر شهرهای فنیقیه و فلسطین تسلیم شدند.', 'The king came from Babylon with a large army. Tennes betrayed the city and the Sidonians set it on fire themselves (Diodorus 16.43–45). The other towns of Phoenicia and Palestine submitted.'), 'probable', ['diodorus', 'ir-a3'], { route: [BABYLON, [40.0, 34.6], [37.2, 34.0], SIDON], ...note('دیودوروس رقم ۴۰٬۰۰۰ کشته را می‌آورد؛ تاریخ دقیق بین ۳۴۷ و ۳۴۵ محل بحث است.', 'Diodorus gives 40,000 dead; the exact date between 347 and 345 is debated.') }),
  ev('egypt', -343, B('۳۴۳/۳۴۲ پ.م.', '343/342 BCE'), 'campaign', MEMPHIS, B('بازپس گرفتن مصر', 'Egypt reconquered'), B('پلوسیون و بوباستیس در دلتا گرفته شد و مصر پس از حدود ۶۰ سال استقلال دوباره ساتراپی شد؛ فرندات ساتراپ شد و نکتانبو دوم به نوبه گریخت.', 'Pelusium and Bubastis in the Delta fell and Egypt became a satrapy again after some 60 years of independence; Pherendates was made satrap and Nectanebo II fled to Nubia.'), 'probable', ['diodorus', 'ir-a3', 'briant'], { route: [SIDON, [34.3, 31.4], PELUSIUM, BUBASTIS, MEMPHIS], ...note('ایرانیکا آغاز لشکرکشی را ۳۴۶/۳۴۵ و پایانش را ۳۴۳ می‌داند؛ بسیاری ۳۴۳/۳۴۲ را می‌پذیرند؛ دیودوروس آن را زیر ۳۵۱/۳۵۰ می‌آورد.', 'Iranica puts the start in 346/345 and the end in 343; many accept 343/342; Diodorus files it under 351/350.') }),
  ev('philip', -341, B('حدود ۳۴۳–۳۴۱ پ.م.', 'c. 343–341 BCE'), 'admin', PELLA, B('پیمان دوستی با فیلیپ', 'A friendship treaty with Philip'), B('پیمان دوستی با فیلیپ دوم بسته شد (آریان ۲.۱۴.۲)؛ جزئیاتش ناشناخته است. سفارت آتن برای کمک علیه فیلیپ دست خالی بازگشت.', 'A treaty of friendship was made with Philip II (Arrian 2.14.2); its terms are unknown. An Athenian embassy seeking help against Philip came back empty-handed.'), 'probable', ['arrian', 'ir-a3']),
  ev('perinthus', -340, B('۳۴۰ پ.م.', '340 BCE'), 'campaign', PERINTHUS, B('یاری به پرینتوس', 'Help for Perinthus'), B('وقتی فیلیپ پرینتوس را محاصره کرد، شاه به ساتراپ‌های ساحل فرمان داد مزدور و پول بفرستند (دیودوروس ۱۶.۷۵). اسکندر بعدها همین را بهانهٔ جنگ خواند.', 'When Philip besieged Perinthus, the king ordered his coastal satraps to send mercenaries and money (Diodorus 16.75). Alexander later cited this as a cause of his war.'), 'secure', ['diodorus', 'arrian', 'ir-a3'], { route: [DASCYLIUM, PERINTHUS] }),
  ev('death', -338, B('۳۳۸ پ.م.', '338 BCE'), 'admin', PERSEPOLIS, B('مسموم به دست بگوآس', 'Poisoned by Bagoas'), B('بگوآس، هزاربد مصری‌تبار، شاه را مسموم کرد و بیشتر پسرانش را کشت؛ کوچک‌ترین، ارشک (ارسس)، را بر تخت نشاند (دیودوروس ۱۷.۵.۳–۴).', 'Bagoas, the Egyptian-born chiliarch, poisoned the king and killed most of his sons, putting the youngest, Arses, on the throne (Diodorus 17.5.3–4).'), 'probable', ['diodorus', 'ir-a3'], note('روایت تنها از منابع یونانی است و مسموم شدن را نمی‌توان جداگانه سنجید.', 'The account is only in Greek sources; the poisoning cannot be checked independently.')),
]

const campaign = [
  ev('cadusii', -358, B('۳۵۸', '358'), 'battle', CADUSIA, B('کادوسیان', 'The Cadusii'), B('نخستین جنگ پادشاهی، در کوه‌های جنوب‌غربی کاسپین (یوستینوس ۱۰.۳.۲).', 'The first war of the reign, in the mountains south-west of the Caspian (Justin 10.3.2).'), 'probable', ['justin', 'ir-a3'], { route: [SUSA, [48.5, 34.8], CADUSIA] }),
  ev('artabazus', -352, B('حدود ۳۵۲', 'c. 352'), 'battle', DASCYLIUM, B('ارتباز به مقدونیه می‌گریزد', 'Artabazus flees to Macedon'), B('ساتراپ شورشی فروگیه شکست خورد و نزد فیلیپ رفت.', 'The rebel satrap of Phrygia was beaten and went to Philip.'), 'probable', ['diodorus', 'ir-a3'], { route: [DASCYLIUM, [25.5, 40.6], PELLA] }),
  ev('tennes', -351, B('۳۵۱', '351'), 'battle', SIDON, B('شورش تنس', 'Tennes’ revolt'), B('صیدا، فنیقیه و قبرس، با پشتیبانی مصر، شوریدند.', 'Sidon, Phoenicia and Cyprus revolted with Egyptian backing.'), 'secure', ['diodorus', 'ir-a3'], { fleet: [MEMPHIS, [32.6, 31.6], SIDON, CYPRUS] }),
  ev('march', -346, B('۳۴۶', '346'), 'campaign', TRIPOLIS, B('شاه از بابل می‌آید', 'The king marches from Babylon'), B('اردشیر خود با سپاهی بزرگ از بابل به سوریه آمد؛ تب، آرگوس و شهرهای یونانی آسیا سرباز فرستادند (دیودوروس ۱۶.۴۴).', 'Artaxerxes led a large army from Babylon to Syria himself; Thebes, Argos and the Greek cities of Asia sent troops (Diodorus 16.44).'), 'probable', ['diodorus'], { route: [BABYLON, [40.0, 34.6], [37.2, 34.4], TRIPOLIS] }),
  ev('sidon', -345, B('۳۴۵', '345'), 'battle', SIDON, B('صیدا می‌سوزد', 'Sidon burns'), B('تنس شهر را تسلیم کرد؛ صیداییان کشتی‌هایشان را سوزاندند و خود را با خانه‌هایشان در آتش افکندند (دیودوروس ۱۶.۴۵).', 'Tennes handed the city over; the Sidonians burned their ships and perished with their houses in the fire (Diodorus 16.45).'), 'disputed', ['diodorus'], { route: [TRIPOLIS, SIDON], ...note('ابعاد ویرانی و شمار کشتگان (۴۰٬۰۰۰) را تنها دیودوروس می‌گوید.', 'The scale of destruction and the 40,000 dead rest on Diodorus alone.') }),
  ev('pelusium', -343, B('۳۴۳', '343'), 'battle', PELUSIUM, B('پلوسیون', 'Pelusium'), B('پادگان یونانی پلوسیون با شرط امان تسلیم شد (دیودوروس ۱۶.۴۹).', 'The Greek garrison of Pelusium surrendered on terms (Diodorus 16.49).'), 'probable', ['diodorus'], { route: [SIDON, [34.3, 31.4], PELUSIUM] }),
  ev('bubastis', -343, B('۳۴۳', '343'), 'battle', BUBASTIS, B('منتور و بگوآس در بوباستیس', 'Mentor and Bagoas at Bubastis'), B('منتور رودسی و بگوآس با وعدهٔ امان شهرهای دلتا را یکی پس از دیگری گرفتند (دیودوروس ۱۶.۴۹–۵۰).', 'Mentor of Rhodes and Bagoas took the Delta towns one by one with promises of safety (Diodorus 16.49–50).'), 'probable', ['diodorus'], { route: [PELUSIUM, BUBASTIS] }),
  ev('nubia', -343, B('۳۴۳/۳۴۲', '343/342'), 'campaign', NUBIA, B('نکتانبو به نوبه می‌گریزد', 'Nectanebo flees to Nubia'), B('نکتانبو دوم، واپسین فرعون بومی، به جنوب گریخت؛ مصر دوباره ساتراپی شد.', 'Nectanebo II, the last native pharaoh, fled south; Egypt was a satrapy again.'), 'probable', ['diodorus', 'ir-a3'], { route: [MEMPHIS, [31.0, 27.0], [32.9, 24.1], NUBIA] }),
  ev('perinthus', -340, B('۳۴۰', '340'), 'campaign', PERINTHUS, B('پرینتوس', 'Perinthus'), B('ساتراپ‌های ساحل به پرینتوس در برابر فیلیپ مزدور و پول فرستادند.', 'The coastal satraps sent mercenaries and money to Perinthus against Philip.'), 'secure', ['diodorus', 'arrian'], { fleet: [DASCYLIUM, [27.6, 40.6], PERINTHUS] }),
]

const dossier: DossierSection[] = [
  sec('life', 'زندگی به ترتیب', 'A life in order',
    [['اخوس، پسر اردشیر دوم و استاتیرا، حدود ۳۶۱ در لشکرکشی به مصر شرکت کرد و تسلیم فرعون تاخوس را گرفت. با از میان برداشتن برادرانش جانشین شد و در ۳۵۹/۳۵۸ با نام اردشیر شاه شد. با کادوسیان جنگید، ساتراپ‌های شورشی غرب را رام کرد، شورش فنیقیه را با ویرانی صیدا پایان داد و در ۳۴۳/۳۴۲ مصر را پس از حدود شصت سال پس گرفت. در ۳۳۸ به دست بگوآس مسموم شد.'], ['Ochus, son of Artaxerxes II and Stateira, took part c. 361 in a campaign against Egypt and received the surrender of Pharaoh Tachos. He removed his brothers to secure the succession and became king as Artaxerxes in 359/358. He fought the Cadusii, brought the rebel western satraps to heel, ended the Phoenician revolt with the destruction of Sidon and in 343/342 recovered Egypt after some sixty years. In 338 he was poisoned by Bagoas.']],
    [['ایرانیکا او را پرانرژی، زیرک و استوار می‌خواند که «امپراتوری کهن داریوش را زنده کرد»؛ منابع یونانی او را بی‌رحم و خشن، اما داوری دادگر هم می‌دانند (دیودوروس ۱۶.۴۹.۶).'], ['Iranica calls him energetic, crafty and strong-minded, a king who “revived the old empire of Darius”; Greek sources call him cruel and violent, but also a fair judge (Diodorus 16.49.6).']],
    [['بازسازی قدرت مرکزی با زور ممکن است، اما وقتی همه چیز به یک تن بسته باشد، با مرگ او همه چیز فرو می‌ریزد.'], ['Central power can be rebuilt by force, but when everything hangs on one man, everything falls with his death.']],
    ['ir-a3', 'diodorus', 'justin'], { photos: ['tomb-a3'] }),
  sec('name', 'نام: اخوس و اردشیر', 'Name: Ochus and Artaxerxes',
    [['نام شخصی‌اش اخوس است، در بابلی Umakuš، همان نام داریوش دوم؛ اردشیر نام شاهی بود. یونانیان او را بیشتر «اخوس» می‌خوانند.'], ['His personal name was Ochus, Babylonian Umakuš, the same as Darius II’s; Artaxerxes was his throne name. Greek writers mostly call him Ochus.']],
    [['لقب ستایشی یا نکوهشی مشهوری از دوران خودش ندارد؛ آنچه هست، داوری‌های پسین دربارهٔ خشونت اوست.'], ['No well-known contemporary epithet, of praise or blame, is attested; what survives are later verdicts on his violence.']],
    [['جایی که منبع نیست، لقب ساختن نوعی جعل است.'], ['Where there is no source, inventing an epithet is a kind of forgery.']],
    ['ir-a3']),
  sec('satraps', 'پایان شورش ساتراپ‌ها: مزدوران را مرخص کنید', 'Ending the Satraps’ Revolt: dismiss the mercenaries',
    [['اردشیر سوم به ساتراپ‌های غرب فرمان داد مزدوران یونانی خود را مرخص کنند (حاشیه‌نویسی بر دموستنس ۴.۱۹). اورونتس رام شد؛ ارتباز، که خارس آتنی یاری‌اش کرده بود، به مقدونیه گریخت. شاه با تهدید جنگ آتن را واداشت از ارتباز دست بکشد. کار نظم‌دادن را بیشتر سرداران، به‌ویژه منتور رودسی، انجام دادند.'], ['Artaxerxes III ordered the western satraps to dismiss their Greek mercenaries (scholium on Demosthenes 4.19). Orontes submitted; Artabazus, helped by the Athenian Chares, fled to Macedon. By threat of war the king made Athens drop Artabazus. The actual restoration of order was done by generals, above all Mentor of Rhodes.']],
    [['فرمان برچیدن مزدوران حمله به پایهٔ قدرت ساتراپ‌ها بود: سپاه خصوصی. اما خود شاه هم با سرداران و مزدوران یونانی پیروز شد؛ وابستگی به مزدور از میان نرفت، فقط به مرکز منتقل شد.'], ['Ordering the mercenaries dismissed struck at the satraps’ power base, their private armies. Yet the king too won with Greek generals and mercenaries; dependence on hired soldiers did not end, it moved to the centre.']],
    [['انحصار زور در دست حکومت اگر به قانون بسته نباشد، فقط جای خطر را عوض می‌کند.'], ['A state monopoly of force, unless bound by law, only moves the danger.']],
    ['diodorus', 'ir-a3', 'briant']),
  sec('sidon', 'صیدا: شورش، خیانت و آتش', 'Sidon: revolt, betrayal and fire',
    [['در ۳۵۱ سوریه، فنیقیه و قبرس به رهبری تنس، شاه صیدا، و با پشتیبانی نکتانبو شوریدند. به گفتهٔ دیودوروس، سبب شورش ستم ساتراپ‌ها و فرماندهان ایرانی در صیدا بود. ساتراپ‌های همسایه کاری از پیش نبردند؛ شاه خود از بابل آمد. تنس شهر را تسلیم کرد و صیداییان، که کشتی‌هایشان را پیش‌تر سوزانده بودند تا کسی نگریزد، شهر را با خود آتش زدند. شاه سپس تنس را هم کشت.'], ['In 351 Syria, Phoenicia and Cyprus revolted under Tennes, king of Sidon, with Nectanebo’s support. Diodorus says the cause was the arrogance of the Persian satraps and commanders at Sidon. The neighbouring satraps achieved nothing; the king came from Babylon himself. Tennes betrayed the city and the Sidonians, who had earlier burned their ships so that no one could flee, set the city ablaze with themselves inside. The king then had Tennes killed too.']],
    [['روایت دیودوروس دراماتیک است و رقم‌هایش اغراق‌آمیز است، اما الگو روشن است: شهری ثروتمند که بار مالیات و ستم را پذیرفته بود، شورید، و نابودی‌اش هشداری برای دیگران شد.'], ['Diodorus’ account is dramatic and his figures exaggerated, but the pattern is clear: a rich city that had borne heavy dues and abuse revolted, and its destruction was a warning to others.']],
    [['حکومتی که شهرهای پررونق را با ستم کارگزارانش به شورش وامی‌دارد و سپس آن‌ها را نابود می‌کند، سرمایهٔ خود را می‌سوزاند.'], ['A government whose officials drive thriving cities to revolt, and which then destroys them, burns its own capital.']],
    ['diodorus', 'ir-a3']),
  sec('egypt', 'بازپس گرفتن مصر', 'The reconquest of Egypt',
    [['پس از شکستی پیشین، شاه خود با سپاهی بزرگ به مصر لشکر کشید. پلوسیون و بوباستیس گرفته شد و مصر پس از حدود شصت سال دوباره ساتراپی شد؛ فرندات ساتراپ شد و نکتانبو دوم به نوبه گریخت. ایرانیان بسیار غارت کردند؛ دیودوروس می‌گوید بگوآس اسناد کهن پرستشگاه‌ها را برداشت و به کاهنان به بهای گزاف بازفروخت (۱۶.۵۱.۲).'], ['After an earlier failure, the king led a large army to Egypt in person. Pelusium and Bubastis fell and Egypt was a satrapy again after some sixty years; Pherendates was made satrap and Nectanebo II fled to Nubia. The Persians plundered widely; Diodorus says Bagoas carried off the ancient temple records and sold them back to the priests for huge sums (16.51.2).']],
    [['داستان آیلیان که شاه گاو آپیس را کشت و مصریان او را «خر» خواندند (۴.۸)، روایت خصمانهٔ مصری است و نمی‌توان آن را سند گرفت. اما غارت و بازفروش اسناد نشان می‌دهد که فتح دوباره بر چه پایه‌ای بود: گرفتن، نه نگه داشتن.'], ['Aelian’s story that the king killed the Apis bull and the Egyptians called him “the ass” (4.8) is hostile Egyptian tradition and cannot be taken as evidence. But the plunder and the resale of records show what the reconquest rested on: taking, not keeping.']],
    [['وقتی فاتح، اسناد مالکیت و حافظهٔ یک جامعه را گروگان می‌گیرد و به خودشان می‌فروشد، فرمانروایی را به باج‌گیری بدل کرده است.'], ['When a conqueror holds a society’s records and memory hostage and sells them back, rule has become extortion.']],
    ['diodorus', 'ir-a3', 'briant'], { photos: ['tomb-a3-relief'] }),
  sec('greeks', 'یونانیان، فیلیپ و پرینتوس', 'The Greeks, Philip and Perinthus',
    [['اردشیر دوستی آتن، اسپارت و مقدونیه را می‌خواست. حدود ۳۵۱ آتن و اسپارت را به جنگ مصر خواند؛ هر دو نپذیرفتند اما دوستی‌شان را اعلام کردند؛ تب و آرگوس سرباز فرستادند. با فیلیپ دوم پیمان دوستی بست. اما وقتی فیلیپ در ۳۴۰ پرینتوس را محاصره کرد، شاه به ساتراپ‌هایش فرمان داد به شهر یاری دهند. اسکندر بعدها در نامه‌ای به داریوش سوم همین را بهانه آورد.'], ['Artaxerxes sought the friendship of Athens, Sparta and Macedon. About 351 he invited Athens and Sparta to join his Egyptian war; both declined but professed friendship; Thebes and Argos sent troops. He made a treaty of friendship with Philip II. But when Philip besieged Perinthus in 340, the king ordered his satraps to help the city. Alexander later cited this in a letter to Darius III.']],
    [['آریان متن نامهٔ اسکندر را می‌آورد، اما بدیان یادآوری می‌کند که اسنادی که منابع یونانی نقل می‌کنند معمولاً ساختگی‌اند؛ نامه بیش از سند، استدلال تبلیغاتی اسکندر را نشان می‌دهد.'], ['Arrian gives the text of Alexander’s letter, but Badian warns that documents quoted in the Greek sources are usually fictitious; the letter shows Alexander’s propaganda case more than a record.']],
    [['بهانهٔ جنگ همیشه پیدا می‌شود؛ مهم آن است که چه کسی روایت را می‌نویسد.'], ['A pretext for war can always be found; what matters is who writes the story.']],
    ['diodorus', 'arrian', 'ir-a3', 'ir-d3'], {
      quotes: [{ text: 'For you sent aid to the Perinthians, who were dealing unjustly with my father; and Ochus sent forces into Thrace, which was under our rule.', fa: 'زیرا شما به پرینتیان، که با پدرم به ناروا رفتار می‌کردند، یاری فرستادید؛ و اخوس به تراکیه، که زیر فرمان ما بود، سپاه فرستاد.', ref: 'Arrian, Anabasis 2.14.4–5 (Alexander’s letter to Darius), tr. E. J. Chinnock', source: 'arrian' }],
    }),
  sec('persepolis', 'کاخ تخت‌جمشید و آرامگاه', 'The Persepolis palace and tomb',
    [['اردشیر سوم در بخش جنوب‌غربی صفهٔ تخت‌جمشید کاخی ساخت که کتیبه‌اش (A3Pa) بر پلکان آمده است؛ لوحی اکدی از او در شوش نیز یافته شده. یکی از دو آرامگاه کوه رحمت در تخت‌جمشید را به او نسبت می‌دهند.'], ['Artaxerxes III built a palace on the south-western part of the Persepolis terrace, attested by his inscription A3Pa on a stairway; an Akkadian tablet of his was also found at Susa. One of the two Kuh-e Rahmat tombs at Persepolis is ascribed to him.']],
    [['از سر گرفتن ساخت‌وساز در تخت‌جمشید نشانهٔ احیای اقتدار شاهی بود.'], ['Renewed building at Persepolis was a token of revived royal authority.']],
    [['بناها گواه اقتدارند، نه گواه رضایت مردم.'], ['Buildings attest power, not the consent of the governed.']],
    ['ir-a3'], { photos: ['tomb-a3', 'tomb-a3-relief'] }),
  sec('bagoas', 'بگوآس و پایان', 'Bagoas and the end',
    [['بگوآس، هزاربد مصری‌تبار که در فتح مصر نقش داشت، به روایت دیودوروس (۱۷.۵.۳–۴) شاه را مسموم کرد و همهٔ پسرانش جز کوچک‌ترین، ارشک (ارسس)، را کشت. ارسس حدود دو سال پادشاهی کرد. بیستانس، پسر دیگری از اردشیر سوم، در ۳۳۰ به دیدار اسکندر آمد (آریان ۳.۱۹.۴).'], ['Bagoas, the Egyptian-born chiliarch who had served in the conquest of Egypt, poisoned the king according to Diodorus (17.5.3–4) and killed all his sons except the youngest, Arses, who reigned about two years. Bisthanes, another son of Artaxerxes III, came to meet Alexander in 330 (Arrian 3.19.4).']],
    [['ایرانیکا مرگ زودهنگام شاه را بدبختی بزرگی برای پادشاهی ایران می‌داند: چهار سال بعد اسکندر به آسیا آمد.'], ['Iranica judges the king’s early death a serious misfortune for the Persian kingdom: four years later Alexander crossed into Asia.']],
    [['قدرتی که بر ترس بنا شود، در دست نزدیک‌ترین درباری‌اش آسیب‌پذیر است.'], ['Power built on fear is vulnerable to its closest courtier.']],
    ['diodorus', 'arrian', 'ir-a3', 'ir-a4']),
]

export const artaxerxesIII: FeaturedKing = {
  slug: 'artaxerxes-iii', name: { fa: 'اردشیر سوم (اخوس)', en: 'Artaxerxes III (Ochus)' }, dynastyName: ACH,
  reign: { fa: '۳۵۹/۳۵۸–۳۳۸ پ.م.', en: '359/358–338 BCE' },
  title: { fa: 'اردشیر سوم؛ صیدا، بازپس گرفتن مصر و احیای امپراتوری', en: 'Artaxerxes III: Sidon, the reconquest of Egypt and the revival of the empire' },
  lede: {
    fa: 'پسر اردشیر دوم که با کشتن برادرانش به تخت رسید، ساتراپ‌های شورشی را رام کرد، صیدا را در آتش دید و مصر را پس از حدود شصت سال پس گرفت. امپراتوری را دوباره یکپارچه کرد، اما به دست بگوآس مسموم شد، چهار سال پیش از آمدن اسکندر. لشکرکشی‌هایش را روی نقشهٔ متحرک ببینید، با شواهد، تفسیر و معنای امروز در سه لایهٔ جدا.',
    en: 'The son of Artaxerxes II who reached the throne by killing his brothers, brought the rebel satraps to heel, saw Sidon burn and recovered Egypt after some sixty years. He reunited the empire, but was poisoned by Bagoas, four years before Alexander came. Follow his campaigns on the animated map, with evidence, interpretation and modern meaning in three separate layers.',
  },
  stats: [
    { n: { fa: '۲۱', en: '21' }, l: { fa: 'سال پادشاهی', en: 'years of reign' } },
    { n: { fa: '~۶۰', en: '~60' }, l: { fa: 'سال استقلال مصر که پایان یافت', en: 'years of Egyptian independence ended' } },
    { n: { fa: '۳۴۳/۳۴۲', en: '343/342' }, l: { fa: 'بازپس گرفتن مصر', en: 'Egypt reconquered' } },
    { n: { fa: '۴', en: '4' }, l: { fa: 'سال تا آمدن اسکندر', en: 'years before Alexander' } },
  ],
  mapTitle: { fa: 'نقشهٔ متحرک: زندگی اردشیر سوم', en: 'Animated map: the life of Artaxerxes III' },
  events, span: [-359, -338],
  campaign: {
    id: 'reign',
    title: { fa: 'از کادوسیان تا مصر، گام‌به‌گام (۳۵۸–۳۴۰ پ.م.)', en: 'From the Cadusii to Egypt, step by step (358–340 BCE)' },
    intro: { fa: ['شورش ساتراپ‌ها، ویرانی صیدا، بازپس گرفتن مصر و یاری به پرینتوس. خط آبی خط‌چین راه دریایی است. بیشتر روایت از دیودوروس است و تاریخ‌هایش گاه جابه‌جاست.'], en: ['The satraps’ revolt, the destruction of Sidon, the reconquest of Egypt and help for Perinthus. The dashed blue line is a sea route. Most of the narrative is Diodorus, whose dates are sometimes displaced.'] },
    events: campaign, span: [-358, -340], view: [21.5, 21.5, 51.5, 42.5],
    places: [
      { name: B('صیدا', 'Sidon'), c: SIDON }, { name: B('بابل', 'Babylon'), c: BABYLON }, { name: B('ممفیس', 'Memphis'), c: MEMPHIS, left: true },
      { name: B('پلوسیون', 'Pelusium'), c: PELUSIUM }, { name: B('داسکولیون', 'Dascylium'), c: DASCYLIUM }, { name: B('پلا', 'Pella'), c: PELLA, left: true },
      { name: B('پرینتوس', 'Perinthus'), c: PERINTHUS }, { name: B('آتن', 'Athens'), c: ATHENS, left: true },
    ],
    clip: clipFor('artaxerxes-iii'),
  },
  shareImage: '/media/artaxerxes-iii/reign-en.png',
  dossier,
  synthesis: { title: B('جمع‌بندی: احیا با زور', 'Synthesis: revival by force'), paras: {
    fa: ['اردشیر سوم امپراتوری را که در زمان پدرش از هم می‌پاشید، دوباره یکپارچه کرد: ساتراپ‌ها رام شدند، فنیقیه تسلیم شد و مصر بازگشت. این کامیاب‌ترین پادشاهی هخامنشی پس از خشایارشا در نگه داشتن مرزها بود.', 'اما ابزار او زور، کشتار و غارت بود. شهرهای پررونق صیدا و مصر نابود یا غارت شدند، و حتی اسناد پرستشگاه‌ها گروگان گرفته شد. امپراتوری‌ای که بر ترس و نه بر امنیت جان و مال مردمانش استوار بود، با مرگ یک تن به دست درباری‌اش لرزید و چند سال بعد در برابر اسکندر فرو ریخت.'],
    en: ['Artaxerxes III reunited the empire that had been coming apart under his father: the satraps were tamed, Phoenicia submitted and Egypt returned. In holding the frontiers it was the most successful Achaemenid reign since Xerxes.', 'But his tools were force, killing and plunder. The thriving cities of Sidon and Egypt were destroyed or looted, and even the temples’ records were held to ransom. An empire resting on fear rather than on the security of its people’s lives and property shook when one man was murdered by his courtier, and a few years later collapsed before Alexander.'],
  }, sources: ['diodorus', 'ir-a3'] },
  sources: pick('diodorus', 'justin', 'arrian', 'curtius', 'plut-art', 'ir-a3', 'ir-a4', 'ir-d3', 'briant', 'kuhrt'),
  photos: photos('tomb-a3', 'tomb-a3-relief'),
  related: related(['artaxerxes-ii', 'اردشیر دوم، پدرش', 'Artaxerxes II, his father'], ['artaxerxes-iv', 'اردشیر چهارم (ارسس)، پسرش', 'Artaxerxes IV (Arses), his son'], ['darius-iii', 'داریوش سوم', 'Darius III']),
  wikipedia: 'https://en.wikipedia.org/wiki/Artaxerxes_III',
}
