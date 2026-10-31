/**
 * Deioces (Greek Dēïókēs, Iranian *Dahyuka-), the founder of the Median kingdom in Herodotus' story.
 * Spine: R. Schmitt, "Deioces" (Encyclopaedia Iranica, 1994/2013). Two layers are kept apart on purpose:
 * Herodotus 1.96–102 (tr. A. D. Godley, 1920), always labelled as his tradition, and the Assyrian evidence
 * for one Daiukku under Sargon II, who cannot be shown to be the same man.
 */
import type { Coord, DossierQuote, DossierSection, FeaturedKing, FeaturedSource } from '../featured/types'
import type { CommonsPhoto } from '../places/types'
import { ev, note, sec } from '../late-achaemenid/common'

const B = (fa: string, en: string) => ({ fa, en })
const ECBATANA: Coord = [48.52, 34.8]
const ZARRINRUD: Coord = [46.6, 36.6]
const DUR_SHARRUKIN: Coord = [43.23, 36.51]
const HAMATH: Coord = [36.75, 35.13]

const HDT = (ch: number) => `https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.01.0126:book=1:chapter=${ch}`
export const deiocesSources: FeaturedSource[] = [
  { id: 'schmitt-ir', author: 'R. Schmitt, Encyclopaedia Iranica', title: 'Deioces', year: '1994, updated 2013', url: 'https://www.iranicaonline.org/articles/deioces/', note: { fa: 'ستون اصلی این صفحه: روایت هرودوت را «آمیزه‌ای از افسانه‌های یونانی و شرقی» و «نامعتبر از نظر تاریخی» می‌داند و دایوکوی سارگون را از آن جدا می‌کند.', en: 'The spine of this page: calls Herodotus’ account “a mixture of Greek and eastern legends” that “is not historically reliable”, and keeps Sargon’s Daiukku apart from it.' } },
  { id: 'hdt', author: 'Herodotus, tr. A. D. Godley (Loeb, 1920)', title: 'The Histories, book 1, chapters 96–102 (Perseus)', year: '1920', url: HDT(96), note: { fa: 'تنها روایت پیوسته از دیااکو، حدود دویست سال پس از زمان او؛ همه جا با برچسب «به روایت هرودوت».', en: 'The only continuous account of Deioces, written some two centuries after his time; always labelled “according to Herodotus”.' } },
  { id: 'diakonoff-chi', author: 'I. M. Diakonoff', title: 'Media, in The Cambridge History of Iran II, pp. 36–148 (esp. 80 ff., 109)', year: '1985', note: { fa: 'سال‌های ۷۲۷–۶۷۵ پ.م. را با شمردن به عقب از برآمدن کوروش پیشنهاد می‌کند.', en: 'Suggests 727–675 BCE by counting back from the rise of Cyrus.' } },
  { id: 'brown1988', author: 'S. C. Brown', title: 'The Mêdikos Logos of Herodotus and the Evolution of the Median State, in Achaemenid History III, pp. 71–86', year: '1988' },
  { id: 'luckenbill1927', author: 'D. D. Luckenbill', title: 'Ancient Records of Assyria and Babylonia II (Sargon II, annals of year 8 and the Display Inscription)', year: '1927' },
  { id: 'lie1929', author: 'A. G. Lie', title: 'The Inscriptions of Sargon II, King of Assyria I. The Annals', year: '1929' },
]
export const deiocesSourceIds = new Set(deiocesSources.map((s) => s.id))

const t = (path: string) => `https://upload.wikimedia.org/wikipedia/commons/thumb/${path}`
const f = (name: string) => `https://commons.wikimedia.org/wiki/File:${name}`
/** Licence and author read from the Commons API on 2026-10-31. */
export const deiocesPhotos: CommonsPhoto[] = [
  { id: 'hegmataneh', src: t('a/a5/Iran_-_Hamadan_-_Hegmataneh_-_%28Ecbatana%29_-_panoramio.jpg/960px-Iran_-_Hamadan_-_Hegmataneh_-_%28Ecbatana%29_-_panoramio.jpg'), page: f('Iran_-_Hamadan_-_Hegmataneh_-_(Ecbatana)_-_panoramio.jpg'), author: 'Alireza Javaheri', license: 'CC BY 3.0', licenseUrl: 'https://creativecommons.org/licenses/by/3.0', caption: B('تپهٔ هگمتانه در همدان. هرودوت ساختن هگمتانه را به دیااکو نسبت می‌دهد.', 'The Hegmataneh mound in Hamadan. Herodotus credits Deioces with building Ecbatana.') },
  { id: 'sargon', src: t('5/50/Sargon_II_and_dignitary.jpg/960px-Sargon_II_and_dignitary.jpg'), page: f('Sargon_II_and_dignitary.jpg'), author: 'Unknown Assyrian artist (photo on Commons)', license: 'Public domain', caption: B('سارگون دوم، شاه آشور، و یک بلندپایه؛ نقش‌برجسته‌ای از کاخ او در دورشروکین (خرسآباد). سالنامه‌های همین شاه از «دایوکو» نام می‌برند.', 'Sargon II of Assyria and a dignitary, a relief from his palace at Dur-Sharrukin (Khorsabad). This king’s annals name a “Daiukku”.') },
  { id: 'kishesim', src: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Khorsabad_Salle_II_bas_relief_22_attaque_d%27une_cit%C3%A9_m%C3%A8de.jpg', page: f("Khorsabad_Salle_II_bas_relief_22_attaque_d'une_cité_mède.jpg"), author: 'Eugène Flandin (1809–1899)', license: 'Public domain', caption: B('سپاه سارگون دوم به شهر مادی کیشسیم می‌تازد؛ طرح فلاندن از نقش‌برجسته‌ای در دورشروکین', 'Sargon II’s army attacks the Median town of Kishesim; Flandin’s drawing of a relief at Dur-Sharrukin') },
]

const hdtOnly = note('تنها روایت هرودوت است و هیچ سند هم‌زمانی آن را تأیید نمی‌کند. اشمیت آن را «نامعتبر از نظر تاریخی» می‌داند.', 'Only Herodotus tells this and no contemporary document confirms it. Schmitt calls his account “not historically reliable”.')

export const deiocesEvents = [
  ev('election', -727, B('حدود ۷۲۷ پ.م. (سنتی)', 'c. 727 BCE (traditional)'), 'admin', ECBATANA, B('برگزیده به شاهی، به روایت هرودوت', 'Chosen king, according to Herodotus'), B('به روایت هرودوت، مادها در دهکده‌های جدا زندگی می‌کردند و بی‌قانونی همه جا بود. دیااکو در دهکدهٔ خود داور دادگری شد. سپس از داوری دست کشید، بی‌قانونی بدتر شد و مادها گرد آمدند و او را به شاهی برگزیدند.', 'According to Herodotus, the Medes lived in separate villages and lawlessness was everywhere. Deioces became a just judge in his own village. Then he stopped judging, lawlessness grew worse, and the Medes assembled and chose him as king.'), 'disputed', ['hdt', 'schmitt-ir', 'diakonoff-chi'], note('سال ۷۲۷ پیشنهاد دیاکونوف است که از برآمدن کوروش به عقب شمرده؛ اشمیت می‌گوید سال‌های دقیق پادشاهی او را نمی‌توان داد.', 'The year 727 is Diakonoff’s suggestion, counted back from the rise of Cyrus; Schmitt says exact dates for the reign cannot be given.')),
  ev('ecbatana', -727, B('پس از برگزیده شدن (بی‌تاریخ)', 'after his election (undated)'), 'building', ECBATANA, B('هگمتانه با هفت بارو، به روایت هرودوت', 'Ecbatana of seven walls, according to Herodotus'), B('به روایت هرودوت، دیااکو مادها را واداشت یک شهر بسازند: هفت باروی تودرتو، هر کدام به رنگی، و کاخ و گنجخانه در درونی‌ترین حلقه. مردم بیرون بارو زندگی می‌کردند.', 'According to Herodotus, Deioces made the Medes build one city: seven concentric walls, each a different colour, with the palace and treasuries in the innermost ring. The people lived outside the wall.'), 'disputed', ['hdt', 'schmitt-ir'], hdtOnly),
  ev('daiukku', -715, B('۷۱۵ پ.م.', '715 BCE'), 'campaign', ZARRINRUD, B('دایوکو در سالنامه‌های سارگون', 'Daiukku in Sargon’s annals'), B('سالنامه‌های سال هشتم سارگون دوم از دایوکو، فرماندار (شَکنو) یک استان مانایی، نام می‌برند. او از روسای یکم، شاه اورارتو، در برابر اولوسونو، شاه مانا، پشتیبانی کرد. پسرش گروگان اورارتوییان بود. جای استانش شاید درهٔ زرینه‌رود بود.', 'The annals of Sargon II’s eighth year name Daiukku, governor (šaknu) of a Mannean province. He backed Rusa I of Urartu against Ullusunu, king of Mannea. His son was a hostage of the Urartians. His district was perhaps in the Zarrinrud valley.'), 'secure', ['luckenbill1927', 'lie1929', 'schmitt-ir'], note('خود رویداد در سالنامه‌هاست؛ اما اشمیت می‌گوید «حتی یک منبع میخی معتبر» نیست که نشان دهد این دایوکو همان دیااکوی هرودوت است.', 'The event itself is in the annals; but Schmitt says there is “not a single authentic cuneiform source” showing this Daiukku was Herodotus’ Deioces.')),
  ev('exile', -715, B('۷۱۵ پ.م.', '715 BCE'), 'campaign', HAMATH, B('تبعید به حماة', 'Exile to Hamath'), B('سارگون دخالت کرد، دایوکو را گرفت و او و خانواده‌اش را به حماة در سوریه تبعید کرد.', 'Sargon intervened, captured Daiukku, and exiled him and his family to Hamath in Syria.'), 'secure', ['luckenbill1927', 'lie1929', 'schmitt-ir'], { route: [ZARRINRUD, DUR_SHARRUKIN, HAMATH], ...note('راه تبعید در سالنامه‌ها نیامده و خط طرح‌وار است.', 'The annals do not give the route of the exile; the line is a sketch.') }),
  ev('death', -675, B('حدود ۶۷۵ پ.م. (سنتی)', 'c. 675 BCE (traditional)'), 'admin', ECBATANA, B('مرگ پس از ۵۳ سال، به روایت هرودوت', 'Death after 53 years, according to Herodotus'), B('به روایت هرودوت، دیااکو پس از ۵۳ سال پادشاهی درگذشت و پسرش فرورتیش جانشین او شد.', 'According to Herodotus, Deioces died after a reign of fifty-three years and his son Phraortes succeeded him.'), 'disputed', ['hdt', 'schmitt-ir', 'diakonoff-chi'], note('۵۳ سال و سال ۶۷۵ هر دو از شمارش هرودوت است. دیاکونوف حتی گمان می‌برد شاهی که داستان هرودوت بر او متمرکز است، در اصل پسرش فرورتیش بوده است.', 'Both the 53 years and the year 675 come from Herodotus’ count. Diakonoff even suspects the king at the centre of Herodotus’ story was really his son Phraortes.')),
]

const greedQuote: DossierQuote = { text: 'Deioces was infatuated with sovereignty, and so he set about gaining it.', fa: 'دیااکو شیفتهٔ فرمانروایی بود و برای به دست آوردنش دست به کار شد.', ref: 'Herodotus 1.96.2, tr. A. D. Godley (1920)', source: 'hdt' }
const kingQuote: DossierQuote = { text: 'Since we cannot go on living in the present way in the land, come, let us set up a king over us; in this way the land will be well governed, and we ourselves shall attend to our business and not be routed by lawlessness.', fa: 'چون نمی‌توانیم در این سرزمین به همین شیوه زندگی کنیم، بیایید شاهی بر خود بگماریم؛ این‌گونه سرزمین خوب اداره می‌شود و ما خود به کار خویش می‌رسیم و بی‌قانونی ما را از پا درنمی‌آورد.', ref: 'Herodotus 1.97.3, tr. A. D. Godley (1920)', source: 'hdt' }
const wallsQuote: DossierQuote = { text: 'So he built the big and strong walls, one standing inside the next in circles, which are now called Ecbatana.', fa: 'پس باروهای بزرگ و استوار را ساخت، یکی درون دیگری به شکل حلقه، که اکنون هگمتانه نامیده می‌شود.', ref: 'Herodotus 1.98.3, tr. A. D. Godley (1920)', source: 'hdt' }
const spiesQuote: DossierQuote = { text: 'and he had spies and eavesdroppers everywhere in his domain.', fa: 'و در سراسر قلمرو خود جاسوسان و گوش‌ایستادگان داشت.', ref: 'Herodotus 1.100.2, tr. A. D. Godley (1920)', source: 'hdt' }
const brownQuote: DossierQuote = { text: 'it is improbable in the extreme that a Mede who was the governor of a Mannean province for less than a year . . . could have become associated . . . with the founding of the Median state.', fa: 'بسیار بعید است که مادی‌ای که کمتر از یک سال فرماندار یک استان مانایی بود … با بنیاد دولت ماد پیوند خورده باشد.', ref: 'S. C. Brown (1988), p. 76, as quoted by R. Schmitt, Encyclopaedia Iranica', source: 'brown1988' }

export const deiocesDossier: DossierSection[] = [
  sec('sources', 'منابع: دو لایهٔ جدا', 'Sources: two separate layers',
    [['دربارهٔ دیااکو دو گونه منبع داریم و آن‌ها را جدا نگه می‌داریم. لایهٔ یکم روایت هرودوت (۱.۹۶–۱۰۲) است که حدود دویست سال بعد نوشته شد. نویسندگان یونانی پسین تقریباً چیزی به آن نیفزوده‌اند. لایهٔ دوم سالنامه‌های سارگون دوم، شاه آشور، است که از مردی به نام دایوکو در سال ۷۱۵ پ.م. نام می‌برند.'], ['There are two kinds of source on Deioces and we keep them apart. The first layer is Herodotus’ account (1.96–102), written some two centuries later. Later Greek writers added almost nothing to it. The second layer is the annals of Sargon II of Assyria, which name a man called Daiukku in 715 BCE.']],
    [['اشمیت می‌گوید روایت هرودوت شاید بر پایهٔ سنتی شفاهی است، اما «آمیزه‌ای از افسانه‌های یونانی و شرقی است و از نظر تاریخی معتبر نیست». پس هر چه از هرودوت می‌آید با برچسب «به روایت هرودوت» آمده و هیچ‌کدام «قطعی» نیست.'], ['Schmitt says Herodotus’ account may rest on an oral tradition, but it “is a mixture of Greek and eastern legends and is not historically reliable”. So everything from Herodotus is labelled “according to Herodotus” and none of it is marked secure.']],
    [['بنیادگذار نخستین دولت ایرانی را تنها از داستان یک یونانی می‌شناسیم. این خود درسی است: آغازها را بیشتر افسانه‌ها نگه می‌دارند تا سندها.'], ['We know the founder of the first Iranian state only from a Greek’s story. That is a lesson in itself: beginnings are kept more by legends than by documents.']],
    ['hdt', 'schmitt-ir', 'luckenbill1927']),
  sec('herodotus', 'داستان هرودوت: از داور تا شاه', 'Herodotus’ story: from judge to king',
    [[
      '۱. به روایت هرودوت، دیااکو پسر فرورتیش بود و در دهکدهٔ خود مردی سرشناس.',
      '۲. در روزگار بی‌قانونی، داوری دادگر شد و مردم دهکده‌های دیگر هم نزد او آمدند.',
      '۳. سپس گفت داوری برایش سودی ندارد و از آن دست کشید. دزدی و بی‌قانونی بیشتر شد.',
      '۴. مادها گرد آمدند؛ هرودوت گمان می‌کند دوستان دیااکو بیشتر سخن گفتند. او را به شاهی برگزیدند.',
      '۵. نگهبان و کاخ خواست؛ سپس هگمتانه را با هفت بارو ساخت.',
      '۶. آیین دربار گذاشت: کسی شاه را نبیند، همه کار با پیک باشد، و خندیدن و تف کردن نزد او ننگ باشد.',
      '۷. دادخواهی‌ها را نوشته می‌گرفت و حکم را بیرون می‌فرستاد، و همه جا جاسوس داشت.',
    ], [
      '1. According to Herodotus, Deioces was the son of Phraortes and a notable man in his own town.',
      '2. In a time of lawlessness he became a just judge, and people from other towns came to him too.',
      '3. Then he said judging brought him no advantage and stopped. Robbery and lawlessness increased.',
      '4. The Medes assembled; Herodotus supposes Deioces’ friends did most of the talking. They chose him king.',
      '5. He asked for a bodyguard and a palace; then he built Ecbatana with seven walls.',
      '6. He set up court rules: no one should see the king, all business went through messengers, and laughing or spitting before him was a disgrace.',
      '7. He received pleas in writing, sent his judgments out, and had spies everywhere.',
    ]],
    [['اشمیت می‌گوید پژوهشگران از این داستان نتیجه گرفته‌اند دیااکو بنیادگذار دودمان ماد و نخستین شاه ماد بود که از آشور جدا شد؛ اما خود داستان معتبر نیست. «دیدبانان و شنوندگان» او را پیش‌درآمد «چشم و گوش شاه» در دورهٔ هخامنشی می‌داند.'], ['Schmitt says scholars have deduced from this story that Deioces founded the Median dynasty and was the first Median king to break from Assyria; but the story itself is not reliable. He sees the “watchers and listeners” as forerunners of the Achaemenid “king’s eyes” and “ears”.']],
    [['هرودوت داستان را آگاهانه دوپهلو می‌گوید: دیااکو دادگر بود، اما چون قدرت می‌خواست. این داستان دربارهٔ چگونگی زاده شدن قدرت است، نه گزارش یک رویداد.'], ['Herodotus tells the story with deliberate double edges: Deioces was just, but because he wanted power. It is a story about how power is born, not a report of an event.']],
    ['hdt', 'schmitt-ir'], { quotes: [greedQuote, spiesQuote] }),
  sec('assyria', 'سند آشوری: دایوکوی سارگون', 'The Assyrian evidence: Sargon’s Daiukku',
    [['جرج اسمیت در ۱۸۶۹ دید که نام دایوکو چند بار در متن‌های سارگون دوم آمده است. در سالنامه‌های سال هشتم (۷۱۵ پ.م.) و «کتیبهٔ نمایش» خرسآباد، دایوکو فرماندار (شَکنو) یک استان مانایی است. او از روسای یکم اورارتو در برابر اولوسونو، شاه مانا، پشتیبانی کرد؛ سارگون او را گرفت و با خانواده‌اش به حماة تبعید کرد.'], ['George Smith noticed in 1869 that the name Daiukku appears several times in the texts of Sargon II. In the annals of the eighth year (715 BCE) and the Khorsabad Display Inscription, Daiukku is governor (šaknu) of a Mannean province. He backed Rusa I of Urartu against Ullusunu, king of Mannea; Sargon captured him and exiled him and his family to Hamath.']],
    [['اشمیت می‌گوید «خاندان دیااکو» (بیت دایوکو) که بازسازی‌های پیشین بر آن تکیه داشتند، اصلاً وجود نداشت: از بدخوانی «سرزمین مادها» در سالنامه‌های سال ۷۱۳ پدید آمد. هر پیوندی میان این فرماندار و دودمان ماد «تنها فرضی» است. تنها شباهت نام است که دو لایه را به هم نزدیک می‌کند؛ نام *دهیوکه بعدها هم رایج بود و در لوح‌های باروی تخت جمشید برای کارگزاران گوناگون آمده است.'], ['Schmitt says the “House of Deioces” (Bit-Daiukku), on which earlier reconstructions relied, never existed: it came from a misreading of “the land of the Medes” in the annals for 713. Any link between this governor and the Median dynasty is “only hypothetical”. Only the name brings the two layers together, and *Dahyuka- remained common later, appearing for various officials in the Persepolis Fortification Tablets.']],
    [['این بخش نشان می‌دهد تاریخ‌نگاری چگونه کار می‌کند: یک بدخوانی می‌تواند یک «خاندان» بسازد، و یک خوانش دقیق‌تر آن را پاک کند.'], ['This section shows how history-writing works: one misreading can create a “house”, and a more careful reading can erase it.']],
    ['luckenbill1927', 'lie1929', 'schmitt-ir', 'brown1988'], { photos: ['sargon', 'kishesim'], quotes: [brownQuote] }),
  sec('ecbatana', 'هگمتانه و آیین دربار', 'Ecbatana and the court',
    [['به روایت هرودوت، هگمتانه هفت باروی تودرتو داشت، هر کدام بلندتر از بیرونی. کنگره‌های پنج بارو رنگ داشتند: سفید، سیاه، ارغوانی، آبی و نارنجی؛ دو باروی درونی سیم‌اندود و زراندود بودند. درازترین بارو به اندازهٔ باروی آتن بود.'], ['According to Herodotus, Ecbatana had seven concentric walls, each higher than the one outside it. The battlements of five walls were coloured white, black, purple, blue and orange; the two inner walls were coated with silver and gold. The longest wall was about the length of the wall of Athens.']],
    [['این توصیف تنها از هرودوت است. اشمیت هگمتانه را همان هگمتانهٔ فارسی باستان و همدان امروز می‌داند، اما برای هفت بارو گواه دیگری نمی‌آورد. پس آن را تصویری ادبی می‌گیریم، نه نقشهٔ یک شهر.'], ['This description comes only from Herodotus. Schmitt identifies the city with Old Persian Hagmatāna and modern Hamadan, but cites no other evidence for the seven walls. So we take it as a literary picture, not the plan of a city.']],
    [['در داستان هرودوت شاه پشت هفت بارو پنهان می‌شود تا مردم او را «از گونه‌ای دیگر» بپندارند. فاصله گرفتن قدرت از مردم، از همان آغاز در این داستان هست.'], ['In Herodotus’ story the king hides behind seven walls so that people think him “different”. The distance between power and people is in the story from the very start.']],
    ['hdt', 'schmitt-ir'], { photos: ['hegmataneh'], quotes: [wallsQuote] }),
  sec('property', 'دارایی و آزادی: داوری، شاهی و هزینهٔ امنیت', 'Property and liberty: justice, kingship and the price of order',
    [['به روایت هرودوت، مادها شاه را برگزیدند تا «سرزمین خوب اداره شود» و خود «به کار خویش برسند». در برابر، شاه کاخ، نگهبان، شهری که مردم با کار خود ساختند، و جاسوسانی در همه جا گرفت.'], ['According to Herodotus, the Medes chose a king so that “the land will be well governed” and they could “attend to our business”. In return the king got a palace, a bodyguard, a city the people built with their own labour, and spies everywhere.']],
    [['این خوانش ماست: داستان هرودوت مثلی است دربارهٔ سرچشمهٔ دولت. مردم برای امنیت دارایی و کار خود داوری می‌خواستند؛ داوری که داوری را دریغ کرد، بهای آن را به شکل قدرت مطلق گرفت. این مثل است، نه تاریخ.'], ['This is our reading: Herodotus’ story is a parable about the origin of the state. People wanted arbitration to keep their property and work safe; a judge who withheld judgment took its price in the form of absolute power. It is a parable, not history.']],
    [['پرسش داستان هنوز زنده است: چگونه می‌توان داوری بی‌طرف داشت بی‌آنکه داور فرمانروای بی‌مهار شود؟'], ['The story’s question is still alive: how can people have impartial justice without the judge becoming an unchecked ruler?']],
    ['hdt', 'schmitt-ir'], { quotes: [kingQuote] }),
  sec('family', 'نام، خانواده و جانشینی', 'Name, family and succession',
    [[
      'نام: یونانی دِیوکِس، آشوری دایوکو، ایلامی دَیَوکه؛ همه از ایرانی *دَهیوکه، نامی خودمانی از «دَهیو» یعنی «سرزمین».',
      'به روایت هرودوت: پسر فرورتیش، پدر فرورتیش و پدربزرگ هووخشتره.',
      'جانشین: پسرش فرورتیش، که به روایت هرودوت پارسیان را زیر فرمان آورد و در جنگ با آشور کشته شد.',
    ], [
      'Name: Greek Dēïókēs, Assyrian Daiukku, Elamite Dayauka; all from Iranian *Dahyuka-, a pet name built on dahyu-, “land”.',
      'According to Herodotus: son of Phraortes, father of Phraortes, and grandfather of Cyaxares.',
      'Successor: his son Phraortes, who according to Herodotus subdued the Persians and died fighting Assyria.',
    ]],
    [['دیاکونوف گمان می‌برد شاهی که داستان هرودوت بر او متمرکز است در اصل فرورتیش بوده است. پس حتی نسب‌نامهٔ این دودمان محل بحث است.'], ['Diakonoff suspects that the king at the centre of Herodotus’ story was really Phraortes. So even the family tree of this dynasty is disputed.']],
    [['نامی که «سرزمین» معنا می‌دهد، برای بنیادگذار افسانه‌ای یک کشور نامی درخور است.'], ['A name that means “land” is a fitting name for the legendary founder of a country.']],
    ['schmitt-ir', 'hdt', 'diakonoff-chi']),
]

export const deioces: FeaturedKing = {
  slug: 'deioces',
  name: B('دیااکو', 'Deioces'),
  dynastyName: B('ماد', 'The Medes'),
  reign: B('حدود ۷۲۷–۶۷۵ پ.م. (سنتی)', 'c. 727–675 BCE (traditional)'),
  title: B('دیااکو؛ بنیادگذار ماد در روایت هرودوت', 'Deioces: the founder of Media in Herodotus’ tradition'),
  lede: B(
    'هرودوت می‌گوید مادها داوری دادگر به نام دیااکو را به شاهی برگزیدند و او هگمتانه را با هفت بارو ساخت. این روایتی سنتی است و اشمیت آن را نامعتبر می‌داند. جدا از آن، سالنامه‌های سارگون دوم از دایوکو، فرمانداری مانایی، نام می‌برند که در ۷۱۵ پ.م. تبعید شد؛ هیچ سندی نشان نمی‌دهد این دو یکی‌اند.',
    'Herodotus says the Medes chose a just judge named Deioces as king and that he built Ecbatana with seven walls. This is a traditional account, and Schmitt judges it unreliable. Separately, the annals of Sargon II name Daiukku, a Mannean governor exiled in 715 BCE; no document shows the two were the same man.',
  ),
  stats: [
    { n: B('۵۳ سال', '53 years'), l: B('پادشاهی، به روایت هرودوت', 'reign, per Herodotus') },
    { n: B('۷', '7'), l: B('باروی هگمتانه، به روایت هرودوت', 'walls of Ecbatana, per Herodotus') },
    { n: B('۷۱۵', '715'), l: B('دایوکو در سالنامهٔ سارگون (پ.م.)', 'Daiukku in Sargon’s annals (BCE)') },
    { n: B('۰', '0'), l: B('سند هم‌زمان از خود دیااکو', 'contemporary documents of his own') },
  ],
  mapTitle: B('نقشهٔ متحرک: روایت و سند', 'Animated map: tradition and evidence'),
  events: deiocesEvents,
  span: [-727, -675],
  dossier: deiocesDossier,
  synthesis: { title: B('جمع‌بندی: بنیادگذاری که در داستان زنده است', 'Synthesis: a founder who lives in a story'), paras: {
    fa: [
      'دیااکوی هرودوت شاید هرگز به این شکل نزیسته باشد. آنچه می‌دانیم این است: نام دایوکو در سالنامه‌های آشوری هست، اما برای فرمانداری مانایی که تبعید شد، نه برای بنیادگذار یک دولت. داستان هرودوت را باید سنت دانست، نه گزارش.',
      'با این همه، داستان او پرسشی ماندگار دارد: مردم برای داوری و امنیت دارایی خود شاه برگزیدند و بهایش را با آزادی پرداختند. این پرسش از هر سند تاریخی دیرپاتر است.',
    ],
    en: [
      'Herodotus’ Deioces may never have lived in this form. What we know is this: the name Daiukku is in the Assyrian annals, but for a Mannean governor who was exiled, not for the founder of a state. Herodotus’ story must be read as tradition, not report.',
      'Even so, his story carries a lasting question: people chose a king for justice and the safety of their property, and paid for it with their liberty. That question outlives any historical document.',
    ],
  }, sources: ['schmitt-ir', 'hdt'] },
  sources: deiocesSources,
  photos: deiocesPhotos,
  related: [
    { href: { fa: '/king/cyaxares', en: '/en/king/cyaxares' }, label: B('هووخشتره، نوه‌اش به روایت هرودوت', 'Cyaxares, his grandson per Herodotus') },
    { href: { fa: '/king/phraortes', en: '/king/phraortes' }, label: B('فرورتیش، پسرش', 'Phraortes, his son') },
    { href: { fa: '/dynasty/medes', en: '/dynasty/medes' }, label: B('دودمان ماد', 'The Median dynasty') },
  ],
  wikipedia: 'https://en.wikipedia.org/wiki/Deioces',
}
