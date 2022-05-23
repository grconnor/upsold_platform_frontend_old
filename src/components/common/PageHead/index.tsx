import React from 'react';
import Head from 'next/head';

import ReactComponentChildrenPropTypes from '@typings/proptypes/ReactComponentChildrenPropTypes';

interface PropTypes extends ReactComponentChildrenPropTypes {
  title: string;
  description?: string;
  robots?: string;
}

const PageHeadContent = ({ title, description, robots, children }: PropTypes) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="description" />
      <meta name="robots" content={robots} key="robots" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
      {children}
    </Head>
  );
};

export default PageHeadContent;
