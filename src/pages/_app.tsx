import type { AppProps } from 'next/app';

import Layout from '@components/Layout';
// import PageHeadContent from '@components/common/PageHead';

import '@assets/scss/main.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout preview={pageProps.preview}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
