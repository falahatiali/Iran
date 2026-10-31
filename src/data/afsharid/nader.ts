/**
 * Nader Shah Afshar, 1736–1747 CE, with the Afsharid successors in Khorasan to 1796.
 * Spine: E. Tucker, "Nāder Shah"; J. R. Perry, "Afsharids" (both Encyclopaedia Iranica).
 */
import type { DossierSection, FeaturedKing } from '../featured/types'
import { ev, note, sec } from '../late-achaemenid/common'
import { B, P, afPhotos, afSources } from './common'

const sketch = note('منابع راه دقیق را نمی‌گویند؛ خط‌ها طرح‌وارند.', 'The sources give no exact routes; the lines are sketches.')
const T = ['iranica-nader-shah']
const TP = ['iranica-nader-shah', 'iranica-afsharids']

export const naderEvents = [
  ev('birth', 1688, B('نوامبر ۱۶۸۸ م', 'November 1688 CE'), 'admin', P.DARRAGAZ, B('زاده در دره‌گز', 'Born at Darra Gaz'), B('در خانواده‌ای فروتن از دامداران، از تیرهٔ قرقلوی ایل افشار، در قشلاقشان در دره‌گز، شمال مشهد.', 'Into a humble pastoral family of the Qirqlu branch of the Afshar, at their winter camp in Darra Gaz, north of Mashhad.'), 'secure', TP),
  ev('abivard', 1723, B('حدود دههٔ ۱۷۲۰ م', 'c. 1720s CE'), 'admin', P.ABIVARD, B('آغاز کار در ابیورد', 'Starting out at Abivard'), B('در خدمت بابا علی‌بیگ، حاکم ابیورد، چنان کارآمد شد که حاکم دو دخترش را به او داد. پس از حملهٔ افغان‌ها (اصفهان ۱۷۲۲) با سرکردگان دیگر خراسان بر سر قدرت رقابت کرد.', 'He served Baba Ali Beg, ruler of Abivard, so well that he was given two of his daughters in marriage. After the Afghan invasion (Isfahan fell in 1722) he competed for power with other warlords of Khorasan.'), 'probable', T, note('تاکر سال دقیق نمی‌دهد و فقط می‌گوید «در همین زمان»، یعنی حدود ۱۷۲۳–۱۷۲۴.', 'Tucker gives no exact year, only “around this time”, i.e. about 1723–1724.')),
  ev('mashhad', 1726, B('۱۷۲۶ م', '1726 CE'), 'campaign', P.MASHHAD, B('سردار تهماسب دوم؛ گرفتن مشهد', 'Commander for Tahmasp II; Mashhad taken'), B('تهماسب دوم، مدعی صفوی، او را سردار خود کرد و لقب «تهماسب‌قلی» (بندهٔ تهماسب) گرفت. با هم مشهد را از ملک محمود سیستانی گرفتند.', 'Tahmasp II, the Safavid claimant, made him his chief commander and he took the title Tahmasp-qoli (“servant of Tahmasp”). Together they took Mashhad from Malek Mahmud Sistani.'), 'secure', TP),
  ev('mehmandust', 1729, B('۲۹ سپتامبر ۱۷۲۹ م', '29 September 1729 CE'), 'battle', P.MEHMANDUST, B('مهماندوست', 'Mehmandust'), B('پس از پیروزی بر ابدالی‌ها نزدیک هرات (مه ۱۷۲۹)، غلزایی‌های اشرف را در مهماندوست شکست داد. تا دسامبر تهماسب در اصفهان بود و فرمانروایی افغان پایان یافت.', 'After beating the Abdali Afghans near Herat (May 1729), he defeated Ashraf’s Ghilzai at Mehmandust. By December Tahmasp was in Isfahan and Afghan rule was over.'), 'secure', T),
  ev('regent', 1732, B('اوت ۱۷۳۲ م', 'August 1732 CE'), 'admin', P.ISFAHAN, B('برکناری تهماسب؛ نادر نایب‌السلطنه', 'Tahmasp deposed; Nader regent'), B('تهماسب در جنگی شکست‌خورده سرزمین‌هایی را به عثمانی واگذاشت. نادر او را برکنار کرد و پسر هشت‌ماهه‌اش را با نام عباس سوم بر تخت نشاند.', 'Tahmasp lost a war and gave land back to the Ottomans. Nader deposed him and put his eight-month-old son on the throne as Abbas III.'), 'secure', T),
  ev('mughan', 1736, B('فوریه تا ۸ مارس ۱۷۳۶ م', 'February – 8 March 1736 CE'), 'admin', P.MUGHAN, B('شورای دشت مغان؛ تاج‌گذاری', 'The Mughan assembly; coronation'), B('بزرگان ایل‌ها و شهرها را در دشت مغان گرد آورد و خواست میان او و صفویان یکی را برگزینند. انجمن او را شاه خواند. نادر گفت تشیع باید «مذهب جعفری» خوانده شود و کنار چهار مذهب سنی بنشیند.', 'He gathered tribal and town leaders on the Mughan steppe and asked them to choose him or a Safavid. The assembly proclaimed him shah. Nader said Shi’ism should be called the “Jaʿfari madhhab” and sit beside the four Sunni schools.'), 'secure', T),
  ev('qandahar', 1738, B('۱۷۳۸ م', '1738 CE'), 'battle', P.QANDAHAR, B('قندهار', 'Qandahar'), B('پس از نزدیک یک سال محاصره، قندهار، آخرین پناه غلزایی‌ها، را ویران کرد و مردمش را به شهر نوساخت نادرآباد برد.', 'After a siege of almost a year he destroyed Qandahar, the Ghilzai’s last stronghold, and moved its people to his new town of Naderabad.'), 'secure', T),
  ev('karnal', 1739, B('فوریهٔ ۱۷۳۹ م', 'February 1739 CE'), 'battle', P.KARNAL, B('کرنال و دهلی', 'Karnal and Delhi'), B('سپاه گورکانی را در کرنال نزدیک دهلی شکست داد. در دهلی، پس از شایعهٔ کشته شدن نادر، مردم سربازانش را کشتند و او فرمان غارت و کشتار شهر را داد. تخت طاووس و الماس کوه نور را برد.', 'He defeated the Mughal army at Karnal near Delhi. In Delhi, after a rumour that he had been killed, people attacked his troops and he ordered the city plundered and its people massacred. He took the Peacock Throne and the Koh-i-Noor diamond.'), 'secure', T),
  ev('turkestan', 1740, B('حدود ۱۷۴۰ م', 'c. 1740 CE'), 'campaign', P.BUKHARA, B('بخارا و خوارزم', 'Bukhara and Khwarazm'), B('در راه بازگشت از هند، ایلبارس خان خوارزم را کشت و ابوالفیض خان بخارا را دست‌نشانده کرد. سپس مالیات سه سال را در ایران بخشید.', 'On his way back from India he executed Ilbars, khan of Khwarazm, and made Abu’l-Fayz of Bukhara his vassal. Then he cancelled all taxes in Iran for three years.'), 'probable', T, note('تاکر فقط می‌گوید «در راه بازگشت از هند»؛ سال ۱۷۴۰ برداشت ماست.', 'Tucker only says “on his way back from India”; the year 1740 is our inference.')),
  ev('blinding', 1741, B('۱۷۴۱ م', '1741 CE'), 'admin', P.DARBAND, B('سوءقصد؛ کور کردن رضاقلی', 'An attempt on his life; Reza-qoli blinded'), B('در لشکرکشی ناکام داغستان، نزدیک دربند به جان او سوءقصد شد. ضارب گفت رضاقلی، پسر نادر، او را فرستاده است و نادر پسرش را کور کرد؛ بعدها سخت پشیمان شد.', 'During the failed Daghestan campaign someone tried to kill him near Darband. The attacker said Nader’s son Reza-qoli had sent him, and Nader had his son blinded; he later deeply regretted it.'), 'secure', T),
  ev('najaf', 1743, B('۱۷۴۳ م', '1743 CE'), 'religion', P.NAJAF, B('انجمن نجف', 'The Najaf meeting'), B('پس از محاصرهٔ بی‌نتیجهٔ شهرهای عراق، عالمان ایران، عراق، افغانستان و آسیای میانه را در نجف گرد آورد. آنان مذهب جعفری را مذهبی روا در اسلام سنی پذیرفتند، اما سلطان عثمانی نپذیرفت.', 'After besieging Iraqi cities without result, he gathered ulama from Iran, Iraq, Afghanistan and Central Asia at Najaf. They accepted the Jaʿfari madhhab as a legitimate Sunni school, but the Ottoman sultan did not.'), 'secure', T),
  ev('baghavard', 1745, B('اوت ۱۷۴۵ م', 'August 1745 CE'), 'battle', P.YEREVAN, B('باغاورد', 'Baghavard'), B('آخرین پیروزی بزرگ او بر عثمانی، نزدیک ایروان. پیمان کردان (سپتامبر ۱۷۴۶) مرزها را بر پایهٔ پیمان‌های کهن نگه داشت.', 'His last great victory over the Ottomans, near Yerevan. The Treaty of Kordan (September 1746) kept the borders on the basis of older agreements.'), 'secure', T),
  ev('death', 1747, B('۲۰ ژوئن ۱۷۴۷ م', '20 June 1747 CE'), 'admin', P.KHABUSHAN, B('کشته شدن در راه خبوشان', 'Killed on the way to Khabushan'), B('در راه سرکوب کردهای خبوشان (قوچان)، گروهی از افسران افشار و قاجار او را کشتند.', 'On his way to punish the Kurds of Khabushan (Quchan), a group of Afshar and Qajar officers killed him.'), 'secure', TP),
]

const campaignEvents = [
  ev('c-herat', 1729, B('مه ۱۷۲۹', 'May 1729'), 'battle', P.HERAT, B('هرات', 'Herat'), B('ابدالی‌ها شکست خوردند.', 'The Abdali are beaten.'), 'secure', T),
  ev('c-mehmandust', 1729, B('سپتامبر ۱۷۲۹', 'Sep 1729'), 'battle', P.MEHMANDUST, B('مهماندوست', 'Mehmandust'), B('اشرف شکست خورد.', 'Ashraf is beaten.'), 'secure', T, { route: [P.HERAT, P.MASHHAD, P.MEHMANDUST], ...sketch }),
  ev('c-isfahan', 1729, B('دسامبر ۱۷۲۹', 'Dec 1729'), 'admin', P.ISFAHAN, B('اصفهان', 'Isfahan'), B('پایان فرمانروایی افغان.', 'Afghan rule ends.'), 'secure', T, { route: [P.MEHMANDUST, P.ISFAHAN], ...sketch }),
  ev('c-ganja', 1735, B('۱۷۳۵', '1735'), 'battle', P.GANJA, B('گنجه', 'Ganja'), B('گنجه گرفته شد.', 'Ganja is taken.'), 'secure', T, { route: [P.ISFAHAN, P.HAMADAN, P.TABRIZ, P.GANJA], ...sketch }),
  ev('c-mughan', 1736, B('مارس ۱۷۳۶', 'Mar 1736'), 'admin', P.MUGHAN, B('مغان', 'Mughan'), B('تاج‌گذاری.', 'Crowned shah.'), 'secure', T, { route: [P.GANJA, P.MUGHAN], ...sketch }),
  ev('c-qandahar', 1738, B('۱۷۳۸', '1738'), 'battle', P.QANDAHAR, B('قندهار', 'Qandahar'), B('پس از یک سال محاصره.', 'After a year’s siege.'), 'secure', T, { route: [P.MUGHAN, P.ISFAHAN, P.QANDAHAR], ...sketch }),
  ev('c-karnal', 1739, B('فوریهٔ ۱۷۳۹', 'Feb 1739'), 'battle', P.KARNAL, B('کرنال', 'Karnal'), B('سپاه گورکانی شکست خورد.', 'The Mughal army is beaten.'), 'secure', T, { route: [P.QANDAHAR, P.KABUL, P.LAHORE, P.KARNAL], ...sketch }),
  ev('c-delhi', 1739, B('۱۷۳۹', '1739'), 'battle', P.DELHI, B('دهلی', 'Delhi'), B('غارت و کشتار.', 'Plunder and massacre.'), 'secure', T, { route: [P.KARNAL, P.DELHI], ...sketch }),
  ev('c-bukhara', 1740, B('حدود ۱۷۴۰', 'c. 1740'), 'campaign', P.BUKHARA, B('بخارا', 'Bukhara'), B('ابوالفیض دست‌نشانده شد.', 'Abu’l-Fayz becomes a vassal.'), 'probable', T, { route: [P.DELHI, P.KABUL, P.BUKHARA], ...note('سال برداشت ماست؛ تاکر فقط «در راه بازگشت از هند» می‌گوید. راه طرح‌وار است.', 'The year is our inference; Tucker only says “on his way back from India”. The route is a sketch.') }),
  ev('c-khiva', 1740, B('حدود ۱۷۴۰', 'c. 1740'), 'battle', P.KHIVA, B('خوارزم', 'Khwarazm'), B('ایلبارس کشته شد.', 'Ilbars is executed.'), 'probable', T, { route: [P.BUKHARA, P.KHIVA], ...note('سال برداشت ماست. راه طرح‌وار است.', 'The year is our inference. The route is a sketch.') }),
  ev('c-daghestan', 1741, B('۱۷۴۱–۱۷۴۳', '1741–1743'), 'campaign', P.DARBAND, B('داغستان', 'Daghestan'), B('جنگی ناکام.', 'A failed war.'), 'secure', T, { route: [P.KHIVA, P.MASHHAD, P.TABRIZ, P.DARBAND], ...sketch }),
  ev('c-najaf', 1743, B('۱۷۴۳', '1743'), 'religion', P.NAJAF, B('عراق و نجف', 'Iraq and Najaf'), B('محاصرهٔ بی‌نتیجه؛ انجمن نجف.', 'Fruitless sieges; the Najaf meeting.'), 'secure', T, { route: [P.DARBAND, P.TABRIZ, P.BAGHDAD, P.NAJAF], ...sketch }),
  ev('c-shiraz', 1744, B('ژوئن ۱۷۴۴', 'Jun 1744'), 'battle', P.SHIRAZ, B('شیراز', 'Shiraz'), B('شورش فارس سرکوب شد.', 'The Fars revolt is crushed.'), 'secure', T, { route: [P.NAJAF, P.ISFAHAN, P.SHIRAZ], ...sketch }),
  ev('c-baghavard', 1745, B('اوت ۱۷۴۵', 'Aug 1745'), 'battle', P.YEREVAN, B('باغاورد', 'Baghavard'), B('پیروزی بر عثمانی.', 'Victory over the Ottomans.'), 'secure', T, { route: [P.SHIRAZ, P.ISFAHAN, P.TABRIZ, P.YEREVAN], ...sketch }),
  ev('c-death', 1747, B('ژوئن ۱۷۴۷', 'Jun 1747'), 'admin', P.KHABUSHAN, B('خبوشان', 'Khabushan'), B('کشته شد.', 'Killed.'), 'secure', TP, { route: [P.YEREVAN, P.KORDAN, P.MASHHAD, P.KHABUSHAN], ...sketch }),
]

export const naderDossier: DossierSection[] = [
  sec('rise', 'از ابیورد تا تهماسب‌قلی', 'From Abivard to Tahmasp-qoli',
    [['نادر در نوامبر ۱۶۸۸ در خانواده‌ای فروتن از دامداران افشار زاده شد. صفویان از سدهٔ شانزدهم افشارها را در شمال خراسان نشانده بودند تا مشهد را در برابر ازبکان نگه دارند.', 'حملهٔ افغان‌ها و سقوط اصفهان (۱۷۲۲) میدان را باز کرد. نادر نخست هم‌پیمان ملک محمود سیستانی بود و سپس بر او شورید. تهماسب دوم او را سردار خود کرد. در ۱۷۲۹ ابدالی‌ها را نزدیک هرات و اشرف غلزایی را در مهماندوست شکست داد.'],
     ['Nader was born in November 1688 into a humble pastoral Afshar family. From the 16th century the Safavids had settled Afshars in northern Khorasan to defend Mashhad against the Uzbeks.', 'The Afghan invasion and the fall of Isfahan (1722) opened the field. Nader was at first an ally of Malek Mahmud Sistani and then turned on him. Tahmasp II made him his chief commander. In 1729 he beat the Abdali near Herat and Ashraf’s Ghilzai at Mehmandust.']],
    [['مهر شخصی او در وقف‌نامهٔ ۱۷۳۲ هنوز شیعه‌ای معمولی را نشان می‌دهد. تاکر می‌نویسد پس از مهماندوست بسیاری از سربازان افغان به سپاه او پیوستند؛ این سپاه آمیخته بعدها یکی از دلیل‌های سیاست مذهبی او شد.', 'خاندان قاجار مرگ نیای خود، فتحعلی‌خان (۱۷۲۶)، را به گردن نادر می‌انداختند؛ این ادعای آنان است و منبع ما آن را داوری نمی‌کند.'],
     ['His personal seal on a waqf deed of 1732 still shows an ordinary Shi’ite. Tucker writes that after Mehmandust many Afghan soldiers joined his army; that mixed army later became one reason for his religious policy.', 'The Qajars blamed Nader for the murder of their ancestor Fath-Ali Khan (1726); this is their claim, and our source does not rule on it.']],
    [['دره‌گز و ابیورد امروز در دو سوی مرز ایران و ترکمنستان‌اند؛ زادگاه نادر در ایران و آغاز کارش بیرون از مرز امروزی است.'], ['Darra Gaz and Abivard now lie on either side of the Iran–Turkmenistan border: Nader was born in today’s Iran and began his career outside its present frontier.']],
    TP, { photos: ['nader-c1740'], quotes: [{ text: 'I am the rarity of the age, and by the grace of God, the servant of the Eight and Four [i.e., the Twelve Imams].', fa: 'من نادرِ روزگارم و به لطف حق، غلام هشت و چهار [یعنی دوازده امام].', ref: 'Nader’s seal, 1732, translated in Tucker, “Nāder Shah”, Encyclopaedia Iranica', source: 'iranica-nader-shah' }] }),
  sec('mughan', 'مغان و «مذهب جعفری»', 'Mughan and the “Jaʿfari madhhab”',
    [['در فوریهٔ ۱۷۳۶ نادر بزرگان را در دشت مغان گرد آورد و خواست میان او و صفویان یکی را برگزینند. گزارش است که چون شنید ملاباشی گفته «همه هوادار صفویان‌اند»، او را گرفت و فردایش خفه کرد. انجمن نادر را شاه خواند و همه باید سندی را امضا می‌کردند.', 'نادر لعن سه خلیفهٔ نخست را ممنوع کرد و تشیع را «مذهب جعفری» نامید. از عثمانی خواست آن را مذهب پنجم بشناسد، جایی برای امام جعفری در کعبه بدهد، امیرالحاج ایرانی بپذیرد، سفیر دائمی بفرستد و اسیران را آزاد کند. کلاه چهارترک نادری جای تاج دوازده‌ترک قزلباش را گرفت.'],
     ['In February 1736 Nader gathered the leaders on the Mughan steppe and asked them to choose him or a Safavid. It is reported that when he heard the chief cleric had said “everyone is for the Safavid dynasty”, he had him arrested and strangled the next day. The assembly proclaimed Nader shah, and all present had to sign a document.', 'Nader banned the ritual cursing of the first three caliphs and named Shi’ism the “Jaʿfari madhhab”. He asked the Ottomans to recognise it as a fifth school, give a Jaʿfari imam a place at the Kaʿba, accept a Persian pilgrimage leader, exchange permanent ambassadors and free prisoners. The four-peaked Nāderi hat replaced the twelve-gored Qizilbash cap.']],
    [['تاکر سه انگیزه می‌بیند: کم کردن دعوای سنی و شیعه در راه کشورگشایی، آشتی بخش‌های سنی و شیعهٔ سپاهش، و درآمد کاروان حج. او همچنین «تبار مشترک ترکمانی» را پایهٔ پیوند با عثمانی و گورکانیان کرد.', 'این ایده بیشتر رو به بیرون بود: در فرمانی به عالمان اصفهان، مذهب جعفری فقط راهی برای آرامش میان سنی و شیعه معرفی شد و نامی از صفویان نیامد. عثمانی همهٔ پیشنهادهای مذهبی را رد کرد و پذیرفت فقط دربارهٔ حج، سفیران و اسیران کنار بیاید.'],
     ['Tucker sees three motives: to keep Sunni–Shi’ite conflict out of the way of his conquests, to reconcile the Sunni and Shi’ite parts of his army, and the revenue of the pilgrimage caravan. He also used a “common Turkmen descent” as the basis of ties with the Ottomans and Mughals.', 'The idea faced mostly outwards: a decree to the ulama of Isfahan presented the Jaʿfari madhhab simply as a way to keep peace between Sunnis and Shi’ites and did not mention the Safavids. The Ottomans rejected all the religious proposals and agreed only on the pilgrimage, ambassadors and prisoners.']],
    [['دربارهٔ شرط دوم (جای امام جعفری در کعبه) منابع یکسان نمی‌گویند: تاکر خوانش پری و دانشنامهٔ اسلام را در برابر لاکهارت می‌گذارد.', 'انجمن نجف (۱۷۴۳) را می‌توان کوششی زودهنگام برای هم‌زیستی سنی و شیعه دید؛ این برداشت ماست. این کوشش پس از نادر دنبال نشد.'],
     ['The sources differ on the second condition (a place for a Jaʿfari imam at the Kaʿba): Tucker sets Perry’s and the Encyclopaedia of Islam’s reading against Lockhart’s.', 'The Najaf meeting (1743) can be seen as an early attempt at Sunni–Shi’ite coexistence; that is our reading. It was not followed up after Nader.']],
    T, { quotes: [{ text: 'everyone is for the Safavid dynasty,', fa: '«همه هوادار دودمان صفوی‌اند»', ref: 'the molla-bāši Mirzā Abu’l-Ḥasan, as reported by Lockhart, quoted in Tucker, “Nāder Shah”, Encyclopaedia Iranica', source: 'iranica-nader-shah' }] }),
  sec('india', 'هند: کرنال و دهلی', 'India: Karnal and Delhi',
    [['پس از ویرانی قندهار (۱۷۳۸) بسیاری از افغان‌ها به سپاه نادر پیوستند. نادر گورکانیان را متهم کرد که به افغان‌های گریخته پناه می‌دهند و دنبال کردن آنان به یورش به هند کشید.', 'در فوریهٔ ۱۷۳۹ سپاه گورکانی را در کرنال نزدیک دهلی شکست داد و محمدشاه را دست‌نشانده کرد. پس از شایعهٔ کشته شدن نادر، مردم دهلی سربازانش را کشتند و نادر فرمان غارت و کشتار شهر را داد. تخت طاووس و الماس کوه نور را برد، تاج را دوباره بر سر محمدشاه گذاشت و خود لقب شاهنشاه گرفت.'],
     ['After the destruction of Qandahar (1738) many Afghans joined Nader’s army. Nader accused the Mughals of sheltering Afghans who had fled, and the pursuit grew into an invasion of India.', 'In February 1739 he defeated the Mughal army at Karnal near Delhi and made Muhammad Shah his vassal. After a rumour that Nader had been killed, people in Delhi attacked his troops, and Nader let his soldiers plunder the city and massacre its inhabitants. He took the Peacock Throne and the Koh-i-Noor diamond, put the crown back on Muhammad Shah’s head and took the title shahanshah himself.']],
    [['وقایع‌نگاران نادر این پیروزی را نشانهٔ همانندی او با تیمور می‌دانستند و تاکر می‌نویسد نادر «شیفتهٔ» تقلید از تیمور بود. منابع ما شمار کشتگان دهلی را نمی‌دهند و ما هم رقمی نمی‌آوریم.', 'گنج هند یک‌باره نادر را ثروتمند کرد: مالیات سه سال را بخشید و به ساختن نیروی دریایی در بوشهر روی آورد؛ آن کشتی‌سازی کامل نشد، اما تا ۱۷۴۵ حدود سی کشتی از هند خرید.'],
     ['Nader’s chroniclers presented the victory as another sign of his likeness to Timur, and Tucker writes that Nader was “obsessed” with emulating Timur. Our sources give no death toll for Delhi, and we give none.', 'The Indian treasure made Nader suddenly rich: he cancelled taxes for three years and turned to building a navy at Bushehr; the shipbuilding was not finished, but by 1745 he had bought about thirty ships in India.']],
    [['احمدشاه درانی، یکی از فرماندهان نادر، پس از مرگ او دودمان درانی را بنیاد گذاشت؛ تاکر می‌نویسد او را نخستین فرمانروای کشوری مستقل برای افغان‌ها می‌دانند.'], ['Ahmad Shah Durrani, one of Nader’s commanders, founded the Durrani dynasty after his death; Tucker writes that he is credited as the first ruler of an independent Afghan state.']],
    T, { photos: ['nader-delhi'] }),
  sec('property', 'زمین، سکه و سپاه', 'Land, coin and army',
    [['نادر فرمان یک مساحی و ثبت زمین‌ها را داد (رقبات نادری). با مذهب جعفری، نظام وقف‌های صفوی را معلق کرد، با اینکه درآمد وقف پشتوانهٔ عالمان بزرگ بود؛ تنها در سال آخر فرمان داد وقف‌ها بازگردند.', 'عباسی نقرهٔ صفوی را کنار گذاشت و «نادری» نقره را هم‌وزن روپیهٔ گورکانی زد. کوشید به سربازان و دیوانیان حقوق ثابت بدهد نه درآمد زمین، شمار سربازانی را که مستقیم زیر فرمان خودش بودند بسیار بالا برد و کوچاندن اجباری ایل‌ها را گسترش داد.'],
     ['Nader ordered a land survey to produce registers known as the raqabat-e Nāderi. With the Jaʿfari madhhab he suspended the Safavid system of pious foundations, although their revenue supported the leading ulama; only in his last year did he order them restored.', 'He dropped the Safavid silver ʿAbbāsi and struck a silver Nāderi on the weight of the Mughal rupee. He tried to pay soldiers and officials fixed salaries instead of land revenue, greatly increased the troops under his direct command, and expanded the forced resettlement of tribes.']],
    [['این برداشت ماست: نادر می‌خواست درآمد زمین را از دست ایل‌ها، دیوانیان و عالمان بیرون بکشد و آن را به پول نقدی تبدیل کند که سپاهی وابسته به خودش را بچرخاند. گنج هند این کار را چند سالی ممکن کرد، اما غارت درآمد پایدار نیست.', 'تاکر هم می‌نویسد این اصلاحات پاسخ به ضعف‌های اواخر صفوی بود اما هیچ‌کدام مشکل‌هایی را که به اقتصاد جهانی گره خورده بود حل نکرد. پری می‌افزاید که صدها هزار کوچانده که به خراسان آورده شدند، بیشتر بار سپاه دائمی شدند تا سرمایهٔ ولایت.'],
     ['This is our reading: Nader wanted to pull land revenue away from tribes, officials and ulama and turn it into cash that ran an army loyal to him alone. The Indian treasure made that possible for a few years, but plunder is not a lasting revenue.', 'Tucker likewise writes that these reforms answered weaknesses of the late Safavid era but none solved the problems tied to the world economy. Perry adds that the hundreds of thousands of deportees brought to Khorasan went mostly into the standing army and became a strain on the province rather than an asset.']],
    [['پس از تمام شدن پول، نادر مجبور شد مالیات را بازگرداند و مالیات سنگین شورش‌های پی‌درپی برانگیخت. این نشان می‌دهد سپاهی که با غنیمت جنگی پول بگیرد، بدون غنیمت تازه دوام نمی‌آورد.'], ['When the money ran short Nader had to reimpose taxes, and the heavy levies set off one revolt after another. It shows that an army paid from war booty cannot last without fresh booty.']],
    TP, { photos: ['kalat-dome'] }),
  sec('fall', 'پایان نادر و جانشینانش', 'Nader’s end and his successors',
    [['پس از ۱۷۴۱ نادر پسرش رضاقلی را کور کرد؛ وقایع‌نگارش مروی از نشانه‌های فرسودگی جسم و آشفتگی روان او گزارش می‌دهد. مالیات بازگشت و شورش‌ها، به‌ویژه شورش فارس (۱۷۴۴)، فراگیر شد. در سال آخر، به گفتهٔ پری، دست‌کم ۱۰۰ تن از بزرگان مشهد اعدام شدند.', 'در ۲۰ ژوئن ۱۷۴۷ در راه خبوشان کشته شد. برادرزاده‌اش علی‌قلی (عادل‌شاه) همهٔ فرزندان نادر را جز شاهرخ کشت. ابراهیم‌شاه او را کور کرد و خود کور و کشته شد. شاهرخ، نوهٔ نادر و نوهٔ دختری شاه سلطان حسین، در مشهد شاه شد؛ در ۱۷۵۰ برای مدتی کوتاه سلیمان دوم صفوی جای او را گرفت و شاهرخ کور شد، اما دوباره به تخت بازگشت.'],
     ['After 1741 Nader had his son Reza-qoli blinded; his chronicler Marvi reports signs of physical decline and mental instability. Taxes came back and revolts spread, above all in Fars (1744). In his last year, Perry says, at least 100 notables of Mashhad were executed.', 'On 20 June 1747 he was killed on the road to Khabushan. His nephew Ali-qoli (Adel Shah) massacred all Nader’s issue except Shahrokh. Ebrahim Shah blinded him and was himself blinded and killed. Shahrokh, Nader’s grandson and a grandson of Shah Soltan Hosayn, became shah at Mashhad; in 1750 the Safavid Solayman II briefly replaced him and Shahrokh was blinded, but he returned to the throne.']],
    [['پری می‌نویسد پس از نادر «افشاری» فقط نامی برای تاریخ خراسان است: احمدشاه درانی بر شرق و زندیه بر غرب ایران چیره شدند و شاهرخ یک بار دست‌نشاندهٔ درانی شد. پسرانش گنجینه و حتی زیورهای حرم امام رضا را برای مزد سپاه آب کردند.', 'گزارش مروی از آشفتگی روانی نادر از یک وقایع‌نگار است؛ آن را نشانهٔ بدرفتاری فزایندهٔ او می‌گیریم، نه تشخیص پزشکی.'],
     ['Perry writes that after Nader “Afsharid” is just a name for the history of Khorasan: Ahmad Shah Durrani took the east and the Zands western Iran, and Shahrokh was for a time a Durrani vassal. His sons melted down the treasure and even fittings of the Imam Reza shrine to pay troops.', 'Marvi’s report of Nader’s mental instability comes from a chronicler; we take it as a sign of his growing brutality, not a medical diagnosis.']],
    [['آقامحمدخان قاجار شاهرخ را برانداخت و شکنجه کرد تا جای گوهرها را بگوید. سال آن را تاکر ۱۷۹۵ و پری ۱۲۱۰ ق/۱۷۹۶ می‌نویسد. خراسان در ۱۸۰۲ یکسره به دست قاجار افتاد.', 'مشهد در میانهٔ راه بازرگانی هند و روسیه بود و تاکر می‌نویسد با پشتیبانی نادر چون زیارتگاهی بزرگ رشد کرد؛ پری می‌افزاید که مشهد از پیوندهای صفوی آزادتر از اصفهان بود.'],
     ['Agha Mohammad Khan Qajar overthrew Shahrokh and tortured him to reveal where his jewels were. Tucker dates this to 1795, Perry to 1210 AH/1796. Khorasan passed fully to the Qajars in 1802.', 'Mashhad sat midway on the trade route between India and Russia, and Tucker writes that it grew into a major pilgrimage centre under Nader’s patronage; Perry adds that it was freer of Safavid associations than Isfahan.']],
    TP, { photos: ['nader-tomb'] }),
]

export const nader: FeaturedKing = {
  slug: 'nader',
  name: B('نادرشاه افشار', 'Nader Shah Afshar'),
  dynastyName: B('افشاریان', 'The Afsharids'),
  reign: B('۱۷۳۶–۱۷۴۷ م', '1736–1747 CE'),
  title: B('نادرشاه؛ از دره‌گز تا دهلی', 'Nader Shah: from Darra Gaz to Delhi'),
  lede: B(
    'پسر یک خانوادهٔ فروتن دامدار افشار، افغان‌ها را از ایران بیرون راند، صفویان را کنار گذاشت و در دشت مغان شاه شد. تا دهلی تاخت و گنج گورکانیان را برد، اما در یازده سال پادشاهی با مالیات و خشونت کشور را خسته کرد و افسرانش او را کشتند.',
    'The son of a humble Afshar herding family, he drove the Afghans out of Iran, set the Safavids aside and was made shah on the Mughan steppe. He marched to Delhi and took the Mughal treasure, but in an eleven-year reign he wore the country out with taxes and violence, and his own officers killed him.',
  ),
  stats: [
    { n: B('۱۱ سال', '11 years'), l: B('پادشاهی (۱۷۳۶–۱۷۴۷)', 'reign (1736–1747)') },
    { n: B('۱۷۲۹', '1729'), l: B('مهماندوست؛ پایان فرمانروایی افغان (م)', 'Mehmandust; Afghan rule ends (CE)') },
    { n: B('۱۷۳۹', '1739'), l: B('کرنال و دهلی (م)', 'Karnal and Delhi (CE)') },
    { n: B('۳ سال', '3 years'), l: B('بخشودگی مالیات پس از هند', 'tax remission after India') },
  ],
  mapTitle: B('نقشهٔ متحرک: زندگی و لشکرکشی‌ها', 'Animated map: life and campaigns'),
  events: naderEvents,
  span: [1688, 1747],
  lifeMap: { view: [42, 26, 80, 44], places: [
    { name: B('دره‌گز', 'Darra Gaz'), c: P.DARRAGAZ, dy: -0.9 }, { name: B('مشهد', 'Mashhad'), c: P.MASHHAD, dy: 0.7 }, { name: B('مهماندوست', 'Mehmandust'), c: P.MEHMANDUST, left: true },
    { name: B('اصفهان', 'Isfahan'), c: P.ISFAHAN }, { name: B('مغان', 'Mughan'), c: P.MUGHAN, left: true }, { name: B('قندهار', 'Qandahar'), c: P.QANDAHAR },
    { name: B('کرنال', 'Karnal'), c: P.KARNAL, left: true }, { name: B('بخارا', 'Bukhara'), c: P.BUKHARA }, { name: B('دربند', 'Darband'), c: P.DARBAND },
    { name: B('نجف', 'Najaf'), c: P.NAJAF, left: true }, { name: B('ایروان', 'Yerevan'), c: P.YEREVAN, left: true },
  ] },
  campaign: {
    id: 'campaigns',
    title: B('لشکرکشی‌های نادر (۱۷۲۹–۱۷۴۷ م)', 'Nader’s campaigns (1729–1747 CE)'),
    intro: { fa: ['از هرات و مهماندوست تا گنجه، قندهار، کرنال و دهلی، سپس بخارا، داغستان، عراق و باغاورد. تاریخ‌ها از ایرانیکا (تاکر و پری) است؛ راه‌ها طرح‌وارند.'], en: ['From Herat and Mehmandust to Ganja, Qandahar, Karnal and Delhi, then Bukhara, Daghestan, Iraq and Baghavard. Dates follow Iranica (Tucker and Perry); the routes are sketches.'] },
    events: campaignEvents, span: [1729, 1747], view: [42, 26, 80, 44],
    places: [
      { name: B('هرات', 'Herat'), c: P.HERAT }, { name: B('مشهد', 'Mashhad'), c: P.MASHHAD, dy: 0.9 }, { name: B('مهماندوست', 'Mehmandust'), c: P.MEHMANDUST, left: true },
      { name: B('اصفهان', 'Isfahan'), c: P.ISFAHAN }, { name: B('گنجه', 'Ganja'), c: P.GANJA, left: true }, { name: B('قندهار', 'Qandahar'), c: P.QANDAHAR },
      { name: B('کرنال', 'Karnal'), c: P.KARNAL, left: true, dy: -0.6 }, { name: B('دهلی', 'Delhi'), c: P.DELHI, dy: 0.7 }, { name: B('بخارا', 'Bukhara'), c: P.BUKHARA },
      { name: B('خیوه', 'Khiva'), c: P.KHIVA, left: true }, { name: B('دربند', 'Darband'), c: P.DARBAND }, { name: B('نجف', 'Najaf'), c: P.NAJAF, left: true },
      { name: B('شیراز', 'Shiraz'), c: P.SHIRAZ }, { name: B('ایروان', 'Yerevan'), c: P.YEREVAN, left: true }, { name: B('خبوشان', 'Khabushan'), c: P.KHABUSHAN, left: true, dy: -0.6 },
    ],
    clip: { gif: B('/media/nader/campaigns-fa.gif', '/media/nader/campaigns-en.gif'), mp4: B('/media/nader/campaigns-fa.mp4', '/media/nader/campaigns-en.mp4'), webm: B('/media/nader/campaigns-fa.webm', '/media/nader/campaigns-en.webm'), poster: B('/media/nader/campaigns-fa.png', '/media/nader/campaigns-en.png'), width: 958, height: 356 },
  },
  shareImage: '/media/nader/campaigns-en.png',
  dossier: naderDossier,
  synthesis: { title: B('جمع‌بندی: کشوری که با شمشیر پس گرفته شد', 'Synthesis: a country won back by the sword'), paras: {
    fa: [
      'نادر ایران را از افغان‌ها، عثمانی و روس پس گرفت؛ روس‌ها بیشتر با پیمان رشت و گنجه کنار رفتند تا با جنگ. سپس کوشید با مذهب جعفری و تبار ترکمانی جایگاه تازه‌ای برای خود و ایران بسازد.',
      'اما دولت او بر سپاه و غنیمت ایستاده بود. وقتی گنج تمام شد، مالیات و خشونت بازگشت و پس از کشته شدنش، امپراتوری در چند سال از هم پاشید.',
    ],
    en: [
      'Nader won Iran back from the Afghans, the Ottomans and Russia; the Russians left mostly through the treaties of Rasht and Ganja rather than by war. He then tried to build a new place for himself and Iran with the Jaʿfari madhhab and a shared Turkmen descent.',
      'But his state stood on the army and on booty. When the treasure ran out, taxes and violence returned, and after his murder the empire fell apart within a few years.',
    ],
  }, sources: TP },
  sources: afSources,
  photos: afPhotos,
  related: [
    { href: { fa: '/dynasty/afsharids', en: '/dynasty/afsharids' }, label: B('دودمان افشاری', 'The Afsharid dynasty') },
    { href: { fa: '/king/abbas-i', en: '/en/king/abbas-i' }, label: B('شاه عباس بزرگ', 'Shah Abbas the Great') },
    { href: { fa: '/dynasty/safavids', en: '/dynasty/safavids' }, label: B('دودمان صفوی', 'The Safavid dynasty') },
  ],
  wikipedia: 'https://en.wikipedia.org/wiki/Nader_Shah',
}
