import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { Session } from 'next-auth';

type NextAppProps = AppProps & {
  pageProps: {
    session: Session;
  };
};

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: NextAppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
