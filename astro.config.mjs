// @ts-check
import { defineConfig } from "astro/config";
import unoCSS from "unocss/astro";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [
    unoCSS({
      injectReset: true,
    }),
  ],

  output: "static",
  adapter: netlify(),
});