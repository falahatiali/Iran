/**
 * Schematic battle diagrams on a 100×60 canvas (x east, y south). Positions are illustrative:
 * the ancient coastline and the exact deployments are debated, and each phase says so.
 */
import type { BattleDiagram, BattleUnit } from '../featured/types'

const P = (id: string, fa: string, en: string, at: [number, number], kind: BattleUnit['kind'] = 'army'): BattleUnit => ({ id, side: 'persian', kind, label: { fa, en }, at })
const G = (id: string, fa: string, en: string, at: [number, number], kind: BattleUnit['kind'] = 'army'): BattleUnit => ({ id, side: 'greek', kind, label: { fa, en }, at })

export const thermopylae: BattleDiagram = {
  id: 'thermopylae',
  title: { fa: 'ترموپیل، گام‌به‌گام', en: 'Thermopylae, step by step' },
  when: { fa: 'اوت/سپتامبر ۴۸۰ پ.م.، سه روز', en: 'Aug/Sept 480 BCE, three days' },
  land: ['M0 26 C20 28 35 30 50 29 C65 28 80 27 100 25 L100 60 L0 60 Z'],
  labels: [
    { at: [50, 10], text: { fa: 'خلیج مالیا', en: 'Malian Gulf' }, tone: 'sea' },
    { at: [50, 52], text: { fa: 'کوه کالیدروموس', en: 'Mt Kallidromos' } },
    { at: [8, 40], text: { fa: 'تراخیس', en: 'Trachis' } },
    { at: [90, 32], text: { fa: 'آلپنوی', en: 'Alpenoi' } },
  ],
  phases: [
    {
      id: 'hold', title: { fa: 'روز ۱–۲: تنگه نگه داشته می‌شود', en: 'Days 1–2: the pass holds' },
      body: { fa: 'یونانیان پشت دیوار فوکیایی در باریک‌ترین جا ایستادند. یورش‌های مادها، کاسی‌ها و سپس «جاودانان» در تنگه‌ای که برتری شمار را بی‌اثر می‌کرد پس زده شد (۷.۲۱۰–۲۱۲).', en: 'The Greeks stood behind the Phocian wall at the narrowest point. Assaults by Medes, Cissians and then the “Immortals” were thrown back in a gap that cancelled the advantage of numbers (7.210–212).' },
      units: [P('main', 'سپاه شاه', 'Royal army', [15, 30]), P('imm', 'جاودانان', 'Immortals', [32, 30]), G('greeks', 'یونانیان', 'Greeks', [50, 30])],
      arrows: [{ side: 'persian', path: [[20, 30], [45, 30]] }],
      certainty: 'probable', certaintyNote: { fa: 'خط ساحل باستانی بسیار نزدیک‌تر به کوه بود؛ امروز رسوب رود اسپرخیوس آن را عقب برده است.', en: 'The ancient shoreline ran much closer to the mountain; silt from the Spercheios has since pushed it back.' },
      sources: ['hdt', 'lazenby'],
    },
    {
      id: 'path', title: { fa: 'شب دوم: راه آنوپایا', en: 'Night 2: the Anopaea path' },
      body: { fa: 'افیالتس، مردی از مالیا، راهی کوهستانی را نشان داد. هیدارنس با جاودانان شبانه از کوه گذشت و هزار فوکیایی نگهبان راه را کنار زد (۷.۲۱۳–۲۱۸).', en: 'Ephialtes, a Malian, showed a mountain path. Hydarnes led the Immortals over the mountain by night and brushed aside the thousand Phocians guarding it (7.213–218).' },
      units: [P('main', 'سپاه شاه', 'Royal army', [20, 30]), P('imm', 'جاودانان', 'Immortals', [55, 50]), G('greeks', 'یونانیان', 'Greeks', [50, 30]), G('phoc', 'فوکیایی‌ها', 'Phocians', [62, 47])],
      arrows: [{ side: 'persian', path: [[25, 34], [35, 48], [55, 52], [75, 44], [85, 33]] }],
      certainty: 'disputed', certaintyNote: { fa: 'مسیر دقیق راه آنوپایا هنوز محل بحث است.', en: 'The exact line of the Anopaea path is still debated.' },
      sources: ['hdt', 'lazenby'],
    },
    {
      id: 'end', title: { fa: 'روز ۳: محاصره', en: 'Day 3: encircled' },
      body: { fa: 'لئونیداس بیشتر یونانیان را بازفرستاد و با اسپارتیان، تسپیایی‌ها و تبی‌ها ماند. اسپارتیان و تسپیایی‌ها بر تپه‌ای کوچک تا آخرین تن کشته شدند؛ به گفتهٔ هرودوت تبی‌ها تسلیم شدند (۷.۲۱۹–۲۳۳).', en: 'Leonidas sent most of the Greeks away and stayed with the Spartans, Thespians and Thebans. The Spartans and Thespians fell to the last man on a small hill; Herodotus says the Thebans surrendered (7.219–233).' },
      units: [P('main', 'سپاه شاه', 'Royal army', [38, 30]), P('imm', 'جاودانان', 'Immortals', [64, 31]), G('greeks', 'اسپارتیان و تسپیایی‌ها', 'Spartans & Thespians', [52, 31])],
      arrows: [{ side: 'greek', path: [[60, 36], [90, 40]] }],
      certainty: 'probable', certaintyNote: { fa: 'انگیزهٔ ماندن لئونیداس (پیشگویی، پوشش عقب‌نشینی، افتخار) تفسیر است.', en: 'Why Leonidas stayed (oracle, rearguard, honour) is interpretation.' },
      sources: ['hdt', 'cawkwell'],
    },
  ],
}

export const salamis: BattleDiagram = {
  id: 'salamis',
  title: { fa: 'سالامیس، گام‌به‌گام', en: 'Salamis, step by step' },
  when: { fa: 'سپتامبر ۴۸۰ پ.م.، یک شب و یک روز', en: 'September 480 BCE, one night and a day' },
  land: [
    'M50 0 L100 0 L100 44 C92 42 80 40 70 36 C62 30 56 20 52 10 Z',
    'M0 12 C14 10 30 14 40 20 C45 26 44 36 40 42 C34 50 20 56 0 54 Z',
    'M63 49 C64 47 68 47 69 50 C68 52 64 52 63 49 Z',
  ],
  labels: [
    { at: [84, 14], text: { fa: 'آتیکا', en: 'Attica' } },
    { at: [84, 30], text: { fa: 'کوه آیگالئوس', en: 'Mt Aegaleos' } },
    { at: [20, 34], text: { fa: 'جزیرهٔ سالامیس', en: 'Salamis island' } },
    { at: [66, 56], text: { fa: 'پسوتالیا', en: 'Psyttaleia' } },
    { at: [52, 31], text: { fa: 'تنگه', en: 'Strait' }, tone: 'sea' },
    { at: [90, 57], text: { fa: 'فالرون', en: 'Phalerum' }, tone: 'sea' },
    { at: [38, 6], text: { fa: 'خلیج الئوسیس', en: 'Bay of Eleusis' }, tone: 'sea' },
  ],
  phases: [
    {
      id: 'night', title: { fa: 'شب: بستن تنگه', en: 'Night: sealing the strait' },
      body: { fa: 'پس از پیام سیکینوس از سوی تمیستوکلس، ناوگان ایرانی شبانه از فالرون پیش آمد تا راه‌های گریز را ببندد، و پیادگانی در جزیرهٔ پسوتالیا پیاده شدند (۸.۷۵–۷۶).', en: 'After Sicinnus brought Themistocles’ message, the Persian fleet moved up from Phalerum overnight to close the escape routes, and infantry landed on Psyttaleia (8.75–76).' },
      units: [P('fleet', 'ناوگان شاه', 'Royal fleet', [76, 52], 'fleet'), P('egypt', 'دستهٔ مصری', 'Egyptian squadron', [14, 7], 'fleet'), P('psy', 'پیادگان', 'Infantry', [66, 49]), G('fleet', 'ناوگان یونان', 'Greek fleet', [47, 22], 'fleet')],
      arrows: [{ side: 'persian', path: [[90, 56], [76, 50], [62, 40]] }],
      certainty: 'disputed', certaintyNote: { fa: 'اینکه دستهٔ مصری راه غربی را بست یا همه در تنگه آرایش گرفتند، روشن نیست (توپلین).', en: 'Whether an Egyptian squadron blocked the western exit, or the whole fleet deployed in the channel, is unclear (Tuplin).' },
      sources: ['hdt', 'tuplin'],
    },
    {
      id: 'dawn', title: { fa: 'بامداد: درگیری در آب‌های تنگ', en: 'Dawn: battle in the narrows' },
      body: { fa: 'یونانیان از خلیج‌های سالامیس بیرون آمدند. در تنگه جای مانور برای ناوگان بزرگ‌تر نبود و نبرد بیشتر با کوبیدن دماغهٔ کشتی‌ها بود. ناوگان‌های فنیقی و ایونی در صف اول ایرانیان بودند (۸.۸۵).', en: 'The Greeks rowed out from the Salamis bays. The strait left no room for the larger fleet to manoeuvre, and the fight was mostly ramming. Phoenician and Ionian squadrons led the Persian line (8.85).' },
      units: [P('fleet', 'ناوگان شاه', 'Royal fleet', [57, 35], 'fleet'), P('egypt', 'دستهٔ مصری', 'Egyptian squadron', [14, 7], 'fleet'), P('psy', 'پیادگان', 'Infantry', [66, 49]), G('fleet', 'ناوگان یونان', 'Greek fleet', [49, 28], 'fleet')],
      arrows: [{ side: 'greek', path: [[46, 24], [52, 30]] }, { side: 'persian', path: [[64, 40], [58, 35]] }],
      certainty: 'probable', sources: ['hdt', 'aeschylus', 'tuplin'],
    },
    {
      id: 'king', title: { fa: 'شاه بر آیگالئوس', en: 'The king on Aegaleos' },
      body: { fa: 'خشایارشا از دامنهٔ آیگالئوس نبرد را می‌نگریست و دبیرانش نام ناخدایانی را که دلیری می‌کردند ثبت می‌کردند (۸.۹۰). آرتمیسیا برای گریز کشتی‌ای هم‌پیمان را کوبید و شاه که گمان کرد کشتی دشمن است، گفت: «مردانم زن شده‌اند و زنانم مرد» (۸.۸۸).', en: 'Xerxes watched from the slope of Aegaleos while his scribes recorded the names of captains who did well (8.90). Artemisia rammed an allied ship to escape, and the king, thinking it an enemy, said: “My men have become women, and my women men” (8.88).' },
      units: [P('king', 'خشایارشا', 'Xerxes', [74, 22]), P('fleet', 'ناوگان شاه', 'Royal fleet', [59, 36], 'fleet'), P('psy', 'پیادگان', 'Infantry', [66, 49]), G('fleet', 'ناوگان یونان', 'Greek fleet', [52, 31], 'fleet')],
      certainty: 'probable', certaintyNote: { fa: 'گفتهٔ شاه را هرودوت گزارش می‌کند؛ ثبت رسمی ایرانی از آن نمانده است.', en: 'The king’s words are Herodotus’ report; no Persian record of them survives.' },
      sources: ['hdt'],
    },
    {
      id: 'rout', title: { fa: 'درهم‌شکستن', en: 'The rout' },
      body: { fa: 'صف ایرانی در هم ریخت و کشتی‌ها به سوی فالرون گریختند. آریستیدس با هوپلیت‌ها به پسوتالیا رفت و پیادگان ایرانی آنجا را کشت (۸.۹۵). آیسخولوس، که به روایت سنت باستانی خود در نبرد بود، هشت سال بعد این روز را در «ایرانیان» به صحنه برد.', en: 'The Persian line broke and ships fled toward Phalerum. Aristides took hoplites to Psyttaleia and killed the Persian infantry there (8.95). Aeschylus, by ancient tradition a veteran of the battle, staged the day eight years later in the Persians.' },
      units: [P('fleet', 'ناوگان شاه', 'Royal fleet', [84, 52], 'fleet'), P('psy', 'پیادگان', 'Infantry', [66, 49]), G('fleet', 'ناوگان یونان', 'Greek fleet', [64, 41], 'fleet'), G('arist', 'آریستیدس', 'Aristides', [60, 46])],
      arrows: [{ side: 'persian', path: [[62, 39], [76, 48], [90, 56]] }],
      certainty: 'probable', sources: ['hdt', 'aeschylus', 'tuplin'],
    },
  ],
}

export const xerxesBattles = [thermopylae, salamis]
