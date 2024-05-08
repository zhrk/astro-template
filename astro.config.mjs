import { defineConfig } from "astro/config";

export default defineConfig({
  outDir: "./build",
  scopedStyleStrategy: "class",
  server: { open: true },
  devToolbar: { enabled: false },
});
