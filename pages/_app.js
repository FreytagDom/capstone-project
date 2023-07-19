import { GlobalStyle } from '../components/GlobalStyle';
import Layout from '../components/Layout';
import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';
import Loading from '../components/PageLoader';
 import { useEffect, useState } from 'react';
 import Router from "next/router";

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  
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
      <SessionProvider session={session} basePath="/api/auth">
        <GlobalStyle />
        <Layout>
    {/* {isLoading ?  
      (<Loading />) : null} */}
          <Component {...pageProps} />
          </Layout>
      </SessionProvider>
          
    </>
  );
}


