import { withSentryConfig } from '@sentry/nextjs';
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withSentryConfig(nextConfig, {
  // 사용 가능한 모든 옵션은 다음을 참조하세요:
  // https://github.com/getsentry/sentry-webpack-plugin#options

  org: 'playidealab-la',
  project: 'sentry-study',

  // CI에서 소스 맵 업로드 로그만 인쇄
  silent: !process.env.CI,

  // 사용 가능한 모든 옵션은 다음을 참조하세요:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // 더 예쁜 스택 추적을 위해 더 많은 소스 맵을 업로드합니다 (빌드 시간이 증가함)
  widenClientFileUpload: true,

  // React 컴포넌트를 자동으로 주석 처리하여 breadcrumbs 및 세션 재생에서 전체 이름을 표시합니다
  reactComponentAnnotation: {
    enabled: true,
  },

  // tunnelRoute 옵션의 목적은 ad-blockers(크롬 웹스토어 광고 차단기) 등으로 인해 Sentry 데이터가 차단되지 않도록 우회 경로를 제공하는 데 있음
  // 이러한 서비스의 요청은 사용자 데이터를 수집한다고 오해될 수 있으며, 기본적으로 추적(tracking) 도구로 간주되어 차단 리스트에 올라가게 된다고 함.

  // tunnelRoute를 통해 엔드포인트를 자신의 서버로 리라이트하면 이러한 차단을 피할 수 있음
  // next 서버에서 sentry 서버로 데이터를 전달
  // 서버 부하 주의 !!
  // 주석하면 클라이언트에서 sentry 서버로 다이렉트 전송
  //   tunnelRoute: '/monitoring',

  // 생성된 클라이언트 번들에서 소스 맵을 숨깁니다
  hideSourceMaps: true,

  // 번들 크기를 줄이기 위해 Sentry 로거 문장을 자동으로 트리 쉐이킹합니다
  disableLogger: true,

  // Vercel Cron 모니터의 자동 계측을 활성화합니다. (현재 App Router 경로 핸들러와는 작동하지 않음)
  // 자세한 내용은 다음을 참조하세요:
  // https://docs.sentry.io/product/crons/
  // https://vercel.com/docs/cron-jobs
  automaticVercelMonitors: true,
});
