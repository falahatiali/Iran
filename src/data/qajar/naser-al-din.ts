/**
 * Naser al-Din Shah Qajar, 1848–1896 CE, with Amir Kabir, the Tobacco protest, and his son Mozaffar al-Din Shah
 * (1896–1907) and the Constitutional Revolution.
 * Spine: Algar (Amir Kabir), the Mirza Hasan Shirazi article, Yarshater (Iran ii) and the Constitutional Revolution
 * articles, all in Encyclopaedia Iranica.
 */
import type { DossierSection, FeaturedKing } from '../featured/types'
import { ev, note, sec } from '../late-achaemenid/common'
import { B, P, qjPhotos, qjSources } from './common'

const sketch = note('منابع راه دقیق را نمی‌گویند؛ خط‌ها طرح‌وارند.', 'The sources give no exact routes; the lines are sketches.')
const AK = ['iranica-amir-kabir']
const YA = ['iranica-iran-qajar']
const TB = ['iranica-shirazi']
const CR = ['iranica-constitutional-ii']
const CRI = ['iranica-constitutional-i', 'iranica-constitutional-ii']

const concessionDate = note(
  'سال واگذاری امتیاز در منابع ما یکی نیست: مقالهٔ میرزای شیرازی ۱۸۸۹ می‌گوید و نمای کلی یارشاطر ۱۸۷۲، که با دیگر تاریخ‌های همان گزارش جور درنمی‌آید. ما ۱۸۸۹ را نشان می‌دهیم و اختلاف را می‌گوییم.',
  'Our sources disagree on the year of the concession: the article on Mirza Hasan Shirazi says 1889 and Yarshater’s overview says 1872, which does not fit the other dates in the same account. We show 1889 and state the disagreement.',
)
const fatwaDoubt = note(
  'فتوا مهر میرزای شیرازی را داشت، اما دولت در اینکه از او باشد تردید کرد. ایرانیکا می‌نویسد «جعل آشکار» بعید است، چون او هرگز آن را رد نکرد؛ شاید آشتیانی به نمایندگی از او آن را منتشر کرد.',
  'The fatwa bore Mirza Hasan Shirazi’s signature, but the government cast doubt on his authorship. Iranica writes that it “can hardly have been a case of outright forgery”, since he never repudiated it; Ashtiani may have issued it in his name under delegated powers.',
)
const edict = note(
  'دو مقالهٔ ایرانیکا این روز را یکسان نمی‌بینند: یکی فرمان ۵ اوت را همان «فرمان مشروطیت» می‌داند و دیگری می‌گوید معترضان آن را مبهم دانستند و رد کردند و پس از گفت‌وگوهای بیشتر متن دیگری آمد. واژهٔ «مشروطه» در فرمان نیامده بود.',
  'The two Iranica articles see this day differently: one treats the farmān of 5 August as the “Constitutional edict”, the other says the protesters rejected that rescript as too vague and another text followed further talks. The word mašrūṭa was not mentioned in it.',
)

export const naserEvents = [
  ev('accession', 1848, B('سپتامبر ۱۸۴۸ م', 'September 1848 CE'), 'admin', P.TABRIZ, B('ولیعهد شاه می‌شود', 'The crown prince becomes shah'), B('محمدشاه درگذشت و ولیعهد شانزده‌ساله در تبریز بود. امیرکبیر، معلم او، هزینهٔ رفتنش به تهران را فراهم کرد.', 'Mohammad Shah died while the sixteen-year-old crown prince was in Tabriz. His tutor, Amir Kabir, found the money for his journey to Tehran.'), 'secure', ['iranica-amir-kabir', 'iranica-iran-qajar']),
  ev('amir-kabir', 1848, B('اکتبر ۱۸۴۸ م', 'October 1848 CE'), 'admin', P.TEHRAN, B('صدارت امیرکبیر', 'Amir Kabir chief minister'), B('میرزا تقی‌خان فراهانی، امیرکبیر، صدراعظم شد و اصلاحات ارتش، بودجه و آموزش را آغاز کرد.', 'Mirza Taqi Khan Farahani, Amir Kabir, became chief minister and began reforms of the army, the budget and education.'), 'secure', AK),
  ev('bab', 1850, B('۸ ژوئیهٔ ۱۸۵۰ م', '8 July 1850 CE'), 'religion', P.TABRIZ, B('اعدام باب', 'Execution of the Bab'), B('پس از سرکوب شورش‌های بابی، امیرکبیر فرمان اعدام سید علی‌محمد باب را داد که در تبریز انجام شد.', 'After the Babi uprisings were crushed, Amir Kabir ordered the execution of Sayyed Ali-Mohammad the Bab, which took place in Tabriz.'), 'secure', ['iranica-amir-kabir', 'iranica-iran-qajar']),
  ev('dismissal', 1851, B('۱۶ نوامبر ۱۸۵۱ م', '16 November 1851 CE'), 'admin', P.TEHRAN, B('برکناری امیرکبیر', 'Amir Kabir dismissed'), B('شاه امیرکبیر را برکنار کرد. در همان ماه استادان اتریشی دارالفنون به تهران رسیدند.', 'The shah dismissed Amir Kabir. The same month the Austrian teachers of the Dar al-Fonun arrived in Tehran.'), 'secure', AK),
  ev('fin', 1852, B('۱۰ ژانویهٔ ۱۸۵۲ م', '10 January 1852 CE'), 'admin', P.KASHAN, B('قتل در فین', 'Killed at Fin'), B('پس از چهل روز زندان، در گرمابهٔ باغ فین کاشان رگ‌هایش را زدند.', 'After forty days’ confinement he was put to death in the bathhouse at Fin, outside Kashan, by the slashing of his wrists.'), 'secure', AK),
  ev('telegraph', 1857, B('۱۸۵۷ م', '1857 CE'), 'building', P.TEHRAN, B('تلگراف', 'The telegraph'), B('نخستین خط‌های تلگراف در ایران کشیده شد.', 'The first telegraph lines were introduced in Persia.'), 'secure', YA),
  ev('amin', 1883, B('۱۸۸۳ م', '1883 CE'), 'admin', P.TEHRAN, B('امین‌السلطان', 'Amin al-Soltan'), B('امین‌السلطان صدراعظم شد و تا پایان پادشاهی ناصرالدین‌شاه ماند؛ یارشاطر می‌نویسد او به انتقادها اعتنا نکرد.', 'Amin al-Soltan became chief minister and stayed until the end of the reign; Yarshater writes that he did not take criticism seriously.'), 'secure', YA),
  ev('concession', 1889, B('۱۸۸۹ م', '1889 CE'), 'admin', P.TEHRAN, B('امتیاز تنباکو', 'The tobacco concession'), B('دولت انحصار خرید و فروش و صادرات تنباکو را به شرکتی بریتانیایی داد.', 'The government granted a British company the monopoly of buying, selling and exporting tobacco.'), 'disputed', ['iranica-shirazi', 'iranica-iran-qajar'], concessionDate),
  ev('telegram', 1891, B('۲۶ ژوئیهٔ ۱۸۹۱ م', '26 July 1891 CE'), 'religion', P.SAMARRA, B('تلگراف از سامرا', 'Telegram from Samarra'), B('میرزای شیرازی، مرجع تقلید شیعیان، از سامرا به شاه تلگراف زد و به امتیاز و تبعید سید علی فال‌اسیری از شیراز اعتراض کرد. پاسخی نیامد.', 'Mirza Hasan Shirazi, the leading Shiite authority, telegraphed the shah from Samarra protesting against the monopoly and the banishment of Sayyed Ali Falasiri from Shiraz. No answer came.'), 'secure', TB),
  ev('fatwa', 1891, B('اوایل دسامبر ۱۸۹۱ م', 'early December 1891 CE'), 'religion', P.TEHRAN, B('فتوای تحریم', 'The boycott fatwa'), B('فتوایی در تهران پخش شد که کشیدن قلیان و چپق را «در حکم محاربه با امام زمان» خواند. مردم دست از تنباکو کشیدند.', 'A fatwa circulated in Tehran declaring the smoking of tobacco “tantamount to warfare against the Imam of the Age”. People stopped smoking.'), 'probable', TB, fatwaDoubt),
  ev('cancel', 1892, B('۲۶ ژانویهٔ ۱۸۹۲ م', '26 January 1892 CE'), 'religion', P.TEHRAN, B('لغو امتیاز', 'Concession cancelled'), B('شاه زیر فشار مردم امتیاز را لغو کرد و با فتوا و تلگراف تازهٔ میرزای شیرازی ماجرا بسته شد. کشور پیامد مالی لغو را پرداخت.', 'Under popular pressure the shah cancelled the concession, and a new fatwa and telegram from Mirza Hasan Shirazi closed the episode. The country bore the financial cost of the cancellation.'), 'secure', ['iranica-shirazi', 'iranica-iran-qajar']),
  ev('death', 1896, B('۱ مه ۱۸۹۶ م', '1 May 1896 CE'), 'admin', P.REY, B('ترور شاه', 'The shah assassinated'), B('میرزا رضا کرمانی، که از اندیشه‌های سید جمال‌الدین اسدآبادی (افغانی) اثر گرفته بود و خود از ستم دیوانیان آسیب دیده بود، شاه را کشت.', 'Mirza Reza Kermani, inspired by the ideas of Jamal al-Din Asadabadi (al-Afghani) and himself a victim of official abuses, killed the shah.'), 'probable', YA, note('تاریخ و کشنده از یارشاطر است؛ جای دقیق ترور را منبع ما نمی‌گوید و نقطهٔ نقشه نزدیک تهران تقریبی است.', 'The date and the killer come from Yarshater; our source does not give the exact place, and the map point near Tehran is approximate.')),
]

const protestEvents = [
  ev('p-tabriz', 1848, B('۱۸۴۸', '1848'), 'admin', P.TABRIZ, B('تبریز', 'Tabriz'), B('ولیعهد شاه می‌شود.', 'The crown prince becomes shah.'), 'secure', AK),
  ev('p-tehran', 1848, B('اکتبر ۱۸۴۸', 'Oct 1848'), 'admin', P.TEHRAN, B('تهران', 'Tehran'), B('امیرکبیر صدراعظم.', 'Amir Kabir chief minister.'), 'secure', AK, { route: [P.TABRIZ, P.TEHRAN], ...sketch }),
  ev('p-fin', 1852, B('ژانویهٔ ۱۸۵۲', 'Jan 1852'), 'admin', P.KASHAN, B('فین کاشان', 'Fin, Kashan'), B('امیرکبیر کشته شد.', 'Amir Kabir killed.'), 'secure', AK, { route: [P.TEHRAN, P.QOM, P.KASHAN], ...sketch }),
  ev('p-shiraz', 1891, B('بهار ۱۸۹۱', 'Spring 1891'), 'religion', P.SHIRAZ, B('شیراز', 'Shiraz'), B('فال‌اسیری تبعید شد.', 'Falasiri expelled.'), 'secure', TB),
  ev('p-samarra', 1891, B('ژوئیهٔ ۱۸۹۱', 'Jul 1891'), 'religion', P.SAMARRA, B('سامرا', 'Samarra'), B('تلگراف به شاه.', 'Telegram to the shah.'), 'secure', TB, { route: [P.SHIRAZ, P.SAMARRA], ...sketch }),
  ev('p-isfahan', 1891, B('۱۸۹۱', '1891'), 'religion', P.ISFAHAN, B('اصفهان', 'Isfahan'), B('آقانجفی هم به سامرا نامه فرستاد.', 'Aqa Najafi also appeals to Samarra.'), 'secure', TB),
  ev('p-fatwa', 1891, B('دسامبر ۱۸۹۱', 'Dec 1891'), 'religion', P.TEHRAN, B('تهران', 'Tehran'), B('فتوای تحریم پخش شد.', 'The boycott fatwa circulates.'), 'probable', TB, { route: [P.SAMARRA, P.TEHRAN], ...fatwaDoubt }),
  ev('p-cancel', 1892, B('ژانویهٔ ۱۸۹۲', 'Jan 1892'), 'religion', P.TEHRAN, B('تهران', 'Tehran'), B('امتیاز لغو شد.', 'The concession is cancelled.'), 'secure', TB),
  ev('p-abdolazim', 1905, B('دسامبر ۱۹۰۵', 'Dec 1905'), 'religion', P.REY, B('شاه عبدالعظیم', 'Shah Abd al-Azim'), B('بست حدود ۲٬۰۰۰ تن.', 'About 2,000 take sanctuary.'), 'secure', CR, { route: [P.TEHRAN, P.REY], ...sketch }),
  ev('p-qom', 1906, B('۱۵ ژوئیهٔ ۱۹۰۶', '15 Jul 1906'), 'religion', P.QOM, B('قم', 'Qom'), B('علما به قم کوچیدند.', 'The ulama leave for Qom.'), 'secure', CR, { route: [P.TEHRAN, P.QOM], ...sketch }),
  ev('p-legation', 1906, B('ژوئیه–اوت ۱۹۰۶', 'Jul–Aug 1906'), 'admin', P.TEHRAN, B('سفارت بریتانیا', 'British legation'), B('بست ۱۴٬۰۰۰ تن.', 'Sanctuary of 14,000.'), 'secure', CR),
  ev('p-edict', 1906, B('۵ اوت ۱۹۰۶', '5 Aug 1906'), 'admin', P.TEHRAN, B('فرمان', 'The farmān'), B('فرمان شاه دربارهٔ مجلس.', 'The shah’s farmān on a Majles.'), 'disputed', CRI, edict),
  ev('p-majles', 1906, B('۷ اکتبر ۱۹۰۶', '7 Oct 1906'), 'admin', P.TEHRAN, B('مجلس', 'The Majles'), B('مجلس اول گشوده شد.', 'The First Majles opens.'), 'secure', CR),
]

export const naserDossier: DossierSection[] = [
  sec('amir-kabir', 'امیرکبیر', 'Amir Kabir',
    [['میرزا تقی‌خان (۱۸۰۷–۱۸۵۲) پسر آشپزی از هزاوهٔ فراهان بود. چهار سال در ارزروم در کمیسیون مرزی ایران و عثمانی کار کرد و در ۱۸۴۸ صدراعظم ناصرالدین‌شاه شد.', 'او بودجه را با کم کردن مستمری‌ها متعادل کرد، کارخانهٔ اسلحه ساخت، روزنامهٔ «وقایع اتفاقیه» را بنیاد گذاشت و دارالفنون را بنا کرد. در سیاست خارجی به هیچ‌یک از روس و انگلیس امتیاز نداد. در ۱۸۵۱ برکنار و در ژانویهٔ ۱۸۵۲ در فین کشته شد.'],
     ['Mirza Taqi Khan (1807–1852) was the son of a cook from Hazava in Farahan. He spent four years at Erzurum on the Ottoman–Iranian border commission and in 1848 became Naser al-Din Shah’s chief minister.', 'He balanced the budget by cutting pensions, built arms factories, founded the newspaper Ruz-nama-ye waqayeʿ-e ettefaqiya and established the Dar al-Fonun. In foreign policy he gave concessions to neither Russia nor Britain. He was dismissed in 1851 and killed at Fin in January 1852.']],
    [['الگار برکناری و قتل او را بیشتر کار دشمنان درباری‌اش، میرزا آقاخان نوری و مادر شاه، می‌داند. یارشاطر قتل او به فرمان شاه را «لکه‌ای پاک‌نشدنی» بر نام شاه می‌خواند.', 'الگار هشدار می‌دهد که امیرکبیر را نباید بیش از اندازه «مدرن‌ساز» دید: او بیش از هر چیز خدمتگزار وفادار دولت سنتی بود. سیاست او را «موازنهٔ منفی» نامیده‌اند. همو فرمان اعدام باب (۱۸۵۰) را داد؛ الگار انگیزهٔ او را «به احتمال» سیاسی و برای حفظ دولت می‌داند.'],
     ['Algar attributes his fall and murder chiefly to his enemies at court, Mirza Aqa Khan Nuri and the queen mother. Yarshater calls his murder on the shah’s order “an indelible stain” on the shah’s reputation.', 'Algar warns against seeing Amir Kabir too much as a moderniser: above all he was a loyal servant of the traditional state. His policy has been called “negative equilibrium”. He also ordered the execution of the Bab (1850); Algar thinks his motive was “probably” political, to preserve the state.']],
    [['در تاریخ‌نگاری ایرانی امیرکبیر یکی از معدود دولتمردان توانا و درستکار قاجار است و دارالفنون، به گفتهٔ الگار، «یادبودی پس از مرگ» برای او شد. گرمابهٔ فین امروز جای دیدار است.'],
     ['In Iranian historiography Amir Kabir is one of the few capable and honest Qajar statesmen, and the Dar al-Fonun, in Algar’s words, “soon became a posthumous monument to its founder”. The bathhouse at Fin is visited today.']],
    ['iranica-amir-kabir', 'iranica-iran-qajar'], { photos: ['amir-kabir-portrait', 'fin-garden'], quotes: [{ text: 'an unusually loyal and effective servant of the traditional state whose primary objective was the strengthening of the central government. He was only incidentally an agent of modernization and westernization', fa: '«خدمتگزاری به‌گونه‌ای کم‌مانند وفادار و کارآمد برای دولت سنتی، که هدف اصلی‌اش نیرومند کردن حکومت مرکزی بود. او تنها به‌طور فرعی عامل نوسازی و غربی‌سازی بود.»', ref: 'H. Algar, “Amīr Kabīr”, Encyclopaedia Iranica', source: 'iranica-amir-kabir' }] }),
  sec('tobacco', 'جنبش تنباکو', 'The Tobacco protest',
    [['دولت انحصار تنباکو را به شرکتی بریتانیایی داد. از بهار ۱۸۹۱ که شرکت کار را آغاز کرد، مخالفت به رهبری علما بالا گرفت. سید علی فال‌اسیری از شیراز تبعید شد و از راه بصره به سامرا نزد میرزای شیرازی رفت.', 'میرزای شیرازی در ژوئیهٔ ۱۸۹۱ و دو ماه بعد به شاه تلگراف زد و پاسخی نگرفت. در دسامبر فتوای تحریم در تهران پخش شد. شاه امتیاز را لغو کرد و در ۲۶ ژانویهٔ ۱۸۹۲ ماجرا پایان یافت.'],
     ['The government gave a British company the tobacco monopoly. From spring 1891, when the company began operating, opposition led by the ulama grew. Sayyed Ali Falasiri was expelled from Shiraz and went by way of Basra to Mirza Hasan Shirazi at Samarra.', 'Mirza Hasan telegraphed the shah in July 1891 and again two months later, without answer. In December the boycott fatwa circulated in Tehran. The shah cancelled the concession, and the episode closed on 26 January 1892.']],
    [['ایرانیکا این جنبش را «نخستین نمونهٔ سیاست توده‌ای در ایران» می‌خواند و یارشاطر آن را پیش‌درآمد انقلاب مشروطه و نخستین بار در دوران نو می‌داند که علما مردم شهرها را با موفقیت در برابر دولت بسیج کردند.', 'دو اختلاف را نشان می‌دهیم: سال امتیاز (۱۸۸۹ در یک مقاله، ۱۸۷۲ در دیگری) و اینکه فتوا براستی از میرزای شیرازی بود یا نه. ایرانیکا جعل آشکار را بعید می‌داند.'],
     ['Iranica calls the movement “the first instance of mass politics in Persia”, and Yarshater sees it as a prelude to the Constitutional Revolution and the first time in the modern period that the ulama successfully rallied the urban population against the government.', 'We show two disagreements: the year of the concession (1889 in one article, 1872 in another) and whether the fatwa really came from Mirza Hasan Shirazi. Iranica thinks outright forgery unlikely.']],
    [['یارشاطر جنبش تنباکو را پیش‌درآمد انقلاب مشروطه می‌داند. این‌که امروز آن را نمونهٔ ایستادگی در برابر امتیاز بیگانه می‌بینند، برداشت ماست از یاد همگانی، نه گزارهٔ منبع.'],
     ['Yarshater sees the Tobacco protest as a prelude to the Constitutional Revolution. That it is remembered today as resistance to a foreign concession is our reading of public memory, not a claim from the sources.']],
    ['iranica-shirazi', 'iranica-iran-qajar'], { quotes: [{ text: 'from this day forward, the use of tobacco for water pipes (tonbāku) and pipe tobacco (tutun), in whatever form it may be, is tantamount to warfare against the Imam of the Age [the Twelfth Imam], may God hasten his reappearance', fa: '«از امروز استعمال تنباکو و توتون، به هر نحو باشد، در حکم محاربه با امام زمان، عجل‌الله تعالی فرجه، است.»', ref: 'The boycott fatwa of December 1891 (Kermani, p. 12), in the English translation given in Encyclopaedia Iranica, “Ḥasan Širāzi”; its attribution to Mirza Hasan was doubted at the time', source: 'iranica-shirazi' }] }),
  sec('property', 'امتیازها و کیسهٔ شاه', 'Concessions and the shah’s purse',
    [['یارشاطر می‌نویسد امتیاز راه‌آهن و چند امتیاز دیگر به یک بریتانیایی داده شد و زیر فشار مردم لغو شد؛ کشمکش پس از آن به امتیاز تازهٔ بانک شاهنشاهی و حق انحصاری چاپ اسکناس انجامید. پس از لغو امتیاز تنباکو هم کشور پیامد مالی آن را پرداخت.', 'امیرکبیر در آغاز همین پادشاهی خزانه را خالی یافت و بودجه را با کاستن از مستمری درباریان و دیگران متعادل کرد.'],
     ['Yarshater writes that a railway concession and several others were granted to a British national and cancelled under popular pressure; the dispute that followed led to a new concession for the Imperial Bank of Persia with the exclusive right to issue banknotes. After the tobacco concession was cancelled, too, the country bore the financial consequences.', 'At the start of this same reign Amir Kabir found the treasury empty and balanced the budget by cutting pensions paid to courtiers and others.']],
    [['این برداشت ماست: در این امتیازها منابع کشور، از راه‌آهن تا تنباکو و پول کاغذی، چون دارایی‌ای دیده شد که شاه و دولتش می‌توانستند اجاره دهند؛ و هزینهٔ لغو آن‌ها بر دوش کشور افتاد، نه دربار. یارشاطر ناصرالدین‌شاه را «شاهی نیک‌خواه، تا جایی که پای کیسه و خوشی‌اش در میان نبود» می‌خواند.', 'محدودیت این برداشت: منابع ما سود شخصی شاه یا وزیران از امتیازها را اندازه نمی‌گیرند و ما انگیزه‌ها را حدس نمی‌زنیم. امیرکبیر نشان می‌دهد که در همان دولت راه دیگری هم آزموده شد.'],
     ['This is our reading: in these concessions the country’s resources, from railways to tobacco and paper money, were treated as property the shah and his government could lease out, and the cost of cancelling them fell on the country, not the court. Yarshater calls Naser al-Din “a well-meaning king as long as his purse and pleasure were not involved”.', 'The limits of this reading: our sources do not measure what the shah or his ministers personally gained from the concessions, and we do not guess at motives. Amir Kabir shows that another path was tried within the same state.']],
    [['ایرانیکا می‌نویسد مالیه یکی از دو مسئلهٔ بزرگ مجلس اول بود؛ پیوند دادن آن با امتیازهای دورهٔ ناصری برداشت ماست.'],
     ['Iranica writes that finances were one of the major problems facing the First Majles; linking that to the concessions of Naser al-Din’s reign is our reading.']],
    ['iranica-iran-qajar', 'iranica-amir-kabir'], { quotes: [{ text: 'Naser-al-Din Shah was a well-meaning king as long as his purse and pleasure were not involved.', fa: '«ناصرالدین‌شاه شاهی نیک‌خواه بود، تا جایی که پای کیسه و خوشی‌اش در میان نبود.»', ref: 'E. Yarshater, “Iran ii. Iranian history (2) Islamic period”, Encyclopaedia Iranica', source: 'iranica-iran-qajar' }] }),
  sec('reign', 'پنجاه سال پادشاهی و پایان آن', 'Fifty years on the throne, and the end',
    [['ناصرالدین‌شاه نزدیک پنجاه سال پادشاهی کرد. در دورهٔ او تلگراف (۱۸۵۷) و پست نو آمد، دانش‌آموختگان دارالفنون به اروپا رفتند و شاه سه بار به اروپا سفر کرد. پس از سوءقصد بابیان به جان شاه، کشتاری از بابیان به فرمان او انجام شد.', 'در ۱ مه ۱۸۹۶ میرزا رضا کرمانی، که از اندیشه‌های سید جمال‌الدین اسدآبادی اثر گرفته بود، او را کشت.'],
     ['Naser al-Din Shah reigned for a little under fifty years. In his time the telegraph (1857) and a modern postal service arrived, Dar al-Fonun graduates went to study in Europe, and the shah travelled to Europe three times. After a failed Babi attempt on his life, he ordered a massacre of the Babis.', 'On 1 May 1896 he was killed by Mirza Reza Kermani, who had been influenced by the ideas of Jamal al-Din Asadabadi.']],
    [['یارشاطر می‌نویسد ارتباط با غرب بیشتر شد اما کشور از عقب‌ماندگی، اقتصاد ضعیف، فساد طبقهٔ حاکم و بهره‌کشی از دهقانان رنج می‌برد، و سفرهای اروپا مسئله‌های اصلی را حل نکرد. همزمان اندیشهٔ قانون و آگاهی از سوءاستفاده از قدرت، به‌ویژه میان درس‌خواندگان، گسترش یافت.'],
     ['Yarshater writes that contact with the West grew but the country suffered from backwardness, a poor economy, the corruption of the ruling class and the exploitation of the peasantry, and the European trips did not solve the basic problems. At the same time the idea of law and an awareness of the abuse of power spread, especially among the educated.']],
    [['خاطرات اعتمادالسلطنه، وزیر انطباعات که برای شاه کتاب می‌خواند، یکی از منابع مهم شناخت زندگی دربار اوست. عکس‌های فراوان او، که خود به عکاسی علاقه داشت، تصویر او را در یاد مانده‌تر کرده است؛ این نکتهٔ دوم برداشت ماست.'],
     ['The diary of Eʿtemad al-Saltana, the minister of publications who read to the shah, is one of the main sources for his court life. The many photographs of him have made his image especially memorable; that second point is our own observation.']],
    YA, { photos: ['naser-1873'] }),
  sec('constitution', 'مظفرالدین‌شاه و انقلاب مشروطه', 'Mozaffar al-Din Shah and the Constitutional Revolution',
    [['مظفرالدین‌شاه (۱۸۹۶–۱۹۰۷) جانشین پدر شد. در دسامبر ۱۹۰۵، پس از آنکه حاکم تهران دو بازرگان را برای گران کردن قند فلک کرد، بازار بسته شد و حدود ۲٬۰۰۰ تن در حرم شاه عبدالعظیم بست نشستند. فرمان ۱۰ ژانویهٔ ۱۹۰۶ وعدهٔ «عدالتخانه» داد.', 'در ژوئیهٔ ۱۹۰۶ علما به قم رفتند و تا ۲ اوت ۱۴٬۰۰۰ تن در سفارت بریتانیا بست نشستند. فرمان ۵ اوت ۱۹۰۶ صادر شد، مجلس اول در ۷ اکتبر گشوده شد و قانون اساسی در ۲۷ دسامبر ۱۹۰۶ پذیرفته شد. شاه پیش از مرگش در ۹ ژانویهٔ ۱۹۰۷ این سندها را امضا کرد.'],
     ['Mozaffar al-Din Shah (1896–1907) succeeded his father. In December 1905, after the governor of Tehran had two merchants bastinadoed for raising the price of sugar, the bazaar struck and about 2,000 people took sanctuary at the shrine of Shah Abd al-Azim. A rescript of 10 January 1906 promised a house of justice (ʿadālat-ḵāna).', 'In July 1906 the ulama left for Qom, and by 2 August 14,000 people had taken sanctuary at the British legation. The farmān of 5 August 1906 was issued, the First Majles opened on 7 October, and the Fundamental Law was adopted on 27 December 1906. The shah endorsed these documents before his death on 9 January 1907.']],
    [['یارشاطر مظفرالدین‌شاه را «ضعیف، خوش‌گذران، ساده‌دل و باملاحظه» توصیف می‌کند. انقلاب از پیوند علمای اصلاح‌خواه، بازرگانان و روشنفکران زاده شد؛ ایرانیکا می‌نویسد ابهام خواستهٔ «عدالتخانه» سازش میان دربار و علمای بست‌نشین را ممکن کرد.', 'دو مقالهٔ ایرانیکا دربارهٔ فرمان ۵ اوت یکسان نمی‌گویند (فرمان مشروطیت، یا متنی مبهم که رد شد)؛ ما این اختلاف را نشان می‌دهیم.'],
     ['Yarshater describes Mozaffar al-Din Shah as “weak, pleasure-loving, simple-minded, and considerate”. The revolution was born of an alliance of reformist ulama, merchants and intellectuals; Iranica writes that the vagueness of the demand for a “house of justice” made a compromise between the court and the ulama in sanctuary possible.', 'The two Iranica articles do not agree about the farmān of 5 August (the Constitutional edict, or a vague text that was rejected); we show the disagreement.']],
    [['پسر او، محمدعلی‌شاه، در ۲۳ ژوئن ۱۹۰۸ مجلس را به توپ بست و در ژوئیهٔ ۱۹۰۹ مشروطه‌خواهان تهران را گرفتند و او را برکنار کردند. ایرانیکا می‌نویسد خواسته‌های این دوره، مانند دولت متمرکز با ارتش نیرومند و دیوان گسترده، دستور کار اصلاحات آغاز دورهٔ رضاشاه را ساخت.'],
     ['His son, Mohammad-Ali Shah, had the Majles bombarded on 23 June 1908, and in July 1909 the constitutionalists took Tehran and deposed him. Iranica writes that the goals of this era, such as a centralised state with a powerful army and an extensive bureaucracy, set the agenda for the early reforms under Reza Shah.']],
    CRI.concat(YA), { photos: ['first-majles'], quotes: [{ text: 'the principles (asās) of mašrūṭīyat cannot be suspended', fa: '«اساس مشروطیت تعطیل‌بردار نیست.»', ref: 'Supplementary Fundamental Law (1907), Art. 7, in E. G. Browne, The Persian Revolution, pp. 372-73, quoted in Encyclopaedia Iranica, “Constitutional Revolution i”', source: 'iranica-constitutional-i' }] }),
]

export const naserAlDin: FeaturedKing = {
  slug: 'naser-al-din',
  name: B('ناصرالدین‌شاه قاجار', 'Naser al-Din Shah Qajar'),
  dynastyName: B('قاجاریان', 'The Qajars'),
  reign: B('۱۸۴۸–۱۸۹۶ م', '1848–1896 CE'),
  title: B('ناصرالدین‌شاه؛ امیرکبیر، تنباکو و راه مشروطه', 'Naser al-Din Shah: Amir Kabir, tobacco and the road to the constitution'),
  lede: B(
    'نزدیک پنجاه سال پادشاهی کرد. با صدراعظمش امیرکبیر اصلاحات آغاز شد و با قتل او متوقف ماند؛ امتیازهایی که به بیگانگان داد به جنبش تنباکو انجامید و خودش در ۱۸۹۶ ترور شد. ده سال بعد، در پادشاهی پسرش مظفرالدین‌شاه، انقلاب مشروطه مجلس را پدید آورد.',
    'He reigned for nearly fifty years. Reform began with his chief minister Amir Kabir and stalled with his murder; the concessions he granted to foreigners led to the Tobacco protest, and he himself was assassinated in 1896. Ten years later, under his son Mozaffar al-Din Shah, the Constitutional Revolution created the Majles.',
  ),
  stats: [
    { n: B('۴۸ سال', '48 years'), l: B('پادشاهی (۱۸۴۸–۱۸۹۶)', 'reign (1848–1896)') },
    { n: B('۳ سال', '3 years'), l: B('صدارت امیرکبیر', 'Amir Kabir in office') },
    { n: B('۱۴٬۰۰۰', '14,000'), l: B('بست‌نشینان سفارت بریتانیا، اوت ۱۹۰۶', 'in sanctuary at the British legation, Aug 1906') },
    { n: B('۷ اکتبر ۱۹۰۶', '7 Oct 1906'), l: B('گشایش مجلس اول', 'First Majles opens') },
  ],
  mapTitle: B('نقشهٔ متحرک: زندگی و رویدادها', 'Animated map: life and events'),
  events: naserEvents,
  span: [1848, 1896],
  lifeMap: { view: [42, 28, 56, 39.5], places: [
    { name: B('تبریز', 'Tabriz'), c: P.TABRIZ, left: true }, { name: B('تهران', 'Tehran'), c: P.TEHRAN, dy: -0.5 }, { name: B('کاشان', 'Kashan'), c: P.KASHAN },
    { name: B('سامرا', 'Samarra'), c: P.SAMARRA, left: true }, { name: B('ری', 'Rey'), c: P.REY, dy: 0.5 },
  ] },
  campaign: {
    id: 'campaigns',
    title: B('از امیرکبیر تا مجلس (۱۸۴۸–۱۹۰۶ م)', 'From Amir Kabir to the Majles (1848–1906 CE)'),
    intro: { fa: ['صدارت و قتل امیرکبیر، جنبش تنباکو از شیراز تا سامرا و تهران، و بست‌های انقلاب مشروطه. تاریخ‌ها از ایرانیکا است؛ راه‌ها طرح‌وارند.'], en: ['Amir Kabir’s ministry and murder, the Tobacco protest from Shiraz to Samarra and Tehran, and the sanctuaries of the Constitutional Revolution. Dates follow Iranica; the routes are sketches.'] },
    events: protestEvents, span: [1848, 1906], view: [42, 28, 56, 39.5],
    places: [
      { name: B('تبریز', 'Tabriz'), c: P.TABRIZ, left: true }, { name: B('تهران', 'Tehran'), c: P.TEHRAN, dy: -0.5 }, { name: B('ری', 'Rey'), c: P.REY, dy: 0.5 },
      { name: B('قم', 'Qom'), c: P.QOM, left: true }, { name: B('کاشان', 'Kashan'), c: P.KASHAN }, { name: B('اصفهان', 'Isfahan'), c: P.ISFAHAN },
      { name: B('شیراز', 'Shiraz'), c: P.SHIRAZ }, { name: B('سامرا', 'Samarra'), c: P.SAMARRA, left: true },
    ],
    clip: { gif: B('/media/naser-al-din/campaigns-fa.gif', '/media/naser-al-din/campaigns-en.gif'), mp4: B('/media/naser-al-din/campaigns-fa.mp4', '/media/naser-al-din/campaigns-en.mp4'), webm: B('/media/naser-al-din/campaigns-fa.webm', '/media/naser-al-din/campaigns-en.webm'), poster: B('/media/naser-al-din/campaigns-fa.png', '/media/naser-al-din/campaigns-en.png'), width: 958, height: 356 },
  },
  shareImage: '/media/naser-al-din/campaigns-en.png',
  dossier: naserDossier,
  synthesis: { title: B('جمع‌بندی: از اصلاح از بالا تا مجلس', 'Synthesis: from reform from above to a parliament'), paras: {
    fa: [
      'در آغاز این دوره اصلاح از بالا آزموده شد: امیرکبیر دولت را نیرومند و بودجه را متعادل کرد، اما با کینهٔ درباریان برکنار و کشته شد. پس از او امتیازها و سفرها جای اصلاح را گرفت.',
      'جنبش تنباکو نشان داد که علما و بازار می‌توانند مردم را بسیج کنند. ده سال پس از ترور شاه، همین پیوند همراه با روشنفکران مظفرالدین‌شاه را به پذیرش مجلس و قانون اساسی واداشت.',
    ],
    en: [
      'Early in this period reform from above was tried: Amir Kabir strengthened the state and balanced the budget, but courtiers’ hostility brought his dismissal and murder. After him, concessions and journeys took the place of reform.',
      'The Tobacco protest showed that the ulama and the bazaar could mobilise the people. Ten years after the shah’s assassination, the same alliance, joined by intellectuals, made Mozaffar al-Din Shah accept a parliament and a constitution.',
    ],
  }, sources: ['iranica-amir-kabir', 'iranica-shirazi', 'iranica-iran-qajar', 'iranica-constitutional-ii'] },
  sources: qjSources,
  photos: qjPhotos,
  related: [
    { href: { fa: '/dynasty/qajars', en: '/dynasty/qajars' }, label: B('دودمان قاجار', 'The Qajar dynasty') },
    { href: { fa: '/king/fath-ali', en: '/en/king/fath-ali' }, label: B('فتحعلی‌شاه قاجار', 'Fath-Ali Shah Qajar') },
  ],
  wikipedia: 'https://en.wikipedia.org/wiki/Naser_al-Din_Shah_Qajar',
}
