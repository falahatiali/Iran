import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { nitro } from 'nitro/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    tailwindcss(),
    tanstackStart({
      prerender: { enabled: true, crawlLinks: true, failOnError: true },
      pages: [{ path: '/' }, { path: '/cylinder' }, { path: '/en/cylinder' }, { path: '/archives' }, { path: '/en/archives' }, { path: '/timeline' }, { path: '/about' }],
    }),
    nitro(),
    viteReact(),
  ],
})
