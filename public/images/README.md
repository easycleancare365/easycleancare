# 이미지 교체 안내

현재 이 폴더의 이미지는 **디자인 확인용 SVG 플레이스홀더**입니다.
실제 현장 사진으로 교체하면 사이트가 완성됩니다.

## 교체 대상

| 파일 | 용도 | 권장 사이즈 |
|------|------|------------|
| `hero-space.svg` | 메인 히어로 우측 비주얼 | 세로형 4:5 (예: 960×1200) |
| `before-1.svg` / `after-1.svg` | 입주청소 Before/After | 4:3 (예: 1280×960) |
| `before-2.svg` / `after-2.svg` | 줄눈 시공 Before/After | 4:3 (동일 구도로 촬영) |
| `../og-image.svg` | 카카오톡/SNS 공유 썸네일 | 1200×630 |

## 권장 방법 (성능 최적화)

1. 사진을 **WebP 또는 AVIF**로 변환합니다. (용량 ↓, 화질 유지)
2. 같은 파일명으로 저장하고, 해당 컴포넌트의 `src` 확장자만 바꿔줍니다.
   - 히어로: `src/components/Hero.astro`
   - Before/After: `src/components/BeforeAfter.astro`
3. Before / After는 **동일한 각도·구도**로 촬영해야 슬라이더 비교가 자연스럽습니다.

> 이미 모든 `<img>`에 `loading="lazy"`(히어로는 `eager`)와 `width/height`가 지정되어 있어,
> 파일만 교체하면 지연 로딩·레이아웃 안정성이 유지됩니다.
