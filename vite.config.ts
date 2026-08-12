import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Rutas relativas para que el build funcione en GitHub Pages
  // (tanto en user.github.io/repo como en un dominio propio).
  base: './',
  plugins: [react()],
})
