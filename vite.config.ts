import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: "autoUpdate",
    includeAssets: ['Logo.jpg', 'background.svg'],
    manifest: {
      theme_color: "#fff",
      name: "Chatix",
      short_name: "Chatix",
      icons: [
        {
          src: "/Logo.jpg",
          sizes: "48x48",
          type: "image/jpg"
        }
      ]
    }
  })],
})
