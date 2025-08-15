import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration for optimal React development experience
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true, // Automatically open browser on server start
  },
  build: {
    outDir: 'dist',
    sourcemap: true, // Enable source maps for better debugging
  },
  // Configure path aliases for cleaner imports
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
