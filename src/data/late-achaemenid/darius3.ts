/**
 * Darius III (r. 336–330 BCE), after E. Badian's Iranica article: there are no Persian royal texts;
 * Babylonian documents give his personal name (Artašata) and dates, and everything else comes from
 * Alexander historians written centuries later. Battle diagrams are schematic (100×60, x east, y south).
 */
import type { BattleDiagram, BattleUnit, Coord, DossierSection, FeaturedKing } from '../featured/types'
import { ACH, BABYLON, ECBATANA, MEMPHIS, PERSEPOLIS, SARDIS, SUSA, clipFor, ev, note, photos, pick, related, sec } from './common'

const B = (fa: string, en: string) => ({ fa, en })
const GRANICUS: Coord = [27.25, 40.25]
const HALICARNASSUS: Coord = [27.42, 37.04]
const GORDIUM: Coord = [31.99, 39.65]
const ISSUS: Coord = [36.2, 36.85]
const TYRE: Coord = [35.2, 33.27]
const GAZA: Coord = [34.45, 31.5]
const GAUGAMELA: Coord = [43.4, 36.6]
const ARBELA: Coord = [44.01, 36.19]
const PERSIAN_GATES: Coord = [51.7, 30.72]
const GATES_CAMP: Coord = [51.45, 30.72]
const CASPIAN_GATES: Coord = [52.6, 35.4]
const HECATOMPYLUS: Coord = [54.1, 36.05]
const HELLESPONT: Coord = [26.4, 40.2]
const ARMENIA: Coord = [44.0, 39.5]

const events = [
  ev('birth', -380, B('حدود ۳۸۰ پ.م.', 'c. 380 BCE'), 'admin', PERSEPOLIS, B('تباری مبهم', 'An obscure origin'), B('به گفتهٔ آریان (۳.۲۲.۶) هنگام مرگ حدود پنجاه سال داشت. تبارش حتی در روزگار باستان مبهم بود. دیودوروس او را پسر ارشامه و نوهٔ اوستانس، پسر داریوش دوم، می‌خواند؛ بدیان این را روایت رسمی پس از جلوس می‌داند. در اسناد بابلی نام شخصی‌اش Artašata آمده است.', 'According to Arrian (3.22.6) he was about fifty when he died. Even in antiquity his origin was obscure. Diodorus calls him a son of Arsames and grandson of Ostanes, a son of Darius II; Badian takes this as the official version adopted at his accession. Babylonian documents give his personal name as Artašata.'), 'disputed', ['arrian', 'diodorus', 'justin', 'ir-d3'], note('پیوندش با خاندان شاهی محتمل است اما نزدیک نبود؛ یوستینوس او را «کسی گمنام» می‌خواند.', 'A link to the royal house is probable but not close; Justin calls him an obscure figure.')),
  ev('cadusii', -358, B('حدود ۳۵۸ پ.م.', 'c. 358 BCE'), 'battle', [49.3, 37.6], B('نبرد تن‌به‌تن با کادوسی', 'Single combat against a Cadusian'), B('در لشکرکشی اردشیر سوم به کادوسیان، کودومانوس در نبرد تن‌به‌تن پیروز شد و به پاداش ساتراپ ارمنستان شد (یوستینوس ۱۰.۳.۳–۴؛ دیودوروس ۱۷.۶.۱).', 'On Artaxerxes III’s campaign against the Cadusii, Codomannus won a single combat and was rewarded with the satrapy of Armenia (Justin 10.3.3–4; Diodorus 17.6.1).'), 'probable', ['justin', 'diodorus', 'ir-d3'], { route: [[49.3, 37.6], ARMENIA] }),
  ev('accession', -336, B('۳۳۶ پ.م.', '336 BCE'), 'admin', SUSA, B('بگوآس او را شاه می‌کند', 'Bagoas makes him king'), B('بگوآس ارسس و پسرانش را کشت و کودومانوس را، که نام داریوش گرفت، بر تخت نشاند. داریوش زود بگوآس را از میان برداشت (دیودوروس ۱۷.۵.۶).', 'Bagoas murdered Arses and his sons and enthroned Codomannus, who took the name Darius. Darius soon eliminated Bagoas (Diodorus 17.5.6).'), 'probable', ['diodorus', 'ir-d3', 'ir-a4']),
  ev('pretenders', -336, B('حدود ۳۳۶–۳۳۵ پ.م.', 'c. 336–335 BCE'), 'battle', MEMPHIS, B('مدعیان در مصر و بابل', 'Pretenders in Egypt and Babylon'), B('شاهی بومی کوتاه‌زمانی در ممفیس بود و در فهرست شاهان اوروک، شاهی با نام بابلی پیش از داریوش آمده است. هر دو زود ناپدید شدند.', 'A native king briefly held Memphis, and in the Uruk king list a king with a Babylonian name appears just before Darius. Both soon vanish from the record.'), 'disputed', ['ir-d3'], note('گاه‌شماری و تفسیر این شورش‌ها روشن نیست (بدیان).', 'The chronology and interpretation of these revolts are unclear (Badian).')),
  ev('granicus', -334, B('بهار ۳۳۴ پ.م.', 'spring 334 BCE'), 'battle', GRANICUS, B('گرانیکوس', 'The Granicus'), B('اسکندر از هلسپونت گذشت. ساتراپ‌های آسیای کوچک با نیرویی کوچک و فرماندهی پراکنده در گرانیکوس شکست خوردند و آسیای کوچک باز شد.', 'Alexander crossed the Hellespont. The satraps of Asia Minor, with a small force under divided command, were beaten at the Granicus and Asia Minor lay open.'), 'secure', ['arrian', 'diodorus', 'ir-d3']),
  ev('memnon', -333, B('۳۳۳ پ.م.', '333 BCE'), 'campaign', [26.5, 39.2], B('ممنون و ناوگان', 'Memnon and the fleet'), B('داریوش، پس از گرفتن همسر و فرزندان ممنون رودسی به گروگان، او را «فرماندهٔ ساحل و ناوگان» کرد. ممنون جزیره‌ها را پس گرفت، اما در محاصرهٔ میتیلنه مرد.', 'After taking Memnon of Rhodes’ wife and children as hostages, Darius made him “commander of the seashore and the fleet”. Memnon recovered islands but died besieging Mytilene.'), 'secure', ['arrian', 'diodorus', 'ir-d3']),
  ev('issus', -333, B('نوامبر ۳۳۳ پ.م.', 'November 333 BCE'), 'battle', ISSUS, B('ایسوس', 'Issus'), B('داریوش با سپاهی که به سرعت گرد آورده بود از پشت سر اسکندر رسید، اما در دشت تنگ ساحلی ایسوس جنگید که سوارهٔ برترش جای گسترش نداشت. اسکندر جناح چپ ایران را شکست؛ داریوش گریخت و مادر، همسر و فرزندانش اسیر شدند.', 'Darius, with an army raised at speed, got behind Alexander, but fought on the narrow coastal plain of Issus where his superior cavalry could not deploy. Alexander broke the Persian left; Darius fled and his mother, wife and children were captured.'), 'secure', ['arrian', 'curtius', 'diodorus', 'ir-d3'], { route: [BABYLON, [38.5, 36.4], [36.7, 37.0], ISSUS] }),
  ev('letters', -332, B('۳۳۳–۳۳۲ پ.م.', '333–332 BCE'), 'admin', TYRE, B('گفت‌وگو برای صلح', 'Peace negotiations'), B('داریوش، در حالی که صور یک سال در برابر اسکندر ایستاد، برای صلح پیشنهاد واگذاری سرزمین، فدیهٔ خانواده و پیوند زناشویی داد. اسکندر همه را رد کرد و خواست داریوش او را برتر بشناسد.', 'While Tyre held out against Alexander for nearly a year, Darius offered territory, a ransom for his family and a marriage alliance. Alexander rejected all terms and demanded that Darius recognise him as his superior.'), 'disputed', ['arrian', 'curtius', 'ir-d3'], note('بدیان: نامه‌هایی که منابع یونانی نقل می‌کنند «طبق معمول ساختگی»اند؛ جزئیات پیشنهادها بازیافتنی نیست.', 'Badian: the letters quoted in Greek sources are “as usual fictitious”; the details of the offers cannot be recovered.')),
  ev('gaugamela', -331, B('۱ اکتبر ۳۳۱ پ.م.', '1 October 331 BCE'), 'battle', GAUGAMELA, B('گوگمل', 'Gaugamela'), B('داریوش در دشتی هموارشده نزدیک گوگمل، شمال اربیل، با سوارهٔ برتر، گردونه‌های داس‌دار و فیل جنگید. اسکندر از شکافی در مرکز به سوی داریوش تاخت؛ داریوش دوباره گریخت و سپاه بزرگ از هم پاشید.', 'Darius fought on a levelled plain near Gaugamela, north of Arbela, with superior cavalry, scythed chariots and elephants. Alexander charged through a gap at Darius in the centre; Darius fled again and the grand army fell apart.'), 'secure', ['arrian', 'curtius', 'diodorus', 'diaries', 'ir-d3']),
  ev('ecbatana', -331, B('پاییز ۳۳۱ پ.م.', 'autumn 331 BCE'), 'admin', ECBATANA, B('گریز به هگمتانه', 'Flight to Ecbatana'), B('داریوش به هگمتانه رفت، به امید آنکه اسکندر را به دنبال خود بکشد یا وقت بخرد. اسکندر بابل، شوش و تخت‌جمشید را گرفت.', 'Darius went to Ecbatana, hoping to draw Alexander after him or to gain time. Alexander took Babylon, Susa and Persepolis.'), 'secure', ['arrian', 'ir-d3'], { route: [GAUGAMELA, ARBELA, [45.5, 35.5], ECBATANA] }),
  ev('death', -330, B('ژوئیهٔ ۳۳۰ پ.م.', 'July 330 BCE'), 'admin', HECATOMPYLUS, B('در زنجیر زرین، کشته به دست یاران', 'In golden fetters, killed by his own men'), B('با نزدیک شدن اسکندر، داریوش به شرق رفت. بسوس، ساتراپ باختر، و نبرزن هزاربد او را با زنجیر زرین بستند و نزدیک هکاتوم‌پولوس، پیش از رسیدن اسکندر، با ضربهٔ خنجر رها کردند. اسکندر پیکرش را برای خاکسپاری «میان آرامگاه‌های شاهی» فرستاد (آریان ۳.۲۱–۲۲).', 'As Alexander approached, Darius moved east. Bessus, satrap of Bactria, and the chiliarch Nabarzanes bound him in golden fetters and, near Hecatompylus, stabbed him and left him before Alexander arrived. Alexander sent his body to be buried “among the royal tombs” (Arrian 3.21–22).'), 'probable', ['arrian', 'curtius', 'ir-d3'], { route: [ECBATANA, [51.4, 35.6], CASPIAN_GATES, HECATOMPYLUS], ...note('گزارش روزهای پایانی بر شاهدان نامطمئن تکیه دارد: مزدوران یونانی وفادار و اشراف ایرانی که بعدها به اسکندر پیوستند (بدیان). سخنرانی واپسین داریوش افسانه است.', 'The account of the last days rests on unreliable witnesses: loyal Greek mercenaries and Persian nobles who later joined Alexander (Badian). Darius’ dying speech is fiction.') }),
]

const campaign = [
  ev('hellespont', -334, B('بهار ۳۳۴', 'spring 334'), 'campaign', HELLESPONT, B('گذر از هلسپونت', 'Crossing the Hellespont'), B('اسکندر با حدود ۳۵ هزار تن به آسیا آمد.', 'Alexander crossed into Asia with some 35,000 men.'), 'probable', ['arrian', 'diodorus'], { route: [[23.0, 40.6], [25.5, 40.7], HELLESPONT], ...note('شمار سپاه در منابع از ۳۰ تا ۴۸ هزار تفاوت دارد.', 'Army figures in the sources range from 30,000 to 48,000.') }),
  ev('granicus', -334, B('بهار ۳۳۴', 'spring 334'), 'battle', GRANICUS, B('گرانیکوس', 'The Granicus'), B('ساتراپ‌ها با فرماندهی پراکنده شکست خوردند؛ حمله به خود اسکندر ناکام ماند.', 'The satraps, under divided command, were beaten; a strike at Alexander himself failed.'), 'secure', ['arrian', 'ir-d3'], { route: [HELLESPONT, GRANICUS] }),
  ev('sardis', -334, B('۳۳۴', '334'), 'campaign', SARDIS, B('سارد تسلیم می‌شود', 'Sardis surrenders'), B('سارد بی‌جنگ تسلیم شد (آریان ۱.۱۷).', 'Sardis surrendered without a fight (Arrian 1.17).'), 'secure', ['arrian'], { route: [GRANICUS, [27.8, 39.4], SARDIS] }),
  ev('halicarnassus', -334, B('پاییز ۳۳۴', 'autumn 334'), 'battle', HALICARNASSUS, B('هالیکارناسوس', 'Halicarnassus'), B('ممنون از هالیکارناسوس دفاع کرد و سپس آن را ترک کرد.', 'Memnon defended Halicarnassus and then abandoned it.'), 'secure', ['arrian'], { route: [SARDIS, [27.3, 37.5], HALICARNASSUS] }),
  ev('gordium', -333, B('بهار ۳۳۳', 'spring 333'), 'campaign', GORDIUM, B('گوردیون', 'Gordium'), B('اسکندر از راه لوکیه و پامفولیه به گوردیون رسید.', 'Alexander reached Gordium by way of Lycia and Pamphylia.'), 'secure', ['arrian'], { route: [HALICARNASSUS, [30.7, 36.9], [30.6, 38.4], GORDIUM] }),
  ev('issus', -333, B('نوامبر ۳۳۳', 'November 333'), 'battle', ISSUS, B('ایسوس', 'Issus'), B('داریوش از کوه‌های امانوس پشت سر اسکندر رسید؛ در دشت تنگ ساحلی شکست خورد و خانواده‌اش اسیر شد.', 'Darius came over the Amanus behind Alexander, was beaten on the narrow coastal plain and lost his family as captives.'), 'secure', ['arrian', 'curtius', 'ir-d3'], { route: [GORDIUM, [33.0, 37.6], [34.9, 36.92], ISSUS] }),
  ev('tyre', -332, B('ژانویه–اوت ۳۳۲', 'January–August 332'), 'battle', TYRE, B('محاصرهٔ صور', 'The siege of Tyre'), B('صور حدود هفت ماه ایستادگی کرد و با سدی که اسکندر ساخت گرفته شد.', 'Tyre held out for some seven months and fell to the mole Alexander built.'), 'secure', ['arrian', 'diodorus'], { route: [ISSUS, [35.8, 35.0], TYRE] }),
  ev('egypt', -331, B('۳۳۲–۳۳۱', '332–331'), 'campaign', MEMPHIS, B('غزه و مصر', 'Gaza and Egypt'), B('پس از محاصرهٔ غزه، ساتراپ مصر بی‌جنگ تسلیم شد.', 'After the siege of Gaza, the satrap of Egypt surrendered without a fight.'), 'secure', ['arrian'], { route: [TYRE, GAZA, [32.55, 31.04], MEMPHIS] }),
  ev('gaugamela', -331, B('۱ اکتبر ۳۳۱', '1 October 331'), 'battle', GAUGAMELA, B('گوگمل', 'Gaugamela'), B('اسکندر از فرات و دجله گذشت. داریوش در گوگمل دوباره شکست خورد و گریخت.', 'Alexander crossed the Euphrates and the Tigris. Darius was beaten again at Gaugamela and fled.'), 'secure', ['arrian', 'diaries', 'ir-d3'], { route: [MEMPHIS, [34.4, 31.6], [36.2, 34.0], [38.25, 35.95], [41.0, 36.6], GAUGAMELA] }),
  ev('babylon', -331, B('اکتبر ۳۳۱', 'October 331'), 'admin', BABYLON, B('بابل و شوش', 'Babylon and Susa'), B('بابل و سپس شوش بی‌جنگ گشوده شدند؛ گزارش نجومی بابلی ورود اسکندر به بابل را ثبت کرده است.', 'Babylon and then Susa opened without a fight; a Babylonian astronomical diary records Alexander’s entry into Babylon.'), 'probable', ['diaries', 'arrian', 'ir-d3'], { route: [GAUGAMELA, ARBELA, [44.4, 34.5], BABYLON, SUSA] }),
  ev('gates-repulse', -330, B('زمستان ۳۳۰ (شاید ژانویه)', 'winter 330 (perhaps January)'), 'battle', PERSIAN_GATES, B('دروازه‌های پارس: اسکندر عقب رانده می‌شود', 'The Persian Gates: Alexander is driven back'), B('اریوبرزن، ساتراپ پارس، تنگه را با دیوار بست. مقدونیان وارد تنگه شدند و از بالای کوه زیر باران سنگ و تیر رفتند. اسکندر ناچار عقب نشست. این تنها شکست ثبت‌شدهٔ او به دست ایرانیان است.', 'Ariobarzanes, satrap of Persis, walled off the gorge. The Macedonians entered and were caught under stones and missiles from the heights. Alexander had to fall back: his only recorded defeat at Persian hands.'), 'probable', ['arrian', 'curtius', 'diodorus', 'ir-ariobarzanes'], { route: [SUSA, [50.5, 31.0], GATES_CAMP, PERSIAN_GATES], ...note('جای گذرگاه محل بحث است: استاین آن را در تنگ خاص می‌دانست؛ اسپک و لندرینگ در تنگ میران، شمال‌شرق یاسوج.', 'The site is debated: Stein put it at Tang-e Khas; Speck and Lendering in the Tang-e Meyran, north-east of Yasuj.') }),
  ev('gates-turned', -330, B('چند روز بعد', 'a few days later'), 'battle', PERSIAN_GATES, B('راه کوهستانی و حمله از پشت', 'The mountain path and the attack from behind'), B('اسیرانی راهی کوهستانی نشان دادند. اسکندر کراتروس را در اردوگاه گذاشت و شبانه از میان برف، گذرگاه را دور زد. سپیده‌دم از پشت و از روبه‌رو با هم حمله شد و مدافعان در هم شکستند.', 'Prisoners showed a mountain path. Alexander left Craterus in camp and by night, through snow, turned the pass. At dawn he attacked from behind while Craterus attacked from the front, and the defenders broke.'), 'probable', ['arrian', 'curtius', 'diodorus', 'ir-ariobarzanes'], { route: [GATES_CAMP, [51.5, 30.86], [51.78, 30.85], [51.82, 30.74], PERSIAN_GATES], ...note('راهنما در آریان «اسیران» است؛ در دیودوروس و کورتیوس اسیری لوکیایی که سال‌ها چوپان بود. داستان یادآور افیالتس در ترموپیل است.', 'In Arrian the guides are “prisoners”; in Diodorus and Curtius a Lycian captive who had long been a herdsman. The story echoes Ephialtes at Thermopylae.') }),
  ev('persepolis', -330, B('ژانویه–مه ۳۳۰', 'January–May 330'), 'battle', PERSEPOLIS, B('تخت‌جمشید می‌سوزد', 'Persepolis burns'), B('اسکندر شهر پایین را غارت کرد، چهار ماه ماند و در مه صفه و کاخ‌ها را سوزاند.', 'Alexander sacked the lower city, stayed four months and in May burned the terrace and palaces.'), 'probable', ['arrian', 'diodorus', 'curtius', 'ir-d3'], { route: [PERSIAN_GATES, [52.3, 30.3], PERSEPOLIS], ...note('انگیزهٔ آتش‌سوزی (انتقام خشایارشا یا مستی) محل بحث است.', 'The motive for the fire (revenge for Xerxes, or a drunken revel) is debated.') }),
  ev('pursuit', -330, B('ژوئیهٔ ۳۳۰', 'July 330'), 'campaign', HECATOMPYLUS, B('تعقیب و مرگ داریوش', 'The pursuit and Darius’ death'), B('اسکندر از هگمتانه و دروازه‌های کاسپین تاخت، اما داریوش را کشته یافت.', 'Alexander drove on through Ecbatana and the Caspian Gates but found Darius dead.'), 'probable', ['arrian', 'ir-d3'], { route: [PERSEPOLIS, [51.5, 32.5], ECBATANA, [51.4, 35.6], CASPIAN_GATES, HECATOMPYLUS] }),
]

const P = (id: string, fa: string, en: string, at: [number, number]): BattleUnit => ({ id, side: 'persian', kind: 'army', label: { fa, en }, at })
const M = (id: string, fa: string, en: string, at: [number, number]): BattleUnit => ({ id, side: 'greek', kind: 'army', label: { fa, en }, at })

const issus: BattleDiagram = {
  id: 'issus',
  title: { fa: 'ایسوس، گام‌به‌گام (طرح‌وار)', en: 'Issus, step by step (schematic)' },
  when: { fa: 'نوامبر ۳۳۳ پ.م.', en: 'November 333 BCE' },
  land: ['M16 0 L100 0 L100 60 L12 60 C15 45 13 30 17 15 Z'],
  labels: [
    { at: [7, 30], text: { fa: 'خلیج ایسوس', en: 'Gulf of Issus' }, tone: 'sea' },
    { at: [55, 30], text: { fa: 'رود پیناروس', en: 'River Pinarus' } },
    { at: [92, 30], text: { fa: 'کوه‌های امانوس', en: 'Amanus mts' } },
  ],
  phases: [
    {
      id: 'deploy', title: { fa: 'آرایش: دو سوی پیناروس', en: 'Deployment: either side of the Pinarus' },
      body: { fa: 'داریوش در شمال رود ایستاد: سوارهٔ سنگین در جناح راست کنار دریا، مزدوران یونانی در مرکز و خود شاه پشت آنان. اسکندر از جنوب آمد: پارمنیون در چپ کنار دریا، اسکندر با سواران همراه در راست.', en: 'Darius stood north of the river: heavy cavalry on his right by the sea, Greek mercenaries in the centre, the king behind them. Alexander came from the south: Parmenio on the left by the sea, Alexander with the Companion cavalry on the right.' },
      units: [P('pcav', 'سوارهٔ ایران', 'Persian cavalry', [24, 22]), P('merc', 'مزدوران یونانی', 'Greek mercenaries', [45, 22]), P('king', 'داریوش', 'Darius', [50, 14]), P('pleft', 'پیادهٔ جناح چپ', 'Persian left', [72, 22]), M('parm', 'پارمنیون', 'Parmenio', [26, 40]), M('phal', 'فالانژ', 'Phalanx', [48, 40]), M('alex', 'اسکندر و همراهان', 'Alexander & Companions', [70, 40])],
      certainty: 'probable', certaintyNote: { fa: 'کدام رود امروزی پیناروس است و شمار سپاه ایران، هر دو محل بحث است؛ ارقام باستانی بسیار اغراق‌آمیزند.', en: 'Which modern stream is the Pinarus, and the size of the Persian army, are both debated; the ancient figures are greatly exaggerated.' },
      sources: ['arrian', 'curtius', 'ir-d3'],
    },
    {
      id: 'charge', title: { fa: 'یورش اسکندر در راست؛ فشار سوارهٔ ایران در کنار دریا', en: 'Alexander charges on the right; Persian cavalry presses by the sea' },
      body: { fa: 'اسکندر از رود گذشت و جناح چپ ایران را شکست. در همان حال سوارهٔ ایران پارمنیون را سخت زیر فشار گذاشت و مزدوران یونانی شکافی در فالانژ یافتند.', en: 'Alexander crossed the river and broke the Persian left. Meanwhile the Persian cavalry pressed Parmenio hard and the Greek mercenaries found a gap in the phalanx.' },
      units: [P('pcav', 'سوارهٔ ایران', 'Persian cavalry', [26, 33]), P('merc', 'مزدوران یونانی', 'Greek mercenaries', [46, 28]), P('king', 'داریوش', 'Darius', [50, 14]), M('parm', 'پارمنیون', 'Parmenio', [27, 42]), M('phal', 'فالانژ', 'Phalanx', [48, 34]), M('alex', 'اسکندر و همراهان', 'Alexander & Companions', [70, 22])],
      arrows: [{ side: 'greek', path: [[70, 40], [70, 24]] }, { side: 'persian', path: [[24, 22], [26, 36]] }],
      certainty: 'probable', sources: ['arrian', 'ir-d3'],
    },
    {
      id: 'flight', title: { fa: 'اسکندر به سوی شاه می‌چرخد؛ داریوش می‌گریزد', en: 'Alexander wheels on the king; Darius flees' },
      body: { fa: 'اسکندر به سوی مرکز و داریوش چرخید. داریوش پیش از پایان نبرد گریخت و سپاه ایران از هم پاشید. بدیان می‌گوید متهم کردن او به بزدلی شتاب‌زده است: بی جانشینی شایسته، نجات خود شاه تنها امید نجات پادشاهی بود.', en: 'Alexander wheeled towards the centre and Darius. Darius escaped before the battle was over and the Persian army broke. Badian argues that the charge of cowardice is hasty: with no plausible successor, saving himself was the only hope of saving the kingdom.' },
      units: [P('king', 'داریوش', 'Darius', [55, 4]), P('merc', 'مزدوران یونانی', 'Greek mercenaries', [40, 18]), M('alex', 'اسکندر و همراهان', 'Alexander & Companions', [52, 18]), M('phal', 'فالانژ', 'Phalanx', [45, 28]), M('parm', 'پارمنیون', 'Parmenio', [27, 34])],
      arrows: [{ side: 'greek', path: [[68, 22], [54, 16]] }, { side: 'persian', path: [[50, 14], [58, 2]] }],
      certainty: 'probable', certaintyNote: { fa: 'زمان و انگیزهٔ گریز داریوش را تنها مورخان اسکندر گزارش کرده‌اند.', en: 'The timing and motive of Darius’ flight are reported only by Alexander’s historians.' },
      sources: ['arrian', 'curtius', 'ir-d3'],
    },
  ],
}

const gaugamela: BattleDiagram = {
  id: 'gaugamela',
  title: { fa: 'گوگمل، گام‌به‌گام (طرح‌وار)', en: 'Gaugamela, step by step (schematic)' },
  when: { fa: '۱ اکتبر ۳۳۱ پ.م.', en: '1 October 331 BCE' },
  land: ['M0 0 L100 0 L100 60 L0 60 Z'],
  labels: [
    { at: [50, 6], text: { fa: 'دشت هموارشده', en: 'Levelled plain' } },
    { at: [92, 6], text: { fa: 'تپه‌های جبل مقلوب', en: 'Jebel Maqlub ridge' } },
  ],
  phases: [
    {
      id: 'deploy', title: { fa: 'آرایش: سپاه ایران گسترده‌تر', en: 'Deployment: the Persian line overlaps' },
      body: { fa: 'داریوش در مرکز، با گردونه‌های داس‌دار و فیل‌ها در جلو؛ بسوس با سواران باختری در جناح چپ؛ مزایوس در راست. سپاه ایران شب را بیدار و مسلح گذرانده بود. اسکندر در راست، پارمنیون در چپ، و صف دوم برای جلوگیری از محاصره.', en: 'Darius in the centre, with scythed chariots and elephants in front; Bessus with the Bactrian cavalry on the left; Mazaeus on the right. The Persians had stood under arms all night. Alexander on the right, Parmenio on the left, and a second line against encirclement.' },
      units: [P('mazaeus', 'مزایوس', 'Mazaeus', [18, 16]), P('king', 'داریوش', 'Darius', [50, 16]), P('chariots', 'گردونه‌های داس‌دار', 'Scythed chariots', [50, 24]), P('bessus', 'بسوس', 'Bessus', [82, 16]), M('parm', 'پارمنیون', 'Parmenio', [32, 44]), M('phal', 'فالانژ', 'Phalanx', [50, 44]), M('alex', 'اسکندر و همراهان', 'Alexander & Companions', [66, 44])],
      certainty: 'probable', certaintyNote: { fa: 'ارقام سپاه ایران در منابع (تا یک میلیون) افسانه‌ای است.', en: 'The Persian army figures in the sources (up to a million) are fantastic.' },
      sources: ['arrian', 'curtius', 'ir-d3'],
    },
    {
      id: 'oblique', title: { fa: 'حرکت اسکندر به راست؛ گردونه‌ها بی‌اثر', en: 'Alexander edges right; the chariots fail' },
      body: { fa: 'اسکندر به سوی راست، بیرون از دشت هموار، حرکت کرد؛ بسوس برای جلوگیری از دور زدن، به دنبالش رفت و شکافی در چپ ایران باز شد. گردونه‌های داس‌دار در برابر پیادهٔ منضبط، چون در کوناکسا، کاری از پیش نبردند. مزایوس پارمنیون را زیر فشار گذاشت.', en: 'Alexander moved to the right, off the levelled ground; Bessus followed to stop him turning the flank, and a gap opened in the Persian left. The scythed chariots, as at Cunaxa, achieved nothing against disciplined infantry. Mazaeus pressed Parmenio.' },
      units: [P('mazaeus', 'مزایوس', 'Mazaeus', [24, 32]), P('king', 'داریوش', 'Darius', [50, 16]), P('bessus', 'بسوس', 'Bessus', [90, 26]), M('parm', 'پارمنیون', 'Parmenio', [30, 42]), M('phal', 'فالانژ', 'Phalanx', [52, 40]), M('alex', 'اسکندر و همراهان', 'Alexander & Companions', [78, 38])],
      arrows: [{ side: 'greek', path: [[66, 44], [80, 38]] }, { side: 'persian', path: [[82, 16], [92, 26]] }, { side: 'persian', path: [[50, 24], [52, 36]] }, { side: 'persian', path: [[18, 16], [26, 34]] }],
      certainty: 'probable', sources: ['arrian', 'ir-d3'],
    },
    {
      id: 'wedge', title: { fa: 'یورش به شکاف؛ گریز داریوش', en: 'The charge into the gap; Darius flees' },
      body: { fa: 'سوارهٔ ایران از شکافی در مرکز مقدونی گذشت و به اردوگاه رسید، اما اسکندر از شکاف چپ ایران مستقیم به سوی داریوش تاخت. صف شکست و داریوش دوباره گریخت؛ سپاه بزرگ از هم پاشید و دیگر هرگز گرد نیامد.', en: 'Persian cavalry poured through a gap in the Macedonian centre to the camp, but Alexander drove through the gap in the Persian left straight at Darius. The line broke and Darius fled again; the grand army disintegrated and never gathered again.' },
      units: [P('king', 'داریوش', 'Darius', [46, 4]), P('raid', 'سوارهٔ ایران در اردوگاه', 'Persian cavalry at the camp', [40, 54]), P('mazaeus', 'مزایوس', 'Mazaeus', [26, 34]), M('alex', 'اسکندر و همراهان', 'Alexander & Companions', [58, 18]), M('phal', 'فالانژ', 'Phalanx', [50, 30]), M('parm', 'پارمنیون', 'Parmenio', [30, 42])],
      arrows: [{ side: 'greek', path: [[76, 36], [60, 20]] }, { side: 'persian', path: [[50, 16], [46, 4]] }, { side: 'persian', path: [[44, 30], [40, 52]] }],
      certainty: 'probable', certaintyNote: { fa: 'منابع دربارهٔ اینکه داریوش کی گریخت و آیا پیش از جناح راستش گریخت، هم‌داستان نیستند.', en: 'The sources disagree about when Darius fled and whether he left before his right wing gave way.' },
      sources: ['arrian', 'curtius', 'diodorus', 'ir-d3'],
    },
  ],
}

const persianGates: BattleDiagram = {
  id: 'persian-gates',
  title: { fa: 'دروازه‌های پارس، گام‌به‌گام (طرح‌وار)', en: 'The Persian Gates, step by step (schematic)' },
  when: { fa: 'زمستان ۳۳۰ پ.م.', en: 'winter 330 BCE' },
  land: ['M0 0 L100 0 L100 25 C80 27 70 26 60 27 C45 28 30 26 0 25 Z', 'M0 35 C30 34 45 33 60 34 C70 35 80 34 100 35 L100 60 L0 60 Z', 'M64.6 26.6 L66.4 26.6 L66.4 33.6 L64.6 33.6 Z'],
  labels: [
    { at: [30, 12], text: { fa: 'کوه‌های پوشیده از برف', en: 'Snow-covered mountains' } },
    { at: [30, 52], text: { fa: 'کوه‌ها', en: 'Mountains' } },
    { at: [12, 31], text: { fa: 'از سوی شوش', en: 'from Susa' }, tone: 'sea' },
    { at: [86, 31], text: { fa: 'به سوی تخت‌جمشید', en: 'to Persepolis' }, tone: 'sea' },
    { at: [66, 23], text: { fa: 'دیوار', en: 'Wall' } },
  ],
  phases: [
    {
      id: 'wall', title: { fa: 'تنگه بسته می‌شود', en: 'The gorge is closed' },
      body: { fa: 'اریوبرزن تنگه را با دیواری از سنگ بست و اردوگاهش را پشت آن زد. سربازانش را روی بلندی‌های دو سوی تنگه گذاشت. اسکندر، که از راه کوهستان آمده بود، بی‌خبر وارد دره شد.', en: 'Ariobarzanes closed the gorge with a stone wall and camped behind it. He posted troops on the heights on both sides. Alexander, coming by the mountain road, marched into the valley unaware.' },
      units: [P('ario', 'اریوبرزن', 'Ariobarzanes', [70, 30]), P('north', 'تیراندازان بالای کوه', 'Troops on the heights', [52, 20]), P('south', 'سنگ‌اندازان', 'Slingers and stone-throwers', [52, 40]), M('alex', 'اسکندر', 'Alexander', [14, 30])],
      certainty: 'probable', certaintyNote: { fa: 'آریان ۴۰ هزار پیاده و ۷۰۰ سوار می‌گوید؛ کورتیوس و دیودوروس ۲۵ هزار. شهبازی همهٔ این ارقام را اغراق‌آمیز می‌داند.', en: 'Arrian gives 40,000 foot and 700 horse; Curtius and Diodorus 25,000. Shahbazi thinks all these figures inflated.' },
      sources: ['arrian', 'curtius', 'diodorus', 'ir-ariobarzanes'],
    },
    {
      id: 'repulse', title: { fa: 'حملهٔ روبه‌رو شکست می‌خورد', en: 'The frontal attack fails' },
      body: { fa: 'مقدونیان تا نزدیک دیوار پیش رفتند. از بالا سنگ، تیر و نیزه بر سرشان بارید. بسیاری کشته و زخمی شدند. اسکندر دستور عقب‌نشینی داد و حتی کشته‌هایش را جا گذاشت.', en: 'The Macedonians pushed up close to the wall. Stones, arrows and javelins rained down from above. Many were killed or wounded. Alexander ordered a retreat and even left his dead behind.' },
      units: [P('ario', 'اریوبرزن', 'Ariobarzanes', [70, 30]), P('north', 'تیراندازان بالای کوه', 'Troops on the heights', [50, 24]), P('south', 'سنگ‌اندازان', 'Slingers and stone-throwers', [50, 36]), M('alex', 'اسکندر', 'Alexander', [40, 30])],
      arrows: [{ side: 'greek', path: [[14, 30], [56, 30]] }, { side: 'persian', path: [[50, 22], [44, 29]] }, { side: 'persian', path: [[50, 38], [44, 31]] }, { side: 'greek', path: [[54, 31], [24, 31]] }],
      certainty: 'secure', certaintyNote: { fa: 'هر سه منبع اصلی این شکست را گزارش می‌کنند.', en: 'All three main sources report this repulse.' },
      sources: ['arrian', 'curtius', 'diodorus'],
    },
    {
      id: 'night', title: { fa: 'راه پنهان، شب و برف', en: 'The hidden path, night and snow' },
      body: { fa: 'اسیرانی راهی کوهستانی را نشان دادند. اسکندر کراتروس را با بخشی از سپاه در اردوگاه گذاشت و گفت آتش‌ها را روشن نگه دارد. خودش شبانه با گروهی برگزیده از کوه بالا رفت. راه سخت و پر از برف بود.', en: 'Prisoners revealed a mountain path. Alexander left Craterus with part of the army in camp, keeping the fires burning. He himself climbed by night with a picked force. The way was hard and deep in snow.' },
      units: [P('ario', 'اریوبرزن', 'Ariobarzanes', [70, 30]), P('north', 'نگهبانان', 'Pickets', [52, 22]), P('south', 'سنگ‌اندازان', 'Slingers and stone-throwers', [52, 38]), M('crat', 'کراتروس در اردوگاه', 'Craterus in camp', [18, 30]), M('alex', 'اسکندر', 'Alexander', [60, 6])],
      arrows: [{ side: 'greek', path: [[20, 28], [26, 12], [44, 5], [60, 6]] }],
      certainty: 'disputed', certaintyNote: { fa: 'آریان از «اسیران» می‌گوید؛ دیودوروس و کورتیوس از یک اسیر لوکیایی که سال‌ها در این کوه‌ها چوپانی کرده بود. لندرینگ می‌گوید داستان شبیه افیالتس در ترموپیل است.', en: 'Arrian speaks of “prisoners”; Diodorus and Curtius of a Lycian captive who had herded flocks in these mountains for years. Lendering notes the likeness to Ephialtes at Thermopylae.' },
      sources: ['arrian', 'diodorus', 'curtius', 'livius-pg'],
    },
    {
      id: 'dawn', title: { fa: 'سپیده‌دم: حمله از دو سو', en: 'Dawn: attack from two sides' },
      body: { fa: 'اسکندر نگهبانان را غافلگیر کرد و از پشت به اردوگاه ایرانیان رسید. با صدای شیپور، کراتروس هم از روبه‌رو به دیوار حمله کرد. مدافعان میان دو سپاه گیر افتادند.', en: 'Alexander surprised the pickets and came down on the Persian camp from behind. At the trumpet signal, Craterus attacked the wall from the front. The defenders were caught between two forces.' },
      units: [P('ario', 'اریوبرزن', 'Ariobarzanes', [68, 30]), P('south', 'سنگ‌اندازان', 'Slingers and stone-throwers', [58, 36]), M('alex', 'اسکندر', 'Alexander', [78, 26]), M('crat', 'کراتروس', 'Craterus', [56, 30])],
      arrows: [{ side: 'greek', path: [[60, 6], [80, 14], [78, 26]] }, { side: 'greek', path: [[18, 30], [56, 30]] }],
      certainty: 'probable', sources: ['arrian', 'curtius', 'ir-ariobarzanes'],
    },
    {
      id: 'last', title: { fa: 'ایستادگی واپسین اریوبرزن', en: 'Ariobarzanes’ last stand' },
      body: { fa: 'اریوبرزن با گروهی کوچک از حلقه بیرون زد. آریان می‌گوید او با چند سوار به کوه‌ها گریخت. کورتیوس می‌گوید او به سوی تخت‌جمشید رفت، اما نگهبانان شهر دروازه را به رویش بستند و او جنگید تا کشته شد.', en: 'Ariobarzanes broke out with a small band. Arrian says he escaped into the mountains with a few horsemen. Curtius says he made for Persepolis, but the city’s garrison shut the gates on him and he fought on until he was killed.' },
      units: [P('ario', 'اریوبرزن', 'Ariobarzanes', [90, 20]), M('alex', 'اسکندر', 'Alexander', [78, 31]), M('crat', 'کراتروس', 'Craterus', [60, 30])],
      arrows: [{ side: 'persian', path: [[70, 29], [80, 24], [90, 21]] }],
      certainty: 'disputed', certaintyNote: { fa: 'دو روایت از پایان او هست: گریز (آریان ۳.۱۸.۹) یا مرگ در جنگ (کورتیوس ۵.۴.۳۳–۳۴). بوسورث کورتیوس را می‌پذیرد.', en: 'Two traditions of his end: escape (Arrian 3.18.9) or death fighting (Curtius 5.4.33–34). Bosworth accepts Curtius.' },
      sources: ['arrian', 'curtius', 'bosworth1980', 'ir-ariobarzanes'],
    },
  ],
}

const dossier: DossierSection[] = [
  sec('sources', 'منابع: شاهی که تنها دشمنانش او را روایت کردند', 'Sources: a king told only by his enemies',
    [['از داریوش سوم هیچ کتیبه یا بنای شاهی ایرانی نمانده است. چند سند بابلی، از جمله فهرست شاهان اوروک و گزارشی نجومی که تاریخ گوگمل و ورود اسکندر به بابل را نشان می‌دهد، و مشاهده‌های نجومی که نام شخصی‌اش را دارد، هست. باقی از مورخان اسکندر است که سده‌ها بعد نوشتند: دیودوروس، آریان، کورتیوس، پلوتارک و یوستینوس. تنها منبع تصویری سودمند، به گفتهٔ بدیان، موزاییک اسکندر از پمپئی است.'], ['No Persian royal inscription or monument of Darius III survives. There are a few Babylonian documents, including the Uruk king list, an astronomical diary interpreted as dating Gaugamela and Alexander’s entry into Babylon, and astronomical observations that give his personal name. Everything else comes from Alexander historians writing centuries later: Diodorus, Arrian, Curtius, Plutarch and Justin. The only useful visual source, Badian says, is the Alexander Mosaic from Pompeii.']],
    [['این منابع داریوش را بیشتر به عنوان ضد قهرمانِ اسکندر ساخته‌اند. هر داوری دربارهٔ شخصیت او باید این را در نظر داشته باشد.'], ['These sources built Darius mainly as a foil to Alexander. Any verdict on his character must allow for that.']],
    [['وقتی تاریخ را تنها پیروز می‌نویسد، باید پرسید شکست‌خورده چه می‌گفت.'], ['When only the victor writes history, we must ask what the defeated would have said.']],
    ['ir-d3', 'diaries', 'arrian', 'curtius', 'diodorus'], { photos: ['mosaic'] }),
  sec('life', 'زندگی به ترتیب', 'A life in order',
    [['حدود ۳۸۰ زاده شد، با پیوندی دور با خاندان شاهی. در جنگ کادوسیان زیر فرمان اردشیر سوم در نبرد تن‌به‌تن نام آور شد و ساتراپ ارمنستان شد؛ شاید بعدها سرپرست «چاپار» شاهی شد. با استاتیرا، شاهزاده‌ای شاهی، ازدواج کرد. در ۳۳۶ بگوآس او را بر تخت نشاند و داریوش زود او را از میان برداشت. پس از گرانیکوس (۳۳۴)، ایسوس (۳۳۳) و گوگمل (۳۳۱)، در ژوئیهٔ ۳۳۰ به دست یارانش کشته شد.'], ['Born c. 380, with a distant link to the royal house. In Artaxerxes III’s Cadusian war he won fame in single combat and became satrap of Armenia; later perhaps head of the royal courier service. He married Stateira, a royal princess. In 336 Bagoas put him on the throne, and Darius soon disposed of him. After the Granicus (334), Issus (333) and Gaugamela (331) he was killed by his own companions in July 330.']],
    [['بدیان نشان می‌دهد که مشروعیت ضعیفِ او تصمیم‌هایش را شکل داد: به فرماندهان نیرومند اعتماد نداشت و فرماندهی یکپارچه در غرب نساخت.'], ['Badian shows how his weak legitimacy shaped his choices: he distrusted powerful commanders and built no unified command in the west.']],
    [['حاکمی که به مشروعیت خود اطمینان ندارد، توانمندان را از خود دور می‌کند، و بهای آن را همه می‌پردازند.'], ['A ruler unsure of his legitimacy keeps capable people at a distance, and everyone pays the price.']],
    ['ir-d3', 'justin', 'diodorus', 'arrian']),
  sec('name', 'نام: کودومانوس، Artašata، داریوش', 'Name: Codomannus, Artašata, Darius',
    [['یوستینوس (۱۰.۳) تنها منبع یونانی-رومی است که نام پیشین او را «کودومانوس» می‌آورد. اسناد بابلی نام شخصی‌اش را Ar-ta-šá-a-ta می‌نویسند، احتمالاً پارسی باستان *Artašiyāta، «شاد در ارته». داریوش نام شاهی بود که هنگام جلوس برگزید.'], ['Justin (10.3) is the only Greek or Latin source to give his earlier name, Codomannus. Babylonian documents write his personal name Ar-ta-šá-a-ta, probably Old Persian *Artašiyāta, “happy in Arta”. Darius was the throne name he took at his accession.']],
    [['انتخاب نام داریوش، پیوند با بنیان‌گذار بزرگ و ادعای مشروعیت بود.'], ['Choosing the name Darius claimed a link to the great founder, and with it legitimacy.']],
    [['نام‌ها ابزار مشروعیت‌اند؛ هر حکومت تازه گذشته‌ای برای خود برمی‌گزیند.'], ['Names are tools of legitimacy; every new regime chooses a past for itself.']],
    ['justin', 'ir-d3']),
  sec('issus', 'ایسوس: دشت تنگ و گریزِ حساب‌شده؟', 'Issus: a narrow plain and a calculated flight?',
    [['داریوش در ۳۳۴–۳۳۳ با سرعتی بی‌سابقه سپاه گرد آورد و در اکتبر ۳۳۳ از کوه‌های توروس گذشت؛ از خطای اطلاعاتی اسکندر سود برد و پشت سر او رسید. اما در دشت ساحلی ایسوس جنگید، که سوارهٔ برترش نمی‌توانست جناح چپ دشمن را دور بزند. اسکندر شاه را شکست داد؛ داریوش پیش از پایان نبرد گریخت و مادرش، همسرش و فرزندانش اسیر شدند.'], ['In 334–333 Darius raised an army with unprecedented speed and by October 333 was crossing the Taurus; exploiting a failure of Alexander’s intelligence, he appeared at his rear. But he fought on the coastal plain of Issus, where his superior cavalry could not envelop the enemy’s left. Alexander routed the king; Darius escaped before the battle was over and his mother, wife and children were captured.']],
    [['مورخان یونانی او را به بزدلی متهم کردند، در حالی که دلیری بهترین صفت ثبت‌شدهٔ اوست. بدیان می‌گوید محتمل‌تر است که او خونسردی‌اش را حفظ کرده و فهمیده بود که تنها راه نجات پادشاهی نجات خود اوست، چون جانشینی نبود که بتواند وفاداری همه را به دست آورد.'], ['Greek historians charged him with cowardice, though bravery is his best-attested quality. Badian thinks it more probable that he kept his head and understood that the only chance of saving the kingdom lay in saving himself, since there was no successor who could command allegiance.']],
    [['نظامی که همه چیز را به جان یک تن بسته است، رهبرش را ناچار می‌کند میان آبرو و بقای کشور یکی را برگزیند.'], ['A system that hangs everything on one life forces its leader to choose between honour and the country’s survival.']],
    ['arrian', 'curtius', 'diodorus', 'ir-d3']),
  sec('negotiation', 'مذاکره: برابر یا فرمانبر؟', 'Negotiation: equal or subject?',
    [['پس از ایسوس، در حالی که صور یک سال ایستادگی می‌کرد، داریوش برای صلح پیشنهاد داد: واگذاری سرزمین‌های بزرگ، شناختن اسکندر به عنوان همتا، فدیهٔ بزرگ برای خانواده و پیوند زناشویی. اسکندر همه را رد کرد و خواست داریوش او را برتر بشناسد. آریان پاسخ اسکندر را به صورت نامه می‌آورد.'], ['After Issus, while Tyre held out for a year, Darius offered peace: the cession of large territories, recognition of Alexander as an equal, a large ransom for his family and a marriage alliance. Alexander rejected everything and demanded that Darius recognise him as his superior. Arrian gives Alexander’s reply as a letter.']],
    [['بدیان هشدار می‌دهد که اسنادی که منابع یونانی نقل می‌کنند «طبق معمول ساختگی»اند. نامه را باید بیان دیدگاه اسکندر از زبان مورخ خواند، نه سند. بدیان همچنین توضیح می‌دهد چرا اسکندر نمی‌توانست بپذیرد: با صلح، داریوش آزاد می‌شد هر زمان بخواهد حمله کند.'], ['Badian warns that the documents quoted in Greek sources are “as usual fictitious”. The letter should be read as the historian’s statement of Alexander’s position, not as a record. Badian also explains why Alexander could not accept: after a peace, Darius would be free to attack when he chose.']],
    [['وقتی یک طرف خواستار فرمانبری کامل است، مذاکره دیگر مذاکره نیست.'], ['When one side demands total submission, negotiation is no longer negotiation.']],
    ['arrian', 'curtius', 'ir-d3'], {
      quotes: [{ text: 'But for the future, whenever you send to me, send to me as the king of Asia, and do not address to me your wishes as to an equal', fa: 'اما از این پس، هر گاه به من پیام می‌فرستی، به من چون شاه آسیا بفرست، و خواسته‌هایت را چون به همتا به من مگو', ref: 'Arrian, Anabasis 2.14.8 (Alexander’s letter, likely Arrian’s composition), tr. E. J. Chinnock', source: 'arrian' }],
    }),
  sec('gaugamela', 'گوگمل: زمین خودی، نتیجهٔ همان', 'Gaugamela: home ground, the same result',
    [['داریوش مزدور یونانی کافی نداشت، پس جنگ‌افزار سپاه بومی را به شیوهٔ یونانی بهبود داد. سوارهٔ برتر، فیل و گردونه‌های داس‌دار داشت و دشت گوگمل، شمال اربیل، را برای گردونه‌ها هموار کرد. اسکندر شب حمله نکرد و سپاه ایران را تا صبح مسلح و بیدار نگه داشت. در ۱ اکتبر ۳۳۱، سوارهٔ ایران در برابر پارمنیون کامیاب بود، اما اسکندر از شکاف مرکز به سوی داریوش تاخت و صف شکست.'], ['Darius lacked enough Greek mercenaries, so he improved his native troops’ equipment on the Greek model. He had superior cavalry, elephants and scythed chariots, and levelled the plain of Gaugamela, north of Arbela, for the chariots. Alexander did not attack by night and kept the Persians standing to arms until morning. On 1 October 331 the Persian cavalry succeeded against Parmenio, but Alexander charged through a gap at Darius in the centre and the line broke.']],
    [['بدیان: داریوش با تصمیم به انتظار حمله، ابتکار را از دست داد. یک گزارش نجومی بابلی تاریخ نبرد را تأیید می‌کند؛ این یکی از اندک نقاطی است که روایت یونانی با سندی غیر یونانی سنجیده می‌شود.'], ['Badian: by deciding to wait for the attack, Darius gave up the initiative. A Babylonian astronomical diary confirms the date; it is one of the few points where the Greek narrative can be checked against a non-Greek record.']],
    [['برتری شمار و ثروت بدون انضباط و انعطاف، پیروزی نمی‌آورد.'], ['Superior numbers and wealth without discipline and flexibility do not bring victory.']],
    ['arrian', 'curtius', 'diodorus', 'diaries', 'ir-d3']),
  sec('ariobarzanes', 'اریوبرزن و دروازه‌های پارس', 'Ariobarzanes and the Persian Gates',
    [[
      'پس از گوگمل، بابل و شوش بی‌جنگ تسلیم شدند. اما سر راه پارس، یعنی سرزمین اصلی هخامنشیان، یک نفر ایستاد: اریوبرزن، ساتراپ پارس. او در گوگمل هم فرماندهی بخشی از سپاه را داشت (آریان ۳.۸.۵).',
      'زمستان ۳۳۰ پ.م. اسکندر سپاهش را دو بخش کرد. پارمنیون با بار و بنه از جادهٔ هموار رفت. خود اسکندر با نیروی سبک‌تر از راه کوهستان به سوی تخت‌جمشید رفت. اریوبرزن تنگه‌ای را که «دروازه‌های پارس» نامیده می‌شد با دیواری از سنگ بست.',
      'مقدونیان بی‌خبر وارد تنگه شدند. ایرانیان از بالای کوه سنگ و تیر باراندند. اسکندر عقب نشست و حتی کشته‌هایش را جا گذاشت. این تنها شکستی است که منابع برای او در برابر ایرانیان ثبت کرده‌اند.',
      'سپس اسیرانی راهی کوهستانی نشان دادند. در دیودوروس و کورتیوس، راهنما اسیری لوکیایی است که سال‌ها در این کوه‌ها چوپانی کرده بود. اسکندر شبانه، از میان برف، گذرگاه را دور زد. سپیده‌دم از پشت حمله کرد و کراتروس از روبه‌رو. مدافعان شکستند.',
      'دربارهٔ پایان اریوبرزن دو روایت هست. آریان می‌گوید او با چند سوار به کوه‌ها گریخت. کورتیوس می‌گوید او با گروهی کوچک راه را باز کرد و به تخت‌جمشید رفت، اما نگهبانان شهر دروازه را بستند و او جنگید تا کشته شد. اسکندر چند روز بعد به تخت‌جمشید رسید.',
    ], [
      'After Gaugamela, Babylon and Susa surrendered without a fight. But on the road into Persis, the Achaemenid homeland, one man stood in the way: Ariobarzanes, satrap of Persis. He had also commanded troops at Gaugamela (Arrian 3.8.5).',
      'In the winter of 330 BCE Alexander split his army. Parmenio took the baggage by the easier road. Alexander himself took the lighter troops over the mountains towards Persepolis. Ariobarzanes closed the gorge called the “Persian Gates” with a stone wall.',
      'The Macedonians marched into the gorge unaware. The Persians showered them with stones and missiles from the heights. Alexander fell back and even left his dead behind. It is the only defeat the sources record for him at Persian hands.',
      'Then prisoners revealed a mountain path. In Diodorus and Curtius the guide is a Lycian captive who had herded flocks in these mountains for years. Alexander turned the pass by night, through snow. At dawn he attacked from behind while Craterus attacked from the front. The defenders broke.',
      'There are two accounts of Ariobarzanes’ end. Arrian says he escaped into the mountains with a few horsemen. Curtius says he cut his way out with a small band and made for Persepolis, but the garrison shut the gates and he fought on until he was killed. Alexander reached Persepolis a few days later.',
    ]],
    [[
      'نکته‌های مورد اختلاف: (۱) شمار سپاه: آریان ۴۰ هزار پیاده و ۷۰۰ سوار، کورتیوس و دیودوروس ۲۵ هزار. شهبازی در ایرانیکا می‌گوید اریوبرزن نمی‌توانست بیش از نیرویی که به گوگمل برده بود گرد آورد و شاید ۷۰۰ کل نیروی او بوده است. (۲) جای گذرگاه: استاین (۱۹۴۰) آن را در تنگ خاص می‌دانست؛ اسپک (۲۰۰۲) و لندرینگ در تنگ میران، شمال‌شرق یاسوج. (۳) هویت او: شهبازی او را پسر ارتباز می‌داند، اما این یکی‌دانستن قطعی نیست. (۴) راهنما: «اسیران» در آریان، یک چوپان لوکیایی در دیودوروس و کورتیوس.',
      'دربارهٔ مرگ او، بوسورث (۱۹۸۰) روایت کورتیوس را می‌پذیرد. برن (۱۹۷۳)، به نقل شهبازی، این نبرد را «ترموپیلی ایرانی» خوانده است که «مانند ترموپیل سقوط کرد». هِکِل (۱۹۸۰) جزئیات نبرد را در مقاله‌ای جدا بررسی کرده است.',
    ], [
      'Points in dispute: (1) Army size: Arrian gives 40,000 foot and 700 horse, Curtius and Diodorus 25,000. Shahbazi (Iranica) argues Ariobarzanes could hardly have raised more than he took to Gaugamela, and that 700 may have been his whole force. (2) The site: Stein (1940) put it at Tang-e Khas; Speck (2002) and Lendering at the Tang-e Meyran, north-east of Yasuj. (3) His identity: Shahbazi makes him a son of Artabazus, but the identification is not certain. (4) The guide: “prisoners” in Arrian, a Lycian herdsman in Diodorus and Curtius.',
      'On his death, Bosworth (1980) accepts Curtius’ version. Burn (1973), as quoted by Shahbazi, called the battle “a Persian Thermopylae and like Thermopylae it fell”. Heckel (1980) studies the battle in a separate article.',
    ]],
    [[
      'اریوبرزن برای دفاع از سرزمین خودش جنگید، نه برای غارت سرزمین دیگران. فرماندهٔ محلی که خانه و شهرش را می‌شناسد، حتی با نیروی کم، می‌تواند جلوی سپاهی بزرگ را بگیرد.',
      'آریان از قول پارمنیون می‌گوید سوزاندن تخت‌جمشید درست نبود، چون «نابود کردن آنچه اکنون دارایی خود اوست» خردمندانه نیست. پیام ساده است: جنگ دارایی مردم را نابود می‌کند، حتی وقتی پیروز آن را از آنِ خود می‌داند.',
    ], [
      'Ariobarzanes fought to defend his own land, not to plunder anyone else’s. A local commander who knows his home ground can hold up a great army even with few men.',
      'Arrian has Parmenio advise against burning Persepolis, since “it was not well to destroy what was now his own property”. The lesson is simple: war destroys people’s property, even when the victor counts it as his own.',
    ]],
    ['arrian', 'curtius', 'diodorus', 'ir-ariobarzanes', 'bosworth1980', 'heckel1980', 'stein1940', 'speck2002', 'livius-pg'], {
      photos: ['gate-site', 'yasuj-statue', 'pg-1849'],
      quotes: [
        { text: 'found that Ariobarzanes, the viceroy of Persis, with 40,000 infantry and 700 cavalry, had built a wall across the pass, and had pitched his camp there near the wall to block Alexander’s passage.', fa: '[اسکندر] دید که اریوبرزن، فرمانروای پارس، با ۴۰ هزار پیاده و ۷۰۰ سوار، دیواری در گذرگاه ساخته و اردوگاهش را کنار دیوار زده است تا راه اسکندر را ببندد.', ref: 'Arrian, Anabasis 3.18.2, tr. E. J. Chinnock', source: 'arrian' },
        { text: 'The Persians had a tremendous advantage because of the difficulty of the country, killed many and injured not a few.', fa: 'ایرانیان به خاطر سختی زمین برتری بزرگی داشتند؛ بسیاری را کشتند و شمار زیادی را زخمی کردند.', ref: 'Diodorus 17.68.2, tr. C. B. Welles (Loeb, 1963)', source: 'diodorus' },
        { text: 'but Ariobarzanes himself, with a few horsemen, escaped into the mountains.', fa: 'اما خود اریوبرزن با چند سوار به کوه‌ها گریخت.', ref: 'Arrian, Anabasis 3.18.9, tr. E. J. Chinnock', source: 'arrian' },
      ],
      folk: {
        title: { fa: 'یوتاب، خواهر اریوبرزن', en: 'Youtab, sister of Ariobarzanes' },
        story: {
          fa: ['در روایتی که امروز در ایران بسیار شنیده می‌شود، اریوبرزن خواهری به نام یوتاب داشت. می‌گویند یوتاب در کنار برادرش در دروازه‌های پارس جنگید و همراه او جان داد.'],
          en: ['In a story widely told in Iran today, Ariobarzanes had a sister named Youtab. She is said to have fought beside her brother at the Persian Gates and to have died with him.'],
        },
        origin: {
          fa: [
            'هیچ‌کدام از منابع باستانی، یعنی آریان، کورتیوس، دیودوروس، پلوتارک و یوستینوس، از خواهری برای اریوبرزن یا از زنی جنگجو در این نبرد نام نمی‌برند. پس این روایت تاریخ نیست.',
            'قدیمی‌ترین جایی که این نام را یافتیم کتاب عمومی کاوه فرخ، «سایه‌ها در صحرا» (۲۰۰۷، ص ۱۰۶)، است. او به «افسانه‌های ایرانی» اشاره می‌کند اما منبعی نمی‌آورد. شاید نام با «یوتاپا» (Iotapa) درآمیخته باشد: شاهزاده‌ای از آتروپاتن و خواهر شاهی به نام اریوبرزن دوم، که حدود سه سده بعد زندگی می‌کرد. کاسیوس دیو (۵۱.۱۶) از او یاد می‌کند. این پیوند حدس است.',
          ],
          en: [
            'None of the ancient sources, Arrian, Curtius, Diodorus, Plutarch or Justin, mentions a sister of Ariobarzanes or a woman fighting in this battle. So the story is not history.',
            'The earliest place we found the name is Kaveh Farrokh’s popular book Shadows in the Desert (2007, p. 106). He refers to “Iranian legends” but gives no source. The name may have been confused with Iotapa, a princess of Atropatene and sister of a king called Ariobarzanes II, who lived some three centuries later. Cassius Dio (51.16) mentions her. That link is a guess.',
          ],
        },
        sources: ['farrokh2007'],
      },
    }),
  sec('end', 'پایان: زنجیر زرین', 'The end: golden fetters',
    [['داریوش به هگمتانه رفت تا وقت بخرد؛ اسکندر بابل، شوش و تخت‌جمشید را گرفت و در مه ۳۳۰ کاخ‌های تخت‌جمشید را سوزاند. چون اسکندر نزدیک شد، داریوش با چند نجیب‌زاده و نیرویی کوچک به شرق رفت. بسوس و نبرزن او را با زنجیر زرین بستند و نزدیک هکاتوم‌پولوس، پیش از رسیدن اسکندر، او را زخمی رها کردند. بسوس تاج برگرفت و نام اردشیر یافت.'], ['Darius went to Ecbatana to gain time; Alexander took Babylon, Susa and Persepolis and in May 330 burned the palaces of Persepolis. As Alexander approached, Darius moved east with a few nobles and a small force. Bessus and Nabarzanes bound him in golden fetters and, near Hecatompylus, left him stabbed before Alexander arrived. Bessus took the tiara and the name Artaxerxes.']],
    [['بدیان گمان می‌زند که شتاب اسکندر برای رسیدن به داریوشِ زنده، و اصرار توطئه‌گران بر جلوگیری از آن، نشان می‌دهد داریوش آماده بود اسکندر را برتر بشناسد و به او مشروعیت دهد. این گمان است و منابع نمی‌گویند.'], ['Badian suggests that Alexander’s haste to reach Darius alive, and the conspirators’ determination to prevent it, imply that Darius was ready to acknowledge Alexander as his superior and so give him legitimacy. This is a conjecture; the sources do not say so.']],
    [['وقتی نخبگان حاکم وفاداری را با منافع خود می‌سنجند، شاه بی‌سپاه گروگان یارانش می‌شود.'], ['When a ruling elite weighs loyalty against its own interests, a king without an army becomes his companions’ hostage.']],
    ['arrian', 'curtius', 'ir-d3'], {
      photos: ['mongez'],
      quotes: [{ text: 'This king was a man pre-eminently effeminate and lacking in self-reliance in military enterprises; but as to civil matters he never exhibited any disposition to indulge in arbitrary conduct; nor indeed was it in his power to exhibit it.', fa: 'این شاه مردی به‌غایت نرم‌خو و در کارهای جنگی بی‌اعتماد به خود بود؛ اما در امور مدنی هرگز گرایشی به خودکامگی نشان نداد؛ و در واقع توان نشان دادنش را هم نداشت.', ref: 'Arrian, Anabasis 3.22.2, tr. E. J. Chinnock', source: 'arrian' }],
    }),
  sec('perspective', 'دید ایرانی در برابر مورخان اسکندر', 'Persian perspective vs the Alexander historians',
    [['مورخان اسکندر، به‌ویژه آریان، داریوش را بزدل و «نرم‌خو» می‌خوانند و او را در برابر قهرمانی اسکندر قرار می‌دهند. همان آریان اما می‌پذیرد که او در امور مدنی خودکامه نبود. کورتیوس گاه از منابعی همدل‌تر با داریوش بهره می‌گیرد. بدیان دلیری را بهترین صفت ثبت‌شدهٔ او می‌داند و نشان می‌دهد که بسیاری از تصمیم‌هایش، از گریز در ایسوس تا مذاکره، در شرایطِ مشروعیت ضعیف و نبود جانشین منطقی بود.'], ['The Alexander historians, Arrian especially, call Darius cowardly and “effeminate” and set him against Alexander’s heroism. Yet Arrian admits he was not arbitrary in civil matters. Curtius sometimes draws on sources more sympathetic to Darius. Badian takes bravery as his best-attested quality and shows that many of his choices, from the flight at Issus to the negotiations, were rational given his weak legitimacy and the lack of a successor.']],
    [['دیدگاه ایرانی هم‌روزگار در دست نیست؛ آنچه «دید ایرانی» می‌نامیم بازسازی پژوهشگران از اسناد بابلی و خواندن انتقادی منابع یونانی است. موزاییک اسکندر، اثری رومی که احتمالاً از نقاشی‌ای یونانی برگرفته شده، داریوش را با نگاهی نگران به سوی سربازانش نشان می‌دهد، نه گریزانی بی‌اعتنا.'], ['No contemporary Persian view survives; what we call the “Persian perspective” is scholars’ reconstruction from Babylonian documents and a critical reading of the Greek sources. The Alexander Mosaic, a Roman work probably after a Greek painting, shows Darius turning anxiously towards his men, not a heedless fugitive.']],
    [['تاریخ‌نگاری منصفانه یعنی جدا کردن شواهد از داوری و پرسیدن اینکه هر راوی چه سودی در روایتش داشت.'], ['Fair history means separating evidence from verdict and asking what each narrator stood to gain from his story.']],
    ['arrian', 'curtius', 'ir-d3'], { photos: ['mosaic'] }),
]

export const dariusIII: FeaturedKing = {
  slug: 'darius-iii', name: { fa: 'داریوش سوم (کودومانوس)', en: 'Darius III (Codomannus)' }, dynastyName: ACH,
  reign: { fa: '۳۳۶–۳۳۰ پ.م.', en: '336–330 BCE' },
  title: { fa: 'داریوش سوم؛ ایسوس، گوگمل و پایان هخامنشیان', en: 'Darius III: Issus, Gaugamela and the end of the Achaemenids' },
  lede: {
    fa: 'شاهی با تباری مبهم که بگوآس بر تخت نشاند، دو سال پیش از آمدن اسکندر. در ایسوس و گوگمل شکست خورد، خانواده‌اش اسیر شد و در زنجیر زرین به دست یارانش کشته شد. تنها دشمنانش او را روایت کرده‌اند؛ اینجا شواهد، داوری مورخان اسکندر و بازخوانی پژوهشگران را جدا می‌کنیم. لشکرکشی ۳۳۴–۳۳۰ را روی نقشهٔ متحرک ببینید و سه نبرد را گام‌به‌گام: ایسوس، گوگمل و ایستادگی اریوبرزن در دروازه‌های پارس.',
    en: 'A king of obscure origin put on the throne by Bagoas two years before Alexander came. He was beaten at Issus and Gaugamela, lost his family as captives and was killed in golden fetters by his own companions. Only his enemies told his story; here we separate the evidence, the Alexander historians’ verdict and modern scholars’ rereading. Follow the 334–330 campaign on the animated map, and three battles step by step: Issus, Gaugamela and Ariobarzanes’ stand at the Persian Gates.',
  },
  stats: [
    { n: { fa: '۶', en: '6' }, l: { fa: 'سال پادشاهی', en: 'years of reign' } },
    { n: { fa: '۳', en: '3' }, l: { fa: 'نبرد بزرگ: گرانیکوس، ایسوس، گوگمل', en: 'great battles: Granicus, Issus, Gaugamela' } },
    { n: { fa: '۰', en: '0' }, l: { fa: 'کتیبهٔ شاهی ایرانی بازمانده', en: 'surviving Persian royal inscriptions' } },
    { n: { fa: '~۵۰', en: '~50' }, l: { fa: 'سال سن هنگام مرگ (آریان)', en: 'age at death (Arrian)' } },
  ],
  mapTitle: { fa: 'نقشهٔ متحرک: زندگی داریوش سوم', en: 'Animated map: the life of Darius III' },
  events, span: [-380, -330],
  campaign: {
    id: 'reign',
    title: { fa: 'لشکرکشی اسکندر و پایان پادشاهی، گام‌به‌گام (۳۳۴–۳۳۰ پ.م.)', en: 'Alexander’s campaign and the end of the kingdom, step by step (334–330 BCE)' },
    intro: { fa: ['از هلسپونت تا هکاتوم‌پولوس. همهٔ منابع روایی از مورخان اسکندرند و سده‌ها بعد نوشته شده‌اند؛ مسیرها طرح‌وارند.'], en: ['From the Hellespont to Hecatompylus. All the narrative sources are Alexander historians writing centuries later; the routes are sketches.'] },
    events: campaign, span: [-334, -330], view: [22.0, 28.0, 56.5, 42.5],
    places: [
      { name: B('گرانیکوس', 'Granicus'), c: GRANICUS, left: true }, { name: B('سارد', 'Sardis'), c: SARDIS, left: true }, { name: B('ایسوس', 'Issus'), c: ISSUS },
      { name: B('صور', 'Tyre'), c: TYRE, left: true }, { name: B('ممفیس', 'Memphis'), c: MEMPHIS, left: true }, { name: B('گوگمل', 'Gaugamela'), c: GAUGAMELA },
      { name: B('بابل', 'Babylon'), c: BABYLON }, { name: B('شوش', 'Susa'), c: SUSA }, { name: B('تخت‌جمشید', 'Persepolis'), c: PERSEPOLIS },
      { name: B('هگمتانه', 'Ecbatana'), c: ECBATANA }, { name: B('هکاتوم‌پولوس', 'Hecatompylus'), c: HECATOMPYLUS },
    ],
    clip: clipFor('darius-iii'),
    battles: [issus, gaugamela, persianGates],
  },
  shareImage: '/media/darius-iii/reign-en.png',
  dossier,
  synthesis: { title: B('جمع‌بندی: پایان یک امپراتوری شخصی', 'Synthesis: the end of a personal empire'), paras: {
    fa: ['داریوش سوم شاهی دلیر اما بی‌تجربه در فرماندهی بزرگ بود که با مشروعیت ضعیف به قدرت رسید و در برابر یکی از بزرگ‌ترین فرماندهان تاریخ قرار گرفت. ایسوس و گوگمل را باخت، اما روایت بزدلی او بیشتر ساختهٔ مورخان اسکندر است تا شواهد.', 'از دید آزادی و مالکیت، فروپاشی او درسی ساختاری دارد: امپراتوری‌ای که همه چیز آن، از فرماندهی تا مشروعیت، به جان یک تن بسته بود، با شکست آن تن فرو ریخت. آریان خود می‌پذیرد که این شاه در امور مدنی خودکامه نبود؛ اما ساختاری که حق مردم را به ارادهٔ شاه می‌بست، نهادی برای ایستادگی پس از او نداشت.'],
    en: ['Darius III was a brave king, inexperienced in high command, who came to power with weak legitimacy and faced one of history’s greatest generals. He lost Issus and Gaugamela, but the story of his cowardice owes more to the Alexander historians than to the evidence.', 'Through the lens of liberty and property his fall has a structural lesson: an empire in which everything, from command to legitimacy, hung on one life collapsed when that man was defeated. Arrian himself concedes that this king was not arbitrary in civil matters; but a structure that tied people’s rights to the king’s will had no institutions to stand after him.'],
  }, sources: ['arrian', 'ir-d3'] },
  sources: pick('arrian', 'curtius', 'diodorus', 'plut-alex', 'justin', 'diaries', 'ir-d3', 'ir-a4', 'ir-ariobarzanes', 'bosworth1980', 'heckel1980', 'stein1940', 'speck2002', 'livius-pg', 'farrokh2007', 'briant-darius', 'briant', 'kuhrt'),
  photos: photos('mosaic', 'mongez', 'gate-site', 'yasuj-statue', 'pg-1849'),
  related: related(['artaxerxes-iv', 'اردشیر چهارم (ارسس)، پیشینیش', 'Artaxerxes IV (Arses), his predecessor'], ['artaxerxes-v', 'بسوس (اردشیر پنجم)', 'Bessus (Artaxerxes V)'], ['artaxerxes-iii', 'اردشیر سوم، حامی‌اش', 'Artaxerxes III, his patron']),
  wikipedia: 'https://en.wikipedia.org/wiki/Darius_III',
}
