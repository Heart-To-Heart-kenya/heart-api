import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext",
    outDir: "../../priv/static/assets",
    emptyOutDir: true,
    manifest: false,
    cssCodeSplit: false,
    rollupOptions: {
      input: "./src/main.jsx",
      output: {
        entryFileNames: "app.js",
        chunkFileNames: "[name].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "main.css") return "app.css"; // Rename CSS
          return "[name].[ext]";
        },
      },
    },
  },
});
