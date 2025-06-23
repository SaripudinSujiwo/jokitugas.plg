import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/jokitugas.plg/', //WAJIB SESUAI NAMA REPO!
  plugins: [react()]
})