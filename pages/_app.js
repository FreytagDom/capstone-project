import { GlobalStyle } from '../components/GlobalStyle';
import Layout from '../components/Layout';
import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';
import Loading from '../components/PageLoader';
import { useEffect, useState } from 'react';
import Router from "next/router";

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
 
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);

    window.addEventListener('load', startLoading);
    Router.events.on('routeChangeStart', startLoading);
    Router.events.on('routeChangeComplete', stopLoading);
    Router.events.on('routeChangeError', stopLoading);

    return () => {
       window.removeEventListener('load', stopLoading);
      // Router.events.off('routeChangeStart', startLoading);
      Router.events.off('routeChangeComplete', stopLoading);
      Router.events.off('routeChangeError', stopLoading);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Insulin App</title>
        <meta name="description" content="Insulin app" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      { isLoading ? (   <Loading />  ) : (
      <SessionProvider session={session} basePath="/api/auth">
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
      )}
    </>
  );
}


