/**
 * Hormizd IV (579–590). Narrative: Encyclopaedia Iranica (Shahbazi, “Hormozd IV”, 2004) paraphrased.
 * Verbatim quotes are the English given in that article: Menander tr. R. C. Blockley (1985); Nöldeke (1879) in Shahbazi’s English.
 */
import type { Bi, FeaturedKing } from '../featured/types'
import { CALLINICUM, CTESIPHON, DARA, DARBAND, HERAT, SAS, ev, note, photos, pick, related, sec } from './common'

const B = (fa: string, en: string): Bi => ({ fa, en })

const MOTHER = note(
  'منابع شرقی مادر هرمز را دختر سنجیبو، خاقان ترکان، می‌دانند و شاهنامه او را «ترکزاد» می‌خواند. شهبازی می‌گوید این از نظر زمانی ممکن نیست: هرمز حدود ۵۴۰ زاده شد، سال‌ها پیش از آن‌که ترکان همسایهٔ ایران شوند. مارکوارت حدس زد که پدربزرگ مادری او خاقان خزرها بوده است، که منابع گاهی «ترک» می‌نامند.',
  'Eastern sources make Hormizd’s mother a daughter of Sinjibu, khagan of the Turks, and the Shahnameh calls him “Torkzād” (son of a Turk). Shahbazi says this is chronologically impossible: Hormizd was born around 540, long before the Turks became Persia’s neighbours. Marquart suggested his maternal grandfather was the khagan of the Khazars, whom sources often call Turks.')

export const hormizdIV: FeaturedKing = {
  slug: 'hormizd-iv', name: B('هرمز چهارم', 'Hormizd IV'), dynastyName: SAS,
  reign: B('۵۷۹–۵۹۰ م.', '579–590 CE'),
  title: B('هرمز چهارم؛ شاهی که با بزرگان جنگید و باخت', 'Hormizd IV: the king who fought the nobles and lost'),
  lede: B(
    'هرمز چهارم پسر و جانشین خسرو انوشیروان بود. می‌خواست بزرگان و موبدان را مهار کند و بار مردم را سبک کند، اما با سخت‌گیری و کشتار همه را از خود رنجاند. صلح با روم را نپذیرفت و جنگ در سراسر پادشاهی‌اش ادامه یافت. سرانجام بزرگان او را برکنار کردند و کشتند.',
    'Hormizd IV was the son and heir of Khosrow I Anushirvan. He wanted to curb the nobles and the priests and ease the burden of the common people, but his harshness and killings turned everyone against him. He refused peace with Rome, and war went on through his whole reign. In the end the nobles deposed and killed him.'),
  stats: [{ n: B('۱۱', '11'), l: B('سال پادشاهی', 'years of reign') }, { n: B('۱۲', '12'), l: B('سال‌های ضرب‌شده بر سکه‌ها', 'regnal years on his coins') }],
  mapTitle: B('نقشه: پادشاهی هرمز چهارم', 'Map: the reign of Hormizd IV'),
  span: [579, 590],
  events: [
    ev('accession', 579, B('۵۷۹ م.', '579 CE'), 'admin', CTESIPHON, B('جانشین انوشیروان', 'Heir of Anushirvan'), B('خسرو یکم او را جانشین کرده بود. منابع می‌گویند دیگر پسران خسرو از مادرانی فرودست بودند و مادر هرمز شاهزاده‌ای ترک بود.', 'Khosrow I had made him heir. The sources say Khosrow’s other sons were from women of low birth, while Hormizd’s mother was a Turkish princess.'), 'disputed', ['ir-hormozd4'], MOTHER),
    ev('nopeace', 579, B('۵۷۹ م.', '579 CE'), 'admin', DARA, B('رد پیشنهاد صلح', 'Peace offer refused'), B('تیبریوس پیشنهاد کرد ادعای ارمنستان را رها کند و ارزنن را با دارا عوض کند. هرمز نپذیرفت و جنگ ادامه یافت.', 'Tiberius offered to give up all claims to Armenia and exchange Arzanene for Dara. Hormizd refused, and the war went on.'), 'secure', ['ir-hormozd4']),
    ev('callinicum', 581, B('۵۸۱ م.', '581 CE'), 'battle', CALLINICUM, B('شکست نزدیک کالینیکوم', 'Defeat near Callinicum'), B('موریس، سردار روم در شرق، سپاه ایران را نزدیک کالینیکوم شکست داد یا دست‌کم متوقف کرد، و در ۵۸۱ باز ایرانیان را با تلفات سنگین روبه‌رو کرد.', 'Maurice, Rome’s general in the east, defeated or at least checked the Persian army near Callinicum, and in 581 inflicted heavy losses on the Persians again.'), 'probable', ['ir-hormozd4'], note('تئوفیلاکت از شکست ایرانیان سخن می‌گوید؛ یوحنای افسوسی تنها از متوقف شدن آنان.', 'Theophylact speaks of a Persian defeat; John of Ephesus only of a check.')),
    ev('gold', 585, B('۵۸۵ م.', '585 CE'), 'admin', CTESIPHON, B('صلح در برابر زر', 'Peace for gold'), B('به گفتهٔ تئوفیلاکت، هرمز از رومیان خواست صلح را با «زر بسیار و هدیه‌های شکوهمند» بخرند. موریس شرط را نپذیرفت.', 'According to Theophylact, Hormizd told the Romans to buy peace “with much gold and glorious gifts”. Maurice found the terms unacceptable.'), 'secure', ['ir-hormozd4']),
    ev('dara', 586, B('۵۸۶ م.', '586 CE'), 'battle', DARA, B('نبرد نزدیک دارا', 'Battle near Dara'), B('رومیان و هم‌پیمانان غسانی‌شان سپاهی ایرانی را نزدیک دارا شکست دادند، اما سپس با تلفات سنگین پس رانده شدند. برد و باخت تا چهار سال بعد ادامه یافت.', 'The Romans and their Ghassanid allies defeated a Persian force near Dara, but were then beaten back with heavy losses. Gains and losses went on for four more years.'), 'secure', ['ir-hormozd4']),
    ev('invasions', 589, B('۵۸۸–۵۸۹ م.', '588–589 CE'), 'battle', HERAT, B('یورش از شمال و شرق', 'Invasions from north and east'), B('هنگامی که جنگ با روم بد پیش می‌رفت، مردمان قفقاز از گذرگاه‌ها و «ترکان» از شرق به ایران تاختند. تنها سرداری بهرام چوبین کشور را از یورش شرقی نجات داد.', 'While the war with Rome was going badly, peoples of the Caucasus came through the passes and “Turks” marched into the east. Only Bahram Chobin’s generalship saved the country from the eastern invasion.'), 'secure', ['ir-hormozd4', 'ir-bahram6']),
    ev('caucasus', 589, B('۵۸۹ م.', '589 CE'), 'battle', DARBAND, B('یورش از گذرگاه‌های قفقاز', 'Through the Caucasus passes'), B('مردمان شمال قفقاز از گذرگاه‌ها به قلمرو ایران تاختند.', 'Peoples from beyond the Caucasus broke through the passes into Persian territory.'), 'probable', ['ir-hormozd4']),
    ev('deposed', 590, B('۵۹۰ م.', '590 CE'), 'admin', CTESIPHON, B('برکناری و قتل', 'Deposed and murdered'), B('بزرگان به رهبری بندوی و بستام، برادران زن هرمز، او را برکنار کردند و سپس کشتند. شهبازی می‌گوید پسرش خسرو دوم، که از بردع در آلبانی کار را زیر نظر داشت، با آن همراه بود، هرچند تاریخ رسمی این را انکار می‌کند.', 'The nobles, led by Hormizd’s brothers-in-law Bendoy and Bestam, deposed and then murdered him. Shahbazi says his son Khosrow II, who watched over the plot from Barda in Albania, went along with it, though the official history denies this.'), 'disputed', ['ir-hormozd4'], note('تاریخ رسمی ساسانی خسرو دوم را از قتل پدر بری می‌داند. شهبازی و نولدکه این را نمی‌پذیرند.', 'The official Sasanian history clears Khosrow II of his father’s murder. Shahbazi and Nöldeke do not accept this.')),
  ],
  dossier: [
    sec('nobles', 'شاه در برابر بزرگان', 'The king against the nobles',
      [['هرمز می‌خواست در دادگری از پدرش پیشی بگیرد و جانب طبقات فرودست را گرفت. برای مهار بزرگان به سخت‌گیری، خوار کردن و اعدام روی آورد. برای کم کردن هزینه‌ها مزد سپاهیان را یک‌دهم کاست. موبدان از او خواستند مسیحیان را آزار دهد؛ پاسخ داد که می‌خواهد همهٔ رعایایش دین خود را آزادانه داشته باشند. منابع پسین می‌گویند بسیاری از موبدان، حتی موبدِ موبدان، و هزاران تن از بزرگان را کشت.'],
        ['Hormizd hoped to outdo his father in justice and took the side of the lower classes. To control the nobility he turned to harshness, humiliation and execution. To cut costs he reduced the army’s pay by a tenth. The Zoroastrian priests asked him to persecute the Christians; he answered that he wanted all his subjects to practise their religion freely. Later sources say he killed many priests, even the chief mowbed, and thousands of nobles.']],
      [['منابع هم‌روزگار او را سخت محکوم می‌کنند. اما نولدکه این داوری را ناعادلانه می‌دانست: هرمز در نظر او شاهی نیک‌خواه بود که می‌خواست بزرگان و موبدان را مهار کند و بار مردم را سبک کند، اما توانایی رسیدن به این هدف را نداشت. شمار کشتگان در منابع پسین شاید بزرگ‌نمایی باشد.'],
        ['The contemporary sources condemn him harshly. But Nöldeke thought this unfair: to him Hormizd was a well-meaning ruler who meant to restrain the nobles and priests and ease the people’s burden, but lacked the skill to reach that aim. The numbers of the killed in later sources may be exaggerated.']],
      [['هرمز آزادی دین را برای همه خواست؛ این از نخستین گام‌های آزادی وجدان است. اما شاهی که بزرگان را بی‌دادرسی می‌کشد، امنیت جان و مال را برای همه ناامن می‌کند. فرودستان هم سودی نبردند و سرانجام بر او شوریدند. نیت نیک بدون قانون و نهاد پایدار کافی نیست.'],
        ['Hormizd wanted freedom of religion for all, an early step toward freedom of conscience. But a king who kills nobles without trial makes life and property unsafe for everyone. The lower classes gained nothing either, and in the end they too turned against him. Good intentions without law and lasting institutions are not enough.']],
      ['ir-hormozd4'], {
        photos: ['coin-hormizd4'],
        quotes: [
          { text: 'His effort was on the whole justified, but the unhappy outcome shows that he was not the man to reach such lofty goals with peace and competence', fa: 'کوشش او روی هم رفته بجا بود، اما سرانجام ناگوار نشان می‌دهد که او مرد رسیدن به چنین هدف‌های بلندی با آرامش و شایستگی نبود.', ref: 'Th. Nöldeke, Geschichte der Perser und Araber (1879), p. 264 n. 5, in the English of Shahbazi, Iranica “Hormozd IV”', source: 'ir-hormozd4' },
        ],
      }),
    sec('war', 'جنگ بی‌پایان با روم', 'The endless war with Rome',
      [['خسرو یکم هنگام مرگ در کار گفت‌وگوی صلح با روم بود. هرمز گفت‌وگوها را بر هم زد و «باج» خواست. رومیان هم با پذیرفتن مدعی‌ای دروغین که خود را پسر خسرو می‌خواند او را خشمگین کردند. جنگ در سراسر پادشاهی‌اش ادامه یافت: میان‌رودان، ارمنستان، کردستان. هیچ‌یک از دو سو برتری پایدار نیافت.'],
        ['Khosrow I died while negotiating peace with Rome. Hormizd broke off the talks and demanded “tribute”. The Romans also angered him by accepting an impostor who claimed to be a son of Khosrow. The war ran through his whole reign: Mesopotamia, Armenia, Kurdistan. Neither side gained a lasting advantage.']],
      [['منناندر، هم‌روزگار رومی، جنگ را گناه هرمز می‌داند. این داوری از سوی دشمن است. اما شهبازی هم می‌پذیرد که هرمز در دیپلماسی انعطاف‌ناپذیر بود و گاه داوری نادرست داشت.'],
        ['Menander, a Roman contemporary, blames the war on Hormizd. That is the judgment of an enemy. But Shahbazi too accepts that Hormizd was inflexible in diplomacy and sometimes showed poor judgment.']],
      [['ده سال جنگ یعنی ده سال مالیات و سربازگیری و ویرانی مرزها. هزینهٔ غرور شاه را کشاورزان و بازرگانان هر دو سو پرداختند.'],
        ['Ten years of war meant ten years of taxes, levies and ruined borderlands. Farmers and merchants on both sides paid for the king’s pride.']],
      ['ir-hormozd4'], {
        quotes: [{ text: 'the Romans and the Persians would have made peace, had not Ḵosrow left this life and his son, Hormisdas, a truly wicked man, assumed the crown', fa: 'رومیان و پارسیان صلح می‌کردند، اگر خسرو از این جهان نرفته بود و پسرش هرمز، مردی به‌راستی بدکار، تاج بر سر ننهاده بود.', ref: 'Menander Protector, tr. R. C. Blockley (1985), pp. 207–9, as quoted in Shahbazi, Iranica “Hormozd IV”', source: 'ir-hormozd4' }],
      }),
  ],
  synthesis: { title: B('جمع‌بندی', 'Synthesis'), paras: {
    fa: ['هرمز چهارم می‌خواست شاهی دادگر و نیرومند باشد، اما با بزرگان، موبدان و سپاه همزمان درافتاد. جنگ با روم را ادامه داد و پاداش بهرام چوبین، نجات‌دهندهٔ شرق، را با ناسپاسی داد. شورش بهرام و توطئهٔ بزرگان به پایان او انجامید. داستان مادر ترکش و نقش پسرش در قتل او محل بحث است.'],
    en: ['Hormizd IV wanted to be a just and strong king, but he quarrelled with the nobles, the priests and the army all at once. He kept up the war with Rome and repaid Bahram Chobin, saviour of the east, with ingratitude. Bahram’s revolt and the nobles’ plot brought him down. The story of his Turkish mother and his son’s part in his murder are disputed.'],
  }, sources: ['ir-hormozd4'] },
  sources: pick('ir-hormozd4', 'ir-bahram6'),
  photos: photos('coin-hormizd4'),
  related: related(['khosrow-i', 'خسرو یکم، پدرش', 'Khosrow I, his father'], ['bahram-chobin', 'بهرام چوبین، سردار شورشی', 'Bahram Chobin, the rebel general'], ['khosrow-ii', 'خسرو دوم، پسرش', 'Khosrow II, his son']),
  wikipedia: 'https://en.wikipedia.org/wiki/Hormizd_IV',
}
