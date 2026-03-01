// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://Fngiace.github.io',
  base: '/RaytronFutureWeb',
  vite: {
    plugins: [tailwindcss()]
  }
});
