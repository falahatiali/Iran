/**
 * Ardashir I (224–242 CE, traditional dates), founder of the Sasanian empire.
 * Verbatim: ANRm (tr. Daryaee), Herodian 6.2.2 (tr. Echols), Letter of Tansar (tr. Boyce).
 * Paraphrased: Iranica (Wiesehöfer “Ardašīr I”, Huff “Fīrūzābād”, Cereti “Kār-nāmag”, Shahbazi “Šāpur I” for the co-regency).
 */
import type { Bi, Coord, FeaturedKing } from '../featured/types'
import { ARTAXATA, CARRHAE, CTESIPHON, DARABGERD, DURA, ELYMAIS, FIRUZABAD, HATRA, HORMOZGAN, ISTAKHR, KERMAN, NISIBIS, SAS, clipFor, ev, note, photos, pick, related, sec } from './common'

const B = (fa: string, en: string): Bi => ({ fa, en })
/** Upper Mesopotamia, for Severus Alexander's counter-attack (no single site). */
const MESOPOTAMIA: Coord = [41.5, 35.6]

const papak = ev('papak', 205, B('حدود ۲۰۵–۲۰۶ م.', 'c. 205–206 CE'), 'admin', ISTAKHR, B('پاپک گوچهر را برمی‌اندازد', 'Pāpak overthrows Gōzihr'),
  B('طبری (به نقل ایرانیکا): پاپک، فرمانروای محلی، گوچهر شاه استخر را برانداخت و چون شاه اشکانی نپذیرفت که پسرش شاپور شاه استخر شود، آشکارا شورید. سال ۲۰۵–۲۰۶ م. از یک کتیبهٔ بیشاپور برداشت می‌شود.', 'Tabari (via Iranica): Pāpak, a local ruler, overthrew Gōzihr, king of Istakhr, and when the Parthian king refused to make his son Shapur king of Istakhr, he rose in open revolt. The year 205–206 is inferred from an inscription at Bishapur.'),
  'disputed', ['ir-ardashir'], note('سال ۲۰۵–۲۰۶ م. آغاز یک گاه‌شماری در کتیبهٔ بیشاپور است. ایرانیکا آن را «محتمل‌تر» آغاز شورش پاپک می‌داند، اما معنای این تاریخ همچنان محل بحث است.', 'The year 205–206 is the start of an era in the Bishapur inscription. Iranica thinks it “all the more probable” that it marks Pāpak’s revolt, but its meaning is still debated.'))
const rise = ev('rise', 220, B('پیش از ۲۲۴ م.', 'before 224 CE'), 'campaign', DARABGERD, B('اردشیر از دارابگرد برمی‌خیزد', 'Ardashir rises from Darabgerd'),
  B('به روایت طبری، اردشیر فرماندهٔ دژ دارابگرد شد و چند شاه محلی را کشت. پس از مرگ پاپک و شاپور، برادر بزرگ‌تر، اردشیر رهبری را گرفت. تا ۲۲۴ م. پارس، الیمائیس (خوزستان) و کرمان در دست او بود.', 'According to Tabari, Ardashir became commandant of the fortress of Darabgerd and killed several local kings. After the deaths of Pāpak and of Shapur, the elder brother, Ardashir took the lead. By 224 he held Persis, Elymais (Khuzestan) and Kerman.'),
  'disputed', ['ir-ardashir'], { ...note('ترتیب و سال این رویدادها روشن نیست. سال روی نقشه تنها برای جای دادن است. ایرانیکا می‌گوید نقش اصلی اردشیر در شورش ممکن است تفسیر بعدی باشد.', 'The order and years of these events are unknown; the year on the map only places the step. Iranica says Ardashir’s leading role in the revolt may be a later interpretation.'), route: [DARABGERD, ISTAKHR, KERMAN, ISTAKHR, ELYMAIS] })
const hormozgan = ev('hormozgan', 224, B('۲۸ آوریل ۲۲۴ م.', '28 April 224 CE'), 'battle', HORMOZGAN, B('نبرد هرمزدگان', 'The battle of Hormozgan'),
  B('در دشت هرمزدگان در ماد، اردشیر اردوان چهارم، آخرین شاه بزرگ اشکانی، را شکست داد. او هنوز در میدان نبرد خود را «شاهنشاه» خواند. نقش برجستهٔ سوارکاری فیروزآباد این نبرد را نشان می‌دهد.', 'On the plain of Hormozgan in Media, Ardashir defeated Artabanus IV, the last Parthian Great King. While still on the battlefield he took the title “king of kings”. The jousting relief at Firuzabad shows this battle.'),
  'probable', ['ir-ardashir'], { ...note('تاریخ روز از نولدکه است و سال را کتیبهٔ بیشاپور تأیید می‌کند. جای دقیق دشت هرمزدگان معلوم نیست.', 'The day is Nöldeke’s and the year is confirmed by the Bishapur inscription. The exact site of the plain of Hormozgan is unknown.'), route: [ELYMAIS, HORMOZGAN] })
const crown = ev('ctesiphon', 226, B('۲۲۶ م.', '226 CE'), 'admin', CTESIPHON, B('تاج‌گذاری در تیسفون', 'Coronation at Ctesiphon'),
  B('برخی منابع از تاج‌گذاری رسمی اردشیر در تیسفون در ۲۲۶ م. یاد می‌کنند، در لشکرکشی برای گرفتن سرزمین‌های اشکانی در شمال‌غرب.', 'Some sources mention an official coronation of Ardashir at Ctesiphon in 226, during a campaign to take the former Parthian lands in the north-west.'),
  'probable', ['ir-ardashir'], { route: [HORMOZGAN, CTESIPHON] })
const hatra1 = ev('hatra-fail', 227, B('حدود ۲۲۶–۲۲۷ م.', 'c. 226–227 CE'), 'battle', HATRA, B('شکست در هترا', 'Failure at Hatra'),
  B('دیو کاسیوس (به نقل ایرانیکا): اردشیر نتوانست هترا را بگیرد، همان‌گونه که ترایانوس و سپتیموس سوروس پیش از او نتوانسته بودند.', 'Dio Cassius (via Iranica): Ardashir failed to take Hatra, just as Trajan and Septimius Severus had failed before him.'),
  'probable', ['ir-ardashir'], { route: [CTESIPHON, HATRA] })
const armenia = ev('armenia', 228, B('۲۲۷–۲۲۸ م.؟', '227–228 CE?'), 'battle', ARTAXATA, B('ارمنستان او را بازمی‌گرداند', 'Armenia repulses him'),
  B('اشکانیان شاخهٔ ارمنستان اردشیر را پس زدند. این خاندان سال‌ها برای ساسانیان دردسر ماند.', 'The Arsacids of the Armenian branch drove Ardashir back. This family remained a problem for the Sasanians for a long time.'),
  'disputed', ['ir-ardashir'], { ...note('ایرانیکا خود سال را با علامت پرسش می‌آورد.', 'Iranica itself gives the year with a question mark.'), route: [HATRA, ARTAXATA] })
const nisibis = ev('nisibis', 230, B('۲۳۰ م.', '230 CE'), 'campaign', NISIBIS, B('محاصرهٔ نصیبین و خواستهٔ «مرزهای کهن»', 'The siege of Nisibis and the claim to the “old frontiers”'),
  B('اردشیر به میان‌رودان روم تاخت و نصیبین را محاصره کرد. هرودیان می‌گوید او همهٔ سرزمین‌هایی را می‌خواست که روزگاری از آنِ پارسیان بود.', 'Ardashir invaded Roman Mesopotamia and besieged Nisibis. Herodian says he claimed all the lands that had once belonged to the Persians.'),
  'probable', ['ir-ardashir', 'herodian'])
const severus = ev('severus', 232, B('۲۳۱–۲۳۳ م.', '231–233 CE'), 'campaign', MESOPOTAMIA, B('پاسخ سوروس الکساندر', 'Severus Alexander strikes back'),
  B('امپراتور سوروس الکساندر به شرق آمد. نتیجهٔ جنگ روشن نیست؛ او در رم جشن پیروزی گرفت، اما پیمان صلحی بسته نشد. پس از آن چند سال مرز آرام ماند و هترا به روم پیوست.', 'The emperor Severus Alexander came east. The outcome of the war is unclear; he held a triumph in Rome, but no peace treaty was signed. The frontier stayed quiet for some years, and Hatra went over to Rome.'),
  'disputed', ['ir-ardashir', 'herodian'], note('منابع رومی دربارهٔ نتیجه یکسان نیستند؛ هرودیان از شکست سخت یکی از سپاهیان روم می‌گوید و تاریخ آوگوستی از پیروزی بزرگ.', 'The Roman sources disagree on the outcome; Herodian tells of the heavy defeat of one Roman army, the Historia Augusta of a great victory.'))
const carrhae = ev('carrhae', 237, B('حدود ۲۳۷–۲۳۸ م.', 'c. 237–238 CE'), 'campaign', CARRHAE, B('گرفتن حران و نصیبین', 'Carrhae and Nisibis taken'),
  B('ایرانیکا: در پایان پادشاهی، اردشیر حران و نصیبین را گرفت.', 'Iranica: late in his reign Ardashir took Carrhae and Nisibis.'),
  'probable', ['ir-ardashir'], { route: [CTESIPHON, NISIBIS, CARRHAE] })
const dura = ev('dura', 239, B('آوریل ۲۳۹ م.', 'April 239 CE'), 'battle', DURA, B('یورش به دورا', 'A raid on Dura'),
  B('ایرانیکا: در آوریل ۲۳۹ م. سپاه ساسانی به دورا اروپوس بر فرات یورش برد.', 'Iranica: in April 239 a Sasanian force raided Dura-Europos on the Euphrates.'), 'probable', ['ir-ardashir'])
const hatra2 = ev('hatra-fall', 240, B('۲۴۰ م.', '240 CE'), 'battle', HATRA, B('هترا می‌افتد', 'Hatra falls'),
  B('کدکس مانی کلن (به نقل ایرانیکا): در بیست و چهارمین سال زندگی مانی (۲۴۰ م.) اردشیر شهر هترا را گشود.', 'The Cologne Mani Codex (via Iranica): in Mani’s twenty-fourth year (240) Ardashir conquered the city of Hatra.'),
  'probable', ['ir-ardashir', 'cmc', 'ir-shapur1'])
const corule = ev('co-regency', 240, B('۱۲ آوریل ۲۴۰ م.', '12 April 240 CE'), 'admin', ISTAKHR, B('شاپور هم‌پادشاه می‌شود', 'Shapur becomes co-king'),
  B('همان منبع می‌گوید شاپور «دیهیم بزرگ شاهی» را بر سر گذاشت. ایرانیکا، به پیروی از هنینگ، روز تاج‌گذاری را یکشنبه ۱۲ آوریل ۲۴۰ م. می‌داند. سکه‌های پایانی اردشیر او را رو‌به‌روی شاهزاده‌ای جوان نشان می‌دهد.', 'The same source says Shapur put the “great diadem” on his head. Iranica, following Henning, dates the coronation to Sunday 12 April 240. Ardashir’s last coins show him facing a young prince.'),
  'probable', ['cmc', 'ir-shapur1'])
const death = ev('death', 242, B('۲۴۰–۲۴۲ م.؟', '240–242 CE?'), 'admin', ISTAKHR, B('مرگ اردشیر', 'The death of Ardashir'),
  B('سال مرگ اردشیر روشن نیست. مسعودی می‌گوید او پس از تاج‌گذاری شاپور کناره گرفت و یک سال یا بیشتر زیست. نامهٔ گوردیانوس سوم در ۲۴۲ م. از «شاهان پارس» (به جمع) سخن می‌گوید.', 'The year of Ardashir’s death is unclear. Masʿudi says he retired after Shapur’s coronation and lived a year or more. A letter of Gordian III in 242 speaks of “Persian kings” in the plural.'),
  'disputed', ['ir-ardashir', 'ir-shapur1'], note('ایرانیکا: تاریخ مرگ اردشیر «محل بحث» است.', 'Iranica: the date of Ardashir’s death is “controversial”.'))

export const ardashirI: FeaturedKing = {
  slug: 'ardashir-i', name: B('اردشیر یکم (بابکان)', 'Ardashir I'), dynastyName: SAS,
  reign: B('۲۲۴–۲۴۰/۲۴۲ م.', '224–240/242 CE'),
  title: B('اردشیر بابکان؛ از استخر تا شاهنشاهی', 'Ardashir son of Pāpak: from Istakhr to an empire'),
  lede: B(
    'اردشیر، پسر پاپک، از خاندانی محلی در پارس برخاست. در ۲۸ آوریل ۲۲۴ م. در دشت هرمزدگان اردوان چهارم را شکست داد و شاهنشاهی ساسانی را بنیاد نهاد که چهار سده پایید. او شهر گرد اردشیرخوره (فیروزآباد) را ساخت، شاهی خود را در سنگ نقش رستم هدیهٔ اورمزد نشان داد و با روم بر سر «سرزمین‌های نیاکان» جنگید. داستان کودکی و گریزش در کارنامهٔ اردشیر بابکان افسانه است، و تاریخ نامهٔ تنسر، که به او نسبت داده می‌شود، محل بحث است.',
    'Ardashir, son of Pāpak, rose from a local family in Persis. On 28 April 224 CE he defeated Artabanus IV on the plain of Hormozgan and founded the Sasanian empire, which lasted four centuries. He built the round city of Ardashir-Khwarrah (Firuzabad), showed his kingship carved in the rock at Naqsh-e Rostam as a gift from Ohrmazd, and fought Rome over the “lands of the ancestors”. The tale of his youth and flight in the Kār-nāmag is legend, and the date of the Letter of Tansar, which is linked to him, is disputed.'),
  stats: [{ n: B('۲۸ آوریل ۲۲۴', '28 Apr 224'), l: B('نبرد هرمزدگان', 'battle of Hormozgan') }, { n: B('۸', '8'), l: B('شهر به نام او (فهرست طبری)', 'cities in his name (Tabari’s list)') }, { n: B('۳', '3'), l: B('نقش دیهیم‌ستانی', 'investiture reliefs') }, { n: B('۴۰۰+', '400+'), l: B('سال عمر دودمانش', 'years of his dynasty') }],
  mapTitle: B('نقشهٔ متحرک: از پارس تا مرز روم', 'Animated map: from Persis to the Roman frontier'),
  events: [papak, rise, hormozgan, crown, hatra1, armenia, nisibis, severus, carrhae, dura, hatra2, corule, death], span: [205, 242],
  campaign: {
    id: 'reign',
    title: B('از استخر تا هترا، گام‌به‌گام (۲۰۵–۲۴۲ م.)', 'From Istakhr to Hatra, step by step (205–242 CE)'),
    intro: {
      fa: ['شورش پاپک، برخاستن اردشیر در پارس، پیروزی هرمزدگان و جنگ‌های او با روم و هترا. هر گام می‌گوید قطعی، محتمل یا محل بحث است. بیشتر داستان آغاز کار را طبری و دیگران سده‌ها بعد نوشته‌اند؛ مسیرها طرح‌واره‌اند.'],
      en: ['Pāpak’s revolt, Ardashir’s rise in Persis, the victory at Hormozgan and his wars with Rome and Hatra. Each step says whether it is secure, probable or disputed. Most of the story of the early years was written down centuries later, by Tabari and others; the routes are sketches.'],
    },
    events: [papak, rise, hormozgan, crown, hatra1, armenia, nisibis, severus, carrhae, dura, hatra2, corule, death], span: [205, 242], view: [37.5, 26.5, 58.5, 41],
    places: [
      { name: B('استخر', 'Istakhr'), c: ISTAKHR }, { name: B('اردشیرخوره (فیروزآباد)', 'Ardashir-Khwarrah (Firuzabad)'), c: FIRUZABAD, left: true },
      { name: B('کرمان', 'Kerman'), c: KERMAN }, { name: B('هرمزدگان؟', 'Hormozgan?'), c: HORMOZGAN }, { name: B('تیسفون', 'Ctesiphon'), c: CTESIPHON, left: true },
      { name: B('هترا', 'Hatra'), c: HATRA, left: true }, { name: B('نصیبین', 'Nisibis'), c: NISIBIS }, { name: B('حران', 'Carrhae'), c: CARRHAE, left: true }, { name: B('دورا', 'Dura'), c: DURA, left: true }, { name: B('ارمنستان', 'Armenia'), c: ARTAXATA },
    ],
    clip: clipFor('ardashir-i'),
  },
  shareImage: '/media/ardashir-i/reign-en.png',
  dossier: [
    sec('rise', 'برخاستن از پارس: پاپک و ساسان', 'Rising from Persis: Pāpak and Sāsān',
      [['دربارهٔ نیاکان اردشیر سه روایت هست. طبری پاپک را پسر ساسان می‌داند. کتیبهٔ شاپور در کعبهٔ زرتشت ساسان را «خداوندگار» می‌نامد، اما پدر پاپک نمی‌خواند. کارنامهٔ اردشیر می‌گوید ساسان از نسل دارا (داریوش سوم) بود، پاپک دخترش را به او داد و اردشیر فرزند آنان بود. پاپک از سکه‌های اردشیر شناخته است. شاپور، پسر بزرگ‌تر، هم شاه شد، اما پس از مرگ پدر و برادر، اردشیر رهبری را گرفت و تا ۲۲۴ م. پارس، خوزستان و کرمان را زیر فرمان آورد.'],
        ['There are three accounts of Ardashir’s ancestry. Tabari makes Pāpak a son of Sāsān. Shapur’s inscription on the Kaʿba-ye Zardošt calls Sāsān a “lord” but does not call him Pāpak’s father. The Kār-nāmag says Sāsān descended from Dārā (Darius III), that Pāpak gave him his daughter, and that Ardashir was their child. Pāpak is known from Ardashir’s coins. Shapur, the elder son, also became king, but after the deaths of father and brother Ardashir took the lead and by 224 ruled Persis, Khuzestan and Kerman.']],
      [['ایرانیکا می‌گوید برخی روایت طبری را می‌پذیرند و برخی گمان می‌برند اردشیر فرزندخواندهٔ پاپک بود، یا ساسان، مانند هخامنش، تنها نیای نام‌آور خاندان بود. نسب بردن به دارا بیشتر ادعای مشروعیت است تا خبر. ایرانیکا همچنین می‌گوید شورش کامیاب نمی‌شد اگر بسیاری از مردم از فرمانروایی اشکانی ناخرسند نبودند.'],
        ['Iranica says some accept Tabari’s version, while others suppose that Ardashir was adopted by Pāpak, or that Sāsān, like Achaemenes, was only the famous ancestor of the house. Descent from Dārā is more a claim to legitimacy than a piece of news. Iranica adds that the revolt could not have succeeded without widespread discontent with Parthian rule.']],
      [['قدرت ساسانیان از یک دژ و یک شهر محلی آغاز شد، نه از یک حق کهن. دودمانی که بعدها خود را برگزیدهٔ ایزدان خواند، خود با شورش بر فرمانروای قانونی‌اش به تخت رسید.'],
        ['Sasanian power began with one fortress and one local town, not with an ancient right. A dynasty that later called itself chosen by the gods came to the throne by revolting against its own lawful overlord.']],
      ['ir-ardashir', 'skz'], { photos: ['coin-ardashir-papak', 'coin-ardashir1'] }),
    sec('hormozgan', 'هرمزدگان، ۲۲۴ م.', 'Hormozgan, 224 CE',
      [['نبرد تعیین‌کننده میان اشکانیان و ساسانیان در دشت هرمزدگان در ماد، در ۲۸ آوریل ۲۲۴ م. روی داد. اردوان چهارم کشته شد. اردشیر هنوز در میدان نبرد خود را شاهنشاه خواند و این آغاز پادشاهی او شد؛ او گاه‌شماری تازه‌ای هم از همین سال آغاز کرد. اردشیر این نبرد را در نقش برجستهٔ بزرگ سوارکاری فیروزآباد نشان داد.'],
        ['The decisive battle between the Parthians and the Sasanians was fought on the plain of Hormozgan in Media on 28 April 224. Artabanus IV was killed. While still on the battlefield Ardashir took the title king of kings, which marked his accession; he also began a new era from this year. Ardashir showed the battle in the great jousting relief at Firuzabad.']],
      [['ایرانیکا گمان می‌برد گزارشی رسمی از این نبرد برای تاریخ‌نامهٔ ساسانی نوشته شد و طبری سرانجام از آن گرفت. پس روایت ما روایت پیروز است. نامه‌نگاری میان اردشیر و اردوان، که طبری می‌آورد، به گفتهٔ ایرانیکا بیشتر نمایشی ادبی است.'],
        ['Iranica suspects that an official account of the battle was written for the Sasanian royal history and that Tabari drew on it in the end. So our story is the victor’s story. The exchange of letters between Ardashir and Artabanus that Tabari reports is, Iranica says, more a literary dramatization.']],
      [['یک نبرد در یک روز، فرمانروایی بر ایران را از خاندانی به خاندانی دیگر داد. برای کشاورز و بازرگان، پرسش اصلی این بود که فرمانروای تازه چه اندازه از دسترنج او خواهد گرفت.'],
        ['One battle on one day passed the rule of Iran from one house to another. For the farmer and the merchant, the real question was how much of their labour the new ruler would take.']],
      ['ir-ardashir'], { link: { href: B('/king/artabanus-iv', '/en/king/artabanus-iv'), label: B('اردوان چهارم و نبرد هرمزدگان', 'Artabanus IV and the battle of Hormozgan') } }),
    sec('city', 'اردشیرخوره: شهر گرد', 'Ardashir-Khwarrah: the round city',
      [['کمابیش همهٔ منابع، از کارنامه تا طبری و جغرافی‌دانان مسلمان، بنیاد شهر گور را به اردشیر نسبت می‌دهند. نام آن اردشیرخوره («فرّ اردشیر») بود و در سدهٔ دهم م. عضدالدوله آن را فیروزآباد نامید. شهر نقشه‌ای دقیق داشت: دایره‌ای با بیست خیابان شعاعی و چند خیابان دایره‌ای، دیواری از گل کوبیده، خندقی ۳۵ متری و دیوار بیرونی. در مرکز، دایره‌ای درونی برای ساختمان‌های رسمی بود. اردشیرخوره یکی از پنج «کوره» (بخش اداری) پارس شد. طبری هشت شهر را از بنیادهای اردشیر می‌شمارد که نخستین آن اردشیرخوره است.'],
        ['Nearly all sources, from the Kār-nāmag to Tabari and the Muslim geographers, credit Ardashir with founding the city of Gur. Its name was Ardashir-Khwarrah (“the glory of Ardashir”), and in the 10th century ʿAżod-al-Dawla renamed it Firuzabad. The city had an exact plan: a circle with twenty radial and several ring streets, a wall of stamped clay, a ditch 35 m wide and an outer wall. In the centre an inner circle held the official buildings. Ardashir-Khwarrah became one of the five kūras (districts) of Fars. Tabari lists eight cities founded by Ardashir, the first being Ardashir-Khwarrah.']],
      [['ایرانیکا یادآوری می‌کند که شاهان ایران تنها بر زمین‌های شاهی (دستکرت) می‌توانستند شهر بسازند یا نام شهری را تغییر دهند. پس شهرسازی با مالکیت شاه بر زمین پیوند داشت. ایرانیکا همچنین هشدار می‌دهد که نسبت دادن همهٔ آن هشت شهر به خود اردشیر باید سنجیده شود.'],
        ['Iranica notes that Iranian kings could found or rename towns only on royal land (dastkart). So city building was tied to the king’s ownership of the land. Iranica also warns that crediting all eight cities to Ardashir himself needs care.']],
      [['شهری که از روی نقشه و به فرمان یک تن ساخته می‌شود، نشان قدرت است نه بازار. شهرهای آزاد از دادوستد مردم می‌رویند؛ اردشیرخوره از اراده و زمین شاه رویید.'],
        ['A city built from one plan at one man’s command is a sign of power, not of a market. Free cities grow out of people’s trade; Ardashir-Khwarrah grew from the king’s will and the king’s land.']],
      ['ir-firuzabad', 'ir-ardashir'], { photos: ['ardashir-palace', 'firuzabad-relief'] }),
    sec('investiture', 'نقش رستم: شاهی، هدیهٔ اورمزد', 'Naqsh-e Rostam: kingship as Ohrmazd’s gift',
      [['اردشیر سه نقش دیهیم‌ستانی کند: در فیروزآباد، نقش رجب و نقش رستم. در نقش رستم، شاه و اورمزد هر دو سوارند و اورمزد حلقهٔ شاهی را به اردشیر می‌دهد. زیر سم اسب‌ها دو پیکر افتاده است. کتیبه‌ای به پارسی میانه، پارتی و یونانی هر دو را نام می‌برد.'],
        ['Ardashir carved three investiture reliefs: at Firuzabad, Naqsh-e Rajab and Naqsh-e Rostam. At Naqsh-e Rostam the king and Ohrmazd are both mounted, and Ohrmazd hands Ardashir the ring of kingship. Two figures lie fallen under the horses’ hooves. An inscription in Middle Persian, Parthian and Greek names the two riders.']],
      [['پیکر زیر اسب اردشیر را معمولاً اردوان چهارم و پیکر زیر اسب اورمزد را اهریمن می‌دانند. اگر چنین باشد، پیام روشن است: پیروزی شاه بر رقیبش همانند پیروزی خدا بر بدی است. این نقش برجسته در کنار گورهای شاهان هخامنشی کنده شده؛ جای آن نیز ادعایی بر میراث است.'],
        ['The figure under Ardashir’s horse is usually taken to be Artabanus IV, and the one under Ohrmazd’s horse to be Ahriman. If so, the message is clear: the king’s victory over his rival matches the god’s victory over evil. The relief was cut beside the tombs of the Achaemenid kings; its place is itself a claim to their legacy.']],
      [['وقتی قدرت هدیهٔ خدا خوانده شود، پرسیدن از آن دشوار می‌شود. فرمانروایی که خود را برگزیدهٔ آسمان می‌داند، به رضایت مردم نیازی نمی‌بیند.'],
        ['When power is called a gift of god, it becomes hard to question. A ruler who thinks himself chosen by heaven sees no need for the consent of the people.']],
      ['anrm', 'ir-ardashir'], {
        quotes: [
          { text: 'This is the image of the Mazda-worshipping lord, Ardaxšīr, king of kings of the Iranians, whose lineage is from the gods, son of the lord, king Pābag', fa: 'این پیکر خداوندگار مزداپرست، اردشیر، شاهنشاه ایران، که نژاد از ایزدان دارد، پسر خداوندگار، پاپک شاه است.', ref: 'ANRm-a', source: 'anrm' },
          { text: 'This is the image of the Lord, Ohrmazd', fa: 'این پیکر خداوندگار اورمزد است.', ref: 'ANRm-b', source: 'anrm' },
        ],
        photos: ['nr-ardashir'],
      }),
    sec('karnamag', 'کارنامهٔ اردشیر: افسانه، نه تاریخ', 'The Kār-nāmag: legend, not history',
      [['کارنامهٔ اردشیر بابکان نوشته‌ای کوتاه به نثر پارسی میانه است. تنها دست‌نویس مستقل آن در ۱۳۲۲ م. در گجرات نوشته شده است. اگر بازسازی فرانتس گرنه درست باشد، متن کنونی پس از ۷۰۶ م. شکل گرفته، یعنی نزدیک پنج سده پس از اردشیر.'],
        ['The Kār-nāmag ī Ardašīr ī Pābagān is a short prose work in Middle Persian. Its only independent manuscript was copied in 1322 in Gujarat. If Frantz Grenet’s reconstruction is right, the present text took shape after 706, nearly five centuries after Ardashir.']],
      [['ایرانیکا (چرتی) می‌گوید داستان از دانش‌های کهن‌تر ایرانی گرفته است و برخی بخش‌هایش افسانهٔ کوروش بزرگ را به یاد می‌آورد. پس آن را باید داستانی برای ستایش بنیادگذار خواند، نه گزارش رویدادها.'],
        ['Iranica (Cereti) says the story draws on older Iranian lore and that some of its features echo the legend of Cyrus the Great. So it should be read as a tale in praise of the founder, not as a record of events.']],
      [['افسانه‌ها به ما نمی‌گویند چه روی داد، اما می‌گویند فرمانروایان می‌خواستند مردم چه باور کنند: که شاهی بخت و فرّی است از آسمان، نه چیزی که با زور گرفته شود.'],
        ['Legends do not tell us what happened, but they tell us what rulers wanted people to believe: that kingship is a fortune sent from heaven, not something taken by force.']],
      ['ir-karnamag'], {
        folk: {
          title: B('افسانه: قوچ فرّ', 'Legend: the ram of glory'),
          story: {
            fa: ['اردشیر جوان در دربار اردوان است. کنیزکی از اردوان می‌شنود که اخترشناس شاه پیشگویی کرده: بنده‌ای که در سه روز آینده از سرور خود بگریزد و رها شود، شاه خواهد شد. کنیزک چیزهایی از گنجینه برمی‌دارد و با اردشیر بر دو اسب دزدیده به سوی جنوب می‌گریزند. رهگذران به اردوان می‌گویند قوچی بزرگ پشت سر آن دو می‌دوید. دستور شاه می‌گوید آن قوچ فرّ شاهی است. روز دوم قوچ بر پشت اسب اردشیر نشسته است، و دستور می‌گوید دیگر دنبال کردن سودی ندارد.'],
            en: ['Young Ardashir is at the court of Artabanus. A maid hears that the king’s astrologer has foretold that a servant who flees his master within three days and escapes pursuit will become king. She takes things from the treasury, and she and Ardashir flee south on two stolen horses. Passers-by tell Artabanus that a large ram was running after the pair. The king’s counsellor says the ram is the royal glory (xwarrah). On the second day the ram is sitting on the back of Ardashir’s horse, and the counsellor says there is no use chasing him any further.'],
          },
          origin: {
            fa: ['از کارنامهٔ اردشیر بابکان، به گزارش ایرانیکا (چرتی). شاهنامه نیز داستانی همانند دارد. این روایت افسانه است و نباید آن را تاریخ دانست.'],
            en: ['From the Kār-nāmag ī Ardašīr ī Pābagān, as summarized by Iranica (Cereti). The Šāh-nāma has a similar story. This is legend and should not be taken as history.'],
          },
          sources: ['ir-karnamag'],
        },
      }),
    sec('tansar', 'نامهٔ تنسر: سند اردشیر یا ساختهٔ سدهٔ ششم؟', 'The Letter of Tansar: Ardashir’s document or a sixth-century work?',
      [['نامهٔ تنسر پاسخ هیربد بزرگ اردشیر به گشنسپ، شاه طبرستان، است که از رفتار اردشیر گلایه کرده بود. متن اصلی پارسی میانه از میان رفته است. ابن مقفع آن را به عربی برگرداند و ابن اسفندیار در سدهٔ هفتم ه‍. ترجمهٔ عربی را به فارسی آورد. نامه مردم را در چهار گروه جا می‌دهد: دینیاران، جنگیان، دبیران و پیشه‌وران؛ و گروه چهارم را «کشاورزان، چوپانان، بازرگانان و دیگر پیشه‌وران» می‌شمارد. به گفتهٔ نامه، گذر از گروهی به گروه دیگر تنها برای کسی است که توانایی بسیار نشان دهد.'],
        ['The Letter of Tansar is the reply of Ardashir’s chief priest to Gušnasp, king of Tabaristan, who had complained about Ardashir’s conduct. The original Middle Persian text is lost. Ibn al-Muqaffaʿ put it into Arabic, and Ibn Isfandiyar in the 13th century turned the Arabic into Persian. The letter puts people in four estates: priests, warriors, scribes and working people, and counts the fourth as “tillers of land and herders of cattle and merchants”. According to the letter, passing from one estate to another is only for someone of outstanding ability.']],
      [['تاریخ نامه محل بحث است. کریستنسن و مینوی آن را ساختهٔ روزگار خسرو انوشیروان در سدهٔ ششم م. دانستند که به نام اردشیر نوشته شد تا اصلاحات خسرو کهن جلوه کند. دارمستتر و بویس آن را در اصل از روزگار اردشیر می‌دانند، با افزوده‌هایی از سدهٔ ششم. هرتسفلد تنسر را همان کرتیر می‌دانست. ایرانیکا (ویزهوفر) از این نامه برای سیاست دینی اردشیر بهره می‌گیرد، اما می‌گوید دیدگاه بویس دربارهٔ آزار پرستشگاه‌های تندیس‌دار «سخت محل بحث» است.'],
        ['The date of the letter is disputed. Christensen and Minovi held it to be a work of the age of Khosrow I in the 6th century, written in Ardashir’s name to make Khosrow’s reforms look ancient. Darmesteter and Boyce take it to be in the main from Ardashir’s time, with 6th-century additions. Herzfeld identified Tansar with Kartir. Iranica (Wiesehöfer) uses the letter for Ardashir’s religious policy, but says Boyce’s view on the persecution of image shrines is “strongly disputed”.']],
      [['جامعه‌ای که در آن جای هر کس از زادن روشن است، جای آزادی گزینش پیشه را تنگ می‌کند. نامه حتی برپا کردن آتشکده‌های خاندانی به دست «شاهان کشورها» را «بدعتی» بی‌اجازهٔ شاهان کهن می‌خواند: حق دین ورزیدن نیز از آن شاه است.'],
        ['A society in which each person’s place is fixed by birth narrows the freedom to choose one’s work. The letter even calls the family fire temples set up by the “kings of the peoples” an “innovation” made without the authority of the kings of old: the right to practise religion, too, belongs to the king.']],
      ['tansar', 'ir-ardashir'], {
        quotes: [
          { text: 'Assuredly there shall be no passing from one to another unless in the character of one of us outstanding capacity is found.', fa: 'بی‌گمان گذر از یکی به دیگری نخواهد بود، مگر آن‌که در سرشت یکی از ما توانایی برجسته‌ای یافت شود.', ref: 'Letter of Tansar, tr. Boyce, p. 38', source: 'tansar' },
          { text: 'The truth is that after Darius each of the "kings of the peoples" built his own fire-temple. This was pure innovation, introduced by them without the authority of kings of old.', fa: 'راستی این است که پس از دارا هر یک از «شاهان کشورها» آتشکدهٔ خود را ساخت. این بدعتی محض بود که آنان بی‌اجازهٔ شاهان کهن آوردند.', ref: 'Letter of Tansar, tr. Boyce', source: 'tansar' },
          { text: 'Whether or not this letter can be regarded as an authentic document of the time of Ardasir has been a matter for discussion since the beginning of the present century.', fa: 'این‌که این نامه را می‌توان سندی راستین از روزگار اردشیر دانست یا نه، از آغاز این سده محل بحث بوده است.', ref: 'M. Boyce, Introduction to The Letter of Tansar', source: 'tansar' },
        ],
      }),
    sec('rome', 'اردشیر و روم: «سرزمین‌های نیاکان»', 'Ardashir and Rome: the “lands of the ancestors”',
      [['در ۲۳۰ م. اردشیر به میان‌رودان روم تاخت و نصیبین را محاصره کرد. هرودیان، که هم‌روزگار بود، می‌گوید او همهٔ سرزمین‌هایی را می‌خواست که روزگاری از آنِ پارسیان بود. سوروس الکساندر در ۲۳۱–۲۳۳ م. پاسخ داد؛ نتیجه روشن نیست و پیمانی بسته نشد. سال‌ها بعد اردشیر حران و نصیبین را گرفت (حدود ۲۳۷–۲۳۸ م.) و در ۲۴۰ م. هترا را گشود.'],
        ['In 230 Ardashir invaded Roman Mesopotamia and besieged Nisibis. Herodian, a contemporary, says he wanted all the lands that had once belonged to the Persians. Severus Alexander answered in 231–233; the outcome is unclear and no treaty was made. Years later Ardashir took Carrhae and Nisibis (c. 237–238) and in 240 conquered Hatra.']],
      [['ایرانیکا می‌گوید ادعای ساسانیان احتمالاً به دقتی که هرودیان می‌گوید نبود، اما رومیان هدف آنان را درست فهمیدند. طبری هم از اردشیر نقل می‌کند که برخاسته تا کین دارا را از اسکندر بگیرد. ایرانیکا یادآوری می‌کند که اشکانیان هم گاهی چنین ادعایی داشتند؛ ساسانیان آن را کامیاب‌تر به کار بردند.'],
        ['Iranica says the Sasanian claim was probably not as precise as Herodian suggests, but the Romans understood its aim correctly. Tabari also reports Ardashir saying that he had risen to avenge Dārā on Alexander. Iranica notes that the Parthians had sometimes made similar claims; the Sasanians used it with more success.']],
      [['ادعای «سرزمین‌های نیاکان» بهانه‌ای کهن برای جنگ است. هزینهٔ این ادعا را مردمان مرزی دادند که شهرهایشان بارها میان دو امپراتوری دست به دست شد.'],
        ['The claim to “ancestral lands” is an old excuse for war. Its price was paid by the frontier peoples whose cities changed hands again and again between two empires.']],
      ['herodian', 'ir-ardashir'], {
        quotes: [
          { text: 'He asserted that it was therefore proper for him to recover for the Persians the kingdom which they had formerly possessed.', fa: 'او می‌گفت پس رواست که پادشاهی‌ای را که پارسیان روزگاری داشتند، برای آنان بازپس گیرد.', ref: 'Herodian 6.2.2', source: 'herodian' },
        ],
      }),
  ],
  synthesis: {
    title: B('جمع‌بندی', 'Synthesis'),
    paras: {
      fa: ['اردشیر از فرمانروایی محلی در پارس به شاهنشاهی رسید و دودمانی ساخت که بیش از چهار سده پایید. شواهد هم‌روزگار اندک است: سکه‌ها، نقش‌ها و کتیبه‌های کوتاه، و گزارش هرودیان و دیو. بیشتر داستان او را طبری و کارنامه سده‌ها بعد نوشته‌اند. او قدرت را متمرکز کرد، شهرها را بر زمین شاهی ساخت و شاهی را هدیهٔ اورمزد نشان داد. این‌ها پایهٔ دولتی نیرومند شد، اما دولتی که در آن جای مردم را زادنشان و ارادهٔ شاه تعیین می‌کرد.'],
      en: ['Ardashir rose from a local ruler in Persis to king of kings and founded a dynasty that lasted more than four centuries. The contemporary evidence is thin: coins, reliefs and short inscriptions, plus Herodian and Dio. Most of his story was written down centuries later by Tabari and the Kār-nāmag. He centralized power, built cities on royal land and showed kingship as a gift of Ohrmazd. These became the base of a strong state, but a state in which people’s place was fixed by birth and by the king’s will.'],
    },
    sources: ['ir-ardashir', 'herodian', 'ir-karnamag'],
  },
  sources: pick('ir-ardashir', 'anrm', 'herodian', 'tansar', 'ir-karnamag', 'ir-firuzabad', 'skz', 'cmc', 'ir-shapur1'),
  photos: photos('coin-ardashir1', 'coin-ardashir-papak', 'nr-ardashir', 'firuzabad-relief', 'ardashir-palace'),
  related: related(['artabanus-iv', 'اردوان چهارم، آخرین شاه بزرگ اشکانی', 'Artabanus IV, the last Parthian Great King'], ['shapur-i', 'شاپور یکم، پسرش', 'Shapur I, his son']),
  wikipedia: 'https://en.wikipedia.org/wiki/Ardashir_I',
}
