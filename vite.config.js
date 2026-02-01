import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Use relative asset paths so the built site can be served from any path
  base: './',
  plugins: [react()],
})
