import react from '@vitejs/plugin-react-swc';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';
import { loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  let base = env.VITE_APP_BASE || '/';
  if (!base.endsWith('/')) {
    base += '/';
  }

  return {
    base: base,
    plugins: [react(), tsconfigPaths()],
    server: {
      host: true,
      strictPort: true,
      port: 3000,
    },
    preview: {
      port: 3000,
    },
    build: {
      rollupOptions: {
        output: {
          entryFileNames: () => {
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
  };
});