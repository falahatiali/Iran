/**
 * Vologases IV (147/148–190/193) and Osroes II (c. 190, known from coins).
 * Narrative: Iranica (Schippmann, “Arsacids ii”), paraphrased; Herodian 6.2.4 for the Roman memory of Verus’ war.
 * No continuous ancient account of the war of 161–166 survives in our checked sources; dates are Iranica’s.
 */
import type { Bi, FeaturedKing } from '../featured/types'
import { ARTAXATA, CTESIPHON, PAR, SELEUCIA, SYRIA, ev, note, photos, pick, related, sec } from './common'

const B = (fa: string, en: string): Bi => ({ fa, en })

const END = note('ایرانیکا پایان پادشاهی را ۱۹۰/۱۹۱ یا ۱۹۲/۱۹۳ م. می‌گذارد. ایرانیکا در مقالهٔ «اردشیر یکم» همین شاه بعدی را «بلاش چهارم (۱۹۲–۲۰۷)» می‌نامد؛ شماره‌گذاری بلاش‌ها در منابع یکسان نیست.', 'Iranica puts the end of the reign at 190/191 or 192/193 CE. Iranica’s “Ardašīr I” article calls the next king “Vologeses IV (192–207)”; the numbering of the Vologases differs between sources.')

export const vologasesIV: FeaturedKing = {
  slug: 'vologases-iv', name: B('بلاش چهارم', 'Vologases IV'), dynastyName: PAR,
  reign: B('۱۴۷/۱۴۸–۱۹۰/۱۹۳ م.', '147/148–190/193 CE'),
  title: B('بلاش چهارم؛ جنگ با روم و بیماری‌ای که تیسفون را نجات داد', 'Vologases IV: war with Rome, and the epidemic that saved Ctesiphon'),
  lede: B(
    'بلاش چهارم بیش از چهل سال شاه بود. سال‌های نخست آرام گذشت. پس از مرگ آنتونینوس پیوس در ۱۶۱ م.، پارتیان ارمنستان را گرفتند و به سوریه تاختند. روم با سپاهی بزرگ پاسخ داد؛ این جنگ را رومیان به نام لوکیوس وروس، هم‌فرمانروای مارکوس اورلیوس، می‌شناختند. در پایان ۱۶۵ یا آغاز ۱۶۶ م. سپاه آویدیوس کاسیوس سلوکیه و تیسفون را گرفت. اما بیماری همه‌گیری، احتمالاً آبله، در سپاه روم افتاد و رومیان با تلفات سنگین بازگشتند.',
    'Vologases IV was king for more than forty years. The early years were peaceful. After Antoninus Pius died in 161 CE, the Parthians took Armenia and raided Syria. Rome answered with a large army; the Romans remembered this as the war of Lucius Verus, Marcus Aurelius’ co-emperor. At the end of 165 or early in 166 CE Avidius Cassius’ army took Seleucia and Ctesiphon. But an epidemic, probably smallpox, broke out among the Romans and they withdrew with heavy losses.'),
  stats: [{ n: B('~۴۴', '~44'), l: B('سال پادشاهی', 'years of reign') }, { n: B('۱۶۱–۱۶۶', '161–166'), l: B('جنگ با روم (م.)', 'war with Rome (CE)') }, { n: B('۳۰', '30'), l: B('سال صلح پس از آن', 'years of peace after') }],
  mapTitle: B('نقشه: ارمنستان، سوریه و تیسفون', 'Map: Armenia, Syria and Ctesiphon'),
  span: [147, 191],
  events: [
    ev('accession', 147, B('۱۴۷/۱۴۸ م.', '147/148 CE'), 'admin', CTESIPHON, B('بر تخت', 'Accession'), B('بلاش پس از بلاش سوم به تخت نشست. ایرانیکا: سال‌های نخست پادشاهی او آرام بود.', 'Vologases succeeded Vologases III. Iranica: the early years of his reign were peaceful.'), 'probable', ['ir-arsacids', 'sellwood']),
    ev('armenia', 161, B('۱۶۱ م.', '161 CE'), 'campaign', ARTAXATA, B('ارمنستان گرفته می‌شود', 'Armenia is taken'), B('ایرانیکا: پس از مرگ آنتونینوس پیوس، پارتیان جنگ را از نو آغاز کردند، ارمنستان را گرفتند و شاهی به نام پاکر را بر تخت آن نشاندند.', 'Iranica: on the death of Antoninus Pius the Parthians reopened hostilities, conquered Armenia and installed a king named Pacorus there.'), 'secure', ['ir-arsacids']),
    ev('syria', 162, B('۱۶۱–۱۶۴ م.', '161–164 CE'), 'campaign', SYRIA, B('یورش به سوریه', 'The raid into Syria'), B('ایرانیکا: پارتیان به سوریه هم تاختند و در آغاز پیروزی‌هایی بر روم به دست آوردند.', 'Iranica: the Parthians also marched into Syria and at first won some successes against Rome.'), 'secure', ['ir-arsacids']),
    ev('counter', 163, B('۱۶۳–۱۶۴ م.', '163–164 CE'), 'campaign', ARTAXATA, B('پاسخ روم', 'Rome strikes back'), B('ایرانیکا: در ۱۶۳ م. رومیان ارمنستان را پس گرفتند و سوهائموس را به خواست روم شاه آن کردند. در ۱۶۴ م. پارتیان ناچار سوریه را رها کردند و آویدیوس کاسیوس به سوی میان‌رودان راه افتاد.', 'Iranica: in 163 CE the Romans won back Armenia, where Sohaemus was crowned king by Rome’s grace. In 164 CE they forced the Parthians out of Syria and Avidius Cassius marched into Mesopotamia.'), 'secure', ['ir-arsacids']),
    ev('sack', 165, B('پایان ۱۶۵ یا آغاز ۱۶۶ م.', 'end of 165 or early 166 CE'), 'battle', SELEUCIA, B('سلوکیه و تیسفون گرفته می‌شوند', 'Seleucia and Ctesiphon fall'), B('ایرانیکا: رومیان در پایان ۱۶۵ یا آغاز ۱۶۶ م. سلوکیه و تیسفون را گرفتند.', 'Iranica: the Romans took Seleucia and Ctesiphon at the end of 165 or the beginning of 166 CE.'), 'disputed', ['ir-arsacids'], note('تاریخ دقیق روشن نیست (پایان ۱۶۵ یا آغاز ۱۶۶). جزئیات ویرانی سلوکیه از گزارش‌های رومی است که این صفحه هنوز مستقیم بررسی نکرده؛ برای همین تنها گرفتن دو شهر را می‌آوریم.', 'The exact date is unclear (end of 165 or early 166). Details of the destruction of Seleucia come from Roman accounts this page has not yet checked directly, so we give only the capture of the two cities.')),
    ev('plague', 166, B('بهار ۱۶۶ م.', 'spring 166 CE'), 'campaign', CTESIPHON, B('بیماری و بازگشت روم', 'The epidemic and Rome’s retreat'), B('ایرانیکا: «بار دیگر بخت با پارتیان یار بود»: بیماری همه‌گیری، احتمالاً آبله، در سپاه روم افتاد و رومیان در بهار ۱۶۶ م. با تلفات سنگین بازگشتند.', 'Iranica: “once again the Parthians were fortunate”: an epidemic, probably smallpox, broke out and forced the Romans to retreat in spring 166 CE with heavy losses.'), 'probable', ['ir-arsacids'], note('ایرانیکا بیماری را «احتمالاً آبله» می‌داند. پیوند آن با همه‌گیری بزرگی که سپس در امپراتوری روم پخش شد (طاعون آنتونینی) دیدگاه پژوهشگران امروزی است.', 'Iranica calls it “probably smallpox”. Its link to the great epidemic that then spread through the Roman empire (the Antonine Plague) is a modern scholarly view.')),
    ev('end', 191, B('۱۹۰/۱۹۱ یا ۱۹۲/۱۹۳ م.', '190/191 or 192/193 CE'), 'admin', CTESIPHON, B('سی سال صلح و پایان', 'Thirty years of peace, and the end'), B('ایرانیکا: پس از جنگ، سه دهه صلح بود، شاید از آن رو که امپراتوران روم با هم بر سر قدرت می‌جنگیدند. پس از بلاش چهارم، بلاش پنجم به تخت نشست.', 'Iranica: after the war peace reigned for three decades, perhaps partly because Roman emperors were fighting each other for power. Vologases IV was followed by Vologases V.'), 'disputed', ['ir-arsacids', 'ir-ardashir'], END),
  ],
  dossier: [
    sec('war', 'جنگ ۱۶۱–۱۶۶', 'The war of 161–166',
      [['ایرانیکا (شیپمان): پس از مرگ آنتونینوس پیوس، پارتیان ارمنستان را گرفتند و پاکر را شاه آن کردند و به سوریه تاختند. روم در ۱۶۳ م. ارمنستان را پس گرفت و سوهائموس را شاه کرد، در ۱۶۴ م. پارتیان را از سوریه بیرون راند و آویدیوس کاسیوس به میان‌رودان رفت. در پایان ۱۶۵ یا آغاز ۱۶۶ م. سلوکیه و تیسفون گرفته شد.', 'هرودیان، که دو نسل بعد می‌نوشت، وروس را در کنار آگوستوس، ترایانوس و سپتیموس سوروس از رومیانی می‌شمارد که بر پارسیان پیروز شدند (۶.۲.۴).'],
        ['Iranica (Schippmann): after the death of Antoninus Pius the Parthians took Armenia, made Pacorus its king, and marched into Syria. In 163 CE Rome won Armenia back and crowned Sohaemus; in 164 it drove the Parthians out of Syria and Avidius Cassius moved into Mesopotamia. At the end of 165 or early 166 CE Seleucia and Ctesiphon were taken.', 'Herodian, writing two generations later, lists Verus with Augustus, Trajan and Septimius Severus among the Romans who defeated the Persians (6.2.4).']],
      [['جنگ از ارمنستان آغاز شد، مانند بیشتر جنگ‌های روم و پارت. ایرانیکا بازگشت روم را بیشتر کار بیماری می‌داند تا کار سپاه پارت. دو شهر بزرگ بابل، سلوکیه و تیسفون، در دسترس هر سپاهی بودند که از فرات پایین می‌آمد.'],
        ['The war began in Armenia, like most wars between Rome and Parthia. Iranica credits Rome’s withdrawal more to the epidemic than to the Parthian army. The two great cities of Babylonia, Seleucia and Ctesiphon, lay open to any army coming down the Euphrates.']],
      [['بیشترین بها را مردمان شهرها پرداختند: سلوکیه شهری بازرگان بود که دارایی‌اش در جنگی میان دو امپراتوری از دست رفت. شهری که از جنگ سودی نمی‌برد، بیشترین زیان را می‌دید.'],
        ['The city dwellers paid the highest price: Seleucia was a merchant city whose wealth was lost in a war between two empires. The city that gained nothing from the war suffered most from it.']],
      ['ir-arsacids', 'herodian'], { photos: ['coin-vologases4'] }),
    sec('plague', 'بیماری‌ای که جنگ را پایان داد', 'The epidemic that ended the war',
      [['ایرانیکا: «بار دیگر بخت با پارتیان یار بود»: بیماری همه‌گیری، احتمالاً آبله، در سپاه روم افتاد و رومیان را در بهار ۱۶۶ م. به بازگشت واداشت؛ در این بازگشت تلفات سنگینی دادند. پس از آن سه دهه صلح بود.'],
        ['Iranica: “once again the Parthians were fortunate”: an epidemic, probably smallpox, broke out and forced the Romans to retreat in spring 166 CE, and they suffered heavy losses on the way. Three decades of peace followed.']],
      [['پژوهشگران امروزی این بیماری را آغاز «طاعون آنتونینی» می‌دانند که در سال‌های بعد در امپراتوری روم پخش شد. ایرانیکا این پیوند را نمی‌گوید؛ این تفسیر امروزی است. «بار دیگر» در سخن ایرانیکا اشاره به جنگ ترایانوس است که آن هم بی نتیجهٔ پایدار پایان یافت.'],
        ['Modern scholars see this epidemic as the start of the “Antonine Plague”, which spread through the Roman empire in the following years. Iranica does not draw this link; it is a modern reading. Iranica’s “once again” recalls Trajan’s war, which also ended without a lasting result.']],
      [['بیماری مرز نمی‌شناسد. سپاهی که برای گرفتن شهرهای دیگران آمده بود، مرگ را با خود به خانه برد.'],
        ['Disease knows no borders. An army that came to take other people’s cities carried death home with it.']],
      ['ir-arsacids']),
  ],
  synthesis: { title: B('جمع‌بندی', 'Synthesis'), paras: { fa: ['بلاش چهارم جنگ را خود آغاز کرد و ارمنستان و سوریه را گرفت، اما روم هر دو را پس گرفت و سلوکیه و تیسفون را تسخیر کرد. بیماری‌ای در سپاه روم، نه پیروزی پارت، جنگ را پایان داد، و پس از آن سی سال صلح آمد.'], en: ['Vologases IV started the war himself and took Armenia and Syria, but Rome won both back and captured Seleucia and Ctesiphon. An epidemic in the Roman army, not a Parthian victory, ended the war, and thirty years of peace followed.'] }, sources: ['ir-arsacids'] },
  sources: pick('ir-arsacids', 'ir-ardashir', 'herodian', 'sellwood'),
  photos: photos('coin-vologases4'),
  related: related(['vologases-iii', 'بلاش سوم', 'Vologases III'], ['osroes-ii', 'خسرو دوم', 'Osroes II'], ['vologases-v', 'بلاش پنجم', 'Vologases V']),
  wikipedia: 'https://en.wikipedia.org/wiki/Vologases_IV',
}

export const osroesII: FeaturedKing = {
  slug: 'osroes-ii', name: B('خسرو دوم', 'Osroes II'), dynastyName: PAR,
  reign: B('حدود ۱۹۰ م.', 'c. 190 CE'),
  title: B('خسرو دوم؛ شاهی که تنها سکه‌هایش مانده‌اند', 'Osroes II: a king known only from his coins'),
  lede: B(
    'خسرو دوم را تنها از چند سکه می‌شناسیم. رده‌بندی سکه‌های پارتی او را در حدود ۱۹۰ م.، در پایان پادشاهی بلاش چهارم، می‌گذارد. هیچ تاریخ‌نگاری از او یاد نمی‌کند و ایرانیکا در گزارش دودمان اشکانی نامی از او نمی‌برد. شاید مدعی‌ای در یکی از ولایت‌ها بوده است.',
    'Osroes II is known only from a few coins. The classification of Parthian coins places him about 190 CE, at the end of Vologases IV’s reign. No historian mentions him and Iranica’s survey of the dynasty does not name him. He may have been a claimant in one of the provinces.'),
  stats: [{ n: B('~۱۹۰', '~190'), l: B('تاریخ سکه‌ها (م.)', 'date of the coins (CE)') }, { n: B('۰', '0'), l: B('یادکرد در منابع نوشتاری', 'mentions in written sources') }],
  mapTitle: B('نقشه: پایان پادشاهی بلاش چهارم', 'Map: the end of Vologases IV’s reign'),
  span: [189, 191],
  events: [
    ev('coins', 190, B('حدود ۱۹۰ م.', 'c. 190 CE'), 'admin', CTESIPHON, B('سکه‌هایی به نام خسرو', 'Coins in the name of Osroes'), B('سکه‌هایی که به خسرو دوم نسبت می‌دهند، تنها نشانهٔ بودن اویند. جای ضرب و قلمرو او روشن نیست؛ نشانه روی نقشه تنها پایتخت را نشان می‌دهد.', 'Coins attributed to Osroes II are the only sign that he existed. Where they were struck and what he ruled are unclear; the map marker shows only the capital.'), 'disputed', ['sellwood'], note('تاریخ و جایگاه او تنها از رده‌بندی سکه‌ها می‌آید. ایرانیکا (شیپمان) پس از بلاش چهارم مستقیم به بلاش پنجم می‌رود.', 'His date and standing come only from coin classification. Iranica (Schippmann) goes straight from Vologases IV to Vologases V.')),
  ],
  dossier: [
    sec('coins', 'شاهی از روی سکه', 'A king from coins',
      [['سکه‌شناسان چند سکه را به شاهی به نام خسرو نسبت می‌دهند و آن را در حدود ۱۹۰ م. می‌گذارند. هیچ متن تاریخی از او یاد نمی‌کند.'],
        ['Numismatists attribute a few coins to a king named Osroes and date them to about 190 CE. No historical text mentions him.']],
      [['در سدهٔ دوم میلادی، چند بار شاهانی رقیب هم‌زمان سکه زدند (مانند خسرو یکم و بلاش سوم). خسرو دوم هم شاید مدعی‌ای از همین گونه بوده است، اما این گمان است، نه گزارش.'],
        ['In the second century CE rival kings several times struck coins at the same time (Osroes I and Vologases III, for example). Osroes II may have been a claimant of the same kind, but that is a guess, not a report.']],
      [['سکه سند مالکیت شاه بر ثروت مردم نیست، اما سند ادعای او بر قدرت است. گاه تنها ردی که از یک ادعای سیاسی می‌ماند، پولی است که مردم با آن داد و ستد کردند.'],
        ['A coin is not proof that a king owned his people’s wealth, but it is proof of his claim to power. Sometimes the only trace of a political claim is the money people traded with.']],
      ['sellwood', 'ir-arsacids'], { photos: ['coin-osroes2'] }),
  ],
  synthesis: { title: B('جمع‌بندی', 'Synthesis'), paras: { fa: ['خسرو دوم نامی بر چند سکه است. بیش از این دربارهٔ او نمی‌دانیم.'], en: ['Osroes II is a name on a few coins. We know nothing more about him.'] }, sources: ['sellwood'] },
  sources: pick('sellwood', 'ir-arsacids'),
  photos: photos('coin-osroes2'),
  related: related(['vologases-iv', 'بلاش چهارم', 'Vologases IV'], ['vologases-v', 'بلاش پنجم', 'Vologases V']),
  wikipedia: 'https://en.wikipedia.org/wiki/Osroes_II',
}
