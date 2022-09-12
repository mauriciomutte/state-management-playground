import { ReactElement, useMemo, useState } from 'react';

import { NextPageWithLayout } from '@/pages/_app.page';
import Layout from '@/components/Layout';
import { AuthStates, getComponentToRender } from '@/utils/getComponentToRender';

const Home: NextPageWithLayout = () => {
	const [currentState, setCurrentState] = useState<AuthStates>('login');

	const handleChangeState = (state: AuthStates) => setCurrentState(state);

	const ComponentToRender = useMemo(
		() => getComponentToRender(currentState),
		[currentState]
	);

	return <ComponentToRender onStateChange={handleChangeState} />;
};

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Home;
