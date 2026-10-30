/**
 * After Phraates IV: Phraates V (Phraataces) and Musa (2 BCE–4 CE), Orodes III (c. 4–6 CE), Vonones I (8/9–c. 12 CE).
 * Short pages. Spine: Josephus Ant. 18.2.4 (Whiston), Res Gestae 32–33, Velleius 2.101 (via Iranica), Dio 55 and Tacitus Ann. 2 (paraphrase),
 * Iranica (Olbrycht “Phraates V”, “Arsacids”), coins (Sellwood).
 */
import type { Bi, FeaturedKing } from '../featured/types'
import { ANTIOCH, ARTAXATA, CTESIPHON, ECBATANA, EUPHRATES, PAR, SELEUCIA, ev, note, photos, pick, related, sec } from './common'

const B = (fa: string, en: string): Bi => ({ fa, en })
const SYN = B('جمع‌بندی', 'Synthesis')
const ROME_SYRIA: [number, number] = [36.2, 36.2]
const CILICIA: [number, number] = [35.6, 36.95]

export const phraatesV: FeaturedKing = {
  slug: 'phraates-v', name: B('فرهادک (فرهاد پنجم) و موسا', 'Phraates V (Phraataces) and Musa'), dynastyName: PAR,
  reign: B('۲ پ.م.–۴ م.', '2 BCE–4 CE'),
  title: B('فرهادک و موسا؛ تنها ملکهٔ پارت بر سکه', 'Phraataces and Musa: the only Parthian queen on the coins'),
  lede: B(
    'فرهادک، پسر فرهاد چهارم و کنیز ایتالیایی موسا، به روایت یوسفوس با یاری مادرش پدر را کشت و شاه شد. موسا تنها زنی است که چهره‌اش با نام و لقب «ملکه» بر سکه‌های پارت آمده است. فرهادک بر سر ارمنستان با اوگوستوس کشمکش کرد، سپس در جزیره‌ای در فرات با گایوس قیصر پیمان بست. پس از چند سال بزرگان او را بیرون کردند.',
    'Phraataces, son of Phraates IV and the Italian slave-girl Musa, killed his father with his mother’s help, according to Josephus, and became king. Musa is the only woman whose portrait appears with her name and the title “queen” on Parthian coins. Phraataces quarrelled with Augustus over Armenia, then made a deal with Gaius Caesar on an island in the Euphrates. After a few years the nobles drove him out.'),
  stats: [{ n: B('~۶', '~6'), l: B('سال پادشاهی', 'years of reign') }, { n: B('۱', '1'), l: B('ملکهٔ پارتی با چهره بر سکه', 'Parthian queen portrayed on coins') }],
  mapTitle: B('نقشه: میان تیسفون و فرات', 'Map: between Ctesiphon and the Euphrates'),
  span: [-2, 4],
  events: [
    ev('accession', -2, B('۲ پ.م.', '2 BCE'), 'admin', CTESIPHON, B('پدرکشی و تخت', 'Parricide and the throne'), B('یوسفوس: فرهادک با یاری مادرش موسا پدر را کشت. نام پارتی او «فرهاتک» در سفال‌نوشته‌های نسا آمده و سکه‌هایش از تابستان ۲ پ.م. تاریخ دارند.', 'Josephus: Phraataces killed his father with his mother Musa’s help. His Parthian name, Frahātak, appears in the Nisa ostraca, and his coins are dated from summer 2 BCE.'), 'probable', ['josephus', 'ir-phraates5'], note('روایت پدرکشی تنها از یوسفوس است.', 'The parricide story is only Josephus’.')),
    ev('armenia', -1, B('۲–۱ پ.م.', '2–1 BCE'), 'admin', ARTAXATA, B('کشمکش بر سر ارمنستان', 'The quarrel over Armenia'), B('فرهادک از تیگران چهارم، شاه ارمنی دشمن روم، پشتیبانی کرد. دیو می‌گوید اوگوستوس در نامه او را تنها «فرهادک» خطاب کرد و خود را «قیصر» نامید؛ فرهادک در پاسخ خود را «شاه شاهان» خواند.', 'Phraataces backed Tigranes IV, an anti-Roman king of Armenia. Dio says Augustus wrote to him simply as “Phraataces” and called himself “Caesar”; Phraataces replied as “King of Kings”.'), 'secure', ['dio', 'ir-phraates5']),
    ev('island', 2, B('بهار یا تابستان ۲ م.', 'spring or summer 2 CE'), 'admin', EUPHRATES, B('دیدار در جزیرهٔ فرات', 'The meeting on the Euphrates island'), B('فرهادک و گایوس قیصر، نوهٔ اوگوستوس، در جزیره‌ای در فرات با همراهانی برابر دیدار کردند. فرهادک از ارمنستان دست کشید و برادرانش در روم ماندند. ولیوس پاترکولوس، که آنجا بود، این دیدار را دیده است.', 'Phraataces and Gaius Caesar, Augustus’ grandson, met on an island in the Euphrates with equal retinues. Phraataces gave up Armenia and his brothers stayed in Rome. Velleius Paterculus, who was there, saw the meeting.'), 'secure', ['velleius', 'ir-phraates5', 'dio']),
    ev('expelled', 4, B('۴ م.', '4 CE'), 'admin', ROME_SYRIA, B('بیرون‌رانده', 'Driven out'), B('بزرگان پارت شوریدند و فرهادک را بیرون کردند. ایرانیکا: او در سوریه مرد. آخرین سکه‌هایش تاریخ شهریور ۴ م. دارند.', 'The Parthian nobles rose and drove Phraataces out. Iranica: he died in Syria. His last coins are dated September 4 CE.'), 'probable', ['josephus', 'ir-arsacids', 'ir-phraates5']),
  ],
  dossier: [
    sec('musa', 'موسا بر سکه‌ها', 'Musa on the coins',
      [['بر پشت سکه‌های فرهادک چهرهٔ موسا با تاجی بلند و نوشتهٔ یونانی «از آنِ ایزدبانوی آسمانی، موسا، ملکه» آمده است. ایرانیکا می‌گوید گزارش چینی «هان‌شو» از سکه‌های پارت با «چهرهٔ شاه… و همسرش» احتمالاً همین سکه‌هاست. یوسفوس می‌گوید فرهادک با مادرش زناشویی کرد.'], ['The reverse of Phraataces’ coins shows Musa with a tall crown and the Greek legend “Of Goddess, Heavenly, Musa, Queen”. Iranica says the Chinese Hanshu’s report of Parthian coins with “the king’s face… [and] that of his consort” probably refers to these coins. Josephus says Phraataces married his mother.']],
      [['این زناشویی را تنها یوسفوس می‌گوید و شاید تبلیغ دشمنان باشد؛ برخی آن را گونه‌ای ازدواج درون‌خانوادگی شاهی می‌دانند. سردیس زنی از شوش را گاه «موسا» می‌نامند، اما این حدس است. سند اورامان دوم نام چهار ملکه را دارد.'], ['Only Josephus mentions the marriage and it may be hostile propaganda; some see it as a form of royal close-kin marriage. A woman’s bust from Susa is sometimes called “Musa”, but that is a guess. The Avroman II document names four queens.']],
      [['موسا از بردگی به تخت رسید و نامش بر پول کشور نشست. اما قدرتی که از راه کاخ و نه از پشتیبانی بزرگان و مردم به دست آید، با نخستین شورش فرو می‌ریزد.'], ['Musa rose from slavery to the throne and put her name on the kingdom’s money. But power won through the palace, not through the support of the nobles and the people, collapses at the first revolt.']],
      ['ir-phraates5', 'josephus', 'sellwood'], { photos: ['coin-musa'] }),
  ],
  synthesis: { title: SYN, paras: { fa: ['فرهادک و موسا کوتاه فرمان راندند اما سکه‌هایشان یگانه است. بزرگان پارت، که به گفتهٔ یوسفوس از «زناشویی با هم‌خوابه‌ای ایتالیایی» ناخشنود بودند، آنان را بیرون کردند.'], en: ['Phraataces and Musa ruled briefly, but their coins are unique. The Parthian nobles, unhappy, says Josephus, with “the marriage with an Italian concubine”, drove them out.'] }, sources: ['josephus', 'ir-phraates5'] },
  sources: pick('josephus', 'dio', 'velleius', 'res-gestae', 'ir-phraates5', 'ir-arsacids', 'sellwood'),
  photos: photos('coin-musa'),
  related: related(['phraates-iv', 'فرهاد چهارم، پدرش', 'Phraates IV, his father'], ['orodes-iii', 'ارد سوم، جانشینش', 'Orodes III, his successor']),
  wikipedia: 'https://en.wikipedia.org/wiki/Phraates_V',
}

export const orodesIII: FeaturedKing = {
  slug: 'orodes-iii', name: B('ارد سوم', 'Orodes III'), dynastyName: PAR,
  reign: B('حدود ۴–۶ م.', 'c. 4–6 CE'),
  title: B('ارد سوم؛ شاه کوتاه‌روزگار و تندخو', 'Orodes III: the short-lived, hot-tempered king'),
  lede: B(
    'پس از بیرون راندن فرهادک، بزرگان پارت اردی از خاندان اشک را شاه کردند. یوسفوس می‌گوید بسیار بی‌رحم و زودخشم بود، و پس از دو سال او را کشتند. پیوندش با شاهان پیشین روشن نیست.',
    'After driving out Phraataces, the Parthian nobles made an Orodes of the Arsacid house king. Josephus says he was very cruel and quick to anger, and after about two years they killed him. His link to the earlier kings is unclear.'),
  stats: [{ n: B('~۲', '~2'), l: B('سال پادشاهی', 'years of reign') }],
  mapTitle: B('نقشه: پادشاهی کوتاه', 'Map: a brief reign'),
  span: [4, 6],
  events: [
    ev('chosen', 4, B('حدود ۴ م.', 'c. 4 CE'), 'admin', ECBATANA, B('برگزیدهٔ بزرگان', 'Chosen by the nobles'), B('یوسفوس: بزرگان پارت پذیرفتند که بی‌شاه نمی‌توان بود و شاه باید از خاندان اشک باشد؛ پس ارد را خواندند.', 'Josephus: the Parthian nobles agreed that they could not be without a king and that the king had to be of the house of Arsaces; so they called Orodes.'), 'probable', ['josephus', 'ir-arsacids'], note('جای آغاز کار او دانسته نیست؛ نشانهٔ روی نقشه تنها نماد است.', 'Where his reign began is unknown; the marker on the map is only symbolic.')),
    ev('murder', 6, B('حدود ۶ م.', 'c. 6 CE'), 'admin', CTESIPHON, B('کشته در جشن یا شکار', 'Killed at a feast or a hunt'), B('یوسفوس: بزرگان بر او توطئه کردند و کشتندش؛ به گفتهٔ برخی در جشن و قربانی، اما بیشتر می‌گویند او را به شکار کشاندند و کشتند.', 'Josephus: the nobles plotted against him and killed him; some say at a feast and sacrifice, but most say they lured him out hunting and killed him there.'), 'disputed', ['josephus', 'ir-arsacids'], note('دو روایت از خود یوسفوس است. جای مرگ دانسته نیست.', 'Both versions are Josephus’ own. The place is unknown.')),
  ],
  dossier: [
    sec('nobles', 'بزرگان، شاه‌ساز', 'The nobles as king-makers',
      [['یوسفوس دو قاعدهٔ پارت را می‌گوید: کشور بی‌شاه نمی‌ماند و شاه باید از خاندان اشک باشد. ارد سوم با وجود بدنامی برگزیده شد چون «از خاندان اشک بود».'], ['Josephus states two Parthian rules: the kingdom must have a king, and the king must be of the house of Arsaces. Orodes III was chosen despite his bad name because he “was one of the family of Arsaces”.']],
      [['ایرانیکا این دوره را نشانهٔ نیروی بزرگان در برابر شاه می‌داند. سکه‌هایی که به ارد سوم نسبت می‌دهند اندک و نسبت‌دادنشان محل بحث است.'], ['Iranica reads this period as a sign of the nobles’ power over the king. The coins assigned to Orodes III are few and their attribution is disputed.']],
      [['در پارت، تبار شرط تخت بود و رضایت بزرگان شرط ماندن بر آن. این مهاری بر شاه بود، اما نه پاسخگویی به مردم.'], ['In Parthia, lineage was the condition for the throne and the nobles’ consent the condition for keeping it. It was a check on the king, but not accountability to the people.']],
      ['josephus', 'ir-arsacids', 'sellwood'], {
        quotes: [{ text: 'though he was accused of very great cruelty, and was of an untractable temper, and prone to wrath, yet still he was one of the family of Arsaces. However, they made a conspiracy against him, and slew him, and that, as some say, at a festival, and among their sacrifices; [for it is the universal custom there to carry their swords with them;] but, as the more general report is, they slew him when they had drawn him out a hunting.', fa: 'هرچند به بی‌رحمی بسیار متهم بود و خویی رام‌نشدنی و زودخشم داشت، باز از خاندان اشک بود. با این همه، بر او توطئه کردند و کشتندش؛ به گفتهٔ برخی در جشنی و میان قربانی‌ها [زیرا آنجا همه شمشیر با خود دارند]؛ اما به روایت رایج‌تر، او را به شکار کشاندند و کشتند.', ref: 'Josephus, Antiquities 18.2.4', source: 'josephus' }],
        photos: ['coin-orodes3'],
      }),
  ],
  synthesis: { title: SYN, paras: { fa: ['ارد سوم بیشتر یک نام است. داستانش نشان می‌دهد در این دوره بزرگان پارت شاه را می‌نشاندند و برمی‌داشتند.'], en: ['Orodes III is little more than a name. His story shows that in this period the Parthian nobles made and unmade kings.'] }, sources: ['josephus', 'ir-arsacids'] },
  sources: pick('josephus', 'ir-arsacids', 'sellwood'),
  photos: photos('coin-orodes3'),
  related: related(['phraates-v', 'فرهادک، پیشینش', 'Phraates V, his predecessor'], ['vonones-i', 'ونن یکم، جانشینش', 'Vonones I, his successor']),
  wikipedia: 'https://en.wikipedia.org/wiki/Orodes_III_of_Parthia',
}

export const vononesI: FeaturedKing = {
  slug: 'vonones-i', name: B('ونن یکم', 'Vonones I'), dynastyName: PAR,
  reign: B('۸/۹–حدود ۱۲ م.', '8/9–c. 12 CE'),
  title: B('ونن یکم؛ شاهی که از روم آمد', 'Vonones I: the king who came from Rome'),
  lede: B(
    'ونن، پسر بزرگ فرهاد چهارم، سال‌ها در روم گروگان بود. پس از کشته شدن ارد سوم، بزرگان پارت او را از اوگوستوس خواستند. اما خوی رومی‌اش را نپسندیدند و یوسفوس می‌گوید او را «برده» می‌خواندند. اردوان، شاه ماد، او را بیرون کرد. ونن به ارمنستان رفت و سرانجام در ۱۹ م. هنگام گریز در کیلیکیه کشته شد.',
    'Vonones, eldest son of Phraates IV, was for years a hostage in Rome. After Orodes III was killed the Parthian nobles asked Augustus for him. But they disliked his Roman ways, and Josephus says they called him a “slave”. Artabanus, king of Media, drove him out. Vonones went to Armenia and was finally killed in 19 CE while trying to escape in Cilicia.'),
  stats: [{ n: B('~۴', '~4'), l: B('سال بر تخت پارت', 'years on the Parthian throne') }, { n: B('۱۹ م.', '19 CE'), l: B('سال مرگ', 'year of death') }],
  mapTitle: B('نقشه: از روم به تیسفون و بازگشت', 'Map: from Rome to Ctesiphon and back'),
  span: [8, 19],
  events: [
    ev('called', 8, B('۸/۹ م.', '8/9 CE'), 'admin', CTESIPHON, B('شاهی از روم', 'A king from Rome'), B('بزرگان پارت فرستادگانی به روم فرستادند تا یکی از گروگان‌ها را شاه کنند. اوگوستوس ونن را فرستاد. خود اوگوستوس می‌نویسد پارتیان شاهشان، «ونن پسر شاه فرهاد»، را از او گرفتند.', 'The Parthian nobles sent envoys to Rome to have one of the hostages made king. Augustus sent Vonones. Augustus himself writes that the Parthians received their king, “Vonones son of king Phrates”, from him.'), 'secure', ['josephus', 'res-gestae', 'ir-arsacids'], { route: [ROME_SYRIA, [39.5, 35.4], CTESIPHON] }),
    ev('artabanus', 10, B('حدود ۱۰–۱۲ م.', 'c. 10–12 CE'), 'battle', SELEUCIA, B('شکست از اردوان', 'Defeat by Artabanus'), B('بزرگان اردوان، شاه ماد، را خواندند. ونن نخست او را شکست داد و اردوان به کوه‌های ماد گریخت؛ اما اردوان با سپاهی بزرگ‌تر بازگشت و ونن را شکست داد. ونن با چند سوار به سلوکیه گریخت.', 'The nobles called in Artabanus, king of Media. Vonones beat him at first and Artabanus fled to the Median hills; but Artabanus came back with a larger army and beat Vonones. Vonones fled with a few horsemen to Seleucia.'), 'secure', ['josephus', 'ir-arsacids'], { ...note('ایرانیکا تاج‌گذاری اردوان در تیسفون را ۱۰/۱۱ م. می‌گذارد، اما سکه‌های ونن تا حدود ۱۲ م. ادامه دارند.', 'Iranica puts Artabanus’ coronation at Ctesiphon in 10/11 CE, but Vonones’ coins continue to about 12 CE.'), route: [ECBATANA, [46.5, 33.8], SELEUCIA] }),
    ev('armenia', 12, B('حدود ۱۲–۱۶ م.', 'c. 12–16 CE'), 'admin', ARTAXATA, B('شاه ارمنستان', 'King of Armenia'), B('ونن به ارمنستان رفت و آنجا شاه شد. اما اردوان تهدید کرد و روم برای پرهیز از جنگ او را به سوریه برد و زیر نگهبانی نگه داشت.', 'Vonones went to Armenia and became king there. But Artabanus threatened war, and Rome, to avoid a conflict, took him to Syria and kept him under guard.'), 'probable', ['tacitus', 'josephus', 'ir-arsacids'], { route: [SELEUCIA, [43.5, 37.0], ARTAXATA, [39.5, 37.2], ANTIOCH] }),
    ev('death', 19, B('۱۹ م.', '19 CE'), 'admin', CILICIA, B('مرگ در گریز', 'Death in flight'), B('تاکیتوس: ونن را به پمپئوپولیس در کیلیکیه بردند. او با رشوه دادن به نگهبانان کوشید بگریزد و نزدیک رود پیراموس به دست سربازی رومی کشته شد.', 'Tacitus: Vonones was moved to Pompeiopolis in Cilicia. He bribed his guards and tried to escape, and was killed by a Roman soldier near the river Pyramus.'), 'probable', ['tacitus', 'ir-arsacids'], { route: [ANTIOCH, CILICIA] }),
  ],
  dossier: [
    sec('roman', 'شاه «رومی» و غرور پارتی', 'The “Roman” king and Parthian pride',
      [['یوسفوس می‌گوید پارتیان زود پشیمان شدند، چون نمی‌خواستند فرمان کسی را ببرند که «برده» بود، یعنی گروگان. تاکیتوس (به روایت آزاد) می‌گوید پارتیان از اینکه ونن کمتر به شکار و اسب می‌پرداخت، در تخت روان سفر می‌کرد و همراهانش یونانی بودند، خشمگین بودند. سکه‌ای از هگمتانه نام او را با نوشتهٔ «ونن، پیروز بر اردوان» دارد.'], ['Josephus says the Parthians soon changed their minds, since they would not obey one who had been a “slave”, that is, a hostage. Tacitus (paraphrased) says the Parthians resented that Vonones rarely hunted or rode, travelled in a litter and kept Greek companions. A coin from Ecbatana bears his name with the legend “Vonones, victor over Artabanus”.']],
      [['ایرانیکا او را شاهی «نرم» در چشم بزرگان می‌خواند. داستان ونن نخستین آزمون «شاهی ساخت روم» بود و شکست خورد؛ روم بعدها بارها همین کار را کرد.'], ['Iranica says the nobles saw him as “soft”. Vonones’ story was the first test of “a king made in Rome”, and it failed; Rome repeated the experiment many times.']],
      [['حکومتی که از بیرون آورده شود، مشروعیت درونی ندارد. پارتیان پیروزی‌اش را بر اردوان دیدند و باز او را نخواستند.'], ['Government brought in from outside lacks legitimacy at home. The Parthians saw him beat Artabanus and still did not want him.']],
      ['josephus', 'tacitus', 'ir-arsacids', 'sellwood'], {
        quotes: [{ text: 'However, the barbarians soon changed their minds, they being naturally of a mutable disposition, upon the supposal that this man was not worthy to be their governor; for they could not think of obeying the commands of one that had been a slave, [for so they called those that had been hostages,] nor could they bear the ignominy of that name; and this was the more intolerable, because then the Parthians must have such a king set over them, not by right of war, but in time of peace.', fa: 'اما بربرها، که سرشتی دگرگون‌شونده داشتند، زود رأی گرداندند و این مرد را شایستهٔ فرمانروایی ندانستند؛ زیرا نمی‌توانستند فرمان کسی را ببرند که برده بوده [چون گروگان‌ها را چنین می‌نامیدند]، و ننگ این نام را تاب نمی‌آوردند؛ و این بدتر بود، زیرا پارتیان می‌بایست چنین شاهی را نه به حق جنگ، بلکه در زمان صلح بر خود بپذیرند.', ref: 'Josephus, Antiquities 18.2.4', source: 'josephus' }],
        photos: ['coin-vonones1', 'coin-vonones1-nike'],
      }),
  ],
  synthesis: { title: SYN, paras: { fa: ['ونن یکم شاهی بود که روم به پارت داد و پارت پس فرستاد. با شکست او، اردوان دوم و شاخه‌ای تازه از خاندان اشک به تخت رسیدند.'], en: ['Vonones I was the king Rome gave Parthia and Parthia sent back. With his fall, Artabanus II and a new branch of the Arsacid house took the throne.'] }, sources: ['josephus', 'ir-arsacids'] },
  sources: pick('josephus', 'res-gestae', 'tacitus', 'ir-arsacids', 'sellwood'),
  photos: photos('coin-vonones1', 'coin-vonones1-nike'),
  related: related(['phraates-iv', 'فرهاد چهارم، پدرش', 'Phraates IV, his father'], ['orodes-iii', 'ارد سوم، پیشینش', 'Orodes III, his predecessor']),
  wikipedia: 'https://en.wikipedia.org/wiki/Vonones_I_of_Parthia',
}
