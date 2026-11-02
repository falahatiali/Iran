/** Persepolis site content for /archives. Every card cites ids from `siteSources`; quotes are from public-domain translations. */
type Bi = { fa: string; en: string }
const B = (fa: string, en: string): Bi => ({ fa, en })

export interface SiteSource { id: string; author: string; title: string; year: string; url?: string }
export const siteSources: SiteSource[] = [
  { id: 'shahbazi', author: 'A. Sh. Shahbazi, Encyclopaedia Iranica', title: 'Persepolis', year: '2009', url: 'https://www.iranicaonline.org/articles/persepolis/' },
  { id: 'schmidt', author: 'E. F. Schmidt', title: 'Persepolis I–III (Oriental Institute Publications 68, 69, 70)', year: '1953–1970' },
  { id: 'hallock', author: 'R. T. Hallock', title: 'Persepolis Fortification Tablets (OIP 92)', year: '1969' },
  { id: 'cameron', author: 'G. G. Cameron', title: 'Persepolis Treasury Tablets (OIP 65)', year: '1948' },
  { id: 'arrian', author: 'Arrian, tr. E. J. Chinnock', title: 'Anabasis of Alexander 3.18 (Wikisource)', year: '1884', url: 'https://en.wikisource.org/wiki/The_Anabasis_of_Alexander/Book_III/Chapter_XVIII' },
  { id: 'plutarch', author: 'Plutarch, tr. B. Perrin (Loeb)', title: 'Life of Alexander 37–38 (LacusCurtius)', year: '1919', url: 'https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Plutarch/Lives/Alexander*/5.html' },
  { id: 'diodorus', author: 'Diodorus of Sicily', title: 'Library of History 17.70–72', year: '1st c. BCE' },
  { id: 'curtius', author: 'Quintus Curtius Rufus', title: 'Histories of Alexander 5.6–7', year: '1st c. CE' },
]
export const siteSourceIds = new Set(siteSources.map((s) => s.id))

export interface SitePhoto { key: string; file: string; author: string; license: string; licenseUrl?: string; caption: Bi; old?: boolean }
const C = (k: string) => `https://commons.wikimedia.org/wiki/File:${k}`
const BYSA4 = 'https://creativecommons.org/licenses/by-sa/4.0', BYSA2 = 'https://creativecommons.org/licenses/by-sa/2.0', BYSA3 = 'https://creativecommons.org/licenses/by-sa/3.0', BY4 = 'https://creativecommons.org/licenses/by/4.0', CC0 = 'https://creativecommons.org/publicdomain/zero/1.0/'
/** Local webp in /media/persepolis/{key}-{640,1200}.webp; licences read from the Commons API (see ATTRIBUTION.txt). */
export const sitePhotos: SitePhoto[] = [
  { key: 'hero', file: C('Persepolis_-_Apadana_01.jpg'), author: 'Bernard Gagnon', license: 'CC BY-SA 4.0', licenseUrl: BYSA4, caption: B('آپادانا، تالار بار داریوش و خشایارشا', 'The Apadana, the audience hall of Darius and Xerxes') },
  { key: 'gate', file: C('Persepolis_–_Gate_of_All_Nations_01.jpg'), author: 'Skot', license: 'CC BY-SA 4.0', licenseUrl: BYSA4, caption: B('دروازهٔ همهٔ ملت‌ها، ساختهٔ خشایارشا', 'The Gate of All Lands, built by Xerxes') },
  { key: 'tachara', file: C('2018-09-21_Iran,_Persepolis,_Tachara_(from_the_southeast).jpg'), author: 'Laurens R. Krol', license: 'CC BY 4.0', licenseUrl: BY4, caption: B('تچر، کاخ داریوش', 'The Tachara, the palace of Darius') },
  { key: 'hundred', file: C('Hall_of_Hundred_Columns_(Throne_Hall),_Persepolis.jpg'), author: 'Carole Raddato', license: 'CC BY-SA 2.0', licenseUrl: BYSA2, caption: B('تالار صدستون', 'The Hundred Column Hall') },
  { key: 'stairs', file: C('Persepolis_stairs_of_the_Apadana_relief.jpg'), author: 'Phillip Maiwald (Nikopol)', license: 'CC BY-SA 3.0', licenseUrl: BYSA3, caption: B('نقش‌برجستهٔ پلکان آپادانا', 'Relief on the Apadana stairway') },
  { key: 'pfa', file: C('Persepolis_Fortification_Archive_Tablets.jpg'), author: 'Pfa16', license: 'CC BY-SA 4.0', licenseUrl: BYSA4, caption: B('الواح بایگانی بارو', 'Tablets of the Fortification Archive') },
  { key: 'tomb-a3', file: C('Persepolis_-_Tomb_of_Artaxerxes_III_01.jpg'), author: 'Bernard Gagnon', license: 'CC BY-SA 4.0', licenseUrl: BYSA4, caption: B('آرامگاه صخره‌ای بالای صفه', 'A rock tomb above the terrace') },
  { key: 'flandin', file: C('Persepolis_,_view_the_ruins_1_by_Eugène_Flandin.jpg'), author: 'Eugène Flandin', license: 'Public domain', caption: B('ویرانه‌ها به قلم فلاندن (۱۸۴۰ م.)', 'The ruins drawn by Flandin (1840s)'), old: true },
  { key: 'coste', file: C('Persepolis_rendering_old.jpg'), author: 'Flandin & Coste', license: 'Public domain', caption: B('بازسازی تصوری فلاندن و کست', 'Imagined restoration by Flandin and Coste'), old: true },
  { key: 'chipiez', file: C("Persepolis_vue_d'oiseau_Chipiez.jpg"), author: 'Charles Chipiez', license: 'Public domain', caption: B('نمای پرنده‌وار شیپیه (سدهٔ ۱۹)؛ بازسازی تصوری', 'Chipiez’s bird’s-eye view (19th c.); imagined'), old: true },
  { key: 'chipiez-apadana', file: C('Persepolis_Reconstruction_Apadana_Chipiez.jpg'), author: 'Charles Chipiez', license: 'Public domain', caption: B('آپادانا به تصور شیپیه', 'The Apadana as Chipiez imagined it'), old: true },
  { key: 'sevruguin', file: C('Groep_mannen_poserend_bij_de_Poort_van_alle_Naties_(Poort_van_Xerxes)_in_Persepolis_Persepolis_(titel_op_object),_RP-F-F01048-AI.jpg'), author: 'Antoin Sevruguin (Rijksmuseum)', license: 'CC0', licenseUrl: CC0, caption: B('دروازهٔ همهٔ ملت‌ها در عکس سورگین (دورهٔ قاجار)', 'The Gate of All Lands photographed by Sevruguin (Qajar era)'), old: true },
  { key: 'sevruguin2', file: C('Gezicht_op_ruïnes_van_Persepolis,_RP-F-F01048-AD.jpg'), author: 'Antoin Sevruguin (Rijksmuseum)', license: 'CC0', licenseUrl: CC0, caption: B('ویرانه‌ها پیش از کاوش', 'The ruins before excavation'), old: true },
]

export interface Hotspot { id: string; x: number; y: number; name: Bi; builder: Bi; body: Bi; photo?: string; sources: string[] }
/** Positions on a schematic 600×400 plan, not a survey. */
export const hotspots: Hotspot[] = [
  { id: 'stair', x: 70, y: 165, name: B('پلکان بزرگ', 'Grand stairway'), builder: B('خشایارشا', 'Xerxes'), body: B('پلکان دوطرفه در شمال‌غرب، با پله‌های کم‌ارتفاع، راه ورود به صفه بود. خود صفه حدود ۱۲۵٬۰۰۰ متر مربع است و بر دامنهٔ کوه مهر (کوه رحمت) ساخته شده است.', 'A double stairway in the north-west, with low steps, led up to the terrace. The terrace itself covers about 125,000 m² against the Kuh-e Mehr (Kuh-e Rahmat).'), sources: ['shahbazi'] },
  { id: 'gate', x: 130, y: 120, name: B('دروازهٔ همهٔ ملت‌ها', 'Gate of All Lands'), builder: B('خشایارشا', 'Xerxes'), body: B('کتیبهٔ سه‌زبانهٔ خشایارشا (XPa) بر آن است: او می‌گوید این دروازه را به خواست اهورامزدا ساخت.', 'It bears Xerxes’ trilingual inscription (XPa): he says he built this gate by the favour of Ahuramazda.'), photo: 'gate', sources: ['shahbazi'] },
  { id: 'apadana', x: 230, y: 175, name: B('آپادانا', 'Apadana'), builder: B('داریوش، پایان با خشایارشا', 'Darius, finished by Xerxes'), body: B('تالار ۶۰ در ۶۰ متر با ۳۶ ستون حدود ۱۹٫۵ متری، و روی هم ۷۲ ستون با ایوان‌ها. در ۱۶۱۹ م. بیست ستون و در ۱۹۷۷ سیزده ستون برپا بود. کرفتر در ۱۹۳۳ لوح‌های پی را یافت.', 'A hall 60 by 60 m with 36 columns about 19.5 m high, and 72 columns in all with the porticoes. Twenty columns stood in 1619 and thirteen in 1977. Krefter found the foundation plaques in 1933.'), photo: 'hero', sources: ['shahbazi', 'schmidt'] },
  { id: 'tachara', x: 245, y: 270, name: B('تچر', 'Tachara'), builder: B('داریوش', 'Darius'), body: B('کهن‌ترین کاخ صفه، حدود ۴۰ در ۳۰ متر. نمای آن الگوی نمای آرامگاه‌های نقش رستم است.', 'The oldest palace on the terrace, about 40 by 30 m. Its façade is the model for the tomb façades at Naqsh-e Rostam.'), photo: 'tachara', sources: ['shahbazi'] },
  { id: 'hundred', x: 370, y: 140, name: B('تالار صدستون', 'Hundred Column Hall'), builder: B('خشایارشا، پایان با اردشیر یکم', 'Xerxes, finished by Artaxerxes I'), body: B('۶۸٫۵ در ۶۸٫۵ متر، با ستون‌های حدود ۱۴ متری. شهبازی می‌نویسد بقایای سوختهٔ تیرهای سدر گواه آتشی هولناک است و رنگ سنگ‌ها دگرگون شده است.', '68.5 by 68.5 m, with columns about 14 m high. Shahbazi writes that charred remains of cedar beams evidence a frightful fire, and the stone has changed colour.'), photo: 'hundred', sources: ['shahbazi', 'schmidt'] },
  { id: 'treasury', x: 440, y: 290, name: B('خزانه', 'Treasury'), builder: B('داریوش، گسترش با خشایارشا', 'Darius, enlarged by Xerxes'), body: B('حدود ۷۵۰ لوح خزانه در آوار سوخته پیدا شد. شهبازی می‌گوید پیش از آتش، روکش‌های فلز گران‌بها از نقش‌ها کنده شد و از آب خندق برای خاموش کردن استفاده نشد؛ او این را نشانهٔ عمدی بودن آتش می‌داند.', 'About 750 Treasury tablets were found in the burnt debris. Shahbazi says the precious-metal fittings were stripped from the reliefs before the fire and no water from the moat was used; he takes this as a sign that the fire was deliberate.'), sources: ['shahbazi', 'schmidt', 'cameron'] },
  { id: 'fortif', x: 520, y: 85, name: B('بارو و بایگانی', 'Fortification and archive'), builder: B('داریوش', 'Darius'), body: B('در ۱۹۳۳ در دیوار بارو هزاران لوح گلی پیدا شد: بایگانی بارو، با بیش از ۳۰٬۰۰۰ لوح و پاره. بیشتر به ایلامی‌اند و جیرهٔ کارگران و مسافران را ثبت می‌کنند.', 'In 1933 thousands of clay tablets were found in the fortification wall: the Fortification Archive, more than 30,000 tablets and fragments. Most are in Elamite and record rations for workers and travellers.'), photo: 'pfa', sources: ['hallock', 'shahbazi'] },
  { id: 'tomb', x: 560, y: 220, name: B('آرامگاه‌های کوه', 'Mountain tombs'), builder: B('شاهان پسین هخامنشی', 'Later Achaemenid kings'), body: B('دو آرامگاه صخره‌ای کامل در کوه بالای صفه کنده شده‌اند، به شیوهٔ نقش رستم.', 'Two finished rock tombs are cut into the mountain above the terrace, in the Naqsh-e Rostam style.'), photo: 'tomb-a3', sources: ['shahbazi'] },
]

export const building = [
  { when: B('حدود ۵۱۸ پ.م.', 'c. 518 BCE'), who: B('داریوش یکم', 'Darius I'), what: B('جای صفه را برگزید؛ صفه، تچر، آپادانا و خزانه را آغاز کرد.', 'Chose the site; began the terrace, the Tachara, the Apadana and the Treasury.') },
  { when: B('۴۸۶–۴۶۵ پ.م.', '486–465 BCE'), who: B('خشایارشا', 'Xerxes'), what: B('آپادانا را تمام کرد؛ دروازهٔ همهٔ ملت‌ها، کاخ خود و تالار صدستون را آغاز کرد.', 'Finished the Apadana; built the Gate of All Lands, his own palace, and began the Hundred Column Hall.') },
  { when: B('۴۶۵–۴۲۴ پ.م.', '465–424 BCE'), who: B('اردشیر یکم', 'Artaxerxes I'), what: B('تالار صدستون را به پایان برد (کتیبهٔ A¹Pa).', 'Finished the Hundred Column Hall (inscription A¹Pa).') },
]

export const labour: Bi[] = [
  B('لوح‌های بارو (هالوک ۱۹۶۹ بیش از ۲٬۰۰۰ متن را منتشر کرد) جیرهٔ ماهانهٔ کارگرانی به نام «کورتش» را ثبت می‌کنند: جو، شراب، آبجو و گاهی گوسفند. مردان، زنان و کودکان در گروه‌ها کار می‌کردند و جیرهٔ هر کس بر پایهٔ کار و مهارت فرق داشت.', 'The Fortification tablets (Hallock 1969 published over 2,000 texts) record monthly rations for workers called kurtaš: barley, wine, beer and sometimes sheep. Men, women and children worked in groups, and each person’s ration varied with their work and skill.'),
  B('زنانی که زایمان کرده بودند، جیرهٔ ویژه می‌گرفتند و مادران پسران معمولاً دو برابر مادران دختران.', 'Women who had given birth received a special ration, and mothers of boys usually twice as much as mothers of girls.'),
  B('لوح‌های خزانه (کامرون ۱۹۴۸) نشان می‌دهند که از حدود ۴۹۲ پ.م. بخشی از مزد به جای کالا با نقره پرداخت می‌شد. پیش‌تر، از ۵۰۹ تا ۴۹۴ پ.م.، مزد در لوح‌های بارو تنها جنسی است.', 'The Treasury tablets (Cameron 1948) show that from about 492 BCE part of the pay was given in silver instead of goods. Earlier, from 509 to 494 BCE, pay in the Fortification tablets is in kind only.'),
]

export const presentAbsent = {
  present: [
    B('ستون‌ها، درگاه‌ها و پلکان‌های سنگی؛ نقش‌برجسته‌های نمایندگان سرزمین‌ها؛ کتیبه‌های شاهی؛ دو بایگانی گلی.', 'Stone columns, doorways and stairways; reliefs of delegations from the lands; royal inscriptions; two clay archives.'),
  ],
  absent: [
    B('بام‌ها و تیرهای چوبی (سدر) سوختند؛ تنها بقایای زغال‌شده مانده است.', 'The roofs and wooden (cedar) beams burned; only charred remains are left.'),
    B('گنج: به گفتهٔ پلوتارک، ده هزار جفت قاطر و پنج هزار شتر آن را بردند. این ادعای اوست، نه شمارشی سنجیده.', 'The treasure: Plutarch says ten thousand pairs of mules and five thousand camels carried it off. That is his claim, not a verified count.'),
    B('بسیاری از یافته‌های کاوش‌های اشمیت به شیکاگو رفت؛ بخشی از الواح بارو برای خوانش به امانت آنجا ماند و سپس به ایران بازگشت.', 'Many finds from Schmidt’s excavations went to Chicago; part of the Fortification tablets stayed there on loan for study and were later returned to Iran.'),
  ],
  debates: [
    { title: B('بردگی؟', 'Slave labour?'), body: B('هیچ لوحی سازندگان صفه را برده نمی‌نامد. کارگران جیره و گاهی نقره می‌گرفتند. اما جایگاه کورتش‌ها بحث‌برانگیز است: برخی آنان را کارگران وابسته یا نیمه‌آزاد می‌دانند، برخی مزدبگیر.', 'No tablet calls the builders of the terrace slaves. Workers received rations and sometimes silver. But the status of the kurtaš is debated: some see them as dependent or semi-free labourers, others as wage-earners.') },
    { title: B('شهر یا مکان آیینی؟', 'City or ceremonial site?'), body: B('هرتسفلد و دیگران صفه را جای جشن نوروز می‌دانستند؛ نیلاندر، کالمایر و موسوی می‌گویند گواهی برای آن نیست. روت آن را نمایش قدرت شاهی می‌داند و دیگران مرکز اداری. شهر پارسه در دشت پایین بود.', 'Herzfeld and others saw the terrace as the setting of a Nowruz festival; Nylander, Calmeyer and Mousavi say there is no evidence for it. Root reads it as a display of royal power, others as an administrative centre. The city of Pārsa lay in the plain below.') },
  ],
}

export interface Quote { text: string; fa: string; ref: string; source: string }
export const burning = {
  intro: B('در بهار ۳۳۰ پ.م.، پس از چند ماه ماندن در پارس، سپاه اسکندر کاخ‌های صفه را آتش زد. دربارهٔ چرایی آن دو روایت داریم و هر دو کهن‌اند.', 'In spring 330 BCE, after some months in Persis, Alexander’s army set fire to the palaces on the terrace. There are two accounts of why, and both are ancient.'),
  arrian: { text: 'He burnt down the Persian palace, though Parmenio advised him to preserve it … But Alexander said that he wished to take vengeance on the Persians, in retaliation for their deeds in the invasion of Greece, when they razed Athens to the ground and burnt down the temples.', fa: 'او کاخ پارسی را سوزاند، با آنکه پارمنیون پند داد آن را نگه دارد … اما اسکندر گفت می‌خواهد از پارسیان به تلافی کارهایشان در یورش به یونان، آنگاه که آتن را با خاک یکسان کردند و پرستشگاه‌ها را سوزاندند، انتقام بگیرد.', ref: 'Arrian, Anabasis 3.18.11–12, tr. E. J. Chinnock (1884)', source: 'arrian' } as Quote,
  plutarch: { text: 'it would be a still greater pleasure to go in revel rout and set fire to the house of the Xerxes who burned Athens … This is the way the deed was done, according to some writers; but others say it was premeditated.', fa: '(تائیس گفت) لذتی بزرگ‌تر خواهد بود که در جشنی پرهیاهو خانهٔ خشایارشایی را که آتن را سوزاند آتش بزنیم … برخی نویسندگان کار را چنین گزارش کرده‌اند؛ اما برخی دیگر می‌گویند از پیش اندیشیده بود.', ref: 'Plutarch, Alexander 38.4, 38.8, tr. B. Perrin (1919)', source: 'plutarch' } as Quote,
  mules: { text: 'it took ten thousand pairs of mules and five thousand camels to carry away the other furniture and wealth there.', fa: 'برای بردن دیگر اثاث و ثروت آنجا ده هزار جفت قاطر و پنج هزار شتر لازم شد.', ref: 'Plutarch, Alexander 37.4, tr. B. Perrin (1919)', source: 'plutarch' } as Quote,
  versions: [
    { title: B('روایت انتقام (آریان)', 'Revenge (Arrian)'), body: B('آریان، بر پایهٔ بطلمیوس و آریستوبولوس، آتش را تصمیمی سنجیده برای انتقام یورش خشایارشا می‌داند. خودش می‌نویسد این کار خردمندانه نبود.', 'Arrian, drawing on Ptolemy and Aristobulus, makes the fire a deliberate act of revenge for Xerxes’ invasion. He adds that he does not think it was wise.'), sources: ['arrian'] },
    { title: B('روایت تائیس (کلیتارخوس)', 'Thaïs (Cleitarchus)'), body: B('دیودور (۱۷.۷۰–۷۲)، پلوتارک (۳۸) و کورتیوس (۵.۷) می‌گویند در یک جشن، تائیس آتنی اسکندر را به آتش زدن واداشت. این سنت احتمالاً به کلیتارخوس برمی‌گردد. پلوتارک خود می‌گوید دیگران آن را از پیش اندیشیده می‌دانند.', 'Diodorus (17.70–72), Plutarch (38) and Curtius (5.7) say that at a feast the Athenian Thaïs urged Alexander to set the fire. This tradition probably goes back to Cleitarchus. Plutarch himself says others thought it premeditated.'), sources: ['diodorus', 'plutarch', 'curtius'] },
  ],
  evidence: B('گواه باستان‌شناسی: اشمیت لایه‌ای از خاکستر و زغال بر کف کاخ‌ها یافت، بیشتر در تالار صدستون و خزانه. خزانه پیش از آتش خالی شده بود. این شواهد با هر دو روایت جور درمی‌آیند؛ اما برداشتن گنج پیش از آتش با یک هوس ناگهانی جشن کمتر می‌خواند. این سنجش، برداشت ماست.', 'The archaeological evidence: Schmidt found a layer of ash and charcoal on the palace floors, heaviest in the Hundred Column Hall and the Treasury. The Treasury had been emptied before the fire. This evidence fits both accounts; but removing the treasure first fits a sudden whim at a feast less well. That weighing is our reading.'),
  lens: B('این برداشت ماست: پارمنیون به گفتهٔ آریان گفت نابود کردن آنچه اکنون دارایی خود اسکندر است، کار درستی نیست. آتش تخت‌جمشید نشان می‌دهد که در جهان باستان، دارایی شکست‌خورده دارایی فاتح می‌شد و فاتح هر کاری می‌خواست با آن می‌کرد.', 'This is our reading: according to Arrian, Parmenio argued it was wrong to destroy what was now Alexander’s own property. The fire shows that in the ancient world the property of the defeated became the conqueror’s, to do with as he pleased.'),
}

export interface Video { id: string; title: string; channel: string; lang: 'en' | 'fa' | 'fr' }
/** IDs and titles checked against YouTube oEmbed on 2026-11-02. */
export const videos: Video[] = [
  { id: 'DYM3PSwpELw', title: 'Inside Persepolis: The Greatest City The Persian Empire Ever Built', channel: 'Odyssey - Ancient History Documentaries', lang: 'en' },
  { id: 'cV-pwTktF-A', title: 'Les royaumes disparus – Le mythe de Persépolis', channel: 'GEDEON ARCHEO', lang: 'fr' },
  { id: 'i_e6FqkJErk', title: 'Ancient Economies – Persepolis and the Economy of Achaemenid Persia (Matt Stolper)', channel: 'The Institute for the Study of Ancient Cultures', lang: 'en' },
  { id: 'fv-o5qbwY8Q', title: 'Dr. Matthew Stolper – PFAP: Preserving the Legacy of the Achaemenid Persians', channel: 'IranicanProductions', lang: 'en' },
  { id: 'MBLw1tN7SbE', title: 'Archives, Fragments, and Site Forensics at Persepolis and Elsewhere', channel: 'New York University', lang: 'en' },
  { id: 'Rxt8FQKoJz8', title: 'Dr Wouter Henkelman: Tombs of Achaemenid Kings and Queens', channel: 'TheIHF', lang: 'en' },
  { id: '3fdJNjF0lcY', title: 'Persepolis 3D (a virtual reconstruction)', channel: 'Mohsen Zifan', lang: 'en' },
  { id: 'etVNZm5IPb4', title: 'A computer generated Reconstruction of Persepolis (Takhte-Jamshid)', channel: 'ashkans1749', lang: 'en' },
  { id: 'dfxLQuWjVZk', title: 'شاهکار ۲۵۰۰ ساله هخامنشیان | معماری و راز ساخت تخت جمشید', channel: 'Mirasa | میراثا', lang: 'fa' },
  { id: 'AG6IEl6UOxw', title: 'مستند «ایران باستان» E3 | معمای تخت جمشید', channel: 'TALKBOOK | تاک بوک', lang: 'fa' },
]

export const music = { src: '/media/persepolis/aase-death.m4a', title: 'Edvard Grieg, Peer Gynt Suite No. 1: “Åse’s Death”', performer: 'Musopen Symphony Orchestra', license: 'CC0', page: 'https://commons.wikimedia.org/wiki/File:Peer_Gynt_Suite_No._1,_Op._46_-_II._Aase%27s_Death.ogg' }
