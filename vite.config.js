import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy : {
      '/ws/chat/': {
        target: 'https://chabloz.eu/ws/chat/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/ws\/chat/, '')
      }
    }
  }
});
