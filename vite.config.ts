import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Generic Vite config for meme/token template.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist', // Output directory for build
  },
  base: '/GoPumpMe/', // <-- Set to your repo name for GitHub Pages
  // Ensure proper MIME types
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..'],
    },
  },
});
