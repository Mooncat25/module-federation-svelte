import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { federation } from '@module-federation/vite';
import { createEsBuildAdapter } from '@softarc/native-federation-esbuild';
import { esbuildSveltePlugin } from './module-federation/esbuild-svelte-plugin';

// https://vitejs.dev/config/
export default defineConfig(async ({ command }) => ({
  server: {
    open: true,
    fs: {
      allow: ['.'],
    }
  },
  plugins: [
    await federation({
      options: {
        workspaceRoot: import.meta.dirname,
        outputPath: 'dist',
        tsConfig: 'tsconfig.json',
        federationConfig: 'module-federation/federation.config.cjs',
        verbose: false,
        dev: command === 'serve',
      },
      adapter: createEsBuildAdapter({
        plugins: [esbuildSveltePlugin],
      }),
    }),
    svelte()
  ],
}));
