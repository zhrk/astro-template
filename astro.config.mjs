import { defineConfig } from "astro/config";

export default defineConfig({
  outDir: "./build",
  server: { open: true, host: true },
  devToolbar: { enabled: false },
});
