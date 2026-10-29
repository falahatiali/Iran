/**
 * Line-level Cylinder text we may lawfully print.
 *
 * English + Akkadian transliteration of fragment A (lines 1–36): Robert William
 * Rogers, *Cuneiform Parallels to the Old Testament* (New York: Eaton & Mains /
 * London: Oxford University Press, 1912), pp. 380–384 — public domain in the US.
 * Layout as commonly cited for BM 90920 fragment A (CAIS/Hanson presentation of
 * Rogers). Never labeled as the British Museum / Finkel translation.
 *
 * Persian: this site’s own rendering of that public-domain English (2026), not
 * Razmju and not a museum translation.
 *
 * Lines 37–45 are the Yale join (NBC 2504). Rogers 1912 does not include them.
 * No copyrighted English (Finkel 2013, Schaudig/Cogan) is reproduced.
 */
export type LineStatus = 'ok' | 'damaged' | 'yale-join'
export type LibertyTheme = 'peace' | 'corvee' | 'houses' | 'return' | 'worship'

export interface CylinderLine {
  n: number
  akkadian: string | null
  en: string | null
  fa: string | null
  status: LineStatus
  themes: LibertyTheme[]
}

export const LIBERTY_THEMES: Record<LibertyTheme, { lines: number[]; fa: string; en: string }> = {
  peace: {
    lines: [22, 23, 24],
    fa: 'ورود آرام، بدون غارت و وحشت',
    en: 'Peaceful entry, without plunder or terror',
  },
  corvee: {
    lines: [8, 25, 26],
    fa: 'برداشتن یوغ بی‌شرمانه / بیگاری نبونئید',
    en: 'Relief from the shameful yoke / Nabonidus’s corvée',
  },
  houses: {
    lines: [25, 26],
    fa: 'تعمیر خانه‌ها و پایان ویرانی',
    en: 'Repair of houses and an end to their ruin',
  },
  return: {
    lines: [30, 31, 32],
    fa: 'بازگشت تبعیدیان به سرزمین و خانه‌های خود',
    en: 'Return of displaced peoples to their own lands and dwellings',
  },
  worship: {
    lines: [32, 33, 34],
    fa: 'بازگرداندن پرستشگاه‌ها و خدایان — آزادی آیین',
    en: 'Restoration of sanctuaries and gods — freedom of worship',
  },
}

export const cylinderLines: CylinderLine[] = [
  {
    n: 1,
    akkadian: '[ . . . ]-ni-šu',
    en: '[. . .] his troops',
    fa: '[. . .] سپاهیانش',
    status: 'damaged',
    themes: [],
  },
  {
    n: 2,
    akkadian: '[ . . . ]-ki-ib-ra-tim',
    en: '[. . . four] quarters of the world',
    fa: '[. . . چهار] گوشهٔ جهان',
    status: 'damaged',
    themes: [],
  },
  {
    n: 3,
    akkadian: '[. . .]-ka gal ma tu-û i-šak-na a-na e-nu-tu ma-ti-šu',
    en: '[. . .] a weakling was established as ruler over his land',
    fa: '[. . .] ناتوانی را بر سرزمینش فرمانروا نهادند',
    status: 'damaged',
    themes: [],
  },
  {
    n: 4,
    akkadian: 'ši-[ . . . ta-am]-ši-li ú-ša-aš-ki-na si-ru-šu-un',
    en: 'and [. . .] a similar one he appointed over them,',
    fa: 'و [. . .] همانندی را بر آنان گماشت،',
    status: 'damaged',
    themes: [],
  },
  {
    n: 5,
    akkadian: 'ta-am-ši-li É-sag-ila i-te-[ . . . ] a-na Uriki ù si-it-ta-tim ma-ha-za',
    en: 'like Esagila he made [. . .] to Ur and the rest of the cities,',
    fa: 'همانند اسگیلا [. . .] برای اور و بقیهٔ شهرها ساخت،',
    status: 'damaged',
    themes: [],
  },
  {
    n: 6,
    akkadian: 'pa-ra-as la si-ma-a-ti-šu-nu ta-[ . . . ] û-mi-šá-am-ma id-di-ni-ib-bu-ub ù ana na-ak-ri-tim',
    en: 'a command dishonouring them [. . .] he planned daily and in enmity,',
    fa: 'فرمانی ننگ‌آور برای آنان [. . .] هر روز و با دشمنی طرح می‌ریخت،',
    status: 'damaged',
    themes: [],
  },
  {
    n: 7,
    akkadian: 'sat-tuk-ku ù-šab-ti-li ú-ad-[di . . . ]-tak-ka-an ki-rib ma-ha-zi pa-la-ha iluMarduk šar ilâni [šá]-qi-še a-šu-uš-šu',
    en: 'he caused the daily offering to cease; he appointed [. . .] he established within the city. The worship of Marduk, king of the gods [. . .]',
    fa: 'نذر روزانه را قطع کرد؛ [. . .] را در شهر نهاد. پرستش مردوک، شاه خدایان [. . .]',
    status: 'damaged',
    themes: [],
  },
  {
    n: 8,
    akkadian: 'li-mu-ut-ti ali-šu [i-te]-ni-ip-pu-uš û-mi-šá-am-ma na-[. . . niše] i-na ab-ša-a-ni la ta-ap-šú-úh-tim ú-hal-li-iq kul-lat-si-in',
    en: 'he showed hostility toward his city daily [. . .] his people; he brought all of them to ruin through servitude without rest.',
    fa: 'هر روز با شهرش دشمنی کرد [. . .] مردمش را؛ همه را با بیگاری بی‌آسایش به تباهی کشاند.',
    status: 'ok',
    themes: ['corvee'],
  },
  {
    n: 9,
    akkadian: 'a-na ta-zi-im-ti-ši-na iluEllil lililani iz-zi-iš i-gu-ug-ma [ . . . ] ki-su-úr-šú-un ilâni a-ši-ib lib-bi-šú-nu i-zi-bu ad-ma-an-šú-un',
    en: 'On account of their complaints, the lords of the gods became furiously angry and left their land; the gods, who dwelt among them, left their homes,',
    fa: 'از شکایت آنان، خداوندانِ خدایان به‌خشم سرزمین را ترک کردند؛ خدایانی که میانشان می‌زیستند خانه‌هایشان را رها کردند،',
    status: 'ok',
    themes: [],
  },
  {
    n: 10,
    akkadian: 'i-na ug-ga-ti šá ú-še-ri-bi a-na ki-rib Babili ilu Marduk ti-[ . . . ] li-sa-ah-ra a-na nap-har da-ád-mi šá in-na-du-ú šú-bat-su-un',
    en: 'in anger over his bringing into Babylon. Marduk [. . .] to all the dwelling places, which had become ruins,',
    fa: 'از خشمِ آوردنِ آنان به بابل. مردوک [. . .] به همهٔ سکونتگاه‌هایی که ویرانه شده بودند،',
    status: 'damaged',
    themes: [],
  },
  {
    n: 11,
    akkadian: 'ù niše mât šú-me-ri ù Ak-ka-diki ša i-mu-ú ša-lam-ta-aš ú-sa-ah-hi-ir ka-[ . . . ]-ši ir-ta-ši ta-a-a-ra kul-lat ma-ta-a-ta ka-li-ši-na i-hi-it ib-ri-e-šu',
    en: 'and the people of Sumer and Akkad, who were like corpses [. . .] he turned and granted mercy. In all lands everywhere',
    fa: 'و مردم سومر و اکد را، که چون مرده بودند، [. . .] بازگرداند و رحمت کرد. در همهٔ سرزمین‌ها',
    status: 'damaged',
    themes: [],
  },
  {
    n: 12,
    akkadian: 'iš-te-\'-e-ma ma-al-ki i-ša-ru bi-bil lib-bi šá it-ta-ma-ah qa-tu-uš-šú m Ku-ra-aš šar ali An-šá-an it-ta-bi ni-bi-it-su a-na ma-li-ku-tim kul-la-ta nap-har iz-zak-ra šú-[ma-šu]',
    en: 'he searched; he looked through them and sought a righteous prince after his own heart, whom he took by the hand. He called Cyrus, king of Anshan, by name; he appointed him to lordship over the whole world.',
    fa: 'جست؛ نگریست و شاهزاده‌ای درستکار به دلخواه خویش یافت و دستش را گرفت. کوروش، شاه انشان، را به نام خواند و او را به خداوندی همهٔ جهان گماشت.',
    status: 'ok',
    themes: [],
  },
  {
    n: 13,
    akkadian: 'mât Qu-ti-i gi-mir Um-man Man-da ú-ka-an-ni-ša a-na še-pi-šu niše sal-mat qaqqadi ša ú-šá-ak-ši-du ka-ta-a-šu',
    en: 'The land of Qutu, all the Umman-manda, he cast down at his feet. The black-headed people, whom he gave his hands to conquer,',
    fa: 'سرزمین قوتو و همهٔ اومان‌ماندا را به پایش افکند. مردم سیاه‌سر را، که به دستش سپرده بود تا بگشاید،',
    status: 'ok',
    themes: [],
  },
  {
    n: 14,
    akkadian: 'i-na ki-it-tim ú mi-ša-ru iš-te-ni-\'-e-ši-na-a-tim iluMarduk belu rabu ta-ru-ú niše-šu ip-še-e-ti šá dam-qa-a-ta ù lib-ba-šú i-šá-ra ha-di-iš ip-pa-al-li-is',
    en: 'he took them in justice and righteousness. Marduk, the great lord, looked joyously on the caring for his people, on his pious works and his righteous heart.',
    fa: 'به داد و راستی نگاه داشت. مردوک، خداوند بزرگ، با شادی به مراقبت او از مردمش، به کارهای پرهیزکارانه‌اش و دل درستش نگریست.',
    status: 'ok',
    themes: [],
  },
  {
    n: 15,
    akkadian: 'a-na ali-šú Bab-ilani ki a-la-ak-šú ik-bi ú-ša-as-bi-it-su-ma har-ra-nu Babili ki-ma ib-ri ú tap-pi-e it-tal-la-ka i-da-a-šu',
    en: 'To his city, Babylon, he caused him to go; he made him take the road to Babylon, going as a friend and companion at his side.',
    fa: 'او را به شهرش بابل روانه کرد؛ راه بابل را پیش پایش نهاد، چون دوست و همدم در کنارش.',
    status: 'ok',
    themes: [],
  },
  {
    n: 16,
    akkadian: 'um-ma-ni-šu rap-ša-a-tim šá ki-ma me-e nari la ú-ta-ad-du-ú ni-ba-šu-un kakke-šú-nu sa-an-du-ma i-šá-ad-di-ha i-da-a-šú',
    en: 'His numerous troops, in unknown numbers, like the waters of a river, marched armed at his side.',
    fa: 'سپاهیان بسیارش، به شمار ناشناخته، چون آب رود، مسلح در کنارش رفتند.',
    status: 'ok',
    themes: [],
  },
  {
    n: 17,
    akkadian: 'ba-lu qab-li ù ta-ha-zi ú-še-ri-ba-aš ki-rib Babili ala-šú Bab-ilaniki i-ti-ir i-na šap-šá-ki m, iluNabu-na\'id šarru la pa-li-hi-šú ú-ma-al-la-a qa-tu-uš-šu',
    en: 'Without battle and conflict, he permitted him to enter Babylon. He spared his city, Babylon, a calamity. Nabonidus, the king, who did not fear him, he delivered into his hand.',
    fa: 'بدون نبرد و ستیز او را به درون بابل راه داد. شهرش بابل را از بلا نگاه داشت. نبونئید شاه را، که از او نمی‌ترسید، به دست او سپرد.',
    status: 'ok',
    themes: ['peace'],
  },
  {
    n: 18,
    akkadian: 'niše Babili ka-li-šú-nu nap-har mât šú-me-ri u Ak-ka-diki ru-bi-e ù šak-ka-nak-ka šá-pal-šú ik-mi-sa ú-na-aš-ši-qu še-pu-uš-šú ih-du-ú a-na šarru-ú-ti-šú im-mi-ru pa-nu-uš-šú-un',
    en: 'All the people of Babylon, Sumer, and Akkad, princes and governors, fell down before him and kissed his feet. They rejoiced in his sovereignty; their faces shone.',
    fa: 'همهٔ مردم بابل، سومر و اکد، شاهزادگان و فرمانداران، پیش پایش افتادند و پایش را بوسیدند. از شاهی‌اش شاد شدند؛ رویشان درخشید.',
    status: 'ok',
    themes: [],
  },
  {
    n: 19,
    akkadian: 'be-lu šá i-na tu-kul-ti-šá ú-bal-li-tu mi-tu-ta-an i-na bu-ta-qu ú pa-ki-e ig-mi-lu kul-la-ta-an ta-bi-iš ik-ta-ar-ra-bu-šu iš-tam-ma-ru zi-ki-ir-šú',
    en: 'The lord, who by his power brings the dead to life, who amid destruction and injury had protected them, they joyously blessed him, honoring his name.',
    fa: 'خداوندی که به نیروی خویش مرده را زنده می‌کند و در میان ویرانی و آسیب نگاهشان داشته بود، با شادی برکت دادند و نامش را بزرگ داشتند.',
    status: 'ok',
    themes: [],
  },
  {
    n: 20,
    akkadian: 'a-na-ku mKu-ra-aš šar kiš-šat šarru rabu šarru dan-nu šar Babili šar mât šú-me-ri ú Ak-ka-di šar kib-ra-a-ti ir-bit-tim',
    en: 'I am Cyrus, king of the world, the great king, the powerful king, king of Babylon, king of Sumer and Akkad, king of the four quarters of the world,',
    fa: 'منم کوروش، شاه جهان، شاه بزرگ، شاه نیرومند، شاه بابل، شاه سومر و اکد، شاه چهار گوشهٔ جهان،',
    status: 'ok',
    themes: [],
  },
  {
    n: 21,
    akkadian: 'mar mKa-am-bu-zi-ia šarru rabu šar alu An-šá-an mar mari mKu-ra-aš šarru rabu šar alu An-šá-an ŠA.BAL.BAL m ši-iš-pi-iš šarru rabu šar alu An-ša-an',
    en: 'son of Cambyses, the great king, king of the city of Anshan, grandson of Cyrus, the great king, king of the city of Anshan; great-grandson of Teispes, the great king, king of the city of Anshan;',
    fa: 'پسر کمبوجیه شاه بزرگ شاه شهر انشان؛ نوهٔ کوروش شاه بزرگ شاه شهر انشان؛ نبیرهٔ چیش‌پیش شاه بزرگ شاه شهر انشان؛',
    status: 'ok',
    themes: [],
  },
  {
    n: 22,
    akkadian: 'ziru da-ru-ú ša šarru-ú-tu ša iluBel u ilu Nabu ir-a-mu pa-la-a-šú a-na tu-ub lib-bi-šú-nu ih-ši-ha šarru-ut-su e-nu-ma a-na ki-rib Babili e-ru-bu sa-li-mi-iš',
    en: 'eternal seed of royalty whose rule Bel and Nabu love, in whose administration they rejoice in their heart. When I made my triumphal entrance into Babylon,',
    fa: 'تخمهٔ جاودان شاهی که بل و نبو فرمانش را دوست می‌دارند و از حکومتش در دل شادند. چون با پیروزی به بابل درآمدم،',
    status: 'ok',
    themes: ['peace'],
  },
  {
    n: 23,
    akkadian: 'i-na ul-si ù ri-šá-a-tim i-na ekal ma-al-ki ar-ma-a šú-bat be-lu-tim iluMarduk belu rabu lib-bi ri-it-pa-šú šá mare Babili ú . . . an-ni-ma û-mi-šam a-še-\'-a pa-la-ah-šú',
    en: 'I took up my lordly residence in the royal palace with joy and rejoicing; Marduk, the great lord, moved the noble heart of the residents of Babylon to me, while I gave daily attention to his worship.',
    fa: 'با شادی و سور در کاخ شاهی نشستم؛ مردوک، خداوند بزرگ، دل نژادهٔ باشندگان بابل را به‌سویم گرداند، و من هر روز به پرستش او پرداختم.',
    status: 'ok',
    themes: ['peace', 'worship'],
  },
  {
    n: 24,
    akkadian: 'um-ma-ni-ia rap-ša-tim i-na ki-rib Babili i-šá-ad-di-ha šú-ul-ma-niš nap-har mat [šu-me-ri] ù Akkadiki mu-gal-[l]i-tim ul ú-šar-ši',
    en: 'My numerous troops marched peacefully into Babylon. In all Sumer and Akkad I permitted no enemy to enter.',
    fa: 'سپاهیان بسیارم آسوده به بابل درآمدند. در همهٔ سومر و اکد هیچ دشمنی را راه ندادم.',
    status: 'ok',
    themes: ['peace'],
  },
  {
    n: 25,
    akkadian: 'dannat Babili ù kul-lat ma-ha-zi-šu i-na šà-li-im-tim aš-te-\'-e mare Babi[li . . .] ki ma-la lib-[. . .]-ma ab-ša-a-ni la si-ma-ti-šu-nu šú-bat-su-un',
    en: 'The needs of Babylon and of all its cities I gladly attended to. The people of Babylon [and . . .], and the shameful yoke was removed from them. Their dwellings,',
    fa: 'نیاز بابل و همهٔ شهرهایش را به‌خوشی برآوردم. مردم بابل [و . . .]، و یوغ ننگین از گردنشان برداشته شد. خانه‌هایشان،',
    status: 'damaged',
    themes: ['corvee', 'houses'],
  },
  {
    n: 26,
    akkadian: 'an-hu-ut-su-un ú-pa-aš-ši-ha ú-šá-ap-ti-ir sa-ar-ba-šu-nu a-na ip-še-e-ti-[ia] iluMarduk belu rabu ú-ih-di-e-ma',
    en: 'which had fallen, I restored. I cleared out their ruins. Marduk, the great lord, rejoiced in my pious deeds, and',
    fa: 'که فروریخته بود، باز ساختم. ویرانه‌هایشان را پاک کردم. مردوک، خداوند بزرگ، از کارهای پرهیزکارانهٔ من شاد شد، و',
    status: 'ok',
    themes: ['corvee', 'houses'],
  },
  {
    n: 27,
    akkadian: 'a-na ia-a-ti mKu-ra-aš šarru pa-li-ih-šu ù mKa-am-bu-zi-ia mari si-it lib-bi-[ia ù a]-na nap-har um-ma-ni-ia',
    en: 'graciously blessed me, Cyrus, the king who worships him, and Cambyses, my own son, and all my troops,',
    fa: 'مرا، کوروش شاهی که او را می‌پرستد، و کمبوجیه پسر خودم، و همهٔ سپاهیانم را به‌نرمی برکت داد،',
    status: 'ok',
    themes: [],
  },
  {
    n: 28,
    akkadian: 'da-am-ki-iš ik-ru-ub-ma i-na ša-lim-tim ma-har-ša ta-bi-iš ni-it-ta-[\'-id i-lu-ti-šu] sir-ti nap-har šarri a-ši-ib parakke',
    en: 'while we, before him, joyously praised his exalted godhead. All the kings dwelling in palaces,',
    fa: 'و ما پیش روی او با شادی الوهیت والایش را ستودیم. همهٔ شاهانی که در کاخ‌ها می‌نشینند،',
    status: 'damaged',
    themes: [],
  },
  {
    n: 29,
    akkadian: 'ša ka-li-iš kib-ra-a-ta iš-tu tam-tim e-li-tim a-di tam-tim šap-li-tim a-ši-ib kul-[. . .] šar-ra-ni mati A-mur-ri-i a-ši-ib kuš-ta-ri ka-li-šu-un',
    en: 'of all the quarters of the earth, from the Upper to the Lower sea dwelling [. . .] all the kings of the Westland dwelling in tents',
    fa: 'از همهٔ گوشه‌های زمین، از دریای بالا تا دریای پایین [. . .] همهٔ شاهان مغرب‌زمین که در خیمه می‌زیند',
    status: 'damaged',
    themes: [],
  },
  {
    n: 30,
    akkadian: 'bi-lat-su-nu ka-bi-it-tim ú-bi-lu-nim-ma ki-ir-ba Babili ú-na-aš-ši-qu še-pu-ú-a iš-tu [. . .] a-di alu Aššurki ù Šu-šan ki',
    en: 'brought me their heavy tribute, and in Babylon kissed my feet. From [. . .] to Asshur and Susa,',
    fa: 'باج گران خود را آوردند و در بابل پایم را بوسیدند. از [. . .] تا آشور و شوش،',
    status: 'damaged',
    themes: ['return'],
  },
  {
    n: 31,
    akkadian: 'A-ga-deki mâtu Eš-nu-nak alu Za-am-ba-an alu Me-túr-nu Deriki a-di pa-at mât Qu-ti-i ma-ha-za [šá e-bir]-ti nâru Diqlat šá iš-tu ap-na-ma na-du-ú šú-bat-su-un',
    en: 'Agade, Eshnunak, Zamban, Meturnu, Deri, with the territory of the land of Qutu, the cities on the other side of the Tigris, whose sites were of ancient foundation—',
    fa: 'آگاده، اشنونک، زامبان، متورنو، دِری، با قلمرو قوتو، شهرهای آن سوی دجله که بنیادشان کهن بود—',
    status: 'ok',
    themes: ['return'],
  },
  {
    n: 32,
    akkadian: 'ilâni a-ši-ib lib-bi-šu-nu a-na aš-ri-šú-nu ú-tir-ma ú-šar-ma-a šú-bat da-er-a-ta kul-lat niše-šu-nu ú-pa-ah-hi-ra-am-ma ú-te-ir da-ád-mi-šu-un',
    en: 'the gods, who resided in them, I brought back to their places, and caused them to dwell in a residence for all time. All their people I gathered and restored to their dwelling-places.',
    fa: 'خدایانی را که در آن‌ها می‌زیستند به جای خود بازگرداندم و در خانه‌ای جاودان نشاندم. همهٔ مردمشان را گرد آوردم و به سکونتگاه‌هایشان بازگرداندم.',
    status: 'ok',
    themes: ['return', 'worship'],
  },
  {
    n: 33,
    akkadian: 'ù ilâni mât šú-me-ri ù Akkadiki šá m, iluNabu-na\'id a-na ug-ga-tim bel ilâni ú-še-ri-bi a-na ki-rib Babili i-na ki-bi-ti iluMarduk belu rabû i-na šá-li-im-tim',
    en: 'And the gods of Sumer and Akkad—whom Nabonidus, to the anger of the lord of the gods, had brought into Babylon—by the command of Marduk, the great lord,',
    fa: 'و خدایان سومر و اکد را — که نبونئید به خشم خداوندِ خدایان به بابل آورده بود — به فرمان مردوک، خداوند بزرگ،',
    status: 'ok',
    themes: ['worship'],
  },
  {
    n: 34,
    akkadian: 'i-na maš-ta-ki-šu-nu ú-še-ši-ib šú-ba-at tu-ub lib-bi kul-la-ta ilâni ša ú-še-ri-bi a-na ki-ir-bi ma-ha-zi-šu-un',
    en: 'I caused them to take up their dwelling in residences that gladdened the heart. May all the gods, whom I brought into their cities,',
    fa: 'در خانه‌هایی که دل را شاد می‌کند نشاندم. باشد که همهٔ خدایانی که به شهرهایشان بازگرداندم،',
    status: 'ok',
    themes: ['worship'],
  },
  {
    n: 35,
    akkadian: 'û-mi-ša-am ma-har iluBel ù iluNabu ša a-ra-ku ume-ia li-ta-mu-ú lit-taš-ka-ru a-ma-a-ta du-un-ki-ia ù a-na iluMarduk beli-ia li-iq-bu-ú ša mKu-ra-aš šarri pa-li-hi-ka u mKa-am-bu-zi-ia mari-šu',
    en: 'pray daily before Bêl and Nabû for long life for me, and may they speak a gracious word for me and say to Marduk, my lord, “May Cyrus, the king who worships you, and Cambyses, his son,',
    fa: 'هر روز پیش بل و نبو برای درازی عمرم دعا کنند و سخنی نیک برایم بگویند و به مردوک، خداوند من، بگویند: «کوروش، شاهی که تو را می‌پرستد، و کمبوجیه پسرش،',
    status: 'ok',
    themes: [],
  },
  {
    n: 36,
    akkadian: 'da [ . . . ] ib-šu-nu lu-ú [ . . . ] ka-li-ši-na šú-ub-ti ni-ih-tim ú-še-ši-ib [ . . . ]',
    en: 'their [. . .] I permitted all to dwell in peace [. . .]',
    fa: 'ایشان را [. . .] همه را در آسایش جای دادم [. . .]',
    status: 'damaged',
    themes: ['peace'],
  },
  yale(37),
  yale(38),
  yale(39),
  yale(40),
  yale(41),
  yale(42),
  yale(43),
  yale(44),
  yale(45),
]

function yale(n: number): CylinderLine {
  return {
    n,
    akkadian: null,
    en: null,
    fa: null,
    status: 'yale-join',
    themes: [],
  }
}

export const YALE_NOTE = {
  fa: 'سطرهای ۳۷–۴۵ روی قطعهٔ ییل (NBC 2504)اند و در راجرز ۱۹۱۲ نیستند. ایرانیکا: بازسازی دیوار ایمگور-انلیل بابل و یافتن کتیبه‌ای از آشوربانی‌پال؛ پایان هنوز ناقص است. ترجمهٔ فینکل ۲۰۱۳ حق‌نشر دارد و اینجا بازنشر نشده است.',
  en: 'Lines 37–45 sit on the Yale fragment (NBC 2504) and are absent from Rogers 1912. Iranica: restoration of Babylon’s wall Imgur-Enlil and an inscription of Ashurbanipal; the ending is still incomplete. Finkel 2013 is copyrighted and is not reproduced here.',
}

export function lineAnchor(n: number): string {
  return `line-${String(n).padStart(2, '0')}`
}

export function linesForTheme(theme: LibertyTheme): CylinderLine[] {
  const want = new Set(LIBERTY_THEMES[theme].lines)
  return cylinderLines.filter((l) => want.has(l.n))
}
