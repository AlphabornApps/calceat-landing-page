import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration for optimal React development experience
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base URL for custom domain deployment
  // Use root path for custom domain (calceat.app)
  base: '/',
  server: {
    port: 3000,
    open: true, // Automatically open browser on server start
  },
  build: {
    outDir: 'docs', // GitHub Pages looks for files in docs/ folder
    sourcemap: true, // Enable source maps for better debugging
    // Ensure assets are properly handled for GitHub Pages
    assetsDir: 'assets',
  },
  // Configure path aliases for cleaner imports
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
