import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        // Les chemins /images/... sont servis depuis public/ sans résolution ES module
        transformAssetUrls: false,
      },
    }),
  ],
  build: {
    // Seuil pour inliner les petits assets en base64 (< 4 Ko)
    assetsInlineLimit: 4096,
    // Découpe le bundle pour un meilleur cache navigateur
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue', 'vue-router'],
        },
      },
    },
    // Minification CSS
    cssMinify: true,
  },
})
