import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// Local database file for seamless real-time syncing between PC and Mobile
const dbFilePath = path.resolve(__dirname, 'sync_db.json');

const syncPlugin = () => ({
  name: 'sync-db-plugin',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const url = req.url || '';
      
      if (url.startsWith('/api/sync') || url.startsWith('/english-immersion-os/api/sync')) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

        if (req.method === 'OPTIONS') {
          res.statusCode = 200;
          res.end();
          return;
        }

        if (req.method === 'GET') {
          res.setHeader('Content-Type', 'application/json');
          if (fs.existsSync(dbFilePath)) {
            const data = fs.readFileSync(dbFilePath, 'utf-8');
            res.end(data || '{}');
          } else {
            res.end(JSON.stringify({}));
          }
          return;
        }

        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              fs.writeFileSync(dbFilePath, body, 'utf-8');
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, timestamp: Date.now() }));
            } catch (err) {
              res.statusCode = 500;
              res.end(JSON.stringify({ error: err.message }));
            }
          });
          return;
        }
      }
      next();
    });
  }
});

export default defineConfig({
  base: '/english-immersion-os/',
  plugins: [react(), syncPlugin()],
  server: {
    port: 3000,
    host: true, // Exposes server to local network (PC + Mobile)
    open: false
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
