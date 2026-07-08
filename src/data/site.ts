/**
 * 사이트 전역 설정 — 연락처/링크/콘텐츠를 이 파일에서 한 번에 관리합니다.
 * ⚠️ 아래 연락처·링크·분석 ID는 예시(placeholder)입니다. 실제 값으로 교체하세요.
 */

export const site = {
  name: '이지클린홈케어',
  nameEn: 'EasyClean HomeCare',
  domain: 'easycleancare.com',
  url: 'https://easycleancare.com',
  tagline: '깨끗한 집의 시작, 이지클린홈케어가 완성합니다.',
  description:
    '입주청소부터 줄눈·탄성코트·새집증후군 케어까지, 신규 입주에 필요한 프리미엄 홈케어를 한 번에 상담하세요. 정직한 견적과 검증된 시공으로 새 집의 첫 순간을 완성합니다.',
  region: '서울 · 경기 · 인천 전 지역',
  hours: '평일·주말 09:00 – 20:00 (연중무휴 상담)',
} as const;

/** 문의 채널 — 실제 값으로 교체하세요. */
export const contact = {
  // 전화: 숫자만 (하이픈 제외) → tel: 링크에 사용
  phoneRaw: '01000000000',
  // 화면 표시용
  phoneDisplay: '010-0000-0000',
  // 문자(SMS) — 기본 문구 포함
  smsHref: 'sms:01000000000?body=' + encodeURIComponent('[이지클린홈케어] 견적 문의드립니다. 지역/평형/입주예정일을 알려주시면 안내해 드리겠습니다.'),
  // 카카오톡 채널 (예: https://pf.kakao.com/_xxxxxxx)
  kakaoUrl: 'https://pf.kakao.com/_easycleancare',
  // 온라인 견적 폼 (네이버폼 또는 구글폼 링크)
  formUrl: 'https://forms.gle/your-google-form-id',
} as const;

/** 분석/검증 도구 — 값을 채우면 자동으로 활성화됩니다. 비워두면 렌더링되지 않습니다. */
export const analytics = {
  gaId: '', // 예: 'G-XXXXXXXXXX' (Google Analytics 4)
  naverVerification: '', // 네이버 서치어드바이저 site verification 코드
  googleVerification: '', // Google Search Console meta 코드
} as const;

export type Service = {
  id: string;
  title: string;
  short: string;
  desc: string;
  points: string[];
  icon: string; // Header 컴포넌트에서 사용하는 아이콘 키
};

export const services: Service[] = [
  {
    id: 'move-in',
    title: '입주청소',
    short: '새 집의 첫인상을 완성',
    desc: '입주 전 먼지·시공 잔여물·미세 오염까지 전문 장비로 완벽하게 제거합니다. 눈에 보이지 않는 곳까지 청결하게.',
    points: ['시공 잔여물·분진 제거', '주방·욕실 스팀 살균', '창틀·몰딩 디테일 청소'],
    icon: 'sparkle',
  },
  {
    id: 'moving',
    title: '이사청소',
    short: '떠난 자리도 깨끗하게',
    desc: '오래된 생활 오염과 찌든 때를 원상 복구 수준으로 정돈합니다. 이사·퇴거 일정에 맞춘 신속 시공.',
    points: ['생활 찌든때 집중 제거', '베란다·다용도실 정돈', '냉장고·싱크대 내부 청소'],
    icon: 'home',
  },
  {
    id: 'grout',
    title: '줄눈 시공',
    short: '틈새를 오래도록 깨끗하게',
    desc: '욕실·주방 타일 줄눈을 항균·방수 소재로 시공해 곰팡이와 오염을 예방합니다. 위생과 미관을 동시에.',
    points: ['항균·방수 줄눈제 사용', '곰팡이·백화 예방', '깔끔한 마감 라인'],
    icon: 'grid',
  },
  {
    id: 'coat',
    title: '탄성코트',
    short: '벽면을 새것처럼 보호',
    desc: '벽면·몰딩에 탄성 코팅을 적용해 오염과 크랙을 방지하고 고급스러운 마감을 완성합니다.',
    points: ['오염·크랙 방지 코팅', '유해물질 저감 자재', '매끈한 프리미엄 마감'],
    icon: 'shield',
  },
  {
    id: 'sick-house',
    title: '새집증후군 케어',
    short: '보이지 않는 공기까지',
    desc: '베이크아웃·친환경 광촉매 시공으로 유해물질(VOCs)을 저감해 가족이 안심할 수 있는 공기를 만듭니다.',
    points: ['베이크아웃 진행', '친환경 광촉매 시공', 'VOCs·포름알데히드 저감'],
    icon: 'leaf',
  },
];

export const stats = [
  { value: 3200, suffix: '+', label: '누적 시공 세대' },
  { value: 98, suffix: '%', label: '고객 만족도' },
  { value: 42, suffix: '%', label: '재의뢰·추천율' },
  { value: 10, suffix: '년', label: '홈케어 노하우' },
];

export const packageItems = [
  '입주청소 + 줄눈 + 탄성코트 + 새집증후군 케어 통합 상담',
  '서비스별 개별 업체 조율 없이 한 번에 일정 조율',
  '입주 일정에 맞춘 순차 시공 스케줄링',
  '패키지 구성 시 합리적인 통합 견적 제공',
];

export type Review = {
  name: string;
  meta: string;
  rating: number;
  text: string;
};

export const reviews: Review[] = [
  {
    name: '김O은 고객님',
    meta: '판교 · 34평 입주청소 + 줄눈',
    rating: 5,
    text: '입주 전에 청소랑 줄눈을 따로 알아보다 지쳤는데, 한 번에 상담받고 일정까지 맞춰주셔서 정말 편했어요. 마감이 정말 깔끔합니다.',
  },
  {
    name: '이O호 고객님',
    meta: '광교 · 새집증후군 케어',
    rating: 5,
    text: '아이가 있어서 새집 냄새가 걱정이었는데 베이크아웃 후 확실히 달라졌어요. 진행 과정을 사진으로 공유해주셔서 믿음이 갔습니다.',
  },
  {
    name: '박O아 고객님',
    meta: '동탄 · 이사청소 + 탄성코트',
    rating: 5,
    text: '견적이 투명하고 추가 비용이 없어서 좋았어요. 벽면 탄성코트까지 하니 정말 새 집처럼 느껴집니다. 지인들에게 추천했어요.',
  },
  {
    name: '최O진 고객님',
    meta: '송도 · 입주 홈케어 패키지',
    rating: 5,
    text: '패키지로 진행하니 훨씬 합리적이었고, 담당자분이 끝까지 꼼꼼하게 확인해주셨어요. 완료 후 점검까지 확실합니다.',
  },
];

export const processSteps = [
  { step: '01', title: '문의 접수', desc: '카카오톡·전화·문자로 지역, 평형, 입주 일정을 알려주세요.' },
  { step: '02', title: '상담 · 견적', desc: '서비스 구성과 현장 조건을 확인해 투명한 견적을 안내드립니다.' },
  { step: '03', title: '예약금 확인', desc: '일정 확정을 위한 예약금 안내 후 스케줄을 잡습니다.' },
  { step: '04', title: '일정 확정', desc: '입주 일정에 맞춰 시공 순서와 방문 시간을 확정합니다.' },
  { step: '05', title: '현장 작업', desc: '전문 인력이 방문해 서비스별 시공을 진행합니다.' },
  { step: '06', title: '완료 확인', desc: '고객님과 함께 결과를 점검하고 마무리합니다.' },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: '견적은 어떤 기준으로 산정되나요?',
    a: '평형, 서비스 구성(청소·줄눈·탄성·새집증후군), 현장 오염 정도와 구조에 따라 산정됩니다. 상담 시 조건을 알려주시면 투명하게 안내드리며, 사전 고지 없는 추가 비용은 청구하지 않습니다.',
  },
  {
    q: '예약은 언제까지 가능한가요?',
    a: '입주·이사 일정에 맞춰 조율하며, 주말과 성수기(2~3월, 이사철)는 예약이 빠르게 마감됩니다. 일정이 정해지면 최소 1~2주 전 문의를 권장드립니다.',
  },
  {
    q: '작업 시간은 얼마나 걸리나요?',
    a: '입주청소는 평형과 인원에 따라 보통 반나절~하루가 소요됩니다. 줄눈·탄성코트·새집증후군 케어를 함께 진행할 경우 시공 순서에 따라 일정을 나눠 안내드립니다.',
  },
  {
    q: '입주 전 준비해야 할 것이 있나요?',
    a: '가급적 가구·짐 반입 전 빈 공간 상태가 가장 좋은 결과를 얻습니다. 전기·수도 사용이 가능해야 하며, 별도 준비물은 없습니다. 상세 사항은 상담 시 안내드립니다.',
  },
  {
    q: '청소 외 추가 시공도 함께 가능한가요?',
    a: '네. 입주청소와 함께 줄눈, 탄성코트, 새집증후군 케어를 통합 상담·시공할 수 있습니다. 개별 업체를 따로 조율할 필요 없이 한 번에 진행됩니다.',
  },
];
