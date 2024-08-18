import { defineConfig } from "astro/config";

export default defineConfig({
  outDir: "./build",
  scopedStyleStrategy: "class",
  server: { open: true, host: true },
  devToolbar: { enabled: false },
});
