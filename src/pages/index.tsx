import type { NextPage } from 'next';

import PageHeadContent from '@components/common/PageHead';

const Home: NextPage = () => {
  return (
    <div>
      <PageHeadContent title="Homepage" description="homepage" />
      <h3>Home Page</h3>
    </div>
  );
};

export default Home;
