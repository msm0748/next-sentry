// 이 파일은 클라이언트에서 Sentry 초기화를 구성합니다.
// 여기 추가하는 구성은 사용자가 브라우저에서 페이지를 로드할 때마다 사용됩니다.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://97e90b594b3c3fa2c6e1ced249edac55@o4508369430642688.ingest.us.sentry.io/4508398533410816',

  // 선택적 통합을 추가하여 추가 기능을 사용할 수 있습니다
  integrations: [Sentry.replayIntegration()],

  // 추적이 샘플링되는 가능성을 정의합니다. 이 값을 프로덕션에서 조정하거나, 더 큰 제어를 위해 tracesSampler를 사용할 수 있습니다.
  tracesSampleRate: 1,

  // Replay 이벤트가 샘플링되는 가능성을 정의합니다.
  // 이 설정은 샘플 비율을 10%로 설정합니다. 개발 중에는 100%로 설정하고 프로덕션에서는 더 낮은 비율로 샘플링할 수 있습니다.
  replaysSessionSampleRate: 0.1,

  // 오류가 발생할 때 Replay 이벤트가 샘플링되는 가능성을 정의합니다.
  replaysOnErrorSampleRate: 1.0,

  // 이 옵션을 true로 설정하면 Sentry를 설정하는 동안 유용한 정보가 콘솔에 출력됩니다.
  debug: false,
});
