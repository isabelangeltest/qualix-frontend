import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Configuración optimizada para Vercel + rutas absolutas correctas
export default defineConfig({
  plugins: [react()],
  base: './', // <-- Esto es fundamental para que los recursos se carguen bien en producción
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    port: 5173,
    open: true,
  },
})
