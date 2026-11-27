/** Bibliography for /civilizations. Every section and milestone on those pages cites ids from this list.
 * Encyclopaedia Iranica entries were read on iranicaonline.org; UNESCO texts on whc.unesco.org; museum records on the museum's own site. */
import type { CivSource } from './types'

const iranica = (id: string, author: string, title: string, year: string, slug: string): CivSource => ({
  id, author: `${author}، دانشنامهٔ ایرانیکا`, title, year, url: `https://www.iranicaonline.org/articles/${slug}/`, kind: 'encyclopedia',
})
const unesco = (id: string, title: string, n: number): CivSource => ({
  id, author: 'مرکز میراث جهانی یونسکو', title, year: 'برگهٔ ثبت جهانی', url: `https://whc.unesco.org/en/list/${n}/`, kind: 'unesco',
})

export const civSources: CivSource[] = [
  // Encyclopaedia Iranica
  iranica('ir-alikosh', 'Frank Hole', 'ʿALĪKOŠ', '1985', 'ali-kosh'),
  iranica('ir-anshan', 'John F. Hansman', 'ANSHAN', '1985', 'anshan'),
  iranica('ir-chogha-mish', 'Helene J. Kantor', 'ČOḠĀ MĪŠ', '1992', 'coga-mis'),
  iranica('ir-chogha-zanbil', 'Elizabeth Carter', 'ČOḠĀ ZANBĪL', '1992', 'coga-zanbil'),
  iranica('ir-ecbatana', 'Stuart C. Brown', 'ECBATANA', '1997', 'ecbatana'),
  iranica('ir-elam-history', 'François Vallat', 'ELAM i. The history of Elam', '1998', 'elam-i'),
  iranica('ir-elam-archaeology', 'Elizabeth Carter', 'ELAM ii. The archaeology of Elam', '1998', 'elam-ii'),
  iranica('ir-godin', 'Encyclopaedia Iranica', 'GODIN TEPE', '2001', 'godin'),
  iranica('ir-haft-tepe', 'Ezzatollah Negahban', 'HAFT TEPE', '2002', 'haft-tepe'),
  iranica('ir-hasanlu-site', 'Robert H. Dyson Jr.', 'ḤASANLU TEPPE i. The site', '2003', 'hasanlu-teppe-i'),
  iranica('ir-hasanlu-bowl', 'Robert H. Dyson Jr.', 'ḤASANLU TEPPE ii. The golden bowl', '2003', 'hasanlu-teppe-ii'),
  iranica('ir-hissar', 'Robert H. Dyson Jr.', 'TEPE HISSAR', '2009', 'hesar-tepe'),
  iranica('ir-jiroft', 'Oscar White Muscarella', 'JIROFT iii. General survey of excavations', '2008', 'jiroft-iii-general-survey-of-excavations'),
  iranica('ir-kassites', 'Ran Zadok', 'KASSITES', '2013', 'kassites'),
  iranica('ir-luristan', 'Encyclopaedia Iranica', 'LURISTAN BRONZES', 'online edition', 'luristan-bronzes'),
  iranica('ir-mannea', 'Ran Zadok', 'MANNEA', '2006', 'mannea'),
  iranica('ir-marlik', 'Kamyar Abdi', 'MĀRLIK', '2000', 'marlik'),
  iranica('ir-media', 'Encyclopaedia Iranica', 'MEDIA', '2006', 'media'),
  iranica('ir-susa-excavations', 'Hermann Gasche', 'SUSA i. Excavations', '2009', 'susa-i-excavations'),
  iranica('ir-susa-elamite', 'François Vallat', 'SUSA ii. History during the Elamite period', '2008', 'susa-ii-history-during-the-elamite-period'),
  iranica('ir-yahya', 'Daniel T. Potts', 'TEPE YAHYA', '2004', 'tepe-yahya'),
  iranica('ir-urartu', 'Wolfram Kleiss', 'URARTU', '2008', 'urartu'),
  iranica('ir-ziwiye', 'Oscar White Muscarella', 'ZIWIYE', '2017', 'ziwiye'),
  // UNESCO
  unesco('unesco-susa', 'Susa', 1455),
  unesco('unesco-chogha-zanbil', 'Tchogha Zanbil', 113),
  unesco('unesco-shahr-i-sokhta', 'Shahr-i Sokhta', 1456),
  unesco('unesco-hegmataneh', 'Hegmataneh', 1716),
  // journals, books, magazines
  {
    id: 'lawler-world-between', author: 'Andrew Lawler، مجلهٔ Archaeology (انجمن باستان‌شناسی آمریکا)', title: 'The World in Between', year: '۲۰۱۱',
    url: 'https://archaeology.org/issues/online/features/the-world-in-between/', kind: 'magazine',
  },
  {
    id: 'ascalone-2024', author: 'Enrico Ascalone', title: 'Shahr-i Sokhta: new revised sequence (Iranica Antiqua 58)', year: '2024',
    url: 'https://doi.org/10.2143/IA.58.0.3292992', kind: 'journal',
  },
  {
    id: 'riel-salvatore-2021', author: 'Julien Riel-Salvatore, Andrew Lythe, Alejandra Uribe Albornoz', title: 'New insights into the spatial organization, stratigraphy and human occupations of the Aceramic Neolithic at Ganj Dareh, Iran (PLOS ONE)', year: '2021',
    url: 'https://doi.org/10.1371/journal.pone.0251318', kind: 'journal',
  },
  {
    id: 'zeder-hesse-2000', author: 'Melinda A. Zeder, Brian Hesse', title: 'The initial domestication of goats (Capra hircus) in the Zagros Mountains 10,000 years ago (Science 287)', year: '2000',
    url: 'https://doi.org/10.1126/science.287.5461.2254', kind: 'journal',
  },
  {
    id: 'fazeli-2013', author: 'Hassan Fazeli Nashli, Robin Coningham و دیگران', title: 'Mapping the Neolithic occupation of the Kashan, Tehran and Qazvin plains (در The Neolithisation of Iran)', year: '2013',
    url: 'https://doi.org/10.2307/j.ctvh1dp0q.14', kind: 'book',
  },
  {
    id: 'michel-1993', author: 'Rudolph H. Michel, Patrick E. McGovern, Virginia R. Badler', title: 'The first wine & beer: chemical detection of ancient fermented beverages (Analytical Chemistry 65)', year: '1993',
    url: 'https://doi.org/10.1021/ac00056a002', kind: 'journal',
  },
  {
    id: 'nyt-beer-1992', author: 'نیویورک تایمز', title: 'Jar in Iranian Ruins Betrays Beer Drinkers of 3500 B.C.', year: '۵ نوامبر ۱۹۹۲',
    url: 'https://www.nytimes.com/1992/11/05/world/jar-in-iranian-ruins-betrays-beer-drinkers-of-3500-bc.html', kind: 'magazine',
  },
  {
    id: 'desset-2022', author: 'François Desset, Kambiz Tabibzadeh, Matthieu Kervran, Gian Pietro Basello, Gianni Marchesi', title: 'The Decipherment of Linear Elamite Writing (Zeitschrift für Assyriologie 112)', year: '2022',
    url: 'https://doi.org/10.1515/za-2022-0003', kind: 'journal',
  },
  {
    id: 'bips-sialk', author: 'John Curtis، مؤسسهٔ بریتانیایی مطالعات ایرانی (BIPS)', title: 'Tappeh Sialk and Ancient Kashan International Conference', year: '2017',
    url: 'https://www.bips.ac.uk/case-study/tappeh-sialk-and-ancient-kashan-conference/', kind: 'report',
  },
  {
    id: 'livius-sialk', author: 'Jona Lendering، Livius.org', title: 'Tepe Sialk', year: 'online',
    url: 'https://www.livius.org/articles/place/tepe-sialk/', kind: 'encyclopedia',
  },
]

export const civSource = (id: string) => civSources.find((s) => s.id === id)
