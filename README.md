# 이지클린홈케어 (EasyClean HomeCare)

입주청소 · 이사청소 · 줄눈 · 탄성코트 · 새집증후군 케어를 통합 상담하는 **프리미엄 입주 홈케어 브랜드** 랜딩 사이트.
Astro + TypeScript + Tailwind CSS 기반의 고성능 정적 사이트로, Cloudflare Pages 무료 호스팅에 최적화되어 있습니다.

## 기술 스택

- **Astro 5** (정적 빌드 · `dist/` 출력)
- **TypeScript** (strict)
- **Tailwind CSS 4** (`@tailwindcss/vite`)
- 애니메이션: CSS Transition + IntersectionObserver (경량 vanilla JS, React 미사용)
- SEO: title/description/OG/canonical, `@astrojs/sitemap`, `robots.txt`, JSON-LD

## 로컬 실행

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # dist/ 정적 산출물 생성
npm run preview   # 빌드 결과 미리보기
npm run check     # 타입 체크
```

## 가장 먼저 바꿀 것 — 연락처 & 분석 (`src/data/site.ts`)

모든 문의 채널·분석 ID가 이 파일 한 곳에 모여 있습니다. 아래 값을 실제 값으로 교체하세요.

- `contact.phoneRaw` / `contact.phoneDisplay` — 전화번호
- `contact.smsHref` — 문자(SMS) 링크
- `contact.kakaoUrl` — 카카오톡 채널 URL
- `contact.formUrl` — 네이버폼/구글폼 견적 링크
- `analytics.gaId` — Google Analytics 4 측정 ID (`G-XXXX`)
- `analytics.googleVerification` / `analytics.naverVerification` — 서치 콘솔 / 네이버 서치어드바이저 인증 코드

> 분석/인증 값은 **채워 넣으면 자동 활성화**, 비워두면 렌더링되지 않습니다.

이미지 교체는 `public/images/README.md` 참고. (현재는 SVG 플레이스홀더)

## Cloudflare Pages 배포 (GitHub 자동 배포)

1. 이 저장소를 GitHub에 push
2. [Cloudflare 대시보드](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
3. `easycleancare365/easycleancare` 저장소 선택
4. 빌드 설정:
   | 항목 | 값 |
   |------|-----|
   | Framework preset | `Astro` |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Node version | `18` 이상 (환경변수 `NODE_VERSION=22` 권장) |
5. **Save and Deploy** → 이후 `main` 브랜치 push마다 자동 재배포

### 커스텀 도메인 (easycleancare.com)

Pages 프로젝트 → **Custom domains** → `easycleancare.com` 추가 → 안내되는 DNS(CNAME/A) 설정.
(도메인을 Cloudflare에서 관리하면 자동 연결) SSL 인증서는 자동 발급됩니다.

> `astro.config.mjs`의 `site` 값이 `https://easycleancare.com` 이어야 sitemap/canonical/OG URL이 도메인 기준으로 생성됩니다.

## 구조

```
src/
  data/site.ts        ← 콘텐츠·연락처·분석 (여기서 대부분 수정)
  layouts/            ← BaseLayout (SEO/폰트/공통 스크립트)
  components/         ← 섹션별 컴포넌트
  pages/index.astro   ← 메인 페이지 조립
public/               ← 정적 파일 (robots.txt, _headers, 이미지, 파비콘)
```

향후 `src/pages/`에 `blog/`, `reviews/`, `works/` 등을 추가해 확장할 수 있습니다.
