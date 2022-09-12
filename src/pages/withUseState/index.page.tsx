import { ReactElement, useMemo, useState } from 'react';
import Head from 'next/head';

import { NextPageWithLayout } from '@/pages/_app.page';
import Layout from '@/components/Layout';
import { AuthStates, getComponentToRender } from '@/utils/getComponentToRender';

const LoginSimpleState: NextPageWithLayout = () => {
	const [currentState, setCurrentState] = useState<AuthStates>('login');

	const handleChangeState = (state: AuthStates) => setCurrentState(state);

	const ComponentToRender = useMemo(
		() => getComponentToRender(currentState),
		[currentState]
	);

	return (
		<>
			<Head>
				<title>with useState</title>
			</Head>
			<ComponentToRender onStateChange={handleChangeState} />
		</>
	);
};

LoginSimpleState.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default LoginSimpleState;
