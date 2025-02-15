import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import routePrefetch from '../src/index'

// https://vite.dev/config/
export default defineConfig({
  plugins: [routePrefetch(),vue()],
})
