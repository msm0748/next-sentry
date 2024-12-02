// 이 파일은 클라이언트에서 Sentry 초기화를 구성합니다.
// 여기 추가하는 구성은 사용자가 브라우저에서 페이지를 로드할 때마다 사용됩니다.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://97e90b594b3c3fa2c6e1ced249edac55@o4508369430642688.ingest.us.sentry.io/4508398533410816',

  // 선택적 통합을 추가하여 추가 기능을 사용할 수 있습니다
  integrations: [
    // Sentry는 소프트웨어 성능을 추적하고 처리량 및 대기 시간과 같은 메트릭을 측정하고 여러 시스템에서 오류가 미치는 영향을 표시
    // default는 포함되지 않음
    Sentry.browserTracingIntegration(),
    // 사용자의 브라우저에서 발생하는 일을 비디오처럼 재현
    Sentry.replayIntegration(),
  ],

  // 샘플링 비율이 0.1(10%)이라는 것은 10번 중 1번만 기록된다는 의미

  // 성능 트랜잭션 샘플링
  tracesSampleRate: 1,

  // 사용자 세션 Replay 샘플링 (오류가 발생하지 않아도 사용자 세션을 수집)
  // 애플리케이션에서 사용자가 어떻게 상호작용했는지를 분석할 수 있음.
  replaysSessionSampleRate: 0.1,

  // 오류 발생 시 사용자 세션 Replay 샘플링
  replaysOnErrorSampleRate: 1.0,

  // 이 옵션을 true로 설정하면 Sentry를 설정하는 동안 유용한 정보가 콘솔에 출력됩니다.
  debug: false,
});
