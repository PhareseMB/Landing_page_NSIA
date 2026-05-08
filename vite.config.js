import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        // Désactive la résolution des URLs d'assets comme modules ES.
        // Les chemins /images/... sont servis directement depuis public/
        transformAssetUrls: false,
      },
    }),
  ],
})
