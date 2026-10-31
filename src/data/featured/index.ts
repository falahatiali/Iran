import { shutrukNakhunte } from '../shutruk'
import { shilhakInshushinak } from '../shilhak'
import { deioces } from '../deioces'
import { cyaxares } from '../cyaxares'
import { yaqub } from '../yaqub'
import { adud } from '../adud'
import { mahmud } from '../mahmud'
import { alpArslan } from '../alp'
import { malikShah } from '../malikshah'
import { muhammadKh, jalalAlDin } from '../khwarazm'
import { hulagu, ghazan } from '../ilkhan'
import { timur } from '../timurid'
import { uzunHasan } from '../turkmen'
import { abbasI, ismailI } from '../safavid'
import { ismail } from '../ismail'
import { astyages } from '../astyages'
import type { FeaturedKing } from './types'
import { dariusEvents, dariusSources, dossier as dariusDossier, synthesis as dariusSynthesis } from '../darius'
import { xerxesBattles, xerxesCampaign, xerxesDossier, xerxesEvents, xerxesPhotos, xerxesPlaces, xerxesSources, xerxesSynthesis } from '../xerxes'
import { artaxerxesCampaign, artaxerxesDossier, artaxerxesEvents, artaxerxesPhotos, artaxerxesPlaces, artaxerxesSources, artaxerxesSynthesis } from '../artaxerxes'
import { lateKings } from '../late-achaemenid'
import { arsacidKings } from '../arsacid'
import { sasanianKings } from '../sasanian'
import { untashDossier, untashEvents, untashPhotos, untashSources, untashSynthesis } from '../untash'

export * from './types'

const darius: FeaturedKing = {
  slug: 'darius-i',
  name: { fa: 'داریوش بزرگ', en: 'Darius I the Great' },
  dynastyName: { fa: 'هخامنشیان', en: 'Achaemenids' },
  reign: { fa: '۵۲۲–۴۸۶ پ.م.', en: '522–486 BCE' },
  title: { fa: 'داریوش بزرگ؛ شمشیر، قرارداد و مالکیت', en: 'Darius the Great: sword, contract and property' },
  lede: {
    fa: 'داریوش یکم با کودتا و نوزده نبرد به تخت رسید و سپس بزرگ‌ترین نظم اداری جهان باستان را ساخت: خراج معین، سکهٔ شاهی، راه‌ها، بایگانی‌ها و احترام به قانون‌های محلی. جنگ‌ها و ساخته‌هایش را روی نقشهٔ متحرک دنبال کنید و سپس دوران او را با عینک حقوق مالکیت و آزادی فردی بسنجید، با شواهد تاریخی، تفسیر ما و معنای امروز در سه لایهٔ جدا.',
    en: 'Darius I came to the throne by a coup and nineteen battles, then built the largest administrative order of the ancient world: fixed tribute, royal coinage, roads, archives and respect for local law. Follow his wars and works on the animated map, then weigh his reign through the lens of property rights and individual liberty — historical evidence, our interpretation and modern meaning kept in three separate layers.',
  },
  stats: [
    { n: { fa: '۱۹', en: '19' }, l: { fa: 'نبرد در «یک سال» (به ادعای بیستون)', en: 'battles in “one year” (Behistun’s claim)' } },
    { n: { fa: '~۳۰', en: '~30' }, l: { fa: 'سرزمین در فهرست نقش‌رستم', en: 'lands in the Naqsh-e Rostam list' } },
    { n: { fa: '۱۱۱', en: '111' }, l: { fa: 'منزل در راه شاهی سارد–شوش', en: 'stations on the Sardis–Susa road' } },
    { n: { fa: '۳۶', en: '36' }, l: { fa: 'سال پادشاهی', en: 'years of reign' } },
  ],
  mapTitle: { fa: 'نقشهٔ متحرک: جنگ‌ها و ساخته‌ها', en: 'Animated map: wars and works' },
  events: dariusEvents,
  span: [-522, -486],
  dossier: dariusDossier,
  synthesis: dariusSynthesis,
  sources: dariusSources,
  related: [
    { href: { fa: '/place/bisotun', en: '/en/place/bisotun' }, label: { fa: 'بیستون: کوه، نقش و کتیبه', en: 'Bisotun: the mountain, relief and inscription' } },
    { href: { fa: '/archives', en: '/en/archives' }, label: { fa: 'بایگانی تخت‌جمشید', en: 'The Persepolis archives' } },
    { href: { fa: '/cylinder', en: '/en/cylinder' }, label: { fa: 'استوانهٔ کوروش', en: 'The Cyrus Cylinder' } },
  ],
  wikipedia: 'https://en.wikipedia.org/wiki/Darius_the_Great',
}

const untash: FeaturedKing = {
  slug: 'untash-napirisha',
  name: { fa: 'اونتاش‌ناپیریشا', en: 'Untash-Napirisha' },
  dynastyName: { fa: 'ایلام (دودمان ایگی‌هلکی)', en: 'Elam (Igihalkid dynasty)' },
  reign: { fa: 'حدود ۱۳۴۰–۱۳۰۰ پ.م.', en: 'c. 1340–1300 BCE' },
  title: { fa: 'اونتاش‌ناپیریشا؛ شاهی که با خشت سخن گفت', en: 'Untash-Napirisha: a king who spoke in bricks' },
  lede: {
    fa: 'شاه انشان و شوش، سازندهٔ شهر آل‌اونتاش‌ناپیریشا و زیگورات چغازنبیل، بزرگ‌ترین زیگورات شناخته‌شده بیرون از میان‌رودان. او را تقریباً فقط از خشت‌های نوشته‌دار و تندیس‌ها می‌شناسیم؛ پس این پرونده جاهایی را که منابع خاموش‌اند، خاموش می‌گذارد. کارهایش را روی نقشهٔ متحرک دنبال کنید و دورانش را با عینک حقوق مالکیت بسنجید، با شواهد، تفسیر و معنای امروز در سه لایهٔ جدا.',
    en: 'King of Anshan and Susa, builder of the city of Al-Untash-Napirisha and the Chogha Zanbil ziggurat, the largest known ziggurat outside Mesopotamia. We know him almost only from inscribed bricks and statues, so this dossier leaves silent what the sources leave silent. Follow his works on the animated map, then weigh his reign through a property-rights lens, with evidence, interpretation and modern meaning in three separate layers.',
  },
  stats: [
    { n: { fa: '۱۰۵ م', en: '105 m' }, l: { fa: 'ضلع زیگورات', en: 'side of the ziggurat' } },
    { n: { fa: '~۵۳ م', en: '~53 m' }, l: { fa: 'بلندی اصلی (بازسازی)', en: 'original height (reconstructed)' } },
    { n: { fa: '~۱۸', en: '~18' }, l: { fa: 'خدا با معبد بازسازی‌شده در شوش', en: 'gods with rebuilt temples at Susa' } },
    { n: { fa: '۱۹۷۹', en: '1979' }, l: { fa: 'ثبت در میراث جهانی یونسکو', en: 'UNESCO World Heritage listing' } },
  ],
  mapTitle: { fa: 'نقشهٔ متحرک: ساخته‌ها و پیوندها', en: 'Animated map: works and alliances' },
  events: untashEvents,
  span: [-1340, -1300],
  dossier: untashDossier,
  synthesis: untashSynthesis,
  sources: untashSources,
  photos: untashPhotos,
  related: [
    { href: { fa: '/dynasty/elam', en: '/dynasty/elam' }, label: { fa: 'دودمان ایلام', en: 'The Elamite dynasty' } },
    { href: { fa: '/timeline', en: '/timeline' }, label: { fa: 'خط زمان', en: 'Timeline' } },
  ],
  wikipedia: 'https://en.wikipedia.org/wiki/Untash-Napirisha',
}

const clip = (ext: string) => ({ fa: `/media/xerxes/war-fa.${ext}`, en: `/media/xerxes/war-en.${ext}` })
const xerxes: FeaturedKing = {
  slug: 'xerxes-i',
  name: { fa: 'خشایارشا', en: 'Xerxes I' },
  dynastyName: { fa: 'هخامنشیان', en: 'Achaemenids' },
  reign: { fa: '۴۸۶–۴۶۵ پ.م.', en: '486–465 BCE' },
  title: { fa: 'خشایارشا؛ سازندهٔ دروازهٔ ملل و جنگ بزرگ با یونان', en: 'Xerxes I: builder of the Gate of All Nations and the great war with Greece' },
  lede: {
    fa: 'پسر داریوش و نوهٔ کوروش، که امپراتوری را نگه داشت، شورش‌های مصر و بابل را خواباند، تخت‌جمشید را به اوج رساند و در ۴۸۰ پ.م. به یونان لشکر کشید. زندگی‌اش را به ترتیب دنبال کنید، جنگ یونان را گام‌به‌گام روی نقشهٔ متحرک و در نمودار نبردهای ترموپیل و سالامیس ببینید، و دورانش را با عینک حقوق مالکیت و آزادی فردی بسنجید، با شواهد، تفسیر و معنای امروز در سه لایهٔ جدا. هر جا روایت یونانی است یا محل بحث، گفته‌ایم.',
    en: 'Son of Darius and grandson of Cyrus, he held the empire together, put down revolts in Egypt and Babylon, brought Persepolis to its peak and invaded Greece in 480 BCE. Follow his life in order, watch the Greek war step by step on the animated map and in diagrams of Thermopylae and Salamis, then weigh his reign through the lens of property rights and individual liberty, with evidence, interpretation and modern meaning in three separate layers. Wherever a story is Greek or disputed, we say so.',
  },
  stats: [
    { n: { fa: '۲۱', en: '21' }, l: { fa: 'سال پادشاهی', en: 'years of reign' } },
    { n: { fa: '۱٬۲۰۷', en: '1,207' }, l: { fa: 'کشتی جنگی به گفتهٔ هرودوت', en: 'warships, per Herodotus' } },
    { n: { fa: '۷ روز', en: '7 days' }, l: { fa: 'گذر از هلسپونت (هرودوت ۷.۵۶)', en: 'to cross the Hellespont (Hdt 7.56)' } },
    { n: { fa: '۴۶۵', en: '465' }, l: { fa: 'سال قتل در کاخ (پ.م.)', en: 'murdered in the palace (BCE)' } },
  ],
  mapTitle: { fa: 'نقشهٔ متحرک: زندگی خشایارشا', en: 'Animated map: the life of Xerxes' },
  events: xerxesEvents,
  span: [-518, -464],
  campaign: {
    id: 'war',
    title: { fa: 'جنگ یونان، گام‌به‌گام (۴۹۹–۴۷۹ پ.م.)', en: 'The Greek war, step by step (499–479 BCE)' },
    intro: {
      fa: ['خط نارنجی راه سپاه و خط آبی خط‌چین راه ناوگان است. هر گام می‌گوید قطعی، محتمل یا محل بحث است. تقریباً همهٔ جزئیات از هرودوت است که یونانی و نیم‌قرن پس از جنگ می‌نوشت؛ ارقام او را ادعای او می‌دانیم.'],
      en: ['The coloured line is the army’s route and the dashed blue line the fleet’s. Each step says whether it is secure, probable or disputed. Almost every detail comes from Herodotus, a Greek writing half a century later; we treat his numbers as his claim.'],
    },
    events: xerxesCampaign,
    span: [-499, -479],
    view: [21.6, 36.9, 28.6, 41.2],
    places: xerxesPlaces,
    clip: { gif: clip('gif'), mp4: clip('mp4'), webm: clip('webm'), poster: clip('png'), width: 800, height: 298 },
    battles: xerxesBattles,
  },
  shareImage: '/media/xerxes/war-en.png',
  dossier: xerxesDossier,
  synthesis: xerxesSynthesis,
  sources: xerxesSources,
  photos: xerxesPhotos,
  related: [
    { href: { fa: '/king/darius-i', en: '/en/king/darius-i' }, label: { fa: 'داریوش بزرگ، پدرش', en: 'Darius the Great, his father' } },
    { href: { fa: '/archives', en: '/en/archives' }, label: { fa: 'بایگانی تخت‌جمشید', en: 'The Persepolis archives' } },
    { href: { fa: '/dynasty/achaemenids', en: '/dynasty/achaemenids' }, label: { fa: 'دودمان هخامنشی', en: 'The Achaemenid dynasty' } },
  ],
  wikipedia: 'https://en.wikipedia.org/wiki/Xerxes_I',
}

const aclip = (ext: string) => ({ fa: `/media/artaxerxes-i/reign-fa.${ext}`, en: `/media/artaxerxes-i/reign-en.${ext}` })
const artaxerxes: FeaturedKing = {
  slug: 'artaxerxes-i',
  name: { fa: 'اردشیر یکم (درازدست)', en: 'Artaxerxes I Longimanus' },
  dynastyName: { fa: 'هخامنشیان', en: 'Achaemenids' },
  reign: { fa: '۴۶۵–۴۲۴/۴۲۳ پ.م.', en: '465–424/423 BCE' },
  title: { fa: 'اردشیر درازدست؛ شاه بزرگ، چهل سال میان جنگ و صلح', en: 'Artaxerxes Longhand: Great King, forty years between war and peace' },
  lede: {
    fa: 'پسر خشایارشا که پس از قتل پدر، با کشتن برادر و اردوان به تخت رسید و یونانیان او را «درازدست» خواندند. شورش مصر و ناوگان آتن را شکست داد، به روایت دیودور با آتن صلح کرد، تمیستوکلس را پناه داد، عزرا و نحمیا را (به روایت کتاب مقدس) به اورشلیم فرستاد و تالار صدستون را تمام کرد. بایگانی موراشو از دوران او بهترین شاهد زمین، اجاره و وام در جهان هخامنشی است. زندگی‌اش را به ترتیب و جنگ و صلح غرب را روی نقشهٔ متحرک ببینید، با شواهد، تفسیر و معنای امروز در سه لایهٔ جدا. هر جا منابع ناسازگارند، گفته‌ایم.',
    en: 'The son of Xerxes who, after his father’s murder, took the throne by killing his brother and Artabanus, and whom the Greeks called “Long-handed”. He crushed the Egyptian revolt and the Athenian fleet, made peace with Athens according to Diodorus, sheltered Themistocles, sent Ezra and Nehemiah to Jerusalem (in the biblical account) and finished the Hall of a Hundred Columns. The Murašû archive from his reign is the best evidence for land, leases and credit in the Achaemenid world. Follow his life in order and the western war and peace on the animated map, with evidence, interpretation and modern meaning in three separate layers. Wherever the sources conflict, we say so.',
  },
  stats: [
    { n: { fa: '۴۱', en: '41' }, l: { fa: 'سال پادشاهی (اسناد بابلی)', en: 'years of reign (Babylonian documents)' } },
    { n: { fa: '۶', en: '6' }, l: { fa: 'سال جنگ مصر (توکودیدس)', en: 'years of the Egyptian war (Thucydides)' } },
    { n: { fa: '~۷۳۰', en: '~730' }, l: { fa: 'لوح بایگانی موراشو', en: 'Murašû archive tablets' } },
    { n: { fa: '۳', en: '3' }, l: { fa: 'شاه در سال پس از مرگش', en: 'kings in the year after his death' } },
  ],
  mapTitle: { fa: 'نقشهٔ متحرک: زندگی اردشیر یکم', en: 'Animated map: the life of Artaxerxes I' },
  events: artaxerxesEvents,
  span: [-465, -424],
  campaign: {
    id: 'reign',
    title: { fa: 'جنگ و صلح در غرب، گام‌به‌گام (۴۶۰–۴۳۹ پ.م.)', en: 'War and peace in the west, step by step (460–439 BCE)' },
    intro: {
      fa: ['از شورش مصر و ناوگان آتن تا صلح کالیاس و ساموس. خط رنگی راه سپاه و خط آبی خط‌چین راه ناوگان است. هر گام می‌گوید قطعی، محتمل یا محل بحث است. ستون اصلی توکودیدس است، که آتنی بود.'],
      en: ['From the Egyptian revolt and the Athenian fleet to the Peace of Callias and Samos. The coloured line is the army’s route and the dashed blue line the fleet’s. Each step says whether it is secure, probable or disputed. The spine is Thucydides, an Athenian.'],
    },
    events: artaxerxesCampaign,
    span: [-460, -440],
    view: [21.2, 28.6, 37.6, 40.4],
    places: artaxerxesPlaces,
    clip: { gif: aclip('gif'), mp4: aclip('mp4'), webm: aclip('webm'), poster: aclip('png'), width: 800, height: 298 },
  },
  shareImage: '/media/artaxerxes-i/reign-en.png',
  dossier: artaxerxesDossier,
  synthesis: artaxerxesSynthesis,
  sources: artaxerxesSources,
  photos: artaxerxesPhotos,
  related: [
    { href: { fa: '/king/xerxes-i', en: '/en/king/xerxes-i' }, label: { fa: 'خشایارشا، پدرش', en: 'Xerxes I, his father' } },
    { href: { fa: '/king/darius-i', en: '/en/king/darius-i' }, label: { fa: 'داریوش بزرگ، پدربزرگش', en: 'Darius the Great, his grandfather' } },
    { href: { fa: '/dynasty/achaemenids', en: '/dynasty/achaemenids' }, label: { fa: 'دودمان هخامنشی', en: 'The Achaemenid dynasty' } },
  ],
  wikipedia: 'https://en.wikipedia.org/wiki/Artaxerxes_I',
}

/** Registry keyed by ruler slug. Add an entry here to give any king the extended page. */
export const featuredKings: Record<string, FeaturedKing> = { [untash.slug]: untash, [shutrukNakhunte.slug]: shutrukNakhunte, [shilhakInshushinak.slug]: shilhakInshushinak, [deioces.slug]: deioces, [cyaxares.slug]: cyaxares, [astyages.slug]: astyages, [darius.slug]: darius, [xerxes.slug]: xerxes, [artaxerxes.slug]: artaxerxes,
  ...Object.fromEntries(lateKings.map((k) => [k.slug, k])),
  ...Object.fromEntries(arsacidKings.map((k) => [k.slug, k])),
  ...Object.fromEntries(sasanianKings.map((k) => [k.slug, k])),
  [yaqub.slug]: yaqub,
  [ismail.slug]: ismail,
  [adud.slug]: adud,
  [mahmud.slug]: mahmud,
  [alpArslan.slug]: alpArslan,
  [malikShah.slug]: malikShah,
  [muhammadKh.slug]: muhammadKh,
  [jalalAlDin.slug]: jalalAlDin,
  [hulagu.slug]: hulagu,
  [timur.slug]: timur,
  [uzunHasan.slug]: uzunHasan,
  [ismailI.slug]: ismailI,
  [abbasI.slug]: abbasI,
  [ghazan.slug]: ghazan,
}

export function getFeaturedKing(slug: string): FeaturedKing | undefined {
  return Object.prototype.hasOwnProperty.call(featuredKings, slug) ? featuredKings[slug] : undefined
}
