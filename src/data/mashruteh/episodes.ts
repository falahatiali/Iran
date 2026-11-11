/**
 * Episode guide to Amir Khadem’s podcast «ماجرای مشروطه» (Majera Media). Titles are the episodes’ own;
 * the one-line summaries paraphrase Khadem’s own episode descriptions. No transcript text is republished.
 */
import type { Bi } from '../featured/types'

const B = (fa: string, en: string): Bi => ({ fa, en })

export const PODCAST_LINKS: { label: Bi; href: string }[] = [
  { label: B('فهرست پخش یوتیوب', 'YouTube playlist'), href: 'https://www.youtube.com/playlist?list=PL4Uk6RJQQjAu9CPHTvDqaXq1pHpQhNXLn' },
  { label: B('آکست (فید صوتی)', 'Acast (audio feed)'), href: 'https://shows.acast.com/mashruteh' },
  { label: B('کانال تلگرام', 'Telegram channel'), href: 'https://t.me/mashrutehwithamirkhadem' },
  { label: B('سایت ماجرای ایران', 'Majera website'), href: 'https://majera.xyz/podcasts/mashruteh/' },
  { label: B('کانال یوتیوب Majera Media', 'Majera Media on YouTube'), href: 'https://www.youtube.com/channel/UC0b3do0yN5nePF8bYaPbIcw' },
]

export type EpisodePart = 'roots' | 'mozaffar' | 'mohammad-ali'
export interface Episode { n: number | 'special'; id: string; title: Bi; summary: Bi; part: EpisodePart; view?: boolean }

const e = (n: Episode['n'], id: string, part: EpisodePart, title: Bi, summary: Bi, view?: boolean): Episode => ({ n, id, part, title, summary, view })

export const episodes: Episode[] = [
  e(1, 'xVOiXK4C7Q0', 'roots', B('یکم: زمین', '1: Land'), B('اقتصاد کشاورزی دورهٔ قاجار و مالکیت زمین.', 'The agrarian economy of Qajar Iran and landownership.')),
  e(2, 'DcAg50IY1PE', 'roots', B('دوم: باب', '2: The Bab'), B('آغاز جنبش بابیه و نسبت آن با مشروطه.', 'The beginning of the Babi movement and its relation to the constitutional era.')),
  e(3, 'sl13QpRjycs', 'roots', B('سوم: بها و ازل', '3: Baha and Azal'), B('انشعاب بابیان و نسل‌های بعد تا دورهٔ مشروطه.', 'The split among the Babis and the following generations up to the constitutional era.')),
  e(4, 'L45crvxnI7M', 'roots', B('چهارم: عثمانی', '4: The Ottomans'), B('اصلاحات عثمانی و پیدایش حکومت مشروطه در آن کشور.', 'Ottoman reform and the rise of constitutional government there.')),
  e(5, '7blfUBK72ug', 'roots', B('پنجم: تنظیمات', '5: Tanzimat'), B('اصلاحات میرزا حسین‌خان سپهسالار و اندیشهٔ ملکم‌خان و مستشارالدوله.', 'The reforms of Mirza Hosein Khan Sepahsalar and the ideas of Malkam Khan and Mostashar al-Dowleh.')),
  e(6, 'W5bvqGOtAqo', 'roots', B('ششم: فراماسون', '6: Freemasons'), B('انجمن‌های فراماسونری در ایران و آن‌ها که در دورهٔ مشروطه فعال بودند.', 'Masonic societies in Iran and those active in the constitutional era.')),
  e(7, 'VeYpgl7ug5I', 'roots', B('هفتم: جمال‌الدین', '7: Jamal al-Din'), B('اندیشه و سیاست سید جمال‌الدین اسدآبادی و اثر غیرمستقیم او؛ ترور ناصرالدین‌شاه به دست میرزا رضای کرمانی.', 'The ideas and politics of Sayyed Jamal al-Din Asadabadi and his indirect influence; the assassination of Naser al-Din Shah by Mirza Reza Kermani.')),
  e(8, 'sGvL-yHzaOE', 'roots', B('هشتم: تنباکو، بخش ۱', '8: Tobacco, part 1'), B('بازرگانان، امتیازنامه‌های پیشین و جایگاه تنباکو در اقتصاد ایران.', 'The merchants, earlier concessions and the place of tobacco in Iran’s economy.')),
  e(9, 'PhGemhGMaGY', 'roots', B('نهم: تنباکو، بخش ۲', '9: Tobacco, part 2'), B('امتیازنامهٔ تنباکو، گسترش اعتراض و لغو آن، و پیامدهای اقتصادی و سیاسی.', 'The tobacco concession, the spread of protest, its cancellation and the economic and political consequences.')),
  e(10, 'XZM1MDVF4kk', 'roots', B('دهم: روسیه', '10: Russia'), B('رویدادهای آغاز قرن بیستم در روسیه، اثرشان بر ایران و روشنفکران ایرانیِ ساکن روسیه.', 'Early twentieth-century Russia, its effect on Iran, and Iranian intellectuals living in Russia.')),
  e(11, 'uYOsk1pdUP0', 'roots', B('یازدهم: مدرسه', '11: Schools'), B('رشد مدرسه‌های نو و پیوند آن با جنبش مشروطه.', 'The growth of new-style schools and their link with the constitutional movement.')),
  e(12, 'qz496CymOzY', 'roots', B('دوازدهم: ایلات', '12: The tribes'), B('تاریخ سیاسی ایلات و ایل بختیاری در آستانهٔ مشروطه.', 'The political history of the tribes and the Bakhtiari on the eve of the revolution.')),
  e('special', 'ABcDWMGOHrc', 'roots', B('ویژهٔ پاسخ به شنوندگان', 'Special: listeners’ questions'), B('پاسخ به پرسش‌های شنوندگان.', 'Answers to listeners’ questions.')),
  e(13, 'GeVrZv-ZOQc', 'roots', B('سیزدهم: پول', '13: Money'), B('نظام پولی اواخر قاجار، کسری بودجه، وام‌های خارجی و هزینهٔ سفرهای اروپایی مظفرالدین‌شاه.', 'The late Qajar monetary system, budget deficits, foreign loans and the cost of Mozaffar al-Din Shah’s European journeys.')),
  e(14, '46EAx6KeoX4', 'mozaffar', B('چهاردهم: بهمن ۱۲۸۱ تا شهریور ۱۲۸۲', '14: Bahman 1281 – Shahrivar 1282'), B('سال آخر صدارت امین‌السلطان و سقوط او.', 'Amin al-Soltan’s last year as chief minister and his fall.')),
  e(15, 'teLbm4Fj7ao', 'mozaffar', B('پانزدهم: مهر ۱۲۸۲ تا خرداد ۱۲۸۳', '15: Mehr 1282 – Khordad 1283'), B('ماه‌های نخست صدارت عین‌الدوله و نخستین انجمن مخفی انقلابی.', 'Ain al-Dowleh’s first months in office and the first secret revolutionary society.')),
  e(16, 'ybnnle34Muo', 'mozaffar', B('شانزدهم: تیر تا اسفند ۱۲۸۳', '16: Tir – Esfand 1283'), B('انجمن مخفی ناظم‌الاسلام کرمانی، اقتصاد ۱۲۸۳ و برنامه‌های درآمدی دولت.', 'Nazem al-Eslam Kermani’s secret society, the economy of 1904 and the government’s revenue schemes.')),
  e(17, 'suhj6dMgjas', 'mozaffar', B('هفدهم: فروردین تا مرداد ۱۲۸۴', '17: Farvardin – Mordad 1284'), B('اعتراض منبرها به نوز، بست بازرگانان در شاه عبدالعظیم، سفر سوم شاه به اروپا و داستان دختران قوچان.', 'Pulpit protests against Naus, the merchants’ sanctuary at Shah Abd al-Azim, the shah’s third European journey and the story of the Quchan girls.')),
  e(18, '90AdWaUVtvM', 'mozaffar', B('هجدهم: شهریور تا آذر ۱۲۸۴', '18: Shahrivar – Azar 1284'), B('آشوب کرمان، شورش علیه ساختمان بانک استقراضی روس، فلک کردن بازرگانان به بهانهٔ گرانی قند و بست علما در شاه عبدالعظیم.', 'Unrest in Kerman, the riot against the Russian Loan Bank’s new building, the bastinado of merchants over the price of sugar, and the ulama’s sanctuary at Shah Abd al-Azim.')),
  e(19, 'KAJDlj9D78c', 'mozaffar', B('نوزدهم: دی ۱۲۸۴ تا اردیبهشت ۱۲۸۵', '19: Dey 1284 – Ordibehesht 1285'), B('بست شاه عبدالعظیم و پیامدهایش، و نشستی در دربار که احتشام‌السلطنه در آن آشکارا از مشروطه سخن گفت.', 'The Abd al-Azim sanctuary and its aftermath, and a court meeting where Ehtesham al-Saltaneh raised constitutionalism openly.')),
  e(20, 'sg9RlIOLZhM', 'mozaffar', B('بیستم: خرداد تا مرداد ۱۲۸۵', '20: Khordad – Mordad 1285'), B('تیراندازی در بازار، کوچ علما به قم، بست در باغ سفارت انگلیس، استعفای عین‌الدوله و فرمان مشروطیت.', 'Shooting in the bazaar, the ulama’s departure for Qom, the sanctuary in the British legation garden, Ain al-Dowleh’s resignation and the constitutional rescript.')),
  e(21, 'g8fcz44iSZ4', 'mozaffar', B('بیست‌ویکم: شهریور و مهر ۱۲۸۵', '21: Shahrivar and Mehr 1285'), B('قانون انتخابات، اعتراض‌ها در رشت و تبریز، انتخابات تهران و پیشینهٔ سوسیالیسم در ایران.', 'The electoral law, protests in Rasht and Tabriz, the Tehran elections and the background of socialism in Iran.')),
  e(22, 'xZwwak05fIk', 'mozaffar', B('بیست‌ودوم: آبان تا دی ۱۲۸۵', '22: Aban – Dey 1285'), B('نخستین نشست‌های مجلس، بانک ملی و تصویب قانون اساسی.', 'The first sessions of the Majles, the national bank and the adoption of the Fundamental Law.')),
  e(23, 'XPhnUk6A9w0', 'mozaffar', B('بیست‌وسوم: مرور قانون اساسی', '23: Reading the constitution'), B('مرور مفصل متن قانون اساسی دی ۱۲۸۵ و نقد طالبوف در «ایضاحات در خصوص آزادی».', 'A close reading of the Fundamental Law of January 1907 and Talebov’s critique in “Clarifications on liberty”.')),
  e(24, 'XFU-SpSplm8', 'mozaffar', B('بیست‌وچهارم: مشروطه و ما', '24: The constitution and us'), B('سخنرانی خود امیر خادم دربارهٔ نسبت امروز ما با مشروطه؛ تفسیر اوست، نه روایت رویداد.', 'Amir Khadem’s own talk on what the constitution means to us today; his interpretation, not a narrative of events.'), true),
  e(25, 'Oz6X7Csl20Q', 'mohammad-ali', B('بیست‌وپنجم: بهمن و اسفند ۱۲۸۵', '25: Bahman and Esfand 1285'), B('آغاز پادشاهی محمدعلی‌شاه، کشمکش با مجلس، استعفای مشیرالدوله و بانک ملی.', 'The start of Mohammad Ali Shah’s reign, the struggle with the Majles, Moshir al-Dowleh’s resignation and the national bank.')),
  e(26, 'zBCOV-YqnSE', 'mohammad-ali', B('بیست‌وششم: فروردین و اردیبهشت ۱۲۸۶', '26: Farvardin and Ordibehesht 1286'), B('بازگشت امین‌السلطان، گرفتاری‌های بانک ملی، لغو تیول، قانون انجمن‌های ایالتی و ولایتی و برکناری ظل‌السلطان از اصفهان.', 'Amin al-Soltan’s return, the national bank’s troubles, the abolition of toyul, the law on provincial councils and Zell al-Soltan’s removal from Isfahan.')),
  e(27, 'Ruf_1i7seP8', 'mohammad-ali', B('بیست‌وهفتم: خرداد ۱۲۸۶', '27: Khordad 1286'), B('شورش سالارالدوله، اعتراض‌های تازهٔ تبریز و کشمکش مجلس بر سر متمم قانون اساسی.', 'Salar al-Dowleh’s revolt, new protests in Tabriz and the Majles’s quarrel over the Supplementary Law.')),
  e(28, '6qVfuemV5ZE', 'mohammad-ali', B('بیست‌وهشتم: حقوق و وظایف ملت', '28: The rights and duties of the nation'), B('کتابی که در بهار ۱۲۸۶ اندیشهٔ سیاسی غرب را به زبان ساده برای خوانندهٔ ایرانی گفت.', 'A book of spring 1907 that put Western political ideas simply for Iranian readers.')),
  e(29, 'W_R69Qlnv0o', 'mohammad-ali', B('بیست‌ونهم: اصول علم ثروت ملل', '29: Principles of the wealth of nations'), B('ترجمهٔ محمدعلی فروغی از یک کتاب فرانسوی اقتصاد سیاسی، یک سال پیش از مجلس.', 'Mohammad Ali Foroughi’s translation of a French book of political economy, a year before the Majles.')),
  e(30, 'qyFYy4HG-LY', 'mohammad-ali', B('سی‌ام: تیر و مرداد ۱۲۸۶', '30: Tir and Mordad 1286'), B('بست شیخ فضل‌الله نوری در اعتراض به مشروطه و پشتیبانی پنهان شاه از او؛ پیشروی عثمانی تا نزدیک ارومیه.', 'Shaikh Fazlollah Nuri’s sanctuary against the constitution and the shah’s covert support; the Ottoman advance near Urmia.')),
  e(31, 'A7Abr5ClKgU', 'mohammad-ali', B('سی‌ویکم: شهریور ۱۲۸۶', '31: Shahrivar 1286'), B('ترور امین‌السلطان اتابک، از مهم‌ترین رویدادهای دورهٔ مجلس اول.', 'The assassination of Amin al-Soltan, the Atabak, one of the key events of the First Majles.')),
  e(32, 'yf8LUMrLUiI', 'mohammad-ali', B('سی‌ودوم: مهر و آبان ۱۲۸۶', '32: Mehr and Aban 1286'), B('پس از ترور اتابک: رئیس تازهٔ مجلس، تصویب متمم، پایان بست شیخ فضل‌الله، قرارداد انگلیس و روس و بودجهٔ مجلس.', 'After the Atabak’s murder: a new Majles president, the Supplement ratified, the end of Nuri’s sanctuary, the Anglo-Russian convention and the Majles budget.')),
  e(33, 'fhZQOujfOso', 'mohammad-ali', B('سی‌وسوم: آذر و دی ۱۲۸۶', '33: Azar and Dey 1286'), B('کودتای ناکام محمدعلی‌شاه در پایان آذر ۱۲۸۶ و هفته‌های پس از آن.', 'Mohammad Ali Shah’s failed coup at the end of Azar 1286 and the weeks that followed.')),
  e(34, 'PFBi_MIm-ZE', 'mohammad-ali', B('سی‌وچهارم: بهمن و اسفند ۱۲۸۶', '34: Bahman and Esfand 1286'), B('سوءقصد ناکام به محمدعلی‌شاه، افول احتشام‌السلطنه در ریاست مجلس و کشمکش‌های مرزی با عثمانی.', 'The failed attempt on Mohammad Ali Shah, Ehtesham al-Saltaneh’s decline as Majles president and border clashes with the Ottomans.')),
]

const toSec = (t: string) => t.split(':').map(Number).reduce((a, b) => a * 60 + b, 0)
export const episode = (n: Episode['n']) => episodes.find((x) => x.n === n)
/** A YouTube link to an episode, optionally at a timestamp ("HH:MM:SS"). */
export const episodeUrl = (n: Episode['n'], t?: string) => {
  const ep = episode(n)
  if (!ep) throw new Error(`no episode ${String(n)}`)
  return `https://www.youtube.com/watch?v=${ep.id}${t ? `&t=${toSec(t)}s` : ''}`
}
