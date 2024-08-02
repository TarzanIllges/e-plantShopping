import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "TarzanIllges/e-plantShopping",
  plugins: [react()],
  build: {
    outDir: 'build'
  }
})
