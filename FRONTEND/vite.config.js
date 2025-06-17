import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: "/",
    watch: {
      usePolling: true,
    },
  },
  base: "/project-promo-53-module-3-team-2/",
});
