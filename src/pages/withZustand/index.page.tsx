import { ReactElement, useMemo } from 'react';
import Head from 'next/head';

import { NextPageWithLayout } from '@/pages/_app.page';
import Layout from '@/components/Layout';
import { AuthStates, getComponentToRender } from '@/utils/getComponentToRender';
import { useAuthStore } from '@/pages/withZustand/stores/authStore';

const LoginZustand: NextPageWithLayout = () => {
	const { state, changeState } = useAuthStore();

	const handleChangeState = (state: AuthStates) => changeState(state);

	const ComponentToRender = useMemo(() => getComponentToRender(state), [state]);

	return (
		<>
			<Head>
				<title>with Zustand</title>
			</Head>
			<ComponentToRender onStateChange={handleChangeState} />
		</>
	);
};

LoginZustand.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default LoginZustand;
