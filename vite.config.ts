import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// const alias: Record<string, string> = {
//   '/@': pathResolve('./src/'),
//   'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
// };
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000,
    host: '0.0.0.0',
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [react()],
})
