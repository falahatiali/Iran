/**
 * Khosrow II Parviz (590–628 CE), featured, with a map of the war of 603–628 and a schematic diagram of Nineveh (627).
 * Narrative: Encyclopaedia Iranica (Howard-Johnston “Ḵosrow II”; Harper “Art in Iran v. Sasanian”; Landau-Tasseron “Ḏū Qār”;
 * Tafażżolī “Bārbad”) and al-Ṭabarī V tr. Bosworth (1999) with his notes, paraphrased.
 * Verbatim quotes are the Iranica authors’ own English. The Shirin romance and the Barbad stories are labelled as literary tradition.
 */
import type { BattleDiagram, BattleUnit, Bi, Coord, FeaturedKing } from '../featured/types'
import { ADUR_GUSNASP, ALEXANDRIA, AMASEIA, ANCYRA, ANTIOCH, ARMENIA, CAESAREA_CAP, CHALCEDON, CIRCESIUM, CONSTANTINOPLE, CTESIPHON, DARA, DASTGERD, DHU_QAR, EDESSA, GANZAK, HIRA, JERUSALEM, LAKE_VAN, NAHRAWAN, NINEVEH, RAY, SAS, SHAHRAZUR, TAQ_E_BOSTAN, TIFLIS, URMIA, battleClipFor, clipFor, ev, note, photos, pick, related, sec } from './common'

const B = (fa: string, en: string): Bi => ({ fa, en })
const P = (id: string, fa: string, en: string, at: [number, number]): BattleUnit => ({ id: `p-${id}`, side: 'persian', kind: 'army', label: B(fa, en), at })
const R = (id: string, fa: string, en: string, at: [number, number]): BattleUnit => ({ id: `r-${id}`, side: 'greek', kind: 'army', label: B(fa, en), at })
const HIERAPOLIS: Coord = [37.95, 36.53]

const SCHEMATIC = note(
  'تاریخ‌ها و رویدادها از هاوارد-جانستون (ایرانیکا) است که بر تئوفانس و منابع ارمنی تکیه دارد. جای دقیق سپاه‌ها در میدان را نمی‌دانیم و نمودار طرح‌وار است.',
  'The dates and events follow Howard-Johnston (Iranica), who relies on Theophanes and the Armenian sources. The exact positions of the armies on the field are unknown, and the diagram is schematic.')

const nineveh: BattleDiagram = {
  id: 'nineveh',
  title: B('نینوا و دستگرد، دسامبر ۶۲۷ (طرح‌وار)', 'Nineveh and Dastgerd, December 627 (schematic)'),
  when: B('۱۲ دسامبر ۶۲۷ – ۹ ژانویهٔ ۶۲۸ م.', '12 December 627 – 9 January 628 CE'),
  sides: { persian: B('سپاه راهزاد', 'Rahzad’s army'), greek: B('هراکلیوس', 'Heraclius') },
  land: ['M0 0 L100 0 L100 60 L0 60 Z'],
  labels: [{ at: [18, 6], text: B('نینوا', 'Nineveh') }, { at: [52, 30], text: B('زاب کوچک', 'Lesser Zab') }, { at: [82, 54], text: B('دستگرد', 'Dastgerd') }],
  phases: [
    {
      id: 'shadow', title: B('سایه به سایه', 'Shadowing'),
      body: B('هراکلیوس در ۱ دسامبر از زاب بزرگ گذشت، به شمال رفت و نزدیک نینوا اردو زد. راهزاد از دور دنبالش می‌کرد و چشم‌به‌راه ۳ هزار نگهبان کمکی از پایتخت بود که نرسیدند.', 'Heraclius crossed the Great Zab on 1 December, marched north and camped near Nineveh. Rahzad shadowed him from a distance, waiting for 3,000 guardsmen from the capital who had not arrived.'),
      units: [R('heraclius', 'هراکلیوس', 'Heraclius', [20, 14]), P('rahzad', 'راهزاد', 'Rahzad', [40, 30])],
      arrows: [{ side: 'greek', path: [[36, 24], [28, 18], [20, 14]] }, { side: 'persian', path: [[52, 40], [46, 34], [40, 30]] }],
      certainty: 'probable', sources: ['ir-khosrow2'],
    },
    {
      id: 'battle', title: B('نبرد نینوا، ۱۲ دسامبر', 'The battle of Nineveh, 12 December'),
      body: B('هراکلیوس جای نبرد را خود برگزید و سپاهش از مه بامدادی آراسته بیرون آمد. ایرانیان سخت جنگیدند و کشتهٔ بسیار دادند. راهزاد و بسیاری از افسرانش کشته شدند، اما صف‌ها از هم نپاشید. پاسی از شب گذشته، به دامنهٔ کوه‌های نزدیک رفتند.', 'Heraclius chose the ground, and his army came out of the morning mist in battle order. The Persians fought hard and lost heavily. Rahzad and many of his officers were killed, but the formations did not break. In the small hours of the night they withdrew to the foothills nearby.'),
      units: [R('heraclius', 'هراکلیوس', 'Heraclius', [26, 22]), P('rahzad', 'سپاه راهزاد', 'Rahzad’s army', [34, 26])],
      arrows: [{ side: 'greek', path: [[20, 14], [24, 19], [27, 22]] }, { side: 'persian', path: [[34, 26], [40, 18], [46, 10]] }],
      certainty: 'probable', certaintyNote: SCHEMATIC.certaintyNote, sources: ['ir-khosrow2'],
    },
    {
      id: 'zab', title: B('پل‌های زاب کوچک', 'The bridges of the Lesser Zab'),
      body: B('در ۲۱ دسامبر کمکی‌ها به بازماندگان پیوستند. هراکلیوس با شتاب به جنوب رفت، دسته‌ای فرستاد تا چهار پل زاب کوچک را بگیرد و در ۲۳ دسامبر از رود گذشت. راه پایتخت باز بود.', 'On 21 December the reinforcements joined the survivors. Heraclius moved fast to the south, sent a detachment to seize the four bridges over the Lesser Zab, and crossed on 23 December. The road to the capital was open.'),
      units: [R('heraclius', 'هراکلیوس', 'Heraclius', [56, 34]), P('remnant', 'بازماندگان و نگهبانان', 'Survivors and guardsmen', [44, 12])],
      arrows: [{ side: 'greek', path: [[26, 22], [42, 28], [56, 34]] }],
      certainty: 'probable', sources: ['ir-khosrow2'],
    },
    {
      id: 'dastgerd', title: B('گریز از دستگرد', 'Flight from Dastgerd'),
      body: B('خسرو، که در کاخ دستگرد بود، همان روز با خانواده‌اش از راهی زیرزمینی بیرون رفت و گنج‌ها را بر فیل و شتر و خر به پایتخت فرستاد. هراکلیوس آهسته پیش آمد و چند روز در دستگرد ماند. در ۹ ژانویه به کانال نهروان رسید، اما ۲۰۰ فیل و پل‌های بریده او را از گذشتن بازداشتند.', 'Khosrow, who was at his palace of Dastgerd, slipped out the same day with his family by a secret tunnel and sent the treasure to the capital on elephants, camels and donkeys. Heraclius advanced slowly and stayed some days at Dastgerd. On 9 January he reached the Nahrawan canal, but 200 elephants and the cut bridges kept him from crossing.'),
      units: [R('heraclius', 'هراکلیوس', 'Heraclius', [80, 48]), P('khosrow', 'خسرو به سوی تیسفون', 'Khosrow to Ctesiphon', [92, 56]), P('remnant', 'بازماندگان', 'Survivors', [70, 40])],
      arrows: [{ side: 'greek', path: [[56, 34], [68, 42], [80, 48]] }, { side: 'persian', path: [[82, 52], [88, 55], [94, 58]] }],
      certainty: 'probable', sources: ['ir-khosrow2'],
    },
  ],
}

const JERUSALEM_NOTE = note(
  'هاوارد-جانستون (ایرانیکا) می‌نویسد سپاه ایران «در اورشلیم مداخله کرد تا جلوی کشتار یهودیان را بگیرد». روایت‌های مسیحی آن روزگار از محاصره، کشتار و غارت شهر سخن می‌گویند. آنچه بی‌گمان است: صلیب راستین برده شد و در ۶۱۴ با آیین به تیسفون رسید.',
  'Howard-Johnston (Iranica) writes that the Persian army “intervened in Jerusalem to stop a pogrom”. Christian accounts of the time speak of a siege, a massacre and a sack. What is certain: the True Cross was taken and ceremonially brought into Ctesiphon in 614.')

const EVENTS = [
  ev('accession', 590, B('تابستان ۵۹۰ م.', 'summer 590 CE'), 'admin', CTESIPHON, B('بر تخت نشستن', 'Accession'), B('بزرگان به رهبری دایی‌های خسرو، بندوی و بستام، هرمز چهارم را برکنار و کور کردند و خسرو را تاج نهادند. هرمز سپس کشته شد، دست‌کم با رضایت خاموش خسرو.', 'Nobles led by Khosrow’s uncles Bendoy and Bestam deposed and blinded Hormizd IV and crowned Khosrow. Hormizd was then put to death, at least with Khosrow’s tacit consent.'), 'secure', ['ir-khosrow2']),
  ev('flight', 590, B('پاییز ۵۹۰ م.', 'autumn 590 CE'), 'campaign', CIRCESIUM, B('گریز به روم', 'Flight to Rome'), B('بهرام چوبین کنار کانال نهروان رسید. سپاه کوچک خسرو چند روز ایستاد، سپس خسرو با سی همراه، زنانش و دایی‌هایش از راه فرات به کرکیسیون، در مرز روم، گریخت.', 'Bahram Chobin reached the Nahrawan canal. Khosrow’s small army held for some days, then Khosrow fled with a retinue of thirty, his wives and his uncles up the Euphrates to Circesium on the Roman frontier.'), 'secure', ['ir-khosrow2'], { route: [CTESIPHON, NAHRAWAN, CIRCESIUM] }),
  ev('maurice', 591, B('زمستان ۵۹۰–۵۹۱ م.', 'winter 590–591 CE'), 'admin', HIERAPOLIS, B('پیمان با موریس', 'The bargain with Maurice'), B('خسرو از هیراپولیس به امپراتور موریس نامه نوشت و خود را «پسر» او خواند. در برابر یاری، بخش‌های شمال میان‌رودان و نیمی از ارمنستان و ایبری را واگذاشت، اما دوین و تفلیس را برای خود نگاه داشت.', 'From Hierapolis Khosrow wrote to the Emperor Maurice and called himself his “son”. In return for help he gave up gains in northern Mesopotamia and about half of Armenia and Iberia, but kept Dvin and Tiflis.'), 'secure', ['ir-khosrow2'], { route: [CIRCESIUM, HIERAPOLIS] }),
  ev('restoration', 591, B('بهار ۵۹۱ م.', 'spring 591 CE'), 'battle', GANZAK, B('بازگشت با سپاه روم', 'Restored by a Roman army'), B('سپاه روم و ایرانیان هوادار خسرو از دارا به آذربایجان رفتند و بهرام را در نبردی یک‌روزه نزدیک گنزک شکست دادند. پس از آن تاج خسرو دو بال بزرگ، نشان ایزد پیروزی، گرفت.', 'The Roman army and Khosrow’s Iranian supporters marched from Dara to Azarbaijan and beat Bahram in a day-long battle near Ganzak. After this, Khosrow’s crown gained two large wings, the emblem of the god of victory.'), 'secure', ['ir-khosrow2'], { route: [HIERAPOLIS, DARA, URMIA, GANZAK] }),
  ev('bestam', 596, B('۵۹۵–۶۰۲ م.', '595–602 CE'), 'campaign', RAY, B('شورش بستام', 'Bestam’s revolt'), B('خسرو در ۵۹۵ فرمان کشتن دایی‌هایش را داد. بندوی کشته شد، اما بستام به گیلان گریخت و هشت سال شورید. خسرو او را نزدیک ری شکست داد و سرانجام با فریفتن یکی از همدستانش او را کشت.', 'In 595 Khosrow ordered his uncles’ deaths. Bendoy was killed, but Bestam escaped to Gilan and rebelled for eight years. Khosrow beat him near Ray and in the end had him murdered by suborning one of his allies.'), 'secure', ['ir-khosrow2']),
  ev('hira', 602, B('۶۰۲ م. (یا دههٔ نخست سدهٔ هفتم)', '602 CE (or the first decade of the 7th century)'), 'admin', HIRA, B('پایان شاهان حیره', 'The end of the kings of Hira'), B('خسرو نعمان سوم، شاه لخمی حیره، را برکنار کرد و کشت و پادشاهی لخمیان را برانداخت. ایاس بن قبیصه را به جای او گماشت.', 'Khosrow deposed and killed Nuʿman III, the Lakhmid king of Hira, and abolished the Lakhmid monarchy. He appointed Iyas b. Qabisa in his place.'), 'disputed', ['ir-duqar', 'tabari5', 'ir-khosrow2'], note('بازورث (یادداشت‌های طبری) و ایرانیکا تاریخ ۶۰۲ را می‌دهند. هاوارد-جانستون تنها «دههٔ نخست سدهٔ هفتم» می‌گوید و این کار را آمادگی برای جنگ با روم می‌داند، نه پیامد دشمنی شخصی.', 'Bosworth (notes to Ṭabari) and Iranica give 602. Howard-Johnston says only “the first decade of the seventh century” and sees the act as preparation for the Roman war, not the result of a personal quarrel.')),
  ev('edessa', 603, B('۶۰۳ م.', '603 CE'), 'battle', EDESSA, B('کین موریس', 'Avenging Maurice'), B('فوکاس در ۶۰۲ موریس را کشت. خسرو به نام خون‌خواهی او جنگ را آغاز کرد. بیرون ادسا پیروز شد و پسر موریس، تئودوسیوس، را زیر پشتیبانی خود گرفت.', 'Phocas killed Maurice in 602. Khosrow went to war in the name of avenging him. He won a victory outside Edessa and took Maurice’s son Theodosius under his protection.'), 'secure', ['ir-khosrow2']),
  ev('dara', 604, B('۶۰۴ م.', '604 CE'), 'battle', DARA, B('گشودن دارا', 'Dara falls'), B('دارا، سنگر بیرونی روم، پس از یک سال و نیم محاصره افتاد.', 'Dara, Rome’s outer bulwark, fell after a siege of a year and a half.'), 'secure', ['ir-khosrow2']),
  ev('dhuqar', 607, B('میان ۶۰۴ و ۶۱۱ م.', 'between 604 and 611 CE'), 'battle', DHU_QAR, B('ذوقار', 'Dhu Qar'), B('نزدیک کوفه، سپاهی از ایرانیان و تازیان هوادارشان از قبیلهٔ بکر بن وائل شکست خورد. منابع ایرانی دربارهٔ این نبرد خاموش‌اند.', 'Near Kufa, a force of Persians and their Arab allies was defeated by the Bakr b. Waʾil. The Persian sources are silent about this battle.'), 'disputed', ['ir-duqar', 'ir-khosrow2'], note('سنت عربی نبرد را در زمان پیامبر و گاه ۶۲۳/۶۲۴ می‌گذارد. پژوهشگران امروز آن را میان ۶۰۴ و ۶۱۱ می‌دانند. اهمیت نمادین آن را بعدها بزرگ کردند.', 'Arab tradition places the battle in the Prophet’s time, sometimes in 623/4. Modern scholars date it between 604 and 611. Its symbolic weight was inflated later.')),
  ev('caesarea', 611, B('۶۱۱ م.', '611 CE'), 'campaign', CAESAREA_CAP, B('گذر از فرات', 'Across the Euphrates'), B('پس از سرنگونی فوکاس به دست هراکلیوس، ایرانیان آخرین خط دفاع روم را شکستند و قیصریهٔ کاپادوکیه را گرفتند. خسرو سه فرستادهٔ هراکلیوس را کشت تا راه گفت‌وگو را ببندد.', 'After Heraclius overthrew Phocas, the Persians broke Rome’s innermost defences and took Caesarea in Cappadocia. Khosrow executed Heraclius’ three ambassadors to shut the door on talks.'), 'secure', ['ir-khosrow2'], { route: [EDESSA, CAESAREA_CAP] }),
  ev('antioch', 613, B('۶۱۲–۶۱۳ م.', '612–613 CE'), 'battle', ANTIOCH, B('انطاکیه و شکست هراکلیوس', 'Antioch, and Heraclius beaten'), B('ایرانیان در ۶۱۲ انطاکیه را گرفتند و به دریای مدیترانه رسیدند. در ۶۱۳ سپاهی را که هراکلیوس خود فرمان می‌داد شکست دادند و سوریه را گرفتند.', 'The Persians took Antioch in 612 and reached the Mediterranean. In 613 they defeated an army led by Heraclius in person and occupied Syria.'), 'secure', ['ir-khosrow2'], { route: [EDESSA, ANTIOCH] }),
  ev('jerusalem', 614, B('۶۱۴ م.', '614 CE'), 'battle', JERUSALEM, B('اورشلیم و صلیب راستین', 'Jerusalem and the True Cross'), B('سپاه ایران به اورشلیم درآمد. صلیب راستین، گرامی‌ترین یادگار مسیحیان، به تیسفون برده شد. خسرو نخست به یهودیان اجازهٔ سکونت در شهر داد، اما دو سال بعد در برابر مخالفت مسیحیان آن را پس گرفت.', 'The Persian army entered Jerusalem. The True Cross, the most venerated Christian relic, was taken to Ctesiphon. Khosrow first let Jews settle in the city, but two years later reversed this in the face of Christian opposition.'), 'disputed', ['ir-khosrow2'], { ...JERUSALEM_NOTE, route: [ANTIOCH, JERUSALEM] }),
  ev('chalcedon', 615, B('۶۱۵ م.', '615 CE'), 'campaign', CHALCEDON, B('روبه‌روی قسطنطنیه', 'Facing Constantinople'), B('سپاه ایران از آسیای کوچک گذشت و در کرانهٔ آسیایی بسفر، روبه‌روی قسطنطنیه، ایستاد. سنای روم بی‌هیچ شرطی خواستار صلح شد، اما خسرو فرستادگان را زندانی کرد و جنگ را برای برانداختن روم ادامه داد.', 'A Persian army crossed Asia Minor and stood on the Asian shore of the Bosporus, facing Constantinople. The Roman Senate sued for peace without conditions, but Khosrow interned the envoys and fought on to destroy Rome.'), 'secure', ['ir-khosrow2'], { route: [CAESAREA_CAP, ANCYRA, CHALCEDON] }),
  ev('egypt', 619, B('۶۱۹–۶۲۰ م.', '619–620 CE'), 'campaign', ALEXANDRIA, B('گشودن مصر', 'The conquest of Egypt'), B('دو سردار بزرگ خسرو، شهربراز و شاهین، به مصر تاختند و اسکندریه را گرفتند. تا پایان ۶۲۰ همهٔ مصر در دست ایران بود، نخستین بار از روزگار هخامنشیان.', 'Khosrow’s two great generals, Shahrbaraz and Shahen, invaded Egypt and took Alexandria. By the end of 620 all Egypt was in Persian hands, for the first time since the Achaemenids.'), 'secure', ['ir-khosrow2'], { route: [JERUSALEM, ALEXANDRIA] }),
  ev('ancyra', 623, B('۶۲۲–۶۲۳ م.', '622–623 CE'), 'campaign', ANCYRA, B('آنکورا و رودس', 'Ancyra and Rhodes'), B('ایرانیان آنکورا را در آسیای کوچک و جزیرهٔ رودس را در دریا گرفتند.', 'The Persians took Ancyra in Asia Minor and, by sea, the island of Rhodes.'), 'secure', ['ir-khosrow2']),
  ev('heraclius', 624, B('۶۲۴ م.', '624 CE'), 'campaign', ADUR_GUSNASP, B('یورش هراکلیوس', 'Heraclius strikes back'), B('هراکلیوس با سپاهی کوچک و تند از قیصریه به آذربایجان تاخت. سپاه بزرگ خسرو پراکنده شد و خود به زاگرس گریخت. رومیان آتشکدهٔ آذرگشنسپ را غارت کردند و آبگیر مقدسش را آلودند.', 'Heraclius drove from Caesarea into Azarbaijan with a small, fast army. Khosrow’s great army scattered and he fled into the Zagros. The Romans sacked the fire temple of Adur Gushnasp and polluted its sacred pool.'), 'secure', ['ir-khosrow2'], { route: [CAESAREA_CAP, ARMENIA, GANZAK, ADUR_GUSNASP] }),
  ev('taq', 626, B('پیش از ۶۲۸ م.', 'before 628 CE'), 'building', TAQ_E_BOSTAN, B('ایوان بزرگ طاق بستان', 'The large grotto of Taq-e Bostan'), B('ایوانی در سنگ کنده شد، با صحنهٔ دیهیم‌ستانی، سواری زره‌پوش و دو شکارگاه. شکار گوزن نیمه‌کاره ماند.', 'A vaulted hall was cut into the rock, with an investiture, an armoured horseman and two hunting scenes. The deer hunt was left unfinished.'), 'disputed', ['ir-sasart', 'ir-khosrow2'], note('بیشتر پژوهشگران ایوان را از خسرو دوم می‌دانند. برخی آن را از روزگار پیروز و یکی از روزگار خسرو یکم دانسته‌اند (هارپر، ایرانیکا).', 'Most scholars attribute the grotto to Khosrow II. Some have argued for the reign of Peroz, and one for Khosrow I (Harper, Iranica).')),
  ev('amaseia', 626, B('تابستان ۶۲۶ م.', 'summer 626 CE'), 'battle', AMASEIA, B('شکست شاهین', 'Shahen destroyed'), B('سپاه تازهٔ شاهین نزدیک آماسیا به دست رومیان نابود شد. شاهین پس از نبرد مرد و خسرو فرمان داد پیکرش را مومیایی کنند و نزد او آورند تا کیفر ببیند.', 'Shahen’s new army was destroyed by the Romans near Amaseia. Shahen died after the battle, and Khosrow had his body embalmed and brought to him for punishment.'), 'secure', ['ir-khosrow2'], { route: [ARMENIA, AMASEIA] }),
  ev('constantinople', 626, B('ژوئیه–اوت ۶۲۶ م.', 'July–August 626 CE'), 'battle', CONSTANTINOPLE, B('محاصرهٔ قسطنطنیه', 'The siege of Constantinople'), B('شهربراز از دریاچهٔ وان تا کالسدون آمد. آوارها، هم‌پیمانان خسرو، با حدود ۸۰ هزار تن ده روز قسطنطنیه را از سوی اروپا کوبیدند. یورش بزرگ ۶ و ۷ اوت شکست خورد و قایق‌های رومی نگذاشتند ایرانیان از بسفر بگذرند.', 'Shahrbaraz marched from Lake Van to Chalcedon. The Avars, Khosrow’s allies, with some 80,000 men, pounded Constantinople from the European side for ten days. The great assault of 6–7 August failed, and Roman boats kept the Persians from crossing the Bosporus.'), 'secure', ['ir-khosrow2'], { route: [LAKE_VAN, CAESAREA_CAP, ANCYRA, CHALCEDON] }),
  ev('tiflis', 627, B('۶۲۷ م.', '627 CE'), 'battle', TIFLIS, B('ترکان و رومیان در تفلیس', 'Turks and Romans at Tiflis'), B('سپاه بزرگ ترکان دربند را گرفت. هراکلیوس و یبغو خاقان بیرون تفلیس دیدار کردند و شهر را محاصره کردند.', 'A great Turkish army stormed Darband. Heraclius and the yabghu khagan met outside Tiflis and besieged the city.'), 'secure', ['ir-khosrow2']),
  ev('nineveh', 627, B('۱۲ دسامبر ۶۲۷ م.', '12 December 627 CE'), 'battle', NINEVEH, B('نبرد نینوا', 'The battle of Nineveh'), B('هراکلیوس از ۱۶ اکتبر از زاگرس گذشت و به نینوا رسید. در ۱۲ دسامبر سپاه راهزاد را شکست داد. راهزاد کشته شد و راه جنوب باز شد.', 'From 16 October Heraclius crossed the Zagros and reached Nineveh. On 12 December he defeated Rahzad’s army. Rahzad was killed and the road south lay open.'), 'secure', ['ir-khosrow2'], { route: [TIFLIS, URMIA, SHAHRAZUR, NINEVEH] }),
  ev('dastgerd', 627, B('۲۳ دسامبر ۶۲۷ م.', '23 December 627 CE'), 'campaign', DASTGERD, B('گریز از دستگرد', 'Flight from Dastgerd'), B('خسرو از راهی زیرزمینی از کاخ دستگرد گریخت و گنج‌ها را به پایتخت فرستاد. هراکلیوس کاخ را گرفت.', 'Khosrow fled his palace at Dastgerd by a secret tunnel and sent the treasure to the capital. Heraclius took the palace.'), 'secure', ['ir-khosrow2'], { route: [NINEVEH, DASTGERD] }),
  ev('nahrawan', 628, B('۹ ژانویهٔ ۶۲۸ م.', '9 January 628 CE'), 'battle', NAHRAWAN, B('ایستادگی در نهروان', 'The stand at the Nahrawan'), B('بازماندگان سپاه با ۲۰۰ فیل کنار کانال نهروان ایستادند و پل‌ها را بریدند. هراکلیوس نگذشت و به شهرزور بازگشت.', 'The remnant army with 200 elephants held the Nahrawan canal and cut the bridges. Heraclius did not cross and turned back to Shahrazur.'), 'secure', ['ir-khosrow2'], { route: [DASTGERD, NAHRAWAN] }),
  ev('death', 628, B('۲۳–۲۸ فوریهٔ ۶۲۸ م.', '23–28 February 628 CE'), 'admin', CTESIPHON, B('برکناری و مرگ', 'Deposition and death'), B('در شب ۲۳ به ۲۴ فوریه، افسران و بزرگان، پسرش شیرویه را شاه خواندند. خسرو در باغ پنهان شد، گرفتار شد و چهار روز با نان و آب در گنج‌خانه ماند. در ۲۸ فوریه کشته شد.', 'On the night of 23–24 February officers and nobles proclaimed his son Shiroy king. Khosrow hid in a garden, was caught, and was held four days on bread and water in the treasury. On 28 February he was killed.'), 'secure', ['ir-khosrow2', 'ir-kawad2']),
]

export const khosrowII: FeaturedKing = {
  slug: 'khosrow-ii', name: B('خسرو دوم (پرویز)', 'Khosrow II Parviz'), dynastyName: SAS,
  reign: B('۵۹۰–۶۲۸ م.', '590–628 CE'),
  title: B('خسرو پرویز؛ تا مصر و قسطنطنیه، و سقوطی ناگهانی', 'Khosrow Parviz: to Egypt and Constantinople, and a sudden fall'),
  lede: B(
    'خسرو دوم، نوهٔ خسرو انوشیروان، ۳۸ سال شاه بود. تاجش را از دست داد و با سپاه روم پس گرفت. ده سال بعد به خون‌خواهی موریس به روم تاخت و سوریه، اورشلیم و مصر را گرفت و تا کرانهٔ بسفر رسید. سپس هراکلیوس به دل ایران تاخت. سرانجام خود ایرانیان او را برکنار کردند و کشتند. داستان او و شیرین و رامشگرش باربد در ادب فارسی زنده ماند.',
    'Khosrow II, grandson of Khosrow Anushirvan, reigned for 38 years. He lost his throne and won it back with a Roman army. Ten years later he invaded Rome to avenge Maurice, took Syria, Jerusalem and Egypt, and reached the shore of the Bosporus. Then Heraclius struck into the heart of Iran. In the end his own people deposed and killed him. His story, with Shirin and his minstrel Barbad, lived on in Persian literature.'),
  stats: [{ n: B('۳۸', '38'), l: B('سال پادشاهی', 'years of reign') }, { n: B('۶۱۹', '619'), l: B('گشودن مصر', 'Egypt taken') }, { n: B('۱۰', '10'), l: B('روز محاصرهٔ قسطنطنیه', 'days of the siege of Constantinople') }],
  mapTitle: B('نقشهٔ متحرک: از کرکیسیون تا اسکندریه و قسطنطنیه', 'Animated map: from Circesium to Alexandria and Constantinople'),
  span: [590, 628],
  events: EVENTS,
  campaign: {
    id: 'reign',
    title: B('خسرو پرویز، گام‌به‌گام (۵۹۰–۶۲۸ م.)', 'Khosrow Parviz, step by step (590–628 CE)'),
    intro: {
      fa: ['گریز، بازگشت و جنگ بزرگ ۶۰۳–۶۲۸ به روایت هاوارد-جانستون (ایرانیکا). راه‌ها طرح‌وارند. رویدادهای اورشلیم، تاریخ ذوقار و سازندهٔ طاق بستان محل بحث است. نمودار گام‌به‌گام نینوا و دستگرد زیر نقشه آمده است.'],
      en: ['The flight, the restoration and the great war of 603–628 as told by Howard-Johnston (Iranica). The routes are schematic. The events at Jerusalem, the date of Dhu Qar and the maker of Taq-e Bostan are disputed. A step-by-step diagram of Nineveh and Dastgerd is below the map.'],
    },
    events: EVENTS, span: [590, 628], view: [26, 28, 52, 44],
    places: [
      { name: B('تیسفون', 'Ctesiphon'), c: CTESIPHON, dy: 1.3 }, { name: B('قسطنطنیه', 'Constantinople'), c: CONSTANTINOPLE, dy: -1.3 }, { name: B('اسکندریه', 'Alexandria'), c: ALEXANDRIA, dy: 1.3 },
      { name: B('اورشلیم', 'Jerusalem'), c: JERUSALEM, left: true }, { name: B('انطاکیه', 'Antioch'), c: ANTIOCH, left: true }, { name: B('نینوا', 'Nineveh'), c: NINEVEH, left: true },
      { name: B('گنزک', 'Ganzak'), c: GANZAK, dy: -1.3 }, { name: B('حیره', 'Hira'), c: HIRA, left: true, dy: 1.3 }, { name: B('آنکورا', 'Ancyra'), c: ANCYRA, dy: 1.3 },
    ],
    clip: clipFor('khosrow-ii'),
    battles: [nineveh],
  },
  shareImage: '/media/khosrow-ii/reign-en.png',
  dossier: [
    sec('flight', 'گریز به روم و بازگشت', 'Flight to Rome and restoration',
      [['در ۵۹۰ بهرام چوبین شورید. بزرگان به رهبری بندوی و بستام، دایی‌های خسرو، هرمز چهارم را برکنار و کور کردند و خسرو را تاج نهادند. چند روز بعد بهرام به نهروان رسید و خسرو به روم گریخت. از هیراپولیس به امپراتور موریس نامه نوشت، خود را «پسر» او خواند و در برابر یاری، نیمی از ارمنستان و ایبری را واگذاشت. در بهار ۵۹۱ سپاه روم و هوادارانش بهرام را نزدیک گنزک شکست دادند.'],
        ['In 590 Bahram Chobin rebelled. Nobles led by Bendoy and Bestam, Khosrow’s uncles, deposed and blinded Hormizd IV and crowned Khosrow. Days later Bahram reached the Nahrawan and Khosrow fled to Rome. From Hierapolis he wrote to the Emperor Maurice, called himself his “son”, and in return for help gave up about half of Armenia and Iberia. In spring 591 the Roman army and his supporters beat Bahram near Ganzak.']],
      [['هاوارد-جانستون می‌گوید نقش خسرو در کور کردن و کشتن پدرش روشن نیست. روایت رسمی او را در آن روزها در آذربایجان می‌گذارد تا از آن دور بماند. «پرویز» یعنی «پیروز»؛ بال‌های تاجش پس از گنزک پدید آمد. پنج سال بعد او دایی‌هایش را هم کشت.'],
        ['Howard-Johnston says Khosrow’s part in his father’s blinding and death is unclear. The official version puts him in Azarbaijan at the time, to keep him clear of it. “Parviz” means “victorious”; the wings on his crown appeared after Ganzak. Five years later he had his uncles killed too.']],
      [['شاه تاجش را با سپاه بیگانه و بهای سرزمین پس گرفت. وقتی قدرت به نام «خون» به ارث می‌رسد و هیچ قانونی آن را محدود نمی‌کند، حتی پدر و دایی هم امان ندارند. این برداشت ماست.'],
        ['The king won back his crown with a foreign army and at the price of territory. When power passes by “blood” and no law limits it, not even a father or an uncle is safe. This is our reading.']],
      ['ir-khosrow2', 'ir-bahram6'], {
        photos: ['coin-khosrow2-590'],
        quotes: [{ text: 'He is a giant figure who towers over the Middle East in the last few decades before the coming of Islam.', fa: 'او چهره‌ای غول‌آساست که در واپسین دهه‌های پیش از آمدن اسلام بر خاورمیانه سایه افکنده است.', ref: 'J. Howard-Johnston, “Ḵosrow II”, Encyclopaedia Iranica', source: 'ir-khosrow2' }],
      }),
    sec('war', 'جنگ بزرگ ۶۰۳–۶۲۸', 'The great war of 603–628',
      [['در ۶۰۲ فوکاس موریس را کشت. خسرو به نام خون‌خواهی او و با پسرش تئودوسیوس جنگ را آغاز کرد. دارا در ۶۰۴، ادسا در ۶۰۹، قیصریه در ۶۱۱ و انطاکیه در ۶۱۲ افتاد. در ۶۱۴ اورشلیم گرفته شد و صلیب راستین به تیسفون رفت. در ۶۱۵ سپاه ایران روبه‌روی قسطنطنیه ایستاد و سنای روم خواستار صلح شد. خسرو نپذیرفت. در ۶۱۹ مصر گرفته شد. از ۶۲۴ هراکلیوس به آذربایجان تاخت و آذرگشنسپ را غارت کرد. در ۶۲۶ محاصرهٔ قسطنطنیه با آوارها شکست خورد و سپاه شاهین نابود شد.'],
        ['In 602 Phocas killed Maurice. Khosrow went to war in the name of avenging him, with Maurice’s son Theodosius at his side. Dara fell in 604, Edessa in 609, Caesarea in 611 and Antioch in 612. In 614 Jerusalem was taken and the True Cross went to Ctesiphon. In 615 a Persian army stood facing Constantinople and the Roman Senate sued for peace. Khosrow refused. In 619 Egypt was taken. From 624 Heraclius struck into Azarbaijan and sacked Adur Gushnasp. In 626 the siege of Constantinople with the Avars failed, and Shahen’s army was destroyed.']],
      [['هاوارد-جانستون می‌گوید در ۶۱۵ خسرو به هدف اعلام‌شده‌اش رسیده بود، اما راه برانداختن کامل روم را برگزید؛ شاید برای آن‌که در برابر ترکان در شمال و شرق، همهٔ سرزمین‌های یکجانشین زیر یک فرمان باشند. منابع ایرانی، و شاهنامه، این جنگ را تقریباً نادیده گرفته‌اند. رویدادهای اورشلیم محل بحث است: هاوارد-جانستون از «مداخله برای جلوگیری از کشتار» سخن می‌گوید و روایت‌های مسیحی از محاصره و غارت.'],
        ['Howard-Johnston says that by 615 Khosrow had reached his declared war aim but chose to destroy Rome outright; perhaps so that all the settled lands would stand under one ruler against the Turks in the north and east. The Persian sources, the Shahnameh among them, almost ignore this war. The events at Jerusalem are disputed: Howard-Johnston speaks of an intervention “to stop a pogrom”, Christian accounts of a siege and a sack.']],
      [['۲۴ سال جنگ را مالیات‌دهندگان پرداختند. هاوارد-جانستون می‌گوید خانواده‌های سپاهی از کشته‌ها و سال‌ها خدمت دور، بزرگان از خودکامگی شاه، بازرگانان از بسته شدن راه کالا و همه از مالیات سنگین‌تر گله داشتند. بازرگانی آزاد و امنیت مال، نخستین قربانیان جنگ‌های بی‌پایان‌اند.'],
        ['Twenty-four years of war were paid for by the taxpayers. Howard-Johnston says the military families complained of the losses and long years on distant fronts, the nobles of the king’s autocracy, the merchants of the blocking of trade, and everyone of rising taxes. Free trade and the security of property are the first victims of endless wars.']],
      ['ir-khosrow2'], {
        photos: ['coin-khosrow2-facing', 'takht-soleyman'],
        quotes: [{ text: 'Ḵosrow had gained far more than he could have dreamed of when he attacked in 603.', fa: 'خسرو بسیار بیش از آنچه در ۶۰۳، هنگام حمله، در خواب می‌دید به دست آورده بود.', ref: 'J. Howard-Johnston, “Ḵosrow II”, Encyclopaedia Iranica', source: 'ir-khosrow2' }],
      }),
    sec('nineveh', 'نینوا و دستگرد، ۶۲۷–۶۲۸', 'Nineveh and Dastgerd, 627–628',
      [['در ۶۲۷ ترکان دربند را گرفتند و هراکلیوس با یبغو خاقان تفلیس را محاصره کرد. در پاییز هراکلیوس به جنوب پیچید و از ۱۶ اکتبر از زاگرس گذشت. در ۱۲ دسامبر نزدیک نینوا سپاه راهزاد را شکست داد. در ۲۳ دسامبر از زاب کوچک گذشت و خسرو از کاخ دستگرد گریخت. در ۹ ژانویه ۲۰۰ فیل و پل‌های بریدهٔ نهروان او را از پایتخت دور نگاه داشتند.'],
        ['In 627 the Turks stormed Darband and Heraclius besieged Tiflis with the yabghu khagan. In autumn Heraclius turned south and crossed the Zagros from 16 October. On 12 December, near Nineveh, he defeated Rahzad’s army. On 23 December he crossed the Lesser Zab and Khosrow fled his palace at Dastgerd. On 9 January 200 elephants and the cut bridges of the Nahrawan kept him from the capital.']],
      [['هاوارد-جانستون می‌گوید نینوا نبردی قطعی بود، اما نه به این دلیل که سپاه ایران نابود شد؛ صف‌ها نشکست. ضربهٔ واقعی سیاسی بود: هراکلیوس از دستگرد پیشنهاد صلح داد «پیش از آن‌که آتش همه چیز را بسوزاند» و خسرو نپذیرفت، و این شکاف میان بزرگان را ژرف‌تر کرد. نمودار زیر طرح‌وار است.'],
        ['Howard-Johnston says Nineveh was decisive, but not because the Persian army was destroyed; its formations held. The real blow was political: from Dastgerd Heraclius offered peace “before the fire consumes everything”, Khosrow refused, and this deepened the rifts among the elite. The diagram below is schematic.']],
      [['خسرو از دستگرد گریخت، اما گنج‌هایش را با خود برد. شاهی که سرزمین را بی‌دفاع می‌گذارد و گنج را نجات می‌دهد، به رعایا نشان می‌دهد که دولت برای چه کسی است.'],
        ['Khosrow fled Dastgerd but took his treasure with him. A king who leaves the land undefended and saves the treasure shows his subjects whom the state is for.']],
      ['ir-khosrow2'], {
        clip: { media: battleClipFor('khosrow-ii', 'nineveh', 992, 454), caption: B('نینوا و دستگرد، گام‌به‌گام (طرح‌وار)', 'Nineveh and Dastgerd, step by step (schematic)') },
      }),
    sec('hira', 'نعمان، حیره و ذوقار', 'Nuʿman, Hira and Dhu Qar',
      [['شاهان لخمی حیره از سدهٔ سوم مرز تازیان را برای ساسانیان نگاه می‌داشتند. خسرو در ۶۰۲ نعمان سوم را زندانی کرد و کشت و پادشاهی لخمیان را برانداخت. ایاس بن قبیصه، از قبیلهٔ طیء، جای او را گرفت. چندی بعد، نزدیک کوفه، سپاهی از ۲ هزار ایرانی و ۳ هزار تازی هوادار در ذوقار از قبیلهٔ بکر بن وائل (شیبان) شکست خورد.'],
        ['From the third century the Lakhmid kings of Hira had guarded the Arab frontier for the Sasanians. In 602 Khosrow imprisoned and killed Nuʿman III and abolished the Lakhmid monarchy. Iyas b. Qabisa of the Tayyiʾ took his place. Some years later, near Kufa, a force of 2,000 Persians and 3,000 allied Arabs was beaten at Dhu Qar by the Bakr b. Waʾil (Shayban).']],
      [['دو روایت عربی هست. در روایت ابوعبیده، نعمان دخترش را به خسرو نداد و در زندان مرد. در روایت ابن کلبی، که پژوهشگران ترجیح می‌دهند، دعوا بر سر گروگان‌ها و قیس بن مسعود بود. منابع ایرانی دربارهٔ ذوقار خاموش‌اند. تاریخ نبرد میان ۶۰۴ و ۶۱۱ است، نه ۶۲۳/۶۲۴ که سنت می‌گوید، و اهمیت نمادینش را بعدها بزرگ کردند. هاوارد-جانستون برانداختن لخمیان را سیاستی سنجیده برای جنگ روم می‌داند، نه پیامد دشمنی شخصی.'],
        ['There are two Arab versions. In Abu ʿUbayda’s, Nuʿman refused Khosrow his daughter and died in prison. In Ibn al-Kalbi’s, which scholars prefer, the quarrel was over hostages and Qays b. Masʿud. The Persian sources are silent about Dhu Qar. The battle dates between 604 and 611, not 623/4 as tradition says, and its symbolic weight was inflated later. Howard-Johnston sees the abolition of the Lakhmids as a deliberate policy for the Roman war, not the result of a personal quarrel.']],
      [['خسرو یک دیوار زنده، یعنی هم‌پیمانانی که مرز را با سود خود نگاه می‌داشتند، را با فرمانبرداری مستقیم عوض کرد. سی سال بعد، همین مرز بی‌پاسبان راه سپاهیان عرب شد. این پیوند را بسیاری از پژوهشگران دیده‌اند، اما سنجیدن وزن آن دشوار است.'],
        ['Khosrow replaced a living wall, allies who guarded the frontier for their own gain, with direct obedience. Thirty years later this unguarded frontier became the Arab armies’ road. Many scholars have seen this link, but its weight is hard to measure.']],
      ['ir-duqar', 'tabari5', 'ir-khosrow2']),
    sec('taq', 'ایوان بزرگ طاق بستان', 'The large grotto of Taq-e Bostan',
      [['در طاق بستان، نزدیک کرمانشاه، ایوانی بزرگ در سنگ کنده شد. بر دیوار پشتی، شاه میان اهورامزدا و آناهیتا حلقهٔ شاهی می‌گیرد. زیر آن سواری زره‌پوش با نیزه و سپر ایستاده است. بر دیوارهای کناری دو شکارگاه است: شکار گراز در نیزار، با شاه در قایق، و شکار گوزن در باغ شاهی که نیمه‌کاره ماند. هاوارد-جانستون می‌گوید کار با برگشتن بخت جنگ ناگهان ایستاد؛ همان‌گونه که در بیستون و نقش رستم سطح‌های آماده خالی ماندند.'],
        ['At Taq-e Bostan, near Kermanshah, a large vaulted hall was cut into the rock. On the back wall the king receives the ring of kingship between Ohrmazd and Anahita. Below stands an armoured horseman with lance and shield. On the side walls are two hunts: a boar hunt in the marshes, with the king in a boat, and a deer hunt in a royal park, left unfinished. Howard-Johnston says the work stopped suddenly when the tide of war turned, just as prepared surfaces at Bisotun and Naqsh-e Rostam stayed blank.']],
      [['سازنده محل بحث است. بیشتر پژوهشگران ایوان را از خسرو دوم می‌دانند. برخی آن را از روزگار پیروز و یکی از روزگار خسرو یکم دانسته‌اند. هویت سوار هم روشن نیست: شاید خود شاه است، شاید «فروهر» یا روان نگهبان او. هارپر می‌گوید معلوم نیست هر سه بخش هم‌زمان ساخته شده باشند.'],
        ['The maker is disputed. Most scholars attribute the grotto to Khosrow II. Some have argued for the reign of Peroz, and one for Khosrow I. The horseman’s identity is also unclear: perhaps the king himself, perhaps his fravashi or guardian spirit. Harper says it is not known whether all three parts were made at the same time.']],
      [['شکار گراز جامه‌ها، پارچه‌ها و ابزار را با جزئیات نشان می‌دهد. این بازمانده‌ای کم‌یاب از کار دست صنعتگران است، کسانی که نامشان نماند اما هنرشان ماند.'],
        ['The boar hunt shows clothes, textiles and gear in fine detail. It is a rare survival of craftsmen’s work, people whose names were lost but whose skill remains.']],
      ['ir-sasart', 'ir-khosrow2'], {
        photos: ['tb-khosrow2', 'tb-boar'],
        quotes: [{ text: 'The rock cut monument at Ṭāq-e Bostān, the last attributable to the Sasanian period, is a magnificent expression of royal authority.', fa: 'یادمان سنگی طاق بستان، واپسین اثری که می‌توان به دورهٔ ساسانی نسبت داد، بیانی باشکوه از اقتدار شاهی است.', ref: 'P. O. Harper, “Art in Iran v. Sasanian art”, Encyclopaedia Iranica (1986)', source: 'ir-sasart' }],
      }),
    sec('shirin', 'شیرین', 'Shirin',
      [['شیرین، زنی مسیحی از خوزستان، پرنفوذترین همسر خسرو بود. نزدیک کاخ تیسفون کلیسا و دیری ساخت و از خزانه برای کشیشان مزد گرفت. خسرو باردار شدن شیرین را از یاری سرگیس مقدس دانست. شیرین پسرش مردانشاه را جانشین کرد و شیرویه، پسر همسر دیگر خسرو، را از دربار راند.'],
        ['Shirin, a Christian woman from Khuzestan, was Khosrow’s most influential wife. She built a church and a monastery near the palace at Ctesiphon and obtained salaries for the clergy from the treasury. Khosrow credited St Sergius with her conceiving. Shirin made her son Mardanshah heir and pushed Shiroy, the son of another wife, out of the court.']],
      [['تبار شیرین روشن نیست: یک تاریخچهٔ سریانی او را آرامی از نزدیک بصره می‌خواند. داستان مریم، دختر موریس و همسر رومی خسرو، را هاوارد-جانستون نادرست و بازورث «بسیار مشکوک» می‌داند. نظامی بعدها شیرین را شاهزاده‌ای ارمنی کرد.'],
        ['Shirin’s origin is unclear: a Syriac chronicle calls her an Aramaean from near later Basra. The story of Maria, Maurice’s daughter and Khosrow’s Roman wife, Howard-Johnston calls false and Bosworth “very dubious”. Nezami later made Shirin an Armenian princess.']],
      [['شیرین با پول خزانه کلیسا ساخت و جانشینی را به سود پسرش گرداند. در دربار خودکامه، نزدیکی به شاه بزرگ‌ترین سرمایه بود. همین رقابت بر سر جانشینی بعدها به کشتار برادران انجامید.'],
        ['Shirin built churches with treasury money and turned the succession to her son. At an autocratic court, nearness to the king was the greatest capital. This contest over the succession later ended in the massacre of the brothers.']],
      ['ir-khosrow2', 'tabari5'], {
        folk: {
          title: B('روایت ادبی: خسرو و شیرین و فرهاد', 'Literary tradition: Khosrow, Shirin and Farhad'),
          story: {
            fa: ['در منظومهٔ نظامی، خسرو و شیرین پیش از پادشاهی خسرو دلداده می‌شوند و سال‌ها از هم دور می‌مانند. فرهاد سنگتراش، که عاشق شیرین است، برای رسیدن به او کوه بیستون را می‌کند. خسرو خبر دروغ مرگ شیرین را به او می‌رساند و فرهاد از غم می‌میرد. سرانجام خسرو و شیرین به هم می‌رسند. پس از کشته شدن خسرو، شیرین بر گور او خود را می‌کشد.'],
            en: ['In Nezami’s poem, Khosrow and Shirin fall in love before Khosrow is king and are kept apart for years. Farhad the stonecutter, who loves Shirin, cuts into Mount Bisotun to win her. Khosrow sends him false news of her death and Farhad dies of grief. At last Khosrow and Shirin are united. After Khosrow is killed, Shirin takes her own life at his tomb.'],
          },
          origin: {
            fa: ['این روایت ادبی است، نه تاریخ. شاهنامه دیدار دوبارهٔ خسرو و شیرین را از «رمان خسرو و شیرین» برگرفت و نظامی در سدهٔ دوازدهم آن را به منظومه درآورد. افسانهٔ فرهاد بعدها به سنگ‌های نیمه‌کارهٔ بیستون و طاق بستان پیوند خورد (سوچک، به نقل هارپر).'],
            en: ['This is a literary tradition, not history. The Shahnameh took the reunion of Khosrow and Shirin from the “Romance of Khosrow and Shirin”, and Nezami turned it into a poem in the twelfth century. The Farhad legend was later tied to the unfinished rock-work at Bisotun and Taq-e Bostan (Soucek, cited by Harper).'],
          },
          sources: ['ir-khosrow2', 'ir-sasart'],
        },
      }),
    sec('barbad', 'باربد', 'Barbad',
      [['باربد رامشگر دربار خسرو بود. بیشتر منابع او را از مرو می‌دانند؛ سنتی دیرتر او را از جهرم می‌خواند. نام بسیاری از آهنگ‌ها و دستان‌های او مانده است: به گفتهٔ سنت، هفت «خسروانی»، سی لحن (که نظامی نام می‌برد) و ۳۶۰ دستان.'],
        ['Barbad was the minstrel of Khosrow’s court. Most sources make him a native of Marv; a later tradition says Jahrom. The names of many of his tunes and melodies survive: by tradition, seven “Khosravani” modes, thirty airs (which Nezami names) and 360 melodies.']],
      [['این شمارها و نام‌ها از منابع دوران اسلامی، مانند نظامی، رسیده‌اند و صدها سال پس از باربد نوشته شده‌اند. هیچ نت یا آوایی از او نمانده است.'],
        ['These numbers and names reach us through Islamic-era sources such as Nezami, written centuries after Barbad. No notation or sound of his survives.']],
      [['باربد هنر خود را در بازاری به دربار فروخت که تنها یک خریدار داشت. در چنین بازاری، رسیدن به شاه از راه هنر، و دور ماندن از رقیب، با بخت و حیله بستگی داشت.'],
        ['Barbad sold his art in a market with a single buyer, the court. In such a market, reaching the king through one’s art, and getting past a rival, depended on luck and cunning.']],
      ['ir-barbad'], {
        folk: {
          title: B('روایت ادبی: باربد در درخت سرو', 'Literary tradition: Barbad in the cypress'),
          story: {
            fa: ['سرگیس، رامشگر سرپرست دربار، از ترس رقیب نمی‌گذاشت باربد نزد شاه برود. باربد جامهٔ سبز پوشید و در باغ شاهی میان شاخه‌های درختی پنهان شد. هنگامی که خسرو به بزم نشست، باربد از درخت سه آهنگ خواند: «دادآفرید»، «پیکار گُرد» و «سبز در سبز». خسرو شیفته شد، او را فراخواند و رامشگر سرپرست کرد.'],
            en: ['Sargis, the chief minstrel, kept Barbad from the king for fear of a rival. Barbad dressed in green and hid among the branches of a tree in the royal garden. When Khosrow sat down to feast, Barbad sang three songs from the tree: “Dad-afrid”, “Peykar-e gord” and “Sabz dar sabz”. Khosrow was enchanted, called him down and made him chief minstrel.'],
          },
          origin: {
            fa: ['این روایت ادبی است، نه تاریخ. داستان در شاهنامهٔ فردوسی و تاریخ ثعالبی آمده است. خلاصه از تفضلی (ایرانیکا) است.'],
            en: ['This is a literary tradition, not history. The story is told in Ferdowsi’s Shahnameh and in Thaʿalebi’s history. The summary follows Tafażżolī (Iranica).'],
          },
          sources: ['ir-barbad'],
        },
      }),
    sec('fall', 'برکناری و مرگ', 'Deposition and death',
      [['توطئه را سرداری بازنشسته، نزدیک به شیرویه، آغاز کرد. ۲۲ افسر بلندپایه، دو پسر شهربراز و پسر وزیر دارایی همراه شدند. نمایندگانی نزد هراکلیوس در شهرزور رفتند تا از پذیرش صلح مطمئن شوند. در شب ۲۳ به ۲۴ فوریهٔ ۶۲۸ شیرویه را شاه خواندند، زندان‌ها را گشودند و نگهبانان کاخ به آنان پیوستند. خسرو در باغ پنهان شد و بی‌مقاومت گرفتار شد. شیرویه در ۲۵ فوریه تاج گذاشت، مردانشاه را جلوی چشم پدر کشت و در ۲۸ فوریه خسرو را هم کشت.'],
        ['The plot was begun by a retired general close to Shiroy. Twenty-two senior officers, two sons of Shahrbaraz and the son of a finance minister joined it. Envoys went to Heraclius at Shahrazur to make sure he would accept peace. On the night of 23–24 February 628 Shiroy was proclaimed king, the prisons were opened, and the palace guards went over. Khosrow hid in a garden and was taken without resistance. Shiroy was crowned on 25 February, had Mardanshah killed before his father’s eyes, and on 28 February had Khosrow killed too.']],
      [['شاهنامه برکناری خسرو را تنها کار دو بزرگ ناخشنود می‌داند و جنگ روم را از داستان بیرون می‌گذارد. هاوارد-جانستون می‌گوید این کار عمدی بود. در روایت خداینامه خسرو اتهام‌ها را یک‌به‌یک پاسخ می‌دهد.'],
        ['The Shahnameh blames Khosrow’s fall only on two disaffected magnates and leaves the Roman war out of the story. Howard-Johnston says this was deliberate. In the Khwaday-namag version Khosrow answers the charges one by one.']],
      [['شاهی که ۳۸ سال فرمان راند، در یک شب افتاد و هیچ‌کس برایش نجنگید. قدرتی که بر ترس و غنیمت بنا شود، وقتی غنیمت تمام شد، پشتیبانی ندارد. همهٔ دستاوردهای جنگ هم دو سال بعد پس داده شد.'],
        ['A king who ruled for 38 years fell in one night, and no one fought for him. Power built on fear and plunder has no support once the plunder runs out. All the gains of the war were handed back two years later.']],
      ['ir-khosrow2', 'ir-kawad2'], {
        quotes: [{ text: 'No one, it appears, was ready to fight for so discredited a šāhānšāh.', fa: 'گویا هیچ‌کس آماده نبود برای شاهنشاهی تا این اندازه بی‌اعتبار بجنگد.', ref: 'J. Howard-Johnston, “Ḵosrow II”, Encyclopaedia Iranica', source: 'ir-khosrow2' }],
      }),
  ],
  synthesis: { title: B('جمع‌بندی', 'Synthesis'), paras: {
    fa: ['خسرو پرویز تاجش را با سپاه روم پس گرفت و سپس روم را تا مرز نابودی برد: سوریه، اورشلیم و مصر را گرفت و سپاهش روبه‌روی قسطنطنیه ایستاد. اما در ۶۱۵ صلح را رد کرد، و شکست ۶۲۶، یورش هراکلیوس و نینوا او را از پا انداخت. خود بزرگانش او را برکنار کردند و کشتند. شیرین و باربد در ادب فارسی زنده ماندند. رویدادهای اورشلیم، تاریخ ذوقار و سازندهٔ طاق بستان محل بحث است.'],
    en: ['Khosrow Parviz won back his crown with a Roman army and then brought Rome to the edge of destruction: he took Syria, Jerusalem and Egypt, and his army stood facing Constantinople. But in 615 he refused peace, and the failure of 626, Heraclius’ invasion and Nineveh brought him down. His own nobles deposed and killed him. Shirin and Barbad lived on in Persian literature. The events at Jerusalem, the date of Dhu Qar and the maker of Taq-e Bostan are disputed.'],
  }, sources: ['ir-khosrow2'] },
  sources: pick('ir-khosrow2', 'ir-bahram6', 'ir-sasart', 'ir-duqar', 'ir-barbad', 'ir-kawad2', 'tabari5'),
  photos: photos('coin-khosrow2-590', 'coin-khosrow2-facing', 'takht-soleyman', 'tb-khosrow2', 'tb-boar'),
  related: related(['hormizd-iv', 'هرمز چهارم، پدرش', 'Hormizd IV, his father'], ['bahram-chobin', 'بهرام چوبین، رقیبش', 'Bahram Chobin, his rival'], ['kavad-ii', 'قباد دوم، پسرش که او را برانداخت', 'Kavad II, the son who overthrew him'], ['boran', 'پوراندخت، دخترش', 'Boran, his daughter']),
  wikipedia: 'https://en.wikipedia.org/wiki/Khosrow_II',
}
