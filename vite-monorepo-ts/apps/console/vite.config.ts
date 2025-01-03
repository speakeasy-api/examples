import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["monorepo-sdk"],
  },
  build: {
    commonjsOptions: {
      include: [/monorepo-sdk/, /node_modules/],
    },
  },
});
