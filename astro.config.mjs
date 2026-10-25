import { defineConfig } from 'astro/config';
import { prefixBase } from './src/lib/rehype-prefix-base.mjs';

// The GitHub Pages workflow sets these. Locally the site runs at http://localhost:4321/.
const site = process.env.SITE_URL || 'http://localhost:4321';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  markdown: {
    rehypePlugins: [[prefixBase, { base }]],
  },
});
