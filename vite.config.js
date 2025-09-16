import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Changed from '/GoPumpMe3/' to '/'
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
});
