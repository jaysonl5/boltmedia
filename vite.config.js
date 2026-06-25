import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// Vite builds the React SPA into dist/, which the Express server (server.js)
// serves in production. In dev, the proxy forwards /api to the Express server
// so the contact form works against the same code path as production.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
  },
})
