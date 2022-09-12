import { ReactElement } from 'react';

import { NextPageWithLayout } from '@/pages/_app.page';
import Layout from '@/components/Layout';
import SignIn from '@/components/SignIn';

const LoginXState: NextPageWithLayout = () => {
	const handleChangeState = (state: any) => {
		console.log(state);
	};

	return <SignIn onStateChange={handleChangeState} />;
};

LoginXState.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default LoginXState;
