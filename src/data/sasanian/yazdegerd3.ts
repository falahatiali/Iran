/**
 * Featured page for Yazdegerd III (632–651), the last Sasanian king, and his sons in China.
 * Narrative: Encyclopaedia Iranica (Morony “Arab ii”; Lewental “Qādesiya”; Bosworth “Nehāvand”; Compareti “China xv”), paraphrased.
 * Verbatim quotes: Ṭabarī XV tr. R. S. Humphreys (1990); Lewental and Morony in their own English.
 */
import type { BattleDiagram, BattleUnit, Bi, FeaturedKing } from '../featured/types'
import { CTESIPHON, FIRUZABAD, HIRA, HOLWAN, ISFAHAN, ISTAKHR, JALULA, KERMAN, MARV, NAHAVAND, QADISIYYAH, RAY, SAS, SHUSHTAR, SUYAB, ZARANJ, battleClipFor, clipFor, ev, note, photos, pick, related, sec } from './common'

const B = (fa: string, en: string): Bi => ({ fa, en })
const P = (id: string, fa: string, en: string, at: [number, number]): BattleUnit => ({ id: `p-${id}`, side: 'persian', kind: 'army', label: B(fa, en), at })
const A = (id: string, fa: string, en: string, at: [number, number]): BattleUnit => ({ id: `a-${id}`, side: 'greek', kind: 'army', label: B(fa, en), at })
const SIDES = { persian: B('سپاه ساسانی', 'Sasanian army'), greek: B('سپاه مسلمانان عرب', 'Arab Muslim army') }

const QDATE = note(
  'تاریخ قادسیه روشن نیست. مورونی آن را به احتمال زیاد ژوئن ۶۳۷ می‌گذارد و بسیاری ۶۳۶ یا ۶۳۷ می‌گویند. پورشریعتی بر پایهٔ سکه‌ها تاریخی زودتر (۶۳۴ یا ۶۳۵) پیشنهاد می‌کند. لونتال می‌گوید بیشتر جزئیات روایت را داستان‌گویان ساخته‌اند.',
  'The date of Qadisiyyah is unclear. Morony puts it probably in June 637, and many say 636 or 637. Pourshariati, partly on coin evidence, argues for an earlier date (634 or 635). Lewental says most details of the narrative were shaped by storytellers.')
const NDATE = note(
  'مورونی نبرد نهاوند را تابستان ۶۴۲ می‌گذارد؛ بازورث می‌گوید منابع عربی آن را میان ۶۳۹ و ۶۴۱ می‌نهند. مورونی می‌گوید روند نبرد را از نظر تاکتیکی به دشواری می‌توان بازسازی کرد.',
  'Morony puts Nahavand in summer 642; Bosworth says the Arabic sources place it between 639 and 641. Morony says the course of the battle is difficult to reconstruct in tactical terms.')
const DEATH = note(
  'طبری چند روایت ناهمسان از مرگ یزدگرد می‌آورد: در یکی مردم مرو ترکان را فراخواندند و آسیابانی او را در خواب کشت؛ در دیگری ماهویه، مرزبان مرو، به ترکان پیوست و فرمان کشتن او را داد و آسیابان سرش را با سنگ کوبید؛ در روایت‌های دیگر راه گریز و نقش فرخ‌زاد فرق می‌کند. در همه، او نزدیک مرو، کنار رود مرغاب، کشته شد.',
  'Ṭabari gives several conflicting accounts of Yazdegerd’s death: in one the people of Marw called in the Turks and a millstone cutter killed him as he slept; in another Mahawayh, the marzban of Marw, went over to the Turks and ordered his death, and the miller crushed his head with a stone; other versions differ on his route and on Farrukhzad’s part. In all he was killed near Marw, on the Murghab river.')
const SCHEM = note('جای دقیق سپاه‌ها را نمی‌دانیم؛ نمودار طرح‌وار است.', 'The exact positions of the armies are unknown; the diagram is schematic.')

const qadisiyyah: BattleDiagram = {
  id: 'qadisiyyah',
  title: B('قادسیه (طرح‌وار)', 'Qadisiyyah (schematic)'),
  when: B('۶۳۶/۶۳۷ م. (محل بحث)', '636/7 CE (disputed)'),
  sides: SIDES,
  land: ['M0 0 L100 0 L100 60 L0 60 Z'],
  labels: [{ at: [70, 8], text: B('فرات', 'Euphrates'), tone: 'sea' }, { at: [52, 24], text: B('نهر العتیق', 'Nahr al-ʿAtiq'), tone: 'sea' }, { at: [24, 50], text: B('عذیب و قادس', 'ʿUdhayb and Qadis') }, { at: [88, 54], text: B('به سوی مداین', 'to al-Madāʾin') }],
  phases: [
    { id: 'standoff', title: B('چهار ماه رویارویی', 'Four months face to face'), body: B('رستم با سی فیل از فرات گذشت و پشت نهر العتیق در قادسیه اردو زد. سعد بن ابی‌وقاص در دژ عذیب و دهکدهٔ قادس چشم‌به‌راه کمک ماند.', 'Rostam crossed the Euphrates with thirty elephants and camped at Qadisiyyah behind the Nahr al-ʿAtiq. Saʿd b. Abi Waqqāṣ waited at the fort of ʿUdhayb and the village of Qadis for reinforcements.'),
      units: [P('rostam', 'رستم و فیلان', 'Rostam and elephants', [62, 18]), A('saad', 'سعد', 'Saʿd', [26, 44])], certainty: 'probable', ...SCHEM, sources: ['ir-arab2'] },
    { id: 'battle', title: B('سه روز نبرد', 'Three days of battle'), body: B('نبردی سخت سه روز کشید و هر دو سو کشتهٔ بسیار دادند. لونتال حضور فیلان را «شاید» از عناصر اصیل روایت می‌داند.', 'A fierce battle lasted three days with heavy losses on both sides. Lewental counts the elephants as “possibly” an authentic element of the story.'),
      units: [P('rostam', 'سپاه رستم', 'Rostam’s army', [48, 30]), A('saad', 'سپاه مسلمانان', 'Muslim army', [38, 36])], arrows: [{ side: 'persian', path: [[62, 18], [55, 24], [49, 29]] }, { side: 'greek', path: [[26, 44], [32, 40], [37, 36]] }], certainty: 'disputed', ...QDATE, sources: ['ir-arab2', 'ir-qadesiya'] },
    { id: 'rostam', title: B('کمک سوریه و مرگ رستم', 'Syrian reinforcements and Rostam’s death'), body: B('به گفتهٔ مورونی، رسیدن نیروهای کمکی از سوریه و کشته شدن رستم نبرد را تعیین کرد. روایت سنتی از توفان شنی در روز سوم سخن می‌گوید.', 'According to Morony, the arrival of Syrian reinforcements and Rostam’s death decided the battle. The traditional account tells of a dust storm on the third day.'),
      units: [P('rostam', 'سپاه بی‌فرمانده', 'Leaderless army', [50, 28]), A('saad', 'سپاه مسلمانان', 'Muslim army', [44, 32]), A('syria', 'کمک از سوریه', 'Syrian reinforcements', [30, 20])], arrows: [{ side: 'greek', path: [[14, 12], [24, 18], [32, 22]] }], certainty: 'probable', ...SCHEM, sources: ['ir-arab2', 'ir-qadesiya'] },
    { id: 'rout', title: B('شکست و تعقیب', 'Rout and pursuit'), body: B('سپاه ایران از هم پاشید و درفش کاویانی گرفته شد. فراریان تا دروازه‌های مداین دنبال شدند. حدود ۴۰۰۰ سپاهی ایرانی (حمراء) به مسلمانان پیوستند.', 'The Persian army collapsed and the Derafsh-e Kaviani was captured. The fugitives were pursued to the gates of al-Madāʾin. Some 4,000 Iranian soldiers (the Ḥamrāʾ) joined the Muslims.'),
      units: [P('rostam', 'فراریان', 'Fugitives', [86, 50]), A('saad', 'تعقیب', 'Pursuit', [70, 40])], arrows: [{ side: 'persian', path: [[50, 28], [70, 40], [88, 52]] }, { side: 'greek', path: [[44, 32], [58, 36], [70, 40]] }], certainty: 'secure', sources: ['ir-arab2', 'ir-qadesiya'] },
  ],
}

const nahavand: BattleDiagram = {
  id: 'nahavand',
  title: B('نهاوند (طرح‌وار)', 'Nahavand (schematic)'),
  when: B('۶۴۲ م. (یا ۶۳۹–۶۴۱)', '642 CE (or 639–641)'),
  sides: SIDES,
  land: ['M0 0 L100 0 L100 60 L0 60 Z'],
  labels: [{ at: [70, 14], text: B('نهاوند', 'Nahavand') }, { at: [86, 6], text: B('الوند', 'Alvand') }, { at: [12, 52], text: B('از کوفه و بصره', 'from Kufa and Basra') }],
  phases: [
    { id: 'gather', title: B('سپاه تازهٔ یزدگرد', 'Yazdegerd’s new army'), body: B('یزدگرد در جبال سپاهی بزرگ گرد آورد و به نهاوند فرستاد تا راه پیشروی مسلمانان را ببندد و شاید عراق را پس بگیرد.', 'Yazdegerd raised a major army in the Jebāl and sent it to Nahavand to block any Muslim advance and possibly retake Iraq.'),
      units: [P('mardanshah', 'مردانشاه', 'Mardānšāh', [68, 18])], certainty: 'probable', ...SCHEM, sources: ['ir-arab2', 'ir-nehavand'] },
    { id: 'combine', title: B('یکی شدن سپاه کوفه و بصره', 'Kufan and Basran forces combined'), body: B('عمر سپاهیان کوفه و بصره را زیر فرمان نعمان بن مقرن یکی کرد و از سوریه و عمان هم کمک فرستاد.', 'ʿOmar combined the Kufan and Basran forces under al-Noʿmān b. Moqarren, with reinforcements from Syria and ʿOmān.'),
      units: [P('mardanshah', 'مردانشاه', 'Mardānšāh', [68, 18]), A('noman', 'نعمان', 'al-Noʿmān', [36, 40])], arrows: [{ side: 'greek', path: [[10, 54], [22, 48], [35, 41]] }], certainty: 'secure', sources: ['ir-arab2'] },
    { id: 'battle', title: B('چند روز نبرد؛ نیرنگ یا کمک؟', 'Several days; a ruse or reinforcements?'), body: B('گفته‌اند نبرد چند روز کشید و هر دو سو کشتهٔ بسیار دادند، از جمله نعمان و مردانشاه. منابع پیروزی را یا به نیرنگی یا به رسیدن نیروی کمکی نسبت می‌دهند.', 'The battle is said to have lasted several days with heavy losses on both sides, including al-Noʿmān and Mardānšāh. The sources credit the victory either to a ruse or to arriving reinforcements.'),
      units: [P('mardanshah', 'سپاه ایران', 'Persian army', [56, 26]), A('noman', 'سپاه مسلمانان', 'Muslim army', [46, 32])], arrows: [{ side: 'persian', path: [[68, 18], [62, 22], [57, 26]] }, { side: 'greek', path: [[36, 40], [42, 36], [46, 33]] }], certainty: 'disputed', ...NDATE, sources: ['ir-arab2', 'ir-nehavand'] },
    { id: 'open', title: B('فلات گشوده شد', 'The plateau opened'), body: B('پیروزی مسلمانان مقاومت هماهنگ در جبال را پایان داد و فلات ایران را گشود. یزدگرد به اصفهان و سپس به استخر گریخت.', 'The Muslim victory ended concerted resistance in the Jebāl and opened the Iranian plateau. Yazdegerd fled to Isfahan and then to Istakhr.'),
      units: [P('mardanshah', 'بازماندگان', 'Survivors', [90, 40]), A('noman', 'سپاه مسلمانان', 'Muslim army', [66, 24])], arrows: [{ side: 'persian', path: [[56, 26], [74, 34], [92, 42]] }], certainty: 'secure', sources: ['ir-arab2', 'ir-nehavand'] },
  ],
}

const EVENTS = [
  ev('accession', 632, B('۶۳۲ م.', '632 CE'), 'admin', ISTAKHR, B('شاه جوان در استخر', 'A young king at Istakhr'), B('به گفتهٔ طبری، مردم استخر یزدگرد، پسر شهریار و نوهٔ خسرو دوم، را که از کشتار شیرویه به آن‌جا برده بودند، شاه کردند. پایان بحران جانشینی بود.', 'According to Ṭabari, the people of Istakhr raised Yazdegerd, son of Shahriyar and grandson of Khosrow II, who had been taken there to escape Sheroe’s massacre. It ended the succession crisis.'), 'disputed', ['tabari5', 'ir-arab2'], note('سن او را هشت، شانزده یا بیست‌ویک سال گفته‌اند. بازورث هشت سال را محتمل‌تر می‌داند، چون سکه‌هایش تا سال دهم او را بی‌ریش نشان می‌دهند.', 'His age is given as eight, sixteen or twenty-one. Bosworth thinks eight more likely, since his coins show him beardless until his tenth year.')),
  ev('bridge', 634, B('اکتبر ۶۳۴ م.', 'October 634 CE'), 'battle', HIRA, B('نبرد پل', 'The Battle of the Bridge'), B('سپاهی با فیلان به فرماندهی بهمن جادویه ابوعبید را کنار فرات سخت شکست داد. آشوب درباری در مداین نگذاشت ایرانیان از این پیروزی بهره ببرند.', 'A relief force with elephants under Bahman Jāḏūya inflicted a disastrous defeat on Abū ʿObayd by the Euphrates. Factional strife at al-Madāʾin kept the Persians from following it up.'), 'secure', ['ir-arab2']),
  ev('buwayb', 635, B('پاییز ۶۳۵ م. (احتمالاً)', 'autumn 635 CE (probably)'), 'battle', HIRA, B('بویب', 'Buwayb'), B('مهران، که برای راندن مسلمانان آمده بود، در نخیله کنار کانال بویب شکست خورد و کشته شد. سواد تقریباً بی‌دفاع ماند.', 'Mehrān, sent to drive the Muslims back, was defeated and killed at Noḵayla on the Buwayb canal. The Sawād was left almost undefended.'), 'probable', ['ir-arab2']),
  ev('qadisiyyah', 637, B('۶۳۶/۶۳۷ م.', '636/7 CE'), 'battle', QADISIYYAH, B('قادسیه', 'Qadisiyyah'), B('پس از چهار ماه رویارویی، سپاه رستم در نبردی سه‌روزه شکست خورد و رستم کشته شد.', 'After four months face to face, Rostam’s army was defeated in a three-day battle and Rostam was killed.'), 'disputed', ['ir-arab2', 'ir-qadesiya'], QDATE),
  ev('ctesiphon', 637, B('۶۳۷ م.', '637 CE'), 'battle', CTESIPHON, B('افتادن تیسفون', 'The fall of Ctesiphon'), B('پس از محاصره، پادگان به‌اردشیر را رها کرد و پل را برید. مسلمانان از دجله گذشتند. یزدگرد خانواده‌اش را به حلوان فرستاد و گریخت. سعد بیشتر گنج شاهی را گرفت.', 'After a siege the garrison abandoned Vēh-Ardašīr and cut the bridge. The Muslims forded the Tigris. Yazdegerd sent his family to Holwan and fled. Saʿd captured most of the royal treasure.'), 'disputed', ['ir-arab2'], { ...note('مورونی می‌گوید محاصره را دو یا سه ماه یا بیش از یک سال گفته‌اند.', 'Morony notes that the siege is given as two or three months or over a year.'), route: [CTESIPHON, HOLWAN] }),
  ev('jalula', 637, B('۶۳۷ م.', '637 CE'), 'battle', JALULA, B('جلولاء', 'Jalula'), B('پس‌دار ساسانی به فرماندهی خرزاد، برادر رستم، در جلولاء شکست سختی خورد.', 'The Sasanian rearguard under Khorrazād, Rostam’s brother, was defeated with heavy losses at Jalula.'), 'secure', ['ir-arab2']),
  ev('holwan', 638, B('۶۳۷–۶۳۸ م.', '637–638 CE'), 'campaign', RAY, B('از حلوان به ری', 'From Holwan to Ray'), B('یزدگرد با شنیدن خبر جلولاء حلوان را رها کرد و به ری رفت.', 'Hearing of Jalula, Yazdegerd abandoned Holwan and headed for Ray.'), 'secure', ['ir-arab2'], { route: [HOLWAN, RAY] }),
  ev('shushtar', 642, B('۶۴۲ م.', '642 CE'), 'battle', SHUSHTAR, B('شوشتر', 'Shushtar'), B('هرمزان پس از هجده ماه تا دو سال محاصره در شوشتر، با گشوده شدن دروازه به دست یک ایرانی، تسلیم شد و به مدینه فرستاده شد.', 'After a siege of eighteen months to two years, Shushtar fell when a Persian opened the gates; Hormozān surrendered and was sent to Medina.'), 'secure', ['ir-arab2']),
  ev('nahavand', 642, B('۶۴۲ م.', '642 CE'), 'battle', NAHAVAND, B('نهاوند', 'Nahavand'), B('سپاه تازهٔ یزدگرد در نهاوند شکست خورد. فرماندهان هر دو سو کشته شدند. فلات ایران گشوده شد.', 'Yazdegerd’s new army was defeated at Nahavand. Both commanders were killed. The Iranian plateau lay open.'), 'disputed', ['ir-arab2', 'ir-nehavand'], NDATE),
  ev('istakhr', 650, B('۶۴۳–۶۵۰ م.', '643–650 CE'), 'campaign', FIRUZABAD, B('از اصفهان به پارس', 'From Isfahan to Pars'), B('یزدگرد به اصفهان و سپس استخر رفت و کوشید در پارس پایگاهی بسازد. در ۶۵۰ استخر پس از ایستادگی سخت ویران شد؛ یزدگرد پیش‌تر به گور (فیروزآباد) رفته بود.', 'Yazdegerd went to Isfahan and then Istakhr and tried to build a base in Pars. In 650 Istakhr was ruined after stiff resistance; Yazdegerd had already moved to Gur (Firuzabad).'), 'secure', ['ir-arab2'], { route: [NAHAVAND, ISFAHAN, ISTAKHR, FIRUZABAD] }),
  ev('east', 651, B('۶۵۰–۶۵۱ م.', '650–651 CE'), 'campaign', ZARANJ, B('گریز به شرق', 'Flight east'), B('یزدگرد به کرمان رفت و مرزبان آن‌جا را از خود رنجاند؛ سپس به سیستان رفت و با خواستن مالیات‌های پس‌افتاده پشتیبانی فرماندارش را از دست داد و رو به مرو نهاد.', 'Yazdegerd went to Kerman and alienated its marzban; then to Sistan, where he lost the governor’s support by demanding tax arrears, and headed for Marw.'), 'secure', ['ir-arab2'], { route: [FIRUZABAD, KERMAN, ZARANJ, MARV] }),
  ev('death', 651, B('۶۵۱ م.', '651 CE'), 'battle', MARV, B('مرگ نزدیک مرو', 'Death near Marw'), B('ماهویه، مرزبان مرو، که از خواسته‌های مالی شاه ناخشنود بود، با نیزک طرخان هپتالی هم‌پیمان شد و یاران یزدگرد را شکست داد. یزدگرد در گریز به دست آسیابانی کشته شد. به روایت طبری، اسقف مرو پیکرش را از مرغاب برگرفت و به استخر برد.', 'Māhūya, marzban of Marw, resenting the king’s financial demands, allied with the Hephthalite Nēzak Ṭarḵān and defeated Yazdegerd’s followers. Yazdegerd was killed by a miller as he fled. In Ṭabari’s account the bishop of Marw took his body from the Murghab and carried it to Istakhr.'), 'disputed', ['ir-arab2', 'tabari15'], DEATH),
  ev('peroz', 661, B('۶۶۱ م.', '661 CE'), 'admin', ZARANJ, B('پیروز در زرنج', 'Peroz at Zaranj'), B('پیروز، پسر یزدگرد، با یاری فرمانروایان تخارستان در سیستان جا گرفت. دربار تانگ او را در ۶۶۱ سرپرست «فرمانداری پارس» با پایتخت زرنج شناخت و در ۶۶۲ «شاه پارس» خواند.', 'Peroz, Yazdegerd’s son, established himself in Sistan with help from the rulers of Ṭoḵārestān. The Tang court recognised him in 661 as head of the “Persian Area Command” with its capital at Zaranj, and in 662 titled him “King of Persia”.'), 'disputed', ['ir-china15'], note('دو تاریخ تانگ (جیو تانگ‌شو و شین تانگ‌شو) دربارهٔ پیروز یکسان نمی‌گویند. کومپارتی شین تانگ‌شو را معتبرتر می‌داند.', 'The two Tang histories (Jiu Tangshu and Xin Tangshu) differ on Peroz. Compareti thinks the Xin Tangshu more reliable.')),
  ev('narseh', 679, B('حدود ۶۷۹ م.', 'c. 679 CE'), 'campaign', SUYAB, B('نرسه در سوی‌آب رها شد', 'Narseh abandoned at Suyab'), B('پیروز حدود ۶۷۹ در چانگ‌آن درگذشت. پسرش نرسه با سردار چینی پی شینگ‌جیان راهی شد تا تاج را پس بگیرد، اما پی در سوی‌آب (آک‌بشیم) ماند و او را تنها گذاشت. نرسه بیست سال در تخارستان با عرب‌ها جنگید و حدود ۷۰۷–۷۰۹ به چین بازگشت.', 'Peroz died in Chang’an around 679. His son Narseh set out with the Chinese general Pei Xingjian to regain the throne, but Pei stayed at Suyab (Ak-Beshim) and left him alone. Narseh fought the Arabs in Ṭoḵārestān for twenty years and returned to China around 707–709.'), 'probable', ['ir-china15']),
]

export const yazdegerdIII: FeaturedKing = {
  slug: 'yazdegerd-iii', name: B('یزدگرد سوم', 'Yazdegerd III'), dynastyName: SAS,
  reign: B('۶۳۲–۶۵۱ م.', '632–651 CE'),
  title: B('یزدگرد سوم؛ آخرین شاهنشاه ساسانی', 'Yazdegerd III: the last Sasanian king of kings'),
  lede: B(
    'یزدگرد سوم، نوهٔ خسرو دوم، در ۶۳۲ شاه شد و بحران جانشینی را پایان داد. اما در همان سال‌ها سپاهیان مسلمان عرب به عراق رسیدند. پس از قادسیه تیسفون افتاد و پس از نهاوند فلات ایران گشوده شد. یزدگرد از شهری به شهری به شرق گریخت و در ۶۵۱ نزدیک مرو کشته شد. پسرانش پیروز و نرسه به دربار چین پناه بردند.',
    'Yazdegerd III, grandson of Khosrow II, became king in 632 and ended the succession crisis. But in those same years Arab Muslim armies reached Iraq. After Qadisiyyah Ctesiphon fell, and after Nahavand the Iranian plateau lay open. Yazdegerd fled east from city to city and was killed near Marw in 651. His sons Peroz and Narseh found refuge at the Chinese court.'),
  stats: [{ n: B('۱۹', '19'), l: B('سال پادشاهی', 'years of reign') }, { n: B('~⅓', '~⅓'), l: B('درآمد مالیاتی از دست رفته با عراق', 'of tax revenue lost with Iraq') }],
  mapTitle: B('نقشهٔ متحرک: از تیسفون تا مرو', 'Animated map: from Ctesiphon to Marw'),
  span: [632, 679],
  events: EVENTS,
  campaign: {
    id: 'reign',
    title: B('یزدگرد سوم، گام‌به‌گام (۶۳۲–۶۵۱ م.)', 'Yazdegerd III, step by step (632–651 CE)'),
    intro: {
      fa: ['جنگ‌ها و گریز یزدگرد به روایت مورونی (ایرانیکا). راه‌ها طرح‌وارند. تاریخ قادسیه و نهاوند و چگونگی مرگ یزدگرد محل بحث است. نمودارهای قادسیه و نهاوند زیر نقشه آمده‌اند.'],
      en: ['The wars and Yazdegerd’s flight as told by Morony (Iranica). The routes are schematic. The dates of Qadisiyyah and Nahavand and the manner of Yazdegerd’s death are disputed. Diagrams of Qadisiyyah and Nahavand are below the map.'],
    },
    events: EVENTS, span: [632, 679], view: [41, 27, 79, 44.5],
    places: [
      { name: B('تیسفون', 'Ctesiphon'), c: CTESIPHON, left: true }, { name: B('نهاوند', 'Nahavand'), c: NAHAVAND, dy: -1.3 }, { name: B('استخر', 'Istakhr'), c: ISTAKHR, dy: 1.3 },
      { name: B('مرو', 'Marw'), c: MARV, dy: -1.3 }, { name: B('زرنج', 'Zaranj'), c: ZARANJ, dy: 1.3 }, { name: B('سوی‌آب', 'Suyab'), c: SUYAB, dy: -1.3 },
    ],
    clip: clipFor('yazdegerd-iii'),
    battles: [qadisiyyah, nahavand],
  },
  shareImage: '/media/yazdegerd-iii/reign-en.png',
  dossier: [
    sec('qadisiyyah', 'قادسیه', 'Qadisiyyah',
      [['پس از یورش خالد بن ولید در ۶۳۳، ایرانیان در نبرد پل (۶۳۴) پیروز شدند اما در بویب (۶۳۵) شکست خوردند. سپس عمر سعد بن ابی‌وقاص را فرستاد. رستم پسر فرخ‌هرمز با سپاهی بزرگ و سی فیل در قادسیه رو به او ایستاد. پس از چهار ماه، نبردی سه‌روزه درگرفت؛ رستم کشته شد و سپاهش از هم پاشید.'],
        ['After Ḵāled b. al-Walid’s raid of 633, the Persians won the Battle of the Bridge (634) but lost at Buwayb (635). Then ʿOmar sent Saʿd b. Abi Waqqāṣ. Rostam son of Farrukh Hormizd faced him at Qadisiyyah with a large army and thirty elephants. After four months a three-day battle was fought; Rostam was killed and his army collapsed.']],
      [['لونتال می‌گوید بیشتر جزئیات را داستان‌گویان ساخته‌اند؛ طبری ۱۶۷ صفحه به این نبرد داده است. به گفتهٔ او، حافظهٔ بعدی گشودن ایران را در این یک نبرد فشرده کرد، حال آن‌که قادسیه قطعی نبود: پس از آن جلولاء و نهاوند آمد و ایران سال‌ها سخت ایستادگی کرد. صدام حسین در جنگ ایران و عراق از نام قادسیه برای تبلیغات بهره برد.'],
        ['Lewental says storytellers shaped most details; Ṭabari gives the battle 167 pages. In his view later memory telescoped the conquest of Iran into this one battle, although Qadisiyyah was not conclusive: Jalula and Nahavand followed, and Iran resisted stiffly for years. Saddam Hussein used the name Qadisiyyah as propaganda in the Iran–Iraq war.']],
      [['مورونی دلایل شکست را برمی‌شمارد: کشمکش طبقاتی و دینی، نبود پشتیبانی مردمی از دولتی نخبه‌سالار، ستیز بزرگان، بی‌ثباتی خاندانی و هزینهٔ جنگ دراز با روم. حدود ۴۰۰۰ سپاهی ایرانی به پیروزمندان پیوستند. دولتی که مردم در نگه داشتنش سودی نمی‌بینند، در روز سختی تنها می‌ماند. این برداشت ماست.'],
        ['Morony lists the explanations offered for the fall: class and religious strife, the absence of popular support for an elitist regime, conflict among the nobles, dynastic instability and the cost of the long war with Byzantium. Some 4,000 Iranian soldiers joined the victors. A state its people see no gain in keeping stands alone on the hard day. This is our reading.']],
      ['ir-arab2', 'ir-qadesiya'], {
        quotes: [{ text: 'Lewental argued (pp. 315-26) that, although subsequent memory has telescoped the conquest of Iran into this one battle, Qādesiya was not conclusive', fa: 'لونتال استدلال کرد که هرچند حافظهٔ بعدی گشودن ایران را در این یک نبرد فشرده کرده است، قادسیه قطعی نبود.', ref: 'D. G. Lewental, “Qādesiya, battle of”, Encyclopaedia Iranica (2014)', source: 'ir-qadesiya' }],
        clip: { media: battleClipFor('yazdegerd-iii', 'qadisiyyah', 992, 491), caption: B('قادسیه، گام‌به‌گام (طرح‌وار)', 'Qadisiyyah, step by step (schematic)') },
      }),
    sec('ctesiphon', 'افتادن تیسفون', 'The fall of Ctesiphon',
      [['پس از قادسیه سعد به مداین رسید. پادگان به‌اردشیر، در کرانهٔ باختری دجله، آن را رها کرد و پل شناور را برید، اما مسلمانان از رود گذشتند. یزدگرد خانواده‌اش را به حلوان فرستاد و گریخت. سعد بیشتر گنج شاهی را گرفت و مردم کاخ سفید با پرداخت باج امان یافتند.'],
        ['After Qadisiyyah Saʿd reached al-Madāʾin. The garrison of Vēh-Ardašīr, on the west bank of the Tigris, abandoned it and cut the floating bridge, but the Muslims forded the river. Yazdegerd sent his family to Holwan and fled. Saʿd captured most of the royal treasure, and the people in the White Palace surrendered in return for tribute.']],
      [['مورونی می‌گوید عراق مهم‌ترین بخش شاهنشاهی بود: پایتخت، رأس دستگاه اداری و حدود یک‌سوم درآمد سالانه. با آن، گنج شاهی و بسیاری از سپاهیان و بزرگان هم از دست رفتند.'],
        ['Morony says Iraq was the most important part of the empire: the capital, the apex of the administration and about one-third of annual tax revenue. With it went the royal treasure and many soldiers and nobles.']],
      [['دولتی که درآمدش را از یک دشت حاصلخیز می‌گیرد، با از دست رفتن آن دشت فرومی‌ریزد.'],
        ['A state that draws its revenue from one fertile plain collapses when it loses that plain.']],
      ['ir-arab2'], { photos: ['coin-yazdegerd3'] }),
    sec('nahavand', 'نهاوند، «فتح الفتوح»', 'Nahavand',
      [['یزدگرد در جبال سپاهی تازه گرد آورد و به نهاوند فرستاد. عمر سپاهیان کوفه و بصره را زیر فرمان نعمان بن مقرن یکی کرد. نبرد چند روز کشید؛ نعمان و فرماندهٔ ایرانی، مردانشاه پسر هرمز، هر دو کشته شدند. پیروزی مسلمانان فلات ایران را گشود.'],
        ['Yazdegerd raised a new army in the Jebāl and sent it to Nahavand. ʿOmar combined the Kufan and Basran forces under al-Noʿmān b. Moqarren. The battle lasted several days; al-Noʿmān and the Persian commander, Mardānšāh son of Hormoz, were both killed. The Muslim victory opened the Iranian plateau.']],
      [['مورونی می‌گوید روند نبرد را از نظر تاکتیکی به دشواری می‌توان بازسازی کرد؛ منابع پیروزی را به نیرنگ یا رسیدن کمک نسبت می‌دهند. تاریخ آن هم محل بحث است. نمودار زیر طرح‌وار است.'],
        ['Morony says the course of the battle is difficult to reconstruct in tactical terms; the sources credit a ruse or arriving reinforcements. Its date is disputed too. The diagram below is schematic.']],
      [['پس از نهاوند شهرها یکی‌یکی با پیمان باج تسلیم شدند. در پیمان ری و آذربایجان، به گفتهٔ مورونی، آتشکده‌ها نباید ویران می‌شدند و مردم نباید کشته یا برده می‌شدند. پیمان‌هایی که جان و دارایی را در برابر باج امان می‌داد، برای بسیاری از مردم از جنگ برای شاهی گریزان سودمندتر بود.'],
        ['After Nahavand the cities surrendered one by one on tribute terms. In the terms for Ray and Azarbaijan, Morony says, fire temples were not to be destroyed nor the people killed or enslaved. Terms that secured life and property for tribute looked more useful to many people than fighting for a fleeing king.']],
      ['ir-arab2', 'ir-nehavand'], {
        clip: { media: battleClipFor('yazdegerd-iii', 'nahavand', 992, 454), caption: B('نهاوند، گام‌به‌گام (طرح‌وار)', 'Nahavand, step by step (schematic)') },
      }),
    sec('death', 'گریز به شرق و مرگ نزدیک مرو', 'Flight east and death near Marw',
      [['یزدگرد از اصفهان به استخر و گور رفت، سپس به کرمان و سیستان و سرانجام به مرو. مورونی می‌گوید او، تهی‌دست و مغرور با همراهانی بسیار، مرزبان کرمان را رنجاند و با خواستن مالیات پس‌افتاده پشتیبانی فرماندار سیستان را از دست داد. ماهویه، مرزبان مرو، با نیزک طرخان هپتالی هم‌پیمان شد. یزدگرد در گریز به دست آسیابانی کشته شد.'],
        ['Yazdegerd went from Isfahan to Istakhr and Gur, then to Kerman and Sistan, and finally to Marw. Morony says that, impecunious and arrogant with a large retinue, he alienated the marzban of Kerman and lost the governor of Sistan by demanding tax arrears. Māhūya, marzban of Marw, allied with the Hephthalite Nēzak Ṭarḵān. Yazdegerd was killed by a miller as he fled.']],
      [['طبری خود می‌گوید «دربارهٔ علت کشته شدن او اختلاف است» و چند روایت می‌آورد: ترکان فراخوانده شدند یا نشدند، آسیابان به طمع جامه و تاج او را کشت یا به فرمان ماهویه. در یکی، موبدی به ماهویه هشدار می‌دهد که «دین و پادشاهی همزادند». به روایت طبری، اسقف مسیحی مرو پیکرش را از رود برگرفت و در استخر به خاک سپرد.'],
        ['Ṭabari himself says there is “a difference of opinion regarding the cause of his murder” and gives several versions: the Turks were called in or not, the miller killed him for his belongings or on Mahawayh’s orders. In one, a priest warns Mahawayh that “religion and kingship are twins”. In Ṭabari’s account the Christian bishop of Marw took his body from the river and buried it at Istakhr.']],
      [['آخرین شاه را نه دشمن، بلکه فرماندار خودش، که از دادن پول به او سر باز زد، به کشتن داد. شاهی که دیگر نمی‌تواند امنیت بدهد، اما هنوز مالیات می‌خواهد، پشتیبانی رعایایش را از دست می‌دهد. این برداشت ماست.'],
        ['The last king was undone not by the enemy but by his own governor, who refused him money. A king who can no longer give security but still demands taxes loses his subjects’ support. This is our reading.']],
      ['ir-arab2', 'tabari15'], {
        quotes: [{ text: 'The Magian priest (mawbadh) said to him, “That is not yours to do. You know that religion and kingship are twins; one of them cannot stand without the other. If you do [this deed], you will defile all that is most sacred.”', fa: 'موبد به او گفت: «این کار تو نیست. می‌دانی که دین و پادشاهی همزادند؛ یکی بی دیگری نمی‌ایستد. اگر [این کار را] بکنی، مقدس‌ترین چیزها را آلوده خواهی کرد.»', ref: 'al-Ṭabarī, History XV, tr. R. S. Humphreys (1990), p. 80 [I, 2878]', source: 'tabari15' }],
      }),
    sec('china', 'پیروز و نرسه در چین', 'Peroz and Narseh in China',
      [['پیروز، پسر یزدگرد، به تخارستان رفت. به گفتهٔ شین تانگ‌شو، با یاری فرمانروایان آن‌جا در سیستان جا گرفت؛ دربار تانگ در ۶۶۱ او را سرپرست «فرمانداری پارس» با پایتخت زرنج شناخت و در ۶۶۲ «شاه پارس» خواند. حدود ۶۶۳ عرب‌ها او را شکست دادند و او در ۶۷۳–۶۷۴ و باز در ۶۷۵ به چانگ‌آن رفت. در ۶۷۷ اجازهٔ ساختن «پرستشگاه پارسی»، شاید کلیسایی مسیحی، را گرفت و حدود ۶۷۹ درگذشت. پیکرهٔ بی‌سرش، با نوشته‌ای چینی، هنوز در آرامگاه گائوزونگ در چیان‌لینگ است. پسرش نرسه با سردار پی شینگ‌جیان راهی شد، اما پی در سوی‌آب او را رها کرد. نرسه بیست سال در تخارستان جنگید و حدود ۷۰۷–۷۰۹ به چین بازگشت و همان‌جا درگذشت.'],
        ['Peroz, Yazdegerd’s son, went to Ṭoḵārestān. According to the Xin Tangshu he established himself in Sistan with help from its rulers; the Tang court recognised him in 661 as head of the “Persian Area Command” with its capital at Zaranj, and in 662 titled him “King of Persia”. Around 663 the Arabs defeated him, and he came to Chang’an in 673–674 and again in 675. In 677 he obtained permission to build a “Persian temple”, probably a Christian church, and he died around 679. His beheaded statue, identified by a Chinese inscription, still stands at Gaozong’s tomb at Qianling. His son Narseh set out with the general Pei Xingjian, but Pei abandoned him at Suyab. Narseh fought in Ṭoḵārestān for twenty years and returned to China around 707–709, where he died.']],
      [['کومپارتی می‌گوید جیو تانگ‌شو پیروز و نرسه را با هم می‌آمیزد و شین تانگ‌شو معتبرتر است. او هدف واقعی پی شینگ‌جیان را گرفتن سوی‌آب از ترکان می‌داند؛ چین از ۶۵۱ با عرب‌ها هم رابطهٔ دیپلماتیک داشت. سفارت‌هایی به نام «پارس» تا ۷۵۵ به چانگ‌آن می‌رسید.'],
        ['Compareti says the Jiu Tangshu confuses Peroz and Narseh and the Xin Tangshu is more reliable. He sees Pei Xingjian’s real mission as taking Suyab from the Turks; China had diplomatic contacts with the Arabs since 651. Embassies under the name “Persia” reached Chang’an until 755.']],
      [['قدرت‌های بزرگ از تبعیدیان استفاده می‌کنند تا وقتی سودی دارند. شاهزادهٔ ساسانی لقب گرفت، اما سپاه نگرفت.'],
        ['Great powers use exiles as long as they are useful. The Sasanian prince received titles, not armies.']],
      ['ir-china15'], { photos: ['qianling-envoys'] }),
  ],
  synthesis: { title: B('جمع‌بندی', 'Synthesis'), paras: {
    fa: ['یزدگرد سوم وارث شاهنشاهی‌ای خسته از جنگ با روم، طاعون و جنگ جانشینی بود. پس از قادسیه و نهاوند، با از دست رفتن عراق و فلات، از شهری به شهری گریخت و در ۶۵۱ نزدیک مرو کشته شد. با او پادشاهی ساسانی پایان یافت، هرچند پسرانش در چین لقب «شاه پارس» داشتند. تاریخ نبردها و چگونگی مرگش محل بحث است.'],
    en: ['Yazdegerd III inherited an empire exhausted by the Byzantine war, plague and succession wars. After Qadisiyyah and Nahavand, with Iraq and the plateau lost, he fled from city to city and was killed near Marw in 651. With him the Sasanian monarchy ended, though his sons bore the title “King of Persia” in China. The dates of the battles and the manner of his death are disputed.'],
  }, sources: ['ir-arab2', 'ir-china15'] },
  sources: pick('ir-arab2', 'ir-qadesiya', 'ir-nehavand', 'tabari15', 'tabari5', 'ir-china15'),
  photos: photos('coin-yazdegerd3', 'qianling-envoys'),
  related: related(['khosrow-ii', 'خسرو دوم، پدربزرگش', 'Khosrow II, his grandfather'], ['azarmidokht', 'آزرمیدخت و مدعیان، پیش از او', 'Azarmidokht and the claimants, before him']),
  wikipedia: 'https://en.wikipedia.org/wiki/Yazdegerd_III',
}
