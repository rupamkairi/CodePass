import { defineConfig } from "vite";

export default defineConfig({
  // ...some configs
  server: {
    port: 8000,
    headers: {
      "Cross-Origin-Embedder-Policy": "require-corp",
      "Cross-Origin-Opener-Policy": "same-origin",
    },
  },
});
