import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@layout": "/src/layout",
      "@pages": "/src/pages",
      "@routing": "/src/routing",
      "@models": "/src/models",
      "@data": "/src/data",
      "@assets": "/src/assets",
      "@constants": "/src/constants",
      "@utils": "/src/utils",
      "@reduck": "/src/reduck",
    },
  },
});
