import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Router from 'next/router';
import { GlobalStyle } from '../components/GlobalStyle';
import Layout from '../components/Layout';
import Loading from '../components/PageLoader/PageLoader';

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setLoading(false);
    };

    Router.events.on('routeChangeStart', handleRouteChangeStart);
    Router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      Router.events.off('routeChangeStart', handleRouteChangeStart);
      Router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Insulin App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Insulin app" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <SessionProvider session={session} basePath="/api/auth">
        <GlobalStyle />
        <Layout>
          {isLoading ? <Loading /> : <Component {...pageProps} />}
        </Layout>
      </SessionProvider>
    </>
  );
}
