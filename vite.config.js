import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/frontend-assignment/',
  plugins: [react()],
  test: {
    global: true,
    environment: 'jsdom',
    setupFiles: './setupTests.js'
  }
})
