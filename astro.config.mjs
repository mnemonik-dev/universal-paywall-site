// @ts-check
import { defineConfig } from 'astro/config';

// Static output, no server dependency. Set `site` to the final deploy URL when known
// (used only for canonical URLs / sitemap-style tooling; safe as a placeholder).
export default defineConfig({
  site: 'https://universal-paywall.example',
  output: 'static',
});
