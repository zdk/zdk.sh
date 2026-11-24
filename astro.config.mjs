import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://zdk.sh',
  // S3 website hosting serves /articles.html for /articles, not /articles/.
  build: { format: 'file' },
});
