import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/icons': {
        target: 'https://simpleicons.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/icons/, ''),
      },
    },
  },
  plugins: [sveltekit()],
  ssr: {
    noExternal: ['@threlte/core', '@threlte/extras', 'three']
  }
});



