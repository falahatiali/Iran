/**
 * Kavad I (488–496, 498/9–531 CE), featured, with step-by-step diagrams of Dara (530) and Callinicum (531).
 * Narrative: Encyclopaedia Iranica (Schindel “Kawād I: reign”; Shahbazi “Sasanian dynasty”; Kreyenbroek “Iran ix. Religions”) paraphrased.
 * Verbatim quotes: Procopius, History of the Wars 1.5–1.18, tr. H. B. Dewing (1914); Kreyenbroek (Iranica).
 * Every surviving account of Mazdak comes from his enemies or from outsiders; the page labels them so.
 */
import type { BattleDiagram, BattleUnit, Bi, FeaturedKing } from '../featured/types'
import { AMIDA, BALKH, CALLINICUM, CTESIPHON, DARA, EDESSA, MARTYROPOLIS, MARV, SAS, battleClipFor, clipFor, ev, note, photos, pick, related, sec } from './common'

const B = (fa: string, en: string): Bi => ({ fa, en })
const P = (id: string, fa: string, en: string, at: [number, number]): BattleUnit => ({ id: `p-${id}`, side: 'persian', kind: 'army', label: B(fa, en), at })
const R = (id: string, fa: string, en: string, at: [number, number]): BattleUnit => ({ id: `r-${id}`, side: 'greek', kind: 'army', label: B(fa, en), at })

const HOSTILE = note(
  'همهٔ گزارش‌های مزدکیان از دشمنان یا بیگانگان است: پروکوپیوس رومی، یوشع ستون‌نشین سریانی که با قباد دشمن بود، و سنت عربی و فارسی که پس از پیروزی خسرو یکم بر مزدکیان نوشته شد. شیندل می‌گوید دانستن این‌که جنبش چه بود «ناممکن» است.',
  'Every account of the Mazdakites comes from enemies or outsiders: the Roman Procopius, the Syriac Joshua the Stylite who was hostile to Kavad, and the Arabic and Persian tradition written after Khosrow I’s victory over the Mazdakites. Schindel says what the movement was is “impossible to find out”.')
const PROCOPIUS_ONLY = note(
  'جزئیات صف‌آرایی و شمار سپاهیان تنها از پروکوپیوس است. شیندل (ایرانیکا) تنها نتیجه را تأیید می‌کند.',
  'The details of the deployment and the army sizes come from Procopius alone. Schindel (Iranica) confirms only the outcome.')

const EVENTS = [
  ev('accession', 488, B('۴۸۸ م.', '488 CE'), 'admin', CTESIPHON, B('پادشاهی نخست', 'First reign'),
    B('بزرگان بلاش را برکنار کردند و قباد، پسر پیروز، را شاه کردند. نیرومندترین مرد دربار سوخرا از خاندان کارن بود.', 'The nobles deposed Balash and made Kavad, son of Peroz, king. The most powerful man at court was Suḵrā of the Karin family.'),
    'probable', ['ir-kawad1'], note('سن قباد محل بحث است: مالالاس و فردوسی او را هنگام مرگ هشتادواندساله می‌دانند؛ پروکوپیوس می‌گوید در ۴۸۴ م. برای جنگ بسیار جوان بود. شیندل سخن پروکوپیوس را می‌پذیرد (زادهٔ حدود ۴۷۳ م.).', 'Kavad’s age is disputed: Malalas and Ferdowsi make him over eighty at his death; Procopius says he was too young to fight in 484. Schindel prefers Procopius (born c. 473).')),
  ev('sukhra', 493, B('حدود ۴۹۳ م.', 'c. 493 CE'), 'admin', CTESIPHON, B('برکناری سوخرا', 'Suḵrā removed'),
    B('به گفتهٔ سنت عربی و فارسی، قباد با یاری شاپور از خاندان مهران خود را از چنگ سوخرا رهاند و او را کشت.', 'According to the Arabic and Persian tradition, Kavad freed himself from Suḵrā with the help of Šāpur of the Mehrān family and had him killed.'),
    'disputed', ['ir-kawad1'], note('شیندل تصویر «بزرگ‌تر از واقعیت» سوخرا را مشکوک می‌داند، اما نقش مهم او را یکسره ساختگی نمی‌داند.', 'Schindel finds Suḵrā’s larger-than-life image doubtful, but not his important role altogether.')),
  ev('mazdak', 494, B('پادشاهی نخست (۴۸۸–۴۹۶ م.)', 'first reign (488–496 CE)'), 'religion', CTESIPHON, B('قباد و مزدکیان', 'Kavad and the Mazdakites'),
    B('قباد از جنبش مزدکیان پشتیبانی کرد. چرا، و آن جنبش دقیقاً چه می‌خواست، روشن نیست.', 'Kavad supported the Mazdakite movement. Why, and what exactly the movement wanted, is unclear.'),
    'disputed', ['ir-kawad1', 'ir-sasdyn', 'ir-religions'], HOSTILE),
  ev('deposed', 496, B('۴۹۶ م.', '496 CE'), 'admin', CTESIPHON, B('برکناری و زندان', 'Deposition and prison'),
    B('بزرگان قباد را برکنار کردند. در انجمنی، برخلاف کسانی که کشتن او را می‌خواستند، رأی دادند که زندانی شود. برادرش زاماسپ شاه شد.', 'The nobles deposed Kavad. At an assembly they agreed, against those who wanted him executed, that he should be imprisoned. His brother Zamasp became king.'),
    'secure', ['ir-kawad1', 'procopius']),
  ev('flight', 496, B('۴۹۶ م.', '496 CE'), 'campaign', BALKH, B('گریز به دربار هپتالیان', 'Flight to the Hephthalite court'),
    B('قباد از زندان گریخت و به دربار هپتالیان پناه برد. شاه هپتالی دخترش را به او داد. جای این دربار روشن نیست؛ نقطهٔ روی نقشه تقریبی است.', 'Kavad escaped from prison and took refuge at the Hephthalite court. The Hephthalite king gave him his daughter in marriage. Where that court was is unknown; the point on the map is approximate.'),
    'probable', ['ir-kawad1', 'procopius'], note('یوشع ستون‌نشین می‌گوید این عروس خواهرزادهٔ خود قباد بود.', 'Joshua the Stylite says the bride was Kavad’s own niece.')),
  ev('return', 498, B('۴۹۸/۴۹۹ م.', '498/9 CE'), 'campaign', CTESIPHON, B('بازگشت به تخت', 'Return to the throne'),
    B('قباد با سپاه هپتالی بازگشت و، ظاهراً بی جنگ بزرگ، تاج را پس گرفت. زاماسپ زنده ماند، هرچند شاید کور شد. گشنسپداد، که کشتن قباد را خواسته بود، کشته شد.', 'Kavad came back with Hephthalite troops and, apparently without much fighting, took back the crown. Zamasp was spared, though probably blinded. Gušnaspdād, who had argued for Kavad’s death, was executed.'),
    'secure', ['ir-kawad1', 'procopius']),
  ev('amida', 503, B('۵۰۲ – آغاز ۵۰۳ م.', '502 – early 503 CE'), 'battle', AMIDA, B('گشودن آمد', 'The capture of Amida'),
    B('قباد در ۵۰۲ م. به ارمنستان روم تاخت و در زمستان آمد را در میان گرفت. پس از محاصره‌ای دراز، در آغاز ۵۰۳ م. شهر را گرفت. این بزرگ‌ترین پیروزی سپاه ساسانی از ۳۵۹ م. بود.', 'In 502 Kavad invaded Roman Armenia and besieged Amida in winter. After a long siege he took the city in early 503. It was the most conspicuous Sasanian success since 359.'),
    'secure', ['ir-kawad1', 'procopius']),
  ev('edessa', 503, B('۵۰۳ م.', '503 CE'), 'battle', EDESSA, B('محاصرهٔ ناکام اورفا', 'The failed siege of Edessa'),
    B('نعمان دوم، شاه لخمی حیره، محاصرهٔ اورفا (ادسا) را آغاز کرد و پس از مرگ او قباد آن را ادامه داد، اما شهر را نگرفت.', 'Nuʿmān II, the Lakhmid king of Ḥira, began a siege of Edessa, and after his death Kavad continued it, but did not take the city.'),
    'secure', ['ir-kawad1']),
  ev('peace', 506, B('۵۰۶ م.', '506 CE'), 'admin', AMIDA, B('صلح هفت‌ساله', 'The seven-year peace'),
    B('آمد در برابر پرداخت غرامت به روم بازگردانده شد. چون شرق کشور ناآرام بود، در ۵۰۶ م. صلحی هفت‌ساله بسته شد.', 'Amida was returned to Rome for an indemnity. Because the east of the realm was in unrest, a seven-year peace was concluded in 506.'),
    'secure', ['ir-kawad1']),
  ev('khorasan', 512, B('حدود ۵۱۲/۵۱۳ م.', 'c. 512/3 CE'), 'campaign', MARV, B('بازگشت خراسان', 'Khorasan regained'),
    B('پس از ۴۸۴ م. خراسان از دست رفته بود. نخستین سکهٔ ضرابخانهٔ مرو پس از آن، از سال ۲۴ پادشاهی قباد (۵۱۲/۵۱۳ م.) است؛ پس ایران در آن سال‌ها خراسان را پس گرفته بود.', 'After 484 Khorasan had been lost. The first coin from the Marw mint after that dates from Kavad’s regnal year 24 (512/3); so Persia had regained Khorasan by then.'),
    'probable', ['ir-kawad1'], note('این تاریخ تنها از روی سکه‌ها حدس زده شده است.', 'This date is inferred from coins alone.')),
  ev('siyawush', 520, B('حدود ۵۲۰ م.', 'c. 520 CE'), 'admin', CTESIPHON, B('دادگاه سیاوش', 'The trial of Siyāwuš'),
    B('سیاوش، که قباد را از زندان رهانده بود و فرماندهٔ کل سپاه شده بود، در دادگاه بزرگان محکوم و کشته شد. قباد او را نجات نداد.', 'Siyāwuš, who had freed Kavad from prison and become supreme commander, was condemned and executed by a court of nobles. Kavad did not save him.'),
    'probable', ['ir-kawad1', 'procopius'], note('شیندل او را «به احتمال زیاد» هوادار مزدکیان می‌داند؛ پس قباد در این زمان از مزدکیان دست کشیده بود.', 'Schindel thinks he was “quite likely” a Mazdakite sympathizer; so by then Kavad had dropped the Mazdakites.')),
  ev('purge', 528, B('۵۲۸/۵۲۹ م.', '528/9 CE'), 'religion', CTESIPHON, B('کشتار مزدکیان', 'The purge of the Mazdakites'),
    B('قباد انجمنی فراخواند تا سران مزدکی را به دام اندازد. مزدک و یارانش کشته شدند. به گفتهٔ وقایع‌نگاران، کلیساهای مصادره‌شده به مسیحیان سپرده شد.', 'Kavad called a council to entrap the sect’s leaders. Mazdak and his followers were killed. According to the chroniclers, confiscated churches were handed over to the Christians.'),
    'probable', ['ir-kawad1', 'ir-religions'], HOSTILE),
  ev('dara', 530, B('۵۳۰ م.', '530 CE'), 'battle', DARA, B('نبرد دارا', 'The battle of Dara'),
    B('در جنگ دوم با روم، در یکی از بزرگ‌ترین نبردهای روباز میان دو امپراتوری، بلیساریوس سپاه ایران را در دارا شکست داد.', 'In the second war with Rome, in one of the greatest open-field battles between the two empires, Belisarius defeated the Persian army at Dara.'),
    'secure', ['ir-kawad1', 'procopius']),
  ev('callinicum', 531, B('آوریل ۵۳۱ م.', 'April 531 CE'), 'battle', CALLINICUM, B('نبرد کالینیکوم', 'The battle of Callinicum'),
    B('سپاه ایران به فرماندهی آزارتس، همراه منذر لخمی، بلیساریوس را کنار فرات نزدیک کالینیکوم شکست داد؛ پیروزی‌ای پرهزینه که هیچ شهری به دست نداد.', 'A Persian army under Azarethes, with the Lakhmid al-Mundhir, defeated Belisarius by the Euphrates near Callinicum: a costly victory that won no city.'),
    'secure', ['ir-kawad1', 'procopius']),
  ev('death', 531, B('۵۳۱ م.', '531 CE'), 'admin', MARTYROPOLIS, B('مرگ در محاصرهٔ میافارقین', 'Death during the siege of Martyropolis'),
    B('هنگامی که سپاه ایران میافارقین (مارتیروپولیس) را در میان گرفته بود، قباد بیمار شد و درگذشت. پسرش خسرو یکم جانشین شد.', 'While a Persian army was besieging Martyropolis, Kavad fell ill and died. His son Khosrow I succeeded him.'),
    'secure', ['ir-kawad1']),
]

const dara: BattleDiagram = {
  id: 'dara',
  title: B('نبرد دارا، ۵۳۰ م. (طرح‌وار، به روایت پروکوپیوس)', 'The battle of Dara, 530 CE (schematic, after Procopius)'),
  when: B('۵۳۰ م.', '530 CE'),
  sides: { persian: B('ایرانیان (ساسانی)', 'Iranians (Sasanian)'), greek: B('رومیان', 'Romans') },
  land: ['M0 0 L100 0 L100 60 L0 60 Z'],
  labels: [
    { at: [8, 30], text: B('دارا', 'Dara') },
    { at: [34, 6], text: B('خندق', 'Trench'), tone: 'sea' },
    { at: [34, 54], text: B('خندق', 'Trench'), tone: 'sea' },
    { at: [14, 6], text: B('تپه', 'Hill') },
  ],
  phases: [
    {
      id: 'lines', title: B('خندق و دو صف', 'The trench and the two lines'),
      body: B('رومیان نزدیک دروازهٔ دارا خندقی شکسته با گذرگاه‌های بسیار کندند. سواران در دو جناح بیرون خندق ایستادند و بلیساریوس در میانه. پروکوپیوس رومیان را ۲۵ هزار و ایرانیان را ۴۰ هزار می‌شمارد. فرماندهٔ ایرانی، «میران» پیروز، پیغام داد که فردا گرمابهٔ دارا را برایش آماده کنند.', 'Near the gate of Dara the Romans dug a broken trench with many crossings. Cavalry stood on both wings outside it and Belisarius in the centre. Procopius counts the Romans at 25,000 and the Persians at 40,000. The Persian commander, the “mirranes” Perozes, sent word to prepare the bath of Dara for him the next day.'),
      units: [R('left', 'بوزس و فارس', 'Bouzes and Pharas', [26, 12]), R('centre', 'بلیساریوس', 'Belisarius', [20, 30]), R('right', 'جان و سواران', 'John and the horse', [26, 48]), P('right', 'جناح راست ایران', 'Persian right wing', [62, 14]), P('centre', 'میران پیروز', 'The mirranes Perozes', [68, 30]), P('left', 'برسمانس و جاویدانان', 'Baresmanas and the Immortals', [62, 46])],
      certainty: 'probable', certaintyNote: PROCOPIUS_ONLY.certaintyNote, sources: ['procopius'],
    },
    {
      id: 'north', title: B('جناح شمالی', 'The northern wing'),
      body: B('جناح راست ایران به سواران بوزس تاخت و آنان را پس راند. سیصد هرولی به فرماندهی فارس از پشت تپه به پشت ایرانیان زدند و سونیکاس از پهلو رسید. به گفتهٔ پروکوپیوس سه هزار ایرانی کشته شدند و بازماندگان به صف خود برگشتند.', 'The Persian right charged Bouzes’ horsemen and pushed them back. Three hundred Heruli under Pharas came down from behind the hill into the Persian rear, and Sunicas struck from the flank. According to Procopius three thousand Persians fell and the rest got back to their line.'),
      units: [R('left', 'هرولیان فارس', 'Pharas’ Heruli', [46, 8]), R('centre', 'بلیساریوس', 'Belisarius', [20, 30]), R('right', 'جان و سواران', 'John and the horse', [26, 48]), P('right', 'جناح راست ایران', 'Persian right wing', [36, 14]), P('centre', 'میران پیروز', 'The mirranes Perozes', [68, 30]), P('left', 'برسمانس و جاویدانان', 'Baresmanas and the Immortals', [62, 46])],
      arrows: [{ side: 'persian', path: [[62, 14], [46, 14], [36, 14]] }, { side: 'greek', path: [[16, 8], [32, 2], [46, 8]] }],
      certainty: 'probable', certaintyNote: PROCOPIUS_ONLY.certaintyNote, sources: ['procopius'],
    },
    {
      id: 'south', title: B('یورش جاویدانان', 'The charge of the Immortals'),
      body: B('میران نیرویی بزرگ، همراه «جاویدانان»، به جناح چپ فرستاد. اینان به رهبری برسمانس سواران روم را پس راندند. اما رومیانِ گوشهٔ خندق از پهلو به آنان زدند و سپاهشان را دو نیم کردند.', 'The mirranes sent a large force, with the Immortals, to his left. Led by Baresmanas they drove back the Roman horse. But the Romans at the angle of the trench struck them from the side and cut their army in two.'),
      units: [R('angle', 'سونیکاس و اسکان', 'Sunicas and Ascan', [36, 40]), R('centre', 'بلیساریوس', 'Belisarius', [20, 30]), R('right', 'سواران روم', 'Roman horse', [16, 50]), P('centre', 'میران پیروز', 'The mirranes Perozes', [68, 30]), P('left', 'برسمانس و جاویدانان', 'Baresmanas and the Immortals', [30, 50])],
      arrows: [{ side: 'persian', path: [[62, 46], [44, 50], [30, 50]] }, { side: 'greek', path: [[30, 36], [34, 42], [36, 46]] }],
      certainty: 'probable', certaintyNote: PROCOPIUS_ONLY.certaintyNote, sources: ['procopius'],
    },
    {
      id: 'rout', title: B('مرگ برسمانس و گریز', 'Baresmanas falls; the rout'),
      body: B('سونیکاس درفش‌دار برسمانس و سپس خود او را کشت. ایرانیان، با دیدن درفش افتاده، گریختند. پروکوپیوس می‌گوید پنج هزار تن کشته شدند، اما بلیساریوس تعقیب را دراز نکرد. شیندل (ایرانیکا) دارا را «پیروزی بزرگ روم» می‌نامد که جنگ را پایان نداد.', 'Sunicas struck down Baresmanas’ standard-bearer and then Baresmanas himself. Seeing the standard fall, the Persians fled. Procopius says about five thousand were killed, but Belisarius did not pursue far. Schindel (Iranica) calls Dara a “great Roman victory” that did not end the war.'),
      units: [R('angle', 'سونیکاس', 'Sunicas', [44, 46]), R('centre', 'بلیساریوس', 'Belisarius', [30, 30]), P('centre', 'میران پیروز', 'The mirranes Perozes', [78, 30]), P('left', 'گریز ایرانیان', 'Persians in flight', [70, 48])],
      arrows: [{ side: 'persian', path: [[44, 50], [58, 50], [70, 48]] }, { side: 'greek', path: [[20, 30], [30, 30]] }],
      certainty: 'probable', certaintyNote: B('شمار کشتگان از پروکوپیوس است. نتیجه را شیندل هم تأیید می‌کند.', 'The death toll is Procopius’s. The outcome is confirmed by Schindel too.'), sources: ['procopius', 'ir-kawad1'],
    },
  ],
}

const callinicum: BattleDiagram = {
  id: 'callinicum',
  title: B('نبرد کالینیکوم، ۵۳۱ م. (طرح‌وار، به روایت پروکوپیوس)', 'The battle of Callinicum, 531 CE (schematic, after Procopius)'),
  when: B('آوریل ۵۳۱ م.', 'April 531 CE'),
  sides: { persian: B('ایرانیان و لخمیان', 'Iranians and Lakhmids'), greek: B('رومیان و غسانیان', 'Romans and Ghassanids') },
  land: ['M0 14 L100 14 L100 60 L0 60 Z'],
  labels: [
    { at: [50, 7], text: B('رود فرات', 'River Euphrates'), tone: 'sea' },
    { at: [84, 54], text: B('زمین بلند', 'Rising ground') },
  ],
  phases: [
    {
      id: 'raid', title: B('یورش و بازگشت', 'The raid and the retreat'),
      body: B('قباد پانزده هزار مرد به فرماندهی آزارتس فرستاد و منذر، شاه لخمی، راهنمای سپاه شد. از فرات گذشتند و ناگهان به کماگنه تاختند. بلیساریوس به دنبالشان آمد و ایرانیان، در راه بازگشت، کنار فرات رو در روی او ماندند. روز پیش از عید پاک بود.', 'Kavad sent fifteen thousand men under Azarethes, and al-Mundhir, the Lakhmid king, led the way. They crossed the Euphrates and fell suddenly on Commagene. Belisarius followed, and the Persians, on their way home, were caught facing him by the Euphrates. It was the day before Easter.'),
      units: [P('main', 'آزارتس', 'Azarethes', [60, 30]), P('arabs', 'منذر و لخمیان', 'al-Mundhir’s Lakhmids', [66, 46]), R('main', 'بلیساریوس', 'Belisarius', [20, 34])],
      arrows: [{ side: 'greek', path: [[6, 34], [20, 34]] }],
      certainty: 'probable', certaintyNote: PROCOPIUS_ONLY.certaintyNote, sources: ['procopius'],
    },
    {
      id: 'lines', title: B('صف‌آرایی', 'The lines'),
      body: B('بلیساریوس یک صف ساخت: همهٔ پیادگان در جناح چپ کنار رود، حارث و عرب‌های غسانی در جناح راست روی زمین بلند، و خودش با سواران در میانه.', 'Belisarius formed a single line: all the infantry on the left by the river, Arethas and the Ghassanid Arabs on the right on the rising ground, and himself with the cavalry in the centre.'),
      units: [R('foot', 'پیادگان', 'Infantry', [30, 20]), R('main', 'بلیساریوس و سواران', 'Belisarius and the horse', [30, 34]), R('arabs', 'حارث و غسانیان', 'Arethas and the Ghassanids', [30, 50]), P('main', 'آزارتس', 'Azarethes', [60, 26]), P('arabs', 'نخبگان ایرانی', 'Persian elite', [60, 48])],
      certainty: 'probable', certaintyNote: PROCOPIUS_ONLY.certaintyNote, sources: ['procopius'],
    },
    {
      id: 'break', title: B('شکستن جناح راست روم', 'The Roman right breaks'),
      body: B('دو سوم روز گذشته بود و نبرد برابر بود. آنگاه بهترین سواران ایرانی به جناح راست روم زدند. عرب‌های حارث پراکنده شدند؛ پروکوپیوس می‌گوید از این رو به خیانت متهم شدند. ایرانیان پشت سواران روم رسیدند و بیشتر رومیان به جزیره‌های رود گریختند.', 'Two-thirds of the day had passed and the battle was even. Then the best of the Persian horse attacked the Roman right. Arethas’ Arabs broke apart; Procopius says they got a name for treachery for it. The Persians got behind the Roman cavalry, and most of the Romans fled to the islands in the river.'),
      units: [R('foot', 'پیادگان', 'Infantry', [30, 20]), R('main', 'سواران روم', 'Roman horse', [24, 30]), R('arabs', 'غسانیان پراکنده', 'Ghassanids scattering', [14, 54]), P('main', 'آزارتس', 'Azarethes', [50, 28]), P('arabs', 'نخبگان ایرانی', 'Persian elite', [22, 44])],
      arrows: [{ side: 'persian', path: [[60, 48], [40, 50], [22, 44]] }, { side: 'greek', path: [[30, 50], [20, 54], [14, 54]] }],
      certainty: 'disputed', certaintyNote: B('این‌که غسانیان خیانت کردند یا تنها شکست خوردند، تنها از پروکوپیوس است و او خود آن را «شهرت» می‌نامد.', 'Whether the Ghassanids betrayed or were simply beaten rests on Procopius alone, who himself calls it a “reputation”.'), sources: ['procopius'],
    },
    {
      id: 'stand', title: B('پایداری پیادگان کنار رود', 'The infantry’s stand by the river'),
      body: B('پیادگان کنار رود شانه به شانه ایستادند و دیواری از سپر ساختند. سواران ایرانی بارها تاختند و بازگشتند تا شب رسید. ایرانیان به اردو رفتند و رومیان با قایق به جزیره رسیدند. پروکوپیوس می‌گوید کشتگان ایرانی کمتر از کشتگان روم نبودند.', 'By the river the infantry stood shoulder to shoulder and made a wall of shields. The Persian horse charged again and again and fell back, until night came. The Persians went to their camp and the Romans reached the island by boat. Procopius says the Persian dead were no fewer than the Roman.'),
      units: [R('foot', 'دیوار سپر', 'Shield wall', [30, 18]), P('main', 'سواران ایرانی', 'Persian horse', [44, 26]), P('arabs', 'نخبگان ایرانی', 'Persian elite', [40, 40])],
      arrows: [{ side: 'persian', path: [[50, 34], [42, 26], [36, 20]] }],
      certainty: 'probable', certaintyNote: B('پیروزی پرهزینهٔ ایران را شیندل هم تأیید می‌کند.', 'The costly Persian victory is confirmed by Schindel too.'), sources: ['procopius', 'ir-kawad1'],
    },
  ],
}

export const kavadI: FeaturedKing = {
  slug: 'kavad-i', name: B('قباد یکم', 'Kavad I'), dynastyName: SAS,
  reign: B('۴۸۸–۴۹۶ و ۴۹۸/۴۹۹–۵۳۱ م.', '488–496 and 498/9–531 CE'),
  title: B('قباد یکم؛ مزدک، تبعید و بازگشت', 'Kavad I: Mazdak, exile and return'),
  lede: B(
    'قباد یکم، پسر پیروز، هنگامی به تخت رسید که قدرت شاه ساسانی در پایین‌ترین جای خود بود. از جنبش مزدکیان پشتیبانی کرد، برکنار و زندانی شد، به هپتالیان گریخت و با یاری آنان بازگشت. سپس با روم جنگید و، چهل‌وسه سال پس از آغاز پادشاهی، پادشاهی‌ای نیرومند به پسرش خسرو سپرد.',
    'Kavad I, son of Peroz, came to the throne when the power of the Sasanian king was at its lowest. He supported the Mazdakite movement, was deposed and imprisoned, fled to the Hephthalites and returned with their help. He then fought Rome and, forty-three years after his first accession, handed his son Khosrow a powerful monarchy.'),
  stats: [{ n: B('۴۳', '43'), l: B('سال، با سه سال فاصله', 'years, with a three-year break') }, { n: B('۲', '2'), l: B('بار بر تخت', 'times on the throne') }, { n: B('۵۰۳', '503'), l: B('گشودن آمد', 'Amida taken') }],
  mapTitle: B('نقشهٔ متحرک: از تیسفون تا هپتالیان و مرز روم', 'Animated map: from Ctesiphon to the Hephthalites and the Roman frontier'),
  events: EVENTS, span: [488, 531],
  campaign: {
    id: 'reign',
    title: B('پادشاهی قباد، گام‌به‌گام (۴۸۸–۵۳۱ م.)', 'The reign of Kavad, step by step (488–531 CE)'),
    intro: {
      fa: ['پادشاهی قباد به روایت ایرانیکا (شیندل) و پروکوپیوس. گام‌هایی که به مزدکیان مربوط‌اند «محل بحث» نامیده شده‌اند، چون همهٔ منابع آن از دشمنان جنبش است. نمودارهای گام‌به‌گام دارا و کالینیکوم زیر نقشه آمده‌اند.'],
      en: ['The reign of Kavad as told by Iranica (Schindel) and Procopius. Steps about the Mazdakites are marked disputed, since all the sources for them come from the movement’s enemies. Step-by-step diagrams of Dara and Callinicum are below the map.'],
    },
    events: EVENTS, span: [488, 531], view: [36, 30, 73, 42],
    places: [
      { name: B('تیسفون', 'Ctesiphon'), c: CTESIPHON }, { name: B('آمد', 'Amida'), c: AMIDA, left: true, dy: 0.6 }, { name: B('اورفا', 'Edessa'), c: EDESSA, left: true },
      { name: B('دارا', 'Dara'), c: DARA, dy: 1.3 }, { name: B('کالینیکوم', 'Callinicum'), c: CALLINICUM, left: true }, { name: B('میافارقین', 'Martyropolis'), c: MARTYROPOLIS, dy: -1.3 },
      { name: B('مرو', 'Marw'), c: MARV }, { name: B('هپتالیان (تقریبی)', 'Hephthalites (approx.)'), c: BALKH, dy: 1.3 },
    ],
    clip: clipFor('kavad-i'),
    battles: [dara, callinicum],
  },
  shareImage: '/media/kavad-i/reign-en.png',
  dossier: [
    sec('mazdak', 'قباد و مزدکیان', 'Kavad and the Mazdakites',
      [['در پادشاهی نخست قباد، جنبشی دینی و اجتماعی به نام رهبرش، مزدک پسر بامداد، نیرو گرفت و قباد از آن پشتیبانی کرد. همهٔ آنچه دربارهٔ آن می‌دانیم از دشمنان یا بیگانگان است: پروکوپیوس رومی می‌گوید قباد قانون «اشتراک زنان» آورد؛ یوشع ستون‌نشین سریانی، که با قباد دشمن بود، می‌گوید قباد این آیین را «دوباره برپا کرد»؛ و سنت عربی و فارسی پس از پیروزی خسرو یکم بر مزدکیان نوشته شد. پروکوپیوس در همین‌جا جانشین قباد را به اشتباه بلاش می‌نامد؛ سکه‌ها زاماسپ را نشان می‌دهند.'],
        ['In Kavad’s first reign a religious and social movement named after its leader, Mazdak son of Bāmdād, grew strong, and Kavad supported it. Everything we know about it comes from enemies or outsiders: the Roman Procopius says Kavad brought in a law of “communal” women; the Syriac Joshua the Stylite, hostile to Kavad, says Kavad “re-established” the creed; and the Arabic and Persian tradition was written after Khosrow I’s victory over the Mazdakites. Procopius in the same passage wrongly names Kavad’s replacement Balash; the coins show Zamasp.']],
      [['پژوهشگران سخت با هم اختلاف دارند. شهبازی از «انقلاب مزدکی» سخن می‌گوید که پخش ثروت و اشتراک زنان را تبلیغ می‌کرد و هرج‌ومرج اجتماعی آورد. کرینبروک می‌گوید منابع ما کوشش پیروزمندان برای اهریمنی نشان دادن مزدک است و اتهام اشتراک دارایی و زنان را «نامحتمل» می‌داند؛ به گمان او پیام مزدک برادری و دادگری اجتماعی در چارچوب دین زرتشتی بود. شیندل می‌گوید دانستن این‌که جنبش چه بود و قباد تا چه اندازه به آن باور داشت یا از آن برای قدرت خود بهره برد «ناممکن» است. گوبه حتی تاریخی بودن مزدک یا دست‌کم نقش اصلی او را زیر پرسش می‌برد.'],
        ['Scholars disagree sharply. Shahbazi speaks of a “Mazdakite revolution” that preached the distribution of wealth and the sharing of women and brought social anarchy. Kreyenbroek says our sources are the victors’ attempts to demonize Mazdak and calls the charge of common goods and women “improbable”; in his view Mazdak’s message was brotherhood and social justice within Zoroastrianism. Schindel says what the movement was, and how far Kavad believed in it or used it to enlarge his own power, is “impossible to find out”. Gaube even questions whether Mazdak existed, or at least whether he played the main role.']],
      [['منابع نمی‌گویند که «اشتراک دارایی»، اگر بود، داوطلبانه بود یا به زور. این تفاوت همه چیز است: بخشیدن آزادانه با گرفتن به زور یکی نیست. از سوی دیگر، زمین‌های بزرگان هم «مالکیت» به معنای آزادی‌خواهانه نبود؛ امتیازی موروثی بود که دولت و نسب پشتش بودند. پس داستان مزدک را نمی‌توان ساده به نبرد «مالکیت» با «اشتراک» فروکاست. چیزی که روشن است این است که یک دولت، نخست جنبشی را پشتیبانی کرد و سپس پیروانش را کشت؛ وقتی دولت داور باور مردم باشد، سرنوشت آنان به سود و زیان شاه بسته است. این برداشت ماست.'],
        ['The sources cannot tell us whether the “sharing of property”, if it existed, was voluntary or forced. That difference is everything: giving freely is not the same as taking by force. On the other hand, the nobles’ estates were not “property” in the liberal sense either; they were a hereditary privilege backed by the state and by birth. So the story of Mazdak cannot simply be reduced to “property” against “sharing”. What is clear is that one state first backed a movement and then killed its followers; when the state is the judge of people’s beliefs, their fate hangs on the king’s interest. This is our reading.']],
      ['ir-kawad1', 'ir-sasdyn', 'ir-religions', 'procopius'], {
        photos: ['coin-kavad'],
        quotes: [
          { text: 'But as time went on Cabades became more high-handed in the administration of the government, and introduced innovations into the constitution, among which was a law which he promulgated providing that Persians should have communal intercourse with their women, a measure which by no means pleased the common people.', fa: 'اما با گذشت زمان، قباد در ادارهٔ کشور خودکامه‌تر شد و در قانون اساسی نوآوری‌هایی آورد؛ از جمله قانونی که بر پایهٔ آن ایرانیان باید با زنانشان آمیزش همگانی داشته باشند، و این کار به هیچ روی مردم عادی را خوش نیامد.', ref: 'Procopius, History of the Wars 1.5.1, tr. H. B. Dewing (1914). A hostile outsider’s account.', source: 'procopius' },
          { text: 'Our extant sources on the subject represent attempts by the victorious anti-Mazdakites to demonize Mazdak, so that little is known with certainty.', fa: 'منابع موجود ما در این باره کوشش ضدمزدکیانِ پیروز برای اهریمنی نشان دادن مزدک است، از این رو اندکی با اطمینان دانسته می‌شود.', ref: 'P. G. Kreyenbroek, Encyclopaedia Iranica, “Iran ix. Religions in Iran (1)” (2006)', source: 'ir-religions' },
        ],
      }),
    sec('exile', 'برکناری، تبعید و بازگشت', 'Deposition, exile and return',
      [['در ۴۹۶ م. بزرگان قباد را برکنار کردند. در انجمنی رأی دادند که، برخلاف خواست کسانی که کشتن او را می‌خواستند، زندانی شود؛ برادرش زاماسپ شاه شد. قباد گریخت، به دربار هپتالیان رفت، دختر شاه هپتالی را به زنی گرفت و با سپاه او در ۴۹۸/۴۹۹ م. بازگشت. شیندل می‌گوید جنگ چندانی درنگرفت. زاماسپ زنده ماند، شاید کور شده، و گشنسپداد، که کشتن قباد را خواسته بود، کشته شد.'],
        ['In 496 the nobles deposed Kavad. At an assembly they agreed that he should be imprisoned, against those who wanted him killed; his brother Zamasp became king. Kavad escaped, went to the Hephthalite court, married the Hephthalite king’s daughter and came back with his army in 498/9. Schindel says not much fighting took place. Zamasp was spared, though probably blinded, and Gušnaspdād, who had argued for Kavad’s death, was executed.']],
      [['قباد در کودکی دو سال گروگان هپتالیان بود؛ اکنون همان هپتالیان تاج را به او بازگرداندند. تاریخ بازگشت تنها از روی سکه‌های زاماسپ (سال‌های ۱ تا ۳) و ازسرگیری سکه‌های قباد از سال ۱۱ پادشاهی‌اش به دست می‌آید. سنت عربی و فارسی، به گفتهٔ شیندل، از دید دربار خسرو نوشته شده و باید با احتیاط خوانده شود.'],
        ['As a boy Kavad had been a hostage of the Hephthalites; now the same Hephthalites gave him back his crown. The date of the return comes only from Zamasp’s coins (regnal years 1 to 3) and the resumption of Kavad’s coinage from his regnal year 11. The Arabic and Persian tradition, Schindel notes, was written from the point of view of Khosrow’s court and must be read with care.']],
      [['انجمنی از بزرگان شاه را برکنار کرد و به جای کشتن، زندانی‌اش کرد. این نشانه‌ای است که در ایران ساسانی قدرت تنها در دست شاه نبود. اما این «انجمن» نمایندهٔ مردم نبود، بلکه نمایندهٔ چند خاندان بود.'],
        ['An assembly of nobles deposed the king and chose prison over death. It is a sign that in Sasanian Iran power did not lie with the king alone. But this “assembly” represented a few great families, not the people.']],
      ['ir-kawad1', 'procopius']),
    sec('amida', 'آمد، ۵۰۳ م.', 'Amida, 503',
      [['در ۵۰۲ م. قباد به ارمنستان روم تاخت، به تئودوسیوپولیس یورش برد و در زمستان به آمد رسید. پس از محاصره‌ای دراز، در آغاز ۵۰۳ م. شهر را گرفت. در همان سال محاصرهٔ اورفا ناکام ماند. آمد در برابر غرامت بازگردانده شد و در ۵۰۶ م. صلحی هفت‌ساله بسته شد.'],
        ['In 502 Kavad invaded Roman Armenia, struck at Theodosiopolis and in winter reached Amida. After a long siege he took the city in early 503. The same year a siege of Edessa failed. Amida was returned for an indemnity and in 506 a seven-year peace was concluded.']],
      [['شیندل گشودن آمد را بزرگ‌ترین پیروزی سپاه ساسانی از ۳۵۹ م. می‌داند، هنگامی که شاپور دوم همان شهر را گرفته بود. داستان پیر کشیش و فرمان قباد از پروکوپیوس است.'],
        ['Schindel calls the capture of Amida the most conspicuous Sasanian success since 359, when Shapur II had taken the same city. The story of the old priest and Kavad’s order is Procopius’s.']],
      [['پایان کشتار با سخن یک پیرمرد آمد، اما دارایی مردم غارت شد و بازماندگان برده شدند. در جنگ، جان و دارایی شهروندان ابزار چانه‌زنی دو دولت است.'],
        ['The killing ended at an old man’s word, but the townspeople’s property was plundered and the survivors were enslaved. In war, the lives and goods of citizens become bargaining chips between two states.']],
      ['ir-kawad1', 'procopius'], {
        quotes: [{ text: 'Cabades was pleased by this speech, and permitted no further slaughter, but he bade the Persians plunder the property and make slaves of the survivors, and he directed them to choose out for himself all the notables among them.', fa: 'قباد از این سخن خشنود شد و کشتار بیشتر را روا نداشت، اما به ایرانیان فرمود دارایی‌ها را غارت کنند و بازماندگان را برده سازند، و فرمود همهٔ سرشناسان را برای خود او جدا کنند.', ref: 'Procopius, History of the Wars 1.7, tr. H. B. Dewing (1914)', source: 'procopius' }],
      }),
    sec('dara', 'دارا، ۵۳۰ م.', 'Dara, 530',
      [['جنگ دوم با روم در ۵۲۸ م. آغاز شد؛ گفته‌اند چون روم نپذیرفت جانشینی خسرو را پشتیبانی کند. در ۵۳۰ م.، کنار دژ مرزی دارا، یکی از بزرگ‌ترین نبردهای روباز میان دو امپراتوری درگرفت و به پیروزی بزرگ روم انجامید، اما جنگ را پایان نداد.'],
        ['The second war with Rome began in 528, allegedly because Rome would not back Khosrow’s succession. In 530, by the frontier fortress of Dara, one of the greatest open-field battles between the two empires was fought. It ended in a great Roman victory, but did not end the war.']],
      [['همهٔ جزئیات نبرد، از خندق تا شمار سپاهیان، از پروکوپیوس است. نمودار زیر از روی گزارش او کشیده شده و طرح‌وار است.'],
        ['All the details of the battle, from the trench to the army sizes, come from Procopius. The diagram below follows his account and is schematic.']],
      [['شاه در این نبرد نبود؛ سرداری به نام پیروز فرمان می‌داد. جنگ‌هایی که یک تن آغاز می‌کند، دیگران در میدان بهایش را می‌پردازند.'],
        ['The king was not at this battle; a general named Perozes commanded. Wars that one man begins are paid for by others on the field.']],
      ['ir-kawad1', 'procopius'], {
        photos: ['dara-ruins'],
        quotes: [{ text: 'For on that day the Persians had been defeated in battle by the Romans, a thing which had not happened for a long time.', fa: 'زیرا در آن روز ایرانیان در نبرد از رومیان شکست خورده بودند؛ چیزی که دیرزمانی روی نداده بود.', ref: 'Procopius, History of the Wars 1.14, tr. H. B. Dewing (1914)', source: 'procopius' }],
        clip: { media: battleClipFor('kavad-i', 'dara', 992, 614), caption: B('نبرد دارا، گام‌به‌گام (طرح‌وار، به روایت پروکوپیوس)', 'The battle of Dara, step by step (schematic, after Procopius)') },
      }),
    sec('callinicum', 'کالینیکوم، ۵۳۱ م.', 'Callinicum, 531',
      [['در ۵۳۱ م. قباد سپاهی دیگر فرستاد. این سپاه به فرماندهی آزارتس و همراه منذر لخمی، کنار فرات نزدیک کالینیکوم، بلیساریوس را شکست داد. اما پیروزی پرهزینه بود و هیچ شهری به دست نیامد. همان سال، در محاصرهٔ میافارقین، قباد بیمار شد و درگذشت.'],
        ['In 531 Kavad sent another army. Under Azarethes and with the Lakhmid al-Mundhir, it defeated Belisarius by the Euphrates near Callinicum. But the victory was costly and no city was taken. Later that year, during the siege of Martyropolis, Kavad fell ill and died.']],
      [['پروکوپیوس می‌گوید ایرانیان هنگام لشکرکشی هر یک تیری در سبدی می‌گذاشتند و هنگام بازگشت برمی‌داشتند تا شمار کشتگان دانسته شود. چون تیرهای بسیاری ماند، قباد آزارتس را برای این پیروزی سرزنش کرد. این داستان تنها از پروکوپیوس است.'],
        ['Procopius says that on campaign each Persian put an arrow in a basket and took it out on return, so the dead could be counted. Because many arrows were left, Kavad rebuked Azarethes for the victory. Only Procopius has this story.']],
      [['شاه پیروزی‌ای را که شهری نگرفت و مردان بسیاری را کشت، شکست شمرد. حساب جنگ با جان سربازان بسته می‌شود، نه با پرچم میدان.'],
        ['The king counted a victory that took no city and cost many men as a failure. The account of a war is settled in soldiers’ lives, not in who holds the field.']],
      ['ir-kawad1', 'procopius'], {
        quotes: [{ text: 'And Azarethes said that he had captured no fortress, but that he had conquered the Romans and Belisarius in battle.', fa: 'و آزارتس گفت که هیچ دژی نگرفته است، اما رومیان و بلیساریوس را در نبرد شکست داده است.', ref: 'Procopius, History of the Wars 1.18, tr. H. B. Dewing (1914)', source: 'procopius' }],
        clip: { media: battleClipFor('kavad-i', 'callinicum', 992, 582), caption: B('نبرد کالینیکوم، گام‌به‌گام (طرح‌وار، به روایت پروکوپیوس)', 'The battle of Callinicum, step by step (schematic, after Procopius)') },
      }),
    sec('reform', 'شاهی نیرومند و آغاز اصلاحات', 'A strong crown and the first reforms',
      [['قباد پس از بازگشت از مزدکیان دست کشید و بزرگان سرکش را رام کرد. به گفتهٔ شهبازی، منصب «ارتشتاران‌سالار» را برانداخت و فرماندهی سپاه را میان چهار سپهبد بخش کرد. شیندل می‌گوید روشن است که در پایان پادشاهی او پیمایش زمین‌ها برای مالیات آغاز شد و هنگام مرگش ناتمام بود. خسرو یکم بر پایهٔ آن مالیات نقدی در سه قسط سالانه گرفت.'],
        ['After his return Kavad dropped the Mazdakites and subdued the unruly nobles. According to Shahbazi he abolished the office of supreme commander and divided the army command among four spāhbeds. Schindel says it is certain that a cadastral survey was begun late in his reign and was still incomplete at his death. On it Khosrow I based a tax paid in money in three annual instalments.']],
      [['شیندل می‌گوید دربارهٔ معنای این اصلاحات دیدگاه‌های گوناگون هست. این‌که چهار سپهبد را قباد ساخت یا خسرو، در منابع یکسان نیست.'],
        ['Schindel notes that views differ on what these reforms meant. Whether the four spāhbeds were Kavad’s work or Khosrow’s is not agreed in the sources.']],
      [['پیمایش زمین و مالیات ثابت نقدی یعنی کشاورز از پیش می‌دانست چه بدهکار است. مالیات پیش‌بینی‌پذیر، هرچند سنگین، از گرفتن دلبخواه به نسبت محصول کمتر جا برای زورگویی می‌گذارد. این برداشت ماست.'],
        ['A land survey and a fixed money tax meant a farmer knew in advance what he owed. A predictable tax, even a heavy one, leaves less room for abuse than arbitrary levies on the harvest. This is our reading.']],
      ['ir-kawad1', 'ir-sasdyn']),
  ],
  synthesis: { title: B('جمع‌بندی', 'Synthesis'), paras: {
    fa: ['قباد شاهی ناتوان را از بزرگان گرفت و شاهی نیرومند به خسرو سپرد. در میانه از مزدکیان پشتیبانی کرد، تاج را از دست داد و با یاری هپتالیان پس گرفت، و سپس مزدکیان را کشت.', 'دربارهٔ مزدکیان تنها صدای دشمنانشان به ما رسیده است. این صفحه آن صداها را با نامشان می‌آورد و اختلاف پژوهشگران را جدا از برداشت امروزی ما نشان می‌دهد.'],
    en: ['Kavad took a weak crown from the nobles and handed a strong one to Khosrow. In between he backed the Mazdakites, lost the throne, won it back with Hephthalite help, and then had the Mazdakites killed.', 'About the Mazdakites only their enemies’ voices reach us. This page names those voices and keeps the scholars’ dispute apart from our modern reading.'],
  }, sources: ['ir-kawad1', 'ir-religions', 'procopius'] },
  sources: pick('ir-kawad1', 'ir-sasdyn', 'ir-religions', 'ir-jamasp', 'procopius'),
  photos: photos('coin-kavad', 'dara-ruins'),
  related: related(['peroz-i', 'پیروز یکم، پدرش', 'Peroz I, his father'], ['balash', 'بلاش، عمویش', 'Balash, his uncle'], ['jamasp', 'زاماسپ، برادرش', 'Zamasp, his brother'], ['khosrow-i', 'خسرو یکم، پسرش', 'Khosrow I, his son']),
  wikipedia: 'https://en.wikipedia.org/wiki/Kavad_I',
}
