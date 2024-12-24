import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: 'interfaces', replacement: fileURLToPath(new URL('./src/utils/interfaces', import.meta.url)) },
      { find: 'types', replacement: fileURLToPath(new URL('./src/utils/types', import.meta.url)) },
      { find: 'composables', replacement: fileURLToPath(new URL('./src/composables', import.meta.url)) },
    ],
  },
  
})
