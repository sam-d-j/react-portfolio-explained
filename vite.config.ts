import { resolve } from 'path';
import { defineConfig } from 'vite';
import reactPlugin from '@vitejs/plugin-react';
import markdownPlugin, { Mode } from 'vite-plugin-markdown';

export default defineConfig({
  plugins: [
    reactPlugin({
      jsxImportSource: '@emotion/react',
      include: ['**/*.tsx', '**/*.ts'],
    }),
    markdownPlugin({
      mode: [Mode.REACT],
    }),
  ],
  root: resolve('./src'),
  server: {
    host: '0.0.0.0',
    port: 9001,
    fs: { strict: true, allow: ['../../../'] },
  },
  build: {
    outDir: resolve('./.build'),
    emptyOutDir: true,
  },
});
