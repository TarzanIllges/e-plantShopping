import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/e-plantShopping/", // Update with your GitHub Pages URL path
  build: {
    outDir: 'dist' // Ensure this matches the deploy script
  },
  plugins: [react()],
});
