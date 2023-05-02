import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import legacy from '@vitejs/plugin-legacy'
import sveltePreprocess from 'svelte-preprocess';

export default defineConfig({
  server: {
    port: 4000
  },
  resolve: {
    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.svelte', '.css', '.scss', '.sass']
  },
  plugins: [
    legacy({
      targets: ['defaults'],
    }),
    svelte({
      preprocess: sveltePreprocess()
    }),
  ]
});