import { ReactElement, useMemo, useState } from 'react';

import { NextPageWithLayout } from '@/pages/_app.page';
import Layout from '@/components/Layout';
import { AuthStates, getComponentToRender } from '@/utils/getComponentToRender';
import Head from 'next/head';

const Home: NextPageWithLayout = () => {
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

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Home;
