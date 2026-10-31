/**
 * Shapur I (240–270 CE), second Sasanian king of kings.
 * Verbatim: ŠKZ (tr. Frye 1984, via Sasanika). Paraphrased: Iranica (Shahbazi “Šāpur I”, Lieu “Edessa”, Keall “Bīšāpūr”, Sundermann “Mani”).
 * The ŠKZ is Shapur's own account; where Roman writers differ, the page says so.
 */
import type { BattleDiagram, BattleUnit, Bi, FeaturedKing } from '../featured/types'
import { ANTIOCH, ARMENIA, BARBALISSOS, BISHAPUR, CAPPADOCIA, CARRHAE, CILICIA, CTESIPHON, DURA, EDESSA, GUNDESHAPUR, ISTAKHR, MISICHE, NISIBIS, SAMOSATA, SAS, SATALA, battleClipFor, clipFor, ev, note, photos, pick, related, sec } from './common'

const B = (fa: string, en: string): Bi => ({ fa, en })

const EDESSA_NOTE = note('شاپور در کتیبه می‌گوید والرین را «با دست خود» در نبردی بزرگ اسیر کرد. نویسندگان رومی شکست را به بیماری و خیانت هم‌پیمانان نسبت دادند و گفتند امپراتور پیر در گفت‌وگوی آتش‌بس فریب خورد و در میدان نبرد گرفتار نشد. جای نبرد را تنها «آن سوی حران و ادسا» می‌دانیم.', 'In the inscription Shapur says he took Valerian prisoner “with our own hands” in a great battle. Roman writers blamed disease and the treachery of allies, and said the aged emperor was tricked during truce talks and not taken in battle. We know the site only as “beyond Carrhae and Edessa”.')

const crown = ev('coronation', 240, B('۱۲ آوریل ۲۴۰ م.', '12 April 240 CE'), 'admin', ISTAKHR, B('تاج‌گذاری در زمان پدر', 'Crowned in his father’s lifetime'),
  B('کدکس مانی کلن: در ۲۴۰ م. اردشیر هترا را گشود و شاپور دیهیم بزرگ شاهی را بر سر گذاشت. ایرانیکا، به پیروی از هنینگ، روز را یکشنبه ۱۲ آوریل ۲۴۰ می‌داند. چند سالی پدر و پسر با هم شاه بودند. جای تاج‌گذاری معلوم نیست؛ نشانه روی نقشه پارس است.', 'The Cologne Mani Codex: in 240 Ardashir conquered Hatra and Shapur put on the great royal diadem. Iranica, following Henning, dates the day to Sunday 12 April 240. For a few years father and son were kings together. The place of the coronation is unknown; the marker is set in Persis.'),
  'probable', ['cmc', 'ir-shapur1'])
const mani = ev('mani', 242, B('دههٔ ۲۴۰ م.', 'the 240s CE'), 'religion', CTESIPHON, B('مانی در دربار شاپور', 'Mani at Shapur’s court'),
  B('مانی از ۲۴۰ م. دین خود را آشکارا تبلیغ کرد. کتابی به نام شاپور نوشت (شاپورگان) و زیر پشتیبانی شاه، مبلغانش در شاهنشاهی پراکنده شدند. شاپور اما دین او را نپذیرفت.', 'Mani preached his religion openly from 240. He wrote a book in Shapur’s name (the Šābuhragān), and under the king’s protection his missionaries spread through the empire. Shapur, however, did not adopt his religion.'),
  'disputed', ['ir-mani', 'ir-shapur1'], note('سال نخستین دیدار مانی با شاپور روشن نیست. منابع مانوی از «گرویدن» شاه سخن می‌گویند؛ ایرانیکا (شهبازی) می‌گوید مانی نتوانست او را به دین خود درآورد.', 'The year of Mani’s first audience with Shapur is unclear. Manichaean sources speak of the king’s “conversion”; Iranica (Shahbazi) says Mani failed to convert him.'))
const gordian = ev('gordian', 243, B('۲۴۲–۲۴۳ م.', '242–243 CE'), 'campaign', ANTIOCH, B('گوردیانوس به شرق می‌آید', 'Gordian comes east'),
  B('شاپور: «گوردیانوس قیصر از سراسر امپراتوری روم... سپاهی گرد آورد» و به آسورستان (بابل) تاخت. گوردیانوس در پایان ۲۴۲ م. از انطاکیه به سنا نوشت که خطر «شاهان پارس» را دور کرده است.', 'Shapur: Gordian Caesar raised a force “in all of the Roman Empire” and marched on Asuristan (Babylonia). In late 242 Gordian wrote from Antioch to the senate that he had removed the threat “of Persian kings”.'),
  'probable', ['skz', 'ir-shapur1'], { route: [ANTIOCH, CARRHAE, NISIBIS, DURA, MISICHE] })
const misiche = ev('misiche', 244, B('آغاز ۲۴۴ م.', 'early 244 CE'), 'battle', MISICHE, B('نبرد مِسیخه و مرگ گوردیانوس', 'The battle of Misiche and the death of Gordian'),
  B('شاپور: در مرز بابل، در مسیخه، نبردی بزرگ رو‌در‌رو روی داد، گوردیانوس کشته شد و سپاه روم نابود شد. رومیان فیلیپ را قیصر کردند.', 'Shapur: on the border of Babylonia, at Misiche, a great frontal battle took place; Gordian was killed and the Roman army destroyed. The Romans made Philip Caesar.'),
  'disputed', ['skz', 'ir-shapur1'], note('منابع رومی دربارهٔ مرگ گوردیانوس یکسان نیستند: زوسیموس می‌گوید او در دل سرزمین دشمن کشته شد، و زوناراس می‌گوید در نبرد از اسب افتاد، رانش شکست و مرد. برخی منابع رومی فیلیپ را در مرگ او دست‌اندرکار می‌دانند. شاپور او را کشتهٔ نبرد می‌خواند.', 'The Roman sources disagree on Gordian’s death: Zosimus says he was killed deep in enemy land, and Zonaras that he fell from his horse in battle, broke his thigh and died. Some Roman sources blame Philip. Shapur says he was killed in the battle.'))
const philip = ev('philip', 244, B('۲۴۴ م.', '244 CE'), 'admin', MISICHE, B('صلح فیلیپ؛ مسیخه «پیروز شاپور» می‌شود', 'Philip’s peace; Misiche becomes Peroz-Shapur'),
  B('به گفتهٔ شاپور، فیلیپ برای خون‌بهای جان رومیان ۵۰۰٬۰۰۰ دینار داد و باج‌گزار شد، و مسیخه پیروز شاپور نام گرفت. این شهر انبار اصلی سپاه در مرز غربی شد (نام دیگرش انبار). منابع رومی صلح را «شرم‌آور» خواندند.', 'According to Shapur, Philip paid 500,000 denarii to ransom the Romans’ lives and became tributary, and Misiche was renamed Peroz-Shapur. The town became the army’s main magazine on the western front (hence its other name, Anbar). Roman sources called the peace “most shameful”.'),
  'probable', ['skz', 'ir-shapur1'])
const armenia = ev('armenia', 252, B('حدود ۲۵۲ م.', 'c. 252 CE'), 'campaign', ARMENIA, B('ارمنستان', 'Armenia'),
  B('شاپور: «قیصر باز دروغ گفت و به ارمنستان بد کرد». ایرانیکا: شاپور ارمنستان را بازگرفت و پسرش هرمزد-اردشیر را «شاه بزرگ ارمنیان» کرد. گرجستان هم سر فرود آورد.', 'Shapur: “Caesar lied again and did wrong to Armenia.” Iranica: Shapur retook Armenia and made his son Hormizd-Ardashir “Great King of the Armenians”. Georgia also submitted.'),
  'disputed', ['skz', 'ir-shapur1'], note('سال گرفتن ارمنستان روشن نیست؛ ایرانیکا آن را به مرحلهٔ نخست جنگ دوم می‌گذارد.', 'The year Armenia was taken is unclear; Iranica places it in the first phase of the second war.'))
const barbalissos = ev('barbalissos', 253, B('۲۵۲ یا ۲۵۳ م.', '252 or 253 CE'), 'battle', BARBALISSOS, B('نبرد بربالیسوس', 'The battle of Barbalissos'),
  B('شاپور: «در بربالیسوس سپاهی ۶۰٬۰۰۰ نفری از روم را نابود کردیم» و سوریه و پیرامون آن را سوزاندیم و غارت کردیم.', 'Shapur: “we annihilated at Barbalissos a Roman force of 60,000” and burned and plundered Syria and its surroundings.'),
  'disputed', ['skz', 'ir-shapur1'], { ...note('سال نبرد ۲۵۲ یا ۲۵۳ م. است و پژوهشگران هم‌رأی نیستند. شمار ۶۰٬۰۰۰ ادعای خود شاپور است.', 'The battle is dated to 252 or 253 and scholars disagree. The figure of 60,000 is Shapur’s own claim.'), route: [CTESIPHON, DURA, BARBALISSOS] })
const antioch = ev('antioch', 253, B('۲۵۳ م. (یا ۲۵۶)', '253 CE (or 256)'), 'battle', ANTIOCH, B('گرفتن انطاکیه', 'Antioch taken'),
  B('شاپور ۳۷ شهر و دژ را در این لشکرکشی نام می‌برد، از جمله انطاکیه، پایتخت ثروتمند شرق روم، و دورا. ایرانیکا: چند لشکرکشی در سال‌های ۲۵۳–۲۵۶ م. روی داد و انطاکیه هدف نهایی بود.', 'Shapur names 37 towns and forts taken in this campaign, including Antioch, the rich capital of the Roman East, and Dura. Iranica: there were several campaigns in 253–256, with Antioch as the final goal.'),
  'disputed', ['skz', 'ir-shapur1'], { ...note('سال گرفتن انطاکیه (۲۵۳ یا ۲۵۶ م.) محل بحث است.', 'The year Antioch fell (253 or 256) is disputed.'), route: [BARBALISSOS, ANTIOCH] })
const cappadocia = ev('cappadocia', 254, B('۲۵۳–۲۵۶ م.', '253–256 CE'), 'campaign', SATALA, B('هرمزد-اردشیر در کاپادوکیه', 'Hormizd-Ardashir in Cappadocia'),
  B('ایرانیکا: پس از بربالیسوس شاپور سپاه را بخش کرد. هرمزد-اردشیر به ارمنستان کوچک و کاپادوکیه تاخت. کتیبه در کاپادوکیه از ساتالا و چند شهر دیگر نام می‌برد.', 'Iranica: after Barbalissos Shapur divided his forces. Hormizd-Ardashir invaded Lesser Armenia and Cappadocia. The inscription names Satala and other towns in Cappadocia.'),
  'probable', ['ir-shapur1', 'skz'], { route: [ARMENIA, SATALA] })
const edessa = ev('edessa', 260, B('۲۶۰ م.', '260 CE'), 'battle', EDESSA, B('ادسا: والرین اسیر می‌شود', 'Edessa: Valerian is captured'),
  B('شاپور: در لشکرکشی سوم حران و ادسا را محاصره کردیم. والرین با ۷۰٬۰۰۰ تن آمد. آن سوی حران و ادسا نبردی بزرگ روی داد و والرین، فرمانده پاسداران و سناتورها را اسیر کردیم و به پارس بردیم. ادسا در فهرست شهرهای گرفته‌شده نیست.', 'Shapur: in the third campaign we besieged Carrhae and Edessa. Valerian came with 70,000 men. Beyond Carrhae and Edessa a great battle took place, and we took Valerian, the praetorian prefect and senators prisoner and carried them to Persis. Edessa is not in the list of captured towns.'),
  'disputed', ['skz', 'ir-shapur1', 'ir-edessa'], { ...EDESSA_NOTE, route: [CTESIPHON, NISIBIS, CARRHAE, EDESSA] })
const raid = ev('raid', 260, B('۲۶۰ م.', '260 CE'), 'campaign', CILICIA, B('سوریه، کیلیکیه و کاپادوکیه', 'Syria, Cilicia and Cappadocia'),
  B('شاپور: سوریه، کیلیکیه و کاپادوکیه را سوزاندیم، ویران کردیم و غارت کردیم. او ۳۶ شهر دیگر را نام می‌برد، از سمیساط تا طرسوس و قیصریه.', 'Shapur: we burned, ruined and plundered Syria, Cilicia and Cappadocia. He names 36 more towns, from Samosata to Tarsus and Caesarea.'),
  'probable', ['skz'], { route: [EDESSA, SAMOSATA, CILICIA, CAPPADOCIA] })
const odaenathus = ev('odaenathus', 260, B('پایان ۲۶۰ م.', 'late 260 CE'), 'campaign', CTESIPHON, B('بازگشت و یورش اذینه', 'The return and Odaenathus’ raid'),
  B('سپاه بیش از اندازه در شرق روم پراکنده شده بود. شاپور با غنیمت و اسیران بسیار از شرق کیلیکیه و شمال میان‌رودان به تیسفون بازگشت. بخشی از بار و بنهٔ او را عربان پالمیر به رهبری اذینه زدند.', 'The army had spread too widely over the Roman East. Shapur returned to Ctesiphon with booty and many captives through eastern Cilicia and northern Mesopotamia. Palmyrene Arabs under Odaenathus raided part of his baggage train.'),
  'disputed', ['ir-shapur1', 'ir-edessa'], { ...note('نویسندگان رومی این یورش را شکست‌های پیاپی شاپور نشان داده‌اند. ایرانیکا (به پیروی از هنینگ و اسپرنگلینگ) آن را «رویدادی کوچک با تاریخ نامعلوم» می‌داند. ایرانیکا (لیو) می‌گوید شاپور برای گذشتن از پادگان ادسا رشوه داد.', 'Roman writers made this raid into repeated defeats of Shapur. Iranica (after Henning and Sprengling) calls it a “minor incident of uncertain date”. Iranica (Lieu) says Shapur had to bribe his way past the garrison of Edessa.'), route: [CAPPADOCIA, EDESSA, NISIBIS, CTESIPHON] })
const gundeshapur = ev('gundeshapur', 261, B('پس از ۲۶۰ م.', 'after 260 CE'), 'building', GUNDESHAPUR, B('اسیران در شهرهای تازه', 'Captives in new cities'),
  B('شاپور: مردان امپراتوری روم را کوچاندیم و در پارس، پارت، خوزستان و آسورستان نشاندیم. ایرانیکا: گندی‌شاپور بر جای شهر کهن بیت لاپط برای جای دادن اسیران انطاکیه «بنیاد» شد.', 'Shapur: we deported men of the Roman Empire and settled them in Persis, Parthia, Khuzestan and Asuristan. Iranica: Gundeshapur was “founded” on the site of the old town of Bēṯ Lapaṭ to house the deported Antiochenes.'),
  'probable', ['skz', 'ir-shapur1'], { route: [ANTIOCH, CTESIPHON, GUNDESHAPUR] })
const bishapur = ev('bishapur', 266, B('حدود ۲۶۶ م.', 'c. 266 CE'), 'building', BISHAPUR, B('بیشاپور', 'Bishapur'),
  B('شاپور شهر بیشاپور را در پارس ساخت و در تنگ چوگان نزدیک آن نقش‌های پیروزی خود را کند. به گفتهٔ ابن قتیبه، اسیران رومی در آنجا نشانده شدند.', 'Shapur built the city of Bishapur in Persis and carved his triumph reliefs in the nearby Tang-e Chowgan. According to Ibn Qutayba, Roman captives were settled there.'),
  'probable', ['ir-bishapur', 'ir-shapur1'])
const death = ev('death', 270, B('احتمالاً مه ۲۷۰ م.', 'probably May 270 CE'), 'admin', BISHAPUR, B('مرگ در بیشاپور', 'Death at Bishapur'),
  B('ایرانیکا: شاپور در شهر بیشاپور بیمار شد و احتمالاً در مه ۲۷۰ م.، در سی و یکمین سال پادشاهی، درگذشت. پسرش هرمزد جانشین او شد.', 'Iranica: Shapur fell ill and died in the city of Bishapur, probably in May 270, in the thirty-first year of his reign. His son Hormizd succeeded him.'),
  'probable', ['ir-shapur1'])

const P = (id: string, fa: string, en: string, at: [number, number]): BattleUnit => ({ id, side: 'persian', kind: 'army', label: { fa, en }, at })
const R = (id: string, fa: string, en: string, at: [number, number]): BattleUnit => ({ id, side: 'greek', kind: 'army', label: { fa, en }, at })
const SKETCH = B('تنها کتیبهٔ شاپور (و چند خبر کوتاه رومی) از این نبرد یاد می‌کند؛ هیچ گزارش تاکتیکی نمانده است. جای‌ها ویرایشی و طرح‌وارند.', 'Only Shapur’s inscription (and a few short Roman notices) mention the battle; no tactical account survives. Positions are editorial and schematic.')

const edessaBattle: BattleDiagram = {
  id: 'edessa',
  title: B('ادسا، ۲۶۰ م.، گام‌به‌گام (طرح‌وار)', 'Edessa, 260 CE, step by step (schematic)'),
  when: B('۲۶۰ م.', '260 CE'),
  sides: { persian: B('ایرانیان (ساسانی)', 'Iranians (Sasanian)'), greek: B('رومیان', 'Romans') },
  land: ['M0 0 L100 0 L100 60 L0 60 Z'],
  labels: [
    { at: [52, 14], text: B('ادسا (رها)', 'Edessa (Urhai)') },
    { at: [70, 50], text: B('حران', 'Carrhae') },
    { at: [24, 6], text: B('راه سمیساط و سوریه', 'Road to Samosata, Syria') },
  ],
  phases: [
    {
      id: 'siege', title: B('محاصرهٔ حران و ادسا', 'The siege of Carrhae and Edessa'),
      body: B('شاپور در لشکرکشی سوم حران و ادسا را محاصره کرد.', 'In his third campaign Shapur besieged Carrhae and Edessa.'),
      units: [P('north', 'محاصرهٔ ادسا', 'Siege of Edessa', [58, 22]), P('south', 'محاصرهٔ حران', 'Siege of Carrhae', [74, 44]), P('king', 'شاپور', 'Shapur', [82, 32])],
      arrows: [{ side: 'persian', path: [[64, 24], [56, 18]] }, { side: 'persian', path: [[76, 46], [72, 50]] }],
      certainty: 'secure', certaintyNote: SKETCH, sources: ['skz'],
    },
    {
      id: 'relief', title: B('والرین برای نجات می‌آید', 'Valerian marches to the rescue'),
      body: B('به گفتهٔ شاپور، والرین با سپاهی ۷۰٬۰۰۰ نفری از استان‌های بسیار روم آمد. این شمار ادعای شاپور است.', 'According to Shapur, Valerian came with a force of 70,000 from many Roman provinces. The figure is Shapur’s claim.'),
      units: [R('legions', 'والرین و لژیون‌ها', 'Valerian and the legions', [14, 30]), P('north', 'ادسا', 'At Edessa', [58, 22]), P('south', 'حران', 'At Carrhae', [74, 44]), P('king', 'شاپور', 'Shapur', [80, 32])],
      arrows: [{ side: 'greek', path: [[4, 30], [22, 30]] }],
      certainty: 'probable', certaintyNote: SKETCH, sources: ['skz'],
    },
    {
      id: 'battle', title: B('نبرد «آن سوی حران و ادسا»', 'The battle “beyond Carrhae and Edessa”'),
      body: B('شاپور: «آن سوی حران و ادسا نبردی بزرگ با والرین قیصر داشتیم». ایرانیکا «آن سو» را غرب این دو شهر می‌داند. سپاه ایران محاصره را رها کرد و به دیدار رومیان رفت.', 'Shapur: “beyond Carrhae and Edessa we had a great battle with Valerian Caesar.” Iranica reads “beyond” as west of the two towns. The Iranian army left the sieges and went to meet the Romans.'),
      units: [R('legions', 'والرین و لژیون‌ها', 'Valerian and the legions', [26, 30]), P('north', 'سواران', 'Horsemen', [38, 18]), P('south', 'سواران', 'Horsemen', [40, 44]), P('king', 'شاپور', 'Shapur', [46, 30])],
      arrows: [{ side: 'persian', path: [[58, 22], [40, 18], [30, 24]] }, { side: 'persian', path: [[72, 44], [42, 44], [30, 36]] }, { side: 'persian', path: [[80, 32], [48, 30]] }],
      certainty: 'probable', certaintyNote: SKETCH, sources: ['skz', 'ir-shapur1'],
    },
    {
      id: 'capture', title: B('اسارت والرین', 'Valerian’s capture'),
      body: B('شاپور: والرین و فرماندهان، فرمانده پاسداران و سناتورها را با دست خود اسیر کردیم و به پارس بردیم. روایت رومی: امپراتور در گفت‌وگوی آتش‌بس فریب خورد.', 'Shapur: we took Valerian and the commanders, the praetorian prefect and senators prisoner with our own hands and carried them to Persis. The Roman version: the emperor was tricked during truce talks.'),
      units: [R('legions', 'والرین (اسیر)', 'Valerian (captive)', [26, 30]), P('north', 'سواران', 'Horsemen', [28, 18]), P('south', 'سواران', 'Horsemen', [28, 44]), P('king', 'شاپور', 'Shapur', [48, 30])],
      arrows: [{ side: 'persian', path: [[44, 30], [70, 30], [96, 34]] }],
      certainty: 'disputed', certaintyNote: EDESSA_NOTE.certaintyNote, sources: ['skz', 'ir-shapur1'],
    },
  ],
}

const EVENTS = [crown, mani, gordian, misiche, philip, armenia, barbalissos, antioch, cappadocia, edessa, raid, odaenathus, gundeshapur, bishapur, death]

export const shapurI: FeaturedKing = {
  slug: 'shapur-i', name: B('شاپور یکم', 'Shapur I'), dynastyName: SAS,
  reign: B('۲۴۰–۲۷۰ م.', '240–270 CE'),
  title: B('شاپور یکم؛ سه امپراتور روم و کتیبهٔ کعبهٔ زرتشت', 'Shapur I: three Roman emperors and the Kaʿba-ye Zardošt inscription'),
  lede: B(
    'شاپور، پسر اردشیر، در زمان پدر تاج گذاشت و سی سال پادشاهی کرد. او در سه لشکرکشی با روم جنگید: در مسیخه (۲۴۴ م.) گوردیانوس سوم کشته شد و فیلیپ صلح خرید؛ در بربالیسوس (۲۵۲/۲۵۳ م.) سپاهی رومی نابود شد و انطاکیه افتاد؛ و در ۲۶۰ م. نزدیک ادسا امپراتور والرین اسیر شد. شاپور این‌ها را در کتیبه‌ای سه‌زبانه بر کعبهٔ زرتشت نوشت و در نقش رستم و بیشاپور کند. هزاران اسیر رومی را در شهرهای ایران نشاند. مانی در روزگار او آزادانه دین خود را تبلیغ کرد.',
    'Shapur, son of Ardashir, was crowned in his father’s lifetime and reigned for thirty years. He fought Rome in three campaigns: at Misiche (244) Gordian III was killed and Philip bought peace; at Barbalissos (252/253) a Roman army was destroyed and Antioch fell; and in 260, near Edessa, the emperor Valerian was taken prisoner. Shapur wrote this down in a trilingual inscription on the Kaʿba-ye Zardošt and carved it at Naqsh-e Rostam and Bishapur. He settled thousands of Roman captives in Iranian cities. In his time Mani preached his religion freely.'),
  stats: [{ n: B('۳', '3'), l: B('امپراتور روم در نقش‌ها', 'Roman emperors in his reliefs') }, { n: B('۵۰۰٬۰۰۰', '500,000'), l: B('دینار بهای صلح فیلیپ (به گفتهٔ شاپور)', 'denarii for Philip’s peace (Shapur’s claim)') }, { n: B('۷۳', '73'), l: B('شهر و دژ در فهرست کتیبه', 'towns and forts in the inscription’s lists') }, { n: B('۲۶۰', '260'), l: B('اسارت والرین (م.)', 'Valerian captured (CE)') }],
  mapTitle: B('نقشهٔ متحرک: سه لشکرکشی شاپور', 'Animated map: Shapur’s three campaigns'),
  events: EVENTS, span: [240, 270],
  campaign: {
    id: 'reign',
    title: B('از مسیخه تا ادسا، گام‌به‌گام (۲۴۰–۲۷۰ م.)', 'From Misiche to Edessa, step by step (240–270 CE)'),
    intro: {
      fa: ['سه لشکرکشی شاپور به روایت کتیبهٔ خود او، در کنار آنچه رومیان و ایرانیکا می‌گویند. هر گام می‌گوید قطعی، محتمل یا محل بحث است؛ مسیرها طرح‌واره‌اند. نمودار گام‌به‌گام نبرد ادسا زیر نقشه آمده است.'],
      en: ['Shapur’s three campaigns as told in his own inscription, beside what the Romans and Iranica say. Each step says whether it is secure, probable or disputed; the routes are sketches. The step-by-step diagram of the battle of Edessa is below the map.'],
    },
    events: EVENTS, span: [240, 270], view: [33, 27.5, 55, 41.5],
    places: [
      { name: B('تیسفون', 'Ctesiphon'), c: CTESIPHON }, { name: B('مسیخه', 'Misiche'), c: MISICHE, dy: -2.5 }, { name: B('بربالیسوس', 'Barbalissos'), c: BARBALISSOS },
      { name: B('انطاکیه', 'Antioch'), c: ANTIOCH, left: true }, { name: B('ادسا', 'Edessa'), c: EDESSA, left: true }, { name: B('نصیبین', 'Nisibis'), c: NISIBIS },
      { name: B('ساتالا', 'Satala'), c: SATALA }, { name: B('گندی‌شاپور', 'Gundeshapur'), c: GUNDESHAPUR }, { name: B('بیشاپور', 'Bishapur'), c: BISHAPUR }, { name: B('ارمنستان', 'Armenia'), c: ARMENIA },
    ],
    clip: clipFor('shapur-i'),
    battles: [edessaBattle],
  },
  shareImage: '/media/shapur-i/reign-en.png',
  dossier: [
    sec('skz', 'کتیبهٔ کعبهٔ زرتشت: شاپور از زبان خود', 'The Kaʿba-ye Zardošt inscription: Shapur in his own words',
      [['شاپور گزارش جنگ‌ها و بنیادهای دینی خود را به سه زبان پارسی میانه، پارتی و یونانی بر دیوارهای کعبهٔ زرتشت در نقش رستم نوشت. پژوهشگران آن را ŠKZ یا «کارنامهٔ شاپور» (Res Gestae Divi Saporis) می‌نامند. به گفتهٔ ایرانیکا، از ۱۹۴۰ م. می‌توان روایت رومیِ جنگ‌ها را با روایت خود شاپور سنجید. کتیبه همچنین آتشکده‌هایی را نام می‌برد که شاپور برای روان خود و خانواده‌اش بنیاد کرد.'],
        ['Shapur wrote the account of his wars and religious foundations in Middle Persian, Parthian and Greek on the walls of the Kaʿba-ye Zardošt at Naqsh-e Rostam. Scholars call it ŠKZ, or the Res Gestae Divi Saporis. Since 1940 it has been possible to set the Roman account of the wars beside Shapur’s own. The inscription also names the fires Shapur founded for his own soul and for his family.']],
      [['این متن هم‌روزگار و دست اول است، اما تبلیغ رسمی است. شاپور شکستی را یاد نمی‌کند و شمار دشمنان را بزرگ نشان می‌دهد. با این همه، فهرست شهرها و استان‌ها بسیار دقیق است و با منابع رومی کمابیش جور درمی‌آید. ایرانیکا (شهبازی) می‌گوید کتیبه و نقش‌ها با منابع رومی هم‌داستان‌اند که سه لشکرکشی در کار بود.'],
        ['The text is contemporary and first-hand, but it is official propaganda. Shapur mentions no defeat and makes his enemies’ numbers large. Even so, its lists of towns and provinces are very precise and broadly match the Roman sources. Iranica (Shahbazi) says the inscription and the reliefs agree with the Roman sources that there were three campaigns.']],
      [['شاپور خود می‌گوید چرا نوشت: تا آیندگان نام و قدرت او را بدانند. سنگ‌نوشته‌های شاهان سند قدرت‌اند، نه سند زندگی مردم؛ برای شنیدن صدای شهرهای سوخته باید جای دیگری را جست.'],
        ['Shapur himself says why he wrote: so that those who came after would know his fame and power. Royal inscriptions are records of power, not of people’s lives; to hear the voice of the burned towns we have to look elsewhere.']],
      ['skz', 'ir-shapur1'], {
        quotes: [
          { text: 'I, the Mazda worshipping lord Shapur, king of kings of Iran and non-Iran, whose lineage is from the Gods, son of the Mazda worshipping divinity Ardashir, king of kings of Iran, whose lineage is from the Gods, grandson of king Papak, am ruler of Iranshahr', fa: 'من، خداوندگار مزداپرست شاپور، شاهنشاه ایران و انیران، که نژاد از ایزدان دارد، پسر خداوندگار مزداپرست اردشیر، شاهنشاه ایران، که نژاد از ایزدان دارد، نوهٔ پاپک شاه، فرمانروای ایرانشهرم.', ref: 'ŠKZ §1, tr. Frye', source: 'skz' },
          { text: 'We ordered it written so that whoever comes after us may know this fame, heroism and power of us.', fa: 'فرمودیم این را بنویسند تا هر که پس از ما آید، این نام و دلیری و قدرت ما را بداند.', ref: 'ŠKZ §16–17, tr. Frye', source: 'skz' },
        ],
        photos: ['coin-shapur1'],
      }),
    sec('misiche', 'مسیخه، ۲۴۴ م.: گوردیانوس و فیلیپ', 'Misiche, 244 CE: Gordian and Philip',
      [['به گفتهٔ شاپور، گوردیانوس سوم «از سراسر امپراتوری روم» سپاه گرد آورد و به آسورستان (بابل) تاخت. در مسیخه، در مرز بابل، نبردی بزرگ روی داد؛ گوردیانوس کشته شد و سپاه روم نابود شد. فیلیپ عرب، امپراتور تازه، ۵۰۰٬۰۰۰ دینار داد و صلح کرد. شاپور مسیخه را پیروز شاپور نامید.'],
        ['According to Shapur, Gordian III raised a force “in all of the Roman Empire” and marched on Asuristan (Babylonia). At Misiche, on the border of Babylonia, a great battle took place; Gordian was killed and the Roman army destroyed. Philip the Arab, the new emperor, paid 500,000 denarii and made peace. Shapur renamed Misiche Peroz-Shapur (“victorious is Shapur”).']],
      [['روایت رومی دیگر است. زندگی‌نامهٔ رسمی گوردیانوس می‌گوید او پیروز بود و فیلیپ با توطئه او را از میان برد؛ زوسیموس می‌گوید او در دل سرزمین دشمن کشته شد؛ زوناراس می‌گوید از اسب افتاد و مرد. هیچ‌یک از این روایت‌ها را نمی‌توان یکسره پذیرفت. آنچه هر دو سو می‌پذیرند این است که فیلیپ پول داد و صلح کرد.'],
        ['The Roman account is different. The official life of Gordian says he was winning and Philip had him removed by a plot; Zosimus says he was killed deep in enemy land; Zonaras that he fell from his horse and died. None of these can be accepted outright. What both sides accept is that Philip paid and made peace.']],
      [['شاپور پولی را که برای «خون‌بهای جان» سربازان گرفت، با افتخار در سنگ نوشت. در جنگ‌های شاهان، جان سرباز هم کالایی است که خرید و فروش می‌شود.'],
        ['Shapur proudly carved in stone the money he took “to ransom their lives”. In the wars of kings, even a soldier’s life is a commodity to be bought and sold.']],
      ['skz', 'ir-shapur1'], {
        quotes: [
          { text: 'On the border of Babylonia at Misikhe, a great \'frontal\'battle occurred. Gordian Caesar […] was killed and the Roman force was destroyed. And the Romans made Philip Caesar. Then Philip Caesar came to us for terms, and to ransom their lives, gave us 500,000 denars, and became tributary to us. And for this reason we have renamed Misikhe Peroz-Shapur.', fa: 'در مرز بابل، در مسیخه، نبردی بزرگ و رو‌در‌رو روی داد. گوردیانوس قیصر کشته شد و سپاه روم نابود شد. و رومیان فیلیپ را قیصر کردند. سپس فیلیپ قیصر برای صلح نزد ما آمد و برای خون‌بهای جانشان ۵۰۰٬۰۰۰ دینار به ما داد و باج‌گزار ما شد. و از این رو مسیخه را پیروز شاپور نامیدیم.', ref: 'ŠKZ §3–4, tr. Frye (the bracket marks a line number left out)', source: 'skz' },
        ],
      }),
    sec('barbalissos', 'بربالیسوس و انطاکیه: لشکرکشی دوم', 'Barbalissos and Antioch: the second campaign',
      [['شاپور می‌گوید قیصر «باز دروغ گفت و به ارمنستان بد کرد»، پس او به امپراتوری روم تاخت و در بربالیسوس، کنار فرات، سپاهی ۶۰٬۰۰۰ نفری را نابود کرد. سپس ۳۷ شهر و دژ را نام می‌برد، از عانه و دورا تا انطاکیه، و در کاپادوکیه ساتالا. ایرانیکا: پس از بربالیسوس شاپور سپاه را بخش کرد و پسرش هرمزد-اردشیر به ارمنستان کوچک و کاپادوکیه تاخت.'],
        ['Shapur says that Caesar “lied again and did wrong to Armenia”, so he attacked the Roman Empire and destroyed a force of 60,000 at Barbalissos on the Euphrates. He then names 37 towns and forts, from Anatha and Dura to Antioch, and Satala in Cappadocia. Iranica: after Barbalissos Shapur divided his forces, and his son Hormizd-Ardashir invaded Lesser Armenia and Cappadocia.']],
      [['سال بربالیسوس (۲۵۲ یا ۲۵۳ م.) و سال گرفتن انطاکیه (۲۵۳ یا ۲۵۶ م.) محل بحث است. ایرانیکا از چند لشکرکشی در ۲۵۳–۲۵۶ م. سخن می‌گوید که کتیبه آن‌ها را یکی کرده است. شمار ۶۰٬۰۰۰ را باید ادعای پیروز دانست.'],
        ['The year of Barbalissos (252 or 253) and the year Antioch fell (253 or 256) are disputed. Iranica speaks of several campaigns in 253–256 that the inscription merges into one. The figure of 60,000 should be taken as the victor’s claim.']],
      [['«سوزاندیم، ویران کردیم و غارت کردیم» بارها در این کتیبه می‌آید. برای مردم شهرهای سوریه، این جنگ نه پیروزی بود و نه شکست، بلکه از دست رفتن خانه و دارایی بود.'],
        ['“We burned, ruined and pillaged” comes again and again in this inscription. For the people of the Syrian towns this war was neither victory nor defeat, but the loss of their homes and property.']],
      ['skz', 'ir-shapur1'], {
        quotes: [
          { text: 'And Caesar lied again and did wrong to Armenia. Then we attacked the Roman Empire and annihilated at Barbalissos a Roman force of 60,000', fa: 'و قیصر باز دروغ گفت و به ارمنستان بد کرد. پس ما به امپراتوری روم تاختیم و در بربالیسوس سپاهی ۶۰٬۰۰۰ نفری از روم را نابود کردیم.', ref: 'ŠKZ §4, tr. Frye', source: 'skz' },
          { text: 'a total of 37 towns with surroundings.', fa: 'روی هم ۳۷ شهر با پیرامونشان.', ref: 'ŠKZ §9, tr. Frye', source: 'skz' },
        ],
      }),
    sec('edessa', 'ادسا، ۲۶۰ م.: اسارت والرین', 'Edessa, 260 CE: the capture of Valerian',
      [['شاپور در لشکرکشی سوم حران و ادسا را محاصره کرد. والرین با سپاهی ۷۰٬۰۰۰ نفری آمد. «آن سوی حران و ادسا» نبردی بزرگ روی داد و شاپور والرین، فرمانده پاسداران و سناتورها را اسیر کرد و به پارس برد. سپس سوریه، کیلیکیه و کاپادوکیه را غارت کرد و ۳۶ شهر دیگر را نام می‌برد. ادسا در این فهرست نیست؛ ایرانیکا (لیو) می‌گوید شاپور در بازگشت برای گذشتن از پادگان ادسا رشوه داد، پس شهر یا ایستادگی کرد یا تنها زمانی کوتاه در دست او بود.'],
        ['In his third campaign Shapur besieged Carrhae and Edessa. Valerian came with a force of 70,000. “Beyond Carrhae and Edessa” a great battle took place, and Shapur took Valerian, the praetorian prefect and senators prisoner and carried them to Persis. He then plundered Syria, Cilicia and Cappadocia and names 36 more towns. Edessa is not on the list; Iranica (Lieu) says Shapur had to bribe his way past the garrison of Edessa on his way back, so the city either held out or was in his hands only briefly.']],
      [['این بزرگ‌ترین خواری روم در جنگ با ایران بود: نخستین بار یک امپراتور روم زنده به دست دشمن افتاد. نویسندگان رومی شکست را به بیماری و خیانت هم‌پیمانان نسبت دادند و گفتند والرین در گفت‌وگوی آتش‌بس فریب خورد. ایرانیکا (شهبازی) این را تلاشی برای کاستن از خواری می‌داند. نقش‌ها والرین را بی‌بند و با جامهٔ شاهی نشان می‌دهند؛ این با داستان‌های رومی دربارهٔ خوار کردن او جور درنمی‌آید.'],
        ['This was Rome’s greatest humiliation in its wars with Iran: for the first time a Roman emperor fell alive into enemy hands. Roman writers blamed disease and the treachery of allies and said Valerian was tricked during truce talks. Iranica (Shahbazi) sees this as an effort to soften the humiliation. The reliefs show Valerian unfettered and in his regalia, which does not fit the Roman stories of his degradation.']],
      [['امپراتوری که با ۷۰٬۰۰۰ سرباز از سراسر جهان روم آمده بود، خود اسیر شد. قدرتی که بر زور بنا شده، می‌تواند در یک روز با زوری بزرگ‌تر فرو بریزد.'],
        ['An emperor who had come with 70,000 soldiers from across the Roman world became a captive himself. Power built on force can fall in a single day to greater force.']],
      ['skz', 'ir-shapur1', 'ir-edessa'], {
        quotes: [
          { text: 'In the third campaign, when we attacked Carrhae and Urhai [Edessa] and were besieging Carrhae and Edessa Valerian Caesar marched against us. He had with him a force of 70,000', fa: 'در لشکرکشی سوم، هنگامی که به حران و اورهای [ادسا] تاختیم و حران و ادسا را محاصره کرده بودیم، والرین قیصر به سوی ما آمد. با او سپاهی ۷۰٬۰۰۰ نفری بود.', ref: 'ŠKZ §9, tr. Frye', source: 'skz' },
          { text: 'And beyond Carrhae and Edessa we had a great battle with Valerian Caesar. We made prisoner ourselves with our own hands Valerian Caesar and the others, chiefs of that army, the praetorian prefect, senators; we made all prisoners and deported them to Persis.', fa: 'و آن سوی حران و ادسا نبردی بزرگ با والرین قیصر داشتیم. والرین قیصر و دیگران، سران آن سپاه، فرمانده پاسداران و سناتورها را با دست خود اسیر کردیم؛ همه را اسیر کردیم و به پارس کوچاندیم.', ref: 'ŠKZ §11, tr. Frye', source: 'skz' },
        ],
        clip: { media: battleClipFor('shapur-i', 'edessa', 992, 462), caption: B('نبرد ادسا، گام‌به‌گام (طرح‌وار؛ هیچ گزارش تاکتیکی نمانده و جای‌ها ویرایشی‌اند).', 'The battle of Edessa, step by step (schematic; no tactical account survives and positions are editorial).') },
      }),
    sec('deportees', 'اسیران و شهرهای تازه', 'Captives and new cities',
      [['شاپور می‌گوید مردان امپراتوری روم را کوچاند و در پارس، پارت، خوزستان و آسورستان، در زمین‌های پدر و نیاکانش، نشاند. ایرانیکا: گندی‌شاپور بر جای شهر کهن بیت لاپط، نزدیک دزفول، برای اسیران انطاکیه ساخته شد؛ مسیخه پیروز شاپور شد؛ ابرشهر نیوشاپور (نیشابور) نام گرفت؛ و شاپور شهر بیشاپور را در پارس ساخت.'],
        ['Shapur says he deported men of the Roman Empire and settled them in Persis, Parthia, Khuzestan and Asuristan, on the domains of his father and ancestors. Iranica: Gundeshapur was built on the site of the old town of Bēṯ Lapaṭ, near Dezful, for the Antiochene captives; Misiche became Peroz-Shapur; Abarshahr was renamed Nēv-Shapur (Nishapur); and Shapur built the city of Bishapur in Persis.']],
      [['ایرانیکا (شهبازی): اسیران رومی بیشتر صنعتگر و کارگر ماهر بودند و به شهرها، صنعت و کشاورزی ایران جان تازه دادند. بسیاری مسیحی بودند؛ آزار نمی‌دیدند، در خوزستان، پارس و شرق ایران افزون شدند و کلیسا و صومعه ساختند. به همین سبب شاپور لقب تازهٔ «شاهنشاه ایران و انیران» را به کار برد. این بخش از روایت بیشتر بر منابع سده‌های بعد، مانند تاریخ سعرت، تکیه دارد.'],
        ['Iranica (Shahbazi): the Roman deportees were mainly artisans and skilled workers and helped to revive Iran’s towns, industries and farming. Many were Christians; no longer persecuted, they multiplied in Khuzestan, Persis and eastern Iran and built churches and monasteries. This is also why Shapur used the new title “king of kings of Ērān and Anērān”. This part of the story rests mostly on later sources, such as the Chronicle of Seert.']],
      [['کتیبه مردم را مانند غنیمت می‌شمارد: آنان را «کوچاندیم» و «نشاندیم»، در زمین‌های شاه. آنان دارای خود نبودند؛ خود دارایی شاه بودند. شکوفایی شهرهای تازه بر کار کسانی بنا شد که حق انتخاب نداشتند.'],
        ['The inscription counts people as booty: they were “deported” and “settled”, on the king’s land. They did not own themselves; they were the king’s property. The prosperity of the new cities rested on the labour of people who had no choice.']],
      ['skz', 'ir-shapur1', 'ir-bishapur'], {
        quotes: [
          { text: 'And men of the Roman Empire, of non-Iranians, we deported. We settled them in the Empire of Iran in Persis, Parthia, Khuzistan, in Babylonia and in other lands where there were domains of our father, grandfathers and of our ancestors.', fa: 'و مردانی از امپراتوری روم، از انیرانیان، را کوچاندیم. آنان را در شاهنشاهی ایران، در پارس، پارت، خوزستان، بابل و سرزمین‌های دیگری که املاک پدر، نیاکان و پیشینیان ما بود، نشاندیم.', ref: 'ŠKZ §15–16, tr. Frye (line number left out)', source: 'skz' },
        ],
      }),
    sec('reliefs', 'نقش رستم و بیشاپور: پیروزی در سنگ', 'Naqsh-e Rostam and Bishapur: triumph in stone',
      [['شاپور پیروزی‌هایش را در چند نقش برجسته کند. در نقش رستم، شاه سوار است، فیلیپ در برابرش زانو زده و والرین ایستاده است. در بیشاپور ۲، گوردیانوس زیر اسب افتاده، فیلیپ زانو زده و شاه مچ والرین را گرفته است. بزرگ‌ترین نقش، بیشاپور ۳، شاه و سه امپراتور را در میان، چهار ردیف بزرگان سوار پشت شاه و چهار ردیف باج‌آوران در برابر او نشان می‌دهد.'],
        ['Shapur carved his victories in several reliefs. At Naqsh-e Rostam the king is mounted, Philip kneels before him and Valerian stands. At Bishapur II Gordian lies under the horse, Philip kneels and the king holds Valerian by the wrist. The largest, Bishapur III, shows the king and the three emperors in the centre, four rows of mounted nobles behind the king and four rows of tribute-bearers before him.']],
      [['این نقش‌ها نمایش پیروزی‌اند، نه گزارش دقیق: هر سه امپراتور در یک صحنه کنار هم آمده‌اند، در حالی که رویدادها شانزده سال از هم فاصله داشتند. ایرانیکا یادآوری می‌کند که والرین همیشه بی‌بند و با جامهٔ شاهی نشان داده شده است.'],
        ['These reliefs are displays of triumph, not exact reports: all three emperors appear together in one scene, though the events were sixteen years apart. Iranica notes that Valerian is always shown unfettered and in regalia.']],
      [['نقش رستم کنار گور داریوش و دیگر شاهان هخامنشی است. شاپور پیروزی خود را کنار نیاکانی گذاشت که می‌خواست وارثشان دیده شود؛ تاریخ در دست قدرت، ابزار مشروعیت می‌شود.'],
        ['Naqsh-e Rostam lies beside the tombs of Darius and the other Achaemenid kings. Shapur set his triumph next to the ancestors whose heir he wanted to be seen as; in the hands of power, history becomes a tool of legitimacy.']],
      ['ir-shapur1', 'ir-bishapur'], { photos: ['nr-shapur', 'bishapur3'] }),
    sec('mani', 'مانی و مدارای دینی شاپور', 'Mani and Shapur’s religious tolerance',
      [['مانی، بنیادگذار دین مانوی، در ۲۱۶ م. زاده شد و از ۲۴۰ م. دین خود را آشکارا تبلیغ کرد. او کتابی به پارسی میانه به نام شاپور نوشت (شاپورگان) و زیر پشتیبانی شاه، مبلغانش در شاهنشاهی و فراتر از آن پراکنده شدند. ایرانیکا (شهبازی): مدارای دینی شاپور به سود همهٔ رعایا بود: مسیحیان، یهودیان و مانویان. کرتیر می‌گوید شاپور به زرتشتیان لطف داشت و موبدان با سپاه او به روم رفتند.'],
        ['Mani, founder of Manichaeism, was born in 216 and preached his religion openly from 240. He wrote a book in Middle Persian in Shapur’s name (the Šābuhragān), and under the king’s protection his missionaries spread through the empire and beyond. Iranica (Shahbazi): Shapur’s religious tolerance benefited all his subjects: Christians, Jews and Manichaeans. Kartir says Shapur favoured the Zoroastrians and that priests went with his army to Rome.']],
      [['ایرانیکا می‌گوید مانی نتوانست شاپور را به دین خود درآورد؛ دیدگاه آنان با هم نمی‌ساخت و شاپور خود را ابزار خدا می‌دانست. منابع مانوی اما از گرویدن شاه سخن می‌گویند. هرچه بود، تا شاپور زنده بود مانی آزاد ماند؛ پس از او، با بالا رفتن کرتیر، کار دگرگون شد.'],
        ['Iranica says Mani failed to convert Shapur; their views were irreconcilable and Shapur saw himself as God’s instrument. Manichaean sources, however, speak of the king’s conversion. Either way, Mani stayed free while Shapur lived; after him, as Kartir rose, things changed.']],
      [['مدارای شاپور از قانون نمی‌آمد، از خواست شاه می‌آمد. آزادی دینی که به یک تن بسته باشد، با مرگ همان تن از میان می‌رود، و این در پادشاهی بهرام یکم روی داد.'],
        ['Shapur’s tolerance came not from law but from the king’s will. A religious freedom that depends on one man ends with that man’s death, and that is what happened under Bahram I.']],
      ['ir-mani', 'ir-shapur1'], { photos: ['mani-scroll'], link: { href: B('/king/bahram-i', '/en/king/bahram-i'), label: B('بهرام یکم و مرگ مانی', 'Bahram I and the death of Mani') } }),
  ],
  synthesis: {
    title: B('جمع‌بندی', 'Synthesis'),
    paras: {
      fa: ['شاپور یکم کاری کرد که هیچ شاه اشکانی نکرده بود: یک امپراتور روم را کشت (به گفتهٔ خودش)، از دیگری باج گرفت و سومی را اسیر کرد. او این را در سنگ و به سه زبان نوشت تا آیندگان بدانند. اما همان کتیبه از شهرهای سوخته و مردمی کوچانده‌شده سخن می‌گوید که دارایی شاه به شمار آمدند. مدارای دینی او واقعی بود، اما چون بر قانون استوار نبود، با مرگ او پایان یافت.'],
      en: ['Shapur I did what no Parthian king had done: he killed one Roman emperor (by his own account), took tribute from another and captured a third. He wrote it in stone in three languages so that later generations would know. But the same inscription speaks of burned towns and deported people who were counted as the king’s property. His religious tolerance was real, but because it did not rest on law it ended with his death.'],
    },
    sources: ['skz', 'ir-shapur1', 'ir-mani'],
  },
  sources: pick('skz', 'ir-shapur1', 'ir-edessa', 'ir-bishapur', 'ir-mani', 'cmc'),
  photos: photos('coin-shapur1', 'nr-shapur', 'bishapur3', 'mani-scroll'),
  related: related(['ardashir-i', 'اردشیر یکم، پدرش', 'Ardashir I, his father'], ['hormizd-i', 'هرمز یکم، پسرش', 'Hormizd I, his son'], ['bahram-i', 'بهرام یکم، پسرش', 'Bahram I, his son'], ['narseh', 'نرسی، پسرش', 'Narseh, his son']),
  wikipedia: 'https://en.wikipedia.org/wiki/Shapur_I',
}
