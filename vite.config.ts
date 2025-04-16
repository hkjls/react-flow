import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // 👈 Nécessaire pour charger correctement les fichiers en mode production (dans Electron ou en ouvrant l'index.html directement)
  plugins: [react()],
  // build: {
  //   outDir: 'dist', // le dossier de sortie
  //   emptyOutDir: true,
  //   chunkSizeWarningLimit: 1000,
  //   rollupOptions: {
  //     output: {
  //       manualChunks: {
  //         vendor: ['react', 'react-dom'],
  //       }
  //     }
  //   }
  // }
})
