import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifestForPlugIn: Partial<VitePWAOptions> = {
  registerType: 'prompt',
  injectManifest: {
    maximumFileSizeToCacheInBytes: 3000000
  },
  workbox: {
    maximumFileSizeToCacheInBytes: 3000000,
    globPatterns: ["**/*"],
    cleanupOutdatedCaches: false,
    sourcemap: true,
    runtimeCaching: [
      {
        urlPattern: ({ request }) => (["image", "font", "audio", "font"] as RequestDestination[]).includes(request.destination),
        handler: "CacheFirst",
      }
    ]
  },
  includeAssets: ["**/*",],
  manifest: {
    name: "Chatix",
    short_name: "Chatix",
    description: "Free, Secure And Fast",
    icons: [{
      src: '/pwa-512x512.png',
      sizes: '192x192',
      type: 'image/png',
      purpose: 'favicon'
    },
    {
      src: '/pwa-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'favicon'
    },
    {
      src: '/apple-touch-icon-180x180.png',
      sizes: '180x180',
      type: 'image/png',
      purpose: 'apple touch icon',
    },
    {
      src: '/maskable-icon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any maskable',
    }
    ],
    theme_color: '#2b7fff',
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
