import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/e-commerce/",
  server: {
    host: true, // Permite conexões externas
    port: 3000, // Porta para o servidor (pode ajustar)
  },
});
