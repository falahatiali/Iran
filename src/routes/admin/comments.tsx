import { createFileRoute } from '@tanstack/react-router'
import { lazy, Suspense, useEffect, useState } from 'react'
import { seo } from '../../lib/seo'

const AdminComments = lazy(() => import('../../components/comments/AdminComments').then((m) => ({ default: m.AdminComments })))

export const Route = createFileRoute('/admin/comments')({
  head: () => seo({ title: 'مدیریت نظرها', description: 'صف بررسی نظرهای خوانندگان.', path: '/admin/comments', noindex: true }),
  component: AdminPage,
})

function AdminPage() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return mounted ? <Suspense fallback={null}><AdminComments /></Suspense> : null
}
