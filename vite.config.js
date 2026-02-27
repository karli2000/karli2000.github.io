import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, 'home.html'),
        about: resolve(__dirname, 'about.html'),
        coInvest: resolve(__dirname, 'co-invest.html'),
        fundraise: resolve(__dirname, 'fundraise.html'),
        connect: resolve(__dirname, 'connect.html'),
        faq: resolve(__dirname, 'faq.html'),
        forLlm: resolve(__dirname, 'for-llm.html'),
        scopeCheck: resolve(__dirname, 'scope-check.html')
      }
    }
  }
});
