import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('src/data/phases')) {
            const match = id.match(/phase(\d+[a-c]?)/);
            if (match) return `phase-${match[1]}`;
            return 'data';
          }
          if (id.includes('src/data')) return 'data';
          if (id.includes('node_modules/lucide-react')) return 'icons';
          if (id.includes('node_modules/react')) return 'react-vendor';
        }
      }
    }
  }
});
