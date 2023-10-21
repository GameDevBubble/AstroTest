import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [react({
    experimentalReactChildren: true
  }), tailwind({
    configFile: "./tailwind.config.mjs",
    applyBaseStyles: true
  })],
  include: ["src/styles/globals.css"],
  output: "server",
  adapter: vercel()
});