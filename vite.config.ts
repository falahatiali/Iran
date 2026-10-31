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
      prerender: { enabled: true, crawlLinks: true, failOnError: true, filter: ({ path }) => !path.startsWith('/media/') },
      pages: [{ path: '/' }, { path: '/cylinder' }, { path: '/en/cylinder' }, { path: '/battle/carrhae' }, { path: '/en/battle/carrhae' }, { path: '/archives' }, { path: '/en/archives' }, { path: '/en/king/untash-napirisha' }, { path: '/en/king/shutruk-nakhunte' }, { path: '/en/king/darius-i' }, { path: '/en/king/xerxes-i' }, { path: '/en/king/artaxerxes-i' }, { path: '/en/king/xerxes-ii' }, { path: '/en/king/sogdianus' }, { path: '/en/king/darius-ii' }, { path: '/en/king/artaxerxes-ii' }, { path: '/en/king/artaxerxes-iii' }, { path: '/en/king/artaxerxes-iv' }, { path: '/en/king/darius-iii' }, { path: '/en/king/artaxerxes-v' }, { path: '/en/king/arsaces-i' }, { path: '/en/king/arsaces-ii' }, { path: '/en/king/phriapatius' }, { path: '/en/king/phraates-i' }, { path: '/en/king/mithridates-i' }, { path: '/en/king/phraates-ii' }, { path: '/en/king/artabanus-i' }, { path: '/en/king/mithridates-ii' }, { path: '/en/king/gotarzes-i' }, { path: '/en/king/phraates-v' }, { path: '/en/king/orodes-iii' }, { path: '/en/king/vonones-i' }, { path: '/en/king/artabanus-ii' }, { path: '/en/king/vardanes-i' }, { path: '/en/king/gotarzes-ii' }, { path: '/en/king/vonones-ii' }, { path: '/en/king/vologases-i' }, { path: '/en/king/pacorus-ii' }, { path: '/en/king/osroes-i' }, { path: '/en/king/vologases-iii' }, { path: '/en/king/orodes-i' }, { path: '/en/king/sinatruces' }, { path: '/en/king/phraates-iii' }, { path: '/en/king/mithridates-iii' }, { path: '/en/king/orodes-ii' }, { path: '/en/king/phraates-iv' }, { path: '/timeline' }, { path: '/about' }, { path: '/en/about' }, { path: '/place/bisotun' }, { path: '/en/place/bisotun' }],
    }),
    nitro(),
    viteReact(),
  ],
})
