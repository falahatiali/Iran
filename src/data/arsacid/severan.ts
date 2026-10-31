/**
 * Vologases V (190/193–208/209) and Vologases VI (207/208–after 221/222).
 * Narrative: Herodian 3.9 (Echols) quoted; Iranica (Schippmann “Arsacids ii”; Wiesehöfer “Ardašīr I”) paraphrased.
 * Iranica’s “Ardašīr I” numbers our Vologases V as “Vologeses IV”.
 */
import type { Bi, FeaturedKing } from '../featured/types'
import { ARBELA, CTESIPHON, EDESSA, HATRA, NISIBIS, PAR, PERSIS, SELEUCIA, ev, note, photos, pick, related, sec } from './common'

const B = (fa: string, en: string): Bi => ({ fa, en })

const ORDER = note('هرودیان محاصرهٔ هترا را پیش از تیسفون می‌گذارد و می‌گوید باد و جریان آب ناوگان را تصادفی به نزدیک تیسفون برد. ایرانیکا، به نقل از دیو کاسیوس (۷۶.۹ به بعد)، شکست در هترا را پس از تیسفون می‌آورد. هرودیان شاه را «اردوان» می‌نامد، اما شاه آن روز بلاش پنجم بود.', 'Herodian puts the siege of Hatra before Ctesiphon and says the current carried the fleet to Ctesiphon by chance. Iranica, citing Cassius Dio (76.9 ff.), places the failure at Hatra after Ctesiphon. Herodian calls the king “Artabanus”, but the king at the time was Vologases V.')

export const vologasesV: FeaturedKing = {
  slug: 'vologases-v', name: B('بلاش پنجم', 'Vologases V'), dynastyName: PAR,
  reign: B('۱۹۰/۱۹۳–۲۰۸/۲۰۹ م.', '190/193–208/209 CE'),
  title: B('بلاش پنجم؛ غارت تیسفون و ایستادگی هترا', 'Vologases V: the sack of Ctesiphon and the stand of Hatra'),
  lede: B(
    'در روزگار بلاش پنجم، امپراتور روم سپتیموس سوروس به پارت لشکر کشید (۱۹۵–۱۹۹ م.). در ژانویهٔ ۱۹۸ م. رومیان تیسفون را گرفتند و غارت کردند؛ شاه با چند سوار گریخت و زنان و کودکان به اسارت رفتند. اما شهر عربی هترا دو بار در برابر سوروس ایستاد و کمبود خوراک او را به بازگشت واداشت. روم دو استان تازه، اسروئن و میان‌رودان، ساخت. ایرانیکا می‌گوید همین گرفتاری پارت در غرب فرصتی بود برای شورش پاپک در پارس.',
    'Under Vologases V the Roman emperor Septimius Severus invaded Parthia (195–199 CE). In January 198 the Romans took and sacked Ctesiphon; the king fled with a few horsemen and women and children were carried off. But the Arab city of Hatra held out against Severus, and lack of food forced him to withdraw. Rome made two new provinces, Osrhoene and Mesopotamia. Iranica says this Parthian distraction in the west gave Pāpak his chance to revolt in Persis.'),
  stats: [{ n: B('۲۸ ژانویه ۱۹۸', '28 Jan 198'), l: B('غارت تیسفون (هرودیان)', 'sack of Ctesiphon (Herodian)') }, { n: B('۲', '2'), l: B('استان تازهٔ روم', 'new Roman provinces') }, { n: B('۱۹۵–۱۹۹', '195–199'), l: B('جنگ سوروس (م.)', 'Severus’ war (CE)') }],
  mapTitle: B('نقشه: لشکرکشی سپتیموس سوروس', 'Map: the campaign of Septimius Severus'),
  span: [191, 209],
  events: [
    ev('accession', 191, B('۱۹۰/۱۹۱ یا ۱۹۳ م.', '190/191 or 193 CE'), 'admin', SELEUCIA, B('بر تخت', 'Accession'), B('بلاش پنجم پس از بلاش چهارم به تخت نشست. نخستین چهاردرهمی‌های او در سلوکیه از ۱۹۲ یا ۱۹۳ م. است.', 'Vologases V succeeded Vologases IV. His first Seleucia tetradrachms date from 192 or 193 CE.'), 'disputed', ['ir-arsacids', 'sellwood'], note('ایرانیکا (شیپمان) آغاز را ۱۹۰/۱۹۱ یا ۱۹۳ م. می‌گذارد؛ مقالهٔ «اردشیر یکم» او را «بلاش چهارم (۱۹۲–۲۰۷)» می‌نامد.', 'Iranica (Schippmann) gives 190/191 or 193 CE; its “Ardašīr I” article calls him “Vologeses IV (192–207)”.')),
    ev('osrhoene', 195, B('۱۹۵–۱۹۷ م.', '195–197 CE'), 'campaign', EDESSA, B('سوروس به شرق می‌آید', 'Severus comes east'), B('ایرانیکا: جنگ سوروس با پارتیان از ۱۹۵ تا ۱۹۹ م. طول کشید. هرودیان: بهانه دوستی برسمیوس، شاه هترا، با رقیب سوروس، پسکنیوس نیگر، بود. شاه ارمنستان با پول و گروگان صلح خرید و آبگار، شاه اسروئن، با کمانداران به سوروس پیوست.', 'Iranica: Severus’ war with the Parthians lasted from 195 to 199 CE. Herodian: the pretext was the friendship of Barsemius, king of Hatra, with Severus’ rival Pescennius Niger. The king of Armenia bought peace with money and hostages, and Abgar, king of Osrhoene, joined Severus with archers.'), 'probable', ['ir-arsacids', 'herodian']),
    ev('ctesiphon', 198, B('۲۸ ژانویهٔ ۱۹۸ م.', '28 January 198 CE'), 'battle', CTESIPHON, B('غارت تیسفون', 'The sack of Ctesiphon'), B('هرودیان: رومیان بر مردم بی‌خبر تاختند، زنان و کودکان را اسیر کردند و شهر را غارت کردند. شاه با چند سوار گریخت و رومیان گنجینه‌ها را بردند. ایرانیکا: سلوکیه و تیسفون بار دیگر به دست روم افتاد.', 'Herodian: the Romans fell on the unsuspecting people, took the women and children captive and looted the city. The king fled with a few horsemen and the Romans carried off the treasuries. Iranica: Seleucia and Ctesiphon again fell to Rome.'), 'disputed', ['herodian', 'ir-arsacids'], ORDER),
    ev('hatra', 199, B('۱۹۸–۱۹۹ م.', '198–199 CE'), 'battle', HATRA, B('هترا ایستادگی می‌کند', 'Hatra holds out'), B('هرودیان: هترا بر بلندی بود، با دیواری بلند و پر از کماندار. مدافعان سنگ و تیر می‌باریدند و کوزه‌هایی پر از حشرات گزنده بر سر رومیان می‌انداختند. گرما و بیماری بیش از دشمن از رومیان کشت و سوروس ناکام بازگشت. ایرانیکا: کمبود خوراک و تدارکات او را به بازگشت واداشت.', 'Herodian: Hatra stood on a height, with a high wall manned by many archers. The defenders rained stones and arrows and threw down pots full of stinging insects. Heat and disease killed more Romans than the enemy did, and Severus withdrew unsuccessful. Iranica: shortage of food and supplies forced him to withdraw.'), 'disputed', ['herodian', 'ir-arsacids'], ORDER),
    ev('provinces', 199, B('۱۹۹ م.', '199 CE'), 'admin', NISIBIS, B('دو استان تازهٔ روم', 'Two new Roman provinces'), B('ایرانیکا: با این همه رومیان مرز خود را با پارت استوار کردند و دو استان تازه، اسروئن و میان‌رودان، ساختند. مرز جنوب‌شرقی از سنگار تا نزدیک دجله می‌رفت (بنا بر بررسی برتینلی).', 'Iranica: even so, the Romans secured their frontier with Parthia by creating two new provinces, Osrhoene and Mesopotamia. The south-eastern frontier ran from Singara towards the Tigris (following Bertinelli’s study).'), 'probable', ['ir-arsacids']),
    ev('papak', 205, B('۲۰۵/۲۰۶ م.', '205/206 CE'), 'admin', PERSIS, B('شورش پاپک در پارس', 'Pāpak’s revolt in Persis'), B('ایرانیکا (ویزهوفر): پادشاهی بلاش با یورش سوروس آشفته شد و توجه شاه به غرب بود؛ این فرصتی بود برای فرمانروایان محلی جنوب‌غرب. سال ۲۰۵/۲۰۶ م. احتمالاً آغاز شورش پاپک، پدر اردشیر، است.', 'Iranica (Wiesehöfer): the reign was disturbed by Severus’ invasion and the king’s attention was on the west, which gave local rulers in the south-west their chance. The year 205/206 CE probably marks the start of the revolt of Pāpak, Ardashir’s father.'), 'disputed', ['ir-ardashir'], note('ایرانیکا تنها «محتمل» می‌داند که این سال آغاز شورش پاپک باشد.', 'Iranica says only that it is “probable” that this date marks Pāpak’s rebellion.')),
    ev('end', 208, B('۲۰۷/۲۰۸–۲۰۸/۲۰۹ م.', '207/208–208/209 CE'), 'admin', SELEUCIA, B('پایان پادشاهی', 'The end of the reign'), B('پسرش بلاش ششم پس از او به تخت نشست.', 'His son Vologases VI followed him on the throne.'), 'probable', ['ir-arsacids']),
  ],
  dossier: [
    sec('ctesiphon', 'تیسفون، ۱۹۸ م.', 'Ctesiphon, 198 CE',
      [['هرودیان، که هم‌روزگار بود، می‌گوید پس از شکست در هترا ناوگان سوروس را جریان آب به کرانهٔ پارتی، چند روز راه از تیسفون، برد. رومیان روستاها را سوزاندند، به تیسفون رسیدند و آن را غارت کردند. او شاه را «اردوان» می‌نامد، اما شاه آن روز بلاش پنجم بود. ایرانیکا ترتیب را دیگر می‌آورد: نخست سلوکیه و تیسفون، سپس محاصرهٔ ناکام هترا.'],
        ['Herodian, a contemporary, says that after the failure at Hatra the current carried Severus’ fleet to the Parthian shore, a few days’ march from Ctesiphon. The Romans burned villages, reached Ctesiphon and sacked it. He calls the king “Artabanus”, but the king at the time was Vologases V. Iranica gives a different order: first Seleucia and Ctesiphon, then the failed siege of Hatra.']],
      [['هرودیان پیروزی را «بیشتر از بخت تا از تدبیر» می‌داند. شاید این داوری بیشتر خوار کردن سوروس است تا گزارش. آنچه روشن است: پایتخت پارت در برابر سپاهی که از رود پایین می‌آمد بی‌دفاع بود، و این دومین بار در سی سال بود.'],
        ['Herodian calls the victory “more by luck than good judgment”. That verdict may be more a sneer at Severus than a report. What is clear is that the Parthian capital lay defenceless before an army coming down the river, for the second time in thirty years.']],
      [['در این جنگ، مردم تیسفون چیزی نداشتند که برای آن بجنگند و همه چیز برای باختن داشتند: خانه، دارایی و آزادی. شاه گریخت؛ آنان ماندند و هزینه را دادند.'],
        ['In this war the people of Ctesiphon had nothing to fight for and everything to lose: their homes, their property and their freedom. The king fled; they stayed and paid.']],
      ['herodian', 'ir-arsacids'], {
        quotes: [
          { text: 'The Romans fell upon the unsuspecting barbarians, killing all who opposed them. Taking captive the women and children, they looted the entire city. After the king fled with a few horsemen, the Romans plundered the treasuries, seized the ornaments and jewels, and marched off.', fa: 'رومیان بر بربرهای بی‌خبر تاختند و هر که در برابرشان ایستاد کشتند. زنان و کودکان را به اسارت گرفتند و سراسر شهر را غارت کردند. شاه با چند سوار گریخت و رومیان گنجینه‌ها را تاراج کردند، زیورها و گوهرها را برداشتند و رفتند.', ref: 'Herodian 3.9.11', source: 'herodian' },
          { text: 'Thus, more by luck than good judgment, Severus won the glory of a Parthian victory.', fa: 'بدین‌سان سوروس بیشتر از بخت تا از تدبیر، افتخار پیروزی بر پارت را به دست آورد.', ref: 'Herodian 3.9.12', source: 'herodian' },
        ],
        photos: ['coin-vologases5'],
      }),
    sec('hatra', 'هترا: شهری که روم را بازگرداند', 'Hatra: the city that turned Rome back',
      [['هرودیان: هترا بر بلندی بود، با دیواری بلند و استوار و پر از کماندار. رومیان همهٔ ماشین‌ها و شیوه‌های محاصره را آزمودند. مدافعان سنگ و تیر می‌باریدند و کوزه‌های گلی پر از حشرات گزنده بر سر آنان می‌انداختند. هوای داغ و بیماری بیش از دشمن از رومیان کشت، و سوروس از ترس از دست دادن همهٔ سپاه بازگشت.'],
        ['Herodian: Hatra stood on a height, with a high, strong wall manned by many archers. The Romans tried every engine and tactic of siege. The defenders rained stones and arrows and threw down clay pots full of stinging insects. The hot air and disease killed more Romans than the enemy did, and Severus withdrew for fear of losing his whole army.']],
      [['هترا شهری عربی و نیمه‌مستقل در قلمرو پارت بود. ایرانیکا یادآوری می‌کند که پیش از سوروس، ترایانوس هم در هترا ناکام ماند و پس از او اردشیر یکم (حدود ۲۲۶–۲۲۷ م.). شمار و ترتیب محاصره‌ها در منابع یکسان نیست.'],
        ['Hatra was an Arab, semi-independent city inside the Parthian realm. Iranica notes that Trajan failed at Hatra before Severus, and Ardashir I after him (c. 226–227 CE). The number and order of the sieges differ between sources.']],
      [['شهری کوچک که مردمش برای خانه و شهر خود می‌جنگیدند، در برابر بزرگ‌ترین سپاه زمان ایستاد. کسی که برای دارایی خود می‌جنگد، از سربازی که برای غنیمت آمده سرسخت‌تر است.'],
        ['A small city whose people fought for their own homes held out against the greatest army of the age. People defending their own property fight harder than soldiers who have come for plunder.']],
      ['herodian', 'ir-arsacids', 'ir-ardashir']),
  ],
  synthesis: { title: B('جمع‌بندی', 'Synthesis'), paras: { fa: ['زیر بلاش پنجم، پایتخت پارت برای دومین بار در یک نسل غارت شد و روم دو استان تازه در میان‌رودان ساخت. اما هترا ایستاد و سوروس بازگشت. به گفتهٔ ایرانیکا، همین گرفتاری در غرب فرصتی بود که خاندان پاپک در پارس از آن بهره برد.'], en: ['Under Vologases V the Parthian capital was sacked for the second time in a generation and Rome made two new provinces in Mesopotamia. But Hatra held and Severus went home. According to Iranica, this distraction in the west was the opening that Pāpak’s family in Persis used.'] }, sources: ['herodian', 'ir-arsacids', 'ir-ardashir'] },
  sources: pick('herodian', 'ir-arsacids', 'ir-ardashir', 'sellwood'),
  photos: photos('coin-vologases5', 'coin-vologases5-d'),
  related: related(['vologases-iv', 'بلاش چهارم', 'Vologases IV'], ['vologases-vi', 'بلاش ششم، پسرش', 'Vologases VI, his son'], ['artabanus-iv', 'اردوان چهارم، پسرش', 'Artabanus IV, his son']),
  wikipedia: 'https://en.wikipedia.org/wiki/Vologases_V',
}

export const vologasesVI: FeaturedKing = {
  slug: 'vologases-vi', name: B('بلاش ششم', 'Vologases VI'), dynastyName: PAR,
  reign: B('۲۰۷/۲۰۸ تا پس از ۲۲۱/۲۲۲ م.', '207/208 to after 221/222 CE'),
  title: B('بلاش ششم؛ برادری که پادشاهی را دوپاره کرد', 'Vologases VI: the brother who split the kingdom'),
  lede: B(
    'بلاش ششم پس از پدرش بلاش پنجم به تخت نشست، اما در حدود ۲۱۳ م. برادر کوچک‌ترش اردوان چهارم بر او شورید. تا ۲۱۶ م. اردوان در چشم روم شاه پارت بود، اما سکه‌های بلاش تا دست‌کم ۲۲۱/۲۲۲ م. در سلوکیه ضرب می‌شد. این دوپارگی در همان سال‌هایی بود که اردشیر در پارس نیرو می‌گرفت.',
    'Vologases VI succeeded his father Vologases V, but about 213 CE his younger brother Artabanus IV rose against him. By 216 Rome treated Artabanus as the king of Parthia, yet Vologases’ coins were struck at Seleucia until at least 221/222 CE. The split came in the very years when Ardashir was gathering strength in Persis.'),
  stats: [{ n: B('~۲۱۳', '~213'), l: B('شورش اردوان (م.)', 'Artabanus’ revolt (CE)') }, { n: B('۲۲۱/۲۲۲', '221/222'), l: B('آخرین سکهٔ سلوکیه (ایرانیکا)', 'last Seleucia coin (Iranica)') }],
  mapTitle: B('نقشه: پادشاهی دوپاره', 'Map: a divided kingdom'),
  span: [208, 222],
  events: [
    ev('accession', 208, B('پس از ۲۰۷/۲۰۸ م.', 'after 207/208 CE'), 'admin', SELEUCIA, B('بر تخت', 'Accession'), B('ایرانیکا: پس از ۲۰۷/۲۰۸ م. بلاش ششم جانشین پدرش شد.', 'Iranica: after 207/208 CE Vologases VI followed his father on the throne.'), 'probable', ['ir-arsacids', 'sellwood']),
    ev('split', 213, B('حدود ۲۱۳ م.', 'c. 213 CE'), 'admin', ARBELA, B('شورش اردوان', 'Artabanus revolts'), B('ایرانیکا: «به‌زودی (حدود ۲۱۳ م.)» بلاش ناچار با برادر کوچک‌ترش اردوان چهارم جنگید. جای پایگاه اردوان در منابع ما نیامده؛ نشانه روی نقشه، اربیل، تنها جایی است که لشکرکشی کاراکالا در ۲۱۶ م. به آن رسید.', 'Iranica: “soon (c. 213)” Vologases had to fight his younger brother Artabanus IV. Our sources do not say where Artabanus’ base was; the marker, Arbela, is only where Caracalla’s campaign of 216 CE reached.'), 'disputed', ['ir-arsacids'], note('بسیاری از پژوهشگران گمان می‌کنند اردوان در ماد و شمال و بلاش در بابل فرمان می‌راند؛ منابعی که این صفحه بررسی کرده این را نمی‌گویند.', 'Many scholars suppose Artabanus held Media and the north while Vologases held Babylonia; the sources this page has checked do not say so.')),
    ev('coins', 221, B('تا دست‌کم ۲۲۱/۲۲۲ م.', 'until at least 221/222 CE'), 'admin', SELEUCIA, B('سکه‌ها ادامه دارند', 'The coins go on'), B('ایرانیکا: با آن‌که در ۲۱۶ م. اردوان شاه بود، سکه‌های بلاش ششم تا دست‌کم ۲۲۱/۲۲۲ م. در سلوکیه ضرب می‌شد.', 'Iranica: although Artabanus was king by 216 CE, the coinage of Vologases VI continued to appear at Seleucia until at least 221/222 CE.'), 'disputed', ['ir-arsacids', 'sellwood'], note('سکه‌ای در ویکی‌مدیا کامنز با تاریخ ۵۳۹ سلوکی (۲۲۷–۲۲۸ م.) به بلاش ششم نسبت داده شده است؛ اگر این خوانش درست باشد، او پس از مرگ اردوان هم سکه می‌زد. ما تنها تاریخ ایرانیکا را در گاه‌شمار آورده‌ایم.', 'A coin on Wikimedia Commons, dated 539 of the Seleucid era (227–228 CE), is attributed to Vologases VI; if that reading is right he was still striking coins after Artabanus’ death. The timeline uses only Iranica’s date.')),
  ],
  dossier: [
    sec('brothers', 'دو برادر، دو شاه', 'Two brothers, two kings',
      [['ایرانیکا: پس از ۲۰۷/۲۰۸ م. بلاش ششم جانشین پدرش شد، اما به‌زودی (حدود ۲۱۳ م.) با برادر کوچک‌ترش اردوان چهارم جنگید. درخواست کاراکالا در ۲۱۶ م. برای همسری دختر اردوان «گواهی روشن» است که اردوان در آن زمان شاه بود، هرچند سکه‌های بلاش تا دست‌کم ۲۲۱/۲۲۲ م. در سلوکیه ضرب می‌شد.'],
        ['Iranica: after 207/208 CE Vologases VI followed his father, but soon (c. 213) had to fight his younger brother Artabanus IV. Caracalla’s request in 216 for the hand of Artabanus’ daughter is “clear evidence” that Artabanus was then monarch, even though Vologases’ coinage continued at Seleucia until at least 221/222.']],
      [['ضرابخانهٔ سلوکیه در دست بلاش ماند، پس احتمالاً بابل هم در دست او بود. روم با اردوان سخن می‌گفت. هر دو می‌توانستند خود را شاه بدانند. در همین سال‌ها اردشیر در پارس سرزمین‌های همسایه را یکی‌یکی می‌گرفت.'],
        ['The Seleucia mint stayed with Vologases, so Babylonia probably did too. Rome dealt with Artabanus. Each could call himself king. In these same years Ardashir in Persis was taking the neighbouring lands one by one.']],
      [['دو شاه یعنی دو دستگاه مالیات و دو سپاه که هزینه‌شان را مردم می‌دادند. جنگ خانگی خاندان اشکانی راه را برای کسی باز کرد که همه چیز را یک‌جا گرفت.'],
        ['Two kings meant two tax machines and two armies, both paid for by the people. The Arsacid family quarrel opened the road for a man who took everything at once.']],
      ['ir-arsacids', 'sellwood'], { photos: ['coin-vologases6'] }),
  ],
  synthesis: { title: B('جمع‌بندی', 'Synthesis'), paras: { fa: ['بلاش ششم شاه نیمی از پادشاهی بود. برادرش اردوان شاه دیگر بود و روم با او سخن می‌گفت. این دوپارگی، در سال‌هایی که اردشیر در پارس برمی‌خاست، یکی از دلایل پایان اشکانیان بود.'], en: ['Vologases VI was king of half a kingdom. His brother Artabanus was the other king, and Rome dealt with him. This split, in the years when Ardashir was rising in Persis, was one reason the Arsacids fell.'] }, sources: ['ir-arsacids'] },
  sources: pick('ir-arsacids', 'sellwood'),
  photos: photos('coin-vologases6'),
  related: related(['vologases-v', 'بلاش پنجم، پدرش', 'Vologases V, his father'], ['artabanus-iv', 'اردوان چهارم، برادرش', 'Artabanus IV, his brother']),
  wikipedia: 'https://en.wikipedia.org/wiki/Vologases_VI',
}
