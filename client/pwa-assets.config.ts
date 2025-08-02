import { defineConfig, minimal2023Preset } from '@vite-pwa/assets-generator/config'

export default defineConfig({
  preset: { ...minimal2023Preset, maskable: { padding: 0, ...minimal2023Preset.maskable } },
  images: [
    'public/Logo.png',
  ],
})