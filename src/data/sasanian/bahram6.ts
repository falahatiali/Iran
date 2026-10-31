/**
 * Bahram VI Chobin (king 590–591 CE), featured, with a schematic diagram of the decisive battle of 591.
 * Narrative: Encyclopaedia Iranica (Shahbazi “Bahrām VI Čōbīn”, 1988; “Hormozd IV”, 2004; Howard-Johnston “Ḵosrow II”, 2010) paraphrased.
 * Verbatim quotes are Shahbazi’s own English (Iranica). The Bahrām Čōbīn romance is labelled as a literary tradition.
 */
import type { BattleDiagram, BattleUnit, Bi, FeaturedKing } from '../featured/types'
import { BALKH, BAYKAND, CIRCESIUM, CTESIPHON, DARA, GANZAK, HERAT, NAHRAWAN, NISHAPUR, QUMES, RAY, SAS, URMIA, battleClipFor, clipFor, ev, note, photos, pick, related, sec } from './common'

const B = (fa: string, en: string): Bi => ({ fa, en })
const P = (id: string, fa: string, en: string, at: [number, number]): BattleUnit => ({ id: `p-${id}`, side: 'persian', kind: 'army', label: B(fa, en), at })
const R = (id: string, fa: string, en: string, at: [number, number]): BattleUnit => ({ id: `r-${id}`, side: 'greek', kind: 'army', label: B(fa, en), at })
const OXUS: [number, number] = [65.2, 37.8]
const TURKS: [number, number] = [66.0, 40.0]

const BATTLE = note(
  'شهبازی (ایرانیکا، ۱۹۸۸) می‌گوید دو سپاه سه روز در دشتی نزدیک دریاچهٔ ارومیه جنگیدند. هاوارد-جانستون (ایرانیکا، ۲۰۱۰) نبرد قطعی را نزدیک گنزک و یک‌روزه می‌داند. جای نبرد و شمار روزها محل بحث است و نمودار طرح‌وار است.',
  'Shahbazi (Iranica, 1988) says the armies fought for three days on a plain near Lake Urmia. Howard-Johnston (Iranica, 2010) puts the decisive battle near Ganzak and has it last one day. The place and the number of days are disputed, and the diagram is schematic.')

const urmia: BattleDiagram = {
  id: 'urmia',
  title: B('نبرد پایانی بهرام و خسرو، ۵۹۱ م. (طرح‌وار)', 'The final battle of Bahram and Khosrow, 591 CE (schematic)'),
  when: B('۵۹۱ م.', '591 CE'),
  sides: { persian: B('سپاه بهرام چوبین', 'Bahram Chobin’s army'), greek: B('خسرو دوم، رومیان و ارمنیان', 'Khosrow II, Romans and Armenians') },
  land: ['M0 0 L100 0 L100 60 L0 60 Z'],
  labels: [{ at: [14, 8], text: B('دشت آذربایجان', 'Plain of Azarbaijan') }],
  phases: [
    {
      id: 'gather', title: B('گرد آمدن سپاه‌ها', 'The armies gather'),
      body: B('خسرو با ۴۰ هزار سرباز رومی به آذربایجان آمد. بیش از ۱۲ هزار ارمنی به فرماندهی موشل و ۸ هزار ایرانی به رهبری بندوی و بستام چشم‌به‌راهش بودند. بهرام با سپاهی بسیار کوچک‌تر از تیسفون بیرون آمد تا پیش از پیوستن آنان برسد، اما دیر رسید.', 'Khosrow came to Azarbaijan with 40,000 Roman troops. Over 12,000 Armenians under Mushel and 8,000 Iranians led by Bendoy and Bestam awaited him. Bahram left Ctesiphon with a much smaller army to arrive before they joined, but came too late.'),
      units: [R('romans', 'رومیان (۴۰ هزار)', 'Romans (40,000)', [74, 22]), R('armenians', 'ارمنیان موشل', 'Mushel’s Armenians', [80, 40]), R('iranians', 'ایرانیان بندوی و بستام', 'Bendoy and Bestam’s Iranians', [66, 50]), P('bahram', 'سپاه بهرام', 'Bahram’s army', [18, 32])],
      arrows: [{ side: 'greek', path: [[80, 40], [76, 32], [74, 26]] }, { side: 'greek', path: [[66, 50], [70, 36], [72, 26]] }, { side: 'persian', path: [[4, 40], [10, 36], [18, 32]] }],
      certainty: 'probable', certaintyNote: B('شمار سپاهیان از تاریخ سعرد و سبئوس است، به نقل شهبازی.', 'The troop numbers come from the Chronicle of Seʿert and Sebeos, as cited by Shahbazi.'), sources: ['ir-bahram6'],
    },
    {
      id: 'fight', title: B('سه روز نبرد', 'Three days of battle'),
      body: B('دو سپاه سه روز در دشتی نزدیک دریاچهٔ ارومیه جنگیدند. بهرام دلیری و سرداری درخشانی نشان داد.', 'The two armies fought for three days on a plain near Lake Urmia. Bahram showed bravery and superb generalship.'),
      units: [R('romans', 'رومیان', 'Romans', [58, 28]), R('armenians', 'ارمنیان', 'Armenians', [60, 40]), R('iranians', 'ایرانیان خسرو', 'Khosrow’s Iranians', [62, 18]), P('bahram', 'سپاه بهرام', 'Bahram’s army', [40, 30])],
      arrows: [{ side: 'persian', path: [[18, 32], [30, 31], [40, 30]] }, { side: 'greek', path: [[74, 22], [66, 26], [58, 28]] }],
      certainty: 'disputed', certaintyNote: BATTLE.certaintyNote, sources: ['ir-bahram6', 'ir-khosrow2'],
    },
    {
      id: 'pledge', title: B('پیمان بندوی', 'Bendoy’s pledge'),
      body: B('شب پیش از روز چهارم، بندوی به نام خسرو به سپاهیان بهرام وعدهٔ بخشش و امان داد و آنان را به سوی خسرو کشاند.', 'On the eve of the fourth day, Bendoy, in Khosrow’s name, pledged pardon and safety to Bahram’s men and won them over.'),
      units: [R('iranians', 'بندوی', 'Bendoy', [50, 16]), R('romans', 'رومیان', 'Romans', [58, 28]), P('bahram', 'بهرام و یاران وفادار', 'Bahram and his loyal men', [36, 34]), P('defect', 'سپاهیانی که می‌گروند', 'Men going over', [46, 22])],
      arrows: [{ side: 'persian', path: [[40, 30], [44, 25], [48, 20]] }],
      certainty: 'disputed', certaintyNote: BATTLE.certaintyNote, sources: ['ir-bahram6'],
    },
    {
      id: 'flight', title: B('شکست و گریز بهرام', 'Bahram’s defeat and flight'),
      body: B('بهرام شکست خورد. اردوگاه، فرزندان و زنانش به دست دشمن افتاد. خود با ۴ هزار تن میدان را ترک کرد. تیسفون را خسرو گرفته بود، پس تنها راه باز به سوی شرق بود.', 'Bahram was defeated, and his camp, children and wives were captured. He left the field with 4,000 men. Khosrow had secured Ctesiphon, so the only road open was east.'),
      units: [R('romans', 'رومیان', 'Romans', [40, 30]), R('armenians', 'ارمنیان', 'Armenians', [44, 42]), P('bahram', 'بهرام و ۴ هزار تن', 'Bahram and 4,000 men', [12, 46])],
      arrows: [{ side: 'persian', path: [[34, 36], [22, 42], [12, 46]] }, { side: 'greek', path: [[58, 28], [48, 29], [40, 30]] }],
      certainty: 'probable', sources: ['ir-bahram6', 'ir-khosrow2'],
    },
  ],
}

const EVENTS = [
  ev('dara', 572, B('۵۷۲ م.', '572 CE'), 'battle', DARA, B('گشودن دارا', 'The taking of Dara'), B('بهرام، مرزبان ری از خاندان مهران، فرمانده سوارانی بود که دارا را گرفتند.', 'Bahram, margrave of Ray from the Mehran family, commanded a cavalry force that captured Dara.'), 'probable', ['ir-bahram6']),
  ev('invasion', 588, B('اواخر ۵۸۸ م.', 'late 588 CE'), 'battle', HERAT, B('یورش هپتالیان و ترکان', 'The Hephthalite and Turkish invasion'), B('گروهی از هپتالیان، زیردستان ترکان غربی، با پشتیبانی آنان به استان‌های شرقی تاختند و تا بادغیس و هرات رسیدند. در شورای جنگ، بهرام فرمانده سپاه و مرزبان خراسان شد و به روایتی ۱۲ هزار سوار برگزیده گرفت.', 'A horde of Hephthalites, subjects of the Western Turks, invaded the eastern provinces with their overlords’ backing and reached Badghis and Herat. In a council of war Bahram was made commander and satrap of Khorasan, reportedly with 12,000 picked horsemen.'), 'secure', ['ir-bahram6', 'ir-hormozd4'], { route: [RAY, NISHAPUR, HERAT] }),
  ev('balkh', 589, B('۵۸۸–۵۸۹ م.', '588–589 CE'), 'battle', BALKH, B('گرفتن بلخ', 'Balkh taken'), B('بهرام با شتاب پیش رفت، ترکان غربی را شکست داد و شهر بلخ را گرفت. سپس سرزمین هپتالیان را گرفت.', 'Moving with remarkable speed, Bahram defeated the Western Turks and took Balkh. Then he occupied the land of the Hephthalites.'), 'probable', ['ir-bahram6'], { route: [HERAT, BALKH] }),
  ev('khagan', 589, B('۵۸۹ م.', '589 CE'), 'battle', OXUS, B('کشتن خاقان بزرگ', 'The Great Khagan slain'), B('بهرام از جیحون گذشت و ترکان شرقی را سخت شکست داد. خاقان بزرگ را خود با تیری کشت که مانند تیر آرش زبانزد شد. منابع ساسانی‌بنیاد این خاقان را به‌نادرست «ساوه» می‌نامند.', 'Bahram crossed the Oxus and won a resounding victory over the Eastern Turks. He killed their Great Khagan himself with an arrow-shot that became as proverbial as Arash’s. The Sasanian-based sources wrongly call this khagan “Saveh”.'), 'probable', ['ir-bahram6'], { route: [BALKH, OXUS] }),
  ev('brazen', 589, B('۵۸۹ م.', '589 CE'), 'campaign', BAYKAND, B('دژ رویین', 'The Brazen Hold'), B('سرانجام بهرام به «دژ رویین» نامدار در بیکند نزدیک بخارا رسید.', 'Finally Bahram advanced to the famous “Brazen Hold” at Baykand near Bukhara.'), 'probable', ['ir-bahram6'], { route: [OXUS, BAYKAND] }),
  ev('disgrace', 589, B('۵۸۹–۵۹۰ م.', '589–590 CE'), 'admin', BALKH, B('زنجیر و دوک', 'The chain and the spindle'), B('هرمز، که محبوبیت سردارش را تاب نمی‌آورد، او را برکنار کرد و برایش زنجیر و دوک فرستاد، یعنی او را برده‌ای «ناسپاس چون زن» می‌شمرد. سپاهیان بهرام همراه او شوریدند.', 'Hormizd, who could not bear his general’s popularity, removed him and sent him a chain and a spindle, to show he thought him a slave “as ungrateful as a woman”. Bahram’s troops rose with him.'), 'disputed', ['ir-bahram6'], note('داستان زنجیر و دوک از دینوری و شاهنامه است. تئوفیلاکت می‌گوید بهرام را به جبههٔ روم فرستادند و در آلبانی شکست خورد و سپس خوار شد. تاریخچهٔ سریانی گویدی، که ده سال پس از کتاب نولدکه پیدا شد، تأیید می‌کند که شورش در شرق آغاز شد.', 'The chain and spindle story comes from Dinavari and the Shahnameh. Theophylact says Bahram was sent to the Roman front, was defeated in Albania and was then disgraced. The Syriac Guidi Chronicle, found ten years after Nöldeke wrote, confirms that the revolt began in the east.')),
  ev('march', 590, B('۵۹۰ م.', '590 CE'), 'campaign', RAY, B('راه‌پیمایی به سوی تیسفون', 'The march on Ctesiphon'), B('بهرام برای خراسان مرزبانی گماشت و از راه ری به سوی تیسفون رفت. بسیاری از سپاهیان کهنه‌کار جبههٔ غرب به او پیوستند.', 'Bahram appointed a satrap for Khorasan and marched on Ctesiphon by way of Ray. Many veterans from the western front joined him.'), 'secure', ['ir-bahram6'], { route: [BALKH, NISHAPUR, QUMES, RAY] }),
  ev('hormizd', 590, B('۵۹۰ م.', '590 CE'), 'admin', CTESIPHON, B('کشته شدن هرمز', 'Hormizd killed'), B('برای پیش‌دستی بر بهرام، بزرگان پایتخت به رهبری بندوی و بستام و با پشتیبانی شاهزاده خسرو قدرت را گرفتند، هرمز را کشتند و خسرو را بر تخت نشاندند.', 'To forestall Bahram, the nobles in the capital, led by Bendoy and Bestam and backed by Prince Khosrow, seized power, killed Hormizd and put his son on the throne.'), 'secure', ['ir-bahram6', 'ir-hormozd4']),
  ev('nahrawan', 590, B('پاییز ۵۹۰ م.', 'autumn 590 CE'), 'battle', NAHRAWAN, B('گریز خسرو به روم', 'Khosrow flees to Rome'), B('هاوارد-جانستون رویارویی را کنار کانال نهروان می‌گذارد. سپاه خسرو از هم پاشید و بسیاری به بهرام پیوستند. خسرو به یاری فداکاری بندوی به خاک روم، به کرکیسیون، گریخت.', 'Howard-Johnston places the confrontation by the Nahrawan canal. Khosrow’s army broke up and many went over to Bahram. Helped by Bendoy’s self-sacrifice, Khosrow escaped into Roman territory, to Circesium.'), 'disputed', ['ir-khosrow2', 'ir-bahram6'], { ...note('شهبازی می‌گوید خسرو و یارانش به سوی آذربایجان گریختند و در راه شکست خوردند. هاوارد-جانستون رویارویی را کنار نهروان می‌گذارد.', 'Shahbazi says Khosrow and his supporters fled toward Azarbaijan and were defeated on the way. Howard-Johnston places the confrontation by the Nahrawan.'), route: [NAHRAWAN, CIRCESIUM] }),
  ev('king', 590, B('تابستان ۵۹۰ یا نوروز ۵۹۱ م.', 'summer 590 or Nowruz 591 CE'), 'admin', CTESIPHON, B('شاه شاهان', 'King of kings'), B('بهرام به تیسفون درآمد و خود را شاه شاهان خواند. گفت اردشیر، پسر نوکیسهٔ ساسان، تاج اشکانیان را غصب کرده بود و او حق آنان را بازمی‌گرداند. به نام خود سکه زد، با تاج کنگره‌دار و دو هلال، که تاریخ سال ۱ و ۲ دارند.', 'Bahram entered Ctesiphon and proclaimed himself king of kings. He said Ardashir, the upstart son of Sasan, had usurped the throne of the Arsacids, and he was restoring their right. He struck coins in his own name, with a crenellated crown and two crescents, dated years 1 and 2.'), 'disputed', ['ir-bahram6', 'ir-khosrow2'], note('شهبازی تاج‌گذاری را تابستان ۵۹۰ می‌گذارد. هاوارد-جانستون آن را نوروز، ۹ مارس ۵۹۱، می‌داند.', 'Shahbazi puts the proclamation in summer 590. Howard-Johnston puts the coronation at Nowruz, 9 March 591.')),
  ev('battle', 591, B('۵۹۱ م.', '591 CE'), 'battle', URMIA, B('نبرد پایانی', 'The final battle'), B('خسرو با سپاه رومی، ارمنیان و ایرانیان هوادارش به آذربایجان آمد. بهرام پس از نبردی سخت شکست خورد.', 'Khosrow came to Azarbaijan with a Roman army, Armenians and his Iranian supporters. Bahram was defeated after a hard battle.'), 'disputed', ['ir-bahram6', 'ir-khosrow2'], { ...BATTLE, route: [CTESIPHON, GANZAK, URMIA] }),
  ev('flight', 591, B('۵۹۱ م.', '591 CE'), 'campaign', QUMES, B('گریز به شرق', 'Flight to the east'), B('بهرام با ۴ هزار تن به سوی نیشابور رفت. در راه سپاهی تعقیب‌کننده و سپاه یکی از بزرگان خاندان کارن را در قومس شکست داد. سپس از جیحون گذشت و خاقان ترکان او را با احترام پذیرفت.', 'Bahram headed for Nishapur with 4,000 men. On the way he defeated a pursuing royalist force and the army of a local noble of the Karen family at Qumes. Then he crossed the Oxus and was received honourably by the khagan of the Turks.'), 'secure', ['ir-bahram6'], { route: [URMIA, RAY, QUMES, NISHAPUR, BALKH, TURKS] }),
  ev('death', 592, B('پس از ۵۹۱ م.', 'after 591 CE'), 'admin', TURKS, B('کشته شدن در تبعید', 'Murdered in exile'), B('بهرام در خدمت خاقان کارهای دلیرانه کرد. خسرو تا بهرام زنده بود احساس امنیت نمی‌کرد و سرانجام او را ترور کرد.', 'Bahram served the khagan and did heroic deeds against his enemies. Khosrow could not feel safe while Bahram lived, and in the end had him assassinated.'), 'probable', ['ir-bahram6'], note('منابع تاریخ دقیق و جای مرگ او را نمی‌دهند. نقطه روی نقشه تنها «نزد ترکان» را نشان می‌دهد.', 'The sources give no exact date or place for his death. The point on the map only marks “among the Turks”.')),
]

export const bahramVI: FeaturedKing = {
  slug: 'bahram-chobin', name: B('بهرام چوبین (بهرام ششم)', 'Bahram VI Chobin'), dynastyName: SAS,
  reign: B('۵۹۰–۵۹۱ م.', '590–591 CE'),
  title: B('بهرام چوبین؛ سرداری که ایران را نجات داد و تاج را گرفت', 'Bahram Chobin: the general who saved Iran and took the crown'),
  lede: B(
    'بهرام چوبین از خاندان مهران ری بود، یکی از هفت خاندان بزرگ. در ۵۸۸–۵۸۹ یورش ترکان و هپتالیان را در شرق درهم شکست. هرمز چهارم او را خوار کرد و او شورید. یک سال شاه بود، نخستین شاهی از بیرون خاندان ساسانی. سپس از خسرو دوم و سپاه رومی شکست خورد، به ترکان پناه برد و کشته شد. داستان او در یک رمان پهلوی زنده ماند و به شاهنامه رسید.',
    'Bahram Chobin came from the Mehran family of Ray, one of the seven great houses. In 588–589 he crushed the Turkish and Hephthalite invasion in the east. Hormizd IV disgraced him and he rebelled. For a year he was king, the first from outside the Sasanian house. Then he was beaten by Khosrow II and a Roman army, took refuge with the Turks and was murdered. His story lived on in a Pahlavi romance that reached the Shahnameh.'),
  stats: [{ n: B('۱۲ هزار', '12,000'), l: B('سوار برگزیده (به روایت)', 'picked horsemen (reported)') }, { n: B('۱', '1'), l: B('سال پادشاهی', 'year of reign') }, { n: B('۴ هزار', '4,000'), l: B('همراه در گریز', 'men with him in flight') }],
  mapTitle: B('نقشه: پیروزی، شورش و گریز بهرام چوبین', 'Map: the victory, revolt and flight of Bahram Chobin'),
  span: [572, 592],
  events: EVENTS,
  campaign: {
    id: 'reign',
    title: B('بهرام چوبین، گام‌به‌گام (۵۷۲–۵۹۱ م.)', 'Bahram Chobin, step by step (572–591 CE)'),
    intro: {
      fa: ['پیروزی‌ها، شورش و گریز بهرام به روایت ایرانیکا (شهبازی، هاوارد-جانستون). راه‌ها طرح‌وارند. جای نبرد پایانی و تاریخ تاج‌گذاری محل بحث است. نمودار گام‌به‌گام نبرد پایانی زیر نقشه آمده است.'],
      en: ['Bahram’s victories, revolt and flight as told by Iranica (Shahbazi, Howard-Johnston). The routes are schematic. The place of the final battle and the date of the coronation are disputed. A step-by-step diagram of the final battle is below the map.'],
    },
    events: EVENTS, span: [572, 592], view: [36, 28, 70, 44],
    places: [
      { name: B('تیسفون', 'Ctesiphon'), c: CTESIPHON, dy: 1.3 }, { name: B('ری', 'Ray'), c: RAY }, { name: B('بلخ', 'Balkh'), c: BALKH, dy: 1.3 },
      { name: B('هرات', 'Herat'), c: HERAT, dy: 1.3 }, { name: B('بیکند', 'Baykand'), c: BAYKAND, dy: -1.3 }, { name: B('ارومیه', 'Urmia'), c: URMIA, left: true },
      { name: B('نیشابور', 'Nishapur'), c: NISHAPUR, dy: -1.3 }, { name: B('کرکیسیون', 'Circesium'), c: CIRCESIUM, left: true }, { name: B('دارا', 'Dara'), c: DARA, left: true },
    ],
    clip: clipFor('bahram-chobin'),
    battles: [urmia],
  },
  shareImage: '/media/bahram-chobin/reign-en.png',
  dossier: [
    sec('east', 'نجات شرق، ۵۸۸–۵۸۹', 'Saving the east, 588–589',
      [['در اواخر ۵۸۸، هنگامی که جنگ با روم ادامه داشت، هپتالیانِ زیردست ترکان غربی به خراسان تاختند و تا بادغیس و هرات رسیدند. شورای جنگ بهرام را فرمانده کرد. او با سرعت پیش رفت، ترکان غربی را شکست داد، بلخ را گرفت، از جیحون گذشت و خاقان بزرگ ترکان شرقی را با تیر خود کشت. سپس تا دژ رویین در بیکند نزدیک بخارا پیش رفت.'],
        ['Late in 588, while the war with Rome went on, Hephthalites subject to the Western Turks invaded Khorasan and reached Badghis and Herat. The council of war made Bahram commander. He moved fast, defeated the Western Turks, took Balkh, crossed the Oxus and killed the Great Khagan of the Eastern Turks with his own arrow. Then he advanced to the Brazen Hold at Baykand near Bukhara.']],
      [['شهبازی می‌گوید روایت منابع ساسانی‌بنیاد را باید با سبئوس و پژوهش مارکوارت و چگلدی درست کرد. نام «ساوه‌شاه» در شاهنامه نادرست است؛ منابع چینی نام دیگری برای خاقان می‌دهند. شمار ۱۲ هزار سوار «به روایت» است.'],
        ['Shahbazi says the Sasanian-based accounts must be corrected by Sebeos and by the work of Marquart and Czeglédy. The name “Saveh Shah” in the Shahnameh is wrong; Chinese records give the khagan another name. The 12,000 horsemen are a reported figure.']],
      [['بهرام سرزمین را از یورش نجات داد و پاداشش خواری بود. وقتی شاه بزرگ‌ترین خدمتگزاران را از ترس محبوبیتشان می‌راند، هیچ‌کس جان و مال خود را در خدمت او امن نمی‌بیند.'],
        ['Bahram saved the land from invasion and was rewarded with disgrace. When a king drives out his greatest servants for fear of their popularity, no one sees their life or property as safe in his service.']],
      ['ir-bahram6', 'ir-hormozd4'], { photos: ['bahram-saveh'] }),
    sec('throne', 'شاهی از بیرون خاندان ساسانی', 'A king from outside the Sasanian house',
      [['بهرام در ۵۹۰ (به گفتهٔ هاوارد-جانستون در نوروز ۵۹۱) در تیسفون شاه شد. او ادعا کرد که اردشیر تاج اشکانیان را غصب کرده بود و او حق آنان را بازمی‌گرداند. باوری آخرالزمانی را هم به کار گرفت: هزارهٔ زرتشت به پایان می‌رسید و نجات‌دهنده‌ای، «کی بهرام ورجاوند»، باید می‌آمد. بسیاری او را همان نجات‌دهنده خواندند. سکه‌هایش سال ۱ و ۲ را دارند.'],
        ['Bahram became king at Ctesiphon in 590 (at Nowruz 591, says Howard-Johnston). He claimed that Ardashir had usurped the Arsacid throne and that he was restoring the Arsacids’ right. He also used an apocalyptic belief: Zoroaster’s millennium was ending and a saviour, “Kay Bahram Varjavand”, was due. Many hailed him as that saviour. His coins are dated years 1 and 2.']],
      [['بسیاری از بزرگان و موبدان خسرو جوان را برگزیدند. شهبازی چند دلیل برای شکست بهرام می‌آورد: سپاه رومی، خیانت برادرش گردوی، اسارت خانواده‌اش، همکاری نکردن دیوانیان، دشمنی بزرگانی که نمی‌خواستند به یکی از همتایان خود خدمت کنند، و مدارای دینی او که موبدان را رنجاند. خسرو هم با تبلیغ پاسخ داد: نیمی از سرانهٔ سال را بخشید، به آتشکده‌ها بخشش کرد و پیشگویی را وارونه کرد تا بهرام «مدعی دروغین از خراسان» باشد و خود «پرویز»، شاه پیروز.'],
        ['Many nobles and priests chose the young Khosrow. Shahbazi gives several reasons for Bahram’s failure: the Roman army, the betrayal of his brother Gordoy, the capture of his family, the bureaucrats’ refusal to cooperate, the hostility of nobles unwilling to serve one of their equals, and his religious tolerance, which angered the priests. Khosrow answered with propaganda: he remitted half the year’s poll tax, gave riches to the fire temples and turned the prophecy round, so that Bahram became the “false pretender from Khorasan” and he himself “Parvez”, the victorious king.']],
      [['تاج ساسانی بر «خون» بنا بود، نه بر رضایت. بهرام نشان داد که این پایه را می‌شود به چالش کشید، اما هر دو سو مشروعیت را از تبار و پیشگویی می‌جستند، نه از قانون یا رضایت مردم. بخشش مالیات خسرو هم نشان می‌دهد که بار مالیات ابزار رقابت بر سر وفاداری بود. این برداشت ماست.'],
        ['The Sasanian crown rested on blood, not consent. Bahram showed that this basis could be challenged, but both sides sought legitimacy in lineage and prophecy, not in law or the people’s consent. Khosrow’s tax remission also shows that the tax burden was a tool in the contest for loyalty. This is our reading.']],
      ['ir-bahram6', 'ir-khosrow2'], {
        photos: ['coin-bahram6'],
        quotes: [{ text: 'Given time and opportunity to deal with internal problems, Bahrām would have probably achieved no less than Ardašīr I had done, but he was faced with too many odds.', fa: 'اگر بهرام زمان و فرصت داشت تا به گرفتاری‌های درونی بپردازد، شاید به چیزی کمتر از آنچه اردشیر یکم کرد نمی‌رسید؛ اما با موانع بسیاری روبه‌رو بود.', ref: 'A. Sh. Shahbazi, “Bahrām VI Čōbīn”, Encyclopaedia Iranica (1988)', source: 'ir-bahram6' }],
      }),
    sec('fall', 'نبرد پایانی و گریز', 'The final battle and flight',
      [['خسرو در برابر واگذاری سرزمین از روم ۴۰ هزار سرباز گرفت و به آذربایجان آمد، جایی که ارمنیان موشل و ایرانیان بندوی و بستام چشم‌به‌راهش بودند. بهرام با سپاهی کوچک‌تر دیر رسید. پس از سه روز نبرد، بندوی سپاهیان او را با وعدهٔ امان به سوی خسرو کشاند. بهرام با ۴ هزار تن به شرق گریخت، در قومس سپاه کارنی را شکست داد و به ترکان پناه برد. در آنجا به دستور خسرو کشته شد.'],
        ['In return for territorial concessions, Khosrow obtained 40,000 Roman troops and came to Azarbaijan, where Mushel’s Armenians and the Iranians of Bendoy and Bestam awaited him. Bahram arrived too late with a smaller army. After three days of battle, Bendoy won his men over with promises of safety. Bahram fled east with 4,000 men, defeated a Karen army at Qumes and took refuge with the Turks. There he was murdered on Khosrow’s orders.']],
      [['شهبازی می‌گوید نه خسرو، که سربازان مزدور رومی برتر بهرام را شکست دادند. جای نبرد و شمار روزها محل بحث است: هاوارد-جانستون نبرد را نزدیک گنزک و یک‌روزه می‌داند. جوانمردی بهرام، که گذاشت هواداران خسرو آزادانه بروند، به زیان خودش تمام شد.'],
        ['Shahbazi says it was not Khosrow but his superior Roman troops who defeated Bahram. The place and length of the battle are disputed: Howard-Johnston puts it near Ganzak and has it last one day. Bahram’s chivalry in letting Khosrow’s supporters leave unharmed turned against him.']],
      [['شاه ایران تاجش را با سپاه بیگانه و بهای سرزمین پس گرفت. جنگ داخلی میان مدعیان، هزینه‌اش را مردم و مرزها می‌پردازند.'],
        ['The king of Iran won back his crown with a foreign army and at the price of territory. In a civil war between claimants, the people and the borders pay the bill.']],
      ['ir-bahram6', 'ir-khosrow2'], {
        clip: { media: battleClipFor('bahram-chobin', 'urmia', 992, 522), caption: B('نبرد پایانی بهرام و خسرو، گام‌به‌گام (طرح‌وار)', 'The final battle of Bahram and Khosrow, step by step (schematic)') },
      }),
    sec('romance', 'رمان بهرام چوبین', 'The Bahram Chobin romance',
      [['یاد بهرام در یک رمان پهلوی، «بهرام چوبین‌نامه»، زنده ماند. جبلة بن سالم آن را به عربی برگرداند و، آمیخته با روایتی دیگر که هوادار خسرو پرویز بود، به کتاب‌های دینوری، فردوسی، بلعمی و «نهایة الارب» راه یافت. آرتور کریستنسن در ۱۹۰۷ شکل اصلی آن را بازسازی کرد. بهرام کتابی دربارهٔ تیراندازی هم نوشته بود. سامانیان خود را از تبار پسرش نوشرد می‌دانستند.'],
        ['Bahram’s memory lived on in a Pahlavi romance, the Bahrām Čōbīn-nāma. Jabala b. Sālem translated it into Arabic, and, mixed with another account favourable to Khosrow Parvez, it found its way into Dinavari, Ferdowsi, Balʿami and the Nehāyat al-arab. Arthur Christensen reconstructed its main form in 1907. Bahram was also credited with a manual on archery. The Samanids traced their descent to his son Noshrad.']],
      [['این رمان ادبیات است، نه گزارش. در آن بهرام از تبار اشکانیان و کی آرش است. شهبازی می‌گوید رمان هنگامی نوشته شد که یاد بهرام هنوز زنده بود و بازتاب آن در شاهنامه از شاهکارهای ادب فارسی است.'],
        ['The romance is literature, not a report. In it Bahram descends from the Arsacids and from Kay Arash. Shahbazi says it was written while Bahram’s memory was still alive, and its reflection in the Shahnameh counts as one of the masterpieces of Persian literature.']],
      [['دو روایت از یک مرد ماند: «غاصب پست» در تاریخ رسمی خسرو، و «قهرمان دادگر» در رمان. تاریخ‌نگاری که تنها یک روایت را بخواند، تنها صدای برنده را شنیده است.'],
        ['Two accounts of one man survived: the “lowly usurper” of Khosrow’s official history, and the “just hero” of the romance. A historian who reads only one has heard only the winner’s voice.']],
      ['ir-bahram6'], {
        quotes: [{ text: 'The picture of Bahrām in the romance is that of an illustrious knight of kingly origins and noble disposition, a superb, highly educated and disciplinarian general, and a witty, just, and wise king.', fa: 'تصویر بهرام در این رمان تصویر سوارکاری نامدار از تبار شاهان و با سرشتی والاست؛ سرداری برجسته، بسیار فرهیخته و سخت‌گیر در انضباط، و شاهی بذله‌گو، دادگر و خردمند.', ref: 'A. Sh. Shahbazi, “Bahrām VI Čōbīn”, Encyclopaedia Iranica (1988)', source: 'ir-bahram6' }],
        folk: {
          title: B('روایت ادبی: بهرام، قهرمان رمان', 'Literary tradition: Bahram, hero of the romance'),
          story: {
            fa: ['در رمان، رومیان، خزرها، تازیان و ترکان همزمان به ایران می‌تازند. بهرام خطرناک‌ترین دشمن، ترکان، را درهم می‌شکند. تنها هنگامی بر هرمز، که ناعادلانه خوارش کرده بود، برمی‌خیزد که سپاهیانش و انجمنی از بزرگان از او می‌خواهند. بزرگان تاج‌گذاری‌اش را می‌پذیرند و او با دلیری برای حق خود می‌جنگد. بیش از همه، مردی است که بر سر پیمانش می‌ماند و به یاران و میهنش وفادار است.'],
            en: ['In the romance, the Romans, the Khazars, the Arabs and the Turks attack Iran at once. Bahram crushes the most dangerous enemy, the Turks. He moves against Hormizd, who had unjustly disgraced him, only when his troops and an assembly of nobles urge him to. The nobles sanction his accession, and he fights for his right with gallantry. Above all he is a man of his word, devoted to his men and his country.'],
          },
          origin: {
            fa: ['این روایت ادبی است، نه تاریخ: یک رمان پهلوی که از طریق ترجمهٔ عربی به دینوری و شاهنامه رسید و با روایتی هوادار خسرو آمیخته شد. خلاصه از شهبازی (ایرانیکا) است.'],
            en: ['This is a literary tradition, not history: a Pahlavi romance that reached Dinavari and the Shahnameh through an Arabic translation, mixed with an account favourable to Khosrow. The summary follows Shahbazi (Iranica).'],
          },
          sources: ['ir-bahram6'],
        },
      }),
  ],
  synthesis: { title: B('جمع‌بندی', 'Synthesis'), paras: {
    fa: ['بهرام چوبین سرداری بود که شرق ایران را از یورش ترکان و هپتالیان نجات داد. ناسپاسی هرمز او را به شورش کشاند و یک سال شاه بود. بزرگان، موبدان و سپاه رومی خسرو او را شکست دادند و در تبعید کشته شد. تاریخ رسمی او را غاصب خواند و رمانی پهلوی قهرمانش کرد. جای نبرد پایانی، تاریخ تاج‌گذاری و داستان زنجیر و دوک محل بحث است.'],
    en: ['Bahram Chobin was the general who saved eastern Iran from the Turkish and Hephthalite invasion. Hormizd’s ingratitude drove him to revolt, and he was king for a year. The nobles, the priests and Khosrow’s Roman army defeated him, and he was murdered in exile. The official history called him a usurper and a Pahlavi romance made him a hero. The place of the final battle, the date of the coronation and the chain-and-spindle story are disputed.'],
  }, sources: ['ir-bahram6', 'ir-khosrow2'] },
  sources: pick('ir-bahram6', 'ir-hormozd4', 'ir-khosrow2'),
  photos: photos('coin-bahram6', 'bahram-saveh'),
  related: related(['hormizd-iv', 'هرمز چهارم، شاهی که او را خوار کرد', 'Hormizd IV, the king who disgraced him'], ['khosrow-i', 'خسرو یکم', 'Khosrow I'], ['khosrow-ii', 'خسرو دوم، رقیبش', 'Khosrow II, his rival']),
  wikipedia: 'https://en.wikipedia.org/wiki/Bahram_Chobin',
}
