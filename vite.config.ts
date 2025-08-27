import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ghPages } from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [react(), ghPages()],
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
  base: '/steve-hat-gen/', // Update to match the new repository name
});
