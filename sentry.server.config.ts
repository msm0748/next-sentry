// 이 파일은 서버에서 Sentry의 초기화를 구성합니다.
// 여기 추가하는 구성은 서버가 요청을 처리할 때마다 사용됩니다.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://97e90b594b3c3fa2c6e1ced249edac55@o4508369430642688.ingest.us.sentry.io/4508398533410816',

  // 추적 샘플링의 가능성을 정의합니다. 이 값을 프로덕션에서 조정하거나, 더 큰 제어를 위해 tracesSampler를 사용하세요.
  tracesSampleRate: 1,

  // 이 옵션을 true로 설정하면 Sentry를 설정하는 동안 유용한 정보가 콘솔에 출력됩니다.
  debug: false,
});
