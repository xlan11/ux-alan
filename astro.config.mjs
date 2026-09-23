import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://xlan11.github.io/ux-alan',
  base: '/ux-alan',
  integrations: [sitemap()]
});
