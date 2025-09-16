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
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/css/i.test(ext)) {
            return `assets/css/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
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
