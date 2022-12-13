import { GlobalStyle } from '../components/GlobalStyle';
import Layout from '../components/Layout';
import { SessionProvider } from 'next-auth/react';
import { HydrationProvider, Server, Client } from 'react-hydration-provider';
import { useComponentHydrated } from 'react-hydration-provider';

function MyComponent() {
  const hydrated = useComponentHydrated();
  return hydrated ? <p>Client render</p> : <p>Server render</p>;
}

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session} basePath="/api/auth">
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
