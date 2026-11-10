export type ShahnamehSource = {
  id: string
  title: string
  author?: string
  url?: string
  kind: 'primary' | 'reference'
}

export const shahnamehSources: ShahnamehSource[] = [
  {
    id: 'ganjoor',
    title: 'شاهنامهٔ فردوسی، متن گنجور (بر پایهٔ چاپ مسکو)',
    author: 'ابوالقاسم فردوسی',
    url: 'https://ganjoor.net/ferdousi/shahname',
    kind: 'primary',
  },
  {
    id: 'moscow',
    title: 'شاهنامه، چاپ مسکو',
    author: 'تحت نظر ی. ا. برتلس و همکاران، انستیتوی خاورشناسی فرهنگستان علوم اتحاد شوروی، ۱۹۶۰–۱۹۷۱',
    kind: 'primary',
  },
  {
    id: 'khaleghi',
    title: 'شاهنامه، تصحیح جلال خالقی مطلق',
    author: 'جلال خالقی مطلق، نیویورک و کالیفرنیا سپس تهران: مرکز دایرةالمعارف بزرگ اسلامی',
    kind: 'primary',
  },
  {
    id: 'iranica-ferdowsi',
    title: 'Encyclopaedia Iranica, s.v. “Ferdowsī”',
    url: 'https://www.iranicaonline.org/articles/ferdowsi-i',
    kind: 'reference',
  },
  {
    id: 'iranica-gayomard',
    title: 'Encyclopaedia Iranica, s.v. “Gayōmart”',
    url: 'https://www.iranicaonline.org/articles/gayomart',
    kind: 'reference',
  },
  {
    id: 'iranica-hushang',
    title: 'Encyclopaedia Iranica, s.v. “Hušang”',
    kind: 'reference',
  },
  {
    id: 'omidsalar',
    title: 'Poetics and Politics of Iran’s National Epic, the Shahnameh',
    author: 'Mahmoud Omidsalar, New York: Palgrave Macmillan, 2011',
    kind: 'reference',
  },
]

export const sourceById = Object.fromEntries(shahnamehSources.map((s) => [s.id, s]))
