/**
 * Alp Arslan, Seljuk sultan 1063–1072 CE.
 * Spine: K. A. Luther, "Alp Arslān" (Encyclopaedia Iranica); Manzikert detail from Britannica.
 */
import type { BattleDiagram, BattlePhase, Coord, DossierSection, FeaturedKing, FeaturedSource } from '../featured/types'
import type { CommonsPhoto } from '../places/types'
import { ev, note, sec } from '../late-achaemenid/common'

const B = (fa: string, en: string) => ({ fa, en })
const RAY: Coord = [51.43, 35.59]
const ANI: Coord = [43.57, 40.51]
const JAND: Coord = [64.6, 44.6]
const HAMADAN: Coord = [48.51, 34.8]
const MANZIKERT: Coord = [42.54, 39.14]
const MAYYAFARIQIN: Coord = [41.0, 38.13]
const EDESSA: Coord = [38.79, 37.16]
const ALEPPO: Coord = [37.16, 36.2]
const OXUS: Coord = [63.6, 39.1]
const MERV: Coord = [61.84, 37.66]

export const alpSources: FeaturedSource[] = [
  { id: 'iranica-alp', author: 'K. A. Luther, Encyclopaedia Iranica', title: 'Alp Arslān', year: '1985', url: 'https://www.iranicaonline.org/articles/alp-arslan-saljuq-sultan/', note: { fa: 'ستون اصلی این صفحه؛ تاریخ‌ها و جاها از این مقاله است.', en: 'The spine of this page; the dates and places come from this article.' } },
  { id: 'britannica-manzikert', author: 'T. Bunting, Encyclopaedia Britannica', title: 'Battle of Manzikert', year: 'online, read 2026', url: 'https://www.britannica.com/event/Battle-of-Manzikert', note: { fa: 'برای گام‌های نبرد ملازگرد.', en: 'For the steps of the battle of Manzikert.' } },
  { id: 'iranica-nizam', author: 'N. Yavari, Encyclopaedia Iranica', title: 'Neẓām-al-Molk', year: '2015', url: 'https://www.iranicaonline.org/articles/nezam-al-molk/', note: { fa: 'دربارهٔ وزیر و نظامیه‌ها.', en: 'On the vizier and the Nizamiyya colleges.' } },
  { id: 'ibn-athir', author: 'Ebn al-Aṯir', title: 'al-Kāmel fi’l-taʾriḵ', year: 'c. 1231', note: { fa: 'تاریخ عربی که ایرانیکا بیشتر بر آن تکیه دارد.', en: 'The Arabic chronicle on which the Iranica article chiefly relies.' } },
]
export const alpSourceIds = new Set(alpSources.map((s) => s.id))

const f = (name: string) => `https://commons.wikimedia.org/wiki/File:${name}`
/** Licence and author read from the Commons API on 2026-10-31. */
export const alpPhotos: CommonsPhoto[] = [
  { id: 'malazgirt-ruins', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Ruines_de_M%C3%A9lazqerd_apr%C3%A8s_le_tremblement_de_terre_du_30_avril_1903.jpg/960px-Ruines_de_M%C3%A9lazqerd_apr%C3%A8s_le_tremblement_de_terre_du_30_avril_1903.jpg', page: f('Ruines_de_Mélazqerd_après_le_tremblement_de_terre_du_30_avril_1903.jpg'), author: 'Fernand Grenard', license: 'Public domain', licenseUrl: 'https://commons.wikimedia.org/wiki/Commons:Public_domain', caption: B('ویرانه‌های ملازگرد پس از زمین‌لرزهٔ ۳۰ آوریل ۱۹۰۳، عکس فرنان گرنار', 'The ruins of Malazgirt (Manzikert) after the earthquake of 30 April 1903, photographed by Fernand Grenard') },
  { id: 'rohan', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/131_Bataille_de_Malazgirt.jpg/960px-131_Bataille_de_Malazgirt.jpg', page: f('131_Bataille_de_Malazgirt.jpg'), author: 'Rohan Master', license: 'Public domain', licenseUrl: 'https://commons.wikimedia.org/wiki/Commons:Public_domain', caption: B('نبرد ملازگرد در نگارهٔ فرانسوی سدهٔ پانزدهم؛ سیصد و اندی سال پس از نبرد کشیده شده و تخیل است، نه گزارش.', 'Manzikert in a fifteenth-century French miniature, painted some 380 years later: imagination, not a record.') },
]

const sketch = note('منابع راه‌ها را نمی‌گویند؛ خط‌ها طرح‌وارند.', 'The sources give no routes; the lines are sketches.')
export const alpEvents = [
  ev('ray', 1063, B('نوامبر–دسامبر ۱۰۶۳ م', 'Nov–Dec 1063 CE'), 'battle', RAY, B('جانشینی طغرل', 'Succeeding Tughril'), B('طغرل در ۴ سپتامبر ۱۰۶۳ در ری مرد و سلیمان را جانشین کرده بود. وزیرش کندری به سوی آلپ ارسلان رفت. آلپ ارسلان مدعی دیگر، قتلمش، را نزدیک ری شکست داد.', 'Tughril died at Ray on 4 September 1063, having named Solayman as heir. His vizier Kondori went over to Alp Arslan, who routed another claimant, Qutlumush, near Ray.'), 'secure', ['iranica-alp', 'ibn-athir']),
  ev('ani', 1064, B('۱۰۶۴ م', '1064 CE'), 'campaign', ANI, B('ارمنستان و گرفتن آنی', 'Armenia and the taking of Ani'), B('به ارمنستان لشکر کشید و شهر آنی را گرفت؛ نظام‌الملک و ملکشاه هر کدام دژهایی گرفتند.', 'He campaigned in Armenia and took the city of Ani; Nizam al-Mulk and Malikshah each took fortresses.'), 'secure', ['iranica-alp'], { route: [RAY, ANI], ...sketch }),
  ev('jand', 1065, B('۱۰۶۵–۱۰۶۶ م', '1065–1066 CE'), 'campaign', JAND, B('جند و دشت', 'Jand and the steppe'), B('تا جند پیش رفت، آرامگاه نیایش سلجوق را زیارت کرد و ترکمانان و قپچاق‌ها را به فرمان آورد. در ۱۰۶۶ ملکشاه را ولیعهد کرد.', 'He advanced to Jand, visited the tomb of his ancestor Saljuq and forced Turkmen and Qipchaqs to submit. In 1066 he named Malikshah his heir.'), 'probable', ['iranica-alp', 'ibn-athir'], { route: [ANI, RAY, MERV, JAND], ...note('سال این لشکرکشی در منابع یکسان نیست و جای جند تقریبی است.', 'The sources differ on the year, and Jand’s position is approximate.') }),
  ev('hamadan', 1070, B('اوت–سپتامبر ۱۰۷۰ م', 'Aug–Sep 1070 CE'), 'campaign', HAMADAN, B('حرکت از همدان', 'Setting out from Hamadan'), B('لشکرکشی بزرگ غربی از همدان آغاز شد. در راه ارجیش و ملازگرد را گرفت و در میافارقین امیر مروانی به او سر سپرد.', 'The great western campaign set out from Hamadan. On the way he took Arjish and Manzikert, and at Mayyafariqin the Marwanid amir did him homage.'), 'secure', ['iranica-alp'], { route: [JAND, MERV, RAY, HAMADAN], ...sketch }),
  ev('edessa', 1070, B('۱۰۷۰ م', '1070 CE'), 'battle', EDESSA, B('محاصرهٔ رها (ادسا)', 'The siege of Edessa'), B('رها را محاصره کرد، اما «گفته‌اند» بیزانسی‌ها با نیرنگ ادوات محاصره‌اش را سوزاندند. حران با باج سر سپرد.', 'He besieged Edessa, but “we are told” the Byzantines tricked him into burning his siege engines. Harran submitted with tribute.'), 'secure', ['iranica-alp'], { route: [HAMADAN, MANZIKERT, MAYYAFARIQIN, EDESSA], ...sketch }),
  ev('aleppo', 1071, B('۱۰۷۱ م', '1071 CE'), 'battle', ALEPPO, B('حلب', 'Aleppo'), B('فرمانروای حلب تنها پس از محاصره سر سپرد. به گزارش ابن عدیم، سلطان هنگام رسیدن خبر سپاه بیزانس در راه مصر فاطمی بود.', 'The ruler of Aleppo submitted only after a siege. In one report by Ebn al-‘Adim, the sultan was already on his way to Fatimid Egypt when news of the Byzantine army came.'), 'secure', ['iranica-alp'], { route: [EDESSA, ALEPPO], ...sketch }),
  ev('manzikert', 1071, B('جمعه ۲۶ اوت ۱۰۷۱ م', 'Friday 26 August 1071 CE'), 'battle', MANZIKERT, B('ملازگرد', 'Manzikert'), B('با خبر لشکر بزرگ رومانوس دیوجانس، با سپاهی «نسبتاً کوچک» شتافت و نزدیک ملازگرد او را شکست داد. امپراتور اسیر شد و پس از بازگشت از تخت افتاد.', 'Hearing of Romanus Diogenes’ huge army, he hurried north with a “relatively small contingent” and defeated it near Manzikert. The emperor was captured, and was deposed after his return.'), 'secure', ['iranica-alp', 'britannica-manzikert'], { route: [ALEPPO, MANZIKERT], ...sketch }),
  ev('death', 1072, B('نوامبر–دسامبر ۱۰۷۲ م', 'Nov–Dec 1072 CE'), 'admin', OXUS, B('مرگ کنار جیحون', 'Death beyond the Oxus'), B('در لشکرکشی به قراخانیان، پس از گذشتن از جیحون، دژبانی اسیر او را زخم کاری زد. کاهن مرگ را ژانویهٔ ۱۰۷۳ می‌داند.', 'On campaign against the Qarakhanids, after crossing the Oxus, he was mortally wounded by a captive castellan. Cahen dates the death to January 1073.'), 'probable', ['iranica-alp'], { route: [MANZIKERT, HAMADAN, RAY, MERV, OXUS], ...note('تاریخ مرگ در منابع یکسان نیست و جای دقیق گذرگاه جیحون معلوم نیست.', 'The sources differ on the date, and the exact crossing point is unknown.') }),
]

const campaignEvents = [
  ev('c-hamadan', 1070, B('۱۰۷۰ م', '1070 CE'), 'campaign', HAMADAN, B('همدان', 'Hamadan'), B('آغاز لشکرکشی غربی.', 'The western campaign begins.'), 'secure', ['iranica-alp']),
  ev('c-manzikert1', 1070, B('۱۰۷۰ م', '1070 CE'), 'battle', MANZIKERT, B('ارجیش و ملازگرد', 'Arjish and Manzikert'), B('دو دژ گرفته می‌شود.', 'Two strongholds taken.'), 'secure', ['iranica-alp'], { route: [HAMADAN, MANZIKERT], ...sketch }),
  ev('c-mayya', 1070, B('۱۰۷۰ م', '1070 CE'), 'admin', MAYYAFARIQIN, B('میافارقین', 'Mayyafariqin'), B('مروانیان سر می‌سپارند.', 'The Marwanids do homage.'), 'secure', ['iranica-alp'], { route: [MANZIKERT, MAYYAFARIQIN], ...sketch }),
  ev('c-edessa', 1070, B('۱۰۷۰ م', '1070 CE'), 'battle', EDESSA, B('رها', 'Edessa'), B('محاصره‌ای ناکام.', 'A failed siege.'), 'secure', ['iranica-alp'], { route: [MAYYAFARIQIN, EDESSA], ...sketch }),
  ev('c-aleppo', 1071, B('۱۰۷۱ م', '1071 CE'), 'battle', ALEPPO, B('حلب', 'Aleppo'), B('حلب پس از محاصره سر می‌سپارد.', 'Aleppo submits after a siege.'), 'secure', ['iranica-alp'], { route: [EDESSA, ALEPPO], ...sketch }),
  ev('c-manzikert2', 1071, B('۲۶ اوت ۱۰۷۱ م', '26 Aug 1071 CE'), 'battle', MANZIKERT, B('ملازگرد', 'Manzikert'), B('شتاب به شمال؛ پیروزی و اسارت امپراتور.', 'A dash north; victory and the emperor captured.'), 'secure', ['iranica-alp'], { route: [ALEPPO, MANZIKERT], ...sketch }),
]

const S = (id: string, fa: string, en: string, at: [number, number]) => ({ id, side: 'persian' as const, kind: 'army' as const, label: B(fa, en), at })
const R = (id: string, fa: string, en: string, at: [number, number]) => ({ id, side: 'greek' as const, kind: 'army' as const, label: B(fa, en), at })
const phases: BattlePhase[] = [
  {
    id: 'split', title: B('رومانوس سپاهش را دو بخش می‌کند', 'Romanus divides his army'),
    body: B('رومانوس بخشی از سپاه را برای گرفتن خلاط کنار دریاچهٔ وان فرستاد و خود با بقیه به ملازگرد رفت. آلپ ارسلان که در سوریه بود، شتابان به سوی ملازگرد آمد.', 'Romanus sent part of his army to take Akhlat on Lake Van and went with the rest to Manzikert. Alp Arslan, in Syria, hurried towards Manzikert.'),
    units: [R('romanus', 'رومانوس', 'Romanus', [24, 16]), R('akhlat', 'سپاه خلاط', 'Akhlat force', [66, 34]), S('alp', 'آلپ ارسلان', 'Alp Arslan', [12, 50])],
    arrows: [{ side: 'greek', path: [[30, 18], [64, 32]] }, { side: 'persian', path: [[6, 58], [14, 48]] }],
    certainty: 'secure', sources: ['britannica-manzikert', 'iranica-alp'],
  },
  {
    id: 'defection', title: B('شب پیش از نبرد: ترکمانان مزدور جدا می‌شوند', 'The night before: the Turkmen mercenaries defect'),
    body: B('رومانوس ملازگرد را رها کرد تا به سپاه خلاط بپیوندد. به گفتهٔ بریتانیکا، مزدوران ترکمن سپاه بیزانس شب پیش از نبرد به سوی سلجوقیان رفتند.', 'Romanus left Manzikert to rejoin the Akhlat force. According to Britannica, the Turkmen mercenaries in the Byzantine army went over to the Seljuks the night before the battle.'),
    units: [R('romanus', 'رومانوس', 'Romanus', [40, 24]), R('akhlat', 'سپاه خلاط', 'Akhlat force', [66, 34]), S('alp', 'آلپ ارسلان', 'Alp Arslan', [34, 42]), S('turkmen', 'ترکمانان جداشده', 'Defecting Turkmen', [50, 40])],
    arrows: [{ side: 'greek', path: [[26, 17], [38, 23]] }, { side: 'persian', path: [[44, 28], [49, 37]] }],
    certainty: 'probable', certaintyNote: B('گزارش‌ها دربارهٔ زمان و شمار جداشدگان یکسان نیست؛ جاها طرح‌وارند.', 'Accounts differ on when and how many defected; the positions are schematic.'), sources: ['britannica-manzikert'],
  },
  {
    id: 'battle', title: B('دام در درهٔ راه خلاط؛ آندرونیکوس دوکاس می‌گریزد', 'A trap on the Akhlat road; Andronikos Doukas flees'),
    body: B('رومانوس بی‌آنکه دیده‌بان بفرستد در دره‌ای بر راه خلاط گیر افتاد و سلجوقیان بر او تاختند. او دلیرانه جنگید، اما سردارش آندرونیکوس دوکاس که نبرد را باخته می‌دید با سپاهیانش گریخت.', 'Romanus, having sent out no scouts, was trapped in a valley on the Akhlat road and the Turks fell on him. He fought bravely, but his general Andronikos Doukas, seeing the cause as lost, fled with his men.'),
    units: [R('romanus', 'رومانوس', 'Romanus', [46, 28]), R('doukas', 'آندرونیکوس دوکاس', 'Andronikos Doukas', [30, 20]), S('alp', 'آلپ ارسلان', 'Alp Arslan', [44, 42]), S('wing', 'سواران سلجوقی', 'Seljuk horse', [58, 18])],
    arrows: [{ side: 'persian', path: [[44, 40], [46, 31]] }, { side: 'persian', path: [[58, 20], [50, 27]] }, { side: 'greek', path: [[27, 22], [6, 30]] }],
    certainty: 'probable', certaintyNote: B('شرح گام‌ها از یک مرجع ثانوی (بریتانیکا) است که بر گزارش‌های بیزانسی تکیه دارد؛ منابع مسلمان جزئیات دیگری دارند.', 'The steps follow one secondary account (Britannica) resting on Byzantine reports; the Muslim sources differ in detail.'), sources: ['britannica-manzikert'],
  },
  {
    id: 'capture', title: B('امپراتور اسیر می‌شود', 'The emperor is captured'),
    body: B('سپاه بیزانس نابود شد و رومانوس زخمی اسیر شد. آلپ ارسلان او را تنها پس از پذیرفتن واگذاری سرزمین‌هایی رها کرد؛ در قسطنطنیه از تخت افتاد، کور شد و مرد. ایرانیکا می‌گوید پیروزی از آن رو کامل‌تر شد که امپراتور برکنار شد.', 'The Byzantine army was destroyed and Romanus, wounded, was taken prisoner. Alp Arslan released him only after he agreed to cede territory; in Constantinople he was overthrown, blinded and died. Iranica says the victory was the more complete because the emperor was deposed.'),
    units: [S('alp', 'آلپ ارسلان', 'Alp Arslan', [46, 34]), R('romanus', 'رومانوس (اسیر)', 'Romanus (captive)', [46, 26])],
    arrows: [{ side: 'persian', path: [[46, 40], [46, 30]] }],
    certainty: 'secure', sources: ['britannica-manzikert', 'iranica-alp'],
  },
]
const manzikert: BattleDiagram = {
  id: 'manzikert',
  title: B('ملازگرد، گام‌به‌گام (طرح‌وار)', 'Manzikert, step by step (schematic)'),
  when: B('۲۶ اوت ۱۰۷۱ م', '26 August 1071 CE'),
  land: ['M0 0 L100 0 L100 60 L0 60 Z M72 40 C66 46 66 54 70 58 L98 58 L98 38 C90 35 80 36 72 40 Z'],
  labels: [
    { at: [20, 10], text: B('ملازگرد', 'Manzikert') },
    { at: [74, 30], text: B('خلاط', 'Akhlat') },
    { at: [84, 50], text: B('دریاچهٔ وان', 'Lake Van'), tone: 'sea' },
  ],
  phases,
  sides: { persian: B('سلجوقیان', 'Seljuks'), greek: B('بیزانس', 'Byzantines') },
}

export const alpDossier: DossierSection[] = [
  sec('sources', 'منابع: سلطان آرمانی', 'Sources: an idealised sultan',
    [['بیشتر آگاهی ما از ابن اثیر و تاریخ‌های پسین است. ایرانیکا می‌گوید منابع او را آرمانی کرده‌اند، هرچند حکایت‌هایی از تندخویی او در مستی هم آمده است. سال تولدش هم روشن نیست: ۱۰۲۹ به گفتهٔ ابن اثیر یا ۱۰۳۲–۱۰۳۳ به گفتهٔ بنداری.'], ['Most of what we know comes from Ebn al-Athir and later histories. Iranica says the sources idealise him, though anecdotes of harshness when drunk survive. Even his birth is uncertain: 1029 according to Ebn al-Athir, 1032–33 according to Bondari.']],
    [['تصویر «سلطان جوانمرد که امپراتور را بخشید» را بخشی افسانه می‌دانیم: رومانوس در برابر واگذاری سرزمین آزاد شد، نه از سر بزرگواری صرف.'], ['We treat the image of “the chivalrous sultan who pardoned the emperor” as partly legend: Romanus was freed in exchange for ceding territory, not out of pure magnanimity.']],
    [['برای تاریخ، باید ستایش منابع را از کارهای ثبت‌شده جدا کرد.'], ['For history, the sources’ praise must be kept apart from the recorded deeds.']],
    ['iranica-alp', 'ibn-athir']),
  sec('manzikert', 'ملازگرد: پیروزی‌ای که هدفش نبود', 'Manzikert: a victory that was not the goal',
    [['به نقل ایرانیکا، کاهن باور ندارد که آلپ ارسلان قصد نابودی بیزانس داشت؛ در یک گزارش، سلطان در راه مصر فاطمی بود. اما شکست، اسارت و برکناری امپراتور برای بیزانس «فاجعه‌بار» بود.'], ['As Iranica reports, Cahen does not believe Alp Arslan intended the destruction of Byzantium; in one report the sultan was on his way to Fatimid Egypt. Yet the defeat, capture and deposition of the emperor were “disastrous for the Byzantine cause”.']],
    [['دیدگاه رایج که ملازگرد را «آغاز ترکی شدن آناتولی» می‌داند، نگاه پسینیان است. بریتانیکا آن را آغاز ناتوانی نظامی بیزانس و راهی به سوی جنگ‌های صلیبی می‌داند؛ این تفسیر است، نه گزارش.'], ['The common view of Manzikert as “the start of the Turkish settlement of Anatolia” is hindsight. Britannica sees it as the beginning of Byzantium’s military decline and a road to the Crusades; that is interpretation, not record.']],
    [['نتیجهٔ یک نبرد را نباید با نقشهٔ پیروز یکی گرفت.'], ['The result of a battle should not be confused with the winner’s plan.']],
    ['iranica-alp', 'britannica-manzikert'], { photos: ['malazgirt-ruins', 'rohan'] }),
  sec('property', 'دارایی: باج و غنیمت', 'Property: tribute and booty',
    [['ایرانیکا نشان می‌دهد بخش بزرگی از کار سلطان گرفتن باج از فرمانروایان محلی بود: حران با باج سر سپرد، مروانیان و حلب پس از تهدید یا محاصره. آلپ ارسلان دستگاه جاسوسی را هم برچید، که نظام‌الملک آن را نمی‌پسندید.'], ['Iranica shows that much of the sultan’s work was extracting tribute from local rulers: Harran submitted with tribute, the Marwanids and Aleppo after threat or siege. Alp Arslan also abolished the intelligence service, which Nizam al-Mulk disliked.']],
    [['این خوانش ماست: در این دولت، دارایی از آنِ کسی بود که شمشیر داشت. شهرها با باج امنیت می‌خریدند و آنچه از شهر نمی‌رسید با محاصره گرفته می‌شد. ثبات تنها تا جایی بود که سلطان زنده و پیروز بود؛ مرگ ناگهانی او همه چیز را به جانشینی تازه وابسته کرد.'], ['This is our reading: in this state, property belonged to whoever held the sword. Cities bought safety with tribute, and what a city would not give was taken by siege. Stability lasted only as long as the sultan lived and won; his sudden death made everything hang on a new succession.']],
    [['امنیتی که با باج خریده شود، حق نیست؛ اجاره است.'], ['Safety bought with tribute is not a right; it is a rent.']],
    ['iranica-alp']),
]

export const alpArslan: FeaturedKing = {
  slug: 'alp-arslan',
  name: B('آلپ ارسلان', 'Alp Arslan'),
  dynastyName: B('سلجوقیان', 'The Seljuks'),
  reign: B('۱۰۶۳–۱۰۷۲ م', '1063–1072 CE'),
  title: B('آلپ ارسلان؛ ملازگرد و سلطانی که به مصر می‌رفت', 'Alp Arslan: Manzikert, and a sultan heading for Egypt'),
  lede: B(
    'برادرزادهٔ طغرل که با وزیرش نظام‌الملک دولت سلجوقی را از خراسان تا ارمنستان گسترد. در ملازگرد امپراتور بیزانس را اسیر کرد، هرچند به گفتهٔ کاهن قصد نابودی بیزانس را نداشت. لشکرکشی را روی نقشه و نبرد را گام‌به‌گام دنبال کنید.',
    'Tughril’s nephew who, with his vizier Nizam al-Mulk, spread Seljuk rule from Khorasan to Armenia. At Manzikert he captured the Byzantine emperor, though Cahen doubts he meant to destroy Byzantium. Follow the campaign on the map and the battle step by step.',
  ),
  stats: [
    { n: B('۹ سال', '9 years'), l: B('سلطنت', 'as sultan') },
    { n: B('۱۰۷۱', '1071'), l: B('ملازگرد (م)', 'Manzikert (CE)') },
    { n: B('۱', '1'), l: B('امپراتور اسیر', 'emperor captured') },
    { n: B('سپاه کوچک', 'small force'), l: B('«نسبتاً کوچک» در ملازگرد', '“relatively small” at Manzikert') },
  ],
  mapTitle: B('نقشهٔ متحرک: زندگی و لشکرکشی‌ها', 'Animated map: life and campaigns'),
  events: alpEvents,
  span: [1063, 1072],
  campaign: {
    id: 'campaigns',
    title: B('لشکرکشی غربی: از همدان تا ملازگرد (۱۰۷۰–۱۰۷۱ م)', 'The western campaign: Hamadan to Manzikert (1070–1071 CE)'),
    intro: { fa: ['از همدان به ارجیش و ملازگرد، میافارقین، رها و حلب، سپس شتاب به شمال برای رویارویی با رومانوس. رویدادها از ایرانیکاست؛ راه‌ها طرح‌وارند.'], en: ['From Hamadan to Arjish and Manzikert, Mayyafariqin, Edessa and Aleppo, then a dash north to meet Romanus. The events are from Iranica; the routes are sketches.'] },
    events: campaignEvents, span: [1070, 1071], view: [34, 32, 51, 42],
    places: [
      { name: B('همدان', 'Hamadan'), c: HAMADAN }, { name: B('ملازگرد', 'Manzikert'), c: MANZIKERT },
      { name: B('میافارقین', 'Mayyafariqin'), c: MAYYAFARIQIN, dy: 0.8 }, { name: B('رها', 'Edessa'), c: EDESSA },
      { name: B('حلب', 'Aleppo'), c: ALEPPO },
    ],
    clip: { gif: B('/media/alp-arslan/campaigns-fa.gif', '/media/alp-arslan/campaigns-en.gif'), mp4: B('/media/alp-arslan/campaigns-fa.mp4', '/media/alp-arslan/campaigns-en.mp4'), webm: B('/media/alp-arslan/campaigns-fa.webm', '/media/alp-arslan/campaigns-en.webm'), poster: B('/media/alp-arslan/campaigns-fa.png', '/media/alp-arslan/campaigns-en.png'), width: 958, height: 356 },
    battles: [manzikert],
  },
  shareImage: '/media/alp-arslan/campaigns-en.png',
  dossier: alpDossier,
  synthesis: { title: B('جمع‌بندی: پیروزی بزرگ، دولت شکننده', 'Synthesis: a great victory, a fragile state'), paras: {
    fa: [
      'آلپ ارسلان در نه سال جانشینی پرکشمکش طغرل را تثبیت کرد، ارمنستان و قفقاز را گشود و در ملازگرد امپراتور بیزانس را اسیر کرد. کار اداره در دست نظام‌الملک بود.',
      'از دید دارایی، دولت او بر باج و غنیمت تکیه داشت. با زخم یک اسیر در کنار جیحون، همه چیز به جانشینی پسر جوانش ملکشاه وابسته شد.',
    ],
    en: [
      'In nine years Alp Arslan secured Tughril’s contested succession, campaigned in Armenia and the Caucasus and captured the Byzantine emperor at Manzikert. Administration lay in the hands of Nizam al-Mulk.',
      'Through the lens of property, his state rested on tribute and booty. With one captive’s blow beyond the Oxus, everything came to hang on the succession of his young son Malikshah.',
    ],
  }, sources: ['iranica-alp', 'britannica-manzikert'] },
  sources: alpSources,
  photos: alpPhotos,
  related: [
    { href: { fa: '/dynasty/seljuks', en: '/dynasty/seljuks' }, label: B('دودمان سلجوقی', 'The Seljuk dynasty') },
    { href: { fa: '/king/malik-shah-i', en: '/en/king/malik-shah-i' }, label: B('ملکشاه و نظام‌الملک', 'Malikshah and Nizam al-Mulk') },
  ],
  wikipedia: 'https://en.wikipedia.org/wiki/Alp_Arslan',
}
