/**
 * The Battle of Carrhae (53 BCE) as a topic page.
 * Spine: Plutarch, Crassus 16–33 (Dryden–Clough, verbatim quotes only); A. Sh. Shahbazi, “Carrhae”, Encyclopaedia Iranica;
 * M. J. Olbrycht, “Orodes II”, Iranica; Dio 40.12–27 and Florus 1.46 (paraphrase only); Pliny NH 6.47; Res Gestae 29.
 * The cinematic diagram is schematic: positions show the order of events, not surveyed ground.
 */
import type { Bi, BiParas, DossierQuote, FeaturedSource, MapEvent } from '../featured/types'
import type { CommonsPhoto } from '../places/types'
import type { Side } from './battle'
import { ARTAXATA, BALIKH, CARRHAE, CTESIPHON, ICHNAE, MERV, SELEUCIA, SINNACA, ZEUGMA, ev, note, parPhotos, pick } from '../arsacid/common'
import { carrhaeEvents } from '../arsacid/orodes2'

const B = (fa: string, en: string): Bi => ({ fa, en })
const P = (fa: string[], en: string[]): BiParas => ({ fa, en })

export * from './battle'

/* ---------- strategic map ---------- */

const abgar = ev('abgar', -53, B('مه ۵۳ پ.م.', 'May 53 BCE'), 'campaign', BALIKH, B('راهنمای عرب: اَبگار اُسروئنه', 'The Arab guide: Abgar of Osroene'),
  B('پس از گذر از فرات، فرمانروایی عرب که پلوتارک آریامنس می‌نامد، کراسوس را از رود دور کرد و به دشت برد. ایرانیکا او را با ابگار، فرمانروای اسروئنه (اورفا)، یکی می‌داند و همراه الخادونیوس عرب از میدان کنار کشید.',
    'After the Euphrates crossing, an Arab chief whom Plutarch calls Ariamnes led Crassus away from the river into the plain. Iranica identifies him with Abgar, ruler of Osroene (Edessa), who left the field together with the Arab Alchaudonius.'),
  'disputed', ['plut-crassus', 'ir-carrhae'], { route: [ZEUGMA, [38.5, 36.6], [38.9, 36.45], BALIKH], ...note('خیانت ابگار تنها در روایت رومی آمده و ثابت نشده است.', 'Abgar’s treachery is found only in the Roman account and is unproven.') })
const surenaWaits = ev('surena-march', -53, B('بهار ۵۳ پ.م.', 'spring 53 BCE'), 'campaign', ICHNAE, B('سورنا در میان‌رودان', 'Surena in Mesopotamia'),
  B('ارد سورنا را با سپاهی سراسر سواره به میان‌رودان فرستاد تا کراسوس را سرگرم کند. به گفتهٔ پلوتارک، سورنا هزار شتر بار، هزار سوار تمام‌زره و دست‌کم ده هزار سوار از وابستگان و خدمتگزارانش داشت.',
    'Orodes sent Surena into Mesopotamia with an all-cavalry army to hold Crassus. Plutarch says Surena had a thousand baggage camels, a thousand fully armed riders and at least ten thousand horsemen from his retainers and servants.'),
  'probable', ['plut-crassus', 'ir-carrhae'], { route: [SELEUCIA, [42.5, 34.6], [40.5, 35.8], ICHNAE] })
const merv = ev('merv', -53, B('پس از ۵۳ پ.م.', 'after 53 BCE'), 'admin', MERV, B('اسیران به مرو', 'The captives to Merv'),
  B('پلینی می‌گوید رومیانی که با کراسوس اسیر شدند، به مرغیانه (مرو) در دورترین شرق پارت برده شدند. شهبازی (ایرانیکا) شمار اسیران را حدود ده هزار می‌داند.',
    'Pliny says the Romans captured with Crassus were taken to Margiana (Merv), in the far east of Parthia. Shahbazi (Iranica) puts the captives at about ten thousand.'),
  'probable', ['pliny', 'ir-carrhae', 'plut-crassus'], { route: [CARRHAE, [42, 36.3], [46, 35.5], [51.4, 35.6], [56, 36.6], MERV] })

export const campaign = {
  title: B('لشکرکشی: از زئوگما تا حران و مرو', 'The campaign: from Zeugma to Carrhae and Merv'),
  events: [carrhaeEvents.zeugma, carrhaeEvents.armenia, surenaWaits, abgar, carrhaeEvents.carrhae, carrhaeEvents.death, carrhaeEvents.bacchae, merv] as MapEvent[],
  view: [34, 30.5, 63.5, 41] as [number, number, number, number],
  places: [
    { name: B('زئوگما', 'Zeugma'), c: ZEUGMA, left: true }, { name: B('حران', 'Carrhae'), c: CARRHAE }, { name: B('سیناکا', 'Sinnaca'), c: SINNACA },
    { name: B('آرتاشات', 'Artaxata'), c: ARTAXATA }, { name: B('سلوکیه', 'Seleucia'), c: SELEUCIA, left: true }, { name: B('تیسفون', 'Ctesiphon'), c: CTESIPHON },
    { name: B('مرو', 'Merv'), c: MERV },
  ],
}

/* ---------- order of battle ---------- */

export interface OobRow { side: Side; unit: Bi; figure: Bi; source: Bi; dispute?: Bi }
export const orderOfBattle: OobRow[] = [
  { side: 'rome', unit: B('پیادهٔ سنگین', 'Heavy infantry'), figure: B('۷ لژیون؛ حدود ۳۴٬۰۰۰', '7 legions; about 34,000'), source: B('پلوتارک ۲۰؛ برآورد ایرانیکا', 'Plutarch 20; Iranica estimate'), dispute: B('فلوروس از یازده لژیون می‌گوید.', 'Florus speaks of eleven legions.') },
  { side: 'rome', unit: B('سواره', 'Cavalry'), figure: B('کمی کمتر از ۴٬۰۰۰؛ از جمله ۱٬۰۰۰ سوار گل', 'just under 4,000, incl. 1,000 Gauls'), source: B('پلوتارک ۲۰ و ۲۵', 'Plutarch 20 and 25') },
  { side: 'rome', unit: B('پیادهٔ سبک', 'Light infantry'), figure: B('حدود ۴٬۰۰۰', 'about 4,000'), source: B('پلوتارک ۲۰', 'Plutarch 20') },
  { side: 'rome', unit: B('ارمنستان (در میدان نبود)', 'Armenia (not on the field)'), figure: B('۶٬۰۰۰ سوار آمد؛ ۱۰٬۰۰۰ زره‌پوش و ۳۰٬۰۰۰ پیاده وعده داده شد', '6,000 horse came; 10,000 cuirassiers and 30,000 foot promised'), source: B('پلوتارک ۱۹', 'Plutarch 19') },
  { side: 'rome', unit: B('متحدان عرب و اسروئنه', 'Arab and Osroenian allies'), figure: B('شمار نامعلوم؛ میدان را ترک کردند', 'numbers unknown; left the field'), source: B('پلوتارک ۲۱–۲۲؛ ایرانیکا', 'Plutarch 21–22; Iranica'), dispute: B('خیانت عمدی ثابت نشده است.', 'Deliberate treachery is unproven.') },
  { side: 'parthia', unit: B('زره‌پوشان (کاتافرکت)', 'Cataphracts'), figure: B('حدود ۱٬۰۰۰', 'about 1,000'), source: B('پلوتارک ۲۱ («هزار سوار تمام‌زره»)؛ ایرانیکا', 'Plutarch 21 (“one thousand completely armed”); Iranica') },
  { side: 'parthia', unit: B('کمانداران سوار', 'Horse archers'), figure: B('حدود ۹٬۰۰۰', 'about 9,000'), source: B('بازسازی ایرانیکا از «دست‌کم ده هزار سوار» پلوتارک', 'Iranica’s reconstruction from Plutarch’s “at least ten thousand horsemen”'), dispute: B('پلوتارک تنها شمار همراهان سورنا را می‌دهد، نه سپاه میدان را.', 'Plutarch gives the size of Surena’s retinue, not of the army on the field.') },
  { side: 'parthia', unit: B('شترهای بار تیر', 'Arrow camels'), figure: B('حدود ۱٬۰۰۰', 'about 1,000'), source: B('ایرانیکا؛ پلوتارک ۲۱ و ۲۵', 'Iranica; Plutarch 21 and 25') },
  { side: 'rome', unit: B('کشته‌ها', 'Killed'), figure: B('۲۰٬۰۰۰', '20,000'), source: B('پلوتارک ۳۱ («گفته می‌شود»)', 'Plutarch 31 (“it is generally said”)') },
  { side: 'rome', unit: B('اسیران', 'Captured'), figure: B('۱۰٬۰۰۰، به مرو برده شدند', '10,000, taken to Merv'), source: B('پلوتارک ۳۱؛ پلینی ۶.۴۷', 'Plutarch 31; Pliny 6.47') },
  { side: 'rome', unit: B('بازگشتگان به سوریه', 'Got back to Syria'), figure: B('حدود ۱۰٬۰۰۰، از جمله کاسیوس با ۵۰۰ سوار', 'about 10,000, incl. Cassius with 500 horse'), source: B('ایرانیکا (به پیروی از گونتر)؛ پلوتارک ۲۹', 'Iranica (after Günther); Plutarch 29') },
]
export const oobNote = B('همهٔ شمارها از منابع رومی یا بازسازی‌های امروزی است؛ هیچ گزارش پارتی از نبرد بر جا نمانده است. نسبت یک به چهار (شهبازی) از همین رقم‌ها برآمده است.',
  'Every figure comes from Roman sources or modern reconstruction; no Parthian account of the battle survives. Shahbazi’s ratio of one to four is drawn from these same numbers.')

/* ---------- why the Parthians won ---------- */

export interface Card { id: string; icon: string; title: Bi; evidence: BiParas; reading: BiParas; sources: string[] }
export const why: Card[] = [
  {
    id: 'bow', icon: '🏹', title: B('کمان: تیری که زره را می‌شکافت', 'The bow: arrows that went through armour'),
    evidence: P(['پلوتارک می‌گوید تیرها «از کمان‌های سخت‌کشیده» می‌آمد، از سلاح و هر پوششی، سخت یا نرم، می‌گذشت و دست سربازان را به سپرشان و پایشان را به زمین می‌دوخت.'],
      ['Plutarch says the arrows came “out of strong bent bows”, passed through every kind of covering, hard and soft alike, and pinned men’s hands to their shields and their feet to the ground.']),
    reading: P(['پژوهشگران امروزی این نیرو را به کمان مرکب نسبت می‌دهند: کمانی از چوب، شاخ و پی که در اندازه‌ای کوتاه، مناسب سوار، کششی بسیار نگه می‌دارد. پلوتارک نام ساخت کمان را نمی‌برد؛ این توضیح امروزی است.'],
      ['Modern scholars put this power down to the composite bow: wood, horn and sinew that hold a heavy draw in a length short enough for a rider. Plutarch does not describe how the bow was made; this explanation is modern.']),
    sources: ['plut-crassus', 'overtoom'],
  },
  {
    id: 'logistics', icon: '🐪', title: B('تدارک: هزار شتر پر از تیر', 'Logistics: a thousand camels of arrows'),
    evidence: P(['پلوتارک: کمانداران پس از خالی کردن ترکش «دور می‌زدند و تیر بیشتر برمی‌داشتند» و رومیان دیدند شترهای بسیاری بار تیر دارند. ایرانیکا شمار شترها را حدود هزار می‌گذارد.'],
      ['Plutarch: once the archers had emptied their quivers they “wheeled off and took more”, and the Romans saw numerous camels loaded with arrows. Iranica puts the camels at about a thousand.']),
    reading: P(['شهبازی از تارن نقل می‌کند که کماندار بی‌تیر بی‌فایده است، و تکیهٔ سورنا بر سواره را به تعبیر مومسن «اندیشه‌ای درخشان» می‌خواند. به گفتهٔ ایرانیکا، پیش از سورنا کسی تدارک پیوستهٔ تیر را در میدان سامان نداده بود. همین بود که امید رومیان به «تمام شدن تیرها» را بر باد داد.'],
      ['Shahbazi cites Tarn’s point that archers were useless without arrows, and calls Surena’s reliance on cavalry, in Mommsen’s phrase, a “brilliant idea”. Iranica says no one before Surena had organised a steady arrow supply on the field. That is what destroyed the Roman hope that the arrows would run out.']),
    sources: ['plut-crassus', 'ir-carrhae'],
  },
  {
    id: 'mobility', icon: '🐎', title: B('تحرک در برابر پیادهٔ سنگین', 'Mobility against heavy infantry'),
    evidence: P(['پلوتارک: اگر رومیان در صف می‌ماندند زخمی می‌شدند و اگر یورش می‌بردند، دشمن «در حال گریز تیر می‌انداخت». زره‌پوشان صف را نگه می‌داشتند تا رومیان پراکنده نشوند.'],
      ['Plutarch: if the Romans kept their ranks they were wounded, and if they charged, the enemy “threw their darts as they fled”. The cataphracts pinned the ranks so the Romans could not spread out.']),
    reading: P(['مربع رومی در برابر یورش سواره امن بود، اما در برابر تیر هدفی فشرده بود. ترکیب زره‌پوش و کماندار، رومیان را میان دو بد گیر انداخت: پراکنده شدن در برابر نیزه یا فشرده ماندن در برابر تیر. سواره و پیادهٔ سبک رومی کم‌تر از آن بودند که این گره را باز کنند.'],
      ['The Roman square was safe against a cavalry charge but a dense target for arrows. Cataphracts and archers together left the Romans two bad choices: spread out and face the lance, or stay close and face the arrow. Roman cavalry and light infantry were too few to break the bind.']),
    sources: ['plut-crassus', 'ir-carrhae'],
  },
  {
    id: 'command', icon: '⚑', title: B('فرماندهی سورنا', 'Surena’s command'),
    evidence: P(['پلوتارک می‌گوید سورنا هنوز سی ساله نبود، اما به خرد و زیرکی نامدار بود و «با همین ویژگی‌ها» کراسوس را شکست داد. او سپاه را پنهان کرد، با طبل ترساند، با یورش نمایشی حلقه زد و پوبلیوس را با گریز ساختگی از پدرش جدا کرد.'],
      ['Plutarch says Surena was not yet thirty but had a great name for wisdom and sagacity, and that “by these qualities chiefly” he overthrew Crassus. He hid his army, frightened the enemy with drums, ringed them after a feint, and drew Publius away from his father by a pretended flight.']),
    reading: P(['در برابر، رومیان پیشنهاد کوهستان را رد کردند، به راهنمایی ناآشنا تکیه کردند و کنار بلیخ نماندند. شهبازی می‌گوید گرمای «ژوئن» در روایت‌ها بیش از اندازه بزرگ شده، چون تاریخ تقویم رومی با فصل واقعی جور نبود؛ نبرد در واقع در اوایل مه بود.'],
      ['On the Roman side, the mountain route was refused, an unfamiliar guide was trusted, and no halt was made at the Balikh. Shahbazi says the “June” heat in the accounts is overstated, because the Roman calendar date was out of step with the real season; the battle was in fact in early May.']),
    sources: ['plut-crassus', 'ir-carrhae'],
  },
]

/* ---------- aftermath ---------- */

export interface AftermathItem { id: string; when: Bi; title: Bi; body: BiParas; sources: string[]; quote?: DossierQuote }
export const aftermath: AftermathItem[] = [
  {
    id: 'death', when: B('مه ۵۳ پ.م.', 'May 53 BCE'), title: B('مرگ کراسوس', 'The death of Crassus'),
    body: P(['پلوتارک می‌گوید کراسوس را پارتی‌ای به نام پوماخسرس کشت؛ یا به روایتی دیگر، پوماخسرس تنها سر و دست راست او را برید. خودش می‌افزاید که این «حدس است نه دانش قطعی». ایرانیکا یادآوری می‌کند که بریدن سر و دست، کیفر پیمان‌شکنان در نزد پارتیان بود.'],
      ['Plutarch says Crassus was killed by a Parthian called Pomaxathres, or, in another version, that Pomaxathres only cut off his head and right hand. He adds that this is “conjecture rather than certain knowledge”. Iranica notes that cutting off the head and hand was the Parthian punishment for breakers of a pact.']),
    sources: ['plut-crassus', 'ir-carrhae'],
    quote: { text: 'Crassus was killed by a Parthian, called Pomaxathres; others say, by a different man, and that Pomaxathres only cut off his head and right hand after he had fallen. But this is conjecture rather than certain knowledge, for those that were by had not leisure to observe particulars, and were either killed fighting about Crassus, or ran off at once to get to their comrades on the hill.', fa: 'کراسوس را پارتی‌ای به نام پوماخسرس کشت؛ دیگران می‌گویند مردی دیگر، و پوماخسرس تنها پس از افتادنش سر و دست راستش را برید. اما این حدس است نه دانش قطعی، چون حاضران فرصت دیدن جزئیات نداشتند و یا در جنگ گرد کراسوس کشته شدند یا بی‌درنگ به سوی یارانشان بر تپه گریختند.', ref: 'Plutarch, Crassus 31', source: 'plut-crassus' },
  },
  {
    id: 'toll', when: B('مه ۵۳ پ.م.', 'May 53 BCE'), title: B('بهای شکست', 'The cost'),
    body: P(['پلوتارک رقم مشهور را می‌دهد، اما با «گفته می‌شود». شهبازی، به پیروی از گونتر، می‌گوید حدود ده هزار تن به سوریه بازگشتند. تارن آن را «یکی از بدترین بلاهایی» می‌خواند که سپاه روم دید.'],
      ['Plutarch gives the famous figure, but with “it is generally said”. Shahbazi, following Günther, says about ten thousand got back to Syria. Tarn called it one of the worst disasters which the Roman arms ever suffered.']),
    sources: ['plut-crassus', 'ir-carrhae'],
    quote: { text: 'It is generally said, that in all twenty thousand men were slain, and ten thousand taken prisoners.', fa: 'عموماً گفته می‌شود که روی هم بیست هزار تن کشته و ده هزار تن اسیر شدند.', ref: 'Plutarch, Crassus 31', source: 'plut-crassus' },
  },
  {
    id: 'triumph', when: B('تابستان ۵۳ پ.م.', 'summer 53 BCE'), title: B('پیروزی‌نمایی ریشخندآمیز در سلوکیه', 'A mock triumph at Seleucia'),
    body: P(['به گفتهٔ پلوتارک، سورنا اسیری به نام گایوس پاکیانوس را که بیش از همه به کراسوس می‌مانست، با جامهٔ زنانه بر اسب نشاند و او را «کراسوس» و «فرمانده» خواند؛ پیشاپیش او شیپورزنان و لیکتورها سوار بر شتر می‌رفتند و زنان آوازخوان سلوکیه سرودهای ریشخندآمیز می‌خواندند.'],
      ['Plutarch says Surena dressed a prisoner, Caius Paccianus, who most resembled Crassus, in women’s clothes, set him on a horse and had him answer to “Crassus” and “Imperator”, with trumpeters and lictors on camels before him and the singing women of Seleucia chanting mocking songs.']),
    sources: ['plut-crassus'],
  },
  {
    id: 'bacchae', when: B('تابستان ۵۳ پ.م.', 'summer 53 BCE'), title: B('سرِ کراسوس و «باکخای» در دربار ارمنستان', 'Crassus’ head and the Bacchae at the Armenian court'),
    body: P(['ارد و آرتاوازد آشتی کرده بودند و پاکر، پسر ارد، با خواهر شاه ارمنستان نامزد شده بود. پلوتارک می‌گوید ارد با زبان و ادب یونانی آشنا بود و آرتاوازد خود تراژدی می‌نوشت. وقتی سر کراسوس رسید، بازیگری یونانی به نام یاسون، اهل ترالس، صحنهٔ آگاوه را از «باکخای» اوریپید می‌خواند؛ صحنه‌ای که مادری سر بریدهٔ پسرش را در جنون شکار می‌پندارد.'],
      ['Orodes and Artavasdes had made peace and Pacorus, Orodes’ son, was betrothed to the Armenian king’s sister. Plutarch says Orodes knew Greek language and literature and Artavasdes himself wrote tragedies. When the head of Crassus arrived, a Greek actor, Jason of Tralles, was singing the Agave scene from Euripides’ Bacchae, in which a mother, in her frenzy, takes her son’s severed head for a hunting prize.']),
    sources: ['plut-crassus', 'ir-orodes2'],
    quote: { text: 'When the head of Crassus was brought to the door, the tables were just taken away, and one Jason, a tragic actor, of the town of Tralles, was singing the scene in the Bacchae of Euripides concerning Agave. He was receiving much applause, when Sillaces coming to the room, and having made obeisance to the king, threw down the head of Crassus into the midst of the company.', fa: 'وقتی سر کراسوس را به در آوردند، خوان را تازه برچیده بودند و یاسون نامی، بازیگر تراژدی از شهر ترالس، صحنهٔ آگاوه را از باکخای اوریپید می‌خواند. او تشویق بسیار می‌شنید که سیلاکس به تالار آمد، به شاه کرنش کرد و سر کراسوس را در میان جمع انداخت.', ref: 'Plutarch, Crassus 33', source: 'plut-crassus' },
  },
  {
    id: 'surena', when: B('حدود ۵۳/۵۲ پ.م.', 'c. 53/52 BCE'), title: B('اعدام سورنا', 'The execution of Surena'),
    body: P(['چندی بعد ارد سورنا را کشت. پلوتارک انگیزه را رشک می‌داند؛ اولبریخت (ایرانیکا) می‌گوید شاه احتمالاً می‌خواست خود را از دست خاندانی آزاد کند که او را بر تخت نشانده بود. تاریخ و جای اعدام ثبت نشده است.'],
      ['Not long after, Orodes had Surena killed. Plutarch gives envy as the motive; Olbrycht (Iranica) says the king probably wanted to free himself from the clan that had put him on the throne. The date and place are not recorded.']),
    sources: ['plut-crassus', 'ir-orodes2'],
    quote: { text: 'Surena not long after was put to death by Hyrodes, out of mere envy to his glory', fa: 'سورنا چندی بعد به دست ارد کشته شد، تنها از رشک به شکوهش', ref: 'Plutarch, Crassus 33', source: 'plut-crassus' },
  },
  {
    id: 'merv', when: B('پس از ۵۳ پ.م.', 'after 53 BCE'), title: B('ده هزار اسیر در مرو', 'Ten thousand captives at Merv'),
    body: P(['پلینی می‌گوید اسیران سپاه کراسوس به مرغیانه (مرو) برده شدند، در آن سوی ایران و نزدیک دو هزار کیلومتر دور از میدان. سرنوشت بعدی‌شان را نمی‌دانیم.'],
      ['Pliny says the captives from Crassus’ army were taken to Margiana (Merv), on the far side of Iran, some two thousand kilometres from the field. What became of them is unknown.']),
    sources: ['pliny', 'ir-carrhae'],
  },
  {
    id: 'standards', when: B('۲۰ پ.م.', '20 BCE'), title: B('بازگشت درفش‌ها', 'The standards come home'),
    body: P(['سی و سه سال بعد، فرهاد چهارم درفش‌ها و اسیرانی را که از سپاه کراسوس و آنتونیوس مانده بودند، در پیمانی دیپلماتیک به آگوستوس پس داد. آگوستوس آن را در کارنامه‌اش پیروزی شمرد و درفش‌ها را در پرستشگاه مارس انتقام‌گیر نهاد.'],
      ['Thirty-three years later Phraates IV returned the standards and the surviving prisoners from the armies of Crassus and Antony in a diplomatic settlement. Augustus counted it a victory in his record of deeds and placed the standards in the temple of Mars Ultor.']),
    sources: ['res-gestae', 'ir-phraates4'],
    quote: { text: 'I compelled the Parthians to return to me the spoils and standards of three Roman armies, and as suppliants to seek the friendship of the Roman people. Furthermore I placed those standards in the sanctuary of the temple of Mars Ultor.', fa: 'پارتیان را واداشتم غنیمت‌ها و درفش‌های سه سپاه رومی را به من بازگردانند و همچون خواهندگان، دوستی مردم روم را بجویند. آن درفش‌ها را نیز در پرستشگاه مارس انتقام‌گیر نهادم.', ref: 'Res Gestae 29', source: 'res-gestae' },
  },
]

/* ---------- sources, historiography, legends ---------- */

export const historiography = P(
  ['همهٔ روایت‌های پیوسته از نبرد رومی‌اند. پلوتارک، که حدود ۱۵۰ سال بعد می‌نوشت، کامل‌ترین گزارش را دارد و روایتش باید سرانجام به گزارش بازماندگان برگردد. دیو کاسیوس (سدهٔ سوم میلادی) و فلوروس کوتاه‌ترند و همان چارچوب را دارند. هیچ گزارش پارتی بر جا نمانده؛ صدای ایرانی تنها از راه دشمن به ما رسیده است.',
    'از این رو در این صفحه سه لایه را جدا نگه می‌داریم: آنچه منابع می‌گویند (با نقل مستقیم از ترجمهٔ درایدن–کلاف)، آنچه پژوهشگران امروزی از آن برداشت می‌کنند (شهبازی، اولبریخت، دبووآز، تارن)، و آنچه نبرد برای امروز معنا می‌دهد. کینهٔ پلوتارک به سورنا و ریشخندش به «زنانگی» او بخشی از نگاه یونانی–رومی به «بربر» است و باید با احتیاط خوانده شود.'],
  ['Every continuous account of the battle is Roman. Plutarch, writing about 150 years later, gives the fullest one and his story must ultimately go back to survivors’ reports. Cassius Dio (3rd century CE) and Florus are shorter and follow the same frame. No Parthian account survives; the Iranian side reaches us only through its enemy.',
    'So this page keeps three layers apart: what the sources say (quoted verbatim from the Dryden–Clough translation), what modern scholars infer (Shahbazi, Olbrycht, Debevoise, Tarn), and what the battle means today. Plutarch’s hostility to Surena and his sneer at Surena’s “effeminacy” belong to the Greco-Roman view of the “barbarian” and should be read with care.'])

export interface Legend { id: string; title: Bi; claim: BiParas; verdict: BiParas; sources: string[] }
export const legends: Legend[] = [
  {
    id: 'liqian', title: B('افسانهٔ لژیون گمشده در چین (لیچیان)', 'The lost legion in China (Liqian)'),
    claim: P(['در ۱۹۵۷ هومر دابز پیشنهاد کرد که برخی از اسیران حران از مرو به شرق گریختند، در جنگی در سال ۳۶ پ.م. در سپاه شیان‌یو جنگیدند و سپس در شهری به نام لیچیان در چین ساکن شدند.'],
      ['In 1957 Homer Dubs suggested that some Carrhae captives escaped east from Merv, fought for the Xiongnu in a battle of 36 BCE and were then settled in a town called Liqian in China.']),
    verdict: P(['این نظریه‌ای امروزی است، نه گزارش باستانی. هیچ منبع رومی، پارتی یا چینی نمی‌گوید اسیران حران به چین رسیدند. بیشتر پژوهشگران آن را ثابت‌نشده می‌دانند.'],
      ['This is a modern theory, not an ancient report. No Roman, Parthian or Chinese source says that Carrhae captives reached China. Most scholars regard it as unproven.']),
    sources: ['dubs', 'pliny'],
  },
  {
    id: 'bronze', title: B('تندیس مفرغی «سورنا»', 'The “Surena” bronze'),
    claim: P(['تندیس بزرگ مفرغی شَمی در موزهٔ ملی ایران را در فضای عمومی و گاه در برچسب‌ها «سورنا» می‌نامند.'],
      ['The large bronze statue from Shami in the National Museum of Iran is popularly, and sometimes on labels, called “Surena”.']),
    verdict: P(['هیچ نوشته‌ای روی تندیس نیست که آن را به سورنا پیوند دهد. تندیس از شمی در الیمایی (بختیاری امروز) پیدا شد و پژوهشگران آن را پیکرهٔ شاهزاده یا بزرگی محلی از روزگار اشکانی می‌دانند. «سورنا» نامی امروزی است.'],
      ['No inscription links the statue to Surena. It was found at Shami in Elymais (today’s Bakhtiari country) and scholars take it for a local prince or noble of the Parthian period. “Surena” is a modern name.']),
    sources: ['kawami'],
  },
  {
    id: 'gold', title: B('طلای گداخته در دهان کراسوس', 'Molten gold in Crassus’ mouth'),
    claim: P(['دیو کاسیوس داستانی را بازگو می‌کند که پارتیان طلای گداخته در دهان سر کراسوس ریختند تا آز او را به ریشخند بگیرند.'],
      ['Cassius Dio repeats a story that the Parthians poured molten gold into the mouth of Crassus’ head, to mock his greed.']),
    verdict: P(['دیو خود این را «به گفتهٔ برخی» می‌آورد. پلوتارک، که سرنوشت سر را تا دربار ارمنستان دنبال می‌کند، چنین چیزی نمی‌گوید. آن را داستانی اخلاقی دربارهٔ آز بخوانید، نه گزارش.'],
      ['Dio himself gives it as “some say”. Plutarch, who follows the head to the Armenian court, says nothing of it. Read it as a moral tale about greed, not as a report.']),
    sources: ['dio', 'plut-crassus'],
  },
]

/* ---------- the liberty lens ---------- */

export const liberty = {
  title: B('ثروت کراسوس و بهای جنگ', 'Crassus’ wealth and the price of war'),
  paras: P(['کراسوس ثروتمندترین مرد روم بود و پلوتارک نشان می‌دهد این ثروت از کجا آمد: از خرید ارزان دارایی کسانی که سولا فهرست‌شان کرده و کشته بود، و از خرید خانه‌هایی که در آتش می‌سوختند و صاحبانشان «تقریباً به هیچ» می‌فروختند. ثروتی که از گرفتاری دیگران و از قدرت دولتی ساخته شده بود، به دنبال افتخار نظامی رفت.',
    'او به گفتهٔ پلوتارک می‌گفت کسی که نتواند با پول خودش سپاهی نگه دارد ثروتمند نیست. چیچرو، به نقل ایرانیکا، می‌گفت این جنگ «هیچ سببی» نداشت؛ پارت به روم نتاخته بود. بهای این جاه‌طلبی را سی هزار سرباز با جانشان یا آزادی‌شان پرداختند. در سوی دیگر هم، سرداری که پیروز شد، به دست شاه خود کشته شد. نه حق مالکیت شهروند رومی در برابر سولا امن بود، نه جان سردار پارتی در برابر رشک شاه.'],
  ['Crassus was the richest man in Rome, and Plutarch shows where the money came from: buying cheaply the estates of men Sulla had proscribed and killed, and buying burning houses whose owners sold them “for little, or nothing”. A fortune built on other people’s calamity and on state power went looking for military glory.',
    'Plutarch says Crassus held that no man was rich who could not keep an army at his own cost. Cicero, as Iranica notes, saw “no cause for the war”: Parthia had not attacked Rome. Thirty thousand soldiers paid for this ambition with their lives or their freedom. On the other side, the victorious general was killed by his own king. Neither the property of a Roman citizen was safe from Sulla, nor the life of a Parthian general from his king’s envy.']),
  quote: { text: 'he made it his practice to buy houses that were on fire, and those in the neighborhood, which, in the immediate danger and uncertainty, the proprietors were willing to part with for little, or nothing; so that the greatest part of Rome, at one time or other, came into his hands.', fa: 'عادتش این بود که خانه‌های در آتش و خانه‌های همسایه‌شان را بخرد؛ خانه‌هایی که صاحبانشان در آن خطر و سردرگمی، به اندک یا هیچ واگذار می‌کردند. چنین شد که بیشتر رم، زمانی یا زمانی دیگر، به دست او افتاد.', ref: 'Plutarch, Crassus 2', source: 'plut-crassus' } as DossierQuote,
  sources: ['plut-crassus', 'ir-carrhae'],
}

/* ---------- quotes in the battle narrative ---------- */

export const battleQuotes: DossierQuote[] = [
  { text: 'For the Parthians do not encourage themselves to war with cornets and trumpets, but with a kind of kettle-drum, which they strike all at once in various quarters. With these they make a dead hollow noise like the bellowing of beasts, mixed with sounds resembling thunder', fa: 'پارتیان با بوق و شیپور خود را برای جنگ برنمی‌انگیزند، بلکه با گونه‌ای طبل که همه با هم از هر سو بر آن می‌کوبند. با آن صدایی خفه و توخالی مانند نعرهٔ جانوران می‌سازند، آمیخته با بانگی چون تندر', ref: 'Plutarch, Crassus 23', source: 'plut-crassus' },
  { text: 'but when they presently understood that there were numerous camels loaded with arrows, and that when the first ranks had discharged those they had, they wheeled off and took more, Crassus seeing no end of it, was out of all heart', fa: 'اما چون دریافتند شترهای بسیاری بار تیر دارند و صف‌های نخست پس از انداختن تیرهایشان دور می‌زنند و تیر بیشتر برمی‌دارند، کراسوس که پایانی نمی‌دید، یکسره دل باخت', ref: 'Plutarch, Crassus 25', source: 'plut-crassus' },
]

/* ---------- images ---------- */

const u = (path: string) => `https://upload.wikimedia.org/wikipedia/commons/${path}`
const f = (name: string) => `https://commons.wikimedia.org/wiki/File:${name}`
/** Licence and author read from the Commons API on 2026-10-31. */
export const carrhaePhotos: CommonsPhoto[] = [
  { id: 'crassus-head', src: u('thumb/6/6c/Head_of_Marcus_Licinius_Crassus%2C_middle_of_1st_century_BC%2C_from_Italy%2C_Moi%2C_Auguste%2C_Empereur_de_Rome_exhibition%2C_Grand_Palais%2C_Paris_-_14649017884.jpg/960px-Head_of_Marcus_Licinius_Crassus%2C_middle_of_1st_century_BC%2C_from_Italy%2C_Moi%2C_Auguste%2C_Empereur_de_Rome_exhibition%2C_Grand_Palais%2C_Paris_-_14649017884.jpg'), page: f('Head_of_Marcus_Licinius_Crassus,_middle_of_1st_century_BC,_from_Italy,_Moi,_Auguste,_Empereur_de_Rome_exhibition,_Grand_Palais,_Paris_-_14649017884.jpg'), author: 'Following Hadrian (Carole Raddato)', license: 'CC BY-SA 2.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0', caption: { fa: 'سر مرمرین میانهٔ سدهٔ یکم پ.م. در موزهٔ لوور که کراسوس دانسته می‌شود؛ شناسایی آن قطعی نیست', en: 'Marble head, mid-1st century BCE, Louvre, identified as Crassus; the identification is not certain' } },
  parPhotos['coin-orodes2'],
  parPhotos['surena-statue'],
  { id: 'clibanarius', src: u('thumb/e/ea/Graffito_of_Clibanarius.jpg/960px-Graffito_of_Clibanarius.jpg'), page: f('Graffito_of_Clibanarius.jpg'), author: 'Yale University Art Gallery', license: 'Public domain', caption: { fa: 'نقش‌کندهٔ سوار زره‌پوش و اسب زره‌دار از دورا اروپوس، ۲۰۰–۲۵۶ م.؛ دو سده پس از حران، اما نزدیک‌ترین تصویر هم‌روزگار از این گونه سواره', en: 'Graffito of an armoured rider on an armoured horse, Dura-Europos, 200–256 CE: two centuries after Carrhae, but the closest ancient picture of this kind of cavalry' } },
  { id: 'horse-archer', src: u('2/2a/Parthian_mounted_archer.jpg'), page: f('Parthian_mounted_archer.jpg'), author: 'Jona Lendering (Livius.org)', license: 'CC0', caption: { fa: 'نقش برجستهٔ رومی از کماندار سوار پارتی، موزهٔ شهری تورین', en: 'Roman-period relief of a Parthian mounted archer, Museo Civico, Turin' } },
  { id: 'harran-houses', src: u('thumb/5/51/Harran_Beehive_houses_200.jpg/960px-Harran_Beehive_houses_200.jpg'), page: f('Harran_Beehive_houses_200.jpg'), author: 'Dosseman', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0', caption: { fa: 'خانه‌های گنبدی حران، ۱۹۹۷؛ دشت پیرامون شهر پیش از آبیاری گستردهٔ امروز', en: 'Beehive houses of Harran, 1997; the plain round the town before today’s large-scale irrigation' } },
  { id: 'harran-ruins', src: u('thumb/8/83/Harran_%C3%9Cniversitesi_Kal%C4%B1nt%C4%B1lar%C4%B1_2015-1.jpg/960px-Harran_%C3%9Cniversitesi_Kal%C4%B1nt%C4%B1lar%C4%B1_2015-1.jpg'), page: f('Harran_Üniversitesi_Kalıntıları_2015-1.jpg'), author: 'Hamdigumus', license: 'CC0', caption: { fa: 'ویرانه‌های اسلامی حران، ۲۰۱۵؛ از شهر روزگار کراسوس چیزی آشکار بر زمین نمانده است', en: 'Islamic-era ruins at Harran, 2015; nothing of the town of Crassus’ day stands visible above ground' } },
]

export const sourceIds = ['plut-crassus', 'ir-carrhae', 'ir-orodes2', 'ir-phraates4', 'dio', 'florus', 'pliny', 'res-gestae', 'debevoise', 'overtoom', 'kawami', 'dubs'] as const
export const carrhaeSources: FeaturedSource[] = pick(...sourceIds)

export const page = {
  title: B('نبرد حران (۵۳ پ.م.)', 'The Battle of Carrhae (53 BCE)'),
  kicker: B('اشکانیان · ارد دوم · سورنا', 'Arsacids · Orodes II · Surena'),
  lede: P(['در یک بعدازظهر بهاری سال ۵۳ پیش از میلاد، در دشتی بی‌درخت جنوب حران، ده هزار سوار پارتی سپاهی چهار برابر خود را از میان برداشتند. فرماندهشان سرداری کمتر از سی ساله بود که نام شخصی‌اش را هم نمی‌دانیم؛ تنها نام خاندانش، سورن، مانده است. مارکوس لیکینیوس کراسوس، ثروتمندترین مرد روم، پسرش، سپاهش و سرانجام جانش را از دست داد.',
    'این صفحه نبرد را گام‌به‌گام، تنها با آنچه منابع می‌گویند، دنبال می‌کند. هر جا شمار یا انگیزه‌ای محل بحث است، آن را نشان می‌دهیم.'],
  ['On a spring afternoon in 53 BCE, on a treeless plain south of Carrhae, ten thousand Parthian horsemen destroyed an army four times their size. Their commander was not yet thirty, and we do not even know his personal name; only his clan name, Sūrēn, survives. Marcus Licinius Crassus, the richest man in Rome, lost his son, his army and finally his life.',
    'This page follows the battle step by step, using only what the sources say. Wherever a figure or a motive is disputed, we say so.']),
  description: B('نبرد حران (۵۳ پ.م.): نمایش متحرک گام‌به‌گام، نقشهٔ لشکرکشی، شمار سپاه‌ها و اختلاف منابع، چرا پارتیان پیروز شدند، مرگ کراسوس و پیامدها، با نقل مستقیم پلوتارک.', 'The Battle of Carrhae (53 BCE): a step-by-step animated battle, the campaign map, the numbers and their disputes, why the Parthians won, the death of Crassus and the aftermath, with Plutarch quoted verbatim.'),
  clip: {
    gif: { fa: '/media/carrhae/battle-fa.gif', en: '/media/carrhae/battle-en.gif' },
    /** a light 640px GIF for sharing in chats */
    gifSmall: { fa: '/media/carrhae/battle-fa-640.gif', en: '/media/carrhae/battle-en-640.gif' },
    mp4: { fa: '/media/carrhae/battle-fa.mp4', en: '/media/carrhae/battle-en.mp4' },
    webm: { fa: '/media/carrhae/battle-fa.webm', en: '/media/carrhae/battle-en.webm' },
    poster: { fa: '/media/carrhae/battle-fa.png', en: '/media/carrhae/battle-en.png' },
    width: 1280, height: 720,
  },
}

export const CARRHAE_PATH = { fa: '/battle/carrhae', en: '/en/battle/carrhae' }
