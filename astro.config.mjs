import { defineConfig } from 'astro/config';

// Default build format: /articles/index.html. S3 website hosting serves that for /articles/.
export default defineConfig({
  site: 'https://zdk.sh',
});
