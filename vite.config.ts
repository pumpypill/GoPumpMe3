import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Generic Vite config for meme/token template.
// Update outDir, input, or base as needed for your deployment.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for build
    rollupOptions: {
      input: './index.html', // Main entry point
    },
  },
  base: './', // Use relative paths for all assets
});
