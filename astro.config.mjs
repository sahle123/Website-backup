// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  // Update this to your production URL before deploying (used for canonical URLs / sitemaps).
  site: 'https://sahle-alturaigi.com',
  build: {
    // Emit clean-looking directory URLs (e.g. /projects/afterlife/)
    format: 'directory',
  },
});
