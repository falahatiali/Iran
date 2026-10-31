/**
 * Shah Ismail I, founder of the Safavid state, 1501–1524 CE, with his son Tahmasp I (1524–1576).
 * Spine: R. M. Savory, "Esmāʿīl I Ṣafawī i. Biography"; C. P. Mitchell, "Ṭahmāsp I"; R. Matthee, "Safavid Dynasty" (all Encyclopaedia Iranica).
 */
import type { BattleDiagram, BattlePhase, DossierSection, FeaturedKing } from '../featured/types'
import { battleClipFor, ev, note, sec } from '../late-achaemenid/common'
import { B, P, sfPhotos, sfSources } from './common'

const sketch = note('منابع راه دقیق را نمی‌گویند؛ خط‌ها طرح‌وارند.', 'The sources give no exact routes; the lines are sketches.')
const S = ['iranica-esmail-safavi']
const SM = ['iranica-esmail-safavi', 'iranica-safavids']

export const ismailEvents = [
  ev('birth', 1487, B('۱۷ ژوئیهٔ ۱۴۸۷ م', '17 July 1487 CE'), 'religion', P.ARDABIL, B('زاده در اردبیل', 'Born at Ardabil'), B('پسر حیدر، رهبر طریقت صفوی، و حلیمه بیگم، دختر اوزون حسن آق‌قویونلو.', 'Son of Haydar, head of the Safavid Sufi order, and Halima Begum, daughter of Uzun Hasan of the Aq Qoyunlu.'), 'secure', S),
  ev('gilan', 1494, B('حدود ۱۴۹۴–۱۴۹۹ م', 'c. 1494–1499 CE'), 'religion', P.LAHIJAN, B('پنهان در گیلان', 'Hidden in Gilan'), B('پس از کشته شدن برادرش علی، کودک را به گیلان بردند. به گفتهٔ متی، پنج سال زیر پناه فرمانروای گیلان ماند.', 'After his brother Ali was killed, the boy was taken to Gilan. Matthee says he lived five years under the protection of its ruler.'), 'probable', SM, note('سال آغاز پنهان‌شدن تقریبی است.', 'The year he went into hiding is approximate.')),
  ev('erzincan', 1500, B('۱۵۰۰ م', '1500 CE'), 'campaign', P.ERZINCAN, B('هفت هزار قزلباش در ارزنجان', 'Seven thousand Qizilbash at Erzincan'), B('اسماعیل ۷۰۰۰ تن از ایل‌های قزلباش را در ارزنجان گرد آورد و در شروان شروانشاه را کشت.', 'Ismail gathered 7,000 men of the Qizilbash tribes at Erzincan and killed the Shirvanshah in Shirvan.'), 'secure', S),
  ev('tabriz', 1501, B('۱۵۰۱ م (۹۰۷ ق)', '1501 CE (907 AH)'), 'religion', P.TABRIZ, B('شرور، تبریز و تشیع رسمی', 'Sharur, Tabriz and official Shi’ism'), B('الوند آق‌قویونلو را در شرور شکست داد، به تبریز رفت و شاه شد. شیعهٔ دوازده‌امامی را مذهب رسمی کرد؛ سیوری می‌نویسد این کار در دولت‌های اسلامی پیشینه نداشت.', 'He beat Alvand Aq Qoyunlu at Sharur, entered Tabriz and became shah. He made Twelver Shi’ism the official religion; Savory writes that this step had no precedent among Islamic states.'), 'secure', SM),
  ev('baghdad', 1508, B('۱۵۰۸ م', '1508 CE'), 'campaign', P.BAGHDAD, B('بغداد', 'Baghdad'), B('با گرفتن بغداد آخرین سرزمین آق‌قویونلو گرفته شد و فرمانروایی صفوی به بیرون از خود ایران رسید.', 'With Baghdad he took the last Aq Qoyunlu territory and carried Safavid rule beyond Persia proper.'), 'secure', S),
  ev('merv', 1510, B('۲ دسامبر ۱۵۱۰ م', '2 December 1510 CE'), 'battle', P.MERV, B('مرو: شیبک‌خان کشته می‌شود', 'Merv: Shaybani Khan is killed'), B('پیروزی بزرگ بر محمد شیبانی (شیبک‌خان) ازبک؛ خراسان به دست صفویان افتاد.', 'A great victory over the Uzbek Muhammad Shaybani (Shaybak) Khan; Khorasan passed to the Safavids.'), 'secure', S),
  ev('ghijduvan', 1512, B('۱۲ نوامبر ۱۵۱۲ م', '12 November 1512 CE'), 'battle', P.GHIJDUVAN, B('غجدوان', 'Ghijduvan'), B('سپاهی که او فرستاده بود از ازبکان شکست خورد، چون بسیاری از قزلباشان نخواستند زیر فرمان یک سردار ایرانی بجنگند.', 'The army he had sent was routed by the Uzbeks because many Qizilbash would not fight under a Persian commander.'), 'secure', S),
  ev('chaldiran', 1514, B('۲۳ اوت ۱۵۱۴ م', '23 August 1514 CE'), 'battle', P.CHALDIRAN, B('چالدران', 'Chaldiran'), B('در دشت چالدران، شمال‌غربی خوی، توپ و تفنگ عثمانی سواران قزلباش را شکست داد. سلطان سلیم ۵ تا ۱۳ سپتامبر در تبریز ماند.', 'On the plain of Chaldiran, northwest of Khoy, Ottoman guns and muskets broke the Qizilbash horse. Sultan Selim held Tabriz from 5 to 13 September.'), 'secure', SM),
  ev('death', 1524, B('۲۳ مهٔ ۱۵۲۴ م', '23 May 1524 CE'), 'admin', P.ARDABIL, B('مرگ؛ آرامگاه در اردبیل', 'Death; buried at Ardabil'), B('در سی‌وشش سالگی مرد. پسر ده‌ساله‌اش تهماسب جانشین شد.', 'He died at thirty-six. His ten-year-old son Tahmasp succeeded him.'), 'secure', ['iranica-esmail-safavi', 'iranica-tahmasp-i']),
]

const campaignEvents = [
  ev('c-erzincan', 1500, B('۱۵۰۰', '1500'), 'campaign', P.ERZINCAN, B('ارزنجان', 'Erzincan'), B('گردآمدن ۷۰۰۰ قزلباش.', '7,000 Qizilbash gather.'), 'secure', S),
  ev('c-shirvan', 1500, B('۱۵۰۰', '1500'), 'battle', P.SHAMAKHI, B('شروان', 'Shirvan'), B('شروانشاه کشته شد.', 'The Shirvanshah is killed.'), 'secure', S, { route: [P.ERZINCAN, P.SHAMAKHI], ...sketch }),
  ev('c-sharur', 1501, B('۱۵۰۱', '1501'), 'battle', P.SHARUR, B('شرور', 'Sharur'), B('سپاه الوند شکست خورد.', 'Alvand’s army is beaten.'), 'secure', SM, { route: [P.SHAMAKHI, P.SHARUR], ...sketch }),
  ev('c-tabriz', 1501, B('۱۵۰۱', '1501'), 'admin', P.TABRIZ, B('تبریز', 'Tabriz'), B('تاج‌گذاری.', 'Crowned shah.'), 'secure', S, { route: [P.SHARUR, P.TABRIZ], ...sketch }),
  ev('c-baghdad', 1508, B('۱۵۰۸', '1508'), 'campaign', P.BAGHDAD, B('بغداد', 'Baghdad'), B('عراق عرب گرفته شد.', 'Iraq is taken.'), 'secure', S, { route: [P.TABRIZ, P.BAGHDAD], ...sketch }),
  ev('c-merv', 1510, B('دسامبر ۱۵۱۰', 'Dec 1510'), 'battle', P.MERV, B('مرو', 'Merv'), B('شیبک‌خان کشته شد.', 'Shaybani Khan is killed.'), 'secure', S, { route: [P.TABRIZ, P.QAZVIN, P.MASHHAD, P.MERV], ...sketch }),
  ev('c-chaldiran', 1514, B('اوت ۱۵۱۴', 'Aug 1514'), 'battle', P.CHALDIRAN, B('چالدران', 'Chaldiran'), B('توپ عثمانی پیروز شد.', 'Ottoman guns win.'), 'secure', SM, { route: [P.TABRIZ, P.KHOY, P.CHALDIRAN], ...sketch }),
]

const Q = (id: string, fa: string, en: string, at: [number, number]) => ({ id, side: 'persian' as const, kind: 'army' as const, label: B(fa, en), at })
const O = (id: string, fa: string, en: string, at: [number, number]) => ({ id, side: 'greek' as const, kind: 'army' as const, label: B(fa, en), at })
const phases: BattlePhase[] = [
  {
    id: 'armies', title: B('دو سپاه در دشت چالدران', 'Two armies on the plain of Chaldiran'),
    body: B('سلیم ۱۹ مارس ۱۵۱۴ از ادرنه راه افتاد و ۲۲ اوت به دشت چالدران رسید. باورپذیرترین رقم‌ها، از ادریس بدلیسی، ۱۰۰ هزار عثمانی و ۴۰ هزار صفوی است؛ بیشتر منابع سپاه عثمانی را دست‌کم دو برابر می‌دانند.', 'Selim left Edirne on 19 March 1514 and reached the plain of Chaldiran on 22 August. The most credible figures, from Idris Bidlisi, are 100,000 Ottomans and 40,000 Safavids; most sources agree the Ottoman army was at least twice as large.'),
    units: [O('selim', 'سلطان سلیم', 'Sultan Selim', [22, 30]), Q('ismail', 'شاه اسماعیل', 'Shah Ismail', [80, 30])],
    arrows: [{ side: 'greek', path: [[4, 30], [18, 30]] }],
    certainty: 'disputed', certaintyNote: B('رقم‌ها از وقایع‌نگاران است و با هم فرق دارد؛ ایرانیکا رقم بدلیسی را «باورپذیرترین» می‌داند، نه قطعی.', 'The figures come from chroniclers and differ; Iranica calls Bidlisi’s “the most credible”, not certain.'), sources: ['iranica-esmail-safavi'],
  },
  {
    id: 'guns', title: B('توپ‌ها در یک حصار', 'Guns in a corral'),
    body: B('به نوشتهٔ متی، عثمانی‌ها توپ‌های صحرایی را به هم بسته و حصاری ساخته بودند و پیاده‌نظامشان تفنگ داشت؛ سپاه اسماعیل با تیر و کمان می‌جنگید.', 'Matthee writes that the Ottomans had field artillery strung together in a corral and infantry with hand guns; Ismail’s troops fought with bows and arrows.'),
    units: [O('guns', 'توپ‌ها و تفنگداران', 'Guns and musketeers', [34, 30]), O('selim', 'سلطان سلیم', 'Sultan Selim', [22, 30]), Q('ismail', 'شاه اسماعیل', 'Shah Ismail', [80, 30])],
    certainty: 'probable', certaintyNote: B('چینش دقیق دانسته نیست؛ جاها طرح‌وارند.', 'The exact layout is not known; the positions are schematic.'), sources: ['iranica-safavids'],
  },
  {
    id: 'charge', title: B('یورش سواران قزلباش', 'The Qizilbash cavalry charge'),
    body: B('سواران قزلباش به سوی توپ‌ها تاختند. سیوری توپخانهٔ عثمانی را عامل کشتار سخت سواران می‌داند. متی می‌افزاید که میگساری امیران قزلباش در شب پیش «بی‌گمان به سود صفویان نبود».', 'The Qizilbash horse charged towards the guns. Savory says the Ottoman artillery did terrible execution among them. Matthee adds that the Qizilbash amirs’ drunken night before “clearly did not help”.'),
    units: [O('guns', 'توپ‌ها و تفنگداران', 'Guns and musketeers', [34, 30]), O('selim', 'سلطان سلیم', 'Sultan Selim', [22, 30]), Q('wing-n', 'سواران قزلباش', 'Qizilbash horse', [46, 18]), Q('wing-s', 'سواران قزلباش', 'Qizilbash horse', [46, 42]), Q('ismail', 'شاه اسماعیل', 'Shah Ismail', [60, 30])],
    arrows: [{ side: 'persian', path: [[76, 22], [48, 18]] }, { side: 'persian', path: [[76, 38], [48, 42]] }],
    certainty: 'probable', certaintyNote: B('گام‌ها از دو مرجع ثانوی است؛ جزئیات میدان در منابع ایرانی و عثمانی یکسان نیست.', 'The steps follow two secondary works; Persian and Ottoman sources differ on the details of the field.'), sources: ['iranica-esmail-safavi', 'iranica-safavids'],
  },
  {
    id: 'rout', title: B('شکست؛ سلیم در تبریز', 'Defeat; Selim in Tabriz'),
    body: B('صفویان سخت شکست خوردند و دو سو کشتهٔ بسیار دادند. دو همسر اسماعیل اسیر شدند. سلیم ۵ سپتامبر بی‌جنگ وارد تبریز شد، اما سردارانش زمستان ماندن را نپذیرفتند و ۱۳ سپتامبر بازگشت.', 'The Safavids were crushingly defeated and both sides lost heavily. Two of Ismail’s wives were captured. Selim entered Tabriz unopposed on 5 September, but his officers refused to winter there and he withdrew on 13 September.'),
    units: [O('selim', 'سلطان سلیم', 'Sultan Selim', [50, 30]), Q('ismail', 'شاه اسماعیل', 'Shah Ismail', [92, 30])],
    arrows: [{ side: 'persian', path: [[70, 30], [94, 30]] }, { side: 'greek', path: [[30, 30], [48, 30]] }],
    certainty: 'secure', sources: ['iranica-esmail-safavi'],
  },
]
const chaldiran: BattleDiagram = {
  id: 'chaldiran',
  title: B('چالدران، گام‌به‌گام (طرح‌وار)', 'Chaldiran, step by step (schematic)'),
  when: B('۲۳ اوت ۱۵۱۴ م', '23 August 1514 CE'),
  land: ['M0 0 L100 0 L100 60 L0 60 Z'],
  labels: [
    { at: [14, 8], text: B('از سوی ارزروم', 'From Erzurum') },
    { at: [86, 8], text: B('به سوی خوی و تبریز', 'To Khoy and Tabriz') },
    { at: [50, 56], text: B('دشت چالدران', 'Plain of Chaldiran') },
  ],
  phases,
  sides: { persian: B('صفویان', 'Safavids'), greek: B('عثمانیان', 'Ottomans') },
}

export const ismailDossier: DossierSection[] = [
  sec('faith', 'مذهب رسمی: گامی بی‌پیشینه', 'An official faith: a step without precedent',
    [['اسماعیل در ۱۵۰۱ شیعهٔ دوازده‌امامی را مذهب رسمی کرد. سیوری می‌نویسد این کار در دولت‌های اسلامی پیشینه نداشت. پیروانش، قزلباشان، او را تجلی خدا می‌دانستند و شعرهای ترکی او با تخلص «خطایی» این باور را دامن می‌زد.', 'متی می‌گوید شیعه شدن ایران روندی دراز بود: در نیمهٔ سدهٔ شانزدهم قزوین و شیراز و همدان هنوز مرکز سنیان بودند و در ۱۷۲۰ ناظری عثمانی یک‌سوم مردم را سنی می‌دانست.'],
     ['In 1501 Ismail made Twelver Shi’ism the official religion. Savory writes that this step had no precedent among Islamic states. His followers, the Qizilbash, saw him as divine, and his Turkish poems under the pen name “Khata’i” encouraged that belief.', 'Matthee says the conversion of Iran was a long process: in the mid-16th century Qazvin, Shiraz and Hamadan were still Sunni centres, and in 1720 an Ottoman observer counted a third of the people as Sunni.']],
    [['سیوری سود سیاسی این کار را جدا کردن دولت نوپای صفوی از همسایگان نیرومند سنی، عثمانی در غرب و ازبکان در شرق، می‌داند. ما این را برداشت او می‌شماریم، نه گفتهٔ خود اسماعیل.'], ['Savory sees the political gain in setting the new Safavid state apart from its powerful Sunni neighbours, the Ottomans to the west and the Uzbeks to the east. We treat this as his reading, not Ismail’s own words.']],
    [['مرز مذهبی که آن روز کشیده شد، هنوز بخشی از نقشهٔ سیاسی منطقه است.'], ['The religious border drawn then is still part of the region’s political map.']],
    SM, { photos: ['ismail-altissimo'] }),
  sec('chaldiran', 'چالدران: سوار در برابر توپ', 'Chaldiran: horsemen against guns',
    [['۲۳ اوت ۱۵۱۴، در دشت چالدران، توپخانه و تفنگداران عثمانی سواران قزلباش را شکستند. سلیم تبریز را گرفت اما هشت روز بعد بازگشت. اسماعیل سیاه پوشید و پرچم‌هایش را سیاه کرد.', 'سیوری می‌نویسد او دیگر هرگز خود سپاه نکشید؛ متی همین را «مشهور» می‌خواند و می‌گوید درست است که شاه برای جلوگیری از از دست رفتن بلخ و قندهار کاری نکرد.'],
     ['On 23 August 1514, on the plain of Chaldiran, Ottoman artillery and musketeers broke the Qizilbash horse. Selim took Tabriz but left eight days later. Ismail went into mourning in black and had his standards dyed black.', 'Savory writes that he never again led his troops in battle; Matthee calls this “famously said” and notes it is true that the shah did little to stop the loss of Balkh and Kandahar.']],
    [['شکست، باور به شکست‌ناپذیری و هالهٔ خدایی شاه را لرزاند. این برداشت متی است. اینکه چالدران «روح اسماعیل را شکست» داستانی مشهور است و ما آن را افسانه‌گونه می‌شماریم، نه گزارش.'], ['Defeat shook the belief in the shah’s invincibility and divine aura; that is Matthee’s reading. That Chaldiran “broke Ismail’s spirit” is a famous story, and we label it as such, not as a record.']],
    [['جنگاوری بی‌سلاح تازه، در برابر دولتی که آن را دارد، دوام نمی‌آورد. شاه عباس صد سال بعد همین درس را به کار بست.'], ['Courage without new weapons does not last against a state that has them. A century later Shah Abbas acted on that lesson.']],
    SM, {
      photos: ['chaldiran-mural'],
      quotes: [{ text: 'If the Turk had been beaten, the power of Esmāʿīl would have become greater than that of Tamerlane’s, as by fame alone of such a victory he would have made himself absolute lord of the East', fa: 'اگر ترک شکست خورده بود، قدرت اسماعیل از تیمور بیشتر می‌شد، چرا که تنها با آوازهٔ چنین پیروزی‌ای خود را فرمانروای مطلق شرق می‌کرد.', ref: 'Caterino Zeno, quoted in Savory, “Esmāʿīl I Ṣafawī”, Encyclopaedia Iranica', source: 'iranica-esmail-safavi' }],
      clip: { media: battleClipFor('ismail-i', 'chaldiran', 992, 522), caption: B('نبرد چالدران، گام‌به‌گام (طرح‌وار، به روایت ایرانیکا)', 'The battle of Chaldiran, step by step (schematic, after Iranica)') },
    }),
  sec('property', 'زمین در برابر وفاداری', 'Land in return for loyalty',
    [['متی می‌نویسد قزلباشان در برابر وفاداری زمین گرفتند و حاکم ولایت‌های تازه گشوده شدند. کار دیوان در دست ایرانیان (تاجیک‌ها) ماند.', 'مینورسکی، به نقل سیوری، گفت ترکمانان و ایرانیان «مانند آب و روغن» با هم نمی‌آمیختند. در غجدوان بسیاری از قزلباشان چون زیر فرمان سرداری ایرانی بودند از میدان کنار کشیدند.'],
     ['Matthee writes that the Qizilbash received land in return for their loyalty and were made governors of newly conquered provinces. The chancery stayed in Persian (Tajik) hands.', 'Minorsky, quoted by Savory, said the Turkmans and Persians did not mix freely, “like oil and water”. At Ghijduvan many Qizilbash left the field because they had been put under a Persian commander.']],
    [['برداشت ما این است: زمین در این دولت پاداش وفاداری به یک رهبر مقدس بود، نه حقی پایدار. وقتی هالهٔ رهبر در چالدران لرزید، پیوند زمین و وفاداری هم سست شد و امیران قزلباش در کودکی تهماسب بر سر ولایت‌ها جنگیدند.'],
     ['This is our reading: land in this state was a reward for loyalty to a holy leader, not a lasting right. When the leader’s aura shook at Chaldiran, the bond between land and loyalty loosened, and the Qizilbash amirs fought over the provinces while Tahmasp was a child.']],
    [['دارایی‌ای که به خشنودی یک نفر بسته باشد، با افتادن او بی‌پناه می‌شود.'], ['Property tied to one man’s favour loses its protection when he falls.']],
    SM),
  sec('tahmasp', 'تهماسب یکم: پنجاه‌ودو سال', 'Tahmasp I: fifty-two years',
    [['تهماسب ۲۲ فوریهٔ ۱۵۱۴ نزدیک اصفهان زاده شد، ۲۳ مهٔ ۱۵۲۴ در ده‌سالگی شاه شد و ۱۴ مهٔ ۱۵۷۶ در قزوین مرد؛ بلندترین پادشاهی صفوی. تا حدود ۱۵۳۳ امیران قزلباش به نام او فرمان می‌راندند. در ۱۵۲۸ در جام با کمک باروت بر ازبکان پیروز شد.', 'او در قفقاز لشکر کشید و تا ۱۵۵۳ بیش از ۳۰ هزار تن، بیشتر زن و کودک، را به فلات ایران کوچاند؛ میچل این را آغاز سپاه غلامان می‌داند. در ۲۹ مهٔ ۱۵۵۵ با عثمانی پیمان آماسیه را بست. هُمایون، پادشاه گورکانی هند، ۱۵۴۳ تا ۱۵۴۵ در پناه او بود. شاهنامهٔ شاه تهماسب در میانهٔ دههٔ ۱۵۴۰ کامل شد.'],
     ['Tahmasp was born near Isfahan on 22 February 1514, became shah at ten on 23 May 1524 and died at Qazvin on 14 May 1576: the longest Safavid reign. Until about 1533 Qizilbash amirs ruled in his name. In 1528 at Jam he beat the Uzbeks with the help of gunpowder.', 'He campaigned in the Caucasus and by 1553 had moved more than 30,000 people, mostly women and children, to the Iranian plateau; Mitchell sees this as the start of the ghulam corps. On 29 May 1555 he made the Peace of Amasya with the Ottomans. Humayun, the Mughal emperor, was his guest from 1543 to 1545. The Shahnama of Shah Tahmasp was finished in the mid-1540s.']],
    [['سال بردن پایتخت از تبریز به قزوین محل اختلاف است: متی ۱۵۴۸ می‌گوید و میچل ۱۵۵۷. میچل انگیزه را بیشتر کاستن از نفوذ ترکان در دربار می‌داند تا ترس از عثمانی.'], ['The year the capital moved from Tabriz to Qazvin is disputed: Matthee gives 1548, Mitchell 1557. Mitchell sees the motive more in reducing Turkic influence at court than in fear of the Ottomans.']],
    [['آماسیه مرزی کشید که به گفتهٔ متی، با پیمان قصر شیرین در ۱۶۳۹، پایهٔ مرز امروز ایران با ترکیه و عراق شد.'], ['Amasya drew a line that, Matthee says, through the Treaty of Qasr-e Shirin in 1639 became the basis of Iran’s border with Turkey and Iraq today.']],
    ['iranica-tahmasp-i', 'iranica-safavids'], {
      photos: ['tahmasp-mural', 'gayumars'],
      quotes: [{ text: 'the modern originality of Persian Shiʿism has its roots [with Shah Ṭahmāsp].', fa: 'ریشهٔ ویژگی امروزی تشیع ایرانی [در شاه تهماسب] است.', ref: 'B. Scarcia Amoretti, quoted in Mitchell, “Ṭahmāsp I”, Encyclopaedia Iranica', source: 'iranica-tahmasp-i' }],
    }),
]

export const ismailI: FeaturedKing = {
  slug: 'ismail-i',
  name: B('شاه اسماعیل یکم', 'Shah Ismail I'),
  dynastyName: B('صفویان', 'The Safavids'),
  reign: B('۱۵۰۱–۱۵۲۴ م', '1501–1524 CE'),
  title: B('شاه اسماعیل؛ از اردبیل تا چالدران', 'Shah Ismail: from Ardabil to Chaldiran'),
  lede: B(
    'نوهٔ دختری اوزون حسن و رهبر طریقت صفوی، در چهارده‌سالگی در تبریز شاه شد و شیعه را مذهب رسمی کرد. در ده سال از شروان تا مرو را گرفت، اما در چالدران توپ عثمانی بر سواران او پیروز شد. پسرش تهماسب دولت او را پنجاه‌ودو سال نگه داشت.',
    'Grandson of Uzun Hasan through his mother and head of the Safavid order, he became shah at Tabriz at fourteen and made Shi’ism the official religion. In ten years he took everything from Shirvan to Merv, but at Chaldiran Ottoman guns beat his horsemen. His son Tahmasp held his state together for fifty-two years.',
  ),
  stats: [
    { n: B('۲۳ سال', '23 years'), l: B('پادشاهی (۱۵۰۱–۱۵۲۴)', 'reign (1501–1524)') },
    { n: B('۷۰۰۰', '7,000'), l: B('قزلباش در ارزنجان (۱۵۰۰)', 'Qizilbash at Erzincan (1500)') },
    { n: B('۱۵۱۴', '1514'), l: B('چالدران (م)', 'Chaldiran (CE)') },
    { n: B('۵۲ سال', '52 years'), l: B('پادشاهی تهماسب', 'Tahmasp’s reign') },
  ],
  mapTitle: B('نقشهٔ متحرک: زندگی و لشکرکشی‌ها', 'Animated map: life and campaigns'),
  events: ismailEvents,
  span: [1487, 1524],
  lifeMap: { view: [38, 30, 66, 43], places: [
    { name: B('اردبیل', 'Ardabil'), c: P.ARDABIL }, { name: B('لاهیجان', 'Lahijan'), c: P.LAHIJAN, dy: 0.7 }, { name: B('ارزنجان', 'Erzincan'), c: P.ERZINCAN, left: true },
    { name: B('تبریز', 'Tabriz'), c: P.TABRIZ, dy: 0.7 }, { name: B('چالدران', 'Chaldiran'), c: P.CHALDIRAN, left: true }, { name: B('بغداد', 'Baghdad'), c: P.BAGHDAD },
    { name: B('مرو', 'Merv'), c: P.MERV }, { name: B('غجدوان', 'Ghijduvan'), c: P.GHIJDUVAN, left: true },
  ] },
  campaign: {
    id: 'campaigns',
    title: B('لشکرکشی‌های شاه اسماعیل (۱۵۰۰–۱۵۱۴ م)', 'Shah Ismail’s campaigns (1500–1514 CE)'),
    intro: { fa: ['از ارزنجان و شروان تا تبریز، بغداد و مرو، و شکست چالدران. تاریخ‌ها از ایرانیکا (سیوری و متی) است؛ راه‌ها طرح‌وارند.'], en: ['From Erzincan and Shirvan to Tabriz, Baghdad and Merv, and defeat at Chaldiran. Dates follow Iranica (Savory and Matthee); the routes are sketches.'] },
    events: campaignEvents, span: [1500, 1514], view: [38, 31, 64, 43],
    places: [
      { name: B('ارزنجان', 'Erzincan'), c: P.ERZINCAN, left: true }, { name: B('شماخی', 'Shamakhi'), c: P.SHAMAKHI }, { name: B('شرور', 'Sharur'), c: P.SHARUR, left: true },
      { name: B('تبریز', 'Tabriz'), c: P.TABRIZ }, { name: B('چالدران', 'Chaldiran'), c: P.CHALDIRAN, left: true, dy: 0.7 }, { name: B('بغداد', 'Baghdad'), c: P.BAGHDAD },
      { name: B('قزوین', 'Qazvin'), c: P.QAZVIN }, { name: B('مشهد', 'Mashhad'), c: P.MASHHAD }, { name: B('مرو', 'Merv'), c: P.MERV },
    ],
    clip: { gif: B('/media/ismail-i/campaigns-fa.gif', '/media/ismail-i/campaigns-en.gif'), mp4: B('/media/ismail-i/campaigns-fa.mp4', '/media/ismail-i/campaigns-en.mp4'), webm: B('/media/ismail-i/campaigns-fa.webm', '/media/ismail-i/campaigns-en.webm'), poster: B('/media/ismail-i/campaigns-fa.png', '/media/ismail-i/campaigns-en.png'), width: 958, height: 356 },
    battles: [chaldiran],
  },
  shareImage: '/media/ismail-i/campaigns-en.png',
  dossier: ismailDossier,
  synthesis: { title: B('جمع‌بندی: دولتی بر پایهٔ ایمان', 'Synthesis: a state built on faith'), paras: {
    fa: [
      'اسماعیل از یک طریقت صوفی دولتی ساخت و با مذهب رسمی آن را از همسایگانش جدا کرد. نیروی او ایمان قزلباشان بود و همین نیرو در برابر توپ عثمانی کافی نبود.',
      'پس از چالدران دولت ماند اما شکل آن عوض شد: تهماسب پایتخت را به قزوین برد، اسیران قفقازی را به ایران آورد و راه را برای غلامان شاه عباس باز کرد.',
    ],
    en: [
      'Ismail turned a Sufi order into a state and set it apart from its neighbours with an official faith. His strength was the Qizilbash’s belief, and that strength was not enough against Ottoman guns.',
      'After Chaldiran the state survived but changed shape: Tahmasp moved the capital to Qazvin, brought Caucasian captives into Iran and opened the way for Shah Abbas’s ghulams.',
    ],
  }, sources: ['iranica-esmail-safavi', 'iranica-tahmasp-i', 'iranica-safavids'] },
  sources: sfSources,
  photos: sfPhotos,
  related: [
    { href: { fa: '/dynasty/safavids', en: '/dynasty/safavids' }, label: B('دودمان صفوی', 'The Safavid dynasty') },
    { href: { fa: '/king/abbas-i', en: '/en/king/abbas-i' }, label: B('شاه عباس بزرگ', 'Shah Abbas the Great') },
    { href: { fa: '/king/uzun-hasan', en: '/en/king/uzun-hasan' }, label: B('اوزون حسن، پدربزرگ مادری', 'Uzun Hasan, his maternal grandfather') },
  ],
  wikipedia: 'https://en.wikipedia.org/wiki/Ismail_I',
}
