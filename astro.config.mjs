// @ts-check
import { defineConfig } from 'astro/config';

// Static output, no server dependency.
// SITE_URL / BASE_PATH are injected by the deploy environment:
//  - GitHub Pages project site: SITE_URL=https://<org>.github.io BASE_PATH=/<repo>
//  - root deploy (own server, custom domain): leave both unset.
export default defineConfig({
  site: process.env.SITE_URL || 'https://universal-paywall.example',
  base: process.env.BASE_PATH || '/',
  output: 'static',
});
