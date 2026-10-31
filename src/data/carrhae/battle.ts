/** The cinematic Carrhae diagram: units, terrain and phases (schematic 1280×720 frame). Sources as in ./index.ts. */
import type { Bi, BiParas } from '../featured/types'

const B = (fa: string, en: string): Bi => ({ fa, en })
const P = (fa: string[], en: string[]): BiParas => ({ fa, en })

/* ---------- cinematic battle ---------- */

export type UnitKind = 'legion' | 'cohort' | 'light' | 'gallic' | 'cataphract' | 'archer' | 'camel' | 'commander' | 'wounded'
export type Side = 'rome' | 'parthia'
/** Positions are in the 1280×720 diagram frame; north is up. */
export type XY = [number, number]
export interface UnitState { at: XY; hidden?: boolean; gone?: boolean }
export interface BattleUnitDef { id: string; kind: UnitKind; side: Side; label: Bi }
export type Effect = 'drums' | 'dust' | 'night' | 'heat' | 'reveal'
export interface Phase {
  id: string
  title: Bi
  when: Bi
  /** one or two short lines drawn inside the diagram */
  caption: Bi
  /** the fuller narrative under the diagram */
  body: BiParas
  units: Record<string, UnitState>
  /** [from unit, to unit]: arrow volleys or resupply runs */
  volleys?: [string, string][]
  resupply?: [string, string][]
  effects?: Effect[]
  /** a point marker, e.g. where Publius fell */
  marker?: { at: XY; label: Bi }
  certainty: 'secure' | 'probable' | 'disputed'
  certaintyNote?: Bi
  sources: string[]
}

export const units: BattleUnitDef[] = [
  { id: 'square', kind: 'legion', side: 'rome', label: B('لژیون‌ها در مربع', 'Legions in a square') },
  { id: 'crassus', kind: 'commander', side: 'rome', label: B('کراسوس', 'Crassus') },
  { id: 'light', kind: 'light', side: 'rome', label: B('پیادهٔ سبک', 'Light infantry') },
  { id: 'gauls', kind: 'gallic', side: 'rome', label: B('سواران گل پوبلیوس', 'Publius’ Gallic horse') },
  { id: 'cohorts8', kind: 'cohort', side: 'rome', label: B('هشت کوهورت', 'Eight cohorts') },
  { id: 'wounded', kind: 'wounded', side: 'rome', label: B('۴٬۰۰۰ زخمی رهاشده', '4,000 wounded left behind') },
  { id: 'varg', kind: 'cohort', side: 'rome', label: B('چهار کوهورتِ وارگونتیوس', 'Vargunteius’ four cohorts') },
  { id: 'octavius', kind: 'cohort', side: 'rome', label: B('اکتاویوس با ۵٬۰۰۰ تن', 'Octavius with 5,000') },
  { id: 'cat', kind: 'cataphract', side: 'parthia', label: B('زره‌پوشان (کاتافرکت)', 'Cataphracts') },
  { id: 'ha-n', kind: 'archer', side: 'parthia', label: B('کمانداران سوار', 'Horse archers') },
  { id: 'ha-e', kind: 'archer', side: 'parthia', label: B('کمانداران سوار', 'Horse archers') },
  { id: 'ha-s', kind: 'archer', side: 'parthia', label: B('کمانداران سوار', 'Horse archers') },
  { id: 'ha-w', kind: 'archer', side: 'parthia', label: B('کمانداران سوار', 'Horse archers') },
  { id: 'camels', kind: 'camel', side: 'parthia', label: B('شترهای بار تیر', 'Arrow camels') },
  { id: 'surena', kind: 'commander', side: 'parthia', label: B('سورنا', 'Surena') },
]

/* Fixed terrain, drawn by the component. */
export const terrain = {
  river: [[330, 0], [318, 90], [336, 190], [312, 300], [330, 420], [306, 540], [322, 640], [300, 720]] as XY[],
  carrhae: [262, 86] as XY,
  sinnaca: [1110, 96] as XY,
  hillock: [930, 300] as XY,
  rises: [[560, 250], [780, 230], [1000, 260]] as XY[],
  labels: {
    river: B('رود بلیخ', 'Balikh river'),
    carrhae: B('حَرّان (کارهه)', 'Carrhae (Harran)'),
    sinnaca: B('تپه‌های سیناکا', 'Sinnaca hills'),
    hillock: B('تپهٔ شنی', 'sandy hillock'),
    south: B('از فرات ↑', '↑ from the Euphrates'),
    schematic: B('نمودار طرح‌وار؛ جای یگان‌ها ترتیب رویدادها را نشان می‌دهد نه زمین نقشه‌برداری‌شده را', 'Schematic: positions show the order of events, not surveyed ground'),
  },
}

const SQ: XY = [560, 470]
const hidden = (at: XY): UnitState => ({ at, hidden: true })
const gone = (at: XY): UnitState => ({ at, gone: true })
/** Off-stage defaults so every unit has a state in every phase. */
const base = (): Record<string, UnitState> => ({
  square: { at: [560, 650] }, crassus: { at: [560, 650] }, light: gone([560, 690]), gauls: gone([620, 690]), cohorts8: gone([620, 690]),
  wounded: gone(SQ), varg: gone(SQ), octavius: gone(SQ),
  cat: hidden([660, 250]), 'ha-n': hidden([560, 230]), 'ha-e': hidden([860, 250]), 'ha-s': hidden([760, 270]), 'ha-w': hidden([460, 260]),
  camels: hidden([960, 200]), surena: hidden([700, 200]),
})
const at = (over: Record<string, UnitState>) => ({ ...base(), ...over })

export const phases: Phase[] = [
  {
    id: 'desert', title: B('راه بیابان', 'The desert road'), when: B('۶ مه ۵۳ پ.م.، بامداد', '6 May 53 BCE, morning'),
    caption: B('کراسوس به راهنمایی آریامنس از فرات دور شد و در دشتی بی‌آب به سوی بلیخ رفت.', 'Guided by Ariamnes, Crassus left the Euphrates and marched across waterless plain towards the Balikh.'),
    body: P(['کراسوس پیشنهاد آرتاوازد، شاه ارمنستان، را رد کرد که از راه کوهستان بیاید؛ کوه برای سوارهٔ پارتی جای خوبی نبود. او به راهنمایی یک فرمانروای عرب، که پلوتارک او را آریامنس می‌نامد و پژوهشگران معمولاً همان اَبگار، فرمانروای اُسروئنه، می‌دانند، از کنار فرات به دل دشت رفت. پلوتارک دشت را «دریایی از شن» می‌خواند: نه درختی، نه آبی، نه سبزه‌ای.'],
      ['Crassus turned down the advice of Artavasdes, king of Armenia, to come through the mountains, where Parthian cavalry was at a disadvantage. Guided by an Arab chief whom Plutarch calls Ariamnes, and whom scholars usually identify with Abgar of Osroene, he left the Euphrates for the open plain. Plutarch calls it “a sea of sand”: no tree, no water, no green herb.']),
    units: at({ square: { at: [560, 560] }, crassus: { at: [560, 560] } }), effects: ['heat'],
    certainty: 'probable', certaintyNote: B('اینکه آریامنس/ابگار عمداً رومیان را به دام برد، تنها ادعای پلوتارک است؛ شهبازی (ایرانیکا) خیانت او را ثابت‌نشده می‌داند.', 'That Ariamnes/Abgar deliberately led the Romans into a trap is Plutarch’s claim; Shahbazi (Iranica) treats the treachery as unproven.'),
    sources: ['plut-crassus', 'ir-carrhae'],
  },
  {
    id: 'square', title: B('مربع رومی', 'The Roman square'), when: B('نیم‌روز، کنار بلیخ', 'midday, at the Balikh'),
    caption: B('خبر رسید دشمن نزدیک است. کراسوس سپاه را در مربعی آراست: هر ضلع دوازده کوهورت.', 'Word came that the enemy was near. Crassus formed a square: twelve cohorts on each side.'),
    body: P(['پیشاهنگان زخمی برگشتند و گفتند دشمن با همهٔ نیرو نزدیک است. کراسوس نخست به پیشنهاد کاسیوس صف را باز و پهن کرد، اما بعد نظرش برگشت و سپاه را در مربعی توخالی آراست؛ هر ضلع دوازده کوهورت و کنار هر کوهورت یک دسته سوار. کاسیوس یک جناح را داشت، پوبلیوس، پسر کراسوس، جناح دیگر را و خود کراسوس میانه را. کنار رود کوچک بلیخ بیشتر فرماندهان می‌خواستند شب بمانند. پوبلیوس و سوارانش برای جنگ بی‌تاب بودند و کراسوس فرمان پیشروی داد.'],
      ['Wounded scouts came back saying the enemy was close in full force. At first, on Cassius’ advice, Crassus spread his line wide; then he changed his mind and drew the army up in a hollow square, twelve cohorts to a side, each with a troop of horse. Cassius held one wing, Publius, Crassus’ son, the other, and Crassus the centre. At the little river Balikh most officers wanted to camp for the night. Publius and his horsemen were eager to fight, and Crassus ordered the advance.']),
    units: at({ square: { at: SQ }, crassus: { at: SQ }, gauls: { at: [640, 470] } }),
    certainty: 'secure', sources: ['plut-crassus', 'ir-carrhae'],
  },
  {
    id: 'drums', title: B('طبل‌ها و پولاد مرو', 'Drums and Margianian steel'), when: B('بعدازظهر', 'afternoon'),
    caption: B('پارتیان پشت پیشاهنگان پنهان بودند. ناگهان طبل‌ها غرید و زره‌ها از زیر پوشش بیرون آمد.', 'The Parthians were hidden behind their vanguard. Suddenly the drums thundered and the armour came out from under its covers.'),
    body: P(['سورنا سپاه اصلی را پشت پیشاهنگان پنهان کرده بود و زره‌ها را زیر پوشش و پوست پوشانده بود. با فرمان او، دشت از غرش طبل‌ها پر شد. پلوتارک می‌گوید پارتیان با بوق و شیپور جنگ را آغاز نمی‌کنند، بلکه با طبل‌هایی که صدایشان «مانند نعرهٔ جانوران» و تندر است. سپس پوشش‌ها را انداختند و در خود و زره‌هایی از «پولاد مرو» درخشیدند.'],
      ['Surena had hidden his main body behind the vanguard, its armour under coats and skins. At his signal the plain filled with the roar of drums. Plutarch says the Parthians do not rouse themselves for war with horns and trumpets but with drums, whose sound is like “the bellowing of beasts” mixed with thunder. Then they threw off the covers and blazed in helmets and breastplates of “Margianian steel”.']),
    units: at({ square: { at: SQ }, crassus: { at: SQ }, gauls: { at: [640, 470] }, cat: { at: [600, 330] }, 'ha-n': { at: [470, 300] }, 'ha-e': { at: [790, 330] }, surena: { at: [640, 260] }, camels: hidden([960, 220]) }),
    effects: ['drums', 'reveal'], certainty: 'secure', sources: ['plut-crassus'],
  },
  {
    id: 'feint', title: B('یورش نمایشی و حلقه', 'The feint and the ring'), when: B('بعدازظهر', 'afternoon'),
    caption: B('زره‌پوشان پیش تاختند، ژرفای صف را دیدند و برگشتند؛ کمانداران دور مربع پخش شدند.', 'The cataphracts rode in, saw the depth of the ranks and pulled back; the horse archers spread round the square.'),
    body: P(['به گفتهٔ پلوتارک، زره‌پوشان نخست می‌خواستند با نیزه صف جلو را بشکنند. چون ژرفای صف و پایداری سربازان را دیدند، وانمود کردند پراکنده می‌شوند و در همان حال مربع را دور زدند. کراسوس پیادهٔ سبک را به پیش فرستاد؛ آن‌ها زیر باران تیر زود به میان سنگین‌اسلحه‌ها برگشتند.'],
      ['Plutarch says the cataphracts first meant to break the front ranks with their lances. Seeing the depth of the formation and the men standing firm, they pretended to scatter and, as they did, rode round the square. Crassus sent the light infantry forward; under a shower of arrows they soon fell back among the heavy infantry.']),
    units: at({ square: { at: SQ }, crassus: { at: SQ }, gauls: { at: [640, 470] }, light: { at: [560, 430] }, cat: { at: [660, 360] }, 'ha-n': { at: [430, 420] }, 'ha-e': { at: [800, 500] }, 'ha-s': { at: [700, 590] }, 'ha-w': { at: [410, 560] }, surena: { at: [660, 280] } }),
    volleys: [['ha-n', 'light']], certainty: 'secure', sources: ['plut-crassus'],
  },
  {
    id: 'arrows', title: B('باران تیر', 'The arrow storm'), when: B('بعدازظهر', 'afternoon'),
    caption: B('تیرها سپر و زره را می‌شکافت. اگر می‌ماندند زخمی می‌شدند؛ اگر یورش می‌بردند، سواران می‌گریختند و تیر می‌انداختند.', 'The arrows went through shields and armour. If the Romans stood, they were hit; if they charged, the riders fled and shot as they fled.'),
    body: P(['پارتیان با فاصله از هر سو تیر انداختند. پلوتارک می‌گوید لازم نبود نشانه بگیرند، چون صف رومی چنان فشرده بود که تیر به خطا نمی‌رفت. تیرها «از کمان‌های سخت‌کشیده» با نیروی بسیار می‌آمد. اگر رومیان در صف می‌ماندند زخمی می‌شدند و اگر یورش می‌بردند، سواران در حال گریز تیر می‌انداختند؛ هنری که پلوتارک می‌گوید جز سکاها کسی در آن از پارتیان بهتر نیست.'],
      ['The Parthians took up positions at a distance and shot from every side. Plutarch says they had no need to aim: the Roman order was so close that they could not miss. The arrows came “out of strong bent bows” with great force. If the Romans kept their ranks they were wounded; if they charged, the riders shot as they fled, an art in which, Plutarch says, none but the Scythians excel them.']),
    units: at({ square: { at: SQ }, crassus: { at: SQ }, gauls: { at: [640, 470] }, cat: { at: [660, 380] }, 'ha-n': { at: [470, 410] }, 'ha-e': { at: [790, 480] }, 'ha-s': { at: [680, 590] }, 'ha-w': { at: [390, 555] }, surena: { at: [660, 290] } }),
    volleys: [['ha-n', 'square'], ['ha-e', 'square'], ['ha-s', 'square'], ['ha-w', 'square']], certainty: 'secure', sources: ['plut-crassus'],
  },
  {
    id: 'camels', title: B('شترهای پر از تیر', 'Camels loaded with arrows'), when: B('بعدازظهر', 'afternoon'),
    caption: B('رومیان امید داشتند تیرها تمام شود. اما شترهای پر از تیر می‌رسیدند و کمانداران دوباره پر می‌کردند.', 'The Romans hoped the arrows would run out. But camels loaded with arrows kept coming, and the archers refilled.'),
    body: P(['رومیان دلخوش بودند که تیر دشمن تمام می‌شود و آن‌گاه یا دست می‌کشد یا به جنگ تن‌به‌تن می‌آید. اما دیدند شترهای بسیاری بار تیر دارند و هر صفی که تیرهایش تمام می‌شد، دور می‌زد و تیر تازه برمی‌داشت. پلوتارک می‌گوید کراسوس که پایانی نمی‌دید، دل باخت و به پسرش پیام داد پیش از آنکه محاصره کامل شود، به دشمن بتازد.'],
      ['The Romans comforted themselves that the enemy would run out of arrows and then either stop or close in. Then they saw that many camels were loaded with arrows, and that each rank that had shot its quiver wheeled off and took more. Plutarch says Crassus, “seeing no end of it, was out of all heart”, and told his son to charge before they were quite surrounded.']),
    units: at({ square: { at: SQ }, crassus: { at: SQ }, gauls: { at: [640, 470] }, cat: { at: [660, 380] }, 'ha-n': { at: [490, 400] }, 'ha-e': { at: [810, 470] }, 'ha-s': { at: [700, 590] }, 'ha-w': { at: [380, 545] }, camels: { at: [900, 330] }, surena: { at: [680, 290] } }),
    volleys: [['ha-n', 'square'], ['ha-s', 'square'], ['ha-w', 'square']], resupply: [['camels', 'ha-e'], ['camels', 'ha-n']],
    certainty: 'secure', sources: ['plut-crassus', 'ir-carrhae'],
  },
  {
    id: 'publius', title: B('یورش پوبلیوس', 'Publius charges'), when: B('اواخر بعدازظهر', 'late afternoon'),
    caption: B('پوبلیوس با ۱٬۳۰۰ سوار، ۵۰۰ کماندار و هشت کوهورت تاخت. پارتیان وانمود به گریز کردند.', 'Publius charged with 1,300 horse, 500 archers and eight cohorts. The Parthians pretended to flee.'),
    body: P(['پوبلیوس هزار و سیصد سوار برداشت که هزار تن از آنان را سزار از گل فرستاده بود، به‌علاوهٔ پانصد کماندار و هشت کوهورت. پارتیانِ روبه‌رویش برگشتند و گریختند؛ شاید به سبب زمین باتلاقی، شاید برای اینکه او را از پدرش دور کنند. پوبلیوس فریاد زد که دشمن تاب ایستادن ندارد و دنبالشان تاخت. پیاده‌ها هم پشت سرش دویدند.'],
      ['Publius took 1,300 horse, 1,000 of them sent by Caesar from Gaul, with 500 archers and eight cohorts. The Parthians in front of him turned and fled, perhaps because of marshy ground, perhaps to draw him away from his father. Publius cried out that they dared not stand and rode after them; the infantry ran behind.']),
    units: at({ square: { at: SQ }, crassus: { at: SQ }, gauls: { at: [880, 420] }, cohorts8: { at: [790, 470] }, cat: { at: [1000, 400] }, 'ha-n': { at: [500, 400] }, 'ha-e': { at: [1040, 330] }, 'ha-s': { at: [700, 590] }, 'ha-w': { at: [400, 550] }, camels: { at: [1000, 220] }, surena: { at: [1060, 260] } }),
    volleys: [['ha-w', 'square']], certainty: 'secure', sources: ['plut-crassus'],
  },
  {
    id: 'trap', title: B('دام', 'The trap'), when: B('اواخر بعدازظهر', 'late afternoon'),
    caption: B('گریختگان برگشتند و سواران تازه رسیدند. زره‌پوشان روبه‌رو ایستادند، گرد و خاک برخاست و تیرها بارید.', 'The fugitives turned and fresh riders came up. Cataphracts stood in front, dust rose and the arrows fell.'),
    body: P(['وقتی پوبلیوس بسیار دور شد، گریختگان برگشتند و سواران تازه هم رسیدند. پارتیان زره‌پوشان را روبه‌روی رومیان گذاشتند و بقیه دور آن‌ها تاختند و چنان گرد و خاکی برانگیختند که رومیان نه یکدیگر را می‌دیدند و نه صدای هم را می‌شنیدند. پلوتارک می‌گوید سواران گل نیزه‌های بلند دشمن را می‌گرفتند و زره‌پوشان را از اسب پایین می‌کشیدند، یا زیر اسب‌ها می‌خزیدند و شکمشان را می‌دریدند. سرانجام با پوبلیوسِ زخمی به یک تپهٔ شنی پناه بردند.'],
      ['When Publius had gone too far, the fugitives turned and fresh riders arrived. The Parthians set their cataphracts to face the Romans while the rest rode round them, raising such dust that the Romans could neither see nor hear one another. Plutarch says the Gallic horsemen caught hold of the long spears and pulled the cataphracts from their horses, or crept under the horses and stabbed them in the belly. At last they fell back, with Publius badly wounded, to a sandy hillock.']),
    units: at({ square: { at: SQ }, crassus: { at: SQ }, gauls: { at: [870, 360] }, cohorts8: { at: [960, 290] }, cat: { at: [1010, 380] }, 'ha-n': { at: [860, 230] }, 'ha-e': { at: [1060, 260] }, 'ha-s': { at: [840, 420] }, 'ha-w': { at: [440, 545] }, camels: { at: [1180, 250] }, surena: { at: [1100, 330] } }),
    volleys: [['ha-n', 'cohorts8'], ['ha-e', 'cohorts8'], ['ha-s', 'gauls']], effects: ['dust'],
    certainty: 'secure', sources: ['plut-crassus'],
  },
  {
    id: 'head', title: B('مرگ پوبلیوس، سرِ بر نیزه', 'Publius falls; a head on a spear'), when: B('غروب', 'towards evening'),
    caption: B('پوبلیوس فرمان داد سلاح‌دارش او را بکشد. تنها حدود ۵۰۰ تن اسیر شدند. پارتیان سرش را بر نیزه به مربع آوردند.', 'Publius had his armour-bearer kill him. Only about 500 were taken alive. The Parthians brought his head on a spear to the square.'),
    body: P(['دو یونانی از حران از پوبلیوس خواستند با آن‌ها به ایخنای بگریزد. پوبلیوس نپذیرفت و چون بازویش با تیری سوراخ شده بود، به سلاح‌دارش فرمان داد او را بکشد. پلوتارک می‌گوید بیش از پانصد تن اسیر نشدند. پارتیان سر پوبلیوس را بر نیزه کردند و با غرش طبل‌ها به سوی مربع آمدند و ریشخند کردند که پسری چنین دلیر نمی‌تواند فرزند پدری چنین ترسو باشد. کراسوس در صف‌ها گشت و سربازان را دلداری داد، اما فریاد جنگ آنان، به گفتهٔ پلوتارک، «سست و لرزان» بود. تیر و نیزه تا شب ادامه یافت.'],
      ['Two Greeks of Carrhae begged Publius to flee with them to Ichnae. He refused and, his arm pierced by an arrow, ordered his armour-bearer to run him through. Plutarch says no more than 500 were taken prisoner. The Parthians put Publius’ head on a spear and rode up to the square with their drums, jeering that so brave a man could not be the son of so cowardly a father. Crassus went along the ranks to rally his men, but their battle cry, Plutarch says, was “faint and unsteady”. Arrows and lances went on until night.']),
    units: at({ square: { at: SQ }, crassus: { at: SQ }, cat: { at: [620, 420] }, 'ha-n': { at: [470, 410] }, 'ha-e': { at: [780, 480] }, 'ha-s': { at: [690, 590] }, 'ha-w': { at: [390, 550] }, camels: { at: [900, 330] }, surena: { at: [660, 320] } }),
    volleys: [['ha-n', 'square'], ['ha-e', 'square'], ['ha-s', 'square'], ['ha-w', 'square']], effects: ['drums'],
    marker: { at: [930, 300], label: B('اینجا پوبلیوس افتاد', 'Publius falls here') },
    certainty: 'secure', sources: ['plut-crassus'],
  },
  {
    id: 'night', title: B('عقب‌نشینی شبانه به حران', 'Night retreat to Carrhae'), when: B('شب ۶ به ۷ مه', 'night of 6/7 May'),
    caption: B('شب، رومیان در خاموشی گریختند و ۴٬۰۰۰ زخمی را جا گذاشتند. پارتیان در تاریکی دنبالشان نکردند.', 'At night the Romans slipped away in silence, leaving 4,000 wounded. The Parthians did not follow in the dark.'),
    body: P(['شب دو سپاه را از هم جدا کرد. کراسوس خود را در ردایش پیچید و کنار کشید. اکتاویوس و کاسیوس افسران را گرد آوردند و فرمان دادند سپاه بی‌صدای شیپور راه بیفتد. زخمی‌ها که دیدند رهایشان کرده‌اند، شیون کردند. پارتیان شب دنبال نکردند، اما بامداد به اردوگاه آمدند و، به گفتهٔ پلوتارک، دست‌کم چهار هزار تن از آنان را کشتند. وارگونتیوس با چهار کوهورت در تاریکی راه را گم کرد؛ پارتیان آنان را روی تپه‌ای محاصره کردند و جز بیست تن همه را کشتند. آن بیست تن را، که با شمشیر راه باز کردند، از سر ستایش گذاشتند به حران بروند.'],
      ['Night parted the armies. Crassus wrapped himself in his cloak and lay apart. Octavius and Cassius called the officers together and had the army move out without trumpets. When the wounded realised they were being left, they cried out. The Parthians did not pursue by night, but at daybreak they came to the camp and, Plutarch says, put no fewer than 4,000 to the sword. Vargunteius lost his way in the dark with four cohorts; the Parthians surrounded them on a hill and killed all but twenty, who cut their way through and whom, admiring their courage, they let go to Carrhae.']),
    units: at({ square: { at: [300, 150] }, crassus: { at: [300, 150] }, wounded: { at: SQ }, varg: { at: [470, 300] }, cat: { at: [700, 420] }, 'ha-n': { at: [520, 330] }, 'ha-e': { at: [800, 480] }, 'ha-s': { at: [680, 570] }, 'ha-w': { at: [430, 520] }, camels: { at: [900, 340] }, surena: { at: [700, 340] } }),
    volleys: [['ha-n', 'varg']], effects: ['night'],
    certainty: 'secure', certaintyNote: B('رقم ۴٬۰۰۰ زخمی از پلوتارک است.', 'The figure of 4,000 wounded is Plutarch’s.'), sources: ['plut-crassus', 'ir-carrhae'],
  },
  {
    id: 'sinnaca', title: B('سیناکا: گفت‌وگو و مرگ', 'Sinnaca: the parley and the death'), when: B('چند روز بعد', 'a few days later'),
    caption: B('کراسوس از حران گریخت و راهنمایش او را گمراه کرد. سورنا به گفت‌وگو خواند؛ در درگیری کنار اسب، کراسوس کشته شد.', 'Crassus fled Carrhae and his guide led him astray. Surena called a parley; in a scuffle by a horse, Crassus was killed.'),
    body: P(['کراسوس شبانه از حران بیرون رفت و راهنمایی به نام آندروماخوس را برگزید که، به گفتهٔ پلوتارک، او را در باتلاق‌ها سرگردان کرد. کاسیوس با پانصد سوار به سوریه رفت. اکتاویوس با پنج هزار تن، با راهنمایان درست، تا سپیده به کوه‌های سیناکا رسید. سورنا کراسوس را به گفت‌وگو خواند و گفت باید کنار رود پیمان را امضا کنند. سربازان کراسوس را وادار کردند برود. سورنا اسبی با لگام زرین پیشکش کرد؛ مهتران کراسوس را بر اسب نشاندند و اسب را راندند. اکتاویوس لگام را گرفت، درگیری درگرفت و کراسوس کشته شد.'],
      ['Crassus left Carrhae by night and chose as guide a man called Andromachus, who, Plutarch says, led him round in circles among marshes. Cassius rode off to Syria with 500 horse. Octavius, with 5,000 men and honest guides, reached the Sinnaca hills by daybreak. Surena invited Crassus to a parley and said the treaty must be signed at the river. Crassus’ soldiers forced him to go. Surena offered a horse with a golden bit; grooms put Crassus in the saddle and drove the horse on. Octavius seized the bridle, a scuffle broke out, and Crassus was killed.']),
    units: at({ square: gone([300, 150]), crassus: { at: [1010, 180] }, octavius: { at: [1110, 120] }, cat: { at: [900, 220] }, 'ha-n': { at: [960, 140] }, 'ha-e': { at: [1050, 240] }, 'ha-s': { at: [820, 300] }, 'ha-w': gone([500, 400]), camels: gone([900, 340]), surena: { at: [960, 200] } }),
    marker: { at: [1010, 180], label: B('مرگ کراسوس', 'Crassus is killed') },
    certainty: 'disputed', certaintyNote: B('دام بود یا درگیری ناخواسته؟ پلوتارک سورنا را پیمان‌شکن می‌خواند، اما خودش می‌گوید جزئیات مرگ «حدس است نه دانش قطعی». ایرانیکا (به پیروی از دبووآز) می‌گوید شاید پارتیان قصد کشتن نداشتند.', 'A trap or an unplanned scuffle? Plutarch calls Surena a perjurer, yet says the details of the death are “conjecture rather than certain knowledge”. Iranica (after Debevoise) says the Parthians may not have meant to kill him.'),
    sources: ['plut-crassus', 'ir-carrhae', 'ir-orodes2', 'debevoise'],
  },
]

