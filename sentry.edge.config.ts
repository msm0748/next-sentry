// 이 파일은 엣지 기능(미들웨어, 엣지 라우트 등)의 Sentry 초기화를 구성합니다.
// 여기 추가하는 구성은 엣지 기능이 로드될 때마다 사용됩니다.
// 이 구성은 Vercel Edge Runtime과는 관련이 없으며, 로컬에서 실행할 때도 필요합니다.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://97e90b594b3c3fa2c6e1ced249edac55@o4508369430642688.ingest.us.sentry.io/4508398533410816',

  // 추적 샘플링 비율을 정의합니다. 이 값을 프로덕션에서 조정하거나, 더 큰 제어를 위해 tracesSampler를 사용할 수 있습니다.
  tracesSampleRate: 1,

  // 이 옵션을 true로 설정하면 Sentry 설정 중 유용한 정보가 콘솔에 출력됩니다.
  debug: false,
});
