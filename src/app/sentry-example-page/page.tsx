'use client';

import Head from 'next/head';
import * as Sentry from '@sentry/nextjs';

export default function Page() {
  return (
    <div>
      <Head>
        <title>Sentry Onboarding</title>
        <meta name="description" content="Test Sentry for your Next.js app!" />
      </Head>

      <main>
        <div>
          <button
            type="button"
            onClick={async () => {
              Sentry.setUser({ id: 'sadfasdf', email: 'wefsadf@sentry.io' });

              const res = await fetch('/api/sentry-example-api');
              if (!res.ok) {
                throw new Error('Sentry Example Frontend Error');
              }
            }}
          >
            백엔드 에러 !
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              try {
                throw new Error('front error');
              } catch (error) {
                console.log(error, 'error');
                Sentry.captureException(error);
              }
            }}
          >
            프론트 에러 !
          </button>
        </div>
      </main>
    </div>
  );
}
