import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifestForPlugIn: Partial<VitePWAOptions>  = {
  registerType: 'autoUpdate',
  injectManifest: {
    maximumFileSizeToCacheInBytes: 3000000
  },
  workbox: {
    maximumFileSizeToCacheInBytes: 3000000,
    globPatterns: ["**/*"],
    cleanupOutdatedCaches: true,
    sourcemap: true
  },
  includeAssets: ["**/*",],
  manifest: {
    name: "Chatix",
    short_name: "Chatix",
    description: "Free, Secure And Fast",
    icons: [{
      src: '/android-chrome-192x192.png',
      sizes: '192x192',
      type: 'image/png',
      purpose: 'favicon'
    },
    {
      src: '/android-chrome-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'favicon'
    },
    {
      src: '/apple-touch-icon.png',
      sizes: '180x180',
      type: 'image/png',
      purpose: 'apple touch icon',
    },
    {
      src: '/maskable_icon.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any maskable',
    }
    ],
    theme_color: '#fff',
    background_color: '#fff',
    display: "standalone",
    scope: '/',
    start_url: "/",
    orientation: 'portrait'
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugIn)],
})
