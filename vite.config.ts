import { defineConfig } from "vite";
import Unfonts from "unplugin-fonts/vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unfonts({
      google: {
        families: [{ name: "M PLUS Rounded 1c", styles: "wght@400;700" }],
      },
    }),
  ],
  build: {
    outDir: "docs",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
