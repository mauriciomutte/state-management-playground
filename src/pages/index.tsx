import { ReactElement } from 'react';

import { NextPageWithLayout } from '@/pages/_app';
import SignIn from '@/components/SignIn';
import Layout from '@/components/Layout';

const Home: NextPageWithLayout = () => {
	return <SignIn />;
};

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Home;
