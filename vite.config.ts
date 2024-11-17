import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { quasar } from "@quasar/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), quasar()],
  base: "/vite-vue3-quasar-demo/",
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "./src"),
      },
    ],
  },
  server: {
    host: "0.0.0.0",
    port: 9527,
    watch: {
      usePolling: true,
    },
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:3000",
    //     changeOrigin: true,
    //   },
    // },
  },
});
