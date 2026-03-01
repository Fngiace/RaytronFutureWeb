// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://raytronfuture.com',
  // base: '/RaytronFutureWeb', // Custom domains serve from root
  vite: {
    plugins: [tailwindcss()]
  }
});
