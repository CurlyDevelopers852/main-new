import react from '@vitejs/plugin-react-swc';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

import { createHtmlPlugin } from 'vite-plugin-html'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/main-new/',
  plugins: [react(), tsconfigPaths(), ],
  server: {
    host: true,
    strictPort: true,
    port: 3000,
  },
  // test: {
  //   globals: true,
  //   environment: 'jsdom',
  //   clearMocks: true,
  //   setupFiles: ['./vitest.setup.ts'],
  // },
  preview: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: (c) => {
          return '[name].[hash].entry.js';
        },
        chunkFileNames: (c) => {
          const name =
            c.name === 'index' && c.facadeModuleId
              ? path.parse(path.dirname(c.facadeModuleId)).name
              : '[name]';
          return `${name}.[hash].chunk.js`;
        },
      },
      onwarn: ({ loc }) => {
        if (loc?.file?.match(/js-sha256\/src\/sha256.js$/)) return;
      },
    },
  },
});