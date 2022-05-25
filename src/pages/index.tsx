import type { NextPage } from 'next';

import PageHeadContent from '@components/common/PageHead';

const Home: NextPage = () => {
  return (
    <div>
      <PageHeadContent title="SiteIndex" description="site index" />
      <h3>Welcome to the site Index</h3>
      <h4>Login page coming soon ..</h4>
    </div>
  );
};

export default Home;
