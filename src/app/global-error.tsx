'use client';

import * as Sentry from '@sentry/nextjs';
import NextError from 'next/error';
import { useEffect } from 'react';

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        {/* `NextError`는 기본 Next.js 오류 페이지 컴포넌트입니다. 
        그 타입 정의는 `statusCode` prop을 요구합니다. 그러나, 
        App Router는 오류에 대한 상태 코드를 노출하지 않기 때문에 
        일반 오류 메시지를 렌더링하기 위해 0을 전달합니다. */}
        <NextError statusCode={0} />
      </body>
    </html>
  );
}
