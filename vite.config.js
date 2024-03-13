import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    watch: {
      include: 'assets/src/**'
    },
    rollupOptions: {
      input: '/assets/src/main.js',
      output: {
        dir: 'assets/build/',
        entryFileNames: 'index.js',
        assetFileNames: 'index.css'
      }
    }
  }
});