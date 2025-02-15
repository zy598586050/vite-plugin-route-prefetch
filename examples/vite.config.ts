import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import routePrefetch from '../src/index'
import routePrefetch from 'vite-plugin-route-prefetch'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    routePrefetch(),
    vue()
  ],
})
