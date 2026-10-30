import { createFileRoute, redirect } from '@tanstack/react-router'

/** Legacy URL: the Darius dossier lives on the canonical king page. */
export const Route = createFileRoute('/en/darius')({
  beforeLoad: () => {
    throw redirect({ to: '/en/king/$slug', params: { slug: 'darius-i' }, statusCode: 301 })
  },
})
