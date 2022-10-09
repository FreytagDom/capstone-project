import { GlobalStyle } from '../components/GlobalStyle';
import Layout from '../components/Layout';
import bzBackGround from '../public/bzBackGround.jpg';
import Image from 'next/image';
import styled from 'styled-components';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
