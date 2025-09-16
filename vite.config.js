import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: './', // Change from '/' to './' for relative paths, which works better with GitHub Pages
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true, // Clear the output directory before building
    rollupOptions: {
      output: {
        manualChunks: undefined, // Helps with code splitting
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // Ensure path aliases work correctly
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
});
