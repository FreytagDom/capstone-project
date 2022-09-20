import { GlobalStyle } from '../components/GlobalStyle';
import Layout from '../components/Layout';
// import Input from '../components/HomeInput';
// import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  // const [data, updateData] = useState([]);
  // const addData = (savedData) => {
  //   updateData([...data, savedData]);
  // };
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
        {/* <Input addData={addData} /> */}
      </Layout>
    </>
  );
}

export default MyApp;
