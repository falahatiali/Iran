/**
 * Shapur II (309–379 CE): featured page.
 * Narrative: Encyclopaedia Iranica (Daryaee “Šāpur II”; Kettenhofen “Jovian”; Shahbazi “Ardašīr II”) paraphrased.
 * Verbatim quotes: Ammianus tr. Rolfe (LacusCurtius); Agathias tr. Frendo; Bundahišn and the Acts of Simeon as translated in Iranica.
 */
import type { BattleDiagram, BattleUnit, Bi, FeaturedKing } from '../featured/types'
import { AMIDA, ARMENIA, BEZABDE, CIRCESIUM, CTESIPHON, HAJAR, HIRA, ISTAKHR, MARANGA, NISHAPUR, NISIBIS, PIRISABORA, SAMARRA, SAS, SINGARA, SUSA_KARKHA, TAQ_E_BOSTAN, battleClipFor, clipFor, ev, note, photos, pick, related, sec } from './common'

const B = (fa: string, en: string): Bi => ({ fa, en })

const ROMAN = note('گزارش از آمیانوس است، افسری رومی که خود در این جنگ بود. شاهد عینی است، اما از یک سو.', 'The account is Ammianus’, a Roman officer who served in this war. An eyewitness, but from one side.')

const womb = ev('womb', 309, B('۳۰۹ م.', '309 CE'), 'admin', CTESIPHON, B('تاج بر شکم مادر (روایت)', 'A crown on the mother’s womb (tradition)'),
  B('به روایت آگاثیاس، حمزهٔ اصفهانی و مجمل‌التواریخ، بزرگان و موبدان تاج را بر شکم مادر باردار شاپور گذاشتند، و او از پیش از زادن شاه بود. ایرانیکا این را «افسانه» می‌نامد. آنچه استوارتر است: بزرگان پسران بزرگ‌تر هرمز دوم را کنار زدند.', 'According to Agathias, Hamza Isfahani and the Mojmal al-Tawarikh, the nobles and priests placed the crown on the womb of Shapur’s pregnant mother, so that he was king before he was born. Iranica calls this a “legend”. What is firmer: the nobles pushed aside Hormizd II’s older sons.'),
  'disputed', ['ir-shapur2', 'agathias', 'ir-ardashir2'], note('این روایت است، نه گزارش تاریخی. شاهنامه می‌گوید شاپور چهل روز پس از مرگ پدر زاده شد.', 'This is tradition, not a historical report. The Shahnameh says Shapur was born forty days after his father’s death.'))
const arabs = ev('arabs', 325, B('حدود ۳۲۵ م.', 'c. 325 CE'), 'campaign', HAJAR, B('لشکرکشی به عرب‌ها', 'The campaign against the Arabs'),
  B('منابع عربی بر پایهٔ سنت ساسانی (طبری، مسکویه، ثعالبی) می‌گویند شاپور در شانزده‌سالگی به قبیله‌هایی که از بحرین به فارس یورش آورده بودند تاخت: نخست به ایاد در عراق، سپس از خلیج فارس گذشت و به خط و هجر رسید. گفته‌اند چاه‌ها را هم نابود کرد. برخی قبیله‌ها را به زور در خاک ایران، تا کرمان و اهواز، نشاند.', 'Arabic sources drawing on Sasanian tradition (Tabari, Miskawayh, Thaʿalibi) say that at sixteen Shapur attacked the tribes who had raided Fars from Bahrain: first the Iyad in Iraq, then across the Persian Gulf to al-Khatt and Hajar. He is said to have destroyed the wells as well. Some tribes were forcibly resettled in Iran, as far as Kerman and Ahvaz.'),
  'probable', ['ir-shapur2'])
const wall = ev('wall', 326, B('پس از جنگ عرب', 'after the Arab war'), 'building', HIRA, B('«دیوار تازیان»', 'The “wall of the Arabs”'),
  B('شاپور برای جلوگیری از یورش‌های تازه دیواری دفاعی به نام «وَرِ تازیگان» ساخت. ایرانیکا می‌گوید این دیوار گویا نزدیک حیره بود و بعدها «خندق شاپور» نامیده شد.', 'To stop new raids Shapur built a defensive line called war ī tāzīgān, “the wall of the Arabs”. Iranica says it seems to have been near Hira and later came to be called the Khandaq of Shapur.'),
  'probable', ['ir-shapur2'])
const nisibis = ev('nisibis', 338, B('۳۳۷–۳۵۰ م.', '337–350 CE'), 'battle', NISIBIS, B('سه بار محاصرهٔ نصیبین', 'Nisibis besieged three times'),
  B('پس از مرگ کنستانتین (۳۳۷ م.) جنگ با روم آغاز شد. شاپور سه بار نصیبین را محاصره کرد و هر بار ناکام ماند. دژهای مرزی روم کار را سخت می‌کرد. تا ۳۵۰ م. جنگ بی‌برنده ماند.', 'After Constantine’s death (337) war with Rome began. Shapur besieged Nisibis three times and failed each time. Rome’s border forts made the work hard. By 350 the war had reached a stalemate.'),
  'secure', ['ir-shapur2'])
const christians = ev('christians', 340, B('از ۳۳۷ م. به بعد', 'from 337 CE on'), 'religion', SUSA_KARKHA, B('آزار مسیحیان', 'Persecution of the Christians'),
  B('ایرانیکا: از ۳۳۷ م. آزار مسیحیان بالا گرفت، تا اندازه‌ای چون روم مسیحی شده بود و مسیحیان را همدست دشمن می‌دیدند. شاپور در جنگ از مسیحیان مالیات دوبرابر خواست. به روایت کارنامهٔ شهیدان، شمعون، رهبر مسیحیان، نپذیرفت و کشته شد.', 'Iranica: from 337 the persecution of Christians grew, partly because Rome had become Christian and Christians were seen as collaborators with the enemy. During the war Shapur demanded a double tax from the Christians. According to the martyr acts, Simeon, the Christian leader, refused and was put to death.'),
  'probable', ['ir-shapur2'], note('شمار و جزئیات بیشتر از کارنامه‌های شهیدان سریانی است که نوشته‌هایی دینی‌اند. ایرانیکا می‌گوید در این متن‌ها آزار معمولاً به گردن موبدان انداخته می‌شود.', 'Most numbers and details come from Syriac martyr acts, which are religious writings. Iranica notes that in these texts the persecution is usually blamed on the priests.'))
const east = ev('east', 350, B('حدود ۳۵۰–۳۵۸ م.', 'c. 350–358 CE'), 'campaign', NISHAPUR, B('جنگ در شرق و پیمان با گرومباتس', 'War in the east, and a pact with Grumbates'),
  B('تاخت قبیله‌های هون، که ایرانیکا احتمالاً کیداری می‌داند، شاپور را به شرق کشاند. او با شاهشان گرومباتس، پادشاه خیونیان، پیمان بست؛ گرومباتس بعدها همراه شاپور به آمیدا آمد.', 'Raids by Hunnic tribes, whom Iranica thinks were probably the Kidarites, drew Shapur east. He made an alliance with their king Grumbates, king of the Chionitae; Grumbates later came with Shapur to Amida.'),
  'probable', ['ir-shapur2', 'ammianus'])
const amida = ev('amida', 359, B('۳۵۹ م.', '359 CE'), 'battle', AMIDA, B('محاصرهٔ آمیدا', 'The siege of Amida'),
  B('شاپور به آمیدا (دیاربکر) رسید. در گفت‌وگوی پیش از نبرد، تیر منجنیقی پسر جوان گرومباتس را کشت. پس از ۷۳ روز محاصره شهر گشوده شد، غارت شد و مردمش را به خوزستان کوچ دادند. آمیانوس خود درون شهر بود و گریخت.', 'Shapur came to Amida (Diyarbakır). During the parley before the fighting, a ballista bolt killed Grumbates’ young son. After a siege of 73 days the city was taken, plundered and its people deported to Khuzestan. Ammianus was inside the city and escaped.'),
  'secure', ['ammianus', 'ir-shapur2'], ROMAN)
const bezabde = ev('bezabde', 360, B('۳۶۰ م.', '360 CE'), 'battle', BEZABDE, B('بزابده', 'Bezabde'),
  B('برخی دژهای مرزی، مانند بزابده در کنار دجله، به دست شاپور افتادند (آمیانوس ۲۰.۷).', 'Some border forts, such as Bezabde on the Tigris, fell to Shapur (Ammianus 20.7).'),
  'secure', ['ir-shapur2', 'ammianus'])
const circesium = ev('circesium', 363, B('بهار ۳۶۳ م.', 'spring 363 CE'), 'campaign', CIRCESIUM, B('ژولیان به ایران می‌تازد', 'Julian invades'),
  B('امپراتور ژولیان با سپاهی بزرگ و ناوگانی بر فرات از مرز گذشت. ارشک دوم، شاه ارمنستان، با او همراه شد.', 'The emperor Julian crossed the frontier with a large army and a fleet on the Euphrates. Arshak II, king of Armenia, joined him.'),
  'secure', ['ammianus', 'ir-shapur2'])
const pirisabora = ev('pirisabora', 363, B('بهار ۳۶۳ م.', 'spring 363 CE'), 'battle', PIRISABORA, B('پیروزشاپور و دژهای فرات', 'Pirisabora and the Euphrates forts'),
  B('رومیان در راه پایین فرات دژها و شهرها را گرفتند یا سوزاندند، از جمله پیروزشاپور (انبار).', 'Marching down the Euphrates the Romans took or burned forts and towns, among them Pirisabora (Anbar).'),
  'secure', ['ammianus'], ROMAN)
const ctesiphon = ev('ctesiphon', 363, B('مه/ژوئن ۳۶۳ م.', 'May/June 363 CE'), 'battle', CTESIPHON, B('پای دیوار تیسفون', 'Before the walls of Ctesiphon'),
  B('رومیان از نهرملکا گذشتند و پای دیوار تیسفون پیروز شدند، اما پایتخت را نگرفتند. شورای فرماندهان محاصره را «نسنجیده» دانست، چون شهر استوار بود و بیم آمدن سپاه شاه می‌رفت. ژولیان فرمان داد ناوگان را بسوزانند و به درون خاک ایران رفت.', 'The Romans crossed the Naarmalcha and won a battle before the walls of Ctesiphon, but did not take the capital. The council of generals judged a siege “rash”, since the city was strong and the king’s army was expected. Julian had the fleet burned and marched inland.'),
  'secure', ['ammianus', 'ir-shapur2'], ROMAN)
const maranga = ev('maranga', 363, B('ژوئن ۳۶۳ م.', 'June 363 CE'), 'battle', MARANGA, B('زمین سوخته و نبرد مرنگا', 'Scorched earth and Maranga'),
  B('ایرانیان کشتزارها را آتش زدند و گرسنگی به جان سپاه روم افتاد. نزدیک مرنگا سپاهی بزرگ با فیل‌ها به رومیان تاخت. چند روز بعد، در ۲۶ ژوئن ۳۶۳، ژولیان در نبرد زخمی شد و چند ساعت بعد در چادرش مرد.', 'The Persians burned the crops and hunger struck the Roman army. Near Maranga a large force with elephants attacked. A few days later, on 26 June 363, Julian was wounded in battle and died in his tent a few hours later.'),
  'secure', ['ammianus', 'ir-shapur2'], ROMAN)
const treaty = ev('treaty', 363, B('ژوئیهٔ ۳۶۳ م.', 'July 363 CE'), 'admin', SAMARRA, B('پیمان یووین', 'Jovian’s treaty'),
  B('سپاه یووین را امپراتور کرد. او در تنگنا پیمانی سی‌ساله بست: پنج استان آن سوی دجله، پانزده دژ، نصیبین، سنگار و کاسترا مائوروروم به ایران رسید، و روم پذیرفت به ارشک ارمنی یاری ندهد. مردم نصیبین و سنگار اجازه یافتند شهر را ترک کنند.', 'The army made Jovian emperor. Trapped, he made a thirty-year peace: five provinces beyond the Tigris, fifteen forts, Nisibis, Singara and Castra Maurorum went to Persia, and Rome agreed not to help Arshak of Armenia. The people of Nisibis and Singara were allowed to leave.'),
  'secure', ['ammianus', 'ir-jovian', 'ir-shapur2'])
const nisibisSettled = ev('nisibis-settled', 364, B('پس از ۳۶۳ م.', 'after 363 CE'), 'building', NISIBIS, B('نصیبین ایرانی می‌شود', 'Nisibis becomes Persian'),
  B('به گفتهٔ طبری، شاپور نصیبین را با مردمی از استخر و سپاهان آباد کرد.', 'According to Tabari, Shapur repopulated Nisibis with people from Istakhr and Spahan (Isfahan).'),
  'probable', ['ir-shapur2'])
const armenia = ev('armenia', 368, B('پس از ۳۶۳ م.', 'after 363 CE'), 'campaign', ARMENIA, B('ارمنستان: ارشک در «دژ فراموشی»', 'Armenia: Arshak in the “Castle of Oblivion”'),
  B('شاپور ارمنستان را گرفت. ارشک دوم اسیر شد و در «دژ فراموشی» در خوزستان زندانی شد. به روایت حماسه‌های ارمنی (فاوستوس)، شهرهایی چون آرتاشات، واغارشاپات و وان گرفته شدند و مردمشان، از جمله خانواده‌های یهودی بسیار، کوچانده شدند. در ۳۷۱ ارمنیان نزدیک باگاوان در برابر شاپور ایستادند.', 'Shapur took Armenia. Arshak II was captured and imprisoned in the “Castle of Oblivion” in Khuzestan. According to the Armenian Epic Histories (Faustus), towns such as Artashat, Vagharshapat and Van were taken and their people, including many Jewish families, deported. In 371 the Armenians held Shapur off near Bagawan.'),
  'disputed', ['ir-shapur2'], note('سال گرفتن ارشک در منابع روشن نیست؛ داستان خودکشی او در زندان تنها از حماسه‌های ارمنی است.', 'The sources do not give a clear year for Arshak’s capture; the story of his suicide in prison comes only from the Armenian Epic Histories.'))
const grotto = ev('grotto', 379, B('پایان پادشاهی', 'end of the reign'), 'building', TAQ_E_BOSTAN, B('ایوان کوچک طاق بستان', 'The small grotto at Taq-e Bostan'),
  B('در ایوان کوچک طاق بستان دو شاه ایستاده‌اند و کتیبه‌ها آنان را شاپور دوم و پسرش شاپور سوم می‌نامند. در کتیبه، شاپور خود را پسر هرمزد و نوهٔ نرسی می‌خواند.', 'In the small grotto at Taq-e Bostan two kings stand side by side, and the inscriptions name them as Shapur II and his son Shapur III. In the inscription Shapur calls himself son of Ohrmazd and grandson of Narseh.'),
  'disputed', ['ir-shapur2', 'ir-hormozd2', 'overlaet'], note('اورلات (۲۰۱۱) با سنجش تاج‌ها می‌گوید پیکر دوم احتمالاً اردشیر دوم است و کتیبه‌ها بعدها، در زمان شاپور سوم، افزوده شدند.', 'Overlaet (2011), comparing the crowns, argues that the second figure is probably Ardashir II and that the inscriptions were added later, under Shapur III.'))
const death = ev('death', 379, B('۳۷۹ م.', '379 CE'), 'admin', CTESIPHON, B('مرگ پس از هفتاد سال', 'Death after seventy years'),
  B('شاپور دوم در ۳۷۹ م. درگذشت؛ او طولانی‌ترین پادشاهی خاندان ساسانی را داشت. پیش از مرگ برادرش اردشیر را جانشین کرد، به این شرط که تاج را به پسر شاپور بسپارد.', 'Shapur II died in 379, after the longest reign of the Sasanian house. Before he died he named his brother Ardashir as successor, on condition that he hand the crown on to Shapur’s son.'),
  'secure', ['ir-shapur2', 'ir-ardashir2'])

const P = (id: string, fa: string, en: string, at: [number, number]): BattleUnit => ({ id, side: 'persian', kind: 'army', label: { fa, en }, at })
const R = (id: string, fa: string, en: string, at: [number, number]): BattleUnit => ({ id, side: 'greek', kind: 'army', label: { fa, en }, at })
const SKETCH = B('مسیر از روایت آمیانوس است؛ جای سپاه‌ها ویرایشی و طرح‌وار است. شمال بالای نمودار است و دجله از بالا به پایین می‌رود.', 'The route follows Ammianus; army positions are editorial and schematic. North is at the top, and the Tigris runs from top to bottom.')

const julianBattle: BattleDiagram = {
  id: 'julian363',
  title: B('از تیسفون تا سامرا، ۳۶۳ م. (طرح‌وار)', 'From Ctesiphon to Samarra, 363 CE (schematic)'),
  when: B('مه تا ژوئیهٔ ۳۶۳ م.', 'May to July 363 CE'),
  sides: { persian: B('ایرانیان (ساسانی)', 'Iranians (Sasanian)'), greek: B('رومیان', 'Romans') },
  land: ['M0 0 L100 0 L100 60 L0 60 Z'],
  labels: [
    { at: [56, 52], text: B('تیسفون', 'Ctesiphon') },
    { at: [60, 32], text: B('مرنگا', 'Maranga') },
    { at: [54, 7], text: B('سامرا (سومره)', 'Samarra (Sumere)') },
    { at: [44, 30], text: B('دجله', 'Tigris') },
  ],
  phases: [
    {
      id: 'walls', title: B('پیروزی پای دیوار، بی‌آنکه شهر بیفتد', 'Victory before the walls, but no city'),
      body: B('رومیان پای دیوار تیسفون پیروز شدند. اما شورای فرماندهان گفت شهر «تنها به سبب جایش» تسخیرناپذیر است و سپاه شاه در راه است. محاصره انجام نشد.', 'The Romans won before the walls of Ctesiphon. But the council of generals said the city was impregnable “by its situation alone” and that the king’s army was coming. No siege was made.'),
      units: [R('army', 'ژولیان و سپاه', 'Julian and the army', [62, 50]), P('city', 'پادگان تیسفون', 'Ctesiphon garrison', [48, 54])],
      arrows: [{ side: 'greek', path: [[70, 56], [62, 52]] }],
      certainty: 'secure', certaintyNote: SKETCH, sources: ['ammianus'],
    },
    {
      id: 'ships', title: B('سوزاندن ناوگان', 'The fleet is burned'),
      body: B('ژولیان فرمان داد همهٔ کشتی‌ها جز دوازده کشتی کوچک را بسوزانند و به درون خاک ایران رفت. ایرانیان کشتزارها را آتش زدند.', 'Julian ordered all the ships burned except twelve small ones and marched inland. The Persians set fire to the crops.'),
      units: [R('army', 'سپاه روم', 'Roman army', [70, 44]), P('fire', 'زمین سوخته', 'Scorched earth', [80, 36])],
      arrows: [{ side: 'greek', path: [[64, 50], [72, 42]] }],
      certainty: 'secure', certaintyNote: SKETCH, sources: ['ammianus'],
    },
    {
      id: 'maranga', title: B('مرنگا', 'Maranga'),
      body: B('سپاه روم برگشت و رو به شمال، کنار دجله، راه افتاد. نزدیک مرنگا سپاهی بزرگ از ایرانیان، با فیل‌ها، به آن تاخت.', 'The Roman army turned back and marched north along the Tigris. Near Maranga a large Persian force with elephants attacked it.'),
      units: [R('army', 'سپاه روم', 'Roman army', [62, 32]), P('main', 'سواران و فیل‌ها', 'Cavalry and elephants', [76, 30])],
      arrows: [{ side: 'persian', path: [[84, 30], [70, 32]] }, { side: 'greek', path: [[68, 42], [62, 34]] }],
      certainty: 'secure', certaintyNote: SKETCH, sources: ['ammianus'],
    },
    {
      id: 'julian', title: B('زخم و مرگ ژولیان', 'Julian is wounded and dies'),
      body: B('ایرانیان از تپه‌ها به ستون روم حمله می‌کردند. ژولیان بی‌زره به نبرد رفت، با نیزه زخمی شد و در چادرش مرد. ایرانیکا می‌گوید ضربه احتمالاً از یک سوار نیزه‌دار ایرانی بود.', 'The Persians attacked the Roman column from the hills. Julian rushed into battle without his armour, was wounded by a spear and died in his tent. Iranica says the blow probably came from a Persian lancer.'),
      units: [R('army', 'ستون روم', 'Roman column', [58, 22]), P('left', 'سواران', 'Horsemen', [72, 18]), P('right', 'سواران', 'Horsemen', [74, 28])],
      arrows: [{ side: 'persian', path: [[80, 16], [64, 20]] }, { side: 'persian', path: [[82, 28], [64, 24]] }],
      certainty: 'probable', certaintyNote: B('این‌که چه کسی ژولیان را زد محل بحث است: آمیانوس روشن نمی‌کند نیزه از کجا آمد. لیبانیوس نخست ضارب را ایرانی دانست، اما بعدها یک مسیحی از سپاه روم را متهم کرد؛ ائوتروپیوس، که در سپاه بود، می‌گوید به دست دشمن کشته شد (ایرانیکا، «ژولیان»).', 'Who struck Julian is disputed: Ammianus leaves unclear where the spear came from. Libanius first said a Persian killed him, but later accused a Christian in the Roman ranks; Eutropius, who served in the army, says he was killed by the enemy (Iranica, “Julian”).'), sources: ['ammianus', 'ir-shapur2', 'ir-julian'],
    },
    {
      id: 'treaty', title: B('سومره و پیمان', 'Sumere and the treaty'),
      body: B('سپاه یووین را امپراتور کرد و به دژ سومره (سامرا) رسید. ایرانیان همچنان می‌تاختند و غذا تمام شده بود. یووین پیمان سی‌ساله را پذیرفت و سپاه از دجله گذشت.', 'The army made Jovian emperor and reached the fort of Sumere (Samarra). The Persians kept attacking and food had run out. Jovian accepted the thirty-year peace and the army crossed the Tigris.'),
      units: [R('army', 'یووین', 'Jovian', [52, 10]), P('king', 'شاپور', 'Shapur', [70, 12])],
      arrows: [{ side: 'greek', path: [[56, 12], [40, 6]] }],
      certainty: 'secure', certaintyNote: SKETCH, sources: ['ammianus', 'ir-jovian'],
    },
  ],
}

const EVENTS = [womb, arabs, wall, nisibis, christians, east, amida, bezabde, circesium, pirisabora, ctesiphon, maranga, treaty, nisibisSettled, armenia, grotto, death]

export const shapurII: FeaturedKing = {
  slug: 'shapur-ii', name: B('شاپور دوم', 'Shapur II'), dynastyName: SAS,
  reign: B('۳۰۹–۳۷۹ م.', '309–379 CE'),
  title: B('شاپور دوم؛ هفتاد سال پادشاهی، آمیدا و شکست ژولیان', 'Shapur II: seventy years on the throne, Amida, and the defeat of Julian'),
  lede: B(
    'شاپور دوم طولانی‌ترین پادشاهی ساسانی را داشت. به روایتی پیش از زادن تاج گرفت. در جوانی به قبیله‌های عرب تاخت و لقب «ذوالاکتاف» گرفت. با روم بیش از بیست سال جنگید: نصیبین را سه بار بی‌نتیجه محاصره کرد، اما در ۳۵۹ م. آمیدا را گرفت. در ۳۶۳ م. امپراتور ژولیان تا تیسفون آمد، بازگشت و در نبرد کشته شد، و جانشینش یووین نصیبین و پنج استان را به ایران داد. در روزگار او مسیحیان ایران سخت آزار دیدند.',
    'Shapur II had the longest Sasanian reign. By one tradition he was crowned before he was born. As a youth he attacked the Arab tribes and earned the name Dhu’l-Aktaf. He fought Rome for more than twenty years: three sieges of Nisibis failed, but in 359 he took Amida. In 363 the emperor Julian reached Ctesiphon, turned back and was killed in battle, and his successor Jovian handed Nisibis and five provinces to Persia. In his reign the Christians of Iran were harshly persecuted.'),
  stats: [{ n: B('۷۰', '70'), l: B('سال پادشاهی', 'years on the throne') }, { n: B('۷۳', '73'), l: B('روز محاصرهٔ آمیدا', 'days’ siege of Amida') }, { n: B('۱۵', '15'), l: B('دژ در پیمان ۳۶۳', 'forts in the 363 treaty') }, { n: B('۳۰', '30'), l: B('سال صلح یووین', 'years of Jovian’s peace') }],
  mapTitle: B('نقشهٔ متحرک: آمیدا و لشکرکشی ژولیان', 'Animated map: Amida and Julian’s campaign'),
  events: EVENTS, span: [309, 379],
  campaign: {
    id: 'reign',
    title: B('از هجر تا آمیدا و تیسفون، گام‌به‌گام (۳۰۹–۳۷۹ م.)', 'From Hajar to Amida and Ctesiphon, step by step (309–379 CE)'),
    intro: {
      fa: ['جنگ‌های شاپور دوم به روایت آمیانوس، منابع عربی و ایرانیکا. هر گام می‌گوید قطعی، محتمل یا محل بحث است؛ مسیرها طرح‌واره‌اند. نمودار گام‌به‌گام بازگشت ژولیان از تیسفون تا سامرا زیر نقشه آمده است.'],
      en: ['Shapur II’s wars as told by Ammianus, the Arabic sources and Iranica. Each step says whether it is secure, probable or disputed; the routes are sketches. The step-by-step diagram of Julian’s retreat from Ctesiphon to Samarra is below the map.'],
    },
    events: EVENTS, span: [309, 379], view: [37, 23.5, 60, 41.5],
    places: [
      { name: B('تیسفون', 'Ctesiphon'), c: CTESIPHON, dy: 1.4 }, { name: B('نصیبین', 'Nisibis'), c: NISIBIS }, { name: B('آمیدا', 'Amida'), c: AMIDA, left: true },
      { name: B('سنگار', 'Singara'), c: SINGARA, left: true }, { name: B('بزابده', 'Bezabde'), c: BEZABDE, dy: -1.2 }, { name: B('کیرکسیون', 'Circesium'), c: CIRCESIUM, left: true },
      { name: B('مرنگا', 'Maranga'), c: MARANGA }, { name: B('سامرا', 'Samarra'), c: SAMARRA, dy: -1.2 }, { name: B('حیره', 'Hira'), c: HIRA, left: true },
      { name: B('هجر', 'Hajar'), c: HAJAR }, { name: B('طاق بستان', 'Taq-e Bostan'), c: TAQ_E_BOSTAN }, { name: B('ارمنستان', 'Armenia'), c: ARMENIA }, { name: B('استخر', 'Istakhr'), c: ISTAKHR },
    ],
    clip: clipFor('shapur-ii'),
    battles: [julianBattle],
  },
  shareImage: '/media/shapur-ii/reign-en.png',
  dossier: [
    sec('womb', 'شاهِ پیش از زادن', 'The king before birth',
      [['آگاثیاس، تاریخ‌نگار بیزانسی سدهٔ ششم که می‌گوید از سالنامه‌های شاهی ایران بهره برده، داستان را چنین می‌آورد: هرمز دوم مرد و همسرش باردار بود. مغان گفتند فرزند پسر است، و بزرگان دیهیم را بر شکم مادر گذاشتند. حمزهٔ اصفهانی و مجمل‌التواریخ هم همین را دارند.'],
        ['Agathias, the 6th-century Byzantine historian who says he used the Persian royal annals, tells it this way: Hormizd II died while his wife was pregnant. The Magi said the child would be a boy, and the nobles placed the diadem on the mother’s womb. Hamza Isfahani and the Mojmal al-Tawarikh tell the same.']],
      [['ایرانیکا (دریایی) این را «افسانه» می‌نامد. شهبازی آن را در زمینهٔ سیاسی‌اش می‌گذارد: بزرگان پسران بزرگ‌تر هرمز را کنار زدند و کودکی را شاه کردند تا خود فرمان برانند. طبری هم می‌گوید همان درباریان و موبدان زمان پدر کشور را اداره کردند.'],
        ['Iranica (Daryaee) calls this a “legend”. Shahbazi puts it in its political setting: the nobles pushed aside Hormizd’s older sons and made a child king so as to rule themselves. Tabari, too, says the same courtiers and priests who served his father ran the empire.']],
      [['تاجی که بر شکم گذاشته شود از کسی رضایت نمی‌خواهد. افسانه زیباست، اما پیامش روشن است: شاهی ارثی بود و حق فرمان را خون می‌داد، نه رضایت مردم.'],
        ['A crown placed on a womb asks no one’s consent. The legend is charming, but its message is plain: kingship was hereditary and blood, not the people’s consent, gave the right to rule.']],
      ['agathias', 'ir-shapur2', 'ir-ardashir2'], {
        quotes: [
          { text: 'When the magi said that a male child would be born they no longer delayed, but putting the diadem around the mother’s womb they proclaimed as Emperor the foetus conferring upon it the distinction of a name and a title', fa: 'چون مغان گفتند که فرزندی پسر زاده خواهد شد، دیگر درنگ نکردند، بلکه دیهیم را بر گرد شکم مادر نهادند و جنین را امپراتور خواندند و نام و لقبی به او دادند', ref: 'Agathias 4.25.4, tr. Frendo (1975)', source: 'agathias' },
          { text: 'Possessed of the royal title at birth, he grew up on the throne and he grew old on it, living to the ripe old age of seventy.', fa: 'از زادن لقب شاهی داشت؛ بر تخت بزرگ شد و بر تخت پیر شد، و تا هفتادسالگی زیست.', ref: 'Agathias 4.25.5, tr. Frendo (1975)', source: 'agathias' },
        ],
        photos: ['coin-shapur2'],
        folk: {
          title: B('روایت: تاج بر شکم مادر', 'Tradition: the crown on the mother’s womb'),
          story: {
            fa: ['هرمز شاه مرد و پسری نداشت که بزرگان بپذیرند. یکی از همسرانش باردار بود. اخترشناسان و مغان گفتند فرزند پسر است و شاهی بزرگ خواهد شد. بزرگان تاج را بالای شکم مادر آویختند و در برابرش زمین بوسیدند. شاپور پیش از آن‌که چشم باز کند شاهنشاه بود.'],
            en: ['King Hormizd died with no son the nobles would accept. One of his wives was pregnant. The astrologers and Magi said the child was a boy and would be a great king. The nobles hung the crown above the mother’s womb and bowed to the ground before it. Shapur was king of kings before he opened his eyes.'],
          },
          origin: {
            fa: ['این روایت از آگاثیاس، طبری، حمزهٔ اصفهانی و مجمل‌التواریخ است. ایرانیکا آن را افسانه می‌داند و باید آن را روایت سنتی شمرد، نه تاریخ.'],
            en: ['This tradition comes from Agathias, Tabari, Hamza Isfahani and the Mojmal al-Tawarikh. Iranica treats it as legend, and it should be read as tradition, not history.'],
          },
          sources: ['agathias', 'ir-shapur2'],
        },
      }),
    sec('arabs', 'جنگ عرب و لقب «ذوالاکتاف»', 'The Arab war and the name Dhu’l-Aktaf',
      [['در کودکی شاپور، قبیله‌هایی از بحرین و هجر از خلیج فارس گذشتند و ساحل فارس و ناحیهٔ اردشیرخره را غارت کردند. به گفتهٔ طبری و مسکویه، شاپور در شانزده‌سالگی به آنان تاخت: ایاد در عراق، سپس خط، هجر و یمامه. قبیله‌های تغلب، عبدالقیس، تمیم و بکر بن وائل را به جاهای تازه کوچاند. برای جلوگیری از یورش‌های تازه «دیوار تازیان» را نزدیک حیره ساخت.'],
        ['In Shapur’s childhood, tribes from Bahrain and Hajar crossed the Persian Gulf and plundered the coast of Fars and the district of Ardashir-Khwarrah. According to Tabari and Miskawayh, at sixteen Shapur attacked them: the Iyad in Iraq, then al-Khatt, Hajar and Yamama. He moved the Taghlib, ʿAbd al-Qays, Tamim and Bakr ibn Waʾil to new lands. To stop new raids he built the “wall of the Arabs” near Hira.']],
      [['بررسی لقب: «ذوالاکتاف» عربی است، یعنی «صاحب شانه‌ها». ایرانیکا آن را «کسی که شانه‌ها را سوراخ می‌کند» معنا می‌کند و می‌گوید برگردان فارسی «هویه سنبا» است (حمزهٔ اصفهانی، مجمل‌التواریخ)، که شاید از پارسی میانهٔ *شانگ‌آهنج («شانه‌کش») آمده باشد. ستاره‌ای که پیش از واژه آمده یعنی این شکل بازسازی است، نه دیده‌شده. لقب در هیچ کتیبه یا سکهٔ ساسانی نیامده. بندهشن، متنی زرتشتی، از کندن «شانه‌های بسیار» سخن می‌گوید. پس لقب از سنت پس از ساسانیان است، اما ریشه‌ای در روایت زرتشتی هم دارد.'],
        ['Checking the epithet: Dhu’l-Aktaf is Arabic, “he of the shoulders”. Iranica renders it “he who pierces shoulders” and says the Persian form is Huya sonbā (Hamza Isfahani, Mojmal), which may render a Middle Persian *Šānag āhanj (“shoulder-puller”). The asterisk means that form is reconstructed, not attested. The epithet appears in no Sasanian inscription or coin. The Bundahišn, a Zoroastrian text, speaks of pulling out “many shoulders”. So the epithet comes from post-Sasanian tradition, but has roots in Zoroastrian lore too.']],
      [['کوچاندن قبیله‌ها و نابود کردن چاه‌ها، اگر راست باشد، جنگ با خود زندگی مردم بود، نه تنها با جنگجویان. آب در بیابان دارایی همه بود. این لشکرکشی امنیت خلیج فارس را برای شاهنشاهی تأمین کرد، اما بهای آن را دیگران پرداختند.'],
        ['Moving tribes and destroying wells, if true, was war on people’s very livelihood, not only on fighters. Water in the desert was everyone’s property. The campaign secured the Persian Gulf for the empire, but others paid its price.']],
      ['ir-shapur2', 'ir-hira'], {
        quotes: [{ text: 'he destroyed the Arabs and took the land and destroyed many Arab rulers and pulled out many number of shoulders', fa: 'تازیان را نابود کرد و سرزمین را از آنان گرفت و بسیار شاهان تازی را نابود کرد و شانه‌های بسیار برکند', ref: 'Bundahišn 33.15 (as translated in Iranica, “Šāpur II”)', source: 'ir-shapur2' }],
      }),
    sec('amida', 'آمیدا، ۳۵۹ م.', 'Amida, 359 CE',
      [['در ۳۵۹ م. شاپور با گرومباتس، شاه خیونیان، به آمیدا (دیاربکر امروزی) آمد. آمیانوس مارکلینوس، افسر رومی، درون شهر بود. شاپور با تاجی زرین به شکل سر قوچ پیش آمد. در گفت‌وگو تیر منجنیقی پسر جوان گرومباتس را کشت و جنگ با خشم آغاز شد. پس از ۷۳ روز، ایرانیان از روی تپه‌های خاکی به درون شهر ریختند.'],
        ['In 359 Shapur came to Amida (modern Diyarbakır) with Grumbates, king of the Chionitae. Ammianus Marcellinus, a Roman officer, was inside the city. Shapur rode forward wearing a golden ram’s-head crown. During the parley a ballista bolt killed Grumbates’ young son, and the fight began in anger. After 73 days the Persians broke into the city over earthen mounds.']],
      [['این گزارش شاهد عینی است، اما از درون شهر محاصره‌شده. شمار ۳۰٬۰۰۰ کشتهٔ ایرانی را آمیانوس خود «برآورد» یک تریبون رومی می‌خواند. ایرانیکا می‌گوید مردم شهر را به خوزستان کوچاندند، چون پسر گرومباتس کشته شده بود. در سال بعد دژ بزابده هم به دست شاپور افتاد.'],
        ['This is an eyewitness account, but from inside the besieged city. Ammianus himself calls the figure of 30,000 Persian dead the “reckoning” of a Roman tribune. Iranica says the townspeople were deported to Khuzestan because Grumbates’ son had been killed. The next year the fort of Bezabde fell to him as well.']],
      [['در کوچاندن جمعی، مردم شهر غنیمت جنگی به شمار می‌آمدند. برای کسانی که به خوزستان کوچانده شدند، فرقی نمی‌کرد که حق با روم بود یا با ایران: خانه و زمینشان را از دست داده بودند.'],
        ['In a mass deportation the townspeople were counted as spoils of war. For those taken to Khuzestan it made no difference whether Rome or Persia was in the right: they had lost their homes and land.']],
      ['ammianus', 'ir-shapur2'], {
        quotes: [
          { text: 'discharging a ballista, pierced both cuirass and breast of Grumbates’ son, a youth just come to manhood, who was riding at his father’s side', fa: 'با پرتاب منجنیقی، زره و سینهٔ پسر گرومباتس را شکافت؛ جوانی تازه‌بالغ که کنار پدرش می‌راند', ref: 'Ammianus 19.1.7, tr. Rolfe', source: 'ammianus' },
          { text: 'armed and unarmed alike without distinction of sex were slaughtered like so many cattle', fa: 'مسلح و بی‌سلاح، زن و مرد، بی‌تفاوت، همچون گله‌ای چارپا کشته شدند', ref: 'Ammianus 19.8.4, tr. Rolfe', source: 'ammianus' },
          { text: 'when he had invested Amida for seventy-three days with a great force of armed men, he lost 30,000 warriors, as was reckoned a little later by Discenes, a tribune and secretary', fa: 'چون آمیدا را هفتاد و سه روز با سپاهی بزرگ در محاصره داشت، سی هزار جنگجو از دست داد، چنان‌که اندکی بعد دیسکنس، تریبون و دبیر، برآورد کرد', ref: 'Ammianus 19.9.9, tr. Rolfe', source: 'ammianus' },
        ],
        photos: ['amida-walls'],
      }),
    sec('julian', 'لشکرکشی ژولیان، ۳۶۳ م.', 'Julian’s invasion, 363 CE',
      [['در بهار ۳۶۳ م. امپراتور ژولیان با سپاهی بزرگ و ناوگانی بر فرات به ایران تاخت. دژها را گرفت، از نهرملکا گذشت و پای دیوار تیسفون پیروز شد. اما شورای فرماندهان محاصره را نسنجیده دانست. ژولیان ناوگان را سوزاند و به درون خاک رفت. ایرانیان کشتزارها را آتش زدند و از دور ستون روم را آزار دادند. سپاه برگشت؛ نزدیک مرنگا نبردی بزرگ با فیل‌ها روی داد، و چند روز بعد ژولیان زخمی شد و مرد.'],
        ['In spring 363 the emperor Julian invaded Persia with a large army and a fleet on the Euphrates. He took forts, crossed the Naarmalcha and won before the walls of Ctesiphon. But the council of generals judged a siege rash. Julian burned the fleet and marched inland. The Persians burned the crops and harassed the Roman column from a distance. The army turned back; near Maranga there was a great battle with elephants, and a few days later Julian was wounded and died.']],
      [['ایرانیکا می‌گوید پایتخت تا اندازه‌ای به سبب بی‌نظمی و غارت در سپاه روم نیفتاد (لیبانیوس). سیاست زمین سوخته شاپور سپاه روم را گرسنه کرد. ائوتروپیوس، که خود در این لشکرکشی بود، می‌گوید ژولیان به دست دشمن کشته شد. نقش اردشیر دوم در طاق بستان رومی افتاده‌ای را زیر پا نشان می‌دهد که بسیاری او را ژولیان می‌دانند.'],
        ['Iranica says the capital was not taken partly because of disorder and plundering in the Roman army (Libanius). Shapur’s scorched-earth policy starved the Roman army. Eutropius, who was himself on the campaign, says Julian was killed by the enemy. Ardashir II’s relief at Taq-e Bostan shows a fallen Roman underfoot, whom many identify as Julian.']],
      [['زمین سوخته یعنی دولت کشتزار کشاورزان خود را آتش می‌زند تا دشمن گرسنه بماند. این راهبرد ایران را نجات داد، اما محصول یک سال کسانی که در آن زمین‌ها کار می‌کردند خاکستر شد. کسی از آنان نپرسید.'],
        ['Scorched earth means a state burning its own farmers’ fields so that the enemy starves. The strategy saved Persia, but a year’s harvest of those who worked that land became ash. No one asked them.']],
      ['ammianus', 'ir-shapur2', 'ir-julian', 'ir-ardashir2'], {
        quotes: [
          { text: 'the city, impregnable by its situation alone, was well defended; and, besides, it was believed that the king would soon appear with a formidable force', fa: 'شهر، که تنها به سبب جایش تسخیرناپذیر بود، به‌خوبی پاسداری می‌شد؛ و گذشته از این، گمان می‌رفت شاه به‌زودی با سپاهی سهمگین فرا رسد', ref: 'Ammianus 24.7.1, tr. Rolfe', source: 'ammianus' },
          { text: 'he gave orders that all the ships should be burned, with the exception of twelve of the smaller ones', fa: 'فرمان داد همهٔ کشتی‌ها را بسوزانند، جز دوازده کشتی کوچک‌تر', ref: 'Ammianus 24.7.4, tr. Rolfe', source: 'ammianus' },
          { text: 'the enemy, in order to torment us with hunger, set fire to the plants and the ripe grain', fa: 'دشمن، برای آن‌که ما را با گرسنگی آزار دهد، گیاهان و غلهٔ رسیده را آتش زد', ref: 'Ammianus 24.7.7, tr. Rolfe', source: 'ammianus' },
        ],
        clip: { media: battleClipFor('shapur-ii', 'julian363', 992, 462), caption: B('بازگشت ژولیان از تیسفون تا سامرا، گام‌به‌گام (طرح‌وار)', 'Julian’s retreat from Ctesiphon to Samarra, step by step (schematic)') },
        photos: ['tb-ardashir2'],
      }),
    sec('jovian', 'پیمان یووین', 'Jovian’s treaty',
      [['سپاه گرسنه یووین را امپراتور کرد. شاپور، به گفتهٔ آمیانوس، سرزمین‌هایی را خواست که می‌گفت از آنِ او بوده و ماکسیمیانوس از ایران گرفته بود. یووین پنج استان آن سوی دجله، پانزده دژ، و نصیبین، سنگار و کاسترا مائوروروم را داد، و پذیرفت که روم به ارشک، شاه ارمنستان، یاری نکند. صلحی سی‌ساله با سوگند بسته شد.'],
        ['The starving army made Jovian emperor. Shapur, as Ammianus tells it, demanded lands which he said were his and had been taken from Persia by Maximianus. Jovian gave up five provinces beyond the Tigris, fifteen forts, and Nisibis, Singara and Castra Maurorum, and agreed that Rome would not help Arshak, king of Armenia. A thirty-year peace was sworn.']],
      [['آمیانوس پیمان را «لازم اما شرم‌آور» می‌نامد و می‌گوید بهتر بود ده نبرد کنند تا یکی از این‌ها را بدهند؛ این داوری یک رومی است. ایرانیکا (کتنهوفن) می‌گوید روم با این پیمان نیمهٔ شرقی استان میان‌رودان را از دست داد. یووین با سکه‌هایش کوشید نتیجه را پیروزی نشان دهد، و ساسانیان آن را در نقش طاق بستان جاودان کردند. پیمان ارمنستان را هم برای ایران باز گذاشت.'],
        ['Ammianus calls the peace “necessary, but shameful” and says it would have been better to fight ten battles than give up any of these places; that is a Roman verdict. Iranica (Kettenhofen) says that with this treaty Rome lost the eastern half of its province of Mesopotamia. Jovian tried to present the outcome as a success on his coins, and the Sasanians immortalized it in the relief at Taq-e Bostan. The treaty also left Armenia open to Persia.']],
      [['یووین با پافشاری تنها یک چیز گرفت: مردم نصیبین و سنگار می‌توانستند شهر را ترک کنند. یعنی زمین به ایران رسید، اما مردمش حق داشتند نروند زیر فرمانی که نمی‌خواستند.'],
        ['Jovian won only one point by insisting: the people of Nisibis and Singara could leave. The land went to Persia, but its people had the right not to live under a rule they did not want.']],
      ['ammianus', 'ir-jovian', 'ir-shapur2'], {
        quotes: [
          { text: 'he required as our ransom five provinces on the far side of the Tigris: Arzanena, Moxoëna, and Zabdicena, as well as Rehimena and Corduena with fifteen fortresses, besides Nisibis, Singara and Castra Maurorum, a very important stronghold', fa: 'او پنج استان آن سوی دجله را بهای رهایی ما خواست: ارزنن، موکسوئن، زبدیکن، و نیز رهیمن و کردوئن با پانزده دژ، و گذشته از این نصیبین، سنگار و کاسترا مائوروروم، دژی بسیار مهم', ref: 'Ammianus 25.7.9, tr. Rolfe', source: 'ammianus' },
          { text: 'Nisibis and Singara should pass into control of the Persians without their inhabitants', fa: 'نصیبین و سنگار بی‌مردمانشان به دست ایرانیان برسند', ref: 'Ammianus 25.7.11, tr. Rolfe', source: 'ammianus' },
          { text: 'And so a peace of thirty years was made and consecrated by the sanctity of oaths', fa: 'و چنین صلحی سی‌ساله بسته شد و با حرمت سوگندها استوار گشت', ref: 'Ammianus 25.7.14, tr. Rolfe', source: 'ammianus' },
        ],
      }),
    sec('christians', 'آزار مسیحیان', 'The persecution of the Christians',
      [['ایرانیکا (دریایی): از ۳۳۷ م. آزار مسیحیان بالا گرفت. یک سبب این بود که روم مسیحی شده بود و مسیحیان ایران همدست دشمن دیده می‌شدند. شاپور در جنگ از آنان مالیات دوبرابر خواست. به روایت کارنامهٔ شمعون، رهبر مسیحیان، او نپذیرفت. از نام‌های شهیدان: پوسی، صنعتگر بزرگ شاپور، و دخترش مارتا.'],
        ['Iranica (Daryaee): from 337 the persecution of Christians grew. One reason was that Rome had become Christian, and the Christians of Iran were seen as collaborators with the enemy. During the war Shapur asked a double tax of them. According to the Acts of Simeon, their leader, he refused. Among the martyrs named are Posi (Pusai), Shapur’s master craftsman, and his daughter Martha.']],
      [['بیشتر آنچه می‌دانیم از کارنامه‌های شهیدان سریانی است؛ نوشته‌هایی دینی برای بزرگداشت شهیدان، نه تاریخ بی‌طرف. ایرانیکا می‌گوید در آن‌ها آزار معمولاً به گردن موبدان انداخته می‌شود. همه هم آزارگر نبودند: به روایت تاریخ اربیل، موبدی به نام پگراسپ از فرمان آزار سر باز زد، یا شاه آن فرمان را پس گرفت. درستی خود تاریخ اربیل نیز محل تردید است.'],
        ['Most of what we know comes from Syriac martyr acts; religious writings meant to honour the martyrs, not neutral history. Iranica notes that in them persecution is usually blamed on the priests. Not all were persecutors either: according to the Chronicle of Arbela, a mowbed named Pagrasp refused to order persecution, or the king cancelled the order. The Chronicle of Arbela’s own authenticity is questioned.']],
      [['مالیات دوبرابر بر یک گروه دینی یعنی دارایی مردم به سبب باورشان گرفته می‌شد. وقتی وفاداری سیاسی را با دین می‌سنجند، وجدان هر شهروند زیر بدگمانی است. این‌جا دو آزادی با هم پایمال شد: آزادی باور و امنیت دارایی.'],
        ['A double tax on one religious group meant people’s property was taken because of their faith. When political loyalty is measured by religion, every subject’s conscience is under suspicion. Two liberties were trampled together here: freedom of belief and security of property.']],
      ['ir-shapur2'], {
        quotes: [{ text: 'Simeon wants to make his followers and his people rebel against my kingdom and convert them into servants Caesar, their coreligionist', fa: 'شمعون می‌خواهد پیروان و مردمش را بر پادشاهی من بشوراند و آنان را بندگان قیصر، هم‌کیش خودشان، کند', ref: 'Acts of Simeon (tr. Brock 1982, p. 8, quoted in Iranica, “Šāpur II”)', source: 'ir-shapur2' }],
      }),
    sec('armenia', 'ارمنستان پس از پیمان', 'Armenia after the treaty',
      [['پیمان ۳۶۳ دست روم را از ارمنستان کوتاه کرد. شاپور ارشک دوم را، که همراه ژولیان شده بود، گرفت و در «دژ فراموشی» در خوزستان زندانی کرد. شهرهای آرتاشات، واغارشاپات، اروانداشات، زارهوان، زاریشات، وان و نخجوان گرفته شدند و مردمشان، از جمله خانواده‌های یهودی بسیار، کوچانده شدند. روم در ۳۶۷ پاپ، پسر ارشک، را به تخت نشاند، و ارمنیان در ۳۷۱ نزدیک باگاوان در برابر شاپور ایستادند.'],
        ['The 363 treaty kept Rome out of Armenia. Shapur seized Arshak II, who had joined Julian, and imprisoned him in the “Castle of Oblivion” in Khuzestan. The towns of Artashat, Vagharshapat, Eruandashat, Zarehawan, Zarishat, Van and Nakhchivan were taken and their people, including many Jewish families, deported. In 367 Rome put Pap, Arshak’s son, on the throne, and in 371 the Armenians held Shapur off near Bagawan.']],
      [['منبع اصلی، حماسه‌های ارمنی (فاوستوس بیزانسی)، روایتی پرشور و گاه افسانه‌وار است؛ داستان خودکشی ارشک در زندان از آن است. ایرانیکا آن را گزارش می‌کند، با «گفته‌اند».'],
        ['The main source, the Armenian Epic Histories (Faustus of Byzantium), is vivid and sometimes legendary; the story of Arshak’s suicide in prison comes from it. Iranica reports it with “is said to”.']],
      [['ارمنستان میان دو امپراتوری مانند زمینی بود که دو همسایه بر سرش دعوا دارند و از صاحبش نمی‌پرسند. بزرگان ارمنی (نخارارها) گاه با این و گاه با آن بودند تا زمین و جایگاه خود را نگه دارند.'],
        ['Armenia between the two empires was like a field two neighbours fight over without asking its owner. The Armenian nobles (naxarars) sided now with one, now with the other, to keep their own lands and rank.']],
      ['ir-shapur2', 'ammianus'], {
        quotes: [{ text: 'Arsaces, our steadfast and faithful friend should never, if he asked it, be given help against the Persians', fa: 'به ارشک، دوست استوار و وفادار ما، هرگز، حتی اگر بخواهد، در برابر ایرانیان یاری داده نشود', ref: 'Ammianus 25.7.12, tr. Rolfe', source: 'ammianus' }],
      }),
    sec('grotto', 'طاق بستان: دو شاه در ایوان کوچک', 'Taq-e Bostan: two kings in the small grotto',
      [['با شاپور دوم، نقش‌های شاهی از فارس به کرمانشاه می‌آیند. در ایوان کوچک طاق بستان دو شاه ایستاده‌اند. کتیبه‌ها آنان را شاپور دوم و پسرش شاپور سوم می‌نامند، و شاپور دوم در آن خود را پسر هرمزد و نوهٔ نرسی می‌خواند.'],
        ['With Shapur II royal reliefs move from Fars to Kermanshah. In the small grotto at Taq-e Bostan two kings stand side by side. The inscriptions name them as Shapur II and his son Shapur III, and in it Shapur II calls himself son of Ohrmazd and grandson of Narseh.']],
      [['اورلات (۲۰۱۱) می‌گوید تاج پیکر دوم با سکه‌های اردشیر دوم می‌خواند، نه شاپور سوم، و کتیبه‌ها احتمالاً بعدها افزوده شدند. پس این‌که پیکر دوم کیست محل بحث است.'],
        ['Overlaet (2011) argues that the second figure’s crown matches Ardashir II’s coins, not Shapur III’s, and that the inscriptions were probably added later. So who the second figure is remains disputed.']],
      [['کتیبه‌ای که بعدها افزوده شود، تاریخ را به سود شاه تازه بازنویسی می‌کند. همان کاری که نرسی با نقش بهرام یکم کرد.'],
        ['An inscription added later rewrites history in favour of the new king. It is the same thing Narseh did to Bahram I’s relief.']],
      ['ir-shapur2', 'overlaet'], { photos: ['tb-small'], link: { href: B('/king/ardashir-ii', '/en/king/ardashir-ii'), label: B('اردشیر دوم و نقش طاق بستان', 'Ardashir II and the Taq-e Bostan relief') } }),
  ],
  synthesis: { title: B('جمع‌بندی', 'Synthesis'), paras: {
    fa: ['شاپور دوم کودکی بود که بزرگان برای قدرت خود شاه کردند، اما شاهی شد که قدرت را پس گرفت و هفتاد سال نگه داشت. او مرز خلیج فارس را با جنگی سخت با عرب‌ها بست، روم را در آمیدا شکست داد، و در ۳۶۳ م. حملهٔ ژولیان را با زمین سوخته و صبر ناکام گذاشت. پیمان یووین نصیبین و ارمنستان را به ایران داد.', 'بهای این کامیابی را بسیاری پرداختند: قبیله‌های کوچانده، مردم آمیدا، کشاورزان میان‌رودان، مسیحیان ایران و مردم ارمنستان. منابع ما بیشتر از دشمنان یا قربانیان او هستند (آمیانوس، کارنامه‌های شهیدان، حماسه‌های ارمنی)، و این را باید در خواندن به یاد داشت.'],
    en: ['Shapur II was a child the nobles made king for their own power, but he became a king who took power back and held it for seventy years. He closed the Persian Gulf frontier with a harsh war on the Arabs, beat Rome at Amida, and in 363 defeated Julian’s invasion with scorched earth and patience. Jovian’s treaty gave Nisibis and Armenia to Persia.', 'Many paid for this success: the resettled tribes, the people of Amida, the farmers of Mesopotamia, the Christians of Iran and the people of Armenia. Most of our sources come from his enemies or his victims (Ammianus, the martyr acts, the Armenian Epic Histories), and that should be kept in mind when reading them.'],
  }, sources: ['ir-shapur2', 'ammianus', 'ir-jovian'] },
  sources: pick('ir-shapur2', 'ammianus', 'agathias', 'ir-jovian', 'ir-julian', 'ir-ardashir2', 'ir-hormozd2', 'ir-hira', 'overlaet'),
  photos: photos('coin-shapur2', 'amida-walls', 'tb-ardashir2', 'tb-small'),
  related: related(['hormizd-ii', 'هرمز دوم، پدرش', 'Hormizd II, his father'], ['ardashir-ii', 'اردشیر دوم، برادرش و جانشینش', 'Ardashir II, his brother and successor'], ['shapur-iii', 'شاپور سوم، پسرش', 'Shapur III, his son'], ['narseh', 'نرسی، پدربزرگش', 'Narseh, his grandfather']),
  wikipedia: 'https://en.wikipedia.org/wiki/Shapur_II',
}
