/**
 * Bahram V Gur (420–438 CE): featured page.
 * Narrative: Encyclopaedia Iranica (Klíma “Bahrām V Gōr”; Shahbazi “Yazdegerd I”; Bosworth “Ḥira”; Grenet “Kidarites”; de Blois “Haft Peykar”) paraphrased.
 * Verbatim quotes: Procopius tr. Dewing (1914). The Shahnameh and Haft Peykar stories are retold, labelled as tradition.
 */
import type { BattleDiagram, BattleUnit, Bi, FeaturedKing } from '../featured/types'
import { ADUR_GUSNASP, ARMENIA, CTESIPHON, HIRA, KUSMEHAN, MARV, NISA, SAS, battleClipFor, clipFor, ev, note, photos, pick, related, sec } from './common'

const B = (fa: string, en: string): Bi => ({ fa, en })

const ENEMY = note(
  'کلیما (ایرانیکا) دشمن را «هون‌های سپید (هپتالیان)» می‌نامد. گرنه (ایرانیکا، «کیداریان»، ۲۰۲۲) می‌گوید کیداریان شاید در جنگ‌های شرقی بهرام پنجم درگیر بودند، اما نامشان در منابع این دوره نمی‌آید. پس این‌که دشمن که بود محل بحث است.',
  'Klíma (Iranica) calls the enemy the “White Huns (the Hephthalites)”. Grenet (Iranica, “Kidarites”, 2022) says the Kidarites might already have been involved in Bahram V’s eastern wars, but their name does not appear in the sources for his reign. So who the enemy was is disputed.')
const LIONS = note('این داستان شاهنامه و منابع وابسته به سنت ساسانی است؛ روایت است، نه گزارش تاریخی.', 'This story is from the Shahnameh and other Sasanian-based sources; it is tradition, not a historical report.')
const ANATOLIUS = note(
  'پروکوپیوس داستان آناتولیوس را پس از مرگ یزدگرد یکم و دربارهٔ «وراران» (بهرام) می‌آورد. اما دیوینگ در حاشیهٔ ترجمه آن را ۴۴۱ م. می‌گذارد، که شاه ایران آن زمان یزدگرد دوم بود. پس تاریخ و شاهِ این داستان محل بحث است.',
  'Procopius tells the Anatolius story after Yazdegerd I’s death and about “Vararanes” (Bahram). But Dewing’s margin dates it to 441, when the Persian king was Yazdegerd II. So the date and king of this story are disputed.')

const hira = ev('hira', 410, B('پیش از ۴۲۰ م.', 'before 420 CE'), 'admin', HIRA, B('کودکی در حیره', 'A youth at Hira'),
  B('بهرام در دربار شاهان لخمی حیره، نعمان و پسرش منذر، بزرگ شد. ایرانیکا می‌گوید شاید پس از ناسازگاری با پدر به آن‌جا فرستاده شده بود.', 'Bahram was brought up at the court of the Lakhmid kings of Hira, Noʿman and his son Mundhir. Iranica says he had probably been sent there after a disagreement with his father.'),
  'probable', ['ir-bahram5', 'ir-hira'])
const claim = ev('claim', 420, B('۴۲۰ م.', '420 CE'), 'campaign', CTESIPHON, B('با سپاه عرب به تیسفون', 'To Ctesiphon with an Arab army'),
  B('پس از مرگ یزدگرد، بزرگان شاپور، پسر بزرگ‌تر او، را کشتند و شاهزاده‌ای ساسانی به نام خسرو را شاه کردند. بهرام از منذر یاری گرفت و به پایتخت لشکر کشید. بزرگان با او گفت‌وگو کردند و پادشاهی‌اش را پذیرفتند، به این شرط که ستم پدرش را جبران کند.', 'After Yazdegerd’s death the nobles killed his eldest son Shapur and made a Sasanian prince named Khosrow king. Bahram got help from Mundhir and marched on the capital. The nobles negotiated and accepted him, on condition that he right his father’s misrule.'),
  'secure', ['ir-bahram5', 'ir-yazdegerd1'])
const lions = ev('lions', 420, B('۴۲۰ م. (روایت)', '420 CE (tradition)'), 'admin', CTESIPHON, B('تاج میان دو شیر (روایت)', 'The crown between two lions (tradition)'),
  B('به روایت شاهنامه، بهرام پیشنهاد کرد تاج و جامهٔ شاهی را میان دو شیر بگذارند و هر که آن را بردارد شاه باشد. خسرو کنار کشید و بهرام شیرها را کشت و تاج را برداشت.', 'In the Shahnameh, Bahram proposed that the crown and royal robes be set between two lions, and whoever took them should be king. Khosrow withdrew, and Bahram killed the lions and took the crown.'),
  'disputed', ['ir-bahram5'], LIONS)
const east = ev('east', 421, B('اندکی پس از ۴۲۰ م.', 'soon after 420 CE'), 'battle', KUSMEHAN, B('پیروزی در کشمیهن', 'Victory at Kušmēhan'),
  B('بهرام برادرش نرسی را جانشین خود گذاشت، از نسا و مرو به کشمیهن رفت، بر دشمنی که به شرق ایران تاخته بود تاخت و پیروز شد.', 'Bahram left his brother Narseh as regent, went from Nisa via Marv to Kušmēhan, fell upon the enemy who had invaded eastern Iran and won.'),
  'secure', ['ir-bahram5', 'ir-kidarites'], ENEMY)
const offering = ev('offering', 422, B('پس از جنگ شرق', 'after the eastern war'), 'religion', ADUR_GUSNASP, B('پیشکش به آذرگشنسب', 'Offerings to Adur Gushnasp'),
  B('بهرام از غنیمت‌های گران‌بها پیشکش‌های بزرگ به آتشکدهٔ آذرگشنسب داد و نرسی را فرماندار خراسان کرد.', 'From the rich booty Bahram made great offerings to the fire temple of Adur Gushnasp, and made Narseh governor of Khorasan.'),
  'secure', ['ir-bahram5'])
const rome = ev('rome', 421, B('۴۲۱ م.', '421 CE'), 'battle', ARMENIA, B('جنگ با روم', 'War with Rome'),
  B('بسیاری از مسیحیان ارمنی به روم پناه برده بودند و ایران نمی‌خواست تسلیمشان نکنند. در ۴۲۱ م. جنگ درگرفت. مهرنرسی سپاه ایران را فرماندهی کرد، اما نبردها بی‌نتیجه بود.', 'Many Armenian Christians had appealed or defected to Rome, and the refusal to hand them over led to open war in 421. Mihr-Narseh led the Persian forces, but the engagements were indecisive.'),
  'secure', ['ir-bahram5'], note('ایرانیکا جای نبردها را نمی‌گوید؛ نشانگر ارمنستان تقریبی است.', 'Iranica does not locate the battles; the Armenia marker is approximate.'))
const treaty = ev('treaty', 422, B('پس از ۴۲۱ م.', 'after 421 CE'), 'admin', CTESIPHON, B('پیمان آزادی دین', 'A treaty of religious freedom'),
  B('پیمانی بسته شد که به مسیحیان در ایران و زرتشتیان در روم آزادی دین می‌داد، و روم را متعهد می‌کرد در هزینهٔ دفاع از گذرگاه‌های قفقاز در برابر هون‌ها سهیم شود.', 'A treaty was signed giving freedom of religion to Christians in Iran and Zoroastrians in the Roman empire, and obliging Rome to contribute to the cost of defending the Caucasus passes against the Huns.'),
  'secure', ['ir-bahram5'])
const anatolius = ev('anatolius', 422, B('تاریخ محل بحث', 'date disputed'), 'admin', ARMENIA, B('آناتولیوس پیاده می‌آید', 'Anatolius comes on foot'),
  B('پروکوپیوس می‌گوید آناتولیوس، سردار روم، تنها و پیاده نزد بهرام رفت؛ بهرام از این احترام چنان شگفت‌زده شد که بازگشت و صلح را پذیرفت، به این شرط که هیچ‌کدام دژ تازه‌ای نزدیک مرز نسازد.', 'Procopius says Anatolius, the Roman general, went alone and on foot to Bahram; Bahram was so struck by this respect that he turned back and granted peace, on condition that neither side build a new fort near the border.'),
  'disputed', ['procopius'], ANATOLIUS)
const armenia = ev('armenia', 428, B('۴۲۸ م.', '428 CE'), 'admin', ARMENIA, B('پایان شاهی در ارمنستان', 'The end of Armenian kingship'),
  B('بهرام اردشیر (ارتاشس)، شاه ارمنی و پسر ورامشاپوه، را برکنار کرد و مرزبانی ایرانی را به جایش گذاشت.', 'Bahram deposed the Armenian king Artashes (Ardashir), son of Vramshapuh, and replaced him with a Persian marzban (margrave).'),
  'probable', ['ir-bahram5'], note('ایرانیکا سال را نمی‌گوید؛ ۴۲۸ م. تاریخ رایج است و این‌جا تقریبی است.', 'Iranica gives no year; 428 is the usual date and is approximate here.'))
const death = ev('death', 438, B('تابستان ۴۳۸ م.', 'summer 438 CE'), 'admin', CTESIPHON, B('مرگ', 'Death'),
  B('به یک روایت بهرام در شکار مرد؛ به روایتی دیگر به مرگ طبیعی درگذشت.', 'One tradition says Bahram died during a hunt; another says he died a natural death.'),
  'disputed', ['ir-bahram5'], note('دو روایت؛ هیچ‌کدام را منابع هم‌روزگار تأیید نمی‌کنند. هفت‌پیکر او را در غاری ناپدید می‌کند، که داستان است.', 'Two traditions; no contemporary source confirms either. The Haft Peykar makes him vanish into a cave, which is a story.'))

const EVENTS = [hira, claim, lions, east, rome, offering, treaty, anatolius, armenia, death]

const P = (id: string, fa: string, en: string, at: [number, number]): BattleUnit => ({ id, side: 'persian', kind: 'army', label: { fa, en }, at })
const H = (id: string, fa: string, en: string, at: [number, number]): BattleUnit => ({ id, side: 'greek', kind: 'army', label: { fa, en }, at })
const SKETCH = B('مسیر نسا، مرو، کشمیهن از ایرانیکا (کلیما) است؛ جای سپاه‌ها ویرایشی و طرح‌وار است. شمال بالای نمودار است.', 'The route Nisa, Marv, Kušmēhan is from Iranica (Klíma); army positions are editorial and schematic. North is at the top.')

const eastBattle: BattleDiagram = {
  id: 'kusmehan',
  title: B('لشکرکشی شرق: نسا، مرو، کشمیهن (طرح‌وار)', 'The eastern campaign: Nisa, Marv, Kušmēhan (schematic)'),
  when: B('اندکی پس از ۴۲۰ م.', 'soon after 420 CE'),
  sides: { persian: B('ایرانیان (ساسانی)', 'Iranians (Sasanian)'), greek: B('مهاجمان شرقی (هون‌ها؟)', 'Eastern invaders (Huns?)') },
  land: ['M0 0 L100 0 L100 60 L0 60 Z'],
  labels: [
    { at: [14, 22], text: B('نسا', 'Nisa') },
    { at: [60, 40], text: B('مرو', 'Marv') },
    { at: [80, 50], text: B('کشمیهن', 'Kušmēhan') },
  ],
  phases: [
    {
      id: 'regent', title: B('نرسی جانشین می‌ماند', 'Narseh stays as regent'),
      body: B('دشمنی از شرق به خاک ایران تاخته بود. بهرام برادرش نرسی را جانشین گذاشت و با سپاه راه افتاد.', 'An enemy had invaded eastern Iran. Bahram left his brother Narseh as regent and set out with the army.'),
      units: [P('army', 'بهرام و سپاه', 'Bahram and the army', [12, 26]), H('enemy', 'مهاجمان', 'Invaders', [84, 30])],
      arrows: [{ side: 'greek', path: [[92, 24], [84, 30]] }],
      certainty: 'secure', certaintyNote: SKETCH, sources: ['ir-bahram5'],
    },
    {
      id: 'march', title: B('از نسا به مرو', 'From Nisa to Marv'),
      body: B('بهرام از راه نسا به مرو رفت.', 'Bahram took the road from Nisa to Marv.'),
      units: [P('army', 'سپاه ایران', 'Persian army', [58, 38]), H('enemy', 'مهاجمان', 'Invaders', [82, 46])],
      arrows: [{ side: 'persian', path: [[14, 26], [36, 32], [58, 38]] }],
      certainty: 'secure', certaintyNote: SKETCH, sources: ['ir-bahram5'],
    },
    {
      id: 'strike', title: B('یورش در کشمیهن', 'The strike at Kušmēhan'),
      body: B('در کشمیهن بهرام بر دشمن تاخت و پیروزی بزرگی به دست آورد.', 'At Kušmēhan Bahram fell upon the enemy and won a resounding victory.'),
      units: [P('army', 'بهرام', 'Bahram', [74, 46]), H('enemy', 'مهاجمان', 'Invaders', [84, 50])],
      arrows: [{ side: 'persian', path: [[60, 40], [72, 46], [82, 50]] }],
      certainty: 'disputed', certaintyNote: ENEMY.certaintyNote, sources: ['ir-bahram5', 'ir-kidarites'],
    },
    {
      id: 'booty', title: B('غنیمت و بازگشت', 'Booty and return'),
      body: B('بهرام غنیمت گران‌بها گرفت، پیشکش‌هایی به آذرگشنسب داد و نرسی را فرماندار خراسان کرد.', 'Bahram took precious booty, made offerings to Adur Gushnasp, and appointed Narseh governor of Khorasan.'),
      units: [P('army', 'سپاه پیروز', 'Victorious army', [40, 30]), P('narseh', 'نرسی، فرماندار خراسان', 'Narseh, governor of Khorasan', [60, 34])],
      arrows: [{ side: 'persian', path: [[74, 46], [56, 38], [30, 28]] }],
      certainty: 'secure', certaintyNote: SKETCH, sources: ['ir-bahram5'],
    },
  ],
}

export const bahramV: FeaturedKing = {
  slug: 'bahram-v', name: B('بهرام پنجم (بهرام گور)', 'Bahram V (Bahram Gur)'), dynastyName: SAS,
  reign: B('۴۲۰–۴۳۸ م.', '420–438 CE'),
  title: B('بهرام گور؛ شاه حیره، شکار و افسانه', 'Bahram Gur: the king from Hira, the hunt and the legend'),
  lede: B(
    'بهرام پنجم، پسر یزدگرد یکم، در دربار عرب حیره بزرگ شد و با سپاهی عرب تاج را از بزرگان گرفت. در شرق پیروزی بزرگی به دست آورد و با روم پیمانی بست که به مسیحیان ایران آزادی دین می‌داد. او از محبوب‌ترین شاهان ادب فارسی است: شاهنامه و هفت‌پیکر نظامی داستان‌های بسیاری از او دارند. این صفحه تاریخ را از افسانه جدا می‌کند.',
    'Bahram V, son of Yazdegerd I, grew up at the Arab court of Hira and took the crown from the nobles with an Arab army. In the east he won a great victory, and with Rome he made a treaty that gave Iran’s Christians freedom of religion. He is one of the most loved kings of Persian literature: the Shahnameh and Nizami’s Haft Peykar tell many stories of him. This page keeps history and legend apart.'),
  stats: [{ n: B('۱۸', '18'), l: B('سال پادشاهی', 'years of reign') }, { n: B('۴۲۱', '421'), l: B('جنگ با روم', 'war with Rome') }],
  mapTitle: B('نقشهٔ متحرک: از حیره تا کشمیهن', 'Animated map: from Hira to Kušmēhan'),
  events: EVENTS, span: [410, 438],
  campaign: {
    id: 'reign',
    title: B('از حیره تا مرو و ارمنستان، گام‌به‌گام (۴۲۰–۴۳۸ م.)', 'From Hira to Marv and Armenia, step by step (420–438 CE)'),
    intro: {
      fa: ['پادشاهی بهرام پنجم به روایت ایرانیکا و پروکوپیوس. گام‌هایی که از شاهنامه می‌آیند «روایت» نامیده شده‌اند. نمودار گام‌به‌گام لشکرکشی شرق زیر نقشه آمده است.'],
      en: ['Bahram V’s reign as told by Iranica and Procopius. Steps that come from the Shahnameh are marked as tradition. The step-by-step diagram of the eastern campaign is below the map.'],
    },
    events: EVENTS, span: [410, 438], view: [38, 28.5, 65, 42.5],
    places: [
      { name: B('حیره', 'Hira'), c: HIRA, left: true }, { name: B('تیسفون', 'Ctesiphon'), c: CTESIPHON }, { name: B('نسا', 'Nisa'), c: NISA, dy: -1.2 },
      { name: B('مرو', 'Marv'), c: MARV }, { name: B('کشمیهن', 'Kušmēhan'), c: KUSMEHAN, dy: 1.4 }, { name: B('آذرگشنسب', 'Adur Gushnasp'), c: ADUR_GUSNASP }, { name: B('ارمنستان', 'Armenia'), c: ARMENIA, left: true },
    ],
    clip: clipFor('bahram-v'),
    battles: [eastBattle],
  },
  shareImage: '/media/bahram-v/reign-en.png',
  dossier: [
    sec('hira', 'کودکی در حیره', 'A youth at Hira',
      [['مادر بهرام را شوشندخت، دختر رئیس جالوت یهودیان، گفته‌اند. بهرام در دربار شاهان لخمی حیره، نعمان و پسرش منذر، بزرگ شد. ایرانیکا (باسورث) می‌گوید حیره جای دیدار سه فرهنگ بود: ایران ساسانی، مسیحیت نسطوری و آیین‌های عرب.'],
        ['Bahram’s mother was said to be Shushandukht, daughter of the Jewish exilarch. Bahram grew up at the court of the Lakhmid kings of Hira, Noʿman and his son Mundhir. Iranica (Bosworth) says Hira was a meeting point of three cultures: Sasanian Persia, Nestorian Christianity and Arabian paganism.']],
      [['کلیما می‌گوید بهرام «احتمالاً» پس از ناسازگاری با پدر به حیره فرستاده شد. داستان شوشندخت «گفته‌اند» است. این‌که بهرام با یاری عرب‌ها به تخت رسید، نشان می‌دهد پیوند لخمیان و ساسانیان چه اندازه نزدیک بود.'],
        ['Klíma says Bahram had “probably” been sent to Hira after a disagreement with his father. The Shushandukht story is “was said to”. That Bahram reached the throne with Arab help shows how close the Lakhmid–Sasanian bond was.']],
      [['بهرام در جایی بزرگ شد که چند دین و زبان کنار هم زندگی می‌کردند. شاید پیمان آزادی دین پس از جنگ ۴۲۱ م. با همین تجربه بی‌پیوند نبود؛ این برداشت ماست، نه گزارش منابع.'],
        ['Bahram grew up where several faiths and languages lived side by side. Perhaps the religious-freedom treaty after the war of 421 was not unrelated to that experience; this is our reading, not a report of the sources.']],
      ['ir-bahram5', 'ir-hira', 'ir-yazdegerd1']),
    sec('throne', 'تاج از بزرگان: تاریخ و افسانهٔ شیرها', 'The crown from the nobles: history and the lions legend',
      [['تاریخ (کلیما): بزرگان می‌خواستند پسران یزدگرد را از تخت دور کنند. شاپور، پسر بزرگ‌تر، را کشتند و خسرو را شاه کردند. بهرام با سپاه منذر به تیسفون آمد. بزرگان گفت‌وگو کردند و او را پذیرفتند، به این شرط که ستم پدرش را جبران کند. اداره را به کارگزاران پدرش، به‌ویژه مهرنرسی، وزیر بزرگ، سپرد.'],
        ['History (Klíma): the nobles meant to keep Yazdegerd’s sons from the throne. They killed Shapur, the eldest, and made Khosrow king. Bahram came to Ctesiphon with Mundhir’s army. The nobles negotiated and accepted him, on condition that he right his father’s misrule. He left the administration to his father’s officials, above all Mihr-Narseh, the grand minister.']],
      [['داستان شیرها در شاهنامه و منابع وابسته به سنت ساسانی آمده است. ایرانیکا آن را «سنت ایرانی» می‌نامد. سپاه منذر پشتوانهٔ واقعی بهرام بود؛ داستان شیرها همان پیروزی را به زبان فرّه و برگزیدگی ایزدی می‌گوید.'],
        ['The lions story appears in the Shahnameh and other Sasanian-based sources. Iranica calls it “Persian tradition”. Mundhir’s army was Bahram’s real backing; the lions story tells the same victory in the language of divine favour.']],
      [['بزرگان بهرام را با شرط پذیرفتند: جبران ستم پدر. این نزدیک‌ترین چیز به «پیمان» میان فرمانروا و نخبگان در این دوره است. اما مردم در آن طرف نبودند؛ پیمان میان شاه و بزرگان بسته شد.'],
        ['The nobles accepted Bahram on a condition: to right his father’s misrule. This is the nearest thing to a “contract” between ruler and elite in this period. But the people were not a party to it; the pact was between the king and the nobles.']],
      ['ir-bahram5', 'ir-yazdegerd1'], {
        photos: ['lions-crown'],
        folk: {
          title: B('روایت: تاج میان دو شیر', 'Tradition: the crown between two lions'),
          story: {
            fa: ['بزرگان خسرو را شاه کرده بودند و بهرام با سپاه آمده بود. بهرام گفت: تاج و جامهٔ شاهی را میان دو شیر گرسنه بگذارید؛ هر که آن را بردارد، شاه برگزیدهٔ ایزدان است. خسرو پا پس کشید. بهرام پیش رفت، هر دو شیر را کشت و تاج را بر سر گذاشت.'],
            en: ['The nobles had made Khosrow king, and Bahram had come with an army. Bahram said: set the crown and royal robes between two hungry lions; whoever takes them is the king the gods have chosen. Khosrow stepped back. Bahram went forward, killed both lions and put on the crown.'],
          },
          origin: {
            fa: ['این روایت از شاهنامه و منابع وابسته به سنت ساسانی است (ایرانیکا، کلیما). آن را باید روایت شمرد، نه تاریخ.'],
            en: ['This tradition comes from the Shahnameh and other Sasanian-based sources (Iranica, Klíma). It should be read as tradition, not history.'],
          },
          sources: ['ir-bahram5'],
        },
      }),
    sec('east', 'جنگ شرق: هپتالیان یا کیداریان؟', 'The eastern war: Hephthalites or Kidarites?',
      [['اندکی پس از رسیدن به تخت، دشمنی به شرق ایران تاخت. بهرام نرسی را جانشین گذاشت، از نسا و مرو به کشمیهن رفت، بر دشمن تاخت و پیروز شد. از غنیمت به آتشکدهٔ آذرگشنسب پیشکش داد و نرسی را فرماندار خراسان کرد.'],
        ['Soon after his accession an enemy invaded eastern Iran. Bahram left Narseh as regent, went from Nisa via Marv to Kušmēhan, fell upon the enemy and won. From the booty he made offerings to the fire temple of Adur Gushnasp, and made Narseh governor of Khorasan.']],
      [['کلیما (۱۹۸۸) دشمن را «هون‌های سپید (هپتالیان)» می‌نامد. گرنه (۲۰۲۲) محتاط‌تر است: کیداریان «شاید» در جنگ‌های شرقی بهرام درگیر بودند، «اما نامشان در منابع پادشاهی او نمی‌آید». پس نام دشمن محل بحث است؛ این صفحه او را «مهاجمان شرقی» می‌نامد.'],
        ['Klíma (1988) calls the enemy the “White Huns (the Hephthalites)”. Grenet (2022) is more careful: the Kidarites “might have been already involved” in Bahram’s eastern wars, “but their name does not appear” in the sources for his reign. So the enemy’s name is disputed; this page calls them “eastern invaders”.']],
      [['غنیمت جنگ به آتشکده رسید، نه به کسانی که در شرق خانه و دارایی‌شان در یورش از دست رفته بود. پیروزی دفاعی بود، اما ثروتش میان شاه و دین تقسیم شد.'],
        ['The war booty went to a fire temple, not to those in the east whose homes and goods were lost in the invasion. The victory was defensive, but its wealth was shared between the king and the faith.']],
      ['ir-bahram5', 'ir-kidarites'], {
        clip: { media: battleClipFor('bahram-v', 'kusmehan', 992, 454), caption: B('لشکرکشی شرق، از نسا تا کشمیهن، گام‌به‌گام (طرح‌وار)', 'The eastern campaign, from Nisa to Kušmēhan, step by step (schematic)') },
        photos: ['coin-bahram5'],
      }),
    sec('rome', 'جنگ ۴۲۱ و پیمان آزادی دین', 'The war of 421 and the treaty of religious freedom',
      [['بسیاری از مسیحیان ارمنی به روم پناه برده بودند و ایران نمی‌خواست تسلیمشان نکنند. در ۴۲۱ م. جنگ درگرفت. مهرنرسی فرماندهی سپاه ایران را داشت، اما نبردها بی‌نتیجه بود. پیمانی بسته شد: مسیحیان در ایران و زرتشتیان در روم آزادی دین داشتند، و روم در هزینهٔ دفاع از گذرگاه‌های قفقاز در برابر هون‌ها سهیم شد. سپس بهرام شاه ارمنی را برکنار کرد و مرزبانی ایرانی گماشت.'],
        ['Many Armenian Christians had appealed or defected to Rome, and the refusal to hand them over led to war in 421. Mihr-Narseh commanded the Persian army, but the engagements were indecisive. A treaty followed: Christians in Iran and Zoroastrians in Rome had freedom of religion, and Rome contributed to defending the Caucasus passes against the Huns. Bahram then deposed the Armenian king and appointed a Persian marzban.']],
      [['پروکوپیوس داستانی دیگر دارد: سردار رومی آناتولیوس پیاده نزد بهرام رفت و بهرام از این احترام بازگشت و صلح را پذیرفت. دیوینگ این را ۴۴۱ م. می‌گذارد، که شاه ایران یزدگرد دوم بود؛ پس تاریخ و شاه این داستان محل بحث است.'],
        ['Procopius has another story: the Roman general Anatolius walked on foot to Bahram, and Bahram, struck by the respect, turned back and granted peace. Dewing dates this to 441, when the Persian king was Yazdegerd II; so the date and king of the story are disputed.']],
      [['پیمانی که آزادی دین را در هر دو سو تضمین کند، در جهان باستان کم‌یاب است. اما این آزادی را دو دولت برای اقلیت‌های یکدیگر بستند؛ هنوز حق فرد نبود، بلکه امتیازی در گفت‌وگوی دو قدرت بود.'],
        ['A treaty guaranteeing religious freedom on both sides is rare in the ancient world. But this freedom was agreed by two states for each other’s minorities; it was not yet an individual right, but a concession in a bargain between two powers.']],
      ['ir-bahram5', 'procopius'], {
        quotes: [
          { text: 'as he approached the Median army, solitary as he was, he leapt down from his horse, and advanced on foot toward Vararanes', fa: 'چون تنها به سپاه مادها نزدیک شد، از اسب فرود آمد و پیاده به سوی وراران رفت', ref: 'Procopius, Wars 1.2.12, tr. Dewing (1914)', source: 'procopius' },
          { text: 'one condition, however, he added, that neither party should construct any new fortification in his own territory in the neighbourhood of the boundary line between the two countries', fa: 'اما یک شرط افزود: هیچ‌یک از دو سو در خاک خود، نزدیک مرز دو کشور، دژ تازه‌ای نسازد', ref: 'Procopius, Wars 1.2.15, tr. Dewing (1914)', source: 'procopius' },
        ],
      }),
    sec('legend', 'بهرام گور در ادب: شاهنامه و هفت‌پیکر', 'Bahram Gur in literature: the Shahnameh and the Haft Peykar',
      [['ایرانیکا (کلیما) می‌گوید بهرام مالیات و بدهی‌ها را در جشن‌ها می‌بخشید، نوازندگان را جایگاه بالاتر داد و هزاران نوازندهٔ هندی (لوری) به ایران آورد. شکار را دوست داشت؛ لقب «گور» را از شکار گورخری شگفت دانسته‌اند. این‌ها او را از محبوب‌ترین شاهان تاریخ ایران کرد. از او هیچ بنای سنگی نمانده است.'],
        ['Iranica (Klíma) says Bahram remitted taxes and debts at festivals, raised musicians in rank and brought thousands of Indian minstrels (luris) into Iran. He loved hunting; his name Gōr, “onager”, is said to come from his shooting of a wondrous wild ass. These made him one of the most popular kings in Iranian history. No monument of his survives.']],
      [['هفت‌پیکر نظامی (پایان سدهٔ ششم ق.، حدود ۱۱۹۷ م.) زندگی‌نامه‌ای داستانی از بهرام است. به گفتهٔ دوبلوا (ایرانیکا)، نظامی حیره را، چنان‌که بسیار پیش می‌آید، به اشتباه در یمن می‌گذارد. هفت گنبد و هفت شاهزاده‌خانم، داستان چوپان و سگ، و ناپدید شدن بهرام در غار همه داستان‌اند. دوبلوا می‌گوید پیام کتاب «دادگری» است: بهرام تنها با رها کردن خوشی گنبدها و شنیدن شکایت ستم‌دیدگان قهرمان می‌شود.'],
        ['Nizami’s Haft Peykar (late 12th century, c. 1197) is a romanticized biography of Bahram. According to de Blois (Iranica), Nizami, as often happens, mislocates Hira in Yemen. The seven domes and seven princesses, the shepherd and his dog, and Bahram’s vanishing into a cave are all story. De Blois says the book’s message is justice: Bahram becomes a true hero only by leaving the pleasures of the domes and hearing the complaints of the victims of tyranny.']],
      [['در هفت‌پیکر، وزیر بد خزانه را تهی می‌کند و شاه تنها با شنیدن شکایت هفت ستم‌دیده دادگری را بازمی‌گرداند. شاعر سدهٔ ششم ق. همان را می‌گوید که امروز می‌دانیم: فرمانروایی که به خوشی سرگرم است، دارایی مردم را به دست کارگزاران می‌سپارد.'],
        ['In the Haft Peykar an evil minister empties the treasury, and the king restores justice only by hearing seven victims of tyranny. The 12th-century poet says what we know today: a ruler busy with pleasure leaves the people’s property in the hands of his officials.']],
      ['ir-bahram5', 'ir-haftpeykar'], {
        photos: ['blue-pavilion', 'plate-azadeh'],
        folk: {
          title: B('روایت: هفت گنبد هفت‌پیکر', 'Tradition: the seven domes of the Haft Peykar'),
          story: {
            fa: ['بهرام در کاخ خورنق اتاقی بسته یافت با پیکر هفت شاهزاده‌خانم از هفت اقلیم، و دل به همه باخت. چون شاه شد، آنان را به همسری گرفت و برایشان هفت گنبد به هفت رنگ ساخت. هر روز هفته نزد یکی می‌رفت و او داستانی می‌گفت. سال‌ها گذشت و وزیری بد کشور را تباه کرد. بهرام از شکار بازمی‌گشت که چوپانی را دید که سگش را به دار آویخته بود، چون سگ گله را به گرگ فروخته بود. بهرام فهمید وزیرش همان سگ است. دادگری را بازگرداند و گنبدها را آتشکده کرد. سرانجام در پی گوری به غاری رفت و ناپدید شد.'],
            en: ['In the palace of Khawarnaq Bahram found a locked room with the portraits of seven princesses from the seven climes, and fell in love with them all. As king he married them and built them seven domes in seven colours. Each day of the week he visited one, and she told him a story. Years passed and an evil minister ruined the realm. Returning from a hunt, Bahram met a shepherd who had hanged his dog for betraying the flock to a wolf. Bahram understood that his minister was that dog. He restored justice and made the domes into fire temples. At last, chasing an onager, he went into a cave and vanished.'],
          },
          origin: {
            fa: ['این داستان از هفت‌پیکر نظامی گنجوی (حدود ۱۱۹۷ م.) است، به خلاصهٔ دوبلوا در ایرانیکا. شاعرانه است، نه تاریخ؛ نظامی هفتصد و پنجاه سال پس از بهرام نوشت.'],
            en: ['This tradition comes from Nizami Ganjavi’s Haft Peykar (c. 1197), as summarized by de Blois in Iranica. It is poetry, not history; Nizami wrote seven and a half centuries after Bahram.'],
          },
          sources: ['ir-haftpeykar'],
        },
      }),
  ],
  synthesis: { title: B('جمع‌بندی', 'Synthesis'), paras: {
    fa: ['بهرام گور دو زندگی دارد. در تاریخ، شاهزاده‌ای بود که در حیره بزرگ شد، با سپاه عرب تاج را از بزرگان گرفت، در شرق پیروز شد و با روم پیمانی بست که آزادی دین را در دو سو پذیرفت. در ادب، شکارچی گور، عاشق هفت شاهزاده‌خانم و شاهی است که سرانجام دادگری را برمی‌گزیند.', 'منابع تاریخی او کم‌اند و بیشتر دیرترند. هر جا شاهنامه یا هفت‌پیکر سخن می‌گوید، این صفحه آن را «روایت» می‌نامد.'],
    en: ['Bahram Gur has two lives. In history he was a prince raised at Hira who took the crown from the nobles with an Arab army, won in the east, and made a treaty with Rome that accepted religious freedom on both sides. In literature he is the onager hunter, the lover of seven princesses and a king who in the end chooses justice.', 'His historical sources are few and mostly later. Wherever the Shahnameh or the Haft Peykar speaks, this page calls it tradition.'],
  }, sources: ['ir-bahram5', 'ir-haftpeykar'] },
  sources: pick('ir-bahram5', 'ir-yazdegerd1', 'ir-hira', 'ir-kidarites', 'ir-haftpeykar', 'procopius'),
  photos: photos('coin-bahram5', 'lions-crown', 'blue-pavilion', 'plate-azadeh'),
  related: related(['yazdegerd-i', 'یزدگرد یکم، پدرش', 'Yazdegerd I, his father'], ['yazdegerd-ii', 'یزدگرد دوم، جانشینش', 'Yazdegerd II, his successor']),
  wikipedia: 'https://en.wikipedia.org/wiki/Bahram_V',
}
