import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/GoPumpMe3/', // <-- Add this line for GitHub Pages
  plugins: [react()],
  server: {
    port: 3000, // You can change the port if needed
  },
  build: {
    outDir: 'dist', // Output directory for production build
    assetsDir: 'assets', // Ensure assets are placed in the correct folder
  },
});
