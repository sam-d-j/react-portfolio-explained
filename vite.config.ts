import { resolve } from 'path';
import { defineConfig } from 'vite';
import reactPlugin from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    reactPlugin({
      jsxImportSource: '@emotion/react',
      include: ['**/*.tsx', '**/*.ts'],
    }),
  ],
  root: resolve('./src'),
  server: {
    host: '0.0.0.0',
    port: 9001,
    fs: { strict: true, allow: ['../../../'] },
  },
  build: {
    outDir: resolve('./build'),
    emptyOutDir: true,
  },
});
