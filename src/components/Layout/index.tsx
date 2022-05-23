import { ReactNode } from 'react';

import Header from '@components/Layout/Header';
import Footer from '@components/Layout/Footer';
import Preview from '@components/common/Preview';

interface LayoutPropTypes {
  children: ReactNode;
  preview: boolean;
}

const Layout = ({ children, preview }: LayoutPropTypes) => {
  return (
    <>
      <div className="layout">
        <Header />
        <Preview preview={preview} />
        <main className="main-content">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
