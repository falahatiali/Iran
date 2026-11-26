import { createFileRoute } from '@tanstack/react-router'
import { LibraryPage } from '../../components/library/LibraryPage'
import { libraryHead } from '../../components/library/head'
import { seo } from '../../lib/seo'

export const Route = createFileRoute('/library/')({
  head: () => {
    const s = seo({
      title: 'کتابخانهٔ ادبیات',
      description: 'گنجینهٔ ادب پارسی، قفسه به قفسه: شاهنامهٔ فردوسی، منطق‌الطیر عطار و به‌زودی حافظ، سعدی، مولوی، نظامی و خیام. کتابی را برگزینید تا گشوده شود.',
      path: '/library',
      image: '/media/library/og-library.jpg',
    })
    return libraryHead(s)
  },
  component: LibraryPage,
})
