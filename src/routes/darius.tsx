import { createFileRoute, redirect } from '@tanstack/react-router'

/** Legacy URL: the Darius dossier lives on the canonical king page. */
export const Route = createFileRoute('/darius')({
  beforeLoad: () => {
    throw redirect({ to: '/king/$slug', params: { slug: 'darius-i' }, statusCode: 301 })
  },
})
