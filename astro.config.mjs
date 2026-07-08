import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 커스텀 도메인 연결 시 이 값을 사용해 canonical/OG/sitemap이 생성됩니다.
  site: 'https://easycleancare.com',
  integrations: [sitemap()],
  // 정적 빌드(dist) — Cloudflare Pages 기본 출력 디렉터리
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
