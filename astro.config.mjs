import { defineConfig } from 'astro/config';

export default defineConfig({
  srcDir: './astro',
  output: 'static',
  site: 'https://driveops.info.chatserve.in',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
